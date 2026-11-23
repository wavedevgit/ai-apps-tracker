export const __rspack_esm_ids = [839342];
export const __webpack_modules__ = {
    t0Nb: (function(a, b, c) {
        c.d(b, {
            a: () => h,
            b: () => g,
            c: () => d,
            d: () => u,
            e: () => s,
            f: () => x,
            g: () => w,
            h: () => y
        });
        let d = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var e, f, g = ((e = {}).LOG = "log", e.RUN_START = "run_start", e.ENVIRONMENT_STATUS = "environment_status", e.OUTPUT = "output", e.ERROR = "error", e.RUN_COMPLETE = "run_complete", e),
            h = ((f = {})[f.INITIALIZING = 0] = "INITIALIZING", f[f.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", f[f.RUNNING_CODE = 2] = "RUNNING_CODE", f);

        function i(a, b) {
            if (null === a || "string" == typeof a || "number" == typeof a || "boolean" == typeof a || "bigint" == typeof a) return a;
            if ("symbol" == typeof a || "function" == typeof a || void 0 === a) return String(a);
            if (b.has(a)) return b.get(a);
            try {
                return structuredClone(a)
            } catch {}
            let c = Object.prototype.toString.call(a);
            if ("[object Date]" === c) return new Date(a.getTime());
            if ("[object RegExp]" === c) {
                var d;
                let b;
                return (b = new RegExp((d = a).source, d.flags)).lastIndex = d.lastIndex, b
            }
            if ("[object ArrayBuffer]" === c) return a.slice(0);
            if ("[object DataView]" === c) {
                let c = i(a.buffer, b);
                try {
                    return new DataView(c, a.byteOffset, a.byteLength)
                } catch {
                    return String(a)
                }
            }
            if (ArrayBuffer.isView(a) && !(a instanceof DataView)) try {
                let b = a.constructor;
                if ("function" == typeof a.slice) return a.slice();
                let c = new b(a.length);
                return c.set(a), c
            } catch {
                return String(a)
            }
            if ("[object Map]" === c) {
                let c = new Map;
                for (let [d, e] of(b.set(a, c), a)) c.set(j(d, b), j(e, b));
                return c
            }
            if ("[object Set]" === c) {
                let c = new Set;
                for (let d of (b.set(a, c), a)) c.add(j(d, b));
                return c
            }
            if ("u" > typeof Blob && a instanceof Blob) try {
                if ("u" > typeof File && a instanceof File) return new File([a], a.name, {
                    type: a.type,
                    lastModified: a.lastModified
                });
                return new Blob([a], {
                    type: a.type
                })
            } catch {
                return String(a)
            }
            if ("u" > typeof URL && a instanceof URL) try {
                return new URL(a.toString())
            } catch {
                return String(a)
            }
            if ("u" > typeof URLSearchParams && a instanceof URLSearchParams) try {
                return new URLSearchParams(a.toString())
            } catch {
                return String(a)
            }
            if (a instanceof Error) {
                let c;
                try {
                    let b = a.constructor;
                    c = "function" == typeof b ? new b(a.message) : Error(a.message)
                } catch {
                    c = Error(a.message)
                }
                if (c.name = a.name, "string" == typeof a.stack && (c.stack = a.stack), "cause" in a) try {
                    c.cause = j(a.cause, b)
                } catch {
                    c.cause = String(a.cause)
                }
                for (let d of Object.keys(a)) try {
                    c[d] = j(a[d], b)
                } catch {
                    c[d] = String(a[d])
                }
                return c
            }
            if ("u" > typeof SharedArrayBuffer && a instanceof SharedArrayBuffer || "u" > typeof WeakMap && a instanceof WeakMap || "u" > typeof WeakSet && a instanceof WeakSet) return String(a);
            if (Array.isArray(a)) {
                let c = Array(a.length);
                b.set(a, c);
                for (let d = 0; d < a.length; d++) d in a && (c[d] = j(a[d], b));
                return c
            }
            let e = {};
            for (let c of (b.set(a, e), Object.keys(a))) {
                let d;
                try {
                    d = a[c]
                } catch (a) {
                    d = String(a)
                }
                e[c] = j(d, b)
            }
            return e
        }

        function j(a, b) {
            try {
                return structuredClone(a)
            } catch {}
            return i(a, b)
        }
        let k = "ABORT",
            l = "CALL",
            m = "REJECT",
            n = "RESOLVE";

        function o(a, b) {
            a.addEventListener("message", a => {
                let c = a.data;
                if (Array.isArray(c) && c[0] === l) {
                    a.stopImmediatePropagation();
                    let [d] = a.ports;
                    if (!d) throw Error("RPCCallMessage must contains a port.");
                    b ? async function() {
                        let a = new AbortController;
                        try {
                            d.onmessage = b => {
                                let {
                                    data: c
                                } = b;
                                return Array.isArray(c) && c[0] === k && a.abort()
                            }, d.postMessage([n, await b.call({
                                signal: a.signal
                            }, ...c.slice(1))])
                        } catch (e) {
                            if (e instanceof Error && "DataCloneError" === e.name) try {
                                d.postMessage([n, await b.call({
                                    signal: a.signal
                                }, ... function(a) {
                                    let b = i(a, new WeakMap);
                                    try {
                                        return structuredClone(b)
                                    } catch {}
                                    return b
                                }(c.slice(1)))]);
                                return
                            } catch {}
                            d.postMessage([m, e])
                        } finally {
                            d.close()
                        }
                    }(): (d.postMessage([m, Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.")]), d.close())
                }
            }), a.start();
            let c = b => function() {
                    for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                    return new Promise((c, e) => {
                        let {
                            port1: f,
                            port2: g
                        } = new MessageChannel;
                        f.onmessage = a => {
                            let b = a.data;
                            b[0] === n ? c(b[1]) : e(b[1]), f.close()
                        }, b?.signal?.addEventListener("abort", () => {
                            f.postMessage([k]), f.close(), e(Error("Aborted."))
                        }), a.postMessage([l, ...d], [g, ...b.transfer || []])
                    })
                },
                d = c({});
            return d.withOptions = c, d
        }
        let p = "GENERATOR_GENERATE";

        function q(a, b) {
            a.addEventListener("message", a => {
                let c = a.data;
                if (Array.isArray(c) && c[0] === p) {
                    if (a.stopImmediatePropagation(), !b) throw Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.");
                    let [d, e, ...f] = c, g = b(...f);
                    o(e.next, g.next.bind(g)), o(e.return, a => g.return?.(a) || {
                        done: !0
                    }), o(e.throw, a => g.throw?.(a) || Promise.reject(a)), o(e.asyncDispose, async () => {
                        let a = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            b = Symbol.dispose || Symbol.for("Symbol.dispose");
                        a in g ? await g[a]?.() : b in g && g[b]?.()
                    })
                }
            }), a.start();
            let c = b => {
                    let c;
                    return function() {
                        for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                        let {
                            port1: g,
                            port2: h
                        } = new MessageChannel, {
                            port1: i,
                            port2: j
                        } = new MessageChannel, {
                            port1: k,
                            port2: l
                        } = new MessageChannel, {
                            port1: m,
                            port2: n
                        } = new MessageChannel, q = {
                            signal: b.signal
                        }, r = () => {
                            g.close(), h.close(), i.close(), j.close(), k.close(), l.close(), m.close(), n.close()
                        }, s = o(g).withOptions(q), t = o(i).withOptions(q), u = o(k).withOptions(q), v = o(m).withOptions(q), w = !1, x = async a => {
                            if (c?.(), w) return {
                                done: !0
                            };
                            let b = await a();
                            return b.done && (w = !0, r()), b
                        }, y = {
                            next: a => x(() => t(a)),
                            return: a => x(() => u(a)),
                            throw: a => x(() => v(a)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async a => {
                                c?.(), await a(), w = !0, r(), c = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => s()),
                            [Symbol.asyncIterator]: () => y
                        };
                        return a.postMessage([p, {
                            asyncDispose: h,
                            next: j,
                            return: l,
                            throw: n
                        }, ...e], [...b.transfer || [], h, j, l, n]), b.signal?.addEventListener("abort", () => {
                            c = () => {
                                throw Error("This generator has been aborted.")
                            }, r()
                        }, {
                            once: !0
                        }), y
                    }
                },
                d = c({});
            return d.withOptions = c, d
        }
        var r = c("lAQI");
        async function s(a) {
            let {
                host: b,
                signal: c
            } = a, {
                ports: d,
                replyPort: e
            } = "iframe" in a ? await

            function(a) {
                let {
                    iframe: b,
                    origin: c,
                    signal: d
                } = a, e = b.ownerDocument.defaultView;
                if (null == e || d?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let f = r.F({
                    type: r.z("init"),
                    ports: r.J(r.L(), r.t(MessagePort)),
                    replyPort: r.t(MessagePort)
                });
                return new Promise((a, g) => {
                    let h = () => {
                            e.removeEventListener("message", l), b.removeEventListener("error", k), d?.removeEventListener("abort", j)
                        },
                        i = a => {
                            h(), g(a)
                        },
                        j = () => {
                            i(new DOMException("Sandbox connection cancelled.", "AbortError"))
                        },
                        k = () => {
                            i(Error("Unable to load the code execution sandbox."))
                        },
                        l = d => {
                            if (d.source !== b.contentWindow || d.origin !== c) return;
                            let e = f.safeParse(d.data);
                            e.success && (h(), a(e.data))
                        };
                    e.addEventListener("message", l), null != d && b.addEventListener("error", k, {
                        once: !0
                    }), d?.addEventListener("abort", j, {
                        once: !0
                    })
                })
            }(a): a, f = new Set([...Object.values(d), e]), g = new AbortController, h = () => {
                for (let a of (c?.removeEventListener("abort", h), g.abort(), f)) a.close();
                f.clear()
            };
            try {
                c?.throwIfAborted();
                let i = {};
                for (let [a, c] of Object.entries(b)) {
                    if (null == c) continue;
                    let d = new MessageChannel;
                    f.add(d.port1), f.add(d.port2);
                    let e = function(a, b, c) {
                        function d() {
                            for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                            let f = a[b];
                            if (null == f) throw Error(`Sandbox host method "${b}" is unavailable`);
                            return f.apply(this, d)
                        }
                        return t(c) ? async function*() {
                            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                            return yield* d.apply(this, b)
                        }: d
                    }(b, a, c);
                    t(e) ? q(d.port1, e) : o(d.port1, e), i[a] = d.port2
                }
                e.postMessage(i, Object.values(i)), e.start();
                let j = new Set(a.generatorKeys ?? ["runUserCode"]),
                    k = Object.fromEntries(Object.entries(d).map(a => {
                        let [b, d] = a, e = j.has(b) ? q(d) : o(d);
                        if (null == c) return [b, e];
                        let f = a => {
                            let b = null == a.signal ? g.signal : AbortSignal.any([g.signal, a.signal]),
                                c = e.withOptions({
                                    ...a,
                                    signal: b
                                });
                            return function() {
                                for (var a = arguments.length, d = Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                                return b.throwIfAborted(), c(...d)
                            }
                        };
                        return [b, Object.assign(f({}), {
                            withOptions: f
                        })]
                    }));
                return c?.addEventListener("abort", h, {
                    once: !0
                }), c?.throwIfAborted(), {
                    api: k,
                    dispose: h
                }
            } catch (a) {
                throw h(), a
            }
        }

        function t(a) {
            return "AsyncGeneratorFunction" === a.constructor.name
        }

        function u(a) {
            let {
                disableNetworkRequests: b,
                domains: c,
                additionalResourceDomains: d = [],
                unsafeAllowAllNetworkRequests: e
            } = a;
            return b ? {
                disableNetworkRequests: !0,
                resourceDomains: [],
                connectDomains: [],
                isTrusted: !1
            } : e ? null : {
                connectDomains: c,
                resourceDomains: [...c, ...d],
                isTrusted: !1
            }
        }
        let v = new Set(["blob", "c", "cid", "data", "eval", "filesystem", "inline", "trusted-types-policy", "trusted-types-sink", "wasm-eval"]);

        function w(a) {
            return v.has(a) ? null : new URL(a).origin
        }

        function x() {
            let {
                origin: a,
                isStaging: b = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return `${a??(b?"https://staging-web-sandbox.oaiusercontent.com":"https://web-sandbox.oaiusercontent.com")}?${b?"unsafeSkipTargetOriginCheck=true":""}`
        }

        function y(a) {
            if (!z(a) || "structured_event" !== a.type || !z(a.messageType) || "string" != typeof a.messageType.$type || 0 === a.messageType.$type.length || !z(a.payload)) return;
            let b = a.payload;
            if (!["@type", "codexMetadata", "codex_metadata", "webFrontend", "web_frontend"].some(a => Object.hasOwn(b, a))) return {
                type: "structured_event",
                messageType: {
                    $type: a.messageType.$type
                },
                payload: a.payload
            }
        }

        function z(a) {
            return null != a && "object" == typeof a && !Array.isArray(a)
        }
    }),
    RjXy: (function(a, b, c) {
        var d, e = ((d = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", d.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", d.UNRECOGNIZED = "UNRECOGNIZED", d);
        c.d(b, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentInteraction"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentViewed"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceConnectFlowStep"
            },
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceLedgerWidgetEvent"
            },
            e: e,
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceClosed"
            },
            g: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceViewed"
            },
            h: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceWidgetViewed"
            }
        })
    }),
    Btes: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("Cslg"),
            f = c("dQRk"),
            g = c("KhaL"),
            h = c("xwf6");
        c.d(b, {}, {
            a: function(a) {
                let {
                    scope: b,
                    chatGptConversation: c,
                    toolIdentity: i,
                    access: j,
                    signal: k,
                    toolArguments: l
                } = a, m = (0, h.b)(i);
                if (null == m || null == i) return null;
                if (null == c) return (0, h.a)({
                    scope: b,
                    access: j,
                    ...m,
                    toolArguments: l
                });
                let n = b.get(e.f);
                if (null == j || null == n) throw Error("MCP app connection identity changed");
                j.assertActive();
                let o = "tpp" === b.get(f.y, c.id);
                return (0, g.b)({
                    scope: b,
                    accountId: n,
                    appUri: `connectors://${i.connectorId}`,
                    chatGptConversationId: c.id,
                    threadId: o ? c.id : void 0,
                    productSku: o ? "TPP" : void 0,
                    messageId: c.messageId,
                    originMetadata: {
                        "openai/connector_id": i.connectorId,
                        "openai/link_id": m.linkId
                    }
                }).handleRequest({
                    method: "tools/call",
                    params: {
                        name: i.actionName,
                        arguments: l
                    }
                }, k).then(a => (j.assertActive(), d.d.parse(a)))
            }
        })
    }),
    cYqq: (function(a, b, c) {
        var d = c("JKSp"),
            e = c("lAQI"),
            f = c("Cslg"),
            g = c("yGJW"),
            h = c("Qg7S"),
            i = c("OMIV");
        let j = e.F({
            payload: e.F({
                social_proof_variant: e.p(["control", "byline_only", "use_case", "social_proof", "combined"])
            })
        });
        c.d(b, {}, {
            a: function(a, b, c, e, k) {
                let l, m = j.safeParse(b);
                if (!m.success) return !1;
                "ledger.connection_card_viewed" === c ? l = "content_variant_us" : "plugin_management.connection_card_viewed" === c && (l = k);
                let n = a.get(i.g);
                if (l && n && n.getContext().user.userID === a.get(f.k) && (0, h.a)(n)) {
                    let a = n.getLayer("4125256861");
                    a.__evaluation?.allocated_experiment_name && a.__evaluation.explicit_parameters?.includes(l) && a.__value[l] === m.data.payload.social_proof_variant && a.get(l, "off")
                }
                return (0, g.a)(a, d.a, {
                    eventName: c,
                    eventData: JSON.stringify({
                        social_proof_variant: m.data.payload.social_proof_variant,
                        ...e
                    })
                }), !0
            }
        })
    }),
    kAhA: (function(a, b, c) {
        var d = c("gIcl"),
            e = c("Cslg"),
            f = c("Kwur"),
            g = c("MfrC");

        function h(a, b, c, d, e) {
            if (!b?.owner.isCurrent()) return Promise.resolve();
            let {
                context: h,
                owner: i
            } = b, j = (async () => {
                try {
                    await f.Request.safePost("/aip/ledger/funnel-events", {
                        requestBody: {
                            flow_type: "account",
                            flow_id: h.flowId,
                            event_id: "linking_started" === c ? h.flowId : crypto.randomUUID(),
                            step: c,
                            start: d,
                            entry_point: h.entryPoint ?? "unknown",
                            beacon_type: h.beaconType,
                            source: "client",
                            component: e
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": i.accountId,
                            "x-openai-use-sheep": "1"
                        },
                        retry: !1,
                        ...(0, g.c)(i, AbortSignal.any([i.signal, AbortSignal.timeout(1e4)]))
                    })
                } catch {}
            })();
            return i.retainTelemetry(j), j
        }
        c.d(b, {}, {
            a: function(a, b, c, e) {
                if (!b.isCurrent()) return;
                let f = {
                    context: {
                        ...c,
                        hasRecordedLinkingStarted: !0
                    },
                    owner: b
                };
                return h(a, f, "linking_started", {
                    flow_path: e,
                    platform: (0, d.d)() ? "mobile_web" : "desktop_web"
                }), f
            },
            b: function(a, b) {
                let c = a.get(e.n),
                    {
                        authenticatedUserId: d,
                        userId: f,
                        accountUserId: h
                    } = c;
                if (null == d || null == f || null == h) return;
                let i = {
                        accountId: b,
                        userId: d,
                        accountUserId: h
                    },
                    j = a => (0, g.d)(a, i) && !a.accountLoading && a.accountId === b && a.userId === f;
                if (!j(c)) return;
                let k = (0, g.e)(a, j),
                    l = new Set,
                    m = !1,
                    n = () => {
                        m && 0 === l.size && k.abort()
                    };
                return {
                    userId: d,
                    analyticsUserId: f,
                    accountId: b,
                    accountUserId: h,
                    signal: k.signal,
                    isCurrent: () => !k.signal.aborted && j(a.get(e.n)),
                    retainTelemetry: a => {
                        let b;
                        if (k.signal.aborted) return void a.catch(() => void 0);
                        let c = Promise.race([a, new Promise(a => {
                            b = setTimeout(a, 1e4)
                        })]).catch(() => void 0).finally(() => {
                            clearTimeout(b), l.delete(c), n()
                        });
                        l.add(c)
                    },
                    dispose: () => {
                        m = !0, n()
                    }
                }
            },
            c: h
        })
    }),
    XCEe: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(814221), c.e(727671), c.e(339526), c.e(860579), c.e(929743), c.e(212381), c.e(260407)]).then(c.bind(c, "iAuu"))
            }
        })
    }),
    ywSA: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(514247)]).then(c.bind(c, "shkb"))
            }
        })
    }),
    JLZd: (function(a, b, c) {
        var d = c("Cslg"),
            e = c("TNWb"),
            f = c("nlNF"),
            g = c("kAhA");
        c.d(b, {}, {
            a: function(a, b, c) {
                let h, i, j, k = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                if ("u" < typeof IntersectionObserver) return;
                let l = a.get(d.n),
                    m = l.authenticatedAccountId;
                if (null == l.authenticatedUserId || null == l.userId || null == m) return;
                let n = b.ownerDocument,
                    o = !1,
                    p = !1,
                    q = () => {
                        if (p) return;
                        let i = a.get(d.n);
                        i.authenticatedUserId !== l.authenticatedUserId || i.authenticatedAccountId !== l.authenticatedAccountId || i.userId !== l.userId || null != l.accountUserId && i.accountUserId !== l.accountUserId ? s() : (null == h && (h = (0, g.b)(a, m)), null == h || (h.isCurrent() ? !(!o || "visible" !== n.visibilityState || !(0, f.h)(a) || (0, e.c)() || !b.isConnected || b.closest('[aria-hidden="true"], [inert], [hidden]')) && b.checkVisibility({
                            visibilityProperty: !0,
                            opacityProperty: !0
                        }) && (p = !0, c(h), s()) : s()))
                    },
                    r = new IntersectionObserver(a => {
                        o = a.some(a => a.isIntersecting && a.intersectionRatio >= k && a.intersectionRect.width > 0 && a.intersectionRect.height > 0), q()
                    }, {
                        threshold: 0 === k ? [0, Number.EPSILON] : .5
                    }),
                    s = () => {
                        p = !0, r.disconnect(), i?.(), j?.(), n.removeEventListener("visibilitychange", q), h?.dispose()
                    };
                return (i = a.watch(a => {
                    let {
                        get: b
                    } = a;
                    b(d.n), b(f.c), q()
                }), p) ? i() : (j = (0, e.e)(q), n.addEventListener("visibilitychange", q), r.observe(b)), s
            }
        })
    }),
    MfrC: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Cslg"),
            f = c("OWtl");
        let g = (0, d.c)(f.a, a => {
            let {
                get: b
            } = a, {
                accountStructure: c,
                accountUserId: d
            } = b(e.n);
            return "personal" === c ? d?.split("__")[0] : d
        });

        function h(a, b) {
            let {
                accountId: c,
                userId: d,
                accountUserId: e
            } = b;
            return !a.authLoading && "chatgpt" === a.authMethod && a.authenticatedAccountId === c && a.authenticatedUserId === d && (null == a.accountId || a.accountId === c) && (null == e || a.accountUserId === e)
        }

        function i(a, b) {
            let c = new AbortController,
                d = a.watch(a => {
                    let {
                        get: d
                    } = a;
                    b(d(e.n)) || c.abort()
                });
            return c.signal.aborted ? d() : c.signal.addEventListener("abort", d, {
                once: !0
            }), c
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "request",
                    d = a.get(e.n),
                    f = d.authenticatedUserId,
                    j = d.accountUserId ?? null;
                if (null == f) return;
                let k = {
                        accountId: b,
                        userId: f,
                        accountUserId: j
                    },
                    l = a => h(a, k) && ("request" === c || !a.accountLoading && null != j);
                if (!l(d)) return;
                let m = i(a, l);
                return {
                    ...k,
                    connectorLinkOwnerId: a.get(g),
                    signal: m.signal,
                    isCurrent: () => !m.signal.aborted && l(a.get(e.n)),
                    dispose: () => m.abort()
                }
            },
            b: g,
            c: function(a, b) {
                return {
                    signal: b,
                    expectedIdentity: {
                        accountId: a.accountId,
                        userId: a.userId
                    },
                    assertRequestCurrent: () => {
                        if (b?.throwIfAborted(), !a.isCurrent()) throw new DOMException("Finance owner changed", "AbortError")
                    }
                }
            },
            d: h,
            e: i
        })
    }),
    s5P0: (function(a, b, c) {
        var d = c("zMIV"),
            e = c.n(d),
            f = c("yZpl"),
            g = c("lAQI"),
            h = c("pZ3S"),
            i = c("URlz"),
            j = c("O1lF"),
            k = c("Cslg"),
            l = c("dQRk"),
            m = c("cYqq"),
            n = c("liTb"),
            o = c("tSEg"),
            p = c("PeqE"),
            q = c("XCEe"),
            r = c("FNWO"),
            s = c("O0Tw");
        let t = {
                accountId: g.C().optional(),
                connectorId: g.C().optional(),
                returnTo: g.C().optional(),
                signal: g.C().optional()
            },
            u = g.F({
                ...t,
                app: g.C().optional(),
                template: g.C().optional(),
                params: g.A({
                    ...t,
                    view: g.z("accountLinking")
                })
            }),
            v = g.F({
                type: g.z("event"),
                label: g.p(["ledger.connection_card_viewed", "ledger.connection_card_connect_clicked", "ledger.connection_card_dismissed"])
            }),
            w = g.F({
                type: g.z("count"),
                label: g.z("ledger.onboarding_syncing_visible")
            }),
            x = "manage_linked_accounts",
            y = g.F({
                name: g.z(x),
                arguments: g.F({
                    destination: g.z("credit")
                })
            });

        function z(a, b) {
            let {
                access: c,
                mcpAppHostAdapter: d,
                request: e,
                widget: f
            } = b, g = d.connectorTarget;
            if (!(0, n.k)(a.value) || null != e.chatGptThreadId || "internal://ledger" !== e.template || "credit" !== e.toolInput.destination || !0 !== f.is_verified_first_party || g?.connectorId !== p.a || !0 === d.isTombstone) return null;
            let h = g.targetId;
            return {
                access: c,
                linkId: h?.includes("/") ? null : h
            }
        }

        function A(a, b, c, d) {
            let f = !1;
            return {
                requestModal: null == b || 0 === b.length ? void 0 : async (d, f) => {
                    var g;
                    let i;
                    if (f.aborted || a.get(k.f) !== b) return !1;
                    let {
                        params: j
                    } = u.parse(d), l = a.scope.id === o.a.id ? a.value : void 0, m = null != l && (0, n.k)(l) ? (i = (g = l).pathname === n.e && null != g.orbitId ? (0, n.f)(g.orbitId) : g.pathname, `${i}${g.search??""}`) : void 0, {
                        openPersonalFinanceAccountLinking: p
                    } = await (0, q.a)();
                    if (f.aborted || a.get(k.f) !== b) return !1;
                    let r = e()(j, ["view", "key", "ref"]),
                        {
                            trackingContext: s = {}
                        } = r;
                    return h.z(s) && (r.trackingContext = {
                        entryPoint: "widget",
                        entrypoint: "creditScore" === j.initialTab ? "conversation" : void 0,
                        ...s
                    }), await p(a, {
                        accountId: b,
                        accountLinkingFlowParams: r,
                        afterLink: null == m ? {
                            kind: "stayInPicker",
                            returnTo: c
                        } : {
                            kind: "returnToChat",
                            returnTo: m
                        },
                        signal: f
                    }) && !f.aborted && a.get(k.f) === b
                },
                sendInstrument: c => {
                    let e = v.safeParse(c);
                    if (e.success) {
                        d?.widget.is_verified_first_party !== !0 || d.mcpAppHostAdapter.isTombstone || null == b || a.get(k.f) !== b || (0, m.a)(a, c, e.data.label, {
                            remote_plugin_id: p.a,
                            message_id: d.request.sourceMessageId,
                            conversation_id: a.get(l.j, d.request.chatGptThreadId)
                        });
                        return
                    }
                    if (w.safeParse(c).success) {
                        f || null == d || (f = !0, (0, s.a)(a, d));
                        return
                    }(0, r.a)(a, c)
                }
            }
        }
        c.d(b, {}, {
            a: A,
            b: function(a, b, c, d) {
                let e = A(a, b, c, d);
                if (null == d) return {
                    finance: e
                };
                let g = z(a, d);
                if (null == g) return {
                    finance: e
                };
                let {
                    mcpAppHostAdapter: h
                } = d;
                return {
                    finance: e,
                    handleRequest: (b, c, d, e) => d?.isVerifiedFirstParty === !0 && "internal://ledger" === d.originResourceUri && "tools/call" === b.method && y.safeParse(b.params).success ? async function(a, b, c) {
                        let {
                            access: d,
                            linkId: e
                        } = b;
                        c?.throwIfAborted(), d.assertActive();
                        let {
                            accountId: g,
                            userId: h
                        } = (0, i.a)(a, d.context);
                        if (null == e || null == g || null == h) throw Error("The Dot Credit connection is unavailable");
                        let k = new AbortController,
                            l = null == c ? k.signal : AbortSignal.any([k.signal, c]),
                            m = a.watch(a => {
                                let {
                                    get: b
                                } = a;
                                "current" !== d.status(b) && k.abort()
                            }),
                            n = () => {
                                l.throwIfAborted(), d.assertActive()
                            };
                        try {
                            let a = await (0, j.b)({
                                id: crypto.randomUUID(),
                                headers: {
                                    "ChatGPT-Account-ID": g,
                                    [f.dc]: g,
                                    "OAI-Product-Sku": "AEON"
                                },
                                expectedIdentity: {
                                    accountId: g,
                                    userId: h
                                },
                                signal: l,
                                assertRequestCurrent: n
                            }, {
                                method: "tools/call",
                                params: {
                                    name: x,
                                    arguments: {
                                        destination: "credit"
                                    },
                                    _meta: {
                                        _codex_apps: {
                                            resource_uri: `/${p.a}/${e}/${x}`
                                        },
                                        "x-codex-turn-metadata": {
                                            source: "mcp_app"
                                        }
                                    }
                                }
                            });
                            return n(), a
                        } finally {
                            m()
                        }
                    }(a, g, c) : h.handleRequest(b, c, d, e)
                }
            },
            c: function(a, b) {
                let {
                    viewParams: c
                } = b.request, d = z(a, b);
                return null == d ? c : {
                    ...h.z(c) ? c : {},
                    canOpenCredit: null != d.linkId && null != d.access.accountId && a.get(k.f) === d.access.accountId && "current" === d.access.status(a.get)
                }
            }
        })
    }),
    FNWO: (function(a, b, c) {
        var d = c("RjXy"),
            e = c("lAQI"),
            f = c("PFjh"),
            g = c("yGJW"),
            h = c("PeqE");
        let i = {
                "ledger.all_accounts_synced": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED",
                "ledger.recent_transactions_requested": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED",
                "ledger.recent_transactions_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED",
                "ledger.refresh_profile": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE",
                "ledger.refresh_profile_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED",
                "ledger.account_selected": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED",
                "ledger.account_detail_open_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED",
                "ledger.bank_reauth_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED",
                "ledger.bank_disconnected": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED",
                "ledger.oauth_button_clicked": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED",
                "ledger.oauth_flow_web_exited": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED",
                "ledger.oauth_flow_native_exited": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED",
                "ledger.oauth_flow_finishing": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING",
                "ledger.oauth_flow_finished": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED",
                "ledger.account_detail_loading_shown": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN",
                "ledger.account_detail_loaded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED",
                "ledger.account_detail_close_requested": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED",
                "ledger.bank_reauth_flow_started": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED",
                "ledger.account_resync_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED",
                "ledger.account_resync_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED",
                "ledger.account_remove_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED",
                "ledger.account_removed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED",
                "ledger.account_follow_up_unavailable": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE",
                "ledger.account_follow_up_clicked": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED",
                "ledger.error.recent_transactions_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED",
                "ledger.error.reauth_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED",
                "ledger.error.resync_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED",
                "ledger.error.account_remove_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED",
                "ledger.error.account_follow_up_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED",
                "ledger.error.account_detail_open_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED",
                "ledger.error.refresh_profile": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE",
                "ledger.error.bank_disconnect_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED",
                "ledger.error.unknown_action": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION",
                "ledger.error.boundary_catch": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH",
                "ledger.error.oauth_mark_initializing_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED",
                "ledger.error.oauth_start_flow_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED",
                "ledger.error.oauth_polling_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED",
                "ledger.error.bank_reauth_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED"
            },
            j = e.F({
                account_section: e.p(["banking", "investments", "credit_cards", "real_estate", "loans", "payroll", "other"]).optional().catch(void 0),
                link_status: e.p(["linked", "error", "disconnected"]).optional().catch(void 0),
                surface: e.p(["ledger_profile", "mattress_accounts_tab", "unknown", "web", "native"]).optional().catch(void 0),
                device_type: e.p(["mobile", "tablet", "desktop", "unknown"]).optional().catch(void 0),
                selection_source: e.p(["profile", "snapshot"]).optional().catch(void 0),
                view_mode: e.p(["pip", "inline", "fullscreen", "modal", "sidebar", "unknown"]).optional().catch(void 0),
                reason: e.p(["close_button", "follow_up", "remove_success"]).optional().catch(void 0),
                item_count: e.E().int().nonnegative().max(0x7fffffff).optional().catch(void 0),
                result: e.p(["empty", "non_empty"]).optional().catch(void 0),
                provider: e.z("plaid").optional().catch(void 0),
                plaidExitStatus: e.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0),
                plaidErrorCode: e.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0)
            }),
            k = {
                label: e.L().startsWith("ledger."),
                tags: e.g(e.F({
                    key: e.L(),
                    value: e.L()
                })).optional()
            },
            l = e.m("type", [e.F({
                type: e.z("event"),
                label: k.label,
                payload: j.optional().catch(void 0)
            }), e.F({
                type: e.z("count"),
                ...k,
                count: e.E().optional()
            }), e.F({
                type: e.z("hist"),
                ...k,
                value: e.E()
            }), e.F({
                type: e.z("error")
            })]);
        c.d(b, {}, {
            a: function(a, b) {
                let c = l.safeParse(b);
                if (!c.success) return;
                let e = c.data;
                if ("event" === e.type) {
                    let b = i[e.label];
                    if (null == b) return;
                    (0, g.a)(a, d.d, {
                        eventType: b,
                        accountSection: e.payload?.account_section,
                        linkStatus: e.payload?.link_status,
                        surface: e.payload?.surface,
                        deviceType: e.payload?.device_type,
                        selectionSource: e.payload?.selection_source,
                        viewMode: e.payload?.view_mode,
                        reason: e.payload?.reason,
                        itemCount: e.payload?.item_count,
                        result: e.payload?.result,
                        provider: e.payload?.provider,
                        plaidExitStatus: e.payload?.plaidExitStatus,
                        plaidErrorCode: e.payload?.plaidErrorCode
                    });
                    return
                }
                let j = {
                        ..."tags" in e ? Object.fromEntries(e.tags?.map(a => {
                            let {
                                key: b,
                                value: c
                            } = a;
                            return [b, c]
                        }) ?? []) : {},
                        attribution_id: h.a,
                        name: "ledger",
                        client_type: "chatgpt-web"
                    },
                    k = a.get(f.a);
                switch (e.type) {
                    case "count":
                        k.count("ecosystem", e.label, j, e.count);
                        break;
                    case "hist":
                        k.hist("ecosystem", e.label, j, e.value);
                        break;
                    case "error":
                        k.count("ecosystem", "app.error", j)
                }
            }
        })
    }),
    O0Tw: (function(a, b, c) {
        c.d(b, {
            a: () => t,
            b: () => v
        });
        var d = c("QosV");
        let e = "ledger_spend_by_category_widget",
            f = "ledger_portfolio_distribution_widget";

        function g(a) {
            return null !== a && "object" == typeof a && !Array.isArray(a)
        }

        function h(a) {
            if ("object" == typeof a && null != a && "top_categories" in a) return Array.isArray(a.top_categories) ? 0 === a.top_categories.length ? "spend_empty" : "spend_summary" : void 0
        }
        var i = c("RjXy"),
            j = c("AuIy"),
            k = c("zd8w"),
            l = c("Cslg"),
            m = c("OOaz"),
            n = c("dQRk"),
            o = c("yGJW"),
            p = c("PeqE"),
            q = c("kAhA"),
            r = c("JLZd");

        function s(a, b, c) {
            let d = a.get(n.N, b);
            if (null == d) return;
            let e = (0, j.b)({
                mapping: d,
                current_node: c
            }).find(a => "user" === a.author.role);
            if (e?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == a.get(n.bb, b)) return d[c]?.message
        }

        function t(a, b) {
            let {
                access: c
            } = b, {
                chatGptThreadId: d,
                sourceMessageId: e
            } = b.request;
            if (!0 !== b.widget.is_verified_first_party || !0 === b.mcpAppHostAdapter.isTombstone || null == b.mcpAppHostAdapter.assertActive || !("connectorId" in c.serverIdentity) || c.serverIdentity.connectorId !== p.a || null == c.uiUserId || null == c.accountId || null == d || !e) return;
            try {
                c.assertActive(), b.mcpAppHostAdapter.assertActive()
            } catch {
                return
            }
            let f = a.get(n.j, d);
            if (null == f) return;
            let g = s(a, d, e);
            if (g?.author.role !== "assistant" && g?.author.role !== "tool") return;
            let h = (0, q.b)(a, c.accountId);
            if (null != h) try {
                h.userId === c.uiUserId && h.isCurrent() && u(a, h, {
                    conversationId: f,
                    messageId: e,
                    widgetName: "ledger_connected_institutions",
                    widgetResultKind: "syncing"
                })
            } finally {
                h.dispose()
            }
        }

        function u(a, b, c) {
            b.retainTelemetry(new Promise(d => {
                (0, o.a)(a, i.h, {
                    surfaceName: "chat",
                    ...c
                }, () => d(), void 0, {
                    expectedUserId: b.analyticsUserId,
                    expectedAccountId: b.accountId,
                    eventCreatedAt: new Date().toISOString()
                })
            }))
        }

        function v(a, b, c) {
            let i, j, l, n, o, p = (0, d.c)(15),
                q = (0, k.useRef)(null);
            p[0] !== a || p[1] !== c ? (i = function(a, b) {
                let {
                    scope: c,
                    turn: d,
                    sourceMessageId: g,
                    sharedPostId: h,
                    sharedConversationId: i
                } = a, {
                    widgetName: j,
                    component: k,
                    contentReferenceStartIndex: l,
                    externalResourcesBlocked: n
                } = b;
                if (!(null == j || j !== e && j !== f || null == k && "ledger_spend_by_category_widget" !== j || null == g || null == d || (0, m.e)(d.conversationId)) && "primary" === d.conversationType && !1 !== d.isPresented && !1 !== d.trackShownImpressions && !d.isReadOnly && !d.shouldBlockExternalEgress && !d.renderRestrictedWidgets && !d.renderRestrictedModelResponses && !n && null == i && null == h && "tpp" !== d.conversationOrigin && "flora" !== d.conversationOrigin && "chatgpt-thread" === c.value.routeKind && c.value.conversationId === d.conversationId && null != l && Number.isInteger(l) && !(l < 0) && d.contentReferences.some((a, b) => "dil" === a.type && a.name === j && a.start_idx === l && (d.contentReferenceMessageIds?.[b] ?? d.messageId) === g)) return {
                    key: JSON.stringify([d.conversationId, g, l, j, k]),
                    conversationId: d.conversationId,
                    messageId: g,
                    contentReferenceStartIndex: l,
                    widgetName: j,
                    component: k
                }
            }(a, c), p[0] = a, p[1] = c, p[2] = i) : i = p[2];
            let r = i,
                s = r?.key,
                {
                    scope: t
                } = a;
            p[3] !== b || p[4] !== r || p[5] !== t ? (j = () => {
                let a = b.current;
                if (null != a && null != r) return null == q.current && (q.current = w()), q.current.attach(t, a, r)
            }, p[3] = b, p[4] = r, p[5] = t, p[6] = j) : j = p[6];
            let u = (0, k.useEffectEvent)(j);
            return p[7] !== u ? (l = () => u(), p[7] = u, p[8] = l) : l = p[8], p[9] !== s || p[10] !== t ? (n = [t, s], p[9] = s, p[10] = t, p[11] = n) : n = p[11], (0, k.useEffect)(l, n), p[12] !== r || p[13] !== s ? (o = null == r ? void 0 : (a, b) => {
                null == q.current && (q.current = w()), q.current.commit(s, function(a, b, c, d) {
                    let i;
                    if (a !== e || b?.component !== "LedgerSpendByCategoryWidget" || c?.has_connected_accounts === !1 || !Array.isArray(c?.month_views) || c.month_views.length <= 1) {
                        var j = a,
                            k = b,
                            l = c;
                        if (j === f) return k?.component !== "LedgerPortfolioDistributionWidget" || void 0 === l ? void 0 : !1 === l.has_connected_accounts ? "no_accounts" : !1 === l.has_holdings ? "portfolio_empty" : !0 === l.has_holdings ? "portfolio_summary" : void 0;
                        if (j !== e || void 0 !== k && "LedgerSpendByCategoryWidget" !== k.component || void 0 === l) return;
                        if (void 0 !== k && !1 === l.has_connected_accounts) return "no_accounts";
                        let d = l.month_views,
                            g = l.selected_month_index;
                        return Array.isArray(d) && ("number" == typeof g || "bigint" == typeof g) && ("number" != typeof g || Number.isInteger(g)) && !(g < 0) && !(g >= d.length) ? h(d[Number(g)]) : void 0
                    }
                    let m = function(a) {
                        let b, c = [a];
                        for (; c.length > 0;) {
                            let a = c.pop();
                            if (Array.isArray(a)) c.push(...a);
                            else if (g(a)) {
                                if ("select" === a.type && g(a.props) && "selected_month" === a.props.name) {
                                    if (void 0 !== b || "string" != typeof a.props.value) return;
                                    b = a.props.value
                                }
                                Array.isArray(a.children) && c.push(...a.children)
                            }
                        }
                        return b
                    }(d);
                    if (void 0 !== m) {
                        for (let a of c.month_views)
                            if (g(a) && a.option_value === m) {
                                if (void 0 !== i) return;
                                i = a
                            } return h(i)
                    }
                }(r.widgetName, null == r.component ? void 0 : {
                    component: r.component
                }, a, b))
            }, p[12] = r, p[13] = s, p[14] = o) : o = p[14], o
        }

        function w() {
            let a, b;
            return {
                commit: (c, d) => {
                    null != c && (a = {
                        key: c,
                        kind: d
                    }, b?.key === c && b.observation.update(d))
                },
                attach: (c, d, e) => {
                    var f, g, h;
                    let i, k, m, n, o, p, t, v, w, x, y = (f = c, g = d, h = e, o = f.get(l.n), p = () => {
                        let a = s(f, h.conversationId, h.messageId);
                        return (a?.author.role === "assistant" || a?.author.role === "tool") && a.metadata?.is_visually_hidden_from_conversation !== !0 && a.metadata?.reasoning_status == null && a.metadata?.model_dil_v2 == null && (0, j.s)((0, j.s)(a.metadata?.model_dil)?.dil)?.type == null
                    }, t = new Set, v = !1, w = () => {
                        v = !0, m?.(), n?.(), i?.dispose()
                    }, x = () => {
                        if (m?.(), m = void 0, v || !i?.isCurrent() || !p()) return;
                        let a = k;
                        null == a || t.has(a) || (m = (0, r.a)(f, g, () => {
                            !(v || k !== a || !i?.isCurrent() || t.has(a)) && p() && (t.add(a), u(f, i, {
                                widgetName: h.widgetName,
                                conversationId: h.conversationId,
                                messageId: h.messageId,
                                contentReferenceStartIndex: h.contentReferenceStartIndex,
                                widgetResultKind: a
                            }))
                        }, 0))
                    }, n = f.watch(a => {
                        let {
                            get: b
                        } = a, c = b(l.n);
                        c.authenticatedUserId === o.authenticatedUserId && c.userId === o.userId && c.authenticatedAccountId === o.authenticatedAccountId && (null == o.accountUserId || c.accountUserId === o.accountUserId) && (null == i || i.isCurrent()) ? v || null != i || null == o.authenticatedAccountId || (i = (0, q.b)(f, o.authenticatedAccountId), x()) : w()
                    }), v && n(), {
                        update: a => {
                            k !== a && (k = a, x())
                        },
                        dispose: w
                    });
                    return b = {
                        key: e.key,
                        observation: y
                    }, a?.key === e.key && y.update(a.kind), () => {
                        b?.observation === y && (b = void 0), y.dispose()
                    }
                }
            }
        }
    }),
    o62A: (function(a, b, c) {
        var d = c("i5ac"),
            e = c.n(d),
            f = c("yZpl"),
            g = c("Vrnh"),
            h = c("P61R"),
            i = c("Dgwo"),
            j = c("tl5a"),
            k = c("KJ1J"),
            l = c("tTIR"),
            m = c("VvpR"),
            n = c("PYah"),
            o = c("X6Vn"),
            p = c("mdWu"),
            q = c("FPpy"),
            r = c("Yshm"),
            s = c("qZWE"),
            t = c("xSzB"),
            u = c("joT6"),
            v = c("loz7"),
            w = c("uzkw"),
            x = c("EEop"),
            y = c("cLdu"),
            z = c("ueue"),
            A = c("tSEg");

        function B(a) {
            return (0, y.i)(a.hostId) && C(a)
        }

        function C(a) {
            let {
                mcpAppScope: b,
                access: c,
                server: d
            } = a, e = "connectorId" in c.serverIdentity ? c.serverIdentity.connectorId : null;
            return "internal://plugin-management-suggestions" === b.originResourceUri && (0, k.f)(d) && e === h.a && b.codexAppsToolScope?.connectorId === e
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    scope: b,
                    conversationId: c,
                    hostId: d,
                    installPlugin: h,
                    mcpAppScope: k,
                    navigate: C,
                    access: D,
                    server: E,
                    sessionId: F,
                    sourceMcpAppId: G,
                    toolResult: H
                } = a;
                if (!B({
                        hostId: d,
                        mcpAppScope: k,
                        access: D,
                        server: E
                    })) return null;
                let I = {
                        hostId: d,
                        threadId: c
                    },
                    J = (0, t.f)(H),
                    K = r.c.safeParse(J?._meta ?? J).data,
                    L = (a, d, e) => {
                        let {
                            accountId: f,
                            uiUserId: g
                        } = D;
                        null == f || null == g || b.get(A.j) || b.get(s.s, F)?.sourceMcpAppId !== G || (0, w.a)({
                            connectorId: d,
                            conversationId: c,
                            eventType: e,
                            expectedIdentity: {
                                accountId: f,
                                userId: g
                            },
                            pluginId: a,
                            productSurface: "CODEX"
                        })
                    };
                return (0, q.a)({
                    scope: b,
                    hostId: d,
                    navigate: C,
                    toolResult: H,
                    onSuggestionInteraction: L,
                    connect: async (a, e) => {
                        let k = a.plugin_id;
                        try {
                            let q = b.get(j.dc, I)?.latestTurnId,
                                r = !1,
                                s = !1;
                            if (!h({
                                    displayName: a.display_name,
                                    remoteMarketplaceName: f.bd,
                                    remotePluginId: k
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: c
                                    },
                                    hostId: d,
                                    marketplaceAnalytics: e,
                                    onError: () => {
                                        s = !0
                                    },
                                    onSuccess: () => {
                                        r = !0
                                    },
                                    origin: "in_conversation_elicitation",
                                    productContext: "codex",
                                    requiresAppSetup: !0
                                })) return {
                                pluginId: k,
                                status: "unavailable"
                            };
                            if (await b.when(a => {
                                    let {
                                        get: b
                                    } = a, c = b(v.o);
                                    return "closed" === c.kind || c.hostId !== d
                                }), s) return {
                                pluginId: k,
                                status: "retryable_error"
                            };
                            if (!r) return {
                                pluginId: k,
                                status: "cancelled"
                            };
                            let t = (0, i.b)(b, d);
                            if (!(0, y.i)(d)) {
                                let a = await t.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (a.failedRemotePluginIds.length > 0 || a.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: k,
                                    status: "retryable_error"
                                }
                            }
                            let w = b.query.snapshot(x.l, {
                                hostId: d,
                                marketplacePath: null,
                                pluginName: k,
                                productContext: "codex",
                                remoteMarketplaceName: f.bd
                            });
                            await w.invalidate({
                                refetchType: "none"
                            });
                            let [A, B] = await Promise.all([w.getOrFetch(), (0, n.a)(b, d, c)]);
                            if (!A.summary.installed || !A.summary.enabled || null != A.summary.remotePluginId && A.summary.remotePluginId !== k || !A.apps.every(a => {
                                    let {
                                        id: b
                                    } = a;
                                    return B.has(b)
                                }) || (await (0, u.a)({
                                    scope: b,
                                    authPolicy: A.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: d,
                                    plugin: (0, z.c)(A),
                                    queryClient: b.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: k,
                                status: "connection_required"
                            };
                            if (void 0 === q || (await b.when(a => {
                                    let {
                                        get: b
                                    } = a, d = b(j.dc, I);
                                    return null != d && (d.latestTurnId !== q || d.summary.threadRuntimeStatus?.type !== "active" && !b(p.i, c) && !b(o.c))
                                }), await t.getLatestTurnId(c) !== q)) return {
                                pluginId: k,
                                status: "connected"
                            };
                            if (!(0, l.b)(c)) return {
                                pluginId: k,
                                status: "retryable_error"
                            };
                            try {
                                await (0, m.c)(b, d, c, {
                                    turnTrigger: "plugin_suggestion_connected",
                                    additionalContext: (0, g.c)({
                                        connectedPlugin: a.display_name
                                    })
                                })
                            } finally {
                                (0, l.a)(c)
                            }
                            return {
                                pluginId: k,
                                status: "connected"
                            }
                        } catch {
                            return {
                                pluginId: k,
                                status: "retryable_error"
                            }
                        }
                    },
                    decline: async a => {
                        let f = a => !a(A.j) && a(s.s, F)?.sourceMcpAppId === G,
                            h = r.d.safeParse(b.get(s.x, F) ?? {});
                        if (!f(b.get) || !h.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let k = new Set(h.data.connectedPluginIds),
                            n = new Set(h.data.declinedPluginIds),
                            o = e()(a, "plugin_id").filter(a => {
                                let {
                                    plugin_id: b
                                } = a;
                                return !k.has(b) && !n.has(b)
                            });
                        if (0 === o.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let q = b.get(j.dc, I)?.latestTurnId,
                            t = o.map(a => {
                                let {
                                    plugin_id: b
                                } = a;
                                return b
                            });
                        for (let {
                                plugin_id: a
                            }
                            of o) L(a, K?.["openai/plugin_suggestion_connector_ids"]?.[a], "dismiss");
                        b.set(s.x, F, {
                            ...h.data,
                            declinedPluginIds: [...n, ...t]
                        });
                        try {
                            if (void 0 === q) return {
                                status: "declined",
                                declinedPluginIds: t
                            };
                            if (await b.when(a => {
                                    let {
                                        get: b
                                    } = a, d = b(j.dc, I);
                                    return !f(b) || null != d && (d.latestTurnId !== q || d.summary.threadRuntimeStatus?.type !== "active" && !b(p.i, c))
                                }), await (0, i.b)(b, d).getLatestTurnId(c) === q && f(b.get) && (0, l.b)(c)) try {
                                await (0, m.c)(b, d, c, {
                                    turnTrigger: "plugin_suggestion_declined",
                                    additionalContext: (0, g.c)({
                                        declinedPlugins: o.map(a => {
                                            let {
                                                display_name: b
                                            } = a;
                                            return b
                                        })
                                    })
                                })
                            } finally {
                                (0, l.a)(c)
                            }
                        } catch {}
                        return {
                            status: "declined",
                            declinedPluginIds: t
                        }
                    }
                })
            },
            b: C,
            c: B
        })
    }),
    KMWy: (function(a, b, c) {
        var d = c("yZpl");
        let e = (0, c("Nwp9").b)(d.Tc, {}, {
            coerceStoredValue: a => d.hj.parse(a)
        });
        c.d(b, {}, {
            a: function(a, b) {
                return (b ? d.ij.options : d.kj).filter(b => a.permissions?.[b] != null)
            },
            b: function(a, b, c) {
                let e, f = a.map(a => d.jj[a].feature),
                    g = [...new Set(["fullscreen", "encrypted-media", ...b ?? [], ...f, ...c ? ["local-network-access"] : []])];
                return e = null != b || f.length > 0 ? g.map(a => `${a} *`).join("; ") : c ? "encrypted-media *; local-network-access" : "encrypted-media *", {
                    frameFeatures: g,
                    iframeAllow: e
                }
            },
            c: e
        })
    }),
    ioMY: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("sS8e");
        c.d(b, {}, {
            a: {
                createAlreadyPendingError: () => (0, e.c)("A follow-up message is already awaiting confirmation", -32e3),
                createCanceledError: () => (0, e.c)("Follow-up message was not confirmed", -32e3)
            },
            b: async function(a, b, c, e) {
                let {
                    text: f
                } = d.F({
                    text: d.L().min(1)
                }).parse(a), g = await c({
                    prompt: f
                });
                e.throwIfAborted(), await b({
                    text: g
                })
            }
        })
    }),
    QagL: (function(a, b, c) {
        let d, e, f;
        c.d(b, {
            a: () => cl,
            b: () => cm
        });
        var g = c("ABep"),
            h = c("QosV"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("URlz"),
            l = c("o62A"),
            m = c("HwRo"),
            n = c("ntKy"),
            o = c("tSEg"),
            p = c("hZax"),
            q = c("WFY2"),
            r = c("SNez"),
            s = c("Vjzf"),
            t = c("kSHG"),
            u = c("bTvG"),
            v = c("iRMi"),
            w = c("t0Nb"),
            x = c("kUij"),
            y = c("fD5v"),
            z = c("OppN"),
            A = c("WWo4"),
            B = c("zmIi"),
            C = c("SZCv"),
            D = c.n(C),
            E = c("yZpl"),
            F = c("AuIy"),
            G = c("F6B1"),
            H = c("IhIa"),
            I = c("v7qY"),
            J = c("Wf1j"),
            K = c("rEML"),
            L = c("lAQI"),
            M = c("KJ1J");
        let N = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var O = c("PFjh"),
            P = c("yGJW");
        let Q = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            R = L.F({
                type: L.p(["count", "hist"]),
                label: L.p(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: L.z(1).optional(),
                value: L.E().nonnegative().optional(),
                tags: L.g(L.F({
                    key: L.L(),
                    value: L.L()
                })).max(8)
            }),
            S = L.F({
                stage: L.p(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: L.z("ads"),
                checkout_type: L.z("manual"),
                load_metric_version: L.z("1").optional()
            }),
            T = L.F({
                phase: L.p(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: L.p(["create", "edit"]),
                outcome: L.p(["success", "error", "requires_action"]),
                failure_category: L.p(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            U = L.p(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            V = {
                "ads_manager.view_shown": {
                    eventType: "CHATGPT_ADS_MANAGER_WIDGET_EVENT_TYPE_VIEW_SHOWN",
                    requiredField: "view"
                },
                "ads_manager.action_clicked": {
                    eventType: "CHATGPT_ADS_MANAGER_WIDGET_EVENT_TYPE_ACTION_CLICKED",
                    requiredField: "action"
                },
                "ads_manager.billing_close_result": {
                    eventType: "CHATGPT_ADS_MANAGER_WIDGET_EVENT_TYPE_BILLING_CLOSE_RESULT",
                    requiredField: "outcome"
                }
            },
            W = L.g(L.F({
                key: L.L(),
                value: L.R().optional()
            }).nullable().catch(null)),
            X = L.m("type", [L.F({
                type: L.z("event"),
                label: U,
                payload: L.F({
                    widget: L.p(Q.widget),
                    view_session_id: L.T().optional().catch(void 0),
                    view: L.p(Q.view).optional().catch(void 0),
                    action: L.p(Q.action).optional().catch(void 0),
                    outcome: L.p(["closed", "denied", "missing_response", "error"]).optional().catch(void 0),
                    step: L.p(Q.step).optional().catch(void 0),
                    source: L.p(Q.source).optional().catch(void 0),
                    billing_status: L.p(["required", "complete", "unknown"]).optional().catch(void 0),
                    logo_status: L.p(["missing", "ready", "in_review", "replacement_in_review", "review_rejected", "unknown"]).optional().catch(void 0),
                    account_review_status: L.p(["approved", "in_review", "rejected", "unknown"]).optional().catch(void 0),
                    attention_reason: L.p(["unsupported_country", "review_rejected"]).optional().catch(void 0),
                    billing_recovery: L.p(["unsupported_country", "external"]).optional().catch(void 0),
                    billing_in_sidebar: L.j().optional().catch(void 0),
                    logo_handoff_failed: L.j().optional().catch(void 0),
                    step_number: Y(1),
                    step_count: Y(),
                    preview_kind: L.p(["draft", "existing"]).optional().catch(void 0),
                    reason: L.p(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: Y(1),
                    page: Y(1),
                    page_count: Y(1),
                    page_size: Y(1),
                    total_count: Y(),
                    next_page: Y(1)
                })
            }), L.F({
                type: L.z("count"),
                label: U,
                count: L.z(1).optional(),
                tags: W
            })]);

        function Y() {
            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return L.E().int().min(a).max(0x7fffffff).optional().catch(void 0)
        }
        var Z = c("StMt"),
            $ = c("tl5a"),
            _ = c("sM3V"),
            aa = c("uorG"),
            ab = c("ZU27"),
            ac = c("DiD0"),
            ad = c("SK3E"),
            ae = (c("Sbyb"), c("TSib")),
            af = c("ipIJ"),
            ag = c("uoRg"),
            ah = c("Y3OQ"),
            ai = c("WBiY"),
            aj = c("Ot7V"),
            ak = c("eT6w"),
            al = c("PeqE"),
            am = c("ywSA"),
            an = c("Cslg"),
            ao = c("qZWE"),
            ap = c("liTb"),
            aq = c("s5P0");

        function ar(a) {
            return (0, ap.k)(a.value)
        }
        var as = c("gMJf"),
            at = c("eB3o"),
            au = c("ZG9f");
        d = (0, at._)(Symbol.dispose);
        class av {
            #a = new aw;
            #b;
            constructor(a, b) {
                this.#b = a.onDispose(() => {
                    this[Symbol.dispose]()
                }), new au.a(this.#a, a.createRpcStub(b))
            }
            setNotificationSender(a) {
                this.#a.setNotificationSender(a)
            }
            handleRequest(a) {
                let {
                    message: b
                } = x.f.parse(a);
                return this.#a.receiveMessage(b), Promise.resolve({})
            } [d]() {
                this.#b(), this.#a[Symbol.dispose]()
            }
        }
        e = (0, at._)(Symbol.dispose);
        class aw {
            #c = null;
            #d = [];
            #e = null;
            #f = null;
            setNotificationSender(a) {
                this.#f = a
            }
            send(a) {
                return null != this.#c ? Promise.reject(this.#c) : null == this.#f ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#f({
                    method: x.b,
                    params: {
                        message: a
                    }
                }), Promise.resolve())
            }
            receive() {
                if (null != this.#c) return Promise.reject(this.#c);
                let a = this.#d.shift();
                return null != a ? Promise.resolve(a) : new Promise((a, b) => {
                    this.#e = {
                        reject: b,
                        resolve: a
                    }
                })
            }
            receiveMessage(a) {
                if (null != this.#c) throw this.#c;
                let b = this.#e;
                null == b ? this.#d.push(a) : (this.#e = null, b.resolve(a))
            }
            abort(a) {
                null == this.#c && (this.#c = a instanceof Error ? a : Error("The first-party plugin bridge was disconnected."), this.#d.length = 0, this.#f = null, this.#e?.reject(this.#c), this.#e = null)
            } [e]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var ax = c("ReGc"),
            ay = c("rP0s");
        let az = L.F({
            prompt: L.p(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var aA = c("FgIX"),
            aB = c("g25Y"),
            aC = c("X6Vn"),
            aD = c("yI91"),
            aE = c("ripK"),
            aF = c("bnxy"),
            aG = c("GaA7");
        let aH = "ui/openai/find",
            aI = L.F({
                method: L.z(aH),
                params: L.F({
                    enabled: L.j()
                })
            }),
            aJ = L.F({
                method: L.z("ui/notifications/openai/find"),
                params: L.F({
                    command: L.p(["open", "next", "previous"])
                })
            });
        f = (0, at._)(Symbol.dispose);
        class aK {
            registration = null;
            handleRequest(a, b) {
                let {
                    sandboxElement: c,
                    sandboxId: d,
                    initId: e,
                    signal: f,
                    notify: g
                } = b, h = aI.safeParse(a);
                if (!h.success || f.aborted || aG.a?.mcpAppSandbox == null || null == g || null == e) return null;
                if (this[Symbol.dispose](), !h.data.params.enabled) return Promise.resolve({});
                let i = aG.a.mcpAppSandbox.registerFindTarget({
                    sandboxId: d,
                    initId: e
                }, async a => c.ownerDocument.activeElement === c && (await g({
                    method: aJ.shape.method.value,
                    params: {
                        command: a
                    }
                }), !0));
                return this.registration = i, i.then(() => ({}))
            } [f]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var aL = c("ioMY"),
            aM = c("iIHp"),
            aN = c("v7ut"),
            aO = c("sF0J"),
            aP = c("QnVT"),
            aQ = c("sS8e"),
            aR = c("NJrC"),
            aS = c("LGZt"),
            aT = c("MefB"),
            aU = c("WYvZ"),
            aV = c("geS6"),
            aW = c("Dgwo"),
            aX = c("a4MG");
        async function aY(a) {
            let {
                scope: b,
                hostId: c,
                mcpServerStatuses: d,
                server: e,
                threadId: f,
                detail: g = "toolsAndAuthOnly"
            } = a, h = d?.data.find(a => {
                let {
                    name: b
                } = a;
                return b === e
            }) ?? null;
            if (null == f && null != h) return h;
            let i = (null == f ? await (0, aW.b)(b, c).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await b.query.fetch(aX.s, {
                hostId: c,
                threadId: f,
                serverName: e,
                detail: g
            })).data.find(a => {
                let {
                    name: b
                } = a;
                return b === e
            }) ?? null;
            if (null == i) throw (0, aQ.c)(`MCP server not found: ${e}`, -32e3);
            return i
        }

        function aZ(a) {
            return Object.values(a.tools).filter(a => null != a)
        }
        var a$ = c("DRR4"),
            a_ = c("SRbQ"),
            a0 = c("TL6G");
        class a1 {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(a) {
                this.params = a
            }
            connectNotificationSink(a) {
                this.notificationSink = a;
                let b = a0.c.subscribe("mcp-event-notification", b => {
                    if (b.hostId === this.params.hostId) {
                        for (let [c, d] of this.subscriptions)
                            if (d.hostSubscriptionId === b.subscriptionId) {
                                a(a2(b.notification, c)).catch(() => {
                                    this.subscriptions.get(c)?.hostSubscriptionId === b.subscriptionId && this.unsubscribe(c).catch(() => {})
                                }), "notifications/events/terminated" === b.notification.method && (q.a.info("App event subscription terminated", {
                                    safe: {
                                        hostSubscriptionId: b.subscriptionId
                                    }
                                }), this.subscriptions.delete(c));
                                break
                            }
                    }
                });
                return () => {
                    this.notificationSink === a && (this.notificationSink = null), b()
                }
            }
            async setConversation(a, b) {
                (this.params.conversationId !== a || this.params.supported !== b) && (q.a.info("Updating app event subscriptions for conversation", {
                    safe: {
                        subscriptionCount: this.subscriptions.size,
                        supported: b,
                        previousConversationId: this.params.conversationId,
                        conversationId: a
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), this.params.conversationId = a, this.params.supported = b, await Promise.all([...this.subscriptions.values()].map(async a => {
                    let c = a.hostSubscriptionId;
                    a.hostSubscriptionId = b ? crypto.randomUUID() : null, await Promise.all([null == c ? void 0 : this.stop(c), this.start(a, {
                        notifyTermination: !0
                    })])
                })))
            }
            async subscribe(a) {
                let b = a.subscriptionId;
                if (!this.params.supported || null == this.params.conversationId || null == this.notificationSink) throw Object.assign(Error("MCP event subscriptions are unavailable"), {
                    code: -32601
                });
                if (this.subscriptions.has(b)) throw Object.assign(Error("MCP event subscription already exists"), {
                    code: -32602
                });
                let c = {
                    params: a,
                    hostSubscriptionId: crypto.randomUUID()
                };
                return this.subscriptions.set(b, c), await this.start(c), {}
            }
            async start(a) {
                let {
                    notifyTermination: b = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    hostSubscriptionId: c,
                    params: d
                } = a, {
                    conversationId: e
                } = this.params;
                if (null == c || null == e) return;
                let {
                    subscriptionId: f
                } = d, g = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: e,
                    event: d.name,
                    connectorId: d.connectorId,
                    linkId: d.linkId,
                    widgetSubscriptionId: f,
                    hostSubscriptionId: c
                };
                try {
                    let a = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        q.a.info("Starting app event subscription", {
                            safe: {
                                conversationId: g.conversationId,
                                connectorId: g.connectorId,
                                linkId: g.linkId,
                                widgetSubscriptionId: g.widgetSubscriptionId,
                                hostSubscriptionId: g.hostSubscriptionId
                            },
                            sensitive: {
                                event: g.event,
                                hostId: g.hostId,
                                server: g.server
                            }
                        });
                        let b = (0, a_.a)(a, await (0, aW.b)(this.params.scope, this.params.hostId).getFollowUpContext(e), !1);
                        await this.params.scope.get($.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
                            _meta: {
                                "x-codex-turn-metadata": {
                                    mcp_request_meta: {
                                        link_id: d.linkId,
                                        selected_connector_ids: [d.connectorId]
                                    }
                                }
                            },
                            arguments: d.arguments,
                            name: d.name,
                            server: this.params.server,
                            subscriptionId: c,
                            threadId: e
                        }, {
                            timeoutMs: 95e3,
                            threadAccess: b?.threadAccess
                        }), q.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: g.hostSubscriptionId
                            }
                        })
                    } catch (b) {
                        a.error = b, a.hasError = !0
                    } finally {
                        (0, a_.e)(a)
                    }
                } catch (d) {
                    if (q.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: g.hostSubscriptionId
                            },
                            sensitive: {
                                error: d
                            }
                        }), this.subscriptions.get(f) === a && a.hostSubscriptionId === c) throw this.subscriptions.delete(f), await Promise.all([this.stop(c).catch(() => {}), b ? this.notificationSink?.(a2({
                        method: "notifications/events/terminated"
                    }, f)) : void 0]), d
                }
                if ((this.subscriptions.get(f) !== a || a.hostSubscriptionId !== c) && (await this.stop(c).catch(() => {}), !this.subscriptions.has(f))) throw Error("MCP event subscription closed during startup")
            }
            async unsubscribe(a) {
                let b = this.subscriptions.get(a)?.hostSubscriptionId;
                return this.subscriptions.delete(a), null != b && await this.stop(b), {}
            }
            async clear() {
                let a = [...this.subscriptions.values()];
                this.subscriptions.clear(), await Promise.all(a.map(async a => {
                    let {
                        hostSubscriptionId: b
                    } = a;
                    return null == b ? void 0 : this.stop(b)
                }))
            }
            async stop(a) {
                q.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: a
                    }
                }), await this.params.scope.get($.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: a
                }).catch(b => {
                    throw q.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: a
                        },
                        sensitive: {
                            error: b
                        }
                    }), b
                }), q.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: a
                    }
                })
            }
        }

        function a2(a, b) {
            let c = a.params ?? {},
                d = "object" != typeof c._meta || null == c._meta || Array.isArray(c._meta) ? {} : c._meta;
            return {
                ...a,
                params: {
                    ...c,
                    _meta: {
                        ...d,
                        "io.modelcontextprotocol/subscriptionId": b
                    }
                }
            }
        }
        var a3 = c("whdX");
        let a4 = new Map;
        class a5 {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(a) {
                this.params = a
            }
            setConversation(a) {
                return this.enqueue(async () => {
                    let b = this.params.conversationId;
                    b !== a && (this.subscriptions.size > 0 && await this.sync(a), this.params.conversationId = a, null != b && this.subscriptions.size > 0 && await (0, aW.b)(this.params.scope, this.params.hostId).setOpenMcpResources(b, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(a) {
                this.isNotificationSinkConnected = !0;
                let b = a0.c.subscribe("mcp-resource-updated", b => {
                    b.hostId === this.params.hostId && b.server === this.params.server && b.threadId === this.params.conversationId && function(a, b) {
                        for (let c of b.keys())
                            if (a === c || a.startsWith(`${c}/`)) return !0;
                        return !1
                    }(b.notification.params.uri, this.subscriptions) && (q.a.debug("Received app resource update", {
                        safe: {
                            mcpAppId: this.params.mcpAppId,
                            conversationId: this.params.conversationId
                        },
                        sensitive: {
                            hostId: this.params.hostId,
                            server: this.params.server,
                            uri: b.notification.params.uri
                        }
                    }), a(b.notification))
                });
                return () => {
                    this.isNotificationSinkConnected = !1, b()
                }
            }
            subscribe(a, b) {
                return this.enqueue(async () => {
                    if (b?.throwIfAborted(), !this.isNotificationSinkConnected) throw Object.assign((0, aQ.c)("MCP resource subscriptions are unavailable", -32601), {
                        name: "McpResourceSubscriptionsUnavailableError"
                    });
                    let c = this.getResourceWatchPath(a);
                    if (this.subscriptions.has(a)) return {};
                    this.subscriptions.set(a, c);
                    try {
                        await this.sync()
                    } catch (b) {
                        throw q.a.warning("Failed to subscribe to app resource updates", {
                            safe: {
                                mcpAppId: this.params.mcpAppId
                            },
                            sensitive: {
                                hostId: this.params.hostId,
                                server: this.params.server,
                                uri: a,
                                error: b
                            }
                        }), this.subscriptions.delete(a), b
                    }
                    return {}
                })
            }
            unsubscribe(a, b) {
                return this.enqueue(async () => {
                    b?.throwIfAborted(), this.getAuthorizedWatchPathOverride(a);
                    let c = this.subscriptions.get(a);
                    if (null == c) return {};
                    this.subscriptions.delete(a);
                    try {
                        await this.sync()
                    } catch (b) {
                        throw q.a.warning("Failed to unsubscribe from app resource updates", {
                            safe: {
                                mcpAppId: this.params.mcpAppId
                            },
                            sensitive: {
                                hostId: this.params.hostId,
                                server: this.params.server,
                                uri: a,
                                error: b
                            }
                        }), this.subscriptions.set(a, c), b
                    }
                    return {}
                })
            }
            clear() {
                return this.enqueue(async () => {
                    this.subscriptions.clear(), await this.sync()
                })
            }
            enqueue(a) {
                let {
                    hostId: b,
                    mcpAppId: c
                } = this.params, d = `${b}\0${c}`, e = (a4.get(d) ?? Promise.resolve()).then(a), f = e.then(() => void 0, () => void 0);
                return a4.set(d, f), f.then(() => {
                    a4.get(d) === f && a4.delete(d)
                }), e
            }
            getAuthorizedWatchPathOverride(a) {
                let b = this.params.resolveResourceWatchPath?.(a) ?? null;
                return null == b && (0, aV.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: a
                }), b
            }
            getResourceWatchPath(a) {
                let b = this.getAuthorizedWatchPathOverride(a) ?? (0, a3.c)({
                    server: this.params.server,
                    uri: a
                });
                if (null == b) throw Object.assign((0, aQ.c)("MCP resource is not subscribable", -32602), {
                    name: "McpResourceNotSubscribableError",
                    uri: a
                });
                return b
            }
            async sync() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == a ? q.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (q.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: a
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, aW.b)(this.params.scope, this.params.hostId).setOpenMcpResources(a, this.params.mcpAppId, [...this.subscriptions].map(b => {
                    let [c, d] = b;
                    return {
                        hostId: this.params.hostId,
                        path: d,
                        server: this.params.server,
                        threadId: a,
                        uri: c
                    }
                })), q.a.info("Updated app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: a
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }))
            }
        }
        var a6 = c("xSzB"),
            a7 = c("kjQz"),
            a8 = c("OWtl"),
            a9 = c("Sd8U"),
            ba = c("jdxe"),
            bb = c("XXJV"),
            bc = c("bIvi"),
            bd = c("DXan"),
            be = c("nKJ6"),
            bf = c("TCti"),
            bg = c("O9EX");
        let bh = (0, i.d)(o.a, (a, b) => {
            let {
                get: c
            } = b;
            return "closed" !== c(bg.a, a)
        });

        function bi(a) {
            let b, c, d, e, f = (0, h.c)(22),
                {
                    panelTabId: g,
                    sandboxElement: k,
                    sandboxId: l,
                    title: m
                } = a,
                n = (0, i.y)(o.a),
                p = (0, i.z)(bf.b) ?? n,
                q = aG.a?.mcpAppSandbox,
                r = (0, i.x)(null != q && bh, g);
            f[0] !== p ? (b = (0, be.getThreadBrowserConversationId)(p), f[0] = p, f[1] = b) : b = f[1];
            let s = b;
            f[2] !== g || f[3] !== p ? (c = () => {
                let a = p.get(bb.e, g);
                null != g && null != a && (0, bb.activateThreadPanelTab)(p, a, g)
            }, f[2] = g, f[3] = p, f[4] = c) : c = f[4];
            let t = (0, j.useEffectEvent)(c);
            return f[5] !== s || f[6] !== r || f[7] !== n || f[8] !== g || f[9] !== t || f[10] !== k || f[11] !== l || f[12] !== m ? (d = () => {
                if (!r || null == s || null == q) return;
                let a = (0, G.h)(k.getAttribute("src") ?? void 0);
                if (null == a) return;
                let b = q.registerBrowserTarget({
                    conversationId: s,
                    initId: a,
                    sandboxId: l,
                    title: m
                }, t, (a, b) => (async function(a, b, c) {
                    let d = new Image;
                    d.src = b, await d.decode();
                    let e = document.createElement("canvas");
                    e.width = d.naturalWidth, e.height = d.naturalHeight;
                    let f = e.getContext("2d", {
                        alpha: !1
                    });
                    if (null == f || !a.isConnected) throw Error("MCP App screenshot surface is unavailable.");
                    let g = [];
                    for (let b = a; null != b; b = b.parentElement) g.push(getComputedStyle(b).backgroundColor);
                    for (let a of (f.fillStyle = "Canvas", f.fillRect(0, 0, e.width, e.height), g.reverse())) f.fillStyle = a, f.fillRect(0, 0, e.width, e.height);
                    return f.drawImage(d, 0, 0), e.toDataURL("image/jpeg", c / 100).slice(23)
                })(k, a, b));
                b.catch(bk);
                let c = n.watch(a => {
                    let {
                        get: c
                    } = a, d = c(bg.a, g);
                    b.setPresented("right" === d).catch(bj)
                });
                return () => {
                    c(), b[Symbol.dispose]()
                }
            }, f[5] = s, f[6] = r, f[7] = n, f[8] = g, f[9] = t, f[10] = k, f[11] = l, f[12] = m, f[13] = d) : d = f[13], f[14] !== s || f[15] !== r || f[16] !== n || f[17] !== g || f[18] !== k || f[19] !== l || f[20] !== m ? (e = [q, s, r, n, g, k, l, m], f[14] = s, f[15] = r, f[16] = n, f[17] = g, f[18] = k, f[19] = l, f[20] = m, f[21] = e) : e = f[21], (0, j.useEffect)(d, e), null
        }

        function bj(a) {
            q.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function bk(a) {
            q.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }
        var bl = c("KMWy"),
            bm = c("ygJs"),
            bn = c("nlNF");

        function bo(a) {
            let b, c, d = (0, h.c)(8),
                {
                    sandboxElement: e,
                    sandboxId: f
                } = a,
                g = (0, i.y)(a8.a),
                {
                    pathname: k,
                    search: l
                } = (0, K.Z)(),
                m = (0, K.ab)();
            return d[0] !== m || d[1] !== k || d[2] !== e || d[3] !== f || d[4] !== g || d[5] !== l ? (b = () => {
                let a;
                if (aG.a?.mcpAppSandbox == null || ![E.Uc, E.Vc, E.hd, "/plugins/:pluginId/app/:toolName"].some(a => (0, K.L)(a, k))) return;
                let b = (0, E.Ng)(e.getAttribute("src") ?? void 0);
                if (null == b) return;
                let c = !1,
                    d = Promise.resolve(),
                    h = !1,
                    i = () => {
                        let a = g.get(bn.c);
                        return a?.pathname === k && a.search === l ? a : null
                    },
                    j = aG.a.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: f,
                        initId: b
                    }, e => {
                        let j = e.entryIds[e.currentIndex];
                        if (null == j || a === j) {
                            a = void 0;
                            return
                        }
                        d = d.then(async () => {
                            let a = i();
                            if (c || null == a || "committed" !== e.reason) return;
                            let d = a.state?.mcpHistory;
                            if (d?.sandboxId === f && d.initId === b && d.entryId === j) return;
                            h = !0;
                            let n = e.previousEntryId ?? e.entryIds[e.previousIndex ?? -1],
                                o = g.get(bn.k),
                                p = Math.sign(e.currentIndex - (null == n ? e.currentIndex : e.entryIds.indexOf(n)));
                            if (null != o && 0 !== p)
                                for (let a = o.index + p; a >= 0 && a < o.entries.length; a += p) {
                                    let c = o.entries[a];
                                    if (c.pathname !== k || c.search !== l || c.state?.mcpHistory?.sandboxId !== f || c.state.mcpHistory.initId !== b) break;
                                    if (c.state.mcpHistory.entryId === j) return m(a - o.index)
                                }(d?.sandboxId !== f || d.initId !== b) && null != n && n !== j && (await m(a, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...a.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: f,
                                            initId: b,
                                            entryId: n
                                        }
                                    }
                                }), a = i(), c || null == a) || await m(a, {
                                    replace: e.didReplaceEntry || null == n || n === j,
                                    state: {
                                        ...a.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: f,
                                            initId: b,
                                            entryId: j
                                        }
                                    }
                                })
                        }).finally(() => {
                            h = !1
                        })
                    }),
                    n = g.watch(d => {
                        let {
                            get: e
                        } = d;
                        e(bn.c);
                        let k = i(),
                            l = k?.state?.mcpHistory,
                            n = g.get(bn.k);
                        !h && l?.sandboxId === f && (l.initId === b || n?.entries.some(a => a.state?.mcpHistory?.sandboxId === f && a.state.mcpHistory.initId === b)) && (a = l.entryId, j.then(async d => {
                            if (!c && i()?.key === k?.key) {
                                let e = l.initId !== b ? "missing" : await d?.go(l.entryId);
                                "ok" !== e && a === l.entryId && (a = void 0), "missing" !== e || c || i()?.key !== k?.key || null == n || 0 === n.popDelta || await m(Math.sign(n.popDelta))
                            }
                        }))
                    });
                return () => {
                    c = !0, n(), j[Symbol.dispose]()
                }
            }, c = [k, l, e, f, g, m], d[0] = m, d[1] = k, d[2] = e, d[3] = f, d[4] = g, d[5] = l, d[6] = b, d[7] = c) : (b = d[6], c = d[7]), (0, j.useEffect)(b, c), null
        }
        var bp = c("uWA4");
        let bq = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            br = {
                insets: {
                    ...bq.insets,
                    top: 48
                }
            };

        function bs(a) {
            let {
                availableDisplayModes: b,
                containerDimensions: c,
                displayMode: d,
                locale: e,
                modelContextHostState: f,
                deepLink: g,
                safeAreaInsets: h,
                styleVariables: i,
                theme: j,
                userAgent: k,
                toolInfo: l
            } = a;
            return {
                "openai/interactionCursor": getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
                ...void 0 === f ? {} : {
                    [z.a]: f
                },
                ...null == g ? {} : {
                    [bp.a]: g
                },
                availableDisplayModes: [...b],
                containerDimensions: {
                    maxHeight: null != c.maxHeight && c.maxHeight > 0 ? c.maxHeight : void 0,
                    maxWidth: c.maxWidth > 0 ? c.maxWidth : void 0
                },
                deviceCapabilities: {
                    hover: k.capabilities.hover,
                    touch: k.capabilities.touch
                },
                displayMode: d,
                locale: e,
                platform: "web" === k.device.platform ? "web" : "desktop",
                safeAreaInsets: h,
                styles: {
                    variables: i
                },
                theme: j,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                userAgent: "chatgpt",
                toolInfo: l
            }
        }

        function bt(a, b, c) {
            return {
                maxHeight: b || "inline" !== c ? a.clientHeight : void 0,
                maxWidth: a.clientWidth
            }
        }

        function bu() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function bv(a) {
            let b;
            return {
                capabilities: {
                    hover: window.matchMedia?.("(hover: hover)")?.matches ?? !1,
                    touch: window.matchMedia?.("(pointer: coarse)")?.matches ?? !1
                },
                device: {
                    os: a?.os ?? ((b = window.navigator.platform.toLowerCase()).includes("mac") ? "macos" : b.includes("win") ? "windows" : "unknown"),
                    platform: "web",
                    type: a?.type ?? "desktop"
                }
            }
        }
        let bw = (0, i.j)(a8.a, a => {
            let b = new Map,
                c = new Set,
                d = !1;

            function e() {
                d || (d = !0, queueMicrotask(() => {
                    if (d = !1, !(c.size >= 5))
                        for (let {
                                initialize: a
                            }
                            of Array.from(b, (a, b) => {
                                let [c, d] = a;
                                return {
                                    initialize: c,
                                    index: b,
                                    priority: d()
                                }
                            }).sort((a, b) => a.priority.distance - b.priority.distance || b.priority.top - a.priority.top || b.index - a.index)) {
                            if (c.size >= 5) break;
                            b.delete(a) && a()
                        }
                }))
            }
            return function(a, d, f) {
                let g, h = () => {
                        c.delete(i) && e()
                    },
                    i = () => {
                        c.add(i);
                        try {
                            g = a(h), null == g && h()
                        } catch (a) {
                            h(), d(a)
                        }
                    };
                return b.set(i, f), e(), () => {
                    b.delete(i);
                    try {
                        g?.()
                    } finally {
                        h()
                    }
                }
            }
        });
        var bx = c("VwGH"),
            by = c("OM8g"),
            bz = c("on57"),
            bA = c("WSFD"),
            bB = c("fm8Z");

        function bC(a) {
            let {
                sharesScrollHost: b,
                sessionId: c,
                frameElement: d,
                frameContainer: e,
                fullSurface: f = !1,
                modalOpen: g = !1,
                sandboxElement: h,
                isFullScreen: i,
                isInGlobalHost: j,
                anchorElement: k,
                rightPanelLayoutTick: l
            } = a, m = !g && (i || f) ? k.closest('[data-app-shell-focus-area="right-panel"]') : null, n = g || i || j, o = b && !n && !f && e.contains(k);
            if (o && globalThis.CSS?.supports?.("position-anchor", "--mcp-app")) {
                let a = `--mcp-app-${CSS.escape(c)}`;
                k.style.setProperty("--mcp-app-frame-anchor", a), k.dataset.mcpAppFrameAnchor = "", d.style.setProperty("position-anchor", a), Object.assign(d.style, {
                    position: "absolute",
                    top: "anchor(top)",
                    left: "anchor(left)",
                    width: "anchor-size(width, 0px)",
                    height: "anchor-size(height, 0px)",
                    display: "",
                    clipPath: "",
                    borderRadius: "",
                    zIndex: "1"
                }), d.style.removeProperty("corner-shape"), null != h && (h.style.borderRadius = "", h.style.removeProperty("corner-shape"));
                let b = () => {
                    let a = (k.currentCSSZoom ?? 1) / (e.currentCSSZoom ?? 1);
                    d.style.zoom = 1 === a ? "" : String(a)
                };
                b();
                let f = new ResizeObserver(b);
                return f.observe(k), f.observe(e), bm.c.set(d, k), () => {
                    f.disconnect(), bm.c.delete(d), d.style.removeProperty("position-anchor"), delete k.dataset.mcpAppFrameAnchor, k.style.removeProperty("--mcp-app-frame-anchor")
                }
            }
            let p = g ? (0, by.b)(d) : void 0,
                q = null,
                r = i && !j ? new MutationObserver(() => t()) : null,
                s = new ResizeObserver(() => t()),
                t = () => {
                    let a = k.currentCSSZoom ?? 1,
                        b = (0, bA.a)(k, a),
                        c = {
                            ...b
                        },
                        l = null == m ? "" : (0, bA.b)(b, (0, bA.a)(m, a));
                    d.style.position = n ? "fixed" : "absolute";
                    let o = null;
                    if (n ? j || g || (o = d.offsetParent) : o = e, null != o) {
                        let b = (0, bA.a)(o, a);
                        c.x -= b.x, c.y -= b.y
                    }
                    n || (c.x += e.scrollLeft, c.y += e.scrollTop);
                    let p = "";
                    g || (p = i ? "43" : "1"), Object.assign(d.style, {
                        ...(0, bA.d)(c, a / (e.currentCSSZoom ?? 1)),
                        clipPath: l,
                        display: "",
                        zIndex: p
                    });
                    let s = f || i ? (0, bA.c)(k) : null;
                    if (d.style.borderRadius = s?.radii.join(" ") ?? "", d.style.setProperty("corner-shape", s?.cornerShape ?? ""), null != h)
                        if (h.style.setProperty("corner-shape", s?.cornerShape ?? ""), null == s) h.style.borderRadius = "";
                        else {
                            let a = getComputedStyle(d),
                                b = [a.borderLeftWidth, a.borderRightWidth, a.borderRightWidth, a.borderLeftWidth],
                                c = [a.borderTopWidth, a.borderTopWidth, a.borderBottomWidth, a.borderBottomWidth];
                            h.style.borderRadius = [b, c].map(a => s.radii.map((b, c) => `${Math.max(0,parseFloat(b)-parseFloat(a[c]))}px`).join(" ")).join(" / ")
                        } null != r && o !== q && (r.disconnect(), q = o, null != o && r.observe(o, {
                        attributeFilter: ["class", "style"],
                        attributes: !0
                    }))
                };
            s.observe(e), null != m && s.observe(m);
            let u = a => {
                a.target instanceof Element && a.target !== e && a.target.contains(k) && t()
            };
            if (o) {
                bm.c.set(d, k), s.observe(k);
                let a = k.closest("[data-turn-key]");
                null == a || k.hidden || s.observe(a), e.addEventListener("scroll", u, !0)
            }
            let v = (0, bx.b)(k, d, t, o ? {
                    ancestorScroll: !1,
                    ancestorResize: !1,
                    elementResize: !1
                } : void 0),
                w = (0, bB.a)({
                    update: t,
                    motionValues: [l]
                });
            return () => {
                p?.(), w.disconnect(), v(), o && (bm.c.delete(d), e.removeEventListener("scroll", u, !0)), s.disconnect(), r?.disconnect()
            }
        }
        var bD = c("qbxq");
        let bE = L.Q([A.b, L.F({
                target: L.p(["active", "new"]).optional(),
                send: L.z(!1)
            }).strict()]),
            bF = A.c.extend({
                _meta: A.c.shape._meta.unwrap().extend({
                    "openai/message": bE.optional()
                }).optional()
            });

        function bG(a) {
            for (let b of a ?? [])
                if ("text" !== b.type && "resource_link" !== b.type && "resource" !== b.type && ("image" !== b.type || !H.f.safeParse(`data:${b.mimeType};base64,${b.data}`).success)) throw (0, aQ.c)("Unsupported MCP app content", -32602)
        }

        function bH(a, b) {
            if (0 !== a.length) return {
                id: crypto.randomUUID(),
                kind: "message",
                widgetSource: b.widgetSource,
                untrusted: !0,
                sourceName: b.sourceName,
                composerIcon: b.icon ?? void 0,
                server: b.server,
                content: a
            }
        }
        var bI = c("HPlV");
        let bJ = (0, i.j)(a9.a, (a, b) => {
            let {
                derived: c
            } = b;
            return c((b, c) => {
                let {
                    scope: d
                } = c, e = d.get(ae.v).find(b => b.id === a && "context" === b.kind);
                return e?.modelContextUpdateId == null ? null : {
                    updateId: e.modelContextUpdateId,
                    content: e.content?.length ? e.content : void 0,
                    structuredContent: e.structuredContent
                }
            }, {
                isEqual: D()
            })
        });
        var bK = c("ZDhX"),
            bL = c("Sm6l"),
            bM = c("HOLv"),
            bN = c("Kkna");

        function bO(a) {
            let b, c, d, e, f, i, j, k = (0, h.c)(23),
                {
                    backLabel: l,
                    canGoBack: m,
                    canGoForward: n,
                    color: o,
                    forwardLabel: p,
                    onBack: q,
                    onForward: r,
                    radius: s
                } = a,
                t = void 0 === o ? "ghost" : o,
                u = m ? t : "ghost",
                v = !m;
            k[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, g.jsx)(bM.a, {
                "aria-hidden": !1,
                asset: bN.a
            }), k[0] = b) : b = k[0], k[1] !== l || k[2] !== q || k[3] !== s || k[4] !== u || k[5] !== v ? (c = (0, g.jsx)(bL.a, {
                "aria-label": l,
                color: u,
                disabled: v,
                onClick: q,
                radius: s,
                size: "toolbar",
                uniform: !0,
                children: b
            }), k[1] = l, k[2] = q, k[3] = s, k[4] = u, k[5] = v, k[6] = c) : c = k[6], k[7] !== l || k[8] !== c ? (d = (0, g.jsx)(bK.a, {
                content: l,
                side: "bottom",
                children: c
            }), k[7] = l, k[8] = c, k[9] = d) : d = k[9];
            let w = n ? t : "ghost",
                x = !n;
            return k[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, g.jsx)(bM.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: bN.a
            }), k[10] = e) : e = k[10], k[11] !== p || k[12] !== r || k[13] !== s || k[14] !== w || k[15] !== x ? (f = (0, g.jsx)(bL.a, {
                "aria-label": p,
                color: w,
                disabled: x,
                onClick: r,
                radius: s,
                size: "toolbar",
                uniform: !0,
                children: e
            }), k[11] = p, k[12] = r, k[13] = s, k[14] = w, k[15] = x, k[16] = f) : f = k[16], k[17] !== p || k[18] !== f ? (i = (0, g.jsx)(bK.a, {
                content: p,
                side: "bottom",
                children: f
            }), k[17] = p, k[18] = f, k[19] = i) : i = k[19], k[20] !== i || k[21] !== d ? (j = (0, g.jsxs)(g.Fragment, {
                children: [d, i]
            }), k[20] = i, k[21] = d, k[22] = j) : j = k[22], j
        }

        function bP(a) {
            let b, c, d, e, f, i, j, k = (0, h.c)(20),
                {
                    className: l,
                    canGoBack: m,
                    canGoForward: n,
                    onBack: o,
                    onForward: p
                } = a,
                q = (0, J.a)();
            k[0] !== q ? (b = q.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back"
            }), k[0] = q, k[1] = b) : b = k[1];
            let r = b;
            k[2] !== q ? (c = q.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next"
            }), k[2] = q, k[3] = c) : c = k[3];
            let s = c;
            return k[4] !== l ? (d = (0, bz.b)("flex items-center gap-px", l), k[4] = l, k[5] = d) : d = k[5], k[6] !== o ? (e = a => {
                a.stopPropagation(), o()
            }, k[6] = o, k[7] = e) : e = k[7], k[8] !== p ? (f = a => {
                a.stopPropagation(), p()
            }, k[8] = p, k[9] = f) : f = k[9], k[10] !== r || k[11] !== m || k[12] !== n || k[13] !== s || k[14] !== e || k[15] !== f ? (i = (0, g.jsx)(bO, {
                backLabel: r,
                canGoBack: m,
                canGoForward: n,
                forwardLabel: s,
                onBack: e,
                onForward: f
            }), k[10] = r, k[11] = m, k[12] = n, k[13] = s, k[14] = e, k[15] = f, k[16] = i) : i = k[16], k[17] !== d || k[18] !== i ? (j = (0, g.jsx)("div", {
                className: d,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: bQ,
                children: i
            }), k[17] = d, k[18] = i, k[19] = j) : j = k[19], j
        }

        function bQ(a) {
            return a.stopPropagation()
        }
        var bR = c("oMYH"),
            bS = c("Yshm"),
            bT = c("EDsV"),
            bU = c("MTYR"),
            bV = c("IWEP");
        let bW = L.I(function(a, b) {
            let c = new WeakSet,
                d = L.J(L.L(), L.R()),
                e = (a, f) => {
                    if (null == a || "object" != typeof a) return a;
                    if (c.has(a)) return b.addIssue({
                        code: "custom",
                        path: f,
                        message: "Cyclic tool arguments"
                    }), bV.d;
                    c.add(a);
                    try {
                        if (Array.isArray(a)) return a.map((a, b) => e(a, [...f, b]));
                        let c = d.safeParse(a);
                        if (!c.success) {
                            for (let a of c.error.issues) b.addIssue({
                                ...a,
                                path: [...f, ...a.path]
                            });
                            return bV.d
                        }
                        return Object.fromEntries(Object.entries(c.data).filter(a => {
                            let [, b] = a;
                            return void 0 !== b
                        }).map(a => {
                            let [b, c] = a;
                            return [b, e(c, [...f, b])]
                        }))
                    } finally {
                        c.delete(a)
                    }
                };
            return e(a, [])
        }, L.J(L.L(), L.x()));

        function bX(a) {
            return null != a && "object" == typeof a && !Array.isArray(a)
        }
        var bY = c("Btes"),
            bZ = c("ILnd");
        let b$ = L.F({
            name: L.L().min(1),
            arguments: bW.optional(),
            _meta: t.b.shape._meta
        }).loose();
        var b_ = c("U0IP"),
            b0 = c("PkQL");
        let b1 = L.I(b3, L.J(L.L(), L.x())),
            b2 = L.I(b3, L.A({
                ...s.e.shape.params.shape,
                content: L.g(b0.g).optional()
            }));

        function b3(a) {
            try {
                return JSON.parse(JSON.stringify(a))
            } catch {
                return
            }
        }
        var b4 = c("kl6F");
        let b5 = L.F({
                mode: L.p(["inline", "fullscreen"])
            }),
            b6 = L.F({
                canGoBack: L.j(),
                canGoForward: L.j()
            }).loose(),
            b7 = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            b8 = L.E().positive(),
            b9 = {
                canGoBack: !1,
                canGoForward: !1
            },
            ca = (0, i.v)(b4.a, a => null),
            cb = ["resources/subscribe", "resources/unsubscribe"],
            cc = ["openai/events/subscribe", "openai/events/unsubscribe"],
            cd = L.x(),
            ce = L.F({
                uri: L.L().min(1)
            }).loose(),
            cf = L.F({
                arguments: L.J(L.L(), cd).optional(),
                name: L.L().regex(/\S/),
                subscriptionId: L.T()
            }),
            cg = L.F({
                subscriptionId: L.T()
            }),
            ch = L.F({
                linkToken: L.L().min(1),
                oauthStateId: L.L().min(1)
            }),
            ci = L.F({
                title: L.L().transform(a => a.trim().slice(0, 2e3)),
                favicon: L.L().max(8192).transform(a => {
                    let b = URL.parse(a);
                    return b?.protocol !== "https:" || b.username || b.password ? H.f.safeParse(a).success ? a : null : b.href
                }).catch(null)
            });

        function cj(a) {
            let {
                ModalFrame: b,
                recipient: d,
                resource: e,
                analyticsContext: f,
                conversationId: h,
                firstPartyPluginBridge: k,
                firstPartyPluginLoggerPluginId: m,
                pluginId: n,
                fullSurface: p,
                modalOpen: r = !1,
                hostScroll: C = !1,
                hostDisplayModes: H,
                hostId: U,
                hostedInThreadScrollLayout: W,
                access: Y,
                inheritHostBackground: ap = !1,
                installPlugin: at,
                inlineFrameAnchor: au,
                allowGlobalHost: aw,
                sessionId: aI,
                sourceMcpAppId: aJ,
                mcpAppScope: aX,
                sourceName: a_,
                permissionAppDisplayName: a0,
                mcpServerStatuses: a2,
                mcpAppHostAdapter: a4,
                getNewThreadDestination: be,
                widgetStatePersistence: bg,
                plaidAccountId: bh,
                deepLink: bj,
                rightPanelLayoutTick: bk,
                resolveResourceWatchPath: bn,
                server: bp,
                toolIcon: bx,
                appIcon: by,
                sidePanelTitle: bA,
                title: bB,
                globalSurface: bE = !1,
                toolArguments: bK,
                toolResult: bL,
                toolResultNotification: bM,
                toolCallStatus: bN,
                toolCallCancellationReason: bO,
                viewParamsOverride: bQ,
                frameState: bV
            } = a, bW = (0, i.y)(o.a), b0 = (0, i.y)(a8.a), b3 = (0, J.a)(), b4 = (0, j.useSyncExternalStore)(au.subscribe, au.getSnapshot, () => null), cd = (0, j.useEffectEvent)(() => bW), cj = (0, j.useEffectEvent)(() => Y.assertActive()), {
                csp: ck,
                fitWidth: cl,
                html: cm,
                sandboxOrigin: cn,
                serverOrigin: co,
                generatedSandboxOrigin: cp
            } = e, cq = e.prefersBorder && !a4?.hideFrameBorder, cr = (0, j.useEffectEvent)(() => n), cs = (0, j.useEffectEvent)(() => a0 ?? a_), ct = (0, bl.a)(e, aG.a?.mcpAppSandbox != null), cu = ct.join(";"), cv = "connectorId" in Y.serverIdentity ? Y.serverIdentity.connectorId : null, cw = null != d, cx = (0, j.useEffectEvent)(() => d?.get(ag.a)?.updatePrompt != null), cy = !cw || d?.value.kind === "new" || d?.value.kind === "local" || d?.value.kind === "chatgpt", cz = (0, i.x)($.d, U), cA = (0, i.x)($.nc, {
                hostId: U,
                threadId: h
            }), cB = null != cA && "notLoaded" !== cA.type, cC = !(0, M.f)(bp) && ck?.connectDomains.some(a => (0, aR.d)(new URL(a).hostname)) === !0, cD = (0, bd.a)(Y, f), cE = null != co ? new URL(co) : null, cF = a4?.sandboxFeatures, cG = cF?.join(";"), cH = aG.a?.mcpAppSandbox == null && (cF?.includes("local-network-access") === !0 || (0, aR.g)(ck) || cC && cE?.protocol === "https:" && (0, aR.d)(cE.hostname)), cI = (0, j.useEffectEvent)(() => {
                (0, ao.E)(cd(), aI, {
                    sandboxGeneration: bV.sandboxGeneration + 1
                })
            }), cJ = (0, K.ab)(), cK = d?.value.kind === "chatgpt" && null != d.value.conversationId && h === `chatgpt:${d.value.conversationId}`, cL = h.startsWith("chatgpt:") ? "chatgpt" : "codex", cM = (0, i.z)(d?.get(bJ, aI) ?? null), cN = (0, j.useEffectEvent)(() => d?.get(bJ, aI).get() ?? null), cO = (0, i.z)(ab.l.activeTab$), cP = (0, i.z)(bf.a), cQ = (0, i.z)(aP.a), cR = cQ["--color-background-primary"], {
                isWidgetReady: cS
            } = bV, cT = (0, ao.e)(bV), cU = !p && "fullscreen" === cT, cV = bV.displayMode, cW = p && aw, cX = (0, j.useRef)(!1), cY = (0, j.useRef)(null), cZ = (0, j.useRef)(null), c$ = (0, j.useRef)(null), c_ = (0, j.useRef)(null), c0 = (0, i.x)(ao.g, aI), c1 = (0, j.useRef)(null), c2 = (0, j.useRef)(null), c3 = a => {
                if (!(0, M.f)(bp)) return null;
                let b = bW.get(ao.h, aJ);
                if (null == b) return null;
                let c = b.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== c) return c;
                let d = (0, aV.d)({
                    appContext: aX.appContext,
                    invocationResourceUri: aX.invocationResourceUri,
                    originTool: aX.originTool,
                    originToolDefinition: a.tools[aX.originTool],
                    server: bp,
                    tools: aZ(a)
                });
                bW.set(ao.i, a => {
                    let b = a.get(aJ);
                    if (null == b) return a;
                    let {
                        content: c
                    } = b;
                    if (void 0 !== c.mcpAppScope.codexAppsToolScope) return a;
                    let e = new Map(a);
                    return e.set(aJ, {
                        ...b,
                        content: {
                            ...c,
                            mcpAppScope: {
                                ...c.mcpAppScope,
                                codexAppsToolScope: d
                            }
                        }
                    }), e
                });
                let e = bW.get(ao.h, aJ)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === e ? null : e
            }, [c4, c5] = (0, j.useState)(null), [c6, c7] = (0, j.useState)(null), [c8, c9] = (0, j.useState)(null), [da, db] = (0, j.useState)(!1), [dc, dd] = (0, j.useState)(null), [de, df] = (0, j.useState)(null), dg = de?.api ?? null, dh = de?.widgetId ?? null, di = (0, bc.a)(a => bn?.(a) ?? null), dj = (0, M.f)(bp) && (0, E.Rh)(cz, "mcpEventStream"), dk = (0, j.useMemo)(() => new a5({
                scope: b0,
                hostId: U,
                mcpAppId: aI,
                originResourceUri: aX.originResourceUri,
                resolveResourceWatchPath: di,
                server: bp
            }), [b0, U, aI, aX.originResourceUri, di, bp]), dl = (0, j.useMemo)(() => new a1({
                scope: b0,
                hostId: U,
                server: bp
            }), [b0, U, bp]), dm = cU ? (0, ba.b)(aI) : a4?.panelTabId ?? null, dn = (0, i.z)(bf.b) ?? bW, dp = (0, i.w)(ca, aI), [dq, dr] = (0, j.useState)(b9), ds = null != cv && b7.has(cv), dt = ds && null != dg && (dq.canGoBack || dq.canGoForward), {
                cancel: du,
                confirmation: dv,
                confirm: dw,
                request: dx
            } = (0, aM.a)(aL.a), dy = a4?.viewerHeader === !0, dz = a4?.forwardedRequestMethods, dA = dz?.join(";") || void 0, dB = JSON.stringify(a4?.experimentalCapabilities), dC = a4?.openFile, dD = (0, i.z)(o.j), dE = bE && (0, M.f)(bp) && !dD && null != d && null != n && null != cv, dF = (0, i.x)(Z.a, {
                name: "codex.browser"
            }), dG = !dD && dF.isCapable, dH = dG || cw && cy, dI = !dD && (void 0 === dC ? (0, E.Ii)((0, ay.a)(b0, U)) : null != dC), dJ = null != a4, dK = a4?.expectedReadySignal, dL = a4?.pluginSuggestions != null, dM = !0 === aX.isVerifiedFirstParty, dN = a4?.displayMode === "modal", dO = (0, j.useEffectEvent)(() => a4), dP = a4?.onRequestClose != null || W, dQ = function(a) {
                let {
                    adapter: b,
                    server: c,
                    connectorId: d,
                    widgetScope: e
                } = a;
                return (0, M.f)(c) && "connector_openai_olympic" === d && "internal://olympic" === e.originResourceUri && !0 === e.isVerifiedFirstParty ? b?.olympic : void 0
            }({
                adapter: a4,
                server: bp,
                connectorId: cv,
                widgetScope: aX
            }), dR = null != dQ, dS = dQ?.requestTargetedReply != null || a4?.setTargetedReply != null || a4?.requestTargetedReply != null, dT = dR || a4?.showToast != null, dU = (0, j.useEffectEvent)(() => dQ), dV = (0, j.useEffectEvent)(a => dQ?.viewMode ?? a4?.displayMode ?? a), dW = a4?.requestCheckout != null, dX = a4?.openConversationOverlay != null, dY = a4?.openPromptInput != null, dZ = a4?.autofill != null, d$ = a4?.openInApp != null, d_ = d$ && a4?.openInApp?.hideButton !== !0 && a4?.openInApp?.baseUrl != null && null !== bV.openInAppUrl, d0 = a4?.presentation != null, d1 = a4?.presentation?.requestFocusedObject != null, d2 = a4?.presentation?.requestCloseFocusedObject != null, d3 = a4?.presentation?.isSidebarOpen === !0, d4 = a4?.downloadBlob != null, d5 = a4?.triggerHaptic != null, d6 = a4?.files != null, d7 = a4?.share != null, d8 = a4?.requestConnectSheet != null, d9 = a4?.requestReconnectConnector != null, ea = a4?.requestLinkToConnector != null, eb = a4?.isTombstone === !0, ec = (0, j.useEffectEvent)(() => (function(a, b) {
                let {
                    mcpAppId: c,
                    adapter: d,
                    server: e,
                    connectorId: f,
                    widgetScope: g
                } = b;
                if (!(0, M.f)(e) || f !== al.a || !("internal://ledger" === g.originResourceUri || g.originResourceUri?.startsWith("internal://ledger") && g.originTool.endsWith("manage_linked_accounts"))) return;
                if (!0 === g.isVerifiedFirstParty && d?.finance != null) return d.finance;
                if (!ar(a) || !0 !== g.resourceIdentityVerified) return;
                let h = a.get(ao.s, c),
                    i = null == h ? void 0 : a.get(ao.i).get(h.sourceMcpAppId);
                if (null == h || null == i) return;
                let {
                    access: j,
                    resource: k
                } = h.resourceSnapshot;
                if (!("local" !== j.context.hostId && j.context.hostId !== E._b || null == j.accountId || i.content.conversationId.startsWith("chatgpt:")) && D()(k, i.content.resource)) return j.assertActive(), (0, aq.a)(a, j.accountId, j.context.hostId === E._b ? (0, E.$d)(i.content.conversationId) : (0, E.ge)(i.content.conversationId))
            })(bW, {
                mcpAppId: aI,
                adapter: a4,
                server: bp,
                connectorId: cv,
                widgetScope: aX
            })), ed = function(a, b) {
                let {
                    server: c,
                    connectorId: d,
                    widgetScope: e,
                    conversationId: f
                } = b, {
                    originResourceUri: g
                } = e;
                if ((0, M.f)(c) && "connector_openai_ads_manager" === d && (!0 === e.isVerifiedFirstParty || !0 === e.resourceIdentityVerified) && ("internal://ads-manager" === g || "internal://ads-manager-account-setup" === g || "internal://ads-manager-delivery" === g)) return {
                    sendInstrument: b => (function(a, b, c) {
                        let {
                            conversationId: d,
                            originResourceUri: e
                        } = c;
                        ! function(a, b, c) {
                            let d = R.safeParse(b);
                            if (d.success) {
                                let b = d.data;
                                if (new Set(b.tags.map(a => {
                                        let {
                                            key: b
                                        } = a;
                                        return b
                                    })).size !== b.tags.length) return;
                                let e = Object.fromEntries(b.tags.map(a => {
                                    let {
                                        key: b,
                                        value: c
                                    } = a;
                                    return [b, c]
                                }));
                                if ("payment_elements_stage" === b.label) {
                                    let c = S.safeParse(e);
                                    "count" === b.type && c.success && a.get(O.a).count("payments", "payment_elements_stage", c.data)
                                } else {
                                    let d = T.safeParse(e);
                                    if (!d.success) return;
                                    let {
                                        failure_category: f,
                                        ...g
                                    } = d.data, h = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: c,
                                        client_type: "browser"
                                    }, i = a.get(O.a);
                                    if ("ads_billing_client_phase" === b.label && "count" === b.type) {
                                        let a = {
                                            ...g,
                                            ..."error" === d.data.outcome && f ? {
                                                failure_category: f
                                            } : {}
                                        };
                                        i.count("payments", "ads_billing_client_phase", a), i.count("ecosystem", "ads_billing_client_phase", {
                                            ...a,
                                            ...h
                                        })
                                    } else "ads_billing_client_phase_duration_ms" === b.label && "hist" === b.type && void 0 !== b.value && (i.hist("payments", "ads_billing_client_phase_duration_ms", g, b.value), i.hist("ecosystem", "ads_billing_client_phase_duration_ms", {
                                        ...g,
                                        ...h
                                    }, b.value))
                                }
                            }
                        }(a, b, e);
                        let f = X.safeParse(b);
                        if (!f.success) return;
                        let g = f.data,
                            h = "browser";
                        if ("event" === g.type) {
                            let {
                                eventType: b,
                                requiredField: c
                            } = V[g.label], e = g.payload;
                            if (!e[c]) return;
                            (0, P.a)(a, N, {
                                eventType: b,
                                widget: e.widget,
                                viewSessionId: e.view_session_id,
                                view: e.view,
                                action: e.action,
                                outcome: e.outcome,
                                step: e.step,
                                source: e.source,
                                billingStatus: e.billing_status,
                                logoStatus: e.logo_status,
                                accountReviewStatus: e.account_review_status,
                                attentionReason: e.attention_reason,
                                billingRecovery: e.billing_recovery,
                                billingInSidebar: e.billing_in_sidebar,
                                logoHandoffFailed: e.logo_handoff_failed,
                                stepNumber: e.step_number,
                                stepCount: e.step_count,
                                previewKind: e.preview_kind,
                                reason: e.reason,
                                position: e.position,
                                page: e.page,
                                pageCount: e.page_count,
                                pageSize: e.page_size,
                                totalCount: e.total_count,
                                nextPage: e.next_page,
                                host: "codex",
                                clientType: h,
                                conversationId: d.replace(/^chatgpt:/, "")
                            });
                            return
                        }
                        let i = Object.entries(Q).flatMap(a => {
                                let [b, c] = a, d = g.tags.find(a => a?.key === b), e = L.p(c).safeParse(d?.value);
                                return e.success ? [{
                                    key: b,
                                    value: e.data
                                }] : []
                            }),
                            {
                                requiredField: j
                            } = V[g.label],
                            k = "outcome" === j ? "widget" : j;
                        if (!i.some(a => "widget" === a.key) || !i.some(a => a.key === k)) return;
                        let l = {
                            ...Object.fromEntries(i.map(a => {
                                let {
                                    key: b,
                                    value: c
                                } = a;
                                return [b, c]
                            })),
                            attribution_id: "connector_openai_ads_manager",
                            name: e,
                            client_type: h
                        };
                        a.get(O.a).count("ecosystem", g.label, l)
                    })(a, b, {
                        conversationId: f,
                        originResourceUri: g
                    })
                }
            }(bW, {
                server: bp,
                connectorId: cv,
                widgetScope: aX,
                conversationId: h
            }), ee = (0, j.useEffectEvent)(() => ed), ef = null != bh && (0, M.f)(bp) && dJ && cv === al.a, eg = (0, j.useMemo)(() => null != bK && "object" == typeof bK ? bK : null, [bK]), eh = (0, j.useMemo)(() => null == bL ? null : (0, a6.i)({
                isCodexAppsServer: (0, M.f)(bp),
                toolResult: bL
            }), [bp, bL]), ei = (0, j.useMemo)(() => null == eh ? null : (0, a6.e)(eh), [eh]), ej = void 0 === bQ ? ei : bQ, ek = (0, j.useEffectEvent)(() => ej), el = (0, j.useMemo)(() => null == eh ? null : (0, a6.f)(eh), [eh]), em = (0, j.useMemo)(() => bM ?? (0, a6.c)(eh, {
                preserveStructuredContentNull: a4?.preserveStructuredContentNull
            }), [a4?.preserveStructuredContentNull, bM, eh]), en = bN ?? (em?.isError === !0 ? "error" : void 0), eo = (0, j.useMemo)(() => null == en ? el : {
                ...el,
                status: en
            }, [en, el]), ep = (0, j.useEffectEvent)(() => ({
                sourceMcpAppId: aJ,
                toolInput: eg,
                toolOutput: ei,
                toolResponseMetadata: eo,
                toolStatus: en,
                toolResult: eh,
                toolResultNotification: em,
                toolCallCancellationReason: bO
            })), eq = (0, j.useEffectEvent)(a => null == at || null != en ? null : (0, l.a)({
                scope: bW,
                conversationId: h,
                hostId: U,
                installPlugin: at,
                mcpAppScope: aX,
                navigate: cJ,
                access: Y,
                server: bp,
                sessionId: aI,
                sourceMcpAppId: aJ,
                toolResult: a
            })), er = null == cn ? void 0 : (0, bU.c)(cn, b3.locale), es = Y.getSandboxPartition?.(e) ?? G.b, et = null == er ? null : (0, bU.b)(er), eu = (0, j.useEffectEvent)(() => {
                if (null == er) return null;
                let a = (0, G.j)(er);
                return null == a ? null : {
                    csp: ck,
                    experimentalCapabilities: a4?.experimentalCapabilities,
                    html: cm,
                    locale: b3.locale,
                    sandboxOrigin: a,
                    sourceUrl: er
                }
            }), ev = dc?.isConnected === !0 ? dc : null, ew = b4?.isConnected === !0 ? b4 : null, ex = null != ew || null != ev, ey = (0, j.useEffectEvent)(() => ex ? {
                scope: dn,
                tabId: dm
            } : null), ez = !cU && !p && b4?.dataset.mcpAppInlineSurface === "card", eA = "iframe", eB = "function" == typeof c6?.moveBefore, eC = r && eB, eD = ew ?? (!cU && c6?.isConnected ? c6.parentElement : null), eE = eD?.closest("[data-mcp-app-scroll-host]"), eF = !cU && (!p && C || null != eE), eG = aw && !(p && dy) && !eF && (eB || !W), eH = eG ? null : eD?.closest("[data-mcp-app-portal-target='true']") ?? (!eB && c6?.isConnected ? c6.parentElement : null), eI = eB || eG ? c6 : eH, eJ = (0, j.useEffectEvent)(a => {
                let b = bt(a, p, cU ? "fullscreen" : "inline");
                return !p && "inline" === cT && cl && ew?.parentElement != null && (b.maxWidth = ew.parentElement.clientWidth), {
                    containerDimensions: b
                }
            }), eK = (0, j.useEffectEvent)(() => {
                (0, as.c)(cd(), {
                    hostId: U,
                    pluginId: n,
                    server: bp
                }, aI)
            }), eL = (0, j.useEffectEvent)(() => ({
                safe: {
                    connectorId: cv,
                    mcpAppId: aI,
                    sandboxId: et,
                    initId: (0, G.h)(c8?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: U,
                    server: bp
                }
            })), eM = (0, j.useEffectEvent)(a => {
                (0, P.a)(bW, u.o, {
                    attributionId: cv ?? void 0,
                    conversationId: "chatgpt" === cL ? h.slice(8) : void 0,
                    host: "chatgpt" === cL ? "chatgpt" : void 0,
                    errorSource: a,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === a || void 0
                })
            }), eN = (0, j.useEffectEvent)((a, b) => {
                let c = cd().get(ao.s, aI)?.sandboxError;
                if ((0, bT.f)(c)) return;
                let d = (0, aA.a)(b),
                    e = eL();
                (q.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: cL,
                        retryCount: bV.sandboxGeneration,
                        stage: a,
                        connectorId: e.safe.connectorId,
                        mcpAppId: e.safe.mcpAppId,
                        sandboxId: e.safe.sandboxId,
                        initId: e.safe.initId
                    },
                    sensitive: {
                        error: d,
                        hostId: e.sensitive.hostId,
                        server: e.sensitive.server
                    }
                }), c_.current?.fail(b instanceof Error && "TimeoutError" === b.name ? "timeout" : "load_failed"), "handshake" === a && b instanceof Error && "TimeoutError" === b.name && 0 === bV.sandboxGeneration) ? (0, ao.E)(cd(), aI, {
                    sandboxGeneration: 1
                }) : (0, ao.E)(cd(), aI, {
                    isWidgetReady: !1,
                    sandboxError: d
                })
            }), eO = (0, j.useEffectEvent)(a => {
                let b = b8.safeParse(a);
                b.success && bW.get(ao.s, aI)?.displayMode === "inline" && (0, ao.E)(bW, aI, {
                    intrinsicHeight: b.data
                })
            }), eP = (0, j.useEffectEvent)(a => {
                let b = b8.safeParse(a);
                cl && b.success && (0, ao.E)(bW, aI, {
                    intrinsicWidth: b.data
                })
            }), eQ = (0, j.useEffectEvent)(a => {
                if (!ds) return;
                let b = b6.safeParse(a);
                b.success && dr({
                    canGoBack: b.data.canGoBack,
                    canGoForward: b.data.canGoForward
                })
            }), eR = (0, j.useEffectEvent)(() => W ? void(0, ao.b)(bW, aI) : a4?.onRequestClose?.()), eS = (0, j.useEffectEvent)(async (a, b) => {
                if (a4?.openExternal != null && await a4.openExternal(a, b)) return;
                let c = aU.c.safeParse(a);
                if (c.success) {
                    if ("popup" === c.data.openMode && "https:" === new URL(c.data.href).protocol && !0 === aX.isVerifiedFirstParty) return void(0, aT.a)(bW, c.data.href);
                    if ("popup" !== c.data.openMode && a4?.onOpenLink?.(c.data.href) || "popup" !== c.data.openMode && k?.onOpenLink != null && await k.onOpenLink(d ?? bW, c.data.href, b)) return;
                    let a = (0, E.Uj)(c.data.href);
                    if (null != a) return void cJ(a);
                    (0, aj.f)({
                        href: c.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: a4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), eT = (0, j.useEffectEvent)(async (a, b) => {
                if (!ef || null == bh) throw Error("Plaid Link is unavailable for this app");
                let c = ch.parse(a),
                    {
                        openPersonalFinancePlaidLinkFromWidget: d
                    } = await (0, am.a)();
                return d(bW, {
                    accountId: bh,
                    linkToken: c.linkToken,
                    oauthStateId: c.oauthStateId,
                    signal: b
                })
            }), eU = (0, j.useEffectEvent)((a, b, c) => (async function(a, b) {
                let {
                    mcpAppId: c,
                    requestModal: d,
                    payload: e,
                    signal: f,
                    accountId: g,
                    frameAccountId: h
                } = b, i = ar(a) ? a.get(ao.s, c) : null, j = null == i ? void 0 : a.get(ao.i).get(i.sourceMcpAppId), k = i?.resourceSnapshot.access.context.hostId !== "local" && i?.resourceSnapshot.access.context.hostId !== E._b || null == j || j.content.conversationId.startsWith("chatgpt:") ? void 0 : i.resourceSnapshot.access.accountId, l = g ?? k;
                if (null == d) throw Error("Finance account linking is unavailable");
                if (!f.aborted && (h ?? k) === l && a.get(an.f) === l && await d(e, f) && !f.aborted && a.get(an.f) === l) {
                    let b = a.get(ao.s, c);
                    if (null == b) return;
                    (0, ao.E)(a, c, {
                        sandboxGeneration: b.sandboxGeneration + 1
                    })
                }
            })(bW, {
                mcpAppId: aI,
                requestModal: ec()?.requestModal,
                payload: a,
                signal: b,
                accountId: bh,
                frameAccountId: c
            })), eV = (0, j.useEffectEvent)(a => (function(a) {
                let {
                    composerOverlayReservePx: b,
                    displayMode: c,
                    hasComposerOverlay: d,
                    hostAdapter: e,
                    showNavigationControls: f
                } = a;
                if (e?.displayMode === "modal") return !1 !== e.showModalCloseButton || f ? br : bq;
                let g = "inline" === c && f ? br : bq;
                return ("inline" !== c || d) && 0 !== b ? {
                    insets: {
                        ...g.insets,
                        bottom: b
                    }
                } : g
            })({
                composerOverlayReservePx: cP,
                displayMode: p ? "inline" : a,
                hasComposerOverlay: cW,
                hostAdapter: dO(),
                showNavigationControls: dt
            })), eW = (0, j.useEffectEvent)(() => {
                let a = bW.get(ao.s, aI) ?? bV;
                return {
                    displayMode: a.displayMode,
                    availableDisplayModes: a.availableDisplayModes ?? H
                }
            }), eX = (0, j.useEffectEvent)(a => {
                let b = (0, ao.f)(bW, aI, a);
                if (null == b) throw Error("The app has no supported display mode");
                return {
                    ...eW(),
                    safeAreaInsets: eV(b).insets
                }
            }), eY = (0, j.useEffectEvent)(a => {
                let b = b5.safeParse(a),
                    c = bW.get(ao.s, aI);
                if (b.success && (0, ao.a)(c, b.data.mode)) {
                    let c = !p && "fullscreen" === b.data.mode,
                        d = b.data.mode;
                    if (c && !cU && c6?.style.setProperty("display", "none"), d0 && (0, ao.E)(bW, aI, {
                            displayModeTitle: c && "string" == typeof a.title ? a.title : void 0
                        }), (0, ao.C)(bW, aI, d, "app_request"), null != dg && null != dh) {
                        let a = {
                            displayMode: d,
                            isTombstone: dO()?.isTombstone === !0,
                            viewParams: ej,
                            widgetId: dh
                        };
                        cY.current = a, (0, aQ.h)(dg.setWidgetView(a));
                        let b = null == c6 ? null : bs({
                            ...eW(),
                            containerDimensions: bt(c6, p, d),
                            locale: b3.locale,
                            deepLink: bj,
                            safeAreaInsets: eV(d).insets,
                            styleVariables: cQ,
                            theme: bu(),
                            userAgent: bv(dO()?.device),
                            toolInfo: dO()?.toolInfo
                        });
                        cZ.current = b, null != b && (0, aQ.h)(dg.notifyMcpAppsHostContext({
                            hostContext: b
                        }))
                    }
                    return {
                        mode: d
                    }
                }
                return q.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: b.success,
                        requestedDisplayMode: b.success ? b.data.mode : void 0,
                        displayMode: c?.displayMode,
                        availableDisplayModes: c?.availableDisplayModes,
                        mcpAppId: aI,
                        sourceMcpAppId: c?.sourceMcpAppId
                    }
                }), {
                    mode: (c ?? bV).displayMode
                }
            }), eZ = (0, j.useEffectEvent)(() => bj), e$ = (0, j.useEffectEvent)(() => bW.get(ao.g, aI)), e_ = (0, j.useEffectEvent)(() => {
                var a;
                a = by ?? void 0, null != d && (0, af.h)(d, aI, a)
            });
            (0, j.useEffect)(() => {
                e_()
            }, [aI, by?.alt, by?.knownAppId, by?.logoDarkUrl, by?.logoUrl]);
            let e0 = (0, j.useEffectEvent)(async function(a) {
                    let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (bW.get(ao.s, aI)?.sourceMcpAppId !== aJ) return;
                    let c = (null != bg || null == bL ? b1.nullable() : b1).safeParse(a);
                    return c.success ? (null == bg && null == bL && (0, ao.E)(bW, aI, {
                        pendingEditSource: aJ
                    }), bW.set(ao.x, aI, c.data), bg?.save(c.data, b)) : void bW.set(ao.x, aI, null)
                }),
                e1 = a => {
                    null != dg && (0, aQ.h)(dg.navigate({
                        delta: a
                    }))
                },
                e2 = {
                    name: null != a4 ? aX.originResourceUri ?? aX.originTool : `${bp}.${aX.originTool}`,
                    attribution: "connectorId" in Y.serverIdentity ? Y.serverIdentity.connectorId : void 0
                },
                e3 = (0, j.useEffectEvent)(function(a) {
                    let b = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        c = (0, ai.getMcpAppSubmit)(d, () => {
                            Y.assertActive(), dO()?.assertActive?.()
                        });
                    return null == c ? null : (d, e) => c(d, b ? e2 : {
                        ...e2,
                        visuallyHidden: !0
                    }, a, e)
                }),
                e4 = async function(a, b, c, d, e, f) {
                    let g = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, bI.sendMcpAppMessage)({
                        untrustedAppMessage: a,
                        prompt: b,
                        send: c,
                        signal: d,
                        messageAttachment: f,
                        modelContextAttachments: g,
                        requestConfirmation: a => dx({
                            imageUrls: a.imageAttachments.map(a => {
                                let {
                                    src: b
                                } = a;
                                return b
                            }),
                            prompt: a.prompt,
                            title: e
                        })
                    })
                }, e5 = (0, j.useEffectEvent)(async (a, b) => {
                    var c;
                    if (null == d) throw (0, aQ.c)("App messages are disabled for this view", t.r.MethodNotFound);
                    let e = (c = dU(), b.aborted || c && az.safeParse(a).success ? Promise.resolve() : c?.sendFollowUpMessage?.(a));
                    if (null != e) return e;
                    b.throwIfAborted();
                    let {
                        context: f,
                        isVisible: g,
                        prompt: h,
                        title: i
                    } = (0, aO.c)(a), j = e3(b, g);
                    if (null == j) throw (0, aQ.c)("MCP app messages require an available composer", t.r.MethodNotFound);
                    let l = d.get(ae.v).filter(a => "context" === a.kind),
                        m = crypto.randomUUID(),
                        n = "chatgpt" === d.value.kind ? k?.onFollowUp : void 0,
                        o = performance.now();
                    try {
                        await e4({
                            source: "mcp_app",
                            sourceId: aI,
                            widgetSource: aX.widgetSource,
                            text: h,
                            structuredContent: f ?? (0, aO.b)(e$())
                        }, h, j, b, i, void 0, l)
                    } catch (a) {
                        throw n?.({
                            attemptId: m,
                            result: "FAILED",
                            durationMs: performance.now() - o
                        }, f), a
                    }
                    n?.({
                        attemptId: m,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - o
                    }, f), (0, af.b)(d, l)
                }), e6 = a => {
                    a.throwIfAborted(), Y.assertActive(), a4?.assertActive?.()
                }, e7 = async (a, b, c, d) => {
                    e6(b);
                    let e = null != a4 ? await a4.handleRequest(a, b, aX, c) : await d();
                    return e6(b), e
                }, e8 = async (a, b, c) => {
                    let d = await e7({
                        method: "tools/call",
                        params: a
                    }, b, c, () => (async function(a) {
                        let {
                            appScope: b,
                            scope: c,
                            chatGptMessageId: d,
                            conversationId: e,
                            getTrustedToolScope: f,
                            hostId: g,
                            mcpAppId: h,
                            mcpServerStatuses: i,
                            access: j,
                            server: k,
                            signal: l,
                            toolCallParams: m
                        } = a, n = await async function(a) {
                            let {
                                scope: b,
                                getTrustedToolScope: c,
                                hostId: d,
                                mcpServerStatuses: e,
                                server: f,
                                threadId: g,
                                toolArguments: h,
                                toolName: i
                            } = a, j = await aY({
                                scope: b,
                                hostId: d,
                                mcpServerStatuses: e,
                                server: f,
                                threadId: g
                            }), k = aZ(j), l = c(j);
                            return {
                                ...(0, aQ.a)(() => (0, aV.h)({
                                    server: f,
                                    toolArguments: h,
                                    toolScope: l,
                                    toolName: i,
                                    tools: k
                                })),
                                serverStatus: j
                            }
                        }({
                            scope: c,
                            getTrustedToolScope: f,
                            hostId: g,
                            mcpServerStatuses: i,
                            server: k,
                            threadId: c.get(_.b, {
                                hostId: g,
                                conversationId: e
                            }) ?? void 0,
                            toolArguments: m.arguments,
                            toolName: m.name
                        });
                        l.throwIfAborted(), j.assertActive();
                        let o = function(a, b) {
                                if (!(0, M.f)(a) || !bX(b)) return b;
                                let c = {
                                    ...b
                                };
                                return delete c.connector_id, delete c.connector_name, delete c.connector_display_name, delete c.connector_description, delete c._codex_apps, c
                            }(k, m._meta),
                            p = null == n.codexAppsResourceUri ? o : {
                                ...bX(o) ? o : {},
                                _codex_apps: {
                                    resource_uri: n.codexAppsResourceUri
                                }
                            };
                        try {
                            let a = (0, bY.a)({
                                scope: b,
                                chatGptConversation: e.startsWith("chatgpt:") ? {
                                    id: e.slice(8),
                                    messageId: d ?? null
                                } : void 0,
                                toolIdentity: n.codexAppsToolIdentity,
                                access: j,
                                signal: l,
                                toolArguments: m.arguments ?? {}
                            });
                            if (null != a) return await a;
                            if (e.startsWith("chatgpt:")) return (0, a6.i)({
                                isCodexAppsServer: (0, M.f)(k),
                                toolResult: await (0, bZ.c)(b, g, k, n.name, m.arguments ?? {}, {
                                    hostToolCallMetadata: p,
                                    requestOptions: {
                                        widget: {
                                            conversationId: e,
                                            mcpAppId: h
                                        }
                                    }
                                })
                            });
                            let f = await (0, aW.b)(c, g).callMcpTool({
                                threadId: e,
                                server: k,
                                tool: n.name,
                                arguments: m.arguments ?? {},
                                _meta: p
                            }, {
                                widget: {
                                    conversationId: e,
                                    mcpAppId: h
                                }
                            });
                            return (0, a6.i)({
                                isCodexAppsServer: (0, M.f)(k),
                                toolResult: f
                            })
                        } catch (a) {
                            throw (0, aQ.d)(a, "MCP tool call failed")
                        }
                    })({
                        appScope: b0,
                        scope: bW,
                        chatGptMessageId: aX.chatGptMessageId,
                        conversationId: h,
                        getTrustedToolScope: c3,
                        hostId: U,
                        mcpAppId: aI,
                        mcpServerStatuses: a2,
                        access: Y,
                        server: bp,
                        signal: b,
                        toolCallParams: a
                    }));
                    if ((0, F.s)(d)?.isError === !0) {
                        let b = a6.g.safeParse(d).data;
                        q.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: aI,
                                initId: (0, G.h)(c8?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: a.name,
                                error: b?.content.find(a => "text" === a.type)?.text ?? L.F({
                                    error: L.L()
                                }).safeParse(b?.structuredContent).data?.error
                            }
                        })
                    }
                    return d
                }, e9 = (0, j.useEffectEvent)(async (a, b, c) => {
                    let e = d?.get(a9.b);
                    return e8((0, aQ.g)(b$, {
                        arguments: b,
                        name: a
                    }, "Invalid MCP tool call params"), c, e)
                }), fa = (0, j.useEffectEvent)(async (a, b) => {
                    let c = d?.get(a9.b),
                        e = t.W.safeParse(a);
                    if (!e.success) throw (0, aQ.e)("Invalid MCP proxy request", e.error.issues, e.error.issues.every(a => "params" === a.path[0]) ? t.r.InvalidParams : t.r.InvalidRequest);
                    let f = bW.get(_.b, {
                            hostId: U,
                            conversationId: h
                        }) ?? void 0,
                        {
                            method: g,
                            params: i
                        } = e.data;
                    if (h.startsWith("chatgpt:") && cb.some(a => a === g)) throw (0, aQ.c)("Resource subscriptions require a local Codex thread", t.r.MethodNotFound);
                    switch (g) {
                        case y.a: {
                            let {
                                path: a
                            } = (0, aQ.g)(y.b, i, "Invalid MCP file open params");
                            if (!dI) throw (0, aQ.c)("File opening is unavailable", t.r.MethodNotFound);
                            if (null != dC) return (0, P.a)(bW, v.CodexMcpExtensionAction, {
                                ...cD,
                                feature: "file_open",
                                action: "requested"
                            }), await dC(a, b), {};
                            if (!(0, E.Mh)(a) || !(0, E.Ph)(a)) throw (0, aQ.c)("Cannot open this file path", t.r.InvalidParams);
                            return (0, P.a)(bW, v.CodexMcpExtensionAction, {
                                ...cD,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ak.openWorkspaceFile)({
                                scope: bW,
                                path: a,
                                cwd: null,
                                hostConfig: (0, ay.a)(b0, U),
                                hostId: U,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return dz?.includes("ping") ? e7(e.data, b, c, async () => ({})) : {};
                        case ah.a:
                            if (!dE) throw (0, aQ.c)("The plugin composer is unavailable", t.r.MethodNotFound);
                            if (navigator.userActivation?.isActive !== !0 || null == c8 || document.activeElement !== c8) throw (0, aQ.c)("Starting a plugin draft requires a user gesture", t.r.InvalidRequest);
                            return b.throwIfAborted(), dO()?.assertActive?.(), (0, ah.d)(d, n, cv), {};
                        case "ui/message": {
                            let a = function(a) {
                                let b = bF.safeParse(a);
                                if (!b.success) throw (0, aQ.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: c
                                } = b.data;
                                if (bG(c), !c.some(a => "text" !== a.type || a.text.trim().length > 0)) throw (0, aQ.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: b.data._meta?.["openai/message"],
                                    content: c
                                }
                            }(i);
                            b.throwIfAborted();
                            let c = a.options?.target ?? "active";
                            if ((0, P.a)(bW, v.CodexMcpExtensionAction, {
                                    ...cD,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: c,
                                    send: a.options?.send !== !1
                                }), a.options?.target !== "new" && null == d) throw (0, aQ.c)("MCP app messages are disabled for this view", t.r.MethodNotFound);
                            if (a.options?.send === !1) {
                                let b = function(a, b) {
                                    let c = [],
                                        d = [];
                                    for (let b of a) "text" === b.type && (0, bD.e)(b) && null == (0, bD.b)(b) ? c.push(b.text) : d.push(b);
                                    return {
                                        text: c.join("\n\n"),
                                        attachment: bH(d, b)
                                    }
                                }(a.content, {
                                    sourceName: a_,
                                    icon: by,
                                    server: bp,
                                    widgetSource: aX.widgetSource
                                });
                                if (dO()?.assertActive?.(), "new" === a.options.target) {
                                    if (dD) throw (0, aQ.c)("New drafts are unavailable in this view", t.r.MethodNotFound);
                                    (0, ah.b)(b0, b)
                                } else {
                                    if (null == d) throw (0, aQ.c)("The composer is unavailable", t.r.MethodNotFound);
                                    (0, ah.e)(d, b, "append")
                                }
                                return {}
                            }
                            let {
                                prompt: e,
                                message: f,
                                attachment: g
                            } = function(a, b, c) {
                                let d = [],
                                    e = [];
                                for (let b of a) "text" === b.type && null == (0, bD.b)(b) ? d.push(b.text) : e.push(b);
                                let f = bH(e, b),
                                    g = d.join("\n\n");
                                return {
                                    prompt: g.trim() ? g : c.formatMessage({
                                        id: "codex.mcpApp.contentMessage",
                                        defaultMessage: "Shared content from {appName}"
                                    }, {
                                        appName: b.sourceName
                                    }),
                                    message: {
                                        source: "mcp_app",
                                        sourceId: b.sessionId,
                                        text: g
                                    },
                                    attachment: f
                                }
                            }(a.content, {
                                sourceName: a_,
                                icon: by,
                                server: bp,
                                sessionId: aI,
                                widgetSource: aX.widgetSource
                            }, b3), h = !1;
                            a.options?.target === "new" && null != et && aG.a?.mcpAppSandbox != null && (e6(b), h = await aG.a.mcpAppSandbox.consumeUserGesture((0, aU.a)(et, c8)).catch(() => !1) === !0, e6(b));
                            let j = a.options?.target === "new" ? (0, bI.a)({
                                scope: b0,
                                recipient: d,
                                getNewThreadDestination: be,
                                globalEntrypointIdentity: "global" === cD.source ? {
                                    connectorId: cD.connectorId,
                                    pluginId: cD.pluginId
                                } : void 0,
                                canCreateCodexThreads: dG,
                                hasUserGesture: h,
                                assertActive: () => {
                                    if (dD) throw (0, aQ.c)("New threads are unavailable in this view", t.r.MethodNotFound);
                                    e6(b)
                                },
                                sourceName: a_,
                                toolOrigin: e2,
                                signal: b
                            }) : e3(b);
                            if (null == j) throw (0, aQ.c)("MCP app messages require an available composer", t.r.MethodNotFound);
                            let k = d?.get(ae.v).filter(a => {
                                let {
                                    id: b
                                } = a;
                                return b === aI
                            }) ?? [];
                            return await e4(f, e, j, b, void 0, g, k), null != d && (0, af.b)(d, k), {}
                        }
                        case "ui/download-file":
                            return async function(a, b, c, d) {
                                try {
                                    let e;
                                    c.throwIfAborted(), d();
                                    let f = function(a) {
                                        let b, {
                                                contents: c
                                            } = a,
                                            d = c[0];
                                        if (1 !== c.length || d?.type !== "resource") return;
                                        let {
                                            resource: e
                                        } = d, f = decodeURIComponent((0, aF.j)(new URL(e.uri).pathname)).trim();
                                        if (0 === f.length || f.length > 255 || "." === f || ".." === f || /[/\\:*?"<>|\p{Cc}]/u.test(f)) return;
                                        if ("blob" in e) {
                                            if (e.blob.length > 4 * Math.ceil(8388608 / 3)) return;
                                            b = (0, aD.a)(e.blob)
                                        } else {
                                            if (e.text.length > 8388608) return;
                                            b = e.text
                                        }
                                        let g = new Blob([b], {
                                            type: e.mimeType ?? "application/octet-stream"
                                        });
                                        return g.size <= 8388608 ? {
                                            blob: g,
                                            name: f
                                        } : void 0
                                    }(b);
                                    if (null == f) return {
                                        isError: !0
                                    };
                                    let g = !1,
                                        h = !1;
                                    try {
                                        await new Promise(b => {
                                            e = b, c.addEventListener("abort", e, {
                                                once: !0
                                            }), (0, aC.f)(a, aB.ExternalLinkConfirmationDialog, {
                                                href: "",
                                                downloadFilename: f.name,
                                                initiator: "mcp_app_resource",
                                                signal: c,
                                                onDownload: () => {
                                                    if (!h && !c.aborted) try {
                                                        d(), (0, aE.a)(f.blob, f.name), g = !0
                                                    } catch {
                                                        return
                                                    }
                                                }
                                            }, {
                                                onDispose: b
                                            })
                                        })
                                    } finally {
                                        h = !0, null != e && c.removeEventListener("abort", e)
                                    }
                                    return {
                                        isError: !g
                                    }
                                } catch {
                                    return {
                                        isError: !0
                                    }
                                }
                            }(bW, (0, aQ.g)(s.b.shape.params, i, "Invalid MCP file download params"), b, () => e6(b));
                        case "ui/update-model-context": {
                            if (null == d) throw (0, aQ.c)("MCP model context requires an available composer", t.r.MethodNotFound);
                            let a = (0, aQ.g)(b2, i, "Invalid MCP model context params");
                            if (null != e3() && bG(a.content), cK && a.content?.some(a => "image" === a.type && !(0, E.Si)({
                                    type: a.mimeType
                                }))) throw (0, aQ.c)("Invalid MCP model context params", t.r.InvalidParams);
                            let b = null != bg || cK && null == bL;
                            if (b && bW.get(ao.s, aI)?.sourceMcpAppId !== aJ) throw (0, aQ.c)("The widget source is no longer active", -32e3);
                            dO()?.onModelContextUpdate?.(a, aI), (0, ac.a)(d);
                            let c = (a => {
                                var b;
                                if (null == d) return null;
                                let c = a.content ?? [],
                                    e = c.length > 0 || null != a.structuredContent ? crypto.randomUUID() : null;
                                return b = {
                                    kind: "context",
                                    widgetSource: aX.widgetSource,
                                    untrusted: !0,
                                    content: c,
                                    server: bp,
                                    composerIcon: by ?? void 0,
                                    sourceName: a_,
                                    id: aI,
                                    modelContextUpdateId: e ?? void 0,
                                    structuredContent: a.structuredContent
                                }, null != d && ((0, af.g)(d, b), (0, a$.f)(bW, aI, d.get(ae.v).find(a => a.id === aI) ?? null)), e
                            })(a);
                            if ((0, P.a)(bW, v.CodexMcpExtensionAction, {
                                    ...cD,
                                    feature: "model_context",
                                    action: "updated"
                                }), b) {
                                let b = await e0(a, !0);
                                null != bg && (0, aQ.b)(b)
                            }
                            return null == c ? {} : {
                                _meta: {
                                    [z.a]: {
                                        updateId: c
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return e8((0, aQ.g)(b$, i, "Invalid MCP tool call params"), b, c);
                        case "resources/read": {
                            let a = (0, aQ.g)(ce, i, "Invalid MCP resource read params");
                            if (e6(b), (0, P.a)(bW, v.CodexMcpExtensionAction, {
                                    ...cD,
                                    feature: "resource",
                                    action: "read"
                                }), a4?.readHostResource != null) {
                                e6(b);
                                let c = await a4.readHostResource(a, b);
                                if (e6(b), null != c) return c
                            }
                            return (0, aQ.a)(() => {
                                (0, aV.a)({
                                    mcpAppScope: aX,
                                    server: bp,
                                    uri: a.uri
                                })
                            }), await e7({
                                method: g,
                                params: a
                            }, b, c, async () => {
                                try {
                                    return await (0, a3.d)({
                                        scope: bW,
                                        appContext: aX.appContext,
                                        connectorId: (0, M.f)(bp) ? cv : null,
                                        hostId: U,
                                        mcpAppId: aI,
                                        originCallId: aX.originCallId ?? null,
                                        threadId: h,
                                        server: bp,
                                        uri: a.uri
                                    })
                                } catch (a) {
                                    throw (0, aQ.d)(a, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let a = (0, aQ.g)(ce, i, "Invalid MCP resource subscribe params");
                            return e6(b), (0, P.a)(bW, v.CodexMcpExtensionAction, {
                                ...cD,
                                feature: "resource",
                                action: "subscribe"
                            }), await dk.subscribe(a.uri, b)
                        }
                        case "resources/unsubscribe": {
                            let a = (0, aQ.g)(ce, i, "Invalid MCP resource unsubscribe params");
                            return e6(b), (0, P.a)(bW, v.CodexMcpExtensionAction, {
                                ...cD,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await dk.unsubscribe(a.uri, b)
                        }
                        case "openai/events/subscribe": {
                            let a = (0, aQ.g)(cf, i, "Invalid MCP event subscribe params"),
                                b = bW.get(ao.h, aJ)?.content.mcpAppScope,
                                c = b?.codexAppsToolScope;
                            if (void 0 === c && (c = c3(await aY({
                                    scope: bW,
                                    hostId: U,
                                    mcpServerStatuses: a2,
                                    server: bp,
                                    threadId: f
                                }))), null == c) throw (0, aQ.c)("MCP event subscriptions require a trusted connector scope", t.r.InternalError);
                            return dl.subscribe({
                                arguments: a.arguments ?? {},
                                connectorId: c.connectorId,
                                linkId: b?.appContext?.linkId ?? null,
                                name: a.name,
                                subscriptionId: a.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let a = (0, aQ.g)(cg, i, "Invalid MCP event unsubscribe params");
                            return dl.unsubscribe(a.subscriptionId)
                        }
                        case "tools/list":
                            return e7(e.data, b, c, async () => {
                                let a = await aY({
                                        scope: bW,
                                        hostId: U,
                                        mcpServerStatuses: (0, M.f)(bp) ? a2 : void 0,
                                        server: bp,
                                        threadId: f
                                    }),
                                    b = aZ(a),
                                    c = c3(a);
                                return {
                                    tools: (0, aQ.a)(() => (0, aV.e)({
                                        server: bp,
                                        toolScope: c,
                                        tools: b
                                    }))
                                }
                            });
                        case "resources/list":
                            return e7(e.data, b, c, async () => (0, M.f)(bp) ? {
                                resources: []
                            } : {
                                resources: (await aY({
                                    scope: bW,
                                    hostId: U,
                                    server: bp,
                                    threadId: f,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return e7(e.data, b, c, async () => (0, M.f)(bp) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await aY({
                                    scope: bW,
                                    hostId: U,
                                    server: bp,
                                    threadId: f,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return e7(e.data, b, c, async () => ({
                                prompts: []
                            }));
                        default:
                            return e7(e.data, b, c, () => {
                                throw (0, aQ.c)(`Unsupported MCP proxy method: ${g}`, t.r.MethodNotFound)
                            })
                    }
                }), fb = (0, j.useEffectEvent)(async (a, d) => {
                    let {
                        requestMcpAppModal: e
                    } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(963552)]).then(c.bind(c, "SEK8"));
                    e6(d), e(cd(), {
                        Frame: b,
                        sourceMcpAppId: aJ,
                        signal: d,
                        handleRequest: async (a, b) => t.Z.parse(await fa(a, b ?? d))
                    }, a)
                });
            (0, j.useLayoutEffect)(() => {
                let a = document.createElement("div");
                return a.dataset.mcpAppFrame = "true", c7(a), () => {
                    a.remove(), c7(b => b === a ? null : b), db(!1)
                }
            }, [aI]), (0, j.useLayoutEffect)(() => {
                null != c6 && (void 0 === cp ? c6.removeAttribute("data-mcp-app-origin-generated") : c6.setAttribute("data-mcp-app-origin-generated", cp))
            }, [c6, cp]), (0, j.useLayoutEffect)(() => {
                null != c6 && null != c8 && function(a) {
                    let {
                        frameElement: b,
                        sandboxElement: c,
                        fullSurface: d,
                        liftModal: e,
                        inheritHostBackground: f,
                        isCardInlineSurface: g,
                        isFullScreen: h,
                        isWidgetVisible: i,
                        prefersBorder: j,
                        surfaceBackgroundColor: k,
                        title: l,
                        globalSurface: m
                    } = a, n = !h && !d && !g;
                    b.className = (0, bz.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", h && "overscroll-y-contain", e && "z-50", !h && !d && !g && j && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), c.className = (0, bz.b)("h-full min-h-0 min-w-0 w-full overflow-hidden open:rounded-none!", !i && "pointer-events-none opacity-0", n && "rounded-lg", g && j && "borderedCardSandbox-xKKhHG", h && "min-h-0 flex-1"), c.style.backgroundColor = !e && (f || m) ? k ?? "transparent" : "transparent", b.style.backgroundColor = m ? c.style.backgroundColor : "", c.title = l
                }({
                    frameElement: c6,
                    sandboxElement: c8,
                    fullSurface: p,
                    liftModal: eC,
                    inheritHostBackground: ap,
                    isCardInlineSurface: ez,
                    isFullScreen: cU,
                    isWidgetVisible: cS && null != cT,
                    prefersBorder: cq,
                    surfaceBackgroundColor: cR,
                    title: bB,
                    globalSurface: bE
                })
            }, [p, eC, c6, ap, ez, cU, cS, cT, cq, c8, cR, bB, bE]), (0, j.useLayoutEffect)(() => {
                if (null == c6) return;
                if (null != ew) {
                    let a = ew.dataset.overlayOwner;
                    null == a ? c6.removeAttribute("data-overlay-owner") : c6.setAttribute("data-overlay-owner", a)
                }
                let a = cU ? ev : ew,
                    b = eG ? (0, ad.a)() : eH;
                if (eC && (b = document.body), null == b || !b.isConnected) {
                    let a = "none" === c6.style.display;
                    c6.style.display = "none", a || q.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: eL().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let c = () => {
                    if (c6.parentElement !== b && (c6.isConnected && "function" == typeof b.moveBefore ? b.moveBefore(c6, null) : b.appendChild(c6), q.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: eL().safe.mcpAppId,
                                showInModal: eC
                            }
                        })), da || db(!0), null == a) {
                        let a = "none" === c6.style.display;
                        c6.style.display = "none", a || q.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: eL().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete c6.dataset.mcpAppParked,
                        function(a) {
                            let b, c = !a.isInGlobalHost || a.modalOpen || a.isFullScreen ? null : a.anchorElement.closest("[data-app-shell-right-panel-full-width]");
                            if (null == c) return bC(a);
                            let d = () => {
                                    "true" === c.getAttribute("data-app-shell-right-panel-full-width") ? (b?.(), b = void 0, a.frameElement.style.display = "none") : null == b && (b = bC(a))
                                },
                                e = new MutationObserver(d);
                            return e.observe(c, {
                                attributes: !0,
                                attributeFilter: ["data-app-shell-right-panel-full-width"]
                            }), d(), () => {
                                e.disconnect(), b?.()
                            }
                        }({
                            sessionId: aI,
                            sharesScrollHost: eE?.contains(b) === !0,
                            frameElement: c6,
                            frameContainer: b,
                            fullSurface: p,
                            modalOpen: eC,
                            sandboxElement: c8,
                            isFullScreen: cU,
                            isInGlobalHost: eG,
                            anchorElement: a,
                            rightPanelLayoutTick: bk
                        })
                };
                return p || cU || eC || eG || !W || null == a || a.hidden || "true" !== c6.dataset.mcpAppParked ? c() : (0, bm.a)(a, c)
            }, [aI, c6, p, eC, W, eE, ew, cU, eG, da, bk, c8, ev, eH]);
            let fc = a4?.autoFocus === !0;
            (0, j.useEffect)(() => {
                fc && cS && null != ew && c8?.focus()
            }, [fc, cS, ew, c8]), (0, j.useLayoutEffect)(() => (cX.current = !1, () => {
                cX.current = !0
            }), [aI, bW]);
            let fd = (0, j.useEffectEvent)(async () => {
                    try {
                        if (a4?.assertActive?.(), !d_) return;
                        let a = bV.openInAppUrl ?? L.L().nullable().parse(await dg?.getCurrentPath?.(void 0));
                        if (a4?.assertActive?.(), null == a) return;
                        let b = a4?.openInApp?.validateUrl(null == bV.openInAppUrl ? a.replace(/^\/+/, "") : a);
                        null != b && (0, aj.f)({
                            href: b,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                fe = (0, j.useEffectEvent)(a => {
                    let b = bW.get(ab.l.tabs$).some(a => a.tabId === (0, ba.b)(aI));
                    (0, ba.c)(bW, {
                        source: {
                            hostId: U,
                            server: bp,
                            connectorId: cv ?? void 0
                        },
                        revealAndFocus: !b,
                        icon: by,
                        toolIcon: bx,
                        mcpAppId: aI,
                        onExitFullScreen: a,
                        onPanelElementChange: dd,
                        title: bV.displayModeTitle ?? bA,
                        openInAppName: a4?.openInApp?.appName,
                        onOpenInApp: d_ ? () => {
                            fd()
                        } : void 0
                    })
                }),
                ff = (0, j.useEffectEvent)(() => {
                    let a = bW.get(ao.s, aI);
                    !cX.current && a?.isOpen && "fullscreen" === a.displayMode && (0, ao.c)(bW, aI)
                }),
                fg = (0, j.useEffectEvent)(a => {
                    let b = dO()?.instrumentation;
                    if (null != b) b.sendInstrument(a, cD);
                    else {
                        let b = L.F({
                            type: L.z("interaction"),
                            label: L.L()
                        }).safeParse(a);
                        b.success && (0, P.a)(bW, u.l, {
                            ...cD,
                            host: "codex",
                            actionType: (0, bd.b)(b.data.label)
                        })
                    }
                });
            (0, j.useLayoutEffect)(() => {
                cU ? fe(ff) : (0, ba.a)(bW, aI)
            }, [cU, aI, bW, by?.alt, by?.knownAppId, by?.logoDarkUrl, by?.logoUrl, bx?.logoUrl, bx?.logoDarkUrl, bA, bV.displayModeTitle, d_, a4?.openInApp?.appName]), (0, j.useLayoutEffect)(() => {
                if (null != dm) return dn.watch(a => {
                    let {
                        get: b
                    } = a, c = b(bb.e, dm);
                    null != c && (0, bb.b)(c).updateTab(dn, dm, {
                        documentLabel$: dp
                    })
                })
            }, [dp, dm, dn]);
            let fh = (0, j.useEffectEvent)(() => {
                    let a = cU ? ev : ew;
                    if (null == a || !a.checkVisibility({
                            visibilityProperty: !0
                        })) return {
                        distance: 1 / 0,
                        top: -1 / 0
                    };
                    let b = a.getBoundingClientRect(),
                        c = a.closest(".thread-scroll-container")?.getBoundingClientRect();
                    return {
                        distance: Math.max((c?.top ?? 0) - b.bottom, b.top - (c?.bottom ?? a.ownerDocument.documentElement.clientHeight), 0),
                        top: b.top
                    }
                }),
                fi = null != c6 && da && null != eI && null != et && null != es,
                fj = (0, j.useEffectEvent)(a => {
                    let b;
                    if (!fi) return;
                    let c = a7.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: aI,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    c_.current = c, c.mark("surface_mcp_app"), (0, ao.E)(cd(), aI, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), dr(b9), c1.current = null, c2.current = null;
                    let d = eu();
                    if (null == d) return void eN("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: f,
                        iframeAllow: g
                    } = (0, bl.b)(ct, cF, cH), h = (0, aS.a)(eA, et, es);
                    h instanceof HTMLIFrameElement ? (h.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), h.allow = g, h.allowFullscreen = !0) : (h.addEventListener("enter-html-full-screen", () => {
                        h.isConnected && !h.matches(":fullscreen") && (h.popover = "manual", h.showPopover())
                    }), h.addEventListener("leave-html-full-screen", () => {
                        h.popover = null
                    })), h.classList.add("pointer-events-none", "opacity-0"), c6.appendChild(h), c9(h), c.mark("rendered");
                    let i = new AbortController,
                        j = !1,
                        l = new aK,
                        n = null == k ? null : new av(k, {
                            getPanelContext: ey,
                            renderControl(a, b) {
                                i.signal.aborted || c5(c => null != b ? {
                                    owner: a,
                                    control: b
                                } : c?.owner === a ? null : c)
                            }
                        }),
                        o = null,
                        p = crypto.randomUUID(),
                        r = e$(),
                        u = ek(),
                        {
                            sourceMcpAppId: v,
                            toolInput: C,
                            toolOutput: D,
                            toolResponseMetadata: F,
                            toolResult: H,
                            toolStatus: I,
                            toolResultNotification: J,
                            toolCallCancellationReason: K
                        } = ep(),
                        M = new b_.b(cd(), v, a => {
                            eS({
                                href: a
                            }, i.signal).catch(a => {
                                i.signal.aborted || (0, aA.d)(a, eL())
                            })
                        });
                    c1.current = null == H || null == D ? null : {
                        widgetId: p,
                        widgetState: r,
                        sourceMcpAppId: v,
                        toolInput: C,
                        toolOutput: D,
                        toolResponseMetadata: F,
                        toolStatus: I,
                        toolResult: J,
                        toolCallCancellationReason: K
                    };
                    let N = dL ? {
                            requestConnectPlugin: async a => dO()?.pluginSuggestions?.requestConnectPlugin(a) ?? {
                                pluginId: bS.a.parse(a).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async a => {
                                let b = dO()?.pluginSuggestions;
                                if (null == b) throw Error("Plugin suggestions are unavailable");
                                await b.requestOpenPlugin(a)
                            },
                            requestDeclinePluginSuggestions: async () => dO()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: a => dO()?.pluginSuggestions?.sendInstrument(a)
                        } : void 0,
                        O = null == H ? null : N ?? eq(H),
                        Q = null == O ? null : {
                            ...O,
                            requestDeclinePluginSuggestions: N?.requestDeclinePluginSuggestions ?? (null == O.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let a = ep().toolResult,
                                    b = null == a ? void 0 : eq(a)?.requestDeclinePluginSuggestions;
                                return null == b || !await aG.a?.mcpAppSandbox?.consumeUserGesture((0, aU.a)(et, h)).catch(() => !1) || i.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : b()
                            })
                        },
                        R = () => {
                            let a = dO()?.files;
                            if (null == a) throw Error("Widget file access is unavailable");
                            return a
                        },
                        S = {
                            ...Q,
                            downloadBlob: d4 ? a => dO()?.downloadBlob?.(a, i.signal) : void 0,
                            triggerHaptic: d5 ? a => dO()?.triggerHaptic?.(a, i.signal) : void 0,
                            requestCheckout: dW ? async a => {
                                i.signal.throwIfAborted();
                                let b = dO();
                                if (b?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return b.requestCheckout(a, i.signal)
                            } : void 0,
                            requestModal: async a => {
                                i.signal.aborted || (dR ? await dU()?.requestModal(a) : null != ec() && (dO()?.requestModal == null || L.F({
                                    params: L.F({
                                        view: L.z("accountLinking")
                                    })
                                }).safeParse(a).success) ? await eU(a, i.signal, bh) : dO()?.requestModal != null ? await dO()?.requestModal?.(a, i.signal) : await fb(a, i.signal))
                            },
                            uploadFile: d6 ? (a, b) => R().uploadFile(a, b, i.signal) : void 0,
                            getFileDownloadUrl: d6 ? a => R().getFileDownloadUrl(a, i.signal) : void 0,
                            getFileMetadata: d6 ? a => R().getFileMetadata(a, i.signal) : void 0,
                            selectFiles: d6 ? () => R().selectFiles(i.signal) : void 0,
                            share: d7 ? async a => {
                                i.signal.throwIfAborted(), await dO()?.share?.(a, i.signal)
                            } : void 0,
                            requestLinkToConnector: dR || ea ? async a => i.signal.aborted ? {
                                didConnect: !1
                            } : await (dU()?.requestLinkToConnector ?? dO()?.requestLinkToConnector)?.(a, i.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: dT ? a => {
                                i.signal.aborted || (dU()?.showToast ?? dO()?.showToast)?.(a)
                            } : void 0,
                            notifyEscapeKey: dN || dR && dP || d0 ? () => {
                                i.signal.aborted || dO()?.allowsInteractiveDismissal === !1 || (dN || dR || dO()?.displayMode != null ? eR() : eY({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: (a, b) => {
                                let c = AbortSignal.any([b, i.signal]),
                                    d = o?.notifyMcpAppsMcpNotification;
                                if (dy && null != d) {
                                    let b = M.handleRequest(a, i.signal, a => (0, aQ.h)(d(a)));
                                    if (null != b) return b
                                }
                                let e = l.handleRequest(a, {
                                    sandboxElement: h,
                                    sandboxId: et,
                                    initId: U,
                                    signal: i.signal,
                                    notify: o?.notifyMcpAppsMcpNotification
                                });
                                if (null != e) return e;
                                let f = x.h.safeParse(a);
                                if (f.success && null != m) {
                                    for (let {
                                            component: a,
                                            level: b,
                                            message: c,
                                            metadata: d
                                        }
                                        of f.data.params.entries) q.a[b](c, {
                                        safe: {
                                            component: a,
                                            metadata: d,
                                            pluginId: m
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let g = x.g.safeParse(a);
                                return g.success && null != n ? n.handleRequest(g.data.params) : fa(a, c).catch(b => {
                                    if (!c.aborted) {
                                        let c = eL();
                                        q.a.warning("App request failed", {
                                            safe: {
                                                ...(0, aA.b)(b),
                                                connectorId: c.safe.connectorId,
                                                mcpAppId: c.safe.mcpAppId,
                                                sandboxId: c.safe.sandboxId,
                                                initId: c.safe.initId
                                            },
                                            sensitive: {
                                                method: t.W.safeParse(a).data?.method,
                                                hostId: c.sensitive.hostId,
                                                server: c.sensitive.server,
                                                error: b
                                            }
                                        })
                                    }
                                    throw b
                                })
                            },
                            callTool: (a, b) => e9(a, b, i.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: a => {
                                if (!i.signal.aborted) {
                                    if (aA.h.safeParse(a).success) return void(0, aA.d)(a, eL());
                                    eN("environment", a)
                                }
                            },
                            notifyIntrinsicHeight: eO,
                            notifyIntrinsicWidth: eP,
                            notifyTabMetadata: a => {
                                let b = ci.safeParse(a);
                                b.success && !i.signal.aborted && dp.set(b.data)
                            },
                            notifyNavigation: a => {
                                i.signal.aborted || eQ(a)
                            },
                            notifySecurityPolicyViolation: a => {
                                i.signal.aborted || dO()?.instrumentation?.notifySecurityPolicyViolation(a)
                            },
                            openExternal: a => eS(a, i.signal),
                            openPlaidLink: ef ? a => eT(a, i.signal) : void 0,
                            initializeMcpApp: a => {
                                if (i.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return eX(s.a.parse(a).availableDisplayModes)
                                } catch (a) {
                                    throw eN("configuration", a), a
                                }
                            },
                            requestClose: dP ? eR : void 0,
                            requestDisplayMode: eY,
                            openConversationOverlay: dX ? async a => {
                                i.signal.throwIfAborted(), await dO()?.openConversationOverlay?.(a, i.signal)
                            } : void 0,
                            notifyAutofillCandidates: dZ ? a => {
                                i.signal.throwIfAborted(), b?.(a)
                            } : void 0,
                            openPromptInput: dY ? a => {
                                i.signal.throwIfAborted();
                                let b = dO()?.openPromptInput;
                                if (null == b) throw Error("Widget prompt input is unavailable");
                                return b(a, h, i.signal)
                            } : void 0,
                            setOpenInAppUrl: d$ ? a => {
                                i.signal.throwIfAborted();
                                let {
                                    href: b
                                } = L.F({
                                    href: L.L().nullable()
                                }).parse(a);
                                if (!b?.trim()) return void(0, ao.E)(cd(), aI, {
                                    openInAppUrl: null == b ? null : void 0
                                });
                                let c = dO()?.openInApp?.validateUrl(b);
                                null != c && (0, ao.E)(cd(), aI, {
                                    openInAppUrl: c
                                })
                            } : void 0,
                            requestFocusedObject: d1 ? async a => {
                                i.signal.throwIfAborted(), await dO()?.presentation?.requestFocusedObject?.(a, i.signal)
                            } : void 0,
                            requestCloseFocusedObject: d2 ? async () => {
                                i.signal.throwIfAborted(), await dO()?.presentation?.requestCloseFocusedObject?.(i.signal)
                            } : void 0,
                            requestTargetedReply: dS ? async a => {
                                if (i.signal.aborted) return;
                                let b = dU()?.requestTargetedReply;
                                if (null != b) return void await b(a);
                                let c = dO()?.setTargetedReply;
                                if (null != c) return void c(a, i.signal);
                                let d = dO()?.requestTargetedReply;
                                null != d && await (0, aL.b)(a, d, dx, i.signal)
                            } : void 0,
                            requestReconnectConnector: d9 ? async () => {
                                let a = dO()?.requestReconnectConnector;
                                if (null == a) throw Error("Connector reconnection is unavailable");
                                return a(i.signal)
                            } : void 0,
                            requestConnectSheet: d8 ? a => {
                                let b = dO()?.requestConnectSheet;
                                if (null != b) return b(a, i.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: a => e5(a, i.signal),
                            sendInstrument: a => {
                                if (!i.signal.aborted) {
                                    if (dM || null != Q) {
                                        let b = (0, w.h)(a);
                                        if (null != b) return void(0, P.a)(cd(), b.messageType, b.payload)
                                    }
                                    aA.f.safeParse(a).success && ((0, aA.d)(a, eL()), eM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), Q?.sendInstrument(a);
                                    let b = ec() ?? ee();
                                    b?.sendInstrument(a), (null == b && null == Q || L.F({
                                        type: L.z("interaction")
                                    }).safeParse(a).success) && fg(a)
                                }
                            },
                            updateWidgetState: (a, b, c) => {
                                if (!i.signal.aborted) return e0(b, L.F({
                                    waitForPersistence: L.z(!0).optional()
                                }).optional().parse(c)?.waitForPersistence)
                            }
                        },
                        T = (0, aU.b)({
                            hostApiHandlers: S,
                            assertActive: () => {
                                i.signal.throwIfAborted(), cj(), dO()?.assertActive?.()
                            },
                            onSkybridgeCacheState: a => {
                                c.mark(`skybridge_cache_${a}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": a
                                    }
                                })
                            },
                            origin: d.sandboxOrigin,
                            sandboxId: et,
                            signal: i.signal,
                            sourceUrl: d.sourceUrl,
                            webview: h
                        }),
                        U = (0, G.h)(h.getAttribute("src") ?? void 0),
                        V = eL();
                    q.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: cL,
                            connectorId: V.safe.connectorId,
                            mcpAppId: V.safe.mcpAppId,
                            sandboxId: V.safe.sandboxId,
                            initId: U
                        },
                        sensitive: {
                            hostId: V.sensitive.hostId,
                            server: V.sensitive.server
                        }
                    });
                    let W = setTimeout(() => {
                        eN("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), Z(), X()
                    }, 5e4);

                    function X() {
                        clearTimeout(W), a()
                    }

                    function Z() {
                        i.signal.aborted || (clearTimeout(W), i.abort(), c5(null), dp.set(null), du(), c_.current === c && (c_.current = null), c.isRecording() && c.abort("navigation_away"), l[Symbol.dispose](), M[Symbol.dispose](), n?.[Symbol.dispose](), c1.current = null, c2.current = null, cY.current = null, cZ.current = null, c$.current = null, (0, ao.E)(cd(), aI, {
                            isWidgetReady: !1
                        }), df(null), dr(b9), null != o && (0, aQ.h)(o.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), h.remove(), h instanceof HTMLIFrameElement || h.destroy?.(), q.a.info("Removed app sandbox", {
                            safe: {
                                initId: U
                            }
                        }), c9(a => a === h ? null : a))
                    }
                    return T.then(async a => {
                        if (i.signal.aborted) return;
                        if (aG.a?.mcpAppSandbox != null) {
                            if (null == U) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, bR.b)({
                                scope: b0,
                                request: {
                                    identity: Y.serverIdentity,
                                    pluginId: cr() ?? void 0,
                                    permissions: ct,
                                    initId: U,
                                    sandboxId: et
                                },
                                origin: d.sandboxOrigin,
                                appName: cs(),
                                signal: i.signal,
                                onReload: cI
                            })
                        }
                        i.signal.throwIfAborted(), c.mark("sandbox_ready"), q.a.info("Connected app sandbox", {
                            safe: {
                                initId: U
                            }
                        }), o = a;
                        let g = a.notifyMcpAppsMcpNotification,
                            h = aG.a?.mcpAppSandbox != null && null != g;
                        null != g && n?.setNotificationSender(a => (0, aQ.h)(g(a))), null != a.applyAutofillCandidate && (b = await dO()?.autofill?.(a.applyAutofillCandidate, i.signal), i.signal.throwIfAborted()), df({
                            api: a,
                            widgetId: p
                        });
                        let {
                            displayMode: l,
                            availableDisplayModes: s
                        } = eW(), t = bu(), {
                            containerDimensions: v
                        } = eJ(c6), w = bv(dO()?.device), G = cd().get(aP.a), H = G["--color-background-primary"], I = eV(l), J = {
                            "openai/viewer-header": dy && null != g,
                            "openai/viewer-document-controls": dy && null != g,
                            ...bs({
                                availableDisplayModes: s,
                                containerDimensions: v,
                                displayMode: l,
                                locale: d.locale,
                                modelContextHostState: cN(),
                                deepLink: eZ(),
                                safeAreaInsets: I.insets,
                                styleVariables: G,
                                theme: t,
                                userAgent: w,
                                toolInfo: dO()?.toolInfo
                            }),
                            ...null == k || null == g ? {} : {
                                [x.a]: !0
                            },
                            ...null == m ? {} : {
                                [x.d]: !0
                            }
                        }, {
                            csp: K
                        } = d, L = {
                            [z.a]: {},
                            ...h ? {
                                "openai/find": {}
                            } : {},
                            ...dH ? {
                                [A.a]: {
                                    draft: cx() ? {} : void 0
                                }
                            } : {},
                            "openai/skillsDeepLinks": {},
                            ...d.experimentalCapabilities,
                            ...dE ? {
                                [ah.a]: {}
                            } : {},
                            ...dI ? {
                                "openai/files": {}
                            } : {}
                        };
                        a.supportsWidgetTextureReceiver ? L[B.b] = {} : delete L[B.b];
                        let M = cw ? {} : void 0;
                        dH && (M = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == n && eK(), q.a.info("Starting app widget", {
                            safe: {
                                displayMode: l,
                                initId: U
                            }
                        }), j = !0;
                        let N = a.runWidgetCode({
                                enableAutofill: null != b,
                                expectReadySignal: null != dK,
                                expectedReadySignal: dK,
                                csp: K,
                                displayMode: dV(l),
                                features: f,
                                subjectId: dO()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: cy,
                                html: d.html,
                                isFirstParty: dM || null != Q || d9,
                                isSidebarOpen: dO()?.presentation?.isSidebarOpen === !0,
                                isTombstone: dO()?.isTombstone === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                measureWidth: !0 === cl,
                                mcpApps: {
                                    requiresInitialization: e.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...h ? [aH] : [], ...dy && null != g ? [b_.a] : [], ...dH || !cw ? ["ui/message"] : [], ...dA?.split(";") ?? [], ...dE ? [ah.a] : [], ...dI ? [y.a] : [], ...null == n || null == g ? [] : [x.c], ...null == m ? [] : [x.e], ...null == g ? [] : [...cb, ...dj && !dJ ? cc : []]],
                                    hostCapabilities: {
                                        downloadFile: {},
                                        experimental: L,
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: M,
                                        updateModelContext: cw ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(E.kj.map(a => [a, f.includes(E.jj[a].feature) ? {} : void 0])),
                                            csp: {
                                                baseUriDomains: K.baseUriDomains,
                                                connectDomains: K.connectDomains,
                                                frameDomains: K.frameDomains,
                                                resourceDomains: K.resourceDomains
                                            }
                                        }
                                    },
                                    hostContext: J,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: cd().get(ax.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: bE
                                },
                                safeArea: I,
                                theme: t,
                                toolInput: C,
                                toolOutput: D,
                                toolResponseMetadata: F,
                                userAgent: w,
                                viewParams: u,
                                widgetId: p,
                                widgetState: r
                            }),
                            O = !1;
                        for await (let b of N) {
                            let d = cd().get(ao.s, aI)?.sandboxError;
                            if (i.signal.aborted || (0, bT.f)(d)) break;
                            if (aA.e.safeParse(b).success) return;
                            aA.f.safeParse(b).success && ((0, aA.d)(b, eL()), eM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let e = aA.g.safeParse(b);
                            if (e.success) {
                                if ("mcp_initialization_timeout" === e.data.reason) throw new bT.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (O || !aU.d.safeParse(b).success) continue;
                            O = !0, X();
                            let {
                                displayMode: f,
                                availableDisplayModes: g
                            } = eW(), h = {
                                ...J,
                                displayMode: f,
                                availableDisplayModes: [...g]
                            };
                            (0, ao.E)(cd(), aI, {
                                isWidgetReady: !0
                            }), (0, aQ.h)(a.setWidgetView({
                                displayMode: dV(f),
                                isTombstone: dO()?.isTombstone === !0,
                                viewParams: u,
                                widgetId: p
                            })), (0, aQ.h)(a.setTheme({
                                theme: t
                            })), (0, aQ.h)(a.setSafeArea({
                                safeArea: I
                            }));
                            let j = {
                                isSidebarOpen: dO()?.presentation?.isSidebarOpen === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                surfaceBackgroundColor: H
                            };
                            c$.current = j, (0, aQ.h)(a.setAdditionalGlobals({
                                additionalGlobals: j
                            })), (0, aQ.h)(a.notifyMcpAppsHostContext({
                                hostContext: h
                            })), c.mark("fully_loaded"), q.a.info("Started app widget", {
                                safe: {
                                    displayMode: f,
                                    initId: U
                                }
                            }), c.end()
                        }
                        if (!O && !i.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(a => {
                        i.signal.aborted || (j && eM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), eN(null == o ? "handshake" : "widget", a)), Z()
                    }).finally(() => {
                        X()
                    }), Z
                });
            (0, j.useLayoutEffect)(() => {
                if (fi) return cd().get(bw, void 0)(fj, a => eN("handshake", a), fh)
            }, [b0, fi, cw, cy, cH, cu, cG, d4, d5, du, dI, dH, dE, ef, dP, H, null, U, cL, c6, p, C, k, m, dJ, cl, dL, dW, d7, d6, d8, d9, ea, dN, dT, dR, dS, d0, d$, dX, dY, dZ, d1, d2, dM, dy, dA, dK, e.requiresMcpInitialization, bh, da, aI, er, dx, et, eI, es, eA, bp, dj, dB, bE]), (0, j.useLayoutEffect)(() => {
                dk.setConversation(h).catch(a => {
                    q.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: h,
                            mcpAppId: aI
                        },
                        sensitive: {
                            error: a,
                            hostId: U
                        }
                    })
                })
            }, [h, U, dk, aI]), (0, j.useLayoutEffect)(() => {
                dl.setConversation(h, dj && cB).catch(a => {
                    q.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    })
                })
            }, [h, dl, cB, dj]), (0, j.useLayoutEffect)(() => {
                let a = dg?.notifyMcpAppsMcpNotification;
                if (null == a) return;
                let b = dl.connectNotificationSink(a);
                return () => {
                    b(), dl.clear().catch(a => {
                        q.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    })
                }
            }, [dl, dg]), (0, j.useLayoutEffect)(() => {
                let a = dg?.notifyMcpAppsMcpNotification;
                if (null == a) return;
                let b = dk.connectNotificationSink(b => (0, aQ.h)(a(b)));
                return () => {
                    b(), dk.clear().catch(a => {
                        q.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    })
                }
            }, [dk, dg]), (0, j.useEffect)(() => {
                if (!cS || null == dg || null == dh) return;
                let a = {
                        widgetId: dh,
                        sourceMcpAppId: aJ,
                        toolInput: eg,
                        toolOutput: ei,
                        toolResponseMetadata: eo,
                        toolStatus: en,
                        toolCallCancellationReason: bO,
                        toolResult: em
                    },
                    b = {
                        ...a,
                        widgetState: c0
                    };
                D()(c1.current, b) || (c1.current = b, (0, aQ.h)(dg.setWidgetData({
                    toolInput: eg,
                    toolOutput: ei,
                    toolResponseMetadata: eo,
                    widgetId: dh,
                    widgetState: c0
                })));
                let c = c2.current?.widgetId === dh ? c2.current : null;
                if (D()(c, a)) return;
                c2.current = a;
                let d = c?.sourceMcpAppId !== aJ;
                null != eg && (d || !D()(c?.toolInput, eg)) && (0, aQ.h)(dg.notifyMcpAppsToolInput({
                    arguments: eg
                })), "cancelled" === en ? (d || c?.toolStatus !== "cancelled" || c?.toolCallCancellationReason !== bO) && (0, aQ.h)(dg.notifyMcpAppsToolCancelled({
                    reason: bO
                })) : null == em || !d && D()(c?.toolResult, a.toolResult) && c?.toolStatus === en && D()(c?.toolInput, eg) && D()(c?.toolResponseMetadata, eo) || (0, aQ.h)(dg.notifyMcpAppsToolResult({
                    ...em,
                    isError: "error" === en || em.isError,
                    _meta: "error" === en ? {
                        ...em._meta,
                        status: "error"
                    } : em._meta
                }))
            }, [cS, em, dg, aJ, eg, ei, eo, en, bO, dh, c0]), (0, j.useEffect)(() => {
                cS && null != dg && (0, aQ.h)(dg.notifyMcpAppsHostContext({
                    hostContext: {
                        [z.a]: cM
                    }
                }))
            }, [cS, cM, dg]), (0, j.useEffect)(() => {
                if (cS && null != dg && null != c6) return k?.observeHostContext?.(bW, c6, a => {
                    (0, aQ.h)(dg.notifyMcpAppsHostContext({
                        hostContext: a
                    }))
                })
            }, [k, c6, cS, dg, bW]), (0, j.useEffect)(() => {
                if (null == c6 || !ex || null == dg || null == dh || cU && null == ev) return;
                let a = eV(cV);
                (0, aQ.h)(dg.setSafeArea({
                    safeArea: a
                }));
                let b = {
                    displayMode: dV(cV),
                    isTombstone: dO()?.isTombstone === !0,
                    viewParams: ej,
                    widgetId: dh
                };
                return D()(cY.current, b) || (cY.current = b, (0, aQ.h)(dg.setWidgetView(b))),
                    function(a) {
                        let {
                            frameElement: b,
                            inlineAnchor: c,
                            fitWidth: d,
                            onLayout: e
                        } = a, f = null, g = () => {
                            null == f && (f = window.requestAnimationFrame(() => {
                                f = null, e()
                            }))
                        };
                        if (g(), "u" < typeof ResizeObserver) return () => {
                            null != f && window.cancelAnimationFrame(f)
                        };
                        let h = new ResizeObserver(g);
                        return h.observe(b), d && c?.parentElement != null && h.observe(c.parentElement), () => {
                            h.disconnect(), null != f && window.cancelAnimationFrame(f)
                        }
                    }({
                        frameElement: c6,
                        inlineAnchor: ew,
                        fitWidth: cl,
                        onLayout: () => {
                            if ("true" === c6.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: b
                            } = eJ(c6), c = {
                                isSidebarOpen: dO()?.presentation?.isSidebarOpen === !0,
                                maxHeight: b.maxHeight,
                                maxWidth: b.maxWidth,
                                surfaceBackgroundColor: eC ? "transparent" : cR
                            };
                            D()(c$.current, c) || (c$.current = c, (0, aQ.h)(dg.setAdditionalGlobals({
                                additionalGlobals: c
                            })));
                            let d = bs({
                                availableDisplayModes: bV.availableDisplayModes ?? H,
                                containerDimensions: b,
                                displayMode: cV,
                                locale: b3.locale,
                                deepLink: bj,
                                safeAreaInsets: a.insets,
                                styleVariables: cQ,
                                theme: bu(),
                                userAgent: bv(dO()?.device),
                                toolInfo: dO()?.toolInfo
                            });
                            D()(cZ.current, d) || (cZ.current?.theme !== d.theme && (0, aQ.h)(dg.setTheme({
                                theme: d.theme
                            })), cZ.current = d, (0, aQ.h)(dg.notifyMcpAppsHostContext({
                                hostContext: d
                            })))
                        }
                    })
            }, [c6, cl, cW, p, C, ew, b3.locale, cQ, H, bV.availableDisplayModes, ex, cU, eb, d3, eC, a4?.displayMode, a4?.showModalCloseButton, dt, bj, cP, dg, ev, cR, bE, ej, dh, cV]);
            let fk = dt && !cU,
                fl = dt && cU && cO?.tabId === (0, ba.b)(aI);
            return (0, g.jsxs)(g.Fragment, {
                children: [c4 && c6 && ex && cS ? (0, I.createPortal)((0, g.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                    children: c4.control
                }), c6) : null, p && ex && cS && null != c8 && null != et ? (0, g.jsx)(bo, {
                    sandboxElement: c8,
                    sandboxId: et
                }) : null, cS && null != c8 && null != et ? (0, g.jsx)(bi, {
                    panelTabId: dm,
                    sandboxElement: c8,
                    sandboxId: et,
                    title: bB
                }) : null, null != dv && ex ? (0, g.jsx)(aN.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...dv,
                        onCancel: du,
                        onConfirm: dw
                    }
                }) : null, fl ? (0, g.jsx)(aa.a.RightPanelTabListBefore, {
                    children: (0, g.jsx)(bP, {
                        canGoBack: dq.canGoBack,
                        canGoForward: dq.canGoForward,
                        className: "h-full px-1",
                        onBack: () => e1(-1),
                        onForward: () => e1(1)
                    })
                }) : null, fk && null != c6 && !cU ? (0, I.createPortal)((0, g.jsx)(bP, {
                    canGoBack: dq.canGoBack,
                    canGoForward: dq.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => e1(-1),
                    onForward: () => e1(1)
                }), c6) : null]
            })
        }
        var ck = c("Za0m");

        function cl(a) {
            let b, c, d, e = (0, h.c)(9),
                {
                    isAccessRevoked: f,
                    allowGlobalHost: k,
                    sessionId: l
                } = a,
                m = void 0 !== f && f,
                n = void 0 === k || k,
                p = (0, i.y)(o.a),
                r = (0, i.x)(ao.s, l);
            return e[0] !== p || e[1] !== l ? (b = () => {
                let a, b, c, d, e, f, g, h, i, j, k;
                return c = !1, d = !1, e = null, f = () => {
                    clearTimeout(b), b = void 0
                }, g = a => {
                    if (d = a, f(), d) {
                        e = null, (0, ao.E)(p, l, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == e && (e = performance.now()), b = setTimeout(() => {
                        let a = i.takeRecords();
                        a.length > 0 ? h(a) : (q.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: l
                            }
                        }), (0, ao.E)(p, l, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - e)))
                }, i = new IntersectionObserver(h = b => {
                    for (let c of b) c.target === a && g(c.isIntersecting)
                }), j = (b, j) => {
                    (a !== b || c !== j) && (c = j, h(i.takeRecords()), i.disconnect(), f(), void 0 === (a = b) ? (d = !1, e = null, (0, ao.E)(p, l, {
                        isSuspended: !1
                    })) : null == a ? queueMicrotask(() => {
                        a === b && g(d && !(0, bn.h)(p))
                    }) : i.observe(a))
                }, k = p.watch(a => {
                    let {
                        get: b
                    } = a;
                    b(bn.c);
                    let c = b(ao.s, l),
                        d = null == c ? null : b(ao.h, c.sourceMcpAppId),
                        e = d?.hostedInThreadScrollLayout === !0 && !d.content.fullSurface && c?.displayMode === "inline" && null == b(ab.l.tabById$, (0, ba.b)(l)),
                        f = (0, bn.h)(p);
                    if (!e || !f) return void j(e ? null : void 0, f);
                    let g = d.inlineFrameAnchor,
                        h = () => j(g.getSnapshot(), f),
                        i = g.subscribe(h);
                    return h(), i
                }), () => {
                    a = void 0, k(), i.disconnect(), f()
                }
            }, c = [p, l], e[0] = p, e[1] = l, e[2] = b, e[3] = c) : (b = e[2], c = e[3]), (0, j.useEffect)(b, c), e[4] !== n || e[5] !== r || e[6] !== m || e[7] !== l ? (d = null == r ? null : (0, g.jsx)(cn, {
                sessionId: l,
                frameState: r,
                sourceMcpAppId: r.sourceMcpAppId,
                isAccessRevoked: m,
                allowGlobalHost: n
            }), e[4] = n, e[5] = r, e[6] = m, e[7] = l, e[8] = d) : d = e[8], d
        }

        function cm(a) {
            let b, c = (0, h.c)(2);
            return c[0] !== a ? (b = (0, g.jsx)(cl, {
                ...a,
                allowGlobalHost: !1
            }), c[0] = a, c[1] = b) : b = c[1], b
        }

        function cn(a) {
            let b, c, d, e, f, n, s, t, u = (0, h.c)(26),
                {
                    sessionId: v,
                    sourceMcpAppId: w,
                    frameState: x,
                    isAccessRevoked: y,
                    allowGlobalHost: z
                } = a,
                A = (0, i.y)(o.a);
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, m.b)(), u[0] = b) : b = u[0];
            let B = (0, p.f)(b),
                C = (0, i.x)(r.b, w),
                D = y || C,
                E = (0, i.x)(ao.h, w),
                F = E?.content ?? null,
                G = F?.mcpAppHostAdapter?.retain;
            u[1] !== A || u[2] !== v ? (c = () => (0, ck.b)(A, v), d = [A, v], u[1] = A, u[2] = v, u[3] = c, u[4] = d) : (c = u[3], d = u[4]), (0, j.useLayoutEffect)(c, d), u[5] !== G || u[6] !== A || u[7] !== w ? (e = () => G?.(A, w), f = [G, A, w], u[5] = G, u[6] = A, u[7] = w, u[8] = e, u[9] = f) : (e = u[8], f = u[9]), (0, j.useLayoutEffect)(e, f);
            let H = (0, i.x)(k.c, F?.access ?? null);
            if (u[10] !== H || u[11] !== E || u[12] !== A || u[13] !== D || u[14] !== w ? (n = () => {
                    null != E && (D || "changed" === H) && (q.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: D,
                            accessStatus: H
                        },
                        sensitive: {
                            mcpAppId: E.sessionId,
                            sourceMcpAppId: w
                        }
                    }), (0, ao.A)(A, w))
                }, s = [w, E, A, D, H], u[10] = H, u[11] = E, u[12] = A, u[13] = D, u[14] = w, u[15] = n, u[16] = s) : (n = u[15], s = u[16]), (0, j.useLayoutEffect)(n, s), !B || D || x.isSuspended || (0, bT.f)(x.sandboxError) || null == E || null == F || "current" !== H) return null;
            let I = (0, l.c)(F);
            if (I && (null == F.toolResult || null != F.toolCallStatus)) return null;
            let J = I ? co : cj;
            return u[17] !== J || u[18] !== z || u[19] !== F || u[20] !== x || u[21] !== E.hostedInThreadScrollLayout || u[22] !== E.inlineFrameAnchor || u[23] !== v || u[24] !== w ? (t = (0, g.jsx)(J, {
                ...F,
                ModalFrame: cm,
                hostedInThreadScrollLayout: E.hostedInThreadScrollLayout,
                inlineFrameAnchor: E.inlineFrameAnchor,
                allowGlobalHost: z,
                sessionId: v,
                sourceMcpAppId: w,
                frameState: x
            }, x.sandboxGeneration), u[17] = J, u[18] = z, u[19] = F, u[20] = x, u[21] = E.hostedInThreadScrollLayout, u[22] = E.inlineFrameAnchor, u[23] = v, u[24] = w, u[25] = t) : t = u[25], t
        }

        function co(a) {
            let b, c, d = (0, h.c)(5),
                e = (0, i.y)(o.a);
            return d[0] !== e ? (b = (a, b) => (0, n.installPlugin)(e, a, b), d[0] = e, d[1] = b) : b = d[1], d[2] !== a || d[3] !== b ? (c = (0, g.jsx)(cj, {
                ...a,
                inheritHostBackground: !0,
                installPlugin: b
            }), d[2] = a, d[3] = b, d[4] = c) : c = d[4], c
        }
    }),
    QnVT: (function(a, b, c) {
        var d = c("Q840"),
            e = c("i8Zd"),
            f = c("OWtl");
        let g = (0, d.c)(f.a, a => {
                let {
                    get: b
                } = a;
                return {
                    revision: b(e.a),
                    appearance: null
                }
            }, {
                isEqual: (a, b) => a.revision === b.revision
            }),
            h = (0, d.c)(f.a, a => {
                let {
                    get: b
                } = a, {
                    appearance: c,
                    revision: d
                } = b(g), e = c?.fonts;
                return null == e || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [e.code, e.ui].some(a => a?.includes("(")) ? d : c
            }),
            i = (0, d.c)(f.a, a => {
                let {
                    get: b
                } = a;
                return b(h),
                    function() {
                        let a = getComputedStyle(document.documentElement),
                            b = document.createElement("div");
                        b.style.display = "none", b.setAttribute("aria-hidden", "true"), document.body.appendChild(b);
                        let c = b => {
                                let c = a.getPropertyValue(b).trim();
                                return c.length > 0 ? c : void 0
                            },
                            d = c => {
                                let d = j(a, b, c, "color"),
                                    e = j(a, b, "--color-surface-tertiary", "color");
                                if (null != d && null != e) return `color-mix(in srgb, ${d} 12%, ${e})`
                            };
                        try {
                            let e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O;
                            return {
                                "--color-background-primary": (e = "--app-color-background-surface", j(a, b, e, "color") ?? (f = "--color-surface-tertiary", j(a, b, f, "color"))),
                                "--color-background-secondary": (g = "--color-surface-elevated", j(a, b, g, "color")),
                                "--color-background-tertiary": (h = "--color-surface-secondary", j(a, b, h, "color")),
                                "--color-background-inverse": (i = "--color-text", j(a, b, i, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (k = "--codex-theme-accent-background-subtle", j(a, b, k, "color") ?? (l = "--color-background-info-surface", j(a, b, l, "color"))),
                                "--color-background-danger": (m = "--color-background-danger-surface", j(a, b, m, "color")),
                                "--color-background-success": d("--color-codex-git-added"),
                                "--color-background-warning": d("--color-text-warning"),
                                "--color-background-disabled": (n = "--color-background-primary-soft-active", j(a, b, n, "color")),
                                "--color-text-primary": (o = "--color-text", j(a, b, o, "color")),
                                "--color-text-secondary": (p = "--color-text-secondary", j(a, b, p, "color")),
                                "--color-text-tertiary": (q = "--color-codex-description", j(a, b, q, "color")),
                                "--color-text-inverse": (r = "--color-text-inverse", j(a, b, r, "color") ?? (s = "--color-surface-tertiary", j(a, b, s, "color"))),
                                "--color-text-ghost": (t = "--color-codex-description", j(a, b, t, "color")),
                                "--color-text-info": (u = "--color-text-info", j(a, b, u, "color")),
                                "--color-text-danger": (v = "--color-text-danger", j(a, b, v, "color")),
                                "--color-text-success": (w = "--color-codex-git-added", j(a, b, w, "color")),
                                "--color-text-warning": (x = "--color-text-warning", j(a, b, x, "color")),
                                "--color-text-disabled": (y = "--color-codex-description", j(a, b, y, "color")),
                                "--color-border-primary": (z = "--color-border-primary-outline", j(a, b, z, "color")),
                                "--color-border-secondary": (A = "--color-border", j(a, b, A, "color")),
                                "--color-border-tertiary": (B = "--color-border", j(a, b, B, "color")),
                                "--color-border-inverse": (C = "--color-text", j(a, b, C, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (D = "--color-ring", j(a, b, D, "color")),
                                "--color-border-danger": (E = "--color-text-danger", j(a, b, E, "color")),
                                "--color-border-success": (F = "--color-codex-git-added", j(a, b, F, "color")),
                                "--color-border-warning": (G = "--color-text-warning", j(a, b, G, "color")),
                                "--color-border-disabled": (H = "--color-border-primary-outline", j(a, b, H, "color")),
                                "--color-ring-primary": (I = "--color-ring", j(a, b, I, "color")),
                                "--color-ring-secondary": (J = "--color-ring", j(a, b, J, "color")),
                                "--color-ring-inverse": (K = "--color-ring", j(a, b, K, "color")),
                                "--color-ring-info": (L = "--color-ring", j(a, b, L, "color")),
                                "--color-ring-danger": (M = "--color-text-danger", j(a, b, M, "color")),
                                "--color-ring-success": (N = "--color-codex-git-added", j(a, b, N, "color")),
                                "--color-ring-warning": (O = "--color-text-warning", j(a, b, O, "color")),
                                "--font-sans": j(a, b, "--font-sans", "fontFamily"),
                                "--font-mono": j(a, b, "--font-mono", "fontFamily"),
                                "--font-weight-normal": j(a, b, "--font-ui-weight", "fontWeight"),
                                "--font-weight-medium": j(a, b, "--font-weight-medium", "fontWeight"),
                                "--font-weight-semibold": j(a, b, "--font-weight-semibold", "fontWeight"),
                                "--font-weight-bold": j(a, b, "--font-weight-bold", "fontWeight"),
                                "--font-text-xs-size": j(a, b, "--text-xs", "fontSize"),
                                "--font-text-sm-size": j(a, b, "--text-sm", "fontSize"),
                                "--font-text-md-size": j(a, b, "--text-base", "fontSize"),
                                "--font-text-lg-size": j(a, b, "--text-lg", "fontSize"),
                                "--font-heading-xs-size": j(a, b, "--text-heading-sm", "fontSize"),
                                "--font-heading-sm-size": j(a, b, "--text-heading-md", "fontSize"),
                                "--font-heading-md-size": j(a, b, "--text-heading-lg", "fontSize"),
                                "--font-heading-lg-size": j(a, b, "--text-xl", "fontSize"),
                                "--font-heading-xl-size": j(a, b, "--text-2xl", "fontSize"),
                                "--font-heading-2xl-size": j(a, b, "--text-3xl", "fontSize"),
                                "--font-heading-3xl-size": j(a, b, "--text-4xl", "fontSize"),
                                "--font-text-xs-line-height": c("--text-xs--line-height"),
                                "--font-text-sm-line-height": c("--text-sm--line-height"),
                                "--font-text-md-line-height": c("--text-base--line-height"),
                                "--font-text-lg-line-height": c("--text-lg--line-height"),
                                "--font-heading-xs-line-height": "1.33",
                                "--font-heading-sm-line-height": "1.33",
                                "--font-heading-md-line-height": "1.2",
                                "--font-heading-lg-line-height": "1.2",
                                "--font-heading-xl-line-height": "1",
                                "--font-heading-2xl-line-height": "1",
                                "--font-heading-3xl-line-height": "1",
                                "--border-radius-xs": j(a, b, "--radius-xs", "borderRadius"),
                                "--border-radius-sm": j(a, b, "--radius-sm", "borderRadius"),
                                "--border-radius-md": j(a, b, "--radius-md", "borderRadius"),
                                "--border-radius-lg": j(a, b, "--radius-lg", "borderRadius"),
                                "--border-radius-xl": j(a, b, "--radius-xl", "borderRadius"),
                                "--border-radius-full": j(a, b, "--radius-full", "borderRadius"),
                                "--border-width-regular": "1px",
                                "--shadow-hairline": j(a, b, "--shadow-hairline", "boxShadow"),
                                "--shadow-sm": j(a, b, "--shadow-sm", "boxShadow"),
                                "--shadow-md": j(a, b, "--shadow-md", "boxShadow"),
                                "--shadow-lg": j(a, b, "--shadow-lg", "boxShadow")
                            }
                        } finally {
                            b.remove()
                        }
                    }()
            });

        function j(a, b, c, d) {
            let e = a.getPropertyValue(c).trim();
            if (0 === e.length) return;
            b.style[d] = `var(${c})`;
            let f = getComputedStyle(b)[d].trim();
            return 0 === f.length || f === `var(${c})` ? e : f
        }
        c.d(b, {}, {
            a: i
        })
    }),
    aENG: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    f = Math.max(a ?? b ?? ("card" === d ? 200 : 480), c ?? 200);
                return e || null != a ? f : Math.min(f, 720)
            },
            b: function(a) {
                return null == a ? void 0 : {
                    marginBlockStart: -a.blockStart,
                    marginBlockEnd: -a.blockEnd,
                    marginInlineStart: -a.inlineStart,
                    marginInlineEnd: -a.inlineEnd
                }
            }
        })
    }),
    Cv9y: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Wf1j"),
            g = c("DcH0"),
            h = c("X3K1"),
            i = c("zOE4");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l = (0, e.c)(21),
                    {
                        className: m,
                        height: n,
                        inlineFramePadding: o,
                        allowCompact: p,
                        fullSurface: q,
                        showLoadingStatus: r,
                        disableInlineLoadingState: s
                    } = a,
                    t = void 0 !== p && p,
                    u = void 0 === r || r,
                    v = (0, f.a)();
                l[0] !== v ? (b = v.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
                }), l[0] = v, l[1] = b) : b = l[1];
                let w = b,
                    x = u ? "status" : void 0,
                    y = !u;
                l[2] !== w || l[3] !== x || l[4] !== y ? (c = {
                    role: x,
                    "aria-hidden": y,
                    "aria-label": w,
                    "data-mcp-app-loading": "true"
                }, l[2] = w, l[3] = x, l[4] = y, l[5] = c) : c = l[5];
                let z = c;
                if (void 0 !== q && q) {
                    let a, b;
                    return l[6] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(i.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), l[6] = a) : a = l[6], l[7] !== z ? (b = (0, d.jsx)("div", {
                        className: "relative h-full min-h-0",
                        ...z,
                        children: a
                    }), l[7] = z, l[8] = b) : b = l[8], b
                }
                if (void 0 !== s && s) {
                    let a;
                    return l[9] !== n ? (a = (0, d.jsx)("div", {
                        "aria-hidden": "true",
                        style: {
                            height: n
                        }
                    }), l[9] = n, l[10] = a) : a = l[10], a
                }
                l[11] !== t || l[12] !== m || l[13] !== n || l[14] !== o || l[15] !== z ? (j = t && "number" == typeof n && n > 0 && n < 48 ? (0, d.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    ...z,
                    style: {
                        height: null == o ? n : "100%"
                    },
                    children: (0, d.jsx)(h.a, {
                        className: "w-48 max-w-full",
                        size: "md"
                    })
                }) : (0, d.jsx)(g.a, {
                    className: m,
                    ...z,
                    style: {
                        height: null == o ? n : "100%"
                    }
                }), l[11] = t, l[12] = m, l[13] = n, l[14] = o, l[15] = z, l[16] = j) : j = l[16];
                let A = j;
                return l[17] !== n || l[18] !== o || l[19] !== A ? (k = null == o ? A : (0, d.jsx)("div", {
                    style: {
                        height: n,
                        paddingBlockStart: o.blockStart,
                        paddingBlockEnd: o.blockEnd,
                        paddingInlineStart: o.inlineStart,
                        paddingInlineEnd: o.inlineEnd
                    },
                    children: A
                }), l[17] = n, l[18] = o, l[19] = A, l[20] = k) : k = l[20], k
            }
        })
    }),
    HPlV: (function(a, b, c) {
        c.d(b, {
            a: () => v,
            sendMcpAppMessage: () => u
        });
        var d = c("kSHG"),
            e = c("HVBu"),
            f = c.n(e),
            g = c("IhIa"),
            h = c("DD2M"),
            i = c("Cslg"),
            j = c("dsow"),
            k = c("ABep"),
            l = c("oyxz"),
            m = c("PxlB"),
            n = c("RNul"),
            o = c("SGsN");
        let p = (0, k.jsx)(l.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open"
        });

        function q(a, b, c) {
            return a.get(o.f).info((0, k.jsx)(l.a, {
                ...m.a.creating
            }), {
                id: b,
                position: "top-center",
                actionPlacement: "inline",
                duration: 0,
                hasCloseButton: !1,
                leading: (0, k.jsx)(n.a, {
                    className: "icon-xs"
                }),
                primaryAction: null == c ? void 0 : {
                    label: p,
                    onClick: () => {
                        c()
                    }
                }
            })
        }
        var r = c("WBiY"),
            s = c("sS8e"),
            t = c("kfGJ");
        async function u(a) {
            let {
                untrustedAppMessage: b,
                prompt: c,
                send: d,
                signal: e,
                messageAttachment: f,
                modelContextAttachments: g,
                requestConfirmation: h
            } = a;
            e.throwIfAborted();
            let i = {
                turnTrigger: "mcp_app_follow_up",
                addedFiles: [],
                fileAttachments: [],
                ideContext: null,
                imageAttachments: [],
                mcpAppModelContextAttachments: [...g, ...null == f || f.content?.length === 0 ? [] : [f]],
                prompt: c,
                untrustedAppMessage: b
            };
            await d(i, h)
        }

        function v(a) {
            let {
                scope: b,
                recipient: e,
                getNewThreadDestination: m,
                globalEntrypointIdentity: n,
                canCreateCodexThreads: u,
                hasUserGesture: v,
                assertActive: w,
                sourceName: x,
                toolOrigin: y,
                signal: z
            } = a;
            return (a, A) => (0, j.c)({
                context: a,
                signal: z,
                requestConfirmation: A,
                send: async a => {
                    w();
                    let j = (0, r.b)(e);
                    if (void 0 === j && (j = null != m ? m() : null == e ? {
                            kind: "app-server",
                            hostId: t.a
                        } : null), null == j || "app-server" === j.kind && !u) throw (0, s.c)("New conversations are unavailable for this view", d.r.MethodNotFound);
                    z.throwIfAborted();
                    let A = new AbortController,
                        B = b.get(i.f),
                        C = b.get(i.j),
                        D = b.watch(a => {
                            let {
                                get: b
                            } = a;
                            (b(i.f) !== B || b(i.j) !== C) && A.abort()
                        }),
                        E = (0, h.a)(),
                        F = q(b, E);
                    f()(a => a());
                    let G = a => {
                            A.signal.aborted || (0, g.c)(a) || b.get(o.f).danger(a instanceof Error ? a.message : String(a), {
                                id: E,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        H = f()(() => {
                            A.signal.removeEventListener("abort", H), D(), F?.close()
                        }),
                        I = !1;
                    A.signal.addEventListener("abort", H, {
                        once: !0
                    });
                    let J = () => A.abort();
                    z.addEventListener("abort", J, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: d
                        } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(17982)]).then(c.bind(c, "VWsy"));
                        w(), A.signal.throwIfAborted(), z.removeEventListener("abort", J), await d(b, {
                            context: a,
                            destination: j,
                            globalEntrypointIdentity: n,
                            hasUserGesture: v,
                            onDeferredCreation: a => {
                                I = !0, a.then(H, a => {
                                    G(a), H()
                                })
                            },
                            onPendingThreadReady: a => {
                                "app-server" === j.kind && (F = q(b, E, a))
                            },
                            onThreadCreated: a => {
                                let c;
                                c = b.get(o.f).info((0, k.jsx)(l.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    values: {
                                        appName: x
                                    }
                                }), {
                                    id: E,
                                    position: "top-center",
                                    actionPlacement: "inline",
                                    duration: 5,
                                    hasCloseButton: !1,
                                    leading: null,
                                    primaryAction: {
                                        label: p,
                                        onClick: () => {
                                            a() && c.close()
                                        }
                                    }
                                })
                            },
                            sourceName: x,
                            toolOrigin: y,
                            signal: A.signal
                        });
                        return
                    } catch (a) {
                        throw G(a), a
                    } finally {
                        z.removeEventListener("abort", J), I || H()
                    }
                }
            })
        }
    }),
    FPpy: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("iRMi"),
            f = c("mfKi"),
            g = c("yZpl"),
            h = c("xSzB"),
            i = c("k7G6"),
            j = c("yGJW"),
            k = c("Yshm");
        c.d(b, {}, {
            a: function(a) {
                let {
                    scope: b,
                    chatgpt: c,
                    hostId: l,
                    navigate: m,
                    toolResult: n,
                    connect: o,
                    open: p,
                    decline: q,
                    onShownReceipt: r,
                    onInstallClick: s,
                    onSuggestionInteraction: t,
                    isCurrent: u = () => !0
                } = a, v = k.e.safeParse(n.structuredContent);
                if (!v.success) return null;
                let w = (0, h.f)(n),
                    x = k.c.safeParse(w?._meta ?? w),
                    y = x.success ? x.data["openai/plugin_suggestion_id"] : void 0,
                    z = {
                        chatgpt: c,
                        source: e.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: y,
                        surface: e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    A = (a, e, g) => {
                        try {
                            (0, j.a)(b, f.CodexPluginAction, {
                                source: z.source,
                                suggestionId: y,
                                surface: z.surface,
                                action: a,
                                remotePluginId: e,
                                result: f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: f.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != c && null != y && (a !== f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != g) && (0, j.a)(b, d.q, {
                                action: a === f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: e,
                                pluginIds: g,
                                result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                                suggestionId: y,
                                productExperience: c.productExperience,
                                surface: c.surface
                            })
                        } catch {}
                    },
                    B = new Set,
                    C = a => {
                        let b = k.a.parse(a),
                            c = v.data.suggestions.find(a => {
                                let {
                                    plugin_id: c
                                } = a;
                                return c === b.pluginId
                            });
                        if (!u() || null == c || null != b.suggestionId && b.suggestionId !== y) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return c
                    };
                return {
                    requestDeclinePluginSuggestions: null == q ? void 0 : () => q(v.data.suggestions),
                    sendInstrument: a => {
                        let b = k.b.safeParse(a);
                        if (!u() || !b.success || b.data.payload.suggestion_id !== y || !v.data.suggestions.some(a => {
                                let {
                                    plugin_id: c
                                } = a;
                                return c === b.data.payload.remote_plugin_id
                            })) return;
                        let c = b.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === b.data.label) {
                            if (!b.data.payload.plugin_ids.includes(c) || (r?.(c, a), B.has(c))) return;
                            B.add(c), t?.(c, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[c] : void 0, "viewed");
                            return
                        }
                        let d = b.data.payload.plugin_ids;
                        A(f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, c, d?.includes(c) && d.every(a => v.data.suggestions.some(b => {
                            let {
                                plugin_id: c
                            } = b;
                            return c === a
                        })) ? d : void 0)
                    },
                    requestConnectPlugin: async a => {
                        let b = C(a);
                        return s?.(b.plugin_id), t?.(b.plugin_id, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[b.plugin_id] : void 0, "click"), A(f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, b.plugin_id), o(b, z)
                    },
                    requestOpenPlugin: async a => {
                        let e = C(a);
                        if (null != c && null != p) try {
                            (0, j.a)(b, d.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: e.plugin_id,
                                suggestionId: y,
                                surface: c.surface
                            })
                        } catch {}
                        null != p ? await p(e) : await m((0, i.a)({
                            hostId: l,
                            pluginId: e.plugin_id,
                            remoteMarketplaceName: g.bd
                        }))
                    }
                }
            }
        })
    }),
    EAcR: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("Wdu7"),
            k = c("aENG"),
            l = c("tSEg"),
            m = c("WFY2"),
            n = c("Cv9y"),
            o = c("qZWE"),
            p = c("X3T3"),
            q = c("EDsV");
        c.d(b, {}, {
            a: function(a) {
                let b, c, r, s, t, u, v, w, x, y, z, A, B = (0, e.c)(90),
                    {
                        resource: C,
                        error: D,
                        errorTitle: E,
                        errorIllustration: F,
                        hostDisplayModes: G,
                        fullSurface: H,
                        hostScroll: I,
                        inlineSurface: J,
                        mcpAppId: K,
                        overlayOwnerId: L,
                        onRetryResourceRead: M,
                        renderErrorActions: N,
                        appName: O,
                        presentation: P,
                        showLoadingStatus: Q,
                        disableInlineLoadingState: R
                    } = a,
                    S = void 0 !== H && H,
                    T = void 0 !== I && I,
                    U = void 0 === J ? "standalone" : J,
                    V = void 0 === L ? null : L,
                    W = void 0 === Q || Q,
                    X = void 0 !== R && R,
                    Y = (0, g.y)(l.a),
                    Z = (0, g.x)(o.h, K),
                    $ = Z?.content.resource;
                B[0] !== D || B[1] !== C || B[2] !== $ ? (b = null == $ ? C : {
                    data: $,
                    error: D ?? null,
                    isLoading: !1
                }, B[0] = D, B[1] = C, B[2] = $, B[3] = b) : b = B[3];
                let _ = b,
                    {
                        data: aa,
                        isLoading: ab
                    } = _,
                    ac = aa?.html ?? null;
                B[4] !== _ || B[5] !== G ? (c = (0, q.e)(_, G), B[4] = _, B[5] = G, B[6] = c) : c = B[6];
                let ad = c,
                    ae = (0, g.x)(o.v, K),
                    af = (0, g.x)(o.w, K),
                    ag = S || "inline" === P,
                    ah = Z?.inlineFrameAnchor.ref,
                    ai = aa?.heightHint ?? null,
                    aj = aa?.minFrameHeight ?? null;
                B[7] !== ae.intrinsicHeight || B[8] !== T || B[9] !== U || B[10] !== aj || B[11] !== ai ? (r = (0, k.a)(ae.intrinsicHeight, ai, aj, U, T), B[7] = ae.intrinsicHeight, B[8] = T, B[9] = U, B[10] = aj, B[11] = ai, B[12] = r) : r = B[12];
                let ak = r,
                    al = !S && aa?.fitWidth ? ae.intrinsicWidth ?? aa.widthHint : void 0,
                    am = S ? void 0 : aa?.inlineFramePadding;
                B[13] !== am ? (s = (0, k.b)(am), B[13] = am, B[14] = s) : s = B[14], B[15] !== al || B[16] !== s ? (t = {
                    width: al,
                    ...s
                }, B[15] = al, B[16] = s, B[17] = t) : t = B[17];
                let an = t,
                    ao = "error" === ad.kind ? ad.error : ae.sandboxError;
                B[18] !== ad.kind || B[19] !== ao ? (u = null, "too-large" === ad.kind ? u = "HTML exceeds display limit" : ao instanceof q.a && (u = "No supported display mode"), B[18] = ad.kind, B[19] = ao, B[20] = u) : u = B[20];
                let ap = "error" === ad.kind ? ad.error : null,
                    aq = ap?.message;
                B[21] !== u || B[22] !== aa?.availableDisplayModes || B[23] !== aa?.htmlByteLength || B[24] !== G || B[25] !== K || B[26] !== ap ? (v = () => {
                    (null != u || null != ap) && m.a.warning("MCP app error displayed", {
                        safe: {
                            reason: u ?? "App could not be displayed",
                            htmlByteLength: aa?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: K,
                            error: ap,
                            hostDisplayModes: G,
                            availableDisplayModes: aa?.availableDisplayModes
                        }
                    })
                }, B[21] = u, B[22] = aa?.availableDisplayModes, B[23] = aa?.htmlByteLength, B[24] = G, B[25] = K, B[26] = ap, B[27] = v) : v = B[27];
                let ar = (0, h.useEffectEvent)(v);
                if (B[28] !== ar ? (w = () => {
                        ar()
                    }, B[28] = ar, B[29] = w) : w = B[29], B[30] !== u || B[31] !== K || B[32] !== aq ? (x = [u, aq, K], B[30] = u, B[31] = K, B[32] = aq, B[33] = x) : x = B[33], (0, h.useEffect)(w, x), "too-large" === ad.kind) {
                    let a;
                    return B[34] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(j.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, d.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: (0, d.jsx)(i.a, {
                                id: "codex.mcpTool.mcpAppTooLarge",
                                defaultMessage: "This app is too large to display"
                            })
                        })
                    }), B[34] = a) : a = B[34], a
                }
                if (!S && "launcher" === P) {
                    let a, b = V ?? void 0;
                    return B[35] !== ah || B[36] !== b ? (a = (0, d.jsx)("div", {
                        ref: ah,
                        "data-overlay-owner": b,
                        hidden: !0
                    }), B[35] = ah, B[36] = b, B[37] = a) : a = B[37], a
                }
                if (ab || !af && null != ac && null == ao) {
                    let a, b, c, e;
                    if ("pending" === P && !S) {
                        let a;
                        return !W || X ? null : (B[38] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, d.jsx)(i.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app"
                            })
                        }), B[38] = a) : a = B[38], a)
                    }
                    let g = ab ? null : ah,
                        h = V ?? void 0,
                        j = null == am && "max-w-full",
                        k = S && "h-full";
                    B[39] !== j || B[40] !== k ? (a = (0, f.b)(j, k), B[39] = j, B[40] = k, B[41] = a) : a = B[41];
                    let l = "standalone" === U && "rounded-lg border";
                    B[42] !== l ? (b = (0, f.b)("w-full border-subtle", l), B[42] = l, B[43] = b) : b = B[43];
                    let m = S ? "100%" : ak;
                    return B[44] !== X || B[45] !== S || B[46] !== T || B[47] !== am || B[48] !== W || B[49] !== b || B[50] !== m ? (c = (0, d.jsx)(n.a, {
                        className: b,
                        height: m,
                        inlineFramePadding: am,
                        fullSurface: S,
                        allowCompact: T,
                        showLoadingStatus: W,
                        disableInlineLoadingState: X
                    }), B[44] = X, B[45] = S, B[46] = T, B[47] = am, B[48] = W, B[49] = b, B[50] = m, B[51] = c) : c = B[51], B[52] !== an || B[53] !== U || B[54] !== g || B[55] !== h || B[56] !== a || B[57] !== c ? (e = (0, d.jsx)("div", {
                        ref: g,
                        "data-overlay-owner": h,
                        className: a,
                        style: an,
                        "data-mcp-app-inline-surface": U,
                        children: c
                    }), B[52] = an, B[53] = U, B[54] = g, B[55] = h, B[56] = a, B[57] = c, B[58] = e) : e = B[58], e
                }
                if (null != ao) {
                    let a, b;
                    return B[59] !== ad.kind || B[60] !== K || B[61] !== M || B[62] !== Z?.content.mcpAppHostAdapter?.retry || B[63] !== Y ? (a = Z?.content.mcpAppHostAdapter?.retry ?? ("error" === ad.kind ? M : () => (0, o.D)(Y, K)), B[59] = ad.kind, B[60] = K, B[61] = M, B[62] = Z?.content.mcpAppHostAdapter?.retry, B[63] = Y, B[64] = a) : a = B[64], B[65] !== O || B[66] !== F || B[67] !== E || B[68] !== S || B[69] !== U || B[70] !== ao || B[71] !== N || B[72] !== a ? (b = (0, d.jsx)(p.a, {
                        error: ao,
                        errorTitle: E,
                        errorIllustration: F,
                        fullSurface: S,
                        inlineSurface: U,
                        pluginName: O,
                        renderErrorActions: N,
                        onRetry: a
                    }), B[65] = O, B[66] = F, B[67] = E, B[68] = S, B[69] = U, B[70] = ao, B[71] = N, B[72] = a, B[73] = b) : b = B[73], b
                }
                if (!ag) {
                    let a, b = V ?? void 0;
                    return B[74] !== ah || B[75] !== b ? (a = (0, d.jsx)("div", {
                        ref: ah,
                        "data-overlay-owner": b,
                        hidden: !0
                    }), B[74] = ah, B[75] = b, B[76] = a) : a = B[76], a
                }
                if (null == ac) {
                    let a;
                    return B[77] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, d.jsx)(i.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display"
                        })
                    }), B[77] = a) : a = B[77], a
                }
                let as = V ?? void 0,
                    at = null == am && "w-full max-w-full",
                    au = S && "h-full";
                B[78] !== at || B[79] !== au ? (y = (0, f.b)("overflow-hidden", at, au), B[78] = at, B[79] = au, B[80] = y) : y = B[80];
                let av = S ? "100%" : ak;
                return B[81] !== an || B[82] !== av ? (z = {
                    ...an,
                    height: av
                }, B[81] = an, B[82] = av, B[83] = z) : z = B[83], B[84] !== ah || B[85] !== U || B[86] !== as || B[87] !== y || B[88] !== z ? (A = (0, d.jsx)("div", {
                    ref: ah,
                    "data-overlay-owner": as,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": U,
                    className: y,
                    style: z
                }), B[84] = ah, B[85] = U, B[86] = as, B[87] = y, B[88] = z, B[89] = A) : A = B[89], A
            }
        })
    }),
    X3T3: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("oyxz"),
            i = c("Wf1j"),
            j = c("Sm6l"),
            k = c("bf6R"),
            l = c("ZiSI"),
            m = c("pZTm"),
            n = c("EDsV");

        function o(a) {
            let b, c, f, h = (0, e.c)(11),
                {
                    fullSurface: i,
                    inlineSurface: j,
                    title: k,
                    illustration: m,
                    actions: n
                } = a,
                o = i ? "h-full" : "h-60",
                p = !i && "standalone" === (void 0 === j ? "standalone" : j) && "overflow-hidden rounded-lg border border-strong";
            h[0] !== o || h[1] !== p ? (b = (0, g.b)(o, p), h[0] = o, h[1] = p, h[2] = b) : b = h[2];
            let q = !i;
            return h[3] !== n || h[4] !== m || h[5] !== q || h[6] !== k ? (c = (0, d.jsx)(l.a, {
                compact: q,
                title: k,
                illustration: m,
                description: null,
                actions: n
            }), h[3] = n, h[4] = m, h[5] = q, h[6] = k, h[7] = c) : c = h[7], h[8] !== b || h[9] !== c ? (f = (0, d.jsx)("div", {
                className: b,
                children: c
            }), h[8] = b, h[9] = c, h[10] = f) : f = h[10], f
        }

        function p() {
            let a, b, c, g, l = (0, e.c)(6),
                m = (0, i.a)();
            l[0] !== m ? (a = m.formatMessage({
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                defaultMessage: "Timeout details"
            }), l[0] = m, l[1] = a) : a = l[1];
            let n = a;
            return l[2] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(h.a, {
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes."
            }), l[2] = b) : b = l[2], l[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(k.Be, {
                className: "text-secondary"
            }), l[3] = c) : c = l[3], l[4] !== n ? (g = (0, d.jsx)(f.a, {
                preventDismissOnFastClick: !0,
                content: b,
                children: (0, d.jsx)(j.a, {
                    size: "inline",
                    color: "ghost",
                    "aria-label": n,
                    children: c
                })
            }), l[4] = n, l[5] = g) : g = l[5], g
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, g = (0, e.c)(21),
                    {
                        error: i,
                        errorTitle: k,
                        errorIllustration: l,
                        fullSurface: q,
                        inlineSurface: r,
                        onRetry: s,
                        renderErrorActions: t,
                        pluginName: u
                    } = a,
                    v = void 0 !== q && q,
                    w = void 0 === r ? "standalone" : r,
                    x = k;
                if (null == x)
                    if (i instanceof n.b) {
                        let a, b, c, e = u ? "yes" : "no";
                        g[0] !== u || g[1] !== e ? (a = (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            values: {
                                hasName: e,
                                appName: u
                            }
                        }), g[0] = u, g[1] = e, g[2] = a) : a = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(p, {}), g[3] = b) : b = g[3], g[4] !== a ? (c = (0, d.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [a, b]
                        }), g[4] = a, g[5] = c) : c = g[5], x = c
                    } else if (null == u) {
                    let a;
                    g[6] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                        ...m.a.displayUnnamedApp
                    }), g[6] = a) : a = g[6], x = a
                } else {
                    let a;
                    g[7] !== u ? (a = (0, d.jsx)(h.a, {
                        ...m.a.displayApp,
                        values: {
                            appName: u
                        }
                    }), g[7] = u, g[8] = a) : a = g[8], x = a
                }
                g[9] !== v || g[10] !== s ? (b = null != s ? (0, d.jsx)(j.a, {
                    color: "secondary",
                    size: v ? "large" : "compact",
                    onClick: () => s(),
                    children: (0, d.jsx)(h.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again"
                    })
                }) : null, g[9] = v, g[10] = s, g[11] = b) : b = g[11];
                let y = b;
                g[12] !== t || g[13] !== y ? (c = t ? t(y) : y, g[12] = t, g[13] = y, g[14] = c) : c = g[14];
                let z = c;
                return g[15] !== z || g[16] !== l || g[17] !== x || g[18] !== v || g[19] !== w ? (f = (0, d.jsx)(o, {
                    fullSurface: v,
                    inlineSurface: w,
                    title: x,
                    illustration: l,
                    actions: z
                }), g[15] = z, g[16] = l, g[17] = x, g[18] = v, g[19] = w, g[20] = f) : f = g[20], f
            },
            b: o
        })
    }),
    MefB: (function(a, b, c) {
        var d = c("g25Y"),
            e = c("X6Vn");
        c.d(b, {}, {
            a: function(a, b) {
                let c = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                    f = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                    g = () => {
                        window.open(b, "_blank", `popup=yes,width=600,height=750,left=${c},top=${f},noopener,noreferrer`)
                    };
                "Apple Computer, Inc." === navigator.vendor ? (0, e.f)(a, d.ExternalLinkConfirmationDialog, {
                    href: b,
                    initiator: "mcp_app_resource",
                    onOpen: g
                }) : g()
            }
        })
    }),
    qwxA: (function(a, b, c) {
        c.d(b, {
            a: () => r,
            b: () => q,
            c: () => p
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("I7bK"),
            i = c("gMJf"),
            j = c("Vlqh");
        c("kfGJ"), j.a;
        var k = c("qZWE"),
            l = c("tSEg"),
            m = c("SNez"),
            n = c("EDsV"),
            o = c("DRR4");

        function p(a) {
            let b, c, d = (0, e.c)(6),
                {
                    callIds: h,
                    hostId: i,
                    conversationId: j
                } = a,
                m = (0, f.y)(l.a);
            return d[0] !== h || d[1] !== j || d[2] !== i || d[3] !== m ? (b = () => {
                (0, k.F)(m, {
                    callIds: h,
                    hostId: i,
                    conversationId: j
                })
            }, c = [h, i, j, m], d[0] = h, d[1] = j, d[2] = i, d[3] = m, d[4] = b, d[5] = c) : (b = d[4], c = d[5]), (0, g.useLayoutEffect)(b, c), null
        }

        function q(a) {
            let b, c, d = (0, e.c)(5),
                {
                    isInlineRequested: h,
                    mcpAppId: i
                } = a,
                j = (0, f.y)(l.a);
            return d[0] !== h || d[1] !== i || d[2] !== j ? (b = () => {
                j.set(k.k, i, h)
            }, c = [h, i, j], d[0] = h, d[1] = i, d[2] = j, d[3] = b, d[4] = c) : (b = d[3], c = d[4]), (0, g.useLayoutEffect)(b, c), null
        }

        function r(a) {
            let b, c, j, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = (0, e.c)(65);
            L[0] !== a ? ({
                recipient: y,
                resource: w,
                access: c,
                fullSurface: z,
                hostDisplayModes: p,
                hostId: q,
                lifetime: r,
                mcpAppId: s,
                mcpServerStatuses: t,
                pluginId: u,
                connectorId: j,
                Frame: b,
                server: x,
                ...v
            } = a, L[0] = a, L[1] = b, L[2] = c, L[3] = j, L[4] = p, L[5] = q, L[6] = r, L[7] = s, L[8] = t, L[9] = u, L[10] = v, L[11] = w, L[12] = x, L[13] = y, L[14] = z) : (b = L[1], c = L[2], j = L[3], p = L[4], q = L[5], r = L[6], s = L[7], t = L[8], u = L[9], v = L[10], w = L[11], x = L[12], y = L[13], z = L[14]);
            let M = void 0 === y ? null : y,
                N = void 0 !== z && z,
                O = (0, f.y)(l.a),
                P = (0, f.x)(k.t, s),
                Q = (0, f.z)(m.a);
            L[15] !== r || L[16] !== s || L[17] !== O ? (A = () => {
                if ("component" === r) return () => {
                    (0, k.A)(O, s)
                }
            }, B = [r, s, O], L[15] = r, L[16] = s, L[17] = O, L[18] = A, L[19] = B) : (A = L[18], B = L[19]), (0, g.useLayoutEffect)(A, B);
            let R = (0, g.useContext)(h.c)?.rightPanelLayoutTick;
            L[20] !== t || L[21] !== u || L[22] !== x ? (C = void 0 !== u ? u : t?.data.find(a => {
                let {
                    name: b
                } = a;
                return b === x
            })?.pluginId, L[20] = t, L[21] = u, L[22] = x, L[23] = C) : C = L[23];
            let S = C;
            L[24] !== j || L[25] !== q || L[26] !== S || L[27] !== x ? (D = {
                hostId: q,
                pluginId: S,
                connectorId: j,
                server: x
            }, L[24] = j, L[25] = q, L[26] = S, L[27] = x, L[28] = D) : D = L[28];
            let {
                bridge: T,
                pluginId: U,
                isLoading: V
            } = (0, f.x)(i.a, D), W = S ?? U;
            L[29] !== q || L[30] !== W ? (E = ! function(a) {
                let {
                    hostId: b,
                    pluginId: c
                } = a;
                return !1
            }({
                hostId: q,
                pluginId: W
            }) ? void 0 : W, L[29] = q, L[30] = W, L[31] = E) : E = L[31];
            let X = E,
                Y = w.isLoading || V;
            L[32] !== p || L[33] !== Y || L[34] !== w ? (F = (0, n.e)({
                ...w,
                isLoading: Y
            }, p), L[32] = p, L[33] = Y, L[34] = w, L[35] = F) : F = L[35];
            let Z = F;
            return L[36] !== c || L[37] !== Z || L[38] !== T || L[39] !== X || L[40] !== N || L[41] !== p || L[42] !== q || L[43] !== Q || L[44] !== s || L[45] !== t || L[46] !== M || L[47] !== v || L[48] !== S || L[49] !== R || L[50] !== O || L[51] !== x ? (H = () => {
                Q || "ready" !== Z.kind || null == c || (0, k.z)(O, {
                    ...v,
                    recipient: M,
                    resource: Z.data,
                    access: c,
                    fullSurface: N,
                    hostDisplayModes: p,
                    hostId: q,
                    mcpAppId: s,
                    mcpServerStatuses: t,
                    pluginId: S,
                    server: x,
                    firstPartyPluginBridge: T,
                    firstPartyPluginLoggerPluginId: X,
                    rightPanelLayoutTick: R
                })
            }, G = [c, Z, T, X, N, p, q, Q, s, t, M, v, S, R, O, x], L[36] = c, L[37] = Z, L[38] = T, L[39] = X, L[40] = N, L[41] = p, L[42] = q, L[43] = Q, L[44] = s, L[45] = t, L[46] = M, L[47] = v, L[48] = S, L[49] = R, L[50] = O, L[51] = x, L[52] = G, L[53] = H) : (G = L[52], H = L[53]), (0, g.useLayoutEffect)(H, G), L[54] !== b || L[55] !== r || L[56] !== s || L[57] !== O || L[58] !== P ? (I = () => {
                "component" !== r && null != P && (0, o.c)(O, {
                    Frame: b,
                    lifetime: r,
                    sessionId: P,
                    sourceMcpAppId: s
                })
            }, J = [b, r, s, P, O], L[54] = b, L[55] = r, L[56] = s, L[57] = O, L[58] = P, L[59] = I, L[60] = J) : (I = L[59], J = L[60]), (0, g.useLayoutEffect)(I, J), L[61] !== b || L[62] !== r || L[63] !== P ? (K = "component" === r && null != P ? (0, d.jsx)(b, {
                sessionId: P
            }, P) : null, L[61] = b, L[62] = r, L[63] = P, L[64] = K) : K = L[64], K
        }
    }),
    U0IP: (function(a, b, c) {
        let d;
        var e = c("eB3o"),
            f = c("kSHG"),
            g = c("Q840"),
            h = c("lAQI"),
            i = c("tSEg");
        let j = "ui/openai/viewer-header",
            k = h.F({
                id: h.L().min(1).max(100),
                label: h.L().min(1).max(500),
                disabled: h.j().optional()
            }),
            l = h.p(["newspaper", "text-page", "document-search", "phone-wave", "presentation", "bar-chart", "live-signal", "building"]),
            m = h.S({
                protocol: /^https?$/
            }).max(4e3).refine(a => {
                let b = URL.parse(a);
                return null != b && !b.username && !b.password
            }),
            n = m.refine(a => URL.parse(a)?.protocol === "https:"),
            o = h.E().int().positive().max(1e4),
            p = h.F({
                percent: o,
                fit: h.j(),
                presets: h.g(h.F({
                    id: k.shape.id,
                    percent: o
                })).min(1).max(24).refine(a => new Set(a.map(a => a.percent)).size === a.length, "Zoom percentages must be unique"),
                fitId: k.shape.id
            }),
            q = h.F({
                zoom: p.optional(),
                navigation: h.g(k.extend({
                    direction: h.p(["up", "down"])
                })).max(2).refine(a => new Set(a.map(a => a.direction)).size === a.length)
            });

        function r(a) {
            let b = a?.zoom;
            return [...a?.navigation ?? [], ...b ? [...b.presets, {
                id: b.fitId
            }] : []]
        }
        let s = h.F({
                title: h.L().min(1).max(2e3),
                playback: h.p(["listen", "player"]).optional(),
                titleMenuLabel: h.L().min(1).max(2e3).optional(),
                titleIcon: l.optional(),
                documentControls: q.optional(),
                titleActions: h.g(k.extend({
                    href: m.optional()
                })).max(20),
                actions: h.g(k.extend({
                    icon: h.p(["download", "search", "sources", "info"]),
                    menu: h.F({
                        fields: h.g(h.F({
                            label: h.L().max(100),
                            value: h.L().max(4e3)
                        })).max(40),
                        items: h.g(k).max(20),
                        providers: h.g(h.F({
                            name: h.L().min(1).max(500),
                            href: n.optional(),
                            icons: h.g(f.v).max(8).optional(),
                            icon: l.optional(),
                            sources: h.g(h.F({
                                title: h.L().min(1).max(2e3),
                                href: n.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(a => {
                let b = [...a.titleActions, ...r(a.documentControls), ...a.actions.flatMap(a => [a, ...a.menu?.items ?? []])];
                return new Set(b.map(a => a.id)).size === b.length
            }, "Viewer action IDs must be unique"),
            t = (0, g.v)(i.a, a => null);
        d = (0, e._)(Symbol.dispose), c.d(b, {}, {
            a: j,
            b: class {
                scope;
                appId;
                openExternal;
                invoke = null;
                constructor(a, b, c) {
                    this.scope = a, this.appId = b, this.openExternal = c
                }
                handleRequest(a, b, c) {
                    let d = h.F({
                        method: h.z(j),
                        params: s
                    }).safeParse(a);
                    if (!d.success || b.aborted) return null;
                    let e = d.data.params,
                        f = [...r(e.documentControls), ...e.titleActions, ...e.actions.flatMap(a => a.menu?.items ?? [a])],
                        g = () => !b.aborted && this.invoke === i && this.scope.get(t, this.appId)?.invoke === i,
                        i = a => {
                            let b = f.find(b => b.id === a && !b.disabled);
                            g() && null != b && (null != b.href ? this.openExternal(b.href) : c({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: b.id
                                }
                            }))
                        };
                    return this.invoke = i, this.scope.set(t, this.appId, {
                        header: e,
                        invoke: i,
                        ...e.playback && {
                            placePlayback: a => {
                                g() && c({
                                    method: "ui/notifications/openai/viewer-playback-layout",
                                    params: a
                                })
                            }
                        }
                    }), Promise.resolve({
                        accepted: !0,
                        ...e.playback && {
                            playback: !0
                        },
                        ...e.documentControls && {
                            documentControls: !0
                        }
                    })
                } [d]() {
                    this.scope.get(t, this.appId)?.invoke === this.invoke && this.scope.set(t, this.appId, null), this.invoke = null
                }
            },
            c: t
        })
    })
};