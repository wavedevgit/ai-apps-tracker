export const __rspack_esm_ids = [114517];
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
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(1284), n.e(348995), n.e(759572), n.e(129649), n.e(632355), n.e(482788)]).then(n.bind(n, "iAuu"))
            }
        })
    }),
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(514247)]).then(n.bind(n, "shkb"))
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
            l = n("liTb"),
            c = n("tSEg"),
            u = n("XCEe"),
            d = n("FNWO"),
            p = n("O0Tw");
        let _ = {
                accountId: o.never().optional(),
                connectorId: o.never().optional(),
                returnTo: o.never().optional(),
                signal: o.never().optional()
            },
            E = o.object({
                ..._,
                app: o.never().optional(),
                template: o.never().optional(),
                params: o.looseObject({
                    ..._,
                    view: o.literal("accountLinking")
                })
            }),
            f = o.object({
                type: o.literal("count"),
                label: o.literal("ledger.onboarding_syncing_visible")
            });
        n.d(t, {}, {
            a: function(e, t, n, a) {
                let o = !1;
                return {
                    requestModal: null == t || 0 === t.length ? void 0 : async (a, o) => {
                        var d;
                        let p;
                        if (o.aborted || e.get(s.f) !== t) return !1;
                        let {
                            params: _
                        } = E.parse(a), f = e.scope.id === c.a.id ? e.value : void 0, m = null != f && (0, l.j)(f) ? (p = (d = f).pathname === l.e && null != d.orbitId ? (0, l.f)(d.orbitId) : d.pathname, `${p}${d.search??""}`) : void 0, {
                            openPersonalFinanceAccountLinking: g
                        } = await (0, u.a)();
                        if (o.aborted || e.get(s.f) !== t) return !1;
                        let h = r()(_, ["view", "key", "ref"]),
                            {
                                trackingContext: T = {}
                            } = h;
                        return i.isObject(T) && (h.trackingContext = {
                            entryPoint: "widget",
                            entrypoint: "creditScore" === _.initialTab ? "conversation" : void 0,
                            ...T
                        }), await g(e, {
                            accountId: t,
                            accountLinkingFlowParams: h,
                            ...null != m && {
                                closeOnAccountsLinked: !0
                            },
                            returnTo: m ?? n,
                            signal: o
                        }) && !o.aborted && e.get(s.f) === t
                    },
                    sendInstrument: t => {
                        if (f.safeParse(t).success) {
                            o || null == a || (o = !0, (0, p.a)(e, a));
                            return
                        }(0, d.a)(e, t)
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
            let a = e.get(_.N, t);
            if (null == a) return;
            let r = (0, c.b)({
                mapping: a,
                current_node: n
            }).find(e => "user" === e.author.role);
            if (r?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(_.$, t)) return a[n]?.message
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
            o = n("HT1b"),
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
                    F = g.c.safeParse(O?._meta ?? O).data,
                    M = (e, a, r) => {
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
                    onSuggestionInteraction: M,
                    connect: async (e, r) => {
                        let u = e.plugin_id;
                        try {
                            let m = t.get(c.ac, L)?.latestTurnId,
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
                                    } = e, a = t(c.ac, L);
                                    return null != a && (a.latestTurnId !== m || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n) && !t(E.c))
                                }), await T.getLatestTurnId(n) !== m)) return {
                                pluginId: u,
                                status: "connected"
                            };
                            if (t.get(c.Hb, n)?.role === "follower" || !(0, d.b)(n)) return {
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
                        let m = t.get(c.ac, L)?.latestTurnId,
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
                                    } = e, a = t(c.ac, L);
                                    return !o(t) || null != a && (a.latestTurnId !== m || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n))
                                }), await (0, l.b)(t, a).getLatestTurnId(n) === m && o(t.get) && t.get(c.Hb, n)?.role !== "follower" && (0, d.b)(n)) try {
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
        var a = n("HT1b");
        let r = (0, n("Nwp9").b)(a.Rc, {}, {
            coerceStoredValue: e => a.Wi.parse(e)
        });
        n.d(t, {}, {
            a: function(e, t) {
                return (t ? a.Xi.options : a.Zi).filter(t => e.permissions?.[t] != null)
            },
            b: function(e, t, n) {
                let r, o = e.map(e => a.Yi[e].feature),
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
    LkdB: (function(e, t, n) {
        let a, r, o;
        n.d(t, {
            a: () => nc,
            b: () => nu
        });
        var i = n("ABep"),
            s = n("QosV"),
            l = n("Vjzf"),
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
            b = n("HT1b"),
            v = n("AuIy"),
            A = n("F6B1"),
            y = n("IhIa"),
            C = n("zd8w"),
            N = n("v7qY"),
            w = n("Wf1j"),
            R = n("jqIZ"),
            P = n("ASxG"),
            S = n("KJ1J");
        let D = {
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
            H = {
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
            U = P.array(P.object({
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
                tags: U
            })]);

        function j() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return P.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var V = n("StMt"),
            Y = n("tl5a"),
            q = n("URlz"),
            B = n("sM3V"),
            z = n("Ouov"),
            K = n("ZU27"),
            X = n("DiD0"),
            $ = n("SK3E"),
            Z = (n("Sbyb"), n("TSib")),
            J = n("ipIJ"),
            Q = n("uoRg"),
            ee = n("Y3OQ"),
            et = n("WBiY"),
            en = n("Ot7V"),
            ea = n("eT6w"),
            er = n("PeqE"),
            eo = n("ywSA"),
            ei = n("Cslg"),
            es = n("qZWE"),
            el = n("liTb"),
            ec = n("s5P0");

        function eu(e) {
            return (0, el.j)(e.value)
        }
        var ed = n("V5jR"),
            ep = n("eB3o"),
            e_ = n("ZG9f");
        a = (0, ep._)(Symbol.dispose);
        class eE {
            #e = new ef;
            #t;
            constructor(e, t) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new e_.a(this.#e, e.createRpcStub(t))
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
        r = (0, ep._)(Symbol.dispose);
        class ef {
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
        var em = n("WFY2"),
            eg = n("ReGc"),
            eh = n("rP0s");
        let eT = P.object({
            prompt: P.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eI = n("o62A"),
            eb = n("FgIX"),
            ev = n("g25Y"),
            eA = n("X6Vn"),
            ey = n("yI91"),
            eC = n("ripK"),
            eN = n("bnxy"),
            ew = n("GaA7");
        let eR = "ui/openai/find",
            eP = P.object({
                method: P.literal(eR),
                params: P.object({
                    enabled: P.boolean()
                })
            }),
            eS = P.object({
                method: P.literal("ui/notifications/openai/find"),
                params: P.object({
                    command: P.enum(["open", "next", "previous"])
                })
            });
        o = (0, ep._)(Symbol.dispose);
        class eD {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: r,
                    signal: o,
                    notify: i
                } = t, s = eP.safeParse(e);
                if (!s.success || o.aborted || ew.a?.mcpAppSandbox == null || null == i || null == r) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = ew.a.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: r
                }, async e => n.ownerDocument.activeElement === n && (await i({
                    method: eS.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [o]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var eG = n("ioMY"),
            ex = n("iIHp"),
            eL = n("v7ut"),
            eO = n("sF0J"),
            eF = n("QnVT"),
            eM = n("HwRo"),
            ek = n("sS8e"),
            eH = n("NJrC"),
            eU = n("LGZt"),
            eW = n("MefB"),
            ej = n("AVkf"),
            eV = n("geS6"),
            eY = n("Dgwo"),
            eq = n("a4MG");
        async function eB(e) {
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
            let l = (null == o ? await (0, eY.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eq.r, {
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
            if (null == l) throw (0, ek.c)(`MCP server not found: ${r}`, -32e3);
            return l
        }

        function ez(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var eK = n("DRR4"),
            eX = n("SRbQ"),
            e$ = n("TL6G");
        class eZ {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = e$.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(eJ(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (em.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (em.a.info("Updating app event subscriptions for conversation", {
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
                        em.a.info("Starting app event subscription", {
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
                        let t = (0, eX.a)(e, await (0, eY.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
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
                        }), em.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eX.e)(e)
                    }
                } catch (a) {
                    if (em.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: i.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(o) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(o), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(eJ({
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
                em.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(Y.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw em.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), em.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function eJ(e, t) {
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
        var eQ = n("whdX");
        let e0 = new Map;
        class e1 {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            setConversation(e) {
                return this.enqueue(async () => {
                    let t = this.params.conversationId;
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, eY.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = e$.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (em.a.debug("Received app resource update", {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw Object.assign((0, ek.c)("MCP resource subscriptions are unavailable", -32601), {
                        name: "McpResourceSubscriptionsUnavailableError"
                    });
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw em.a.warning("Failed to subscribe to app resource updates", {
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
                        throw em.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, r = (e0.get(a) ?? Promise.resolve()).then(e), o = r.then(() => void 0, () => void 0);
                return e0.set(a, o), o.then(() => {
                    e0.get(a) === o && e0.delete(a)
                }), r
            }
            getAuthorizedWatchPathOverride(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                return null == t && (0, eV.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                }), t
            }
            getResourceWatchPath(e) {
                let t = this.getAuthorizedWatchPathOverride(e) ?? (0, eQ.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == t) throw Object.assign((0, ek.c)("MCP resource is not subscribable", -32602), {
                    name: "McpResourceNotSubscribableError",
                    uri: e
                });
                return t
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? em.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (em.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, eY.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), em.a.info("Updated app resource subscriptions", {
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
        var e2 = n("xSzB"),
            e5 = n("kjQz"),
            e3 = n("ntKy"),
            e6 = n("OWtl"),
            e4 = n("Sd8U"),
            e8 = n("tSEg"),
            e7 = n("hZax"),
            e9 = n("jdxe"),
            te = n("XXJV"),
            tt = n("bIvi"),
            tn = n("SNez"),
            ta = n("DXan"),
            tr = n("nKJ6"),
            to = n("TCti"),
            ti = n("O9EX");
        let ts = (0, I.d)(e8.a, (e, t) => {
            let {
                get: n
            } = t;
            return "closed" !== n(ti.a, e)
        });

        function tl(e) {
            let t, n, a, r, o = (0, s.c)(22),
                {
                    panelTabId: i,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, I.y)(e8.a),
                p = (0, I.z)(to.b) ?? d,
                _ = ew.a?.mcpAppSandbox,
                E = (0, I.x)(null != _ && ts, i);
            o[0] !== p ? (t = (0, tr.getThreadBrowserConversationId)(p), o[0] = p, o[1] = t) : t = o[1];
            let f = t;
            o[2] !== i || o[3] !== p ? (n = () => {
                let e = p.get(te.f, i);
                null != i && null != e && (0, te.activateThreadPanelTab)(p, e, i)
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
                t.catch(tu);
                let n = d.watch(e => {
                    let {
                        get: n
                    } = e, a = n(ti.a, i);
                    t.setPresented("right" === a || "bottom" === a).catch(tc)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, o[5] = f, o[6] = E, o[7] = d, o[8] = i, o[9] = m, o[10] = l, o[11] = c, o[12] = u, o[13] = a) : a = o[13], o[14] !== f || o[15] !== E || o[16] !== d || o[17] !== i || o[18] !== l || o[19] !== c || o[20] !== u ? (r = [_, f, E, d, i, l, c, u], o[14] = f, o[15] = E, o[16] = d, o[17] = i, o[18] = l, o[19] = c, o[20] = u, o[21] = r) : r = o[21], (0, C.useEffect)(a, r), null
        }

        function tc(e) {
            em.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tu(e) {
            em.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var td = n("KMWy"),
            tp = n("ygJs"),
            t_ = n("kl6F");
        let tE = P.object({
                mode: P.enum(["inline", "fullscreen"])
            }),
            tf = P.object({
                canGoBack: P.boolean(),
                canGoForward: P.boolean()
            }).loose(),
            tm = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            tg = P.number().positive(),
            th = {
                canGoBack: !1,
                canGoForward: !1
            },
            tT = (0, I.v)(t_.a, e => null),
            tI = ["resources/subscribe", "resources/unsubscribe"],
            tb = ["openai/events/subscribe", "openai/events/unsubscribe"],
            tv = P.json(),
            tA = P.object({
                uri: P.string().min(1)
            }).loose(),
            ty = P.object({
                arguments: P.record(P.string(), tv).optional(),
                name: P.string().regex(/\S/),
                subscriptionId: P.uuid()
            }),
            tC = P.object({
                subscriptionId: P.uuid()
            });
        var tN = n("nlNF");

        function tw(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: r,
                    sandboxId: o
                } = e,
                i = (0, I.y)(e6.a),
                {
                    pathname: l,
                    search: c
                } = (0, R.Y)(),
                u = (0, R._)();
            return a[0] !== u || a[1] !== l || a[2] !== r || a[3] !== o || a[4] !== i || a[5] !== c ? (t = () => {
                let e;
                if (ew.a?.mcpAppSandbox == null || ![b.Sc, b.Tc, b.ed, "/plugins/:pluginId/app/:toolName"].some(e => (0, R.J)(e, l))) return;
                let t = (0, b.Gg)(r.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = i.get(tN.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = ew.a.mcpAppSandbox.registerHistoryTarget({
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
                                E = i.get(tN.k),
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
                        r(tN.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            _ = i.get(tN.k);
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
        var tR = n("uWA4");
        let tP = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tS = {
                insets: {
                    ...tP.insets,
                    top: 48
                }
            };

        function tD(e) {
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
                    [tR.a]: i
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

        function tG(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tx() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tL(e) {
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
        let tO = (0, I.j)(e6.a, e => {
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
        var tF = n("VwGH"),
            tM = n("OM8g"),
            tk = n("on57"),
            tH = n("WSFD"),
            tU = n("fm8Z"),
            tW = n("qbxq");
        let tj = P.union([m.b, P.object({
                target: P.enum(["active", "new"]).optional(),
                send: P.literal(!1)
            }).strict()]),
            tV = m.c.extend({
                _meta: m.c.shape._meta.unwrap().extend({
                    "openai/message": tj.optional()
                }).optional()
            });

        function tY(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !y.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw (0, ek.c)("Unsupported MCP app content", -32602)
        }

        function tq(e, t) {
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
        var tB = n("HPlV");
        let tz = (0, I.j)(e4.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, r = a.get(Z.v).find(t => t.id === e && "context" === t.kind);
                return r?.modelContextUpdateId == null ? null : {
                    updateId: r.modelContextUpdateId,
                    content: r.content?.length ? r.content : void 0,
                    structuredContent: r.structuredContent
                }
            }, {
                isEqual: T()
            })
        });
        var tK = n("slpy"),
            tX = n("Sm6l"),
            t$ = n("HOLv"),
            tZ = n("ByoF");

        function tJ(e) {
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
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(t$.a, {
                "aria-hidden": !1,
                asset: tZ.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== m || u[3] !== h || u[4] !== I || u[5] !== b ? (n = (0, i.jsx)(tX.a, {
                "aria-label": d,
                color: I,
                disabled: b,
                onClick: m,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = m, u[3] = h, u[4] = I, u[5] = b, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, i.jsx)(tK.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let v = _ ? T : "ghost",
                A = !_;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, i.jsx)(t$.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tZ.a
            }), u[10] = r) : r = u[10], u[11] !== f || u[12] !== g || u[13] !== h || u[14] !== v || u[15] !== A ? (o = (0, i.jsx)(tX.a, {
                "aria-label": f,
                color: v,
                disabled: A,
                onClick: g,
                radius: h,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = f, u[12] = g, u[13] = h, u[14] = v, u[15] = A, u[16] = o) : o = u[16], u[17] !== f || u[18] !== o ? (l = (0, i.jsx)(tK.a, {
                content: f,
                side: "bottom",
                children: o
            }), u[17] = f, u[18] = o, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, i.jsxs)(i.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tQ(e) {
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
                defaultMessage: "Back"
            }), u[0] = m, u[1] = t) : t = u[1];
            let g = t;
            u[2] !== m ? (n = m.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next"
            }), u[2] = m, u[3] = n) : n = u[3];
            let h = n;
            return u[4] !== d ? (a = (0, tk.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== E ? (r = e => {
                e.stopPropagation(), E()
            }, u[6] = E, u[7] = r) : r = u[7], u[8] !== f ? (o = e => {
                e.stopPropagation(), f()
            }, u[8] = f, u[9] = o) : o = u[9], u[10] !== g || u[11] !== p || u[12] !== _ || u[13] !== h || u[14] !== r || u[15] !== o ? (l = (0, i.jsx)(tJ, {
                backLabel: g,
                canGoBack: p,
                canGoForward: _,
                forwardLabel: h,
                onBack: r,
                onForward: o
            }), u[10] = g, u[11] = p, u[12] = _, u[13] = h, u[14] = r, u[15] = o, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, i.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: t0,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function t0(e) {
            return e.stopPropagation()
        }
        var t1 = n("oMYH"),
            t2 = n("Yshm"),
            t5 = n("EDsV"),
            t3 = n("MTYR"),
            t6 = n("Za0m"),
            t4 = n("IWEP");
        let t8 = P.preprocess(function(e, t) {
            let n = new WeakSet,
                a = P.record(P.string(), P.unknown()),
                r = (e, o) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: o,
                        message: "Cyclic tool arguments"
                    }), t4.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...o, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...o, ...e.path]
                            });
                            return t4.e
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

        function t7(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var t9 = n("Btes"),
            ne = n("ILnd");
        let nt = P.object({
            name: P.string().min(1),
            arguments: t8.optional(),
            _meta: c.b.shape._meta
        }).loose();
        var nn = n("U0IP"),
            na = n("PkQL");
        let nr = P.preprocess(ni, P.record(P.string(), P.json())),
            no = P.preprocess(ni, P.looseObject({
                ...l.e.shape.params.shape,
                content: P.array(na.f).optional()
            }));

        function ni(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let ns = P.object({
                linkToken: P.string().min(1),
                oauthStateId: P.string().min(1)
            }),
            nl = P.object({
                title: P.string().transform(e => e.trim().slice(0, 2e3)),
                favicon: P.string().max(8192).transform(e => {
                    let t = URL.parse(e);
                    return t?.protocol !== "https:" || t.username || t.password ? y.f.safeParse(e).success ? e : null : t.href
                }).catch(null)
            });

        function nc(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: o,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== o && o,
                d = void 0 === l || l,
                p = (0, I.y)(e8.a),
                _ = (0, I.x)(es.r, c);
            return r[0] !== p || r[1] !== c ? (t = () => {
                let e, t, n, a, r, o, i, s, l, u, d;
                return n = !1, a = !1, r = null, o = () => {
                    clearTimeout(t), t = void 0
                }, i = e => {
                    if (a = e, o(), a) {
                        r = null, (0, es.D)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == r && (r = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (em.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, es.D)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && i(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), o(), void 0 === (e = t) ? (a = !1, r = null, (0, es.D)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && i(a && !(0, tN.h)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(tN.c);
                    let n = t(es.r, c),
                        a = null == n ? null : t(es.h, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t(K.l.tabById$, (0, e9.b)(c)),
                        o = (0, tN.h)(p);
                    if (!r || !o) return void u(r ? null : void 0, o);
                    let i = a.inlineFrameAnchor,
                        s = () => u(i.getSnapshot(), o),
                        l = i.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), o()
                }
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, C.useEffect)(t, n), r[4] !== d || r[5] !== _ || r[6] !== u || r[7] !== c ? (a = null == _ ? null : (0, i.jsx)(nd, {
                sessionId: c,
                frameState: _,
                sourceMcpAppId: _.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), r[4] = d, r[5] = _, r[6] = u, r[7] = c, r[8] = a) : a = r[8], a
        }

        function nu(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(nc, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function nd(e) {
            let t, n, a, r, o, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: _,
                    frameState: E,
                    isAccessRevoked: f,
                    allowGlobalHost: m
                } = e,
                g = (0, I.y)(e8.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eM.b)(), d[0] = t) : t = d[0];
            let h = (0, e7.f)(t),
                T = (0, I.x)(tn.b, _),
                b = f || T,
                v = (0, I.x)(es.h, _),
                A = v?.content ?? null,
                y = A?.mcpAppHostAdapter?.retain;
            d[1] !== g || d[2] !== p ? (n = () => (0, t6.b)(g, p), a = [g, p], d[1] = g, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, C.useLayoutEffect)(n, a), d[5] !== y || d[6] !== g || d[7] !== _ ? (r = () => y?.(g, _), o = [y, g, _], d[5] = y, d[6] = g, d[7] = _, d[8] = r, d[9] = o) : (r = d[8], o = d[9]), (0, C.useLayoutEffect)(r, o);
            let N = (0, I.x)(q.c, A?.access ?? null);
            if (d[10] !== N || d[11] !== v || d[12] !== g || d[13] !== b || d[14] !== _ ? (l = () => {
                    null != v && (b || "changed" === N) && (em.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: b,
                            accessStatus: N
                        },
                        sensitive: {
                            mcpAppId: v.sessionId,
                            sourceMcpAppId: _
                        }
                    }), (0, es.z)(g, _))
                }, c = [_, v, g, b, N], d[10] = N, d[11] = v, d[12] = g, d[13] = b, d[14] = _, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, C.useLayoutEffect)(l, c), !h || b || E.isSuspended || nE(E.sandboxError) || null == v || null == A || "current" !== N) return null;
            let w = (0, eI.c)(A);
            if (w && (null == A.toolResult || null != A.toolCallStatus)) return null;
            let R = w ? np : n_;
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

        function np(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, I.y)(e8.a);
            return a[0] !== r ? (t = (e, t) => (0, e3.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, i.jsx)(n_, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function n_(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: r,
                conversationId: o,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: h,
                pluginId: y,
                fullSurface: k,
                modalOpen: U = !1,
                hostScroll: j = !1,
                hostDisplayModes: q,
                hostId: el,
                hostedInThreadScrollLayout: ep,
                access: e_,
                inheritHostBackground: ef = !1,
                installPlugin: eP,
                inlineFrameAnchor: eS,
                allowGlobalHost: eM,
                sessionId: eq,
                sourceMcpAppId: eX,
                mcpAppScope: e$,
                sourceName: eJ,
                permissionAppDisplayName: e0,
                mcpServerStatuses: e3,
                mcpAppHostAdapter: e7,
                getNewThreadDestination: tn,
                widgetStatePersistence: tr,
                plaidAccountId: ti,
                deepLink: ts,
                rightPanelLayoutTick: tc,
                resolveResourceWatchPath: tu,
                server: t_,
                toolIcon: tv,
                appIcon: tN,
                sidePanelTitle: tR,
                title: tj,
                globalSurface: tK = !1,
                toolArguments: tX,
                toolResult: t$,
                toolResultNotification: tZ,
                toolCallStatus: tJ,
                toolCallCancellationReason: t0,
                viewParamsOverride: t6,
                frameState: t4
            } = e, t8 = (0, I.y)(e8.a), na = (0, I.y)(e6.a), ni = (0, w.a)(), nc = (0, C.useSyncExternalStore)(eS.subscribe, eS.getSnapshot, () => null), nd = (0, C.useEffectEvent)(() => t8), np = (0, C.useEffectEvent)(() => e_.assertActive()), {
                csp: n_,
                fitWidth: nf,
                html: nm,
                sandboxOrigin: ng,
                serverOrigin: nh
            } = a, nT = a.prefersBorder && !e7?.hideFrameBorder, nI = (0, C.useEffectEvent)(() => y), nb = (0, C.useEffectEvent)(() => e0 ?? eJ), nv = (0, td.a)(a, ew.a?.mcpAppSandbox != null), nA = nv.join(";"), ny = "connectorId" in e_.serverIdentity ? e_.serverIdentity.connectorId : null, nC = null != t, nN = (0, C.useEffectEvent)(() => t?.get(Q.a)?.updatePrompt != null), nw = !nC || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nR = (0, I.x)(Y.d, el), nP = (0, I.x)(Y.kc, {
                hostId: el,
                threadId: o
            }), nS = null != nP && "notLoaded" !== nP.type, nD = !(0, S.f)(t_) && n_?.connectDomains.some(e => (0, eH.d)(new URL(e).hostname)) === !0, nG = (0, ta.a)(e_, r), nx = null != nh ? new URL(nh) : null, nL = e7?.sandboxFeatures, nO = nL?.join(";"), nF = ew.a?.mcpAppSandbox == null && (nL?.includes("local-network-access") === !0 || (0, eH.g)(n_) || nD && nx?.protocol === "https:" && (0, eH.d)(nx.hostname)), nM = (0, C.useEffectEvent)(() => {
                (0, es.D)(nd(), eq, {
                    sandboxGeneration: t4.sandboxGeneration + 1
                })
            }), nk = (0, R._)(), nH = t?.value.kind === "chatgpt" && null != t.value.conversationId && o === `chatgpt:${t.value.conversationId}`, nU = o.startsWith("chatgpt:") ? "chatgpt" : "codex", nW = (0, I.z)(t?.get(tz, eq) ?? null), nj = (0, C.useEffectEvent)(() => t?.get(tz, eq).get() ?? null), nV = (0, I.z)(K.l.activeTab$), nY = (0, I.z)(to.a), nq = (0, I.z)(eF.a), nB = nq["--color-background-primary"], {
                isWidgetReady: nz
            } = t4, nK = (0, es.e)(t4), nX = !k && "fullscreen" === nK, n$ = t4.displayMode, nZ = k && eM, nJ = (0, C.useRef)(!1), nQ = (0, C.useRef)(null), n0 = (0, C.useRef)(null), n1 = (0, C.useRef)(null), n2 = (0, C.useRef)(null), n5 = (0, I.x)(es.g, eq), n3 = (0, C.useRef)(null), n6 = (0, C.useRef)(null), n4 = e => {
                if (!(0, S.f)(t_)) return null;
                let t = t8.get(es.h, eX);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eV.d)({
                    appContext: e$.appContext,
                    invocationResourceUri: e$.invocationResourceUri,
                    originTool: e$.originTool,
                    originToolDefinition: e.tools[e$.originTool],
                    server: t_,
                    tools: ez(e)
                });
                t8.set(es.i, e => {
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
                let r = t8.get(es.h, eX)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [n8, n7] = (0, C.useState)(null), [n9, ae] = (0, C.useState)(null), [at, an] = (0, C.useState)(null), [aa, ar] = (0, C.useState)(!1), [ao, ai] = (0, C.useState)(null), [as, al] = (0, C.useState)(null), ac = as?.api ?? null, au = as?.widgetId ?? null, ad = (0, tt.a)(e => tu?.(e) ?? null), ap = (0, S.f)(t_) && (0, b.Kh)(nR, "mcpEventStream"), a_ = (0, C.useMemo)(() => new e1({
                scope: na,
                hostId: el,
                mcpAppId: eq,
                originResourceUri: e$.originResourceUri,
                resolveResourceWatchPath: ad,
                server: t_
            }), [na, el, eq, e$.originResourceUri, ad, t_]), aE = (0, C.useMemo)(() => new eZ({
                scope: na,
                hostId: el,
                server: t_
            }), [na, el, t_]), af = nX ? (0, e9.b)(eq) : e7?.panelTabId ?? null, am = (0, I.z)(to.b) ?? t8, ag = (0, I.w)(tT, eq), [ah, aT] = (0, C.useState)(th), aI = null != ny && tm.has(ny), ab = aI && null != ac && (ah.canGoBack || ah.canGoForward), {
                cancel: av,
                confirmation: aA,
                confirm: ay,
                request: aC
            } = (0, ex.a)(eG.a), aN = e7?.viewerHeader === !0, aw = e7?.forwardedRequestMethods, aR = aw?.join(";") || void 0, aP = JSON.stringify(e7?.experimentalCapabilities), aS = e7?.openFile, aD = (0, I.z)(e8.j), aG = tK && (0, S.f)(t_) && !aD && null != t && null != y && null != ny, ax = (0, I.x)(V.a, {
                name: "codex.browser"
            }), aL = !aD && ax.isCapable, aO = aL || nC && nw, aF = !aD && (void 0 === aS ? (0, b.yi)((0, eh.a)(na, el)) : null != aS), aM = null != e7, ak = e7?.expectedReadySignal, aH = e7?.pluginSuggestions != null, aU = !0 === e$.isVerifiedFirstParty, aW = e7?.displayMode === "modal", aj = (0, C.useEffectEvent)(() => e7), aV = e7?.onRequestClose != null || ep, aY = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, S.f)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e7,
                server: t_,
                connectorId: ny,
                widgetScope: e$
            }), aq = null != aY, aB = aY?.requestTargetedReply != null || e7?.setTargetedReply != null || e7?.requestTargetedReply != null, az = aq || e7?.showToast != null, aK = (0, C.useEffectEvent)(() => aY), aX = (0, C.useEffectEvent)(e => aY?.viewMode ?? e7?.displayMode ?? e), a$ = e7?.requestCheckout != null, aZ = e7?.openConversationOverlay != null, aJ = e7?.openPromptInput != null, aQ = e7?.autofill != null, a0 = e7?.openInApp != null, a1 = a0 && e7?.openInApp?.hideButton !== !0 && e7?.openInApp?.baseUrl != null && null !== t4.openInAppUrl, a2 = e7?.presentation != null, a5 = e7?.presentation?.requestFocusedObject != null, a3 = e7?.presentation?.requestCloseFocusedObject != null, a6 = e7?.presentation?.isSidebarOpen === !0, a4 = e7?.downloadBlob != null, a8 = e7?.triggerHaptic != null, a7 = e7?.files != null, a9 = e7?.share != null, re = e7?.requestConnectSheet != null, rt = e7?.requestReconnectConnector != null, rn = e7?.requestLinkToConnector != null, ra = e7?.isTombstone === !0, rr = (0, C.useEffectEvent)(() => (function(e, t) {
                let {
                    mcpAppId: n,
                    adapter: a,
                    server: r,
                    connectorId: o,
                    widgetScope: i
                } = t;
                if (!(0, S.f)(r) || o !== er.a || !("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts"))) return;
                if (!0 === i.isVerifiedFirstParty && a?.finance != null) return a.finance;
                if (!eu(e) || !0 !== i.resourceIdentityVerified) return;
                let s = e.get(es.r, n),
                    l = null == s ? void 0 : e.get(es.i).get(s.sourceMcpAppId);
                if (null == s || null == l) return;
                let {
                    access: c,
                    resource: u
                } = s.resourceSnapshot;
                if (!("local" !== c.context.hostId && c.context.hostId !== b.Xb || null == c.accountId || l.content.conversationId.startsWith("chatgpt:")) && T()(u, l.content.resource)) return c.assertActive(), (0, ec.a)(e, c.accountId, c.context.hostId === b.Xb ? (0, b.Xd)(l.content.conversationId) : (0, b.ce)(l.content.conversationId))
            })(t8, {
                mcpAppId: eq,
                adapter: e7,
                server: t_,
                connectorId: ny,
                widgetScope: e$
            })), ro = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: o
                } = t, {
                    originResourceUri: i
                } = r;
                if ((0, S.f)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === i || "internal://ads-manager-account-setup" === i || "internal://ads-manager-delivery" === i)) return {
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
                            } = H[i.label], r = i.payload;
                            if (!r[n]) return;
                            (0, x.a)(e, D, {
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
                            } = H[i.label],
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
            }(t8, {
                server: t_,
                connectorId: ny,
                widgetScope: e$,
                conversationId: o
            }), ri = (0, C.useEffectEvent)(() => ro), rs = null != ti && (0, S.f)(t_) && aM && ny === er.a, rl = (0, C.useMemo)(() => null != tX && "object" == typeof tX ? tX : null, [tX]), rc = (0, C.useMemo)(() => null == t$ ? null : (0, e2.i)({
                isCodexAppsServer: (0, S.f)(t_),
                toolResult: t$
            }), [t_, t$]), ru = (0, C.useMemo)(() => null == rc ? null : (0, e2.e)(rc), [rc]), rd = void 0 === t6 ? ru : t6, rp = (0, C.useEffectEvent)(() => rd), r_ = (0, C.useMemo)(() => null == rc ? null : (0, e2.f)(rc), [rc]), rE = (0, C.useMemo)(() => tZ ?? (0, e2.c)(rc, {
                preserveStructuredContentNull: e7?.preserveStructuredContentNull
            }), [e7?.preserveStructuredContentNull, tZ, rc]), rf = tJ ?? (rE?.isError === !0 ? "error" : void 0), rm = (0, C.useMemo)(() => null == rf ? r_ : {
                ...r_,
                status: rf
            }, [rf, r_]), rg = (0, C.useEffectEvent)(() => ({
                sourceMcpAppId: eX,
                toolInput: rl,
                toolOutput: ru,
                toolResponseMetadata: rm,
                toolStatus: rf,
                toolResult: rc,
                toolResultNotification: rE,
                toolCallCancellationReason: t0
            })), rh = (0, C.useEffectEvent)(e => null == eP || null != rf ? null : (0, eI.a)({
                scope: t8,
                conversationId: o,
                hostId: el,
                installPlugin: eP,
                mcpAppScope: e$,
                navigate: nk,
                access: e_,
                server: t_,
                sessionId: eq,
                sourceMcpAppId: eX,
                toolResult: e
            })), rT = null == ng ? void 0 : (0, t3.b)(ng, ni.locale), rI = e_.getSandboxPartition?.(a) ?? A.b, rb = null == rT ? null : (0, t3.a)(rT), rv = (0, C.useEffectEvent)(() => {
                if (null == rT) return null;
                let e = (0, A.i)(rT);
                return null == e ? null : {
                    csp: n_,
                    experimentalCapabilities: e7?.experimentalCapabilities,
                    html: nm,
                    locale: ni.locale,
                    sandboxOrigin: e,
                    sourceUrl: rT
                }
            }), rA = ao?.isConnected === !0 ? ao : null, ry = nc?.isConnected === !0 ? nc : null, rC = null != ry || null != rA, rN = (0, C.useEffectEvent)(() => rC ? {
                scope: am,
                tabId: af
            } : null), rw = !nX && !k && nc?.dataset.mcpAppInlineSurface === "card", rR = "iframe", rP = "function" == typeof n9?.moveBefore, rS = U && rP, rD = ry ?? (!nX && n9?.isConnected ? n9.parentElement : null), rG = rD?.closest("[data-mcp-app-scroll-host]"), rx = !nX && (!k && j || null != rG), rL = eM && !(k && aN) && !rx && (rP || !ep), rO = rL ? null : rD?.closest("[data-mcp-app-portal-target='true']") ?? (!rP && n9?.isConnected ? n9.parentElement : null), rF = rP || rL ? n9 : rO, rM = (0, C.useEffectEvent)(e => {
                let t = tG(e, k, nX ? "fullscreen" : "inline");
                return !k && "inline" === nK && nf && ry?.parentElement != null && (t.maxWidth = ry.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rk = (0, C.useEffectEvent)(() => {
                (0, ed.c)(nd(), {
                    hostId: el,
                    pluginId: y,
                    server: t_
                }, eq)
            }), rH = (0, C.useEffectEvent)(() => ({
                safe: {
                    connectorId: ny,
                    mcpAppId: eq,
                    sandboxId: rb,
                    initId: (0, A.g)(at?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: el,
                    server: t_
                }
            })), rU = (0, C.useEffectEvent)(e => {
                (0, x.a)(t8, u.o, {
                    attributionId: ny ?? void 0,
                    conversationId: "chatgpt" === nU ? o.slice(8) : void 0,
                    host: "chatgpt" === nU ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rW = (0, C.useEffectEvent)((e, t) => {
                if (nE(nd().get(es.r, eq)?.sandboxError)) return;
                let n = (0, eb.a)(t),
                    a = rH();
                (em.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nU,
                        retryCount: t4.sandboxGeneration,
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
                }), n2.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === t4.sandboxGeneration) ? (0, es.D)(nd(), eq, {
                    sandboxGeneration: 1
                }) : (0, es.D)(nd(), eq, {
                    isWidgetReady: !1,
                    sandboxError: n
                })
            }), rj = (0, C.useEffectEvent)(e => {
                let t = tg.safeParse(e);
                t.success && t8.get(es.r, eq)?.displayMode === "inline" && (0, es.D)(t8, eq, {
                    intrinsicHeight: t.data
                })
            }), rV = (0, C.useEffectEvent)(e => {
                let t = tg.safeParse(e);
                nf && t.success && (0, es.D)(t8, eq, {
                    intrinsicWidth: t.data
                })
            }), rY = (0, C.useEffectEvent)(e => {
                if (!aI) return;
                let t = tf.safeParse(e);
                t.success && aT({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rq = (0, C.useEffectEvent)(() => ep ? void(0, es.b)(t8, eq) : e7?.onRequestClose?.()), rB = (0, C.useEffectEvent)(async (e, n) => {
                if (e7?.openExternal != null && await e7.openExternal(e, n)) return;
                let a = ej.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === e$.isVerifiedFirstParty) return void(0, eW.a)(t8, a.data.href);
                    if ("popup" !== a.data.openMode && e7?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? t8, a.data.href, n)) return;
                    let e = (0, b.Gj)(a.data.href);
                    if (null != e) return void nk(e);
                    (0, en.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e7?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rz = (0, C.useEffectEvent)(async (e, t) => {
                if (!rs || null == ti) throw Error("Plaid Link is unavailable for this app");
                let n = ns.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, eo.a)();
                return a(t8, {
                    accountId: ti,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rK = (0, C.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: o,
                    accountId: i,
                    frameAccountId: s
                } = t, l = eu(e) ? e.get(es.r, n) : null, c = null == l ? void 0 : e.get(es.i).get(l.sourceMcpAppId), u = l?.resourceSnapshot.access.context.hostId !== "local" && l?.resourceSnapshot.access.context.hostId !== b.Xb || null == c || c.content.conversationId.startsWith("chatgpt:") ? void 0 : l.resourceSnapshot.access.accountId, d = i ?? u;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!o.aborted && (s ?? u) === d && e.get(ei.f) === d && await a(r, o) && !o.aborted && e.get(ei.f) === d) {
                    let t = e.get(es.r, n);
                    if (null == t) return;
                    (0, es.D)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(t8, {
                mcpAppId: eq,
                requestModal: rr()?.requestModal,
                payload: e,
                signal: t,
                accountId: ti,
                frameAccountId: n
            })), rX = (0, C.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: r,
                    showNavigationControls: o
                } = e;
                if (r?.displayMode === "modal") return !1 !== r.showModalCloseButton || o ? tS : tP;
                let i = "inline" === n && o ? tS : tP;
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
                hostAdapter: aj(),
                showNavigationControls: ab
            })), r$ = (0, C.useEffectEvent)(() => {
                let e = t8.get(es.r, eq) ?? t4;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? q
                }
            }), rZ = (0, C.useEffectEvent)(e => {
                let t = (0, es.f)(t8, eq, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...r$(),
                    safeAreaInsets: rX(t).insets
                }
            }), rJ = (0, C.useEffectEvent)(e => {
                let t = tE.safeParse(e),
                    n = t8.get(es.r, eq);
                if (t.success && (0, es.a)(n, t.data.mode)) {
                    let n = !k && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nX && n9?.style.setProperty("display", "none"), a2 && (0, es.D)(t8, eq, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, es.B)(t8, eq, a, "app_request"), null != ac && null != au) {
                        let e = {
                            displayMode: a,
                            isTombstone: aj()?.isTombstone === !0,
                            viewParams: rd,
                            widgetId: au
                        };
                        nQ.current = e, (0, ek.h)(ac.setWidgetView(e));
                        let t = null == n9 ? null : tD({
                            ...r$(),
                            containerDimensions: tG(n9, k, a),
                            locale: ni.locale,
                            deepLink: ts,
                            safeAreaInsets: rX(a).insets,
                            styleVariables: nq,
                            theme: tx(),
                            userAgent: tL(aj()?.device),
                            toolInfo: aj()?.toolInfo
                        });
                        n0.current = t, null != t && (0, ek.h)(ac.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: a
                    }
                }
                return em.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: eq,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (n ?? t4).displayMode
                }
            }), rQ = (0, C.useEffectEvent)(() => ts), r0 = (0, C.useEffectEvent)(() => t8.get(es.g, eq)), r1 = (0, C.useEffectEvent)(() => {
                var e;
                e = tN ?? void 0, null != t && (0, J.h)(t, eq, e)
            });
            (0, C.useEffect)(() => {
                r1()
            }, [eq, tN?.alt, tN?.knownAppId, tN?.logoDarkUrl, tN?.logoUrl]);
            let r2 = (0, C.useEffectEvent)(async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t8.get(es.r, eq)?.sourceMcpAppId !== eX) return;
                    let n = (null != tr || null == t$ ? nr.nullable() : nr).safeParse(e);
                    return n.success ? (null == tr && null == t$ && (0, es.D)(t8, eq, {
                        pendingEditSource: eX
                    }), t8.set(es.w, eq, n.data), tr?.save(n.data, t)) : void t8.set(es.w, eq, null)
                }),
                r5 = e => {
                    null != ac && (0, ek.h)(ac.navigate({
                        delta: e
                    }))
                },
                r3 = {
                    name: null != e7 ? e$.originResourceUri ?? e$.originTool : `${t_}.${e$.originTool}`,
                    attribution: "connectorId" in e_.serverIdentity ? e_.serverIdentity.connectorId : void 0
                },
                r6 = (0, C.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, et.getMcpAppSubmit)(t, () => {
                            e_.assertActive(), aj()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? r3 : {
                        ...r3,
                        visuallyHidden: !0
                    }, e, r)
                }),
                r4 = async function(e, t, n, a, r, o) {
                    let i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tB.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: o,
                        modelContextAttachments: i,
                        requestConfirmation: e => aC({
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
                }, r8 = (0, C.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, ek.c)("App messages are disabled for this view", c.r.MethodNotFound);
                    let r = (a = aK(), n.aborted || a && eT.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: o,
                        isVisible: i,
                        prompt: l,
                        title: u
                    } = (0, eO.c)(e), d = r6(n, i);
                    if (null == d) throw (0, ek.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                    let p = t.get(Z.v).filter(e => "context" === e.kind),
                        _ = crypto.randomUUID(),
                        E = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await r4({
                            source: "mcp_app",
                            sourceId: eq,
                            widgetSource: e$.widgetSource,
                            text: l,
                            structuredContent: o ?? (0, eO.b)(r0())
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
                    }, o), (0, J.b)(t, p)
                }), r7 = e => {
                    e.throwIfAborted(), e_.assertActive(), e7?.assertActive?.()
                }, r9 = async (e, t, n, a) => {
                    r7(t);
                    let r = null != e7 ? await e7.handleRequest(e, t, e$, n) : await a();
                    return r7(t), r
                }, oe = async (e, t, n) => {
                    let a = await r9({
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
                            } = e, c = await eB({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: o,
                                threadId: i
                            }), u = ez(c), d = n(c);
                            return {
                                ...(0, ek.a)(() => (0, eV.h)({
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
                                if (!(0, S.f)(e) || !t7(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            f = null == _.codexAppsResourceUri ? E : {
                                ...t7(E) ? E : {},
                                _codex_apps: {
                                    resource_uri: _.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, t9.a)({
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
                            if (r.startsWith("chatgpt:")) return (0, e2.i)({
                                isCodexAppsServer: (0, S.f)(u),
                                toolResult: await (0, ne.c)(t, i, u, _.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: f,
                                    requestOptions: {
                                        widget: {
                                            conversationId: r,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let o = await (0, eY.b)(n, i).callMcpTool({
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
                            return (0, e2.i)({
                                isCodexAppsServer: (0, S.f)(u),
                                toolResult: o
                            })
                        } catch (e) {
                            throw (0, ek.d)(e, "MCP tool call failed")
                        }
                    })({
                        appScope: na,
                        scope: t8,
                        chatGptMessageId: e$.chatGptMessageId,
                        conversationId: o,
                        getTrustedToolScope: n4,
                        hostId: el,
                        mcpAppId: eq,
                        mcpServerStatuses: e3,
                        access: e_,
                        server: t_,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, v.s)(a)?.isError === !0) {
                        let t = e2.g.safeParse(a).data;
                        em.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eq,
                                initId: (0, A.g)(at?.getAttribute("src") ?? void 0)
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
                }, ot = (0, C.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e4.b);
                    return oe((0, ek.g)(nt, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), on = (0, C.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e4.b),
                        r = c.W.safeParse(e);
                    if (!r.success) throw (0, ek.e)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? c.r.InvalidParams : c.r.InvalidRequest);
                    let i = t8.get(B.b, {
                            hostId: el,
                            conversationId: o
                        }) ?? void 0,
                        {
                            method: s,
                            params: u
                        } = r.data;
                    if (o.startsWith("chatgpt:") && tI.some(e => e === s)) throw (0, ek.c)("Resource subscriptions require a local Codex thread", c.r.MethodNotFound);
                    switch (s) {
                        case E.a: {
                            let {
                                path: e
                            } = (0, ek.g)(E.b, u, "Invalid MCP file open params");
                            if (!aF) throw (0, ek.c)("File opening is unavailable", c.r.MethodNotFound);
                            if (null != aS) return (0, x.a)(t8, d.CodexMcpExtensionAction, {
                                ...nG,
                                feature: "file_open",
                                action: "requested"
                            }), await aS(e, n), {};
                            if (!(0, b.Fh)(e) || !(0, b.Ih)(e)) throw (0, ek.c)("Cannot open this file path", c.r.InvalidParams);
                            return (0, x.a)(t8, d.CodexMcpExtensionAction, {
                                ...nG,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ea.openWorkspaceFile)({
                                scope: t8,
                                path: e,
                                cwd: null,
                                hostConfig: (0, eh.a)(na, el),
                                hostId: el,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return aw?.includes("ping") ? r9(r.data, n, a, async () => ({})) : {};
                        case ee.a:
                            if (!aG) throw (0, ek.c)("The plugin composer is unavailable", c.r.MethodNotFound);
                            if (navigator.userActivation?.isActive !== !0 || null == at || document.activeElement !== at) throw (0, ek.c)("Starting a plugin draft requires a user gesture", c.r.InvalidRequest);
                            return n.throwIfAborted(), aj()?.assertActive?.(), (0, ee.d)(t, y, ny), {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tV.safeParse(e);
                                if (!t.success) throw (0, ek.c)("Invalid MCP app message params", -32602);
                                let {
                                    content: n
                                } = t.data;
                                if (tY(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw (0, ek.c)("An MCP app message cannot be empty", -32602);
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(u);
                            n.throwIfAborted();
                            let a = e.options?.target ?? "active";
                            if ((0, x.a)(t8, d.CodexMcpExtensionAction, {
                                    ...nG,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, ek.c)("MCP app messages are disabled for this view", c.r.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, tW.e)(t) && null == (0, tW.b)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tq(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eJ,
                                    icon: tN,
                                    server: t_,
                                    widgetSource: e$.widgetSource
                                });
                                if (aj()?.assertActive?.(), "new" === e.options.target) {
                                    if (aD) throw (0, ek.c)("New drafts are unavailable in this view", c.r.MethodNotFound);
                                    (0, ee.b)(na, n)
                                } else {
                                    if (null == t) throw (0, ek.c)("The composer is unavailable", c.r.MethodNotFound);
                                    (0, ee.e)(t, n, "append")
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
                                for (let t of e) "text" === t.type && null == (0, tW.b)(t) ? a.push(t.text) : r.push(t);
                                let o = tq(r, t),
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
                                icon: tN,
                                server: t_,
                                sessionId: eq,
                                widgetSource: e$.widgetSource
                            }, ni), s = !1;
                            e.options?.target === "new" && null != rb && ew.a?.mcpAppSandbox != null && (r7(n), s = await ew.a.mcpAppSandbox.consumeUserGesture((0, ej.a)(rb, at)).catch(() => !1) === !0, r7(n));
                            let l = e.options?.target === "new" ? (0, tB.a)({
                                scope: na,
                                recipient: t,
                                getNewThreadDestination: tn,
                                globalEntrypointIdentity: "global" === nG.source ? {
                                    connectorId: nG.connectorId,
                                    pluginId: nG.pluginId
                                } : void 0,
                                canCreateCodexThreads: aL,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (aD) throw (0, ek.c)("New threads are unavailable in this view", c.r.MethodNotFound);
                                    r7(n)
                                },
                                sourceName: eJ,
                                toolOrigin: r3,
                                signal: n
                            }) : r6(n);
                            if (null == l) throw (0, ek.c)("MCP app messages require an available composer", c.r.MethodNotFound);
                            let p = t?.get(Z.v).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eq
                            }) ?? [];
                            return await r4(o, r, l, n, void 0, i, p), null != t && (0, J.b)(t, p), {}
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
                                        } = a, o = decodeURIComponent((0, eN.j)(new URL(r.uri).pathname)).trim();
                                        if (0 === o.length || o.length > 255 || "." === o || ".." === o || /[/\\:*?"<>|\p{Cc}]/u.test(o)) return;
                                        if ("blob" in r) {
                                            if (r.blob.length > 4 * Math.ceil(8388608 / 3)) return;
                                            t = (0, ey.a)(r.blob)
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
                                            }), (0, eA.f)(e, ev.ExternalLinkConfirmationDialog, {
                                                href: "",
                                                downloadFilename: o.name,
                                                initiator: "mcp_app_resource",
                                                signal: n,
                                                onDownload: () => {
                                                    if (!s && !n.aborted) try {
                                                        a(), (0, eC.a)(o.blob, o.name), i = !0
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
                            }(t8, (0, ek.g)(l.b.shape.params, u, "Invalid MCP file download params"), n, () => r7(n));
                        case "ui/update-model-context": {
                            if (null == t) throw (0, ek.c)("MCP model context requires an available composer", c.r.MethodNotFound);
                            let e = (0, ek.g)(no, u, "Invalid MCP model context params");
                            if (null != r6() && tY(e.content), nH && e.content?.some(e => "image" === e.type && !(0, b.Hi)({
                                    type: e.mimeType
                                }))) throw (0, ek.c)("Invalid MCP model context params", c.r.InvalidParams);
                            let n = null != tr || nH && null == t$;
                            if (n && t8.get(es.r, eq)?.sourceMcpAppId !== eX) throw (0, ek.c)("The widget source is no longer active", -32e3);
                            aj()?.onModelContextUpdate?.(e, eq), (0, X.a)(t);
                            let a = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    r = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: e$.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: t_,
                                    composerIcon: tN ?? void 0,
                                    sourceName: eJ,
                                    id: eq,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, J.g)(t, n), (0, eK.f)(t8, eq, t.get(Z.v).find(e => e.id === eq) ?? null)), r
                            })(e);
                            if ((0, x.a)(t8, d.CodexMcpExtensionAction, {
                                    ...nG,
                                    feature: "model_context",
                                    action: "updated"
                                }), n) {
                                let t = await r2(e, !0);
                                null != tr && (0, ek.b)(t)
                            }
                            return null == a ? {} : {
                                _meta: {
                                    [f.a]: {
                                        updateId: a
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return oe((0, ek.g)(nt, u, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, ek.g)(tA, u, "Invalid MCP resource read params");
                            if (r7(n), (0, x.a)(t8, d.CodexMcpExtensionAction, {
                                    ...nG,
                                    feature: "resource",
                                    action: "read"
                                }), e7?.readHostResource != null) {
                                r7(n);
                                let t = await e7.readHostResource(e, n);
                                if (r7(n), null != t) return t
                            }
                            return (0, ek.a)(() => {
                                (0, eV.a)({
                                    mcpAppScope: e$,
                                    server: t_,
                                    uri: e.uri
                                })
                            }), await r9({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, eQ.d)({
                                        scope: t8,
                                        appContext: e$.appContext,
                                        connectorId: (0, S.f)(t_) ? ny : null,
                                        hostId: el,
                                        mcpAppId: eq,
                                        originCallId: e$.originCallId ?? null,
                                        threadId: o,
                                        server: t_,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw (0, ek.d)(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, ek.g)(tA, u, "Invalid MCP resource subscribe params");
                            return r7(n), (0, x.a)(t8, d.CodexMcpExtensionAction, {
                                ...nG,
                                feature: "resource",
                                action: "subscribe"
                            }), await a_.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, ek.g)(tA, u, "Invalid MCP resource unsubscribe params");
                            return r7(n), (0, x.a)(t8, d.CodexMcpExtensionAction, {
                                ...nG,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await a_.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, ek.g)(ty, u, "Invalid MCP event subscribe params"),
                                t = t8.get(es.h, eX)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = n4(await eB({
                                    scope: t8,
                                    hostId: el,
                                    mcpServerStatuses: e3,
                                    server: t_,
                                    threadId: i
                                }))), null == n) throw (0, ek.c)("MCP event subscriptions require a trusted connector scope", c.r.InternalError);
                            return aE.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, ek.g)(tC, u, "Invalid MCP event unsubscribe params");
                            return aE.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return r9(r.data, n, a, async () => {
                                let e = await eB({
                                        scope: t8,
                                        hostId: el,
                                        mcpServerStatuses: (0, S.f)(t_) ? e3 : void 0,
                                        server: t_,
                                        threadId: i
                                    }),
                                    t = ez(e),
                                    n = n4(e);
                                return {
                                    tools: (0, ek.a)(() => (0, eV.e)({
                                        server: t_,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return r9(r.data, n, a, async () => (0, S.f)(t_) ? {
                                resources: []
                            } : {
                                resources: (await eB({
                                    scope: t8,
                                    hostId: el,
                                    server: t_,
                                    threadId: i,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return r9(r.data, n, a, async () => (0, S.f)(t_) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eB({
                                    scope: t8,
                                    hostId: el,
                                    server: t_,
                                    threadId: i,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return r9(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return r9(r.data, n, a, () => {
                                throw (0, ek.c)(`Unsupported MCP proxy method: ${s}`, c.r.MethodNotFound)
                            })
                    }
                }), oa = (0, C.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(963552)]).then(n.bind(n, "SEK8"));
                    r7(t), a(nd(), {
                        Frame: nu,
                        sourceMcpAppId: eX,
                        signal: t,
                        handleRequest: async (e, n) => c.Z.parse(await on(e, n ?? t))
                    }, e)
                });
            (0, C.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", ae(e), () => {
                    e.remove(), ae(t => t === e ? null : t), ar(!1)
                }
            }, [eq]), (0, C.useLayoutEffect)(() => {
                null != n9 && null != at && function(e) {
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
                    t.className = (0, tk.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", r && "z-50", !s && !a && !i && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tk.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", _ && "rounded-lg", i && c && "borderedCardSandbox-xKKhHG", s && "min-h-0 flex-1"), n.style.backgroundColor = !r && (o || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: n9,
                    sandboxElement: at,
                    fullSurface: k,
                    liftModal: rS,
                    inheritHostBackground: ef,
                    isCardInlineSurface: rw,
                    isFullScreen: nX,
                    isWidgetVisible: nz && null != nK,
                    prefersBorder: nT,
                    surfaceBackgroundColor: nB,
                    title: tj,
                    globalSurface: tK
                })
            }, [k, rS, n9, ef, rw, nX, nz, nK, nT, at, nB, tj, tK]), (0, C.useLayoutEffect)(() => {
                if (null == n9) return;
                if (null != ry) {
                    let e = ry.dataset.overlayOwner;
                    null == e ? n9.removeAttribute("data-overlay-owner") : n9.setAttribute("data-overlay-owner", e)
                }
                let e = nX ? rA : ry,
                    t = rL ? (0, $.a)() : rO;
                if (rS && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === n9.style.display;
                    n9.style.display = "none", e || em.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rH().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (n9.parentElement !== t && (n9.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(n9, null) : t.appendChild(n9), em.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rH().safe.mcpAppId,
                                showInModal: rS
                            }
                        })), aa || ar(!0), null == e) {
                        let e = "none" === n9.style.display;
                        n9.style.display = "none", e || em.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rH().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete n9.dataset.mcpAppParked,
                        function(e) {
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
                                }), null != s && (s.style.borderRadius = "");
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
                            let f = i ? (0, tM.b)(a) : void 0,
                                m = null,
                                g = l && !c ? new MutationObserver(() => T()) : null,
                                h = new ResizeObserver(() => T()),
                                T = () => {
                                    let e = u.currentCSSZoom ?? 1,
                                        t = (0, tH.a)(u, e),
                                        n = {
                                            ...t
                                        },
                                        d = null == p ? "" : (0, tH.b)(t, (0, tH.a)(p, e));
                                    a.style.position = _ ? "fixed" : "absolute";
                                    let E = null;
                                    if (_ ? c || i || (E = a.offsetParent) : E = r, null != E) {
                                        let t = (0, tH.a)(E, e);
                                        n.x -= t.x, n.y -= t.y
                                    }
                                    _ || (n.x += r.scrollLeft, n.y += r.scrollTop);
                                    let f = "";
                                    i || (f = l ? "43" : "1"), Object.assign(a.style, {
                                        ...(0, tH.d)(n, e / (r.currentCSSZoom ?? 1)),
                                        clipPath: d,
                                        display: "",
                                        zIndex: f
                                    });
                                    let h = o || l ? (0, tH.c)(u) : null;
                                    if (a.style.borderRadius = h?.join(" ") ?? "", null != s)
                                        if (null == h) s.style.borderRadius = "";
                                        else {
                                            let e = getComputedStyle(a),
                                                t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                                n = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                            s.style.borderRadius = [t, n].map(e => h.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                                        } null != g && E !== m && (g.disconnect(), m = E, null != E && g.observe(E, {
                                        attributeFilter: ["class", "style"],
                                        attributes: !0
                                    }))
                                };
                            h.observe(r), null != p && h.observe(p);
                            let I = e => {
                                e.target instanceof Element && e.target !== r && e.target.contains(u) && T()
                            };
                            if (E) {
                                tp.c.set(a, u), h.observe(u);
                                let e = u.closest("[data-turn-key]");
                                null == e || u.hidden || h.observe(e), r.addEventListener("scroll", I, !0)
                            }
                            let b = (0, tF.b)(u, a, T, E ? {
                                    ancestorScroll: !1,
                                    ancestorResize: !1,
                                    elementResize: !1
                                } : void 0),
                                v = (0, tU.a)({
                                    update: T,
                                    motionValues: [d]
                                });
                            return () => {
                                f?.(), v.disconnect(), b(), E && (tp.c.delete(a), r.removeEventListener("scroll", I, !0)), h.disconnect(), g?.disconnect()
                            }
                        }({
                            sessionId: eq,
                            sharesScrollHost: rG?.contains(t) === !0,
                            frameElement: n9,
                            frameContainer: t,
                            fullSurface: k,
                            modalOpen: rS,
                            sandboxElement: at,
                            isFullScreen: nX,
                            isInGlobalHost: rL,
                            anchorElement: e,
                            rightPanelLayoutTick: tc
                        })
                };
                return k || nX || rS || rL || !ep || null == e || e.hidden || "true" !== n9.dataset.mcpAppParked ? n() : (0, tp.a)(e, n)
            }, [eq, n9, k, rS, ep, rG, ry, nX, rL, aa, tc, at, rA, rO]);
            let or = e7?.autoFocus === !0;
            (0, C.useEffect)(() => {
                or && nz && null != ry && at?.focus()
            }, [or, nz, ry, at]), (0, C.useLayoutEffect)(() => (nJ.current = !1, () => {
                nJ.current = !0
            }), [eq, t8]);
            let oo = (0, C.useEffectEvent)(async () => {
                    try {
                        if (e7?.assertActive?.(), !a1) return;
                        let e = t4.openInAppUrl ?? P.string().nullable().parse(await ac?.getCurrentPath?.(void 0));
                        if (e7?.assertActive?.(), null == e) return;
                        let t = e7?.openInApp?.validateUrl(null == t4.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, en.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                oi = (0, C.useEffectEvent)(e => {
                    let t = t8.get(K.l.tabs$).some(e => e.tabId === (0, e9.b)(eq));
                    (0, e9.c)(t8, {
                        source: {
                            hostId: el,
                            server: t_,
                            connectorId: ny ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tN,
                        toolIcon: tv,
                        mcpAppId: eq,
                        onExitFullScreen: e,
                        onPanelElementChange: ai,
                        title: t4.displayModeTitle ?? tR,
                        openInAppName: e7?.openInApp?.appName,
                        onOpenInApp: a1 ? () => {
                            oo()
                        } : void 0
                    })
                }),
                os = (0, C.useEffectEvent)(() => {
                    let e = t8.get(es.r, eq);
                    !nJ.current && e?.isOpen && "fullscreen" === e.displayMode && (0, es.c)(t8, eq)
                }),
                ol = (0, C.useEffectEvent)(e => {
                    let t = aj()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nG);
                    else {
                        let t = P.object({
                            type: P.literal("interaction"),
                            label: P.string()
                        }).safeParse(e);
                        t.success && (0, x.a)(t8, u.l, {
                            ...nG,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, C.useLayoutEffect)(() => {
                nX ? oi(os) : (0, e9.a)(t8, eq)
            }, [nX, eq, t8, tN?.alt, tN?.knownAppId, tN?.logoDarkUrl, tN?.logoUrl, tv?.logoUrl, tv?.logoDarkUrl, tR, t4.displayModeTitle, a1, e7?.openInApp?.appName]), (0, C.useLayoutEffect)(() => {
                if (null != af) return am.watch(e => {
                    let {
                        get: t
                    } = e, n = t(te.f, af);
                    null != n && (0, te.getThreadPanelTabController)(n).updateTab(am, af, {
                        documentLabel$: ag
                    })
                })
            }, [ag, af, am]);
            let oc = (0, C.useEffectEvent)(() => {
                    let e = nX ? rA : ry;
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
                ou = null != n9 && aa && null != rF && null != rb && null != rI,
                od = (0, C.useEffectEvent)(e => {
                    let t;
                    if (!ou) return;
                    let n = e5.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: eq,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    n2.current = n, n.mark("surface_mcp_app"), (0, es.D)(nd(), eq, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), aT(th), n3.current = null, n6.current = null;
                    let r = rv();
                    if (null == r) return void rW("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let {
                        frameFeatures: o,
                        iframeAllow: i
                    } = (0, td.b)(nv, nL, nF), u = (0, eU.a)(rR, rb, rI);
                    u instanceof HTMLIFrameElement && (u.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), u.allow = i, u.allowFullscreen = !0), u.classList.add("pointer-events-none", "opacity-0"), n9.appendChild(u), an(u), n.mark("rendered");
                    let d = new AbortController,
                        T = !1,
                        I = new eD,
                        v = null == s ? null : new eE(s, {
                            getPanelContext: rN,
                            renderControl(e, t) {
                                d.signal.aborted || n7(n => null != t ? {
                                    owner: e,
                                    control: t
                                } : n?.owner === e ? null : n)
                            }
                        }),
                        y = null,
                        C = crypto.randomUUID(),
                        N = r0(),
                        w = rp(),
                        {
                            sourceMcpAppId: R,
                            toolInput: S,
                            toolOutput: D,
                            toolResponseMetadata: G,
                            toolResult: L,
                            toolStatus: O,
                            toolResultNotification: F,
                            toolCallCancellationReason: M
                        } = rg(),
                        k = new nn.b(nd(), R, e => {
                            rB({
                                href: e
                            }, d.signal).catch(e => {
                                d.signal.aborted || (0, eb.d)(e, rH())
                            })
                        });
                    n3.current = null == L || null == D ? null : {
                        widgetId: C,
                        widgetState: N,
                        sourceMcpAppId: R,
                        toolInput: S,
                        toolOutput: D,
                        toolResponseMetadata: G,
                        toolStatus: O,
                        toolResult: F,
                        toolCallCancellationReason: M
                    };
                    let H = aH ? {
                            requestConnectPlugin: async e => aj()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: t2.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aj()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aj()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aj()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        U = null == L ? null : H ?? rh(L),
                        W = null == U ? null : {
                            ...U,
                            requestDeclinePluginSuggestions: H?.requestDeclinePluginSuggestions ?? (null == U.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = rg().toolResult,
                                    t = null == e ? void 0 : rh(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await ew.a?.mcpAppSandbox?.consumeUserGesture((0, ej.a)(rb, u)).catch(() => !1) || d.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        j = () => {
                            let e = aj()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        V = {
                            ...W,
                            downloadBlob: a4 ? e => aj()?.downloadBlob?.(e, d.signal) : void 0,
                            triggerHaptic: a8 ? e => aj()?.triggerHaptic?.(e, d.signal) : void 0,
                            requestCheckout: a$ ? async e => {
                                d.signal.throwIfAborted();
                                let t = aj();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, d.signal)
                            } : void 0,
                            requestModal: async e => {
                                d.signal.aborted || (aq ? await aK()?.requestModal(e) : null != rr() && (aj()?.requestModal == null || P.object({
                                    params: P.object({
                                        view: P.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rK(e, d.signal, ti) : aj()?.requestModal != null ? await aj()?.requestModal?.(e, d.signal) : await oa(e, d.signal))
                            },
                            uploadFile: a7 ? (e, t) => j().uploadFile(e, t, d.signal) : void 0,
                            getFileDownloadUrl: a7 ? e => j().getFileDownloadUrl(e, d.signal) : void 0,
                            getFileMetadata: a7 ? e => j().getFileMetadata(e, d.signal) : void 0,
                            selectFiles: a7 ? () => j().selectFiles(d.signal) : void 0,
                            share: a9 ? async e => {
                                d.signal.throwIfAborted(), await aj()?.share?.(e, d.signal)
                            } : void 0,
                            requestLinkToConnector: aq || rn ? async e => d.signal.aborted ? {
                                didConnect: !1
                            } : await (aK()?.requestLinkToConnector ?? aj()?.requestLinkToConnector)?.(e, d.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: az ? e => {
                                d.signal.aborted || (aK()?.showToast ?? aj()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aW || aq && aV || a2 ? () => {
                                d.signal.aborted || aj()?.allowsInteractiveDismissal === !1 || (aW || aq || aj()?.displayMode != null ? rq() : rJ({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: (e, t) => {
                                let n = AbortSignal.any([t, d.signal]),
                                    a = y?.notifyMcpAppsMcpNotification;
                                if (aN && null != a) {
                                    let t = k.handleRequest(e, d.signal, e => (0, ek.h)(a(e)));
                                    if (null != t) return t
                                }
                                let r = I.handleRequest(e, {
                                    sandboxElement: u,
                                    sandboxId: rb,
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
                                        of o.data.params.entries) em.a[t](n, {
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
                                return i.success && null != v ? v.handleRequest(i.data.params) : on(e, n).catch(t => {
                                    if (!n.aborted) {
                                        let n = rH();
                                        em.a.warning("App request failed", {
                                            safe: {
                                                ...(0, eb.b)(t),
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
                            callTool: (e, t) => ot(e, t, d.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!d.signal.aborted) {
                                    if (eb.h.safeParse(e).success) return void(0, eb.d)(e, rH());
                                    rW("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rj,
                            notifyIntrinsicWidth: rV,
                            notifyTabMetadata: e => {
                                let t = nl.safeParse(e);
                                t.success && !d.signal.aborted && ag.set(t.data)
                            },
                            notifyNavigation: e => {
                                d.signal.aborted || rY(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                d.signal.aborted || aj()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rB(e, d.signal),
                            openPlaidLink: rs ? e => rz(e, d.signal) : void 0,
                            initializeMcpApp: e => {
                                if (d.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rZ(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rW("configuration", e), e
                                }
                            },
                            requestClose: aV ? rq : void 0,
                            requestDisplayMode: rJ,
                            openConversationOverlay: aZ ? async e => {
                                d.signal.throwIfAborted(), await aj()?.openConversationOverlay?.(e, d.signal)
                            } : void 0,
                            notifyAutofillCandidates: aQ ? e => {
                                d.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: aJ ? e => {
                                d.signal.throwIfAborted();
                                let t = aj()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, u, d.signal)
                            } : void 0,
                            setOpenInAppUrl: a0 ? e => {
                                d.signal.throwIfAborted();
                                let {
                                    href: t
                                } = P.object({
                                    href: P.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, es.D)(nd(), eq, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aj()?.openInApp?.validateUrl(t);
                                null != n && (0, es.D)(nd(), eq, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: a5 ? async e => {
                                d.signal.throwIfAborted(), await aj()?.presentation?.requestFocusedObject?.(e, d.signal)
                            } : void 0,
                            requestCloseFocusedObject: a3 ? async () => {
                                d.signal.throwIfAborted(), await aj()?.presentation?.requestCloseFocusedObject?.(d.signal)
                            } : void 0,
                            requestTargetedReply: aB ? async e => {
                                if (d.signal.aborted) return;
                                let t = aK()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aj()?.setTargetedReply;
                                if (null != n) return void n(e, d.signal);
                                let a = aj()?.requestTargetedReply;
                                null != a && await (0, eG.b)(e, a, aC, d.signal)
                            } : void 0,
                            requestReconnectConnector: rt ? async () => {
                                let e = aj()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(d.signal)
                            } : void 0,
                            requestConnectSheet: re ? e => {
                                let t = aj()?.requestConnectSheet;
                                if (null != t) return t(e, d.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => r8(e, d.signal),
                            sendInstrument: e => {
                                if (!d.signal.aborted) {
                                    if (aU || null != W) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, x.a)(nd(), t.messageType, t.payload)
                                    }
                                    eb.f.safeParse(e).success && ((0, eb.d)(e, rH()), rU("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), W?.sendInstrument(e);
                                    let t = rr() ?? ri();
                                    t?.sendInstrument(e), (null == t && null == W || P.object({
                                        type: P.literal("interaction")
                                    }).safeParse(e).success) && ol(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!d.signal.aborted) return r2(t, P.object({
                                    waitForPersistence: P.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        Y = (0, ej.b)({
                            hostApiHandlers: V,
                            assertActive: () => {
                                d.signal.throwIfAborted(), np(), aj()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: rb,
                            signal: d.signal,
                            sourceUrl: r.sourceUrl,
                            webview: u
                        }),
                        q = (0, A.g)(u.getAttribute("src") ?? void 0),
                        B = rH();
                    em.a.info("Starting app sandbox", {
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
                        rW("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), X(), K()
                    }, 5e4);

                    function K() {
                        clearTimeout(z), e()
                    }

                    function X() {
                        d.signal.aborted || (clearTimeout(z), d.abort(), n7(null), ag.set(null), av(), n2.current === n && (n2.current = null), n.isRecording() && n.abort("navigation_away"), I[Symbol.dispose](), k[Symbol.dispose](), v?.[Symbol.dispose](), n3.current = null, n6.current = null, nQ.current = null, n0.current = null, n1.current = null, (0, es.D)(nd(), eq, {
                            isWidgetReady: !1
                        }), al(null), aT(th), null != y && (0, ek.h)(y.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), u.remove(), u instanceof HTMLIFrameElement || u.destroy?.(), em.a.info("Removed app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), an(e => e === u ? null : e))
                    }
                    return Y.then(async e => {
                        if (d.signal.aborted) return;
                        if (ew.a?.mcpAppSandbox != null) {
                            if (null == q) throw Error("MCP app sandbox initialization ID is missing");
                            await (0, t1.b)({
                                scope: na,
                                request: {
                                    identity: e_.serverIdentity,
                                    pluginId: nI() ?? void 0,
                                    permissions: nv,
                                    initId: q,
                                    sandboxId: rb
                                },
                                origin: r.sandboxOrigin,
                                appName: nb(),
                                signal: d.signal,
                                onReload: nM
                            })
                        }
                        d.signal.throwIfAborted(), n.mark("sandbox_ready"), em.a.info("Connected app sandbox", {
                            safe: {
                                initId: q
                            }
                        }), y = e;
                        let i = e.notifyMcpAppsMcpNotification,
                            l = ew.a?.mcpAppSandbox != null && null != i;
                        null != i && v?.setNotificationSender(e => (0, ek.h)(i(e))), null != e.applyAutofillCandidate && (t = await aj()?.autofill?.(e.applyAutofillCandidate, d.signal), d.signal.throwIfAborted()), al({
                            api: e,
                            widgetId: C
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: u
                        } = r$(), p = tx(), {
                            containerDimensions: I
                        } = rM(n9), A = tL(aj()?.device), R = nd().get(eF.a), P = R["--color-background-primary"], x = rX(c), L = {
                            "openai/viewer-header": aN && null != i,
                            "openai/viewer-document-controls": aN && null != i,
                            ...tD({
                                availableDisplayModes: u,
                                containerDimensions: I,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nj(),
                                deepLink: rQ(),
                                safeAreaInsets: x.insets,
                                styleVariables: R,
                                theme: p,
                                userAgent: A,
                                toolInfo: aj()?.toolInfo
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
                            ...aO ? {
                                [m.a]: {
                                    draft: nN() ? {} : void 0
                                }
                            } : {},
                            "openai/skillsDeepLinks": {},
                            ...r.experimentalCapabilities,
                            ...aG ? {
                                [ee.a]: {}
                            } : {},
                            ...aF ? {
                                "openai/files": {}
                            } : {}
                        };
                        e.supportsWidgetTextureReceiver ? F[g.b] = {} : delete F[g.b];
                        let M = nC ? {} : void 0;
                        aO && (M = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == v && rk(), em.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: q
                            }
                        }), T = !0;
                        let k = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != ak,
                                expectedReadySignal: ak,
                                csp: O,
                                displayMode: aX(c),
                                features: o,
                                subjectId: aj()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nw,
                                html: r.html,
                                isFirstParty: aU || null != W || rt,
                                isSidebarOpen: aj()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aj()?.isTombstone === !0,
                                maxHeight: I.maxHeight,
                                maxWidth: I.maxWidth,
                                measureWidth: !0 === nf,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [eR] : [], ...aN && null != i ? [nn.a] : [], ...aO || !nC ? ["ui/message"] : [], ...aR?.split(";") ?? [], ...aG ? [ee.a] : [], ...aF ? [E.a] : [], ...null == v || null == i ? [] : [_.c], ...null == h ? [] : [_.e], ...null == i ? [] : [...tI, ...ap && !aM ? tb : []]],
                                    hostCapabilities: {
                                        downloadFile: {},
                                        experimental: F,
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: M,
                                        updateModelContext: nC ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: {
                                            permissions: Object.fromEntries(b.Zi.map(e => [e, o.includes(b.Yi[e].feature) ? {} : void 0])),
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
                                        version: nd().get(eg.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tK
                                },
                                safeArea: x,
                                theme: p,
                                toolInput: S,
                                toolOutput: D,
                                toolResponseMetadata: G,
                                userAgent: A,
                                viewParams: w,
                                widgetId: C,
                                widgetState: N
                            }),
                            H = !1;
                        for await (let t of k) {
                            let a = nd().get(es.r, eq)?.sandboxError;
                            if (d.signal.aborted || nE(a)) break;
                            if (eb.e.safeParse(t).success) return;
                            eb.f.safeParse(t).success && ((0, eb.d)(t, rH()), rU("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = eb.g.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new t5.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (H || !ej.d.safeParse(t).success) continue;
                            H = !0, K();
                            let {
                                displayMode: o,
                                availableDisplayModes: i
                            } = r$(), s = {
                                ...L,
                                displayMode: o,
                                availableDisplayModes: [...i]
                            };
                            (0, es.D)(nd(), eq, {
                                isWidgetReady: !0
                            }), (0, ek.h)(e.setWidgetView({
                                displayMode: aX(o),
                                isTombstone: aj()?.isTombstone === !0,
                                viewParams: w,
                                widgetId: C
                            })), (0, ek.h)(e.setTheme({
                                theme: p
                            })), (0, ek.h)(e.setSafeArea({
                                safeArea: x
                            }));
                            let l = {
                                isSidebarOpen: aj()?.presentation?.isSidebarOpen === !0,
                                maxHeight: I.maxHeight,
                                maxWidth: I.maxWidth,
                                surfaceBackgroundColor: P
                            };
                            n1.current = l, (0, ek.h)(e.setAdditionalGlobals({
                                additionalGlobals: l
                            })), (0, ek.h)(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), em.a.info("Started app widget", {
                                safe: {
                                    displayMode: o,
                                    initId: q
                                }
                            }), n.end()
                        }
                        if (!H && !d.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        d.signal.aborted || (T && rU("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rW(null == y ? "handshake" : "widget", e)), X()
                    }).finally(() => {
                        K()
                    }), X
                });
            (0, C.useLayoutEffect)(() => {
                if (ou) return nd().get(tO, void 0)(od, e => rW("handshake", e), oc)
            }, [na, ou, nC, nw, nF, nA, nO, a4, a8, av, aF, aO, aG, rs, aV, q, null, el, nU, n9, k, j, s, h, aM, nf, aH, a$, a9, a7, re, rt, rn, aW, az, aq, aB, a2, a0, aZ, aJ, aQ, a5, a3, aU, aN, aR, ak, a.requiresMcpInitialization, ti, aa, eq, rT, aC, rb, rF, rI, rR, t_, ap, aP, tK]), (0, C.useLayoutEffect)(() => {
                a_.setConversation(o).catch(e => {
                    em.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: o,
                            mcpAppId: eq
                        },
                        sensitive: {
                            error: e,
                            hostId: el
                        }
                    })
                })
            }, [o, el, a_, eq]), (0, C.useLayoutEffect)(() => {
                aE.setConversation(o, ap && nS).catch(e => {
                    em.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [o, aE, nS, ap]), (0, C.useLayoutEffect)(() => {
                let e = ac?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = aE.connectNotificationSink(e);
                return () => {
                    t(), aE.clear().catch(e => {
                        em.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [aE, ac]), (0, C.useLayoutEffect)(() => {
                let e = ac?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = a_.connectNotificationSink(t => (0, ek.h)(e(t)));
                return () => {
                    t(), a_.clear().catch(e => {
                        em.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [a_, ac]), (0, C.useEffect)(() => {
                if (!nz || null == ac || null == au) return;
                let e = {
                        widgetId: au,
                        sourceMcpAppId: eX,
                        toolInput: rl,
                        toolOutput: ru,
                        toolResponseMetadata: rm,
                        toolStatus: rf,
                        toolCallCancellationReason: t0,
                        toolResult: rE
                    },
                    t = {
                        ...e,
                        widgetState: n5
                    };
                T()(n3.current, t) || (n3.current = t, (0, ek.h)(ac.setWidgetData({
                    toolInput: rl,
                    toolOutput: ru,
                    toolResponseMetadata: rm,
                    widgetId: au,
                    widgetState: n5
                })));
                let n = n6.current?.widgetId === au ? n6.current : null;
                if (T()(n, e)) return;
                n6.current = e;
                let a = n?.sourceMcpAppId !== eX;
                null != rl && (a || !T()(n?.toolInput, rl)) && (0, ek.h)(ac.notifyMcpAppsToolInput({
                    arguments: rl
                })), "cancelled" === rf ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== t0) && (0, ek.h)(ac.notifyMcpAppsToolCancelled({
                    reason: t0
                })) : null == rE || !a && T()(n?.toolResult, e.toolResult) && n?.toolStatus === rf && T()(n?.toolInput, rl) && T()(n?.toolResponseMetadata, rm) || (0, ek.h)(ac.notifyMcpAppsToolResult({
                    ...rE,
                    isError: "error" === rf || rE.isError,
                    _meta: "error" === rf ? {
                        ...rE._meta,
                        status: "error"
                    } : rE._meta
                }))
            }, [nz, rE, ac, eX, rl, ru, rm, rf, t0, au, n5]), (0, C.useEffect)(() => {
                nz && null != ac && (0, ek.h)(ac.notifyMcpAppsHostContext({
                    hostContext: {
                        [f.a]: nW
                    }
                }))
            }, [nz, nW, ac]), (0, C.useEffect)(() => {
                if (nz && null != ac && null != n9) return s?.observeHostContext?.(t8, n9, e => {
                    (0, ek.h)(ac.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, n9, nz, ac, t8]), (0, C.useEffect)(() => {
                if (null == n9 || !rC || null == ac || null == au || nX && null == rA) return;
                let e = rX(n$);
                (0, ek.h)(ac.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aX(n$),
                    isTombstone: aj()?.isTombstone === !0,
                    viewParams: rd,
                    widgetId: au
                };
                return T()(nQ.current, t) || (nQ.current = t, (0, ek.h)(ac.setWidgetView(t))),
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
                        frameElement: n9,
                        inlineAnchor: ry,
                        fitWidth: nf,
                        onLayout: () => {
                            if ("true" === n9.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rM(n9), n = {
                                isSidebarOpen: aj()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rS ? "transparent" : nB
                            };
                            T()(n1.current, n) || (n1.current = n, (0, ek.h)(ac.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tD({
                                availableDisplayModes: t4.availableDisplayModes ?? q,
                                containerDimensions: t,
                                displayMode: n$,
                                locale: ni.locale,
                                deepLink: ts,
                                safeAreaInsets: e.insets,
                                styleVariables: nq,
                                theme: tx(),
                                userAgent: tL(aj()?.device),
                                toolInfo: aj()?.toolInfo
                            });
                            T()(n0.current, a) || (n0.current?.theme !== a.theme && (0, ek.h)(ac.setTheme({
                                theme: a.theme
                            })), n0.current = a, (0, ek.h)(ac.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [n9, nf, nZ, k, j, ry, ni.locale, nq, q, t4.availableDisplayModes, rC, nX, ra, a6, rS, e7?.displayMode, e7?.showModalCloseButton, ab, ts, nY, ac, rA, nB, tK, rd, au, n$]);
            let op = ab && !nX,
                o_ = ab && nX && nV?.tabId === (0, e9.b)(eq);
            return (0, i.jsxs)(i.Fragment, {
                children: [n8 && n9 && rC && nz ? (0, N.createPortal)((0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                    children: n8.control
                }), n9) : null, k && rC && nz && null != at && null != rb ? (0, i.jsx)(tw, {
                    sandboxElement: at,
                    sandboxId: rb
                }) : null, nz && null != at && null != rb ? (0, i.jsx)(tl, {
                    panelTabId: af,
                    sandboxElement: at,
                    sandboxId: rb,
                    title: tj
                }) : null, null != aA && rC ? (0, i.jsx)(eL.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...aA,
                        onCancel: av,
                        onConfirm: ay
                    }
                }) : null, o_ ? (0, i.jsx)(z.a.RightPanelTabListBefore, {
                    children: (0, i.jsx)(tQ, {
                        canGoBack: ah.canGoBack,
                        canGoForward: ah.canGoForward,
                        className: "h-full px-1",
                        onBack: () => r5(-1),
                        onForward: () => r5(1)
                    })
                }) : null, op && null != n9 && !nX ? (0, N.createPortal)((0, i.jsx)(tQ, {
                    canGoBack: ah.canGoBack,
                    canGoForward: ah.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => r5(-1),
                    onForward: () => r5(1)
                }), n9) : null]
            })
        }

        function nE(e) {
            return null != e && !(e instanceof t5.a)
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
                        fullSurface: m,
                        showLoadingStatus: g,
                        disableInlineLoadingState: h
                    } = e,
                    T = void 0 !== f && f,
                    I = void 0 === g || g,
                    b = (0, o.a)();
                d[0] !== b ? (t = b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
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
            defaultMessage: "Open"
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
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(17982)]).then(n.bind(n, "VWsy"));
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
            i = n("HT1b"),
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
                let t, n, g, h, T, I, b, v, A, y, C, N, w = (0, r.c)(90),
                    {
                        resource: R,
                        error: P,
                        errorTitle: S,
                        errorIllustration: D,
                        hostDisplayModes: G,
                        fullSurface: x,
                        hostScroll: L,
                        inlineSurface: O,
                        mcpAppId: F,
                        overlayOwnerId: M,
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
                    z = void 0 === M ? null : M,
                    K = void 0 === j || j,
                    X = void 0 !== V && V,
                    $ = (0, i.y)(d.a),
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
                w[7] !== er.intrinsicHeight || w[8] !== q || w[9] !== B || w[10] !== ec || w[11] !== el ? (g = (0, u.a)(er.intrinsicHeight, el, ec, B, q), w[7] = er.intrinsicHeight, w[8] = q, w[9] = B, w[10] = ec, w[11] = el, w[12] = g) : g = w[12];
                let eu = g,
                    ed = !Y && ee?.fitWidth ? er.intrinsicWidth ?? ee.widthHint : void 0,
                    ep = Y ? void 0 : ee?.inlineFramePadding;
                w[13] !== ep ? (h = (0, u.b)(ep), w[13] = ep, w[14] = h) : h = w[14], w[15] !== ed || w[16] !== h ? (T = {
                    width: ed,
                    ...h
                }, w[15] = ed, w[16] = h, w[17] = T) : T = w[17];
                let e_ = T,
                    eE = "error" === ea.kind ? ea.error : er.sandboxError;
                w[18] !== ea.kind || w[19] !== eE ? (I = null, "too-large" === ea.kind ? I = "HTML exceeds display limit" : eE instanceof m.a && (I = "No supported display mode"), w[18] = ea.kind, w[19] = eE, w[20] = I) : I = w[20];
                let ef = "error" === ea.kind ? ea.error : null,
                    em = ef?.message;
                w[21] !== I || w[22] !== ee?.availableDisplayModes || w[23] !== ee?.htmlByteLength || w[24] !== G || w[25] !== F || w[26] !== ef ? (b = () => {
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
                }, w[21] = I, w[22] = ee?.availableDisplayModes, w[23] = ee?.htmlByteLength, w[24] = G, w[25] = F, w[26] = ef, w[27] = b) : b = w[27];
                let eg = (0, s.useEffectEvent)(b);
                if (w[28] !== eg ? (v = () => {
                        eg()
                    }, w[28] = eg, w[29] = v) : v = w[29], w[30] !== I || w[31] !== F || w[32] !== em ? (A = [I, em, F], w[30] = I, w[31] = F, w[32] = em, w[33] = A) : A = w[33], (0, s.useEffect)(v, A), "too-large" === ea.kind) {
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
                if (!Y && "launcher" === W) {
                    let e, t = z ?? void 0;
                    return w[35] !== es || w[36] !== t ? (e = (0, a.jsx)("div", {
                        ref: es,
                        "data-overlay-owner": t,
                        hidden: !0
                    }), w[35] = es, w[36] = t, w[37] = e) : e = w[37], e
                }
                if (et || !eo && null != en && null == eE) {
                    let e, t, n, r;
                    if ("pending" === W && !Y) {
                        let e;
                        return !K || X ? null : (w[38] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app"
                            })
                        }), w[38] = e) : e = w[38], e)
                    }
                    let i = et ? null : es,
                        s = z ?? void 0,
                        c = null == ep && "max-w-full",
                        u = Y && "h-full";
                    w[39] !== c || w[40] !== u ? (e = (0, o.b)(c, u), w[39] = c, w[40] = u, w[41] = e) : e = w[41];
                    let d = "standalone" === B && "rounded-lg border";
                    w[42] !== d ? (t = (0, o.b)("w-full border-subtle", d), w[42] = d, w[43] = t) : t = w[43];
                    let p = Y ? "100%" : eu;
                    return w[44] !== X || w[45] !== Y || w[46] !== q || w[47] !== ep || w[48] !== K || w[49] !== t || w[50] !== p ? (n = (0, a.jsx)(_.a, {
                        className: t,
                        height: p,
                        inlineFramePadding: ep,
                        fullSurface: Y,
                        allowCompact: q,
                        showLoadingStatus: K,
                        disableInlineLoadingState: X
                    }), w[44] = X, w[45] = Y, w[46] = q, w[47] = ep, w[48] = K, w[49] = t, w[50] = p, w[51] = n) : n = w[51], w[52] !== e_ || w[53] !== B || w[54] !== i || w[55] !== s || w[56] !== e || w[57] !== n ? (r = (0, a.jsx)("div", {
                        ref: i,
                        "data-overlay-owner": s,
                        className: e,
                        style: e_,
                        "data-mcp-app-inline-surface": B,
                        children: n
                    }), w[52] = e_, w[53] = B, w[54] = i, w[55] = s, w[56] = e, w[57] = n, w[58] = r) : r = w[58], r
                }
                if (null != eE) {
                    let e, t;
                    return w[59] !== ea.kind || w[60] !== F || w[61] !== k || w[62] !== Z?.content.mcpAppHostAdapter?.retry || w[63] !== $ ? (e = Z?.content.mcpAppHostAdapter?.retry ?? ("error" === ea.kind ? k : () => (0, E.C)($, F)), w[59] = ea.kind, w[60] = F, w[61] = k, w[62] = Z?.content.mcpAppHostAdapter?.retry, w[63] = $, w[64] = e) : e = w[64], w[65] !== U || w[66] !== D || w[67] !== S || w[68] !== Y || w[69] !== B || w[70] !== eE || w[71] !== H || w[72] !== e ? (t = (0, a.jsx)(f.a, {
                        error: eE,
                        errorTitle: S,
                        errorIllustration: D,
                        fullSurface: Y,
                        inlineSurface: B,
                        pluginName: U,
                        renderErrorActions: H,
                        onRetry: e
                    }), w[65] = U, w[66] = D, w[67] = S, w[68] = Y, w[69] = B, w[70] = eE, w[71] = H, w[72] = e, w[73] = t) : t = w[73], t
                }
                if (!ei) {
                    let e, t = z ?? void 0;
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
                let eh = z ?? void 0,
                    eT = null == ep && "w-full max-w-full",
                    eI = Y && "h-full";
                w[78] !== eT || w[79] !== eI ? (y = (0, o.b)("overflow-hidden", eT, eI), w[78] = eT, w[79] = eI, w[80] = y) : y = w[80];
                let eb = Y ? "100%" : eu;
                return w[81] !== e_ || w[82] !== eb ? (C = {
                    ...e_,
                    height: eb
                }, w[81] = e_, w[82] = eb, w[83] = C) : C = w[83], w[84] !== es || w[85] !== B || w[86] !== eh || w[87] !== y || w[88] !== C ? (N = (0, a.jsx)("div", {
                    ref: es,
                    "data-overlay-owner": eh,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": B,
                    className: y,
                    style: C
                }), w[84] = es, w[85] = B, w[86] = eh, w[87] = y, w[88] = C, w[89] = N) : N = w[89], N
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
                defaultMessage: "Timeout details"
            }), d[0] = p, d[1] = e) : e = d[1];
            let _ = e;
            return d[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {
                id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes."
            }), d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.ne, {
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
                        defaultMessage: "Try again"
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
            l = n("V5jR"),
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
            let t, n, c, f, m, g, h, T, I, b, v, A, y, C, N, w, R, P, S, D, G, x, L, O, F, M = (0, r.c)(65);
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
                H = void 0 !== C && C,
                U = (0, o.y)(d.a),
                W = (0, o.x)(u.s, h),
                j = (0, o.z)(p.a);
            M[15] !== g || M[16] !== h || M[17] !== U ? (N = () => {
                if ("component" === g) return () => {
                    (0, u.z)(U, h)
                }
            }, w = [g, h, U], M[15] = g, M[16] = h, M[17] = U, M[18] = N, M[19] = w) : (N = M[18], w = M[19]), (0, i.useLayoutEffect)(N, w);
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
            M[29] !== m || M[30] !== K ? (S = ! function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return !1
            }({
                hostId: m,
                pluginId: K
            }) ? void 0 : K, M[29] = m, M[30] = K, M[31] = S) : S = M[31];
            let X = S,
                $ = v.isLoading || z;
            M[32] !== f || M[33] !== $ || M[34] !== v ? (D = (0, _.e)({
                ...v,
                isLoading: $
            }, f), M[32] = f, M[33] = $, M[34] = v, M[35] = D) : D = M[35];
            let Z = D;
            return M[36] !== n || M[37] !== Z || M[38] !== q || M[39] !== X || M[40] !== H || M[41] !== f || M[42] !== m || M[43] !== j || M[44] !== h || M[45] !== T || M[46] !== k || M[47] !== b || M[48] !== Y || M[49] !== V || M[50] !== U || M[51] !== A ? (x = () => {
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
            }, G = [n, Z, q, X, H, f, m, j, h, T, k, b, Y, V, U, A], M[36] = n, M[37] = Z, M[38] = q, M[39] = X, M[40] = H, M[41] = f, M[42] = m, M[43] = j, M[44] = h, M[45] = T, M[46] = k, M[47] = b, M[48] = Y, M[49] = V, M[50] = U, M[51] = A, M[52] = G, M[53] = x) : (G = M[52], x = M[53]), (0, i.useLayoutEffect)(x, G), M[54] !== t || M[55] !== g || M[56] !== h || M[57] !== U || M[58] !== W ? (L = () => {
                "component" !== g && null != W && (0, E.c)(U, {
                    Frame: t,
                    lifetime: g,
                    sessionId: W,
                    sourceMcpAppId: h
                })
            }, O = [t, g, h, W, U], M[54] = t, M[55] = g, M[56] = h, M[57] = U, M[58] = W, M[59] = L, M[60] = O) : (L = M[59], O = M[60]), (0, i.useLayoutEffect)(L, O), M[61] !== t || M[62] !== g || M[63] !== W ? (F = "component" === g && null != W ? (0, a.jsx)(t, {
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