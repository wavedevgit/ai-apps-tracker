export const __rspack_esm_ids = [992070];
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
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(234956), n.e(442707), n.e(651058), n.e(214894), n.e(405005), n.e(482788)]).then(n.bind(n, "iAuu"))
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
            o = n("hV9T"),
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
                    server: D,
                    sessionId: S,
                    sourceMcpAppId: G,
                    toolResult: x
                } = e;
                if (!w({
                        hostId: a,
                        mcpAppScope: u,
                        access: P,
                        server: D
                    })) return null;
                let L = {
                        hostId: a,
                        threadId: n
                    },
                    O = (0, T.f)(x),
                    F = g.c.safeParse(O?._meta ?? O).data,
                    M = (e, a, r) => {
                        let {
                            accountId: o,
                            uiUserId: i
                        } = P;
                        null == o || null == i || t.get(N.j) || t.get(h.r, S)?.sourceMcpAppId !== G || (0, v.a)({
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
                    onSuggestionInteraction: M,
                    connect: async (e, r) => {
                        let u = e.plugin_id;
                        try {
                            let m = t.get(c.$b, L)?.latestTurnId,
                                g = !1,
                                h = !1;
                            if (!s({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: o._c,
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
                                remoteMarketplaceName: o._c
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
                        let o = e => !e(N.j) && e(h.r, S)?.sourceMcpAppId === G,
                            s = g.d.safeParse(t.get(h.w, S) ?? {});
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
                            of E) M(e, F?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(h.w, S, {
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
        var a = n("hV9T");
        let r = (0, n("Nwp9").b)(a.Sc, {}, {
            coerceStoredValue: e => a.Zi.parse(e)
        });
        n.d(t, {}, {
            a: function(e, t) {
                return (t ? a._i.options : a.aj).filter(t => e.permissions?.[t] != null)
            },
            b: function(e, t, n) {
                let r, o = e.map(e => a.$i[e].feature),
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
    JSwr: (function(e, t, n) {
        let a, r, o;
        n.d(t, {
            a: () => ni,
            b: () => ns
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
            g = n("zmIi"),
            h = n("SZCv"),
            T = n.n(h),
            I = n("BolX"),
            b = n("hV9T"),
            v = n("AuIy"),
            A = n("F6B1"),
            y = n("IhIa"),
            C = n("zd8w"),
            N = n("v7qY"),
            w = n("Wf1j"),
            R = n("jqIZ"),
            P = n("ASxG"),
            D = n("KJ1J");
        let S = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var G = n("PFjh"),
            x = n("yGJW");
        let L = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            O = P.object({
                type: P.enum(["count", "hist"]),
                label: P.enum(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: P.literal(1).optional(),
                value: P.number().nonnegative().optional(),
                tags: P.array(P.object({
                    key: P.string(),
                    value: P.string()
                })).max(8)
            }),
            F = P.object({
                stage: P.enum(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: P.literal("ads"),
                checkout_type: P.literal("manual"),
                load_metric_version: P.literal("1").optional()
            }),
            M = P.object({
                phase: P.enum(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: P.enum(["create", "edit"]),
                outcome: P.enum(["success", "error", "requires_action"]),
                failure_category: P.enum(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            k = P.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            U = {
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
            H = P.array(P.object({
                key: P.string(),
                value: P.unknown().optional()
            }).nullable().catch(null)),
            W = P.discriminatedUnion("type", [P.object({
                type: P.literal("event"),
                label: k,
                payload: P.object({
                    widget: P.enum(L.widget),
                    view_session_id: P.uuid().optional().catch(void 0),
                    view: P.enum(L.view).optional().catch(void 0),
                    action: P.enum(L.action).optional().catch(void 0),
                    outcome: P.enum(["closed", "denied", "missing_response", "error"]).optional().catch(void 0),
                    step: P.enum(L.step).optional().catch(void 0),
                    source: P.enum(L.source).optional().catch(void 0),
                    billing_status: P.enum(["required", "complete", "unknown"]).optional().catch(void 0),
                    logo_status: P.enum(["missing", "ready", "in_review", "replacement_in_review", "review_rejected", "unknown"]).optional().catch(void 0),
                    account_review_status: P.enum(["approved", "in_review", "rejected", "unknown"]).optional().catch(void 0),
                    attention_reason: P.enum(["unsupported_country", "review_rejected"]).optional().catch(void 0),
                    billing_recovery: P.enum(["unsupported_country", "external"]).optional().catch(void 0),
                    billing_in_sidebar: P.boolean().optional().catch(void 0),
                    logo_handoff_failed: P.boolean().optional().catch(void 0),
                    step_number: j(1),
                    step_count: j(),
                    preview_kind: P.enum(["draft", "existing"]).optional().catch(void 0),
                    reason: P.enum(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: j(1),
                    page: j(1),
                    page_count: j(1),
                    page_size: j(1),
                    total_count: j(),
                    next_page: j(1)
                })
            }), P.object({
                type: P.literal("count"),
                label: k,
                count: P.literal(1).optional(),
                tags: H
            })]);

        function j() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return P.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var V = n("StMt"),
            Y = n("tl5a"),
            q = n("URlz"),
            B = n("sM3V"),
            z = n("OpyH"),
            K = n("ZU27"),
            $ = n("DiD0"),
            X = n("SK3E"),
            Z = n("gbrq"),
            J = (n("Sbyb"), n("TSib")),
            Q = n("ipIJ"),
            ee = n("uoRg"),
            et = n("Y3OQ"),
            en = n("WBiY"),
            ea = n("Ot7V"),
            er = n("eT6w"),
            eo = n("PeqE"),
            ei = n("ywSA"),
            es = n("Cslg"),
            el = n("qZWE");
        n("s5P0");
        var ec = n("bvQ5"),
            eu = n("eB3o"),
            ed = n("ZG9f");
        a = (0, eu._)(Symbol.dispose);
        class ep {
            #e = new e_;
            #t;
            constructor(e) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new ed.a(this.#e, e.createRpcStub())
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
        r = (0, eu._)(Symbol.dispose);
        class e_ {
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
        var eE = n("WFY2"),
            ef = n("ReGc"),
            em = n("rP0s");
        let eg = P.object({
            prompt: P.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eh = n("o62A"),
            eT = n("FgIX"),
            eI = n("g25Y"),
            eb = n("X6Vn"),
            ev = n("yI91"),
            eA = n("ripK"),
            ey = n("bnxy"),
            eC = n("GaA7");
        let eN = "ui/openai/find",
            ew = P.object({
                method: P.literal(eN),
                params: P.object({
                    enabled: P.boolean()
                })
            }),
            eR = P.object({
                method: P.literal("ui/notifications/openai/find"),
                params: P.object({
                    command: P.enum(["open", "next", "previous"])
                })
            });
        o = (0, eu._)(Symbol.dispose);
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
        var eD = n("ioMY"),
            eS = n("iIHp"),
            eG = n("v7ut"),
            ex = n("sF0J"),
            eL = n("QnVT"),
            eO = n("HwRo"),
            eF = n("sS8e"),
            eM = n("NJrC"),
            ek = n("LGZt"),
            eU = n("MefB"),
            eH = n("AVkf"),
            eW = n("geS6"),
            ej = n("Dgwo"),
            eV = n("a4MG");
        async function eY(e) {
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
            let l = (null == o ? await (0, ej.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eV.r, {
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
            if (null == l) throw (0, eF.c)(`MCP server not found: ${r}`, -32e3);
            return l
        }

        function eq(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var eB = n("DRR4"),
            ez = n("SRbQ"),
            eK = n("TL6G");
        class e$ {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = eK.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(eX(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (eE.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (eE.a.info("Updating app event subscriptions for conversation", {
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
                        eE.a.info("Starting app event subscription", {
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
                        let t = (0, ez.a)(e, await (0, ej.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
                        await this.params.scope.get(Y.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
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
                        }), eE.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, ez.e)(e)
                    }
                } catch (a) {
                    if (eE.a.warning("Failed to start app event subscription", {
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
                eE.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(Y.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw eE.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), eE.a.info("Stopped app event subscription", {
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
        var eZ = n("whdX");
        let eJ = new Map;
        class eQ {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            setConversation(e) {
                return this.enqueue(async () => {
                    let t = this.params.conversationId;
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, ej.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = eK.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (eE.a.debug("Received app resource update", {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw Object.assign((0, eF.c)("MCP resource subscriptions are unavailable", -32601), {
                        name: "McpResourceSubscriptionsUnavailableError"
                    });
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw eE.a.warning("Failed to subscribe to app resource updates", {
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
                        throw eE.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, r = (eJ.get(a) ?? Promise.resolve()).then(e), o = r.then(() => void 0, () => void 0);
                return eJ.set(a, o), o.then(() => {
                    eJ.get(a) === o && eJ.delete(a)
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
                let t = this.getAuthorizedWatchPathOverride(e) ?? (0, eZ.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == t) throw Object.assign((0, eF.c)("MCP resource is not subscribable", -32602), {
                    name: "McpResourceNotSubscribableError",
                    uri: e
                });
                return t
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? eE.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (eE.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, ej.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), eE.a.info("Updated app resource subscriptions", {
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
        var e0 = n("xSzB"),
            e1 = n("kjQz"),
            e2 = n("ntKy"),
            e3 = n("OWtl"),
            e5 = n("Sd8U"),
            e6 = n("tSEg"),
            e8 = n("kl6F"),
            e4 = n("hZax"),
            e7 = n("jdxe"),
            e9 = n("XXJV"),
            te = n("bIvi"),
            tt = n("SNez"),
            tn = n("DXan"),
            ta = n("nKJ6"),
            tr = n("TCti"),
            to = n("O9EX");
        let ti = (0, I.d)(e6.a, (e, t) => {
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
                d = (0, I.y)(e6.a),
                p = (0, I.z)(tr.b) ?? d,
                _ = eC.a?.mcpAppSandbox,
                E = (0, I.x)(null != _ && ti, i);
            o[0] !== p ? (t = (0, ta.getThreadBrowserConversationId)(p), o[0] = p, o[1] = t) : t = o[1];
            let f = t;
            o[2] !== i || o[3] !== p ? (n = () => {
                let e = p.get(e9.f, i);
                null != i && null != e && (0, e9.activateThreadPanelTab)(p, e, i)
            }, o[2] = i, o[3] = p, o[4] = n) : n = o[4];
            let m = (0, C.useEffectEvent)(n);
            return o[5] !== f || o[6] !== E || o[7] !== d || o[8] !== i || o[9] !== m || o[10] !== l || o[11] !== c || o[12] !== u ? (a = () => {
                if (!E || null == f || null == _) return;
                let e = (0, A.g)(l.getAttribute("src") ?? void 0);
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
            }, o[5] = f, o[6] = E, o[7] = d, o[8] = i, o[9] = m, o[10] = l, o[11] = c, o[12] = u, o[13] = a) : a = o[13], o[14] !== f || o[15] !== E || o[16] !== d || o[17] !== i || o[18] !== l || o[19] !== c || o[20] !== u ? (r = [_, f, E, d, i, l, c, u], o[14] = f, o[15] = E, o[16] = d, o[17] = i, o[18] = l, o[19] = c, o[20] = u, o[21] = r) : r = o[21], (0, C.useEffect)(a, r), null
        }

        function tl(e) {
            eE.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tc(e) {
            eE.a.info("mcp_app_sandbox.browser_target_failed", {
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
                i = (0, I.y)(e3.a),
                {
                    pathname: l,
                    search: c
                } = (0, R.Y)(),
                u = (0, R._)();
            return a[0] !== u || a[1] !== l || a[2] !== r || a[3] !== o || a[4] !== i || a[5] !== c ? (t = () => {
                let e;
                if (eC.a?.mcpAppSandbox == null || ![b.Tc, b.Uc, b.ed, "/plugins/:pluginId/app/:toolName"].some(e => (0, R.J)(e, l))) return;
                let t = (0, b.Jg)(r.getAttribute("src") ?? void 0);
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
            }, n = [l, c, r, o, i, u], a[0] = u, a[1] = l, a[2] = r, a[3] = o, a[4] = i, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, C.useEffect)(t, n), null
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
        let tb = (0, I.j)(e3.a, e => {
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
            tw = n("qbxq");
        let tR = P.union([m.b, P.object({
                target: P.enum(["active", "new"]).optional(),
                send: P.literal(!1)
            }).strict()]),
            tP = m.c.extend({
                _meta: m.c.shape._meta.unwrap().extend({
                    "openai/message": tR.optional()
                }).optional()
            });

        function tD(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !y.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw (0, eF.c)("Unsupported MCP app content", -32602)
        }

        function tS(e, t) {
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
        let tx = (0, I.j)(e5.a, (e, t) => {
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
                isEqual: T()
            })
        });
        var tL = n("slpy"),
            tO = n("Sm6l"),
            tF = n("HOLv"),
            tM = n("ByoF");

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
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(tF.a, {
                "aria-hidden": !1,
                asset: tM.a
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
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, i.jsx)(tF.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tM.a
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

        function tU(e) {
            let t, n, a, r, o, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: _,
                    onBack: E,
                    onForward: f
                } = e,
                m = (0, w.a)();
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
                onPointerDown: tH,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tH(e) {
            return e.stopPropagation()
        }
        var tW = n("oMYH"),
            tj = n("Yshm"),
            tV = n("EDsV"),
            tY = n("MTYR"),
            tq = n("Za0m"),
            tB = n("IWEP");
        let tz = P.preprocess(function(e, t) {
            let n = new WeakSet,
                a = P.record(P.string(), P.unknown()),
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
        }, P.record(P.string(), P.json()));

        function tK(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var t$ = n("Btes"),
            tX = n("ILnd");
        let tZ = P.object({
            name: P.string().min(1),
            arguments: tz.optional(),
            _meta: c.b.shape._meta
        }).loose();
        var tJ = n("U0IP"),
            tQ = n("PkQL");
        let t0 = P.preprocess(t2, P.record(P.string(), P.json())),
            t1 = P.preprocess(t2, P.looseObject({
                ...l.e.shape.params.shape,
                content: P.array(tQ.f).optional()
            }));

        function t2(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let t3 = ["resources/subscribe", "resources/unsubscribe"],
            t5 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t6 = P.json(),
            t8 = P.object({
                mode: P.enum(["inline", "fullscreen"])
            }),
            t4 = P.object({
                linkToken: P.string().min(1),
                oauthStateId: P.string().min(1)
            }),
            t7 = P.object({
                canGoBack: P.boolean(),
                canGoForward: P.boolean()
            }).loose(),
            t9 = P.object({
                title: P.string().transform(e => e.trim().slice(0, 2e3)),
                favicon: P.string().max(8192).transform(e => {
                    let t = URL.parse(e);
                    return t?.protocol !== "https:" || t.username || t.password ? y.f.safeParse(e).success ? e : null : t.href
                }).catch(null)
            }),
            ne = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            nt = P.object({
                uri: P.string().min(1)
            }).loose(),
            nn = P.object({
                arguments: P.record(P.string(), t6).optional(),
                name: P.string().regex(/\S/),
                subscriptionId: P.uuid()
            }),
            na = P.object({
                subscriptionId: P.uuid()
            }),
            nr = P.number().positive(),
            no = {
                canGoBack: !1,
                canGoForward: !1
            };

        function ni(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: o,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== o && o,
                d = void 0 === l || l,
                p = (0, I.y)(e6.a),
                _ = (0, I.x)(el.r, c);
            return r[0] !== p || r[1] !== c ? (t = () => {
                let e, t, n, a, r, o, i, s, l, u, d;
                return n = !1, a = !1, r = null, o = () => {
                    clearTimeout(t), t = void 0
                }, i = e => {
                    if (a = e, o(), a) {
                        r = null, (0, el.D)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == r && (r = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (eE.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, el.D)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && i(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), o(), void 0 === (e = t) ? (a = !1, r = null, (0, el.D)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && i(a && !(0, tp.h)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(tp.c);
                    let n = t(el.r, c),
                        a = null == n ? null : t(el.h, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t(K.l.tabById$, (0, e7.b)(c)),
                        o = (0, tp.h)(p);
                    if (!r || !o) return void u(r ? null : void 0, o);
                    let i = a.inlineFrameAnchor,
                        s = () => u(i.getSnapshot(), o),
                        l = i.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), o()
                }
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, C.useEffect)(t, n), r[4] !== d || r[5] !== _ || r[6] !== u || r[7] !== c ? (a = null == _ ? null : (0, i.jsx)(nl, {
                sessionId: c,
                frameState: _,
                sourceMcpAppId: _.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), r[4] = d, r[5] = _, r[6] = u, r[7] = c, r[8] = a) : a = r[8], a
        }

        function ns(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(ni, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function nl(e) {
            let t, n, a, r, o, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: _,
                    frameState: E,
                    isAccessRevoked: f,
                    allowGlobalHost: m
                } = e,
                g = (0, I.y)(e6.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eO.b)(), d[0] = t) : t = d[0];
            let h = (0, e4.f)(t),
                T = (0, I.x)(tt.b, _),
                b = f || T,
                v = (0, I.x)(el.h, _),
                A = v?.content ?? null,
                y = A?.mcpAppHostAdapter?.retain;
            d[1] !== g || d[2] !== p ? (n = () => (0, tq.b)(g, p), a = [g, p], d[1] = g, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, C.useLayoutEffect)(n, a), d[5] !== y || d[6] !== g || d[7] !== _ ? (r = () => y?.(g, _), o = [y, g, _], d[5] = y, d[6] = g, d[7] = _, d[8] = r, d[9] = o) : (r = d[8], o = d[9]), (0, C.useLayoutEffect)(r, o);
            let N = (0, I.x)(q.c, A?.access ?? null);
            if (d[10] !== N || d[11] !== v || d[12] !== g || d[13] !== b || d[14] !== _ ? (l = () => {
                    null != v && (b || "changed" === N) && (eE.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: b,
                            accessStatus: N
                        },
                        sensitive: {
                            mcpAppId: v.sessionId,
                            sourceMcpAppId: _
                        }
                    }), (0, el.z)(g, _))
                }, c = [_, v, g, b, N], d[10] = N, d[11] = v, d[12] = g, d[13] = b, d[14] = _, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, C.useLayoutEffect)(l, c), !h || b || E.isSuspended || np(E.sandboxError) || null == v || null == A || "current" !== N) return null;
            let w = (0, eh.c)(A);
            if (w && (null == A.toolResult || null != A.toolCallStatus)) return null;
            let R = w ? nc : nd;
            return d[17] !== R || d[18] !== m || d[19] !== A || d[20] !== E || d[21] !== v.hostedInThreadScrollLayout || d[22] !== v.inlineFrameAnchor || d[23] !== p || d[24] !== _ ? (u = (0, i.jsx)(R, {
                ...A,
                hostedInThreadScrollLayout: v.hostedInThreadScrollLayout,
                inlineFrameAnchor: v.inlineFrameAnchor,
                allowGlobalHost: m,
                sessionId: p,
                sourceMcpAppId: _,
                frameState: E
            }, E.sandboxGeneration), d[17] = R, d[18] = m, d[19] = A, d[20] = E, d[21] = v.hostedInThreadScrollLayout, d[22] = v.inlineFrameAnchor, d[23] = p, d[24] = _, d[25] = u) : u = d[25], u
        }

        function nc(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, I.y)(e6.a);
            return a[0] !== r ? (t = (e, t) => (0, e2.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, i.jsx)(nd, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }
        let nu = (0, I.v)(e8.a, e => null);

        function nd(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: r,
                conversationId: o,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: h,
                pluginId: y,
                fullSurface: k,
                modalOpen: H = !1,
                hostScroll: j = !1,
                hostDisplayModes: q,
                hostId: eu,
                hostedInThreadScrollLayout: ed,
                access: e_,
                inheritHostBackground: ew = !1,
                installPlugin: eR,
                inlineFrameAnchor: eO,
                allowGlobalHost: eV,
                sessionId: ez,
                sourceMcpAppId: eK,
                mcpAppScope: eX,
                sourceName: eJ,
                permissionAppDisplayName: e2,
                mcpServerStatuses: e8,
                mcpAppHostAdapter: e4,
                getNewThreadDestination: tt,
                widgetStatePersistence: ta,
                plaidAccountId: to,
                deepLink: ti,
                rightPanelLayoutTick: tl,
                resolveResourceWatchPath: tc,
                server: tp,
                toolIcon: tE,
                appIcon: tR,
                sidePanelTitle: tL,
                title: tO,
                globalSurface: tF = !1,
                toolArguments: tM,
                toolResult: tk,
                toolResultNotification: tH,
                toolCallStatus: tq,
                toolCallCancellationReason: tB,
                viewParamsOverride: tz,
                frameState: tQ
            } = e, t2 = (0, I.y)(e6.a), t6 = (0, I.y)(e3.a), ni = (0, w.a)(), nl = (0, C.useSyncExternalStore)(eO.subscribe, eO.getSnapshot, () => null), nc = (0, C.useEffectEvent)(() => t2), nd = (0, C.useEffectEvent)(() => e_.assertActive()), {
                csp: n_,
                fitWidth: nE,
                html: nf,
                sandboxOrigin: nm,
                serverOrigin: ng
            } = a, nh = a.prefersBorder && !e4?.hideFrameBorder, nT = (0, C.useEffectEvent)(() => y), nI = (0, C.useEffectEvent)(() => e2 ?? eJ), nb = (0, tu.a)(a, eC.a?.mcpAppSandbox != null), nv = nb.join(";"), nA = "connectorId" in e_.serverIdentity ? e_.serverIdentity.connectorId : null, ny = null != t, nC = (0, C.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nN = !ny || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nw = (0, I.x)(Y.d, eu), nR = (0, I.x)(Y.jc, {
                hostId: eu,
                threadId: o
            }), nP = null != nR && "notLoaded" !== nR.type, nD = !(0, D.f)(tp) && n_?.connectDomains.some(e => (0, eM.d)(new URL(e).hostname)) === !0, nS = (0, tn.a)(e_, r), nG = null != ng ? new URL(ng) : null, nx = e4?.sandboxFeatures, nL = nx?.join(";"), nO = eC.a?.mcpAppSandbox == null && (nx?.includes("local-network-access") === !0 || (0, eM.g)(n_) || nD && nG?.protocol === "https:" && (0, eM.d)(nG.hostname)), nF = (0, C.useEffectEvent)(() => {
                (0, el.D)(nc(), ez, {
                    sandboxGeneration: tQ.sandboxGeneration + 1
                })
            }), nM = (0, R._)(), nk = t?.value.kind === "chatgpt" && null != t.value.conversationId && o === `chatgpt:${t.value.conversationId}`, nU = o.startsWith("chatgpt:") ? "chatgpt" : "codex", nH = (0, I.z)(t?.get(tx, ez) ?? null), nW = (0, C.useEffectEvent)(() => t?.get(tx, ez).get() ?? null), nj = (0, I.z)(K.l.activeTab$), nV = (0, I.z)(Z.g), nY = (0, I.z)(tr.a), nq = (0, I.z)(eL.a), nB = nq["--color-background-primary"], {
                isWidgetReady: nz
            } = tQ, nK = (0, el.e)(tQ), n$ = !k && "fullscreen" === nK, nX = tQ.displayMode, nZ = k && eV, nJ = (0, C.useRef)(!1), nQ = (0, C.useRef)(null), n0 = (0, C.useRef)(null), n1 = (0, C.useRef)(null), n2 = (0, C.useRef)(null), n3 = (0, I.x)(el.g, ez), n5 = (0, C.useRef)(null), n6 = (0, C.useRef)(null), n8 = e => {
                if (!(0, D.f)(tp)) return null;
                let t = t2.get(el.h, eK);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eW.d)({
                    appContext: eX.appContext,
                    invocationResourceUri: eX.invocationResourceUri,
                    originTool: eX.originTool,
                    originToolDefinition: e.tools[eX.originTool],
                    server: tp,
                    tools: eq(e)
                });
                t2.set(el.i, e => {
                    let t = e.get(eK);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let r = new Map(e);
                    return r.set(eK, {
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
                let r = t2.get(el.h, eK)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [n4, n7] = (0, C.useState)(null), [n9, ae] = (0, C.useState)(null), [at, an] = (0, C.useState)(!1), [aa, ar] = (0, C.useState)(null), [ao, ai] = (0, C.useState)(null), as = ao?.api ?? null, al = ao?.widgetId ?? null, ac = (0, te.a)(e => tc?.(e) ?? null), au = (0, D.f)(tp) && (0, b.Nh)(nw, "mcpEventStream"), ad = (0, C.useMemo)(() => new eQ({
                scope: t6,
                hostId: eu,
                mcpAppId: ez,
                originResourceUri: eX.originResourceUri,
                resolveResourceWatchPath: ac,
                server: tp
            }), [t6, eu, ez, eX.originResourceUri, ac, tp]), ap = (0, C.useMemo)(() => new e$({
                scope: t6,
                hostId: eu,
                server: tp
            }), [t6, eu, tp]), a_ = n$ ? (0, e7.b)(ez) : e4?.panelTabId ?? null, aE = (0, I.z)(tr.b) ?? t2, af = (0, I.w)(nu, ez), [am, ag] = (0, C.useState)(no), ah = null != nA && ne.has(nA), aT = ah && null != as && (am.canGoBack || am.canGoForward), {
                cancel: aI,
                confirmation: ab,
                confirm: av,
                request: aA
            } = (0, eS.a)(eD.a), ay = e4?.viewerHeader === !0, aC = e4?.forwardedRequestMethods, aN = aC?.join(";") || void 0, aw = JSON.stringify(e4?.experimentalCapabilities), aR = e4?.openFile, aP = (0, I.z)(e6.j), aD = tF && (0, D.f)(tp) && !aP && null != t && null != y && null != nA, aS = (0, I.x)(V.a, {
                name: "codex.browser"
            }), aG = !aP && aS.isCapable, ax = aG || ny && nN, aL = !aP && (void 0 === aR ? (0, b.Bi)((0, em.a)(t6, eu)) : null != aR), aO = null != e4, aF = e4?.expectedReadySignal, aM = e4?.pluginSuggestions != null, ak = !0 === eX.isVerifiedFirstParty, aU = e4?.displayMode === "modal", aH = (0, C.useEffectEvent)(() => e4), aW = e4?.onRequestClose != null || ed, aj = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, D.f)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e4,
                server: tp,
                connectorId: nA,
                widgetScope: eX
            }), aV = null != aj, aY = aj?.requestTargetedReply != null || e4?.setTargetedReply != null || e4?.requestTargetedReply != null, aq = aV || e4?.showToast != null, aB = (0, C.useEffectEvent)(() => aj), az = (0, C.useEffectEvent)(e => aj?.viewMode ?? e4?.displayMode ?? e), aK = e4?.requestCheckout != null, a$ = e4?.openConversationOverlay != null, aX = e4?.openPromptInput != null, aZ = e4?.autofill != null, aJ = e4?.openInApp != null, aQ = aJ && e4?.openInApp?.hideButton !== !0 && e4?.openInApp?.baseUrl != null && null !== tQ.openInAppUrl, a0 = e4?.presentation != null, a1 = e4?.presentation?.requestFocusedObject != null, a2 = e4?.presentation?.requestCloseFocusedObject != null, a3 = e4?.presentation?.isSidebarOpen === !0, a5 = e4?.downloadBlob != null, a6 = e4?.triggerHaptic != null, a8 = e4?.files != null, a4 = e4?.share != null, a7 = e4?.requestConnectSheet != null, a9 = e4?.requestReconnectConnector != null, re = e4?.requestLinkToConnector != null, rt = e4?.isTombstone === !0, rn = (0, C.useEffectEvent)(() => (function(e) {
                let {
                    mcpAppId: t,
                    adapter: n,
                    server: a,
                    connectorId: r,
                    widgetScope: o
                } = e;
                if ((0, D.f)(a) && r === eo.a && ("internal://ledger" === o.originResourceUri || o.originResourceUri?.startsWith("internal://ledger") && o.originTool.endsWith("manage_linked_accounts")) && !0 === o.isVerifiedFirstParty && n?.finance != null) return n.finance
            })({
                mcpAppId: ez,
                adapter: e4,
                server: tp,
                connectorId: nA,
                widgetScope: eX
            })), ra = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: o
                } = t, {
                    originResourceUri: i
                } = r;
                if ((0, D.f)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === i || "internal://ads-manager-account-setup" === i || "internal://ads-manager-delivery" === i)) return {
                    sendInstrument: t => (function(e, t, n) {
                        let {
                            conversationId: a,
                            originResourceUri: r
                        } = n;
                        ! function(e, t, n) {
                            let a = O.safeParse(t);
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
                                    let n = F.safeParse(r);
                                    "count" === t.type && n.success && e.get(G.a).count("payments", "payment_elements_stage", n.data)
                                } else {
                                    let a = M.safeParse(r);
                                    if (!a.success) return;
                                    let {
                                        failure_category: o,
                                        ...i
                                    } = a.data, s = {
                                        attribution_id: "connector_openai_ads_manager",
                                        name: n,
                                        client_type: "browser"
                                    }, l = e.get(G.a);
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
                        let o = W.safeParse(t);
                        if (!o.success) return;
                        let i = o.data,
                            s = "browser";
                        if ("event" === i.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = U[i.label], r = i.payload;
                            if (!r[n]) return;
                            (0, x.a)(e, S, {
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
                        let l = Object.entries(L).flatMap(e => {
                                let [t, n] = e, a = i.tags.find(e => e?.key === t), r = P.enum(n).safeParse(a?.value);
                                return r.success ? [{
                                    key: t,
                                    value: r.data
                                }] : []
                            }),
                            {
                                requiredField: c
                            } = U[i.label],
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
                        e.get(G.a).count("ecosystem", i.label, d)
                    })(e, t, {
                        conversationId: o,
                        originResourceUri: i
                    })
                }
            }(t2, {
                server: tp,
                connectorId: nA,
                widgetScope: eX,
                conversationId: o
            }), rr = (0, C.useEffectEvent)(() => ra), ro = null != to && (0, D.f)(tp) && aO && nA === eo.a, ri = (0, C.useMemo)(() => null != tM && "object" == typeof tM ? tM : null, [tM]), rs = (0, C.useMemo)(() => null == tk ? null : (0, e0.i)({
                isCodexAppsServer: (0, D.f)(tp),
                toolResult: tk
            }), [tp, tk]), rl = (0, C.useMemo)(() => null == rs ? null : (0, e0.e)(rs), [rs]), rc = void 0 === tz ? rl : tz, ru = (0, C.useEffectEvent)(() => rc), rd = (0, C.useMemo)(() => null == rs ? null : (0, e0.f)(rs), [rs]), rp = (0, C.useMemo)(() => tH ?? (0, e0.c)(rs, {
                preserveStructuredContentNull: e4?.preserveStructuredContentNull
            }), [e4?.preserveStructuredContentNull, tH, rs]), r_ = tq ?? (rp?.isError === !0 ? "error" : void 0), rE = (0, C.useMemo)(() => null == r_ ? rd : {
                ...rd,
                status: r_
            }, [r_, rd]), rf = (0, C.useEffectEvent)(() => ({
                sourceMcpAppId: eK,
                toolInput: ri,
                toolOutput: rl,
                toolResponseMetadata: rE,
                toolStatus: r_,
                toolResult: rs,
                toolResultNotification: rp,
                toolCallCancellationReason: tB
            })), rm = (0, C.useEffectEvent)(e => null == eR || null != r_ ? null : (0, eh.a)({
                scope: t2,
                conversationId: o,
                hostId: eu,
                installPlugin: eR,
                mcpAppScope: eX,
                navigate: nM,
                access: e_,
                server: tp,
                sessionId: ez,
                sourceMcpAppId: eK,
                toolResult: e
            })), rg = null == nm ? void 0 : (0, tY.b)(nm, ni.locale), rh = e_.getSandboxPartition?.(a) ?? A.b, rT = null == rg ? null : (0, tY.a)(rg), rI = (0, C.useEffectEvent)(() => {
                if (null == rg) return null;
                let e = (0, A.i)(rg);
                return null == e ? null : {
                    csp: n_,
                    experimentalCapabilities: e4?.experimentalCapabilities,
                    html: nf,
                    locale: ni.locale,
                    sandboxOrigin: e,
                    sourceUrl: rg
                }
            }), rb = aa?.isConnected === !0 ? aa : null, rv = nl?.isConnected === !0 ? nl : null, rA = null != rv || null != rb, ry = !n$ && !k && nl?.dataset.mcpAppInlineSurface === "card", rC = "iframe", rN = "function" == typeof n4?.moveBefore, rw = H && rN, rR = rv ?? (!n$ && n4?.isConnected ? n4.parentElement : null), rP = rR?.closest("[data-mcp-app-scroll-host]"), rD = !n$ && (!k && j || null != rP), rS = eV && !(k && ay) && !rD && (rN || !ed), rG = rS ? null : rR?.closest("[data-mcp-app-portal-target='true']") ?? (!rN && n4?.isConnected ? n4.parentElement : null), rx = rN || rS ? n4 : rG, rL = (0, C.useEffectEvent)(e => {
                let t = th(e, k, n$ ? "fullscreen" : "inline");
                return !k && "inline" === nK && nE && rv?.parentElement != null && (t.maxWidth = rv.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rO = (0, C.useEffectEvent)(() => {
                (0, ec.c)(nc(), {
                    hostId: eu,
                    pluginId: y,
                    server: tp
                }, ez)
            }), rF = (0, C.useEffectEvent)(() => ({
                safe: {
                    connectorId: nA,
                    mcpAppId: ez,
                    sandboxId: rT,
                    initId: (0, A.g)(n9?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: eu,
                    server: tp
                }
            })), rM = (0, C.useEffectEvent)(e => {
                (0, x.a)(t2, u.o, {
                    attributionId: nA ?? void 0,
                    conversationId: "chatgpt" === nU ? o.slice(8) : void 0,
                    host: "chatgpt" === nU ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rk = (0, C.useEffectEvent)((e, t) => {
                if (np(nc().get(el.r, ez)?.sandboxError)) return;
                let n = (0, eT.a)(t),
                    a = rF();
                (eE.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nU,
                        retryCount: tQ.sandboxGeneration,
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
                }), n2.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tQ.sandboxGeneration) ? (0, el.D)(nc(), ez, {
                    sandboxGeneration: 1
                }) : (0, el.D)(nc(), ez, {
                    isWidgetReady: !1,
                    sandboxError: n
                })
            }), rU = (0, C.useEffectEvent)(e => {
                let t = nr.safeParse(e);
                t.success && t2.get(el.r, ez)?.displayMode === "inline" && (0, el.D)(t2, ez, {
                    intrinsicHeight: t.data
                })
            }), rH = (0, C.useEffectEvent)(e => {
                let t = nr.safeParse(e);
                nE && t.success && (0, el.D)(t2, ez, {
                    intrinsicWidth: t.data
                })
            }), rW = (0, C.useEffectEvent)(e => {
                if (!ah) return;
                let t = t7.safeParse(e);
                t.success && ag({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rj = (0, C.useEffectEvent)(() => ed ? void(0, el.b)(t2, ez) : e4?.onRequestClose?.()), rV = (0, C.useEffectEvent)(async (e, n) => {
                if (e4?.openExternal != null && await e4.openExternal(e, n)) return;
                let a = eH.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eX.isVerifiedFirstParty) return void(0, eU.a)(t2, a.data.href);
                    if ("popup" !== a.data.openMode && e4?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? t2, a.data.href, n)) return;
                    let e = (0, b.Jj)(a.data.href);
                    if (null != e) return void nM(e);
                    (0, ea.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rY = (0, C.useEffectEvent)(async (e, t) => {
                if (!ro || null == to) throw Error("Plaid Link is unavailable for this app");
                let n = t4.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ei.a)();
                return a(t2, {
                    accountId: to,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rq = (0, C.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: o,
                    accountId: i,
                    frameAccountId: s
                } = t, l, c = void 0 !== b.Wb || null == l || l.content.conversationId.startsWith("chatgpt:") ? void 0 : null.resourceSnapshot.access.accountId, u = i ?? c;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!o.aborted && (s ?? c) === u && e.get(es.f) === u && await a(r, o) && !o.aborted && e.get(es.f) === u) {
                    let t = e.get(el.r, n);
                    if (null == t) return;
                    (0, el.D)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(t2, {
                mcpAppId: ez,
                requestModal: rn()?.requestModal,
                payload: e,
                signal: t,
                accountId: to,
                frameAccountId: n
            })), rB = (0, C.useEffectEvent)(e => (function(e) {
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
                composerOverlayReservePx: nY,
                displayMode: k ? "inline" : e,
                hasComposerOverlay: nZ,
                hostAdapter: aH(),
                showNavigationControls: aT
            })), rz = (0, C.useEffectEvent)(() => {
                let e = t2.get(el.r, ez) ?? tQ;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? q
                }
            }), rK = (0, C.useEffectEvent)(e => {
                let t = (0, el.f)(t2, ez, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rz(),
                    safeAreaInsets: rB(t).insets
                }
            }), r$ = (0, C.useEffectEvent)(e => {
                let t = t8.safeParse(e),
                    n = t2.get(el.r, ez);
                if (t.success && (0, el.a)(n, t.data.mode)) {
                    let n = !k && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !n$ && n4?.style.setProperty("display", "none"), a0 && (0, el.D)(t2, ez, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, el.B)(t2, ez, a, "app_request"), null != as && null != al) {
                        let e = {
                            displayMode: a,
                            isTombstone: aH()?.isTombstone === !0,
                            viewParams: rc,
                            widgetId: al
                        };
                        nQ.current = e, (0, eF.h)(as.setWidgetView(e));
                        let t = null == n4 ? null : tg({
                            ...rz(),
                            containerDimensions: th(n4, k, a),
                            locale: ni.locale,
                            deepLink: ti,
                            safeAreaInsets: rB(a).insets,
                            styleVariables: nq,
                            theme: tT(),
                            userAgent: tI(aH()?.device),
                            toolInfo: aH()?.toolInfo
                        });
                        n0.current = t, null != t && (0, eF.h)(as.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: a
                    }
                }
                return eE.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: ez,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (n ?? tQ).displayMode
                }
            }), rX = (0, C.useEffectEvent)(() => ti), rZ = (0, C.useEffectEvent)(() => t2.get(el.g, ez)), rJ = (0, C.useEffectEvent)(() => {
                var e;
                e = tR ?? void 0, null != t && (0, Q.h)(t, ez, e)
            });
            (0, C.useEffect)(() => {
                rJ()
            }, [ez, tR?.alt, tR?.knownAppId, tR?.logoDarkUrl, tR?.logoUrl]);
            let rQ = (0, C.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (t2.get(el.r, ez)?.sourceMcpAppId !== eK) return;
                    let a = (null != ta ? t0.nullable() : t0).safeParse(t),
                        r = a.success ? a.data : null;
                    if (t2.set(el.w, ez, r), null != ta && a.success) return ta.save(a.data, n)
                }),
                r0 = e => {
                    null != as && (0, eF.h)(as.navigate({
                        delta: e
                    }))
                },
                r1 = {
                    name: null != e4 ? eX.originResourceUri ?? eX.originTool : `${tp}.${eX.originTool}`,
                    attribution: "connectorId" in e_.serverIdentity ? e_.serverIdentity.connectorId : void 0
                },
                r2 = (0, C.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, en.getMcpAppSubmit)(t, () => {
                            e_.assertActive(), aH()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? r1 : {
                        ...r1,
                        visuallyHidden: !0
                    }, e, r)
                }),
                r3 = async function(e, t, n, a, r, o) {
                    let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tG.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: o,
                        modelContextAttachments: i,
                        requestConfirmation: e => aA({
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
                }, r5 = (0, C.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eF.c)("App messages are disabled for this view", c.r.MethodNotFound);
                    let r = (a = aB(), n.aborted || a && eg.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: o,
                        isVisible: i,
                        prompt: l,
                        title: u
                    } = (0, ex.c)(e), d = r2(n, i);
                    if (null == d) throw (0, eF.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                    let p = t.get(J.w).filter(e => "context" === e.kind),
                        _ = crypto.randomUUID(),
                        E = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await r3({
                            source: "mcp_app",
                            sourceId: ez,
                            widgetSource: eX.widgetSource,
                            text: l,
                            structuredContent: o ?? (0, ex.b)(rZ())
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
                }), r6 = e => {
                    e.throwIfAborted(), e_.assertActive(), e4?.assertActive?.()
                }, r8 = async (e, t, n, a) => {
                    r6(t);
                    let r = null != e4 ? await e4.handleRequest(e, t, eX, n) : await a();
                    return r6(t), r
                }, r4 = async (e, t, n) => {
                    let a = await r8({
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
                            } = e, c = await eY({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: o,
                                threadId: i
                            }), u = eq(c), d = n(c);
                            return {
                                ...(0, eF.a)(() => (0, eW.h)({
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
                            threadId: n.get(B.b, {
                                hostId: i,
                                conversationId: r
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        d.throwIfAborted(), c.assertActive();
                        let E = function(e, t) {
                                if (!(0, D.f)(e) || !tK(t)) return t;
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
                            let e = (0, t$.a)({
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
                            if (r.startsWith("chatgpt:")) return (0, e0.i)({
                                isCodexAppsServer: (0, D.f)(u),
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
                            let o = await (0, ej.b)(n, i).callMcpTool({
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
                            return (0, e0.i)({
                                isCodexAppsServer: (0, D.f)(u),
                                toolResult: o
                            })
                        } catch (e) {
                            throw (0, eF.d)(e, "MCP tool call failed")
                        }
                    })({
                        appScope: t6,
                        scope: t2,
                        chatGptMessageId: eX.chatGptMessageId,
                        conversationId: o,
                        getTrustedToolScope: n8,
                        hostId: eu,
                        mcpAppId: ez,
                        mcpServerStatuses: e8,
                        access: e_,
                        server: tp,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, v.s)(a)?.isError === !0) {
                        let t = e0.g.safeParse(a).data;
                        eE.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: ez,
                                initId: (0, A.g)(n9?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: e.name,
                                error: t?.content.find(e => "text" === e.type)?.text ?? P.object({
                                    error: P.string()
                                }).safeParse(t?.structuredContent).data?.error
                            }
                        })
                    }
                    return a
                }, r7 = (0, C.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e5.b);
                    return r4((0, eF.g)(tZ, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), r9 = (0, C.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e5.b),
                        r = c.W.safeParse(e);
                    if (!r.success) throw (0, eF.e)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? c.r.InvalidParams : c.r.InvalidRequest);
                    let i = t2.get(B.b, {
                            hostId: eu,
                            conversationId: o
                        }) ?? void 0,
                        {
                            method: s,
                            params: u
                        } = r.data;
                    if (o.startsWith("chatgpt:") && t3.some(e => e === s)) throw (0, eF.c)("Resource subscriptions require a local Codex thread", c.r.MethodNotFound);
                    switch (s) {
                        case E.a: {
                            let {
                                path: e
                            } = (0, eF.g)(E.b, u, "Invalid MCP file open params");
                            if (!aL) throw (0, eF.c)("File opening is unavailable", c.r.MethodNotFound);
                            if (null != aR) return (0, x.a)(t2, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "file_open",
                                action: "requested"
                            }), await aR(e, n), {};
                            if (!(0, b.Ih)(e) || !(0, b.Lh)(e)) throw (0, eF.c)("Cannot open this file path", c.r.InvalidParams);
                            return (0, x.a)(t2, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "file_open",
                                action: "requested"
                            }), (0, er.openWorkspaceFile)({
                                scope: t2,
                                path: e,
                                cwd: null,
                                hostConfig: (0, em.a)(t6, eu),
                                hostId: eu,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return aC?.includes("ping") ? r8(r.data, n, a, async () => ({})) : {};
                        case et.a:
                            if (!aD) throw (0, eF.c)("The plugin composer is unavailable", c.r.MethodNotFound);
                            if (navigator.userActivation?.isActive !== !0 || null == n9 || document.activeElement !== n9) throw (0, eF.c)("Starting a plugin draft requires a user gesture", c.r.InvalidRequest);
                            return n.throwIfAborted(), aH()?.assertActive?.(), (0, et.d)(t, y, nA), {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tP.safeParse(e);
                                if (!t.success) throw (0, eF.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: n
                                } = t.data;
                                if (tD(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw (0, eF.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(u);
                            n.throwIfAborted();
                            let a = e.options?.target ?? "active";
                            if ((0, x.a)(t2, d.CodexMcpExtensionAction, {
                                    ...nS,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eF.c)("MCP app messages are disabled for this view", c.r.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, tw.e)(t) && null == (0, tw.b)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tS(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eJ,
                                    icon: tR,
                                    server: tp,
                                    widgetSource: eX.widgetSource
                                });
                                if (aH()?.assertActive?.(), "new" === e.options.target) {
                                    if (aP) throw (0, eF.c)("New drafts are unavailable in this view", c.r.MethodNotFound);
                                    (0, et.b)(t6, n)
                                } else {
                                    if (null == t) throw (0, eF.c)("The composer is unavailable", c.r.MethodNotFound);
                                    (0, et.e)(t, n, "append")
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
                                for (let t of e) "text" === t.type && null == (0, tw.b)(t) ? a.push(t.text) : r.push(t);
                                let o = tS(r, t),
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
                                sourceName: eJ,
                                icon: tR,
                                server: tp,
                                sessionId: ez,
                                widgetSource: eX.widgetSource
                            }, ni), s = !1;
                            e.options?.target === "new" && null != rT && eC.a?.mcpAppSandbox != null && (r6(n), s = await eC.a.mcpAppSandbox.consumeUserGesture((0, eH.a)(rT, n9)).catch(() => !1) === !0, r6(n));
                            let l = e.options?.target === "new" ? (0, tG.a)({
                                scope: t6,
                                recipient: t,
                                getNewThreadDestination: tt,
                                globalEntrypointIdentity: "global" === nS.source ? {
                                    connectorId: nS.connectorId,
                                    pluginId: nS.pluginId
                                } : void 0,
                                canCreateCodexThreads: aG,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (aP) throw (0, eF.c)("New threads are unavailable in this view", c.r.MethodNotFound);
                                    r6(n)
                                },
                                sourceName: eJ,
                                toolOrigin: r1,
                                signal: n
                            }) : r2(n);
                            if (null == l) throw (0, eF.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                            let p = t?.get(J.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === ez
                            }) ?? [];
                            return await r3(o, r, l, n, void 0, i, p), null != t && (0, Q.b)(t, p), {}
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
                                        } = a, o = decodeURIComponent((0, ey.j)(new URL(r.uri).pathname)).trim();
                                        if (0 === o.length || o.length > 255 || "." === o || ".." === o || /[/\\:*?"<>|\p{Cc}]/u.test(o)) return;
                                        if ("blob" in r) {
                                            if (r.blob.length > 4 * Math.ceil(8388608 / 3)) return;
                                            t = (0, ev.a)(r.blob)
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
                                            }), (0, eb.f)(e, eI.ExternalLinkConfirmationDialog, {
                                                href: "",
                                                downloadFilename: o.name,
                                                initiator: "mcp_app_resource",
                                                signal: n,
                                                onDownload: () => {
                                                    if (!s && !n.aborted) try {
                                                        a(), (0, eA.a)(o.blob, o.name), i = !0
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
                            }(t2, (0, eF.g)(l.b.shape.params, u, "Invalid MCP file download params"), n, () => r6(n));
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eF.c)("MCP model context requires an available composer", c.r.MethodNotFound);
                            let e = (0, eF.g)(t1, u, "Invalid MCP model context params");
                            if (null != r2() && tD(e.content), nk && e.content?.some(e => "image" === e.type && !(0, b.Ki)({
                                    type: e.mimeType
                                }))) throw (0, eF.c)("Invalid MCP model context params", c.r.InvalidParams);
                            if (null != ta && t2.get(el.r, ez)?.sourceMcpAppId !== eK) throw (0, eF.c)("The widget source is no longer active", -32e3);
                            aH()?.onModelContextUpdate?.(e, ez), (0, $.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    r = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eX.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tp,
                                    composerIcon: tR ?? void 0,
                                    sourceName: eJ,
                                    id: ez,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, eB.f)(t2, ez, t.get(J.w).find(e => e.id === ez) ?? null)), r
                            })(e);
                            if ((0, x.a)(t2, d.CodexMcpExtensionAction, {
                                    ...nS,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != ta) {
                                let t = await rQ(eK, e, !0);
                                (0, eF.b)(t)
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
                            return r4((0, eF.g)(tZ, u, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eF.g)(nt, u, "Invalid MCP resource read params");
                            if (r6(n), (0, x.a)(t2, d.CodexMcpExtensionAction, {
                                    ...nS,
                                    feature: "resource",
                                    action: "read"
                                }), e4?.readHostResource != null) {
                                r6(n);
                                let t = await e4.readHostResource(e, n);
                                if (r6(n), null != t) return t
                            }
                            return (0, eF.a)(() => {
                                (0, eW.a)({
                                    mcpAppScope: eX,
                                    server: tp,
                                    uri: e.uri
                                })
                            }), await r8({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, eZ.d)({
                                        scope: t2,
                                        appContext: eX.appContext,
                                        connectorId: (0, D.f)(tp) ? nA : null,
                                        hostId: eu,
                                        mcpAppId: ez,
                                        originCallId: eX.originCallId ?? null,
                                        threadId: o,
                                        server: tp,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw (0, eF.d)(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eF.g)(nt, u, "Invalid MCP resource subscribe params");
                            return r6(n), (0, x.a)(t2, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "resource",
                                action: "subscribe"
                            }), await ad.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eF.g)(nt, u, "Invalid MCP resource unsubscribe params");
                            return r6(n), (0, x.a)(t2, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await ad.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eF.g)(nn, u, "Invalid MCP event subscribe params"),
                                t = t2.get(el.h, eK)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = n8(await eY({
                                    scope: t2,
                                    hostId: eu,
                                    mcpServerStatuses: e8,
                                    server: tp,
                                    threadId: i
                                }))), null == n) throw (0, eF.c)("MCP event subscriptions require a trusted connector scope", c.r.InternalError);
                            return ap.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eF.g)(na, u, "Invalid MCP event unsubscribe params");
                            return ap.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return r8(r.data, n, a, async () => {
                                let e = await eY({
                                        scope: t2,
                                        hostId: eu,
                                        mcpServerStatuses: (0, D.f)(tp) ? e8 : void 0,
                                        server: tp,
                                        threadId: i
                                    }),
                                    t = eq(e),
                                    n = n8(e);
                                return {
                                    tools: (0, eF.a)(() => (0, eW.e)({
                                        server: tp,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return r8(r.data, n, a, async () => (0, D.f)(tp) ? {
                                resources: []
                            } : {
                                resources: (await eY({
                                    scope: t2,
                                    hostId: eu,
                                    server: tp,
                                    threadId: i,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return r8(r.data, n, a, async () => (0, D.f)(tp) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eY({
                                    scope: t2,
                                    hostId: eu,
                                    server: tp,
                                    threadId: i,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return r8(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return r8(r.data, n, a, () => {
                                throw (0, eF.c)(`Unsupported MCP proxy method: ${s}`, c.r.MethodNotFound)
                            })
                    }
                }), oe = (0, C.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(963552)]).then(n.bind(n, "SEK8"));
                    r6(t), a(nc(), {
                        Frame: ns,
                        sourceMcpAppId: eK,
                        signal: t,
                        handleRequest: async (e, n) => c.Z.parse(await r9(e, n ?? t))
                    }, e)
                });
            (0, C.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", n7(e), () => {
                    e.remove(), n7(t => t === e ? null : t), an(!1)
                }
            }, [ez]), (0, C.useLayoutEffect)(() => {
                null != n4 && null != n9 && function(e) {
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
                    frameElement: n4,
                    sandboxElement: n9,
                    fullSurface: k,
                    liftModal: rw,
                    inheritHostBackground: ew,
                    isCardInlineSurface: ry,
                    isFullScreen: n$,
                    isWidgetVisible: nz && null != nK,
                    prefersBorder: nh,
                    surfaceBackgroundColor: nB,
                    title: tO,
                    globalSurface: tF
                })
            }, [k, rw, n4, ew, ry, n$, nz, nK, nh, n9, nB, tO, tF]), (0, C.useLayoutEffect)(() => {
                if (null == n4) return;
                if (null != rv) {
                    let e = rv.dataset.overlayOwner;
                    null == e ? n4.removeAttribute("data-overlay-owner") : n4.setAttribute("data-overlay-owner", e)
                }
                let e = n$ ? rb : rv,
                    t = rS ? (0, X.a)() : rG;
                if (rw && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === n4.style.display;
                    n4.style.display = "none", e || eE.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rF().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (n4.parentElement !== t && (n4.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(n4, null) : t.appendChild(n4), eE.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rF().safe.mcpAppId,
                                showInModal: rw
                            }
                        })), at || an(!0), null == e) {
                        let e = "none" === n4.style.display;
                        n4.style.display = "none", e || eE.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rF().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete n4.dataset.mcpAppParked,
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
                            sharesScrollHost: rP?.contains(t) === !0,
                            frameElement: n4,
                            frameContainer: t,
                            fullSurface: k,
                            modalOpen: rw,
                            sandboxElement: n9,
                            isFullScreen: n$,
                            isInGlobalHost: rS,
                            anchorElement: e,
                            rightPanelAnimationProgress: nV,
                            rightPanelLayoutTick: tl
                        })
                };
                return k || n$ || rw || rS || !ed || null == e || e.hidden || "true" !== n4.dataset.mcpAppParked ? n() : (0, td.a)(e, n)
            }, [n4, k, rw, ed, rP, rv, n$, rS, at, nV, tl, n9, rb, rG]);
            let ot = e4?.autoFocus === !0;
            (0, C.useEffect)(() => {
                ot && nz && null != rv && n9?.focus()
            }, [ot, nz, rv, n9]), (0, C.useLayoutEffect)(() => (nJ.current = !1, () => {
                nJ.current = !0
            }), [ez, t2]);
            let on = (0, C.useEffectEvent)(async () => {
                    try {
                        if (e4?.assertActive?.(), !aQ) return;
                        let e = tQ.openInAppUrl ?? P.string().nullable().parse(await as?.getCurrentPath?.(void 0));
                        if (e4?.assertActive?.(), null == e) return;
                        let t = e4?.openInApp?.validateUrl(null == tQ.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, ea.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                oa = (0, C.useEffectEvent)(e => {
                    let t = t2.get(K.l.tabs$).some(e => e.tabId === (0, e7.b)(ez));
                    (0, e7.c)(t2, {
                        source: {
                            hostId: eu,
                            server: tp,
                            connectorId: nA ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tR,
                        toolIcon: tE,
                        mcpAppId: ez,
                        onExitFullScreen: e,
                        onPanelElementChange: ar,
                        title: tQ.displayModeTitle ?? tL,
                        openInAppName: e4?.openInApp?.appName,
                        onOpenInApp: aQ ? () => {
                            on()
                        } : void 0
                    })
                }),
                or = (0, C.useEffectEvent)(() => {
                    let e = t2.get(el.r, ez);
                    !nJ.current && e?.isOpen && "fullscreen" === e.displayMode && (0, el.c)(t2, ez)
                }),
                oo = (0, C.useEffectEvent)(e => {
                    let t = aH()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nS);
                    else {
                        let t = P.object({
                            type: P.literal("interaction"),
                            label: P.string()
                        }).safeParse(e);
                        t.success && (0, x.a)(t2, u.l, {
                            ...nS,
                            host: "codex",
                            actionType: (0, tn.b)(t.data.label)
                        })
                    }
                });
            (0, C.useLayoutEffect)(() => {
                n$ ? oa(or) : (0, e7.a)(t2, ez)
            }, [n$, ez, t2, tR?.alt, tR?.knownAppId, tR?.logoDarkUrl, tR?.logoUrl, tE?.logoUrl, tE?.logoDarkUrl, tL, tQ.displayModeTitle, aQ, e4?.openInApp?.appName]), (0, C.useLayoutEffect)(() => {
                if (null != a_) return aE.watch(e => {
                    let {
                        get: t
                    } = e, n = t(e9.f, a_);
                    null != n && (0, e9.getThreadPanelTabController)(n).updateTab(aE, a_, {
                        documentLabel$: af
                    })
                })
            }, [af, a_, aE]);
            let oi = (0, C.useEffectEvent)(() => {
                    let e = n$ ? rb : rv;
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
                os = null != n4 && at && null != rx && null != rT && null != rh,
                ol = (0, C.useEffectEvent)(e => {
                    let t;
                    if (!os) return;
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
                    n2.current = n, n.mark("surface_mcp_app"), (0, el.D)(nc(), ez, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), ag(no), n5.current = null, n6.current = null;
                    let r = rI();
                    if (null == r) return void rk("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: o,
                        iframeAllow: i
                    } = (0, tu.b)(nb, nx, nO), u = (0, ek.a)(rC, rT, rh);
                    u instanceof HTMLIFrameElement && (u.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), u.allow = i, u.allowFullscreen = !0), u.classList.add("pointer-events-none", "opacity-0"), n4.appendChild(u), ae(u), n.mark("rendered");
                    let d = new AbortController,
                        T = !1,
                        I = new eP,
                        v = null == s ? null : new ep(s),
                        y = null,
                        C = crypto.randomUUID(),
                        N = rZ(),
                        w = ru(),
                        {
                            sourceMcpAppId: R,
                            toolInput: D,
                            toolOutput: S,
                            toolResponseMetadata: G,
                            toolResult: L,
                            toolStatus: O,
                            toolResultNotification: F,
                            toolCallCancellationReason: M
                        } = rf(),
                        k = new tJ.b(nc(), R, e => {
                            rV({
                                href: e
                            }, d.signal).catch(e => {
                                d.signal.aborted || (0, eT.d)(e, rF())
                            })
                        });
                    n5.current = null == L || null == S ? null : {
                        widgetId: C,
                        widgetState: N,
                        sourceMcpAppId: R,
                        toolInput: D,
                        toolOutput: S,
                        toolResponseMetadata: G,
                        toolStatus: O,
                        toolResult: F,
                        toolCallCancellationReason: M
                    };
                    let U = aM ? {
                            requestConnectPlugin: async e => aH()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tj.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aH()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aH()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aH()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        H = null == L ? null : U ?? rm(L),
                        W = null == H ? null : {
                            ...H,
                            requestDeclinePluginSuggestions: U?.requestDeclinePluginSuggestions ?? (null == H.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = rf().toolResult,
                                    t = null == e ? void 0 : rm(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await eC.a?.mcpAppSandbox?.consumeUserGesture((0, eH.a)(rT, u)).catch(() => !1) || d.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        j = () => {
                            let e = aH()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        V = {
                            ...W,
                            downloadBlob: a5 ? e => aH()?.downloadBlob?.(e, d.signal) : void 0,
                            triggerHaptic: a6 ? e => aH()?.triggerHaptic?.(e, d.signal) : void 0,
                            requestCheckout: aK ? async e => {
                                d.signal.throwIfAborted();
                                let t = aH();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, d.signal)
                            } : void 0,
                            requestModal: async e => {
                                d.signal.aborted || (aV ? await aB()?.requestModal(e) : null != rn() && (aH()?.requestModal == null || P.object({
                                    params: P.object({
                                        view: P.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rq(e, d.signal, to) : aH()?.requestModal != null ? await aH()?.requestModal?.(e, d.signal) : await oe(e, d.signal))
                            },
                            uploadFile: a8 ? (e, t) => j().uploadFile(e, t, d.signal) : void 0,
                            getFileDownloadUrl: a8 ? e => j().getFileDownloadUrl(e, d.signal) : void 0,
                            getFileMetadata: a8 ? e => j().getFileMetadata(e, d.signal) : void 0,
                            selectFiles: a8 ? () => j().selectFiles(d.signal) : void 0,
                            share: a4 ? async e => {
                                d.signal.throwIfAborted(), await aH()?.share?.(e, d.signal)
                            } : void 0,
                            requestLinkToConnector: aV || re ? async e => d.signal.aborted ? {
                                didConnect: !1
                            } : await (aB()?.requestLinkToConnector ?? aH()?.requestLinkToConnector)?.(e, d.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: aq ? e => {
                                d.signal.aborted || (aB()?.showToast ?? aH()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aU || aV && aW || a0 ? () => {
                                d.signal.aborted || aH()?.allowsInteractiveDismissal === !1 || (aU || aV || aH()?.displayMode != null ? rj() : r$({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: (e, t) => {
                                let n = AbortSignal.any([t, d.signal]),
                                    a = y?.notifyMcpAppsMcpNotification;
                                if (ay && null != a) {
                                    let t = k.handleRequest(e, d.signal, e => (0, eF.h)(a(e)));
                                    if (null != t) return t
                                }
                                let r = I.handleRequest(e, {
                                    sandboxElement: u,
                                    sandboxId: rT,
                                    initId: q,
                                    signal: d.signal,
                                    notify: y?.notifyMcpAppsMcpNotification
                                });
                                if (null != r) return r;
                                let o = _.h.safeParse(e);
                                if (o.success && null != h) {
                                    for (let {
                                            component: e,
                                            level: t,
                                            message: n,
                                            metadata: a
                                        }
                                        of o.data.params.entries) eE.a[t](n, {
                                        safe: {
                                            component: e,
                                            metadata: a,
                                            pluginId: h
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let i = _.g.safeParse(e);
                                return i.success && null != v ? v.handleRequest(i.data.params) : r9(e, n).catch(t => {
                                    if (!n.aborted) {
                                        let n = rF();
                                        eE.a.warning("App request failed", {
                                            safe: {
                                                ...(0, eT.b)(t),
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
                            callTool: (e, t) => r7(e, t, d.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!d.signal.aborted) {
                                    if (eT.h.safeParse(e).success) return void(0, eT.d)(e, rF());
                                    rk("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rU,
                            notifyIntrinsicWidth: rH,
                            notifyTabMetadata: e => {
                                let t = t9.safeParse(e);
                                t.success && !d.signal.aborted && af.set(t.data)
                            },
                            notifyNavigation: e => {
                                d.signal.aborted || rW(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                d.signal.aborted || aH()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rV(e, d.signal),
                            openPlaidLink: ro ? e => rY(e, d.signal) : void 0,
                            initializeMcpApp: e => {
                                if (d.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rK(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rk("configuration", e), e
                                }
                            },
                            requestClose: aW ? rj : void 0,
                            requestDisplayMode: r$,
                            openConversationOverlay: a$ ? async e => {
                                d.signal.throwIfAborted(), await aH()?.openConversationOverlay?.(e, d.signal)
                            } : void 0,
                            notifyAutofillCandidates: aZ ? e => {
                                d.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: aX ? e => {
                                d.signal.throwIfAborted();
                                let t = aH()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, u, d.signal)
                            } : void 0,
                            setOpenInAppUrl: aJ ? e => {
                                d.signal.throwIfAborted();
                                let {
                                    href: t
                                } = P.object({
                                    href: P.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, el.D)(nc(), ez, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aH()?.openInApp?.validateUrl(t);
                                null != n && (0, el.D)(nc(), ez, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: a1 ? async e => {
                                d.signal.throwIfAborted(), await aH()?.presentation?.requestFocusedObject?.(e, d.signal)
                            } : void 0,
                            requestCloseFocusedObject: a2 ? async () => {
                                d.signal.throwIfAborted(), await aH()?.presentation?.requestCloseFocusedObject?.(d.signal)
                            } : void 0,
                            requestTargetedReply: aY ? async e => {
                                if (d.signal.aborted) return;
                                let t = aB()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aH()?.setTargetedReply;
                                if (null != n) return void n(e, d.signal);
                                let a = aH()?.requestTargetedReply;
                                null != a && await (0, eD.b)(e, a, aA, d.signal)
                            } : void 0,
                            requestReconnectConnector: a9 ? async () => {
                                let e = aH()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(d.signal)
                            } : void 0,
                            requestConnectSheet: a7 ? e => {
                                let t = aH()?.requestConnectSheet;
                                if (null != t) return t(e, d.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => r5(e, d.signal),
                            sendInstrument: e => {
                                if (!d.signal.aborted) {
                                    if (ak || null != W) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, x.a)(nc(), t.messageType, t.payload)
                                    }
                                    eT.f.safeParse(e).success && ((0, eT.d)(e, rF()), rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), W?.sendInstrument(e);
                                    let t = rn() ?? rr();
                                    t?.sendInstrument(e), (null == t && null == W || P.object({
                                        type: P.literal("interaction")
                                    }).safeParse(e).success) && oo(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!d.signal.aborted) return rQ(e, t, P.object({
                                    waitForPersistence: P.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        Y = (0, eH.b)({
                            hostApiHandlers: V,
                            assertActive: () => {
                                d.signal.throwIfAborted(), nd(), aH()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: rT,
                            signal: d.signal,
                            sourceUrl: r.sourceUrl,
                            webview: u
                        }),
                        q = (0, A.g)(u.getAttribute("src") ?? void 0),
                        B = rF();
                    eE.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nU,
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
                    let z = setTimeout(() => {
                        rk("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), $(), K()
                    }, 5e4);

                    function K() {
                        clearTimeout(z), e()
                    }

                    function $() {
                        d.signal.aborted || (clearTimeout(z), d.abort(), af.set(null), aI(), n2.current === n && (n2.current = null), n.isRecording() && n.abort("navigation_away"), I[Symbol.dispose](), k[Symbol.dispose](), v?.[Symbol.dispose](), n5.current = null, n6.current = null, nQ.current = null, n0.current = null, n1.current = null, (0, el.D)(nc(), ez, {
                            isWidgetReady: !1
                        }), ai(null), ag(no), null != y && (0, eF.h)(y.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), u.remove(), u instanceof HTMLIFrameElement || u.destroy?.(), eE.a.info("Removed app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), ae(e => e === u ? null : e))
                    }
                    return Y.then(async e => {
                        if (d.signal.aborted) return;
                        if (eC.a?.mcpAppSandbox != null) {
                            if (null == q) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, tW.b)({
                                scope: t6,
                                request: {
                                    identity: e_.serverIdentity,
                                    pluginId: nT() ?? void 0,
                                    permissions: nb,
                                    initId: q,
                                    sandboxId: rT
                                },
                                origin: r.sandboxOrigin,
                                appName: nI(),
                                signal: d.signal,
                                onReload: nF
                            })
                        }
                        d.signal.throwIfAborted(), n.mark("sandbox_ready"), eE.a.info("Connected app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), y = e;
                        let i = e.notifyMcpAppsMcpNotification,
                            l = eC.a?.mcpAppSandbox != null && null != i;
                        null != i && v?.setNotificationSender(e => (0, eF.h)(i(e))), null != e.applyAutofillCandidate && (t = await aH()?.autofill?.(e.applyAutofillCandidate, d.signal), d.signal.throwIfAborted()), ai({
                            api: e,
                            widgetId: C
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: u
                        } = rz(), p = tT(), {
                            containerDimensions: I
                        } = rL(n4), A = tI(aH()?.device), R = nc().get(eL.a), P = R["--color-background-primary"], x = rB(c), L = {
                            "openai/viewer-header": ay && null != i,
                            "openai/viewer-document-controls": ay && null != i,
                            ...tg({
                                availableDisplayModes: u,
                                containerDimensions: I,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nW(),
                                deepLink: rX(),
                                safeAreaInsets: x.insets,
                                styleVariables: R,
                                theme: p,
                                userAgent: A,
                                toolInfo: aH()?.toolInfo
                            }),
                            ...null == s || null == i ? {} : {
                                [_.a]: !0
                            },
                            ...null == h ? {} : {
                                [_.d]: !0
                            }
                        }, {
                            csp: O
                        } = r, F = {
                            [f.a]: {},
                            ...l ? {
                                "openai/find": {}
                            } : {},
                            ...ax ? {
                                [m.a]: {
                                    draft: nC() ? {} : void 0
                                }
                            } : {},
                            "openai/skillsDeepLinks": {},
                            ...r.experimentalCapabilities,
                            ...aD ? {
                                [et.a]: {}
                            } : {},
                            ...aL ? {
                                "openai/files": {}
                            } : {}
                        };
                        e.supportsWidgetTextureReceiver ? F[g.b] = {} : delete F[g.b];
                        let M = ny ? {} : void 0;
                        ax && (M = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == v && rO(), eE.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: q
                            }
                        }), T = !0;
                        let k = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != aF,
                                expectedReadySignal: aF,
                                csp: O,
                                displayMode: az(c),
                                features: o,
                                subjectId: aH()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nN,
                                html: r.html,
                                isFirstParty: ak || null != W || a9,
                                isSidebarOpen: aH()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aH()?.isTombstone === !0,
                                maxHeight: I.maxHeight,
                                maxWidth: I.maxWidth,
                                measureWidth: !0 === nE,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [eN] : [], ...ay && null != i ? [tJ.a] : [], ...ax || !ny ? ["ui/message"] : [], ...aN?.split(";") ?? [], ...aD ? [et.a] : [], ...aL ? [E.a] : [], ...null == v || null == i ? [] : [_.c], ...null == h ? [] : [_.e], ...null == i ? [] : [...t3, ...au && !aO ? t5 : []]],
                                    hostCapabilities: {
                                        downloadFile: {},
                                        experimental: F,
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: M,
                                        updateModelContext: ny ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(b.aj.map(e => [e, o.includes(b.$i[e].feature) ? {} : void 0])),
                                            csp: {
                                                baseUriDomains: O.baseUriDomains,
                                                connectDomains: O.connectDomains,
                                                frameDomains: O.frameDomains,
                                                resourceDomains: O.resourceDomains
                                            }
                                        }
                                    },
                                    hostContext: L,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: nc().get(ef.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tF
                                },
                                safeArea: x,
                                theme: p,
                                toolInput: D,
                                toolOutput: S,
                                toolResponseMetadata: G,
                                userAgent: A,
                                viewParams: w,
                                widgetId: C,
                                widgetState: N
                            }),
                            U = !1;
                        for await (let t of k) {
                            let a = nc().get(el.r, ez)?.sandboxError;
                            if (d.signal.aborted || np(a)) break;
                            if (eT.e.safeParse(t).success) return;
                            eT.f.safeParse(t).success && ((0, eT.d)(t, rF()), rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = eT.g.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new tV.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (U || !eH.d.safeParse(t).success) continue;
                            U = !0, K();
                            let {
                                displayMode: o,
                                availableDisplayModes: i
                            } = rz(), s = {
                                ...L,
                                displayMode: o,
                                availableDisplayModes: [...i]
                            };
                            (0, el.D)(nc(), ez, {
                                isWidgetReady: !0
                            }), (0, eF.h)(e.setWidgetView({
                                displayMode: az(o),
                                isTombstone: aH()?.isTombstone === !0,
                                viewParams: w,
                                widgetId: C
                            })), (0, eF.h)(e.setTheme({
                                theme: p
                            })), (0, eF.h)(e.setSafeArea({
                                safeArea: x
                            }));
                            let l = {
                                isSidebarOpen: aH()?.presentation?.isSidebarOpen === !0,
                                maxHeight: I.maxHeight,
                                maxWidth: I.maxWidth,
                                surfaceBackgroundColor: P
                            };
                            n1.current = l, (0, eF.h)(e.setAdditionalGlobals({
                                additionalGlobals: l
                            })), (0, eF.h)(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), eE.a.info("Started app widget", {
                                safe: {
                                    displayMode: o,
                                    initId: q
                                }
                            }), n.end()
                        }
                        if (!U && !d.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        d.signal.aborted || (T && rM("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rk(null == y ? "handshake" : "widget", e)), $()
                    }).finally(() => {
                        K()
                    }), $
                });
            (0, C.useLayoutEffect)(() => {
                if (os) return nc().get(tb, void 0)(ol, e => rk("handshake", e), oi)
            }, [t6, os, ny, nN, nO, nv, nL, a5, a6, aI, aL, ax, aD, ro, aW, q, null, eu, nU, n4, k, j, s, h, aO, nE, aM, aK, a4, a8, a7, a9, re, aU, aq, aV, aY, a0, aJ, a$, aX, aZ, a1, a2, ak, ay, aN, aF, a.requiresMcpInitialization, to, at, ez, rg, aA, rT, rx, rh, rC, tp, au, aw, tF]), (0, C.useLayoutEffect)(() => {
                ad.setConversation(o).catch(e => {
                    eE.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: o,
                            mcpAppId: ez
                        },
                        sensitive: {
                            error: e,
                            hostId: eu
                        }
                    })
                })
            }, [o, eu, ad, ez]), (0, C.useLayoutEffect)(() => {
                ap.setConversation(o, au && nP).catch(e => {
                    eE.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [o, ap, nP, au]), (0, C.useLayoutEffect)(() => {
                let e = as?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = ap.connectNotificationSink(e);
                return () => {
                    t(), ap.clear().catch(e => {
                        eE.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [ap, as]), (0, C.useLayoutEffect)(() => {
                let e = as?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = ad.connectNotificationSink(t => (0, eF.h)(e(t)));
                return () => {
                    t(), ad.clear().catch(e => {
                        eE.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [ad, as]), (0, C.useEffect)(() => {
                if (!nz || null == as || null == al) return;
                let e = {
                        widgetId: al,
                        sourceMcpAppId: eK,
                        toolInput: ri,
                        toolOutput: rl,
                        toolResponseMetadata: rE,
                        toolStatus: r_,
                        toolCallCancellationReason: tB,
                        toolResult: rp
                    },
                    t = {
                        ...e,
                        widgetState: n3
                    };
                T()(n5.current, t) || (n5.current = t, (0, eF.h)(as.setWidgetData({
                    toolInput: ri,
                    toolOutput: rl,
                    toolResponseMetadata: rE,
                    widgetId: al,
                    widgetState: n3
                })));
                let n = n6.current?.widgetId === al ? n6.current : null;
                if (T()(n, e)) return;
                n6.current = e;
                let a = n?.sourceMcpAppId !== eK;
                null != ri && (a || !T()(n?.toolInput, ri)) && (0, eF.h)(as.notifyMcpAppsToolInput({
                    arguments: ri
                })), "cancelled" === r_ ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tB) && (0, eF.h)(as.notifyMcpAppsToolCancelled({
                    reason: tB
                })) : null == rp || !a && T()(n?.toolResult, e.toolResult) && n?.toolStatus === r_ && T()(n?.toolInput, ri) && T()(n?.toolResponseMetadata, rE) || (0, eF.h)(as.notifyMcpAppsToolResult({
                    ...rp,
                    isError: "error" === r_ || rp.isError,
                    _meta: "error" === r_ ? {
                        ...rp._meta,
                        status: "error"
                    } : rp._meta
                }))
            }, [nz, rp, as, eK, ri, rl, rE, r_, tB, al, n3]), (0, C.useEffect)(() => {
                nz && null != as && (0, eF.h)(as.notifyMcpAppsHostContext({
                    hostContext: {
                        [f.a]: nH
                    }
                }))
            }, [nz, nH, as]), (0, C.useEffect)(() => {
                if (nz && null != as && null != n4) return s?.observeHostContext?.(t2, n4, e => {
                    (0, eF.h)(as.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, n4, nz, as, t2]), (0, C.useEffect)(() => {
                if (null == n4 || !rA || null == as || null == al || n$ && null == rb) return;
                let e = rB(nX);
                (0, eF.h)(as.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: az(nX),
                    isTombstone: aH()?.isTombstone === !0,
                    viewParams: rc,
                    widgetId: al
                };
                return T()(nQ.current, t) || (nQ.current = t, (0, eF.h)(as.setWidgetView(t))),
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
                        frameElement: n4,
                        inlineAnchor: rv,
                        fitWidth: nE,
                        rightPanelAnimationProgress: nV,
                        onLayout: () => {
                            if ("true" === n4.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rL(n4), n = {
                                isSidebarOpen: aH()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rw ? "transparent" : nB
                            };
                            T()(n1.current, n) || (n1.current = n, (0, eF.h)(as.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tg({
                                availableDisplayModes: tQ.availableDisplayModes ?? q,
                                containerDimensions: t,
                                displayMode: nX,
                                locale: ni.locale,
                                deepLink: ti,
                                safeAreaInsets: e.insets,
                                styleVariables: nq,
                                theme: tT(),
                                userAgent: tI(aH()?.device),
                                toolInfo: aH()?.toolInfo
                            });
                            T()(n0.current, a) || (n0.current?.theme !== a.theme && (0, eF.h)(as.setTheme({
                                theme: a.theme
                            })), n0.current = a, (0, eF.h)(as.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [n4, nE, nZ, k, j, rv, ni.locale, nq, q, tQ.availableDisplayModes, rA, n$, rt, a3, rw, e4?.displayMode, e4?.showModalCloseButton, aT, ti, nV, nY, as, rb, nB, tF, rc, al, nX]);
            let oc = aT && !n$,
                ou = aT && n$ && nj?.tabId === (0, e7.b)(ez);
            return (0, i.jsxs)(i.Fragment, {
                children: [k && rA && nz && null != n9 && null != rT ? (0, i.jsx)(t_, {
                    sandboxElement: n9,
                    sandboxId: rT
                }) : null, nz && null != n9 && null != rT ? (0, i.jsx)(ts, {
                    panelTabId: a_,
                    sandboxElement: n9,
                    sandboxId: rT,
                    title: tO
                }) : null, null != ab && rA ? (0, i.jsx)(eG.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...ab,
                        onCancel: aI,
                        onConfirm: av
                    }
                }) : null, ou ? (0, i.jsx)(z.a.RightPanelTabListBefore, {
                    children: (0, i.jsx)(tU, {
                        canGoBack: am.canGoBack,
                        canGoForward: am.canGoForward,
                        className: "h-full px-1",
                        onBack: () => r0(-1),
                        onForward: () => r0(1)
                    })
                }) : null, oc && null != n4 && !n$ ? (0, N.createPortal)((0, i.jsx)(tU, {
                    canGoBack: am.canGoBack,
                    canGoForward: am.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => r0(-1),
                    onForward: () => r0(1)
                }), n4) : null]
            })
        }

        function np(e) {
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
                        D = (0, s.a)(),
                        S = m(t, D);
                    o()(e => e());
                    let G = e => {
                            N.signal.aborted || (0, i.c)(e) || t.get(E.f).danger(e instanceof Error ? e.message : String(e), {
                                id: D,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        x = o()(() => {
                            N.signal.removeEventListener("abort", x), P(), S?.close()
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
                                "app-server" === c.kind && (S = m(t, D, e))
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
                                    id: D,
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
            i = n("hV9T"),
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
                            remoteMarketplaceName: i._c
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
                        errorTitle: D,
                        errorIllustration: S,
                        hostDisplayModes: G,
                        fullSurface: x,
                        hostScroll: L,
                        inlineSurface: O,
                        mcpAppId: F,
                        overlayOwnerId: M,
                        onRetryResourceRead: k,
                        renderErrorActions: U,
                        appName: H,
                        presentation: W,
                        showLoadingStatus: j,
                        disableInlineLoadingState: V
                    } = e,
                    Y = void 0 !== x && x,
                    q = void 0 !== L && L,
                    B = void 0 === O ? "standalone" : O,
                    z = void 0 === M ? null : M,
                    K = void 0 === j || j,
                    $ = void 0 !== V && V,
                    X = (0, i.y)(d.a),
                    Z = (0, i.x)(E.h, F),
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
                    er = (0, i.x)(E.u, F),
                    eo = (0, i.x)(E.v, F),
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
                w[20] !== I || w[21] !== ee?.availableDisplayModes || w[22] !== ee?.htmlByteLength || w[23] !== G || w[24] !== F || w[25] !== ef ? (b = () => {
                    (null != I || null != ef) && p.a.warning("MCP app error displayed", {
                        safe: {
                            reason: I ?? "App could not be displayed",
                            htmlByteLength: ee?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: F,
                            error: ef,
                            hostDisplayModes: G,
                            availableDisplayModes: ee?.availableDisplayModes
                        }
                    })
                }, w[20] = I, w[21] = ee?.availableDisplayModes, w[22] = ee?.htmlByteLength, w[23] = G, w[24] = F, w[25] = ef, w[26] = b) : b = w[26];
                let eg = (0, s.useEffectEvent)(b);
                if (w[27] !== eg ? (v = () => {
                        eg()
                    }, w[27] = eg, w[28] = v) : v = w[28], w[29] !== I || w[30] !== F || w[31] !== em ? (A = [I, em, F], w[29] = I, w[30] = F, w[31] = em, w[32] = A) : A = w[32], (0, s.useEffect)(v, A), "too-large" === ea.kind) {
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
                        return !K || $ ? null : (w[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
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
                    return w[43] !== $ || w[44] !== Y || w[45] !== q || w[46] !== ep || w[47] !== K || w[48] !== t || w[49] !== p ? (n = (0, a.jsx)(_.a, {
                        className: t,
                        height: p,
                        inlineFramePadding: ep,
                        fullSurface: Y,
                        allowCompact: q,
                        showLoadingStatus: K,
                        disableInlineLoadingState: $
                    }), w[43] = $, w[44] = Y, w[45] = q, w[46] = ep, w[47] = K, w[48] = t, w[49] = p, w[50] = n) : n = w[50], w[51] !== e_ || w[52] !== B || w[53] !== i || w[54] !== s || w[55] !== e || w[56] !== n ? (r = (0, a.jsx)("div", {
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
                    return w[58] !== ea.kind || w[59] !== F || w[60] !== k || w[61] !== Z?.content.mcpAppHostAdapter?.retry || w[62] !== X ? (e = Z?.content.mcpAppHostAdapter?.retry ?? ("error" === ea.kind ? k : () => (0, E.C)(X, F)), w[58] = ea.kind, w[59] = F, w[60] = k, w[61] = Z?.content.mcpAppHostAdapter?.retry, w[62] = X, w[63] = e) : e = w[63], w[64] !== H || w[65] !== S || w[66] !== D || w[67] !== Y || w[68] !== B || w[69] !== eE || w[70] !== U || w[71] !== e ? (t = (0, a.jsx)(f.a, {
                        error: eE,
                        errorTitle: D,
                        errorIllustration: S,
                        fullSurface: Y,
                        inlineSurface: B,
                        pluginName: H,
                        renderErrorActions: U,
                        onRetry: e
                    }), w[64] = H, w[65] = S, w[66] = D, w[67] = Y, w[68] = B, w[69] = eE, w[70] = U, w[71] = e, w[72] = t) : t = w[72], t
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
            let t, n, c, f, m, g, h, T, I, b, v, A, y, C, N, w, R, P, D, S, G, x, L, O, F, M = (0, r.c)(65);
            M[0] !== e ? ({
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
            } = e, M[0] = e, M[1] = t, M[2] = n, M[3] = c, M[4] = f, M[5] = m, M[6] = g, M[7] = h, M[8] = T, M[9] = I, M[10] = b, M[11] = v, M[12] = A, M[13] = y, M[14] = C) : (t = M[1], n = M[2], c = M[3], f = M[4], m = M[5], g = M[6], h = M[7], T = M[8], I = M[9], b = M[10], v = M[11], A = M[12], y = M[13], C = M[14]);
            let k = void 0 === y ? null : y,
                U = void 0 !== C && C,
                H = (0, o.y)(d.a),
                W = (0, o.x)(u.s, h),
                j = (0, o.z)(p.a);
            M[15] !== g || M[16] !== h || M[17] !== H ? (N = () => {
                if ("component" === g) return () => {
                    (0, u.z)(H, h)
                }
            }, w = [g, h, H], M[15] = g, M[16] = h, M[17] = H, M[18] = N, M[19] = w) : (N = M[18], w = M[19]), (0, i.useLayoutEffect)(N, w);
            let V = (0, i.useContext)(s.c)?.rightPanelLayoutTick;
            M[20] !== T || M[21] !== I || M[22] !== A ? (R = void 0 !== I ? I : T?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === A
            })?.pluginId, M[20] = T, M[21] = I, M[22] = A, M[23] = R) : R = M[23];
            let Y = R;
            M[24] !== c || M[25] !== m || M[26] !== Y || M[27] !== A ? (P = {
                hostId: m,
                pluginId: Y,
                connectorId: c,
                server: A
            }, M[24] = c, M[25] = m, M[26] = Y, M[27] = A, M[28] = P) : P = M[28];
            let {
                bridge: q,
                pluginId: B,
                isLoading: z
            } = (0, o.x)(l.a, P), K = Y ?? B;
            M[29] !== m || M[30] !== K ? (D = ! function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return !1
            }({
                hostId: m,
                pluginId: K
            }) ? void 0 : K, M[29] = m, M[30] = K, M[31] = D) : D = M[31];
            let $ = D,
                X = v.isLoading || z;
            M[32] !== f || M[33] !== X || M[34] !== v ? (S = (0, _.e)({
                ...v,
                isLoading: X
            }, f), M[32] = f, M[33] = X, M[34] = v, M[35] = S) : S = M[35];
            let Z = S;
            return M[36] !== n || M[37] !== Z || M[38] !== q || M[39] !== $ || M[40] !== U || M[41] !== f || M[42] !== m || M[43] !== j || M[44] !== h || M[45] !== T || M[46] !== k || M[47] !== b || M[48] !== Y || M[49] !== V || M[50] !== H || M[51] !== A ? (x = () => {
                j || "ready" !== Z.kind || null == n || (0, u.y)(H, {
                    ...b,
                    recipient: k,
                    resource: Z.data,
                    access: n,
                    fullSurface: U,
                    hostDisplayModes: f,
                    hostId: m,
                    mcpAppId: h,
                    mcpServerStatuses: T,
                    pluginId: Y,
                    server: A,
                    firstPartyPluginBridge: q,
                    firstPartyPluginLoggerPluginId: $,
                    rightPanelLayoutTick: V
                })
            }, G = [n, Z, q, $, U, f, m, j, h, T, k, b, Y, V, H, A], M[36] = n, M[37] = Z, M[38] = q, M[39] = $, M[40] = U, M[41] = f, M[42] = m, M[43] = j, M[44] = h, M[45] = T, M[46] = k, M[47] = b, M[48] = Y, M[49] = V, M[50] = H, M[51] = A, M[52] = G, M[53] = x) : (G = M[52], x = M[53]), (0, i.useLayoutEffect)(x, G), M[54] !== t || M[55] !== g || M[56] !== h || M[57] !== H || M[58] !== W ? (L = () => {
                "component" !== g && null != W && (0, E.c)(H, {
                    Frame: t,
                    lifetime: g,
                    sessionId: W,
                    sourceMcpAppId: h
                })
            }, O = [t, g, h, W, H], M[54] = t, M[55] = g, M[56] = h, M[57] = H, M[58] = W, M[59] = L, M[60] = O) : (L = M[59], O = M[60]), (0, i.useLayoutEffect)(L, O), M[61] !== t || M[62] !== g || M[63] !== W ? (F = "component" === g && null != W ? (0, a.jsx)(t, {
                sessionId: W
            }, W) : null, M[61] = t, M[62] = g, M[63] = W, M[64] = F) : F = M[64], F
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