(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<html class="sap-desktop sapUiTheme-sap_belize sapUiMedia-Std-Desktop sapUiMedia-StdExt-Desktop sapHcsS2IFullscreen" dir="ltr" data-sap-ui-browser="cr109" data-sap-ui-os="win10" lang="en" data-sap-ui-animation="on" data-sap-ui-animation-mode="full" style="height: 100%;"><head><ui5-shared-resources></ui5-shared-resources>
<!-- begin: headPrelude -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <meta name="viewport" content="width=device-width, user-scalable=no">

    <meta name="apple-itunes-app" content="app-id=981727250">

    <base href="/sap/fpa/ui/">

    <link rel="shortcut icon" href="favicon.b6b3ef42eac71a4aaf343c3c76ae1b07.ico">
<!-- end: headPrelude -->
<!-- begin: orcaBaseHelpers -->
    <script type="text/javascript">
        if (!!document.documentMode) {
            window.location.href = "/sap/fpa/ui/public/error/unexpectedErrorPage.xsjs?browserCheck=internet_explorer"
        }
    </script>
    <script type="text/javascript">
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
    <script type="text/javascript">
        (function() {
            let _confirmLanguageLoaded;
            let _failLanguageLoaded;
            let _uiAssetsConfigPromise;
            let _buildManifestPromise;
            const _manifestEntryPointName = "app";
            const _uiAssetsRelativePath = "";
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
            const _supportedThemes = {
                "sap_belize": true
            };
            const _aliasThemes = {
                "sap_fiori_3_hcb": "sap_belize_hcb",
                "sap_fiori_3_hcw": "sap_belize_hcw"
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
                "sr": "sh",
                "zh-hant": "zh-TW",
            };

            function loadUIAssetsConfig() {
                if (_uiAssetsConfigPromise) {
                    return _uiAssetsConfigPromise;
                }

                function removeTrailingSlash(path) {
                    return path[path.length - 1] === "/" ? path.slice(0, -1) : path;
                }
                if (sessionStorage.orcaDevProxy) {
                    orca.uiAssetsPath = removeTrailingSlash(sessionStorage.orcaDevProxy);
                    _uiAssetsConfigPromise = Promise.resolve();
                } else {
                    if ("https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3" !== "undefined") {
                        orca.uiAssetsPath = removeTrailingSlash("https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3") + _uiAssetsRelativePath;
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
                    preloadChunks(new RegExp("(\\.|\\_)uqm\-([^\-]+\-){0,1}chunk(?:(?!localization).)*\\.js$"));
                    preloadChunks(new RegExp("(\\.|\\_)firefly-runtime?.*\\.js$"));
                    preloadChunks(new RegExp("(\\.|\\_)firefly-olap?.*\\.js$"));
                    preloadChunks(new RegExp("(\\.|\\_)firefly-protocol?.*\\.js$"));
                    if (_manifestEntryPointName) {
                        const entrypoints = orca.buildManifest && orca.buildManifest.entrypoints;
                        if (entrypoints && entrypoints[_manifestEntryPointName] && Array.isArray(entrypoints[_manifestEntryPointName]) && entrypoints[_manifestEntryPointName].length) {
                            preloadList(entrypoints[_manifestEntryPointName], orca.uiAssetsPath + "/");
                        }
                        if (orca.buildManifest && orca.buildManifest.mainChunksJS && orca.buildManifest.mainChunksJS.length) {
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
                    let sLang = orca.uriParams["lang"].toLowerCase();
                    const adjustLang = sTestLang => _ui5_to_sac[sTestLang] && (orca.uriParams["lang"] = _ui5_to_sac[sTestLang]);

                    if (sLang === "system") {
                        sLang = orca.uriParams["lang"] = navigator.language;
                    }
                    if (!/zh[-_]tw/i.test(sLang) && !adjustLang(sLang)) {
                        adjustLang(sLang.replace(/[-_].*$/, ""));
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
                let sDataAccessLanguage;
                let sReceivedDataAccessLanguage = orca.uriParams["dataAccessLanguage"] || orca.uriParams["lang"];
                if (sReceivedDataAccessLanguage) {
                    sReceivedDataAccessLanguage = sReceivedDataAccessLanguage.replace("-", "_");
                    const aMatchedDataAccessLanguageArray = sReceivedDataAccessLanguage.match(/^[a-zA-Z_]{2,14}$/);
                    sDataAccessLanguage = aMatchedDataAccessLanguageArray ? aMatchedDataAccessLanguageArray[0] : undefined;
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
                if (!sessionStorage.orcaDevProxy && false) {
                    orca.buildManifest = undefined;
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
                if (!featureOn) {
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
                _buildTimestamp: 1674065693908,
                _productionDomains: Object.freeze([
  "assets.sapanalytics.cloud",
  "assets.sapanalyticscloud.cn"
]),
                useNativeXhr: true, 
                requestedEntryPoint: "orca-app",
                uriParams: {},
                tenant: undefined,
                buildManifest: {  
                    assets: [],
                    entrypoints:[]
                },
                isRunningDevServer: false,
                uiAssetsPath: "/sap/fpa/ui" + _uiAssetsRelativePath,
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
                perfTimeEnd: (message, featureToggle, id, usageTrackingThreshold, duplicateWin, measureType, customInfo, excludeInMark) => {
                    if (getFTforRaptr(featureToggle)) {
                        orca.perfConsoleLog(message + " - Timer ends ", true);
                        if (!duplicateWin) {
                            duplicateWin = "FIRST";
                        }
                        if (window.sap && sap.raptr) {
                            const endName = sap.raptr.logEnd(message, id, duplicateWin, 1, usageTrackingThreshold, measureType, customInfo, excludeInMark);
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
                    const widgetSubmeasureStr = widgetSubmeasure ? ', Submeasure: "' + widgetSubmeasure + '"' : "";
                    orca.perfTimeStart("Measure: " + widgetMeasure + ", Type: " + widgetType + ", ID: " + widgetId + widgetSubmeasureStr, null, null, raptrId);
                },
                userFriendlyPerfTimeEnd: (widgetMeasure, widgetType, widgetTitle, widgetId, widgetSubmeasure, keyValueData) => {
                    const raptrId = widgetMeasure + "_" + widgetType + "_" + widgetId;
                    const widgetSubmeasureStr = widgetSubmeasure ? ', Submeasure: "' + widgetSubmeasure + '"' : "";
                    orca.perfTimeEnd("Measure: " + widgetMeasure + ", Type: " + widgetType + ", ID: " + widgetId + widgetSubmeasureStr, null, raptrId, null, "ONE", "userFriendly", {widgetTitle: widgetTitle, keyValueData: keyValueData});
                },
                userFriendlyPerfTimeActionStart: message => orca.perfTimeStart(message),
                userFriendlyPerfTimeActionEnd: (message, usageTrackingThreshold, duplicateWin) => orca.perfTimeEnd(message, null, null, usageTrackingThreshold, duplicateWin, "userFriendly", "ActionTiming"),
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
                    orca.perfTimeEnd("View Story", null, null, null, "ONE");
                    orca.perfTimeEnd("Load Story from URL", null, null, null, "ONE");
                    orca.perfTimeEnd("View Presentation", null, null, null, "ONE");
                    orca.perfTimeEnd("Load Presentation from URL", null, null, null, "ONE");
                    orca.perfTimeEnd("View Application Runtime", null, null, null, "ONE");
                    orca.perfTimeEnd("Load Application Runtime from URL", null, null, null, "ONE");
                    orca.perfTimeEnd("View Application", null, null, null, "ONE");
                    orca.perfTimeEnd("Load Application from URL", null, null, null, "ONE");
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
                    function loadThirdPartiesCont() {
                        loadJSEntryPoint(opts);

                        if (opts.extractCSS && _manifestEntryPointName.length) {
                            loadOrcaCSSStyle(opts);
                        }
                    }
                    function loadScripts() {
                        loadThirdParties(() => {
                            resizeResourceTimingBuffer();
                            orca.storyPerfTimeStart("StoryPerformanceLogging - Load UI5 core - Part 2");

                            // If debug logging is enabled, configure the log level of the common logging frameworks accordingly
                            // UI5 is done here very early but others must be done later after webpack initializes (see entryPointHelper.js))
                            if (orca.isDebugLog) {
                                const Log = sap.ui.require("sap/base/Log");
                                Log.setLevel(Log.Level.DEBUG);
                            }

                            sap.ui.getCore().attachInit(() => orca.storyPerfTimeEnd("StoryPerformanceLogging - Load UI5 core - Part 2"));
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

                    loadSapUi5Scripts(loadScripts);
                    preloadSapUi5Styles();
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
                orca.sapUi5Url = "https://sapui5.cn1.platform.sapcloud.cn/1.102.10";
            } else {
                orca.sapUi5Url = "https://sapui5.hana.ondemand.com/1.102.10";
            }

            if (window !== window.parent) {
                orca._getNormalizedURL = getNormalizedURL;
            }
        }());
        //# sourceURL=orcaBaseHelpers.js
    </script>
<!-- end: orcaBaseHelpers -->

    <script>
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


    <script>
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
            } else if (href.indexOf("&/s/") > -1 || href.indexOf("view_id=story") > -1) {
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
    <script>
        orca.loadEntryPoints({
            waitForUI5: true,
            preloadChunks: true,
            redirectXSJSErrorPage: true,
            configurableUIAssetsLocation: true,
            extractCSS: true,
        });
    </script><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-core.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-widget.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-mouse.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-resizable.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-effect.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-sortable.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-draggable.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-droppable.js" as="script" crossorigin="anonymous"><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap-ui-core.js" crossorigin="anonymous"></script><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/core/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/layout/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/unified/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/commons/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/m/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/ux3/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/table/themes/sap_belize/library.css" as="style"><link rel="preload" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/richtexteditor/themes/sap_belize/library.css" as="style">
<!-- end: loadEntryPoints -->

    <script>
        orca.performanceMarkEnd("sap.fpa.ui:app.html-loading");
        orca.performanceMeasureStartToEnd("sap.fpa.ui:app.html-loading");
    </script>

  <link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.uqm-date-chunk.ed129c31c4f8eeb70462.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.firefly-runtime-chunk.ea2eb35bd4e1bbc5bbbb.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.firefly-olap-chunk.e86f7eb334b928f2c295.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/43.main.d07891f91aa295698b26.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/69.main.c643845dd08b3ec08ce0.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/68.main.5b4e395bc6fc0767144f.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.main.2118b5b2c7968b5b44d5.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.1.26ca615eac23025b6662.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.2.65ef1c7f6123917b09c3.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.4.734ce20007dff57a49c3.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.3.9f471abca3239539ed01.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.38.a2abd6c3d513db8f127c.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.42.dd2e0eada698144024a4.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.40.3ff5f682522e15c8a7be.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.44.1b8952c4cd14e7737087.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.59.b262d1b2907ae90e3683.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.63.6c7ce4dc6aa741446a60.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/68.main.5b4e395bc6fc0767144f.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/75.main.45d1c561b1074928de5c.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/77.main.0ef8364db9d865114257.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.81.c62dbc29450b0741b0ea.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.84.0f37b0f1f80e07d892ce.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.91.6defbffb6a21a00c3831.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.94.a7e5818e989697fdfdbd.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.98.715364e0776530fe1f62.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/97.main.97ae9cc714d1b840af90.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.146.2e92f68badee1ec1baba.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.142.6eda2a4df004418cfcb4.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.495.449c8d1696e5e10418ba.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.99.0d1afef8e5b12bd39757.js" as="script" crossorigin="anonymous"><link rel="preload" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.chunk.main-chunk.2b776caa0f67d6e67817.js" as="script" crossorigin="anonymous"><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/core/library-preload.js" data-sap-ui-module="sap/ui/core/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/commons/library-preload.js" data-sap-ui-module="sap/ui/commons/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/m/library-preload.js" data-sap-ui-module="sap/m/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/ux3/library-preload.js" data-sap-ui-module="sap/ui/ux3/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/table/library-preload.js" data-sap-ui-module="sap/ui/table/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/richtexteditor/library-preload.js" data-sap-ui-module="sap/ui/richtexteditor/library-preload.js"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/layout/library-preload.js" data-sap-ui-module="sap/ui/layout/library-preload.js"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-core.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-widget.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-mouse.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-resizable.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-effect.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-sortable.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-draggable.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/thirdparty/jqueryui/jquery-ui-droppable.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/43.main.d07891f91aa295698b26.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/69.main.c643845dd08b3ec08ce0.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/68.main.5b4e395bc6fc0767144f.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.main.2118b5b2c7968b5b44d5.js" crossorigin="anonymous"></script><script src="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/unified/library-preload.js" data-sap-ui-module="sap/ui/unified/library-preload.js"></script><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/core/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.core" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/layout/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.layout" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/unified/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.unified" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/commons/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.commons" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/m/themes/sap_belize/library.css" id="sap-ui-theme-sap.m" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/ux3/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.ux3" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/table/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.table" data-sap-ui-ready="true"><link rel="stylesheet" href="https://sapui5.hana.ondemand.com/1.102.10/resources/sap/ui/richtexteditor/themes/sap_belize/library.css" id="sap-ui-theme-sap.ui.richtexteditor" data-sap-ui-ready="true"><link type="text/css" rel="stylesheet" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/app.main.a5dd8d14c280440c3141.css"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/91.main.c2175f87957cbeec5e71.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/94.main.4ac42f822be66793bcd7.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/495.main.1118c5df3c9db7791f5f.css" crossorigin="anonymous"><title>SAP Analytics Cloud</title><link id="orca-css-variable" type="text/css" rel="stylesheet" href="theme/sap_belize/css_variables.css"><style id="sap-ui-theme-hcs-shell" type="text/css">/****** search ******/
 .sapHcsShellBar .sapHcsShellBarSearch { max-width: 27.5rem; min-width: 2.25rem; flex-grow: 1; flex-shrink: 1; box-sizing: border-box; } .sapHcsShellBar .sapHcsShellBarSearch .sapMSF { max-width: 25rem; min-width: auto; margin-right: 0.5rem; height: 2.75rem; padding: 0.25rem 0; } .sapHcsShellBar .sapHcsShellBarSearch .sapHcsShellBarSearchCancelButton { margin-left: 0.5rem; display: none; } .sapHcsShellBar .sapHcsShellBarSearch .sapHcsShellBarSearchWrap { display: flex; width: 100%; } .sapHcsShellBar .sapHcsShellBarSearch .sapHcsShellBarSearchWrap .sapMBtn { flex-shrink: 0; } .sapHcsShellBar .sapHcsShellBarSearch.sapHcsShellBarSearchOpenTick { min-width: 12rem; } .sapHcsShellBar .sapHcsShellBarSearchOverflowToolbar { max-width: 100%; width: 100%; } .sapHcsShellBar .sapHcsShellBarSearchOverflowToolbar .sapMBtnContent { text-align: left; } .sapHcsShellBar .sapHcsShellBarSearch .sapMSF .sapMSFF { height: 2.25rem; line-height: 2.125rem; padding-left: 0.625rem; } .sapHcsShellBar .sapHcsShellBarSearch .sapMSF .sapMSFI { height: 2.125rem; } .sapHcsShellBar .sapHcsShellBarSearch .sapMSF .sapMSFB { width: 2.125rem; height: 2.125rem; line-height: 2.125rem; font-size: 1rem; text-align: center; margin: 0; padding: 0; right: 0; top: 0; } .sapHcsShellBarSearchWrap .sapHcsShellBarSearchOverflowToolbar { max-width: 100%; width: 100%; } .sapHcsShellBarSearchWrap .sapHcsShellBarSearchOverflowToolbar .sapMBtnContent { text-align: left; } .sapUiSizeCompact .sapMSelectListItem.sapHcsShellBarSearchSuggestionItem { pointer-events: none; font-weight: bold; } .sapUiSizeCompact .sapMSelectListItem.sapHcsShellBarSearchSuggestionItem .sapMSuggestionItemIcon { vertical-align: middle; } .sapUiSizeCompact .sapMSelectListItem.sapHcsShellBarSearchSuggestionBusy { padding-top: 0.1875rem; text-align: center; } .sapHcsShellBar.sapHcsShellBarFullSearch .sapHcsShellBarSearch { visibility: visible; } .sapHcsShellBar.sapHcsShellBarFullSearch .sapHcsShellBarSearchWrap { box-sizing: border-box; width: 100%; padding: 0 1.25rem; position: absolute; left: 0; top: 0; } .sapHcsShellBar.sapHcsShellBarFullSearch .sapMSF, .sapHcsShellBar.sapHcsShellBarFullSearch .sapHcsShellBarSearch { max-width: 100%; } .sapHcsShellBar.sapHcsShellBarFullSearch .sapHcsShellBarSearchFullWidth { height: 100%; min-width: 1px; } .sapHcsShellBar.sapHcsShellBarFullSearch .sapHcsShellBarSearch .sapHcsShellBarSearchCancelButton { display: block; } 
/****** end of search ******/
/****** shellHeader ******/
 .sapHcsShell .sapHcsShellHeader > .sapMBtn { margin-right: 0.25rem; margin-left: 0.25rem; flex-shrink: 0; } .sapHcsShell .sapHcsShellHeader .sapHcsShellBar.sapMTB { height: 2.75rem; flex-grow: 1; flex-shrink: 1; } .sapHcsShell .sapHcsShellTitle .sapMBtn, .sapHcsShellHeader .sapMBtn { height: 2.75rem; padding: 0.25rem 0; } .sapHcsShell .sapHcsShellTitle .sapMBtnInner, .sapHcsShellHeader .sapMBtnInner { height: 2.25rem; min-width: 2.25rem; } .sapUiSizeCompact .sapHcsShell .sapHcsShellTitle .sapMBtnInner.sapMBtnIconFirst, .sapUiSizeCompact .sapHcsShellHeader .sapMBtnInner.sapMBtnIconFirst { padding-left: 0; padding-right: 0; } .sapHcsShellHeader .sapMMenuBtn.sapMMenuBtnRegular .sapMBtnInner:after { height: 2.25rem; line-height: 2.25rem; } .sapHcsShellHeader .sapMText.sapHcsShellNavBreadcrumbsText[data-dirty="true"]:after { content: "*"; padding-left: 0.25rem; position: absolute; right: 0; top: 0.125rem; } .sapHcsShellHeader .sapMText.sapHcsShellNavBreadcrumbsText[data-dirty="true"], .sapHcsShellHeader .sapMMenuBtn.sapMMenuBtnRegular[data-dirty="true"] .sapMBtnContent { position: relative; padding-right: 0.5rem; box-sizing: border-box; } .sapHcsShellHeader .sapMMenuBtn.sapMMenuBtnRegular[data-dirty="true"] .sapMBtnContent:after { content: "*"; height: 2.25rem; line-height: 2.25rem; padding-left: 0.25rem; position: absolute; right: 0; top: 0.125rem; } .sapHcsShellHeader .sapMText.sapHcsShellNavBreadcrumbsText { min-width: 2rem; max-width: 16rem; flex-shrink: 0; flex-basis: auto; } .sapHcsShellHeader .sapHcsShellBar[data-bc=file] .sapMText.sapHcsShellNavBreadcrumbsText, .sapHcsShellHeader .sapHcsShellBar[data-bc=file] .sapMMenuBtn.sapHcsShellNavBreadcrumbsText .sapMBtnContent, .sapHcsShellHeader .sapHcsShellBar[data-bc=tool] .sapHcsShellNavBreadcrumbsTitle, .sapHcsShellHeader .sapHcsShellBar[data-bc=space] .sapHcsShellNavBreadcrumbsSpace, .sapHcsShellHeader .sapHcsShellBar[data-bc=path] .sapMBreadcrumbs .sapMBreadcrumbsCurrentLocation { font-weight: bold; } .sapHcsShellHeader .sapMMenuBtn { min-width: 4rem; max-width: 16rem; flex-shrink: 0; flex-basis: auto; } .sapHcsShellHeader .sapMText.sapHcsShellNavBreadcrumbsText.sapMTBShrinkItem, .sapHcsShellHeader .sapMMenuBtn.sapMTBShrinkItem { flex-shrink: 100; flex-grow: 0; } .sapHcsShell .sapHcsShellTitle .sapMBtnContent, .sapHcsShellHeader .sapMBtnContent { line-height: 2.125rem; } .sapUiTheme-sap_belize_hcb .sapHcsShellHeader span.sapMBtnInner.sapMBtnEmphasized > .sapMBtnContent, .sapUiTheme-sap_belize_hcw .sapHcsShellHeader span.sapMBtnInner.sapMBtnEmphasized > .sapMBtnContent, .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader span.sapMBtnInner.sapMBtnEmphasized > .sapMBtnContent, .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader span.sapMBtnInner.sapMBtnEmphasized > .sapMBtnContent { line-height: 2rem; } .sapHcsShell .sapHcsShellTitle .sapMBtnIcon, .sapHcsShellHeader .sapMBtnIcon { width: 2.125rem; font-size: 1rem; line-height: 2.125rem; max-height: 2.375rem; margin: 0; padding: 0; } .sapHcsShellHeader .sapHcsShellHomeIcon { height: 2rem; } .sapHcsShellHeader .sapHcsShellBarHiddenItem { display: none; } .sapHcsShellBar .sapUiHiddenPlaceholder + .sapHcsShellHomeIcon { margin-left: 1rem; } .sapHcsShellHeader .sapHcsShellBarOverflowButton[data-notifications], .sapHcsShellHeader .sapHcsShellNotifications[data-notifications] { overflow: visible; } .sapHcsShellHeader .sapHcsShellBarOverflowButton[data-notifications]:after, .sapHcsShellHeader .sapHcsShellNotifications[data-notifications]:after, .sapMPopover .sapHcsShellNotifications[data-notifications]:after { content: attr(data-notifications); position: absolute; top: 0.125rem; right: -0.125rem; box-sizing: border-box; padding: 0 0.3125rem; border-radius: 1.125rem; height: 1.125rem; max-width: 3.75rem; line-height: 1.125rem; font-size: 0.6875rem; font-family: "72","72full",Arial,Helvetica,sans-serif; background-color: #D04343; border: 1px solid #D04343; color: #FFFFFF; text-overflow: ellipsis; overflow: hidden; } .sapHcsShellHeader .sapHcsShellNotifications ~ .sapHcsShellBarOverflowButton:after, .sapHcsShellHeader .sapHcsShellBarOverflowButton[data-notifications=""]:after, .sapHcsShellHeader .sapHcsShellNotifications[data-notifications=""]:after, .sapMPopover .sapHcsShellNotifications[data-notifications=""]:after { display: none; } .sapHcsShellHeader .sapHcsShellHomeIcon:focus, .sapHcsShellNavBreadcrumbsSegment:not(.sapMLnkDsbl):focus { outline-color: #fff !important; } html.sap-desktop .sapMBtn.sapHcsShellUserInfo:focus>.sapMFocusable { outline-offset: -2px; } .sapHcsShellHeader .sapHcsShellBreadcrumbsIcon { color: #FFFFFF; } .sapHcsShellHeader .sapHcsShellUserInfo .sapMImg { border-radius: 50%; } .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner { display: flex; justify-content: center; } .sapUiTheme-sap_belize_hcw .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner, .sapUiTheme-sap_belize_hcb .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner, .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner, .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner { border-color: transparent; } .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner:after { content: ""; display: inline-block; vertical-align: middle; height: 100%; } .sapHcsShellHeader .sapHcsShellUserInfo.sapMBtn .sapMBtnInner .sapHcsShellUserAvatar { vertical-align: middle; } .sapHcsShellHeader .sapHcsShellUserInfo .sapHcsShellUserAvatar { margin-top: 0.0625rem; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbsSegment { color: #FFFFFF !important; text-decoration: none !important; opacity: 1 !important; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbsSpace { min-width: 2.5rem; max-width: 16rem; flex-shrink: 0; flex-basis: auto; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbsSpace.sapMTBShrinkItem { flex-shrink: 1; flex-grow: 0; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbs:not(:empty):before { content: "/"; color: #FFFFFF; font-size: .875rem; position: absolute; left: 0; top: 0.0625rem; } html[data-sap-ui-os^="mac"] .sapHcsShellHeader .sapHcsShellNavBreadcrumbs:not(:empty):before { top: auto; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbs .sapMBreadcrumbsSeparator { color: #FFFFFF; } .sapHcsShellHeader .sapHcsShellBar.sapMTB { padding-right: 0; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapMBarChild, .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapMBarChild:first-child { margin-left: 0.25rem; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapMBarChild, .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapMBarChild:last-child { margin-right: 0.25rem; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbsParent, .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbsTitle { min-width: 1.75rem; max-width: 16rem; flex-shrink: 0; flex-basis: auto; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbsParent { margin-right: 0; cursor: default; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbsParent.sapMTBShrinkItem, .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbsTitle.sapMTBShrinkItem { flex-shrink: 0.01; flex-grow: 0; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbsParent:after { content: "/"; color: #FFFFFF; font-size: .875rem; line-height: 1.25rem; padding-left: 0.25rem; font-weight: normal; } .sapHcsShellHeader .sapHcsShellNavBreadcrumbsSegment, .sapHcsShellHeader .sapMText.sapHcsShellNavBreadcrumbsText, .sapHcsShellHeader .sapMLabel, .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbs { line-height: 2rem; } .sapHcsShellHeader .sapHcsShellBar.sapMTB .sapHcsShellNavBreadcrumbs { padding-left: 0.5rem; position: relative; margin-right: 0; margin-left: 0; margin-bottom: 0; flex-grow: 0; } .sapHcsShellHeader .sapMBtn:hover > .sapMBtnHoverable.sapMToggleBtnPressed:not(.sapMBtnActive) { border-color: #283848; background-color: #23303E; } .sapUiTheme-sap_belize_hcb .sapHcsShellHeader .sapMBtn:hover:not(.sapHcsShellUserInfo) > .sapMBtnHoverable.sapMToggleBtnPressed:not(.sapMBtnActive), .sapUiTheme-sap_belize_hcw .sapHcsShellHeader .sapMBtn:hover:not(.sapHcsShellUserInfo) > .sapMBtnHoverable.sapMToggleBtnPressed:not(.sapMBtnActive), .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader .sapMBtn:hover:not(.sapHcsShellUserInfo) > .sapMBtnHoverable.sapMToggleBtnPressed:not(.sapMBtnActive), .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader .sapMBtn:hover:not(.sapHcsShellUserInfo) > .sapMBtnHoverable.sapMToggleBtnPressed:not(.sapMBtnActive) { border-color: #ababab; } .sapHcsShellHeader .sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapHcsShellHeader .sapMTB-Transparent-CTX .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled) { background-color: #23303E; border-color: #23303E; } .sapUiTheme-sap_belize_hcb .sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_belize_hcw .sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_fiori_3_hcb .sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_fiori_3_hcw .sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_belize_hcb .sapHcsShellHeader .sapMTB-Transparent-CTX .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_belize_hcw .sapHcsShellHeader .sapMTB-Transparent-CTX .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader .sapMTB-Transparent-CTX .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled), .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader .sapMTB-Transparent-CTX .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled) { border-color: #ababab; } .sapHcsShellHeader .sapMBtn:focus .sapMBtnInner { outline-color: #fff !important; } .sapHcsShellHeader .sapMBtn:focus .sapMBtnFocusDiv { border-color: transparent; } .sapHcsShellHeader .sapMBtn .sapMBtnInner:after, .sapHcsShellHeader .sapMBtn .sapMBtnIcon { background: transparent; color: #D1E8FF; } html.sap-desktop .sapHcsShellHeader .sapMTB .sapMBtnInner.sapMToggleBtnPressed .sapUiIcon, html.sap-desktop .sapHcsShellHeader .sapMToggleBtnPressed.sapMBtnTransparent > .sapMBtnIcon, .sapHcsShellHeader .sapMBtn:not(.sapMBtnDisabled) >.sapMBtnInner.sapMBtnActive .sapMBtnIcon, .sapHcsShellHeader .sapMTB :not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnTransparent.sapMBtnActive > .sapMBtnIcon, .sapHcsShellHeader .sapMToggleBtnPressed:not(.sapMBtnDisabled) .sapUiIcon, .sapHcsShellHeader .sapMTB .sapMBtnInner.sapMToggleBtnPressed:not(.sapMBtnDisabled) .sapUiIcon, .sapHcsShellHeader span.sapMBtnInner.sapMToggleBtnPressed.sapMBtnTransparent > .sapMBtnIcon { color: #D1E8FF; } .sapHcsShellHeader .sapMBtn :not(.sapMBtnEmphasized) .sapMBtnContent { background: transparent; color: #FFFFFF; } .sapHcsShellHeader .sapMBtn:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnActive:not(.sapMBtnEmphasized) { background: #23303E; border-color: #23303E; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed):not(.sapMBtnActive) { background: #283848 !important; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMBtnGhost):not(.sapMToggleBtnPressed):not(.sapMBtnActive) { border-color: #283848; } .sapUiTheme-sap_belize_hcb .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):not(.sapHcsShellUserInfo) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed):not(.sapMBtnActive), .sapUiTheme-sap_belize_hcw .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):not(.sapHcsShellUserInfo) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed):not(.sapMBtnActive), .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):not(.sapHcsShellUserInfo) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed):not(.sapMBtnActive), .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):not(.sapHcsShellUserInfo) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed):not(.sapMBtnActive) { border-color: #ababab; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed).sapMBtnActive { background: #23303E; border-color: #23303E; color: #FFFFFF; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMToggleBtnPressed):after, .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnActive):not(.sapMToggleBtnPressed) > .sapMBtnIcon { color: #D1E8FF; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed) > .sapMBtnContent, .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnHoverable:not(.sapMBtnEmphasized):not(.sapMToggleBtnPressed) > .sapMBtnContent bdi { color: #FFFFFF !important; } .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):active > .sapMBtnContent, .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):active > .sapMBtnInner, .sapHcsShellHeader .sapMBtn:hover:not(.sapMBtnDisabled):active > .sapMBtnIcon { color: #FFFFFF; } .sapHcsShellHeader .sapMBtnBase.sapMBtn.sapFShellBarItem.sapMBarChild:hover .sapMBtnInner.sapMBtnHoverable.sapMFocusable.sapMBtnIconFirst { background: #283848; } .sapHcsShellHeader .sapMLabel, .sapHcsShellHeader .sapMLnk:not(.sapMLnkDsbl), .sapHcsShellHeader .sapMText { color: #FFFFFF; text-shadow: none; } .sapHcsShellHeader .sapMSF .sapMSFF { background: #354A5F; border-color: #7996B4; } .sapHcsShellHeader .sapMSF .sapMSFF:hover { background: #283848; } .sapHcsShellHeader .sapMSF .sapMSFF .sapMSFI { color: #FFFFFF; } .sapHcsShellHeader .sapMSF .sapMSFF .sapMSFI::placeholder { color: #D1E8FF; } .sapHcsShellHeader .sapMSF .sapMSFF .sapMSFB { color: #D1E8FF; } .sapHcsShellHeader .sapMSF .sapMSFF .sapMSFB:hover { background: #283848; color: #D1E8FF; } .sapHcsShellHeader .sapMSF .sapMSFF .sapMSFB:active { background: #23303E; color: #fff; } .sapHcsShellHeader .sapMSF.sapMSFDisabled { opacity: 0.4; } .sapHcsShellHeader .sapMSF.sapMFocus > .sapMSFF::before, html[data-sap-ui-browser^="ie"] .sapHcsShellHeader .sapMSF.sapMFocus .sapMSFF::before { border-color: #fff; } .sapHcsShellHeader .sapMTB { background: none; } .sapHcsShellHeader .sapMTBSeparator { border-right: 1px solid #ebebeb; width: 0; } .sapHcsShellHeader .sapMBreadcrumbs .sapMBreadcrumbsCurrentLocation { line-height: 2rem; } .sapHcsShellHeader .sapMBtn .sapMBtnGhost { text-shadow: none; } .sapHcsShellHeader .sapMBtn .sapMBtnGhost { border-color: #ababab; } 
/****** end of shellHeader ******/
/****** main ******/
 .sapHcsShell { position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: border-box; overflow: hidden; background: #fff; z-index: 0; } .sapHcsNoSession .sapHcsShell { pointer-events: none; opacity: 0.5; } .sapHcsShellUIBlocker { z-index: 2; } .sapHcsShellUIBlocker.sapHcsShellUIBlockerT { height: 2.75rem; bottom: auto; } .sapHcsShellUIBlocker.sapHcsShellUIBlockerT.sapHcsShellUIBlockerTB { height: calc(3rem + 2.75rem); } .sapHcsShellUIBlocker.sapHcsShellUIBlockerL { width: 2.75rem; right: auto; top: 2.75rem; } .sapHcsShellUIBlocker.sapHcsShellUIBlockerLE { width: 15rem; } .sapHcsShellUIBlocker.sapHcsShellUIBlockerR { width: 18.75rem; left: auto; top: 2.75rem; } .sapHcsShellUIBlocker.sapHcsShellUIBlockerL.sapHcsShellUIBlockerTB, .sapHcsShellUIBlocker.sapHcsShellUIBlockerR.sapHcsShellUIBlockerTB { top: calc(3rem + 2.75rem); } .sapHcsShell > .sapUiBlockLayer.sapUiLocalBusyIndicator { background-color: rgba(0, 0, 0, 0.4); z-index: 2; } html:not(.sapHcsNoSession) .sapHcsShell.sapHcsShellFullscreenOff.sapHcsShellFullscreenOffOpen > .sapUiBlockLayer.sapUiLocalBusyIndicator { z-index: 1001; } .sapHcsShellInfoMsgAreWrapper { position: absolute; left: 9999px; top: 9999px; width: 0; height: 0; overflow: hidden; z-index: 10000; } .sapHcsNoSession .sapHcsShellInfoMsgAreWrapper { z-index: 1; } .sapHcsShellInfoMsgAreWrapper > .sapHcsShellInfoMsg { position: fixed; bottom: 20px; left: 50%; transform: translate(-50%, -2rem); } .sapHcsShellInfoMsgAreWrapper >:not(:first-child) { display: none; } .sapHcsShell .sapHcsShellSideContainer { position: absolute; top: 0; right: auto; bottom: 0; left: 0; width: 2.75rem; box-sizing: border-box; background: #29313A; border-right: 1px solid #3A4552; transition: width 0.3s; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; } .sapHcsShell .sapHcsShellMainContainer { position: absolute; top: 0; right: 0; bottom: 0; left: 2.75rem; transition: left 0.3s; } .sapHcsS2IExpanded .sapHcsShell.sapHcsShellExpanded .sapHcsShellSideContainer { width: 15rem; } .sapHcsS2IExpanded .sapHcsShell.sapHcsShellExpanded .sapHcsShellMainContainer { left: 15rem } .sapHcsShell .sapHcsShellHeader, .sapHcsShell .sapHcsShellTitle { height: 2.75rem; width: 100%; box-sizing: border-box; } .sapHcsShell .sapHcsShellHeader { box-sizing: border-box; overflow: hidden; position: relative; display: flex; align-items: center; background: #354A5F; box-shadow: inset 0 -0.0625rem 0 0 #354A5F; padding: 0 0.25rem; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; } .sapHcsShell .sapHcsShellSideNavigation { position: absolute; top: 2.75rem; right: 0; bottom: 0; left: 0; } .sapHcsShell .sapHcsShellMainContent { position: absolute; top: 2.75rem; right: 0; bottom: 0; left: 0; transition: right 0.3s; } .sapHcsShell .sapHcsShellCollaboration { position: absolute; top: 2.75rem; right: 0; bottom: 0; left: auto; width: 0; transition: width 0.3s; box-sizing: border-box; border-left: 1px solid transparent; } .sapHcsS2IFullscreen .sapHcsShell.sapHcsShellFullscreen .sapHcsShellMainContent, .sapHcsS2IFullscreen .sapHcsShell.sapHcsShellFullscreen .sapHcsShellCollaboration { top: 0; } .sapHcsShell.sapHcsShellFullscreenOff.sapHcsShellFullscreenOffOpen { z-index: auto; } .sapHcsS2IFullscreen .sapHcsShell.sapHcsShellFullscreen .sapHcsShellMainContainer, .sapHcsS2IFullscreenOff .sapHcsShell.sapHcsShellFullscreenOff .sapHcsShellMainContainer { left: 0; } .sapHcsShell.sapHcsShellFullscreenOff:not(.sapHcsShellFullscreenOffOpen) .sapHcsShellSideContainer { border-right: none; } .sapHcsS2IFullscreen .sapHcsShell.sapHcsShellFullscreen .sapHcsShellSideContainer, .sapHcsS2IFullscreenOff .sapHcsShell.sapHcsShellFullscreenOff .sapHcsShellSideContainer { z-index: 2; width: 0; } .sapHcsS2IFullscreen:not(.sapHcsNoSession) .sapHcsShell.sapHcsShellFullscreen .sapHcsShellSideContainer, .sapHcsS2IFullscreenOff:not(.sapHcsNoSession) .sapHcsShell.sapHcsShellFullscreenOff .sapHcsShellSideContainer { z-index: 1000; } .sapHcsS2IFullscreenOff .sapHcsShell.sapHcsShellFullscreenOff.sapHcsShellFullscreenOffOpen .sapHcsShellSideContainer { width: 15rem; box-shadow: 0 0.125rem 1rem 0 rgba(0, 0, 0, 0.7); } .sapHcsShell.sapHcsShellFullscreen .sapHcsShellHeader { display: none; } .sapHcsShell:not(.sapHcsShellFullscreen) { min-width: 35rem; } .sapHcsS2IWithBanner:not(.sapHcsS2IFullscreen) .sapHcsShell.sapHcsShellWithBanner:not(.sapHcsShellFullscreen) .sapHcsShellSideContainer, .sapHcsS2IWithBanner:not(.sapHcsS2IFullscreen) .sapHcsShell.sapHcsShellWithBanner:not(.sapHcsShellFullscreen) .sapHcsShellMainContainer { top: 3rem; } .sapHcsS2IWithBanner:not(.sapHcsS2IFullscreen) .sapHcsShell.sapHcsShellWithBanner:not(.sapHcsShellFullscreen) .sapHcsShellBannerContainer { display: block; } .sapHcsShell .sapHcsShellBannerContainer { display: none; height: 3rem; max-height: 3rem; position: fixed; width: 100%; overflow: hidden; box-shadow: inset 0 -0.0625rem 0 0 #354A5F; } .sapHcsS2IWithCollaboration .sapHcsShell.sapHcsShellWithCollaboration .sapHcsShellMainContent { right: 18.75rem; } .sapHcsS2IWithCollaboration .sapHcsShell.sapHcsShellWithCollaboration .sapHcsShellCollaboration { width: 18.75rem; border-left-color: #e5e5e5; } .sapHcsShell .sapHcsShellTitle { padding-left: 0.25rem; overflow: hidden; } .sapHcsShell.sapHcsShellFullscreenOff:not(.sapHcsShellFullscreenOffOpen) .sapHcsShellTitle { pointer-events: none; padding-left: 0; } .sapHcsShell .sapHcsShellTitle .sapMTitle { line-height: 2.75rem; font-weight: bold; margin-left: 0.5rem; vertical-align: middle; color: #FAFAFA; text-shadow: none; } .sapHcsShell .sapHcsShellNavigation { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-direction: normal; -webkit-box-orient: vertical; -webkit-flex-direction: column; flex-direction: column; position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: border-box; overflow: hidden; } .sapHcsShell .sapHcsShellNavigation:focus { outline: none; } .sapHcsShell .sapHcsShellNavigation .sapMLabel { padding: 0 1rem; font-size: .875rem; color: #DDDDDD; } .sapHcsShell:not(.sapHcsShellExpanded):not(.sapHcsShellFullscreenOff) .sapHcsShellNavigation .sapHcsShellSideNavigationLbl { display: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationStatic { box-sizing: border-box; position: relative; border-bottom: 1px solid #D9D9D9; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationFixed { border-top: 1px solid #D9D9D9; box-sizing: border-box; position: relative; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellSideNavigationFlexible { -webkit-box-flex: 1; -webkit-flex-grow: 1; flex-grow: 1; -webkit-flex-basis: 100%; flex-basis: 100%; position: relative; overflow: hidden; box-sizing: border-box; min-height: 3rem; } .sapHcsShellNavigationPopup, .sapHcsShellNavigationPopup .sapMPopoverCont { border-radius: 0 !important; } .sapHcsShell .sapHcsShellNavigation ul, .sapHcsShellNavigationPopup .sapHcsShellNavigationList { margin: 0; padding: 0; list-style: none; } html.sap-desktop sapHcsShellNavigationPopup ::-webkit-scrollbar-thumb { background-color: #b2b2b2; } .sapHcsShellNavigationPopup .sapMPopoverCont { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; } .sapHcsShellNavigationPopup.sapMPopover .sapMPopoverCont, .sapHcsShellNavigationPopup .sapMPopoverArr:after { background-color: #29313A; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellSideNavigationLbl, .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem { display: -webkit-box; display: -webkit-flex; display: flex; flex-grow: 1; flex-shrink: 1; flex-basis: auto; position: relative; height: 2.75rem; min-height: 2.75rem; width: 100%; box-sizing: border-box; -webkit-box-align: center; -webkit-align-items: center; align-items: center; border-bottom: 1px solid transparent; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemText, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemText { color: #FAFAFA; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled), .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled) { cursor: pointer; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemHidden { display: none; pointer-events: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellSideNavigationLbl { pointer-events: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemActive):not(.sapHcsShellNavigationItemSelected) .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemActive):not(.sapHcsShellNavigationItemSelected) .sapHcsShellNavigationItemActiveMark { display: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemActive .sapHcsShellNavigationItemActiveMark, .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemActive .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected .sapHcsShellNavigationItemActiveMark { position: absolute; left: 0.0625rem; top: 0.1875rem; bottom: 0.1875rem; width: 0.1875rem; border-radius: 0.125rem; background: #D1E8FF; pointer-events: none; } .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemActive .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected .sapHcsShellNavigationItemActiveMark { left: 0.125rem; } .sapHcsShell:not(.sapHcsShellExpanded):not(.sapHcsShellFullscreenOff) .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemWithMenu:after { content: " "; width: 0; height: 0; border-left: 0.375rem solid transparent; border-bottom: 0.375rem solid #D1E8FF; position: absolute; right: 0.125rem; bottom: 0.1875rem; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected, .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected:hover, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected:hover { background-color: #344B5F; } .sapHcsShell.sapHcsShellExpanded .sapHcsShellNavigation .sapHcsShellNavigationItem, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem { border-bottom-color: #3A4552; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):hover, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):hover { background-color: #283848; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active { background-color: #427cac; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemDisabled, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemDisabled { opacity: 0.4; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus { outline: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus::before, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus::before { border: 1px dotted #fff; position: absolute; content: " "; top: 1px; right: 1px; bottom: 1px; left: 1px; pointer-events: none; } .sapUiTheme-sap_belize_hcb .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_belize_hcb .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_belize_hcw .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_belize_hcw .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_fiori_3_hcb .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_fiori_3_hcb .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_fiori_3_hcw .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:focus::before, .sapUiTheme-sap_fiori_3_hcw .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:focus::before { border-width: 0.125rem; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:active:focus::before, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:active:focus::before { border-color: #fff; } html[data-sap-ui-browser^="ie"].sap-desktop .sapHcsShellNavigationItem:focus::before, html[data-sap-ui-browser^="ed"].sap-desktop .sapHcsShellNavigationItem:focus::before { border: 1px dashed #fff; } html[data-sap-ui-browser^="ie"].sap-desktop .sapHcsShellNavigationItem:active:focus::before, html[data-sap-ui-browser^="ed"].sap-desktop .sapHcsShellNavigationItem:active:focus::before { border-color: #fff; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemIcon, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemIcon { color: #D1E8FF; outline: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; min-width: 2.75rem; padding: 0.6875rem 0; position: relative; cursor: pointer; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemMoreIcon, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemMoreIcon { min-width: 2rem; padding: 0.75rem 0; font-size: 0.875rem; outline: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer; color: #D1E8FF; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemIcon, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemIcon { color: #fff; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemActive:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemActiveMark, .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemActive:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemActiveMark, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem.sapHcsShellNavigationItemSelected:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemActiveMark { background: #fff; } .sapHcsShell:not(.sapHcsShellExpanded):not(.sapHcsShellFullscreenOff) .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled).sapHcsShellNavigationItemWithMenu:active:after { border-bottom-color: #fff; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemMoreIcon, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemMoreIcon { color: #fff; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemText, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemText { width: 100%; padding: 0 0.5rem; display: block; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemIcon, .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem .sapHcsShellNavigationItemText, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemIcon, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem .sapHcsShellNavigationItemText { pointer-events: none; } .sapHcsShell .sapHcsShellNavigation .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemText, .sapHcsShellNavigationPopup .sapHcsShellNavigationList .sapHcsShellNavigationItem:not(.sapHcsShellNavigationItemDisabled):active .sapHcsShellNavigationItemText { color: #fff; } .sapHcsShellBCActionsMenu .sapUiMnuItmDsbl .sapUiMnuItmIco:empty { width: .5rem; } .sapHcsShellNavigationDisTooltip { width: 15.625rem; padding: 0.75rem; } .sapHcsShellNavigationContextMenu { z-index: 3 !important; } html:not(.sapHcsNoSession) .sapHcsShellNavigationContextMenu { z-index: 1001 !important; } .sapHcsShellNavigationContextMenu .sapUiMnuItm.sapUiMnuItmHov:first-child:last-child:not(:active) { background-color: transparent; } .sapHcsShellNavigationContextMenu .sapUiMnuItm.sapUiMnuItmHov:first-child:last-child:not(:active):hover { background-color: #f0f0f0; } .sapHcsShellBar.sapHcsShellBarFullSearch > *, .sapHcsShellBar.sapHcsShellBarFullSearch ~ .sapMBtn { visibility: hidden; } .sapHcsShellBar .sapMTBSpacer { min-width: 8rem; } .sapHcsShellBar.sapHcsShellBarSizePhone .sapMTBSpacer { min-width: 2.25rem; } .sapHcsShellTitle :not(.sapMBtnDisabled) .sapMBtnTransparent > .sapMBtnIcon { color: #D1E8FF; } html.sap-desktop .sapHcsShellTitle .sapMBtn:focus > .sapMFocusable { outline-color: #fff; } .sapHcsShellTitle :not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnTransparent.sapMBtnActive, .sapHcsShellTitle :not(.sapMBtnDisabled):hover > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnTransparent.sapMBtnActive { background-color: #91C8F6; border-color: #91C8F6; } .sapHcsShellTitle :not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnInner.sapMBtnActive .sapMBtnIcon { color: #29313A; } html.sap-desktop .sapHcsShellTitle .sapMBtn:focus > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnActive.sapMFocusable { outline-color: #fff; } .sapHcsShellTitle .sapMBtn:hover > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnTransparent.sapMBtnHoverable:not(.sapMBtnActive):not(.sapMToggleBtnPressed) { background-color: #46586A; border-color: transparent; } .sapHcsShellTitle .sapMBtn:hover:not(.sapMBtnDisabled) > span.sapMBtnInner.sapMBtnIconFirst.sapMBtnTransparent.sapMBtnHoverable:not(.sapMBtnActive):not(.sapMToggleBtnPressed):not(.sapMBtnEmphasized) .sapUiIcon { color: #D1E8FF; } .sapHcsS2IProxy { position: absolute; top: 2.75rem!important; right: 0 !important; bottom: 0; left: 2.75rem!important; width: auto !important; height: auto !important; transition: left 0.3s, right 0.3s; } .sapHcsS2IExpanded .sapHcsS2IProxy { left: 15rem !important; } .sapHcsS2IFullscreen .sapHcsS2IProxy, .sapHcsS2IFullscreenOff .sapHcsS2IProxy { left: 0 !important; } .sapHcsS2IWithBanner:not(.sapHcsS2IFullscreen) .sapHcsS2IProxy { top: 5.75rem !important; } .sapHcsS2IFullscreen .sapHcsS2IProxy { top: 0 !important; } .sapHcsS2IWithCollaboration .sapHcsS2IProxy { right: 18.75rem !important; } .sapHcsShellUserMenu .sapFAvatar.sapFAvatarColorAccent6 { background-color: #0092d1; } .sapHcsShellNotification .sapFAvatar.sapFAvatarColorAccent6 { background-color: #0092d1; } .sapHcsShellHeader .sapFAvatar.sapFAvatarColorAccent6 { background-color: #0092d1; } .sapHcsShellUserMenu .sapFAvatar.sapFAvatarIcon { color: #fff; } .sapHcsShellNotification .sapFAvatar.sapFAvatarIcon { color: #fff; } .sapHcsShellHeader .sapFAvatar.sapFAvatarIcon { color: #fff; } .sapHcsShellUserMenu .sapFAvatar .sapFAvatarInitialsHolder { color: #fff; } .sapHcsShellNotification .sapFAvatar .sapFAvatarInitialsHolder { color: #fff; } .sapHcsShellHeader .sapFAvatar .sapFAvatarInitialsHolder { color: #fff; } .sapUiTheme-sap_belize_hcw .sapHcsShellUserMenu .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_belize_hcw .sapHcsShellNotification .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_belize_hcw .sapHcsShellHeader .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_belize_hcb .sapHcsShellUserMenu .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_belize_hcb .sapHcsShellNotification .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_belize_hcb .sapHcsShellHeader .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcw .sapHcsShellUserMenu .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcw .sapHcsShellNotification .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcw .sapHcsShellHeader .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcb .sapHcsShellUserMenu .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcb .sapHcsShellNotification .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } .sapUiTheme-sap_fiori_3_hcb .sapHcsShellHeader .sapFAvatar { background: #F7F7F7; border: 0.125rem solid #D9D9D9; box-sizing: border-box; } 
/****** end of main ******/
</style><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/32.main.fdb4e5d4401e26438ee8.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/36.main.5e74e056eaafc7e1f2d4.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/96.main.2826f66ac19628236a99.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/121.main.b6565cffb266386c2910.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/appBuilding-chunk.main.f384ad3da0da767b0937.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/notifications-chunk.main.40b1fd2a806d1ee2c643.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/commonControls-help-chunk.main.20d5f1ac779a512a4505.css" crossorigin="anonymous"><style id="sac-shell" type="text/css">.sapHcsShellMainContent  {-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
            .sapHcsShellMainContent .sapHcsShellEmptyStateTemplate  {-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}
            .sapUiNotUserSelectable .sapHcsShellMainContent .sapHcsShellEmptyStateTemplate  {-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
            .sapUiLocalBusyIndicator:focus:after {border:none!important}</style><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/story-chunk.main.6c4c0151107896d6b743.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/fileService-chunk.main.dd9f45cd9b8e164e8999.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://assets.sapanalytics.cloud/production/uiAssets-2023.2.3/uiAssets/collaboration-chunk.main.6827b2acd3e8fe07bcb8.css" crossorigin="anonymous"><style id="sap-custom-theme-css-styles" type="text/css"></style><style id="sap-custom-app-css-styles" type="text/css"></style></head>

  <body class="sapUiBody FioriHarmonization sap_belize" role="application" style="height: 100%;"><div id="sap-ui-static" style="height: 0px; width: 0px; overflow: hidden; float: left;" data-sap-ui-area="sap-ui-static"><span id="sap-ui-static-firstfe" tabindex="-1" style="font-size: 0px;"></span><span id="__breadcrumbs0-InvisibleText" data-sap-ui="__breadcrumbs0-InvisibleText" class="sapUiInvisibleText" aria-hidden="true">Breadcrumb Trail</span><span id="__text3" data-sap-ui="__text3" class="sapUiInvisibleText" aria-hidden="true"></span></div>
    <div id="content" class="sapUiSizeCompact" data-sap-ui-area="content" style="position: relative; height: 100%;"><div id="___shell0" data-sap-ui="___shell0" class="sapHcsShell sapHcsShellFullscreen"><div class="sapHcsShellBannerContainer"></div><div class="sapHcsShellMainContainer"><header class="sapHcsShellHeader" data-sap-ui-fastnavgroup="true" role="banner" aria-label="Shell Bar"></header><div class="sapHcsShellMainContent"><div id="shell_content" data-sap-ui="shell_content" class="sapMNav present" style="width: 100%;"><div id="__jsview0" data-sap-ui="__jsview0" class="sapUiView sapUiJSView sapHcsShellPageLoading sapMNavItem sapMNavItemHidden" style="width: 100%;"><div id="__loading0" data-sap-ui="__loading0"></div></div><div id="shellMainContent---analyticappTool-container" data-sap-ui="shellMainContent---analyticappTool-container" class="sapUiComponentContainer sapMNavItem" style="width: 100%; height: 100%;"><div id="shellMainContent---analyticappTool-container-uiarea" style="width: 100%; height: 100%;"><div id="__xmlview0" data-sap-ui="__xmlview0" data-sap-ui-preserve="__xmlview0" class="sapUiView sapUiXMLView sapUiViewDisplayBlock" style="width: 100%; height: 100%;">
  <div id="__xmlview0--navCon" data-sap-ui="__xmlview0--navCon" class="sapMNav" style="width: 100%;"><div id="shellMainContent---analyticappTool---appBuildingDesigner" data-sap-ui="shellMainContent---analyticappTool---appBuildingDesigner" data-sap-ui-preserve="shellMainContent---analyticappTool---appBuildingDesigner" class="sapUiView sapUiXMLView sapMNavItem" style="width: 100%;">
    
    <div id="shellMainContent---analyticappTool---appBuildingDesigner--appBuilding_layout" data-sap-ui="shellMainContent---analyticappTool---appBuildingDesigner--appBuilding_layout" class="sapMPage sapMPageBgStandard sapMPageBusyCoversAll appBuildingWorkbenchViewMarkerForS2I"><section id="shellMainContent---analyticappTool---appBuildingDesigner--appBuilding_layout-cont" class="sapMPageEnableScrolling sapUiScrollDelegate" style="overflow: hidden auto;"><div id="__jsview1" data-sap-ui="__jsview1" class="sapUiView sapUiJSView sapUiViewDisplayBlock improvedConsumptionMode sapAppBuildingViewPresentationActive" style="width: 100%; height: 100%;"><div id="__jsview1-contentLayout" data-sap-ui="__jsview1-contentLayout" class="sapUiVlt sapuiVlt sapAppBuildingVerticalLayout sapAppBuildingRuntimePresentationLayout" style="width: 100%;"><div class="sapUiVltCell sapuiVltCell"><div id="__div0" data-sap-ui="__div0" class="sapAppBuildingExplorerContainer sapAppBuildingOverlayContainer"></div></div><div class="sapUiVltCell sapuiVltCell"><div id="__div1" data-sap-ui="__div1" style=""><div id="__container7" data-sap-ui="__container7" class="sapUiHLayout sapUiHLayoutNoWrap sapEpmDashboardStoryContentToolbar sapEpmToolbarTextual"><div class="sapUiHLayoutChildWrapper"><div id="__layout4" data-sap-ui="__layout4" class="sapUiHLayout sapUiHLayoutNoWrap sapEpmDashboardStoryContentToolbarLeftContentContainer"><div class="sapUiHLayoutChildWrapper"><div id="__container6" data-sap-ui="__container6" class="sapUiVlt sapuiVlt sapEpmDashboardStoryContentToolbarLeftContentTransitionContainer" style="width: 100%; top: 0px;"><div class="sapUiVltCell sapuiVltCell"><div id="__jsview1-contentToolbar-storyview" data-sap-ui="__jsview1-contentToolbar-storyview" data-sap-ui-fastnavgroup="true" role="toolbar" class="sapMIBar sapMTB sapMTBNewFlex sapMTBInactive sapMTBStandard sapMTB-Auto-CTX sapEpmUiToolbar sapEpmDashboardStoryContentToolbarLeftContent fontSizeOverride"><span id="sap-ui-invisible-__group0" data-sap-ui="sap-ui-invisible-__group0" aria-hidden="true" class="sapUiHiddenPlaceholder"></span><span id="sap-ui-invisible-__group1" data-sap-ui="sap-ui-invisible-__group1" aria-hidden="true" class="sapUiHiddenPlaceholder"></span><span id="sap-ui-invisible-__group2" data-sap-ui="sap-ui-invisible-__group2" aria-hidden="true" class="sapUiHiddenPlaceholder"></span><div id="__hbox2" data-sap-ui="__hbox2" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapEpmToolbarQuickAccessButtonsSection sapUiNoMargin sapMBarChild"><div id="__section0" data-sap-ui="__section0" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiNoMargin sapMFlexItem"><div id="__data102" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__button40" data-sap-ui="__button40" class="sapEpmToolbarItem sapEpmToolbarElement"><button type="button" id="__button41" data-sap-ui="__button41" title="Schedule Publication" class="sapEpmUiButton"><div id="__button41-inner" class="sapEpmUiButtonInner"><div id="__icon81" data-sap-ui="__icon81" class="sapEpmUiIcon"><span id="__icon82" data-sap-ui="__icon82" role="presentation" aria-hidden="true" aria-label="reports" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></div></div></button></div></div><div id="__data103" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem sapUiHiddenPlaceholder" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"></div></div><span id="sap-ui-invisible-__section1" data-sap-ui="sap-ui-invisible-__section1" aria-hidden="true" class="sapUiHiddenPlaceholder"></span><div id="__section2" data-sap-ui="__section2" class="sapEpmHorizontalLayout sapUiNoMargin sapMFlexItem"><div id="__separator7" data-sap-ui="__separator7" class="sapMTBSeparator sapEpmToolbarSectionSeparator"></div><div id="__section2" data-sap-ui="__section2" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent"><div id="__data104" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__button33-__clone4" data-sap-ui="__button33-__clone4" class="sapEpmToolbarItem sapEpmToolbarElement"><button type="button" id="__button47" data-sap-ui="__button47" title="Edit Prompts" class="sapEpmUiButton"><div id="__button47-inner" class="sapEpmUiButtonInner"><div id="__icon93" data-sap-ui="__icon93" class="sapEpmUiIcon"><span id="__icon94" data-sap-ui="__icon94" role="presentation" aria-hidden="true" aria-label="variable" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span><span id="__icon95" data-sap-ui="__icon95" role="presentation" aria-hidden="true" aria-label="slim-arrow-down" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL sapEpmUiIconMenuIndicator" style="font-family: SAP-icons;"></span></div></div></button></div></div><div id="__data105" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem sapUiHiddenPlaceholder" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"></div><div id="__data106" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__button31-__clone5" data-sap-ui="__button31-__clone5" class="sapEpmToolbarItem sapEpmToolbarElement"><button type="button" id="__button49" data-sap-ui="__button49" title="Refresh" class="sapEpmUiButton"><div id="__button49-inner" class="sapEpmUiButtonInner"><div id="__icon99" data-sap-ui="__icon99" class="sapEpmUiIcon"><span id="__icon100" data-sap-ui="__icon100" role="presentation" aria-hidden="true" aria-label="reload" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></div></div></button></div></div></div></div><div id="__section3" data-sap-ui="__section3" class="sapEpmHorizontalLayout sapUiNoMargin sapMFlexItem"><div id="__separator8" data-sap-ui="__separator8" class="sapMTBSeparator sapEpmToolbarSectionSeparator"></div><div id="__section3" data-sap-ui="__section3" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent"><div id="__data107" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__button50" data-sap-ui="__button50" class="sapEpmToolbarItem sapEpmToolbarElement"><button type="button" id="__button51" data-sap-ui="__button51" title="Pin Menu" class="sapEpmUiButton"><div id="__button51-inner" class="sapEpmUiButtonInner"><div id="__icon102" data-sap-ui="__icon102" class="sapEpmUiIcon"><span id="__icon103" data-sap-ui="__icon103" role="presentation" aria-hidden="true" aria-label="pin" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></div></div></button></div></div><div id="__data108" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__button52" data-sap-ui="__button52" class="sapEpmToolbarItem sapEpmToolbarElement"><button type="button" id="__button53" data-sap-ui="__button53" title="Exit Fullscreen" class="sapEpmUiButton"><div id="__button53-inner" class="sapEpmUiButtonInner"><div id="__icon105" data-sap-ui="__icon105" class="sapEpmUiIcon"><span id="__icon106" data-sap-ui="__icon106" role="presentation" aria-hidden="true" aria-label="leave" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></div></div></button></div></div><div id="__data109" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__jsview1-presentEditBtn" data-sap-ui="__jsview1-presentEditBtn" class="sapEpmToolbarItem sapEpmToolbarElement sapAppBuildingRunApplicationButtonBase sapAppBuildingPresentModeEditApplicationButton"><button type="button" id="__button54" data-sap-ui="__button54" title="Edit Analytic Application" class="sapEpmUiButton"><div id="__button54-inner" class="sapEpmUiButtonInner"><div id="__icon108" data-sap-ui="__icon108" class="sapEpmUiIcon"><span id="__icon109" data-sap-ui="__icon109" role="presentation" aria-hidden="true" aria-label="edit" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></div></div></button></div></div></div></div></div></div></div></div></div></div></div><div class="sapUiHLayoutChildWrapper"><div id="__jsview1-contentToolbarRight" data-sap-ui="__jsview1-contentToolbarRight" class="sapEpmModelerToolbar sapEpmDashboardStoryContentToolbarRightContent" style="width: 100%;"><div class="sapEpmModelerToolbarRightItems"></div></div></div></div></div></div><div class="sapUiVltCell sapuiVltCell"><div id="__splitter0" data-sap-ui="__splitter0" class="sapEPMUISplitter sapEPMUISplitterFixed sapAppBuildingRuntimeSplitter dataAnalyzerSplitter" style="width: 100%; height: 100%;"><div class="sapEPMUISplitterRHLeft sapEPMUISplitterResizable __splitter0_sapEPMUISplitterRHLeft" style="right: 0px;"><div id="__div2" data-sap-ui="__div2" class="sapAppBuildingRuntimeContainer"><div id="P_EB920A842A84F4B96E69440DC13301B7" data-sap-ui="P_EB920A842A84F4B96E69440DC13301B7" class="sapAppBuildingStoryContainer"><div id="__jsview2" data-sap-ui="__jsview2" class="sapUiView sapUiJSView sapEpmStoryView viewMode improvedConsumptionMode" style="width: 100%;"><div id="__jsview2-contentWrapper" data-sap-ui="__jsview2-contentWrapper" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent" style="height: 100%; width: 100%;"><div id="__jsview2-contentLayout" data-sap-ui="__jsview2-contentLayout" class="sapUiVlt sapuiVlt sapEpmDashboardStoryVerticalLayout sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="width: 100%; order: 0; flex: 1 0 auto; min-height: auto; min-width: auto;"><div class="sapUiVltCell sapuiVltCell"><div id="__splitter1" data-sap-ui="__splitter1" class="sapEPMUISplitter sapEPMUISplitterFixed sapFpaUiStoryComposerLayout" style="width: 100%; height: 100%;"><div class="sapEPMUISplitterRHLeft sapEPMUISplitterResizable __splitter1_sapEPMUISplitterRHLeft" style="right: 0px;"><div id="__layout3" data-sap-ui="__layout3" class="sapUiVlt sapuiVlt sapLumiraStoryComposerRightContent sapFpaUiComposerContentCommentModeOverlay" style="width: 100%;"><div class="sapUiVltCell sapuiVltCell"><div data-sap-ui-fastnavgroup="true" class="sapFpaUiStoryControlsFilterBarContainer" id="__container3" data-sap-ui="__container3" style="height: 0px; display: none; width: 100%;"><div class="sapEPMUIFilterBar sapEPMUIFilterBarWithExpandableLeftItems" id="__bar1" data-sap-ui="__bar1"><div class="sapEpmUiTabContainerLeftToolbar"><div class="sapEpmModelerToolbarLeftItems"><div id="__box0" data-sap-ui="__box0" class="sapMFlexBox sapMHBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent"><div id="__data97" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__item21" data-sap-ui="__item21" title="Add Story Filter" class="sapEpmModelerToolbarItem sapEpmModelerToolbarElement sapEpmModelerToolbarItemDisabled sapEPMUIAddFilterBtnIcon sapEPMUIAddFilterBtnIcon-hidden"><span class="sapEpmModelerToolbarItemIcon"><span id="__icon44" data-sap-ui="__icon44" role="presentation" aria-hidden="true" aria-label="new-filter" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></span></div></div><div id="__data98" class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><div id="__item22" data-sap-ui="__item22" title="Add Story Filter/Prompt" class="sapEpmModelerToolbarItem sapEpmModelerToolbarElement sapEpmModelerToolbarItemDisabled sapEPMUIAddFilterBtnIcon"><span class="sapEpmModelerToolbarItemIcon"><span id="__icon45" data-sap-ui="__icon45" role="presentation" aria-hidden="true" aria-label="new-filter" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL" style="font-family: fpa-icons;"></span></span></div></div></div></div></div><div class="sapEpmUIFilterPagination"><span id="__icon46" data-sap-ui="__icon46" role="presentation" aria-hidden="true" aria-label="previous" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL sapEpmUIFilterPaginationIcon sapEpmModellerUiLeftIcon disable" style="font-family: fpa-icons;"></span><span id="__icon47" data-sap-ui="__icon47" role="presentation" aria-hidden="true" aria-label="next" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL sapEpmUIFilterPaginationIcon sapEpmModellerUiRightIcon disable" style="font-family: fpa-icons;"></span></div></div></div></div><div class="sapUiVltCell sapuiVltCell"><div class="sapFpaUiStoryControlsDisplayContainer" id="__container5" data-sap-ui="__container5"><div id="__layout1" data-sap-ui="__layout1" class="sapEpmStoryMessageLayoutContainer" style="display: none;"><div id="__layout2" data-sap-ui="__layout2" class="sapUiVlt sapuiVlt sapEpmStoryMessageVerticalLayout"><div class="sapUiVltCell sapuiVltCell"><span id="__icon57" data-sap-ui="__icon57" class="sapUiIcon messageLayoutIcon"></span></div><div class="sapUiVltCell sapuiVltCell"><span id="__view0" data-sap-ui="__view0" tabindex="-1" aria-invalid="false" aria-disabled="false" class="sapUiTv sapUiTvAlignLeft messageLayoutText" style="direction: inherit;"></span></div></div></div><div id="__content0" data-sap-ui="__content0" class="sapFpaUiTransitionPageDisplayContainer" style="display: none;"></div><div id="__story0" data-sap-ui="__story0" class="sapEpmDashboardStory"><div class="sapEpmStoryComposer" id="__story1" data-sap-ui="__story1"><div class="sapEpmComposerContainer" id="__container2" data-sap-ui="__container2" style="height: 100%;"><div id="__container1" data-sap-ui="__container1" class="sapUiComponentContainer" style="width: 100%; height: 100%;"><div id="__container1-uiarea" style="width: 100%; height: 100%;"><div id="storyContainer___component0" data-sap-ui="storyContainer___component0" class="sapUiView sapUiJSView sapUiViewDisplayBlock" style="width: 100%; height: 100%;"><div id="__panel3" data-sap-ui="__panel3" class="sapLumiraStoryLayoutUnifiedComponentPagePanel sapLumiraStoryLayoutCommonPagePanel sapLumiraStoryReusableLayoutScrollableContainer smoothScroll sapAppBuildingNoShadow presentation fitPageToDevice edit" style="overflow: hidden;"><div id="__actions0" data-sap-ui="__actions0"></div><div class="highlightBorder border-n"></div><div class="highlightBorder border-e"></div><div class="highlightBorder border-s"></div><div class="highlightBorder border-w"></div><div id="__panel4" data-sap-ui="__panel4" data-sap-ui-fastnavgroup="true" class="sapLumiraStoryLayoutUnifiedComponentEditPanel sapLumiraStoryLayoutCommonEditPanel sapLumiraStoryLayoutScrollableContainer sapLumiraStoryUnifiedLayouter" style="width: 1382px; height: 1321px; background-color: rgb(255, 255, 255); background-size: 0px; background-image: none;"><div id="highlightDropzone__panel4" class="highlightDropzone"></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="sapEPMUISplitterRHRight sapEPMUISplitterResizable __splitter1_sapEPMUISplitterRHRight" style="width: 0%;"><div id="__panel0" data-sap-ui="__panel0" class="sapEpmStoryComposerPanel objectListAnchor" style="width: 100%; height: 100%;"></div></div></div></div></div></div></div></div></div><div class="sapEPMUISplitterHandler" style="display: none;"><span id="__icon43" data-sap-ui="__icon43" role="presentation" aria-hidden="true" aria-label="grip-vertical" data-sap-ui-icon-content="" class="sapUiIcon sapUiIconMirrorInRTL sapEPMUISplitterHandlerGrabber" style="font-family: fpa-icons; font-size: 21px;"></span></div></div><div class="sapEPMUISplitterRHRight sapEPMUISplitterResizable __splitter0_sapEPMUISplitterRHRight" style="width: 0%;"><div id="__container0" data-sap-ui="__container0" class="sapAppBuildingDataAnalyzerNavPanelContainer"><div style="width: 100%; height: 100%;" data-sap-ui-preserve="__html0" id="__html0"></div></div></div></div></div></div></div></section></div>
</div></div>
</div></div></div></div></div><div class="sapHcsShellCollaboration"><div id="sap-ui-invisible-shell_collaboration" data-sap-ui="sap-ui-invisible-shell_collaboration" aria-hidden="true" class="sapUiHiddenPlaceholder"></div></div></div></div><div id="shell_info_msg_area" class="sapHcsShellInfoMsgAreWrapper" data-sap-ui-area="shell_info_msg_area"><div id="__area0" data-sap-ui="__area0" class="sapEpmUiShellInfoMessageArea"></div></div></div>
  

                <div aria-hidden="true" id="sap-ui-preserve" class="sapUiHidden sapUiForcedHidden" style="width: 0px; height: 0px; overflow: hidden;"></div></body></html>
`;


	class Tools extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));

			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

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
