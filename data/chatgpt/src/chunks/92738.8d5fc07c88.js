export const __rspack_esm_ids = [92738];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => o,
            c: () => a,
            d: () => w,
            e: () => v,
            f: () => x,
            g: () => _,
            h: () => S
        });
        let a = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var i, r, o = ((i = {}).LOG = "log", i.RUN_START = "run_start", i.ENVIRONMENT_STATUS = "environment_status", i.OUTPUT = "output", i.ERROR = "error", i.RUN_COMPLETE = "run_complete", i),
            s = ((r = {})[r.INITIALIZING = 0] = "INITIALIZING", r[r.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", r[r.RUNNING_CODE = 2] = "RUNNING_CODE", r);

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
                for (let [a, i] of(t.set(e, n), e)) n.set(c(a, t), c(i, t));
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
            let i = {};
            for (let n of (t.set(e, i), Object.keys(e))) {
                let a;
                try {
                    a = e[n]
                } catch (e) {
                    a = String(e)
                }
                i[n] = c(a, t)
            }
            return i
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
            m = "RESOLVE";

        function f(e, t) {
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
                            }, a.postMessage([m, await t.call({
                                signal: e.signal
                            }, ...n.slice(1))])
                        } catch (i) {
                            if (i instanceof Error && "DataCloneError" === i.name) try {
                                a.postMessage([m, await t.call({
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
                            a.postMessage([p, i])
                        } finally {
                            a.close()
                        }
                    }(): (a.postMessage([p, Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.")]), a.close())
                }
            }), e.start();
            let n = t => function() {
                    for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return new Promise((n, i) => {
                        let {
                            port1: r,
                            port2: o
                        } = new MessageChannel;
                        r.onmessage = e => {
                            let t = e.data;
                            t[0] === m ? n(t[1]) : i(t[1]), r.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            r.postMessage([u]), r.close(), i(Error("Aborted."))
                        }), e.postMessage([d, ...a], [o, ...t.transfer || []])
                    })
                },
                a = n({});
            return a.withOptions = n, a
        }
        let g = "GENERATOR_GENERATE";

        function h(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === g) {
                    if (e.stopImmediatePropagation(), !t) throw Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.");
                    let [a, i, ...r] = n, o = t(...r);
                    f(i.next, o.next.bind(o)), f(i.return, e => o.return?.(e) || {
                        done: !0
                    }), f(i.throw, e => o.throw?.(e) || Promise.reject(e)), f(i.asyncDispose, async () => {
                        let e = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            t = Symbol.dispose || Symbol.for("Symbol.dispose");
                        e in o ? await o[e]?.() : t in o && o[t]?.()
                    })
                }
            }), e.start();
            let n = t => {
                    let n;
                    return function() {
                        for (var a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r];
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
                            port2: m
                        } = new MessageChannel, h = {
                            signal: t.signal
                        }, b = () => {
                            o.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), m.close()
                        }, v = f(o).withOptions(h), y = f(l).withOptions(h), w = f(u).withOptions(h), I = f(p).withOptions(h), _ = !1, x = async e => {
                            if (n?.(), _) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (_ = !0, b()), t
                        }, S = {
                            next: e => x(() => y(e)),
                            return: e => x(() => w(e)),
                            throw: e => x(() => I(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async e => {
                                n?.(), await e(), _ = !0, b(), n = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => v()),
                            [Symbol.asyncIterator]: () => S
                        };
                        return e.postMessage([g, {
                            asyncDispose: s,
                            next: c,
                            return: d,
                            throw: m
                        }, ...i], [...t.transfer || [], s, c, d, m]), t.signal?.addEventListener("abort", () => {
                            n = () => {
                                throw Error("This generator has been aborted.")
                            }, b()
                        }, {
                            once: !0
                        }), S
                    }
                },
                a = n({});
            return a.withOptions = n, a
        }
        var b = n("ASxG");
        async function v(e) {
            let {
                host: t,
                signal: n
            } = e, {
                ports: a,
                replyPort: i
            } = "iframe" in e ? await
            function(e) {
                let {
                    iframe: t,
                    origin: n,
                    signal: a
                } = e, i = t.ownerDocument.defaultView;
                if (null == i || a?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let r = b.object({
                    type: b.literal("init"),
                    ports: b.record(b.string(), b.instanceof(MessagePort)),
                    replyPort: b.instanceof(MessagePort)
                });
                return new Promise((e, o) => {
                    let s = () => {
                            i.removeEventListener("message", d), t.removeEventListener("error", u), a?.removeEventListener("abort", c)
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
                            let i = r.safeParse(a.data);
                            i.success && (s(), e(i.data))
                        };
                    i.addEventListener("message", d), null != a && t.addEventListener("error", u, {
                        once: !0
                    }), a?.addEventListener("abort", c, {
                        once: !0
                    })
                })
            }(e): e, r = new Set([...Object.values(a), i]), o = new AbortController, s = () => {
                for (let e of (n?.removeEventListener("abort", s), o.abort(), r)) e.close();
                r.clear()
            };
            try {
                n?.throwIfAborted();
                let l = {};
                for (let [e, n] of Object.entries(t)) {
                    if (null == n) continue;
                    let a = new MessageChannel;
                    r.add(a.port1), r.add(a.port2);
                    let i = function(e, t, n) {
                        function a() {
                            for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                            let r = e[t];
                            if (null == r) throw Error(`Sandbox host method "${t}" is unavailable`);
                            return r.apply(this, a)
                        }
                        return y(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* a.apply(this, t)
                        }: a
                    }(t, e, n);
                    y(i) ? h(a.port1, i) : f(a.port1, i), l[e] = a.port2
                }
                i.postMessage(l, Object.values(l)), i.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    u = Object.fromEntries(Object.entries(a).map(e => {
                        let [t, a] = e, i = c.has(t) ? h(a) : f(a);
                        if (null == n) return [t, i];
                        let r = e => {
                            let t = null == e.signal ? o.signal : AbortSignal.any([o.signal, e.signal]),
                                n = i.withOptions({
                                    ...e,
                                    signal: t
                                });
                            return function() {
                                for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                return t.throwIfAborted(), n(...a)
                            }
                        };
                        return [t, Object.assign(r({}), {
                            withOptions: r
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

        function y(e) {
            return "AsyncGeneratorFunction" === e.constructor.name
        }

        function w(e) {
            let {
                disableNetworkRequests: t,
                domains: n,
                additionalResourceDomains: a = [],
                unsafeAllowAllNetworkRequests: i
            } = e;
            return t ? {
                disableNetworkRequests: !0,
                resourceDomains: [],
                connectDomains: [],
                isTrusted: !1
            } : i ? null : {
                connectDomains: n,
                resourceDomains: [...n, ...a],
                isTrusted: !1
            }
        }
        let I = new Set(["blob", "c", "cid", "data", "eval", "filesystem", "inline", "trusted-types-policy", "trusted-types-sink", "wasm-eval"]);

        function _(e) {
            return I.has(e) ? null : new URL(e).origin
        }

        function x() {
            let {
                origin: e,
                isStaging: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return `${e??(t?"https://staging-web-sandbox.oaiusercontent.com":"https://web-sandbox.oaiusercontent.com")}?${t?"unsafeSkipTargetOriginCheck=true":""}`
        }

        function S(e) {
            if (!E(e) || "structured_event" !== e.type || !E(e.messageType) || "string" != typeof e.messageType.$type || 0 === e.messageType.$type.length || !E(e.payload)) return;
            let t = e.payload;
            if (!["@type", "codexMetadata", "codex_metadata", "webFrontend", "web_frontend"].some(e => Object.hasOwn(t, e))) return {
                type: "structured_event",
                messageType: {
                    $type: e.messageType.$type
                },
                payload: e.payload
            }
        }

        function E(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
    }),
    Btes: (function(e, t, n) {
        var a = n("kSHG"),
            i = n("qx55"),
            r = n("dQRk"),
            o = n("KhaL"),
            s = n("c5dW");
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    chatGptConversation: n,
                    toolIdentity: l,
                    resourceIdentity: c,
                    signal: u,
                    toolArguments: d
                } = e, p = (0, s.c)(l);
                if (null == p || null == l) return null;
                if (null == n) return (0, s.b)({
                    scope: t,
                    resourceIdentity: c,
                    ...p,
                    toolArguments: d
                });
                let m = c?.identity.accountId,
                    f = () => {
                        if ("current" !== t.get(i.d, c)) throw Error("MCP app connection identity changed")
                    };
                if (f(), null == m) throw Error("MCP app connection identity changed");
                let g = "tpp" === t.get(r.x, n.id);
                return (0, o.b)({
                    scope: t,
                    accountId: m,
                    appUri: `connectors://${l.connectorId}`,
                    chatGptConversationId: n.id,
                    threadId: g ? n.id : void 0,
                    productSku: g ? "TPP" : void 0,
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
                }, u).then(e => (f(), a.c.parse(e)))
            }
        })
    }),
    WBiY: (function(e, t, n) {
        var a = n("iTtm"),
            i = n("xnQm"),
            r = n("tl5a"),
            o = n("Cslg"),
            s = n("dsow"),
            l = n("Sd8U"),
            c = n("dN0a"),
            u = n("WFY2"),
            d = n("f4ql"),
            p = n("uoRg");
        let m = (0, a.u)(l.a, () => []);
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
                    let r, d, f = (a = e, l = n, r = a.get(o.f), d = a.get(o.j), e => e(p.a)?.submit === l && e(o.f) === r && e(o.j) === d);
                    return async (a, r, o, l) => {
                        o?.throwIfAborted();
                        let d = a.untrustedAppMessage?.sourceId,
                            g = e.get(p.a)?.isBusy == null ? void 0 : Symbol();
                        null != g && (e.set(m, e => [...e, g]), u.a.info("Queued app message for composer", {
                            safe: {
                                mcpAppId: d
                            }
                        }));
                        try {
                            let h = await (0, s.c)({
                                context: a,
                                signal: o,
                                requestConfirmation: l,
                                send: async a => {
                                    if (e.get(p.a)?.submit !== n) throw new DOMException("Composer was closed", "AbortError");
                                    return null != g && await async function(e, t, n, a) {
                                        let r = e => e(m)[0] === a && e(p.a)?.isBusy !== !0;
                                        do {
                                            let a = (0, i.Pe)(),
                                                o = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (!t(n) || r(n)) && a.resolve(void 0)
                                                });
                                            try {
                                                await (null == n ? a.promise : (0, i.hf)(a.promise, n))
                                            } finally {
                                                o(), a.resolve(void 0)
                                            }
                                            if (n?.throwIfAborted(), !t(e.get)) throw new DOMException("Composer was closed", "AbortError")
                                        } while (!r(e.get))
                                    }(e, f, o, g), t?.(), u.a.info("Submitting app message", {
                                        safe: {
                                            mcpAppId: d
                                        }
                                    }), n(a, r, o)
                                }
                            });
                            return (0, c.h)(e, {
                                prefersReducedMotion: !0
                            }), null != h && u.a.info("sent" === h.status ? "Sent app message" : "Queued app message", {
                                safe: {
                                    mcpAppId: d,
                                    messageId: h.messageId,
                                    serverAccepted: "queued" === h.status ? h.serverAccepted : void 0
                                }
                            }), h
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
                            null != g && e.set(m, e => e.filter(e => e !== g))
                        }
                    }
                }
                if ("local" !== e.value.kind || null == e.value.conversationId) return null;
                let f = e.value.conversationId,
                    g = e.get(r.q, f);
                return null == g ? null : async (n, a, i, o) => {
                    let l = n.untrustedAppMessage?.sourceId;
                    try {
                        let a = await (0, s.c)({
                            context: n,
                            signal: i,
                            requestConfirmation: o,
                            send: n => (t?.(), u.a.info("Submitting app message", {
                                safe: {
                                    mcpAppId: l
                                }
                            }), (0, d.a)(e, e.get(r.vb, f), f, {
                                context: n,
                                cwd: g,
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
                        let e = i?.aborted === !0 || t instanceof DOMException && "AbortError" === t.name;
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
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(514247)]).then(n.bind(n, "shkb"))
            }
        })
    }),
    o62A: (function(e, t, n) {
        var a = n("i5ac"),
            i = n.n(a),
            r = n("xnQm"),
            o = n("P61R"),
            s = n("Dgwo"),
            l = n("tl5a"),
            c = n("KJ1J"),
            u = n("tTIR"),
            d = n("VvpR"),
            p = n("PYah"),
            m = n("X6Vn"),
            f = n("mdWu"),
            g = n("jAhM"),
            h = n("taUf"),
            b = n("ALWK"),
            v = n("joT6"),
            y = n("loz7"),
            w = n("uzkw"),
            I = n("EEop"),
            _ = n("ueue"),
            x = n("tSEg"),
            S = n("DKJJ");

        function E(e) {
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
                    navigate: A,
                    resourceIdentity: C,
                    server: M,
                    sessionId: P,
                    sourceMcpAppId: T,
                    toolResult: k
                } = e;
                if (!E({
                        hostId: a,
                        mcpAppScope: c,
                        resourceIdentity: C,
                        server: M
                    })) return null;
                let R = {
                        hostId: a,
                        threadId: n
                    },
                    j = (0, S.g)({
                        toolResult: k
                    }),
                    N = h.c.safeParse(j?._meta ?? j).data,
                    D = (e, a, i) => {
                        let {
                            accountId: r,
                            userId: o
                        } = C.identity;
                        null == r || null == o || t.get(x.j) || t.get(b.r, P)?.sourceMcpAppId !== T || (0, w.a)({
                            connectorId: a,
                            conversationId: n,
                            eventType: i,
                            expectedIdentity: {
                                accountId: r,
                                userId: o
                            },
                            pluginId: e,
                            productSurface: "CODEX"
                        })
                    };
                return (0, g.a)({
                    scope: t,
                    hostId: a,
                    navigate: A,
                    toolResult: k,
                    onSuggestionInteraction: D,
                    connect: async (e, i) => {
                        let c = e.plugin_id;
                        try {
                            let g = t.get(l.Zb, R)?.latestTurnId,
                                h = !1,
                                b = !1;
                            if (!o({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: r.Xc,
                                    remotePluginId: c
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: n
                                    },
                                    hostId: a,
                                    marketplaceAnalytics: i,
                                    onError: () => {
                                        b = !0
                                    },
                                    onSuccess: () => {
                                        h = !0
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
                                    } = e, n = t(y.o);
                                    return "closed" === n.kind || n.hostId !== a
                                }), b) return {
                                pluginId: c,
                                status: "retryable_error"
                            };
                            if (!h) return {
                                pluginId: c,
                                status: "cancelled"
                            };
                            let w = (0, s.b)(t, a);
                            if (!(0, r.Sh)(a)) {
                                let e = await w.sendRequest("plugin/reconcile", {
                                    reason: "plugin_suggestion_connected"
                                });
                                if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0) return {
                                    pluginId: c,
                                    status: "retryable_error"
                                }
                            }
                            let x = t.query.snapshot(I.k, {
                                hostId: a,
                                marketplacePath: null,
                                pluginName: c,
                                remoteMarketplaceName: r.Xc
                            });
                            await x.invalidate({
                                refetchType: "none"
                            });
                            let [S, E] = await Promise.all([x.getOrFetch(), (0, p.a)(t, a, n)]);
                            if (!S.summary.installed || !S.summary.enabled || null != S.summary.remotePluginId && S.summary.remotePluginId !== c || !S.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return E.has(t)
                                }) || (await (0, v.a)({
                                    scope: t,
                                    authPolicy: S.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: a,
                                    plugin: (0, _.b)(S),
                                    queryClient: t.queryClient,
                                    windowType: "browser"
                                })).length > 0) return {
                                pluginId: c,
                                status: "connection_required"
                            };
                            if (void 0 === g || (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(l.Zb, R);
                                    return null != a && (a.latestTurnId !== g || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n) && !t(m.c))
                                }), await w.getLatestTurnId(n) !== g)) return {
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
                        let r = e => !e(x.j) && e(b.r, P)?.sourceMcpAppId === T,
                            o = h.d.safeParse(t.get(b.w, P) ?? {});
                        if (!r(t.get) || !o.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let c = new Set(o.data.connectedPluginIds),
                            p = new Set(o.data.declinedPluginIds),
                            m = i()(e, "plugin_id").filter(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return !c.has(t) && !p.has(t)
                            });
                        if (0 === m.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let g = t.get(l.Zb, R)?.latestTurnId,
                            v = m.map(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return t
                            });
                        for (let {
                                plugin_id: e
                            }
                            of m) D(e, N?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(b.w, P, {
                            ...o.data,
                            declinedPluginIds: [...p, ...v]
                        });
                        try {
                            if (void 0 === g) return {
                                status: "declined",
                                declinedPluginIds: v
                            };
                            if (await t.when(e => {
                                    let {
                                        get: t
                                    } = e, a = t(l.Zb, R);
                                    return !r(t) || null != a && (a.latestTurnId !== g || a.summary.threadRuntimeStatus?.type !== "active" && !t(f.i, n))
                                }), await (0, s.b)(t, a).getLatestTurnId(n) === g && r(t.get) && t.get(l.Gb, n)?.role !== "follower" && (0, u.b)(n)) try {
                                await (0, d.c)(t, a, n, {
                                    turnTrigger: "plugin_suggestion_declined",
                                    additionalContext: {
                                        plugin_suggestion_declined: {
                                            kind: "application",
                                            value: `The user chose not to install these plugins for the current request: ${JSON.stringify(m.map(e=>{let{display_name:t}=e;return t}))}. Continue the original request using available capabilities, without the declined plugins. If the request requires a declined app, explain that limitation or offer an available alternative. Do not suggest these plugins again.`
                                        }
                                    }
                                })
                            } finally {
                                (0, u.a)(n)
                            }
                        } catch {}
                        return {
                            status: "declined",
                            declinedPluginIds: v
                        }
                    }
                })
            },
            b: function(e) {
                let {
                    mcpAppScope: t,
                    resourceIdentity: n,
                    server: a
                } = e, i = "connector" === n.identity.kind ? n.identity.connectorId : null;
                return "internal://plugin-management-suggestions" === t.originResourceUri && (0, c.e)(a) && i === o.a && t.codexAppsToolScope?.connectorId === i
            },
            c: E
        })
    }),
    vgfv: (function(e, t, n) {
        var a = n("g25Y"),
            i = n("X6Vn");
        n.d(t, {}, {
            a: function(e, t) {
                let n = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                    r = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                    o = () => {
                        window.open(t, "_blank", `popup=yes,width=600,height=750,left=${n},top=${r},noopener,noreferrer`)
                    };
                "Apple Computer, Inc." === navigator.vendor ? (0, i.f)(e, a.ExternalLinkConfirmationDialog, {
                    href: t,
                    initiator: "mcp_app_resource",
                    onOpen: o
                }) : o()
            }
        })
    }),
    uJ0o: (function(e, t, n) {
        var a = n("iTtm"),
            i = n("tSEg"),
            r = n("dN0a");
        let o = (0, a.u)(i.a, () => null),
            s = (0, a.h)(i.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return (t(o) ?? n).get(r.k)
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
                    a(t(r.k))
                })
            });
        n.d(t, {}, {
            a: s,
            b: o
        })
    }),
    bbP0: (function(e, t, n) {
        let a, i, r;
        n.d(t, {
            a: () => nv
        });
        var o = n("ABep"),
            s = n("QosV"),
            l = n("z8ZL"),
            c = n("kSHG"),
            u = n("bTvG"),
            d = n("iRMi"),
            p = n("t0Nb"),
            m = n("kUij"),
            f = n("fD5v"),
            g = n("OppN"),
            h = n("WWo4"),
            b = n("SZCv"),
            v = n.n(b),
            y = n("iTtm"),
            w = n("xnQm"),
            I = n("AuIy"),
            _ = n("F6B1"),
            x = n("zd8w"),
            S = n("v7qY"),
            E = n("Wf1j"),
            A = n("jqIZ"),
            C = n("ASxG"),
            M = n("KJ1J");
        let P = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var T = n("PFjh"),
            k = n("yGJW");
        let R = {
                widget: ["account_setup", "ad_preview", "campaign_delivery"],
                view: ["action", "attention", "summary", "recovery", "deferred", "billing_screen", "billing_close_failed", "minimized", "retired_minimized", "retired", "loading", "invalid", "preview", "preview_unavailable", "detail", "unavailable"],
                step: ["billing", "logo", "account"],
                action: ["set_up_billing", "set_up_logo", "skip", "resume", "back_to_billing", "minimize", "expand", "done", "set_up_later", "check_billing_status", "check_account_status", "open_ads_manager", "close_billing", "previous_page", "next_page", "refresh", "propose_budget_increase", "configure_budget", "propose_bid_increase", "create_ads", "unpause_ads", "unpause_campaign"],
                source: ["header", "primary", "footer", "status_row", "collapsed", "billing_screen", "single", "collection", "campaign_link", "account_banner"]
            },
            j = C.object({
                type: C.enum(["count", "hist"]),
                label: C.enum(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: C.literal(1).optional(),
                value: C.number().nonnegative().optional(),
                tags: C.array(C.object({
                    key: C.string(),
                    value: C.string()
                })).max(8)
            }),
            N = C.object({
                stage: C.enum(["payment_details_shown", "payment_details_load_observed", "payment_details_load_failed", "payment_details_late_load_failed", "billing_address_shown", "billing_address_load_observed", "billing_address_load_failed", "billing_address_late_load_failed"]),
                product: C.literal("ads"),
                checkout_type: C.literal("manual"),
                load_metric_version: C.literal("1").optional()
            }),
            D = C.object({
                phase: C.enum(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: C.enum(["create", "edit"]),
                outcome: C.enum(["success", "error", "requires_action"]),
                failure_category: C.enum(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            O = C.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            L = {
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
            q = C.array(C.object({
                key: C.string(),
                value: C.unknown().optional()
            }).nullable().catch(null)),
            U = C.discriminatedUnion("type", [C.object({
                type: C.literal("event"),
                label: O,
                payload: C.object({
                    widget: C.enum(R.widget),
                    view_session_id: C.uuid().optional().catch(void 0),
                    view: C.enum(R.view).optional().catch(void 0),
                    action: C.enum(R.action).optional().catch(void 0),
                    outcome: C.enum(["closed", "denied", "missing_response", "error"]).optional().catch(void 0),
                    step: C.enum(R.step).optional().catch(void 0),
                    source: C.enum(R.source).optional().catch(void 0),
                    billing_status: C.enum(["required", "complete", "unknown"]).optional().catch(void 0),
                    logo_status: C.enum(["missing", "ready", "in_review", "replacement_in_review", "review_rejected", "unknown"]).optional().catch(void 0),
                    account_review_status: C.enum(["approved", "in_review", "rejected", "unknown"]).optional().catch(void 0),
                    attention_reason: C.enum(["unsupported_country", "review_rejected"]).optional().catch(void 0),
                    billing_recovery: C.enum(["unsupported_country", "external"]).optional().catch(void 0),
                    billing_in_sidebar: C.boolean().optional().catch(void 0),
                    logo_handoff_failed: C.boolean().optional().catch(void 0),
                    step_number: F(1),
                    step_count: F(),
                    preview_kind: C.enum(["draft", "existing"]).optional().catch(void 0),
                    reason: C.enum(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: F(1),
                    page: F(1),
                    page_count: F(1),
                    page_size: F(1),
                    total_count: F(),
                    next_page: F(1)
                })
            }), C.object({
                type: C.literal("count"),
                label: O,
                count: C.literal(1).optional(),
                tags: q
            })]);

        function F() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return C.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var W = n("StMt"),
            G = n("Dgwo"),
            H = n("tl5a"),
            B = n("qx55"),
            z = n("sM3V"),
            V = n("QcFS"),
            $ = n("ZU27"),
            X = n("DiD0"),
            Y = n("SK3E"),
            J = n("gbrq"),
            K = (n("Sbyb"), n("WzdM")),
            Z = n("OWtl"),
            Q = n("PLHV"),
            ee = n("FpcZ");
        let et = (0, y.d)(Z.a, (e, t) => {
            let {
                appId: n,
                accountId: a
            } = e, {
                get: i
            } = t;
            return null == a ? null : i(ee.c, {
                appId: n,
                accountId: a,
                includeTools: !1,
                locale: (0, Q.b)(),
                productHeaders: (0, K.a)()
            }).data?.[0]?.mcp_server_url_hash ?? null
        });
        var en = n("Btes"),
            ea = n("TSib"),
            ei = n("ipIJ"),
            er = n("uoRg"),
            eo = n("qXzS"),
            es = n("Q8aV"),
            el = n("dN0a"),
            ec = n("qbxq"),
            eu = n("uIyc"),
            ed = n("WBiY");

        function ep(e) {
            if (e.attachment?.content?.some(e => !(0, ec.d)(e))) throw Error("App draft attachments must be visible to the user")
        }
        var em = n("Ot7V"),
            ef = n("B09n"),
            eg = n("PeqE"),
            eh = n("ywSA"),
            eb = n("kRV1"),
            ev = n("eB3o"),
            ey = n("Fkn8");
        a = (0, ev._)(Symbol.dispose);
        class ew {
            #e = new eI;
            #t;
            constructor(e) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new ey.a(this.#e, e.createRpcStub())
            }
            setNotificationSender(e) {
                this.#e.setNotificationSender(e)
            }
            handleRequest(e) {
                let {
                    message: t
                } = m.f.parse(e);
                return this.#e.receiveMessage(t), Promise.resolve({})
            } [a]() {
                this.#t(), this.#e[Symbol.dispose]()
            }
        }
        i = (0, ev._)(Symbol.dispose);
        class eI {
            #n = null;
            #a = [];
            #i = null;
            #r = null;
            setNotificationSender(e) {
                this.#r = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#r ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#r({
                    method: m.b,
                    params: {
                        message: e
                    }
                }), Promise.resolve())
            }
            receive() {
                if (null != this.#n) return Promise.reject(this.#n);
                let e = this.#a.shift();
                return null != e ? Promise.resolve(e) : new Promise((e, t) => {
                    this.#i = {
                        reject: t,
                        resolve: e
                    }
                })
            }
            receiveMessage(e) {
                if (null != this.#n) throw this.#n;
                let t = this.#i;
                null == t ? this.#a.push(e) : (this.#i = null, t.resolve(e))
            }
            abort(e) {
                null == this.#n && (this.#n = e instanceof Error ? e : Error("The first-party plugin bridge was disconnected."), this.#a.length = 0, this.#r = null, this.#i?.reject(this.#n), this.#i = null)
            } [i]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var e_ = n("WFY2"),
            ex = n("ReGc"),
            eS = n("rP0s"),
            eE = n("Cslg"),
            eA = n("ALWK"),
            eC = n("F8wW"),
            eM = n("RFeS"),
            eP = n("lu7q"),
            eT = n("we56");
        let ek = C.object({
            prompt: C.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eR = n("o62A"),
            ej = n("SRbQ"),
            eN = n("TL6G");
        class eD {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = eN.c.subscribe("mcp-event-notification", t => {
                    if (t.hostId === this.params.hostId) {
                        for (let [n, a] of this.subscriptions)
                            if (a.hostSubscriptionId === t.subscriptionId) {
                                e(eO(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (e_.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (e_.a.info("Updating app event subscriptions for conversation", {
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
                    conversationId: i
                } = this.params;
                if (null == n || null == i) return;
                let {
                    subscriptionId: r
                } = a, o = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: i,
                    event: a.name,
                    connectorId: a.connectorId,
                    linkId: a.linkId,
                    widgetSubscriptionId: r,
                    hostSubscriptionId: n
                };
                try {
                    let e = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        e_.a.info("Starting app event subscription", {
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
                        let t = (0, ej.a)(e, await (0, G.b)(this.params.scope, this.params.hostId).getFollowUpContext(i), !1);
                        await this.params.scope.get(H.c, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
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
                            threadId: i
                        }, {
                            timeoutMs: 95e3,
                            threadAccess: t?.threadAccess
                        }), e_.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: o.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, ej.e)(e)
                    }
                } catch (a) {
                    if (e_.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: o.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(r) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(r), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(eO({
                        method: "notifications/events/terminated"
                    }, r)) : void 0]), a
                }
                if ((this.subscriptions.get(r) !== e || e.hostSubscriptionId !== n) && (await this.stop(n).catch(() => {}), !this.subscriptions.has(r))) throw Error("MCP event subscription closed during startup")
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
                e_.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(H.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw e_.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), e_.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function eO(e, t) {
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
        var eL = n("ustl"),
            eq = n("whdX");
        let eU = new Map;
        class eF {
            params;
            isNotificationSinkConnected = !1;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            setConversation(e) {
                return this.enqueue(async () => {
                    let t = this.params.conversationId;
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, G.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = eN.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (e_.a.debug("Received app resource update", {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw new eG;
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw e_.a.warning("Failed to subscribe to app resource updates", {
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
                    t?.throwIfAborted(), this.params.resolveResourceWatchPath?.(e) == null && (0, eL.a)({
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
                        throw e_.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, i = (eU.get(a) ?? Promise.resolve()).then(e), r = i.then(() => void 0, () => void 0);
                return eU.set(a, r), r.then(() => {
                    eU.get(a) === r && eU.delete(a)
                }), i
            }
            getResourceWatchPath(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                null == t && (0, eL.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                });
                let n = t ?? (0, eq.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == n) throw new eW(e);
                return n
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? e_.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (e_.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, G.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), e_.a.info("Updated app resource subscriptions", {
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
        class eW extends Error {
            uri;
            code = -32602;
            name = "McpResourceNotSubscribableError";
            constructor(e) {
                super("MCP resource is not subscribable"), this.uri = e
            }
        }
        class eG extends Error {
            code = -32601;
            name = "McpResourceSubscriptionsUnavailableError";
            constructor() {
                super("MCP resource subscriptions are unavailable")
            }
        }
        var eH = n("zxca"),
            eB = n("XROL"),
            ez = n("DKJJ"),
            eV = n("vgfv"),
            e$ = n("Ztsm"),
            eX = n("Fm9E"),
            eY = n("P93s"),
            eJ = n("cqPu");
        let eK = C.object({
            code: C.number().optional(),
            message: C.string().min(1)
        }).loose();

        function eZ(e) {
            Promise.resolve(e).catch(() => void 0)
        }

        function eQ(e) {
            try {
                return e()
            } catch (e) {
                if (e instanceof Error) throw (0, eY.a)(e.message, c.q.InternalError);
                throw e
            }
        }

        function e0(e, t) {
            let n = eK.safeParse(e);
            return n.success ? (0, eY.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eY.a)(e.message, -32e3, e) : (0, eY.a)(t, -32e3, e)
        }
        var e1 = n("JXtc"),
            e2 = n("a4MG");
        async function e3(e) {
            let {
                scope: t,
                hostId: n,
                mcpServerStatuses: a,
                server: i,
                threadId: r,
                detail: o = "toolsAndAuthOnly"
            } = e, s = a?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === i
            }) ?? null;
            if (null == r && null != s) return s;
            let l = (null == r ? await (0, G.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(e2.o, {
                hostId: n,
                threadId: r,
                serverName: i,
                detail: o
            })).data.find(e => {
                let {
                    name: t
                } = e;
                return t === i
            }) ?? null;
            if (null == l) throw (0, eY.a)(`MCP server not found: ${i}`, -32e3);
            return l
        }

        function e5(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var e8 = n("cDR4"),
            e6 = n("ILnd"),
            e7 = n("fddy"),
            e4 = n("ntKy"),
            e9 = n("GaA7"),
            te = n("Sd8U"),
            tt = n("tSEg"),
            tn = n("hZax"),
            ta = n("jdxe"),
            ti = n("ripK"),
            tr = n("bIvi"),
            to = n("yyZv"),
            ts = n("hkUn"),
            tl = n("nKJ6"),
            tc = n("XXJV"),
            tu = n("uJ0o");
        let td = (0, y.i)(tt.a, (e, t) => {
            let {
                get: n,
                scope: a
            } = t;
            return (n(tu.b) ?? a).get(tc.f, e)
        }, (e, t) => {
            let {
                get: n,
                scope: a,
                set: i
            } = t;
            return (n(tu.b) ?? a).watch(t => {
                let {
                    get: n
                } = t;
                i(n(tc.f, e))
            })
        });

        function tp(e) {
            let t, n, a, i, r = (0, s.c)(24),
                {
                    panelTabId: o,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, y.y)(tt.a),
                p = (0, y.z)(tu.b) ?? d,
                m = (0, tn.h)("1146407612"),
                f = null != (0, y.x)(td, o);
            r[0] !== p ? (t = (0, tl.getThreadBrowserConversationId)(p), r[0] = p, r[1] = t) : t = r[1];
            let g = t;
            r[2] !== o || r[3] !== p ? (n = () => {
                let e = p.get(tc.f, o);
                null != o && null != e && (0, tc.activateThreadPanelTab)(p, e, o)
            }, r[2] = o, r[3] = p, r[4] = n) : n = r[4];
            let h = (0, x.useEffectEvent)(n);
            return r[5] !== g || r[6] !== m || r[7] !== f || r[8] !== o || r[9] !== h || r[10] !== l || r[11] !== c || r[12] !== p || r[13] !== u ? (a = () => {
                if (!m || !f || null == g || e9.appServices?.mcpAppSandbox == null) return;
                let e = (0, _.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = e9.appServices.mcpAppSandbox.registerBrowserTarget({
                    conversationId: g,
                    initId: e,
                    sandboxId: c,
                    title: u
                }, h, (e, t) => (async function(e, t, n) {
                    let a = new Image;
                    a.src = t, await a.decode();
                    let i = document.createElement("canvas");
                    i.width = a.naturalWidth, i.height = a.naturalHeight;
                    let r = i.getContext("2d", {
                        alpha: !1
                    });
                    if (null == r || !e.isConnected) throw Error("MCP App screenshot surface is unavailable.");
                    let o = [];
                    for (let t = e; null != t; t = t.parentElement) o.push(getComputedStyle(t).backgroundColor);
                    for (let e of (r.fillStyle = "Canvas", r.fillRect(0, 0, i.width, i.height), o.reverse())) r.fillStyle = e, r.fillRect(0, 0, i.width, i.height);
                    return r.drawImage(a, 0, 0), i.toDataURL("image/jpeg", n / 100).slice(23)
                })(l, e, t));
                t.catch(tf);
                let n = p.watch(e => {
                    let {
                        get: n
                    } = e, a = n(tc.f, o), i = !n(tt.j) && null != a && ("bottom" === a ? n(J.d) : n(J.i) && n(J.j)) && n((0, tc.getThreadPanelTabController)(a).visibleTabs$).some(e => {
                        let {
                            tab: t
                        } = e;
                        return t.tabId === o
                    });
                    t.setPresented(i).catch(tm)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, r[5] = g, r[6] = m, r[7] = f, r[8] = o, r[9] = h, r[10] = l, r[11] = c, r[12] = p, r[13] = u, r[14] = a) : a = r[14], r[15] !== g || r[16] !== m || r[17] !== f || r[18] !== o || r[19] !== l || r[20] !== c || r[21] !== p || r[22] !== u ? (i = [m, o, g, f, l, c, u, p], r[15] = g, r[16] = m, r[17] = f, r[18] = o, r[19] = l, r[20] = c, r[21] = p, r[22] = u, r[23] = i) : i = r[23], (0, x.useEffect)(a, i), null
        }

        function tm(e) {
            e_.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tf(e) {
            e_.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        let tg = "ui/openai/find",
            th = C.object({
                method: C.literal(tg),
                params: C.object({
                    enabled: C.boolean()
                })
            }),
            tb = C.object({
                method: C.literal("ui/notifications/openai/find"),
                params: C.object({
                    command: C.enum(["open", "next", "previous"])
                })
            });
        r = (0, ev._)(Symbol.dispose);
        class tv {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: i,
                    signal: r,
                    notify: o
                } = t, s = th.safeParse(e);
                if (!s.success || r.aborted || e9.appServices?.mcpAppSandbox == null || null == o || null == i) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = e9.appServices.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: i
                }, async e => n.ownerDocument.activeElement === n && (await o({
                    method: tb.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [r]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var ty = n("nlNF");

        function tw(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: i,
                    sandboxId: r
                } = e,
                o = (0, y.y)(Z.a),
                {
                    pathname: l,
                    search: c
                } = (0, A.W)(),
                u = (0, A.Y)();
            return a[0] !== u || a[1] !== l || a[2] !== i || a[3] !== r || a[4] !== o || a[5] !== c ? (t = () => {
                let e;
                if (e9.appServices?.mcpAppSandbox == null || ![w.Qc, w.Rc, w.ad, "/plugins/:pluginId/app/:toolName"].some(e => (0, A.I)(e, l))) return;
                let t = (0, w.Dg)(i.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = o.get(ty.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = e9.appServices.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: r,
                        initId: t
                    }, i => {
                        let p = i.entryIds[i.currentIndex];
                        if (null == p || e === p) {
                            e = void 0;
                            return
                        }
                        a = a.then(async () => {
                            let e = d();
                            if (n || null == e || "committed" !== i.reason) return;
                            let a = e.state?.mcpHistory;
                            if (a?.sandboxId === r && a.initId === t && a.entryId === p) return;
                            s = !0;
                            let m = i.previousEntryId ?? i.entryIds[i.previousIndex ?? -1],
                                f = o.get(ty.j),
                                g = Math.sign(i.currentIndex - (null == m ? i.currentIndex : i.entryIds.indexOf(m)));
                            if (null != f && 0 !== g)
                                for (let e = f.index + g; e >= 0 && e < f.entries.length; e += g) {
                                    let n = f.entries[e];
                                    if (n.pathname !== l || n.search !== c || n.state?.mcpHistory?.sandboxId !== r || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === p) return u(e - f.index)
                                }(a?.sandboxId !== r || a.initId !== t) && null != m && m !== p && (await u(e, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: r,
                                            initId: t,
                                            entryId: m
                                        }
                                    }
                                }), e = d(), n || null == e) || await u(e, {
                                    replace: i.didReplaceEntry || null == m || m === p,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: r,
                                            initId: t,
                                            entryId: p
                                        }
                                    }
                                })
                        }).finally(() => {
                            s = !1
                        })
                    }),
                    m = o.watch(a => {
                        let {
                            get: i
                        } = a;
                        i(ty.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            m = o.get(ty.j);
                        !s && c?.sandboxId === r && (c.initId === t || m?.entries.some(e => e.state?.mcpHistory?.sandboxId === r && e.state.mcpHistory.initId === t)) && (e = c.entryId, p.then(async a => {
                            if (!n && d()?.key === l?.key) {
                                let i = c.initId !== t ? "missing" : await a?.go(c.entryId);
                                "ok" !== i && e === c.entryId && (e = void 0), "missing" !== i || n || d()?.key !== l?.key || null == m || 0 === m.popDelta || await u(Math.sign(m.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, m(), p[Symbol.dispose]()
                }
            }, n = [l, c, i, r, o, u], a[0] = u, a[1] = l, a[2] = i, a[3] = r, a[4] = o, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, x.useEffect)(t, n), null
        }
        var tI = n("uWA4");
        let t_ = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tx = {
                insets: {
                    ...t_.insets,
                    top: 48
                }
            };

        function tS(e) {
            let {
                availableDisplayModes: t,
                containerDimensions: n,
                displayMode: a,
                locale: i,
                modelContextHostState: r,
                deepLink: o,
                safeAreaInsets: s,
                styleVariables: l,
                theme: c,
                userAgent: u,
                toolInfo: d
            } = e;
            return {
                "openai/interactionCursor": getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
                ...void 0 === r ? {} : {
                    [g.a]: r
                },
                ...null == o ? {} : {
                    [tI.a]: o
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
                locale: i,
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

        function tE(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tA() {
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
        var tM = n("VwGH"),
            tP = n("OM8g"),
            tT = n("on57"),
            tk = n("WSFD"),
            tR = n("fm8Z"),
            tj = n("IhIa");
        let tN = C.union([h.b, C.object({
                target: C.enum(["active", "new"]).optional(),
                send: C.literal(!1)
            }).strict()]),
            tD = h.c.extend({
                _meta: h.c.shape._meta.unwrap().extend({
                    "openai/message": tN.optional()
                }).optional()
            });

        function tO(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tj.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw Object.assign(Error("Unsupported MCP app content"), {
                    code: -32602
                })
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
        var tq = n("engp");
        let tU = (0, y.j)(te.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, i = a.get(ea.w).find(t => t.id === e && "context" === t.kind);
                return i?.modelContextUpdateId == null ? null : {
                    updateId: i.modelContextUpdateId,
                    content: i.content?.length ? i.content : void 0,
                    structuredContent: i.structuredContent
                }
            }, {
                isEqual: v()
            })
        });
        var tF = n("DNYL"),
            tW = n("ygO2"),
            tG = n("HOLv"),
            tH = n("X7AW");

        function tB(e) {
            let t, n, a, i, r, l, c, u = (0, s.c)(23),
                {
                    backLabel: d,
                    canGoBack: p,
                    canGoForward: m,
                    color: f,
                    forwardLabel: g,
                    onBack: h,
                    onForward: b,
                    radius: v
                } = e,
                y = void 0 === f ? "ghost" : f,
                w = p ? y : "ghost",
                I = !p;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(tG.a, {
                "aria-hidden": !1,
                asset: tH.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== h || u[3] !== v || u[4] !== w || u[5] !== I ? (n = (0, o.jsx)(tW.a, {
                "aria-label": d,
                color: w,
                disabled: I,
                onClick: h,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = h, u[3] = v, u[4] = w, u[5] = I, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, o.jsx)(tF.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let _ = m ? y : "ghost",
                x = !m;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, o.jsx)(tG.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tH.a
            }), u[10] = i) : i = u[10], u[11] !== g || u[12] !== b || u[13] !== v || u[14] !== _ || u[15] !== x ? (r = (0, o.jsx)(tW.a, {
                "aria-label": g,
                color: _,
                disabled: x,
                onClick: b,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: i
            }), u[11] = g, u[12] = b, u[13] = v, u[14] = _, u[15] = x, u[16] = r) : r = u[16], u[17] !== g || u[18] !== r ? (l = (0, o.jsx)(tF.a, {
                content: g,
                side: "bottom",
                children: r
            }), u[17] = g, u[18] = r, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, o.jsxs)(o.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tz(e) {
            let t, n, a, i, r, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: m,
                    onBack: f,
                    onForward: g
                } = e,
                h = (0, E.a)();
            u[0] !== h ? (t = h.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back",
                description: "Button label for moving to the previous page in an embedded MCP app's navigation history"
            }), u[0] = h, u[1] = t) : t = u[1];
            let b = t;
            u[2] !== h ? (n = h.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next",
                description: "Button label for moving forward to the next page in an embedded MCP app's navigation history; paired with the Back button"
            }), u[2] = h, u[3] = n) : n = u[3];
            let v = n;
            return u[4] !== d ? (a = (0, tT.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== f ? (i = e => {
                e.stopPropagation(), f()
            }, u[6] = f, u[7] = i) : i = u[7], u[8] !== g ? (r = e => {
                e.stopPropagation(), g()
            }, u[8] = g, u[9] = r) : r = u[9], u[10] !== b || u[11] !== p || u[12] !== m || u[13] !== v || u[14] !== i || u[15] !== r ? (l = (0, o.jsx)(tB, {
                backLabel: b,
                canGoBack: p,
                canGoForward: m,
                forwardLabel: v,
                onBack: i,
                onForward: r
            }), u[10] = b, u[11] = p, u[12] = m, u[13] = v, u[14] = i, u[15] = r, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, o.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tV,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tV(e) {
            return e.stopPropagation()
        }
        var t$ = n("taUf"),
            tX = n("BRrJ"),
            tY = n("C1SW"),
            tJ = n("Dx08"),
            tK = n("D7Ms"),
            tZ = n("JYRT"),
            tQ = n("OMIV"),
            t0 = n("Nh13");

        function t1(e) {
            if (null == e || "" === e) return null;
            try {
                return new URL(e.includes("://") ? e : `https://${e}`).hostname
            } catch {
                return null
            }
        }
        let t2 = (0, y.q)(Z.a, (e, t) => {
            let {
                identity: n,
                locale: a,
                widgetDomain: i
            } = e, r = !t.get(tQ.e, "3995005112") || t.get(tQ.d, "3995005112"), o = t.get(tZ.a, "455962425")?.value, s = o?.enable_endpoint_origins === !0, l = r ? [] : C.array(C.string()).catch([]).parse(o?.allowed_subdomains), c = t1(i), u = null != c && C.array(C.string()).catch([]).parse(o?.force_hashed_domains).includes(c), d = !s || "connector" !== n.kind || i && r && !u ? null : t.get(et, {
                appId: n.connectorId,
                accountId: n.accountId
            });
            return {
                queryKey: ["mcp-app-sandbox-config", n, a, i, s, r, l, u, d],
                queryFn: async e => {
                    let {
                        client: t
                    } = e, o = (await t5((0, tK.f)([n]))).slice(0, 48), c = "connector" === n.kind ? function(e) {
                        if (null == e || "" === e) return null;
                        let t = t1(e);
                        if (null == t) throw Error("Invalid MCP app widget domain.");
                        let n = t.replaceAll(".", "-");
                        if (n.startsWith("mcp-endpoint-")) throw Error("MCP app widget domain uses a reserved sandbox prefix.");
                        if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(n)) throw Error("MCP app widget domain does not map to a valid DNS label.");
                        return n
                    }(i) : null, p = null;
                    s && (null == c || u || !r && !l.includes(c)) && ("connector" === n.kind ? p = d ?? await async function(e, t, n) {
                        if (null == n) return null;
                        try {
                            let a = await (0, ee.a)(e, (0, ee.getHostedAppsContentQueriesOptions)({
                                accountId: n,
                                appIds: [t],
                                enabled: !0
                            }));
                            return a[0]?.mcp_server_url_hash ?? null
                        } catch {
                            return null
                        }
                    }(t, n.connectorId, n.accountId): "http" === n.kind && (p = (await t5(n.url)).slice(0, 32)));
                    let m = null == p ? c : null;
                    return {
                        sourceUrl: (0, _.f)({
                            environment: t3(),
                            locale: a,
                            scheme: "https",
                            subdomain: null != p ? `mcp-endpoint-${p}` : m ?? `mcp-app-${o}`
                        }),
                        partition: null == m && null == p ? _.b : (0, _.h)(`connection-${o}`, {
                            persist: !0
                        })
                    }
                },
                retry: !1,
                staleTime: 1 / 0
            }
        });

        function t3() {
            return "chatgpt-staging.com" === window.location.hostname || window.location.hostname.endsWith(".chatgpt-staging.com") ? "staging" : "production"
        }
        async function t5(e) {
            return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(e))), e => e.toString(16).padStart(2, "0")).join("")
        }
        var t8 = n("IWEP");
        let t6 = C.preprocess(function(e, t) {
            let n = new WeakSet,
                a = C.record(C.string(), C.unknown()),
                i = (e, r) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: r,
                        message: "Cyclic tool arguments"
                    }), t8.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => i(e, [...r, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...r, ...e.path]
                            });
                            return t8.e
                        }
                        return Object.fromEntries(Object.entries(n.data).filter(e => {
                            let [, t] = e;
                            return void 0 !== t
                        }).map(e => {
                            let [t, n] = e;
                            return [t, i(n, [...r, t])]
                        }))
                    } finally {
                        n.delete(e)
                    }
                };
            return i(e, [])
        }, C.record(C.string(), C.json()));

        function t7(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var t4 = n("n2Dd"),
            t9 = n("PkQL");
        let ne = C.preprocess(nn, C.record(C.string(), C.json())),
            nt = C.preprocess(nn, C.looseObject({
                ...l.e.shape.params.shape,
                content: C.array(t9.f).optional()
            }));

        function nn(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let na = ["resources/subscribe", "resources/unsubscribe"],
            ni = ["openai/events/subscribe", "openai/events/unsubscribe"],
            nr = C.json(),
            no = C.object({
                mode: C.enum(["inline", "fullscreen"])
            }),
            ns = C.object({
                linkToken: C.string().min(1),
                oauthStateId: C.string().min(1)
            }),
            nl = C.object({
                canGoBack: C.boolean(),
                canGoForward: C.boolean()
            }).loose(),
            nc = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            nu = C.object({
                blob: C.instanceof(Blob),
                name: C.string().trim().min(1)
            }).strip(),
            nd = C.looseObject({
                [c.S]: c.V.optional(),
                progressToken: c.Q.optional()
            }),
            np = C.object({
                name: C.string().min(1),
                arguments: t6.optional(),
                _meta: nd.optional()
            }).loose(),
            nm = C.object({
                uri: C.string().min(1)
            }).loose(),
            nf = C.object({
                arguments: C.record(C.string(), nr).optional(),
                name: C.string().regex(/\S/),
                subscriptionId: C.uuid()
            }),
            ng = C.object({
                subscriptionId: C.uuid()
            }),
            nh = C.number().positive(),
            nb = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nv(e) {
            let t, n, a, i = (0, s.c)(9),
                {
                    isAccessRevoked: r,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== r && r,
                d = void 0 === l || l,
                p = (0, y.y)(tt.a),
                m = (0, y.x)(eA.r, c);
            return i[0] !== p || i[1] !== c ? (t = () => {
                let e, t, n, a, i, r, o, s, l, u;
                return n = !1, a = !1, i = null, r = () => {
                    clearTimeout(t), t = void 0
                }, o = e => {
                    if (a = e, r(), a) {
                        i = null, (0, eA.D)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == i && (i = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (e_.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, eA.D)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - i)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && o(n.isIntersecting)
                }), u = p.watch(t => {
                    let {
                        get: u
                    } = t;
                    u(ty.c);
                    let d = u(eA.r, c),
                        m = null == d ? null : u(eA.j, d.sourceMcpAppId),
                        f = m?.hostedInThreadScrollLayout === !0 && !m.content.fullSurface && d?.displayMode === "inline" && null == u($.j.tabById$, (0, ta.b)(c)),
                        g = (0, ty.g)(p),
                        h = f ? m.inlineFrameContainer : void 0;
                    f && !g && (h = null), (e !== h || n !== g) && (n = g, s(l.takeRecords()), l.disconnect(), r(), void 0 === (e = h) ? (a = !1, i = null, (0, eA.D)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === h && o(a && !(0, ty.g)(p))
                    }) : l.observe(e))
                }), () => {
                    e = void 0, u(), l.disconnect(), r()
                }
            }, n = [p, c], i[0] = p, i[1] = c, i[2] = t, i[3] = n) : (t = i[2], n = i[3]), (0, x.useEffect)(t, n), i[4] !== d || i[5] !== m || i[6] !== u || i[7] !== c ? (a = null == m ? null : (0, o.jsx)(nw, {
                sessionId: c,
                frameState: m,
                sourceMcpAppId: m.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), i[4] = d, i[5] = m, i[6] = u, i[7] = c, i[8] = a) : a = i[8], a
        }

        function ny(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, o.jsx)(nv, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function nw(e) {
            let t, n, a, i, r, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: m,
                    frameState: f,
                    isAccessRevoked: g,
                    allowGlobalHost: h
                } = e,
                b = (0, y.y)(tt.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eX.b)(), d[0] = t) : t = d[0];
            let v = (0, tn.h)(t),
                w = (0, y.x)(to.b, m),
                I = g || w,
                _ = (0, y.x)(eA.j, m),
                S = _?.content ?? null,
                E = S?.mcpAppHostAdapter?.retain;
            d[1] !== b || d[2] !== p ? (n = () => (0, tX.b)(b, p), a = [b, p], d[1] = b, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, x.useLayoutEffect)(n, a), d[5] !== E || d[6] !== b || d[7] !== m ? (i = () => E?.(b, m), r = [E, b, m], d[5] = E, d[6] = b, d[7] = m, d[8] = i, d[9] = r) : (i = d[8], r = d[9]), (0, x.useLayoutEffect)(i, r);
            let A = (0, y.x)(B.d, S?.resourceIdentity ?? null);
            if (d[10] !== A || d[11] !== _ || d[12] !== b || d[13] !== I || d[14] !== m ? (l = () => {
                    null != _ && (I || "changed" === A) && (e_.a.info("Revoked app sandbox registration", {
                        safe: {
                            shouldRemoveFrame: I,
                            identityStatus: A,
                            mcpAppId: _.sessionId,
                            sourceMcpAppId: m
                        }
                    }), (0, eA.z)(b, m))
                }, c = [m, _, b, I, A], d[10] = A, d[11] = _, d[12] = b, d[13] = I, d[14] = m, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, x.useLayoutEffect)(l, c), !v || I || f.isSuspended || nx(f.sandboxError) || null == _ || null == S || "current" !== A) return null;
            let C = (0, eR.c)(S);
            if (C && (null == S.toolResult || null != S.toolCallStatus)) return null;
            let M = C ? nI : n_;
            return d[17] !== M || d[18] !== h || d[19] !== S || d[20] !== f || d[21] !== _.hostedInThreadScrollLayout || d[22] !== _.inlineFrameContainer || d[23] !== p || d[24] !== m ? (u = (0, o.jsx)(M, {
                ...S,
                resource: S.resource,
                hostedInThreadScrollLayout: _.hostedInThreadScrollLayout,
                inlineFrameContainer: _.inlineFrameContainer,
                allowGlobalHost: h,
                sessionId: p,
                sourceMcpAppId: m,
                frameState: f
            }, f.sandboxGeneration), d[17] = M, d[18] = h, d[19] = S, d[20] = f, d[21] = _.hostedInThreadScrollLayout, d[22] = _.inlineFrameContainer, d[23] = p, d[24] = m, d[25] = u) : u = d[25], u
        }

        function nI(e) {
            let t, n, a = (0, s.c)(5),
                i = (0, y.y)(tt.a);
            return a[0] !== i ? (t = (e, t) => (0, e4.installPlugin)(i, e, t), a[0] = i, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, o.jsx)(n_, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function n_(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: i,
                conversationId: r,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: b,
                pluginId: O,
                fullSurface: q,
                modalOpen: F = !1,
                hostScroll: K = !1,
                hostDisplayModes: Q,
                hostId: ee,
                hostedInThreadScrollLayout: ev,
                resourceIdentity: ey,
                inheritHostBackground: eI = !1,
                installPlugin: ej,
                inlineFrameContainer: eN,
                allowGlobalHost: eO,
                sessionId: eU,
                sourceMcpAppId: eW,
                mcpAppScope: eG,
                sourceName: eX,
                mcpServerStatuses: eK,
                mcpAppHostAdapter: e2,
                getNewThreadDestination: e4,
                widgetStatePersistence: tn,
                plaidAccountId: to,
                deepLink: tl,
                rightPanelLayoutTick: tc,
                resolveResourceWatchPath: td,
                server: tm,
                appIcon: tf,
                sidePanelTitle: th,
                title: tb,
                globalSurface: ty = !1,
                toolArguments: tI,
                toolResult: tj,
                toolResultNotification: tN,
                toolCallStatus: tF,
                toolCallCancellationReason: tW,
                viewParamsOverride: tG,
                frameState: tH
            } = e, tB = (0, y.y)(tt.a), tV = (0, y.y)(Z.a), tX = (0, x.useEffectEvent)(() => tB), {
                csp: tY,
                fitWidth: tK,
                html: tZ,
                widgetDomain: tQ
            } = a, t1 = a.prefersBorder && !e2?.hideFrameBorder, t5 = "connector" === ey.identity.kind ? ey.identity.connectorId : null, t8 = null != t, t6 = (0, x.useEffectEvent)(() => t?.get(er.a)?.updatePrompt != null), t9 = !t8 || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nn = (0, y.x)(H.d, ee), nr = (0, y.x)(H.hc, {
                hostId: ee,
                threadId: r
            }), nd = null != nr && "notLoaded" !== nr.type, nv = !(0, M.e)(tm) && tY?.connectDomains.some(e => (0, e1.c)(new URL(e).hostname)) === !0, nw = (0, ts.a)(ey, i), {
                httpOrigin: nI
            } = ey.identity, n_ = null != nI ? new URL(nI) : null;
            void 0 === nI && "http" === ey.identity.kind && (n_ = new URL(ey.identity.url));
            let nS = e2?.sandboxFeatures?.join(";"),
                nE = e2?.sandboxFeatures?.includes("local-network-access") === !0 || (0, e1.e)(tY) || nv && n_?.protocol === "https:" && (0, e1.c)(n_.hostname),
                nA = (0, E.a)(),
                nC = (0, A.Y)(),
                nM = t?.value.kind === "chatgpt" && null != t.value.conversationId && r === `chatgpt:${t.value.conversationId}`,
                nP = r.startsWith("chatgpt:") ? "chatgpt" : "codex",
                nT = (0, y.z)(t?.get(tU, eU) ?? null),
                nk = (0, x.useEffectEvent)(() => t?.get(tU, eU).get() ?? null),
                nR = (0, y.z)($.j.activeTab$),
                nj = (0, y.z)(J.g),
                nN = (0, y.z)(tu.a),
                nD = (0, y.z)(eT.a),
                nO = nD["--color-background-primary"],
                {
                    isWidgetReady: nL
                } = tH,
                nq = (0, eA.g)(tH),
                nU = !q && "fullscreen" === nq,
                nF = (0, eA.f)(tH),
                nW = q && eO,
                nG = (0, x.useRef)(!1),
                nH = (0, x.useRef)(null),
                nB = (0, x.useRef)(null),
                nz = (0, x.useRef)(null),
                nV = (0, x.useRef)(null),
                n$ = (0, y.x)(eA.i, eU),
                nX = (0, x.useRef)(null),
                nY = (0, x.useRef)(null),
                nJ = e => {
                    if (!(0, M.e)(tm)) return null;
                    let t = tB.get(eA.j, eW);
                    if (null == t) return null;
                    let n = t.content.mcpAppScope.codexAppsToolScope;
                    if (void 0 !== n) return n;
                    let a = (0, eL.d)({
                        appContext: eG.appContext,
                        invocationResourceUri: eG.invocationResourceUri,
                        originTool: eG.originTool,
                        originToolDefinition: e.tools[eG.originTool],
                        server: tm,
                        tools: e5(e)
                    });
                    tB.set(eA.k, e => {
                        let t = e.get(eW);
                        if (null == t) return e;
                        let {
                            content: n
                        } = t;
                        if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                        let i = new Map(e);
                        return i.set(eW, {
                            ...t,
                            content: {
                                ...n,
                                mcpAppScope: {
                                    ...n.mcpAppScope,
                                    codexAppsToolScope: a
                                }
                            }
                        }), i
                    });
                    let i = tB.get(eA.j, eW)?.content.mcpAppScope.codexAppsToolScope;
                    return void 0 === i ? null : i
                },
                [nK, nZ] = (0, x.useState)(null),
                [nQ, n0] = (0, x.useState)(null),
                [n1, n2] = (0, x.useState)(!1),
                [n3, n5] = (0, x.useState)(null),
                [n8, n6] = (0, x.useState)(null),
                n7 = n8?.api ?? null,
                n4 = n8?.widgetId ?? null,
                n9 = (0, tr.a)(e => td?.(e) ?? null),
                ae = (0, M.e)(tm) && (0, w.Eh)(nn, "mcpEventStream"),
                at = (0, x.useMemo)(() => new eF({
                    scope: tV,
                    hostId: ee,
                    mcpAppId: eU,
                    originResourceUri: eG.originResourceUri,
                    resolveResourceWatchPath: n9,
                    server: tm
                }), [tV, ee, eU, eG.originResourceUri, n9, tm]),
                an = (0, x.useMemo)(() => new eD({
                    scope: tV,
                    hostId: ee,
                    server: tm
                }), [tV, ee, tm]),
                [aa, ai] = (0, x.useState)(nb),
                ar = null != t5 && nc.has(t5),
                ao = ar && null != n7 && (aa.canGoBack || aa.canGoForward),
                {
                    cancel: as,
                    confirmation: al,
                    confirm: ac,
                    request: au
                } = (0, eC.a)(eP.a),
                ad = e2?.viewerHeader === !0,
                ap = e2?.forwardedRequestMethods,
                am = ap?.join(";") || void 0,
                af = JSON.stringify(e2?.experimentalCapabilities),
                ag = e2?.openFile,
                ah = (0, y.z)(tt.j),
                ab = (0, y.x)(W.a, {
                    name: "codex.browser"
                }),
                av = !ah && ab.isCapable,
                ay = av || t8 && t9,
                aw = !ah && (void 0 === ag ? (0, w.pi)((0, eS.a)(tV, ee)) : null != ag),
                aI = null != e2,
                a_ = e2?.expectedReadySignal,
                ax = e2?.pluginSuggestions != null,
                aS = !0 === eG.isVerifiedFirstParty,
                aE = e2?.displayMode === "modal",
                aA = (0, x.useEffectEvent)(() => e2),
                aC = e2?.onRequestClose != null || ev,
                aM = function(e) {
                    let {
                        adapter: t,
                        server: n,
                        connectorId: a,
                        widgetScope: i
                    } = e;
                    return (0, M.e)(n) && "connector_openai_olympic" === a && "internal://olympic" === i.originResourceUri && !0 === i.isVerifiedFirstParty ? t?.olympic : void 0
                }({
                    adapter: e2,
                    server: tm,
                    connectorId: t5,
                    widgetScope: eG
                }),
                aP = null != aM,
                aT = aM?.requestTargetedReply != null || e2?.setTargetedReply != null || e2?.requestTargetedReply != null,
                ak = aP || e2?.showToast != null,
                aR = (0, x.useEffectEvent)(() => aM),
                aj = (0, x.useEffectEvent)(e => aM?.viewMode ?? e2?.displayMode ?? e),
                aN = function(e) {
                    let {
                        adapter: t,
                        server: n,
                        connectorId: a,
                        widgetScope: i
                    } = e;
                    return (0, M.e)(n) && a === eg.a && ("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts")) && !0 === i.isVerifiedFirstParty ? t?.finance : void 0
                }({
                    adapter: e2,
                    server: tm,
                    connectorId: t5,
                    widgetScope: eG
                }),
                aD = e2?.requestCheckout != null,
                aO = e2?.openConversationOverlay != null,
                aL = e2?.openPromptInput != null,
                aq = e2?.autofill != null,
                aU = e2?.openInApp != null,
                aF = aU && e2?.openInApp?.hideButton !== !0 && e2?.openInApp?.baseUrl != null && null !== tH.openInAppUrl,
                aW = e2?.presentation != null,
                aG = e2?.presentation?.requestFocusedObject != null,
                aH = e2?.presentation?.requestCloseFocusedObject != null,
                aB = e2?.presentation?.isSidebarOpen === !0,
                az = e2?.downloadBlob != null,
                aV = e2?.triggerHaptic != null,
                a$ = e2?.files != null,
                aX = e2?.share != null,
                aY = e2?.requestConnectSheet != null,
                aJ = e2?.requestReconnectConnector != null,
                aK = e2?.requestLinkToConnector != null,
                aZ = e2?.isTombstone === !0,
                aQ = (0, x.useEffectEvent)(() => aN),
                a0 = function(e, t) {
                    let {
                        server: n,
                        connectorId: a,
                        widgetScope: i,
                        conversationId: r
                    } = t, {
                        originResourceUri: o
                    } = i;
                    if ((0, M.e)(n) && "connector_openai_ads_manager" === a && (!0 === i.isVerifiedFirstParty || !0 === i.resourceIdentityVerified) && ("internal://ads-manager" === o || "internal://ads-manager-account-setup" === o || "internal://ads-manager-delivery" === o)) return {
                        sendInstrument: t => (function(e, t, n) {
                            let {
                                conversationId: a,
                                originResourceUri: i
                            } = n;
                            ! function(e, t, n) {
                                let a = j.safeParse(t);
                                if (a.success) {
                                    let t = a.data;
                                    if (new Set(t.tags.map(e => {
                                            let {
                                                key: t
                                            } = e;
                                            return t
                                        })).size !== t.tags.length) return;
                                    let i = Object.fromEntries(t.tags.map(e => {
                                        let {
                                            key: t,
                                            value: n
                                        } = e;
                                        return [t, n]
                                    }));
                                    if ("payment_elements_stage" === t.label) {
                                        let n = N.safeParse(i);
                                        "count" === t.type && n.success && e.get(T.a).count("payments", "payment_elements_stage", n.data)
                                    } else {
                                        let a = D.safeParse(i);
                                        if (!a.success) return;
                                        let {
                                            failure_category: r,
                                            ...o
                                        } = a.data, s = {
                                            attribution_id: "connector_openai_ads_manager",
                                            name: n,
                                            client_type: "browser"
                                        }, l = e.get(T.a);
                                        if ("ads_billing_client_phase" === t.label && "count" === t.type) {
                                            let e = {
                                                ...o,
                                                ..."error" === a.data.outcome && r ? {
                                                    failure_category: r
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
                            }(e, t, i);
                            let r = U.safeParse(t);
                            if (!r.success) return;
                            let o = r.data,
                                s = "browser";
                            if ("event" === o.type) {
                                let {
                                    eventType: t,
                                    requiredField: n
                                } = L[o.label], i = o.payload;
                                if (!i[n]) return;
                                (0, k.a)(e, P, {
                                    eventType: t,
                                    widget: i.widget,
                                    viewSessionId: i.view_session_id,
                                    view: i.view,
                                    action: i.action,
                                    outcome: i.outcome,
                                    step: i.step,
                                    source: i.source,
                                    billingStatus: i.billing_status,
                                    logoStatus: i.logo_status,
                                    accountReviewStatus: i.account_review_status,
                                    attentionReason: i.attention_reason,
                                    billingRecovery: i.billing_recovery,
                                    billingInSidebar: i.billing_in_sidebar,
                                    logoHandoffFailed: i.logo_handoff_failed,
                                    stepNumber: i.step_number,
                                    stepCount: i.step_count,
                                    previewKind: i.preview_kind,
                                    reason: i.reason,
                                    position: i.position,
                                    page: i.page,
                                    pageCount: i.page_count,
                                    pageSize: i.page_size,
                                    totalCount: i.total_count,
                                    nextPage: i.next_page,
                                    host: "codex",
                                    clientType: s,
                                    conversationId: a.replace(/^chatgpt:/, "")
                                });
                                return
                            }
                            let l = Object.entries(R).flatMap(e => {
                                    let [t, n] = e, a = o.tags.find(e => e?.key === t), i = C.enum(n).safeParse(a?.value);
                                    return i.success ? [{
                                        key: t,
                                        value: i.data
                                    }] : []
                                }),
                                {
                                    requiredField: c
                                } = L[o.label],
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
                                name: i,
                                client_type: s
                            };
                            e.get(T.a).count("ecosystem", o.label, d)
                        })(e, t, {
                            conversationId: r,
                            originResourceUri: o
                        })
                    }
                }(tB, {
                    server: tm,
                    connectorId: t5,
                    widgetScope: eG,
                    conversationId: r
                }),
                a1 = (0, x.useEffectEvent)(() => a0),
                a2 = null != to && (0, M.e)(tm) && aI && t5 === eg.a,
                a3 = (0, x.useMemo)(() => null != tI && "object" == typeof tI ? tI : null, [tI]),
                a5 = (0, x.useMemo)(() => null == tj ? null : (0, ez.f)({
                    isCodexAppsServer: (0, M.e)(tm),
                    toolResult: tj
                }), [tm, tj]),
                a8 = (0, x.useMemo)(() => null == a5 ? null : (0, e8.b)(a5), [a5]),
                a6 = void 0 === tG ? a8 : tG,
                a7 = (0, x.useEffectEvent)(() => a6),
                a4 = (0, x.useMemo)(() => null == a5 ? null : (0, ez.g)({
                    toolResult: a5
                }), [a5]),
                a9 = (0, x.useMemo)(() => tN ?? (0, e8.a)(a5, {
                    preserveStructuredContentNull: e2?.preserveStructuredContentNull
                }), [e2?.preserveStructuredContentNull, tN, a5]),
                ie = tF ?? (a9?.isError === !0 ? "error" : void 0),
                it = (0, x.useMemo)(() => null == ie ? a4 : {
                    ...a4,
                    status: ie
                }, [ie, a4]),
                ia = (0, x.useEffectEvent)(() => ({
                    sourceMcpAppId: eW,
                    toolInput: a3,
                    toolOutput: a8,
                    toolResponseMetadata: it,
                    toolStatus: ie,
                    toolResult: a5,
                    toolResultNotification: a9,
                    toolCallCancellationReason: tW
                })),
                ii = (0, x.useEffectEvent)(e => null == ej || null != ie ? null : (0, eR.a)({
                    scope: tB,
                    conversationId: r,
                    hostId: ee,
                    installPlugin: ej,
                    mcpAppScope: eG,
                    navigate: nC,
                    resourceIdentity: ey,
                    server: tm,
                    sessionId: eU,
                    sourceMcpAppId: eW,
                    toolResult: e
                })),
                {
                    data: ir,
                    error: io
                } = (0, y.x)(t2, {
                    identity: ey.identity,
                    locale: nA.locale,
                    widgetDomain: tQ
                }),
                is = ir?.sourceUrl,
                il = ir?.partition,
                ic = (0, x.useMemo)(() => {
                    let e;
                    if (null == is) return null;
                    let t = (e = new URL(is), `source-${(0,t0.a)(`${e.protocol}//${e.host}`)}`);
                    return nE ? `local-network-${t}` : t
                }, [nE, is]),
                iu = (0, x.useEffectEvent)(() => {
                    if (null == is) return null;
                    let e = (0, _.i)(is);
                    return null == e ? null : {
                        csp: tY,
                        experimentalCapabilities: e2?.experimentalCapabilities,
                        html: tZ,
                        locale: nA.locale,
                        sandboxOrigin: e,
                        sourceUrl: is
                    }
                }),
                id = n3?.isConnected === !0 ? n3 : null,
                ip = eN?.isConnected === !0 ? eN : null,
                im = null != ip || null != id,
                ig = !nU && !q && eN?.dataset.mcpAppInlineSurface === "card",
                ih = "iframe",
                ib = "function" == typeof nK?.moveBefore,
                iv = F && ib,
                iy = !nU && (!q && K || ip?.closest(".thread-scroll-container") != null),
                iw = eO && !iy && (ib || !ev),
                iI = iw ? null : ip?.closest("[data-mcp-app-portal-target='true']") ?? (!ib && nK?.isConnected ? nK.parentElement : null),
                i_ = ib || iw ? nK : iI,
                ix = (0, x.useEffectEvent)(e => {
                    let t = tE(e, q, nU ? "fullscreen" : "inline");
                    return !q && "inline" === nq && tK && ip?.parentElement != null && (t.maxWidth = ip.parentElement.clientWidth), {
                        containerDimensions: t
                    }
                }),
                iS = (0, x.useEffectEvent)(() => {
                    (0, eb.c)(tX(), {
                        hostId: ee,
                        pluginId: O,
                        server: tm
                    }, eU)
                }),
                iE = (0, x.useEffectEvent)(() => ({
                    safe: {
                        connectorId: t5,
                        mcpAppId: eU,
                        sandboxId: ic,
                        initId: (0, _.g)(nQ?.getAttribute("src") ?? void 0)
                    },
                    sensitive: {
                        hostId: ee,
                        server: tm
                    }
                })),
                iA = (0, x.useEffectEvent)(e => {
                    (0, k.a)(tB, u.o, {
                        attributionId: t5 ?? void 0,
                        conversationId: "chatgpt" === nP ? r.slice(8) : void 0,
                        host: "chatgpt" === nP ? "chatgpt" : void 0,
                        errorSource: e,
                        wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                    })
                }),
                iC = (0, x.useEffectEvent)((e, t) => {
                    if (nx(tX().get(eA.r, eU)?.sandboxError)) return;
                    let n = (0, eJ.a)(t),
                        a = iE();
                    e_.a.warning("Failed to initialize app sandbox", {
                        safe: {
                            conversationSurface: nP,
                            retryCount: tH.sandboxGeneration,
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
                    }), nV.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), (0, eA.D)(tX(), eU, {
                        isWidgetReady: !1,
                        sandboxError: "configuration" === e && t instanceof Error ? t : Error("The MCP app sandbox failed to load.")
                    })
                }),
                iM = (0, x.useEffectEvent)(e => {
                    let t = nh.safeParse(e);
                    t.success && tB.get(eA.r, eU)?.displayMode === "inline" && (0, eA.D)(tB, eU, {
                        intrinsicHeight: t.data
                    })
                }),
                iP = (0, x.useEffectEvent)(e => {
                    let t = nh.safeParse(e);
                    tK && t.success && (0, eA.D)(tB, eU, {
                        intrinsicWidth: t.data
                    })
                }),
                iT = (0, x.useEffectEvent)(e => {
                    if (!ar) return;
                    let t = nl.safeParse(e);
                    t.success && ai({
                        canGoBack: t.data.canGoBack,
                        canGoForward: t.data.canGoForward
                    })
                }),
                ik = (0, x.useEffectEvent)(() => ev ? void(0, eA.c)(tB, eU) : e2?.onRequestClose?.()),
                iR = (0, x.useEffectEvent)(async (e, n) => {
                    if (e2?.openExternal != null && await e2.openExternal(e, n)) return;
                    let a = eB.c.safeParse(e);
                    if (a.success) {
                        if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eG.isVerifiedFirstParty) return void(0, eV.a)(tB, a.data.href);
                        if ("popup" !== a.data.openMode && e2?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? tB, a.data.href, n)) return;
                        let e = (0, w.tj)(a.data.href);
                        if (null != e) return void nC(e);
                        (0, em.f)({
                            href: a.data.href,
                            initiator: "mcp_app_resource",
                            openTarget: e2?.displayMode === "modal" ? "external-browser" : void 0
                        })
                    }
                }),
                ij = (0, x.useEffectEvent)(async (e, t) => {
                    if (!a2 || null == to) throw Error("Plaid Link is unavailable for this app");
                    let n = ns.parse(e),
                        {
                            openPersonalFinancePlaidLinkFromWidget: a
                        } = await (0, eh.a)();
                    return a(tB, {
                        accountId: to,
                        linkToken: n.linkToken,
                        oauthStateId: n.oauthStateId,
                        signal: t
                    })
                }),
                iN = (0, x.useEffectEvent)((e, t, n) => (async function(e, t) {
                    let {
                        mcpAppId: n,
                        requestModal: a,
                        payload: i,
                        signal: r,
                        accountId: o,
                        frameAccountId: s
                    } = t;
                    if (null == a) throw Error("Finance account linking is unavailable");
                    if (!r.aborted && s === o && e.get(eE.f) === o && await a(i, r) && !r.aborted && e.get(eE.f) === o) {
                        let t = e.get(eA.r, n);
                        if (null == t) return;
                        (0, eA.D)(e, n, {
                            sandboxGeneration: t.sandboxGeneration + 1
                        })
                    }
                })(tB, {
                    mcpAppId: eU,
                    requestModal: aN?.requestModal,
                    payload: e,
                    signal: t,
                    accountId: to,
                    frameAccountId: n
                })),
                iD = (0, x.useEffectEvent)(e => (function(e) {
                    let {
                        composerOverlayReservePx: t,
                        displayMode: n,
                        hasComposerOverlay: a,
                        hostAdapter: i,
                        showNavigationControls: r
                    } = e;
                    if (i?.displayMode === "modal") return !1 !== i.showModalCloseButton || r ? tx : t_;
                    let o = "inline" === n && r ? tx : t_;
                    return ("inline" !== n || a) && 0 !== t ? {
                        insets: {
                            ...o.insets,
                            bottom: t
                        }
                    } : o
                })({
                    composerOverlayReservePx: nN,
                    displayMode: q ? "inline" : e,
                    hasComposerOverlay: nW,
                    hostAdapter: aA(),
                    showNavigationControls: ao
                })),
                iO = (0, x.useEffectEvent)(() => {
                    let e = tB.get(eA.r, eU) ?? tH;
                    return {
                        displayMode: e.displayMode,
                        availableDisplayModes: e.availableDisplayModes ?? Q
                    }
                }),
                iL = (0, x.useEffectEvent)(e => {
                    let t = (0, eA.h)(tB, eU, e);
                    if (null == t) throw Error("The app has no supported display mode");
                    return {
                        ...iO(),
                        safeAreaInsets: iD(t).insets
                    }
                }),
                iq = (0, x.useEffectEvent)(e => {
                    let t = no.safeParse(e),
                        n = tB.get(eA.r, eU);
                    if (t.success && (0, eA.a)(n, t.data.mode)) {
                        let n = !q && "fullscreen" === t.data.mode,
                            a = t.data.mode;
                        if (n && !nU && nK?.style.setProperty("display", "none"), aW && (0, eA.D)(tB, eU, {
                                displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                            }), (0, eA.B)(tB, eU, a, "app_request"), null != n7 && null != n4) {
                            let e = {
                                displayMode: a,
                                isTombstone: aA()?.isTombstone === !0,
                                viewParams: a6,
                                widgetId: n4
                            };
                            nH.current = e, eZ(n7.setWidgetView(e));
                            let t = null == nK ? null : tS({
                                ...iO(),
                                containerDimensions: tE(nK, q, a),
                                locale: nA.locale,
                                deepLink: tl,
                                safeAreaInsets: iD(a).insets,
                                styleVariables: nD,
                                theme: tA(),
                                userAgent: tC(aA()?.device),
                                toolInfo: aA()?.toolInfo
                            });
                            nB.current = t, null != t && eZ(n7.notifyMcpAppsHostContext({
                                hostContext: t
                            }))
                        }
                        return {
                            mode: a
                        }
                    }
                    return e_.a.debug("Ignored app display mode request", {
                        safe: {
                            validRequest: t.success,
                            requestedDisplayMode: t.success ? t.data.mode : void 0,
                            displayMode: n?.displayMode,
                            availableDisplayModes: n?.availableDisplayModes,
                            mcpAppId: eU,
                            sourceMcpAppId: n?.sourceMcpAppId
                        }
                    }), {
                        mode: (0, eA.f)(n ?? tH)
                    }
                }),
                iU = (0, x.useEffectEvent)(() => tl),
                iF = (0, x.useEffectEvent)(() => tB.get(eA.i, eU)),
                iW = (0, x.useEffectEvent)(() => {
                    var e;
                    e = tf ?? void 0, null != t && (0, ei.h)(t, eU, e)
                });
            (0, x.useEffect)(() => {
                iW()
            }, [eU, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl]);
            let iG = (0, x.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tB.get(eA.r, eU)?.sourceMcpAppId !== eW) return;
                    let a = (null != tn ? ne.nullable() : ne).safeParse(t),
                        i = a.success ? a.data : null;
                    if (tB.set(eA.w, eU, i), null != tn && a.success) return tn.save(a.data, n)
                }),
                iH = e => {
                    null != n7 && eZ(n7.navigate({
                        delta: e
                    }))
                },
                iB = {
                    name: null != e2 ? eG.originResourceUri ?? eG.originTool : `${tm}.${eG.originTool}`,
                    attribution: "connector" === ey.identity.kind ? ey.identity.connectorId : void 0
                },
                iz = (0, x.useEffectEvent)(e => {
                    let n = (0, ed.getMcpAppSubmit)(t, () => aA()?.assertActive?.());
                    return null == n ? null : (t, a) => n(t, iB, e, a)
                }),
                iV = async function(e, t, n, a, i, r) {
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tq.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: r,
                        modelContextAttachments: o,
                        requestConfirmation: e => au({
                            imageUrls: e.imageAttachments.map(e => {
                                let {
                                    src: t
                                } = e;
                                return t
                            }),
                            prompt: e.prompt,
                            title: i
                        })
                    })
                }, i$ = (0, x.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eY.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let i = (a = aR(), n.aborted || a && ek.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != i) return i;
                    n.throwIfAborted();
                    let {
                        context: r,
                        prompt: o,
                        title: l
                    } = (0, eP.b)(e), u = iz(n);
                    if (null == u) throw (0, eY.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let d = t.get(ea.w).filter(e => "context" === e.kind),
                        p = crypto.randomUUID(),
                        m = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await iV({
                            source: "mcp_app",
                            sourceId: eU,
                            widgetSource: eG.widgetSource,
                            text: o,
                            structuredContent: r ?? (0, e$.b)(iF())
                        }, o, u, n, l, void 0, d)
                    } catch (e) {
                        throw m?.({
                            attemptId: p,
                            result: "FAILED",
                            durationMs: performance.now() - f
                        }, r), e
                    }
                    m?.({
                        attemptId: p,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - f
                    }, r), (0, ei.b)(t, d)
                }), iX = e => {
                    if (e.throwIfAborted(), "current" !== tB.get(B.d, ey)) throw Error("MCP app connection identity changed");
                    e2?.assertActive?.()
                }, iY = async (e, t, n, a) => (iX(t), null != e2) ? e2.handleRequest(e, t, eG, n) : a(), iJ = async (e, t, n) => {
                    let a = await iY({
                        method: "tools/call",
                        params: e
                    }, t, n, () => (async function(e) {
                        let {
                            appScope: t,
                            scope: n,
                            chatGptMessageId: a,
                            conversationId: i,
                            getTrustedToolScope: r,
                            hostId: o,
                            mcpAppId: s,
                            mcpServerStatuses: l,
                            resourceIdentity: c,
                            server: u,
                            signal: d,
                            toolCallParams: p
                        } = e, m = await async function(e) {
                            let {
                                scope: t,
                                getTrustedToolScope: n,
                                hostId: a,
                                mcpServerStatuses: i,
                                server: r,
                                threadId: o,
                                toolArguments: s,
                                toolName: l
                            } = e, c = await e3({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: i,
                                server: r,
                                threadId: o
                            }), u = e5(c), d = n(c);
                            return {
                                ...eQ(() => (0, eL.h)({
                                    server: r,
                                    toolArguments: s,
                                    toolScope: d,
                                    toolName: l,
                                    tools: u
                                })),
                                serverStatus: c
                            }
                        }({
                            scope: n,
                            getTrustedToolScope: r,
                            hostId: o,
                            mcpServerStatuses: l,
                            server: u,
                            threadId: n.get(z.b, {
                                hostId: o,
                                conversationId: i
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        }), f = function(e, t) {
                            if (!(0, M.e)(e) || !t7(t)) return t;
                            let n = {
                                ...t
                            };
                            return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                        }(u, p._meta), g = null == m.codexAppsResourceUri ? f : {
                            ...t7(f) ? f : {},
                            _codex_apps: {
                                resource_uri: m.codexAppsResourceUri
                            }
                        };
                        try {
                            let e = (0, en.a)({
                                scope: t,
                                chatGptConversation: i.startsWith("chatgpt:") ? {
                                    id: i.slice(8),
                                    messageId: a ?? null
                                } : void 0,
                                toolIdentity: m.codexAppsToolIdentity,
                                resourceIdentity: c,
                                signal: d,
                                toolArguments: p.arguments ?? {}
                            });
                            if (null != e) return await e;
                            if (i.startsWith("chatgpt:")) return (0, ez.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: await (0, e6.b)(t, o, u, m.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: g,
                                    requestOptions: {
                                        widget: {
                                            conversationId: i,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let r = await (0, G.b)(n, o).callMcpTool({
                                threadId: i,
                                server: u,
                                tool: m.name,
                                arguments: p.arguments ?? {},
                                _meta: g
                            }, {
                                widget: {
                                    conversationId: i,
                                    mcpAppId: s
                                }
                            });
                            return (0, ez.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: r
                            })
                        } catch (e) {
                            throw e0(e, "MCP tool call failed")
                        }
                    })({
                        appScope: tV,
                        scope: tB,
                        chatGptMessageId: eG.chatGptMessageId,
                        conversationId: r,
                        getTrustedToolScope: nJ,
                        hostId: ee,
                        mcpAppId: eU,
                        mcpServerStatuses: eK,
                        resourceIdentity: ey,
                        server: tm,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, I.r)(a)?.isError === !0) {
                        let t = e8.c.safeParse(a).data;
                        e_.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eU,
                                initId: (0, _.g)(nQ?.getAttribute("src") ?? void 0)
                            },
                            sensitive: {
                                tool: e.name,
                                error: t?.content.find(e => "text" === e.type)?.text ?? C.object({
                                    error: C.string()
                                }).safeParse(t?.structuredContent).data?.error
                            }
                        })
                    }
                    return a
                }, iK = (0, x.useEffectEvent)(async (e, n, a) => {
                    let i = t?.get(te.b);
                    return iJ((0, eY.d)(np, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, i)
                }), iZ = (0, x.useEffectEvent)(async (e, n) => {
                    let a = t?.get(te.b),
                        i = c.X.safeParse(e);
                    if (!i.success) throw (0, eY.b)("Invalid MCP proxy request", i.error.issues, i.error.issues.every(e => "params" === e.path[0]) ? c.q.InvalidParams : c.q.InvalidRequest);
                    let o = tB.get(z.b, {
                            hostId: ee,
                            conversationId: r
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = i.data;
                    if (r.startsWith("chatgpt:") && na.some(e => e === s)) throw (0, eY.a)("Resource subscriptions require a local Codex thread", c.q.MethodNotFound);
                    switch (s) {
                        case f.a: {
                            let {
                                path: e
                            } = (0, eY.d)(f.b, l, "Invalid MCP file open params");
                            if (!aw) throw (0, eY.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != ag) return (0, k.a)(tB, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "file_open",
                                action: "requested"
                            }), await ag(e, n), {};
                            if (!(0, w.zh)(e) || !(0, w.Ch)(e)) throw (0, eY.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, k.a)(tB, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ef.openWorkspaceFile)({
                                scope: tB,
                                path: e,
                                cwd: null,
                                hostConfig: (0, eS.a)(tV, ee),
                                hostId: ee,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ap?.includes("ping") ? iY(i.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tD.safeParse(e);
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
                            if ((0, k.a)(tB, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eY.a)("MCP app messages are disabled for this view", c.q.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, ec.d)(t) && null == (0, ec.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tL(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eX,
                                    icon: tf,
                                    server: tm,
                                    widgetSource: eG.widgetSource
                                });
                                if (aA()?.assertActive?.(), "new" === e.options.target) {
                                    if (ah) throw (0, eY.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    ep(n), (0, es.startNewConversation)(tV, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eY.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (ep(n), t.get(ea.v) || t.get(ea.V) || null != t.get(eo.b) || t.get(eu.e) || t.get(ea.q) || !(0, ed.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, ea.Cb)(t, e => {
                                        null != n.attachment && e.mcpAppModelContextAttachments.push(n.attachment)
                                    }), (0, el.h)(t, {
                                        prefersReducedMotion: !0
                                    })
                                }
                                return {}
                            }
                            let {
                                prompt: i,
                                message: r,
                                attachment: o
                            } = function(e, t, n) {
                                let a = [],
                                    i = [];
                                for (let t of e) "text" === t.type && null == (0, ec.a)(t) ? a.push(t.text) : i.push(t);
                                let r = tL(i, t),
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
                                    attachment: r
                                }
                            }(e.content, {
                                sourceName: eX,
                                icon: tf,
                                server: tm,
                                sessionId: eU,
                                widgetSource: eG.widgetSource
                            }, nA), s = !1;
                            e.options?.target === "new" && null != ic && e9.appServices?.mcpAppSandbox != null && (iX(n), s = await e9.appServices.mcpAppSandbox.consumeUserGesture((0, eB.a)(ic, nQ)).catch(() => !1) === !0, iX(n));
                            let p = e.options?.target === "new" ? (0, tq.a)({
                                scope: tV,
                                recipient: t,
                                getNewThreadDestination: e4,
                                globalEntrypointIdentity: "global" === nw.source ? {
                                    connectorId: nw.connectorId,
                                    pluginId: nw.pluginId
                                } : void 0,
                                canCreateCodexThreads: av,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (ah) throw (0, eY.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    iX(n)
                                },
                                sourceName: eX,
                                toolOrigin: iB,
                                signal: n
                            }) : iz(n);
                            if (null == p) throw (0, eY.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let m = t?.get(ea.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eU
                            }) ?? [];
                            return await iV(r, i, p, n, void 0, o, m), null != t && (0, ei.b)(t, m), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eY.d)(nu, l, "Invalid MCP file download params");
                            return (0, ti.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eY.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eY.d)(nt, l, "Invalid MCP model context params");
                            if (null != iz() && tO(e.content), nM && e.content?.some(e => "image" === e.type && !(0, w.yi)({
                                    type: e.mimeType
                                }))) throw (0, eY.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != tn && tB.get(eA.r, eU)?.sourceMcpAppId !== eW) throw (0, eY.a)("The widget source is no longer active", -32e3);
                            aA()?.onModelContextUpdate?.(e, eU), (0, X.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    i = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eG.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tm,
                                    composerIcon: tf ?? void 0,
                                    sourceName: eX,
                                    id: eU,
                                    modelContextUpdateId: i ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, ei.g)(t, n), (0, tJ.b)(tB, eU, t.get(ea.w).find(e => e.id === eU) ?? null)), i
                            })(e);
                            if ((0, k.a)(tB, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != tn) {
                                var p = await iG(eW, e, !0);
                                if (p?.ok !== !0) throw Object.assign((0, eY.a)("The host could not persist the model context update", -32e3), {
                                    data: {
                                        code: p?.code ?? "update_model_context_persistence_failed",
                                        retryable: p?.retryable ?? !0
                                    }
                                })
                            }
                            return null == n ? {} : {
                                _meta: {
                                    [g.a]: {
                                        updateId: n
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return iJ((0, eY.d)(np, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eY.d)(nm, l, "Invalid MCP resource read params");
                            if (iX(n), (0, k.a)(tB, d.CodexMcpExtensionAction, {
                                    ...nw,
                                    feature: "resource",
                                    action: "read"
                                }), e2?.readHostResource != null) {
                                iX(n);
                                let t = await e2.readHostResource(e, n);
                                if (iX(n), null != t) return t
                            }
                            return eQ(() => {
                                (0, eL.a)({
                                    mcpAppScope: eG,
                                    server: tm,
                                    uri: e.uri
                                })
                            }), await iY({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, eq.d)({
                                        scope: tB,
                                        appContext: eG.appContext,
                                        connectorId: (0, M.e)(tm) ? t5 : null,
                                        hostId: ee,
                                        mcpAppId: eU,
                                        originCallId: eG.originCallId ?? null,
                                        threadId: r,
                                        server: tm,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw e0(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eY.d)(nm, l, "Invalid MCP resource subscribe params");
                            return iX(n), (0, k.a)(tB, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "resource",
                                action: "subscribe"
                            }), await at.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eY.d)(nm, l, "Invalid MCP resource unsubscribe params");
                            return iX(n), (0, k.a)(tB, d.CodexMcpExtensionAction, {
                                ...nw,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await at.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eY.d)(nf, l, "Invalid MCP event subscribe params"),
                                t = tB.get(eA.j, eW)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nJ(await e3({
                                    scope: tB,
                                    hostId: ee,
                                    mcpServerStatuses: eK,
                                    server: tm,
                                    threadId: o
                                }))), null == n) throw (0, eY.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return an.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eY.d)(ng, l, "Invalid MCP event unsubscribe params");
                            return an.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return iY(i.data, n, a, async () => {
                                let e = await e3({
                                        scope: tB,
                                        hostId: ee,
                                        mcpServerStatuses: (0, M.e)(tm) ? eK : void 0,
                                        server: tm,
                                        threadId: o
                                    }),
                                    t = e5(e),
                                    n = nJ(e);
                                return {
                                    tools: eQ(() => (0, eL.e)({
                                        server: tm,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return iY(i.data, n, a, async () => (0, M.e)(tm) ? {
                                resources: []
                            } : {
                                resources: (await e3({
                                    scope: tB,
                                    hostId: ee,
                                    server: tm,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return iY(i.data, n, a, async () => (0, M.e)(tm) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await e3({
                                    scope: tB,
                                    hostId: ee,
                                    server: tm,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return iY(i.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return iY(i.data, n, a, async () => {
                                throw (0, eY.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                }), iQ = (0, x.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(279799)]).then(n.bind(n, "Rq7I"));
                    iX(t), a(tX(), {
                        Frame: ny,
                        sourceMcpAppId: eW,
                        signal: t,
                        handleRequest: async (e, n) => c._.parse(await iZ(e, n ?? t))
                    }, e)
                });
            (0, x.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nZ(e), () => {
                    e.remove(), nZ(t => t === e ? null : t), n2(!1)
                }
            }, [eU]), (0, x.useEffect)(() => {
                let e = ey.identity;
                if (null == nK || "connector" !== e.kind) return;
                let t = tB.watch(t => {
                    let n = t.get(et, {
                        appId: e.connectorId,
                        accountId: e.accountId
                    });
                    if (null == n) delete nK.dataset.mcpServerUrlHash, delete nK.dataset.mcpEndpointOrigin;
                    else nK.dataset.mcpServerUrlHash = n, nK.dataset.mcpEndpointOrigin = new URL((0, _.f)({
                        environment: t3(),
                        locale: "en",
                        subdomain: `mcp-endpoint-${n}`
                    })).origin
                });
                return () => {
                    t(), delete nK.dataset.mcpServerUrlHash, delete nK.dataset.mcpEndpointOrigin
                }
            }, [nK, ey.identity, tB]), (0, x.useLayoutEffect)(() => {
                null != nK && null != nQ && function(e) {
                    let {
                        frameElement: t,
                        sandboxElement: n,
                        fullSurface: a,
                        liftModal: i,
                        inheritHostBackground: r,
                        isCardInlineSurface: o,
                        isFullScreen: s,
                        isWidgetVisible: l,
                        prefersBorder: c,
                        surfaceBackgroundColor: u,
                        title: d,
                        globalSurface: p
                    } = e, m = !s && !a && !o;
                    t.className = (0, tT.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", i && "z-50", !s && !a && !o && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tT.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", m && "rounded-lg", o && c && "borderedCardSandbox-KmZ5WZ", s && "min-h-0 flex-1"), n.style.backgroundColor = !i && (r || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: nK,
                    sandboxElement: nQ,
                    fullSurface: q,
                    liftModal: iv,
                    inheritHostBackground: eI,
                    isCardInlineSurface: ig,
                    isFullScreen: nU,
                    isWidgetVisible: nL && null != nq,
                    prefersBorder: t1,
                    surfaceBackgroundColor: nO,
                    title: tb,
                    globalSurface: ty
                })
            }, [q, iv, nK, eI, ig, nU, nL, nq, t1, nQ, nO, tb, ty]), (0, x.useLayoutEffect)(() => {
                if (null == nK) return;
                let e = nU ? id : ip,
                    t = iw ? (0, Y.a)() : iI;
                if (iv && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nK.style.display;
                    nK.style.display = "none", e || e_.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: iE().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                if (nK.parentElement !== t && (nK.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nK, null) : t.appendChild(nK), e_.a.debug("Attached app widget", {
                        safe: {
                            mcpAppId: iE().safe.mcpAppId,
                            showInModal: iv
                        }
                    })), n1 || n2(!0), null == e) {
                    let e = "none" === nK.style.display;
                    nK.style.display = "none", e || e_.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: iE().safe.mcpAppId,
                            reason: "missing_anchor"
                        }
                    });
                    return
                }
                return function(e) {
                    let {
                        frameElement: t,
                        frameContainer: n,
                        fullSurface: a = !1,
                        modalOpen: i = !1,
                        sandboxElement: r,
                        isFullScreen: o,
                        isInGlobalHost: s,
                        anchorElement: l,
                        rightPanelAnimationProgress: c,
                        rightPanelLayoutTick: u
                    } = e, d = i || o || s, p = i ? (0, tP.b)(t) : void 0, m = null, f = o && !s ? new MutationObserver(() => h()) : null, g = new ResizeObserver(() => h()), h = () => {
                        let e = l.currentCSSZoom ?? 1,
                            c = (0, tk.a)(l, e),
                            u = {
                                ...c
                            },
                            p = o || a ? l.closest('[data-app-shell-focus-area="right-panel"]') : null,
                            g = "";
                        i ? g = "" : null != p && (g = (0, tk.b)(c, (0, tk.a)(p, e))), t.style.position = d ? "fixed" : "absolute";
                        let h = null;
                        if (d ? s || i || (h = t.offsetParent) : h = n, null != h) {
                            let t = (0, tk.a)(h, e);
                            u.x -= t.x, u.y -= t.y
                        }
                        d || (u.x += n.scrollLeft, u.y += n.scrollTop);
                        let b = "";
                        i || (b = o ? "43" : "1"), Object.assign(t.style, {
                            ...(0, tk.d)(u, e / (n.currentCSSZoom ?? 1)),
                            clipPath: g,
                            display: "",
                            zIndex: b
                        });
                        let v = a || o ? (0, tk.c)(l) : null;
                        if (t.style.borderRadius = v?.join(" ") ?? "", null != r)
                            if (null == v) r.style.borderRadius = "";
                            else {
                                let e = getComputedStyle(t),
                                    n = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                    a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                r.style.borderRadius = [n, a].map(e => v.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                            } null != f && h !== m && (f.disconnect(), m = h, null != h && f.observe(h, {
                            attributeFilter: ["class", "style"],
                            attributes: !0
                        }))
                    };
                    g.observe(n);
                    let b = (0, tM.b)(l, t, h),
                        v = (0, tR.a)({
                            update: h,
                            motionValues: [u, o ? c : void 0]
                        });
                    return () => {
                        p?.(), v.disconnect(), b(), g.disconnect(), f?.disconnect()
                    }
                }({
                    frameElement: nK,
                    frameContainer: t,
                    fullSurface: q,
                    modalOpen: iv,
                    sandboxElement: nQ,
                    isFullScreen: nU,
                    isInGlobalHost: iw,
                    anchorElement: e,
                    rightPanelAnimationProgress: nj,
                    rightPanelLayoutTick: tc
                })
            }, [nK, q, iv, ip, nU, iw, n1, nj, tc, nQ, id, iI]);
            let i0 = e2?.autoFocus === !0;
            (0, x.useEffect)(() => {
                i0 && nL && null != ip && nQ?.focus()
            }, [i0, nL, ip, nQ]), (0, x.useLayoutEffect)(() => (nG.current = !1, () => {
                nG.current = !0
            }), [eU, tB]);
            let i1 = (0, x.useEffectEvent)(async () => {
                    try {
                        if (e2?.assertActive?.(), !aF) return;
                        let e = tH.openInAppUrl ?? C.string().nullable().parse(await n7?.getCurrentPath?.(void 0));
                        if (e2?.assertActive?.(), null == e) return;
                        let t = e2?.openInApp?.validateUrl(null == tH.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, em.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                i2 = (0, x.useEffectEvent)(e => {
                    let t = tB.get($.j.tabs$).some(e => e.tabId === (0, ta.b)(eU));
                    (0, ta.c)(tB, {
                        source: {
                            hostId: ee,
                            server: tm,
                            connectorId: t5 ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tf,
                        mcpAppId: eU,
                        onExitFullScreen: e,
                        onPanelElementChange: n5,
                        title: tH.displayModeTitle ?? th,
                        openInAppName: e2?.openInApp?.appName,
                        onOpenInApp: aF ? () => {
                            i1()
                        } : void 0
                    })
                }),
                i3 = (0, x.useEffectEvent)(() => {
                    let e = tB.get(eA.r, eU);
                    !nG.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eA.d)(tB, eU)
                }),
                i5 = (0, x.useEffectEvent)(e => {
                    let t = aA()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nw);
                    else {
                        let t = C.object({
                            type: C.literal("interaction"),
                            label: C.string()
                        }).safeParse(e);
                        t.success && (0, k.a)(tB, u.l, {
                            ...nw,
                            host: "codex",
                            actionType: (0, ts.b)(t.data.label)
                        })
                    }
                });
            (0, x.useLayoutEffect)(() => {
                nU ? i2(i3) : (0, ta.a)(tB, eU)
            }, [nU, eU, tB, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl, th, tH.displayModeTitle, aF, e2?.openInApp?.appName]), (0, x.useLayoutEffect)(() => {
                let e;
                if (null != io) return void iC("configuration", io);
                if (null == nK || !n1 || null == i_ || null == ic || null == il) return;
                let t = e7.a.start("webview_load", {
                    definitionVersion: 1,
                    surface: "mcp_app",
                    telemetryOwner: "desktop_client"
                }, {
                    key: eU,
                    traceAttributes: {
                        "webview.surface": "mcp_app"
                    }
                });
                nV.current = t, t.mark("surface_mcp_app"), (0, eA.D)(tX(), eU, {
                    appDisplayModes: void 0,
                    isWidgetReady: !1,
                    sandboxError: null
                }), ai(nb), nX.current = null, nY.current = null;
                let n = iu();
                if (null == n) return void iC("configuration", Error("The MCP app sandbox initialization config is missing."));
                let i = [...new Set(["fullscreen", "encrypted-media", ...nS?.split(";") ?? [], ...nE ? ["local-network-access"] : []])],
                    r = (0, eH.a)(ih, ic, il);
                r instanceof HTMLIFrameElement && (r.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != nS ? r.allow = i.map(e => `${e} *`).join("; ") : r.allow = nE ? "encrypted-media *; local-network-access" : "encrypted-media *", r.allowFullscreen = !0), r.classList.add("pointer-events-none", "opacity-0"), nK.appendChild(r), n0(r), t.mark("rendered");
                let o = new AbortController,
                    u = !1,
                    d = new tv,
                    v = null == s ? null : new ew(s),
                    y = null,
                    w = crypto.randomUUID(),
                    I = iF(),
                    x = a7(),
                    {
                        sourceMcpAppId: S,
                        toolInput: E,
                        toolOutput: A,
                        toolResponseMetadata: M,
                        toolResult: P,
                        toolStatus: T,
                        toolResultNotification: R,
                        toolCallCancellationReason: j
                    } = ia(),
                    N = new t4.b(tX(), S, e => {
                        iR({
                            href: e
                        }, o.signal).catch(e => {
                            o.signal.aborted || (0, eJ.d)(e, iE())
                        })
                    });
                nX.current = null == P || null == A ? null : {
                    widgetId: w,
                    widgetState: I,
                    sourceMcpAppId: S,
                    toolInput: E,
                    toolOutput: A,
                    toolResponseMetadata: M,
                    toolStatus: T,
                    toolResult: R,
                    toolCallCancellationReason: j
                };
                let D = ax ? {
                        requestConnectPlugin: async e => aA()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                            pluginId: t$.a.parse(e).pluginId,
                            status: "unavailable"
                        },
                        requestOpenPlugin: async e => {
                            let t = aA()?.pluginSuggestions;
                            if (null == t) throw Error("Plugin suggestions are unavailable");
                            await t.requestOpenPlugin(e)
                        },
                        requestDeclinePluginSuggestions: async () => aA()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                            status: "unavailable",
                            declinedPluginIds: []
                        },
                        sendInstrument: e => aA()?.pluginSuggestions?.sendInstrument(e)
                    } : void 0,
                    O = null == P ? null : D ?? ii(P),
                    L = null == O ? null : {
                        ...O,
                        requestDeclinePluginSuggestions: D?.requestDeclinePluginSuggestions ?? (null == O.requestDeclinePluginSuggestions ? void 0 : async () => {
                            let e = ia().toolResult,
                                t = null == e ? void 0 : ii(e)?.requestDeclinePluginSuggestions;
                            return null == t || !await e9.appServices?.mcpAppSandbox?.consumeUserGesture((0, eB.a)(ic, r)).catch(() => !1) || o.signal.aborted ? {
                                status: "unavailable",
                                declinedPluginIds: []
                            } : t()
                        })
                    },
                    q = () => {
                        let e = aA()?.files;
                        if (null == e) throw Error("Widget file access is unavailable");
                        return e
                    },
                    U = {
                        ...L,
                        downloadBlob: az ? e => aA()?.downloadBlob?.(e, o.signal) : void 0,
                        triggerHaptic: aV ? e => aA()?.triggerHaptic?.(e, o.signal) : void 0,
                        requestCheckout: aD ? async e => {
                            o.signal.throwIfAborted();
                            let t = aA();
                            if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                            return t.requestCheckout(e, o.signal)
                        } : void 0,
                        requestModal: async e => {
                            o.signal.aborted || (aP ? await aR()?.requestModal(e) : null != aQ() && (aA()?.requestModal == null || C.object({
                                params: C.object({
                                    view: C.literal("accountLinking")
                                })
                            }).safeParse(e).success) ? await iN(e, o.signal, to) : aA()?.requestModal != null ? await aA()?.requestModal?.(e, o.signal) : await iQ(e, o.signal))
                        },
                        uploadFile: a$ ? (e, t) => q().uploadFile(e, t, o.signal) : void 0,
                        getFileDownloadUrl: a$ ? e => q().getFileDownloadUrl(e, o.signal) : void 0,
                        getFileMetadata: a$ ? e => q().getFileMetadata(e, o.signal) : void 0,
                        selectFiles: a$ ? () => q().selectFiles(o.signal) : void 0,
                        share: aX ? async e => {
                            o.signal.throwIfAborted(), await aA()?.share?.(e, o.signal)
                        } : void 0,
                        requestLinkToConnector: aP || aK ? async e => o.signal.aborted ? {
                            didConnect: !1
                        } : await (aR()?.requestLinkToConnector ?? aA()?.requestLinkToConnector)?.(e, o.signal) ?? {
                            didConnect: !1
                        } : void 0,
                        showToast: ak ? e => {
                            o.signal.aborted || (aR()?.showToast ?? aA()?.showToast)?.(e)
                        } : void 0,
                        notifyEscapeKey: aE || aP && aC || aW ? () => {
                            o.signal.aborted || aA()?.allowsInteractiveDismissal === !1 || (aE || aP || aA()?.displayMode != null ? ik() : iq({
                                mode: "inline"
                            }))
                        } : void 0,
                        callMcp: e => {
                            let t = y?.notifyMcpAppsMcpNotification;
                            if (ad && null != t) {
                                let n = N.handleRequest(e, o.signal, e => eZ(t(e)));
                                if (null != n) return n
                            }
                            let n = d.handleRequest(e, {
                                sandboxElement: r,
                                sandboxId: ic,
                                initId: W,
                                signal: o.signal,
                                notify: y?.notifyMcpAppsMcpNotification
                            });
                            if (null != n) return n;
                            let a = m.h.safeParse(e);
                            if (a.success && null != b) {
                                for (let {
                                        component: e,
                                        level: t,
                                        message: n,
                                        metadata: i
                                    }
                                    of a.data.params.entries) e_.a[t](n, {
                                    safe: {
                                        component: e,
                                        metadata: i,
                                        pluginId: b
                                    },
                                    sensitive: {}
                                });
                                return Promise.resolve({})
                            }
                            let i = m.g.safeParse(e);
                            return i.success && null != v ? v.handleRequest(i.data.params) : iZ(e, o.signal).catch(t => {
                                if (!o.signal.aborted) {
                                    let n = iE();
                                    e_.a.warning("App request failed", {
                                        safe: {
                                            ...(0, eJ.b)(t),
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
                        callTool: (e, t) => iK(e, t, o.signal),
                        notifyBackgroundColor: () => {},
                        notifyEnvironmentError: e => {
                            if (!o.signal.aborted) {
                                if (eJ.i.safeParse(e).success) return void(0, eJ.d)(e, iE());
                                iC("environment", e)
                            }
                        },
                        notifyIntrinsicHeight: iM,
                        notifyIntrinsicWidth: iP,
                        notifyNavigation: e => {
                            o.signal.aborted || iT(e)
                        },
                        notifySecurityPolicyViolation: e => {
                            o.signal.aborted || aA()?.instrumentation?.notifySecurityPolicyViolation(e)
                        },
                        openExternal: e => iR(e, o.signal),
                        openPlaidLink: a2 ? e => ij(e, o.signal) : void 0,
                        initializeMcpApp: e => {
                            if (o.signal.aborted) throw Error("MCP app initialization was cancelled");
                            try {
                                return iL(l.a.parse(e).availableDisplayModes)
                            } catch (e) {
                                throw iC("configuration", e), e
                            }
                        },
                        requestClose: aC ? ik : void 0,
                        requestDisplayMode: iq,
                        openConversationOverlay: aO ? async e => {
                            o.signal.throwIfAborted(), await aA()?.openConversationOverlay?.(e, o.signal)
                        } : void 0,
                        notifyAutofillCandidates: aq ? t => {
                            o.signal.throwIfAborted(), e?.(t)
                        } : void 0,
                        openPromptInput: aL ? e => {
                            o.signal.throwIfAborted();
                            let t = aA()?.openPromptInput;
                            if (null == t) throw Error("Widget prompt input is unavailable");
                            return t(e, r, o.signal)
                        } : void 0,
                        setOpenInAppUrl: aU ? e => {
                            o.signal.throwIfAborted();
                            let {
                                href: t
                            } = C.object({
                                href: C.string().nullable()
                            }).parse(e);
                            if (!t?.trim()) return void(0, eA.D)(tX(), eU, {
                                openInAppUrl: null == t ? null : void 0
                            });
                            let n = aA()?.openInApp?.validateUrl(t);
                            null != n && (0, eA.D)(tX(), eU, {
                                openInAppUrl: n
                            })
                        } : void 0,
                        requestFocusedObject: aG ? async e => {
                            o.signal.throwIfAborted(), await aA()?.presentation?.requestFocusedObject?.(e, o.signal)
                        } : void 0,
                        requestCloseFocusedObject: aH ? async () => {
                            o.signal.throwIfAborted(), await aA()?.presentation?.requestCloseFocusedObject?.(o.signal)
                        } : void 0,
                        requestTargetedReply: aT ? async e => {
                            if (o.signal.aborted) return;
                            let t = aR()?.requestTargetedReply;
                            if (null != t) return void await t(e);
                            let n = aA()?.setTargetedReply;
                            if (null != n) return void n(e, o.signal);
                            let a = aA()?.requestTargetedReply;
                            null != a && await (0, eP.c)(e, a, au, o.signal)
                        } : void 0,
                        requestReconnectConnector: aJ ? async () => {
                            let e = aA()?.requestReconnectConnector;
                            if (null == e) throw Error("Connector reconnection is unavailable");
                            return e(o.signal)
                        } : void 0,
                        requestConnectSheet: aY ? e => {
                            let t = aA()?.requestConnectSheet;
                            if (null != t) return t(e, o.signal);
                            throw Error("Widget connection is unavailable")
                        } : void 0,
                        sendFollowUpMessage: e => i$(e, o.signal),
                        sendInstrument: e => {
                            if (!o.signal.aborted) {
                                if (aS || null != L) {
                                    let t = (0, p.h)(e);
                                    if (null != t) return void(0, k.a)(tX(), t.messageType, t.payload)
                                }
                                eJ.g.safeParse(e).success && ((0, eJ.d)(e, iE()), iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), L?.sendInstrument(e);
                                let t = aQ() ?? a1();
                                t?.sendInstrument(e), (null == t && null == L || C.object({
                                    type: C.literal("interaction")
                                }).safeParse(e).success) && i5(e)
                            }
                        },
                        updateWidgetState: (e, t, n) => {
                            if (!o.signal.aborted) return iG(e, t, C.object({
                                waitForPersistence: C.literal(!0).optional()
                            }).optional().parse(n)?.waitForPersistence)
                        }
                    },
                    F = (0, eB.b)({
                        hostApiHandlers: U,
                        assertActive: () => {
                            o.signal.throwIfAborted(), aA()?.assertActive?.()
                        },
                        onSkybridgeCacheState: e => {
                            t.mark(`skybridge_cache_${e}`, {
                                traceAttributes: {
                                    "webview.skybridge_cache_state": e
                                }
                            })
                        },
                        origin: n.sandboxOrigin,
                        sandboxId: ic,
                        signal: o.signal,
                        sourceUrl: n.sourceUrl,
                        webview: r
                    }),
                    W = (0, _.g)(r.getAttribute("src") ?? void 0),
                    G = iE();
                return e_.a.info("Starting app sandbox", {
                    safe: {
                        conversationSurface: nP,
                        connectorId: G.safe.connectorId,
                        mcpAppId: G.safe.mcpAppId,
                        sandboxId: G.safe.sandboxId,
                        initId: W
                    },
                    sensitive: {
                        hostId: G.sensitive.hostId,
                        server: G.sensitive.server
                    }
                }), F.then(async r => {
                    if (o.signal.aborted) return;
                    t.mark("sandbox_ready"), e_.a.info("Connected app sandbox", {
                        safe: {
                            initId: W
                        }
                    }), y = r;
                    let l = r.notifyMcpAppsMcpNotification,
                        c = e9.appServices?.mcpAppSandbox != null && null != l;
                    null != l && v?.setNotificationSender(e => eZ(l(e))), null != r.applyAutofillCandidate && (e = await aA()?.autofill?.(r.applyAutofillCandidate, o.signal), o.signal.throwIfAborted()), n6({
                        api: r,
                        widgetId: w
                    });
                    let {
                        displayMode: d,
                        availableDisplayModes: p
                    } = iO(), _ = tA(), {
                        containerDimensions: S
                    } = ix(nK), C = tC(aA()?.device), P = tX().get(eT.a), T = P["--color-background-primary"], k = iD(d), R = {
                        "openai/viewer-header": ad && null != l,
                        ...tS({
                            availableDisplayModes: p,
                            containerDimensions: S,
                            displayMode: d,
                            locale: n.locale,
                            modelContextHostState: nk(),
                            deepLink: iU(),
                            safeAreaInsets: k.insets,
                            styleVariables: P,
                            theme: _,
                            userAgent: C,
                            toolInfo: aA()?.toolInfo
                        }),
                        ...null == s || null == l ? {} : {
                            [m.a]: !0
                        },
                        ...null == b ? {} : {
                            [m.d]: !0
                        }
                    }, {
                        csp: j
                    } = n, N = t8 ? {} : void 0;
                    ay && (N = {
                        text: {},
                        image: {},
                        resourceLink: {},
                        resource: {}
                    }), null == v && iS(), e_.a.info("Starting app widget", {
                        safe: {
                            displayMode: d,
                            initId: W
                        }
                    }), u = !0;
                    let D = r.runWidgetCode({
                            enableAutofill: null != e,
                            expectReadySignal: null != a_,
                            expectedReadySignal: a_,
                            csp: j,
                            displayMode: aj(d),
                            features: i,
                            subjectId: aA()?.subjectId,
                            hostHandlesFollowUpMessageAuthorization: t9,
                            html: n.html,
                            isFirstParty: aS || null != L || aJ,
                            isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                            isTombstone: aA()?.isTombstone === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            measureWidth: !0 === tK,
                            mcpApps: {
                                requiresInitialization: a.requiresMcpInitialization,
                                forwardedRequestMethods: ["ui/update-model-context", ...c ? [tg] : [], ...ad && null != l ? [t4.a] : [], ...ay || !t8 ? ["ui/message"] : [], ...am?.split(";") ?? [], ...aw ? [f.a] : [], ...null == v || null == l ? [] : [m.c], ...null == b ? [] : [m.e], ...null == l ? [] : [...na, ...ae && !aI ? ni : []]],
                                hostCapabilities: {
                                    experimental: {
                                        [g.a]: {},
                                        ...c ? {
                                            "openai/find": {}
                                        } : {},
                                        ...ay ? {
                                            [h.a]: {
                                                draft: t6() ? {} : void 0
                                            }
                                        } : {},
                                        "openai/skillsDeepLinks": {},
                                        ...n.experimentalCapabilities,
                                        ...aw ? {
                                            "openai/files": {}
                                        } : {}
                                    },
                                    logging: {},
                                    openLinks: {},
                                    serverResources: {},
                                    serverTools: {},
                                    message: N,
                                    updateModelContext: t8 ? {
                                        resource: {},
                                        resourceLink: {},
                                        image: {},
                                        structuredContent: {},
                                        text: {}
                                    } : void 0,
                                    sandbox: null != j || null != nS ? {
                                        permissions: null == nS ? void 0 : {
                                            camera: i.includes("camera") ? {} : void 0,
                                            microphone: i.includes("microphone") ? {} : void 0,
                                            geolocation: i.includes("geolocation") ? {} : void 0,
                                            clipboardWrite: i.includes("clipboard-write") ? {} : void 0
                                        },
                                        csp: null == j ? void 0 : {
                                            baseUriDomains: j.baseUriDomains,
                                            connectDomains: j.connectDomains,
                                            frameDomains: j.frameDomains,
                                            resourceDomains: j.resourceDomains
                                        }
                                    } : void 0
                                },
                                hostContext: R,
                                hostInfo: {
                                    name: "chatgpt",
                                    version: tX().get(ex.a).data?.version ?? "unknown",
                                    client_type: "codex_browser"
                                },
                                globalSurface: ty
                            },
                            safeArea: k,
                            theme: _,
                            toolInput: E,
                            toolOutput: A,
                            toolResponseMetadata: M,
                            userAgent: C,
                            viewParams: x,
                            widgetId: w,
                            widgetState: I
                        }),
                        O = !1;
                    for await (let e of D) {
                        let n = tX().get(eA.r, eU)?.sandboxError;
                        if (o.signal.aborted || nx(n)) break;
                        if (eJ.f.safeParse(e).success) return;
                        if (eJ.g.safeParse(e).success)(0, eJ.d)(e, iE()), iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION");
                        else if (eJ.h.safeParse(e).success) throw Error("The MCP app sandbox execution failed.");
                        if (O || !eB.d.safeParse(e).success) continue;
                        O = !0;
                        let {
                            displayMode: a,
                            availableDisplayModes: i
                        } = iO(), s = {
                            ...R,
                            displayMode: a,
                            availableDisplayModes: [...i]
                        };
                        (0, eA.D)(tX(), eU, {
                            isWidgetReady: !0
                        }), eZ(r.setWidgetView({
                            displayMode: aj(a),
                            isTombstone: aA()?.isTombstone === !0,
                            viewParams: x,
                            widgetId: w
                        })), eZ(r.setTheme({
                            theme: _
                        })), eZ(r.setSafeArea({
                            safeArea: k
                        }));
                        let l = {
                            isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            surfaceBackgroundColor: T
                        };
                        nz.current = l, eZ(r.setAdditionalGlobals({
                            additionalGlobals: l
                        })), eZ(r.notifyMcpAppsHostContext({
                            hostContext: s
                        })), t.mark("fully_loaded"), e_.a.info("Started app widget", {
                            safe: {
                                displayMode: a,
                                initId: W
                            }
                        }), t.end()
                    }
                    if (!O && !o.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                }).catch(e => {
                    o.signal.aborted || (u && iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), iC(null == y ? "handshake" : "widget", e))
                }), () => {
                    o.abort(), as(), nV.current === t && (nV.current = null), t.isRecording() && t.abort("navigation_away"), d[Symbol.dispose](), N[Symbol.dispose](), v?.[Symbol.dispose](), nX.current = null, nY.current = null, nH.current = null, nB.current = null, nz.current = null, (0, eA.D)(tX(), eU, {
                        isWidgetReady: !1
                    }), n6(null), ai(nb), null != y && eZ(y.requestMcpAppsResourceTeardown({
                        timeoutMs: 500
                    })), r.remove(), r instanceof HTMLIFrameElement || r.destroy?.(), e_.a.info("Removed app sandbox", {
                        safe: {
                            initId: W
                        }
                    }), n0(e => e === r ? null : e)
                }
            }, [t8, t9, nE, nS, az, aV, as, aw, ay, a2, aC, Q, null, ee, nP, nK, q, K, s, b, aI, tK, ax, aD, aX, a$, aY, aJ, aK, aE, ak, aP, aT, aW, aU, aO, aL, aq, aG, aH, aS, ad, am, a_, a.requiresMcpInitialization, to, n1, eU, is, au, io, ic, i_, il, ih, tm, ae, af, ty]), (0, x.useLayoutEffect)(() => {
                at.setConversation(r).catch(e => {
                    e_.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: r,
                            mcpAppId: eU
                        },
                        sensitive: {
                            error: e,
                            hostId: ee
                        }
                    })
                })
            }, [r, ee, at, eU]), (0, x.useLayoutEffect)(() => {
                an.setConversation(r, ae && nd).catch(e => {
                    e_.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [r, an, nd, ae]), (0, x.useLayoutEffect)(() => {
                let e = n7?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = an.connectNotificationSink(e);
                return () => {
                    t(), an.clear().catch(e => {
                        e_.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [an, n7]), (0, x.useLayoutEffect)(() => {
                let e = n7?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = at.connectNotificationSink(t => eZ(e(t)));
                return () => {
                    t(), at.clear().catch(e => {
                        e_.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [at, n7]), (0, x.useEffect)(() => {
                if (!nL || null == n7 || null == n4) return;
                let e = {
                        widgetId: n4,
                        sourceMcpAppId: eW,
                        toolInput: a3,
                        toolOutput: a8,
                        toolResponseMetadata: it,
                        toolStatus: ie,
                        toolCallCancellationReason: tW,
                        toolResult: a9
                    },
                    t = {
                        ...e,
                        widgetState: n$
                    };
                v()(nX.current, t) || (nX.current = t, eZ(n7.setWidgetData({
                    toolInput: a3,
                    toolOutput: a8,
                    toolResponseMetadata: it,
                    widgetId: n4,
                    widgetState: n$
                })));
                let n = nY.current?.widgetId === n4 ? nY.current : null;
                if (v()(n, e)) return;
                nY.current = e;
                let a = n?.sourceMcpAppId !== eW;
                null != a3 && (a || !v()(n?.toolInput, a3)) && eZ(n7.notifyMcpAppsToolInput({
                    arguments: a3
                })), "cancelled" === ie ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tW) && eZ(n7.notifyMcpAppsToolCancelled({
                    reason: tW
                })) : null == a9 || !a && v()(n?.toolResult, e.toolResult) && n?.toolStatus === ie && v()(n?.toolInput, a3) && v()(n?.toolResponseMetadata, it) || eZ(n7.notifyMcpAppsToolResult({
                    ...a9,
                    isError: "error" === ie || a9.isError,
                    _meta: "error" === ie ? {
                        ...a9._meta,
                        status: "error"
                    } : a9._meta
                }))
            }, [nL, a9, n7, eW, a3, a8, it, ie, tW, n4, n$]), (0, x.useEffect)(() => {
                nL && null != n7 && eZ(n7.notifyMcpAppsHostContext({
                    hostContext: {
                        [g.a]: nT
                    }
                }))
            }, [nL, nT, n7]), (0, x.useEffect)(() => {
                if (nL && null != n7 && null != nK) return s?.observeHostContext?.(tB, nK, e => {
                    eZ(n7.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, nK, nL, n7, tB]), (0, x.useEffect)(() => {
                if (null == nK || !im || null == n7 || null == n4 || nU && null == id) return;
                let e = iD(nF);
                eZ(n7.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aj(nF),
                    isTombstone: aA()?.isTombstone === !0,
                    viewParams: a6,
                    widgetId: n4
                };
                return v()(nH.current, t) || (nH.current = t, eZ(n7.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: a,
                            rightPanelAnimationProgress: i,
                            onLayout: r
                        } = e, o = null, s = () => {
                            null == o && (o = window.requestAnimationFrame(() => {
                                o = null, r()
                            }))
                        };
                        if (s(), "u" < typeof ResizeObserver) return () => {
                            null != o && window.cancelAnimationFrame(o)
                        };
                        let l = new ResizeObserver(s);
                        l.observe(t), a && n?.parentElement != null && l.observe(n.parentElement);
                        let c = i.on("change", s);
                        return () => {
                            l.disconnect(), c(), null != o && window.cancelAnimationFrame(o)
                        }
                    }({
                        frameElement: nK,
                        inlineAnchor: ip,
                        fitWidth: tK,
                        rightPanelAnimationProgress: nj,
                        onLayout: () => {
                            let {
                                containerDimensions: t
                            } = ix(nK), n = {
                                isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: iv ? "transparent" : nO
                            };
                            v()(nz.current, n) || (nz.current = n, eZ(n7.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tS({
                                availableDisplayModes: tH.availableDisplayModes ?? Q,
                                containerDimensions: t,
                                displayMode: nF,
                                locale: nA.locale,
                                deepLink: tl,
                                safeAreaInsets: e.insets,
                                styleVariables: nD,
                                theme: tA(),
                                userAgent: tC(aA()?.device),
                                toolInfo: aA()?.toolInfo
                            });
                            v()(nB.current, a) || (nB.current?.theme !== a.theme && eZ(n7.setTheme({
                                theme: a.theme
                            })), nB.current = a, eZ(n7.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nK, tK, nW, q, K, ip, nA.locale, nD, Q, tH.availableDisplayModes, im, nU, aZ, aB, iv, e2?.displayMode, e2?.showModalCloseButton, ao, tl, nj, nN, n7, id, nO, ty, a6, n4, nF]);
            let i8 = ao && !nU,
                i6 = ao && nU && nR?.tabId === (0, ta.b)(eU);
            return (0, o.jsxs)(o.Fragment, {
                children: [q && im && nL && null != nQ && null != ic ? (0, o.jsx)(tw, {
                    sandboxElement: nQ,
                    sandboxId: ic
                }) : null, nL && null != nQ && null != ic ? (0, o.jsx)(tp, {
                    panelTabId: nU ? (0, ta.b)(eU) : e2?.panelTabId ?? null,
                    sandboxElement: nQ,
                    sandboxId: ic,
                    title: tb
                }) : null, null != al && im ? (0, o.jsx)(eM.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...al,
                        onCancel: as,
                        onConfirm: ac
                    }
                }) : null, i6 ? (0, o.jsx)(V.a.RightPanelTabListBefore, {
                    children: (0, o.jsx)(tz, {
                        canGoBack: aa.canGoBack,
                        canGoForward: aa.canGoForward,
                        className: "h-full px-1",
                        onBack: () => iH(-1),
                        onForward: () => iH(1)
                    })
                }) : null, i8 && null != nK && !nU ? (0, S.createPortal)((0, o.jsx)(tz, {
                    canGoBack: aa.canGoBack,
                    canGoForward: aa.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => iH(-1),
                    onForward: () => iH(1)
                }), nK) : null]
            })
        }

        function nx(e) {
            return null != e && !(e instanceof tY.a)
        }
    }),
    Odi7: (function(e, t, n) {
        function a(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = Math.max(e ?? t ?? 480, n ?? 200);
            return a || null != e ? i : Math.min(i, 720)
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
            i = n("QosV"),
            r = n("Wf1j"),
            o = n("DcH0"),
            s = n("X3K1"),
            l = n("zOE4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, u = (0, i.c)(18),
                    {
                        className: d,
                        height: p,
                        inlineFramePadding: m,
                        allowCompact: f,
                        fullSurface: g,
                        showLoadingStatus: h
                    } = e,
                    b = void 0 !== f && f,
                    v = void 0 === h || h,
                    y = (0, r.a)();
                u[0] !== y ? (t = y.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }), u[0] = y, u[1] = t) : t = u[1];
                let w = t;
                if (void 0 !== g && g) {
                    let e, t, n = v ? "status" : void 0,
                        i = !v;
                    return u[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), u[2] = e) : e = u[2], u[3] !== w || u[4] !== n || u[5] !== i ? (t = (0, a.jsx)("div", {
                        className: "relative h-full min-h-0",
                        role: n,
                        "aria-hidden": i,
                        "aria-label": w,
                        "data-mcp-app-loading": "true",
                        children: e
                    }), u[3] = w, u[4] = n, u[5] = i, u[6] = t) : t = u[6], t
                }
                u[7] !== b || u[8] !== d || u[9] !== p || u[10] !== m || u[11] !== w || u[12] !== v ? (n = b && "number" == typeof p && p > 0 && p < 48 ? (0, a.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    role: v ? "status" : void 0,
                    "aria-hidden": !v,
                    "aria-label": w,
                    "data-mcp-app-loading": "true",
                    style: {
                        height: null == m ? p : "100%"
                    },
                    children: (0, a.jsx)(s.a, {
                        className: "w-48 max-w-full",
                        size: "md"
                    })
                }) : (0, a.jsx)(o.a, {
                    className: d,
                    role: v ? "status" : void 0,
                    "aria-hidden": !v,
                    "aria-label": w,
                    "data-mcp-app-loading": "true",
                    style: {
                        height: null == m ? p : "100%"
                    }
                }), u[7] = b, u[8] = d, u[9] = p, u[10] = m, u[11] = w, u[12] = v, u[13] = n) : n = u[13];
                let I = n;
                return u[14] !== p || u[15] !== m || u[16] !== I ? (c = null == m ? I : (0, a.jsx)("div", {
                    style: {
                        height: p,
                        paddingBlockStart: m.blockStart,
                        paddingBlockEnd: m.blockEnd,
                        paddingInlineStart: m.inlineStart,
                        paddingInlineEnd: m.inlineEnd
                    },
                    children: I
                }), u[14] = p, u[15] = m, u[16] = I, u[17] = c) : c = u[17], c
            }
        })
    }),
    engp: (function(e, t, n) {
        n.d(t, {
            a: () => w,
            sendMcpAppMessage: () => y
        });
        var a = n("kSHG"),
            i = n("HVBu"),
            r = n.n(i),
            o = n("IhIa"),
            s = n("Ci8z"),
            l = n("Cslg"),
            c = n("dsow"),
            u = n("ABep"),
            d = n("oyxz"),
            p = n("RNul"),
            m = n("SGsN");
        let f = (0, u.jsx)(d.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open",
            description: "Button that opens the new chat containing the message sent by a plugin"
        });

        function g(e, t, n) {
            return e.get(m.f).info((0, u.jsx)(d.a, {
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
                    label: f,
                    onClick: () => {
                        n()
                    }
                }
            })
        }
        var h = n("WBiY"),
            b = n("P93s"),
            v = n("kfGJ");
        async function y(e) {
            let {
                untrustedAppMessage: t,
                prompt: n,
                send: a,
                signal: i,
                messageAttachment: r,
                modelContextAttachments: o,
                requestConfirmation: s
            } = e;
            i.throwIfAborted();
            let l = {
                turnTrigger: "mcp_app_follow_up",
                addedFiles: [],
                fileAttachments: [],
                ideContext: null,
                imageAttachments: [],
                mcpAppModelContextAttachments: [...o, ...null == r || r.content?.length === 0 ? [] : [r]],
                prompt: n,
                untrustedAppMessage: t
            };
            await a(l, s)
        }

        function w(e) {
            let {
                scope: t,
                recipient: i,
                getNewThreadDestination: p,
                globalEntrypointIdentity: y,
                canCreateCodexThreads: w,
                hasUserGesture: I,
                assertActive: _,
                sourceName: x,
                toolOrigin: S,
                signal: E
            } = e;
            return (e, A) => (0, c.c)({
                context: e,
                signal: E,
                requestConfirmation: A,
                send: async e => {
                    _();
                    let c = (0, h.b)(i);
                    if (void 0 === c && (c = null != p ? p() : null == i ? {
                            kind: "app-server",
                            hostId: v.a
                        } : null), null == c || "app-server" === c.kind && !w) throw (0, b.a)("New conversations are unavailable for this view", a.q.MethodNotFound);
                    E.throwIfAborted();
                    let A = new AbortController,
                        C = t.get(l.f),
                        M = t.get(l.j),
                        P = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.f) !== C || t(l.j) !== M) && A.abort()
                        }),
                        T = (0, s.a)(),
                        k = g(t, T);
                    r()(e => e());
                    let R = e => {
                            A.signal.aborted || (0, o.c)(e) || t.get(m.f).danger(e instanceof Error ? e.message : String(e), {
                                id: T,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        j = r()(() => {
                            A.signal.removeEventListener("abort", j), P(), k?.close()
                        }),
                        N = !1;
                    A.signal.addEventListener("abort", j, {
                        once: !0
                    });
                    let D = () => A.abort();
                    E.addEventListener("abort", D, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(17982)]).then(n.bind(n, "VWsy"));
                        _(), A.signal.throwIfAborted(), E.removeEventListener("abort", D), await a(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: y,
                            hasUserGesture: I,
                            onDeferredCreation: e => {
                                N = !0, e.then(j, e => {
                                    R(e), j()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (k = g(t, T, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(m.f).info((0, u.jsx)(d.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    description: "Toast confirming that the named app has started a new chat",
                                    values: {
                                        appName: x
                                    }
                                }), {
                                    id: T,
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
                            sourceName: x,
                            toolOrigin: S,
                            signal: A.signal
                        });
                        return
                    } catch (e) {
                        throw R(e), e
                    } finally {
                        E.removeEventListener("abort", D), N || j()
                    }
                }
            })
        }
    }),
    jAhM: (function(e, t, n) {
        var a = n("bTvG"),
            i = n("iRMi"),
            r = n("mfKi"),
            o = n("xnQm"),
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
                    toolResult: m,
                    connect: f,
                    open: g,
                    decline: h,
                    onShown: b,
                    onInstallClick: v,
                    onSuggestionInteraction: y,
                    isCurrent: w = () => !0
                } = e, I = u.e.safeParse(m.structuredContent);
                if (!I.success) return null;
                let _ = (0, s.g)({
                        toolResult: m
                    }),
                    x = u.c.safeParse(_?._meta ?? _),
                    S = x.success ? x.data["openai/plugin_suggestion_id"] : void 0,
                    E = {
                        chatgpt: n,
                        source: i.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: S,
                        surface: i.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    A = (e, i, o) => {
                        try {
                            (0, c.a)(t, r.CodexPluginAction, {
                                source: E.source,
                                suggestionId: S,
                                surface: E.surface,
                                action: e,
                                remotePluginId: i,
                                result: r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: r.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != S && (e !== r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != o) && (0, c.a)(t, a.q, {
                                action: e === r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: i,
                                pluginIds: o,
                                result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                                suggestionId: S,
                                productExperience: n.productExperience,
                                surface: n.surface
                            })
                        } catch {}
                    },
                    C = new Set,
                    M = e => {
                        let t = u.a.parse(e),
                            n = I.data.suggestions.find(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.pluginId
                            });
                        if (!w() || null == n || null != t.suggestionId && t.suggestionId !== S) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return n
                    };
                return {
                    requestDeclinePluginSuggestions: null == h ? void 0 : () => h(I.data.suggestions),
                    sendInstrument: e => {
                        let t = u.b.safeParse(e);
                        if (!w() || !t.success || t.data.payload.suggestion_id !== S || !I.data.suggestions.some(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.data.payload.remote_plugin_id
                            })) return;
                        let n = t.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                            if (!t.data.payload.plugin_ids.includes(n) || C.has(n)) return;
                            C.add(n), y?.(n, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed"), b?.(n);
                            return
                        }
                        let a = t.data.payload.plugin_ids;
                        A(r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => I.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = M(e);
                        return v?.(t.plugin_id), y?.(t.plugin_id, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), A(r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), f(t, E)
                    },
                    requestOpenPlugin: async e => {
                        let i = M(e);
                        if (null != n && null != g) try {
                            (0, c.a)(t, a.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: i.plugin_id,
                                suggestionId: S,
                                surface: n.surface
                            })
                        } catch {}
                        null != g ? await g(i) : await p((0, l.a)({
                            hostId: d,
                            pluginId: i.plugin_id,
                            remoteMarketplaceName: o.Xc
                        }))
                    }
                }
            }
        })
    }),
    AHnN: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            o = n("iTtm"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("ygO2"),
            u = n("Wdu7"),
            d = n("ZiSI"),
            p = n("Odi7"),
            m = n("tSEg"),
            f = n("WFY2"),
            g = n("pZTm"),
            h = n("FZiz"),
            b = n("C1SW"),
            v = n("ALWK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, y, w, I, _, x, S, E, A, C, M, P, T = (0, i.c)(103),
                    {
                        resource: k,
                        error: R,
                        errorTitle: j,
                        errorIllustration: N,
                        hostDisplayModes: D,
                        fullSurface: O,
                        hostScroll: L,
                        inlineSurface: q,
                        mcpAppId: U,
                        onRetryResourceRead: F,
                        renderErrorActions: W,
                        pluginName: G,
                        presentation: H,
                        showLoadingStatus: B
                    } = e,
                    z = void 0 !== O && O,
                    V = void 0 !== L && L,
                    $ = void 0 === q ? "standalone" : q,
                    X = void 0 === B || B,
                    Y = (0, o.y)(m.a),
                    J = (0, o.x)(v.j, U),
                    K = J?.content.resource;
                T[0] !== R || T[1] !== k || T[2] !== K ? (t = null == K ? k : {
                    data: K,
                    error: R ?? null,
                    isLoading: !1
                }, T[0] = R, T[1] = k, T[2] = K, T[3] = t) : t = T[3];
                let Z = t,
                    {
                        data: Q,
                        isLoading: ee
                    } = Z,
                    et = Q?.html ?? null;
                T[4] !== Z || T[5] !== D ? (n = (0, b.c)(Z, D), T[4] = Z, T[5] = D, T[6] = n) : n = T[6];
                let en = n,
                    ea = (0, o.x)(v.u, U),
                    ei = (0, o.x)(v.v, U),
                    er = z || "inline" === H,
                    [eo, es] = (0, s.useState)(null),
                    el = null != J,
                    ec = Q?.heightHint ?? null,
                    eu = Q?.minFrameHeight ?? null;
                T[7] !== ea.intrinsicHeight || T[8] !== V || T[9] !== ec || T[10] !== eu ? (y = (0, p.a)(ea.intrinsicHeight, ec, eu, V), T[7] = ea.intrinsicHeight, T[8] = V, T[9] = ec, T[10] = eu, T[11] = y) : y = T[11];
                let ed = y,
                    ep = !z && Q?.fitWidth ? ea.intrinsicWidth ?? Q.widthHint : void 0,
                    em = z ? void 0 : Q?.inlineFramePadding,
                    ef = null == em ? void 0 : -em.blockStart,
                    eg = null == em ? void 0 : -em.blockEnd,
                    eh = null == em ? void 0 : -em.inlineStart,
                    eb = null == em ? void 0 : -em.inlineEnd;
                T[12] !== ep || T[13] !== ef || T[14] !== eg || T[15] !== eh || T[16] !== eb ? (w = {
                    width: ep,
                    marginBlockStart: ef,
                    marginBlockEnd: eg,
                    marginInlineStart: eh,
                    marginInlineEnd: eb
                }, T[12] = ep, T[13] = ef, T[14] = eg, T[15] = eh, T[16] = eb, T[17] = w) : w = T[17];
                let ev = w,
                    ey = "error" === en.kind ? en.error : ea.sandboxError;
                T[18] !== en.error || T[19] !== en.kind ? (I = null, "too-large" === en.kind ? I = "HTML exceeds display limit" : "error" === en.kind && en.error instanceof b.a && (I = "No supported display mode"), T[18] = en.error, T[19] = en.kind, T[20] = I) : I = T[20];
                let ew = ee ? null : ey,
                    eI = ew?.message;
                T[21] !== I || T[22] !== Q?.availableDisplayModes || T[23] !== Q?.htmlByteLength || T[24] !== ew || T[25] !== D || T[26] !== U ? (_ = () => {
                    (null != I || null != ew) && f.a.warning("MCP app error displayed", {
                        safe: {
                            reason: I ?? "App could not be displayed",
                            htmlByteLength: Q?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: U,
                            error: ew,
                            hostDisplayModes: D,
                            availableDisplayModes: Q?.availableDisplayModes
                        }
                    })
                }, T[21] = I, T[22] = Q?.availableDisplayModes, T[23] = Q?.htmlByteLength, T[24] = ew, T[25] = D, T[26] = U, T[27] = _) : _ = T[27];
                let e_ = (0, s.useEffectEvent)(_);
                if (T[28] !== e_ ? (x = () => {
                        e_()
                    }, T[28] = e_, T[29] = x) : x = T[29], T[30] !== I || T[31] !== eI || T[32] !== U ? (S = [I, eI, U], T[30] = I, T[31] = eI, T[32] = U, T[33] = S) : S = T[33], (0, s.useEffect)(x, S), T[34] !== el || T[35] !== eo || T[36] !== U || T[37] !== Y ? (E = () => {
                        if (el) return (0, v.E)(Y, U, eo), () => {
                            (0, v.b)(Y, U, eo)
                        }
                    }, A = [eo, el, U, Y], T[34] = el, T[35] = eo, T[36] = U, T[37] = Y, T[38] = E, T[39] = A) : (E = T[38], A = T[39]), (0, s.useLayoutEffect)(E, A), "too-large" === en.kind) {
                    let e;
                    return T[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(u.a, {
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
                    }), T[40] = e) : e = T[40], e
                }
                if (ee || !ei && null != et && null == ey) {
                    let e, t, n, i;
                    if ("pending" === H && !z) {
                        let e;
                        return X ? (T[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app",
                                description: "Accessible label for the MCP app loading placeholder"
                            })
                        }), T[41] = e) : e = T[41], e) : null
                    }
                    if (!er) {
                        let e;
                        return T[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                            ref: es,
                            hidden: !0
                        }), T[42] = e) : e = T[42], e
                    }
                    let o = ee ? null : es,
                        s = null == em && "max-w-full",
                        c = z && "h-full";
                    T[43] !== s || T[44] !== c ? (e = (0, r.b)(s, c), T[43] = s, T[44] = c, T[45] = e) : e = T[45];
                    let u = "standalone" === $ && "rounded-lg border";
                    T[46] !== u ? (t = (0, r.b)("w-full border-subtle", u), T[46] = u, T[47] = t) : t = T[47];
                    let d = z ? "100%" : ed;
                    return T[48] !== z || T[49] !== V || T[50] !== em || T[51] !== X || T[52] !== t || T[53] !== d ? (n = (0, a.jsx)(h.a, {
                        className: t,
                        height: d,
                        inlineFramePadding: em,
                        fullSurface: z,
                        allowCompact: V,
                        showLoadingStatus: X
                    }), T[48] = z, T[49] = V, T[50] = em, T[51] = X, T[52] = t, T[53] = d, T[54] = n) : n = T[54], T[55] !== ev || T[56] !== $ || T[57] !== o || T[58] !== e || T[59] !== n ? (i = (0, a.jsx)("div", {
                        ref: o,
                        className: e,
                        style: ev,
                        "data-mcp-app-inline-surface": $,
                        children: n
                    }), T[55] = ev, T[56] = $, T[57] = o, T[58] = e, T[59] = n, T[60] = i) : i = T[60], i
                }
                if (null != ey) {
                    let e, t, n, i, o;
                    T[61] !== G || T[62] !== j ? (e = j ?? (null == G ? (0, a.jsx)(l.a, {
                        ...g.a.displayUnnamedApp
                    }) : (0, a.jsx)(l.a, {
                        ...g.a.displayApp,
                        values: {
                            appName: G
                        }
                    })), T[61] = G, T[62] = j, T[63] = e) : e = T[63];
                    let s = e,
                        p = "error" === en.kind ? null != F : null != ea.sandboxError;
                    T[64] !== p || T[65] !== en.kind || T[66] !== z || T[67] !== U || T[68] !== F || T[69] !== G || T[70] !== Y ? (t = p ? (0, a.jsx)(c.a, {
                        color: "secondary",
                        size: z && null != G ? "large" : "compact",
                        onClick: () => {
                            "error" === en.kind ? F?.() : (0, v.C)(Y, U)
                        },
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppRetry",
                            defaultMessage: "Try again",
                            description: "Button label to retry loading an MCP app"
                        })
                    }) : null, T[64] = p, T[65] = en.kind, T[66] = z, T[67] = U, T[68] = F, T[69] = G, T[70] = Y, T[71] = t) : t = T[71];
                    let m = t;
                    T[72] !== W || T[73] !== m ? (n = W ? W(m) : m, T[72] = W, T[73] = m, T[74] = n) : n = T[74];
                    let f = n;
                    if (!z || null != G) {
                        let e, t, n, i = z ? "h-full" : "h-60",
                            o = !z && "standalone" === $ && "overflow-hidden rounded-lg border border-strong";
                        T[75] !== i || T[76] !== o ? (e = (0, r.b)(i, o), T[75] = i, T[76] = o, T[77] = e) : e = T[77];
                        let l = !z;
                        return T[78] !== f || T[79] !== N || T[80] !== s || T[81] !== l ? (t = (0, a.jsx)(d.a, {
                            compact: l,
                            title: s,
                            illustration: N,
                            description: null,
                            actions: f
                        }), T[78] = f, T[79] = N, T[80] = s, T[81] = l, T[82] = t) : t = T[82], T[83] !== e || T[84] !== t ? (n = (0, a.jsx)("div", {
                            className: e,
                            children: t
                        }), T[83] = e, T[84] = t, T[85] = n) : n = T[85], n
                    }
                    return T[86] !== s ? (i = (0, a.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: (0, a.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: s
                        })
                    }), T[86] = s, T[87] = i) : i = T[87], T[88] !== f || T[89] !== i ? (o = (0, a.jsx)(u.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [i, f]
                        })
                    }), T[88] = f, T[89] = i, T[90] = o) : o = T[90], o
                }
                if (!er) {
                    let e;
                    return T[91] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                        ref: es,
                        hidden: !0
                    }), T[91] = e) : e = T[91], e
                }
                if (null == et) {
                    let e;
                    return T[92] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), T[92] = e) : e = T[92], e
                }
                let ex = null == em && "w-full max-w-full",
                    eS = z && "h-full";
                T[93] !== ex || T[94] !== eS ? (C = (0, r.b)("overflow-hidden", ex, eS), T[93] = ex, T[94] = eS, T[95] = C) : C = T[95];
                let eE = z ? "100%" : ed;
                return T[96] !== ev || T[97] !== eE ? (M = {
                    ...ev,
                    height: eE
                }, T[96] = ev, T[97] = eE, T[98] = M) : M = T[98], T[99] !== $ || T[100] !== C || T[101] !== M ? (P = (0, a.jsx)("div", {
                    ref: es,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": $,
                    className: C,
                    style: M
                }), T[99] = $, T[100] = C, T[101] = M, T[102] = P) : P = T[102], P
            }
        })
    }),
    JXtc: (function(e, t, n) {
        var a = n("z8ZL"),
            i = n("xnQm"),
            r = n("ASxG"),
            o = n("CsuQ"),
            s = n("WFY2");
        let l = new Set(["text/html", ...i.Pc]),
            c = /^([a-z][a-z0-9+.-]*:\/\/)?%2a(?=\.)/i,
            u = /[\s;,"']/,
            d = r.array(r.string()).transform(e => v(e, !1, !1)),
            p = r.array(r.string()).transform(e => v(e, !1, !0)),
            m = r.array(r.string()).transform(e => v(e, !0, !0)),
            f = r.union([r.object({}), r.boolean().transform(e => e ? {} : void 0)]),
            g = a.d.extend({
                camera: f.optional(),
                microphone: f.optional(),
                geolocation: f.optional(),
                clipboardWrite: f.optional()
            }),
            h = r.object({
                _meta: r.object({
                    "openai/widgetCSP": r.object({
                        baseUriDomains: d.optional(),
                        base_uri_domains: d.optional(),
                        connectDomains: m.optional(),
                        connect_domains: m.optional(),
                        frameDomains: d.optional(),
                        frame_domains: d.optional(),
                        resourceDomains: p.optional(),
                        resource_domains: p.optional(),
                        redirect_domains: d.optional()
                    }).strip().optional(),
                    "openai/widgetDomain": r.string().optional(),
                    "openai/widgetHeightHint": r.number().positive().optional().catch(void 0),
                    "openai/widgetWidthHint": r.number().positive().optional().catch(void 0),
                    "openai/widgetFitWidth": r.boolean().optional().catch(void 0),
                    "openai/widgetShowCodexWidgetInline": r.boolean().optional(),
                    "openai/widgetHideActions": r.boolean().optional().catch(void 0),
                    "openai/widgetHideAttribution": r.boolean().optional().catch(void 0),
                    "openai/widgetMinFrameHeight": r.number().nonnegative().optional().catch(void 0),
                    "openai/widgetPrefersBorder": r.boolean().optional(),
                    "openai/ui": r.object({
                        availableDisplayModes: r.array(a.b).optional(),
                        preferredDisplayMode: a.b.optional()
                    }).optional(),
                    ui: r.object({
                        csp: r.object({
                            baseUriDomains: d.optional(),
                            connectDomains: m.optional(),
                            frameDomains: d.optional(),
                            resourceDomains: p.optional()
                        }).strip().optional(),
                        domain: r.string().optional(),
                        prefersBorder: r.boolean().optional(),
                        permissions: g.optional().catch(void 0)
                    }).strip().optional()
                }).strip().optional(),
                mimeType: r.string().optional().catch(void 0),
                text: r.string().optional().catch(void 0)
            }).strip();

        function b(e) {
            let t = null;
            for (let n of e?.contents ?? []) {
                let e = h.safeParse(n);
                if (!e.success) continue;
                if (e.data.mimeType === i.Nc) {
                    null == t && (t = {
                        htmlFallback: null,
                        kind: "dil",
                        source: e.data.text ?? null
                    });
                    continue
                }
                if (null == e.data.mimeType || !l.has(e.data.mimeType)) continue;
                let a = e.data._meta?.["openai/widgetHeightHint"],
                    r = e.data._meta?.["openai/widgetMinFrameHeight"],
                    o = e.data._meta?.["openai/ui"],
                    s = {
                        requiresMcpInitialization: "text/html;profile=mcp-app" === e.data.mimeType,
                        availableDisplayModes: o?.availableDisplayModes,
                        preferredDisplayMode: o?.preferredDisplayMode,
                        csp: function(e) {
                            let t = e?.ui?.csp,
                                n = e?.["openai/widgetCSP"],
                                a = t?.resourceDomains ?? n?.resourceDomains ?? n?.resource_domains ?? [],
                                i = t?.frameDomains ?? n?.frameDomains ?? n?.frame_domains ?? [];
                            return {
                                baseUriDomains: t?.baseUriDomains ?? n?.baseUriDomains ?? n?.base_uri_domains ?? [],
                                connectDomains: [...new Set([...t?.connectDomains ?? n?.connectDomains ?? n?.connect_domains ?? [], ...a])],
                                frameDomains: i,
                                includeDefaultDomains: !1,
                                isTrusted: null != t || null != n,
                                resourceDomains: a
                            }
                        }(e.data._meta),
                        permissions: e.data._meta?.ui?.permissions,
                        redirectDomains: e.data._meta?.["openai/widgetCSP"]?.redirect_domains,
                        heightHint: a,
                        widthHint: e.data._meta?.["openai/widgetWidthHint"],
                        fitWidth: e.data._meta?.["openai/widgetFitWidth"],
                        hideActions: e.data._meta?.["openai/widgetHideActions"],
                        hideAttribution: e.data._meta?.["openai/widgetHideAttribution"],
                        html: e.data.text ?? null,
                        htmlByteLength: new Blob([e.data.text ?? ""]).size,
                        kind: "html",
                        minFrameHeight: r,
                        prefersBorder: e.data._meta?.["openai/widgetPrefersBorder"] ?? e.data._meta?.ui?.prefersBorder ?? !1,
                        isCollapsible: !e.data._meta?.["openai/widgetShowCodexWidgetInline"],
                        widgetDomain: e.data._meta?.ui?.domain || e.data._meta?.["openai/widgetDomain"] || null
                    };
                return null == t ? s : {
                    ...t,
                    htmlFallback: s
                }
            }
            return t
        }

        function v(e, t, n) {
            return [...new Set(e.flatMap(e => {
                let a = function(e, t, n) {
                    let a, i = e.trim();
                    if (0 === i.length || u.test(i)) return null;
                    if ("blob:" === i || "data:" === i) return i;
                    let r = i.replace(c, "$1*"),
                        o = /^[a-z][a-z0-9+.-]*:\/\//i.test(r) ? r : `https://${r}`;
                    try {
                        a = new URL(o)
                    } catch {
                        return null
                    }
                    if (!("https:" === a.protocol || t && "wss:" === a.protocol) || "*" === a.hostname || a.username.length > 0 || a.password.length > 0) return null;
                    let s = a.hostname.replace(/^%2a(?=\.)/i, "*");
                    return s.includes("*") && !s.startsWith("*.") ? null : `${a.protocol}//${s}${a.port.length>0?`:${a.port}`:""}`
                }(e, t, n);
                return null == a ? [] : [a]
            }))]
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    hasResourceError: t = !1,
                    isDilEnabled: n,
                    isResourceLoading: a = !1,
                    renderData: i,
                    resourceUri: r,
                    shouldRenderMcpApp: o
                } = e;
                if (!o) return {
                    kind: "fallback"
                };
                if (null == i || "html" === i.kind && null == i.html) return a || t ? {
                    kind: "html",
                    renderData: null
                } : {
                    kind: "fallback"
                };
                if ("dil" !== i.kind) return {
                    kind: "html",
                    renderData: i
                };
                if (!n || null == r || null == i.source) {
                    let e = i.htmlFallback;
                    return e?.html == null ? t ? {
                        kind: "html",
                        renderData: null
                    } : {
                        kind: "fallback"
                    } : {
                        kind: "html",
                        renderData: e
                    }
                }
                return t ? {
                    kind: "html",
                    renderData: null
                } : {
                    kind: "dil",
                    source: i.source
                }
            },
            b: b,
            c: function(e) {
                return e.endsWith(".internal.api.openai.org") || e.endsWith(".extapps.openai.org")
            },
            d: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b(e);
                if (null != n && ("html" === n.kind ? null != n.html : null != n.source || n.htmlFallback?.html != null)) return;
                let a = e.contents.map(e => {
                    let t = h.safeParse(e),
                        n = "missing_text";
                    return t.success ? null != t.data.mimeType && (l.has(t.data.mimeType) || t.data.mimeType === i.Nc) ? null != t.data.text && (n = "not_selected_for_rendering") : n = "unsupported_mime_type" : n = "invalid_resource_metadata", {
                        uri: e.uri,
                        mimeType: e.mimeType,
                        reason: n,
                        validationErrors: null == t.error ? void 0 : o.g(t.error)
                    }
                });
                s.a.warning("App resource has no usable document", {
                    safe: {
                        contentCount: a.length,
                        reasons: [...new Set(a.map(e => {
                            let {
                                reason: t
                            } = e;
                            return t
                        }))]
                    },
                    sensitive: {
                        ...t,
                        contents: a
                    }
                })
            },
            e: function(e) {
                return !1
            }
        })
    }),
    n2Dd: (function(e, t, n) {
        let a;
        var i = n("eB3o"),
            r = n("kSHG"),
            o = n("iTtm"),
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
            m = p.refine(e => URL.parse(e)?.protocol === "https:"),
            f = s.object({
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
                            href: m.optional(),
                            icons: s.array(r.u).max(8).optional(),
                            icon: d.optional(),
                            sources: s.array(s.object({
                                title: s.string().min(1).max(2e3),
                                href: m.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            g = (0, o.v)(l.a, e => null);
        a = (0, i._)(Symbol.dispose), n.d(t, {}, {
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
                        params: f
                    }).safeParse(e);
                    if (!a.success || t.aborted) return null;
                    let i = a.data.params,
                        r = [...i.titleActions, ...i.actions.flatMap(e => e.menu?.items ?? [e])],
                        o = e => {
                            let a = r.find(t => t.id === e && !t.disabled);
                            t.aborted || this.invoke !== o || this.scope.get(g, this.appId)?.invoke !== o || null == a || (null != a.href ? this.openExternal(a.href) : n({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: a.id
                                }
                            }))
                        };
                    return this.invoke = o, this.scope.set(g, this.appId, {
                        header: i,
                        invoke: o
                    }), Promise.resolve({
                        accepted: !0
                    })
                } [a]() {
                    this.scope.get(g, this.appId)?.invoke === this.invoke && this.scope.set(g, this.appId, null), this.invoke = null
                }
            },
            c: g
        })
    }),
    ze43: (function(e, t, n) {
        n.d(t, {
            a: () => b,
            b: () => h,
            c: () => v
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            s = n("I7bK"),
            l = n("ipIJ"),
            c = n("kRV1"),
            u = n("Vlqh");
        n("kfGJ"), u.a;
        var d = n("ALWK"),
            p = n("tSEg"),
            m = n("yyZv"),
            f = n("C1SW"),
            g = n("vzzY");

        function h(e) {
            let t, n, a = (0, i.c)(6),
                {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                } = e,
                u = (0, r.y)(p.a);
            return a[0] !== s || a[1] !== c || a[2] !== l || a[3] !== u ? (t = () => {
                (0, d.F)(u, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, u], a[0] = s, a[1] = c, a[2] = l, a[3] = u, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, o.useLayoutEffect)(t, n), null
        }

        function b(e) {
            let t, n, a = (0, i.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, r.y)(p.a);
            return a[0] !== s || a[1] !== l || a[2] !== c ? (t = () => {
                c.set(d.l, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, o.useLayoutEffect)(t, n), null
        }

        function v(e) {
            let t, n, u, h, b, v, y, w, I, _ = (0, i.c)(117),
                {
                    recipient: x,
                    analyticsContext: S,
                    resource: E,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: M,
                    conversationId: P,
                    fullSurface: T,
                    modalOpen: k,
                    hostScroll: R,
                    hostDisplayModes: j,
                    legacyPreferredDisplayMode: N,
                    inheritHostBackground: D,
                    hostId: O,
                    hostedInThreadScrollLayout: L,
                    resourceIdentity: q,
                    lifetime: U,
                    mcpAppId: F,
                    mcpAppScope: W,
                    sourceName: G,
                    mcpServerStatuses: H,
                    pluginId: B,
                    connectorId: z,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: Y,
                    plaidAccountId: J,
                    deepLink: K,
                    Frame: Z,
                    resolveResourceWatchPath: Q,
                    server: ee,
                    appIcon: et,
                    sidePanelTitle: en,
                    title: ea,
                    globalSurface: ei,
                    toolArguments: er,
                    toolResult: eo,
                    toolResultNotification: es,
                    toolCallStatus: el,
                    toolCallCancellationReason: ec,
                    viewParamsOverride: eu
                } = e,
                ed = void 0 === x ? null : x,
                ep = void 0 !== M && M,
                em = void 0 !== T && T,
                ef = void 0 !== R && R,
                eg = void 0 !== D && D,
                eh = void 0 !== ei && ei,
                eb = (0, r.y)(p.a),
                ev = (0, r.x)(d.s, F),
                ey = (0, r.z)(m.a);
            _[0] !== ed ? (t = null == ed ? void 0 : e => (0, l.a)(ed, e), _[0] = ed, _[1] = t) : t = _[1];
            let ew = t;
            _[2] !== U || _[3] !== F || _[4] !== eb ? (n = () => {
                if ("component" === U) return () => {
                    (0, d.z)(eb, F)
                }
            }, u = [U, F, eb], _[2] = U, _[3] = F, _[4] = eb, _[5] = n, _[6] = u) : (n = _[5], u = _[6]), (0, o.useLayoutEffect)(n, u);
            let eI = (0, o.useContext)(s.c)?.rightPanelLayoutTick,
                e_ = void 0 !== B ? B : H?.data.find(e => {
                    let {
                        name: t
                    } = e;
                    return t === ee
                })?.pluginId,
                {
                    bridge: ex,
                    pluginId: eS,
                    isLoading: eE
                } = (0, r.x)(c.a, {
                    hostId: O,
                    pluginId: e_,
                    connectorId: z,
                    server: ee
                }),
                eA = e_ ?? eS,
                eC = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: O,
                    pluginId: eA
                }) ? void 0 : eA,
                eM = E.isLoading || eE;
            _[7] !== j || _[8] !== eM || _[9] !== E ? (h = (0, f.c)({
                ...E,
                isLoading: eM
            }, j), _[7] = j, _[8] = eM, _[9] = E, _[10] = h) : h = _[10];
            let eP = h;
            return _[11] !== S || _[12] !== et || _[13] !== P || _[14] !== K || _[15] !== eP || _[16] !== ex || _[17] !== eC || _[18] !== em || _[19] !== $ || _[20] !== C || _[21] !== eh || _[22] !== j || _[23] !== O || _[24] !== ef || _[25] !== L || _[26] !== eg || _[27] !== X || _[28] !== ey || _[29] !== N || _[30] !== V || _[31] !== F || _[32] !== W || _[33] !== H || _[34] !== k || _[35] !== ew || _[36] !== ep || _[37] !== J || _[38] !== ed || _[39] !== A || _[40] !== Q || _[41] !== e_ || _[42] !== q || _[43] !== eI || _[44] !== eb || _[45] !== ee || _[46] !== en || _[47] !== G || _[48] !== ea || _[49] !== er || _[50] !== ec || _[51] !== el || _[52] !== eo || _[53] !== es || _[54] !== eu || _[55] !== Y ? (b = () => {
                ey || "ready" === eP.kind && null != q && (0, d.y)(eb, {
                    recipient: ed,
                    onSessionDispose: ew,
                    resource: eP.data,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: ep,
                    conversationId: P,
                    firstPartyPluginBridge: ex,
                    firstPartyPluginLoggerPluginId: eC,
                    fullSurface: em,
                    modalOpen: k,
                    hostScroll: ef,
                    hostDisplayModes: j,
                    legacyPreferredDisplayMode: N,
                    inheritHostBackground: eg,
                    hostId: O,
                    hostedInThreadScrollLayout: L,
                    resourceIdentity: q,
                    analyticsContext: S,
                    inlineFrameContainer: null,
                    mcpAppId: F,
                    mcpAppScope: W,
                    sourceName: G,
                    mcpServerStatuses: H,
                    pluginId: e_,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: Y,
                    plaidAccountId: J,
                    deepLink: K,
                    rightPanelLayoutTick: eI,
                    resolveResourceWatchPath: Q,
                    server: ee,
                    appIcon: et,
                    sidePanelTitle: en,
                    title: ea,
                    globalSurface: eh,
                    toolArguments: er,
                    toolResult: eo,
                    toolResultNotification: es,
                    toolCallStatus: el,
                    toolCallCancellationReason: ec,
                    viewParamsOverride: eu
                })
            }, _[11] = S, _[12] = et, _[13] = P, _[14] = K, _[15] = eP, _[16] = ex, _[17] = eC, _[18] = em, _[19] = $, _[20] = C, _[21] = eh, _[22] = j, _[23] = O, _[24] = ef, _[25] = L, _[26] = eg, _[27] = X, _[28] = ey, _[29] = N, _[30] = V, _[31] = F, _[32] = W, _[33] = H, _[34] = k, _[35] = ew, _[36] = ep, _[37] = J, _[38] = ed, _[39] = A, _[40] = Q, _[41] = e_, _[42] = q, _[43] = eI, _[44] = eb, _[45] = ee, _[46] = en, _[47] = G, _[48] = ea, _[49] = er, _[50] = ec, _[51] = el, _[52] = eo, _[53] = es, _[54] = eu, _[55] = Y, _[56] = b) : b = _[56], _[57] !== Z || _[58] !== S || _[59] !== et || _[60] !== P || _[61] !== K || _[62] !== eP || _[63] !== ex || _[64] !== eC || _[65] !== em || _[66] !== $ || _[67] !== C || _[68] !== eh || _[69] !== j || _[70] !== O || _[71] !== ef || _[72] !== L || _[73] !== eg || _[74] !== X || _[75] !== ey || _[76] !== eM || _[77] !== N || _[78] !== U || _[79] !== V || _[80] !== F || _[81] !== W || _[82] !== H || _[83] !== k || _[84] !== ew || _[85] !== ep || _[86] !== J || _[87] !== ed || _[88] !== A || _[89] !== Q || _[90] !== e_ || _[91] !== q || _[92] !== eI || _[93] !== eb || _[94] !== ee || _[95] !== en || _[96] !== G || _[97] !== ea || _[98] !== er || _[99] !== ec || _[100] !== el || _[101] !== eo || _[102] !== es || _[103] !== eu || _[104] !== Y ? (v = [S, C, A, eP, ep, ed, ew, P, ex, eC, em, k, ef, j, N, eg, O, L, q, ey, eM, U, F, W, G, H, e_, V, $, X, Y, J, K, Z, eI, Q, eb, ee, et, en, ea, eh, er, eo, es, el, ec, eu], _[57] = Z, _[58] = S, _[59] = et, _[60] = P, _[61] = K, _[62] = eP, _[63] = ex, _[64] = eC, _[65] = em, _[66] = $, _[67] = C, _[68] = eh, _[69] = j, _[70] = O, _[71] = ef, _[72] = L, _[73] = eg, _[74] = X, _[75] = ey, _[76] = eM, _[77] = N, _[78] = U, _[79] = V, _[80] = F, _[81] = W, _[82] = H, _[83] = k, _[84] = ew, _[85] = ep, _[86] = J, _[87] = ed, _[88] = A, _[89] = Q, _[90] = e_, _[91] = q, _[92] = eI, _[93] = eb, _[94] = ee, _[95] = en, _[96] = G, _[97] = ea, _[98] = er, _[99] = ec, _[100] = el, _[101] = eo, _[102] = es, _[103] = eu, _[104] = Y, _[105] = v) : v = _[105], (0, o.useLayoutEffect)(b, v), _[106] !== Z || _[107] !== U || _[108] !== F || _[109] !== eb || _[110] !== ev ? (y = () => {
                "component" !== U && null != ev && (0, g.b)(eb, {
                    Frame: Z,
                    lifetime: U,
                    sessionId: ev,
                    sourceMcpAppId: F
                })
            }, w = [Z, U, F, ev, eb], _[106] = Z, _[107] = U, _[108] = F, _[109] = eb, _[110] = ev, _[111] = y, _[112] = w) : (y = _[111], w = _[112]), (0, o.useLayoutEffect)(y, w), _[113] !== Z || _[114] !== U || _[115] !== ev ? (I = "component" === U && null != ev ? (0, a.jsx)(Z, {
                sessionId: ev
            }, ev) : null, _[113] = Z, _[114] = U, _[115] = ev, _[116] = I) : I = _[116], I
        }
    })
};