/* global Office, Word, document */

Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
        document.getElementById("format-selection-btn").onclick = formatSelection;
        document.getElementById("insert-template-btn").onclick = insertSectionTemplate;
        setStatus("Ready.");
    }
});

/**
 * Parses text containing our lightweight narrative-reporting syntax:
 *   **bold**
 *   *italic*
 *   {{unresolved_token}}
 * into an ordered list of segments describing how each piece should be
 * formatted. Plain text between matches is returned as unformatted
 * segments. This mirrors the same syntax used by the SAC widget's
 * Markdown+token content model (see notes/requirements/sap-sac-narrative-reporting.md).
 */
function parseSegments(text) {
    const segments = [];
    const pattern = /\*\*(.+?)\*\*|\*(.+?)\*|\{\{(.+?)\}\}/g;
    let lastIndex = 0;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            segments.push({ text: text.slice(lastIndex, match.index) });
        }

        if (match[1] !== undefined) {
            segments.push({ text: match[1], bold: true });
        } else if (match[2] !== undefined) {
            segments.push({ text: match[2], italic: true });
        } else if (match[3] !== undefined) {
            segments.push({ text: `{{${match[3]}}}`, unresolved: true });
        }

        lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) {
        segments.push({ text: text.slice(lastIndex) });
    }

    return segments.filter((s) => s.text.length > 0);
}

/** Applies bold/italic/highlight formatting to a Word Range based on a parsed segment. */
function applySegmentFormatting(range, segment) {
    range.font.bold = !!segment.bold;
    range.font.italic = !!segment.italic;
    if (segment.unresolved) {
        // Flags unresolved {{token}} placeholders so the author notices
        // before finalizing the document. Comment this out if your Word
        // version doesn't support highlightColor.
        range.font.highlightColor = "#FFA500";
    }
}

async function formatSelection() {
    try {
        await Word.run(async (context) => {
            const range = context.document.getSelection();
            range.load("text");
            await context.sync();

            const sourceText = range.text;
            const segments = parseSegments(sourceText);

            if (segments.length === 0) {
                setStatus("Nothing to format — selection was empty.");
                return;
            }

            // Replace the selection with the first segment, then chain
            // subsequent segments after it. insertText returns a Range
            // representing the newly inserted text, which is what lets us
            // apply different formatting to each piece.
            let currentRange = range.insertText(segments[0].text, Word.InsertLocation.replace);
            applySegmentFormatting(currentRange, segments[0]);

            for (let i = 1; i < segments.length; i++) {
                currentRange = currentRange.insertText(segments[i].text, Word.InsertLocation.after);
                applySegmentFormatting(currentRange, segments[i]);
            }

            await context.sync();
            setStatus(`Formatted ${segments.length} segment(s).`);
        });
    } catch (error) {
        setStatus("Error: " + error.message);
        console.error(error);
    }
}

async function insertSectionTemplate() {
    try {
        await Word.run(async (context) => {
            const headings = [
                "Executive Summary",
                "Variance Analysis",
                "Personnel Changes",
                "Outlook & Next Steps"
            ];

            let anchor = context.document.getSelection();

            for (const heading of headings) {
                const headingParagraph = anchor.insertParagraph(heading, Word.InsertLocation.after);
                headingParagraph.styleBuiltIn = Word.BuiltInStyleName.heading2;
                anchor = headingParagraph.insertParagraph("Add commentary here...", Word.InsertLocation.after);
            }

            await context.sync();
            setStatus("Inserted section template.");
        });
    } catch (error) {
        setStatus("Error: " + error.message);
        console.error(error);
    }
}

function setStatus(message) {
    document.getElementById("status-message").textContent = message;
}
