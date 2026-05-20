/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c84bd75f-4e3e-5630-bfe6-eee99e1f147a")
    } catch (e) {}
}();
(function() {
    const g = window.vscode,
        p = g.process;
    async function w(a, i) {
        const e = await k();
        i?.beforeImport?.(e);
        const {
            enableDeveloperKeybindings: o,
            removeDeveloperKeybindingsAfterLoad: c,
            developerDeveloperKeybindingsDisposable: t,
            forceDisableShowDevtoolsOnError: s
        } = j(e, i);
        y(e);
        const r = new URL(`${u(e.appRoot,{isWindows:p.platform==="win32",scheme:"vscode-file",fallbackAuthority:"vscode-app"})}/out/`);
        globalThis._VSCODE_FILE_ROOT = r.toString(), h(e, r);
        try {
            let d;
            return d = await import(new URL(`${a}.js`, r).href), t && c && t(), {
                result: d,
                configuration: e
            }
        } catch (d) {
            throw l(d, o && !s), d
        }
    }
    async function k() {
        const a = setTimeout(() => {
            console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...")
        }, 1e4);
        performance.mark("code/willWaitForWindowConfig");
        const i = await g.context.resolveConfiguration();
        return performance.mark("code/didWaitForWindowConfig"), clearTimeout(a), i
    }

    function j(a, i) {
        const {
            forceEnableDeveloperKeybindings: e,
            disallowReloadKeybinding: o,
            removeDeveloperKeybindingsAfterLoad: c,
            forceDisableShowDevtoolsOnError: t
        } = typeof i?.configureDeveloperSettings == "function" ? i.configureDeveloperSettings(a) : {
            forceEnableDeveloperKeybindings: !1,
            disallowReloadKeybinding: !1,
            removeDeveloperKeybindingsAfterLoad: !1,
            forceDisableShowDevtoolsOnError: !1
        }, r = !!(!!p.env.VSCODE_DEV || e);
        let d;
        return r && (d = n(o)), {
            enableDeveloperKeybindings: r,
            removeDeveloperKeybindingsAfterLoad: c,
            developerDeveloperKeybindingsDisposable: d,
            forceDisableShowDevtoolsOnError: t
        }
    }

    function n(a) {
        const i = g.ipcRenderer,
            e = function(r) {
                return [r.ctrlKey ? "ctrl-" : "", r.metaKey ? "meta-" : "", r.altKey ? "alt-" : "", r.shiftKey ? "shift-" : "", r.keyCode].join("")
            },
            o = p.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
            c = "123",
            t = p.platform === "darwin" ? "meta-82" : "ctrl-82";
        let s = function(r) {
            const d = e(r);
            d === o || d === c ? i.send("vscode:toggleDevTools") : d === t && !a && i.send("vscode:reloadWindow")
        };
        return window.addEventListener("keydown", s),
            function() {
                s && (window.removeEventListener("keydown", s), s = void 0)
            }
    }

    function y(a) {
        globalThis._VSCODE_NLS_MESSAGES = a.nls.messages, globalThis._VSCODE_NLS_LANGUAGE = a.nls.language;
        let i = a.nls.language || "en";
        i === "zh-tw" ? i = "zh-Hant" : i === "zh-cn" && (i = "zh-Hans"), window.document.documentElement.setAttribute("lang", i)
    }

    function l(a, i) {
        i && g.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${a}`), a && typeof a != "string" && a.stack && console.error(a.stack)
    }

    function u(a, i) {
        let e = a.replace(/\\/g, "/");
        e.length > 0 && e.charAt(0) !== "/" && (e = `/${e}`);
        let o;
        return i.isWindows && e.startsWith("//") ? o = encodeURI(`${i.scheme||"file"}:${e}`) : o = encodeURI(`${i.scheme||"file"}://${i.fallbackAuthority||""}${e}`), o.replace(/#/g, "%23")
    }

    function h(a, i) {
        const e = {
                react: "react/esm-index-development.js",
                "react/jsx-runtime": "react/esm-jsx-runtime-development.js",
                "react/compiler-runtime": "react/esm-compiler-runtime-development.js",
                "react-dom": "react-dom/esm-index-development.js",
                "react-dom/client": "react-dom/esm-client-development.js",
                "react-vnc": "react-vnc/dist/react-vnc.js",
                "@tanstack/query-core": "@tanstack/query-core/build/modern/index.js",
                "@tanstack/solid-query": "@tanstack/solid-query/build/index.js",
                "@tanstack/react-virtual": "@tanstack/react-virtual/dist/esm/index.js",
                "@tanstack/solid-virtual": "@tanstack/solid-virtual/dist/esm/index.js",
                "@tanstack/virtual-core": "@tanstack/virtual-core/dist/esm/index.js",
                "solid-refresh": "solid-refresh/dist/solid-refresh.mjs",
                "@solid-devtools/overlay": "@solid-devtools/overlay/dist/index.js",
                "@solid-devtools/debugger/setup": "@solid-devtools/debugger/dist/setup.js",
                "@solid-devtools/debugger/bundled": "@solid-devtools/debugger/dist/bundled.js",
                "@solid-devtools/shared/utils": "@solid-devtools/shared/dist/utils.js",
                "@nothing-but/utils": "@nothing-but/utils/dist/index.js",
                "@nothing-but/utils/num": "@nothing-but/utils/dist/num.js",
                "solid-js": "solid-js/dist/dev.js",
                "solid-js/web": "solid-js/web/dist/dev.js",
                "solid-js/store": "solid-js/store/dist/dev.js",
                "solid-js/jsx-runtime": "solid-js/h/jsx-runtime/dist/jsx.js",
                "@opentelemetry/api": "@opentelemetry/api/build/esm/index.js",
                "@connectrpc/connect": "@connectrpc/connect/dist/esm/index.js",
                "@connectrpc/connect/protocol": "@connectrpc/connect/dist/esm/protocol/index.js",
                rxjs: "rxjs/dist/esm/index.js",
                "rxjs/internal/Subject": "rxjs/dist/esm/internal/Subject.js",
                jimp: "jimp/dist/esm/index.js",
                zod: "zod/index.js",
                "gray-matter": "gray-matter/index.js",
                "@dnd-kit/accessibility": "@dnd-kit/accessibility/dist/accessibility.esm.js",
                "@dnd-kit/core": "@dnd-kit/core/dist/core.esm.js",
                "@dnd-kit/sortable": "@dnd-kit/sortable/dist/sortable.esm.js",
                "@dnd-kit/utilities": "@dnd-kit/utilities/dist/utilities.esm.js",
                tslib: "tslib/tslib.es6.mjs",
                "@sentry/browser": "@sentry/browser/build/npm/esm/dev/index.js",
                "@sentry-internal/replay": "@sentry-internal/replay/build/npm/esm/index.js",
                "@sentry-internal/replay-canvas": "@sentry-internal/replay-canvas/build/npm/esm/index.js",
                "@sentry-internal/feedback": "@sentry-internal/feedback/build/npm/esm/index.js"
            },
            o = "../../packages/ui/dist/automations.js",
            c = {
                "proto/": "../proto/",
                "@anysphere/proto/": "../proto/",
                "@bufbuild/protobuf": "bufbuild/protobuf.js",
                "@tanstack/react-query": "tanstack/react-query/index.js",
                "@sentry/core": "sentry/core/index.js",
                "@sentry/types": "sentry/types/index.js",
                "@sentry-internal/browser-utils": "sentry/browser-utils/index.js",
                "@anysphere/constants": "../../packages/constants/dist/index.js",
                "@anysphere/agent-analytics": "../../packages/agent-analytics/dist/browser.js",
                "@anysphere/agent-analytics/browser": "../../packages/agent-analytics/dist/browser.js",
                "@anysphere/agent-analytics/commit-scoring": "../../packages/agent-analytics/dist/commit-scoring/index.js",
                "@anysphere/agent-exec": "../../packages/agent-exec/dist/index.js",
                "@anysphere/agent-core": "../../packages/agent-core/dist/index.js",
                "@anysphere/agent-kv": "../../packages/agent-kv/dist/index.js",
                "@anysphere/agent-transcript": "../../packages/agent-transcript/dist/index.js",
                "@anysphere/agent-transcript/browser": "../../packages/agent-transcript/dist/browser.js",
                "@anysphere/agent-client": "../../packages/agent-client/dist/index.js",
                "@anysphere/context": "../../packages/context/dist/index.js",
                "@anysphere/context-rpc": "../../packages/context-rpc/dist/index.js",
                "@anysphere/metrics": "../../packages/metrics/dist/index.js",
                "@anysphere/ui/components/Automations": o,
                "@anysphere/ui/components/Automations/AgentSettingsForm": o,
                "@anysphere/ui/components/Automations/AsyncAgentsList": o,
                "@anysphere/ui/components/Automations/components": o,
                "@anysphere/ui/components/Automations/components/DetailHeader": o,
                "@anysphere/ui/components/Automations/components/FilterTabs": o,
                "@anysphere/ui/components/Automations/hooks": o,
                "@anysphere/ui/components/Automations/platform/capabilities": o,
                "@anysphere/ui/components/Automations/runtime/AutomationsRuntime": o,
                "@anysphere/ui/components/Automations/templates/TemplateGallery": o,
                "@anysphere/ui/components/Automations/triggers/InlineTriggerButton": o,
                "@anysphere/ui/components/Automations/triggers/trigger-picker-styles": o,
                "@anysphere/ui/components/Automations/types": o,
                "@anysphere/ui/components/Automations/utils/formatters": o,
                "@anysphere/ui/components/Automations/utils/prefill": o,
                "@anysphere/ui/components/Automations/utils/triggerDataUtils": o,
                "@anysphere/ui": "../../packages/ui/dist/bundle.js",
                "@anysphere/utils": "../../packages/utils/dist/browser.js",
                "@anysphere/git-core": "../../packages/git-core/dist/index.js",
                "@anysphere/hooks": "../../packages/hooks/dist/index.js",
                "@anysphere/proto/redaction-schema": "../../packages/proto/dist/redactionSchema.js",
                "@anysphere/redaction": "../../packages/redaction/dist/index.js",
                "@anysphere/redacted-protos": "../../packages/redacted-protos/dist/index.js",
                "@anysphere/redacted-protos/agent-v1": "../../packages/redacted-protos/dist/agent-v1.js",
                "@anysphere/redacted-protos/aiserver-v1": "../../packages/redacted-protos/dist/aiserver-v1.js",
                "@anysphere/redacted-protos/type-guards": "../../packages/redacted-protos/dist/type-guards.js"
            },
            t = {
                imports: {}
            };
        for (const [d, b] of Object.entries(e)) t.imports[d] = new URL(`../node_modules/${b}`, i).href;
        for (const [d, b] of Object.entries(c)) t.imports[d] = new URL(`./external/${b}`, i).href;
        const s = ["api/context", "api/diag", "api/metrics", "api/propagation", "api/trace", "baggage/context-helpers", "baggage/internal/baggage-impl", "baggage/internal/symbol", "baggage/types", "baggage/utils", "common/Attributes", "common/Exception", "common/Time", "context/context", "context/NoopContextManager", "context/types", "diag/ComponentLogger", "diag/consoleLogger", "diag/internal/logLevelLogger", "diag/internal/noopLogger", "diag/types", "experimental/index", "experimental/trace/SugaredOptions", "experimental/trace/SugaredTracer", "internal/global-utils", "internal/semver", "metrics/Meter", "metrics/MeterProvider", "metrics/Metric", "metrics/NoopMeter", "metrics/NoopMeterProvider", "metrics/ObservableResult", "platform/browser/globalThis", "platform/browser/index", "platform/index", "platform/node/globalThis", "platform/node/index", "propagation/NoopTextMapPropagator", "propagation/TextMapPropagator", "trace/attributes", "trace/context-utils", "trace/internal/tracestate-impl", "trace/internal/tracestate-validators", "trace/internal/utils", "trace/invalid-span-constants", "trace/link", "trace/NonRecordingSpan", "trace/NoopTracer", "trace/NoopTracerProvider", "trace/ProxyTracer", "trace/ProxyTracerProvider", "trace/Sampler", "trace/SamplingResult", "trace/span", "trace/span_context", "trace/span_kind", "trace/spancontext-utils", "trace/SpanOptions", "trace/status", "trace/trace_flags", "trace/trace_state", "trace/tracer", "trace/tracer_options", "trace/tracer_provider", "context-api", "diag-api", "index", "metrics-api", "propagation-api", "trace-api", "version"],
            r = new URL("../node_modules/@opentelemetry/api/build/esm/", i).href;
        for (const d of s) t.imports[`${r}${d}`] = `${r}${d}.js`;
        if (t.imports[`${r}platform`] = `${r}platform/index.js`, t.imports[`${r}experimental`] = `${r}experimental/index.js`, t.imports[`${r}platform/node`] = `${r}platform/node/index.js`, t.imports[`${r}platform/browser`] = `${r}platform/browser/index.js`, a.cssModules && a.cssModules.size > 0) {
            performance.mark("code/willAddCssLoader"), globalThis._VSCODE_CSS_LOAD = function(m, x, B) {
                const f = document.createElement("link");
                f.rel = "stylesheet", f.href = m + "?hash=" + B, f.type = "text/css", f.media = "screen", f.id = x.replace(".css", ""), document.head.appendChild(f)
            };
            const d = a.cssModules,
                b = new Map(Array.from(d, ([m, x]) => [m, {
                    hash: x,
                    url: new URL(m, i).href
                }])),
                D = `
				const cssMapping = ${JSON.stringify(Object.fromEntries(b))};
				const url = new URL(import.meta.url);
				const params = new URLSearchParams(url.hash.slice(1));
				const currentModule = params.get('module');
				const entry = cssMapping[currentModule];
				if (entry) {
					globalThis._VSCODE_CSS_LOAD(entry.url, currentModule, entry.hash);
				} else {
					console.log("[CSS_DEV] No cssModule found", currentModule)
				}
				export default {};
		`,
                C = new Blob([D], {
                    type: "application/javascript"
                }),
                E = URL.createObjectURL(C);
            for (const [m, x] of a.cssModules) {
                const B = new URL(m, i).href;
                t.imports[B] = E + "#module=" + encodeURIComponent(m)
            }
            const L = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
                    createScript(m) {
                        return m
                    }
                }),
                S = JSON.stringify(t, void 0, 2),
                v = document.createElement("script");
            v.type = "importmap", v.setAttribute("nonce", "0c6a828f1297"), v.textContent = L?.createScript(S) ?? S, document.head.appendChild(v), performance.mark("code/didAddCssLoader")
        }
    }
    globalThis.MonacoBootstrapWindow = {
        load: w
    }
})(), (async function() {
    performance.mark("code/didStartRenderer");
    const g = window.MonacoBootstrapWindow,
        p = window.vscode;

    function w(n) {
        if (performance.mark("code/willShowPartsSplash"), n.glass === !0) {
            const e = document.createElement("style");
            e.className = "initialShellColors", window.document.head.appendChild(e), e.textContent = "html, body {	background-color: transparent; margin: 0; padding: 0; }", typeof n.zoomLevel == "number" && typeof p?.webFrame?.setZoomLevel == "function" && p.webFrame.setZoomLevel(n.zoomLevel), performance.mark("code/didShowPartsSplash");
            return
        }
        let l = n.partsSplash;
        l && (n.autoDetectHighContrast && n.colorScheme.highContrast ? (n.colorScheme.dark && l.baseTheme !== "hc-black" || !n.colorScheme.dark && l.baseTheme !== "hc-light") && (l = void 0) : n.autoDetectColorScheme && (n.colorScheme.dark && l.baseTheme !== "vs-dark" || !n.colorScheme.dark && l.baseTheme !== "vs") && (l = void 0)), l && n.extensionDevelopmentPath && (l.layoutInfo = void 0);
        let u, h, a;
        l ? (u = l.baseTheme, h = l.colorInfo.editorBackground, a = l.colorInfo.foreground) : n.autoDetectHighContrast && n.colorScheme.highContrast ? n.colorScheme.dark ? (u = "hc-black", h = "#000000", a = "#FFFFFF") : (u = "hc-light", h = "#FFFFFF", a = "#000000") : n.autoDetectColorScheme && (n.colorScheme.dark ? (u = "vs-dark", h = "#1E1E1E", a = "#CCCCCC") : (u = "vs", h = "#FFFFFF", a = "#000000"));
        const i = document.createElement("style");
        if (i.className = "initialShellColors", window.document.head.appendChild(i), i.textContent = `body {	background-color: ${h}; color: ${a}; margin: 0; padding: 0; }`, typeof l?.zoomLevel == "number" && typeof p?.webFrame?.setZoomLevel == "function" && p.webFrame.setZoomLevel(l.zoomLevel), l?.layoutInfo) {
            const {
                layoutInfo: e,
                colorInfo: o
            } = l, c = document.createElement("div");
            if (c.id = "monaco-parts-splash", c.className = u ?? "vs-dark", e.windowBorder && o.windowBorder) {
                const t = document.createElement("div");
                t.style.position = "absolute", t.style.width = "calc(100vw - 2px)", t.style.height = "calc(100vh - 2px)", t.style.zIndex = "1", t.style.border = "1px solid var(--window-border-color)", t.style.setProperty("--window-border-color", o.windowBorder), e.windowBorderRadius && (t.style.borderRadius = e.windowBorderRadius), c.appendChild(t)
            }
            if (e.auxiliarySideBarWidth = Math.min(e.auxiliarySideBarWidth, window.innerWidth - (e.activityBarWidth + e.editorPartMinWidth + e.sideBarWidth)), e.sideBarWidth = Math.min(e.sideBarWidth, window.innerWidth - (e.activityBarWidth + e.editorPartMinWidth + e.auxiliarySideBarWidth)), e.titleBarHeight > 0) {
                const t = document.createElement("div");
                if (t.style.position = "absolute", t.style.width = "100%", t.style.height = `${e.titleBarHeight}px`, t.style.left = "0", t.style.top = "0", t.style.backgroundColor = `${o.titleBarBackground}`, t.style["-webkit-app-region"] = "drag", c.appendChild(t), o.titleBarBorder) {
                    const s = document.createElement("div");
                    s.style.position = "absolute", s.style.width = "100%", s.style.height = "1px", s.style.left = "0", s.style.bottom = "0", s.style.borderBottom = `1px solid ${o.titleBarBorder}`, t.appendChild(s)
                }
            }
            if (e.activityBarWidth > 0) {
                const t = document.createElement("div");
                if (t.style.position = "absolute", t.style.width = `${e.activityBarWidth}px`, t.style.height = `calc(100% - ${e.titleBarHeight+e.statusBarHeight}px)`, t.style.top = `${e.titleBarHeight}px`, e.sideBarSide === "left" ? t.style.left = "0" : t.style.right = "0", t.style.backgroundColor = `${o.activityBarBackground}`, c.appendChild(t), o.activityBarBorder) {
                    const s = document.createElement("div");
                    s.style.position = "absolute", s.style.width = "1px", s.style.height = "100%", s.style.top = "0", e.sideBarSide === "left" ? (s.style.right = "0", s.style.borderRight = `1px solid ${o.activityBarBorder}`) : (s.style.left = "0", s.style.borderLeft = `1px solid ${o.activityBarBorder}`), t.appendChild(s)
                }
            }
            if (n.workspace && e.sideBarWidth > 0) {
                const t = document.createElement("div");
                if (t.style.position = "absolute", t.style.width = `${e.sideBarWidth}px`, t.style.height = `calc(100% - ${e.titleBarHeight+e.statusBarHeight}px)`, t.style.top = `${e.titleBarHeight}px`, e.sideBarSide === "left" ? t.style.left = `${e.activityBarWidth}px` : t.style.right = `${e.activityBarWidth}px`, t.style.backgroundColor = `${o.sideBarBackground}`, c.appendChild(t), o.sideBarBorder) {
                    const s = document.createElement("div");
                    s.style.position = "absolute", s.style.width = "1px", s.style.height = "100%", s.style.top = "0", s.style.right = "0", e.sideBarSide === "left" ? s.style.borderRight = `1px solid ${o.sideBarBorder}` : (s.style.left = "0", s.style.borderLeft = `1px solid ${o.sideBarBorder}`), t.appendChild(s)
                }
            }
            if (e.auxiliarySideBarWidth > 0 || (e.unifiedSideBarWidth ?? 0) > 0) {
                const t = e.unifiedSideBarWidth ?? e.auxiliarySideBarWidth,
                    s = document.createElement("div");
                if (s.style.position = "absolute", s.style.width = `${t}px`, s.style.height = `calc(100% - ${e.titleBarHeight+e.statusBarHeight}px)`, s.style.top = `${e.titleBarHeight}px`, e.sideBarSide === "left" ? s.style.right = "0" : s.style.left = "0", s.style.backgroundColor = `${o.sideBarBackground}`, c.appendChild(s), o.sideBarBorder) {
                    const r = document.createElement("div");
                    r.style.position = "absolute", r.style.width = "1px", r.style.height = "100%", r.style.top = "0", e.sideBarSide === "left" ? (r.style.left = "0", r.style.borderLeft = `1px solid ${o.sideBarBorder}`) : (r.style.right = "0", r.style.borderRight = `1px solid ${o.sideBarBorder}`), s.appendChild(r)
                }
            }
            if (e.statusBarHeight > 0) {
                const t = document.createElement("div");
                if (t.style.position = "absolute", t.style.width = "100%", t.style.height = `${e.statusBarHeight}px`, t.style.bottom = "0", t.style.left = "0", n.workspace && o.statusBarBackground ? t.style.backgroundColor = o.statusBarBackground : !n.workspace && o.statusBarNoFolderBackground && (t.style.backgroundColor = o.statusBarNoFolderBackground), c.appendChild(t), o.statusBarBorder) {
                    const s = document.createElement("div");
                    s.style.position = "absolute", s.style.width = "100%", s.style.height = "1px", s.style.top = "0", s.style.borderTop = `1px solid ${o.statusBarBorder}`, t.appendChild(s)
                }
            }
            window.document.body.appendChild(c)
        }
        performance.mark("code/didShowPartsSplash")
    }
    const {
        result: k,
        configuration: j
    } = await g.load("vs/workbench/workbench.desktop.main", {
        configureDeveloperSettings: function(n) {
            return {
                forceDisableShowDevtoolsOnError: typeof n.extensionTestsPath == "string" || n["enable-smoke-test-driver"] === !0,
                forceEnableDeveloperKeybindings: Array.isArray(n.extensionDevelopmentPath) && n.extensionDevelopmentPath.length > 0,
                removeDeveloperKeybindingsAfterLoad: !0
            }
        },
        beforeImport: function(n) {
            w(n), Object.defineProperty(window, "vscodeWindowId", {
                get: () => n.windowId
            }), window.requestIdleCallback(() => {
                const y = document.createElement("canvas");
                y.getContext("2d")?.clearRect(0, 0, y.width, y.height), y.remove()
            }, {
                timeout: 50
            }), performance.mark("code/willLoadWorkbenchMain")
        }
    });
    performance.mark("code/didLoadWorkbenchMain"), k.main(j)
})();

//# sourceMappingURL=http://go/sourcemap/sourcemaps/0cf8b06883f54e26bb4f0fb8647c9500ccb43310/core/vs/code/electron-sandbox/workbench/workbench.js.map

//# debugId=c84bd75f-4e3e-5630-bfe6-eee99e1f147a