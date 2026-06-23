/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b24cd08e-d756-5004-8233-e03182c8bcc1")
    } catch (e) {}
}();
(function() {
    const m = window.vscode,
        d = m.process;
    async function h(s, t) {
        const o = await x(),
            e = t?.resolveEsModule?.(o) ?? s;
        v(s, e), t?.beforeImport?.(o);
        const {
            enableDeveloperKeybindings: a,
            removeDeveloperKeybindingsAfterLoad: r,
            developerDeveloperKeybindingsDisposable: p,
            forceDisableShowDevtoolsOnError: n
        } = k(o, t);
        A(o);
        const i = new URL(`${D(o.appRoot,{isWindows:d.platform==="win32",scheme:"vscode-file",fallbackAuthority:"vscode-app"})}/out/`);
        globalThis._VSCODE_FILE_ROOT = i.toString(), M(), E(o, i);
        try {
            let c;
            return c = await import(new URL(`${e}.js`, i).href), p && r && p(), {
                result: c,
                configuration: o
            }
        } catch (c) {
            throw S(c, a && !n), c
        }
    }

    function v(s, t) {
        if (t === s) return;
        const o = `${s.split("/").pop()}.css`,
            e = `${t.split("/").pop()}.css`;
        if (o === e) return;
        const a = document.querySelector(`link[rel="stylesheet"][href$="${o}"]`),
            r = a?.getAttribute("href");
        a && r && a.setAttribute("href", `${r.slice(0,r.length-o.length)}${e}`)
    }
    async function x() {
        const s = setTimeout(() => {
            console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...")
        }, 1e4);
        performance.mark("code/willWaitForWindowConfig");
        const t = await m.context.resolveConfiguration();
        return performance.mark("code/didWaitForWindowConfig"), clearTimeout(s), t
    }

    function k(s, t) {
        const {
            forceEnableDeveloperKeybindings: o,
            disallowReloadKeybinding: e,
            removeDeveloperKeybindingsAfterLoad: a,
            forceDisableShowDevtoolsOnError: r
        } = typeof t?.configureDeveloperSettings == "function" ? t.configureDeveloperSettings(s) : {
            forceEnableDeveloperKeybindings: !1,
            disallowReloadKeybinding: !1,
            removeDeveloperKeybindingsAfterLoad: !1,
            forceDisableShowDevtoolsOnError: !1
        }, n = !!(!!d.env.VSCODE_DEV || o);
        let i;
        return n && (i = w(e)), {
            enableDeveloperKeybindings: n,
            removeDeveloperKeybindingsAfterLoad: a,
            developerDeveloperKeybindingsDisposable: i,
            forceDisableShowDevtoolsOnError: r
        }
    }

    function w(s) {
        const t = m.ipcRenderer,
            o = function(n) {
                return [n.ctrlKey ? "ctrl-" : "", n.metaKey ? "meta-" : "", n.altKey ? "alt-" : "", n.shiftKey ? "shift-" : "", n.keyCode].join("")
            },
            e = d.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
            a = "123",
            r = d.platform === "darwin" ? "meta-82" : "ctrl-82";
        let p = function(n) {
            const i = o(n);
            i === e || i === a ? t.send("vscode:toggleDevTools") : i === r && !s && t.send("vscode:reloadWindow")
        };
        return window.addEventListener("keydown", p),
            function() {
                p && (window.removeEventListener("keydown", p), p = void 0)
            }
    }

    function A(s) {
        globalThis._VSCODE_NLS_MESSAGES = s.nls.messages, globalThis._VSCODE_NLS_LANGUAGE = s.nls.language;
        let t = s.nls.language || "en";
        t === "zh-tw" ? t = "zh-Hant" : t === "zh-cn" && (t = "zh-Hans"), window.document.documentElement.setAttribute("lang", t)
    }

    function S(s, t) {
        t && m.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${s}`), s && typeof s != "string" && s.stack && console.error(s.stack)
    }

    function D(s, t) {
        let o = s.replace(/\\/g, "/");
        o.length > 0 && o.charAt(0) !== "/" && (o = `/${o}`);
        let e;
        return t.isWindows && o.startsWith("//") ? e = encodeURI(`${t.scheme||"file"}:${o}`) : e = encodeURI(`${t.scheme||"file"}://${t.fallbackAuthority||""}${o}`), e.replace(/#/g, "%23")
    }

    function M() {
        const s = d.env.NODE_ENV ?? (d.env.VSCODE_DEV ? "development" : "production"),
            t = globalThis;
        if (t.process === void 0) {
            t.process = {
                env: {
                    NODE_ENV: s
                }
            };
            return
        }
        t.process.env ??= {}, t.process.env.NODE_ENV ??= s
    }

    function E(s, t) {
        const o = {
                react: "react/esm-index-development.js",
                "react/jsx-runtime": "react/esm-jsx-runtime-development.js",
                "react/compiler-runtime": "react/esm-compiler-runtime-development.js",
                "react-dom": "react-dom/esm-index-development.js",
                "react-dom/client": "react-dom/esm-client-development.js",
                "react-vnc": "react-vnc/dist/react-vnc.js",
                "motion/react": "motion/dist/es/react.mjs",
                "motion/react-m": "motion/dist/es/react-m.mjs",
                "framer-motion": "framer-motion/dist/es/index.mjs",
                "framer-motion/m": "framer-motion/dist/es/m.mjs",
                "motion-dom": "motion-dom/dist/es/index.mjs",
                "motion-utils": "motion-utils/dist/es/index.mjs",
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
            e = "../../packages/ui/dist/automations.js",
            a = {
                "proto/": "../proto/",
                "@anysphere/proto/": "../proto/",
                "@bufbuild/protobuf": "bufbuild/protobuf.js",
                "@tanstack/react-query": "tanstack/react-query/index.js",
                "@sentry/core": "sentry/core/index.js",
                "@sentry/types": "sentry/types/index.js",
                "@sentry-internal/browser-utils": "sentry/browser-utils/index.js",
                "@anysphere/constants": "../../packages/constants/dist/index.js",
                "@anysphere/mcp-core/admin-mcp-policy": "../../packages/mcp-core/dist/admin-mcp-policy.js",
                "@anysphere/mcp-core/fsm/coordinator": "../../packages/mcp-core/dist/fsm/coordinator.js",
                "@anysphere/mcp-core/fsm/error-classification": "../../packages/mcp-core/dist/fsm/error-classification.js",
                "@anysphere/mcp-core/lifecycle": "../../packages/mcp-core/dist/lifecycle.js",
                "@anysphere/mcp-core/lifecycle/client-adapter": "../../packages/mcp-core/dist/lifecycle/client-adapter.js",
                "@anysphere/mcp-core/lifecycle/server-lifecycle": "../../packages/mcp-core/dist/lifecycle/server-lifecycle.js",
                "@anysphere/mcp-core/lifecycle/transport-factory": "../../packages/mcp-core/dist/lifecycle/transport-factory.js",
                "@anysphere/mcp-core/oauth/mcp-oauth-keys": "../../packages/mcp-core/dist/oauth/mcp-oauth-keys.js",
                "@anysphere/mcp-core/connectivity/mcp-connectivity-change": "../../packages/mcp-core/dist/connectivity/mcp-connectivity-change.js",
                "@anysphere/mcp-core/config/mcp-config-service": "../../packages/mcp-core/dist/config/mcp-config-service.js",
                "@anysphere/mcp-core/transport/mcp-url-utils": "../../packages/mcp-core/dist/transport/mcp-url-utils.js",
                "@anysphere/agent-analytics": "../../packages/agent-analytics/dist/browser.js",
                "@anysphere/agent-analytics/browser": "../../packages/agent-analytics/dist/browser.js",
                "@anysphere/agent-analytics/commit-scoring": "../../packages/agent-analytics/dist/commit-scoring/index.js",
                "@anysphere/agent-exec": "../../packages/agent-exec/dist/index.js",
                "@anysphere/agent-core": "../../packages/agent-core/dist/index.js",
                "@anysphere/agent-kv": "../../packages/agent-kv/dist/index.js",
                "@anysphere/agent-transcript": "../../packages/agent-transcript/dist/index.js",
                "@anysphere/agent-transcript/browser": "../../packages/agent-transcript/dist/browser.js",
                "@anysphere/claude-code-import": "../../packages/claude-code-import/dist/index.js",
                "@anysphere/agent-client": "../../packages/agent-client/dist/index.js",
                "@anysphere/context": "../../packages/context/dist/index.js",
                "@anysphere/context-rpc": "../../packages/context-rpc/dist/index.js",
                "@anysphere/cursor-backend-control-mcp": "../../packages/cursor-backend-control-mcp/dist/index.js",
                "@anysphere/metrics": "../../packages/metrics/dist/index.js",
                "@anysphere/ui/components/Automations": e,
                "@anysphere/ui/components/Automations/AgentSettingsForm": e,
                "@anysphere/ui/components/Automations/AsyncAgentsList": e,
                "@anysphere/ui/components/Automations/PlatformTestModalShell": e,
                "@anysphere/ui/components/Automations/actions": e,
                "@anysphere/ui/components/Automations/components": e,
                "@anysphere/ui/components/Automations/components/DetailHeader": e,
                "@anysphere/ui/components/Automations/hooks": e,
                "@anysphere/ui/components/Automations/hooks/useValidateAutomationToolsStateMachine": e,
                "@anysphere/ui/components/Automations/platform/capabilities": e,
                "@anysphere/ui/components/Automations/run-history": e,
                "@anysphere/ui/components/Automations/run-history/utils/run-history-utils": e,
                "@anysphere/ui/components/Automations/run-history/utils/summary-stats": e,
                "@anysphere/ui/components/Automations/runtime": e,
                "@anysphere/ui/components/Automations/runtime/AutomationsRuntime": e,
                "@anysphere/ui/components/Automations/templates/TemplateGallery": e,
                "@anysphere/ui/components/Automations/triggers": e,
                "@anysphere/ui/components/Automations/triggers/InlineTriggerButton": e,
                "@anysphere/ui/components/Automations/triggers/trigger-picker-styles": e,
                "@anysphere/ui/components/Automations/types": e,
                "@anysphere/ui/components/Automations/utils/enableBlockingIssues": e,
                "@anysphere/ui/components/Automations/utils/formatters": e,
                "@anysphere/ui/components/Automations/utils/getDefaultWorkflowData": e,
                "@anysphere/ui/components/Automations/utils/internal-user": e,
                "@anysphere/ui/components/Automations/utils/mcp-plugin-by-server-name": e,
                "@anysphere/ui/components/Automations/utils/no-repo-environment": e,
                "@anysphere/ui/components/Automations/utils/pendingEnableRequest": e,
                "@anysphere/ui/components/Automations/utils/prefill": e,
                "@anysphere/ui/components/Automations/utils/processAvailableModels": e,
                "@anysphere/ui/components/Automations/utils/repo-compatibility": e,
                "@anysphere/ui/components/Automations/utils/repo-url-identity": e,
                "@anysphere/ui/components/Automations/utils/slack-conversations": e,
                "@anysphere/ui/components/Automations/utils/slack-channel-name-map": e,
                "@anysphere/ui/components/Automations/utils/triggerDataUtils": e,
                "@anysphere/ui": "../../packages/ui/dist/bundle.js",
                "@anysphere/utils": "../../packages/utils/dist/browser.js",
                "@anysphere/git-core": "../../packages/git-core/dist/index.js",
                "@anysphere/git-core/diagnostics": "../../packages/git-core/dist/diagnostics.js",
                "@anysphere/hooks": "../../packages/hooks/dist/index.js",
                "@anysphere/hooks-carriers": "../../packages/hooks-carriers/dist/index.js",
                "@anysphere/proto/redaction-schema": "../../packages/proto/dist/redactionSchema.js",
                "@anysphere/redaction": "../../packages/redaction/dist/index.js",
                "@anysphere/redacted-protos": "../../packages/redacted-protos/dist/index.js",
                "@anysphere/redacted-protos/agent-v1": "../../packages/redacted-protos/dist/agent-v1.js",
                "@anysphere/redacted-protos/aiserver-v1": "../../packages/redacted-protos/dist/aiserver-v1.js",
                "@anysphere/redacted-protos/type-guards": "../../packages/redacted-protos/dist/type-guards.js"
            },
            r = {
                imports: {}
            };
        for (const [i, c] of Object.entries(o)) r.imports[i] = new URL(`../node_modules/${c}`, t).href;
        for (const [i, c] of Object.entries(a)) r.imports[i] = new URL(`./external/${c}`, t).href;
        const p = ["api/context", "api/diag", "api/metrics", "api/propagation", "api/trace", "baggage/context-helpers", "baggage/internal/baggage-impl", "baggage/internal/symbol", "baggage/types", "baggage/utils", "common/Attributes", "common/Exception", "common/Time", "context/context", "context/NoopContextManager", "context/types", "diag/ComponentLogger", "diag/consoleLogger", "diag/internal/logLevelLogger", "diag/internal/noopLogger", "diag/types", "experimental/index", "experimental/trace/SugaredOptions", "experimental/trace/SugaredTracer", "internal/global-utils", "internal/semver", "metrics/Meter", "metrics/MeterProvider", "metrics/Metric", "metrics/NoopMeter", "metrics/NoopMeterProvider", "metrics/ObservableResult", "platform/browser/globalThis", "platform/browser/index", "platform/index", "platform/node/globalThis", "platform/node/index", "propagation/NoopTextMapPropagator", "propagation/TextMapPropagator", "trace/attributes", "trace/context-utils", "trace/internal/tracestate-impl", "trace/internal/tracestate-validators", "trace/internal/utils", "trace/invalid-span-constants", "trace/link", "trace/NonRecordingSpan", "trace/NoopTracer", "trace/NoopTracerProvider", "trace/ProxyTracer", "trace/ProxyTracerProvider", "trace/Sampler", "trace/SamplingResult", "trace/span", "trace/span_context", "trace/span_kind", "trace/spancontext-utils", "trace/SpanOptions", "trace/status", "trace/trace_flags", "trace/trace_state", "trace/tracer", "trace/tracer_options", "trace/tracer_provider", "context-api", "diag-api", "index", "metrics-api", "propagation-api", "trace-api", "version"],
            n = new URL("../node_modules/@opentelemetry/api/build/esm/", t).href;
        for (const i of p) r.imports[`${n}${i}`] = `${n}${i}.js`;
        if (r.imports[`${n}platform`] = `${n}platform/index.js`, r.imports[`${n}experimental`] = `${n}experimental/index.js`, r.imports[`${n}platform/node`] = `${n}platform/node/index.js`, r.imports[`${n}platform/browser`] = `${n}platform/browser/index.js`, s.cssModules && s.cssModules.size > 0) {
            performance.mark("code/willAddCssLoader"), globalThis._VSCODE_CSS_LOAD = function(l, y, f) {
                const u = document.createElement("link");
                u.rel = "stylesheet", u.href = l + "?hash=" + f, u.type = "text/css", u.media = "screen", u.id = y.replace(".css", ""), document.head.appendChild(u)
            };
            const i = s.cssModules,
                c = new Map(Array.from(i, ([l, y]) => [l, {
                    hash: y,
                    url: new URL(l, t).href
                }])),
                b = `
				const cssMapping = ${JSON.stringify(Object.fromEntries(c))};
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
                _ = new Blob([b], {
                    type: "application/javascript"
                }),
                L = URL.createObjectURL(_);
            for (const [l, y] of s.cssModules) {
                const f = new URL(l, t).href;
                r.imports[f] = L + "#module=" + encodeURIComponent(l)
            }
            const O = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
                    createScript(l) {
                        return l
                    }
                }),
                j = JSON.stringify(r, void 0, 2),
                g = document.createElement("script");
            g.type = "importmap", g.setAttribute("nonce", "0c6a828f1297"), g.textContent = O?.createScript(j) ?? j, document.head.appendChild(g), performance.mark("code/didAddCssLoader")
        }
    }
    globalThis.MonacoBootstrapWindow = {
        load: h
    }
})(), (async function() {
    const m = window.MonacoBootstrapWindow,
        {
            result: d,
            configuration: h
        } = await m.load("vs/code/electron-sandbox/extensionMonitor/extensionMonitorMain", {
            configureDeveloperSettings: function() {
                return {
                    forceEnableDeveloperKeybindings: !0
                }
            }
        });
    d.startup(h)
})();

//# sourceMappingURL=http://go/sourcemap/sourcemaps/46fb7aafe279d7c72346febe68c2e004b7d1de60/core/vs/code/electron-sandbox/extensionMonitor/extensionMonitor.js.map

//# debugId=b24cd08e-d756-5004-8233-e03182c8bcc1