export const __rspack_esm_id = 71494;
export const __rspack_esm_ids = [71494];
export const __webpack_modules__ = {
    sM3V: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("a4MG"),
            l = o("OWtl"),
            i = o("toag");
        let a = (0, n.d)(l.a, (e, t) => {
                let {
                    hostId: o,
                    conversationId: n
                } = e, {
                    get: r
                } = t;
                if (n.startsWith("chatgpt:")) return null;
                let l = r(i.kc, {
                    hostId: o,
                    threadId: n
                });
                return null != l && "notLoaded" !== l.type ? n : null
            }),
            s = (0, n.d)(l.a, (e, t) => {
                let {
                    get: o
                } = t, n = o(a, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }), {
                    data: l
                } = null == n ? o(r.n, e.hostId) : o(r.o, {
                    hostId: e.hostId,
                    threadId: n,
                    serverName: e.serverName
                });
                return l?.data.find(t => t.name === e.serverName)?.serverInfo ?? null
            });
        o.d(t, {}, {
            a: s,
            b: a
        })
    }),
    VvpR: (function(e, t, o) {
        var n = o("SRbQ"),
            r = o("Y5Sy"),
            l = o("Dgwo"),
            i = o("dF4Z"),
            a = o("hs0N"),
            s = o("syw5");
        async function d(e, t, o, r) {
            let i = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let d = (0, l.b)(e, t),
                    c = (0, n.a)(i, await d.getFollowUpContext(o, !0), !1);
                return await d.startTurn(o, {
                    ...r,
                    context: {
                        ...r.context,
                        onRequestDispatched: r.context?.onRequestDispatched ?? (e => {
                            null != r.request.clientUserMessageId && a.a.markRequestDispatched(r.request.clientUserMessageId, e)
                        }),
                        trace: r.context?.trace ?? (null == r.request.clientUserMessageId ? void 0 : a.a.getTrace(r.request.clientUserMessageId)),
                        writingBlockContextPrepared: null != c
                    },
                    request: {
                        ...r.request,
                        additionalContext: (0, s.a)(o, c?.writingBlocks, r.request.additionalContext)
                    }
                })
            } catch (e) {
                i.error = e, i.hasError = !0
            } finally {
                (0, n.e)(i)
            }
        }
        async function c(e, t, o, r) {
            let i = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let a = (0, l.b)(e, t),
                    d = (0, n.a)(i, await a.getFollowUpContext(o, !0), !1);
                await a.startEmptyTurn(o, {
                    ...r,
                    writingBlockContextPrepared: null != d,
                    additionalContext: (0, s.a)(o, d?.writingBlocks, r.additionalContext)
                })
            } catch (e) {
                i.error = e, i.hasError = !0
            } finally {
                (0, n.e)(i)
            }
        }
        async function u(e, t, o, a) {
            let d = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let c = (0, l.b)(e, t),
                    u = (0, n.a)(d, await c.getFollowUpContext(o, !0), !1);
                if (e.get(r.a)) throw new i.a;
                await c.editLastUserTurn(o, {
                    ...a,
                    writingBlockContextPrepared: null != u,
                    additionalContext: (0, s.a)(o, u?.writingBlocks, a.additionalContext)
                })
            } catch (e) {
                d.error = e, d.hasError = !0
            } finally {
                (0, n.e)(d)
            }
        }
        async function p(e, t, o, r, i) {
            let a = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let d = (0, l.b)(e, t),
                    c = (0, n.a)(a, await d.getFollowUpContext(o, !0), !1);
                await d.retrySafetyBufferedTurn(o, r, i, {
                    additionalContext: (0, s.a)(o, c?.writingBlocks),
                    writingBlockContextPrepared: null != c
                })
            } catch (e) {
                a.error = e, a.hasError = !0
            } finally {
                (0, n.e)(a)
            }
        }
        o.d(t, {
            a: () => u,
            b: () => p,
            c: () => c,
            d: () => d
        })
    }),
    PYah: (function(e, t, o) {
        var n = o("Dgwo");
        async function r(e, t, o, r) {
            let {
                apps: l
            } = await (0, n.b)(e, t).sendRequest("app/installed", {
                forceRefresh: !0,
                threadId: o
            }, null == r ? void 0 : {
                threadAccess: r,
                coalesce: !1
            });
            return new Set(l.filter(e => {
                let {
                    callable: t,
                    enabled: o
                } = e;
                return t && o
            }).map(e => {
                let {
                    id: t
                } = e;
                return t
            }))
        }
        o.d(t, {
            a: () => r
        })
    }),
    dKZq: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            l = o("on57"),
            i = o("iTtm"),
            a = o("zd8w"),
            s = o("oyxz"),
            d = o("NkEl"),
            c = o("ygO2"),
            u = o("oQwr"),
            p = o("Pjl1"),
            f = o("hMRX"),
            g = o("Mali");
        let h = "a[href], area[href]";

        function m(e) {
            let t, o, m, b, w, v, y, C, j, M, k, A, S, q, N, P, T = (0, r.c)(59),
                {
                    children: E,
                    collapsedLineCount: I,
                    collapseIndicator: F,
                    textTone: R,
                    text: O
                } = e,
                z = void 0 === I ? 20 : I,
                U = void 0 === F ? "ellipsis" : F,
                _ = void 0 === R ? "default" : R,
                B = (0, i.z)(g.a),
                L = 512 * z,
                W = !B && "function" == typeof E && O.length > L;
            T[0] !== z || T[1] !== W || T[2] !== O ? (t = {
                text: O,
                collapsedLineCount: z,
                fallbackFontSizePx: 13,
                forceCollapsible: W
            }, T[0] = z, T[1] = W, T[2] = O, T[3] = t) : t = T[3];
            let {
                setTextContentMeasurementRef: D,
                collapseState: H,
                handleToggleExpansion: V
            } = (0, u.b)(t), Z = !B && "collapsed" === H, Q = Z && "ellipsis" === U && z > 2, K = z - !!Q, G = (0, a.useRef)(null);
            T[4] !== K || T[5] !== W || T[6] !== Z ? (o = () => {
                if (!Z || W) return;
                let e = G.current,
                    t = e?.firstElementChild;
                if (null == e || null == t) return;
                let o = () => {
                    let t = e.querySelectorAll('[data-markdown-copy="code-block"]:not(pre)');
                    if (0 === t.length) {
                        e.style.maxHeight = `${K}lh`;
                        return
                    }
                    let o = Number.parseFloat(window.getComputedStyle(e).lineHeight);
                    if (!Number.isFinite(o)) return;
                    let n = e.getBoundingClientRect(),
                        r = 0 === e.offsetHeight ? 1 : n.height / e.offsetHeight,
                        l = Math.ceil(o * K);
                    for (let e of t) {
                        let t = e.getBoundingClientRect(),
                            o = (t.top - n.top) / r,
                            i = (t.bottom - n.top) / r;
                        o < l && i > l && (l = Math.ceil(i))
                    }
                    e.style.maxHeight = `${l}px`
                };
                o();
                let n = new ResizeObserver(o);
                n.observe(t);
                let r = new MutationObserver(o);
                return r.observe(t, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    n.disconnect(), r.disconnect()
                }
            }, T[4] = K, T[5] = W, T[6] = Z, T[7] = o) : o = T[7], T[8] !== K || T[9] !== W || T[10] !== Z || T[11] !== O ? (m = [K, W, Z, O], T[8] = K, T[9] = W, T[10] = Z, T[11] = O, T[12] = m) : m = T[12], (0, a.useLayoutEffect)(o, m), T[13] !== Z ? (b = () => {
                if (!Z) return;
                let e = G.current;
                if (null == e) return;
                let t = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(e => {
                        for (let t of e) o.has(t.target) && x(t.target, t.isIntersecting && (t.target.matches(h) ? t.intersectionRatio > 0 : t.intersectionRatio >= 1), o.get(t.target) ?? null)
                    }, {
                        root: e,
                        rootMargin: "0px",
                        threshold: [Number.EPSILON, 1]
                    }),
                    o = new Map,
                    n = () => {
                        for (let n of o.keys()) e.contains(n) || (t?.unobserve(n), o.delete(n));
                        for (let n of e.querySelectorAll('a[href], area[href], button, input, select, textarea, summary, audio[controls], video[controls], iframe, [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])')) {
                            if (o.has(n) || n.hasAttribute("inert")) continue;
                            let r = n.getAttribute("aria-hidden");
                            o.set(n, r), x(n, null == t && function(e, t) {
                                let o = e.getBoundingClientRect(),
                                    n = t.getBoundingClientRect();
                                return e.matches(h) ? Math.min(o.right, n.right) > Math.max(o.left, n.left) && Math.min(o.bottom, n.bottom) > Math.max(o.top, n.top) : o.top >= n.top && o.right <= n.right && o.bottom <= n.bottom && o.left >= n.left
                            }(n, e), r), t?.observe(n)
                        }
                    };
                n();
                let r = new MutationObserver(n);
                return r.observe(e, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    for (let [e, n] of(t?.disconnect(), r.disconnect(), o)) x(e, !0, n)
                }
            }, T[13] = Z, T[14] = b) : b = T[14], T[15] !== z || T[16] !== Z || T[17] !== O ? (w = [z, Z, O], T[15] = z, T[16] = Z, T[17] = O, T[18] = w) : w = T[18], (0, a.useEffect)(b, w);
            let $ = !B;
            T[19] !== V || T[20] !== W || T[21] !== Z || T[22] !== O ? (v = e => {
                if (G.current = e, null != e) return (0, d.b)(e, {
                    highlight: "text",
                    text: O,
                    isTruncated: Z && W,
                    reveal: Z ? V : void 0
                })
            }, T[19] = V, T[20] = W, T[21] = Z, T[22] = O, T[23] = v) : v = T[23];
            let J = Z && "overflow-hidden",
                Y = Z && "fade" === U && "mask-b-from-80% mask-b-to-100%";
            T[24] !== J || T[25] !== Y ? (y = (0, l.b)(J, Y), T[24] = J, T[25] = Y, T[26] = y) : y = T[26], T[27] !== K || T[28] !== Z ? (C = Z ? {
                maxHeight: `${K}lh`
            } : void 0, T[27] = K, T[28] = Z, T[29] = C) : C = T[29];
            let X = W ? void 0 : D;
            return T[30] !== E || T[31] !== Z || T[32] !== L || T[33] !== O ? (j = "function" == typeof E ? E(Z ? O.slice(0, L) : O) : E, T[30] = E, T[31] = Z, T[32] = L, T[33] = O, T[34] = j) : j = T[34], T[35] !== X || T[36] !== j ? (M = (0, n.jsx)("div", {
                ref: X,
                children: j
            }), T[35] = X, T[36] = j, T[37] = M) : M = T[37], T[38] !== v || T[39] !== y || T[40] !== C || T[41] !== M ? (k = (0, n.jsx)("div", {
                ref: v,
                className: y,
                style: C,
                children: M
            }), T[38] = v, T[39] = y, T[40] = C, T[41] = M, T[42] = k) : k = T[42], T[43] !== k || T[44] !== $ ? (A = (0, n.jsx)(f.a.Provider, {
                value: $,
                children: k
            }), T[43] = k, T[44] = $, T[45] = A) : A = T[45], T[46] !== Q ? (S = Q ? (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: "block",
                children: "…"
            }) : null, T[46] = Q, T[47] = S) : S = T[47], T[48] !== A || T[49] !== S ? (q = (0, n.jsxs)("div", {
                className: "relative w-full min-w-0 text-size-chat leading-relaxed",
                children: [A, S]
            }), T[48] = A, T[49] = S, T[50] = q) : q = T[50], T[51] !== H || T[52] !== V || T[53] !== B || T[54] !== _ ? (N = B || "uncollapsible" === H ? null : (0, n.jsxs)(c.a, {
                className: (0, l.b)("mt-1.5 self-start text-size-chat", "default" === _ && "text-codex-description"),
                "aria-expanded": "expanded" === H,
                "data-thread-find-skip": !0,
                "data-markdown-copy": "exclude",
                color: "user-message" === _ ? "ghostUserMessage" : "disclosure",
                onClick: V,
                size: "inline",
                children: [(0, n.jsx)("span", {
                    children: "expanded" === H ? (0, n.jsx)(s.a, {
                        id: "codex.userMessage.showLess",
                        defaultMessage: "Show less",
                        description: "Button label for collapsing an expanded user message"
                    }) : (0, n.jsx)(s.a, {
                        id: "codex.userMessage.showMore",
                        defaultMessage: "Show more",
                        description: "Button label for expanding a truncated user message"
                    })
                }), (0, n.jsx)(p.a, {
                    className: "expanded" === H ? "icon-2xs rotate-180" : "icon-2xs"
                })]
            }), T[51] = H, T[52] = V, T[53] = B, T[54] = _, T[55] = N) : N = T[55], T[56] !== q || T[57] !== N ? (P = (0, n.jsxs)("div", {
                className: "flex flex-col items-end gap-1",
                children: [q, N]
            }), T[56] = q, T[57] = N, T[58] = P) : P = T[58], P
        }

        function x(e, t, o) {
            e.toggleAttribute("inert", !t), t ? null == o ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", o) : e.setAttribute("aria-hidden", "true")
        }
        o.d(t, {
            a: () => m
        })
    }),
    Mali: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("v7qY"),
            l = o("OWtl");
        let i = (0, n.h)(l.a, () => !1, e => {
            let {
                set: t
            } = e, o = () => (0, r.flushSync)(() => t(!0)), n = () => t(!1);
            return window.addEventListener("beforeprint", o), window.addEventListener("afterprint", n), () => {
                window.removeEventListener("beforeprint", o), window.removeEventListener("afterprint", n)
            }
        });
        o.d(t, {}, {
            a: i
        })
    }),
    r21w: (function(e, t, o) {
        o.d(t, {
            a: () => i
        });
        var n = o("ABep"),
            r = o("QosV"),
            l = o("on57");

        function i(e) {
            let t, o, i, a, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...o
            } = e, s[0] = e, s[1] = t, s[2] = o) : (t = s[1], o = s[2]), s[3] !== t ? (i = (0, l.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = i) : i = s[4], s[5] !== o || s[6] !== i ? (a = (0, n.jsx)("div", {
                className: i,
                ...o
            }), s[5] = o, s[6] = i, s[7] = a) : a = s[7], a
        }
    }),
    F8wW: (function(e, t, o) {
        var n = o("QosV"),
            r = o("zd8w");
        class l {
            pendingRequest = null;
            confirmation = null;
            listeners = new Set;
            errors;
            constructor(e) {
                this.errors = e
            }
            getSnapshot = () => this.confirmation;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e), 0 === this.listeners.size && this.cancel()
            });
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, o) => {
                this.pendingRequest = {
                    reject: o,
                    resolve: t
                }, this.setConfirmation(e)
            });
            confirm = e => {
                let t = this.takePendingRequest();
                null != t && (this.setConfirmation(null), t.resolve(e))
            };
            cancel = () => {
                let e = this.takePendingRequest();
                null != e && (this.setConfirmation(null), e.reject(this.errors.createCanceledError()))
            };
            setConfirmation(e) {
                for (let t of (this.confirmation = e, this.listeners)) t()
            }
            takePendingRequest() {
                let e = this.pendingRequest;
                return this.pendingRequest = null, e
            }
        }

        function i(e) {
            let t, o, i = (0, n.c)(7);
            i[0] !== e ? (t = () => new l(e), i[0] = e, i[1] = t) : t = i[1];
            let [a] = (0, r.useState)(t), s = (0, r.useSyncExternalStore)(a.subscribe, a.getSnapshot, a.getSnapshot);
            return i[2] !== s || i[3] !== a.cancel || i[4] !== a.confirm || i[5] !== a.request ? (o = {
                cancel: a.cancel,
                confirmation: s,
                confirm: a.confirm,
                request: a.request
            }, i[2] = s, i[3] = a.cancel, i[4] = a.confirm, i[5] = a.request, i[6] = o) : o = i[6], o
        }
        o.d(t, {
            a: () => i
        })
    }),
    RFeS: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            l = o("zd8w"),
            i = o("Wf1j"),
            a = o("oyxz"),
            s = o("hL9c"),
            d = o("osar"),
            c = o("v5fl"),
            u = o("ygO2"),
            p = o("JNtf"),
            f = o("mUDD"),
            g = o("zLIa"),
            h = o("xqnZ"),
            m = o("Ztsm");

        function x(e) {
            let t, o = (0, r.c)(2),
                {
                    confirmation: l
                } = e;
            return null == l ? null : (o[0] !== l ? (t = (0, n.jsx)(b, {
                ...l
            }), o[0] = l, o[1] = t) : t = o[1], t)
        }

        function b(e) {
            let t, o, s, x, b, j, M, k = (0, r.c)(31),
                {
                    canConfirm: A,
                    context: S,
                    description: q,
                    imageUrls: N,
                    onCancel: P,
                    onConfirm: T,
                    prompt: E,
                    title: I
                } = e,
                F = void 0 === A || A,
                R = (0, i.a)();
            k[0] !== E ? (t = () => {
                let e = (0, h.e)(E, {
                    defaultTextKind: "prompt",
                    enableFileMentions: !1,
                    enableSkillMentions: !1,
                    enableSlashCommands: !1,
                    enterBehavior: "newline"
                });
                return {
                    controller: e,
                    destroy: () => e.destroy()
                }
            }, k[0] = E, k[1] = t) : t = k[1];
            let [O] = (0, l.useState)(t), {
                controller: z,
                destroy: U
            } = O;
            (0, h.f)(U, z);
            let _ = (0, c.b)(z, v, "document"),
                [B, L] = (0, l.useState)(S);
            k[2] !== S ? (o = C(S), k[2] = S, k[3] = o) : o = k[3];
            let W = o,
                [D, H] = (0, l.useState)(W),
                [V, Z] = (0, l.useState)("prompt");
            k[4] !== D ? (s = function(e) {
                try {
                    return (0, m.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(D), k[4] = D, k[5] = s) : s = k[5];
            let Q = s;
            k[6] !== F || k[7] !== B || k[8] !== z || k[9] !== T ? (x = () => {
                let e = z.getText().trim();
                F && e.length > 0 && T((0, m.a)({
                    context: B,
                    prompt: e
                }))
            }, k[6] = F, k[7] = B, k[8] = z, k[9] = T, k[10] = x) : x = k[10];
            let K = x;
            return k[11] !== P ? (b = e => {
                e || P()
            }, k[11] = P, k[12] = b) : b = k[12], k[13] !== F || k[14] !== K || k[15] !== B || k[16] !== D || k[17] !== z || k[18] !== q || k[19] !== _ || k[20] !== N || k[21] !== W || k[22] !== R || k[23] !== P || k[24] !== Q || k[25] !== I || k[26] !== V ? (j = "prompt" === V ? (0, n.jsxs)(f.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), K()
                },
                children: [(0, n.jsx)(y, {
                    description: q,
                    title: I
                }), (0, n.jsx)(d.a, {
                    children: (0, n.jsx)(d.a.Body, {
                        children: (0, n.jsx)(d.a.Input, {
                            children: (0, n.jsx)(h.a, {
                                ariaLabel: R.formatMessage({
                                    id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                    defaultMessage: "Prompt",
                                    description: "Aria label for the editable prompt field in the MCP app follow-up confirmation dialog"
                                }),
                                composerController: z,
                                linkOpenTarget: "external-browser",
                                placeholder: "",
                                onSubmit: K
                            })
                        })
                    })
                }), null != N && N.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: N.map(w)
                }) : null, null != B ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-info underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        H(C(B)), Z("widget-state")
                    },
                    children: (0, n.jsx)(a.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state",
                        description: "Link that opens the editable widget state included with a follow-up prompt"
                    })
                }) : null, (0, n.jsxs)(f.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(u.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: P,
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    }), (0, n.jsx)(u.a, {
                        disabled: !F || !_,
                        type: "submit",
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send",
                            description: "Confirm button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    })]
                })]
            }) : (0, n.jsxs)(f.b, {
                className: "gap-4",
                children: [(0, n.jsx)(f.d, {
                    title: (0, n.jsx)(p.e, {
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                            description: "Title for the editable widget state view in a follow-up confirmation dialog"
                        })
                    }),
                    subtitle: (0, n.jsx)(p.d, {
                        className: "text-secondary",
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget.",
                            description: "Description for the editable widget state view in a follow-up confirmation dialog"
                        })
                    })
                }), (0, n.jsx)(g.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Q,
                    "aria-label": R.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON",
                        description: "Aria label for the editable JSON widget state in a follow-up confirmation dialog"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: D,
                    onChange: e => {
                        H(e.target.value)
                    }
                }), null == Q ? (0, n.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, n.jsx)(a.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB",
                        description: "Validation error for invalid editable widget state JSON"
                    })
                }) : null, (0, n.jsxs)(f.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(u.a, {
                        color: "ghost",
                        disabled: D === W,
                        type: "button",
                        onClick: () => {
                            H(W)
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset",
                            description: "Button that resets edited widget state to the value supplied by the widget"
                        })
                    }), (0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(u.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            H(C(B)), Z("prompt")
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back",
                            description: "Button that returns from widget state editing to the follow-up prompt"
                        })
                    }), (0, n.jsx)(u.a, {
                        disabled: null == Q,
                        type: "button",
                        onClick: () => {
                            null != Q && (L(Q), Z("prompt"))
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply",
                            description: "Button that applies edited widget state to a follow-up prompt"
                        })
                    })]
                })]
            }), k[13] = F, k[14] = K, k[15] = B, k[16] = D, k[17] = z, k[18] = q, k[19] = _, k[20] = N, k[21] = W, k[22] = R, k[23] = P, k[24] = Q, k[25] = I, k[26] = V, k[27] = j) : j = k[27], k[28] !== b || k[29] !== j ? (M = (0, n.jsx)(p.b, {
                open: !0,
                onOpenChange: b,
                size: "wide",
                children: j
            }), k[28] = b, k[29] = j, k[30] = M) : M = k[30], M
        }

        function w(e, t) {
            return (0, n.jsx)(s.a, {
                src: e
            }, t)
        }

        function v(e) {
            return e.getText().trim().length > 0
        }

        function y(e) {
            let t, o, l, i, s, d = (0, r.c)(11),
                {
                    description: c,
                    title: u
                } = e;
            return d[0] !== u ? (t = u ?? (0, n.jsx)(a.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?",
                description: "Title for a dialog asking whether an MCP app may send a follow-up prompt"
            }), d[0] = u, d[1] = t) : t = d[1], d[2] !== t ? (o = (0, n.jsx)(p.e, {
                children: t
            }), d[2] = t, d[3] = o) : o = d[3], d[4] !== c ? (l = c ?? (0, n.jsx)(a.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
                description: "Description for a dialog asking whether an MCP app may send a follow-up prompt"
            }), d[4] = c, d[5] = l) : l = d[5], d[6] !== l ? (i = (0, n.jsx)(p.d, {
                className: "text-secondary",
                children: l
            }), d[6] = l, d[7] = i) : i = d[7], d[8] !== o || d[9] !== i ? (s = (0, n.jsx)(f.d, {
                title: o,
                subtitle: i
            }), d[8] = o, d[9] = i, d[10] = s) : s = d[10], s
        }

        function C(e) {
            return null == e ? "" : (0, m.d)(e)
        }
        o.d(t, {
            McpAppFollowUpConfirmationDialog: () => x
        })
    }),
    lu7q: (function(e, t, o) {
        var n = o("ASxG"),
            r = o("Ztsm");
        class l extends Error {
            code = -32e3;
            constructor() {
                super("Follow-up message was not confirmed")
            }
        }
        class i extends Error {
            code = -32e3;
            constructor() {
                super("A follow-up message is already awaiting confirmation")
            }
        }

        function a(e) {
            return (0, r.c)(e)
        }
        async function s(e, t, o, r) {
            let {
                text: l
            } = n.object({
                text: n.string().min(1)
            }).parse(e), i = await o({
                prompt: l
            });
            r.throwIfAborted(), await t({
                text: i
            })
        }
        o.d(t, {
            b: () => a,
            c: () => s
        }, {
            a: {
                createAlreadyPendingError: () => new i,
                createCanceledError: () => new l
            }
        })
    }),
    we56: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("i8Zd"),
            l = o("OWtl");
        let i = (0, n.c)(l.a, e => {
            let {
                get: t
            } = e;
            return t(r.a),
                function() {
                    let e = getComputedStyle(document.documentElement),
                        t = document.createElement("div");
                    t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                    let o = t => {
                            let o = e.getPropertyValue(t).trim();
                            return o.length > 0 ? o : void 0
                        },
                        n = o => {
                            let n = a(e, t, o, "color"),
                                r = a(e, t, "--color-surface-tertiary", "color");
                            if (null != n && null != r) return `color-mix(in srgb, ${n} 12%, ${r})`
                        };
                    try {
                        let r, l, i, s, d, c, u, p, f, g, h, m, x, b, w, v, y, C, j, M, k, A, S, q, N, P, T, E, I, F, R, O, z, U, _, B;
                        return {
                            "--color-background-primary": (r = "--app-color-background-surface", a(e, t, r, "color") ?? (l = "--color-surface-tertiary", a(e, t, l, "color"))),
                            "--color-background-secondary": (i = "--color-surface-elevated", a(e, t, i, "color")),
                            "--color-background-tertiary": (s = "--color-surface-secondary", a(e, t, s, "color")),
                            "--color-background-inverse": (d = "--color-text", a(e, t, d, "color")),
                            "--color-background-ghost": "transparent",
                            "--color-background-info": (c = "--codex-theme-accent-background-subtle", a(e, t, c, "color") ?? (u = "--color-background-info-soft", a(e, t, u, "color"))),
                            "--color-background-danger": (p = "--color-background-danger-surface", a(e, t, p, "color")),
                            "--color-background-success": n("--color-codex-git-added"),
                            "--color-background-warning": n("--color-text-warning"),
                            "--color-background-disabled": (f = "--color-background-primary-soft-active", a(e, t, f, "color")),
                            "--color-text-primary": (g = "--color-text", a(e, t, g, "color")),
                            "--color-text-secondary": (h = "--color-codex-description", a(e, t, h, "color")),
                            "--color-text-tertiary": (m = "--color-codex-description", a(e, t, m, "color")),
                            "--color-text-inverse": (x = "--color-text-inverse", a(e, t, x, "color") ?? (b = "--color-surface-tertiary", a(e, t, b, "color"))),
                            "--color-text-ghost": (w = "--color-codex-description", a(e, t, w, "color")),
                            "--color-text-info": (v = "--color-text-info", a(e, t, v, "color")),
                            "--color-text-danger": (y = "--color-text-danger", a(e, t, y, "color")),
                            "--color-text-success": (C = "--color-codex-git-added", a(e, t, C, "color")),
                            "--color-text-warning": (j = "--color-text-warning", a(e, t, j, "color")),
                            "--color-text-disabled": (M = "--color-codex-description", a(e, t, M, "color")),
                            "--color-border-primary": (k = "--color-border-primary-outline", a(e, t, k, "color")),
                            "--color-border-secondary": (A = "--color-border", a(e, t, A, "color")),
                            "--color-border-tertiary": (S = "--color-border", a(e, t, S, "color")),
                            "--color-border-inverse": (q = "--color-text", a(e, t, q, "color")),
                            "--color-border-ghost": "transparent",
                            "--color-border-info": (N = "--color-ring", a(e, t, N, "color")),
                            "--color-border-danger": (P = "--color-text-danger", a(e, t, P, "color")),
                            "--color-border-success": (T = "--color-codex-git-added", a(e, t, T, "color")),
                            "--color-border-warning": (E = "--color-text-warning", a(e, t, E, "color")),
                            "--color-border-disabled": (I = "--color-border-primary-outline", a(e, t, I, "color")),
                            "--color-ring-primary": (F = "--color-ring", a(e, t, F, "color")),
                            "--color-ring-secondary": (R = "--color-ring", a(e, t, R, "color")),
                            "--color-ring-inverse": (O = "--color-ring", a(e, t, O, "color")),
                            "--color-ring-info": (z = "--color-ring", a(e, t, z, "color")),
                            "--color-ring-danger": (U = "--color-text-danger", a(e, t, U, "color")),
                            "--color-ring-success": (_ = "--color-codex-git-added", a(e, t, _, "color")),
                            "--color-ring-warning": (B = "--color-text-warning", a(e, t, B, "color")),
                            "--font-sans": a(e, t, "--font-sans", "fontFamily"),
                            "--font-mono": a(e, t, "--font-mono", "fontFamily"),
                            "--font-weight-normal": a(e, t, "--font-ui-weight", "fontWeight"),
                            "--font-weight-medium": a(e, t, "--font-weight-medium", "fontWeight"),
                            "--font-weight-semibold": a(e, t, "--font-weight-semibold", "fontWeight"),
                            "--font-weight-bold": a(e, t, "--font-weight-bold", "fontWeight"),
                            "--font-text-xs-size": a(e, t, "--text-xs", "fontSize"),
                            "--font-text-sm-size": a(e, t, "--text-sm", "fontSize"),
                            "--font-text-md-size": a(e, t, "--text-base", "fontSize"),
                            "--font-text-lg-size": a(e, t, "--text-lg", "fontSize"),
                            "--font-heading-xs-size": a(e, t, "--text-heading-sm", "fontSize"),
                            "--font-heading-sm-size": a(e, t, "--text-heading-md", "fontSize"),
                            "--font-heading-md-size": a(e, t, "--text-heading-lg", "fontSize"),
                            "--font-heading-lg-size": a(e, t, "--text-xl", "fontSize"),
                            "--font-heading-xl-size": a(e, t, "--text-2xl", "fontSize"),
                            "--font-heading-2xl-size": a(e, t, "--text-3xl", "fontSize"),
                            "--font-heading-3xl-size": a(e, t, "--text-4xl", "fontSize"),
                            "--font-text-xs-line-height": o("--text-xs--line-height"),
                            "--font-text-sm-line-height": o("--text-sm--line-height"),
                            "--font-text-md-line-height": o("--text-base--line-height"),
                            "--font-text-lg-line-height": o("--text-lg--line-height"),
                            "--font-heading-xs-line-height": "1.33",
                            "--font-heading-sm-line-height": "1.33",
                            "--font-heading-md-line-height": "1.2",
                            "--font-heading-lg-line-height": "1.2",
                            "--font-heading-xl-line-height": "1",
                            "--font-heading-2xl-line-height": "1",
                            "--font-heading-3xl-line-height": "1",
                            "--border-radius-xs": a(e, t, "--radius-xs", "borderRadius"),
                            "--border-radius-sm": a(e, t, "--radius-sm", "borderRadius"),
                            "--border-radius-md": a(e, t, "--radius-md", "borderRadius"),
                            "--border-radius-lg": a(e, t, "--radius-lg", "borderRadius"),
                            "--border-radius-xl": a(e, t, "--radius-xl", "borderRadius"),
                            "--border-radius-full": a(e, t, "--radius-full", "borderRadius"),
                            "--border-width-regular": "1px",
                            "--shadow-hairline": a(e, t, "--shadow-hairline", "boxShadow"),
                            "--shadow-sm": a(e, t, "--shadow-sm", "boxShadow"),
                            "--shadow-md": a(e, t, "--shadow-md", "boxShadow"),
                            "--shadow-lg": a(e, t, "--shadow-lg", "boxShadow")
                        }
                    } finally {
                        t.remove()
                    }
                }()
        });

        function a(e, t, o, n) {
            let r = e.getPropertyValue(o).trim();
            if (0 === r.length) return;
            t.style[n] = `var(${o})`;
            let l = getComputedStyle(t)[n].trim();
            return 0 === l.length || l === `var(${o})` ? r : l
        }
        o.d(t, {}, {
            a: i
        })
    }),
    zxca: (function(e, t, o) {
        var n = o("o0PZ");

        function r(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Cg)(t),
                r = document.createElement(e);
            if (r instanceof HTMLIFrameElement) r.setAttribute("sandbox", "allow-scripts allow-same-origin"), r.setAttribute("referrerpolicy", "no-referrer");
            else {
                let e = document.createElement("style");
                e.textContent = "iframe { border-radius: inherit; }", r.shadowRoot?.append(e)
            }
            return r.setAttribute("partition", o), r
        }
        o.d(t, {
            a: () => r
        })
    }),
    XROL: (function(e, t, o) {
        var n = o("F6B1"),
            r = o("ASxG"),
            l = o("P93s"),
            i = o("cqPu");
        let a = "CALL",
            s = "RESOLVE",
            d = n.d,
            c = r.enum(["cold", "warming", "warm"]),
            u = r.object({
                status: r.literal(2),
                type: r.literal("environment_status")
            }).loose(),
            p = r.object({
                href: r.url({
                    protocol: /^(https|codex|codex-dev)$/
                }),
                openMode: r.enum(["tab", "popup"]).optional()
            });

        function f(e, t) {
            return {
                initId: (0, n.g)(t?.getAttribute("src") ?? void 0),
                sandboxId: e
            }
        }
        async function g(e) {
            var t, o, r, l, d;
            let u, {
                    hostApiHandlers: p,
                    assertActive: g,
                    ...w
                } = e,
                {
                    ports: j,
                    replyPort: M
                } = await
            function(e) {
                let {
                    onSkybridgeCacheState: t,
                    origin: o,
                    sandboxId: r,
                    signal: l,
                    sourceUrl: i,
                    webview: a
                } = e, s = crypto.randomUUID();
                return new Promise((e, d) => {
                    let u;
                    if (l.aborted) return void d(v());
                    let p = () => {
                            window.removeEventListener("message", f), l.removeEventListener("abort", g), null != u && clearTimeout(u)
                        },
                        f = l => {
                            let i = l.data;
                            if (i?.type !== "init") return;
                            if (a instanceof HTMLIFrameElement) {
                                let t = a.getAttribute("src") ?? void 0;
                                if (null == a.contentWindow || l.source !== a.contentWindow || l.origin !== o || (0, n.i)(t, {
                                        requireSkybridge: !0
                                    }) !== o || (0, n.g)(t) !== s) return;
                                let r = function(e) {
                                    if (!m(e)) return null;
                                    let t = n.a.filter(t => Object.hasOwn(e, t));
                                    if (!(0, n.j)(t)) return null;
                                    let o = {};
                                    for (let n of t) {
                                        let t = e[n];
                                        if (!x(t)) return null;
                                        o[n] = t
                                    }
                                    return h(o) ? o : null
                                }(i.ports);
                                if (null == r || !x(i.replyPort)) return;
                                p(), e({
                                    ports: r,
                                    replyPort: i.replyPort
                                });
                                return
                            }
                            if (i.origin !== o || i.sandboxId !== r || i.initId !== s || !Array.isArray(i.portNames)) return;
                            let d = i.portNames;
                            if (!(0, n.j)(d) || l.ports.length !== d.length + 1) return;
                            let u = function(e, t) {
                                let o = {};
                                for (let [n, r] of e.entries()) {
                                    let e = t[n];
                                    if (!x(e)) return null;
                                    o[r] = e
                                }
                                return h(o) ? o : null
                            }(d, l.ports);
                            if (null == u) return;
                            let f = l.ports[d.length];
                            if (null == f) return;
                            let g = c.safeParse(i.skybridgeCacheState);
                            g.success && t?.(g.data), p(), e({
                                ports: u,
                                replyPort: f
                            })
                        },
                        g = () => {
                            p(), d(v())
                        };
                    window.addEventListener("message", f), l.addEventListener("abort", g, {
                        once: !0
                    }), u = setTimeout(() => {
                        p(), d(y())
                    }, 2e4);
                    let b = (0, n.e)({
                        initId: s,
                        sandboxId: r,
                        sourceUrl: i
                    });
                    a.getAttribute("src") !== b && a.setAttribute("src", b)
                })
            }(w), k = f(w.sandboxId, w.webview), A = function(e, t, o) {
                function n(e, o, n, r) {
                    return function(e, t) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b,
                            {
                                port1: n,
                                port2: r
                            } = new MessageChannel;
                        return n.onmessage = async n => {
                            let [r, ...l] = n.data, [i] = n.ports;
                            if (r === a && null != i) try {
                                t?.(), i.postMessage([s, await e(...l)])
                            } catch (e) {
                                i.postMessage(["REJECT", o(e)])
                            } finally {
                                i.close()
                            }
                        }, n.start(), r
                    }(function() {
                        for (var r = arguments.length, l = Array(r), a = 0; a < r; a++) l[a] = arguments[a];
                        return (0, i.j)({
                            operation: "App request handling",
                            starting: "Handling app request"
                        }, {
                            safe: {
                                ...t,
                                method: e
                            }
                        }, async () => (n?.(), o(...l)), {
                            quiet: e.startsWith("notify") || "sendInstrument" === e || "updateWidgetState" === e
                        })
                    }, void 0, r)
                }
                return {
                    ...null == e.notifyAutofillCandidates ? {} : {
                        notifyAutofillCandidates: n("notifyAutofillCandidates", e.notifyAutofillCandidates, o)
                    },
                    ...null == e.openConversationOverlay ? {} : {
                        openConversationOverlay: n("openConversationOverlay", e.openConversationOverlay, o)
                    },
                    ...null == e.openPromptInput ? {} : {
                        openPromptInput: n("openPromptInput", e.openPromptInput, o)
                    },
                    ...null == e.setOpenInAppUrl ? {} : {
                        setOpenInAppUrl: n("setOpenInAppUrl", e.setOpenInAppUrl, o)
                    },
                    ...null == e.downloadBlob ? {} : {
                        downloadBlob: n("downloadBlob", e.downloadBlob, o)
                    },
                    ...null == e.triggerHaptic ? {} : {
                        triggerHaptic: n("triggerHaptic", e.triggerHaptic, o)
                    },
                    ...null == e.uploadFile ? {} : {
                        uploadFile: n("uploadFile", e.uploadFile, o)
                    },
                    ...null == e.getFileDownloadUrl ? {} : {
                        getFileDownloadUrl: n("getFileDownloadUrl", e.getFileDownloadUrl, o)
                    },
                    ...null == e.getFileMetadata ? {} : {
                        getFileMetadata: n("getFileMetadata", e.getFileMetadata, o)
                    },
                    ...null == e.selectFiles ? {} : {
                        selectFiles: n("selectFiles", e.selectFiles, o)
                    },
                    ...null == e.share ? {} : {
                        share: n("share", e.share, o)
                    },
                    ...null == e.notifyAppBlockMessage ? {} : {
                        notifyAppBlockMessage: n("notifyAppBlockMessage", e.notifyAppBlockMessage)
                    },
                    ...null == e.requestTargetedReply ? {} : {
                        requestTargetedReply: n("requestTargetedReply", e.requestTargetedReply, o)
                    },
                    ...null == e.requestFocusedObject ? {} : {
                        requestFocusedObject: n("requestFocusedObject", e.requestFocusedObject, o)
                    },
                    ...null == e.requestCloseFocusedObject ? {} : {
                        requestCloseFocusedObject: n("requestCloseFocusedObject", e.requestCloseFocusedObject, o)
                    },
                    ...null == e.requestModal ? {} : {
                        requestModal: n("requestModal", e.requestModal, o)
                    },
                    ...null == e.requestCheckout ? {} : {
                        requestCheckout: n("requestCheckout", e.requestCheckout, o, e => e instanceof Error ? b(e) : e)
                    },
                    ...null == e.requestLinkToConnector ? {} : {
                        requestLinkToConnector: n("requestLinkToConnector", e.requestLinkToConnector, o)
                    },
                    ...null == e.showToast ? {} : {
                        showToast: n("showToast", e.showToast, o)
                    },
                    ...null == e.notifyEscapeKey ? {} : {
                        notifyEscapeKey: n("notifyEscapeKey", e.notifyEscapeKey)
                    },
                    ...null == e.initializeMcpApp ? {} : {
                        initializeMcpApp: n("initializeMcpApp", e.initializeMcpApp)
                    },
                    callMcp: n("callMcp", e.callMcp, o),
                    callTool: n("callTool", e.callTool, o),
                    notifyBackgroundColor: n("notifyBackgroundColor", e.notifyBackgroundColor),
                    notifyEnvironmentError: n("notifyEnvironmentError", e.notifyEnvironmentError),
                    notifyIntrinsicHeight: n("notifyIntrinsicHeight", e.notifyIntrinsicHeight),
                    notifyIntrinsicWidth: n("notifyIntrinsicWidth", e.notifyIntrinsicWidth),
                    notifyNavigation: n("notifyNavigation", e.notifyNavigation),
                    notifySecurityPolicyViolation: n("notifySecurityPolicyViolation", e.notifySecurityPolicyViolation),
                    openExternal: n("openExternal", e.openExternal, o),
                    ...null == e.openPlaidLink ? {} : {
                        openPlaidLink: n("openPlaidLink", e.openPlaidLink, o)
                    },
                    ...null == e.requestConnectPlugin ? {} : {
                        requestConnectPlugin: n("requestConnectPlugin", e.requestConnectPlugin, o)
                    },
                    ...null == e.requestConnectSheet ? {} : {
                        requestConnectSheet: n("requestConnectSheet", e.requestConnectSheet, o)
                    },
                    ...null == e.requestDeclinePluginSuggestions ? {} : {
                        requestDeclinePluginSuggestions: n("requestDeclinePluginSuggestions", e.requestDeclinePluginSuggestions, o)
                    },
                    requestDisplayMode: n("requestDisplayMode", e.requestDisplayMode, o),
                    ...null == e.requestClose ? {} : {
                        requestClose: n("requestClose", e.requestClose, o)
                    },
                    ...null == e.requestOpenPlugin ? {} : {
                        requestOpenPlugin: n("requestOpenPlugin", e.requestOpenPlugin, o)
                    },
                    sendFollowUpMessage: n("sendFollowUpMessage", e.sendFollowUpMessage, o),
                    sendInstrument: n("sendInstrument", e.sendInstrument),
                    updateWidgetState: n("updateWidgetState", e.updateWidgetState, o)
                }
            }(p, k, g);
            return M.postMessage(A, Object.values(A)), M.start(), t = j, o = w.signal, r = k, u = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = C(t, n ? {} : {
                        signal: o
                    });
                return t => (0, i.j)({
                    operation: "App request",
                    starting: "Sending app request"
                }, {
                    safe: {
                        ...r,
                        method: e
                    }
                }, async () => l(t), {
                    signal: n ? void 0 : o,
                    quiet: "requestMcpAppsResourceTeardown" !== e && "navigate" !== e
                })
            }, {
                applyAutofillCandidate: null == t.applyAutofillCandidate ? void 0 : u("applyAutofillCandidate", t.applyAutofillCandidate),
                getCurrentPath: null == t.getCurrentPath ? void 0 : u("getCurrentPath", t.getCurrentPath),
                navigate: u("navigate", t.navigate),
                notifyMcpAppsHostContext: u("notifyMcpAppsHostContext", t.notifyMcpAppsHostContext),
                notifyMcpAppsMcpNotification: null == t.notifyMcpAppsMcpNotification ? null : u("notifyMcpAppsMcpNotification", t.notifyMcpAppsMcpNotification),
                notifyMcpAppsToolCancelled: u("notifyMcpAppsToolCancelled", t.notifyMcpAppsToolCancelled),
                notifyMcpAppsToolInput: u("notifyMcpAppsToolInput", t.notifyMcpAppsToolInput),
                notifyMcpAppsToolResult: u("notifyMcpAppsToolResult", t.notifyMcpAppsToolResult),
                requestMcpAppsResourceTeardown: u("requestMcpAppsResourceTeardown", t.requestMcpAppsResourceTeardown, !0),
                runWidgetCode: (l = t.runWidgetCode, d = o, l.start(), async function*(e) {
                    let {
                        port1: t,
                        port2: o
                    } = new MessageChannel, {
                        port1: n,
                        port2: r
                    } = new MessageChannel, {
                        port1: i,
                        port2: a
                    } = new MessageChannel, {
                        port1: s,
                        port2: c
                    } = new MessageChannel, u = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return C(e, {
                            ...t,
                            signal: d
                        })
                    }, p = u(t), f = u(n, {
                        timeoutMs: null
                    }), g = u(i), h = u(s);
                    l.postMessage(["GENERATOR_GENERATE", {
                        asyncDispose: o,
                        next: r,
                        return: a,
                        throw: c
                    }, e], [o, r, a, c]);
                    try {
                        let e = await f(void 0);
                        for (; !e.done;) yield e.value, e = await f(void 0);
                        return e.value
                    } catch (e) {
                        if (d.aborted) return;
                        throw await h(e).catch(() => {}), e
                    } finally {
                        d.aborted || await Promise.allSettled([p(void 0), g(void 0)]), [t, n, i, s].forEach(e => {
                            e.close()
                        })
                    }
                }),
                setAdditionalGlobals: u("setAdditionalGlobals", t.setAdditionalGlobals),
                setSafeArea: u("setSafeArea", t.setSafeArea),
                setTheme: u("setTheme", t.setTheme),
                setWidgetData: u("setWidgetData", t.setWidgetData),
                setWidgetView: u("setWidgetView", t.setWidgetView)
            }
        }

        function h(e) {
            return d.every(t => null != e[t])
        }

        function m(e) {
            return "object" == typeof e && null != e
        }

        function x(e) {
            return !!m(e) && "function" == typeof e.postMessage && "function" == typeof e.start
        }

        function b(e) {
            return e instanceof Error ? {
                ...w(e),
                message: e.message || "MCP sandbox host call failed.",
                name: e.name
            } : null != e && "object" == typeof e && "message" in e && "string" == typeof e.message && e.message.length > 0 ? {
                ...w(e),
                message: e.message
            } : {
                message: "MCP sandbox host call failed."
            }
        }

        function w(e) {
            let t = r.union([r.object({
                code: r.enum(["update_model_context_persistence_failed", "model_context_conflict"]),
                retryable: r.boolean()
            }), l.c]).safeParse("data" in e ? e.data : void 0).data;
            return {
                ...null == t ? {} : {
                    data: t
                },
                ..."code" in e && "number" == typeof e.code ? {
                    code: e.code
                } : {},
                ..."name" in e && "string" == typeof e.name ? {
                    name: e.name
                } : {}
            }
        }

        function v() {
            let e = Error("MCP sandbox RPC aborted.");
            return e.name = "AbortError", e
        }

        function y() {
            let e = Error("MCP sandbox RPC timed out.");
            return e.name = "TimeoutError", e
        }

        function C(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.start(), o => new Promise((n, r) => {
                let l, i = t.signal,
                    d = void 0 === t.timeoutMs ? 3e4 : t.timeoutMs;
                if (i?.aborted) return void r(v());
                let {
                    port1: c,
                    port2: u
                } = new MessageChannel, p = !1, f = (e, t) => {
                    p || (p = !0, null != l && clearTimeout(l), i?.removeEventListener("abort", g), c.onmessage = null, c.close(), e(t))
                }, g = () => {
                    f(r, v())
                };
                c.onmessage = e => {
                    let t = e.data;
                    t[0] === s ? f(n, t[1]) : f(r, t[1])
                }, i?.addEventListener("abort", g, {
                    once: !0
                }), null != d && (l = setTimeout(() => {
                    f(r, y())
                }, d));
                try {
                    e.postMessage([a, o], [u])
                } catch (e) {
                    f(r, e)
                }
            })
        }
        o.d(t, {
            a: () => f,
            b: () => g
        }, {
            c: p,
            d: u
        })
    }),
    Ztsm: (function(e, t, o) {
        var n = o("SKgO"),
            r = o("ASxG");
        let l = r.object({
            context: n.c.optional(),
            prompt: r.string().trim().min(1),
            title: r.string().trim().min(1).max(250).optional()
        }).strip();

        function i(e) {
            let t = l.safeParse(e);
            if (!t.success) throw Object.assign(Error("Invalid follow-up message"), {
                code: -32602
            });
            return t.data
        }

        function a(e) {
            let {
                context: t,
                prompt: o
            } = e;
            return null == t ? o : `${o}

Current widget context (JSON):
${(0,n.b)(t)}`
        }
        o.d(t, {
            a: () => a,
            b: () => n.a,
            c: () => i,
            d: () => n.b
        })
    }),
    vYmP: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            l = o("on57"),
            i = o("PAiv"),
            a = o("KIh5");

        function s(e) {
            let t, o, s, d, c, u, p, f, g, h, m, x, b, w, v, y, C = (0, r.c)(39);
            C[0] !== e ? ({
                ref: u,
                ariaLabel: o,
                icon: s,
                isActive: f,
                isTerminalInline: d,
                label: c,
                supportingCountLabel: p,
                testId: h,
                variant: g,
                ...t
            } = e, C[0] = e, C[1] = t, C[2] = o, C[3] = s, C[4] = d, C[5] = c, C[6] = u, C[7] = p, C[8] = f, C[9] = g, C[10] = h) : (t = C[1], o = C[2], s = C[3], d = C[4], c = C[5], u = C[6], p = C[7], f = C[8], g = C[9], h = C[10]);
            let j = void 0 !== f && f,
                M = "file" === (void 0 === g ? "default" : g),
                k = "disabled" in t && t.disabled,
                A = k ? "cursor-default" : "group cursor-interaction",
                S = !M && !k && "hover:bg-secondary-soft-hover hover:text-default!",
                q = M && a.a.palette,
                N = M && a.a.filePill;
            C[11] !== j || C[12] !== M || C[13] !== A || C[14] !== S || C[15] !== q || C[16] !== N ? (m = (0, l.b)("no-underline!", A, S, q, N, M ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, l.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", j ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), C[11] = j, C[12] = M, C[13] = A, C[14] = S, C[15] = q, C[16] = N, C[17] = m) : m = C[17];
            let P = m;
            C[18] !== M || C[19] !== p ? (x = null == p ? null : (0, n.jsx)("span", {
                className: (0, l.b)("text-inherit", M ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                "aria-hidden": "true",
                children: p
            }), C[18] = M, C[19] = p, C[20] = x) : x = C[20];
            let T = x;
            C[21] !== s || C[22] !== M || C[23] !== c || C[24] !== T ? (b = M ? (0, n.jsxs)(n.Fragment, {
                children: [s, (0, n.jsx)("span", {
                    className: "min-w-0 flex-auto truncate",
                    children: c
                }), T]
            }) : (0, n.jsxs)("span", {
                className: "relative start-0 bottom-0 flex h-full w-full items-center",
                children: [(0, n.jsxs)("span", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [s, (0, n.jsx)("span", {
                        className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                        children: c
                    })]
                }), T]
            }), C[21] = s, C[22] = M, C[23] = c, C[24] = T, C[25] = b) : b = C[25];
            let E = b,
                I = M && "relative",
                F = M && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
            return C[26] !== I || C[27] !== F ? (w = (0, l.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", I, F), C[26] = I, C[27] = F, C[28] = w) : w = C[28], C[29] !== t || C[30] !== o || C[31] !== P || C[32] !== E || C[33] !== h ? (v = "href" in t ? (0, n.jsx)(i.a, {
                className: P,
                href: t.href,
                initiator: "markdown_link_click",
                "data-testid": h,
                requiresConfirmation: t.requiresConfirmation,
                showHoverActions: t.showHoverActions,
                tooltipContent: t.tooltipContent,
                "aria-label": o,
                onActivate: t.onActivate,
                onClick: t.onClick,
                onAuxClick: t.onAuxClick,
                onUnmodifiedClick: t.onUnmodifiedClick,
                children: E
            }) : (0, n.jsx)("button", {
                className: P,
                "aria-label": o,
                "data-testid": h,
                disabled: t.disabled,
                type: "button",
                onClick: t.onClick,
                children: E
            }), C[29] = t, C[30] = o, C[31] = P, C[32] = E, C[33] = h, C[34] = v) : v = C[34], C[35] !== u || C[36] !== w || C[37] !== v ? (y = (0, n.jsx)("span", {
                ref: u,
                className: w,
                children: v
            }), C[35] = u, C[36] = w, C[37] = v, C[38] = y) : y = C[38], y
        }
        o.d(t, {
            a: () => s
        })
    }),
    tbqK: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            l = o("iTtm"),
            i = o("Wf1j"),
            a = o("ygO2"),
            s = o("bf6R"),
            d = o("CqQF"),
            c = o("ALWK"),
            u = o("tSEg");

        function p(e) {
            let t, o, p, f, g, h = (0, r.c)(13),
                {
                    disabled: m,
                    mcpAppId: x
                } = e,
                b = (0, l.y)(u.a),
                w = (0, i.a)(),
                v = (0, l.x)(c.u, x);
            if (!v.availableDisplayModes?.includes("fullscreen")) return null;
            h[0] !== w ? (t = w.formatMessage({
                id: "codex.mcpTool.openAppInTab",
                defaultMessage: "Open app in tab",
                description: "Opens an MCP app in a tab from its tool call row"
            }), h[0] = w, h[1] = t) : t = h[1];
            let y = t;
            return h[2] !== x || h[3] !== b ? (o = () => (0, c.x)(b, x, "fullscreen"), h[2] = x, h[3] = b, h[4] = o) : o = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(s.N, {}), h[5] = p) : p = h[5], h[6] !== m || h[7] !== y || h[8] !== o ? (f = (0, n.jsx)(a.a, {
                className: "relative",
                "aria-label": y,
                color: "ghost",
                disabled: m,
                size: "icon",
                onClick: o,
                children: p
            }), h[6] = m, h[7] = y, h[8] = o, h[9] = f) : f = h[9], h[10] !== y || h[11] !== f ? (g = (0, n.jsx)(d.a, {
                tooltipContent: y,
                children: f
            }), h[10] = y, h[11] = f, h[12] = g) : g = h[12], g
        }
        o.d(t, {
            a: () => p
        })
    }),
    taUf: (function(e, t, o) {
        var n = o("ASxG");
        let r = n.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            l = n.object({
                connectedPluginIds: n.array(n.string()).optional(),
                declinedPluginIds: n.array(n.string()).optional()
            }).catchall(n.json()),
            i = n.object({
                pluginId: n.string().min(1),
                suggestionId: r.optional()
            }),
            a = n.object({
                type: n.literal("event"),
                label: n.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: n.object({
                    remote_plugin_id: n.string().min(1).max(256),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: r
                })
            }),
            s = a.extend({
                label: n.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: a.shape.payload.extend({
                    suggestion_id: r.optional(),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10)
                })
            }),
            d = n.discriminatedUnion("label", [a, s]),
            c = n.object({
                kind: n.literal("plugin_suggestions"),
                version: n.literal(1),
                suggestions: n.array(n.object({
                    plugin_id: n.string().min(1),
                    display_name: n.string().min(1)
                }))
            }),
            u = n.object({
                "openai/plugin_suggestion_id": r.optional()
            });
        o.d(t, {}, {
            a: i,
            b: d,
            c: u,
            d: l,
            e: c
        })
    }),
    ePaQ: (function(e, t, o) {
        o.d(t, {
            a: () => h
        });
        var n = o("ABep"),
            r = o("QosV"),
            l = o("kSHG"),
            i = o("on57"),
            a = o("zd8w"),
            s = o("KxMp"),
            d = o("bf6R"),
            c = o("CqQF"),
            u = o("zSQm"),
            p = o("WAdu");

        function f(e) {
            let t, o, l, i, a, s, d, c = (0, r.c)(21),
                {
                    title: u,
                    subtitle: p,
                    body: f,
                    branding: g,
                    followUp: h,
                    actions: m
                } = e;
            c[0] !== f ? (t = f?.includes("\n"), c[0] = f, c[1] = t) : t = c[1];
            let x = t;
            return c[2] !== g ? (o = (0, n.jsx)("div", {
                className: "branding-xlBboz",
                children: g
            }), c[2] = g, c[3] = o) : o = c[3], c[4] !== u ? (l = (0, n.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), c[4] = u, c[5] = l) : l = c[5], c[6] !== p ? (i = null != p && (0, n.jsx)("div", {
                className: "subtitle-gArrij",
                children: p
            }), c[6] = p, c[7] = i) : i = c[7], c[8] !== f || c[9] !== x || c[10] !== u ? (a = null != f && (0, n.jsx)("div", {
                className: x ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: x ? 0 : void 0,
                children: f
            }), c[8] = f, c[9] = x, c[10] = u, c[11] = a) : a = c[11], c[12] !== h ? (s = null != h && (0, n.jsx)("div", {
                className: "followUp-otVo0x",
                children: h
            }), c[12] = h, c[13] = s) : s = c[13], c[14] !== m || c[15] !== o || c[16] !== l || c[17] !== i || c[18] !== a || c[19] !== s ? (d = (0, n.jsxs)("div", {
                className: "content-cuuiWn",
                children: [o, l, i, a, m, s]
            }), c[14] = m, c[15] = o, c[16] = l, c[17] = i, c[18] = a, c[19] = s, c[20] = d) : d = c[20], d
        }
        var g = o("Nfif");

        function h(e) {
            let t, o, l, i = (0, r.c)(22),
                {
                    children: a,
                    disabled: s,
                    metadata: d,
                    sourceAppId: u,
                    followUp: p,
                    keepOpen: f,
                    openOnClick: g,
                    closeOnTriggerClick: h,
                    presentation: x
                } = e,
                b = void 0 === h || h;
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                file: {
                    offset: 10,
                    variant: "fileCitation"
                },
                default: {
                    offset: 6,
                    variant: "rich"
                }
            }, i[0] = t) : t = i[0];
            let {
                offset: w,
                variant: v
            } = t[x ?? "default"], y = !!f || void 0, C = "file" === x ? d.title : void 0, j = null != d.hoverCard, M = null != d.hoverCard, k = null != u, A = null == d.hoverCard ? void 0 : 150, S = null == d.hoverCard ? void 0 : "start", q = null == d.hoverCard ? void 0 : "bottom", N = null == d.hoverCard ? void 0 : w, P = null == d.hoverCard ? "tooltip" : v;
            return i[1] !== p || i[2] !== d || i[3] !== x || i[4] !== u ? (o = null == d.hoverCard ? d.title : (0, n.jsx)(m, {
                metadata: d,
                sourceAppId: u,
                followUp: p,
                presentation: x
            }), i[1] = p, i[2] = d, i[3] = x, i[4] = u, i[5] = o) : o = i[5], i[6] !== a || i[7] !== b || i[8] !== s || i[9] !== g || i[10] !== q || i[11] !== N || i[12] !== P || i[13] !== o || i[14] !== y || i[15] !== C || i[16] !== j || i[17] !== M || i[18] !== k || i[19] !== A || i[20] !== S ? (l = (0, n.jsx)(c.a, {
                open: y,
                openOnClick: g,
                closeOnTriggerClick: b,
                disabled: s,
                dialogLabel: C,
                openOnFocusWithin: j,
                selectable: M,
                keyboardNavigation: k,
                delayDuration: A,
                align: S,
                side: q,
                sideOffset: N,
                variant: P,
                tooltipContent: o,
                children: a
            }), i[6] = a, i[7] = b, i[8] = s, i[9] = g, i[10] = q, i[11] = N, i[12] = P, i[13] = o, i[14] = y, i[15] = C, i[16] = j, i[17] = M, i[18] = k, i[19] = A, i[20] = S, i[21] = l) : l = i[21], l
        }

        function m(e) {
            let t, o, c, h, m, x, b, w, v, y = (0, r.c)(54),
                {
                    metadata: C,
                    sourceAppId: j,
                    followUp: M,
                    presentation: k
                } = e,
                A = (0, a.useContext)(p.a);
            if (y[0] !== C.icons?.[0]) {
                let {
                    data: e
                } = l.u.safeParse(C.icons?.[0]), o = e?.src;
                t = null == o ? void 0 : (0, u.b)(o), y[0] = C.icons?.[0], y[1] = t
            } else t = y[1];
            let S = t;
            y[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(d.ui, {}), y[2] = o) : o = y[2];
            let q = o;
            if ("restricted" !== A) {
                if (null != C.url) {
                    let e;
                    y[3] !== C.url ? (e = (0, n.jsx)(s.a, {
                        href: C.url,
                        className: "size-4"
                    }), y[3] = C.url, y[4] = e) : e = y[4], q = e
                } else if (null != S) {
                    let e, t, o = null == j && "dark:brightness-0 dark:invert";
                    y[5] !== o ? (e = (0, i.b)("size-4 shrink-0 rounded-sm object-contain", o), y[5] = o, y[6] = e) : e = y[6], y[7] !== S || y[8] !== e ? (t = (0, n.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: S
                    }), y[7] = S, y[8] = e, y[9] = t) : t = y[9], q = t
                }
            }
            if ("file" === k && null != j) {
                let e, t, o = C.hoverCard?.title ?? C.title,
                    r = C.hoverCard?.subtitle,
                    l = C.hoverCard?.body;
                return y[10] !== j ? (e = (0, n.jsx)(g.a, {
                    appId: j,
                    showName: !0,
                    presentation: "file"
                }), y[10] = j, y[11] = e) : e = y[11], y[12] !== M || y[13] !== o || y[14] !== r || y[15] !== l || y[16] !== e ? (t = (0, n.jsx)(f, {
                    title: o,
                    subtitle: r,
                    body: l,
                    branding: e,
                    followUp: M
                }), y[12] = M, y[13] = o, y[14] = r, y[15] = l, y[16] = e, y[17] = t) : t = y[17], t
            }
            if (null != j) {
                let e, t, o, r, l, i;
                y[18] !== j ? (e = (0, n.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, n.jsx)(g.a, {
                        appId: j,
                        showName: !0
                    })
                }), y[18] = j, y[19] = e) : e = y[19];
                let a = C.hoverCard?.title ?? C.title;
                return y[20] !== a ? (t = (0, n.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: a
                }), y[20] = a, y[21] = t) : t = y[21], y[22] !== C.hoverCard ? (o = C.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: C.hoverCard.subtitle
                }), y[22] = C.hoverCard, y[23] = o) : o = y[23], y[24] !== C.hoverCard || y[25] !== C.title ? (r = C.hoverCard?.body != null && (0, n.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": C.title,
                    tabIndex: 0,
                    children: C.hoverCard.body
                }), y[24] = C.hoverCard, y[25] = C.title, y[26] = r) : r = y[26], y[27] !== M ? (l = null != M && (0, n.jsx)("div", {
                    children: M
                }), y[27] = M, y[28] = l) : l = y[28], y[29] !== e || y[30] !== t || y[31] !== o || y[32] !== r || y[33] !== l ? (i = (0, n.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, o, r, l]
                }), y[29] = e, y[30] = t, y[31] = o, y[32] = r, y[33] = l, y[34] = i) : i = y[34], i
            }
            let N = C.hoverCard?.title ?? C.title;
            return y[35] !== N ? (c = (0, n.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: N
            }), y[35] = N, y[36] = c) : c = y[36], y[37] !== C.hoverCard ? (h = C.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: C.hoverCard.subtitle
            }), y[37] = C.hoverCard, y[38] = h) : h = y[38], y[39] !== c || y[40] !== h ? (m = (0, n.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [c, h]
            }), y[39] = c, y[40] = h, y[41] = m) : m = y[41], y[42] !== C.hoverCard || y[43] !== C.title ? (x = C.hoverCard?.body != null && (0, n.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": C.title,
                tabIndex: 0,
                children: C.hoverCard.body
            }), y[42] = C.hoverCard, y[43] = C.title, y[44] = x) : x = y[44], y[45] !== C.title ? (b = (0, n.jsx)("div", {
                className: "min-w-0 truncate",
                children: C.title
            }), y[45] = C.title, y[46] = b) : b = y[46], y[47] !== q || y[48] !== b ? (w = (0, n.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [q, b]
            }), y[47] = q, y[48] = b, y[49] = w) : w = y[49], y[50] !== m || y[51] !== x || y[52] !== w ? (v = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [m, x, w]
            }), y[50] = m, y[51] = x, y[52] = w, y[53] = v) : v = y[53], v
        }
    }),
    JAYD: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("o0PZ"),
            l = o("OiCI"),
            i = o("cLdu"),
            a = o("OWtl");
        let s = (0, n.d)(a.a, (e, t) => {
            let {
                get: o
            } = t, n = o(l.b);
            if (null == n) return !1;
            let a = o(i.h, {
                accountId: n,
                hostId: r.Ub,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !a.isPending && !a.isError && a.data?.some(t => {
                let {
                    appIds: o,
                    plugin: n
                } = t;
                return o?.includes(e) && n.installed && n.enabled && "AVAILABLE" === n.availability && null == n.disabledReason
            }) === !0
        });
        o.d(t, {}, {
            a: s
        })
    }),
    Nfif: (function(e, t, o) {
        o.d(t, {
            a: () => x
        });
        var n = o("ABep"),
            r = o("QosV"),
            l = o("on57"),
            i = o("o0PZ"),
            a = o("zd8w"),
            s = o("oyxz"),
            d = o("BQbE"),
            c = o("bf6R"),
            u = o("E6P3"),
            p = o("zSQm"),
            f = o("WAdu"),
            g = o("a6Zv"),
            h = e => (0, n.jsxs)("svg", {
                width: 12,
                height: 12,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 2.25293C16.3032 2.25306 17.8145 3.76317 17.8145 5.62598C17.8144 7.48871 16.3032 8.99889 14.4404 8.99902C13.7322 8.99896 13.0749 8.78025 12.5322 8.40723L8.39844 12.541C8.74099 13.0688 8.94043 13.698 8.94043 14.374C8.94035 16.2368 7.42929 17.7471 5.56641 17.7471C3.70368 17.7469 2.19344 16.2367 2.19336 14.374C2.19336 12.5112 3.70363 11.0012 5.56641 11.001C6.27216 11.001 6.92702 11.2183 7.46875 11.5889L11.6055 7.45215C11.2656 6.92567 11.0674 6.2992 11.0674 5.62598C11.0674 3.7632 12.5776 2.25311 14.4404 2.25293ZM5.56641 12.3311C4.43794 12.3312 3.52344 13.246 3.52344 14.374C3.52352 15.502 4.43799 16.4168 5.56641 16.417C6.69497 16.417 7.61027 15.5021 7.61035 14.374C7.61035 13.2459 6.69502 12.3311 5.56641 12.3311ZM14.4404 3.58301C13.312 3.58318 12.3975 4.49796 12.3975 5.62598C12.3975 6.75393 13.312 7.66877 14.4404 7.66895C15.5689 7.66881 16.4843 6.75395 16.4844 5.62598C16.4844 4.49793 15.5689 3.58314 14.4404 3.58301Z",
                    fill: "currentColor"
                }), (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 11.001C16.3032 11.0011 17.8145 12.5112 17.8145 14.374C17.8144 16.2368 16.3032 17.7469 14.4404 17.7471C12.5777 17.7469 11.0675 16.2367 11.0674 14.374C11.0674 12.5112 12.5776 11.0012 14.4404 11.001ZM14.4404 12.3311C13.312 12.3312 12.3975 13.246 12.3975 14.374C12.3975 15.502 13.312 16.4168 14.4404 16.417C15.5689 16.4169 16.4843 15.502 16.4844 14.374C16.4844 13.246 15.5689 12.3312 14.4404 12.3311Z",
                    fill: "currentColor"
                }), (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.56641 2.25293C7.42934 2.25293 8.94043 3.76309 8.94043 5.62598C8.94035 7.48879 7.42929 8.99902 5.56641 8.99902C3.70368 8.99885 2.19344 7.48869 2.19336 5.62598C2.19336 3.7632 3.70363 2.25311 5.56641 2.25293ZM5.56641 3.58301C4.43794 3.58318 3.52344 4.49796 3.52344 5.62598C3.52352 6.75393 4.43799 7.66877 5.56641 7.66895C6.69497 7.66895 7.61027 6.75403 7.61035 5.62598C7.61035 4.49785 6.69502 3.58301 5.56641 3.58301Z",
                    fill: "currentColor"
                })]
            }),
            m = o("KIh5");

        function x(e) {
            let t, o, x, b, w, v, y, C = (0, r.c)(21),
                {
                    appId: j,
                    showName: M,
                    presentation: k
                } = e,
                A = void 0 !== M && M,
                S = (0, a.useContext)(f.a);
            C[0] !== j ? (t = [j], C[0] = j, C[1] = t) : t = C[1];
            let q = "restricted" !== S;
            C[2] !== t || C[3] !== q ? (o = {
                appIds: t,
                hostId: i.Ub,
                enabled: q
            }, C[2] = t, C[3] = q, C[4] = o) : o = C[4];
            let {
                data: N
            } = (0, d.b)(o), P = N?.find(e => e.id === j), T = (0, g.a)() ? P?.iconUrlDark ?? P?.iconUrl : P?.iconUrl, E = null == T ? void 0 : (0, p.b)(T);
            C[5] !== k ? (x = "file" === k ? (0, n.jsx)("span", {
                className: (0, l.b)(m.a.connectorIcon, m.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, n.jsx)(h, {
                    "aria-hidden": "true"
                })
            }) : (0, n.jsx)(c.ui, {}), C[5] = k, C[6] = x) : x = C[6];
            let I = x;
            C[7] !== I || C[8] !== S || C[9] !== k || C[10] !== E ? (b = "restricted" !== S && null != E ? (0, n.jsx)(u.a, {
                className: (0, l.b)("shrink-0", "file" === k ? [m.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: E,
                fallback: I
            }, E) : I, C[7] = I, C[8] = S, C[9] = k, C[10] = E, C[11] = b) : b = C[11];
            let F = b;
            return C[12] !== F || C[13] !== k ? (w = "file" === k ? (0, n.jsx)("span", {
                className: "size-4 shrink-0",
                children: F
            }) : F, C[12] = F, C[13] = k, C[14] = w) : w = C[14], C[15] !== P?.name || C[16] !== A ? (v = A && (P?.name ?? (0, n.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), C[15] = P?.name, C[16] = A, C[17] = v) : v = C[17], C[18] !== w || C[19] !== v ? (y = (0, n.jsxs)(n.Fragment, {
                children: [w, v]
            }), C[18] = w, C[19] = v, C[20] = y) : y = C[20], y
        }
    })
};