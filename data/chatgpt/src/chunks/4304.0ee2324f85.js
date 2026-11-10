export const __rspack_esm_ids = [4304];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => i,
            c: () => a,
            d: () => I,
            e: () => h,
            f: () => A,
            g: () => v,
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

        function m(e, t) {
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
                        } = new MessageChannel, m = {
                            signal: t.signal
                        }, g = () => {
                            i.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), _.close()
                        }, h = E(i).withOptions(m), T = E(l).withOptions(m), I = E(u).withOptions(m), b = E(p).withOptions(m), v = !1, A = async e => {
                            if (n?.(), v) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (v = !0, g()), t
                        }, y = {
                            next: e => A(() => T(e)),
                            return: e => A(() => I(e)),
                            throw: e => A(() => b(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async e => {
                                n?.(), await e(), v = !0, g(), n = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => h()),
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
                            }, g()
                        }, {
                            once: !0
                        }), y
                    }
                },
                a = n({});
            return a.withOptions = n, a
        }
        var g = n("ASxG");
        async function h(e) {
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
                let o = g.object({
                    type: g.literal("init"),
                    ports: g.record(g.string(), g.instanceof(MessagePort)),
                    replyPort: g.instanceof(MessagePort)
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
                        return T(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* a.apply(this, t)
                        }: a
                    }(t, e, n);
                    T(r) ? m(a.port1, r) : E(a.port1, r), l[e] = a.port2
                }
                r.postMessage(l, Object.values(l)), r.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    u = Object.fromEntries(Object.entries(a).map(e => {
                        let [t, a] = e, r = c.has(t) ? m(a) : E(a);
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

        function T(e) {
            return "AsyncGeneratorFunction" === e.constructor.name
        }

        function I(e) {
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
        let b = new Set(["blob", "c", "cid", "data", "eval", "filesystem", "inline", "trusted-types-policy", "trusted-types-sink", "wasm-eval"]);

        function v(e) {
            return b.has(e) ? null : new URL(e).origin
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
            s = n("c5dW");
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    chatGptConversation: n,
                    toolIdentity: l,
                    access: c,
                    signal: u,
                    toolArguments: d
                } = e, p = (0, s.c)(l);
                if (null == p || null == l) return null;
                if (null == n) return (0, s.b)({
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
    WBiY: (function(e, t, n) {
        var a = n("BolX"),
            r = n("wWGv"),
            o = n("tl5a"),
            i = n("Cslg"),
            s = n("dsow"),
            l = n("Sd8U"),
            c = n("dN0a"),
            u = n("WFY2"),
            d = n("f4ql"),
            p = n("uoRg");
        let _ = (0, a.u)(l.a, () => []);
        n.d(t, {}, {
            a: function(e) {
                e.get(p.a)?.clearDraftAttachments()
            },
            b: function(e) {
                return e?.get(p.a)?.newThreadDestination
            },
            c: function(e, t, n) {
                return e.get(p.a)?.updatePrompt?.(t, n) ?? !1
            },
            getMcpAppSubmit: function(e, t) {
                if (null == e) return null;
                let n = e.get(p.a)?.submit;
                if (null != n) {
                    var a, l;
                    let o, d, E = (a = e, l = n, o = a.get(i.f), d = a.get(i.j), e => e(p.a)?.submit === l && e(i.f) === o && e(i.j) === d);
                    return async (a, o, i, l, d) => {
                        i?.throwIfAborted();
                        let f = a.untrustedAppMessage?.sourceId,
                            m = e.get(p.a)?.isBusy == null ? void 0 : Symbol();
                        null != m && (e.set(_, e => [...e, m]), u.a.info("Queued app message for composer", {
                            safe: {
                                mcpAppId: f
                            }
                        }));
                        try {
                            let g = await (0, s.c)({
                                context: a,
                                signal: i,
                                requestConfirmation: l,
                                send: async a => {
                                    if (e.get(p.a)?.submit !== n) throw new DOMException("Composer was closed", "AbortError");
                                    return null != m && await async function(e, t, n, a) {
                                        let o = e => e(_)[0] === a && e(p.a)?.isBusy !== !0;
                                        do {
                                            let a = (0, r.Se)(),
                                                i = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (!t(n) || o(n)) && a.resolve(void 0)
                                                });
                                            try {
                                                await (null == n ? a.promise : (0, r.jf)(a.promise, n))
                                            } finally {
                                                i(), a.resolve(void 0)
                                            }
                                            if (n?.throwIfAborted(), !t(e.get)) throw new DOMException("Composer was closed", "AbortError")
                                        } while (!o(e.get))
                                    }(e, E, i, m), t?.(), u.a.info("Submitting app message", {
                                        safe: {
                                            mcpAppId: f
                                        }
                                    }), n(a, o, i, void 0, d)
                                }
                            });
                            return (0, c.i)(e, {
                                prefersReducedMotion: !0
                            }), null != g && u.a.info("sent" === g.status ? "Sent app message" : "Queued app message", {
                                safe: {
                                    mcpAppId: f,
                                    messageId: g.messageId,
                                    serverAccepted: "queued" === g.status ? g.serverAccepted : void 0
                                }
                            }), g
                        } catch (t) {
                            let e = i?.aborted === !0 || t instanceof DOMException && "AbortError" === t.name;
                            throw u.a[e ? "info" : "warning"](e ? "Cancelled app message submission" : "Failed to submit app message", {
                                safe: {
                                    mcpAppId: f
                                },
                                sensitive: {
                                    error: t
                                }
                            }), t
                        } finally {
                            null != m && e.set(_, e => e.filter(e => e !== m))
                        }
                    }
                }
                if ("local" !== e.value.kind || null == e.value.conversationId) return null;
                let E = e.value.conversationId,
                    f = e.get(o.p, E);
                return null == f ? null : async (n, a, r, i) => {
                    let l = n.untrustedAppMessage?.sourceId;
                    try {
                        let a = await (0, s.c)({
                            context: n,
                            signal: r,
                            requestConfirmation: i,
                            send: n => (t?.(), u.a.info("Submitting app message", {
                                safe: {
                                    mcpAppId: l
                                }
                            }), (0, d.a)(e, e.get(o.vb, E), E, {
                                context: n,
                                cwd: f,
                                text: n.prompt
                            }, {
                                queueModeOverride: "queue"
                            }))
                        });
                        return (0, c.i)(e, {
                            prefersReducedMotion: !0
                        }), null != a && u.a.info("sent" === a.status ? "Sent app message" : "Queued app message", {
                            safe: {
                                mcpAppId: l,
                                messageId: a.messageId,
                                serverAccepted: "queued" === a.status ? a.serverAccepted : void 0
                            }
                        }), a
                    } catch (t) {
                        let e = r?.aborted === !0 || t instanceof DOMException && "AbortError" === t.name;
                        throw u.a[e ? "info" : "warning"](e ? "Cancelled app message submission" : "Failed to submit app message", {
                            safe: {
                                mcpAppId: l
                            },
                            sensitive: {
                                error: t
                            }
                        }), t
                    }
                }
            }
        })
    }),
    kAhA: (function(e, t, n) {
        var a = n("BOYb"),
            r = n("Cslg"),
            o = n("Kwur");

        function i(e, t, n, a, r) {
            if (!t?.owner.isCurrent()) return Promise.resolve();
            let {
                context: i,
                owner: s
            } = t, l = (async () => {
                try {
                    await o.Request.safePost("/aip/ledger/funnel-events", {
                        requestBody: {
                            flow_type: "account",
                            flow_id: i.flowId,
                            event_id: "linking_started" === n ? i.flowId : crypto.randomUUID(),
                            step: n,
                            start: a,
                            entry_point: i.entryPoint ?? "unknown",
                            beacon_type: i.beaconType,
                            source: "client",
                            component: r
                        },
                        expectedIdentity: {
                            accountId: s.accountId,
                            userId: s.userId
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": s.accountId,
                            "x-openai-use-sheep": "1"
                        },
                        retry: !1,
                        signal: AbortSignal.any([s.signal, AbortSignal.timeout(1e4)]),
                        assertRequestCurrent: () => {
                            if (!s.isCurrent()) throw new DOMException("Finance owner changed", "AbortError")
                        }
                    })
                } catch {}
            })();
            return s.retainTelemetry(l), l
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
                return i(e, o, "linking_started", {
                    flow_path: r,
                    platform: (0, a.d)() ? "mobile_web" : "desktop_web"
                }), o
            },
            b: function(e, t) {
                let n = e.get(r.m),
                    {
                        authenticatedUserId: a,
                        userId: o,
                        accountUserId: i
                    } = n;
                if (n.authLoading || n.accountLoading || "chatgpt" !== n.authMethod || n.accountId !== t || n.authenticatedAccountId !== t || null == a || null == o || null == i) return;
                let s = new AbortController,
                    l = new Set,
                    c = !1,
                    u = () => {
                        c && 0 === l.size && s.abort()
                    },
                    d = e => !e.authLoading && !e.accountLoading && "chatgpt" === e.authMethod && e.accountId === t && e.authenticatedAccountId === t && e.authenticatedUserId === a && e.userId === o && e.accountUserId === i,
                    p = e.watch(e => {
                        let {
                            get: t
                        } = e;
                        d(t(r.m)) || s.abort()
                    });
                return s.signal.addEventListener("abort", p, {
                    once: !0
                }), s.signal.aborted && p(), {
                    userId: a,
                    analyticsUserId: o,
                    accountId: t,
                    accountUserId: i,
                    signal: s.signal,
                    isCurrent: () => !s.signal.aborted && d(e.get(r.m)),
                    retainTelemetry: e => {
                        let t;
                        if (s.signal.aborted) return void e.catch(() => void 0);
                        let n = Promise.race([e, new Promise(e => {
                            t = setTimeout(e, 1e4)
                        })]).catch(() => void 0).finally(() => {
                            clearTimeout(t), l.delete(n), u()
                        });
                        l.add(n)
                    },
                    dispose: () => {
                        c = !0, u()
                    }
                }
            },
            c: i
        })
    }),
    XCEe: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(276221), n.e(963523), n.e(867089), n.e(299196), n.e(964068), n.e(482788)]).then(n.bind(n, "iAuu"))
            }
        })
    }),
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(514247)]).then(n.bind(n, "shkb"))
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
                let d = e.get(a.m),
                    p = d.authenticatedAccountId;
                if (null == d.authenticatedUserId || null == d.userId || null == p) return;
                let _ = t.ownerDocument,
                    E = !1,
                    f = !1,
                    m = () => {
                        if (f) return;
                        let l = e.get(a.m);
                        l.authenticatedUserId !== d.authenticatedUserId || l.authenticatedAccountId !== d.authenticatedAccountId || l.userId !== d.userId || null != d.accountUserId && l.accountUserId !== d.accountUserId ? h() : (null == s && (s = (0, i.b)(e, p)), null == s || (s.isCurrent() ? !(!E || "visible" !== _.visibilityState || !(0, o.h)(e) || (0, r.c)() || !t.isConnected || t.closest('[aria-hidden="true"], [inert], [hidden]')) && t.checkVisibility({
                            visibilityProperty: !0,
                            opacityProperty: !0
                        }) && (f = !0, n(s), h()) : h()))
                    },
                    g = new IntersectionObserver(e => {
                        E = e.some(e => e.isIntersecting && e.intersectionRatio >= u && e.intersectionRect.width > 0 && e.intersectionRect.height > 0), m()
                    }, {
                        threshold: 0 === u ? [0, Number.EPSILON] : .5
                    }),
                    h = () => {
                        f = !0, g.disconnect(), l?.(), c?.(), _.removeEventListener("visibilitychange", m), s?.dispose()
                    };
                return (l = e.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(a.m), t(o.c), m()
                }), f) ? l() : (c = (0, r.e)(m), _.addEventListener("visibilitychange", m), g.observe(t)), h
            }
        })
    }),
    s5P0: (function(e, t, n) {
        var a = n("zMIV"),
            r = n.n(a),
            o = n("ASxG"),
            i = n("pZ3S"),
            s = n("Cslg"),
            l = n("XCEe"),
            c = n("FNWO"),
            u = n("O0Tw");
        let d = {
                accountId: o.never().optional(),
                connectorId: o.never().optional(),
                returnTo: o.never().optional(),
                signal: o.never().optional()
            },
            p = o.object({
                ...d,
                app: o.never().optional(),
                template: o.never().optional(),
                params: o.looseObject({
                    ...d,
                    view: o.literal("accountLinking")
                })
            }),
            _ = o.object({
                type: o.literal("count"),
                label: o.literal("ledger.onboarding_syncing_visible")
            });
        n.d(t, {}, {
            a: function(e, t, n, a) {
                let o = !1;
                return {
                    requestModal: null == t || 0 === t.length ? void 0 : async (a, o) => {
                        if (o.aborted || e.get(s.f) !== t) return !1;
                        let {
                            params: c
                        } = p.parse(a), {
                            openPersonalFinanceAccountLinking: u
                        } = await (0, l.a)();
                        if (o.aborted || e.get(s.f) !== t) return !1;
                        let d = r()(c, ["view", "key", "ref"]),
                            {
                                trackingContext: _ = {}
                            } = d;
                        return i.isObject(_) && (d.trackingContext = {
                            entryPoint: "widget",
                            entrypoint: "creditScore" === c.initialTab ? "conversation" : void 0,
                            ..._
                        }), await u(e, {
                            accountId: t,
                            accountLinkingFlowParams: d,
                            returnTo: n,
                            signal: o
                        }) && !o.aborted && e.get(s.f) === t
                    },
                    sendInstrument: t => {
                        if (_.safeParse(t).success) {
                            o || null == a || (o = !0, (0, u.a)(e, a));
                            return
                        }(0, c.a)(e, t)
                    }
                }
            }
        })
    }),
    FNWO: (function(e, t, n) {
        var a = n("RjXy"),
            r = n("ASxG"),
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
            c = r.object({
                account_section: r.enum(["banking", "investments", "credit_cards", "real_estate", "loans", "payroll", "other"]).optional().catch(void 0),
                link_status: r.enum(["linked", "error", "disconnected"]).optional().catch(void 0),
                surface: r.enum(["ledger_profile", "mattress_accounts_tab", "unknown", "web", "native"]).optional().catch(void 0),
                device_type: r.enum(["mobile", "tablet", "desktop", "unknown"]).optional().catch(void 0),
                selection_source: r.enum(["profile", "snapshot"]).optional().catch(void 0),
                view_mode: r.enum(["pip", "inline", "fullscreen", "modal", "sidebar", "unknown"]).optional().catch(void 0),
                reason: r.enum(["close_button", "follow_up", "remove_success"]).optional().catch(void 0),
                item_count: r.number().int().nonnegative().max(0x7fffffff).optional().catch(void 0),
                result: r.enum(["empty", "non_empty"]).optional().catch(void 0),
                provider: r.literal("plaid").optional().catch(void 0),
                plaidExitStatus: r.string().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0),
                plaidErrorCode: r.string().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0)
            }),
            u = {
                label: r.string().startsWith("ledger."),
                tags: r.array(r.object({
                    key: r.string(),
                    value: r.string()
                })).optional()
            },
            d = r.discriminatedUnion("type", [r.object({
                type: r.literal("event"),
                label: u.label,
                payload: c.optional().catch(void 0)
            }), r.object({
                type: r.literal("count"),
                ...u,
                count: r.number().optional()
            }), r.object({
                type: r.literal("hist"),
                ...u,
                value: r.number()
            }), r.object({
                type: r.literal("error")
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
            a: () => T,
            b: () => b
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
            m = n("kAhA"),
            g = n("JLZd");

        function h(e, t, n) {
            let a = e.get(_.M, t);
            if (null == a) return;
            let r = (0, c.b)({
                mapping: a,
                current_node: n
            }).find(e => "user" === e.author.role);
            if (r?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(_._, t)) return a[n]?.message
        }

        function T(e, t) {
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
            let i = h(e, a, r);
            if (i?.author.role !== "assistant" && i?.author.role !== "tool") return;
            let s = (0, m.b)(e, n.accountId);
            if (null != s) try {
                s.userId === n.uiUserId && s.isCurrent() && I(e, s, {
                    conversationId: o,
                    messageId: r,
                    widgetName: "ledger_connected_institutions",
                    widgetResultKind: "syncing"
                })
            } finally {
                s.dispose()
            }
        }

        function I(e, t, n) {
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

        function b(e, t, n) {
            let l, c, d, _, E, f = (0, a.c)(15),
                m = (0, u.useRef)(null);
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
            let g = l,
                h = g?.key,
                {
                    scope: T
                } = e;
            f[3] !== t || f[4] !== g || f[5] !== T ? (c = () => {
                let e = t.current;
                if (null != e && null != g) return null == m.current && (m.current = v()), m.current.attach(T, e, g)
            }, f[3] = t, f[4] = g, f[5] = T, f[6] = c) : c = f[6];
            let I = (0, u.useEffectEvent)(c);
            return f[7] !== I ? (d = () => I(), f[7] = I, f[8] = d) : d = f[8], f[9] !== h || f[10] !== T ? (_ = [T, h], f[9] = h, f[10] = T, f[11] = _) : _ = f[11], (0, u.useEffect)(d, _), f[12] !== g || f[13] !== h ? (E = null == g ? void 0 : (e, t) => {
                null == m.current && (m.current = v()), m.current.commit(h, function(e, t, n, a) {
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
                }(g.widgetName, null == g.component ? void 0 : {
                    component: g.component
                }, e, t))
            }, f[12] = g, f[13] = h, f[14] = E) : E = f[14], E
        }

        function v() {
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
                    let l, u, p, _, E, f, T, b, v, A, y = (o = n, i = a, s = r, E = o.get(d.m), f = () => {
                        let e = h(o, s.conversationId, s.messageId);
                        return (e?.author.role === "assistant" || e?.author.role === "tool") && e.metadata?.is_visually_hidden_from_conversation !== !0 && e.metadata?.reasoning_status == null && e.metadata?.model_dil_v2 == null && (0, c.s)((0, c.s)(e.metadata?.model_dil)?.dil)?.type == null
                    }, T = new Set, b = !1, v = () => {
                        b = !0, p?.(), _?.(), l?.dispose()
                    }, A = () => {
                        if (p?.(), p = void 0, b || !l?.isCurrent() || !f()) return;
                        let e = u;
                        null == e || T.has(e) || (p = (0, g.a)(o, i, () => {
                            !(b || u !== e || !l?.isCurrent() || T.has(e)) && f() && (T.add(e), I(o, l, {
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
                        } = e, n = t(d.m);
                        n.authenticatedUserId === E.authenticatedUserId && n.userId === E.userId && n.authenticatedAccountId === E.authenticatedAccountId && (null == E.accountUserId || n.accountUserId === E.accountUserId) && (null == l || l.isCurrent()) ? b || null != l || null == E.authenticatedAccountId || (l = (0, m.b)(o, E.authenticatedAccountId), A()) : v()
                    }), b && _(), {
                        update: e => {
                            u !== e && (u = e, A())
                        },
                        dispose: v
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
            o = n("wWGv"),
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
            m = n("FPpy"),
            g = n("Yshm"),
            h = n("qZWE"),
            T = n("xSzB"),
            I = n("joT6"),
            b = n("loz7"),
            v = n("uzkw"),
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
                    toolResult: x
                } = e;
                if (!w({
                        hostId: a,
                        mcpAppScope: u,
                        access: P,
                        server: S
                    })) return null;
                let L = {
                        hostId: a,
                        threadId: n
                    },
                    O = (0, T.f)(x),
                    M = g.c.safeParse(O?._meta ?? O).data,
                    F = (e, a, r) => {
                        let {
                            accountId: o,
                            uiUserId: i
                        } = P;
                        null == o || null == i || t.get(N.j) || t.get(h.r, D)?.sourceMcpAppId !== G || (0, v.a)({
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
                return (0, m.a)({
                    scope: t,
                    hostId: a,
                    navigate: R,
                    toolResult: x,
                    onSuggestionInteraction: F,
                    connect: async (e, r) => {
                        let u = e.plugin_id;
                        try {
                            let m = t.get(c.$b, L)?.latestTurnId,
                                g = !1,
                                h = !1;
                            if (!s({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: o.Zc,
                                    remotePluginId: u
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: n
                                    },
                                    hostId: a,
                                    marketplaceAnalytics: r,
                                    onError: () => {
                                        h = !0
                                    },
                                    onSuccess: () => {
                                        g = !0
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
                                    } = e, n = t(b.o);
                                    return "closed" === n.kind || n.hostId !== a
                                }), h) return {
                                pluginId: u,
                                status: "retryable_error"
                            };
                            if (!g) return {
                                pluginId: u,
                                status: "cancelled"
                            };
                            let T = (0, l.b)(t, a);
                            if (!(0, y.i)(a)) {
                                let e = await T.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: u,
                                    status: "retryable_error"
                                }
                            }
                            let v = t.query.snapshot(A.l, {
                                hostId: a,
                                marketplacePath: null,
                                pluginName: u,
                                productContext: "codex",
                                remoteMarketplaceName: o.Zc
                            });
                            await v.invalidate({
                                refetchType: "none"
                            });
                            let [N, w] = await Promise.all([v.getOrFetch(), (0, _.a)(t, a, n)]);
                            if (!N.summary.installed || !N.summary.enabled || null != N.summary.remotePluginId && N.summary.remotePluginId !== u || !N.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return w.has(t)
                                }) || (await (0, I.a)({
                                    scope: t,
                                    authPolicy: N.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: a,
                                    plugin: (0, C.b)(N),
                                    queryClient: t.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: u,
                                status: "connection_required"
                            };
                            if (void 0 === m || (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(c.$b, L);
                                    return null != a && (a.latestTurnId !== m || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n) && !t(E.c))
                                }), await T.getLatestTurnId(n) !== m)) return {
                                pluginId: u,
                                status: "connected"
                            };
                            if (t.get(c.Gb, n)?.role === "follower" || !(0, d.b)(n)) return {
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
                        let o = e => !e(N.j) && e(h.r, D)?.sourceMcpAppId === G,
                            s = g.d.safeParse(t.get(h.w, D) ?? {});
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
                        let m = t.get(c.$b, L)?.latestTurnId,
                            T = E.map(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return t
                            });
                        for (let {
                                plugin_id: e
                            }
                            of E) F(e, M?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(h.w, D, {
                            ...s.data,
                            declinedPluginIds: [..._, ...T]
                        });
                        try {
                            if (void 0 === m) return {
                                status: "declined",
                                declinedPluginIds: T
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(c.$b, L);
                                    return !o(t) || null != a && (a.latestTurnId !== m || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n))
                                }), await (0, l.b)(t, a).getLatestTurnId(n) === m && o(t.get) && t.get(c.Gb, n)?.role !== "follower" && (0, d.b)(n)) try {
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
                            declinedPluginIds: T
                        }
                    }
                })
            },
            b: R,
            c: w
        })
    }),
    KMWy: (function(e, t, n) {
        var a = n("wWGv");
        let r = (0, n("Nwp9").b)(a.Rc, {}, {
            coerceStoredValue: e => a.Xi.parse(e)
        });
        n.d(t, {}, {
            a: function(e, t) {
                return (t ? a.Yi.options : a._i).filter(t => e.permissions?.[t] != null)
            },
            b: function(e, t, n) {
                let r, o = e.map(e => a.Zi[e].feature),
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
        var a = n("ASxG"),
            r = n("sS8e");
        n.d(t, {}, {
            a: {
                createAlreadyPendingError: () => (0, r.c)("A follow-up message is already awaiting confirmation", -32e3),
                createCanceledError: () => (0, r.c)("Follow-up message was not confirmed", -32e3)
            },
            b: async function(e, t, n, r) {
                let {
                    text: o
                } = a.object({
                    text: a.string().min(1)
                }).parse(e), i = await n({
                    prompt: o
                });
                r.throwIfAborted(), await t({
                    text: i
                })
            }
        })
    }),
    aR8t: (function(e, t, n) {
        let a, r, o;
        n.d(t, {
            a: () => nr,
            b: () => no
        });
        var i = n("ABep"),
            s = n("QosV"),
            l = n("z8ZL"),
            c = n("kSHG"),
            u = n("bTvG"),
            d = n("iRMi"),
            p = n("t0Nb"),
            _ = n("kUij"),
            E = n("fD5v"),
            f = n("OppN"),
            m = n("WWo4"),
            g = n("SZCv"),
            h = n.n(g),
            T = n("BolX"),
            I = n("wWGv"),
            b = n("AuIy"),
            v = n("F6B1"),
            A = n("zd8w"),
            y = n("v7qY"),
            C = n("Wf1j"),
            N = n("jqIZ"),
            w = n("ASxG"),
            R = n("KJ1J");
        let P = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var S = n("PFjh"),
            D = n("yGJW");
        let G = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            x = w.object({
                type: w.enum(["count", "hist"]),
                label: w.enum(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: w.literal(1).optional(),
                value: w.number().nonnegative().optional(),
                tags: w.array(w.object({
                    key: w.string(),
                    value: w.string()
                })).max(8)
            }),
            L = w.object({
                stage: w.enum(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: w.literal("ads"),
                checkout_type: w.literal("manual"),
                load_metric_version: w.literal("1").optional()
            }),
            O = w.object({
                phase: w.enum(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: w.enum(["create", "edit"]),
                outcome: w.enum(["success", "error", "requires_action"]),
                failure_category: w.enum(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            M = w.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            F = {
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
            k = w.array(w.object({
                key: w.string(),
                value: w.unknown().optional()
            }).nullable().catch(null)),
            H = w.discriminatedUnion("type", [w.object({
                type: w.literal("event"),
                label: M,
                payload: w.object({
                    widget: w.enum(G.widget),
                    view_session_id: w.uuid().optional().catch(void 0),
                    view: w.enum(G.view).optional().catch(void 0),
                    action: w.enum(G.action).optional().catch(void 0),
                    outcome: w.enum(["closed", "denied", "missing_response", "error"]).optional().catch(void 0),
                    step: w.enum(G.step).optional().catch(void 0),
                    source: w.enum(G.source).optional().catch(void 0),
                    billing_status: w.enum(["required", "complete", "unknown"]).optional().catch(void 0),
                    logo_status: w.enum(["missing", "ready", "in_review", "replacement_in_review", "review_rejected", "unknown"]).optional().catch(void 0),
                    account_review_status: w.enum(["approved", "in_review", "rejected", "unknown"]).optional().catch(void 0),
                    attention_reason: w.enum(["unsupported_country", "review_rejected"]).optional().catch(void 0),
                    billing_recovery: w.enum(["unsupported_country", "external"]).optional().catch(void 0),
                    billing_in_sidebar: w.boolean().optional().catch(void 0),
                    logo_handoff_failed: w.boolean().optional().catch(void 0),
                    step_number: U(1),
                    step_count: U(),
                    preview_kind: w.enum(["draft", "existing"]).optional().catch(void 0),
                    reason: w.enum(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: U(1),
                    page: U(1),
                    page_count: U(1),
                    page_size: U(1),
                    total_count: U(),
                    next_page: U(1)
                })
            }), w.object({
                type: w.literal("count"),
                label: M,
                count: w.literal(1).optional(),
                tags: k
            })]);

        function U() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return w.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var W = n("StMt"),
            j = n("Dgwo"),
            V = n("tl5a"),
            Y = n("URlz"),
            q = n("sM3V"),
            B = n("OpyH"),
            z = n("ZU27"),
            K = n("DiD0"),
            X = n("SK3E"),
            $ = n("gbrq"),
            Z = (n("Sbyb"), n("Btes")),
            J = n("TSib"),
            Q = n("ipIJ"),
            ee = n("uoRg"),
            et = n("qXzS"),
            en = n("Q8aV"),
            ea = n("dN0a"),
            er = n("qbxq"),
            eo = n("uIyc"),
            ei = n("WBiY");

        function es(e) {
            if (e.attachment?.content?.some(e => !(0, er.d)(e))) throw Error("App draft attachments must be visible to the user")
        }
        var el = n("Ot7V"),
            ec = n("eT6w"),
            eu = n("PeqE"),
            ed = n("ywSA"),
            ep = n("Cslg"),
            e_ = n("qZWE");
        n("s5P0");
        var eE = n("bvQ5"),
            ef = n("eB3o"),
            em = n("ZG9f");
        a = (0, ef._)(Symbol.dispose);
        class eg {
            #e = new eh;
            #t;
            constructor(e) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new em.a(this.#e, e.createRpcStub())
            }
            setNotificationSender(e) {
                this.#e.setNotificationSender(e)
            }
            handleRequest(e) {
                let {
                    message: t
                } = _.f.parse(e);
                return this.#e.receiveMessage(t), Promise.resolve({})
            } [a]() {
                this.#t(), this.#e[Symbol.dispose]()
            }
        }
        r = (0, ef._)(Symbol.dispose);
        class eh {
            #n = null;
            #a = [];
            #r = null;
            #o = null;
            setNotificationSender(e) {
                this.#o = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#o ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#o({
                    method: _.b,
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
        var eT = n("WFY2"),
            eI = n("ReGc"),
            eb = n("rP0s");
        let ev = w.object({
            prompt: w.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eA = n("o62A"),
            ey = n("FgIX"),
            eC = n("GaA7");
        let eN = "ui/openai/find",
            ew = w.object({
                method: w.literal(eN),
                params: w.object({
                    enabled: w.boolean()
                })
            }),
            eR = w.object({
                method: w.literal("ui/notifications/openai/find"),
                params: w.object({
                    command: w.enum(["open", "next", "previous"])
                })
            });
        o = (0, ef._)(Symbol.dispose);
        class eP {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: r,
                    signal: o,
                    notify: i
                } = t, s = ew.safeParse(e);
                if (!s.success || o.aborted || eC.a?.mcpAppSandbox == null || null == i || null == r) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = eC.a.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: r
                }, async e => n.ownerDocument.activeElement === n && (await i({
                    method: eR.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [o]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var eS = n("ioMY"),
            eD = n("iIHp"),
            eG = n("v7ut"),
            ex = n("sF0J"),
            eL = n("QnVT"),
            eO = n("HwRo"),
            eM = n("sS8e"),
            eF = n("NJrC"),
            ek = n("LGZt"),
            eH = n("MefB"),
            eU = n("WYvZ"),
            eW = n("geS6"),
            ej = n("a4MG");
        async function eV(e) {
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
            let l = (null == o ? await (0, j.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(ej.r, {
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
            if (null == l) throw (0, eM.c)(`MCP server not found: ${r}`, -32e3);
            return l
        }

        function eY(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var eq = n("DRR4"),
            eB = n("SRbQ"),
            ez = n("TL6G");
        class eK {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = ez.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(eX(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (eT.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (eT.a.info("Updating app event subscriptions for conversation", {
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
                        eT.a.info("Starting app event subscription", {
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
                        let t = (0, eB.a)(e, await (0, j.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
                        await this.params.scope.get(V.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
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
                        }), eT.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eB.e)(e)
                    }
                } catch (a) {
                    if (eT.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(o) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(o), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(eX({
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
                eT.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(V.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw eT.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), eT.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function eX(e, t) {
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
        var e$ = n("whdX");
        let eZ = new Map;
        class eJ {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            setConversation(e) {
                return this.enqueue(async () => {
                    let t = this.params.conversationId;
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, j.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = ez.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (eT.a.debug("Received app resource update", {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw Object.assign((0, eM.c)("MCP resource subscriptions are unavailable", -32601), {
                        name: "McpResourceSubscriptionsUnavailableError"
                    });
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw eT.a.warning("Failed to subscribe to app resource updates", {
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
                        throw eT.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, r = (eZ.get(a) ?? Promise.resolve()).then(e), o = r.then(() => void 0, () => void 0);
                return eZ.set(a, o), o.then(() => {
                    eZ.get(a) === o && eZ.delete(a)
                }), r
            }
            getAuthorizedWatchPathOverride(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                return null == t && (0, eW.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                }), t
            }
            getResourceWatchPath(e) {
                let t = this.getAuthorizedWatchPathOverride(e) ?? (0, e$.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == t) throw Object.assign((0, eM.c)("MCP resource is not subscribable", -32602), {
                    name: "McpResourceNotSubscribableError",
                    uri: e
                });
                return t
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? eT.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (eT.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, j.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), eT.a.info("Updated app resource subscriptions", {
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
        var eQ = n("xSzB"),
            e0 = n("ILnd"),
            e1 = n("kjQz"),
            e2 = n("ntKy"),
            e3 = n("OWtl"),
            e5 = n("Sd8U"),
            e6 = n("tSEg"),
            e8 = n("hZax"),
            e4 = n("jdxe"),
            e7 = n("ripK"),
            e9 = n("bIvi"),
            te = n("SNez"),
            tt = n("DXan"),
            tn = n("nKJ6"),
            ta = n("XXJV"),
            tr = n("TCti"),
            to = n("O9EX");
        let ti = (0, T.d)(e6.a, (e, t) => {
            let {
                get: n
            } = t;
            return "closed" !== n(to.a, e)
        });

        function ts(e) {
            let t, n, a, r, o = (0, s.c)(22),
                {
                    panelTabId: i,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, T.y)(e6.a),
                p = (0, T.z)(tr.b) ?? d,
                _ = eC.a?.mcpAppSandbox,
                E = (0, T.x)(null != _ && ti, i);
            o[0] !== p ? (t = (0, tn.getThreadBrowserConversationId)(p), o[0] = p, o[1] = t) : t = o[1];
            let f = t;
            o[2] !== i || o[3] !== p ? (n = () => {
                let e = p.get(ta.f, i);
                null != i && null != e && (0, ta.activateThreadPanelTab)(p, e, i)
            }, o[2] = i, o[3] = p, o[4] = n) : n = o[4];
            let m = (0, A.useEffectEvent)(n);
            return o[5] !== f || o[6] !== E || o[7] !== d || o[8] !== i || o[9] !== m || o[10] !== l || o[11] !== c || o[12] !== u ? (a = () => {
                if (!E || null == f || null == _) return;
                let e = (0, v.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = _.registerBrowserTarget({
                    conversationId: f,
                    initId: e,
                    sandboxId: c,
                    title: u
                }, m, (e, t) => (async function(e, t, n) {
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
                })(l, e, t));
                t.catch(tc);
                let n = d.watch(e => {
                    let {
                        get: n
                    } = e, a = n(to.a, i);
                    t.setPresented("right" === a || "bottom" === a).catch(tl)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, o[5] = f, o[6] = E, o[7] = d, o[8] = i, o[9] = m, o[10] = l, o[11] = c, o[12] = u, o[13] = a) : a = o[13], o[14] !== f || o[15] !== E || o[16] !== d || o[17] !== i || o[18] !== l || o[19] !== c || o[20] !== u ? (r = [_, f, E, d, i, l, c, u], o[14] = f, o[15] = E, o[16] = d, o[17] = i, o[18] = l, o[19] = c, o[20] = u, o[21] = r) : r = o[21], (0, A.useEffect)(a, r), null
        }

        function tl(e) {
            eT.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tc(e) {
            eT.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var tu = n("KMWy"),
            td = n("ygJs"),
            tp = n("nlNF");

        function t_(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: r,
                    sandboxId: o
                } = e,
                i = (0, T.y)(e3.a),
                {
                    pathname: l,
                    search: c
                } = (0, N.Y)(),
                u = (0, N._)();
            return a[0] !== u || a[1] !== l || a[2] !== r || a[3] !== o || a[4] !== i || a[5] !== c ? (t = () => {
                let e;
                if (eC.a?.mcpAppSandbox == null || ![I.Sc, I.Tc, I.dd, "/plugins/:pluginId/app/:toolName"].some(e => (0, N.J)(e, l))) return;
                let t = (0, I.Ig)(r.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = i.get(tp.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = eC.a.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: o,
                        initId: t
                    }, r => {
                        let p = r.entryIds[r.currentIndex];
                        if (null == p || e === p) {
                            e = void 0;
                            return
                        }
                        a = a.then(async () => {
                            let e = d();
                            if (n || null == e || "committed" !== r.reason) return;
                            let a = e.state?.mcpHistory;
                            if (a?.sandboxId === o && a.initId === t && a.entryId === p) return;
                            s = !0;
                            let _ = r.previousEntryId ?? r.entryIds[r.previousIndex ?? -1],
                                E = i.get(tp.k),
                                f = Math.sign(r.currentIndex - (null == _ ? r.currentIndex : r.entryIds.indexOf(_)));
                            if (null != E && 0 !== f)
                                for (let e = E.index + f; e >= 0 && e < E.entries.length; e += f) {
                                    let n = E.entries[e];
                                    if (n.pathname !== l || n.search !== c || n.state?.mcpHistory?.sandboxId !== o || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === p) return u(e - E.index)
                                }(a?.sandboxId !== o || a.initId !== t) && null != _ && _ !== p && (await u(e, {
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
                                }), e = d(), n || null == e) || await u(e, {
                                    replace: r.didReplaceEntry || null == _ || _ === p,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: o,
                                            initId: t,
                                            entryId: p
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
                        r(tp.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            _ = i.get(tp.k);
                        !s && c?.sandboxId === o && (c.initId === t || _?.entries.some(e => e.state?.mcpHistory?.sandboxId === o && e.state.mcpHistory.initId === t)) && (e = c.entryId, p.then(async a => {
                            if (!n && d()?.key === l?.key) {
                                let r = c.initId !== t ? "missing" : await a?.go(c.entryId);
                                "ok" !== r && e === c.entryId && (e = void 0), "missing" !== r || n || d()?.key !== l?.key || null == _ || 0 === _.popDelta || await u(Math.sign(_.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, _(), p[Symbol.dispose]()
                }
            }, n = [l, c, r, o, i, u], a[0] = u, a[1] = l, a[2] = r, a[3] = o, a[4] = i, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, A.useEffect)(t, n), null
        }
        var tE = n("uWA4");
        let tf = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tm = {
                insets: {
                    ...tf.insets,
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
                    [f.a]: o
                },
                ...null == i ? {} : {
                    [tE.a]: i
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

        function th(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tT() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tI(e) {
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
        let tb = (0, T.j)(e3.a, e => {
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
        var tv = n("VwGH"),
            tA = n("OM8g"),
            ty = n("on57"),
            tC = n("WSFD"),
            tN = n("fm8Z"),
            tw = n("IhIa");
        let tR = w.union([m.b, w.object({
                target: w.enum(["active", "new"]).optional(),
                send: w.literal(!1)
            }).strict()]),
            tP = m.c.extend({
                _meta: m.c.shape._meta.unwrap().extend({
                    "openai/message": tR.optional()
                }).optional()
            });

        function tS(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tw.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw (0, eM.c)("Unsupported MCP app content", -32602)
        }

        function tD(e, t) {
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
        var tG = n("HPlV");
        let tx = (0, T.j)(e5.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, r = a.get(J.w).find(t => t.id === e && "context" === t.kind);
                return r?.modelContextUpdateId == null ? null : {
                    updateId: r.modelContextUpdateId,
                    content: r.content?.length ? r.content : void 0,
                    structuredContent: r.structuredContent
                }
            }, {
                isEqual: h()
            })
        });
        var tL = n("slpy"),
            tO = n("Sm6l"),
            tM = n("HOLv"),
            tF = n("ByoF");

        function tk(e) {
            let t, n, a, r, o, l, c, u = (0, s.c)(23),
                {
                    backLabel: d,
                    canGoBack: p,
                    canGoForward: _,
                    color: E,
                    forwardLabel: f,
                    onBack: m,
                    onForward: g,
                    radius: h
                } = e,
                T = void 0 === E ? "ghost" : E,
                I = p ? T : "ghost",
                b = !p;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(tM.a, {
                "aria-hidden": !1,
                asset: tF.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== m || u[3] !== h || u[4] !== I || u[5] !== b ? (n = (0, i.jsx)(tO.a, {
                "aria-label": d,
                color: I,
                disabled: b,
                onClick: m,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = m, u[3] = h, u[4] = I, u[5] = b, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, i.jsx)(tL.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let v = _ ? T : "ghost",
                A = !_;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, i.jsx)(tM.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tF.a
            }), u[10] = r) : r = u[10], u[11] !== f || u[12] !== g || u[13] !== h || u[14] !== v || u[15] !== A ? (o = (0, i.jsx)(tO.a, {
                "aria-label": f,
                color: v,
                disabled: A,
                onClick: g,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = f, u[12] = g, u[13] = h, u[14] = v, u[15] = A, u[16] = o) : o = u[16], u[17] !== f || u[18] !== o ? (l = (0, i.jsx)(tL.a, {
                content: f,
                side: "bottom",
                children: o
            }), u[17] = f, u[18] = o, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, i.jsxs)(i.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tH(e) {
            let t, n, a, r, o, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: _,
                    onBack: E,
                    onForward: f
                } = e,
                m = (0, C.a)();
            u[0] !== m ? (t = m.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back",
                description: "Button label for moving to the previous page in an embedded MCP app's navigation history"
            }), u[0] = m, u[1] = t) : t = u[1];
            let g = t;
            u[2] !== m ? (n = m.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next",
                description: "Button label for moving forward to the next page in an embedded MCP app's navigation history; paired with the Back button"
            }), u[2] = m, u[3] = n) : n = u[3];
            let h = n;
            return u[4] !== d ? (a = (0, ty.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== E ? (r = e => {
                e.stopPropagation(), E()
            }, u[6] = E, u[7] = r) : r = u[7], u[8] !== f ? (o = e => {
                e.stopPropagation(), f()
            }, u[8] = f, u[9] = o) : o = u[9], u[10] !== g || u[11] !== p || u[12] !== _ || u[13] !== h || u[14] !== r || u[15] !== o ? (l = (0, i.jsx)(tk, {
                backLabel: g,
                canGoBack: p,
                canGoForward: _,
                forwardLabel: h,
                onBack: r,
                onForward: o
            }), u[10] = g, u[11] = p, u[12] = _, u[13] = h, u[14] = r, u[15] = o, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, i.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tU,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tU(e) {
            return e.stopPropagation()
        }
        var tW = n("oMYH"),
            tj = n("Yshm"),
            tV = n("EDsV"),
            tY = n("MTYR"),
            tq = n("Za0m"),
            tB = n("IWEP");
        let tz = w.preprocess(function(e, t) {
            let n = new WeakSet,
                a = w.record(w.string(), w.unknown()),
                r = (e, o) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: o,
                        message: "Cyclic tool arguments"
                    }), tB.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...o, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...o, ...e.path]
                            });
                            return tB.e
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
        }, w.record(w.string(), w.json()));

        function tK(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var tX = n("U0IP"),
            t$ = n("PkQL");
        let tZ = w.preprocess(tQ, w.record(w.string(), w.json())),
            tJ = w.preprocess(tQ, w.looseObject({
                ...l.d.shape.params.shape,
                content: w.array(t$.f).optional()
            }));

        function tQ(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let t0 = ["resources/subscribe", "resources/unsubscribe"],
            t1 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t2 = w.json(),
            t3 = w.object({
                mode: w.enum(["inline", "fullscreen"])
            }),
            t5 = w.object({
                linkToken: w.string().min(1),
                oauthStateId: w.string().min(1)
            }),
            t6 = w.object({
                canGoBack: w.boolean(),
                canGoForward: w.boolean()
            }).loose(),
            t8 = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            t4 = w.object({
                blob: w.instanceof(Blob),
                name: w.string().trim().min(1)
            }).strip(),
            t7 = w.object({
                name: w.string().min(1),
                arguments: tz.optional(),
                _meta: c.b.shape._meta
            }).loose(),
            t9 = w.object({
                uri: w.string().min(1)
            }).loose(),
            ne = w.object({
                arguments: w.record(w.string(), t2).optional(),
                name: w.string().regex(/\S/),
                subscriptionId: w.uuid()
            }),
            nt = w.object({
                subscriptionId: w.uuid()
            }),
            nn = w.number().positive(),
            na = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nr(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: o,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== o && o,
                d = void 0 === l || l,
                p = (0, T.y)(e6.a),
                _ = (0, T.x)(e_.r, c);
            return r[0] !== p || r[1] !== c ? (t = () => {
                let e, t, n, a, r, o, i, s, l, u, d;
                return n = !1, a = !1, r = null, o = () => {
                    clearTimeout(t), t = void 0
                }, i = e => {
                    if (a = e, o(), a) {
                        r = null, (0, e_.D)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == r && (r = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (eT.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, e_.D)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && i(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), o(), void 0 === (e = t) ? (a = !1, r = null, (0, e_.D)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && i(a && !(0, tp.h)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(tp.c);
                    let n = t(e_.r, c),
                        a = null == n ? null : t(e_.h, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t(z.l.tabById$, (0, e4.b)(c)),
                        o = (0, tp.h)(p);
                    if (!r || !o) return void u(r ? null : void 0, o);
                    let i = a.inlineFrameAnchor,
                        s = () => u(i.getSnapshot(), o),
                        l = i.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), o()
                }
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, A.useEffect)(t, n), r[4] !== d || r[5] !== _ || r[6] !== u || r[7] !== c ? (a = null == _ ? null : (0, i.jsx)(ni, {
                sessionId: c,
                frameState: _,
                sourceMcpAppId: _.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), r[4] = d, r[5] = _, r[6] = u, r[7] = c, r[8] = a) : a = r[8], a
        }

        function no(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(nr, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function ni(e) {
            let t, n, a, r, o, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: _,
                    frameState: E,
                    isAccessRevoked: f,
                    allowGlobalHost: m
                } = e,
                g = (0, T.y)(e6.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eO.b)(), d[0] = t) : t = d[0];
            let h = (0, e8.h)(t),
                I = (0, T.x)(te.b, _),
                b = f || I,
                v = (0, T.x)(e_.h, _),
                y = v?.content ?? null,
                C = y?.mcpAppHostAdapter?.retain;
            d[1] !== g || d[2] !== p ? (n = () => (0, tq.b)(g, p), a = [g, p], d[1] = g, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, A.useLayoutEffect)(n, a), d[5] !== C || d[6] !== g || d[7] !== _ ? (r = () => C?.(g, _), o = [C, g, _], d[5] = C, d[6] = g, d[7] = _, d[8] = r, d[9] = o) : (r = d[8], o = d[9]), (0, A.useLayoutEffect)(r, o);
            let N = (0, T.x)(Y.c, y?.access ?? null);
            if (d[10] !== N || d[11] !== v || d[12] !== g || d[13] !== b || d[14] !== _ ? (l = () => {
                    null != v && (b || "changed" === N) && (eT.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: b,
                            accessStatus: N
                        },
                        sensitive: {
                            mcpAppId: v.sessionId,
                            sourceMcpAppId: _
                        }
                    }), (0, e_.z)(g, _))
                }, c = [_, v, g, b, N], d[10] = N, d[11] = v, d[12] = g, d[13] = b, d[14] = _, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, A.useLayoutEffect)(l, c), !h || b || E.isSuspended || nc(E.sandboxError) || null == v || null == y || "current" !== N) return null;
            let w = (0, eA.c)(y);
            if (w && (null == y.toolResult || null != y.toolCallStatus)) return null;
            let R = w ? ns : nl;
            return d[17] !== R || d[18] !== m || d[19] !== y || d[20] !== E || d[21] !== v.hostedInThreadScrollLayout || d[22] !== v.inlineFrameAnchor || d[23] !== p || d[24] !== _ ? (u = (0, i.jsx)(R, {
                ...y,
                hostedInThreadScrollLayout: v.hostedInThreadScrollLayout,
                inlineFrameAnchor: v.inlineFrameAnchor,
                allowGlobalHost: m,
                sessionId: p,
                sourceMcpAppId: _,
                frameState: E
            }, E.sandboxGeneration), d[17] = R, d[18] = m, d[19] = y, d[20] = E, d[21] = v.hostedInThreadScrollLayout, d[22] = v.inlineFrameAnchor, d[23] = p, d[24] = _, d[25] = u) : u = d[25], u
        }

        function ns(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, T.y)(e6.a);
            return a[0] !== r ? (t = (e, t) => (0, e2.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, i.jsx)(nl, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function nl(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: r,
                conversationId: o,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: g,
                pluginId: M,
                fullSurface: k,
                modalOpen: U = !1,
                hostScroll: Y = !1,
                hostDisplayModes: ef,
                hostId: em,
                hostedInThreadScrollLayout: eh,
                access: ew,
                inheritHostBackground: eR = !1,
                installPlugin: eO,
                inlineFrameAnchor: ej,
                allowGlobalHost: eB,
                sessionId: ez,
                sourceMcpAppId: eX,
                mcpAppScope: eZ,
                sourceName: e2,
                permissionAppDisplayName: e8,
                mcpServerStatuses: te,
                mcpAppHostAdapter: tn,
                getNewThreadDestination: ta,
                widgetStatePersistence: to,
                plaidAccountId: ti,
                deepLink: tl,
                rightPanelLayoutTick: tc,
                resolveResourceWatchPath: tp,
                server: tE,
                appIcon: tw,
                sidePanelTitle: tR,
                title: tL,
                globalSurface: tO = !1,
                toolArguments: tM,
                toolResult: tF,
                toolResultNotification: tk,
                toolCallStatus: tU,
                toolCallCancellationReason: tq,
                viewParamsOverride: tB,
                frameState: tz
            } = e, t$ = (0, T.y)(e6.a), tQ = (0, T.y)(e3.a), t2 = (0, C.a)(), nr = (0, A.useSyncExternalStore)(ej.subscribe, ej.getSnapshot, () => null), ni = (0, A.useEffectEvent)(() => t$), ns = (0, A.useEffectEvent)(() => ew.assertActive()), {
                csp: nl,
                fitWidth: nu,
                html: nd,
                sandboxOrigin: np,
                serverOrigin: n_
            } = a, nE = a.prefersBorder && !tn?.hideFrameBorder, nf = (0, A.useEffectEvent)(() => M), nm = (0, A.useEffectEvent)(() => e8 ?? e2), ng = (0, tu.a)(a, eC.a?.mcpAppSandbox != null), nh = ng.join(";"), nT = "connectorId" in ew.serverIdentity ? ew.serverIdentity.connectorId : null, nI = null != t, nb = (0, A.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nv = !nI || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nA = (0, T.x)(V.d, em), ny = (0, T.x)(V.jc, {
                hostId: em,
                threadId: o
            }), nC = null != ny && "notLoaded" !== ny.type, nN = !(0, R.f)(tE) && nl?.connectDomains.some(e => (0, eF.d)(new URL(e).hostname)) === !0, nw = (0, tt.a)(ew, r), nR = null != n_ ? new URL(n_) : null, nP = tn?.sandboxFeatures, nS = nP?.join(";"), nD = eC.a?.mcpAppSandbox == null && (nP?.includes("local-network-access") === !0 || (0, eF.g)(nl) || nN && nR?.protocol === "https:" && (0, eF.d)(nR.hostname)), nG = (0, A.useEffectEvent)(() => {
                (0, e_.D)(ni(), ez, {
                    sandboxGeneration: tz.sandboxGeneration + 1
                })
            }), nx = (0, N._)(), nL = t?.value.kind === "chatgpt" && null != t.value.conversationId && o === `chatgpt:${t.value.conversationId}`, nO = o.startsWith("chatgpt:") ? "chatgpt" : "codex", nM = (0, T.z)(t?.get(tx, ez) ?? null), nF = (0, A.useEffectEvent)(() => t?.get(tx, ez).get() ?? null), nk = (0, T.z)(z.l.activeTab$), nH = (0, T.z)($.g), nU = (0, T.z)(tr.a), nW = (0, T.z)(eL.a), nj = nW["--color-background-primary"], {
                isWidgetReady: nV
            } = tz, nY = (0, e_.e)(tz), nq = !k && "fullscreen" === nY, nB = tz.displayMode, nz = k && eB, nK = (0, A.useRef)(!1), nX = (0, A.useRef)(null), n$ = (0, A.useRef)(null), nZ = (0, A.useRef)(null), nJ = (0, A.useRef)(null), nQ = (0, T.x)(e_.g, ez), n0 = (0, A.useRef)(null), n1 = (0, A.useRef)(null), n2 = e => {
                if (!(0, R.f)(tE)) return null;
                let t = t$.get(e_.h, eX);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eW.d)({
                    appContext: eZ.appContext,
                    invocationResourceUri: eZ.invocationResourceUri,
                    originTool: eZ.originTool,
                    originToolDefinition: e.tools[eZ.originTool],
                    server: tE,
                    tools: eY(e)
                });
                t$.set(e_.i, e => {
                    let t = e.get(eX);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let r = new Map(e);
                    return r.set(eX, {
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
                let r = t$.get(e_.h, eX)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [n3, n5] = (0, A.useState)(null), [n6, n8] = (0, A.useState)(null), [n4, n7] = (0, A.useState)(!1), [n9, ae] = (0, A.useState)(null), [at, an] = (0, A.useState)(null), aa = at?.api ?? null, ar = at?.widgetId ?? null, ao = (0, e9.a)(e => tp?.(e) ?? null), ai = (0, R.f)(tE) && (0, I.Mh)(nA, "mcpEventStream"), as = (0, A.useMemo)(() => new eJ({
                scope: tQ,
                hostId: em,
                mcpAppId: ez,
                originResourceUri: eZ.originResourceUri,
                resolveResourceWatchPath: ao,
                server: tE
            }), [tQ, em, ez, eZ.originResourceUri, ao, tE]), al = (0, A.useMemo)(() => new eK({
                scope: tQ,
                hostId: em,
                server: tE
            }), [tQ, em, tE]), [ac, au] = (0, A.useState)(na), ad = null != nT && t8.has(nT), ap = ad && null != aa && (ac.canGoBack || ac.canGoForward), {
                cancel: a_,
                confirmation: aE,
                confirm: af,
                request: am
            } = (0, eD.a)(eS.a), ag = tn?.viewerHeader === !0, ah = tn?.forwardedRequestMethods, aT = ah?.join(";") || void 0, aI = JSON.stringify(tn?.experimentalCapabilities), ab = tn?.openFile, av = (0, T.z)(e6.j), aA = (0, T.x)(W.a, {
                name: "codex.browser"
            }), ay = !av && aA.isCapable, aC = ay || nI && nv, aN = !av && (void 0 === ab ? (0, I.zi)((0, eb.a)(tQ, em)) : null != ab), aw = null != tn, aR = tn?.expectedReadySignal, aP = tn?.pluginSuggestions != null, aS = !0 === eZ.isVerifiedFirstParty, aD = tn?.displayMode === "modal", aG = (0, A.useEffectEvent)(() => tn), ax = tn?.onRequestClose != null || eh, aL = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, R.f)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: tn,
                server: tE,
                connectorId: nT,
                widgetScope: eZ
            }), aO = null != aL, aM = aL?.requestTargetedReply != null || tn?.setTargetedReply != null || tn?.requestTargetedReply != null, aF = aO || tn?.showToast != null, ak = (0, A.useEffectEvent)(() => aL), aH = (0, A.useEffectEvent)(e => aL?.viewMode ?? tn?.displayMode ?? e), aU = tn?.requestCheckout != null, aW = tn?.openConversationOverlay != null, aj = tn?.openPromptInput != null, aV = tn?.autofill != null, aY = tn?.openInApp != null, aq = aY && tn?.openInApp?.hideButton !== !0 && tn?.openInApp?.baseUrl != null && null !== tz.openInAppUrl, aB = tn?.presentation != null, az = tn?.presentation?.requestFocusedObject != null, aK = tn?.presentation?.requestCloseFocusedObject != null, aX = tn?.presentation?.isSidebarOpen === !0, a$ = tn?.downloadBlob != null, aZ = tn?.triggerHaptic != null, aJ = tn?.files != null, aQ = tn?.share != null, a0 = tn?.requestConnectSheet != null, a1 = tn?.requestReconnectConnector != null, a2 = tn?.requestLinkToConnector != null, a3 = tn?.isTombstone === !0, a5 = (0, A.useEffectEvent)(() => (function(e) {
                let {
                    mcpAppId: t,
                    adapter: n,
                    server: a,
                    connectorId: r,
                    widgetScope: o
                } = e;
                if ((0, R.f)(a) && r === eu.a && ("internal://ledger" === o.originResourceUri || o.originResourceUri?.startsWith("internal://ledger") && o.originTool.endsWith("manage_linked_accounts")) && !0 === o.isVerifiedFirstParty && n?.finance != null) return n.finance
            })({
                mcpAppId: ez,
                adapter: tn,
                server: tE,
                connectorId: nT,
                widgetScope: eZ
            })), a6 = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: o
                } = t, {
                    originResourceUri: i
                } = r;
                if ((0, R.f)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === i || "internal://ads-manager-account-setup" === i || "internal://ads-manager-delivery" === i)) return {
                    sendInstrument: t => (function(e, t, n) {
                        let {
                            conversationId: a,
                            originResourceUri: r
                        } = n;
                        ! function(e, t, n) {
                            let a = x.safeParse(t);
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
                                    let n = L.safeParse(r);
                                    "count" === t.type && n.success && e.get(S.a).count("payments", "payment_elements_stage", n.data)
                                } else {
                                    let a = O.safeParse(r);
                                    if (!a.success) return;
                                    let {
                                        failure_category: o,
                                        ...i
                                    } = a.data, s = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: n,
                                        client_type: "browser"
                                    }, l = e.get(S.a);
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
                        let o = H.safeParse(t);
                        if (!o.success) return;
                        let i = o.data,
                            s = "browser";
                        if ("event" === i.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = F[i.label], r = i.payload;
                            if (!r[n]) return;
                            (0, D.a)(e, P, {
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
                        let l = Object.entries(G).flatMap(e => {
                                let [t, n] = e, a = i.tags.find(e => e?.key === t), r = w.enum(n).safeParse(a?.value);
                                return r.success ? [{
                                    key: t,
                                    value: r.data
                                }] : []
                            }),
                            {
                                requiredField: c
                            } = F[i.label],
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
                        e.get(S.a).count("ecosystem", i.label, d)
                    })(e, t, {
                        conversationId: o,
                        originResourceUri: i
                    })
                }
            }(t$, {
                server: tE,
                connectorId: nT,
                widgetScope: eZ,
                conversationId: o
            }), a8 = (0, A.useEffectEvent)(() => a6), a4 = null != ti && (0, R.f)(tE) && aw && nT === eu.a, a7 = (0, A.useMemo)(() => null != tM && "object" == typeof tM ? tM : null, [tM]), a9 = (0, A.useMemo)(() => null == tF ? null : (0, eQ.i)({
                isCodexAppsServer: (0, R.f)(tE),
                toolResult: tF
            }), [tE, tF]), re = (0, A.useMemo)(() => null == a9 ? null : (0, eQ.e)(a9), [a9]), rt = void 0 === tB ? re : tB, rn = (0, A.useEffectEvent)(() => rt), ra = (0, A.useMemo)(() => null == a9 ? null : (0, eQ.f)(a9), [a9]), rr = (0, A.useMemo)(() => tk ?? (0, eQ.c)(a9, {
                preserveStructuredContentNull: tn?.preserveStructuredContentNull
            }), [tn?.preserveStructuredContentNull, tk, a9]), ro = tU ?? (rr?.isError === !0 ? "error" : void 0), ri = (0, A.useMemo)(() => null == ro ? ra : {
                ...ra,
                status: ro
            }, [ro, ra]), rs = (0, A.useEffectEvent)(() => ({
                sourceMcpAppId: eX,
                toolInput: a7,
                toolOutput: re,
                toolResponseMetadata: ri,
                toolStatus: ro,
                toolResult: a9,
                toolResultNotification: rr,
                toolCallCancellationReason: tq
            })), rl = (0, A.useEffectEvent)(e => null == eO || null != ro ? null : (0, eA.a)({
                scope: t$,
                conversationId: o,
                hostId: em,
                installPlugin: eO,
                mcpAppScope: eZ,
                navigate: nx,
                access: ew,
                server: tE,
                sessionId: ez,
                sourceMcpAppId: eX,
                toolResult: e
            })), rc = null == np ? void 0 : (0, tY.b)(np, t2.locale), ru = ew.getSandboxPartition?.(a) ?? v.b, rd = null == rc ? null : (0, tY.a)(rc), rp = (0, A.useEffectEvent)(() => {
                if (null == rc) return null;
                let e = (0, v.i)(rc);
                return null == e ? null : {
                    csp: nl,
                    experimentalCapabilities: tn?.experimentalCapabilities,
                    html: nd,
                    locale: t2.locale,
                    sandboxOrigin: e,
                    sourceUrl: rc
                }
            }), r_ = n9?.isConnected === !0 ? n9 : null, rE = nr?.isConnected === !0 ? nr : null, rf = null != rE || null != r_, rm = !nq && !k && nr?.dataset.mcpAppInlineSurface === "card", rg = "iframe", rh = "function" == typeof n3?.moveBefore, rT = U && rh, rI = rE ?? (!nq && n3?.isConnected ? n3.parentElement : null), rb = rI?.closest("[data-mcp-app-scroll-host]"), rv = !nq && (!k && Y || null != rb), rA = eB && !(k && ag) && !rv && (rh || !eh), ry = rA ? null : rI?.closest("[data-mcp-app-portal-target='true']") ?? (!rh && n3?.isConnected ? n3.parentElement : null), rC = rh || rA ? n3 : ry, rN = (0, A.useEffectEvent)(e => {
                let t = th(e, k, nq ? "fullscreen" : "inline");
                return !k && "inline" === nY && nu && rE?.parentElement != null && (t.maxWidth = rE.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rw = (0, A.useEffectEvent)(() => {
                (0, eE.c)(ni(), {
                    hostId: em,
                    pluginId: M,
                    server: tE
                }, ez)
            }), rR = (0, A.useEffectEvent)(() => ({
                safe: {
                    connectorId: nT,
                    mcpAppId: ez,
                    sandboxId: rd,
                    initId: (0, v.g)(n6?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: em,
                    server: tE
                }
            })), rP = (0, A.useEffectEvent)(e => {
                (0, D.a)(t$, u.o, {
                    attributionId: nT ?? void 0,
                    conversationId: "chatgpt" === nO ? o.slice(8) : void 0,
                    host: "chatgpt" === nO ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rS = (0, A.useEffectEvent)((e, t) => {
                if (nc(ni().get(e_.r, ez)?.sandboxError)) return;
                let n = (0, ey.a)(t),
                    a = rR();
                (eT.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nO,
                        retryCount: tz.sandboxGeneration,
                        stage: e,
                        connectorId: a.safe.connectorId,
                        mcpAppId: a.safe.mcpAppId,
                        sandboxId: a.safe.sandboxId,
                        initId: a.safe.initId
                    },
                    sensitive: {
                        error: n,
                        hostId: a.sensitive.hostId,
                        server: a.sensitive.server
                    }
                }), nJ.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tz.sandboxGeneration) ? (0, e_.D)(ni(), ez, {
                    sandboxGeneration: 1
                }) : (0, e_.D)(ni(), ez, {
                    isWidgetReady: !1,
                    sandboxError: n
                })
            }), rD = (0, A.useEffectEvent)(e => {
                let t = nn.safeParse(e);
                t.success && t$.get(e_.r, ez)?.displayMode === "inline" && (0, e_.D)(t$, ez, {
                    intrinsicHeight: t.data
                })
            }), rG = (0, A.useEffectEvent)(e => {
                let t = nn.safeParse(e);
                nu && t.success && (0, e_.D)(t$, ez, {
                    intrinsicWidth: t.data
                })
            }), rx = (0, A.useEffectEvent)(e => {
                if (!ad) return;
                let t = t6.safeParse(e);
                t.success && au({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rL = (0, A.useEffectEvent)(() => eh ? void(0, e_.b)(t$, ez) : tn?.onRequestClose?.()), rO = (0, A.useEffectEvent)(async (e, n) => {
                if (tn?.openExternal != null && await tn.openExternal(e, n)) return;
                let a = eU.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eZ.isVerifiedFirstParty) return void(0, eH.a)(t$, a.data.href);
                    if ("popup" !== a.data.openMode && tn?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? t$, a.data.href, n)) return;
                    let e = (0, I.Hj)(a.data.href);
                    if (null != e) return void nx(e);
                    (0, el.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: tn?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rM = (0, A.useEffectEvent)(async (e, t) => {
                if (!a4 || null == ti) throw Error("Plaid Link is unavailable for this app");
                let n = t5.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ed.a)();
                return a(t$, {
                    accountId: ti,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rF = (0, A.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: o,
                    accountId: i,
                    frameAccountId: s
                } = t, l, c = void 0 !== I.Vb || null == l || l.content.conversationId.startsWith("chatgpt:") ? void 0 : null.resourceSnapshot.access.accountId, u = i ?? c;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!o.aborted && (s ?? c) === u && e.get(ep.f) === u && await a(r, o) && !o.aborted && e.get(ep.f) === u) {
                    let t = e.get(e_.r, n);
                    if (null == t) return;
                    (0, e_.D)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(t$, {
                mcpAppId: ez,
                requestModal: a5()?.requestModal,
                payload: e,
                signal: t,
                accountId: ti,
                frameAccountId: n
            })), rk = (0, A.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: r,
                    showNavigationControls: o
                } = e;
                if (r?.displayMode === "modal") return !1 !== r.showModalCloseButton || o ? tm : tf;
                let i = "inline" === n && o ? tm : tf;
                return ("inline" !== n || a) && 0 !== t ? {
                    insets: {
                        ...i.insets,
                        bottom: t
                    }
                } : i
            })({
                composerOverlayReservePx: nU,
                displayMode: k ? "inline" : e,
                hasComposerOverlay: nz,
                hostAdapter: aG(),
                showNavigationControls: ap
            })), rH = (0, A.useEffectEvent)(() => {
                let e = t$.get(e_.r, ez) ?? tz;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? ef
                }
            }), rU = (0, A.useEffectEvent)(e => {
                let t = (0, e_.f)(t$, ez, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rH(),
                    safeAreaInsets: rk(t).insets
                }
            }), rW = (0, A.useEffectEvent)(e => {
                let t = t3.safeParse(e),
                    n = t$.get(e_.r, ez);
                if (t.success && (0, e_.a)(n, t.data.mode)) {
                    let n = !k && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nq && n3?.style.setProperty("display", "none"), aB && (0, e_.D)(t$, ez, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, e_.B)(t$, ez, a, "app_request"), null != aa && null != ar) {
                        let e = {
                            displayMode: a,
                            isTombstone: aG()?.isTombstone === !0,
                            viewParams: rt,
                            widgetId: ar
                        };
                        nX.current = e, (0, eM.h)(aa.setWidgetView(e));
                        let t = null == n3 ? null : tg({
                            ...rH(),
                            containerDimensions: th(n3, k, a),
                            locale: t2.locale,
                            deepLink: tl,
                            safeAreaInsets: rk(a).insets,
                            styleVariables: nW,
                            theme: tT(),
                            userAgent: tI(aG()?.device),
                            toolInfo: aG()?.toolInfo
                        });
                        n$.current = t, null != t && (0, eM.h)(aa.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: a
                    }
                }
                return eT.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: ez,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (n ?? tz).displayMode
                }
            }), rj = (0, A.useEffectEvent)(() => tl), rV = (0, A.useEffectEvent)(() => t$.get(e_.g, ez)), rY = (0, A.useEffectEvent)(() => {
                var e;
                e = tw ?? void 0, null != t && (0, Q.h)(t, ez, e)
            });
            (0, A.useEffect)(() => {
                rY()
            }, [ez, tw?.alt, tw?.knownAppId, tw?.logoDarkUrl, tw?.logoUrl]);
            let rq = (0, A.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (t$.get(e_.r, ez)?.sourceMcpAppId !== eX) return;
                    let a = (null != to ? tZ.nullable() : tZ).safeParse(t),
                        r = a.success ? a.data : null;
                    if (t$.set(e_.w, ez, r), null != to && a.success) return to.save(a.data, n)
                }),
                rB = e => {
                    null != aa && (0, eM.h)(aa.navigate({
                        delta: e
                    }))
                },
                rz = {
                    name: null != tn ? eZ.originResourceUri ?? eZ.originTool : `${tE}.${eZ.originTool}`,
                    attribution: "connectorId" in ew.serverIdentity ? ew.serverIdentity.connectorId : void 0
                },
                rK = (0, A.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, ei.getMcpAppSubmit)(t, () => {
                            ew.assertActive(), aG()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? rz : {
                        ...rz,
                        visuallyHidden: !0
                    }, e, r)
                }),
                rX = async function(e, t, n, a, r, o) {
                    let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tG.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: o,
                        modelContextAttachments: i,
                        requestConfirmation: e => am({
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
                }, r$ = (0, A.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eM.c)("App messages are disabled for this view", c.r.MethodNotFound);
                    let r = (a = ak(), n.aborted || a && ev.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: o,
                        isVisible: i,
                        prompt: l,
                        title: u
                    } = (0, ex.c)(e), d = rK(n, i);
                    if (null == d) throw (0, eM.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                    let p = t.get(J.w).filter(e => "context" === e.kind),
                        _ = crypto.randomUUID(),
                        E = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await rX({
                            source: "mcp_app",
                            sourceId: ez,
                            widgetSource: eZ.widgetSource,
                            text: l,
                            structuredContent: o ?? (0, ex.b)(rV())
                        }, l, d, n, u, void 0, p)
                    } catch (e) {
                        throw E?.({
                            attemptId: _,
                            result: "FAILED",
                            durationMs: performance.now() - f
                        }, o), e
                    }
                    E?.({
                        attemptId: _,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - f
                    }, o), (0, Q.b)(t, p)
                }), rZ = e => {
                    e.throwIfAborted(), ew.assertActive(), tn?.assertActive?.()
                }, rJ = async (e, t, n, a) => {
                    rZ(t);
                    let r = null != tn ? await tn.handleRequest(e, t, eZ, n) : await a();
                    return rZ(t), r
                }, rQ = async (e, t, n) => {
                    let a = await rJ({
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
                            } = e, c = await eV({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: o,
                                threadId: i
                            }), u = eY(c), d = n(c);
                            return {
                                ...(0, eM.a)(() => (0, eW.h)({
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
                            threadId: n.get(q.b, {
                                hostId: i,
                                conversationId: r
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        d.throwIfAborted(), c.assertActive();
                        let E = function(e, t) {
                                if (!(0, R.f)(e) || !tK(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            f = null == _.codexAppsResourceUri ? E : {
                                ...tK(E) ? E : {},
                                _codex_apps: {
                                    resource_uri: _.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, Z.a)({
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
                            if (r.startsWith("chatgpt:")) return (0, eQ.i)({
                                isCodexAppsServer: (0, R.f)(u),
                                toolResult: await (0, e0.c)(t, i, u, _.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: f,
                                    requestOptions: {
                                        widget: {
                                            conversationId: r,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let o = await (0, j.b)(n, i).callMcpTool({
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
                            return (0, eQ.i)({
                                isCodexAppsServer: (0, R.f)(u),
                                toolResult: o
                            })
                        } catch (e) {
                            throw (0, eM.d)(e, "MCP tool call failed")
                        }
                    })({
                        appScope: tQ,
                        scope: t$,
                        chatGptMessageId: eZ.chatGptMessageId,
                        conversationId: o,
                        getTrustedToolScope: n2,
                        hostId: em,
                        mcpAppId: ez,
                        mcpServerStatuses: te,
                        access: ew,
                        server: tE,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, b.s)(a)?.isError === !0) {
                        let t = eQ.g.safeParse(a).data;
                        eT.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: ez,
                                initId: (0, v.g)(n6?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: e.name,
                                error: t?.content.find(e => "text" === e.type)?.text ?? w.object({
                                    error: w.string()
                                }).safeParse(t?.structuredContent).data?.error
                            }
                        })
                    }
                    return a
                }, r0 = (0, A.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e5.b);
                    return rQ((0, eM.g)(t7, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), r1 = (0, A.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e5.b),
                        r = c.W.safeParse(e);
                    if (!r.success) throw (0, eM.e)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? c.r.InvalidParams : c.r.InvalidRequest);
                    let i = t$.get(q.b, {
                            hostId: em,
                            conversationId: o
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = r.data;
                    if (o.startsWith("chatgpt:") && t0.some(e => e === s)) throw (0, eM.c)("Resource subscriptions require a local Codex thread", c.r.MethodNotFound);
                    switch (s) {
                        case E.a: {
                            let {
                                path: e
                            } = (0, eM.g)(E.b, l, "Invalid MCP file open params");
                            if (!aN) throw (0, eM.c)("File opening is unavailable", c.r.MethodNotFound);
                            if (null != ab) return (0, D.a)(t$, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "file_open",
                                action: "requested"
                            }), await ab(e, n), {};
                            if (!(0, I.Hh)(e) || !(0, I.Kh)(e)) throw (0, eM.c)("Cannot open this file path", c.r.InvalidParams);
                            return (0, D.a)(t$, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: t$,
                                path: e,
                                cwd: null,
                                hostConfig: (0, eb.a)(tQ, em),
                                hostId: em,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ah?.includes("ping") ? rJ(r.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tP.safeParse(e);
                                if (!t.success) throw (0, eM.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: n
                                } = t.data;
                                if (tS(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw (0, eM.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(l);
                            n.throwIfAborted();
                            let a = e.options?.target ?? "active";
                            if ((0, D.a)(t$, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eM.c)("MCP app messages are disabled for this view", c.r.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, er.d)(t) && null == (0, er.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tD(a, t)
                                    }
                                }(e.content, {
                                    sourceName: e2,
                                    icon: tw,
                                    server: tE,
                                    widgetSource: eZ.widgetSource
                                });
                                if (aG()?.assertActive?.(), "new" === e.options.target) {
                                    if (av) throw (0, eM.c)("New drafts are unavailable in this view", c.r.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(tQ, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eM.c)("The composer is unavailable", c.r.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(J.v) || t.get(J.V) || null != t.get(et.b) || t.get(eo.g) || t.get(J.q) || !(0, ei.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, J.Eb)(t, e => {
                                        null != n.attachment && e.mcpAppModelContextAttachments.push(n.attachment)
                                    }), (0, ea.i)(t, {
                                        prefersReducedMotion: !0
                                    })
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
                                for (let t of e) "text" === t.type && null == (0, er.a)(t) ? a.push(t.text) : r.push(t);
                                let o = tD(r, t),
                                    i = a.join("\n\n");
                                return {
                                    prompt: i.trim() ? i : n.formatMessage({
                                        id: "codex.mcpApp.contentMessage",
                                        defaultMessage: "Shared content from {appName}",
                                        description: "Message shown in the conversation when an MCP app sends attachments without text"
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
                                sourceName: e2,
                                icon: tw,
                                server: tE,
                                sessionId: ez,
                                widgetSource: eZ.widgetSource
                            }, t2), s = !1;
                            e.options?.target === "new" && null != rd && eC.a?.mcpAppSandbox != null && (rZ(n), s = await eC.a.mcpAppSandbox.consumeUserGesture((0, eU.a)(rd, n6)).catch(() => !1) === !0, rZ(n));
                            let p = e.options?.target === "new" ? (0, tG.a)({
                                scope: tQ,
                                recipient: t,
                                getNewThreadDestination: ta,
                                globalEntrypointIdentity: "global" === nw.source ? {
                                    connectorId: nw.connectorId,
                                    pluginId: nw.pluginId
                                } : void 0,
                                canCreateCodexThreads: ay,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (av) throw (0, eM.c)("New threads are unavailable in this view", c.r.MethodNotFound);
                                    rZ(n)
                                },
                                sourceName: e2,
                                toolOrigin: rz,
                                signal: n
                            }) : rK(n);
                            if (null == p) throw (0, eM.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                            let _ = t?.get(J.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === ez
                            }) ?? [];
                            return await rX(o, r, p, n, void 0, i, _), null != t && (0, Q.b)(t, _), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eM.g)(t4, l, "Invalid MCP file download params");
                            return (0, e7.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eM.c)("MCP model context requires an available composer", c.r.MethodNotFound);
                            let e = (0, eM.g)(tJ, l, "Invalid MCP model context params");
                            if (null != rK() && tS(e.content), nL && e.content?.some(e => "image" === e.type && !(0, I.Ii)({
                                    type: e.mimeType
                                }))) throw (0, eM.c)("Invalid MCP model context params", c.r.InvalidParams);
                            if (null != to && t$.get(e_.r, ez)?.sourceMcpAppId !== eX) throw (0, eM.c)("The widget source is no longer active", -32e3);
                            aG()?.onModelContextUpdate?.(e, ez), (0, K.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    r = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eZ.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tE,
                                    composerIcon: tw ?? void 0,
                                    sourceName: e2,
                                    id: ez,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, eq.f)(t$, ez, t.get(J.w).find(e => e.id === ez) ?? null)), r
                            })(e);
                            if ((0, D.a)(t$, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != to) {
                                let t = await rq(eX, e, !0);
                                (0, eM.b)(t)
                            }
                            return null == n ? {} : {
                                _meta: {
                                    [f.a]: {
                                        updateId: n
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return rQ((0, eM.g)(t7, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eM.g)(t9, l, "Invalid MCP resource read params");
                            if (rZ(n), (0, D.a)(t$, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "resource",
                                    action: "read"
                                }), tn?.readHostResource != null) {
                                rZ(n);
                                let t = await tn.readHostResource(e, n);
                                if (rZ(n), null != t) return t
                            }
                            return (0, eM.a)(() => {
                                (0, eW.a)({
                                    mcpAppScope: eZ,
                                    server: tE,
                                    uri: e.uri
                                })
                            }), await rJ({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, e$.d)({
                                        scope: t$,
                                        appContext: eZ.appContext,
                                        connectorId: (0, R.f)(tE) ? nT : null,
                                        hostId: em,
                                        mcpAppId: ez,
                                        originCallId: eZ.originCallId ?? null,
                                        threadId: o,
                                        server: tE,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw (0, eM.d)(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eM.g)(t9, l, "Invalid MCP resource subscribe params");
                            return rZ(n), (0, D.a)(t$, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "resource",
                                action: "subscribe"
                            }), await as.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eM.g)(t9, l, "Invalid MCP resource unsubscribe params");
                            return rZ(n), (0, D.a)(t$, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await as.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eM.g)(ne, l, "Invalid MCP event subscribe params"),
                                t = t$.get(e_.h, eX)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = n2(await eV({
                                    scope: t$,
                                    hostId: em,
                                    mcpServerStatuses: te,
                                    server: tE,
                                    threadId: i
                                }))), null == n) throw (0, eM.c)("MCP event subscriptions require a trusted connector scope", c.r.InternalError);
                            return al.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eM.g)(nt, l, "Invalid MCP event unsubscribe params");
                            return al.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return rJ(r.data, n, a, async () => {
                                let e = await eV({
                                        scope: t$,
                                        hostId: em,
                                        mcpServerStatuses: (0, R.f)(tE) ? te : void 0,
                                        server: tE,
                                        threadId: i
                                    }),
                                    t = eY(e),
                                    n = n2(e);
                                return {
                                    tools: (0, eM.a)(() => (0, eW.e)({
                                        server: tE,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return rJ(r.data, n, a, async () => (0, R.f)(tE) ? {
                                resources: []
                            } : {
                                resources: (await eV({
                                    scope: t$,
                                    hostId: em,
                                    server: tE,
                                    threadId: i,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return rJ(r.data, n, a, async () => (0, R.f)(tE) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eV({
                                    scope: t$,
                                    hostId: em,
                                    server: tE,
                                    threadId: i,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return rJ(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return rJ(r.data, n, a, () => {
                                throw (0, eM.c)(`Unsupported MCP proxy method: ${s}`, c.r.MethodNotFound)
                            })
                    }
                }), r2 = (0, A.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(963552)]).then(n.bind(n, "SEK8"));
                    rZ(t), a(ni(), {
                        Frame: no,
                        sourceMcpAppId: eX,
                        signal: t,
                        handleRequest: async (e, n) => c.Z.parse(await r1(e, n ?? t))
                    }, e)
                });
            (0, A.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", n5(e), () => {
                    e.remove(), n5(t => t === e ? null : t), n7(!1)
                }
            }, [ez]), (0, A.useLayoutEffect)(() => {
                null != n3 && null != n6 && function(e) {
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
                    t.className = (0, ty.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", r && "z-50", !s && !a && !i && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, ty.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", _ && "rounded-lg", i && c && "borderedCardSandbox-xKKhHG", s && "min-h-0 flex-1"), n.style.backgroundColor = !r && (o || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: n3,
                    sandboxElement: n6,
                    fullSurface: k,
                    liftModal: rT,
                    inheritHostBackground: eR,
                    isCardInlineSurface: rm,
                    isFullScreen: nq,
                    isWidgetVisible: nV && null != nY,
                    prefersBorder: nE,
                    surfaceBackgroundColor: nj,
                    title: tL,
                    globalSurface: tO
                })
            }, [k, rT, n3, eR, rm, nq, nV, nY, nE, n6, nj, tL, tO]), (0, A.useLayoutEffect)(() => {
                if (null == n3) return;
                if (null != rE) {
                    let e = rE.dataset.overlayOwner;
                    null == e ? n3.removeAttribute("data-overlay-owner") : n3.setAttribute("data-overlay-owner", e)
                }
                let e = nq ? r_ : rE,
                    t = rA ? (0, X.a)() : ry;
                if (rT && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === n3.style.display;
                    n3.style.display = "none", e || eT.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rR().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (n3.parentElement !== t && (n3.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(n3, null) : t.appendChild(n3), eT.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rR().safe.mcpAppId,
                                showInModal: rT
                            }
                        })), n4 || n7(!0), null == e) {
                        let e = "none" === n3.style.display;
                        n3.style.display = "none", e || eT.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rR().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete n3.dataset.mcpAppParked,
                        function(e) {
                            let {
                                sharesScrollHost: t,
                                frameElement: n,
                                frameContainer: a,
                                fullSurface: r = !1,
                                modalOpen: o = !1,
                                sandboxElement: i,
                                isFullScreen: s,
                                isInGlobalHost: l,
                                anchorElement: c,
                                rightPanelAnimationProgress: u,
                                rightPanelLayoutTick: d
                            } = e, p = !o && (s || r) ? c.closest('[data-app-shell-focus-area="right-panel"]') : null, _ = o || s || l, E = o ? (0, tA.b)(n) : void 0, f = null, m = s && !l ? new MutationObserver(() => h()) : null, g = new ResizeObserver(() => h()), h = () => {
                                let e = c.currentCSSZoom ?? 1,
                                    t = (0, tC.a)(c, e),
                                    u = {
                                        ...t
                                    },
                                    d = null == p ? "" : (0, tC.b)(t, (0, tC.a)(p, e));
                                n.style.position = _ ? "fixed" : "absolute";
                                let E = null;
                                if (_ ? l || o || (E = n.offsetParent) : E = a, null != E) {
                                    let t = (0, tC.a)(E, e);
                                    u.x -= t.x, u.y -= t.y
                                }
                                _ || (u.x += a.scrollLeft, u.y += a.scrollTop);
                                let g = "";
                                o || (g = s ? "43" : "1"), Object.assign(n.style, {
                                    ...(0, tC.d)(u, e / (a.currentCSSZoom ?? 1)),
                                    clipPath: d,
                                    display: "",
                                    zIndex: g
                                });
                                let h = r || s ? (0, tC.c)(c) : null;
                                if (n.style.borderRadius = h?.join(" ") ?? "", null != i)
                                    if (null == h) i.style.borderRadius = "";
                                    else {
                                        let e = getComputedStyle(n),
                                            t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                            a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                        i.style.borderRadius = [t, a].map(e => h.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                                    } null != m && E !== f && (m.disconnect(), f = E, null != E && m.observe(E, {
                                    attributeFilter: ["class", "style"],
                                    attributes: !0
                                }))
                            };
                            g.observe(a), null != p && g.observe(p);
                            let T = t && !_ && !r && a.contains(c),
                                I = e => {
                                    e.target instanceof Element && e.target !== a && e.target.contains(c) && h()
                                };
                            T && a.addEventListener("scroll", I, !0);
                            let b = (0, tv.b)(c, n, h, T ? {
                                    ancestorScroll: !1,
                                    ancestorResize: !1
                                } : void 0),
                                v = (0, tN.a)({
                                    update: h,
                                    motionValues: [d, s ? u : void 0]
                                });
                            return () => {
                                E?.(), v.disconnect(), b(), T && a.removeEventListener("scroll", I, !0), g.disconnect(), m?.disconnect()
                            }
                        }({
                            sharesScrollHost: rb?.contains(t) === !0,
                            frameElement: n3,
                            frameContainer: t,
                            fullSurface: k,
                            modalOpen: rT,
                            sandboxElement: n6,
                            isFullScreen: nq,
                            isInGlobalHost: rA,
                            anchorElement: e,
                            rightPanelAnimationProgress: nH,
                            rightPanelLayoutTick: tc
                        })
                };
                return k || nq || rT || rA || !eh || null == e || e.hidden || "true" !== n3.dataset.mcpAppParked ? n() : (0, td.a)(e, n)
            }, [n3, k, rT, eh, rb, rE, nq, rA, n4, nH, tc, n6, r_, ry]);
            let r3 = tn?.autoFocus === !0;
            (0, A.useEffect)(() => {
                r3 && nV && null != rE && n6?.focus()
            }, [r3, nV, rE, n6]), (0, A.useLayoutEffect)(() => (nK.current = !1, () => {
                nK.current = !0
            }), [ez, t$]);
            let r5 = (0, A.useEffectEvent)(async () => {
                    try {
                        if (tn?.assertActive?.(), !aq) return;
                        let e = tz.openInAppUrl ?? w.string().nullable().parse(await aa?.getCurrentPath?.(void 0));
                        if (tn?.assertActive?.(), null == e) return;
                        let t = tn?.openInApp?.validateUrl(null == tz.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                r6 = (0, A.useEffectEvent)(e => {
                    let t = t$.get(z.l.tabs$).some(e => e.tabId === (0, e4.b)(ez));
                    (0, e4.c)(t$, {
                        source: {
                            hostId: em,
                            server: tE,
                            connectorId: nT ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tw,
                        mcpAppId: ez,
                        onExitFullScreen: e,
                        onPanelElementChange: ae,
                        title: tz.displayModeTitle ?? tR,
                        openInAppName: tn?.openInApp?.appName,
                        onOpenInApp: aq ? () => {
                            r5()
                        } : void 0
                    })
                }),
                r8 = (0, A.useEffectEvent)(() => {
                    let e = t$.get(e_.r, ez);
                    !nK.current && e?.isOpen && "fullscreen" === e.displayMode && (0, e_.c)(t$, ez)
                }),
                r4 = (0, A.useEffectEvent)(e => {
                    let t = aG()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nw);
                    else {
                        let t = w.object({
                            type: w.literal("interaction"),
                            label: w.string()
                        }).safeParse(e);
                        t.success && (0, D.a)(t$, u.l, {
                            ...nw,
                            host: "codex",
                            actionType: (0, tt.b)(t.data.label)
                        })
                    }
                });
            (0, A.useLayoutEffect)(() => {
                nq ? r6(r8) : (0, e4.a)(t$, ez)
            }, [nq, ez, t$, tw?.alt, tw?.knownAppId, tw?.logoDarkUrl, tw?.logoUrl, tR, tz.displayModeTitle, aq, tn?.openInApp?.appName]);
            let r7 = (0, A.useEffectEvent)(() => {
                    let e = nq ? r_ : rE;
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
                r9 = null != n3 && n4 && null != rC && null != rd && null != ru,
                oe = (0, A.useEffectEvent)(e => {
                    let t;
                    if (!r9) return;
                    let n = e1.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: ez,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    nJ.current = n, n.mark("surface_mcp_app"), (0, e_.D)(ni(), ez, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), au(na), n0.current = null, n1.current = null;
                    let r = rp();
                    if (null == r) return void rS("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: o,
                        iframeAllow: i
                    } = (0, tu.b)(ng, nP, nD), u = (0, ek.a)(rg, rd, ru);
                    u instanceof HTMLIFrameElement && (u.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), u.allow = i, u.allowFullscreen = !0), u.classList.add("pointer-events-none", "opacity-0"), n3.appendChild(u), n8(u), n.mark("rendered");
                    let d = new AbortController,
                        h = !1,
                        T = new eP,
                        b = null == s ? null : new eg(s),
                        A = null,
                        y = crypto.randomUUID(),
                        C = rV(),
                        N = rn(),
                        {
                            sourceMcpAppId: R,
                            toolInput: P,
                            toolOutput: S,
                            toolResponseMetadata: G,
                            toolResult: x,
                            toolStatus: L,
                            toolResultNotification: O,
                            toolCallCancellationReason: M
                        } = rs(),
                        F = new tX.b(ni(), R, e => {
                            rO({
                                href: e
                            }, d.signal).catch(e => {
                                d.signal.aborted || (0, ey.d)(e, rR())
                            })
                        });
                    n0.current = null == x || null == S ? null : {
                        widgetId: y,
                        widgetState: C,
                        sourceMcpAppId: R,
                        toolInput: P,
                        toolOutput: S,
                        toolResponseMetadata: G,
                        toolStatus: L,
                        toolResult: O,
                        toolCallCancellationReason: M
                    };
                    let k = aP ? {
                            requestConnectPlugin: async e => aG()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tj.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aG()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aG()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aG()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        H = null == x ? null : k ?? rl(x),
                        U = null == H ? null : {
                            ...H,
                            requestDeclinePluginSuggestions: k?.requestDeclinePluginSuggestions ?? (null == H.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = rs().toolResult,
                                    t = null == e ? void 0 : rl(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await eC.a?.mcpAppSandbox?.consumeUserGesture((0, eU.a)(rd, u)).catch(() => !1) || d.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        W = () => {
                            let e = aG()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        j = {
                            ...U,
                            downloadBlob: a$ ? e => aG()?.downloadBlob?.(e, d.signal) : void 0,
                            triggerHaptic: aZ ? e => aG()?.triggerHaptic?.(e, d.signal) : void 0,
                            requestCheckout: aU ? async e => {
                                d.signal.throwIfAborted();
                                let t = aG();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, d.signal)
                            } : void 0,
                            requestModal: async e => {
                                d.signal.aborted || (aO ? await ak()?.requestModal(e) : null != a5() && (aG()?.requestModal == null || w.object({
                                    params: w.object({
                                        view: w.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rF(e, d.signal, ti) : aG()?.requestModal != null ? await aG()?.requestModal?.(e, d.signal) : await r2(e, d.signal))
                            },
                            uploadFile: aJ ? (e, t) => W().uploadFile(e, t, d.signal) : void 0,
                            getFileDownloadUrl: aJ ? e => W().getFileDownloadUrl(e, d.signal) : void 0,
                            getFileMetadata: aJ ? e => W().getFileMetadata(e, d.signal) : void 0,
                            selectFiles: aJ ? () => W().selectFiles(d.signal) : void 0,
                            share: aQ ? async e => {
                                d.signal.throwIfAborted(), await aG()?.share?.(e, d.signal)
                            } : void 0,
                            requestLinkToConnector: aO || a2 ? async e => d.signal.aborted ? {
                                didConnect: !1
                            } : await (ak()?.requestLinkToConnector ?? aG()?.requestLinkToConnector)?.(e, d.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: aF ? e => {
                                d.signal.aborted || (ak()?.showToast ?? aG()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aD || aO && ax || aB ? () => {
                                d.signal.aborted || aG()?.allowsInteractiveDismissal === !1 || (aD || aO || aG()?.displayMode != null ? rL() : rW({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: e => {
                                let t = A?.notifyMcpAppsMcpNotification;
                                if (ag && null != t) {
                                    let n = F.handleRequest(e, d.signal, e => (0, eM.h)(t(e)));
                                    if (null != n) return n
                                }
                                let n = T.handleRequest(e, {
                                    sandboxElement: u,
                                    sandboxId: rd,
                                    initId: Y,
                                    signal: d.signal,
                                    notify: A?.notifyMcpAppsMcpNotification
                                });
                                if (null != n) return n;
                                let a = _.h.safeParse(e);
                                if (a.success && null != g) {
                                    for (let {
                                            component: e,
                                            level: t,
                                            message: n,
                                            metadata: r
                                        }
                                        of a.data.params.entries) eT.a[t](n, {
                                        safe: {
                                            component: e,
                                            metadata: r,
                                            pluginId: g
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let r = _.g.safeParse(e);
                                return r.success && null != b ? b.handleRequest(r.data.params) : r1(e, d.signal).catch(t => {
                                    if (!d.signal.aborted) {
                                        let n = rR();
                                        eT.a.warning("App request failed", {
                                            safe: {
                                                ...(0, ey.b)(t),
                                                connectorId: n.safe.connectorId,
                                                mcpAppId: n.safe.mcpAppId,
                                                sandboxId: n.safe.sandboxId,
                                                initId: n.safe.initId
                                            },
                                            sensitive: {
                                                method: c.W.safeParse(e).data?.method,
                                                hostId: n.sensitive.hostId,
                                                server: n.sensitive.server,
                                                error: t
                                            }
                                        })
                                    }
                                    throw t
                                })
                            },
                            callTool: (e, t) => r0(e, t, d.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!d.signal.aborted) {
                                    if (ey.h.safeParse(e).success) return void(0, ey.d)(e, rR());
                                    rS("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rD,
                            notifyIntrinsicWidth: rG,
                            notifyNavigation: e => {
                                d.signal.aborted || rx(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                d.signal.aborted || aG()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rO(e, d.signal),
                            openPlaidLink: a4 ? e => rM(e, d.signal) : void 0,
                            initializeMcpApp: e => {
                                if (d.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rU(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rS("configuration", e), e
                                }
                            },
                            requestClose: ax ? rL : void 0,
                            requestDisplayMode: rW,
                            openConversationOverlay: aW ? async e => {
                                d.signal.throwIfAborted(), await aG()?.openConversationOverlay?.(e, d.signal)
                            } : void 0,
                            notifyAutofillCandidates: aV ? e => {
                                d.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: aj ? e => {
                                d.signal.throwIfAborted();
                                let t = aG()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, u, d.signal)
                            } : void 0,
                            setOpenInAppUrl: aY ? e => {
                                d.signal.throwIfAborted();
                                let {
                                    href: t
                                } = w.object({
                                    href: w.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, e_.D)(ni(), ez, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aG()?.openInApp?.validateUrl(t);
                                null != n && (0, e_.D)(ni(), ez, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: az ? async e => {
                                d.signal.throwIfAborted(), await aG()?.presentation?.requestFocusedObject?.(e, d.signal)
                            } : void 0,
                            requestCloseFocusedObject: aK ? async () => {
                                d.signal.throwIfAborted(), await aG()?.presentation?.requestCloseFocusedObject?.(d.signal)
                            } : void 0,
                            requestTargetedReply: aM ? async e => {
                                if (d.signal.aborted) return;
                                let t = ak()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aG()?.setTargetedReply;
                                if (null != n) return void n(e, d.signal);
                                let a = aG()?.requestTargetedReply;
                                null != a && await (0, eS.b)(e, a, am, d.signal)
                            } : void 0,
                            requestReconnectConnector: a1 ? async () => {
                                let e = aG()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(d.signal)
                            } : void 0,
                            requestConnectSheet: a0 ? e => {
                                let t = aG()?.requestConnectSheet;
                                if (null != t) return t(e, d.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => r$(e, d.signal),
                            sendInstrument: e => {
                                if (!d.signal.aborted) {
                                    if (aS || null != U) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, D.a)(ni(), t.messageType, t.payload)
                                    }
                                    ey.f.safeParse(e).success && ((0, ey.d)(e, rR()), rP("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), U?.sendInstrument(e);
                                    let t = a5() ?? a8();
                                    t?.sendInstrument(e), (null == t && null == U || w.object({
                                        type: w.literal("interaction")
                                    }).safeParse(e).success) && r4(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!d.signal.aborted) return rq(e, t, w.object({
                                    waitForPersistence: w.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        V = (0, eU.b)({
                            hostApiHandlers: j,
                            assertActive: () => {
                                d.signal.throwIfAborted(), ns(), aG()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: rd,
                            signal: d.signal,
                            sourceUrl: r.sourceUrl,
                            webview: u
                        }),
                        Y = (0, v.g)(u.getAttribute("src") ?? void 0),
                        q = rR();
                    eT.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nO,
                            connectorId: q.safe.connectorId,
                            mcpAppId: q.safe.mcpAppId,
                            sandboxId: q.safe.sandboxId,
                            initId: Y
                        },
                        sensitive: {
                            hostId: q.sensitive.hostId,
                            server: q.sensitive.server
                        }
                    });
                    let B = setTimeout(() => {
                        rS("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), K(), z()
                    }, 5e4);

                    function z() {
                        clearTimeout(B), e()
                    }

                    function K() {
                        d.signal.aborted || (clearTimeout(B), d.abort(), a_(), nJ.current === n && (nJ.current = null), n.isRecording() && n.abort("navigation_away"), T[Symbol.dispose](), F[Symbol.dispose](), b?.[Symbol.dispose](), n0.current = null, n1.current = null, nX.current = null, n$.current = null, nZ.current = null, (0, e_.D)(ni(), ez, {
                            isWidgetReady: !1
                        }), an(null), au(na), null != A && (0, eM.h)(A.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), u.remove(), u instanceof HTMLIFrameElement || u.destroy?.(), eT.a.info("Removed app sandbox", {
                            safe: {
                                initId: Y
                            }
                        }), n8(e => e === u ? null : e))
                    }
                    return V.then(async e => {
                        if (d.signal.aborted) return;
                        if (eC.a?.mcpAppSandbox != null) {
                            if (null == Y) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, tW.b)({
                                scope: tQ,
                                request: {
                                    identity: ew.serverIdentity,
                                    pluginId: nf() ?? void 0,
                                    permissions: ng,
                                    initId: Y,
                                    sandboxId: rd
                                },
                                origin: r.sandboxOrigin,
                                appName: nm(),
                                signal: d.signal,
                                onReload: nG
                            })
                        }
                        d.signal.throwIfAborted(), n.mark("sandbox_ready"), eT.a.info("Connected app sandbox", {
                            safe: {
                                initId: Y
                            }
                        }), A = e;
                        let i = e.notifyMcpAppsMcpNotification,
                            l = eC.a?.mcpAppSandbox != null && null != i;
                        null != i && b?.setNotificationSender(e => (0, eM.h)(i(e))), null != e.applyAutofillCandidate && (t = await aG()?.autofill?.(e.applyAutofillCandidate, d.signal), d.signal.throwIfAborted()), an({
                            api: e,
                            widgetId: y
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: u
                        } = rH(), p = tT(), {
                            containerDimensions: T
                        } = rN(n3), v = tI(aG()?.device), w = ni().get(eL.a), R = w["--color-background-primary"], D = rk(c), x = {
                            "openai/viewer-header": ag && null != i,
                            "openai/viewer-document-controls": ag && null != i,
                            ...tg({
                                availableDisplayModes: u,
                                containerDimensions: T,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nF(),
                                deepLink: rj(),
                                safeAreaInsets: D.insets,
                                styleVariables: w,
                                theme: p,
                                userAgent: v,
                                toolInfo: aG()?.toolInfo
                            }),
                            ...null == s || null == i ? {} : {
                                [_.a]: !0
                            },
                            ...null == g ? {} : {
                                [_.d]: !0
                            }
                        }, {
                            csp: L
                        } = r, O = nI ? {} : void 0;
                        aC && (O = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == b && rw(), eT.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: Y
                            }
                        }), h = !0;
                        let M = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != aR,
                                expectedReadySignal: aR,
                                csp: L,
                                displayMode: aH(c),
                                features: o,
                                subjectId: aG()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nv,
                                html: r.html,
                                isFirstParty: aS || null != U || a1,
                                isSidebarOpen: aG()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aG()?.isTombstone === !0,
                                maxHeight: T.maxHeight,
                                maxWidth: T.maxWidth,
                                measureWidth: !0 === nu,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [eN] : [], ...ag && null != i ? [tX.a] : [], ...aC || !nI ? ["ui/message"] : [], ...aT?.split(";") ?? [], ...aN ? [E.a] : [], ...null == b || null == i ? [] : [_.c], ...null == g ? [] : [_.e], ...null == i ? [] : [...t0, ...ai && !aw ? t1 : []]],
                                    hostCapabilities: {
                                        experimental: {
                                            [f.a]: {},
                                            ...l ? {
                                                "openai/find": {}
                                            } : {},
                                            ...aC ? {
                                                [m.a]: {
                                                    draft: nb() ? {} : void 0
                                                }
                                            } : {},
                                            "openai/skillsDeepLinks": {},
                                            ...r.experimentalCapabilities,
                                            ...aN ? {
                                                "openai/files": {}
                                            } : {}
                                        },
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: O,
                                        updateModelContext: nI ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(I._i.map(e => [e, o.includes(I.Zi[e].feature) ? {} : void 0])),
                                            csp: {
                                                baseUriDomains: L.baseUriDomains,
                                                connectDomains: L.connectDomains,
                                                frameDomains: L.frameDomains,
                                                resourceDomains: L.resourceDomains
                                            }
                                        }
                                    },
                                    hostContext: x,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: ni().get(eI.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tO
                                },
                                safeArea: D,
                                theme: p,
                                toolInput: P,
                                toolOutput: S,
                                toolResponseMetadata: G,
                                userAgent: v,
                                viewParams: N,
                                widgetId: y,
                                widgetState: C
                            }),
                            F = !1;
                        for await (let t of M) {
                            let a = ni().get(e_.r, ez)?.sandboxError;
                            if (d.signal.aborted || nc(a)) break;
                            if (ey.e.safeParse(t).success) return;
                            ey.f.safeParse(t).success && ((0, ey.d)(t, rR()), rP("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = ey.g.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new tV.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (F || !eU.d.safeParse(t).success) continue;
                            F = !0, z();
                            let {
                                displayMode: o,
                                availableDisplayModes: i
                            } = rH(), s = {
                                ...x,
                                displayMode: o,
                                availableDisplayModes: [...i]
                            };
                            (0, e_.D)(ni(), ez, {
                                isWidgetReady: !0
                            }), (0, eM.h)(e.setWidgetView({
                                displayMode: aH(o),
                                isTombstone: aG()?.isTombstone === !0,
                                viewParams: N,
                                widgetId: y
                            })), (0, eM.h)(e.setTheme({
                                theme: p
                            })), (0, eM.h)(e.setSafeArea({
                                safeArea: D
                            }));
                            let l = {
                                isSidebarOpen: aG()?.presentation?.isSidebarOpen === !0,
                                maxHeight: T.maxHeight,
                                maxWidth: T.maxWidth,
                                surfaceBackgroundColor: R
                            };
                            nZ.current = l, (0, eM.h)(e.setAdditionalGlobals({
                                additionalGlobals: l
                            })), (0, eM.h)(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), eT.a.info("Started app widget", {
                                safe: {
                                    displayMode: o,
                                    initId: Y
                                }
                            }), n.end()
                        }
                        if (!F && !d.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        d.signal.aborted || (h && rP("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rS(null == A ? "handshake" : "widget", e)), K()
                    }).finally(() => {
                        z()
                    }), K
                });
            (0, A.useLayoutEffect)(() => {
                if (r9) return ni().get(tb, void 0)(oe, e => rS("handshake", e), r7)
            }, [tQ, r9, nI, nv, nD, nh, nS, a$, aZ, a_, aN, aC, a4, ax, ef, null, em, nO, n3, k, Y, s, g, aw, nu, aP, aU, aQ, aJ, a0, a1, a2, aD, aF, aO, aM, aB, aY, aW, aj, aV, az, aK, aS, ag, aT, aR, a.requiresMcpInitialization, ti, n4, ez, rc, am, rd, rC, ru, rg, tE, ai, aI, tO]), (0, A.useLayoutEffect)(() => {
                as.setConversation(o).catch(e => {
                    eT.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: o,
                            mcpAppId: ez
                        },
                        sensitive: {
                            error: e,
                            hostId: em
                        }
                    })
                })
            }, [o, em, as, ez]), (0, A.useLayoutEffect)(() => {
                al.setConversation(o, ai && nC).catch(e => {
                    eT.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [o, al, nC, ai]), (0, A.useLayoutEffect)(() => {
                let e = aa?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = al.connectNotificationSink(e);
                return () => {
                    t(), al.clear().catch(e => {
                        eT.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [al, aa]), (0, A.useLayoutEffect)(() => {
                let e = aa?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = as.connectNotificationSink(t => (0, eM.h)(e(t)));
                return () => {
                    t(), as.clear().catch(e => {
                        eT.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [as, aa]), (0, A.useEffect)(() => {
                if (!nV || null == aa || null == ar) return;
                let e = {
                        widgetId: ar,
                        sourceMcpAppId: eX,
                        toolInput: a7,
                        toolOutput: re,
                        toolResponseMetadata: ri,
                        toolStatus: ro,
                        toolCallCancellationReason: tq,
                        toolResult: rr
                    },
                    t = {
                        ...e,
                        widgetState: nQ
                    };
                h()(n0.current, t) || (n0.current = t, (0, eM.h)(aa.setWidgetData({
                    toolInput: a7,
                    toolOutput: re,
                    toolResponseMetadata: ri,
                    widgetId: ar,
                    widgetState: nQ
                })));
                let n = n1.current?.widgetId === ar ? n1.current : null;
                if (h()(n, e)) return;
                n1.current = e;
                let a = n?.sourceMcpAppId !== eX;
                null != a7 && (a || !h()(n?.toolInput, a7)) && (0, eM.h)(aa.notifyMcpAppsToolInput({
                    arguments: a7
                })), "cancelled" === ro ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tq) && (0, eM.h)(aa.notifyMcpAppsToolCancelled({
                    reason: tq
                })) : null == rr || !a && h()(n?.toolResult, e.toolResult) && n?.toolStatus === ro && h()(n?.toolInput, a7) && h()(n?.toolResponseMetadata, ri) || (0, eM.h)(aa.notifyMcpAppsToolResult({
                    ...rr,
                    isError: "error" === ro || rr.isError,
                    _meta: "error" === ro ? {
                        ...rr._meta,
                        status: "error"
                    } : rr._meta
                }))
            }, [nV, rr, aa, eX, a7, re, ri, ro, tq, ar, nQ]), (0, A.useEffect)(() => {
                nV && null != aa && (0, eM.h)(aa.notifyMcpAppsHostContext({
                    hostContext: {
                        [f.a]: nM
                    }
                }))
            }, [nV, nM, aa]), (0, A.useEffect)(() => {
                if (nV && null != aa && null != n3) return s?.observeHostContext?.(t$, n3, e => {
                    (0, eM.h)(aa.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, n3, nV, aa, t$]), (0, A.useEffect)(() => {
                if (null == n3 || !rf || null == aa || null == ar || nq && null == r_) return;
                let e = rk(nB);
                (0, eM.h)(aa.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aH(nB),
                    isTombstone: aG()?.isTombstone === !0,
                    viewParams: rt,
                    widgetId: ar
                };
                return h()(nX.current, t) || (nX.current = t, (0, eM.h)(aa.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: a,
                            rightPanelAnimationProgress: r,
                            onLayout: o
                        } = e, i = null, s = () => {
                            null == i && (i = window.requestAnimationFrame(() => {
                                i = null, o()
                            }))
                        };
                        if (s(), "u" < typeof ResizeObserver) return () => {
                            null != i && window.cancelAnimationFrame(i)
                        };
                        let l = new ResizeObserver(s);
                        l.observe(t), a && n?.parentElement != null && l.observe(n.parentElement);
                        let c = r.on("change", s);
                        return () => {
                            l.disconnect(), c(), null != i && window.cancelAnimationFrame(i)
                        }
                    }({
                        frameElement: n3,
                        inlineAnchor: rE,
                        fitWidth: nu,
                        rightPanelAnimationProgress: nH,
                        onLayout: () => {
                            if ("true" === n3.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rN(n3), n = {
                                isSidebarOpen: aG()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rT ? "transparent" : nj
                            };
                            h()(nZ.current, n) || (nZ.current = n, (0, eM.h)(aa.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tg({
                                availableDisplayModes: tz.availableDisplayModes ?? ef,
                                containerDimensions: t,
                                displayMode: nB,
                                locale: t2.locale,
                                deepLink: tl,
                                safeAreaInsets: e.insets,
                                styleVariables: nW,
                                theme: tT(),
                                userAgent: tI(aG()?.device),
                                toolInfo: aG()?.toolInfo
                            });
                            h()(n$.current, a) || (n$.current?.theme !== a.theme && (0, eM.h)(aa.setTheme({
                                theme: a.theme
                            })), n$.current = a, (0, eM.h)(aa.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [n3, nu, nz, k, Y, rE, t2.locale, nW, ef, tz.availableDisplayModes, rf, nq, a3, aX, rT, tn?.displayMode, tn?.showModalCloseButton, ap, tl, nH, nU, aa, r_, nj, tO, rt, ar, nB]);
            let ot = ap && !nq,
                on = ap && nq && nk?.tabId === (0, e4.b)(ez);
            return (0, i.jsxs)(i.Fragment, {
                children: [k && rf && nV && null != n6 && null != rd ? (0, i.jsx)(t_, {
                    sandboxElement: n6,
                    sandboxId: rd
                }) : null, nV && null != n6 && null != rd ? (0, i.jsx)(ts, {
                    panelTabId: nq ? (0, e4.b)(ez) : tn?.panelTabId ?? null,
                    sandboxElement: n6,
                    sandboxId: rd,
                    title: tL
                }) : null, null != aE && rf ? (0, i.jsx)(eG.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...aE,
                        onCancel: a_,
                        onConfirm: af
                    }
                }) : null, on ? (0, i.jsx)(B.a.RightPanelTabListBefore, {
                    children: (0, i.jsx)(tH, {
                        canGoBack: ac.canGoBack,
                        canGoForward: ac.canGoForward,
                        className: "h-full px-1",
                        onBack: () => rB(-1),
                        onForward: () => rB(1)
                    })
                }) : null, ot && null != n3 && !nq ? (0, y.createPortal)((0, i.jsx)(tH, {
                    canGoBack: ac.canGoBack,
                    canGoForward: ac.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => rB(-1),
                    onForward: () => rB(1)
                }), n3) : null]
            })
        }

        function nc(e) {
            return null != e && !(e instanceof tV.a)
        }
    }),
    aENG: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = Math.max(e ?? t ?? 480, n ?? 200);
                return a || null != e ? r : Math.min(r, 720)
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
                        fullSurface: m,
                        showLoadingStatus: g,
                        disableInlineLoadingState: h
                    } = e,
                    T = void 0 !== f && f,
                    I = void 0 === g || g,
                    b = (0, o.a)();
                d[0] !== b ? (t = b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }), d[0] = b, d[1] = t) : t = d[1];
                let v = t,
                    A = I ? "status" : void 0,
                    y = !I;
                d[2] !== v || d[3] !== A || d[4] !== y ? (n = {
                    role: A,
                    "aria-hidden": y,
                    "aria-label": v,
                    "data-mcp-app-loading": "true"
                }, d[2] = v, d[3] = A, d[4] = y, d[5] = n) : n = d[5];
                let C = n;
                if (void 0 !== m && m) {
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
                if (void 0 !== h && h) {
                    let e;
                    return d[9] !== _ ? (e = (0, a.jsx)("div", {
                        "aria-hidden": "true",
                        style: {
                            height: _
                        }
                    }), d[9] = _, d[10] = e) : e = d[10], e
                }
                d[11] !== T || d[12] !== p || d[13] !== _ || d[14] !== E || d[15] !== C ? (c = T && "number" == typeof _ && _ > 0 && _ < 48 ? (0, a.jsx)("div", {
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
                }), d[11] = T, d[12] = p, d[13] = _, d[14] = E, d[15] = C, d[16] = c) : c = d[16];
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
            a: () => b,
            sendMcpAppMessage: () => I
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
            defaultMessage: "Open",
            description: "Button that opens the new chat containing the message sent by a plugin"
        });

        function m(e, t, n) {
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
        var g = n("WBiY"),
            h = n("sS8e"),
            T = n("kfGJ");
        async function I(e) {
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

        function b(e) {
            let {
                scope: t,
                recipient: r,
                getNewThreadDestination: p,
                globalEntrypointIdentity: _,
                canCreateCodexThreads: I,
                hasUserGesture: b,
                assertActive: v,
                sourceName: A,
                toolOrigin: y,
                signal: C
            } = e;
            return (e, N) => (0, c.c)({
                context: e,
                signal: C,
                requestConfirmation: N,
                send: async e => {
                    v();
                    let c = (0, g.b)(r);
                    if (void 0 === c && (c = null != p ? p() : null == r ? {
                            kind: "app-server",
                            hostId: T.a
                        } : null), null == c || "app-server" === c.kind && !I) throw (0, h.c)("New conversations are unavailable for this view", a.r.MethodNotFound);
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
                        D = m(t, S);
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
                        x = o()(() => {
                            N.signal.removeEventListener("abort", x), P(), D?.close()
                        }),
                        L = !1;
                    N.signal.addEventListener("abort", x, {
                        once: !0
                    });
                    let O = () => N.abort();
                    C.addEventListener("abort", O, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(17982)]).then(n.bind(n, "VWsy"));
                        v(), N.signal.throwIfAborted(), C.removeEventListener("abort", O), await a(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: _,
                            hasUserGesture: b,
                            onDeferredCreation: e => {
                                L = !0, e.then(x, e => {
                                    G(e), x()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (D = m(t, S, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(E.f).info((0, u.jsx)(d.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    description: "Toast confirming that the named app has started a new chat",
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
                        C.removeEventListener("abort", O), L || x()
                    }
                }
            })
        }
    }),
    FPpy: (function(e, t, n) {
        var a = n("bTvG"),
            r = n("iRMi"),
            o = n("mfKi"),
            i = n("wWGv"),
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
                    decline: m,
                    onShownReceipt: g,
                    onInstallClick: h,
                    onSuggestionInteraction: T,
                    isCurrent: I = () => !0
                } = e, b = u.e.safeParse(_.structuredContent);
                if (!b.success) return null;
                let v = (0, s.f)(_),
                    A = u.c.safeParse(v?._meta ?? v),
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
                            n = b.data.suggestions.find(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.pluginId
                            });
                        if (!I() || null == n || null != t.suggestionId && t.suggestionId !== y) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return n
                    };
                return {
                    requestDeclinePluginSuggestions: null == m ? void 0 : () => m(b.data.suggestions),
                    sendInstrument: e => {
                        let t = u.b.safeParse(e);
                        if (!I() || !t.success || t.data.payload.suggestion_id !== y || !b.data.suggestions.some(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.data.payload.remote_plugin_id
                            })) return;
                        let n = t.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                            if (!t.data.payload.plugin_ids.includes(n) || (g?.(n, e), w.has(n))) return;
                            w.add(n), T?.(n, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed");
                            return
                        }
                        let a = t.data.payload.plugin_ids;
                        N(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => b.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = R(e);
                        return h?.(t.plugin_id), T?.(t.plugin_id, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), N(o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), E(t, C)
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
                            remoteMarketplaceName: i.Zc
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
            i = n("BolX"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("Wdu7"),
            u = n("aENG"),
            d = n("tSEg"),
            p = n("WFY2"),
            _ = n("Cv9y"),
            E = n("qZWE"),
            f = n("X3T3"),
            m = n("EDsV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, h, T, I, b, v, A, y, C, N, w = (0, r.c)(89),
                    {
                        resource: R,
                        error: P,
                        errorTitle: S,
                        errorIllustration: D,
                        hostDisplayModes: G,
                        fullSurface: x,
                        hostScroll: L,
                        inlineSurface: O,
                        mcpAppId: M,
                        overlayOwnerId: F,
                        onRetryResourceRead: k,
                        renderErrorActions: H,
                        appName: U,
                        presentation: W,
                        showLoadingStatus: j,
                        disableInlineLoadingState: V
                    } = e,
                    Y = void 0 !== x && x,
                    q = void 0 !== L && L,
                    B = void 0 === O ? "standalone" : O,
                    z = void 0 === F ? null : F,
                    K = void 0 === j || j,
                    X = void 0 !== V && V,
                    $ = (0, i.y)(d.a),
                    Z = (0, i.x)(E.h, M),
                    J = Z?.content.resource;
                w[0] !== P || w[1] !== R || w[2] !== J ? (t = null == J ? R : {
                    data: J,
                    error: P ?? null,
                    isLoading: !1
                }, w[0] = P, w[1] = R, w[2] = J, w[3] = t) : t = w[3];
                let Q = t,
                    {
                        data: ee,
                        isLoading: et
                    } = Q,
                    en = ee?.html ?? null;
                w[4] !== Q || w[5] !== G ? (n = (0, m.e)(Q, G), w[4] = Q, w[5] = G, w[6] = n) : n = w[6];
                let ea = n,
                    er = (0, i.x)(E.u, M),
                    eo = (0, i.x)(E.v, M),
                    ei = Y || "inline" === W,
                    es = Z?.inlineFrameAnchor.ref,
                    el = ee?.heightHint ?? null,
                    ec = ee?.minFrameHeight ?? null;
                w[7] !== er.intrinsicHeight || w[8] !== q || w[9] !== ec || w[10] !== el ? (g = (0, u.a)(er.intrinsicHeight, el, ec, q), w[7] = er.intrinsicHeight, w[8] = q, w[9] = ec, w[10] = el, w[11] = g) : g = w[11];
                let eu = g,
                    ed = !Y && ee?.fitWidth ? er.intrinsicWidth ?? ee.widthHint : void 0,
                    ep = Y ? void 0 : ee?.inlineFramePadding;
                w[12] !== ep ? (h = (0, u.b)(ep), w[12] = ep, w[13] = h) : h = w[13], w[14] !== ed || w[15] !== h ? (T = {
                    width: ed,
                    ...h
                }, w[14] = ed, w[15] = h, w[16] = T) : T = w[16];
                let e_ = T,
                    eE = "error" === ea.kind ? ea.error : er.sandboxError;
                w[17] !== ea.kind || w[18] !== eE ? (I = null, "too-large" === ea.kind ? I = "HTML exceeds display limit" : eE instanceof m.a && (I = "No supported display mode"), w[17] = ea.kind, w[18] = eE, w[19] = I) : I = w[19];
                let ef = "error" === ea.kind ? ea.error : null,
                    em = ef?.message;
                w[20] !== I || w[21] !== ee?.availableDisplayModes || w[22] !== ee?.htmlByteLength || w[23] !== G || w[24] !== M || w[25] !== ef ? (b = () => {
                    (null != I || null != ef) && p.a.warning("MCP app error displayed", {
                        safe: {
                            reason: I ?? "App could not be displayed",
                            htmlByteLength: ee?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: M,
                            error: ef,
                            hostDisplayModes: G,
                            availableDisplayModes: ee?.availableDisplayModes
                        }
                    })
                }, w[20] = I, w[21] = ee?.availableDisplayModes, w[22] = ee?.htmlByteLength, w[23] = G, w[24] = M, w[25] = ef, w[26] = b) : b = w[26];
                let eg = (0, s.useEffectEvent)(b);
                if (w[27] !== eg ? (v = () => {
                        eg()
                    }, w[27] = eg, w[28] = v) : v = w[28], w[29] !== I || w[30] !== M || w[31] !== em ? (A = [I, em, M], w[29] = I, w[30] = M, w[31] = em, w[32] = A) : A = w[32], (0, s.useEffect)(v, A), "too-large" === ea.kind) {
                    let e;
                    return w[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(c.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, a.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppTooLarge",
                                defaultMessage: "This app is too large to display",
                                description: "Error shown when an MCP app resource is too large to render"
                            })
                        })
                    }), w[33] = e) : e = w[33], e
                }
                if (!Y && "launcher" === W) {
                    let e, t = z ?? void 0;
                    return w[34] !== es || w[35] !== t ? (e = (0, a.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), w[34] = es, w[35] = t, w[36] = e) : e = w[36], e
                }
                if (et || !eo && null != en && null == eE) {
                    let e, t, n, r;
                    if ("pending" === W && !Y) {
                        let e;
                        return !K || X ? null : (w[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app",
                                description: "Accessible label for the MCP app loading placeholder"
                            })
                        }), w[37] = e) : e = w[37], e)
                    }
                    let i = et ? null : es,
                        s = z ?? void 0,
                        c = null == ep && "max-w-full",
                        u = Y && "h-full";
                    w[38] !== c || w[39] !== u ? (e = (0, o.b)(c, u), w[38] = c, w[39] = u, w[40] = e) : e = w[40];
                    let d = "standalone" === B && "rounded-lg border";
                    w[41] !== d ? (t = (0, o.b)("w-full border-subtle", d), w[41] = d, w[42] = t) : t = w[42];
                    let p = Y ? "100%" : eu;
                    return w[43] !== X || w[44] !== Y || w[45] !== q || w[46] !== ep || w[47] !== K || w[48] !== t || w[49] !== p ? (n = (0, a.jsx)(_.a, {
                        className: t,
                        height: p,
                        inlineFramePadding: ep,
                        fullSurface: Y,
                        allowCompact: q,
                        showLoadingStatus: K,
                        disableInlineLoadingState: X
                    }), w[43] = X, w[44] = Y, w[45] = q, w[46] = ep, w[47] = K, w[48] = t, w[49] = p, w[50] = n) : n = w[50], w[51] !== e_ || w[52] !== B || w[53] !== i || w[54] !== s || w[55] !== e || w[56] !== n ? (r = (0, a.jsx)("div", {
                        ref: i,
                        "data-overlay-owner": s,
                        className: e,
                        style: e_,
                        "data-mcp-app-inline-surface": B,
                        children: n
                    }), w[51] = e_, w[52] = B, w[53] = i, w[54] = s, w[55] = e, w[56] = n, w[57] = r) : r = w[57], r
                }
                if (null != eE) {
                    let e, t;
                    return w[58] !== ea.kind || w[59] !== M || w[60] !== k || w[61] !== Z?.content.mcpAppHostAdapter?.retry || w[62] !== $ ? (e = Z?.content.mcpAppHostAdapter?.retry ?? ("error" === ea.kind ? k : () => (0, E.C)($, M)), w[58] = ea.kind, w[59] = M, w[60] = k, w[61] = Z?.content.mcpAppHostAdapter?.retry, w[62] = $, w[63] = e) : e = w[63], w[64] !== U || w[65] !== D || w[66] !== S || w[67] !== Y || w[68] !== B || w[69] !== eE || w[70] !== H || w[71] !== e ? (t = (0, a.jsx)(f.a, {
                        error: eE,
                        errorTitle: S,
                        errorIllustration: D,
                        fullSurface: Y,
                        inlineSurface: B,
                        pluginName: U,
                        renderErrorActions: H,
                        onRetry: e
                    }), w[64] = U, w[65] = D, w[66] = S, w[67] = Y, w[68] = B, w[69] = eE, w[70] = H, w[71] = e, w[72] = t) : t = w[72], t
                }
                if (!ei) {
                    let e, t = z ?? void 0;
                    return w[73] !== es || w[74] !== t ? (e = (0, a.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), w[73] = es, w[74] = t, w[75] = e) : e = w[75], e
                }
                if (null == en) {
                    let e;
                    return w[76] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), w[76] = e) : e = w[76], e
                }
                let eh = z ?? void 0,
                    eT = null == ep && "w-full max-w-full",
                    eI = Y && "h-full";
                w[77] !== eT || w[78] !== eI ? (y = (0, o.b)("overflow-hidden", eT, eI), w[77] = eT, w[78] = eI, w[79] = y) : y = w[79];
                let eb = Y ? "100%" : eu;
                return w[80] !== e_ || w[81] !== eb ? (C = {
                    ...e_,
                    height: eb
                }, w[80] = e_, w[81] = eb, w[82] = C) : C = w[82], w[83] !== es || w[84] !== B || w[85] !== eh || w[86] !== y || w[87] !== C ? (N = (0, a.jsx)("div", {
                    ref: es,
                    "data-overlay-owner": eh,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": B,
                    className: y,
                    style: C
                }), w[83] = es, w[84] = B, w[85] = eh, w[86] = y, w[87] = C, w[88] = N) : N = w[88], N
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
            let m = !l;
            return s[3] !== _ || s[4] !== p || s[5] !== m || s[6] !== u ? (n = (0, a.jsx)(d.a, {
                compact: m,
                title: u,
                illustration: p,
                description: null,
                actions: _
            }), s[3] = _, s[4] = p, s[5] = m, s[6] = u, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                children: n
            }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
        }

        function f() {
            let e, t, n, i, d = (0, r.c)(6),
                p = (0, l.a)();
            d[0] !== p ? (e = p.formatMessage({
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                defaultMessage: "Timeout details",
                description: "Accessible label for the app startup timeout information button."
            }), d[0] = p, d[1] = e) : e = d[1];
            let _ = e;
            return d[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes.",
                description: "Developer hint for an app startup timeout. Keep the protocol method names unchanged."
            }), d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.he, {
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
                        fullSurface: m,
                        inlineSurface: g,
                        onRetry: h,
                        renderErrorActions: T,
                        pluginName: I
                    } = e,
                    b = void 0 !== m && m,
                    v = void 0 === g ? "standalone" : g,
                    A = u;
                if (null == A)
                    if (l instanceof _.b) {
                        let e, t, n, r = I ? "yes" : "no";
                        i[0] !== I || i[1] !== r ? (e = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            description: "Shown when the app does not respond to the host during startup.",
                            values: {
                                hasName: r,
                                appName: I
                            }
                        }), i[0] = I, i[1] = r, i[2] = e) : e = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(f, {}), i[3] = t) : t = i[3], i[4] !== e ? (n = (0, a.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [e, t]
                        }), i[4] = e, i[5] = n) : n = i[5], A = n
                    } else if (null == I) {
                    let e;
                    i[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayUnnamedApp
                    }), i[6] = e) : e = i[6], A = e
                } else {
                    let e;
                    i[7] !== I ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayApp,
                        values: {
                            appName: I
                        }
                    }), i[7] = I, i[8] = e) : e = i[8], A = e
                }
                i[9] !== b || i[10] !== h ? (t = null != h ? (0, a.jsx)(c.a, {
                    color: "secondary",
                    size: b ? "large" : "compact",
                    onClick: () => h(),
                    children: (0, a.jsx)(s.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again",
                        description: "Button label to retry loading an MCP app"
                    })
                }) : null, i[9] = b, i[10] = h, i[11] = t) : t = i[11];
                let y = t;
                i[12] !== T || i[13] !== y ? (n = T ? T(y) : y, i[12] = T, i[13] = y, i[14] = n) : n = i[14];
                let C = n;
                return i[15] !== C || i[16] !== d || i[17] !== A || i[18] !== b || i[19] !== v ? (o = (0, a.jsx)(E, {
                    fullSurface: b,
                    inlineSurface: v,
                    title: A,
                    illustration: d,
                    actions: C
                }), i[15] = C, i[16] = d, i[17] = A, i[18] = b, i[19] = v, i[20] = o) : o = i[20], o
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
            a: () => g,
            b: () => m,
            c: () => f
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            i = n("zd8w"),
            s = n("I7bK"),
            l = n("bvQ5"),
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
                (0, u.E)(p, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, p], a[0] = s, a[1] = c, a[2] = l, a[3] = p, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, i.useLayoutEffect)(t, n), null
        }

        function m(e) {
            let t, n, a = (0, r.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, o.y)(d.a);
            return a[0] !== s || a[1] !== l || a[2] !== c ? (t = () => {
                c.set(u.j, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, i.useLayoutEffect)(t, n), null
        }

        function g(e) {
            let t, n, c, f, m, g, h, T, I, b, v, A, y, C, N, w, R, P, S, D, G, x, L, O, M, F = (0, r.c)(65);
            F[0] !== e ? ({
                recipient: y,
                resource: v,
                access: n,
                fullSurface: C,
                hostDisplayModes: f,
                hostId: m,
                lifetime: g,
                mcpAppId: h,
                mcpServerStatuses: T,
                pluginId: I,
                connectorId: c,
                Frame: t,
                server: A,
                ...b
            } = e, F[0] = e, F[1] = t, F[2] = n, F[3] = c, F[4] = f, F[5] = m, F[6] = g, F[7] = h, F[8] = T, F[9] = I, F[10] = b, F[11] = v, F[12] = A, F[13] = y, F[14] = C) : (t = F[1], n = F[2], c = F[3], f = F[4], m = F[5], g = F[6], h = F[7], T = F[8], I = F[9], b = F[10], v = F[11], A = F[12], y = F[13], C = F[14]);
            let k = void 0 === y ? null : y,
                H = void 0 !== C && C,
                U = (0, o.y)(d.a),
                W = (0, o.x)(u.s, h),
                j = (0, o.z)(p.a);
            F[15] !== g || F[16] !== h || F[17] !== U ? (N = () => {
                if ("component" === g) return () => {
                    (0, u.z)(U, h)
                }
            }, w = [g, h, U], F[15] = g, F[16] = h, F[17] = U, F[18] = N, F[19] = w) : (N = F[18], w = F[19]), (0, i.useLayoutEffect)(N, w);
            let V = (0, i.useContext)(s.c)?.rightPanelLayoutTick;
            F[20] !== T || F[21] !== I || F[22] !== A ? (R = void 0 !== I ? I : T?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === A
            })?.pluginId, F[20] = T, F[21] = I, F[22] = A, F[23] = R) : R = F[23];
            let Y = R;
            F[24] !== c || F[25] !== m || F[26] !== Y || F[27] !== A ? (P = {
                hostId: m,
                pluginId: Y,
                connectorId: c,
                server: A
            }, F[24] = c, F[25] = m, F[26] = Y, F[27] = A, F[28] = P) : P = F[28];
            let {
                bridge: q,
                pluginId: B,
                isLoading: z
            } = (0, o.x)(l.a, P), K = Y ?? B;
            F[29] !== m || F[30] !== K ? (S = ! function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return !1
            }({
                hostId: m,
                pluginId: K
            }) ? void 0 : K, F[29] = m, F[30] = K, F[31] = S) : S = F[31];
            let X = S,
                $ = v.isLoading || z;
            F[32] !== f || F[33] !== $ || F[34] !== v ? (D = (0, _.e)({
                ...v,
                isLoading: $
            }, f), F[32] = f, F[33] = $, F[34] = v, F[35] = D) : D = F[35];
            let Z = D;
            return F[36] !== n || F[37] !== Z || F[38] !== q || F[39] !== X || F[40] !== H || F[41] !== f || F[42] !== m || F[43] !== j || F[44] !== h || F[45] !== T || F[46] !== k || F[47] !== b || F[48] !== Y || F[49] !== V || F[50] !== U || F[51] !== A ? (x = () => {
                j || "ready" !== Z.kind || null == n || (0, u.y)(U, {
                    ...b,
                    recipient: k,
                    resource: Z.data,
                    access: n,
                    fullSurface: H,
                    hostDisplayModes: f,
                    hostId: m,
                    mcpAppId: h,
                    mcpServerStatuses: T,
                    pluginId: Y,
                    server: A,
                    firstPartyPluginBridge: q,
                    firstPartyPluginLoggerPluginId: X,
                    rightPanelLayoutTick: V
                })
            }, G = [n, Z, q, X, H, f, m, j, h, T, k, b, Y, V, U, A], F[36] = n, F[37] = Z, F[38] = q, F[39] = X, F[40] = H, F[41] = f, F[42] = m, F[43] = j, F[44] = h, F[45] = T, F[46] = k, F[47] = b, F[48] = Y, F[49] = V, F[50] = U, F[51] = A, F[52] = G, F[53] = x) : (G = F[52], x = F[53]), (0, i.useLayoutEffect)(x, G), F[54] !== t || F[55] !== g || F[56] !== h || F[57] !== U || F[58] !== W ? (L = () => {
                "component" !== g && null != W && (0, E.c)(U, {
                    Frame: t,
                    lifetime: g,
                    sessionId: W,
                    sourceMcpAppId: h
                })
            }, O = [t, g, h, W, U], F[54] = t, F[55] = g, F[56] = h, F[57] = U, F[58] = W, F[59] = L, F[60] = O) : (L = F[59], O = F[60]), (0, i.useLayoutEffect)(L, O), F[61] !== t || F[62] !== g || F[63] !== W ? (M = "component" === g && null != W ? (0, a.jsx)(t, {
                sessionId: W
            }, W) : null, F[61] = t, F[62] = g, F[63] = W, F[64] = M) : M = F[64], M
        }
    }),
    U0IP: (function(e, t, n) {
        let a;
        var r = n("eB3o"),
            o = n("kSHG"),
            i = n("BolX"),
            s = n("ASxG"),
            l = n("tSEg");
        let c = "ui/openai/viewer-header",
            u = s.object({
                id: s.string().min(1).max(100),
                label: s.string().min(1).max(500),
                disabled: s.boolean().optional()
            }),
            d = s.enum(["newspaper", "text-page", "document-search", "phone-wave", "presentation", "bar-chart", "live-signal", "building"]),
            p = s.url({
                protocol: /^https?$/
            }).max(4e3).refine(e => {
                let t = URL.parse(e);
                return null != t && !t.username && !t.password
            }),
            _ = p.refine(e => URL.parse(e)?.protocol === "https:"),
            E = s.number().int().positive().max(1e4),
            f = s.object({
                percent: E,
                fit: s.boolean(),
                presets: s.array(s.object({
                    id: u.shape.id,
                    percent: E
                })).min(1).max(24).refine(e => new Set(e.map(e => e.percent)).size === e.length, "Zoom percentages must be unique"),
                fitId: u.shape.id
            }),
            m = s.object({
                zoom: f.optional(),
                navigation: s.array(u.extend({
                    direction: s.enum(["up", "down"])
                })).max(2).refine(e => new Set(e.map(e => e.direction)).size === e.length)
            });

        function g(e) {
            let t = e?.zoom;
            return [...e?.navigation ?? [], ...t ? [...t.presets, {
                id: t.fitId
            }] : []]
        }
        let h = s.object({
                title: s.string().min(1).max(2e3),
                titleMenuLabel: s.string().min(1).max(2e3).optional(),
                titleIcon: d.optional(),
                documentControls: m.optional(),
                titleActions: s.array(u.extend({
                    href: p.optional()
                })).max(20),
                actions: s.array(u.extend({
                    icon: s.enum(["download", "search", "sources", "info"]),
                    menu: s.object({
                        fields: s.array(s.object({
                            label: s.string().max(100),
                            value: s.string().max(4e3)
                        })).max(40),
                        items: s.array(u).max(20),
                        providers: s.array(s.object({
                            name: s.string().min(1).max(500),
                            href: _.optional(),
                            icons: s.array(o.v).max(8).optional(),
                            icon: d.optional(),
                            sources: s.array(s.object({
                                title: s.string().min(1).max(2e3),
                                href: _.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...g(e.documentControls), ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            T = (0, i.v)(l.a, e => null);
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
                    let a = s.object({
                        method: s.literal(c),
                        params: h
                    }).safeParse(e);
                    if (!a.success || t.aborted) return null;
                    let r = a.data.params,
                        o = [...g(r.documentControls), ...r.titleActions, ...r.actions.flatMap(e => e.menu?.items ?? [e])],
                        i = e => {
                            let a = o.find(t => t.id === e && !t.disabled);
                            t.aborted || this.invoke !== i || this.scope.get(T, this.appId)?.invoke !== i || null == a || (null != a.href ? this.openExternal(a.href) : n({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: a.id
                                }
                            }))
                        };
                    return this.invoke = i, this.scope.set(T, this.appId, {
                        header: r,
                        invoke: i
                    }), Promise.resolve({
                        accepted: !0,
                        ...r.documentControls && {
                            documentControls: !0
                        }
                    })
                } [a]() {
                    this.scope.get(T, this.appId)?.invoke === this.invoke && this.scope.set(T, this.appId, null), this.invoke = null
                }
            },
            c: T
        })
    })
};