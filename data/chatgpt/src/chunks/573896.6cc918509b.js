export const __rspack_esm_ids = [573896];
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
            f = "RESOLVE";

        function m(e, t) {
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
                            }, a.postMessage([f, await t.call({
                                signal: e.signal
                            }, ...n.slice(1))])
                        } catch (r) {
                            if (r instanceof Error && "DataCloneError" === r.name) try {
                                a.postMessage([f, await t.call({
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
                            t[0] === f ? n(t[1]) : r(t[1]), i.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            i.postMessage([u]), i.close(), r(Error("Aborted."))
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
                    let [a, r, ...i] = n, o = t(...i);
                    m(r.next, o.next.bind(o)), m(r.return, e => o.return?.(e) || {
                        done: !0
                    }), m(r.throw, e => o.throw?.(e) || Promise.reject(e)), m(r.asyncDispose, async () => {
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
                            port2: f
                        } = new MessageChannel, h = {
                            signal: t.signal
                        }, b = () => {
                            o.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), f.close()
                        }, v = m(o).withOptions(h), y = m(l).withOptions(h), w = m(u).withOptions(h), I = m(p).withOptions(h), _ = !1, x = async e => {
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
                            throw: f
                        }, ...r], [...t.transfer || [], s, c, d, f]), t.signal?.addEventListener("abort", () => {
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
                replyPort: r
            } = "iframe" in e ? await

            function(e) {
                let {
                    iframe: t,
                    origin: n,
                    signal: a
                } = e, r = t.ownerDocument.defaultView;
                if (null == r || a?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let i = b.object({
                    type: b.literal("init"),
                    ports: b.record(b.string(), b.instanceof(MessagePort)),
                    replyPort: b.instanceof(MessagePort)
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
                        return y(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* a.apply(this, t)
                        }: a
                    }(t, e, n);
                    y(r) ? h(a.port1, r) : m(a.port1, r), l[e] = a.port2
                }
                r.postMessage(l, Object.values(l)), r.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    u = Object.fromEntries(Object.entries(a).map(e => {
                        let [t, a] = e, r = c.has(t) ? h(a) : m(a);
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

        function y(e) {
            return "AsyncGeneratorFunction" === e.constructor.name
        }

        function w(e) {
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
                let f = t.get(r.f);
                if (null == c || null == f) throw Error("MCP app connection identity changed");
                c.assertActive();
                let m = "tpp" === t.get(i.x, n.id);
                return (0, o.b)({
                    scope: t,
                    accountId: f,
                    appUri: `connectors://${l.connectorId}`,
                    chatGptConversationId: n.id,
                    threadId: m ? n.id : void 0,
                    productSku: m ? "TPP" : void 0,
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
            r = n("bg18"),
            i = n("tl5a"),
            o = n("Cslg"),
            s = n("dsow"),
            l = n("Sd8U"),
            c = n("dN0a"),
            u = n("WFY2"),
            d = n("f4ql"),
            p = n("uoRg");
        let f = (0, a.u)(l.a, () => []);
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
                    let i, d, m = (a = e, l = n, i = a.get(o.f), d = a.get(o.j), e => e(p.a)?.submit === l && e(o.f) === i && e(o.j) === d);
                    return async (a, i, o, l) => {
                        o?.throwIfAborted();
                        let d = a.untrustedAppMessage?.sourceId,
                            g = e.get(p.a)?.isBusy == null ? void 0 : Symbol();
                        null != g && (e.set(f, e => [...e, g]), u.a.info("Queued app message for composer", {
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
                                        let i = e => e(f)[0] === a && e(p.a)?.isBusy !== !0;
                                        do {
                                            let a = (0, r.Pe)(),
                                                o = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (!t(n) || i(n)) && a.resolve(void 0)
                                                });
                                            try {
                                                await (null == n ? a.promise : (0, r.gf)(a.promise, n))
                                            } finally {
                                                o(), a.resolve(void 0)
                                            }
                                            if (n?.throwIfAborted(), !t(e.get)) throw new DOMException("Composer was closed", "AbortError")
                                        } while (!i(e.get))
                                    }(e, m, o, g), t?.(), u.a.info("Submitting app message", {
                                        safe: {
                                            mcpAppId: d
                                        }
                                    }), n(a, i, o)
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
                            null != g && e.set(f, e => e.filter(e => e !== g))
                        }
                    }
                }
                if ("local" !== e.value.kind || null == e.value.conversationId) return null;
                let m = e.value.conversationId,
                    g = e.get(i.q, m);
                return null == g ? null : async (n, a, r, o) => {
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
                            }), (0, d.a)(e, e.get(i.vb, m), m, {
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
    ywSA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(514247)]).then(n.bind(n, "shkb"))
            }
        })
    }),
    o62A: (function(e, t, n) {
        var a = n("i5ac"),
            r = n.n(a),
            i = n("bg18"),
            o = n("P61R"),
            s = n("Dgwo"),
            l = n("tl5a"),
            c = n("KJ1J"),
            u = n("tTIR"),
            d = n("VvpR"),
            p = n("PYah"),
            f = n("X6Vn"),
            m = n("mdWu"),
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
                    access: C,
                    server: M,
                    sessionId: P,
                    sourceMcpAppId: T,
                    toolResult: k
                } = e;
                if (!E({
                        hostId: a,
                        mcpAppScope: c,
                        access: C,
                        server: M
                    })) return null;
                let R = {
                        hostId: a,
                        threadId: n
                    },
                    N = (0, S.g)({
                        toolResult: k
                    }),
                    j = h.c.safeParse(N?._meta ?? N).data,
                    O = (e, a, r) => {
                        let {
                            accountId: i,
                            uiUserId: o
                        } = C;
                        null == i || null == o || t.get(x.j) || t.get(b.q, P)?.sourceMcpAppId !== T || (0, w.a)({
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
                return (0, g.a)({
                    scope: t,
                    hostId: a,
                    navigate: A,
                    toolResult: k,
                    onSuggestionInteraction: O,
                    connect: async (e, r) => {
                        let c = e.plugin_id;
                        try {
                            let g = t.get(l.Zb, R)?.latestTurnId,
                                h = !1,
                                b = !1;
                            if (!o({
                                    displayName: e.display_name,
                                    remoteMarketplaceName: i.Xc,
                                    remotePluginId: c
                                }, {
                                    conversation: {
                                        type: "app-server",
                                        conversationId: n
                                    },
                                    hostId: a,
                                    marketplaceAnalytics: r,
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
                            if (!(0, i.Sh)(a)) {
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
                                remoteMarketplaceName: i.Xc
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
                                    return null != a && (a.latestTurnId !== g || a.summary.threadRuntimeStatus?.type !== "active" && !t(m.i, n) && !t(f.c))
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
                        let i = e => !e(x.j) && e(b.q, P)?.sourceMcpAppId === T,
                            o = h.d.safeParse(t.get(b.v, P) ?? {});
                        if (!i(t.get) || !o.success) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let c = new Set(o.data.connectedPluginIds),
                            p = new Set(o.data.declinedPluginIds),
                            f = r()(e, "plugin_id").filter(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return !c.has(t) && !p.has(t)
                            });
                        if (0 === f.length) return {
                            status: "unavailable",
                            declinedPluginIds: []
                        };
                        let g = t.get(l.Zb, R)?.latestTurnId,
                            v = f.map(e => {
                                let {
                                    plugin_id: t
                                } = e;
                                return t
                            });
                        for (let {
                                plugin_id: e
                            }
                            of f) O(e, j?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
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
                                    return !i(t) || null != a && (a.latestTurnId !== g || a.summary.threadRuntimeStatus?.type !== "active" && !t(m.i, n))
                                }), await (0, s.b)(t, a).getLatestTurnId(n) === g && i(t.get) && t.get(l.Gb, n)?.role !== "follower" && (0, u.b)(n)) try {
                                await (0, d.c)(t, a, n, {
                                    turnTrigger: "plugin_suggestion_declined",
                                    additionalContext: {
                                        plugin_suggestion_declined: {
                                            kind: "application",
                                            value: `The user chose not to install these plugins for the current request: ${JSON.stringify(f.map(e=>{let{display_name:t}=e;return t}))}. Continue the original request using available capabilities, without the declined plugins. If the request requires a declined app, explain that limitation or offer an available alternative. Do not suggest these plugins again.`
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
                } = e, r = "connectorId" in n.serverIdentity ? n.serverIdentity.connectorId : null;
                return "internal://plugin-management-suggestions" === t.originResourceUri && (0, c.e)(a) && r === o.a && t.codexAppsToolScope?.connectorId === r
            },
            c: E
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
        var a = n("iTtm"),
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
    NRdP: (function(e, t, n) {
        let a, r, i;
        n.d(t, {
            a: () => nc
        });
        var o = n("ABep"),
            s = n("QosV"),
            l = n("z8ZL"),
            c = n("kSHG"),
            u = n("bTvG"),
            d = n("iRMi"),
            p = n("t0Nb"),
            f = n("kUij"),
            m = n("fD5v"),
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
            N = C.object({
                type: C.enum(["count", "hist"]),
                label: C.enum(["payment_elements_stage", "ads_billing_client_phase", "ads_billing_client_phase_duration_ms"]),
                count: C.literal(1).optional(),
                value: C.number().nonnegative().optional(),
                tags: C.array(C.object({
                    key: C.string(),
                    value: C.string()
                })).max(8)
            }),
            j = C.object({
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
            q = C.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
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
            U = C.array(C.object({
                key: C.string(),
                value: C.unknown().optional()
            }).nullable().catch(null)),
            D = C.discriminatedUnion("type", [C.object({
                type: C.literal("event"),
                label: q,
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
                label: q,
                count: C.literal(1).optional(),
                tags: U
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
            J = n("DiD0"),
            X = n("SK3E"),
            K = n("gbrq"),
            Y = (n("Sbyb"), n("Btes")),
            Z = n("TSib"),
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
            ec = n("B09n"),
            eu = n("PeqE"),
            ed = n("ywSA"),
            ep = n("kRV1"),
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
                } = f.f.parse(e);
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
                    method: f.b,
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
        var eb = n("WFY2"),
            ev = n("ReGc"),
            ey = n("rP0s"),
            ew = n("Cslg"),
            eI = n("ALWK"),
            e_ = n("F8wW"),
            ex = n("RFeS"),
            eS = n("lu7q"),
            eE = n("we56");
        let eA = C.object({
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
                        let t = (0, eM.a)(e, await (0, W.b)(this.params.scope, this.params.hostId).getFollowUpContext(r), !1);
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
                            threadId: r
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
                        }), this.subscriptions.get(i) === e && e.hostSubscriptionId === n) throw this.subscriptions.delete(i), await Promise.all([this.stop(n).catch(() => {}), t ? this.notificationSink?.(ek({
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
            eN = n("whdX");
        let ej = new Map;
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw new eL;
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
                } = this.params, a = `${t}\0${n}`, r = (ej.get(a) ?? Promise.resolve()).then(e), i = r.then(() => void 0, () => void 0);
                return ej.set(a, i), i.then(() => {
                    ej.get(a) === i && ej.delete(a)
                }), r
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
                let n = t ?? (0, eN.c)({
                    server: this.params.server,
                    uri: e
                });
                if (null == n) throw new eq(e);
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
        class eq extends Error {
            uri;
            code = -32602;
            name = "McpResourceNotSubscribableError";
            constructor(e) {
                super("MCP resource is not subscribable"), this.uri = e
            }
        }
        class eL extends Error {
            code = -32601;
            name = "McpResourceSubscriptionsUnavailableError";
            constructor() {
                super("MCP resource subscriptions are unavailable")
            }
        }
        var eU = n("zxca"),
            eD = n("XROL"),
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

        function eJ(e) {
            try {
                return e()
            } catch (e) {
                if (e instanceof Error) throw (0, eB.a)(e.message, c.q.InternalError);
                throw e
            }
        }

        function eX(e, t) {
            let n = eV.safeParse(e);
            return n.success ? (0, eB.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eB.a)(e.message, -32e3, e) : (0, eB.a)(t, -32e3, e)
        }
        var eK = n("JXtc"),
            eY = n("a4MG");
        async function eZ(e) {
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
            let l = (null == i ? await (0, W.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eY.p, {
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
            if (null == l) throw (0, eB.a)(`MCP server not found: ${r}`, -32e3);
            return l
        }

        function eQ(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var e0 = n("cDR4"),
            e1 = n("ILnd"),
            e2 = n("fddy"),
            e3 = n("ntKy"),
            e5 = n("GaA7"),
            e8 = n("OWtl"),
            e6 = n("Sd8U"),
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
        let ts = (0, y.i)(e7.a, (e, t) => {
            let {
                get: n,
                scope: a
            } = t;
            return (n(to.b) ?? a).get(ti.f, e)
        }, (e, t) => {
            let {
                get: n,
                scope: a,
                set: r
            } = t;
            return (n(to.b) ?? a).watch(t => {
                let {
                    get: n
                } = t;
                r(n(ti.f, e))
            })
        });

        function tl(e) {
            let t, n, a, r, i = (0, s.c)(24),
                {
                    panelTabId: o,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, y.y)(e7.a),
                p = (0, y.z)(to.b) ?? d,
                f = (0, e4.h)("1146407612"),
                m = null != (0, y.x)(ts, o);
            i[0] !== p ? (t = (0, tr.getThreadBrowserConversationId)(p), i[0] = p, i[1] = t) : t = i[1];
            let g = t;
            i[2] !== o || i[3] !== p ? (n = () => {
                let e = p.get(ti.f, o);
                null != o && null != e && (0, ti.activateThreadPanelTab)(p, e, o)
            }, i[2] = o, i[3] = p, i[4] = n) : n = i[4];
            let h = (0, x.useEffectEvent)(n);
            return i[5] !== g || i[6] !== f || i[7] !== m || i[8] !== o || i[9] !== h || i[10] !== l || i[11] !== c || i[12] !== p || i[13] !== u ? (a = () => {
                if (!f || !m || null == g || e5.appServices?.mcpAppSandbox == null) return;
                let e = (0, _.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = e5.appServices.mcpAppSandbox.registerBrowserTarget({
                    conversationId: g,
                    initId: e,
                    sandboxId: c,
                    title: u
                }, h, (e, t) => (async function(e, t, n) {
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
                t.catch(tu);
                let n = p.watch(e => {
                    let {
                        get: n
                    } = e, a = n(ti.f, o), r = !n(e7.j) && null != a && ("bottom" === a ? n(K.d) : n(K.i) && n(K.j)) && n((0, ti.getThreadPanelTabController)(a).visibleTabs$).some(e => {
                        let {
                            tab: t
                        } = e;
                        return t.tabId === o
                    });
                    t.setPresented(r).catch(tc)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, i[5] = g, i[6] = f, i[7] = m, i[8] = o, i[9] = h, i[10] = l, i[11] = c, i[12] = p, i[13] = u, i[14] = a) : a = i[14], i[15] !== g || i[16] !== f || i[17] !== m || i[18] !== o || i[19] !== l || i[20] !== c || i[21] !== p || i[22] !== u ? (r = [f, o, g, m, l, c, u, p], i[15] = g, i[16] = f, i[17] = m, i[18] = o, i[19] = l, i[20] = c, i[21] = p, i[22] = u, i[23] = r) : r = i[23], (0, x.useEffect)(a, r), null
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
            tf = C.object({
                method: C.literal("ui/notifications/openai/find"),
                params: C.object({
                    command: C.enum(["open", "next", "previous"])
                })
            });
        i = (0, ef._)(Symbol.dispose);
        class tm {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: r,
                    signal: i,
                    notify: o
                } = t, s = tp.safeParse(e);
                if (!s.success || i.aborted || e5.appServices?.mcpAppSandbox == null || null == o || null == r) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = e5.appServices.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: r
                }, async e => n.ownerDocument.activeElement === n && (await o({
                    method: tf.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [i]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var tg = n("O23H"),
            th = n("nlNF");

        function tb(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: r,
                    sandboxId: i
                } = e,
                o = (0, y.y)(e8.a),
                {
                    pathname: l,
                    search: c
                } = (0, A.Y)(),
                u = (0, A._)();
            return a[0] !== u || a[1] !== l || a[2] !== r || a[3] !== i || a[4] !== o || a[5] !== c ? (t = () => {
                let e;
                if (e5.appServices?.mcpAppSandbox == null || ![w.Qc, w.Rc, w.ad, "/plugins/:pluginId/app/:toolName"].some(e => (0, A.J)(e, l))) return;
                let t = (0, w.Dg)(r.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = o.get(th.c);
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
                            let f = r.previousEntryId ?? r.entryIds[r.previousIndex ?? -1],
                                m = o.get(th.k),
                                g = Math.sign(r.currentIndex - (null == f ? r.currentIndex : r.entryIds.indexOf(f)));
                            if (null != m && 0 !== g)
                                for (let e = m.index + g; e >= 0 && e < m.entries.length; e += g) {
                                    let n = m.entries[e];
                                    if (n.pathname !== l || n.search !== c || n.state?.mcpHistory?.sandboxId !== i || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === p) return u(e - m.index)
                                }(a?.sandboxId !== i || a.initId !== t) && null != f && f !== p && (await u(e, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: i,
                                            initId: t,
                                            entryId: f
                                        }
                                    }
                                }), e = d(), n || null == e) || await u(e, {
                                    replace: r.didReplaceEntry || null == f || f === p,
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
                    f = o.watch(a => {
                        let {
                            get: r
                        } = a;
                        r(th.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            f = o.get(th.k);
                        !s && c?.sandboxId === i && (c.initId === t || f?.entries.some(e => e.state?.mcpHistory?.sandboxId === i && e.state.mcpHistory.initId === t)) && (e = c.entryId, p.then(async a => {
                            if (!n && d()?.key === l?.key) {
                                let r = c.initId !== t ? "missing" : await a?.go(c.entryId);
                                "ok" !== r && e === c.entryId && (e = void 0), "missing" !== r || n || d()?.key !== l?.key || null == f || 0 === f.popDelta || await u(Math.sign(f.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, f(), p[Symbol.dispose]()
                }
            }, n = [l, c, r, i, o, u], a[0] = u, a[1] = l, a[2] = r, a[3] = i, a[4] = o, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, x.useEffect)(t, n), null
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
                    [g.a]: i
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
        let tE = (0, y.j)(e8.a, e => {
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
        var tA = n("VwGH"),
            tC = n("OM8g"),
            tM = n("on57"),
            tP = n("WSFD"),
            tT = n("fm8Z"),
            tk = n("IhIa");
        let tR = C.union([h.b, C.object({
                target: C.enum(["active", "new"]).optional(),
                send: C.literal(!1)
            }).strict()]),
            tN = h.c.extend({
                _meta: h.c.shape._meta.unwrap().extend({
                    "openai/message": tR.optional()
                }).optional()
            });

        function tj(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tk.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw Object.assign(Error("Unsupported MCP app content"), {
                    code: -32602
                })
        }

        function tO(e, t) {
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
        let tL = (0, y.j)(e6.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, r = a.get(Z.x).find(t => t.id === e && "context" === t.kind);
                return r?.modelContextUpdateId == null ? null : {
                    updateId: r.modelContextUpdateId,
                    content: r.content?.length ? r.content : void 0,
                    structuredContent: r.structuredContent
                }
            }, {
                isEqual: v()
            })
        });
        var tU = n("slpy"),
            tD = n("ygO2"),
            tF = n("HOLv"),
            tG = n("SkN7");

        function tW(e) {
            let t, n, a, r, i, l, c, u = (0, s.c)(23),
                {
                    backLabel: d,
                    canGoBack: p,
                    canGoForward: f,
                    color: m,
                    forwardLabel: g,
                    onBack: h,
                    onForward: b,
                    radius: v
                } = e,
                y = void 0 === m ? "ghost" : m,
                w = p ? y : "ghost",
                I = !p;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(tF.a, {
                "aria-hidden": !1,
                asset: tG.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== h || u[3] !== v || u[4] !== w || u[5] !== I ? (n = (0, o.jsx)(tD.a, {
                "aria-label": d,
                color: w,
                disabled: I,
                onClick: h,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = h, u[3] = v, u[4] = w, u[5] = I, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, o.jsx)(tU.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let _ = f ? y : "ghost",
                x = !f;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, o.jsx)(tF.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tG.a
            }), u[10] = r) : r = u[10], u[11] !== g || u[12] !== b || u[13] !== v || u[14] !== _ || u[15] !== x ? (i = (0, o.jsx)(tD.a, {
                "aria-label": g,
                color: _,
                disabled: x,
                onClick: b,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = g, u[12] = b, u[13] = v, u[14] = _, u[15] = x, u[16] = i) : i = u[16], u[17] !== g || u[18] !== i ? (l = (0, o.jsx)(tU.a, {
                content: g,
                side: "bottom",
                children: i
            }), u[17] = g, u[18] = i, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, o.jsxs)(o.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tH(e) {
            let t, n, a, r, i, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: f,
                    onBack: m,
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
            return u[4] !== d ? (a = (0, tM.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== m ? (r = e => {
                e.stopPropagation(), m()
            }, u[6] = m, u[7] = r) : r = u[7], u[8] !== g ? (i = e => {
                e.stopPropagation(), g()
            }, u[8] = g, u[9] = i) : i = u[9], u[10] !== b || u[11] !== p || u[12] !== f || u[13] !== v || u[14] !== r || u[15] !== i ? (l = (0, o.jsx)(tW, {
                backLabel: b,
                canGoBack: p,
                canGoForward: f,
                forwardLabel: v,
                onBack: r,
                onForward: i
            }), u[10] = b, u[11] = p, u[12] = f, u[13] = v, u[14] = r, u[15] = i, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, o.jsx)("div", {
                className: a,
                "data-mcp-app-navigation-controls": "true",
                onPointerDown: tB,
                children: l
            }), u[17] = a, u[18] = l, u[19] = c) : c = u[19], c
        }

        function tB(e) {
            return e.stopPropagation()
        }
        var tz = n("taUf"),
            tV = n("BRrJ"),
            t$ = n("C1SW"),
            tJ = n("Dx08"),
            tX = n("JNpY"),
            tK = n("IWEP");
        let tY = C.preprocess(function(e, t) {
            let n = new WeakSet,
                a = C.record(C.string(), C.unknown()),
                r = (e, i) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: i,
                        message: "Cyclic tool arguments"
                    }), tK.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...i, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...i, ...e.path]
                            });
                            return tK.e
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
        }, C.record(C.string(), C.json()));

        function tZ(e) {
            return null != e && "object" == typeof e && !Array.isArray(e)
        }
        var tQ = n("n2Dd"),
            t0 = n("PkQL");
        let t1 = C.preprocess(t3, C.record(C.string(), C.json())),
            t2 = C.preprocess(t3, C.looseObject({
                ...l.e.shape.params.shape,
                content: C.array(t0.f).optional()
            }));

        function t3(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch {
                return
            }
        }
        let t5 = ["resources/subscribe", "resources/unsubscribe"],
            t8 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t6 = C.json(),
            t7 = C.object({
                mode: C.enum(["inline", "fullscreen"])
            }),
            t4 = C.object({
                linkToken: C.string().min(1),
                oauthStateId: C.string().min(1)
            }),
            t9 = C.object({
                canGoBack: C.boolean(),
                canGoForward: C.boolean()
            }).loose(),
            ne = new Set(["connector_68d579f7b0948191a7da3124a3b560f7", "connector_69050bf6de9c8191b3968f2cc08d33d6"]),
            nt = C.object({
                blob: C.instanceof(Blob),
                name: C.string().trim().min(1)
            }).strip(),
            nn = C.looseObject({
                [c.S]: c.V.optional(),
                progressToken: c.Q.optional()
            }),
            na = C.object({
                name: C.string().min(1),
                arguments: tY.optional(),
                _meta: nn.optional()
            }).loose(),
            nr = C.object({
                uri: C.string().min(1)
            }).loose(),
            ni = C.object({
                arguments: C.record(C.string(), t6).optional(),
                name: C.string().regex(/\S/),
                subscriptionId: C.uuid()
            }),
            no = C.object({
                subscriptionId: C.uuid()
            }),
            ns = C.number().positive(),
            nl = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nc(e) {
            let t, n, a, r = (0, s.c)(9),
                {
                    isAccessRevoked: i,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== i && i,
                d = void 0 === l || l,
                p = (0, y.y)(e7.a),
                f = (0, y.x)(eI.q, c);
            return r[0] !== p || r[1] !== c ? (t = () => {
                let e, t, n, a, r, i, o, s, l, u, d;
                return n = !1, a = !1, r = null, i = () => {
                    clearTimeout(t), t = void 0
                }, o = e => {
                    if (a = e, i(), a) {
                        r = null, (0, eI.C)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == r && (r = performance.now()), t = setTimeout(() => {
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
                    }, Math.max(0, 3e5 - (performance.now() - r)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && o(n.isIntersecting)
                }), u = (t, u) => {
                    (e !== t || n !== u) && (n = u, s(l.takeRecords()), l.disconnect(), i(), void 0 === (e = t) ? (a = !1, r = null, (0, eI.C)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === t && o(a && !(0, th.h)(p))
                    }) : l.observe(e))
                }, d = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(th.c);
                    let n = t(eI.q, c),
                        a = null == n ? null : t(eI.i, n.sourceMcpAppId),
                        r = a?.hostedInThreadScrollLayout === !0 && !a.content.fullSurface && n?.displayMode === "inline" && null == t($.j.tabById$, (0, e9.b)(c)),
                        i = (0, th.h)(p);
                    if (!r || !i) return void u(r ? null : void 0, i);
                    let o = a.inlineFrameAnchor,
                        s = () => u(o.getSnapshot(), i),
                        l = o.subscribe(s);
                    return s(), l
                }), () => {
                    e = void 0, d(), l.disconnect(), i()
                }
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, x.useEffect)(t, n), r[4] !== d || r[5] !== f || r[6] !== u || r[7] !== c ? (a = null == f ? null : (0, o.jsx)(nd, {
                sessionId: c,
                frameState: f,
                sourceMcpAppId: f.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), r[4] = d, r[5] = f, r[6] = u, r[7] = c, r[8] = a) : a = r[8], a
        }

        function nu(e) {
            let t, n = (0, s.c)(2);
            return n[0] !== e ? (t = (0, o.jsx)(nc, {
                ...e,
                allowGlobalHost: !1
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function nd(e) {
            let t, n, a, r, i, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: f,
                    frameState: m,
                    isAccessRevoked: g,
                    allowGlobalHost: h
                } = e,
                b = (0, y.y)(e7.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eH.b)(), d[0] = t) : t = d[0];
            let v = (0, e4.h)(t),
                w = (0, y.x)(tn.b, f),
                I = g || w,
                _ = (0, y.x)(eI.i, f),
                S = _?.content ?? null,
                E = S?.mcpAppHostAdapter?.retain;
            d[1] !== b || d[2] !== p ? (n = () => (0, tV.b)(b, p), a = [b, p], d[1] = b, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, x.useLayoutEffect)(n, a), d[5] !== E || d[6] !== b || d[7] !== f ? (r = () => E?.(b, f), i = [E, b, f], d[5] = E, d[6] = b, d[7] = f, d[8] = r, d[9] = i) : (r = d[8], i = d[9]), (0, x.useLayoutEffect)(r, i);
            let A = (0, y.x)(B.c, S?.access ?? null);
            if (d[10] !== A || d[11] !== _ || d[12] !== b || d[13] !== I || d[14] !== f ? (l = () => {
                    null != _ && (I || "changed" === A) && (eb.a.info("mcp_app_sandbox.registration_revoked", {
                        safe: {
                            shouldRemoveFrame: I,
                            accessStatus: A
                        },
                        sensitive: {
                            mcpAppId: _.sessionId,
                            sourceMcpAppId: f
                        }
                    }), (0, eI.y)(b, f))
                }, c = [f, _, b, I, A], d[10] = A, d[11] = _, d[12] = b, d[13] = I, d[14] = f, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, x.useLayoutEffect)(l, c), !v || I || m.isSuspended || nm(m.sandboxError) || null == _ || null == S || "current" !== A) return null;
            let C = (0, eC.c)(S);
            if (C && (null == S.toolResult || null != S.toolCallStatus)) return null;
            let M = C ? np : nf;
            return d[17] !== M || d[18] !== h || d[19] !== S || d[20] !== m || d[21] !== _.hostedInThreadScrollLayout || d[22] !== _.inlineFrameAnchor || d[23] !== p || d[24] !== f ? (u = (0, o.jsx)(M, {
                ...S,
                resource: S.resource,
                hostedInThreadScrollLayout: _.hostedInThreadScrollLayout,
                inlineFrameAnchor: _.inlineFrameAnchor,
                allowGlobalHost: h,
                sessionId: p,
                sourceMcpAppId: f,
                frameState: m
            }, m.sandboxGeneration), d[17] = M, d[18] = h, d[19] = S, d[20] = m, d[21] = _.hostedInThreadScrollLayout, d[22] = _.inlineFrameAnchor, d[23] = p, d[24] = f, d[25] = u) : u = d[25], u
        }

        function np(e) {
            let t, n, a = (0, s.c)(5),
                r = (0, y.y)(e7.a);
            return a[0] !== r ? (t = (e, t) => (0, e3.installPlugin)(r, e, t), a[0] = r, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, o.jsx)(nf, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function nf(e) {
            let {
                recipient: t,
                resource: a,
                analyticsContext: r,
                conversationId: i,
                firstPartyPluginBridge: s,
                firstPartyPluginLoggerPluginId: b,
                pluginId: q,
                fullSurface: U,
                modalOpen: F = !1,
                hostScroll: B = !1,
                hostDisplayModes: ef,
                hostId: em,
                hostedInThreadScrollLayout: eh,
                access: eM,
                inheritHostBackground: eP = !1,
                installPlugin: ek,
                inlineFrameAnchor: ej,
                allowGlobalHost: eq,
                sessionId: eL,
                sourceMcpAppId: eH,
                mcpAppScope: eV,
                sourceName: eY,
                mcpServerStatuses: e3,
                mcpAppHostAdapter: e4,
                getNewThreadDestination: tn,
                widgetStatePersistence: tr,
                plaidAccountId: ti,
                deepLink: ts,
                rightPanelLayoutTick: tc,
                resolveResourceWatchPath: tu,
                server: tp,
                appIcon: tf,
                sidePanelTitle: th,
                title: tv,
                globalSurface: tk = !1,
                toolArguments: tR,
                toolResult: tU,
                toolResultNotification: tD,
                toolCallStatus: tF,
                toolCallCancellationReason: tG,
                viewParamsOverride: tW,
                frameState: tB
            } = e, tV = (0, y.y)(e7.a), t$ = (0, y.y)(e8.a), tK = (0, x.useSyncExternalStore)(ej.subscribe, ej.getSnapshot, () => null), tY = (0, x.useEffectEvent)(() => tV), t0 = (0, x.useEffectEvent)(() => eM.assertActive()), {
                csp: t3,
                fitWidth: t6,
                html: nn,
                sandboxOrigin: nc,
                serverOrigin: nd
            } = a, np = a.prefersBorder && !e4?.hideFrameBorder, nf = "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : null, ng = null != t, nh = (0, x.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nb = !ng || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", nv = (0, y.x)(H.d, em), ny = (0, y.x)(H.hc, {
                hostId: em,
                threadId: i
            }), nw = null != ny && "notLoaded" !== ny.type, nI = !(0, M.e)(tp) && t3?.connectDomains.some(e => (0, eK.d)(new URL(e).hostname)) === !0, n_ = (0, ta.a)(eM, r), nx = null != nd ? new URL(nd) : null, nS = e4?.sandboxFeatures?.join(";"), nE = e4?.sandboxFeatures?.includes("local-network-access") === !0 || (0, eK.f)(t3) || nI && nx?.protocol === "https:" && (0, eK.d)(nx.hostname), nA = (0, E.a)(), nC = (0, A._)(), nM = t?.value.kind === "chatgpt" && null != t.value.conversationId && i === `chatgpt:${t.value.conversationId}`, nP = i.startsWith("chatgpt:") ? "chatgpt" : "codex", nT = (0, y.z)(t?.get(tL, eL) ?? null), nk = (0, x.useEffectEvent)(() => t?.get(tL, eL).get() ?? null), nR = (0, y.z)($.j.activeTab$), nN = (0, y.z)(K.g), nj = (0, y.z)(to.a), nO = (0, y.z)(eE.a), nq = nO["--color-background-primary"], {
                isWidgetReady: nL
            } = tB, nU = (0, eI.f)(tB), nD = !U && "fullscreen" === nU, nF = (0, eI.e)(tB), nG = U && eq, nW = (0, x.useRef)(!1), nH = (0, x.useRef)(null), nB = (0, x.useRef)(null), nz = (0, x.useRef)(null), nV = (0, x.useRef)(null), n$ = (0, y.x)(eI.h, eL), nJ = (0, x.useRef)(null), nX = (0, x.useRef)(null), nK = e => {
                if (!(0, M.e)(tp)) return null;
                let t = tV.get(eI.i, eH);
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
                tV.set(eI.j, e => {
                    let t = e.get(eH);
                    if (null == t) return e;
                    let {
                        content: n
                    } = t;
                    if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                    let r = new Map(e);
                    return r.set(eH, {
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
                let r = tV.get(eI.i, eH)?.content.mcpAppScope.codexAppsToolScope;
                return void 0 === r ? null : r
            }, [nY, nZ] = (0, x.useState)(null), [nQ, n0] = (0, x.useState)(null), [n1, n2] = (0, x.useState)(!1), [n3, n5] = (0, x.useState)(null), [n8, n6] = (0, x.useState)(null), n7 = n8?.api ?? null, n4 = n8?.widgetId ?? null, n9 = (0, tt.a)(e => tu?.(e) ?? null), ae = (0, M.e)(tp) && (0, w.Eh)(nv, "mcpEventStream"), at = (0, x.useMemo)(() => new eO({
                scope: t$,
                hostId: em,
                mcpAppId: eL,
                originResourceUri: eV.originResourceUri,
                resolveResourceWatchPath: n9,
                server: tp
            }), [t$, em, eL, eV.originResourceUri, n9, tp]), an = (0, x.useMemo)(() => new eT({
                scope: t$,
                hostId: em,
                server: tp
            }), [t$, em, tp]), [aa, ar] = (0, x.useState)(nl), ai = null != nf && ne.has(nf), ao = ai && null != n7 && (aa.canGoBack || aa.canGoForward), {
                cancel: as,
                confirmation: al,
                confirm: ac,
                request: au
            } = (0, e_.a)(eS.a), ad = e4?.viewerHeader === !0, ap = e4?.forwardedRequestMethods, af = ap?.join(";") || void 0, am = JSON.stringify(e4?.experimentalCapabilities), ag = e4?.openFile, ah = (0, y.z)(e7.j), ab = (0, y.x)(G.a, {
                name: "codex.browser"
            }), av = !ah && ab.isCapable, ay = av || ng && nb, aw = !ah && (void 0 === ag ? (0, w.pi)((0, ey.a)(t$, em)) : null != ag), aI = null != e4, a_ = e4?.expectedReadySignal, ax = e4?.pluginSuggestions != null, aS = !0 === eV.isVerifiedFirstParty, aE = e4?.displayMode === "modal", aA = (0, x.useEffectEvent)(() => e4), aC = e4?.onRequestClose != null || eh, aM = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, M.e)(n) && "connector_openai_olympic" === a && "internal://olympic" === r.originResourceUri && !0 === r.isVerifiedFirstParty ? t?.olympic : void 0
            }({
                adapter: e4,
                server: tp,
                connectorId: nf,
                widgetScope: eV
            }), aP = null != aM, aT = aM?.requestTargetedReply != null || e4?.setTargetedReply != null || e4?.requestTargetedReply != null, ak = aP || e4?.showToast != null, aR = (0, x.useEffectEvent)(() => aM), aN = (0, x.useEffectEvent)(e => aM?.viewMode ?? e4?.displayMode ?? e), aj = function(e) {
                let {
                    adapter: t,
                    server: n,
                    connectorId: a,
                    widgetScope: r
                } = e;
                return (0, M.e)(n) && a === eu.a && ("internal://ledger" === r.originResourceUri || r.originResourceUri?.startsWith("internal://ledger") && r.originTool.endsWith("manage_linked_accounts")) && !0 === r.isVerifiedFirstParty ? t?.finance : void 0
            }({
                adapter: e4,
                server: tp,
                connectorId: nf,
                widgetScope: eV
            }), aO = e4?.requestCheckout != null, aq = e4?.openConversationOverlay != null, aL = e4?.openPromptInput != null, aU = e4?.autofill != null, aD = e4?.openInApp != null, aF = aD && e4?.openInApp?.hideButton !== !0 && e4?.openInApp?.baseUrl != null && null !== tB.openInAppUrl, aG = e4?.presentation != null, aW = e4?.presentation?.requestFocusedObject != null, aH = e4?.presentation?.requestCloseFocusedObject != null, aB = e4?.presentation?.isSidebarOpen === !0, az = e4?.downloadBlob != null, aV = e4?.triggerHaptic != null, a$ = e4?.files != null, aJ = e4?.share != null, aX = e4?.requestConnectSheet != null, aK = e4?.requestReconnectConnector != null, aY = e4?.requestLinkToConnector != null, aZ = e4?.isTombstone === !0, aQ = (0, x.useEffectEvent)(() => aj), a0 = function(e, t) {
                let {
                    server: n,
                    connectorId: a,
                    widgetScope: r,
                    conversationId: i
                } = t, {
                    originResourceUri: o
                } = r;
                if ((0, M.e)(n) && "connector_openai_ads_manager" === a && (!0 === r.isVerifiedFirstParty || !0 === r.resourceIdentityVerified) && ("internal://ads-manager" === o || "internal://ads-manager-account-setup" === o || "internal://ads-manager-delivery" === o)) return {
                    sendInstrument: t => (function(e, t, n) {
                        let {
                            conversationId: a,
                            originResourceUri: r
                        } = n;
                        ! function(e, t, n) {
                            let a = N.safeParse(t);
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
                                    "count" === t.type && n.success && e.get(T.a).count("payments", "payment_elements_stage", n.data)
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
                                    }, l = e.get(T.a);
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
                        let i = D.safeParse(t);
                        if (!i.success) return;
                        let o = i.data,
                            s = "browser";
                        if ("event" === o.type) {
                            let {
                                eventType: t,
                                requiredField: n
                            } = L[o.label], r = o.payload;
                            if (!r[n]) return;
                            (0, k.a)(e, P, {
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
                        let l = Object.entries(R).flatMap(e => {
                                let [t, n] = e, a = o.tags.find(e => e?.key === t), r = C.enum(n).safeParse(a?.value);
                                return r.success ? [{
                                    key: t,
                                    value: r.data
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
                            name: r,
                            client_type: s
                        };
                        e.get(T.a).count("ecosystem", o.label, d)
                    })(e, t, {
                        conversationId: i,
                        originResourceUri: o
                    })
                }
            }(tV, {
                server: tp,
                connectorId: nf,
                widgetScope: eV,
                conversationId: i
            }), a1 = (0, x.useEffectEvent)(() => a0), a2 = null != ti && (0, M.e)(tp) && aI && nf === eu.a, a3 = (0, x.useMemo)(() => null != tR && "object" == typeof tR ? tR : null, [tR]), a5 = (0, x.useMemo)(() => null == tU ? null : (0, eF.f)({
                isCodexAppsServer: (0, M.e)(tp),
                toolResult: tU
            }), [tp, tU]), a8 = (0, x.useMemo)(() => null == a5 ? null : (0, e0.b)(a5), [a5]), a6 = void 0 === tW ? a8 : tW, a7 = (0, x.useEffectEvent)(() => a6), a4 = (0, x.useMemo)(() => null == a5 ? null : (0, eF.g)({
                toolResult: a5
            }), [a5]), a9 = (0, x.useMemo)(() => tD ?? (0, e0.a)(a5, {
                preserveStructuredContentNull: e4?.preserveStructuredContentNull
            }), [e4?.preserveStructuredContentNull, tD, a5]), re = tF ?? (a9?.isError === !0 ? "error" : void 0), rt = (0, x.useMemo)(() => null == re ? a4 : {
                ...a4,
                status: re
            }, [re, a4]), rn = (0, x.useEffectEvent)(() => ({
                sourceMcpAppId: eH,
                toolInput: a3,
                toolOutput: a8,
                toolResponseMetadata: rt,
                toolStatus: re,
                toolResult: a5,
                toolResultNotification: a9,
                toolCallCancellationReason: tG
            })), ra = (0, x.useEffectEvent)(e => null == ek || null != re ? null : (0, eC.a)({
                scope: tV,
                conversationId: i,
                hostId: em,
                installPlugin: ek,
                mcpAppScope: eV,
                navigate: nC,
                access: eM,
                server: tp,
                sessionId: eL,
                sourceMcpAppId: eH,
                toolResult: e
            })), rr = null == nc ? void 0 : (0, tX.c)(nc, nA.locale), ri = eM.getSandboxPartition?.(a) ?? _.b, ro = (0, x.useMemo)(() => {
                if (null == rr) return null;
                let e = (0, tX.a)(rr);
                return nE ? `local-network-${e}` : e
            }, [nE, rr]), rs = (0, x.useEffectEvent)(() => {
                if (null == rr) return null;
                let e = (0, _.i)(rr);
                return null == e ? null : {
                    csp: t3,
                    experimentalCapabilities: e4?.experimentalCapabilities,
                    html: nn,
                    locale: nA.locale,
                    sandboxOrigin: e,
                    sourceUrl: rr
                }
            }), rl = n3?.isConnected === !0 ? n3 : null, rc = tK?.isConnected === !0 ? tK : null, ru = null != rc || null != rl, rd = !nD && !U && tK?.dataset.mcpAppInlineSurface === "card", rp = "iframe", rf = "function" == typeof nY?.moveBefore, rm = F && rf, rg = rc ?? (!nD && nY?.isConnected ? nY.parentElement : null), rh = rg?.closest("[data-mcp-app-scroll-host]"), rb = !nD && (!U && B || null != rh), rv = eq && !rb && (rf || !eh), ry = rv ? null : rg?.closest("[data-mcp-app-portal-target='true']") ?? (!rf && nY?.isConnected ? nY.parentElement : null), rw = rf || rv ? nY : ry, rI = (0, x.useEffectEvent)(e => {
                let t = t_(e, U, nD ? "fullscreen" : "inline");
                return !U && "inline" === nU && t6 && rc?.parentElement != null && (t.maxWidth = rc.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), r_ = (0, x.useEffectEvent)(() => {
                (0, ep.c)(tY(), {
                    hostId: em,
                    pluginId: q,
                    server: tp
                }, eL)
            }), rx = (0, x.useEffectEvent)(() => ({
                safe: {
                    connectorId: nf,
                    mcpAppId: eL,
                    sandboxId: ro,
                    initId: (0, _.g)(nQ?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: em,
                    server: tp
                }
            })), rS = (0, x.useEffectEvent)(e => {
                (0, k.a)(tV, u.o, {
                    attributionId: nf ?? void 0,
                    conversationId: "chatgpt" === nP ? i.slice(8) : void 0,
                    host: "chatgpt" === nP ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rE = (0, x.useEffectEvent)((e, t) => {
                if (nm(tY().get(eI.q, eL)?.sandboxError)) return;
                let n = (0, ez.a)(t),
                    a = rx();
                (eb.a.warning("Failed to initialize app sandbox", {
                    safe: {
                        conversationSurface: nP,
                        retryCount: tB.sandboxGeneration,
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
                }), nV.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tB.sandboxGeneration) ? (0, eI.C)(tY(), eL, {
                    sandboxGeneration: 1
                }) : (0, eI.C)(tY(), eL, {
                    isWidgetReady: !1,
                    sandboxError: "configuration" === e && t instanceof Error ? t : Error("The MCP app sandbox failed to load.")
                })
            }), rA = (0, x.useEffectEvent)(e => {
                let t = ns.safeParse(e);
                t.success && tV.get(eI.q, eL)?.displayMode === "inline" && (0, eI.C)(tV, eL, {
                    intrinsicHeight: t.data
                })
            }), rC = (0, x.useEffectEvent)(e => {
                let t = ns.safeParse(e);
                t6 && t.success && (0, eI.C)(tV, eL, {
                    intrinsicWidth: t.data
                })
            }), rM = (0, x.useEffectEvent)(e => {
                if (!ai) return;
                let t = t9.safeParse(e);
                t.success && ar({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rP = (0, x.useEffectEvent)(() => eh ? void(0, eI.b)(tV, eL) : e4?.onRequestClose?.()), rT = (0, x.useEffectEvent)(async (e, n) => {
                if (e4?.openExternal != null && await e4.openExternal(e, n)) return;
                let a = eD.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eV.isVerifiedFirstParty) return void(0, eG.a)(tV, a.data.href);
                    if ("popup" !== a.data.openMode && e4?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? tV, a.data.href, n)) return;
                    let e = (0, w.tj)(a.data.href);
                    if (null != e) return void nC(e);
                    (0, el.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rk = (0, x.useEffectEvent)(async (e, t) => {
                if (!a2 || null == ti) throw Error("Plaid Link is unavailable for this app");
                let n = t4.parse(e),
                    {
                        openPersonalFinancePlaidLinkFromWidget: a
                    } = await (0, ed.a)();
                return a(tV, {
                    accountId: ti,
                    linkToken: n.linkToken,
                    oauthStateId: n.oauthStateId,
                    signal: t
                })
            }), rR = (0, x.useEffectEvent)((e, t, n) => (async function(e, t) {
                let {
                    mcpAppId: n,
                    requestModal: a,
                    payload: r,
                    signal: i,
                    accountId: o,
                    frameAccountId: s
                } = t;
                if (null == a) throw Error("Finance account linking is unavailable");
                if (!i.aborted && s === o && e.get(ew.f) === o && await a(r, i) && !i.aborted && e.get(ew.f) === o) {
                    let t = e.get(eI.q, n);
                    if (null == t) return;
                    (0, eI.C)(e, n, {
                        sandboxGeneration: t.sandboxGeneration + 1
                    })
                }
            })(tV, {
                mcpAppId: eL,
                requestModal: aj?.requestModal,
                payload: e,
                signal: t,
                accountId: ti,
                frameAccountId: n
            })), rN = (0, x.useEffectEvent)(e => (function(e) {
                let {
                    composerOverlayReservePx: t,
                    displayMode: n,
                    hasComposerOverlay: a,
                    hostAdapter: r,
                    showNavigationControls: i
                } = e;
                if (r?.displayMode === "modal") return !1 !== r.showModalCloseButton || i ? tw : ty;
                let o = "inline" === n && i ? tw : ty;
                return ("inline" !== n || a) && 0 !== t ? {
                    insets: {
                        ...o.insets,
                        bottom: t
                    }
                } : o
            })({
                composerOverlayReservePx: nj,
                displayMode: U ? "inline" : e,
                hasComposerOverlay: nG,
                hostAdapter: aA(),
                showNavigationControls: ao
            })), rj = (0, x.useEffectEvent)(() => {
                let e = tV.get(eI.q, eL) ?? tB;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? ef
                }
            }), rO = (0, x.useEffectEvent)(e => {
                let t = (0, eI.g)(tV, eL, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rj(),
                    safeAreaInsets: rN(t).insets
                }
            }), rq = (0, x.useEffectEvent)(e => {
                let t = t7.safeParse(e),
                    n = tV.get(eI.q, eL);
                if (t.success && (0, eI.a)(n, t.data.mode)) {
                    let n = !U && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nD && nY?.style.setProperty("display", "none"), aG && (0, eI.C)(tV, eL, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, eI.A)(tV, eL, a, "app_request"), null != n7 && null != n4) {
                        let e = {
                            displayMode: a,
                            isTombstone: aA()?.isTombstone === !0,
                            viewParams: a6,
                            widgetId: n4
                        };
                        nH.current = e, e$(n7.setWidgetView(e));
                        let t = null == nY ? null : tI({
                            ...rj(),
                            containerDimensions: t_(nY, U, a),
                            locale: nA.locale,
                            deepLink: ts,
                            safeAreaInsets: rN(a).insets,
                            styleVariables: nO,
                            theme: tx(),
                            userAgent: tS(aA()?.device),
                            toolInfo: aA()?.toolInfo
                        });
                        nB.current = t, null != t && e$(n7.notifyMcpAppsHostContext({
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
                        mcpAppId: eL,
                        sourceMcpAppId: n?.sourceMcpAppId
                    }
                }), {
                    mode: (0, eI.e)(n ?? tB)
                }
            }), rL = (0, x.useEffectEvent)(() => ts), rU = (0, x.useEffectEvent)(() => tV.get(eI.h, eL)), rD = (0, x.useEffectEvent)(() => {
                var e;
                e = tf ?? void 0, null != t && (0, Q.h)(t, eL, e)
            });
            (0, x.useEffect)(() => {
                rD()
            }, [eL, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl]);
            let rF = (0, x.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tV.get(eI.q, eL)?.sourceMcpAppId !== eH) return;
                    let a = (null != tr ? t1.nullable() : t1).safeParse(t),
                        r = a.success ? a.data : null;
                    if (tV.set(eI.v, eL, r), null != tr && a.success) return tr.save(a.data, n)
                }),
                rG = e => {
                    null != n7 && e$(n7.navigate({
                        delta: e
                    }))
                },
                rW = {
                    name: null != e4 ? eV.originResourceUri ?? eV.originTool : `${tp}.${eV.originTool}`,
                    attribution: "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : void 0
                },
                rH = (0, x.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, eo.getMcpAppSubmit)(t, () => {
                            eM.assertActive(), aA()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? rW : {
                        ...rW,
                        visuallyHidden: !0
                    }, e, r)
                }),
                rB = async function(e, t, n, a, r, i) {
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tq.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: i,
                        modelContextAttachments: o,
                        requestConfirmation: e => au({
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
                }, rz = (0, x.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eB.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let r = (a = aR(), n.aborted || a && eA.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: i,
                        isVisible: o,
                        prompt: l,
                        title: u
                    } = (0, eS.b)(e), d = rH(n, o);
                    if (null == d) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let p = t.get(Z.x).filter(e => "context" === e.kind),
                        f = crypto.randomUUID(),
                        m = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        g = performance.now();
                    try {
                        await rB({
                            source: "mcp_app",
                            sourceId: eL,
                            widgetSource: eV.widgetSource,
                            text: l,
                            structuredContent: i ?? (0, eW.b)(rU())
                        }, l, d, n, u, void 0, p)
                    } catch (e) {
                        throw m?.({
                            attemptId: f,
                            result: "FAILED",
                            durationMs: performance.now() - g
                        }, i), e
                    }
                    m?.({
                        attemptId: f,
                        result: "CHATGPT_SUBMITTED",
                        durationMs: performance.now() - g
                    }, i), (0, Q.b)(t, p)
                }), rV = e => {
                    e.throwIfAborted(), eM.assertActive(), e4?.assertActive?.()
                }, r$ = async (e, t, n, a) => {
                    rV(t);
                    let r = null != e4 ? await e4.handleRequest(e, t, eV, n) : await a();
                    return rV(t), r
                }, rJ = async (e, t, n) => {
                    let a = await r$({
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
                        } = e, f = await async function(e) {
                            let {
                                scope: t,
                                getTrustedToolScope: n,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: i,
                                threadId: o,
                                toolArguments: s,
                                toolName: l
                            } = e, c = await eZ({
                                scope: t,
                                hostId: a,
                                mcpServerStatuses: r,
                                server: i,
                                threadId: o
                            }), u = eQ(c), d = n(c);
                            return {
                                ...eJ(() => (0, eR.h)({
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
                            threadId: n.get(z.b, {
                                hostId: o,
                                conversationId: r
                            }) ?? void 0,
                            toolArguments: p.arguments,
                            toolName: p.name
                        });
                        d.throwIfAborted(), c.assertActive();
                        let m = function(e, t) {
                                if (!(0, M.e)(e) || !tZ(t)) return t;
                                let n = {
                                    ...t
                                };
                                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
                            }(u, p._meta),
                            g = null == f.codexAppsResourceUri ? m : {
                                ...tZ(m) ? m : {},
                                _codex_apps: {
                                    resource_uri: f.codexAppsResourceUri
                                }
                            };
                        try {
                            let e = (0, Y.a)({
                                scope: t,
                                chatGptConversation: r.startsWith("chatgpt:") ? {
                                    id: r.slice(8),
                                    messageId: a ?? null
                                } : void 0,
                                toolIdentity: f.codexAppsToolIdentity,
                                access: c,
                                signal: d,
                                toolArguments: p.arguments ?? {}
                            });
                            if (null != e) return await e;
                            if (r.startsWith("chatgpt:")) return (0, eF.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: await (0, e1.b)(t, o, u, f.name, p.arguments ?? {}, {
                                    hostToolCallMetadata: g,
                                    requestOptions: {
                                        widget: {
                                            conversationId: r,
                                            mcpAppId: s
                                        }
                                    }
                                })
                            });
                            let i = await (0, W.b)(n, o).callMcpTool({
                                threadId: r,
                                server: u,
                                tool: f.name,
                                arguments: p.arguments ?? {},
                                _meta: g
                            }, {
                                widget: {
                                    conversationId: r,
                                    mcpAppId: s
                                }
                            });
                            return (0, eF.f)({
                                isCodexAppsServer: (0, M.e)(u),
                                toolResult: i
                            })
                        } catch (e) {
                            throw eX(e, "MCP tool call failed")
                        }
                    })({
                        appScope: t$,
                        scope: tV,
                        chatGptMessageId: eV.chatGptMessageId,
                        conversationId: i,
                        getTrustedToolScope: nK,
                        hostId: em,
                        mcpAppId: eL,
                        mcpServerStatuses: e3,
                        access: eM,
                        server: tp,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, I.r)(a)?.isError === !0) {
                        let t = e0.c.safeParse(a).data;
                        eb.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: eL,
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
                }, rX = (0, x.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e6.b);
                    return rJ((0, eB.d)(na, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), rK = (0, x.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e6.b),
                        r = c.X.safeParse(e);
                    if (!r.success) throw (0, eB.b)("Invalid MCP proxy request", r.error.issues, r.error.issues.every(e => "params" === e.path[0]) ? c.q.InvalidParams : c.q.InvalidRequest);
                    let o = tV.get(z.b, {
                            hostId: em,
                            conversationId: i
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = r.data;
                    if (i.startsWith("chatgpt:") && t5.some(e => e === s)) throw (0, eB.a)("Resource subscriptions require a local Codex thread", c.q.MethodNotFound);
                    switch (s) {
                        case m.a: {
                            let {
                                path: e
                            } = (0, eB.d)(m.b, l, "Invalid MCP file open params");
                            if (!aw) throw (0, eB.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != ag) return (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...n_,
                                feature: "file_open",
                                action: "requested"
                            }), await ag(e, n), {};
                            if (!(0, w.zh)(e) || !(0, w.Ch)(e)) throw (0, eB.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...n_,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: tV,
                                path: e,
                                cwd: null,
                                hostConfig: (0, ey.a)(t$, em),
                                hostId: em,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ap?.includes("ping") ? r$(r.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tN.safeParse(e);
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
                            if ((0, k.a)(tV, d.CodexMcpExtensionAction, {
                                    ...n_,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eB.a)("MCP app messages are disabled for this view", c.q.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, er.d)(t) && null == (0, er.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tO(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eY,
                                    icon: tf,
                                    server: tp,
                                    widgetSource: eV.widgetSource
                                });
                                if (aA()?.assertActive?.(), "new" === e.options.target) {
                                    if (ah) throw (0, eB.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(t$, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eB.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(Z.w) || t.get(Z.W) || null != t.get(et.b) || t.get(ei.e) || t.get(Z.r) || !(0, eo.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, Z.Fb)(t, e => {
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
                                let i = tO(r, t),
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
                                sourceName: eY,
                                icon: tf,
                                server: tp,
                                sessionId: eL,
                                widgetSource: eV.widgetSource
                            }, nA), s = !1;
                            e.options?.target === "new" && null != ro && e5.appServices?.mcpAppSandbox != null && (rV(n), s = await e5.appServices.mcpAppSandbox.consumeUserGesture((0, eD.a)(ro, nQ)).catch(() => !1) === !0, rV(n));
                            let p = e.options?.target === "new" ? (0, tq.a)({
                                scope: t$,
                                recipient: t,
                                getNewThreadDestination: tn,
                                globalEntrypointIdentity: "global" === n_.source ? {
                                    connectorId: n_.connectorId,
                                    pluginId: n_.pluginId
                                } : void 0,
                                canCreateCodexThreads: av,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (ah) throw (0, eB.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    rV(n)
                                },
                                sourceName: eY,
                                toolOrigin: rW,
                                signal: n
                            }) : rH(n);
                            if (null == p) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let f = t?.get(Z.x).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eL
                            }) ?? [];
                            return await rB(i, r, p, n, void 0, o, f), null != t && (0, Q.b)(t, f), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eB.d)(nt, l, "Invalid MCP file download params");
                            return (0, te.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eB.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eB.d)(t2, l, "Invalid MCP model context params");
                            if (null != rH() && tj(e.content), nM && e.content?.some(e => "image" === e.type && !(0, w.yi)({
                                    type: e.mimeType
                                }))) throw (0, eB.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != tr && tV.get(eI.q, eL)?.sourceMcpAppId !== eH) throw (0, eB.a)("The widget source is no longer active", -32e3);
                            aA()?.onModelContextUpdate?.(e, eL), (0, J.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    r = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eV.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tp,
                                    composerIcon: tf ?? void 0,
                                    sourceName: eY,
                                    id: eL,
                                    modelContextUpdateId: r ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, tJ.b)(tV, eL, t.get(Z.x).find(e => e.id === eL) ?? null)), r
                            })(e);
                            if ((0, k.a)(tV, d.CodexMcpExtensionAction, {
                                    ...n_,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != tr) {
                                var p = await rF(eH, e, !0);
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
                            return rJ((0, eB.d)(na, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource read params");
                            if (rV(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                    ...n_,
                                    feature: "resource",
                                    action: "read"
                                }), e4?.readHostResource != null) {
                                rV(n);
                                let t = await e4.readHostResource(e, n);
                                if (rV(n), null != t) return t
                            }
                            return eJ(() => {
                                (0, eR.a)({
                                    mcpAppScope: eV,
                                    server: tp,
                                    uri: e.uri
                                })
                            }), await r$({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, eN.d)({
                                        scope: tV,
                                        appContext: eV.appContext,
                                        connectorId: (0, M.e)(tp) ? nf : null,
                                        hostId: em,
                                        mcpAppId: eL,
                                        originCallId: eV.originCallId ?? null,
                                        threadId: i,
                                        server: tp,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw eX(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource subscribe params");
                            return rV(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...n_,
                                feature: "resource",
                                action: "subscribe"
                            }), await at.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource unsubscribe params");
                            return rV(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...n_,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await at.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eB.d)(ni, l, "Invalid MCP event subscribe params"),
                                t = tV.get(eI.i, eH)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nK(await eZ({
                                    scope: tV,
                                    hostId: em,
                                    mcpServerStatuses: e3,
                                    server: tp,
                                    threadId: o
                                }))), null == n) throw (0, eB.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return an.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eB.d)(no, l, "Invalid MCP event unsubscribe params");
                            return an.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return r$(r.data, n, a, async () => {
                                let e = await eZ({
                                        scope: tV,
                                        hostId: em,
                                        mcpServerStatuses: (0, M.e)(tp) ? e3 : void 0,
                                        server: tp,
                                        threadId: o
                                    }),
                                    t = eQ(e),
                                    n = nK(e);
                                return {
                                    tools: eJ(() => (0, eR.e)({
                                        server: tp,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return r$(r.data, n, a, async () => (0, M.e)(tp) ? {
                                resources: []
                            } : {
                                resources: (await eZ({
                                    scope: tV,
                                    hostId: em,
                                    server: tp,
                                    threadId: o,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return r$(r.data, n, a, async () => (0, M.e)(tp) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eZ({
                                    scope: tV,
                                    hostId: em,
                                    server: tp,
                                    threadId: o,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return r$(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return r$(r.data, n, a, async () => {
                                throw (0, eB.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                }), rY = (0, x.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(279799)]).then(n.bind(n, "Rq7I"));
                    rV(t), a(tY(), {
                        Frame: nu,
                        sourceMcpAppId: eH,
                        signal: t,
                        handleRequest: async (e, n) => c._.parse(await rK(e, n ?? t))
                    }, e)
                });
            (0, x.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nZ(e), () => {
                    e.remove(), nZ(t => t === e ? null : t), n2(!1)
                }
            }, [eL]), (0, x.useLayoutEffect)(() => {
                null != nY && null != nQ && function(e) {
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
                    } = e, f = !s && !a && !o;
                    t.className = (0, tM.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", r && "z-50", !s && !a && !o && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tM.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", f && "rounded-lg", o && c && "borderedCardSandbox-KmZ5WZ", s && "min-h-0 flex-1"), n.style.backgroundColor = !r && (i || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: nY,
                    sandboxElement: nQ,
                    fullSurface: U,
                    liftModal: rm,
                    inheritHostBackground: eP,
                    isCardInlineSurface: rd,
                    isFullScreen: nD,
                    isWidgetVisible: nL && null != nU,
                    prefersBorder: np,
                    surfaceBackgroundColor: nq,
                    title: tv,
                    globalSurface: tk
                })
            }, [U, rm, nY, eP, rd, nD, nL, nU, np, nQ, nq, tv, tk]), (0, x.useLayoutEffect)(() => {
                if (null == nY) return;
                let e = nD ? rl : rc,
                    t = rv ? (0, X.a)() : ry;
                if (rm && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nY.style.display;
                    nY.style.display = "none", e || eb.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rx().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (nY.parentElement !== t && (nY.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nY, null) : t.appendChild(nY), eb.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rx().safe.mcpAppId,
                                showInModal: rm
                            }
                        })), n1 || n2(!0), null == e) {
                        let e = "none" === nY.style.display;
                        nY.style.display = "none", e || eb.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rx().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete nY.dataset.mcpAppParked,
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
                            } = e, p = i || s || l, f = i ? (0, tC.b)(n) : void 0, m = null, g = s && !l ? new MutationObserver(() => b()) : null, h = new ResizeObserver(() => b()), b = () => {
                                let e = c.currentCSSZoom ?? 1,
                                    t = (0, tP.a)(c, e),
                                    u = {
                                        ...t
                                    },
                                    d = s || r ? c.closest('[data-app-shell-focus-area="right-panel"]') : null,
                                    f = "";
                                i ? f = "" : null != d && (f = (0, tP.b)(t, (0, tP.a)(d, e))), n.style.position = p ? "fixed" : "absolute";
                                let h = null;
                                if (p ? l || i || (h = n.offsetParent) : h = a, null != h) {
                                    let t = (0, tP.a)(h, e);
                                    u.x -= t.x, u.y -= t.y
                                }
                                p || (u.x += a.scrollLeft, u.y += a.scrollTop);
                                let b = "";
                                i || (b = s ? "43" : "1"), Object.assign(n.style, {
                                    ...(0, tP.d)(u, e / (a.currentCSSZoom ?? 1)),
                                    clipPath: f,
                                    display: "",
                                    zIndex: b
                                });
                                let v = r || s ? (0, tP.c)(c) : null;
                                if (n.style.borderRadius = v?.join(" ") ?? "", null != o)
                                    if (null == v) o.style.borderRadius = "";
                                    else {
                                        let e = getComputedStyle(n),
                                            t = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                            a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                        o.style.borderRadius = [t, a].map(e => v.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                                    } null != g && h !== m && (g.disconnect(), m = h, null != h && g.observe(h, {
                                    attributeFilter: ["class", "style"],
                                    attributes: !0
                                }))
                            };
                            h.observe(a);
                            let v = t && !p && !r && a.contains(c),
                                y = e => {
                                    e.target instanceof Element && e.target !== a && e.target.contains(c) && b()
                                };
                            v && a.addEventListener("scroll", y, !0);
                            let w = (0, tA.b)(c, n, b, v ? {
                                    ancestorScroll: !1,
                                    ancestorResize: !1
                                } : void 0),
                                I = (0, tT.a)({
                                    update: b,
                                    motionValues: [d, s ? u : void 0]
                                });
                            return () => {
                                f?.(), I.disconnect(), w(), v && a.removeEventListener("scroll", y, !0), h.disconnect(), g?.disconnect()
                            }
                        }({
                            sharesScrollHost: rh?.contains(t) === !0,
                            frameElement: nY,
                            frameContainer: t,
                            fullSurface: U,
                            modalOpen: rm,
                            sandboxElement: nQ,
                            isFullScreen: nD,
                            isInGlobalHost: rv,
                            anchorElement: e,
                            rightPanelAnimationProgress: nN,
                            rightPanelLayoutTick: tc
                        })
                };
                return U || nD || rm || rv || !eh || null == e || e.hidden || "true" !== nY.dataset.mcpAppParked ? n() : (0, tg.a)(e, n)
            }, [nY, U, rm, eh, rh, rc, nD, rv, n1, nN, tc, nQ, rl, ry]);
            let rZ = e4?.autoFocus === !0;
            (0, x.useEffect)(() => {
                rZ && nL && null != rc && nQ?.focus()
            }, [rZ, nL, rc, nQ]), (0, x.useLayoutEffect)(() => (nW.current = !1, () => {
                nW.current = !0
            }), [eL, tV]);
            let rQ = (0, x.useEffectEvent)(async () => {
                    try {
                        if (e4?.assertActive?.(), !aF) return;
                        let e = tB.openInAppUrl ?? C.string().nullable().parse(await n7?.getCurrentPath?.(void 0));
                        if (e4?.assertActive?.(), null == e) return;
                        let t = e4?.openInApp?.validateUrl(null == tB.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                r0 = (0, x.useEffectEvent)(e => {
                    let t = tV.get($.j.tabs$).some(e => e.tabId === (0, e9.b)(eL));
                    (0, e9.c)(tV, {
                        source: {
                            hostId: em,
                            server: tp,
                            connectorId: nf ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tf,
                        mcpAppId: eL,
                        onExitFullScreen: e,
                        onPanelElementChange: n5,
                        title: tB.displayModeTitle ?? th,
                        openInAppName: e4?.openInApp?.appName,
                        onOpenInApp: aF ? () => {
                            rQ()
                        } : void 0
                    })
                }),
                r1 = (0, x.useEffectEvent)(() => {
                    let e = tV.get(eI.q, eL);
                    !nW.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eI.c)(tV, eL)
                }),
                r2 = (0, x.useEffectEvent)(e => {
                    let t = aA()?.instrumentation;
                    if (null != t) t.sendInstrument(e, n_);
                    else {
                        let t = C.object({
                            type: C.literal("interaction"),
                            label: C.string()
                        }).safeParse(e);
                        t.success && (0, k.a)(tV, u.l, {
                            ...n_,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, x.useLayoutEffect)(() => {
                nD ? r0(r1) : (0, e9.a)(tV, eL)
            }, [nD, eL, tV, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl, th, tB.displayModeTitle, aF, e4?.openInApp?.appName]);
            let r3 = (0, x.useEffectEvent)(() => {
                    let e = nD ? rl : rc;
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
                r5 = null != nY && n1 && null != rw && null != ro && null != ri,
                r8 = (0, x.useEffectEvent)(e => {
                    let t;
                    if (!r5) return;
                    let n = e2.a.start("webview_load", {
                        definitionVersion: 1,
                        surface: "mcp_app",
                        telemetryOwner: "desktop_client"
                    }, {
                        key: eL,
                        traceAttributes: {
                            "webview.surface": "mcp_app"
                        }
                    });
                    nV.current = n, n.mark("surface_mcp_app"), (0, eI.C)(tY(), eL, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), ar(nl), nJ.current = null, nX.current = null;
                    let r = rs();
                    if (null == r) return void rE("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let i = [...new Set(["fullscreen", "encrypted-media", ...nS?.split(";") ?? [], ...nE ? ["local-network-access"] : []])],
                        o = (0, eU.a)(rp, ro, ri);
                    o instanceof HTMLIFrameElement && (o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != nS ? o.allow = i.map(e => `${e} *`).join("; ") : o.allow = nE ? "encrypted-media *; local-network-access" : "encrypted-media *", o.allowFullscreen = !0), o.classList.add("pointer-events-none", "opacity-0"), nY.appendChild(o), n0(o), n.mark("rendered");
                    let u = new AbortController,
                        d = !1,
                        v = new tm,
                        y = null == s ? null : new eg(s),
                        w = null,
                        I = crypto.randomUUID(),
                        x = rU(),
                        S = a7(),
                        {
                            sourceMcpAppId: E,
                            toolInput: A,
                            toolOutput: M,
                            toolResponseMetadata: P,
                            toolResult: T,
                            toolStatus: R,
                            toolResultNotification: N,
                            toolCallCancellationReason: j
                        } = rn(),
                        O = new tQ.b(tY(), E, e => {
                            rT({
                                href: e
                            }, u.signal).catch(e => {
                                u.signal.aborted || (0, ez.d)(e, rx())
                            })
                        });
                    nJ.current = null == T || null == M ? null : {
                        widgetId: I,
                        widgetState: x,
                        sourceMcpAppId: E,
                        toolInput: A,
                        toolOutput: M,
                        toolResponseMetadata: P,
                        toolStatus: R,
                        toolResult: N,
                        toolCallCancellationReason: j
                    };
                    let q = ax ? {
                            requestConnectPlugin: async e => aA()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tz.a.parse(e).pluginId,
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
                        L = null == T ? null : q ?? ra(T),
                        U = null == L ? null : {
                            ...L,
                            requestDeclinePluginSuggestions: q?.requestDeclinePluginSuggestions ?? (null == L.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = rn().toolResult,
                                    t = null == e ? void 0 : ra(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await e5.appServices?.mcpAppSandbox?.consumeUserGesture((0, eD.a)(ro, o)).catch(() => !1) || u.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        D = () => {
                            let e = aA()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        F = {
                            ...U,
                            downloadBlob: az ? e => aA()?.downloadBlob?.(e, u.signal) : void 0,
                            triggerHaptic: aV ? e => aA()?.triggerHaptic?.(e, u.signal) : void 0,
                            requestCheckout: aO ? async e => {
                                u.signal.throwIfAborted();
                                let t = aA();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, u.signal)
                            } : void 0,
                            requestModal: async e => {
                                u.signal.aborted || (aP ? await aR()?.requestModal(e) : null != aQ() && (aA()?.requestModal == null || C.object({
                                    params: C.object({
                                        view: C.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rR(e, u.signal, ti) : aA()?.requestModal != null ? await aA()?.requestModal?.(e, u.signal) : await rY(e, u.signal))
                            },
                            uploadFile: a$ ? (e, t) => D().uploadFile(e, t, u.signal) : void 0,
                            getFileDownloadUrl: a$ ? e => D().getFileDownloadUrl(e, u.signal) : void 0,
                            getFileMetadata: a$ ? e => D().getFileMetadata(e, u.signal) : void 0,
                            selectFiles: a$ ? () => D().selectFiles(u.signal) : void 0,
                            share: aJ ? async e => {
                                u.signal.throwIfAborted(), await aA()?.share?.(e, u.signal)
                            } : void 0,
                            requestLinkToConnector: aP || aY ? async e => u.signal.aborted ? {
                                didConnect: !1
                            } : await (aR()?.requestLinkToConnector ?? aA()?.requestLinkToConnector)?.(e, u.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: ak ? e => {
                                u.signal.aborted || (aR()?.showToast ?? aA()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aE || aP && aC || aG ? () => {
                                u.signal.aborted || aA()?.allowsInteractiveDismissal === !1 || (aE || aP || aA()?.displayMode != null ? rP() : rq({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: e => {
                                let t = w?.notifyMcpAppsMcpNotification;
                                if (ad && null != t) {
                                    let n = O.handleRequest(e, u.signal, e => e$(t(e)));
                                    if (null != n) return n
                                }
                                let n = v.handleRequest(e, {
                                    sandboxElement: o,
                                    sandboxId: ro,
                                    initId: W,
                                    signal: u.signal,
                                    notify: w?.notifyMcpAppsMcpNotification
                                });
                                if (null != n) return n;
                                let a = f.h.safeParse(e);
                                if (a.success && null != b) {
                                    for (let {
                                            component: e,
                                            level: t,
                                            message: n,
                                            metadata: r
                                        }
                                        of a.data.params.entries) eb.a[t](n, {
                                        safe: {
                                            component: e,
                                            metadata: r,
                                            pluginId: b
                                        },
                                        sensitive: {}
                                    });
                                    return Promise.resolve({})
                                }
                                let r = f.g.safeParse(e);
                                return r.success && null != y ? y.handleRequest(r.data.params) : rK(e, u.signal).catch(t => {
                                    if (!u.signal.aborted) {
                                        let n = rx();
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
                            callTool: (e, t) => rX(e, t, u.signal),
                            notifyBackgroundColor: () => {},
                            notifyEnvironmentError: e => {
                                if (!u.signal.aborted) {
                                    if (ez.i.safeParse(e).success) return void(0, ez.d)(e, rx());
                                    rE("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rA,
                            notifyIntrinsicWidth: rC,
                            notifyNavigation: e => {
                                u.signal.aborted || rM(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                u.signal.aborted || aA()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rT(e, u.signal),
                            openPlaidLink: a2 ? e => rk(e, u.signal) : void 0,
                            initializeMcpApp: e => {
                                if (u.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rO(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rE("configuration", e), e
                                }
                            },
                            requestClose: aC ? rP : void 0,
                            requestDisplayMode: rq,
                            openConversationOverlay: aq ? async e => {
                                u.signal.throwIfAborted(), await aA()?.openConversationOverlay?.(e, u.signal)
                            } : void 0,
                            notifyAutofillCandidates: aU ? e => {
                                u.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: aL ? e => {
                                u.signal.throwIfAborted();
                                let t = aA()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, o, u.signal)
                            } : void 0,
                            setOpenInAppUrl: aD ? e => {
                                u.signal.throwIfAborted();
                                let {
                                    href: t
                                } = C.object({
                                    href: C.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, eI.C)(tY(), eL, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aA()?.openInApp?.validateUrl(t);
                                null != n && (0, eI.C)(tY(), eL, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: aW ? async e => {
                                u.signal.throwIfAborted(), await aA()?.presentation?.requestFocusedObject?.(e, u.signal)
                            } : void 0,
                            requestCloseFocusedObject: aH ? async () => {
                                u.signal.throwIfAborted(), await aA()?.presentation?.requestCloseFocusedObject?.(u.signal)
                            } : void 0,
                            requestTargetedReply: aT ? async e => {
                                if (u.signal.aborted) return;
                                let t = aR()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aA()?.setTargetedReply;
                                if (null != n) return void n(e, u.signal);
                                let a = aA()?.requestTargetedReply;
                                null != a && await (0, eS.c)(e, a, au, u.signal)
                            } : void 0,
                            requestReconnectConnector: aK ? async () => {
                                let e = aA()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(u.signal)
                            } : void 0,
                            requestConnectSheet: aX ? e => {
                                let t = aA()?.requestConnectSheet;
                                if (null != t) return t(e, u.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => rz(e, u.signal),
                            sendInstrument: e => {
                                if (!u.signal.aborted) {
                                    if (aS || null != U) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, k.a)(tY(), t.messageType, t.payload)
                                    }
                                    ez.g.safeParse(e).success && ((0, ez.d)(e, rx()), rS("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), U?.sendInstrument(e);
                                    let t = aQ() ?? a1();
                                    t?.sendInstrument(e), (null == t && null == U || C.object({
                                        type: C.literal("interaction")
                                    }).safeParse(e).success) && r2(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!u.signal.aborted) return rF(e, t, C.object({
                                    waitForPersistence: C.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        G = (0, eD.b)({
                            hostApiHandlers: F,
                            assertActive: () => {
                                u.signal.throwIfAborted(), t0(), aA()?.assertActive?.()
                            },
                            onSkybridgeCacheState: e => {
                                n.mark(`skybridge_cache_${e}`, {
                                    traceAttributes: {
                                        "webview.skybridge_cache_state": e
                                    }
                                })
                            },
                            origin: r.sandboxOrigin,
                            sandboxId: ro,
                            signal: u.signal,
                            sourceUrl: r.sourceUrl,
                            webview: o
                        }),
                        W = (0, _.g)(o.getAttribute("src") ?? void 0),
                        H = rx();
                    eb.a.info("Starting app sandbox", {
                        safe: {
                            conversationSurface: nP,
                            connectorId: H.safe.connectorId,
                            mcpAppId: H.safe.mcpAppId,
                            sandboxId: H.safe.sandboxId,
                            initId: W
                        },
                        sensitive: {
                            hostId: H.sensitive.hostId,
                            server: H.sensitive.server
                        }
                    });
                    let B = setTimeout(() => {
                        rE("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), V(), z()
                    }, 5e4);

                    function z() {
                        clearTimeout(B), e()
                    }

                    function V() {
                        u.signal.aborted || (clearTimeout(B), u.abort(), as(), nV.current === n && (nV.current = null), n.isRecording() && n.abort("navigation_away"), v[Symbol.dispose](), O[Symbol.dispose](), y?.[Symbol.dispose](), nJ.current = null, nX.current = null, nH.current = null, nB.current = null, nz.current = null, (0, eI.C)(tY(), eL, {
                            isWidgetReady: !1
                        }), n6(null), ar(nl), null != w && e$(w.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), o.remove(), o instanceof HTMLIFrameElement || o.destroy?.(), eb.a.info("Removed app sandbox", {
                            safe: {
                                initId: W
                            }
                        }), n0(e => e === o ? null : e))
                    }
                    return G.then(async e => {
                        if (u.signal.aborted) return;
                        n.mark("sandbox_ready"), eb.a.info("Connected app sandbox", {
                            safe: {
                                initId: W
                            }
                        }), w = e;
                        let o = e.notifyMcpAppsMcpNotification,
                            l = e5.appServices?.mcpAppSandbox != null && null != o;
                        null != o && y?.setNotificationSender(e => e$(o(e))), null != e.applyAutofillCandidate && (t = await aA()?.autofill?.(e.applyAutofillCandidate, u.signal), u.signal.throwIfAborted()), n6({
                            api: e,
                            widgetId: I
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: p
                        } = rj(), v = tx(), {
                            containerDimensions: _
                        } = rI(nY), E = tS(aA()?.device), C = tY().get(eE.a), T = C["--color-background-primary"], k = rN(c), R = {
                            "openai/viewer-header": ad && null != o,
                            ...tI({
                                availableDisplayModes: p,
                                containerDimensions: _,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nk(),
                                deepLink: rL(),
                                safeAreaInsets: k.insets,
                                styleVariables: C,
                                theme: v,
                                userAgent: E,
                                toolInfo: aA()?.toolInfo
                            }),
                            ...null == s || null == o ? {} : {
                                [f.a]: !0
                            },
                            ...null == b ? {} : {
                                [f.d]: !0
                            }
                        }, {
                            csp: N
                        } = r, j = ng ? {} : void 0;
                        ay && (j = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == y && r_(), eb.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: W
                            }
                        }), d = !0;
                        let O = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != a_,
                                expectedReadySignal: a_,
                                csp: N,
                                displayMode: aN(c),
                                features: i,
                                subjectId: aA()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nb,
                                html: r.html,
                                isFirstParty: aS || null != U || aK,
                                isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aA()?.isTombstone === !0,
                                maxHeight: _.maxHeight,
                                maxWidth: _.maxWidth,
                                measureWidth: !0 === t6,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [td] : [], ...ad && null != o ? [tQ.a] : [], ...ay || !ng ? ["ui/message"] : [], ...af?.split(";") ?? [], ...aw ? [m.a] : [], ...null == y || null == o ? [] : [f.c], ...null == b ? [] : [f.e], ...null == o ? [] : [...t5, ...ae && !aI ? t8 : []]],
                                    hostCapabilities: {
                                        experimental: {
                                            [g.a]: {},
                                            ...l ? {
                                                "openai/find": {}
                                            } : {},
                                            ...ay ? {
                                                [h.a]: {
                                                    draft: nh() ? {} : void 0
                                                }
                                            } : {},
                                            "openai/skillsDeepLinks": {},
                                            ...r.experimentalCapabilities,
                                            ...aw ? {
                                                "openai/files": {}
                                            } : {}
                                        },
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: j,
                                        updateModelContext: ng ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: null != N || null != nS ? {
                                            permissions: null == nS ? void 0 : {
                                                camera: i.includes("camera") ? {} : void 0,
                                                microphone: i.includes("microphone") ? {} : void 0,
                                                geolocation: i.includes("geolocation") ? {} : void 0,
                                                clipboardWrite: i.includes("clipboard-write") ? {} : void 0
                                            },
                                            csp: null == N ? void 0 : {
                                                baseUriDomains: N.baseUriDomains,
                                                connectDomains: N.connectDomains,
                                                frameDomains: N.frameDomains,
                                                resourceDomains: N.resourceDomains
                                            }
                                        } : void 0
                                    },
                                    hostContext: R,
                                    hostInfo: {
                                        name: "chatgpt",
                                        version: tY().get(ev.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tk
                                },
                                safeArea: k,
                                theme: v,
                                toolInput: A,
                                toolOutput: M,
                                toolResponseMetadata: P,
                                userAgent: E,
                                viewParams: S,
                                widgetId: I,
                                widgetState: x
                            }),
                            q = !1;
                        for await (let t of O) {
                            let a = tY().get(eI.q, eL)?.sandboxError;
                            if (u.signal.aborted || nm(a)) break;
                            if (ez.f.safeParse(t).success) return;
                            if (ez.g.safeParse(t).success)(0, ez.d)(t, rx()), rS("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION");
                            else if (ez.h.safeParse(t).success) throw Error("The MCP app sandbox execution failed.");
                            if (q || !eD.d.safeParse(t).success) continue;
                            q = !0, z();
                            let {
                                displayMode: r,
                                availableDisplayModes: i
                            } = rj(), o = {
                                ...R,
                                displayMode: r,
                                availableDisplayModes: [...i]
                            };
                            (0, eI.C)(tY(), eL, {
                                isWidgetReady: !0
                            }), e$(e.setWidgetView({
                                displayMode: aN(r),
                                isTombstone: aA()?.isTombstone === !0,
                                viewParams: S,
                                widgetId: I
                            })), e$(e.setTheme({
                                theme: v
                            })), e$(e.setSafeArea({
                                safeArea: k
                            }));
                            let s = {
                                isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                                maxHeight: _.maxHeight,
                                maxWidth: _.maxWidth,
                                surfaceBackgroundColor: T
                            };
                            nz.current = s, e$(e.setAdditionalGlobals({
                                additionalGlobals: s
                            })), e$(e.notifyMcpAppsHostContext({
                                hostContext: o
                            })), n.mark("fully_loaded"), eb.a.info("Started app widget", {
                                safe: {
                                    displayMode: r,
                                    initId: W
                                }
                            }), n.end()
                        }
                        if (!q && !u.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        u.signal.aborted || (d && rS("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rE(null == w ? "handshake" : "widget", e)), V()
                    }).finally(() => {
                        z()
                    }), V
                });
            (0, x.useLayoutEffect)(() => {
                if (r5) return tY().get(tE, void 0)(r8, e => rE("handshake", e), r3)
            }, [r5, ng, nb, nE, nS, az, aV, as, aw, ay, a2, aC, ef, null, em, nP, nY, U, B, s, b, aI, t6, ax, aO, aJ, a$, aX, aK, aY, aE, ak, aP, aT, aG, aD, aq, aL, aU, aW, aH, aS, ad, af, a_, a.requiresMcpInitialization, ti, n1, eL, rr, au, ro, rw, ri, rp, tp, ae, am, tk]), (0, x.useLayoutEffect)(() => {
                at.setConversation(i).catch(e => {
                    eb.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: i,
                            mcpAppId: eL
                        },
                        sensitive: {
                            error: e,
                            hostId: em
                        }
                    })
                })
            }, [i, em, at, eL]), (0, x.useLayoutEffect)(() => {
                an.setConversation(i, ae && nw).catch(e => {
                    eb.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [i, an, nw, ae]), (0, x.useLayoutEffect)(() => {
                let e = n7?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = an.connectNotificationSink(e);
                return () => {
                    t(), an.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP event subscriptions", {
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
                let t = at.connectNotificationSink(t => e$(e(t)));
                return () => {
                    t(), at.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP resource subscriptions", {
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
                        sourceMcpAppId: eH,
                        toolInput: a3,
                        toolOutput: a8,
                        toolResponseMetadata: rt,
                        toolStatus: re,
                        toolCallCancellationReason: tG,
                        toolResult: a9
                    },
                    t = {
                        ...e,
                        widgetState: n$
                    };
                v()(nJ.current, t) || (nJ.current = t, e$(n7.setWidgetData({
                    toolInput: a3,
                    toolOutput: a8,
                    toolResponseMetadata: rt,
                    widgetId: n4,
                    widgetState: n$
                })));
                let n = nX.current?.widgetId === n4 ? nX.current : null;
                if (v()(n, e)) return;
                nX.current = e;
                let a = n?.sourceMcpAppId !== eH;
                null != a3 && (a || !v()(n?.toolInput, a3)) && e$(n7.notifyMcpAppsToolInput({
                    arguments: a3
                })), "cancelled" === re ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tG) && e$(n7.notifyMcpAppsToolCancelled({
                    reason: tG
                })) : null == a9 || !a && v()(n?.toolResult, e.toolResult) && n?.toolStatus === re && v()(n?.toolInput, a3) && v()(n?.toolResponseMetadata, rt) || e$(n7.notifyMcpAppsToolResult({
                    ...a9,
                    isError: "error" === re || a9.isError,
                    _meta: "error" === re ? {
                        ...a9._meta,
                        status: "error"
                    } : a9._meta
                }))
            }, [nL, a9, n7, eH, a3, a8, rt, re, tG, n4, n$]), (0, x.useEffect)(() => {
                nL && null != n7 && e$(n7.notifyMcpAppsHostContext({
                    hostContext: {
                        [g.a]: nT
                    }
                }))
            }, [nL, nT, n7]), (0, x.useEffect)(() => {
                if (nL && null != n7 && null != nY) return s?.observeHostContext?.(tV, nY, e => {
                    e$(n7.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, nY, nL, n7, tV]), (0, x.useEffect)(() => {
                if (null == nY || !ru || null == n7 || null == n4 || nD && null == rl) return;
                let e = rN(nF);
                e$(n7.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aN(nF),
                    isTombstone: aA()?.isTombstone === !0,
                    viewParams: a6,
                    widgetId: n4
                };
                return v()(nH.current, t) || (nH.current = t, e$(n7.setWidgetView(t))),
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
                        frameElement: nY,
                        inlineAnchor: rc,
                        fitWidth: t6,
                        rightPanelAnimationProgress: nN,
                        onLayout: () => {
                            if ("true" === nY.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = rI(nY), n = {
                                isSidebarOpen: aA()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rm ? "transparent" : nq
                            };
                            v()(nz.current, n) || (nz.current = n, e$(n7.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tI({
                                availableDisplayModes: tB.availableDisplayModes ?? ef,
                                containerDimensions: t,
                                displayMode: nF,
                                locale: nA.locale,
                                deepLink: ts,
                                safeAreaInsets: e.insets,
                                styleVariables: nO,
                                theme: tx(),
                                userAgent: tS(aA()?.device),
                                toolInfo: aA()?.toolInfo
                            });
                            v()(nB.current, a) || (nB.current?.theme !== a.theme && e$(n7.setTheme({
                                theme: a.theme
                            })), nB.current = a, e$(n7.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nY, t6, nG, U, B, rc, nA.locale, nO, ef, tB.availableDisplayModes, ru, nD, aZ, aB, rm, e4?.displayMode, e4?.showModalCloseButton, ao, ts, nN, nj, n7, rl, nq, tk, a6, n4, nF]);
            let r6 = ao && !nD,
                r7 = ao && nD && nR?.tabId === (0, e9.b)(eL);
            return (0, o.jsxs)(o.Fragment, {
                children: [U && ru && nL && null != nQ && null != ro ? (0, o.jsx)(tb, {
                    sandboxElement: nQ,
                    sandboxId: ro
                }) : null, nL && null != nQ && null != ro ? (0, o.jsx)(tl, {
                    panelTabId: nD ? (0, e9.b)(eL) : e4?.panelTabId ?? null,
                    sandboxElement: nQ,
                    sandboxId: ro,
                    title: tv
                }) : null, null != al && ru ? (0, o.jsx)(ex.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...al,
                        onCancel: as,
                        onConfirm: ac
                    }
                }) : null, r7 ? (0, o.jsx)(V.a.RightPanelTabListBefore, {
                    children: (0, o.jsx)(tH, {
                        canGoBack: aa.canGoBack,
                        canGoForward: aa.canGoForward,
                        className: "h-full px-1",
                        onBack: () => rG(-1),
                        onForward: () => rG(1)
                    })
                }) : null, r6 && null != nY && !nD ? (0, S.createPortal)((0, o.jsx)(tH, {
                    canGoBack: aa.canGoBack,
                    canGoForward: aa.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => rG(-1),
                    onForward: () => rG(1)
                }), nY) : null]
            })
        }

        function nm(e) {
            return null != e && !(e instanceof t$.a)
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
                let t, n, c, u = (0, r.c)(18),
                    {
                        className: d,
                        height: p,
                        inlineFramePadding: f,
                        allowCompact: m,
                        fullSurface: g,
                        showLoadingStatus: h
                    } = e,
                    b = void 0 !== m && m,
                    v = void 0 === h || h,
                    y = (0, i.a)();
                u[0] !== y ? (t = y.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }), u[0] = y, u[1] = t) : t = u[1];
                let w = t;
                if (void 0 !== g && g) {
                    let e, t, n = v ? "status" : void 0,
                        r = !v;
                    return u[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.LoadingPage, {
                        fillParent: !0,
                        variant: "blossom"
                    }), u[2] = e) : e = u[2], u[3] !== w || u[4] !== n || u[5] !== r ? (t = (0, a.jsx)("div", {
                        className: "relative h-full min-h-0",
                        role: n,
                        "aria-hidden": r,
                        "aria-label": w,
                        "data-mcp-app-loading": "true",
                        children: e
                    }), u[3] = w, u[4] = n, u[5] = r, u[6] = t) : t = u[6], t
                }
                u[7] !== b || u[8] !== d || u[9] !== p || u[10] !== f || u[11] !== w || u[12] !== v ? (n = b && "number" == typeof p && p > 0 && p < 48 ? (0, a.jsx)("div", {
                    className: "flex w-full items-center overflow-hidden",
                    role: v ? "status" : void 0,
                    "aria-hidden": !v,
                    "aria-label": w,
                    "data-mcp-app-loading": "true",
                    style: {
                        height: null == f ? p : "100%"
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
                        height: null == f ? p : "100%"
                    }
                }), u[7] = b, u[8] = d, u[9] = p, u[10] = f, u[11] = w, u[12] = v, u[13] = n) : n = u[13];
                let I = n;
                return u[14] !== p || u[15] !== f || u[16] !== I ? (c = null == f ? I : (0, a.jsx)("div", {
                    style: {
                        height: p,
                        paddingBlockStart: f.blockStart,
                        paddingBlockEnd: f.blockEnd,
                        paddingInlineStart: f.inlineStart,
                        paddingInlineEnd: f.inlineEnd
                    },
                    children: I
                }), u[14] = p, u[15] = f, u[16] = I, u[17] = c) : c = u[17], c
            }
        })
    }),
    engp: (function(e, t, n) {
        n.d(t, {
            a: () => w,
            sendMcpAppMessage: () => y
        });
        var a = n("kSHG"),
            r = n("HVBu"),
            i = n.n(r),
            o = n("IhIa"),
            s = n("Ci8z"),
            l = n("Cslg"),
            c = n("dsow"),
            u = n("ABep"),
            d = n("oyxz"),
            p = n("RNul"),
            f = n("SGsN");
        let m = (0, u.jsx)(d.a, {
            id: "mcpApp.newThreadCreated.openChat",
            defaultMessage: "Open",
            description: "Button that opens the new chat containing the message sent by a plugin"
        });

        function g(e, t, n) {
            return e.get(f.f).info((0, u.jsx)(d.a, {
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
                    label: m,
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

        function w(e) {
            let {
                scope: t,
                recipient: r,
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
                    let c = (0, h.b)(r);
                    if (void 0 === c && (c = null != p ? p() : null == r ? {
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
                    i()(e => e());
                    let R = e => {
                            A.signal.aborted || (0, o.c)(e) || t.get(f.f).danger(e instanceof Error ? e.message : String(e), {
                                id: T,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        N = i()(() => {
                            A.signal.removeEventListener("abort", N), P(), k?.close()
                        }),
                        j = !1;
                    A.signal.addEventListener("abort", N, {
                        once: !0
                    });
                    let O = () => A.abort();
                    E.addEventListener("abort", O, {
                        once: !0
                    });
                    try {
                        let {
                            createMcpAppThread: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(17982)]).then(n.bind(n, "VWsy"));
                        _(), A.signal.throwIfAborted(), E.removeEventListener("abort", O), await a(t, {
                            context: e,
                            destination: c,
                            globalEntrypointIdentity: y,
                            hasUserGesture: I,
                            onDeferredCreation: e => {
                                j = !0, e.then(N, e => {
                                    R(e), N()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (k = g(t, T, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(f.f).info((0, u.jsx)(d.a, {
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
                                        label: m,
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
                        E.removeEventListener("abort", O), j || N()
                    }
                }
            })
        }
    }),
    jAhM: (function(e, t, n) {
        var a = n("bTvG"),
            r = n("iRMi"),
            i = n("mfKi"),
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
                    toolResult: f,
                    connect: m,
                    open: g,
                    decline: h,
                    onShown: b,
                    onInstallClick: v,
                    onSuggestionInteraction: y,
                    isCurrent: w = () => !0
                } = e, I = u.e.safeParse(f.structuredContent);
                if (!I.success) return null;
                let _ = (0, s.g)({
                        toolResult: f
                    }),
                    x = u.c.safeParse(_?._meta ?? _),
                    S = x.success ? x.data["openai/plugin_suggestion_id"] : void 0,
                    E = {
                        chatgpt: n,
                        source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: S,
                        surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    A = (e, r, o) => {
                        try {
                            (0, c.a)(t, i.CodexPluginAction, {
                                source: E.source,
                                suggestionId: S,
                                surface: E.surface,
                                action: e,
                                remotePluginId: r,
                                result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != S && (e !== i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != o) && (0, c.a)(t, a.q, {
                                action: e === i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: r,
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
                        A(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => I.data.suggestions.some(t => {
                            let {
                                plugin_id: n
                            } = t;
                            return n === e
                        })) ? a : void 0)
                    },
                    requestConnectPlugin: async e => {
                        let t = M(e);
                        return v?.(t.plugin_id), y?.(t.plugin_id, x.success ? x.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), A(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), m(t, E)
                    },
                    requestOpenPlugin: async e => {
                        let r = M(e);
                        if (null != n && null != g) try {
                            (0, c.a)(t, a.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: r.plugin_id,
                                suggestionId: S,
                                surface: n.surface
                            })
                        } catch {}
                        null != g ? await g(r) : await p((0, l.a)({
                            hostId: d,
                            pluginId: r.plugin_id,
                            remoteMarketplaceName: o.Xc
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
            o = n("iTtm"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("ygO2"),
            u = n("Wdu7"),
            d = n("ZiSI"),
            p = n("Odi7"),
            f = n("tSEg"),
            m = n("WFY2"),
            g = n("pZTm"),
            h = n("FZiz"),
            b = n("C1SW"),
            v = n("ALWK");

        function y(e) {
            let t, n, o, s = (0, r.c)(11),
                {
                    fullSurface: l,
                    inlineSurface: c,
                    title: u,
                    illustration: p,
                    actions: f
                } = e,
                m = l ? "h-full" : "h-60",
                g = !l && "standalone" === (void 0 === c ? "standalone" : c) && "overflow-hidden rounded-lg border border-strong";
            s[0] !== m || s[1] !== g ? (t = (0, i.b)(m, g), s[0] = m, s[1] = g, s[2] = t) : t = s[2];
            let h = !l;
            return s[3] !== f || s[4] !== p || s[5] !== h || s[6] !== u ? (n = (0, a.jsx)(d.a, {
                compact: h,
                title: u,
                illustration: p,
                description: null,
                actions: f
            }), s[3] = f, s[4] = p, s[5] = h, s[6] = u, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                children: n
            }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
        }
        n.d(t, {}, {
            a: y,
            b: function(e) {
                let t, n, d, w, I, _, x, S, E, A, C, M = (0, r.c)(95),
                    {
                        resource: P,
                        error: T,
                        errorTitle: k,
                        errorIllustration: R,
                        hostDisplayModes: N,
                        fullSurface: j,
                        hostScroll: O,
                        inlineSurface: q,
                        mcpAppId: L,
                        onRetryResourceRead: U,
                        renderErrorActions: D,
                        pluginName: F,
                        presentation: G,
                        showLoadingStatus: W
                    } = e,
                    H = void 0 !== j && j,
                    B = void 0 !== O && O,
                    z = void 0 === q ? "standalone" : q,
                    V = void 0 === W || W,
                    $ = (0, o.y)(f.a),
                    J = (0, o.x)(v.i, L),
                    X = J?.content.resource;
                M[0] !== T || M[1] !== P || M[2] !== X ? (t = null == X ? P : {
                    data: X,
                    error: T ?? null,
                    isLoading: !1
                }, M[0] = T, M[1] = P, M[2] = X, M[3] = t) : t = M[3];
                let K = t,
                    {
                        data: Y,
                        isLoading: Z
                    } = K,
                    Q = Y?.html ?? null;
                M[4] !== K || M[5] !== N ? (n = (0, b.c)(K, N), M[4] = K, M[5] = N, M[6] = n) : n = M[6];
                let ee = n,
                    et = (0, o.x)(v.t, L),
                    en = (0, o.x)(v.u, L),
                    ea = H || "inline" === G,
                    er = J?.inlineFrameAnchor.ref,
                    ei = Y?.heightHint ?? null,
                    eo = Y?.minFrameHeight ?? null;
                M[7] !== et.intrinsicHeight || M[8] !== B || M[9] !== ei || M[10] !== eo ? (d = (0, p.a)(et.intrinsicHeight, ei, eo, B), M[7] = et.intrinsicHeight, M[8] = B, M[9] = ei, M[10] = eo, M[11] = d) : d = M[11];
                let es = d,
                    el = !H && Y?.fitWidth ? et.intrinsicWidth ?? Y.widthHint : void 0,
                    ec = H ? void 0 : Y?.inlineFramePadding,
                    eu = null == ec ? void 0 : -ec.blockStart,
                    ed = null == ec ? void 0 : -ec.blockEnd,
                    ep = null == ec ? void 0 : -ec.inlineStart,
                    ef = null == ec ? void 0 : -ec.inlineEnd;
                M[12] !== el || M[13] !== eu || M[14] !== ed || M[15] !== ep || M[16] !== ef ? (w = {
                    width: el,
                    marginBlockStart: eu,
                    marginBlockEnd: ed,
                    marginInlineStart: ep,
                    marginInlineEnd: ef
                }, M[12] = el, M[13] = eu, M[14] = ed, M[15] = ep, M[16] = ef, M[17] = w) : w = M[17];
                let em = w,
                    eg = "error" === ee.kind ? ee.error : et.sandboxError;
                M[18] !== ee.error || M[19] !== ee.kind ? (I = null, "too-large" === ee.kind ? I = "HTML exceeds display limit" : "error" === ee.kind && ee.error instanceof b.a && (I = "No supported display mode"), M[18] = ee.error, M[19] = ee.kind, M[20] = I) : I = M[20];
                let eh = Z ? null : eg,
                    eb = eh?.message;
                M[21] !== I || M[22] !== Y?.availableDisplayModes || M[23] !== Y?.htmlByteLength || M[24] !== eh || M[25] !== N || M[26] !== L ? (_ = () => {
                    (null != I || null != eh) && m.a.warning("MCP app error displayed", {
                        safe: {
                            reason: I ?? "App could not be displayed",
                            htmlByteLength: Y?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: L,
                            error: eh,
                            hostDisplayModes: N,
                            availableDisplayModes: Y?.availableDisplayModes
                        }
                    })
                }, M[21] = I, M[22] = Y?.availableDisplayModes, M[23] = Y?.htmlByteLength, M[24] = eh, M[25] = N, M[26] = L, M[27] = _) : _ = M[27];
                let ev = (0, s.useEffectEvent)(_);
                if (M[28] !== ev ? (x = () => {
                        ev()
                    }, M[28] = ev, M[29] = x) : x = M[29], M[30] !== I || M[31] !== eb || M[32] !== L ? (S = [I, eb, L], M[30] = I, M[31] = eb, M[32] = L, M[33] = S) : S = M[33], (0, s.useEffect)(x, S), "too-large" === ee.kind) {
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
                if (Z || !en && null != Q && null == eg) {
                    let e, t, n, r;
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
                        return M[36] !== er ? (e = (0, a.jsx)("div", {
                            ref: er,
                            hidden: !0
                        }), M[36] = er, M[37] = e) : e = M[37], e
                    }
                    let o = Z ? null : er,
                        s = null == ec && "max-w-full",
                        c = H && "h-full";
                    M[38] !== s || M[39] !== c ? (e = (0, i.b)(s, c), M[38] = s, M[39] = c, M[40] = e) : e = M[40];
                    let u = "standalone" === z && "rounded-lg border";
                    M[41] !== u ? (t = (0, i.b)("w-full border-subtle", u), M[41] = u, M[42] = t) : t = M[42];
                    let d = H ? "100%" : es;
                    return M[43] !== H || M[44] !== B || M[45] !== ec || M[46] !== V || M[47] !== t || M[48] !== d ? (n = (0, a.jsx)(h.a, {
                        className: t,
                        height: d,
                        inlineFramePadding: ec,
                        fullSurface: H,
                        allowCompact: B,
                        showLoadingStatus: V
                    }), M[43] = H, M[44] = B, M[45] = ec, M[46] = V, M[47] = t, M[48] = d, M[49] = n) : n = M[49], M[50] !== em || M[51] !== z || M[52] !== o || M[53] !== e || M[54] !== n ? (r = (0, a.jsx)("div", {
                        ref: o,
                        className: e,
                        style: em,
                        "data-mcp-app-inline-surface": z,
                        children: n
                    }), M[50] = em, M[51] = z, M[52] = o, M[53] = e, M[54] = n, M[55] = r) : r = M[55], r
                }
                if (null != eg) {
                    let e, t, n, r, i;
                    M[56] !== F || M[57] !== k ? (e = k ?? (null == F ? (0, a.jsx)(l.a, {
                        ...g.a.displayUnnamedApp
                    }) : (0, a.jsx)(l.a, {
                        ...g.a.displayApp,
                        values: {
                            appName: F
                        }
                    })), M[56] = F, M[57] = k, M[58] = e) : e = M[58];
                    let o = e,
                        s = "error" === ee.kind ? null != U : null != et.sandboxError;
                    M[59] !== s || M[60] !== ee.kind || M[61] !== H || M[62] !== L || M[63] !== U || M[64] !== F || M[65] !== $ ? (t = s ? (0, a.jsx)(c.a, {
                        color: "secondary",
                        size: H && null != F ? "large" : "compact",
                        onClick: () => {
                            "error" === ee.kind ? U?.() : (0, v.B)($, L)
                        },
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppRetry",
                            defaultMessage: "Try again",
                            description: "Button label to retry loading an MCP app"
                        })
                    }) : null, M[59] = s, M[60] = ee.kind, M[61] = H, M[62] = L, M[63] = U, M[64] = F, M[65] = $, M[66] = t) : t = M[66];
                    let d = t;
                    M[67] !== D || M[68] !== d ? (n = D ? D(d) : d, M[67] = D, M[68] = d, M[69] = n) : n = M[69];
                    let p = n;
                    if (!H || null != F) {
                        let e;
                        return M[70] !== p || M[71] !== R || M[72] !== o || M[73] !== H || M[74] !== z ? (e = (0, a.jsx)(y, {
                            fullSurface: H,
                            inlineSurface: z,
                            title: o,
                            illustration: R,
                            actions: p
                        }), M[70] = p, M[71] = R, M[72] = o, M[73] = H, M[74] = z, M[75] = e) : e = M[75], e
                    }
                    return M[76] !== o ? (r = (0, a.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: (0, a.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: o
                        })
                    }), M[76] = o, M[77] = r) : r = M[77], M[78] !== p || M[79] !== r ? (i = (0, a.jsx)(u.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [r, p]
                        })
                    }), M[78] = p, M[79] = r, M[80] = i) : i = M[80], i
                }
                if (!ea) {
                    let e;
                    return M[81] !== er ? (e = (0, a.jsx)("div", {
                        ref: er,
                        hidden: !0
                    }), M[81] = er, M[82] = e) : e = M[82], e
                }
                if (null == Q) {
                    let e;
                    return M[83] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), M[83] = e) : e = M[83], e
                }
                let ey = null == ec && "w-full max-w-full",
                    ew = H && "h-full";
                M[84] !== ey || M[85] !== ew ? (E = (0, i.b)("overflow-hidden", ey, ew), M[84] = ey, M[85] = ew, M[86] = E) : E = M[86];
                let eI = H ? "100%" : es;
                return M[87] !== em || M[88] !== eI ? (A = {
                    ...em,
                    height: eI
                }, M[87] = em, M[88] = eI, M[89] = A) : A = M[89], M[90] !== er || M[91] !== z || M[92] !== E || M[93] !== A ? (C = (0, a.jsx)("div", {
                    ref: er,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": z,
                    className: E,
                    style: A
                }), M[90] = er, M[91] = z, M[92] = E, M[93] = A, M[94] = C) : C = M[94], C
            }
        })
    }),
    n2Dd: (function(e, t, n) {
        let a;
        var r = n("eB3o"),
            i = n("kSHG"),
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
            f = p.refine(e => URL.parse(e)?.protocol === "https:"),
            m = s.object({
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
                            href: f.optional(),
                            icons: s.array(i.u).max(8).optional(),
                            icon: d.optional(),
                            sources: s.array(s.object({
                                title: s.string().min(1).max(2e3),
                                href: f.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }).refine(e => {
                let t = [...e.titleActions, ...e.actions.flatMap(e => [e, ...e.menu?.items ?? []])];
                return new Set(t.map(e => e.id)).size === t.length
            }, "Viewer action IDs must be unique"),
            g = (0, o.v)(l.a, e => null);
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
                        params: m
                    }).safeParse(e);
                    if (!a.success || t.aborted) return null;
                    let r = a.data.params,
                        i = [...r.titleActions, ...r.actions.flatMap(e => e.menu?.items ?? [e])],
                        o = e => {
                            let a = i.find(t => t.id === e && !t.disabled);
                            t.aborted || this.invoke !== o || this.scope.get(g, this.appId)?.invoke !== o || null == a || (null != a.href ? this.openExternal(a.href) : n({
                                method: "ui/notifications/openai/viewer-action",
                                params: {
                                    id: a.id
                                }
                            }))
                        };
                    return this.invoke = o, this.scope.set(g, this.appId, {
                        header: r,
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
            r = n("QosV"),
            i = n("iTtm"),
            o = n("zd8w"),
            s = n("I7bK"),
            l = n("ipIJ"),
            c = n("kRV1"),
            u = n("Vlqh");
        n("kfGJ"), u.a;
        var d = n("ALWK"),
            p = n("tSEg"),
            f = n("yyZv"),
            m = n("C1SW"),
            g = n("vzzY");

        function h(e) {
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

        function b(e) {
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

        function v(e) {
            let t, n, u, h, b, v, y, w, I, _ = (0, r.c)(119),
                {
                    recipient: x,
                    analyticsContext: S,
                    resource: E,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: M,
                    reuseOnly: P,
                    conversationId: T,
                    fullSurface: k,
                    modalOpen: R,
                    hostScroll: N,
                    hostDisplayModes: j,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: q,
                    hostId: L,
                    hostedInThreadScrollLayout: U,
                    access: D,
                    lifetime: F,
                    mcpAppId: G,
                    mcpAppScope: W,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: z,
                    connectorId: V,
                    mcpAppHostAdapter: $,
                    getNewThreadDestination: J,
                    initialWidgetState: X,
                    widgetStatePersistence: K,
                    plaidAccountId: Y,
                    deepLink: Z,
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
                ep = void 0 === x ? null : x,
                ef = void 0 !== M && M,
                em = void 0 !== P && P,
                eg = void 0 !== k && k,
                eh = void 0 !== N && N,
                eb = void 0 !== q && q,
                ev = void 0 !== ei && ei,
                ey = (0, i.y)(p.a),
                ew = (0, i.x)(d.r, G),
                eI = (0, i.z)(f.a);
            _[0] !== ep ? (t = null == ep ? void 0 : e => (0, l.a)(ep, e), _[0] = ep, _[1] = t) : t = _[1];
            let e_ = t;
            _[2] !== F || _[3] !== G || _[4] !== ey ? (u = () => {
                if ("component" === F) return () => {
                    (0, d.y)(ey, G)
                }
            }, n = [F, G, ey], _[2] = F, _[3] = G, _[4] = ey, _[5] = n, _[6] = u) : (n = _[5], u = _[6]), (0, o.useLayoutEffect)(u, n);
            let ex = (0, o.useContext)(s.c)?.rightPanelLayoutTick,
                eS = void 0 !== z ? z : B?.data.find(e => {
                    let {
                        name: t
                    } = e;
                    return t === et
                })?.pluginId,
                {
                    bridge: eE,
                    pluginId: eA,
                    isLoading: eC
                } = (0, i.x)(c.a, {
                    hostId: L,
                    pluginId: eS,
                    connectorId: V,
                    server: et
                }),
                eM = eS ?? eA,
                eP = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: L,
                    pluginId: eM
                }) ? void 0 : eM,
                eT = E.isLoading || eC;
            _[7] !== j || _[8] !== eT || _[9] !== E ? (h = (0, m.c)({
                ...E,
                isLoading: eT
            }, j), _[7] = j, _[8] = eT, _[9] = E, _[10] = h) : h = _[10];
            let ek = h;
            return _[11] !== D || _[12] !== S || _[13] !== en || _[14] !== T || _[15] !== Z || _[16] !== ek || _[17] !== eE || _[18] !== eP || _[19] !== eg || _[20] !== J || _[21] !== C || _[22] !== ev || _[23] !== j || _[24] !== L || _[25] !== eh || _[26] !== U || _[27] !== eb || _[28] !== X || _[29] !== eI || _[30] !== O || _[31] !== $ || _[32] !== G || _[33] !== W || _[34] !== B || _[35] !== R || _[36] !== e_ || _[37] !== ef || _[38] !== Y || _[39] !== ep || _[40] !== A || _[41] !== ee || _[42] !== eS || _[43] !== em || _[44] !== ex || _[45] !== ey || _[46] !== et || _[47] !== ea || _[48] !== H || _[49] !== er || _[50] !== eo || _[51] !== eu || _[52] !== ec || _[53] !== es || _[54] !== el || _[55] !== ed || _[56] !== K ? (b = () => {
                eI || "ready" === ek.kind && null != D && (0, d.x)(ey, {
                    recipient: ep,
                    onSessionDispose: e_,
                    resource: ek.data,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: ef,
                    reuseOnly: em,
                    conversationId: T,
                    firstPartyPluginBridge: eE,
                    firstPartyPluginLoggerPluginId: eP,
                    fullSurface: eg,
                    modalOpen: R,
                    hostScroll: eh,
                    hostDisplayModes: j,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: eb,
                    hostId: L,
                    hostedInThreadScrollLayout: U,
                    access: D,
                    analyticsContext: S,
                    mcpAppId: G,
                    mcpAppScope: W,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: eS,
                    mcpAppHostAdapter: $,
                    getNewThreadDestination: J,
                    initialWidgetState: X,
                    widgetStatePersistence: K,
                    plaidAccountId: Y,
                    deepLink: Z,
                    rightPanelLayoutTick: ex,
                    resolveResourceWatchPath: ee,
                    server: et,
                    appIcon: en,
                    sidePanelTitle: ea,
                    title: er,
                    globalSurface: ev,
                    toolArguments: eo,
                    toolResult: es,
                    toolResultNotification: el,
                    toolCallStatus: ec,
                    toolCallCancellationReason: eu,
                    viewParamsOverride: ed
                })
            }, _[11] = D, _[12] = S, _[13] = en, _[14] = T, _[15] = Z, _[16] = ek, _[17] = eE, _[18] = eP, _[19] = eg, _[20] = J, _[21] = C, _[22] = ev, _[23] = j, _[24] = L, _[25] = eh, _[26] = U, _[27] = eb, _[28] = X, _[29] = eI, _[30] = O, _[31] = $, _[32] = G, _[33] = W, _[34] = B, _[35] = R, _[36] = e_, _[37] = ef, _[38] = Y, _[39] = ep, _[40] = A, _[41] = ee, _[42] = eS, _[43] = em, _[44] = ex, _[45] = ey, _[46] = et, _[47] = ea, _[48] = H, _[49] = er, _[50] = eo, _[51] = eu, _[52] = ec, _[53] = es, _[54] = el, _[55] = ed, _[56] = K, _[57] = b) : b = _[57], _[58] !== Q || _[59] !== D || _[60] !== S || _[61] !== en || _[62] !== T || _[63] !== Z || _[64] !== ek || _[65] !== eE || _[66] !== eP || _[67] !== eg || _[68] !== J || _[69] !== C || _[70] !== ev || _[71] !== j || _[72] !== L || _[73] !== eh || _[74] !== U || _[75] !== eb || _[76] !== X || _[77] !== eI || _[78] !== eT || _[79] !== O || _[80] !== F || _[81] !== $ || _[82] !== G || _[83] !== W || _[84] !== B || _[85] !== R || _[86] !== e_ || _[87] !== ef || _[88] !== Y || _[89] !== ep || _[90] !== A || _[91] !== ee || _[92] !== eS || _[93] !== em || _[94] !== ex || _[95] !== ey || _[96] !== et || _[97] !== ea || _[98] !== H || _[99] !== er || _[100] !== eo || _[101] !== eu || _[102] !== ec || _[103] !== es || _[104] !== el || _[105] !== ed || _[106] !== K ? (v = [S, C, A, ek, ef, em, ep, e_, T, eE, eP, eg, R, eh, j, O, eb, L, U, D, eI, eT, F, G, W, H, B, eS, $, J, X, K, Y, Z, Q, ex, ee, ey, et, en, ea, er, ev, eo, es, el, ec, eu, ed], _[58] = Q, _[59] = D, _[60] = S, _[61] = en, _[62] = T, _[63] = Z, _[64] = ek, _[65] = eE, _[66] = eP, _[67] = eg, _[68] = J, _[69] = C, _[70] = ev, _[71] = j, _[72] = L, _[73] = eh, _[74] = U, _[75] = eb, _[76] = X, _[77] = eI, _[78] = eT, _[79] = O, _[80] = F, _[81] = $, _[82] = G, _[83] = W, _[84] = B, _[85] = R, _[86] = e_, _[87] = ef, _[88] = Y, _[89] = ep, _[90] = A, _[91] = ee, _[92] = eS, _[93] = em, _[94] = ex, _[95] = ey, _[96] = et, _[97] = ea, _[98] = H, _[99] = er, _[100] = eo, _[101] = eu, _[102] = ec, _[103] = es, _[104] = el, _[105] = ed, _[106] = K, _[107] = v) : v = _[107], (0, o.useLayoutEffect)(b, v), _[108] !== Q || _[109] !== F || _[110] !== G || _[111] !== ey || _[112] !== ew ? (y = () => {
                "component" !== F && null != ew && (0, g.b)(ey, {
                    Frame: Q,
                    lifetime: F,
                    sessionId: ew,
                    sourceMcpAppId: G
                })
            }, w = [Q, F, G, ew, ey], _[108] = Q, _[109] = F, _[110] = G, _[111] = ey, _[112] = ew, _[113] = y, _[114] = w) : (y = _[113], w = _[114]), (0, o.useLayoutEffect)(y, w), _[115] !== Q || _[116] !== F || _[117] !== ew ? (I = "component" === F && null != ew ? (0, a.jsx)(Q, {
                sessionId: ew
            }, ew) : null, _[115] = Q, _[116] = F, _[117] = ew, _[118] = I) : I = _[118], I
        }
    })
};