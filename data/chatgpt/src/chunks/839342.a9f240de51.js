export const __rspack_esm_ids = [839342];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => i,
            c: () => a,
            d: () => T,
            e: () => g,
            f: () => A,
            g: () => b,
            h: () => y
        });
        let a = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var r, o, i = ((r = {}).LOG = "log", r.RUN_START = "run_start", r.ENVIRONMENT_STATUS = "environment_status", r.OUTPUT = "output", r.ERROR = "error", r.RUN_COMPLETE = "run_complete", r),
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
                var a;
                let t;
                return (t = new RegExp((a = e).source, a.flags)).lastIndex = a.lastIndex, t
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
                for (let [a, r] of(t.set(e, n), e)) n.set(c(a, t), c(r, t));
                return n
            }
            if ("[object Set]" === n) {
                let n = new Set;
                for (let a of (t.set(e, n), e)) n.add(c(a, t));
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
                for (let a of Object.keys(e)) try {
                    n[a] = c(e[a], t)
                } catch {
                    n[a] = String(e[a])
                }
                return n
            }
            if ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer || "u" > typeof WeakMap && e instanceof WeakMap || "u" > typeof WeakSet && e instanceof WeakSet) return String(e);
            if (Array.isArray(e)) {
                let n = Array(e.length);
                t.set(e, n);
                for (let a = 0; a < e.length; a++) a in e && (n[a] = c(e[a], t));
                return n
            }
            let r = {};
            for (let n of (t.set(e, r), Object.keys(e))) {
                let a;
                try {
                    a = e[n]
                } catch (e) {
                    a = String(e)
                }
                r[n] = c(a, t)
            }
            return r
        }

        function c(e, t) {
            try {
                return structuredClone(e)
            } catch {}
            return l(e, t)
        }
        let u = "ABORT",
            d = "CALL",
            p = "REJECT",
            _ = "RESOLVE";

        function E(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === d) {
                    e.stopImmediatePropagation();
                    let [a] = e.ports;
                    if (!a) throw Error("RPCCallMessage must contains a port.");
                    t ? async function() {
                        let e = new AbortController;
                        try {
                            a.onmessage = t => {
                                let {
                                    data: n
                                } = t;
                                return Array.isArray(n) && n[0] === u && e.abort()
                            }, a.postMessage([_, await t.call({
                                signal: e.signal
                            }, ...n.slice(1))])
                        } catch (r) {
                            if (r instanceof Error && "DataCloneError" === r.name) try {
                                a.postMessage([_, await t.call({
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
                            a.postMessage([p, r])
                        } finally {
                            a.close()
                        }
                    }(): (a.postMessage([p, Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.")]), a.close())
                }
            }), e.start();
            let n = t => function() {
                    for (var n = arguments.length, a = Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return new Promise((n, r) => {
                        let {
                            port1: o,
                            port2: i
                        } = new MessageChannel;
                        o.onmessage = e => {
                            let t = e.data;
                            t[0] === _ ? n(t[1]) : r(t[1]), o.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            o.postMessage([u]), o.close(), r(Error("Aborted."))
                        }), e.postMessage([d, ...a], [i, ...t.transfer || []])
                    })
                },
                a = n({});
            return a.withOptions = n, a
        }
        let f = "GENERATOR_GENERATE";

        function h(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === f) {
                    if (e.stopImmediatePropagation(), !t) throw Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.");
                    let [a, r, ...o] = n, i = t(...o);
                    E(r.next, i.next.bind(i)), E(r.return, e => i.return?.(e) || {
                        done: !0
                    }), E(r.throw, e => i.throw?.(e) || Promise.reject(e)), E(r.asyncDispose, async () => {
                        let e = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            t = Symbol.dispose || Symbol.for("Symbol.dispose");
                        e in i ? await i[e]?.() : t in i && i[t]?.()
                    })
                }
            }), e.start();
            let n = t => {
                    let n;
                    return function() {
                        for (var a = arguments.length, r = Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                        let {
                            port1: i,
                            port2: s
                        } = new MessageChannel, {
                            port1: l,
                            port2: c
                        } = new MessageChannel, {
                            port1: u,
                            port2: d
                        } = new MessageChannel, {
                            port1: p,
                            port2: _
                        } = new MessageChannel, h = {
                            signal: t.signal
                        }, m = () => {
                            i.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), _.close()
                        }, g = E(i).withOptions(h), I = E(l).withOptions(h), T = E(u).withOptions(h), v = E(p).withOptions(h), b = !1, A = async e => {
                            if (n?.(), b) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (b = !0, m()), t
                        }, y = {
                            next: e => A(() => I(e)),
                            return: e => A(() => T(e)),
                            throw: e => A(() => v(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async e => {
                                n?.(), await e(), b = !0, m(), n = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => g()),
                            [Symbol.asyncIterator]: () => y
                        };
                        return e.postMessage([f, {
                            asyncDispose: s,
                            next: c,
                            return: d,
                            throw: _
                        }, ...r], [...t.transfer || [], s, c, d, _]), t.signal?.addEventListener("abort", () => {
                            n = () => {
                                throw Error("This generator has been aborted.")
                            }, m()
                        }, {
                            once: !0
                        }), y
                    }
                },
                a = n({});
            return a.withOptions = n, a
        }
        var m = n("lAQI");
        async function g(e) {
            let {
                host: t,
                signal: n
            } = e, {
                ports: a,
                replyPort: r
            } = "iframe" in e ? await
            function(e) {
                let {
                    iframe: t,
                    origin: n,
                    signal: a
                } = e, r = t.ownerDocument.defaultView;
                if (null == r || a?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let o = m.F({
                    type: m.z("init"),
                    ports: m.J(m.L(), m.t(MessagePort)),
                    replyPort: m.t(MessagePort)
                });
                return new Promise((e, i) => {
                    let s = () => {
                            r.removeEventListener("message", d), t.removeEventListener("error", u), a?.removeEventListener("abort", c)
                        },
                        l = e => {
                            s(), i(e)
                        },
                        c = () => {
                            l(new DOMException("Sandbox connection cancelled.", "AbortError"))
                        },
                        u = () => {
                            l(Error("Unable to load the code execution sandbox."))
                        },
                        d = a => {
                            if (a.source !== t.contentWindow || a.origin !== n) return;
                            let r = o.safeParse(a.data);
                            r.success && (s(), e(r.data))
                        };
                    r.addEventListener("message", d), null != a && t.addEventListener("error", u, {
                        once: !0
                    }), a?.addEventListener("abort", c, {
                        once: !0
                    })
                })
            }(e): e, o = new Set([...Object.values(a), r]), i = new AbortController, s = () => {
                for (let e of (n?.removeEventListener("abort", s), i.abort(), o)) e.close();
                o.clear()
            };
            try {
                n?.throwIfAborted();
                let l = {};
                for (let [e, n] of Object.entries(t)) {
                    if (null == n) continue;
                    let a = new MessageChannel;
                    o.add(a.port1), o.add(a.port2);
                    let r = function(e, t, n) {
                        function a() {
                            for (var n = arguments.length, a = Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                            let o = e[t];
                            if (null == o) throw Error(`Sandbox host method "${t}" is unavailable`);
                            return o.apply(this, a)
                        }
                        return I(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* a.apply(this, t)
                        }: a
                    }(t, e, n);
                    I(r) ? h(a.port1, r) : E(a.port1, r), l[e] = a.port2
                }
                r.postMessage(l, Object.values(l)), r.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    u = Object.fromEntries(Object.entries(a).map(e => {
                        let [t, a] = e, r = c.has(t) ? h(a) : E(a);
                        if (null == n) return [t, r];
                        let o = e => {
                            let t = null == e.signal ? i.signal : AbortSignal.any([i.signal, e.signal]),
                                n = r.withOptions({
                                    ...e,
                                    signal: t
                                });
                            return function() {
                                for (var e = arguments.length, a = Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                                return t.throwIfAborted(), n(...a)
                            }
                        };
                        return [t, Object.assign(o({}), {
                            withOptions: o
                        })]
                    }));
                return n?.addEventListener("abort", s, {
                    once: !0
                }), n?.throwIfAborted(), {
                    api: u,
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
                additionalResourceDomains: a = [],
                unsafeAllowAllNetworkRequests: r
            } = e;
            return t ? {
                disableNetworkRequests: !0,
                resourceDomains: [],
                connectDomains: [],
                isTrusted: !1
            } : r ? null : {
                connectDomains: n,
                resourceDomains: [...n, ...a],
                isTrusted: !1
            }
        }
        let v = new Set(["blob", "c", "cid", "data", "eval", "filesystem", "inline", "trusted-types-policy", "trusted-types-sink", "wasm-eval"]);

        function b(e) {
            return v.has(e) ? null : new URL(e).origin
        }

        function A() {
            let {
                origin: e,
                isStaging: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return `${e??(t?"https://staging-web-sandbox.oaiusercontent.com":"https://web-sandbox.oaiusercontent.com")}?${t?"unsafeSkipTargetOriginCheck=true":""}`
        }

        function y(e) {
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
        var a, r = ((a = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", a.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", a.UNRECOGNIZED = "UNRECOGNIZED", a);
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
            e: r,
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
        var a = n("kSHG"),
            r = n("Cslg"),
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
                    signal: u,
                    toolArguments: d
                } = e, p = (0, s.b)(l);
                if (null == p || null == l) return null;
                if (null == n) return (0, s.a)({
                    scope: t,
                    access: c,
                    ...p,
                    toolArguments: d
                });
                let _ = t.get(r.f);
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
                        arguments: d
                    }
                }, u).then(e => (c.assertActive(), a.d.parse(e)))
            }
        })
    }),
    cYqq: (function(e, t, n) {
        var a = n("JKSp"),
            r = n("lAQI"),
            o = n("Cslg"),
            i = n("yGJW"),
            s = n("Qg7S"),
            l = n("OMIV");
        let c = r.F({
            payload: r.F({
                social_proof_variant: r.p(["control", "byline_only", "use_case", "social_proof", "combined"])
            })
        });
        n.d(t, {}, {
            a: function(e, t, n, r, u) {
                let d, p = c.safeParse(t);
                if (!p.success) return !1;
                "ledger.connection_card_viewed" === n ? d = "content_variant_us" : "plugin_management.connection_card_viewed" === n && (d = u);
                let _ = e.get(l.g);
                if (d && _ && _.getContext().user.userID === e.get(o.k) && (0, s.a)(_)) {
                    let e = _.getLayer("4125256861");
                    e.__evaluation?.allocated_experiment_name && e.__evaluation.explicit_parameters?.includes(d) && e.__value[d] === p.data.payload.social_proof_variant && e.get(d, "off")
                }
                return (0, i.a)(e, a.a, {
                    eventName: n,
                    eventData: JSON.stringify({
                        social_proof_variant: p.data.payload.social_proof_variant,
                        ...r
                    })
                }), !0
            }
        })
    }),
    kAhA: (function(e, t, n) {
        var a = n("RGCh"),
            r = n("Cslg"),
            o = n("Kwur"),
            i = n("MfrC");

        function s(e, t, n, a, r) {
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
                            start: a,
                            entry_point: s.entryPoint ?? "unknown",
                            beacon_type: s.beaconType,
                            source: "client",
                            component: r
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
            a: function(e, t, n, r) {
                if (!t.isCurrent()) return;
                let o = {
                    context: {
                        ...n,
                        hasRecordedLinkingStarted: !0
                    },
                    owner: t
                };
                return s(e, o, "linking_started", {
                    flow_path: r,
                    platform: (0, a.d)() ? "mobile_web" : "desktop_web"
                }), o
            },
            b: function(e, t) {
                let n = e.get(r.n),
                    {
                        authenticatedUserId: a,
                        userId: o,
                        accountUserId: s
                    } = n;
                if (null == a || null == o || null == s) return;
                let l = {
                        accountId: t,
                        userId: a,
                        accountUserId: s
                    },
                    c = e => (0, i.d)(e, l) && !e.accountLoading && e.accountId === t && e.userId === o;
                if (!c(n)) return;
                let u = (0, i.e)(e, c),
                    d = new Set,
                    p = !1,
                    _ = () => {
                        p && 0 === d.size && u.abort()
                    };
                return {
                    userId: a,
                    analyticsUserId: o,
                    accountId: t,
                    accountUserId: s,
                    signal: u.signal,
                    isCurrent: () => !u.signal.aborted && c(e.get(r.n)),
                    retainTelemetry: e => {
                        let t;
                        if (u.signal.aborted) return void e.catch(() => void 0);
                        let n = Promise.race([e, new Promise(e => {
                            t = setTimeout(e, 1e4)
                        })]).catch(() => void 0).finally(() => {
                            clearTimeout(t), d.delete(n), _()
                        });
                        d.add(n)
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
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(576137), n.e(153631), n.e(362811), n.e(657809), n.e(512535), n.e(964209), n.e(260407)]).then(n.bind(n, "iAuu"))
            }
        })
    }),
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(514247)]).then(n.bind(n, "shkb"))
            }
        })
    }),
    JLZd: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("TNWb"),
            o = n("nlNF"),
            i = n("kAhA");
        n.d(t, {}, {
            a: function(e, t, n) {
                let s, l, c, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                if ("u" < typeof IntersectionObserver) return;
                let d = e.get(a.n),
                    p = d.authenticatedAccountId;
                if (null == d.authenticatedUserId || null == d.userId || null == p) return;
                let _ = t.ownerDocument,
                    E = !1,
                    f = !1,
                    h = () => {
                        if (f) return;
                        let l = e.get(a.n);
                        l.authenticatedUserId !== d.authenticatedUserId || l.authenticatedAccountId !== d.authenticatedAccountId || l.userId !== d.userId || null != d.accountUserId && l.accountUserId !== d.accountUserId ? g() : (null == s && (s = (0, i.b)(e, p)), null == s || (s.isCurrent() ? !(!E || "visible" !== _.visibilityState || !(0, o.h)(e) || (0, r.c)() || !t.isConnected || t.closest('[aria-hidden="true"], [inert], [hidden]')) && t.checkVisibility({
                            visibilityProperty: !0,
                            opacityProperty: !0
                        }) && (f = !0, n(s), g()) : g()))
                    },
                    m = new IntersectionObserver(e => {
                        E = e.some(e => e.isIntersecting && e.intersectionRatio >= u && e.intersectionRect.width > 0 && e.intersectionRect.height > 0), h()
                    }, {
                        threshold: 0 === u ? [0, Number.EPSILON] : .5
                    }),
                    g = () => {
                        f = !0, m.disconnect(), l?.(), c?.(), _.removeEventListener("visibilitychange", h), s?.dispose()
                    };
                return (l = e.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(a.n), t(o.c), h()
                }), f) ? l() : (c = (0, r.e)(h), _.addEventListener("visibilitychange", h), m.observe(t)), g
            }
        })
    }),
    MfrC: (function(e, t, n) {
        var a = n("Q840"),
            r = n("Cslg"),
            o = n("OWtl");
        let i = (0, a.c)(o.a, e => {
            let {
                get: t
            } = e, {
                accountStructure: n,
                accountUserId: a
            } = t(r.n);
            return "personal" === n ? a?.split("__")[0] : a
        });

        function s(e, t) {
            let {
                accountId: n,
                userId: a,
                accountUserId: r
            } = t;
            return !e.authLoading && "chatgpt" === e.authMethod && e.authenticatedAccountId === n && e.authenticatedUserId === a && (null == e.accountId || e.accountId === n) && (null == r || e.accountUserId === r)
        }

        function l(e, t) {
            let n = new AbortController,
                a = e.watch(e => {
                    let {
                        get: a
                    } = e;
                    t(a(r.n)) || n.abort()
                });
            return n.signal.aborted ? a() : n.signal.addEventListener("abort", a, {
                once: !0
            }), n
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "request",
                    a = e.get(r.n),
                    o = a.authenticatedUserId,
                    c = a.accountUserId ?? null;
                if (null == o) return;
                let u = {
                        accountId: t,
                        userId: o,
                        accountUserId: c
                    },
                    d = e => s(e, u) && ("request" === n || !e.accountLoading && null != c);
                if (!d(a)) return;
                let p = l(e, d);
                return {
                    ...u,
                    connectorLinkOwnerId: e.get(i),
                    signal: p.signal,
                    isCurrent: () => !p.signal.aborted && d(e.get(r.n)),
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
        var a = n("zMIV"),
            r = n.n(a),
            o = n("UKCO"),
            i = n("lAQI"),
            s = n("pZ3S"),
            l = n("URlz"),
            c = n("O1lF"),
            u = n("Cslg"),
            d = n("dQRk"),
            p = n("cYqq"),
            _ = n("liTb"),
            E = n("tSEg"),
            f = n("PeqE"),
            h = n("XCEe"),
            m = n("FNWO"),
            g = n("O0Tw");
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
            v = i.F({
                type: i.z("event"),
                label: i.p(["ledger.connection_card_viewed", "ledger.connection_card_connect_clicked", "ledger.connection_card_dismissed"])
            }),
            b = i.F({
                type: i.z("count"),
                label: i.z("ledger.onboarding_syncing_visible")
            }),
            A = "manage_linked_accounts",
            y = i.F({
                name: i.z(A),
                arguments: i.F({
                    destination: i.z("credit")
                })
            });

        function C(e, t) {
            let {
                access: n,
                mcpAppHostAdapter: a,
                request: r,
                widget: o
            } = t, i = a.connectorTarget;
            if (!(0, _.k)(e.value) || null != r.chatGptThreadId || "internal://ledger" !== r.template || "credit" !== r.toolInput.destination || !0 !== o.is_verified_first_party || i?.connectorId !== f.a || !0 === a.isTombstone) return null;
            let s = i.targetId;
            return {
                access: n,
                linkId: s?.includes("/") ? null : s
            }
        }

        function N(e, t, n, a) {
            let o = !1;
            return {
                requestModal: null == t || 0 === t.length ? void 0 : async (a, o) => {
                    var i;
                    let l;
                    if (o.aborted || e.get(u.f) !== t) return !1;
                    let {
                        params: c
                    } = T.parse(a), d = e.scope.id === E.a.id ? e.value : void 0, p = null != d && (0, _.k)(d) ? (l = (i = d).pathname === _.e && null != i.orbitId ? (0, _.f)(i.orbitId) : i.pathname, `${l}${i.search??""}`) : void 0, {
                        openPersonalFinanceAccountLinking: f
                    } = await (0, h.a)();
                    if (o.aborted || e.get(u.f) !== t) return !1;
                    let m = r()(c, ["view", "key", "ref"]),
                        {
                            trackingContext: g = {}
                        } = m;
                    return s.z(g) && (m.trackingContext = {
                        entryPoint: "widget",
                        entrypoint: "creditScore" === c.initialTab ? "conversation" : void 0,
                        ...g
                    }), await f(e, {
                        accountId: t,
                        accountLinkingFlowParams: m,
                        afterLink: null == p ? {
                            kind: "stayInPicker",
                            returnTo: n
                        } : {
                            kind: "returnToChat",
                            returnTo: p
                        },
                        signal: o
                    }) && !o.aborted && e.get(u.f) === t
                },
                sendInstrument: n => {
                    let r = v.safeParse(n);
                    if (r.success) {
                        a?.widget.is_verified_first_party !== !0 || a.mcpAppHostAdapter.isTombstone || null == t || e.get(u.f) !== t || (0, p.a)(e, n, r.data.label, {
                            remote_plugin_id: f.a,
                            message_id: a.request.sourceMessageId,
                            conversation_id: e.get(d.j, a.request.chatGptThreadId)
                        });
                        return
                    }
                    if (b.safeParse(n).success) {
                        o || null == a || (o = !0, (0, g.a)(e, a));
                        return
                    }(0, m.a)(e, n)
                }
            }
        }
        n.d(t, {}, {
            a: N,
            b: function(e, t, n, a) {
                let r = N(e, t, n, a);
                if (null == a) return {
                    finance: r
                };
                let i = C(e, a);
                if (null == i) return {
                    finance: r
                };
                let {
                    mcpAppHostAdapter: s
                } = a;
                return {
                    finance: r,
                    handleRequest: (t, n, a, r) => a?.isVerifiedFirstParty === !0 && "internal://ledger" === a.originResourceUri && "tools/call" === t.method && y.safeParse(t.params).success ? async function(e, t, n) {
                        let {
                            access: a,
                            linkId: r
                        } = t;
                        n?.throwIfAborted(), a.assertActive();
                        let {
                            accountId: i,
                            userId: s
                        } = (0, l.a)(e, a.context);
                        if (null == r || null == i || null == s) throw Error("The Dot Credit connection is unavailable");
                        let u = new AbortController,
                            d = null == n ? u.signal : AbortSignal.any([u.signal, n]),
                            p = e.watch(e => {
                                let {
                                    get: t
                                } = e;
                                "current" !== a.status(t) && u.abort()
                            }),
                            _ = () => {
                                d.throwIfAborted(), a.assertActive()
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
                                signal: d,
                                assertRequestCurrent: _
                            }, {
                                method: "tools/call",
                                params: {
                                    name: A,
                                    arguments: {
                                        destination: "credit"
                                    },
                                    _meta: {
                                        _codex_apps: {
                                            resource_uri: `/${f.a}/${r}/${A}`
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
                    }(e, i, n) : s.handleRequest(t, n, a, r)
                }
            },
            c: function(e, t) {
                let {
                    viewParams: n
                } = t.request, a = C(e, t);
                return null == a ? n : {
                    ...s.z(n) ? n : {},
                    canOpenCredit: null != a.linkId && null != a.access.accountId && e.get(u.f) === a.access.accountId && "current" === a.access.status(e.get)
                }
            }
        })
    }),
    FNWO: (function(e, t, n) {
        var a = n("RjXy"),
            r = n("lAQI"),
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
            c = r.F({
                account_section: r.p(["banking", "investments", "credit_cards", "real_estate", "loans", "payroll", "other"]).optional().catch(void 0),
                link_status: r.p(["linked", "error", "disconnected"]).optional().catch(void 0),
                surface: r.p(["ledger_profile", "mattress_accounts_tab", "unknown", "web", "native"]).optional().catch(void 0),
                device_type: r.p(["mobile", "tablet", "desktop", "unknown"]).optional().catch(void 0),
                selection_source: r.p(["profile", "snapshot"]).optional().catch(void 0),
                view_mode: r.p(["pip", "inline", "fullscreen", "modal", "sidebar", "unknown"]).optional().catch(void 0),
                reason: r.p(["close_button", "follow_up", "remove_success"]).optional().catch(void 0),
                item_count: r.E().int().nonnegative().max(0x7fffffff).optional().catch(void 0),
                result: r.p(["empty", "non_empty"]).optional().catch(void 0),
                provider: r.z("plaid").optional().catch(void 0),
                plaidExitStatus: r.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0),
                plaidErrorCode: r.L().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0)
            }),
            u = {
                label: r.L().startsWith("ledger."),
                tags: r.g(r.F({
                    key: r.L(),
                    value: r.L()
                })).optional()
            },
            d = r.m("type", [r.F({
                type: r.z("event"),
                label: u.label,
                payload: c.optional().catch(void 0)
            }), r.F({
                type: r.z("count"),
                ...u,
                count: r.E().optional()
            }), r.F({
                type: r.z("hist"),
                ...u,
                value: r.E()
            }), r.F({
                type: r.z("error")
            })]);
        n.d(t, {}, {
            a: function(e, t) {
                let n = d.safeParse(t);
                if (!n.success) return;
                let r = n.data;
                if ("event" === r.type) {
                    let t = l[r.label];
                    if (null == t) return;
                    (0, i.a)(e, a.d, {
                        eventType: t,
                        accountSection: r.payload?.account_section,
                        linkStatus: r.payload?.link_status,
                        surface: r.payload?.surface,
                        deviceType: r.payload?.device_type,
                        selectionSource: r.payload?.selection_source,
                        viewMode: r.payload?.view_mode,
                        reason: r.payload?.reason,
                        itemCount: r.payload?.item_count,
                        result: r.payload?.result,
                        provider: r.payload?.provider,
                        plaidExitStatus: r.payload?.plaidExitStatus,
                        plaidErrorCode: r.payload?.plaidErrorCode
                    });
                    return
                }
                let c = {
                        ..."tags" in r ? Object.fromEntries(r.tags?.map(e => {
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
                    u = e.get(o.a);
                switch (r.type) {
                    case "count":
                        u.count("ecosystem", r.label, c, r.count);
                        break;
                    case "hist":
                        u.hist("ecosystem", r.label, c, r.value);
                        break;
                    case "error":
                        u.count("ecosystem", "app.error", c)
                }
            }
        })
    }),
    O0Tw: (function(e, t, n) {
        n.d(t, {
            a: () => I,
            b: () => v
        });
        var a = n("QosV");
        let r = "ledger_spend_by_category_widget",
            o = "ledger_portfolio_distribution_widget";

        function i(e) {
            return null !== e && "object" == typeof e && !Array.isArray(e)
        }

        function s(e) {
            if ("object" == typeof e && null != e && "top_categories" in e) return Array.isArray(e.top_categories) ? 0 === e.top_categories.length ? "spend_empty" : "spend_summary" : void 0
        }
        var l = n("RjXy"),
            c = n("AuIy"),
            u = n("zd8w"),
            d = n("Cslg"),
            p = n("OOaz"),
            _ = n("dQRk"),
            E = n("yGJW"),
            f = n("PeqE"),
            h = n("kAhA"),
            m = n("JLZd");

        function g(e, t, n) {
            let a = e.get(_.N, t);
            if (null == a) return;
            let r = (0, c.b)({
                mapping: a,
                current_node: n
            }).find(e => "user" === e.author.role);
            if (r?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(_.bb, t)) return a[n]?.message
        }

        function I(e, t) {
            let {
                access: n
            } = t, {
                chatGptThreadId: a,
                sourceMessageId: r
            } = t.request;
            if (!0 !== t.widget.is_verified_first_party || !0 === t.mcpAppHostAdapter.isTombstone || null == t.mcpAppHostAdapter.assertActive || !("connectorId" in n.serverIdentity) || n.serverIdentity.connectorId !== f.a || null == n.uiUserId || null == n.accountId || null == a || !r) return;
            try {
                n.assertActive(), t.mcpAppHostAdapter.assertActive()
            } catch {
                return
            }
            let o = e.get(_.j, a);
            if (null == o) return;
            let i = g(e, a, r);
            if (i?.author.role !== "assistant" && i?.author.role !== "tool") return;
            let s = (0, h.b)(e, n.accountId);
            if (null != s) try {
                s.userId === n.uiUserId && s.isCurrent() && T(e, s, {
                    conversationId: o,
                    messageId: r,
                    widgetName: "ledger_connected_institutions",
                    widgetResultKind: "syncing"
                })
            } finally {
                s.dispose()
            }
        }

        function T(e, t, n) {
            t.retainTelemetry(new Promise(a => {
                (0, E.a)(e, l.h, {
                    surfaceName: "chat",
                    ...n
                }, () => a(), void 0, {
                    expectedUserId: t.analyticsUserId,
                    expectedAccountId: t.accountId,
                    eventCreatedAt: new Date().toISOString()
                })
            }))
        }

        function v(e, t, n) {
            let l, c, d, _, E, f = (0, a.c)(15),
                h = (0, u.useRef)(null);
            f[0] !== e || f[1] !== n ? (l = function(e, t) {
                let {
                    scope: n,
                    turn: a,
                    sourceMessageId: i,
                    sharedPostId: s,
                    sharedConversationId: l
                } = e, {
                    widgetName: c,
                    component: u,
                    contentReferenceStartIndex: d,
                    externalResourcesBlocked: _
                } = t;
                if (!(null == c || c !== r && c !== o || null == u && "ledger_spend_by_category_widget" !== c || null == i || null == a || (0, p.e)(a.conversationId)) && "primary" === a.conversationType && !1 !== a.isPresented && !1 !== a.trackShownImpressions && !a.isReadOnly && !a.shouldBlockExternalEgress && !a.renderRestrictedWidgets && !a.renderRestrictedModelResponses && !_ && null == l && null == s && "tpp" !== a.conversationOrigin && "flora" !== a.conversationOrigin && "chatgpt-thread" === n.value.routeKind && n.value.conversationId === a.conversationId && null != d && Number.isInteger(d) && !(d < 0) && a.contentReferences.some((e, t) => "dil" === e.type && e.name === c && e.start_idx === d && (a.contentReferenceMessageIds?.[t] ?? a.messageId) === i)) return {
                    key: JSON.stringify([a.conversationId, i, d, c, u]),
                    conversationId: a.conversationId,
                    messageId: i,
                    contentReferenceStartIndex: d,
                    widgetName: c,
                    component: u
                }
            }(e, n), f[0] = e, f[1] = n, f[2] = l) : l = f[2];
            let m = l,
                g = m?.key,
                {
                    scope: I
                } = e;
            f[3] !== t || f[4] !== m || f[5] !== I ? (c = () => {
                let e = t.current;
                if (null != e && null != m) return null == h.current && (h.current = b()), h.current.attach(I, e, m)
            }, f[3] = t, f[4] = m, f[5] = I, f[6] = c) : c = f[6];
            let T = (0, u.useEffectEvent)(c);
            return f[7] !== T ? (d = () => T(), f[7] = T, f[8] = d) : d = f[8], f[9] !== g || f[10] !== I ? (_ = [I, g], f[9] = g, f[10] = I, f[11] = _) : _ = f[11], (0, u.useEffect)(d, _), f[12] !== m || f[13] !== g ? (E = null == m ? void 0 : (e, t) => {
                null == h.current && (h.current = b()), h.current.commit(g, function(e, t, n, a) {
                    let l;
                    if (e !== r || t?.component !== "LedgerSpendByCategoryWidget" || n?.has_connected_accounts === !1 || !Array.isArray(n?.month_views) || n.month_views.length <= 1) {
                        var c = e,
                            u = t,
                            d = n;
                        if (c === o) return u?.component !== "LedgerPortfolioDistributionWidget" || void 0 === d ? void 0 : !1 === d.has_connected_accounts ? "no_accounts" : !1 === d.has_holdings ? "portfolio_empty" : !0 === d.has_holdings ? "portfolio_summary" : void 0;
                        if (c !== r || void 0 !== u && "LedgerSpendByCategoryWidget" !== u.component || void 0 === d) return;
                        if (void 0 !== u && !1 === d.has_connected_accounts) return "no_accounts";
                        let a = d.month_views,
                            i = d.selected_month_index;
                        return Array.isArray(a) && ("number" == typeof i || "bigint" == typeof i) && ("number" != typeof i || Number.isInteger(i)) && !(i < 0) && !(i >= a.length) ? s(a[Number(i)]) : void 0
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
                    }(a);
                    if (void 0 !== p) {
                        for (let e of n.month_views)
                            if (i(e) && e.option_value === p) {
                                if (void 0 !== l) return;
                                l = e
                            } return s(l)
                    }
                }(m.widgetName, null == m.component ? void 0 : {
                    component: m.component
                }, e, t))
            }, f[12] = m, f[13] = g, f[14] = E) : E = f[14], E
        }

        function b() {
            let e, t;
            return {
                commit: (n, a) => {
                    null != n && (e = {
                        key: n,
                        kind: a
                    }, t?.key === n && t.observation.update(a))
                },
                attach: (n, a, r) => {
                    var o, i, s;
                    let l, u, p, _, E, f, I, v, b, A, y = (o = n, i = a, s = r, E = o.get(d.n), f = () => {
                        let e = g(o, s.conversationId, s.messageId);
                        return (e?.author.role === "assistant" || e?.author.role === "tool") && e.metadata?.is_visually_hidden_from_conversation !== !0 && e.metadata?.reasoning_status == null && e.metadata?.model_dil_v2 == null && (0, c.s)((0, c.s)(e.metadata?.model_dil)?.dil)?.type == null
                    }, I = new Set, v = !1, b = () => {
                        v = !0, p?.(), _?.(), l?.dispose()
                    }, A = () => {
                        if (p?.(), p = void 0, v || !l?.isCurrent() || !f()) return;
                        let e = u;
                        null == e || I.has(e) || (p = (0, m.a)(o, i, () => {
                            !(v || u !== e || !l?.isCurrent() || I.has(e)) && f() && (I.add(e), T(o, l, {
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
                        } = e, n = t(d.n);
                        n.authenticatedUserId === E.authenticatedUserId && n.userId === E.userId && n.authenticatedAccountId === E.authenticatedAccountId && (null == E.accountUserId || n.accountUserId === E.accountUserId) && (null == l || l.isCurrent()) ? v || null != l || null == E.authenticatedAccountId || (l = (0, h.b)(o, E.authenticatedAccountId), A()) : b()
                    }), v && _(), {
                        update: e => {
                            u !== e && (u = e, A())
                        },
                        dispose: b
                    });
                    return t = {
                        key: r.key,
                        observation: y
                    }, e?.key === r.key && y.update(e.kind), () => {
                        t?.observation === y && (t = void 0), y.dispose()
                    }
                }
            }
        }
    }),
    o62A: (function(e, t, n) {
        var a = n("i5ac"),
            r = n.n(a),
            o = n("UKCO"),
            i = n("Vrnh"),
            s = n("P61R"),
            l = n("Dgwo"),
            c = n("tl5a"),
            u = n("KJ1J"),
            d = n("tTIR"),
            p = n("VvpR"),
            _ = n("PYah"),
            E = n("X6Vn"),
            f = n("mdWu"),
            h = n("FPpy"),
            m = n("Yshm"),
            g = n("qZWE"),
            I = n("xSzB"),
            T = n("joT6"),
            v = n("loz7"),
            b = n("uzkw"),
            A = n("EEop"),
            y = n("cLdu"),
            C = n("ueue"),
            N = n("tSEg");

        function w(e) {
            return (0, y.i)(e.hostId) && R(e)
        }

        function R(e) {
            let {
                mcpAppScope: t,
                access: n,
                server: a
            } = e, r = "connectorId" in n.serverIdentity ? n.serverIdentity.connectorId : null;
            return "internal://plugin-management-suggestions" === t.originResourceUri && (0, u.f)(a) && r === s.a && t.codexAppsToolScope?.connectorId === r
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    conversationId: n,
                    hostId: a,
                    installPlugin: s,
                    mcpAppScope: u,
                    navigate: R,
                    access: P,
                    server: S,
                    sessionId: D,
                    sourceMcpAppId: G,
                    toolResult: L
                } = e;
                if (!w({
                        hostId: a,
                        mcpAppScope: u,
                        access: P,
                        server: S
                    })) return null;
                let x = {
                        hostId: a,
                        threadId: n
                    },
                    O = (0, I.f)(L),
                    F = m.c.safeParse(O?._meta ?? O).data,
                    M = (e, a, r) => {
                        let {
                            accountId: o,
                            uiUserId: i
                        } = P;
                        null == o || null == i || t.get(N.j) || t.get(g.s, D)?.sourceMcpAppId !== G || (0, b.a)({
                            connectorId: a,
                            conversationId: n,
                            eventType: r,
                            expectedIdentity: {
                                accountId: o,
                                userId: i
                            },
                            pluginId: e,
                            productSurface: "CODEX"
                        })
                    };
                return (0, h.a)({
                    scope: t,
                    hostId: a,
                    navigate: R,
                    toolResult: L,
                    onSuggestionInteraction: M,
                    connect: async (e, r) => {
                        let u = e.plugin_id;
                        try {
                            let h = t.get(c.dc, x)?.latestTurnId,
                                m = !1,
                                g = !1;
                            if (!s({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: o.cd,
                                    remotePluginId: u
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: n
                                    },
                                    hostId: a,
                                    marketplaceAnalytics: r,
                                    onError: () => {
                                        g = !0
                                    },
                                    onSuccess: () => {
                                        m = !0
                                    },
                                    origin: "in_conversation_elicitation",
                                    productContext: "codex",
                                    requiresAppSetup: !0
                                })) return {
                                pluginId: u,
                                status: "unavailable"
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, n = t(v.o);
                                    return "closed" === n.kind || n.hostId !== a
                                }), g) return {
                                pluginId: u,
                                status: "retryable_error"
                            };
                            if (!m) return {
                                pluginId: u,
                                status: "cancelled"
                            };
                            let I = (0, l.b)(t, a);
                            if (!(0, y.i)(a)) {
                                let e = await I.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: u,
                                    status: "retryable_error"
                                }
                            }
                            let b = t.query.snapshot(A.l, {
                                hostId: a,
                                marketplacePath: null,
                                pluginName: u,
                                productContext: "codex",
                                remoteMarketplaceName: o.cd
                            });
                            await b.invalidate({
                                refetchType: "none"
                            });
                            let [N, w] = await Promise.all([b.getOrFetch(), (0, _.a)(t, a, n)]);
                            if (!N.summary.installed || !N.summary.enabled || null != N.summary.remotePluginId && N.summary.remotePluginId !== u || !N.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return w.has(t)
                                }) || (await (0, T.a)({
                                    scope: t,
                                    authPolicy: N.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: a,
                                    plugin: (0, C.c)(N),
                                    queryClient: t.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: u,
                                status: "connection_required"
                            };
                            if (void 0 === h || (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(c.dc, x);
                                    return null != a && (a.latestTurnId !== h || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n) && !t(E.c))
                                }), await I.getLatestTurnId(n) !== h)) return {
                                pluginId: u,
                                status: "connected"
                            };
                            if (!(0, d.b)(n)) return {
                                pluginId: u,
                                status: "retryable_error"
                            };
                            try {
                                await (0, p.c)(t, a, n, {
                                    turnTrigger: "plugin_suggestion_connected",
                                    additionalContext: (0, i.c)({
                                        connectedPlugin: e.display_name
                                    })
                                })
                            } finally {
                                (0, d.a)(n)
                            }
                            return {
                                pluginId: u,
                                status: "connected"
                            }
                        } catch {
                            return {
                                pluginId: u,
                                status: "retryable_error"
                            }
                        }
                    },
                    decline: async e => {
                        let o = e => !e(N.j) && e(g.s, D)?.sourceMcpAppId === G,
                            s = m.d.safeParse(t.get(g.x, D) ?? {});
                        if (!o(t.get) || !s.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let u = new Set(s.data.connectedPluginIds),
                            _ = new Set(s.data.declinedPluginIds),
                            E = r()(e, "plugin_id").filter(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return !u.has(t) && !_.has(t)
                            });
                        if (0 === E.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let h = t.get(c.dc, x)?.latestTurnId,
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
                        t.set(g.x, D, {
                            ...s.data,
                            declinedPluginIds: [..._, ...I]
                        });
                        try {
                            if (void 0 === h) return {
                                status: "declined",
                                declinedPluginIds: I
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(c.dc, x);
                                    return !o(t) || null != a && (a.latestTurnId !== h || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n))
                                }), await (0, l.b)(t, a).getLatestTurnId(n) === h && o(t.get) && (0, d.b)(n)) try {
                                await (0, p.c)(t, a, n, {
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
                                (0, d.a)(n)
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
            c: w
        })
    }),
    KMWy: (function(e, t, n) {
        var a = n("UKCO");
        let r = (0, n("Nwp9").b)(a.Uc, {}, {
            coerceStoredValue: e => a.ej.parse(e)
        });
        n.d(t, {}, {
            a: function(e, t) {
                return (t ? a.fj.options : a.hj).filter(t => e.permissions?.[t] != null)
            },
            b: function(e, t, n) {
                let r, o = e.map(e => a.gj[e].feature),
                    i = [...new Set(["fullscreen", "encrypted-media", ...t ?? [], ...o, ...n ? ["local-network-access"] : []])];
                return r = null != t || o.length > 0 ? i.map(e => `${e} *`).join("; ") : n ? "encrypted-media *; local-network-access" : "encrypted-media *", {
                    frameFeatures: i,
                    iframeAllow: r
                }
            },
            c: r
        })
    }),
    ioMY: (function(e, t, n) {
        var a = n("lAQI"),
            r = n("sS8e");
        n.d(t, {}, {
            a: {
                createAlreadyPendingError: () => (0, r.c)("A follow-up message is already awaiting confirmation", -32e3),
                createCanceledError: () => (0, r.c)("Follow-up message was not confirmed", -32e3)
            },
            b: async function(e, t, n, r) {
                let {
                    text: o
                } = a.F({
                    text: a.L().min(1)
                }).parse(e), i = await n({
                    prompt: o
                });
                r.throwIfAborted(), await t({
                    text: i
                })
            }
        })
    }),
    QagL: (function(e, t, n) {
        let a, r, o;
        n.d(t, {
            a: () => nd,
            b: () => np
        });
        var i = n("ABep"),
            s = n("QosV"),
            l = n("Q840"),
            c = n("zd8w"),
            u = n("URlz"),
            d = n("o62A"),
            p = n("HwRo"),
            _ = n("ntKy"),
            E = n("tSEg"),
            f = n("hZax"),
            h = n("WFY2"),
            m = n("SNez"),
            g = n("Vjzf"),
            I = n("kSHG"),
            T = n("bTvG"),
            v = n("iRMi"),
            b = n("t0Nb"),
            A = n("kUij"),
            y = n("fD5v"),
            C = n("OppN"),
            N = n("WWo4"),
            w = n("zmIi"),
            R = n("SZCv"),
            P = n.n(R),
            S = n("UKCO"),
            D = n("AuIy"),
            G = n("F6B1"),
            L = n("IhIa"),
            x = n("v7qY"),
            O = n("Wf1j"),
            F = n("rEML"),
            M = n("lAQI"),
            k = n("KJ1J");
        let U = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var H = n("PFjh"),
            W = n("yGJW");
        let V = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            Y = M.F({
                type: M.p(["count", "hist"]),
                label: M.p(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: M.z(1).optional(),
                value: M.E().nonnegative().optional(),
                tags: M.g(M.F({
                    key: M.L(),
                    value: M.L()
                })).max(8)
            }),
            j = M.F({
                stage: M.p(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: M.z("ads"),
                checkout_type: M.z("manual"),
                load_metric_version: M.z("1").optional()
            }),
            q = M.F({
                phase: M.p(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: M.p(["create", "edit"]),
                outcome: M.p(["success", "error", "requires_action"]),
                failure_category: M.p(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            z = M.p(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
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
                label: z,
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
                label: z,
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
            ee = n("uTlp"),
            et = n("ZU27"),
            en = n("DiD0"),
            ea = n("SK3E"),
            er = (n("Sbyb"), n("TSib")),
            eo = n("ipIJ"),
            ei = n("uoRg"),
            es = n("Y3OQ"),
            el = n("WBiY"),
            ec = n("Ot7V"),
            eu = n("eT6w"),
            ed = n("PeqE"),
            ep = n("ywSA"),
            e_ = n("Cslg"),
            eE = n("qZWE"),
            ef = n("liTb"),
            eh = n("s5P0");

        function em(e) {
            return (0, ef.k)(e.value)
        }
        var eg = n("gMJf"),
            eI = n("eB3o"),
            eT = n("ZG9f");
        a = (0, eI._)(Symbol.dispose);
        class ev {
            #e = new eb;
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
                } = A.f.parse(e);
                return this.#e.receiveMessage(t), Promise.resolve({})
            } [a]() {
                this.#t(), this.#e[Symbol.dispose]()
            }
        }
        r = (0, eI._)(Symbol.dispose);
        class eb {
            #n = null;
            #a = [];
            #r = null;
            #o = null;
            setNotificationSender(e) {
                this.#o = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#o ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#o({
                    method: A.b,
                    params: {
                        message: e
                    }
                }), Promise.resolve())
            }
            receive() {
                if (null != this.#n) return Promise.reject(this.#n);
                let e = this.#a.shift();
                return null != e ? Promise.resolve(e) : new Promise((e, t) => {
                    this.#r = {
                        reject: t,
                        resolve: e
                    }
                })
            }
            receiveMessage(e) {
                if (null != this.#n) throw this.#n;
                let t = this.#r;
                null == t ? this.#a.push(e) : (this.#r = null, t.resolve(e))
            }
            abort(e) {
                null == this.#n && (this.#n = e instanceof Error ? e : Error("The first-party plugin bridge was disconnected."), this.#a.length = 0, this.#o = null, this.#r?.reject(this.#n), this.#r = null)
            } [r]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var eA = n("ReGc"),
            ey = n("rP0s");
        let eC = M.F({
            prompt: M.p(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eN = n("FgIX"),
            ew = n("g25Y"),
            eR = n("X6Vn"),
            eP = n("yI91"),
            eS = n("ripK"),
            eD = n("bnxy"),
            eG = n("GaA7");
        let eL = "ui/openai/find",
            ex = M.F({
                method: M.z(eL),
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
                    sandboxId: a,
                    initId: r,
                    signal: o,
                    notify: i
                } = t, s = ex.safeParse(e);
                if (!s.success || o.aborted || eG.a?.mcpAppSandbox == null || null == i || null == r) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = eG.a.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: r
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
            eH = n("sF0J"),
            eW = n("QnVT"),
            eV = n("sS8e"),
            eY = n("NJrC"),
            ej = n("LGZt"),
            eq = n("MefB"),
            ez = n("WYvZ"),
            eB = n("geS6"),
            eK = n("Dgwo"),
            e$ = n("a4MG");
        async function eQ(e) {
            let {
                scope: t,
                hostId: n,
                mcpServerStatuses: a,
                server: r,
                threadId: o,
                detail: i = "toolsAndAuthOnly"
            } = e, s = a?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === r
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
                serverName: r,
                detail: i
            })).data.find(e => {
                let {
                    name: t
                } = e;
                return t === r
            }) ?? null;
            if (null == l) throw (0, eV.c)(`MCP server not found: ${r}`, -32e3);
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
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(e2(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (h.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (h.a.info("Updating app event subscriptions for conversation", {
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
                    params: a
                } = e, {
                    conversationId: r
                } = this.params;
                if (null == n || null == r) return;
                let {
                    subscriptionId: o
                } = a, i = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: r,
                    event: a.name,
                    connectorId: a.connectorId,
                    linkId: a.linkId,
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
                        h.a.info("Starting app event subscription", {
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
                        let t = (0, eJ.a)(e, await (0, eK.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
                        await this.params.scope.get(Z.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
                            _meta: {
                                "x-codex-turn-metadata": {
                                    mcp_request_meta: {
                                        link_id: a.linkId,
                                        selected_connector_ids: [a.connectorId]
                                    }
                                }
                            },
                            arguments: a.arguments,
                            name: a.name,
                            server: this.params.server,
                            subscriptionId: n,
                            threadId: r
                        }, {
                            timeoutMs: 95e3,
                            threadAccess: t?.threadAccess
                        }), h.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eJ.e)(e)
                    }
                } catch (a) {
                    if (h.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(o) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(o), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(e2({
                        method: "notifications/events/terminated"
                    }, o)) : void 0]), a
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
                h.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(Z.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw h.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), h.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function e2(e, t) {
            let n = e.params ?? {},
                a = "object" != typeof n._meta || null == n._meta || Array.isArray(n._meta) ? {} : n._meta;
            return {
                ...e,
                params: {
                    ...n,
                    _meta: {
                        ...a,
                        "io.modelcontextprotocol/subscriptionId": t
                    }
                }
            }
        }
        var e3 = n("whdX");
        let e5 = new Map;
        class e6 {
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
                    }(t.notification.params.uri, this.subscriptions) && (h.a.debug("Received app resource update", {
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
                        throw h.a.warning("Failed to subscribe to app resource updates", {
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
                        throw h.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, r = (e5.get(a) ?? Promise.resolve()).then(e), o = r.then(() => void 0, () => void 0);
                return e5.set(a, o), o.then(() => {
                    e5.get(a) === o && e5.delete(a)
                }), r
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
                null == e ? h.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (h.a.info("Updating app resource subscriptions", {
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
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), h.a.info("Updated app resource subscriptions", {
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
            ta = n("DXan"),
            tr = n("nKJ6"),
            to = n("TCti"),
            ti = n("O9EX");
        let ts = (0, l.d)(E.a, (e, t) => {
            let {
                get: n
            } = t;
            return "closed" !== n(ti.a, e)
        });

        function tl(e) {
            let t, n, a, r, o = (0, s.c)(22),
                {
                    panelTabId: i,
                    sandboxElement: u,
                    sandboxId: d,
                    title: p
                } = e,
                _ = (0, l.y)(E.a),
                f = (0, l.z)(to.b) ?? _,
                h = eG.a?.mcpAppSandbox,
                m = (0, l.x)(null != h && ts, i);
            o[0] !== f ? (t = (0, tr.getThreadBrowserConversationId)(f), o[0] = f, o[1] = t) : t = o[1];
            let g = t;
            o[2] !== i || o[3] !== f ? (n = () => {
                let e = f.get(tt.e, i);
                null != i && null != e && (0, tt.activateThreadPanelTab)(f, e, i)
            }, o[2] = i, o[3] = f, o[4] = n) : n = o[4];
            let I = (0, c.useEffectEvent)(n);
            return o[5] !== g || o[6] !== m || o[7] !== _ || o[8] !== i || o[9] !== I || o[10] !== u || o[11] !== d || o[12] !== p ? (a = () => {
                if (!m || null == g || null == h) return;
                let e = (0, G.h)(u.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = h.registerBrowserTarget({
                    conversationId: g,
                    initId: e,
                    sandboxId: d,
                    title: p
                }, I, (e, t) => (async function(e, t, n) {
                    let a = new Image;
                    a.src = t, await a.decode();
                    let r = document.createElement("canvas");
                    r.width = a.naturalWidth, r.height = a.naturalHeight;
                    let o = r.getContext("2d", {
                        alpha: !1
                    });
                    if (null == o || !e.isConnected) throw Error("MCP App screenshot surface is unavailable.");
                    let i = [];
                    for (let t = e; null != t; t = t.parentElement) i.push(getComputedStyle(t).backgroundColor);
                    for (let e of (o.fillStyle = "Canvas", o.fillRect(0, 0, r.width, r.height), i.reverse())) o.fillStyle = e, o.fillRect(0, 0, r.width, r.height);
                    return o.drawImage(a, 0, 0), r.toDataURL("image/jpeg", n / 100).slice(23)
                })(u, e, t));
                t.catch(tu);
                let n = _.watch(e => {
                    let {
                        get: n
                    } = e, a = n(ti.a, i);
                    t.setPresented("right" === a).catch(tc)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, o[5] = g, o[6] = m, o[7] = _, o[8] = i, o[9] = I, o[10] = u, o[11] = d, o[12] = p, o[13] = a) : a = o[13], o[14] !== g || o[15] !== m || o[16] !== _ || o[17] !== i || o[18] !== u || o[19] !== d || o[20] !== p ? (r = [h, g, m, _, i, u, d, p], o[14] = g, o[15] = m, o[16] = _, o[17] = i, o[18] = u, o[19] = d, o[20] = p, o[21] = r) : r = o[21], (0, c.useEffect)(a, r), null
        }

        function tc(e) {
            h.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tu(e) {
            h.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var td = n("KMWy"),
            tp = n("ygJs"),
            t_ = n("nlNF");

        function tE(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: r,
                    sandboxId: o
                } = e,
                i = (0, l.y)(e7.a),
                {
                    pathname: u,
                    search: d
                } = (0, F.Z)(),
                p = (0, F.ab)();
            return a[0] !== p || a[1] !== u || a[2] !== r || a[3] !== o || a[4] !== i || a[5] !== d ? (t = () => {
                let e;
                if (eG.a?.mcpAppSandbox == null || ![S.Vc, S.Wc, S.id, "/plugins/:pluginId/app/:toolName"].some(e => (0, F.L)(e, u))) return;
                let t = (0, S.Og)(r.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    l = () => {
                        let e = i.get(t_.c);
                        return e?.pathname === u && e.search === d ? e : null
                    },
                    c = eG.a.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: o,
                        initId: t
                    }, r => {
                        let c = r.entryIds[r.currentIndex];
                        if (null == c || e === c) {
                            e = void 0;
                            return
                        }
                        a = a.then(async () => {
                            let e = l();
                            if (n || null == e || "committed" !== r.reason) return;
                            let a = e.state?.mcpHistory;
                            if (a?.sandboxId === o && a.initId === t && a.entryId === c) return;
                            s = !0;
                            let _ = r.previousEntryId ?? r.entryIds[r.previousIndex ?? -1],
                                E = i.get(t_.k),
                                f = Math.sign(r.currentIndex - (null == _ ? r.currentIndex : r.entryIds.indexOf(_)));
                            if (null != E && 0 !== f)
                                for (let e = E.index + f; e >= 0 && e < E.entries.length; e += f) {
                                    let n = E.entries[e];
                                    if (n.pathname !== u || n.search !== d || n.state?.mcpHistory?.sandboxId !== o || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === c) return p(e - E.index)
                                }(a?.sandboxId !== o || a.initId !== t) && null != _ && _ !== c && (await p(e, {
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
                                    replace: r.didReplaceEntry || null == _ || _ === c,
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
                    _ = i.watch(a => {
                        let {
                            get: r
                        } = a;
                        r(t_.c);
                        let u = l(),
                            d = u?.state?.mcpHistory,
                            _ = i.get(t_.k);
                        !s && d?.sandboxId === o && (d.initId === t || _?.entries.some(e => e.state?.mcpHistory?.sandboxId === o && e.state.mcpHistory.initId === t)) && (e = d.entryId, c.then(async a => {
                            if (!n && l()?.key === u?.key) {
                                let r = d.initId !== t ? "missing" : await a?.go(d.entryId);
                                "ok" !== r && e === d.entryId && (e = void 0), "missing" !== r || n || l()?.key !== u?.key || null == _ || 0 === _.popDelta || await p(Math.sign(_.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, _(), c[Symbol.dispose]()
                }
            }, n = [u, d, r, o, i, p], a[0] = p, a[1] = u, a[2] = r, a[3] = o, a[4] = i, a[5] = d, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, c.useEffect)(t, n), null
        }
        var tf = n("uWA4");
        let th = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tm = {
                insets: {
                    ...th.insets,
                    top: 48
                }
            };

        function tg(e) {
            let {
                availableDisplayModes: t,
                containerDimensions: n,
                displayMode: a,
                locale: r,
                modelContextHostState: o,
                deepLink: i,
                safeAreaInsets: s,
                styleVariables: l,
                theme: c,
                userAgent: u,
                toolInfo: d
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
                    hover: u.capabilities.hover,
                    touch: u.capabilities.touch
                },
                displayMode: a,
                locale: r,
                platform: "web" === u.device.platform ? "web" : "desktop",
                safeAreaInsets: s,
                styles: {
                    variables: l
                },
                theme: c,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                userAgent: "chatgpt",
                toolInfo: d
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

        function tv(e) {
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
        let tb = (0, l.j)(e7.a, e => {
            let t = new Map,
                n = new Set,
                a = !1;

            function r() {
                a || (a = !0, queueMicrotask(() => {
                    if (a = !1, !(n.size >= 5))
                        for (let {
                                initialize: e
                            }
                            of Array.from(t, (e, t) => {
                                let [n, a] = e;
                                return {
                                    initialize: n,
                                    index: t,
                                    priority: a()
                                }
                            }).sort((e, t) => e.priority.distance - t.priority.distance || t.priority.top - e.priority.top || t.index - e.index)) {
                            if (n.size >= 5) break;
                            t.delete(e) && e()
                        }
                }))
            }
            return function(e, a, o) {
                let i, s = () => {
                        n.delete(l) && r()
                    },
                    l = () => {
                        n.add(l);
                        try {
                            i = e(s), null == i && s()
                        } catch (e) {
                            s(), a(e)
                        }
                    };
                return t.set(l, o), r(), () => {
                    t.delete(l);
                    try {
                        i?.()
                    } finally {
                        s()
                    }
                }
            }
        });
        var tA = n("VwGH"),
            ty = n("OM8g"),
            tC = n("on57"),
            tN = n("WSFD"),
            tw = n("fm8Z");

        function tR(e) {
            let {
                sharesScrollHost: t,
                sessionId: n,
                frameElement: a,
                frameContainer: r,
                fullSurface: o = !1,
                modalOpen: i = !1,
                sandboxElement: s,
                isFullScreen: l,
                isInGlobalHost: c,
                anchorElement: u,
                rightPanelLayoutTick: d
            } = e, p = !i && (l || o) ? u.closest('[data-app-shell-focus-area="right-panel"]') : null, _ = i || l || c, E = t && !_ && !o && r.contains(u);
            if (E && globalThis.CSS?.supports?.("position-anchor", "--mcp-app")) {
                let e = `--mcp-app-${CSS.escape(n)}`;
                u.style.setProperty("--mcp-app-frame-anchor", e), u.dataset.mcpAppFrameAnchor = "", a.style.setProperty("position-anchor", e), Object.assign(a.style, {
                    position: "absolute",
                    top: "anchor(top)",
                    left: "anchor(left)",
                    width: "anchor-size(width, 0px)",
                    height: "anchor-size(height, 0px)",
                    display: "",
                    clipPath: "",
                    borderRadius: "",
                    zIndex: "1"
                }), a.style.removeProperty("corner-shape"), null != s && (s.style.borderRadius = "", s.style.removeProperty("corner-shape"));
                let t = () => {
                    let e = (u.currentCSSZoom ?? 1) / (r.currentCSSZoom ?? 1);
                    a.style.zoom = 1 === e ? "" : String(e)
                };
                t();
                let o = new ResizeObserver(t);
                return o.observe(u), o.observe(r), tp.c.set(a, u), () => {
                    o.disconnect(), tp.c.delete(a), a.style.removeProperty("position-anchor"), delete u.dataset.mcpAppFrameAnchor, u.style.removeProperty("--mcp-app-frame-anchor")
                }
            }
            let f = i ? (0, ty.b)(a) : void 0,
                h = null,
                m = l && !c ? new MutationObserver(() => I()) : null,
                g = new ResizeObserver(() => I()),
                I = () => {
                    let e = u.currentCSSZoom ?? 1,
                        t = (0, tN.a)(u, e),
                        n = {
                            ...t
                        },
                        d = null == p ? "" : (0, tN.b)(t, (0, tN.a)(p, e));
                    a.style.position = _ ? "fixed" : "absolute";
                    let E = null;
                    if (_ ? c || i || (E = a.offsetParent) : E = r, null != E) {
                        let t = (0, tN.a)(E, e);
                        n.x -= t.x, n.y -= t.y
                    }
                    _ || (n.x += r.scrollLeft, n.y += r.scrollTop);
                    let f = "";
                    i || (f = l ? "43" : "1"), Object.assign(a.style, {
                        ...(0, tN.d)(n, e / (r.currentCSSZoom ?? 1)),
                        clipPath: d,
                        display: "",
                        zIndex: f
                    });
                    let g = o || l ? (0, tN.c)(u) : null;
                    if (a.style.borderRadius = g?.radii.join(" ") ?? "", a.style.setProperty("corner-shape", g?.cornerShape ?? ""), null != s)
                        if (s.style.setProperty("corner-shape", g?.cornerShape ?? ""), null == g) s.style.borderRadius = "";
                        else {
                            let e = getComputedStyle(a),
                                t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                n = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                            s.style.borderRadius = [t, n].map(e => g.radii.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                        } null != m && E !== h && (m.disconnect(), h = E, null != E && m.observe(E, {
                        attributeFilter: ["class", "style"],
                        attributes: !0
                    }))
                };
            g.observe(r), null != p && g.observe(p);
            let T = e => {
                e.target instanceof Element && e.target !== r && e.target.contains(u) && I()
            };
            if (E) {
                tp.c.set(a, u), g.observe(u);
                let e = u.closest("[data-turn-key]");
                null == e || u.hidden || g.observe(e), r.addEventListener("scroll", T, !0)
            }
            let v = (0, tA.b)(u, a, I, E ? {
                    ancestorScroll: !1,
                    ancestorResize: !1,
                    elementResize: !1
                } : void 0),
                b = (0, tw.a)({
                    update: I,
                    motionValues: [d]
                });
            return () => {
                f?.(), b.disconnect(), v(), E && (tp.c.delete(a), r.removeEventListener("scroll", T, !0)), g.disconnect(), m?.disconnect()
            }
        }
        var tP = n("qbxq");
        let tS = M.Q([N.b, M.F({
                target: M.p(["active", "new"]).optional(),
                send: M.z(!1)
            }).strict()]),
            tD = N.c.extend({
                _meta: N.c.shape._meta.unwrap().extend({
                    "openai/message": tS.optional()
                }).optional()
            });

        function tG(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !L.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw (0, eV.c)("Unsupported MCP app content", -32602)
        }

        function tL(e, t) {
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
        var tx = n("HPlV");
        let tO = (0, l.j)(e9.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, r = a.get(er.v).find(t => t.id === e && "context" === t.kind);
                return r?.modelContextUpdateId == null ? null : {
                    updateId: r.modelContextUpdateId,
                    content: r.content?.length ? r.content : void 0,
                    structuredContent: r.structuredContent
                }
            }, {
                isEqual: P()
            })
        });
        var tF = n("slpy"),
            tM = n("Sm6l"),
            tk = n("HOLv"),
            tU = n("O23k");

        function tH(e) {
            let t, n, a, r, o, l, c, u = (0, s.c)(23),
                {
                    backLabel: d,
                    canGoBack: p,
                    canGoForward: _,
                    color: E,
                    forwardLabel: f,
                    onBack: h,
                    onForward: m,
                    radius: g
                } = e,
                I = void 0 === E ? "ghost" : E,
                T = p ? I : "ghost",
                v = !p;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(tk.a, {
                "aria-hidden": !1,
                asset: tU.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== h || u[3] !== g || u[4] !== T || u[5] !== v ? (n = (0, i.jsx)(tM.a, {
                "aria-label": d,
                color: T,
                disabled: v,
                onClick: h,
                radius: g,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = h, u[3] = g, u[4] = T, u[5] = v, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, i.jsx)(tF.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let b = _ ? I : "ghost",
                A = !_;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, i.jsx)(tk.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tU.a
            }), u[10] = r) : r = u[10], u[11] !== f || u[12] !== m || u[13] !== g || u[14] !== b || u[15] !== A ? (o = (0, i.jsx)(tM.a, {
                "aria-label": f,
                color: b,
                disabled: A,
                onClick: m,
                radius: g,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = f, u[12] = m, u[13] = g, u[14] = b, u[15] = A, u[16] = o) : o = u[16], u[17] !== f || u[18] !== o ? (l = (0, i.jsx)(tF.a, {
                content: f,
                side: "bottom",
                children: o
            }), u[17] = f, u[18] = o, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, i.jsxs)(i.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tW(e) {
            let t, n, a, r, o, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: _,
                    onBack: E,
                    onForward: f
                } = e,
                h = (0, O.a)();
            u[0] !== h ? (t = h.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back"
            }), u[0] = h, u[1] = t) : t = u[1];
            let m = t;
            u[2] !== h ? (n = h.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next"
            }), u[2] = h, u[3] = n) : n = u[3];
            let g = n;
            return u[4] !== d ? (a = (0, tC.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== E ? (r = e => {
                e.stopPropagation(), E()
            }, u[6] = E, u[7] = r) : r = u[7], u[8] !== f ? (o = e => {
                e.stopPropagation(), f()
            }, u[8] = f, u[9] = o) : o = u[9], u[10] !== m || u[11] !== p || u[12] !== _ || u[13] !== g || u[14] !== r || u[15] !== o ? (l = (0, i.jsx)(tH, {
                backLabel: m,
                canGoBack: p,
                canGoForward: _,
                forwardLabel: g,
                onBack: r,
                onForward: o
            }), u[10] = m, u[11] = p, u[12] = _, u[13] = g, u[14] = r, u[15] = o, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, i.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tV,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tV(e) {
            return e.stopPropagation()
        }
        var tY = n("oMYH"),
            tj = n("Yshm"),
            tq = n("EDsV"),
            tz = n("MTYR"),
            tB = n("IWEP");
        let tK = M.I(function(e, t) {
            let n = new WeakSet,
                a = M.J(M.L(), M.R()),
                r = (e, o) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: o,
                        message: "Cyclic tool arguments"
                    }), tB.d;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...o, t]));
                        let n = a.safeParse(e);
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
                            return [t, r(n, [...o, t])]
                        }))
                    } finally {
                        n.delete(e)
                    }
                };
            return r(e, [])
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
                ...g.e.shape.params.shape,
                content: M.g(t0.g).optional()
            }));

        function t3(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        var t5 = n("kl6F");
        let t6 = M.F({
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
            ne = (0, l.v)(t5.a, e => null),
            nt = ["resources/subscribe", "resources/unsubscribe"],
            nn = ["openai/events/subscribe", "openai/events/unsubscribe"],
            na = M.x(),
            nr = M.F({
                uri: M.L().min(1)
            }).loose(),
            no = M.F({
                arguments: M.J(M.L(), na).optional(),
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
                    return t?.protocol !== "https:" || t.username || t.password ? L.f.safeParse(e).success ? e : null : t.href
                }).catch(null)
            });

        function nc(e) {
            let {
                ModalFrame: t,
                recipient: a,
                resource: r,
                analyticsContext: o,
                conversationId: s,
                firstPartyPluginBridge: u,
                firstPartyPluginLoggerPluginId: p,
                pluginId: _,
                fullSurface: f,
                modalOpen: m = !1,
                hostScroll: R = !1,
                hostDisplayModes: L,
                hostId: z,
                hostedInThreadScrollLayout: K,
                access: Q,
                inheritHostBackground: ef = !1,
                installPlugin: eI,
                inlineFrameAnchor: eT,
                allowGlobalHost: eb,
                sessionId: ex,
                sourceMcpAppId: eO,
                mcpAppScope: e$,
                sourceName: eJ,
                permissionAppDisplayName: e0,
                mcpServerStatuses: e2,
                mcpAppHostAdapter: e5,
                getNewThreadDestination: tr,
                widgetStatePersistence: ti,
                plaidAccountId: ts,
                deepLink: tc,
                rightPanelLayoutTick: tu,
                resolveResourceWatchPath: t_,
                server: tf,
                toolIcon: tA,
                appIcon: ty,
                sidePanelTitle: tN,
                title: tw,
                globalSurface: tS = !1,
                toolArguments: tF,
                toolResult: tM,
                toolResultNotification: tk,
                toolCallStatus: tU,
                toolCallCancellationReason: tH,
                viewParamsOverride: tV,
                frameState: tB
            } = e, tK = (0, l.y)(E.a), t0 = (0, l.y)(e7.a), t3 = (0, O.a)(), t5 = (0, c.useSyncExternalStore)(eT.subscribe, eT.getSnapshot, () => null), na = (0, c.useEffectEvent)(() => tK), nc = (0, c.useEffectEvent)(() => Q.assertActive()), {
                csp: nu,
                fitWidth: nd,
                html: np,
                sandboxOrigin: n_,
                serverOrigin: nE,
                generatedSandboxOrigin: nf
            } = r, nh = r.prefersBorder && !e5?.hideFrameBorder, nm = (0, c.useEffectEvent)(() => _), ng = (0, c.useEffectEvent)(() => e0 ?? eJ), nI = (0, td.a)(r, eG.a?.mcpAppSandbox != null), nT = nI.join(";"), nv = "connectorId" in Q.serverIdentity ? Q.serverIdentity.connectorId : null, nb = null != a, nA = (0, c.useEffectEvent)(() => a?.get(ei.a)?.updatePrompt != null), ny = !nb || a?.value.kind === "new" || a?.value.kind === "local" || a?.value.kind === "chatgpt", nC = (0, l.x)(Z.d, z), nN = (0, l.x)(Z.nc, {
                hostId: z,
                threadId: s
            }), nw = null != nN && "notLoaded" !== nN.type, nR = !(0, k.f)(tf) && nu?.connectDomains.some(e => (0, eY.d)(new URL(e).hostname)) === !0, nP = (0, ta.a)(Q, o), nS = null != nE ? new URL(nE) : null, nD = e5?.sandboxFeatures, nG = nD?.join(";"), nL = eG.a?.mcpAppSandbox == null && (nD?.includes("local-network-access") === !0 || (0, eY.g)(nu) || nR && nS?.protocol === "https:" && (0, eY.d)(nS.hostname)), nx = (0, c.useEffectEvent)(() => {
                (0, eE.E)(na(), ex, {
                    sandboxGeneration: tB.sandboxGeneration + 1
                })
            }), nO = (0, F.ab)(), nF = a?.value.kind === "chatgpt" && null != a.value.conversationId && s === `chatgpt:${a.value.conversationId}`, nM = s.startsWith("chatgpt:") ? "chatgpt" : "codex", nk = (0, l.z)(a?.get(tO, ex) ?? null), nU = (0, c.useEffectEvent)(() => a?.get(tO, ex).get() ?? null), nH = (0, l.z)(et.l.activeTab$), nW = (0, l.z)(to.a), nV = (0, l.z)(eW.a), nY = nV["--color-background-primary"], {
                isWidgetReady: nj
            } = tB, nq = (0, eE.e)(tB), nz = !f && "fullscreen" === nq, nB = tB.displayMode, nK = f && eb, n$ = (0, c.useRef)(!1), nQ = (0, c.useRef)(null), nX = (0, c.useRef)(null), nZ = (0, c.useRef)(null), nJ = (0, c.useRef)(null), n0 = (0, l.x)(eE.g, ex), n1 = (0, c.useRef)(null), n2 = (0, c.useRef)(null), n3 = e => {
                if (!(0, k.f)(tf)) return null;
                let t = tK.get(eE.h, eO);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eB.d)({
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
                    let r = new Map(e);
                    return r.set(eO, {
                        ...t,
                        content: {
                            ...n,
                            mcpAppScope: {
                                ...n.mcpAppScope,
                                codexAppsToolScope: a
                            }
                        }
                    }), r
                });
                let r = tK.get(eE.h, eO)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [n5, n6] = (0, c.useState)(null), [n4, n8] = (0, c.useState)(null), [n7, n9] = (0, c.useState)(null), [ae, at] = (0, c.useState)(!1), [an, aa] = (0, c.useState)(null), [ar, ao] = (0, c.useState)(null), ai = ar?.api ?? null, as = ar?.widgetId ?? null, al = (0, tn.a)(e => t_?.(e) ?? null), ac = (0, k.f)(tf) && (0, S.Sh)(nC, "mcpEventStream"), au = (0, c.useMemo)(() => new e6({
                scope: t0,
                hostId: z,
                mcpAppId: ex,
                originResourceUri: e$.originResourceUri,
                resolveResourceWatchPath: al,
                server: tf
            }), [t0, z, ex, e$.originResourceUri, al, tf]), ad = (0, c.useMemo)(() => new e1({
                scope: t0,
                hostId: z,
                server: tf
            }), [t0, z, tf]), ap = nz ? (0, te.b)(ex) : e5?.panelTabId ?? null, a_ = (0, l.z)(to.b) ?? tK, aE = (0, l.w)(ne, ex), [af, ah] = (0, c.useState)(t9), am = null != nv && t8.has(nv), ag = am && null != ai && (af.canGoBack || af.canGoForward), {
                cancel: aI,
                confirmation: aT,
                confirm: av,
                request: ab
            } = (0, ek.a)(eM.a), aA = e5?.viewerHeader === !0, ay = e5?.forwardedRequestMethods, aC = ay?.join(";") || void 0, aN = JSON.stringify(e5?.experimentalCapabilities), aw = e5?.openFile, aR = (0, l.z)(E.j), aP = tS && (0, k.f)(tf) && !aR && null != a && null != _ && null != nv, aS = (0, l.x)(X.a, {
                name: "codex.browser"
            }), aD = !aR && aS.isCapable, aG = aD || nb && ny, aL = !aR && (void 0 === aw ? (0, S.Hi)((0, ey.a)(t0, z)) : null != aw), ax = null != e5, aO = e5?.expectedReadySignal, aF = e5?.pluginSuggestions != null, aM = !0 === e$.isVerifiedFirstParty, ak = e5?.displayMode === "modal", aU = (0, c.useEffectEvent)(() => e5), aH = e5?.onRequestClose != null || K, aW = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, k.f)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e5,
                server: tf,
                connectorId: nv,
                widgetScope: e$
            }), aV = null != aW, aY = aW?.requestTargetedReply != null || e5?.setTargetedReply != null || e5?.requestTargetedReply != null, aj = aV || e5?.showToast != null, aq = (0, c.useEffectEvent)(() => aW), az = (0, c.useEffectEvent)(e => aW?.viewMode ?? e5?.displayMode ?? e), aB = e5?.requestCheckout != null, aK = e5?.openConversationOverlay != null, a$ = e5?.openPromptInput != null, aQ = e5?.autofill != null, aX = e5?.openInApp != null, aZ = aX && e5?.openInApp?.hideButton !== !0 && e5?.openInApp?.baseUrl != null && null !== tB.openInAppUrl, aJ = e5?.presentation != null, a0 = e5?.presentation?.requestFocusedObject != null, a1 = e5?.presentation?.requestCloseFocusedObject != null, a2 = e5?.presentation?.isSidebarOpen === !0, a3 = e5?.downloadBlob != null, a5 = e5?.triggerHaptic != null, a6 = e5?.files != null, a4 = e5?.share != null, a8 = e5?.requestConnectSheet != null, a7 = e5?.requestReconnectConnector != null, a9 = e5?.requestLinkToConnector != null, re = e5?.isTombstone === !0, rt = (0, c.useEffectEvent)(() => (function(e, t) {
                let {
                    mcpAppId: n,
                    adapter: a,
                    server: r,
                    connectorId: o,
                    widgetScope: i
                } = t;
                if (!(0, k.f)(r) || o !== ed.a || !("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts"))) return;
                if (!0 === i.isVerifiedFirstParty && a?.finance != null) return a.finance;
                if (!em(e) || !0 !== i.resourceIdentityVerified) return;
                let s = e.get(eE.s, n),
                    l = null == s ? void 0 : e.get(eE.i).get(s.sourceMcpAppId);
                if (null == s || null == l) return;
                let {
                    access: c,
                    resource: u
                } = s.resourceSnapshot;
                if (!("local" !== c.context.hostId && c.context.hostId !== S._b || null == c.accountId || l.content.conversationId.startsWith("chatgpt:")) && P()(u, l.content.resource)) return c.assertActive(), (0, eh.a)(e, c.accountId, c.context.hostId === S._b ? (0, S.ae)(l.content.conversationId) : (0, S.he)(l.content.conversationId))
            })(tK, {
                mcpAppId: ex,
                adapter: e5,
                server: tf,
                connectorId: nv,
                widgetScope: e$
            })), rn = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: o
                } = t, {
                    originResourceUri: i
                } = r;
                if ((0, k.f)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === i || "internal://ads-manager-account-setup" === i || "internal://ads-manager-delivery" === i)) return {
                    sendInstrument: t => (function(e, t, n) {
                        let {
                            conversationId: a,
                            originResourceUri: r
                        } = n;
                        ! function(e, t, n) {
                            let a = Y.safeParse(t);
                            if (a.success) {
                                let t = a.data;
                                if (new Set(t.tags.map(e => {
                                        let {
                                            key: t
                                        } = e;
                                        return t
                                    })).size !== t.tags.length) return;
                                let r = Object.fromEntries(t.tags.map(e => {
                                    let {
                                        key: t,
                                        value: n
                                    } = e;
                                    return [t, n]
                                }));
                                if ("payment_elements_stage" === t.label) {
                                    let n = j.safeParse(r);
                                    "count" === t.type && n.success && e.get(H.a).count("payments", "payment_elements_stage", n.data)
                                } else {
                                    let a = q.safeParse(r);
                                    if (!a.success) return;
                                    let {
                                        failure_category: o,
                                        ...i
                                    } = a.data, s = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: n,
                                        client_type: "browser"
                                    }, l = e.get(H.a);
                                    if ("ads_billing_client_phase" === t.label && "count" === t.type) {
                                        let e = {
                                            ...i,
                                            ..."error" === a.data.outcome && o ? {
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
                        }(e, t, r);
                        let o = $.safeParse(t);
                        if (!o.success) return;
                        let i = o.data,
                            s = "browser";
                        if ("event" === i.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = B[i.label], r = i.payload;
                            if (!r[n]) return;
                            (0, W.a)(e, U, {
                                eventType: t,
                                widget: r.widget,
                                viewSessionId: r.view_session_id,
                                view: r.view,
                                action: r.action,
                                outcome: r.outcome,
                                step: r.step,
                                source: r.source,
                                billingStatus: r.billing_status,
                                logoStatus: r.logo_status,
                                accountReviewStatus: r.account_review_status,
                                attentionReason: r.attention_reason,
                                billingRecovery: r.billing_recovery,
                                billingInSidebar: r.billing_in_sidebar,
                                logoHandoffFailed: r.logo_handoff_failed,
                                stepNumber: r.step_number,
                                stepCount: r.step_count,
                                previewKind: r.preview_kind,
                                reason: r.reason,
                                position: r.position,
                                page: r.page,
                                pageCount: r.page_count,
                                pageSize: r.page_size,
                                totalCount: r.total_count,
                                nextPage: r.next_page,
                                host: "codex",
                                clientType: s,
                                conversationId: a.replace(/^chatgpt:/, "")
                            });
                            return
                        }
                        let l = Object.entries(V).flatMap(e => {
                                let [t, n] = e, a = i.tags.find(e => e?.key === t), r = M.p(n).safeParse(a?.value);
                                return r.success ? [{
                                    key: t,
                                    value: r.data
                                }] : []
                            }),
                            {
                                requiredField: c
                            } = B[i.label],
                            u = "outcome" === c ? "widget" : c;
                        if (!l.some(e => "widget" === e.key) || !l.some(e => e.key === u)) return;
                        let d = {
                            ...Object.fromEntries(l.map(e => {
                                let {
                                    key: t,
                                    value: n
                                } = e;
                                return [t, n]
                            })),
                            attribution_id: "connector_openai_ads_manager",
                            name: r,
                            client_type: s
                        };
                        e.get(H.a).count("ecosystem", i.label, d)
                    })(e, t, {
                        conversationId: o,
                        originResourceUri: i
                    })
                }
            }(tK, {
                server: tf,
                connectorId: nv,
                widgetScope: e$,
                conversationId: s
            }), ra = (0, c.useEffectEvent)(() => rn), rr = null != ts && (0, k.f)(tf) && ax && nv === ed.a, ro = (0, c.useMemo)(() => null != tF && "object" == typeof tF ? tF : null, [tF]), ri = (0, c.useMemo)(() => null == tM ? null : (0, e4.i)({
                isCodexAppsServer: (0, k.f)(tf),
                toolResult: tM
            }), [tf, tM]), rs = (0, c.useMemo)(() => null == ri ? null : (0, e4.e)(ri), [ri]), rl = void 0 === tV ? rs : tV, rc = (0, c.useEffectEvent)(() => rl), ru = (0, c.useMemo)(() => null == ri ? null : (0, e4.f)(ri), [ri]), rd = (0, c.useMemo)(() => tk ?? (0, e4.c)(ri, {
                preserveStructuredContentNull: e5?.preserveStructuredContentNull
            }), [e5?.preserveStructuredContentNull, tk, ri]), rp = tU ?? (rd?.isError === !0 ? "error" : void 0), r_ = (0, c.useMemo)(() => null == rp ? ru : {
                ...ru,
                status: rp
            }, [rp, ru]), rE = (0, c.useEffectEvent)(() => ({
                sourceMcpAppId: eO,
                toolInput: ro,
                toolOutput: rs,
                toolResponseMetadata: r_,
                toolStatus: rp,
                toolResult: ri,
                toolResultNotification: rd,
                toolCallCancellationReason: tH
            })), rf = (0, c.useEffectEvent)(e => null == eI || null != rp ? null : (0, d.a)({
                scope: tK,
                conversationId: s,
                hostId: z,
                installPlugin: eI,
                mcpAppScope: e$,
                navigate: nO,
                access: Q,
                server: tf,
                sessionId: ex,
                sourceMcpAppId: eO,
                toolResult: e
            })), rh = null == n_ ? void 0 : (0, tz.c)(n_, t3.locale), rm = Q.getSandboxPartition?.(r) ?? G.b, rg = null == rh ? null : (0, tz.b)(rh), rI = (0, c.useEffectEvent)(() => {
                if (null == rh) return null;
                let e = (0, G.j)(rh);
                return null == e ? null : {
                    csp: nu,
                    experimentalCapabilities: e5?.experimentalCapabilities,
                    html: np,
                    locale: t3.locale,
                    sandboxOrigin: e,
                    sourceUrl: rh
                }
            }), rT = an?.isConnected === !0 ? an : null, rv = t5?.isConnected === !0 ? t5 : null, rb = null != rv || null != rT, rA = (0, c.useEffectEvent)(() => rb ? {
                scope: a_,
                tabId: ap
            } : null), ry = !nz && !f && t5?.dataset.mcpAppInlineSurface === "card", rC = "iframe", rN = "function" == typeof n4?.moveBefore, rw = m && rN, rR = rv ?? (!nz && n4?.isConnected ? n4.parentElement : null), rP = rR?.closest("[data-mcp-app-scroll-host]"), rS = !nz && (!f && R || null != rP), rD = eb && !(f && aA) && !rS && (rN || !K), rG = rD ? null : rR?.closest("[data-mcp-app-portal-target='true']") ?? (!rN && n4?.isConnected ? n4.parentElement : null), rL = rN || rD ? n4 : rG, rx = (0, c.useEffectEvent)(e => {
                let t = tI(e, f, nz ? "fullscreen" : "inline");
                return !f && "inline" === nq && nd && rv?.parentElement != null && (t.maxWidth = rv.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rO = (0, c.useEffectEvent)(() => {
                (0, eg.c)(na(), {
                    hostId: z,
                    pluginId: _,
                    server: tf
                }, ex)
            }), rF = (0, c.useEffectEvent)(() => ({
                safe: {
                    connectorId: nv,
                    mcpAppId: ex,
                    sandboxId: rg,
                    initId: (0, G.h)(n7?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: z,
                    server: tf
                }
            })), rM = (0, c.useEffectEvent)(e => {
                (0, W.a)(tK, T.o, {
                    attributionId: nv ?? void 0,
                    conversationId: "chatgpt" === nM ? s.slice(8) : void 0,
                    host: "chatgpt" === nM ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rk = (0, c.useEffectEvent)((e, t) => {
                let n = na().get(eE.s, ex)?.sandboxError;
                if ((0, tq.f)(n)) return;
                let a = (0, eN.a)(t),
                    r = rF();
                (h.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nM,
                        retryCount: tB.sandboxGeneration,
                        stage: e,
                        connectorId: r.safe.connectorId,
                        mcpAppId: r.safe.mcpAppId,
                        sandboxId: r.safe.sandboxId,
                        initId: r.safe.initId
                    },
                    sensitive: {
                        error: a,
                        hostId: r.sensitive.hostId,
                        server: r.sensitive.server
                    }
                }), nJ.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tB.sandboxGeneration) ? (0, eE.E)(na(), ex, {
                    sandboxGeneration: 1
                }) : (0, eE.E)(na(), ex, {
                    isWidgetReady: !1,
                    sandboxError: a
                })
            }), rU = (0, c.useEffectEvent)(e => {
                let t = t7.safeParse(e);
                t.success && tK.get(eE.s, ex)?.displayMode === "inline" && (0, eE.E)(tK, ex, {
                    intrinsicHeight: t.data
                })
            }), rH = (0, c.useEffectEvent)(e => {
                let t = t7.safeParse(e);
                nd && t.success && (0, eE.E)(tK, ex, {
                    intrinsicWidth: t.data
                })
            }), rW = (0, c.useEffectEvent)(e => {
                if (!am) return;
                let t = t4.safeParse(e);
                t.success && ah({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rV = (0, c.useEffectEvent)(() => K ? void(0, eE.b)(tK, ex) : e5?.onRequestClose?.()), rY = (0, c.useEffectEvent)(async (e, t) => {
                if (e5?.openExternal != null && await e5.openExternal(e, t)) return;
                let n = ez.c.safeParse(e);
                if (n.success) {
                    if ("popup" === n.data.openMode && "https:" === new URL(n.data.href).protocol && !0 === e$.isVerifiedFirstParty) return void(0, eq.a)(tK, n.data.href);
                    if ("popup" !== n.data.openMode && e5?.onOpenLink?.(n.data.href) || "popup" !== n.data.openMode && u?.onOpenLink != null && await u.onOpenLink(a ?? tK, n.data.href, t)) return;
                    let e = (0, S.Qj)(n.data.href);
                    if (null != e) return void nO(e);
                    (0, ec.f)({
                        href: n.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e5?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rj = (0, c.useEffectEvent)(async (e, t) => {
                if (!rr || null == ts) throw Error("Plaid Link is unavailable for this app");
                let n = ns.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ep.a)();
                return a(tK, {
                    accountId: ts,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rq = (0, c.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: o,
                    accountId: i,
                    frameAccountId: s
                } = t, l = em(e) ? e.get(eE.s, n) : null, c = null == l ? void 0 : e.get(eE.i).get(l.sourceMcpAppId), u = l?.resourceSnapshot.access.context.hostId !== "local" && l?.resourceSnapshot.access.context.hostId !== S._b || null == c || c.content.conversationId.startsWith("chatgpt:") ? void 0 : l.resourceSnapshot.access.accountId, d = i ?? u;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!o.aborted && (s ?? u) === d && e.get(e_.f) === d && await a(r, o) && !o.aborted && e.get(e_.f) === d) {
                    let t = e.get(eE.s, n);
                    if (null == t) return;
                    (0, eE.E)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(tK, {
                mcpAppId: ex,
                requestModal: rt()?.requestModal,
                payload: e,
                signal: t,
                accountId: ts,
                frameAccountId: n
            })), rz = (0, c.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: r,
                    showNavigationControls: o
                } = e;
                if (r?.displayMode === "modal") return !1 !== r.showModalCloseButton || o ? tm : th;
                let i = "inline" === n && o ? tm : th;
                return ("inline" !== n || a) && 0 !== t ? {
                    insets: {
                        ...i.insets,
                        bottom: t
                    }
                } : i
            })({
                composerOverlayReservePx: nW,
                displayMode: f ? "inline" : e,
                hasComposerOverlay: nK,
                hostAdapter: aU(),
                showNavigationControls: ag
            })), rB = (0, c.useEffectEvent)(() => {
                let e = tK.get(eE.s, ex) ?? tB;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? L
                }
            }), rK = (0, c.useEffectEvent)(e => {
                let t = (0, eE.f)(tK, ex, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rB(),
                    safeAreaInsets: rz(t).insets
                }
            }), r$ = (0, c.useEffectEvent)(e => {
                let t = t6.safeParse(e),
                    n = tK.get(eE.s, ex);
                if (t.success && (0, eE.a)(n, t.data.mode)) {
                    let n = !f && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nz && n4?.style.setProperty("display", "none"), aJ && (0, eE.E)(tK, ex, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, eE.C)(tK, ex, a, "app_request"), null != ai && null != as) {
                        let e = {
                            displayMode: a,
                            isTombstone: aU()?.isTombstone === !0,
                            viewParams: rl,
                            widgetId: as
                        };
                        nQ.current = e, (0, eV.h)(ai.setWidgetView(e));
                        let t = null == n4 ? null : tg({
                            ...rB(),
                            containerDimensions: tI(n4, f, a),
                            locale: t3.locale,
                            deepLink: tc,
                            safeAreaInsets: rz(a).insets,
                            styleVariables: nV,
                            theme: tT(),
                            userAgent: tv(aU()?.device),
                            toolInfo: aU()?.toolInfo
                        });
                        nX.current = t, null != t && (0, eV.h)(ai.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: a
                    }
                }
                return h.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: ex,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (n ?? tB).displayMode
                }
            }), rQ = (0, c.useEffectEvent)(() => tc), rX = (0, c.useEffectEvent)(() => tK.get(eE.g, ex)), rZ = (0, c.useEffectEvent)(() => {
                var e;
                e = ty ?? void 0, null != a && (0, eo.h)(a, ex, e)
            });
            (0, c.useEffect)(() => {
                rZ()
            }, [ex, ty?.alt, ty?.knownAppId, ty?.logoDarkUrl, ty?.logoUrl]);
            let rJ = (0, c.useEffectEvent)(async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (tK.get(eE.s, ex)?.sourceMcpAppId !== eO) return;
                    let n = (null != ti || null == tM ? t1.nullable() : t1).safeParse(e);
                    return n.success ? (null == ti && null == tM && (0, eE.E)(tK, ex, {
                        pendingEditSource: eO
                    }), tK.set(eE.x, ex, n.data), ti?.save(n.data, t)) : void tK.set(eE.x, ex, null)
                }),
                r0 = e => {
                    null != ai && (0, eV.h)(ai.navigate({
                        delta: e
                    }))
                },
                r1 = {
                    name: null != e5 ? e$.originResourceUri ?? e$.originTool : `${tf}.${e$.originTool}`,
                    attribution: "connectorId" in Q.serverIdentity ? Q.serverIdentity.connectorId : void 0
                },
                r2 = (0, c.useEffectEvent)(function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = (0, el.getMcpAppSubmit)(a, () => {
                            Q.assertActive(), aU()?.assertActive?.()
                        });
                    return null == n ? null : (a, r) => n(a, t ? r1 : {
                        ...r1,
                        visuallyHidden: !0
                    }, e, r)
                }),
                r3 = async function(e, t, n, a, r, o) {
                    let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tx.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: o,
                        modelContextAttachments: i,
                        requestConfirmation: e => ab({
                            imageUrls: e.imageAttachments.map(e => {
                                let {
                                    src: t
                                } = e;
                                return t
                            }),
                            prompt: e.prompt,
                            title: r
                        })
                    })
                }, r5 = (0, c.useEffectEvent)(async (e, t) => {
                    var n;
                    if (null == a) throw (0, eV.c)("App messages are disabled for this view", I.r.MethodNotFound);
                    let r = (n = aq(), t.aborted || n && eC.safeParse(e).success ? Promise.resolve() : n?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    t.throwIfAborted();
                    let {
                        context: o,
                        isVisible: i,
                        prompt: s,
                        title: l
                    } = (0, eH.c)(e), c = r2(t, i);
                    if (null == c) throw (0, eV.c)("MCP app messages require an available composer", I.r.MethodNotFound);
                    let d = a.get(er.v).filter(e => "context" === e.kind),
                        p = crypto.randomUUID(),
                        _ = "chatgpt" === a.value.kind ? u?.onFollowUp : void 0,
                        E = performance.now();
                    try {
                        await r3({
                            source: "mcp_app",
                            sourceId: ex,
                            widgetSource: e$.widgetSource,
                            text: s,
                            structuredContent: o ?? (0, eH.b)(rX())
                        }, s, c, t, l, void 0, d)
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
                    }, o), (0, eo.b)(a, d)
                }), r6 = e => {
                    e.throwIfAborted(), Q.assertActive(), e5?.assertActive?.()
                }, r4 = async (e, t, n, a) => {
                    r6(t);
                    let r = null != e5 ? await e5.handleRequest(e, t, e$, n) : await a();
                    return r6(t), r
                }, r8 = async (e, t, n) => {
                    let a = await r4({
                        method: "tools/call",
                        params: e
                    }, t, n, () => (async function(e) {
                        let {
                            appScope: t,
                            scope: n,
                            chatGptMessageId: a,
                            conversationId: r,
                            getTrustedToolScope: o,
                            hostId: i,
                            mcpAppId: s,
                            mcpServerStatuses: l,
                            access: c,
                            server: u,
                            signal: d,
                            toolCallParams: p
                        } = e, _ = await async function(e) {
                            let {
                                scope: t,
                                getTrustedToolScope: n,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: o,
                                threadId: i,
                                toolArguments: s,
                                toolName: l
                            } = e, c = await eQ({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: o,
                                threadId: i
                            }), u = eX(c), d = n(c);
                            return {
                                ...(0, eV.a)(() => (0, eB.h)({
                                    server: o,
                                    toolArguments: s,
                                    toolScope: d,
                                    toolName: l,
                                    tools: u
                                })),
                                serverStatus: c
                            }
                        }({
                            scope: n,
                            getTrustedToolScope: o,
                            hostId: i,
                            mcpServerStatuses: l,
                            server: u,
                            threadId: n.get(J.b, {
                                hostId: i,
                                conversationId: r
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        d.throwIfAborted(), c.assertActive();
                        let E = function(e, t) {
                                if (!(0, k.f)(e) || !t$(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            f = null == _.codexAppsResourceUri ? E : {
                                ...t$(E) ? E : {},
                                _codex_apps: {
                                    resource_uri: _.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, tQ.a)({
                                scope: t,
                                chatGptConversation: r.startsWith("chatgpt:") ? {
                                    id: r.slice(8),
                                    messageId: a ?? null
                                } : void 0,
                                toolIdentity: _.codexAppsToolIdentity,
                                access: c,
                                signal: d,
                                toolArguments: p.arguments ?? {}
                            });
                            if (null != e) return await e;
                            if (r.startsWith("chatgpt:")) return (0, e4.i)({
                                isCodexAppsServer: (0, k.f)(u),
                                toolResult: await (0, tX.c)(t, i, u, _.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: f,
                                    requestOptions: {
                                        widget: {
                                            conversationId: r,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let o = await (0, eK.b)(n, i).callMcpTool({
                                threadId: r,
                                server: u,
                                tool: _.name,
                                arguments: p.arguments ?? {},
                                _meta: f
                            }, {
                                widget: {
                                    conversationId: r,
                                    mcpAppId: s
                                }
                            });
                            return (0, e4.i)({
                                isCodexAppsServer: (0, k.f)(u),
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
                        hostId: z,
                        mcpAppId: ex,
                        mcpServerStatuses: e2,
                        access: Q,
                        server: tf,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, D.s)(a)?.isError === !0) {
                        let t = e4.g.safeParse(a).data;
                        h.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: ex,
                                initId: (0, G.h)(n7?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: e.name,
                                error: t?.content.find(e => "text" === e.type)?.text ?? M.F({
                                    error: M.L()
                                }).safeParse(t?.structuredContent).data?.error
                            }
                        })
                    }
                    return a
                }, r7 = (0, c.useEffectEvent)(async (e, t, n) => {
                    let r = a?.get(e9.b);
                    return r8((0, eV.g)(tZ, {
                        arguments: t,
                        name: e
                    }, "Invalid MCP tool call params"), n, r)
                }), r9 = (0, c.useEffectEvent)(async (e, t) => {
                    let n = a?.get(e9.b),
                        r = I.W.safeParse(e);
                    if (!r.success) throw (0, eV.e)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? I.r.InvalidParams : I.r.InvalidRequest);
                    let o = tK.get(J.b, {
                            hostId: z,
                            conversationId: s
                        }) ?? void 0,
                        {
                            method: i,
                            params: l
                        } = r.data;
                    if (s.startsWith("chatgpt:") && nt.some(e => e === i)) throw (0, eV.c)("Resource subscriptions require a local Codex thread", I.r.MethodNotFound);
                    switch (i) {
                        case y.a: {
                            let {
                                path: e
                            } = (0, eV.g)(y.b, l, "Invalid MCP file open params");
                            if (!aL) throw (0, eV.c)("File opening is unavailable", I.r.MethodNotFound);
                            if (null != aw) return (0, W.a)(tK, v.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "file_open",
                                action: "requested"
                            }), await aw(e, t), {};
                            if (!(0, S.Nh)(e) || !(0, S.Qh)(e)) throw (0, eV.c)("Cannot open this file path", I.r.InvalidParams);
                            return (0, W.a)(tK, v.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "file_open",
                                action: "requested"
                            }), (0, eu.openWorkspaceFile)({
                                scope: tK,
                                path: e,
                                cwd: null,
                                hostConfig: (0, ey.a)(t0, z),
                                hostId: z,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ay?.includes("ping") ? r4(r.data, t, n, async () => ({})) : {};
                        case es.a:
                            if (!aP) throw (0, eV.c)("The plugin composer is unavailable", I.r.MethodNotFound);
                            if (navigator.userActivation?.isActive !== !0 || null == n7 || document.activeElement !== n7) throw (0, eV.c)("Starting a plugin draft requires a user gesture", I.r.InvalidRequest);
                            return t.throwIfAborted(), aU()?.assertActive?.(), (0, es.d)(a, _, nv), {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tD.safeParse(e);
                                if (!t.success) throw (0, eV.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: n
                                } = t.data;
                                if (tG(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw (0, eV.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(l);
                            t.throwIfAborted();
                            let n = e.options?.target ?? "active";
                            if ((0, W.a)(tK, v.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: n,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == a) throw (0, eV.c)("MCP app messages are disabled for this view", I.r.MethodNotFound);
                            if (e.options?.send === !1) {
                                let t = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, tP.e)(t) && null == (0, tP.b)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tL(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eJ,
                                    icon: ty,
                                    server: tf,
                                    widgetSource: e$.widgetSource
                                });
                                if (aU()?.assertActive?.(), "new" === e.options.target) {
                                    if (aR) throw (0, eV.c)("New drafts are unavailable in this view", I.r.MethodNotFound);
                                    (0, es.b)(t0, t)
                                } else {
                                    if (null == a) throw (0, eV.c)("The composer is unavailable", I.r.MethodNotFound);
                                    (0, es.e)(a, t, "append")
                                }
                                return {}
                            }
                            let {
                                prompt: r,
                                message: o,
                                attachment: i
                            } = function(e, t, n) {
                                let a = [],
                                    r = [];
                                for (let t of e) "text" === t.type && null == (0, tP.b)(t) ? a.push(t.text) : r.push(t);
                                let o = tL(r, t),
                                    i = a.join("\n\n");
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
                                icon: ty,
                                server: tf,
                                sessionId: ex,
                                widgetSource: e$.widgetSource
                            }, t3), s = !1;
                            e.options?.target === "new" && null != rg && eG.a?.mcpAppSandbox != null && (r6(t), s = await eG.a.mcpAppSandbox.consumeUserGesture((0, ez.a)(rg, n7)).catch(() => !1) === !0, r6(t));
                            let c = e.options?.target === "new" ? (0, tx.a)({
                                scope: t0,
                                recipient: a,
                                getNewThreadDestination: tr,
                                globalEntrypointIdentity: "global" === nP.source ? {
                                    connectorId: nP.connectorId,
                                    pluginId: nP.pluginId
                                } : void 0,
                                canCreateCodexThreads: aD,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (aR) throw (0, eV.c)("New threads are unavailable in this view", I.r.MethodNotFound);
                                    r6(t)
                                },
                                sourceName: eJ,
                                toolOrigin: r1,
                                signal: t
                            }) : r2(t);
                            if (null == c) throw (0, eV.c)("MCP app messages require an available composer", I.r.MethodNotFound);
                            let u = a?.get(er.v).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === ex
                            }) ?? [];
                            return await r3(o, r, c, t, void 0, i, u), null != a && (0, eo.b)(a, u), {}
                        }
                        case "ui/download-file":
                            return async function(e, t, n, a) {
                                try {
                                    let r;
                                    n.throwIfAborted(), a();
                                    let o = function(e) {
                                        let t, {
                                                contents: n
                                            } = e,
                                            a = n[0];
                                        if (1 !== n.length || a?.type !== "resource") return;
                                        let {
                                            resource: r
                                        } = a, o = decodeURIComponent((0, eD.j)(new URL(r.uri).pathname)).trim();
                                        if (0 === o.length || o.length > 255 || "." === o || ".." === o || /[/\\:*?"<>|\p{Cc}]/u.test(o)) return;
                                        if ("blob" in r) {
                                            if (r.blob.length > 4 * Math.ceil(8388608 / 3)) return;
                                            t = (0, eP.a)(r.blob)
                                        } else {
                                            if (r.text.length > 8388608) return;
                                            t = r.text
                                        }
                                        let i = new Blob([t], {
                                            type: r.mimeType ?? "application/octet-stream"
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
                                            r = t, n.addEventListener("abort", r, {
                                                once: !0
                                            }), (0, eR.f)(e, ew.ExternalLinkConfirmationDialog, {
                                                href: "",
                                                downloadFilename: o.name,
                                                initiator: "mcp_app_resource",
                                                signal: n,
                                                onDownload: () => {
                                                    if (!s && !n.aborted) try {
                                                        a(), (0, eS.a)(o.blob, o.name), i = !0
                                                    } catch {
                                                        return
                                                    }
                                                }
                                            }, {
                                                onDispose: t
                                            })
                                        })
                                    } finally {
                                        s = !0, null != r && n.removeEventListener("abort", r)
                                    }
                                    return {
                                        isError: !i
                                    }
                                } catch {
                                    return {
                                        isError: !0
                                    }
                                }
                            }(tK, (0, eV.g)(g.b.shape.params, l, "Invalid MCP file download params"), t, () => r6(t));
                        case "ui/update-model-context": {
                            if (null == a) throw (0, eV.c)("MCP model context requires an available composer", I.r.MethodNotFound);
                            let e = (0, eV.g)(t2, l, "Invalid MCP model context params");
                            if (null != r2() && tG(e.content), nF && e.content?.some(e => "image" === e.type && !(0, S.Qi)({
                                    type: e.mimeType
                                }))) throw (0, eV.c)("Invalid MCP model context params", I.r.InvalidParams);
                            let t = null != ti || nF && null == tM;
                            if (t && tK.get(eE.s, ex)?.sourceMcpAppId !== eO) throw (0, eV.c)("The widget source is no longer active", -32e3);
                            aU()?.onModelContextUpdate?.(e, ex), (0, en.a)(a);
                            let n = (e => {
                                var t;
                                if (null == a) return null;
                                let n = e.content ?? [],
                                    r = n.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return t = {
                                    kind: "context",
                                    widgetSource: e$.widgetSource,
                                    untrusted: !0,
                                    content: n,
                                    server: tf,
                                    composerIcon: ty ?? void 0,
                                    sourceName: eJ,
                                    id: ex,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != a && ((0, eo.g)(a, t), (0, eZ.f)(tK, ex, a.get(er.v).find(e => e.id === ex) ?? null)), r
                            })(e);
                            if ((0, W.a)(tK, v.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "model_context",
                                    action: "updated"
                                }), t) {
                                let t = await rJ(e, !0);
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
                            return r8((0, eV.g)(tZ, l, "Invalid MCP tool call params"), t, n);
                        case "resources/read": {
                            let e = (0, eV.g)(nr, l, "Invalid MCP resource read params");
                            if (r6(t), (0, W.a)(tK, v.CodexMcpExtensionAction, {
                                    ...nP,
                                    feature: "resource",
                                    action: "read"
                                }), e5?.readHostResource != null) {
                                r6(t);
                                let n = await e5.readHostResource(e, t);
                                if (r6(t), null != n) return n
                            }
                            return (0, eV.a)(() => {
                                (0, eB.a)({
                                    mcpAppScope: e$,
                                    server: tf,
                                    uri: e.uri
                                })
                            }), await r4({
                                method: i,
                                params: e
                            }, t, n, async () => {
                                try {
                                    return await (0, e3.d)({
                                        scope: tK,
                                        appContext: e$.appContext,
                                        connectorId: (0, k.f)(tf) ? nv : null,
                                        hostId: z,
                                        mcpAppId: ex,
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
                            let e = (0, eV.g)(nr, l, "Invalid MCP resource subscribe params");
                            return r6(t), (0, W.a)(tK, v.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "resource",
                                action: "subscribe"
                            }), await au.subscribe(e.uri, t)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eV.g)(nr, l, "Invalid MCP resource unsubscribe params");
                            return r6(t), (0, W.a)(tK, v.CodexMcpExtensionAction, {
                                ...nP,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await au.unsubscribe(e.uri, t)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eV.g)(no, l, "Invalid MCP event subscribe params"),
                                t = tK.get(eE.h, eO)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = n3(await eQ({
                                    scope: tK,
                                    hostId: z,
                                    mcpServerStatuses: e2,
                                    server: tf,
                                    threadId: o
                                }))), null == n) throw (0, eV.c)("MCP event subscriptions require a trusted connector scope", I.r.InternalError);
                            return ad.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eV.g)(ni, l, "Invalid MCP event unsubscribe params");
                            return ad.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return r4(r.data, t, n, async () => {
                                let e = await eQ({
                                        scope: tK,
                                        hostId: z,
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
                            return r4(r.data, t, n, async () => (0, k.f)(tf) ? {
                                resources: []
                            } : {
                                resources: (await eQ({
                                    scope: tK,
                                    hostId: z,
                                    server: tf,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return r4(r.data, t, n, async () => (0, k.f)(tf) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eQ({
                                    scope: tK,
                                    hostId: z,
                                    server: tf,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return r4(r.data, t, n, async () => ({
                                prompts: []
                            }));
                        default:
                            return r4(r.data, t, n, () => {
                                throw (0, eV.c)(`Unsupported MCP proxy method: ${i}`, I.r.MethodNotFound)
                            })
                    }
                }), oe = (0, c.useEffectEvent)(async (e, a) => {
                    let {
                        requestMcpAppModal: r
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(963552)]).then(n.bind(n, "SEK8"));
                    r6(a), r(na(), {
                        Frame: t,
                        sourceMcpAppId: eO,
                        signal: a,
                        handleRequest: async (e, t) => I.Z.parse(await r9(e, t ?? a))
                    }, e)
                });
            (0, c.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", n8(e), () => {
                    e.remove(), n8(t => t === e ? null : t), at(!1)
                }
            }, [ex]), (0, c.useLayoutEffect)(() => {
                null != n4 && (void 0 === nf ? n4.removeAttribute("data-mcp-app-origin-generated") : n4.setAttribute("data-mcp-app-origin-generated", nf))
            }, [n4, nf]), (0, c.useLayoutEffect)(() => {
                null != n4 && null != n7 && function(e) {
                    let {
                        frameElement: t,
                        sandboxElement: n,
                        fullSurface: a,
                        liftModal: r,
                        inheritHostBackground: o,
                        isCardInlineSurface: i,
                        isFullScreen: s,
                        isWidgetVisible: l,
                        prefersBorder: c,
                        surfaceBackgroundColor: u,
                        title: d,
                        globalSurface: p
                    } = e, _ = !s && !a && !i;
                    t.className = (0, tC.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", r && "z-50", !s && !a && !i && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tC.b)("h-full min-h-0 min-w-0 w-full overflow-hidden open:rounded-none!", !l && "pointer-events-none opacity-0", _ && "rounded-lg", i && c && "borderedCardSandbox-xKKhHG", s && "min-h-0 flex-1"), n.style.backgroundColor = !r && (o || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: n4,
                    sandboxElement: n7,
                    fullSurface: f,
                    liftModal: rw,
                    inheritHostBackground: ef,
                    isCardInlineSurface: ry,
                    isFullScreen: nz,
                    isWidgetVisible: nj && null != nq,
                    prefersBorder: nh,
                    surfaceBackgroundColor: nY,
                    title: tw,
                    globalSurface: tS
                })
            }, [f, rw, n4, ef, ry, nz, nj, nq, nh, n7, nY, tw, tS]), (0, c.useLayoutEffect)(() => {
                if (null == n4) return;
                if (null != rv) {
                    let e = rv.dataset.overlayOwner;
                    null == e ? n4.removeAttribute("data-overlay-owner") : n4.setAttribute("data-overlay-owner", e)
                }
                let e = nz ? rT : rv,
                    t = rD ? (0, ea.a)() : rG;
                if (rw && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === n4.style.display;
                    n4.style.display = "none", e || h.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rF().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (n4.parentElement !== t && (n4.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(n4, null) : t.appendChild(n4), h.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rF().safe.mcpAppId,
                                showInModal: rw
                            }
                        })), ae || at(!0), null == e) {
                        let e = "none" === n4.style.display;
                        n4.style.display = "none", e || h.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rF().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete n4.dataset.mcpAppParked,
                        function(e) {
                            let t, n = !e.isInGlobalHost || e.modalOpen || e.isFullScreen ? null : e.anchorElement.closest("[data-app-shell-right-panel-full-width]");
                            if (null == n) return tR(e);
                            let a = () => {
                                    "true" === n.getAttribute("data-app-shell-right-panel-full-width") ? (t?.(), t = void 0, e.frameElement.style.display = "none") : null == t && (t = tR(e))
                                },
                                r = new MutationObserver(a);
                            return r.observe(n, {
                                attributes: !0,
                                attributeFilter: ["data-app-shell-right-panel-full-width"]
                            }), a(), () => {
                                r.disconnect(), t?.()
                            }
                        }({
                            sessionId: ex,
                            sharesScrollHost: rP?.contains(t) === !0,
                            frameElement: n4,
                            frameContainer: t,
                            fullSurface: f,
                            modalOpen: rw,
                            sandboxElement: n7,
                            isFullScreen: nz,
                            isInGlobalHost: rD,
                            anchorElement: e,
                            rightPanelLayoutTick: tu
                        })
                };
                return f || nz || rw || rD || !K || null == e || e.hidden || "true" !== n4.dataset.mcpAppParked ? n() : (0, tp.a)(e, n)
            }, [ex, n4, f, rw, K, rP, rv, nz, rD, ae, tu, n7, rT, rG]);
            let ot = e5?.autoFocus === !0;
            (0, c.useEffect)(() => {
                ot && nj && null != rv && n7?.focus()
            }, [ot, nj, rv, n7]), (0, c.useLayoutEffect)(() => (n$.current = !1, () => {
                n$.current = !0
            }), [ex, tK]);
            let on = (0, c.useEffectEvent)(async () => {
                    try {
                        if (e5?.assertActive?.(), !aZ) return;
                        let e = tB.openInAppUrl ?? M.L().nullable().parse(await ai?.getCurrentPath?.(void 0));
                        if (e5?.assertActive?.(), null == e) return;
                        let t = e5?.openInApp?.validateUrl(null == tB.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, ec.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                oa = (0, c.useEffectEvent)(e => {
                    let t = tK.get(et.l.tabs$).some(e => e.tabId === (0, te.b)(ex));
                    (0, te.c)(tK, {
                        source: {
                            hostId: z,
                            server: tf,
                            connectorId: nv ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: ty,
                        toolIcon: tA,
                        mcpAppId: ex,
                        onExitFullScreen: e,
                        onPanelElementChange: aa,
                        title: tB.displayModeTitle ?? tN,
                        openInAppName: e5?.openInApp?.appName,
                        onOpenInApp: aZ ? () => {
                            on()
                        } : void 0
                    })
                }),
                or = (0, c.useEffectEvent)(() => {
                    let e = tK.get(eE.s, ex);
                    !n$.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eE.c)(tK, ex)
                }),
                oo = (0, c.useEffectEvent)(e => {
                    let t = aU()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nP);
                    else {
                        let t = M.F({
                            type: M.z("interaction"),
                            label: M.L()
                        }).safeParse(e);
                        t.success && (0, W.a)(tK, T.l, {
                            ...nP,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, c.useLayoutEffect)(() => {
                nz ? oa(or) : (0, te.a)(tK, ex)
            }, [nz, ex, tK, ty?.alt, ty?.knownAppId, ty?.logoDarkUrl, ty?.logoUrl, tA?.logoUrl, tA?.logoDarkUrl, tN, tB.displayModeTitle, aZ, e5?.openInApp?.appName]), (0, c.useLayoutEffect)(() => {
                if (null != ap) return a_.watch(e => {
                    let {
                        get: t
                    } = e, n = t(tt.e, ap);
                    null != n && (0, tt.b)(n).updateTab(a_, ap, {
                        documentLabel$: aE
                    })
                })
            }, [aE, ap, a_]);
            let oi = (0, c.useEffectEvent)(() => {
                    let e = nz ? rT : rv;
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
                os = null != n4 && ae && null != rL && null != rg && null != rm,
                ol = (0, c.useEffectEvent)(e => {
                    let t;
                    if (!os) return;
                    let n = e8.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: ex,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    nJ.current = n, n.mark("surface_mcp_app"), (0, eE.E)(na(), ex, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), ah(t9), n1.current = null, n2.current = null;
                    let a = rI();
                    if (null == a) return void rk("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: o,
                        iframeAllow: i
                    } = (0, td.b)(nI, nD, nL), s = (0, ej.a)(rC, rg, rm);
                    s instanceof HTMLIFrameElement ? (s.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), s.allow = i, s.allowFullscreen = !0) : (s.addEventListener("enter-html-full-screen", () => {
                        s.isConnected && !s.matches(":fullscreen") && (s.popover = "manual", s.showPopover())
                    }), s.addEventListener("leave-html-full-screen", () => {
                        s.popover = null
                    })), s.classList.add("pointer-events-none", "opacity-0"), n4.appendChild(s), n9(s), n.mark("rendered");
                    let l = new AbortController,
                        c = !1,
                        d = new eF,
                        _ = null == u ? null : new ev(u, {
                            getPanelContext: rA,
                            renderControl(e, t) {
                                l.signal.aborted || n6(n => null != t ? {
                                    owner: e,
                                    control: t
                                } : n?.owner === e ? null : n)
                            }
                        }),
                        E = null,
                        f = crypto.randomUUID(),
                        m = rX(),
                        T = rc(),
                        {
                            sourceMcpAppId: v,
                            toolInput: R,
                            toolOutput: P,
                            toolResponseMetadata: D,
                            toolResult: L,
                            toolStatus: x,
                            toolResultNotification: O,
                            toolCallCancellationReason: F
                        } = rE(),
                        k = new tJ.b(na(), v, e => {
                            rY({
                                href: e
                            }, l.signal).catch(e => {
                                l.signal.aborted || (0, eN.d)(e, rF())
                            })
                        });
                    n1.current = null == L || null == P ? null : {
                        widgetId: f,
                        widgetState: m,
                        sourceMcpAppId: v,
                        toolInput: R,
                        toolOutput: P,
                        toolResponseMetadata: D,
                        toolStatus: x,
                        toolResult: O,
                        toolCallCancellationReason: F
                    };
                    let U = aF ? {
                            requestConnectPlugin: async e => aU()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tj.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aU()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aU()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aU()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        H = null == L ? null : U ?? rf(L),
                        V = null == H ? null : {
                            ...H,
                            requestDeclinePluginSuggestions: U?.requestDeclinePluginSuggestions ?? (null == H.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = rE().toolResult,
                                    t = null == e ? void 0 : rf(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await eG.a?.mcpAppSandbox?.consumeUserGesture((0, ez.a)(rg, s)).catch(() => !1) || l.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        Y = () => {
                            let e = aU()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        j = {
                            ...V,
                            downloadBlob: a3 ? e => aU()?.downloadBlob?.(e, l.signal) : void 0,
                            triggerHaptic: a5 ? e => aU()?.triggerHaptic?.(e, l.signal) : void 0,
                            requestCheckout: aB ? async e => {
                                l.signal.throwIfAborted();
                                let t = aU();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, l.signal)
                            } : void 0,
                            requestModal: async e => {
                                l.signal.aborted || (aV ? await aq()?.requestModal(e) : null != rt() && (aU()?.requestModal == null || M.F({
                                    params: M.F({
                                        view: M.z("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rq(e, l.signal, ts) : aU()?.requestModal != null ? await aU()?.requestModal?.(e, l.signal) : await oe(e, l.signal))
                            },
                            uploadFile: a6 ? (e, t) => Y().uploadFile(e, t, l.signal) : void 0,
                            getFileDownloadUrl: a6 ? e => Y().getFileDownloadUrl(e, l.signal) : void 0,
                            getFileMetadata: a6 ? e => Y().getFileMetadata(e, l.signal) : void 0,
                            selectFiles: a6 ? () => Y().selectFiles(l.signal) : void 0,
                            share: a4 ? async e => {
                                l.signal.throwIfAborted(), await aU()?.share?.(e, l.signal)
                            } : void 0,
                            requestLinkToConnector: aV || a9 ? async e => l.signal.aborted ? {
                                didConnect: !1
                            } : await (aq()?.requestLinkToConnector ?? aU()?.requestLinkToConnector)?.(e, l.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: aj ? e => {
                                l.signal.aborted || (aq()?.showToast ?? aU()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: ak || aV && aH || aJ ? () => {
                                l.signal.aborted || aU()?.allowsInteractiveDismissal === !1 || (ak || aV || aU()?.displayMode != null ? rV() : r$({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: (e, t) => {
                                let n = AbortSignal.any([t, l.signal]),
                                    a = E?.notifyMcpAppsMcpNotification;
                                if (aA && null != a) {
                                    let t = k.handleRequest(e, l.signal, e => (0, eV.h)(a(e)));
                                    if (null != t) return t
                                }
                                let r = d.handleRequest(e, {
                                    sandboxElement: s,
                                    sandboxId: rg,
                                    initId: z,
                                    signal: l.signal,
                                    notify: E?.notifyMcpAppsMcpNotification
                                });
                                if (null != r) return r;
                                let o = A.h.safeParse(e);
                                if (o.success && null != p) {
                                    for (let {
                                            component: e,
                                            level: t,
                                            message: n,
                                            metadata: a
                                        }
                                        of o.data.params.entries) h.a[t](n, {
                                        safe: {
                                            component: e,
                                            metadata: a,
                                            pluginId: p
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let i = A.g.safeParse(e);
                                return i.success && null != _ ? _.handleRequest(i.data.params) : r9(e, n).catch(t => {
                                    if (!n.aborted) {
                                        let n = rF();
                                        h.a.warning("App request failed", {
                                            safe: {
                                                ...(0, eN.b)(t),
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
                            callTool: (e, t) => r7(e, t, l.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!l.signal.aborted) {
                                    if (eN.h.safeParse(e).success) return void(0, eN.d)(e, rF());
                                    rk("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rU,
                            notifyIntrinsicWidth: rH,
                            notifyTabMetadata: e => {
                                let t = nl.safeParse(e);
                                t.success && !l.signal.aborted && aE.set(t.data)
                            },
                            notifyNavigation: e => {
                                l.signal.aborted || rW(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                l.signal.aborted || aU()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rY(e, l.signal),
                            openPlaidLink: rr ? e => rj(e, l.signal) : void 0,
                            initializeMcpApp: e => {
                                if (l.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rK(g.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rk("configuration", e), e
                                }
                            },
                            requestClose: aH ? rV : void 0,
                            requestDisplayMode: r$,
                            openConversationOverlay: aK ? async e => {
                                l.signal.throwIfAborted(), await aU()?.openConversationOverlay?.(e, l.signal)
                            } : void 0,
                            notifyAutofillCandidates: aQ ? e => {
                                l.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: a$ ? e => {
                                l.signal.throwIfAborted();
                                let t = aU()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, s, l.signal)
                            } : void 0,
                            setOpenInAppUrl: aX ? e => {
                                l.signal.throwIfAborted();
                                let {
                                    href: t
                                } = M.F({
                                    href: M.L().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, eE.E)(na(), ex, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aU()?.openInApp?.validateUrl(t);
                                null != n && (0, eE.E)(na(), ex, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: a0 ? async e => {
                                l.signal.throwIfAborted(), await aU()?.presentation?.requestFocusedObject?.(e, l.signal)
                            } : void 0,
                            requestCloseFocusedObject: a1 ? async () => {
                                l.signal.throwIfAborted(), await aU()?.presentation?.requestCloseFocusedObject?.(l.signal)
                            } : void 0,
                            requestTargetedReply: aY ? async e => {
                                if (l.signal.aborted) return;
                                let t = aq()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aU()?.setTargetedReply;
                                if (null != n) return void n(e, l.signal);
                                let a = aU()?.requestTargetedReply;
                                null != a && await (0, eM.b)(e, a, ab, l.signal)
                            } : void 0,
                            requestReconnectConnector: a7 ? async () => {
                                let e = aU()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(l.signal)
                            } : void 0,
                            requestConnectSheet: a8 ? e => {
                                let t = aU()?.requestConnectSheet;
                                if (null != t) return t(e, l.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => r5(e, l.signal),
                            sendInstrument: e => {
                                if (!l.signal.aborted) {
                                    if (aM || null != V) {
                                        let t = (0, b.h)(e);
                                        if (null != t) return void(0, W.a)(na(), t.messageType, t.payload)
                                    }
                                    eN.f.safeParse(e).success && ((0, eN.d)(e, rF()), rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), V?.sendInstrument(e);
                                    let t = rt() ?? ra();
                                    t?.sendInstrument(e), (null == t && null == V || M.F({
                                        type: M.z("interaction")
                                    }).safeParse(e).success) && oo(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!l.signal.aborted) return rJ(t, M.F({
                                    waitForPersistence: M.z(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        q = (0, ez.b)({
                            hostApiHandlers: j,
                            assertActive: () => {
                                l.signal.throwIfAborted(), nc(), aU()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: a.sandboxOrigin,
                            sandboxId: rg,
                            signal: l.signal,
                            sourceUrl: a.sourceUrl,
                            webview: s
                        }),
                        z = (0, G.h)(s.getAttribute("src") ?? void 0),
                        B = rF();
                    h.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nM,
                            connectorId: B.safe.connectorId,
                            mcpAppId: B.safe.mcpAppId,
                            sandboxId: B.safe.sandboxId,
                            initId: z
                        },
                        sensitive: {
                            hostId: B.sensitive.hostId,
                            server: B.sensitive.server
                        }
                    });
                    let K = setTimeout(() => {
                        rk("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), X(), $()
                    }, 5e4);

                    function $() {
                        clearTimeout(K), e()
                    }

                    function X() {
                        l.signal.aborted || (clearTimeout(K), l.abort(), n6(null), aE.set(null), aI(), nJ.current === n && (nJ.current = null), n.isRecording() && n.abort("navigation_away"), d[Symbol.dispose](), k[Symbol.dispose](), _?.[Symbol.dispose](), n1.current = null, n2.current = null, nQ.current = null, nX.current = null, nZ.current = null, (0, eE.E)(na(), ex, {
                            isWidgetReady: !1
                        }), ao(null), ah(t9), null != E && (0, eV.h)(E.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), s.remove(), s instanceof HTMLIFrameElement || s.destroy?.(), h.a.info("Removed app sandbox", {
                            safe: {
                                initId: z
                            }
                        }), n9(e => e === s ? null : e))
                    }
                    return q.then(async e => {
                        if (l.signal.aborted) return;
                        if (eG.a?.mcpAppSandbox != null) {
                            if (null == z) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, tY.b)({
                                scope: t0,
                                request: {
                                    identity: Q.serverIdentity,
                                    pluginId: nm() ?? void 0,
                                    permissions: nI,
                                    initId: z,
                                    sandboxId: rg
                                },
                                origin: a.sandboxOrigin,
                                appName: ng(),
                                signal: l.signal,
                                onReload: nx
                            })
                        }
                        l.signal.throwIfAborted(), n.mark("sandbox_ready"), h.a.info("Connected app sandbox", {
                            safe: {
                                initId: z
                            }
                        }), E = e;
                        let i = e.notifyMcpAppsMcpNotification,
                            s = eG.a?.mcpAppSandbox != null && null != i;
                        null != i && _?.setNotificationSender(e => (0, eV.h)(i(e))), null != e.applyAutofillCandidate && (t = await aU()?.autofill?.(e.applyAutofillCandidate, l.signal), l.signal.throwIfAborted()), ao({
                            api: e,
                            widgetId: f
                        });
                        let {
                            displayMode: d,
                            availableDisplayModes: g
                        } = rB(), I = tT(), {
                            containerDimensions: v
                        } = rx(n4), b = tv(aU()?.device), G = na().get(eW.a), L = G["--color-background-primary"], x = rz(d), O = {
                            "openai/viewer-header": aA && null != i,
                            "openai/viewer-document-controls": aA && null != i,
                            ...tg({
                                availableDisplayModes: g,
                                containerDimensions: v,
                                displayMode: d,
                                locale: a.locale,
                                modelContextHostState: nU(),
                                deepLink: rQ(),
                                safeAreaInsets: x.insets,
                                styleVariables: G,
                                theme: I,
                                userAgent: b,
                                toolInfo: aU()?.toolInfo
                            }),
                            ...null == u || null == i ? {} : {
                                [A.a]: !0
                            },
                            ...null == p ? {} : {
                                [A.d]: !0
                            }
                        }, {
                            csp: F
                        } = a, M = {
                            [C.a]: {},
                            ...s ? {
                                "openai/find": {}
                            } : {},
                            ...aG ? {
                                [N.a]: {
                                    draft: nA() ? {} : void 0
                                }
                            } : {},
                            "openai/skillsDeepLinks": {},
                            ...a.experimentalCapabilities,
                            ...aP ? {
                                [es.a]: {}
                            } : {},
                            ...aL ? {
                                "openai/files": {}
                            } : {}
                        };
                        e.supportsWidgetTextureReceiver ? M[w.b] = {} : delete M[w.b];
                        let k = nb ? {} : void 0;
                        aG && (k = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == _ && rO(), h.a.info("Starting app widget", {
                            safe: {
                                displayMode: d,
                                initId: z
                            }
                        }), c = !0;
                        let U = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != aO,
                                expectedReadySignal: aO,
                                csp: F,
                                displayMode: az(d),
                                features: o,
                                subjectId: aU()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: ny,
                                html: a.html,
                                isFirstParty: aM || null != V || a7,
                                isSidebarOpen: aU()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aU()?.isTombstone === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                measureWidth: !0 === nd,
                                mcpApps: {
                                    requiresInitialization: r.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...s ? [eL] : [], ...aA && null != i ? [tJ.a] : [], ...aG || !nb ? ["ui/message"] : [], ...aC?.split(";") ?? [], ...aP ? [es.a] : [], ...aL ? [y.a] : [], ...null == _ || null == i ? [] : [A.c], ...null == p ? [] : [A.e], ...null == i ? [] : [...nt, ...ac && !ax ? nn : []]],
                                    hostCapabilities: {
                                        downloadFile: {},
                                        experimental: M,
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: k,
                                        updateModelContext: nb ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(S.hj.map(e => [e, o.includes(S.gj[e].feature) ? {} : void 0])),
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
                                        version: na().get(eA.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tS
                                },
                                safeArea: x,
                                theme: I,
                                toolInput: R,
                                toolOutput: P,
                                toolResponseMetadata: D,
                                userAgent: b,
                                viewParams: T,
                                widgetId: f,
                                widgetState: m
                            }),
                            H = !1;
                        for await (let t of U) {
                            let a = na().get(eE.s, ex)?.sandboxError;
                            if (l.signal.aborted || (0, tq.f)(a)) break;
                            if (eN.e.safeParse(t).success) return;
                            eN.f.safeParse(t).success && ((0, eN.d)(t, rF()), rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = eN.g.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new tq.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (H || !ez.d.safeParse(t).success) continue;
                            H = !0, $();
                            let {
                                displayMode: o,
                                availableDisplayModes: i
                            } = rB(), s = {
                                ...O,
                                displayMode: o,
                                availableDisplayModes: [...i]
                            };
                            (0, eE.E)(na(), ex, {
                                isWidgetReady: !0
                            }), (0, eV.h)(e.setWidgetView({
                                displayMode: az(o),
                                isTombstone: aU()?.isTombstone === !0,
                                viewParams: T,
                                widgetId: f
                            })), (0, eV.h)(e.setTheme({
                                theme: I
                            })), (0, eV.h)(e.setSafeArea({
                                safeArea: x
                            }));
                            let c = {
                                isSidebarOpen: aU()?.presentation?.isSidebarOpen === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                surfaceBackgroundColor: L
                            };
                            nZ.current = c, (0, eV.h)(e.setAdditionalGlobals({
                                additionalGlobals: c
                            })), (0, eV.h)(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), h.a.info("Started app widget", {
                                safe: {
                                    displayMode: o,
                                    initId: z
                                }
                            }), n.end()
                        }
                        if (!H && !l.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        l.signal.aborted || (c && rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rk(null == E ? "handshake" : "widget", e)), X()
                    }).finally(() => {
                        $()
                    }), X
                });
            (0, c.useLayoutEffect)(() => {
                if (os) return na().get(tb, void 0)(ol, e => rk("handshake", e), oi)
            }, [t0, os, nb, ny, nL, nT, nG, a3, a5, aI, aL, aG, aP, rr, aH, L, null, z, nM, n4, f, R, u, p, ax, nd, aF, aB, a4, a6, a8, a7, a9, ak, aj, aV, aY, aJ, aX, aK, a$, aQ, a0, a1, aM, aA, aC, aO, r.requiresMcpInitialization, ts, ae, ex, rh, ab, rg, rL, rm, rC, tf, ac, aN, tS]), (0, c.useLayoutEffect)(() => {
                au.setConversation(s).catch(e => {
                    h.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: s,
                            mcpAppId: ex
                        },
                        sensitive: {
                            error: e,
                            hostId: z
                        }
                    })
                })
            }, [s, z, au, ex]), (0, c.useLayoutEffect)(() => {
                ad.setConversation(s, ac && nw).catch(e => {
                    h.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [s, ad, nw, ac]), (0, c.useLayoutEffect)(() => {
                let e = ai?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = ad.connectNotificationSink(e);
                return () => {
                    t(), ad.clear().catch(e => {
                        h.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [ad, ai]), (0, c.useLayoutEffect)(() => {
                let e = ai?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = au.connectNotificationSink(t => (0, eV.h)(e(t)));
                return () => {
                    t(), au.clear().catch(e => {
                        h.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [au, ai]), (0, c.useEffect)(() => {
                if (!nj || null == ai || null == as) return;
                let e = {
                        widgetId: as,
                        sourceMcpAppId: eO,
                        toolInput: ro,
                        toolOutput: rs,
                        toolResponseMetadata: r_,
                        toolStatus: rp,
                        toolCallCancellationReason: tH,
                        toolResult: rd
                    },
                    t = {
                        ...e,
                        widgetState: n0
                    };
                P()(n1.current, t) || (n1.current = t, (0, eV.h)(ai.setWidgetData({
                    toolInput: ro,
                    toolOutput: rs,
                    toolResponseMetadata: r_,
                    widgetId: as,
                    widgetState: n0
                })));
                let n = n2.current?.widgetId === as ? n2.current : null;
                if (P()(n, e)) return;
                n2.current = e;
                let a = n?.sourceMcpAppId !== eO;
                null != ro && (a || !P()(n?.toolInput, ro)) && (0, eV.h)(ai.notifyMcpAppsToolInput({
                    arguments: ro
                })), "cancelled" === rp ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tH) && (0, eV.h)(ai.notifyMcpAppsToolCancelled({
                    reason: tH
                })) : null == rd || !a && P()(n?.toolResult, e.toolResult) && n?.toolStatus === rp && P()(n?.toolInput, ro) && P()(n?.toolResponseMetadata, r_) || (0, eV.h)(ai.notifyMcpAppsToolResult({
                    ...rd,
                    isError: "error" === rp || rd.isError,
                    _meta: "error" === rp ? {
                        ...rd._meta,
                        status: "error"
                    } : rd._meta
                }))
            }, [nj, rd, ai, eO, ro, rs, r_, rp, tH, as, n0]), (0, c.useEffect)(() => {
                nj && null != ai && (0, eV.h)(ai.notifyMcpAppsHostContext({
                    hostContext: {
                        [C.a]: nk
                    }
                }))
            }, [nj, nk, ai]), (0, c.useEffect)(() => {
                if (nj && null != ai && null != n4) return u?.observeHostContext?.(tK, n4, e => {
                    (0, eV.h)(ai.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [u, n4, nj, ai, tK]), (0, c.useEffect)(() => {
                if (null == n4 || !rb || null == ai || null == as || nz && null == rT) return;
                let e = rz(nB);
                (0, eV.h)(ai.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: az(nB),
                    isTombstone: aU()?.isTombstone === !0,
                    viewParams: rl,
                    widgetId: as
                };
                return P()(nQ.current, t) || (nQ.current = t, (0, eV.h)(ai.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: a,
                            onLayout: r
                        } = e, o = null, i = () => {
                            null == o && (o = window.requestAnimationFrame(() => {
                                o = null, r()
                            }))
                        };
                        if (i(), "u" < typeof ResizeObserver) return () => {
                            null != o && window.cancelAnimationFrame(o)
                        };
                        let s = new ResizeObserver(i);
                        return s.observe(t), a && n?.parentElement != null && s.observe(n.parentElement), () => {
                            s.disconnect(), null != o && window.cancelAnimationFrame(o)
                        }
                    }({
                        frameElement: n4,
                        inlineAnchor: rv,
                        fitWidth: nd,
                        onLayout: () => {
                            if ("true" === n4.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rx(n4), n = {
                                isSidebarOpen: aU()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rw ? "transparent" : nY
                            };
                            P()(nZ.current, n) || (nZ.current = n, (0, eV.h)(ai.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tg({
                                availableDisplayModes: tB.availableDisplayModes ?? L,
                                containerDimensions: t,
                                displayMode: nB,
                                locale: t3.locale,
                                deepLink: tc,
                                safeAreaInsets: e.insets,
                                styleVariables: nV,
                                theme: tT(),
                                userAgent: tv(aU()?.device),
                                toolInfo: aU()?.toolInfo
                            });
                            P()(nX.current, a) || (nX.current?.theme !== a.theme && (0, eV.h)(ai.setTheme({
                                theme: a.theme
                            })), nX.current = a, (0, eV.h)(ai.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [n4, nd, nK, f, R, rv, t3.locale, nV, L, tB.availableDisplayModes, rb, nz, re, a2, rw, e5?.displayMode, e5?.showModalCloseButton, ag, tc, nW, ai, rT, nY, tS, rl, as, nB]);
            let oc = ag && !nz,
                ou = ag && nz && nH?.tabId === (0, te.b)(ex);
            return (0, i.jsxs)(i.Fragment, {
                children: [n5 && n4 && rb && nj ? (0, x.createPortal)((0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                    children: n5.control
                }), n4) : null, f && rb && nj && null != n7 && null != rg ? (0, i.jsx)(tE, {
                    sandboxElement: n7,
                    sandboxId: rg
                }) : null, nj && null != n7 && null != rg ? (0, i.jsx)(tl, {
                    panelTabId: ap,
                    sandboxElement: n7,
                    sandboxId: rg,
                    title: tw
                }) : null, null != aT && rb ? (0, i.jsx)(eU.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...aT,
                        onCancel: aI,
                        onConfirm: av
                    }
                }) : null, ou ? (0, i.jsx)(ee.a.RightPanelTabListBefore, {
                    children: (0, i.jsx)(tW, {
                        canGoBack: af.canGoBack,
                        canGoForward: af.canGoForward,
                        className: "h-full px-1",
                        onBack: () => r0(-1),
                        onForward: () => r0(1)
                    })
                }) : null, oc && null != n4 && !nz ? (0, x.createPortal)((0, i.jsx)(tW, {
                    canGoBack: af.canGoBack,
                    canGoForward: af.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => r0(-1),
                    onForward: () => r0(1)
                }), n4) : null]
            })
        }
        var nu = n("Za0m");

        function nd(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: o,
                    allowGlobalHost: u,
                    sessionId: d
                } = e,
                p = void 0 !== o && o,
                _ = void 0 === u || u,
                f = (0, l.y)(E.a),
                m = (0, l.x)(eE.s, d);
            return r[0] !== f || r[1] !== d ? (t = () => {
                let e, t, n, a, r, o, i, s, l, c, u;
                return n = !1, a = !1, r = null, o = () => {
                    clearTimeout(t), t = void 0
                }, i = e => {
                    if (a = e, o(), a) {
                        r = null, (0, eE.E)(f, d, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == r && (r = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (h.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: d
                            }
                        }), (0, eE.E)(f, d, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && i(n.isIntersecting)
                }), c = (t, c) => {
                    (e !== t || n !== c) && (n = c, s(l.takeRecords()), l.disconnect(), o(), void 0 === (e = t) ? (a = !1, r = null, (0, eE.E)(f, d, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && i(a && !(0, t_.h)(f))
                    }) : l.observe(e))
                }, u = f.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(t_.c);
                    let n = t(eE.s, d),
                        a = null == n ? null : t(eE.h, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t(et.l.tabById$, (0, te.b)(d)),
                        o = (0, t_.h)(f);
                    if (!r || !o) return void c(r ? null : void 0, o);
                    let i = a.inlineFrameAnchor,
                        s = () => c(i.getSnapshot(), o),
                        l = i.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, u(), l.disconnect(), o()
                }
            }, n = [f, d], r[0] = f, r[1] = d, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, c.useEffect)(t, n), r[4] !== _ || r[5] !== m || r[6] !== p || r[7] !== d ? (a = null == m ? null : (0, i.jsx)(n_, {
                sessionId: d,
                frameState: m,
                sourceMcpAppId: m.sourceMcpAppId,
                isAccessRevoked: p,
                allowGlobalHost: _
            }), r[4] = _, r[5] = m, r[6] = p, r[7] = d, r[8] = a) : a = r[8], a
        }

        function np(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(nd, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function n_(e) {
            let t, n, a, r, o, _, g, I, T = (0, s.c)(26),
                {
                    sessionId: v,
                    sourceMcpAppId: b,
                    frameState: A,
                    isAccessRevoked: y,
                    allowGlobalHost: C
                } = e,
                N = (0, l.y)(E.a);
            T[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.b)(), T[0] = t) : t = T[0];
            let w = (0, f.f)(t),
                R = (0, l.x)(m.b, b),
                P = y || R,
                S = (0, l.x)(eE.h, b),
                D = S?.content ?? null,
                G = D?.mcpAppHostAdapter?.retain;
            T[1] !== N || T[2] !== v ? (n = () => (0, nu.b)(N, v), a = [N, v], T[1] = N, T[2] = v, T[3] = n, T[4] = a) : (n = T[3], a = T[4]), (0, c.useLayoutEffect)(n, a), T[5] !== G || T[6] !== N || T[7] !== b ? (r = () => G?.(N, b), o = [G, N, b], T[5] = G, T[6] = N, T[7] = b, T[8] = r, T[9] = o) : (r = T[8], o = T[9]), (0, c.useLayoutEffect)(r, o);
            let L = (0, l.x)(u.c, D?.access ?? null);
            if (T[10] !== L || T[11] !== S || T[12] !== N || T[13] !== P || T[14] !== b ? (_ = () => {
                    null != S && (P || "changed" === L) && (h.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: P,
                            accessStatus: L
                        },
                        sensitive: {
                            mcpAppId: S.sessionId,
                            sourceMcpAppId: b
                        }
                    }), (0, eE.A)(N, b))
                }, g = [b, S, N, P, L], T[10] = L, T[11] = S, T[12] = N, T[13] = P, T[14] = b, T[15] = _, T[16] = g) : (_ = T[15], g = T[16]), (0, c.useLayoutEffect)(_, g), !w || P || A.isSuspended || (0, tq.f)(A.sandboxError) || null == S || null == D || "current" !== L) return null;
            let x = (0, d.c)(D);
            if (x && (null == D.toolResult || null != D.toolCallStatus)) return null;
            let O = x ? nE : nc;
            return T[17] !== O || T[18] !== C || T[19] !== D || T[20] !== A || T[21] !== S.hostedInThreadScrollLayout || T[22] !== S.inlineFrameAnchor || T[23] !== v || T[24] !== b ? (I = (0, i.jsx)(O, {
                ...D,
                ModalFrame: np,
                hostedInThreadScrollLayout: S.hostedInThreadScrollLayout,
                inlineFrameAnchor: S.inlineFrameAnchor,
                allowGlobalHost: C,
                sessionId: v,
                sourceMcpAppId: b,
                frameState: A
            }, A.sandboxGeneration), T[17] = O, T[18] = C, T[19] = D, T[20] = A, T[21] = S.hostedInThreadScrollLayout, T[22] = S.inlineFrameAnchor, T[23] = v, T[24] = b, T[25] = I) : I = T[25], I
        }

        function nE(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, l.y)(E.a);
            return a[0] !== r ? (t = (e, t) => (0, _.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, i.jsx)(nc, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }
    }),
    aENG: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t, n, a) {
                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = Math.max(e ?? t ?? ("card" === a ? 200 : 480), n ?? 200);
                return r || null != e ? o : Math.min(o, 720)
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
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Wf1j"),
            i = n("DcH0"),
            s = n("X3K1"),
            l = n("zOE4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, u, d = (0, r.c)(21),
                    {
                        className: p,
                        height: _,
                        inlineFramePadding: E,
                        allowCompact: f,
                        fullSurface: h,
                        showLoadingStatus: m,
                        disableInlineLoadingState: g
                    } = e,
                    I = void 0 !== f && f,
                    T = void 0 === m || m,
                    v = (0, o.a)();
                d[0] !== v ? (t = v.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
                }), d[0] = v, d[1] = t) : t = d[1];
                let b = t,
                    A = T ? "status" : void 0,
                    y = !T;
                d[2] !== b || d[3] !== A || d[4] !== y ? (n = {
                    role: A,
                    "aria-hidden": y,
                    "aria-label": b,
                    "data-mcp-app-loading": "true"
                }, d[2] = b, d[3] = A, d[4] = y, d[5] = n) : n = d[5];
                let C = n;
                if (void 0 !== h && h) {
                    let e, t;
                    return d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), d[6] = e) : e = d[6], d[7] !== C ? (t = (0, a.jsx)("div", {
                        className: "relative h-full min-h-0",
                        ...C,
                        children: e
                    }), d[7] = C, d[8] = t) : t = d[8], t
                }
                if (void 0 !== g && g) {
                    let e;
                    return d[9] !== _ ? (e = (0, a.jsx)("div", {
                        "aria-hidden": "true",
                        style: {
                            height: _
                        }
                    }), d[9] = _, d[10] = e) : e = d[10], e
                }
                d[11] !== I || d[12] !== p || d[13] !== _ || d[14] !== E || d[15] !== C ? (c = I && "number" == typeof _ && _ > 0 && _ < 48 ? (0, a.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    ...C,
                    style: {
                        height: null == E ? _ : "100%"
                    },
                    children: (0, a.jsx)(s.a, {
                        className: "w-48 max-w-full",
                        size: "md"
                    })
                }) : (0, a.jsx)(i.a, {
                    className: p,
                    ...C,
                    style: {
                        height: null == E ? _ : "100%"
                    }
                }), d[11] = I, d[12] = p, d[13] = _, d[14] = E, d[15] = C, d[16] = c) : c = d[16];
                let N = c;
                return d[17] !== _ || d[18] !== E || d[19] !== N ? (u = null == E ? N : (0, a.jsx)("div", {
                    style: {
                        height: _,
                        paddingBlockStart: E.blockStart,
                        paddingBlockEnd: E.blockEnd,
                        paddingInlineStart: E.inlineStart,
                        paddingInlineEnd: E.inlineEnd
                    },
                    children: N
                }), d[17] = _, d[18] = E, d[19] = N, d[20] = u) : u = d[20], u
            }
        })
    }),
    HPlV: (function(e, t, n) {
        n.d(t, {
            a: () => v,
            sendMcpAppMessage: () => T
        });
        var a = n("kSHG"),
            r = n("HVBu"),
            o = n.n(r),
            i = n("IhIa"),
            s = n("DD2M"),
            l = n("Cslg"),
            c = n("dsow"),
            u = n("ABep"),
            d = n("oyxz"),
            p = n("PxlB"),
            _ = n("RNul"),
            E = n("SGsN");
        let f = (0, u.jsx)(d.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open"
        });

        function h(e, t, n) {
            return e.get(E.f).info((0, u.jsx)(d.a, {
                ...p.a.creating
            }), {
                id: t,
                position: "top-center",
                actionPlacement: "inline",
                duration: 0,
                hasCloseButton: !1,
                leading: (0, u.jsx)(_.a, {
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
        var m = n("WBiY"),
            g = n("sS8e"),
            I = n("kfGJ");
        async function T(e) {
            let {
                untrustedAppMessage: t,
                prompt: n,
                send: a,
                signal: r,
                messageAttachment: o,
                modelContextAttachments: i,
                requestConfirmation: s
            } = e;
            r.throwIfAborted();
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
            await a(l, s)
        }

        function v(e) {
            let {
                scope: t,
                recipient: r,
                getNewThreadDestination: p,
                globalEntrypointIdentity: _,
                canCreateCodexThreads: T,
                hasUserGesture: v,
                assertActive: b,
                sourceName: A,
                toolOrigin: y,
                signal: C
            } = e;
            return (e, N) => (0, c.c)({
                context: e,
                signal: C,
                requestConfirmation: N,
                send: async e => {
                    b();
                    let c = (0, m.b)(r);
                    if (void 0 === c && (c = null != p ? p() : null == r ? {
                            kind: "app-server",
                            hostId: I.a
                        } : null), null == c || "app-server" === c.kind && !T) throw (0, g.c)("New conversations are unavailable for this view", a.r.MethodNotFound);
                    C.throwIfAborted();
                    let N = new AbortController,
                        w = t.get(l.f),
                        R = t.get(l.j),
                        P = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.f) !== w || t(l.j) !== R) && N.abort()
                        }),
                        S = (0, s.a)(),
                        D = h(t, S);
                    o()(e => e());
                    let G = e => {
                            N.signal.aborted || (0, i.c)(e) || t.get(E.f).danger(e instanceof Error ? e.message : String(e), {
                                id: S,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        L = o()(() => {
                            N.signal.removeEventListener("abort", L), P(), D?.close()
                        }),
                        x = !1;
                    N.signal.addEventListener("abort", L, {
                        once: !0
                    });
                    let O = () => N.abort();
                    C.addEventListener("abort", O, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(17982)]).then(n.bind(n, "VWsy"));
                        b(), N.signal.throwIfAborted(), C.removeEventListener("abort", O), await a(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: _,
                            hasUserGesture: v,
                            onDeferredCreation: e => {
                                x = !0, e.then(L, e => {
                                    G(e), L()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (D = h(t, S, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(E.f).info((0, u.jsx)(d.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    values: {
                                        appName: A
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
                            sourceName: A,
                            toolOrigin: y,
                            signal: N.signal
                        });
                        return
                    } catch (e) {
                        throw G(e), e
                    } finally {
                        C.removeEventListener("abort", O), x || L()
                    }
                }
            })
        }
    }),
    FPpy: (function(e, t, n) {
        var a = n("bTvG"),
            r = n("iRMi"),
            o = n("mfKi"),
            i = n("UKCO"),
            s = n("xSzB"),
            l = n("k7G6"),
            c = n("yGJW"),
            u = n("Yshm");
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    chatgpt: n,
                    hostId: d,
                    navigate: p,
                    toolResult: _,
                    connect: E,
                    open: f,
                    decline: h,
                    onShownReceipt: m,
                    onInstallClick: g,
                    onSuggestionInteraction: I,
                    isCurrent: T = () => !0
                } = e, v = u.e.safeParse(_.structuredContent);
                if (!v.success) return null;
                let b = (0, s.f)(_),
                    A = u.c.safeParse(b?._meta ?? b),
                    y = A.success ? A.data["openai/plugin_suggestion_id"] : void 0,
                    C = {
                        chatgpt: n,
                        source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: y,
                        surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    N = (e, r, i) => {
                        try {
                            (0, c.a)(t, o.CodexPluginAction, {
                                source: C.source,
                                suggestionId: y,
                                surface: C.surface,
                                action: e,
                                remotePluginId: r,
                                result: o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: o.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != y && (e !== o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != i) && (0, c.a)(t, a.q, {
                                action: e === o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: r,
                                pluginIds: i,
                                result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                                suggestionId: y,
                                productExperience: n.productExperience,
                                surface: n.surface
                            })
                        } catch {}
                    },
                    w = new Set,
                    R = e => {
                        let t = u.a.parse(e),
                            n = v.data.suggestions.find(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.pluginId
                            });
                        if (!T() || null == n || null != t.suggestionId && t.suggestionId !== y) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return n
                    };
                return {
                    requestDeclinePluginSuggestions: null == h ? void 0 : () => h(v.data.suggestions),
                    sendInstrument: e => {
                        let t = u.b.safeParse(e);
                        if (!T() || !t.success || t.data.payload.suggestion_id !== y || !v.data.suggestions.some(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.data.payload.remote_plugin_id
                            })) return;
                        let n = t.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                            if (!t.data.payload.plugin_ids.includes(n) || (m?.(n, e), w.has(n))) return;
                            w.add(n), I?.(n, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed");
                            return
                        }
                        let a = t.data.payload.plugin_ids;
                        N(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => v.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = R(e);
                        return g?.(t.plugin_id), I?.(t.plugin_id, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), N(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), E(t, C)
                    },
                    requestOpenPlugin: async e => {
                        let r = R(e);
                        if (null != n && null != f) try {
                            (0, c.a)(t, a.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: r.plugin_id,
                                suggestionId: y,
                                surface: n.surface
                            })
                        } catch {}
                        null != f ? await f(r) : await p((0, l.a)({
                            hostId: d,
                            pluginId: r.plugin_id,
                            remoteMarketplaceName: i.cd
                        }))
                    }
                }
            }
        })
    }),
    EAcR: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("on57"),
            i = n("Q840"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("Wdu7"),
            u = n("aENG"),
            d = n("tSEg"),
            p = n("WFY2"),
            _ = n("Cv9y"),
            E = n("qZWE"),
            f = n("X3T3"),
            h = n("EDsV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, I, T, v, b, A, y, C, N, w = (0, r.c)(90),
                    {
                        resource: R,
                        error: P,
                        errorTitle: S,
                        errorIllustration: D,
                        hostDisplayModes: G,
                        fullSurface: L,
                        hostScroll: x,
                        inlineSurface: O,
                        mcpAppId: F,
                        overlayOwnerId: M,
                        onRetryResourceRead: k,
                        renderErrorActions: U,
                        appName: H,
                        presentation: W,
                        showLoadingStatus: V,
                        disableInlineLoadingState: Y
                    } = e,
                    j = void 0 !== L && L,
                    q = void 0 !== x && x,
                    z = void 0 === O ? "standalone" : O,
                    B = void 0 === M ? null : M,
                    K = void 0 === V || V,
                    $ = void 0 !== Y && Y,
                    Q = (0, i.y)(d.a),
                    X = (0, i.x)(E.h, F),
                    Z = X?.content.resource;
                w[0] !== P || w[1] !== R || w[2] !== Z ? (t = null == Z ? R : {
                    data: Z,
                    error: P ?? null,
                    isLoading: !1
                }, w[0] = P, w[1] = R, w[2] = Z, w[3] = t) : t = w[3];
                let J = t,
                    {
                        data: ee,
                        isLoading: et
                    } = J,
                    en = ee?.html ?? null;
                w[4] !== J || w[5] !== G ? (n = (0, h.e)(J, G), w[4] = J, w[5] = G, w[6] = n) : n = w[6];
                let ea = n,
                    er = (0, i.x)(E.v, F),
                    eo = (0, i.x)(E.w, F),
                    ei = j || "inline" === W,
                    es = X?.inlineFrameAnchor.ref,
                    el = ee?.heightHint ?? null,
                    ec = ee?.minFrameHeight ?? null;
                w[7] !== er.intrinsicHeight || w[8] !== q || w[9] !== z || w[10] !== ec || w[11] !== el ? (m = (0, u.a)(er.intrinsicHeight, el, ec, z, q), w[7] = er.intrinsicHeight, w[8] = q, w[9] = z, w[10] = ec, w[11] = el, w[12] = m) : m = w[12];
                let eu = m,
                    ed = !j && ee?.fitWidth ? er.intrinsicWidth ?? ee.widthHint : void 0,
                    ep = j ? void 0 : ee?.inlineFramePadding;
                w[13] !== ep ? (g = (0, u.b)(ep), w[13] = ep, w[14] = g) : g = w[14], w[15] !== ed || w[16] !== g ? (I = {
                    width: ed,
                    ...g
                }, w[15] = ed, w[16] = g, w[17] = I) : I = w[17];
                let e_ = I,
                    eE = "error" === ea.kind ? ea.error : er.sandboxError;
                w[18] !== ea.kind || w[19] !== eE ? (T = null, "too-large" === ea.kind ? T = "HTML exceeds display limit" : eE instanceof h.a && (T = "No supported display mode"), w[18] = ea.kind, w[19] = eE, w[20] = T) : T = w[20];
                let ef = "error" === ea.kind ? ea.error : null,
                    eh = ef?.message;
                w[21] !== T || w[22] !== ee?.availableDisplayModes || w[23] !== ee?.htmlByteLength || w[24] !== G || w[25] !== F || w[26] !== ef ? (v = () => {
                    (null != T || null != ef) && p.a.warning("MCP app error displayed", {
                        safe: {
                            reason: T ?? "App could not be displayed",
                            htmlByteLength: ee?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: F,
                            error: ef,
                            hostDisplayModes: G,
                            availableDisplayModes: ee?.availableDisplayModes
                        }
                    })
                }, w[21] = T, w[22] = ee?.availableDisplayModes, w[23] = ee?.htmlByteLength, w[24] = G, w[25] = F, w[26] = ef, w[27] = v) : v = w[27];
                let em = (0, s.useEffectEvent)(v);
                if (w[28] !== em ? (b = () => {
                        em()
                    }, w[28] = em, w[29] = b) : b = w[29], w[30] !== T || w[31] !== F || w[32] !== eh ? (A = [T, eh, F], w[30] = T, w[31] = F, w[32] = eh, w[33] = A) : A = w[33], (0, s.useEffect)(b, A), "too-large" === ea.kind) {
                    let e;
                    return w[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(c.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, a.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppTooLarge",
                                defaultMessage: "This app is too large to display"
                            })
                        })
                    }), w[34] = e) : e = w[34], e
                }
                if (!j && "launcher" === W) {
                    let e, t = B ?? void 0;
                    return w[35] !== es || w[36] !== t ? (e = (0, a.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), w[35] = es, w[36] = t, w[37] = e) : e = w[37], e
                }
                if (et || !eo && null != en && null == eE) {
                    let e, t, n, r;
                    if ("pending" === W && !j) {
                        let e;
                        return !K || $ ? null : (w[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app"
                            })
                        }), w[38] = e) : e = w[38], e)
                    }
                    let i = et ? null : es,
                        s = B ?? void 0,
                        c = null == ep && "max-w-full",
                        u = j && "h-full";
                    w[39] !== c || w[40] !== u ? (e = (0, o.b)(c, u), w[39] = c, w[40] = u, w[41] = e) : e = w[41];
                    let d = "standalone" === z && "rounded-lg border";
                    w[42] !== d ? (t = (0, o.b)("w-full border-subtle", d), w[42] = d, w[43] = t) : t = w[43];
                    let p = j ? "100%" : eu;
                    return w[44] !== $ || w[45] !== j || w[46] !== q || w[47] !== ep || w[48] !== K || w[49] !== t || w[50] !== p ? (n = (0, a.jsx)(_.a, {
                        className: t,
                        height: p,
                        inlineFramePadding: ep,
                        fullSurface: j,
                        allowCompact: q,
                        showLoadingStatus: K,
                        disableInlineLoadingState: $
                    }), w[44] = $, w[45] = j, w[46] = q, w[47] = ep, w[48] = K, w[49] = t, w[50] = p, w[51] = n) : n = w[51], w[52] !== e_ || w[53] !== z || w[54] !== i || w[55] !== s || w[56] !== e || w[57] !== n ? (r = (0, a.jsx)("div", {
                        ref: i,
                        "data-overlay-owner": s,
                        className: e,
                        style: e_,
                        "data-mcp-app-inline-surface": z,
                        children: n
                    }), w[52] = e_, w[53] = z, w[54] = i, w[55] = s, w[56] = e, w[57] = n, w[58] = r) : r = w[58], r
                }
                if (null != eE) {
                    let e, t;
                    return w[59] !== ea.kind || w[60] !== F || w[61] !== k || w[62] !== X?.content.mcpAppHostAdapter?.retry || w[63] !== Q ? (e = X?.content.mcpAppHostAdapter?.retry ?? ("error" === ea.kind ? k : () => (0, E.D)(Q, F)), w[59] = ea.kind, w[60] = F, w[61] = k, w[62] = X?.content.mcpAppHostAdapter?.retry, w[63] = Q, w[64] = e) : e = w[64], w[65] !== H || w[66] !== D || w[67] !== S || w[68] !== j || w[69] !== z || w[70] !== eE || w[71] !== U || w[72] !== e ? (t = (0, a.jsx)(f.a, {
                        error: eE,
                        errorTitle: S,
                        errorIllustration: D,
                        fullSurface: j,
                        inlineSurface: z,
                        pluginName: H,
                        renderErrorActions: U,
                        onRetry: e
                    }), w[65] = H, w[66] = D, w[67] = S, w[68] = j, w[69] = z, w[70] = eE, w[71] = U, w[72] = e, w[73] = t) : t = w[73], t
                }
                if (!ei) {
                    let e, t = B ?? void 0;
                    return w[74] !== es || w[75] !== t ? (e = (0, a.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), w[74] = es, w[75] = t, w[76] = e) : e = w[76], e
                }
                if (null == en) {
                    let e;
                    return w[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display"
                        })
                    }), w[77] = e) : e = w[77], e
                }
                let eg = B ?? void 0,
                    eI = null == ep && "w-full max-w-full",
                    eT = j && "h-full";
                w[78] !== eI || w[79] !== eT ? (y = (0, o.b)("overflow-hidden", eI, eT), w[78] = eI, w[79] = eT, w[80] = y) : y = w[80];
                let ev = j ? "100%" : eu;
                return w[81] !== e_ || w[82] !== ev ? (C = {
                    ...e_,
                    height: ev
                }, w[81] = e_, w[82] = ev, w[83] = C) : C = w[83], w[84] !== es || w[85] !== z || w[86] !== eg || w[87] !== y || w[88] !== C ? (N = (0, a.jsx)("div", {
                    ref: es,
                    "data-overlay-owner": eg,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": z,
                    className: y,
                    style: C
                }), w[84] = es, w[85] = z, w[86] = eg, w[87] = y, w[88] = C, w[89] = N) : N = w[89], N
            }
        })
    }),
    X3T3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("slpy"),
            i = n("on57"),
            s = n("oyxz"),
            l = n("Wf1j"),
            c = n("Sm6l"),
            u = n("bf6R"),
            d = n("ZiSI"),
            p = n("pZTm"),
            _ = n("EDsV");

        function E(e) {
            let t, n, o, s = (0, r.c)(11),
                {
                    fullSurface: l,
                    inlineSurface: c,
                    title: u,
                    illustration: p,
                    actions: _
                } = e,
                E = l ? "h-full" : "h-60",
                f = !l && "standalone" === (void 0 === c ? "standalone" : c) && "overflow-hidden rounded-lg border border-strong";
            s[0] !== E || s[1] !== f ? (t = (0, i.b)(E, f), s[0] = E, s[1] = f, s[2] = t) : t = s[2];
            let h = !l;
            return s[3] !== _ || s[4] !== p || s[5] !== h || s[6] !== u ? (n = (0, a.jsx)(d.a, {
                compact: h,
                title: u,
                illustration: p,
                description: null,
                actions: _
            }), s[3] = _, s[4] = p, s[5] = h, s[6] = u, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                children: n
            }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
        }

        function f() {
            let e, t, n, i, d = (0, r.c)(6),
                p = (0, l.a)();
            d[0] !== p ? (e = p.formatMessage({
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                defaultMessage: "Timeout details"
            }), d[0] = p, d[1] = e) : e = d[1];
            let _ = e;
            return d[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes."
            }), d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.qe, {
                className: "text-secondary"
            }), d[3] = n) : n = d[3], d[4] !== _ ? (i = (0, a.jsx)(o.a, {
                preventDismissOnFastClick: !0,
                content: t,
                children: (0, a.jsx)(c.a, {
                    size: "inline",
                    color: "ghost",
                    "aria-label": _,
                    children: n
                })
            }), d[4] = _, d[5] = i) : i = d[5], i
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, i = (0, r.c)(21),
                    {
                        error: l,
                        errorTitle: u,
                        errorIllustration: d,
                        fullSurface: h,
                        inlineSurface: m,
                        onRetry: g,
                        renderErrorActions: I,
                        pluginName: T
                    } = e,
                    v = void 0 !== h && h,
                    b = void 0 === m ? "standalone" : m,
                    A = u;
                if (null == A)
                    if (l instanceof _.b) {
                        let e, t, n, r = T ? "yes" : "no";
                        i[0] !== T || i[1] !== r ? (e = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            values: {
                                hasName: r,
                                appName: T
                            }
                        }), i[0] = T, i[1] = r, i[2] = e) : e = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(f, {}), i[3] = t) : t = i[3], i[4] !== e ? (n = (0, a.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [e, t]
                        }), i[4] = e, i[5] = n) : n = i[5], A = n
                    } else if (null == T) {
                    let e;
                    i[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayUnnamedApp
                    }), i[6] = e) : e = i[6], A = e
                } else {
                    let e;
                    i[7] !== T ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayApp,
                        values: {
                            appName: T
                        }
                    }), i[7] = T, i[8] = e) : e = i[8], A = e
                }
                i[9] !== v || i[10] !== g ? (t = null != g ? (0, a.jsx)(c.a, {
                    color: "secondary",
                    size: v ? "large" : "compact",
                    onClick: () => g(),
                    children: (0, a.jsx)(s.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again"
                    })
                }) : null, i[9] = v, i[10] = g, i[11] = t) : t = i[11];
                let y = t;
                i[12] !== I || i[13] !== y ? (n = I ? I(y) : y, i[12] = I, i[13] = y, i[14] = n) : n = i[14];
                let C = n;
                return i[15] !== C || i[16] !== d || i[17] !== A || i[18] !== v || i[19] !== b ? (o = (0, a.jsx)(E, {
                    fullSurface: v,
                    inlineSurface: b,
                    title: A,
                    illustration: d,
                    actions: C
                }), i[15] = C, i[16] = d, i[17] = A, i[18] = v, i[19] = b, i[20] = o) : o = i[20], o
            },
            b: E
        })
    }),
    MefB: (function(e, t, n) {
        var a = n("g25Y"),
            r = n("X6Vn");
        n.d(t, {}, {
            a: function(e, t) {
                let n = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                    o = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                    i = () => {
                        window.open(t, "_blank", `popup=yes,width=600,height=750,left=${n},top=${o},noopener,noreferrer`)
                    };
                "Apple Computer, Inc." === navigator.vendor ? (0, r.f)(e, a.ExternalLinkConfirmationDialog, {
                    href: t,
                    initiator: "mcp_app_resource",
                    onOpen: i
                }) : i()
            }
        })
    }),
    qwxA: (function(e, t, n) {
        n.d(t, {
            a: () => m,
            b: () => h,
            c: () => f
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            i = n("zd8w"),
            s = n("I7bK"),
            l = n("gMJf"),
            c = n("Vlqh");
        n("kfGJ"), c.a;
        var u = n("qZWE"),
            d = n("tSEg"),
            p = n("SNez"),
            _ = n("EDsV"),
            E = n("DRR4");

        function f(e) {
            let t, n, a = (0, r.c)(6),
                {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                } = e,
                p = (0, o.y)(d.a);
            return a[0] !== s || a[1] !== c || a[2] !== l || a[3] !== p ? (t = () => {
                (0, u.F)(p, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, p], a[0] = s, a[1] = c, a[2] = l, a[3] = p, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, i.useLayoutEffect)(t, n), null
        }

        function h(e) {
            let t, n, a = (0, r.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, o.y)(d.a);
            return a[0] !== s || a[1] !== l || a[2] !== c ? (t = () => {
                c.set(u.k, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, i.useLayoutEffect)(t, n), null
        }

        function m(e) {
            let t, n, c, f, h, m, g, I, T, v, b, A, y, C, N, w, R, P, S, D, G, L, x, O, F, M = (0, r.c)(65);
            M[0] !== e ? ({
                recipient: y,
                resource: b,
                access: n,
                fullSurface: C,
                hostDisplayModes: f,
                hostId: h,
                lifetime: m,
                mcpAppId: g,
                mcpServerStatuses: I,
                pluginId: T,
                connectorId: c,
                Frame: t,
                server: A,
                ...v
            } = e, M[0] = e, M[1] = t, M[2] = n, M[3] = c, M[4] = f, M[5] = h, M[6] = m, M[7] = g, M[8] = I, M[9] = T, M[10] = v, M[11] = b, M[12] = A, M[13] = y, M[14] = C) : (t = M[1], n = M[2], c = M[3], f = M[4], h = M[5], m = M[6], g = M[7], I = M[8], T = M[9], v = M[10], b = M[11], A = M[12], y = M[13], C = M[14]);
            let k = void 0 === y ? null : y,
                U = void 0 !== C && C,
                H = (0, o.y)(d.a),
                W = (0, o.x)(u.t, g),
                V = (0, o.z)(p.a);
            M[15] !== m || M[16] !== g || M[17] !== H ? (N = () => {
                if ("component" === m) return () => {
                    (0, u.A)(H, g)
                }
            }, w = [m, g, H], M[15] = m, M[16] = g, M[17] = H, M[18] = N, M[19] = w) : (N = M[18], w = M[19]), (0, i.useLayoutEffect)(N, w);
            let Y = (0, i.useContext)(s.c)?.rightPanelLayoutTick;
            M[20] !== I || M[21] !== T || M[22] !== A ? (R = void 0 !== T ? T : I?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === A
            })?.pluginId, M[20] = I, M[21] = T, M[22] = A, M[23] = R) : R = M[23];
            let j = R;
            M[24] !== c || M[25] !== h || M[26] !== j || M[27] !== A ? (P = {
                hostId: h,
                pluginId: j,
                connectorId: c,
                server: A
            }, M[24] = c, M[25] = h, M[26] = j, M[27] = A, M[28] = P) : P = M[28];
            let {
                bridge: q,
                pluginId: z,
                isLoading: B
            } = (0, o.x)(l.a, P), K = j ?? z;
            M[29] !== h || M[30] !== K ? (S = ! function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return !1
            }({
                hostId: h,
                pluginId: K
            }) ? void 0 : K, M[29] = h, M[30] = K, M[31] = S) : S = M[31];
            let $ = S,
                Q = b.isLoading || B;
            M[32] !== f || M[33] !== Q || M[34] !== b ? (D = (0, _.e)({
                ...b,
                isLoading: Q
            }, f), M[32] = f, M[33] = Q, M[34] = b, M[35] = D) : D = M[35];
            let X = D;
            return M[36] !== n || M[37] !== X || M[38] !== q || M[39] !== $ || M[40] !== U || M[41] !== f || M[42] !== h || M[43] !== V || M[44] !== g || M[45] !== I || M[46] !== k || M[47] !== v || M[48] !== j || M[49] !== Y || M[50] !== H || M[51] !== A ? (L = () => {
                V || "ready" !== X.kind || null == n || (0, u.z)(H, {
                    ...v,
                    recipient: k,
                    resource: X.data,
                    access: n,
                    fullSurface: U,
                    hostDisplayModes: f,
                    hostId: h,
                    mcpAppId: g,
                    mcpServerStatuses: I,
                    pluginId: j,
                    server: A,
                    firstPartyPluginBridge: q,
                    firstPartyPluginLoggerPluginId: $,
                    rightPanelLayoutTick: Y
                })
            }, G = [n, X, q, $, U, f, h, V, g, I, k, v, j, Y, H, A], M[36] = n, M[37] = X, M[38] = q, M[39] = $, M[40] = U, M[41] = f, M[42] = h, M[43] = V, M[44] = g, M[45] = I, M[46] = k, M[47] = v, M[48] = j, M[49] = Y, M[50] = H, M[51] = A, M[52] = G, M[53] = L) : (G = M[52], L = M[53]), (0, i.useLayoutEffect)(L, G), M[54] !== t || M[55] !== m || M[56] !== g || M[57] !== H || M[58] !== W ? (x = () => {
                "component" !== m && null != W && (0, E.c)(H, {
                    Frame: t,
                    lifetime: m,
                    sessionId: W,
                    sourceMcpAppId: g
                })
            }, O = [t, m, g, W, H], M[54] = t, M[55] = m, M[56] = g, M[57] = H, M[58] = W, M[59] = x, M[60] = O) : (x = M[59], O = M[60]), (0, i.useLayoutEffect)(x, O), M[61] !== t || M[62] !== m || M[63] !== W ? (F = "component" === m && null != W ? (0, a.jsx)(t, {
                sessionId: W
            }, W) : null, M[61] = t, M[62] = m, M[63] = W, M[64] = F) : F = M[64], F
        }
    }),
    U0IP: (function(e, t, n) {
        let a;
        var r = n("eB3o"),
            o = n("kSHG"),
            i = n("Q840"),
            s = n("lAQI"),
            l = n("tSEg");
        let c = "ui/openai/viewer-header",
            u = s.F({
                id: s.L().min(1).max(100),
                label: s.L().min(1).max(500),
                disabled: s.j().optional()
            }),
            d = s.p(["newspaper", "text-page", "document-search", "phone-wave", "presentation", "bar-chart", "live-signal", "building"]),
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
                    id: u.shape.id,
                    percent: E
                })).min(1).max(24).refine(e => new Set(e.map(e => e.percent)).size === e.length, "Zoom percentages must be unique"),
                fitId: u.shape.id
            }),
            h = s.F({
                zoom: f.optional(),
                navigation: s.g(u.extend({
                    direction: s.p(["up", "down"])
                })).max(2).refine(e => new Set(e.map(e => e.direction)).size === e.length)
            });

        function m(e) {
            let t = e?.zoom;
            return [...e?.navigation ?? [], ...t ? [...t.presets, {
                id: t.fitId
            }] : []]
        }
        let g = s.F({
                title: s.L().min(1).max(2e3),
                playback: s.p(["listen", "player"]).optional(),
                titleMenuLabel: s.L().min(1).max(2e3).optional(),
                titleIcon: d.optional(),
                documentControls: h.optional(),
                titleActions: s.g(u.extend({
                    href: p.optional()
                })).max(20),
                actions: s.g(u.extend({
                    icon: s.p(["download", "search", "sources", "info"]),
                    menu: s.F({
                        fields: s.g(s.F({
                            label: s.L().max(100),
                            value: s.L().max(4e3)
                        })).max(40),
                        items: s.g(u).max(20),
                        providers: s.g(s.F({
                            name: s.L().min(1).max(500),
                            href: _.optional(),
                            icons: s.g(o.v).max(8).optional(),
                            icon: d.optional(),
                            sources: s.g(s.F({
                                title: s.L().min(1).max(2e3),
                                href: _.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...m(e.documentControls), ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            I = (0, i.v)(l.a, e => null);
        a = (0, r._)(Symbol.dispose), n.d(t, {}, {
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
                    let a = s.F({
                        method: s.z(c),
                        params: g
                    }).safeParse(e);
                    if (!a.success || t.aborted) return null;
                    let r = a.data.params,
                        o = [...m(r.documentControls), ...r.titleActions, ...r.actions.flatMap(e => e.menu?.items ?? [e])],
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
                        header: r,
                        invoke: l,
                        ...r.playback && {
                            placePlayback: e => {
                                i() && n({
                                    method: "ui/notifications/openai/viewer-playback-layout",
                                    params: e
                                })
                            }
                        }
                    }), Promise.resolve({
                        accepted: !0,
                        ...r.playback && {
                            playback: !0
                        },
                        ...r.documentControls && {
                            documentControls: !0
                        }
                    })
                } [a]() {
                    this.scope.get(I, this.appId)?.invoke === this.invoke && this.scope.set(I, this.appId, null), this.invoke = null
                }
            },
            c: I
        })
    })
};