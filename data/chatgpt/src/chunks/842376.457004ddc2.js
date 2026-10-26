export const __rspack_esm_id = 842376;
export const __rspack_esm_ids = [842376];
export const __webpack_modules__ = {
    kpMu: (function(e, t, a) {
        var l = a("ABep");
        a("zd8w"), t.a = e => (0, l.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
                d: "M12.1338 5.94433C12.3919 5.77382 12.7434 5.80202 12.9707 6.02929C13.1979 6.25656 13.2261 6.60807 13.0556 6.8662L12.9707 6.9707L8.47067 11.4707C8.21097 11.7304 7.78896 11.7304 7.52926 11.4707L3.02926 6.9707L2.9443 6.8662C2.77379 6.60807 2.80199 6.25656 3.02926 6.02929C3.25653 5.80202 3.60804 5.77382 3.86617 5.94433L3.97067 6.02929L7.99996 10.0586L12.0293 6.02929L12.1338 5.94433Z"
            })
        })
    }),
    QRIH: (function(e, t, a) {
        a.d(t, {
            a: () => x,
            b: () => g
        });
        var l = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            s = a("zd8w"),
            r = a("Wf1j"),
            o = a("oyxz"),
            c = a("sAQ3"),
            d = a("ygO2"),
            m = a("JNtf"),
            u = a("mUDD"),
            p = a("bf6R"),
            f = e => (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 32,
                height: 32,
                fill: "none",
                viewBox: "0 0 24 24",
                ...e,
                children: [(0, l.jsx)("path", {
                    fill: "#4D6FE6",
                    d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
                }), (0, l.jsx)("path", {
                    fill: "#86A0F2",
                    d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
                })]
            }),
            h = e => (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
                ...e,
                children: [(0, l.jsx)("path", {
                    fill: "#4D6FE6",
                    d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
                }), (0, l.jsx)("path", {
                    fill: "#86A0F2",
                    d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
                })]
            });

        function x(e) {
            let t, a, x, b, v, y, j, w, N, k, C, S, F, M, A, E, L, P, I, z, T, D, O = (0, n.c)(67),
                {
                    presentation: _,
                    message: q,
                    disabled: R,
                    isSubmitting: U,
                    completed: K,
                    standalone: B,
                    onOpen: V,
                    onOpenInThread: W,
                    onConfirm: H,
                    onCancel: Q
                } = e,
                Z = void 0 !== K && K,
                G = void 0 !== B && B,
                J = (0, r.a)(),
                [Y, X] = (0, s.useState)(G);
            O[0] !== G ? (t = (0, i.b)("flex flex-wrap items-center gap-2", {
                "justify-center": G
            }), O[0] = G, O[1] = t) : t = O[1];
            let $ = "shield" === _.icon ? "actionChipWithIcon" : "actionChip",
                ee = R && !Z;
            O[2] !== Z || O[3] !== V || O[4] !== W ? (a = () => {
                null == W || Z ? (V?.(), X(!0)) : W()
            }, O[2] = Z, O[3] = V, O[4] = W, O[5] = a) : a = O[5], O[6] !== _.icon ? (x = "shield" === _.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, l.jsx)(h, {
                    "aria-hidden": "true"
                })
            }), O[6] = _.icon, O[7] = x) : x = O[7], O[8] !== _.triggerLabel ? (b = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: _.triggerLabel
            }), O[8] = _.triggerLabel, O[9] = b) : b = O[9], O[10] !== Z || O[11] !== J ? (v = Z && (0, l.jsx)(p.Tb, {
                "aria-label": J.formatMessage({
                    id: "mcpConfirmation.completed",
                    defaultMessage: "Completed",
                    description: "Accessible label for a custom-rule request that was acted upon, without asserting that the rule change succeeded"
                })
            }), O[10] = Z, O[11] = J, O[12] = v) : v = O[12], O[13] !== U || O[14] !== $ || O[15] !== ee || O[16] !== a || O[17] !== x || O[18] !== b || O[19] !== v ? (y = (0, l.jsxs)(c.a, {
                color: "conversationAccentSubtle",
                size: $,
                radius: "messageBubble",
                type: "button",
                className: "max-w-full",
                disabled: ee,
                loading: U,
                "aria-haspopup": "dialog",
                onClick: a,
                children: [x, b, v]
            }), O[13] = U, O[14] = $, O[15] = ee, O[16] = a, O[17] = x, O[18] = b, O[19] = v, O[20] = y) : y = O[20], O[21] !== y || O[22] !== t ? (j = (0, l.jsx)("div", {
                "data-mcp-confirmation-chip": !0,
                className: t,
                children: y
            }), O[21] = y, O[22] = t, O[23] = j) : j = O[23], O[24] === Symbol.for("react.memo_cache_sentinel") ? (w = {
                "aria-describedby": void 0
            }, O[24] = w) : w = O[24], O[25] !== Z || O[26] !== R || O[27] !== H ? (N = e => {
                e.preventDefault(), R || Z || (H(), X(!1))
            }, O[25] = Z, O[26] = R, O[27] = H, O[28] = N) : N = O[28], O[29] !== _.icon ? (k = "shield" === _.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, l.jsx)(f, {
                    "aria-hidden": "true"
                })
            }), O[29] = _.icon, O[30] = k) : k = O[30], O[31] !== _.title ? (C = (0, l.jsx)(m.e, {
                variant: "confirmation",
                className: "text-center",
                children: _.title
            }), O[31] = _.title, O[32] = C) : C = O[32], O[33] !== k || O[34] !== C ? (S = (0, l.jsxs)("div", {
                className: "flex flex-col items-center gap-3",
                children: [k, C]
            }), O[33] = k, O[34] = C, O[35] = S) : S = O[35], O[36] !== q || O[37] !== _ ? (F = (0, l.jsx)(g, {
                presentation: _,
                message: q
            }), O[36] = q, O[37] = _, O[38] = F) : F = O[38];
            let et = _.destructive ? "dangerSolid" : "primary",
                ea = R || Z;
            return O[39] !== _.confirmLabel ? (M = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: _.confirmLabel
            }), O[39] = _.confirmLabel, O[40] = M) : M = O[40], O[41] !== U || O[42] !== et || O[43] !== ea || O[44] !== M ? (A = (0, l.jsx)(u.c, {
                children: (0, l.jsx)(d.a, {
                    color: et,
                    size: "modalPrimary",
                    radius: "full",
                    type: "submit",
                    disabled: ea,
                    loading: U,
                    children: M
                })
            }), O[41] = U, O[42] = et, O[43] = ea, O[44] = M, O[45] = A) : A = O[45], O[46] !== Z || O[47] !== R || O[48] !== Q ? (E = () => {
                R || Z || Q?.(), X(!1)
            }, O[46] = Z, O[47] = R, O[48] = Q, O[49] = E) : E = O[49], O[50] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, l.jsx)(o.a, {
                id: "mcpConfirmation.cancel",
                defaultMessage: "Cancel",
                description: "Cancel a proposed change or close its completed preview"
            }), O[50] = L) : L = O[50], O[51] !== E ? (P = (0, l.jsx)(u.c, {
                children: (0, l.jsx)(d.a, {
                    color: "secondary",
                    size: "modalPrimary",
                    radius: "full",
                    type: "button",
                    onClick: E,
                    children: L
                })
            }), O[51] = E, O[52] = P) : P = O[52], O[53] !== A || O[54] !== P ? (I = (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [A, P]
            }), O[53] = A, O[54] = P, O[55] = I) : I = O[55], O[56] !== N || O[57] !== S || O[58] !== F || O[59] !== I ? (z = (0, l.jsxs)(u.b, {
                as: "form",
                size: "viewport",
                variant: "confirmation",
                onSubmit: N,
                children: [S, F, I]
            }), O[56] = N, O[57] = S, O[58] = F, O[59] = I, O[60] = z) : z = O[60], O[61] !== Y || O[62] !== z ? (T = (0, l.jsx)(m.b, {
                open: Y,
                onOpenChange: X,
                widthHint: 480,
                variant: "confirmation",
                closeButtonSize: "large",
                contentProps: w,
                children: z
            }), O[61] = Y, O[62] = z, O[63] = T) : T = O[63], O[64] !== j || O[65] !== T ? (D = (0, l.jsxs)(l.Fragment, {
                children: [j, T]
            }), O[64] = j, O[65] = T, O[66] = D) : D = O[66], D
        }

        function g(e) {
            let t, a = (0, n.c)(10),
                {
                    message: i,
                    presentation: s
                } = e;
            if (s?.sections != null) {
                let e, t;
                return a[0] !== s.sections ? (e = s.sections.map(v), a[0] = s.sections, a[1] = e) : e = a[1], a[2] !== e ? (t = (0, l.jsx)("div", {
                    className: "flex flex-col gap-5 select-text",
                    children: e
                }), a[2] = e, a[3] = t) : t = a[3], t
            }
            if (s?.fields != null) {
                let e, t;
                return a[4] !== s.fields ? (e = s.fields.map(b), a[4] = s.fields, a[5] = e) : e = a[5], a[6] !== e ? (t = (0, l.jsx)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text",
                    children: e
                }), a[6] = e, a[7] = t) : t = a[7], t
            }
            return a[8] !== i ? (t = (0, l.jsx)("div", {
                className: "text-sm break-words whitespace-pre-wrap text-default select-text",
                children: i
            }), a[8] = i, a[9] = t) : t = a[9], t
        }

        function b(e, t) {
            let {
                label: a,
                value: n
            } = e;
            return (0, l.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, l.jsx)("dt", {
                    className: "text-secondary",
                    children: a
                }), (0, l.jsx)("dd", {
                    className: "whitespace-pre-wrap",
                    children: n
                })]
            }, t)
        }

        function v(e, t) {
            let {
                title: a,
                body: n,
                caption: i
            } = e;
            return (0, l.jsxs)("section", {
                className: "flex flex-col gap-2",
                children: [a && (0, l.jsx)("h3", {
                    className: "text-base font-medium text-secondary",
                    children: a
                }), (0, l.jsxs)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 break-words",
                    children: [(0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, l.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: n.label
                        }), (0, l.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: n.value
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1 border-t border-default pt-4",
                        children: [(0, l.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: i.label
                        }), (0, l.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: i.value
                        })]
                    })]
                })]
            }, t)
        }
    }),
    nxd2: (function(e, t, a) {
        var l = a("ASxG");
        let n = l.object({
            version: l.literal(1),
            field: l.string().min(1),
            presentation: l.object({
                title: l.string().trim().min(1).max(120),
                triggerLabel: l.string().trim().min(1).max(80),
                confirmLabel: l.string().trim().min(1).max(80),
                icon: l.literal("shield").optional().catch(void 0),
                destructive: l.boolean().optional().catch(void 0),
                fields: l.array(l.object({
                    label: l.string().trim().min(1).max(120),
                    value: l.string().min(1).max(1e4).refine(e => e.trim().length > 0)
                })).min(1).max(20).optional().catch(void 0),
                sections: l.array(l.object({
                    title: l.string().trim().min(1).max(120).optional(),
                    bodyField: l.number().int().min(0).max(19),
                    captionField: l.number().int().min(0).max(19)
                })).min(1).max(10).optional().catch(void 0)
            }).transform(e => {
                let {
                    sections: t,
                    ...a
                } = e, {
                    fields: l
                } = a, n = t?.flatMap(e => {
                    let {
                        bodyField: t,
                        captionField: a
                    } = e;
                    return [t, a]
                }), i = null != l && n?.length === l.length && new Set(n).size === l.length && n.every(e => e < l.length);
                return {
                    ...a,
                    sections: i ? t?.map(e => {
                        let {
                            title: t,
                            bodyField: a,
                            captionField: n
                        } = e;
                        return {
                            title: t,
                            body: l[a],
                            caption: l[n]
                        }
                    }) : void 0
                }
            }).optional().catch(void 0)
        });

        function i(e) {
            let t = n.safeParse(e.confirmation);
            if (!t.success || !e.message.trim()) return null;
            let {
                field: a
            } = t.data;
            return 1 !== Object.keys(e.schema.properties).length || e.schema.properties[a]?.type !== "boolean" || e.schema.required?.length !== 1 || e.schema.required[0] !== a ? null : t.data
        }
        a.d(t, {
            a: () => i
        })
    }),
    vPGU: (function(e, t, a) {
        var l = a("ABep"),
            n = a("QosV"),
            i = a("iTtm"),
            s = a("I3F6"),
            r = a("zd8w"),
            o = a("oyxz"),
            c = a("Dgwo"),
            d = a("WNfT"),
            m = a("KRWX"),
            u = a("ygO2"),
            p = a("OWtl");

        function f(e) {
            let t, a, f, x, g, b, v, y, j, w = (0, n.c)(26),
                {
                    conversationId: N,
                    hostId: k,
                    requestId: C,
                    serverName: S,
                    onReply: F,
                    onStandaloneResponseChange: M,
                    isSubmitting: A
                } = e,
                E = void 0 !== A && A,
                L = (0, i.y)(p.a),
                P = (0, m.b)(),
                [I, z] = (0, r.useState)(!1),
                T = (0, r.useRef)(!1);
            w[0] !== N || w[1] !== k || w[2] !== E || w[3] !== F || w[4] !== M || w[5] !== C || w[6] !== L ? (t = e => {
                if (E || T.current) return;
                let t = () => null != F ? F(e) : (0, c.b)(L, k).replyWithMcpServerElicitationResponse(N, C, (0, s.b)(e));
                null == M ? t().catch(h) : (T.current = !0, z(!0), M("submitting"), Promise.resolve().then(t).then(() => M("decline" === e ? "declined" : "canceled"), () => M("failed")).finally(() => {
                    T.current = !1, z(!1)
                }))
            }, w[0] = N, w[1] = k, w[2] = E, w[3] = F, w[4] = M, w[5] = C, w[6] = L, w[7] = t) : t = w[7];
            let D = t;
            w[8] !== D ? (a = e => {
                "Escape" === e.key && (e.preventDefault(), D("cancel"))
            }, w[8] = D, w[9] = a) : a = w[9], w[10] !== S ? (f = (0, l.jsxs)("div", {
                className: "text-sm font-medium",
                children: [(0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.a, {
                        id: "composer.openAIForm.invalidInput.serverTitle",
                        defaultMessage: "{serverName} requested a form that cannot be displayed",
                        description: "Title identifying the server that requested a form the browser cannot display",
                        values: {
                            serverName: S
                        }
                    })
                }), null]
            }), w[10] = S, w[11] = f) : f = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, l.jsxs)("div", {
                className: "text-size-chat-sm text-codex-description",
                children: [(0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.a, {
                        id: "composer.openAIForm.invalidInput.dismissInstruction",
                        defaultMessage: "Dismiss the request to close it",
                        description: "Instruction for closing a form the browser cannot display"
                    })
                }), null]
            }), w[12] = x) : x = w[12], w[13] !== f ? (g = (0, l.jsxs)("div", {
                className: "flex flex-col gap-1 p-4",
                children: [f, x]
            }), w[13] = f, w[14] = g) : g = w[14];
            let O = E || I;
            return w[15] !== D ? (b = () => D("cancel"), w[15] = D, w[16] = b) : b = w[16], w[17] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, l.jsx)(o.a, {
                id: "composer.openAIForm.unsupported.dismiss",
                defaultMessage: "Dismiss",
                description: "Action for dismissing an unsupported OpenAI form request"
            }), w[17] = v) : v = w[17], w[18] !== P || w[19] !== O || w[20] !== b ? (y = (0, l.jsxs)("div", {
                className: "flex justify-end gap-2 px-4 py-3",
                children: [(0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(u.a, {
                        autoFocus: P,
                        color: "primary",
                        size: "composer",
                        disabled: O,
                        onClick: b,
                        children: v
                    })
                }), null]
            }), w[18] = P, w[19] = O, w[20] = b, w[21] = y) : y = w[21], w[22] !== y || w[23] !== a || w[24] !== g ? (j = (0, l.jsx)(d.a, {
                children: (0, l.jsxs)("div", {
                    className: "flex flex-col",
                    role: "presentation",
                    onKeyDown: a,
                    children: [g, y]
                })
            }), w[22] = y, w[23] = a, w[24] = g, w[25] = j) : j = w[25], j
        }

        function h() {}
        a.d(t, {
            a: () => f
        })
    }),
    JEWd: (function(e, t, a) {
        var l = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            s = a("zd8w"),
            r = a("ygO2"),
            o = a("IxWh"),
            c = a("HOLv"),
            d = a("bIvi"),
            m = a("XyFm"),
            u = a("ASyM");
        let p = {
            form: {
                color: "secondarySurface",
                size: "actionSm"
            },
            gallery: {
                color: "outlineSurface",
                size: "dialog"
            },
            compact: {
                color: "ghost",
                size: "compact"
            }
        };

        function f(e) {
            let t, a, f, h, x, g, b, v, y, j, w, N = (0, n.c)(38),
                {
                    ariaInvalid: k,
                    ariaLabel: C,
                    backLabel: S,
                    children: F,
                    forwardLabel: M,
                    header: A,
                    layout: E,
                    role: L,
                    shouldUseReducedMotion: P
                } = e,
                I = void 0 === E ? "form" : E,
                z = void 0 === L ? "group" : L;
            N[0] !== F ? (t = s.Children.count(F), N[0] = F, N[1] = t) : t = N[1];
            let T = t,
                D = (0, s.useRef)(null),
                [O, _] = (0, s.useState)("ltr"),
                [q, R] = (0, s.useState)(!1),
                [U, K] = (0, s.useState)(!1);
            N[2] === Symbol.for("react.memo_cache_sentinel") ? (a = e => {
                let t = "rtl" === getComputedStyle(e).direction ? "rtl" : "ltr";
                _(t);
                let {
                    maximum: a,
                    minimum: l
                } = (0, o.a)(e, t);
                "rtl" === t ? (R(e.scrollLeft < a - 1), K(e.scrollLeft > l + 1)) : (R(e.scrollLeft > l + 1), K(e.scrollLeft < a - 1))
            }, N[2] = a) : a = N[2];
            let B = (0, d.a)(a),
                V = e => {
                    if (D.current = e, null == e || 0 === T || (B(e), "u" < typeof ResizeObserver)) return;
                    let t = new ResizeObserver(() => B(e));
                    return t.observe(e), null != e.firstElementChild && t.observe(e.firstElementChild), null != e.lastElementChild && t.observe(e.lastElementChild), () => {
                        t.disconnect(), D.current = null
                    }
                },
                W = "form" === I && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                H = "gallery" === I && "gap-2";
            N[3] !== W || N[4] !== H ? (f = (0, i.b)("flex items-center", W, H), N[3] = W, N[4] = H, N[5] = f) : f = N[5];
            let Q = [-1, 1].map(e => {
                let t = -1 === e ? q : U,
                    a = -1 === e ? S : M;
                return (0, l.jsx)(r.a, {
                    className: (0, i.b)("pointer-events-auto", "form" === I && !t && "invisible"),
                    "aria-label": a,
                    ...p[I],
                    disabled: !t,
                    onClick: () => {
                        let t;
                        null != (t = D.current) && t.scrollTo({
                            left: (0, o.b)(t, e, "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"),
                            behavior: P ? "instant" : "smooth"
                        })
                    },
                    radius: "compact" === I ? void 0 : "full",
                    title: a,
                    uniform: !0,
                    children: (0, l.jsx)(c.a, {
                        className: e === ("rtl" === O ? 1 : -1) ? "rotate-180" : void 0,
                        asset: "gallery" === I ? m.a : u.a
                    })
                }, e)
            });
            N[6] !== f || N[7] !== Q ? (h = (0, l.jsx)("div", {
                className: f,
                children: Q
            }), N[6] = f, N[7] = Q, N[8] = h) : h = N[8];
            let Z = h,
                G = "gallery" === I && "gap-4",
                J = "compact" === I && "gap-2",
                Y = "form" === I && "gap-1.5";
            N[9] !== G || N[10] !== J || N[11] !== Y ? (x = (0, i.b)("flex min-w-0 flex-col", G, J, Y), N[9] = G, N[10] = J, N[11] = Y, N[12] = x) : x = N[12], N[13] !== A || N[14] !== I || N[15] !== Z ? (g = null != A || "form" !== I ? (0, l.jsxs)("div", {
                className: (0, i.b)("flex min-w-0 items-center", "form" === I && "gap-1 px-4 py-1.5", "compact" === I && "gap-3", "gallery" === I && "min-h-9 gap-3"),
                children: [(0, l.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: A
                }), "form" !== I ? Z : null]
            }) : null, N[13] = A, N[14] = I, N[15] = Z, N[16] = g) : g = N[16];
            let X = "form" === I ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 overscroll-x-contain py-1.5",
                $ = "gallery" === I && "gap-3",
                ee = "compact" === I && "gap-2";
            N[17] !== X || N[18] !== $ || N[19] !== ee ? (b = (0, i.b)("hide-scrollbar flex overflow-x-auto", X, $, ee), N[17] = X, N[18] = $, N[19] = ee, N[20] = b) : b = N[20];
            let et = k || void 0;
            N[21] !== B ? (v = e => B(e.currentTarget), N[21] = B, N[22] = v) : v = N[22], N[23] !== C || N[24] !== F || N[25] !== z || N[26] !== V || N[27] !== b || N[28] !== et || N[29] !== v ? (y = (0, l.jsx)("div", {
                ref: V,
                className: b,
                "data-horizontal-scroll": !0,
                role: z,
                "aria-invalid": et,
                "aria-label": C,
                onScroll: v,
                children: F
            }), N[23] = C, N[24] = F, N[25] = z, N[26] = V, N[27] = b, N[28] = et, N[29] = v, N[30] = y) : y = N[30];
            let ea = "form" === I ? Z : null;
            return N[31] !== y || N[32] !== ea ? (j = (0, l.jsxs)("div", {
                className: "relative min-w-0",
                children: [y, ea]
            }), N[31] = y, N[32] = ea, N[33] = j) : j = N[33], N[34] !== x || N[35] !== g || N[36] !== j ? (w = (0, l.jsxs)("div", {
                className: x,
                children: [g, j]
            }), N[34] = x, N[35] = g, N[36] = j, N[37] = w) : w = N[37], w
        }
        a.d(t, {
            a: () => f
        })
    }),
    K1S5: (function(e, t, a) {
        a.d(t, {
            a: () => eX
        });
        var l = a("ABep"),
            n = a("QosV"),
            i = a("MnTr"),
            s = a("on57"),
            r = a("iTtm"),
            o = a("o0PZ"),
            c = a("I3F6"),
            d = a("zd8w"),
            m = a("Wf1j"),
            u = a("Telb"),
            p = a("Dgwo"),
            f = a("WNfT"),
            h = a("KRWX"),
            x = a("NySd"),
            g = a("M7Ra"),
            b = a("SGsN"),
            v = a("oyxz"),
            y = a("ygO2"),
            j = a("jDEJ");

        function w(e) {
            let t, a, i, s, r, o, c = (0, n.c)(14),
                {
                    disabled: d,
                    isSubmitting: m,
                    hotkeysEnabled: u,
                    onDecline: p
                } = e;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.jsx)(v.a, {
                id: "composer.mcpConfirmation.button.decline",
                defaultMessage: "Decline",
                description: "Short secondary button in an app's confirmation request. Rejects the described action without submitting form values. The other button is Accept."
            }), c[0] = t) : t = c[0], c[1] !== m || c[2] !== p ? (a = (0, l.jsx)(y.a, {
                color: "ghost",
                size: "composer",
                disabled: m,
                type: "button",
                onClick: p,
                children: t
            }), c[1] = m, c[2] = p, c[3] = a) : a = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, l.jsx)(v.a, {
                id: "composer.mcpConfirmation.button.accept",
                defaultMessage: "Accept",
                description: "Short primary button in an app's confirmation request. Explicitly confirms the action described in the request. The other button is Decline."
            }), c[4] = i) : i = c[4], c[5] !== u ? (s = u && (0, l.jsx)(f.b, {
                variant: "primary",
                children: (0, j.b)("Enter")
            }), c[5] = u, c[6] = s) : s = c[6], c[7] !== d || c[8] !== m || c[9] !== s ? (r = (0, l.jsxs)(y.a, {
                color: "primary",
                size: "composer",
                type: "submit",
                disabled: d,
                loading: m,
                children: [i, s]
            }), c[7] = d, c[8] = m, c[9] = s, c[10] = r) : r = c[10], c[11] !== a || c[12] !== r ? (o = (0, l.jsxs)("div", {
                className: "flex shrink-0 items-center justify-end gap-2 px-4 py-3",
                children: [a, r]
            }), c[11] = a, c[12] = r, c[13] = o) : o = c[13], o
        }
        var N = a("QRIH"),
            k = a("nxd2"),
            C = a("OWtl"),
            S = a("tSEg"),
            F = a("B85l"),
            M = a("LVsP"),
            A = a("pHQ8"),
            E = a("AqHC"),
            L = a("q475"),
            P = a("K0rn"),
            I = a("IRP0");

        function z(e) {
            let t = (0, A.c)(e.schema);
            return {
                kind: e.kind,
                customDrafts: {},
                values: (0, A.a)(t.flatMap(e => {
                    let {
                        schema: t,
                        ...a
                    } = e;
                    return (0, L.c)(t) || (0, P.b)(t) ? [] : [{
                        ...a,
                        schema: t
                    }]
                })),
                fileOptions: Object.fromEntries(t.flatMap(e => {
                    let {
                        name: t,
                        schema: a
                    } = e;
                    return (0, L.c)(a) ? [
                        [t, (0, L.a)(a)]
                    ] : []
                }))
            }
        }

        function T(e, t) {
            return t?.selected && t.text.length > 0 && Array.isArray(e) ? [...e, t.text] : e
        }
        var D = a("tO3J");

        function O(e, t) {
            return !e.defaultPrevented && !e.nativeEvent.isComposing && 229 !== e.nativeEvent.keyCode && !!(0, D.b)(e.nativeEvent, "Enter") && (e.preventDefault(), e.repeat || t(), !0)
        }
        var _ = a("vPGU"),
            q = a("g2Gi"),
            R = a("bf6R"),
            U = a("CqQF"),
            K = a("bqtn"),
            B = a("kpMu");

        function V(e) {
            let t, a = (0, n.c)(4),
                {
                    options: i,
                    disabled: s,
                    onAccept: r
                } = e;
            return a[0] !== s || a[1] !== r || a[2] !== i ? (t = (0, l.jsx)("div", {
                className: "me-auto max-w-full min-w-0",
                children: 1 === i.length ? (0, l.jsx)(U.a, {
                    tooltipContent: (0, l.jsxs)(l.Fragment, {
                        children: [i[0].title, i[0].description && (0, l.jsx)("p", {
                            children: i[0].description
                        })]
                    }),
                    children: (0, l.jsx)(y.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        className: "max-w-full",
                        disabled: s,
                        "aria-description": i[0].description,
                        onClick: () => r(i[0].const),
                        children: (0, l.jsx)("span", {
                            className: "min-w-0 truncate",
                            children: i[0].title
                        })
                    })
                }) : (0, l.jsx)(K.a, {
                    align: "start",
                    disabled: s,
                    triggerButton: (0, l.jsxs)(y.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        disabled: s,
                        children: [(0, l.jsx)(v.a, {
                            id: "composer.mcpFormElicitation.moreAcceptActions",
                            defaultMessage: "More actions",
                            description: "Opens additional actions that accept and submit the form"
                        }), (0, l.jsx)(B.a, {
                            className: "size-3"
                        })]
                    }),
                    children: i.map(e => (0, l.jsx)(K.c.Item, {
                        disabled: s,
                        allowWrap: !0,
                        subTextAllowWrap: !0,
                        SubText: null == e.description ? null : (0, l.jsx)(l.Fragment, {
                            children: e.description
                        }),
                        onSelect: () => r(e.const),
                        children: e.title
                    }, e.const))
                })
            }), a[0] = s, a[1] = r, a[2] = i, a[3] = t) : t = a[3], t
        }

        function W(e) {
            let t, a, i, r, o, c, d, m = (0, n.c)(43),
                {
                    autoResolution: u,
                    disabled: p,
                    isSubmitting: h,
                    submitDisabled: x,
                    acceptOptions: g,
                    primaryActionRef: b,
                    fieldCount: w,
                    hotkeysEnabled: N,
                    isStandardForm: k,
                    showSubmit: C,
                    showHeader: S,
                    onCancel: F,
                    onDecline: M,
                    onDismissLegacyImagePicker: A,
                    onViewAll: E
                } = e,
                L = void 0 !== h && h,
                P = g?.required === !0 && g.options.length > 1,
                I = g?.required ? g.options[0] : void 0;
            m[0] !== g?.options || m[1] !== I ? (t = g?.options.slice(+(null != I)) ?? [], m[0] = g?.options, m[1] = I, m[2] = t) : t = m[2];
            let z = t;
            if (null != A) {
                let e, t = u?.deadlineMs ?? "no-deadline",
                    n = u?.deadlineMs,
                    i = u?.nowMs;
                m[3] !== L || m[4] !== A || m[5] !== t || m[6] !== n || m[7] !== i ? (e = (0, l.jsx)(q.a, {
                    disabled: L,
                    deadlineMs: n,
                    nowMs: i,
                    variant: "button",
                    onDismiss: A
                }, t), m[3] = L, m[4] = A, m[5] = t, m[6] = n, m[7] = i, m[8] = e) : e = m[8], a = e
            } else {
                let e, t;
                m[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.deny",
                    defaultMessage: "Deny",
                    description: "Declines the form without submitting its values"
                }), m[9] = e) : e = m[9], m[10] !== p || m[11] !== M ? (t = (0, l.jsx)(y.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: M,
                    children: e
                }), m[10] = p, m[11] = M, m[12] = t) : t = m[12], a = t
            }
            return m[13] !== g || m[14] !== p || m[15] !== E ? (i = null != E ? (0, l.jsx)("div", {
                className: null == g ? "me-auto" : void 0,
                children: (0, l.jsxs)(y.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: E,
                    children: [(0, l.jsx)(R.Jh, {}), (0, l.jsx)(v.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })
            }) : null, m[13] = g, m[14] = p, m[15] = E, m[16] = i) : i = m[16], m[17] !== L || m[18] !== F || m[19] !== A || m[20] !== S ? (r = !S && null == A && (0, l.jsx)(y.a, {
                color: "ghost",
                size: "composer",
                disabled: L,
                onClick: F,
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.cancel",
                    defaultMessage: "Cancel",
                    description: "Cancel an MCP form when it has no header dismiss button"
                })
            }), m[17] = L, m[18] = F, m[19] = A, m[20] = S, m[21] = r) : r = m[21], m[22] !== g || m[23] !== z || m[24] !== x ? (o = null != g && z.length > 0 && (0, l.jsx)(V, {
                options: z,
                disabled: x,
                onAccept: g.onSelect
            }), m[22] = g, m[23] = z, m[24] = x, m[25] = o) : o = m[25], m[26] !== g || m[27] !== w || m[28] !== N || m[29] !== k || m[30] !== L || m[31] !== b || m[32] !== I || m[33] !== P || m[34] !== C || m[35] !== x ? (c = (null != g || C) && (0, l.jsx)(U.a, {
                tooltipContent: I && (0, l.jsxs)(l.Fragment, {
                    children: [I.title, I.description && (0, l.jsx)("p", {
                        children: I.description
                    })]
                }),
                children: (0, l.jsxs)(y.a, {
                    autoFocus: N && 0 === w,
                    className: "max-w-full",
                    color: "primary",
                    size: "composer",
                    type: P ? "button" : "submit",
                    ref: b,
                    onClick: null != I && null != g && P ? () => g.onSelect(I.const) : void 0,
                    "aria-description": I?.description,
                    disabled: x,
                    loading: L,
                    children: [(0, l.jsx)("span", {
                        className: (0, s.b)("min-w-0 truncate", k && "text-sm font-medium"),
                        children: I?.title ?? (0, l.jsx)(v.a, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept",
                            description: "Accepts the form and submits its answers"
                        })
                    }), N && !P && (0, l.jsx)(f.b, {
                        variant: "primary",
                        children: (0, j.b)("Enter")
                    })]
                })
            }), m[26] = g, m[27] = w, m[28] = N, m[29] = k, m[30] = L, m[31] = b, m[32] = I, m[33] = P, m[34] = C, m[35] = x, m[36] = c) : c = m[36], m[37] !== a || m[38] !== i || m[39] !== r || m[40] !== o || m[41] !== c ? (d = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
                children: [i, r, o, a, c]
            }), m[37] = a, m[38] = i, m[39] = r, m[40] = o, m[41] = c, m[42] = d) : d = m[42], d
        }
        var H = a("Wyro"),
            Q = a.n(H),
            Z = a("Qr2V"),
            G = a("zLIa"),
            J = a("E6P3"),
            Y = a("rq5Z"),
            X = a("ue8o"),
            $ = a("zSQm"),
            ee = a.p + "assets/icon.6b02567b2b.png",
            et = a.p + "assets/icon.4e392f38ad.png",
            ea = a.p + "assets/icon.9b2a0253b8.png";
        let el = {
            "application/msword": ee,
            "application/vnd.google-apps.document": ee,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ee,
            "text/markdown": ee,
            "text/plain": ee,
            "application/vnd.google-apps.presentation": et,
            "application/vnd.ms-powerpoint": et,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": et,
            "application/vnd.google-apps.spreadsheet": ea,
            "application/vnd.ms-excel": ea,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ea,
            "text/csv": ea,
            "text/tab-separated-values": ea
        };

        function en(e) {
            let t, a, i, r, o, c = (0, n.c)(22),
                {
                    layout: m,
                    src: u,
                    mimeType: p
                } = e,
                f = void 0 === m ? "thumbnail" : m,
                [h, x] = (0, d.useState)(),
                g = null != u && URL.canParse(u) && "https:" === new URL(u).protocol ? u : void 0,
                {
                    safeUrl: b
                } = (0, X.c)(g, null != g);
            c[0] !== b || c[1] !== u ? (t = null != u && (0, $.c)(u) ? u : b, c[0] = b, c[1] = u, c[2] = t) : t = c[2];
            let v = t,
                y = p?.split(";")[0]?.trim().toLowerCase(),
                j = el[y ?? ""],
                w = "icon" === f ? "size-5" : "size-10";
            c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(R.Mc, {}), c[3] = a) : a = c[3];
            let N = a;
            if (null != j) {
                let e, t;
                c[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(R.Mc, {}), c[4] = e) : e = c[4], c[5] !== w || c[6] !== j ? (t = (0, l.jsx)(J.a, {
                    className: w,
                    alt: "",
                    fallback: e,
                    src: j
                }), c[5] = w, c[6] = j, c[7] = t) : t = c[7], N = t
            } else if ("text/html" === y || "application/xhtml+xml" === y) {
                let e;
                c[8] !== w ? (e = (0, l.jsx)(Y.a, {
                    className: w
                }), c[8] = w, c[9] = e) : e = c[9], N = e
            }
            let k = "card" === f || "card-icon" === f,
                C = "icon" === f,
                S = "thumbnail" === f;
            return c[10] !== k || c[11] !== C || c[12] !== S ? (i = (0, s.b)("flex items-center justify-center overflow-hidden", {
                "h-full w-full": k,
                "size-5 shrink-0 rounded-xs": C,
                "size-10 shrink-0 rounded-md bg-surface": S
            }), c[10] = k, c[11] = C, c[12] = S, c[13] = i) : i = c[13], c[14] !== h || c[15] !== N || c[16] !== v || c[17] !== f ? (r = null == v || h === v ? N : (0, l.jsx)("img", {
                alt: "",
                className: (0, s.b)("card-icon" === f ? "size-10" : "h-full w-full", "icon" === f || "card-icon" === f ? "object-contain" : "object-scale-down", "card" === f && "block"),
                decoding: "async",
                draggable: !1,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: v,
                onError: () => x(v)
            }), c[14] = h, c[15] = N, c[16] = v, c[17] = f, c[18] = r) : r = c[18], c[19] !== i || c[20] !== r ? (o = (0, l.jsx)("span", {
                className: i,
                children: r
            }), c[19] = i, c[20] = r, c[21] = o) : o = c[21], o
        }

        function ei(e) {
            let t, a, i, s, r, o, c, m, u = (0, n.c)(61),
                {
                    autoFocus: p,
                    submitOnEnter: f,
                    showOptionNumbers: h,
                    customOption: x,
                    invalid: g,
                    multiple: b,
                    options: v,
                    value: y,
                    onChange: j
                } = e,
                w = void 0 === f || f,
                N = (0, d.useId)(),
                k = (void 0 === h || h) && v.length > 1,
                C = b ? Z.a : Z.b,
                S = "string" == typeof y ? y : void 0;
            u[0] !== y ? (t = Array.isArray(y) ? y : [], u[0] = y, u[1] = t) : t = u[1];
            let F = t;
            u[2] !== v ? (a = v.some(es), u[2] = v, u[3] = a) : a = u[3];
            let M = a;
            u[4] !== b || u[5] !== v || u[6] !== S ? (i = b ? 0 : Math.max(0, v.findIndex(e => e.const === S)), u[4] = b, u[5] = v, u[6] = S, u[7] = i) : i = u[7];
            let A = i;
            u[8] !== x || u[9] !== b || u[10] !== j || u[11] !== v || u[12] !== w ? (s = e => {
                let t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) || !t.matches('input[type="radio"], button[role="checkbox"]') || O(e, () => {
                        b || !w || t instanceof HTMLInputElement && !t.checked ? t.click() : t.form?.requestSubmit()
                    }) || e.defaultPrevented || e.nativeEvent.isComposing || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || "ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let a = Array.from(e.currentTarget.querySelectorAll('input[type="radio"], button[role="checkbox"]')),
                    l = (a.indexOf(t) + ("ArrowDown" === e.key ? 1 : -1) + a.length) % a.length,
                    n = a[l];
                if (null != n && (e.preventDefault(), n.focus(), !b)) {
                    let e = v[l];
                    null != e ? j(e.const) : x?.onSelect(!0)
                }
            }, u[8] = x, u[9] = b, u[10] = j, u[11] = v, u[12] = w, u[13] = s) : s = u[13];
            let E = s;
            if (u[14] !== C || u[15] !== p || u[16] !== x?.selected || u[17] !== A || u[18] !== M || u[19] !== N || u[20] !== g || u[21] !== b || u[22] !== j || u[23] !== v || u[24] !== S || u[25] !== F || u[26] !== k) {
                let e;
                u[28] !== C || u[29] !== p || u[30] !== x?.selected || u[31] !== A || u[32] !== M || u[33] !== N || u[34] !== g || u[35] !== b || u[36] !== j || u[37] !== S || u[38] !== F || u[39] !== k ? (e = (e, t) => {
                    let a = F.indexOf(e.const),
                        n = b ? -1 !== a : !x?.selected && S === e.const;
                    return (0, l.jsxs)(C, {
                        autoFocus: p && !x?.selected && t === A,
                        checked: n,
                        invalid: g,
                        name: N,
                        type: b ? "checkbox" : "radio",
                        value: e.const,
                        onChange: () => {
                            b ? j(n ? F.filter((e, t) => t !== a) : [...F, e.const]) : j(e.const)
                        },
                        children: [!b && (0, l.jsx)(Z.c, {
                            selected: n,
                            showNumber: k,
                            variant: "number",
                            index: t + 1,
                            verticalAlignment: "start"
                        }), M ? (0, l.jsx)(en, {
                            src: e["x-openai-thumbnail"]?.src
                        }) : null, (0, l.jsxs)("span", {
                            className: "flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 @max-5xl/request-card:flex-col @max-5xl/request-card:items-stretch",
                            children: [(0, l.jsx)("span", {
                                className: "min-w-0 text-sm font-medium wrap-anywhere",
                                children: e.title
                            }), null == e.description ? null : (0, l.jsx)("span", {
                                className: "min-w-0 text-sm wrap-anywhere text-codex-description",
                                children: e.description
                            })]
                        })]
                    }, e.const)
                }, u[28] = C, u[29] = p, u[30] = x?.selected, u[31] = A, u[32] = M, u[33] = N, u[34] = g, u[35] = b, u[36] = j, u[37] = S, u[38] = F, u[39] = k, u[40] = e) : e = u[40], r = v.map(e), u[14] = C, u[15] = p, u[16] = x?.selected, u[17] = A, u[18] = M, u[19] = N, u[20] = g, u[21] = b, u[22] = j, u[23] = v, u[24] = S, u[25] = F, u[26] = k, u[27] = r
            } else r = u[27];
            return u[41] !== x || u[42] !== g || u[43] !== b || u[44] !== j || u[45] !== v || u[46] !== F ? (o = null != x && b ? F.map((e, t) => v.some(t => t.const === e) && F.indexOf(e) === t ? null : (0, l.jsx)(Z.a, {
                autoFocus: !1,
                checked: !0,
                invalid: g,
                onChange: () => j(F.filter((e, a) => a !== t)),
                children: (0, l.jsx)("span", {
                    className: "min-w-0 text-sm font-medium wrap-anywhere",
                    children: v.find(t => t.const === e)?.title ?? e
                })
            }, t)) : null, u[41] = x, u[42] = g, u[43] = b, u[44] = j, u[45] = v, u[46] = F, u[47] = o) : o = u[47], u[48] !== C || u[49] !== p || u[50] !== x || u[51] !== N || u[52] !== g || u[53] !== b || u[54] !== v.length ? (c = null != x ? (0, l.jsx)("div", {
                "data-mcp-form-custom-choice": !0,
                children: (0, l.jsx)(C, {
                    accessibilityLabel: x.label,
                    autoFocus: p && (0 === v.length || x.selected),
                    checked: x.selected,
                    invalid: g,
                    name: N,
                    type: b ? "checkbox" : "radio",
                    onChange: () => x.onSelect(!b || !x.selected),
                    editor: x.editor,
                    children: !b && (0, l.jsx)(Z.c, {
                        selected: x.selected,
                        variant: "custom"
                    })
                })
            }) : null, u[48] = C, u[49] = p, u[50] = x, u[51] = N, u[52] = g, u[53] = b, u[54] = v.length, u[55] = c) : c = u[55], u[56] !== E || u[57] !== r || u[58] !== o || u[59] !== c ? (m = (0, l.jsxs)("div", {
                className: "flex flex-col gap-1",
                "data-mcp-form-choices": !0,
                role: "group",
                onKeyDownCapture: E,
                children: [r, o, c]
            }), u[56] = E, u[57] = r, u[58] = o, u[59] = c, u[60] = m) : m = u[60], m
        }

        function es(e) {
            return null != e["x-openai-thumbnail"]
        }

        function er(e) {
            let t, a, i, s, r, o, c = (0, n.c)(29),
                {
                    schema: d,
                    value: m
                } = e;
            if ("array" === d.type && Array.isArray(m) && m.length >= Number(d.minItems ?? 0) && (null == d.maxItems || m.length <= Number(d.maxItems)) && "type" in d.items && "string" === d.items.type && !("x-openai-input" in d.items)) {
                let e;
                return c[0] !== d.items ? (e = (0, l.jsx)(er, {
                    schema: d.items
                }), c[0] = d.items, c[1] = e) : e = c[1], e
            }
            let u = "string" !== d.type || "x-openai-input" in d ? null : d,
                p = "number" === d.type || "integer" === d.type ? d : null,
                f = p?.minimum,
                h = p?.maximum;
            "array" === d.type ? (f = null == d.minItems || 0 === Number(d.minItems) ? void 0 : Number(d.minItems), h = null == d.maxItems ? void 0 : Number(d.maxItems)) : null != u && ("minLength" in u && (f = u.minLength || void 0), "maxLength" in u && (h = u.maxLength));
            let x = "none";
            null != f && null != h ? x = f === h ? "exact" : "both" : null != f ? x = "minimum" : null != h && (x = "maximum");
            let g = null != u && "format" in u ? u.format : void 0;
            return c[2] !== x || c[3] !== h || c[4] !== f || c[5] !== d.type ? (t = "array" === d.type && "none" !== x ? (0, l.jsx)(v.a, {
                id: "composer.mcpFormElicitation.selectionCount",
                defaultMessage: "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                description: "Number of choices or files allowed in an MCP form; bounds specifies an exact count, a range, a minimum, or a maximum",
                values: {
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[2] = x, c[3] = h, c[4] = f, c[5] = d.type, c[6] = t) : t = c[6], c[7] !== x || c[8] !== h || c[9] !== f || c[10] !== u ? (a = null != u && "none" !== x ? (0, l.jsx)("div", {
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.textLength",
                    defaultMessage: "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                    description: "Text length allowed in an MCP form; bounds specifies an exact length, a range, a minimum, or a maximum",
                    values: {
                        bounds: x,
                        minimum: f,
                        maximum: h
                    }
                })
            }) : null, c[7] = x, c[8] = h, c[9] = f, c[10] = u, c[11] = a) : a = c[11], c[12] !== x || c[13] !== h || c[14] !== f || c[15] !== p ? (i = null != p ? (0, l.jsx)(v.a, {
                id: "composer.mcpFormElicitation.numberRange",
                defaultMessage: "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                description: "Numeric value allowed in an MCP form; kind distinguishes whole numbers from decimals, and bounds specifies an exact value, a range, a minimum, a maximum, or no limit",
                values: {
                    kind: p.type,
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[12] = x, c[13] = h, c[14] = f, c[15] = p, c[16] = i) : i = c[16], c[17] !== g ? (s = null != g ? (0, l.jsx)("div", {
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.requiredFormat",
                    defaultMessage: "Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}",
                    description: "Expected format for an MCP form answer; format is email, uri, date, or datetime. The datetime example shows the accepted ISO timestamp syntax",
                    values: {
                        format: "date-time" === g ? "datetime" : g
                    }
                })
            }) : null, c[17] = g, c[18] = s) : s = c[18], c[19] !== x || c[20] !== g || c[21] !== p ? (r = "none" === x && null == p && null == g ? (0, l.jsx)(v.a, {
                id: "composer.mcpFormElicitation.invalidField",
                defaultMessage: "Check this answer and try again",
                description: "Validation message shown when an MCP form answer is missing or does not meet its requirements"
            }) : null, c[19] = x, c[20] = g, c[21] = p, c[22] = r) : r = c[22], c[23] !== t || c[24] !== a || c[25] !== i || c[26] !== s || c[27] !== r ? (o = (0, l.jsxs)("div", {
                role: "alert",
                children: [t, a, i, s, r]
            }), c[23] = t, c[24] = a, c[25] = i, c[26] = s, c[27] = r, c[28] = o) : o = c[28], o
        }

        function eo(e) {
            let t, a = (0, n.c)(15),
                {
                    id: i,
                    autoFocus: r,
                    disabled: o,
                    invalid: c,
                    label: d,
                    placeholder: m,
                    variant: u,
                    format: p,
                    maxLength: f,
                    value: h,
                    onChange: x,
                    onKeyDown: g,
                    onFocus: b
                } = e,
                v = void 0 !== o && o,
                y = void 0 === u ? "default" : u,
                j = (f ?? 0) >= 160,
                w = "choice" === y ? "block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary" : "w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger";
            return a[0] !== r || a[1] !== v || a[2] !== w || a[3] !== p || a[4] !== i || a[5] !== c || a[6] !== j || a[7] !== d || a[8] !== x || a[9] !== b || a[10] !== g || a[11] !== m || a[12] !== h || a[13] !== y ? (t = null == p ? (0, l.jsx)("textarea", {
                id: i,
                ref: r ? ec : void 0,
                autoFocus: r,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: m,
                className: (0, s.b)(w, "[field-sizing:content] max-h-48 resize-none overflow-y-auto", "default" === y && "py-2", j ? "min-h-20" : "default" === y && "min-h-8"),
                rows: j ? 3 : 1,
                value: h,
                onChange: e => x(e.currentTarget.value),
                onKeyDown: g,
                onFocus: b
            }) : (0, l.jsx)("input", {
                id: i,
                autoFocus: r,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: m,
                className: (0, s.b)(w, "default" === y && "h-8"),
                type: function(e) {
                    switch (e) {
                        case "date":
                            return "date";
                        case "date-time":
                        case void 0:
                            return "text";
                        case "email":
                            return "email";
                        case "uri":
                            return "url"
                    }
                }(p),
                value: h,
                onChange: e => x(e.currentTarget.value),
                onKeyDown: g,
                onFocus: b
            }), a[0] = r, a[1] = v, a[2] = w, a[3] = p, a[4] = i, a[5] = c, a[6] = j, a[7] = d, a[8] = x, a[9] = b, a[10] = g, a[11] = m, a[12] = h, a[13] = y, a[14] = t) : t = a[14], t
        }

        function ec(e) {
            null != e && e.setSelectionRange(e.value.length, e.value.length)
        }

        function ed(e) {
            let t, a, i, s, r, o, c, d, u, p, f, h, x, g = (0, n.c)(62),
                {
                    autoFocus: b,
                    showOptionNumbers: v,
                    disabled: y,
                    label: j,
                    format: w,
                    maxLength: N,
                    invalid: k,
                    multiple: C,
                    options: S,
                    value: F,
                    draft: M,
                    onDraftChange: A,
                    onChange: E
                } = e,
                L = void 0 === v || v,
                P = (0, m.a)(),
                I = C || "string" != typeof F || S.some(e => e.const === F) ? "" : F;
            g[0] !== M || g[1] !== I ? (t = M ?? {
                text: I,
                selected: "" !== I
            }, g[0] = M, g[1] = I, g[2] = t) : t = g[2];
            let z = t;
            g[3] !== P ? (a = P.formatMessage({
                id: "composer.mcpFormElicitation.customChoice",
                defaultMessage: "Something else",
                description: "The final choice in a form field, where the user can type their own answer"
            }), g[3] = P, g[4] = a) : a = g[4];
            let T = a;
            g[5] !== z || g[6] !== C || g[7] !== E || g[8] !== A ? (i = e => {
                e !== z.selected && (A({
                    ...z,
                    selected: e
                }), C || E(e ? z.text : ""))
            }, g[5] = z, g[6] = C, g[7] = E, g[8] = A, g[9] = i) : i = g[9];
            let D = i;
            g[10] !== z.selected || g[11] !== z.text || g[12] !== E || g[13] !== A || g[14] !== F ? (s = () => {
                z.selected && "" !== z.text && (E([...Array.isArray(F) ? F : [], z.text]), A({
                    text: "",
                    selected: !1
                }))
            }, g[10] = z.selected, g[11] = z.text, g[12] = E, g[13] = A, g[14] = F, g[15] = s) : s = g[15];
            let _ = s;
            g[16] !== z || g[17] !== C || g[18] !== E || g[19] !== A ? (r = e => {
                C || A({
                    ...z,
                    selected: !1
                }), E(e)
            }, g[16] = z, g[17] = C, g[18] = E, g[19] = A, g[20] = r) : r = g[20];
            let q = z.selected;
            return g[21] !== P ? (o = P.formatMessage({
                id: "composer.mcpFormElicitation.customPlaceholder",
                defaultMessage: "Or write your own response",
                description: "Placeholder for a custom form response"
            }), g[21] = P, g[22] = o) : o = g[22], g[23] !== D ? (c = () => D(!0), g[23] = D, g[24] = c) : c = g[24], g[25] !== C || g[26] !== E || g[27] !== A ? (d = e => {
                A({
                    text: e,
                    selected: !0
                }), C || E(e)
            }, g[25] = C, g[26] = E, g[27] = A, g[28] = d) : d = g[28], g[29] !== _ || g[30] !== z.selected || g[31] !== z.text || g[32] !== C ? (u = e => {
                if (!C) {
                    "date" !== e.currentTarget.type && O(e, () => e.currentTarget.form?.requestSubmit());
                    return
                }
                z.selected && "" !== z.text && O(e, _) && e.stopPropagation()
            }, g[29] = _, g[30] = z.selected, g[31] = z.text, g[32] = C, g[33] = u) : u = g[33], g[34] !== z.text || g[35] !== y || g[36] !== w || g[37] !== k || g[38] !== j || g[39] !== N || g[40] !== d || g[41] !== u || g[42] !== o || g[43] !== c ? (p = (0, l.jsx)(eo, {
                autoFocus: !1,
                disabled: y,
                label: j,
                placeholder: o,
                variant: "choice",
                invalid: k,
                format: w,
                maxLength: N,
                value: z.text,
                onFocus: c,
                onChange: d,
                onKeyDown: u
            }), g[34] = z.text, g[35] = y, g[36] = w, g[37] = k, g[38] = j, g[39] = N, g[40] = d, g[41] = u, g[42] = o, g[43] = c, g[44] = p) : p = g[44], g[45] !== z.selected || g[46] !== T || g[47] !== D || g[48] !== p ? (f = {
                label: T,
                selected: q,
                onSelect: D,
                editor: p
            }, g[45] = z.selected, g[46] = T, g[47] = D, g[48] = p, g[49] = f) : f = g[49], g[50] !== b || g[51] !== k || g[52] !== C || g[53] !== S || g[54] !== L || g[55] !== f || g[56] !== r || g[57] !== F ? (h = (0, l.jsx)(ei, {
                autoFocus: b,
                submitOnEnter: !1,
                showOptionNumbers: L,
                invalid: k,
                multiple: C,
                options: S,
                value: F,
                onChange: r,
                customOption: f
            }), g[50] = b, g[51] = k, g[52] = C, g[53] = S, g[54] = L, g[55] = f, g[56] = r, g[57] = F, g[58] = h) : h = g[58], g[59] !== y || g[60] !== h ? (x = (0, l.jsx)("fieldset", {
                disabled: y,
                className: "min-w-0",
                children: h
            }), g[59] = y, g[60] = h, g[61] = x) : x = g[61], x
        }

        function em(e) {
            let t, a, i, r = (0, n.c)(101),
                {
                    autoFocus: o,
                    showOptionNumbers: c,
                    disabled: u,
                    field: p,
                    hideLabel: f,
                    hideDescription: h,
                    invalid: x,
                    value: g,
                    customDraft: b,
                    onCustomDraftChange: v,
                    onChange: y
                } = e,
                j = void 0 === c || c,
                w = void 0 !== u && u,
                N = (0, d.useId)(),
                k = (0, m.a)();
            r[0] !== p.name || r[1] !== p.schema.title ? (t = p.schema.title ?? Q()(p.name), r[0] = p.name, r[1] = p.schema.title, r[2] = t) : t = r[2];
            let C = t,
                S = !f && null != p.schema.title,
                F = void 0 !== h && h ? null : p.schema.description ?? null,
                M = "boolean" === p.schema.type && p.required && null == p.schema.default;
            r[3] !== p.schema || r[4] !== M ? (a = "array" === p.schema.type || (0, A.e)(p.schema) || M, r[3] = p.schema, r[4] = M, r[5] = a) : a = r[5];
            let E = a,
                L = "array" === p.schema.type ? p.schema.items : p.schema,
                P = E && (0, A.f)(p.schema) ? L : null;
            r[6] !== b || r[7] !== p.schema || r[8] !== x || r[9] !== E || r[10] !== g ? (i = x ? (0, l.jsx)("div", {
                className: (0, s.b)("pt-1 text-size-chat-sm text-danger", (E || "boolean" === p.schema.type) && "px-2"),
                children: (0, l.jsx)(er, {
                    schema: p.schema,
                    value: T(g, b)
                })
            }) : null, r[6] = b, r[7] = p.schema, r[8] = x, r[9] = E, r[10] = g, r[11] = i) : i = r[11];
            let I = i;
            if ("array" === p.schema.type || (0, A.e)(p.schema) || M) {
                let e, t, a, n;
                return r[12] !== C || r[13] !== S ? (e = S && (0, l.jsx)("legend", {
                    className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                    children: C
                }), r[12] = C, r[13] = S, r[14] = e) : e = r[14], r[15] !== F ? (t = (0, l.jsx)(eh, {
                    description: F
                }), r[15] = F, r[16] = t) : t = r[16], r[17] !== o || r[18] !== b || r[19] !== w || r[20] !== p.schema || r[21] !== k || r[22] !== x || r[23] !== C || r[24] !== y || r[25] !== v || r[26] !== M || r[27] !== j || r[28] !== P || r[29] !== g ? (a = null != P ? (0, l.jsx)(ed, {
                    showOptionNumbers: j,
                    autoFocus: o,
                    disabled: w,
                    label: C,
                    format: "format" in P ? P.format : void 0,
                    maxLength: "maxLength" in P ? P.maxLength : void 0,
                    invalid: x,
                    multiple: "array" === p.schema.type,
                    options: (0, A.d)(p.schema),
                    value: g,
                    draft: b,
                    onDraftChange: v,
                    onChange: y
                }) : (0, l.jsx)(ei, {
                    showOptionNumbers: j && !M,
                    autoFocus: o,
                    invalid: x,
                    multiple: "array" === p.schema.type,
                    options: M ? [{
                        const: "true",
                        title: k.formatMessage({
                            id: "composer.mcpFormElicitation.booleanYes",
                            defaultMessage: "Yes",
                            description: "An explicit true answer to a required boolean form property"
                        })
                    }, {
                        const: "false",
                        title: k.formatMessage({
                            id: "composer.mcpFormElicitation.booleanNo",
                            defaultMessage: "No",
                            description: "An explicit false answer to a required boolean form property"
                        })
                    }] : (0, A.d)(p.schema),
                    value: M && "boolean" == typeof g ? String(g) : g,
                    onChange: M ? e => y("true" === e) : y
                }), r[17] = o, r[18] = b, r[19] = w, r[20] = p.schema, r[21] = k, r[22] = x, r[23] = C, r[24] = y, r[25] = v, r[26] = M, r[27] = j, r[28] = P, r[29] = g, r[30] = a) : a = r[30], r[31] !== I || r[32] !== C || r[33] !== e || r[34] !== t || r[35] !== a ? (n = (0, l.jsxs)("fieldset", {
                    "aria-label": C,
                    className: "flex flex-col gap-1",
                    children: [e, t, a, I]
                }), r[31] = I, r[32] = C, r[33] = e, r[34] = t, r[35] = a, r[36] = n) : n = r[36], n
            }
            switch (p.schema.type) {
                case "string": {
                    let e, t, a, n;
                    r[37] !== N || r[38] !== C || r[39] !== S ? (e = S && (0, l.jsx)("label", {
                        htmlFor: N,
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: C
                    }), r[37] = N, r[38] = C, r[39] = S, r[40] = e) : e = r[40], r[41] !== F ? (t = (0, l.jsx)(eh, {
                        description: F,
                        inset: !1
                    }), r[41] = F, r[42] = t) : t = r[42];
                    let i = "format" in p.schema ? p.schema.format : void 0,
                        s = "maxLength" in p.schema ? p.schema.maxLength : void 0,
                        c = "string" == typeof g ? g : "";
                    return r[43] !== o || r[44] !== w || r[45] !== N || r[46] !== x || r[47] !== C || r[48] !== y || r[49] !== s || r[50] !== c || r[51] !== i ? (a = (0, l.jsx)(eo, {
                        id: N,
                        disabled: w,
                        autoFocus: o,
                        invalid: x,
                        label: C,
                        format: i,
                        maxLength: s,
                        value: c,
                        onChange: y,
                        onKeyDown: ef
                    }), r[43] = o, r[44] = w, r[45] = N, r[46] = x, r[47] = C, r[48] = y, r[49] = s, r[50] = c, r[51] = i, r[52] = a) : a = r[52], r[53] !== I || r[54] !== a || r[55] !== e || r[56] !== t ? (n = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, a, I]
                    }), r[53] = I, r[54] = a, r[55] = e, r[56] = t, r[57] = n) : n = r[57], n
                }
                case "boolean": {
                    let e, t, a, n, i, s, c = !0 === g;
                    r[58] !== y || r[59] !== g ? (e = () => y(!0 !== g), r[58] = y, r[59] = g, r[60] = e) : e = r[60];
                    let d = !0 === g;
                    return r[61] !== d ? (t = (0, l.jsx)("span", {
                        className: "flex h-5 items-center",
                        children: (0, l.jsx)(Z.c, {
                            selected: d,
                            variant: "checkbox"
                        })
                    }), r[61] = d, r[62] = t) : t = r[62], r[63] !== p.schema.title ? (a = null != p.schema.title && (0, l.jsx)("span", {
                        className: "min-w-0 text-sm font-medium wrap-anywhere",
                        children: p.schema.title
                    }), r[63] = p.schema.title, r[64] = a) : a = r[64], r[65] !== o || r[66] !== N || r[67] !== x || r[68] !== C || r[69] !== t || r[70] !== a || r[71] !== c || r[72] !== e ? (n = (0, l.jsxs)(Z.b, {
                        accessibilityLabel: C,
                        autoFocus: o,
                        checked: c,
                        invalid: x,
                        name: N,
                        type: "checkbox",
                        onChange: e,
                        onKeyDown: ep,
                        children: [t, a]
                    }), r[65] = o, r[66] = N, r[67] = x, r[68] = C, r[69] = t, r[70] = a, r[71] = c, r[72] = e, r[73] = n) : n = r[73], r[74] !== F ? (i = (0, l.jsx)(eh, {
                        description: F
                    }), r[74] = F, r[75] = i) : i = r[75], r[76] !== I || r[77] !== n || r[78] !== i ? (s = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [n, i, I]
                    }), r[76] = I, r[77] = n, r[78] = i, r[79] = s) : s = r[79], s
                }
                case "integer":
                case "number": {
                    let e, t, a, n, i;
                    r[80] !== C || r[81] !== S ? (e = S && (0, l.jsx)("div", {
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: C
                    }), r[80] = C, r[81] = S, r[82] = e) : e = r[82], r[83] !== F ? (t = (0, l.jsx)(eh, {
                        description: F,
                        inset: !1
                    }), r[83] = F, r[84] = t) : t = r[84];
                    let s = x || void 0,
                        c = "integer" === p.schema.type && null != p.schema.minimum ? Math.ceil(p.schema.minimum) : p.schema.minimum,
                        d = "integer" === p.schema.type ? 1 : "any",
                        m = "number" == typeof g || "string" == typeof g ? g : "";
                    return r[85] !== y ? (a = e => y(e.currentTarget.value), r[85] = y, r[86] = a) : a = r[86], r[87] !== o || r[88] !== p.schema.maximum || r[89] !== C || r[90] !== c || r[91] !== d || r[92] !== m || r[93] !== a || r[94] !== s ? (n = (0, l.jsx)(G.a, {
                        autoFocus: o,
                        "aria-label": C,
                        "aria-invalid": s,
                        max: p.schema.maximum,
                        min: c,
                        step: d,
                        type: "number",
                        value: m,
                        onChange: a,
                        onKeyDown: eu
                    }), r[87] = o, r[88] = p.schema.maximum, r[89] = C, r[90] = c, r[91] = d, r[92] = m, r[93] = a, r[94] = s, r[95] = n) : n = r[95], r[96] !== I || r[97] !== n || r[98] !== e || r[99] !== t ? (i = (0, l.jsxs)("label", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, n, I]
                    }), r[96] = I, r[97] = n, r[98] = e, r[99] = t, r[100] = i) : i = r[100], i
                }
            }
        }

        function eu(e) {
            O(e, () => e.currentTarget.form?.requestSubmit())
        }

        function ep(e) {
            O(e, () => e.currentTarget.click())
        }

        function ef(e) {
            "date" !== e.currentTarget.type && O(e, () => e.currentTarget.form?.requestSubmit())
        }

        function eh(e) {
            let t, a, i = (0, n.c)(5),
                {
                    description: r,
                    inset: o
                } = e;
            if (null == r) return null;
            let c = (void 0 === o || o) && "px-2";
            return i[0] !== c ? (t = (0, s.b)("text-size-chat-sm wrap-anywhere text-codex-description", c), i[0] = c, i[1] = t) : t = i[1], i[2] !== r || i[3] !== t ? (a = (0, l.jsx)("div", {
                className: t,
                children: r
            }), i[2] = r, i[3] = t, i[4] = a) : a = i[4], a
        }
        var ex = a("i5ac"),
            eg = a.n(ex),
            eb = a("Ug8F"),
            ev = a("dxKw"),
            ey = a("Bbed"),
            ej = a("GaA7"),
            ew = a("eGPX"),
            eN = a("YgCO"),
            ek = a("bnxy");

        function eC(e) {
            let t, a, i, r, o, c, d, m, u, p, f, h, x, g, b = (0, n.c)(63),
                {
                    action: v,
                    previewAction: y,
                    metadata: j,
                    layout: w,
                    autoFocus: N,
                    children: k,
                    disabled: C,
                    invalid: S,
                    isPortrait: F,
                    selected: M,
                    highlighted: A,
                    separatorBefore: E,
                    title: L
                } = e,
                P = void 0 === w ? "carousel" : w,
                I = void 0 !== F && F,
                z = void 0 !== A && A,
                T = "button" === e.type || "preview" === e.type;
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                button: "button",
                preview: "button",
                static: "div",
                checkbox: "label",
                radio: "label"
            }, b[0] = t) : t = b[0];
            let D = t[e.type],
                _ = E && "ps-4";
            b[1] !== _ ? (a = (0, s.b)("group/composer-attachment relative min-w-0 shrink-0 snap-start", _), b[1] = _, b[2] = a) : a = b[2], b[3] !== E ? (i = E && (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle"
            }), b[3] = E, b[4] = i) : i = b[4];
            let q = T && N,
                U = "carousel" === P ? "w-fit" : "w-full",
                K = "carousel" === P && "-m-1 p-1",
                B = C ? "cursor-default opacity-50" : "static" !== e.type && "cursor-interaction";
            b[5] !== B || b[6] !== U || b[7] !== K ? (r = (0, s.b)("group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none", U, K, B), b[5] = B, b[6] = U, b[7] = K, b[8] = r) : r = b[8];
            let V = T ? C : void 0,
                W = T ? "button" : void 0,
                H = T ? e.onClick : void 0;
            return b[9] !== N || b[10] !== C || b[11] !== e.name || b[12] !== e.onChange || b[13] !== e.type || b[14] !== e.value || b[15] !== M ? (o = "checkbox" === e.type || "radio" === e.type ? (0, l.jsx)("input", {
                autoFocus: N,
                checked: M,
                className: "sr-only",
                disabled: C,
                name: e.name,
                type: e.type,
                value: e.value,
                onChange: e.onChange,
                onKeyDown: t => {
                    "checkbox" === e.type && O(t, () => t.currentTarget.click())
                }
            }) : null, b[9] = N, b[10] = C, b[11] = e.name, b[12] = e.onChange, b[13] = e.type, b[14] = e.value, b[15] = M, b[16] = o) : o = b[16], b[17] !== C || b[18] !== z || b[19] !== S || b[20] !== I || b[21] !== P || b[22] !== e.type || b[23] !== M ? (c = (0, s.b)("relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring", "button" === e.type ? "bg-surface-secondary" : "bg-surface shadow-sm", "standalone" === P && "h-40 w-full", "grid" === P && "w-full", "carousel" === P && "h-34", "button" === e.type && "flex flex-col items-center justify-center gap-2 text-secondary", "standalone" !== P && {
                "aspect-square": "button" === e.type,
                "aspect-[4/5]": "button" !== e.type && I,
                "aspect-video": "button" !== e.type && !I
            }, {
                "border-strong": M,
                "border-text-danger": !M && S,
                "border-default": !M && !S
            }, {
                "ring-ring": z,
                "ring-border-strong": !z && M,
                "ring-text-danger/20": !z && !M && S,
                "ring-transparent": !z && !M && !S
            }, "static" !== e.type && "preview" !== e.type && !C && !M && !z && "group-hover:ring-border-subtle"), b[17] = C, b[18] = z, b[19] = S, b[20] = I, b[21] = P, b[22] = e.type, b[23] = M, b[24] = c) : c = b[24], b[25] !== P || b[26] !== e.type || b[27] !== L ? (d = "button" === e.type && "standalone" === P ? (0, l.jsx)("span", {
                className: "text-sm",
                children: L
            }) : null, b[25] = P, b[26] = e.type, b[27] = L, b[28] = d) : d = b[28], b[29] !== j ? (m = null == j ? null : (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                children: j
            }), b[29] = j, b[30] = m) : m = b[30], b[31] !== v || b[32] !== M ? (u = M ? (0, l.jsx)("span", {
                className: (0, s.b)("absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm", null != v && "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0"),
                children: (0, l.jsx)(R.Tb, {})
            }) : null, b[31] = v, b[32] = M, b[33] = u) : u = b[33], b[34] !== k || b[35] !== c || b[36] !== d || b[37] !== m || b[38] !== u ? (p = (0, l.jsxs)("div", {
                className: c,
                children: [k, d, m, u]
            }), b[34] = k, b[35] = c, b[36] = d, b[37] = m, b[38] = u, b[39] = p) : p = b[39], b[40] !== P || b[41] !== e.type || b[42] !== L ? (f = "button" === e.type && "standalone" === P ? null : (0, l.jsx)("div", {
                className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                children: L
            }), b[40] = P, b[41] = e.type, b[42] = L, b[43] = f) : f = b[43], b[44] !== D || b[45] !== r || b[46] !== V || b[47] !== W || b[48] !== H || b[49] !== o || b[50] !== p || b[51] !== f || b[52] !== q ? (h = (0, l.jsxs)(D, {
                autoFocus: q,
                className: r,
                disabled: V,
                type: W,
                onClick: H,
                children: [o, p, f]
            }), b[44] = D, b[45] = r, b[46] = V, b[47] = W, b[48] = H, b[49] = o, b[50] = p, b[51] = f, b[52] = q, b[53] = h) : h = b[53], b[54] !== y || b[55] !== E ? (x = null == y ? null : (0, l.jsx)("div", {
                className: (0, s.b)("pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100", E ? "start-6" : "start-2"),
                children: y
            }), b[54] = y, b[55] = E, b[56] = x) : x = b[56], b[57] !== v || b[58] !== h || b[59] !== x || b[60] !== a || b[61] !== i ? (g = (0, l.jsxs)("div", {
                className: a,
                children: [i, h, x, v]
            }), b[57] = v, b[58] = h, b[59] = x, b[60] = a, b[61] = i, b[62] = g) : g = b[62], g
        }
        var eS = a("JEWd"),
            eF = a("kSHG"),
            eM = a("Y8CA"),
            eA = a("ASxG"),
            eE = a("w7Qu"),
            eL = a("YvRg"),
            eP = a("t3y3"),
            eI = a("zUz7"),
            ez = a("a6Zv");
        let eT = eA.object({
            target: eM.a
        });

        function eD(e) {
            let t, a, i, s, r, o, c, d, u, p, f, h, x, g, b = (0, n.c)(60),
                {
                    option: j,
                    hostId: w,
                    layout: N,
                    name: k,
                    multiple: C,
                    implicit: S,
                    disabled: F,
                    invalid: M,
                    separatorBefore: A,
                    onChange: E,
                    onRemove: L,
                    onPreview: P
                } = e,
                I = (0, m.a)(),
                z = (0, ez.a)();
            b[0] !== j ? (t = (0, eI.a)(j), b[0] = j, b[1] = t) : t = b[1];
            let T = t,
                D = j.title ?? j.name;
            b[2] !== j._meta ? (a = eF.u.safeParse(j._meta?.["openai/thumbnail"] ?? j._meta?.["openai/preview"]), b[2] = j._meta, b[3] = a) : a = b[3];
            let {
                data: O
            } = a;
            b[4] !== j._meta ? (i = eT.safeParse(j._meta?.["openai/preview"]), b[4] = j._meta, b[5] = i) : i = b[5];
            let {
                data: _
            } = i;
            b[6] !== j._meta || b[7] !== _?.target ? (s = _?.target ?? eM.a.safeParse(j._meta?.["openai/preview"]).data ?? eM.a.safeParse(j._meta?.["openai/target"]).data, b[6] = j._meta, b[7] = _?.target, b[8] = s) : s = b[8];
            let q = s;
            b[9] !== P || b[10] !== q || b[11] !== D ? (r = null == q || null == P ? void 0 : () => P(q, D), b[9] = P, b[10] = q, b[11] = D, b[12] = r) : r = b[12];
            let R = r;
            b[13] !== R ? (o = null == R ? {
                type: "static"
            } : {
                type: "preview",
                onClick: R
            }, b[13] = R, b[14] = o) : o = b[14];
            let U = o;
            b[15] !== F || b[16] !== S || b[17] !== R ? (c = S || null == R ? null : (0, l.jsx)(y.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: F,
                onClick: R,
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.preview",
                    defaultMessage: "Preview",
                    description: "Open expanded details for a form option"
                })
            }), b[15] = F, b[16] = S, b[17] = R, b[18] = c) : c = b[18];
            let K = z ? T?.logoDarkUrl : T?.logoUrl;
            b[19] !== j.mimeType || b[20] !== K ? (d = (0, l.jsx)(en, {
                layout: "icon",
                mimeType: j.mimeType,
                src: K
            }), b[19] = j.mimeType, b[20] = K, b[21] = d) : d = b[21];
            let B = j.mimeType ?? D;
            b[22] !== B ? (u = (0, l.jsx)("span", {
                className: "truncate",
                children: B
            }), b[22] = B, b[23] = u) : u = b[23], b[24] !== u || b[25] !== d ? (p = (0, l.jsxs)(l.Fragment, {
                children: [d, u]
            }), b[24] = u, b[25] = d, b[26] = p) : p = b[26], b[27] !== F || b[28] !== I || b[29] !== L || b[30] !== D ? (f = F || null == L ? void 0 : (0, l.jsx)(eL.a, {
                className: "top-2 right-2",
                size: "composer",
                ariaLabel: I.formatMessage({
                    id: "composer.openAIForm.removeFile",
                    defaultMessage: "Remove {filename}",
                    description: "Accessible label for removing a resource from an elicitation form"
                }, {
                    filename: D
                }),
                onRemove: L
            }), b[27] = F, b[28] = I, b[29] = L, b[30] = D, b[31] = f) : f = b[31];
            let V = !S && j.selected;
            return b[32] !== S || b[33] !== C || b[34] !== k || b[35] !== E || b[36] !== j.uri || b[37] !== U ? (h = S ? U : {
                type: C ? "checkbox" : "radio",
                name: k,
                value: j.uri,
                onChange: E
            }, b[32] = S, b[33] = C, b[34] = k, b[35] = E, b[36] = j.uri, b[37] = U, b[38] = h) : h = b[38], b[39] !== w || b[40] !== T?.logoDarkUrl || b[41] !== T?.logoUrl || b[42] !== z || b[43] !== j.localPath || b[44] !== j.mimeType || b[45] !== j.name || b[46] !== O?.src ? (x = null == j.localPath ? (0, l.jsx)(en, {
                layout: O?.src == null ? "card-icon" : "card",
                mimeType: j.mimeType,
                src: O?.src ?? (z ? T?.logoDarkUrl : T?.logoUrl)
            }) : (0, l.jsx)(eP.a, {
                hostId: w,
                imageFit: "scale-down",
                path: j.localPath,
                importKind: (0, eE.a)(j.name),
                fallback: (0, l.jsx)(en, {
                    layout: "card",
                    mimeType: j.mimeType,
                    src: void 0
                })
            }), b[39] = w, b[40] = T?.logoDarkUrl, b[41] = T?.logoUrl, b[42] = z, b[43] = j.localPath, b[44] = j.mimeType, b[45] = j.name, b[46] = O?.src, b[47] = x) : x = b[47], b[48] !== F || b[49] !== M || b[50] !== N || b[51] !== A || b[52] !== p || b[53] !== f || b[54] !== V || b[55] !== h || b[56] !== x || b[57] !== c || b[58] !== D ? (g = (0, l.jsx)(eC, {
                layout: N,
                previewAction: c,
                metadata: p,
                action: f,
                autoFocus: !1,
                disabled: F,
                invalid: M,
                selected: V,
                separatorBefore: A,
                title: D,
                ...h,
                children: x
            }), b[48] = F, b[49] = M, b[50] = N, b[51] = A, b[52] = p, b[53] = f, b[54] = V, b[55] = h, b[56] = x, b[57] = c, b[58] = D, b[59] = g) : g = b[59], g
        }
        let eO = (0, ey.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(525677)]).then(a.bind(a, "OMbd"))).FileOptionsDialog);

        function e_(e) {
            let t, a, i, s, c, u, p, f, h, g, b, j, w, N, k, S, M, A = (0, n.c)(57),
                {
                    field: E,
                    disabled: L,
                    expanded: P,
                    hideDescription: I,
                    showTitle: z,
                    hostId: T,
                    invalid: D,
                    name: O,
                    options: _,
                    required: q,
                    onChange: U,
                    onPickingChange: K,
                    onPickFiles: B,
                    onCloseExpanded: V,
                    onPreview: W,
                    onViewAll: H
                } = e,
                Z = void 0 !== L && L,
                G = void 0 !== I && I,
                J = void 0 !== z && z,
                Y = (0, r.y)(C.a),
                X = (0, m.a)(),
                $ = (0, ev.a)(),
                ee = (0, r.z)(ew.c),
                et = (0, d.useRef)(null),
                ea = (0, d.useRef)(null);
            A[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => ea.current?.abort(), a = [], A[0] = t, A[1] = a) : (t = A[0], a = A[1]), (0, d.useEffect)(t, a);
            let [el, en] = (0, d.useState)(!1), [ei, es] = (0, d.useState)(!1), [eo, ec] = (0, d.useState)(!1), [ed, em] = (0, d.useState)(null), eu = E["x-openai-input"], ep = eu.userOptions?.kind ?? "file", ef = (0, eN.a)("file" === ep ? eu.userOptions?.accept : void 0);
            A[2] !== E.title || A[3] !== O ? (i = E.title ?? Q()(O), A[2] = E.title, A[3] = O, A[4] = i) : i = A[4];
            let eh = i,
                ex = "array" === E.type,
                ey = ex && "implicit" === eu.selection,
                eF = null == B && !Z && !ei && null != eu.userOptions && "local" === T && window.electronBridge?.getPathForFile != null;
            A[5] !== E.minItems || A[6] !== E.type || A[7] !== q ? (s = 0, q && (s = "array" === E.type ? E.minItems ?? 0 : 1), A[5] = E.minItems, A[6] = E.type, A[7] = q, A[8] = s) : s = A[8], A[9] !== eu.options ? (c = new Set(eu.options.map(eK)), A[9] = eu.options, A[10] = c) : c = A[10];
            let eM = c;
            A[11] !== eM ? (u = e => !eM.has(e.uri), A[11] = eM, A[12] = u) : u = A[12];
            let eA = _.filter(u);
            A[13] !== eM ? (p = e => eM.has(e.uri), A[13] = eM, A[14] = p) : p = A[14];
            let eE = [...eA, ..._.filter(p)],
                eL = e => {
                    Array.from(et.current?.querySelectorAll("input") ?? []).find(t => t.value === e)?.parentElement?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest",
                        behavior: ee ? "instant" : "smooth"
                    })
                },
                eP = () => {
                    document.activeElement === document.body && et.current?.closest("form")?.focus()
                };
            A[15] !== ex || A[16] !== U || A[17] !== _ ? (f = (e, t) => {
                if (t.aborted || 0 === e.length) return;
                let a = new Set(e.map(eU));
                U(eg()([..._, ...e.map(eR)], "uri").map(t => ({
                    ...t,
                    selected: ex ? t.selected || a.has(t.uri) : t.uri === e[0].uri
                })))
            }, A[15] = ex, A[16] = U, A[17] = _, A[18] = f) : f = A[18];
            let eI = f,
                ez = e => {
                    let t = !1,
                        a = () => {
                            !t && (t = !0, e.signal.removeEventListener("abort", a), K?.(!1), e.signal.aborted || (es(!1), eP()))
                        };
                    return e.signal.addEventListener("abort", a, {
                        once: !0
                    }), es(!0), em(null), K?.(!0), a
                },
                eT = async (e, t) => {
                    if (Z || ei || null == eu.userOptions || 0 === e.length) return;
                    let a = ez(t),
                        l = Error("File type is not accepted");
                    await Promise.all(e.map(async e => {
                        let {
                            appServerPath: t,
                            fsPath: a,
                            label: n
                        } = e, i = await ej.appServices.workspaceFiles.getMetadata?.({
                            hostId: T,
                            path: a
                        });
                        if (i?.kind !== ep) throw Error("Selection does not match the requested kind");
                        if ("file" === i.kind && !(0, eN.b)(a, ef)) throw l;
                        return {
                            uri: (0, ek.f)(t ?? a),
                            localPath: a,
                            name: (0, ek.j)(a),
                            title: n,
                            selected: !0
                        }
                    })).then(e => eI(e, t.signal)).catch(e => {
                        t.signal.aborted || em(e === l ? "type" : "selection")
                    }).finally(a)
                };
            A[19] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, l.jsx)(v.a, {
                id: "composer.openAIForm.uploadTile",
                defaultMessage: "Upload",
                description: "Label below the upload tile in a file picker carousel"
            }), A[19] = h) : h = A[19];
            let e_ = h;
            if ("directory" === ep) {
                let e;
                A[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.addFolder",
                    defaultMessage: "Choose folder",
                    description: "Button to add a user-selected directory to an elicitation form"
                }), A[20] = e) : e = A[20], e_ = e
            } else if (0 === _.length) {
                let e;
                A[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.addFiles",
                    defaultMessage: "Upload files",
                    description: "Button to add user-selected files to an elicitation form"
                }), A[21] = e) : e = A[21], e_ = e
            }
            let eB = null == eu.userOptions ? null : (0, l.jsx)(eC, {
                    autoFocus: !1,
                    highlighted: el,
                    layout: 0 === _.length ? "standalone" : "carousel",
                    disabled: Z || ei,
                    invalid: !1,
                    selected: !1,
                    title: e_,
                    type: "button",
                    onClick: () => {
                        ea.current?.abort();
                        let e = new AbortController;
                        if (ea.current = e, null != B) {
                            let t = ez(e);
                            B(e.signal).then(t => eI(t, e.signal)).catch(() => {
                                e.signal.aborted || em("selection")
                            }).finally(t);
                            return
                        }
                        null != (0, o.sg)(T) || (0, o.mi)((0, F.a)(Y, T)) ? ec(!0) : $({
                            accept: "file" === ep ? eu.userOptions?.accept : void 0,
                            kind: ep,
                            allowMultiple: ex
                        }).then(t => {
                            if (!e.signal.aborted) return eT(t, e)
                        }).catch(() => {
                            e.signal.aborted || em("selection")
                        }).finally(() => {
                            e.signal.aborted || eP()
                        })
                    },
                    children: "directory" === ep ? (0, l.jsx)(R.ud, {
                        className: "text-tertiary"
                    }) : (0, l.jsx)(R.M, {
                        className: "text-tertiary"
                    })
                }),
                eV = (e, t, a) => (0, l.jsx)(eD, {
                    option: e,
                    hostId: T,
                    layout: a,
                    name: "grid" === a ? `${O}-expanded` : O,
                    multiple: ex,
                    implicit: ey,
                    disabled: Z || ei,
                    invalid: D || null != ed,
                    separatorBefore: "carousel" === a && 0 === t && null != eB,
                    onChange: () => {
                        U(_.map(t => ({
                            ...t,
                            selected: t.uri === e.uri ? !ex || !t.selected : ex && t.selected
                        }))), "carousel" === a && eL(e.uri)
                    },
                    onRemove: !ey || null == eu.userOptions && _.length <= 1 || eM.has(e.uri) && _.length <= s ? void 0 : () => U(_.filter(t => t.uri !== e.uri)),
                    onPreview: null == W ? void 0 : (e, t) => {
                        V?.(), W(e, t)
                    }
                }, e.uri);
            A[22] !== eF ? (g = e => {
                (0, x.b)(e.dataTransfer) && (e.preventDefault(), e.stopPropagation(), "dragenter" === e.type ? en(eF) : e.dataTransfer.dropEffect = eF ? "copy" : "none")
            }, A[22] = eF, A[23] = g) : g = A[23];
            let eW = g;
            A[24] !== E.description || A[25] !== E.title || A[26] !== G || A[27] !== J ? (b = J && E.title || !G && E.description ? (0, l.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                children: [J && E.title && (0, l.jsx)("div", {
                    className: "text-size-chat-sm font-medium text-default",
                    children: E.title
                }), !G && E.description && (0, l.jsx)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: E.description
                })]
            }) : null, A[24] = E.description, A[25] = E.title, A[26] = G, A[27] = J, A[28] = b) : b = A[28];
            let eH = b;
            A[29] !== eH || A[30] !== H ? (j = null != eH || null != H ? (0, l.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [eH, null != H && (0, l.jsxs)(y.a, {
                    className: "ms-auto shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    onClick: H,
                    children: [(0, l.jsx)(R.Jh, {}), (0, l.jsx)(v.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })]
            }) : null, A[29] = eH, A[30] = H, A[31] = j) : j = A[31];
            let eQ = j;
            A[32] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                e.stopPropagation(), e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget) || en(!1)
            }, A[32] = w) : w = A[32];
            let eZ = e => {
                    if (!(0, x.b)(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), en(!1), !eF)) return;
                    let t = (0, x.f)(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer);
                    if (0 === t.length || !ex && t.length > 1) return void em("selection");
                    ea.current?.abort();
                    let a = new AbortController;
                    ea.current = a, eT(t, a)
                },
                eG = 0 === _.length && null != eB ? (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2 px-4",
                    role: "group",
                    "aria-label": eh,
                    children: [eQ, eB]
                }) : (0, l.jsxs)(eS.a, {
                    ariaInvalid: D || null != ed,
                    ariaLabel: eh,
                    backLabel: X.formatMessage({
                        id: "composer.openAIForm.previousFiles",
                        defaultMessage: "Show previous files",
                        description: "Accessible label for scrolling a form file picker backward"
                    }),
                    forwardLabel: X.formatMessage({
                        id: "composer.openAIForm.moreFiles",
                        defaultMessage: "Show more files",
                        description: "Accessible label for scrolling a form file picker forward"
                    }),
                    header: eQ,
                    role: ex ? "group" : "radiogroup",
                    shouldUseReducedMotion: ee,
                    children: [eB, eE.map((e, t) => eV(e, t, "carousel"))]
                }),
                eJ = void 0 !== P && P && null != V ? (0, l.jsx)(eO, {
                    title: E.title,
                    accessibilityLabel: eh,
                    multiple: ex,
                    options: eE,
                    renderOption: (e, t) => eV(e, t, "grid"),
                    onClose: V,
                    onOptionActivate: eL,
                    onRestoreFocus: () => {
                        let e = et.current?.querySelector("input:not(:disabled), button:not(:disabled)") ?? et.current?.closest("form")?.querySelector('button[type="submit"]');
                        e?.focus()
                    }
                }) : null;
            return A[33] !== ef || A[34] !== eT || A[35] !== T || A[36] !== ep || A[37] !== ex || A[38] !== eo || A[39] !== eP || A[40] !== ec ? (N = eo ? (0, l.jsx)(eb.a, {
                acceptedFileExtensions: ef,
                hostId: T,
                kind: ep,
                multiple: ex,
                onClose: () => ec(!1),
                onRestoreFocus: eP,
                onSelect: e => {
                    let t = ea.current;
                    null == t || t.signal.aborted || eT(e.map(eq), t)
                }
            }) : null, A[33] = ef, A[34] = eT, A[35] = T, A[36] = ep, A[37] = ex, A[38] = eo, A[39] = eP, A[40] = ec, A[41] = N) : N = A[41], A[42] !== ed ? (k = ed ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                role: "alert",
                children: "selection" === ed ? (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.fileSelectionFailed",
                    defaultMessage: "These files or folders could not be added",
                    description: "Error when selected files or folders cannot be accessed or do not match the form's requested kind or number of items"
                }) : (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.fileTypeRejected",
                    defaultMessage: "Choose a file of an allowed type",
                    description: "Error for a file whose type does not match the file types accepted by the picker"
                })
            }) : null, A[42] = ed, A[43] = k) : k = A[43], A[44] !== E || A[45] !== D ? (S = D ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(er, {
                    schema: E
                })
            }) : null, A[44] = E, A[45] = D, A[46] = S) : S = A[46], A[47] !== et || A[48] !== eW || A[49] !== w || A[50] !== eZ || A[51] !== eG || A[52] !== eJ || A[53] !== N || A[54] !== k || A[55] !== S ? (M = (0, l.jsxs)("div", {
                ref: et,
                className: "flex w-full min-w-0 flex-col gap-2",
                "data-mcp-form-file-drop": !0,
                onDragEnter: eW,
                onDragOver: eW,
                onDragLeave: w,
                onDrop: eZ,
                children: [eG, eJ, N, k, S]
            }), A[47] = et, A[48] = eW, A[49] = w, A[50] = eZ, A[51] = eG, A[52] = eJ, A[53] = N, A[54] = k, A[55] = S, A[56] = M) : M = A[56], M
        }

        function eq(e) {
            return {
                path: e,
                fsPath: e,
                label: (0, ek.j)(e)
            }
        }

        function eR(e) {
            return {
                ...e,
                selected: !0
            }
        }

        function eU(e) {
            return e.uri
        }

        function eK(e) {
            return e.uri
        }
        var eB = a("HOLv"),
            eV = a("EsLm"),
            eW = a("vtbk");

        function eH(e) {
            let t, a, i, o, c, u, p, f, h, x, g = (0, n.c)(56),
                {
                    autoFocus: b,
                    field: y,
                    hideLabel: j,
                    hostId: w,
                    invalid: N,
                    name: k,
                    value: C,
                    onChange: S,
                    onPickFile: F
                } = e,
                M = void 0 !== j && j,
                A = (0, m.a)(),
                E = (0, ev.a)(),
                L = (0, r.z)(ew.c),
                [I, z] = (0, d.useState)(!1),
                [T, D] = (0, d.useState)(!1),
                O = T ? "aspect-[4/5]" : "aspect-video";
            g[0] !== y.title || g[1] !== k ? (t = y.title ?? Q()(k), g[0] = y.title, g[1] = k, g[2] = t) : t = g[2];
            let _ = t,
                q = null != y.file && (0, P.c)(y, C) && !y.items.some(e => e.id === C) ? C : null;
            if (g[3] !== A ? (a = A.formatMessage({
                    id: "composer.imagePicker.previous",
                    defaultMessage: "Show previous templates",
                    description: "Accessible label for scrolling an image picker backward"
                }), g[3] = A, g[4] = a) : a = g[4], g[5] !== A ? (i = A.formatMessage({
                    id: "composer.imagePicker.next",
                    defaultMessage: "Show more templates",
                    description: "Accessible label for scrolling an image picker forward"
                }), g[5] = A, g[6] = i) : i = g[6], g[7] !== y.description || g[8] !== y.title || g[9] !== M ? (o = M ? null : (0, l.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere",
                    children: [y.title && (0, l.jsx)("div", {
                        className: "text-sm font-medium",
                        children: y.title
                    }), y.description && (0, l.jsx)("div", {
                        className: "text-xs text-tertiary",
                        children: y.description
                    })]
                }), g[7] = y.description, g[8] = y.title, g[9] = M, g[10] = o) : o = g[10], g[11] !== y.file || g[12] !== y.title || g[13] !== w || g[14] !== N || g[15] !== S || g[16] !== F || g[17] !== E || g[18] !== O || g[19] !== q ? (c = null == y.file ? null : null != F ? (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("button", {
                        className: "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                        type: "button",
                        onClick: () => {
                            null != F ? F().then(e => {
                                null != e && S(e)
                            }) : "local" !== w ? z(!0) : E({
                                accept: y.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: y.file?.title ?? y.title
                            }).then(e => {
                                let [t] = e;
                                null != t && S((0, ek.f)(t.fsPath))
                            })
                        },
                        children: [(0, l.jsx)("div", {
                            className: (0, s.b)("flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong", O, null == q ? "border-default ring-transparent group-hover:ring-border-subtle" : "border-strong ring-border-strong", N && null == q && "border-text-danger ring-text-danger/20"),
                            children: null == q ? (0, l.jsx)(eB.a, {
                                className: "text-secondary",
                                asset: eW.a,
                                "aria-hidden": !0
                            }) : (0, l.jsxs)("div", {
                                className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                children: [(0, l.jsx)(eB.a, {
                                    asset: eV.a,
                                    "aria-hidden": !0
                                }), (0, l.jsx)("span", {
                                    className: "max-w-full truncate text-sm",
                                    children: (0, ek.j)(decodeURIComponent(new URL(q).pathname))
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                            children: y.file.title ?? (0, l.jsx)(v.a, {
                                id: "composer.imagePicker.chooseFile",
                                defaultMessage: "Choose a file",
                                description: "Label for choosing a local file instead of a predefined image-picker option"
                            })
                        })]
                    })
                }) : null, g[11] = y.file, g[12] = y.title, g[13] = w, g[14] = N, g[15] = S, g[16] = F, g[17] = E, g[18] = O, g[19] = q, g[20] = c) : c = g[20], g[21] !== b || g[22] !== y.items || g[23] !== N || g[24] !== T || g[25] !== k || g[26] !== S || g[27] !== C) {
                let e;
                g[29] !== b || g[30] !== N || g[31] !== T || g[32] !== k || g[33] !== S || g[34] !== C ? (e = (e, t) => (0, l.jsx)(eC, {
                    autoFocus: b && 0 === t,
                    invalid: N,
                    isPortrait: T,
                    name: k,
                    selected: C === e.id,
                    title: e.title,
                    type: "radio",
                    value: e.id,
                    onChange: () => S(e.id),
                    children: (0, l.jsx)("img", {
                        alt: "",
                        className: "block h-full w-full object-scale-down",
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        onLoad: 0 === t ? e => {
                            D(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)
                        } : void 0,
                        src: e.image
                    })
                }, e.id), g[29] = b, g[30] = N, g[31] = T, g[32] = k, g[33] = S, g[34] = C, g[35] = e) : e = g[35], u = y.items.map(e), g[21] = b, g[22] = y.items, g[23] = N, g[24] = T, g[25] = k, g[26] = S, g[27] = C, g[28] = u
            } else u = g[28];
            return g[36] !== N || g[37] !== L || g[38] !== a || g[39] !== i || g[40] !== o || g[41] !== c || g[42] !== u || g[43] !== _ ? (p = (0, l.jsxs)(eS.a, {
                ariaInvalid: N,
                ariaLabel: _,
                backLabel: a,
                forwardLabel: i,
                header: o,
                role: "radiogroup",
                shouldUseReducedMotion: L,
                children: [c, u]
            }), g[36] = N, g[37] = L, g[38] = a, g[39] = i, g[40] = o, g[41] = c, g[42] = u, g[43] = _, g[44] = p) : p = g[44], g[45] !== w || g[46] !== I || g[47] !== S ? (f = I ? (0, l.jsx)(eb.a, {
                hostId: w,
                multiple: !1,
                onClose: () => z(!1),
                onSelect: e => {
                    let t = e[0];
                    null != t && S((0, ek.f)(t))
                }
            }) : null, g[45] = w, g[46] = I, g[47] = S, g[48] = f) : f = g[48], g[49] !== y || g[50] !== N ? (h = N ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(er, {
                    schema: y
                })
            }) : null, g[49] = y, g[50] = N, g[51] = h) : h = g[51], g[52] !== h || g[53] !== p || g[54] !== f ? (x = (0, l.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2",
                children: [p, f, h]
            }), g[52] = h, g[53] = p, g[54] = f, g[55] = x) : x = g[55], x
        }

        function eQ(e) {
            let t, a, i, r, o = (0, n.c)(72),
                {
                    autoFocus: c,
                    isOnlyField: d,
                    disabled: m,
                    interactionDisabled: u,
                    field: p,
                    draft: f,
                    expanded: h,
                    hostId: x,
                    invalid: g,
                    metadataInHeader: b,
                    onCloseExpanded: v,
                    onDraftChange: y,
                    onValueChange: j,
                    onPickLegacyFile: w,
                    onPickingChange: N,
                    onPickFiles: k,
                    onPreview: C,
                    onViewAll: S
                } = e;
            o[0] !== p.schema ? (t = (0, L.c)(p.schema) || (0, P.b)(p.schema), o[0] = p.schema, o[1] = t) : t = o[1];
            let F = t,
                {
                    name: M,
                    schema: A,
                    required: E
                } = p;
            if ((0, L.c)(A)) {
                let e, t, n, i = !b,
                    s = f.fileOptions[M];
                o[2] !== M || o[3] !== y ? (e = e => y(t => ({
                    ...t,
                    fileOptions: {
                        ...t.fileOptions,
                        [M]: e
                    }
                }), M), o[2] = M, o[3] = y, o[4] = e) : e = o[4], o[5] !== M || o[6] !== k ? (t = null == k ? void 0 : e => k(M, e), o[5] = M, o[6] = k, o[7] = t) : t = o[7], o[8] !== m || o[9] !== h || o[10] !== M || o[11] !== x || o[12] !== g || o[13] !== b || o[14] !== v || o[15] !== N || o[16] !== C || o[17] !== S || o[18] !== E || o[19] !== A || o[20] !== i || o[21] !== s || o[22] !== e || o[23] !== t ? (n = (0, l.jsx)(e_, {
                    field: A,
                    disabled: m,
                    expanded: h,
                    hideDescription: b,
                    showTitle: i,
                    onCloseExpanded: v,
                    onViewAll: S,
                    hostId: x,
                    invalid: g,
                    name: M,
                    options: s,
                    required: E,
                    onPreview: C,
                    onChange: e,
                    onPickingChange: N,
                    onPickFiles: t
                }), o[8] = m, o[9] = h, o[10] = M, o[11] = x, o[12] = g, o[13] = b, o[14] = v, o[15] = N, o[16] = C, o[17] = S, o[18] = E, o[19] = A, o[20] = i, o[21] = s, o[22] = e, o[23] = t, o[24] = n) : n = o[24], a = n
            } else if ((0, P.b)(A)) {
                let e, t, n, i = f.values[M];
                o[25] !== M || o[26] !== j ? (e = e => j(M, e), o[25] = M, o[26] = j, o[27] = e) : e = o[27], o[28] !== M || o[29] !== w ? (t = null == w ? void 0 : () => w(M), o[28] = M, o[29] = w, o[30] = t) : t = o[30], o[31] !== c || o[32] !== M || o[33] !== x || o[34] !== g || o[35] !== b || o[36] !== A || o[37] !== i || o[38] !== e || o[39] !== t ? (n = (0, l.jsx)(eH, {
                    autoFocus: c,
                    field: A,
                    hideLabel: b,
                    hostId: x,
                    invalid: g,
                    name: M,
                    value: i,
                    onChange: e,
                    onPickFile: t
                }), o[31] = c, o[32] = M, o[33] = x, o[34] = g, o[35] = b, o[36] = A, o[37] = i, o[38] = e, o[39] = t, o[40] = n) : n = o[40], a = n
            } else {
                let e, t, n, i;
                o[41] !== M || o[42] !== E || o[43] !== A ? (e = {
                    name: M,
                    required: E,
                    schema: A
                }, o[41] = M, o[42] = E, o[43] = A, o[44] = e) : e = o[44];
                let s = f.customDrafts[M];
                o[45] !== M || o[46] !== y ? (t = e => y(t => ({
                    ...t,
                    customDrafts: {
                        ...t.customDrafts,
                        [M]: e
                    }
                }), M), o[45] = M, o[46] = y, o[47] = t) : t = o[47];
                let r = b && "boolean" !== A.type,
                    m = f.values[M];
                o[48] !== M || o[49] !== j ? (n = e => j(M, e), o[48] = M, o[49] = j, o[50] = n) : n = o[50], o[51] !== c || o[52] !== u || o[53] !== g || o[54] !== d || o[55] !== b || o[56] !== e || o[57] !== s || o[58] !== t || o[59] !== r || o[60] !== m || o[61] !== n ? (i = (0, l.jsx)(em, {
                    disabled: u,
                    autoFocus: c,
                    showOptionNumbers: d,
                    field: e,
                    customDraft: s,
                    onCustomDraftChange: t,
                    hideLabel: r,
                    hideDescription: b,
                    invalid: g,
                    value: m,
                    onChange: n
                }), o[51] = c, o[52] = u, o[53] = g, o[54] = d, o[55] = b, o[56] = e, o[57] = s, o[58] = t, o[59] = r, o[60] = m, o[61] = n, o[62] = i) : i = o[62], a = i
            }
            let I = c && F ? eZ : void 0,
                z = p.name,
                T = !F && "px-2",
                D = b && F && "pt-1";
            return o[63] !== T || o[64] !== D ? (i = (0, s.b)("flex min-w-0 flex-col gap-2 outline-none", T, D), o[63] = T, o[64] = D, o[65] = i) : i = o[65], o[66] !== p.name || o[67] !== a || o[68] !== u || o[69] !== I || o[70] !== i ? (r = (0, l.jsx)("fieldset", {
                ref: I,
                "data-mcp-form-field": z,
                tabIndex: -1,
                className: i,
                disabled: u,
                children: a
            }), o[66] = p.name, o[67] = a, o[68] = u, o[69] = I, o[70] = i, o[71] = r) : r = o[71], r
        }

        function eZ(e) {
            null == e || e.contains(document.activeElement) || e.focus()
        }
        var eG = a("pUtG");

        function eJ(e) {
            let t, a, i, s, r, o, c, d, u = (0, n.c)(20),
                {
                    isSubmitting: p,
                    elicitation: f,
                    fieldTitle: h,
                    fieldDescription: x,
                    showHeader: g,
                    onCancel: b
                } = e,
                v = void 0 !== p && p,
                j = (0, m.a)();
            return g ? (u[0] !== f.message ? (t = (0, l.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: f.message
            }), u[0] = f.message, u[1] = t) : t = u[1], u[2] !== j ? (a = j.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel",
                description: "Accessible label for canceling an MCP form elicitation"
            }), u[2] = j, u[3] = a) : a = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, l.jsx)(eB.a, {
                "aria-hidden": !1,
                asset: eG.a
            }), u[4] = i) : i = u[4], u[5] !== v || u[6] !== b || u[7] !== a ? (s = (0, l.jsx)("div", {
                className: "ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none",
                children: (0, l.jsx)(y.a, {
                    "aria-label": a,
                    color: "ghostSecondary",
                    size: "compact",
                    uniform: !0,
                    disabled: v,
                    onClick: b,
                    children: i
                })
            }), u[5] = v, u[6] = b, u[7] = a, u[8] = s) : s = u[8], u[9] !== t || u[10] !== s ? (r = (0, l.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, s]
            }), u[9] = t, u[10] = s, u[11] = r) : r = u[11], u[12] !== h ? (o = h && (0, l.jsx)("div", {
                className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                children: h
            }), u[12] = h, u[13] = o) : o = u[13], u[14] !== x ? (c = x && (0, l.jsx)("div", {
                className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                children: x
            }), u[14] = x, u[15] = c) : c = u[15], u[16] !== r || u[17] !== o || u[18] !== c ? (d = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-col gap-1 px-4 py-3",
                children: [r, o, c]
            }), u[16] = r, u[17] = o, u[18] = c, u[19] = d) : d = u[19], d) : null
        }
        let eY = (0, r.d)(C.a, (e, t) => {
            let {
                get: a
            } = t;
            return null != (0, o.sg)(e) || (0, o.mi)(a(F.b, e))
        });

        function eX(e) {
            let t, a = (0, n.c)(2);
            return a[0] !== e ? (t = null != e.onReply ? (0, l.jsx)(e$, {
                ...e
            }) : (0, l.jsx)(e3, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function e$(e) {
            let t, a, o, m, b, v, y, j = (0, n.c)(23),
                {
                    attribution: S,
                    formType: F,
                    autoResolution: D,
                    confirmationPresentation: q,
                    confirmationCompleted: R,
                    conversationId: U,
                    elicitation: K,
                    hostId: B,
                    requestId: V,
                    turnId: H,
                    onUserInteraction: Q,
                    onOpenInThread: Z,
                    onStandaloneResponseChange: G,
                    onReply: J,
                    retainDraft: Y,
                    onPickLegacyFile: X,
                    onPickFiles: $,
                    validateContent: ee,
                    disabled: et,
                    isSubmitting: ea,
                    onPreview: el
                } = e,
                en = void 0 !== Y && Y,
                ei = void 0 !== et && et,
                es = void 0 !== ea && ea,
                er = (0, r.y)(C.a),
                eo = (0, d.useRef)(null),
                ec = (0, d.useRef)(null),
                ed = (0, h.b)(),
                em = "formElicitation" === K.kind;
            j[0] !== K ? (t = (0, k.a)(K), j[0] = K, j[1] = t) : t = j[1];
            let eu = t,
                ep = eu?.field ?? null,
                ef = (0, A.c)(K.schema),
                eh = function(e) {
                    if ("openaiForm" !== e.kind) return;
                    let t = e.schema[M.a],
                        a = null == t ? void 0 : e.schema.properties[t];
                    if (null != t && a?.type === "string" && ("oneOf" in a && null != a.oneOf && a.oneOf.length > 0 || "enum" in a && null != a.enum && a.enum.length > 0)) return {
                        name: t,
                        options: (0, A.d)(a),
                        required: e.schema.required?.includes(t) === !0
                    }
                }(K),
                ex = ef[0],
                eg = 1 === ef.length && null != ex && (0, P.b)(ex.schema) ? ex.schema : null,
                eb = null != eg;
            j[2] !== K.message || j[3] !== eb ? (a = !eb && K.message.trim().length > 0, j[2] = K.message, j[3] = eb, j[4] = a) : a = j[4];
            let ev = a,
                ey = (0, g.b)(B, U, V),
                ej = (0, r.z)(g.c).get(ey);
            j[5] !== K ? (o = () => z(K), j[5] = K, j[6] = o) : o = j[6];
            let [ew, eN] = (0, d.useState)(o), ek = ej?.requestId === V && "kind" in ej.draft && ej.draft.kind === K.kind ? ej.draft : z(K), eC = null == J || en ? ek : ew, {
                values: eS
            } = eC, eF = ef.filter(e => e.name !== eh?.name), eM = 1 === eF.length ? eF[0] : void 0, eA = eM?.schema.type === "string" && (0, A.e)(eM.schema) ? (0, A.d)(eM.schema) : null, eE = null == eM ? void 0 : eS[eM.name], [eL, eP] = (0, d.useState)(null), [eI, ez] = (0, d.useState)(0), [eT, eD] = (0, d.useState)(!1), eO = (0, d.useRef)(!1), e_ = es || eT, eq = ei || e_ || eI > 0;
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (m = [], j[7] = m) : m = j[7];
            let [eR, eU] = (0, d.useState)(m);
            (0, d.useEffect)(() => {
                null != eg && null == J && (0, u.d)(er, {
                    hostId: B,
                    requestId: V
                }, eg.items.length, {
                    threadId: U,
                    turnId: H
                })
            }, [U, B, J, V, er, eg, H]);
            let eK = (e, t) => {
                    if (null == J || en) {
                        let t = er.get(g.c).get(ey),
                            a = null != t && "kind" in t.draft && t.draft.kind === K.kind ? t.draft : z(K);
                        (0, g.d)(er, ey, {
                            conversationId: U,
                            draft: e(a),
                            requestId: V,
                            cleanupOwner: en ? "hosted" : void 0
                        })
                    } else eN(e);
                    eU(e => e.filter(e => e !== t))
                },
                eB = (e, t) => {
                    eq || eK(a => ({
                        ...a,
                        values: {
                            ...a.values,
                            [e]: t
                        }
                    }), e)
                },
                eV = (e, t) => {
                    if (es || eO.current) return Promise.resolve(!1);
                    if (null != Z) return eq || Z(), Promise.resolve(!1);
                    if ((0, E.a)(er, {
                            action: e,
                            formType: F ?? (em ? "mcp" : "openai"),
                            identity: S
                        }), null != J) return J(e, t);
                    let a = () => (0, p.b)(er, B).replyWithMcpServerElicitationResponse(U, V, (0, c.b)(e, null, t ?? {}));
                    return null == G ? a().then(e2, e1) : (eO.current = !0, eD(!0), G("submitting"), Promise.resolve().then(a).then(() => (G({
                        accept: "accepted",
                        decline: "declined",
                        cancel: "canceled"
                    } [e]), !0), () => (G("failed"), !1)).finally(() => {
                        eO.current = !1, eD(!1)
                    }))
                },
                eW = e => {
                    if (eq) return;
                    if (null != Z) return void Z();
                    let t = e;
                    if (eh?.required && null == t) {
                        let e = eh.options;
                        if (1 !== e.length) return void ec.current?.focus();
                        t = e[0].const
                    }
                    let a = {
                        ...eC.values
                    };
                    null != eh && (null == t ? delete a[eh.name] : (0, A.g)(a, eh.name, t));
                    let l = function(e, t, a) {
                        let l = {
                            ...t.values
                        };
                        for (let [e, a] of Object.entries(t.customDrafts)) l[e] = T(l[e], a);
                        switch (e.kind) {
                            case "formElicitation":
                                return (0, I.a)(e.schema, l);
                            case "openaiForm":
                                return (0, L.b)(e.schema, l, t.fileOptions, a);
                            case "legacyOpenAIForm":
                                return (0, P.a)(e.schema, l)
                        }
                    }(K, {
                        ...eC,
                        values: null == ep ? a : {
                            [ep]: !0
                        }
                    }, ee);
                    if (eU(l.invalidFieldNames), null == l.content) {
                        let e = l.invalidFieldNames[0],
                            t = Array.from(eo.current?.querySelectorAll("[data-mcp-form-field]") ?? []).find(t => t.dataset.mcpFormField === e),
                            a = t?.querySelector('input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), [contenteditable="true"], button:not(:disabled)');
                        (a ?? t)?.focus();
                        return
                    }
                    let n = eV("accept", l.content);
                    if (null != J || null == eg || null == ex) return;
                    let i = l.content[ex.name];
                    if ("string" != typeof i) return;
                    let s = eg.items.findIndex(e => e.id === i);
                    s < 0 || n.then(e => {
                        !1 !== e && (0, u.e)(er, {
                            hostId: B,
                            requestId: V
                        }, i, s)
                    })
                },
                eH = null == $ && ef.some(e0),
                eZ = (0, r.x)(null == J && eH ? eY : null, B);
            if (eu?.presentation != null) {
                let e;
                return j[8] !== K || j[9] !== V ? (e = JSON.stringify([V, K]), j[8] = K, j[9] = V, j[10] = e) : e = j[10], (0, l.jsx)(i.a, {
                    className: "contents",
                    children: (0, l.jsx)(N.a, {
                        presentation: eu.presentation,
                        message: K.message,
                        disabled: eq,
                        isSubmitting: e_,
                        completed: R,
                        standalone: "standalone" === q,
                        onOpen: Q,
                        onOpenInThread: Z,
                        onConfirm: eW,
                        onCancel: () => void eV("cancel")
                    }, e)
                })
            }
            if (eH && !eZ) {
                let e;
                return j[11] !== U || j[12] !== K.serverName || j[13] !== B || j[14] !== J || j[15] !== G || j[16] !== V || j[17] !== e_ ? (e = (0, l.jsx)(_.a, {
                    conversationId: U,
                    hostId: B,
                    isSubmitting: e_,
                    requestId: V,
                    serverName: K.serverName,
                    onReply: J,
                    onStandaloneResponseChange: G
                }), j[11] = U, j[12] = K.serverName, j[13] = B, j[14] = J, j[15] = G, j[16] = V, j[17] = e_, j[18] = e) : e = j[18], e
            }
            return j[19] !== Q ? (v = e => {
                "Escape" === e.key || e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || Q?.()
            }, y = e => {
                e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || Q?.()
            }, b = e => {
                (0, x.b)(e.dataTransfer) && Q?.()
            }, j[19] = Q, j[20] = b, j[21] = v, j[22] = y) : (b = j[20], v = j[21], y = j[22]), (0, l.jsx)(i.a, {
                className: "contents",
                children: (0, l.jsx)(f.a, {
                    className: "@container/request-card",
                    children: (0, l.jsxs)("form", {
                        ref: eo,
                        className: "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
                        noValidate: !0,
                        tabIndex: -1,
                        "data-codex-character-input-boundary": !0,
                        "data-codex-escape-boundary": !0,
                        "data-user-input-auto-resolution": null != Q || void 0,
                        onKeyDownCapture: v,
                        onPointerDownCapture: y,
                        onDropCapture: b,
                        onKeyDown: e => {
                            if (!e.defaultPrevented && !e.nativeEvent.isComposing && e.target instanceof HTMLElement && e.currentTarget.contains(e.target)) {
                                if ("Escape" === e.key) {
                                    e.preventDefault(), eV("cancel");
                                    return
                                }
                                if (!(eq || null == e.target.closest('button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]') && O(e, () => e.currentTarget.requestSubmit())) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && null == e.target.closest('textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]') && 1 === eF.length && /^[1-9]$/.test(e.key)) {
                                    let t = e.currentTarget.querySelectorAll('[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)')[Number(e.key) - 1];
                                    null != t && (e.preventDefault(), e.repeat || t.click())
                                }
                            }
                        },
                        onSubmit: e => {
                            e.preventDefault(), eW()
                        },
                        children: [(0, l.jsx)(eJ, {
                            isSubmitting: e_,
                            elicitation: K,
                            fieldTitle: eM?.schema.type === "boolean" ? void 0 : eM?.schema.title,
                            fieldDescription: eM?.schema.description,
                            showHeader: ev,
                            onCancel: () => void eV("cancel")
                        }), null == ep && eF.length > 0 && (0, l.jsx)("div", {
                            className: (0, s.b)("flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3", !ev && "pt-3"),
                            children: eF.map((e, t) => (0, l.jsx)(eQ, {
                                autoFocus: ed && 0 === t,
                                disabled: ei,
                                interactionDisabled: eq,
                                field: e,
                                isOnlyField: 1 === eF.length,
                                draft: eC,
                                expanded: eL === e.name,
                                hostId: B,
                                invalid: eR.includes(e.name),
                                metadataInHeader: ev && 1 === eF.length,
                                onCloseExpanded: () => eP(null),
                                onDraftChange: Z ?? eK,
                                onValueChange: Z ?? eB,
                                onPickLegacyFile: X,
                                onPickingChange: e => ez(t => t + (e ? 1 : -1)),
                                onPickFiles: $,
                                onPreview: el,
                                onViewAll: eF.length > 1 && (0, L.c)(e.schema) && eC.fileOptions[e.name].length > 1 ? Z ?? (() => eP(e.name)) : void 0
                            }, e.name))
                        }), null != ep ? (0, l.jsx)(w, {
                            disabled: eq,
                            isSubmitting: e_,
                            hotkeysEnabled: ed,
                            onDecline: () => void eV("decline")
                        }) : (0, l.jsx)(W, {
                            primaryActionRef: ec,
                            isSubmitting: e_,
                            autoResolution: D,
                            disabled: eq,
                            submitDisabled: eq || null != eM && eM.required && (0, P.b)(eM.schema) && !(0, P.c)(eM.schema, eS[eM.name]),
                            fieldCount: eF.length,
                            hotkeysEnabled: ed,
                            acceptOptions: null != eh ? {
                                options: eh.options,
                                required: eh.required,
                                onSelect: eW
                            } : void 0,
                            isStandardForm: em,
                            showSubmit: eM?.required !== !0 || null == eA || "string" == typeof eE && ("" !== eE || eA.some(e => e.const === eE)),
                            showHeader: ev,
                            onCancel: () => void eV("cancel"),
                            onDecline: () => void eV("decline"),
                            onDismissLegacyImagePicker: eb ? () => {
                                null == J && (0, u.b)(er, {
                                    hostId: B,
                                    requestId: V
                                }), eV("decline")
                            } : void 0,
                            onViewAll: null != eM && (0, L.c)(eM.schema) && eC.fileOptions[eM.name].length > 1 ? Z ?? (() => eP(eM.name)) : void 0
                        })]
                    })
                })
            })
        }

        function e0(e) {
            let {
                schema: t
            } = e;
            return (0, L.c)(t) && null != t["x-openai-input"].userOptions
        }

        function e1() {
            return !1
        }

        function e2() {
            return !0
        }

        function e3(e) {
            let t, i, s = (0, n.c)(9),
                o = (0, r.y)(S.a),
                c = (0, m.a)();
            s[0] !== c || s[1] !== e.conversationId || s[2] !== e.elicitation || s[3] !== e.hostId || s[4] !== o ? (t = (t, l) => {
                Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(734793)]).then(a.bind(a, "sJLg")).then(a => {
                    let {
                        openFormPreview: n
                    } = a;
                    return n(o, {
                        hostId: e.hostId,
                        threadId: e.conversationId,
                        server: e.elicitation.serverName,
                        target: t,
                        title: l
                    })
                }).catch(e4).then(e => {
                    e || o.get(b.f).danger(c.formatMessage({
                        id: "composer.mcpFormElicitation.previewUnavailable",
                        defaultMessage: "Couldn't open preview",
                        description: "Error when a form option's expanded details cannot be opened"
                    }), {
                        errorAnalytics: {
                            toastId: "composer.mcpFormElicitation.previewUnavailable"
                        }
                    })
                })
            }, s[0] = c, s[1] = e.conversationId, s[2] = e.elicitation, s[3] = e.hostId, s[4] = o, s[5] = t) : t = s[5];
            let d = t;
            return s[6] !== d || s[7] !== e ? (i = (0, l.jsx)(e$, {
                ...e,
                onPreview: d
            }), s[6] = d, s[7] = e, s[8] = i) : i = s[8], i
        }

        function e4() {
            return !1
        }
    }),
    MnTr: (function(e, t, a) {
        a.d(t, {
            a: () => m,
            b: () => u
        });
        var l = a("ABep"),
            n = a("QosV"),
            i = a("ULZ9"),
            s = a("on57"),
            r = a("zd8w"),
            o = a("v7qY"),
            c = "PortalBoundary-TFj9W2";
        let d = (0, r.createContext)({
            container: null
        });

        function m(e) {
            let t, a, o, m, u, p, f, h, x = (0, n.c)(20),
                {
                    children: g,
                    className: b,
                    theme: v,
                    themeClassName: y
                } = e,
                [j, w] = (0, r.useState)(null);
            x[0] !== j ? (t = () => {
                if (null == j) return;
                let e = () => {
                    let e = String(j.currentCSSZoom ?? 1);
                    j.style.getPropertyValue("--puik-portal-zoom") !== e && j.style.setProperty("--puik-portal-zoom", e)
                };
                e();
                let t = new MutationObserver(e);
                for (let e = j; null != e; e = e.parentElement) t.observe(e, {
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                });
                return () => t.disconnect()
            }, a = [j], x[0] = j, x[1] = t, x[2] = a) : (t = x[1], a = x[2]), (0, r.useLayoutEffect)(t, a), x[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                null != e && w(e)
            }, x[3] = o) : o = x[3], x[4] !== b || x[5] !== y ? (m = (0, s.b)("relative", c, y, b), x[4] = b, x[5] = y, x[6] = m) : m = x[6];
            let N = j ?? void 0;
            return x[7] !== j || x[8] !== y ? (u = {
                container: j,
                themeClassName: y
            }, x[7] = j, x[8] = y, x[9] = u) : u = x[9], x[10] !== g || x[11] !== u ? (p = (0, l.jsx)(d.Provider, {
                value: u,
                children: g
            }), x[10] = g, x[11] = u, x[12] = p) : p = x[12], x[13] !== N || x[14] !== p ? (f = (0, l.jsx)(i.a, {
                radixPortalContainer: N,
                children: p
            }), x[13] = N, x[14] = p, x[15] = f) : f = x[15], x[16] !== m || x[17] !== f || x[18] !== v ? (h = (0, l.jsx)("div", {
                ref: o,
                className: m,
                "data-theme": v,
                children: f
            }), x[16] = m, x[17] = f, x[18] = v, x[19] = h) : h = x[19], h
        }

        function u(e) {
            let t, a, m, u, p, f, h = (0, n.c)(17),
                {
                    children: x,
                    theme: g
                } = e,
                {
                    container: b,
                    themeClassName: v
                } = (0, r.useContext)(d),
                [y, j] = (0, r.useState)(null);
            h[0] !== b || h[1] !== y ? (t = () => {
                if (null == b || null == y) return;
                let e = b.ownerDocument.defaultView;
                if (null == e) return;
                let t = [];
                for (let e = b; null != e; e = e.parentElement) t.push(e);
                let a = () => {
                        let a = String(b.currentCSSZoom ?? 1),
                            l = t.map(t => e.getComputedStyle(t)),
                            n = t.some((e, t) => {
                                let a = l[t];
                                return e.hasAttribute("inert") || e.hidden || "true" === e.getAttribute("aria-hidden") || "none" === a.display || "hidden" === a.visibility || "collapse" === a.visibility || "hidden" === a.contentVisibility
                            });
                        y.style.setProperty("zoom", a), y.style.setProperty("--puik-portal-zoom", a), y.toggleAttribute("inert", n), y.toggleAttribute("hidden", n)
                    },
                    l = new MutationObserver(a),
                    n = !1,
                    i = () => {
                        let i = null != y.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]');
                        if (i !== n)
                            if (n = i, i) {
                                for (let e of (a(), t)) l.observe(e, {
                                    attributes: !0,
                                    attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"]
                                });
                                e.addEventListener("resize", a)
                            } else l.disconnect(), e.removeEventListener("resize", a)
                    },
                    s = new MutationObserver(i);
                return s.observe(y, {
                    childList: !0,
                    subtree: !0
                }), i(), () => {
                    s.disconnect(), l.disconnect(), e.removeEventListener("resize", a), y.setAttribute("hidden", ""), y.setAttribute("inert", "")
                }
            }, a = [b, y], h[0] = b, h[1] = y, h[2] = t, h[3] = a) : (t = h[2], a = h[3]), (0, r.useLayoutEffect)(t, a);
            let w = y ?? void 0;
            return h[4] !== x || h[5] !== y ? (m = "function" == typeof x ? x(y) : x, h[4] = x, h[5] = y, h[6] = m) : m = h[6], h[7] !== w || h[8] !== m ? (u = (0, l.jsx)(i.a, {
                radixPortalContainer: w,
                children: m
            }), h[7] = w, h[8] = m, h[9] = u) : u = h[9], h[10] !== b || h[11] !== g || h[12] !== v ? (p = null != b && (0, o.createPortal)((0, l.jsx)("div", {
                ref: e => {
                    null != e && j(e)
                },
                className: (0, s.b)("relative", c, "PortalSurface-LW3Uz2", v),
                "data-theme": g
            }), b.ownerDocument.body), h[10] = b, h[11] = g, h[12] = v, h[13] = p) : p = h[13], h[14] !== u || h[15] !== p ? (f = (0, l.jsxs)(l.Fragment, {
                children: [u, p]
            }), h[14] = u, h[15] = p, h[16] = f) : f = h[16], f
        }
    }),
    ULZ9: (function(e, t, a) {
        a.d(t, {
            a: () => s
        }), a("iYCA"), a("yCBR");
        var l = a("ABep"),
            n = a("QosV"),
            i = a("ylLY");

        function s(e) {
            let t, a, s = (0, n.c)(8),
                {
                    children: r,
                    linkComponent: o,
                    allowedWidgetTypes: c,
                    radixPortalContainer: d,
                    hydrationSafe: m
                } = e,
                u = void 0 === o ? "a" : o,
                p = void 0 === c ? "GA" : c,
                f = void 0 !== m && m;
            return s[0] !== p || s[1] !== f || s[2] !== u || s[3] !== d ? (t = {
                linkComponent: u,
                allowedWidgetTypes: p,
                radixPortalContainer: d,
                hydrationSafe: f
            }, s[0] = p, s[1] = f, s[2] = u, s[3] = d, s[4] = t) : t = s[4], s[5] !== r || s[6] !== t ? (a = (0, l.jsx)(i.a.Provider, {
                value: t,
                children: r
            }), s[5] = r, s[6] = t, s[7] = a) : a = s[7], a
        }
    })
};