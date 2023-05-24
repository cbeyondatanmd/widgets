(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body id="ASA12312SASDCX">
</body>
`;


	class Tools extends HTMLElement {
  constructor() {
	  super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
	  
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

            xhr.open('GET', 'https://cbeyondata.us10.hcs.cloud.sap/sap/fpa/ui/tenants/89c3d/bo/application/4440C400929F5B7F088D18DD21CD4AB2?mode=embed',false);
            xhr.send();                
            shadowRoot.innerHTML = `<!DOCTYPE html>
<!-- Important Note: Please edit the associated template file. The html file is generated automatically. -->
<html>
  <head>
<!-- begin: headPrelude -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>

    <meta http-equiv="Cache-Control" content="no-cache"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>

    <meta name="viewport" content="width=device-width, user-scalable=no" />

    <meta name="apple-itunes-app" content="app-id=981727250" />

    <base href="/sap/fpa/ui/">

    <link rel="shortcut icon" href="favicon.b6b3ef42eac71a4aaf34.ico">
<!-- end: headPrelude -->
<!-- begin: orcaBaseHelpers -->
    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        if (!!document.documentMode) {
            window.location.href = "/sap/fpa/ui/public/error/unexpectedErrorPage.xsjs?browserCheck=internet_explorer"
        }
    </script>
    <script data-ui5-config type="application/json">
        {
  "theme": "sap_belize"
}
    </script>
    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        window["sap-ui-config"] = {
  "theme": "sap_belize",
  "language": "en",
  "libs": "sap.ui.commons,sap.m,sap.ui.ux3,sap.ui.table,sap.ui.richtexteditor,sap.ui.layout",
  "resourceRoots": {
    "sap.fpa.sparca.ui": "/sap/fpa/services/dm/sparca/dataWrangler/js"
  },
  "preload": "async",
  "productive": true
};
    </script>
    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        (function() {
            let _isLWV = "APP" === "LWV";
            if ("APP" === "MIX") {
                if (sessionStorage.getItem("forceAppFlow") === "true") {
                    sessionStorage.removeItem("forceAppFlow");
                    _isLWV = false;
                } else {
                    _isLWV = ((hash) => {
    if (hash && navigator.userAgent.indexOf("JavaScriptCore") === -1) {
        const parseQuery = (query, delim = "&") => {
            return (query || "").split(delim).reduce((params, pair) => {
                const [key, value] = pair.split("=");
                params[key] = value;
                return params;
            },{});
        };
        let resourceID = "";

        hash = decodeURIComponent(hash.replace(/((^#?[;/]?)|(;$))/g, ""));

        if (hash.match(/^([^&?]*)/)[1].indexOf("=") > 0) {
            const params = parseQuery(hash, ";");
            resourceID = params.storyId || params.resource_id;
            if (!/^story2?$/.test(params.view_id) || params.mode === "edit") {
                return false;
            }
        } else {
            const [main, inner] = hash.split(/&\//);
            const tool = main.split("?")[0];
            if (!inner || !tool || !/^story2?$/.test(tool) || !((tool === "story" && inner.match(/^s\//)) || (tool === "story2" && inner.match(/^s2\//)))) {
                return false;
            }
            const [path, query] = inner.split("?");
            const params = parseQuery(query);
            if (params.mode === "edit" || params.mode === "create" || (tool === "story" && params.resourceSubType === "TEMPLATE" && !!params.resourceId)) {
                return false;
            }
            const args = path.match(/^s2?\/(.*)$/)?.[1].replace(/\/$/, "").split("/") || [];
            if (args.length > 1) { 
                return false;
            }
            resourceID = args[0] || (tool === "story" ? params.resourceId || params.resource_id : params.resource_id || (!params.resourceType || params.resourceType.toUpperCase() === "STORY" ? params.resourceId : ""));
        }

        return !!resourceID && !localStorage.getItem("ORCA_STORY::" + resourceID);
    }
    return false;
})(location.hash);
                }
            }

            let _confirmLanguageLoaded;
            let _failLanguageLoaded;
            let _uiAssetsConfigPromise;
            let _buildManifestPromise;
            const _manifestEntryPointName = _isLWV ? "lite-viewer-entry" : "app";
            const _uiAssetsRelativePath = _isLWV ? "/uiAssets/liteViewer" : "";
            const _uiAssetsFallbackPath = "/sap/fpa/ui" + _uiAssetsRelativePath;
            let _hasPreLoadedMainChunks = false;
            let _currentTheme = "sap_belize";
            const _thirdpartyPath = "/resources/sap/ui/thirdparty/";
            const _thirdPartyFiles = [
                "jqueryui/jquery-ui-core.js",
                "jqueryui/jquery-ui-widget.js",
                "jqueryui/jquery-ui-mouse.js",
                "jqueryui/jquery-ui-resizable.js",
                "jqueryui/jquery-ui-effect.js",
                "jqueryui/jquery-ui-sortable.js",
                "jqueryui/jquery-ui-draggable.js",
                "jqueryui/jquery-ui-droppable.js"
            ];
            if (_isLWV) {
                _thirdPartyFiles.unshift("jquery.js");
            }
            const _supportedThemes = {
                "sap_belize": true
            };
            const _aliasThemes = {
                "sap_fiori_3_hcb": "sap_belize_hcb",
                "sap_fiori_3_hcw": "sap_belize_hcw",
                "sap_horizon_hcb": "sap_belize_hcb",
                "sap_horizon_hcw": "sap_belize_hcw"
            };
            const _ui5_to_sac = {
                "zh": "zh-CN",
                "zf": "zh-TW",
                "6n": "en-GB",
                "1p": "pt-PT",
                "1x": "es-MX",
                "3f": "fr-CA",
                "iw": "he",
                "nb": "no",
                "sr_latn": "sh",
                "zh_hant": "zh-TW",
            };

            function loadUIAssetsConfig() {
                if (_uiAssetsConfigPromise) {
                    return _uiAssetsConfigPromise;
                }

                function removeTrailingSlash(path) {
                    return path[path.length - 1] === "/" ? path.slice(0, -1) : path;
                }
                if (_isLWV && sessionStorage.orcaLiteDevProxy) {
                    orca.uiAssetsPath = removeTrailingSlash(sessionStorage.orcaLiteDevProxy);
                    _uiAssetsConfigPromise = Promise.resolve();
                } else if (sessionStorage.orcaDevProxy && !_isLWV) {
                    orca.uiAssetsPath = removeTrailingSlash(sessionStorage.orcaDevProxy);
                    _uiAssetsConfigPromise = Promise.resolve();
                } else {
                    if ("https://assets.sapanalytics.cloud/production/uiAssets-2023.8.7" !== "undefined") {
                        orca.uiAssetsPath = removeTrailingSlash("https://assets.sapanalytics.cloud/production/uiAssets-2023.8.7") + _uiAssetsRelativePath;
                    }
                    _uiAssetsConfigPromise = Promise.resolve();
                }
                return _uiAssetsConfigPromise;
            }

            function preloadList(list, prefix, testFn) {
                if (Array.isArray(list)) {
                    list.forEach(link => {
                        if (testFn ? testFn(link) : true) {
                            addPreloadLink(prefix + link, "script");
                        }
                    });
                }
            }

            function preloadMainChunks() {
                if (!_hasPreLoadedMainChunks) {
                    orca.storyPerfTimeStart("StoryPerformanceLogging - Load and compile main chunk");
                    if (!_isLWV) {
                        preloadChunks(new RegExp("(\\.|\\_)firefly-runtime?.*\\.js$"));
                        preloadChunks(new RegExp("(\\.|\\_)firefly-olap?.*\\.js$"));
                        preloadChunks(new RegExp("(\\.|\\_)firefly-protocol?.*\\.js$"));
                    }
                    if (_manifestEntryPointName) {
                        const entrypoints = orca.buildManifest && orca.buildManifest.entrypoints;
                        if (entrypoints && entrypoints[_manifestEntryPointName] && Array.isArray(entrypoints[_manifestEntryPointName]) && entrypoints[_manifestEntryPointName].length) {
                            preloadList(entrypoints[_manifestEntryPointName], orca.uiAssetsPath + "/");
                        }
                        if (!_isLWV && orca.buildManifest && orca.buildManifest.mainChunksJS && orca.buildManifest.mainChunksJS.length) {
                            preloadList(orca.buildManifest.mainChunksJS, orca.uiAssetsPath + "/");
                        }
                    }

                    _hasPreLoadedMainChunks = true;
                }
            }

            function loadJSEntryPoint(opts) {
                getBuildManifest().finally(function() {
                    if (opts.preloadChunks) {
                        preloadMainChunks();
                    }
                    const entrypoints = orca.buildManifest && orca.buildManifest.entrypoints;
                    let uiAssetsPath = orca.uiAssetsPath;

                    const loadFallback = () => {
                        console.log("Attempting to load the fallback entry point.");
                            uiAssetsPath = orca.uiAssetsPath = _uiAssetsFallbackPath;
                        orca.fallback = true;
                        getBuildManifest(true).finally(() => {
                            const fallbackEntryPoints = orca.buildManifest && orca.buildManifest.entrypoints[_manifestEntryPointName];
                            if (opts.preloadChunks) {
                                preloadMainChunks();
                            }
                            if (fallbackEntryPoints) {
                                fallbackEntryPoints.forEach(fallbackEntryPointName => {
                                    orca.addScript(uiAssetsPath + "/" + fallbackEntryPointName, undefined, () => {
                                        console.log("Failed to load the fallback entry point: " + uiAssetsPath);
                                        if (opts.redirectXSJSErrorPage) {
                                            window.location.href = "/sap/fpa/ui/public/error/unexpectedErrorPage.xsjs" + (orca.tenant ? "?tenant=" + orca.tenant : "");
                                        }
                                    });
                                });
                            } else {
                                console.log("Failed to load the fallback entry point: " + uiAssetsPath);
                            }
                        });
                    };

                    if(_manifestEntryPointName && entrypoints && entrypoints[_manifestEntryPointName] && Array.isArray(entrypoints[_manifestEntryPointName]) && entrypoints[_manifestEntryPointName].length) {
                        entrypoints[_manifestEntryPointName].forEach(entryPointName => {
                            orca.addScript(uiAssetsPath + "/" + entryPointName, undefined, () => {
                                console.log("Failed to load the app entry point: " + uiAssetsPath);
                                loadFallback();
                            });
                        });
                    } else {
                        loadFallback();
                    }
                    Promise.all([getBuildManifest(), orca.sessionPromise]).then(promiseResponses => {
                        const sessionLanguage = (promiseResponses && promiseResponses[1] && promiseResponses[1][0] && promiseResponses[1][0].session && promiseResponses[1][0].session.language) ? promiseResponses[1][0].session.language : "en";
                        loadLanguageResources(sessionLanguage);
                    }).catch(err => {
                        _failLanguageLoaded();
                        console.debug("Error loading language property files. " + err.message);
                    });
                });
            }

            function loadOrcaCSSStyle(opts) {
                let uiAssetsPath = orca.uiAssetsPath;

                function fallback() {
                    uiAssetsPath = orca.uiAssetsPath = _uiAssetsFallbackPath;
                    orca.fallback = true;
                    getBuildManifest(true).finally(() => {
                        const fallbackCssEntrypointFilenames = orca.buildManifest && orca.buildManifest.cssEntrypoints[_manifestEntryPointName] || [];
                        fallbackCssEntrypointFilenames.forEach(cssFilename => {
                            orca.addStylesheet(uiAssetsPath + "/" + cssFilename, () => {
                                console.log("Failed to load the fallback entry point: " + uiAssetsPath);
                                if (opts.redirectXSJSErrorPage) {
                                    window.location.href = "/sap/fpa/ui/public/error/unexpectedErrorPage.xsjs" + (orca.tenant ? "?tenant=" + orca.tenant : "");
                                }
                            });
                        });
                    });

                }
                function addOrcaCSS() {
                    const cssEntrypoints = orca.buildManifest.cssEntrypoints;
                    if (_manifestEntryPointName && cssEntrypoints && cssEntrypoints[_manifestEntryPointName]) {
                        cssEntrypoints[_manifestEntryPointName].forEach(entryPointFileName => {
                            orca.addStylesheet(uiAssetsPath + "/" + entryPointFileName, () => {
                                console.log("Attempting to load the fallback entry point.");
                                fallback();
                            });
                        });
                    } else {
                        fallback();
                    }
                }

                if (opts.waitForUI5) {
                    sap.ui.getCore().attachInit(() => {
                        getBuildManifest().finally(addOrcaCSS);
                    });
                } else {
                    getBuildManifest().finally(addOrcaCSS);
                }
            }

            function loadSapUi5Scripts(fnOnLoad, fnOnError) {
                orca.storyPerfTimeStart("StoryPerformanceLogging - Load UI5 core");
                orca.infraPerfTimeStart("InfraPerformanceLogging - Load UI5 core");

                function onLoadPerfTimeEndWrapper(fn) {
                    return () => {
                        orca.storyPerfTimeEnd("StoryPerformanceLogging - Load UI5 core");
                        orca.infraPerfTimeEnd("InfraPerformanceLogging - Load UI5 core");
                        fn();
                    };
                }

                orca.isDebugLog = (orca.uriParams["sap-debug-log"] || "").toLowerCase() === "true";
                const coreSapUi5File = (orca.uriParams["sap-ui-debug"] || "").toLowerCase() === "true" ? "sap-ui-core-dbg.js" : "sap-ui-core.js";
                orca.addScript(orca.sapUi5Url + "/resources/" + coreSapUi5File, onLoadPerfTimeEndWrapper(fnOnLoad), onLoadPerfTimeEndWrapper(fnOnError));
            }

            function preloadSapUi5Styles() {
                const prefix = orca.sapUi5Url + "/resources/sap";
                const suffix = _currentTheme + "/library.css";

                [
                    "/ui/core/themes/",
                    "/ui/layout/themes/",
                    "/ui/unified/themes/",
                    "/ui/commons/themes/",
                    "/m/themes/",
                    "/ui/ux3/themes/",
                    "/ui/table/themes/",
                    "/ui/richtexteditor/themes/"
                ].forEach(path => addPreloadLink(prefix + path + suffix, "style", true));
            }

            function loadThirdParties(onLoadCallback) {
                const prefix = orca.sapUi5Url + _thirdpartyPath;

                function loadTP(files) {
                    if (files === undefined || !files.length) {
                        return onLoadCallback;
                    }
                    return () => orca.addScript(prefix + files.shift(), loadTP(files));
                }

                loadTP(_thirdPartyFiles.slice())();
            }

            function loadLanguageResources(sessionLanguage) {
                try {
                    const hashObject = orca.buildManifest.localizationResourcesHashesPerLocale;
                    let languageChosen = sessionLanguage;
                    let languageSet = false;

                    if (typeof hashObject[languageChosen] !== "string") {
                        if (typeof hashObject["en"] === "string") {
                            languageChosen = "en";
                        } else if (typeof hashObject[""] === "string") {
                            languageChosen = "";
                        } else {
                            _failLanguageLoaded();
                        }
                    }

                    const loadLanguage = function(url, resolve, reject) {
                        const xhr = new XMLHttpRequest();
                        xhr.open("GET", url, true);
                        xhr.onload = () => {
                            try {
                                const data = JSON.parse(xhr.responseText);
                                orca.localizationResourcesLoadingObject = data._localizationResourcesObject;
                                languageSet = true;
                                resolve();
                            } catch (err) {
                                reject && reject() || resolve()
                            }
                        };
                        xhr.onerror = reject || resolve;
                        xhr.send();
                    };
                    const createUrlToLocalizedResource = (function(template, name, path, langHashMap){
                        const localizedResourcesTemplate =  template;
                        const localizedResourcesName = name;
                        const uiAssetsPath = path;
                        const hashObject = langHashMap;
                        const preparedUrl = uiAssetsPath + "/" + localizedResourcesTemplate;
                        return function(language) {
                            return preparedUrl.replace("[language]", language).replace("[contenthash]", hashObject[language]).replace("[name]", localizedResourcesName);
                        };
                    })(orca.buildManifest.localizedResourcesTemplate, orca.buildManifest.localizedResourcesName, orca.uiAssetsPath, hashObject);

                    new Promise((resolve, reject) => {
                        loadLanguage(createUrlToLocalizedResource(languageChosen), resolve, reject);
                    }).then(() => {}, () => {
                        return new Promise(resolve => {
                            if (languageChosen === "en") {
                                loadLanguage(createUrlToLocalizedResource(""), resolve);
                            } else if (languageChosen === "") {
                                resolve();
                            } else {
                            }
                        });
                    }).then(() => {}, () => {
                        return new Promise(resolve => loadLanguage(createUrlToLocalizedResource(""), resolve));
                    }).then(() => {
                        if (languageSet) {
                            _confirmLanguageLoaded();
                        } else {
                            _failLanguageLoaded();
                        }
                    });
                } catch (e) {
                    _failLanguageLoaded();
                }
            }

            function getEmbeddedAppSessionPromise() {
                if (window.EmbeddedAppSession && window.EmbeddedAppSession.getSession && window.EmbeddedAppSession.getHeaders) {
                    const rawSession = window.EmbeddedAppSession.getSession();
                    const rawHeaders = window.EmbeddedAppSession.getHeaders();
                    if (rawSession && rawHeaders) {
                        try {
                            const session = typeof rawSession === "string" ? JSON.parse(rawSession) : rawSession;
                            const headers = typeof rawHeaders === "string" ? JSON.parse(rawHeaders) : rawHeaders;
                            return new Promise(resolve => {
                                const xhr = {
                                    status: 200,
                                    getResponseHeader: key => headers[key.toLowerCase()]
                                };
                                resolve([session, 200, xhr]);
                            });
                        } catch (e) {
                            console.log("Failed to parse EmbeddedAppSession JSON object");
                        }
                    }
                    return null;
                }
            }

            function getAuthPromise() {
                return Promise.resolve();
            }

            function loadUserSession() {
                window.FPA_CSRF_TOKEN = orca.uriParams.fpaCsrfToken;

                const embeddedAppSessionPromise = getEmbeddedAppSessionPromise();
                if (embeddedAppSessionPromise) {
                    orca.sessionPromise = embeddedAppSessionPromise;
                } else if (!orca.sessionPromise) {
                    orca.infraPerfTimeStart("Load session");
                    orca.sessionPromise = getAuthPromise().then(() => new Promise((resolve, reject) => {
                        orca.loadSessionXHR(resolve, reject, window.FPA_CSRF_TOKEN, false);
                    }));
                }
            }

            function adjustURLRequestedLocale() {
                if (orca.uriParams["lang"]) {
                    let sLang = orca.uriParams["lang"];
                    const adjustLang = sTestLang => _ui5_to_sac[sTestLang] && (orca.uriParams["lang"] = _ui5_to_sac[sTestLang]);

                    if (sLang === "system") {
                        sLang = orca.uriParams["lang"] = navigator.language;
                    }

                    sLang = sLang.toLowerCase().replace("-", "_");

                    if (!/zh_tw/.test(sLang) && !adjustLang(sLang)) {
                        adjustLang(sLang.replace(/_.*$/, ""));
                    }
                }
            }

            function getNormalizedLocale(sLang, bUseDefault) {
                let sLangCode = bUseDefault ? "en" : undefined;
                if (sLang) {
                    const aAcceptedLang = orca.supportedLocales;
                    if (aAcceptedLang.length) {
                        const sRequestLang = sLang.toLowerCase().replace("-", "_");
                        aAcceptedLang.some(sAcceptedLang => {
                            const sTestLang = sAcceptedLang.toLowerCase();
                            if (sRequestLang === sTestLang) {
                                sLangCode = sAcceptedLang;
                                return true;
                            } else if (sRequestLang.indexOf("_") > 0 && sRequestLang.substr(0, sRequestLang.indexOf("_")) === sTestLang) {
                                sLangCode = sAcceptedLang;
                            }
                        });
                    }
                }

                return sLangCode;
            }

            function getDataAccessLanguageFromURL() {
                const adjustLang = (sLang) => {
                    if (sLang) {
                        const sTestLang = sLang.toLowerCase().replace("-", "_");
                        if (sTestLang === "zh_cn") {
                            sLang = "zh";
                        } else if (sTestLang === "zh_tw") {
                            sLang = "zf";
                        } else if (sTestLang === "en_gb") {
                            sLang = "en_UK";
                        } else if (sTestLang === "de_ch") {
                            sLang = "de";
                        }
                    }
                    return sLang;
                };
                let sDataAccessLanguage;
                let sReceivedDataAccessLanguage = orca.uriParams["dataAccessLanguage"] || adjustLang(orca.uriParams["lang"]);
                if (sReceivedDataAccessLanguage) {
                    sReceivedDataAccessLanguage = sReceivedDataAccessLanguage.replace("-", "_");
                    sDataAccessLanguage = sReceivedDataAccessLanguage.toLowerCase();
                    sDataAccessLanguage = orca.supportedDALocales.find(sSupported => sDataAccessLanguage === sSupported.toLowerCase());

                    if (!sDataAccessLanguage) {
                        const aMatchedDataAccessLanguageArray = sReceivedDataAccessLanguage.match(/^[a-zA-Z_]{2,14}$/);
                        sDataAccessLanguage = aMatchedDataAccessLanguageArray ? aMatchedDataAccessLanguageArray[0] : undefined;
                    }
                }
                return sDataAccessLanguage;
            }

            function resizeResourceTimingBuffer() {
                if (orca.uriParams["enableRAPTR"] === "true") {
                    const bufferSizeOverride = Number(orca.uriParams["resTimingBufferSize"]);
                    const bufferSize = isNaN(bufferSizeOverride) ? 1000 : bufferSizeOverride;
                    if (window.performance && window.performance.setResourceTimingBufferSize && window.sap && bufferSize > 0) {
                        window.performance.setResourceTimingBufferSize(bufferSize);
                    }
                }
            }

            function perfTimeEndPerformanceLog(markName) {
                if (window.performance && window.performance.mark) {
                    window.performance.mark("EndOf[" + markName + "0]");
                    const start = window.performance.getEntriesByName("StartOf[" + markName + "0]");
                    if (start && start.length) {
                        window.performance.measure(markName, "StartOf[" + markName + "0]", "EndOf[" + markName + "0]");
                        const measures = window.performance.getEntriesByName(markName, "measure");
                        if (measures.length === 1) {
                            sessionStorage.setItem(markName, measures[0].duration);
                        }
                    } else {
                        const storedStart = sessionStorage.getItem(markName);
                        if (storedStart) {
                            console.timeEnd(markName + " since html loaded");
                            sessionStorage.removeItem(markName);
                        }
                    }
                }
            }

            function performanceMark(mark) {
                if (orca.uriParams["INFRA_PERFORMANCE_LOGGING"]) {
                    if (window.performance.mark) {
                        window.performance.mark(mark);
                    } else {
                        console.log("warning: performance.mark() not supported!");
                    }
                }
            }

            function performanceMeasure(name, startMark, endMark) {
                if (orca.uriParams["INFRA_PERFORMANCE_LOGGING"]) {
                    if (window.performance.measure) {
                        window.performance.measure(name, startMark, endMark);
                    } else {
                        console.log("warning: performance.measure() not supported!");
                    }
                }
            }

            function addPreloadLink(href, type, removeCrossOrigin) {
                const script = document.createElement("link");
                script.rel = "preload";
                script.href = href;
                script.as = type;
                if (!removeCrossOrigin) {
                    script.crossOrigin = "anonymous";
                }
                document.head.appendChild(script);
            }

            function preloadChunks(targetRegex) {
                preloadList(orca.buildManifest.assets, orca.uiAssetsPath + "/", asset => targetRegex.test(asset));
            }

            function getBuildManifest(fallback) {
                if (false && (_isLWV ? !sessionStorage.orcaLiteDevProxy : !sessionStorage.orcaDevProxy)) {
                    orca.buildManifest = undefined[_isLWV ? "LWV" : "APP"];
                    _buildManifestPromise = new Promise(resolve => {
                        preloadMainChunks();
                        resolve({
                            status: 200,
                            getResponseHeader: () => undefined
                        });
                    });
                } else {
                    if (!_buildManifestPromise || fallback) {
                        _buildManifestPromise = new Promise ((resolve, reject) => {
                            const xhr = new XMLHttpRequest();
                            let url = orca.uiAssetsPath + "/uiAssets/build-manifest.json";
                            if (!orca._productionDomains.some(domain => url.includes(domain))) {
                                url += (/\?/.test(url) ? "&" : "?") + "_=" + orca._buildTimestamp;
                            }
                            xhr.open("GET", url, true);
                            xhr.onload = () => {
                                try {
                                    orca.buildManifest = JSON.parse(xhr.responseText);
                                } catch (err) {
                                    console.debug("Error parsing manifest file: " + err.message);
                                } finally {
                                    resolve(xhr);
                                }
                                preloadMainChunks();
                            };
                            xhr.onerror = () => {
                                console.log("Could not get the manifest file: " + xhr.status);
                                reject(xhr);
                            };
                            xhr.send();
                        });
                    }
                }
                return _buildManifestPromise;
            }

            function getFTforRaptr(featureToggle) {
                let featureOn = !featureToggle || orca.uriParams[featureToggle] === "true" || orca.uriParams["enableRAPTR"] === "true";
                if (!_isLWV && !featureOn) {
                    try {
                        if (sap.fpa.ui.infra.common.FeatureToggle.hasFeatures()) {
                            featureOn = sap.fpa.ui.infra.common.FeatureToggle.isActive(featureToggle);
                        }
                    } catch(err) { }
                }
                return featureOn;
            }

            function getNormalizedURL(sURL) {
                const oURL = new URL(sURL);
                const requiredTheme = orca.urlRequestedTheme = oURL.searchParams.get("sap-ui-theme");

                if (requiredTheme && requiredTheme !== _currentTheme) {
                    if (_supportedThemes[requiredTheme]) {
                        _currentTheme = requiredTheme;
                    } else {
                        if (_aliasThemes[requiredTheme] && _supportedThemes[_aliasThemes[requiredTheme]]) {
                            _currentTheme = _aliasThemes[requiredTheme];
                        }
                        orca.uriParams["sap-ui-theme"] = _currentTheme;

                        oURL.searchParams.set("sap-ui-theme", _currentTheme);
                        sURL = oURL.toString();
                    }
                }
                if (orca.urlRequestedTheme === _currentTheme) {
                    delete orca.urlRequestedTheme;
                }

                return sURL;
            }

            window.orca = {
                _buildTimestamp: 1684474937431,
                _productionDomains: Object.freeze([
  "assets.sapanalytics.cloud",
  "assets.sapanalyticscloud.cn"
]),
                useNativeXhr: true, 
                requestedEntryPoint: _isLWV ? "lite-viewer-entry" : "orca-app",
                uriParams: {},
                tenant: undefined,
                buildManifest: {  
                    assets: [],
                    entrypoints:[]
                },
                isMixFlowAvailable: true,
                isRunningDevServer: false,
                uiAssetsPath: _uiAssetsFallbackPath,
                supportedLocales: [
  "ar",
  "bg",
  "zh_CN",
  "zh_TW",
  "hr",
  "ca",
  "cs",
  "cy",
  "nl",
  "da",
  "en",
  "en_GB",
  "fi",
  "fr",
  "fr_CA",
  "de",
  "de_CH",
  "el",
  "et",
  "lv",
  "he",
  "hi",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "ms",
  "no",
  "pl",
  "pt",
  "pt_PT",
  "ro",
  "ru",
  "sh",
  "sk",
  "sl",
  "es",
  "es_MX",
  "sv",
  "th",
  "tr",
  "uk",
  "en_US_sappsd",
  "en_US_saprigi"
],
                supportedDALocales: [
  "af",
  "ar",
  "bg",
  "ca",
  "zh",
  "zf",
  "hr",
  "cs",
  "cy",
  "da",
  "nl",
  "en_UK",
  "en",
  "et",
  "fa",
  "fi",
  "fr_CA",
  "fr",
  "de",
  "el",
  "he",
  "hi",
  "hu",
  "is",
  "id",
  "it",
  "ja",
  "kk",
  "ko",
  "lv",
  "lt",
  "ms",
  "no",
  "pl",
  "pt",
  "pt_PT",
  "z1",
  "ro",
  "ru",
  "sr",
  "sh",
  "sk",
  "sl",
  "es",
  "es_MX",
  "sv",
  "th",
  "tr",
  "uk",
  "vi"
],
                loadSessionXHR: function(resolve, reject, csrfToken, ensureLogon = false) {
                    const xhr = new XMLHttpRequest();
                    const url = "/sap/fpa/services/rest/epm/session" + "?action=logon" + (orca.tenant ? "&tenantName=" + orca.tenant : "") +
                            (orca.urlRequestedLocale ? "&lang=" + orca.urlRequestedLocale : "") +
                            (orca.urlDataAccessLanguage ? "&dataAccessLanguage=" + orca.urlDataAccessLanguage : "");
                    xhr.open("GET", url, true);
                    xhr.setRequestHeader("X-CSRF-Token", csrfToken ? csrfToken : "Fetch");
                    xhr.setRequestHeader("X-Referrer-Hash", window.location.hash);
                    xhr.setRequestHeader("cache-control", "no-cache");
                    xhr.onload = () => {
                        if (ensureLogon) {
                            if (xhr.getResponseHeader("x-csrf-token") === "unsafe") {
                                location.href = "/sap/hana/xs/formLogin/login.html?x-sap-origin-location=" + encodeURIComponent(location.pathname + location.search);
                            }
                        }
                        let sessionResponse = xhr.responseText;
                        try {
                            if (xhr.getResponseHeader("com.sap.cloud.security.login") === "login-request") {
                                location.reload();
                            }
                            sessionResponse = JSON.parse(xhr.responseText);
                            if (sessionResponse.session.language) {
                                sessionResponse.session.language = getNormalizedLocale(sessionResponse.session.language, true);
                            }
                        } catch (err) {
                            console.debug("Error parsing session JSON." + err.message);
                        } finally {
                            orca.isNode = sessionResponse && sessionResponse.isNode;
                            resolve([sessionResponse, xhr.status, xhr]);
                            orca.infraPerfTimeEnd("Load session");
                        }
                    };
                    xhr.onerror = () => {
                        reject([xhr, xhr.status]);
                    };
                    xhr.send();
                },

                loadLanguageResourcePromise: new Promise ((resolve, reject) => {
                    _confirmLanguageLoaded = resolve;
                    _failLanguageLoaded = reject;
                }),
                getFormattedTime: () => {
                    const oDate = new Date();
                    return oDate.toLocaleTimeString() + "." + oDate.toISOString().slice(-4, -1) + " ms";
                },
                perfConsoleLog: (message, appendTime) => {
                    if (orca.uriParams["sap-raptr-console"]) {
                        console.log(message + (appendTime ? orca.getFormattedTime() : ""));
                    }
                },
                getSessionPerfLog: (message, featureToggle) => {
                    if (getFTforRaptr(featureToggle) && window.sap && sap.raptr) {
                        const duration = sessionStorage.getItem(message);
                        if (duration) {
                            sap.raptr.externalMeasure(message, duration);
                            sessionStorage.removeItem(message);
                            orca.perfConsoleLog(message + ": " + duration + "ms");
                        }
                    }
                },
                perfTimeStart: (message, featureToggle, store2Session, id, enableExclusion) => {
                    if (getFTforRaptr(featureToggle)) {
                        orca.perfConsoleLog(message + " - Timer starts ", true);
                        if (store2Session) {
                            console.time(message + " since html loaded");
                            let appHtmlLoadStart;
                            if (window.performance && window.performance.timeOrigin) {
                                appHtmlLoadStart = window.performance.timeOrigin;
                            } else {
                                appHtmlLoadStart = (new Date()).getTime();
                            }
                            sessionStorage.setItem(message, appHtmlLoadStart);
                        } else {
                            if (window.sap && sap.raptr) {
                                sap.raptr.logBegin(message, id, 1, enableExclusion);
                            } else if (window.performance && window.performance.mark) {
                                window.performance.mark("StartOf[" + message + "0]");
                            }
                        }
                    }
                },
                perfTimeEnd: (message, featureToggle, id, usageTrackingThreshold, duplicateWin, measureType, customInfo, excludeInMark, properties) => {
                    if (getFTforRaptr(featureToggle)) {
                        orca.perfConsoleLog(message + " - Timer ends ", true);
                        if (!duplicateWin) {
                            duplicateWin = "FIRST";
                        }
                        if (window.sap && sap.raptr) {
                            const endName = sap.raptr.logEnd(message, id, duplicateWin, 1, usageTrackingThreshold, measureType, customInfo, excludeInMark, properties);
                            if (orca.uriParams["sap-raptr-console"] && endName.indexOf("StartOf") !== 0) {
                                const measures = sap.raptr.getEntriesByName(message, "measure");
                                if (measures.length) {
                                    orca.perfConsoleLog(message + ": " + measures[measures.length - 1].duration + "ms");
                                }
                            }
                        } else {
                            perfTimeEndPerformanceLog(message);
                        }

                    }
                },
                infraPerfTimeStart: (message, store2Session) => orca.perfTimeStart(message, "INFRA_PERFORMANCE_LOGGING", store2Session),
                infraPerfTimeEnd: message => orca.perfTimeEnd(message, "INFRA_PERFORMANCE_LOGGING"),
                storyPerfTimeStart: (message, store2Session) => orca.perfTimeStart(message, "STORY_PERFORMANCE_LOGGING", store2Session),
                storyPerfTimeEnd: message => orca.perfTimeEnd(message, "STORY_PERFORMANCE_LOGGING"),
                userFriendlyPerfTimeActionEnd: (message, usageTrackingThreshold, duplicateWin) => orca.perfTimeEnd(message, null, null, usageTrackingThreshold, duplicateWin, "userFriendly", "ActionTiming"),
                externalPerfLog: (message, duration, featureToggle, id, usageTrackingThreshold, startTime, measureType, measureDetail, customInfo) => {
                    if (getFTforRaptr(featureToggle) && !isNaN(duration)) {
                        orca.perfConsoleLog(message + ": " + duration + "ms");
                        if (window.sap && window.sap.raptr) {
                            sap.raptr.externalMeasure(message, duration, id, usageTrackingThreshold, startTime, measureType, measureDetail, customInfo);
                        }
                    }
                },
                userFriendlyPerfTimeStart: (widgetMeasure, widgetType, widgetId, widgetSubmeasure) => {
                    const raptrId = widgetMeasure + "_" + widgetType + "_" + widgetId;
                    const widgetSubmeasureStr = widgetSubmeasure ? ", Submeasure: "" + widgetSubmeasure + """ : "";
                    orca.perfTimeStart("Measure: " + widgetMeasure + ", Type: " + widgetType + ", ID: " + widgetId + widgetSubmeasureStr, null, null, raptrId);
                },
                userFriendlyPerfTimeEnd: (widgetMeasure, widgetType, widgetTitle, widgetId, widgetSubmeasure, keyValueData) => {
                    const raptrId = widgetMeasure + "_" + widgetType + "_" + widgetId;
                    const widgetSubmeasureStr = widgetSubmeasure ? ", Submeasure: "" + widgetSubmeasure + """ : "";
                    orca.perfTimeEnd("Measure: " + widgetMeasure + ", Type: " + widgetType + ", ID: " + widgetId + widgetSubmeasureStr, null, raptrId, null, "ONE", "userFriendly", {widgetTitle: widgetTitle, keyValueData: keyValueData});
                },
                userFriendlyPerfTimeActionStart: message => orca.perfTimeStart(message),
                userFriendlyPerfTimeActionExternalTime: (message, duration, usageTrackingThreshold, startTime) => orca.externalPerfLog(message, duration, null, null, usageTrackingThreshold, startTime, "userFriendly", null, "ActionTiming"),
                performanceMeasurementFlags: {
                    successfulLogon: false,
                    enteringCredential: false,
                    openingPresentation: false,
                    isTemporaryStory: false
                },
                addStylesheet: (href, fnOnError) => {
                    const link = document.createElement("link");
                    link.type = "text/css";
                    link.rel = "stylesheet";
                    link.href = href;
                    if (fnOnError) {
                        link.onerror = fnOnError;
                    }

                    document.head.appendChild(link);
                },
                forceCloseUserFriendlyOpenLogs: () => {
                    orca.perfTimeEnd("View Story", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("Load Story from URL", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("View Presentation", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("Load Presentation from URL", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("View Application Runtime", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("Load Application Runtime from URL", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("View Application", null, null, null, "ONE", null, null, null, {forceClose: true});
                    orca.perfTimeEnd("Load Application from URL", null, null, null, "ONE", null, null, null, {forceClose: true});
                },
                performanceMarkStart: mark => performanceMark("StartOf[" + mark + "]"),
                performanceMarkEnd: mark => performanceMark("EndOf[" + mark + "]"),
                performanceMeasureStartToEnd: mark => performanceMeasure(mark, "StartOf[" + mark + "]", "EndOf[" + mark + "]"),
                addScript: (src, fnOnLoad, fnOnError) => {
                    const script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = src;
                    script.crossOrigin = "anonymous";
                    if (fnOnLoad) {
                        script.onload = fnOnLoad;
                    }
                    if (fnOnError) {
                        script.onerror = fnOnError;
                    }
                    document.head.appendChild(script);
                },
                loadEntryPoints: opts => {
                    if (_isLWV) {
                        opts.waitForUI5 = false;
                    }

                    function loadThirdPartiesCont() {
                        loadJSEntryPoint(opts);

                        if (opts.extractCSS && _manifestEntryPointName.length) {
                            loadOrcaCSSStyle(opts);
                        }
                    }
                    function loadScripts() {
                        loadThirdParties(() => {
                            resizeResourceTimingBuffer();
                            if (!_isLWV) {
                                orca.storyPerfTimeStart("StoryPerformanceLogging - Load UI5 core - Part 2");

                                if (orca.isDebugLog) {
                                    const Log = sap.ui.require("sap/base/Log");
                                    Log.setLevel(Log.Level.DEBUG);
                                }

                                sap.ui.getCore().attachInit(() => orca.storyPerfTimeEnd("StoryPerformanceLogging - Load UI5 core - Part 2"));
                            }
                            if (opts.configurableUIAssetsLocation) {
                                loadUIAssetsConfig().finally(loadThirdPartiesCont);
                            } else {
                                loadThirdPartiesCont();
                            }
                        });
                    }

                    if (opts.configurableUIAssetsLocation) {
                        loadUIAssetsConfig().then(getBuildManifest);
                    }
                    loadUserSession();

                    preloadList(_thirdPartyFiles, orca.sapUi5Url + _thirdpartyPath);

                    if (_isLWV) {
                        loadScripts();
                    } else {
                        loadSapUi5Scripts(loadScripts);
                        preloadSapUi5Styles();
                    }
                }
            };


            if (location.search) {
                location.search.substr(1).split("&").forEach(item => {
                    const parts = item.split("=");
                    orca.uriParams[parts[0]] = parts[1] && decodeURIComponent(parts[1]);
                });
            }

            const sURL = getNormalizedURL(location.href);
            if (sURL !== location.href) {
                history.replaceState(undefined, undefined, sURL);
            }

            orca.tenant = orca.uriParams.tenant;
            if (!orca.tenant) {
                const pathFragments = location.pathname.split("/");
                const indexOfTenantsFragment = pathFragments.indexOf("tenants");
                if (indexOfTenantsFragment > -1) {
                    orca.tenant = pathFragments[indexOfTenantsFragment + 1];
                }
            }
            if (orca.tenant) {
                orca.tenant = orca.tenant.toUpperCase();
            }

            adjustURLRequestedLocale();
            orca.urlRequestedLocale = getNormalizedLocale(orca.uriParams["lang"]);
            orca.urlDataAccessLanguage = getDataAccessLanguageFromURL();

            const orcaFqdn = window.location.hostname.split(".");
            if ((orca.uriParams["sapui5-china"] || "").toLowerCase() === "true" || orcaFqdn.length >= 2 && orcaFqdn[1].substr(0,2).toUpperCase() === "CN") {
                orca.sapUi5Url = "https://sapui5.cn1.platform.sapcloud.cn/1.108.2";
            } else {
                orca.sapUi5Url = "https://sapui5.hana.ondemand.com/1.108.2";
            }

            if (window !== window.parent) {
                orca._getNormalizedURL = getNormalizedURL;
            }


            setTimeout(() => {
                document.body.classList.add("sapUiSizeCompact");
            });
        }());
        //# sourceURL=orcaBaseHelpers.js
    </script>
<!-- end: orcaBaseHelpers -->

    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        const href = location.href;

        orca.performanceMarkStart("sap.fpa.ui:app.html-loading");
        orca.infraPerfTimeStart("InfraPerformanceLogging - Total Time for the user to see the home page", true);

        if (href.indexOf("storyId=") > -1 || href.indexOf("presentationId=") > -1 || href.indexOf("&/s/") > -1 || href.indexOf("&/db/") > -1) {
            orca.storyPerfTimeStart("StoryPerformanceLogging - Total Time for the user to see the story", true);
        }
        if (window.sessionStorage) {
            if (!window.sessionStorage.getItem("Log On")) {
                orca.perfTimeStart("Log On", null, true);
            } else {
                const storedTime = window.sessionStorage.getItem("Log On");
                const nowDate = (new Date()).getTime();
                if (window.performance && window.performance.timeOrigin && window.performance.now) {
                    const offset = nowDate - window.performance.timeOrigin + window.performance.now();
                    window.sessionStorage.setItem("Log On", (storedTime - offset));
                }
                if ((nowDate - storedTime) > 10000) {
                    orca.perfTimeStart("Log On", null, true);
                }
            }
            console.time("Log On since html loaded");
        }
    </script>


    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        document.addEventListener("visibilitychange", orca.forceCloseUserFriendlyOpenLogs);

        if (window.sessionStorage) {
            window.sessionStorage.removeItem("StoryPerformanceLogging - [SubTotal] Main View");
            window.sessionStorage.removeItem("StoryPerformanceLogging - App Start");
            window.sessionStorage.removeItem("Load Presentation from URL");
            window.sessionStorage.removeItem("Load Story from URL");
            window.sessionStorage.removeItem("Load Application Runtime from URL");
            window.sessionStorage.removeItem("Load Application from URL");
        }

        orca.storyPerfTimeStart("StoryPerformanceLogging - [SubTotal] Main View", true);
        orca.storyPerfTimeStart("StoryPerformanceLogging - App Start", true);

        if (document.visibilityState && document.visibilityState !== "hidden") {
            if ((href.indexOf("&/db/") > -1 && href.indexOf("mode=edit") < 0) || (href.indexOf("view_id=digital-boardroom-view") > -1 && href.indexOf("presentationId=") > -1)) {
                orca.perfTimeStart("Load Presentation from URL", null, true);
            } else if (href.indexOf("&/s/") > -1 || href.indexOf("view_id=story") > -1 || href.indexOf("&/s2/") > -1 || href.indexOf("view_id=story2") > -1) {
                orca.perfTimeStart("Load Story from URL", null, true);
            } else if ((href.indexOf("view_id=appBuilding") > -1 && href.indexOf("appId=") > -1) || href.indexOf("&/aa/") > -1) {
                if (href.indexOf("mode=view") > -1 || href.indexOf("mode=present") > -1 || href.indexOf("mode=embed") > -1 || href.indexOf("shellMode=embed") > -1) {
                    orca.perfTimeStart("Load Application Runtime from URL", null, true);
                } else {
                    orca.perfTimeStart("Load Application from URL", null, true);
                }
            }
        }
    </script>

<!-- begin: loadEntryPoints -->
    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        orca.loadEntryPoints({
            waitForUI5: true,
            preloadChunks: true,
            redirectXSJSErrorPage: true,
            configurableUIAssetsLocation: true,
            extractCSS: true,
        });
    </script>
<!-- end: loadEntryPoints -->

    <script type="text/javascript" nonce="62317817-3a25-4d5d-a5a0-4e7aee0304c0">
        orca.performanceMarkEnd("sap.fpa.ui:app.html-loading");
        orca.performanceMeasureStartToEnd("sap.fpa.ui:app.html-loading");
    </script>

  </head>

  <body class="sapUiBody" role="application">
    <div id="content"></div>
  </body>
</html>`;  
	    

	  
  }

		postMessage(url, body, csrf) {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open("POST",window.origin + url,false);

            if (csrf)
            {
                xhr.setRequestHeader("X-CSRF-Token", csrf);                
            }

            xhr.setRequestHeader("Content-Type", "text/plain");
			xhr.send(body);

            const obj = JSON.parse(xhr.responseText);
            var rtn = [];
            //document.getElementById("demo").innerHTML = obj.Data.header.findIndex((x) => x === "ID");
            for (let i = 0; i < obj.Data.member.length; i++) 
            {
                rtn.push(obj.Data.member[i][obj.Data.header.findIndex((x) => x === "ID")]);
            }

			return rtn.join("|");

            }	  

        getCSRFToken()
        {
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

            xhr.open("GET", window.origin + "/sap/fpa/services/rest/epm/session?action=logon",false);
            xhr.setRequestHeader("X-CSRF-Token", "Fetch");
            xhr.send();                
            return xhr.getResponseHeader("x-csrf-token");           
        }

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = {
				...this._props,
				...changedProperties
			};
		}
		onCustomWidgetAfterUpdate(changedProperties) {

		}
	}
	customElements.define("com-cbeyondata-tools", Tools);
})();
