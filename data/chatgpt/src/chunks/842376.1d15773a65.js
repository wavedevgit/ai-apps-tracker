export const __rspack_esm_ids = [842376];
export const __webpack_modules__ = {
    hHij: (function(e, t, a) {
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
    ULZ9: (function(e, t, a) {
        a.d(t, {
            a: () => r
        }), a("iYCA"), a("yCBR");
        var l = a("ABep"),
            n = a("QosV"),
            i = a("ylLY");

        function r(e) {
            let t, a, r = (0, n.c)(8),
                {
                    children: s,
                    linkComponent: o,
                    allowedWidgetTypes: c,
                    radixPortalContainer: d,
                    hydrationSafe: m
                } = e,
                u = void 0 === o ? "a" : o,
                p = void 0 === c ? "GA" : c,
                f = void 0 !== m && m;
            return r[0] !== p || r[1] !== f || r[2] !== u || r[3] !== d ? (t = {
                linkComponent: u,
                allowedWidgetTypes: p,
                radixPortalContainer: d,
                hydrationSafe: f
            }, r[0] = p, r[1] = f, r[2] = u, r[3] = d, r[4] = t) : t = r[4], r[5] !== s || r[6] !== t ? (a = (0, l.jsx)(i.a.Provider, {
                value: t,
                children: s
            }), r[5] = s, r[6] = t, r[7] = a) : a = r[7], a
        }
    }),
    QRIH: (function(e, t, a) {
        a.d(t, {
            a: () => x,
            b: () => g
        });
        var l = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            r = a("zd8w"),
            s = a("Wf1j"),
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
            let t, a, x, b, v, y, j, w, N, k, S, C, F, M, A, E, L, I, P, z, O, T, D = (0, n.c)(67),
                {
                    presentation: _,
                    message: q,
                    disabled: R,
                    isSubmitting: U,
                    completed: B,
                    standalone: K,
                    onOpen: V,
                    onOpenInThread: W,
                    onConfirm: H,
                    onCancel: Q
                } = e,
                G = void 0 !== B && B,
                Z = void 0 !== K && K,
                Y = (0, s.a)(),
                [J, X] = (0, r.useState)(Z);
            D[0] !== Z ? (t = (0, i.b)("flex flex-wrap items-center gap-2", {
                "justify-center": Z
            }), D[0] = Z, D[1] = t) : t = D[1];
            let $ = "shield" === _.icon ? "actionChipWithIcon" : "actionChip",
                ee = R && !G;
            D[2] !== G || D[3] !== V || D[4] !== W ? (a = () => {
                null == W || G ? (V?.(), X(!0)) : W()
            }, D[2] = G, D[3] = V, D[4] = W, D[5] = a) : a = D[5], D[6] !== _.icon ? (x = "shield" === _.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, l.jsx)(h, {
                    "aria-hidden": "true"
                })
            }), D[6] = _.icon, D[7] = x) : x = D[7], D[8] !== _.triggerLabel ? (b = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: _.triggerLabel
            }), D[8] = _.triggerLabel, D[9] = b) : b = D[9], D[10] !== G || D[11] !== Y ? (v = G && (0, l.jsx)(p.Tb, {
                "aria-label": Y.formatMessage({
                    id: "mcpConfirmation.completed",
                    defaultMessage: "Completed",
                    description: "Accessible label for a custom-rule request that was acted upon, without asserting that the rule change succeeded"
                })
            }), D[10] = G, D[11] = Y, D[12] = v) : v = D[12], D[13] !== U || D[14] !== $ || D[15] !== ee || D[16] !== a || D[17] !== x || D[18] !== b || D[19] !== v ? (y = (0, l.jsxs)(c.a, {
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
            }), D[13] = U, D[14] = $, D[15] = ee, D[16] = a, D[17] = x, D[18] = b, D[19] = v, D[20] = y) : y = D[20], D[21] !== y || D[22] !== t ? (j = (0, l.jsx)("div", {
                "data-mcp-confirmation-chip": !0,
                className: t,
                children: y
            }), D[21] = y, D[22] = t, D[23] = j) : j = D[23], D[24] === Symbol.for("react.memo_cache_sentinel") ? (w = {
                "aria-describedby": void 0
            }, D[24] = w) : w = D[24], D[25] !== G || D[26] !== R || D[27] !== H ? (N = e => {
                e.preventDefault(), R || G || (H(), X(!1))
            }, D[25] = G, D[26] = R, D[27] = H, D[28] = N) : N = D[28], D[29] !== _.icon ? (k = "shield" === _.icon && (0, l.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, l.jsx)(f, {
                    "aria-hidden": "true"
                })
            }), D[29] = _.icon, D[30] = k) : k = D[30], D[31] !== _.title ? (S = (0, l.jsx)(m.e, {
                variant: "confirmation",
                className: "text-center",
                children: _.title
            }), D[31] = _.title, D[32] = S) : S = D[32], D[33] !== k || D[34] !== S ? (C = (0, l.jsxs)("div", {
                className: "flex flex-col items-center gap-3",
                children: [k, S]
            }), D[33] = k, D[34] = S, D[35] = C) : C = D[35], D[36] !== q || D[37] !== _ ? (F = (0, l.jsx)(g, {
                presentation: _,
                message: q
            }), D[36] = q, D[37] = _, D[38] = F) : F = D[38];
            let et = _.destructive ? "dangerSolid" : "primary",
                ea = R || G;
            return D[39] !== _.confirmLabel ? (M = (0, l.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: _.confirmLabel
            }), D[39] = _.confirmLabel, D[40] = M) : M = D[40], D[41] !== U || D[42] !== et || D[43] !== ea || D[44] !== M ? (A = (0, l.jsx)(u.c, {
                children: (0, l.jsx)(d.a, {
                    color: et,
                    size: "modalPrimary",
                    radius: "full",
                    type: "submit",
                    disabled: ea,
                    loading: U,
                    children: M
                })
            }), D[41] = U, D[42] = et, D[43] = ea, D[44] = M, D[45] = A) : A = D[45], D[46] !== G || D[47] !== R || D[48] !== Q ? (E = () => {
                R || G || Q?.(), X(!1)
            }, D[46] = G, D[47] = R, D[48] = Q, D[49] = E) : E = D[49], D[50] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, l.jsx)(o.a, {
                id: "mcpConfirmation.cancel",
                defaultMessage: "Cancel",
                description: "Cancel a proposed change or close its completed preview"
            }), D[50] = L) : L = D[50], D[51] !== E ? (I = (0, l.jsx)(u.c, {
                children: (0, l.jsx)(d.a, {
                    color: "secondary",
                    size: "modalPrimary",
                    radius: "full",
                    type: "button",
                    onClick: E,
                    children: L
                })
            }), D[51] = E, D[52] = I) : I = D[52], D[53] !== A || D[54] !== I ? (P = (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [A, I]
            }), D[53] = A, D[54] = I, D[55] = P) : P = D[55], D[56] !== N || D[57] !== C || D[58] !== F || D[59] !== P ? (z = (0, l.jsxs)(u.b, {
                as: "form",
                size: "viewport",
                variant: "confirmation",
                onSubmit: N,
                children: [C, F, P]
            }), D[56] = N, D[57] = C, D[58] = F, D[59] = P, D[60] = z) : z = D[60], D[61] !== J || D[62] !== z ? (O = (0, l.jsx)(m.b, {
                open: J,
                onOpenChange: X,
                widthHint: 480,
                variant: "confirmation",
                closeButtonSize: "large",
                contentProps: w,
                children: z
            }), D[61] = J, D[62] = z, D[63] = O) : O = D[63], D[64] !== j || D[65] !== O ? (T = (0, l.jsxs)(l.Fragment, {
                children: [j, O]
            }), D[64] = j, D[65] = O, D[66] = T) : T = D[66], T
        }

        function g(e) {
            let t, a = (0, n.c)(10),
                {
                    message: i,
                    presentation: r
                } = e;
            if (r?.sections != null) {
                let e, t;
                return a[0] !== r.sections ? (e = r.sections.map(v), a[0] = r.sections, a[1] = e) : e = a[1], a[2] !== e ? (t = (0, l.jsx)("div", {
                    className: "flex flex-col gap-5 select-text",
                    children: e
                }), a[2] = e, a[3] = t) : t = a[3], t
            }
            if (r?.fields != null) {
                let e, t;
                return a[4] !== r.fields ? (e = r.fields.map(b), a[4] = r.fields, a[5] = e) : e = a[5], a[6] !== e ? (t = (0, l.jsx)("dl", {
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
        a.d(t, {}, {
            a: function(e) {
                let t = n.safeParse(e.confirmation);
                if (!t.success || !e.message.trim()) return null;
                let {
                    field: a
                } = t.data;
                return 1 !== Object.keys(e.schema.properties).length || e.schema.properties[a]?.type !== "boolean" || e.schema.required?.length !== 1 || e.schema.required[0] !== a ? null : t.data
            }
        })
    }),
    vPGU: (function(e, t, a) {
        var l = a("ABep"),
            n = a("QosV"),
            i = a("iTtm"),
            r = a("I3F6"),
            s = a("zd8w"),
            o = a("oyxz"),
            c = a("Dgwo"),
            d = a("WNfT"),
            m = a("KRWX"),
            u = a("ygO2"),
            p = a("OWtl");

        function f() {}
        a.d(t, {}, {
            a: function(e) {
                let t, a, h, x, g, b, v, y, j, w = (0, n.c)(26),
                    {
                        conversationId: N,
                        hostId: k,
                        requestId: S,
                        serverName: C,
                        onReply: F,
                        onStandaloneResponseChange: M,
                        isSubmitting: A
                    } = e,
                    E = void 0 !== A && A,
                    L = (0, i.y)(p.a),
                    I = (0, m.b)(),
                    [P, z] = (0, s.useState)(!1),
                    O = (0, s.useRef)(!1);
                w[0] !== N || w[1] !== k || w[2] !== E || w[3] !== F || w[4] !== M || w[5] !== S || w[6] !== L ? (t = e => {
                    if (E || O.current) return;
                    let t = () => null != F ? F(e) : (0, c.b)(L, k).replyWithMcpServerElicitationResponse(N, S, (0, r.b)(e));
                    null == M ? t().catch(f) : (O.current = !0, z(!0), M("submitting"), Promise.resolve().then(t).then(() => M("decline" === e ? "declined" : "canceled"), () => M("failed")).finally(() => {
                        O.current = !1, z(!1)
                    }))
                }, w[0] = N, w[1] = k, w[2] = E, w[3] = F, w[4] = M, w[5] = S, w[6] = L, w[7] = t) : t = w[7];
                let T = t;
                w[8] !== T ? (a = e => {
                    "Escape" === e.key && (e.preventDefault(), T("cancel"))
                }, w[8] = T, w[9] = a) : a = w[9], w[10] !== C ? (h = (0, l.jsxs)("div", {
                    className: "text-sm font-medium",
                    children: [(0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(o.a, {
                            id: "composer.openAIForm.invalidInput.serverTitle",
                            defaultMessage: "{serverName} requested a form that cannot be displayed",
                            description: "Title identifying the server that requested a form the browser cannot display",
                            values: {
                                serverName: C
                            }
                        })
                    }), null]
                }), w[10] = C, w[11] = h) : h = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, l.jsxs)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: [(0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(o.a, {
                            id: "composer.openAIForm.invalidInput.dismissInstruction",
                            defaultMessage: "Dismiss the request to close it",
                            description: "Instruction for closing a form the browser cannot display"
                        })
                    }), null]
                }), w[12] = x) : x = w[12], w[13] !== h ? (g = (0, l.jsxs)("div", {
                    className: "flex flex-col gap-1 p-4",
                    children: [h, x]
                }), w[13] = h, w[14] = g) : g = w[14];
                let D = E || P;
                return w[15] !== T ? (b = () => T("cancel"), w[15] = T, w[16] = b) : b = w[16], w[17] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, l.jsx)(o.a, {
                    id: "composer.openAIForm.unsupported.dismiss",
                    defaultMessage: "Dismiss",
                    description: "Action for dismissing an unsupported OpenAI form request"
                }), w[17] = v) : v = w[17], w[18] !== I || w[19] !== D || w[20] !== b ? (y = (0, l.jsxs)("div", {
                    className: "flex justify-end gap-2 px-4 py-3",
                    children: [(0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(u.a, {
                            autoFocus: I,
                            color: "primary",
                            size: "composer",
                            disabled: D,
                            onClick: b,
                            children: v
                        })
                    }), null]
                }), w[18] = I, w[19] = D, w[20] = b, w[21] = y) : y = w[21], w[22] !== y || w[23] !== a || w[24] !== g ? (j = (0, l.jsx)(d.a, {
                    children: (0, l.jsxs)("div", {
                        className: "flex flex-col",
                        role: "presentation",
                        onKeyDown: a,
                        children: [g, y]
                    })
                }), w[22] = y, w[23] = a, w[24] = g, w[25] = j) : j = w[25], j
            }
        })
    }),
    JEWd: (function(e, t, a) {
        var l = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            r = a("zd8w"),
            s = a("ygO2"),
            o = a("IxWh"),
            c = a("HOLv"),
            d = a("bIvi"),
            m = a("NPOt"),
            u = a("apAq");
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
        a.d(t, {}, {
            a: function(e) {
                let t, a, f, h, x, g, b, v, y, j, w, N = (0, n.c)(38),
                    {
                        ariaInvalid: k,
                        ariaLabel: S,
                        backLabel: C,
                        children: F,
                        forwardLabel: M,
                        header: A,
                        layout: E,
                        role: L,
                        shouldUseReducedMotion: I
                    } = e,
                    P = void 0 === E ? "form" : E,
                    z = void 0 === L ? "group" : L;
                N[0] !== F ? (t = r.Children.count(F), N[0] = F, N[1] = t) : t = N[1];
                let O = t,
                    T = (0, r.useRef)(null),
                    [D, _] = (0, r.useState)("ltr"),
                    [q, R] = (0, r.useState)(!1),
                    [U, B] = (0, r.useState)(!1);
                N[2] === Symbol.for("react.memo_cache_sentinel") ? (a = e => {
                    let t = "rtl" === getComputedStyle(e).direction ? "rtl" : "ltr";
                    _(t);
                    let {
                        maximum: a,
                        minimum: l
                    } = (0, o.a)(e, t);
                    "rtl" === t ? (R(e.scrollLeft < a - 1), B(e.scrollLeft > l + 1)) : (R(e.scrollLeft > l + 1), B(e.scrollLeft < a - 1))
                }, N[2] = a) : a = N[2];
                let K = (0, d.a)(a),
                    V = e => {
                        if (T.current = e, null == e || 0 === O || (K(e), "u" < typeof ResizeObserver)) return;
                        let t = () => K(e),
                            a = new ResizeObserver(t),
                            l = new MutationObserver(t);
                        return l.observe(e, {
                            childList: !0
                        }), a.observe(e), null != e.firstElementChild && a.observe(e.firstElementChild), null != e.lastElementChild && a.observe(e.lastElementChild), () => {
                            a.disconnect(), l.disconnect(), T.current = null
                        }
                    },
                    W = "form" === P && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                    H = "gallery" === P && "gap-2";
                N[3] !== W || N[4] !== H ? (f = (0, i.b)("flex items-center", W, H), N[3] = W, N[4] = H, N[5] = f) : f = N[5];
                let Q = [-1, 1].map(e => {
                    let t = -1 === e ? q : U,
                        a = -1 === e ? C : M;
                    return (0, l.jsx)(s.a, {
                        className: (0, i.b)("pointer-events-auto", "form" === P && !t && "invisible"),
                        "aria-label": a,
                        ...p[P],
                        disabled: !t,
                        onClick: () => {
                            let t;
                            null != (t = T.current) && t.scrollTo({
                                left: (0, o.b)(t, e, "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"),
                                behavior: I ? "instant" : "smooth"
                            })
                        },
                        radius: "compact" === P ? void 0 : "full",
                        title: a,
                        uniform: !0,
                        children: (0, l.jsx)(c.a, {
                            className: e === ("rtl" === D ? 1 : -1) ? "rotate-180" : void 0,
                            asset: "gallery" === P ? m.a : u.a
                        })
                    }, e)
                });
                N[6] !== f || N[7] !== Q ? (h = (0, l.jsx)("div", {
                    className: f,
                    children: Q
                }), N[6] = f, N[7] = Q, N[8] = h) : h = N[8];
                let G = h,
                    Z = "gallery" === P && "gap-4",
                    Y = "compact" === P && "gap-2",
                    J = "form" === P && "gap-1.5";
                N[9] !== Z || N[10] !== Y || N[11] !== J ? (x = (0, i.b)("flex min-w-0 flex-col", Z, Y, J), N[9] = Z, N[10] = Y, N[11] = J, N[12] = x) : x = N[12], N[13] !== A || N[14] !== P || N[15] !== G ? (g = null != A || "form" !== P ? (0, l.jsxs)("div", {
                    className: (0, i.b)("flex min-w-0 items-center", "form" === P && "gap-1 px-4 py-1.5", "compact" === P && "gap-3", "gallery" === P && "min-h-9 gap-3"),
                    children: [(0, l.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: A
                    }), "form" !== P ? G : null]
                }) : null, N[13] = A, N[14] = P, N[15] = G, N[16] = g) : g = N[16];
                let X = "form" === P ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
                    $ = "gallery" === P && "gap-3",
                    ee = "compact" === P && "gap-2";
                N[17] !== X || N[18] !== $ || N[19] !== ee ? (b = (0, i.b)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", X, $, ee), N[17] = X, N[18] = $, N[19] = ee, N[20] = b) : b = N[20];
                let et = k || void 0;
                N[21] !== K ? (v = e => K(e.currentTarget), N[21] = K, N[22] = v) : v = N[22], N[23] !== S || N[24] !== F || N[25] !== z || N[26] !== V || N[27] !== b || N[28] !== et || N[29] !== v ? (y = (0, l.jsx)("div", {
                    ref: V,
                    className: b,
                    "data-horizontal-scroll": !0,
                    role: z,
                    "aria-invalid": et,
                    "aria-label": S,
                    onScroll: v,
                    children: F
                }), N[23] = S, N[24] = F, N[25] = z, N[26] = V, N[27] = b, N[28] = et, N[29] = v, N[30] = y) : y = N[30];
                let ea = "form" === P ? G : null;
                return N[31] !== y || N[32] !== ea ? (j = (0, l.jsxs)("div", {
                    className: "relative min-w-0",
                    children: [y, ea]
                }), N[31] = y, N[32] = ea, N[33] = j) : j = N[33], N[34] !== x || N[35] !== g || N[36] !== j ? (w = (0, l.jsxs)("div", {
                    className: x,
                    children: [g, j]
                }), N[34] = x, N[35] = g, N[36] = j, N[37] = w) : w = N[37], w
            }
        })
    }),
    K1S5: (function(e, t, a) {
        a.d(t, {
            a: () => eX
        });
        var l = a("ABep"),
            n = a("QosV"),
            i = a("MnTr"),
            r = a("on57"),
            s = a("iTtm"),
            o = a("xnQm"),
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
            v = a("rP0s"),
            y = a("oyxz"),
            j = a("ygO2"),
            w = a("jDEJ");

        function N(e) {
            let t, a, i, r, s, o, c = (0, n.c)(14),
                {
                    disabled: d,
                    isSubmitting: m,
                    hotkeysEnabled: u,
                    onDecline: p
                } = e;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.jsx)(y.a, {
                id: "composer.mcpConfirmation.button.decline",
                defaultMessage: "Decline",
                description: "Short secondary button in an app's confirmation request. Rejects the described action without submitting form values. The other button is Accept."
            }), c[0] = t) : t = c[0], c[1] !== m || c[2] !== p ? (a = (0, l.jsx)(j.a, {
                color: "ghost",
                size: "composer",
                disabled: m,
                type: "button",
                onClick: p,
                children: t
            }), c[1] = m, c[2] = p, c[3] = a) : a = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, l.jsx)(y.a, {
                id: "composer.mcpConfirmation.button.accept",
                defaultMessage: "Accept",
                description: "Short primary button in an app's confirmation request. Explicitly confirms the action described in the request. The other button is Decline."
            }), c[4] = i) : i = c[4], c[5] !== u ? (r = u && (0, l.jsx)(f.b, {
                variant: "primary",
                children: (0, w.b)("Enter")
            }), c[5] = u, c[6] = r) : r = c[6], c[7] !== d || c[8] !== m || c[9] !== r ? (s = (0, l.jsxs)(j.a, {
                color: "primary",
                size: "composer",
                type: "submit",
                disabled: d,
                loading: m,
                children: [i, r]
            }), c[7] = d, c[8] = m, c[9] = r, c[10] = s) : s = c[10], c[11] !== a || c[12] !== s ? (o = (0, l.jsxs)("div", {
                className: "flex shrink-0 items-center justify-end gap-2 px-4 py-3",
                children: [a, s]
            }), c[11] = a, c[12] = s, c[13] = o) : o = c[13], o
        }
        var k = a("QRIH"),
            S = a("nxd2"),
            C = a("OWtl"),
            F = a("tSEg"),
            M = a("LVsP"),
            A = a("pHQ8"),
            E = a("AqHC"),
            L = a("q475"),
            I = a("K0rn"),
            P = a("IRP0");

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
                    return (0, L.c)(t) || (0, I.b)(t) ? [] : [{
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

        function O(e, t) {
            return t?.selected && t.text.length > 0 && Array.isArray(e) ? [...e, t.text] : e
        }
        var T = a("tO3J");

        function D(e, t) {
            return !e.defaultPrevented && !e.nativeEvent.isComposing && 229 !== e.nativeEvent.keyCode && !!(0, T.b)(e.nativeEvent, "Enter") && (e.preventDefault(), e.repeat || t(), !0)
        }
        var _ = a("vPGU"),
            q = a("DNYL"),
            R = a("g2Gi"),
            U = a("bf6R"),
            B = a("bqtn"),
            K = a("hHij");

        function V(e) {
            let t, a = (0, n.c)(4),
                {
                    options: i,
                    disabled: r,
                    onAccept: s
                } = e;
            return a[0] !== r || a[1] !== s || a[2] !== i ? (t = (0, l.jsx)("div", {
                className: "me-auto max-w-full min-w-0",
                children: 1 === i.length ? (0, l.jsx)(q.a, {
                    content: (0, l.jsxs)(l.Fragment, {
                        children: [i[0].title, i[0].description && (0, l.jsx)("p", {
                            children: i[0].description
                        })]
                    }),
                    children: (0, l.jsx)(j.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        className: "max-w-full",
                        disabled: r,
                        "aria-description": i[0].description,
                        onClick: () => s(i[0].const),
                        children: (0, l.jsx)("span", {
                            className: "min-w-0 truncate",
                            children: i[0].title
                        })
                    })
                }) : (0, l.jsx)(B.a, {
                    align: "start",
                    disabled: r,
                    triggerButton: (0, l.jsxs)(j.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        disabled: r,
                        children: [(0, l.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.moreAcceptActions",
                            defaultMessage: "More actions",
                            description: "Opens additional actions that accept and submit the form"
                        }), (0, l.jsx)(K.a, {
                            className: "size-3"
                        })]
                    }),
                    children: i.map(e => (0, l.jsx)(B.c.Item, {
                        disabled: r,
                        allowWrap: !0,
                        subTextAllowWrap: !0,
                        SubText: null == e.description ? null : (0, l.jsx)(l.Fragment, {
                            children: e.description
                        }),
                        onSelect: () => s(e.const),
                        children: e.title
                    }, e.const))
                })
            }), a[0] = r, a[1] = s, a[2] = i, a[3] = t) : t = a[3], t
        }

        function W(e) {
            let t, a, i, s, o, c, d, m, u = (0, n.c)(48),
                {
                    autoResolution: p,
                    disabled: h,
                    isSubmitting: x,
                    submitDisabled: g,
                    acceptOptions: b,
                    primaryActionRef: v,
                    fieldCount: N,
                    isLastGroup: k,
                    onBack: S,
                    hotkeysEnabled: C,
                    isStandardForm: F,
                    showSubmit: M,
                    showHeader: A,
                    onCancel: E,
                    onDecline: L,
                    onDismissLegacyImagePicker: I,
                    onViewAll: P
                } = e,
                z = void 0 !== x && x,
                O = b?.required === !0 && b.options.length > 1,
                T = b?.required ? b.options[0] : void 0;
            u[0] !== b?.options || u[1] !== T ? (t = b?.options.slice(+(null != T)) ?? [], u[0] = b?.options, u[1] = T, u[2] = t) : t = u[2];
            let D = t;
            if (null != I) {
                let e, t = p?.deadlineMs ?? "no-deadline",
                    n = p?.deadlineMs,
                    i = p?.nowMs;
                u[3] !== z || u[4] !== I || u[5] !== t || u[6] !== n || u[7] !== i ? (e = (0, l.jsx)(R.a, {
                    disabled: z,
                    deadlineMs: n,
                    nowMs: i,
                    variant: "button",
                    onDismiss: I
                }, t), u[3] = z, u[4] = I, u[5] = t, u[6] = n, u[7] = i, u[8] = e) : e = u[8], a = e
            } else {
                let e, t;
                u[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.deny",
                    defaultMessage: "Deny",
                    description: "Declines the form without submitting its values"
                }), u[9] = e) : e = u[9], u[10] !== h || u[11] !== L ? (t = (0, l.jsx)(j.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: h,
                    onClick: L,
                    children: e
                }), u[10] = h, u[11] = L, u[12] = t) : t = u[12], a = t
            }
            return u[13] !== h || u[14] !== S ? (i = null != S && (0, l.jsx)(j.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: h,
                onClick: S,
                children: (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.back",
                    defaultMessage: "Back",
                    description: "Return to the previous form step"
                })
            }), u[13] = h, u[14] = S, u[15] = i) : i = u[15], u[16] !== b || u[17] !== h || u[18] !== P ? (s = null != P ? (0, l.jsx)("div", {
                className: null == b ? "me-auto" : void 0,
                children: (0, l.jsxs)(j.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: h,
                    onClick: P,
                    children: [(0, l.jsx)(U.Mh, {}), (0, l.jsx)(y.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })
            }) : null, u[16] = b, u[17] = h, u[18] = P, u[19] = s) : s = u[19], u[20] !== z || u[21] !== E || u[22] !== I || u[23] !== A ? (o = !A && null == I && (0, l.jsx)(j.a, {
                color: "ghost",
                size: "composer",
                disabled: z,
                onClick: E,
                children: (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.cancel",
                    defaultMessage: "Cancel",
                    description: "Cancel an MCP form when it has no header dismiss button"
                })
            }), u[20] = z, u[21] = E, u[22] = I, u[23] = A, u[24] = o) : o = u[24], u[25] !== b || u[26] !== D || u[27] !== g ? (c = null != b && D.length > 0 && (0, l.jsx)(V, {
                options: D,
                disabled: g,
                onAccept: b.onSelect
            }), u[25] = b, u[26] = D, u[27] = g, u[28] = c) : c = u[28], u[29] !== b || u[30] !== N || u[31] !== C || u[32] !== k || u[33] !== F || u[34] !== z || u[35] !== v || u[36] !== T || u[37] !== O || u[38] !== M || u[39] !== g ? (d = (null != b || M) && (0, l.jsx)(q.a, {
                content: T && (0, l.jsxs)(l.Fragment, {
                    children: [T.title, T.description && (0, l.jsx)("p", {
                        children: T.description
                    })]
                }),
                children: (0, l.jsxs)(j.a, {
                    autoFocus: C && 0 === N,
                    className: "max-w-full",
                    color: "primary",
                    size: "composer",
                    type: O ? "button" : "submit",
                    ref: v,
                    onClick: null != T && null != b && O ? () => b.onSelect(T.const) : void 0,
                    "aria-description": T?.description,
                    disabled: g,
                    loading: z,
                    children: [(0, l.jsx)("span", {
                        className: (0, r.b)("min-w-0 truncate", F && "text-sm font-medium"),
                        children: k ? T?.title ?? (0, l.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept",
                            description: "Accepts the form and submits its answers"
                        }) : (0, l.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.next",
                            defaultMessage: "Next",
                            description: "Continue to the next form step"
                        })
                    }), C && !O && (0, l.jsx)(f.b, {
                        variant: "primary",
                        children: (0, w.b)("Enter")
                    })]
                })
            }), u[29] = b, u[30] = N, u[31] = C, u[32] = k, u[33] = F, u[34] = z, u[35] = v, u[36] = T, u[37] = O, u[38] = M, u[39] = g, u[40] = d) : d = u[40], u[41] !== a || u[42] !== i || u[43] !== s || u[44] !== o || u[45] !== c || u[46] !== d ? (m = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
                children: [i, s, o, c, a, d]
            }), u[41] = a, u[42] = i, u[43] = s, u[44] = o, u[45] = c, u[46] = d, u[47] = m) : m = u[47], m
        }
        var H = a("Wyro"),
            Q = a.n(H),
            G = a("Qr2V"),
            Z = a("zLIa"),
            Y = a("E6P3"),
            J = a("oSX4"),
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
            let t, a, i, s, o, c = (0, n.c)(22),
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
            c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(U.Nc, {}), c[3] = a) : a = c[3];
            let N = a;
            if (null != j) {
                let e, t;
                c[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(U.Nc, {}), c[4] = e) : e = c[4], c[5] !== w || c[6] !== j ? (t = (0, l.jsx)(Y.a, {
                    className: w,
                    alt: "",
                    fallback: e,
                    src: j
                }), c[5] = w, c[6] = j, c[7] = t) : t = c[7], N = t
            } else if ("text/html" === y || "application/xhtml+xml" === y) {
                let e;
                c[8] !== w ? (e = (0, l.jsx)(J.a, {
                    className: w
                }), c[8] = w, c[9] = e) : e = c[9], N = e
            }
            let k = "card" === f || "card-icon" === f,
                S = "icon" === f,
                C = "thumbnail" === f;
            return c[10] !== k || c[11] !== S || c[12] !== C ? (i = (0, r.b)("flex items-center justify-center overflow-hidden", {
                "h-full w-full": k,
                "size-5 shrink-0 rounded-xs": S,
                "size-10 shrink-0 rounded-md bg-surface": C
            }), c[10] = k, c[11] = S, c[12] = C, c[13] = i) : i = c[13], c[14] !== h || c[15] !== N || c[16] !== v || c[17] !== f ? (s = null == v || h === v ? N : (0, l.jsx)("img", {
                alt: "",
                className: (0, r.b)("card-icon" === f ? "size-10" : "h-full w-full", "icon" === f || "card-icon" === f ? "object-contain" : "object-scale-down", "card" === f && "block"),
                decoding: "async",
                draggable: !1,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: v,
                onError: () => x(v)
            }), c[14] = h, c[15] = N, c[16] = v, c[17] = f, c[18] = s) : s = c[18], c[19] !== i || c[20] !== s ? (o = (0, l.jsx)("span", {
                className: i,
                children: s
            }), c[19] = i, c[20] = s, c[21] = o) : o = c[21], o
        }

        function ei(e) {
            let t, a, i, r, s, o, c, m, u = (0, n.c)(61),
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
                S = b ? G.a : G.b,
                C = "string" == typeof y ? y : void 0;
            u[0] !== y ? (t = Array.isArray(y) ? y : [], u[0] = y, u[1] = t) : t = u[1];
            let F = t;
            u[2] !== v ? (a = v.some(er), u[2] = v, u[3] = a) : a = u[3];
            let M = a;
            u[4] !== b || u[5] !== v || u[6] !== C ? (i = b ? 0 : Math.max(0, v.findIndex(e => e.const === C)), u[4] = b, u[5] = v, u[6] = C, u[7] = i) : i = u[7];
            let A = i;
            u[8] !== x || u[9] !== b || u[10] !== j || u[11] !== v || u[12] !== w ? (r = e => {
                let t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) || !t.matches('input[type="radio"], button[role="checkbox"]') || D(e, () => {
                        b || !w || t instanceof HTMLInputElement && !t.checked ? t.click() : t.form?.requestSubmit()
                    }) || e.defaultPrevented || e.nativeEvent.isComposing || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || "ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let a = Array.from(e.currentTarget.querySelectorAll('input[type="radio"], button[role="checkbox"]')),
                    l = (a.indexOf(t) + ("ArrowDown" === e.key ? 1 : -1) + a.length) % a.length,
                    n = a[l];
                if (null != n && (e.preventDefault(), n.focus(), !b)) {
                    let e = v[l];
                    null != e ? j(e.const) : x?.onSelect(!0)
                }
            }, u[8] = x, u[9] = b, u[10] = j, u[11] = v, u[12] = w, u[13] = r) : r = u[13];
            let E = r;
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
                        children: [!b && (0, l.jsx)(G.c, {
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
                }, u[28] = S, u[29] = p, u[30] = x?.selected, u[31] = A, u[32] = M, u[33] = N, u[34] = g, u[35] = b, u[36] = j, u[37] = C, u[38] = F, u[39] = k, u[40] = e) : e = u[40], s = v.map(e), u[14] = S, u[15] = p, u[16] = x?.selected, u[17] = A, u[18] = M, u[19] = N, u[20] = g, u[21] = b, u[22] = j, u[23] = v, u[24] = C, u[25] = F, u[26] = k, u[27] = s
            } else s = u[27];
            return u[41] !== x || u[42] !== g || u[43] !== b || u[44] !== j || u[45] !== v || u[46] !== F ? (o = null != x && b ? F.map((e, t) => v.some(t => t.const === e) && F.indexOf(e) === t ? null : (0, l.jsx)(G.a, {
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
                    children: !b && (0, l.jsx)(G.c, {
                        selected: x.selected,
                        variant: "custom"
                    })
                })
            }) : null, u[48] = S, u[49] = p, u[50] = x, u[51] = N, u[52] = g, u[53] = b, u[54] = v.length, u[55] = c) : c = u[55], u[56] !== E || u[57] !== s || u[58] !== o || u[59] !== c ? (m = (0, l.jsxs)("div", {
                className: "flex flex-col gap-1",
                "data-mcp-form-choices": !0,
                role: "group",
                onKeyDownCapture: E,
                children: [s, o, c]
            }), u[56] = E, u[57] = s, u[58] = o, u[59] = c, u[60] = m) : m = u[60], m
        }

        function er(e) {
            return null != e["x-openai-thumbnail"]
        }

        function es(e) {
            let t, a, i, r, s, o, c = (0, n.c)(29),
                {
                    schema: d,
                    value: m
                } = e;
            if ("array" === d.type && Array.isArray(m) && m.length >= Number(d.minItems ?? 0) && (null == d.maxItems || m.length <= Number(d.maxItems)) && "type" in d.items && "string" === d.items.type && !("x-openai-input" in d.items)) {
                let e;
                return c[0] !== d.items ? (e = (0, l.jsx)(es, {
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
            return c[2] !== x || c[3] !== h || c[4] !== f || c[5] !== d.type ? (t = "array" === d.type && "none" !== x ? (0, l.jsx)(y.a, {
                id: "composer.mcpFormElicitation.selectionCount",
                defaultMessage: "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                description: "Number of choices or files allowed in an MCP form; bounds specifies an exact count, a range, a minimum, or a maximum",
                values: {
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[2] = x, c[3] = h, c[4] = f, c[5] = d.type, c[6] = t) : t = c[6], c[7] !== x || c[8] !== h || c[9] !== f || c[10] !== u ? (a = null != u && "none" !== x ? (0, l.jsx)("div", {
                children: (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.textLength",
                    defaultMessage: "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                    description: "Text length allowed in an MCP form; bounds specifies an exact length, a range, a minimum, or a maximum",
                    values: {
                        bounds: x,
                        minimum: f,
                        maximum: h
                    }
                })
            }) : null, c[7] = x, c[8] = h, c[9] = f, c[10] = u, c[11] = a) : a = c[11], c[12] !== x || c[13] !== h || c[14] !== f || c[15] !== p ? (i = null != p ? (0, l.jsx)(y.a, {
                id: "composer.mcpFormElicitation.numberRange",
                defaultMessage: "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                description: "Numeric value allowed in an MCP form; kind distinguishes whole numbers from decimals, and bounds specifies an exact value, a range, a minimum, a maximum, or no limit",
                values: {
                    kind: p.type,
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[12] = x, c[13] = h, c[14] = f, c[15] = p, c[16] = i) : i = c[16], c[17] !== g ? (r = null != g ? (0, l.jsx)("div", {
                children: (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.requiredFormat",
                    defaultMessage: "Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}",
                    description: "Expected format for an MCP form answer; format is email, uri, date, or datetime. The datetime example shows the accepted ISO timestamp syntax",
                    values: {
                        format: "date-time" === g ? "datetime" : g
                    }
                })
            }) : null, c[17] = g, c[18] = r) : r = c[18], c[19] !== x || c[20] !== g || c[21] !== p ? (s = "none" === x && null == p && null == g ? (0, l.jsx)(y.a, {
                id: "composer.mcpFormElicitation.invalidField",
                defaultMessage: "Check this answer and try again",
                description: "Validation message shown when an MCP form answer is missing or does not meet its requirements"
            }) : null, c[19] = x, c[20] = g, c[21] = p, c[22] = s) : s = c[22], c[23] !== t || c[24] !== a || c[25] !== i || c[26] !== r || c[27] !== s ? (o = (0, l.jsxs)("div", {
                role: "alert",
                children: [t, a, i, r, s]
            }), c[23] = t, c[24] = a, c[25] = i, c[26] = r, c[27] = s, c[28] = o) : o = c[28], o
        }

        function eo(e) {
            let t, a = (0, n.c)(15),
                {
                    id: i,
                    autoFocus: s,
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
            return a[0] !== s || a[1] !== v || a[2] !== w || a[3] !== p || a[4] !== i || a[5] !== c || a[6] !== j || a[7] !== d || a[8] !== x || a[9] !== b || a[10] !== g || a[11] !== m || a[12] !== h || a[13] !== y ? (t = null == p ? (0, l.jsx)("textarea", {
                id: i,
                ref: s ? ec : void 0,
                autoFocus: s,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: m,
                className: (0, r.b)(w, "[field-sizing:content] max-h-48 resize-none overflow-y-auto", "default" === y && "py-2", j ? "min-h-20" : "default" === y && "min-h-8"),
                rows: j ? 3 : 1,
                value: h,
                onChange: e => x(e.currentTarget.value),
                onKeyDown: g,
                onFocus: b
            }) : (0, l.jsx)("input", {
                id: i,
                autoFocus: s,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: m,
                className: (0, r.b)(w, "default" === y && "h-8"),
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
            }), a[0] = s, a[1] = v, a[2] = w, a[3] = p, a[4] = i, a[5] = c, a[6] = j, a[7] = d, a[8] = x, a[9] = b, a[10] = g, a[11] = m, a[12] = h, a[13] = y, a[14] = t) : t = a[14], t
        }

        function ec(e) {
            null != e && e.setSelectionRange(e.value.length, e.value.length)
        }

        function ed(e) {
            let t, a, i, r, s, o, c, d, u, p, f, h, x, g = (0, n.c)(62),
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
                L = void 0 === v || v,
                I = (0, m.a)(),
                P = S || "string" != typeof F || C.some(e => e.const === F) ? "" : F;
            g[0] !== M || g[1] !== P ? (t = M ?? {
                text: P,
                selected: "" !== P
            }, g[0] = M, g[1] = P, g[2] = t) : t = g[2];
            let z = t;
            g[3] !== I ? (a = I.formatMessage({
                id: "composer.mcpFormElicitation.customChoice",
                defaultMessage: "Something else",
                description: "The final choice in a form field, where the user can type their own answer"
            }), g[3] = I, g[4] = a) : a = g[4];
            let O = a;
            g[5] !== z || g[6] !== S || g[7] !== E || g[8] !== A ? (i = e => {
                e !== z.selected && (A({
                    ...z,
                    selected: e
                }), S || E(e ? z.text : ""))
            }, g[5] = z, g[6] = S, g[7] = E, g[8] = A, g[9] = i) : i = g[9];
            let T = i;
            g[10] !== z.selected || g[11] !== z.text || g[12] !== E || g[13] !== A || g[14] !== F ? (r = () => {
                z.selected && "" !== z.text && (E([...Array.isArray(F) ? F : [], z.text]), A({
                    text: "",
                    selected: !1
                }))
            }, g[10] = z.selected, g[11] = z.text, g[12] = E, g[13] = A, g[14] = F, g[15] = r) : r = g[15];
            let _ = r;
            g[16] !== z || g[17] !== S || g[18] !== E || g[19] !== A ? (s = e => {
                S || A({
                    ...z,
                    selected: !1
                }), E(e)
            }, g[16] = z, g[17] = S, g[18] = E, g[19] = A, g[20] = s) : s = g[20];
            let q = z.selected;
            return g[21] !== I ? (o = I.formatMessage({
                id: "composer.mcpFormElicitation.customPlaceholder",
                defaultMessage: "Or write your own response",
                description: "Placeholder for a custom form response"
            }), g[21] = I, g[22] = o) : o = g[22], g[23] !== T ? (c = () => T(!0), g[23] = T, g[24] = c) : c = g[24], g[25] !== S || g[26] !== E || g[27] !== A ? (d = e => {
                A({
                    text: e,
                    selected: !0
                }), S || E(e)
            }, g[25] = S, g[26] = E, g[27] = A, g[28] = d) : d = g[28], g[29] !== _ || g[30] !== z.selected || g[31] !== z.text || g[32] !== S ? (u = e => {
                if (!S) {
                    "date" !== e.currentTarget.type && D(e, () => e.currentTarget.form?.requestSubmit());
                    return
                }
                z.selected && "" !== z.text && D(e, _) && e.stopPropagation()
            }, g[29] = _, g[30] = z.selected, g[31] = z.text, g[32] = S, g[33] = u) : u = g[33], g[34] !== z.text || g[35] !== y || g[36] !== w || g[37] !== k || g[38] !== j || g[39] !== N || g[40] !== d || g[41] !== u || g[42] !== o || g[43] !== c ? (p = (0, l.jsx)(eo, {
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
            }), g[34] = z.text, g[35] = y, g[36] = w, g[37] = k, g[38] = j, g[39] = N, g[40] = d, g[41] = u, g[42] = o, g[43] = c, g[44] = p) : p = g[44], g[45] !== z.selected || g[46] !== O || g[47] !== T || g[48] !== p ? (f = {
                label: O,
                selected: q,
                onSelect: T,
                editor: p
            }, g[45] = z.selected, g[46] = O, g[47] = T, g[48] = p, g[49] = f) : f = g[49], g[50] !== b || g[51] !== k || g[52] !== S || g[53] !== C || g[54] !== L || g[55] !== f || g[56] !== s || g[57] !== F ? (h = (0, l.jsx)(ei, {
                autoFocus: b,
                submitOnEnter: !1,
                showOptionNumbers: L,
                invalid: k,
                multiple: S,
                options: C,
                value: F,
                onChange: s,
                customOption: f
            }), g[50] = b, g[51] = k, g[52] = S, g[53] = C, g[54] = L, g[55] = f, g[56] = s, g[57] = F, g[58] = h) : h = g[58], g[59] !== y || g[60] !== h ? (x = (0, l.jsx)("fieldset", {
                disabled: y,
                className: "min-w-0",
                children: h
            }), g[59] = y, g[60] = h, g[61] = x) : x = g[61], x
        }

        function em(e) {
            let t, a, i, s = (0, n.c)(101),
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
            s[0] !== p.name || s[1] !== p.schema.title ? (t = p.schema.title ?? Q()(p.name), s[0] = p.name, s[1] = p.schema.title, s[2] = t) : t = s[2];
            let S = t,
                C = !f && null != p.schema.title,
                F = void 0 !== h && h ? null : p.schema.description ?? null,
                M = "boolean" === p.schema.type && p.required && null == p.schema.default;
            s[3] !== p.schema || s[4] !== M ? (a = "array" === p.schema.type || (0, A.e)(p.schema) || M, s[3] = p.schema, s[4] = M, s[5] = a) : a = s[5];
            let E = a,
                L = "array" === p.schema.type ? p.schema.items : p.schema,
                I = E && (0, A.f)(p.schema) ? L : null;
            s[6] !== b || s[7] !== p.schema || s[8] !== x || s[9] !== E || s[10] !== g ? (i = x ? (0, l.jsx)("div", {
                className: (0, r.b)("pt-1 text-size-chat-sm text-danger", (E || "boolean" === p.schema.type) && "px-2"),
                children: (0, l.jsx)(es, {
                    schema: p.schema,
                    value: O(g, b)
                })
            }) : null, s[6] = b, s[7] = p.schema, s[8] = x, s[9] = E, s[10] = g, s[11] = i) : i = s[11];
            let P = i;
            if ("array" === p.schema.type || (0, A.e)(p.schema) || M) {
                let e, t, a, n;
                return s[12] !== S || s[13] !== C ? (e = C && (0, l.jsx)("legend", {
                    className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                    children: S
                }), s[12] = S, s[13] = C, s[14] = e) : e = s[14], s[15] !== F ? (t = (0, l.jsx)(eh, {
                    description: F
                }), s[15] = F, s[16] = t) : t = s[16], s[17] !== o || s[18] !== b || s[19] !== w || s[20] !== p.schema || s[21] !== k || s[22] !== x || s[23] !== S || s[24] !== y || s[25] !== v || s[26] !== M || s[27] !== j || s[28] !== I || s[29] !== g ? (a = null != I ? (0, l.jsx)(ed, {
                    showOptionNumbers: j,
                    autoFocus: o,
                    disabled: w,
                    label: S,
                    format: "format" in I ? I.format : void 0,
                    maxLength: "maxLength" in I ? I.maxLength : void 0,
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
                }), s[17] = o, s[18] = b, s[19] = w, s[20] = p.schema, s[21] = k, s[22] = x, s[23] = S, s[24] = y, s[25] = v, s[26] = M, s[27] = j, s[28] = I, s[29] = g, s[30] = a) : a = s[30], s[31] !== P || s[32] !== S || s[33] !== e || s[34] !== t || s[35] !== a ? (n = (0, l.jsxs)("fieldset", {
                    "aria-label": S,
                    className: "flex flex-col gap-1",
                    children: [e, t, a, P]
                }), s[31] = P, s[32] = S, s[33] = e, s[34] = t, s[35] = a, s[36] = n) : n = s[36], n
            }
            switch (p.schema.type) {
                case "string": {
                    let e, t, a, n;
                    s[37] !== N || s[38] !== S || s[39] !== C ? (e = C && (0, l.jsx)("label", {
                        htmlFor: N,
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: S
                    }), s[37] = N, s[38] = S, s[39] = C, s[40] = e) : e = s[40], s[41] !== F ? (t = (0, l.jsx)(eh, {
                        description: F,
                        inset: !1
                    }), s[41] = F, s[42] = t) : t = s[42];
                    let i = "format" in p.schema ? p.schema.format : void 0,
                        r = "maxLength" in p.schema ? p.schema.maxLength : void 0,
                        c = "string" == typeof g ? g : "";
                    return s[43] !== o || s[44] !== w || s[45] !== N || s[46] !== x || s[47] !== S || s[48] !== y || s[49] !== r || s[50] !== c || s[51] !== i ? (a = (0, l.jsx)(eo, {
                        id: N,
                        disabled: w,
                        autoFocus: o,
                        invalid: x,
                        label: S,
                        format: i,
                        maxLength: r,
                        value: c,
                        onChange: y,
                        onKeyDown: ef
                    }), s[43] = o, s[44] = w, s[45] = N, s[46] = x, s[47] = S, s[48] = y, s[49] = r, s[50] = c, s[51] = i, s[52] = a) : a = s[52], s[53] !== P || s[54] !== a || s[55] !== e || s[56] !== t ? (n = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, a, P]
                    }), s[53] = P, s[54] = a, s[55] = e, s[56] = t, s[57] = n) : n = s[57], n
                }
                case "boolean": {
                    let e, t, a, n, i, r, c = !0 === g;
                    s[58] !== y || s[59] !== g ? (e = () => y(!0 !== g), s[58] = y, s[59] = g, s[60] = e) : e = s[60];
                    let d = !0 === g;
                    return s[61] !== d ? (t = (0, l.jsx)("span", {
                        className: "flex h-5 items-center",
                        children: (0, l.jsx)(G.c, {
                            selected: d,
                            variant: "checkbox"
                        })
                    }), s[61] = d, s[62] = t) : t = s[62], s[63] !== p.schema.title ? (a = null != p.schema.title && (0, l.jsx)("span", {
                        className: "min-w-0 text-sm font-medium wrap-anywhere",
                        children: p.schema.title
                    }), s[63] = p.schema.title, s[64] = a) : a = s[64], s[65] !== o || s[66] !== N || s[67] !== x || s[68] !== S || s[69] !== t || s[70] !== a || s[71] !== c || s[72] !== e ? (n = (0, l.jsxs)(G.b, {
                        accessibilityLabel: S,
                        autoFocus: o,
                        checked: c,
                        invalid: x,
                        name: N,
                        type: "checkbox",
                        onChange: e,
                        onKeyDown: ep,
                        children: [t, a]
                    }), s[65] = o, s[66] = N, s[67] = x, s[68] = S, s[69] = t, s[70] = a, s[71] = c, s[72] = e, s[73] = n) : n = s[73], s[74] !== F ? (i = (0, l.jsx)(eh, {
                        description: F
                    }), s[74] = F, s[75] = i) : i = s[75], s[76] !== P || s[77] !== n || s[78] !== i ? (r = (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [n, i, P]
                    }), s[76] = P, s[77] = n, s[78] = i, s[79] = r) : r = s[79], r
                }
                case "integer":
                case "number": {
                    let e, t, a, n, i;
                    s[80] !== S || s[81] !== C ? (e = C && (0, l.jsx)("div", {
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: S
                    }), s[80] = S, s[81] = C, s[82] = e) : e = s[82], s[83] !== F ? (t = (0, l.jsx)(eh, {
                        description: F,
                        inset: !1
                    }), s[83] = F, s[84] = t) : t = s[84];
                    let r = x || void 0,
                        c = "integer" === p.schema.type && null != p.schema.minimum ? Math.ceil(p.schema.minimum) : p.schema.minimum,
                        d = "integer" === p.schema.type ? 1 : "any",
                        m = "number" == typeof g || "string" == typeof g ? g : "";
                    return s[85] !== y ? (a = e => y(e.currentTarget.value), s[85] = y, s[86] = a) : a = s[86], s[87] !== o || s[88] !== p.schema.maximum || s[89] !== S || s[90] !== c || s[91] !== d || s[92] !== m || s[93] !== a || s[94] !== r ? (n = (0, l.jsx)(Z.a, {
                        autoFocus: o,
                        "aria-label": S,
                        "aria-invalid": r,
                        max: p.schema.maximum,
                        min: c,
                        step: d,
                        type: "number",
                        value: m,
                        onChange: a,
                        onKeyDown: eu
                    }), s[87] = o, s[88] = p.schema.maximum, s[89] = S, s[90] = c, s[91] = d, s[92] = m, s[93] = a, s[94] = r, s[95] = n) : n = s[95], s[96] !== P || s[97] !== n || s[98] !== e || s[99] !== t ? (i = (0, l.jsxs)("label", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, n, P]
                    }), s[96] = P, s[97] = n, s[98] = e, s[99] = t, s[100] = i) : i = s[100], i
                }
            }
        }

        function eu(e) {
            D(e, () => e.currentTarget.form?.requestSubmit())
        }

        function ep(e) {
            D(e, () => e.currentTarget.click())
        }

        function ef(e) {
            "date" !== e.currentTarget.type && D(e, () => e.currentTarget.form?.requestSubmit())
        }

        function eh(e) {
            let t, a, i = (0, n.c)(5),
                {
                    description: s,
                    inset: o
                } = e;
            if (null == s) return null;
            let c = (void 0 === o || o) && "px-2";
            return i[0] !== c ? (t = (0, r.b)("text-size-chat-sm wrap-anywhere text-codex-description", c), i[0] = c, i[1] = t) : t = i[1], i[2] !== s || i[3] !== t ? (a = (0, l.jsx)("div", {
                className: t,
                children: s
            }), i[2] = s, i[3] = t, i[4] = a) : a = i[4], a
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

        function eS(e) {
            let t, a, i, s, o, c, d, m, u, p, f, h, x, g, b = (0, n.c)(63),
                {
                    action: v,
                    previewAction: y,
                    metadata: j,
                    layout: w,
                    autoFocus: N,
                    children: k,
                    disabled: S,
                    invalid: C,
                    isPortrait: F,
                    selected: M,
                    highlighted: A,
                    separatorBefore: E,
                    title: L
                } = e,
                I = void 0 === w ? "carousel" : w,
                P = void 0 !== F && F,
                z = void 0 !== A && A,
                O = "button" === e.type || "preview" === e.type;
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                button: "button",
                preview: "button",
                static: "div",
                checkbox: "label",
                radio: "label"
            }, b[0] = t) : t = b[0];
            let T = t[e.type],
                _ = E && "ps-4";
            b[1] !== _ ? (a = (0, r.b)("group/composer-attachment relative min-w-0 shrink-0 snap-start", _), b[1] = _, b[2] = a) : a = b[2], b[3] !== E ? (i = E && (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle"
            }), b[3] = E, b[4] = i) : i = b[4];
            let q = O && N,
                R = "carousel" === I ? "w-fit" : "w-full",
                B = "carousel" === I && "-m-1 p-1",
                K = S ? "cursor-default opacity-50" : "static" !== e.type && "cursor-interaction";
            b[5] !== K || b[6] !== R || b[7] !== B ? (s = (0, r.b)("group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none", R, B, K), b[5] = K, b[6] = R, b[7] = B, b[8] = s) : s = b[8];
            let V = O ? S : void 0,
                W = O ? "button" : void 0,
                H = O ? e.onClick : void 0;
            return b[9] !== N || b[10] !== S || b[11] !== e.name || b[12] !== e.onChange || b[13] !== e.type || b[14] !== e.value || b[15] !== M ? (o = "checkbox" === e.type || "radio" === e.type ? (0, l.jsx)("input", {
                autoFocus: N,
                checked: M,
                className: "sr-only",
                disabled: S,
                name: e.name,
                type: e.type,
                value: e.value,
                onChange: e.onChange,
                onKeyDown: t => {
                    "checkbox" === e.type && D(t, () => t.currentTarget.click())
                }
            }) : null, b[9] = N, b[10] = S, b[11] = e.name, b[12] = e.onChange, b[13] = e.type, b[14] = e.value, b[15] = M, b[16] = o) : o = b[16], b[17] !== S || b[18] !== z || b[19] !== C || b[20] !== P || b[21] !== I || b[22] !== e.type || b[23] !== M ? (c = (0, r.b)("relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring", "button" === e.type ? "bg-surface-secondary" : "bg-surface shadow-sm", "standalone" === I && "h-40 w-full", "grid" === I && "w-full", "carousel" === I && "h-34", "button" === e.type && "flex flex-col items-center justify-center gap-2 text-secondary", "standalone" !== I && {
                "aspect-square": "button" === e.type,
                "aspect-[4/5]": "button" !== e.type && P,
                "aspect-video": "button" !== e.type && !P
            }, {
                "border-strong": M,
                "border-text-danger": !M && C,
                "border-default": !M && !C
            }, {
                "ring-ring": z,
                "ring-border-strong": !z && M,
                "ring-text-danger/20": !z && !M && C,
                "ring-transparent": !z && !M && !C
            }, "static" !== e.type && "preview" !== e.type && !S && !M && !z && "group-hover:ring-border-subtle"), b[17] = S, b[18] = z, b[19] = C, b[20] = P, b[21] = I, b[22] = e.type, b[23] = M, b[24] = c) : c = b[24], b[25] !== I || b[26] !== e.type || b[27] !== L ? (d = "button" === e.type && "standalone" === I ? (0, l.jsx)("span", {
                className: "text-sm",
                children: L
            }) : null, b[25] = I, b[26] = e.type, b[27] = L, b[28] = d) : d = b[28], b[29] !== j ? (m = null == j ? null : (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                children: j
            }), b[29] = j, b[30] = m) : m = b[30], b[31] !== v || b[32] !== M ? (u = M ? (0, l.jsx)("span", {
                className: (0, r.b)("absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm", null != v && "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0"),
                children: (0, l.jsx)(U.Tb, {})
            }) : null, b[31] = v, b[32] = M, b[33] = u) : u = b[33], b[34] !== k || b[35] !== c || b[36] !== d || b[37] !== m || b[38] !== u ? (p = (0, l.jsxs)("div", {
                className: c,
                children: [k, d, m, u]
            }), b[34] = k, b[35] = c, b[36] = d, b[37] = m, b[38] = u, b[39] = p) : p = b[39], b[40] !== I || b[41] !== e.type || b[42] !== L ? (f = "button" === e.type && "standalone" === I ? null : (0, l.jsx)("div", {
                className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                children: L
            }), b[40] = I, b[41] = e.type, b[42] = L, b[43] = f) : f = b[43], b[44] !== T || b[45] !== s || b[46] !== V || b[47] !== W || b[48] !== H || b[49] !== o || b[50] !== p || b[51] !== f || b[52] !== q ? (h = (0, l.jsxs)(T, {
                autoFocus: q,
                className: s,
                disabled: V,
                type: W,
                onClick: H,
                children: [o, p, f]
            }), b[44] = T, b[45] = s, b[46] = V, b[47] = W, b[48] = H, b[49] = o, b[50] = p, b[51] = f, b[52] = q, b[53] = h) : h = b[53], b[54] !== y || b[55] !== E ? (x = null == y ? null : (0, l.jsx)("div", {
                className: (0, r.b)("pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100", E ? "start-6" : "start-2"),
                children: y
            }), b[54] = y, b[55] = E, b[56] = x) : x = b[56], b[57] !== v || b[58] !== h || b[59] !== x || b[60] !== a || b[61] !== i ? (g = (0, l.jsxs)("div", {
                className: a,
                children: [i, h, x, v]
            }), b[57] = v, b[58] = h, b[59] = x, b[60] = a, b[61] = i, b[62] = g) : g = b[62], g
        }
        var eC = a("JEWd"),
            eF = a("kSHG"),
            eM = a("Y8CA"),
            eA = a("ASxG"),
            eE = a("w7Qu"),
            eL = a("YvRg"),
            eI = a("t3y3"),
            eP = a("zUz7"),
            ez = a("a6Zv");
        let eO = eA.object({
            target: eM.a
        });

        function eT(e) {
            let t, a, i, r, s, o, c, d, u, p, f, h, x, g, b = (0, n.c)(60),
                {
                    option: v,
                    hostId: w,
                    layout: N,
                    name: k,
                    multiple: S,
                    implicit: C,
                    disabled: F,
                    invalid: M,
                    separatorBefore: A,
                    onChange: E,
                    onRemove: L,
                    onPreview: I
                } = e,
                P = (0, m.a)(),
                z = (0, ez.a)();
            b[0] !== v ? (t = (0, eP.a)(v), b[0] = v, b[1] = t) : t = b[1];
            let O = t,
                T = v.title ?? v.name;
            b[2] !== v._meta ? (a = eF.u.safeParse(v._meta?.["openai/thumbnail"] ?? v._meta?.["openai/preview"]), b[2] = v._meta, b[3] = a) : a = b[3];
            let {
                data: D
            } = a;
            b[4] !== v._meta ? (i = eO.safeParse(v._meta?.["openai/preview"]), b[4] = v._meta, b[5] = i) : i = b[5];
            let {
                data: _
            } = i;
            b[6] !== v._meta || b[7] !== _?.target ? (r = _?.target ?? eM.a.safeParse(v._meta?.["openai/preview"]).data ?? eM.a.safeParse(v._meta?.["openai/target"]).data, b[6] = v._meta, b[7] = _?.target, b[8] = r) : r = b[8];
            let q = r;
            b[9] !== I || b[10] !== q || b[11] !== T ? (s = null == q || null == I ? void 0 : () => I(q, T), b[9] = I, b[10] = q, b[11] = T, b[12] = s) : s = b[12];
            let R = s;
            b[13] !== R ? (o = null == R ? {
                type: "static"
            } : {
                type: "preview",
                onClick: R
            }, b[13] = R, b[14] = o) : o = b[14];
            let U = o;
            b[15] !== F || b[16] !== C || b[17] !== R ? (c = C || null == R ? null : (0, l.jsx)(j.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: F,
                onClick: R,
                children: (0, l.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.preview",
                    defaultMessage: "Preview",
                    description: "Open expanded details for a form option"
                })
            }), b[15] = F, b[16] = C, b[17] = R, b[18] = c) : c = b[18];
            let B = z ? O?.logoDarkUrl : O?.logoUrl;
            b[19] !== v.mimeType || b[20] !== B ? (d = (0, l.jsx)(en, {
                layout: "icon",
                mimeType: v.mimeType,
                src: B
            }), b[19] = v.mimeType, b[20] = B, b[21] = d) : d = b[21];
            let K = v.mimeType ?? T;
            b[22] !== K ? (u = (0, l.jsx)("span", {
                className: "truncate",
                children: K
            }), b[22] = K, b[23] = u) : u = b[23], b[24] !== u || b[25] !== d ? (p = (0, l.jsxs)(l.Fragment, {
                children: [d, u]
            }), b[24] = u, b[25] = d, b[26] = p) : p = b[26], b[27] !== F || b[28] !== P || b[29] !== L || b[30] !== T ? (f = F || null == L ? void 0 : (0, l.jsx)(eL.a, {
                className: "top-2 right-2",
                size: "composer",
                ariaLabel: P.formatMessage({
                    id: "composer.openAIForm.removeFile",
                    defaultMessage: "Remove {filename}",
                    description: "Accessible label for removing a resource from an elicitation form"
                }, {
                    filename: T
                }),
                onRemove: L
            }), b[27] = F, b[28] = P, b[29] = L, b[30] = T, b[31] = f) : f = b[31];
            let V = !C && v.selected;
            return b[32] !== C || b[33] !== S || b[34] !== k || b[35] !== E || b[36] !== v.uri || b[37] !== U ? (h = C ? U : {
                type: S ? "checkbox" : "radio",
                name: k,
                value: v.uri,
                onChange: E
            }, b[32] = C, b[33] = S, b[34] = k, b[35] = E, b[36] = v.uri, b[37] = U, b[38] = h) : h = b[38], b[39] !== w || b[40] !== O?.logoDarkUrl || b[41] !== O?.logoUrl || b[42] !== z || b[43] !== v.localPath || b[44] !== v.mimeType || b[45] !== v.name || b[46] !== D?.src ? (x = null == v.localPath ? (0, l.jsx)(en, {
                layout: D?.src == null ? "card-icon" : "card",
                mimeType: v.mimeType,
                src: D?.src ?? (z ? O?.logoDarkUrl : O?.logoUrl)
            }) : (0, l.jsx)(eI.a, {
                hostId: w,
                imageFit: "scale-down",
                path: v.localPath,
                importKind: (0, eE.a)(v.name),
                fallback: (0, l.jsx)(en, {
                    layout: "card",
                    mimeType: v.mimeType,
                    src: void 0
                })
            }), b[39] = w, b[40] = O?.logoDarkUrl, b[41] = O?.logoUrl, b[42] = z, b[43] = v.localPath, b[44] = v.mimeType, b[45] = v.name, b[46] = D?.src, b[47] = x) : x = b[47], b[48] !== F || b[49] !== M || b[50] !== N || b[51] !== A || b[52] !== p || b[53] !== f || b[54] !== V || b[55] !== h || b[56] !== x || b[57] !== c || b[58] !== T ? (g = (0, l.jsx)(eS, {
                layout: N,
                previewAction: c,
                metadata: p,
                action: f,
                autoFocus: !1,
                disabled: F,
                invalid: M,
                selected: V,
                separatorBefore: A,
                title: T,
                ...h,
                children: x
            }), b[48] = F, b[49] = M, b[50] = N, b[51] = A, b[52] = p, b[53] = f, b[54] = V, b[55] = h, b[56] = x, b[57] = c, b[58] = T, b[59] = g) : g = b[59], g
        }
        let eD = (0, ey.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(525677)]).then(a.bind(a, "OMbd"))).FileOptionsDialog);

        function e_(e) {
            let t, a, i, r, c, u, p, f, h, g, b, w, N, k, S, F, M, A = (0, n.c)(57),
                {
                    field: E,
                    disabled: L,
                    expanded: I,
                    hideDescription: P,
                    showTitle: z,
                    hostId: O,
                    invalid: T,
                    name: D,
                    options: _,
                    required: q,
                    onChange: R,
                    onPickingChange: B,
                    onPickFiles: K,
                    onCloseExpanded: V,
                    onPreview: W,
                    onViewAll: H
                } = e,
                G = void 0 !== L && L,
                Z = void 0 !== P && P,
                Y = void 0 !== z && z,
                J = (0, s.y)(C.a),
                X = (0, m.a)(),
                $ = (0, ev.a)(),
                ee = (0, s.z)(ew.c),
                et = (0, d.useRef)(null),
                ea = (0, d.useRef)(null);
            A[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => ea.current?.abort(), a = [], A[0] = t, A[1] = a) : (t = A[0], a = A[1]), (0, d.useEffect)(t, a);
            let [el, en] = (0, d.useState)(!1), [ei, er] = (0, d.useState)(!1), [eo, ec] = (0, d.useState)(!1), [ed, em] = (0, d.useState)(null), eu = E["x-openai-input"], ep = eu.userOptions?.kind ?? "file", ef = (0, eN.a)("file" === ep ? eu.userOptions?.accept : void 0);
            A[2] !== E.title || A[3] !== D ? (i = E.title ?? Q()(D), A[2] = E.title, A[3] = D, A[4] = i) : i = A[4];
            let eh = i,
                ex = "array" === E.type,
                ey = ex && "implicit" === eu.selection,
                eF = null == K && !G && !ei && null != eu.userOptions && "local" === O && window.electronBridge?.getPathForFile != null;
            A[5] !== E.minItems || A[6] !== E.type || A[7] !== q ? (r = 0, q && (r = "array" === E.type ? E.minItems ?? 0 : 1), A[5] = E.minItems, A[6] = E.type, A[7] = q, A[8] = r) : r = A[8], A[9] !== eu.options ? (c = new Set(eu.options.map(eB)), A[9] = eu.options, A[10] = c) : c = A[10];
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
                eI = () => {
                    document.activeElement === document.body && et.current?.closest("form")?.focus()
                };
            A[15] !== ex || A[16] !== R || A[17] !== _ ? (f = (e, t) => {
                if (t.aborted || 0 === e.length) return;
                let a = new Set(e.map(eU));
                R(eg()([..._, ...e.map(eR)], "uri").map(t => ({
                    ...t,
                    selected: ex ? t.selected || a.has(t.uri) : t.uri === e[0].uri
                })))
            }, A[15] = ex, A[16] = R, A[17] = _, A[18] = f) : f = A[18];
            let eP = f,
                ez = e => {
                    let t = !1,
                        a = () => {
                            !t && (t = !0, e.signal.removeEventListener("abort", a), B?.(!1), e.signal.aborted || (er(!1), eI()))
                        };
                    return e.signal.addEventListener("abort", a, {
                        once: !0
                    }), er(!0), em(null), B?.(!0), a
                },
                eO = async (e, t) => {
                    if (G || ei || null == eu.userOptions || 0 === e.length) return;
                    let a = ez(t),
                        l = Error("File type is not accepted");
                    await Promise.all(e.map(async e => {
                        let {
                            appServerPath: t,
                            fsPath: a,
                            label: n
                        } = e, i = await ej.appServices.workspaceFiles.getMetadata?.({
                            hostId: O,
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
                    })).then(e => eP(e, t.signal)).catch(e => {
                        t.signal.aborted || em(e === l ? "type" : "selection")
                    }).finally(a)
                };
            A[19] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, l.jsx)(y.a, {
                id: "composer.openAIForm.uploadTile",
                defaultMessage: "Upload",
                description: "Label below the upload tile in a file picker carousel"
            }), A[19] = h) : h = A[19];
            let e_ = h;
            if ("directory" === ep) {
                let e;
                A[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(y.a, {
                    id: "composer.openAIForm.addFolder",
                    defaultMessage: "Choose folder",
                    description: "Button to add a user-selected directory to an elicitation form"
                }), A[20] = e) : e = A[20], e_ = e
            } else if (0 === _.length) {
                let e;
                A[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(y.a, {
                    id: "composer.openAIForm.addFiles",
                    defaultMessage: "Upload files",
                    description: "Button to add user-selected files to an elicitation form"
                }), A[21] = e) : e = A[21], e_ = e
            }
            let eK = null == eu.userOptions ? null : (0, l.jsx)(eS, {
                    autoFocus: !1,
                    highlighted: el,
                    layout: 0 === _.length ? "standalone" : "carousel",
                    disabled: G || ei,
                    invalid: !1,
                    selected: !1,
                    title: e_,
                    type: "button",
                    onClick: () => {
                        ea.current?.abort();
                        let e = new AbortController;
                        if (ea.current = e, null != K) {
                            let t = ez(e);
                            K(e.signal).then(t => eP(t, e.signal)).catch(() => {
                                e.signal.aborted || em("selection")
                            }).finally(t);
                            return
                        }
                        null != (0, o.ug)(O) || (0, o.pi)((0, v.a)(J, O)) ? ec(!0) : $({
                            accept: "file" === ep ? eu.userOptions?.accept : void 0,
                            kind: ep,
                            allowMultiple: ex
                        }).then(t => {
                            if (!e.signal.aborted) return eO(t, e)
                        }).catch(() => {
                            e.signal.aborted || em("selection")
                        }).finally(() => {
                            e.signal.aborted || eI()
                        })
                    },
                    children: "directory" === ep ? (0, l.jsx)(U.vd, {
                        className: "text-tertiary"
                    }) : (0, l.jsx)(U.M, {
                        className: "text-tertiary"
                    })
                }),
                eV = (e, t, a) => (0, l.jsx)(eT, {
                    option: e,
                    hostId: O,
                    layout: a,
                    name: "grid" === a ? `${D}-expanded` : D,
                    multiple: ex,
                    implicit: ey,
                    disabled: G || ei,
                    invalid: T || null != ed,
                    separatorBefore: "carousel" === a && 0 === t && null != eK,
                    onChange: () => {
                        R(_.map(t => ({
                            ...t,
                            selected: t.uri === e.uri ? !ex || !t.selected : ex && t.selected
                        }))), "carousel" === a && eL(e.uri)
                    },
                    onRemove: !ey || null == eu.userOptions && _.length <= 1 || eM.has(e.uri) && _.length <= r ? void 0 : () => R(_.filter(t => t.uri !== e.uri)),
                    onPreview: null == W ? void 0 : (e, t) => {
                        V?.(), W(e, t)
                    }
                }, e.uri);
            A[22] !== eF ? (g = e => {
                (0, x.b)(e.dataTransfer) && (e.preventDefault(), e.stopPropagation(), "dragenter" === e.type ? en(eF) : e.dataTransfer.dropEffect = eF ? "copy" : "none")
            }, A[22] = eF, A[23] = g) : g = A[23];
            let eW = g;
            A[24] !== E.description || A[25] !== E.title || A[26] !== Z || A[27] !== Y ? (b = Y && E.title || !Z && E.description ? (0, l.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                children: [Y && E.title && (0, l.jsx)("div", {
                    className: "text-size-chat-sm font-medium text-default",
                    children: E.title
                }), !Z && E.description && (0, l.jsx)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: E.description
                })]
            }) : null, A[24] = E.description, A[25] = E.title, A[26] = Z, A[27] = Y, A[28] = b) : b = A[28];
            let eH = b;
            A[29] !== eH || A[30] !== H ? (w = null != eH || null != H ? (0, l.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [eH, null != H && (0, l.jsxs)(j.a, {
                    className: "ms-auto shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    onClick: H,
                    children: [(0, l.jsx)(U.Mh, {}), (0, l.jsx)(y.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all",
                        description: "Open a searchable grid of all files for the current form field"
                    })]
                })]
            }) : null, A[29] = eH, A[30] = H, A[31] = w) : w = A[31];
            let eQ = w;
            A[32] === Symbol.for("react.memo_cache_sentinel") ? (N = e => {
                e.stopPropagation(), e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget) || en(!1)
            }, A[32] = N) : N = A[32];
            let eG = e => {
                    if (!(0, x.b)(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), en(!1), !eF)) return;
                    let t = (0, x.f)(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer);
                    if (0 === t.length || !ex && t.length > 1) return void em("selection");
                    ea.current?.abort();
                    let a = new AbortController;
                    ea.current = a, eO(t, a)
                },
                eZ = 0 === _.length && null != eK ? (0, l.jsxs)("div", {
                    className: "flex flex-col gap-2 px-4",
                    role: "group",
                    "aria-label": eh,
                    children: [eQ, eK]
                }) : (0, l.jsxs)(eC.a, {
                    ariaInvalid: T || null != ed,
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
                    children: [eK, eE.map((e, t) => eV(e, t, "carousel"))]
                }),
                eY = void 0 !== I && I && null != V ? (0, l.jsx)(eD, {
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
            return A[33] !== ef || A[34] !== eO || A[35] !== O || A[36] !== ep || A[37] !== ex || A[38] !== eo || A[39] !== eI || A[40] !== ec ? (k = eo ? (0, l.jsx)(eb.a, {
                acceptedFileExtensions: ef,
                hostId: O,
                kind: ep,
                multiple: ex,
                onClose: () => ec(!1),
                onRestoreFocus: eI,
                onSelect: e => {
                    let t = ea.current;
                    null == t || t.signal.aborted || eO(e.map(eq), t)
                }
            }) : null, A[33] = ef, A[34] = eO, A[35] = O, A[36] = ep, A[37] = ex, A[38] = eo, A[39] = eI, A[40] = ec, A[41] = k) : k = A[41], A[42] !== ed ? (S = ed ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                role: "alert",
                children: "selection" === ed ? (0, l.jsx)(y.a, {
                    id: "composer.openAIForm.fileSelectionFailed",
                    defaultMessage: "These files or folders could not be added",
                    description: "Error when selected files or folders cannot be accessed or do not match the form's requested kind or number of items"
                }) : (0, l.jsx)(y.a, {
                    id: "composer.openAIForm.fileTypeRejected",
                    defaultMessage: "Choose a file of an allowed type",
                    description: "Error for a file whose type does not match the file types accepted by the picker"
                })
            }) : null, A[42] = ed, A[43] = S) : S = A[43], A[44] !== E || A[45] !== T ? (F = T ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(es, {
                    schema: E
                })
            }) : null, A[44] = E, A[45] = T, A[46] = F) : F = A[46], A[47] !== et || A[48] !== eW || A[49] !== N || A[50] !== eG || A[51] !== eZ || A[52] !== eY || A[53] !== k || A[54] !== S || A[55] !== F ? (M = (0, l.jsxs)("div", {
                ref: et,
                className: "flex w-full min-w-0 flex-col gap-2",
                "data-mcp-form-file-drop": !0,
                onDragEnter: eW,
                onDragOver: eW,
                onDragLeave: N,
                onDrop: eG,
                children: [eZ, eY, k, S, F]
            }), A[47] = et, A[48] = eW, A[49] = N, A[50] = eG, A[51] = eZ, A[52] = eY, A[53] = k, A[54] = S, A[55] = F, A[56] = M) : M = A[56], M
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

        function eB(e) {
            return e.uri
        }
        var eK = a("HOLv"),
            eV = a("UXUl"),
            eW = a("DO9X");

        function eH(e) {
            let t, a, i, o, c, u, p, f, h, x, g = (0, n.c)(56),
                {
                    autoFocus: b,
                    field: v,
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
                E = (0, ev.a)(),
                L = (0, s.z)(ew.c),
                [P, z] = (0, d.useState)(!1),
                [O, T] = (0, d.useState)(!1),
                D = O ? "aspect-[4/5]" : "aspect-video";
            g[0] !== v.title || g[1] !== k ? (t = v.title ?? Q()(k), g[0] = v.title, g[1] = k, g[2] = t) : t = g[2];
            let _ = t,
                q = null != v.file && (0, I.c)(v, S) && !v.items.some(e => e.id === S) ? S : null;
            if (g[3] !== A ? (a = A.formatMessage({
                    id: "composer.imagePicker.previous",
                    defaultMessage: "Show previous templates",
                    description: "Accessible label for scrolling an image picker backward"
                }), g[3] = A, g[4] = a) : a = g[4], g[5] !== A ? (i = A.formatMessage({
                    id: "composer.imagePicker.next",
                    defaultMessage: "Show more templates",
                    description: "Accessible label for scrolling an image picker forward"
                }), g[5] = A, g[6] = i) : i = g[6], g[7] !== v.description || g[8] !== v.title || g[9] !== M ? (o = M ? null : (0, l.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere",
                    children: [v.title && (0, l.jsx)("div", {
                        className: "text-sm font-medium",
                        children: v.title
                    }), v.description && (0, l.jsx)("div", {
                        className: "text-xs text-tertiary",
                        children: v.description
                    })]
                }), g[7] = v.description, g[8] = v.title, g[9] = M, g[10] = o) : o = g[10], g[11] !== v.file || g[12] !== v.title || g[13] !== w || g[14] !== N || g[15] !== C || g[16] !== F || g[17] !== E || g[18] !== D || g[19] !== q ? (c = null == v.file ? null : null != F ? (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("button", {
                        className: "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                        type: "button",
                        onClick: () => {
                            null != F ? F().then(e => {
                                null != e && C(e)
                            }) : "local" !== w ? z(!0) : E({
                                accept: v.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: v.file?.title ?? v.title
                            }).then(e => {
                                let [t] = e;
                                null != t && C((0, ek.f)(t.fsPath))
                            })
                        },
                        children: [(0, l.jsx)("div", {
                            className: (0, r.b)("flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong", D, null == q ? "border-default ring-transparent group-hover:ring-border-subtle" : "border-strong ring-border-strong", N && null == q && "border-text-danger ring-text-danger/20"),
                            children: null == q ? (0, l.jsx)(eK.a, {
                                className: "text-secondary",
                                asset: eW.a,
                                "aria-hidden": !0
                            }) : (0, l.jsxs)("div", {
                                className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                children: [(0, l.jsx)(eK.a, {
                                    asset: eV.a,
                                    "aria-hidden": !0
                                }), (0, l.jsx)("span", {
                                    className: "max-w-full truncate text-sm",
                                    children: (0, ek.j)(decodeURIComponent(new URL(q).pathname))
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                            children: v.file.title ?? (0, l.jsx)(y.a, {
                                id: "composer.imagePicker.chooseFile",
                                defaultMessage: "Choose a file",
                                description: "Label for choosing a local file instead of a predefined image-picker option"
                            })
                        })]
                    })
                }) : null, g[11] = v.file, g[12] = v.title, g[13] = w, g[14] = N, g[15] = C, g[16] = F, g[17] = E, g[18] = D, g[19] = q, g[20] = c) : c = g[20], g[21] !== b || g[22] !== v.items || g[23] !== N || g[24] !== O || g[25] !== k || g[26] !== C || g[27] !== S) {
                let e;
                g[29] !== b || g[30] !== N || g[31] !== O || g[32] !== k || g[33] !== C || g[34] !== S ? (e = (e, t) => (0, l.jsx)(eS, {
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
                            T(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)
                        } : void 0,
                        src: e.image
                    })
                }, e.id), g[29] = b, g[30] = N, g[31] = O, g[32] = k, g[33] = C, g[34] = S, g[35] = e) : e = g[35], u = v.items.map(e), g[21] = b, g[22] = v.items, g[23] = N, g[24] = O, g[25] = k, g[26] = C, g[27] = S, g[28] = u
            } else u = g[28];
            return g[36] !== N || g[37] !== L || g[38] !== a || g[39] !== i || g[40] !== o || g[41] !== c || g[42] !== u || g[43] !== _ ? (p = (0, l.jsxs)(eC.a, {
                ariaInvalid: N,
                ariaLabel: _,
                backLabel: a,
                forwardLabel: i,
                header: o,
                role: "radiogroup",
                shouldUseReducedMotion: L,
                children: [c, u]
            }), g[36] = N, g[37] = L, g[38] = a, g[39] = i, g[40] = o, g[41] = c, g[42] = u, g[43] = _, g[44] = p) : p = g[44], g[45] !== w || g[46] !== P || g[47] !== C ? (f = P ? (0, l.jsx)(eb.a, {
                hostId: w,
                multiple: !1,
                onClose: () => z(!1),
                onSelect: e => {
                    let t = e[0];
                    null != t && C((0, ek.f)(t))
                }
            }) : null, g[45] = w, g[46] = P, g[47] = C, g[48] = f) : f = g[48], g[49] !== v || g[50] !== N ? (h = N ? (0, l.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, l.jsx)(es, {
                    schema: v
                })
            }) : null, g[49] = v, g[50] = N, g[51] = h) : h = g[51], g[52] !== h || g[53] !== p || g[54] !== f ? (x = (0, l.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2",
                children: [p, f, h]
            }), g[52] = h, g[53] = p, g[54] = f, g[55] = x) : x = g[55], x
        }

        function eQ(e) {
            let t, a, i, s, o = (0, n.c)(72),
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
                    onPreview: S,
                    onViewAll: C
                } = e;
            o[0] !== p.schema ? (t = (0, L.c)(p.schema) || (0, I.b)(p.schema), o[0] = p.schema, o[1] = t) : t = o[1];
            let F = t,
                {
                    name: M,
                    schema: A,
                    required: E
                } = p;
            if ((0, L.c)(A)) {
                let e, t, n, i = !b,
                    r = f.fileOptions[M];
                o[2] !== M || o[3] !== y ? (e = e => y(t => ({
                    ...t,
                    fileOptions: {
                        ...t.fileOptions,
                        [M]: e
                    }
                }), M), o[2] = M, o[3] = y, o[4] = e) : e = o[4], o[5] !== M || o[6] !== k ? (t = null == k ? void 0 : e => k(M, e), o[5] = M, o[6] = k, o[7] = t) : t = o[7], o[8] !== m || o[9] !== h || o[10] !== M || o[11] !== x || o[12] !== g || o[13] !== b || o[14] !== v || o[15] !== N || o[16] !== S || o[17] !== C || o[18] !== E || o[19] !== A || o[20] !== i || o[21] !== r || o[22] !== e || o[23] !== t ? (n = (0, l.jsx)(e_, {
                    field: A,
                    disabled: m,
                    expanded: h,
                    hideDescription: b,
                    showTitle: i,
                    onCloseExpanded: v,
                    onViewAll: C,
                    hostId: x,
                    invalid: g,
                    name: M,
                    options: r,
                    required: E,
                    onPreview: S,
                    onChange: e,
                    onPickingChange: N,
                    onPickFiles: t
                }), o[8] = m, o[9] = h, o[10] = M, o[11] = x, o[12] = g, o[13] = b, o[14] = v, o[15] = N, o[16] = S, o[17] = C, o[18] = E, o[19] = A, o[20] = i, o[21] = r, o[22] = e, o[23] = t, o[24] = n) : n = o[24], a = n
            } else if ((0, I.b)(A)) {
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
                let r = f.customDrafts[M];
                o[45] !== M || o[46] !== y ? (t = e => y(t => ({
                    ...t,
                    customDrafts: {
                        ...t.customDrafts,
                        [M]: e
                    }
                }), M), o[45] = M, o[46] = y, o[47] = t) : t = o[47];
                let s = b && "boolean" !== A.type,
                    m = f.values[M];
                o[48] !== M || o[49] !== j ? (n = e => j(M, e), o[48] = M, o[49] = j, o[50] = n) : n = o[50], o[51] !== c || o[52] !== u || o[53] !== g || o[54] !== d || o[55] !== b || o[56] !== e || o[57] !== r || o[58] !== t || o[59] !== s || o[60] !== m || o[61] !== n ? (i = (0, l.jsx)(em, {
                    disabled: u,
                    autoFocus: c,
                    showOptionNumbers: d,
                    field: e,
                    customDraft: r,
                    onCustomDraftChange: t,
                    hideLabel: s,
                    hideDescription: b,
                    invalid: g,
                    value: m,
                    onChange: n
                }), o[51] = c, o[52] = u, o[53] = g, o[54] = d, o[55] = b, o[56] = e, o[57] = r, o[58] = t, o[59] = s, o[60] = m, o[61] = n, o[62] = i) : i = o[62], a = i
            }
            let P = c && F ? eG : void 0,
                z = p.name,
                O = !F && "px-2",
                T = b && F && "pt-1";
            return o[63] !== O || o[64] !== T ? (i = (0, r.b)("flex min-w-0 flex-col gap-2 outline-none", O, T), o[63] = O, o[64] = T, o[65] = i) : i = o[65], o[66] !== p.name || o[67] !== a || o[68] !== u || o[69] !== P || o[70] !== i ? (s = (0, l.jsx)("fieldset", {
                ref: P,
                "data-mcp-form-field": z,
                tabIndex: -1,
                className: i,
                disabled: u,
                children: a
            }), o[66] = p.name, o[67] = a, o[68] = u, o[69] = P, o[70] = i, o[71] = s) : s = o[71], s
        }

        function eG(e) {
            null == e || e.contains(document.activeElement) || e.focus()
        }
        var eZ = a("ljOt");

        function eY(e) {
            let t, a, i, r, s, o, c, d, u, p, f = (0, n.c)(25),
                {
                    isSubmitting: h,
                    elicitation: x,
                    fieldTitle: g,
                    fieldDescription: b,
                    showHeader: v,
                    progress: w,
                    onCancel: N
                } = e,
                k = void 0 !== h && h,
                S = (0, m.a)();
            return v ? (f[0] !== x.message ? (t = (0, l.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: x.message
            }), f[0] = x.message, f[1] = t) : t = f[1], f[2] !== w ? (a = null != w && (0, l.jsx)(y.a, {
                id: "composer.mcpFormElicitation.progress",
                defaultMessage: "{current} of {total}",
                description: "Current form step and total number of steps",
                values: {
                    current: w.current,
                    total: w.total
                }
            }), f[2] = w, f[3] = a) : a = f[3], f[4] !== S ? (i = S.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel",
                description: "Accessible label for canceling an MCP form elicitation"
            }), f[4] = S, f[5] = i) : i = f[5], f[6] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, l.jsx)(eK.a, {
                "aria-hidden": !1,
                asset: eZ.a
            }), f[6] = r) : r = f[6], f[7] !== k || f[8] !== N || f[9] !== i ? (s = (0, l.jsx)(j.a, {
                "aria-label": i,
                color: "ghostSecondary",
                size: "compact",
                uniform: !0,
                disabled: k,
                onClick: N,
                children: r
            }), f[7] = k, f[8] = N, f[9] = i, f[10] = s) : s = f[10], f[11] !== a || f[12] !== s ? (o = (0, l.jsxs)("div", {
                className: "ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none",
                children: [a, s]
            }), f[11] = a, f[12] = s, f[13] = o) : o = f[13], f[14] !== t || f[15] !== o ? (c = (0, l.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, o]
            }), f[14] = t, f[15] = o, f[16] = c) : c = f[16], f[17] !== g ? (d = g && (0, l.jsx)("div", {
                className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                children: g
            }), f[17] = g, f[18] = d) : d = f[18], f[19] !== b ? (u = b && (0, l.jsx)("div", {
                className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                children: b
            }), f[19] = b, f[20] = u) : u = f[20], f[21] !== u || f[22] !== c || f[23] !== d ? (p = (0, l.jsxs)("div", {
                className: "flex shrink-0 flex-col gap-1 px-4 py-3",
                children: [c, d, u]
            }), f[21] = u, f[22] = c, f[23] = d, f[24] = p) : p = f[24], p) : null
        }
        let eJ = (0, s.d)(C.a, (e, t) => {
            let {
                get: a
            } = t;
            return null != (0, o.ug)(e) || (0, o.pi)(a(v.b, e))
        });

        function eX(e) {
            let t, a = (0, n.c)(2);
            return a[0] !== e ? (t = null != e.onReply ? (0, l.jsx)(e$, {
                ...e
            }) : (0, l.jsx)(e5, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function e$(e) {
            let t, a, o, m, b, v, y, j, w = (0, n.c)(24),
                {
                    attribution: F,
                    formType: T,
                    autoResolution: q,
                    confirmationPresentation: R,
                    confirmationCompleted: U,
                    conversationId: B,
                    elicitation: K,
                    hostId: V,
                    requestId: H,
                    turnId: Q,
                    onUserInteraction: G,
                    onOpenInThread: Z,
                    onStandaloneResponseChange: Y,
                    onReply: J,
                    retainDraft: X,
                    onPickLegacyFile: $,
                    onPickFiles: ee,
                    validateContent: et,
                    disabled: ea,
                    isSubmitting: el,
                    onPreview: en
                } = e,
                ei = void 0 !== X && X,
                er = void 0 !== ea && ea,
                es = void 0 !== el && el,
                eo = (0, s.y)(C.a),
                ec = (0, d.useRef)(null),
                ed = (0, d.useRef)(null),
                em = (0, h.b)(),
                eu = "formElicitation" === K.kind;
            w[0] !== K ? (t = (0, S.a)(K), w[0] = K, w[1] = t) : t = w[1];
            let ep = t,
                ef = ep?.field ?? null,
                eh = (0, A.c)(K.schema),
                ex = function(e) {
                    if ("openaiForm" !== e.kind) return;
                    let t = e.schema[M.a],
                        a = null == t ? void 0 : e.schema.properties[t];
                    if (null != t && a?.type === "string" && ("oneOf" in a && null != a.oneOf && a.oneOf.length > 0 || "enum" in a && null != a.enum && a.enum.length > 0)) return {
                        name: t,
                        options: (0, A.d)(a),
                        required: e.schema.required?.includes(t) === !0
                    }
                }(K),
                eg = eh[0],
                eb = 1 === eh.length && null != eg && (0, I.b)(eg.schema) ? eg.schema : null,
                ev = null != eb,
                ey = (0, g.b)(V, B, H),
                ej = (0, s.z)(g.c).get(ey);
            w[2] !== K ? (a = () => z(K), w[2] = K, w[3] = a) : a = w[3];
            let [ew, eN] = (0, d.useState)(a), ek = ej?.requestId === H && "kind" in ej.draft && ej.draft.kind === K.kind ? ej.draft : z(K), eS = null == J || ei ? ek : ew, {
                values: eC
            } = eS, eF = eh.filter(e => e.name !== ex?.name), eM = Object.fromEntries(eF.map(e4)), eA = "openaiForm" === K.kind ? K.schema["x-openai-groups"] : void 0;
            w[4] !== eA ? (o = new Set(eA?.flatMap(e3)), w[4] = eA, w[5] = o) : o = w[5];
            let eE = o;
            w[6] !== eE ? (m = e => !eE.has(e.name), w[6] = eE, w[7] = m) : m = w[7];
            let eL = eF.filter(m),
                eI = eA?.map(e => e.properties.map(e => eM[e])) ?? [];
            (eL.length > 0 || 0 === eI.length) && eI.push(eL);
            let eP = !ev && (K.message.trim().length > 0 || eI.length > 1),
                ez = Math.min(eS.groupIndex ?? 0, eI.length - 1),
                eO = ez === eI.length - 1,
                eT = eI[ez],
                eD = 1 === eT.length ? eT[0] : void 0,
                e_ = eD?.schema.type === "string" && (0, A.e)(eD.schema) ? (0, A.d)(eD.schema) : null,
                eq = null == eD ? void 0 : eC[eD.name],
                [eR, eU] = (0, d.useState)(null),
                [eB, eK] = (0, d.useState)(0),
                [eV, eW] = (0, d.useState)(!1),
                eH = (0, d.useRef)(!1),
                eG = es || eV,
                eZ = er || eG || eB > 0;
            w[8] === Symbol.for("react.memo_cache_sentinel") ? (b = [], w[8] = b) : b = w[8];
            let [eX, e$] = (0, d.useState)(b);
            (0, d.useEffect)(() => {
                null != eb && null == J && (0, u.d)(eo, {
                    hostId: V,
                    requestId: H
                }, eb.items.length, {
                    threadId: B,
                    turnId: Q
                })
            }, [B, V, J, H, eo, eb, Q]);
            let e5 = (e, t) => {
                    if (null == J || ei) {
                        let t = eo.get(g.c).get(ey),
                            a = null != t && "kind" in t.draft && t.draft.kind === K.kind ? t.draft : z(K);
                        (0, g.d)(eo, ey, {
                            conversationId: B,
                            draft: e(a),
                            requestId: H,
                            cleanupOwner: ei ? "hosted" : void 0
                        })
                    } else eN(e);
                    null != t && e$(e => e.filter(e => e !== t))
                },
                e6 = (e, t) => {
                    eZ || e5(a => ({
                        ...a,
                        values: {
                            ...a.values,
                            [e]: t
                        }
                    }), e)
                },
                e7 = (e, t) => {
                    if (es || eH.current) return Promise.resolve(!1);
                    if (null != Z) return eZ || Z(), Promise.resolve(!1);
                    if ((0, E.a)(eo, {
                            action: e,
                            formType: T ?? (eu ? "mcp" : "openai"),
                            identity: F
                        }), null != J) return J(e, t);
                    let a = () => (0, p.b)(eo, V).replyWithMcpServerElicitationResponse(B, H, (0, c.b)(e, null, t ?? {}));
                    return null == Y ? a().then(e2, e1) : (eH.current = !0, eW(!0), Y("submitting"), Promise.resolve().then(a).then(() => (Y({
                        accept: "accepted",
                        decline: "declined",
                        cancel: "canceled"
                    } [e]), !0), () => (Y("failed"), !1)).finally(() => {
                        eH.current = !1, eW(!1)
                    }))
                },
                e8 = e => {
                    if (!eZ) {
                        if (null != Z) return void Z();
                        eU(null), e5(t => ({
                            ...t,
                            groupIndex: e
                        }))
                    }
                },
                e9 = e => {
                    if (eZ) return;
                    if (null != Z) return void Z();
                    let t = e;
                    if (eO && ex?.required && null == t) {
                        let e = ex.options;
                        if (1 !== e.length) return void ed.current?.focus();
                        t = e[0].const
                    }
                    let a = {
                        ...eS.values
                    };
                    null != ex && (null == t ? delete a[ex.name] : (0, A.g)(a, ex.name, t));
                    let l = function(e, t, a) {
                            let l = {
                                ...t.values
                            };
                            for (let [e, a] of Object.entries(t.customDrafts)) l[e] = O(l[e], a);
                            switch (e.kind) {
                                case "formElicitation":
                                    return (0, P.a)(e.schema, l);
                                case "openaiForm":
                                    return (0, L.b)(e.schema, l, t.fileOptions, a);
                                case "legacyOpenAIForm":
                                    return (0, I.a)(e.schema, l)
                            }
                        }(K, {
                            ...eS,
                            values: null == ef ? a : {
                                [ef]: !0
                            }
                        }, et),
                        n = eO ? l.invalidFieldNames : l.invalidFieldNames.filter(e => eT.some(t => t.name === e));
                    if (e$(n), n.length > 0) {
                        let e = n[0],
                            t = eI.findIndex(t => t.some(t => t.name === e));
                        if (t >= 0 && t !== ez) return void e8(t);
                        let a = Array.from(ec.current?.querySelectorAll("[data-mcp-form-field]") ?? []).find(t => t.dataset.mcpFormField === e),
                            l = a?.querySelector('input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), [contenteditable="true"], button:not(:disabled)');
                        return void(l ?? a)?.focus()
                    }
                    if (!eO) return void e8(ez + 1);
                    if (null == l.content) return;
                    let i = e7("accept", l.content);
                    if (null != J || null == eb || null == eg) return;
                    let r = l.content[eg.name];
                    if ("string" != typeof r) return;
                    let s = eb.items.findIndex(e => e.id === r);
                    s < 0 || i.then(e => {
                        !1 !== e && (0, u.e)(eo, {
                            hostId: V,
                            requestId: H
                        }, r, s)
                    })
                },
                te = null == ee && eh.some(e0),
                tt = (0, s.x)(null == J && te ? eJ : null, V);
            if (ep?.presentation != null) {
                let e;
                return w[9] !== K || w[10] !== H ? (e = JSON.stringify([H, K]), w[9] = K, w[10] = H, w[11] = e) : e = w[11], (0, l.jsx)(i.a, {
                    className: "contents",
                    children: (0, l.jsx)(k.a, {
                        presentation: ep.presentation,
                        message: K.message,
                        disabled: eZ,
                        isSubmitting: eG,
                        completed: U,
                        standalone: "standalone" === R,
                        onOpen: G,
                        onOpenInThread: Z,
                        onConfirm: e9,
                        onCancel: () => void e7("cancel")
                    }, e)
                })
            }
            if (te && !tt) {
                let e;
                return w[12] !== B || w[13] !== K.serverName || w[14] !== V || w[15] !== J || w[16] !== Y || w[17] !== H || w[18] !== eG ? (e = (0, l.jsx)(_.a, {
                    conversationId: B,
                    hostId: V,
                    isSubmitting: eG,
                    requestId: H,
                    serverName: K.serverName,
                    onReply: J,
                    onStandaloneResponseChange: Y
                }), w[12] = B, w[13] = K.serverName, w[14] = V, w[15] = J, w[16] = Y, w[17] = H, w[18] = eG, w[19] = e) : e = w[19], e
            }
            return w[20] !== G ? (j = e => {
                "Escape" === e.key || e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || G?.()
            }, v = e => {
                e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || G?.()
            }, y = e => {
                (0, x.b)(e.dataTransfer) && G?.()
            }, w[20] = G, w[21] = v, w[22] = y, w[23] = j) : (v = w[21], y = w[22], j = w[23]), (0, l.jsx)(i.a, {
                className: "contents",
                children: (0, l.jsx)(f.a, {
                    className: "@container/request-card",
                    children: (0, l.jsxs)("form", {
                        ref: ec,
                        className: "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
                        noValidate: !0,
                        tabIndex: -1,
                        "data-codex-character-input-boundary": !0,
                        "data-codex-escape-boundary": !0,
                        "data-user-input-auto-resolution": null != G || void 0,
                        onKeyDownCapture: j,
                        onPointerDownCapture: v,
                        onDropCapture: y,
                        onKeyDown: e => {
                            if (!e.defaultPrevented && !e.nativeEvent.isComposing && e.target instanceof HTMLElement && e.currentTarget.contains(e.target)) {
                                if ("Escape" === e.key) {
                                    e.preventDefault(), e7("cancel");
                                    return
                                }
                                if (!(eZ || null == e.target.closest('button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]') && D(e, () => e.currentTarget.requestSubmit())) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && null == e.target.closest('textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]') && 1 === eT.length && /^[1-9]$/.test(e.key)) {
                                    let t = e.currentTarget.querySelectorAll('[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)')[Number(e.key) - 1];
                                    null != t && (e.preventDefault(), e.repeat || t.click())
                                }
                            }
                        },
                        onSubmit: e => {
                            e.preventDefault(), e9()
                        },
                        children: [(0, l.jsx)(eY, {
                            isSubmitting: eG,
                            elicitation: K,
                            fieldTitle: eD?.schema.type === "boolean" ? void 0 : eD?.schema.title,
                            fieldDescription: eD?.schema.description,
                            showHeader: eP,
                            progress: eI.length > 1 ? {
                                current: ez + 1,
                                total: eI.length
                            } : void 0,
                            onCancel: () => void e7("cancel")
                        }), null == ef && eT.length > 0 && (0, l.jsx)("div", {
                            className: (0, r.b)("flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3", !eP && "pt-3"),
                            children: eT.map((e, t) => (0, l.jsx)(eQ, {
                                autoFocus: em && 0 === t,
                                disabled: er,
                                interactionDisabled: eZ,
                                field: e,
                                isOnlyField: 1 === eT.length,
                                draft: eS,
                                expanded: eR === e.name,
                                hostId: V,
                                invalid: eX.includes(e.name),
                                metadataInHeader: eP && 1 === eT.length,
                                onCloseExpanded: () => eU(null),
                                onDraftChange: Z ?? e5,
                                onValueChange: Z ?? e6,
                                onPickLegacyFile: $,
                                onPickingChange: e => eK(t => t + (e ? 1 : -1)),
                                onPickFiles: ee,
                                onPreview: en,
                                onViewAll: eT.length > 1 && (0, L.c)(e.schema) && eS.fileOptions[e.name].length > 1 ? Z ?? (() => eU(e.name)) : void 0
                            }, e.name))
                        }, ez), null != ef ? (0, l.jsx)(N, {
                            disabled: eZ,
                            isSubmitting: eG,
                            hotkeysEnabled: em,
                            onDecline: () => void e7("decline")
                        }) : (0, l.jsx)(W, {
                            primaryActionRef: ed,
                            isSubmitting: eG,
                            autoResolution: q,
                            disabled: eZ,
                            submitDisabled: eZ || null != eD && eD.required && (0, I.b)(eD.schema) && !(0, I.c)(eD.schema, eC[eD.name]),
                            fieldCount: eT.length,
                            isLastGroup: eO,
                            onBack: ez > 0 ? () => e8(ez - 1) : void 0,
                            hotkeysEnabled: em,
                            acceptOptions: eO && null != ex ? {
                                options: ex.options,
                                required: ex.required,
                                onSelect: e9
                            } : void 0,
                            isStandardForm: eu,
                            showSubmit: eD?.required !== !0 || null == e_ || "string" == typeof eq && ("" !== eq || e_.some(e => e.const === eq)),
                            showHeader: eP,
                            onCancel: () => void e7("cancel"),
                            onDecline: () => void e7("decline"),
                            onDismissLegacyImagePicker: ev ? () => {
                                null == J && (0, u.b)(eo, {
                                    hostId: V,
                                    requestId: H
                                }), e7("decline")
                            } : void 0,
                            onViewAll: null != eD && (0, L.c)(eD.schema) && eS.fileOptions[eD.name].length > 1 ? Z ?? (() => eU(eD.name)) : void 0
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
            return e.properties
        }

        function e4(e) {
            return [e.name, e]
        }

        function e5(e) {
            let t, i, r = (0, n.c)(9),
                o = (0, s.y)(F.a),
                c = (0, m.a)();
            r[0] !== c || r[1] !== e.conversationId || r[2] !== e.elicitation || r[3] !== e.hostId || r[4] !== o ? (t = (t, l) => {
                Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(858617)]).then(a.bind(a, "sJLg")).then(a => {
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
                }).catch(e6).then(e => {
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
            }, r[0] = c, r[1] = e.conversationId, r[2] = e.elicitation, r[3] = e.hostId, r[4] = o, r[5] = t) : t = r[5];
            let d = t;
            return r[6] !== d || r[7] !== e ? (i = (0, l.jsx)(e$, {
                ...e,
                onPreview: d
            }), r[6] = d, r[7] = e, r[8] = i) : i = r[8], i
        }

        function e6() {
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
            r = a("on57"),
            s = a("zd8w"),
            o = a("v7qY"),
            c = "PortalBoundary-TFj9W2";
        let d = (0, s.createContext)({
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
                [j, w] = (0, s.useState)(null);
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
            }, a = [j], x[0] = j, x[1] = t, x[2] = a) : (t = x[1], a = x[2]), (0, s.useLayoutEffect)(t, a), x[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                null != e && w(e)
            }, x[3] = o) : o = x[3], x[4] !== b || x[5] !== y ? (m = (0, r.b)("relative", c, y, b), x[4] = b, x[5] = y, x[6] = m) : m = x[6];
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
                } = (0, s.useContext)(d),
                [y, j] = (0, s.useState)(null);
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
                    r = new MutationObserver(i);
                return r.observe(y, {
                    childList: !0,
                    subtree: !0
                }), i(), () => {
                    r.disconnect(), l.disconnect(), e.removeEventListener("resize", a), y.setAttribute("hidden", ""), y.setAttribute("inert", "")
                }
            }, a = [b, y], h[0] = b, h[1] = y, h[2] = t, h[3] = a) : (t = h[2], a = h[3]), (0, s.useLayoutEffect)(t, a);
            let w = y ?? void 0;
            return h[4] !== x || h[5] !== y ? (m = "function" == typeof x ? x(y) : x, h[4] = x, h[5] = y, h[6] = m) : m = h[6], h[7] !== w || h[8] !== m ? (u = (0, l.jsx)(i.a, {
                radixPortalContainer: w,
                children: m
            }), h[7] = w, h[8] = m, h[9] = u) : u = h[9], h[10] !== b || h[11] !== g || h[12] !== v ? (p = null != b && (0, o.createPortal)((0, l.jsx)("div", {
                ref: e => {
                    null != e && j(e)
                },
                className: (0, r.b)("relative", c, "PortalSurface-LW3Uz2", v),
                "data-theme": g
            }), b.ownerDocument.body), h[10] = b, h[11] = g, h[12] = v, h[13] = p) : p = h[13], h[14] !== u || h[15] !== p ? (f = (0, l.jsxs)(l.Fragment, {
                children: [u, p]
            }), h[14] = u, h[15] = p, h[16] = f) : f = h[16], f
        }
    })
};