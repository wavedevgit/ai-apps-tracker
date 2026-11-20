export const __rspack_esm_ids = [839342];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => i,
            c: () => r,
            d: () => T,
            e: () => m,
            f: () => y,
            g: () => v,
            h: () => A
        });
        let r = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var a, o, i = ((a = {}).LOG = "log", a.RUN_START = "run_start", a.ENVIRONMENT_STATUS = "environment_status", a.OUTPUT = "output", a.ERROR = "error", a.RUN_COMPLETE = "run_complete", a),
            s = ((o = {})[o.INITIALIZING = 0] = "INITIALIZING", o[o.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", o[o.RUNNING_CODE = 2] = "RUNNING_CODE", o);

        function l(e, t) {
            if (null === e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "bigint" == typeof e) return e;
            if ("symbol" == typeof e || "function" == typeof e || void 0 === e) return String(e);
            if (t.has(e)) return t.get(e);
            try {
                return structuredClone(e)
            } catch {}
            let n = Object.prototype.toString.call(e);
            if ("[object Date]" === n) return new Date(e.getTime());
            if ("[object RegExp]" === n) {
                var r;
                let t;
                return (t = new RegExp((r = e).source, r.flags)).lastIndex = r.lastIndex, t
            }
            if ("[object ArrayBuffer]" === n) return e.slice(0);
            if ("[object DataView]" === n) {
                let n = l(e.buffer, t);
                try {
                    return new DataView(n, e.byteOffset, e.byteLength)
                } catch {
                    return String(e)
                }
            }
            if (ArrayBuffer.isView(e) && !(e instanceof DataView)) try {
                let t = e.constructor;
                if ("function" == typeof e.slice) return e.slice();
                let n = new t(e.length);
                return n.set(e), n
            } catch {
                return String(e)
            }
            if ("[object Map]" === n) {
                let n = new Map;
                for (let [r, a] of(t.set(e, n), e)) n.set(c(r, t), c(a, t));
                return n
            }
            if ("[object Set]" === n) {
                let n = new Set;
                for (let r of (t.set(e, n), e)) n.add(c(r, t));
                return n
            }
            if ("u" > typeof Blob && e instanceof Blob) try {
                if ("u" > typeof File && e instanceof File) return new File([e], e.name, {
                    type: e.type,
                    lastModified: e.lastModified
                });
                return new Blob([e], {
                    type: e.type
                })
            } catch {
                return String(e)
            }
            if ("u" > typeof URL && e instanceof URL) try {
                return new URL(e.toString())
            } catch {
                return String(e)
            }
            if ("u" > typeof URLSearchParams && e instanceof URLSearchParams) try {
                return new URLSearchParams(e.toString())
            } catch {
                return String(e)
            }
            if (e instanceof Error) {
                let n;
                try {
                    let t = e.constructor;
                    n = "function" == typeof t ? new t(e.message) : Error(e.message)
                } catch {
                    n = Error(e.message)
                }
                if (n.name = e.name, "string" == typeof e.stack && (n.stack = e.stack), "cause" in e) try {
                    n.cause = c(e.cause, t)
                } catch {
                    n.cause = String(e.cause)
                }
                for (let r of Object.keys(e)) try {
                    n[r] = c(e[r], t)
                } catch {
                    n[r] = String(e[r])
                }
                return n
            }
            if ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer || "u" > typeof WeakMap && e instanceof WeakMap || "u" > typeof WeakSet && e instanceof WeakSet) return String(e);
            if (Array.isArray(e)) {
                let n = Array(e.length);
                t.set(e, n);
                for (let r = 0; r < e.length; r++) r in e && (n[r] = c(e[r], t));
                return n
            }
            let a = {};
            for (let n of (t.set(e, a), Object.keys(e))) {
                let r;
                try {
                    r = e[n]
                } catch (e) {
                    r = String(e)
                }
                a[n] = c(r, t)
            }
            return a
        }

        function c(e, t) {
            try {
                return structuredClone(e)
            } catch {}
            return l(e, t)
        }
        let d = "ABORT",
            u = "CALL",
            p = "REJECT",
            _ = "RESOLVE";

        function E(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === u) {
                    e.stopImmediatePropagation();
                    let [r] = e.ports;
                    if (!r) throw Error("RPCCallMessage must contains a port.");
                    t ? async function() {
                        let e = new AbortController;
                        try {
                            r.onmessage = t => {
                                let {
                                    data: n
                                } = t;
                                return Array.isArray(n) && n[0] === d && e.abort()
                            }, r.postMessage([_, await t.call({
                                signal: e.signal
                            }, ...n.slice(1))])
                        } catch (a) {
                            if (a instanceof Error && "DataCloneError" === a.name) try {
                                r.postMessage([_, await t.call({
                                    signal: e.signal
                                }, ... function(e) {
                                    let t = l(e, new WeakMap);
                                    try {
                                        return structuredClone(t)
                                    } catch {}
                                    return t
                                }(n.slice(1)))]);
                                return
                            } catch {}
                            r.postMessage([p, a])
                        } finally {
                            r.close()
                        }
                    }(): (r.postMessage([p, Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.")]), r.close())
                }
            }), e.start();
            let n = t => function() {
                    for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return new Promise((n, a) => {
                        let {
                            port1: o,
                            port2: i
                        } = new MessageChannel;
                        o.onmessage = e => {
                            let t = e.data;
                            t[0] === _ ? n(t[1]) : a(t[1]), o.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            o.postMessage([d]), o.close(), a(Error("Aborted."))
                        }), e.postMessage([u, ...r], [i, ...t.transfer || []])
                    })
                },
                r = n({});
            return r.withOptions = n, r
        }
        let f = "GENERATOR_GENERATE";

        function g(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === f) {
                    if (e.stopImmediatePropagation(), !t) throw Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.");
                    let [r, a, ...o] = n, i = t(...o);
                    E(a.next, i.next.bind(i)), E(a.return, e => i.return?.(e) || {
                        done: !0
                    }), E(a.throw, e => i.throw?.(e) || Promise.reject(e)), E(a.asyncDispose, async () => {
                        let e = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            t = Symbol.dispose || Symbol.for("Symbol.dispose");
                        e in i ? await i[e]?.() : t in i && i[t]?.()
                    })
                }
            }), e.start();
            let n = t => {
                    let n;
                    return function() {
                        for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        let {
                            port1: i,
                            port2: s
                        } = new MessageChannel, {
                            port1: l,
                            port2: c
                        } = new MessageChannel, {
                            port1: d,
                            port2: u
                        } = new MessageChannel, {
                            port1: p,
                            port2: _
                        } = new MessageChannel, g = {
                            signal: t.signal
                        }, h = () => {
                            i.close(), s.close(), l.close(), c.close(), d.close(), u.close(), p.close(), _.close()
                        }, m = E(i).withOptions(g), I = E(l).withOptions(g), T = E(d).withOptions(g), b = E(p).withOptions(g), v = !1, y = async e => {
                            if (n?.(), v) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (v = !0, h()), t
                        }, A = {
                            next: e => y(() => I(e)),
                            return: e => y(() => T(e)),
                            throw: e => y(() => b(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async e => {
                                n?.(), await e(), v = !0, h(), n = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => m()),
                            [Symbol.asyncIterator]: () => A
                        };
                        return e.postMessage([f, {
                            asyncDispose: s,
                            next: c,
                            return: u,
                            throw: _
                        }, ...a], [...t.transfer || [], s, c, u, _]), t.signal?.addEventListener("abort", () => {
                            n = () => {
                                throw Error("This generator has been aborted.")
                            }, h()
                        }, {
                            once: !0
                        }), A
                    }
                },
                r = n({});
            return r.withOptions = n, r
        }
        var h = n("lAQI");
        async function m(e) {
            let {
                host: t,
                signal: n
            } = e, {
                ports: r,
                replyPort: a
            } = "iframe" in e ? await
            function(e) {
                let {
                    iframe: t,
                    origin: n,
                    signal: r
                } = e, a = t.ownerDocument.defaultView;
                if (null == a || r?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let o = h.F({
                    type: h.z("init"),
                    ports: h.J(h.L(), h.t(MessagePort)),
                    replyPort: h.t(MessagePort)
                });
                return new Promise((e, i) => {
                    let s = () => {
                            a.removeEventListener("message", u), t.removeEventListener("error", d), r?.removeEventListener("abort", c)
                        },
                        l = e => {
                            s(), i(e)
                        },
                        c = () => {
                            l(new DOMException("Sandbox connection cancelled.", "AbortError"))
                        },
                        d = () => {
                            l(Error("Unable to load the code execution sandbox."))
                        },
                        u = r => {
                            if (r.source !== t.contentWindow || r.origin !== n) return;
                            let a = o.safeParse(r.data);
                            a.success && (s(), e(a.data))
                        };
                    a.addEventListener("message", u), null != r && t.addEventListener("error", d, {
                        once: !0
                    }), r?.addEventListener("abort", c, {
                        once: !0
                    })
                })
            }(e): e, o = new Set([...Object.values(r), a]), i = new AbortController, s = () => {
                for (let e of (n?.removeEventListener("abort", s), i.abort(), o)) e.close();
                o.clear()
            };
            try {
                n?.throwIfAborted();
                let l = {};
                for (let [e, n] of Object.entries(t)) {
                    if (null == n) continue;
                    let r = new MessageChannel;
                    o.add(r.port1), o.add(r.port2);
                    let a = function(e, t, n) {
                        function r() {
                            for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                            let o = e[t];
                            if (null == o) throw Error(`Sandbox host method "${t}" is unavailable`);
                            return o.apply(this, r)
                        }
                        return I(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* r.apply(this, t)
                        }: r
                    }(t, e, n);
                    I(a) ? g(r.port1, a) : E(r.port1, a), l[e] = r.port2
                }
                a.postMessage(l, Object.values(l)), a.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    d = Object.fromEntries(Object.entries(r).map(e => {
                        let [t, r] = e, a = c.has(t) ? g(r) : E(r);
                        if (null == n) return [t, a];
                        let o = e => {
                            let t = null == e.signal ? i.signal : AbortSignal.any([i.signal, e.signal]),
                                n = a.withOptions({
                                    ...e,
                                    signal: t
                                });
                            return function() {
                                for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                                return t.throwIfAborted(), n(...r)
                            }
                        };
                        return [t, Object.assign(o({}), {
                            withOptions: o
                        })]
                    }));
                return n?.addEventListener("abort", s, {
                    once: !0
                }), n?.throwIfAborted(), {
                    api: d,
                    dispose: s
                }
            } catch (e) {
                throw s(), e
            }
        }

        function I(e) {
            return "AsyncGeneratorFunction" === e.constructor.name
        }

        function T(e) {
            let {
                disableNetworkRequests: t,
                domains: n,
                additionalResourceDomains: r = [],
                unsafeAllowAllNetworkRequests: a
            } = e;
            return t ? {
                disableNetworkRequests: !0,
                resourceDomains: [],
                connectDomains: [],
                isTrusted: !1
            } : a ? null : {
                connectDomains: n,
                resourceDomains: [...n, ...r],
                isTrusted: !1
            }
        }
        let b = new Set(["blob", "c", "cid", "data", "eval", "filesystem", "inline", "trusted-types-policy", "trusted-types-sink", "wasm-eval"]);

        function v(e) {
            return b.has(e) ? null : new URL(e).origin
        }

        function y() {
            let {
                origin: e,
                isStaging: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return `${e??(t?"https://staging-web-sandbox.oaiusercontent.com":"https://web-sandbox.oaiusercontent.com")}?${t?"unsafeSkipTargetOriginCheck=true":""}`
        }

        function A(e) {
            if (!C(e) || "structured_event" !== e.type || !C(e.messageType) || "string" != typeof e.messageType.$type || 0 === e.messageType.$type.length || !C(e.payload)) return;
            let t = e.payload;
            if (!["@type", "codexMetadata", "codex_metadata", "webFrontend", "web_frontend"].some(e => Object.hasOwn(t, e))) return {
                type: "structured_event",
                messageType: {
                    $type: e.messageType.$type
                },
                payload: e.payload
            }
        }

        function C(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
    }),
    RjXy: (function(e, t, n) {
        var r, a = ((r = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", r.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", r.UNRECOGNIZED = "UNRECOGNIZED", r);
        n.d(t, {}, {
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
            e: a,
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
    Btes: (function(e, t, n) {
        var r = n("kSHG"),
            a = n("Cslg"),
            o = n("dQRk"),
            i = n("KhaL"),
            s = n("xwf6");
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    chatGptConversation: n,
                    toolIdentity: l,
                    access: c,
                    signal: d,
                    toolArguments: u
                } = e, p = (0, s.b)(l);
                if (null == p || null == l) return null;
                if (null == n) return (0, s.a)({
                    scope: t,
                    access: c,
                    ...p,
                    toolArguments: u
                });
                let _ = t.get(a.f);
                if (null == c || null == _) throw Error("MCP app connection identity changed");
                c.assertActive();
                let E = "tpp" === t.get(o.y, n.id);
                return (0, i.b)({
                    scope: t,
                    accountId: _,
                    appUri: `connectors://${l.connectorId}`,
                    chatGptConversationId: n.id,
                    threadId: E ? n.id : void 0,
                    productSku: E ? "TPP" : void 0,
                    messageId: n.messageId,
                    originMetadata: {
                        "openai/connector_id": l.connectorId,
                        "openai/link_id": p.linkId
                    }
                }).handleRequest({
                    method: "tools/call",
                    params: {
                        name: l.actionName,
                        arguments: u
                    }
                }, d).then(e => (c.assertActive(), r.d.parse(e)))
            }
        })
    }),
    cYqq: (function(e, t, n) {
        var r = n("JKSp"),
            a = n("lAQI"),
            o = n("Cslg"),
            i = n("yGJW"),
            s = n("Qg7S"),
            l = n("OMIV");
        let c = a.F({
            payload: a.F({
                social_proof_variant: a.p(["control", "byline_only", "use_case", "social_proof", "combined"])
            })
        });
        n.d(t, {}, {
            a: function(e, t, n, a, d) {
                let u, p = c.safeParse(t);
                if (!p.success) return !1;
                "ledger.connection_card_viewed" === n ? u = "content_variant_us" : "plugin_management.connection_card_viewed" === n && (u = d);
                let _ = e.get(l.g);
                if (u && _ && _.getContext().user.userID === e.get(o.k) && (0, s.a)(_)) {
                    let e = _.getLayer("4125256861");
                    e.__evaluation?.allocated_experiment_name && e.__evaluation.explicit_parameters?.includes(u) && e.__value[u] === p.data.payload.social_proof_variant && e.get(u, "off")
                }
                return (0, i.a)(e, r.a, {
                    eventName: n,
                    eventData: JSON.stringify({
                        social_proof_variant: p.data.payload.social_proof_variant,
                        ...a
                    })
                }), !0
            }
        })
    }),
    kAhA: (function(e, t, n) {
        var r = n("RGCh"),
            a = n("Cslg"),
            o = n("Kwur"),
            i = n("MfrC");

        function s(e, t, n, r, a) {
            if (!t?.owner.isCurrent()) return Promise.resolve();
            let {
                context: s,
                owner: l
            } = t, c = (async () => {
                try {
                    await o.Request.safePost("/aip/ledger/funnel-events", {
                        requestBody: {
                            flow_type: "account",
                            flow_id: s.flowId,
                            event_id: "linking_started" === n ? s.flowId : crypto.randomUUID(),
                            step: n,
                            start: r,
                            entry_point: s.entryPoint ?? "unknown",
                            beacon_type: s.beaconType,
                            source: "client",
                            component: a
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": l.accountId,
                            "x-openai-use-sheep": "1"
                        },
                        retry: !1,
                        ...(0, i.c)(l, AbortSignal.any([l.signal, AbortSignal.timeout(1e4)]))
                    })
                } catch {}
            })();
            return l.retainTelemetry(c), c
        }
        n.d(t, {}, {
            a: function(e, t, n, a) {
                if (!t.isCurrent()) return;
                let o = {
                    context: {
                        ...n,
                        hasRecordedLinkingStarted: !0
                    },
                    owner: t
                };
                return s(e, o, "linking_started", {
                    flow_path: a,
                    platform: (0, r.d)() ? "mobile_web" : "desktop_web"
                }), o
            },
            b: function(e, t) {
                let n = e.get(a.n),
                    {
                        authenticatedUserId: r,
                        userId: o,
                        accountUserId: s
                    } = n;
                if (null == r || null == o || null == s) return;
                let l = {
                        accountId: t,
                        userId: r,
                        accountUserId: s
                    },
                    c = e => (0, i.d)(e, l) && !e.accountLoading && e.accountId === t && e.userId === o;
                if (!c(n)) return;
                let d = (0, i.e)(e, c),
                    u = new Set,
                    p = !1,
                    _ = () => {
                        p && 0 === u.size && d.abort()
                    };
                return {
                    userId: r,
                    analyticsUserId: o,
                    accountId: t,
                    accountUserId: s,
                    signal: d.signal,
                    isCurrent: () => !d.signal.aborted && c(e.get(a.n)),
                    retainTelemetry: e => {
                        let t;
                        if (d.signal.aborted) return void e.catch(() => void 0);
                        let n = Promise.race([e, new Promise(e => {
                            t = setTimeout(e, 1e4)
                        })]).catch(() => void 0).finally(() => {
                            clearTimeout(t), u.delete(n), _()
                        });
                        u.add(n)
                    },
                    dispose: () => {
                        p = !0, _()
                    }
                }
            },
            c: s
        })
    }),
    XCEe: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(576137), n.e(153631), n.e(362811), n.e(657809), n.e(512535), n.e(964209), n.e(260407)]).then(n.bind(n, "iAuu"))
            }
        })
    }),
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514247)]).then(n.bind(n, "shkb"))
            }
        })
    }),
    JLZd: (function(e, t, n) {
        var r = n("Cslg"),
            a = n("TNWb"),
            o = n("nlNF"),
            i = n("kAhA");
        n.d(t, {}, {
            a: function(e, t, n) {
                let s, l, c, d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                if ("u" < typeof IntersectionObserver) return;
                let u = e.get(r.n),
                    p = u.authenticatedAccountId;
                if (null == u.authenticatedUserId || null == u.userId || null == p) return;
                let _ = t.ownerDocument,
                    E = !1,
                    f = !1,
                    g = () => {
                        if (f) return;
                        let l = e.get(r.n);
                        l.authenticatedUserId !== u.authenticatedUserId || l.authenticatedAccountId !== u.authenticatedAccountId || l.userId !== u.userId || null != u.accountUserId && l.accountUserId !== u.accountUserId ? m() : (null == s && (s = (0, i.b)(e, p)), null == s || (s.isCurrent() ? !(!E || "visible" !== _.visibilityState || !(0, o.h)(e) || (0, a.c)() || !t.isConnected || t.closest('[aria-hidden="true"], [inert], [hidden]')) && t.checkVisibility({
                            visibilityProperty: !0,
                            opacityProperty: !0
                        }) && (f = !0, n(s), m()) : m()))
                    },
                    h = new IntersectionObserver(e => {
                        E = e.some(e => e.isIntersecting && e.intersectionRatio >= d && e.intersectionRect.width > 0 && e.intersectionRect.height > 0), g()
                    }, {
                        threshold: 0 === d ? [0, Number.EPSILON] : .5
                    }),
                    m = () => {
                        f = !0, h.disconnect(), l?.(), c?.(), _.removeEventListener("visibilitychange", g), s?.dispose()
                    };
                return (l = e.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(r.n), t(o.c), g()
                }), f) ? l() : (c = (0, a.e)(g), _.addEventListener("visibilitychange", g), h.observe(t)), m
            }
        })
    }),
    MfrC: (function(e, t, n) {
        var r = n("Q840"),
            a = n("Cslg"),
            o = n("OWtl");
        let i = (0, r.c)(o.a, e => {
            let {
                get: t
            } = e, {
                accountStructure: n,
                accountUserId: r
            } = t(a.n);
            return "personal" === n ? r?.split("__")[0] : r
        });

        function s(e, t) {
            let {
                accountId: n,
                userId: r,
                accountUserId: a
            } = t;
            return !e.authLoading && "chatgpt" === e.authMethod && e.authenticatedAccountId === n && e.authenticatedUserId === r && (null == e.accountId || e.accountId === n) && (null == a || e.accountUserId === a)
        }

        function l(e, t) {
            let n = new AbortController,
                r = e.watch(e => {
                    let {
                        get: r
                    } = e;
                    t(r(a.n)) || n.abort()
                });
            return n.signal.aborted ? r() : n.signal.addEventListener("abort", r, {
                once: !0
            }), n
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "request",
                    r = e.get(a.n),
                    o = r.authenticatedUserId,
                    c = r.accountUserId ?? null;
                if (null == o) return;
                let d = {
                        accountId: t,
                        userId: o,
                        accountUserId: c
                    },
                    u = e => s(e, d) && ("request" === n || !e.accountLoading && null != c);
                if (!u(r)) return;
                let p = l(e, u);
                return {
                    ...d,
                    connectorLinkOwnerId: e.get(i),
                    signal: p.signal,
                    isCurrent: () => !p.signal.aborted && u(e.get(a.n)),
                    dispose: () => p.abort()
                }
            },
            b: i,
            c: function(e, t) {
                return {
                    signal: t,
                    expectedIdentity: {
                        accountId: e.accountId,
                        userId: e.userId
                    },
                    assertRequestCurrent: () => {
                        if (t?.throwIfAborted(), !e.isCurrent()) throw new DOMException("Finance owner changed", "AbortError")
                    }
                }
            },
            d: s,
            e: l
        })
    }),
    s5P0: (function(e, t, n) {
        var r = n("zMIV"),
            a = n.n(r),
            o = n("UKCO"),
            i = n("lAQI"),
            s = n("pZ3S"),
            l = n("URlz"),
            c = n("O1lF"),
            d = n("Cslg"),
            u = n("dQRk"),
            p = n("cYqq"),
            _ = n("liTb"),
            E = n("tSEg"),
            f = n("PeqE"),
            g = n("XCEe"),
            h = n("FNWO"),
            m = n("O0Tw");
        let I = {
                accountId: i.C().optional(),
                connectorId: i.C().optional(),
                returnTo: i.C().optional(),
                signal: i.C().optional()
            },
            T = i.F({
                ...I,
                app: i.C().optional(),
                template: i.C().optional(),
                params: i.A({
                    ...I,
                    view: i.z("accountLinking")
                })
            }),
            b = i.F({
                type: i.z("event"),
                label: i.p(["ledger.connection_card_viewed", "ledger.connection_card_connect_clicked", "ledger.connection_card_dismissed"])
            }),
            v = i.F({
                type: i.z("count"),
                label: i.z("ledger.onboarding_syncing_visible")
            }),
            y = "manage_linked_accounts",
            A = i.F({
                name: i.z(y),
                arguments: i.F({
                    destination: i.z("credit")
                })
            });

        function C(e, t) {
            let {
                access: n,
                mcpAppHostAdapter: r,
                request: a,
                widget: o
            } = t, i = r.connectorTarget;
            if (!(0, _.k)(e.value) || null != a.chatGptThreadId || "internal://ledger" !== a.template || "credit" !== a.toolInput.destination || !0 !== o.is_verified_first_party || i?.connectorId !== f.a || !0 === r.isTombstone) return null;
            let s = i.targetId;
            return {
                access: n,
                linkId: s?.includes("/") ? null : s
            }
        }

        function w(e, t, n, r) {
            let o = !1;
            return {
                requestModal: null == t || 0 === t.length ? void 0 : async (r, o) => {
                    var i;
                    let l;
                    if (o.aborted || e.get(d.f) !== t) return !1;
                    let {
                        params: c
                    } = T.parse(r), u = e.scope.id === E.a.id ? e.value : void 0, p = null != u && (0, _.k)(u) ? (l = (i = u).pathname === _.e && null != i.orbitId ? (0, _.f)(i.orbitId) : i.pathname, `${l}${i.search??""}`) : void 0, {
                        openPersonalFinanceAccountLinking: f
                    } = await (0, g.a)();
                    if (o.aborted || e.get(d.f) !== t) return !1;
                    let h = a()(c, ["view", "key", "ref"]),
                        {
                            trackingContext: m = {}
                        } = h;
                    return s.z(m) && (h.trackingContext = {
                        entryPoint: "widget",
                        entrypoint: "creditScore" === c.initialTab ? "conversation" : void 0,
                        ...m
                    }), await f(e, {
                        accountId: t,
                        accountLinkingFlowParams: h,
                        afterLink: null == p ? {
                            kind: "stayInPicker",
                            returnTo: n
                        } : {
                            kind: "returnToChat",
                            returnTo: p
                        },
                        signal: o
                    }) && !o.aborted && e.get(d.f) === t
                },
                sendInstrument: n => {
                    let a = b.safeParse(n);
                    if (a.success) {
                        r?.widget.is_verified_first_party !== !0 || r.mcpAppHostAdapter.isTombstone || null == t || e.get(d.f) !== t || (0, p.a)(e, n, a.data.label, {
                            remote_plugin_id: f.a,
                            message_id: r.request.sourceMessageId,
                            conversation_id: e.get(u.j, r.request.chatGptThreadId)
                        });
                        return
                    }
                    if (v.safeParse(n).success) {
                        o || null == r || (o = !0, (0, m.a)(e, r));
                        return
                    }(0, h.a)(e, n)
                }
            }
        }
        n.d(t, {}, {
            a: w,
            b: function(e, t, n, r) {
                let a = w(e, t, n, r);
                if (null == r) return {
                    finance: a
                };
                let i = C(e, r);
                if (null == i) return {
                    finance: a
                };
                let {
                    mcpAppHostAdapter: s
                } = r;
                return {
                    finance: a,
                    handleRequest: (t, n, r, a) => r?.isVerifiedFirstParty === !0 && "internal://ledger" === r.originResourceUri && "tools/call" === t.method && A.safeParse(t.params).success ? async function(e, t, n) {
                        let {
                            access: r,
                            linkId: a
                        } = t;
                        n?.throwIfAborted(), r.assertActive();
                        let {
                            accountId: i,
                            userId: s
                        } = (0, l.a)(e, r.context);
                        if (null == a || null == i || null == s) throw Error("The Dot Credit connection is unavailable");
                        let d = new AbortController,
                            u = null == n ? d.signal : AbortSignal.any([d.signal, n]),
                            p = e.watch(e => {
                                let {
                                    get: t
                                } = e;
                                "current" !== r.status(t) && d.abort()
                            }),
                            _ = () => {
                                u.throwIfAborted(), r.assertActive()
                            };
                        try {
                            let e = await (0, c.b)({
                                id: crypto.randomUUID(),
                                headers: {
                                    "ChatGPT-Account-ID": i,
                                    [o.dc]: i,
                                    "OAI-Product-Sku": "AEON"
                                },
                                expectedIdentity: {
                                    accountId: i,
                                    userId: s
                                },
                                signal: u,
                                assertRequestCurrent: _
                            }, {
                                method: "tools/call",
                                params: {
                                    name: y,
                                    arguments: {
                                        destination: "credit"
                                    },
                                    _meta: {
                                        _codex_apps: {
                                            resource_uri: `/${f.a}/${a}/${y}`
                                        },
                                        "x-codex-turn-metadata": {
                                            source: "mcp_app"
                                        }
                                    }
                                }
                            });
                            return _(), e
                        } finally {
                            p()
                        }
                    }(e, i, n) : s.handleRequest(t, n, r, a)
                }
            },
            c: function(e, t) {
                let {
                    viewParams: n
                } = t.request, r = C(e, t);
                return null == r ? n : {
                    ...s.z(n) ? n : {},
                    canOpenCredit: null != r.linkId && null != r.access.accountId && e.get(d.f) === r.access.accountId && "current" === r.access.status(e.get)
                }
            }
        })
    }),
    FNWO: (function(e, t, n) {
        var r = n("RjXy"),
            a = n("lAQI"),
            o = n("PFjh"),
            i = n("yGJW"),
            s = n("PeqE");
        let l = {
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
            c = a.F({
                account_section: a.p(["banking", "investments", "credit_cards", "real_estate", "loans", "payroll", "other"]).optional().catch(void 0),
                link_status: a.p(["linked", "error", "disconnected"]).optional().catch(void 0),
                surface: a.p(["ledger_profile", "mattress_accounts_tab", "unknown", "web", "native"]).optional().catch(void 0),
                device_type: a.p(["mobile", "tablet", "desktop", "unknown"]).optional().catch(void 0),
                selection_source: a.p(["profile", "snapshot"]).optional().catch(void 0),
                view_mode: a.p(["pip", "inline", "fullscreen", "modal", "sidebar", "unknown"]).optional().catch(void 0),
                reason: a.p(["close_button", "follow_up", "remove_success"]).optional().catch(void 0),
                item_count: a.E().int().nonnegative().max(0x7fffffff).optional().catch(void 0),
                result: a.p(["empty", "non_empty"]).optional().catch(void 0),
                provider: a.z("plaid").optional().catch(void 0),
                plaidExitStatus: a.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0),
                plaidErrorCode: a.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0)
            }),
            d = {
                label: a.L().startsWith("ledger."),
                tags: a.g(a.F({
                    key: a.L(),
                    value: a.L()
                })).optional()
            },
            u = a.m("type", [a.F({
                type: a.z("event"),
                label: d.label,
                payload: c.optional().catch(void 0)
            }), a.F({
                type: a.z("count"),
                ...d,
                count: a.E().optional()
            }), a.F({
                type: a.z("hist"),
                ...d,
                value: a.E()
            }), a.F({
                type: a.z("error")
            })]);
        n.d(t, {}, {
            a: function(e, t) {
                let n = u.safeParse(t);
                if (!n.success) return;
                let a = n.data;
                if ("event" === a.type) {
                    let t = l[a.label];
                    if (null == t) return;
                    (0, i.a)(e, r.d, {
                        eventType: t,
                        accountSection: a.payload?.account_section,
                        linkStatus: a.payload?.link_status,
                        surface: a.payload?.surface,
                        deviceType: a.payload?.device_type,
                        selectionSource: a.payload?.selection_source,
                        viewMode: a.payload?.view_mode,
                        reason: a.payload?.reason,
                        itemCount: a.payload?.item_count,
                        result: a.payload?.result,
                        provider: a.payload?.provider,
                        plaidExitStatus: a.payload?.plaidExitStatus,
                        plaidErrorCode: a.payload?.plaidErrorCode
                    });
                    return
                }
                let c = {
                        ..."tags" in a ? Object.fromEntries(a.tags?.map(e => {
                            let {
                                key: t,
                                value: n
                            } = e;
                            return [t, n]
                        }) ?? []) : {},
                        attribution_id: s.a,
                        name: "ledger",
                        client_type: "chatgpt-web"
                    },
                    d = e.get(o.a);
                switch (a.type) {
                    case "count":
                        d.count("ecosystem", a.label, c, a.count);
                        break;
                    case "hist":
                        d.hist("ecosystem", a.label, c, a.value);
                        break;
                    case "error":
                        d.count("ecosystem", "app.error", c)
                }
            }
        })
    }),
    O0Tw: (function(e, t, n) {
        n.d(t, {
            a: () => I,
            b: () => b
        });
        var r = n("QosV");
        let a = "ledger_spend_by_category_widget",
            o = "ledger_portfolio_distribution_widget";

        function i(e) {
            return null !== e && "object" == typeof e && !Array.isArray(e)
        }

        function s(e) {
            if ("object" == typeof e && null != e && "top_categories" in e) return Array.isArray(e.top_categories) ? 0 === e.top_categories.length ? "spend_empty" : "spend_summary" : void 0
        }
        var l = n("RjXy"),
            c = n("AuIy"),
            d = n("zd8w"),
            u = n("Cslg"),
            p = n("OOaz"),
            _ = n("dQRk"),
            E = n("yGJW"),
            f = n("PeqE"),
            g = n("kAhA"),
            h = n("JLZd");

        function m(e, t, n) {
            let r = e.get(_.N, t);
            if (null == r) return;
            let a = (0, c.b)({
                mapping: r,
                current_node: n
            }).find(e => "user" === e.author.role);
            if (a?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(_.bb, t)) return r[n]?.message
        }

        function I(e, t) {
            let {
                access: n
            } = t, {
                chatGptThreadId: r,
                sourceMessageId: a
            } = t.request;
            if (!0 !== t.widget.is_verified_first_party || !0 === t.mcpAppHostAdapter.isTombstone || null == t.mcpAppHostAdapter.assertActive || !("connectorId" in n.serverIdentity) || n.serverIdentity.connectorId !== f.a || null == n.uiUserId || null == n.accountId || null == r || !a) return;
            try {
                n.assertActive(), t.mcpAppHostAdapter.assertActive()
            } catch {
                return
            }
            let o = e.get(_.j, r);
            if (null == o) return;
            let i = m(e, r, a);
            if (i?.author.role !== "assistant" && i?.author.role !== "tool") return;
            let s = (0, g.b)(e, n.accountId);
            if (null != s) try {
                s.userId === n.uiUserId && s.isCurrent() && T(e, s, {
                    conversationId: o,
                    messageId: a,
                    widgetName: "ledger_connected_institutions",
                    widgetResultKind: "syncing"
                })
            } finally {
                s.dispose()
            }
        }

        function T(e, t, n) {
            t.retainTelemetry(new Promise(r => {
                (0, E.a)(e, l.h, {
                    surfaceName: "chat",
                    ...n
                }, () => r(), void 0, {
                    expectedUserId: t.analyticsUserId,
                    expectedAccountId: t.accountId,
                    eventCreatedAt: new Date().toISOString()
                })
            }))
        }

        function b(e, t, n) {
            let l, c, u, _, E, f = (0, r.c)(15),
                g = (0, d.useRef)(null);
            f[0] !== e || f[1] !== n ? (l = function(e, t) {
                let {
                    scope: n,
                    turn: r,
                    sourceMessageId: i,
                    sharedPostId: s,
                    sharedConversationId: l
                } = e, {
                    widgetName: c,
                    component: d,
                    contentReferenceStartIndex: u,
                    externalResourcesBlocked: _
                } = t;
                if (!(null == c || c !== a && c !== o || null == d && "ledger_spend_by_category_widget" !== c || null == i || null == r || (0, p.e)(r.conversationId)) && "primary" === r.conversationType && !1 !== r.isPresented && !1 !== r.trackShownImpressions && !r.isReadOnly && !r.shouldBlockExternalEgress && !r.renderRestrictedWidgets && !r.renderRestrictedModelResponses && !_ && null == l && null == s && "tpp" !== r.conversationOrigin && "flora" !== r.conversationOrigin && "chatgpt-thread" === n.value.routeKind && n.value.conversationId === r.conversationId && null != u && Number.isInteger(u) && !(u < 0) && r.contentReferences.some((e, t) => "dil" === e.type && e.name === c && e.start_idx === u && (r.contentReferenceMessageIds?.[t] ?? r.messageId) === i)) return {
                    key: JSON.stringify([r.conversationId, i, u, c, d]),
                    conversationId: r.conversationId,
                    messageId: i,
                    contentReferenceStartIndex: u,
                    widgetName: c,
                    component: d
                }
            }(e, n), f[0] = e, f[1] = n, f[2] = l) : l = f[2];
            let h = l,
                m = h?.key,
                {
                    scope: I
                } = e;
            f[3] !== t || f[4] !== h || f[5] !== I ? (c = () => {
                let e = t.current;
                if (null != e && null != h) return null == g.current && (g.current = v()), g.current.attach(I, e, h)
            }, f[3] = t, f[4] = h, f[5] = I, f[6] = c) : c = f[6];
            let T = (0, d.useEffectEvent)(c);
            return f[7] !== T ? (u = () => T(), f[7] = T, f[8] = u) : u = f[8], f[9] !== m || f[10] !== I ? (_ = [I, m], f[9] = m, f[10] = I, f[11] = _) : _ = f[11], (0, d.useEffect)(u, _), f[12] !== h || f[13] !== m ? (E = null == h ? void 0 : (e, t) => {
                null == g.current && (g.current = v()), g.current.commit(m, function(e, t, n, r) {
                    let l;
                    if (e !== a || t?.component !== "LedgerSpendByCategoryWidget" || n?.has_connected_accounts === !1 || !Array.isArray(n?.month_views) || n.month_views.length <= 1) {
                        var c = e,
                            d = t,
                            u = n;
                        if (c === o) return d?.component !== "LedgerPortfolioDistributionWidget" || void 0 === u ? void 0 : !1 === u.has_connected_accounts ? "no_accounts" : !1 === u.has_holdings ? "portfolio_empty" : !0 === u.has_holdings ? "portfolio_summary" : void 0;
                        if (c !== a || void 0 !== d && "LedgerSpendByCategoryWidget" !== d.component || void 0 === u) return;
                        if (void 0 !== d && !1 === u.has_connected_accounts) return "no_accounts";
                        let r = u.month_views,
                            i = u.selected_month_index;
                        return Array.isArray(r) && ("number" == typeof i || "bigint" == typeof i) && ("number" != typeof i || Number.isInteger(i)) && !(i < 0) && !(i >= r.length) ? s(r[Number(i)]) : void 0
                    }
                    let p = function(e) {
                        let t, n = [e];
                        for (; n.length > 0;) {
                            let e = n.pop();
                            if (Array.isArray(e)) n.push(...e);
                            else if (i(e)) {
                                if ("select" === e.type && i(e.props) && "selected_month" === e.props.name) {
                                    if (void 0 !== t || "string" != typeof e.props.value) return;
                                    t = e.props.value
                                }
                                Array.isArray(e.children) && n.push(...e.children)
                            }
                        }
                        return t
                    }(r);
                    if (void 0 !== p) {
                        for (let e of n.month_views)
                            if (i(e) && e.option_value === p) {
                                if (void 0 !== l) return;
                                l = e
                            } return s(l)
                    }
                }(h.widgetName, null == h.component ? void 0 : {
                    component: h.component
                }, e, t))
            }, f[12] = h, f[13] = m, f[14] = E) : E = f[14], E
        }

        function v() {
            let e, t;
            return {
                commit: (n, r) => {
                    null != n && (e = {
                        key: n,
                        kind: r
                    }, t?.key === n && t.observation.update(r))
                },
                attach: (n, r, a) => {
                    var o, i, s;
                    let l, d, p, _, E, f, I, b, v, y, A = (o = n, i = r, s = a, E = o.get(u.n), f = () => {
                        let e = m(o, s.conversationId, s.messageId);
                        return (e?.author.role === "assistant" || e?.author.role === "tool") && e.metadata?.is_visually_hidden_from_conversation !== !0 && e.metadata?.reasoning_status == null && e.metadata?.model_dil_v2 == null && (0, c.s)((0, c.s)(e.metadata?.model_dil)?.dil)?.type == null
                    }, I = new Set, b = !1, v = () => {
                        b = !0, p?.(), _?.(), l?.dispose()
                    }, y = () => {
                        if (p?.(), p = void 0, b || !l?.isCurrent() || !f()) return;
                        let e = d;
                        null == e || I.has(e) || (p = (0, h.a)(o, i, () => {
                            !(b || d !== e || !l?.isCurrent() || I.has(e)) && f() && (I.add(e), T(o, l, {
                                widgetName: s.widgetName,
                                conversationId: s.conversationId,
                                messageId: s.messageId,
                                contentReferenceStartIndex: s.contentReferenceStartIndex,
                                widgetResultKind: e
                            }))
                        }, 0))
                    }, _ = o.watch(e => {
                        let {
                            get: t
                        } = e, n = t(u.n);
                        n.authenticatedUserId === E.authenticatedUserId && n.userId === E.userId && n.authenticatedAccountId === E.authenticatedAccountId && (null == E.accountUserId || n.accountUserId === E.accountUserId) && (null == l || l.isCurrent()) ? b || null != l || null == E.authenticatedAccountId || (l = (0, g.b)(o, E.authenticatedAccountId), y()) : v()
                    }), b && _(), {
                        update: e => {
                            d !== e && (d = e, y())
                        },
                        dispose: v
                    });
                    return t = {
                        key: a.key,
                        observation: A
                    }, e?.key === a.key && A.update(e.kind), () => {
                        t?.observation === A && (t = void 0), A.dispose()
                    }
                }
            }
        }
    }),
    o62A: (function(e, t, n) {
        var r = n("i5ac"),
            a = n.n(r),
            o = n("UKCO"),
            i = n("Vrnh"),
            s = n("P61R"),
            l = n("Dgwo"),
            c = n("tl5a"),
            d = n("KJ1J"),
            u = n("tTIR"),
            p = n("VvpR"),
            _ = n("PYah"),
            E = n("X6Vn"),
            f = n("mdWu"),
            g = n("FPpy"),
            h = n("Yshm"),
            m = n("qZWE"),
            I = n("xSzB"),
            T = n("joT6"),
            b = n("loz7"),
            v = n("uzkw"),
            y = n("EEop"),
            A = n("cLdu"),
            C = n("ueue"),
            w = n("tSEg");

        function N(e) {
            return (0, A.i)(e.hostId) && R(e)
        }

        function R(e) {
            let {
                mcpAppScope: t,
                access: n,
                server: r
            } = e, a = "connectorId" in n.serverIdentity ? n.serverIdentity.connectorId : null;
            return "internal://plugin-management-suggestions" === t.originResourceUri && (0, d.f)(r) && a === s.a && t.codexAppsToolScope?.connectorId === a
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    conversationId: n,
                    hostId: r,
                    installPlugin: s,
                    mcpAppScope: d,
                    navigate: R,
                    access: P,
                    server: S,
                    sessionId: x,
                    sourceMcpAppId: D,
                    toolResult: G
                } = e;
                if (!N({
                        hostId: r,
                        mcpAppScope: d,
                        access: P,
                        server: S
                    })) return null;
                let L = {
                        hostId: r,
                        threadId: n
                    },
                    O = (0, I.f)(G),
                    F = h.c.safeParse(O?._meta ?? O).data,
                    M = (e, r, a) => {
                        let {
                            accountId: o,
                            uiUserId: i
                        } = P;
                        null == o || null == i || t.get(w.j) || t.get(m.s, x)?.sourceMcpAppId !== D || (0, v.a)({
                            connectorId: r,
                            conversationId: n,
                            eventType: a,
                            expectedIdentity: {
                                accountId: o,
                                userId: i
                            },
                            pluginId: e,
                            productSurface: "CODEX"
                        })
                    };
                return (0, g.a)({
                    scope: t,
                    hostId: r,
                    navigate: R,
                    toolResult: G,
                    onSuggestionInteraction: M,
                    connect: async (e, a) => {
                        let d = e.plugin_id;
                        try {
                            let g = t.get(c.dc, L)?.latestTurnId,
                                h = !1,
                                m = !1;
                            if (!s({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: o.cd,
                                    remotePluginId: d
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: n
                                    },
                                    hostId: r,
                                    marketplaceAnalytics: a,
                                    onError: () => {
                                        m = !0
                                    },
                                    onSuccess: () => {
                                        h = !0
                                    },
                                    origin: "in_conversation_elicitation",
                                    productContext: "codex",
                                    requiresAppSetup: !0
                                })) return {
                                pluginId: d,
                                status: "unavailable"
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, n = t(b.o);
                                    return "closed" === n.kind || n.hostId !== r
                                }), m) return {
                                pluginId: d,
                                status: "retryable_error"
                            };
                            if (!h) return {
                                pluginId: d,
                                status: "cancelled"
                            };
                            let I = (0, l.b)(t, r);
                            if (!(0, A.i)(r)) {
                                let e = await I.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: d,
                                    status: "retryable_error"
                                }
                            }
                            let v = t.query.snapshot(y.l, {
                                hostId: r,
                                marketplacePath: null,
                                pluginName: d,
                                productContext: "codex",
                                remoteMarketplaceName: o.cd
                            });
                            await v.invalidate({
                                refetchType: "none"
                            });
                            let [w, N] = await Promise.all([v.getOrFetch(), (0, _.a)(t, r, n)]);
                            if (!w.summary.installed || !w.summary.enabled || null != w.summary.remotePluginId && w.summary.remotePluginId !== d || !w.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return N.has(t)
                                }) || (await (0, T.a)({
                                    scope: t,
                                    authPolicy: w.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: r,
                                    plugin: (0, C.c)(w),
                                    queryClient: t.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: d,
                                status: "connection_required"
                            };
                            if (void 0 === g || (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, r = t(c.dc, L);
                                    return null != r && (r.latestTurnId !== g || r.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n) && !t(E.c))
                                }), await I.getLatestTurnId(n) !== g)) return {
                                pluginId: d,
                                status: "connected"
                            };
                            if (!(0, u.b)(n)) return {
                                pluginId: d,
                                status: "retryable_error"
                            };
                            try {
                                await (0, p.c)(t, r, n, {
                                    turnTrigger: "plugin_suggestion_connected",
                                    additionalContext: (0, i.c)({
                                        connectedPlugin: e.display_name
                                    })
                                })
                            } finally {
                                (0, u.a)(n)
                            }
                            return {
                                pluginId: d,
                                status: "connected"
                            }
                        } catch {
                            return {
                                pluginId: d,
                                status: "retryable_error"
                            }
                        }
                    },
                    decline: async e => {
                        let o = e => !e(w.j) && e(m.s, x)?.sourceMcpAppId === D,
                            s = h.d.safeParse(t.get(m.x, x) ?? {});
                        if (!o(t.get) || !s.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let d = new Set(s.data.connectedPluginIds),
                            _ = new Set(s.data.declinedPluginIds),
                            E = a()(e, "plugin_id").filter(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return !d.has(t) && !_.has(t)
                            });
                        if (0 === E.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let g = t.get(c.dc, L)?.latestTurnId,
                            I = E.map(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return t
                            });
                        for (let {
                                plugin_id: e
                            }
                            of E) M(e, F?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(m.x, x, {
                            ...s.data,
                            declinedPluginIds: [..._, ...I]
                        });
                        try {
                            if (void 0 === g) return {
                                status: "declined",
                                declinedPluginIds: I
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, r = t(c.dc, L);
                                    return !o(t) || null != r && (r.latestTurnId !== g || r.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n))
                                }), await (0, l.b)(t, r).getLatestTurnId(n) === g && o(t.get) && (0, u.b)(n)) try {
                                await (0, p.c)(t, r, n, {
                                    turnTrigger: "plugin_suggestion_declined",
                                    additionalContext: (0, i.c)({
                                        declinedPlugins: E.map(e => {
                                            let {
                                                display_name: t
                                            } = e;
                                            return t
                                        })
                                    })
                                })
                            } finally {
                                (0, u.a)(n)
                            }
                        } catch {}
                        return {
                            status: "declined",
                            declinedPluginIds: I
                        }
                    }
                })
            },
            b: R,
            c: N
        })
    }),
    KMWy: (function(e, t, n) {
        var r = n("UKCO");
        let a = (0, n("Nwp9").b)(r.Uc, {}, {
            coerceStoredValue: e => r.hj.parse(e)
        });
        n.d(t, {}, {
            a: function(e, t) {
                return (t ? r.ij.options : r.kj).filter(t => e.permissions?.[t] != null)
            },
            b: function(e, t, n) {
                let a, o = e.map(e => r.jj[e].feature),
                    i = [...new Set(["fullscreen", "encrypted-media", ...t ?? [], ...o, ...n ? ["local-network-access"] : []])];
                return a = null != t || o.length > 0 ? i.map(e => `${e} *`).join("; ") : n ? "encrypted-media *; local-network-access" : "encrypted-media *", {
                    frameFeatures: i,
                    iframeAllow: a
                }
            },
            c: a
        })
    }),
    ioMY: (function(e, t, n) {
        var r = n("lAQI"),
            a = n("sS8e");
        n.d(t, {}, {
            a: {
                createAlreadyPendingError: () => (0, a.c)("A follow-up message is already awaiting confirmation", -32e3),
                createCanceledError: () => (0, a.c)("Follow-up message was not confirmed", -32e3)
            },
            b: async function(e, t, n, a) {
                let {
                    text: o
                } = r.F({
                    text: r.L().min(1)
                }).parse(e), i = await n({
                    prompt: o
                });
                a.throwIfAborted(), await t({
                    text: i
                })
            }
        })
    }),
    QagL: (function(e, t, n) {
        let r, a, o;
        n.d(t, {
            a: () => nu,
            b: () => np
        });
        var i = n("ABep"),
            s = n("QosV"),
            l = n("Q840"),
            c = n("zd8w"),
            d = n("URlz"),
            u = n("o62A"),
            p = n("HwRo"),
            _ = n("ntKy"),
            E = n("tSEg"),
            f = n("hZax"),
            g = n("WFY2"),
            h = n("SNez"),
            m = n("Vjzf"),
            I = n("kSHG"),
            T = n("bTvG"),
            b = n("iRMi"),
            v = n("t0Nb"),
            y = n("kUij"),
            A = n("fD5v"),
            C = n("OppN"),
            w = n("WWo4"),
            N = n("zmIi"),
            R = n("SZCv"),
            P = n.n(R),
            S = n("UKCO"),
            x = n("AuIy"),
            D = n("F6B1"),
            G = n("IhIa"),
            L = n("v7qY"),
            O = n("Wf1j"),
            F = n("rEML"),
            M = n("lAQI"),
            k = n("KJ1J");
        let U = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var W = n("PFjh"),
            H = n("yGJW");
        let V = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            j = M.F({
                type: M.p(["count", "hist"]),
                label: M.p(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: M.z(1).optional(),
                value: M.E().nonnegative().optional(),
                tags: M.g(M.F({
                    key: M.L(),
                    value: M.L()
                })).max(8)
            }),
            Y = M.F({
                stage: M.p(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: M.z("ads"),
                checkout_type: M.z("manual"),
                load_metric_version: M.z("1").optional()
            }),
            z = M.F({
                phase: M.p(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: M.p(["create", "edit"]),
                outcome: M.p(["success", "error", "requires_action"]),
                failure_category: M.p(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            q = M.p(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            B = {
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
            K = M.g(M.F({
                key: M.L(),
                value: M.R().optional()
            }).nullable().catch(null)),
            $ = M.m("type", [M.F({
                type: M.z("event"),
                label: q,
                payload: M.F({
                    widget: M.p(V.widget),
                    view_session_id: M.T().optional().catch(void 0),
                    view: M.p(V.view).optional().catch(void 0),
                    action: M.p(V.action).optional().catch(void 0),
                    outcome: M.p(["closed", "denied", "missing_response", "error"]).optional().catch(void 0),
                    step: M.p(V.step).optional().catch(void 0),
                    source: M.p(V.source).optional().catch(void 0),
                    billing_status: M.p(["required", "complete", "unknown"]).optional().catch(void 0),
                    logo_status: M.p(["missing", "ready", "in_review", "replacement_in_review", "review_rejected", "unknown"]).optional().catch(void 0),
                    account_review_status: M.p(["approved", "in_review", "rejected", "unknown"]).optional().catch(void 0),
                    attention_reason: M.p(["unsupported_country", "review_rejected"]).optional().catch(void 0),
                    billing_recovery: M.p(["unsupported_country", "external"]).optional().catch(void 0),
                    billing_in_sidebar: M.j().optional().catch(void 0),
                    logo_handoff_failed: M.j().optional().catch(void 0),
                    step_number: Q(1),
                    step_count: Q(),
                    preview_kind: M.p(["draft", "existing"]).optional().catch(void 0),
                    reason: M.p(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: Q(1),
                    page: Q(1),
                    page_count: Q(1),
                    page_size: Q(1),
                    total_count: Q(),
                    next_page: Q(1)
                })
            }), M.F({
                type: M.z("count"),
                label: q,
                count: M.z(1).optional(),
                tags: K
            })]);

        function Q() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return M.E().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var X = n("StMt"),
            Z = n("tl5a"),
            J = n("sM3V"),
            ee = n("GAkE"),
            et = n("ZU27"),
            en = n("DiD0"),
            er = n("SK3E"),
            ea = (n("Sbyb"), n("TSib")),
            eo = n("ipIJ"),
            ei = n("uoRg"),
            es = n("Y3OQ"),
            el = n("WBiY"),
            ec = n("Ot7V"),
            ed = n("eT6w"),
            eu = n("PeqE"),
            ep = n("ywSA"),
            e_ = n("Cslg"),
            eE = n("qZWE"),
            ef = n("liTb"),
            eg = n("s5P0");

        function eh(e) {
            return (0, ef.k)(e.value)
        }
        var em = n("gMJf"),
            eI = n("eB3o"),
            eT = n("ZG9f");
        r = (0, eI._)(Symbol.dispose);
        class eb {
            #e = new ev;
            #t;
            constructor(e, t) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new eT.a(this.#e, e.createRpcStub(t))
            }
            setNotificationSender(e) {
                this.#e.setNotificationSender(e)
            }
            handleRequest(e) {
                let {
                    message: t
                } = y.f.parse(e);
                return this.#e.receiveMessage(t), Promise.resolve({})
            } [r]() {
                this.#t(), this.#e[Symbol.dispose]()
            }
        }
        a = (0, eI._)(Symbol.dispose);
        class ev {
            #n = null;
            #r = [];
            #a = null;
            #o = null;
            setNotificationSender(e) {
                this.#o = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#o ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#o({
                    method: y.b,
                    params: {
                        message: e
                    }
                }), Promise.resolve())
            }
            receive() {
                if (null != this.#n) return Promise.reject(this.#n);
                let e = this.#r.shift();
                return null != e ? Promise.resolve(e) : new Promise((e, t) => {
                    this.#a = {
                        reject: t,
                        resolve: e
                    }
                })
            }
            receiveMessage(e) {
                if (null != this.#n) throw this.#n;
                let t = this.#a;
                null == t ? this.#r.push(e) : (this.#a = null, t.resolve(e))
            }
            abort(e) {
                null == this.#n && (this.#n = e instanceof Error ? e : Error("The first-party plugin bridge was disconnected."), this.#r.length = 0, this.#o = null, this.#a?.reject(this.#n), this.#a = null)
            } [a]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var ey = n("ReGc"),
            eA = n("rP0s");
        let eC = M.F({
            prompt: M.p(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var ew = n("FgIX"),
            eN = n("g25Y"),
            eR = n("X6Vn"),
            eP = n("yI91"),
            eS = n("ripK"),
            ex = n("bnxy"),
            eD = n("GaA7");
        let eG = "ui/openai/find",
            eL = M.F({
                method: M.z(eG),
                params: M.F({
                    enabled: M.j()
                })
            }),
            eO = M.F({
                method: M.z("ui/notifications/openai/find"),
                params: M.F({
                    command: M.p(["open", "next", "previous"])
                })
            });
        o = (0, eI._)(Symbol.dispose);
        class eF {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: r,
                    initId: a,
                    signal: o,
                    notify: i
                } = t, s = eL.safeParse(e);
                if (!s.success || o.aborted || eD.a?.mcpAppSandbox == null || null == i || null == a) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = eD.a.mcpAppSandbox.registerFindTarget({
                    sandboxId: r,
                    initId: a
                }, async e => n.ownerDocument.activeElement === n && (await i({
                    method: eO.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [o]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var eM = n("ioMY"),
            ek = n("iIHp"),
            eU = n("v7ut"),
            eW = n("sF0J"),
            eH = n("QnVT"),
            eV = n("sS8e"),
            ej = n("NJrC"),
            eY = n("LGZt"),
            ez = n("MefB"),
            eq = n("WYvZ"),
            eB = n("geS6"),
            eK = n("Dgwo"),
            e$ = n("a4MG");
        async function eQ(e) {
            let {
                scope: t,
                hostId: n,
                mcpServerStatuses: r,
                server: a,
                threadId: o,
                detail: i = "toolsAndAuthOnly"
            } = e, s = r?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === a
            }) ?? null;
            if (null == o && null != s) return s;
            let l = (null == o ? await (0, eK.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(e$.r, {
                hostId: n,
                threadId: o,
                serverName: a,
                detail: i
            })).data.find(e => {
                let {
                    name: t
                } = e;
                return t === a
            }) ?? null;
            if (null == l) throw (0, eV.c)(`MCP server not found: ${a}`, -32e3);
            return l
        }

        function eX(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var eZ = n("DRR4"),
            eJ = n("SRbQ"),
            e0 = n("TL6G");
        class e1 {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = e0.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, r] of this.subscriptions)
                            if (r.hostSubscriptionId === t.subscriptionId) {
                                e(e2(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (g.a.info("App event subscription terminated", {
                                    safe: {
                                        hostSubscriptionId: t.subscriptionId
                                    }
                                }), this.subscriptions.delete(n));
                                break
                            }
                    }
                });
                return () => {
                    this.notificationSink === e && (this.notificationSink = null), t()
                }
            }
            async setConversation(e, t) {
                (this.params.conversationId !== e || this.params.supported !== t) && (g.a.info("Updating app event subscriptions for conversation", {
                    safe: {
                        subscriptionCount: this.subscriptions.size,
                        supported: t,
                        previousConversationId: this.params.conversationId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), this.params.conversationId = e, this.params.supported = t, await Promise.all([...this.subscriptions.values()].map(async e => {
                    let n = e.hostSubscriptionId;
                    e.hostSubscriptionId = t ? crypto.randomUUID() : null, await Promise.all([null == n ? void 0 : this.stop(n), this.start(e, {
                        notifyTermination: !0
                    })])
                })))
            }
            async subscribe(e) {
                let t = e.subscriptionId;
                if (!this.params.supported || null == this.params.conversationId || null == this.notificationSink) throw Object.assign(Error("MCP event subscriptions are unavailable"), {
                    code: -32601
                });
                if (this.subscriptions.has(t)) throw Object.assign(Error("MCP event subscription already exists"), {
                    code: -32602
                });
                let n = {
                    params: e,
                    hostSubscriptionId: crypto.randomUUID()
                };
                return this.subscriptions.set(t, n), await this.start(n), {}
            }
            async start(e) {
                let {
                    notifyTermination: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    hostSubscriptionId: n,
                    params: r
                } = e, {
                    conversationId: a
                } = this.params;
                if (null == n || null == a) return;
                let {
                    subscriptionId: o
                } = r, i = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: a,
                    event: r.name,
                    connectorId: r.connectorId,
                    linkId: r.linkId,
                    widgetSubscriptionId: o,
                    hostSubscriptionId: n
                };
                try {
                    let e = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.a.info("Starting app event subscription", {
                            safe: {
                                conversationId: i.conversationId,
                                connectorId: i.connectorId,
                                linkId: i.linkId,
                                widgetSubscriptionId: i.widgetSubscriptionId,
                                hostSubscriptionId: i.hostSubscriptionId
                            },
                            sensitive: {
                                event: i.event,
                                hostId: i.hostId,
                                server: i.server
                            }
                        });
                        let t = (0, eJ.a)(e, await (0, eK.b)(this.params.scope, this.params.hostId).getFollowUpContext(a), !1);
                        await this.params.scope.get(Z.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
                            _meta: {
                                "x-codex-turn-metadata": {
                                    mcp_request_meta: {
                                        link_id: r.linkId,
                                        selected_connector_ids: [r.connectorId]
                                    }
                                }
                            },
                            arguments: r.arguments,
                            name: r.name,
                            server: this.params.server,
                            subscriptionId: n,
                            threadId: a
                        }, {
                            timeoutMs: 95e3,
                            threadAccess: t?.threadAccess
                        }), g.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eJ.e)(e)
                    }
                } catch (r) {
                    if (g.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            },
                            sensitive: {
                                error: r
                            }
                        }), this.subscriptions.get(o) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(o), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(e2({
                        method: "notifications/events/terminated"
                    }, o)) : void 0]), r
                }
                if ((this.subscriptions.get(o) !== e || e.hostSubscriptionId !== n) && (await this.stop(n).catch(() => {}), !this.subscriptions.has(o))) throw Error("MCP event subscription closed during startup")
            }
            async unsubscribe(e) {
                let t = this.subscriptions.get(e)?.hostSubscriptionId;
                return this.subscriptions.delete(e), null != t && await this.stop(t), {}
            }
            async clear() {
                let e = [...this.subscriptions.values()];
                this.subscriptions.clear(), await Promise.all(e.map(async e => {
                    let {
                        hostSubscriptionId: t
                    } = e;
                    return null == t ? void 0 : this.stop(t)
                }))
            }
            async stop(e) {
                g.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(Z.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw g.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), g.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function e2(e, t) {
            let n = e.params ?? {},
                r = "object" != typeof n._meta || null == n._meta || Array.isArray(n._meta) ? {} : n._meta;
            return {
                ...e,
                params: {
                    ...n,
                    _meta: {
                        ...r,
                        "io.modelcontextprotocol/subscriptionId": t
                    }
                }
            }
        }
        var e3 = n("whdX");
        let e6 = new Map;
        class e5 {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            setConversation(e) {
                return this.enqueue(async () => {
                    let t = this.params.conversationId;
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, eK.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = e0.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (g.a.debug("Received app resource update", {
                        safe: {
                            mcpAppId: this.params.mcpAppId,
                            conversationId: this.params.conversationId
                        },
                        sensitive: {
                            hostId: this.params.hostId,
                            server: this.params.server,
                            uri: t.notification.params.uri
                        }
                    }), e(t.notification))
                });
                return () => {
                    this.isNotificationSinkConnected = !1, t()
                }
            }
            subscribe(e, t) {
                return this.enqueue(async () => {
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw Object.assign((0, eV.c)("MCP resource subscriptions are unavailable", -32601), {
                        name: "McpResourceSubscriptionsUnavailableError"
                    });
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw g.a.warning("Failed to subscribe to app resource updates", {
                            safe: {
                                mcpAppId: this.params.mcpAppId
                            },
                            sensitive: {
                                hostId: this.params.hostId,
                                server: this.params.server,
                                uri: e,
                                error: t
                            }
                        }), this.subscriptions.delete(e), t
                    }
                    return {}
                })
            }
            unsubscribe(e, t) {
                return this.enqueue(async () => {
                    t?.throwIfAborted(), this.getAuthorizedWatchPathOverride(e);
                    let n = this.subscriptions.get(e);
                    if (null == n) return {};
                    this.subscriptions.delete(e);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw g.a.warning("Failed to unsubscribe from app resource updates", {
                            safe: {
                                mcpAppId: this.params.mcpAppId
                            },
                            sensitive: {
                                hostId: this.params.hostId,
                                server: this.params.server,
                                uri: e,
                                error: t
                            }
                        }), this.subscriptions.set(e, n), t
                    }
                    return {}
                })
            }
            clear() {
                return this.enqueue(async () => {
                    this.subscriptions.clear(), await this.sync()
                })
            }
            enqueue(e) {
                let {
                    hostId: t,
                    mcpAppId: n
                } = this.params, r = `${t}\0${n}`, a = (e6.get(r) ?? Promise.resolve()).then(e), o = a.then(() => void 0, () => void 0);
                return e6.set(r, o), o.then(() => {
                    e6.get(r) === o && e6.delete(r)
                }), a
            }
            getAuthorizedWatchPathOverride(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                return null == t && (0, eB.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                }), t
            }
            getResourceWatchPath(e) {
                let t = this.getAuthorizedWatchPathOverride(e) ?? (0, e3.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == t) throw Object.assign((0, eV.c)("MCP resource is not subscribable", -32602), {
                    name: "McpResourceNotSubscribableError",
                    uri: e
                });
                return t
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? g.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (g.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, eK.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, r] = t;
                    return {
                        hostId: this.params.hostId,
                        path: r,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), g.a.info("Updated app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }))
            }
        }
        var e4 = n("xSzB"),
            e8 = n("kjQz"),
            e7 = n("OWtl"),
            e9 = n("Sd8U"),
            te = n("jdxe"),
            tt = n("XXJV"),
            tn = n("bIvi"),
            tr = n("DXan"),
            ta = n("nKJ6"),
            to = n("TCti"),
            ti = n("O9EX");
        let ts = (0, l.d)(E.a, (e, t) => {
            let {
                get: n
            } = t;
            return "closed" !== n(ti.a, e)
        });

        function tl(e) {
            let t, n, r, a, o = (0, s.c)(22),
                {
                    panelTabId: i,
                    sandboxElement: d,
                    sandboxId: u,
                    title: p
                } = e,
                _ = (0, l.y)(E.a),
                f = (0, l.z)(to.b) ?? _,
                g = eD.a?.mcpAppSandbox,
                h = (0, l.x)(null != g && ts, i);
            o[0] !== f ? (t = (0, ta.getThreadBrowserConversationId)(f), o[0] = f, o[1] = t) : t = o[1];
            let m = t;
            o[2] !== i || o[3] !== f ? (n = () => {
                let e = f.get(tt.e, i);
                null != i && null != e && (0, tt.activateThreadPanelTab)(f, e, i)
            }, o[2] = i, o[3] = f, o[4] = n) : n = o[4];
            let I = (0, c.useEffectEvent)(n);
            return o[5] !== m || o[6] !== h || o[7] !== _ || o[8] !== i || o[9] !== I || o[10] !== d || o[11] !== u || o[12] !== p ? (r = () => {
                if (!h || null == m || null == g) return;
                let e = (0, D.h)(d.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = g.registerBrowserTarget({
                    conversationId: m,
                    initId: e,
                    sandboxId: u,
                    title: p
                }, I, (e, t) => (async function(e, t, n) {
                    let r = new Image;
                    r.src = t, await r.decode();
                    let a = document.createElement("canvas");
                    a.width = r.naturalWidth, a.height = r.naturalHeight;
                    let o = a.getContext("2d", {
                        alpha: !1
                    });
                    if (null == o || !e.isConnected) throw Error("MCP App screenshot surface is unavailable.");
                    let i = [];
                    for (let t = e; null != t; t = t.parentElement) i.push(getComputedStyle(t).backgroundColor);
                    for (let e of (o.fillStyle = "Canvas", o.fillRect(0, 0, a.width, a.height), i.reverse())) o.fillStyle = e, o.fillRect(0, 0, a.width, a.height);
                    return o.drawImage(r, 0, 0), a.toDataURL("image/jpeg", n / 100).slice(23)
                })(d, e, t));
                t.catch(td);
                let n = _.watch(e => {
                    let {
                        get: n
                    } = e, r = n(ti.a, i);
                    t.setPresented("right" === r).catch(tc)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, o[5] = m, o[6] = h, o[7] = _, o[8] = i, o[9] = I, o[10] = d, o[11] = u, o[12] = p, o[13] = r) : r = o[13], o[14] !== m || o[15] !== h || o[16] !== _ || o[17] !== i || o[18] !== d || o[19] !== u || o[20] !== p ? (a = [g, m, h, _, i, d, u, p], o[14] = m, o[15] = h, o[16] = _, o[17] = i, o[18] = d, o[19] = u, o[20] = p, o[21] = a) : a = o[21], (0, c.useEffect)(r, a), null
        }

        function tc(e) {
            g.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function td(e) {
            g.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var tu = n("KMWy"),
            tp = n("ygJs"),
            t_ = n("nlNF");

        function tE(e) {
            let t, n, r = (0, s.c)(8),
                {
                    sandboxElement: a,
                    sandboxId: o
                } = e,
                i = (0, l.y)(e7.a),
                {
                    pathname: d,
                    search: u
                } = (0, F.Z)(),
                p = (0, F.ab)();
            return r[0] !== p || r[1] !== d || r[2] !== a || r[3] !== o || r[4] !== i || r[5] !== u ? (t = () => {
                let e;
                if (eD.a?.mcpAppSandbox == null || ![S.Vc, S.Wc, S.id, "/plugins/:pluginId/app/:toolName"].some(e => (0, F.L)(e, d))) return;
                let t = (0, S.Og)(a.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    r = Promise.resolve(),
                    s = !1,
                    l = () => {
                        let e = i.get(t_.c);
                        return e?.pathname === d && e.search === u ? e : null
                    },
                    c = eD.a.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: o,
                        initId: t
                    }, a => {
                        let c = a.entryIds[a.currentIndex];
                        if (null == c || e === c) {
                            e = void 0;
                            return
                        }
                        r = r.then(async () => {
                            let e = l();
                            if (n || null == e || "committed" !== a.reason) return;
                            let r = e.state?.mcpHistory;
                            if (r?.sandboxId === o && r.initId === t && r.entryId === c) return;
                            s = !0;
                            let _ = a.previousEntryId ?? a.entryIds[a.previousIndex ?? -1],
                                E = i.get(t_.k),
                                f = Math.sign(a.currentIndex - (null == _ ? a.currentIndex : a.entryIds.indexOf(_)));
                            if (null != E && 0 !== f)
                                for (let e = E.index + f; e >= 0 && e < E.entries.length; e += f) {
                                    let n = E.entries[e];
                                    if (n.pathname !== d || n.search !== u || n.state?.mcpHistory?.sandboxId !== o || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === c) return p(e - E.index)
                                }(r?.sandboxId !== o || r.initId !== t) && null != _ && _ !== c && (await p(e, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: o,
                                            initId: t,
                                            entryId: _
                                        }
                                    }
                                }), e = l(), n || null == e) || await p(e, {
                                    replace: a.didReplaceEntry || null == _ || _ === c,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: o,
                                            initId: t,
                                            entryId: c
                                        }
                                    }
                                })
                        }).finally(() => {
                            s = !1
                        })
                    }),
                    _ = i.watch(r => {
                        let {
                            get: a
                        } = r;
                        a(t_.c);
                        let d = l(),
                            u = d?.state?.mcpHistory,
                            _ = i.get(t_.k);
                        !s && u?.sandboxId === o && (u.initId === t || _?.entries.some(e => e.state?.mcpHistory?.sandboxId === o && e.state.mcpHistory.initId === t)) && (e = u.entryId, c.then(async r => {
                            if (!n && l()?.key === d?.key) {
                                let a = u.initId !== t ? "missing" : await r?.go(u.entryId);
                                "ok" !== a && e === u.entryId && (e = void 0), "missing" !== a || n || l()?.key !== d?.key || null == _ || 0 === _.popDelta || await p(Math.sign(_.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, _(), c[Symbol.dispose]()
                }
            }, n = [d, u, a, o, i, p], r[0] = p, r[1] = d, r[2] = a, r[3] = o, r[4] = i, r[5] = u, r[6] = t, r[7] = n) : (t = r[6], n = r[7]), (0, c.useEffect)(t, n), null
        }
        var tf = n("uWA4");
        let tg = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            th = {
                insets: {
                    ...tg.insets,
                    top: 48
                }
            };

        function tm(e) {
            let {
                availableDisplayModes: t,
                containerDimensions: n,
                displayMode: r,
                locale: a,
                modelContextHostState: o,
                deepLink: i,
                safeAreaInsets: s,
                styleVariables: l,
                theme: c,
                userAgent: d,
                toolInfo: u
            } = e;
            return {
                "openai/interactionCursor": getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
                ...void 0 === o ? {} : {
                    [C.a]: o
                },
                ...null == i ? {} : {
                    [tf.a]: i
                },
                availableDisplayModes: [...t],
                containerDimensions: {
                    maxHeight: null != n.maxHeight && n.maxHeight > 0 ? n.maxHeight : void 0,
                    maxWidth: n.maxWidth > 0 ? n.maxWidth : void 0
                },
                deviceCapabilities: {
                    hover: d.capabilities.hover,
                    touch: d.capabilities.touch
                },
                displayMode: r,
                locale: a,
                platform: "web" === d.device.platform ? "web" : "desktop",
                safeAreaInsets: s,
                styles: {
                    variables: l
                },
                theme: c,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                userAgent: "chatgpt",
                toolInfo: u
            }
        }

        function tI(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tT() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tb(e) {
            let t;
            return {
                capabilities: {
                    hover: window.matchMedia?.("(hover: hover)")?.matches ?? !1,
                    touch: window.matchMedia?.("(pointer: coarse)")?.matches ?? !1
                },
                device: {
                    os: e?.os ?? ((t = window.navigator.platform.toLowerCase()).includes("mac") ? "macos" : t.includes("win") ? "windows" : "unknown"),
                    platform: "web",
                    type: e?.type ?? "desktop"
                }
            }
        }
        let tv = (0, l.j)(e7.a, e => {
            let t = new Map,
                n = new Set,
                r = !1;

            function a() {
                r || (r = !0, queueMicrotask(() => {
                    if (r = !1, !(n.size >= 5))
                        for (let {
                                initialize: e
                            }
                            of Array.from(t, (e, t) => {
                                let [n, r] = e;
                                return {
                                    initialize: n,
                                    index: t,
                                    priority: r()
                                }
                            }).sort((e, t) => e.priority.distance - t.priority.distance || t.priority.top - e.priority.top || t.index - e.index)) {
                            if (n.size >= 5) break;
                            t.delete(e) && e()
                        }
                }))
            }
            return function(e, r, o) {
                let i, s = () => {
                        n.delete(l) && a()
                    },
                    l = () => {
                        n.add(l);
                        try {
                            i = e(s), null == i && s()
                        } catch (e) {
                            s(), r(e)
                        }
                    };
                return t.set(l, o), a(), () => {
                    t.delete(l);
                    try {
                        i?.()
                    } finally {
                        s()
                    }
                }
            }
        });
        var ty = n("VwGH"),
            tA = n("OM8g"),
            tC = n("on57"),
            tw = n("WSFD"),
            tN = n("fm8Z");

        function tR(e) {
            let {
                sharesScrollHost: t,
                sessionId: n,
                frameElement: r,
                frameContainer: a,
                fullSurface: o = !1,
                modalOpen: i = !1,
                sandboxElement: s,
                isFullScreen: l,
                isInGlobalHost: c,
                anchorElement: d,
                rightPanelLayoutTick: u
            } = e, p = !i && (l || o) ? d.closest('[data-app-shell-focus-area="right-panel"]') : null, _ = i || l || c, E = t && !_ && !o && a.contains(d);
            if (E && globalThis.CSS?.supports?.("position-anchor", "--mcp-app")) {
                let e = `--mcp-app-${CSS.escape(n)}`;
                d.style.setProperty("--mcp-app-frame-anchor", e), d.dataset.mcpAppFrameAnchor = "", r.style.setProperty("position-anchor", e), Object.assign(r.style, {
                    position: "absolute",
                    top: "anchor(top)",
                    left: "anchor(left)",
                    width: "anchor-size(width, 0px)",
                    height: "anchor-size(height, 0px)",
                    display: "",
                    clipPath: "",
                    borderRadius: "",
                    zIndex: "1"
                }), r.style.removeProperty("corner-shape"), null != s && (s.style.borderRadius = "", s.style.removeProperty("corner-shape"));
                let t = () => {
                    let e = (d.currentCSSZoom ?? 1) / (a.currentCSSZoom ?? 1);
                    r.style.zoom = 1 === e ? "" : String(e)
                };
                t();
                let o = new ResizeObserver(t);
                return o.observe(d), o.observe(a), tp.c.set(r, d), () => {
                    o.disconnect(), tp.c.delete(r), r.style.removeProperty("position-anchor"), delete d.dataset.mcpAppFrameAnchor, d.style.removeProperty("--mcp-app-frame-anchor")
                }
            }
            let f = i ? (0, tA.b)(r) : void 0,
                g = null,
                h = l && !c ? new MutationObserver(() => I()) : null,
                m = new ResizeObserver(() => I()),
                I = () => {
                    let e = d.currentCSSZoom ?? 1,
                        t = (0, tw.a)(d, e),
                        n = {
                            ...t
                        },
                        u = null == p ? "" : (0, tw.b)(t, (0, tw.a)(p, e));
                    r.style.position = _ ? "fixed" : "absolute";
                    let E = null;
                    if (_ ? c || i || (E = r.offsetParent) : E = a, null != E) {
                        let t = (0, tw.a)(E, e);
                        n.x -= t.x, n.y -= t.y
                    }
                    _ || (n.x += a.scrollLeft, n.y += a.scrollTop);
                    let f = "";
                    i || (f = l ? "43" : "1"), Object.assign(r.style, {
                        ...(0, tw.d)(n, e / (a.currentCSSZoom ?? 1)),
                        clipPath: u,
                        display: "",
                        zIndex: f
                    });
                    let m = o || l ? (0, tw.c)(d) : null;
                    if (r.style.borderRadius = m?.radii.join(" ") ?? "", r.style.setProperty("corner-shape", m?.cornerShape ?? ""), null != s)
                        if (s.style.setProperty("corner-shape", m?.cornerShape ?? ""), null == m) s.style.borderRadius = "";
                        else {
                            let e = getComputedStyle(r),
                                t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                n = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                            s.style.borderRadius = [t, n].map(e => m.radii.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                        } null != h && E !== g && (h.disconnect(), g = E, null != E && h.observe(E, {
                        attributeFilter: ["class", "style"],
                        attributes: !0
                    }))
                };
            m.observe(a), null != p && m.observe(p);
            let T = e => {
                e.target instanceof Element && e.target !== a && e.target.contains(d) && I()
            };
            if (E) {
                tp.c.set(r, d), m.observe(d);
                let e = d.closest("[data-turn-key]");
                null == e || d.hidden || m.observe(e), a.addEventListener("scroll", T, !0)
            }
            let b = (0, ty.b)(d, r, I, E ? {
                    ancestorScroll: !1,
                    ancestorResize: !1,
                    elementResize: !1
                } : void 0),
                v = (0, tN.a)({
                    update: I,
                    motionValues: [u]
                });
            return () => {
                f?.(), v.disconnect(), b(), E && (tp.c.delete(r), a.removeEventListener("scroll", T, !0)), m.disconnect(), h?.disconnect()
            }
        }
        var tP = n("qbxq");
        let tS = M.Q([w.b, M.F({
                target: M.p(["active", "new"]).optional(),
                send: M.z(!1)
            }).strict()]),
            tx = w.c.extend({
                _meta: w.c.shape._meta.unwrap().extend({
                    "openai/message": tS.optional()
                }).optional()
            });

        function tD(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !G.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw (0, eV.c)("Unsupported MCP app content", -32602)
        }

        function tG(e, t) {
            if (0 !== e.length) return {
                id: crypto.randomUUID(),
                kind: "message",
                widgetSource: t.widgetSource,
                untrusted: !0,
                sourceName: t.sourceName,
                composerIcon: t.icon ?? void 0,
                server: t.server,
                content: e
            }
        }
        var tL = n("HPlV");
        let tO = (0, l.j)(e9.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: r
                } = n, a = r.get(ea.v).find(t => t.id === e && "context" === t.kind);
                return a?.modelContextUpdateId == null ? null : {
                    updateId: a.modelContextUpdateId,
                    content: a.content?.length ? a.content : void 0,
                    structuredContent: a.structuredContent
                }
            }, {
                isEqual: P()
            })
        });
        var tF = n("slpy"),
            tM = n("Sm6l"),
            tk = n("HOLv"),
            tU = n("O23k");

        function tW(e) {
            let t, n, r, a, o, l, c, d = (0, s.c)(23),
                {
                    backLabel: u,
                    canGoBack: p,
                    canGoForward: _,
                    color: E,
                    forwardLabel: f,
                    onBack: g,
                    onForward: h,
                    radius: m
                } = e,
                I = void 0 === E ? "ghost" : E,
                T = p ? I : "ghost",
                b = !p;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(tk.a, {
                "aria-hidden": !1,
                asset: tU.a
            }), d[0] = t) : t = d[0], d[1] !== u || d[2] !== g || d[3] !== m || d[4] !== T || d[5] !== b ? (n = (0, i.jsx)(tM.a, {
                "aria-label": u,
                color: T,
                disabled: b,
                onClick: g,
                radius: m,
                size: "toolbar",
                uniform: !0,
                children: t
            }), d[1] = u, d[2] = g, d[3] = m, d[4] = T, d[5] = b, d[6] = n) : n = d[6], d[7] !== u || d[8] !== n ? (r = (0, i.jsx)(tF.a, {
                content: u,
                side: "bottom",
                children: n
            }), d[7] = u, d[8] = n, d[9] = r) : r = d[9];
            let v = _ ? I : "ghost",
                y = !_;
            return d[10] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(tk.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tU.a
            }), d[10] = a) : a = d[10], d[11] !== f || d[12] !== h || d[13] !== m || d[14] !== v || d[15] !== y ? (o = (0, i.jsx)(tM.a, {
                "aria-label": f,
                color: v,
                disabled: y,
                onClick: h,
                radius: m,
                size: "toolbar",
                uniform: !0,
                children: a
            }), d[11] = f, d[12] = h, d[13] = m, d[14] = v, d[15] = y, d[16] = o) : o = d[16], d[17] !== f || d[18] !== o ? (l = (0, i.jsx)(tF.a, {
                content: f,
                side: "bottom",
                children: o
            }), d[17] = f, d[18] = o, d[19] = l) : l = d[19], d[20] !== l || d[21] !== r ? (c = (0, i.jsxs)(i.Fragment, {
                children: [r, l]
            }), d[20] = l, d[21] = r, d[22] = c) : c = d[22], c
        }

        function tH(e) {
            let t, n, r, a, o, l, c, d = (0, s.c)(20),
                {
                    className: u,
                    canGoBack: p,
                    canGoForward: _,
                    onBack: E,
                    onForward: f
                } = e,
                g = (0, O.a)();
            d[0] !== g ? (t = g.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back"
            }), d[0] = g, d[1] = t) : t = d[1];
            let h = t;
            d[2] !== g ? (n = g.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next"
            }), d[2] = g, d[3] = n) : n = d[3];
            let m = n;
            return d[4] !== u ? (r = (0, tC.b)("flex items-center gap-px", u), d[4] = u, d[5] = r) : r = d[5], d[6] !== E ? (a = e => {
                e.stopPropagation(), E()
            }, d[6] = E, d[7] = a) : a = d[7], d[8] !== f ? (o = e => {
                e.stopPropagation(), f()
            }, d[8] = f, d[9] = o) : o = d[9], d[10] !== h || d[11] !== p || d[12] !== _ || d[13] !== m || d[14] !== a || d[15] !== o ? (l = (0, i.jsx)(tW, {
                backLabel: h,
                canGoBack: p,
                canGoForward: _,
                forwardLabel: m,
                onBack: a,
                onForward: o
            }), d[10] = h, d[11] = p, d[12] = _, d[13] = m, d[14] = a, d[15] = o, d[16] = l) : l = d[16], d[17] !== r || d[18] !== l ? (c = (0, i.jsx)("div", {
                className: r,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tV,
                children: l
            }), d[17] = r, d[18] = l, d[19] = c) : c = d[19], c
        }

        function tV(e) {
            return e.stopPropagation()
        }
        var tj = n("oMYH"),
            tY = n("Yshm"),
            tz = n("EDsV"),
            tq = n("MTYR"),
            tB = n("IWEP");
        let tK = M.I(function(e, t) {
            let n = new WeakSet,
                r = M.J(M.L(), M.R()),
                a = (e, o) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: o,
                        message: "Cyclic tool arguments"
                    }), tB.d;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => a(e, [...o, t]));
                        let n = r.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...o, ...e.path]
                            });
                            return tB.d
                        }
                        return Object.fromEntries(Object.entries(n.data).filter(e => {
                            let [, t] = e;
                            return void 0 !== t
                        }).map(e => {
                            let [t, n] = e;
                            return [t, a(n, [...o, t])]
                        }))
                    } finally {
                        n.delete(e)
                    }
                };
            return a(e, [])
        }, M.J(M.L(), M.x()));

        function t$(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var tQ = n("Btes"),
            tX = n("ILnd");
        let tZ = M.F({
            name: M.L().min(1),
            arguments: tK.optional(),
            _meta: I.b.shape._meta
        }).loose();
        var tJ = n("U0IP"),
            t0 = n("PkQL");
        let t1 = M.I(t3, M.J(M.L(), M.x())),
            t2 = M.I(t3, M.A({
                ...m.e.shape.params.shape,
                content: M.g(t0.g).optional()
            }));

        function t3(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        var t6 = n("kl6F");
        let t5 = M.F({
                mode: M.p(["inline", "fullscreen"])
            }),
            t4 = M.F({
                canGoBack: M.j(),
                canGoForward: M.j()
            }).loose(),
            t8 = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            t7 = M.E().positive(),
            t9 = {
                canGoBack: !1,
                canGoForward: !1
            },
            ne = (0, l.v)(t6.a, e => null),
            nt = ["resources/subscribe", "resources/unsubscribe"],
            nn = ["openai/events/subscribe", "openai/events/unsubscribe"],
            nr = M.x(),
            na = M.F({
                uri: M.L().min(1)
            }).loose(),
            no = M.F({
                arguments: M.J(M.L(), nr).optional(),
                name: M.L().regex(/\S/),
                subscriptionId: M.T()
            }),
            ni = M.F({
                subscriptionId: M.T()
            }),
            ns = M.F({
                linkToken: M.L().min(1),
                oauthStateId: M.L().min(1)
            }),
            nl = M.F({
                title: M.L().transform(e => e.trim().slice(0, 2e3)),
                favicon: M.L().max(8192).transform(e => {
                    let t = URL.parse(e);
                    return t?.protocol !== "https:" || t.username || t.password ? G.f.safeParse(e).success ? e : null : t.href
                }).catch(null)
            });

        function nc(e) {
            let {
                ModalFrame: t,
                recipient: r,
                resource: a,
                analyticsContext: o,
                conversationId: s,
                firstPartyPluginBridge: d,
                firstPartyPluginLoggerPluginId: p,
                pluginId: _,
                fullSurface: f,
                modalOpen: h = !1,
                hostScroll: R = !1,
                hostDisplayModes: G,
                hostId: q,
                hostedInThreadScrollLayout: K,
                access: Q,
                inheritHostBackground: ef = !1,
                installPlugin: eI,
                inlineFrameAnchor: eT,
                allowGlobalHost: ev,
                sessionId: eL,
                sourceMcpAppId: eO,
                mcpAppScope: e$,
                sourceName: eJ,
                permissionAppDisplayName: e0,
                mcpServerStatuses: e2,
                mcpAppHostAdapter: e6,
                getNewThreadDestination: ta,
                widgetStatePersistence: ti,
                plaidAccountId: ts,
                deepLink: tc,
                rightPanelLayoutTick: td,
                resolveResourceWatchPath: t_,
                server: tf,
                toolIcon: ty,
                appIcon: tA,
                sidePanelTitle: tw,
                title: tN,
                globalSurface: tS = !1,
                toolArguments: tF,
                toolResult: tM,
                toolResultNotification: tk,
                toolCallStatus: tU,
                toolCallCancellationReason: tW,
                viewParamsOverride: tV,
                frameState: tB
            } = e, tK = (0, l.y)(E.a), t0 = (0, l.y)(e7.a), t3 = (0, O.a)(), t6 = (0, c.useSyncExternalStore)(eT.subscribe, eT.getSnapshot, () => null), nr = (0, c.useEffectEvent)(() => tK), nc = (0, c.useEffectEvent)(() => Q.assertActive()), {
                csp: nd,
                fitWidth: nu,
                html: np,
                sandboxOrigin: n_,
                serverOrigin: nE,
                generatedSandboxOrigin: nf
            } = a, ng = a.prefersBorder && !e6?.hideFrameBorder, nh = (0, c.useEffectEvent)(() => _), nm = (0, c.useEffectEvent)(() => e0 ?? eJ), nI = (0, tu.a)(a, eD.a?.mcpAppSandbox != null), nT = nI.join(";"), nb = "connectorId" in Q.serverIdentity ? Q.serverIdentity.connectorId : null, nv = null != r, ny = (0, c.useEffectEvent)(() => r?.get(ei.a)?.updatePrompt != null), nA = !nv || r?.value.kind === "new" || r?.value.kind === "local" || r?.value.kind === "chatgpt", nC = (0, l.x)(Z.d, q), nw = (0, l.x)(Z.nc, {
                hostId: q,
                threadId: s
            }), nN = null != nw && "notLoaded" !== nw.type, nR = !(0, k.f)(tf) && nd?.connectDomains.some(e => (0, ej.d)(new URL(e).hostname)) === !0, nP = (0, tr.a)(Q, o), nS = null != nE ? new URL(nE) : null, nx = e6?.sandboxFeatures, nD = nx?.join(";"), nG = eD.a?.mcpAppSandbox == null && (nx?.includes("local-network-access") === !0 || (0, ej.g)(nd) || nR && nS?.protocol === "https:" && (0, ej.d)(nS.hostname)), nL = (0, c.useEffectEvent)(() => {
                (0, eE.E)(nr(), eL, {
                    sandboxGeneration: tB.sandboxGeneration + 1
                })
            }), nO = (0, F.ab)(), nF = r?.value.kind === "chatgpt" && null != r.value.conversationId && s === `chatgpt:${r.value.conversationId}`, nM = s.startsWith("chatgpt:") ? "chatgpt" : "codex", nk = (0, l.z)(r?.get(tO, eL) ?? null), nU = (0, c.useEffectEvent)(() => r?.get(tO, eL).get() ?? null), nW = (0, l.z)(et.l.activeTab$), nH = (0, l.z)(to.a), nV = (0, l.z)(eH.a), nj = nV["--color-background-primary"], {
                isWidgetReady: nY
            } = tB, nz = (0, eE.e)(tB), nq = !f && "fullscreen" === nz, nB = tB.displayMode, nK = f && ev, n$ = (0, c.useRef)(!1), nQ = (0, c.useRef)(null), nX = (0, c.useRef)(null), nZ = (0, c.useRef)(null), nJ = (0, c.useRef)(null), n0 = (0, l.x)(eE.g, eL), n1 = (0, c.useRef)(null), n2 = (0, c.useRef)(null), n3 = e => {
                if (!(0, k.f)(tf)) return null;
                let t = tK.get(eE.h, eO);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let r = (0, eB.d)({
                    appContext: e$.appContext,
                    invocationResourceUri: e$.invocationResourceUri,
                    originTool: e$.originTool,
                    originToolDefinition: e.tools[e$.originTool],
                    server: tf,
                    tools: eX(e)
                });
                tK.set(eE.i, e => {
                    let t = e.get(eO);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let a = new Map(e);
                    return a.set(eO, {
                        ...t,
                        content: {
                            ...n,
                            mcpAppScope: {
                                ...n.mcpAppScope,
                                codexAppsToolScope: r
                            }
                        }
                    }), a
                });
                let a = tK.get(eE.h, eO)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === a ? null : a
            }, [n6, n5] = (0, c.useState)(null), [n4, n8] = (0, c.useState)(null), [n7, n9] = (0, c.useState)(null), [re, rt] = (0, c.useState)(!1), [rn, rr] = (0, c.useState)(null), [ra, ro] = (0, c.useState)(null), ri = ra?.api ?? null, rs = ra?.widgetId ?? null, rl = (0, tn.a)(e => t_?.(e) ?? null), rc = (0, k.f)(tf) && (0, S.Sh)(nC, "mcpEventStream"), rd = (0, c.useMemo)(() => new e5({
                scope: t0,
                hostId: q,
                mcpAppId: eL,
                originResourceUri: e$.originResourceUri,
                resolveResourceWatchPath: rl,
                server: tf
            }), [t0, q, eL, e$.originResourceUri, rl, tf]), ru = (0, c.useMemo)(() => new e1({
                scope: t0,
                hostId: q,
                server: tf
            }), [t0, q, tf]), rp = nq ? (0, te.b)(eL) : e6?.panelTabId ?? null, r_ = (0, l.z)(to.b) ?? tK, rE = (0, l.w)(ne, eL), [rf, rg] = (0, c.useState)(t9), rh = null != nb && t8.has(nb), rm = rh && null != ri && (rf.canGoBack || rf.canGoForward), {
                cancel: rI,
                confirmation: rT,
                confirm: rb,
                request: rv
            } = (0, ek.a)(eM.a), ry = e6?.viewerHeader === !0, rA = e6?.forwardedRequestMethods, rC = rA?.join(";") || void 0, rw = JSON.stringify(e6?.experimentalCapabilities), rN = e6?.openFile, rR = (0, l.z)(E.j), rP = tS && (0, k.f)(tf) && !rR && null != r && null != _ && null != nb, rS = (0, l.x)(X.a, {
                name: "codex.browser"
            }), rx = !rR && rS.isCapable, rD = rx || nv && nA, rG = !rR && (void 0 === rN ? (0, S.Ii)((0, eA.a)(t0, q)) : null != rN), rL = null != e6, rO = e6?.expectedReadySignal, rF = e6?.pluginSuggestions != null, rM = !0 === e$.isVerifiedFirstParty, rk = e6?.displayMode === "modal", rU = (0, c.useEffectEvent)(() => e6), rW = e6?.onRequestClose != null || K, rH = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: r,
                    widgetScope: a
                } = e;
                return (0, k.f)(n) && "connector_openai_olympic" === r && "internal://olympic" === a.originResourceUri && !0 === a.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e6,
                server: tf,
                connectorId: nb,
                widgetScope: e$
            }), rV = null != rH, rj = rH?.requestTargetedReply != null || e6?.setTargetedReply != null || e6?.requestTargetedReply != null, rY = rV || e6?.showToast != null, rz = (0, c.useEffectEvent)(() => rH), rq = (0, c.useEffectEvent)(e => rH?.viewMode ?? e6?.displayMode ?? e), rB = e6?.requestCheckout != null, rK = e6?.openConversationOverlay != null, r$ = e6?.openPromptInput != null, rQ = e6?.autofill != null, rX = e6?.openInApp != null, rZ = rX && e6?.openInApp?.hideButton !== !0 && e6?.openInApp?.baseUrl != null && null !== tB.openInAppUrl, rJ = e6?.presentation != null, r0 = e6?.presentation?.requestFocusedObject != null, r1 = e6?.presentation?.requestCloseFocusedObject != null, r2 = e6?.presentation?.isSidebarOpen === !0, r3 = e6?.downloadBlob != null, r6 = e6?.triggerHaptic != null, r5 = e6?.files != null, r4 = e6?.share != null, r8 = e6?.requestConnectSheet != null, r7 = e6?.requestReconnectConnector != null, r9 = e6?.requestLinkToConnector != null, ae = e6?.isTombstone === !0, at = (0, c.useEffectEvent)(() => (function(e, t) {
                let {
                    mcpAppId: n,
                    adapter: r,
                    server: a,
                    connectorId: o,
                    widgetScope: i
                } = t;
                if (!(0, k.f)(a) || o !== eu.a || !("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts"))) return;
                if (!0 === i.isVerifiedFirstParty && r?.finance != null) return r.finance;
                if (!eh(e) || !0 !== i.resourceIdentityVerified) return;
                let s = e.get(eE.s, n),
                    l = null == s ? void 0 : e.get(eE.i).get(s.sourceMcpAppId);
                if (null == s || null == l) return;
                let {
                    access: c,
                    resource: d
                } = s.resourceSnapshot;
                if (!("local" !== c.context.hostId && c.context.hostId !== S._b || null == c.accountId || l.content.conversationId.startsWith("chatgpt:")) && P()(d, l.content.resource)) return c.assertActive(), (0, eg.a)(e, c.accountId, c.context.hostId === S._b ? (0, S.ae)(l.content.conversationId) : (0, S.he)(l.content.conversationId))
            })(tK, {
                mcpAppId: eL,
                adapter: e6,
                server: tf,
                connectorId: nb,
                widgetScope: e$
            })), an = function(e, t) {
                let {
                    server: n,
                    connectorId: r,
                    widgetScope: a,
                    conversationId: o
                } = t, {
                    originResourceUri: i
                } = a;
                if ((0, k.f)(n) && "connector_openai_ads_manager" === r && (!0 === a.isVerifiedFirstParty || !0 === a.resourceIdentityVerified) && ("internal://ads-manager" === i || "internal://ads-manager-account-setup" === i || "internal://ads-manager-delivery" === i)) return {
                    sendInstrument: t => (function(e, t, n) {
                        let {
                            conversationId: r,
                            originResourceUri: a
                        } = n;
                        ! function(e, t, n) {
                            let r = j.safeParse(t);
                            if (r.success) {
                                let t = r.data;
                                if (new Set(t.tags.map(e => {
                                        let {
                                            key: t
                                        } = e;
                                        return t
                                    })).size !== t.tags.length) return;
                                let a = Object.fromEntries(t.tags.map(e => {
                                    let {
                                        key: t,
                                        value: n
                                    } = e;
                                    return [t, n]
                                }));
                                if ("payment_elements_stage" === t.label) {
                                    let n = Y.safeParse(a);
                                    "count" === t.type && n.success && e.get(W.a).count("payments", "payment_elements_stage", n.data)
                                } else {
                                    let r = z.safeParse(a);
                                    if (!r.success) return;
                                    let {
                                        failure_category: o,
                                        ...i
                                    } = r.data, s = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: n,
                                        client_type: "browser"
                                    }, l = e.get(W.a);
                                    if ("ads_billing_client_phase" === t.label && "count" === t.type) {
                                        let e = {
                                            ...i,
                                            ..."error" === r.data.outcome && o ? {
                                                failure_category: o
                                            } : {}
                                        };
                                        l.count("payments", "ads_billing_client_phase", e), l.count("ecosystem", "ads_billing_client_phase", {
                                            ...e,
                                            ...s
                                        })
                                    } else "ads_billing_client_phase_duration_ms" === t.label && "hist" === t.type && void 0 !== t.value && (l.hist("payments", "ads_billing_client_phase_duration_ms", i, t.value), l.hist("ecosystem", "ads_billing_client_phase_duration_ms", {
                                        ...i,
                                        ...s
                                    }, t.value))
                                }
                            }
                        }(e, t, a);
                        let o = $.safeParse(t);
                        if (!o.success) return;
                        let i = o.data,
                            s = "browser";
                        if ("event" === i.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = B[i.label], a = i.payload;
                            if (!a[n]) return;
                            (0, H.a)(e, U, {
                                eventType: t,
                                widget: a.widget,
                                viewSessionId: a.view_session_id,
                                view: a.view,
                                action: a.action,
                                outcome: a.outcome,
                                step: a.step,
                                source: a.source,
                                billingStatus: a.billing_status,
                                logoStatus: a.logo_status,
                                accountReviewStatus: a.account_review_status,
                                attentionReason: a.attention_reason,
                                billingRecovery: a.billing_recovery,
                                billingInSidebar: a.billing_in_sidebar,
                                logoHandoffFailed: a.logo_handoff_failed,
                                stepNumber: a.step_number,
                                stepCount: a.step_count,
                                previewKind: a.preview_kind,
                                reason: a.reason,
                                position: a.position,
                                page: a.page,
                                pageCount: a.page_count,
                                pageSize: a.page_size,
                                totalCount: a.total_count,
                                nextPage: a.next_page,
                                host: "codex",
                                clientType: s,
                                conversationId: r.replace(/^chatgpt:/, "")
                            });
                            return
                        }
                        let l = Object.entries(V).flatMap(e => {
                                let [t, n] = e, r = i.tags.find(e => e?.key === t), a = M.p(n).safeParse(r?.value);
                                return a.success ? [{
                                    key: t,
                                    value: a.data
                                }] : []
                            }),
                            {
                                requiredField: c
                            } = B[i.label],
                            d = "outcome" === c ? "widget" : c;
                        if (!l.some(e => "widget" === e.key) || !l.some(e => e.key === d)) return;
                        let u = {
                            ...Object.fromEntries(l.map(e => {
                                let {
                                    key: t,
                                    value: n
                                } = e;
                                return [t, n]
                            })),
                            attribution_id: "connector_openai_ads_manager",
                            name: a,
                            client_type: s
                        };
                        e.get(W.a).count("ecosystem", i.label, u)
                    })(e, t, {
                        conversationId: o,
                        originResourceUri: i
                    })
                }
            }(tK, {
                server: tf,
                connectorId: nb,
                widgetScope: e$,
                conversationId: s
            }), ar = (0, c.useEffectEvent)(() => an), aa = null != ts && (0, k.f)(tf) && rL && nb === eu.a, ao = (0, c.useMemo)(() => null != tF && "object" == typeof tF ? tF : null, [tF]), ai = (0, c.useMemo)(() => null == tM ? null : (0, e4.i)({
                isCodexAppsServer: (0, k.f)(tf),
                toolResult: tM
            }), [tf, tM]), as = (0, c.useMemo)(() => null == ai ? null : (0, e4.e)(ai), [ai]), al = void 0 === tV ? as : tV, ac = (0, c.useEffectEvent)(() => al), ad = (0, c.useMemo)(() => null == ai ? null : (0, e4.f)(ai), [ai]), au = (0, c.useMemo)(() => tk ?? (0, e4.c)(ai, {
                preserveStructuredContentNull: e6?.preserveStructuredContentNull
            }), [e6?.preserveStructuredContentNull, tk, ai]), ap = tU ?? (au?.isError === !0 ? "error" : void 0), a_ = (0, c.useMemo)(() => null == ap ? ad : {
                ...ad,
                status: ap
            }, [ap, ad]), aE = (0, c.useEffectEvent)(() => ({
                sourceMcpAppId: eO,
                toolInput: ao,
                toolOutput: as,
                toolResponseMetadata: a_,
                toolStatus: ap,
                toolResult: ai,
                toolResultNotification: au,
                toolCallCancellationReason: tW
            })), af = (0, c.useEffectEvent)(e => null == eI || null != ap ? null : (0, u.a)({
                scope: tK,
                conversationId: s,
                hostId: q,
                installPlugin: eI,
                mcpAppScope: e$,
                navigate: nO,
                access: Q,
                server: tf,
                sessionId: eL,
                sourceMcpAppId: eO,
                toolResult: e
            })), ag = null == n_ ? void 0 : (0, tq.c)(n_, t3.locale), ah = Q.getSandboxPartition?.(a) ?? D.b, am = null == ag ? null : (0, tq.b)(ag), aI = (0, c.useEffectEvent)(() => {
                if (null == ag) return null;
                let e = (0, D.j)(ag);
                return null == e ? null : {
                    csp: nd,
                    experimentalCapabilities: e6?.experimentalCapabilities,
                    html: np,
                    locale: t3.locale,
                    sandboxOrigin: e,
                    sourceUrl: ag
                }
            }), aT = rn?.isConnected === !0 ? rn : null, ab = t6?.isConnected === !0 ? t6 : null, av = null != ab || null != aT, ay = (0, c.useEffectEvent)(() => av ? {
                scope: r_,
                tabId: rp
            } : null), aA = !nq && !f && t6?.dataset.mcpAppInlineSurface === "card", aC = "iframe", aw = "function" == typeof n4?.moveBefore, aN = h && aw, aR = ab ?? (!nq && n4?.isConnected ? n4.parentElement : null), aP = aR?.closest("[data-mcp-app-scroll-host]"), aS = !nq && (!f && R || null != aP), ax = ev && !(f && ry) && !aS && (aw || !K), aD = ax ? null : aR?.closest("[data-mcp-app-portal-target='true']") ?? (!aw && n4?.isConnected ? n4.parentElement : null), aG = aw || ax ? n4 : aD, aL = (0, c.useEffectEvent)(e => {
                let t = tI(e, f, nq ? "fullscreen" : "inline");
                return !f && "inline" === nz && nu && ab?.parentElement != null && (t.maxWidth = ab.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), aO = (0, c.useEffectEvent)(() => {
                (0, em.c)(nr(), {
                    hostId: q,
                    pluginId: _,
                    server: tf
                }, eL)
            }), aF = (0, c.useEffectEvent)(() => ({
                safe: {
                    connectorId: nb,
                    mcpAppId: eL,
                    sandboxId: am,
                    initId: (0, D.h)(n7?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: q,
                    server: tf
                }
            })), aM = (0, c.useEffectEvent)(e => {
                (0, H.a)(tK, T.o, {
                    attributionId: nb ?? void 0,
                    conversationId: "chatgpt" === nM ? s.slice(8) : void 0,
                    host: "chatgpt" === nM ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), ak = (0, c.useEffectEvent)((e, t) => {
                let n = nr().get(eE.s, eL)?.sandboxError;
                if ((0, tz.f)(n)) return;
                let r = (0, ew.a)(t),
                    a = aF();
                (g.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nM,
                        retryCount: tB.sandboxGeneration,
                        stage: e,
                        connectorId: a.safe.connectorId,
                        mcpAppId: a.safe.mcpAppId,
                        sandboxId: a.safe.sandboxId,
                        initId: a.safe.initId
                    },
                    sensitive: {
                        error: r,
                        hostId: a.sensitive.hostId,
                        server: a.sensitive.server
                    }
                }), nJ.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tB.sandboxGeneration) ? (0, eE.E)(nr(), eL, {
                    sandboxGeneration: 1
                }) : (0, eE.E)(nr(), eL, {
                    isWidgetReady: !1,
                    sandboxError: r
                })
            }), aU = (0, c.useEffectEvent)(e => {
                let t = t7.safeParse(e);
                t.success && tK.get(eE.s, eL)?.displayMode === "inline" && (0, eE.E)(tK, eL, {
                    intrinsicHeight: t.data
                })
            }), aW = (0, c.useEffectEvent)(e => {
                let t = t7.safeParse(e);
                nu && t.success && (0, eE.E)(tK, eL, {
                    intrinsicWidth: t.data
                })
            }), aH = (0, c.useEffectEvent)(e => {
                if (!rh) return;
                let t = t4.safeParse(e);
                t.success && rg({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), aV = (0, c.useEffectEvent)(() => K ? void(0, eE.b)(tK, eL) : e6?.onRequestClose?.()), aj = (0, c.useEffectEvent)(async (e, t) => {
                if (e6?.openExternal != null && await e6.openExternal(e, t)) return;
                let n = eq.c.safeParse(e);
                if (n.success) {
                    if ("popup" === n.data.openMode && "https:" === new URL(n.data.href).protocol && !0 === e$.isVerifiedFirstParty) return void(0, ez.a)(tK, n.data.href);
                    if ("popup" !== n.data.openMode && e6?.onOpenLink?.(n.data.href) || "popup" !== n.data.openMode && d?.onOpenLink != null && await d.onOpenLink(r ?? tK, n.data.href, t)) return;
                    let e = (0, S.Tj)(n.data.href);
                    if (null != e) return void nO(e);
                    (0, ec.f)({
                        href: n.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e6?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), aY = (0, c.useEffectEvent)(async (e, t) => {
                if (!aa || null == ts) throw Error("Plaid Link is unavailable for this app");
                let n = ns.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: r
                    } = await (0, ep.a)();
                return r(tK, {
                    accountId: ts,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), az = (0, c.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: r,
                    payload: a,
                    signal: o,
                    accountId: i,
                    frameAccountId: s
                } = t, l = eh(e) ? e.get(eE.s, n) : null, c = null == l ? void 0 : e.get(eE.i).get(l.sourceMcpAppId), d = l?.resourceSnapshot.access.context.hostId !== "local" && l?.resourceSnapshot.access.context.hostId !== S._b || null == c || c.content.conversationId.startsWith("chatgpt:") ? void 0 : l.resourceSnapshot.access.accountId, u = i ?? d;
                if (null == r) throw Error("Finance account linking is unavailable");
                if (!o.aborted && (s ?? d) === u && e.get(e_.f) === u && await r(a, o) && !o.aborted && e.get(e_.f) === u) {
                    let t = e.get(eE.s, n);
                    if (null == t) return;
                    (0, eE.E)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(tK, {
                mcpAppId: eL,
                requestModal: at()?.requestModal,
                payload: e,
                signal: t,
                accountId: ts,
                frameAccountId: n
            })), aq = (0, c.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: r,
                    hostAdapter: a,
                    showNavigationControls: o
                } = e;
                if (a?.displayMode === "modal") return !1 !== a.showModalCloseButton || o ? th : tg;
                let i = "inline" === n && o ? th : tg;
                return ("inline" !== n || r) && 0 !== t ? {
                    insets: {
                        ...i.insets,
                        bottom: t
                    }
                } : i
            })({
                composerOverlayReservePx: nH,
                displayMode: f ? "inline" : e,
                hasComposerOverlay: nK,
                hostAdapter: rU(),
                showNavigationControls: rm
            })), aB = (0, c.useEffectEvent)(() => {
                let e = tK.get(eE.s, eL) ?? tB;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? G
                }
            }), aK = (0, c.useEffectEvent)(e => {
                let t = (0, eE.f)(tK, eL, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...aB(),
                    safeAreaInsets: aq(t).insets
                }
            }), a$ = (0, c.useEffectEvent)(e => {
                let t = t5.safeParse(e),
                    n = tK.get(eE.s, eL);
                if (t.success && (0, eE.a)(n, t.data.mode)) {
                    let n = !f && "fullscreen" === t.data.mode,
                        r = t.data.mode;
                    if (n && !nq && n4?.style.setProperty("display", "none"), rJ && (0, eE.E)(tK, eL, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, eE.C)(tK, eL, r, "app_request"), null != ri && null != rs) {
                        let e = {
                            displayMode: r,
                            isTombstone: rU()?.isTombstone === !0,
                            viewParams: al,
                            widgetId: rs
                        };
                        nQ.current = e, (0, eV.h)(ri.setWidgetView(e));
                        let t = null == n4 ? null : tm({
                            ...aB(),
                            containerDimensions: tI(n4, f, r),
                            locale: t3.locale,
                            deepLink: tc,
                            safeAreaInsets: aq(r).insets,
                            styleVariables: nV,
                            theme: tT(),
                            userAgent: tb(rU()?.device),
                            toolInfo: rU()?.toolInfo
                        });
                        nX.current = t, null != t && (0, eV.h)(ri.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: r
                    }
                }
                return g.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: eL,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (n ?? tB).displayMode
                }
            }), aQ = (0, c.useEffectEvent)(() => tc), aX = (0, c.useEffectEvent)(() => tK.get(eE.g, eL)), aZ = (0, c.useEffectEvent)(() => {
                var e;
                e = tA ?? void 0, null != r && (0, eo.h)(r, eL, e)
            });
            (0, c.useEffect)(() => {
                aZ()
            }, [eL, tA?.alt, tA?.knownAppId, tA?.logoDarkUrl, tA?.logoUrl]);
            let aJ = (0, c.useEffectEvent)(async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (tK.get(eE.s, eL)?.sourceMcpAppId !== eO) return;
                    let n = (null != ti || null == tM ? t1.nullable() : t1).safeParse(e);
                    return n.success ? (null == ti && null == tM && (0, eE.E)(tK, eL, {
                        pendingEditSource: eO
                    }), tK.set(eE.x, eL, n.data), ti?.save(n.data, t)) : void tK.set(eE.x, eL, null)
                }),
                a0 = e => {
                    null != ri && (0, eV.h)(ri.navigate({
                        delta: e
                    }))
                },
                a1 = {
                    name: null != e6 ? e$.originResourceUri ?? e$.originTool : `${tf}.${e$.originTool}`,
                    attribution: "connectorId" in Q.serverIdentity ? Q.serverIdentity.connectorId : void 0
                },
                a2 = (0, c.useEffectEvent)(function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = (0, el.getMcpAppSubmit)(r, () => {
                            Q.assertActive(), rU()?.assertActive?.()
                        });
                    return null == n ? null : (r, a) => n(r, t ? a1 : {
                        ...a1,
                        visuallyHidden: !0
                    }, e, a)
                }),
                a3 = async function(e, t, n, r, a, o) {
                    let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tL.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: r,
                        messageAttachment: o,
                        modelContextAttachments: i,
                        requestConfirmation: e => rv({
                            imageUrls: e.imageAttachments.map(e => {
                                let {
                                    src: t
                                } = e;
                                return t
                            }),
                            prompt: e.prompt,
                            title: a
                        })
                    })
                }, a6 = (0, c.useEffectEvent)(async (e, t) => {
                    var n;
                    if (null == r) throw (0, eV.c)("App messages are disabled for this view", I.r.MethodNotFound);
                    let a = (n = rz(), t.aborted || n && eC.safeParse(e).success ? Promise.resolve() : n?.sendFollowUpMessage?.(e));
                    if (null != a) return a;
                    t.throwIfAborted();
                    let {
                        context: o,
                        isVisible: i,
                        prompt: s,
                        title: l
                    } = (0, eW.c)(e), c = a2(t, i);
                    if (null == c) throw (0, eV.c)("MCP app messages require an available composer", I.r.MethodNotFound);
                    let u = r.get(ea.v).filter(e => "context" === e.kind),
                        p = crypto.randomUUID(),
                        _ = "chatgpt" === r.value.kind ? d?.onFollowUp : void 0,
                        E = performance.now();
                    try {
                        await a3({
                            source: "mcp_app",
                            sourceId: eL,
                            widgetSource: e$.widgetSource,
                            text: s,
                            structuredContent: o ?? (0, eW.b)(aX())
                        }, s, c, t, l, void 0, u)
                    } catch (e) {
                        throw _?.({
                            attemptId: p,
                            result: "FAILED",
                            durationMs: performance.now() - E
                        }, o), e
                    }
                    _?.({
                        attemptId: p,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - E
                    }, o), (0, eo.b)(r, u)
                }), a5 = e => {
                    e.throwIfAborted(), Q.assertActive(), e6?.assertActive?.()
                }, a4 = async (e, t, n, r) => {
                    a5(t);
                    let a = null != e6 ? await e6.handleRequest(e, t, e$, n) : await r();
                    return a5(t), a
                }, a8 = async (e, t, n) => {
                    let r = await a4({
                        method: "tools/call",
                        params: e
                    }, t, n, () => (async function(e) {
                        let {
                            appScope: t,
                            scope: n,
                            chatGptMessageId: r,
                            conversationId: a,
                            getTrustedToolScope: o,
                            hostId: i,
                            mcpAppId: s,
                            mcpServerStatuses: l,
                            access: c,
                            server: d,
                            signal: u,
                            toolCallParams: p
                        } = e, _ = await async function(e) {
                            let {
                                scope: t,
                                getTrustedToolScope: n,
                                hostId: r,
                                mcpServerStatuses: a,
                                server: o,
                                threadId: i,
                                toolArguments: s,
                                toolName: l
                            } = e, c = await eQ({
                                scope: t,
                                hostId: r,
                                mcpServerStatuses: a,
                                server: o,
                                threadId: i
                            }), d = eX(c), u = n(c);
                            return {
                                ...(0, eV.a)(() => (0, eB.h)({
                                    server: o,
                                    toolArguments: s,
                                    toolScope: u,
                                    toolName: l,
                                    tools: d
                                })),
                                serverStatus: c
                            }
                        }({
                            scope: n,
                            getTrustedToolScope: o,
                            hostId: i,
                            mcpServerStatuses: l,
                            server: d,
                            threadId: n.get(J.b, {
                                hostId: i,
                                conversationId: a
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        u.throwIfAborted(), c.assertActive();
                        let E = function(e, t) {
                                if (!(0, k.f)(e) || !t$(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(d, p._meta),
                            f = null == _.codexAppsResourceUri ? E : {
                                ...t$(E) ? E : {},
                                _codex_apps: {
                                    resource_uri: _.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, tQ.a)({
                                scope: t,
                                chatGptConversation: a.startsWith("chatgpt:") ? {
                                    id: a.slice(8),
                                    messageId: r ?? null
                                } : void 0,
                                toolIdentity: _.codexAppsToolIdentity,
                                access: c,
                                signal: u,
                                toolArguments: p.arguments ?? {}
                            });
                            if (null != e) return await e;
                            if (a.startsWith("chatgpt:")) return (0, e4.i)({
                                isCodexAppsServer: (0, k.f)(d),
                                toolResult: await (0, tX.c)(t, i, d, _.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: f,
                                    requestOptions: {
                                        widget: {
                                            conversationId: a,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let o = await (0, eK.b)(n, i).callMcpTool({
                                threadId: a,
                                server: d,
                                tool: _.name,
                                arguments: p.arguments ?? {},
                                _meta: f
                            }, {
                                widget: {
                                    conversationId: a,
                                    mcpAppId: s
                                }
                            });
                            return (0, e4.i)({
                                isCodexAppsServer: (0, k.f)(d),
                                toolResult: o
                            })
                        } catch (e) {
                            throw (0, eV.d)(e, "MCP tool call failed")
                        }
                    })({
                        appScope: t0,
                        scope: tK,
                        chatGptMessageId: e$.chatGptMessageId,
                        conversationId: s,
                        getTrustedToolScope: n3,
                        hostId: q,
                        mcpAppId: eL,
                        mcpServerStatuses: e2,
                        access: Q,
                        server: tf,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, x.s)(r)?.isError === !0) {
                        let t = e4.g.safeParse(r).data;
                        g.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eL,
                                initId: (0, D.h)(n7?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: e.name,
                                error: t?.content.find(e => "text" === e.type)?.text ?? M.F({
                                    error: M.L()
                                }).safeParse(t?.structuredContent).data?.error
                            }
                        })
                    }
                    return r
                }, a7 = (0, c.useEffectEvent)(async (e, t, n) => {
                    let a = r?.get(e9.b);
                    return a8((0, eV.g)(tZ, {
                        arguments: t,
                        name: e
                    }, "Invalid MCP tool call params"), n, a)
                }), a9 = (0, c.useEffectEvent)(async (e, t) => {
                    let n = r?.get(e9.b),
                        a = I.W.safeParse(e);
                    if (!a.success) throw (0, eV.e)("Invalid MCP proxy request", a.error.issues, a.error.issues.every(e => "params" === e.path[0]) ? I.r.InvalidParams : I.r.InvalidRequest);
                    let o = tK.get(J.b, {
                            hostId: q,
                            conversationId: s
                        }) ?? void 0,
                        {
                            method: i,
                            params: l
                        } = a.data;
                    if (s.startsWith("chatgpt:") && nt.some(e => e === i)) throw (0, eV.c)("Resource subscriptions require a local Codex thread", I.r.MethodNotFound);
                    switch (i) {
                        case A.a: {
                            let {
                                path: e
                            } = (0, eV.g)(A.b, l, "Invalid MCP file open params");
                            if (!rG) throw (0, eV.c)("File opening is unavailable", I.r.MethodNotFound);
                            if (null != rN) return (0, H.a)(tK, b.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "file_open",
                                action: "requested"
                            }), await rN(e, t), {};
                            if (!(0, S.Nh)(e) || !(0, S.Qh)(e)) throw (0, eV.c)("Cannot open this file path", I.r.InvalidParams);
                            return (0, H.a)(tK, b.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ed.openWorkspaceFile)({
                                scope: tK,
                                path: e,
                                cwd: null,
                                hostConfig: (0, eA.a)(t0, q),
                                hostId: q,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return rA?.includes("ping") ? a4(a.data, t, n, async () => ({})) : {};
                        case es.a:
                            if (!rP) throw (0, eV.c)("The plugin composer is unavailable", I.r.MethodNotFound);
                            if (navigator.userActivation?.isActive !== !0 || null == n7 || document.activeElement !== n7) throw (0, eV.c)("Starting a plugin draft requires a user gesture", I.r.InvalidRequest);
                            return t.throwIfAborted(), rU()?.assertActive?.(), (0, es.d)(r, _, nb), {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tx.safeParse(e);
                                if (!t.success) throw (0, eV.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: n
                                } = t.data;
                                if (tD(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw (0, eV.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(l);
                            t.throwIfAborted();
                            let n = e.options?.target ?? "active";
                            if ((0, H.a)(tK, b.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: n,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == r) throw (0, eV.c)("MCP app messages are disabled for this view", I.r.MethodNotFound);
                            if (e.options?.send === !1) {
                                let t = function(e, t) {
                                    let n = [],
                                        r = [];
                                    for (let t of e) "text" === t.type && (0, tP.e)(t) && null == (0, tP.b)(t) ? n.push(t.text) : r.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tG(r, t)
                                    }
                                }(e.content, {
                                    sourceName: eJ,
                                    icon: tA,
                                    server: tf,
                                    widgetSource: e$.widgetSource
                                });
                                if (rU()?.assertActive?.(), "new" === e.options.target) {
                                    if (rR) throw (0, eV.c)("New drafts are unavailable in this view", I.r.MethodNotFound);
                                    (0, es.b)(t0, t)
                                } else {
                                    if (null == r) throw (0, eV.c)("The composer is unavailable", I.r.MethodNotFound);
                                    (0, es.e)(r, t, "append")
                                }
                                return {}
                            }
                            let {
                                prompt: a,
                                message: o,
                                attachment: i
                            } = function(e, t, n) {
                                let r = [],
                                    a = [];
                                for (let t of e) "text" === t.type && null == (0, tP.b)(t) ? r.push(t.text) : a.push(t);
                                let o = tG(a, t),
                                    i = r.join("\n\n");
                                return {
                                    prompt: i.trim() ? i : n.formatMessage({
                                        id: "codex.mcpApp.contentMessage",
                                        defaultMessage: "Shared content from {appName}"
                                    }, {
                                        appName: t.sourceName
                                    }),
                                    message: {
                                        source: "mcp_app",
                                        sourceId: t.sessionId,
                                        text: i
                                    },
                                    attachment: o
                                }
                            }(e.content, {
                                sourceName: eJ,
                                icon: tA,
                                server: tf,
                                sessionId: eL,
                                widgetSource: e$.widgetSource
                            }, t3), s = !1;
                            e.options?.target === "new" && null != am && eD.a?.mcpAppSandbox != null && (a5(t), s = await eD.a.mcpAppSandbox.consumeUserGesture((0, eq.a)(am, n7)).catch(() => !1) === !0, a5(t));
                            let c = e.options?.target === "new" ? (0, tL.a)({
                                scope: t0,
                                recipient: r,
                                getNewThreadDestination: ta,
                                globalEntrypointIdentity: "global" === nP.source ? {
                                    connectorId: nP.connectorId,
                                    pluginId: nP.pluginId
                                } : void 0,
                                canCreateCodexThreads: rx,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (rR) throw (0, eV.c)("New threads are unavailable in this view", I.r.MethodNotFound);
                                    a5(t)
                                },
                                sourceName: eJ,
                                toolOrigin: a1,
                                signal: t
                            }) : a2(t);
                            if (null == c) throw (0, eV.c)("MCP app messages require an available composer", I.r.MethodNotFound);
                            let d = r?.get(ea.v).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eL
                            }) ?? [];
                            return await a3(o, a, c, t, void 0, i, d), null != r && (0, eo.b)(r, d), {}
                        }
                        case "ui/download-file":
                            return async function(e, t, n, r) {
                                try {
                                    let a;
                                    n.throwIfAborted(), r();
                                    let o = function(e) {
                                        let t, {
                                                contents: n
                                            } = e,
                                            r = n[0];
                                        if (1 !== n.length || r?.type !== "resource") return;
                                        let {
                                            resource: a
                                        } = r, o = decodeURIComponent((0, ex.j)(new URL(a.uri).pathname)).trim();
                                        if (0 === o.length || o.length > 255 || "." === o || ".." === o || /[/\\:*?"<>|\p{Cc}]/u.test(o)) return;
                                        if ("blob" in a) {
                                            if (a.blob.length > 4 * Math.ceil(8388608 / 3)) return;
                                            t = (0, eP.a)(a.blob)
                                        } else {
                                            if (a.text.length > 8388608) return;
                                            t = a.text
                                        }
                                        let i = new Blob([t], {
                                            type: a.mimeType ?? "application/octet-stream"
                                        });
                                        return i.size <= 8388608 ? {
                                            blob: i,
                                            name: o
                                        } : void 0
                                    }(t);
                                    if (null == o) return {
                                        isError: !0
                                    };
                                    let i = !1,
                                        s = !1;
                                    try {
                                        await new Promise(t => {
                                            a = t, n.addEventListener("abort", a, {
                                                once: !0
                                            }), (0, eR.f)(e, eN.ExternalLinkConfirmationDialog, {
                                                href: "",
                                                downloadFilename: o.name,
                                                initiator: "mcp_app_resource",
                                                signal: n,
                                                onDownload: () => {
                                                    if (!s && !n.aborted) try {
                                                        r(), (0, eS.a)(o.blob, o.name), i = !0
                                                    } catch {
                                                        return
                                                    }
                                                }
                                            }, {
                                                onDispose: t
                                            })
                                        })
                                    } finally {
                                        s = !0, null != a && n.removeEventListener("abort", a)
                                    }
                                    return {
                                        isError: !i
                                    }
                                } catch {
                                    return {
                                        isError: !0
                                    }
                                }
                            }(tK, (0, eV.g)(m.b.shape.params, l, "Invalid MCP file download params"), t, () => a5(t));
                        case "ui/update-model-context": {
                            if (null == r) throw (0, eV.c)("MCP model context requires an available composer", I.r.MethodNotFound);
                            let e = (0, eV.g)(t2, l, "Invalid MCP model context params");
                            if (null != a2() && tD(e.content), nF && e.content?.some(e => "image" === e.type && !(0, S.Si)({
                                    type: e.mimeType
                                }))) throw (0, eV.c)("Invalid MCP model context params", I.r.InvalidParams);
                            let t = null != ti || nF && null == tM;
                            if (t && tK.get(eE.s, eL)?.sourceMcpAppId !== eO) throw (0, eV.c)("The widget source is no longer active", -32e3);
                            rU()?.onModelContextUpdate?.(e, eL), (0, en.a)(r);
                            let n = (e => {
                                var t;
                                if (null == r) return null;
                                let n = e.content ?? [],
                                    a = n.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return t = {
                                    kind: "context",
                                    widgetSource: e$.widgetSource,
                                    untrusted: !0,
                                    content: n,
                                    server: tf,
                                    composerIcon: tA ?? void 0,
                                    sourceName: eJ,
                                    id: eL,
                                    modelContextUpdateId: a ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != r && ((0, eo.g)(r, t), (0, eZ.f)(tK, eL, r.get(ea.v).find(e => e.id === eL) ?? null)), a
                            })(e);
                            if ((0, H.a)(tK, b.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "model_context",
                                    action: "updated"
                                }), t) {
                                let t = await aJ(e, !0);
                                null != ti && (0, eV.b)(t)
                            }
                            return null == n ? {} : {
                                _meta: {
                                    [C.a]: {
                                        updateId: n
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return a8((0, eV.g)(tZ, l, "Invalid MCP tool call params"), t, n);
                        case "resources/read": {
                            let e = (0, eV.g)(na, l, "Invalid MCP resource read params");
                            if (a5(t), (0, H.a)(tK, b.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "resource",
                                    action: "read"
                                }), e6?.readHostResource != null) {
                                a5(t);
                                let n = await e6.readHostResource(e, t);
                                if (a5(t), null != n) return n
                            }
                            return (0, eV.a)(() => {
                                (0, eB.a)({
                                    mcpAppScope: e$,
                                    server: tf,
                                    uri: e.uri
                                })
                            }), await a4({
                                method: i,
                                params: e
                            }, t, n, async () => {
                                try {
                                    return await (0, e3.d)({
                                        scope: tK,
                                        appContext: e$.appContext,
                                        connectorId: (0, k.f)(tf) ? nb : null,
                                        hostId: q,
                                        mcpAppId: eL,
                                        originCallId: e$.originCallId ?? null,
                                        threadId: s,
                                        server: tf,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw (0, eV.d)(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eV.g)(na, l, "Invalid MCP resource subscribe params");
                            return a5(t), (0, H.a)(tK, b.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "resource",
                                action: "subscribe"
                            }), await rd.subscribe(e.uri, t)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eV.g)(na, l, "Invalid MCP resource unsubscribe params");
                            return a5(t), (0, H.a)(tK, b.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await rd.unsubscribe(e.uri, t)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eV.g)(no, l, "Invalid MCP event subscribe params"),
                                t = tK.get(eE.h, eO)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = n3(await eQ({
                                    scope: tK,
                                    hostId: q,
                                    mcpServerStatuses: e2,
                                    server: tf,
                                    threadId: o
                                }))), null == n) throw (0, eV.c)("MCP event subscriptions require a trusted connector scope", I.r.InternalError);
                            return ru.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eV.g)(ni, l, "Invalid MCP event unsubscribe params");
                            return ru.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return a4(a.data, t, n, async () => {
                                let e = await eQ({
                                        scope: tK,
                                        hostId: q,
                                        mcpServerStatuses: (0, k.f)(tf) ? e2 : void 0,
                                        server: tf,
                                        threadId: o
                                    }),
                                    t = eX(e),
                                    n = n3(e);
                                return {
                                    tools: (0, eV.a)(() => (0, eB.e)({
                                        server: tf,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return a4(a.data, t, n, async () => (0, k.f)(tf) ? {
                                resources: []
                            } : {
                                resources: (await eQ({
                                    scope: tK,
                                    hostId: q,
                                    server: tf,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return a4(a.data, t, n, async () => (0, k.f)(tf) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eQ({
                                    scope: tK,
                                    hostId: q,
                                    server: tf,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return a4(a.data, t, n, async () => ({
                                prompts: []
                            }));
                        default:
                            return a4(a.data, t, n, () => {
                                throw (0, eV.c)(`Unsupported MCP proxy method: ${i}`, I.r.MethodNotFound)
                            })
                    }
                }), oe = (0, c.useEffectEvent)(async (e, r) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(963552)]).then(n.bind(n, "SEK8"));
                    a5(r), a(nr(), {
                        Frame: t,
                        sourceMcpAppId: eO,
                        signal: r,
                        handleRequest: async (e, t) => I.Z.parse(await a9(e, t ?? r))
                    }, e)
                });
            (0, c.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", n8(e), () => {
                    e.remove(), n8(t => t === e ? null : t), rt(!1)
                }
            }, [eL]), (0, c.useLayoutEffect)(() => {
                null != n4 && (void 0 === nf ? n4.removeAttribute("data-mcp-app-origin-generated") : n4.setAttribute("data-mcp-app-origin-generated", nf))
            }, [n4, nf]), (0, c.useLayoutEffect)(() => {
                null != n4 && null != n7 && function(e) {
                    let {
                        frameElement: t,
                        sandboxElement: n,
                        fullSurface: r,
                        liftModal: a,
                        inheritHostBackground: o,
                        isCardInlineSurface: i,
                        isFullScreen: s,
                        isWidgetVisible: l,
                        prefersBorder: c,
                        surfaceBackgroundColor: d,
                        title: u,
                        globalSurface: p
                    } = e, _ = !s && !r && !i;
                    t.className = (0, tC.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", a && "z-50", !s && !r && !i && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tC.b)("h-full min-h-0 min-w-0 w-full overflow-hidden open:rounded-none!", !l && "pointer-events-none opacity-0", _ && "rounded-lg", i && c && "borderedCardSandbox-xKKhHG", s && "min-h-0 flex-1"), n.style.backgroundColor = !a && (o || p) ? d ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = u
                }({
                    frameElement: n4,
                    sandboxElement: n7,
                    fullSurface: f,
                    liftModal: aN,
                    inheritHostBackground: ef,
                    isCardInlineSurface: aA,
                    isFullScreen: nq,
                    isWidgetVisible: nY && null != nz,
                    prefersBorder: ng,
                    surfaceBackgroundColor: nj,
                    title: tN,
                    globalSurface: tS
                })
            }, [f, aN, n4, ef, aA, nq, nY, nz, ng, n7, nj, tN, tS]), (0, c.useLayoutEffect)(() => {
                if (null == n4) return;
                if (null != ab) {
                    let e = ab.dataset.overlayOwner;
                    null == e ? n4.removeAttribute("data-overlay-owner") : n4.setAttribute("data-overlay-owner", e)
                }
                let e = nq ? aT : ab,
                    t = ax ? (0, er.a)() : aD;
                if (aN && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === n4.style.display;
                    n4.style.display = "none", e || g.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: aF().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (n4.parentElement !== t && (n4.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(n4, null) : t.appendChild(n4), g.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: aF().safe.mcpAppId,
                                showInModal: aN
                            }
                        })), re || rt(!0), null == e) {
                        let e = "none" === n4.style.display;
                        n4.style.display = "none", e || g.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: aF().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete n4.dataset.mcpAppParked,
                        function(e) {
                            let t, n = !e.isInGlobalHost || e.modalOpen || e.isFullScreen ? null : e.anchorElement.closest("[data-app-shell-right-panel-full-width]");
                            if (null == n) return tR(e);
                            let r = () => {
                                    "true" === n.getAttribute("data-app-shell-right-panel-full-width") ? (t?.(), t = void 0, e.frameElement.style.display = "none") : null == t && (t = tR(e))
                                },
                                a = new MutationObserver(r);
                            return a.observe(n, {
                                attributes: !0,
                                attributeFilter: ["data-app-shell-right-panel-full-width"]
                            }), r(), () => {
                                a.disconnect(), t?.()
                            }
                        }({
                            sessionId: eL,
                            sharesScrollHost: aP?.contains(t) === !0,
                            frameElement: n4,
                            frameContainer: t,
                            fullSurface: f,
                            modalOpen: aN,
                            sandboxElement: n7,
                            isFullScreen: nq,
                            isInGlobalHost: ax,
                            anchorElement: e,
                            rightPanelLayoutTick: td
                        })
                };
                return f || nq || aN || ax || !K || null == e || e.hidden || "true" !== n4.dataset.mcpAppParked ? n() : (0, tp.a)(e, n)
            }, [eL, n4, f, aN, K, aP, ab, nq, ax, re, td, n7, aT, aD]);
            let ot = e6?.autoFocus === !0;
            (0, c.useEffect)(() => {
                ot && nY && null != ab && n7?.focus()
            }, [ot, nY, ab, n7]), (0, c.useLayoutEffect)(() => (n$.current = !1, () => {
                n$.current = !0
            }), [eL, tK]);
            let on = (0, c.useEffectEvent)(async () => {
                    try {
                        if (e6?.assertActive?.(), !rZ) return;
                        let e = tB.openInAppUrl ?? M.L().nullable().parse(await ri?.getCurrentPath?.(void 0));
                        if (e6?.assertActive?.(), null == e) return;
                        let t = e6?.openInApp?.validateUrl(null == tB.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, ec.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                or = (0, c.useEffectEvent)(e => {
                    let t = tK.get(et.l.tabs$).some(e => e.tabId === (0, te.b)(eL));
                    (0, te.c)(tK, {
                        source: {
                            hostId: q,
                            server: tf,
                            connectorId: nb ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tA,
                        toolIcon: ty,
                        mcpAppId: eL,
                        onExitFullScreen: e,
                        onPanelElementChange: rr,
                        title: tB.displayModeTitle ?? tw,
                        openInAppName: e6?.openInApp?.appName,
                        onOpenInApp: rZ ? () => {
                            on()
                        } : void 0
                    })
                }),
                oa = (0, c.useEffectEvent)(() => {
                    let e = tK.get(eE.s, eL);
                    !n$.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eE.c)(tK, eL)
                }),
                oo = (0, c.useEffectEvent)(e => {
                    let t = rU()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nP);
                    else {
                        let t = M.F({
                            type: M.z("interaction"),
                            label: M.L()
                        }).safeParse(e);
                        t.success && (0, H.a)(tK, T.l, {
                            ...nP,
                            host: "codex",
                            actionType: (0, tr.b)(t.data.label)
                        })
                    }
                });
            (0, c.useLayoutEffect)(() => {
                nq ? or(oa) : (0, te.a)(tK, eL)
            }, [nq, eL, tK, tA?.alt, tA?.knownAppId, tA?.logoDarkUrl, tA?.logoUrl, ty?.logoUrl, ty?.logoDarkUrl, tw, tB.displayModeTitle, rZ, e6?.openInApp?.appName]), (0, c.useLayoutEffect)(() => {
                if (null != rp) return r_.watch(e => {
                    let {
                        get: t
                    } = e, n = t(tt.e, rp);
                    null != n && (0, tt.b)(n).updateTab(r_, rp, {
                        documentLabel$: rE
                    })
                })
            }, [rE, rp, r_]);
            let oi = (0, c.useEffectEvent)(() => {
                    let e = nq ? aT : ab;
                    if (null == e || !e.checkVisibility({
                            visibilityProperty: !0
                        })) return {
                        distance: 1 / 0,
                        top: -1 / 0
                    };
                    let t = e.getBoundingClientRect(),
                        n = e.closest(".thread-scroll-container")?.getBoundingClientRect();
                    return {
                        distance: Math.max((n?.top ?? 0) - t.bottom, t.top - (n?.bottom ?? e.ownerDocument.documentElement.clientHeight), 0),
                        top: t.top
                    }
                }),
                os = null != n4 && re && null != aG && null != am && null != ah,
                ol = (0, c.useEffectEvent)(e => {
                    let t;
                    if (!os) return;
                    let n = e8.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: eL,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    nJ.current = n, n.mark("surface_mcp_app"), (0, eE.E)(nr(), eL, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), rg(t9), n1.current = null, n2.current = null;
                    let r = aI();
                    if (null == r) return void ak("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: o,
                        iframeAllow: i
                    } = (0, tu.b)(nI, nx, nG), s = (0, eY.a)(aC, am, ah);
                    s instanceof HTMLIFrameElement ? (s.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), s.allow = i, s.allowFullscreen = !0) : (s.addEventListener("enter-html-full-screen", () => {
                        s.isConnected && !s.matches(":fullscreen") && (s.popover = "manual", s.showPopover())
                    }), s.addEventListener("leave-html-full-screen", () => {
                        s.popover = null
                    })), s.classList.add("pointer-events-none", "opacity-0"), n4.appendChild(s), n9(s), n.mark("rendered");
                    let l = new AbortController,
                        c = !1,
                        u = new eF,
                        _ = null == d ? null : new eb(d, {
                            getPanelContext: ay,
                            renderControl(e, t) {
                                l.signal.aborted || n5(n => null != t ? {
                                    owner: e,
                                    control: t
                                } : n?.owner === e ? null : n)
                            }
                        }),
                        E = null,
                        f = crypto.randomUUID(),
                        h = aX(),
                        T = ac(),
                        {
                            sourceMcpAppId: b,
                            toolInput: R,
                            toolOutput: P,
                            toolResponseMetadata: x,
                            toolResult: G,
                            toolStatus: L,
                            toolResultNotification: O,
                            toolCallCancellationReason: F
                        } = aE(),
                        k = new tJ.b(nr(), b, e => {
                            aj({
                                href: e
                            }, l.signal).catch(e => {
                                l.signal.aborted || (0, ew.d)(e, aF())
                            })
                        });
                    n1.current = null == G || null == P ? null : {
                        widgetId: f,
                        widgetState: h,
                        sourceMcpAppId: b,
                        toolInput: R,
                        toolOutput: P,
                        toolResponseMetadata: x,
                        toolStatus: L,
                        toolResult: O,
                        toolCallCancellationReason: F
                    };
                    let U = rF ? {
                            requestConnectPlugin: async e => rU()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tY.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = rU()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => rU()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => rU()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        W = null == G ? null : U ?? af(G),
                        V = null == W ? null : {
                            ...W,
                            requestDeclinePluginSuggestions: U?.requestDeclinePluginSuggestions ?? (null == W.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = aE().toolResult,
                                    t = null == e ? void 0 : af(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await eD.a?.mcpAppSandbox?.consumeUserGesture((0, eq.a)(am, s)).catch(() => !1) || l.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        j = () => {
                            let e = rU()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        Y = {
                            ...V,
                            downloadBlob: r3 ? e => rU()?.downloadBlob?.(e, l.signal) : void 0,
                            triggerHaptic: r6 ? e => rU()?.triggerHaptic?.(e, l.signal) : void 0,
                            requestCheckout: rB ? async e => {
                                l.signal.throwIfAborted();
                                let t = rU();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, l.signal)
                            } : void 0,
                            requestModal: async e => {
                                l.signal.aborted || (rV ? await rz()?.requestModal(e) : null != at() && (rU()?.requestModal == null || M.F({
                                    params: M.F({
                                        view: M.z("accountLinking")
                                    })
                                }).safeParse(e).success) ? await az(e, l.signal, ts) : rU()?.requestModal != null ? await rU()?.requestModal?.(e, l.signal) : await oe(e, l.signal))
                            },
                            uploadFile: r5 ? (e, t) => j().uploadFile(e, t, l.signal) : void 0,
                            getFileDownloadUrl: r5 ? e => j().getFileDownloadUrl(e, l.signal) : void 0,
                            getFileMetadata: r5 ? e => j().getFileMetadata(e, l.signal) : void 0,
                            selectFiles: r5 ? () => j().selectFiles(l.signal) : void 0,
                            share: r4 ? async e => {
                                l.signal.throwIfAborted(), await rU()?.share?.(e, l.signal)
                            } : void 0,
                            requestLinkToConnector: rV || r9 ? async e => l.signal.aborted ? {
                                didConnect: !1
                            } : await (rz()?.requestLinkToConnector ?? rU()?.requestLinkToConnector)?.(e, l.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: rY ? e => {
                                l.signal.aborted || (rz()?.showToast ?? rU()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: rk || rV && rW || rJ ? () => {
                                l.signal.aborted || rU()?.allowsInteractiveDismissal === !1 || (rk || rV || rU()?.displayMode != null ? aV() : a$({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: (e, t) => {
                                let n = AbortSignal.any([t, l.signal]),
                                    r = E?.notifyMcpAppsMcpNotification;
                                if (ry && null != r) {
                                    let t = k.handleRequest(e, l.signal, e => (0, eV.h)(r(e)));
                                    if (null != t) return t
                                }
                                let a = u.handleRequest(e, {
                                    sandboxElement: s,
                                    sandboxId: am,
                                    initId: q,
                                    signal: l.signal,
                                    notify: E?.notifyMcpAppsMcpNotification
                                });
                                if (null != a) return a;
                                let o = y.h.safeParse(e);
                                if (o.success && null != p) {
                                    for (let {
                                            component: e,
                                            level: t,
                                            message: n,
                                            metadata: r
                                        }
                                        of o.data.params.entries) g.a[t](n, {
                                        safe: {
                                            component: e,
                                            metadata: r,
                                            pluginId: p
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let i = y.g.safeParse(e);
                                return i.success && null != _ ? _.handleRequest(i.data.params) : a9(e, n).catch(t => {
                                    if (!n.aborted) {
                                        let n = aF();
                                        g.a.warning("App request failed", {
                                            safe: {
                                                ...(0, ew.b)(t),
                                                connectorId: n.safe.connectorId,
                                                mcpAppId: n.safe.mcpAppId,
                                                sandboxId: n.safe.sandboxId,
                                                initId: n.safe.initId
                                            },
                                            sensitive: {
                                                method: I.W.safeParse(e).data?.method,
                                                hostId: n.sensitive.hostId,
                                                server: n.sensitive.server,
                                                error: t
                                            }
                                        })
                                    }
                                    throw t
                                })
                            },
                            callTool: (e, t) => a7(e, t, l.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!l.signal.aborted) {
                                    if (ew.h.safeParse(e).success) return void(0, ew.d)(e, aF());
                                    ak("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: aU,
                            notifyIntrinsicWidth: aW,
                            notifyTabMetadata: e => {
                                let t = nl.safeParse(e);
                                t.success && !l.signal.aborted && rE.set(t.data)
                            },
                            notifyNavigation: e => {
                                l.signal.aborted || aH(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                l.signal.aborted || rU()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => aj(e, l.signal),
                            openPlaidLink: aa ? e => aY(e, l.signal) : void 0,
                            initializeMcpApp: e => {
                                if (l.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return aK(m.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw ak("configuration", e), e
                                }
                            },
                            requestClose: rW ? aV : void 0,
                            requestDisplayMode: a$,
                            openConversationOverlay: rK ? async e => {
                                l.signal.throwIfAborted(), await rU()?.openConversationOverlay?.(e, l.signal)
                            } : void 0,
                            notifyAutofillCandidates: rQ ? e => {
                                l.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: r$ ? e => {
                                l.signal.throwIfAborted();
                                let t = rU()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, s, l.signal)
                            } : void 0,
                            setOpenInAppUrl: rX ? e => {
                                l.signal.throwIfAborted();
                                let {
                                    href: t
                                } = M.F({
                                    href: M.L().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, eE.E)(nr(), eL, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = rU()?.openInApp?.validateUrl(t);
                                null != n && (0, eE.E)(nr(), eL, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: r0 ? async e => {
                                l.signal.throwIfAborted(), await rU()?.presentation?.requestFocusedObject?.(e, l.signal)
                            } : void 0,
                            requestCloseFocusedObject: r1 ? async () => {
                                l.signal.throwIfAborted(), await rU()?.presentation?.requestCloseFocusedObject?.(l.signal)
                            } : void 0,
                            requestTargetedReply: rj ? async e => {
                                if (l.signal.aborted) return;
                                let t = rz()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = rU()?.setTargetedReply;
                                if (null != n) return void n(e, l.signal);
                                let r = rU()?.requestTargetedReply;
                                null != r && await (0, eM.b)(e, r, rv, l.signal)
                            } : void 0,
                            requestReconnectConnector: r7 ? async () => {
                                let e = rU()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(l.signal)
                            } : void 0,
                            requestConnectSheet: r8 ? e => {
                                let t = rU()?.requestConnectSheet;
                                if (null != t) return t(e, l.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => a6(e, l.signal),
                            sendInstrument: e => {
                                if (!l.signal.aborted) {
                                    if (rM || null != V) {
                                        let t = (0, v.h)(e);
                                        if (null != t) return void(0, H.a)(nr(), t.messageType, t.payload)
                                    }
                                    ew.f.safeParse(e).success && ((0, ew.d)(e, aF()), aM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), V?.sendInstrument(e);
                                    let t = at() ?? ar();
                                    t?.sendInstrument(e), (null == t && null == V || M.F({
                                        type: M.z("interaction")
                                    }).safeParse(e).success) && oo(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!l.signal.aborted) return aJ(t, M.F({
                                    waitForPersistence: M.z(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        z = (0, eq.b)({
                            hostApiHandlers: Y,
                            assertActive: () => {
                                l.signal.throwIfAborted(), nc(), rU()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: am,
                            signal: l.signal,
                            sourceUrl: r.sourceUrl,
                            webview: s
                        }),
                        q = (0, D.h)(s.getAttribute("src") ?? void 0),
                        B = aF();
                    g.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nM,
                            connectorId: B.safe.connectorId,
                            mcpAppId: B.safe.mcpAppId,
                            sandboxId: B.safe.sandboxId,
                            initId: q
                        },
                        sensitive: {
                            hostId: B.sensitive.hostId,
                            server: B.sensitive.server
                        }
                    });
                    let K = setTimeout(() => {
                        ak("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), X(), $()
                    }, 5e4);

                    function $() {
                        clearTimeout(K), e()
                    }

                    function X() {
                        l.signal.aborted || (clearTimeout(K), l.abort(), n5(null), rE.set(null), rI(), nJ.current === n && (nJ.current = null), n.isRecording() && n.abort("navigation_away"), u[Symbol.dispose](), k[Symbol.dispose](), _?.[Symbol.dispose](), n1.current = null, n2.current = null, nQ.current = null, nX.current = null, nZ.current = null, (0, eE.E)(nr(), eL, {
                            isWidgetReady: !1
                        }), ro(null), rg(t9), null != E && (0, eV.h)(E.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), s.remove(), s instanceof HTMLIFrameElement || s.destroy?.(), g.a.info("Removed app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), n9(e => e === s ? null : e))
                    }
                    return z.then(async e => {
                        if (l.signal.aborted) return;
                        if (eD.a?.mcpAppSandbox != null) {
                            if (null == q) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, tj.b)({
                                scope: t0,
                                request: {
                                    identity: Q.serverIdentity,
                                    pluginId: nh() ?? void 0,
                                    permissions: nI,
                                    initId: q,
                                    sandboxId: am
                                },
                                origin: r.sandboxOrigin,
                                appName: nm(),
                                signal: l.signal,
                                onReload: nL
                            })
                        }
                        l.signal.throwIfAborted(), n.mark("sandbox_ready"), g.a.info("Connected app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), E = e;
                        let i = e.notifyMcpAppsMcpNotification,
                            s = eD.a?.mcpAppSandbox != null && null != i;
                        null != i && _?.setNotificationSender(e => (0, eV.h)(i(e))), null != e.applyAutofillCandidate && (t = await rU()?.autofill?.(e.applyAutofillCandidate, l.signal), l.signal.throwIfAborted()), ro({
                            api: e,
                            widgetId: f
                        });
                        let {
                            displayMode: u,
                            availableDisplayModes: m
                        } = aB(), I = tT(), {
                            containerDimensions: b
                        } = aL(n4), v = tb(rU()?.device), D = nr().get(eH.a), G = D["--color-background-primary"], L = aq(u), O = {
                            "openai/viewer-header": ry && null != i,
                            "openai/viewer-document-controls": ry && null != i,
                            ...tm({
                                availableDisplayModes: m,
                                containerDimensions: b,
                                displayMode: u,
                                locale: r.locale,
                                modelContextHostState: nU(),
                                deepLink: aQ(),
                                safeAreaInsets: L.insets,
                                styleVariables: D,
                                theme: I,
                                userAgent: v,
                                toolInfo: rU()?.toolInfo
                            }),
                            ...null == d || null == i ? {} : {
                                [y.a]: !0
                            },
                            ...null == p ? {} : {
                                [y.d]: !0
                            }
                        }, {
                            csp: F
                        } = r, M = {
                            [C.a]: {},
                            ...s ? {
                                "openai/find": {}
                            } : {},
                            ...rD ? {
                                [w.a]: {
                                    draft: ny() ? {} : void 0
                                }
                            } : {},
                            "openai/skillsDeepLinks": {},
                            ...r.experimentalCapabilities,
                            ...rP ? {
                                [es.a]: {}
                            } : {},
                            ...rG ? {
                                "openai/files": {}
                            } : {}
                        };
                        e.supportsWidgetTextureReceiver ? M[N.b] = {} : delete M[N.b];
                        let k = nv ? {} : void 0;
                        rD && (k = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == _ && aO(), g.a.info("Starting app widget", {
                            safe: {
                                displayMode: u,
                                initId: q
                            }
                        }), c = !0;
                        let U = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != rO,
                                expectedReadySignal: rO,
                                csp: F,
                                displayMode: rq(u),
                                features: o,
                                subjectId: rU()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nA,
                                html: r.html,
                                isFirstParty: rM || null != V || r7,
                                isSidebarOpen: rU()?.presentation?.isSidebarOpen === !0,
                                isTombstone: rU()?.isTombstone === !0,
                                maxHeight: b.maxHeight,
                                maxWidth: b.maxWidth,
                                measureWidth: !0 === nu,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...s ? [eG] : [], ...ry && null != i ? [tJ.a] : [], ...rD || !nv ? ["ui/message"] : [], ...rC?.split(";") ?? [], ...rP ? [es.a] : [], ...rG ? [A.a] : [], ...null == _ || null == i ? [] : [y.c], ...null == p ? [] : [y.e], ...null == i ? [] : [...nt, ...rc && !rL ? nn : []]],
                                    hostCapabilities: {
                                        downloadFile: {},
                                        experimental: M,
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: k,
                                        updateModelContext: nv ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(S.kj.map(e => [e, o.includes(S.jj[e].feature) ? {} : void 0])),
                                            csp: {
                                                baseUriDomains: F.baseUriDomains,
                                                connectDomains: F.connectDomains,
                                                frameDomains: F.frameDomains,
                                                resourceDomains: F.resourceDomains
                                            }
                                        }
                                    },
                                    hostContext: O,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: nr().get(ey.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tS
                                },
                                safeArea: L,
                                theme: I,
                                toolInput: R,
                                toolOutput: P,
                                toolResponseMetadata: x,
                                userAgent: v,
                                viewParams: T,
                                widgetId: f,
                                widgetState: h
                            }),
                            W = !1;
                        for await (let t of U) {
                            let r = nr().get(eE.s, eL)?.sandboxError;
                            if (l.signal.aborted || (0, tz.f)(r)) break;
                            if (ew.e.safeParse(t).success) return;
                            ew.f.safeParse(t).success && ((0, ew.d)(t, aF()), aM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let a = ew.g.safeParse(t);
                            if (a.success) {
                                if ("mcp_initialization_timeout" === a.data.reason) throw new tz.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (W || !eq.d.safeParse(t).success) continue;
                            W = !0, $();
                            let {
                                displayMode: o,
                                availableDisplayModes: i
                            } = aB(), s = {
                                ...O,
                                displayMode: o,
                                availableDisplayModes: [...i]
                            };
                            (0, eE.E)(nr(), eL, {
                                isWidgetReady: !0
                            }), (0, eV.h)(e.setWidgetView({
                                displayMode: rq(o),
                                isTombstone: rU()?.isTombstone === !0,
                                viewParams: T,
                                widgetId: f
                            })), (0, eV.h)(e.setTheme({
                                theme: I
                            })), (0, eV.h)(e.setSafeArea({
                                safeArea: L
                            }));
                            let c = {
                                isSidebarOpen: rU()?.presentation?.isSidebarOpen === !0,
                                maxHeight: b.maxHeight,
                                maxWidth: b.maxWidth,
                                surfaceBackgroundColor: G
                            };
                            nZ.current = c, (0, eV.h)(e.setAdditionalGlobals({
                                additionalGlobals: c
                            })), (0, eV.h)(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), g.a.info("Started app widget", {
                                safe: {
                                    displayMode: o,
                                    initId: q
                                }
                            }), n.end()
                        }
                        if (!W && !l.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        l.signal.aborted || (c && aM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), ak(null == E ? "handshake" : "widget", e)), X()
                    }).finally(() => {
                        $()
                    }), X
                });
            (0, c.useLayoutEffect)(() => {
                if (os) return nr().get(tv, void 0)(ol, e => ak("handshake", e), oi)
            }, [t0, os, nv, nA, nG, nT, nD, r3, r6, rI, rG, rD, rP, aa, rW, G, null, q, nM, n4, f, R, d, p, rL, nu, rF, rB, r4, r5, r8, r7, r9, rk, rY, rV, rj, rJ, rX, rK, r$, rQ, r0, r1, rM, ry, rC, rO, a.requiresMcpInitialization, ts, re, eL, ag, rv, am, aG, ah, aC, tf, rc, rw, tS]), (0, c.useLayoutEffect)(() => {
                rd.setConversation(s).catch(e => {
                    g.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: s,
                            mcpAppId: eL
                        },
                        sensitive: {
                            error: e,
                            hostId: q
                        }
                    })
                })
            }, [s, q, rd, eL]), (0, c.useLayoutEffect)(() => {
                ru.setConversation(s, rc && nN).catch(e => {
                    g.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [s, ru, nN, rc]), (0, c.useLayoutEffect)(() => {
                let e = ri?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = ru.connectNotificationSink(e);
                return () => {
                    t(), ru.clear().catch(e => {
                        g.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [ru, ri]), (0, c.useLayoutEffect)(() => {
                let e = ri?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = rd.connectNotificationSink(t => (0, eV.h)(e(t)));
                return () => {
                    t(), rd.clear().catch(e => {
                        g.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [rd, ri]), (0, c.useEffect)(() => {
                if (!nY || null == ri || null == rs) return;
                let e = {
                        widgetId: rs,
                        sourceMcpAppId: eO,
                        toolInput: ao,
                        toolOutput: as,
                        toolResponseMetadata: a_,
                        toolStatus: ap,
                        toolCallCancellationReason: tW,
                        toolResult: au
                    },
                    t = {
                        ...e,
                        widgetState: n0
                    };
                P()(n1.current, t) || (n1.current = t, (0, eV.h)(ri.setWidgetData({
                    toolInput: ao,
                    toolOutput: as,
                    toolResponseMetadata: a_,
                    widgetId: rs,
                    widgetState: n0
                })));
                let n = n2.current?.widgetId === rs ? n2.current : null;
                if (P()(n, e)) return;
                n2.current = e;
                let r = n?.sourceMcpAppId !== eO;
                null != ao && (r || !P()(n?.toolInput, ao)) && (0, eV.h)(ri.notifyMcpAppsToolInput({
                    arguments: ao
                })), "cancelled" === ap ? (r || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tW) && (0, eV.h)(ri.notifyMcpAppsToolCancelled({
                    reason: tW
                })) : null == au || !r && P()(n?.toolResult, e.toolResult) && n?.toolStatus === ap && P()(n?.toolInput, ao) && P()(n?.toolResponseMetadata, a_) || (0, eV.h)(ri.notifyMcpAppsToolResult({
                    ...au,
                    isError: "error" === ap || au.isError,
                    _meta: "error" === ap ? {
                        ...au._meta,
                        status: "error"
                    } : au._meta
                }))
            }, [nY, au, ri, eO, ao, as, a_, ap, tW, rs, n0]), (0, c.useEffect)(() => {
                nY && null != ri && (0, eV.h)(ri.notifyMcpAppsHostContext({
                    hostContext: {
                        [C.a]: nk
                    }
                }))
            }, [nY, nk, ri]), (0, c.useEffect)(() => {
                if (nY && null != ri && null != n4) return d?.observeHostContext?.(tK, n4, e => {
                    (0, eV.h)(ri.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [d, n4, nY, ri, tK]), (0, c.useEffect)(() => {
                if (null == n4 || !av || null == ri || null == rs || nq && null == aT) return;
                let e = aq(nB);
                (0, eV.h)(ri.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: rq(nB),
                    isTombstone: rU()?.isTombstone === !0,
                    viewParams: al,
                    widgetId: rs
                };
                return P()(nQ.current, t) || (nQ.current = t, (0, eV.h)(ri.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: r,
                            onLayout: a
                        } = e, o = null, i = () => {
                            null == o && (o = window.requestAnimationFrame(() => {
                                o = null, a()
                            }))
                        };
                        if (i(), "u" < typeof ResizeObserver) return () => {
                            null != o && window.cancelAnimationFrame(o)
                        };
                        let s = new ResizeObserver(i);
                        return s.observe(t), r && n?.parentElement != null && s.observe(n.parentElement), () => {
                            s.disconnect(), null != o && window.cancelAnimationFrame(o)
                        }
                    }({
                        frameElement: n4,
                        inlineAnchor: ab,
                        fitWidth: nu,
                        onLayout: () => {
                            if ("true" === n4.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = aL(n4), n = {
                                isSidebarOpen: rU()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: aN ? "transparent" : nj
                            };
                            P()(nZ.current, n) || (nZ.current = n, (0, eV.h)(ri.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let r = tm({
                                availableDisplayModes: tB.availableDisplayModes ?? G,
                                containerDimensions: t,
                                displayMode: nB,
                                locale: t3.locale,
                                deepLink: tc,
                                safeAreaInsets: e.insets,
                                styleVariables: nV,
                                theme: tT(),
                                userAgent: tb(rU()?.device),
                                toolInfo: rU()?.toolInfo
                            });
                            P()(nX.current, r) || (nX.current?.theme !== r.theme && (0, eV.h)(ri.setTheme({
                                theme: r.theme
                            })), nX.current = r, (0, eV.h)(ri.notifyMcpAppsHostContext({
                                hostContext: r
                            })))
                        }
                    })
            }, [n4, nu, nK, f, R, ab, t3.locale, nV, G, tB.availableDisplayModes, av, nq, ae, r2, aN, e6?.displayMode, e6?.showModalCloseButton, rm, tc, nH, ri, aT, nj, tS, al, rs, nB]);
            let oc = rm && !nq,
                od = rm && nq && nW?.tabId === (0, te.b)(eL);
            return (0, i.jsxs)(i.Fragment, {
                children: [n6 && n4 && av && nY ? (0, L.createPortal)((0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                    children: n6.control
                }), n4) : null, f && av && nY && null != n7 && null != am ? (0, i.jsx)(tE, {
                    sandboxElement: n7,
                    sandboxId: am
                }) : null, nY && null != n7 && null != am ? (0, i.jsx)(tl, {
                    panelTabId: rp,
                    sandboxElement: n7,
                    sandboxId: am,
                    title: tN
                }) : null, null != rT && av ? (0, i.jsx)(eU.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...rT,
                        onCancel: rI,
                        onConfirm: rb
                    }
                }) : null, od ? (0, i.jsx)(ee.a.RightPanelTabListBefore, {
                    children: (0, i.jsx)(tH, {
                        canGoBack: rf.canGoBack,
                        canGoForward: rf.canGoForward,
                        className: "h-full px-1",
                        onBack: () => a0(-1),
                        onForward: () => a0(1)
                    })
                }) : null, oc && null != n4 && !nq ? (0, L.createPortal)((0, i.jsx)(tH, {
                    canGoBack: rf.canGoBack,
                    canGoForward: rf.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => a0(-1),
                    onForward: () => a0(1)
                }), n4) : null]
            })
        }
        var nd = n("Za0m");

        function nu(e) {
            let t, n, r, a = (0, s.c)(9),
                {
                    isAccessRevoked: o,
                    allowGlobalHost: d,
                    sessionId: u
                } = e,
                p = void 0 !== o && o,
                _ = void 0 === d || d,
                f = (0, l.y)(E.a),
                h = (0, l.x)(eE.s, u);
            return a[0] !== f || a[1] !== u ? (t = () => {
                let e, t, n, r, a, o, i, s, l, c, d;
                return n = !1, r = !1, a = null, o = () => {
                    clearTimeout(t), t = void 0
                }, i = e => {
                    if (r = e, o(), r) {
                        a = null, (0, eE.E)(f, u, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == a && (a = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (g.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: u
                            }
                        }), (0, eE.E)(f, u, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - a)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && i(n.isIntersecting)
                }), c = (t, c) => {
                    (e !== t || n !== c) && (n = c, s(l.takeRecords()), l.disconnect(), o(), void 0 === (e = t) ? (r = !1, a = null, (0, eE.E)(f, u, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && i(r && !(0, t_.h)(f))
                    }) : l.observe(e))
                }, d = f.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(t_.c);
                    let n = t(eE.s, u),
                        r = null == n ? null : t(eE.h, n.sourceMcpAppId),
                        a = r?.hostedInThreadScrollLayout === !0 && !r.content.fullSurface && n?.displayMode === "inline" && null == t(et.l.tabById$, (0, te.b)(u)),
                        o = (0, t_.h)(f);
                    if (!a || !o) return void c(a ? null : void 0, o);
                    let i = r.inlineFrameAnchor,
                        s = () => c(i.getSnapshot(), o),
                        l = i.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), o()
                }
            }, n = [f, u], a[0] = f, a[1] = u, a[2] = t, a[3] = n) : (t = a[2], n = a[3]), (0, c.useEffect)(t, n), a[4] !== _ || a[5] !== h || a[6] !== p || a[7] !== u ? (r = null == h ? null : (0, i.jsx)(n_, {
                sessionId: u,
                frameState: h,
                sourceMcpAppId: h.sourceMcpAppId,
                isAccessRevoked: p,
                allowGlobalHost: _
            }), a[4] = _, a[5] = h, a[6] = p, a[7] = u, a[8] = r) : r = a[8], r
        }

        function np(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(nu, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function n_(e) {
            let t, n, r, a, o, _, m, I, T = (0, s.c)(26),
                {
                    sessionId: b,
                    sourceMcpAppId: v,
                    frameState: y,
                    isAccessRevoked: A,
                    allowGlobalHost: C
                } = e,
                w = (0, l.y)(E.a);
            T[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.b)(), T[0] = t) : t = T[0];
            let N = (0, f.f)(t),
                R = (0, l.x)(h.b, v),
                P = A || R,
                S = (0, l.x)(eE.h, v),
                x = S?.content ?? null,
                D = x?.mcpAppHostAdapter?.retain;
            T[1] !== w || T[2] !== b ? (n = () => (0, nd.b)(w, b), r = [w, b], T[1] = w, T[2] = b, T[3] = n, T[4] = r) : (n = T[3], r = T[4]), (0, c.useLayoutEffect)(n, r), T[5] !== D || T[6] !== w || T[7] !== v ? (a = () => D?.(w, v), o = [D, w, v], T[5] = D, T[6] = w, T[7] = v, T[8] = a, T[9] = o) : (a = T[8], o = T[9]), (0, c.useLayoutEffect)(a, o);
            let G = (0, l.x)(d.c, x?.access ?? null);
            if (T[10] !== G || T[11] !== S || T[12] !== w || T[13] !== P || T[14] !== v ? (_ = () => {
                    null != S && (P || "changed" === G) && (g.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: P,
                            accessStatus: G
                        },
                        sensitive: {
                            mcpAppId: S.sessionId,
                            sourceMcpAppId: v
                        }
                    }), (0, eE.A)(w, v))
                }, m = [v, S, w, P, G], T[10] = G, T[11] = S, T[12] = w, T[13] = P, T[14] = v, T[15] = _, T[16] = m) : (_ = T[15], m = T[16]), (0, c.useLayoutEffect)(_, m), !N || P || y.isSuspended || (0, tz.f)(y.sandboxError) || null == S || null == x || "current" !== G) return null;
            let L = (0, u.c)(x);
            if (L && (null == x.toolResult || null != x.toolCallStatus)) return null;
            let O = L ? nE : nc;
            return T[17] !== O || T[18] !== C || T[19] !== x || T[20] !== y || T[21] !== S.hostedInThreadScrollLayout || T[22] !== S.inlineFrameAnchor || T[23] !== b || T[24] !== v ? (I = (0, i.jsx)(O, {
                ...x,
                ModalFrame: np,
                hostedInThreadScrollLayout: S.hostedInThreadScrollLayout,
                inlineFrameAnchor: S.inlineFrameAnchor,
                allowGlobalHost: C,
                sessionId: b,
                sourceMcpAppId: v,
                frameState: y
            }, y.sandboxGeneration), T[17] = O, T[18] = C, T[19] = x, T[20] = y, T[21] = S.hostedInThreadScrollLayout, T[22] = S.inlineFrameAnchor, T[23] = b, T[24] = v, T[25] = I) : I = T[25], I
        }

        function nE(e) {
            let t, n, r = (0, s.c)(5),
                a = (0, l.y)(E.a);
            return r[0] !== a ? (t = (e, t) => (0, _.installPlugin)(a, e, t), r[0] = a, r[1] = t) : t = r[1], r[2] !== e || r[3] !== t ? (n = (0, i.jsx)(nc, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), r[2] = e, r[3] = t, r[4] = n) : n = r[4], n
        }
    }),
    QnVT: (function(e, t, n) {
        var r = n("Q840"),
            a = n("i8Zd"),
            o = n("OWtl");
        let i = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return {
                    revision: t(a.a),
                    appearance: null
                }
            }, {
                isEqual: (e, t) => e.revision === t.revision
            }),
            s = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e, {
                    appearance: n,
                    revision: r
                } = t(i), a = n?.fonts;
                return null == a || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [a.code, a.ui].some(e => e?.includes("(")) ? r : n
            }),
            l = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(s),
                    function() {
                        let e = getComputedStyle(document.documentElement),
                            t = document.createElement("div");
                        t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                        let n = t => {
                                let n = e.getPropertyValue(t).trim();
                                return n.length > 0 ? n : void 0
                            },
                            r = n => {
                                let r = c(e, t, n, "color"),
                                    a = c(e, t, "--color-surface-tertiary", "color");
                                if (null != r && null != a) return `color-mix(in srgb, ${r} 12%, ${a})`
                            };
                        try {
                            let a, o, i, s, l, d, u, p, _, E, f, g, h, m, I, T, b, v, y, A, C, w, N, R, P, S, x, D, G, L, O, F, M, k, U, W;
                            return {
                                "--color-background-primary": (a = "--app-color-background-surface", c(e, t, a, "color") ?? (o = "--color-surface-tertiary", c(e, t, o, "color"))),
                                "--color-background-secondary": (i = "--color-surface-elevated", c(e, t, i, "color")),
                                "--color-background-tertiary": (s = "--color-surface-secondary", c(e, t, s, "color")),
                                "--color-background-inverse": (l = "--color-text", c(e, t, l, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (d = "--codex-theme-accent-background-subtle", c(e, t, d, "color") ?? (u = "--color-background-info-surface", c(e, t, u, "color"))),
                                "--color-background-danger": (p = "--color-background-danger-surface", c(e, t, p, "color")),
                                "--color-background-success": r("--color-codex-git-added"),
                                "--color-background-warning": r("--color-text-warning"),
                                "--color-background-disabled": (_ = "--color-background-primary-soft-active", c(e, t, _, "color")),
                                "--color-text-primary": (E = "--color-text", c(e, t, E, "color")),
                                "--color-text-secondary": (f = "--color-text-secondary", c(e, t, f, "color")),
                                "--color-text-tertiary": (g = "--color-codex-description", c(e, t, g, "color")),
                                "--color-text-inverse": (h = "--color-text-inverse", c(e, t, h, "color") ?? (m = "--color-surface-tertiary", c(e, t, m, "color"))),
                                "--color-text-ghost": (I = "--color-codex-description", c(e, t, I, "color")),
                                "--color-text-info": (T = "--color-text-info", c(e, t, T, "color")),
                                "--color-text-danger": (b = "--color-text-danger", c(e, t, b, "color")),
                                "--color-text-success": (v = "--color-codex-git-added", c(e, t, v, "color")),
                                "--color-text-warning": (y = "--color-text-warning", c(e, t, y, "color")),
                                "--color-text-disabled": (A = "--color-codex-description", c(e, t, A, "color")),
                                "--color-border-primary": (C = "--color-border-primary-outline", c(e, t, C, "color")),
                                "--color-border-secondary": (w = "--color-border", c(e, t, w, "color")),
                                "--color-border-tertiary": (N = "--color-border", c(e, t, N, "color")),
                                "--color-border-inverse": (R = "--color-text", c(e, t, R, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (P = "--color-ring", c(e, t, P, "color")),
                                "--color-border-danger": (S = "--color-text-danger", c(e, t, S, "color")),
                                "--color-border-success": (x = "--color-codex-git-added", c(e, t, x, "color")),
                                "--color-border-warning": (D = "--color-text-warning", c(e, t, D, "color")),
                                "--color-border-disabled": (G = "--color-border-primary-outline", c(e, t, G, "color")),
                                "--color-ring-primary": (L = "--color-ring", c(e, t, L, "color")),
                                "--color-ring-secondary": (O = "--color-ring", c(e, t, O, "color")),
                                "--color-ring-inverse": (F = "--color-ring", c(e, t, F, "color")),
                                "--color-ring-info": (M = "--color-ring", c(e, t, M, "color")),
                                "--color-ring-danger": (k = "--color-text-danger", c(e, t, k, "color")),
                                "--color-ring-success": (U = "--color-codex-git-added", c(e, t, U, "color")),
                                "--color-ring-warning": (W = "--color-text-warning", c(e, t, W, "color")),
                                "--font-sans": c(e, t, "--font-sans", "fontFamily"),
                                "--font-mono": c(e, t, "--font-mono", "fontFamily"),
                                "--font-weight-normal": c(e, t, "--font-ui-weight", "fontWeight"),
                                "--font-weight-medium": c(e, t, "--font-weight-medium", "fontWeight"),
                                "--font-weight-semibold": c(e, t, "--font-weight-semibold", "fontWeight"),
                                "--font-weight-bold": c(e, t, "--font-weight-bold", "fontWeight"),
                                "--font-text-xs-size": c(e, t, "--text-xs", "fontSize"),
                                "--font-text-sm-size": c(e, t, "--text-sm", "fontSize"),
                                "--font-text-md-size": c(e, t, "--text-base", "fontSize"),
                                "--font-text-lg-size": c(e, t, "--text-lg", "fontSize"),
                                "--font-heading-xs-size": c(e, t, "--text-heading-sm", "fontSize"),
                                "--font-heading-sm-size": c(e, t, "--text-heading-md", "fontSize"),
                                "--font-heading-md-size": c(e, t, "--text-heading-lg", "fontSize"),
                                "--font-heading-lg-size": c(e, t, "--text-xl", "fontSize"),
                                "--font-heading-xl-size": c(e, t, "--text-2xl", "fontSize"),
                                "--font-heading-2xl-size": c(e, t, "--text-3xl", "fontSize"),
                                "--font-heading-3xl-size": c(e, t, "--text-4xl", "fontSize"),
                                "--font-text-xs-line-height": n("--text-xs--line-height"),
                                "--font-text-sm-line-height": n("--text-sm--line-height"),
                                "--font-text-md-line-height": n("--text-base--line-height"),
                                "--font-text-lg-line-height": n("--text-lg--line-height"),
                                "--font-heading-xs-line-height": "1.33",
                                "--font-heading-sm-line-height": "1.33",
                                "--font-heading-md-line-height": "1.2",
                                "--font-heading-lg-line-height": "1.2",
                                "--font-heading-xl-line-height": "1",
                                "--font-heading-2xl-line-height": "1",
                                "--font-heading-3xl-line-height": "1",
                                "--border-radius-xs": c(e, t, "--radius-xs", "borderRadius"),
                                "--border-radius-sm": c(e, t, "--radius-sm", "borderRadius"),
                                "--border-radius-md": c(e, t, "--radius-md", "borderRadius"),
                                "--border-radius-lg": c(e, t, "--radius-lg", "borderRadius"),
                                "--border-radius-xl": c(e, t, "--radius-xl", "borderRadius"),
                                "--border-radius-full": c(e, t, "--radius-full", "borderRadius"),
                                "--border-width-regular": "1px",
                                "--shadow-hairline": c(e, t, "--shadow-hairline", "boxShadow"),
                                "--shadow-sm": c(e, t, "--shadow-sm", "boxShadow"),
                                "--shadow-md": c(e, t, "--shadow-md", "boxShadow"),
                                "--shadow-lg": c(e, t, "--shadow-lg", "boxShadow")
                            }
                        } finally {
                            t.remove()
                        }
                    }()
            });

        function c(e, t, n, r) {
            let a = e.getPropertyValue(n).trim();
            if (0 === a.length) return;
            t.style[r] = `var(${n})`;
            let o = getComputedStyle(t)[r].trim();
            return 0 === o.length || o === `var(${n})` ? a : o
        }
        n.d(t, {}, {
            a: l
        })
    }),
    aENG: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t, n, r) {
                let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = Math.max(e ?? t ?? ("card" === r ? 200 : 480), n ?? 200);
                return a || null != e ? o : Math.min(o, 720)
            },
            b: function(e) {
                return null == e ? void 0 : {
                    marginBlockStart: -e.blockStart,
                    marginBlockEnd: -e.blockEnd,
                    marginInlineStart: -e.inlineStart,
                    marginInlineEnd: -e.inlineEnd
                }
            }
        })
    }),
    Cv9y: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            o = n("Wf1j"),
            i = n("DcH0"),
            s = n("X3K1"),
            l = n("zOE4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u = (0, a.c)(21),
                    {
                        className: p,
                        height: _,
                        inlineFramePadding: E,
                        allowCompact: f,
                        fullSurface: g,
                        showLoadingStatus: h,
                        disableInlineLoadingState: m
                    } = e,
                    I = void 0 !== f && f,
                    T = void 0 === h || h,
                    b = (0, o.a)();
                u[0] !== b ? (t = b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
                }), u[0] = b, u[1] = t) : t = u[1];
                let v = t,
                    y = T ? "status" : void 0,
                    A = !T;
                u[2] !== v || u[3] !== y || u[4] !== A ? (n = {
                    role: y,
                    "aria-hidden": A,
                    "aria-label": v,
                    "data-mcp-app-loading": "true"
                }, u[2] = v, u[3] = y, u[4] = A, u[5] = n) : n = u[5];
                let C = n;
                if (void 0 !== g && g) {
                    let e, t;
                    return u[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(l.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), u[6] = e) : e = u[6], u[7] !== C ? (t = (0, r.jsx)("div", {
                        className: "relative h-full min-h-0",
                        ...C,
                        children: e
                    }), u[7] = C, u[8] = t) : t = u[8], t
                }
                if (void 0 !== m && m) {
                    let e;
                    return u[9] !== _ ? (e = (0, r.jsx)("div", {
                        "aria-hidden": "true",
                        style: {
                            height: _
                        }
                    }), u[9] = _, u[10] = e) : e = u[10], e
                }
                u[11] !== I || u[12] !== p || u[13] !== _ || u[14] !== E || u[15] !== C ? (c = I && "number" == typeof _ && _ > 0 && _ < 48 ? (0, r.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    ...C,
                    style: {
                        height: null == E ? _ : "100%"
                    },
                    children: (0, r.jsx)(s.a, {
                        className: "w-48 max-w-full",
                        size: "md"
                    })
                }) : (0, r.jsx)(i.a, {
                    className: p,
                    ...C,
                    style: {
                        height: null == E ? _ : "100%"
                    }
                }), u[11] = I, u[12] = p, u[13] = _, u[14] = E, u[15] = C, u[16] = c) : c = u[16];
                let w = c;
                return u[17] !== _ || u[18] !== E || u[19] !== w ? (d = null == E ? w : (0, r.jsx)("div", {
                    style: {
                        height: _,
                        paddingBlockStart: E.blockStart,
                        paddingBlockEnd: E.blockEnd,
                        paddingInlineStart: E.inlineStart,
                        paddingInlineEnd: E.inlineEnd
                    },
                    children: w
                }), u[17] = _, u[18] = E, u[19] = w, u[20] = d) : d = u[20], d
            }
        })
    }),
    HPlV: (function(e, t, n) {
        n.d(t, {
            a: () => b,
            sendMcpAppMessage: () => T
        });
        var r = n("kSHG"),
            a = n("HVBu"),
            o = n.n(a),
            i = n("IhIa"),
            s = n("DD2M"),
            l = n("Cslg"),
            c = n("dsow"),
            d = n("ABep"),
            u = n("oyxz"),
            p = n("PxlB"),
            _ = n("RNul"),
            E = n("SGsN");
        let f = (0, d.jsx)(u.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open"
        });

        function g(e, t, n) {
            return e.get(E.f).info((0, d.jsx)(u.a, {
                ...p.a.creating
            }), {
                id: t,
                position: "top-center",
                actionPlacement: "inline",
                duration: 0,
                hasCloseButton: !1,
                leading: (0, d.jsx)(_.a, {
                    className: "icon-xs"
                }),
                primaryAction: null == n ? void 0 : {
                    label: f,
                    onClick: () => {
                        n()
                    }
                }
            })
        }
        var h = n("WBiY"),
            m = n("sS8e"),
            I = n("kfGJ");
        async function T(e) {
            let {
                untrustedAppMessage: t,
                prompt: n,
                send: r,
                signal: a,
                messageAttachment: o,
                modelContextAttachments: i,
                requestConfirmation: s
            } = e;
            a.throwIfAborted();
            let l = {
                turnTrigger: "mcp_app_follow_up",
                addedFiles: [],
                fileAttachments: [],
                ideContext: null,
                imageAttachments: [],
                mcpAppModelContextAttachments: [...i, ...null == o || o.content?.length === 0 ? [] : [o]],
                prompt: n,
                untrustedAppMessage: t
            };
            await r(l, s)
        }

        function b(e) {
            let {
                scope: t,
                recipient: a,
                getNewThreadDestination: p,
                globalEntrypointIdentity: _,
                canCreateCodexThreads: T,
                hasUserGesture: b,
                assertActive: v,
                sourceName: y,
                toolOrigin: A,
                signal: C
            } = e;
            return (e, w) => (0, c.c)({
                context: e,
                signal: C,
                requestConfirmation: w,
                send: async e => {
                    v();
                    let c = (0, h.b)(a);
                    if (void 0 === c && (c = null != p ? p() : null == a ? {
                            kind: "app-server",
                            hostId: I.a
                        } : null), null == c || "app-server" === c.kind && !T) throw (0, m.c)("New conversations are unavailable for this view", r.r.MethodNotFound);
                    C.throwIfAborted();
                    let w = new AbortController,
                        N = t.get(l.f),
                        R = t.get(l.j),
                        P = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.f) !== N || t(l.j) !== R) && w.abort()
                        }),
                        S = (0, s.a)(),
                        x = g(t, S);
                    o()(e => e());
                    let D = e => {
                            w.signal.aborted || (0, i.c)(e) || t.get(E.f).danger(e instanceof Error ? e.message : String(e), {
                                id: S,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        G = o()(() => {
                            w.signal.removeEventListener("abort", G), P(), x?.close()
                        }),
                        L = !1;
                    w.signal.addEventListener("abort", G, {
                        once: !0
                    });
                    let O = () => w.abort();
                    C.addEventListener("abort", O, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: r
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(17982)]).then(n.bind(n, "VWsy"));
                        v(), w.signal.throwIfAborted(), C.removeEventListener("abort", O), await r(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: _,
                            hasUserGesture: b,
                            onDeferredCreation: e => {
                                L = !0, e.then(G, e => {
                                    D(e), G()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (x = g(t, S, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(E.f).info((0, d.jsx)(u.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    values: {
                                        appName: y
                                    }
                                }), {
                                    id: S,
                                    position: "top-center",
                                    actionPlacement: "inline",
                                    duration: 5,
                                    hasCloseButton: !1,
                                    leading: null,
                                    primaryAction: {
                                        label: f,
                                        onClick: () => {
                                            e() && n.close()
                                        }
                                    }
                                })
                            },
                            sourceName: y,
                            toolOrigin: A,
                            signal: w.signal
                        });
                        return
                    } catch (e) {
                        throw D(e), e
                    } finally {
                        C.removeEventListener("abort", O), L || G()
                    }
                }
            })
        }
    }),
    FPpy: (function(e, t, n) {
        var r = n("bTvG"),
            a = n("iRMi"),
            o = n("mfKi"),
            i = n("UKCO"),
            s = n("xSzB"),
            l = n("k7G6"),
            c = n("yGJW"),
            d = n("Yshm");
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    chatgpt: n,
                    hostId: u,
                    navigate: p,
                    toolResult: _,
                    connect: E,
                    open: f,
                    decline: g,
                    onShownReceipt: h,
                    onInstallClick: m,
                    onSuggestionInteraction: I,
                    isCurrent: T = () => !0
                } = e, b = d.e.safeParse(_.structuredContent);
                if (!b.success) return null;
                let v = (0, s.f)(_),
                    y = d.c.safeParse(v?._meta ?? v),
                    A = y.success ? y.data["openai/plugin_suggestion_id"] : void 0,
                    C = {
                        chatgpt: n,
                        source: a.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: A,
                        surface: a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    w = (e, a, i) => {
                        try {
                            (0, c.a)(t, o.CodexPluginAction, {
                                source: C.source,
                                suggestionId: A,
                                surface: C.surface,
                                action: e,
                                remotePluginId: a,
                                result: o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: o.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != A && (e !== o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != i) && (0, c.a)(t, r.q, {
                                action: e === o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: a,
                                pluginIds: i,
                                result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                                suggestionId: A,
                                productExperience: n.productExperience,
                                surface: n.surface
                            })
                        } catch {}
                    },
                    N = new Set,
                    R = e => {
                        let t = d.a.parse(e),
                            n = b.data.suggestions.find(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.pluginId
                            });
                        if (!T() || null == n || null != t.suggestionId && t.suggestionId !== A) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return n
                    };
                return {
                    requestDeclinePluginSuggestions: null == g ? void 0 : () => g(b.data.suggestions),
                    sendInstrument: e => {
                        let t = d.b.safeParse(e);
                        if (!T() || !t.success || t.data.payload.suggestion_id !== A || !b.data.suggestions.some(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.data.payload.remote_plugin_id
                            })) return;
                        let n = t.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                            if (!t.data.payload.plugin_ids.includes(n) || (h?.(n, e), N.has(n))) return;
                            N.add(n), I?.(n, y.success ? y.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed");
                            return
                        }
                        let r = t.data.payload.plugin_ids;
                        w(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, r?.includes(n) && r.every(e => b.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? r : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = R(e);
                        return m?.(t.plugin_id), I?.(t.plugin_id, y.success ? y.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), w(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), E(t, C)
                    },
                    requestOpenPlugin: async e => {
                        let a = R(e);
                        if (null != n && null != f) try {
                            (0, c.a)(t, r.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: a.plugin_id,
                                suggestionId: A,
                                surface: n.surface
                            })
                        } catch {}
                        null != f ? await f(a) : await p((0, l.a)({
                            hostId: u,
                            pluginId: a.plugin_id,
                            remoteMarketplaceName: i.cd
                        }))
                    }
                }
            }
        })
    }),
    EAcR: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            o = n("on57"),
            i = n("Q840"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("Wdu7"),
            d = n("aENG"),
            u = n("tSEg"),
            p = n("WFY2"),
            _ = n("Cv9y"),
            E = n("qZWE"),
            f = n("X3T3"),
            g = n("EDsV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, I, T, b, v, y, A, C, w, N = (0, a.c)(90),
                    {
                        resource: R,
                        error: P,
                        errorTitle: S,
                        errorIllustration: x,
                        hostDisplayModes: D,
                        fullSurface: G,
                        hostScroll: L,
                        inlineSurface: O,
                        mcpAppId: F,
                        overlayOwnerId: M,
                        onRetryResourceRead: k,
                        renderErrorActions: U,
                        appName: W,
                        presentation: H,
                        showLoadingStatus: V,
                        disableInlineLoadingState: j
                    } = e,
                    Y = void 0 !== G && G,
                    z = void 0 !== L && L,
                    q = void 0 === O ? "standalone" : O,
                    B = void 0 === M ? null : M,
                    K = void 0 === V || V,
                    $ = void 0 !== j && j,
                    Q = (0, i.y)(u.a),
                    X = (0, i.x)(E.h, F),
                    Z = X?.content.resource;
                N[0] !== P || N[1] !== R || N[2] !== Z ? (t = null == Z ? R : {
                    data: Z,
                    error: P ?? null,
                    isLoading: !1
                }, N[0] = P, N[1] = R, N[2] = Z, N[3] = t) : t = N[3];
                let J = t,
                    {
                        data: ee,
                        isLoading: et
                    } = J,
                    en = ee?.html ?? null;
                N[4] !== J || N[5] !== D ? (n = (0, g.e)(J, D), N[4] = J, N[5] = D, N[6] = n) : n = N[6];
                let er = n,
                    ea = (0, i.x)(E.v, F),
                    eo = (0, i.x)(E.w, F),
                    ei = Y || "inline" === H,
                    es = X?.inlineFrameAnchor.ref,
                    el = ee?.heightHint ?? null,
                    ec = ee?.minFrameHeight ?? null;
                N[7] !== ea.intrinsicHeight || N[8] !== z || N[9] !== q || N[10] !== ec || N[11] !== el ? (h = (0, d.a)(ea.intrinsicHeight, el, ec, q, z), N[7] = ea.intrinsicHeight, N[8] = z, N[9] = q, N[10] = ec, N[11] = el, N[12] = h) : h = N[12];
                let ed = h,
                    eu = !Y && ee?.fitWidth ? ea.intrinsicWidth ?? ee.widthHint : void 0,
                    ep = Y ? void 0 : ee?.inlineFramePadding;
                N[13] !== ep ? (m = (0, d.b)(ep), N[13] = ep, N[14] = m) : m = N[14], N[15] !== eu || N[16] !== m ? (I = {
                    width: eu,
                    ...m
                }, N[15] = eu, N[16] = m, N[17] = I) : I = N[17];
                let e_ = I,
                    eE = "error" === er.kind ? er.error : ea.sandboxError;
                N[18] !== er.kind || N[19] !== eE ? (T = null, "too-large" === er.kind ? T = "HTML exceeds display limit" : eE instanceof g.a && (T = "No supported display mode"), N[18] = er.kind, N[19] = eE, N[20] = T) : T = N[20];
                let ef = "error" === er.kind ? er.error : null,
                    eg = ef?.message;
                N[21] !== T || N[22] !== ee?.availableDisplayModes || N[23] !== ee?.htmlByteLength || N[24] !== D || N[25] !== F || N[26] !== ef ? (b = () => {
                    (null != T || null != ef) && p.a.warning("MCP app error displayed", {
                        safe: {
                            reason: T ?? "App could not be displayed",
                            htmlByteLength: ee?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: F,
                            error: ef,
                            hostDisplayModes: D,
                            availableDisplayModes: ee?.availableDisplayModes
                        }
                    })
                }, N[21] = T, N[22] = ee?.availableDisplayModes, N[23] = ee?.htmlByteLength, N[24] = D, N[25] = F, N[26] = ef, N[27] = b) : b = N[27];
                let eh = (0, s.useEffectEvent)(b);
                if (N[28] !== eh ? (v = () => {
                        eh()
                    }, N[28] = eh, N[29] = v) : v = N[29], N[30] !== T || N[31] !== F || N[32] !== eg ? (y = [T, eg, F], N[30] = T, N[31] = F, N[32] = eg, N[33] = y) : y = N[33], (0, s.useEffect)(v, y), "too-large" === er.kind) {
                    let e;
                    return N[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(c.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, r.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: (0, r.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppTooLarge",
                                defaultMessage: "This app is too large to display"
                            })
                        })
                    }), N[34] = e) : e = N[34], e
                }
                if (!Y && "launcher" === H) {
                    let e, t = B ?? void 0;
                    return N[35] !== es || N[36] !== t ? (e = (0, r.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), N[35] = es, N[36] = t, N[37] = e) : e = N[37], e
                }
                if (et || !eo && null != en && null == eE) {
                    let e, t, n, a;
                    if ("pending" === H && !Y) {
                        let e;
                        return !K || $ ? null : (N[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, r.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app"
                            })
                        }), N[38] = e) : e = N[38], e)
                    }
                    let i = et ? null : es,
                        s = B ?? void 0,
                        c = null == ep && "max-w-full",
                        d = Y && "h-full";
                    N[39] !== c || N[40] !== d ? (e = (0, o.b)(c, d), N[39] = c, N[40] = d, N[41] = e) : e = N[41];
                    let u = "standalone" === q && "rounded-lg border";
                    N[42] !== u ? (t = (0, o.b)("w-full border-subtle", u), N[42] = u, N[43] = t) : t = N[43];
                    let p = Y ? "100%" : ed;
                    return N[44] !== $ || N[45] !== Y || N[46] !== z || N[47] !== ep || N[48] !== K || N[49] !== t || N[50] !== p ? (n = (0, r.jsx)(_.a, {
                        className: t,
                        height: p,
                        inlineFramePadding: ep,
                        fullSurface: Y,
                        allowCompact: z,
                        showLoadingStatus: K,
                        disableInlineLoadingState: $
                    }), N[44] = $, N[45] = Y, N[46] = z, N[47] = ep, N[48] = K, N[49] = t, N[50] = p, N[51] = n) : n = N[51], N[52] !== e_ || N[53] !== q || N[54] !== i || N[55] !== s || N[56] !== e || N[57] !== n ? (a = (0, r.jsx)("div", {
                        ref: i,
                        "data-overlay-owner": s,
                        className: e,
                        style: e_,
                        "data-mcp-app-inline-surface": q,
                        children: n
                    }), N[52] = e_, N[53] = q, N[54] = i, N[55] = s, N[56] = e, N[57] = n, N[58] = a) : a = N[58], a
                }
                if (null != eE) {
                    let e, t;
                    return N[59] !== er.kind || N[60] !== F || N[61] !== k || N[62] !== X?.content.mcpAppHostAdapter?.retry || N[63] !== Q ? (e = X?.content.mcpAppHostAdapter?.retry ?? ("error" === er.kind ? k : () => (0, E.D)(Q, F)), N[59] = er.kind, N[60] = F, N[61] = k, N[62] = X?.content.mcpAppHostAdapter?.retry, N[63] = Q, N[64] = e) : e = N[64], N[65] !== W || N[66] !== x || N[67] !== S || N[68] !== Y || N[69] !== q || N[70] !== eE || N[71] !== U || N[72] !== e ? (t = (0, r.jsx)(f.a, {
                        error: eE,
                        errorTitle: S,
                        errorIllustration: x,
                        fullSurface: Y,
                        inlineSurface: q,
                        pluginName: W,
                        renderErrorActions: U,
                        onRetry: e
                    }), N[65] = W, N[66] = x, N[67] = S, N[68] = Y, N[69] = q, N[70] = eE, N[71] = U, N[72] = e, N[73] = t) : t = N[73], t
                }
                if (!ei) {
                    let e, t = B ?? void 0;
                    return N[74] !== es || N[75] !== t ? (e = (0, r.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), N[74] = es, N[75] = t, N[76] = e) : e = N[76], e
                }
                if (null == en) {
                    let e;
                    return N[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, r.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display"
                        })
                    }), N[77] = e) : e = N[77], e
                }
                let em = B ?? void 0,
                    eI = null == ep && "w-full max-w-full",
                    eT = Y && "h-full";
                N[78] !== eI || N[79] !== eT ? (A = (0, o.b)("overflow-hidden", eI, eT), N[78] = eI, N[79] = eT, N[80] = A) : A = N[80];
                let eb = Y ? "100%" : ed;
                return N[81] !== e_ || N[82] !== eb ? (C = {
                    ...e_,
                    height: eb
                }, N[81] = e_, N[82] = eb, N[83] = C) : C = N[83], N[84] !== es || N[85] !== q || N[86] !== em || N[87] !== A || N[88] !== C ? (w = (0, r.jsx)("div", {
                    ref: es,
                    "data-overlay-owner": em,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": q,
                    className: A,
                    style: C
                }), N[84] = es, N[85] = q, N[86] = em, N[87] = A, N[88] = C, N[89] = w) : w = N[89], w
            }
        })
    }),
    X3T3: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            o = n("slpy"),
            i = n("on57"),
            s = n("oyxz"),
            l = n("Wf1j"),
            c = n("Sm6l"),
            d = n("bf6R"),
            u = n("ZiSI"),
            p = n("pZTm"),
            _ = n("EDsV");

        function E(e) {
            let t, n, o, s = (0, a.c)(11),
                {
                    fullSurface: l,
                    inlineSurface: c,
                    title: d,
                    illustration: p,
                    actions: _
                } = e,
                E = l ? "h-full" : "h-60",
                f = !l && "standalone" === (void 0 === c ? "standalone" : c) && "overflow-hidden rounded-lg border border-strong";
            s[0] !== E || s[1] !== f ? (t = (0, i.b)(E, f), s[0] = E, s[1] = f, s[2] = t) : t = s[2];
            let g = !l;
            return s[3] !== _ || s[4] !== p || s[5] !== g || s[6] !== d ? (n = (0, r.jsx)(u.a, {
                compact: g,
                title: d,
                illustration: p,
                description: null,
                actions: _
            }), s[3] = _, s[4] = p, s[5] = g, s[6] = d, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, r.jsx)("div", {
                className: t,
                children: n
            }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
        }

        function f() {
            let e, t, n, i, u = (0, a.c)(6),
                p = (0, l.a)();
            u[0] !== p ? (e = p.formatMessage({
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                defaultMessage: "Timeout details"
            }), u[0] = p, u[1] = e) : e = u[1];
            let _ = e;
            return u[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(s.a, {
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes."
            }), u[2] = t) : t = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(d.qe, {
                className: "text-secondary"
            }), u[3] = n) : n = u[3], u[4] !== _ ? (i = (0, r.jsx)(o.a, {
                preventDismissOnFastClick: !0,
                content: t,
                children: (0, r.jsx)(c.a, {
                    size: "inline",
                    color: "ghost",
                    "aria-label": _,
                    children: n
                })
            }), u[4] = _, u[5] = i) : i = u[5], i
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, i = (0, a.c)(21),
                    {
                        error: l,
                        errorTitle: d,
                        errorIllustration: u,
                        fullSurface: g,
                        inlineSurface: h,
                        onRetry: m,
                        renderErrorActions: I,
                        pluginName: T
                    } = e,
                    b = void 0 !== g && g,
                    v = void 0 === h ? "standalone" : h,
                    y = d;
                if (null == y)
                    if (l instanceof _.b) {
                        let e, t, n, a = T ? "yes" : "no";
                        i[0] !== T || i[1] !== a ? (e = (0, r.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            values: {
                                hasName: a,
                                appName: T
                            }
                        }), i[0] = T, i[1] = a, i[2] = e) : e = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(f, {}), i[3] = t) : t = i[3], i[4] !== e ? (n = (0, r.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [e, t]
                        }), i[4] = e, i[5] = n) : n = i[5], y = n
                    } else if (null == T) {
                    let e;
                    i[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                        ...p.a.displayUnnamedApp
                    }), i[6] = e) : e = i[6], y = e
                } else {
                    let e;
                    i[7] !== T ? (e = (0, r.jsx)(s.a, {
                        ...p.a.displayApp,
                        values: {
                            appName: T
                        }
                    }), i[7] = T, i[8] = e) : e = i[8], y = e
                }
                i[9] !== b || i[10] !== m ? (t = null != m ? (0, r.jsx)(c.a, {
                    color: "secondary",
                    size: b ? "large" : "compact",
                    onClick: () => m(),
                    children: (0, r.jsx)(s.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again"
                    })
                }) : null, i[9] = b, i[10] = m, i[11] = t) : t = i[11];
                let A = t;
                i[12] !== I || i[13] !== A ? (n = I ? I(A) : A, i[12] = I, i[13] = A, i[14] = n) : n = i[14];
                let C = n;
                return i[15] !== C || i[16] !== u || i[17] !== y || i[18] !== b || i[19] !== v ? (o = (0, r.jsx)(E, {
                    fullSurface: b,
                    inlineSurface: v,
                    title: y,
                    illustration: u,
                    actions: C
                }), i[15] = C, i[16] = u, i[17] = y, i[18] = b, i[19] = v, i[20] = o) : o = i[20], o
            },
            b: E
        })
    }),
    MefB: (function(e, t, n) {
        var r = n("g25Y"),
            a = n("X6Vn");
        n.d(t, {}, {
            a: function(e, t) {
                let n = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                    o = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                    i = () => {
                        window.open(t, "_blank", `popup=yes,width=600,height=750,left=${n},top=${o},noopener,noreferrer`)
                    };
                "Apple Computer, Inc." === navigator.vendor ? (0, a.f)(e, r.ExternalLinkConfirmationDialog, {
                    href: t,
                    initiator: "mcp_app_resource",
                    onOpen: i
                }) : i()
            }
        })
    }),
    qwxA: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => g,
            c: () => f
        });
        var r = n("ABep"),
            a = n("QosV"),
            o = n("Q840"),
            i = n("zd8w"),
            s = n("I7bK"),
            l = n("gMJf"),
            c = n("Vlqh");
        n("kfGJ"), c.a;
        var d = n("qZWE"),
            u = n("tSEg"),
            p = n("SNez"),
            _ = n("EDsV"),
            E = n("DRR4");

        function f(e) {
            let t, n, r = (0, a.c)(6),
                {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                } = e,
                p = (0, o.y)(u.a);
            return r[0] !== s || r[1] !== c || r[2] !== l || r[3] !== p ? (t = () => {
                (0, d.F)(p, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, p], r[0] = s, r[1] = c, r[2] = l, r[3] = p, r[4] = t, r[5] = n) : (t = r[4], n = r[5]), (0, i.useLayoutEffect)(t, n), null
        }

        function g(e) {
            let t, n, r = (0, a.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, o.y)(u.a);
            return r[0] !== s || r[1] !== l || r[2] !== c ? (t = () => {
                c.set(d.k, l, s)
            }, n = [s, l, c], r[0] = s, r[1] = l, r[2] = c, r[3] = t, r[4] = n) : (t = r[3], n = r[4]), (0, i.useLayoutEffect)(t, n), null
        }

        function h(e) {
            let t, n, c, f, g, h, m, I, T, b, v, y, A, C, w, N, R, P, S, x, D, G, L, O, F, M = (0, a.c)(65);
            M[0] !== e ? ({
                recipient: A,
                resource: v,
                access: n,
                fullSurface: C,
                hostDisplayModes: f,
                hostId: g,
                lifetime: h,
                mcpAppId: m,
                mcpServerStatuses: I,
                pluginId: T,
                connectorId: c,
                Frame: t,
                server: y,
                ...b
            } = e, M[0] = e, M[1] = t, M[2] = n, M[3] = c, M[4] = f, M[5] = g, M[6] = h, M[7] = m, M[8] = I, M[9] = T, M[10] = b, M[11] = v, M[12] = y, M[13] = A, M[14] = C) : (t = M[1], n = M[2], c = M[3], f = M[4], g = M[5], h = M[6], m = M[7], I = M[8], T = M[9], b = M[10], v = M[11], y = M[12], A = M[13], C = M[14]);
            let k = void 0 === A ? null : A,
                U = void 0 !== C && C,
                W = (0, o.y)(u.a),
                H = (0, o.x)(d.t, m),
                V = (0, o.z)(p.a);
            M[15] !== h || M[16] !== m || M[17] !== W ? (w = () => {
                if ("component" === h) return () => {
                    (0, d.A)(W, m)
                }
            }, N = [h, m, W], M[15] = h, M[16] = m, M[17] = W, M[18] = w, M[19] = N) : (w = M[18], N = M[19]), (0, i.useLayoutEffect)(w, N);
            let j = (0, i.useContext)(s.c)?.rightPanelLayoutTick;
            M[20] !== I || M[21] !== T || M[22] !== y ? (R = void 0 !== T ? T : I?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === y
            })?.pluginId, M[20] = I, M[21] = T, M[22] = y, M[23] = R) : R = M[23];
            let Y = R;
            M[24] !== c || M[25] !== g || M[26] !== Y || M[27] !== y ? (P = {
                hostId: g,
                pluginId: Y,
                connectorId: c,
                server: y
            }, M[24] = c, M[25] = g, M[26] = Y, M[27] = y, M[28] = P) : P = M[28];
            let {
                bridge: z,
                pluginId: q,
                isLoading: B
            } = (0, o.x)(l.a, P), K = Y ?? q;
            M[29] !== g || M[30] !== K ? (S = ! function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return !1
            }({
                hostId: g,
                pluginId: K
            }) ? void 0 : K, M[29] = g, M[30] = K, M[31] = S) : S = M[31];
            let $ = S,
                Q = v.isLoading || B;
            M[32] !== f || M[33] !== Q || M[34] !== v ? (x = (0, _.e)({
                ...v,
                isLoading: Q
            }, f), M[32] = f, M[33] = Q, M[34] = v, M[35] = x) : x = M[35];
            let X = x;
            return M[36] !== n || M[37] !== X || M[38] !== z || M[39] !== $ || M[40] !== U || M[41] !== f || M[42] !== g || M[43] !== V || M[44] !== m || M[45] !== I || M[46] !== k || M[47] !== b || M[48] !== Y || M[49] !== j || M[50] !== W || M[51] !== y ? (G = () => {
                V || "ready" !== X.kind || null == n || (0, d.z)(W, {
                    ...b,
                    recipient: k,
                    resource: X.data,
                    access: n,
                    fullSurface: U,
                    hostDisplayModes: f,
                    hostId: g,
                    mcpAppId: m,
                    mcpServerStatuses: I,
                    pluginId: Y,
                    server: y,
                    firstPartyPluginBridge: z,
                    firstPartyPluginLoggerPluginId: $,
                    rightPanelLayoutTick: j
                })
            }, D = [n, X, z, $, U, f, g, V, m, I, k, b, Y, j, W, y], M[36] = n, M[37] = X, M[38] = z, M[39] = $, M[40] = U, M[41] = f, M[42] = g, M[43] = V, M[44] = m, M[45] = I, M[46] = k, M[47] = b, M[48] = Y, M[49] = j, M[50] = W, M[51] = y, M[52] = D, M[53] = G) : (D = M[52], G = M[53]), (0, i.useLayoutEffect)(G, D), M[54] !== t || M[55] !== h || M[56] !== m || M[57] !== W || M[58] !== H ? (L = () => {
                "component" !== h && null != H && (0, E.c)(W, {
                    Frame: t,
                    lifetime: h,
                    sessionId: H,
                    sourceMcpAppId: m
                })
            }, O = [t, h, m, H, W], M[54] = t, M[55] = h, M[56] = m, M[57] = W, M[58] = H, M[59] = L, M[60] = O) : (L = M[59], O = M[60]), (0, i.useLayoutEffect)(L, O), M[61] !== t || M[62] !== h || M[63] !== H ? (F = "component" === h && null != H ? (0, r.jsx)(t, {
                sessionId: H
            }, H) : null, M[61] = t, M[62] = h, M[63] = H, M[64] = F) : F = M[64], F
        }
    }),
    U0IP: (function(e, t, n) {
        let r;
        var a = n("eB3o"),
            o = n("kSHG"),
            i = n("Q840"),
            s = n("lAQI"),
            l = n("tSEg");
        let c = "ui/openai/viewer-header",
            d = s.F({
                id: s.L().min(1).max(100),
                label: s.L().min(1).max(500),
                disabled: s.j().optional()
            }),
            u = s.p(["newspaper", "text-page", "document-search", "phone-wave", "presentation", "bar-chart", "live-signal", "building"]),
            p = s.S({
                protocol: /^https?$/
            }).max(4e3).refine(e => {
                let t = URL.parse(e);
                return null != t && !t.username && !t.password
            }),
            _ = p.refine(e => URL.parse(e)?.protocol === "https:"),
            E = s.E().int().positive().max(1e4),
            f = s.F({
                percent: E,
                fit: s.j(),
                presets: s.g(s.F({
                    id: d.shape.id,
                    percent: E
                })).min(1).max(24).refine(e => new Set(e.map(e => e.percent)).size === e.length, "Zoom percentages must be unique"),
                fitId: d.shape.id
            }),
            g = s.F({
                zoom: f.optional(),
                navigation: s.g(d.extend({
                    direction: s.p(["up", "down"])
                })).max(2).refine(e => new Set(e.map(e => e.direction)).size === e.length)
            });

        function h(e) {
            let t = e?.zoom;
            return [...e?.navigation ?? [], ...t ? [...t.presets, {
                id: t.fitId
            }] : []]
        }
        let m = s.F({
                title: s.L().min(1).max(2e3),
                playback: s.p(["listen", "player"]).optional(),
                titleMenuLabel: s.L().min(1).max(2e3).optional(),
                titleIcon: u.optional(),
                documentControls: g.optional(),
                titleActions: s.g(d.extend({
                    href: p.optional()
                })).max(20),
                actions: s.g(d.extend({
                    icon: s.p(["download", "search", "sources", "info"]),
                    menu: s.F({
                        fields: s.g(s.F({
                            label: s.L().max(100),
                            value: s.L().max(4e3)
                        })).max(40),
                        items: s.g(d).max(20),
                        providers: s.g(s.F({
                            name: s.L().min(1).max(500),
                            href: _.optional(),
                            icons: s.g(o.v).max(8).optional(),
                            icon: u.optional(),
                            sources: s.g(s.F({
                                title: s.L().min(1).max(2e3),
                                href: _.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...h(e.documentControls), ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            I = (0, i.v)(l.a, e => null);
        r = (0, a._)(Symbol.dispose), n.d(t, {}, {
            a: c,
            b: class {
                scope;
                appId;
                openExternal;
                invoke = null;
                constructor(e, t, n) {
                    this.scope = e, this.appId = t, this.openExternal = n
                }
                handleRequest(e, t, n) {
                    let r = s.F({
                        method: s.z(c),
                        params: m
                    }).safeParse(e);
                    if (!r.success || t.aborted) return null;
                    let a = r.data.params,
                        o = [...h(a.documentControls), ...a.titleActions, ...a.actions.flatMap(e => e.menu?.items ?? [e])],
                        i = () => !t.aborted && this.invoke === l && this.scope.get(I, this.appId)?.invoke === l,
                        l = e => {
                            let t = o.find(t => t.id === e && !t.disabled);
                            i() && null != t && (null != t.href ? this.openExternal(t.href) : n({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: t.id
                                }
                            }))
                        };
                    return this.invoke = l, this.scope.set(I, this.appId, {
                        header: a,
                        invoke: l,
                        ...a.playback && {
                            placePlayback: e => {
                                i() && n({
                                    method: "ui/notifications/openai/viewer-playback-layout",
                                    params: e
                                })
                            }
                        }
                    }), Promise.resolve({
                        accepted: !0,
                        ...a.playback && {
                            playback: !0
                        },
                        ...a.documentControls && {
                            documentControls: !0
                        }
                    })
                } [r]() {
                    this.scope.get(I, this.appId)?.invoke === this.invoke && this.scope.set(I, this.appId, null), this.invoke = null
                }
            },
            c: I
        })
    })
};