export const __rspack_esm_id = 945902;
export const __rspack_esm_ids = [945902];
export const __webpack_modules__ = {
    t0Nb: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => r,
            c: () => a,
            d: () => w,
            e: () => v,
            f: () => x,
            g: () => _,
            h: () => S
        });
        let a = ["https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
        var o, i, r = ((o = {}).LOG = "log", o.RUN_START = "run_start", o.ENVIRONMENT_STATUS = "environment_status", o.OUTPUT = "output", o.ERROR = "error", o.RUN_COMPLETE = "run_complete", o),
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
                for (let [a, o] of(t.set(e, n), e)) n.set(c(a, t), c(o, t));
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
            let o = {};
            for (let n of (t.set(e, o), Object.keys(e))) {
                let a;
                try {
                    a = e[n]
                } catch (e) {
                    a = String(e)
                }
                o[n] = c(a, t)
            }
            return o
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
                        } catch (o) {
                            if (o instanceof Error && "DataCloneError" === o.name) try {
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
                            a.postMessage([p, o])
                        } finally {
                            a.close()
                        }
                    }(): (a.postMessage([p, Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.")]), a.close())
                }
            }), e.start();
            let n = t => function() {
                    for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    return new Promise((n, o) => {
                        let {
                            port1: i,
                            port2: r
                        } = new MessageChannel;
                        i.onmessage = e => {
                            let t = e.data;
                            t[0] === m ? n(t[1]) : o(t[1]), i.close()
                        }, t?.signal?.addEventListener("abort", () => {
                            i.postMessage([u]), i.close(), o(Error("Aborted."))
                        }), e.postMessage([d, ...a], [r, ...t.transfer || []])
                    })
                },
                a = n({});
            return a.withOptions = n, a
        }
        let h = "GENERATOR_GENERATE";

        function g(e, t) {
            e.addEventListener("message", e => {
                let n = e.data;
                if (Array.isArray(n) && n[0] === h) {
                    if (e.stopImmediatePropagation(), !t) throw Error("No function was registered on this RPC. This is probably calling a client which do not implement the function.");
                    let [a, o, ...i] = n, r = t(...i);
                    f(o.next, r.next.bind(r)), f(o.return, e => r.return?.(e) || {
                        done: !0
                    }), f(o.throw, e => r.throw?.(e) || Promise.reject(e)), f(o.asyncDispose, async () => {
                        let e = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
                            t = Symbol.dispose || Symbol.for("Symbol.dispose");
                        e in r ? await r[e]?.() : t in r && r[t]?.()
                    })
                }
            }), e.start();
            let n = t => {
                    let n;
                    return function() {
                        for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        let {
                            port1: r,
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
                        } = new MessageChannel, g = {
                            signal: t.signal
                        }, b = () => {
                            r.close(), s.close(), l.close(), c.close(), u.close(), d.close(), p.close(), m.close()
                        }, v = f(r).withOptions(g), y = f(l).withOptions(g), w = f(u).withOptions(g), I = f(p).withOptions(g), _ = !1, x = async e => {
                            if (n?.(), _) return {
                                done: !0
                            };
                            let t = await e();
                            return t.done && (_ = !0, b()), t
                        }, S = async e => {
                            n?.(), await e(), _ = !0, b(), n = () => {
                                throw Error("This generator has been disposed.")
                            }
                        }, E = {
                            next: e => x(() => y(e)),
                            return: e => x(() => w(e)),
                            throw: e => x(() => I(e)),
                            [Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")]: () => S(() => v()),
                            [Symbol.asyncIterator]: () => E
                        };
                        return e.postMessage([h, {
                            asyncDispose: s,
                            next: c,
                            return: d,
                            throw: m
                        }, ...o], [...t.transfer || [], s, c, d, m]), t.signal?.addEventListener("abort", () => {
                            n = () => {
                                throw Error("This generator has been aborted.")
                            }, b()
                        }, {
                            once: !0
                        }), E
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
                replyPort: o
            } = "iframe" in e ? await

            function(e) {
                let {
                    iframe: t,
                    origin: n,
                    signal: a
                } = e, o = t.ownerDocument.defaultView;
                if (null == o || a?.aborted) return Promise.reject(new DOMException("Sandbox connection cancelled.", "AbortError"));
                let i = b.object({
                    type: b.literal("init"),
                    ports: b.record(b.string(), b.instanceof(MessagePort)),
                    replyPort: b.instanceof(MessagePort)
                });
                return new Promise((e, r) => {
                    let s = () => {
                            o.removeEventListener("message", d), t.removeEventListener("error", u), a?.removeEventListener("abort", c)
                        },
                        l = e => {
                            s(), r(e)
                        },
                        c = () => {
                            l(new DOMException("Sandbox connection cancelled.", "AbortError"))
                        },
                        u = () => {
                            l(Error("Unable to load the code execution sandbox."))
                        },
                        d = a => {
                            if (a.source !== t.contentWindow || a.origin !== n) return;
                            let o = i.safeParse(a.data);
                            o.success && (s(), e(o.data))
                        };
                    o.addEventListener("message", d), null != a && t.addEventListener("error", u, {
                        once: !0
                    }), a?.addEventListener("abort", c, {
                        once: !0
                    })
                })
            }(e): e, i = new Set([...Object.values(a), o]), r = new AbortController, s = () => {
                for (let e of (n?.removeEventListener("abort", s), r.abort(), i)) e.close();
                i.clear()
            };
            try {
                n?.throwIfAborted();
                let l = {};
                for (let [e, n] of Object.entries(t)) {
                    if (null == n) continue;
                    let a = new MessageChannel;
                    i.add(a.port1), i.add(a.port2);
                    let o = function(e, t, n) {
                        function a() {
                            for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                            let i = e[t];
                            if (null == i) throw Error(`Sandbox host method "${t}" is unavailable`);
                            return i.apply(this, a)
                        }
                        return y(n) ? async function*() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return yield* a.apply(this, t)
                        }: a
                    }(t, e, n);
                    y(o) ? g(a.port1, o) : f(a.port1, o), l[e] = a.port2
                }
                o.postMessage(l, Object.values(l)), o.start();
                let c = new Set(e.generatorKeys ?? ["runUserCode"]),
                    u = Object.fromEntries(Object.entries(a).map(e => {
                        let [t, a] = e, o = c.has(t) ? g(a) : f(a);
                        if (null == n) return [t, o];
                        let i = e => {
                            let t = null == e.signal ? r.signal : AbortSignal.any([r.signal, e.signal]),
                                n = o.withOptions({
                                    ...e,
                                    signal: t
                                });
                            return function() {
                                for (var e = arguments.length, a = Array(e), o = 0; o < e; o++) a[o] = arguments[o];
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
                unsafeAllowAllNetworkRequests: o
            } = e;
            return t ? {
                disableNetworkRequests: !0,
                resourceDomains: [],
                connectDomains: [],
                isTrusted: !1
            } : o ? null : {
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
    PYah: (function(e, t, n) {
        var a = n("Dgwo");
        async function o(e, t, n, o) {
            let {
                apps: i
            } = await (0, a.b)(e, t).sendRequest("app/installed", {
                forceRefresh: !0,
                threadId: n
            }, null == o ? void 0 : {
                threadAccess: o,
                coalesce: !1
            });
            return new Set(i.filter(e => {
                let {
                    callable: t,
                    enabled: n
                } = e;
                return t && n
            }).map(e => {
                let {
                    id: t
                } = e;
                return t
            }))
        }
        n.d(t, {
            a: () => o
        })
    }),
    Btes: (function(e, t, n) {
        var a = n("kSHG"),
            o = n("qx55"),
            i = n("MrGp"),
            r = n("KhaL"),
            s = n("c5dW");

        function l(e) {
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
                    if ("current" !== t.get(o.d, c)) throw Error("MCP app connection identity changed")
                };
            if (f(), null == m) throw Error("MCP app connection identity changed");
            let h = "tpp" === t.get(i.x, n.id);
            return (0, r.b)({
                scope: t,
                accountId: m,
                appUri: `connectors://${l.connectorId}`,
                chatGptConversationId: n.id,
                threadId: h ? n.id : void 0,
                productSku: h ? "TPP" : void 0,
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
        n.d(t, {
            a: () => l
        })
    }),
    WBiY: (function(e, t, n) {
        var a = n("XnlH"),
            o = n("o0PZ"),
            i = n("toag"),
            r = n("Cslg"),
            s = n("dsow"),
            l = n("Sd8U"),
            c = n("dN0a"),
            u = n("WFY2"),
            d = n("f4ql"),
            p = n("uoRg");
        let m = (0, a.u)(l.a, () => []);

        function f(e, t) {
            if (null == e) return null;
            let n = e.get(p.a)?.submit;
            if (null != n) {
                var a, o;
                let i, l, d = (a = e, o = n, i = a.get(r.e), l = a.get(r.i), e => e(p.a)?.submit === o && e(r.e) === i && e(r.i) === l);
                return async (a, o, i, r) => {
                    i?.throwIfAborted();
                    let l = a.untrustedAppMessage?.sourceId,
                        f = e.get(p.a)?.isBusy == null ? void 0 : Symbol();
                    null != f && (e.set(m, e => [...e, f]), u.a.info("Queued app message for composer", {
                        safe: {
                            mcpAppId: l
                        }
                    }));
                    try {
                        let m = await (0, s.c)({
                            context: a,
                            signal: i,
                            requestConfirmation: r,
                            send: async a => {
                                if (e.get(p.a)?.submit !== n) throw new DOMException("Composer was closed", "AbortError");
                                return null != f && await h(e, d, i, f), t?.(), u.a.info("Submitting app message", {
                                    safe: {
                                        mcpAppId: l
                                    }
                                }), n(a, o, i)
                            }
                        });
                        return (0, c.h)(e, {
                            prefersReducedMotion: !0
                        }), null != m && u.a.info("sent" === m.status ? "Sent app message" : "Queued app message", {
                            safe: {
                                mcpAppId: l,
                                messageId: m.messageId,
                                serverAccepted: "queued" === m.status ? m.serverAccepted : void 0
                            }
                        }), m
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
                    } finally {
                        null != f && e.set(m, e => e.filter(e => e !== f))
                    }
                }
            }
            if ("local" !== e.value.kind || null == e.value.conversationId) return null;
            let l = e.value.conversationId,
                f = e.get(i.v, l);
            return null == f ? null : async (n, a, o, r) => {
                let p = n.untrustedAppMessage?.sourceId;
                try {
                    let a = await (0, s.c)({
                        context: n,
                        signal: o,
                        requestConfirmation: r,
                        send: n => (t?.(), u.a.info("Submitting app message", {
                            safe: {
                                mcpAppId: p
                            }
                        }), (0, d.a)(e, e.get(i.Bb, l), l, {
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
                            mcpAppId: p,
                            messageId: a.messageId,
                            serverAccepted: "queued" === a.status ? a.serverAccepted : void 0
                        }
                    }), a
                } catch (t) {
                    let e = o?.aborted === !0 || t instanceof DOMException && "AbortError" === t.name;
                    throw u.a[e ? "info" : "warning"](e ? "Cancelled app message submission" : "Failed to submit app message", {
                        safe: {
                            mcpAppId: p
                        },
                        sensitive: {
                            error: t
                        }
                    }), t
                }
            }
        }
        async function h(e, t, n, a) {
            let i = e => e(m)[0] === a && e(p.a)?.isBusy !== !0;
            do {
                let a = (0, o.Me)(),
                    r = e.watch(e => {
                        let {
                            get: n
                        } = e;
                        (!t(n) || i(n)) && a.resolve(void 0)
                    });
                try {
                    await (null == n ? a.promise : (0, o.ef)(a.promise, n))
                } finally {
                    r(), a.resolve(void 0)
                }
                if (n?.throwIfAborted(), !t(e.get)) throw new DOMException("Composer was closed", "AbortError")
            } while (!i(e.get))
        }

        function g(e) {
            e.get(p.a)?.clearDraftAttachments()
        }

        function b(e) {
            return e?.get(p.a)?.newThreadDestination
        }

        function v(e, t, n) {
            return e.get(p.a)?.updatePrompt?.(t, n) ?? !1
        }
        n.d(t, {
            a: () => g,
            b: () => b,
            c: () => v,
            getMcpAppSubmit: () => f
        })
    }),
    ywSA: (function(e, t, n) {
        function a() {
            return Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(514247)]).then(n.bind(n, "shkb"))
        }
        n.d(t, {
            a: () => a
        })
    }),
    o62A: (function(e, t, n) {
        var a = n("i5ac"),
            o = (n("o0PZ"), n("P61R")),
            i = (n("Dgwo"), n("toag"), n("KJ1J"));

        function r(e) {
            return !1
        }

        function s(e) {
            let {
                mcpAppScope: t,
                resourceIdentity: n,
                server: a
            } = e, r = "connector" === n.identity.kind ? n.identity.connectorId : null;
            return "internal://plugin-management-suggestions" === t.originResourceUri && (0, i.e)(a) && r === o.a && t.codexAppsToolScope?.connectorId === r
        }

        function l(e) {
            let {
                scope: t,
                conversationId: n,
                hostId: a,
                installPlugin: o,
                mcpAppScope: i,
                navigate: r,
                resourceIdentity: s,
                server: l,
                sessionId: c,
                sourceMcpAppId: u,
                toolResult: d
            } = e;
            return null
        }
        n("tTIR"), n("VvpR"), n("PYah"), n("X6Vn"), n("mdWu"), n("jAhM"), n("taUf"), n("ALWK"), n("joT6"), n("loz7"), n("EEop"), n("ueue"), n("tSEg"), n.d(t, {
            a: () => l,
            b: () => s,
            c: () => r
        })
    }),
    vgfv: (function(e, t, n) {
        var a = n("g25Y"),
            o = n("X6Vn");

        function i(e, t) {
            let n = Math.floor(window.screenX + (window.outerWidth - 600) / 2),
                i = Math.floor(window.screenY + (window.outerHeight - 750) / 2),
                r = () => {
                    window.open(t, "_blank", `popup=yes,width=600,height=750,left=${n},top=${i},noopener,noreferrer`)
                };
            "Apple Computer, Inc." === navigator.vendor ? (0, o.f)(e, a.ExternalLinkConfirmationDialog, {
                href: t,
                initiator: "mcp_app_resource",
                onOpen: r
            }) : r()
        }
        n.d(t, {
            a: () => i
        })
    }),
    uJ0o: (function(e, t, n) {
        var a = n("XnlH"),
            o = n("tSEg"),
            i = n("dN0a");
        let r = (0, a.u)(o.a, () => null),
            s = (0, a.h)(o.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return (t(r) ?? n).get(i.k)
            }, e => {
                let {
                    scope: t,
                    get: n,
                    set: a
                } = e;
                return (n(r) ?? t).watch(e => {
                    let {
                        get: t
                    } = e;
                    a(t(i.k))
                })
            });
        n.d(t, {}, {
            a: s,
            b: r
        })
    }),
    iWnb: (function(e, t, n) {
        let a, o, i;
        n.d(t, {
            a: () => nc
        });
        var r = n("ABep"),
            s = n("QosV"),
            l = n("z8ZL"),
            c = n("kSHG"),
            u = n("uzDN"),
            d = n("TPAN"),
            p = n("t0Nb"),
            m = n("kUij"),
            f = n("pLEI"),
            h = n("hEgg"),
            g = n("tFOa"),
            b = n("SZCv"),
            v = n.n(b),
            y = n("XnlH"),
            w = n("o0PZ"),
            I = n("AuIy"),
            _ = n("F6B1"),
            x = n("zd8w"),
            S = n("v7qY"),
            E = n("Wf1j"),
            A = n("HZfM"),
            C = n("ASxG"),
            M = n("KJ1J"),
            P = n("eFoC"),
            T = n("PFjh"),
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
            L = C.enum(["ads_manager.view_shown", "ads_manager.action_clicked", "ads_manager.billing_close_result"]),
            O = {
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
            F = C.array(C.object({
                key: C.string(),
                value: C.unknown().optional()
            }).nullable().catch(null)),
            U = C.discriminatedUnion("type", [C.object({
                type: C.literal("event"),
                label: L,
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
                    step_number: q(1),
                    step_count: q(),
                    preview_kind: C.enum(["draft", "existing"]).optional().catch(void 0),
                    reason: C.enum(["image_load_failed", "load_timeout", "media_unavailable", "refresh_failed", "action_failed"]).optional().catch(void 0),
                    position: q(1),
                    page: q(1),
                    page_count: q(1),
                    page_size: q(1),
                    total_count: q(),
                    next_page: q(1)
                })
            }), C.object({
                type: C.literal("count"),
                label: L,
                count: C.literal(1).optional(),
                tags: F
            })]);

        function q() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return C.number().int().min(e).max(0x7fffffff).optional().catch(void 0)
        }
        var W = n("hzGf"),
            G = n("Dgwo"),
            H = n("toag"),
            B = n("qx55"),
            z = n("sM3V"),
            V = n("bjsR"),
            $ = n("ZU27"),
            X = n("DiD0"),
            Z = n("SK3E"),
            Y = n("gbrq"),
            K = (n("Sbyb"), n("Btes")),
            J = n("TSib"),
            Q = n("ipIJ"),
            ee = n("uoRg"),
            et = n("qXzS"),
            en = n("Q8aV"),
            ea = n("dN0a"),
            eo = n("qbxq"),
            ei = n("uIyc"),
            er = n("WBiY");

        function es(e) {
            if (e.attachment?.content?.some(e => !(0, eo.d)(e))) throw Error("App draft attachments must be visible to the user")
        }
        var el = n("Ot7V"),
            ec = n("B09n"),
            eu = n("PeqE"),
            ed = n("ywSA"),
            ep = n("WAj2"),
            em = n("eB3o"),
            ef = n("Fkn8");
        a = (0, em._)(Symbol.dispose);
        class eh {
            #e = new eg;
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
        o = (0, em._)(Symbol.dispose);
        class eg {
            #n = null;
            #a = [];
            #o = null;
            #i = null;
            setNotificationSender(e) {
                this.#i = e
            }
            send(e) {
                return null != this.#n ? Promise.reject(this.#n) : null == this.#i ? Promise.reject(Error("First-party plugin bridge notifications are unavailable.")) : (this.#i({
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
                    this.#o = {
                        reject: t,
                        resolve: e
                    }
                })
            }
            receiveMessage(e) {
                if (null != this.#n) throw this.#n;
                let t = this.#o;
                null == t ? this.#a.push(e) : (this.#o = null, t.resolve(e))
            }
            abort(e) {
                null == this.#n && (this.#n = e instanceof Error ? e : Error("The first-party plugin bridge was disconnected."), this.#a.length = 0, this.#i = null, this.#o?.reject(this.#n), this.#o = null)
            } [o]() {
                this.abort(Error("The first-party plugin bridge was disconnected."))
            }
        }
        var eb = n("WFY2"),
            ev = n("ReGc"),
            ey = n("Cslg"),
            ew = n("ALWK");
        async function eI(e, t) {
            let {
                mcpAppId: n,
                requestModal: a,
                payload: o,
                signal: i,
                accountId: r,
                frameAccountId: s
            } = t;
            if (null == a) throw Error("Finance account linking is unavailable");
            if (!i.aborted && s === r && e.get(ey.e) === r && await a(o, i) && !i.aborted && e.get(ey.e) === r) {
                let t = e.get(ew.r, n);
                if (null == t) return;
                (0, ew.D)(e, n, {
                    sandboxGeneration: t.sandboxGeneration + 1
                })
            }
        }
        var e_ = n("F8wW"),
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
                    conversationId: o
                } = this.params;
                if (null == n || null == o) return;
                let {
                    subscriptionId: i
                } = a, r = {
                    hostId: this.params.hostId,
                    server: this.params.server,
                    conversationId: o,
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
                                conversationId: r.conversationId,
                                connectorId: r.connectorId,
                                linkId: r.linkId,
                                widgetSubscriptionId: r.widgetSubscriptionId,
                                hostSubscriptionId: r.hostSubscriptionId
                            },
                            sensitive: {
                                event: r.event,
                                hostId: r.hostId,
                                server: r.server
                            }
                        });
                        let t = (0, eM.a)(e, await (0, G.b)(this.params.scope, this.params.hostId).getFollowUpContext(o), !1);
                        await this.params.scope.get(H.f, this.params.hostId).sendRequest("mcpServer/event/stream/start", {
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
                            threadId: o
                        }, {
                            timeoutMs: 95e3,
                            threadAccess: t?.threadAccess
                        }), eb.a.info("Started app event subscription", {
                            safe: {
                                hostSubscriptionId: r.hostSubscriptionId
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
                                hostSubscriptionId: r.hostSubscriptionId
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
                }), await this.params.scope.get(H.f, this.params.hostId).sendRequest("mcpServer/event/stream/stop", {
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
        class eD {
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
                    if (t?.throwIfAborted(), !this.isNotificationSinkConnected) throw new eO;
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
                } = this.params, a = `${t}\0${n}`, o = (eN.get(a) ?? Promise.resolve()).then(e), i = o.then(() => void 0, () => void 0);
                return eN.set(a, i), i.then(() => {
                    eN.get(a) === i && eN.delete(a)
                }), o
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
                if (null == n) throw new eL(e);
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
                }), await (0, G.b)(this.params.scope, this.params.hostId).setOpenMcpResources(e, this.params.mcpAppId, [...this.subscriptions].map(t => {
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
        class eL extends Error {
            uri;
            code = -32602;
            name = "McpResourceNotSubscribableError";
            constructor(e) {
                super("MCP resource is not subscribable"), this.uri = e
            }
        }
        class eO extends Error {
            code = -32601;
            name = "McpResourceSubscriptionsUnavailableError";
            constructor() {
                super("MCP resource subscriptions are unavailable")
            }
        }
        var eF = n("zxca"),
            eU = n("XROL"),
            eq = n("DKJJ"),
            eW = n("vgfv"),
            eG = n("Ztsm"),
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

        function eZ(e, t) {
            let n = eV.safeParse(e);
            return n.success ? (0, eB.a)(n.data.message, n.data.code ?? -32e3, e) : e instanceof Error && e.message.length > 0 ? (0, eB.a)(e.message, -32e3, e) : (0, eB.a)(t, -32e3, e)
        }
        var eY = n("JXtc"),
            eK = n("a4MG");
        async function eJ(e) {
            let {
                scope: t,
                hostId: n,
                mcpServerStatuses: a,
                server: o,
                threadId: i,
                detail: r = "toolsAndAuthOnly"
            } = e, s = a?.data.find(e => {
                let {
                    name: t
                } = e;
                return t === o
            }) ?? null;
            if (null == i && null != s) return s;
            let l = (null == i ? await (0, G.b)(t, n).listMcpServers({
                cursor: null,
                limit: 100
            }, {
                priority: "interactive"
            }) : await t.query.fetch(eK.o, {
                hostId: n,
                threadId: i,
                serverName: o,
                detail: r
            })).data.find(e => {
                let {
                    name: t
                } = e;
                return t === o
            }) ?? null;
            if (null == l) throw (0, eB.a)(`MCP server not found: ${o}`, -32e3);
            return l
        }

        function eQ(e) {
            return Object.values(e.tools).filter(e => null != e)
        }
        var e0 = n("cDR4"),
            e1 = n("ILnd"),
            e2 = n("kjQz"),
            e3 = n("ntKy"),
            e6 = n("GaA7"),
            e5 = n("OWtl"),
            e8 = n("Sd8U"),
            e4 = n("tSEg"),
            e7 = n("B85l"),
            e9 = n("hZax"),
            te = n("jdxe"),
            tt = n("ripK"),
            tn = n("bIvi"),
            ta = n("yyZv"),
            to = n("hkUn"),
            ti = n("nKJ6"),
            tr = n("XXJV"),
            ts = n("uJ0o");
        async function tl(e, t, n) {
            let a = new Image;
            a.src = t, await a.decode();
            let o = document.createElement("canvas");
            o.width = a.naturalWidth, o.height = a.naturalHeight;
            let i = o.getContext("2d", {
                alpha: !1
            });
            if (null == i || !e.isConnected) throw Error("MCP App screenshot surface is unavailable.");
            let r = [];
            for (let t = e; null != t; t = t.parentElement) r.push(getComputedStyle(t).backgroundColor);
            for (let e of (i.fillStyle = "Canvas", i.fillRect(0, 0, o.width, o.height), r.reverse())) i.fillStyle = e, i.fillRect(0, 0, o.width, o.height);
            return i.drawImage(a, 0, 0), o.toDataURL("image/jpeg", n / 100).slice(23)
        }
        let tc = (0, y.i)(e4.a, (e, t) => {
            let {
                get: n,
                scope: a
            } = t;
            return (n(ts.b) ?? a).get(tr.f, e)
        }, (e, t) => {
            let {
                get: n,
                scope: a,
                set: o
            } = t;
            return (n(ts.b) ?? a).watch(t => {
                let {
                    get: n
                } = t;
                o(n(tr.f, e))
            })
        });

        function tu(e) {
            let t, n, a, o, i = (0, s.c)(24),
                {
                    panelTabId: r,
                    sandboxElement: l,
                    sandboxId: c,
                    title: u
                } = e,
                d = (0, y.y)(e4.a),
                p = (0, y.z)(ts.b) ?? d,
                m = (0, e9.h)("1146407612"),
                f = null != (0, y.x)(tc, r);
            i[0] !== p ? (t = (0, ti.getThreadBrowserConversationId)(p), i[0] = p, i[1] = t) : t = i[1];
            let h = t;
            i[2] !== r || i[3] !== p ? (n = () => {
                let e = p.get(tr.f, r);
                null != r && null != e && (0, tr.activateThreadPanelTab)(p, e, r)
            }, i[2] = r, i[3] = p, i[4] = n) : n = i[4];
            let g = (0, x.useEffectEvent)(n);
            return i[5] !== h || i[6] !== m || i[7] !== f || i[8] !== r || i[9] !== g || i[10] !== l || i[11] !== c || i[12] !== p || i[13] !== u ? (a = () => {
                if (!m || !f || null == h || e6.appServices?.mcpAppSandbox == null) return;
                let e = (0, _.g)(l.getAttribute("src") ?? void 0);
                if (null == e) return;
                let t = e6.appServices.mcpAppSandbox.registerBrowserTarget({
                    conversationId: h,
                    initId: e,
                    sandboxId: c,
                    title: u
                }, g, (e, t) => tl(l, e, t));
                t.catch(tp);
                let n = p.watch(e => {
                    let {
                        get: n
                    } = e, a = n(tr.f, r), o = !n(e4.h) && null != a && ("bottom" === a ? n(Y.d) : n(Y.i) && n(Y.j)) && n((0, tr.getThreadPanelTabController)(a).visibleTabs$).some(e => {
                        let {
                            tab: t
                        } = e;
                        return t.tabId === r
                    });
                    t.setPresented(o).catch(td)
                });
                return () => {
                    n(), t[Symbol.dispose]()
                }
            }, i[5] = h, i[6] = m, i[7] = f, i[8] = r, i[9] = g, i[10] = l, i[11] = c, i[12] = p, i[13] = u, i[14] = a) : a = i[14], i[15] !== h || i[16] !== m || i[17] !== f || i[18] !== r || i[19] !== l || i[20] !== c || i[21] !== p || i[22] !== u ? (o = [m, r, h, f, l, c, u, p], i[15] = h, i[16] = m, i[17] = f, i[18] = r, i[19] = l, i[20] = c, i[21] = p, i[22] = u, i[23] = o) : o = i[23], (0, x.useEffect)(a, o), null
        }

        function td(e) {
            eb.a.info("mcp_app_sandbox.browser_presentation_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function tp(e) {
            eb.a.info("mcp_app_sandbox.browser_target_failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        let tm = "ui/openai/find",
            tf = C.object({
                method: C.literal(tm),
                params: C.object({
                    enabled: C.boolean()
                })
            }),
            th = C.object({
                method: C.literal("ui/notifications/openai/find"),
                params: C.object({
                    command: C.enum(["open", "next", "previous"])
                })
            });
        i = (0, em._)(Symbol.dispose);
        class tg {
            registration = null;
            handleRequest(e, t) {
                let {
                    sandboxElement: n,
                    sandboxId: a,
                    initId: o,
                    signal: i,
                    notify: r
                } = t, s = tf.safeParse(e);
                if (!s.success || i.aborted || e6.appServices?.mcpAppSandbox == null || null == r || null == o) return null;
                if (this[Symbol.dispose](), !s.data.params.enabled) return Promise.resolve({});
                let l = e6.appServices.mcpAppSandbox.registerFindTarget({
                    sandboxId: a,
                    initId: o
                }, async e => n.ownerDocument.activeElement === n && (await r({
                    method: th.shape.method.value,
                    params: {
                        command: e
                    }
                }), !0));
                return this.registration = l, l.then(() => ({}))
            } [i]() {
                this.registration?.[Symbol.dispose](), this.registration = null
            }
        }
        var tb = n("nlNF");

        function tv(e) {
            let t, n, a = (0, s.c)(8),
                {
                    sandboxElement: o,
                    sandboxId: i
                } = e,
                r = (0, y.y)(e5.a),
                {
                    pathname: l,
                    search: c
                } = (0, A.X)(),
                u = (0, A.Z)();
            return a[0] !== u || a[1] !== l || a[2] !== o || a[3] !== i || a[4] !== r || a[5] !== c ? (t = () => {
                let e;
                if (e6.appServices?.mcpAppSandbox == null || ![w.Oc, w.Pc, w._c, "/plugins/:pluginId/app/:toolName"].some(e => (0, A.J)(e, l))) return;
                let t = (0, w.Bg)(o.getAttribute("src") ?? void 0);
                if (null == t) return;
                let n = !1,
                    a = Promise.resolve(),
                    s = !1,
                    d = () => {
                        let e = r.get(tb.c);
                        return e?.pathname === l && e.search === c ? e : null
                    },
                    p = e6.appServices.mcpAppSandbox.registerHistoryTarget({
                        sandboxId: i,
                        initId: t
                    }, o => {
                        let p = o.entryIds[o.currentIndex];
                        if (null == p || e === p) {
                            e = void 0;
                            return
                        }
                        a = a.then(async () => {
                            let e = d();
                            if (n || null == e || "committed" !== o.reason) return;
                            let a = e.state?.mcpHistory;
                            if (a?.sandboxId === i && a.initId === t && a.entryId === p) return;
                            s = !0;
                            let m = o.previousEntryId ?? o.entryIds[o.previousIndex ?? -1],
                                f = r.get(tb.j),
                                h = Math.sign(o.currentIndex - (null == m ? o.currentIndex : o.entryIds.indexOf(m)));
                            if (null != f && 0 !== h)
                                for (let e = f.index + h; e >= 0 && e < f.entries.length; e += h) {
                                    let n = f.entries[e];
                                    if (n.pathname !== l || n.search !== c || n.state?.mcpHistory?.sandboxId !== i || n.state.mcpHistory.initId !== t) break;
                                    if (n.state.mcpHistory.entryId === p) return u(e - f.index)
                                }(a?.sandboxId !== i || a.initId !== t) && null != m && m !== p && (await u(e, {
                                    replace: !0,
                                    flushSync: !0,
                                    state: {
                                        ...e.state,
                                        mcpHistoryNavigation: !0,
                                        mcpHistory: {
                                            sandboxId: i,
                                            initId: t,
                                            entryId: m
                                        }
                                    }
                                }), e = d(), n || null == e) || await u(e, {
                                    replace: o.didReplaceEntry || null == m || m === p,
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
                    m = r.watch(a => {
                        let {
                            get: o
                        } = a;
                        o(tb.c);
                        let l = d(),
                            c = l?.state?.mcpHistory,
                            m = r.get(tb.j);
                        !s && c?.sandboxId === i && (c.initId === t || m?.entries.some(e => e.state?.mcpHistory?.sandboxId === i && e.state.mcpHistory.initId === t)) && (e = c.entryId, p.then(async a => {
                            if (!n && d()?.key === l?.key) {
                                let o = c.initId !== t ? "missing" : await a?.go(c.entryId);
                                "ok" !== o && e === c.entryId && (e = void 0), "missing" !== o || n || d()?.key !== l?.key || null == m || 0 === m.popDelta || await u(Math.sign(m.popDelta))
                            }
                        }))
                    });
                return () => {
                    n = !0, m(), p[Symbol.dispose]()
                }
            }, n = [l, c, o, i, r, u], a[0] = u, a[1] = l, a[2] = o, a[3] = i, a[4] = r, a[5] = c, a[6] = t, a[7] = n) : (t = a[6], n = a[7]), (0, x.useEffect)(t, n), null
        }
        var ty = n("LKvW");
        let tw = {
                insets: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            },
            tI = {
                insets: {
                    ...tw.insets,
                    top: 48
                }
            };

        function t_(e) {
            let {
                availableDisplayModes: t,
                containerDimensions: n,
                displayMode: a,
                locale: o,
                modelContextHostState: i,
                deepLink: r,
                safeAreaInsets: s,
                styleVariables: l,
                theme: c,
                userAgent: u,
                toolInfo: d
            } = e;
            return {
                "openai/interactionCursor": getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
                ...void 0 === i ? {} : {
                    [h.a]: i
                },
                ...null == r ? {} : {
                    [ty.a]: r
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
                locale: o,
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

        function tx(e, t, n) {
            return {
                maxHeight: t || "inline" !== n ? e.clientHeight : void 0,
                maxWidth: e.clientWidth
            }
        }

        function tS() {
            return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        }

        function tE(e) {
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
            tC = n("OM8g"),
            tM = n("on57"),
            tP = n("WSFD"),
            tT = n("fm8Z"),
            tk = n("IhIa");
        let tR = C.union([g.b, C.object({
                target: C.enum(["active", "new"]).optional(),
                send: C.literal(!1)
            }).strict()]),
            tj = g.c.extend({
                _meta: g.c.shape._meta.unwrap().extend({
                    "openai/message": tR.optional()
                }).optional()
            });

        function tN(e) {
            for (let t of e ?? [])
                if ("text" !== t.type && "resource_link" !== t.type && "resource" !== t.type && ("image" !== t.type || !tk.f.safeParse(`data:${t.mimeType};base64,${t.data}`).success)) throw Object.assign(Error("Unsupported MCP app content"), {
                    code: -32602
                })
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
        var tL = n("engp");
        let tO = (0, y.j)(e8.a, (e, t) => {
            let {
                derived: n
            } = t;
            return n((t, n) => {
                let {
                    scope: a
                } = n, o = a.get(J.w).find(t => t.id === e && "context" === t.kind);
                return o?.modelContextUpdateId == null ? null : {
                    updateId: o.modelContextUpdateId,
                    content: o.content?.length ? o.content : void 0,
                    structuredContent: o.structuredContent
                }
            }, {
                isEqual: v()
            })
        });
        var tF = n("ygO2"),
            tU = n("HOLv"),
            tq = n("CqQF"),
            tW = n("jqBF");

        function tG(e) {
            let t, n, a, o, i, l, c, u = (0, s.c)(23),
                {
                    backLabel: d,
                    canGoBack: p,
                    canGoForward: m,
                    color: f,
                    forwardLabel: h,
                    onBack: g,
                    onForward: b,
                    radius: v
                } = e,
                y = void 0 === f ? "ghost" : f,
                w = p ? y : "ghost",
                I = !p;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(tU.a, {
                "aria-hidden": !1,
                asset: tW.a
            }), u[0] = t) : t = u[0], u[1] !== d || u[2] !== g || u[3] !== v || u[4] !== w || u[5] !== I ? (n = (0, r.jsx)(tF.a, {
                "aria-label": d,
                color: w,
                disabled: I,
                onClick: g,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: t
            }), u[1] = d, u[2] = g, u[3] = v, u[4] = w, u[5] = I, u[6] = n) : n = u[6], u[7] !== d || u[8] !== n ? (a = (0, r.jsx)(tq.a, {
                tooltipContent: d,
                side: "bottom",
                children: n
            }), u[7] = d, u[8] = n, u[9] = a) : a = u[9];
            let _ = m ? y : "ghost",
                x = !m;
            return u[10] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r.jsx)(tU.a, {
                className: "-scale-x-100 transform",
                "aria-hidden": !1,
                asset: tW.a
            }), u[10] = o) : o = u[10], u[11] !== h || u[12] !== b || u[13] !== v || u[14] !== _ || u[15] !== x ? (i = (0, r.jsx)(tF.a, {
                "aria-label": h,
                color: _,
                disabled: x,
                onClick: b,
                radius: v,
                size: "toolbar",
                uniform: !0,
                children: o
            }), u[11] = h, u[12] = b, u[13] = v, u[14] = _, u[15] = x, u[16] = i) : i = u[16], u[17] !== h || u[18] !== i ? (l = (0, r.jsx)(tq.a, {
                tooltipContent: h,
                side: "bottom",
                children: i
            }), u[17] = h, u[18] = i, u[19] = l) : l = u[19], u[20] !== l || u[21] !== a ? (c = (0, r.jsxs)(r.Fragment, {
                children: [a, l]
            }), u[20] = l, u[21] = a, u[22] = c) : c = u[22], c
        }

        function tH(e) {
            let t, n, a, o, i, l, c, u = (0, s.c)(20),
                {
                    className: d,
                    canGoBack: p,
                    canGoForward: m,
                    onBack: f,
                    onForward: h
                } = e,
                g = (0, E.a)();
            u[0] !== g ? (t = g.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationBack",
                defaultMessage: "Back",
                description: "Button label for moving to the previous page in an embedded MCP app's navigation history"
            }), u[0] = g, u[1] = t) : t = u[1];
            let b = t;
            u[2] !== g ? (n = g.formatMessage({
                id: "codex.mcpTool.mcpAppNavigationForward",
                defaultMessage: "Next",
                description: "Button label for moving forward to the next page in an embedded MCP app's navigation history; paired with the Back button"
            }), u[2] = g, u[3] = n) : n = u[3];
            let v = n;
            return u[4] !== d ? (a = (0, tM.b)("flex items-center gap-px", d), u[4] = d, u[5] = a) : a = u[5], u[6] !== f ? (o = e => {
                e.stopPropagation(), f()
            }, u[6] = f, u[7] = o) : o = u[7], u[8] !== h ? (i = e => {
                e.stopPropagation(), h()
            }, u[8] = h, u[9] = i) : i = u[9], u[10] !== b || u[11] !== p || u[12] !== m || u[13] !== v || u[14] !== o || u[15] !== i ? (l = (0, r.jsx)(tG, {
                backLabel: b,
                canGoBack: p,
                canGoForward: m,
                forwardLabel: v,
                onBack: o,
                onForward: i
            }), u[10] = b, u[11] = p, u[12] = m, u[13] = v, u[14] = o, u[15] = i, u[16] = l) : l = u[16], u[17] !== a || u[18] !== l ? (c = (0, r.jsx)("div", {
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
            tX = n("Dx08"),
            tZ = n("nsed"),
            tY = n("IWEP");
        let tK = C.preprocess(function(e, t) {
            let n = new WeakSet,
                a = C.record(C.string(), C.unknown()),
                o = (e, i) => {
                    if (null == e || "object" != typeof e) return e;
                    if (n.has(e)) return t.addIssue({
                        code: "custom",
                        path: i,
                        message: "Cyclic tool arguments"
                    }), tY.e;
                    n.add(e);
                    try {
                        if (Array.isArray(e)) return e.map((e, t) => o(e, [...i, t]));
                        let n = a.safeParse(e);
                        if (!n.success) {
                            for (let e of n.error.issues) t.addIssue({
                                ...e,
                                path: [...i, ...e.path]
                            });
                            return tY.e
                        }
                        return Object.fromEntries(Object.entries(n.data).filter(e => {
                            let [, t] = e;
                            return void 0 !== t
                        }).map(e => {
                            let [t, n] = e;
                            return [t, o(n, [...i, t])]
                        }))
                    } finally {
                        n.delete(e)
                    }
                };
            return o(e, [])
        }, C.record(C.string(), C.json()));

        function tJ(e) {
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
        let t6 = ["resources/subscribe", "resources/unsubscribe"],
            t5 = ["openai/events/subscribe", "openai/events/unsubscribe"],
            t8 = C.json(),
            t4 = C.object({
                mode: C.enum(["inline", "fullscreen"])
            }),
            t7 = C.object({
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
                arguments: tK.optional(),
                _meta: nn.optional()
            }).loose(),
            no = C.object({
                uri: C.string().min(1)
            }).loose(),
            ni = C.object({
                arguments: C.record(C.string(), t8).optional(),
                name: C.string().regex(/\S/),
                subscriptionId: C.uuid()
            }),
            nr = C.object({
                subscriptionId: C.uuid()
            }),
            ns = C.number().positive(),
            nl = {
                canGoBack: !1,
                canGoForward: !1
            };

        function nc(e) {
            let t, n, a, o = (0, s.c)(9),
                {
                    isAccessRevoked: i,
                    allowGlobalHost: l,
                    sessionId: c
                } = e,
                u = void 0 !== i && i,
                d = void 0 === l || l,
                p = (0, y.y)(e4.a),
                m = (0, y.x)(ew.r, c);
            return o[0] !== p || o[1] !== c ? (t = () => {
                let e, t, n, a, o, i, r, s, l, u;
                return n = !1, a = !1, o = null, i = () => {
                    clearTimeout(t), t = void 0
                }, r = e => {
                    if (a = e, i(), a) {
                        o = null, (0, ew.D)(p, c, {
                            isSuspended: !1
                        });
                        return
                    }
                    null == o && (o = performance.now()), t = setTimeout(() => {
                        let e = l.takeRecords();
                        e.length > 0 ? s(e) : (eb.a.info("mcp_app_sandbox.session_suspended", {
                            safe: {
                                reason: "offscreen_timeout"
                            },
                            sensitive: {
                                mcpAppId: c
                            }
                        }), (0, ew.D)(p, c, {
                            isSuspended: !0
                        }))
                    }, Math.max(0, 3e5 - (performance.now() - o)))
                }, l = new IntersectionObserver(s = t => {
                    for (let n of t) n.target === e && r(n.isIntersecting)
                }), u = p.watch(t => {
                    let {
                        get: u
                    } = t;
                    u(tb.c);
                    let d = u(ew.r, c),
                        m = null == d ? null : u(ew.j, d.sourceMcpAppId),
                        f = m?.hostedInThreadScrollLayout === !0 && !m.content.fullSurface && d?.displayMode === "inline" && null == u($.j.tabById$, (0, te.b)(c)),
                        h = (0, tb.g)(p),
                        g = f ? m.inlineFrameContainer : void 0;
                    f && !h && (g = null), (e !== g || n !== h) && (n = h, s(l.takeRecords()), l.disconnect(), i(), void 0 === (e = g) ? (a = !1, o = null, (0, ew.D)(p, c, {
                        isSuspended: !1
                    })) : null == e ? queueMicrotask(() => {
                        e === g && r(a && !(0, tb.g)(p))
                    }) : l.observe(e))
                }), () => {
                    e = void 0, u(), l.disconnect(), i()
                }
            }, n = [p, c], o[0] = p, o[1] = c, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, x.useEffect)(t, n), o[4] !== d || o[5] !== m || o[6] !== u || o[7] !== c ? (a = null == m ? null : (0, r.jsx)(nu, {
                sessionId: c,
                frameState: m,
                sourceMcpAppId: m.sourceMcpAppId,
                isAccessRevoked: u,
                allowGlobalHost: d
            }), o[4] = d, o[5] = m, o[6] = u, o[7] = c, o[8] = a) : a = o[8], a
        }

        function nu(e) {
            let t, n, a, o, i, l, c, u, d = (0, s.c)(26),
                {
                    sessionId: p,
                    sourceMcpAppId: m,
                    frameState: f,
                    isAccessRevoked: h,
                    allowGlobalHost: g
                } = e,
                b = (0, y.y)(e4.a);
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, eH.b)(), d[0] = t) : t = d[0];
            let v = (0, e9.h)(t),
                w = (0, y.x)(ta.b, m),
                I = h || w,
                _ = (0, y.x)(ew.j, m),
                S = _?.content ?? null,
                E = S?.mcpAppHostAdapter?.retain;
            d[1] !== b || d[2] !== p ? (n = () => (0, tV.b)(b, p), a = [b, p], d[1] = b, d[2] = p, d[3] = n, d[4] = a) : (n = d[3], a = d[4]), (0, x.useLayoutEffect)(n, a), d[5] !== E || d[6] !== b || d[7] !== m ? (o = () => E?.(b, m), i = [E, b, m], d[5] = E, d[6] = b, d[7] = m, d[8] = o, d[9] = i) : (o = d[8], i = d[9]), (0, x.useLayoutEffect)(o, i);
            let A = (0, y.x)(B.d, S?.resourceIdentity ?? null);
            if (d[10] !== A || d[11] !== _ || d[12] !== b || d[13] !== I || d[14] !== m ? (l = () => {
                    null != _ && (I || "changed" === A) && (eb.a.info("Revoked app sandbox registration", {
                        safe: {
                            shouldRemoveFrame: I,
                            identityStatus: A,
                            mcpAppId: _.sessionId,
                            sourceMcpAppId: m
                        }
                    }), (0, ew.z)(b, m))
                }, c = [m, _, b, I, A], d[10] = A, d[11] = _, d[12] = b, d[13] = I, d[14] = m, d[15] = l, d[16] = c) : (l = d[15], c = d[16]), (0, x.useLayoutEffect)(l, c), !v || I || f.isSuspended || nh(f.sandboxError) || null == _ || null == S || "current" !== A) return null;
            let C = (0, eC.c)(S);
            if (C && (null == S.toolResult || null != S.toolCallStatus)) return null;
            let M = C ? nd : np;
            return d[17] !== M || d[18] !== g || d[19] !== S || d[20] !== f || d[21] !== _.hostedInThreadScrollLayout || d[22] !== _.inlineFrameContainer || d[23] !== p || d[24] !== m ? (u = (0, r.jsx)(M, {
                ...S,
                resource: S.resource,
                hostedInThreadScrollLayout: _.hostedInThreadScrollLayout,
                inlineFrameContainer: _.inlineFrameContainer,
                allowGlobalHost: g,
                sessionId: p,
                sourceMcpAppId: m,
                frameState: f
            }, f.sandboxGeneration), d[17] = M, d[18] = g, d[19] = S, d[20] = f, d[21] = _.hostedInThreadScrollLayout, d[22] = _.inlineFrameContainer, d[23] = p, d[24] = m, d[25] = u) : u = d[25], u
        }

        function nd(e) {
            let t, n, a = (0, s.c)(5),
                o = (0, y.y)(e4.a);
            return a[0] !== o ? (t = (e, t) => (0, e3.installPlugin)(o, e, t), a[0] = o, a[1] = t) : t = a[1], a[2] !== e || a[3] !== t ? (n = (0, r.jsx)(np, {
                ...e,
                inheritHostBackground: !0,
                installPlugin: t
            }), a[2] = e, a[3] = t, a[4] = n) : n = a[4], n
        }

        function np(e) {
            let {
                recipient: t,
                resource: n,
                analyticsContext: a,
                conversationId: o,
                firstPartyPluginBridge: i,
                firstPartyPluginLoggerPluginId: s,
                pluginId: b,
                fullSurface: L,
                modalOpen: F = !1,
                hostScroll: q = !1,
                hostDisplayModes: G,
                hostId: K,
                hostedInThreadScrollLayout: em,
                resourceIdentity: ef,
                inheritHostBackground: eg = !1,
                installPlugin: ey,
                inlineFrameContainer: eM,
                allowGlobalHost: eP,
                sessionId: ek,
                sourceMcpAppId: eN,
                mcpAppScope: eL,
                sourceName: eO,
                mcpServerStatuses: eH,
                mcpAppHostAdapter: eV,
                getNewThreadDestination: eK,
                widgetStatePersistence: e1,
                plaidAccountId: e3,
                deepLink: e9,
                rightPanelLayoutTick: ta,
                resolveResourceWatchPath: ti,
                server: tr,
                appIcon: tl,
                sidePanelTitle: tc,
                title: td,
                globalSurface: tp = !1,
                toolArguments: tf,
                toolResult: th,
                toolResultNotification: tb,
                toolCallStatus: ty,
                toolCallCancellationReason: tk,
                viewParamsOverride: tR,
                frameState: tF
            } = e, tU = (0, y.y)(e4.a), tq = (0, y.y)(e5.a), tW = (0, x.useEffectEvent)(() => tU), {
                csp: tG,
                fitWidth: tB,
                html: tV,
                widgetDomain: t$
            } = n, tY = n.prefersBorder && !eV?.hideFrameBorder, tK = "connector" === ef.identity.kind ? ef.identity.connectorId : null, tJ = null != t, t0 = (0, x.useEffectEvent)(() => t?.get(ee.a)?.updatePrompt != null), t3 = !tJ || t?.value.kind === "new" || t?.value.kind === "local" || t?.value.kind === "chatgpt", t8 = (0, y.x)(H.g, K), nn = (0, y.x)(H.kc, {
                hostId: K,
                threadId: o
            }), nc = null != nn && "notLoaded" !== nn.type, nu = !(0, M.e)(tr) && tG?.connectDomains.some(e => (0, eY.c)(new URL(e).hostname)) === !0, nd = (0, to.a)(ef, a), {
                httpOrigin: np
            } = ef.identity, nf = null != np ? new URL(np) : null;
            void 0 === np && "http" === ef.identity.kind && (nf = new URL(ef.identity.url));
            let ng = eV?.sandboxFeatures?.join(";"),
                nb = eV?.sandboxFeatures?.includes("local-network-access") === !0 || (0, eY.e)(tG) || nu && nf?.protocol === "https:" && (0, eY.c)(nf.hostname),
                nv = (0, E.a)(),
                ny = (0, A.Z)(),
                nw = t?.value.kind === "chatgpt" && null != t.value.conversationId && o === `chatgpt:${t.value.conversationId}`,
                nI = o.startsWith("chatgpt:") ? "chatgpt" : "codex",
                n_ = (0, y.z)(t?.get(tO, ek) ?? null),
                nx = (0, x.useEffectEvent)(() => t?.get(tO, ek).get() ?? null),
                nS = (0, y.z)($.j.activeTab$),
                nE = (0, y.z)(Y.g),
                nA = (0, y.z)(ts.a),
                nC = (0, y.z)(eE.a),
                nM = nC["--color-background-primary"],
                {
                    isWidgetReady: nP
                } = tF,
                nT = (0, ew.g)(tF),
                nk = !L && "fullscreen" === nT,
                nR = (0, ew.f)(tF),
                nj = L && eP,
                nN = (0, x.useRef)(!1),
                nD = (0, x.useRef)(null),
                nL = (0, x.useRef)(null),
                nO = (0, x.useRef)(null),
                nF = (0, x.useRef)(null),
                nU = (0, y.x)(ew.i, ek),
                nq = (0, x.useRef)(null),
                nW = (0, x.useRef)(null),
                nG = e => {
                    if (!(0, M.e)(tr)) return null;
                    let t = tU.get(ew.j, eN);
                    if (null == t) return null;
                    let n = t.content.mcpAppScope.codexAppsToolScope;
                    if (void 0 !== n) return n;
                    let a = (0, eR.d)({
                        appContext: eL.appContext,
                        invocationResourceUri: eL.invocationResourceUri,
                        originTool: eL.originTool,
                        originToolDefinition: e.tools[eL.originTool],
                        server: tr,
                        tools: eQ(e)
                    });
                    tU.set(ew.k, e => {
                        let t = e.get(eN);
                        if (null == t) return e;
                        let {
                            content: n
                        } = t;
                        if (void 0 !== n.mcpAppScope.codexAppsToolScope) return e;
                        let o = new Map(e);
                        return o.set(eN, {
                            ...t,
                            content: {
                                ...n,
                                mcpAppScope: {
                                    ...n.mcpAppScope,
                                    codexAppsToolScope: a
                                }
                            }
                        }), o
                    });
                    let o = tU.get(ew.j, eN)?.content.mcpAppScope.codexAppsToolScope;
                    return void 0 === o ? null : o
                },
                [nH, nB] = (0, x.useState)(null),
                [nz, nV] = (0, x.useState)(null),
                [n$, nX] = (0, x.useState)(!1),
                [nZ, nY] = (0, x.useState)(null),
                [nK, nJ] = (0, x.useState)(null),
                nQ = nK?.api ?? null,
                n0 = nK?.widgetId ?? null,
                n1 = (0, tn.a)(e => ti?.(e) ?? null),
                n2 = (0, M.e)(tr) && (0, w.Ch)(t8, "mcpEventStream"),
                n3 = (0, x.useMemo)(() => new eD({
                    scope: tq,
                    hostId: K,
                    mcpAppId: ek,
                    originResourceUri: eL.originResourceUri,
                    resolveResourceWatchPath: n1,
                    server: tr
                }), [tq, K, ek, eL.originResourceUri, n1, tr]),
                n6 = (0, x.useMemo)(() => new eT({
                    scope: tq,
                    hostId: K,
                    server: tr
                }), [tq, K, tr]),
                [n5, n8] = (0, x.useState)(nl),
                n4 = null != tK && ne.has(tK),
                n7 = n4 && null != nQ && (n5.canGoBack || n5.canGoForward),
                {
                    cancel: n9,
                    confirmation: ae,
                    confirm: at,
                    request: an
                } = (0, e_.a)(eS.a),
                aa = eV?.viewerHeader === !0,
                ao = eV?.forwardedRequestMethods,
                ai = ao?.join(";") || void 0,
                ar = JSON.stringify(eV?.experimentalCapabilities),
                as = eV?.openFile,
                al = (0, y.z)(e4.h),
                ac = (0, y.x)(W.a, {
                    name: "codex.browser"
                }),
                au = !al && ac.isCapable,
                ad = au || tJ && t3,
                ap = !al && (void 0 === as ? (0, w.mi)((0, e7.a)(tq, K)) : null != as),
                am = null != eV,
                af = eV?.expectedReadySignal,
                ah = eV?.pluginSuggestions != null,
                ag = !0 === eL.isVerifiedFirstParty,
                ab = eV?.displayMode === "modal",
                av = (0, x.useEffectEvent)(() => eV),
                ay = eV?.onRequestClose != null || em,
                aw = function(e) {
                    let {
                        adapter: t,
                        server: n,
                        connectorId: a,
                        widgetScope: o
                    } = e;
                    return (0, M.e)(n) && "connector_openai_olympic" === a && "internal://olympic" === o.originResourceUri && !0 === o.isVerifiedFirstParty ? t?.olympic : void 0
                }({
                    adapter: eV,
                    server: tr,
                    connectorId: tK,
                    widgetScope: eL
                }),
                aI = null != aw,
                a_ = aw?.requestTargetedReply != null || eV?.setTargetedReply != null || eV?.requestTargetedReply != null,
                ax = aI || eV?.showToast != null,
                aS = (0, x.useEffectEvent)(() => aw),
                aE = (0, x.useEffectEvent)(e => aw?.viewMode ?? eV?.displayMode ?? e),
                aA = function(e) {
                    let {
                        adapter: t,
                        server: n,
                        connectorId: a,
                        widgetScope: o
                    } = e;
                    return (0, M.e)(n) && a === eu.a && ("internal://ledger" === o.originResourceUri || o.originResourceUri?.startsWith("internal://ledger") && o.originTool.endsWith("manage_linked_accounts")) && !0 === o.isVerifiedFirstParty ? t?.finance : void 0
                }({
                    adapter: eV,
                    server: tr,
                    connectorId: tK,
                    widgetScope: eL
                }),
                aC = aA?.requestModal != null,
                aM = eV?.requestModal != null,
                aP = eV?.requestCheckout != null,
                aT = eV?.openConversationOverlay != null,
                ak = eV?.openPromptInput != null,
                aR = eV?.autofill != null,
                aj = eV?.openInApp != null,
                aN = aj && eV?.openInApp?.hideButton !== !0 && eV?.openInApp?.baseUrl != null && null !== tF.openInAppUrl,
                aD = eV?.presentation != null,
                aL = eV?.presentation?.requestFocusedObject != null,
                aO = eV?.presentation?.requestCloseFocusedObject != null,
                aF = eV?.presentation?.isSidebarOpen === !0,
                aU = eV?.downloadBlob != null,
                aq = eV?.triggerHaptic != null,
                aW = eV?.files != null,
                aG = eV?.share != null,
                aH = eV?.requestConnectSheet != null,
                aB = eV?.requestLinkToConnector != null,
                az = eV?.isTombstone === !0,
                aV = (0, x.useEffectEvent)(() => aA),
                a$ = function(e, t) {
                    let {
                        server: n,
                        connectorId: a,
                        widgetScope: o,
                        conversationId: i
                    } = t, {
                        originResourceUri: r
                    } = o;
                    if ((0, M.e)(n) && "connector_openai_ads_manager" === a && (!0 === o.isVerifiedFirstParty || !0 === o.resourceIdentityVerified) && ("internal://ads-manager" === r || "internal://ads-manager-account-setup" === r || "internal://ads-manager-delivery" === r)) return {
                        sendInstrument: t => (function(e, t, n) {
                            let {
                                conversationId: a,
                                originResourceUri: o
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
                                    let o = Object.fromEntries(t.tags.map(e => {
                                        let {
                                            key: t,
                                            value: n
                                        } = e;
                                        return [t, n]
                                    }));
                                    if ("payment_elements_stage" === t.label) {
                                        let n = N.safeParse(o);
                                        "count" === t.type && n.success && e.get(T.a).count("payments", "payment_elements_stage", n.data)
                                    } else {
                                        let a = D.safeParse(o);
                                        if (!a.success) return;
                                        let {
                                            failure_category: i,
                                            ...r
                                        } = a.data, s = {
                                            attribution_id: "connector_openai_ads_manager",
                                            name: n,
                                            client_type: "browser"
                                        }, l = e.get(T.a);
                                        if ("ads_billing_client_phase" === t.label && "count" === t.type) {
                                            let e = {
                                                ...r,
                                                ..."error" === a.data.outcome && i ? {
                                                    failure_category: i
                                                } : {}
                                            };
                                            l.count("payments", "ads_billing_client_phase", e), l.count("ecosystem", "ads_billing_client_phase", {
                                                ...e,
                                                ...s
                                            })
                                        } else "ads_billing_client_phase_duration_ms" === t.label && "hist" === t.type && void 0 !== t.value && (l.hist("payments", "ads_billing_client_phase_duration_ms", r, t.value), l.hist("ecosystem", "ads_billing_client_phase_duration_ms", {
                                            ...r,
                                            ...s
                                        }, t.value))
                                    }
                                }
                            }(e, t, o);
                            let i = U.safeParse(t);
                            if (!i.success) return;
                            let r = i.data,
                                s = "browser";
                            if ("event" === r.type) {
                                let {
                                    eventType: t,
                                    requiredField: n
                                } = O[r.label], o = r.payload;
                                if (!o[n]) return;
                                (0, k.a)(e, P.a, {
                                    eventType: t,
                                    widget: o.widget,
                                    viewSessionId: o.view_session_id,
                                    view: o.view,
                                    action: o.action,
                                    outcome: o.outcome,
                                    step: o.step,
                                    source: o.source,
                                    billingStatus: o.billing_status,
                                    logoStatus: o.logo_status,
                                    accountReviewStatus: o.account_review_status,
                                    attentionReason: o.attention_reason,
                                    billingRecovery: o.billing_recovery,
                                    billingInSidebar: o.billing_in_sidebar,
                                    logoHandoffFailed: o.logo_handoff_failed,
                                    stepNumber: o.step_number,
                                    stepCount: o.step_count,
                                    previewKind: o.preview_kind,
                                    reason: o.reason,
                                    position: o.position,
                                    page: o.page,
                                    pageCount: o.page_count,
                                    pageSize: o.page_size,
                                    totalCount: o.total_count,
                                    nextPage: o.next_page,
                                    host: "codex",
                                    clientType: s,
                                    conversationId: a.replace(/^chatgpt:/, "")
                                });
                                return
                            }
                            let l = Object.entries(R).flatMap(e => {
                                    let [t, n] = e, a = r.tags.find(e => e?.key === t), o = C.enum(n).safeParse(a?.value);
                                    return o.success ? [{
                                        key: t,
                                        value: o.data
                                    }] : []
                                }),
                                {
                                    requiredField: c
                                } = O[r.label],
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
                                name: o,
                                client_type: s
                            };
                            e.get(T.a).count("ecosystem", r.label, d)
                        })(e, t, {
                            conversationId: i,
                            originResourceUri: r
                        })
                    }
                }(tU, {
                    server: tr,
                    connectorId: tK,
                    widgetScope: eL,
                    conversationId: o
                }),
                aX = (0, x.useEffectEvent)(() => a$),
                aZ = null != e3 && (0, M.e)(tr) && am && tK === eu.a,
                aY = (0, x.useMemo)(() => null != tf && "object" == typeof tf ? tf : null, [tf]),
                aK = (0, x.useMemo)(() => null == th ? null : (0, eq.f)({
                    isCodexAppsServer: (0, M.e)(tr),
                    toolResult: th
                }), [tr, th]),
                aJ = (0, x.useMemo)(() => null == aK ? null : (0, e0.b)(aK), [aK]),
                aQ = void 0 === tR ? aJ : tR,
                a0 = (0, x.useEffectEvent)(() => aQ),
                a1 = (0, x.useMemo)(() => null == aK ? null : (0, eq.g)({
                    toolResult: aK
                }), [aK]),
                a2 = (0, x.useMemo)(() => tb ?? (0, e0.a)(aK, {
                    preserveStructuredContentNull: eV?.preserveStructuredContentNull
                }), [eV?.preserveStructuredContentNull, tb, aK]),
                a3 = ty ?? (a2?.isError === !0 ? "error" : void 0),
                a6 = (0, x.useMemo)(() => null == a3 ? a1 : {
                    ...a1,
                    status: a3
                }, [a3, a1]),
                a5 = (0, x.useEffectEvent)(() => ({
                    sourceMcpAppId: eN,
                    toolInput: aY,
                    toolOutput: aJ,
                    toolResponseMetadata: a6,
                    toolStatus: a3,
                    toolResult: aK,
                    toolResultNotification: a2,
                    toolCallCancellationReason: tk
                })),
                a8 = (0, x.useEffectEvent)(e => null == ey || null != a3 ? null : (0, eC.a)({
                    scope: tU,
                    conversationId: o,
                    hostId: K,
                    installPlugin: ey,
                    mcpAppScope: eL,
                    navigate: ny,
                    resourceIdentity: ef,
                    server: tr,
                    sessionId: ek,
                    sourceMcpAppId: eN,
                    toolResult: e
                })),
                {
                    data: a4,
                    error: a7
                } = (0, y.x)(tZ.b, {
                    identity: ef.identity,
                    locale: nv.locale,
                    widgetDomain: t$
                }),
                a9 = a4?.sourceUrl,
                oe = a4?.partition,
                ot = (0, x.useMemo)(() => {
                    if (null == a9) return null;
                    let e = (0, tZ.a)(a9);
                    return nb ? `local-network-${e}` : e
                }, [nb, a9]),
                on = (0, x.useEffectEvent)(() => {
                    if (null == a9) return null;
                    let e = (0, _.i)(a9);
                    return null == e ? null : {
                        csp: tG,
                        experimentalCapabilities: eV?.experimentalCapabilities,
                        html: tV,
                        locale: nv.locale,
                        sandboxOrigin: e,
                        sourceUrl: a9
                    }
                }),
                oa = nZ?.isConnected === !0 ? nZ : null,
                oo = eM?.isConnected === !0 ? eM : null,
                oi = null != oo || null != oa,
                or = !nk && !L && eM?.dataset.mcpAppInlineSurface === "card",
                os = "iframe",
                ol = "function" == typeof nH?.moveBefore,
                oc = F && ol,
                ou = !nk && (!L && q || oo?.closest(".thread-scroll-container") != null),
                od = eP && !ou && (ol || !em),
                op = od ? null : oo?.closest("[data-mcp-app-portal-target='true']") ?? (!ol && nH?.isConnected ? nH.parentElement : null),
                om = ol || od ? nH : op,
                of = (0, x.useEffectEvent)(e => {
                    let t = tx(e, L, nk ? "fullscreen" : "inline");
                    return !L && "inline" === nT && tB && oo?.parentElement != null && (t.maxWidth = oo.parentElement.clientWidth), {
                        containerDimensions: t
                    }
                }),
                oh = (0, x.useEffectEvent)(() => {
                    (0, ep.c)(tW(), {
                        hostId: K,
                        pluginId: b,
                        server: tr
                    }, ek)
                }),
                og = (0, x.useEffectEvent)(() => ({
                    safe: {
                        connectorId: tK,
                        mcpAppId: ek,
                        sandboxId: ot,
                        initId: (0, _.g)(nz?.getAttribute("src") ?? void 0)
                    },
                    sensitive: {
                        hostId: K,
                        server: tr
                    }
                })),
                ob = (0, x.useEffectEvent)(e => {
                    (0, k.a)(tU, u.o, {
                        attributionId: tK ?? void 0,
                        conversationId: "chatgpt" === nI ? o.slice(8) : void 0,
                        host: "chatgpt" === nI ? "chatgpt" : void 0,
                        errorSource: e,
                        wasFatalError: "CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION" === e || void 0
                    })
                }),
                ov = (0, x.useEffectEvent)((e, t) => {
                    if (nh(tW().get(ew.r, ek)?.sandboxError)) return;
                    let n = (0, ez.a)(t),
                        a = og();
                    eb.a.warning("Failed to initialize app sandbox", {
                        safe: {
                            conversationSurface: nI,
                            retryCount: tF.sandboxGeneration,
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
                    }), nF.current?.fail(t instanceof Error && "TimeoutError" === t.name ? "timeout" : "load_failed"), (0, ew.D)(tW(), ek, {
                        isWidgetReady: !1,
                        sandboxError: "configuration" === e && t instanceof Error ? t : Error("The MCP app sandbox failed to load.")
                    })
                }),
                oy = (0, x.useEffectEvent)(e => {
                    let t = ns.safeParse(e);
                    t.success && tU.get(ew.r, ek)?.displayMode === "inline" && (0, ew.D)(tU, ek, {
                        intrinsicHeight: t.data
                    })
                }),
                ow = (0, x.useEffectEvent)(e => {
                    let t = ns.safeParse(e);
                    tB && t.success && (0, ew.D)(tU, ek, {
                        intrinsicWidth: t.data
                    })
                }),
                oI = (0, x.useEffectEvent)(e => {
                    if (!n4) return;
                    let t = t9.safeParse(e);
                    t.success && n8({
                        canGoBack: t.data.canGoBack,
                        canGoForward: t.data.canGoForward
                    })
                }),
                o_ = (0, x.useEffectEvent)(() => em ? void(0, ew.c)(tU, ek) : eV?.onRequestClose?.()),
                ox = (0, x.useEffectEvent)(async (e, n) => {
                    if (eV?.openExternal != null && await eV.openExternal(e, n)) return;
                    let a = eU.c.safeParse(e);
                    if (a.success) {
                        if ("popup" === a.data.openMode && "https:" === new URL(a.data.href).protocol && !0 === eL.isVerifiedFirstParty) return void(0, eW.a)(tU, a.data.href);
                        if ("popup" !== a.data.openMode && eV?.onOpenLink?.(a.data.href) || "popup" !== a.data.openMode && i?.onOpenLink != null && await i.onOpenLink(t ?? tU, a.data.href, n)) return;
                        let e = (0, w.qj)(a.data.href);
                        if (null != e) return void ny(e);
                        (0, el.f)({
                            href: a.data.href,
                            initiator: "mcp_app_resource",
                            openTarget: eV?.displayMode === "modal" ? "external-browser" : void 0
                        })
                    }
                }),
                oS = (0, x.useEffectEvent)(async (e, t) => {
                    if (!aZ || null == e3) throw Error("Plaid Link is unavailable for this app");
                    let n = t7.parse(e),
                        {
                            openPersonalFinancePlaidLinkFromWidget: a
                        } = await (0, ed.a)();
                    return a(tU, {
                        accountId: e3,
                        linkToken: n.linkToken,
                        oauthStateId: n.oauthStateId,
                        signal: t
                    })
                }),
                oE = (0, x.useEffectEvent)((e, t, n) => eI(tU, {
                    mcpAppId: ek,
                    requestModal: aA?.requestModal,
                    payload: e,
                    signal: t,
                    accountId: e3,
                    frameAccountId: n
                })),
                oA = (0, x.useEffectEvent)(e => (function(e) {
                    let {
                        composerOverlayReservePx: t,
                        displayMode: n,
                        hasComposerOverlay: a,
                        hostAdapter: o,
                        showNavigationControls: i
                    } = e;
                    if (o?.displayMode === "modal") return !1 !== o.showModalCloseButton || i ? tI : tw;
                    let r = "inline" === n && i ? tI : tw;
                    return ("inline" !== n || a) && 0 !== t ? {
                        insets: {
                            ...r.insets,
                            bottom: t
                        }
                    } : r
                })({
                    composerOverlayReservePx: nA,
                    displayMode: L ? "inline" : e,
                    hasComposerOverlay: nj,
                    hostAdapter: av(),
                    showNavigationControls: n7
                })),
                oC = (0, x.useEffectEvent)(() => {
                    let e = tU.get(ew.r, ek) ?? tF;
                    return {
                        displayMode: e.displayMode,
                        availableDisplayModes: e.availableDisplayModes ?? G
                    }
                }),
                oM = (0, x.useEffectEvent)(e => {
                    let t = (0, ew.h)(tU, ek, e);
                    if (null == t) throw Error("The app has no supported display mode");
                    return {
                        ...oC(),
                        safeAreaInsets: oA(t).insets
                    }
                }),
                oP = (0, x.useEffectEvent)(e => {
                    let t = t4.safeParse(e),
                        n = tU.get(ew.r, ek);
                    if (t.success && (0, ew.a)(n, t.data.mode)) {
                        let n = !L && "fullscreen" === t.data.mode,
                            a = t.data.mode;
                        if (n && !nk && nH?.style.setProperty("display", "none"), aD && (0, ew.D)(tU, ek, {
                                displayModeTitle: n && "string" == typeof e.title ? e.title : void 0
                            }), (0, ew.B)(tU, ek, a, "app_request"), null != nQ && null != n0) {
                            let e = {
                                displayMode: a,
                                isTombstone: av()?.isTombstone === !0,
                                viewParams: aQ,
                                widgetId: n0
                            };
                            nD.current = e, e$(nQ.setWidgetView(e));
                            let t = null == nH ? null : t_({
                                ...oC(),
                                containerDimensions: tx(nH, L, a),
                                locale: nv.locale,
                                deepLink: e9,
                                safeAreaInsets: oA(a).insets,
                                styleVariables: nC,
                                theme: tS(),
                                userAgent: tE(av()?.device),
                                toolInfo: av()?.toolInfo
                            });
                            nL.current = t, null != t && e$(nQ.notifyMcpAppsHostContext({
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
                            mcpAppId: ek,
                            sourceMcpAppId: n?.sourceMcpAppId
                        }
                    }), {
                        mode: (0, ew.f)(n ?? tF)
                    }
                }),
                oT = (0, x.useEffectEvent)(() => e9),
                ok = (0, x.useEffectEvent)(() => tU.get(ew.i, ek)),
                oR = (0, x.useEffectEvent)(() => {
                    var e;
                    e = tl ?? void 0, null != t && (0, Q.h)(t, ek, e)
                });
            (0, x.useEffect)(() => {
                oR()
            }, [ek, tl?.alt, tl?.knownAppId, tl?.logoDarkUrl, tl?.logoUrl]);
            let oj = (0, x.useEffectEvent)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (tU.get(ew.r, ek)?.sourceMcpAppId !== eN) return;
                    let a = (null != e1 ? t1.nullable() : t1).safeParse(t),
                        o = a.success ? a.data : null;
                    if (tU.set(ew.w, ek, o), null != e1 && a.success) return e1.save(a.data, n)
                }),
                oN = e => {
                    null != nQ && e$(nQ.navigate({
                        delta: e
                    }))
                },
                oD = {
                    name: null != eV ? eL.originResourceUri ?? eL.originTool : `${tr}.${eL.originTool}`,
                    attribution: "connector" === ef.identity.kind ? ef.identity.connectorId : void 0
                },
                oL = (0, x.useEffectEvent)(e => {
                    let n = (0, er.getMcpAppSubmit)(t, () => av()?.assertActive?.());
                    return null == n ? null : (t, a) => n(t, oD, e, a)
                }),
                oO = async function(e, t, n, a, o, i) {
                    let r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [];
                    await (0, tL.sendMcpAppMessage)({
                        untrustedAppMessage: e,
                        prompt: t,
                        send: n,
                        signal: a,
                        messageAttachment: i,
                        modelContextAttachments: r,
                        requestConfirmation: e => an({
                            imageUrls: e.imageAttachments.map(e => {
                                let {
                                    src: t
                                } = e;
                                return t
                            }),
                            prompt: e.prompt,
                            title: o
                        })
                    })
                }, oF = (0, x.useEffectEvent)(async (e, n) => {
                    var a;
                    if (null == t) throw (0, eB.a)("App messages are disabled for this view", c.q.MethodNotFound);
                    let o = (a = aS(), n.aborted || a && eA.safeParse(e).success ? Promise.resolve() : a?.sendFollowUpMessage?.(e));
                    if (null != o) return o;
                    n.throwIfAborted();
                    let {
                        context: r,
                        prompt: s,
                        title: l
                    } = (0, eS.b)(e), u = oL(n);
                    if (null == u) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                    let d = t.get(J.w).filter(e => "context" === e.kind),
                        p = crypto.randomUUID(),
                        m = "chatgpt" === t.value.kind ? i?.onFollowUp : void 0,
                        f = performance.now();
                    try {
                        await oO({
                            source: "mcp_app",
                            sourceId: ek,
                            widgetSource: eL.widgetSource,
                            text: s,
                            structuredContent: r ?? (0, eG.b)(ok())
                        }, s, u, n, l, void 0, d)
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
                }), oU = e => {
                    if (e.throwIfAborted(), "current" !== tU.get(B.d, ef)) throw Error("MCP app connection identity changed");
                    eV?.assertActive?.()
                }, oq = async (e, t, n, a) => (oU(t), null != eV) ? eV.handleRequest(e, t, eL, n) : a(), oW = async (e, t, n) => {
                    let a = await oq({
                        method: "tools/call",
                        params: e
                    }, t, n, () => nm({
                        appScope: tq,
                        scope: tU,
                        chatGptMessageId: eL.chatGptMessageId,
                        conversationId: o,
                        getTrustedToolScope: nG,
                        hostId: K,
                        mcpAppId: ek,
                        mcpServerStatuses: eH,
                        resourceIdentity: ef,
                        server: tr,
                        signal: t,
                        toolCallParams: e
                    }));
                    if ((0, I.o)(a)?.isError === !0) {
                        let t = e0.c.safeParse(a).data;
                        eb.a.warning("Widget tool failed", {
                            safe: {
                                mcpAppId: ek,
                                initId: (0, _.g)(nz?.getAttribute("src") ?? void 0)
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
                }, oG = (0, x.useEffectEvent)(async (e, n, a) => {
                    let o = t?.get(e8.b);
                    return oW((0, eB.d)(na, {
                        arguments: n,
                        name: e
                    }, "Invalid MCP tool call params"), a, o)
                }), oH = (0, x.useEffectEvent)(async (e, n) => {
                    let a = t?.get(e8.b),
                        i = c.X.safeParse(e);
                    if (!i.success) throw (0, eB.b)("Invalid MCP proxy request", i.error.issues, i.error.issues.every(e => "params" === e.path[0]) ? c.q.InvalidParams : c.q.InvalidRequest);
                    let r = tU.get(z.b, {
                            hostId: K,
                            conversationId: o
                        }) ?? void 0,
                        {
                            method: s,
                            params: l
                        } = i.data;
                    if (o.startsWith("chatgpt:") && t6.some(e => e === s)) throw (0, eB.a)("Resource subscriptions require a local Codex thread", c.q.MethodNotFound);
                    switch (s) {
                        case f.a: {
                            let {
                                path: e
                            } = (0, eB.d)(f.b, l, "Invalid MCP file open params");
                            if (!ap) throw (0, eB.a)("File opening is unavailable", c.q.MethodNotFound);
                            if (null != as) return (0, k.a)(tU, d.CodexMcpExtensionAction, {
                                ...nd,
                                feature: "file_open",
                                action: "requested"
                            }), await as(e, n), {};
                            if (!(0, w.xh)(e) || !(0, w.Ah)(e)) throw (0, eB.a)("Cannot open this file path", c.q.InvalidParams);
                            return (0, k.a)(tU, d.CodexMcpExtensionAction, {
                                ...nd,
                                feature: "file_open",
                                action: "requested"
                            }), (0, ec.openWorkspaceFile)({
                                scope: tU,
                                path: e,
                                cwd: null,
                                hostConfig: (0, e7.a)(tq, K),
                                hostId: K,
                                openInSidePanel: !0,
                                sidePanelOptions: {
                                    fileOpenOrigin: "app"
                                }
                            }), {}
                        }
                        case "ping":
                            return ao?.includes("ping") ? oq(i.data, n, a, async () => ({})) : {};
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
                            if ((0, k.a)(tU, d.CodexMcpExtensionAction, {
                                    ...nd,
                                    feature: "message",
                                    action: "requested",
                                    messageTarget: a,
                                    send: e.options?.send !== !1
                                }), e.options?.target !== "new" && null == t) throw (0, eB.a)("MCP app messages are disabled for this view", c.q.MethodNotFound);
                            if (e.options?.send === !1) {
                                let n = function(e, t) {
                                    let n = [],
                                        a = [];
                                    for (let t of e) "text" === t.type && (0, eo.d)(t) && null == (0, eo.a)(t) ? n.push(t.text) : a.push(t);
                                    return {
                                        text: n.join("\n\n"),
                                        attachment: tD(a, t)
                                    }
                                }(e.content, {
                                    sourceName: eO,
                                    icon: tl,
                                    server: tr,
                                    widgetSource: eL.widgetSource
                                });
                                if (av()?.assertActive?.(), "new" === e.options.target) {
                                    if (al) throw (0, eB.a)("New drafts are unavailable in this view", c.q.MethodNotFound);
                                    es(n), (0, en.startNewConversation)(tq, {
                                        freshDraft: !0,
                                        selectChat: !0,
                                        prefillPrompt: n.text,
                                        prefillMcpAppAttachments: null == n.attachment ? [] : [n.attachment]
                                    })
                                } else {
                                    if (null == t) throw (0, eB.a)("The composer is unavailable", c.q.MethodNotFound);
                                    var u = "append";
                                    if (es(n), t.get(J.v) || t.get(J.S) || null != t.get(et.b) || t.get(ei.e) || t.get(J.q) || !(0, er.c)(t, n.text, u)) throw Error("The composer is unavailable");
                                    (0, J.yb)(t, e => {
                                        null != n.attachment && e.mcpAppModelContextAttachments.push(n.attachment)
                                    }), (0, ea.h)(t, {
                                        prefersReducedMotion: !0
                                    })
                                }
                                return {}
                            }
                            let {
                                prompt: o,
                                message: i,
                                attachment: r
                            } = function(e, t, n) {
                                let a = [],
                                    o = [];
                                for (let t of e) "text" === t.type && null == (0, eo.a)(t) ? a.push(t.text) : o.push(t);
                                let i = tD(o, t),
                                    r = a.join("\n\n");
                                return {
                                    prompt: r.trim() ? r : n.formatMessage({
                                        id: "codex.mcpApp.contentMessage",
                                        defaultMessage: "Shared content from {appName}",
                                        description: "Message shown in the conversation when an MCP app sends attachments without text"
                                    }, {
                                        appName: t.sourceName
                                    }),
                                    message: {
                                        source: "mcp_app",
                                        sourceId: t.sessionId,
                                        text: r
                                    },
                                    attachment: i
                                }
                            }(e.content, {
                                sourceName: eO,
                                icon: tl,
                                server: tr,
                                sessionId: ek,
                                widgetSource: eL.widgetSource
                            }, nv), s = !1;
                            e.options?.target === "new" && null != ot && e6.appServices?.mcpAppSandbox != null && (oU(n), s = await e6.appServices.mcpAppSandbox.consumeUserGesture((0, eU.a)(ot, nz)).catch(() => !1) === !0, oU(n));
                            let p = e.options?.target === "new" ? (0, tL.a)({
                                scope: tq,
                                recipient: t,
                                getNewThreadDestination: eK,
                                globalEntrypointIdentity: "global" === nd.source ? {
                                    connectorId: nd.connectorId,
                                    pluginId: nd.pluginId
                                } : void 0,
                                canCreateCodexThreads: au,
                                hasUserGesture: s,
                                assertActive: () => {
                                    if (al) throw (0, eB.a)("New threads are unavailable in this view", c.q.MethodNotFound);
                                    oU(n)
                                },
                                sourceName: eO,
                                toolOrigin: oD,
                                signal: n
                            }) : oL(n);
                            if (null == p) throw (0, eB.a)("MCP app messages require an available composer", c.q.MethodNotFound);
                            let m = t?.get(J.w).filter(e => {
                                let {
                                    id: t
                                } = e;
                                return t === ek
                            }) ?? [];
                            return await oO(i, o, p, n, void 0, r, m), null != t && (0, Q.b)(t, m), {}
                        }
                        case "ui/download-file": {
                            let e = (0, eB.d)(nt, l, "Invalid MCP file download params");
                            return (0, tt.a)(e.blob, e.name), {}
                        }
                        case "ui/update-model-context": {
                            if (null == t) throw (0, eB.a)("MCP model context requires an available composer", c.q.MethodNotFound);
                            let e = (0, eB.d)(t2, l, "Invalid MCP model context params");
                            if (null != oL() && tN(e.content), nw && e.content?.some(e => "image" === e.type && !(0, w.vi)({
                                    type: e.mimeType
                                }))) throw (0, eB.a)("Invalid MCP model context params", c.q.InvalidParams);
                            if (null != e1 && tU.get(ew.r, ek)?.sourceMcpAppId !== eN) throw (0, eB.a)("The widget source is no longer active", -32e3);
                            av()?.onModelContextUpdate?.(e, ek), (0, X.a)(t);
                            let n = (e => {
                                var n;
                                if (null == t) return null;
                                let a = e.content ?? [],
                                    o = a.length > 0 || null != e.structuredContent ? crypto.randomUUID() : null;
                                return n = {
                                    kind: "context",
                                    widgetSource: eL.widgetSource,
                                    untrusted: !0,
                                    content: a,
                                    server: tr,
                                    composerIcon: tl ?? void 0,
                                    sourceName: eO,
                                    id: ek,
                                    modelContextUpdateId: o ?? void 0,
                                    structuredContent: e.structuredContent
                                }, null != t && ((0, Q.g)(t, n), (0, tX.b)(tU, ek, t.get(J.w).find(e => e.id === ek) ?? null)), o
                            })(e);
                            if ((0, k.a)(tU, d.CodexMcpExtensionAction, {
                                    ...nd,
                                    feature: "model_context",
                                    action: "updated"
                                }), null != e1) {
                                var p = await oj(eN, e, !0);
                                if (p?.ok !== !0) throw Object.assign((0, eB.a)("The host could not persist the model context update", -32e3), {
                                    data: {
                                        code: p?.code ?? "update_model_context_persistence_failed",
                                        retryable: p?.retryable ?? !0
                                    }
                                })
                            }
                            return null == n ? {} : {
                                _meta: {
                                    [h.a]: {
                                        updateId: n
                                    }
                                }
                            }
                        }
                        case "tools/call":
                            return oW((0, eB.d)(na, l, "Invalid MCP tool call params"), n, a);
                        case "resources/read": {
                            let e = (0, eB.d)(no, l, "Invalid MCP resource read params");
                            if (oU(n), (0, k.a)(tU, d.CodexMcpExtensionAction, {
                                    ...nd,
                                    feature: "resource",
                                    action: "read"
                                }), eV?.readHostResource != null) {
                                oU(n);
                                let t = await eV.readHostResource(e, n);
                                if (oU(n), null != t) return t
                            }
                            return eX(() => {
                                (0, eR.a)({
                                    mcpAppScope: eL,
                                    server: tr,
                                    uri: e.uri
                                })
                            }), await oq({
                                method: s,
                                params: e
                            }, n, a, async () => {
                                try {
                                    return await (0, ej.d)({
                                        scope: tU,
                                        appContext: eL.appContext,
                                        connectorId: (0, M.e)(tr) ? tK : null,
                                        hostId: K,
                                        mcpAppId: ek,
                                        originCallId: eL.originCallId ?? null,
                                        threadId: o,
                                        server: tr,
                                        uri: e.uri
                                    })
                                } catch (e) {
                                    throw eZ(e, "MCP resource read failed")
                                }
                            })
                        }
                        case "resources/subscribe": {
                            let e = (0, eB.d)(no, l, "Invalid MCP resource subscribe params");
                            return oU(n), (0, k.a)(tU, d.CodexMcpExtensionAction, {
                                ...nd,
                                feature: "resource",
                                action: "subscribe"
                            }), await n3.subscribe(e.uri, n)
                        }
                        case "resources/unsubscribe": {
                            let e = (0, eB.d)(no, l, "Invalid MCP resource unsubscribe params");
                            return oU(n), (0, k.a)(tU, d.CodexMcpExtensionAction, {
                                ...nd,
                                feature: "resource",
                                action: "unsubscribe"
                            }), await n3.unsubscribe(e.uri, n)
                        }
                        case "openai/events/subscribe": {
                            let e = (0, eB.d)(ni, l, "Invalid MCP event subscribe params"),
                                t = tU.get(ew.j, eN)?.content.mcpAppScope,
                                n = t?.codexAppsToolScope;
                            if (void 0 === n && (n = nG(await eJ({
                                    scope: tU,
                                    hostId: K,
                                    mcpServerStatuses: eH,
                                    server: tr,
                                    threadId: r
                                }))), null == n) throw (0, eB.a)("MCP event subscriptions require a trusted connector scope", c.q.InternalError);
                            return n6.subscribe({
                                arguments: e.arguments ?? {},
                                connectorId: n.connectorId,
                                linkId: t?.appContext?.linkId ?? null,
                                name: e.name,
                                subscriptionId: e.subscriptionId
                            })
                        }
                        case "openai/events/unsubscribe": {
                            let e = (0, eB.d)(nr, l, "Invalid MCP event unsubscribe params");
                            return n6.unsubscribe(e.subscriptionId)
                        }
                        case "tools/list":
                            return oq(i.data, n, a, async () => {
                                let e = await eJ({
                                        scope: tU,
                                        hostId: K,
                                        mcpServerStatuses: (0, M.e)(tr) ? eH : void 0,
                                        server: tr,
                                        threadId: r
                                    }),
                                    t = eQ(e),
                                    n = nG(e);
                                return {
                                    tools: eX(() => (0, eR.e)({
                                        server: tr,
                                        toolScope: n,
                                        tools: t
                                    }))
                                }
                            });
                        case "resources/list":
                            return oq(i.data, n, a, async () => (0, M.e)(tr) ? {
                                resources: []
                            } : {
                                resources: (await eJ({
                                    scope: tU,
                                    hostId: K,
                                    server: tr,
                                    threadId: r,
                                    detail: "full"
                                })).resources
                            });
                        case "resources/templates/list":
                            return oq(i.data, n, a, async () => (0, M.e)(tr) ? {
                                resourceTemplates: []
                            } : {
                                resourceTemplates: (await eJ({
                                    scope: tU,
                                    hostId: K,
                                    server: tr,
                                    threadId: r,
                                    detail: "full"
                                })).resourceTemplates
                            });
                        case "prompts/list":
                            return oq(i.data, n, a, async () => ({
                                prompts: []
                            }));
                        default:
                            return oq(i.data, n, a, async () => {
                                throw (0, eB.a)(`Unsupported MCP proxy method: ${s}`, c.q.MethodNotFound)
                            })
                    }
                });
            (0, x.useLayoutEffect)(() => {
                let e = document.createElement("div");
                return e.dataset.mcpAppFrame = "true", nB(e), () => {
                    e.remove(), nB(t => t === e ? null : t), nX(!1)
                }
            }, [ek]), (0, x.useLayoutEffect)(() => {
                null != nH && null != nz && function(e) {
                    let {
                        frameElement: t,
                        sandboxElement: n,
                        fullSurface: a,
                        liftModal: o,
                        inheritHostBackground: i,
                        isCardInlineSurface: r,
                        isFullScreen: s,
                        isWidgetVisible: l,
                        prefersBorder: c,
                        surfaceBackgroundColor: u,
                        title: d,
                        globalSurface: p
                    } = e, m = !s && !a && !r;
                    t.className = (0, tM.b)("group/mcp-app pointer-events-auto relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden", s && "overscroll-y-contain", o && "z-50", !s && !a && !r && c && "rounded-lg shadow-sm outline-1 -outline-offset-1 outline-border browser:outline-0 browser:shadow-widget-inline"), n.className = (0, tM.b)("h-full min-h-0 min-w-0 w-full overflow-hidden", !l && "pointer-events-none opacity-0", m && "rounded-lg", r && c && "borderedCardSandbox-KmZ5WZ", s && "min-h-0 flex-1"), n.style.backgroundColor = !o && (i || p) ? u ?? "transparent" : "transparent", t.style.backgroundColor = p ? n.style.backgroundColor : "", n.title = d
                }({
                    frameElement: nH,
                    sandboxElement: nz,
                    fullSurface: L,
                    liftModal: oc,
                    inheritHostBackground: eg,
                    isCardInlineSurface: or,
                    isFullScreen: nk,
                    isWidgetVisible: nP && null != nT,
                    prefersBorder: tY,
                    surfaceBackgroundColor: nM,
                    title: td,
                    globalSurface: tp
                })
            }, [L, oc, nH, eg, or, nk, nP, nT, tY, nz, nM, td, tp]), (0, x.useLayoutEffect)(() => {
                if (null == nH) return;
                let e = nk ? oa : oo,
                    t = od ? (0, Z.a)() : op;
                if (oc && (t = document.body), null == t || !t.isConnected) {
                    let e = "none" === nH.style.display;
                    nH.style.display = "none", e || eb.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: og().safe.mcpAppId,
                            reason: "missing_container"
                        }
                    });
                    return
                }
                if (nH.parentElement !== t && (nH.isConnected && "function" == typeof t.moveBefore ? t.moveBefore(nH, null) : t.appendChild(nH), eb.a.debug("Attached app widget", {
                        safe: {
                            mcpAppId: og().safe.mcpAppId,
                            showInModal: oc
                        }
                    })), n$ || nX(!0), null == e) {
                    let e = "none" === nH.style.display;
                    nH.style.display = "none", e || eb.a.debug("Hid app widget", {
                        safe: {
                            mcpAppId: og().safe.mcpAppId,
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
                        modalOpen: o = !1,
                        sandboxElement: i,
                        isFullScreen: r,
                        isInGlobalHost: s,
                        anchorElement: l,
                        rightPanelAnimationProgress: c,
                        rightPanelLayoutTick: u
                    } = e, d = o || r || s, p = o ? (0, tC.b)(t) : void 0, m = null, f = r && !s ? new MutationObserver(() => g()) : null, h = new ResizeObserver(() => g()), g = () => {
                        let e = l.currentCSSZoom ?? 1,
                            c = (0, tP.a)(l, e),
                            u = {
                                ...c
                            },
                            p = r || a ? l.closest('[data-app-shell-focus-area="right-panel"]') : null,
                            h = "";
                        o ? h = "" : null != p && (h = (0, tP.b)(c, (0, tP.a)(p, e))), t.style.position = d ? "fixed" : "absolute";
                        let g = null;
                        if (d ? s || o || (g = t.offsetParent) : g = n, null != g) {
                            let t = (0, tP.a)(g, e);
                            u.x -= t.x, u.y -= t.y
                        }
                        d || (u.x += n.scrollLeft, u.y += n.scrollTop);
                        let b = "";
                        o || (b = r ? "43" : "1"), Object.assign(t.style, {
                            ...(0, tP.d)(u, e / (n.currentCSSZoom ?? 1)),
                            clipPath: h,
                            display: "",
                            zIndex: b
                        });
                        let v = a || r ? (0, tP.c)(l) : null;
                        if (t.style.borderRadius = v?.join(" ") ?? "", null != i)
                            if (null == v) i.style.borderRadius = "";
                            else {
                                let e = getComputedStyle(t),
                                    n = [e.borderLeftWidth, e.borderRightWidth, e.borderRightWidth, e.borderLeftWidth],
                                    a = [e.borderTopWidth, e.borderTopWidth, e.borderBottomWidth, e.borderBottomWidth];
                                i.style.borderRadius = [n, a].map(e => v.map((t, n) => `${Math.max(0,parseFloat(t)-parseFloat(e[n]))}px`).join(" ")).join(" / ")
                            } null != f && g !== m && (f.disconnect(), m = g, null != g && f.observe(g, {
                            attributeFilter: ["class", "style"],
                            attributes: !0
                        }))
                    };
                    h.observe(n);
                    let b = (0, tA.b)(l, t, g),
                        v = (0, tT.a)({
                            update: g,
                            motionValues: [u, r ? c : void 0]
                        });
                    return () => {
                        p?.(), v.disconnect(), b(), h.disconnect(), f?.disconnect()
                    }
                }({
                    frameElement: nH,
                    frameContainer: t,
                    fullSurface: L,
                    modalOpen: oc,
                    sandboxElement: nz,
                    isFullScreen: nk,
                    isInGlobalHost: od,
                    anchorElement: e,
                    rightPanelAnimationProgress: nE,
                    rightPanelLayoutTick: ta
                })
            }, [nH, L, oc, oo, nk, od, n$, nE, ta, nz, oa, op]);
            let oB = eV?.autoFocus === !0;
            (0, x.useEffect)(() => {
                oB && nP && null != oo && nz?.focus()
            }, [oB, nP, oo, nz]), (0, x.useLayoutEffect)(() => (nN.current = !1, () => {
                nN.current = !0
            }), [ek, tU]);
            let oz = (0, x.useEffectEvent)(async () => {
                    try {
                        if (eV?.assertActive?.(), !aN) return;
                        let e = tF.openInAppUrl ?? C.string().nullable().parse(await nQ?.getCurrentPath?.(void 0));
                        if (eV?.assertActive?.(), null == e) return;
                        let t = eV?.openInApp?.validateUrl(null == tF.openInAppUrl ? e.replace(/^\/+/, "") : e);
                        null != t && (0, el.f)({
                            href: t,
                            initiator: "mcp_app_resource"
                        })
                    } catch {}
                }),
                oV = (0, x.useEffectEvent)(e => {
                    let t = tU.get($.j.tabs$).some(e => e.tabId === (0, te.b)(ek));
                    (0, te.c)(tU, {
                        source: {
                            hostId: K,
                            server: tr,
                            connectorId: tK ?? void 0
                        },
                        revealAndFocus: !t,
                        icon: tl,
                        mcpAppId: ek,
                        onExitFullScreen: e,
                        onPanelElementChange: nY,
                        title: tF.displayModeTitle ?? tc,
                        openInAppName: eV?.openInApp?.appName,
                        onOpenInApp: aN ? () => {
                            oz()
                        } : void 0
                    })
                }),
                o$ = (0, x.useEffectEvent)(() => {
                    let e = tU.get(ew.r, ek);
                    !nN.current && e?.isOpen && "fullscreen" === e.displayMode && (0, ew.d)(tU, ek)
                }),
                oX = (0, x.useEffectEvent)(e => {
                    let t = av()?.instrumentation;
                    if (null != t) t.sendInstrument(e, nd);
                    else {
                        let t = C.object({
                            type: C.literal("interaction"),
                            label: C.string()
                        }).safeParse(e);
                        t.success && (0, k.a)(tU, u.l, {
                            ...nd,
                            host: "codex",
                            actionType: (0, to.b)(t.data.label)
                        })
                    }
                });
            (0, x.useLayoutEffect)(() => {
                nk ? oV(o$) : (0, te.a)(tU, ek)
            }, [nk, ek, tU, tl?.alt, tl?.knownAppId, tl?.logoDarkUrl, tl?.logoUrl, tc, tF.displayModeTitle, aN, eV?.openInApp?.appName]), (0, x.useLayoutEffect)(() => {
                let e;
                if (null != a7) return void ov("configuration", a7);
                if (null == nH || !n$ || null == om || null == ot || null == oe) return;
                let t = e2.a.start("webview_load", {
                    definitionVersion: 1,
                    surface: "mcp_app",
                    telemetryOwner: "desktop_client"
                }, {
                    key: ek,
                    traceAttributes: {
                        "webview.surface": "mcp_app"
                    }
                });
                nF.current = t, t.mark("surface_mcp_app"), (0, ew.D)(tW(), ek, {
                    appDisplayModes: void 0,
                    isWidgetReady: !1,
                    sandboxError: null
                }), n8(nl), nq.current = null, nW.current = null;
                let a = on();
                if (null == a) return void ov("configuration", Error("The MCP app sandbox initialization config is missing."));
                let o = [...new Set(["fullscreen", "encrypted-media", ...ng?.split(";") ?? [], ...nb ? ["local-network-access"] : []])],
                    r = (0, eF.a)(os, ot, oe);
                r instanceof HTMLIFrameElement && (r.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), null != ng ? r.allow = o.map(e => `${e} *`).join("; ") : r.allow = nb ? "encrypted-media *; local-network-access" : "encrypted-media *", r.allowFullscreen = !0), r.classList.add("pointer-events-none", "opacity-0"), nH.appendChild(r), nV(r), t.mark("rendered");
                let u = new AbortController,
                    d = !1,
                    b = new tg,
                    v = null == i ? null : new eh(i),
                    y = null,
                    w = crypto.randomUUID(),
                    I = ok(),
                    x = a0(),
                    {
                        sourceMcpAppId: S,
                        toolInput: E,
                        toolOutput: A,
                        toolResponseMetadata: M,
                        toolResult: P,
                        toolStatus: T,
                        toolResultNotification: R,
                        toolCallCancellationReason: j
                    } = a5(),
                    N = new tQ.b(tW(), S);
                nq.current = null == P || null == A ? null : {
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
                let D = ah ? {
                        requestConnectPlugin: async e => av()?.pluginSuggestions?.requestConnectPlugin(e) ?? {
                            pluginId: tz.a.parse(e).pluginId,
                            status: "unavailable"
                        },
                        requestOpenPlugin: async e => {
                            let t = av()?.pluginSuggestions;
                            if (null == t) throw Error("Plugin suggestions are unavailable");
                            await t.requestOpenPlugin(e)
                        },
                        requestDeclinePluginSuggestions: async () => av()?.pluginSuggestions?.requestDeclinePluginSuggestions?.() ?? {
                            status: "unavailable",
                            declinedPluginIds: []
                        },
                        sendInstrument: e => av()?.pluginSuggestions?.sendInstrument(e)
                    } : void 0,
                    L = null == P ? null : D ?? a8(P),
                    O = null == L ? null : {
                        ...L,
                        requestDeclinePluginSuggestions: D?.requestDeclinePluginSuggestions ?? (null == L.requestDeclinePluginSuggestions ? void 0 : async () => {
                            let e = a5().toolResult,
                                t = null == e ? void 0 : a8(e)?.requestDeclinePluginSuggestions;
                            return null == t || !await e6.appServices?.mcpAppSandbox?.consumeUserGesture((0, eU.a)(ot, r)).catch(() => !1) || u.signal.aborted ? {
                                status: "unavailable",
                                declinedPluginIds: []
                            } : t()
                        })
                    },
                    F = () => {
                        let e = av()?.files;
                        if (null == e) throw Error("Widget file access is unavailable");
                        return e
                    },
                    U = {
                        ...O,
                        downloadBlob: aU ? e => av()?.downloadBlob?.(e, u.signal) : void 0,
                        triggerHaptic: aq ? e => av()?.triggerHaptic?.(e, u.signal) : void 0,
                        requestCheckout: aP ? async e => {
                            u.signal.throwIfAborted();
                            let t = av();
                            if (t?.requestCheckout == null) throw Error("Checkout is unavailable");
                            return t.requestCheckout(e, u.signal)
                        } : void 0,
                        requestModal: aI || aC || aM ? async e => {
                            u.signal.aborted || (aI ? await aS()?.requestModal(e) : null != aV() && (!aM || C.object({
                                params: C.object({
                                    view: C.literal("accountLinking")
                                })
                            }).safeParse(e).success) ? await oE(e, u.signal, e3) : await av()?.requestModal?.(e, u.signal))
                        } : void 0,
                        uploadFile: aW ? (e, t) => F().uploadFile(e, t, u.signal) : void 0,
                        getFileDownloadUrl: aW ? e => F().getFileDownloadUrl(e, u.signal) : void 0,
                        getFileMetadata: aW ? e => F().getFileMetadata(e, u.signal) : void 0,
                        selectFiles: aW ? () => F().selectFiles(u.signal) : void 0,
                        share: aG ? async e => {
                            u.signal.throwIfAborted(), await av()?.share?.(e, u.signal)
                        } : void 0,
                        requestLinkToConnector: aI || aB ? async e => u.signal.aborted ? {
                            didConnect: !1
                        } : await (aS()?.requestLinkToConnector ?? av()?.requestLinkToConnector)?.(e, u.signal) ?? {
                            didConnect: !1
                        } : void 0,
                        showToast: ax ? e => {
                            u.signal.aborted || (aS()?.showToast ?? av()?.showToast)?.(e)
                        } : void 0,
                        notifyEscapeKey: ab || aI && ay || aD ? () => {
                            u.signal.aborted || av()?.allowsInteractiveDismissal === !1 || (ab || aI || av()?.displayMode != null ? o_() : oP({
                                mode: "inline"
                            }))
                        } : void 0,
                        callMcp: e => {
                            let t = y?.notifyMcpAppsMcpNotification;
                            if (aa && null != t) {
                                let n = N.handleRequest(e, u.signal, e => e$(t(e)));
                                if (null != n) return n
                            }
                            let n = b.handleRequest(e, {
                                sandboxElement: r,
                                sandboxId: ot,
                                initId: W,
                                signal: u.signal,
                                notify: y?.notifyMcpAppsMcpNotification
                            });
                            if (null != n) return n;
                            let a = m.h.safeParse(e);
                            if (a.success && null != s) {
                                for (let {
                                        component: e,
                                        level: t,
                                        message: n,
                                        metadata: o
                                    }
                                    of a.data.params.entries) eb.a[t](n, {
                                    safe: {
                                        component: e,
                                        metadata: o,
                                        pluginId: s
                                    },
                                    sensitive: {}
                                });
                                return Promise.resolve({})
                            }
                            let o = m.g.safeParse(e);
                            return o.success && null != v ? v.handleRequest(o.data.params) : oH(e, u.signal).catch(t => {
                                if (!u.signal.aborted) {
                                    let n = og();
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
                        callTool: (e, t) => oG(e, t, u.signal),
                        notifyBackgroundColor: () => {},
                        notifyEnvironmentError: e => {
                            if (!u.signal.aborted) {
                                if (ez.i.safeParse(e).success) return void(0, ez.d)(e, og());
                                ov("environment", e)
                            }
                        },
                        notifyIntrinsicHeight: oy,
                        notifyIntrinsicWidth: ow,
                        notifyNavigation: e => {
                            u.signal.aborted || oI(e)
                        },
                        notifySecurityPolicyViolation: e => {
                            u.signal.aborted || av()?.instrumentation?.notifySecurityPolicyViolation(e)
                        },
                        openExternal: e => ox(e, u.signal),
                        openPlaidLink: aZ ? e => oS(e, u.signal) : void 0,
                        initializeMcpApp: e => {
                            if (u.signal.aborted) throw Error("MCP app initialization was cancelled");
                            try {
                                return oM(l.a.parse(e).availableDisplayModes)
                            } catch (e) {
                                throw ov("configuration", e), e
                            }
                        },
                        requestClose: ay ? o_ : void 0,
                        requestDisplayMode: oP,
                        openConversationOverlay: aT ? async e => {
                            u.signal.throwIfAborted(), await av()?.openConversationOverlay?.(e, u.signal)
                        } : void 0,
                        notifyAutofillCandidates: aR ? t => {
                            u.signal.throwIfAborted(), e?.(t)
                        } : void 0,
                        openPromptInput: ak ? e => {
                            u.signal.throwIfAborted();
                            let t = av()?.openPromptInput;
                            if (null == t) throw Error("Widget prompt input is unavailable");
                            return t(e, r, u.signal)
                        } : void 0,
                        setOpenInAppUrl: aj ? e => {
                            u.signal.throwIfAborted();
                            let {
                                href: t
                            } = C.object({
                                href: C.string().nullable()
                            }).parse(e);
                            if (!t?.trim()) return void(0, ew.D)(tW(), ek, {
                                openInAppUrl: null == t ? null : void 0
                            });
                            let n = av()?.openInApp?.validateUrl(t);
                            null != n && (0, ew.D)(tW(), ek, {
                                openInAppUrl: n
                            })
                        } : void 0,
                        requestFocusedObject: aL ? async e => {
                            u.signal.throwIfAborted(), await av()?.presentation?.requestFocusedObject?.(e, u.signal)
                        } : void 0,
                        requestCloseFocusedObject: aO ? async () => {
                            u.signal.throwIfAborted(), await av()?.presentation?.requestCloseFocusedObject?.(u.signal)
                        } : void 0,
                        requestTargetedReply: a_ ? async e => {
                            if (u.signal.aborted) return;
                            let t = aS()?.requestTargetedReply;
                            if (null != t) return void await t(e);
                            let n = av()?.setTargetedReply;
                            if (null != n) return void n(e, u.signal);
                            let a = av()?.requestTargetedReply;
                            null != a && await (0, eS.c)(e, a, an, u.signal)
                        } : void 0,
                        requestConnectSheet: aH ? e => {
                            let t = av()?.requestConnectSheet;
                            if (null != t) return t(e, u.signal);
                            throw Error("Widget connection is unavailable")
                        } : void 0,
                        sendFollowUpMessage: e => oF(e, u.signal),
                        sendInstrument: e => {
                            if (!u.signal.aborted) {
                                if (ag || null != O) {
                                    let t = (0, p.h)(e);
                                    if (null != t) return void(0, k.a)(tW(), t.messageType, t.payload)
                                }
                                ez.g.safeParse(e).success && ((0, ez.d)(e, og()), ob("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_LOGGER")), O?.sendInstrument(e);
                                let t = aV() ?? aX();
                                t?.sendInstrument(e), (null == t && null == O || C.object({
                                    type: C.literal("interaction")
                                }).safeParse(e).success) && oX(e)
                            }
                        },
                        updateWidgetState: (e, t, n) => {
                            if (!u.signal.aborted) return oj(e, t, C.object({
                                waitForPersistence: C.literal(!0).optional()
                            }).optional().parse(n)?.waitForPersistence)
                        }
                    },
                    q = (0, eU.b)({
                        hostApiHandlers: U,
                        assertActive: () => {
                            u.signal.throwIfAborted(), av()?.assertActive?.()
                        },
                        onSkybridgeCacheState: e => {
                            t.mark(`skybridge_cache_${e}`, {
                                traceAttributes: {
                                    "webview.skybridge_cache_state": e
                                }
                            })
                        },
                        origin: a.sandboxOrigin,
                        sandboxId: ot,
                        signal: u.signal,
                        sourceUrl: a.sourceUrl,
                        webview: r
                    }),
                    W = (0, _.g)(r.getAttribute("src") ?? void 0),
                    G = og();
                return eb.a.info("Starting app sandbox", {
                    safe: {
                        conversationSurface: nI,
                        connectorId: G.safe.connectorId,
                        mcpAppId: G.safe.mcpAppId,
                        sandboxId: G.safe.sandboxId,
                        initId: W
                    },
                    sensitive: {
                        hostId: G.sensitive.hostId,
                        server: G.sensitive.server
                    }
                }), q.then(async r => {
                    if (u.signal.aborted) return;
                    t.mark("sandbox_ready"), eb.a.info("Connected app sandbox", {
                        safe: {
                            initId: W
                        }
                    }), y = r;
                    let l = r.notifyMcpAppsMcpNotification,
                        c = e6.appServices?.mcpAppSandbox != null && null != l;
                    null != l && v?.setNotificationSender(e => e$(l(e))), null != r.applyAutofillCandidate && (e = await av()?.autofill?.(r.applyAutofillCandidate, u.signal), u.signal.throwIfAborted()), nJ({
                        api: r,
                        widgetId: w
                    });
                    let {
                        displayMode: p,
                        availableDisplayModes: b
                    } = oC(), _ = tS(), {
                        containerDimensions: S
                    } = of(nH), C = tE(av()?.device), P = tW().get(eE.a), T = P["--color-background-primary"], k = oA(p), R = {
                        "openai/viewer-header": aa && null != l,
                        ...t_({
                            availableDisplayModes: b,
                            containerDimensions: S,
                            displayMode: p,
                            locale: a.locale,
                            modelContextHostState: nx(),
                            deepLink: oT(),
                            safeAreaInsets: k.insets,
                            styleVariables: P,
                            theme: _,
                            userAgent: C,
                            toolInfo: av()?.toolInfo
                        }),
                        ...null == i || null == l ? {} : {
                            [m.a]: !0
                        },
                        ...null == s ? {} : {
                            [m.d]: !0
                        }
                    }, {
                        csp: j
                    } = a, N = tJ ? {} : void 0;
                    ad && (N = {
                        text: {},
                        image: {},
                        resourceLink: {},
                        resource: {}
                    }), null == v && oh(), eb.a.info("Starting app widget", {
                        safe: {
                            displayMode: p,
                            initId: W
                        }
                    }), d = !0;
                    let D = r.runWidgetCode({
                            enableAutofill: null != e,
                            expectReadySignal: null != af,
                            expectedReadySignal: af,
                            csp: j,
                            displayMode: aE(p),
                            features: o,
                            subjectId: av()?.subjectId,
                            hostHandlesFollowUpMessageAuthorization: t3,
                            html: a.html,
                            isFirstParty: ag || null != O,
                            isSidebarOpen: av()?.presentation?.isSidebarOpen === !0,
                            isTombstone: av()?.isTombstone === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            measureWidth: !0 === tB,
                            mcpApps: {
                                requiresInitialization: n.requiresMcpInitialization,
                                forwardedRequestMethods: ["ui/update-model-context", ...c ? [tm] : [], ...aa && null != l ? [tQ.a] : [], ...ad || !tJ ? ["ui/message"] : [], ...ai?.split(";") ?? [], ...ap ? [f.a] : [], ...null == v || null == l ? [] : [m.c], ...null == s ? [] : [m.e], ...null == l ? [] : [...t6, ...n2 && !am ? t5 : []]],
                                hostCapabilities: {
                                    experimental: {
                                        [h.a]: {},
                                        ...c ? {
                                            "openai/find": {}
                                        } : {},
                                        ...ad ? {
                                            [g.a]: {
                                                draft: t0() ? {} : void 0
                                            }
                                        } : {},
                                        "openai/skillsDeepLinks": {},
                                        ...a.experimentalCapabilities,
                                        ...ap ? {
                                            "openai/files": {}
                                        } : {}
                                    },
                                    logging: {},
                                    openLinks: {},
                                    serverResources: {},
                                    serverTools: {},
                                    message: N,
                                    updateModelContext: tJ ? {
                                        resource: {},
                                        resourceLink: {},
                                        image: {},
                                        structuredContent: {},
                                        text: {}
                                    } : void 0,
                                    sandbox: null != j || null != ng ? {
                                        permissions: null == ng ? void 0 : {
                                            camera: o.includes("camera") ? {} : void 0,
                                            microphone: o.includes("microphone") ? {} : void 0,
                                            geolocation: o.includes("geolocation") ? {} : void 0,
                                            clipboardWrite: o.includes("clipboard-write") ? {} : void 0
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
                                    version: tW().get(ev.a).data?.version ?? "unknown",
                                    client_type: "codex_browser"
                                },
                                globalSurface: tp
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
                        L = !1;
                    for await (let e of D) {
                        let n = tW().get(ew.r, ek)?.sandboxError;
                        if (u.signal.aborted || nh(n)) break;
                        if (ez.f.safeParse(e).success) return;
                        if (ez.g.safeParse(e).success)(0, ez.d)(e, og()), ob("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_SANDBOX_EXECUTION");
                        else if (ez.h.safeParse(e).success) throw Error("The MCP app sandbox execution failed.");
                        if (L || !eU.d.safeParse(e).success) continue;
                        L = !0;
                        let {
                            displayMode: a,
                            availableDisplayModes: o
                        } = oC(), i = {
                            ...R,
                            displayMode: a,
                            availableDisplayModes: [...o]
                        };
                        (0, ew.D)(tW(), ek, {
                            isWidgetReady: !0
                        }), e$(r.setWidgetView({
                            displayMode: aE(a),
                            isTombstone: av()?.isTombstone === !0,
                            viewParams: x,
                            widgetId: w
                        })), e$(r.setTheme({
                            theme: _
                        })), e$(r.setSafeArea({
                            safeArea: k
                        }));
                        let s = {
                            isSidebarOpen: av()?.presentation?.isSidebarOpen === !0,
                            maxHeight: S.maxHeight,
                            maxWidth: S.maxWidth,
                            surfaceBackgroundColor: T
                        };
                        nO.current = s, e$(r.setAdditionalGlobals({
                            additionalGlobals: s
                        })), e$(r.notifyMcpAppsHostContext({
                            hostContext: i
                        })), t.mark("fully_loaded"), eb.a.info("Started app widget", {
                            safe: {
                                displayMode: a,
                                initId: W
                            }
                        }), t.end()
                    }
                    if (!L && !u.signal.aborted) throw Error("The MCP app sandbox stopped before startup.")
                }).catch(e => {
                    u.signal.aborted || (d && ob("CHATGPT_ECOSYSTEM_WIDGET_ERROR_SOURCE_FATAL_EXECUTION"), ov(null == y ? "handshake" : "widget", e))
                }), () => {
                    u.abort(), n9(), nF.current === t && (nF.current = null), t.isRecording() && t.abort("navigation_away"), b[Symbol.dispose](), N[Symbol.dispose](), v?.[Symbol.dispose](), nq.current = null, nW.current = null, nD.current = null, nL.current = null, nO.current = null, (0, ew.D)(tW(), ek, {
                        isWidgetReady: !1
                    }), nJ(null), n8(nl), null != y && e$(y.requestMcpAppsResourceTeardown({
                        timeoutMs: 500
                    })), r.remove(), r instanceof HTMLIFrameElement || r.destroy?.(), eb.a.info("Removed app sandbox", {
                        safe: {
                            initId: W
                        }
                    }), nV(e => e === r ? null : e)
                }
            }, [tJ, t3, nb, ng, aU, aq, n9, ap, ad, aZ, ay, G, null, K, nI, nH, L, q, i, s, am, tB, ah, aC, aM, aP, aG, aW, aH, aB, ab, ax, aI, a_, aD, aj, aT, ak, aR, aL, aO, ag, aa, ai, af, n.requiresMcpInitialization, e3, n$, ek, a9, an, a7, ot, om, oe, os, tr, n2, ar, tp]), (0, x.useLayoutEffect)(() => {
                n3.setConversation(o).catch(e => {
                    eb.a.warning("Resource watch transfer failed", {
                        safe: {
                            conversationId: o,
                            mcpAppId: ek
                        },
                        sensitive: {
                            error: e,
                            hostId: K
                        }
                    })
                })
            }, [o, K, n3, ek]), (0, x.useLayoutEffect)(() => {
                n6.setConversation(o, n2 && nc).catch(e => {
                    eb.a.warning("Failed to rebind MCP event subscriptions", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, [o, n6, nc, n2]), (0, x.useLayoutEffect)(() => {
                let e = nQ?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = n6.connectNotificationSink(e);
                return () => {
                    t(), n6.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP event subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [n6, nQ]), (0, x.useLayoutEffect)(() => {
                let e = nQ?.notifyMcpAppsMcpNotification;
                if (null == e) return;
                let t = n3.connectNotificationSink(t => e$(e(t)));
                return () => {
                    t(), n3.clear().catch(e => {
                        eb.a.warning("Failed to clear MCP resource subscriptions", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }
            }, [n3, nQ]), (0, x.useEffect)(() => {
                if (!nP || null == nQ || null == n0) return;
                let e = {
                        widgetId: n0,
                        sourceMcpAppId: eN,
                        toolInput: aY,
                        toolOutput: aJ,
                        toolResponseMetadata: a6,
                        toolStatus: a3,
                        toolCallCancellationReason: tk,
                        toolResult: a2
                    },
                    t = {
                        ...e,
                        widgetState: nU
                    };
                v()(nq.current, t) || (nq.current = t, e$(nQ.setWidgetData({
                    toolInput: aY,
                    toolOutput: aJ,
                    toolResponseMetadata: a6,
                    widgetId: n0,
                    widgetState: nU
                })));
                let n = nW.current?.widgetId === n0 ? nW.current : null;
                if (v()(n, e)) return;
                nW.current = e;
                let a = n?.sourceMcpAppId !== eN;
                null != aY && (a || !v()(n?.toolInput, aY)) && e$(nQ.notifyMcpAppsToolInput({
                    arguments: aY
                })), "cancelled" === a3 ? (a || n?.toolStatus !== "cancelled" || n?.toolCallCancellationReason !== tk) && e$(nQ.notifyMcpAppsToolCancelled({
                    reason: tk
                })) : null == a2 || !a && v()(n?.toolResult, e.toolResult) && n?.toolStatus === a3 && v()(n?.toolInput, aY) && v()(n?.toolResponseMetadata, a6) || e$(nQ.notifyMcpAppsToolResult({
                    ...a2,
                    isError: "error" === a3 || a2.isError,
                    _meta: "error" === a3 ? {
                        ...a2._meta,
                        status: "error"
                    } : a2._meta
                }))
            }, [nP, a2, nQ, eN, aY, aJ, a6, a3, tk, n0, nU]), (0, x.useEffect)(() => {
                nP && null != nQ && e$(nQ.notifyMcpAppsHostContext({
                    hostContext: {
                        [h.a]: n_
                    }
                }))
            }, [nP, n_, nQ]), (0, x.useEffect)(() => {
                if (nP && null != nQ && null != nH) return i?.observeHostContext?.(tU, nH, e => {
                    e$(nQ.notifyMcpAppsHostContext({
                        hostContext: e
                    }))
                })
            }, [i, nH, nP, nQ, tU]), (0, x.useEffect)(() => {
                if (null == nH || !oi || null == nQ || null == n0 || nk && null == oa) return;
                let e = oA(nR);
                e$(nQ.setSafeArea({
                    safeArea: e
                }));
                let t = {
                    displayMode: aE(nR),
                    isTombstone: av()?.isTombstone === !0,
                    viewParams: aQ,
                    widgetId: n0
                };
                return v()(nD.current, t) || (nD.current = t, e$(nQ.setWidgetView(t))),
                    function(e) {
                        let {
                            frameElement: t,
                            inlineAnchor: n,
                            fitWidth: a,
                            rightPanelAnimationProgress: o,
                            onLayout: i
                        } = e, r = null, s = () => {
                            null == r && (r = window.requestAnimationFrame(() => {
                                r = null, i()
                            }))
                        };
                        if (s(), "u" < typeof ResizeObserver) return () => {
                            null != r && window.cancelAnimationFrame(r)
                        };
                        let l = new ResizeObserver(s);
                        l.observe(t), a && n?.parentElement != null && l.observe(n.parentElement);
                        let c = o.on("change", s);
                        return () => {
                            l.disconnect(), c(), null != r && window.cancelAnimationFrame(r)
                        }
                    }({
                        frameElement: nH,
                        inlineAnchor: oo,
                        fitWidth: tB,
                        rightPanelAnimationProgress: nE,
                        onLayout: () => {
                            let {
                                containerDimensions: t
                            } = of(nH), n = {
                                isSidebarOpen: av()?.presentation?.isSidebarOpen === !0,
                                maxHeight: t.maxHeight,
                                maxWidth: t.maxWidth,
                                surfaceBackgroundColor: oc ? "transparent" : nM
                            };
                            v()(nO.current, n) || (nO.current = n, e$(nQ.setAdditionalGlobals({
                                additionalGlobals: n
                            })));
                            let a = t_({
                                availableDisplayModes: tF.availableDisplayModes ?? G,
                                containerDimensions: t,
                                displayMode: nR,
                                locale: nv.locale,
                                deepLink: e9,
                                safeAreaInsets: e.insets,
                                styleVariables: nC,
                                theme: tS(),
                                userAgent: tE(av()?.device),
                                toolInfo: av()?.toolInfo
                            });
                            v()(nL.current, a) || (nL.current?.theme !== a.theme && e$(nQ.setTheme({
                                theme: a.theme
                            })), nL.current = a, e$(nQ.notifyMcpAppsHostContext({
                                hostContext: a
                            })))
                        }
                    })
            }, [nH, tB, nj, L, q, oo, nv.locale, nC, G, tF.availableDisplayModes, oi, nk, az, aF, oc, eV?.displayMode, eV?.showModalCloseButton, n7, e9, nE, nA, nQ, oa, nM, tp, aQ, n0, nR]);
            let oZ = n7 && !nk,
                oY = n7 && nk && nS?.tabId === (0, te.b)(ek);
            return (0, r.jsxs)(r.Fragment, {
                children: [L && oi && nP && null != nz && null != ot ? (0, r.jsx)(tv, {
                    sandboxElement: nz,
                    sandboxId: ot
                }) : null, nP && null != nz && null != ot ? (0, r.jsx)(tu, {
                    panelTabId: nk ? (0, te.b)(ek) : eV?.panelTabId ?? null,
                    sandboxElement: nz,
                    sandboxId: ot,
                    title: td
                }) : null, null != ae && oi ? (0, r.jsx)(ex.McpAppFollowUpConfirmationDialog, {
                    confirmation: {
                        ...ae,
                        onCancel: n9,
                        onConfirm: at
                    }
                }) : null, oY ? (0, r.jsx)(V.a.RightPanelTabListBefore, {
                    children: (0, r.jsx)(tH, {
                        canGoBack: n5.canGoBack,
                        canGoForward: n5.canGoForward,
                        className: "h-full px-1",
                        onBack: () => oN(-1),
                        onForward: () => oN(1)
                    })
                }) : null, oZ && null != nH && !nk ? (0, S.createPortal)((0, r.jsx)(tH, {
                    canGoBack: n5.canGoBack,
                    canGoForward: n5.canGoForward,
                    className: "absolute top-2 left-2 z-50 rounded-md border border-default bg-surface/95 p-0.5 shadow-sm",
                    onBack: () => oN(-1),
                    onForward: () => oN(1)
                }), nH) : null]
            })
        }
        async function nm(e) {
            let {
                appScope: t,
                scope: n,
                chatGptMessageId: a,
                conversationId: o,
                getTrustedToolScope: i,
                hostId: r,
                mcpAppId: s,
                mcpServerStatuses: l,
                resourceIdentity: c,
                server: u,
                signal: d,
                toolCallParams: p
            } = e, m = await nf({
                scope: n,
                getTrustedToolScope: i,
                hostId: r,
                mcpServerStatuses: l,
                server: u,
                threadId: n.get(z.b, {
                    hostId: r,
                    conversationId: o
                }) ?? void 0,
                toolArguments: p.arguments,
                toolName: p.name
            }), f = function(e, t) {
                if (!(0, M.e)(e) || !tJ(t)) return t;
                let n = {
                    ...t
                };
                return delete n.connector_id, delete n.connector_name, delete n.connector_display_name, delete n.connector_description, delete n._codex_apps, n
            }(u, p._meta), h = null == m.codexAppsResourceUri ? f : {
                ...tJ(f) ? f : {},
                _codex_apps: {
                    resource_uri: m.codexAppsResourceUri
                }
            };
            try {
                let e = (0, K.a)({
                    scope: t,
                    chatGptConversation: o.startsWith("chatgpt:") ? {
                        id: o.slice(8),
                        messageId: a ?? null
                    } : void 0,
                    toolIdentity: m.codexAppsToolIdentity,
                    resourceIdentity: c,
                    signal: d,
                    toolArguments: p.arguments ?? {}
                });
                if (null != e) return await e;
                if (o.startsWith("chatgpt:")) return (0, eq.f)({
                    isCodexAppsServer: (0, M.e)(u),
                    toolResult: await (0, e1.b)(t, r, u, m.name, p.arguments ?? {}, {
                        hostToolCallMetadata: h,
                        requestOptions: {
                            widget: {
                                conversationId: o,
                                mcpAppId: s
                            }
                        }
                    })
                });
                let i = await (0, G.b)(n, r).callMcpTool({
                    threadId: o,
                    server: u,
                    tool: m.name,
                    arguments: p.arguments ?? {},
                    _meta: h
                }, {
                    widget: {
                        conversationId: o,
                        mcpAppId: s
                    }
                });
                return (0, eq.f)({
                    isCodexAppsServer: (0, M.e)(u),
                    toolResult: i
                })
            } catch (e) {
                throw eZ(e, "MCP tool call failed")
            }
        }
        async function nf(e) {
            let {
                scope: t,
                getTrustedToolScope: n,
                hostId: a,
                mcpServerStatuses: o,
                server: i,
                threadId: r,
                toolArguments: s,
                toolName: l
            } = e, c = await eJ({
                scope: t,
                hostId: a,
                mcpServerStatuses: o,
                server: i,
                threadId: r
            }), u = eQ(c), d = n(c);
            return {
                ...eX(() => (0, eR.h)({
                    server: i,
                    toolArguments: s,
                    toolScope: d,
                    toolName: l,
                    tools: u
                })),
                serverStatus: c
            }
        }

        function nh(e) {
            return null != e && !(e instanceof t$.a)
        }
    }),
    Odi7: (function(e, t, n) {
        function a(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = Math.max(e ?? t ?? 480, n ?? 200);
            return a || null != e ? o : Math.min(o, 720)
        }

        function o(e, t) {
            return a(null, e, t)
        }
        n.d(t, {
            a: () => a,
            b: () => o
        })
    }),
    FZiz: (function(e, t, n) {
        var a = n("ABep"),
            o = n("QosV"),
            i = n("Wf1j"),
            r = n("DcH0"),
            s = n("X3K1"),
            l = n("zOE4");

        function c(e) {
            let t, n, c, u = (0, o.c)(18),
                {
                    className: d,
                    height: p,
                    inlineFramePadding: m,
                    allowCompact: f,
                    fullSurface: h,
                    showLoadingStatus: g
                } = e,
                b = void 0 !== f && f,
                v = void 0 === g || g,
                y = (0, i.a)();
            u[0] !== y ? (t = y.formatMessage({
                id: "codex.mcpTool.mcpAppLoading",
                defaultMessage: "Loading app",
                description: "Accessible label for the MCP app loading placeholder"
            }), u[0] = y, u[1] = t) : t = u[1];
            let w = t;
            if (void 0 !== h && h) {
                let e, t, n = v ? "status" : void 0,
                    o = !v;
                return u[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.LoadingPage, {
                    fillParent: !0,
                    variant: "blossom"
                }), u[2] = e) : e = u[2], u[3] !== w || u[4] !== n || u[5] !== o ? (t = (0, a.jsx)("div", {
                    className: "relative h-full min-h-0",
                    role: n,
                    "aria-hidden": o,
                    "aria-label": w,
                    "data-mcp-app-loading": "true",
                    children: e
                }), u[3] = w, u[4] = n, u[5] = o, u[6] = t) : t = u[6], t
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
            }) : (0, a.jsx)(r.a, {
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
        n.d(t, {
            a: () => c
        })
    }),
    engp: (function(e, t, n) {
        n.d(t, {
            a: () => w,
            sendMcpAppMessage: () => y
        });
        var a = n("kSHG"),
            o = n("HVBu"),
            i = n.n(o),
            r = n("IhIa"),
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

        function h(e, t, n) {
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
        var g = n("WBiY"),
            b = n("P93s"),
            v = n("kfGJ");
        async function y(e) {
            let {
                untrustedAppMessage: t,
                prompt: n,
                send: a,
                signal: o,
                messageAttachment: i,
                modelContextAttachments: r,
                requestConfirmation: s
            } = e;
            o.throwIfAborted();
            let l = {
                turnTrigger: "mcp_app_follow_up",
                addedFiles: [],
                fileAttachments: [],
                ideContext: null,
                imageAttachments: [],
                mcpAppModelContextAttachments: [...r, ...null == i || i.content?.length === 0 ? [] : [i]],
                prompt: n,
                untrustedAppMessage: t
            };
            await a(l, s)
        }

        function w(e) {
            let {
                scope: t,
                recipient: o,
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
                    let c = (0, g.b)(o);
                    if (void 0 === c && (c = null != p ? p() : null == o ? {
                            kind: "app-server",
                            hostId: v.a
                        } : null), null == c || "app-server" === c.kind && !w) throw (0, b.a)("New conversations are unavailable for this view", a.q.MethodNotFound);
                    E.throwIfAborted();
                    let A = new AbortController,
                        C = t.get(l.e),
                        M = t.get(l.i),
                        P = t.watch(e => {
                            let {
                                get: t
                            } = e;
                            (t(l.e) !== C || t(l.i) !== M) && A.abort()
                        }),
                        T = (0, s.a)(),
                        k = h(t, T);
                    i()(e => e());
                    let R = e => {
                            A.signal.aborted || (0, r.c)(e) || t.get(m.f).danger(e instanceof Error ? e.message : String(e), {
                                id: T,
                                position: "top-center",
                                duration: 0,
                                errorAnalytics: {
                                    toastId: "mcpApp.newChat.failed"
                                }
                            })
                        },
                        j = i()(() => {
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
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(17982)]).then(n.bind(n, "VWsy"));
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
                                "app-server" === c.kind && (k = h(t, T, e))
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
        var a = n("uzDN"),
            o = n("TPAN"),
            i = n("crGl"),
            r = n("o0PZ"),
            s = n("k7G6"),
            l = n("yGJW"),
            c = n("taUf");

        function u(e) {
            let {
                scope: t,
                chatgpt: n,
                hostId: u,
                navigate: d,
                toolResult: p,
                connect: m,
                open: f,
                decline: h,
                onShown: g,
                onInstallClick: b,
                isCurrent: v = () => !0
            } = e, y = c.e.safeParse(p.structuredContent);
            if (!y.success) return null;
            let w = c.c.safeParse(p._meta),
                I = w.success ? w.data["openai/plugin_suggestion_id"] : void 0,
                _ = {
                    chatgpt: n,
                    source: o.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                    suggestionId: I,
                    surface: o.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS
                },
                x = (e, o, r) => {
                    try {
                        (0, l.a)(t, i.CodexPluginAction, {
                            source: _.source,
                            suggestionId: I,
                            surface: _.surface,
                            action: e,
                            remotePluginId: o,
                            result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                            uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                        }), null != n && null != I && (e !== i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != r) && (0, l.a)(t, a.q, {
                            action: e === i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION" : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                            pluginId: o,
                            pluginIds: r,
                            result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                            suggestionId: I,
                            productExperience: n.productExperience,
                            surface: n.surface
                        })
                    } catch {}
                },
                S = new Set,
                E = e => {
                    let t = c.a.parse(e),
                        n = y.data.suggestions.find(e => {
                            let {
                                plugin_id: n
                            } = e;
                            return n === t.pluginId
                        });
                    if (!v() || null == n || null != t.suggestionId && t.suggestionId !== I) throw Error("Plugin suggestion is outside the trusted widget scope");
                    return n
                };
            return {
                requestDeclinePluginSuggestions: null == h ? void 0 : () => h(y.data.suggestions),
                sendInstrument: e => {
                    let t = c.b.safeParse(e);
                    if (!v() || !t.success || t.data.payload.suggestion_id !== I || !y.data.suggestions.some(e => {
                            let {
                                plugin_id: n
                            } = e;
                            return n === t.data.payload.remote_plugin_id
                        })) return;
                    let n = t.data.payload.remote_plugin_id;
                    if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                        if (!t.data.payload.plugin_ids.includes(n) || S.has(n)) return;
                        S.add(n), g?.(n);
                        return
                    }
                    let a = t.data.payload.plugin_ids;
                    x(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION, n, a?.includes(n) && a.every(e => y.data.suggestions.some(t => {
                        let {
                            plugin_id: n
                        } = t;
                        return n === e
                    })) ? a : void 0)
                },
                requestConnectPlugin: async e => {
                    let t = E(e);
                    return b?.(t.plugin_id), x(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id), m(t, _)
                },
                requestOpenPlugin: async e => {
                    let o = E(e);
                    if (null != n && null != f) try {
                        (0, l.a)(t, a.u, {
                            target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                            pluginId: o.plugin_id,
                            suggestionId: I,
                            surface: n.surface
                        })
                    } catch {}
                    null != f ? await f(o) : await d((0, s.a)({
                        hostId: u,
                        pluginId: o.plugin_id,
                        remoteMarketplaceName: r.Vc
                    }))
                }
            }
        }
        n.d(t, {
            a: () => u
        })
    }),
    AHnN: (function(e, t, n) {
        var a = n("ABep"),
            o = n("QosV"),
            i = n("on57"),
            r = n("XnlH"),
            s = n("zd8w"),
            l = n("oyxz"),
            c = n("ygO2"),
            u = n("Wdu7"),
            d = n("ZiSI"),
            p = n("Odi7"),
            m = n("tSEg"),
            f = n("WFY2"),
            h = n("pZTm"),
            g = n("FZiz"),
            b = n("C1SW"),
            v = n("ALWK");

        function y(e) {
            let t, n, y, w, I, _, x, S, E, A, C, M, P, T = (0, o.c)(101),
                {
                    resource: k,
                    error: R,
                    hostDisplayModes: j,
                    fullSurface: N,
                    hostScroll: D,
                    inlineSurface: L,
                    mcpAppId: O,
                    onRetryResourceRead: F,
                    renderErrorActions: U,
                    pluginName: q,
                    presentation: W,
                    showLoadingStatus: G
                } = e,
                H = void 0 !== N && N,
                B = void 0 !== D && D,
                z = void 0 === L ? "standalone" : L,
                V = void 0 === G || G,
                $ = (0, r.y)(m.a),
                X = (0, r.x)(v.j, O),
                Z = X?.content.resource;
            T[0] !== R || T[1] !== k || T[2] !== Z ? (t = null == Z ? k : {
                data: Z,
                error: R ?? null,
                isLoading: !1
            }, T[0] = R, T[1] = k, T[2] = Z, T[3] = t) : t = T[3];
            let Y = t,
                {
                    data: K,
                    isLoading: J
                } = Y,
                Q = K?.html ?? null;
            T[4] !== Y || T[5] !== j ? (n = (0, b.c)(Y, j), T[4] = Y, T[5] = j, T[6] = n) : n = T[6];
            let ee = n,
                et = (0, r.x)(v.u, O),
                en = (0, r.x)(v.v, O),
                ea = H || "inline" === W,
                [eo, ei] = (0, s.useState)(null),
                er = null != X,
                es = K?.heightHint ?? null,
                el = K?.minFrameHeight ?? null;
            T[7] !== et.intrinsicHeight || T[8] !== B || T[9] !== es || T[10] !== el ? (y = (0, p.a)(et.intrinsicHeight, es, el, B), T[7] = et.intrinsicHeight, T[8] = B, T[9] = es, T[10] = el, T[11] = y) : y = T[11];
            let ec = y,
                eu = !H && K?.fitWidth ? et.intrinsicWidth ?? K.widthHint : void 0,
                ed = H ? void 0 : K?.inlineFramePadding,
                ep = null == ed ? void 0 : -ed.blockStart,
                em = null == ed ? void 0 : -ed.blockEnd,
                ef = null == ed ? void 0 : -ed.inlineStart,
                eh = null == ed ? void 0 : -ed.inlineEnd;
            T[12] !== eu || T[13] !== ep || T[14] !== em || T[15] !== ef || T[16] !== eh ? (w = {
                width: eu,
                marginBlockStart: ep,
                marginBlockEnd: em,
                marginInlineStart: ef,
                marginInlineEnd: eh
            }, T[12] = eu, T[13] = ep, T[14] = em, T[15] = ef, T[16] = eh, T[17] = w) : w = T[17];
            let eg = w,
                eb = "error" === ee.kind ? ee.error : et.sandboxError;
            T[18] !== ee.error || T[19] !== ee.kind ? (I = null, "too-large" === ee.kind ? I = "HTML exceeds display limit" : "error" === ee.kind && ee.error instanceof b.a && (I = "No supported display mode"), T[18] = ee.error, T[19] = ee.kind, T[20] = I) : I = T[20];
            let ev = J ? null : eb,
                ey = ev?.message;
            T[21] !== I || T[22] !== K?.availableDisplayModes || T[23] !== K?.htmlByteLength || T[24] !== ev || T[25] !== j || T[26] !== O ? (_ = () => {
                (null != I || null != ev) && f.a.warning("MCP app error displayed", {
                    safe: {
                        reason: I ?? "App could not be displayed",
                        htmlByteLength: K?.htmlByteLength
                    },
                    sensitive: {
                        mcpAppId: O,
                        error: ev,
                        hostDisplayModes: j,
                        availableDisplayModes: K?.availableDisplayModes
                    }
                })
            }, T[21] = I, T[22] = K?.availableDisplayModes, T[23] = K?.htmlByteLength, T[24] = ev, T[25] = j, T[26] = O, T[27] = _) : _ = T[27];
            let ew = (0, s.useEffectEvent)(_);
            if (T[28] !== ew ? (x = () => {
                    ew()
                }, T[28] = ew, T[29] = x) : x = T[29], T[30] !== I || T[31] !== ey || T[32] !== O ? (S = [I, ey, O], T[30] = I, T[31] = ey, T[32] = O, T[33] = S) : S = T[33], (0, s.useEffect)(x, S), T[34] !== er || T[35] !== eo || T[36] !== O || T[37] !== $ ? (E = () => {
                    if (er) return (0, v.E)($, O, eo), () => {
                        (0, v.b)($, O, eo)
                    }
                }, A = [eo, er, O, $], T[34] = er, T[35] = eo, T[36] = O, T[37] = $, T[38] = E, T[39] = A) : (E = T[38], A = T[39]), (0, s.useLayoutEffect)(E, A), "too-large" === ee.kind) {
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
            if (J || !en && null != Q && null == eb) {
                let e, t, n, o;
                if ("pending" === W && !H) {
                    let e;
                    return V ? (T[41] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                        role: "status",
                        className: "loading-shimmer-pure-text text-codex-description",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.mcpTool.mcpAppLoading",
                            defaultMessage: "Loading app",
                            description: "Accessible label for the MCP app loading placeholder"
                        })
                    }), T[41] = e) : e = T[41], e) : null
                }
                if (!ea) {
                    let e;
                    return T[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                        ref: ei,
                        hidden: !0
                    }), T[42] = e) : e = T[42], e
                }
                let r = J ? null : ei,
                    s = null == ed && "max-w-full",
                    c = H && "h-full";
                T[43] !== s || T[44] !== c ? (e = (0, i.b)(s, c), T[43] = s, T[44] = c, T[45] = e) : e = T[45];
                let u = "standalone" === z && "rounded-lg border";
                T[46] !== u ? (t = (0, i.b)("w-full border-subtle", u), T[46] = u, T[47] = t) : t = T[47];
                let d = H ? "100%" : ec;
                return T[48] !== H || T[49] !== B || T[50] !== ed || T[51] !== V || T[52] !== t || T[53] !== d ? (n = (0, a.jsx)(g.a, {
                    className: t,
                    height: d,
                    inlineFramePadding: ed,
                    fullSurface: H,
                    allowCompact: B,
                    showLoadingStatus: V
                }), T[48] = H, T[49] = B, T[50] = ed, T[51] = V, T[52] = t, T[53] = d, T[54] = n) : n = T[54], T[55] !== eg || T[56] !== z || T[57] !== r || T[58] !== e || T[59] !== n ? (o = (0, a.jsx)("div", {
                    ref: r,
                    className: e,
                    style: eg,
                    "data-mcp-app-inline-surface": z,
                    children: n
                }), T[55] = eg, T[56] = z, T[57] = r, T[58] = e, T[59] = n, T[60] = o) : o = T[60], o
            }
            if (null != eb) {
                let e, t, n, o, r;
                T[61] !== q ? (e = null == q ? (0, a.jsx)(l.a, {
                    ...h.a.displayUnnamedApp
                }) : (0, a.jsx)(l.a, {
                    ...h.a.displayApp,
                    values: {
                        appName: q
                    }
                }), T[61] = q, T[62] = e) : e = T[62];
                let s = e,
                    p = "error" === ee.kind ? null != F : null != et.sandboxError;
                T[63] !== p || T[64] !== ee.kind || T[65] !== H || T[66] !== O || T[67] !== F || T[68] !== q || T[69] !== $ ? (t = p ? (0, a.jsx)(c.a, {
                    color: "secondary",
                    size: H && null != q ? "large" : "compact",
                    onClick: () => {
                        "error" === ee.kind ? F?.() : (0, v.C)($, O)
                    },
                    children: (0, a.jsx)(l.a, {
                        id: "codex.mcpTool.mcpAppRetry",
                        defaultMessage: "Try again",
                        description: "Button label to retry loading an MCP app"
                    })
                }) : null, T[63] = p, T[64] = ee.kind, T[65] = H, T[66] = O, T[67] = F, T[68] = q, T[69] = $, T[70] = t) : t = T[70];
                let m = t;
                T[71] !== U || T[72] !== m ? (n = U ? U(m) : m, T[71] = U, T[72] = m, T[73] = n) : n = T[73];
                let f = n;
                if (!H || null != q) {
                    let e, t, n, o = H ? "h-full" : "h-60",
                        r = !H && "standalone" === z && "overflow-hidden rounded-lg border border-strong";
                    T[74] !== o || T[75] !== r ? (e = (0, i.b)(o, r), T[74] = o, T[75] = r, T[76] = e) : e = T[76];
                    let l = !H;
                    return T[77] !== f || T[78] !== s || T[79] !== l ? (t = (0, a.jsx)(d.a, {
                        compact: l,
                        title: s,
                        description: null,
                        actions: f
                    }), T[77] = f, T[78] = s, T[79] = l, T[80] = t) : t = T[80], T[81] !== e || T[82] !== t ? (n = (0, a.jsx)("div", {
                        className: e,
                        children: t
                    }), T[81] = e, T[82] = t, T[83] = n) : n = T[83], n
                }
                return T[84] !== s ? (o = (0, a.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: (0, a.jsx)("div", {
                        className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                        children: s
                    })
                }), T[84] = s, T[85] = o) : o = T[85], T[86] !== f || T[87] !== o ? (r = (0, a.jsx)(u.a, {
                    className: "w-full",
                    fullWidth: !0,
                    level: "danger",
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [o, f]
                    })
                }), T[86] = f, T[87] = o, T[88] = r) : r = T[88], r
            }
            if (!ea) {
                let e;
                return T[89] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                    ref: ei,
                    hidden: !0
                }), T[89] = e) : e = T[89], e
            }
            if (null == Q) {
                let e;
                return T[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("p", {
                    className: "text-codex-description/80",
                    children: (0, a.jsx)(l.a, {
                        id: "codex.mcpTool.mcpAppNoContent",
                        defaultMessage: "This app has no content to display",
                        description: "Message shown when an MCP app resource has no renderable HTML"
                    })
                }), T[90] = e) : e = T[90], e
            }
            let eI = null == ed && "w-full max-w-full",
                e_ = H && "h-full";
            T[91] !== eI || T[92] !== e_ ? (C = (0, i.b)("overflow-hidden", eI, e_), T[91] = eI, T[92] = e_, T[93] = C) : C = T[93];
            let ex = H ? "100%" : ec;
            return T[94] !== eg || T[95] !== ex ? (M = {
                ...eg,
                height: ex
            }, T[94] = eg, T[95] = ex, T[96] = M) : M = T[96], T[97] !== z || T[98] !== C || T[99] !== M ? (P = (0, a.jsx)("div", {
                ref: ei,
                "data-mcp-app-expanded": "true",
                "data-mcp-app-inline-surface": z,
                className: C,
                style: M
            }), T[97] = z, T[98] = C, T[99] = M, T[100] = P) : P = T[100], P
        }
        n.d(t, {
            a: () => y
        })
    }),
    JXtc: (function(e, t, n) {
        var a = n("z8ZL"),
            o = n("o0PZ"),
            i = n("ASxG"),
            r = n("CsuQ"),
            s = n("WFY2");
        let l = new Set(["text/html", ...o.Nc]),
            c = /^([a-z][a-z0-9+.-]*:\/\/)?%2a(?=\.)/i,
            u = /[\s;,"']/,
            d = i.array(i.string()).transform(e => w(e, !1, !1)),
            p = i.array(i.string()).transform(e => w(e, !1, !0)),
            m = i.array(i.string()).transform(e => w(e, !0, !0)),
            f = i.union([i.object({}), i.boolean().transform(e => e ? {} : void 0)]),
            h = a.d.extend({
                camera: f.optional(),
                microphone: f.optional(),
                geolocation: f.optional(),
                clipboardWrite: f.optional()
            }),
            g = i.object({
                _meta: i.object({
                    "openai/widgetCSP": i.object({
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
                    "openai/widgetDomain": i.string().optional(),
                    "openai/widgetHeightHint": i.number().positive().optional().catch(void 0),
                    "openai/widgetWidthHint": i.number().positive().optional().catch(void 0),
                    "openai/widgetFitWidth": i.boolean().optional().catch(void 0),
                    "openai/widgetShowCodexWidgetInline": i.boolean().optional(),
                    "openai/widgetHideAttribution": i.boolean().optional().catch(void 0),
                    "openai/widgetMinFrameHeight": i.number().nonnegative().optional().catch(void 0),
                    "openai/widgetPrefersBorder": i.boolean().optional(),
                    "openai/ui": i.object({
                        availableDisplayModes: i.array(a.b).optional(),
                        preferredDisplayMode: a.b.optional()
                    }).optional(),
                    ui: i.object({
                        csp: i.object({
                            baseUriDomains: d.optional(),
                            connectDomains: m.optional(),
                            frameDomains: d.optional(),
                            resourceDomains: p.optional()
                        }).strip().optional(),
                        domain: i.string().optional(),
                        prefersBorder: i.boolean().optional(),
                        permissions: h.optional().catch(void 0)
                    }).strip().optional()
                }).strip().optional(),
                mimeType: i.string().optional().catch(void 0),
                text: i.string().optional().catch(void 0)
            }).strip();

        function b(e) {
            let t = null;
            for (let n of e?.contents ?? []) {
                let e = g.safeParse(n);
                if (!e.success) continue;
                if (e.data.mimeType === o.Lc) {
                    null == t && (t = {
                        htmlFallback: null,
                        kind: "dil",
                        source: e.data.text ?? null
                    });
                    continue
                }
                if (null == e.data.mimeType || !l.has(e.data.mimeType)) continue;
                let a = e.data._meta?.["openai/widgetHeightHint"],
                    i = e.data._meta?.["openai/widgetMinFrameHeight"],
                    r = e.data._meta?.["openai/ui"],
                    s = {
                        requiresMcpInitialization: "text/html;profile=mcp-app" === e.data.mimeType,
                        availableDisplayModes: r?.availableDisplayModes,
                        preferredDisplayMode: r?.preferredDisplayMode,
                        csp: function(e) {
                            let t = e?.ui?.csp,
                                n = e?.["openai/widgetCSP"],
                                a = t?.resourceDomains ?? n?.resourceDomains ?? n?.resource_domains ?? [],
                                o = t?.frameDomains ?? n?.frameDomains ?? n?.frame_domains ?? [];
                            return {
                                baseUriDomains: t?.baseUriDomains ?? n?.baseUriDomains ?? n?.base_uri_domains ?? [],
                                connectDomains: [...new Set([...t?.connectDomains ?? n?.connectDomains ?? n?.connect_domains ?? [], ...a])],
                                frameDomains: o,
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
                        hideAttribution: e.data._meta?.["openai/widgetHideAttribution"],
                        html: e.data.text ?? null,
                        htmlByteLength: new Blob([e.data.text ?? ""]).size,
                        kind: "html",
                        minFrameHeight: i,
                        prefersBorder: e.data._meta?.["openai/widgetPrefersBorder"] ?? e.data._meta?.ui?.prefersBorder ?? !1,
                        isCollapsible: !e.data._meta?.["openai/widgetShowCodexWidgetInline"],
                        widgetDomain: e.data._meta?.ui?.domain ?? e.data._meta?.["openai/widgetDomain"] ?? null
                    };
                return null == t ? s : {
                    ...t,
                    htmlFallback: s
                }
            }
            return t
        }

        function v(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b(e);
            if (null != n && ("html" === n.kind ? null != n.html : null != n.source || n.htmlFallback?.html != null)) return;
            let a = e.contents.map(e => {
                let t = g.safeParse(e),
                    n = "missing_text";
                return t.success ? null != t.data.mimeType && (l.has(t.data.mimeType) || t.data.mimeType === o.Lc) ? null != t.data.text && (n = "not_selected_for_rendering") : n = "unsupported_mime_type" : n = "invalid_resource_metadata", {
                    uri: e.uri,
                    mimeType: e.mimeType,
                    reason: n,
                    validationErrors: null == t.error ? void 0 : r.g(t.error)
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
        }

        function y(e) {
            let {
                hasResourceError: t = !1,
                isDilEnabled: n,
                isResourceLoading: a = !1,
                renderData: o,
                resourceUri: i,
                shouldRenderMcpApp: r
            } = e;
            if (!r) return {
                kind: "fallback"
            };
            if (null == o || "html" === o.kind && null == o.html) return a || t ? {
                kind: "html",
                renderData: null
            } : {
                kind: "fallback"
            };
            if ("dil" !== o.kind) return {
                kind: "html",
                renderData: o
            };
            if (!n || null == i || null == o.source) {
                let e = o.htmlFallback;
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
                source: o.source
            }
        }

        function w(e, t, n) {
            return [...new Set(e.flatMap(e => {
                let a = function(e, t, n) {
                    let a, o = e.trim();
                    if (0 === o.length || u.test(o)) return null;
                    if ("blob:" === o || "data:" === o) return o;
                    let i = o.replace(c, "$1*"),
                        r = /^[a-z][a-z0-9+.-]*:\/\//i.test(i) ? i : `https://${i}`;
                    try {
                        a = new URL(r)
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

        function I(e) {
            return e.endsWith(".internal.api.openai.org") || e.endsWith(".extapps.openai.org")
        }

        function _(e) {
            return !1
        }
        n.d(t, {
            a: () => y,
            b: () => b,
            c: () => I,
            d: () => v,
            e: () => _
        })
    }),
    nsed: (function(e, t, n) {
        n.d(t, {
            a: () => c,
            b: () => l
        });
        var a = n("D7Ms"),
            o = n("XnlH"),
            i = n("F6B1"),
            r = n("OWtl"),
            s = n("Nh13");
        let l = (0, o.q)(r.a, e => {
            let {
                identity: t,
                locale: n,
                widgetDomain: o
            } = e;
            return {
                queryKey: ["mcp-app-sandbox-config", t, n, o],
                queryFn: async () => {
                    let e = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode((0, a.f)([t])))).slice(0, 24), e => e.toString(16).padStart(2, "0")).join(""),
                        r = "connector" === t.kind ? function(e) {
                            let t;
                            if (null == e || "" === e) return null;
                            try {
                                t = new URL(e.includes("://") ? e : `https://${e}`).hostname
                            } catch (e) {
                                throw Error("Invalid MCP app widget domain.", {
                                    cause: e
                                })
                            }
                            let n = t.replaceAll(".", "-");
                            if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(n)) throw Error("MCP app widget domain does not map to a valid DNS label.");
                            return n
                        }(o) : null;
                    return {
                        sourceUrl: (0, i.f)({
                            environment: "chatgpt-staging.com" === window.location.hostname || window.location.hostname.endsWith(".chatgpt-staging.com") ? "staging" : "production",
                            locale: n,
                            scheme: "https",
                            subdomain: r ?? `mcp-app-${e}`
                        }),
                        partition: null == r ? i.b : (0, i.h)(`connection-${e}`, {
                            persist: !0
                        })
                    }
                },
                retry: !1,
                staleTime: 1 / 0
            }
        });

        function c(e) {
            let t = new URL(e);
            return `source-${(0,s.a)(`${t.protocol}//${t.host}`)}`
        }
    }),
    n2Dd: (function(e, t, n) {
        let a;
        var o = n("eB3o"),
            i = n("kSHG"),
            r = n("XnlH"),
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
                protocol: /^https$/
            }).max(4e3).refine(e => {
                let t = URL.parse(e);
                return null != t && !t.username && !t.password
            }),
            m = s.object({
                title: s.string().min(1).max(2e3),
                titleIcon: d.optional(),
                titleActions: s.array(u).max(20),
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
                            href: p.optional(),
                            icons: s.array(i.u).max(8).optional(),
                            icon: d.optional(),
                            sources: s.array(s.object({
                                title: s.string().min(1).max(2e3),
                                href: p.optional()
                            })).min(1).max(200)
                        })).max(20).optional()
                    }).optional()
                })).max(8)
            }),
            f = (0, r.v)(l.a, e => null);
        a = (0, o._)(Symbol.dispose);
        class h {
            scope;
            appId;
            invoke = null;
            constructor(e, t) {
                this.scope = e, this.appId = t
            }
            handleRequest(e, t, n) {
                let a = s.object({
                    method: s.literal(c),
                    params: m
                }).safeParse(e);
                if (!a.success || t.aborted) return null;
                let o = a.data.params,
                    i = [...o.titleActions, ...o.actions.flatMap(e => e.menu?.items ?? [e])],
                    r = e => {
                        !t.aborted && this.invoke === r && this.scope.get(f, this.appId)?.invoke === r && i.some(t => t.id === e && !t.disabled) && n({
                            method: "ui/notifications/openai/viewer-action",
                            params: {
                                id: e
                            }
                        })
                    };
                return this.invoke = r, this.scope.set(f, this.appId, {
                    header: o,
                    invoke: r
                }), Promise.resolve({
                    accepted: !0
                })
            } [a]() {
                this.scope.get(f, this.appId)?.invoke === this.invoke && this.scope.set(f, this.appId, null), this.invoke = null
            }
        }
        n.d(t, {
            b: () => h
        }, {
            a: c,
            c: f
        })
    }),
    ze43: (function(e, t, n) {
        n.d(t, {
            a: () => v,
            b: () => b,
            c: () => y
        });
        var a = n("ABep"),
            o = n("QosV"),
            i = n("XnlH"),
            r = n("zd8w"),
            s = n("I7bK"),
            l = n("ipIJ"),
            c = n("WAj2"),
            u = n("Vlqh");
        n("kfGJ"), u.a;
        var d = n("ALWK"),
            p = n("tSEg"),
            m = n("yyZv"),
            f = n("iWnb"),
            h = n("C1SW"),
            g = n("vzzY");

        function b(e) {
            let t, n, a = (0, o.c)(6),
                {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                } = e,
                u = (0, i.y)(p.a);
            return a[0] !== s || a[1] !== c || a[2] !== l || a[3] !== u ? (t = () => {
                (0, d.F)(u, {
                    callIds: s,
                    hostId: l,
                    conversationId: c
                })
            }, n = [s, l, c, u], a[0] = s, a[1] = c, a[2] = l, a[3] = u, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, r.useLayoutEffect)(t, n), null
        }

        function v(e) {
            let t, n, a = (0, o.c)(5),
                {
                    isInlineRequested: s,
                    mcpAppId: l
                } = e,
                c = (0, i.y)(p.a);
            return a[0] !== s || a[1] !== l || a[2] !== c ? (t = () => {
                c.set(d.l, l, s)
            }, n = [s, l, c], a[0] = s, a[1] = l, a[2] = c, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, r.useLayoutEffect)(t, n), null
        }

        function y(e) {
            let t, n, u, b, v, y, w, I, _, x = (0, o.c)(117),
                {
                    recipient: S,
                    analyticsContext: E,
                    resource: A,
                    refetchResource: C,
                    getResourceHost: M,
                    openOnRegistration: P,
                    conversationId: T,
                    fullSurface: k,
                    modalOpen: R,
                    hostScroll: j,
                    hostDisplayModes: N,
                    legacyPreferredDisplayMode: D,
                    inheritHostBackground: L,
                    hostId: O,
                    hostedInThreadScrollLayout: F,
                    resourceIdentity: U,
                    lifetime: q,
                    mcpAppId: W,
                    mcpAppScope: G,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: z,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: Z,
                    plaidAccountId: Y,
                    deepLink: K,
                    Frame: J,
                    resolveResourceWatchPath: Q,
                    server: ee,
                    appIcon: et,
                    sidePanelTitle: en,
                    title: ea,
                    globalSurface: eo,
                    toolArguments: ei,
                    toolResult: er,
                    toolResultNotification: es,
                    toolCallStatus: el,
                    toolCallCancellationReason: ec,
                    viewParamsOverride: eu
                } = e,
                ed = void 0 === S ? null : S,
                ep = void 0 !== P && P,
                em = void 0 !== k && k,
                ef = void 0 !== j && j,
                eh = void 0 !== L && L,
                eg = void 0 === J ? f.a : J,
                eb = void 0 !== eo && eo,
                ev = (0, i.y)(p.a),
                ey = (0, i.x)(d.s, W),
                ew = (0, i.z)(m.a);
            x[0] !== ed ? (t = null == ed ? void 0 : e => (0, l.a)(ed, e), x[0] = ed, x[1] = t) : t = x[1];
            let eI = t;
            x[2] !== q || x[3] !== W || x[4] !== ev ? (u = () => {
                if ("component" === q) return () => {
                    (0, d.z)(ev, W)
                }
            }, n = [q, W, ev], x[2] = q, x[3] = W, x[4] = ev, x[5] = n, x[6] = u) : (n = x[5], u = x[6]), (0, r.useLayoutEffect)(u, n);
            let e_ = (0, r.useContext)(s.c)?.rightPanelLayoutTick,
                ex = void 0 !== z ? z : B?.data.find(e => {
                    let {
                        name: t
                    } = e;
                    return t === ee
                })?.pluginId,
                {
                    bridge: eS,
                    isLoading: eE
                } = (0, i.x)(c.a, {
                    hostId: O,
                    pluginId: ex,
                    server: ee
                }),
                eA = ! function(e) {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    return !1
                }({
                    hostId: O,
                    pluginId: ex
                }) ? void 0 : ex ?? void 0,
                eC = A.isLoading || eE;
            x[7] !== N || x[8] !== eC || x[9] !== A ? (b = (0, h.c)({
                ...A,
                isLoading: eC
            }, N), x[7] = N, x[8] = eC, x[9] = A, x[10] = b) : b = x[10];
            let eM = b;
            return x[11] !== E || x[12] !== et || x[13] !== T || x[14] !== K || x[15] !== eM || x[16] !== eS || x[17] !== eA || x[18] !== em || x[19] !== $ || x[20] !== M || x[21] !== eb || x[22] !== N || x[23] !== O || x[24] !== ef || x[25] !== F || x[26] !== eh || x[27] !== X || x[28] !== ew || x[29] !== D || x[30] !== V || x[31] !== W || x[32] !== G || x[33] !== B || x[34] !== R || x[35] !== eI || x[36] !== ep || x[37] !== Y || x[38] !== ed || x[39] !== C || x[40] !== Q || x[41] !== ex || x[42] !== U || x[43] !== e_ || x[44] !== ev || x[45] !== ee || x[46] !== en || x[47] !== H || x[48] !== ea || x[49] !== ei || x[50] !== ec || x[51] !== el || x[52] !== er || x[53] !== es || x[54] !== eu || x[55] !== Z ? (v = () => {
                ew || "ready" === eM.kind && null != U && (0, d.y)(ev, {
                    recipient: ed,
                    onSessionDispose: eI,
                    resource: eM.data,
                    refetchResource: C,
                    getResourceHost: M,
                    openOnRegistration: ep,
                    conversationId: T,
                    firstPartyPluginBridge: eS,
                    firstPartyPluginLoggerPluginId: eA,
                    fullSurface: em,
                    modalOpen: R,
                    hostScroll: ef,
                    hostDisplayModes: N,
                    legacyPreferredDisplayMode: D,
                    inheritHostBackground: eh,
                    hostId: O,
                    hostedInThreadScrollLayout: F,
                    resourceIdentity: U,
                    analyticsContext: E,
                    inlineFrameContainer: null,
                    mcpAppId: W,
                    mcpAppScope: G,
                    sourceName: H,
                    mcpServerStatuses: B,
                    pluginId: ex,
                    mcpAppHostAdapter: V,
                    getNewThreadDestination: $,
                    initialWidgetState: X,
                    widgetStatePersistence: Z,
                    plaidAccountId: Y,
                    deepLink: K,
                    rightPanelLayoutTick: e_,
                    resolveResourceWatchPath: Q,
                    server: ee,
                    appIcon: et,
                    sidePanelTitle: en,
                    title: ea,
                    globalSurface: eb,
                    toolArguments: ei,
                    toolResult: er,
                    toolResultNotification: es,
                    toolCallStatus: el,
                    toolCallCancellationReason: ec,
                    viewParamsOverride: eu
                })
            }, x[11] = E, x[12] = et, x[13] = T, x[14] = K, x[15] = eM, x[16] = eS, x[17] = eA, x[18] = em, x[19] = $, x[20] = M, x[21] = eb, x[22] = N, x[23] = O, x[24] = ef, x[25] = F, x[26] = eh, x[27] = X, x[28] = ew, x[29] = D, x[30] = V, x[31] = W, x[32] = G, x[33] = B, x[34] = R, x[35] = eI, x[36] = ep, x[37] = Y, x[38] = ed, x[39] = C, x[40] = Q, x[41] = ex, x[42] = U, x[43] = e_, x[44] = ev, x[45] = ee, x[46] = en, x[47] = H, x[48] = ea, x[49] = ei, x[50] = ec, x[51] = el, x[52] = er, x[53] = es, x[54] = eu, x[55] = Z, x[56] = v) : v = x[56], x[57] !== eg || x[58] !== E || x[59] !== et || x[60] !== T || x[61] !== K || x[62] !== eM || x[63] !== eS || x[64] !== eA || x[65] !== em || x[66] !== $ || x[67] !== M || x[68] !== eb || x[69] !== N || x[70] !== O || x[71] !== ef || x[72] !== F || x[73] !== eh || x[74] !== X || x[75] !== ew || x[76] !== eC || x[77] !== D || x[78] !== q || x[79] !== V || x[80] !== W || x[81] !== G || x[82] !== B || x[83] !== R || x[84] !== eI || x[85] !== ep || x[86] !== Y || x[87] !== ed || x[88] !== C || x[89] !== Q || x[90] !== ex || x[91] !== U || x[92] !== e_ || x[93] !== ev || x[94] !== ee || x[95] !== en || x[96] !== H || x[97] !== ea || x[98] !== ei || x[99] !== ec || x[100] !== el || x[101] !== er || x[102] !== es || x[103] !== eu || x[104] !== Z ? (y = [E, M, C, eM, ep, ed, eI, T, eS, eA, em, R, ef, N, D, eh, O, F, U, ew, eC, q, W, G, H, B, ex, V, $, X, Z, Y, K, eg, e_, Q, ev, ee, et, en, ea, eb, ei, er, es, el, ec, eu], x[57] = eg, x[58] = E, x[59] = et, x[60] = T, x[61] = K, x[62] = eM, x[63] = eS, x[64] = eA, x[65] = em, x[66] = $, x[67] = M, x[68] = eb, x[69] = N, x[70] = O, x[71] = ef, x[72] = F, x[73] = eh, x[74] = X, x[75] = ew, x[76] = eC, x[77] = D, x[78] = q, x[79] = V, x[80] = W, x[81] = G, x[82] = B, x[83] = R, x[84] = eI, x[85] = ep, x[86] = Y, x[87] = ed, x[88] = C, x[89] = Q, x[90] = ex, x[91] = U, x[92] = e_, x[93] = ev, x[94] = ee, x[95] = en, x[96] = H, x[97] = ea, x[98] = ei, x[99] = ec, x[100] = el, x[101] = er, x[102] = es, x[103] = eu, x[104] = Z, x[105] = y) : y = x[105], (0, r.useLayoutEffect)(v, y), x[106] !== eg || x[107] !== q || x[108] !== W || x[109] !== ev || x[110] !== ey ? (w = () => {
                "component" !== q && null != ey && (0, g.b)(ev, {
                    Frame: eg,
                    lifetime: q,
                    sessionId: ey,
                    sourceMcpAppId: W
                })
            }, I = [eg, q, W, ey, ev], x[106] = eg, x[107] = q, x[108] = W, x[109] = ev, x[110] = ey, x[111] = w, x[112] = I) : (w = x[111], I = x[112]), (0, r.useLayoutEffect)(w, I), x[113] !== eg || x[114] !== q || x[115] !== ey ? (_ = "component" === q && null != ey ? (0, a.jsx)(eg, {
                sessionId: ey
            }, ey) : null, x[113] = eg, x[114] = q, x[115] = ey, x[116] = _) : _ = x[116], _
        }
    }),
    fm8Z: (function(e, t, n) {
        var a = n("p5Yg");

        function o(e) {
            let {
                update: t,
                motionValues: n
            } = e, o = () => {
                a.b.postRender(t)
            }, i = n.map(e => e?.on("change", o));
            return {
                scheduleUpdate: o,
                disconnect() {
                    for (let e of i) e?.();
                    (0, a.a)(t)
                }
            }
        }
        n.d(t, {
            a: () => o
        })
    })
};