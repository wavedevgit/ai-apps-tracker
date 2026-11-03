export const __rspack_esm_ids = [459515];
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
            if (!A(e) || "structured_event" !== e.type || !A(e.messageType) || "string" != typeof e.messageType.$type || 0 === e.messageType.$type.length || !A(e.payload)) return;
            let t = e.payload;
            if (!["@type", "codexMetadata", "codex_metadata", "webFrontend", "web_frontend"].some(e => Object.hasOwn(t, e))) return {
                type: "structured_event",
                messageType: {
                    $type: e.messageType.$type
                },
                payload: e.payload
            }
        }

        function A(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
    }),
    Btes: (function(e, t, n) {
        var a = n("kSHG"),
            i = n("Cslg"),
            r = n("dQRk"),
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
                let m = t.get(i.f);
                if (null == c || null == m) throw Error("MCP app connection identity changed");
                c.assertActive();
                let f = "tpp" === t.get(r.x, n.id);
                return (0, o.b)({
                    scope: t,
                    accountId: m,
                    appUri: `connectors://${l.connectorId}`,
                    chatGptConversationId: n.id,
                    threadId: f ? n.id : void 0,
                    productSku: f ? "TPP" : void 0,
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
        var a = n("iTtm"),
            i = n("bg18"),
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
            r = n("bg18"),
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

        function A(e) {
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
                    navigate: E,
                    access: C,
                    server: M,
                    sessionId: P,
                    sourceMcpAppId: T,
                    toolResult: k
                } = e;
                if (!A({
                        hostId: a,
                        mcpAppScope: c,
                        access: C,
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
                    O = (e, a, i) => {
                        let {
                            accountId: r,
                            uiUserId: o
                        } = C;
                        null == r || null == o || t.get(x.j) || t.get(b.q, P)?.sourceMcpAppId !== T || (0, w.a)({
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
                    navigate: E,
                    toolResult: k,
                    onSuggestionInteraction: O,
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
                            if (!(0, r.Th)(a)) {
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
                            let [S, A] = await Promise.all([x.getOrFetch(), (0, p.a)(t, a, n)]);
                            if (!S.summary.installed || !S.summary.enabled || null != S.summary.remotePluginId && S.summary.remotePluginId !== c || !S.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return A.has(t)
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
                        let r = e => !e(x.j) && e(b.q, P)?.sourceMcpAppId === T,
                            o = h.d.safeParse(t.get(b.v, P) ?? {});
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
                            of m) O(e, N?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(b.v, P, {
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
                    access: n,
                    server: a
                } = e, i = "connectorId" in n.serverIdentity ? n.serverIdentity.connectorId : null;
                return "internal://plugin-management-suggestions" === t.originResourceUri && (0, c.e)(a) && i === o.a && t.codexAppsToolScope?.connectorId === i
            },
            c: A
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
    cTih: (function(e, t, n) {
        let a, i, r;
        n.d(t, {
            a: () => nl
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
            w = n("bg18"),
            I = n("AuIy"),
            _ = n("F6B1"),
            x = n("zd8w"),
            S = n("v7qY"),
            A = n("Wf1j"),
            E = n("jqIZ"),
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
            O = C.object({
                phase: C.enum(["setup_intent_create", "payment_method_create", "setup_intent_confirm", "billing_profile_save", "billing_profile_retry_save", "auth_hold_confirm"]),
                mode: C.enum(["create", "edit"]),
                outcome: C.enum(["success", "error", "requires_action"]),
                failure_category: C.enum(["input_validation", "card_declined", "insufficient_funds", "incorrect_cvc", "expired_card", "authentication_failed", "payment_method_unavailable", "network", "provider_error", "missing_payment_method", "unknown"]).optional()
            }),
            D = C.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            q = {
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
            L = C.array(C.object({
                key: C.string(),
                value: C.unknown().optional()
            }).nullable().catch(null)),
            U = C.discriminatedUnion("type", [C.object({
                type: C.literal("event"),
                label: D,
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
                label: D,
                count: C.literal(1).optional(),
                tags: L
            })]);

        function F() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return C.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var G = n("StMt"),
            W = n("Dgwo"),
            H = n("tl5a"),
            B = n("URlz"),
            z = n("sM3V"),
            V = n("QcFS"),
            $ = n("ZU27"),
            X = n("DiD0"),
            J = n("SK3E"),
            K = n("gbrq"),
            Z = (n("Sbyb"), n("Btes")),
            Y = n("TSib"),
            Q = n("ipIJ"),
            ee = n("uoRg"),
            et = n("qXzS"),
            en = n("Q8aV"),
            ea = n("dN0a"),
            ei = n("qbxq"),
            er = n("uIyc"),
            eo = n("WBiY");

        function es(e) {
            if (e.attachment?.content?.some(e => !(0, ei.d)(e))) throw Error("App draft attachments must be visible to the user")
        }
        var el = n("Ot7V"),
            ec = n("B09n"),
            eu = n("PeqE"),
            ed = n("ywSA"),
            ep = n("kRV1"),
            em = n("eB3o"),
            ef = n("Fkn8");
        a = (0, em._)(Symbol.dispose);
        class eg {
            #e = new eh;
            #t;
            constructor(e) {
                this.#t = e.onDispose(() => {
                    this[Symbol.dispose]()
                }), new ef.a(this.#e, e.createRpcStub())
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
        i = (0, em._)(Symbol.dispose);
        class eh {
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
        var eb = n("WFY2"),
            ev = n("ReGc"),
            ey = n("rP0s"),
            ew = n("Cslg"),
            eI = n("ALWK"),
            e_ = n("F8wW"),
            ex = n("RFeS"),
            eS = n("lu7q"),
            eA = n("we56");
        let eE = C.object({
            prompt: C.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eC = n("o62A"),
            eM = n("SRbQ"),
            eP = n("TL6G");
        class eT {
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
                                e(ek(t.notification, n)).catch(() => {
                                    this.subscriptions.get(n)?.hostSubscriptionId === t.subscriptionId && this.unsubscribe(n).catch(() => {})
                                }), "notifications/events/terminated" === t.notification.method && (eb.a.info("App event subscription terminated", {
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
                (this.params.conversationId !== e || this.params.supported !== t) && (eb.a.info("Updating app event subscriptions for conversation", {
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
                        eb.a.info("Starting app event subscription", {
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
                        let t = (0, eM.a)(e, await (0, W.b)(this.params.scope, this.params.hostId).getFollowUpContext(i), !1);
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
                        }), eb.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: o.hostSubscriptionId
                            }
                        })
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, eM.e)(e)
                    }
                } catch (a) {
                    if (eb.a.warning("Failed to start app event subscription", {
                            safe: {
                                hostSubscriptionId: o.hostSubscriptionId
                            },
                            sensitive: {
                                error: a
                            }
                        }), this.subscriptions.get(r) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(r), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(ek({
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
                eb.a.info("Stopping app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                }), await this.params.scope.get(H.c, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
                    subscriptionId: e
                }).catch(t => {
                    throw eb.a.warning("Failed to stop app event subscription", {
                        safe: {
                            hostSubscriptionId: e
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }), eb.a.info("Stopped app event subscription", {
                    safe: {
                        hostSubscriptionId: e
                    }
                })
            }
        }

        function ek(e, t) {
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
        var eR = n("ustl"),
            ej = n("whdX");
        let eN = new Map;
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
                    t !== e && (this.subscriptions.size > 0 && await this.sync(e), this.params.conversationId = e, null != t && this.subscriptions.size > 0 && await (0, W.b)(this.params.scope, this.params.hostId).setOpenMcpResources(t, this.params.mcpAppId, []))
                })
            }
            connectNotificationSink(e) {
                this.isNotificationSinkConnected = !0;
                let t = eP.c.subscribe("mcp-resource-updated", t => {
                    t.hostId === this.params.hostId && t.server === this.params.server && t.threadId === this.params.conversationId && function(e, t) {
                        for (let n of t.keys())
                            if (e === n || e.startsWith(`${n}/`)) return !0;
                        return !1
                    }(t.notification.params.uri, this.subscriptions) && (eb.a.debug("Received app resource update", {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw new eq;
                    let n = this.getResourceWatchPath(e);
                    if (this.subscriptions.has(e)) return {};
                    this.subscriptions.set(e, n);
                    try {
                        await this.sync()
                    } catch (t) {
                        throw eb.a.warning("Failed to subscribe to app resource updates", {
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
                    t?.throwIfAborted(), this.params.resolveResourceWatchPath?.(e) == null && (0, eR.a)({
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
                        throw eb.a.warning("Failed to unsubscribe from app resource updates", {
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
                } = this.params, a = `${t}\0${n}`, i = (eN.get(a) ?? Promise.resolve()).then(e), r = i.then(() => void 0, () => void 0);
                return eN.set(a, r), r.then(() => {
                    eN.get(a) === r && eN.delete(a)
                }), i
            }
            getResourceWatchPath(e) {
                let t = this.params.resolveResourceWatchPath?.(e) ?? null;
                null == t && (0, eR.a)({
                    mcpAppScope: {
                        originResourceUri: this.params.originResourceUri
                    },
                    server: this.params.server,
                    uri: e
                });
                let n = t ?? (0, ej.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == n) throw new eD(e);
                return n
            }
            async sync() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.conversationId;
                null == e ? eb.a.debug("Waiting for app resource subscription conversation", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }) : (eb.a.info("Updating app resource subscriptions", {
                    safe: {
                        resourceCount: this.subscriptions.size,
                        mcpAppId: this.params.mcpAppId,
                        conversationId: e
                    },
                    sensitive: {
                        hostId: this.params.hostId,
                        server: this.params.server
                    }
                }), await (0, W.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
                    let [n, a] = t;
                    return {
                        hostId: this.params.hostId,
                        path: a,
                        server: this.params.server,
                        threadId: e,
                        uri: n
                    }
                })), eb.a.info("Updated app resource subscriptions", {
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
        class eD extends Error {
            uri;
            code = -32602;
            name = "McpResourceNotSubscribableError";
            constructor(e) {
                super("MCP resource is not subscribable"), this.uri = e
            }
        }
        class eq extends Error {
            code = -32601;
            name = "McpResourceSubscriptionsUnavailableError";
            constructor() {
                super("MCP resource subscriptions are unavailable")
            }
        }
        var eL = n("zxca"),
            eU = n("XROL"),
            eF = n("DKJJ"),
            eG = n("vgfv"),
            eW = n("Ztsm"),
            eH = n("Fm9E"),
            eB = n("P93s"),
            ez = n("cqPu");
        let eV = C.object({
            code: C.number().optional(),
            message: C.string().min(1)
        }).loose();

        function e$(e) {
            Promise.resolve(e).catch(() => void 0)
        }

        function eX(e) {
            try {
                return e()
            } catch (e) {
                if (e instanceof Error) throw (0, eB.a)(e.message, c.q.InternalError);
                throw e
            }
        }

        function eJ(e, t) {
            let n = eV.safeParse(e);
            return n.success ? (0, eB.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eB.a)(e.message, -32e3, e) : (0, eB.a)(t, -32e3, e)
        }
        var eK = n("JXtc"),
            eZ = n("a4MG");
        async function eY(e) {
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
            let l = (null == r ? await (0, W.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eZ.p, {
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
            if (null == l) throw (0, eB.a)(`MCP server not found: ${i}`, -32e3);
            return l
        }

        function eQ(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var e0 = n("cDR4"),
            e1 = n("ILnd"),
            e2 = n("fddy"),
            e8 = n("ntKy"),
            e3 = n("GaA7"),
            e6 = n("OWtl"),
            e5 = n("Sd8U"),
            e7 = n("tSEg"),
            e4 = n("hZax"),
            e9 = n("jdxe"),
            te = n("ripK"),
            tt = n("bIvi"),
            tn = n("yyZv"),
            ta = n("hkUn"),
            ti = n("nKJ6"),
            tr = n("XXJV"),
            to = n("uJ0o");
        let ts = (0, y.i)(e7.a, (e, t) => {
            let {
                get: n,
                scope: a
            } = t;
            return (n(to.b) ?? a).get(tr.f, e)
        }, (e, t) => {
            let {
                get: n,
                scope: a,
                set: i
            } = t;
            return (n(to.b) ?? a).watch(t => {
                let {
                    get: n
                } = t;
                i(n(tr.f, e))
            })
        });

        function tl(e) {
            let t, n, a, i, r = (0, s.c)(24),
                {
                    panelTabId: o,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, y.y)(e7.a),
                p = (0, y.z)(to.b) ?? d,
                m = (0, e4.h)("1146407612"),
                f = null != (0, y.x)(ts, o);
            r[0] !== p ? (t = (0, ti.getThreadBrowserConversationId)(p), r[0] = p, r[1] = t) : t = r[1];
            let g = t;
            r[2] !== o || r[3] !== p ? (n = () => {
                let e = p.get(tr.f, o);
                null != o && null != e && (0, tr.activateThreadPanelTab)(p, e, o)
            }, r[2] = o, r[3] = p, r[4] = n) : n = r[4];
            let h = (0, x.useEffectEvent)(n);
            return r[5] !== g || r[6] !== m || r[7] !== f || r[8] !== o || r[9] !== h || r[10] !== l || r[11] !== c || r[12] !== p || r[13] !== u ? (a = () => {
                if (!m || !f || null == g || e3.appServices?.mcpAppSandbox == null) return;
                let e = (0, _.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = e3.appServices.mcpAppSandbox.registerBrowserTarget({
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
                t.catch(tu);
                let n = p.watch(e => {
                    let {
                        get: n
                    } = e, a = n(tr.f, o), i = !n(e7.j) && null != a && ("bottom" === a ? n(K.d) : n(K.i) && n(K.j)) && n((0, tr.getThreadPanelTabController)(a).visibleTabs$).some(e => {
                        let {
                            tab: t
                        } = e;
                        return t.tabId === o
                    });
                    t.setPresented(i).catch(tc)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, r[5] = g, r[6] = m, r[7] = f, r[8] = o, r[9] = h, r[10] = l, r[11] = c, r[12] = p, r[13] = u, r[14] = a) : a = r[14], r[15] !== g || r[16] !== m || r[17] !== f || r[18] !== o || r[19] !== l || r[20] !== c || r[21] !== p || r[22] !== u ? (i = [m, o, g, f, l, c, u, p], r[15] = g, r[16] = m, r[17] = f, r[18] = o, r[19] = l, r[20] = c, r[21] = p, r[22] = u, r[23] = i) : i = r[23], (0, x.useEffect)(a, i), null
        }

        function tc(e) {
            eb.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tu(e) {
            eb.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        let td = "ui/openai/find",
            tp = C.object({
                method: C.literal(td),
                params: C.object({
                    enabled: C.boolean()
                })
            }),
            tm = C.object({
                method: C.literal("ui/notifications/openai/find"),
                params: C.object({
                    command: C.enum(["open", "next", "previous"])
                })
            });
        r = (0, em._)(Symbol.dispose);
        class tf {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: i,
                    signal: r,
                    notify: o
                } = t, s = tp.safeParse(e);
                if (!s.success || r.aborted || e3.appServices?.mcpAppSandbox == null || null == o || null == i) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = e3.appServices.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: i
                }, async e => n.ownerDocument.activeElement === n && (await o({
                    method: tm.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [r]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var tg = n("O23H"),
            th = n("nlNF");

        function tb(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: i,
                    sandboxId: r
                } = e,
                o = (0, y.y)(e6.a),
                {
                    pathname: l,
                    search: c
                } = (0, E.X)(),
                u = (0, E.Z)();
            return a[0] !== u || a[1] !== l || a[2] !== i || a[3] !== r || a[4] !== o || a[5] !== c ? (t = () => {
                let e;
                if (e3.appServices?.mcpAppSandbox == null || ![w.Qc, w.Rc, w.ad, "/plugins/:pluginId/app/:toolName"].some(e => (0, E.J)(e, l))) return;
                let t = (0, w.Eg)(i.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = o.get(th.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = e3.appServices.mcpAppSandbox.registerHistoryTarget({
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
                                f = o.get(th.j),
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
                        i(th.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            m = o.get(th.j);
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
        var tv = n("uWA4");
        let ty = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tw = {
                insets: {
                    ...ty.insets,
                    top: 48
                }
            };

        function tI(e) {
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
                    [tv.a]: o
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

        function t_(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tx() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tS(e) {
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
        var tA = n("VwGH"),
            tE = n("OM8g"),
            tC = n("on57"),
            tM = n("WSFD"),
            tP = n("fm8Z"),
            tT = n("IhIa");
        let tk = C.union([h.b, C.object({
                target: C.enum(["active", "new"]).optional(),
                send: C.literal(!1)
            }).strict()]),
            tR = h.c.extend({
                _meta: h.c.shape._meta.unwrap().extend({
                    "openai/message": tk.optional()
                }).optional()
            });

        function tj(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tT.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw Object.assign(Error("Unsupported MCP app content"), {
                    code: -32602
                })
        }

        function tN(e, t) {
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
        var tO = n("engp");
        let tD = (0, y.j)(e5.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, i = a.get(Y.x).find(t => t.id === e && "context" === t.kind);
                return i?.modelContextUpdateId == null ? null : {
                    updateId: i.modelContextUpdateId,
                    content: i.content?.length ? i.content : void 0,
                    structuredContent: i.structuredContent
                }
            }, {
                isEqual: v()
            })
        });
        var tq = n("slpy"),
            tL = n("ygO2"),
            tU = n("HOLv"),
            tF = n("SkN7");

        function tG(e) {
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
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(tU.a, {
                "aria-hidden": !1,
                asset: tF.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== h || u[3] !== v || u[4] !== w || u[5] !== I ? (n = (0, o.jsx)(tL.a, {
                "aria-label": d,
                color: w,
                disabled: I,
                onClick: h,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = h, u[3] = v, u[4] = w, u[5] = I, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, o.jsx)(tq.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let _ = m ? y : "ghost",
                x = !m;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, o.jsx)(tU.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tF.a
            }), u[10] = i) : i = u[10], u[11] !== g || u[12] !== b || u[13] !== v || u[14] !== _ || u[15] !== x ? (r = (0, o.jsx)(tL.a, {
                "aria-label": g,
                color: _,
                disabled: x,
                onClick: b,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: i
            }), u[11] = g, u[12] = b, u[13] = v, u[14] = _, u[15] = x, u[16] = r) : r = u[16], u[17] !== g || u[18] !== r ? (l = (0, o.jsx)(tq.a, {
                content: g,
                side: "bottom",
                children: r
            }), u[17] = g, u[18] = r, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, o.jsxs)(o.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tW(e) {
            let t, n, a, i, r, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: m,
                    onBack: f,
                    onForward: g
                } = e,
                h = (0, A.a)();
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
            return u[4] !== d ? (a = (0, tC.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== f ? (i = e => {
                e.stopPropagation(), f()
            }, u[6] = f, u[7] = i) : i = u[7], u[8] !== g ? (r = e => {
                e.stopPropagation(), g()
            }, u[8] = g, u[9] = r) : r = u[9], u[10] !== b || u[11] !== p || u[12] !== m || u[13] !== v || u[14] !== i || u[15] !== r ? (l = (0, o.jsx)(tG, {
                backLabel: b,
                canGoBack: p,
                canGoForward: m,
                forwardLabel: v,
                onBack: i,
                onForward: r
            }), u[10] = b, u[11] = p, u[12] = m, u[13] = v, u[14] = i, u[15] = r, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, o.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tH,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tH(e) {
            return e.stopPropagation()
        }
        var tB = n("taUf"),
            tz = n("BRrJ"),
            tV = n("C1SW"),
            t$ = n("Dx08"),
            tX = n("JNpY"),
            tJ = n("IWEP");
        let tK = C.preprocess(function(e, t) {
            let n = new WeakSet,
                a = C.record(C.string(), C.unknown()),
                i = (e, r) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: r,
                        message: "Cyclic tool arguments"
                    }), tJ.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => i(e, [...r, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...r, ...e.path]
                            });
                            return tJ.e
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

        function tZ(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var tY = n("n2Dd"),
            tQ = n("PkQL");
        let t0 = C.preprocess(t2, C.record(C.string(), C.json())),
            t1 = C.preprocess(t2, C.looseObject({
                ...l.e.shape.params.shape,
                content: C.array(tQ.f).optional()
            }));

        function t2(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let t8 = ["resources/subscribe", "resources/unsubscribe"],
            t3 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t6 = C.json(),
            t5 = C.object({
                mode: C.enum(["inline", "fullscreen"])
            }),
            t7 = C.object({
                linkToken: C.string().min(1),
                oauthStateId: C.string().min(1)
            }),
            t4 = C.object({
                canGoBack: C.boolean(),
                canGoForward: C.boolean()
            }).loose(),
            t9 = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            ne = C.object({
                blob: C.instanceof(Blob),
                name: C.string().trim().min(1)
            }).strip(),
            nt = C.looseObject({
                [c.S]: c.V.optional(),
                progressToken: c.Q.optional()
            }),
            nn = C.object({
                name: C.string().min(1),
                arguments: tK.optional(),
                _meta: nt.optional()
            }).loose(),
            na = C.object({
                uri: C.string().min(1)
            }).loose(),
            ni = C.object({
                arguments: C.record(C.string(), t6).optional(),
                name: C.string().regex(/\S/),
                subscriptionId: C.uuid()
            }),
            nr = C.object({
                subscriptionId: C.uuid()
            }),
            no = C.number().positive(),
            ns = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nl(e) {
            let t, n, a, i = (0, s.c)(9),
                {
                    isAccessRevoked: r,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== r && r,
                d = void 0 === l || l,
                p = (0, y.y)(e7.a),
                m = (0, y.x)(eI.q, c);
            return i[0] !== p || i[1] !== c ? (t = () => {
                let e, t, n, a, i, r, o, s, l, u, d;
                return n = !1, a = !1, i = null, r = () => {
                    clearTimeout(t), t = void 0
                }, o = e => {
                    if (a = e, r(), a) {
                        i = null, (0, eI.C)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == i && (i = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (eb.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, eI.C)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - i)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && o(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), r(), void 0 === (e = t) ? (a = !1, i = null, (0, eI.C)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && o(a && !(0, th.g)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(th.c);
                    let n = t(eI.q, c),
                        a = null == n ? null : t(eI.i, n.sourceMcpAppId),
                        i = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t($.j.tabById$, (0, e9.b)(c)),
                        r = (0, th.g)(p);
                    if (!i || !r) return void u(i ? null : void 0, r);
                    let o = a.inlineFrameAnchor,
                        s = () => u(o.getSnapshot(), r),
                        l = o.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), r()
                }
            }, n = [p, c], i[0] = p, i[1] = c, i[2] = t, i[3] = n) : (t = i[2], n = i[3]), (0, x.useEffect)(t, n), i[4] !== d || i[5] !== m || i[6] !== u || i[7] !== c ? (a = null == m ? null : (0, o.jsx)(nu, {
                sessionId: c,
                frameState: m,
                sourceMcpAppId: m.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), i[4] = d, i[5] = m, i[6] = u, i[7] = c, i[8] = a) : a = i[8], a
        }

        function nc(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, o.jsx)(nl, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function nu(e) {
            let t, n, a, i, r, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: m,
                    frameState: f,
                    isAccessRevoked: g,
                    allowGlobalHost: h
                } = e,
                b = (0, y.y)(e7.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eH.b)(), d[0] = t) : t = d[0];
            let v = (0, e4.h)(t),
                w = (0, y.x)(tn.b, m),
                I = g || w,
                _ = (0, y.x)(eI.i, m),
                S = _?.content ?? null,
                A = S?.mcpAppHostAdapter?.retain;
            d[1] !== b || d[2] !== p ? (n = () => (0, tz.b)(b, p), a = [b, p], d[1] = b, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, x.useLayoutEffect)(n, a), d[5] !== A || d[6] !== b || d[7] !== m ? (i = () => A?.(b, m), r = [A, b, m], d[5] = A, d[6] = b, d[7] = m, d[8] = i, d[9] = r) : (i = d[8], r = d[9]), (0, x.useLayoutEffect)(i, r);
            let E = (0, y.x)(B.c, S?.access ?? null);
            if (d[10] !== E || d[11] !== _ || d[12] !== b || d[13] !== I || d[14] !== m ? (l = () => {
                    null != _ && (I || "changed" === E) && (eb.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: I,
                            accessStatus: E
                        },
                        sensitive: {
                            mcpAppId: _.sessionId,
                            sourceMcpAppId: m
                        }
                    }), (0, eI.y)(b, m))
                }, c = [m, _, b, I, E], d[10] = E, d[11] = _, d[12] = b, d[13] = I, d[14] = m, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, x.useLayoutEffect)(l, c), !v || I || f.isSuspended || nm(f.sandboxError) || null == _ || null == S || "current" !== E) return null;
            let C = (0, eC.c)(S);
            if (C && (null == S.toolResult || null != S.toolCallStatus)) return null;
            let M = C ? nd : np;
            return d[17] !== M || d[18] !== h || d[19] !== S || d[20] !== f || d[21] !== _.hostedInThreadScrollLayout || d[22] !== _.inlineFrameAnchor || d[23] !== p || d[24] !== m ? (u = (0, o.jsx)(M, {
                ...S,
                resource: S.resource,
                hostedInThreadScrollLayout: _.hostedInThreadScrollLayout,
                inlineFrameAnchor: _.inlineFrameAnchor,
                allowGlobalHost: h,
                sessionId: p,
                sourceMcpAppId: m,
                frameState: f
            }, f.sandboxGeneration), d[17] = M, d[18] = h, d[19] = S, d[20] = f, d[21] = _.hostedInThreadScrollLayout, d[22] = _.inlineFrameAnchor, d[23] = p, d[24] = m, d[25] = u) : u = d[25], u
        }

        function nd(e) {
            let t, n, a = (0, s.c)(5),
                i = (0, y.y)(e7.a);
            return a[0] !== i ? (t = (e, t) => (0, e8.installPlugin)(i, e, t), a[0] = i, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, o.jsx)(np, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function np(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: i,
                conversationId: r,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: b,
                pluginId: D,
                fullSurface: L,
                modalOpen: F = !1,
                hostScroll: B = !1,
                hostDisplayModes: em,
                hostId: ef,
                hostedInThreadScrollLayout: eh,
                access: eM,
                inheritHostBackground: eP = !1,
                installPlugin: ek,
                inlineFrameAnchor: eN,
                allowGlobalHost: eD,
                sessionId: eq,
                sourceMcpAppId: eH,
                mcpAppScope: eV,
                sourceName: eZ,
                mcpServerStatuses: e8,
                mcpAppHostAdapter: e4,
                getNewThreadDestination: tn,
                widgetStatePersistence: ti,
                plaidAccountId: tr,
                deepLink: ts,
                rightPanelLayoutTick: tc,
                resolveResourceWatchPath: tu,
                server: tp,
                appIcon: tm,
                sidePanelTitle: th,
                title: tv,
                globalSurface: tT = !1,
                toolArguments: tk,
                toolResult: tq,
                toolResultNotification: tL,
                toolCallStatus: tU,
                toolCallCancellationReason: tF,
                viewParamsOverride: tG,
                frameState: tH
            } = e, tz = (0, y.y)(e7.a), tV = (0, y.y)(e6.a), tJ = (0, x.useSyncExternalStore)(eN.subscribe, eN.getSnapshot, () => null), tK = (0, x.useEffectEvent)(() => tz), tQ = (0, x.useEffectEvent)(() => eM.assertActive()), {
                csp: t2,
                fitWidth: t6,
                html: nt,
                sandboxOrigin: nl,
                serverOrigin: nu
            } = a, nd = a.prefersBorder && !e4?.hideFrameBorder, np = "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : null, nf = null != t, ng = (0, x.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nh = !nf || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nb = (0, y.x)(H.d, ef), nv = (0, y.x)(H.hc, {
                hostId: ef,
                threadId: r
            }), ny = null != nv && "notLoaded" !== nv.type, nw = !(0, M.e)(tp) && t2?.connectDomains.some(e => (0, eK.d)(new URL(e).hostname)) === !0, nI = (0, ta.a)(eM, i), n_ = null != nu ? new URL(nu) : null, nx = e4?.sandboxFeatures?.join(";"), nS = e4?.sandboxFeatures?.includes("local-network-access") === !0 || (0, eK.f)(t2) || nw && n_?.protocol === "https:" && (0, eK.d)(n_.hostname), nA = (0, A.a)(), nE = (0, E.Z)(), nC = t?.value.kind === "chatgpt" && null != t.value.conversationId && r === `chatgpt:${t.value.conversationId}`, nM = r.startsWith("chatgpt:") ? "chatgpt" : "codex", nP = (0, y.z)(t?.get(tD, eq) ?? null), nT = (0, x.useEffectEvent)(() => t?.get(tD, eq).get() ?? null), nk = (0, y.z)($.j.activeTab$), nR = (0, y.z)(K.g), nj = (0, y.z)(to.a), nN = (0, y.z)(eA.a), nO = nN["--color-background-primary"], {
                isWidgetReady: nD
            } = tH, nq = (0, eI.f)(tH), nL = !L && "fullscreen" === nq, nU = (0, eI.e)(tH), nF = L && eD, nG = (0, x.useRef)(!1), nW = (0, x.useRef)(null), nH = (0, x.useRef)(null), nB = (0, x.useRef)(null), nz = (0, x.useRef)(null), nV = (0, y.x)(eI.h, eq), n$ = (0, x.useRef)(null), nX = (0, x.useRef)(null), nJ = e => {
                if (!(0, M.e)(tp)) return null;
                let t = tz.get(eI.i, eH);
                if (null == t) return null;
                let n = t.content.mcpAppScope.codexAppsToolScope;
                if (void 0 !== n) return n;
                let a = (0, eR.d)({
                    appContext: eV.appContext,
                    invocationResourceUri: eV.invocationResourceUri,
                    originTool: eV.originTool,
                    originToolDefinition: e.tools[eV.originTool],
                    server: tp,
                    tools: eQ(e)
                });
                tz.set(eI.j, e => {
                    let t = e.get(eH);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let i = new Map(e);
                    return i.set(eH, {
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
                let i = tz.get(eI.i, eH)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === i ? null : i
            }, [nK, nZ] = (0, x.useState)(null), [nY, nQ] = (0, x.useState)(null), [n0, n1] = (0, x.useState)(!1), [n2, n8] = (0, x.useState)(null), [n3, n6] = (0, x.useState)(null), n5 = n3?.api ?? null, n7 = n3?.widgetId ?? null, n4 = (0, tt.a)(e => tu?.(e) ?? null), n9 = (0, M.e)(tp) && (0, w.Fh)(nb, "mcpEventStream"), ae = (0, x.useMemo)(() => new eO({
                scope: tV,
                hostId: ef,
                mcpAppId: eq,
                originResourceUri: eV.originResourceUri,
                resolveResourceWatchPath: n4,
                server: tp
            }), [tV, ef, eq, eV.originResourceUri, n4, tp]), at = (0, x.useMemo)(() => new eT({
                scope: tV,
                hostId: ef,
                server: tp
            }), [tV, ef, tp]), [an, aa] = (0, x.useState)(ns), ai = null != np && t9.has(np), ar = ai && null != n5 && (an.canGoBack || an.canGoForward), {
                cancel: ao,
                confirmation: as,
                confirm: al,
                request: ac
            } = (0, e_.a)(eS.a), au = e4?.viewerHeader === !0, ad = e4?.forwardedRequestMethods, ap = ad?.join(";") || void 0, am = JSON.stringify(e4?.experimentalCapabilities), af = e4?.openFile, ag = (0, y.z)(e7.j), ah = (0, y.x)(G.a, {
                name: "codex.browser"
            }), ab = !ag && ah.isCapable, av = ab || nf && nh, ay = !ag && (void 0 === af ? (0, w.qi)((0, ey.a)(tV, ef)) : null != af), aw = null != e4, aI = e4?.expectedReadySignal, a_ = e4?.pluginSuggestions != null, ax = !0 === eV.isVerifiedFirstParty, aS = e4?.displayMode === "modal", aA = (0, x.useEffectEvent)(() => e4), aE = e4?.onRequestClose != null || eh, aC = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: i
                } = e;
                return (0, M.e)(n) && "connector_openai_olympic" === a && "internal://olympic" === i.originResourceUri && !0 === i.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e4,
                server: tp,
                connectorId: np,
                widgetScope: eV
            }), aM = null != aC, aP = aC?.requestTargetedReply != null || e4?.setTargetedReply != null || e4?.requestTargetedReply != null, aT = aM || e4?.showToast != null, ak = (0, x.useEffectEvent)(() => aC), aR = (0, x.useEffectEvent)(e => aC?.viewMode ?? e4?.displayMode ?? e), aj = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: i
                } = e;
                return (0, M.e)(n) && a === eu.a && ("internal://ledger" === i.originResourceUri || i.originResourceUri?.startsWith("internal://ledger") && i.originTool.endsWith("manage_linked_accounts")) && !0 === i.isVerifiedFirstParty ? t?.finance : void 0
            }({
                adapter: e4,
                server: tp,
                connectorId: np,
                widgetScope: eV
            }), aN = e4?.requestCheckout != null, aO = e4?.openConversationOverlay != null, aD = e4?.openPromptInput != null, aq = e4?.autofill != null, aL = e4?.openInApp != null, aU = aL && e4?.openInApp?.hideButton !== !0 && e4?.openInApp?.baseUrl != null && null !== tH.openInAppUrl, aF = e4?.presentation != null, aG = e4?.presentation?.requestFocusedObject != null, aW = e4?.presentation?.requestCloseFocusedObject != null, aH = e4?.presentation?.isSidebarOpen === !0, aB = e4?.downloadBlob != null, az = e4?.triggerHaptic != null, aV = e4?.files != null, a$ = e4?.share != null, aX = e4?.requestConnectSheet != null, aJ = e4?.requestReconnectConnector != null, aK = e4?.requestLinkToConnector != null, aZ = e4?.isTombstone === !0, aY = (0, x.useEffectEvent)(() => aj), aQ = function(e, t) {
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
                                    let a = O.safeParse(i);
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
                            } = q[o.label], i = o.payload;
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
                            } = q[o.label],
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
            }(tz, {
                server: tp,
                connectorId: np,
                widgetScope: eV,
                conversationId: r
            }), a0 = (0, x.useEffectEvent)(() => aQ), a1 = null != tr && (0, M.e)(tp) && aw && np === eu.a, a2 = (0, x.useMemo)(() => null != tk && "object" == typeof tk ? tk : null, [tk]), a8 = (0, x.useMemo)(() => null == tq ? null : (0, eF.f)({
                isCodexAppsServer: (0, M.e)(tp),
                toolResult: tq
            }), [tp, tq]), a3 = (0, x.useMemo)(() => null == a8 ? null : (0, e0.b)(a8), [a8]), a6 = void 0 === tG ? a3 : tG, a5 = (0, x.useEffectEvent)(() => a6), a7 = (0, x.useMemo)(() => null == a8 ? null : (0, eF.g)({
                toolResult: a8
            }), [a8]), a4 = (0, x.useMemo)(() => tL ?? (0, e0.a)(a8, {
                preserveStructuredContentNull: e4?.preserveStructuredContentNull
            }), [e4?.preserveStructuredContentNull, tL, a8]), a9 = tU ?? (a4?.isError === !0 ? "error" : void 0), ie = (0, x.useMemo)(() => null == a9 ? a7 : {
                ...a7,
                status: a9
            }, [a9, a7]), it = (0, x.useEffectEvent)(() => ({
                sourceMcpAppId: eH,
                toolInput: a2,
                toolOutput: a3,
                toolResponseMetadata: ie,
                toolStatus: a9,
                toolResult: a8,
                toolResultNotification: a4,
                toolCallCancellationReason: tF
            })), ia = (0, x.useEffectEvent)(e => null == ek || null != a9 ? null : (0, eC.a)({
                scope: tz,
                conversationId: r,
                hostId: ef,
                installPlugin: ek,
                mcpAppScope: eV,
                navigate: nE,
                access: eM,
                server: tp,
                sessionId: eq,
                sourceMcpAppId: eH,
                toolResult: e
            })), ii = null == nl ? void 0 : (0, tX.c)(nl, nA.locale), ir = _.b, io = (0, x.useMemo)(() => {
                if (null == ii) return null;
                let e = (0, tX.a)(ii);
                return nS ? `local-network-${e}` : e
            }, [nS, ii]), is = (0, x.useEffectEvent)(() => {
                if (null == ii) return null;
                let e = (0, _.i)(ii);
                return null == e ? null : {
                    csp: t2,
                    experimentalCapabilities: e4?.experimentalCapabilities,
                    html: nt,
                    locale: nA.locale,
                    sandboxOrigin: e,
                    sourceUrl: ii
                }
            }), il = n2?.isConnected === !0 ? n2 : null, ic = tJ?.isConnected === !0 ? tJ : null, iu = null != ic || null != il, id = !nL && !L && tJ?.dataset.mcpAppInlineSurface === "card", ip = "iframe", im = "function" == typeof nK?.moveBefore, ig = F && im, ih = ic ?? (!nL && nK?.isConnected ? nK.parentElement : null), ib = ih?.closest("[data-mcp-app-scroll-host]"), iv = !nL && (!L && B || null != ib), iy = eD && !iv && (im || !eh), iw = iy ? null : ih?.closest("[data-mcp-app-portal-target='true']") ?? (!im && nK?.isConnected ? nK.parentElement : null), iI = im || iy ? nK : iw, i_ = (0, x.useEffectEvent)(e => {
                let t = t_(e, L, nL ? "fullscreen" : "inline");
                return !L && "inline" === nq && t6 && ic?.parentElement != null && (t.maxWidth = ic.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), ix = (0, x.useEffectEvent)(() => {
                (0, ep.c)(tK(), {
                    hostId: ef,
                    pluginId: D,
                    server: tp
                }, eq)
            }), iS = (0, x.useEffectEvent)(() => ({
                safe: {
                    connectorId: np,
                    mcpAppId: eq,
                    sandboxId: io,
                    initId: (0, _.g)(nY?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: ef,
                    server: tp
                }
            })), iA = (0, x.useEffectEvent)(e => {
                (0, k.a)(tz, u.o, {
                    attributionId: np ?? void 0,
                    conversationId: "chatgpt" === nM ? r.slice(8) : void 0,
                    host: "chatgpt" === nM ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), iE = (0, x.useEffectEvent)((e, t) => {
                if (nm(tK().get(eI.q, eq)?.sandboxError)) return;
                let n = (0, ez.a)(t),
                    a = iS();
                eb.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nM,
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
                }), nz.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), (0, eI.C)(tK(), eq, {
                    isWidgetReady: !1,
                    sandboxError: "configuration" === e && t instanceof Error ? t : Error("The MCP app sandbox failed to load.")
                })
            }), iC = (0, x.useEffectEvent)(e => {
                let t = no.safeParse(e);
                t.success && tz.get(eI.q, eq)?.displayMode === "inline" && (0, eI.C)(tz, eq, {
                    intrinsicHeight: t.data
                })
            }), iM = (0, x.useEffectEvent)(e => {
                let t = no.safeParse(e);
                t6 && t.success && (0, eI.C)(tz, eq, {
                    intrinsicWidth: t.data
                })
            }), iP = (0, x.useEffectEvent)(e => {
                if (!ai) return;
                let t = t4.safeParse(e);
                t.success && aa({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), iT = (0, x.useEffectEvent)(() => eh ? void(0, eI.b)(tz, eq) : e4?.onRequestClose?.()), ik = (0, x.useEffectEvent)(async (e, n) => {
                if (e4?.openExternal != null && await e4.openExternal(e, n)) return;
                let a = eU.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eV.isVerifiedFirstParty) return void(0, eG.a)(tz, a.data.href);
                    if ("popup" !== a.data.openMode && e4?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? tz, a.data.href, n)) return;
                    let e = (0, w.uj)(a.data.href);
                    if (null != e) return void nE(e);
                    (0, el.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), iR = (0, x.useEffectEvent)(async (e, t) => {
                if (!a1 || null == tr) throw Error("Plaid Link is unavailable for this app");
                let n = t7.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ed.a)();
                return a(tz, {
                    accountId: tr,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), ij = (0, x.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: i,
                    signal: r,
                    accountId: o,
                    frameAccountId: s
                } = t;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!r.aborted && s === o && e.get(ew.f) === o && await a(i, r) && !r.aborted && e.get(ew.f) === o) {
                    let t = e.get(eI.q, n);
                    if (null == t) return;
                    (0, eI.C)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(tz, {
                mcpAppId: eq,
                requestModal: aj?.requestModal,
                payload: e,
                signal: t,
                accountId: tr,
                frameAccountId: n
            })), iN = (0, x.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: i,
                    showNavigationControls: r
                } = e;
                if (i?.displayMode === "modal") return !1 !== i.showModalCloseButton || r ? tw : ty;
                let o = "inline" === n && r ? tw : ty;
                return ("inline" !== n || a) && 0 !== t ? {
                    insets: {
                        ...o.insets,
                        bottom: t
                    }
                } : o
            })({
                composerOverlayReservePx: nj,
                displayMode: L ? "inline" : e,
                hasComposerOverlay: nF,
                hostAdapter: aA(),
                showNavigationControls: ar
            })), iO = (0, x.useEffectEvent)(() => {
                let e = tz.get(eI.q, eq) ?? tH;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? em
                }
            }), iD = (0, x.useEffectEvent)(e => {
                let t = (0, eI.g)(tz, eq, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...iO(),
                    safeAreaInsets: iN(t).insets
                }
            }), iq = (0, x.useEffectEvent)(e => {
                let t = t5.safeParse(e),
                    n = tz.get(eI.q, eq);
                if (t.success && (0, eI.a)(n, t.data.mode)) {
                    let n = !L && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nL && nK?.style.setProperty("display", "none"), aF && (0, eI.C)(tz, eq, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, eI.A)(tz, eq, a, "app_request"), null != n5 && null != n7) {
                        let e = {
                            displayMode: a,
                            isTombstone: aA()?.isTombstone === !0,
                            viewParams: a6,
                            widgetId: n7
                        };
                        nW.current = e, e$(n5.setWidgetView(e));
                        let t = null == nK ? null : tI({
                            ...iO(),
                            containerDimensions: t_(nK, L, a),
                            locale: nA.locale,
                            deepLink: ts,
                            safeAreaInsets: iN(a).insets,
                            styleVariables: nN,
                            theme: tx(),
                            userAgent: tS(aA()?.device),
                            toolInfo: aA()?.toolInfo
                        });
                        nH.current = t, null != t && e$(n5.notifyMcpAppsHostContext({
                            hostContext: t
                        }))
                    }
                    return {
                        mode: a
                    }
                }
                return eb.a.debug("Ignored app display mode request", {
                    safe: {
                        validRequest: t.success,
                        requestedDisplayMode: t.success ? t.data.mode : void 0,
                        displayMode: n?.displayMode,
                        availableDisplayModes: n?.availableDisplayModes,
                        mcpAppId: eq,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (0, eI.e)(n ?? tH)
                }
            }), iL = (0, x.useEffectEvent)(() => ts), iU = (0, x.useEffectEvent)(() => tz.get(eI.h, eq)), iF = (0, x.useEffectEvent)(() => {
                var e;
                e = tm ?? void 0, null != t && (0, Q.h)(t, eq, e)
            });
            (0, x.useEffect)(() => {
                iF()
            }, [eq, tm?.alt, tm?.knownAppId, tm?.logoDarkUrl, tm?.logoUrl]);
            let iG = (0, x.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tz.get(eI.q, eq)?.sourceMcpAppId !== eH) return;
                    let a = (null != ti ? t0.nullable() : t0).safeParse(t),
                        i = a.success ? a.data : null;
                    if (tz.set(eI.v, eq, i), null != ti && a.success) return ti.save(a.data, n)
                }),
                iW = e => {
                    null != n5 && e$(n5.navigate({
                        delta: e
                    }))
                },
                iH = {
                    name: null != e4 ? eV.originResourceUri ?? eV.originTool : `${tp}.${eV.originTool}`,
                    attribution: "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : void 0
                },
                iB = (0, x.useEffectEvent)(e => {
                    let n = (0, eo.getMcpAppSubmit)(t, () => {
                        eM.assertActive(), aA()?.assertActive?.()
                    });
                    return null == n ? null : (t, a) => n(t, iH, e, a)
                }),
                iz = async function(e, t, n, a, i, r) {
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tO.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: r,
                        modelContextAttachments: o,
                        requestConfirmation: e => ac({
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
                }, iV = (0, x.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eB.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let i = (a = ak(), n.aborted || a && eE.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != i) return i;
                    n.throwIfAborted();
                    let {
                        context: r,
                        prompt: o,
                        title: l
                    } = (0, eS.b)(e), u = iB(n);
                    if (null == u) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let d = t.get(Y.x).filter(e => "context" === e.kind),
                        p = crypto.randomUUID(),
                        m = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await iz({
                            source: "mcp_app",
                            sourceId: eq,
                            widgetSource: eV.widgetSource,
                            text: o,
                            structuredContent: r ?? (0, eW.b)(iU())
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
                    }, r), (0, Q.b)(t, d)
                }), i$ = e => {
                    e.throwIfAborted(), eM.assertActive(), e4?.assertActive?.()
                }, iX = async (e, t, n, a) => {
                    i$(t);
                    let i = null != e4 ? await e4.handleRequest(e, t, eV, n) : await a();
                    return i$(t), i
                }, iJ = async (e, t, n) => {
                    let a = await iX({
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
                            access: c,
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
                            } = e, c = await eY({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: i,
                                server: r,
                                threadId: o
                            }), u = eQ(c), d = n(c);
                            return {
                                ...eX(() => (0, eR.h)({
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
                        });
                        d.throwIfAborted(), c.assertActive();
                        let f = function(e, t) {
                                if (!(0, M.e)(e) || !tZ(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            g = null == m.codexAppsResourceUri ? f : {
                                ...tZ(f) ? f : {},
                                _codex_apps: {
                                    resource_uri: m.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, Z.a)({
                                scope: t,
                                chatGptConversation: i.startsWith("chatgpt:") ? {
                                    id: i.slice(8),
                                    messageId: a ?? null
                                } : void 0,
                                toolIdentity: m.codexAppsToolIdentity,
                                access: c,
                                signal: d,
                                toolArguments: p.arguments ?? {}
                            });
                            if (null != e) return await e;
                            if (i.startsWith("chatgpt:")) return (0, eF.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: await (0, e1.b)(t, o, u, m.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: g,
                                    requestOptions: {
                                        widget: {
                                            conversationId: i,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let r = await (0, W.b)(n, o).callMcpTool({
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
                            return (0, eF.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: r
                            })
                        } catch (e) {
                            throw eJ(e, "MCP tool call failed")
                        }
                    })({
                        appScope: tV,
                        scope: tz,
                        chatGptMessageId: eV.chatGptMessageId,
                        conversationId: r,
                        getTrustedToolScope: nJ,
                        hostId: ef,
                        mcpAppId: eq,
                        mcpServerStatuses: e8,
                        access: eM,
                        server: tp,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, I.r)(a)?.isError === !0) {
                        let t = e0.c.safeParse(a).data;
                        eb.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eq,
                                initId: (0, _.g)(nY?.getAttribute("src") ?? void 0)
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
                    let i = t?.get(e5.b);
                    return iJ((0, eB.d)(nn, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, i)
                }), iZ = (0, x.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e5.b),
                        i = c.X.safeParse(e);
                    if (!i.success) throw (0, eB.b)("Invalid MCP proxy request", i.error.issues, i.error.issues.every(e => "params" === e.path[0]) ? c.q.InvalidParams : c.q.InvalidRequest);
                    let o = tz.get(z.b, {
                            hostId: ef,
                            conversationId: r
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = i.data;
                    if (r.startsWith("chatgpt:") && t8.some(e => e === s)) throw (0, eB.a)("Resource subscriptions require a local Codex thread", c.q.MethodNotFound);
                    switch (s) {
                        case f.a: {
                            let {
                                path: e
                            } = (0, eB.d)(f.b, l, "Invalid MCP file open params");
                            if (!ay) throw (0, eB.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != af) return (0, k.a)(tz, d.CodexMcpExtensionAction, {
                                ...nI,
                                feature: "file_open",
                                action: "requested"
                            }), await af(e, n), {};
                            if (!(0, w.Ah)(e) || !(0, w.Dh)(e)) throw (0, eB.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, k.a)(tz, d.CodexMcpExtensionAction, {
                                ...nI,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: tz,
                                path: e,
                                cwd: null,
                                hostConfig: (0, ey.a)(tV, ef),
                                hostId: ef,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ad?.includes("ping") ? iX(i.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tR.safeParse(e);
                                if (!t.success) throw Object.assign(Error("Invalid MCP app message params"), {
                                    code: -32602
                                });
                                let {
                                    content: n
                                } = t.data;
                                if (tj(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw Object.assign(Error("An MCP app message cannot be empty"), {
                                    code: -32602
                                });
                                return {
                                    options: t.data._meta?.["openai/message"],
                                    content: n
                                }
                            }(l);
                            n.throwIfAborted();
                            let a = e.options?.target ?? "active";
                            if ((0, k.a)(tz, d.CodexMcpExtensionAction, {
                                    ...nI,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eB.a)("MCP app messages are disabled for this view", c.q.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, ei.d)(t) && null == (0, ei.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tN(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eZ,
                                    icon: tm,
                                    server: tp,
                                    widgetSource: eV.widgetSource
                                });
                                if (aA()?.assertActive?.(), "new" === e.options.target) {
                                    if (ag) throw (0, eB.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(tV, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eB.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(Y.w) || t.get(Y.W) || null != t.get(et.b) || t.get(er.e) || t.get(Y.r) || !(0, eo.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, Y.Eb)(t, e => {
                                        null != n.attachment && e.mcpAppModelContextAttachments.push(n.attachment)
                                    }), (0, ea.h)(t, {
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
                                for (let t of e) "text" === t.type && null == (0, ei.a)(t) ? a.push(t.text) : i.push(t);
                                let r = tN(i, t),
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
                                sourceName: eZ,
                                icon: tm,
                                server: tp,
                                sessionId: eq,
                                widgetSource: eV.widgetSource
                            }, nA), s = !1;
                            e.options?.target === "new" && null != io && e3.appServices?.mcpAppSandbox != null && (i$(n), s = await e3.appServices.mcpAppSandbox.consumeUserGesture((0, eU.a)(io, nY)).catch(() => !1) === !0, i$(n));
                            let p = e.options?.target === "new" ? (0, tO.a)({
                                scope: tV,
                                recipient: t,
                                getNewThreadDestination: tn,
                                globalEntrypointIdentity: "global" === nI.source ? {
                                    connectorId: nI.connectorId,
                                    pluginId: nI.pluginId
                                } : void 0,
                                canCreateCodexThreads: ab,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (ag) throw (0, eB.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    i$(n)
                                },
                                sourceName: eZ,
                                toolOrigin: iH,
                                signal: n
                            }) : iB(n);
                            if (null == p) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let m = t?.get(Y.x).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eq
                            }) ?? [];
                            return await iz(r, i, p, n, void 0, o, m), null != t && (0, Q.b)(t, m), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eB.d)(ne, l, "Invalid MCP file download params");
                            return (0, te.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eB.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eB.d)(t1, l, "Invalid MCP model context params");
                            if (null != iB() && tj(e.content), nC && e.content?.some(e => "image" === e.type && !(0, w.zi)({
                                    type: e.mimeType
                                }))) throw (0, eB.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != ti && tz.get(eI.q, eq)?.sourceMcpAppId !== eH) throw (0, eB.a)("The widget source is no longer active", -32e3);
                            aA()?.onModelContextUpdate?.(e, eq), (0, X.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    i = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eV.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tp,
                                    composerIcon: tm ?? void 0,
                                    sourceName: eZ,
                                    id: eq,
                                    modelContextUpdateId: i ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, t$.b)(tz, eq, t.get(Y.x).find(e => e.id === eq) ?? null)), i
                            })(e);
                            if ((0, k.a)(tz, d.CodexMcpExtensionAction, {
                                    ...nI,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != ti) {
                                var p = await iG(eH, e, !0);
                                if (p?.ok !== !0) throw Object.assign((0, eB.a)("The host could not persist the model context update", -32e3), {
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
                            return iJ((0, eB.d)(nn, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eB.d)(na, l, "Invalid MCP resource read params");
                            if (i$(n), (0, k.a)(tz, d.CodexMcpExtensionAction, {
                                    ...nI,
                                    feature: "resource",
                                    action: "read"
                                }), e4?.readHostResource != null) {
                                i$(n);
                                let t = await e4.readHostResource(e, n);
                                if (i$(n), null != t) return t
                            }
                            return eX(() => {
                                (0, eR.a)({
                                    mcpAppScope: eV,
                                    server: tp,
                                    uri: e.uri
                                })
                            }), await iX({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, ej.d)({
                                        scope: tz,
                                        appContext: eV.appContext,
                                        connectorId: (0, M.e)(tp) ? np : null,
                                        hostId: ef,
                                        mcpAppId: eq,
                                        originCallId: eV.originCallId ?? null,
                                        threadId: r,
                                        server: tp,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw eJ(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eB.d)(na, l, "Invalid MCP resource subscribe params");
                            return i$(n), (0, k.a)(tz, d.CodexMcpExtensionAction, {
                                ...nI,
                                feature: "resource",
                                action: "subscribe"
                            }), await ae.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eB.d)(na, l, "Invalid MCP resource unsubscribe params");
                            return i$(n), (0, k.a)(tz, d.CodexMcpExtensionAction, {
                                ...nI,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await ae.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eB.d)(ni, l, "Invalid MCP event subscribe params"),
                                t = tz.get(eI.i, eH)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nJ(await eY({
                                    scope: tz,
                                    hostId: ef,
                                    mcpServerStatuses: e8,
                                    server: tp,
                                    threadId: o
                                }))), null == n) throw (0, eB.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return at.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP event unsubscribe params");
                            return at.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return iX(i.data, n, a, async () => {
                                let e = await eY({
                                        scope: tz,
                                        hostId: ef,
                                        mcpServerStatuses: (0, M.e)(tp) ? e8 : void 0,
                                        server: tp,
                                        threadId: o
                                    }),
                                    t = eQ(e),
                                    n = nJ(e);
                                return {
                                    tools: eX(() => (0, eR.e)({
                                        server: tp,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return iX(i.data, n, a, async () => (0, M.e)(tp) ? {
                                resources: []
                            } : {
                                resources: (await eY({
                                    scope: tz,
                                    hostId: ef,
                                    server: tp,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return iX(i.data, n, a, async () => (0, M.e)(tp) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eY({
                                    scope: tz,
                                    hostId: ef,
                                    server: tp,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return iX(i.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return iX(i.data, n, a, async () => {
                                throw (0, eB.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                }), iY = (0, x.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(279799)]).then(n.bind(n, "Rq7I"));
                    i$(t), a(tK(), {
                        Frame: nc,
                        sourceMcpAppId: eH,
                        signal: t,
                        handleRequest: async (e, n) => c._.parse(await iZ(e, n ?? t))
                    }, e)
                });
            (0, x.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nZ(e), () => {
                    e.remove(), nZ(t => t === e ? null : t), n1(!1)
                }
            }, [eq]), (0, x.useLayoutEffect)(() => {
                null != nK && null != nY && function(e) {
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
                    t.className = (0, tC.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", i && "z-50", !s && !a && !o && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tC.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", m && "rounded-lg", o && c && "borderedCardSandbox-KmZ5WZ", s && "min-h-0 flex-1"), n.style.backgroundColor = !i && (r || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: nK,
                    sandboxElement: nY,
                    fullSurface: L,
                    liftModal: ig,
                    inheritHostBackground: eP,
                    isCardInlineSurface: id,
                    isFullScreen: nL,
                    isWidgetVisible: nD && null != nq,
                    prefersBorder: nd,
                    surfaceBackgroundColor: nO,
                    title: tv,
                    globalSurface: tT
                })
            }, [L, ig, nK, eP, id, nL, nD, nq, nd, nY, nO, tv, tT]), (0, x.useLayoutEffect)(() => {
                if (null == nK) return;
                let e = nL ? il : ic,
                    t = iy ? (0, J.a)() : iw;
                if (ig && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nK.style.display;
                    nK.style.display = "none", e || eb.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: iS().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (nK.parentElement !== t && (nK.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nK, null) : t.appendChild(nK), eb.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: iS().safe.mcpAppId,
                                showInModal: ig
                            }
                        })), n0 || n1(!0), null == e) {
                        let e = "none" === nK.style.display;
                        nK.style.display = "none", e || eb.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: iS().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete nK.dataset.mcpAppParked,
                        function(e) {
                            let {
                                sharesScrollHost: t,
                                frameElement: n,
                                frameContainer: a,
                                fullSurface: i = !1,
                                modalOpen: r = !1,
                                sandboxElement: o,
                                isFullScreen: s,
                                isInGlobalHost: l,
                                anchorElement: c,
                                rightPanelAnimationProgress: u,
                                rightPanelLayoutTick: d
                            } = e, p = r || s || l, m = r ? (0, tE.b)(n) : void 0, f = null, g = s && !l ? new MutationObserver(() => b()) : null, h = new ResizeObserver(() => b()), b = () => {
                                let e = c.currentCSSZoom ?? 1,
                                    t = (0, tM.a)(c, e),
                                    u = {
                                        ...t
                                    },
                                    d = s || i ? c.closest('[data-app-shell-focus-area="right-panel"]') : null,
                                    m = "";
                                r ? m = "" : null != d && (m = (0, tM.b)(t, (0, tM.a)(d, e))), n.style.position = p ? "fixed" : "absolute";
                                let h = null;
                                if (p ? l || r || (h = n.offsetParent) : h = a, null != h) {
                                    let t = (0, tM.a)(h, e);
                                    u.x -= t.x, u.y -= t.y
                                }
                                p || (u.x += a.scrollLeft, u.y += a.scrollTop);
                                let b = "";
                                r || (b = s ? "43" : "1"), Object.assign(n.style, {
                                    ...(0, tM.d)(u, e / (a.currentCSSZoom ?? 1)),
                                    clipPath: m,
                                    display: "",
                                    zIndex: b
                                });
                                let v = i || s ? (0, tM.c)(c) : null;
                                if (n.style.borderRadius = v?.join(" ") ?? "", null != o)
                                    if (null == v) o.style.borderRadius = "";
                                    else {
                                        let e = getComputedStyle(n),
                                            t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                            a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                        o.style.borderRadius = [t, a].map(e => v.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                                    } null != g && h !== f && (g.disconnect(), f = h, null != h && g.observe(h, {
                                    attributeFilter: ["class", "style"],
                                    attributes: !0
                                }))
                            };
                            h.observe(a);
                            let v = t && !p && !i && a.contains(c),
                                y = e => {
                                    e.target instanceof Element && e.target !== a && e.target.contains(c) && b()
                                };
                            v && a.addEventListener("scroll", y, !0);
                            let w = (0, tA.b)(c, n, b, v ? {
                                    ancestorScroll: !1,
                                    ancestorResize: !1
                                } : void 0),
                                I = (0, tP.a)({
                                    update: b,
                                    motionValues: [d, s ? u : void 0]
                                });
                            return () => {
                                m?.(), I.disconnect(), w(), v && a.removeEventListener("scroll", y, !0), h.disconnect(), g?.disconnect()
                            }
                        }({
                            sharesScrollHost: ib?.contains(t) === !0,
                            frameElement: nK,
                            frameContainer: t,
                            fullSurface: L,
                            modalOpen: ig,
                            sandboxElement: nY,
                            isFullScreen: nL,
                            isInGlobalHost: iy,
                            anchorElement: e,
                            rightPanelAnimationProgress: nR,
                            rightPanelLayoutTick: tc
                        })
                };
                return L || nL || ig || iy || !eh || null == e || e.hidden || "true" !== nK.dataset.mcpAppParked ? n() : (0, tg.a)(e, n)
            }, [nK, L, ig, eh, ib, ic, nL, iy, n0, nR, tc, nY, il, iw]);
            let iQ = e4?.autoFocus === !0;
            (0, x.useEffect)(() => {
                iQ && nD && null != ic && nY?.focus()
            }, [iQ, nD, ic, nY]), (0, x.useLayoutEffect)(() => (nG.current = !1, () => {
                nG.current = !0
            }), [eq, tz]);
            let i0 = (0, x.useEffectEvent)(async () => {
                    try {
                        if (e4?.assertActive?.(), !aU) return;
                        let e = tH.openInAppUrl ?? C.string().nullable().parse(await n5?.getCurrentPath?.(void 0));
                        if (e4?.assertActive?.(), null == e) return;
                        let t = e4?.openInApp?.validateUrl(null == tH.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                i1 = (0, x.useEffectEvent)(e => {
                    let t = tz.get($.j.tabs$).some(e => e.tabId === (0, e9.b)(eq));
                    (0, e9.c)(tz, {
                        source: {
                            hostId: ef,
                            server: tp,
                            connectorId: np ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tm,
                        mcpAppId: eq,
                        onExitFullScreen: e,
                        onPanelElementChange: n8,
                        title: tH.displayModeTitle ?? th,
                        openInAppName: e4?.openInApp?.appName,
                        onOpenInApp: aU ? () => {
                            i0()
                        } : void 0
                    })
                }),
                i2 = (0, x.useEffectEvent)(() => {
                    let e = tz.get(eI.q, eq);
                    !nG.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eI.c)(tz, eq)
                }),
                i8 = (0, x.useEffectEvent)(e => {
                    let t = aA()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nI);
                    else {
                        let t = C.object({
                            type: C.literal("interaction"),
                            label: C.string()
                        }).safeParse(e);
                        t.success && (0, k.a)(tz, u.l, {
                            ...nI,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, x.useLayoutEffect)(() => {
                nL ? i1(i2) : (0, e9.a)(tz, eq)
            }, [nL, eq, tz, tm?.alt, tm?.knownAppId, tm?.logoDarkUrl, tm?.logoUrl, th, tH.displayModeTitle, aU, e4?.openInApp?.appName]), (0, x.useLayoutEffect)(() => {
                let e;
                if (null == nK || !n0 || null == iI || null == io || null == ir) return;
                let t = e2.a.start("webview_load", {
                    definitionVersion: 1,
                    surface: "mcp_app",
                    telemetryOwner: "desktop_client"
                }, {
                    key: eq,
                    traceAttributes: {
                        "webview.surface": "mcp_app"
                    }
                });
                nz.current = t, t.mark("surface_mcp_app"), (0, eI.C)(tK(), eq, {
                    appDisplayModes: void 0,
                    isWidgetReady: !1,
                    sandboxError: null
                }), aa(ns), n$.current = null, nX.current = null;
                let n = is();
                if (null == n) return void iE("configuration", Error("The MCP app sandbox initialization config is missing."));
                let i = [...new Set(["fullscreen", "encrypted-media", ...nx?.split(";") ?? [], ...nS ? ["local-network-access"] : []])],
                    r = (0, eL.a)(ip, io, ir);
                r instanceof HTMLIFrameElement && (r.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != nx ? r.allow = i.map(e => `${e} *`).join("; ") : r.allow = nS ? "encrypted-media *; local-network-access" : "encrypted-media *", r.allowFullscreen = !0), r.classList.add("pointer-events-none", "opacity-0"), nK.appendChild(r), nQ(r), t.mark("rendered");
                let o = new AbortController,
                    u = !1,
                    d = new tf,
                    v = null == s ? null : new eg(s),
                    y = null,
                    w = crypto.randomUUID(),
                    I = iU(),
                    x = a5(),
                    {
                        sourceMcpAppId: S,
                        toolInput: A,
                        toolOutput: E,
                        toolResponseMetadata: M,
                        toolResult: P,
                        toolStatus: T,
                        toolResultNotification: R,
                        toolCallCancellationReason: j
                    } = it(),
                    N = new tY.b(tK(), S, e => {
                        ik({
                            href: e
                        }, o.signal).catch(e => {
                            o.signal.aborted || (0, ez.d)(e, iS())
                        })
                    });
                n$.current = null == P || null == E ? null : {
                    widgetId: w,
                    widgetState: I,
                    sourceMcpAppId: S,
                    toolInput: A,
                    toolOutput: E,
                    toolResponseMetadata: M,
                    toolStatus: T,
                    toolResult: R,
                    toolCallCancellationReason: j
                };
                let O = a_ ? {
                        requestConnectPlugin: async e => aA()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                            pluginId: tB.a.parse(e).pluginId,
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
                    D = null == P ? null : O ?? ia(P),
                    q = null == D ? null : {
                        ...D,
                        requestDeclinePluginSuggestions: O?.requestDeclinePluginSuggestions ?? (null == D.requestDeclinePluginSuggestions ? void 0 : async () => {
                            let e = it().toolResult,
                                t = null == e ? void 0 : ia(e)?.requestDeclinePluginSuggestions;
                            return null == t || !await e3.appServices?.mcpAppSandbox?.consumeUserGesture((0, eU.a)(io, r)).catch(() => !1) || o.signal.aborted ? {
                                status: "unavailable",
                                declinedPluginIds: []
                            } : t()
                        })
                    },
                    L = () => {
                        let e = aA()?.files;
                        if (null == e) throw Error("Widget file access is unavailable");
                        return e
                    },
                    U = {
                        ...q,
                        downloadBlob: aB ? e => aA()?.downloadBlob?.(e, o.signal) : void 0,
                        triggerHaptic: az ? e => aA()?.triggerHaptic?.(e, o.signal) : void 0,
                        requestCheckout: aN ? async e => {
                            o.signal.throwIfAborted();
                            let t = aA();
                            if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                            return t.requestCheckout(e, o.signal)
                        } : void 0,
                        requestModal: async e => {
                            o.signal.aborted || (aM ? await ak()?.requestModal(e) : null != aY() && (aA()?.requestModal == null || C.object({
                                params: C.object({
                                    view: C.literal("accountLinking")
                                })
                            }).safeParse(e).success) ? await ij(e, o.signal, tr) : aA()?.requestModal != null ? await aA()?.requestModal?.(e, o.signal) : await iY(e, o.signal))
                        },
                        uploadFile: aV ? (e, t) => L().uploadFile(e, t, o.signal) : void 0,
                        getFileDownloadUrl: aV ? e => L().getFileDownloadUrl(e, o.signal) : void 0,
                        getFileMetadata: aV ? e => L().getFileMetadata(e, o.signal) : void 0,
                        selectFiles: aV ? () => L().selectFiles(o.signal) : void 0,
                        share: a$ ? async e => {
                            o.signal.throwIfAborted(), await aA()?.share?.(e, o.signal)
                        } : void 0,
                        requestLinkToConnector: aM || aK ? async e => o.signal.aborted ? {
                            didConnect: !1
                        } : await (ak()?.requestLinkToConnector ?? aA()?.requestLinkToConnector)?.(e, o.signal) ?? {
                            didConnect: !1
                        } : void 0,
                        showToast: aT ? e => {
                            o.signal.aborted || (ak()?.showToast ?? aA()?.showToast)?.(e)
                        } : void 0,
                        notifyEscapeKey: aS || aM && aE || aF ? () => {
                            o.signal.aborted || aA()?.allowsInteractiveDismissal === !1 || (aS || aM || aA()?.displayMode != null ? iT() : iq({
                                mode: "inline"
                            }))
                        } : void 0,
                        callMcp: e => {
                            let t = y?.notifyMcpAppsMcpNotification;
                            if (au && null != t) {
                                let n = N.handleRequest(e, o.signal, e => e$(t(e)));
                                if (null != n) return n
                            }
                            let n = d.handleRequest(e, {
                                sandboxElement: r,
                                sandboxId: io,
                                initId: G,
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
                                    of a.data.params.entries) eb.a[t](n, {
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
                                    let n = iS();
                                    eb.a.warning("App request failed", {
                                        safe: {
                                            ...(0, ez.b)(t),
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
                                if (ez.i.safeParse(e).success) return void(0, ez.d)(e, iS());
                                iE("environment", e)
                            }
                        },
                        notifyIntrinsicHeight: iC,
                        notifyIntrinsicWidth: iM,
                        notifyNavigation: e => {
                            o.signal.aborted || iP(e)
                        },
                        notifySecurityPolicyViolation: e => {
                            o.signal.aborted || aA()?.instrumentation?.notifySecurityPolicyViolation(e)
                        },
                        openExternal: e => ik(e, o.signal),
                        openPlaidLink: a1 ? e => iR(e, o.signal) : void 0,
                        initializeMcpApp: e => {
                            if (o.signal.aborted) throw Error("MCP app initialization was cancelled");
                            try {
                                return iD(l.a.parse(e).availableDisplayModes)
                            } catch (e) {
                                throw iE("configuration", e), e
                            }
                        },
                        requestClose: aE ? iT : void 0,
                        requestDisplayMode: iq,
                        openConversationOverlay: aO ? async e => {
                            o.signal.throwIfAborted(), await aA()?.openConversationOverlay?.(e, o.signal)
                        } : void 0,
                        notifyAutofillCandidates: aq ? t => {
                            o.signal.throwIfAborted(), e?.(t)
                        } : void 0,
                        openPromptInput: aD ? e => {
                            o.signal.throwIfAborted();
                            let t = aA()?.openPromptInput;
                            if (null == t) throw Error("Widget prompt input is unavailable");
                            return t(e, r, o.signal)
                        } : void 0,
                        setOpenInAppUrl: aL ? e => {
                            o.signal.throwIfAborted();
                            let {
                                href: t
                            } = C.object({
                                href: C.string().nullable()
                            }).parse(e);
                            if (!t?.trim()) return void(0, eI.C)(tK(), eq, {
                                openInAppUrl: null == t ? null : void 0
                            });
                            let n = aA()?.openInApp?.validateUrl(t);
                            null != n && (0, eI.C)(tK(), eq, {
                                openInAppUrl: n
                            })
                        } : void 0,
                        requestFocusedObject: aG ? async e => {
                            o.signal.throwIfAborted(), await aA()?.presentation?.requestFocusedObject?.(e, o.signal)
                        } : void 0,
                        requestCloseFocusedObject: aW ? async () => {
                            o.signal.throwIfAborted(), await aA()?.presentation?.requestCloseFocusedObject?.(o.signal)
                        } : void 0,
                        requestTargetedReply: aP ? async e => {
                            if (o.signal.aborted) return;
                            let t = ak()?.requestTargetedReply;
                            if (null != t) return void await t(e);
                            let n = aA()?.setTargetedReply;
                            if (null != n) return void n(e, o.signal);
                            let a = aA()?.requestTargetedReply;
                            null != a && await (0, eS.c)(e, a, ac, o.signal)
                        } : void 0,
                        requestReconnectConnector: aJ ? async () => {
                            let e = aA()?.requestReconnectConnector;
                            if (null == e) throw Error("Connector reconnection is unavailable");
                            return e(o.signal)
                        } : void 0,
                        requestConnectSheet: aX ? e => {
                            let t = aA()?.requestConnectSheet;
                            if (null != t) return t(e, o.signal);
                            throw Error("Widget connection is unavailable")
                        } : void 0,
                        sendFollowUpMessage: e => iV(e, o.signal),
                        sendInstrument: e => {
                            if (!o.signal.aborted) {
                                if (ax || null != q) {
                                    let t = (0, p.h)(e);
                                    if (null != t) return void(0, k.a)(tK(), t.messageType, t.payload)
                                }
                                ez.g.safeParse(e).success && ((0, ez.d)(e, iS()), iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), q?.sendInstrument(e);
                                let t = aY() ?? a0();
                                t?.sendInstrument(e), (null == t && null == q || C.object({
                                    type: C.literal("interaction")
                                }).safeParse(e).success) && i8(e)
                            }
                        },
                        updateWidgetState: (e, t, n) => {
                            if (!o.signal.aborted) return iG(e, t, C.object({
                                waitForPersistence: C.literal(!0).optional()
                            }).optional().parse(n)?.waitForPersistence)
                        }
                    },
                    F = (0, eU.b)({
                        hostApiHandlers: U,
                        assertActive: () => {
                            o.signal.throwIfAborted(), tQ(), aA()?.assertActive?.()
                        },
                        onSkybridgeCacheState: e => {
                            t.mark(`skybridge_cache_${e}`, {
                                traceAttributes: {
                                    "webview.skybridge_cache_state": e
                                }
                            })
                        },
                        origin: n.sandboxOrigin,
                        sandboxId: io,
                        signal: o.signal,
                        sourceUrl: n.sourceUrl,
                        webview: r
                    }),
                    G = (0, _.g)(r.getAttribute("src") ?? void 0),
                    W = iS();
                return eb.a.info("Starting app sandbox", {
                    safe: {
                        conversationSurface: nM,
                        connectorId: W.safe.connectorId,
                        mcpAppId: W.safe.mcpAppId,
                        sandboxId: W.safe.sandboxId,
                        initId: G
                    },
                    sensitive: {
                        hostId: W.sensitive.hostId,
                        server: W.sensitive.server
                    }
                }), F.then(async r => {
                    if (o.signal.aborted) return;
                    t.mark("sandbox_ready"), eb.a.info("Connected app sandbox", {
                        safe: {
                            initId: G
                        }
                    }), y = r;
                    let l = r.notifyMcpAppsMcpNotification,
                        c = e3.appServices?.mcpAppSandbox != null && null != l;
                    null != l && v?.setNotificationSender(e => e$(l(e))), null != r.applyAutofillCandidate && (e = await aA()?.autofill?.(r.applyAutofillCandidate, o.signal), o.signal.throwIfAborted()), n6({
                        api: r,
                        widgetId: w
                    });
                    let {
                        displayMode: d,
                        availableDisplayModes: p
                    } = iO(), _ = tx(), {
                        containerDimensions: S
                    } = i_(nK), C = tS(aA()?.device), P = tK().get(eA.a), T = P["--color-background-primary"], k = iN(d), R = {
                        "openai/viewer-header": au && null != l,
                        ...tI({
                            availableDisplayModes: p,
                            containerDimensions: S,
                            displayMode: d,
                            locale: n.locale,
                            modelContextHostState: nT(),
                            deepLink: iL(),
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
                    } = n, N = nf ? {} : void 0;
                    av && (N = {
                        text: {},
                        image: {},
                        resourceLink: {},
                        resource: {}
                    }), null == v && ix(), eb.a.info("Starting app widget", {
                        safe: {
                            displayMode: d,
                            initId: G
                        }
                    }), u = !0;
                    let O = r.runWidgetCode({
                            enableAutofill: null != e,
                            expectReadySignal: null != aI,
                            expectedReadySignal: aI,
                            csp: j,
                            displayMode: aR(d),
                            features: i,
                            subjectId: aA()?.subjectId,
                            hostHandlesFollowUpMessageAuthorization: nh,
                            html: n.html,
                            isFirstParty: ax || null != q || aJ,
                            isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                            isTombstone: aA()?.isTombstone === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            measureWidth: !0 === t6,
                            mcpApps: {
                                requiresInitialization: a.requiresMcpInitialization,
                                forwardedRequestMethods: ["ui/update-model-context", ...c ? [td] : [], ...au && null != l ? [tY.a] : [], ...av || !nf ? ["ui/message"] : [], ...ap?.split(";") ?? [], ...ay ? [f.a] : [], ...null == v || null == l ? [] : [m.c], ...null == b ? [] : [m.e], ...null == l ? [] : [...t8, ...n9 && !aw ? t3 : []]],
                                hostCapabilities: {
                                    experimental: {
                                        [g.a]: {},
                                        ...c ? {
                                            "openai/find": {}
                                        } : {},
                                        ...av ? {
                                            [h.a]: {
                                                draft: ng() ? {} : void 0
                                            }
                                        } : {},
                                        "openai/skillsDeepLinks": {},
                                        ...n.experimentalCapabilities,
                                        ...ay ? {
                                            "openai/files": {}
                                        } : {}
                                    },
                                    logging: {},
                                    openLinks: {},
                                    serverResources: {},
                                    serverTools: {},
                                    message: N,
                                    updateModelContext: nf ? {
                                        resource: {},
                                        resourceLink: {},
                                        image: {},
                                        structuredContent: {},
                                        text: {}
                                    } : void 0,
                                    sandbox: null != j || null != nx ? {
                                        permissions: null == nx ? void 0 : {
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
                                    version: tK().get(ev.a).data?.version ?? "unknown",
                                    client_type: "codex_browser"
                                },
                                globalSurface: tT
                            },
                            safeArea: k,
                            theme: _,
                            toolInput: A,
                            toolOutput: E,
                            toolResponseMetadata: M,
                            userAgent: C,
                            viewParams: x,
                            widgetId: w,
                            widgetState: I
                        }),
                        D = !1;
                    for await (let e of O) {
                        let n = tK().get(eI.q, eq)?.sandboxError;
                        if (o.signal.aborted || nm(n)) break;
                        if (ez.f.safeParse(e).success) return;
                        if (ez.g.safeParse(e).success)(0, ez.d)(e, iS()), iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION");
                        else if (ez.h.safeParse(e).success) throw Error("The MCP app sandbox execution failed.");
                        if (D || !eU.d.safeParse(e).success) continue;
                        D = !0;
                        let {
                            displayMode: a,
                            availableDisplayModes: i
                        } = iO(), s = {
                            ...R,
                            displayMode: a,
                            availableDisplayModes: [...i]
                        };
                        (0, eI.C)(tK(), eq, {
                            isWidgetReady: !0
                        }), e$(r.setWidgetView({
                            displayMode: aR(a),
                            isTombstone: aA()?.isTombstone === !0,
                            viewParams: x,
                            widgetId: w
                        })), e$(r.setTheme({
                            theme: _
                        })), e$(r.setSafeArea({
                            safeArea: k
                        }));
                        let l = {
                            isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            surfaceBackgroundColor: T
                        };
                        nB.current = l, e$(r.setAdditionalGlobals({
                            additionalGlobals: l
                        })), e$(r.notifyMcpAppsHostContext({
                            hostContext: s
                        })), t.mark("fully_loaded"), eb.a.info("Started app widget", {
                            safe: {
                                displayMode: a,
                                initId: G
                            }
                        }), t.end()
                    }
                    if (!D && !o.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                }).catch(e => {
                    o.signal.aborted || (u && iA("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), iE(null == y ? "handshake" : "widget", e))
                }), () => {
                    o.abort(), ao(), nz.current === t && (nz.current = null), t.isRecording() && t.abort("navigation_away"), d[Symbol.dispose](), N[Symbol.dispose](), v?.[Symbol.dispose](), n$.current = null, nX.current = null, nW.current = null, nH.current = null, nB.current = null, (0, eI.C)(tK(), eq, {
                        isWidgetReady: !1
                    }), n6(null), aa(ns), null != y && e$(y.requestMcpAppsResourceTeardown({
                        timeoutMs: 500
                    })), r.remove(), r instanceof HTMLIFrameElement || r.destroy?.(), eb.a.info("Removed app sandbox", {
                        safe: {
                            initId: G
                        }
                    }), nQ(e => e === r ? null : e)
                }
            }, [nf, nh, nS, nx, aB, az, ao, ay, av, a1, aE, em, null, ef, nM, nK, L, B, s, b, aw, t6, a_, aN, a$, aV, aX, aJ, aK, aS, aT, aM, aP, aF, aL, aO, aD, aq, aG, aW, ax, au, ap, aI, a.requiresMcpInitialization, tr, n0, eq, ii, ac, io, iI, ir, ip, tp, n9, am, tT]), (0, x.useLayoutEffect)(() => {
                ae.setConversation(r).catch(e => {
                    eb.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: r,
                            mcpAppId: eq
                        },
                        sensitive: {
                            error: e,
                            hostId: ef
                        }
                    })
                })
            }, [r, ef, ae, eq]), (0, x.useLayoutEffect)(() => {
                at.setConversation(r, n9 && ny).catch(e => {
                    eb.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [r, at, ny, n9]), (0, x.useLayoutEffect)(() => {
                let e = n5?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = at.connectNotificationSink(e);
                return () => {
                    t(), at.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [at, n5]), (0, x.useLayoutEffect)(() => {
                let e = n5?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = ae.connectNotificationSink(t => e$(e(t)));
                return () => {
                    t(), ae.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [ae, n5]), (0, x.useEffect)(() => {
                if (!nD || null == n5 || null == n7) return;
                let e = {
                        widgetId: n7,
                        sourceMcpAppId: eH,
                        toolInput: a2,
                        toolOutput: a3,
                        toolResponseMetadata: ie,
                        toolStatus: a9,
                        toolCallCancellationReason: tF,
                        toolResult: a4
                    },
                    t = {
                        ...e,
                        widgetState: nV
                    };
                v()(n$.current, t) || (n$.current = t, e$(n5.setWidgetData({
                    toolInput: a2,
                    toolOutput: a3,
                    toolResponseMetadata: ie,
                    widgetId: n7,
                    widgetState: nV
                })));
                let n = nX.current?.widgetId === n7 ? nX.current : null;
                if (v()(n, e)) return;
                nX.current = e;
                let a = n?.sourceMcpAppId !== eH;
                null != a2 && (a || !v()(n?.toolInput, a2)) && e$(n5.notifyMcpAppsToolInput({
                    arguments: a2
                })), "cancelled" === a9 ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tF) && e$(n5.notifyMcpAppsToolCancelled({
                    reason: tF
                })) : null == a4 || !a && v()(n?.toolResult, e.toolResult) && n?.toolStatus === a9 && v()(n?.toolInput, a2) && v()(n?.toolResponseMetadata, ie) || e$(n5.notifyMcpAppsToolResult({
                    ...a4,
                    isError: "error" === a9 || a4.isError,
                    _meta: "error" === a9 ? {
                        ...a4._meta,
                        status: "error"
                    } : a4._meta
                }))
            }, [nD, a4, n5, eH, a2, a3, ie, a9, tF, n7, nV]), (0, x.useEffect)(() => {
                nD && null != n5 && e$(n5.notifyMcpAppsHostContext({
                    hostContext: {
                        [g.a]: nP
                    }
                }))
            }, [nD, nP, n5]), (0, x.useEffect)(() => {
                if (nD && null != n5 && null != nK) return s?.observeHostContext?.(tz, nK, e => {
                    e$(n5.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, nK, nD, n5, tz]), (0, x.useEffect)(() => {
                if (null == nK || !iu || null == n5 || null == n7 || nL && null == il) return;
                let e = iN(nU);
                e$(n5.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aR(nU),
                    isTombstone: aA()?.isTombstone === !0,
                    viewParams: a6,
                    widgetId: n7
                };
                return v()(nW.current, t) || (nW.current = t, e$(n5.setWidgetView(t))),
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
                        inlineAnchor: ic,
                        fitWidth: t6,
                        rightPanelAnimationProgress: nR,
                        onLayout: () => {
                            if ("true" === nK.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = i_(nK), n = {
                                isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: ig ? "transparent" : nO
                            };
                            v()(nB.current, n) || (nB.current = n, e$(n5.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tI({
                                availableDisplayModes: tH.availableDisplayModes ?? em,
                                containerDimensions: t,
                                displayMode: nU,
                                locale: nA.locale,
                                deepLink: ts,
                                safeAreaInsets: e.insets,
                                styleVariables: nN,
                                theme: tx(),
                                userAgent: tS(aA()?.device),
                                toolInfo: aA()?.toolInfo
                            });
                            v()(nH.current, a) || (nH.current?.theme !== a.theme && e$(n5.setTheme({
                                theme: a.theme
                            })), nH.current = a, e$(n5.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nK, t6, nF, L, B, ic, nA.locale, nN, em, tH.availableDisplayModes, iu, nL, aZ, aH, ig, e4?.displayMode, e4?.showModalCloseButton, ar, ts, nR, nj, n5, il, nO, tT, a6, n7, nU]);
            let i3 = ar && !nL,
                i6 = ar && nL && nk?.tabId === (0, e9.b)(eq);
            return (0, o.jsxs)(o.Fragment, {
                children: [L && iu && nD && null != nY && null != io ? (0, o.jsx)(tb, {
                    sandboxElement: nY,
                    sandboxId: io
                }) : null, nD && null != nY && null != io ? (0, o.jsx)(tl, {
                    panelTabId: nL ? (0, e9.b)(eq) : e4?.panelTabId ?? null,
                    sandboxElement: nY,
                    sandboxId: io,
                    title: tv
                }) : null, null != as && iu ? (0, o.jsx)(ex.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...as,
                        onCancel: ao,
                        onConfirm: al
                    }
                }) : null, i6 ? (0, o.jsx)(V.a.RightPanelTabListBefore, {
                    children: (0, o.jsx)(tW, {
                        canGoBack: an.canGoBack,
                        canGoForward: an.canGoForward,
                        className: "h-full px-1",
                        onBack: () => iW(-1),
                        onForward: () => iW(1)
                    })
                }) : null, i3 && null != nK && !nL ? (0, S.createPortal)((0, o.jsx)(tW, {
                    canGoBack: an.canGoBack,
                    canGoForward: an.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => iW(-1),
                    onForward: () => iW(1)
                }), nK) : null]
            })
        }

        function nm(e) {
            return null != e && !(e instanceof tV.a)
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
                signal: A
            } = e;
            return (e, E) => (0, c.c)({
                context: e,
                signal: A,
                requestConfirmation: E,
                send: async e => {
                    _();
                    let c = (0, h.b)(i);
                    if (void 0 === c && (c = null != p ? p() : null == i ? {
                            kind: "app-server",
                            hostId: v.a
                        } : null), null == c || "app-server" === c.kind && !w) throw (0, b.a)("New conversations are unavailable for this view", a.q.MethodNotFound);
                    A.throwIfAborted();
                    let E = new AbortController,
                        C = t.get(l.f),
                        M = t.get(l.j),
                        P = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.f) !== C || t(l.j) !== M) && E.abort()
                        }),
                        T = (0, s.a)(),
                        k = g(t, T);
                    r()(e => e());
                    let R = e => {
                            E.signal.aborted || (0, o.c)(e) || t.get(m.f).danger(e instanceof Error ? e.message : String(e), {
                                id: T,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        j = r()(() => {
                            E.signal.removeEventListener("abort", j), P(), k?.close()
                        }),
                        N = !1;
                    E.signal.addEventListener("abort", j, {
                        once: !0
                    });
                    let O = () => E.abort();
                    A.addEventListener("abort", O, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(17982)]).then(n.bind(n, "VWsy"));
                        _(), E.signal.throwIfAborted(), A.removeEventListener("abort", O), await a(t, {
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
                            signal: E.signal
                        });
                        return
                    } catch (e) {
                        throw R(e), e
                    } finally {
                        A.removeEventListener("abort", O), N || j()
                    }
                }
            })
        }
    }),
    jAhM: (function(e, t, n) {
        var a = n("bTvG"),
            i = n("iRMi"),
            r = n("mfKi"),
            o = n("bg18"),
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
                    A = {
                        chatgpt: n,
                        source: i.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: S,
                        surface: i.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    E = (e, i, o) => {
                        try {
                            (0, c.a)(t, r.CodexPluginAction, {
                                source: A.source,
                                suggestionId: S,
                                surface: A.surface,
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
                        E(r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => I.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = M(e);
                        return v?.(t.plugin_id), y?.(t.plugin_id, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), E(r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), f(t, A)
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
                let t, n, y, w, I, _, x, S, A, E, C, M = (0, i.c)(100),
                    {
                        resource: P,
                        error: T,
                        errorTitle: k,
                        errorIllustration: R,
                        hostDisplayModes: j,
                        fullSurface: N,
                        hostScroll: O,
                        inlineSurface: D,
                        mcpAppId: q,
                        onRetryResourceRead: L,
                        renderErrorActions: U,
                        pluginName: F,
                        presentation: G,
                        showLoadingStatus: W
                    } = e,
                    H = void 0 !== N && N,
                    B = void 0 !== O && O,
                    z = void 0 === D ? "standalone" : D,
                    V = void 0 === W || W,
                    $ = (0, o.y)(m.a),
                    X = (0, o.x)(v.i, q),
                    J = X?.content.resource;
                M[0] !== T || M[1] !== P || M[2] !== J ? (t = null == J ? P : {
                    data: J,
                    error: T ?? null,
                    isLoading: !1
                }, M[0] = T, M[1] = P, M[2] = J, M[3] = t) : t = M[3];
                let K = t,
                    {
                        data: Z,
                        isLoading: Y
                    } = K,
                    Q = Z?.html ?? null;
                M[4] !== K || M[5] !== j ? (n = (0, b.c)(K, j), M[4] = K, M[5] = j, M[6] = n) : n = M[6];
                let ee = n,
                    et = (0, o.x)(v.t, q),
                    en = (0, o.x)(v.u, q),
                    ea = H || "inline" === G,
                    ei = X?.inlineFrameAnchor.ref,
                    er = Z?.heightHint ?? null,
                    eo = Z?.minFrameHeight ?? null;
                M[7] !== et.intrinsicHeight || M[8] !== B || M[9] !== er || M[10] !== eo ? (y = (0, p.a)(et.intrinsicHeight, er, eo, B), M[7] = et.intrinsicHeight, M[8] = B, M[9] = er, M[10] = eo, M[11] = y) : y = M[11];
                let es = y,
                    el = !H && Z?.fitWidth ? et.intrinsicWidth ?? Z.widthHint : void 0,
                    ec = H ? void 0 : Z?.inlineFramePadding,
                    eu = null == ec ? void 0 : -ec.blockStart,
                    ed = null == ec ? void 0 : -ec.blockEnd,
                    ep = null == ec ? void 0 : -ec.inlineStart,
                    em = null == ec ? void 0 : -ec.inlineEnd;
                M[12] !== el || M[13] !== eu || M[14] !== ed || M[15] !== ep || M[16] !== em ? (w = {
                    width: el,
                    marginBlockStart: eu,
                    marginBlockEnd: ed,
                    marginInlineStart: ep,
                    marginInlineEnd: em
                }, M[12] = el, M[13] = eu, M[14] = ed, M[15] = ep, M[16] = em, M[17] = w) : w = M[17];
                let ef = w,
                    eg = "error" === ee.kind ? ee.error : et.sandboxError;
                M[18] !== ee.error || M[19] !== ee.kind ? (I = null, "too-large" === ee.kind ? I = "HTML exceeds display limit" : "error" === ee.kind && ee.error instanceof b.a && (I = "No supported display mode"), M[18] = ee.error, M[19] = ee.kind, M[20] = I) : I = M[20];
                let eh = Y ? null : eg,
                    eb = eh?.message;
                M[21] !== I || M[22] !== Z?.availableDisplayModes || M[23] !== Z?.htmlByteLength || M[24] !== eh || M[25] !== j || M[26] !== q ? (_ = () => {
                    (null != I || null != eh) && f.a.warning("MCP app error displayed", {
                        safe: {
                            reason: I ?? "App could not be displayed",
                            htmlByteLength: Z?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: q,
                            error: eh,
                            hostDisplayModes: j,
                            availableDisplayModes: Z?.availableDisplayModes
                        }
                    })
                }, M[21] = I, M[22] = Z?.availableDisplayModes, M[23] = Z?.htmlByteLength, M[24] = eh, M[25] = j, M[26] = q, M[27] = _) : _ = M[27];
                let ev = (0, s.useEffectEvent)(_);
                if (M[28] !== ev ? (x = () => {
                        ev()
                    }, M[28] = ev, M[29] = x) : x = M[29], M[30] !== I || M[31] !== eb || M[32] !== q ? (S = [I, eb, q], M[30] = I, M[31] = eb, M[32] = q, M[33] = S) : S = M[33], (0, s.useEffect)(x, S), "too-large" === ee.kind) {
                    let e;
                    return M[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(u.a, {
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
                    }), M[34] = e) : e = M[34], e
                }
                if (Y || !en && null != Q && null == eg) {
                    let e, t, n, i;
                    if ("pending" === G && !H) {
                        let e;
                        return V ? (M[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app",
                                description: "Accessible label for the MCP app loading placeholder"
                            })
                        }), M[35] = e) : e = M[35], e) : null
                    }
                    if (!ea) {
                        let e;
                        return M[36] !== ei ? (e = (0, a.jsx)("div", {
                            ref: ei,
                            hidden: !0
                        }), M[36] = ei, M[37] = e) : e = M[37], e
                    }
                    let o = Y ? null : ei,
                        s = null == ec && "max-w-full",
                        c = H && "h-full";
                    M[38] !== s || M[39] !== c ? (e = (0, r.b)(s, c), M[38] = s, M[39] = c, M[40] = e) : e = M[40];
                    let u = "standalone" === z && "rounded-lg border";
                    M[41] !== u ? (t = (0, r.b)("w-full border-subtle", u), M[41] = u, M[42] = t) : t = M[42];
                    let d = H ? "100%" : es;
                    return M[43] !== H || M[44] !== B || M[45] !== ec || M[46] !== V || M[47] !== t || M[48] !== d ? (n = (0, a.jsx)(h.a, {
                        className: t,
                        height: d,
                        inlineFramePadding: ec,
                        fullSurface: H,
                        allowCompact: B,
                        showLoadingStatus: V
                    }), M[43] = H, M[44] = B, M[45] = ec, M[46] = V, M[47] = t, M[48] = d, M[49] = n) : n = M[49], M[50] !== ef || M[51] !== z || M[52] !== o || M[53] !== e || M[54] !== n ? (i = (0, a.jsx)("div", {
                        ref: o,
                        className: e,
                        style: ef,
                        "data-mcp-app-inline-surface": z,
                        children: n
                    }), M[50] = ef, M[51] = z, M[52] = o, M[53] = e, M[54] = n, M[55] = i) : i = M[55], i
                }
                if (null != eg) {
                    let e, t, n, i, o;
                    M[56] !== F || M[57] !== k ? (e = k ?? (null == F ? (0, a.jsx)(l.a, {
                        ...g.a.displayUnnamedApp
                    }) : (0, a.jsx)(l.a, {
                        ...g.a.displayApp,
                        values: {
                            appName: F
                        }
                    })), M[56] = F, M[57] = k, M[58] = e) : e = M[58];
                    let s = e,
                        p = "error" === ee.kind ? null != L : null != et.sandboxError;
                    M[59] !== p || M[60] !== ee.kind || M[61] !== H || M[62] !== q || M[63] !== L || M[64] !== F || M[65] !== $ ? (t = p ? (0, a.jsx)(c.a, {
                        color: "secondary",
                        size: H && null != F ? "large" : "compact",
                        onClick: () => {
                            "error" === ee.kind ? L?.() : (0, v.B)($, q)
                        },
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppRetry",
                            defaultMessage: "Try again",
                            description: "Button label to retry loading an MCP app"
                        })
                    }) : null, M[59] = p, M[60] = ee.kind, M[61] = H, M[62] = q, M[63] = L, M[64] = F, M[65] = $, M[66] = t) : t = M[66];
                    let m = t;
                    M[67] !== U || M[68] !== m ? (n = U ? U(m) : m, M[67] = U, M[68] = m, M[69] = n) : n = M[69];
                    let f = n;
                    if (!H || null != F) {
                        let e, t, n, i = H ? "h-full" : "h-60",
                            o = !H && "standalone" === z && "overflow-hidden rounded-lg border border-strong";
                        M[70] !== i || M[71] !== o ? (e = (0, r.b)(i, o), M[70] = i, M[71] = o, M[72] = e) : e = M[72];
                        let l = !H;
                        return M[73] !== f || M[74] !== R || M[75] !== s || M[76] !== l ? (t = (0, a.jsx)(d.a, {
                            compact: l,
                            title: s,
                            illustration: R,
                            description: null,
                            actions: f
                        }), M[73] = f, M[74] = R, M[75] = s, M[76] = l, M[77] = t) : t = M[77], M[78] !== e || M[79] !== t ? (n = (0, a.jsx)("div", {
                            className: e,
                            children: t
                        }), M[78] = e, M[79] = t, M[80] = n) : n = M[80], n
                    }
                    return M[81] !== s ? (i = (0, a.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: (0, a.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: s
                        })
                    }), M[81] = s, M[82] = i) : i = M[82], M[83] !== f || M[84] !== i ? (o = (0, a.jsx)(u.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [i, f]
                        })
                    }), M[83] = f, M[84] = i, M[85] = o) : o = M[85], o
                }
                if (!ea) {
                    let e;
                    return M[86] !== ei ? (e = (0, a.jsx)("div", {
                        ref: ei,
                        hidden: !0
                    }), M[86] = ei, M[87] = e) : e = M[87], e
                }
                if (null == Q) {
                    let e;
                    return M[88] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), M[88] = e) : e = M[88], e
                }
                let ey = null == ec && "w-full max-w-full",
                    ew = H && "h-full";
                M[89] !== ey || M[90] !== ew ? (A = (0, r.b)("overflow-hidden", ey, ew), M[89] = ey, M[90] = ew, M[91] = A) : A = M[91];
                let eI = H ? "100%" : es;
                return M[92] !== ef || M[93] !== eI ? (E = {
                    ...ef,
                    height: eI
                }, M[92] = ef, M[93] = eI, M[94] = E) : E = M[94], M[95] !== ei || M[96] !== z || M[97] !== A || M[98] !== E ? (C = (0, a.jsx)("div", {
                    ref: ei,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": z,
                    className: A,
                    style: E
                }), M[95] = ei, M[96] = z, M[97] = A, M[98] = E, M[99] = C) : C = M[99], C
            }
        })
    }),
    JXtc: (function(e, t, n) {
        var a = n("z8ZL"),
            i = n("bg18"),
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

        function b(e, t, n) {
            let a = null;
            for (let r of e?.contents ?? []) {
                let e = h.safeParse(r);
                if (!e.success) continue;
                if (e.data.mimeType === i.Nc) {
                    null == a && (a = {
                        htmlFallback: null,
                        kind: "dil",
                        source: e.data.text ?? null
                    });
                    continue
                }
                if (null == e.data.mimeType || !l.has(e.data.mimeType)) continue;
                let o = e.data._meta?.["openai/widgetHeightHint"],
                    s = e.data._meta?.["openai/widgetMinFrameHeight"],
                    c = e.data._meta?.["openai/ui"],
                    u = {
                        sandboxOrigin: t,
                        serverOrigin: n,
                        requiresMcpInitialization: "text/html;profile=mcp-app" === e.data.mimeType,
                        availableDisplayModes: c?.availableDisplayModes,
                        preferredDisplayMode: c?.preferredDisplayMode,
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
                        heightHint: o,
                        widthHint: e.data._meta?.["openai/widgetWidthHint"],
                        fitWidth: e.data._meta?.["openai/widgetFitWidth"],
                        hideActions: e.data._meta?.["openai/widgetHideActions"],
                        hideAttribution: e.data._meta?.["openai/widgetHideAttribution"],
                        html: e.data.text ?? null,
                        htmlByteLength: new Blob([e.data.text ?? ""]).size,
                        kind: "html",
                        minFrameHeight: s,
                        prefersBorder: e.data._meta?.["openai/widgetPrefersBorder"] ?? e.data._meta?.ui?.prefersBorder ?? !1,
                        isCollapsible: !e.data._meta?.["openai/widgetShowCodexWidgetInline"],
                        widgetDomain: e.data._meta?.ui?.domain || e.data._meta?.["openai/widgetDomain"] || null
                    };
                return null == a ? u : {
                    ...a,
                    htmlFallback: u
                }
            }
            return a
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
                return b(e?.resource, e?.sandboxOrigin, e?.serverOrigin)
            },
            d: function(e) {
                return e.endsWith(".internal.api.openai.org") || e.endsWith(".extapps.openai.org")
            },
            e: function(e, t) {
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
            f: function(e) {
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
                (0, d.D)(u, {
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
                c.set(d.k, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, o.useLayoutEffect)(t, n), null
        }

        function v(e) {
            let t, n, u, h, b, v, y, w, I, _ = (0, i.c)(117),
                {
                    recipient: x,
                    analyticsContext: S,
                    resource: A,
                    refetchResource: E,
                    getResourceHost: C,
                    openOnRegistration: M,
                    conversationId: P,
                    fullSurface: T,
                    modalOpen: k,
                    hostScroll: R,
                    hostDisplayModes: j,
                    legacyPreferredDisplayMode: N,
                    inheritHostBackground: O,
                    hostId: D,
                    hostedInThreadScrollLayout: q,
                    access: L,
                    lifetime: U,
                    mcpAppId: F,
                    mcpAppScope: G,
                    sourceName: W,
                    mcpServerStatuses: H,
                    pluginId: B,
                    connectorId: z,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: J,
                    plaidAccountId: K,
                    deepLink: Z,
                    Frame: Y,
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
                eg = void 0 !== O && O,
                eh = void 0 !== ei && ei,
                eb = (0, r.y)(p.a),
                ev = (0, r.x)(d.r, F),
                ey = (0, r.z)(m.a);
            _[0] !== ed ? (t = null == ed ? void 0 : e => (0, l.a)(ed, e), _[0] = ed, _[1] = t) : t = _[1];
            let ew = t;
            _[2] !== U || _[3] !== F || _[4] !== eb ? (n = () => {
                if ("component" === U) return () => {
                    (0, d.y)(eb, F)
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
                    isLoading: eA
                } = (0, r.x)(c.a, {
                    hostId: D,
                    pluginId: e_,
                    connectorId: z,
                    server: ee
                }),
                eE = e_ ?? eS,
                eC = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: D,
                    pluginId: eE
                }) ? void 0 : eE,
                eM = A.isLoading || eA;
            _[7] !== j || _[8] !== eM || _[9] !== A ? (h = (0, f.c)({
                ...A,
                isLoading: eM
            }, j), _[7] = j, _[8] = eM, _[9] = A, _[10] = h) : h = _[10];
            let eP = h;
            return _[11] !== L || _[12] !== S || _[13] !== et || _[14] !== P || _[15] !== Z || _[16] !== eP || _[17] !== ex || _[18] !== eC || _[19] !== em || _[20] !== $ || _[21] !== C || _[22] !== eh || _[23] !== j || _[24] !== D || _[25] !== ef || _[26] !== q || _[27] !== eg || _[28] !== X || _[29] !== ey || _[30] !== N || _[31] !== V || _[32] !== F || _[33] !== G || _[34] !== H || _[35] !== k || _[36] !== ew || _[37] !== ep || _[38] !== K || _[39] !== ed || _[40] !== E || _[41] !== Q || _[42] !== e_ || _[43] !== eI || _[44] !== eb || _[45] !== ee || _[46] !== en || _[47] !== W || _[48] !== ea || _[49] !== er || _[50] !== ec || _[51] !== el || _[52] !== eo || _[53] !== es || _[54] !== eu || _[55] !== J ? (b = () => {
                ey || "ready" === eP.kind && null != L && (0, d.x)(eb, {
                    recipient: ed,
                    onSessionDispose: ew,
                    resource: eP.data,
                    refetchResource: E,
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
                    hostId: D,
                    hostedInThreadScrollLayout: q,
                    access: L,
                    analyticsContext: S,
                    mcpAppId: F,
                    mcpAppScope: G,
                    sourceName: W,
                    mcpServerStatuses: H,
                    pluginId: e_,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: J,
                    plaidAccountId: K,
                    deepLink: Z,
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
            }, _[11] = L, _[12] = S, _[13] = et, _[14] = P, _[15] = Z, _[16] = eP, _[17] = ex, _[18] = eC, _[19] = em, _[20] = $, _[21] = C, _[22] = eh, _[23] = j, _[24] = D, _[25] = ef, _[26] = q, _[27] = eg, _[28] = X, _[29] = ey, _[30] = N, _[31] = V, _[32] = F, _[33] = G, _[34] = H, _[35] = k, _[36] = ew, _[37] = ep, _[38] = K, _[39] = ed, _[40] = E, _[41] = Q, _[42] = e_, _[43] = eI, _[44] = eb, _[45] = ee, _[46] = en, _[47] = W, _[48] = ea, _[49] = er, _[50] = ec, _[51] = el, _[52] = eo, _[53] = es, _[54] = eu, _[55] = J, _[56] = b) : b = _[56], _[57] !== Y || _[58] !== L || _[59] !== S || _[60] !== et || _[61] !== P || _[62] !== Z || _[63] !== eP || _[64] !== ex || _[65] !== eC || _[66] !== em || _[67] !== $ || _[68] !== C || _[69] !== eh || _[70] !== j || _[71] !== D || _[72] !== ef || _[73] !== q || _[74] !== eg || _[75] !== X || _[76] !== ey || _[77] !== eM || _[78] !== N || _[79] !== U || _[80] !== V || _[81] !== F || _[82] !== G || _[83] !== H || _[84] !== k || _[85] !== ew || _[86] !== ep || _[87] !== K || _[88] !== ed || _[89] !== E || _[90] !== Q || _[91] !== e_ || _[92] !== eI || _[93] !== eb || _[94] !== ee || _[95] !== en || _[96] !== W || _[97] !== ea || _[98] !== er || _[99] !== ec || _[100] !== el || _[101] !== eo || _[102] !== es || _[103] !== eu || _[104] !== J ? (v = [S, C, E, eP, ep, ed, ew, P, ex, eC, em, k, ef, j, N, eg, D, q, L, ey, eM, U, F, G, W, H, e_, V, $, X, J, K, Z, Y, eI, Q, eb, ee, et, en, ea, eh, er, eo, es, el, ec, eu], _[57] = Y, _[58] = L, _[59] = S, _[60] = et, _[61] = P, _[62] = Z, _[63] = eP, _[64] = ex, _[65] = eC, _[66] = em, _[67] = $, _[68] = C, _[69] = eh, _[70] = j, _[71] = D, _[72] = ef, _[73] = q, _[74] = eg, _[75] = X, _[76] = ey, _[77] = eM, _[78] = N, _[79] = U, _[80] = V, _[81] = F, _[82] = G, _[83] = H, _[84] = k, _[85] = ew, _[86] = ep, _[87] = K, _[88] = ed, _[89] = E, _[90] = Q, _[91] = e_, _[92] = eI, _[93] = eb, _[94] = ee, _[95] = en, _[96] = W, _[97] = ea, _[98] = er, _[99] = ec, _[100] = el, _[101] = eo, _[102] = es, _[103] = eu, _[104] = J, _[105] = v) : v = _[105], (0, o.useLayoutEffect)(b, v), _[106] !== Y || _[107] !== U || _[108] !== F || _[109] !== eb || _[110] !== ev ? (y = () => {
                "component" !== U && null != ev && (0, g.b)(eb, {
                    Frame: Y,
                    lifetime: U,
                    sessionId: ev,
                    sourceMcpAppId: F
                })
            }, w = [Y, U, F, ev, eb], _[106] = Y, _[107] = U, _[108] = F, _[109] = eb, _[110] = ev, _[111] = y, _[112] = w) : (y = _[111], w = _[112]), (0, o.useLayoutEffect)(y, w), _[113] !== Y || _[114] !== U || _[115] !== ev ? (I = "component" === U && null != ev ? (0, a.jsx)(Y, {
                sessionId: ev
            }, ev) : null, _[113] = Y, _[114] = U, _[115] = ev, _[116] = I) : I = _[116], I
        }
    })
};