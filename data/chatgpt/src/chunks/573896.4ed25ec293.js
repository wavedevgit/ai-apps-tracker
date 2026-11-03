export const __rspack_esm_ids = [573896];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => o,
            c: () => a,
            d: () => w,
            e: () => v,
            f: () => S,
            g: () => _,
            h: () => x
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
                        }, v = m(o).withOptions(h), y = m(l).withOptions(h), w = m(u).withOptions(h), I = m(p).withOptions(h), _ = !1, S = async e => {
                            if (n?.(), _) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (_ = !0, b()), t
                        }, x = {
                            next: e => S(() => y(e)),
                            return: e => S(() => w(e)),
                            throw: e => S(() => I(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => (async e => {
                                n?.(), await e(), _ = !0, b(), n = () => {
                                    throw Error("This generator has been disposed.")
                                }
                            })(() => v()),
                            [Symbol.asyncIterator]: () => x
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
                        }), x
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

        function S() {
            let {
                origin: e,
                isStaging: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return `${e??(t?"https://staging-web-sandbox.oaiusercontent.com":"https://web-sandbox.oaiusercontent.com")}?${t?"unsafeSkipTargetOriginCheck=true":""}`
        }

        function x(e) {
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
            S = n("tSEg"),
            x = n("DKJJ");

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
                    sessionId: T,
                    sourceMcpAppId: P,
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
                    j = (0, x.g)({
                        toolResult: k
                    }),
                    N = h.c.safeParse(j?._meta ?? j).data,
                    O = (e, a, r) => {
                        let {
                            accountId: i,
                            uiUserId: o
                        } = C;
                        null == i || null == o || t.get(S.j) || t.get(b.q, T)?.sourceMcpAppId !== P || (0, w.a)({
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
                            let S = t.query.snapshot(I.k, {
                                hostId: a,
                                marketplacePath: null,
                                pluginName: c,
                                remoteMarketplaceName: i.Xc
                            });
                            await S.invalidate({
                                refetchType: "none"
                            });
                            let [x, E] = await Promise.all([S.getOrFetch(), (0, p.a)(t, a, n)]);
                            if (!x.summary.installed || !x.summary.enabled || null != x.summary.remotePluginId && x.summary.remotePluginId !== c || !x.apps.every(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return E.has(t)
                                }) || (await (0, v.a)({
                                    scope: t,
                                    authPolicy: x.summary.authPolicy,
                                    codexHome: void 0,
                                    hostId: a,
                                    plugin: (0, _.b)(x),
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
                        let i = e => !e(S.j) && e(b.q, T)?.sourceMcpAppId === P,
                            o = h.d.safeParse(t.get(b.v, T) ?? {});
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
                            of f) O(e, N?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss");
                        t.set(b.v, T, {
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
            f = n("C1SW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, h, b, v = (0, r.c)(32),
                    {
                        error: y,
                        errorTitle: w,
                        errorIllustration: I,
                        fullSurface: _,
                        inlineSurface: S,
                        onRetry: x,
                        renderErrorActions: E,
                        pluginName: A
                    } = e,
                    C = void 0 !== _ && _,
                    M = (0, o.a)();
                v[0] !== M ? (t = M.formatMessage({
                    id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
                    defaultMessage: "Timeout details",
                    description: "Accessible label for the app startup timeout information button."
                }), v[0] = M, v[1] = t) : t = v[1];
                let T = t,
                    P = w;
                if (null == P)
                    if (y instanceof f.b) {
                        let e, t, n, r, i, o = A ? "yes" : "no";
                        v[2] !== A || v[3] !== o ? (e = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeout",
                            defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                            description: "Shown when the app does not respond to the host during startup.",
                            values: {
                                hasName: o,
                                appName: A
                            }
                        }), v[2] = A, v[3] = o, v[4] = e) : e = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {
                            id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
                            defaultMessage: "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes.",
                            description: "Developer hint for an app startup timeout. Keep the protocol method names unchanged."
                        }), v[5] = t) : t = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(c.ge, {
                            className: "text-secondary"
                        }), v[6] = n) : n = v[6], v[7] !== T ? (r = (0, a.jsx)(u.a, {
                            cloneCustomTrigger: !0,
                            openOnClick: !0,
                            tooltipContent: t,
                            children: (0, a.jsx)(l.a, {
                                size: "inline",
                                color: "ghost",
                                "aria-label": T,
                                children: n
                            })
                        }), v[7] = T, v[8] = r) : r = v[8], v[9] !== e || v[10] !== r ? (i = (0, a.jsxs)("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [e, r]
                        }), v[9] = e, v[10] = r, v[11] = i) : i = v[11], P = i
                    } else if (null == A) {
                    let e;
                    v[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayUnnamedApp
                    }), v[12] = e) : e = v[12], P = e
                } else {
                    let e;
                    v[13] !== A ? (e = (0, a.jsx)(s.a, {
                        ...p.a.displayApp,
                        values: {
                            appName: A
                        }
                    }), v[13] = A, v[14] = e) : e = v[14], P = e
                }
                v[15] !== C || v[16] !== x ? (n = null != x ? (0, a.jsx)(l.a, {
                    color: "secondary",
                    size: C ? "large" : "compact",
                    onClick: () => x(),
                    children: (0, a.jsx)(s.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again",
                        description: "Button label to retry loading an MCP app"
                    })
                }) : null, v[15] = C, v[16] = x, v[17] = n) : n = v[17];
                let k = n;
                v[18] !== E || v[19] !== k ? (m = E ? E(k) : k, v[18] = E, v[19] = k, v[20] = m) : m = v[20];
                let R = m,
                    j = C ? "h-full" : "h-60",
                    N = !C && "standalone" === (void 0 === S ? "standalone" : S) && "overflow-hidden rounded-lg border border-strong";
                v[21] !== j || v[22] !== N ? (g = (0, i.b)(j, N), v[21] = j, v[22] = N, v[23] = g) : g = v[23];
                let O = !C;
                return v[24] !== R || v[25] !== I || v[26] !== P || v[27] !== O ? (h = (0, a.jsx)(d.a, {
                    compact: O,
                    title: P,
                    illustration: I,
                    description: null,
                    actions: R
                }), v[24] = R, v[25] = I, v[26] = P, v[27] = O, v[28] = h) : h = v[28], v[29] !== h || v[30] !== g ? (b = (0, a.jsx)("div", {
                    className: g,
                    children: h
                }), v[29] = h, v[30] = g, v[31] = b) : b = v[31], b
            }
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
            S = n("zd8w"),
            x = n("v7qY"),
            E = n("Wf1j"),
            A = n("jqIZ"),
            C = n("ASxG"),
            M = n("KJ1J");
        let T = {
            $type: "protobuf_analytics_events.v1.ChatgptAdsManagerWidgetEvent"
        };
        var P = n("PFjh"),
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
            D = C.array(C.object({
                key: C.string(),
                value: C.unknown().optional()
            }).nullable().catch(null)),
            U = C.discriminatedUnion("type", [C.object({
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
                tags: D
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
            K = n("SK3E"),
            X = n("gbrq"),
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
            eS = n("RFeS"),
            ex = n("lu7q"),
            eE = n("we56");
        let eA = C.object({
            prompt: C.enum(["olympic_onboarding_completed", "olympic_onboarding_cancelled"])
        });
        var eC = n("o62A"),
            eM = n("SRbQ"),
            eT = n("TL6G");
        class eP {
            params;
            notificationSink = null;
            subscriptions = new Map;
            constructor(e) {
                this.params = e
            }
            connectNotificationSink(e) {
                this.notificationSink = e;
                let t = eT.c.subscribe("mcp-event-notification", t => {
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
                let t = eT.c.subscribe("mcp-resource-updated", t => {
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
                } = this.params, a = `${t}\0${n}`, r = (eN.get(a) ?? Promise.resolve()).then(e), i = r.then(() => void 0, () => void 0);
                return eN.set(a, i), i.then(() => {
                    eN.get(a) === i && eN.delete(a)
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
                let n = t ?? (0, ej.c)({
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
        var eD = n("zxca"),
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

        function eJ(e) {
            try {
                return e()
            } catch (e) {
                if (e instanceof Error) throw (0, eB.a)(e.message, c.q.InternalError);
                throw e
            }
        }

        function eK(e, t) {
            let n = eV.safeParse(e);
            return n.success ? (0, eB.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eB.a)(e.message, -32e3, e) : (0, eB.a)(t, -32e3, e)
        }
        var eX = n("JXtc"),
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
            let t, n, a, r, i = (0, s.c)(22),
                {
                    panelTabId: o,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, y.y)(e7.a),
                p = (0, y.z)(to.b) ?? d,
                f = null != (0, y.x)(ts, o);
            i[0] !== p ? (t = (0, tr.getThreadBrowserConversationId)(p), i[0] = p, i[1] = t) : t = i[1];
            let m = t;
            i[2] !== o || i[3] !== p ? (n = () => {
                let e = p.get(ti.f, o);
                null != o && null != e && (0, ti.activateThreadPanelTab)(p, e, o)
            }, i[2] = o, i[3] = p, i[4] = n) : n = i[4];
            let g = (0, S.useEffectEvent)(n);
            return i[5] !== m || i[6] !== f || i[7] !== o || i[8] !== g || i[9] !== l || i[10] !== c || i[11] !== p || i[12] !== u ? (a = () => {
                if (!f || null == m || e5.appServices?.mcpAppSandbox == null) return;
                let e = (0, _.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = e5.appServices.mcpAppSandbox.registerBrowserTarget({
                    conversationId: m,
                    initId: e,
                    sandboxId: c,
                    title: u
                }, g, (e, t) => (async function(e, t, n) {
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
                    } = e, a = n(ti.f, o), r = !n(e7.j) && null != a && ("bottom" === a ? n(X.d) : n(X.i) && n(X.j)) && n((0, ti.getThreadPanelTabController)(a).visibleTabs$).some(e => {
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
            }, i[5] = m, i[6] = f, i[7] = o, i[8] = g, i[9] = l, i[10] = c, i[11] = p, i[12] = u, i[13] = a) : a = i[13], i[14] !== m || i[15] !== f || i[16] !== o || i[17] !== l || i[18] !== c || i[19] !== p || i[20] !== u ? (r = [o, m, f, l, c, u, p], i[14] = m, i[15] = f, i[16] = o, i[17] = l, i[18] = c, i[19] = p, i[20] = u, i[21] = r) : r = i[21], (0, S.useEffect)(a, r), null
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
                o = (0, y.y)(e6.a),
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
            }, n = [l, c, r, i, o, u], a[0] = u, a[1] = l, a[2] = r, a[3] = i, a[4] = o, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, S.useEffect)(t, n), null
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

        function tS() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tx(e) {
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
        let tE = (0, y.j)(e6.a, e => {
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
            tT = n("WSFD"),
            tP = n("fm8Z"),
            tk = n("IhIa");
        let tR = C.union([h.b, C.object({
                target: C.enum(["active", "new"]).optional(),
                send: C.literal(!1)
            }).strict()]),
            tj = h.c.extend({
                _meta: h.c.shape._meta.unwrap().extend({
                    "openai/message": tR.optional()
                }).optional()
            });

        function tN(e) {
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
        let tL = (0, y.j)(e8.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, r = a.get(Z.w).find(t => t.id === e && "context" === t.kind);
                return r?.modelContextUpdateId == null ? null : {
                    updateId: r.modelContextUpdateId,
                    content: r.content?.length ? r.content : void 0,
                    structuredContent: r.structuredContent
                }
            }, {
                isEqual: v()
            })
        });
        var tD = n("slpy"),
            tU = n("ygO2"),
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
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== h || u[3] !== v || u[4] !== w || u[5] !== I ? (n = (0, o.jsx)(tU.a, {
                "aria-label": d,
                color: w,
                disabled: I,
                onClick: h,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = h, u[3] = v, u[4] = w, u[5] = I, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, o.jsx)(tD.a, {
                content: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let _ = f ? y : "ghost",
                S = !f;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, o.jsx)(tF.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tG.a
            }), u[10] = r) : r = u[10], u[11] !== g || u[12] !== b || u[13] !== v || u[14] !== _ || u[15] !== S ? (i = (0, o.jsx)(tU.a, {
                "aria-label": g,
                color: _,
                disabled: S,
                onClick: b,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: r
            }), u[11] = g, u[12] = b, u[13] = v, u[14] = _, u[15] = S, u[16] = i) : i = u[16], u[17] !== g || u[18] !== i ? (l = (0, o.jsx)(tD.a, {
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
            tK = n("JNpY"),
            tX = n("IWEP");
        let tY = C.preprocess(function(e, t) {
            let n = new WeakSet,
                a = C.record(C.string(), C.unknown()),
                r = (e, i) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: i,
                        message: "Cyclic tool arguments"
                    }), tX.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => r(e, [...i, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...i, ...e.path]
                            });
                            return tX.e
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
            t6 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t8 = C.json(),
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
                arguments: C.record(C.string(), t8).optional(),
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
            }, n = [p, c], r[0] = p, r[1] = c, r[2] = t, r[3] = n) : (t = r[2], n = r[3]), (0, S.useEffect)(t, n), r[4] !== d || r[5] !== f || r[6] !== u || r[7] !== c ? (a = null == f ? null : (0, o.jsx)(nd, {
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
                x = _?.content ?? null,
                E = x?.mcpAppHostAdapter?.retain;
            d[1] !== b || d[2] !== p ? (n = () => (0, tV.b)(b, p), a = [b, p], d[1] = b, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, S.useLayoutEffect)(n, a), d[5] !== E || d[6] !== b || d[7] !== f ? (r = () => E?.(b, f), i = [E, b, f], d[5] = E, d[6] = b, d[7] = f, d[8] = r, d[9] = i) : (r = d[8], i = d[9]), (0, S.useLayoutEffect)(r, i);
            let A = (0, y.x)(B.c, x?.access ?? null);
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
                }, c = [f, _, b, I, A], d[10] = A, d[11] = _, d[12] = b, d[13] = I, d[14] = f, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, S.useLayoutEffect)(l, c), !v || I || m.isSuspended || nm(m.sandboxError) || null == _ || null == x || "current" !== A) return null;
            let C = (0, eC.c)(x);
            if (C && (null == x.toolResult || null != x.toolCallStatus)) return null;
            let M = C ? np : nf;
            return d[17] !== M || d[18] !== h || d[19] !== x || d[20] !== m || d[21] !== _.hostedInThreadScrollLayout || d[22] !== _.inlineFrameAnchor || d[23] !== p || d[24] !== f ? (u = (0, o.jsx)(M, {
                ...x,
                resource: x.resource,
                hostedInThreadScrollLayout: _.hostedInThreadScrollLayout,
                inlineFrameAnchor: _.inlineFrameAnchor,
                allowGlobalHost: h,
                sessionId: p,
                sourceMcpAppId: f,
                frameState: m
            }, m.sandboxGeneration), d[17] = M, d[18] = h, d[19] = x, d[20] = m, d[21] = _.hostedInThreadScrollLayout, d[22] = _.inlineFrameAnchor, d[23] = p, d[24] = f, d[25] = u) : u = d[25], u
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
                fullSurface: D,
                modalOpen: F = !1,
                hostScroll: B = !1,
                hostDisplayModes: ef,
                hostId: em,
                hostedInThreadScrollLayout: eh,
                access: eM,
                inheritHostBackground: eT = !1,
                installPlugin: ek,
                inlineFrameAnchor: eN,
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
                toolResult: tD,
                toolResultNotification: tU,
                toolCallStatus: tF,
                toolCallCancellationReason: tG,
                viewParamsOverride: tW,
                frameState: tB
            } = e, tV = (0, y.y)(e7.a), tX = (0, y.y)(e6.a), tY = (0, S.useSyncExternalStore)(eN.subscribe, eN.getSnapshot, () => null), t0 = (0, S.useEffectEvent)(() => tV), t3 = (0, S.useEffectEvent)(() => eM.assertActive()), {
                csp: t8,
                fitWidth: nn,
                html: nc,
                sandboxOrigin: nd,
                serverOrigin: np
            } = a, nf = a.prefersBorder && !e4?.hideFrameBorder, ng = "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : null, nh = null != t, nb = (0, S.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), nv = !nh || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", ny = (0, y.x)(H.d, em), nw = (0, y.x)(H.hc, {
                hostId: em,
                threadId: i
            }), nI = null != nw && "notLoaded" !== nw.type, n_ = !(0, M.e)(tp) && t8?.connectDomains.some(e => (0, eX.d)(new URL(e).hostname)) === !0, nS = (0, ta.a)(eM, r), nx = null != np ? new URL(np) : null, nE = e4?.sandboxFeatures?.join(";"), nA = e4?.sandboxFeatures?.includes("local-network-access") === !0 || (0, eX.f)(t8) || n_ && nx?.protocol === "https:" && (0, eX.d)(nx.hostname), nC = (0, E.a)(), nM = (0, A._)(), nT = t?.value.kind === "chatgpt" && null != t.value.conversationId && i === `chatgpt:${t.value.conversationId}`, nP = i.startsWith("chatgpt:") ? "chatgpt" : "codex", nk = (0, y.z)(t?.get(tL, eL) ?? null), nR = (0, S.useEffectEvent)(() => t?.get(tL, eL).get() ?? null), nj = (0, y.z)($.j.activeTab$), nN = (0, y.z)(X.g), nO = (0, y.z)(to.a), nq = (0, y.z)(eE.a), nL = nq["--color-background-primary"], {
                isWidgetReady: nD
            } = tB, nU = (0, eI.f)(tB), nF = !D && "fullscreen" === nU, nG = (0, eI.e)(tB), nW = D && eq, nH = (0, S.useRef)(!1), nB = (0, S.useRef)(null), nz = (0, S.useRef)(null), nV = (0, S.useRef)(null), n$ = (0, S.useRef)(null), nJ = (0, y.x)(eI.h, eL), nK = (0, S.useRef)(null), nX = (0, S.useRef)(null), nY = e => {
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
            }, [nZ, nQ] = (0, S.useState)(null), [n0, n1] = (0, S.useState)(null), [n2, n3] = (0, S.useState)(!1), [n5, n6] = (0, S.useState)(null), [n8, n7] = (0, S.useState)(null), n4 = n8?.api ?? null, n9 = n8?.widgetId ?? null, ae = (0, tt.a)(e => tu?.(e) ?? null), at = (0, M.e)(tp) && (0, w.Eh)(ny, "mcpEventStream"), an = (0, S.useMemo)(() => new eO({
                scope: tX,
                hostId: em,
                mcpAppId: eL,
                originResourceUri: eV.originResourceUri,
                resolveResourceWatchPath: ae,
                server: tp
            }), [tX, em, eL, eV.originResourceUri, ae, tp]), aa = (0, S.useMemo)(() => new eP({
                scope: tX,
                hostId: em,
                server: tp
            }), [tX, em, tp]), [ar, ai] = (0, S.useState)(nl), ao = null != ng && ne.has(ng), as = ao && null != n4 && (ar.canGoBack || ar.canGoForward), {
                cancel: al,
                confirmation: ac,
                confirm: au,
                request: ad
            } = (0, e_.a)(ex.a), ap = e4?.viewerHeader === !0, af = e4?.forwardedRequestMethods, am = af?.join(";") || void 0, ag = JSON.stringify(e4?.experimentalCapabilities), ah = e4?.openFile, ab = (0, y.z)(e7.j), av = (0, y.x)(G.a, {
                name: "codex.browser"
            }), ay = !ab && av.isCapable, aw = ay || nh && nv, aI = !ab && (void 0 === ah ? (0, w.qi)((0, ey.a)(tX, em)) : null != ah), a_ = null != e4, aS = e4?.expectedReadySignal, ax = e4?.pluginSuggestions != null, aE = !0 === eV.isVerifiedFirstParty, aA = e4?.displayMode === "modal", aC = (0, S.useEffectEvent)(() => e4), aM = e4?.onRequestClose != null || eh, aT = function(e) {
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
                connectorId: ng,
                widgetScope: eV
            }), aP = null != aT, ak = aT?.requestTargetedReply != null || e4?.setTargetedReply != null || e4?.requestTargetedReply != null, aR = aP || e4?.showToast != null, aj = (0, S.useEffectEvent)(() => aT), aN = (0, S.useEffectEvent)(e => aT?.viewMode ?? e4?.displayMode ?? e), aO = function(e) {
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
                connectorId: ng,
                widgetScope: eV
            }), aq = e4?.requestCheckout != null, aL = e4?.openConversationOverlay != null, aD = e4?.openPromptInput != null, aU = e4?.autofill != null, aF = e4?.openInApp != null, aG = aF && e4?.openInApp?.hideButton !== !0 && e4?.openInApp?.baseUrl != null && null !== tB.openInAppUrl, aW = e4?.presentation != null, aH = e4?.presentation?.requestFocusedObject != null, aB = e4?.presentation?.requestCloseFocusedObject != null, az = e4?.presentation?.isSidebarOpen === !0, aV = e4?.downloadBlob != null, a$ = e4?.triggerHaptic != null, aJ = e4?.files != null, aK = e4?.share != null, aX = e4?.requestConnectSheet != null, aY = e4?.requestReconnectConnector != null, aZ = e4?.requestLinkToConnector != null, aQ = e4?.isTombstone === !0, a0 = (0, S.useEffectEvent)(() => aO), a1 = function(e, t) {
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
                            let a = j.safeParse(t);
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
                                    let n = N.safeParse(r);
                                    "count" === t.type && n.success && e.get(P.a).count("payments", "payment_elements_stage", n.data)
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
                                    }, l = e.get(P.a);
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
                            } = L[o.label], r = o.payload;
                            if (!r[n]) return;
                            (0, k.a)(e, T, {
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
                        e.get(P.a).count("ecosystem", o.label, d)
                    })(e, t, {
                        conversationId: i,
                        originResourceUri: o
                    })
                }
            }(tV, {
                server: tp,
                connectorId: ng,
                widgetScope: eV,
                conversationId: i
            }), a2 = (0, S.useEffectEvent)(() => a1), a3 = null != ti && (0, M.e)(tp) && a_ && ng === eu.a, a5 = (0, S.useMemo)(() => null != tR && "object" == typeof tR ? tR : null, [tR]), a6 = (0, S.useMemo)(() => null == tD ? null : (0, eF.f)({
                isCodexAppsServer: (0, M.e)(tp),
                toolResult: tD
            }), [tp, tD]), a8 = (0, S.useMemo)(() => null == a6 ? null : (0, e0.b)(a6), [a6]), a7 = void 0 === tW ? a8 : tW, a4 = (0, S.useEffectEvent)(() => a7), a9 = (0, S.useMemo)(() => null == a6 ? null : (0, eF.g)({
                toolResult: a6
            }), [a6]), re = (0, S.useMemo)(() => tU ?? (0, e0.a)(a6, {
                preserveStructuredContentNull: e4?.preserveStructuredContentNull
            }), [e4?.preserveStructuredContentNull, tU, a6]), rt = tF ?? (re?.isError === !0 ? "error" : void 0), rn = (0, S.useMemo)(() => null == rt ? a9 : {
                ...a9,
                status: rt
            }, [rt, a9]), ra = (0, S.useEffectEvent)(() => ({
                sourceMcpAppId: eH,
                toolInput: a5,
                toolOutput: a8,
                toolResponseMetadata: rn,
                toolStatus: rt,
                toolResult: a6,
                toolResultNotification: re,
                toolCallCancellationReason: tG
            })), rr = (0, S.useEffectEvent)(e => null == ek || null != rt ? null : (0, eC.a)({
                scope: tV,
                conversationId: i,
                hostId: em,
                installPlugin: ek,
                mcpAppScope: eV,
                navigate: nM,
                access: eM,
                server: tp,
                sessionId: eL,
                sourceMcpAppId: eH,
                toolResult: e
            })), ri = null == nd ? void 0 : (0, tK.c)(nd, nC.locale), ro = eM.getSandboxPartition?.(a) ?? _.b, rs = (0, S.useMemo)(() => {
                if (null == ri) return null;
                let e = (0, tK.a)(ri);
                return nA ? `local-network-${e}` : e
            }, [nA, ri]), rl = (0, S.useEffectEvent)(() => {
                if (null == ri) return null;
                let e = (0, _.i)(ri);
                return null == e ? null : {
                    csp: t8,
                    experimentalCapabilities: e4?.experimentalCapabilities,
                    html: nc,
                    locale: nC.locale,
                    sandboxOrigin: e,
                    sourceUrl: ri
                }
            }), rc = n5?.isConnected === !0 ? n5 : null, ru = tY?.isConnected === !0 ? tY : null, rd = null != ru || null != rc, rp = !nF && !D && tY?.dataset.mcpAppInlineSurface === "card", rf = "iframe", rm = "function" == typeof nZ?.moveBefore, rg = F && rm, rh = ru ?? (!nF && nZ?.isConnected ? nZ.parentElement : null), rb = rh?.closest("[data-mcp-app-scroll-host]"), rv = !nF && (!D && B || null != rb), ry = eq && !rv && (rm || !eh), rw = ry ? null : rh?.closest("[data-mcp-app-portal-target='true']") ?? (!rm && nZ?.isConnected ? nZ.parentElement : null), rI = rm || ry ? nZ : rw, r_ = (0, S.useEffectEvent)(e => {
                let t = t_(e, D, nF ? "fullscreen" : "inline");
                return !D && "inline" === nU && nn && ru?.parentElement != null && (t.maxWidth = ru.parentElement.clientWidth), {
                    containerDimensions: t
                }
            }), rS = (0, S.useEffectEvent)(() => {
                (0, ep.c)(t0(), {
                    hostId: em,
                    pluginId: q,
                    server: tp
                }, eL)
            }), rx = (0, S.useEffectEvent)(() => ({
                safe: {
                    connectorId: ng,
                    mcpAppId: eL,
                    sandboxId: rs,
                    initId: (0, _.g)(n0?.getAttribute("src") ?? void 0)
                },
                sensitive: {
                    hostId: em,
                    server: tp
                }
            })), rE = (0, S.useEffectEvent)(e => {
                (0, k.a)(tV, u.o, {
                    attributionId: ng ?? void 0,
                    conversationId: "chatgpt" === nP ? i.slice(8) : void 0,
                    host: "chatgpt" === nP ? "chatgpt" : void 0,
                    errorSource: e,
                    wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                })
            }), rA = (0, S.useEffectEvent)((e, t) => {
                if (nm(t0().get(eI.q, eL)?.sandboxError)) return;
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
                }), n$.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), "handshake" === e && t instanceof Error && "TimeoutError" === t.name && 0 === tB.sandboxGeneration) ? (0, eI.C)(t0(), eL, {
                    sandboxGeneration: 1
                }) : (0, eI.C)(t0(), eL, {
                    isWidgetReady: !1,
                    sandboxError: n
                })
            }), rC = (0, S.useEffectEvent)(e => {
                let t = ns.safeParse(e);
                t.success && tV.get(eI.q, eL)?.displayMode === "inline" && (0, eI.C)(tV, eL, {
                    intrinsicHeight: t.data
                })
            }), rM = (0, S.useEffectEvent)(e => {
                let t = ns.safeParse(e);
                nn && t.success && (0, eI.C)(tV, eL, {
                    intrinsicWidth: t.data
                })
            }), rT = (0, S.useEffectEvent)(e => {
                if (!ao) return;
                let t = t9.safeParse(e);
                t.success && ai({
                    canGoBack: t.data.canGoBack,
                    canGoForward: t.data.canGoForward
                })
            }), rP = (0, S.useEffectEvent)(() => eh ? void(0, eI.b)(tV, eL) : e4?.onRequestClose?.()), rk = (0, S.useEffectEvent)(async (e, n) => {
                if (e4?.openExternal != null && await e4.openExternal(e, n)) return;
                let a = eU.c.safeParse(e);
                if (a.success) {
                    if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eV.isVerifiedFirstParty) return void(0, eG.a)(tV, a.data.href);
                    if ("popup" !== a.data.openMode && e4?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && s?.onOpenLink != null && await s.onOpenLink(t ?? tV, a.data.href, n)) return;
                    let e = (0, w.uj)(a.data.href);
                    if (null != e) return void nM(e);
                    (0, el.f)({
                        href: a.data.href,
                        initiator: "mcp_app_resource",
                        openTarget: e4?.displayMode === "modal" ? "external-browser" : void 0
                    })
                }
            }), rR = (0, S.useEffectEvent)(async (e, t) => {
                if (!a3 || null == ti) throw Error("Plaid Link is unavailable for this app");
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
            }), rj = (0, S.useEffectEvent)((e, t, n) => (async function(e, t) {
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
                requestModal: aO?.requestModal,
                payload: e,
                signal: t,
                accountId: ti,
                frameAccountId: n
            })), rN = (0, S.useEffectEvent)(e => (function(e) {
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
                composerOverlayReservePx: nO,
                displayMode: D ? "inline" : e,
                hasComposerOverlay: nW,
                hostAdapter: aC(),
                showNavigationControls: as
            })), rO = (0, S.useEffectEvent)(() => {
                let e = tV.get(eI.q, eL) ?? tB;
                return {
                    displayMode: e.displayMode,
                    availableDisplayModes: e.availableDisplayModes ?? ef
                }
            }), rq = (0, S.useEffectEvent)(e => {
                let t = (0, eI.g)(tV, eL, e);
                if (null == t) throw Error("The app has no supported display mode");
                return {
                    ...rO(),
                    safeAreaInsets: rN(t).insets
                }
            }), rL = (0, S.useEffectEvent)(e => {
                let t = t7.safeParse(e),
                    n = tV.get(eI.q, eL);
                if (t.success && (0, eI.a)(n, t.data.mode)) {
                    let n = !D && "fullscreen" === t.data.mode,
                        a = t.data.mode;
                    if (n && !nF && nZ?.style.setProperty("display", "none"), aW && (0, eI.C)(tV, eL, {
                            displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                        }), (0, eI.A)(tV, eL, a, "app_request"), null != n4 && null != n9) {
                        let e = {
                            displayMode: a,
                            isTombstone: aC()?.isTombstone === !0,
                            viewParams: a7,
                            widgetId: n9
                        };
                        nB.current = e, e$(n4.setWidgetView(e));
                        let t = null == nZ ? null : tI({
                            ...rO(),
                            containerDimensions: t_(nZ, D, a),
                            locale: nC.locale,
                            deepLink: ts,
                            safeAreaInsets: rN(a).insets,
                            styleVariables: nq,
                            theme: tS(),
                            userAgent: tx(aC()?.device),
                            toolInfo: aC()?.toolInfo
                        });
                        nz.current = t, null != t && e$(n4.notifyMcpAppsHostContext({
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
            }), rD = (0, S.useEffectEvent)(() => ts), rU = (0, S.useEffectEvent)(() => tV.get(eI.h, eL)), rF = (0, S.useEffectEvent)(() => {
                var e;
                e = tf ?? void 0, null != t && (0, Q.h)(t, eL, e)
            });
            (0, S.useEffect)(() => {
                rF()
            }, [eL, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl]);
            let rG = (0, S.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tV.get(eI.q, eL)?.sourceMcpAppId !== eH) return;
                    let a = (null != tr ? t1.nullable() : t1).safeParse(t),
                        r = a.success ? a.data : null;
                    if (tV.set(eI.v, eL, r), null != tr && a.success) return tr.save(a.data, n)
                }),
                rW = e => {
                    null != n4 && e$(n4.navigate({
                        delta: e
                    }))
                },
                rH = {
                    name: null != e4 ? eV.originResourceUri ?? eV.originTool : `${tp}.${eV.originTool}`,
                    attribution: "connectorId" in eM.serverIdentity ? eM.serverIdentity.connectorId : void 0
                },
                rB = (0, S.useEffectEvent)(function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = (0, eo.getMcpAppSubmit)(t, () => {
                            eM.assertActive(), aC()?.assertActive?.()
                        });
                    return null == a ? null : (t, r) => a(t, n ? rH : {
                        ...rH,
                        visuallyHidden: !0
                    }, e, r)
                }),
                rz = async function(e, t, n, a, r, i) {
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tq.sendMcpAppMessage)({
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
                }, rV = (0, S.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eB.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let r = (a = aj(), n.aborted || a && eA.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != r) return r;
                    n.throwIfAborted();
                    let {
                        context: i,
                        isVisible: o,
                        prompt: l,
                        title: u
                    } = (0, ex.b)(e), d = rB(n, o);
                    if (null == d) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let p = t.get(Z.w).filter(e => "context" === e.kind),
                        f = crypto.randomUUID(),
                        m = "chatgpt" === t.value.kind ? s?.onFollowUp : void 0,
                        g = performance.now();
                    try {
                        await rz({
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
                }), r$ = e => {
                    e.throwIfAborted(), eM.assertActive(), e4?.assertActive?.()
                }, rJ = async (e, t, n, a) => {
                    r$(t);
                    let r = null != e4 ? await e4.handleRequest(e, t, eV, n) : await a();
                    return r$(t), r
                }, rK = async (e, t, n) => {
                    let a = await rJ({
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
                            throw eK(e, "MCP tool call failed")
                        }
                    })({
                        appScope: tX,
                        scope: tV,
                        chatGptMessageId: eV.chatGptMessageId,
                        conversationId: i,
                        getTrustedToolScope: nY,
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
                                initId: (0, _.g)(n0?.getAttribute("src") ?? void 0)
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
                }, rX = (0, S.useEffectEvent)(async (e, n, a) => {
                    let r = t?.get(e8.b);
                    return rK((0, eB.d)(na, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, r)
                }), rY = (0, S.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e8.b),
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
                            if (!aI) throw (0, eB.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != ah) return (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "file_open",
                                action: "requested"
                            }), await ah(e, n), {};
                            if (!(0, w.zh)(e) || !(0, w.Ch)(e)) throw (0, eB.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: tV,
                                path: e,
                                cwd: null,
                                hostConfig: (0, ey.a)(tX, em),
                                hostId: em,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return af?.includes("ping") ? rJ(r.data, n, a, async () => ({})) : {};
                        case "ui/message": {
                            let e = function(e) {
                                let t = tj.safeParse(e);
                                if (!t.success) throw Object.assign(Error("Invalid MCP app message params"), {
                                    code: -32602
                                });
                                let {
                                    content: n
                                } = t.data;
                                if (tN(n), !n.some(e => "text" !== e.type || e.text.trim().length > 0)) throw Object.assign(Error("An MCP app message cannot be empty"), {
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
                                    ...nS,
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
                                if (aC()?.assertActive?.(), "new" === e.options.target) {
                                    if (ab) throw (0, eB.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(tX, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eB.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(Z.v) || t.get(Z.V) || null != t.get(et.b) || t.get(ei.g) || t.get(Z.q) || !(0, eo.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, Z.Eb)(t, e => {
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
                            }, nC), s = !1;
                            e.options?.target === "new" && null != rs && e5.appServices?.mcpAppSandbox != null && (r$(n), s = await e5.appServices.mcpAppSandbox.consumeUserGesture((0, eU.a)(rs, n0)).catch(() => !1) === !0, r$(n));
                            let p = e.options?.target === "new" ? (0, tq.a)({
                                scope: tX,
                                recipient: t,
                                getNewThreadDestination: tn,
                                globalEntrypointIdentity: "global" === nS.source ? {
                                    connectorId: nS.connectorId,
                                    pluginId: nS.pluginId
                                } : void 0,
                                canCreateCodexThreads: ay,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (ab) throw (0, eB.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    r$(n)
                                },
                                sourceName: eY,
                                toolOrigin: rH,
                                signal: n
                            }) : rB(n);
                            if (null == p) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let f = t?.get(Z.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === eL
                            }) ?? [];
                            return await rz(i, r, p, n, void 0, o, f), null != t && (0, Q.b)(t, f), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eB.d)(nt, l, "Invalid MCP file download params");
                            return (0, te.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eB.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eB.d)(t2, l, "Invalid MCP model context params");
                            if (null != rB() && tN(e.content), nT && e.content?.some(e => "image" === e.type && !(0, w.zi)({
                                    type: e.mimeType
                                }))) throw (0, eB.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != tr && tV.get(eI.q, eL)?.sourceMcpAppId !== eH) throw (0, eB.a)("The widget source is no longer active", -32e3);
                            aC()?.onModelContextUpdate?.(e, eL), (0, J.a)(t);
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
                                }, null != t && ((0, Q.g)(t, n), (0, tJ.b)(tV, eL, t.get(Z.w).find(e => e.id === eL) ?? null)), r
                            })(e);
                            if ((0, k.a)(tV, d.CodexMcpExtensionAction, {
                                    ...nS,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != tr) {
                                var p = await rG(eH, e, !0);
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
                            return rK((0, eB.d)(na, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource read params");
                            if (r$(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                    ...nS,
                                    feature: "resource",
                                    action: "read"
                                }), e4?.readHostResource != null) {
                                r$(n);
                                let t = await e4.readHostResource(e, n);
                                if (r$(n), null != t) return t
                            }
                            return eJ(() => {
                                (0, eR.a)({
                                    mcpAppScope: eV,
                                    server: tp,
                                    uri: e.uri
                                })
                            }), await rJ({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, ej.d)({
                                        scope: tV,
                                        appContext: eV.appContext,
                                        connectorId: (0, M.e)(tp) ? ng : null,
                                        hostId: em,
                                        mcpAppId: eL,
                                        originCallId: eV.originCallId ?? null,
                                        threadId: i,
                                        server: tp,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw eK(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource subscribe params");
                            return r$(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "resource",
                                action: "subscribe"
                            }), await an.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP resource unsubscribe params");
                            return r$(n), (0, k.a)(tV, d.CodexMcpExtensionAction, {
                                ...nS,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await an.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eB.d)(ni, l, "Invalid MCP event subscribe params"),
                                t = tV.get(eI.i, eH)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nY(await eZ({
                                    scope: tV,
                                    hostId: em,
                                    mcpServerStatuses: e3,
                                    server: tp,
                                    threadId: o
                                }))), null == n) throw (0, eB.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return aa.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eB.d)(no, l, "Invalid MCP event unsubscribe params");
                            return aa.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return rJ(r.data, n, a, async () => {
                                let e = await eZ({
                                        scope: tV,
                                        hostId: em,
                                        mcpServerStatuses: (0, M.e)(tp) ? e3 : void 0,
                                        server: tp,
                                        threadId: o
                                    }),
                                    t = eQ(e),
                                    n = nY(e);
                                return {
                                    tools: eJ(() => (0, eR.e)({
                                        server: tp,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return rJ(r.data, n, a, async () => (0, M.e)(tp) ? {
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
                            return rJ(r.data, n, a, async () => (0, M.e)(tp) ? {
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
                            return rJ(r.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return rJ(r.data, n, a, async () => {
                                throw (0, eB.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                }), rZ = (0, S.useEffectEvent)(async (e, t) => {
                    let {
                        requestMcpAppModal: a
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(279799)]).then(n.bind(n, "Rq7I"));
                    r$(t), a(t0(), {
                        Frame: nu,
                        sourceMcpAppId: eH,
                        signal: t,
                        handleRequest: async (e, n) => c._.parse(await rY(e, n ?? t))
                    }, e)
                });
            (0, S.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nQ(e), () => {
                    e.remove(), nQ(t => t === e ? null : t), n3(!1)
                }
            }, [eL]), (0, S.useLayoutEffect)(() => {
                null != nZ && null != n0 && function(e) {
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
                    frameElement: nZ,
                    sandboxElement: n0,
                    fullSurface: D,
                    liftModal: rg,
                    inheritHostBackground: eT,
                    isCardInlineSurface: rp,
                    isFullScreen: nF,
                    isWidgetVisible: nD && null != nU,
                    prefersBorder: nf,
                    surfaceBackgroundColor: nL,
                    title: tv,
                    globalSurface: tk
                })
            }, [D, rg, nZ, eT, rp, nF, nD, nU, nf, n0, nL, tv, tk]), (0, S.useLayoutEffect)(() => {
                if (null == nZ) return;
                let e = nF ? rc : ru,
                    t = ry ? (0, K.a)() : rw;
                if (rg && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nZ.style.display;
                    nZ.style.display = "none", e || eb.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: rx().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                let n = () => {
                    if (nZ.parentElement !== t && (nZ.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nZ, null) : t.appendChild(nZ), eb.a.debug("Attached app widget", {
                            safe: {
                                mcpAppId: rx().safe.mcpAppId,
                                showInModal: rg
                            }
                        })), n2 || n3(!0), null == e) {
                        let e = "none" === nZ.style.display;
                        nZ.style.display = "none", e || eb.a.debug("Hid app widget", {
                            safe: {
                                mcpAppId: rx().safe.mcpAppId,
                                reason: "missing_anchor"
                            }
                        });
                        return
                    }
                    return delete nZ.dataset.mcpAppParked,
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
                                    t = (0, tT.a)(c, e),
                                    u = {
                                        ...t
                                    },
                                    d = s || r ? c.closest('[data-app-shell-focus-area="right-panel"]') : null,
                                    f = "";
                                i ? f = "" : null != d && (f = (0, tT.b)(t, (0, tT.a)(d, e))), n.style.position = p ? "fixed" : "absolute";
                                let h = null;
                                if (p ? l || i || (h = n.offsetParent) : h = a, null != h) {
                                    let t = (0, tT.a)(h, e);
                                    u.x -= t.x, u.y -= t.y
                                }
                                p || (u.x += a.scrollLeft, u.y += a.scrollTop);
                                let b = "";
                                i || (b = s ? "43" : "1"), Object.assign(n.style, {
                                    ...(0, tT.d)(u, e / (a.currentCSSZoom ?? 1)),
                                    clipPath: f,
                                    display: "",
                                    zIndex: b
                                });
                                let v = r || s ? (0, tT.c)(c) : null;
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
                                I = (0, tP.a)({
                                    update: b,
                                    motionValues: [d, s ? u : void 0]
                                });
                            return () => {
                                f?.(), I.disconnect(), w(), v && a.removeEventListener("scroll", y, !0), h.disconnect(), g?.disconnect()
                            }
                        }({
                            sharesScrollHost: rb?.contains(t) === !0,
                            frameElement: nZ,
                            frameContainer: t,
                            fullSurface: D,
                            modalOpen: rg,
                            sandboxElement: n0,
                            isFullScreen: nF,
                            isInGlobalHost: ry,
                            anchorElement: e,
                            rightPanelAnimationProgress: nN,
                            rightPanelLayoutTick: tc
                        })
                };
                return D || nF || rg || ry || !eh || null == e || e.hidden || "true" !== nZ.dataset.mcpAppParked ? n() : (0, tg.a)(e, n)
            }, [nZ, D, rg, eh, rb, ru, nF, ry, n2, nN, tc, n0, rc, rw]);
            let rQ = e4?.autoFocus === !0;
            (0, S.useEffect)(() => {
                rQ && nD && null != ru && n0?.focus()
            }, [rQ, nD, ru, n0]), (0, S.useLayoutEffect)(() => (nH.current = !1, () => {
                nH.current = !0
            }), [eL, tV]);
            let r0 = (0, S.useEffectEvent)(async () => {
                    try {
                        if (e4?.assertActive?.(), !aG) return;
                        let e = tB.openInAppUrl ?? C.string().nullable().parse(await n4?.getCurrentPath?.(void 0));
                        if (e4?.assertActive?.(), null == e) return;
                        let t = e4?.openInApp?.validateUrl(null == tB.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                r1 = (0, S.useEffectEvent)(e => {
                    let t = tV.get($.j.tabs$).some(e => e.tabId === (0, e9.b)(eL));
                    (0, e9.c)(tV, {
                        source: {
                            hostId: em,
                            server: tp,
                            connectorId: ng ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tf,
                        mcpAppId: eL,
                        onExitFullScreen: e,
                        onPanelElementChange: n6,
                        title: tB.displayModeTitle ?? th,
                        openInAppName: e4?.openInApp?.appName,
                        onOpenInApp: aG ? () => {
                            r0()
                        } : void 0
                    })
                }),
                r2 = (0, S.useEffectEvent)(() => {
                    let e = tV.get(eI.q, eL);
                    !nH.current && e?.isOpen && "fullscreen" === e.displayMode && (0, eI.c)(tV, eL)
                }),
                r3 = (0, S.useEffectEvent)(e => {
                    let t = aC()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nS);
                    else {
                        let t = C.object({
                            type: C.literal("interaction"),
                            label: C.string()
                        }).safeParse(e);
                        t.success && (0, k.a)(tV, u.l, {
                            ...nS,
                            host: "codex",
                            actionType: (0, ta.b)(t.data.label)
                        })
                    }
                });
            (0, S.useLayoutEffect)(() => {
                nF ? r1(r2) : (0, e9.a)(tV, eL)
            }, [nF, eL, tV, tf?.alt, tf?.knownAppId, tf?.logoDarkUrl, tf?.logoUrl, th, tB.displayModeTitle, aG, e4?.openInApp?.appName]);
            let r5 = (0, S.useEffectEvent)(() => {
                    let e = nF ? rc : ru;
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
                r6 = null != nZ && n2 && null != rI && null != rs && null != ro,
                r8 = (0, S.useEffectEvent)(e => {
                    let t;
                    if (!r6) return;
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
                    n$.current = n, n.mark("surface_mcp_app"), (0, eI.C)(t0(), eL, {
                        appDisplayModes: void 0,
                        isWidgetReady: !1,
                        sandboxError: null
                    }), ai(nl), nK.current = null, nX.current = null;
                    let r = rl();
                    if (null == r) return void rA("configuration", Error("The MCP app sandbox initialization config is missing."));
                    let i = [...new Set(["fullscreen", "encrypted-media", ...nE?.split(";") ?? [], ...nA ? ["local-network-access"] : []])],
                        o = (0, eD.a)(rf, rs, ro);
                    o instanceof HTMLIFrameElement && (o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != nE ? o.allow = i.map(e => `${e} *`).join("; ") : o.allow = nA ? "encrypted-media *; local-network-access" : "encrypted-media *", o.allowFullscreen = !0), o.classList.add("pointer-events-none", "opacity-0"), nZ.appendChild(o), n1(o), n.mark("rendered");
                    let u = new AbortController,
                        d = !1,
                        v = new tm,
                        y = null == s ? null : new eg(s),
                        w = null,
                        I = crypto.randomUUID(),
                        S = rU(),
                        x = a4(),
                        {
                            sourceMcpAppId: E,
                            toolInput: A,
                            toolOutput: M,
                            toolResponseMetadata: T,
                            toolResult: P,
                            toolStatus: R,
                            toolResultNotification: j,
                            toolCallCancellationReason: N
                        } = ra(),
                        O = new tQ.b(t0(), E, e => {
                            rk({
                                href: e
                            }, u.signal).catch(e => {
                                u.signal.aborted || (0, ez.d)(e, rx())
                            })
                        });
                    nK.current = null == P || null == M ? null : {
                        widgetId: I,
                        widgetState: S,
                        sourceMcpAppId: E,
                        toolInput: A,
                        toolOutput: M,
                        toolResponseMetadata: T,
                        toolStatus: R,
                        toolResult: j,
                        toolCallCancellationReason: N
                    };
                    let q = ax ? {
                            requestConnectPlugin: async e => aC()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                                pluginId: tz.a.parse(e).pluginId,
                                status: "unavailable"
                            },
                            requestOpenPlugin: async e => {
                                let t = aC()?.pluginSuggestions;
                                if (null == t) throw Error("Plugin suggestions are unavailable");
                                await t.requestOpenPlugin(e)
                            },
                            requestDeclinePluginSuggestions: async () => aC()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                                status: "unavailable",
                                declinedPluginIds: []
                            },
                            sendInstrument: e => aC()?.pluginSuggestions?.sendInstrument(e)
                        } : void 0,
                        L = null == P ? null : q ?? rr(P),
                        D = null == L ? null : {
                            ...L,
                            requestDeclinePluginSuggestions: q?.requestDeclinePluginSuggestions ?? (null == L.requestDeclinePluginSuggestions ? void 0 : async () => {
                                let e = ra().toolResult,
                                    t = null == e ? void 0 : rr(e)?.requestDeclinePluginSuggestions;
                                return null == t || !await e5.appServices?.mcpAppSandbox?.consumeUserGesture((0, eU.a)(rs, o)).catch(() => !1) || u.signal.aborted ? {
                                    status: "unavailable",
                                    declinedPluginIds: []
                                } : t()
                            })
                        },
                        U = () => {
                            let e = aC()?.files;
                            if (null == e) throw Error("Widget file access is unavailable");
                            return e
                        },
                        F = {
                            ...D,
                            downloadBlob: aV ? e => aC()?.downloadBlob?.(e, u.signal) : void 0,
                            triggerHaptic: a$ ? e => aC()?.triggerHaptic?.(e, u.signal) : void 0,
                            requestCheckout: aq ? async e => {
                                u.signal.throwIfAborted();
                                let t = aC();
                                if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                                return t.requestCheckout(e, u.signal)
                            } : void 0,
                            requestModal: async e => {
                                u.signal.aborted || (aP ? await aj()?.requestModal(e) : null != a0() && (aC()?.requestModal == null || C.object({
                                    params: C.object({
                                        view: C.literal("accountLinking")
                                    })
                                }).safeParse(e).success) ? await rj(e, u.signal, ti) : aC()?.requestModal != null ? await aC()?.requestModal?.(e, u.signal) : await rZ(e, u.signal))
                            },
                            uploadFile: aJ ? (e, t) => U().uploadFile(e, t, u.signal) : void 0,
                            getFileDownloadUrl: aJ ? e => U().getFileDownloadUrl(e, u.signal) : void 0,
                            getFileMetadata: aJ ? e => U().getFileMetadata(e, u.signal) : void 0,
                            selectFiles: aJ ? () => U().selectFiles(u.signal) : void 0,
                            share: aK ? async e => {
                                u.signal.throwIfAborted(), await aC()?.share?.(e, u.signal)
                            } : void 0,
                            requestLinkToConnector: aP || aZ ? async e => u.signal.aborted ? {
                                didConnect: !1
                            } : await (aj()?.requestLinkToConnector ?? aC()?.requestLinkToConnector)?.(e, u.signal) ?? {
                                didConnect: !1
                            } : void 0,
                            showToast: aR ? e => {
                                u.signal.aborted || (aj()?.showToast ?? aC()?.showToast)?.(e)
                            } : void 0,
                            notifyEscapeKey: aA || aP && aM || aW ? () => {
                                u.signal.aborted || aC()?.allowsInteractiveDismissal === !1 || (aA || aP || aC()?.displayMode != null ? rP() : rL({
                                    mode: "inline"
                                }))
                            } : void 0,
                            callMcp: e => {
                                let t = w?.notifyMcpAppsMcpNotification;
                                if (ap && null != t) {
                                    let n = O.handleRequest(e, u.signal, e => e$(t(e)));
                                    if (null != n) return n
                                }
                                let n = v.handleRequest(e, {
                                    sandboxElement: o,
                                    sandboxId: rs,
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
                                return r.success && null != y ? y.handleRequest(r.data.params) : rY(e, u.signal).catch(t => {
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
                                    rA("environment", e)
                                }
                            },
                            notifyIntrinsicHeight: rC,
                            notifyIntrinsicWidth: rM,
                            notifyNavigation: e => {
                                u.signal.aborted || rT(e)
                            },
                            notifySecurityPolicyViolation: e => {
                                u.signal.aborted || aC()?.instrumentation?.notifySecurityPolicyViolation(e)
                            },
                            openExternal: e => rk(e, u.signal),
                            openPlaidLink: a3 ? e => rR(e, u.signal) : void 0,
                            initializeMcpApp: e => {
                                if (u.signal.aborted) throw Error("MCP app initialization was cancelled");
                                try {
                                    return rq(l.a.parse(e).availableDisplayModes)
                                } catch (e) {
                                    throw rA("configuration", e), e
                                }
                            },
                            requestClose: aM ? rP : void 0,
                            requestDisplayMode: rL,
                            openConversationOverlay: aL ? async e => {
                                u.signal.throwIfAborted(), await aC()?.openConversationOverlay?.(e, u.signal)
                            } : void 0,
                            notifyAutofillCandidates: aU ? e => {
                                u.signal.throwIfAborted(), t?.(e)
                            } : void 0,
                            openPromptInput: aD ? e => {
                                u.signal.throwIfAborted();
                                let t = aC()?.openPromptInput;
                                if (null == t) throw Error("Widget prompt input is unavailable");
                                return t(e, o, u.signal)
                            } : void 0,
                            setOpenInAppUrl: aF ? e => {
                                u.signal.throwIfAborted();
                                let {
                                    href: t
                                } = C.object({
                                    href: C.string().nullable()
                                }).parse(e);
                                if (!t?.trim()) return void(0, eI.C)(t0(), eL, {
                                    openInAppUrl: null == t ? null : void 0
                                });
                                let n = aC()?.openInApp?.validateUrl(t);
                                null != n && (0, eI.C)(t0(), eL, {
                                    openInAppUrl: n
                                })
                            } : void 0,
                            requestFocusedObject: aH ? async e => {
                                u.signal.throwIfAborted(), await aC()?.presentation?.requestFocusedObject?.(e, u.signal)
                            } : void 0,
                            requestCloseFocusedObject: aB ? async () => {
                                u.signal.throwIfAborted(), await aC()?.presentation?.requestCloseFocusedObject?.(u.signal)
                            } : void 0,
                            requestTargetedReply: ak ? async e => {
                                if (u.signal.aborted) return;
                                let t = aj()?.requestTargetedReply;
                                if (null != t) return void await t(e);
                                let n = aC()?.setTargetedReply;
                                if (null != n) return void n(e, u.signal);
                                let a = aC()?.requestTargetedReply;
                                null != a && await (0, ex.c)(e, a, ad, u.signal)
                            } : void 0,
                            requestReconnectConnector: aY ? async () => {
                                let e = aC()?.requestReconnectConnector;
                                if (null == e) throw Error("Connector reconnection is unavailable");
                                return e(u.signal)
                            } : void 0,
                            requestConnectSheet: aX ? e => {
                                let t = aC()?.requestConnectSheet;
                                if (null != t) return t(e, u.signal);
                                throw Error("Widget connection is unavailable")
                            } : void 0,
                            sendFollowUpMessage: e => rV(e, u.signal),
                            sendInstrument: e => {
                                if (!u.signal.aborted) {
                                    if (aE || null != D) {
                                        let t = (0, p.h)(e);
                                        if (null != t) return void(0, k.a)(t0(), t.messageType, t.payload)
                                    }
                                    ez.g.safeParse(e).success && ((0, ez.d)(e, rx()), rE("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), D?.sendInstrument(e);
                                    let t = a0() ?? a2();
                                    t?.sendInstrument(e), (null == t && null == D || C.object({
                                        type: C.literal("interaction")
                                    }).safeParse(e).success) && r3(e)
                                }
                            },
                            updateWidgetState: (e, t, n) => {
                                if (!u.signal.aborted) return rG(e, t, C.object({
                                    waitForPersistence: C.literal(!0).optional()
                                }).optional().parse(n)?.waitForPersistence)
                            }
                        },
                        G = (0, eU.b)({
                            hostApiHandlers: F,
                            assertActive: () => {
                                u.signal.throwIfAborted(), t3(), aC()?.assertActive?.()
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
                        rA("widget", new DOMException("The app took too long to initialize.", "TimeoutError")), V(), z()
                    }, 5e4);

                    function z() {
                        clearTimeout(B), e()
                    }

                    function V() {
                        u.signal.aborted || (clearTimeout(B), u.abort(), al(), n$.current === n && (n$.current = null), n.isRecording() && n.abort("navigation_away"), v[Symbol.dispose](), O[Symbol.dispose](), y?.[Symbol.dispose](), nK.current = null, nX.current = null, nB.current = null, nz.current = null, nV.current = null, (0, eI.C)(t0(), eL, {
                            isWidgetReady: !1
                        }), n7(null), ai(nl), null != w && e$(w.requestMcpAppsResourceTeardown({
                            timeoutMs: 500
                        })), o.remove(), o instanceof HTMLIFrameElement || o.destroy?.(), eb.a.info("Removed app sandbox", {
                            safe: {
                                initId: W
                            }
                        }), n1(e => e === o ? null : e))
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
                        null != o && y?.setNotificationSender(e => e$(o(e))), null != e.applyAutofillCandidate && (t = await aC()?.autofill?.(e.applyAutofillCandidate, u.signal), u.signal.throwIfAborted()), n7({
                            api: e,
                            widgetId: I
                        });
                        let {
                            displayMode: c,
                            availableDisplayModes: p
                        } = rO(), v = tS(), {
                            containerDimensions: _
                        } = r_(nZ), E = tx(aC()?.device), C = t0().get(eE.a), P = C["--color-background-primary"], k = rN(c), R = {
                            "openai/viewer-header": ap && null != o,
                            ...tI({
                                availableDisplayModes: p,
                                containerDimensions: _,
                                displayMode: c,
                                locale: r.locale,
                                modelContextHostState: nR(),
                                deepLink: rD(),
                                safeAreaInsets: k.insets,
                                styleVariables: C,
                                theme: v,
                                userAgent: E,
                                toolInfo: aC()?.toolInfo
                            }),
                            ...null == s || null == o ? {} : {
                                [f.a]: !0
                            },
                            ...null == b ? {} : {
                                [f.d]: !0
                            }
                        }, {
                            csp: j
                        } = r, N = nh ? {} : void 0;
                        aw && (N = {
                            text: {},
                            image: {},
                            resourceLink: {},
                            resource: {}
                        }), null == y && rS(), eb.a.info("Starting app widget", {
                            safe: {
                                displayMode: c,
                                initId: W
                            }
                        }), d = !0;
                        let O = e.runWidgetCode({
                                enableAutofill: null != t,
                                expectReadySignal: null != aS,
                                expectedReadySignal: aS,
                                csp: j,
                                displayMode: aN(c),
                                features: i,
                                subjectId: aC()?.subjectId,
                                hostHandlesFollowUpMessageAuthorization: nv,
                                html: r.html,
                                isFirstParty: aE || null != D || aY,
                                isSidebarOpen: aC()?.presentation?.isSidebarOpen === !0,
                                isTombstone: aC()?.isTombstone === !0,
                                maxHeight: _.maxHeight,
                                maxWidth: _.maxWidth,
                                measureWidth: !0 === nn,
                                mcpApps: {
                                    requiresInitialization: a.requiresMcpInitialization,
                                    forwardedRequestMethods: ["ui/update-model-context", ...l ? [td] : [], ...ap && null != o ? [tQ.a] : [], ...aw || !nh ? ["ui/message"] : [], ...am?.split(";") ?? [], ...aI ? [m.a] : [], ...null == y || null == o ? [] : [f.c], ...null == b ? [] : [f.e], ...null == o ? [] : [...t5, ...at && !a_ ? t6 : []]],
                                    hostCapabilities: {
                                        experimental: {
                                            [g.a]: {},
                                            ...l ? {
                                                "openai/find": {}
                                            } : {},
                                            ...aw ? {
                                                [h.a]: {
                                                    draft: nb() ? {} : void 0
                                                }
                                            } : {},
                                            "openai/skillsDeepLinks": {},
                                            ...r.experimentalCapabilities,
                                            ...aI ? {
                                                "openai/files": {}
                                            } : {}
                                        },
                                        logging: {},
                                        openLinks: {},
                                        serverResources: {},
                                        serverTools: {},
                                        message: N,
                                        updateModelContext: nh ? {
                                            resource: {},
                                            resourceLink: {},
                                            image: {},
                                            structuredContent: {},
                                            text: {}
                                        } : void 0,
                                        sandbox: null != j || null != nE ? {
                                            permissions: null == nE ? void 0 : {
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
                                        version: t0().get(ev.a).data?.version ?? "unknown",
                                        client_type: "codex_browser"
                                    },
                                    globalSurface: tk
                                },
                                safeArea: k,
                                theme: v,
                                toolInput: A,
                                toolOutput: M,
                                toolResponseMetadata: T,
                                userAgent: E,
                                viewParams: x,
                                widgetId: I,
                                widgetState: S
                            }),
                            q = !1;
                        for await (let t of O) {
                            let a = t0().get(eI.q, eL)?.sandboxError;
                            if (u.signal.aborted || nm(a)) break;
                            if (ez.f.safeParse(t).success) return;
                            ez.g.safeParse(t).success && ((0, ez.d)(t, rx()), rE("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION"));
                            let r = ez.h.safeParse(t);
                            if (r.success) {
                                if ("mcp_initialization_timeout" === r.data.reason) throw new t$.b;
                                throw Error("The MCP app sandbox execution failed.")
                            }
                            if (q || !eU.d.safeParse(t).success) continue;
                            q = !0, z();
                            let {
                                displayMode: i,
                                availableDisplayModes: o
                            } = rO(), s = {
                                ...R,
                                displayMode: i,
                                availableDisplayModes: [...o]
                            };
                            (0, eI.C)(t0(), eL, {
                                isWidgetReady: !0
                            }), e$(e.setWidgetView({
                                displayMode: aN(i),
                                isTombstone: aC()?.isTombstone === !0,
                                viewParams: x,
                                widgetId: I
                            })), e$(e.setTheme({
                                theme: v
                            })), e$(e.setSafeArea({
                                safeArea: k
                            }));
                            let l = {
                                isSidebarOpen: aC()?.presentation?.isSidebarOpen === !0,
                                maxHeight: _.maxHeight,
                                maxWidth: _.maxWidth,
                                surfaceBackgroundColor: P
                            };
                            nV.current = l, e$(e.setAdditionalGlobals({
                                additionalGlobals: l
                            })), e$(e.notifyMcpAppsHostContext({
                                hostContext: s
                            })), n.mark("fully_loaded"), eb.a.info("Started app widget", {
                                safe: {
                                    displayMode: i,
                                    initId: W
                                }
                            }), n.end()
                        }
                        if (!q && !u.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                    }).catch(e => {
                        u.signal.aborted || (d && rE("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), rA(null == w ? "handshake" : "widget", e)), V()
                    }).finally(() => {
                        z()
                    }), V
                });
            (0, S.useLayoutEffect)(() => {
                if (r6) return t0().get(tE, void 0)(r8, e => rA("handshake", e), r5)
            }, [r6, nh, nv, nA, nE, aV, a$, al, aI, aw, a3, aM, ef, null, em, nP, nZ, D, B, s, b, a_, nn, ax, aq, aK, aJ, aX, aY, aZ, aA, aR, aP, ak, aW, aF, aL, aD, aU, aH, aB, aE, ap, am, aS, a.requiresMcpInitialization, ti, n2, eL, ri, ad, rs, rI, ro, rf, tp, at, ag, tk]), (0, S.useLayoutEffect)(() => {
                an.setConversation(i).catch(e => {
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
            }, [i, em, an, eL]), (0, S.useLayoutEffect)(() => {
                aa.setConversation(i, at && nI).catch(e => {
                    eb.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [i, aa, nI, at]), (0, S.useLayoutEffect)(() => {
                let e = n4?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = aa.connectNotificationSink(e);
                return () => {
                    t(), aa.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [aa, n4]), (0, S.useLayoutEffect)(() => {
                let e = n4?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = an.connectNotificationSink(t => e$(e(t)));
                return () => {
                    t(), an.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [an, n4]), (0, S.useEffect)(() => {
                if (!nD || null == n4 || null == n9) return;
                let e = {
                        widgetId: n9,
                        sourceMcpAppId: eH,
                        toolInput: a5,
                        toolOutput: a8,
                        toolResponseMetadata: rn,
                        toolStatus: rt,
                        toolCallCancellationReason: tG,
                        toolResult: re
                    },
                    t = {
                        ...e,
                        widgetState: nJ
                    };
                v()(nK.current, t) || (nK.current = t, e$(n4.setWidgetData({
                    toolInput: a5,
                    toolOutput: a8,
                    toolResponseMetadata: rn,
                    widgetId: n9,
                    widgetState: nJ
                })));
                let n = nX.current?.widgetId === n9 ? nX.current : null;
                if (v()(n, e)) return;
                nX.current = e;
                let a = n?.sourceMcpAppId !== eH;
                null != a5 && (a || !v()(n?.toolInput, a5)) && e$(n4.notifyMcpAppsToolInput({
                    arguments: a5
                })), "cancelled" === rt ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tG) && e$(n4.notifyMcpAppsToolCancelled({
                    reason: tG
                })) : null == re || !a && v()(n?.toolResult, e.toolResult) && n?.toolStatus === rt && v()(n?.toolInput, a5) && v()(n?.toolResponseMetadata, rn) || e$(n4.notifyMcpAppsToolResult({
                    ...re,
                    isError: "error" === rt || re.isError,
                    _meta: "error" === rt ? {
                        ...re._meta,
                        status: "error"
                    } : re._meta
                }))
            }, [nD, re, n4, eH, a5, a8, rn, rt, tG, n9, nJ]), (0, S.useEffect)(() => {
                nD && null != n4 && e$(n4.notifyMcpAppsHostContext({
                    hostContext: {
                        [g.a]: nk
                    }
                }))
            }, [nD, nk, n4]), (0, S.useEffect)(() => {
                if (nD && null != n4 && null != nZ) return s?.observeHostContext?.(tV, nZ, e => {
                    e$(n4.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [s, nZ, nD, n4, tV]), (0, S.useEffect)(() => {
                if (null == nZ || !rd || null == n4 || null == n9 || nF && null == rc) return;
                let e = rN(nG);
                e$(n4.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aN(nG),
                    isTombstone: aC()?.isTombstone === !0,
                    viewParams: a7,
                    widgetId: n9
                };
                return v()(nB.current, t) || (nB.current = t, e$(n4.setWidgetView(t))),
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
                        frameElement: nZ,
                        inlineAnchor: ru,
                        fitWidth: nn,
                        rightPanelAnimationProgress: nN,
                        onLayout: () => {
                            if ("true" === nZ.dataset.mcpAppParked) return;
                            let {
                                containerDimensions: t
                            } = r_(nZ), n = {
                                isSidebarOpen: aC()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: rg ? "transparent" : nL
                            };
                            v()(nV.current, n) || (nV.current = n, e$(n4.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = tI({
                                availableDisplayModes: tB.availableDisplayModes ?? ef,
                                containerDimensions: t,
                                displayMode: nG,
                                locale: nC.locale,
                                deepLink: ts,
                                safeAreaInsets: e.insets,
                                styleVariables: nq,
                                theme: tS(),
                                userAgent: tx(aC()?.device),
                                toolInfo: aC()?.toolInfo
                            });
                            v()(nz.current, a) || (nz.current?.theme !== a.theme && e$(n4.setTheme({
                                theme: a.theme
                            })), nz.current = a, e$(n4.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nZ, nn, nW, D, B, ru, nC.locale, nq, ef, tB.availableDisplayModes, rd, nF, aQ, az, rg, e4?.displayMode, e4?.showModalCloseButton, as, ts, nN, nO, n4, rc, nL, tk, a7, n9, nG]);
            let r7 = as && !nF,
                r4 = as && nF && nj?.tabId === (0, e9.b)(eL);
            return (0, o.jsxs)(o.Fragment, {
                children: [D && rd && nD && null != n0 && null != rs ? (0, o.jsx)(tb, {
                    sandboxElement: n0,
                    sandboxId: rs
                }) : null, nD && null != n0 && null != rs ? (0, o.jsx)(tl, {
                    panelTabId: nF ? (0, e9.b)(eL) : e4?.panelTabId ?? null,
                    sandboxElement: n0,
                    sandboxId: rs,
                    title: tv
                }) : null, null != ac && rd ? (0, o.jsx)(eS.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...ac,
                        onCancel: al,
                        onConfirm: au
                    }
                }) : null, r4 ? (0, o.jsx)(V.a.RightPanelTabListBefore, {
                    children: (0, o.jsx)(tH, {
                        canGoBack: ar.canGoBack,
                        canGoForward: ar.canGoForward,
                        className: "h-full px-1",
                        onBack: () => rW(-1),
                        onForward: () => rW(1)
                    })
                }) : null, r7 && null != nZ && !nF ? (0, x.createPortal)((0, o.jsx)(tH, {
                    canGoBack: ar.canGoBack,
                    canGoForward: ar.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => rW(-1),
                    onForward: () => rW(1)
                }), nZ) : null]
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
                sourceName: S,
                toolOrigin: x,
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
                        T = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.f) !== C || t(l.j) !== M) && A.abort()
                        }),
                        P = (0, s.a)(),
                        k = g(t, P);
                    i()(e => e());
                    let R = e => {
                            A.signal.aborted || (0, o.c)(e) || t.get(f.f).danger(e instanceof Error ? e.message : String(e), {
                                id: P,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        j = i()(() => {
                            A.signal.removeEventListener("abort", j), T(), k?.close()
                        }),
                        N = !1;
                    A.signal.addEventListener("abort", j, {
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
                                N = !0, e.then(j, e => {
                                    R(e), j()
                                })
                            },
                            onPendingThreadReady: e => {
                                "app-server" === c.kind && (k = g(t, P, e))
                            },
                            onThreadCreated: e => {
                                let n;
                                n = t.get(f.f).info((0, u.jsx)(d.a, {
                                    id: "mcpApp.newThreadCreated.sourceTitle",
                                    defaultMessage: "{appName} has started a new chat",
                                    description: "Toast confirming that the named app has started a new chat",
                                    values: {
                                        appName: S
                                    }
                                }), {
                                    id: P,
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
                            sourceName: S,
                            toolOrigin: x,
                            signal: A.signal
                        });
                        return
                    } catch (e) {
                        throw R(e), e
                    } finally {
                        E.removeEventListener("abort", O), N || j()
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
                    S = u.c.safeParse(_?._meta ?? _),
                    x = S.success ? S.data["openai/plugin_suggestion_id"] : void 0,
                    E = {
                        chatgpt: n,
                        source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                        suggestionId: x,
                        surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                    },
                    A = (e, r, o) => {
                        try {
                            (0, c.a)(t, i.CodexPluginAction, {
                                source: E.source,
                                suggestionId: x,
                                surface: E.surface,
                                action: e,
                                remotePluginId: r,
                                result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                                uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                            }), null != n && null != x && (e !== i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != o) && (0, c.a)(t, a.q, {
                                action: e === i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                                pluginId: r,
                                pluginIds: o,
                                result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                                suggestionId: x,
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
                        if (!w() || null == n || null != t.suggestionId && t.suggestionId !== x) throw Error("Plugin suggestion is outside the trusted widget scope");
                        return n
                    };
                return {
                    requestDeclinePluginSuggestions: null == h ? void 0 : () => h(I.data.suggestions),
                    sendInstrument: e => {
                        let t = u.b.safeParse(e);
                        if (!w() || !t.success || t.data.payload.suggestion_id !== x || !I.data.suggestions.some(e => {
                                let {
                                    plugin_id: n
                                } = e;
                                return n === t.data.payload.remote_plugin_id
                            })) return;
                        let n = t.data.payload.remote_plugin_id;
                        if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                            if (!t.data.payload.plugin_ids.includes(n) || C.has(n)) return;
                            C.add(n), y?.(n, S.success ? S.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed"), b?.(n);
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
                        return v?.(t.plugin_id), y?.(t.plugin_id, S.success ? S.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0, "click"), A(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), m(t, E)
                    },
                    requestOpenPlugin: async e => {
                        let r = M(e);
                        if (null != n && null != g) try {
                            (0, c.a)(t, a.u, {
                                target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                                pluginId: r.plugin_id,
                                suggestionId: x,
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
            c = n("Wdu7"),
            u = n("ZiSI"),
            d = n("Odi7"),
            p = n("tSEg"),
            f = n("WFY2"),
            m = n("xWDI"),
            g = n("FZiz"),
            h = n("C1SW"),
            b = n("ALWK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s = (0, r.c)(11),
                    {
                        fullSurface: l,
                        inlineSurface: c,
                        title: d,
                        illustration: p,
                        actions: f
                    } = e,
                    m = l ? "h-full" : "h-60",
                    g = !l && "standalone" === (void 0 === c ? "standalone" : c) && "overflow-hidden rounded-lg border border-strong";
                s[0] !== m || s[1] !== g ? (t = (0, i.b)(m, g), s[0] = m, s[1] = g, s[2] = t) : t = s[2];
                let h = !l;
                return s[3] !== f || s[4] !== p || s[5] !== h || s[6] !== d ? (n = (0, a.jsx)(u.a, {
                    compact: h,
                    title: d,
                    illustration: p,
                    description: null,
                    actions: f
                }), s[3] = f, s[4] = p, s[5] = h, s[6] = d, s[7] = n) : n = s[7], s[8] !== t || s[9] !== n ? (o = (0, a.jsx)("div", {
                    className: t,
                    children: n
                }), s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
            },
            b: function(e) {
                let t, n, u, v, y, w, I, _, S, x, E, A = (0, r.c)(84),
                    {
                        resource: C,
                        error: M,
                        errorTitle: T,
                        errorIllustration: P,
                        hostDisplayModes: k,
                        fullSurface: R,
                        hostScroll: j,
                        inlineSurface: N,
                        mcpAppId: O,
                        onRetryResourceRead: q,
                        renderErrorActions: L,
                        pluginName: D,
                        presentation: U,
                        showLoadingStatus: F
                    } = e,
                    G = void 0 !== R && R,
                    W = void 0 !== j && j,
                    H = void 0 === N ? "standalone" : N,
                    B = void 0 === F || F,
                    z = (0, o.y)(p.a),
                    V = (0, o.x)(b.i, O),
                    $ = V?.content.resource;
                A[0] !== M || A[1] !== C || A[2] !== $ ? (t = null == $ ? C : {
                    data: $,
                    error: M ?? null,
                    isLoading: !1
                }, A[0] = M, A[1] = C, A[2] = $, A[3] = t) : t = A[3];
                let J = t,
                    {
                        data: K,
                        isLoading: X
                    } = J,
                    Y = K?.html ?? null;
                A[4] !== J || A[5] !== k ? (n = (0, h.d)(J, k), A[4] = J, A[5] = k, A[6] = n) : n = A[6];
                let Z = n,
                    Q = (0, o.x)(b.t, O),
                    ee = (0, o.x)(b.u, O),
                    et = G || "inline" === U,
                    en = V?.inlineFrameAnchor.ref,
                    ea = K?.heightHint ?? null,
                    er = K?.minFrameHeight ?? null;
                A[7] !== Q.intrinsicHeight || A[8] !== W || A[9] !== ea || A[10] !== er ? (u = (0, d.a)(Q.intrinsicHeight, ea, er, W), A[7] = Q.intrinsicHeight, A[8] = W, A[9] = ea, A[10] = er, A[11] = u) : u = A[11];
                let ei = u,
                    eo = !G && K?.fitWidth ? Q.intrinsicWidth ?? K.widthHint : void 0,
                    es = G ? void 0 : K?.inlineFramePadding,
                    el = null == es ? void 0 : -es.blockStart,
                    ec = null == es ? void 0 : -es.blockEnd,
                    eu = null == es ? void 0 : -es.inlineStart,
                    ed = null == es ? void 0 : -es.inlineEnd;
                A[12] !== eo || A[13] !== el || A[14] !== ec || A[15] !== eu || A[16] !== ed ? (v = {
                    width: eo,
                    marginBlockStart: el,
                    marginBlockEnd: ec,
                    marginInlineStart: eu,
                    marginInlineEnd: ed
                }, A[12] = eo, A[13] = el, A[14] = ec, A[15] = eu, A[16] = ed, A[17] = v) : v = A[17];
                let ep = v,
                    ef = "error" === Z.kind ? Z.error : Q.sandboxError;
                A[18] !== Z.kind || A[19] !== ef ? (y = null, "too-large" === Z.kind ? y = "HTML exceeds display limit" : ef instanceof h.a && (y = "No supported display mode"), A[18] = Z.kind, A[19] = ef, A[20] = y) : y = A[20];
                let em = "error" === Z.kind ? Z.error : null,
                    eg = em?.message;
                A[21] !== y || A[22] !== K?.availableDisplayModes || A[23] !== K?.htmlByteLength || A[24] !== k || A[25] !== O || A[26] !== em ? (w = () => {
                    (null != y || null != em) && f.a.warning("MCP app error displayed", {
                        safe: {
                            reason: y ?? "App could not be displayed",
                            htmlByteLength: K?.htmlByteLength
                        },
                        sensitive: {
                            mcpAppId: O,
                            error: em,
                            hostDisplayModes: k,
                            availableDisplayModes: K?.availableDisplayModes
                        }
                    })
                }, A[21] = y, A[22] = K?.availableDisplayModes, A[23] = K?.htmlByteLength, A[24] = k, A[25] = O, A[26] = em, A[27] = w) : w = A[27];
                let eh = (0, s.useEffectEvent)(w);
                if (A[28] !== eh ? (I = () => {
                        eh()
                    }, A[28] = eh, A[29] = I) : I = A[29], A[30] !== y || A[31] !== O || A[32] !== eg ? (_ = [y, eg, O], A[30] = y, A[31] = O, A[32] = eg, A[33] = _) : _ = A[33], (0, s.useEffect)(I, _), "too-large" === Z.kind) {
                    let e;
                    return A[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(c.a, {
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
                    }), A[34] = e) : e = A[34], e
                }
                if (!G && "launcher" === U) {
                    let e;
                    return A[35] !== en ? (e = (0, a.jsx)("div", {
                        ref: en,
                        hidden: !0
                    }), A[35] = en, A[36] = e) : e = A[36], e
                }
                if (X || !ee && null != Y && null == ef) {
                    let e, t, n, r;
                    if ("pending" === U && !G) {
                        let e;
                        return B ? (A[37] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                            role: "status",
                            className: "loading-shimmer-pure-text text-codex-description",
                            children: (0, a.jsx)(l.a, {
                                id: "codex.mcpTool.mcpAppLoading",
                                defaultMessage: "Loading app",
                                description: "Accessible label for the MCP app loading placeholder"
                            })
                        }), A[37] = e) : e = A[37], e) : null
                    }
                    let o = X ? null : en,
                        s = null == es && "max-w-full",
                        c = G && "h-full";
                    A[38] !== s || A[39] !== c ? (e = (0, i.b)(s, c), A[38] = s, A[39] = c, A[40] = e) : e = A[40];
                    let u = "standalone" === H && "rounded-lg border";
                    A[41] !== u ? (t = (0, i.b)("w-full border-subtle", u), A[41] = u, A[42] = t) : t = A[42];
                    let d = G ? "100%" : ei;
                    return A[43] !== G || A[44] !== W || A[45] !== es || A[46] !== B || A[47] !== t || A[48] !== d ? (n = (0, a.jsx)(g.a, {
                        className: t,
                        height: d,
                        inlineFramePadding: es,
                        fullSurface: G,
                        allowCompact: W,
                        showLoadingStatus: B
                    }), A[43] = G, A[44] = W, A[45] = es, A[46] = B, A[47] = t, A[48] = d, A[49] = n) : n = A[49], A[50] !== ep || A[51] !== H || A[52] !== o || A[53] !== e || A[54] !== n ? (r = (0, a.jsx)("div", {
                        ref: o,
                        className: e,
                        style: ep,
                        "data-mcp-app-inline-surface": H,
                        children: n
                    }), A[50] = ep, A[51] = H, A[52] = o, A[53] = e, A[54] = n, A[55] = r) : r = A[55], r
                }
                if (null != ef) {
                    let e, t;
                    return A[56] !== Z.kind || A[57] !== O || A[58] !== q || A[59] !== z ? (e = "error" === Z.kind ? q : () => (0, b.B)(z, O), A[56] = Z.kind, A[57] = O, A[58] = q, A[59] = z, A[60] = e) : e = A[60], A[61] !== P || A[62] !== T || A[63] !== G || A[64] !== H || A[65] !== ef || A[66] !== D || A[67] !== L || A[68] !== e ? (t = (0, a.jsx)(m.a, {
                        error: ef,
                        errorTitle: T,
                        errorIllustration: P,
                        fullSurface: G,
                        inlineSurface: H,
                        pluginName: D,
                        renderErrorActions: L,
                        onRetry: e
                    }), A[61] = P, A[62] = T, A[63] = G, A[64] = H, A[65] = ef, A[66] = D, A[67] = L, A[68] = e, A[69] = t) : t = A[69], t
                }
                if (!et) {
                    let e;
                    return A[70] !== en ? (e = (0, a.jsx)("div", {
                        ref: en,
                        hidden: !0
                    }), A[70] = en, A[71] = e) : e = A[71], e
                }
                if (null == Y) {
                    let e;
                    return A[72] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppNoContent",
                            defaultMessage: "This app has no content to display",
                            description: "Message shown when an MCP app resource has no renderable HTML"
                        })
                    }), A[72] = e) : e = A[72], e
                }
                let eb = null == es && "w-full max-w-full",
                    ev = G && "h-full";
                A[73] !== eb || A[74] !== ev ? (S = (0, i.b)("overflow-hidden", eb, ev), A[73] = eb, A[74] = ev, A[75] = S) : S = A[75];
                let ey = G ? "100%" : ei;
                return A[76] !== ep || A[77] !== ey ? (x = {
                    ...ep,
                    height: ey
                }, A[76] = ep, A[77] = ey, A[78] = x) : x = A[78], A[79] !== en || A[80] !== H || A[81] !== S || A[82] !== x ? (E = (0, a.jsx)("div", {
                    ref: en,
                    "data-mcp-app-expanded": "true",
                    "data-mcp-app-inline-surface": H,
                    className: S,
                    style: x
                }), A[79] = en, A[80] = H, A[81] = S, A[82] = x, A[83] = E) : E = A[83], E
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
                    recipient: S,
                    analyticsContext: x,
                    resource: E,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: M,
                    reuseOnly: T,
                    conversationId: P,
                    fullSurface: k,
                    modalOpen: R,
                    hostScroll: j,
                    hostDisplayModes: N,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: q,
                    hostId: L,
                    hostedInThreadScrollLayout: D,
                    access: U,
                    lifetime: F,
                    mcpAppId: G,
                    mcpAppScope: W,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: z,
                    connectorId: V,
                    mcpAppHostAdapter: $,
                    getNewThreadDestination: J,
                    initialWidgetState: K,
                    widgetStatePersistence: X,
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
                ep = void 0 === S ? null : S,
                ef = void 0 !== M && M,
                em = void 0 !== T && T,
                eg = void 0 !== k && k,
                eh = void 0 !== j && j,
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
            let eS = (0, o.useContext)(s.c)?.rightPanelLayoutTick,
                ex = void 0 !== z ? z : B?.data.find(e => {
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
                    pluginId: ex,
                    connectorId: V,
                    server: et
                }),
                eM = ex ?? eA,
                eT = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: L,
                    pluginId: eM
                }) ? void 0 : eM,
                eP = E.isLoading || eC;
            _[7] !== N || _[8] !== eP || _[9] !== E ? (h = (0, m.d)({
                ...E,
                isLoading: eP
            }, N), _[7] = N, _[8] = eP, _[9] = E, _[10] = h) : h = _[10];
            let ek = h;
            return _[11] !== U || _[12] !== x || _[13] !== en || _[14] !== P || _[15] !== Z || _[16] !== ek || _[17] !== eE || _[18] !== eT || _[19] !== eg || _[20] !== J || _[21] !== C || _[22] !== ev || _[23] !== N || _[24] !== L || _[25] !== eh || _[26] !== D || _[27] !== eb || _[28] !== K || _[29] !== eI || _[30] !== O || _[31] !== $ || _[32] !== G || _[33] !== W || _[34] !== B || _[35] !== R || _[36] !== e_ || _[37] !== ef || _[38] !== Y || _[39] !== ep || _[40] !== A || _[41] !== ee || _[42] !== ex || _[43] !== em || _[44] !== eS || _[45] !== ey || _[46] !== et || _[47] !== ea || _[48] !== H || _[49] !== er || _[50] !== eo || _[51] !== eu || _[52] !== ec || _[53] !== es || _[54] !== el || _[55] !== ed || _[56] !== X ? (b = () => {
                eI || "ready" === ek.kind && null != U && (0, d.x)(ey, {
                    recipient: ep,
                    onSessionDispose: e_,
                    resource: ek.data,
                    refetchResource: A,
                    getResourceHost: C,
                    openOnRegistration: ef,
                    reuseOnly: em,
                    conversationId: P,
                    firstPartyPluginBridge: eE,
                    firstPartyPluginLoggerPluginId: eT,
                    fullSurface: eg,
                    modalOpen: R,
                    hostScroll: eh,
                    hostDisplayModes: N,
                    legacyPreferredDisplayMode: O,
                    inheritHostBackground: eb,
                    hostId: L,
                    hostedInThreadScrollLayout: D,
                    access: U,
                    analyticsContext: x,
                    mcpAppId: G,
                    mcpAppScope: W,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: ex,
                    mcpAppHostAdapter: $,
                    getNewThreadDestination: J,
                    initialWidgetState: K,
                    widgetStatePersistence: X,
                    plaidAccountId: Y,
                    deepLink: Z,
                    rightPanelLayoutTick: eS,
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
            }, _[11] = U, _[12] = x, _[13] = en, _[14] = P, _[15] = Z, _[16] = ek, _[17] = eE, _[18] = eT, _[19] = eg, _[20] = J, _[21] = C, _[22] = ev, _[23] = N, _[24] = L, _[25] = eh, _[26] = D, _[27] = eb, _[28] = K, _[29] = eI, _[30] = O, _[31] = $, _[32] = G, _[33] = W, _[34] = B, _[35] = R, _[36] = e_, _[37] = ef, _[38] = Y, _[39] = ep, _[40] = A, _[41] = ee, _[42] = ex, _[43] = em, _[44] = eS, _[45] = ey, _[46] = et, _[47] = ea, _[48] = H, _[49] = er, _[50] = eo, _[51] = eu, _[52] = ec, _[53] = es, _[54] = el, _[55] = ed, _[56] = X, _[57] = b) : b = _[57], _[58] !== Q || _[59] !== U || _[60] !== x || _[61] !== en || _[62] !== P || _[63] !== Z || _[64] !== ek || _[65] !== eE || _[66] !== eT || _[67] !== eg || _[68] !== J || _[69] !== C || _[70] !== ev || _[71] !== N || _[72] !== L || _[73] !== eh || _[74] !== D || _[75] !== eb || _[76] !== K || _[77] !== eI || _[78] !== eP || _[79] !== O || _[80] !== F || _[81] !== $ || _[82] !== G || _[83] !== W || _[84] !== B || _[85] !== R || _[86] !== e_ || _[87] !== ef || _[88] !== Y || _[89] !== ep || _[90] !== A || _[91] !== ee || _[92] !== ex || _[93] !== em || _[94] !== eS || _[95] !== ey || _[96] !== et || _[97] !== ea || _[98] !== H || _[99] !== er || _[100] !== eo || _[101] !== eu || _[102] !== ec || _[103] !== es || _[104] !== el || _[105] !== ed || _[106] !== X ? (v = [x, C, A, ek, ef, em, ep, e_, P, eE, eT, eg, R, eh, N, O, eb, L, D, U, eI, eP, F, G, W, H, B, ex, $, J, K, X, Y, Z, Q, eS, ee, ey, et, en, ea, er, ev, eo, es, el, ec, eu, ed], _[58] = Q, _[59] = U, _[60] = x, _[61] = en, _[62] = P, _[63] = Z, _[64] = ek, _[65] = eE, _[66] = eT, _[67] = eg, _[68] = J, _[69] = C, _[70] = ev, _[71] = N, _[72] = L, _[73] = eh, _[74] = D, _[75] = eb, _[76] = K, _[77] = eI, _[78] = eP, _[79] = O, _[80] = F, _[81] = $, _[82] = G, _[83] = W, _[84] = B, _[85] = R, _[86] = e_, _[87] = ef, _[88] = Y, _[89] = ep, _[90] = A, _[91] = ee, _[92] = ex, _[93] = em, _[94] = eS, _[95] = ey, _[96] = et, _[97] = ea, _[98] = H, _[99] = er, _[100] = eo, _[101] = eu, _[102] = ec, _[103] = es, _[104] = el, _[105] = ed, _[106] = X, _[107] = v) : v = _[107], (0, o.useLayoutEffect)(b, v), _[108] !== Q || _[109] !== F || _[110] !== G || _[111] !== ey || _[112] !== ew ? (y = () => {
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