export const __rspack_esm_id = 600060;
export const __rspack_esm_ids = [600060];
export const __webpack_modules__ = {
    nxd: (function(e, t, a) {
        var l = a("AS");
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
    vPG: (function(e, t, a) {
        var l = a("A"),
            n = a("Qo"),
            i = a("Xnl"),
            s = a("I3F"),
            r = a("zd"),
            o = a("oy"),
            c = a("Dg"),
            d = a("WNf"),
            m = a("KRW"),
            u = a("ygO"),
            p = a("OW");

        function h(e) {
            let t, a, h, f, x, g, b, v, y, j = (0, n.c)(26),
                {
                    conversationId: w,
                    hostId: N,
                    requestId: k,
                    serverName: S,
                    onReply: C,
                    onStandaloneResponseChange: F,
                    isSubmitting: M
                } = e,
                A = void 0 !== M && M,
                E = (0, i.z)(p.a),
                I = (0, m.b)(),
                [P, z] = (0, r.useState)(!1),
                O = (0, r.useRef)(!1);
            j[0] !== w || j[1] !== N || j[2] !== A || j[3] !== C || j[4] !== F || j[5] !== k || j[6] !== E ? (t = e => {
                if (A || O.current) return;
                let t = () => null != C ? C(e) : (0, c.b)(E, N).replyWithMcpServerElicitationResponse(w, k, (0, s.b)(e));
                null == F ? t() : (O.current = !0, z(!0), F("submitting"), Promise.resolve().then(t).then(() => F("decline" === e ? "declined" : "canceled"), () => F("failed")).finally(() => {
                    O.current = !1, z(!1)
                }))
            }, j[0] = w, j[1] = N, j[2] = A, j[3] = C, j[4] = F, j[5] = k, j[6] = E, j[7] = t) : t = j[7];
            let L = t;
            j[8] !== L ? (a = e => {
                "Escape" === e.key && (e.preventDefault(), L("cancel"))
            }, j[8] = L, j[9] = a) : a = j[9], j[10] !== S ? (h = (0, l.jsxs)("div", {
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
            }), j[10] = S, j[11] = h) : h = j[11], j[12] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, l.jsxs)("div", {
                className: "text-size-chat-sm text-codex-description",
                children: [(0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.a, {
                        id: "composer.openAIForm.invalidInput.dismissInstruction",
                        defaultMessage: "Dismiss the request to close it",
                        description: "Instruction for closing a form the browser cannot display"
                    })
                }), null]
            }), j[12] = f) : f = j[12], j[13] !== h ? (x = (0, l.jsxs)("div", {
                className: "flex flex-col gap-1 p-4",
                children: [h, f]
            }), j[13] = h, j[14] = x) : x = j[14];
            let T = A || P;
            return j[15] !== L ? (g = () => L("cancel"), j[15] = L, j[16] = g) : g = j[16], j[17] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, l.jsx)(o.a, {
                id: "composer.openAIForm.unsupported.dismiss",
                defaultMessage: "Dismiss",
                description: "Action for dismissing an unsupported OpenAI form request"
            }), j[17] = b) : b = j[17], j[18] !== I || j[19] !== T || j[20] !== g ? (v = (0, l.jsxs)("div", {
                className: "flex justify-end gap-2 px-4 py-3",
                children: [(0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(u.a, {
                        autoFocus: I,
                        color: "primary",
                        size: "composer",
                        disabled: T,
                        onClick: g,
                        children: b
                    })
                }), null]
            }), j[18] = I, j[19] = T, j[20] = g, j[21] = v) : v = j[21], j[22] !== v || j[23] !== a || j[24] !== x ? (y = (0, l.jsx)(d.a, {
                children: (0, l.jsxs)("div", {
                    className: "flex flex-col",
                    role: "presentation",
                    onKeyDown: a,
                    children: [x, v]
                })
            }), j[22] = v, j[23] = a, j[24] = x, j[25] = y) : y = j[25], y
        }
        a.d(t, {
            a: () => h
        })
    }),
    JEW: (function(e, t, a) {
        var l = a("A"),
            n = a("Qo"),
            i = a("on"),
            s = a("zd"),
            r = a("ygO"),
            o = a("IxW"),
            c = a("HOL"),
            d = a("bI"),
            m = a("XyF"),
            u = a("ASy");
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

        function h(e) {
            let t, a, h, f, x, g, b, v, y, j, w, N = (0, n.c)(38),
                {
                    ariaInvalid: k,
                    ariaLabel: S,
                    backLabel: C,
                    children: F,
                    forwardLabel: M,
                    header: A,
                    layout: E,
                    role: I,
                    shouldUseReducedMotion: P
                } = e,
                z = void 0 === E ? "form" : E,
                O = void 0 === I ? "group" : I;
            N[0] !== F ? (t = s.Children.count(F), N[0] = F, N[1] = t) : t = N[1];
            let L = t,
                T = (0, s.useRef)(null),
                [D, _] = (0, s.useState)(!1),
                [q, R] = (0, s.useState)(!1);
            N[2] === Symbol.for("react.memo_cache_sentinel") ? (a = e => {
                let {
                    maximum: t,
                    minimum: a
                } = (0, o.a)(e);
                _(e.scrollLeft > a + 1), R(e.scrollLeft < t - 1)
            }, N[2] = a) : a = N[2];
            let U = (0, d.a)(a),
                K = e => {
                    if (T.current = e, null == e || 0 === L || (U(e), "u" < typeof ResizeObserver)) return;
                    let t = new ResizeObserver(() => U(e));
                    return t.observe(e), null != e.firstElementChild && t.observe(e.firstElementChild), null != e.lastElementChild && t.observe(e.lastElementChild), () => {
                        t.disconnect(), T.current = null
                    }
                },
                W = "form" === z && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                V = "gallery" === z && "gap-2";
            N[3] !== W || N[4] !== V ? (h = (0, i.b)("flex items-center", W, V), N[3] = W, N[4] = V, N[5] = h) : h = N[5];
            let B = [-1, 1].map(e => {
                let t = -1 === e ? D : q,
                    a = -1 === e ? C : M;
                return (0, l.jsx)(r.a, {
                    className: (0, i.b)("pointer-events-auto", "form" === z && !t && "invisible"),
                    "aria-label": a,
                    ...p[z],
                    disabled: !t,
                    onClick: () => {
                        let t;
                        null != (t = T.current) && t.scrollTo({
                            left: (0, o.b)(t, e),
                            behavior: P ? "instant" : "smooth"
                        })
                    },
                    radius: "compact" === z ? void 0 : "full",
                    title: a,
                    uniform: !0,
                    children: (0, l.jsx)(c.a, {
                        className: -1 === e ? "rotate-180" : void 0,
                        asset: "gallery" === z ? m.a : u.a
                    })
                }, e)
            });
            N[6] !== h || N[7] !== B ? (f = (0, l.jsx)("div", {
                className: h,
                children: B
            }), N[6] = h, N[7] = B, N[8] = f) : f = N[8];
            let H = f,
                Z = "gallery" === z && "gap-4",
                G = "compact" === z && "gap-2",
                Q = "form" === z && "gap-1.5";
            N[9] !== Z || N[10] !== G || N[11] !== Q ? (x = (0, i.b)("flex min-w-0 flex-col", Z, G, Q), N[9] = Z, N[10] = G, N[11] = Q, N[12] = x) : x = N[12], N[13] !== A || N[14] !== z || N[15] !== H ? (g = null != A || "form" !== z ? (0, l.jsxs)("div", {
                className: (0, i.b)("flex min-w-0 items-center", "form" === z && "gap-1 px-4 py-1.5", "compact" === z && "gap-3", "gallery" === z && "min-h-9 gap-3"),
                children: [(0, l.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: A
                }), "form" !== z ? H : null]
            }) : null, N[13] = A, N[14] = z, N[15] = H, N[16] = g) : g = N[16];
            let J = "form" === z ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 overscroll-x-contain py-1.5",
                Y = "gallery" === z && "gap-3",
                X = "compact" === z && "gap-2";
            N[17] !== J || N[18] !== Y || N[19] !== X ? (b = (0, i.b)("hide-scrollbar flex overflow-x-auto", J, Y, X), N[17] = J, N[18] = Y, N[19] = X, N[20] = b) : b = N[20];
            let $ = k || void 0;
            N[21] !== U ? (v = e => U(e.currentTarget), N[21] = U, N[22] = v) : v = N[22], N[23] !== S || N[24] !== F || N[25] !== O || N[26] !== K || N[27] !== b || N[28] !== $ || N[29] !== v ? (y = (0, l.jsx)("div", {
                ref: K,
                className: b,
                "data-horizontal-scroll": !0,
                role: O,
                "aria-invalid": $,
                "aria-label": S,
                onScroll: v,
                children: F
            }), N[23] = S, N[24] = F, N[25] = O, N[26] = K, N[27] = b, N[28] = $, N[29] = v, N[30] = y) : y = N[30];
            let ee = "form" === z ? H : null;
            return N[31] !== y || N[32] !== ee ? (j = (0, l.jsxs)("div", {
                className: "relative min-w-0",
                children: [y, ee]
            }), N[31] = y, N[32] = ee, N[33] = j) : j = N[33], N[34] !== x || N[35] !== g || N[36] !== j ? (w = (0, l.jsxs)("div", {
                className: x,
                children: [g, j]
            }), N[34] = x, N[35] = g, N[36] = j, N[37] = w) : w = N[37], w
        }
        a.d(t, {
            a: () => h
        })
    }),
    Omb: (function(e, t, a) {
        a.d(t, {
            a: () => e5
        });
        var l = a("A"),
            n = a("Qo"),
            i = a("MnT"),
            s = a("on"),
            r = a("Xnl"),
            o = a("aM"),
            c = a("I3F"),
            d = a("zd"),
            m = a("Wf"),
            u = a("Te"),
            p = a("Dg"),
            h = a("WNf"),
            f = a("KRW"),
            x = a("NyS"),
            g = a("M7"),
            b = a("SGs"),
            v = a("oy"),
            y = a("ygO"),
            j = a("jD");

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
            }), c[4] = i) : i = c[4], c[5] !== u ? (s = u && (0, l.jsx)(h.b, {
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
        var N = a("sA"),
            k = a("JN"),
            S = a("mU"),
            C = a("bf"),
            F = e => (0, l.jsxs)("svg", {
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
            M = e => (0, l.jsxs)("svg", {
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

        function A(e) {
            let t, a, i, r, o, c, u, p, h, f, x, g, b, j, w, A, P, z, O, L, T, D, _, q = (0, n.c)(71),
                {
                    presentation: R,
                    message: U,
                    disabled: K,
                    isSubmitting: W,
                    completed: V,
                    standalone: B,
                    onOpen: H,
                    onOpenInThread: Z,
                    onConfirm: G,
                    onCancel: Q
                } = e,
                J = void 0 !== V && V,
                Y = void 0 !== B && B,
                X = (0, m.a)(),
                [$, ee] = (0, d.useState)(Y);
            q[0] !== Y ? (t = (0, s.b)("flex flex-wrap items-center gap-2", {
                "justify-center": Y
            }), q[0] = Y, q[1] = t) : t = q[1];
            let et = "shield" === R.icon ? "actionChipWithIcon" : "actionChip",
                ea = K && !J;
            q[2] !== J || q[3] !== H || q[4] !== Z ? (a = () => {
                null == Z || J ? (H?.(), ee(!0)) : Z()
            }, q[2] = J, q[3] = H, q[4] = Z, q[5] = a) : a = q[5], q[6] !== R.icon ? (i = "shield" === R.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, l.jsx)(M, {
                    "aria-hidden": "true"
                })
            }), q[6] = R.icon, q[7] = i) : i = q[7], q[8] !== R.triggerLabel ? (r = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: R.triggerLabel
            }), q[8] = R.triggerLabel, q[9] = r) : r = q[9], q[10] !== J || q[11] !== X ? (o = J && (0, l.jsx)(C.Tb, {
                "aria-label": X.formatMessage({
                    id: "mcpConfirmation.completed",
                    defaultMessage: "Completed",
                    description: "Accessible label for a custom-rule request that was acted upon, without asserting that the rule change succeeded"
                })
            }), q[10] = J, q[11] = X, q[12] = o) : o = q[12], q[13] !== W || q[14] !== et || q[15] !== ea || q[16] !== a || q[17] !== i || q[18] !== r || q[19] !== o ? (c = (0, l.jsxs)(N.a, {
                color: "conversationAccentSubtle",
                size: et,
                radius: "messageBubble",
                type: "button",
                className: "max-w-full",
                disabled: ea,
                loading: W,
                "aria-haspopup": "dialog",
                onClick: a,
                children: [i, r, o]
            }), q[13] = W, q[14] = et, q[15] = ea, q[16] = a, q[17] = i, q[18] = r, q[19] = o, q[20] = c) : c = q[20], q[21] !== c || q[22] !== t ? (u = (0, l.jsx)("div", {
                "data-mcp-confirmation-chip": !0,
                className: t,
                children: c
            }), q[21] = c, q[22] = t, q[23] = u) : u = q[23], q[24] === Symbol.for("react.memo_cache_sentinel") ? (p = {
                "aria-describedby": void 0
            }, q[24] = p) : p = q[24], q[25] !== J || q[26] !== K || q[27] !== G ? (h = e => {
                e.preventDefault(), K || J || (G(), ee(!1))
            }, q[25] = J, q[26] = K, q[27] = G, q[28] = h) : h = q[28], q[29] !== R.icon ? (f = "shield" === R.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, l.jsx)(F, {
                    "aria-hidden": "true"
                })
            }), q[29] = R.icon, q[30] = f) : f = q[30], q[31] !== R.title ? (x = (0, l.jsx)(k.e, {
                variant: "confirmation",
                className: "text-center",
                children: R.title
            }), q[31] = R.title, q[32] = x) : x = q[32], q[33] !== f || q[34] !== x ? (g = (0, l.jsxs)("div", {
                className: "flex flex-col items-center gap-3",
                children: [f, x]
            }), q[33] = f, q[34] = x, q[35] = g) : g = q[35], q[36] !== R.sections ? (b = R.sections && (0, l.jsx)("div", {
                className: "flex flex-col gap-5 select-text",
                children: R.sections.map(I)
            }), q[36] = R.sections, q[37] = b) : b = q[37], q[38] !== U || q[39] !== R.fields || q[40] !== R.sections ? (j = !R.sections && (R.fields ? (0, l.jsx)("dl", {
                className: "flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text",
                children: R.fields.map(E)
            }) : (0, l.jsx)("div", {
                className: "text-sm break-words whitespace-pre-wrap text-default select-text",
                children: U
            })), q[38] = U, q[39] = R.fields, q[40] = R.sections, q[41] = j) : j = q[41];
            let el = R.destructive ? "dangerSolid" : "primary",
                en = K || J;
            return q[42] !== R.confirmLabel ? (w = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: R.confirmLabel
            }), q[42] = R.confirmLabel, q[43] = w) : w = q[43], q[44] !== W || q[45] !== el || q[46] !== en || q[47] !== w ? (A = (0, l.jsx)(S.c, {
                children: (0, l.jsx)(y.a, {
                    color: el,
                    size: "modalPrimary",
                    radius: "full",
                    type: "submit",
                    disabled: en,
                    loading: W,
                    children: w
                })
            }), q[44] = W, q[45] = el, q[46] = en, q[47] = w, q[48] = A) : A = q[48], q[49] !== J || q[50] !== K || q[51] !== Q ? (P = () => {
                K || J || Q?.(), ee(!1)
            }, q[49] = J, q[50] = K, q[51] = Q, q[52] = P) : P = q[52], q[53] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, l.jsx)(v.a, {
                id: "mcpConfirmation.cancel",
                defaultMessage: "Cancel",
                description: "Cancel a proposed change or close its completed preview"
            }), q[53] = z) : z = q[53], q[54] !== P ? (O = (0, l.jsx)(S.c, {
                children: (0, l.jsx)(y.a, {
                    color: "secondary",
                    size: "modalPrimary",
                    radius: "full",
                    type: "button",
                    onClick: P,
                    children: z
                })
            }), q[54] = P, q[55] = O) : O = q[55], q[56] !== A || q[57] !== O ? (L = (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [A, O]
            }), q[56] = A, q[57] = O, q[58] = L) : L = q[58], q[59] !== h || q[60] !== g || q[61] !== b || q[62] !== j || q[63] !== L ? (T = (0, l.jsxs)(S.b, {
                as: "form",
                size: "viewport",
                variant: "confirmation",
                onSubmit: h,
                children: [g, b, j, L]
            }), q[59] = h, q[60] = g, q[61] = b, q[62] = j, q[63] = L, q[64] = T) : T = q[64], q[65] !== $ || q[66] !== T ? (D = (0, l.jsx)(k.b, {
                open: $,
                onOpenChange: ee,
                widthHint: 480,
                variant: "confirmation",
                closeButtonSize: "large",
                contentProps: p,
                children: T
            }), q[65] = $, q[66] = T, q[67] = D) : D = q[67], q[68] !== u || q[69] !== D ? (_ = (0, l.jsxs)(l.Fragment, {
                children: [u, D]
            }), q[68] = u, q[69] = D, q[70] = _) : _ = q[70], _
        }

        function E(e, t) {
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

        function I(e, t) {
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
        var P = a("nxd"),
            z = a("OW"),
            O = a("tSE"),
            L = a("B8"),
            T = a("uj"),
            D = a("pH"),
            _ = a("AqH"),
            q = a("q4"),
            R = a("K0r"),
            U = a("IR");

        function K(e) {
            let t = (0, D.c)(e.schema);
            return {
                kind: e.kind,
                customDrafts: {},
                values: (0, D.a)(t.flatMap(e => {
                    let {
                        schema: t,
                        ...a
                    } = e;
                    return (0, q.c)(t) || (0, R.b)(t) ? [] : [{
                        ...a,
                        schema: t
                    }]
                })),
                fileOptions: Object.fromEntries(t.flatMap(e => {
                    let {
                        name: t,
                        schema: a
                    } = e;
                    return (0, q.c)(a) ? [
                        [t, (0, q.a)(a)]
                    ] : []
                }))
            }
        }

        function W(e, t) {
            return t?.selected && t.text.length > 0 && Array.isArray(e) ? [...e, t.text] : e
        }
        var V = a("tO3");

        function B(e, t) {
            return !e.defaultPrevented && !e.nativeEvent.isComposing && 229 !== e.nativeEvent.keyCode && !!(0, V.b)(e.nativeEvent, "Enter") && (e.preventDefault(), e.repeat || t(), !0)
        }
        var H = a("vPG"),
            Z = a("g2G"),
            G = a("Cq"),
            Q = a("bq"),
            J = a("kpM");

        function Y(e) {
            let t, a = (0, n.c)(4),
                {
                    options: i,
                    disabled: s,
                    onAccept: r
                } = e;
            return a[0] !== s || a[1] !== r || a[2] !== i ? (t = (0, l.jsx)("div", {
                className: "me-auto max-w-full min-w-0",
                children: 1 === i.length ? (0, l.jsx)(G.a, {
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
                }) : (0, l.jsx)(Q.a, {
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
                        }), (0, l.jsx)(J.a, {
                            className: "size-3"
                        })]
                    }),
                    children: i.map(e => (0, l.jsx)(Q.c.Item, {
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

        function X(e) {
            let t, a, i, r, o, c, d, m = (0, n.c)(43),
                {
                    autoResolution: u,
                    disabled: p,
                    isSubmitting: f,
                    submitDisabled: x,
                    acceptOptions: g,
                    primaryActionRef: b,
                    fieldCount: w,
                    hotkeysEnabled: N,
                    isStandardForm: k,
                    showSubmit: S,
                    showHeader: F,
                    onCancel: M,
                    onDecline: A,
                    onDismissLegacyImagePicker: E,
                    onViewAll: I
                } = e,
                P = void 0 !== f && f,
                z = g?.required === !0 && g.options.length > 1,
                O = g?.required ? g.options[0] : void 0;
            m[0] !== g?.options || m[1] !== O ? (t = g?.options.slice(+(null != O)) ?? [], m[0] = g?.options, m[1] = O, m[2] = t) : t = m[2];
            let L = t;
            if (null != E) {
                let e, t = u?.deadlineMs ?? "no-deadline",
                    n = u?.deadlineMs,
                    i = u?.nowMs;
                m[3] !== P || m[4] !== E || m[5] !== t || m[6] !== n || m[7] !== i ? (e = (0, l.jsx)(Z.a, {
                    disabled: P,
                    deadlineMs: n,
                    nowMs: i,
                    variant: "button",
                    onDismiss: E
                }, t), m[3] = P, m[4] = E, m[5] = t, m[6] = n, m[7] = i, m[8] = e) : e = m[8], a = e
            } else {
                let e, t;
                m[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.deny",
                    defaultMessage: "Deny",
                    description: "Declines the form without submitting its values"
                }), m[9] = e) : e = m[9], m[10] !== p || m[11] !== A ? (t = (0, l.jsx)(y.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: A,
                    children: e
                }), m[10] = p, m[11] = A, m[12] = t) : t = m[12], a = t
            }
            return m[13] !== g || m[14] !== p || m[15] !== I ? (i = null != I ? (0, l.jsx)("div", {
                className: null == g ? "me-auto" : void 0,
                children: (0, l.jsxs)(y.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: I,
                    children: [(0, l.jsx)(C.Ih, {}), (0, l.jsx)(v.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })
            }) : null, m[13] = g, m[14] = p, m[15] = I, m[16] = i) : i = m[16], m[17] !== P || m[18] !== M || m[19] !== E || m[20] !== F ? (r = !F && null == E && (0, l.jsx)(y.a, {
                color: "ghost",
                size: "composer",
                disabled: P,
                onClick: M,
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.cancel",
                    defaultMessage: "Cancel",
                    description: "Cancel an MCP form when it has no header dismiss button"
                })
            }), m[17] = P, m[18] = M, m[19] = E, m[20] = F, m[21] = r) : r = m[21], m[22] !== g || m[23] !== L || m[24] !== x ? (o = null != g && L.length > 0 && (0, l.jsx)(Y, {
                options: L,
                disabled: x,
                onAccept: g.onSelect
            }), m[22] = g, m[23] = L, m[24] = x, m[25] = o) : o = m[25], m[26] !== g || m[27] !== w || m[28] !== N || m[29] !== k || m[30] !== P || m[31] !== b || m[32] !== O || m[33] !== z || m[34] !== S || m[35] !== x ? (c = (null != g || S) && (0, l.jsx)(G.a, {
                tooltipContent: O && (0, l.jsxs)(l.Fragment, {
                    children: [O.title, O.description && (0, l.jsx)("p", {
                        children: O.description
                    })]
                }),
                children: (0, l.jsxs)(y.a, {
                    autoFocus: N && 0 === w,
                    className: "max-w-full",
                    color: "primary",
                    size: "composer",
                    type: z ? "button" : "submit",
                    ref: b,
                    onClick: null != O && null != g && z ? () => g.onSelect(O.const) : void 0,
                    "aria-description": O?.description,
                    disabled: x,
                    loading: P,
                    children: [(0, l.jsx)("span", {
                        className: (0, s.b)("min-w-0 truncate", k && "text-sm font-medium"),
                        children: O?.title ?? (0, l.jsx)(v.a, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept",
                            description: "Accepts the form and submits its answers"
                        })
                    }), N && !z && (0, l.jsx)(h.b, {
                        variant: "primary",
                        children: (0, j.b)("Enter")
                    })]
                })
            }), m[26] = g, m[27] = w, m[28] = N, m[29] = k, m[30] = P, m[31] = b, m[32] = O, m[33] = z, m[34] = S, m[35] = x, m[36] = c) : c = m[36], m[37] !== a || m[38] !== i || m[39] !== r || m[40] !== o || m[41] !== c ? (d = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
                children: [i, r, o, a, c]
            }), m[37] = a, m[38] = i, m[39] = r, m[40] = o, m[41] = c, m[42] = d) : d = m[42], d
        }
        var $ = a("Wy"),
            ee = a.n($),
            et = a("Qr2"),
            ea = a("zLI"),
            el = a("E6P"),
            en = a("rq"),
            ei = a("ue8"),
            es = a("zS"),
            er = a.p + "assets/icon.6b02567b2b.png",
            eo = a.p + "assets/icon.4e392f38ad.png",
            ec = a.p + "assets/icon.9b2a0253b8.png";
        let ed = {
            "application/msword": er,
            "application/vnd.google-apps.document": er,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": er,
            "text/markdown": er,
            "text/plain": er,
            "application/vnd.google-apps.presentation": eo,
            "application/vnd.ms-powerpoint": eo,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": eo,
            "application/vnd.google-apps.spreadsheet": ec,
            "application/vnd.ms-excel": ec,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ec,
            "text/csv": ec,
            "text/tab-separated-values": ec
        };

        function em(e) {
            let t, a, i, r, o, c = (0, n.c)(22),
                {
                    layout: m,
                    src: u,
                    mimeType: p
                } = e,
                h = void 0 === m ? "thumbnail" : m,
                [f, x] = (0, d.useState)(),
                g = null != u && URL.canParse(u) && "https:" === new URL(u).protocol ? u : void 0,
                {
                    safeUrl: b
                } = (0, ei.c)(g, null != g);
            c[0] !== b || c[1] !== u ? (t = null != u && (0, es.c)(u) ? u : b, c[0] = b, c[1] = u, c[2] = t) : t = c[2];
            let v = t,
                y = p?.split(";")[0]?.trim().toLowerCase(),
                j = ed[y ?? ""],
                w = "icon" === h ? "size-5" : "size-10";
            c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(C.Mc, {}), c[3] = a) : a = c[3];
            let N = a;
            if (null != j) {
                let e, t;
                c[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(C.Mc, {}), c[4] = e) : e = c[4], c[5] !== w || c[6] !== j ? (t = (0, l.jsx)(el.a, {
                    className: w,
                    alt: "",
                    fallback: e,
                    src: j
                }), c[5] = w, c[6] = j, c[7] = t) : t = c[7], N = t
            } else if ("text/html" === y || "application/xhtml+xml" === y) {
                let e;
                c[8] !== w ? (e = (0, l.jsx)(en.a, {
                    className: w
                }), c[8] = w, c[9] = e) : e = c[9], N = e
            }
            let k = "card" === h || "card-icon" === h,
                S = "icon" === h,
                F = "thumbnail" === h;
            return c[10] !== k || c[11] !== S || c[12] !== F ? (i = (0, s.b)("flex items-center justify-center overflow-hidden", {
                "h-full w-full": k,
                "size-5 shrink-0 rounded-xs": S,
                "size-10 shrink-0 rounded-md bg-surface": F
            }), c[10] = k, c[11] = S, c[12] = F, c[13] = i) : i = c[13], c[14] !== f || c[15] !== N || c[16] !== v || c[17] !== h ? (r = null == v || f === v ? N : (0, l.jsx)("img", {
                alt: "",
                className: (0, s.b)("card-icon" === h ? "size-10" : "h-full w-full", "icon" === h || "card-icon" === h ? "object-contain" : "object-scale-down", "card" === h && "block"),
                decoding: "async",
                draggable: !1,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: v,
                onError: () => x(v)
            }), c[14] = f, c[15] = N, c[16] = v, c[17] = h, c[18] = r) : r = c[18], c[19] !== i || c[20] !== r ? (o = (0, l.jsx)("span", {
                className: i,
                children: r
            }), c[19] = i, c[20] = r, c[21] = o) : o = c[21], o
        }

        function eu(e) {
            let t, a, i, s, r, o, c, m, u = (0, n.c)(61),
                {
                    autoFocus: p,
                    submitOnEnter: h,
                    showOptionNumbers: f,
                    customOption: x,
                    invalid: g,
                    multiple: b,
                    options: v,
                    value: y,
                    onChange: j
                } = e,
                w = void 0 === h || h,
                N = (0, d.useId)(),
                k = (void 0 === f || f) && v.length > 1,
                S = b ? et.a : et.b,
                C = "string" == typeof y ? y : void 0;
            u[0] !== y ? (t = Array.isArray(y) ? y : [], u[0] = y, u[1] = t) : t = u[1];
            let F = t;
            u[2] !== v ? (a = v.some(ep), u[2] = v, u[3] = a) : a = u[3];
            let M = a;
            u[4] !== b || u[5] !== v || u[6] !== C ? (i = b ? 0 : Math.max(0, v.findIndex(e => e.const === C)), u[4] = b, u[5] = v, u[6] = C, u[7] = i) : i = u[7];
            let A = i;
            u[8] !== x || u[9] !== b || u[10] !== j || u[11] !== v || u[12] !== w ? (s = e => {
                let t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) || !t.matches('input[type="radio"], button[role="checkbox"]') || B(e, () => {
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
            if (u[14] !== S || u[15] !== p || u[16] !== x?.selected || u[17] !== A || u[18] !== M || u[19] !== N || u[20] !== g || u[21] !== b || u[22] !== j || u[23] !== v || u[24] !== C || u[25] !== F || u[26] !== k) {
                let e;
                u[28] !== S || u[29] !== p || u[30] !== x?.selected || u[31] !== A || u[32] !== M || u[33] !== N || u[34] !== g || u[35] !== b || u[36] !== j || u[37] !== C || u[38] !== F || u[39] !== k ? (e = (e, t) => {
                    let a = F.indexOf(e.const),
                        n = b ? -1 !== a : !x?.selected && C === e.const;
                    return (0, l.jsxs)(S, {
                        autoFocus: p && !x?.selected && t === A,
                        checked: n,
                        invalid: g,
                        name: N,
                        type: b ? "checkbox" : "radio",
                        value: e.const,
                        onChange: () => {
                            b ? j(n ? F.filter((e, t) => t !== a) : [...F, e.const]) : j(e.const)
                        },
                        children: [!b && (0, l.jsx)(et.c, {
                            selected: n,
                            showNumber: k,
                            variant: "number",
                            index: t + 1,
                            verticalAlignment: "start"
                        }), M ? (0, l.jsx)(em, {
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
                }, u[28] = S, u[29] = p, u[30] = x?.selected, u[31] = A, u[32] = M, u[33] = N, u[34] = g, u[35] = b, u[36] = j, u[37] = C, u[38] = F, u[39] = k, u[40] = e) : e = u[40], r = v.map(e), u[14] = S, u[15] = p, u[16] = x?.selected, u[17] = A, u[18] = M, u[19] = N, u[20] = g, u[21] = b, u[22] = j, u[23] = v, u[24] = C, u[25] = F, u[26] = k, u[27] = r
            } else r = u[27];
            return u[41] !== x || u[42] !== g || u[43] !== b || u[44] !== j || u[45] !== v || u[46] !== F ? (o = null != x && b ? F.map((e, t) => v.some(t => t.const === e) && F.indexOf(e) === t ? null : (0, l.jsx)(et.a, {
                autoFocus: !1,
                checked: !0,
                invalid: g,
                onChange: () => j(F.filter((e, a) => a !== t)),
                children: (0, l.jsx)("span", {
                    className: "min-w-0 text-sm font-medium wrap-anywhere",
                    children: v.find(t => t.const === e)?.title ?? e
                })
            }, t)) : null, u[41] = x, u[42] = g, u[43] = b, u[44] = j, u[45] = v, u[46] = F, u[47] = o) : o = u[47], u[48] !== S || u[49] !== p || u[50] !== x || u[51] !== N || u[52] !== g || u[53] !== b || u[54] !== v.length ? (c = null != x ? (0, l.jsx)("div", {
                "data-mcp-form-custom-choice": !0,
                children: (0, l.jsx)(S, {
                    accessibilityLabel: x.label,
                    autoFocus: p && (0 === v.length || x.selected),
                    checked: x.selected,
                    invalid: g,
                    name: N,
                    type: b ? "checkbox" : "radio",
                    onChange: () => x.onSelect(!b || !x.selected),
                    editor: x.editor,
                    children: !b && (0, l.jsx)(et.c, {
                        selected: x.selected,
                        variant: "custom"
                    })
                })
            }) : null, u[48] = S, u[49] = p, u[50] = x, u[51] = N, u[52] = g, u[53] = b, u[54] = v.length, u[55] = c) : c = u[55], u[56] !== E || u[57] !== r || u[58] !== o || u[59] !== c ? (m = (0, l.jsxs)("div", {
                className: "flex flex-col gap-1",
                "data-mcp-form-choices": !0,
                role: "group",
                onKeyDownCapture: E,
                children: [r, o, c]
            }), u[56] = E, u[57] = r, u[58] = o, u[59] = c, u[60] = m) : m = u[60], m
        }

        function ep(e) {
            return null != e["x-openai-thumbnail"]
        }

        function eh(e) {
            let t, a, i, s, r, o, c = (0, n.c)(29),
                {
                    schema: d,
                    value: m
                } = e;
            if ("array" === d.type && Array.isArray(m) && m.length >= Number(d.minItems ?? 0) && (null == d.maxItems || m.length <= Number(d.maxItems)) && "type" in d.items && "string" === d.items.type && !("x-openai-input" in d.items)) {
                let e;
                return c[0] !== d.items ? (e = (0, l.jsx)(eh, {
                    schema: d.items
                }), c[0] = d.items, c[1] = e) : e = c[1], e
            }
            let u = "string" !== d.type || "x-openai-input" in d ? null : d,
                p = "number" === d.type || "integer" === d.type ? d : null,
                h = p?.minimum,
                f = p?.maximum;
            "array" === d.type ? (h = null == d.minItems || 0 === Number(d.minItems) ? void 0 : Number(d.minItems), f = null == d.maxItems ? void 0 : Number(d.maxItems)) : null != u && ("minLength" in u && (h = u.minLength || void 0), "maxLength" in u && (f = u.maxLength));
            let x = "none";
            null != h && null != f ? x = h === f ? "exact" : "both" : null != h ? x = "minimum" : null != f && (x = "maximum");
            let g = null != u && "format" in u ? u.format : void 0;
            return c[2] !== x || c[3] !== f || c[4] !== h || c[5] !== d.type ? (t = "array" === d.type && "none" !== x ? (0, l.jsx)(v.a, {
                id: "composer.mcpFormElicitation.selectionCount",
                defaultMessage: "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                description: "Number of choices or files allowed in an MCP form; bounds specifies an exact count, a range, a minimum, or a maximum",
                values: {
                    bounds: x,
                    minimum: h,
                    maximum: f
                }
            }) : null, c[2] = x, c[3] = f, c[4] = h, c[5] = d.type, c[6] = t) : t = c[6], c[7] !== x || c[8] !== f || c[9] !== h || c[10] !== u ? (a = null != u && "none" !== x ? (0, l.jsx)("div", {
                children: (0, l.jsx)(v.a, {
                    id: "composer.mcpFormElicitation.textLength",
                    defaultMessage: "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                    description: "Text length allowed in an MCP form; bounds specifies an exact length, a range, a minimum, or a maximum",
                    values: {
                        bounds: x,
                        minimum: h,
                        maximum: f
                    }
                })
            }) : null, c[7] = x, c[8] = f, c[9] = h, c[10] = u, c[11] = a) : a = c[11], c[12] !== x || c[13] !== f || c[14] !== h || c[15] !== p ? (i = null != p ? (0, l.jsx)(v.a, {
                id: "composer.mcpFormElicitation.numberRange",
                defaultMessage: "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                description: "Numeric value allowed in an MCP form; kind distinguishes whole numbers from decimals, and bounds specifies an exact value, a range, a minimum, a maximum, or no limit",
                values: {
                    kind: p.type,
                    bounds: x,
                    minimum: h,
                    maximum: f
                }
            }) : null, c[12] = x, c[13] = f, c[14] = h, c[15] = p, c[16] = i) : i = c[16], c[17] !== g ? (s = null != g ? (0, l.jsx)("div", {
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

        function ef(e) {
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
                    maxLength: h,
                    value: f,
                    onChange: x,
                    onKeyDown: g,
                    onFocus: b
                } = e,
                v = void 0 !== o && o,
                y = void 0 === u ? "default" : u,
                j = (h ?? 0) >= 160,
                w = "choice" === y ? "block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary" : "w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger";
            return a[0] !== r || a[1] !== v || a[2] !== w || a[3] !== p || a[4] !== i || a[5] !== c || a[6] !== j || a[7] !== d || a[8] !== x || a[9] !== b || a[10] !== g || a[11] !== m || a[12] !== f || a[13] !== y ? (t = null == p ? (0, l.jsx)("textarea", {
                id: i,
                ref: r ? ex : void 0,
                autoFocus: r,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: m,
                className: (0, s.b)(w, "[field-sizing:content] max-h-48 resize-none overflow-y-auto", "default" === y && "py-2", j ? "min-h-20" : "default" === y && "min-h-8"),
                rows: j ? 3 : 1,
                value: f,
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
                value: f,
                onChange: e => x(e.currentTarget.value),
                onKeyDown: g,
                onFocus: b
            }), a[0] = r, a[1] = v, a[2] = w, a[3] = p, a[4] = i, a[5] = c, a[6] = j, a[7] = d, a[8] = x, a[9] = b, a[10] = g, a[11] = m, a[12] = f, a[13] = y, a[14] = t) : t = a[14], t
        }

        function ex(e) {
            null != e && e.setSelectionRange(e.value.length, e.value.length)
        }

        function eg(e) {
            let t, a, i, s, r, o, c, d, u, p, h, f, x, g = (0, n.c)(62),
                {
                    autoFocus: b,
                    showOptionNumbers: v,
                    disabled: y,
                    label: j,
                    format: w,
                    maxLength: N,
                    invalid: k,
                    multiple: S,
                    options: C,
                    value: F,
                    draft: M,
                    onDraftChange: A,
                    onChange: E
                } = e,
                I = void 0 === v || v,
                P = (0, m.a)(),
                z = S || "string" != typeof F || C.some(e => e.const === F) ? "" : F;
            g[0] !== M || g[1] !== z ? (t = M ?? {
                text: z,
                selected: "" !== z
            }, g[0] = M, g[1] = z, g[2] = t) : t = g[2];
            let O = t;
            g[3] !== P ? (a = P.formatMessage({
                id: "composer.mcpFormElicitation.customChoice",
                defaultMessage: "Something else",
                description: "The final choice in a form field, where the user can type their own answer"
            }), g[3] = P, g[4] = a) : a = g[4];
            let L = a;
            g[5] !== O || g[6] !== S || g[7] !== E || g[8] !== A ? (i = e => {
                e !== O.selected && (A({
                    ...O,
                    selected: e
                }), S || E(e ? O.text : ""))
            }, g[5] = O, g[6] = S, g[7] = E, g[8] = A, g[9] = i) : i = g[9];
            let T = i;
            g[10] !== O.selected || g[11] !== O.text || g[12] !== E || g[13] !== A || g[14] !== F ? (s = () => {
                O.selected && "" !== O.text && (E([...Array.isArray(F) ? F : [], O.text]), A({
                    text: "",
                    selected: !1
                }))
            }, g[10] = O.selected, g[11] = O.text, g[12] = E, g[13] = A, g[14] = F, g[15] = s) : s = g[15];
            let D = s;
            g[16] !== O || g[17] !== S || g[18] !== E || g[19] !== A ? (r = e => {
                S || A({
                    ...O,
                    selected: !1
                }), E(e)
            }, g[16] = O, g[17] = S, g[18] = E, g[19] = A, g[20] = r) : r = g[20];
            let _ = O.selected;
            return g[21] !== P ? (o = P.formatMessage({
                id: "composer.mcpFormElicitation.customPlaceholder",
                defaultMessage: "Or write your own response",
                description: "Placeholder for a custom form response"
            }), g[21] = P, g[22] = o) : o = g[22], g[23] !== T ? (c = () => T(!0), g[23] = T, g[24] = c) : c = g[24], g[25] !== S || g[26] !== E || g[27] !== A ? (d = e => {
                A({
                    text: e,
                    selected: !0
                }), S || E(e)
            }, g[25] = S, g[26] = E, g[27] = A, g[28] = d) : d = g[28], g[29] !== D || g[30] !== O.selected || g[31] !== O.text || g[32] !== S ? (u = e => {
                if (!S) {
                    "date" !== e.currentTarget.type && B(e, () => e.currentTarget.form?.requestSubmit());
                    return
                }
                O.selected && "" !== O.text && B(e, D) && e.stopPropagation()
            }, g[29] = D, g[30] = O.selected, g[31] = O.text, g[32] = S, g[33] = u) : u = g[33], g[34] !== O.text || g[35] !== y || g[36] !== w || g[37] !== k || g[38] !== j || g[39] !== N || g[40] !== d || g[41] !== u || g[42] !== o || g[43] !== c ? (p = (0, l.jsx)(ef, {
                autoFocus: !1,
                disabled: y,
                label: j,
                placeholder: o,
                variant: "choice",
                invalid: k,
                format: w,
                maxLength: N,
                value: O.text,
                onFocus: c,
                onChange: d,
                onKeyDown: u
            }), g[34] = O.text, g[35] = y, g[36] = w, g[37] = k, g[38] = j, g[39] = N, g[40] = d, g[41] = u, g[42] = o, g[43] = c, g[44] = p) : p = g[44], g[45] !== O.selected || g[46] !== L || g[47] !== T || g[48] !== p ? (h = {
                label: L,
                selected: _,
                onSelect: T,
                editor: p
            }, g[45] = O.selected, g[46] = L, g[47] = T, g[48] = p, g[49] = h) : h = g[49], g[50] !== b || g[51] !== k || g[52] !== S || g[53] !== C || g[54] !== I || g[55] !== h || g[56] !== r || g[57] !== F ? (f = (0, l.jsx)(eu, {
                autoFocus: b,
                submitOnEnter: !1,
                showOptionNumbers: I,
                invalid: k,
                multiple: S,
                options: C,
                value: F,
                onChange: r,
                customOption: h
            }), g[50] = b, g[51] = k, g[52] = S, g[53] = C, g[54] = I, g[55] = h, g[56] = r, g[57] = F, g[58] = f) : f = g[58], g[59] !== y || g[60] !== f ? (x = (0, l.jsx)("fieldset", {
                disabled: y,
                className: "min-w-0",
                children: f
            }), g[59] = y, g[60] = f, g[61] = x) : x = g[61], x
        }

        function eb(e) {
            let t, a, i, r = (0, n.c)(101),
                {
                    autoFocus: o,
                    showOptionNumbers: c,
                    disabled: u,
                    field: p,
                    hideLabel: h,
                    hideDescription: f,
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
            r[0] !== p.name || r[1] !== p.schema.title ? (t = p.schema.title ?? ee()(p.name), r[0] = p.name, r[1] = p.schema.title, r[2] = t) : t = r[2];
            let S = t,
                C = !h && null != p.schema.title,
                F = void 0 !== f && f ? null : p.schema.description ?? null,
                M = "boolean" === p.schema.type && p.required && null == p.schema.default;
            r[3] !== p.schema || r[4] !== M ? (a = "array" === p.schema.type || (0, D.e)(p.schema) || M, r[3] = p.schema, r[4] = M, r[5] = a) : a = r[5];
            let A = a,
                E = "array" === p.schema.type ? p.schema.items : p.schema,
                I = A && (0, D.f)(p.schema) ? E : null;
            r[6] !== b || r[7] !== p.schema || r[8] !== x || r[9] !== A || r[10] !== g ? (i = x ? (0, l.jsx)("div", {
                className: (0, s.b)("pt-1 text-size-chat-sm text-danger", (A || "boolean" === p.schema.type) && "px-2"),
                children: (0, l.jsx)(eh, {
                    schema: p.schema,
                    value: W(g, b)
                })
            }) : null, r[6] = b, r[7] = p.schema, r[8] = x, r[9] = A, r[10] = g, r[11] = i) : i = r[11];
            let P = i;
            if ("array" === p.schema.type || (0, D.e)(p.schema) || M) {
                let e, t, a, n;
                return r[12] !== S || r[13] !== C ? (e = C && (0, l.jsx)("legend", {
                    className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                    children: S
                }), r[12] = S, r[13] = C, r[14] = e) : e = r[14], r[15] !== F ? (t = (0, l.jsx)(ew, {
                    description: F
                }), r[15] = F, r[16] = t) : t = r[16], r[17] !== o || r[18] !== b || r[19] !== w || r[20] !== p.schema || r[21] !== k || r[22] !== x || r[23] !== S || r[24] !== y || r[25] !== v || r[26] !== M || r[27] !== j || r[28] !== I || r[29] !== g ? (a = null != I ? (0, l.jsx)(eg, {
                    showOptionNumbers: j,
                    autoFocus: o,
                    disabled: w,
                    label: S,
                    format: "format" in I ? I.format : void 0,
                    maxLength: "maxLength" in I ? I.maxLength : void 0,
                    invalid: x,
                    multiple: "array" === p.schema.type,
                    options: (0, D.d)(p.schema),
                    value: g,
                    draft: b,
                    onDraftChange: v,
                    onChange: y
                }) : (0, l.jsx)(eu, {
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
                    }] : (0, D.d)(p.schema),
                    value: M && "boolean" == typeof g ? String(g) : g,
                    onChange: M ? e => y("true" === e) : y
                }), r[17] = o, r[18] = b, r[19] = w, r[20] = p.schema, r[21] = k, r[22] = x, r[23] = S, r[24] = y, r[25] = v, r[26] = M, r[27] = j, r[28] = I, r[29] = g, r[30] = a) : a = r[30], r[31] !== P || r[32] !== S || r[33] !== e || r[34] !== t || r[35] !== a ? (n = (0, l.jsxs)("fieldset", {
                    "aria-label": S,
                    className: "flex flex-col gap-1",
                    children: [e, t, a, P]
                }), r[31] = P, r[32] = S, r[33] = e, r[34] = t, r[35] = a, r[36] = n) : n = r[36], n
            }
            switch (p.schema.type) {
                case "string": {
                    let e, t, a, n;
                    r[37] !== N || r[38] !== S || r[39] !== C ? (e = C && (0, l.jsx)("label", {
                        htmlFor: N,
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: S
                    }), r[37] = N, r[38] = S, r[39] = C, r[40] = e) : e = r[40], r[41] !== F ? (t = (0, l.jsx)(ew, {
                        description: F,
                        inset: !1
                    }), r[41] = F, r[42] = t) : t = r[42];
                    let i = "format" in p.schema ? p.schema.format : void 0,
                        s = "maxLength" in p.schema ? p.schema.maxLength : void 0,
                        c = "string" == typeof g ? g : "";
                    return r[43] !== o || r[44] !== w || r[45] !== N || r[46] !== x || r[47] !== S || r[48] !== y || r[49] !== s || r[50] !== c || r[51] !== i ? (a = (0, l.jsx)(ef, {
                        id: N,
                        disabled: w,
                        autoFocus: o,
                        invalid: x,
                        label: S,
                        format: i,
                        maxLength: s,
                        value: c,
                        onChange: y,
                        onKeyDown: ej
                    }), r[43] = o, r[44] = w, r[45] = N, r[46] = x, r[47] = S, r[48] = y, r[49] = s, r[50] = c, r[51] = i, r[52] = a) : a = r[52], r[53] !== P || r[54] !== a || r[55] !== e || r[56] !== t ? (n = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, a, P]
                    }), r[53] = P, r[54] = a, r[55] = e, r[56] = t, r[57] = n) : n = r[57], n
                }
                case "boolean": {
                    let e, t, a, n, i, s, c = !0 === g;
                    r[58] !== y || r[59] !== g ? (e = () => y(!0 !== g), r[58] = y, r[59] = g, r[60] = e) : e = r[60];
                    let d = !0 === g;
                    return r[61] !== d ? (t = (0, l.jsx)("span", {
                        className: "flex h-5 items-center",
                        children: (0, l.jsx)(et.c, {
                            selected: d,
                            variant: "checkbox"
                        })
                    }), r[61] = d, r[62] = t) : t = r[62], r[63] !== p.schema.title ? (a = null != p.schema.title && (0, l.jsx)("span", {
                        className: "min-w-0 text-sm font-medium wrap-anywhere",
                        children: p.schema.title
                    }), r[63] = p.schema.title, r[64] = a) : a = r[64], r[65] !== o || r[66] !== N || r[67] !== x || r[68] !== S || r[69] !== t || r[70] !== a || r[71] !== c || r[72] !== e ? (n = (0, l.jsxs)(et.b, {
                        accessibilityLabel: S,
                        autoFocus: o,
                        checked: c,
                        invalid: x,
                        name: N,
                        type: "checkbox",
                        onChange: e,
                        onKeyDown: ey,
                        children: [t, a]
                    }), r[65] = o, r[66] = N, r[67] = x, r[68] = S, r[69] = t, r[70] = a, r[71] = c, r[72] = e, r[73] = n) : n = r[73], r[74] !== F ? (i = (0, l.jsx)(ew, {
                        description: F
                    }), r[74] = F, r[75] = i) : i = r[75], r[76] !== P || r[77] !== n || r[78] !== i ? (s = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [n, i, P]
                    }), r[76] = P, r[77] = n, r[78] = i, r[79] = s) : s = r[79], s
                }
                case "integer":
                case "number": {
                    let e, t, a, n, i;
                    r[80] !== S || r[81] !== C ? (e = C && (0, l.jsx)("div", {
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: S
                    }), r[80] = S, r[81] = C, r[82] = e) : e = r[82], r[83] !== F ? (t = (0, l.jsx)(ew, {
                        description: F,
                        inset: !1
                    }), r[83] = F, r[84] = t) : t = r[84];
                    let s = x || void 0,
                        c = "integer" === p.schema.type && null != p.schema.minimum ? Math.ceil(p.schema.minimum) : p.schema.minimum,
                        d = "integer" === p.schema.type ? 1 : "any",
                        m = "number" == typeof g || "string" == typeof g ? g : "";
                    return r[85] !== y ? (a = e => y(e.currentTarget.value), r[85] = y, r[86] = a) : a = r[86], r[87] !== o || r[88] !== p.schema.maximum || r[89] !== S || r[90] !== c || r[91] !== d || r[92] !== m || r[93] !== a || r[94] !== s ? (n = (0, l.jsx)(ea.a, {
                        autoFocus: o,
                        "aria-label": S,
                        "aria-invalid": s,
                        max: p.schema.maximum,
                        min: c,
                        step: d,
                        type: "number",
                        value: m,
                        onChange: a,
                        onKeyDown: ev
                    }), r[87] = o, r[88] = p.schema.maximum, r[89] = S, r[90] = c, r[91] = d, r[92] = m, r[93] = a, r[94] = s, r[95] = n) : n = r[95], r[96] !== P || r[97] !== n || r[98] !== e || r[99] !== t ? (i = (0, l.jsxs)("label", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, n, P]
                    }), r[96] = P, r[97] = n, r[98] = e, r[99] = t, r[100] = i) : i = r[100], i
                }
            }
        }

        function ev(e) {
            B(e, () => e.currentTarget.form?.requestSubmit())
        }

        function ey(e) {
            B(e, () => e.currentTarget.click())
        }

        function ej(e) {
            "date" !== e.currentTarget.type && B(e, () => e.currentTarget.form?.requestSubmit())
        }

        function ew(e) {
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
        var eN = a("i5a"),
            ek = a.n(eN),
            eS = a("Ug8F"),
            eC = a("dxK"),
            eF = a("Bb"),
            eM = a("GaA"),
            eA = a("eG"),
            eE = a("YgC"),
            eI = a("bn");

        function eP(e) {
            let t, a, i, r, o, c, d, m, u, p, h, f, x, g, b = (0, n.c)(63),
                {
                    action: v,
                    previewAction: y,
                    metadata: j,
                    layout: w,
                    autoFocus: N,
                    children: k,
                    disabled: S,
                    invalid: F,
                    isPortrait: M,
                    selected: A,
                    highlighted: E,
                    separatorBefore: I,
                    title: P
                } = e,
                z = void 0 === w ? "carousel" : w,
                O = void 0 !== M && M,
                L = void 0 !== E && E,
                T = "button" === e.type || "preview" === e.type;
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                button: "button",
                preview: "button",
                static: "div",
                checkbox: "label",
                radio: "label"
            }, b[0] = t) : t = b[0];
            let D = t[e.type],
                _ = I && "ps-4";
            b[1] !== _ ? (a = (0, s.b)("group/composer-attachment relative min-w-0 shrink-0 snap-start", _), b[1] = _, b[2] = a) : a = b[2], b[3] !== I ? (i = I && (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle"
            }), b[3] = I, b[4] = i) : i = b[4];
            let q = T && N,
                R = "carousel" === z ? "w-fit" : "w-full",
                U = "carousel" === z && "-m-1 p-1",
                K = S ? "cursor-default opacity-50" : "static" !== e.type && "cursor-interaction";
            b[5] !== K || b[6] !== R || b[7] !== U ? (r = (0, s.b)("group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none", R, U, K), b[5] = K, b[6] = R, b[7] = U, b[8] = r) : r = b[8];
            let W = T ? S : void 0,
                V = T ? "button" : void 0,
                H = T ? e.onClick : void 0;
            return b[9] !== N || b[10] !== S || b[11] !== e.name || b[12] !== e.onChange || b[13] !== e.type || b[14] !== e.value || b[15] !== A ? (o = "checkbox" === e.type || "radio" === e.type ? (0, l.jsx)("input", {
                autoFocus: N,
                checked: A,
                className: "sr-only",
                disabled: S,
                name: e.name,
                type: e.type,
                value: e.value,
                onChange: e.onChange,
                onKeyDown: t => {
                    "checkbox" === e.type && B(t, () => t.currentTarget.click())
                }
            }) : null, b[9] = N, b[10] = S, b[11] = e.name, b[12] = e.onChange, b[13] = e.type, b[14] = e.value, b[15] = A, b[16] = o) : o = b[16], b[17] !== S || b[18] !== L || b[19] !== F || b[20] !== O || b[21] !== z || b[22] !== e.type || b[23] !== A ? (c = (0, s.b)("relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring", "button" === e.type ? "bg-surface-secondary" : "bg-surface shadow-sm", "standalone" === z && "h-40 w-full", "grid" === z && "w-full", "carousel" === z && "h-34", "button" === e.type && "flex flex-col items-center justify-center gap-2 text-secondary", "standalone" !== z && {
                "aspect-square": "button" === e.type,
                "aspect-[4/5]": "button" !== e.type && O,
                "aspect-video": "button" !== e.type && !O
            }, {
                "border-strong": A,
                "border-text-danger": !A && F,
                "border-default": !A && !F
            }, {
                "ring-ring": L,
                "ring-border-strong": !L && A,
                "ring-text-danger/20": !L && !A && F,
                "ring-transparent": !L && !A && !F
            }, "static" !== e.type && "preview" !== e.type && !S && !A && !L && "group-hover:ring-border-subtle"), b[17] = S, b[18] = L, b[19] = F, b[20] = O, b[21] = z, b[22] = e.type, b[23] = A, b[24] = c) : c = b[24], b[25] !== z || b[26] !== e.type || b[27] !== P ? (d = "button" === e.type && "standalone" === z ? (0, l.jsx)("span", {
                className: "text-sm",
                children: P
            }) : null, b[25] = z, b[26] = e.type, b[27] = P, b[28] = d) : d = b[28], b[29] !== j ? (m = null == j ? null : (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                children: j
            }), b[29] = j, b[30] = m) : m = b[30], b[31] !== v || b[32] !== A ? (u = A ? (0, l.jsx)("span", {
                className: (0, s.b)("absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm", null != v && "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0"),
                children: (0, l.jsx)(C.Tb, {})
            }) : null, b[31] = v, b[32] = A, b[33] = u) : u = b[33], b[34] !== k || b[35] !== c || b[36] !== d || b[37] !== m || b[38] !== u ? (p = (0, l.jsxs)("div", {
                className: c,
                children: [k, d, m, u]
            }), b[34] = k, b[35] = c, b[36] = d, b[37] = m, b[38] = u, b[39] = p) : p = b[39], b[40] !== z || b[41] !== e.type || b[42] !== P ? (h = "button" === e.type && "standalone" === z ? null : (0, l.jsx)("div", {
                className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                children: P
            }), b[40] = z, b[41] = e.type, b[42] = P, b[43] = h) : h = b[43], b[44] !== D || b[45] !== r || b[46] !== W || b[47] !== V || b[48] !== H || b[49] !== o || b[50] !== p || b[51] !== h || b[52] !== q ? (f = (0, l.jsxs)(D, {
                autoFocus: q,
                className: r,
                disabled: W,
                type: V,
                onClick: H,
                children: [o, p, h]
            }), b[44] = D, b[45] = r, b[46] = W, b[47] = V, b[48] = H, b[49] = o, b[50] = p, b[51] = h, b[52] = q, b[53] = f) : f = b[53], b[54] !== y || b[55] !== I ? (x = null == y ? null : (0, l.jsx)("div", {
                className: (0, s.b)("pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100", I ? "start-6" : "start-2"),
                children: y
            }), b[54] = y, b[55] = I, b[56] = x) : x = b[56], b[57] !== v || b[58] !== f || b[59] !== x || b[60] !== a || b[61] !== i ? (g = (0, l.jsxs)("div", {
                className: a,
                children: [i, f, x, v]
            }), b[57] = v, b[58] = f, b[59] = x, b[60] = a, b[61] = i, b[62] = g) : g = b[62], g
        }
        var ez = a("JEW"),
            eO = a("kS"),
            eL = a("OfE"),
            eT = a("AS"),
            eD = a("w7Q"),
            e_ = a("Yv"),
            eq = a("t3"),
            eR = a("zUz"),
            eU = a("a6");
        let eK = eT.object({
            target: eL.a
        });

        function eW(e) {
            let t, a, i, s, r, o, c, d, u, p, h, f, x, g, b = (0, n.c)(60),
                {
                    option: j,
                    hostId: w,
                    layout: N,
                    name: k,
                    multiple: S,
                    implicit: C,
                    disabled: F,
                    invalid: M,
                    separatorBefore: A,
                    onChange: E,
                    onRemove: I,
                    onPreview: P
                } = e,
                z = (0, m.a)(),
                O = (0, eU.a)();
            b[0] !== j ? (t = (0, eR.a)(j), b[0] = j, b[1] = t) : t = b[1];
            let L = t,
                T = j.title ?? j.name;
            b[2] !== j._meta ? (a = eO.u.safeParse(j._meta?.["openai/thumbnail"] ?? j._meta?.["openai/preview"]), b[2] = j._meta, b[3] = a) : a = b[3];
            let {
                data: D
            } = a;
            b[4] !== j._meta ? (i = eK.safeParse(j._meta?.["openai/preview"]), b[4] = j._meta, b[5] = i) : i = b[5];
            let {
                data: _
            } = i;
            b[6] !== j._meta || b[7] !== _?.target ? (s = _?.target ?? eL.a.safeParse(j._meta?.["openai/preview"]).data ?? eL.a.safeParse(j._meta?.["openai/target"]).data, b[6] = j._meta, b[7] = _?.target, b[8] = s) : s = b[8];
            let q = s;
            b[9] !== P || b[10] !== q || b[11] !== T ? (r = null == q || null == P ? void 0 : () => P(q, T), b[9] = P, b[10] = q, b[11] = T, b[12] = r) : r = b[12];
            let R = r;
            b[13] !== R ? (o = null == R ? {
                type: "static"
            } : {
                type: "preview",
                onClick: R
            }, b[13] = R, b[14] = o) : o = b[14];
            let U = o;
            b[15] !== F || b[16] !== C || b[17] !== R ? (c = C || null == R ? null : (0, l.jsx)(y.a, {
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
            }), b[15] = F, b[16] = C, b[17] = R, b[18] = c) : c = b[18];
            let K = O ? L?.logoDarkUrl : L?.logoUrl;
            b[19] !== j.mimeType || b[20] !== K ? (d = (0, l.jsx)(em, {
                layout: "icon",
                mimeType: j.mimeType,
                src: K
            }), b[19] = j.mimeType, b[20] = K, b[21] = d) : d = b[21];
            let W = j.mimeType ?? T;
            b[22] !== W ? (u = (0, l.jsx)("span", {
                className: "truncate",
                children: W
            }), b[22] = W, b[23] = u) : u = b[23], b[24] !== u || b[25] !== d ? (p = (0, l.jsxs)(l.Fragment, {
                children: [d, u]
            }), b[24] = u, b[25] = d, b[26] = p) : p = b[26], b[27] !== F || b[28] !== z || b[29] !== I || b[30] !== T ? (h = F || null == I ? void 0 : (0, l.jsx)(e_.a, {
                className: "top-2 right-2",
                size: "composer",
                ariaLabel: z.formatMessage({
                    id: "composer.openAIForm.removeFile",
                    defaultMessage: "Remove {filename}",
                    description: "Accessible label for removing a resource from an elicitation form"
                }, {
                    filename: T
                }),
                onRemove: I
            }), b[27] = F, b[28] = z, b[29] = I, b[30] = T, b[31] = h) : h = b[31];
            let V = !C && j.selected;
            return b[32] !== C || b[33] !== S || b[34] !== k || b[35] !== E || b[36] !== j.uri || b[37] !== U ? (f = C ? U : {
                type: S ? "checkbox" : "radio",
                name: k,
                value: j.uri,
                onChange: E
            }, b[32] = C, b[33] = S, b[34] = k, b[35] = E, b[36] = j.uri, b[37] = U, b[38] = f) : f = b[38], b[39] !== w || b[40] !== L?.logoDarkUrl || b[41] !== L?.logoUrl || b[42] !== O || b[43] !== j.localPath || b[44] !== j.mimeType || b[45] !== j.name || b[46] !== D?.src ? (x = null == j.localPath ? (0, l.jsx)(em, {
                layout: D?.src == null ? "card-icon" : "card",
                mimeType: j.mimeType,
                src: D?.src ?? (O ? L?.logoDarkUrl : L?.logoUrl)
            }) : (0, l.jsx)(eq.a, {
                hostId: w,
                imageFit: "scale-down",
                path: j.localPath,
                importKind: (0, eD.a)(j.name),
                fallback: (0, l.jsx)(em, {
                    layout: "card",
                    mimeType: j.mimeType,
                    src: void 0
                })
            }), b[39] = w, b[40] = L?.logoDarkUrl, b[41] = L?.logoUrl, b[42] = O, b[43] = j.localPath, b[44] = j.mimeType, b[45] = j.name, b[46] = D?.src, b[47] = x) : x = b[47], b[48] !== F || b[49] !== M || b[50] !== N || b[51] !== A || b[52] !== p || b[53] !== h || b[54] !== V || b[55] !== f || b[56] !== x || b[57] !== c || b[58] !== T ? (g = (0, l.jsx)(eP, {
                layout: N,
                previewAction: c,
                metadata: p,
                action: h,
                autoFocus: !1,
                disabled: F,
                invalid: M,
                selected: V,
                separatorBefore: A,
                title: T,
                ...f,
                children: x
            }), b[48] = F, b[49] = M, b[50] = N, b[51] = A, b[52] = p, b[53] = h, b[54] = V, b[55] = f, b[56] = x, b[57] = c, b[58] = T, b[59] = g) : g = b[59], g
        }
        let eV = (0, eF.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(525677)]).then(a.bind(a, "OMb"))).FileOptionsDialog);

        function eB(e) {
            let t, a, i, s, c, u, p, h, f, g, b, j, w, N, k, S, F, M = (0, n.c)(57),
                {
                    field: A,
                    disabled: E,
                    expanded: I,
                    hideDescription: P,
                    showTitle: O,
                    hostId: T,
                    invalid: D,
                    name: _,
                    options: q,
                    required: R,
                    onChange: U,
                    onPickingChange: K,
                    onPickFiles: W,
                    onCloseExpanded: V,
                    onPreview: B,
                    onViewAll: H
                } = e,
                Z = void 0 !== E && E,
                G = void 0 !== P && P,
                Q = void 0 !== O && O,
                J = (0, r.z)(z.a),
                Y = (0, m.a)(),
                X = (0, eC.a)(),
                $ = (0, r.A)(eA.c),
                et = (0, d.useRef)(null),
                ea = (0, d.useRef)(null);
            M[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => ea.current?.abort(), a = [], M[0] = t, M[1] = a) : (t = M[0], a = M[1]), (0, d.useEffect)(t, a);
            let [el, en] = (0, d.useState)(!1), [ei, es] = (0, d.useState)(!1), [er, eo] = (0, d.useState)(!1), [ec, ed] = (0, d.useState)(null), em = A["x-openai-input"], eu = em.userOptions?.kind ?? "file", ep = (0, eE.a)("file" === eu ? em.userOptions?.accept : void 0);
            M[2] !== A.title || M[3] !== _ ? (i = A.title ?? ee()(_), M[2] = A.title, M[3] = _, M[4] = i) : i = M[4];
            let ef = i,
                ex = "array" === A.type,
                eg = ex && "implicit" === em.selection,
                eb = null == W && !Z && !ei && null != em.userOptions && "local" === T && window.electronBridge?.getPathForFile != null;
            M[5] !== A.minItems || M[6] !== A.type || M[7] !== R ? (s = 0, R && (s = "array" === A.type ? A.minItems ?? 0 : 1), M[5] = A.minItems, M[6] = A.type, M[7] = R, M[8] = s) : s = M[8], M[9] !== em.options ? (c = new Set(em.options.map(eQ)), M[9] = em.options, M[10] = c) : c = M[10];
            let ev = c;
            M[11] !== ev ? (u = e => !ev.has(e.uri), M[11] = ev, M[12] = u) : u = M[12];
            let ey = q.filter(u);
            M[13] !== ev ? (p = e => ev.has(e.uri), M[13] = ev, M[14] = p) : p = M[14];
            let ej = [...ey, ...q.filter(p)],
                ew = e => {
                    Array.from(et.current?.querySelectorAll("input") ?? []).find(t => t.value === e)?.parentElement?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest",
                        behavior: $ ? "instant" : "smooth"
                    })
                },
                eN = () => {
                    document.activeElement === document.body && et.current?.closest("form")?.focus()
                };
            M[15] !== ex || M[16] !== U || M[17] !== q ? (h = (e, t) => {
                if (t.aborted || 0 === e.length) return;
                let a = new Set(e.map(eG));
                U(ek()([...q, ...e.map(eZ)], "uri").map(t => ({
                    ...t,
                    selected: ex ? t.selected || a.has(t.uri) : t.uri === e[0].uri
                })))
            }, M[15] = ex, M[16] = U, M[17] = q, M[18] = h) : h = M[18];
            let eF = h,
                eO = e => {
                    let t = !1,
                        a = () => {
                            !t && (t = !0, e.signal.removeEventListener("abort", a), K?.(!1), e.signal.aborted || (es(!1), eN()))
                        };
                    return e.signal.addEventListener("abort", a, {
                        once: !0
                    }), es(!0), ed(null), K?.(!0), a
                },
                eL = async (e, t) => {
                    if (Z || ei || null == em.userOptions || 0 === e.length) return;
                    let a = eO(t),
                        l = Error("File type is not accepted");
                    await Promise.all(e.map(async e => {
                        let {
                            appServerPath: t,
                            fsPath: a,
                            label: n
                        } = e, i = await eM.appServices.workspaceFiles.getMetadata?.({
                            hostId: T,
                            path: a
                        });
                        if (i?.kind !== eu) throw Error("Selection does not match the requested kind");
                        if ("file" === i.kind && !(0, eE.b)(a, ep)) throw l;
                        return {
                            uri: (0, eI.g)(t ?? a),
                            localPath: a,
                            name: (0, eI.k)(a),
                            title: n,
                            selected: !0
                        }
                    })).then(e => eF(e, t.signal)).catch(e => {
                        t.signal.aborted || ed(e === l ? "type" : "selection")
                    }).finally(a)
                };
            M[19] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, l.jsx)(v.a, {
                id: "composer.openAIForm.uploadTile",
                defaultMessage: "Upload",
                description: "Label below the upload tile in a file picker carousel"
            }), M[19] = f) : f = M[19];
            let eT = f;
            if ("directory" === eu) {
                let e;
                M[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.addFolder",
                    defaultMessage: "Choose folder",
                    description: "Button to add a user-selected directory to an elicitation form"
                }), M[20] = e) : e = M[20], eT = e
            } else if (0 === q.length) {
                let e;
                M[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.addFiles",
                    defaultMessage: "Upload files",
                    description: "Button to add user-selected files to an elicitation form"
                }), M[21] = e) : e = M[21], eT = e
            }
            let eD = null == em.userOptions ? null : (0, l.jsx)(eP, {
                    autoFocus: !1,
                    highlighted: el,
                    layout: 0 === q.length ? "standalone" : "carousel",
                    disabled: Z || ei,
                    invalid: !1,
                    selected: !1,
                    title: eT,
                    type: "button",
                    onClick: () => {
                        ea.current?.abort();
                        let e = new AbortController;
                        if (ea.current = e, null != W) {
                            let t = eO(e);
                            W(e.signal).then(t => eF(t, e.signal)).catch(() => {
                                e.signal.aborted || ed("selection")
                            }).finally(t);
                            return
                        }
                        null != (0, o.sg)(T) || (0, o.li)((0, L.a)(J, T)) ? eo(!0) : X({
                            accept: "file" === eu ? em.userOptions?.accept : void 0,
                            kind: eu,
                            allowMultiple: ex
                        }).then(t => {
                            if (!e.signal.aborted) return eL(t, e)
                        }).catch(() => {
                            e.signal.aborted || ed("selection")
                        }).finally(() => {
                            e.signal.aborted || eN()
                        })
                    },
                    children: "directory" === eu ? (0, l.jsx)(C.ud, {
                        className: "text-tertiary"
                    }) : (0, l.jsx)(C.M, {
                        className: "text-tertiary"
                    })
                }),
                e_ = (e, t, a) => (0, l.jsx)(eW, {
                    option: e,
                    hostId: T,
                    layout: a,
                    name: "grid" === a ? `${_}-expanded` : _,
                    multiple: ex,
                    implicit: eg,
                    disabled: Z || ei,
                    invalid: D || null != ec,
                    separatorBefore: "carousel" === a && 0 === t && null != eD,
                    onChange: () => {
                        U(q.map(t => ({
                            ...t,
                            selected: t.uri === e.uri ? !ex || !t.selected : ex && t.selected
                        }))), "carousel" === a && ew(e.uri)
                    },
                    onRemove: !eg || null == em.userOptions && q.length <= 1 || ev.has(e.uri) && q.length <= s ? void 0 : () => U(q.filter(t => t.uri !== e.uri)),
                    onPreview: null == B ? void 0 : (e, t) => {
                        V?.(), B(e, t)
                    }
                }, e.uri);
            M[22] !== eb ? (g = e => {
                (0, x.b)(e.dataTransfer) && (e.preventDefault(), e.stopPropagation(), "dragenter" === e.type ? en(eb) : e.dataTransfer.dropEffect = eb ? "copy" : "none")
            }, M[22] = eb, M[23] = g) : g = M[23];
            let eq = g;
            M[24] !== A.description || M[25] !== A.title || M[26] !== G || M[27] !== Q ? (b = Q && A.title || !G && A.description ? (0, l.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                children: [Q && A.title && (0, l.jsx)("div", {
                    className: "text-size-chat-sm font-medium text-default",
                    children: A.title
                }), !G && A.description && (0, l.jsx)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: A.description
                })]
            }) : null, M[24] = A.description, M[25] = A.title, M[26] = G, M[27] = Q, M[28] = b) : b = M[28];
            let eR = b;
            M[29] !== eR || M[30] !== H ? (j = null != eR || null != H ? (0, l.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [eR, null != H && (0, l.jsxs)(y.a, {
                    className: "ms-auto shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    onClick: H,
                    children: [(0, l.jsx)(C.Ih, {}), (0, l.jsx)(v.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })]
            }) : null, M[29] = eR, M[30] = H, M[31] = j) : j = M[31];
            let eU = j;
            M[32] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                e.stopPropagation(), e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget) || en(!1)
            }, M[32] = w) : w = M[32];
            let eK = e => {
                    if (!(0, x.b)(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), en(!1), !eb)) return;
                    let t = (0, x.f)(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer);
                    if (0 === t.length || !ex && t.length > 1) return void ed("selection");
                    ea.current?.abort();
                    let a = new AbortController;
                    ea.current = a, eL(t, a)
                },
                eB = 0 === q.length && null != eD ? (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2 px-4",
                    role: "group",
                    "aria-label": ef,
                    children: [eU, eD]
                }) : (0, l.jsxs)(ez.a, {
                    ariaInvalid: D || null != ec,
                    ariaLabel: ef,
                    backLabel: Y.formatMessage({
                        id: "composer.openAIForm.previousFiles",
                        defaultMessage: "Show previous files",
                        description: "Accessible label for scrolling a form file picker backward"
                    }),
                    forwardLabel: Y.formatMessage({
                        id: "composer.openAIForm.moreFiles",
                        defaultMessage: "Show more files",
                        description: "Accessible label for scrolling a form file picker forward"
                    }),
                    header: eU,
                    role: ex ? "group" : "radiogroup",
                    shouldUseReducedMotion: $,
                    children: [eD, ej.map((e, t) => e_(e, t, "carousel"))]
                }),
                eJ = void 0 !== I && I && null != V ? (0, l.jsx)(eV, {
                    title: A.title,
                    accessibilityLabel: ef,
                    multiple: ex,
                    options: ej,
                    renderOption: (e, t) => e_(e, t, "grid"),
                    onClose: V,
                    onOptionActivate: ew,
                    onRestoreFocus: () => {
                        let e = et.current?.querySelector("input:not(:disabled), button:not(:disabled)") ?? et.current?.closest("form")?.querySelector('button[type="submit"]');
                        e?.focus()
                    }
                }) : null;
            return M[33] !== ep || M[34] !== eL || M[35] !== T || M[36] !== eu || M[37] !== ex || M[38] !== er || M[39] !== eN || M[40] !== eo ? (N = er ? (0, l.jsx)(eS.a, {
                acceptedFileExtensions: ep,
                hostId: T,
                kind: eu,
                multiple: ex,
                onClose: () => eo(!1),
                onRestoreFocus: eN,
                onSelect: e => {
                    let t = ea.current;
                    null == t || t.signal.aborted || eL(e.map(eH), t)
                }
            }) : null, M[33] = ep, M[34] = eL, M[35] = T, M[36] = eu, M[37] = ex, M[38] = er, M[39] = eN, M[40] = eo, M[41] = N) : N = M[41], M[42] !== ec ? (k = ec ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                role: "alert",
                children: "selection" === ec ? (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.fileSelectionFailed",
                    defaultMessage: "These files or folders could not be added",
                    description: "Error when selected files or folders cannot be accessed or do not match the form's requested kind or number of items"
                }) : (0, l.jsx)(v.a, {
                    id: "composer.openAIForm.fileTypeRejected",
                    defaultMessage: "Choose a file of an allowed type",
                    description: "Error for a file whose type does not match the file types accepted by the picker"
                })
            }) : null, M[42] = ec, M[43] = k) : k = M[43], M[44] !== A || M[45] !== D ? (S = D ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(eh, {
                    schema: A
                })
            }) : null, M[44] = A, M[45] = D, M[46] = S) : S = M[46], M[47] !== et || M[48] !== eq || M[49] !== w || M[50] !== eK || M[51] !== eB || M[52] !== eJ || M[53] !== N || M[54] !== k || M[55] !== S ? (F = (0, l.jsxs)("div", {
                ref: et,
                className: "flex w-full min-w-0 flex-col gap-2",
                "data-mcp-form-file-drop": !0,
                onDragEnter: eq,
                onDragOver: eq,
                onDragLeave: w,
                onDrop: eK,
                children: [eB, eJ, N, k, S]
            }), M[47] = et, M[48] = eq, M[49] = w, M[50] = eK, M[51] = eB, M[52] = eJ, M[53] = N, M[54] = k, M[55] = S, M[56] = F) : F = M[56], F
        }

        function eH(e) {
            return {
                path: e,
                fsPath: e,
                label: (0, eI.k)(e)
            }
        }

        function eZ(e) {
            return {
                ...e,
                selected: !0
            }
        }

        function eG(e) {
            return e.uri
        }

        function eQ(e) {
            return e.uri
        }
        var eJ = a("HOL"),
            eY = a("EsL"),
            eX = a("vt");

        function e$(e) {
            let t, a, i, o, c, u, p, h, f, x, g = (0, n.c)(56),
                {
                    autoFocus: b,
                    field: y,
                    hideLabel: j,
                    hostId: w,
                    invalid: N,
                    name: k,
                    value: S,
                    onChange: C,
                    onPickFile: F
                } = e,
                M = void 0 !== j && j,
                A = (0, m.a)(),
                E = (0, eC.a)(),
                I = (0, r.A)(eA.c),
                [P, z] = (0, d.useState)(!1),
                [O, L] = (0, d.useState)(!1),
                T = O ? "aspect-[4/5]" : "aspect-video";
            g[0] !== y.title || g[1] !== k ? (t = y.title ?? ee()(k), g[0] = y.title, g[1] = k, g[2] = t) : t = g[2];
            let D = t,
                _ = null != y.file && (0, R.c)(y, S) && !y.items.some(e => e.id === S) ? S : null;
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
                }), g[7] = y.description, g[8] = y.title, g[9] = M, g[10] = o) : o = g[10], g[11] !== y.file || g[12] !== y.title || g[13] !== w || g[14] !== N || g[15] !== C || g[16] !== F || g[17] !== E || g[18] !== T || g[19] !== _ ? (c = null == y.file ? null : null != F ? (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("button", {
                        className: "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                        type: "button",
                        onClick: () => {
                            null != F ? F().then(e => {
                                null != e && C(e)
                            }) : "local" !== w ? z(!0) : E({
                                accept: y.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: y.file?.title ?? y.title
                            }).then(e => {
                                let [t] = e;
                                null != t && C((0, eI.g)(t.fsPath))
                            })
                        },
                        children: [(0, l.jsx)("div", {
                            className: (0, s.b)("flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong", T, null == _ ? "border-default ring-transparent group-hover:ring-border-subtle" : "border-strong ring-border-strong", N && null == _ && "border-text-danger ring-text-danger/20"),
                            children: null == _ ? (0, l.jsx)(eJ.a, {
                                className: "text-secondary",
                                asset: eX.a,
                                "aria-hidden": !0
                            }) : (0, l.jsxs)("div", {
                                className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                children: [(0, l.jsx)(eJ.a, {
                                    asset: eY.a,
                                    "aria-hidden": !0
                                }), (0, l.jsx)("span", {
                                    className: "max-w-full truncate text-sm",
                                    children: (0, eI.k)(decodeURIComponent(new URL(_).pathname))
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
                }) : null, g[11] = y.file, g[12] = y.title, g[13] = w, g[14] = N, g[15] = C, g[16] = F, g[17] = E, g[18] = T, g[19] = _, g[20] = c) : c = g[20], g[21] !== b || g[22] !== y.items || g[23] !== N || g[24] !== O || g[25] !== k || g[26] !== C || g[27] !== S) {
                let e;
                g[29] !== b || g[30] !== N || g[31] !== O || g[32] !== k || g[33] !== C || g[34] !== S ? (e = (e, t) => (0, l.jsx)(eP, {
                    autoFocus: b && 0 === t,
                    invalid: N,
                    isPortrait: O,
                    name: k,
                    selected: S === e.id,
                    title: e.title,
                    type: "radio",
                    value: e.id,
                    onChange: () => C(e.id),
                    children: (0, l.jsx)("img", {
                        alt: "",
                        className: "block h-full w-full object-scale-down",
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        onLoad: 0 === t ? e => {
                            L(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)
                        } : void 0,
                        src: e.image
                    })
                }, e.id), g[29] = b, g[30] = N, g[31] = O, g[32] = k, g[33] = C, g[34] = S, g[35] = e) : e = g[35], u = y.items.map(e), g[21] = b, g[22] = y.items, g[23] = N, g[24] = O, g[25] = k, g[26] = C, g[27] = S, g[28] = u
            } else u = g[28];
            return g[36] !== N || g[37] !== I || g[38] !== a || g[39] !== i || g[40] !== o || g[41] !== c || g[42] !== u || g[43] !== D ? (p = (0, l.jsxs)(ez.a, {
                ariaInvalid: N,
                ariaLabel: D,
                backLabel: a,
                forwardLabel: i,
                header: o,
                role: "radiogroup",
                shouldUseReducedMotion: I,
                children: [c, u]
            }), g[36] = N, g[37] = I, g[38] = a, g[39] = i, g[40] = o, g[41] = c, g[42] = u, g[43] = D, g[44] = p) : p = g[44], g[45] !== w || g[46] !== P || g[47] !== C ? (h = P ? (0, l.jsx)(eS.a, {
                hostId: w,
                multiple: !1,
                onClose: () => z(!1),
                onSelect: e => {
                    let t = e[0];
                    null != t && C((0, eI.g)(t))
                }
            }) : null, g[45] = w, g[46] = P, g[47] = C, g[48] = h) : h = g[48], g[49] !== y || g[50] !== N ? (f = N ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(eh, {
                    schema: y
                })
            }) : null, g[49] = y, g[50] = N, g[51] = f) : f = g[51], g[52] !== f || g[53] !== p || g[54] !== h ? (x = (0, l.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2",
                children: [p, h, f]
            }), g[52] = f, g[53] = p, g[54] = h, g[55] = x) : x = g[55], x
        }

        function e0(e) {
            let t, a, i, r, o = (0, n.c)(72),
                {
                    autoFocus: c,
                    isOnlyField: d,
                    disabled: m,
                    interactionDisabled: u,
                    field: p,
                    draft: h,
                    expanded: f,
                    hostId: x,
                    invalid: g,
                    metadataInHeader: b,
                    onCloseExpanded: v,
                    onDraftChange: y,
                    onValueChange: j,
                    onPickLegacyFile: w,
                    onPickingChange: N,
                    onPickFiles: k,
                    onPreview: S,
                    onViewAll: C
                } = e;
            o[0] !== p.schema ? (t = (0, q.c)(p.schema) || (0, R.b)(p.schema), o[0] = p.schema, o[1] = t) : t = o[1];
            let F = t,
                {
                    name: M,
                    schema: A,
                    required: E
                } = p;
            if ((0, q.c)(A)) {
                let e, t, n, i = !b,
                    s = h.fileOptions[M];
                o[2] !== M || o[3] !== y ? (e = e => y(t => ({
                    ...t,
                    fileOptions: {
                        ...t.fileOptions,
                        [M]: e
                    }
                }), M), o[2] = M, o[3] = y, o[4] = e) : e = o[4], o[5] !== M || o[6] !== k ? (t = null == k ? void 0 : e => k(M, e), o[5] = M, o[6] = k, o[7] = t) : t = o[7], o[8] !== m || o[9] !== f || o[10] !== M || o[11] !== x || o[12] !== g || o[13] !== b || o[14] !== v || o[15] !== N || o[16] !== S || o[17] !== C || o[18] !== E || o[19] !== A || o[20] !== i || o[21] !== s || o[22] !== e || o[23] !== t ? (n = (0, l.jsx)(eB, {
                    field: A,
                    disabled: m,
                    expanded: f,
                    hideDescription: b,
                    showTitle: i,
                    onCloseExpanded: v,
                    onViewAll: C,
                    hostId: x,
                    invalid: g,
                    name: M,
                    options: s,
                    required: E,
                    onPreview: S,
                    onChange: e,
                    onPickingChange: N,
                    onPickFiles: t
                }), o[8] = m, o[9] = f, o[10] = M, o[11] = x, o[12] = g, o[13] = b, o[14] = v, o[15] = N, o[16] = S, o[17] = C, o[18] = E, o[19] = A, o[20] = i, o[21] = s, o[22] = e, o[23] = t, o[24] = n) : n = o[24], a = n
            } else if ((0, R.b)(A)) {
                let e, t, n, i = h.values[M];
                o[25] !== M || o[26] !== j ? (e = e => j(M, e), o[25] = M, o[26] = j, o[27] = e) : e = o[27], o[28] !== M || o[29] !== w ? (t = null == w ? void 0 : () => w(M), o[28] = M, o[29] = w, o[30] = t) : t = o[30], o[31] !== c || o[32] !== M || o[33] !== x || o[34] !== g || o[35] !== b || o[36] !== A || o[37] !== i || o[38] !== e || o[39] !== t ? (n = (0, l.jsx)(e$, {
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
                let s = h.customDrafts[M];
                o[45] !== M || o[46] !== y ? (t = e => y(t => ({
                    ...t,
                    customDrafts: {
                        ...t.customDrafts,
                        [M]: e
                    }
                }), M), o[45] = M, o[46] = y, o[47] = t) : t = o[47];
                let r = b && "boolean" !== A.type,
                    m = h.values[M];
                o[48] !== M || o[49] !== j ? (n = e => j(M, e), o[48] = M, o[49] = j, o[50] = n) : n = o[50], o[51] !== c || o[52] !== u || o[53] !== g || o[54] !== d || o[55] !== b || o[56] !== e || o[57] !== s || o[58] !== t || o[59] !== r || o[60] !== m || o[61] !== n ? (i = (0, l.jsx)(eb, {
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
            let I = c && F ? e1 : void 0,
                P = p.name,
                z = !F && "px-2",
                O = b && F && "pt-1";
            return o[63] !== z || o[64] !== O ? (i = (0, s.b)("flex min-w-0 flex-col gap-2 outline-none", z, O), o[63] = z, o[64] = O, o[65] = i) : i = o[65], o[66] !== p.name || o[67] !== a || o[68] !== u || o[69] !== I || o[70] !== i ? (r = (0, l.jsx)("fieldset", {
                ref: I,
                "data-mcp-form-field": P,
                tabIndex: -1,
                className: i,
                disabled: u,
                children: a
            }), o[66] = p.name, o[67] = a, o[68] = u, o[69] = I, o[70] = i, o[71] = r) : r = o[71], r
        }

        function e1(e) {
            null == e || e.contains(document.activeElement) || e.focus()
        }
        var e2 = a("pUt");

        function e3(e) {
            let t, a, i, s, r, o, c, d, u = (0, n.c)(20),
                {
                    isSubmitting: p,
                    elicitation: h,
                    fieldTitle: f,
                    fieldDescription: x,
                    showHeader: g,
                    onCancel: b
                } = e,
                v = void 0 !== p && p,
                j = (0, m.a)();
            return g ? (u[0] !== h.message ? (t = (0, l.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: h.message
            }), u[0] = h.message, u[1] = t) : t = u[1], u[2] !== j ? (a = j.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel",
                description: "Accessible label for canceling an MCP form elicitation"
            }), u[2] = j, u[3] = a) : a = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, l.jsx)(eJ.a, {
                "aria-hidden": !1,
                asset: e2.a
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
            }), u[9] = t, u[10] = s, u[11] = r) : r = u[11], u[12] !== f ? (o = f && (0, l.jsx)("div", {
                className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                children: f
            }), u[12] = f, u[13] = o) : o = u[13], u[14] !== x ? (c = x && (0, l.jsx)("div", {
                className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                children: x
            }), u[14] = x, u[15] = c) : c = u[15], u[16] !== r || u[17] !== o || u[18] !== c ? (d = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-col gap-1 px-4 py-3",
                children: [r, o, c]
            }), u[16] = r, u[17] = o, u[18] = c, u[19] = d) : d = u[19], d) : null
        }
        let e4 = (0, r.d)(z.a, (e, t) => {
            let {
                get: a
            } = t;
            return null != (0, o.sg)(e) || (0, o.li)(a(L.b, e))
        });

        function e5(e) {
            let t, a = (0, n.c)(2);
            return a[0] !== e ? (t = null != e.onReply ? (0, l.jsx)(e6, {
                ...e
            }) : (0, l.jsx)(e8, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function e6(e) {
            let t, a, o, m, b, v, y, j = (0, n.c)(23),
                {
                    attribution: N,
                    formType: k,
                    autoResolution: S,
                    confirmationPresentation: C,
                    confirmationCompleted: F,
                    conversationId: M,
                    elicitation: E,
                    hostId: I,
                    requestId: O,
                    turnId: L,
                    onUserInteraction: V,
                    onOpenInThread: Z,
                    onStandaloneResponseChange: G,
                    onReply: Q,
                    retainDraft: J,
                    onPickLegacyFile: Y,
                    onPickFiles: $,
                    validateContent: ee,
                    disabled: et,
                    isSubmitting: ea,
                    onPreview: el
                } = e,
                en = void 0 !== J && J,
                ei = void 0 !== et && et,
                es = void 0 !== ea && ea,
                er = (0, r.z)(z.a),
                eo = (0, d.useRef)(null),
                ec = (0, d.useRef)(null),
                ed = (0, f.b)(),
                em = "formElicitation" === E.kind;
            j[0] !== E ? (t = (0, P.a)(E), j[0] = E, j[1] = t) : t = j[1];
            let eu = t,
                ep = eu?.field ?? null,
                eh = (0, D.c)(E.schema),
                ef = function(e) {
                    if ("openaiForm" !== e.kind) return;
                    let t = e.schema[T.a],
                        a = null == t ? void 0 : e.schema.properties[t];
                    if (null != t && a?.type === "string" && ("oneOf" in a && null != a.oneOf && a.oneOf.length > 0 || "enum" in a && null != a.enum && a.enum.length > 0)) return {
                        name: t,
                        options: (0, D.d)(a),
                        required: e.schema.required?.includes(t) === !0
                    }
                }(E),
                ex = eh[0],
                eg = 1 === eh.length && null != ex && (0, R.b)(ex.schema) ? ex.schema : null,
                eb = null != eg;
            j[2] !== E.message || j[3] !== eb ? (a = !eb && E.message.trim().length > 0, j[2] = E.message, j[3] = eb, j[4] = a) : a = j[4];
            let ev = a,
                ey = (0, g.b)(I, M, O),
                ej = (0, r.A)(g.c).get(ey);
            j[5] !== E ? (o = () => K(E), j[5] = E, j[6] = o) : o = j[6];
            let [ew, eN] = (0, d.useState)(o), ek = ej?.requestId === O && "kind" in ej.draft && ej.draft.kind === E.kind ? ej.draft : K(E), eS = null == Q || en ? ek : ew, {
                values: eC
            } = eS, eF = eh.filter(e => e.name !== ef?.name), eM = 1 === eF.length ? eF[0] : void 0, eA = eM?.schema.type === "string" && (0, D.e)(eM.schema) ? (0, D.d)(eM.schema) : null, eE = null == eM ? void 0 : eC[eM.name], [eI, eP] = (0, d.useState)(null), [ez, eO] = (0, d.useState)(0), [eL, eT] = (0, d.useState)(!1), eD = (0, d.useRef)(!1), e_ = es || eL, eq = ei || e_ || ez > 0;
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (m = [], j[7] = m) : m = j[7];
            let [eR, eU] = (0, d.useState)(m);
            (0, d.useEffect)(() => {
                null != eg && null == Q && (0, u.d)(er, {
                    hostId: I,
                    requestId: O
                }, eg.items.length, {
                    threadId: M,
                    turnId: L
                })
            }, [M, I, Q, O, er, eg, L]);
            let eK = (e, t) => {
                    if (null == Q || en) {
                        let t = er.get(g.c).get(ey),
                            a = null != t && "kind" in t.draft && t.draft.kind === E.kind ? t.draft : K(E);
                        (0, g.d)(er, ey, {
                            conversationId: M,
                            draft: e(a),
                            requestId: O,
                            cleanupOwner: en ? "hosted" : void 0
                        })
                    } else eN(e);
                    eU(e => e.filter(e => e !== t))
                },
                eW = (e, t) => {
                    eq || eK(a => ({
                        ...a,
                        values: {
                            ...a.values,
                            [e]: t
                        }
                    }), e)
                },
                eV = (e, t) => {
                    if (es || eD.current) return Promise.resolve(!1);
                    if (null != Z) return eq || Z(), Promise.resolve(!1);
                    if ((0, _.a)(er, {
                            action: e,
                            formType: k ?? (em ? "mcp" : "openai"),
                            identity: N
                        }), null != Q) return Q(e, t);
                    let a = () => (0, p.b)(er, I).replyWithMcpServerElicitationResponse(M, O, (0, c.b)(e, null, t ?? {}));
                    return null == G ? a() : (eD.current = !0, eT(!0), G("submitting"), Promise.resolve().then(a).then(() => (G({
                        accept: "accepted",
                        decline: "declined",
                        cancel: "canceled"
                    } [e]), !0), () => (G("failed"), !1)).finally(() => {
                        eD.current = !1, eT(!1)
                    }))
                },
                eB = e => {
                    if (eq) return;
                    if (null != Z) return void Z();
                    let t = e;
                    if (ef?.required && null == t) {
                        let e = ef.options;
                        if (1 !== e.length) return void ec.current?.focus();
                        t = e[0].const
                    }
                    let a = {
                        ...eS.values
                    };
                    null != ef && (null == t ? delete a[ef.name] : (0, D.g)(a, ef.name, t));
                    let l = function(e, t, a) {
                        let l = {
                            ...t.values
                        };
                        for (let [e, a] of Object.entries(t.customDrafts)) l[e] = W(l[e], a);
                        switch (e.kind) {
                            case "formElicitation":
                                return (0, U.a)(e.schema, l);
                            case "openaiForm":
                                return (0, q.b)(e.schema, l, t.fileOptions, a);
                            case "legacyOpenAIForm":
                                return (0, R.a)(e.schema, l)
                        }
                    }(E, {
                        ...eS,
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
                    if (null != Q || null == eg || null == ex) return;
                    let i = l.content[ex.name];
                    if ("string" != typeof i) return;
                    let s = eg.items.findIndex(e => e.id === i);
                    s < 0 || n.then(e => {
                        !1 !== e && (0, u.e)(er, {
                            hostId: I,
                            requestId: O
                        }, i, s)
                    })
                },
                eH = null == $ && eh.some(e7),
                eZ = (0, r.x)(null == Q && eH ? e4 : null, I);
            if (eu?.presentation != null) {
                let e;
                return j[8] !== E || j[9] !== O ? (e = JSON.stringify([O, E]), j[8] = E, j[9] = O, j[10] = e) : e = j[10], (0, l.jsx)(i.a, {
                    className: "contents",
                    children: (0, l.jsx)(A, {
                        presentation: eu.presentation,
                        message: E.message,
                        disabled: eq,
                        isSubmitting: e_,
                        completed: F,
                        standalone: "standalone" === C,
                        onOpen: V,
                        onOpenInThread: Z,
                        onConfirm: eB,
                        onCancel: () => void eV("cancel")
                    }, e)
                })
            }
            if (eH && !eZ) {
                let e;
                return j[11] !== M || j[12] !== E.serverName || j[13] !== I || j[14] !== Q || j[15] !== G || j[16] !== O || j[17] !== e_ ? (e = (0, l.jsx)(H.a, {
                    conversationId: M,
                    hostId: I,
                    isSubmitting: e_,
                    requestId: O,
                    serverName: E.serverName,
                    onReply: Q,
                    onStandaloneResponseChange: G
                }), j[11] = M, j[12] = E.serverName, j[13] = I, j[14] = Q, j[15] = G, j[16] = O, j[17] = e_, j[18] = e) : e = j[18], e
            }
            return j[19] !== V ? (v = e => {
                "Escape" === e.key || e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || V?.()
            }, y = e => {
                e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || V?.()
            }, b = e => {
                (0, x.b)(e.dataTransfer) && V?.()
            }, j[19] = V, j[20] = b, j[21] = v, j[22] = y) : (b = j[20], v = j[21], y = j[22]), (0, l.jsx)(i.a, {
                className: "contents",
                children: (0, l.jsx)(h.a, {
                    className: "@container/request-card",
                    children: (0, l.jsxs)("form", {
                        ref: eo,
                        className: "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
                        noValidate: !0,
                        tabIndex: -1,
                        "data-codex-character-input-boundary": !0,
                        "data-codex-escape-boundary": !0,
                        "data-user-input-auto-resolution": null != V || void 0,
                        onKeyDownCapture: v,
                        onPointerDownCapture: y,
                        onDropCapture: b,
                        onKeyDown: e => {
                            if (!e.defaultPrevented && !e.nativeEvent.isComposing && e.target instanceof HTMLElement && e.currentTarget.contains(e.target)) {
                                if ("Escape" === e.key) {
                                    e.preventDefault(), eV("cancel");
                                    return
                                }
                                if (!(eq || null == e.target.closest('button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]') && B(e, () => e.currentTarget.requestSubmit())) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && null == e.target.closest('textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]') && 1 === eF.length && /^[1-9]$/.test(e.key)) {
                                    let t = e.currentTarget.querySelectorAll('[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)')[Number(e.key) - 1];
                                    null != t && (e.preventDefault(), e.repeat || t.click())
                                }
                            }
                        },
                        onSubmit: e => {
                            e.preventDefault(), eB()
                        },
                        children: [(0, l.jsx)(e3, {
                            isSubmitting: e_,
                            elicitation: E,
                            fieldTitle: eM?.schema.type === "boolean" ? void 0 : eM?.schema.title,
                            fieldDescription: eM?.schema.description,
                            showHeader: ev,
                            onCancel: () => void eV("cancel")
                        }), null == ep && eF.length > 0 && (0, l.jsx)("div", {
                            className: (0, s.b)("flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3", !ev && "pt-3"),
                            children: eF.map((e, t) => (0, l.jsx)(e0, {
                                autoFocus: ed && 0 === t,
                                disabled: ei,
                                interactionDisabled: eq,
                                field: e,
                                isOnlyField: 1 === eF.length,
                                draft: eS,
                                expanded: eI === e.name,
                                hostId: I,
                                invalid: eR.includes(e.name),
                                metadataInHeader: ev && 1 === eF.length,
                                onCloseExpanded: () => eP(null),
                                onDraftChange: Z ?? eK,
                                onValueChange: Z ?? eW,
                                onPickLegacyFile: Y,
                                onPickingChange: e => eO(t => t + (e ? 1 : -1)),
                                onPickFiles: $,
                                onPreview: el,
                                onViewAll: eF.length > 1 && (0, q.c)(e.schema) && eS.fileOptions[e.name].length > 1 ? Z ?? (() => eP(e.name)) : void 0
                            }, e.name))
                        }), null != ep ? (0, l.jsx)(w, {
                            disabled: eq,
                            isSubmitting: e_,
                            hotkeysEnabled: ed,
                            onDecline: () => void eV("decline")
                        }) : (0, l.jsx)(X, {
                            primaryActionRef: ec,
                            isSubmitting: e_,
                            autoResolution: S,
                            disabled: eq,
                            submitDisabled: eq || null != eM && eM.required && (0, R.b)(eM.schema) && !(0, R.c)(eM.schema, eC[eM.name]),
                            fieldCount: eF.length,
                            hotkeysEnabled: ed,
                            acceptOptions: null != ef ? {
                                options: ef.options,
                                required: ef.required,
                                onSelect: eB
                            } : void 0,
                            isStandardForm: em,
                            showSubmit: eM?.required !== !0 || null == eA || "string" == typeof eE && ("" !== eE || eA.some(e => e.const === eE)),
                            showHeader: ev,
                            onCancel: () => void eV("cancel"),
                            onDecline: () => void eV("decline"),
                            onDismissLegacyImagePicker: eb ? () => {
                                null == Q && (0, u.b)(er, {
                                    hostId: I,
                                    requestId: O
                                }), eV("decline")
                            } : void 0,
                            onViewAll: null != eM && (0, q.c)(eM.schema) && eS.fileOptions[eM.name].length > 1 ? Z ?? (() => eP(eM.name)) : void 0
                        })]
                    })
                })
            })
        }

        function e7(e) {
            let {
                schema: t
            } = e;
            return (0, q.c)(t) && null != t["x-openai-input"].userOptions
        }

        function e8(e) {
            let t, i, s = (0, n.c)(9),
                o = (0, r.z)(O.a),
                c = (0, m.a)();
            s[0] !== c || s[1] !== e.conversationId || s[2] !== e.elicitation || s[3] !== e.hostId || s[4] !== o ? (t = (t, l) => {
                Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(734793)]).then(a.bind(a, "sJL")).then(a => {
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
                }).catch(e9).then(e => {
                    e || o.get(b.h).danger(c.formatMessage({
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
            return s[6] !== d || s[7] !== e ? (i = (0, l.jsx)(e6, {
                ...e,
                onPreview: d
            }), s[6] = d, s[7] = e, s[8] = i) : i = s[8], i
        }

        function e9() {
            return !1
        }
    }),
    MnT: (function(e, t, a) {
        a.d(t, {
            a: () => m,
            b: () => u
        });
        var l = a("A"),
            n = a("Qo"),
            i = a("ULZ"),
            s = a("on"),
            r = a("zd"),
            o = a("v7"),
            c = "PortalBoundary-TFj9W2";
        let d = (0, r.createContext)({
            container: null
        });

        function m(e) {
            let t, a, o, m, u, p, h, f, x = (0, n.c)(20),
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
            }), x[10] = g, x[11] = u, x[12] = p) : p = x[12], x[13] !== N || x[14] !== p ? (h = (0, l.jsx)(i.a, {
                radixPortalContainer: N,
                children: p
            }), x[13] = N, x[14] = p, x[15] = h) : h = x[15], x[16] !== m || x[17] !== h || x[18] !== v ? (f = (0, l.jsx)("div", {
                ref: o,
                className: m,
                "data-theme": v,
                children: h
            }), x[16] = m, x[17] = h, x[18] = v, x[19] = f) : f = x[19], f
        }

        function u(e) {
            let t, a, m, u, p, h, f = (0, n.c)(17),
                {
                    children: x,
                    theme: g
                } = e,
                {
                    container: b,
                    themeClassName: v
                } = (0, r.useContext)(d),
                [y, j] = (0, r.useState)(null);
            f[0] !== b || f[1] !== y ? (t = () => {
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
            }, a = [b, y], f[0] = b, f[1] = y, f[2] = t, f[3] = a) : (t = f[2], a = f[3]), (0, r.useLayoutEffect)(t, a);
            let w = y ?? void 0;
            return f[4] !== x || f[5] !== y ? (m = "function" == typeof x ? x(y) : x, f[4] = x, f[5] = y, f[6] = m) : m = f[6], f[7] !== w || f[8] !== m ? (u = (0, l.jsx)(i.a, {
                radixPortalContainer: w,
                children: m
            }), f[7] = w, f[8] = m, f[9] = u) : u = f[9], f[10] !== b || f[11] !== g || f[12] !== v ? (p = null != b && (0, o.createPortal)((0, l.jsx)("div", {
                ref: e => {
                    null != e && j(e)
                },
                className: (0, s.b)("relative", c, "PortalSurface-LW3Uz2", v),
                "data-theme": g
            }), b.ownerDocument.body), f[10] = b, f[11] = g, f[12] = v, f[13] = p) : p = f[13], f[14] !== u || f[15] !== p ? (h = (0, l.jsxs)(l.Fragment, {
                children: [u, p]
            }), f[14] = u, f[15] = p, f[16] = h) : h = f[16], h
        }
    }),
    ULZ: (function(e, t, a) {
        a.d(t, {
            a: () => s
        }), a("iYC"), a("y");
        var l = a("A"),
            n = a("Qo"),
            i = a("ylL");

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
                h = void 0 !== m && m;
            return s[0] !== p || s[1] !== h || s[2] !== u || s[3] !== d ? (t = {
                linkComponent: u,
                allowedWidgetTypes: p,
                radixPortalContainer: d,
                hydrationSafe: h
            }, s[0] = p, s[1] = h, s[2] = u, s[3] = d, s[4] = t) : t = s[4], s[5] !== r || s[6] !== t ? (a = (0, l.jsx)(i.a.Provider, {
                value: t,
                children: r
            }), s[5] = r, s[6] = t, s[7] = a) : a = s[7], a
        }
    })
};