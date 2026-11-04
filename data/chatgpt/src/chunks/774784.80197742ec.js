export const __rspack_esm_ids = [774784];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => o,
            c: () => a,
            d: () => I,
            e: () => h,
            f: () => A,
            g: () => v,
            h: () => y
        });
        let a = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var r, i, o = ((r = {}).LOG = "log", r.RUN_START = "run_start", r.ENVIRONMENT_STATUS = "environment_status", r.OUTPUT = "output", r.ERROR = "error", r.RUN_COMPLETE = "run_complete", r),
            s = ((i = {})[i.INITIALIZING = 0] = "INITIALIZING", i[i.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", i[i.RUNNING_CODE = 2] = "RUNNING_CODE", i);

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
                            port1: i,
                            port2: o
                        } = new MessageChannel;
                        i.onmessage = e => {
                            let t = e.data;
                            t[0] === _ ? n(t[1]) : r(t[1]), i.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            i.postMessage([u]), i.close(), r(Error("Aborted."))
                        }), e.postMessage([d, ...a], [o, ...t.transfer || []])
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
                    let [a, r, ...i] = n, o = t(...i);
                    E(r.next, o.next.bind(o)), E(r.return, e => o.return?.(e) || {
                        done: !0
                    }), E(r.throw, e => o.throw?.(e) || Promise.reject(e)), E(r.asyncDispose, async () => {
                        let e = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            t = Symbol.dispose || Symbol.for("Symbol.dispose");
                        e in o ? await o[e]?.() : t in o && o[t]?.()
                    })
                }
            }), e.start();
            let n = t => {
                    let n;
                    return function() {
                        for (var a = arguments.length, r = Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        let {
                            port1: o,
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
                            o.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), _.close()
                        }, h = E(o).withOptions(m), T = E(l).withOptions(m), I = E(u).withOptions(m), b = E(p).withOptions(m), v = !1, A = async e => {
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
                let i = g.object({
                    type: g.literal("init"),
                    ports: g.record(g.string(), g.instanceof(MessagePort)),
                    replyPort: g.instanceof(MessagePort)
                });
                return new Promise((e, o) => {
                    let s = () => {
                            r.removeEventListener("message", d), t.removeEventListener("error", u), a?.removeEventListener("abort", c)
                        },
                        l = e => {
                            s(), o(e)
                        },
                        c = () => {
                            l(new DOMException("Sandbox connection cancelled.", "AbortError"))
                        },
                        u = () => {
                            l(Error("Unable to load the code execution sandbox."))
                        },
                        d = a => {
                            if (a.source !== t.contentWindow || a.origin !== n) return;
                            let r = i.safeParse(a.data);
                            r.success && (s(), e(r.data))
                        };
                    r.addEventListener("message", d), null != a && t.addEventListener("error", u, {
                        once: !0
                    }), a?.addEventListener("abort", c, {
                        once: !0
                    })
                })
            }(e): e, i = new Set([...Object.values(a), r]), o = new AbortController, s = () => {
                for (let e of (n?.removeEventListener("abort", s), o.abort(), i)) e.close();
                i.clear()
            };
            try {
                n?.throwIfAborted();
                let l = {};
                for (let [e, n] of Object.entries(t)) {
                    if (null == n) continue;
                    let a = new MessageChannel;
                    i.add(a.port1), i.add(a.port2);
                    let r = function(e, t, n) {
                        function a() {
                            for (var n = arguments.length, a = Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                            let i = e[t];
                            if (null == i) throw Error(`Sandbox host method "${t}" is unavailable`);
                            return i.apply(this, a)
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
                        let i = e => {
                            let t = null == e.signal ? o.signal : AbortSignal.any([o.signal, e.signal]),
                                n = r.withOptions({
                                    ...e,
                                    signal: t
                                });
                            return function() {
                                for (var e = arguments.length, a = Array(e), r = 0; r < e; r++) a[r] = arguments[r];
                                return t.throwIfAborted(), n(...a)
                            }
                        };
                        return [t, Object.assign(i({}), {
                            withOptions: i
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
            i = n("dQRk"),
            o = n("KhaL"),
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
                let E = "tpp" === t.get(i.x, n.id);
                return (0, o.b)({
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
                }, u).then(e => (c.assertActive(), a.c.parse(e)))
            }
        })
    }),
    WBiY: (function(e, t, n) {
        var a = n("BolX"),
            r = n("doi1"),
            i = n("tl5a"),
            o = n("Cslg"),
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
                    let i, d, E = (a = e, l = n, i = a.get(o.f), d = a.get(o.j), e => e(p.a)?.submit === l && e(o.f) === i && e(o.j) === d);
                    return async (a, i, o, l) => {
                        o?.throwIfAborted();
                        let d = a.untrustedAppMessage?.sourceId,
                            f = e.get(p.a)?.isBusy == null ? void 0 : Symbol();
                        null != f && (e.set(_, e => [...e, f]), u.a.info("Queued app message for composer", {
                            safe: {
                                mcpAppId: d
                            }
                        }));
                        try {
                            let m = await (0, s.c)({
                                context: a,
                                signal: o,
                                requestConfirmation: l,
                                send: async a => {
                                    if (e.get(p.a)?.submit !== n) throw new DOMException("Composer was closed", "AbortError");
                                    return null != f && await async function(e, t, n, a) {
                                        let i = e => e(_)[0] === a && e(p.a)?.isBusy !== !0;
                                        do {
                                            let a = (0, r.Re)(),
                                                o = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (!t(n) || i(n)) && a.resolve(void 0)
                                                });
                                            try {
                                                await (null == n ? a.promise : (0, r.if)(a.promise, n))
                                            } finally {
                                                o(), a.resolve(void 0)
                                            }
                                            if (n?.throwIfAborted(), !t(e.get)) throw new DOMException("Composer was closed", "AbortError")
                                        } while (!i(e.get))
                                    }(e, E, o, f), t?.(), u.a.info("Submitting app message", {
                                        safe: {
                                            mcpAppId: d
                                        }
                                    }), n(a, i, o)
                                }
                            });
                            return (0, c.h)(e, {
                                prefersReducedMotion: !0
                            }), null != m && u.a.info("sent" === m.status ? "Sent app message" : "Queued app message", {
                                safe: {
                                    mcpAppId: d,
                                    messageId: m.messageId,
                                    serverAccepted: "queued" === m.status ? m.serverAccepted : void 0
                                }
                            }), m
                        } catch (t) {
                            let e = o?.aborted === !0 || t instanceof DOMException && "AbortError" === t.name;
                            throw u.a[e ? "info" : "warning"](e ? "Cancelled app message submission" : "Failed to submit app message", {
                                safe: {
                                    mcpAppId: d
                                },
                                sensitive: {
                                    error: t
                                }
                            }), t
                        } finally {
                            null != f && e.set(_, e => e.filter(e => e !== f))
                        }
                    }
                }
                if ("local" !== e.value.kind || null == e.value.conversationId) return null;
                let E = e.value.conversationId,
                    f = e.get(i.q, E);
                return null == f ? null : async (n, a, r, o) => {
                    let l = n.untrustedAppMessage?.sourceId;
                    try {
                        let a = await (0, s.c)({
                            context: n,
                            signal: r,
                            requestConfirmation: o,
                            send: n => (t?.(), u.a.info("Submitting app message", {
                                safe: {
                                    mcpAppId: l
                                }
                            }), (0, d.a)(e, e.get(i.vb, E), E, {
                                context: n,
                                cwd: f,
                                text: n.prompt
                            }, {
                                queueModeOverride: "queue"
                            }))
                        });
                        return (0, c.h)(e, {
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
            i = n("Kwur");

        function o(e, t, n, a, r) {
            if (!t?.owner.isCurrent()) return Promise.resolve();
            let {
                context: o,
                owner: s
            } = t, l = (async () => {
                try {
                    await i.Request.safePost("/aip/ledger/funnel-events", {
                        requestBody: {
                            flow_type: "account",
                            flow_id: o.flowId,
                            event_id: "linking_started" === n ? o.flowId : crypto.randomUUID(),
                            step: n,
                            start: a,
                            entry_point: o.entryPoint ?? "unknown",
                            beacon_type: o.beaconType,
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
                let i = {
                    context: {
                        ...n,
                        hasRecordedLinkingStarted: !0
                    },
                    owner: t
                };
                return o(e, i, "linking_started", {
                    flow_path: r,
                    platform: (0, a.d)() ? "mobile_web" : "desktop_web"
                }), i
            },
            b: function(e, t) {
                let n = e.get(r.m),
                    {
                        authenticatedUserId: a,
                        userId: i,
                        accountUserId: o
                    } = n;
                if (n.authLoading || n.accountLoading || "chatgpt" !== n.authMethod || n.accountId !== t || n.authenticatedAccountId !== t || null == a || null == i || null == o) return;
                let s = new AbortController,
                    l = new Set,
                    c = !1,
                    u = () => {
                        c && 0 === l.size && s.abort()
                    },
                    d = e => !e.authLoading && !e.accountLoading && "chatgpt" === e.authMethod && e.accountId === t && e.authenticatedAccountId === t && e.authenticatedUserId === a && e.userId === i && e.accountUserId === o,
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
                    analyticsUserId: i,
                    accountId: t,
                    accountUserId: o,
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
            c: o
        })
    }),
    XCEe: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(366929), n.e(910164), n.e(229405), n.e(293855), n.e(389812), n.e(482788)]).then(n.bind(n, "iAuu"))
            }
        })
    }),
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(514247)]).then(n.bind(n, "shkb"))
            }
        })
    }),
    JLZd: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("TNWb"),
            i = n("nlNF"),
            o = n("kAhA");
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
                        l.authenticatedUserId !== d.authenticatedUserId || l.authenticatedAccountId !== d.authenticatedAccountId || l.userId !== d.userId || null != d.accountUserId && l.accountUserId !== d.accountUserId ? h() : (null == s && (s = (0, o.b)(e, p)), null == s || (s.isCurrent() ? !(!E || "visible" !== _.visibilityState || !(0, i.h)(e) || (0, r.c)() || !t.isConnected || t.closest('[aria-hidden="true"], [inert], [hidden]')) && t.checkVisibility({
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
                    t(a.m), t(i.c), m()
                }), f) ? l() : (c = (0, r.e)(m), _.addEventListener("visibilitychange", m), g.observe(t)), h
            }
        })
    }),
    s5P0: (function(e, t, n) {
        var a = n("zMIV"),
            r = n.n(a),
            i = n("ASxG"),
            o = n("pZ3S"),
            s = n("Cslg"),
            l = n("XCEe"),
            c = n("FNWO"),
            u = n("O0Tw");
        let d = {
                accountId: i.never().optional(),
                connectorId: i.never().optional(),
                returnTo: i.never().optional(),
                signal: i.never().optional()
            },
            p = i.object({
                ...d,
                app: i.never().optional(),
                template: i.never().optional(),
                params: i.looseObject({
                    ...d,
                    view: i.literal("accountLinking")
                })
            }),
            _ = i.object({
                type: i.literal("count"),
                label: i.literal("ledger.onboarding_syncing_visible")
            });
        n.d(t, {}, {
            a: function(e, t, n, a) {
                let i = !1;
                return {
                    requestModal: null == t || 0 === t.length ? void 0 : async (a, i) => {
                        if (i.aborted || e.get(s.f) !== t) return !1;
                        let {
                            params: c
                        } = p.parse(a), {
                            openPersonalFinanceAccountLinking: u
                        } = await (0, l.a)();
                        if (i.aborted || e.get(s.f) !== t) return !1;
                        let d = r()(c, ["view", "key", "ref"]),
                            {
                                trackingContext: _ = {}
                            } = d;
                        return o.isObject(_) && (d.trackingContext = {
                            entryPoint: "widget",
                            entrypoint: "creditScore" === c.initialTab ? "conversation" : void 0,
                            ..._
                        }), await u(e, {
                            accountId: t,
                            accountLinkingFlowParams: d,
                            returnTo: n,
                            signal: i
                        }) && !i.aborted && e.get(s.f) === t
                    },
                    sendInstrument: t => {
                        if (_.safeParse(t).success) {
                            i || null == a || (i = !0, (0, u.a)(e, a));
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
            i = n("PFjh"),
            o = n("yGJW"),
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
                    (0, o.a)(e, a.d, {
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
                    u = e.get(i.a);
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
            i = "ledger_portfolio_distribution_widget";

        function o(e) {
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
            let a = e.get(_.L, t);
            if (null == a) return;
            let r = (0, c.b)({
                mapping: a,
                current_node: n
            }).find(e => "user" === e.author.role);
            if (r?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(_.Z, t)) return a[n]?.message
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
            let i = e.get(_.j, a);
            if (null == i) return;
            let o = h(e, a, r);
            if (o?.author.role !== "assistant" && o?.author.role !== "tool") return;
            let s = (0, m.b)(e, n.accountId);
            if (null != s) try {
                s.userId === n.uiUserId && s.isCurrent() && I(e, s, {
                    conversationId: i,
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
                    sourceMessageId: o,
                    sharedPostId: s,
                    sharedConversationId: l
                } = e, {
                    widgetName: c,
                    component: u,
                    contentReferenceStartIndex: d,
                    externalResourcesBlocked: _
                } = t;
                if (!(null == c || c !== r && c !== i || null == u && "ledger_spend_by_category_widget" !== c || null == o || null == a || (0, p.e)(a.conversationId)) && "primary" === a.conversationType && !1 !== a.isPresented && !1 !== a.trackShownImpressions && !a.isReadOnly && !a.shouldBlockExternalEgress && !a.renderRestrictedWidgets && !a.renderRestrictedModelResponses && !_ && null == l && null == s && "tpp" !== a.conversationOrigin && "flora" !== a.conversationOrigin && "chatgpt-thread" === n.value.routeKind && n.value.conversationId === a.conversationId && null != d && Number.isInteger(d) && !(d < 0) && a.contentReferences.some((e, t) => "dil" === e.type && e.name === c && e.start_idx === d && (a.contentReferenceMessageIds?.[t] ?? a.messageId) === o)) return {
                    key: JSON.stringify([a.conversationId, o, d, c, u]),
                    conversationId: a.conversationId,
                    messageId: o,
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
                        if (c === i) return u?.component !== "LedgerPortfolioDistributionWidget" || void 0 === d ? void 0 : !1 === d.has_connected_accounts ? "no_accounts" : !1 === d.has_holdings ? "portfolio_empty" : !0 === d.has_holdings ? "portfolio_summary" : void 0;
                        if (c !== r || void 0 !== u && "LedgerSpendByCategoryWidget" !== u.component || void 0 === d) return;
                        if (void 0 !== u && !1 === d.has_connected_accounts) return "no_accounts";
                        let a = d.month_views,
                            o = d.selected_month_index;
                        return Array.isArray(a) && ("number" == typeof o || "bigint" == typeof o) && ("number" != typeof o || Number.isInteger(o)) && !(o < 0) && !(o >= a.length) ? s(a[Number(o)]) : void 0
                    }
                    let p = function(e) {
                        let t, n = [e];
                        for (; n.length > 0;) {
                            let e = n.pop();
                            if (Array.isArray(e)) n.push(...e);
                            else if (o(e)) {
                                if ("select" === e.type && o(e.props) && "selected_month" === e.props.name) {
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
                            if (o(e) && e.option_value === p) {
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
                    var i, o, s;
                    let l, u, p, _, E, f, T, b, v, A, y = (i = n, o = a, s = r, E = i.get(d.m), f = () => {
                        let e = h(i, s.conversationId, s.messageId);
                        return (e?.author.role === "assistant" || e?.author.role === "tool") && e.metadata?.is_visually_hidden_from_conversation !== !0 && e.metadata?.reasoning_status == null && e.metadata?.model_dil_v2 == null && (0, c.r)((0, c.r)(e.metadata?.model_dil)?.dil)?.type == null
                    }, T = new Set, b = !1, v = () => {
                        b = !0, p?.(), _?.(), l?.dispose()
                    }, A = () => {
                        if (p?.(), p = void 0, b || !l?.isCurrent() || !f()) return;
                        let e = u;
                        null == e || T.has(e) || (p = (0, g.a)(i, o, () => {
                            !(b || u !== e || !l?.isCurrent() || T.has(e)) && f() && (T.add(e), I(i, l, {
                                widgetName: s.widgetName,
                                conversationId: s.conversationId,
                                messageId: s.messageId,
                                contentReferenceStartIndex: s.contentReferenceStartIndex,
                                widgetResultKind: e
                            }))
                        }, 0))
                    }, _ = i.watch(e => {
                        let {
                            get: t
                        } = e, n = t(d.m);
                        n.authenticatedUserId === E.authenticatedUserId && n.userId === E.userId && n.authenticatedAccountId === E.authenticatedAccountId && (null == E.accountUserId || n.accountUserId === E.accountUserId) && (null == l || l.isCurrent()) ? b || null != l || null == E.authenticatedAccountId || (l = (0, m.b)(i, E.authenticatedAccountId), A()) : v()
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
            i = n("doi1"),
            o = n("P61R"),
            s = n("Dgwo"),
            l = n("tl5a"),
            c = n("KJ1J"),
            u = n("tTIR"),
            d = n("VvpR"),
            p = n("PYah"),
            _ = n("X6Vn"),
            E = n("mdWu"),
            f = n("jAhM"),
            m = n("taUf"),
            g = n("ALWK"),
            h = n("joT6"),
            T = n("loz7"),
            I = n("uzkw"),
            b = n("EEop"),
            v = n("ueue"),
            A = n("tSEg"),
            y = n("DKJJ");

        function C(e) {
            return !1
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    conversationId: n,
                    hostId: a,
                    installPlugin: o,
                    mcpAppScope: c,
                    navigate: N,
                    access: w,
                    server: R,
                    sessionId: P,
                    sourceMcpAppId: S,
                    toolResult: D
                } = e;
                if (!C({
                        hostId: a,
                        mcpAppScope: c,
                        access: w,
                        server: R
                    })) return null;
                let G = {
                        hostId: a,
                        threadId: n
                    },
                    x = (0, y.g)({
                        toolResult: D
                    }),
                    L = m.c.safeParse(x?._meta ?? x).data,
                    O = (e, a, r) => {
                        let {
                            accountId: i,
                            uiUserId: o
                        } = w;
                        null == i || null == o || t.get(A.j) || t.get(g.q, P)?.sourceMcpAppId !== S || (0, I.a)({
                            connectorId: a,
                            conversationId: n,
                            eventType: r,
                            expectedIdentity: {
                                accountId: i,
                                userId: o
                            },
                            pluginId: e,
                            productSurface: "CODEX"
                        })
                    };
                return (0, f.a)({
                    scope: t,
                    hostId: a,
                    navigate: N,
                    toolResult: D,
                    onSuggestionInteraction: O,
                    connect: async (e, r) => {
                        let c = e.plugin_id;
                        try {
                            let f = t.get(l.Zb, G)?.latestTurnId,
                                m = !1,
                                g = !1;
                            if (!o({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: i.Zc,
                                    remotePluginId: c
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
                                    requiresAppSetup: !0
                                })) return {
                                pluginId: c,
                                status: "unavailable"
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, n = t(T.o);
                                    return "closed" === n.kind || n.hostId !== a
                                }), g) return {
                                pluginId: c,
                                status: "retryable_error"
                            };
                            if (!m) return {
                                pluginId: c,
                                status: "cancelled"
                            };
                            let I = (0, s.b)(t, a);
                            if (!(0, i.Vh)(a)) {
                                let e = await I.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: c,
                                    status: "retryable_error"
                                }
                            }
                            let A = t.query.snapshot(b.k, {
                                hostId: a,
                                marketplacePath: null,
                                pluginName: c,
                                remoteMarketplaceName: i.Zc
                            });
                            await A.invalidate({
                                refetchType: "none"
                            });
                            let [y, C] = await Promise.all([A.getOrFetch(), (0, p.a)(t, a, n)]);
                            if (!y.summary.installed || !y.summary.enabled || null != y.summary.remotePluginId && y.summary.remotePluginId !== c || !y.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return C.has(t)
                                }) || (await (0, h.a)({
                                    scope: t,
                                    authPolicy: y.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: a,
                                    plugin: (0, v.b)(y),
                                    queryClient: t.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: c,
                                status: "connection_required"
                            };
                            if (void 0 === f || (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(l.Zb, G);
                                    return null != a && (a.latestTurnId !== f || a.summary.threadRuntimeStatus?.type !== "active" && !t(E.i, n) && !t(_.c))
                                }), await I.getLatestTurnId(n) !== f)) return {
                                pluginId: c,
                                status: "connected"
                            };
                            if (t.get(l.Gb, n)?.role === "follower" || !(0, u.b)(n)) return {
                                pluginId: c,
                                status: "retryable_error"
                            };
                            try {
                                await (0, d.c)(t, a, n, {
                                    turnTrigger: "plugin_suggestion_connected",
                                    additionalContext: {
                                        plugin_suggestion_connected: {
                                            kind: "application",
                                            value: `The user installed ${e.display_name} and its tools are available. Continue the original task.`
                                        }
                                    }
                                })
                            } finally {
                                (0, u.a)(n)
                            }
                            return {
                                pluginId: c,
                                status: "connected"
                            }
                        } catch {
                            return {
                                pluginId: c,
                                status: "retryable_error"
                            }
                        }
                    },
                    decline: async e => {
                        let i = e => !e(A.j) && e(g.q, P)?.sourceMcpAppId === S,
                            o = m.d.safeParse(t.get(g.v, P) ?? {});
                        if (!i(t.get) || !o.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let c = new Set(o.data.connectedPluginIds),
                            p = new Set(o.data.declinedPluginIds),
                            _ = r()(e, "plugin_id").filter(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return !c.has(t) && !p.has(t)
                            });
                        if (0 === _.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let f = t.get(l.Zb, G)?.latestTurnId,
                            h = _.map(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return t
                            });
                        for (let {
                                plugin_id: e
                            }
                            of _) O(e, L?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(g.v, P, {
                            ...o.data,
                            declinedPluginIds: [...p, ...h]
                        });
                        try {
                            if (void 0 === f) return {
                                status: "declined",
                                declinedPluginIds: h
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(l.Zb, G);
                                    return !i(t) || null != a && (a.latestTurnId !== f || a.summary.threadRuntimeStatus?.type !== "active" && !t(E.i, n))
                                }), await (0, s.b)(t, a).getLatestTurnId(n) === f && i(t.get) && t.get(l.Gb, n)?.role !== "follower" && (0, u.b)(n)) try {
                                await (0, d.c)(t, a, n, {
                                    turnTrigger: "plugin_suggestion_declined",
                                    additionalContext: {
                                        plugin_suggestion_declined: {
                                            kind: "application",
                                            value: `The user chose not to install these plugins for the current request: ${JSON.stringify(_.map(e=>{let{display_name:t}=e;return t}))}. Continue the original request using available capabilities, without the declined plugins. If the request requires a declined app, explain that limitation or offer an available alternative. Do not suggest these plugins again.`
                                        }
                                    }
                                })
                            } finally {
                                (0, u.a)(n)
                            }
                        } catch {}
                        return {
                            status: "declined",
                            declinedPluginIds: h
                        }
                    }
                })
            },
            b: function(e) {
                let {
                    mcpAppScope: t,
                    access: n,
                    server: a
                } = e, r = "connectorId" in n.serverIdentity ? n.serverIdentity.connectorId : null;
                return "internal://plugin-management-suggestions" === t.originResourceUri && (0, c.e)(a) && r === o.a && t.codexAppsToolScope?.connectorId === r
            },
            c: C
        })
    }),
    vgfv: (function(e, t, n) {
        var a = n("g25Y"),
            r = n("X6Vn");
        n.d(t, {}, {
            a: function(e, t) {
                let n = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                    i = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                    o = () => {
                        window.open(t, "_blank", `popup=yes,width=600,height=750,left=${n},top=${i},noopener,noreferrer`)
                    };
                "Apple Computer, Inc." === navigator.vendor ? (0, r.f)(e, a.ExternalLinkConfirmationDialog, {
                    href: t,
                    initiator: "mcp_app_resource",
                    onOpen: o
                }) : o()
            }
        })
    }),
    uJ0o: (function(e, t, n) {
        var a = n("BolX"),
            r = n("tSEg"),
            i = n("dN0a");
        let o = (0, a.u)(r.a, () => null),
            s = (0, a.h)(r.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return (t(o) ?? n).get(i.k)
            }, e => {
                let {
                    scope: t,
                    get: n,
                    set: a
                } = e;
                return (n(o) ?? t).watch(e => {
                    let {
                        get: t
                    } = e;
                    a(t(i.k))
                })
            });
        n.d(t, {}, {
            a: s,
            b: o
        })
    }),
    xWDI: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("on57"),
            o = n("Wf1j"),
            s = n("oyxz"),
            l = n("ygO2"),
            c = n("bf6R"),
            u = n("CqQF"),
            d = n("ZiSI"),
            p = n("pZTm"),
            _ = n("C1SW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, E, f, m, g, h = (0, r.c)(32),
                    {
                        error: T,
                        errorTitle: I,
                        errorIllustration: b,
                        fullSurface: v,
                        inlineSurface: A,
                        onRetry: y,
                        renderErrorActions: C,
                        pluginName: N
                    } = e,
                    w = void 0 !== v && v,
                    R = (0, o.a)();
                h[0] !== R ? (t = R.formatMessage({
                    id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                    defaultMessage: "Timeout details",
                    description: "Accessible label for the app startup timeout information button."
                }), h[0] = R, h[1] = t) : t = h[1];
                let P = t,
                    S = I;
                if (null == S)
                    if (T instanceof _.b) {
                        let e, t, n, r, i, o = N ? "yes" : "no";
                        h[2] !== N || h[3] !== o ? (e = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            description: "Shown when the app does not respond to the host during startup.",
                            values: {
                                hasName: o,
                                appName: N
                            }
                        }), h[2] = N, h[3] = o, h[4] = e) : e = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                            defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes.",
                            description: "Developer hint for an app startup timeout. Keep the protocol method names unchanged."
                        }), h[5] = t) : t = h[5], h[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(c.ie, {
                            className: "text-secondary"
                        }), h[6] = n) : n = h[6], h[7] !== P ? (r = (0, a.jsx)(u.a, {
                            cloneCustomTrigger: !0,
                            openOnClick: !0,
                            tooltipContent: t,
                            children: (0, a.jsx)(l.a, {
                                size: "inline",
                                color: "ghost",
                                "aria-label": P,
                                children: n
                            })
                        }), h[7] = P, h[8] = r) : r = h[8], h[9] !== e || h[10] !== r ? (i = (0, a.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [e, r]
                        }), h[9] = e, h[10] = r, h[11] = i) : i = h[11], S = i
                    } else if (null == N) {
                    let e;
                    h[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayUnnamedApp
                    }), h[12] = e) : e = h[12], S = e
                } else {
                    let e;
                    h[13] !== N ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayApp,
                        values: {
                            appName: N
                        }
                    }), h[13] = N, h[14] = e) : e = h[14], S = e
                }
                h[15] !== w || h[16] !== y ? (n = null != y ? (0, a.jsx)(l.a, {
                    color: "secondary",
                    size: w ? "large" : "compact",
                    onClick: () => y(),
                    children: (0, a.jsx)(s.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again",
                        description: "Button label to retry loading an MCP app"
                    })
                }) : null, h[15] = w, h[16] = y, h[17] = n) : n = h[17];
                let D = n;
                h[18] !== C || h[19] !== D ? (E = C ? C(D) : D, h[18] = C, h[19] = D, h[20] = E) : E = h[20];
                let G = E,
                    x = w ? "h-full" : "h-60",
                    L = !w && "standalone" === (void 0 === A ? "standalone" : A) && "overflow-hidden rounded-lg border border-strong";
                h[21] !== x || h[22] !== L ? (f = (0, i.b)(x, L), h[21] = x, h[22] = L, h[23] = f) : f = h[23];
                let O = !w;
                return h[24] !== G || h[25] !== b || h[26] !== S || h[27] !== O ? (m = (0, a.jsx)(d.a, {
                    compact: O,
                    title: S,
                    illustration: b,
                    description: null,
                    actions: G
                }), h[24] = G, h[25] = b, h[26] = S, h[27] = O, h[28] = m) : m = h[28], h[29] !== m || h[30] !== f ? (g = (0, a.jsx)("div", {
                    className: f,
                    children: m
                }), h[29] = m, h[30] = f, h[31] = g) : g = h[31], g
            }
        })
    }),
    aXN3: (function(e, t, n) {
        let a, r, i;
        n.d(t, {
            a: () => nu
        });
        var o = n("ABep"),
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
            I = n("doi1"),
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
            F = w.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            M = {
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
            U = w.discriminatedUnion("type", [w.object({
                type: w.literal("event"),
                label: F,
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
                    step_number: W(1),
                    step_count: W(),
                    preview_kind: w.enum(["draft", "existing"]).optional().catch(void 0),
                    reason: w.enum(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: W(1),
                    page: W(1),
                    page_count: W(1),
                    page_size: W(1),
                    total_count: W(),
                    next_page: W(1)
                })
            }), w.object({
                type: w.literal("count"),
                label: F,
                count: w.literal(1).optional(),
                tags: k
            })]);

        function W() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return w.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var H = n("StMt"),
            j = n("Dgwo"),
            V = n("tl5a"),
            q = n("URlz"),
            Y = n("sM3V"),
            B = n("QcFS"),
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
            ei = n("uIyc"),
            eo = n("WBiY");

        function es(e) {
            if (e.attachment?.content?.some(e => !(0, er.d)(e))) throw Error("App draft attachments must be visible to the user")
        }
        var el = n("Ot7V"),
            ec = n("eT6w"),
            eu = n("PeqE"),
            ed = n("ywSA"),
            ep = n("Cslg"),
            e_ = n("ALWK");
        n("s5P0");
        var eE = n("kRV1"),
            ef = n("eB3o"),
            em = n("Fkn8");
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
            #i = null;
            setNotificationSender(e) {
                this.#i = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#i ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#i({
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
                null == this.#n && (this.#n = e instanceof Error ? e : Error("The first-party plugin bridge was disconnected."), this.#a.length = 0, this.#i = null, this.#r?.reject(this.#n), this.#r = null)
            } [r]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var eT = n("WFY2"),
            eI = n("ReGc"),
            eb = n("rP0s"),
            ev = n("F8wW"),
            eA = n("RFeS"),
            ey = n("lu7q"),
            eC = n("we56");
        let eN = w.object({
            prompt: w.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var ew = n("o62A"),
            eR = n("SRbQ"),
            eP = n("TL6G");
        class eS {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = eP.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(eD(t.notification, n)).catch(() => {
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
                    subscriptionId: i
                } = a, o = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: r,
                    event: a.name,
                    connectorId: a.connectorId,
                    linkId: a.linkId,
                    widgetSubscriptionId: i,
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
                                conversationId: o.conversationId,
                                connectorId: o.connectorId,
                                linkId: o.linkId,
                                widgetSubscriptionId: o.widgetSubscriptionId,
                                hostSubscriptionId: o.hostSubscriptionId
                            },
                            sensitive: {
                                event: o.event,
                                hostId: o.hostId,
                                server: o.server
                            }
                        });
                        let t = (0, eR.a)(e, await (0, j.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
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
                                hostSubscriptionId: o.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eR.e)(e)
                    }
                } catch (a) {
                    if (eT.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: o.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(i) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(i), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(eD({
                        method: "notifications/events/terminated"
                    }, i)) : void 0]), a
                }
                if ((this.subscriptions.get(i) !== e || e.hostSubscriptionId !== n) && (await this.stop(n).catch(() => {}), !this.subscriptions.has(i))) throw Error("MCP event subscription closed during startup")
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

        function eD(e, t) {
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
        var eG = n("ustl"),
            ex = n("whdX");
        let eL = new Map;
        class eO {
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
                let t = eP.c.subscribe("mcp-resource-updated", t => {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw new eM;
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
                        }), this.subscriptions.get(e) === n && this.subscriptions.delete(e), t
                    }
                    return {}
                })
            }
            unsubscribe(e, t) {
                return this.enqueue(async () => {
                    t?.throwIfAborted(), this.params.resolveResourceWatchPath?.(e) == null && (0, eG.a)({
                        mcpAppScope: {
                            originResourceUri: this.params.originResourceUri
                        },
                        server: this.params.server,
                        uri: e
                    });
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
                        }), this.subscriptions.has(e) || this.subscriptions.set(e, n), t
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
                } = this.params, a = `${t}\0${n}`, r = (eL.get(a) ?? Promise.resolve()).then(e), i = r.then(() => void 0, () => void 0);
                return eL.set(a, i), i.then(() => {
                    eL.get(a) === i && eL.delete(a)
                }), r
            }
            getResourceWatchPath(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                null == t && (0, eG.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                });
                let n = t ?? (0, ex.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == n) throw new eF(e);
                return n
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
        class eF extends Error {
            uri;
            code = -32602;
            name = "McpResourceNotSubscribableError";
            constructor(e) {
                super("MCP resource is not subscribable"), this.uri = e
            }
        }
        class eM extends Error {
            code = -32601;
            name = "McpResourceSubscriptionsUnavailableError";
            constructor() {
                super("MCP resource subscriptions are unavailable")
            }
        }
        var ek = n("zxca"),
            eU = n("XROL"),
            eW = n("DKJJ"),
            eH = n("vgfv"),
            ej = n("Ztsm"),
            eV = n("Fm9E"),
            eq = n("P93s"),
            eY = n("cqPu");
        let eB = w.object({
            code: w.number().optional(),
            message: w.string().min(1)
        }).loose();

        function ez(e) {
            Promise.resolve(e).catch(() => void 0)
        }

        function eK(e) {
            try {
                return e()
            } catch (e) {
                if (e instanceof Error) throw (0, eq.a)(e.message, c.q.InternalError);
                throw e
            }
        }

        function eX(e, t) {
            let n = eB.safeParse(e);
            return n.success ? (0, eq.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eq.a)(e.message, -32e3, e) : (0, eq.a)(t, -32e3, e)
        }
        var e$ = n("JXtc"),
            eZ = n("a4MG");
        async function eJ(e) {
            let {
                scope: t,
                hostId: n,
                mcpServerStatuses: a,
                server: r,
                threadId: i,
                detail: o = "toolsAndAuthOnly"
            } = e, s = a?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === r
            }) ?? null;
            if (null == i && null != s) return s;
            let l = (null == i ? await (0, j.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eZ.p, {
                hostId: n,
                threadId: i,
                serverName: r,
                detail: o
            })).data.find(e => {
                let {
                    name: t
                } = e;
                return t === r
            }) ?? null;
            if (null == l) throw (0, eq.a)(`MCP server not found: ${r}`, -32e3);
            return l
        }

        function eQ(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var e0 = n("cDR4"),
            e1 = n("ILnd"),
            e2 = n("kjQz"),
            e3 = n("ntKy"),
            e5 = n("GaA7"),
            e6 = n("OWtl"),
            e8 = n("Sd8U"),
            e7 = n("tSEg"),
            e4 = n("hZax"),
            e9 = n("jdxe"),
            te = n("ripK"),
            tt = n("bIvi"),
            tn = n("yyZv"),
            ta = n("hkUn"),
            tr = n("nKJ6"),
            ti = n("XXJV"),
            to = n("uJ0o");
        let ts = (0, T.i)(e7.a, e => "closed", (e, t) => {
                let {
                    get: n,
                    scope: a,
                    set: r
                } = t;
                return (n(to.b) ?? a).watch(t => {
                    let {
                        get: n
                    } = t, a = n(ti.f, e);
                    null == a ? r("closed") : r(!n(e7.j) && ("bottom" === a ? n($.d) : n($.i) && n($.j)) && n((0, ti.getThreadPanelTabController)(a).visibleTabs$).some(t => {
                        let {
                            tab: n
                        } = t;
                        return n.tabId === e
                    }) ? a : "hidden")
                })
            }),
            tl = (0, T.d)(e7.a, (e, t) => {
                let {
                    get: n
                } = t;
                return "closed" !== n(ts, e)
            });

        function tc(e) {
            let t, n, a, r, i = (0, s.c)(22),
                {
                    panelTabId: o,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, T.y)(e7.a),
                p = (0, T.z)(to.b) ?? d,
                _ = e5.appServices?.mcpAppSandbox,
                E = (0, T.x)(null != _ && tl, o);
            i[0] !== p ? (t = (0, tr.getThreadBrowserConversationId)(p), i[0] = p, i[1] = t) : t = i[1];
            let f = t;
            i[2] !== o || i[3] !== p ? (n = () => {
                let e = p.get(ti.f, o);
                null != o && null != e && (0, ti.activateThreadPanelTab)(p, e, o)
            }, i[2] = o, i[3] = p, i[4] = n) : n = i[4];
            let m = (0, A.useEffectEvent)(n);
            return i[5] !== f || i[6] !== E || i[7] !== d || i[8] !== o || i[9] !== m || i[10] !== l || i[11] !== c || i[12] !== u ? (a = () => {
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
                    let i = r.getContext("2d", {
                        alpha: !1
                    });
                    if (null == i || !e.isConnected) throw Error("MCP App screenshot surface is unavailable.");
                    let o = [];
                    for (let t = e; null != t; t = t.parentElement) o.push(getComputedStyle(t).backgroundColor);
                    for (let e of (i.fillStyle = "Canvas", i.fillRect(0, 0, r.width, r.height), o.reverse())) i.fillStyle = e, i.fillRect(0, 0, r.width, r.height);
                    return i.drawImage(a, 0, 0), r.toDataURL("image/jpeg", n / 100).slice(23)
                })(l, e, t));
                t.catch(td);
                let n = d.watch(e => {
                    let {
                        get: n
                    } = e, a = n(ts, o);
                    t.setPresented("right" === a || "bottom" === a).catch(tu)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, i[5] = f, i[6] = E, i[7] = d, i[8] = o, i[9] = m, i[10] = l, i[11] = c, i[12] = u, i[13] = a) : a = i[13], i[14] !== f || i[15] !== E || i[16] !== d || i[17] !== o || i[18] !== l || i[19] !== c || i[20] !== u ? (r = [_, f, E, d, o, l, c, u], i[14] = f, i[15] = E, i[16] = d, i[17] = o, i[18] = l, i[19] = c, i[20] = u, i[21] = r) : r = i[21], (0, A.useEffect)(a, r), null
        }

        function tu(e) {
            eT.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function td(e) {
            eT.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        let tp = "ui/openai/find",
            t_ = w.object({
                method: w.literal(tp),
                params: w.object({
                    enabled: w.boolean()
                })
            }),
            tE = w.object({
                method: w.literal("ui/notifications/openai/find"),
                params: w.object({
                    command: w.enum(["open", "next", "previous"])
                })
            });
        i = (0, ef._)(Symbol.dispose);
        class tf {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: r,
                    signal: i,
                    notify: o
                } = t, s = t_.safeParse(e);
                if (!s.success || i.aborted || e5.appServices?.mcpAppSandbox == null || null == o || null == r) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = e5.appServices.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: r
                }, async e => n.ownerDocument.activeElement === n && (await o({
                    method: tE.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [i]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var tm = n("O23H"),
            tg = n("nlNF");

        function th(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: r,
                    sandboxId: i
                } = e,
                o = (0, T.y)(e6.a),
                {
                    pathname: l,
                    search: c
                } = (0, N.Y)(),
                u = (0, N._)();
            return a[0] !== u || a[1] !== l || a[2] !== r || a[3] !== i || a[4] !== o || a[5] !== c ? (t = () => {
                let e;
                if (e5.appServices?.mcpAppSandbox == null || ![I.Sc, I.Tc, I.cd, "/plugins/:pluginId/app/:toolName"].some(e => (0, N.J)(e, l))) return;
                let t = (0, I.Fg)(r.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = o.get(tg.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = e5.appServices.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: i,
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
                            if (a?.sandboxId === i && a.initId === t && a.entryId === p) return;
                            s = !0;
                            let _ = r.previousEntryId ?? r.entryIds[r.previousIndex ?? -1],
                                E = o.get(tg.k),
                                f = Math.sign(r.currentIndex - (null == _ ? r.currentIndex : r.entryIds.indexOf(_)));
                            if (null != E && 0 !== f)
                                for (let e = E.index + f; e >= 0 && e < E.entries.length; e += f) {
                                    let n = E.entries[e];
                                    if (n.pathname !== l || n.search !== c || n.state?.mcpHistory?.sandboxId !== i || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === p) return u(e - E.index)
                                }(a?.sandboxId !== i || a.initId !== t) && null != _ && _ !== p && (await u(e, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: i,
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
                                            sandboxId: i,
                                            initId: t,
                                            entryId: p
                                        }
                                    }
                                })
                        }).finally(() => {
                            s = !1
                        })
                    }),
                    _ = o.watch(a => {
                        let {
                            get: r
                        } = a;
                        r(tg.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            _ = o.get(tg.k);
                        !s && c?.sandboxId === i && (c.initId === t || _?.entries.some(e => e.state?.mcpHistory?.sandboxId === i && e.state.mcpHistory.initId === t)) && (e = c.entryId, p.then(async a => {
                            if (!n && d()?.key === l?.key) {
                                let r = c.initId !== t ? "missing" : await a?.go(c.entryId);
                                "ok" !== r && e === c.entryId && (e = void 0), "missing" !== r || n || d()?.key !== l?.key || null == _ || 0 === _.popDelta || await u(Math.sign(_.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, _(), p[Symbol.dispose]()
                }
            }, n = [l, c, r, i, o, u], a[0] = u, a[1] = l, a[2] = r, a[3] = i, a[4] = o, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, A.useEffect)(t, n), null
        }
        var tT = n("uWA4");
        let tI = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tb = {
                insets: {
                    ...tI.insets,
                    top: 48
                }
            };

        function tv(e) {
            let {
                availableDisplayModes: t,
                containerDimensions: n,
                displayMode: a,
                locale: r,
                modelContextHostState: i,
                deepLink: o,
                safeAreaInsets: s,
                styleVariables: l,
                theme: c,
                userAgent: u,
                toolInfo: d
            } = e;
            return {
                "openai/interactionCursor": getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
                ...void 0 === i ? {} : {
                    [f.a]: i
                },
                ...null == o ? {} : {
                    [tT.a]: o
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

        function tA(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function ty() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tC(e) {
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
        let tN = (0, T.j)(e6.a, e => {
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
            return function(e, a, i) {
                let o, s = () => {
                        n.delete(l) && r()
                    },
                    l = () => {
                        n.add(l);
                        try {
                            o = e(s), null == o && s()
                        } catch (e) {
                            s(), a(e)
                        }
                    };
                return t.set(l, i), r(), () => {
                    t.delete(l);
                    try {
                        o?.()
                    } finally {
                        s()
                    }
                }
            }
        });
        var tw = n("VwGH"),
            tR = n("OM8g"),
            tP = n("on57"),
            tS = n("WSFD"),
            tD = n("fm8Z"),
            tG = n("IhIa");
        let tx = w.union([m.b, w.object({
                target: w.enum(["active", "new"]).optional(),
                send: w.literal(!1)
            }).strict()]),
            tL = m.c.extend({
                _meta: m.c.shape._meta.unwrap().extend({
                    "openai/message": tx.optional()
                }).optional()
            });

        function tO(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tG.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw Object.assign(Error("Unsupported MCP app content"), {
                    code: -32602
                })
        }

        function tF(e, t) {
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
        var tM = n("engp");
        let tk = (0, T.j)(e8.a, (e, t) => {
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
        var tU = n("slpy"),
            tW = n("ygO2"),
            tH = n("HOLv"),
            tj = n("ByoF");

        function tV(e) {
            let t, n, a, r, i, l, c, u = (0, s.c)(23),
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
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(tH.a, {
                "aria-hidden": !1,
                asset: tj.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== m || u[3] !== h || u[4] !== I || u[5] !== b ? (n = (0, o.jsx)(tW.a, {
                "aria-label": d,
                color: I,
                disabled: b,
                onClick: m,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = m, u[3] = h, u[4] = I, u[5] = b, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, o.jsx)(tU.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let v = _ ? T : "ghost",
                A = !_;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, o.jsx)(tH.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tj.a
            }), u[10] = r) : r = u[10], u[11] !== f || u[12] !== g || u[13] !== h || u[14] !== v || u[15] !== A ? (i = (0, o.jsx)(tW.a, {
                "aria-label": f,
                color: v,
                disabled: A,
                onClick: g,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = f, u[12] = g, u[13] = h, u[14] = v, u[15] = A, u[16] = i) : i = u[16], u[17] !== f || u[18] !== i ? (l = (0, o.jsx)(tU.a, {
                content: f,
                side: "bottom",
                children: i
            }), u[17] = f, u[18] = i, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, o.jsxs)(o.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tq(e) {
            let t, n, a, r, i, l, c, u = (0, s.c)(20),
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
            return u[4] !== d ? (a = (0, tP.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== E ? (r = e => {
                e.stopPropagation(), E()
            }, u[6] = E, u[7] = r) : r = u[7], u[8] !== f ? (i = e => {
                e.stopPropagation(), f()
            }, u[8] = f, u[9] = i) : i = u[9], u[10] !== g || u[11] !== p || u[12] !== _ || u[13] !== h || u[14] !== r || u[15] !== i ? (l = (0, o.jsx)(tV, {
                backLabel: g,
                canGoBack: p,
                canGoForward: _,
                forwardLabel: h,
                onBack: r,
                onForward: i
            }), u[10] = g, u[11] = p, u[12] = _, u[13] = h, u[14] = r, u[15] = i, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, o.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tY,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tY(e) {
            return e.stopPropagation()
        }
        var tB = n("taUf"),
            tz = n("BRrJ"),
            tK = n("C1SW"),
            tX = n("Dx08"),
            t$ = n("JNpY"),
            tZ = n("IWEP");
        let tJ = w.preprocess(function(e, t) {
            let n = new WeakSet,
                a = w.record(w.string(), w.unknown()),
                r = (e, i) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: i,
                        message: "Cyclic tool arguments"
                    }), tZ.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...i, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...i, ...e.path]
                            });
                            return tZ.e
                        }
                        return Object.fromEntries(Object.entries(n.data).filter(e => {
                            let [, t] = e;
                            return void 0 !== t
                        }).map(e => {
                            let [t, n] = e;
                            return [t, r(n, [...i, t])]
                        }))
                    } finally {
                        n.delete(e)
                    }
                };
            return r(e, [])
        }, w.record(w.string(), w.json()));

        function tQ(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var t0 = n("n2Dd"),
            t1 = n("PkQL");
        let t2 = w.preprocess(t5, w.record(w.string(), w.json())),
            t3 = w.preprocess(t5, w.looseObject({
                ...l.e.shape.params.shape,
                content: w.array(t1.f).optional()
            }));

        function t5(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let t6 = ["resources/subscribe", "resources/unsubscribe"],
            t8 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t7 = w.json(),
            t4 = w.object({
                mode: w.enum(["inline", "fullscreen"])
            }),
            t9 = w.object({
                linkToken: w.string().min(1),
                oauthStateId: w.string().min(1)
            }),
            ne = w.object({
                canGoBack: w.boolean(),
                canGoForward: w.boolean()
            }).loose(),
            nt = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            nn = w.object({
                blob: w.instanceof(Blob),
                name: w.string().trim().min(1)
            }).strip(),
            na = w.looseObject({
                [c.S]: c.V.optional(),
                progressToken: c.Q.optional()
            }),
            nr = w.object({
                name: w.string().min(1),
                arguments: tJ.optional(),
                _meta: na.optional()
            }).loose(),
            ni = w.object({
                uri: w.string().min(1)
            }).loose(),
            no = w.object({
                arguments: w.record(w.string(), t7).optional(),
                name: w.string().regex(/\S/),
                subscriptionId: w.uuid()
            }),
            ns = w.object({
                subscriptionId: w.uuid()
            }),
            nl = w.number().positive(),
            nc = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nu(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: i,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== i && i,
                d = void 0 === l || l,
                p = (0, T.y)(e7.a),
                _ = (0, T.x)(e_.q, c);
            return r[0] !== p || r[1] !== c ? (t = () => {
                let e, t, n, a, r, i, o, s, l, u, d;
                return n = !1, a = !1, r = null, i = () => {
                    clearTimeout(t), t = void 0
                }, o = e => {
                    if (a = e, i(), a) {
                        r = null, (0, e_.C)(p, c, {
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
                        }), (0, e_.C)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && o(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), i(), void 0 === (e = t) ? (a = !1, r = null, (0, e_.C)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && o(a && !(0, tg.h)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(tg.c);
                    let n = t(e_.q, c),
                        a = null == n ? null : t(e_.i, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t(z.j.tabById$, (0, e9.b)(c)),
                        i = (0, tg.h)(p);
                    if (!r || !i) return void u(r ? null : void 0, i);
                    let o = a.inlineFrameAnchor,
                        s = () => u(o.getSnapshot(), i),
                        l = o.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), i()
                }
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, A.useEffect)(t, n), r[4] !== d || r[5] !== _ || r[6] !== u || r[7] !== c ? (a = null == _ ? null : (0, o.jsx)(np, {
                sessionId: c,
                frameState: _,
                sourceMcpAppId: _.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), r[4] = d, r[5] = _, r[6] = u, r[7] = c, r[8] = a) : a = r[8], a
        }

        function nd(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, o.jsx)(nu, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function np(e) {
            let t, n, a, r, i, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: _,
                    frameState: E,
                    isAccessRevoked: f,
                    allowGlobalHost: m
                } = e,
                g = (0, T.y)(e7.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eV.b)(), d[0] = t) : t = d[0];
            let h = (0, e4.h)(t),
                I = (0, T.x)(tn.b, _),
                b = f || I,
                v = (0, T.x)(e_.i, _),
                y = v?.content ?? null,
                C = y?.mcpAppHostAdapter?.retain;
            d[1] !== g || d[2] !== p ? (n = () => (0, tz.b)(g, p), a = [g, p], d[1] = g, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, A.useLayoutEffect)(n, a), d[5] !== C || d[6] !== g || d[7] !== _ ? (r = () => C?.(g, _), i = [C, g, _], d[5] = C, d[6] = g, d[7] = _, d[8] = r, d[9] = i) : (r = d[8], i = d[9]), (0, A.useLayoutEffect)(r, i);
            let N = (0, T.x)(q.c, y?.access ?? null);
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
                    }), (0, e_.y)(g, _))
                }, c = [_, v, g, b, N], d[10] = N, d[11] = v, d[12] = g, d[13] = b, d[14] = _, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, A.useLayoutEffect)(l, c), !h || b || E.isSuspended || nf(E.sandboxError) || null == v || null == y || "current" !== N) return null;
            let w = (0, ew.c)(y);
            if (w && (null == y.toolResult || null != y.toolCallStatus)) return null;
            let R = w ? n_ : nE;
            return d[17] !== R || d[18] !== m || d[19] !== y || d[20] !== E || d[21] !== v.hostedInThreadScrollLayout || d[22] !== v.inlineFrameAnchor || d[23] !== p || d[24] !== _ ? (u = (0, o.jsx)(R, {
                ...y,
                resource: y.resource,
                hostedInThreadScrollLayout: v.hostedInThreadScrollLayout,
                inlineFrameAnchor: v.inlineFrameAnchor,
                allowGlobalHost: m,
                sessionId: p,
                sourceMcpAppId: _,
                frameState: E
            }, E.sandboxGeneration), d[17] = R, d[18] = m, d[19] = y, d[20] = E, d[21] = v.hostedInThreadScrollLayout, d[22] = v.inlineFrameAnchor, d[23] = p, d[24] = _, d[25] = u) : u = d[25], u
        }

        function n_(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, T.y)(e7.a);
            return a[0] !== r ? (t = (e, t) => (0, e3.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, o.jsx)(nE, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function nE(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: r,
                conversationId: i,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: g,
                pluginId: F,
                fullSurface: k,
                modalOpen: W = !1,
                hostScroll: q = !1,
                hostDisplayModes: ef,
                hostId: em,
                hostedInThreadScrollLayout: eh,
                access: eR,
                inheritHostBackground: eP = !1,
                installPlugin: eD,
                inlineFrameAnchor: eL,
                allowGlobalHost: eF,
                sessionId: eM,
                sourceMcpAppId: eV,
                mcpAppScope: eB,
                sourceName: eZ,
                mcpServerStatuses: e3,
                mcpAppHostAdapter: e4,
                getNewThreadDestination: tn,
                widgetStatePersistence: tr,
                plaidAccountId: ti,
                deepLink: ts,
                rightPanelLayoutTick: tl,
                resolveResourceWatchPath: tu,
                server: td,
                appIcon: t_,
                sidePanelTitle: tE,
                title: tg,
                globalSurface: tT = !1,
                toolArguments: tG,
                toolResult: tx,
                toolResultNotification: tU,
                toolCallStatus: tW,
                toolCallCancellationReason: tH,
                viewParamsOverride: tj,
                frameState: tV
            } = e, tY = (0, T.y)(e7.a), tz = (0, T.y)(e6.a), tZ = (0, A.useSyncExternalStore)(eL.subscribe, eL.getSnapshot, () => null), tJ = (0, A.useEffectEvent)(() => tY), t1 = (0, A.useEffectEvent)(() => eR.assertActive()), {
                csp: t5,
                fitWidth: t7,
                html: na,
                sandboxOrigin: nu,
                serverOrigin: np
            } = a, n_ = a.prefersBorder && !e4?.hideFrameBorder, nE = "connectorId" in eR.serverIdentity ? eR.serverIdentity.connectorId : null, nm = null != t, ng = (0, A.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nh = !nm || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nT = (0, T.x)(V.d, em), nI = (0, T.x)(V.hc, {
                hostId: em,
                threadId: i
            }), nb = null != nI && "notLoaded" !== nI.type, nv = !(0, R.e)(td) && t5?.connectDomains.some(e => (0, e$.d)(new URL(e).hostname)) === !0, nA = (0, ta.a)(eR, r), ny = null != np ? new URL(np) : null, nC = e4?.sandboxFeatures?.join(";"), nN = e4?.sandboxFeatures?.includes("local-network-access") === !0 || (0, e$.f)(t5) || nv && ny?.protocol === "https:" && (0, e$.d)(ny.hostname), nw = (0, C.a)(), nR = (0, N._)(), nP = t?.value.kind === "chatgpt" && null != t.value.conversationId && i === `chatgpt:${t.value.conversationId}`, nS = i.startsWith("chatgpt:") ? "chatgpt" : "codex", nD = (0, T.z)(t?.get(tk, eM) ?? null), nG = (0, A.useEffectEvent)(() => t?.get(tk, eM).get() ?? null), nx = (0, T.z)(z.j.activeTab$), nL = (0, T.z)($.g), nO = (0, T.z)(to.a), nF = (0, T.z)(eC.a), nM = nF["--color-background-primary"], {
                isWidgetReady: nk
            } = tV, nU = (0, e_.f)(tV), nW = !k && "fullscreen" === nU, nH = (0, e_.e)(tV), nj = k && eF, nV = (0, A.useRef)(!1), nq = (0, A.useRef)(null), nY = (0, A.useRef)(null), nB = (0, A.useRef)(null), nz = (0, A.useRef)(null), nK = (0, T.x)(e_.h, eM), nX = (0, A.useRef)(null), n$ = (0, A.useRef)(null), nZ = e => {
                if (!(0, R.e)(td)) return null;
                let t = tY.get(e_.i, eV);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eG.d)({
                    appContext: eB.appContext,
                    invocationResourceUri: eB.invocationResourceUri,
                    originTool: eB.originTool,
                    originToolDefinition: e.tools[eB.originTool],
                    server: td,
                    tools: eQ(e)
                });
                tY.set(e_.j, e => {
                    let t = e.get(eV);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let r = new Map(e);
                    return r.set(eV, {
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
                let r = tY.get(e_.i, eV)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [nJ, nQ] = (0, A.useState)(null), [n0, n1] = (0, A.useState)(null), [n2, n3] = (0, A.useState)(!1), [n5, n6] = (0, A.useState)(null), [n8, n7] = (0, A.useState)(null), n4 = n8?.api ?? null, n9 = n8?.widgetId ?? null, ae = (0, tt.a)(e => tu?.(e) ?? null), at = (0, R.e)(td) && (0, I.Hh)(nT, "mcpEventStream"), an = (0, A.useMemo)(() => new eO({
                scope: tz,
                hostId: em,
                mcpAppId: eM,
                originResourceUri: eB.originResourceUri,
                resolveResourceWatchPath: ae,
                server: td
            }), [tz, em, eM, eB.originResourceUri, ae, td]), aa = (0, A.useMemo)(() => new eS({
                scope: tz,
                hostId: em,
                server: td
            }), [tz, em, td]), [ar, ai] = (0, A.useState)(nc), ao = null != nE && nt.has(nE), as = ao && null != n4 && (ar.canGoBack || ar.canGoForward), {
                cancel: al,
                confirmation: ac,
                confirm: au,
                request: ad
            } = (0, ev.a)(ey.a), ap = e4?.viewerHeader === !0, a_ = e4?.forwardedRequestMethods, aE = a_?.join(";") || void 0, af = JSON.stringify(e4?.experimentalCapabilities), am = e4?.openFile, ag = (0, T.z)(e7.j), ah = (0, T.x)(H.a, {
                name: "codex.browser"
            }), aT = !ag && ah.isCapable, aI = aT || nm && nh, ab = !ag && (void 0 === am ? (0, I.ti)((0, eb.a)(tz, em)) : null != am), av = null != e4, aA = e4?.expectedReadySignal, ay = e4?.pluginSuggestions != null, aC = !0 === eB.isVerifiedFirstParty, aN = e4?.displayMode === "modal", aw = (0, A.useEffectEvent)(() => e4), aR = e4?.onRequestClose != null || eh, aP = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, R.e)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e4,
                server: td,
                connectorId: nE,
                widgetScope: eB
            }), aS = null != aP, aD = aP?.requestTargetedReply != null || e4?.setTargetedReply != null || e4?.requestTargetedReply != null, aG = aS || e4?.showToast != null, ax = (0, A.useEffectEvent)(() => aP), aL = (0, A.useEffectEvent)(e => aP?.viewMode ?? e4?.displayMode ?? e), aO = function(e) {
                let {
                    mcpAppId: t,
                    adapter: n,
                    server: a,
                    connectorId: r,
                    widgetScope: i
                } = e;
                if ((0, R.e)(a) && r === eu.a && ("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts")) && !0 === i.isVerifiedFirstParty && n?.finance != null) return n.finance
            }({
                mcpAppId: eM,
                adapter: e4,
                server: td,
                connectorId: nE,
                widgetScope: eB
            }), aF = e4?.requestCheckout != null, aM = e4?.openConversationOverlay != null, ak = e4?.openPromptInput != null, aU = e4?.autofill != null, aW = e4?.openInApp != null, aH = aW && e4?.openInApp?.hideButton !== !0 && e4?.openInApp?.baseUrl != null && null !== tV.openInAppUrl, aj = e4?.presentation != null, aV = e4?.presentation?.requestFocusedObject != null, aq = e4?.presentation?.requestCloseFocusedObject != null, aY = e4?.presentation?.isSidebarOpen === !0, aB = e4?.downloadBlob != null, az = e4?.triggerHaptic != null, aK = e4?.files != null, aX = e4?.share != null, a$ = e4?.requestConnectSheet != null, aZ = e4?.requestReconnectConnector != null, aJ = e4?.requestLinkToConnector != null, aQ = e4?.isTombstone === !0, a0 = (0, A.useEffectEvent)(() => aO), a1 = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: i
                } = t, {
                    originResourceUri: o
                } = r;
                if ((0, R.e)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === o || "internal://ads-manager-account-setup" === o || "internal://ads-manager-delivery" === o)) return {
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
                                        failure_category: i,
                                        ...o
                                    } = a.data, s = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: n,
                                        client_type: "browser"
                                    }, l = e.get(S.a);
                                    if ("ads_billing_client_phase" === t.label && "count" === t.type) {
                                        let e = {
                                            ...o,
                                            ..."error" === a.data.outcome && i ? {
                                                failure_category: i
                                            } : {}
                                        };
                                        l.count("payments", "ads_billing_client_phase", e), l.count("ecosystem", "ads_billing_client_phase", {
                                            ...e,
                                            ...s
                                        })
                                    } else "ads_billing_client_phase_duration_ms" === t.label && "hist" === t.type && void 0 !== t.value && (l.hist("payments", "ads_billing_client_phase_duration_ms", o, t.value), l.hist("ecosystem", "ads_billing_client_phase_duration_ms", {
                                        ...o,
                                        ...s
                                    }, t.value))
                                }
                            }
                        }(e, t, r);
                        let i = U.safeParse(t);
                        if (!i.success) return;
                        let o = i.data,
                            s = "browser";
                        if ("event" === o.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = M[o.label], r = o.payload;
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
                                let [t, n] = e, a = o.tags.find(e => e?.key === t), r = w.enum(n).safeParse(a?.value);
                                return r.success ? [{
                                    key: t,
                                    value: r.data
                                }] : []
                            }),
                            {
                                requiredField: c
                            } = M[o.label],
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
                        e.get(S.a).count("ecosystem", o.label, d)
                    })(e, t, {
                        conversationId: i,
                        originResourceUri: o
                    })
                }
            }(tY, {
                server: td,
                connectorId: nE,
                widgetScope: eB,
                conversationId: i
            }), a2 = (0, A.useEffectEvent)(() => a1), a3 = null != ti && (0, R.e)(td) && av && nE === eu.a, a5 = (0, A.useMemo)(() => null != tG && "object" == typeof tG ? tG : null, [tG]), a6 = (0, A.useMemo)(() => null == tx ? null : (0, eW.f)({
                isCodexAppsServer: (0, R.e)(td),
                toolResult: tx
            }), [td, tx]), a8 = (0, A.useMemo)(() => null == a6 ? null : (0, e0.b)(a6), [a6]), a7 = void 0 === tj ? a8 : tj, a4 = (0, A.useEffectEvent)(() => a7), a9 = (0, A.useMemo)(() => null == a6 ? null : (0, eW.g)({
                toolResult: a6
            }), [a6]), re = (0, A.useMemo)(() => tU ?? (0, e0.a)(a6, {
                preserveStructuredContentNull: e4?.preserveStructuredContentNull
            }), [e4?.preserveStructuredContentNull, tU, a6]), rt = tW ?? (re?.isError === !0 ? "error" : void 0), rn = (0, A.useMemo)(() => null == rt ? a9 : {
                ...a9,
                status: rt
            }, [rt, a9]), ra = (0, A.useEffectEvent)(() => ({
                sourceMcpAppId: eV,
                toolInput: a5,
                toolOutput: a8,
                toolResponseMetadata: rn,
                toolStatus: rt,
                toolResult: a6,
                toolResultNotification: re,
                toolCallCancellationReason: tH
            })), rr = (0, A.useEffectEvent)(e => null == eD || null != rt ? null : (0, ew.a)({
                scope: tY,
                conversationId: i,
                hostId: em,
                installPlugin: eD,
                mcpAppScope: eB,
                navigate: nR,
                access: eR,
                server: td,
                sessionId: eM,
                sourceMcpAppId: eV,
                toolResult: e
            })), ri = null == nu ? void 0 : (0, t$.c)(nu, nw.locale), ro = eR.getSandboxPartition?.(a) ?? v.b, rs = (0, A.useMemo)(() => {
                if (null == ri) return null;
                let e = (0, t$.a)(ri);
                return nN ? `local-network-${e}` : e
            }, [nN, ri]), rl = (0, A.useEffectEvent)(() => {
                if (null == ri) return null;
                let e = (0, v.i)(ri);
                return null == e ? null : {
                    csp: t5,
                    experimentalCapabilities: e4?.experimentalCapabilities,
                    html: na,
                    locale: nw.locale,
                    sandboxOrigin: e,
                    sourceUrl: ri
                }
            }), rc = n5?.isConnected === !0 ? n5 : null, ru = tZ?.isConnected === !0 ? tZ : null, rd = null != ru || null != rc, rp = !nW && !k && tZ?.dataset.mcpAppInlineSurface === "card", r_ = "iframe", rE = "function" == typeof nJ?.moveBefore, rf = W && rE, rm = ru ?? (!nW && nJ?.isConnected ? nJ.parentElement : null), rg = rm?.closest("[data-mcp-app-scroll-host]"), rh = !nW && (!k && q || null != rg), rT = eF && !rh && (rE || !eh), rI = rT ? null : rm?.closest("[data-mcp-app-portal-target='true']") ?? (!rE && nJ?.isConnected ? nJ.parentElement : null), rb = rE || rT ? nJ : rI, rv = (0, A.useEffectEvent)(e => {
                let t = tA(e, k, nW ? "fullscreen" : "inline");
                return !k && "inline" === nU && t7 && ru?.parentElement != null && (t.maxWidth = ru.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rA = (0, A.useEffectEvent)(() => {
                (0, eE.c)(tJ(), {
                    hostId: em,
                    pluginId: F,
                    server: td
                }, eM)
            }), ry = (0, A.useEffectEvent)(() => ({
                safe: {
                    connectorId: nE,
                    mcpAppId: eM,
                    sandboxId: rs,
                    initId: (0, v.g)(n0?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: em,
                    server: td
                }
            })), rC = (0, A.useEffectEvent)(e => {
                (0, D.a)(tY, u.o, {
                    attributionId: nE ?? void 0,
                    conversationId: "chatgpt" === nS ? i.slice(8) : void 0,
                    host: "chatgpt" === nS ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rN = (0, A.useEffectEvent)((e, t) => {
                if (nf(tJ().get(e_.q, eM)?.sandboxError)) return;
                let n = (0, eY.a)(t),
                    a = ry();
                (eT.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nS,
                        retryCount: tV.sandboxGeneration,
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
                }), nz.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tV.sandboxGeneration) ? (0, e_.C)(tJ(), eM, {
                    sandboxGeneration: 1
                }) : (0, e_.C)(tJ(), eM, {
                    isWidgetReady: !1,
                    sandboxError: n
                })
            }), rw = (0, A.useEffectEvent)(e => {
                let t = nl.safeParse(e);
                t.success && tY.get(e_.q, eM)?.displayMode === "inline" && (0, e_.C)(tY, eM, {
                    intrinsicHeight: t.data
                })
            }), rR = (0, A.useEffectEvent)(e => {
                let t = nl.safeParse(e);
                t7 && t.success && (0, e_.C)(tY, eM, {
                    intrinsicWidth: t.data
                })
            }), rP = (0, A.useEffectEvent)(e => {
                if (!ao) return;
                let t = ne.safeParse(e);
                t.success && ai({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rS = (0, A.useEffectEvent)(() => eh ? void(0, e_.b)(tY, eM) : e4?.onRequestClose?.()), rD = (0, A.useEffectEvent)(async (e, n) => {
                if (e4?.openExternal != null && await e4.openExternal(e, n)) return;
                let a = eU.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eB.isVerifiedFirstParty) return void(0, eH.a)(tY, a.data.href);
                    if ("popup" !== a.data.openMode && e4?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? tY, a.data.href, n)) return;
                    let e = (0, I.xj)(a.data.href);
                    if (null != e) return void nR(e);
                    (0, el.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rG = (0, A.useEffectEvent)(async (e, t) => {
                if (!a3 || null == ti) throw Error("Plaid Link is unavailable for this app");
                let n = t9.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ed.a)();
                return a(tY, {
                    accountId: ti,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rx = (0, A.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: i,
                    accountId: o,
                    frameAccountId: s
                } = t, l, c = o ?? l;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!i.aborted && (s ?? l) === c && e.get(ep.f) === c && await a(r, i) && !i.aborted && e.get(ep.f) === c) {
                    let t = e.get(e_.q, n);
                    if (null == t) return;
                    (0, e_.C)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(tY, {
                mcpAppId: eM,
                requestModal: aO?.requestModal,
                payload: e,
                signal: t,
                accountId: ti,
                frameAccountId: n
            })), rL = (0, A.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: r,
                    showNavigationControls: i
                } = e;
                if (r?.displayMode === "modal") return !1 !== r.showModalCloseButton || i ? tb : tI;
                let o = "inline" === n && i ? tb : tI;
                return ("inline" !== n || a) && 0 !== t ? {
                    insets: {
                        ...o.insets,
                        bottom: t
                    }
                } : o
            })({
                composerOverlayReservePx: nO,
                displayMode: k ? "inline" : e,
                hasComposerOverlay: nj,
                hostAdapter: aw(),
                showNavigationControls: as
            })), rO = (0, A.useEffectEvent)(() => {
                let e = tY.get(e_.q, eM) ?? tV;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? ef
                }
            }), rF = (0, A.useEffectEvent)(e => {
                let t = (0, e_.g)(tY, eM, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rO(),
                    safeAreaInsets: rL(t).insets
                }
            }), rM = (0, A.useEffectEvent)(e => {
                let t = t4.safeParse(e),
                    n = tY.get(e_.q, eM);
                if (t.success && (0, e_.a)(n, t.data.mode)) {
                    let n = !k && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nW && nJ?.style.setProperty("display", "none"), aj && (0, e_.C)(tY, eM, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, e_.A)(tY, eM, a, "app_request"), null != n4 && null != n9) {
                        let e = {
                            displayMode: a,
                            isTombstone: aw()?.isTombstone === !0,
                            viewParams: a7,
                            widgetId: n9
                        };
                        nq.current = e, ez(n4.setWidgetView(e));
                        let t = null == nJ ? null : tv({
                            ...rO(),
                            containerDimensions: tA(nJ, k, a),
                            locale: nw.locale,
                            deepLink: ts,
                            safeAreaInsets: rL(a).insets,
                            styleVariables: nF,
                            theme: ty(),
                            userAgent: tC(aw()?.device),
                            toolInfo: aw()?.toolInfo
                        });
                        nY.current = t, null != t && ez(n4.notifyMcpAppsHostContext({
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
                        mcpAppId: eM,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (0, e_.e)(n ?? tV)
                }
            }), rk = (0, A.useEffectEvent)(() => ts), rU = (0, A.useEffectEvent)(() => tY.get(e_.h, eM)), rW = (0, A.useEffectEvent)(() => {
                var e;
                e = t_ ?? void 0, null != t && (0, Q.h)(t, eM, e)
            });
            (0, A.useEffect)(() => {
                rW()
            }, [eM, t_?.alt, t_?.knownAppId, t_?.logoDarkUrl, t_?.logoUrl]);
            let rH = (0, A.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tY.get(e_.q, eM)?.sourceMcpAppId !== eV) return;
                    let a = (null != tr ? t2.nullable() : t2).safeParse(t),
                        r = a.success ? a.data : null;
                    if (tY.set(e_.v, eM, r), null != tr && a.success) return tr.save(a.data, n)
                }),
                rj = e => {
                    null != n4 && ez(n4.navigate({
                        delta: e
                    }))
                },
                rV = {
                    name: null != e4 ? eB.originResourceUri ?? eB.originTool : `${td}.${eB.originTool}`,
                    attribution: "connectorId" in eR.serverIdentity ? eR.serverIdentity.connectorId : void 0
                },
                rq = (0, A.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, eo.getMcpAppSubmit)(t, () => {
                            eR.assertActive(), aw()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? rV : {
                        ...rV,
                        visuallyHidden: !0
                    }, e, r)
                }),
                rY = async function(e, t, n, a, r, i) {
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tM.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: i,
                        modelContextAttachments: o,
                        requestConfirmation: e => ad({
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
                }, rB = (0, A.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eq.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let r = (a = ax(), n.aborted || a && eN.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: i,
                        isVisible: o,
                        prompt: l,
                        title: u
                    } = (0, ey.b)(e), d = rq(n, o);
                    if (null == d) throw (0, eq.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let p = t.get(J.w).filter(e => "context" === e.kind),
                        _ = crypto.randomUUID(),
                        E = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await rY({
                            source: "mcp_app",
                            sourceId: eM,
                            widgetSource: eB.widgetSource,
                            text: l,
                            structuredContent: i ?? (0, ej.b)(rU())
                        }, l, d, n, u, void 0, p)
                    } catch (e) {
                        throw E?.({
                            attemptId: _,
                            result: "FAILED",
                            durationMs: performance.now() - f
                        }, i), e
                    }
                    E?.({
                        attemptId: _,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - f
                    }, i), (0, Q.b)(t, p)
                }), rz = e => {
                    e.throwIfAborted(), eR.assertActive(), e4?.assertActive?.()
                }, rK = async (e, t, n, a) => {
                    rz(t);
                    let r = null != e4 ? await e4.handleRequest(e, t, eB, n) : await a();
                    return rz(t), r
                }, rX = async (e, t, n) => {
                    let a = await rK({
                        method: "tools/call",
                        params: e
                    }, t, n, () => (async function(e) {
                        let {
                            appScope: t,
                            scope: n,
                            chatGptMessageId: a,
                            conversationId: r,
                            getTrustedToolScope: i,
                            hostId: o,
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
                                server: i,
                                threadId: o,
                                toolArguments: s,
                                toolName: l
                            } = e, c = await eJ({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: i,
                                threadId: o
                            }), u = eQ(c), d = n(c);
                            return {
                                ...eK(() => (0, eG.h)({
                                    server: i,
                                    toolArguments: s,
                                    toolScope: d,
                                    toolName: l,
                                    tools: u
                                })),
                                serverStatus: c
                            }
                        }({
                            scope: n,
                            getTrustedToolScope: i,
                            hostId: o,
                            mcpServerStatuses: l,
                            server: u,
                            threadId: n.get(Y.b, {
                                hostId: o,
                                conversationId: r
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        d.throwIfAborted(), c.assertActive();
                        let E = function(e, t) {
                                if (!(0, R.e)(e) || !tQ(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            f = null == _.codexAppsResourceUri ? E : {
                                ...tQ(E) ? E : {},
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
                            if (r.startsWith("chatgpt:")) return (0, eW.f)({
                                isCodexAppsServer: (0, R.e)(u),
                                toolResult: await (0, e1.b)(t, o, u, _.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: f,
                                    requestOptions: {
                                        widget: {
                                            conversationId: r,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let i = await (0, j.b)(n, o).callMcpTool({
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
                            return (0, eW.f)({
                                isCodexAppsServer: (0, R.e)(u),
                                toolResult: i
                            })
                        } catch (e) {
                            throw eX(e, "MCP tool call failed")
                        }
                    })({
                        appScope: tz,
                        scope: tY,
                        chatGptMessageId: eB.chatGptMessageId,
                        conversationId: i,
                        getTrustedToolScope: nZ,
                        hostId: em,
                        mcpAppId: eM,
                        mcpServerStatuses: e3,
                        access: eR,
                        server: td,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, b.r)(a)?.isError === !0) {
                        let t = e0.c.safeParse(a).data;
                        eT.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eM,
                                initId: (0, v.g)(n0?.getAttribute("src") ?? void 0)
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
                }, r$ = (0, A.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e8.b);
                    return rX((0, eq.d)(nr, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), rZ = (0, A.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e8.b),
                        r = c.X.safeParse(e);
                    if (!r.success) throw (0, eq.b)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? c.q.InvalidParams : c.q.InvalidRequest);
                    let o = tY.get(Y.b, {
                            hostId: em,
                            conversationId: i
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = r.data;
                    if (i.startsWith("chatgpt:") && t6.some(e => e === s)) throw (0, eq.a)("Resource subscriptions require a local Codex thread", c.q.MethodNotFound);
                    switch (s) {
                        case E.a: {
                            let {
                                path: e
                            } = (0, eq.d)(E.b, l, "Invalid MCP file open params");
                            if (!ab) throw (0, eq.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != am) return (0, D.a)(tY, d.CodexMcpExtensionAction, {
                                ...nA,
                                feature: "file_open",
                                action: "requested"
                            }), await am(e, n), {};
                            if (!(0, I.Ch)(e) || !(0, I.Fh)(e)) throw (0, eq.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, D.a)(tY, d.CodexMcpExtensionAction, {
                                ...nA,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: tY,
                                path: e,
                                cwd: null,
                                hostConfig: (0, eb.a)(tz, em),
                                hostId: em,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return a_?.includes("ping") ? rK(r.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tL.safeParse(e);
                                if (!t.success) throw Object.assign(Error("Invalid MCP app message params"), {
                                    code: -32602
                                });
                                let {
                                    content: n
                                } = t.data;
                                if (tO(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw Object.assign(Error("An MCP app message cannot be empty"), {
                                    code: -32602
                                });
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(l);
                            n.throwIfAborted();
                            let a = e.options?.target ?? "active";
                            if ((0, D.a)(tY, d.CodexMcpExtensionAction, {
                                    ...nA,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eq.a)("MCP app messages are disabled for this view", c.q.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, er.d)(t) && null == (0, er.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tF(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eZ,
                                    icon: t_,
                                    server: td,
                                    widgetSource: eB.widgetSource
                                });
                                if (aw()?.assertActive?.(), "new" === e.options.target) {
                                    if (ag) throw (0, eq.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(tz, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eq.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(J.v) || t.get(J.V) || null != t.get(et.b) || t.get(ei.g) || t.get(J.q) || !(0, eo.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, J.Eb)(t, e => {
                                        null != n.attachment && e.mcpAppModelContextAttachments.push(n.attachment)
                                    }), (0, ea.h)(t, {
                                        prefersReducedMotion: !0
                                    })
                                }
                                return {}
                            }
                            let {
                                prompt: r,
                                message: i,
                                attachment: o
                            } = function(e, t, n) {
                                let a = [],
                                    r = [];
                                for (let t of e) "text" === t.type && null == (0, er.a)(t) ? a.push(t.text) : r.push(t);
                                let i = tF(r, t),
                                    o = a.join("\n\n");
                                return {
                                    prompt: o.trim() ? o : n.formatMessage({
                                        id: "codex.mcpApp.contentMessage",
                                        defaultMessage: "Shared content from {appName}",
                                        description: "Message shown in the conversation when an MCP app sends attachments without text"
                                    }, {
                                        appName: t.sourceName
                                    }),
                                    message: {
                                        source: "mcp_app",
                                        sourceId: t.sessionId,
                                        text: o
                                    },
                                    attachment: i
                                }
                            }(e.content, {
                                sourceName: eZ,
                                icon: t_,
                                server: td,
                                sessionId: eM,
                                widgetSource: eB.widgetSource
                            }, nw), s = !1;
                            e.options?.target === "new" && null != rs && e5.appServices?.mcpAppSandbox != null && (rz(n), s = await e5.appServices.mcpAppSandbox.consumeUserGesture((0, eU.a)(rs, n0)).catch(() => !1) === !0, rz(n));
                            let p = e.options?.target === "new" ? (0, tM.a)({
                                scope: tz,
                                recipient: t,
                                getNewThreadDestination: tn,
                                globalEntrypointIdentity: "global" === nA.source ? {
                                    connectorId: nA.connectorId,
                                    pluginId: nA.pluginId
                                } : void 0,
                                canCreateCodexThreads: aT,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (ag) throw (0, eq.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    rz(n)
                                },
                                sourceName: eZ,
                                toolOrigin: rV,
                                signal: n
                            }) : rq(n);
                            if (null == p) throw (0, eq.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let _ = t?.get(J.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eM
                            }) ?? [];
                            return await rY(i, r, p, n, void 0, o, _), null != t && (0, Q.b)(t, _), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eq.d)(nn, l, "Invalid MCP file download params");
                            return (0, te.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eq.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eq.d)(t3, l, "Invalid MCP model context params");
                            if (null != rq() && tO(e.content), nP && e.content?.some(e => "image" === e.type && !(0, I.Ci)({
                                    type: e.mimeType
                                }))) throw (0, eq.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != tr && tY.get(e_.q, eM)?.sourceMcpAppId !== eV) throw (0, eq.a)("The widget source is no longer active", -32e3);
                            aw()?.onModelContextUpdate?.(e, eM), (0, K.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    r = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eB.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: td,
                                    composerIcon: t_ ?? void 0,
                                    sourceName: eZ,
                                    id: eM,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, tX.b)(tY, eM, t.get(J.w).find(e => e.id === eM) ?? null)), r
                            })(e);
                            if ((0, D.a)(tY, d.CodexMcpExtensionAction, {
                                    ...nA,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != tr) {
                                var p = await rH(eV, e, !0);
                                if (p?.ok !== !0) throw Object.assign((0, eq.a)("The host could not persist the model context update", -32e3), {
                                    data: {
                                        code: p?.code ?? "update_model_context_persistence_failed",
                                        retryable: p?.retryable ?? !0
                                    }
                                })
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
                            return rX((0, eq.d)(nr, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eq.d)(ni, l, "Invalid MCP resource read params");
                            if (rz(n), (0, D.a)(tY, d.CodexMcpExtensionAction, {
                                    ...nA,
                                    feature: "resource",
                                    action: "read"
                                }), e4?.readHostResource != null) {
                                rz(n);
                                let t = await e4.readHostResource(e, n);
                                if (rz(n), null != t) return t
                            }
                            return eK(() => {
                                (0, eG.a)({
                                    mcpAppScope: eB,
                                    server: td,
                                    uri: e.uri
                                })
                            }), await rK({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, ex.d)({
                                        scope: tY,
                                        appContext: eB.appContext,
                                        connectorId: (0, R.e)(td) ? nE : null,
                                        hostId: em,
                                        mcpAppId: eM,
                                        originCallId: eB.originCallId ?? null,
                                        threadId: i,
                                        server: td,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw eX(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eq.d)(ni, l, "Invalid MCP resource subscribe params");
                            return rz(n), (0, D.a)(tY, d.CodexMcpExtensionAction, {
                                ...nA,
                                feature: "resource",
                                action: "subscribe"
                            }), await an.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eq.d)(ni, l, "Invalid MCP resource unsubscribe params");
                            return rz(n), (0, D.a)(tY, d.CodexMcpExtensionAction, {
                                ...nA,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await an.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eq.d)(no, l, "Invalid MCP event subscribe params"),
                                t = tY.get(e_.i, eV)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nZ(await eJ({
                                    scope: tY,
                                    hostId: em,
                                    mcpServerStatuses: e3,
                                    server: td,
                                    threadId: o
                                }))), null == n) throw (0, eq.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return aa.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eq.d)(ns, l, "Invalid MCP event unsubscribe params");
                            return aa.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return rK(r.data, n, a, async () => {
                                let e = await eJ({
                                        scope: tY,
                                        hostId: em,
                                        mcpServerStatuses: (0, R.e)(td) ? e3 : void 0,
                                        server: td,
                                        threadId: o
                                    }),
                                    t = eQ(e),
                                    n = nZ(e);
                                return {
                                    tools: eK(() => (0, eG.e)({
                                        server: td,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return rK(r.data, n, a, async () => (0, R.e)(td) ? {
                                resources: []
                            } : {
                                resources: (await eJ({
                                    scope: tY,
                                    hostId: em,
                                    server: td,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return rK(r.data, n, a, async () => (0, R.e)(td) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eJ({
                                    scope: tY,
                                    hostId: em,
                                    server: td,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return rK(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return rK(r.data, n, a, async () => {
                                throw (0, eq.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                }), rJ = (0, A.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(279799)]).then(n.bind(n, "Rq7I"));
                    rz(t), a(tJ(), {
                        Frame: nd,
                        sourceMcpAppId: eV,
                        signal: t,
                        handleRequest: async (e, n) => c._.parse(await rZ(e, n ?? t))
                    }, e)
                });
            (0, A.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nQ(e), () => {
                    e.remove(), nQ(t => t === e ? null : t), n3(!1)
                }
            }, [eM]), (0, A.useLayoutEffect)(() => {
                null != nJ && null != n0 && function(e) {
                    let {
                        frameElement: t,
                        sandboxElement: n,
                        fullSurface: a,
                        liftModal: r,
                        inheritHostBackground: i,
                        isCardInlineSurface: o,
                        isFullScreen: s,
                        isWidgetVisible: l,
                        prefersBorder: c,
                        surfaceBackgroundColor: u,
                        title: d,
                        globalSurface: p
                    } = e, _ = !s && !a && !o;
                    t.className = (0, tP.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", r && "z-50", !s && !a && !o && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tP.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", _ && "rounded-lg", o && c && "borderedCardSandbox-KmZ5WZ", s && "min-h-0 flex-1"), n.style.backgroundColor = !r && (i || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: nJ,
                    sandboxElement: n0,
                    fullSurface: k,
                    liftModal: rf,
                    inheritHostBackground: eP,
                    isCardInlineSurface: rp,
                    isFullScreen: nW,
                    isWidgetVisible: nk && null != nU,
                    prefersBorder: n_,
                    surfaceBackgroundColor: nM,
                    title: tg,
                    globalSurface: tT
                })
            }, [k, rf, nJ, eP, rp, nW, nk, nU, n_, n0, nM, tg, tT]), (0, A.useLayoutEffect)(() => {
                if (null == nJ) return;
                let e = nW ? rc : ru,
                    t = rT ? (0, X.a)() : rI;
                if (rf && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nJ.style.display;
                    nJ.style.display = "none", e || eT.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: ry().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (nJ.parentElement !== t && (nJ.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nJ, null) : t.appendChild(nJ), eT.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: ry().safe.mcpAppId,
                                showInModal: rf
                            }
                        })), n2 || n3(!0), null == e) {
                        let e = "none" === nJ.style.display;
                        nJ.style.display = "none", e || eT.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: ry().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete nJ.dataset.mcpAppParked,
                        function(e) {
                            let {
                                sharesScrollHost: t,
                                frameElement: n,
                                frameContainer: a,
                                fullSurface: r = !1,
                                modalOpen: i = !1,
                                sandboxElement: o,
                                isFullScreen: s,
                                isInGlobalHost: l,
                                anchorElement: c,
                                rightPanelAnimationProgress: u,
                                rightPanelLayoutTick: d
                            } = e, p = i || s || l, _ = i ? (0, tR.b)(n) : void 0, E = null, f = s && !l ? new MutationObserver(() => g()) : null, m = new ResizeObserver(() => g()), g = () => {
                                let e = c.currentCSSZoom ?? 1,
                                    t = (0, tS.a)(c, e),
                                    u = {
                                        ...t
                                    },
                                    d = s || r ? c.closest('[data-app-shell-focus-area="right-panel"]') : null,
                                    _ = "";
                                i ? _ = "" : null != d && (_ = (0, tS.b)(t, (0, tS.a)(d, e))), n.style.position = p ? "fixed" : "absolute";
                                let m = null;
                                if (p ? l || i || (m = n.offsetParent) : m = a, null != m) {
                                    let t = (0, tS.a)(m, e);
                                    u.x -= t.x, u.y -= t.y
                                }
                                p || (u.x += a.scrollLeft, u.y += a.scrollTop);
                                let g = "";
                                i || (g = s ? "43" : "1"), Object.assign(n.style, {
                                    ...(0, tS.d)(u, e / (a.currentCSSZoom ?? 1)),
                                    clipPath: _,
                                    display: "",
                                    zIndex: g
                                });
                                let h = r || s ? (0, tS.c)(c) : null;
                                if (n.style.borderRadius = h?.join(" ") ?? "", null != o)
                                    if (null == h) o.style.borderRadius = "";
                                    else {
                                        let e = getComputedStyle(n),
                                            t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                            a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                        o.style.borderRadius = [t, a].map(e => h.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                                    } null != f && m !== E && (f.disconnect(), E = m, null != m && f.observe(m, {
                                    attributeFilter: ["class", "style"],
                                    attributes: !0
                                }))
                            };
                            m.observe(a);
                            let h = t && !p && !r && a.contains(c),
                                T = e => {
                                    e.target instanceof Element && e.target !== a && e.target.contains(c) && g()
                                };
                            h && a.addEventListener("scroll", T, !0);
                            let I = (0, tw.b)(c, n, g, h ? {
                                    ancestorScroll: !1,
                                    ancestorResize: !1
                                } : void 0),
                                b = (0, tD.a)({
                                    update: g,
                                    motionValues: [d, s ? u : void 0]
                                });
                            return () => {
                                _?.(), b.disconnect(), I(), h && a.removeEventListener("scroll", T, !0), m.disconnect(), f?.disconnect()
                            }
                        }({
                            sharesScrollHost: rg?.contains(t) === !0,
                            frameElement: nJ,
                            frameContainer: t,
                            fullSurface: k,
                            modalOpen: rf,
                            sandboxElement: n0,
                            isFullScreen: nW,
                            isInGlobalHost: rT,
                            anchorElement: e,
                            rightPanelAnimationProgress: nL,
                            rightPanelLayoutTick: tl
                        })
                };
                return k || nW || rf || rT || !eh || null == e || e.hidden || "true" !== nJ.dataset.mcpAppParked ? n() : (0, tm.a)(e, n)
            }, [nJ, k, rf, eh, rg, ru, nW, rT, n2, nL, tl, n0, rc, rI]);
            let rQ = e4?.autoFocus === !0;
            (0, A.useEffect)(() => {
                rQ && nk && null != ru && n0?.focus()
            }, [rQ, nk, ru, n0]), (0, A.useLayoutEffect)(() => (nV.current = !1, () => {
                nV.current = !0
            }), [eM, tY]);
            let r0 = (0, A.useEffectEvent)(async () => {
                    try {
                        if (e4?.assertActive?.(), !aH) return;
                        let e = tV.openInAppUrl ?? w.string().nullable().parse(await n4?.getCurrentPath?.(void 0));
                        if (e4?.assertActive?.(), null == e) return;
                        let t = e4?.openInApp?.validateUrl(null == tV.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                r1 = (0, A.useEffectEvent)(e => {
                    let t = tY.get(z.j.tabs$).some(e => e.tabId === (0, e9.b)(eM));
                    (0, e9.c)(tY, {
                        source: {
                            hostId: em,
                            server: td,
                            connectorId: nE ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: t_,
                        mcpAppId: eM,
                        onExitFullScreen: e,
                        onPanelElementChange: n6,
                        title: tV.displayModeTitle ?? tE,
                        openInAppName: e4?.openInApp?.appName,
                        onOpenInApp: aH ? () => {
                            r0()
                        } : void 0
                    })
                }),
                r2 = (0, A.useEffectEvent)(() => {
                    let e = tY.get(e_.q, eM);
                    !nV.current && e?.isOpen && "fullscreen" === e.displayMode && (0, e_.c)(tY, eM)
                }),
                r3 = (0, A.useEffectEvent)(e => {
                    let t = aw()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nA);
                    else {
                        let t = w.object({
                            type: w.literal("interaction"),
                            label: w.string()
                        }).safeParse(e);
                        t.success && (0, D.a)(tY, u.l, {
                            ...nA,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, A.useLayoutEffect)(() => {
                nW ? r1(r2) : (0, e9.a)(tY, eM)
            }, [nW, eM, tY, t_?.alt, t_?.knownAppId, t_?.logoDarkUrl, t_?.logoUrl, tE, tV.displayModeTitle, aH, e4?.openInApp?.appName]);
            let r5 = (0, A.useEffectEvent)(() => {
                    let e = nW ? rc : ru;
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
                r6 = null != nJ && n2 && null != rb && null != rs && null != ro,
                r8 = (0, A.useEffectEvent)(e => {
                    let t;
                    if (!r6) return;
                    let n = e2.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: eM,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    nz.current = n, n.mark("surface_mcp_app"), (0, e_.C)(tJ(), eM, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), ai(nc), nX.current = null, n$.current = null;
                    let r = rl();
                    if (null == r) return void rN("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let i = [...new Set(["fullscreen", "encrypted-media", ...nC?.split(";") ?? [], ...nN ? ["local-network-access"] : []])],
                        o = (0, ek.a)(r_, rs, ro);
                    o instanceof HTMLIFrameElement && (o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != nC ? o.allow = i.map(e => `${e} *`).join("; ") : o.allow = nN ? "encrypted-media *; local-network-access" : "encrypted-media *", o.allowFullscreen = !0), o.classList.add("pointer-events-none", "opacity-0"), nJ.appendChild(o), n1(o), n.mark("rendered");
                    let u = new AbortController,
                        d = !1,
                        h = new tf,
                        T = null == s ? null : new eg(s),
                        I = null,
                        b = crypto.randomUUID(),
                        A = rU(),
                        y = a4(),
                        {
                            sourceMcpAppId: C,
                            toolInput: N,
                            toolOutput: R,
                            toolResponseMetadata: P,
                            toolResult: S,
                            toolStatus: G,
                            toolResultNotification: x,
                            toolCallCancellationReason: L
                        } = ra(),
                        O = new t0.b(tJ(), C, e => {
                            rD({
                                href: e
                            }, u.signal).catch(e => {
                                u.signal.aborted || (0, eY.d)(e, ry())
                            })
                        });
                    nX.current = null == S || null == R ? null : {
                        widgetId: b,
                        widgetState: A,
                        sourceMcpAppId: C,
                        toolInput: N,
                        toolOutput: R,
                        toolResponseMetadata: P,
                        toolStatus: G,
                        toolResult: x,
                        toolCallCancellationReason: L
                    };
                    let F = ay ? {
                            requestConnectPlugin: async e => aw()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tB.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aw()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aw()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aw()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        M = null == S ? null : F ?? rr(S),
                        k = null == M ? null : {
                            ...M,
                            requestDeclinePluginSuggestions: F?.requestDeclinePluginSuggestions ?? (null == M.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = ra().toolResult,
                                    t = null == e ? void 0 : rr(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await e5.appServices?.mcpAppSandbox?.consumeUserGesture((0, eU.a)(rs, o)).catch(() => !1) || u.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        U = () => {
                            let e = aw()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        W = {
                            ...k,
                            downloadBlob: aB ? e => aw()?.downloadBlob?.(e, u.signal) : void 0,
                            triggerHaptic: az ? e => aw()?.triggerHaptic?.(e, u.signal) : void 0,
                            requestCheckout: aF ? async e => {
                                u.signal.throwIfAborted();
                                let t = aw();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, u.signal)
                            } : void 0,
                            requestModal: async e => {
                                u.signal.aborted || (aS ? await ax()?.requestModal(e) : null != a0() && (aw()?.requestModal == null || w.object({
                                    params: w.object({
                                        view: w.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rx(e, u.signal, ti) : aw()?.requestModal != null ? await aw()?.requestModal?.(e, u.signal) : await rJ(e, u.signal))
                            },
                            uploadFile: aK ? (e, t) => U().uploadFile(e, t, u.signal) : void 0,
                            getFileDownloadUrl: aK ? e => U().getFileDownloadUrl(e, u.signal) : void 0,
                            getFileMetadata: aK ? e => U().getFileMetadata(e, u.signal) : void 0,
                            selectFiles: aK ? () => U().selectFiles(u.signal) : void 0,
                            share: aX ? async e => {
                                u.signal.throwIfAborted(), await aw()?.share?.(e, u.signal)
                            } : void 0,
                            requestLinkToConnector: aS || aJ ? async e => u.signal.aborted ? {
                                didConnect: !1
                            } : await (ax()?.requestLinkToConnector ?? aw()?.requestLinkToConnector)?.(e, u.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: aG ? e => {
                                u.signal.aborted || (ax()?.showToast ?? aw()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aN || aS && aR || aj ? () => {
                                u.signal.aborted || aw()?.allowsInteractiveDismissal === !1 || (aN || aS || aw()?.displayMode != null ? rS() : rM({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: e => {
                                let t = I?.notifyMcpAppsMcpNotification;
                                if (ap && null != t) {
                                    let n = O.handleRequest(e, u.signal, e => ez(t(e)));
                                    if (null != n) return n
                                }
                                let n = h.handleRequest(e, {
                                    sandboxElement: o,
                                    sandboxId: rs,
                                    initId: j,
                                    signal: u.signal,
                                    notify: I?.notifyMcpAppsMcpNotification
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
                                return r.success && null != T ? T.handleRequest(r.data.params) : rZ(e, u.signal).catch(t => {
                                    if (!u.signal.aborted) {
                                        let n = ry();
                                        eT.a.warning("App request failed", {
                                            safe: {
                                                ...(0, eY.b)(t),
                                                connectorId: n.safe.connectorId,
                                                mcpAppId: n.safe.mcpAppId,
                                                sandboxId: n.safe.sandboxId,
                                                initId: n.safe.initId
                                            },
                                            sensitive: {
                                                method: c.X.safeParse(e).data?.method,
                                                hostId: n.sensitive.hostId,
                                                server: n.sensitive.server,
                                                error: t
                                            }
                                        })
                                    }
                                    throw t
                                })
                            },
                            callTool: (e, t) => r$(e, t, u.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!u.signal.aborted) {
                                    if (eY.i.safeParse(e).success) return void(0, eY.d)(e, ry());
                                    rN("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rw,
                            notifyIntrinsicWidth: rR,
                            notifyNavigation: e => {
                                u.signal.aborted || rP(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                u.signal.aborted || aw()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rD(e, u.signal),
                            openPlaidLink: a3 ? e => rG(e, u.signal) : void 0,
                            initializeMcpApp: e => {
                                if (u.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rF(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rN("configuration", e), e
                                }
                            },
                            requestClose: aR ? rS : void 0,
                            requestDisplayMode: rM,
                            openConversationOverlay: aM ? async e => {
                                u.signal.throwIfAborted(), await aw()?.openConversationOverlay?.(e, u.signal)
                            } : void 0,
                            notifyAutofillCandidates: aU ? e => {
                                u.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: ak ? e => {
                                u.signal.throwIfAborted();
                                let t = aw()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, o, u.signal)
                            } : void 0,
                            setOpenInAppUrl: aW ? e => {
                                u.signal.throwIfAborted();
                                let {
                                    href: t
                                } = w.object({
                                    href: w.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, e_.C)(tJ(), eM, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aw()?.openInApp?.validateUrl(t);
                                null != n && (0, e_.C)(tJ(), eM, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: aV ? async e => {
                                u.signal.throwIfAborted(), await aw()?.presentation?.requestFocusedObject?.(e, u.signal)
                            } : void 0,
                            requestCloseFocusedObject: aq ? async () => {
                                u.signal.throwIfAborted(), await aw()?.presentation?.requestCloseFocusedObject?.(u.signal)
                            } : void 0,
                            requestTargetedReply: aD ? async e => {
                                if (u.signal.aborted) return;
                                let t = ax()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aw()?.setTargetedReply;
                                if (null != n) return void n(e, u.signal);
                                let a = aw()?.requestTargetedReply;
                                null != a && await (0, ey.c)(e, a, ad, u.signal)
                            } : void 0,
                            requestReconnectConnector: aZ ? async () => {
                                let e = aw()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(u.signal)
                            } : void 0,
                            requestConnectSheet: a$ ? e => {
                                let t = aw()?.requestConnectSheet;
                                if (null != t) return t(e, u.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => rB(e, u.signal),
                            sendInstrument: e => {
                                if (!u.signal.aborted) {
                                    if (aC || null != k) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, D.a)(tJ(), t.messageType, t.payload)
                                    }
                                    eY.g.safeParse(e).success && ((0, eY.d)(e, ry()), rC("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), k?.sendInstrument(e);
                                    let t = a0() ?? a2();
                                    t?.sendInstrument(e), (null == t && null == k || w.object({
                                        type: w.literal("interaction")
                                    }).safeParse(e).success) && r3(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!u.signal.aborted) return rH(e, t, w.object({
                                    waitForPersistence: w.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        H = (0, eU.b)({
                            hostApiHandlers: W,
                            assertActive: () => {
                                u.signal.throwIfAborted(), t1(), aw()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: rs,
                            signal: u.signal,
                            sourceUrl: r.sourceUrl,
                            webview: o
                        }),
                        j = (0, v.g)(o.getAttribute("src") ?? void 0),
                        V = ry();
                    eT.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nS,
                            connectorId: V.safe.connectorId,
                            mcpAppId: V.safe.mcpAppId,
                            sandboxId: V.safe.sandboxId,
                            initId: j
                        },
                        sensitive: {
                            hostId: V.sensitive.hostId,
                            server: V.sensitive.server
                        }
                    });
                    let q = setTimeout(() => {
                        rN("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), B(), Y()
                    }, 5e4);

                    function Y() {
                        clearTimeout(q), e()
                    }

                    function B() {
                        u.signal.aborted || (clearTimeout(q), u.abort(), al(), nz.current === n && (nz.current = null), n.isRecording() && n.abort("navigation_away"), h[Symbol.dispose](), O[Symbol.dispose](), T?.[Symbol.dispose](), nX.current = null, n$.current = null, nq.current = null, nY.current = null, nB.current = null, (0, e_.C)(tJ(), eM, {
                            isWidgetReady: !1
                        }), n7(null), ai(nc), null != I && ez(I.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), o.remove(), o instanceof HTMLIFrameElement || o.destroy?.(), eT.a.info("Removed app sandbox", {
                            safe: {
                                initId: j
                            }
                        }), n1(e => e === o ? null : e))
                    }
                    return H.then(async e => {
                        if (u.signal.aborted) return;
                        n.mark("sandbox_ready"), eT.a.info("Connected app sandbox", {
                            safe: {
                                initId: j
                            }
                        }), I = e;
                        let o = e.notifyMcpAppsMcpNotification,
                            l = e5.appServices?.mcpAppSandbox != null && null != o;
                        null != o && T?.setNotificationSender(e => ez(o(e))), null != e.applyAutofillCandidate && (t = await aw()?.autofill?.(e.applyAutofillCandidate, u.signal), u.signal.throwIfAborted()), n7({
                            api: e,
                            widgetId: b
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: p
                        } = rO(), h = ty(), {
                            containerDimensions: v
                        } = rv(nJ), C = tC(aw()?.device), w = tJ().get(eC.a), S = w["--color-background-primary"], D = rL(c), G = {
                            "openai/viewer-header": ap && null != o,
                            ...tv({
                                availableDisplayModes: p,
                                containerDimensions: v,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nG(),
                                deepLink: rk(),
                                safeAreaInsets: D.insets,
                                styleVariables: w,
                                theme: h,
                                userAgent: C,
                                toolInfo: aw()?.toolInfo
                            }),
                            ...null == s || null == o ? {} : {
                                [_.a]: !0
                            },
                            ...null == g ? {} : {
                                [_.d]: !0
                            }
                        }, {
                            csp: x
                        } = r, L = nm ? {} : void 0;
                        aI && (L = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == T && rA(), eT.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: j
                            }
                        }), d = !0;
                        let O = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != aA,
                                expectedReadySignal: aA,
                                csp: x,
                                displayMode: aL(c),
                                features: i,
                                subjectId: aw()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nh,
                                html: r.html,
                                isFirstParty: aC || null != k || aZ,
                                isSidebarOpen: aw()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aw()?.isTombstone === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                measureWidth: !0 === t7,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [tp] : [], ...ap && null != o ? [t0.a] : [], ...aI || !nm ? ["ui/message"] : [], ...aE?.split(";") ?? [], ...ab ? [E.a] : [], ...null == T || null == o ? [] : [_.c], ...null == g ? [] : [_.e], ...null == o ? [] : [...t6, ...at && !av ? t8 : []]],
                                    hostCapabilities: {
                                        experimental: {
                                            [f.a]: {},
                                            ...l ? {
                                                "openai/find": {}
                                            } : {},
                                            ...aI ? {
                                                [m.a]: {
                                                    draft: ng() ? {} : void 0
                                                }
                                            } : {},
                                            "openai/skillsDeepLinks": {},
                                            ...r.experimentalCapabilities,
                                            ...ab ? {
                                                "openai/files": {}
                                            } : {}
                                        },
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: L,
                                        updateModelContext: nm ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: null != x || null != nC ? {
                                            permissions: null == nC ? void 0 : {
                                                camera: i.includes("camera") ? {} : void 0,
                                                microphone: i.includes("microphone") ? {} : void 0,
                                                geolocation: i.includes("geolocation") ? {} : void 0,
                                                clipboardWrite: i.includes("clipboard-write") ? {} : void 0
                                            },
                                            csp: null == x ? void 0 : {
                                                baseUriDomains: x.baseUriDomains,
                                                connectDomains: x.connectDomains,
                                                frameDomains: x.frameDomains,
                                                resourceDomains: x.resourceDomains
                                            }
                                        } : void 0
                                    },
                                    hostContext: G,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: tJ().get(eI.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tT
                                },
                                safeArea: D,
                                theme: h,
                                toolInput: N,
                                toolOutput: R,
                                toolResponseMetadata: P,
                                userAgent: C,
                                viewParams: y,
                                widgetId: b,
                                widgetState: A
                            }),
                            F = !1;
                        for await (let t of O) {
                            let a = tJ().get(e_.q, eM)?.sandboxError;
                            if (u.signal.aborted || nf(a)) break;
                            if (eY.f.safeParse(t).success) return;
                            eY.g.safeParse(t).success && ((0, eY.d)(t, ry()), rC("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = eY.h.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new tK.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (F || !eU.d.safeParse(t).success) continue;
                            F = !0, Y();
                            let {
                                displayMode: i,
                                availableDisplayModes: o
                            } = rO(), s = {
                                ...G,
                                displayMode: i,
                                availableDisplayModes: [...o]
                            };
                            (0, e_.C)(tJ(), eM, {
                                isWidgetReady: !0
                            }), ez(e.setWidgetView({
                                displayMode: aL(i),
                                isTombstone: aw()?.isTombstone === !0,
                                viewParams: y,
                                widgetId: b
                            })), ez(e.setTheme({
                                theme: h
                            })), ez(e.setSafeArea({
                                safeArea: D
                            }));
                            let l = {
                                isSidebarOpen: aw()?.presentation?.isSidebarOpen === !0,
                                maxHeight: v.maxHeight,
                                maxWidth: v.maxWidth,
                                surfaceBackgroundColor: S
                            };
                            nB.current = l, ez(e.setAdditionalGlobals({
                                additionalGlobals: l
                            })), ez(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), eT.a.info("Started app widget", {
                                safe: {
                                    displayMode: i,
                                    initId: j
                                }
                            }), n.end()
                        }
                        if (!F && !u.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        u.signal.aborted || (d && rC("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rN(null == I ? "handshake" : "widget", e)), B()
                    }).finally(() => {
                        Y()
                    }), B
                });
            (0, A.useLayoutEffect)(() => {
                if (r6) return tJ().get(tN, void 0)(r8, e => rN("handshake", e), r5)
            }, [r6, nm, nh, nN, nC, aB, az, al, ab, aI, a3, aR, ef, null, em, nS, nJ, k, q, s, g, av, t7, ay, aF, aX, aK, a$, aZ, aJ, aN, aG, aS, aD, aj, aW, aM, ak, aU, aV, aq, aC, ap, aE, aA, a.requiresMcpInitialization, ti, n2, eM, ri, ad, rs, rb, ro, r_, td, at, af, tT]), (0, A.useLayoutEffect)(() => {
                an.setConversation(i).catch(e => {
                    eT.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: i,
                            mcpAppId: eM
                        },
                        sensitive: {
                            error: e,
                            hostId: em
                        }
                    })
                })
            }, [i, em, an, eM]), (0, A.useLayoutEffect)(() => {
                aa.setConversation(i, at && nb).catch(e => {
                    eT.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [i, aa, nb, at]), (0, A.useLayoutEffect)(() => {
                let e = n4?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = aa.connectNotificationSink(e);
                return () => {
                    t(), aa.clear().catch(e => {
                        eT.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [aa, n4]), (0, A.useLayoutEffect)(() => {
                let e = n4?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = an.connectNotificationSink(t => ez(e(t)));
                return () => {
                    t(), an.clear().catch(e => {
                        eT.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [an, n4]), (0, A.useEffect)(() => {
                if (!nk || null == n4 || null == n9) return;
                let e = {
                        widgetId: n9,
                        sourceMcpAppId: eV,
                        toolInput: a5,
                        toolOutput: a8,
                        toolResponseMetadata: rn,
                        toolStatus: rt,
                        toolCallCancellationReason: tH,
                        toolResult: re
                    },
                    t = {
                        ...e,
                        widgetState: nK
                    };
                h()(nX.current, t) || (nX.current = t, ez(n4.setWidgetData({
                    toolInput: a5,
                    toolOutput: a8,
                    toolResponseMetadata: rn,
                    widgetId: n9,
                    widgetState: nK
                })));
                let n = n$.current?.widgetId === n9 ? n$.current : null;
                if (h()(n, e)) return;
                n$.current = e;
                let a = n?.sourceMcpAppId !== eV;
                null != a5 && (a || !h()(n?.toolInput, a5)) && ez(n4.notifyMcpAppsToolInput({
                    arguments: a5
                })), "cancelled" === rt ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tH) && ez(n4.notifyMcpAppsToolCancelled({
                    reason: tH
                })) : null == re || !a && h()(n?.toolResult, e.toolResult) && n?.toolStatus === rt && h()(n?.toolInput, a5) && h()(n?.toolResponseMetadata, rn) || ez(n4.notifyMcpAppsToolResult({
                    ...re,
                    isError: "error" === rt || re.isError,
                    _meta: "error" === rt ? {
                        ...re._meta,
                        status: "error"
                    } : re._meta
                }))
            }, [nk, re, n4, eV, a5, a8, rn, rt, tH, n9, nK]), (0, A.useEffect)(() => {
                nk && null != n4 && ez(n4.notifyMcpAppsHostContext({
                    hostContext: {
                        [f.a]: nD
                    }
                }))
            }, [nk, nD, n4]), (0, A.useEffect)(() => {
                if (nk && null != n4 && null != nJ) return s?.observeHostContext?.(tY, nJ, e => {
                    ez(n4.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, nJ, nk, n4, tY]), (0, A.useEffect)(() => {
                if (null == nJ || !rd || null == n4 || null == n9 || nW && null == rc) return;
                let e = rL(nH);
                ez(n4.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aL(nH),
                    isTombstone: aw()?.isTombstone === !0,
                    viewParams: a7,
                    widgetId: n9
                };
                return h()(nq.current, t) || (nq.current = t, ez(n4.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: a,
                            rightPanelAnimationProgress: r,
                            onLayout: i
                        } = e, o = null, s = () => {
                            null == o && (o = window.requestAnimationFrame(() => {
                                o = null, i()
                            }))
                        };
                        if (s(), "u" < typeof ResizeObserver) return () => {
                            null != o && window.cancelAnimationFrame(o)
                        };
                        let l = new ResizeObserver(s);
                        l.observe(t), a && n?.parentElement != null && l.observe(n.parentElement);
                        let c = r.on("change", s);
                        return () => {
                            l.disconnect(), c(), null != o && window.cancelAnimationFrame(o)
                        }
                    }({
                        frameElement: nJ,
                        inlineAnchor: ru,
                        fitWidth: t7,
                        rightPanelAnimationProgress: nL,
                        onLayout: () => {
                            if ("true" === nJ.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rv(nJ), n = {
                                isSidebarOpen: aw()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rf ? "transparent" : nM
                            };
                            h()(nB.current, n) || (nB.current = n, ez(n4.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tv({
                                availableDisplayModes: tV.availableDisplayModes ?? ef,
                                containerDimensions: t,
                                displayMode: nH,
                                locale: nw.locale,
                                deepLink: ts,
                                safeAreaInsets: e.insets,
                                styleVariables: nF,
                                theme: ty(),
                                userAgent: tC(aw()?.device),
                                toolInfo: aw()?.toolInfo
                            });
                            h()(nY.current, a) || (nY.current?.theme !== a.theme && ez(n4.setTheme({
                                theme: a.theme
                            })), nY.current = a, ez(n4.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nJ, t7, nj, k, q, ru, nw.locale, nF, ef, tV.availableDisplayModes, rd, nW, aQ, aY, rf, e4?.displayMode, e4?.showModalCloseButton, as, ts, nL, nO, n4, rc, nM, tT, a7, n9, nH]);
            let r7 = as && !nW,
                r4 = as && nW && nx?.tabId === (0, e9.b)(eM);
            return (0, o.jsxs)(o.Fragment, {
                children: [k && rd && nk && null != n0 && null != rs ? (0, o.jsx)(th, {
                    sandboxElement: n0,
                    sandboxId: rs
                }) : null, nk && null != n0 && null != rs ? (0, o.jsx)(tc, {
                    panelTabId: nW ? (0, e9.b)(eM) : e4?.panelTabId ?? null,
                    sandboxElement: n0,
                    sandboxId: rs,
                    title: tg
                }) : null, null != ac && rd ? (0, o.jsx)(eA.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...ac,
                        onCancel: al,
                        onConfirm: au
                    }
                }) : null, r4 ? (0, o.jsx)(B.a.RightPanelTabListBefore, {
                    children: (0, o.jsx)(tq, {
                        canGoBack: ar.canGoBack,
                        canGoForward: ar.canGoForward,
                        className: "h-full px-1",
                        onBack: () => rj(-1),
                        onForward: () => rj(1)
                    })
                }) : null, r7 && null != nJ && !nW ? (0, y.createPortal)((0, o.jsx)(tq, {
                    canGoBack: ar.canGoBack,
                    canGoForward: ar.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => rj(-1),
                    onForward: () => rj(1)
                }), nJ) : null]
            })
        }

        function nf(e) {
            return null != e && !(e instanceof tK.a)
        }
    }),
    Odi7: (function(e, t, n) {
        function a(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = Math.max(e ?? t ?? 480, n ?? 200);
            return a || null != e ? r : Math.min(r, 720)
        }
        n.d(t, {}, {
            a: a,
            b: function(e, t) {
                return a(null, e, t)
            }
        })
    }),
    FZiz: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("Wf1j"),
            o = n("DcH0"),
            s = n("X3K1"),
            l = n("zOE4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, u = (0, r.c)(20),
                    {
                        className: d,
                        height: p,
                        inlineFramePadding: _,
                        allowCompact: E,
                        fullSurface: f,
                        showLoadingStatus: m,
                        disableInlineLoadingState: g
                    } = e,
                    h = void 0 !== E && E,
                    T = void 0 === m || m,
                    I = (0, i.a)();
                u[0] !== I ? (t = I.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }), u[0] = I, u[1] = t) : t = u[1];
                let b = t;
                if (void 0 !== f && f) {
                    let e, t, n = T ? "status" : void 0,
                        r = !T;
                    return u[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), u[2] = e) : e = u[2], u[3] !== b || u[4] !== n || u[5] !== r ? (t = (0, a.jsx)("div", {
                        className: "relative h-full min-h-0",
                        role: n,
                        "aria-hidden": r,
                        "aria-label": b,
                        "data-mcp-app-loading": "true",
                        children: e
                    }), u[3] = b, u[4] = n, u[5] = r, u[6] = t) : t = u[6], t
                }
                if (void 0 !== g && g) {
                    let e;
                    return u[7] !== p ? (e = (0, a.jsx)("div", {
                        "aria-hidden": "true",
                        style: {
                            height: p
                        }
                    }), u[7] = p, u[8] = e) : e = u[8], e
                }
                u[9] !== h || u[10] !== d || u[11] !== p || u[12] !== _ || u[13] !== b || u[14] !== T ? (n = h && "number" == typeof p && p > 0 && p < 48 ? (0, a.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    role: T ? "status" : void 0,
                    "aria-hidden": !T,
                    "aria-label": b,
                    "data-mcp-app-loading": "true",
                    style: {
                        height: null == _ ? p : "100%"
                    },
                    children: (0, a.jsx)(s.a, {
                        className: "w-48 max-w-full",
                        size: "md"
                    })
                }) : (0, a.jsx)(o.a, {
                    className: d,
                    role: T ? "status" : void 0,
                    "aria-hidden": !T,
                    "aria-label": b,
                    "data-mcp-app-loading": "true",
                    style: {
                        height: null == _ ? p : "100%"
                    }
                }), u[9] = h, u[10] = d, u[11] = p, u[12] = _, u[13] = b, u[14] = T, u[15] = n) : n = u[15];
                let v = n;
                return u[16] !== p || u[17] !== _ || u[18] !== v ? (c = null == _ ? v : (0, a.jsx)("div", {
                    style: {
                        height: p,
                        paddingBlockStart: _.blockStart,
                        paddingBlockEnd: _.blockEnd,
                        paddingInlineStart: _.inlineStart,
                        paddingInlineEnd: _.inlineEnd
                    },
                    children: v
                }), u[16] = p, u[17] = _, u[18] = v, u[19] = c) : c = u[19], c
            }
        })
    }),
    engp: (function(e, t, n) {
        n.d(t, {
            a: () => I,
            sendMcpAppMessage: () => T
        });
        var a = n("kSHG"),
            r = n("HVBu"),
            i = n.n(r),
            o = n("IhIa"),
            s = n("DD2M"),
            l = n("Cslg"),
            c = n("dsow"),
            u = n("ABep"),
            d = n("oyxz"),
            p = n("RNul"),
            _ = n("SGsN");
        let E = (0, u.jsx)(d.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open",
            description: "Button that opens the new chat containing the message sent by a plugin"
        });

        function f(e, t, n) {
            return e.get(_.f).info((0, u.jsx)(d.a, {
                id: "mcpApp.newChat.creating",
                defaultMessage: "Starting chat…",
                description: "Toast shown while an app creates a new chat"
            }), {
                id: t,
                position: "top-center",
                actionPlacement: "inline",
                duration: 0,
                hasCloseButton: !1,
                leading: (0, u.jsx)(p.a, {
                    className: "icon-xs"
                }),
                primaryAction: null == n ? void 0 : {
                    label: E,
                    onClick: () => {
                        n()
                    }
                }
            })
        }
        var m = n("WBiY"),
            g = n("P93s"),
            h = n("kfGJ");
        async function T(e) {
            let {
                untrustedAppMessage: t,
                prompt: n,
                send: a,
                signal: r,
                messageAttachment: i,
                modelContextAttachments: o,
                requestConfirmation: s
            } = e;
            r.throwIfAborted();
            let l = {
                turnTrigger: "mcp_app_follow_up",
                addedFiles: [],
                fileAttachments: [],
                ideContext: null,
                imageAttachments: [],
                mcpAppModelContextAttachments: [...o, ...null == i || i.content?.length === 0 ? [] : [i]],
                prompt: n,
                untrustedAppMessage: t
            };
            await a(l, s)
        }

        function I(e) {
            let {
                scope: t,
                recipient: r,
                getNewThreadDestination: p,
                globalEntrypointIdentity: T,
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
                    let c = (0, m.b)(r);
                    if (void 0 === c && (c = null != p ? p() : null == r ? {
                            kind: "app-server",
                            hostId: h.a
                        } : null), null == c || "app-server" === c.kind && !I) throw (0, g.a)("New conversations are unavailable for this view", a.q.MethodNotFound);
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
                        D = f(t, S);
                    i()(e => e());
                    let G = e => {
                            N.signal.aborted || (0, o.c)(e) || t.get(_.f).danger(e instanceof Error ? e.message : String(e), {
                                id: S,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        x = i()(() => {
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
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(17982)]).then(n.bind(n, "VWsy"));
                        v(), N.signal.throwIfAborted(), C.removeEventListener("abort", O), await a(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: T,
                            hasUserGesture: b,
                            onDeferredCreation: e => {
                                L = !0, e.then(x, e => {
                                    G(e), x()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (D = f(t, S, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(_.f).info((0, u.jsx)(d.a, {
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
                                        label: E,
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
    jAhM: (function(e, t, n) {
        var a = n("bTvG"),
            r = n("iRMi"),
            i = n("mfKi"),
            o = n("doi1"),
            s = n("DKJJ"),
            l = n("k7G6"),
            c = n("yGJW"),
            u = n("taUf");
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
                    onShown: g,
                    onInstallClick: h,
                    onSuggestionInteraction: T,
                    isCurrent: I = () => !0
                } = e, b = u.e.safeParse(_.structuredContent);
                if (!b.success) return null;
                let v = (0, s.g)({
                        toolResult: _
                    }),
                    A = u.c.safeParse(v?._meta ?? v),
                    y = A.success ? A.data["openai/plugin_suggestion_id"] : void 0,
                    C = {
                        chatgpt: n,
                        source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: y,
                        surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    N = (e, r, o) => {
                        try {
                            (0, c.a)(t, i.CodexPluginAction, {
                                source: C.source,
                                suggestionId: y,
                                surface: C.surface,
                                action: e,
                                remotePluginId: r,
                                result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != y && (e !== i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != o) && (0, c.a)(t, a.q, {
                                action: e === i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: r,
                                pluginIds: o,
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
                            if (!t.data.payload.plugin_ids.includes(n) || w.has(n)) return;
                            w.add(n), T?.(n, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed"), g?.(n);
                            return
                        }
                        let a = t.data.payload.plugin_ids;
                        N(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => b.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = R(e);
                        return h?.(t.plugin_id), T?.(t.plugin_id, A.success ? A.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), N(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), E(t, C)
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
                            remoteMarketplaceName: o.Zc
                        }))
                    }
                }
            }
        })
    }),
    AHnN: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("on57"),
            o = n("BolX"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("Wdu7"),
            u = n("ZiSI"),
            d = n("Odi7"),
            p = n("tSEg"),
            _ = n("WFY2"),
            E = n("xWDI"),
            f = n("FZiz"),
            m = n("C1SW"),
            g = n("ALWK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s = (0, r.c)(11),
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
                let m = !l;
                return s[3] !== _ || s[4] !== p || s[5] !== m || s[6] !== d ? (n = (0, a.jsx)(u.a, {
                    compact: m,
                    title: d,
                    illustration: p,
                    description: null,
                    actions: _
                }), s[3] = _, s[4] = p, s[5] = m, s[6] = d, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, a.jsx)("div", {
                    className: t,
                    children: n
                }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
            },
            b: function(e) {
                let t, n, u, h, T, I, b, v, A, y, C, N = (0, r.c)(85),
                    {
                        resource: w,
                        error: R,
                        errorTitle: P,
                        errorIllustration: S,
                        hostDisplayModes: D,
                        fullSurface: G,
                        hostScroll: x,
                        inlineSurface: L,
                        mcpAppId: O,
                        onRetryResourceRead: F,
                        renderErrorActions: M,
                        pluginName: k,
                        presentation: U,
                        showLoadingStatus: W,
                        disableInlineLoadingState: H
                    } = e,
                    j = void 0 !== G && G,
                    V = void 0 !== x && x,
                    q = void 0 === L ? "standalone" : L,
                    Y = void 0 === W || W,
                    B = void 0 !== H && H,
                    z = (0, o.y)(p.a),
                    K = (0, o.x)(g.i, O),
                    X = K?.content.resource;
                N[0] !== R || N[1] !== w || N[2] !== X ? (t = null == X ? w : {
                    data: X,
                    error: R ?? null,
                    isLoading: !1
                }, N[0] = R, N[1] = w, N[2] = X, N[3] = t) : t = N[3];
                let $ = t,
                    {
                        data: Z,
                        isLoading: J
                    } = $,
                    Q = Z?.html ?? null;
                N[4] !== $ || N[5] !== D ? (n = (0, m.d)($, D), N[4] = $, N[5] = D, N[6] = n) : n = N[6];
                let ee = n,
                    et = (0, o.x)(g.t, O),
                    en = (0, o.x)(g.u, O),
                    ea = j || "inline" === U,
                    er = K?.inlineFrameAnchor.ref,
                    ei = Z?.heightHint ?? null,
                    eo = Z?.minFrameHeight ?? null;
                N[7] !== et.intrinsicHeight || N[8] !== V || N[9] !== ei || N[10] !== eo ? (u = (0, d.a)(et.intrinsicHeight, ei, eo, V), N[7] = et.intrinsicHeight, N[8] = V, N[9] = ei, N[10] = eo, N[11] = u) : u = N[11];
                let es = u,
                    el = !j && Z?.fitWidth ? et.intrinsicWidth ?? Z.widthHint : void 0,
                    ec = j ? void 0 : Z?.inlineFramePadding,
                    eu = null == ec ? void 0 : -ec.blockStart,
                    ed = null == ec ? void 0 : -ec.blockEnd,
                    ep = null == ec ? void 0 : -ec.inlineStart,
                    e_ = null == ec ? void 0 : -ec.inlineEnd;
                N[12] !== el || N[13] !== eu || N[14] !== ed || N[15] !== ep || N[16] !== e_ ? (h = {
                    width: el,
                    marginBlockStart: eu,
                    marginBlockEnd: ed,
                    marginInlineStart: ep,
                    marginInlineEnd: e_
                }, N[12] = el, N[13] = eu, N[14] = ed, N[15] = ep, N[16] = e_, N[17] = h) : h = N[17];
                let eE = h,
                    ef = "error" === ee.kind ? ee.error : et.sandboxError;
                N[18] !== ee.kind || N[19] !== ef ? (T = null, "too-large" === ee.kind ? T = "HTML exceeds display limit" : ef instanceof m.a && (T = "No supported display mode"), N[18] = ee.kind, N[19] = ef, N[20] = T) : T = N[20];
                let em = "error" === ee.kind ? ee.error : null,
                    eg = em?.message;
                N[21] !== T || N[22] !== Z?.availableDisplayModes || N[23] !== Z?.htmlByteLength || N[24] !== D || N[25] !== O || N[26] !== em ? (I = () => {
                    (null != T || null != em) && _.a.warning("MCP app error displayed", {
                        safe: {
                            reason: T ?? "App could not be displayed",
                            htmlByteLength: Z?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: O,
                            error: em,
                            hostDisplayModes: D,
                            availableDisplayModes: Z?.availableDisplayModes
                        }
                    })
                }, N[21] = T, N[22] = Z?.availableDisplayModes, N[23] = Z?.htmlByteLength, N[24] = D, N[25] = O, N[26] = em, N[27] = I) : I = N[27];
                let eh = (0, s.useEffectEvent)(I);
                if (N[28] !== eh ? (b = () => {
                        eh()
                    }, N[28] = eh, N[29] = b) : b = N[29], N[30] !== T || N[31] !== O || N[32] !== eg ? (v = [T, eg, O], N[30] = T, N[31] = O, N[32] = eg, N[33] = v) : v = N[33], (0, s.useEffect)(b, v), "too-large" === ee.kind) {
                    let e;
                    return N[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(c.a, {
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
                    }), N[34] = e) : e = N[34], e
                }
                if (!j && "launcher" === U) {
                    let e;
                    return N[35] !== er ? (e = (0, a.jsx)("div", {
                        ref: er,
                        hidden: !0
                    }), N[35] = er, N[36] = e) : e = N[36], e
                }
                if (J || !en && null != Q && null == ef) {
                    let e, t, n, r;
                    if ("pending" === U && !j) {
                        let e;
                        return !Y || B ? null : (N[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app",
                                description: "Accessible label for the MCP app loading placeholder"
                            })
                        }), N[37] = e) : e = N[37], e)
                    }
                    let o = J ? null : er,
                        s = null == ec && "max-w-full",
                        c = j && "h-full";
                    N[38] !== s || N[39] !== c ? (e = (0, i.b)(s, c), N[38] = s, N[39] = c, N[40] = e) : e = N[40];
                    let u = "standalone" === q && "rounded-lg border";
                    N[41] !== u ? (t = (0, i.b)("w-full border-subtle", u), N[41] = u, N[42] = t) : t = N[42];
                    let d = j ? "100%" : es;
                    return N[43] !== B || N[44] !== j || N[45] !== V || N[46] !== ec || N[47] !== Y || N[48] !== t || N[49] !== d ? (n = (0, a.jsx)(f.a, {
                        className: t,
                        height: d,
                        inlineFramePadding: ec,
                        fullSurface: j,
                        allowCompact: V,
                        showLoadingStatus: Y,
                        disableInlineLoadingState: B
                    }), N[43] = B, N[44] = j, N[45] = V, N[46] = ec, N[47] = Y, N[48] = t, N[49] = d, N[50] = n) : n = N[50], N[51] !== eE || N[52] !== q || N[53] !== o || N[54] !== e || N[55] !== n ? (r = (0, a.jsx)("div", {
                        ref: o,
                        className: e,
                        style: eE,
                        "data-mcp-app-inline-surface": q,
                        children: n
                    }), N[51] = eE, N[52] = q, N[53] = o, N[54] = e, N[55] = n, N[56] = r) : r = N[56], r
                }
                if (null != ef) {
                    let e, t;
                    return N[57] !== ee.kind || N[58] !== O || N[59] !== F || N[60] !== z ? (e = "error" === ee.kind ? F : () => (0, g.B)(z, O), N[57] = ee.kind, N[58] = O, N[59] = F, N[60] = z, N[61] = e) : e = N[61], N[62] !== S || N[63] !== P || N[64] !== j || N[65] !== q || N[66] !== ef || N[67] !== k || N[68] !== M || N[69] !== e ? (t = (0, a.jsx)(E.a, {
                        error: ef,
                        errorTitle: P,
                        errorIllustration: S,
                        fullSurface: j,
                        inlineSurface: q,
                        pluginName: k,
                        renderErrorActions: M,
                        onRetry: e
                    }), N[62] = S, N[63] = P, N[64] = j, N[65] = q, N[66] = ef, N[67] = k, N[68] = M, N[69] = e, N[70] = t) : t = N[70], t
                }
                if (!ea) {
                    let e;
                    return N[71] !== er ? (e = (0, a.jsx)("div", {
                        ref: er,
                        hidden: !0
                    }), N[71] = er, N[72] = e) : e = N[72], e
                }
                if (null == Q) {
                    let e;
                    return N[73] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), N[73] = e) : e = N[73], e
                }
                let eT = null == ec && "w-full max-w-full",
                    eI = j && "h-full";
                N[74] !== eT || N[75] !== eI ? (A = (0, i.b)("overflow-hidden", eT, eI), N[74] = eT, N[75] = eI, N[76] = A) : A = N[76];
                let eb = j ? "100%" : es;
                return N[77] !== eE || N[78] !== eb ? (y = {
                    ...eE,
                    height: eb
                }, N[77] = eE, N[78] = eb, N[79] = y) : y = N[79], N[80] !== er || N[81] !== q || N[82] !== A || N[83] !== y ? (C = (0, a.jsx)("div", {
                    ref: er,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": q,
                    className: A,
                    style: y
                }), N[80] = er, N[81] = q, N[82] = A, N[83] = y, N[84] = C) : C = N[84], C
            }
        })
    }),
    n2Dd: (function(e, t, n) {
        let a;
        var r = n("eB3o"),
            i = n("kSHG"),
            o = n("BolX"),
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
            E = s.object({
                title: s.string().min(1).max(2e3),
                titleIcon: d.optional(),
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
                            icons: s.array(i.u).max(8).optional(),
                            icon: d.optional(),
                            sources: s.array(s.object({
                                title: s.string().min(1).max(2e3),
                                href: _.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            f = (0, o.v)(l.a, e => null);
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
                        params: E
                    }).safeParse(e);
                    if (!a.success || t.aborted) return null;
                    let r = a.data.params,
                        i = [...r.titleActions, ...r.actions.flatMap(e => e.menu?.items ?? [e])],
                        o = e => {
                            let a = i.find(t => t.id === e && !t.disabled);
                            t.aborted || this.invoke !== o || this.scope.get(f, this.appId)?.invoke !== o || null == a || (null != a.href ? this.openExternal(a.href) : n({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: a.id
                                }
                            }))
                        };
                    return this.invoke = o, this.scope.set(f, this.appId, {
                        header: r,
                        invoke: o
                    }), Promise.resolve({
                        accepted: !0
                    })
                } [a]() {
                    this.scope.get(f, this.appId)?.invoke === this.invoke && this.scope.set(f, this.appId, null), this.invoke = null
                }
            },
            c: f
        })
    }),
    ze43: (function(e, t, n) {
        n.d(t, {
            a: () => g,
            b: () => m,
            c: () => h
        });
        var a = n("ABep"),
            r = n("QosV"),
            i = n("BolX"),
            o = n("zd8w"),
            s = n("I7bK"),
            l = n("ipIJ"),
            c = n("kRV1"),
            u = n("Vlqh");
        n("kfGJ"), u.a;
        var d = n("ALWK"),
            p = n("tSEg"),
            _ = n("yyZv"),
            E = n("C1SW"),
            f = n("vzzY");

        function m(e) {
            let t, n, a = (0, r.c)(6),
                {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                } = e,
                u = (0, i.y)(p.a);
            return a[0] !== s || a[1] !== c || a[2] !== l || a[3] !== u ? (t = () => {
                (0, d.D)(u, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, u], a[0] = s, a[1] = c, a[2] = l, a[3] = u, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, o.useLayoutEffect)(t, n), null
        }

        function g(e) {
            let t, n, a = (0, r.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, i.y)(p.a);
            return a[0] !== s || a[1] !== l || a[2] !== c ? (t = () => {
                c.set(d.k, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, o.useLayoutEffect)(t, n), null
        }

        function h(e) {
            let t, n, u, m, g, h, T, I, b, v = (0, r.c)(119),
                {
                    recipient: A,
                    analyticsContext: y,
                    resource: C,
                    refetchResource: N,
                    getResourceHost: w,
                    openOnRegistration: R,
                    reuseOnly: P,
                    conversationId: S,
                    fullSurface: D,
                    modalOpen: G,
                    hostScroll: x,
                    hostDisplayModes: L,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: F,
                    hostId: M,
                    hostedInThreadScrollLayout: k,
                    access: U,
                    lifetime: W,
                    mcpAppId: H,
                    mcpAppScope: j,
                    sourceName: V,
                    mcpServerStatuses: q,
                    pluginId: Y,
                    connectorId: B,
                    mcpAppHostAdapter: z,
                    getNewThreadDestination: K,
                    initialWidgetState: X,
                    widgetStatePersistence: $,
                    plaidAccountId: Z,
                    deepLink: J,
                    Frame: Q,
                    resolveResourceWatchPath: ee,
                    server: et,
                    appIcon: en,
                    sidePanelTitle: ea,
                    title: er,
                    globalSurface: ei,
                    toolArguments: eo,
                    toolResult: es,
                    toolResultNotification: el,
                    toolCallStatus: ec,
                    toolCallCancellationReason: eu,
                    viewParamsOverride: ed
                } = e,
                ep = void 0 === A ? null : A,
                e_ = void 0 !== R && R,
                eE = void 0 !== P && P,
                ef = void 0 !== D && D,
                em = void 0 !== x && x,
                eg = void 0 !== F && F,
                eh = void 0 !== ei && ei,
                eT = (0, i.y)(p.a),
                eI = (0, i.x)(d.r, H),
                eb = (0, i.z)(_.a);
            v[0] !== ep ? (t = null == ep ? void 0 : e => (0, l.a)(ep, e), v[0] = ep, v[1] = t) : t = v[1];
            let ev = t;
            v[2] !== W || v[3] !== H || v[4] !== eT ? (u = () => {
                if ("component" === W) return () => {
                    (0, d.y)(eT, H)
                }
            }, n = [W, H, eT], v[2] = W, v[3] = H, v[4] = eT, v[5] = n, v[6] = u) : (n = v[5], u = v[6]), (0, o.useLayoutEffect)(u, n);
            let eA = (0, o.useContext)(s.c)?.rightPanelLayoutTick,
                ey = void 0 !== Y ? Y : q?.data.find(e => {
                    let {
                        name: t
                    } = e;
                    return t === et
                })?.pluginId,
                {
                    bridge: eC,
                    pluginId: eN,
                    isLoading: ew
                } = (0, i.x)(c.a, {
                    hostId: M,
                    pluginId: ey,
                    connectorId: B,
                    server: et
                }),
                eR = ey ?? eN,
                eP = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: M,
                    pluginId: eR
                }) ? void 0 : eR,
                eS = C.isLoading || ew;
            v[7] !== L || v[8] !== eS || v[9] !== C ? (m = (0, E.d)({
                ...C,
                isLoading: eS
            }, L), v[7] = L, v[8] = eS, v[9] = C, v[10] = m) : m = v[10];
            let eD = m;
            return v[11] !== U || v[12] !== y || v[13] !== en || v[14] !== S || v[15] !== J || v[16] !== eD || v[17] !== eC || v[18] !== eP || v[19] !== ef || v[20] !== K || v[21] !== w || v[22] !== eh || v[23] !== L || v[24] !== M || v[25] !== em || v[26] !== k || v[27] !== eg || v[28] !== X || v[29] !== eb || v[30] !== O || v[31] !== z || v[32] !== H || v[33] !== j || v[34] !== q || v[35] !== G || v[36] !== ev || v[37] !== e_ || v[38] !== Z || v[39] !== ep || v[40] !== N || v[41] !== ee || v[42] !== ey || v[43] !== eE || v[44] !== eA || v[45] !== eT || v[46] !== et || v[47] !== ea || v[48] !== V || v[49] !== er || v[50] !== eo || v[51] !== eu || v[52] !== ec || v[53] !== es || v[54] !== el || v[55] !== ed || v[56] !== $ ? (g = () => {
                eb || "ready" === eD.kind && null != U && (0, d.x)(eT, {
                    recipient: ep,
                    onSessionDispose: ev,
                    resource: eD.data,
                    refetchResource: N,
                    getResourceHost: w,
                    openOnRegistration: e_,
                    reuseOnly: eE,
                    conversationId: S,
                    firstPartyPluginBridge: eC,
                    firstPartyPluginLoggerPluginId: eP,
                    fullSurface: ef,
                    modalOpen: G,
                    hostScroll: em,
                    hostDisplayModes: L,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: eg,
                    hostId: M,
                    hostedInThreadScrollLayout: k,
                    access: U,
                    analyticsContext: y,
                    mcpAppId: H,
                    mcpAppScope: j,
                    sourceName: V,
                    mcpServerStatuses: q,
                    pluginId: ey,
                    mcpAppHostAdapter: z,
                    getNewThreadDestination: K,
                    initialWidgetState: X,
                    widgetStatePersistence: $,
                    plaidAccountId: Z,
                    deepLink: J,
                    rightPanelLayoutTick: eA,
                    resolveResourceWatchPath: ee,
                    server: et,
                    appIcon: en,
                    sidePanelTitle: ea,
                    title: er,
                    globalSurface: eh,
                    toolArguments: eo,
                    toolResult: es,
                    toolResultNotification: el,
                    toolCallStatus: ec,
                    toolCallCancellationReason: eu,
                    viewParamsOverride: ed
                })
            }, v[11] = U, v[12] = y, v[13] = en, v[14] = S, v[15] = J, v[16] = eD, v[17] = eC, v[18] = eP, v[19] = ef, v[20] = K, v[21] = w, v[22] = eh, v[23] = L, v[24] = M, v[25] = em, v[26] = k, v[27] = eg, v[28] = X, v[29] = eb, v[30] = O, v[31] = z, v[32] = H, v[33] = j, v[34] = q, v[35] = G, v[36] = ev, v[37] = e_, v[38] = Z, v[39] = ep, v[40] = N, v[41] = ee, v[42] = ey, v[43] = eE, v[44] = eA, v[45] = eT, v[46] = et, v[47] = ea, v[48] = V, v[49] = er, v[50] = eo, v[51] = eu, v[52] = ec, v[53] = es, v[54] = el, v[55] = ed, v[56] = $, v[57] = g) : g = v[57], v[58] !== Q || v[59] !== U || v[60] !== y || v[61] !== en || v[62] !== S || v[63] !== J || v[64] !== eD || v[65] !== eC || v[66] !== eP || v[67] !== ef || v[68] !== K || v[69] !== w || v[70] !== eh || v[71] !== L || v[72] !== M || v[73] !== em || v[74] !== k || v[75] !== eg || v[76] !== X || v[77] !== eb || v[78] !== eS || v[79] !== O || v[80] !== W || v[81] !== z || v[82] !== H || v[83] !== j || v[84] !== q || v[85] !== G || v[86] !== ev || v[87] !== e_ || v[88] !== Z || v[89] !== ep || v[90] !== N || v[91] !== ee || v[92] !== ey || v[93] !== eE || v[94] !== eA || v[95] !== eT || v[96] !== et || v[97] !== ea || v[98] !== V || v[99] !== er || v[100] !== eo || v[101] !== eu || v[102] !== ec || v[103] !== es || v[104] !== el || v[105] !== ed || v[106] !== $ ? (h = [y, w, N, eD, e_, eE, ep, ev, S, eC, eP, ef, G, em, L, O, eg, M, k, U, eb, eS, W, H, j, V, q, ey, z, K, X, $, Z, J, Q, eA, ee, eT, et, en, ea, er, eh, eo, es, el, ec, eu, ed], v[58] = Q, v[59] = U, v[60] = y, v[61] = en, v[62] = S, v[63] = J, v[64] = eD, v[65] = eC, v[66] = eP, v[67] = ef, v[68] = K, v[69] = w, v[70] = eh, v[71] = L, v[72] = M, v[73] = em, v[74] = k, v[75] = eg, v[76] = X, v[77] = eb, v[78] = eS, v[79] = O, v[80] = W, v[81] = z, v[82] = H, v[83] = j, v[84] = q, v[85] = G, v[86] = ev, v[87] = e_, v[88] = Z, v[89] = ep, v[90] = N, v[91] = ee, v[92] = ey, v[93] = eE, v[94] = eA, v[95] = eT, v[96] = et, v[97] = ea, v[98] = V, v[99] = er, v[100] = eo, v[101] = eu, v[102] = ec, v[103] = es, v[104] = el, v[105] = ed, v[106] = $, v[107] = h) : h = v[107], (0, o.useLayoutEffect)(g, h), v[108] !== Q || v[109] !== W || v[110] !== H || v[111] !== eT || v[112] !== eI ? (T = () => {
                "component" !== W && null != eI && (0, f.b)(eT, {
                    Frame: Q,
                    lifetime: W,
                    sessionId: eI,
                    sourceMcpAppId: H
                })
            }, I = [Q, W, H, eI, eT], v[108] = Q, v[109] = W, v[110] = H, v[111] = eT, v[112] = eI, v[113] = T, v[114] = I) : (T = v[113], I = v[114]), (0, o.useLayoutEffect)(T, I), v[115] !== Q || v[116] !== W || v[117] !== eI ? (b = "component" === W && null != eI ? (0, a.jsx)(Q, {
                sessionId: eI
            }, eI) : null, v[115] = Q, v[116] = W, v[117] = eI, v[118] = b) : b = v[118], b
        }
    })
};