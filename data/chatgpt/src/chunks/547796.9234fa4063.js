export const __rspack_esm_ids = [547796];
export const __webpack_modules__ = {
    M4dq: (function(a, b, c) {
        var d = c("ABep");
        c("zd8w"), b.a = a => (0, d.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            ...a,
            children: [(0, d.jsx)("path", {
                fill: "#4D6FE6",
                d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
            }), (0, d.jsx)("path", {
                fill: "#86A0F2",
                d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
            })]
        })
    }),
    ULZ9: (function(a, b, c) {
        c.d(b, {
            a: () => g
        }), c("iYCA"), c("yCBR");
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ylLY");

        function g(a) {
            let b, c, g = (0, e.c)(8),
                {
                    children: h,
                    linkComponent: i,
                    allowedWidgetTypes: j,
                    radixPortalContainer: k,
                    hydrationSafe: l
                } = a,
                m = void 0 === i ? "a" : i,
                n = void 0 === j ? "GA" : j,
                o = void 0 !== l && l;
            return g[0] !== n || g[1] !== o || g[2] !== m || g[3] !== k ? (b = {
                linkComponent: m,
                allowedWidgetTypes: n,
                radixPortalContainer: k,
                hydrationSafe: o
            }, g[0] = n, g[1] = o, g[2] = m, g[3] = k, g[4] = b) : b = g[4], g[5] !== h || g[6] !== b ? (c = (0, d.jsx)(f.a.Provider, {
                value: b,
                children: h
            }), g[5] = h, g[6] = b, g[7] = c) : c = g[7], c
        }
    }),
    FVmU: (function(a, b, c) {
        c.d(b, {
            a: () => q,
            b: () => r
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("oyxz"),
            j = c("sAQ3"),
            k = c("Sm6l"),
            l = c("JNtf"),
            m = c("mUDD"),
            n = c("bf6R"),
            o = a => (0, d.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 32,
                height: 32,
                fill: "none",
                viewBox: "0 0 24 24",
                ...a,
                children: [(0, d.jsx)("path", {
                    fill: "#4D6FE6",
                    d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
                }), (0, d.jsx)("path", {
                    fill: "#86A0F2",
                    d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
                })]
            }),
            p = c("M4dq");

        function q(a) {
            let b, c, q, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = (0, e.c)(83),
                {
                    presentation: O,
                    message: P,
                    details: Q,
                    children: R,
                    compact: S,
                    disabled: T,
                    isSubmitting: U,
                    completed: V,
                    standalone: W,
                    onOpen: X,
                    onConfirm: Y,
                    onCancel: Z
                } = a,
                $ = void 0 !== S && S,
                _ = void 0 !== V && V,
                aa = void 0 !== W && W,
                ab = (0, h.a)(),
                [ac, ad] = (0, g.useState)(aa),
                ae = O.destructive ? "dangerSolid" : "primary",
                af = $ ? void 0 : "modalPrimary",
                ag = T || _;
            N[0] !== O.confirmLabel ? (b = (0, d.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: O.confirmLabel
            }), N[0] = O.confirmLabel, N[1] = b) : b = N[1], N[2] !== U || N[3] !== ae || N[4] !== af || N[5] !== ag || N[6] !== b ? (c = (0, d.jsx)(k.a, {
                color: ae,
                size: af,
                radius: "full",
                type: "submit",
                disabled: ag,
                loading: U,
                children: b
            }), N[2] = U, N[3] = ae, N[4] = af, N[5] = ag, N[6] = b, N[7] = c) : c = N[7];
            let ah = c,
                ai = $ ? "ghost" : "secondary",
                aj = $ ? void 0 : "modalPrimary";
            N[8] !== _ || N[9] !== T || N[10] !== Z ? (q = () => {
                T || _ || Z?.(), ad(!1)
            }, N[8] = _, N[9] = T, N[10] = Z, N[11] = q) : q = N[11], N[12] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, d.jsx)(i.a, {
                id: "mcpConfirmation.cancel",
                defaultMessage: "Cancel"
            }), N[12] = s) : s = N[12], N[13] !== aj || N[14] !== q || N[15] !== ai ? (t = (0, d.jsx)(k.a, {
                color: ai,
                size: aj,
                radius: "full",
                type: "button",
                onClick: q,
                children: s
            }), N[13] = aj, N[14] = q, N[15] = ai, N[16] = t) : t = N[16];
            let ak = t;
            N[17] !== aa ? (u = (0, f.b)("flex flex-wrap items-center gap-2", {
                "justify-center": aa
            }), N[17] = aa, N[18] = u) : u = N[18];
            let al = "shield" === O.icon ? "actionChipWithIcon" : "actionChip",
                am = T && !_;
            N[19] !== X ? (v = () => {
                X?.(), ad(!0)
            }, N[19] = X, N[20] = v) : v = N[20], N[21] !== O.icon ? (w = "shield" === O.icon && (0, d.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, d.jsx)(p.a, {
                    "aria-hidden": "true"
                })
            }), N[21] = O.icon, N[22] = w) : w = N[22], N[23] !== O.triggerLabel ? (x = (0, d.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: O.triggerLabel
            }), N[23] = O.triggerLabel, N[24] = x) : x = N[24], N[25] !== _ || N[26] !== ab ? (y = _ && (0, d.jsx)(n.ac, {
                "aria-label": ab.formatMessage({
                    id: "mcpConfirmation.completed",
                    defaultMessage: "Completed"
                })
            }), N[25] = _, N[26] = ab, N[27] = y) : y = N[27], N[28] !== U || N[29] !== al || N[30] !== am || N[31] !== v || N[32] !== w || N[33] !== x || N[34] !== y ? (z = (0, d.jsxs)(j.a, {
                color: "conversationAccentSubtle",
                size: al,
                radius: "messageBubble",
                type: "button",
                className: "max-w-full",
                disabled: am,
                loading: U,
                "aria-haspopup": "dialog",
                onClick: v,
                children: [w, x, y]
            }), N[28] = U, N[29] = al, N[30] = am, N[31] = v, N[32] = w, N[33] = x, N[34] = y, N[35] = z) : z = N[35], N[36] !== u || N[37] !== z ? (A = (0, d.jsx)("div", {
                "data-mcp-confirmation-chip": !0,
                className: u,
                children: z
            }), N[36] = u, N[37] = z, N[38] = A) : A = N[38];
            let an = $ ? 440 : 480,
                ao = $ ? "opaque" : "confirmation",
                ap = $ ? "default" : "large";
            N[39] === Symbol.for("react.memo_cache_sentinel") ? (B = {
                "aria-describedby": void 0
            }, N[39] = B) : B = N[39];
            let aq = $ ? "default" : "confirmation",
                ar = $ ? "gap-3" : void 0;
            N[40] !== _ || N[41] !== T || N[42] !== Y ? (C = a => {
                a.preventDefault(), T || _ || (Y(), ad(!1))
            }, N[40] = _, N[41] = T, N[42] = Y, N[43] = C) : C = N[43];
            let as = !$;
            N[44] !== as ? (D = (0, f.b)("flex flex-col gap-3", {
                "items-center": as
            }), N[44] = as, N[45] = D) : D = N[45], N[46] !== O.icon ? (E = "shield" === O.icon && (0, d.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, d.jsx)(o, {
                    "aria-hidden": "true"
                })
            }), N[46] = O.icon, N[47] = E) : E = N[47];
            let at = $ ? "default" : "confirmation",
                au = $ ? "heading-dialog pe-8 wrap-anywhere" : "text-center";
            return N[48] !== O.title || N[49] !== at || N[50] !== au ? (F = (0, d.jsx)(l.f, {
                variant: at,
                className: au,
                children: O.title
            }), N[48] = O.title, N[49] = at, N[50] = au, N[51] = F) : F = N[51], N[52] !== D || N[53] !== E || N[54] !== F ? (G = (0, d.jsxs)("div", {
                className: D,
                children: [E, F]
            }), N[52] = D, N[53] = E, N[54] = F, N[55] = G) : G = N[55], N[56] !== R || N[57] !== P || N[58] !== O ? (H = R ?? (0, d.jsx)(r, {
                presentation: O,
                message: P
            }), N[56] = R, N[57] = P, N[58] = O, N[59] = H) : H = N[59], N[60] !== Q ? (I = null != Q && (0, d.jsxs)("details", {
                className: "group text-sm text-secondary",
                children: [(0, d.jsxs)("summary", {
                    className: "flex w-fit cursor-interaction list-none items-center gap-1 rounded-sm pe-1 select-none hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                    children: [(0, d.jsx)(n.pc, {
                        "aria-hidden": "true",
                        className: "shrink-0 group-open:rotate-90 rtl:rotate-180"
                    }), (0, d.jsx)(i.a, {
                        id: "mcpConfirmation.details",
                        defaultMessage: "Details"
                    })]
                }), (0, d.jsx)("pre", {
                    className: "mt-2 max-h-56 overflow-auto rounded-md bg-surface-secondary p-2.5 text-xs break-words whitespace-pre-wrap text-default select-text",
                    children: Q
                })]
            }), N[60] = Q, N[61] = I) : I = N[61], N[62] !== ah || N[63] !== ak || N[64] !== $ ? (J = $ ? (0, d.jsxs)(m.c, {
                className: "mt-0 gap-2",
                children: [ak, ah]
            }) : (0, d.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [(0, d.jsx)(m.c, {
                    children: ah
                }), (0, d.jsx)(m.c, {
                    children: ak
                })]
            }), N[62] = ah, N[63] = ak, N[64] = $, N[65] = J) : J = N[65], N[66] !== aq || N[67] !== ar || N[68] !== C || N[69] !== G || N[70] !== H || N[71] !== I || N[72] !== J ? (K = (0, d.jsxs)(m.b, {
                as: "form",
                size: "viewport",
                variant: aq,
                className: ar,
                onSubmit: C,
                children: [G, H, I, J]
            }), N[66] = aq, N[67] = ar, N[68] = C, N[69] = G, N[70] = H, N[71] = I, N[72] = J, N[73] = K) : K = N[73], N[74] !== ac || N[75] !== an || N[76] !== ao || N[77] !== ap || N[78] !== K ? (L = (0, d.jsx)(l.a, {
                open: ac,
                onOpenChange: ad,
                widthHint: an,
                variant: ao,
                closeButtonSize: ap,
                contentProps: B,
                children: K
            }), N[74] = ac, N[75] = an, N[76] = ao, N[77] = ap, N[78] = K, N[79] = L) : L = N[79], N[80] !== A || N[81] !== L ? (M = (0, d.jsxs)(d.Fragment, {
                children: [A, L]
            }), N[80] = A, N[81] = L, N[82] = M) : M = N[82], M
        }

        function r(a) {
            let b, c = (0, e.c)(10),
                {
                    message: f,
                    presentation: g
                } = a;
            if (g?.sections != null) {
                let a, b;
                return c[0] !== g.sections ? (a = g.sections.map(t), c[0] = g.sections, c[1] = a) : a = c[1], c[2] !== a ? (b = (0, d.jsx)("div", {
                    className: "flex flex-col gap-5 select-text",
                    children: a
                }), c[2] = a, c[3] = b) : b = c[3], b
            }
            if (g?.fields != null) {
                let a, b;
                return c[4] !== g.fields ? (a = g.fields.map(s), c[4] = g.fields, c[5] = a) : a = c[5], c[6] !== a ? (b = (0, d.jsx)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text",
                    children: a
                }), c[6] = a, c[7] = b) : b = c[7], b
            }
            return c[8] !== f ? (b = (0, d.jsx)("div", {
                className: "text-sm break-words whitespace-pre-wrap text-default select-text",
                children: f
            }), c[8] = f, c[9] = b) : b = c[9], b
        }

        function s(a, b) {
            let {
                label: c,
                value: e
            } = a;
            return (0, d.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, d.jsx)("dt", {
                    className: "text-secondary",
                    children: c
                }), (0, d.jsx)("dd", {
                    className: "whitespace-pre-wrap",
                    children: e
                })]
            }, b)
        }

        function t(a, b) {
            let {
                title: c,
                body: e,
                caption: f
            } = a;
            return (0, d.jsxs)("section", {
                className: "flex flex-col gap-2",
                children: [c && (0, d.jsx)("h3", {
                    className: "text-base font-medium text-secondary",
                    children: c
                }), (0, d.jsxs)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 break-words",
                    children: [(0, d.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, d.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: e.label
                        }), (0, d.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: e.value
                        })]
                    }), (0, d.jsxs)("div", {
                        className: "flex flex-col gap-1 border-t border-default pt-4",
                        children: [(0, d.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: f.label
                        }), (0, d.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: f.value
                        })]
                    })]
                })]
            }, b)
        }
    }),
    nxd2: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.F({
            version: d.z(1),
            field: d.L().min(1),
            presentation: d.F({
                title: d.L().trim().min(1).max(120),
                triggerLabel: d.L().trim().min(1).max(80),
                confirmLabel: d.L().trim().min(1).max(80),
                icon: d.z("shield").optional().catch(void 0),
                destructive: d.j().optional().catch(void 0),
                fields: d.g(d.F({
                    label: d.L().trim().min(1).max(120),
                    value: d.L().min(1).max(1e4).refine(a => a.trim().length > 0)
                })).min(1).max(20).optional().catch(void 0),
                sections: d.g(d.F({
                    title: d.L().trim().min(1).max(120).optional(),
                    bodyField: d.E().int().min(0).max(19),
                    captionField: d.E().int().min(0).max(19)
                })).min(1).max(10).optional().catch(void 0)
            }).transform(a => {
                let {
                    sections: b,
                    ...c
                } = a, {
                    fields: d
                } = c, e = b?.flatMap(a => {
                    let {
                        bodyField: b,
                        captionField: c
                    } = a;
                    return [b, c]
                }), f = null != d && e?.length === d.length && new Set(e).size === d.length && e.every(a => a < d.length);
                return {
                    ...c,
                    sections: f ? b?.map(a => {
                        let {
                            title: b,
                            bodyField: c,
                            captionField: e
                        } = a;
                        return {
                            title: b,
                            body: d[c],
                            caption: d[e]
                        }
                    }) : void 0
                }
            }).optional().catch(void 0)
        });
        c.d(b, {}, {
            a: function(a) {
                let b = e.safeParse(a.confirmation);
                if (!b.success || !a.message.trim()) return null;
                let {
                    field: c
                } = b.data;
                return 1 !== Object.keys(a.schema.properties).length || a.schema.properties[c]?.type !== "boolean" || a.schema.required?.length !== 1 || a.schema.required[0] !== c ? null : b.data
            }
        })
    }),
    vPGU: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("I3F6"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("Dgwo"),
            k = c("sCCv"),
            l = c("KRWX"),
            m = c("Sm6l"),
            n = c("OWtl");

        function o() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t, u, v, w = (0, e.c)(26),
                    {
                        conversationId: x,
                        hostId: y,
                        requestId: z,
                        serverName: A,
                        onReply: B,
                        onStandaloneResponseChange: C,
                        isSubmitting: D
                    } = a,
                    E = void 0 !== D && D,
                    F = (0, f.y)(n.a),
                    G = (0, l.b)(),
                    [H, I] = (0, h.useState)(!1),
                    J = (0, h.useRef)(!1);
                w[0] !== x || w[1] !== y || w[2] !== E || w[3] !== B || w[4] !== C || w[5] !== z || w[6] !== F ? (b = a => {
                    if (E || J.current) return;
                    let b = () => null != B ? B(a) : (0, j.b)(F, y).replyWithMcpServerElicitationResponse(x, z, (0, g.b)(a));
                    null == C ? b().catch(o) : (J.current = !0, I(!0), C("submitting"), Promise.resolve().then(b).then(() => C("decline" === a ? "declined" : "canceled"), () => C("failed")).finally(() => {
                        J.current = !1, I(!1)
                    }))
                }, w[0] = x, w[1] = y, w[2] = E, w[3] = B, w[4] = C, w[5] = z, w[6] = F, w[7] = b) : b = w[7];
                let K = b;
                w[8] !== K ? (c = a => {
                    "Escape" === a.key && (a.preventDefault(), K("cancel"))
                }, w[8] = K, w[9] = c) : c = w[9], w[10] !== A ? (p = (0, d.jsxs)("div", {
                    className: "text-sm font-medium",
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(i.a, {
                            id: "composer.openAIForm.invalidInput.serverTitle",
                            defaultMessage: "{serverName} requested a form that cannot be displayed",
                            values: {
                                serverName: A
                            }
                        })
                    }), null]
                }), w[10] = A, w[11] = p) : p = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, d.jsxs)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(i.a, {
                            id: "composer.openAIForm.invalidInput.dismissInstruction",
                            defaultMessage: "Dismiss the request to close it"
                        })
                    }), null]
                }), w[12] = q) : q = w[12], w[13] !== p ? (r = (0, d.jsxs)("div", {
                    className: "flex flex-col gap-1 p-4",
                    children: [p, q]
                }), w[13] = p, w[14] = r) : r = w[14];
                let L = E || H;
                return w[15] !== K ? (s = () => K("cancel"), w[15] = K, w[16] = s) : s = w[16], w[17] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, d.jsx)(i.a, {
                    id: "composer.openAIForm.unsupported.dismiss",
                    defaultMessage: "Dismiss"
                }), w[17] = t) : t = w[17], w[18] !== G || w[19] !== L || w[20] !== s ? (u = (0, d.jsxs)("div", {
                    className: "flex justify-end gap-2 px-4 py-3",
                    children: [(0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(m.a, {
                            autoFocus: G,
                            color: "primary",
                            size: "composer",
                            disabled: L,
                            onClick: s,
                            children: t
                        })
                    }), null]
                }), w[18] = G, w[19] = L, w[20] = s, w[21] = u) : u = w[21], w[22] !== u || w[23] !== c || w[24] !== r ? (v = (0, d.jsx)(k.a, {
                    children: (0, d.jsxs)("div", {
                        className: "flex flex-col",
                        role: "presentation",
                        onKeyDown: c,
                        children: [r, u]
                    })
                }), w[22] = u, w[23] = c, w[24] = r, w[25] = v) : v = w[25], v
            }
        })
    }),
    JEWd: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Sm6l"),
            i = c("IxWh"),
            j = c("HOLv"),
            k = c("bIvi"),
            l = c("mxRC"),
            m = c("GPpz");
        let n = {
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
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r, s, t, u, v, w, x = (0, e.c)(38),
                    {
                        ariaInvalid: y,
                        ariaLabel: z,
                        backLabel: A,
                        children: B,
                        forwardLabel: C,
                        header: D,
                        layout: E,
                        role: F,
                        shouldUseReducedMotion: G
                    } = a,
                    H = void 0 === E ? "form" : E,
                    I = void 0 === F ? "group" : F;
                x[0] !== B ? (b = g.Children.count(B), x[0] = B, x[1] = b) : b = x[1];
                let J = b,
                    K = (0, g.useRef)(null),
                    [L, M] = (0, g.useState)("ltr"),
                    [N, O] = (0, g.useState)(!1),
                    [P, Q] = (0, g.useState)(!1);
                x[2] === Symbol.for("react.memo_cache_sentinel") ? (c = a => {
                    let b = "rtl" === getComputedStyle(a).direction ? "rtl" : "ltr";
                    M(b);
                    let {
                        maximum: c,
                        minimum: d
                    } = (0, i.a)(a, b);
                    "rtl" === b ? (O(a.scrollLeft < c - 1), Q(a.scrollLeft > d + 1)) : (O(a.scrollLeft > d + 1), Q(a.scrollLeft < c - 1))
                }, x[2] = c) : c = x[2];
                let R = (0, k.a)(c),
                    S = a => {
                        if (K.current = a, null == a || 0 === J || (R(a), "u" < typeof ResizeObserver)) return;
                        let b = () => R(a),
                            c = new ResizeObserver(b),
                            d = new MutationObserver(b);
                        return d.observe(a, {
                            childList: !0
                        }), c.observe(a), null != a.firstElementChild && c.observe(a.firstElementChild), null != a.lastElementChild && c.observe(a.lastElementChild), () => {
                            c.disconnect(), d.disconnect(), K.current = null
                        }
                    },
                    T = "form" === H && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                    U = "gallery" === H && "gap-2";
                x[3] !== T || x[4] !== U ? (o = (0, f.b)("flex items-center", T, U), x[3] = T, x[4] = U, x[5] = o) : o = x[5];
                let V = [-1, 1].map(a => {
                    let b = -1 === a ? N : P,
                        c = -1 === a ? A : C;
                    return (0, d.jsx)(h.a, {
                        className: (0, f.b)("pointer-events-auto", "form" === H && !b && "invisible"),
                        "aria-label": c,
                        ...n[H],
                        disabled: !b,
                        onClick: () => {
                            let b;
                            null != (b = K.current) && b.scrollTo({
                                left: (0, i.b)(b, a, "rtl" === getComputedStyle(b).direction ? "rtl" : "ltr"),
                                behavior: G ? "instant" : "smooth"
                            })
                        },
                        radius: "compact" === H ? void 0 : "full",
                        title: c,
                        uniform: !0,
                        children: (0, d.jsx)(j.a, {
                            className: a === ("rtl" === L ? 1 : -1) ? "rotate-180" : void 0,
                            asset: "gallery" === H ? l.a : m.a
                        })
                    }, a)
                });
                x[6] !== o || x[7] !== V ? (p = (0, d.jsx)("div", {
                    className: o,
                    children: V
                }), x[6] = o, x[7] = V, x[8] = p) : p = x[8];
                let W = p,
                    X = "gallery" === H && "gap-4",
                    Y = "compact" === H && "gap-2",
                    Z = "form" === H && "gap-1.5";
                x[9] !== X || x[10] !== Y || x[11] !== Z ? (q = (0, f.b)("flex min-w-0 flex-col", X, Y, Z), x[9] = X, x[10] = Y, x[11] = Z, x[12] = q) : q = x[12], x[13] !== D || x[14] !== H || x[15] !== W ? (r = null != D || "form" !== H ? (0, d.jsxs)("div", {
                    className: (0, f.b)("flex min-w-0 items-center", "form" === H && "gap-1 px-4 py-1.5", "compact" === H && "gap-3", "gallery" === H && "min-h-9 gap-3"),
                    children: [(0, d.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: D
                    }), "form" !== H ? W : null]
                }) : null, x[13] = D, x[14] = H, x[15] = W, x[16] = r) : r = x[16];
                let $ = "form" === H ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
                    _ = "gallery" === H && "gap-3",
                    aa = "compact" === H && "gap-2";
                x[17] !== $ || x[18] !== _ || x[19] !== aa ? (s = (0, f.b)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", $, _, aa), x[17] = $, x[18] = _, x[19] = aa, x[20] = s) : s = x[20];
                let ab = y || void 0;
                x[21] !== R ? (t = a => R(a.currentTarget), x[21] = R, x[22] = t) : t = x[22], x[23] !== z || x[24] !== B || x[25] !== I || x[26] !== S || x[27] !== s || x[28] !== ab || x[29] !== t ? (u = (0, d.jsx)("div", {
                    ref: S,
                    className: s,
                    "data-horizontal-scroll": !0,
                    role: I,
                    "aria-invalid": ab,
                    "aria-label": z,
                    onScroll: t,
                    children: B
                }), x[23] = z, x[24] = B, x[25] = I, x[26] = S, x[27] = s, x[28] = ab, x[29] = t, x[30] = u) : u = x[30];
                let ac = "form" === H ? W : null;
                return x[31] !== u || x[32] !== ac ? (v = (0, d.jsxs)("div", {
                    className: "relative min-w-0",
                    children: [u, ac]
                }), x[31] = u, x[32] = ac, x[33] = v) : v = x[33], x[34] !== q || x[35] !== r || x[36] !== v ? (w = (0, d.jsxs)("div", {
                    className: q,
                    children: [r, v]
                }), x[34] = q, x[35] = r, x[36] = v, x[37] = w) : w = x[37], w
            }
        })
    }),
    QWQN: (function(a, b, c) {
        c.d(b, {
            a: () => bq
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("MnTr"),
            g = c("on57"),
            h = c("Q840"),
            i = c("KvQL"),
            j = c("I3F6"),
            k = c("zd8w"),
            l = c("Wf1j"),
            m = c("Telb"),
            n = c("Dgwo"),
            o = c("sCCv"),
            p = c("KRWX"),
            q = c("NySd"),
            r = c("M7Ra"),
            s = c("SGsN"),
            t = c("rP0s"),
            u = c("oyxz"),
            v = c("Sm6l"),
            w = c("jDEJ");

        function x(a) {
            let b, c, f, g, h, i, j = (0, e.c)(14),
                {
                    disabled: k,
                    isSubmitting: l,
                    hotkeysEnabled: m,
                    onDecline: n
                } = a;
            return j[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(u.a, {
                id: "composer.mcpConfirmation.button.decline",
                defaultMessage: "Decline"
            }), j[0] = b) : b = j[0], j[1] !== l || j[2] !== n ? (c = (0, d.jsx)(v.a, {
                color: "ghost",
                size: "composer",
                disabled: l,
                type: "button",
                onClick: n,
                children: b
            }), j[1] = l, j[2] = n, j[3] = c) : c = j[3], j[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsx)(u.a, {
                id: "composer.mcpConfirmation.button.accept",
                defaultMessage: "Accept"
            }), j[4] = f) : f = j[4], j[5] !== m ? (g = m && (0, d.jsx)(o.b, {
                variant: "primary",
                children: (0, w.b)("Enter")
            }), j[5] = m, j[6] = g) : g = j[6], j[7] !== k || j[8] !== l || j[9] !== g ? (h = (0, d.jsxs)(v.a, {
                color: "primary",
                size: "composer",
                type: "submit",
                disabled: k,
                loading: l,
                children: [f, g]
            }), j[7] = k, j[8] = l, j[9] = g, j[10] = h) : h = j[10], j[11] !== c || j[12] !== h ? (i = (0, d.jsxs)("div", {
                className: "flex shrink-0 items-center justify-end gap-2 px-4 py-3",
                children: [c, h]
            }), j[11] = c, j[12] = h, j[13] = i) : i = j[13], i
        }
        var y = c("FVmU"),
            z = c("SZCv"),
            A = c.n(z),
            B = c("VrVA"),
            C = c("Qgfj"),
            D = c("lAQI"),
            E = c("nxd2");
        let F = "Replace the listed settings in this task\u2019s cloud environment? An empty list clears that setting.\n\nInstance: ",
            G = "\nReason: ",
            H = new Map([
                ["Repositories after approval", "repositories"],
                ["Public internet access", "network_policy"],
                ["Runtime variables after approval", "env_vars"],
                ["Network secrets after approval", "network_secrets"]
            ]),
            I = RegExp(`\\n\\n(?=(?:${[...H.keys()].join("|")})\\n)`),
            J = (0, C.f)({
                repositories: {
                    id: "mcpConfirmation.cloudEnvironment.repositoryChange",
                    defaultMessage: "{clear, select, true {Remove all repository checkouts} other {Replace repository checkouts}}"
                },
                env_vars: {
                    id: "mcpConfirmation.cloudEnvironment.runtimeVariableChange",
                    defaultMessage: "{clear, select, true {Remove all configured environment variables} other {Replace configured environment variables}}"
                },
                network_secrets: {
                    id: "mcpConfirmation.cloudEnvironment.networkSecretChange",
                    defaultMessage: "{clear, select, true {Remove all network secret bindings} other {Replace network secret bindings}}"
                }
            }),
            K = D.K({
                repository_id: D.L().min(1),
                ref: D.L().min(1),
                mount_path: D.L().optional(),
                refresh: D.j().optional(),
                extra_refs: D.g(D.K({
                    branch: D.L().min(1),
                    ref: D.L().min(1)
                })).optional()
            }),
            L = D.L().regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
            M = {
                source: D.K({
                    vault_secret_id: D.L().regex(/^sec_[0-9a-f]{32}$/)
                }),
                optional: D.j().optional()
            },
            N = D.K({
                network_policy: B.n.optional(),
                repositories: D.g(D.K({
                    id: D.L().min(1),
                    value: D.K({
                        repository: K
                    })
                })).optional(),
                env_vars: D.g(D.K({
                    ...M,
                    direct_environment_variable: D.K({
                        variable_name: L
                    })
                })).optional(),
                network_secrets: D.g(D.K({
                    ...M,
                    name: D.L().min(1),
                    target: D.K({
                        environment_variable: D.K({
                            variable_name: L,
                            allowed_domains: D.g(D.L().min(1)).min(1)
                        })
                    })
                })).optional()
            }).refine(a => Object.keys(a).length > 0);

        function O(a, b, c) {
            let d = 0 === b.length;
            return {
                category: a,
                heading: c.formatMessage(J[a], {
                    clear: String(d)
                }),
                destructive: d,
                entries: b
            }
        }

        function P(a, b, c) {
            return c.formatMessage({
                id: "mcpConfirmation.cloudEnvironment.vaultBindingDetail",
                defaultMessage: "{optional, select, true {Optional} other {Required}} \xb7 Vault item {vaultItem}"
            }, {
                vaultItem: a,
                optional: String(b)
            })
        }

        function Q(a) {
            return a.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/gu, a => {
                let b = a.codePointAt(0);
                return null == b ? a : `\\u{${b.toString(16)}}`
            })
        }

        function R(a, b) {
            if ("unrestricted" === a.type) return {
                category: "network_policy",
                heading: b.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.allowUnrestrictedInternet",
                    defaultMessage: "Allow unrestricted public internet access"
                }),
                entries: []
            };
            let c = "restricted" === a.type ? a.egress_rules.map(a => {
                let {
                    host: b
                } = a;
                return {
                    label: Q(b)
                }
            }) : [];
            return "restricted" === a.type && a.presets?.includes("package_managers") ? {
                category: "network_policy",
                heading: b.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.restrictInternetWithPackageManagers",
                    defaultMessage: "{hasDomains, select, true {Allow public internet access only to package managers and listed domains} other {Allow public internet access only to package manager domains}}"
                }, {
                    hasDomains: String(c.length > 0)
                }),
                entries: c
            } : {
                category: "network_policy",
                heading: 0 === c.length ? b.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.turnOffInternet",
                    defaultMessage: "Turn off public internet access"
                }) : b.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.restrictInternet",
                    defaultMessage: "Allow public internet access only to"
                }),
                entries: c
            }
        }
        var S = c("bf6R");
        let T = {
            network_policy: S.de,
            repositories: S.Pd,
            env_vars: S.Ri,
            network_secrets: S.Ie
        };

        function U(a) {
            let b, c, f, g, h, i = (0, e.c)(12),
                {
                    review: j
                } = a,
                k = (0, l.a)();
            return i[0] !== j.reason ? (b = (0, d.jsx)("p", {
                className: "whitespace-pre-wrap text-secondary",
                dir: "auto",
                children: j.reason
            }), i[0] = j.reason, i[1] = b) : b = i[1], i[2] !== k ? (c = k.formatMessage({
                id: "mcpConfirmation.cloudEnvironment.proposedChanges",
                defaultMessage: "Proposed changes"
            }), i[2] = k, i[3] = c) : c = i[3], i[4] !== j.changes ? (f = j.changes.map(V), i[4] = j.changes, i[5] = f) : f = i[5], i[6] !== c || i[7] !== f ? (g = (0, d.jsx)("ul", {
                "aria-label": c,
                className: "flex flex-col gap-3",
                children: f
            }), i[6] = c, i[7] = f, i[8] = g) : g = i[8], i[9] !== b || i[10] !== g ? (h = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-3 text-sm leading-5 wrap-anywhere select-text",
                children: [b, g]
            }), i[9] = b, i[10] = g, i[11] = h) : h = i[11], h
        }

        function V(a) {
            let {
                category: b,
                heading: c,
                entries: e,
                destructive: f
            } = a, h = f ? S.vj : T[b];
            return (0, d.jsxs)("li", {
                className: "flex items-start gap-2.5",
                children: [(0, d.jsx)("span", {
                    className: (0, g.b)("flex size-6 shrink-0 items-center justify-center rounded-md bg-text/5", f ? "text-danger" : "text-secondary"),
                    children: (0, d.jsx)(h, {
                        "aria-hidden": "true"
                    })
                }), (0, d.jsxs)("div", {
                    className: "min-w-0",
                    children: [(0, d.jsx)("h3", {
                        className: "pt-0.5 font-medium",
                        children: c
                    }), (0, d.jsx)(W, {
                        entries: e
                    })]
                })]
            }, b)
        }

        function W(a) {
            let b, c, f, g, h, i, j, k, l, m, n = (0, e.c)(23),
                {
                    entries: o
                } = a;
            if (n[0] !== o ? ([b, ...c] = o, n[0] = o, n[1] = b, n[2] = c) : (b = n[1], c = n[2]), null == b) return null;
            if (!b.detail && 0 === c.length) {
                let a;
                return n[3] !== b ? (a = (0, d.jsx)("div", {
                    className: "mt-0.5",
                    children: (0, d.jsx)(Y, {
                        entry: b
                    })
                }), n[3] = b, n[4] = a) : a = n[4], a
            }
            return n[5] !== b ? (f = (0, d.jsx)(Y, {
                entry: b
            }), n[5] = b, n[6] = f) : f = n[6], n[7] !== c.length ? (g = c.length > 0 && (0, d.jsx)(u.a, {
                id: "mcpConfirmation.cloudEnvironment.moreEntries",
                defaultMessage: "+{count, number} more",
                values: {
                    count: c.length
                }
            }), n[7] = c.length, n[8] = g) : g = n[8], n[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, d.jsx)(S.pc, {
                "aria-hidden": "true",
                className: "shrink-0 group-open:rotate-90 rtl:rotate-180 rtl:group-open:rotate-90"
            }), n[9] = h) : h = n[9], n[10] !== g ? (i = (0, d.jsxs)("span", {
                className: "inline-flex items-center text-secondary group-hover:text-default",
                children: [g, h]
            }), n[10] = g, n[11] = i) : i = n[11], n[12] !== f || n[13] !== i ? (j = (0, d.jsxs)("summary", {
                className: "flex w-fit max-w-full cursor-interaction list-none flex-wrap items-center gap-x-1.5 gap-y-1 rounded-sm focus-visible:outline-2 focus-visible:outline-ring",
                children: [f, i]
            }), n[12] = f, n[13] = i, n[14] = j) : j = n[14], n[15] !== b.detail ? (k = b.detail && (0, d.jsx)(Z, {
                detail: b.detail
            }), n[15] = b.detail, n[16] = k) : k = n[16], n[17] !== c ? (l = c.length > 0 && (0, d.jsx)("ul", {
                className: "mt-1 flex flex-col gap-1.5",
                children: c.map(X)
            }), n[17] = c, n[18] = l) : l = n[18], n[19] !== j || n[20] !== k || n[21] !== l ? (m = (0, d.jsxs)("details", {
                className: "group mt-0.5",
                children: [j, k, l]
            }), n[19] = j, n[20] = k, n[21] = l, n[22] = m) : m = n[22], m
        }

        function X(a, b) {
            return (0, d.jsxs)("li", {
                children: [(0, d.jsx)(Y, {
                    entry: a
                }), a.detail && (0, d.jsx)(Z, {
                    detail: a.detail
                })]
            }, b)
        }

        function Y(a) {
            let b, c, f, g = (0, e.c)(8),
                {
                    entry: h
                } = a,
                {
                    label: i,
                    gitRef: j
                } = h,
                k = null != j ? "font-medium" : "text-secondary";
            return g[0] !== i || g[1] !== k ? (b = (0, d.jsx)("bdi", {
                className: k,
                children: i
            }), g[0] = i, g[1] = k, g[2] = b) : b = g[2], g[3] !== j ? (c = null != j && (0, d.jsxs)("span", {
                className: "inline-flex max-w-full items-start gap-1 rounded-md border border-subtle px-1.5 text-xs leading-4 text-secondary",
                children: [(0, d.jsx)(S.Ab, {
                    "aria-hidden": "true",
                    className: "shrink-0"
                }), (0, d.jsx)("span", {
                    className: "sr-only",
                    children: (0, d.jsx)(u.a, {
                        id: "mcpConfirmation.cloudEnvironment.gitRef",
                        defaultMessage: "Git ref"
                    })
                }), (0, d.jsx)("code", {
                    className: "min-w-0 font-mono",
                    dir: "auto",
                    children: j
                })]
            }), g[3] = j, g[4] = c) : c = g[4], g[5] !== b || g[6] !== c ? (f = (0, d.jsxs)("span", {
                className: "inline-flex max-w-full min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
                children: [b, c]
            }), g[5] = b, g[6] = c, g[7] = f) : f = g[7], f
        }

        function Z(a) {
            let b, c = (0, e.c)(2),
                {
                    detail: f
                } = a;
            return c[0] !== f ? (b = (0, d.jsx)("p", {
                className: "text-xs leading-4 whitespace-pre-wrap text-secondary",
                dir: "auto",
                children: f
            }), c[0] = f, c[1] = b) : b = c[1], b
        }
        var $ = c("OWtl"),
            _ = c("tSEg"),
            aa = c("LVsP"),
            ab = c("pHQ8"),
            ac = c("AqHC"),
            ad = c("q475"),
            ae = c("K0rn"),
            af = c("IRP0");

        function ag(a) {
            let b = (0, ab.c)(a.schema);
            return {
                kind: a.kind,
                customDrafts: {},
                values: (0, ab.a)(b.flatMap(a => {
                    let {
                        schema: b,
                        ...c
                    } = a;
                    return (0, ad.c)(b) || (0, ae.b)(b) ? [] : [{
                        ...c,
                        schema: b
                    }]
                })),
                fileOptions: Object.fromEntries(b.flatMap(a => {
                    let {
                        name: b,
                        schema: c
                    } = a;
                    return (0, ad.c)(c) ? [
                        [b, (0, ad.a)(c)]
                    ] : []
                }))
            }
        }

        function ah(a, b) {
            return b?.selected && b.text.length > 0 && Array.isArray(a) ? [...a, b.text] : a
        }
        var ai = c("tO3J");

        function aj(a, b) {
            return !a.defaultPrevented && !a.nativeEvent.isComposing && 229 !== a.nativeEvent.keyCode && !!(0, ai.b)(a.nativeEvent, "Enter") && (a.preventDefault(), a.repeat || b(), !0)
        }
        var ak = c("vPGU"),
            al = c("ZDhX"),
            am = c("g2Gi"),
            an = c("bqtn"),
            ao = c("HOLv"),
            ap = c("gfKj");

        function aq(a) {
            let b, c = (0, e.c)(4),
                {
                    options: f,
                    disabled: g,
                    onAccept: h
                } = a;
            return c[0] !== g || c[1] !== h || c[2] !== f ? (b = (0, d.jsx)("div", {
                className: "me-auto max-w-full min-w-0",
                children: 1 === f.length ? (0, d.jsx)(al.a, {
                    content: (0, d.jsxs)(d.Fragment, {
                        children: [f[0].title, f[0].description && (0, d.jsx)("p", {
                            children: f[0].description
                        })]
                    }),
                    children: (0, d.jsx)(v.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        className: "max-w-full",
                        disabled: g,
                        "aria-description": f[0].description,
                        onClick: () => h(f[0].const),
                        children: (0, d.jsx)("span", {
                            className: "min-w-0 truncate",
                            children: f[0].title
                        })
                    })
                }) : (0, d.jsx)(an.a, {
                    align: "start",
                    disabled: g,
                    triggerButton: (0, d.jsxs)(v.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        disabled: g,
                        children: [(0, d.jsx)(u.a, {
                            id: "composer.mcpFormElicitation.moreAcceptActions",
                            defaultMessage: "More actions"
                        }), (0, d.jsx)(ao.a, {
                            "aria-hidden": !1,
                            asset: ap.a
                        })]
                    }),
                    children: f.map(a => (0, d.jsx)(an.c.Item, {
                        disabled: g,
                        allowWrap: !0,
                        subTextAllowWrap: !0,
                        SubText: null == a.description ? null : (0, d.jsx)(d.Fragment, {
                            children: a.description
                        }),
                        onSelect: () => h(a.const),
                        children: a.title
                    }, a.const))
                })
            }), c[0] = g, c[1] = h, c[2] = f, c[3] = b) : b = c[3], b
        }

        function ar(a) {
            let b, c, f, h, i, j, k, l, m = (0, e.c)(49),
                {
                    autoResolution: n,
                    disabled: p,
                    isSubmitting: q,
                    submitDisabled: r,
                    acceptOptions: s,
                    primaryActionRef: t,
                    fieldCount: x,
                    isLastGroup: y,
                    onBack: z,
                    hotkeysEnabled: A,
                    isStandardForm: B,
                    showSubmit: C,
                    showHeader: D,
                    onCancel: E,
                    onDecline: F,
                    onDismissLegacyImagePicker: G,
                    onViewAll: H
                } = a,
                I = void 0 !== q && q,
                J = s?.required === !0 && s.options.length > 1,
                K = s?.required ? s.options[0] : void 0;
            m[0] !== s?.options || m[1] !== s?.options.slice || m[2] !== K ? (b = s?.options.slice(+(null != K)) ?? [], m[0] = s?.options, m[1] = s?.options.slice, m[2] = K, m[3] = b) : b = m[3];
            let L = b;
            if (null != G) {
                let a, b = n?.deadlineMs ?? "no-deadline",
                    e = n?.deadlineMs,
                    f = n?.nowMs;
                m[4] !== I || m[5] !== G || m[6] !== b || m[7] !== e || m[8] !== f ? (a = (0, d.jsx)(am.a, {
                    disabled: I,
                    deadlineMs: e,
                    nowMs: f,
                    variant: "button",
                    onDismiss: G
                }, b), m[4] = I, m[5] = G, m[6] = b, m[7] = e, m[8] = f, m[9] = a) : a = m[9], c = a
            } else {
                let a, b;
                m[10] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.deny",
                    defaultMessage: "Deny"
                }), m[10] = a) : a = m[10], m[11] !== p || m[12] !== F ? (b = (0, d.jsx)(v.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: F,
                    children: a
                }), m[11] = p, m[12] = F, m[13] = b) : b = m[13], c = b
            }
            return m[14] !== p || m[15] !== z ? (f = null != z && (0, d.jsx)(v.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: p,
                onClick: z,
                children: (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.back",
                    defaultMessage: "Back"
                })
            }), m[14] = p, m[15] = z, m[16] = f) : f = m[16], m[17] !== s || m[18] !== p || m[19] !== H ? (h = null != H ? (0, d.jsx)("div", {
                className: null == s ? "me-auto" : void 0,
                children: (0, d.jsxs)(v.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: p,
                    onClick: H,
                    children: [(0, d.jsx)(S.mi, {}), (0, d.jsx)(u.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all"
                    })]
                })
            }) : null, m[17] = s, m[18] = p, m[19] = H, m[20] = h) : h = m[20], m[21] !== I || m[22] !== E || m[23] !== G || m[24] !== D ? (i = !D && null == G && (0, d.jsx)(v.a, {
                color: "ghost",
                size: "composer",
                disabled: I,
                onClick: E,
                children: (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.cancel",
                    defaultMessage: "Cancel"
                })
            }), m[21] = I, m[22] = E, m[23] = G, m[24] = D, m[25] = i) : i = m[25], m[26] !== s || m[27] !== L || m[28] !== r ? (j = null != s && L.length > 0 && (0, d.jsx)(aq, {
                options: L,
                disabled: r,
                onAccept: s.onSelect
            }), m[26] = s, m[27] = L, m[28] = r, m[29] = j) : j = m[29], m[30] !== s || m[31] !== x || m[32] !== A || m[33] !== y || m[34] !== B || m[35] !== I || m[36] !== t || m[37] !== K || m[38] !== J || m[39] !== C || m[40] !== r ? (k = (null != s || C) && (0, d.jsx)(al.a, {
                content: K && (0, d.jsxs)(d.Fragment, {
                    children: [K.title, K.description && (0, d.jsx)("p", {
                        children: K.description
                    })]
                }),
                children: (0, d.jsxs)(v.a, {
                    autoFocus: A && 0 === x,
                    className: "max-w-full",
                    color: "primary",
                    size: "composer",
                    type: J ? "button" : "submit",
                    ref: t,
                    onClick: null != K && null != s && J ? () => s.onSelect(K.const) : void 0,
                    "aria-description": K?.description,
                    disabled: r,
                    loading: I,
                    children: [(0, d.jsx)("span", {
                        className: (0, g.b)("min-w-0 truncate", B && "text-sm font-medium"),
                        children: y ? K?.title ?? (0, d.jsx)(u.a, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept"
                        }) : (0, d.jsx)(u.a, {
                            id: "composer.mcpFormElicitation.next",
                            defaultMessage: "Next"
                        })
                    }), A && !J && (0, d.jsx)(o.b, {
                        variant: "primary",
                        children: (0, w.b)("Enter")
                    })]
                })
            }), m[30] = s, m[31] = x, m[32] = A, m[33] = y, m[34] = B, m[35] = I, m[36] = t, m[37] = K, m[38] = J, m[39] = C, m[40] = r, m[41] = k) : k = m[41], m[42] !== c || m[43] !== f || m[44] !== h || m[45] !== i || m[46] !== j || m[47] !== k ? (l = (0, d.jsxs)("div", {
                className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
                children: [f, h, i, j, c, k]
            }), m[42] = c, m[43] = f, m[44] = h, m[45] = i, m[46] = j, m[47] = k, m[48] = l) : l = m[48], l
        }
        var as = c("Wyro"),
            at = c.n(as),
            au = c("Qr2V"),
            av = c("zLIa"),
            aw = c("E6P3"),
            ax = c("T9RQ"),
            ay = c("ue8o"),
            az = c("zSQm"),
            aA = c.p + "assets/icon.6b02567b2b.png",
            aB = c.p + "assets/icon.4e392f38ad.png",
            aC = c.p + "assets/icon.9b2a0253b8.png";
        let aD = {
            "application/msword": aA,
            "application/vnd.google-apps.document": aA,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": aA,
            "text/markdown": aA,
            "text/plain": aA,
            "application/vnd.google-apps.presentation": aB,
            "application/vnd.ms-powerpoint": aB,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": aB,
            "application/vnd.google-apps.spreadsheet": aC,
            "application/vnd.ms-excel": aC,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": aC,
            "text/csv": aC,
            "text/tab-separated-values": aC
        };

        function aE(a) {
            let b, c, f, h, i, j = (0, e.c)(22),
                {
                    layout: l,
                    src: m,
                    mimeType: n
                } = a,
                o = void 0 === l ? "thumbnail" : l,
                [p, q] = (0, k.useState)(),
                r = null != m && URL.canParse(m) && "https:" === new URL(m).protocol ? m : void 0,
                {
                    safeUrl: s
                } = (0, ay.d)(r, null != r);
            j[0] !== s || j[1] !== m ? (b = null != m && (0, az.c)(m) ? m : s, j[0] = s, j[1] = m, j[2] = b) : b = j[2];
            let t = b,
                u = n?.split(";")[0]?.trim().toLowerCase(),
                v = aD[u ?? ""],
                w = "icon" === o ? "size-5" : "size-10";
            j[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(S.$c, {}), j[3] = c) : c = j[3];
            let x = c;
            if (null != v) {
                let a, b;
                j[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(S.$c, {}), j[4] = a) : a = j[4], j[5] !== w || j[6] !== v ? (b = (0, d.jsx)(aw.a, {
                    className: w,
                    alt: "",
                    fallback: a,
                    src: v
                }), j[5] = w, j[6] = v, j[7] = b) : b = j[7], x = b
            } else if ("text/html" === u || "application/xhtml+xml" === u) {
                let a;
                j[8] !== w ? (a = (0, d.jsx)(ax.a, {
                    className: w
                }), j[8] = w, j[9] = a) : a = j[9], x = a
            }
            let y = "card" === o || "card-icon" === o,
                z = "icon" === o,
                A = "thumbnail" === o;
            return j[10] !== y || j[11] !== z || j[12] !== A ? (f = (0, g.b)("flex items-center justify-center overflow-hidden", {
                "h-full w-full": y,
                "size-5 shrink-0 rounded-xs": z,
                "size-10 shrink-0 rounded-md bg-surface": A
            }), j[10] = y, j[11] = z, j[12] = A, j[13] = f) : f = j[13], j[14] !== p || j[15] !== x || j[16] !== t || j[17] !== o ? (h = null == t || p === t ? x : (0, d.jsx)("img", {
                alt: "",
                className: (0, g.b)("card-icon" === o ? "size-10" : "h-full w-full", "icon" === o || "card-icon" === o ? "object-contain" : "object-scale-down", "card" === o && "block"),
                decoding: "async",
                draggable: !1,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: t,
                onError: () => q(t)
            }), j[14] = p, j[15] = x, j[16] = t, j[17] = o, j[18] = h) : h = j[18], j[19] !== f || j[20] !== h ? (i = (0, d.jsx)("span", {
                className: f,
                children: h
            }), j[19] = f, j[20] = h, j[21] = i) : i = j[21], i
        }

        function aF(a) {
            let b, c, f, g, h, i, j, l, m = (0, e.c)(61),
                {
                    autoFocus: n,
                    submitOnEnter: o,
                    showOptionNumbers: p,
                    customOption: q,
                    invalid: r,
                    multiple: s,
                    options: t,
                    value: u,
                    onChange: v
                } = a,
                w = void 0 === o || o,
                x = (0, k.useId)(),
                y = (void 0 === p || p) && t.length > 1,
                z = s ? au.a : au.b,
                A = "string" == typeof u ? u : void 0;
            m[0] !== u ? (b = Array.isArray(u) ? u : [], m[0] = u, m[1] = b) : b = m[1];
            let B = b;
            m[2] !== t ? (c = t.some(aG), m[2] = t, m[3] = c) : c = m[3];
            let C = c;
            m[4] !== s || m[5] !== t || m[6] !== A ? (f = s ? 0 : Math.max(0, t.findIndex(a => a.const === A)), m[4] = s, m[5] = t, m[6] = A, m[7] = f) : f = m[7];
            let D = f;
            m[8] !== q || m[9] !== s || m[10] !== v || m[11] !== t || m[12] !== w ? (g = a => {
                let b = a.target;
                if (!(b instanceof HTMLInputElement || b instanceof HTMLButtonElement) || !b.matches('input[type="radio"], button[role="checkbox"]') || aj(a, () => {
                        s || !w || b instanceof HTMLInputElement && !b.checked ? b.click() : b.form?.requestSubmit()
                    }) || a.defaultPrevented || a.nativeEvent.isComposing || a.altKey || a.ctrlKey || a.metaKey || a.shiftKey || "ArrowDown" !== a.key && "ArrowUp" !== a.key) return;
                let c = Array.from(a.currentTarget.querySelectorAll('input[type="radio"], button[role="checkbox"]')),
                    d = (c.indexOf(b) + ("ArrowDown" === a.key ? 1 : -1) + c.length) % c.length,
                    e = c[d];
                if (null != e && (a.preventDefault(), e.focus(), !s)) {
                    let a = t[d];
                    null != a ? v(a.const) : q?.onSelect(!0)
                }
            }, m[8] = q, m[9] = s, m[10] = v, m[11] = t, m[12] = w, m[13] = g) : g = m[13];
            let E = g;
            if (m[14] !== z || m[15] !== n || m[16] !== q?.selected || m[17] !== D || m[18] !== C || m[19] !== x || m[20] !== r || m[21] !== s || m[22] !== v || m[23] !== t || m[24] !== A || m[25] !== B || m[26] !== y) {
                let a;
                m[28] !== z || m[29] !== n || m[30] !== q?.selected || m[31] !== D || m[32] !== C || m[33] !== x || m[34] !== r || m[35] !== s || m[36] !== v || m[37] !== A || m[38] !== B || m[39] !== y ? (a = (a, b) => {
                    let c = B.indexOf(a.const),
                        e = s ? -1 !== c : !q?.selected && A === a.const;
                    return (0, d.jsxs)(z, {
                        autoFocus: n && !q?.selected && b === D,
                        checked: e,
                        invalid: r,
                        name: x,
                        type: s ? "checkbox" : "radio",
                        value: a.const,
                        onChange: () => {
                            s ? v(e ? B.filter((a, b) => b !== c) : [...B, a.const]) : v(a.const)
                        },
                        children: [!s && (0, d.jsx)(au.c, {
                            selected: e,
                            showNumber: y,
                            variant: "number",
                            index: b + 1,
                            verticalAlignment: "start"
                        }), C ? (0, d.jsx)(aE, {
                            src: a["x-openai-thumbnail"]?.src
                        }) : null, (0, d.jsxs)("span", {
                            className: "flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 @max-5xl/request-card:flex-col @max-5xl/request-card:items-stretch",
                            children: [(0, d.jsx)("span", {
                                className: "min-w-0 text-sm font-medium wrap-anywhere",
                                children: a.title
                            }), null == a.description ? null : (0, d.jsx)("span", {
                                className: "min-w-0 text-sm wrap-anywhere text-codex-description",
                                children: a.description
                            })]
                        })]
                    }, a.const)
                }, m[28] = z, m[29] = n, m[30] = q?.selected, m[31] = D, m[32] = C, m[33] = x, m[34] = r, m[35] = s, m[36] = v, m[37] = A, m[38] = B, m[39] = y, m[40] = a) : a = m[40], h = t.map(a), m[14] = z, m[15] = n, m[16] = q?.selected, m[17] = D, m[18] = C, m[19] = x, m[20] = r, m[21] = s, m[22] = v, m[23] = t, m[24] = A, m[25] = B, m[26] = y, m[27] = h
            } else h = m[27];
            return m[41] !== q || m[42] !== r || m[43] !== s || m[44] !== v || m[45] !== t || m[46] !== B ? (i = null != q && s ? B.map((a, b) => t.some(b => b.const === a) && B.indexOf(a) === b ? null : (0, d.jsx)(au.a, {
                autoFocus: !1,
                checked: !0,
                invalid: r,
                onChange: () => v(B.filter((a, c) => c !== b)),
                children: (0, d.jsx)("span", {
                    className: "min-w-0 text-sm font-medium wrap-anywhere",
                    children: t.find(b => b.const === a)?.title ?? a
                })
            }, b)) : null, m[41] = q, m[42] = r, m[43] = s, m[44] = v, m[45] = t, m[46] = B, m[47] = i) : i = m[47], m[48] !== z || m[49] !== n || m[50] !== q || m[51] !== x || m[52] !== r || m[53] !== s || m[54] !== t.length ? (j = null != q ? (0, d.jsx)("div", {
                "data-mcp-form-custom-choice": !0,
                children: (0, d.jsx)(z, {
                    accessibilityLabel: q.label,
                    autoFocus: n && (0 === t.length || q.selected),
                    checked: q.selected,
                    invalid: r,
                    name: x,
                    type: s ? "checkbox" : "radio",
                    onChange: () => q.onSelect(!s || !q.selected),
                    editor: q.editor,
                    children: !s && (0, d.jsx)(au.c, {
                        selected: q.selected,
                        variant: "custom"
                    })
                })
            }) : null, m[48] = z, m[49] = n, m[50] = q, m[51] = x, m[52] = r, m[53] = s, m[54] = t.length, m[55] = j) : j = m[55], m[56] !== E || m[57] !== h || m[58] !== i || m[59] !== j ? (l = (0, d.jsxs)("div", {
                className: "flex flex-col gap-1",
                "data-mcp-form-choices": !0,
                role: "group",
                onKeyDownCapture: E,
                children: [h, i, j]
            }), m[56] = E, m[57] = h, m[58] = i, m[59] = j, m[60] = l) : l = m[60], l
        }

        function aG(a) {
            return null != a["x-openai-thumbnail"]
        }

        function aH(a) {
            let b, c, f, g, h, i, j = (0, e.c)(29),
                {
                    schema: k,
                    value: l
                } = a;
            if ("array" === k.type && Array.isArray(l) && l.length >= Number(k.minItems ?? 0) && (null == k.maxItems || l.length <= Number(k.maxItems)) && "type" in k.items && "string" === k.items.type && !("x-openai-input" in k.items)) {
                let a;
                return j[0] !== k.items ? (a = (0, d.jsx)(aH, {
                    schema: k.items
                }), j[0] = k.items, j[1] = a) : a = j[1], a
            }
            let m = "string" !== k.type || "x-openai-input" in k ? null : k,
                n = "number" === k.type || "integer" === k.type ? k : null,
                o = n?.minimum,
                p = n?.maximum;
            "array" === k.type ? (o = null == k.minItems || 0 === Number(k.minItems) ? void 0 : Number(k.minItems), p = null == k.maxItems ? void 0 : Number(k.maxItems)) : null != m && ("minLength" in m && (o = m.minLength || void 0), "maxLength" in m && (p = m.maxLength));
            let q = "none";
            null != o && null != p ? q = o === p ? "exact" : "both" : null != o ? q = "minimum" : null != p && (q = "maximum");
            let r = null != m && "format" in m ? m.format : void 0;
            return j[2] !== q || j[3] !== p || j[4] !== o || j[5] !== k.type ? (b = "array" === k.type && "none" !== q ? (0, d.jsx)(u.a, {
                id: "composer.mcpFormElicitation.selectionCount",
                defaultMessage: "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}\u2013{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                values: {
                    bounds: q,
                    minimum: o,
                    maximum: p
                }
            }) : null, j[2] = q, j[3] = p, j[4] = o, j[5] = k.type, j[6] = b) : b = j[6], j[7] !== q || j[8] !== p || j[9] !== o || j[10] !== m ? (c = null != m && "none" !== q ? (0, d.jsx)("div", {
                children: (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.textLength",
                    defaultMessage: "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}\u2013{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                    values: {
                        bounds: q,
                        minimum: o,
                        maximum: p
                    }
                })
            }) : null, j[7] = q, j[8] = p, j[9] = o, j[10] = m, j[11] = c) : c = j[11], j[12] !== q || j[13] !== p || j[14] !== o || j[15] !== n ? (f = null != n ? (0, d.jsx)(u.a, {
                id: "composer.mcpFormElicitation.numberRange",
                defaultMessage: "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                values: {
                    kind: n.type,
                    bounds: q,
                    minimum: o,
                    maximum: p
                }
            }) : null, j[12] = q, j[13] = p, j[14] = o, j[15] = n, j[16] = f) : f = j[16], j[17] !== r ? (g = null != r ? (0, d.jsx)("div", {
                children: (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.requiredFormat",
                    defaultMessage: "Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}",
                    values: {
                        format: "date-time" === r ? "datetime" : r
                    }
                })
            }) : null, j[17] = r, j[18] = g) : g = j[18], j[19] !== q || j[20] !== r || j[21] !== n ? (h = "none" === q && null == n && null == r ? (0, d.jsx)(u.a, {
                id: "composer.mcpFormElicitation.invalidField",
                defaultMessage: "Check this answer and try again"
            }) : null, j[19] = q, j[20] = r, j[21] = n, j[22] = h) : h = j[22], j[23] !== b || j[24] !== c || j[25] !== f || j[26] !== g || j[27] !== h ? (i = (0, d.jsxs)("div", {
                role: "alert",
                children: [b, c, f, g, h]
            }), j[23] = b, j[24] = c, j[25] = f, j[26] = g, j[27] = h, j[28] = i) : i = j[28], i
        }

        function aI(a) {
            let b, c = (0, e.c)(15),
                {
                    id: f,
                    autoFocus: h,
                    disabled: i,
                    invalid: j,
                    label: k,
                    placeholder: l,
                    variant: m,
                    format: n,
                    maxLength: o,
                    value: p,
                    onChange: q,
                    onKeyDown: r,
                    onFocus: s
                } = a,
                t = void 0 !== i && i,
                u = void 0 === m ? "default" : m,
                v = (o ?? 0) >= 160,
                w = "choice" === u ? "block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary" : "w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger";
            return c[0] !== h || c[1] !== t || c[2] !== w || c[3] !== n || c[4] !== f || c[5] !== j || c[6] !== v || c[7] !== k || c[8] !== q || c[9] !== s || c[10] !== r || c[11] !== l || c[12] !== p || c[13] !== u ? (b = null == n ? (0, d.jsx)("textarea", {
                id: f,
                ref: h ? aJ : void 0,
                autoFocus: h,
                disabled: t,
                "aria-invalid": j || void 0,
                "aria-label": k,
                placeholder: l,
                className: (0, g.b)(w, "[field-sizing:content] max-h-48 resize-none overflow-y-auto", "default" === u && "py-2", v ? "min-h-20" : "default" === u && "min-h-8"),
                rows: v ? 3 : 1,
                value: p,
                onChange: a => q(a.currentTarget.value),
                onKeyDown: r,
                onFocus: s
            }) : (0, d.jsx)("input", {
                id: f,
                autoFocus: h,
                disabled: t,
                "aria-invalid": j || void 0,
                "aria-label": k,
                placeholder: l,
                className: (0, g.b)(w, "default" === u && "h-8"),
                type: function(a) {
                    switch (a) {
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
                }(n),
                value: p,
                onChange: a => q(a.currentTarget.value),
                onKeyDown: r,
                onFocus: s
            }), c[0] = h, c[1] = t, c[2] = w, c[3] = n, c[4] = f, c[5] = j, c[6] = v, c[7] = k, c[8] = q, c[9] = s, c[10] = r, c[11] = l, c[12] = p, c[13] = u, c[14] = b) : b = c[14], b
        }

        function aJ(a) {
            null != a && a.setSelectionRange(a.value.length, a.value.length)
        }

        function aK(a) {
            let b, c, f, g, h, i, j, k, m, n, o, p, q, r = (0, e.c)(62),
                {
                    autoFocus: s,
                    showOptionNumbers: t,
                    disabled: u,
                    label: v,
                    format: w,
                    maxLength: x,
                    invalid: y,
                    multiple: z,
                    options: A,
                    value: B,
                    draft: C,
                    onDraftChange: D,
                    onChange: E
                } = a,
                F = void 0 === t || t,
                G = (0, l.a)(),
                H = z || "string" != typeof B || A.some(a => a.const === B) ? "" : B;
            r[0] !== C || r[1] !== H ? (b = C ?? {
                text: H,
                selected: "" !== H
            }, r[0] = C, r[1] = H, r[2] = b) : b = r[2];
            let I = b;
            r[3] !== G ? (c = G.formatMessage({
                id: "composer.mcpFormElicitation.customChoice",
                defaultMessage: "Something else"
            }), r[3] = G, r[4] = c) : c = r[4];
            let J = c;
            r[5] !== I || r[6] !== z || r[7] !== E || r[8] !== D ? (f = a => {
                a !== I.selected && (D({
                    ...I,
                    selected: a
                }), z || E(a ? I.text : ""))
            }, r[5] = I, r[6] = z, r[7] = E, r[8] = D, r[9] = f) : f = r[9];
            let K = f;
            r[10] !== I.selected || r[11] !== I.text || r[12] !== E || r[13] !== D || r[14] !== B ? (g = () => {
                I.selected && "" !== I.text && (E([...Array.isArray(B) ? B : [], I.text]), D({
                    text: "",
                    selected: !1
                }))
            }, r[10] = I.selected, r[11] = I.text, r[12] = E, r[13] = D, r[14] = B, r[15] = g) : g = r[15];
            let L = g;
            r[16] !== I || r[17] !== z || r[18] !== E || r[19] !== D ? (h = a => {
                z || D({
                    ...I,
                    selected: !1
                }), E(a)
            }, r[16] = I, r[17] = z, r[18] = E, r[19] = D, r[20] = h) : h = r[20];
            let M = I.selected;
            return r[21] !== G ? (i = G.formatMessage({
                id: "composer.mcpFormElicitation.customPlaceholder",
                defaultMessage: "Or write your own response"
            }), r[21] = G, r[22] = i) : i = r[22], r[23] !== K ? (j = () => K(!0), r[23] = K, r[24] = j) : j = r[24], r[25] !== z || r[26] !== E || r[27] !== D ? (k = a => {
                D({
                    text: a,
                    selected: !0
                }), z || E(a)
            }, r[25] = z, r[26] = E, r[27] = D, r[28] = k) : k = r[28], r[29] !== L || r[30] !== I.selected || r[31] !== I.text || r[32] !== z ? (m = a => {
                if (!z) {
                    "date" !== a.currentTarget.type && aj(a, () => a.currentTarget.form?.requestSubmit());
                    return
                }
                I.selected && "" !== I.text && aj(a, L) && a.stopPropagation()
            }, r[29] = L, r[30] = I.selected, r[31] = I.text, r[32] = z, r[33] = m) : m = r[33], r[34] !== I.text || r[35] !== u || r[36] !== w || r[37] !== y || r[38] !== v || r[39] !== x || r[40] !== k || r[41] !== m || r[42] !== i || r[43] !== j ? (n = (0, d.jsx)(aI, {
                autoFocus: !1,
                disabled: u,
                label: v,
                placeholder: i,
                variant: "choice",
                invalid: y,
                format: w,
                maxLength: x,
                value: I.text,
                onFocus: j,
                onChange: k,
                onKeyDown: m
            }), r[34] = I.text, r[35] = u, r[36] = w, r[37] = y, r[38] = v, r[39] = x, r[40] = k, r[41] = m, r[42] = i, r[43] = j, r[44] = n) : n = r[44], r[45] !== I.selected || r[46] !== J || r[47] !== K || r[48] !== n ? (o = {
                label: J,
                selected: M,
                onSelect: K,
                editor: n
            }, r[45] = I.selected, r[46] = J, r[47] = K, r[48] = n, r[49] = o) : o = r[49], r[50] !== s || r[51] !== y || r[52] !== z || r[53] !== A || r[54] !== F || r[55] !== o || r[56] !== h || r[57] !== B ? (p = (0, d.jsx)(aF, {
                autoFocus: s,
                submitOnEnter: !1,
                showOptionNumbers: F,
                invalid: y,
                multiple: z,
                options: A,
                value: B,
                onChange: h,
                customOption: o
            }), r[50] = s, r[51] = y, r[52] = z, r[53] = A, r[54] = F, r[55] = o, r[56] = h, r[57] = B, r[58] = p) : p = r[58], r[59] !== u || r[60] !== p ? (q = (0, d.jsx)("fieldset", {
                disabled: u,
                className: "min-w-0",
                children: p
            }), r[59] = u, r[60] = p, r[61] = q) : q = r[61], q
        }

        function aL(a) {
            let b, c, f, h = (0, e.c)(101),
                {
                    autoFocus: i,
                    showOptionNumbers: j,
                    disabled: m,
                    field: n,
                    hideLabel: o,
                    hideDescription: p,
                    invalid: q,
                    value: r,
                    customDraft: s,
                    onCustomDraftChange: t,
                    onChange: u
                } = a,
                v = void 0 === j || j,
                w = void 0 !== m && m,
                x = (0, k.useId)(),
                y = (0, l.a)();
            h[0] !== n.name || h[1] !== n.schema.title ? (b = n.schema.title ?? at()(n.name), h[0] = n.name, h[1] = n.schema.title, h[2] = b) : b = h[2];
            let z = b,
                A = !o && null != n.schema.title,
                B = void 0 !== p && p ? null : n.schema.description ?? null,
                C = "boolean" === n.schema.type && n.required && null == n.schema.default;
            h[3] !== n.schema || h[4] !== C ? (c = "array" === n.schema.type || (0, ab.e)(n.schema) || C, h[3] = n.schema, h[4] = C, h[5] = c) : c = h[5];
            let D = c,
                E = "array" === n.schema.type ? n.schema.items : n.schema,
                F = D && (0, ab.f)(n.schema) ? E : null;
            h[6] !== s || h[7] !== n.schema || h[8] !== q || h[9] !== D || h[10] !== r ? (f = q ? (0, d.jsx)("div", {
                className: (0, g.b)("pt-1 text-size-chat-sm text-danger", (D || "boolean" === n.schema.type) && "px-2"),
                children: (0, d.jsx)(aH, {
                    schema: n.schema,
                    value: ah(r, s)
                })
            }) : null, h[6] = s, h[7] = n.schema, h[8] = q, h[9] = D, h[10] = r, h[11] = f) : f = h[11];
            let G = f;
            if ("array" === n.schema.type || (0, ab.e)(n.schema) || C) {
                let a, b, c, e;
                return h[12] !== z || h[13] !== A ? (a = A && (0, d.jsx)("legend", {
                    className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                    children: z
                }), h[12] = z, h[13] = A, h[14] = a) : a = h[14], h[15] !== B ? (b = (0, d.jsx)(aP, {
                    description: B
                }), h[15] = B, h[16] = b) : b = h[16], h[17] !== i || h[18] !== s || h[19] !== w || h[20] !== n.schema || h[21] !== y || h[22] !== q || h[23] !== z || h[24] !== u || h[25] !== t || h[26] !== C || h[27] !== v || h[28] !== F || h[29] !== r ? (c = null != F ? (0, d.jsx)(aK, {
                    showOptionNumbers: v,
                    autoFocus: i,
                    disabled: w,
                    label: z,
                    format: "format" in F ? F.format : void 0,
                    maxLength: "maxLength" in F ? F.maxLength : void 0,
                    invalid: q,
                    multiple: "array" === n.schema.type,
                    options: (0, ab.d)(n.schema),
                    value: r,
                    draft: s,
                    onDraftChange: t,
                    onChange: u
                }) : (0, d.jsx)(aF, {
                    showOptionNumbers: v && !C,
                    autoFocus: i,
                    invalid: q,
                    multiple: "array" === n.schema.type,
                    options: C ? [{
                        const: "true",
                        title: y.formatMessage({
                            id: "composer.mcpFormElicitation.booleanYes",
                            defaultMessage: "Yes"
                        })
                    }, {
                        const: "false",
                        title: y.formatMessage({
                            id: "composer.mcpFormElicitation.booleanNo",
                            defaultMessage: "No"
                        })
                    }] : (0, ab.d)(n.schema),
                    value: C && "boolean" == typeof r ? String(r) : r,
                    onChange: C ? a => u("true" === a) : u
                }), h[17] = i, h[18] = s, h[19] = w, h[20] = n.schema, h[21] = y, h[22] = q, h[23] = z, h[24] = u, h[25] = t, h[26] = C, h[27] = v, h[28] = F, h[29] = r, h[30] = c) : c = h[30], h[31] !== G || h[32] !== z || h[33] !== a || h[34] !== b || h[35] !== c ? (e = (0, d.jsxs)("fieldset", {
                    "aria-label": z,
                    className: "flex flex-col gap-1",
                    children: [a, b, c, G]
                }), h[31] = G, h[32] = z, h[33] = a, h[34] = b, h[35] = c, h[36] = e) : e = h[36], e
            }
            switch (n.schema.type) {
                case "string": {
                    let a, b, c, e;
                    h[37] !== x || h[38] !== z || h[39] !== A ? (a = A && (0, d.jsx)("label", {
                        htmlFor: x,
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: z
                    }), h[37] = x, h[38] = z, h[39] = A, h[40] = a) : a = h[40], h[41] !== B ? (b = (0, d.jsx)(aP, {
                        description: B,
                        inset: !1
                    }), h[41] = B, h[42] = b) : b = h[42];
                    let f = "format" in n.schema ? n.schema.format : void 0,
                        g = "maxLength" in n.schema ? n.schema.maxLength : void 0,
                        j = "string" == typeof r ? r : "";
                    return h[43] !== i || h[44] !== w || h[45] !== x || h[46] !== q || h[47] !== z || h[48] !== u || h[49] !== g || h[50] !== j || h[51] !== f ? (c = (0, d.jsx)(aI, {
                        id: x,
                        disabled: w,
                        autoFocus: i,
                        invalid: q,
                        label: z,
                        format: f,
                        maxLength: g,
                        value: j,
                        onChange: u,
                        onKeyDown: aO
                    }), h[43] = i, h[44] = w, h[45] = x, h[46] = q, h[47] = z, h[48] = u, h[49] = g, h[50] = j, h[51] = f, h[52] = c) : c = h[52], h[53] !== G || h[54] !== c || h[55] !== a || h[56] !== b ? (e = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [a, b, c, G]
                    }), h[53] = G, h[54] = c, h[55] = a, h[56] = b, h[57] = e) : e = h[57], e
                }
                case "boolean": {
                    let a, b, c, e, f, g, j = !0 === r;
                    h[58] !== u || h[59] !== r ? (a = () => u(!0 !== r), h[58] = u, h[59] = r, h[60] = a) : a = h[60];
                    let k = !0 === r;
                    return h[61] !== k ? (b = (0, d.jsx)("span", {
                        className: "flex h-5 items-center",
                        children: (0, d.jsx)(au.c, {
                            selected: k,
                            variant: "checkbox"
                        })
                    }), h[61] = k, h[62] = b) : b = h[62], h[63] !== n.schema.title ? (c = null != n.schema.title && (0, d.jsx)("span", {
                        className: "min-w-0 text-sm font-medium wrap-anywhere",
                        children: n.schema.title
                    }), h[63] = n.schema.title, h[64] = c) : c = h[64], h[65] !== i || h[66] !== x || h[67] !== q || h[68] !== z || h[69] !== b || h[70] !== c || h[71] !== j || h[72] !== a ? (e = (0, d.jsxs)(au.b, {
                        accessibilityLabel: z,
                        autoFocus: i,
                        checked: j,
                        invalid: q,
                        name: x,
                        type: "checkbox",
                        onChange: a,
                        onKeyDown: aN,
                        children: [b, c]
                    }), h[65] = i, h[66] = x, h[67] = q, h[68] = z, h[69] = b, h[70] = c, h[71] = j, h[72] = a, h[73] = e) : e = h[73], h[74] !== B ? (f = (0, d.jsx)(aP, {
                        description: B
                    }), h[74] = B, h[75] = f) : f = h[75], h[76] !== G || h[77] !== e || h[78] !== f ? (g = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [e, f, G]
                    }), h[76] = G, h[77] = e, h[78] = f, h[79] = g) : g = h[79], g
                }
                case "integer":
                case "number": {
                    let a, b, c, e, f;
                    h[80] !== z || h[81] !== A ? (a = A && (0, d.jsx)("div", {
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: z
                    }), h[80] = z, h[81] = A, h[82] = a) : a = h[82], h[83] !== B ? (b = (0, d.jsx)(aP, {
                        description: B,
                        inset: !1
                    }), h[83] = B, h[84] = b) : b = h[84];
                    let g = q || void 0,
                        j = "integer" === n.schema.type && null != n.schema.minimum ? Math.ceil(n.schema.minimum) : n.schema.minimum,
                        k = "integer" === n.schema.type ? 1 : "any",
                        l = "number" == typeof r || "string" == typeof r ? r : "";
                    return h[85] !== u ? (c = a => u(a.currentTarget.value), h[85] = u, h[86] = c) : c = h[86], h[87] !== i || h[88] !== n.schema.maximum || h[89] !== z || h[90] !== j || h[91] !== k || h[92] !== l || h[93] !== c || h[94] !== g ? (e = (0, d.jsx)(av.a, {
                        autoFocus: i,
                        "aria-label": z,
                        "aria-invalid": g,
                        max: n.schema.maximum,
                        min: j,
                        step: k,
                        type: "number",
                        value: l,
                        onChange: c,
                        onKeyDown: aM
                    }), h[87] = i, h[88] = n.schema.maximum, h[89] = z, h[90] = j, h[91] = k, h[92] = l, h[93] = c, h[94] = g, h[95] = e) : e = h[95], h[96] !== G || h[97] !== e || h[98] !== a || h[99] !== b ? (f = (0, d.jsxs)("label", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [a, b, e, G]
                    }), h[96] = G, h[97] = e, h[98] = a, h[99] = b, h[100] = f) : f = h[100], f
                }
            }
        }

        function aM(a) {
            aj(a, () => a.currentTarget.form?.requestSubmit())
        }

        function aN(a) {
            aj(a, () => a.currentTarget.click())
        }

        function aO(a) {
            "date" !== a.currentTarget.type && aj(a, () => a.currentTarget.form?.requestSubmit())
        }

        function aP(a) {
            let b, c, f = (0, e.c)(5),
                {
                    description: h,
                    inset: i
                } = a;
            if (null == h) return null;
            let j = (void 0 === i || i) && "px-2";
            return f[0] !== j ? (b = (0, g.b)("text-size-chat-sm wrap-anywhere text-codex-description", j), f[0] = j, f[1] = b) : b = f[1], f[2] !== h || f[3] !== b ? (c = (0, d.jsx)("div", {
                className: b,
                children: h
            }), f[2] = h, f[3] = b, f[4] = c) : c = f[4], c
        }
        var aQ = c("i5ac"),
            aR = c.n(aQ),
            aS = c("Ug8F"),
            aT = c("dxKw"),
            aU = c("Bbed"),
            aV = c("GaA7"),
            aW = c("eGPX"),
            aX = c("YgCO"),
            aY = c("bnxy");

        function aZ(a) {
            let b, c, f, h, i, j, k, l, m, n, o, p, q, r, s = (0, e.c)(63),
                {
                    action: t,
                    previewAction: u,
                    metadata: v,
                    layout: w,
                    autoFocus: x,
                    children: y,
                    disabled: z,
                    invalid: A,
                    isPortrait: B,
                    selected: C,
                    highlighted: D,
                    separatorBefore: E,
                    title: F
                } = a,
                G = void 0 === w ? "carousel" : w,
                H = void 0 !== B && B,
                I = void 0 !== D && D,
                J = "button" === a.type || "preview" === a.type;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                button: "button",
                preview: "button",
                static: "div",
                checkbox: "label",
                radio: "label"
            }, s[0] = b) : b = s[0];
            let K = b[a.type],
                L = E && "ps-4";
            s[1] !== L ? (c = (0, g.b)("group/composer-attachment relative min-w-0 shrink-0 snap-start", L), s[1] = L, s[2] = c) : c = s[2], s[3] !== E ? (f = E && (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle"
            }), s[3] = E, s[4] = f) : f = s[4];
            let M = J && x,
                N = "carousel" === G ? "w-fit" : "w-full",
                O = "carousel" === G && "-m-1 p-1",
                P = z ? "cursor-default opacity-50" : "static" !== a.type && "cursor-interaction";
            s[5] !== P || s[6] !== N || s[7] !== O ? (h = (0, g.b)("group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none", N, O, P), s[5] = P, s[6] = N, s[7] = O, s[8] = h) : h = s[8];
            let Q = J ? z : void 0,
                R = J ? "button" : void 0,
                T = J ? a.onClick : void 0;
            return s[9] !== x || s[10] !== z || s[11] !== a.name || s[12] !== a.onChange || s[13] !== a.type || s[14] !== a.value || s[15] !== C ? (i = "checkbox" === a.type || "radio" === a.type ? (0, d.jsx)("input", {
                autoFocus: x,
                checked: C,
                className: "sr-only",
                disabled: z,
                name: a.name,
                type: a.type,
                value: a.value,
                onChange: a.onChange,
                onKeyDown: b => {
                    "checkbox" === a.type && aj(b, () => b.currentTarget.click())
                }
            }) : null, s[9] = x, s[10] = z, s[11] = a.name, s[12] = a.onChange, s[13] = a.type, s[14] = a.value, s[15] = C, s[16] = i) : i = s[16], s[17] !== z || s[18] !== I || s[19] !== A || s[20] !== H || s[21] !== G || s[22] !== a.type || s[23] !== C ? (j = (0, g.b)("relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring", "button" === a.type ? "bg-surface-secondary" : "bg-surface shadow-sm", "standalone" === G && "h-40 w-full", "grid" === G && "w-full", "carousel" === G && "h-34", "button" === a.type && "flex flex-col items-center justify-center gap-2 text-secondary", "standalone" !== G && {
                "aspect-square": "button" === a.type,
                "aspect-[4/5]": "button" !== a.type && H,
                "aspect-video": "button" !== a.type && !H
            }, {
                "border-strong": C,
                "border-text-danger": !C && A,
                "border-default": !C && !A
            }, {
                "ring-ring": I,
                "ring-border-strong": !I && C,
                "ring-text-danger/20": !I && !C && A,
                "ring-transparent": !I && !C && !A
            }, "static" !== a.type && "preview" !== a.type && !z && !C && !I && "group-hover:ring-border-subtle"), s[17] = z, s[18] = I, s[19] = A, s[20] = H, s[21] = G, s[22] = a.type, s[23] = C, s[24] = j) : j = s[24], s[25] !== G || s[26] !== a.type || s[27] !== F ? (k = "button" === a.type && "standalone" === G ? (0, d.jsx)("span", {
                className: "text-sm",
                children: F
            }) : null, s[25] = G, s[26] = a.type, s[27] = F, s[28] = k) : k = s[28], s[29] !== v ? (l = null == v ? null : (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                children: v
            }), s[29] = v, s[30] = l) : l = s[30], s[31] !== t || s[32] !== C ? (m = C ? (0, d.jsx)("span", {
                className: (0, g.b)("absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm", null != t && "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0"),
                children: (0, d.jsx)(S.ac, {})
            }) : null, s[31] = t, s[32] = C, s[33] = m) : m = s[33], s[34] !== y || s[35] !== j || s[36] !== k || s[37] !== l || s[38] !== m ? (n = (0, d.jsxs)("div", {
                className: j,
                children: [y, k, l, m]
            }), s[34] = y, s[35] = j, s[36] = k, s[37] = l, s[38] = m, s[39] = n) : n = s[39], s[40] !== G || s[41] !== a.type || s[42] !== F ? (o = "button" === a.type && "standalone" === G ? null : (0, d.jsx)("div", {
                className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                children: F
            }), s[40] = G, s[41] = a.type, s[42] = F, s[43] = o) : o = s[43], s[44] !== K || s[45] !== h || s[46] !== Q || s[47] !== R || s[48] !== T || s[49] !== i || s[50] !== n || s[51] !== o || s[52] !== M ? (p = (0, d.jsxs)(K, {
                autoFocus: M,
                className: h,
                disabled: Q,
                type: R,
                onClick: T,
                children: [i, n, o]
            }), s[44] = K, s[45] = h, s[46] = Q, s[47] = R, s[48] = T, s[49] = i, s[50] = n, s[51] = o, s[52] = M, s[53] = p) : p = s[53], s[54] !== u || s[55] !== E ? (q = null == u ? null : (0, d.jsx)("div", {
                className: (0, g.b)("pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100", E ? "start-6" : "start-2"),
                children: u
            }), s[54] = u, s[55] = E, s[56] = q) : q = s[56], s[57] !== t || s[58] !== p || s[59] !== q || s[60] !== c || s[61] !== f ? (r = (0, d.jsxs)("div", {
                className: c,
                children: [f, p, q, t]
            }), s[57] = t, s[58] = p, s[59] = q, s[60] = c, s[61] = f, s[62] = r) : r = s[62], r
        }
        var a$ = c("JEWd"),
            a_ = c("kSHG"),
            a0 = c("Y8CA"),
            a1 = c("w7Qu"),
            a2 = c("YvRg"),
            a3 = c("t3y3"),
            a4 = c("zUz7"),
            a5 = c("a6Zv");
        let a6 = D.F({
            target: a0.a
        });

        function a7(a) {
            let b, c, f, g, h, i, j, k, m, n, o, p, q, r, s = (0, e.c)(60),
                {
                    option: t,
                    hostId: w,
                    layout: x,
                    name: y,
                    multiple: z,
                    implicit: A,
                    disabled: B,
                    invalid: C,
                    separatorBefore: D,
                    onChange: E,
                    onRemove: F,
                    onPreview: G
                } = a,
                H = (0, l.a)(),
                I = (0, a5.a)();
            s[0] !== t ? (b = (0, a4.a)(t), s[0] = t, s[1] = b) : b = s[1];
            let J = b,
                K = t.title ?? t.name;
            s[2] !== t._meta ? (c = a_.v.safeParse(t._meta?.["openai/thumbnail"] ?? t._meta?.["openai/preview"]), s[2] = t._meta, s[3] = c) : c = s[3];
            let {
                data: L
            } = c;
            s[4] !== t._meta ? (f = a6.safeParse(t._meta?.["openai/preview"]), s[4] = t._meta, s[5] = f) : f = s[5];
            let {
                data: M
            } = f;
            s[6] !== t._meta || s[7] !== M?.target ? (g = M?.target ?? a0.a.safeParse(t._meta?.["openai/preview"]).data ?? a0.a.safeParse(t._meta?.["openai/target"]).data, s[6] = t._meta, s[7] = M?.target, s[8] = g) : g = s[8];
            let N = g;
            s[9] !== G || s[10] !== N || s[11] !== K ? (h = null == N || null == G ? void 0 : () => G(N, K), s[9] = G, s[10] = N, s[11] = K, s[12] = h) : h = s[12];
            let O = h;
            s[13] !== O ? (i = null == O ? {
                type: "static"
            } : {
                type: "preview",
                onClick: O
            }, s[13] = O, s[14] = i) : i = s[14];
            let P = i;
            s[15] !== B || s[16] !== A || s[17] !== O ? (j = A || null == O ? null : (0, d.jsx)(v.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: B,
                onClick: O,
                children: (0, d.jsx)(u.a, {
                    id: "composer.mcpFormElicitation.preview",
                    defaultMessage: "Preview"
                })
            }), s[15] = B, s[16] = A, s[17] = O, s[18] = j) : j = s[18];
            let Q = I ? J?.logoDarkUrl : J?.logoUrl;
            s[19] !== t.mimeType || s[20] !== Q ? (k = (0, d.jsx)(aE, {
                layout: "icon",
                mimeType: t.mimeType,
                src: Q
            }), s[19] = t.mimeType, s[20] = Q, s[21] = k) : k = s[21];
            let R = t.mimeType ?? K;
            s[22] !== R ? (m = (0, d.jsx)("span", {
                className: "truncate",
                children: R
            }), s[22] = R, s[23] = m) : m = s[23], s[24] !== m || s[25] !== k ? (n = (0, d.jsxs)(d.Fragment, {
                children: [k, m]
            }), s[24] = m, s[25] = k, s[26] = n) : n = s[26], s[27] !== B || s[28] !== H || s[29] !== F || s[30] !== K ? (o = B || null == F ? void 0 : (0, d.jsx)(a2.a, {
                className: "top-2 right-2",
                size: "composer",
                ariaLabel: H.formatMessage({
                    id: "composer.openAIForm.removeFile",
                    defaultMessage: "Remove {filename}"
                }, {
                    filename: K
                }),
                onRemove: F
            }), s[27] = B, s[28] = H, s[29] = F, s[30] = K, s[31] = o) : o = s[31];
            let S = !A && t.selected;
            return s[32] !== A || s[33] !== z || s[34] !== y || s[35] !== E || s[36] !== t.uri || s[37] !== P ? (p = A ? P : {
                type: z ? "checkbox" : "radio",
                name: y,
                value: t.uri,
                onChange: E
            }, s[32] = A, s[33] = z, s[34] = y, s[35] = E, s[36] = t.uri, s[37] = P, s[38] = p) : p = s[38], s[39] !== w || s[40] !== J?.logoDarkUrl || s[41] !== J?.logoUrl || s[42] !== I || s[43] !== t.localPath || s[44] !== t.mimeType || s[45] !== t.name || s[46] !== L?.src ? (q = null == t.localPath ? (0, d.jsx)(aE, {
                layout: L?.src == null ? "card-icon" : "card",
                mimeType: t.mimeType,
                src: L?.src ?? (I ? J?.logoDarkUrl : J?.logoUrl)
            }) : (0, d.jsx)(a3.a, {
                hostId: w,
                imageFit: "scale-down",
                path: t.localPath,
                importKind: (0, a1.a)(t.name),
                fallback: (0, d.jsx)(aE, {
                    layout: "card",
                    mimeType: t.mimeType,
                    src: void 0
                })
            }), s[39] = w, s[40] = J?.logoDarkUrl, s[41] = J?.logoUrl, s[42] = I, s[43] = t.localPath, s[44] = t.mimeType, s[45] = t.name, s[46] = L?.src, s[47] = q) : q = s[47], s[48] !== B || s[49] !== C || s[50] !== x || s[51] !== D || s[52] !== n || s[53] !== o || s[54] !== S || s[55] !== p || s[56] !== q || s[57] !== j || s[58] !== K ? (r = (0, d.jsx)(aZ, {
                layout: x,
                previewAction: j,
                metadata: n,
                action: o,
                autoFocus: !1,
                disabled: B,
                invalid: C,
                selected: S,
                separatorBefore: D,
                title: K,
                ...p,
                children: q
            }), s[48] = B, s[49] = C, s[50] = x, s[51] = D, s[52] = n, s[53] = o, s[54] = S, s[55] = p, s[56] = q, s[57] = j, s[58] = K, s[59] = r) : r = s[59], r
        }
        let a8 = (0, aU.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(525677)]).then(c.bind(c, "OMbd"))).FileOptionsDialog);

        function a9(a) {
            let b, c, f, g, j, m, n, o, p, r, s, w, x, y, z, A, B, C = (0, e.c)(57),
                {
                    field: D,
                    disabled: E,
                    expanded: F,
                    hideDescription: G,
                    showTitle: H,
                    hostId: I,
                    invalid: J,
                    name: K,
                    options: L,
                    required: M,
                    onChange: N,
                    onPickingChange: O,
                    onPickFiles: P,
                    onCloseExpanded: Q,
                    onPreview: R,
                    onViewAll: T
                } = a,
                U = void 0 !== E && E,
                V = void 0 !== G && G,
                W = void 0 !== H && H,
                X = (0, h.y)($.a),
                Y = (0, l.a)(),
                Z = (0, aT.a)(),
                _ = (0, h.z)(aW.c),
                aa = (0, k.useRef)(null),
                ab = (0, k.useRef)(null);
            C[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => () => ab.current?.abort(), c = [], C[0] = b, C[1] = c) : (b = C[0], c = C[1]), (0, k.useEffect)(b, c);
            let [ac, ad] = (0, k.useState)(!1), [ae, af] = (0, k.useState)(!1), [ag, ah] = (0, k.useState)(!1), [ai, aj] = (0, k.useState)(null), ak = D["x-openai-input"], al = ak.userOptions?.kind ?? "file", am = (0, aX.a)("file" === al ? ak.userOptions?.accept : void 0);
            C[2] !== D.title || C[3] !== K ? (f = D.title ?? at()(K), C[2] = D.title, C[3] = K, C[4] = f) : f = C[4];
            let an = f,
                ao = "array" === D.type,
                ap = ao && "implicit" === ak.selection,
                aq = null == P && !U && !ae && null != ak.userOptions && "local" === I && window.electronBridge?.getPathForFile != null;
            C[5] !== D.minItems || C[6] !== D.type || C[7] !== M ? (g = 0, M && (g = "array" === D.type ? D.minItems ?? 0 : 1), C[5] = D.minItems, C[6] = D.type, C[7] = M, C[8] = g) : g = C[8], C[9] !== ak.options ? (j = new Set(ak.options.map(bd)), C[9] = ak.options, C[10] = j) : j = C[10];
            let ar = j;
            C[11] !== ar ? (m = a => !ar.has(a.uri), C[11] = ar, C[12] = m) : m = C[12];
            let as = L.filter(m);
            C[13] !== ar ? (n = a => ar.has(a.uri), C[13] = ar, C[14] = n) : n = C[14];
            let au = [...as, ...L.filter(n)],
                av = a => {
                    Array.from(aa.current?.querySelectorAll("input") ?? []).find(b => b.value === a)?.parentElement?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest",
                        behavior: _ ? "instant" : "smooth"
                    })
                },
                aw = () => {
                    document.activeElement === document.body && aa.current?.closest("form")?.focus()
                };
            C[15] !== ao || C[16] !== N || C[17] !== L ? (o = (a, b) => {
                if (b.aborted || 0 === a.length) return;
                let c = new Set(a.map(bc));
                N(aR()([...L, ...a.map(bb)], "uri").map(b => ({
                    ...b,
                    selected: ao ? b.selected || c.has(b.uri) : b.uri === a[0].uri
                })))
            }, C[15] = ao, C[16] = N, C[17] = L, C[18] = o) : o = C[18];
            let ax = o,
                ay = a => {
                    let b = !1,
                        c = () => {
                            !b && (b = !0, a.signal.removeEventListener("abort", c), O?.(!1), a.signal.aborted || (af(!1), aw()))
                        };
                    return a.signal.addEventListener("abort", c, {
                        once: !0
                    }), af(!0), aj(null), O?.(!0), c
                },
                az = async (a, b) => {
                    if (U || ae || null == ak.userOptions || 0 === a.length) return;
                    let c = ay(b),
                        d = Error("File type is not accepted");
                    await Promise.all(a.map(async a => {
                        let {
                            appServerPath: b,
                            fsPath: c,
                            label: e
                        } = a, f = await aV.a.workspaceFiles.getMetadata?.({
                            hostId: I,
                            path: c
                        });
                        if (f?.kind !== al) throw Error("Selection does not match the requested kind");
                        if ("file" === f.kind && !(0, aX.b)(c, am)) throw d;
                        return {
                            uri: (0, aY.f)(b ?? c),
                            localPath: c,
                            name: (0, aY.j)(c),
                            title: e,
                            selected: !0
                        }
                    })).then(a => ax(a, b.signal)).catch(a => {
                        b.signal.aborted || aj(a === d ? "type" : "selection")
                    }).finally(c)
                };
            C[19] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, d.jsx)(u.a, {
                id: "composer.openAIForm.uploadTile",
                defaultMessage: "Upload"
            }), C[19] = p) : p = C[19];
            let aA = p;
            if ("directory" === al) {
                let a;
                C[20] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(u.a, {
                    id: "composer.openAIForm.addFolder",
                    defaultMessage: "Choose folder"
                }), C[20] = a) : a = C[20], aA = a
            } else if (0 === L.length) {
                let a;
                C[21] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(u.a, {
                    id: "composer.openAIForm.addFiles",
                    defaultMessage: "Upload files"
                }), C[21] = a) : a = C[21], aA = a
            }
            let aB = null == ak.userOptions ? null : (0, d.jsx)(aZ, {
                    autoFocus: !1,
                    highlighted: ac,
                    layout: 0 === L.length ? "standalone" : "carousel",
                    disabled: U || ae,
                    invalid: !1,
                    selected: !1,
                    title: aA,
                    type: "button",
                    onClick: () => {
                        ab.current?.abort();
                        let a = new AbortController;
                        if (ab.current = a, null != P) {
                            let b = ay(a);
                            P(a.signal).then(b => ax(b, a.signal)).catch(() => {
                                a.signal.aborted || aj("selection")
                            }).finally(b);
                            return
                        }
                        null != (0, i.Fg)(I) || (0, i.Hi)((0, t.a)(X, I)) ? ah(!0) : Z({
                            accept: "file" === al ? ak.userOptions?.accept : void 0,
                            kind: al,
                            allowMultiple: ao
                        }).then(b => {
                            if (!a.signal.aborted) return az(b, a)
                        }).catch(() => {
                            a.signal.aborted || aj("selection")
                        }).finally(() => {
                            a.signal.aborted || aw()
                        })
                    },
                    children: "directory" === al ? (0, d.jsx)(S.Ld, {
                        className: "text-tertiary"
                    }) : (0, d.jsx)(S.O, {
                        className: "text-tertiary"
                    })
                }),
                aC = (a, b, c) => (0, d.jsx)(a7, {
                    option: a,
                    hostId: I,
                    layout: c,
                    name: "grid" === c ? `${K}-expanded` : K,
                    multiple: ao,
                    implicit: ap,
                    disabled: U || ae,
                    invalid: J || null != ai,
                    separatorBefore: "carousel" === c && 0 === b && null != aB,
                    onChange: () => {
                        N(L.map(b => ({
                            ...b,
                            selected: b.uri === a.uri ? !ao || !b.selected : ao && b.selected
                        }))), "carousel" === c && av(a.uri)
                    },
                    onRemove: !ap || null == ak.userOptions && L.length <= 1 || ar.has(a.uri) && L.length <= g ? void 0 : () => N(L.filter(b => b.uri !== a.uri)),
                    onPreview: null == R ? void 0 : (a, b) => {
                        Q?.(), R(a, b)
                    }
                }, a.uri);
            C[22] !== aq ? (r = a => {
                (0, q.b)(a.dataTransfer) && (a.preventDefault(), a.stopPropagation(), "dragenter" === a.type ? ad(aq) : a.dataTransfer.dropEffect = aq ? "copy" : "none")
            }, C[22] = aq, C[23] = r) : r = C[23];
            let aD = r;
            C[24] !== D.description || C[25] !== D.title || C[26] !== V || C[27] !== W ? (s = W && D.title || !V && D.description ? (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                children: [W && D.title && (0, d.jsx)("div", {
                    className: "text-size-chat-sm font-medium text-default",
                    children: D.title
                }), !V && D.description && (0, d.jsx)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: D.description
                })]
            }) : null, C[24] = D.description, C[25] = D.title, C[26] = V, C[27] = W, C[28] = s) : s = C[28];
            let aE = s;
            C[29] !== aE || C[30] !== T ? (w = null != aE || null != T ? (0, d.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [aE, null != T && (0, d.jsxs)(v.a, {
                    className: "ms-auto shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    onClick: T,
                    children: [(0, d.jsx)(S.mi, {}), (0, d.jsx)(u.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all"
                    })]
                })]
            }) : null, C[29] = aE, C[30] = T, C[31] = w) : w = C[31];
            let aF = w;
            C[32] === Symbol.for("react.memo_cache_sentinel") ? (x = a => {
                a.stopPropagation(), a.relatedTarget instanceof Node && a.currentTarget.contains(a.relatedTarget) || ad(!1)
            }, C[32] = x) : x = C[32];
            let aG = a => {
                    if (!(0, q.b)(a.dataTransfer) || (a.preventDefault(), a.stopPropagation(), ad(!1), !aq)) return;
                    let b = (0, q.f)(Array.from(a.dataTransfer.files), window.electronBridge?.getPathForFile, a.dataTransfer);
                    if (0 === b.length || !ao && b.length > 1) return void aj("selection");
                    ab.current?.abort();
                    let c = new AbortController;
                    ab.current = c, az(b, c)
                },
                aI = 0 === L.length && null != aB ? (0, d.jsxs)("div", {
                    className: "flex flex-col gap-2 px-4",
                    role: "group",
                    "aria-label": an,
                    children: [aF, aB]
                }) : (0, d.jsxs)(a$.a, {
                    ariaInvalid: J || null != ai,
                    ariaLabel: an,
                    backLabel: Y.formatMessage({
                        id: "composer.openAIForm.previousFiles",
                        defaultMessage: "Show previous files"
                    }),
                    forwardLabel: Y.formatMessage({
                        id: "composer.openAIForm.moreFiles",
                        defaultMessage: "Show more files"
                    }),
                    header: aF,
                    role: ao ? "group" : "radiogroup",
                    shouldUseReducedMotion: _,
                    children: [aB, au.map((a, b) => aC(a, b, "carousel"))]
                }),
                aJ = void 0 !== F && F && null != Q ? (0, d.jsx)(a8, {
                    title: D.title,
                    accessibilityLabel: an,
                    multiple: ao,
                    options: au,
                    renderOption: (a, b) => aC(a, b, "grid"),
                    onClose: Q,
                    onOptionActivate: av,
                    onRestoreFocus: () => {
                        let a = aa.current?.querySelector("input:not(:disabled), button:not(:disabled)") ?? aa.current?.closest("form")?.querySelector('button[type="submit"]');
                        a?.focus()
                    }
                }) : null;
            return C[33] !== am || C[34] !== az || C[35] !== I || C[36] !== al || C[37] !== ao || C[38] !== ag || C[39] !== aw || C[40] !== ah ? (y = ag ? (0, d.jsx)(aS.a, {
                acceptedFileExtensions: am,
                hostId: I,
                kind: al,
                multiple: ao,
                onClose: () => ah(!1),
                onRestoreFocus: aw,
                onSelect: a => {
                    let b = ab.current;
                    null == b || b.signal.aborted || az(a.map(ba), b)
                }
            }) : null, C[33] = am, C[34] = az, C[35] = I, C[36] = al, C[37] = ao, C[38] = ag, C[39] = aw, C[40] = ah, C[41] = y) : y = C[41], C[42] !== ai ? (z = ai ? (0, d.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                role: "alert",
                children: "selection" === ai ? (0, d.jsx)(u.a, {
                    id: "composer.openAIForm.fileSelectionFailed",
                    defaultMessage: "These files or folders could not be added"
                }) : (0, d.jsx)(u.a, {
                    id: "composer.openAIForm.fileTypeRejected",
                    defaultMessage: "Choose a file of an allowed type"
                })
            }) : null, C[42] = ai, C[43] = z) : z = C[43], C[44] !== D || C[45] !== J ? (A = J ? (0, d.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, d.jsx)(aH, {
                    schema: D
                })
            }) : null, C[44] = D, C[45] = J, C[46] = A) : A = C[46], C[47] !== aa || C[48] !== aD || C[49] !== x || C[50] !== aG || C[51] !== aI || C[52] !== aJ || C[53] !== y || C[54] !== z || C[55] !== A ? (B = (0, d.jsxs)("div", {
                ref: aa,
                className: "flex w-full min-w-0 flex-col gap-2",
                "data-mcp-form-file-drop": !0,
                onDragEnter: aD,
                onDragOver: aD,
                onDragLeave: x,
                onDrop: aG,
                children: [aI, aJ, y, z, A]
            }), C[47] = aa, C[48] = aD, C[49] = x, C[50] = aG, C[51] = aI, C[52] = aJ, C[53] = y, C[54] = z, C[55] = A, C[56] = B) : B = C[56], B
        }

        function ba(a) {
            return {
                path: a,
                fsPath: a,
                label: (0, aY.j)(a)
            }
        }

        function bb(a) {
            return {
                ...a,
                selected: !0
            }
        }

        function bc(a) {
            return a.uri
        }

        function bd(a) {
            return a.uri
        }
        var be = c("fXZ5"),
            bf = c("sBoT");

        function bg(a) {
            let b, c, f, i, j, m, n, o, p, q, r = (0, e.c)(56),
                {
                    autoFocus: s,
                    field: t,
                    hideLabel: v,
                    hostId: w,
                    invalid: x,
                    name: y,
                    value: z,
                    onChange: A,
                    onPickFile: B
                } = a,
                C = void 0 !== v && v,
                D = (0, l.a)(),
                E = (0, aT.a)(),
                F = (0, h.z)(aW.c),
                [G, H] = (0, k.useState)(!1),
                [I, J] = (0, k.useState)(!1),
                K = I ? "aspect-[4/5]" : "aspect-video";
            r[0] !== t.title || r[1] !== y ? (b = t.title ?? at()(y), r[0] = t.title, r[1] = y, r[2] = b) : b = r[2];
            let L = b,
                M = null != t.file && (0, ae.c)(t, z) && !t.items.some(a => a.id === z) ? z : null;
            if (r[3] !== D ? (c = D.formatMessage({
                    id: "composer.imagePicker.previous",
                    defaultMessage: "Show previous templates"
                }), r[3] = D, r[4] = c) : c = r[4], r[5] !== D ? (f = D.formatMessage({
                    id: "composer.imagePicker.next",
                    defaultMessage: "Show more templates"
                }), r[5] = D, r[6] = f) : f = r[6], r[7] !== t.description || r[8] !== t.title || r[9] !== C ? (i = C ? null : (0, d.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere",
                    children: [t.title && (0, d.jsx)("div", {
                        className: "text-sm font-medium",
                        children: t.title
                    }), t.description && (0, d.jsx)("div", {
                        className: "text-xs text-tertiary",
                        children: t.description
                    })]
                }), r[7] = t.description, r[8] = t.title, r[9] = C, r[10] = i) : i = r[10], r[11] !== t.file || r[12] !== t.title || r[13] !== w || r[14] !== x || r[15] !== A || r[16] !== B || r[17] !== E || r[18] !== K || r[19] !== M ? (j = null == t.file ? null : null != B ? (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsxs)("button", {
                        className: "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                        type: "button",
                        onClick: () => {
                            null != B ? B().then(a => {
                                null != a && A(a)
                            }) : "local" !== w ? H(!0) : E({
                                accept: t.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: t.file?.title ?? t.title
                            }).then(a => {
                                let [b] = a;
                                null != b && A((0, aY.f)(b.fsPath))
                            })
                        },
                        children: [(0, d.jsx)("div", {
                            className: (0, g.b)("flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong", K, null == M ? "border-default ring-transparent group-hover:ring-border-subtle" : "border-strong ring-border-strong", x && null == M && "border-text-danger ring-text-danger/20"),
                            children: null == M ? (0, d.jsx)(ao.a, {
                                className: "text-secondary",
                                asset: bf.a,
                                "aria-hidden": !0
                            }) : (0, d.jsxs)("div", {
                                className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                children: [(0, d.jsx)(ao.a, {
                                    asset: be.a,
                                    "aria-hidden": !0
                                }), (0, d.jsx)("span", {
                                    className: "max-w-full truncate text-sm",
                                    children: (0, aY.j)(decodeURIComponent(new URL(M).pathname))
                                })]
                            })
                        }), (0, d.jsx)("div", {
                            className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                            children: t.file.title ?? (0, d.jsx)(u.a, {
                                id: "composer.imagePicker.chooseFile",
                                defaultMessage: "Choose a file"
                            })
                        })]
                    })
                }) : null, r[11] = t.file, r[12] = t.title, r[13] = w, r[14] = x, r[15] = A, r[16] = B, r[17] = E, r[18] = K, r[19] = M, r[20] = j) : j = r[20], r[21] !== s || r[22] !== t.items || r[23] !== x || r[24] !== I || r[25] !== y || r[26] !== A || r[27] !== z) {
                let a;
                r[29] !== s || r[30] !== x || r[31] !== I || r[32] !== y || r[33] !== A || r[34] !== z ? (a = (a, b) => (0, d.jsx)(aZ, {
                    autoFocus: s && 0 === b,
                    invalid: x,
                    isPortrait: I,
                    name: y,
                    selected: z === a.id,
                    title: a.title,
                    type: "radio",
                    value: a.id,
                    onChange: () => A(a.id),
                    children: (0, d.jsx)("img", {
                        alt: "",
                        className: "block h-full w-full object-scale-down",
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        onLoad: 0 === b ? a => {
                            J(a.currentTarget.naturalHeight > a.currentTarget.naturalWidth)
                        } : void 0,
                        src: a.image
                    })
                }, a.id), r[29] = s, r[30] = x, r[31] = I, r[32] = y, r[33] = A, r[34] = z, r[35] = a) : a = r[35], m = t.items.map(a), r[21] = s, r[22] = t.items, r[23] = x, r[24] = I, r[25] = y, r[26] = A, r[27] = z, r[28] = m
            } else m = r[28];
            return r[36] !== x || r[37] !== F || r[38] !== c || r[39] !== f || r[40] !== i || r[41] !== j || r[42] !== m || r[43] !== L ? (n = (0, d.jsxs)(a$.a, {
                ariaInvalid: x,
                ariaLabel: L,
                backLabel: c,
                forwardLabel: f,
                header: i,
                role: "radiogroup",
                shouldUseReducedMotion: F,
                children: [j, m]
            }), r[36] = x, r[37] = F, r[38] = c, r[39] = f, r[40] = i, r[41] = j, r[42] = m, r[43] = L, r[44] = n) : n = r[44], r[45] !== w || r[46] !== G || r[47] !== A ? (o = G ? (0, d.jsx)(aS.a, {
                hostId: w,
                multiple: !1,
                onClose: () => H(!1),
                onSelect: a => {
                    let b = a[0];
                    null != b && A((0, aY.f)(b))
                }
            }) : null, r[45] = w, r[46] = G, r[47] = A, r[48] = o) : o = r[48], r[49] !== t || r[50] !== x ? (p = x ? (0, d.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, d.jsx)(aH, {
                    schema: t
                })
            }) : null, r[49] = t, r[50] = x, r[51] = p) : p = r[51], r[52] !== p || r[53] !== n || r[54] !== o ? (q = (0, d.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2",
                children: [n, o, p]
            }), r[52] = p, r[53] = n, r[54] = o, r[55] = q) : q = r[55], q
        }

        function bh(a) {
            let b, c, f, h, i = (0, e.c)(72),
                {
                    autoFocus: j,
                    isOnlyField: k,
                    disabled: l,
                    interactionDisabled: m,
                    field: n,
                    draft: o,
                    expanded: p,
                    hostId: q,
                    invalid: r,
                    metadataInHeader: s,
                    onCloseExpanded: t,
                    onDraftChange: u,
                    onValueChange: v,
                    onPickLegacyFile: w,
                    onPickingChange: x,
                    onPickFiles: y,
                    onPreview: z,
                    onViewAll: A
                } = a;
            i[0] !== n.schema ? (b = (0, ad.c)(n.schema) || (0, ae.b)(n.schema), i[0] = n.schema, i[1] = b) : b = i[1];
            let B = b,
                {
                    name: C,
                    schema: D,
                    required: E
                } = n;
            if ((0, ad.c)(D)) {
                let a, b, e, f = !s,
                    g = o.fileOptions[C];
                i[2] !== C || i[3] !== u ? (a = a => u(b => ({
                    ...b,
                    fileOptions: {
                        ...b.fileOptions,
                        [C]: a
                    }
                }), C), i[2] = C, i[3] = u, i[4] = a) : a = i[4], i[5] !== C || i[6] !== y ? (b = null == y ? void 0 : a => y(C, a), i[5] = C, i[6] = y, i[7] = b) : b = i[7], i[8] !== l || i[9] !== p || i[10] !== C || i[11] !== q || i[12] !== r || i[13] !== s || i[14] !== t || i[15] !== x || i[16] !== z || i[17] !== A || i[18] !== E || i[19] !== D || i[20] !== f || i[21] !== g || i[22] !== a || i[23] !== b ? (e = (0, d.jsx)(a9, {
                    field: D,
                    disabled: l,
                    expanded: p,
                    hideDescription: s,
                    showTitle: f,
                    onCloseExpanded: t,
                    onViewAll: A,
                    hostId: q,
                    invalid: r,
                    name: C,
                    options: g,
                    required: E,
                    onPreview: z,
                    onChange: a,
                    onPickingChange: x,
                    onPickFiles: b
                }), i[8] = l, i[9] = p, i[10] = C, i[11] = q, i[12] = r, i[13] = s, i[14] = t, i[15] = x, i[16] = z, i[17] = A, i[18] = E, i[19] = D, i[20] = f, i[21] = g, i[22] = a, i[23] = b, i[24] = e) : e = i[24], c = e
            } else if ((0, ae.b)(D)) {
                let a, b, e, f = o.values[C];
                i[25] !== C || i[26] !== v ? (a = a => v(C, a), i[25] = C, i[26] = v, i[27] = a) : a = i[27], i[28] !== C || i[29] !== w ? (b = null == w ? void 0 : () => w(C), i[28] = C, i[29] = w, i[30] = b) : b = i[30], i[31] !== j || i[32] !== C || i[33] !== q || i[34] !== r || i[35] !== s || i[36] !== D || i[37] !== f || i[38] !== a || i[39] !== b ? (e = (0, d.jsx)(bg, {
                    autoFocus: j,
                    field: D,
                    hideLabel: s,
                    hostId: q,
                    invalid: r,
                    name: C,
                    value: f,
                    onChange: a,
                    onPickFile: b
                }), i[31] = j, i[32] = C, i[33] = q, i[34] = r, i[35] = s, i[36] = D, i[37] = f, i[38] = a, i[39] = b, i[40] = e) : e = i[40], c = e
            } else {
                let a, b, e, f;
                i[41] !== C || i[42] !== E || i[43] !== D ? (a = {
                    name: C,
                    required: E,
                    schema: D
                }, i[41] = C, i[42] = E, i[43] = D, i[44] = a) : a = i[44];
                let g = o.customDrafts[C];
                i[45] !== C || i[46] !== u ? (b = a => u(b => ({
                    ...b,
                    customDrafts: {
                        ...b.customDrafts,
                        [C]: a
                    }
                }), C), i[45] = C, i[46] = u, i[47] = b) : b = i[47];
                let h = s && "boolean" !== D.type,
                    l = o.values[C];
                i[48] !== C || i[49] !== v ? (e = a => v(C, a), i[48] = C, i[49] = v, i[50] = e) : e = i[50], i[51] !== j || i[52] !== m || i[53] !== r || i[54] !== k || i[55] !== s || i[56] !== a || i[57] !== g || i[58] !== b || i[59] !== h || i[60] !== l || i[61] !== e ? (f = (0, d.jsx)(aL, {
                    disabled: m,
                    autoFocus: j,
                    showOptionNumbers: k,
                    field: a,
                    customDraft: g,
                    onCustomDraftChange: b,
                    hideLabel: h,
                    hideDescription: s,
                    invalid: r,
                    value: l,
                    onChange: e
                }), i[51] = j, i[52] = m, i[53] = r, i[54] = k, i[55] = s, i[56] = a, i[57] = g, i[58] = b, i[59] = h, i[60] = l, i[61] = e, i[62] = f) : f = i[62], c = f
            }
            let F = j && B ? bi : void 0,
                G = n.name,
                H = !B && "px-2",
                I = s && B && "pt-1";
            return i[63] !== H || i[64] !== I ? (f = (0, g.b)("flex min-w-0 flex-col gap-2 outline-none", H, I), i[63] = H, i[64] = I, i[65] = f) : f = i[65], i[66] !== n.name || i[67] !== c || i[68] !== m || i[69] !== F || i[70] !== f ? (h = (0, d.jsx)("fieldset", {
                ref: F,
                "data-mcp-form-field": G,
                tabIndex: -1,
                className: f,
                disabled: m,
                children: c
            }), i[66] = n.name, i[67] = c, i[68] = m, i[69] = F, i[70] = f, i[71] = h) : h = i[71], h
        }

        function bi(a) {
            null == a || a.contains(document.activeElement) || a.focus()
        }
        var bj = c("sM3V"),
            bk = c("JwWG"),
            bl = c("mjcS"),
            bm = c("N0Xk"),
            bn = c("Zk0V");

        function bo(a) {
            let b, c, f, g, i, j, k, m, n, o, p, q, r, s, t = (0, e.c)(40),
                {
                    isSubmitting: w,
                    elicitation: x,
                    field: y,
                    hostId: z,
                    conversationId: A,
                    groupIndex: B,
                    groupCount: C,
                    onCancel: D
                } = a,
                E = void 0 !== w && w,
                F = (0, l.a)(),
                {
                    serverName: G
                } = x;
            t[0] !== A || t[1] !== z || t[2] !== G ? (b = {
                hostId: z,
                serverName: G,
                threadId: A
            }, t[0] = A, t[1] = z, t[2] = G, t[3] = b) : b = t[3];
            let H = (0, h.x)(bj.a, b);
            t[4] !== H ? (c = H ?? {}, t[4] = H, t[5] = c) : c = t[5];
            let {
                pluginId: I,
                serverInfo: J
            } = c, K = void 0 === I ? G : I;
            t[6] !== J ? (f = (0, a4.a)(J), t[6] = J, t[7] = f) : f = t[7];
            let L = f;
            return t[8] !== z || t[9] !== L || t[10] !== K || t[11] !== G ? (g = null != L || null == K ? (0, d.jsx)(bm.a, {
                className: "icon-sm shrink-0",
                icon: L
            }) : (0, d.jsx)(bl.a, {
                alt: G,
                className: "icon-sm",
                fallback: (0, d.jsx)(bk.a, {}),
                hostId: z,
                pluginId: K,
                preferComposerIcon: !0
            }), t[8] = z, t[9] = L, t[10] = K, t[11] = G, t[12] = g) : g = t[12], t[13] !== x.message ? (i = (0, d.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: x.message
            }), t[13] = x.message, t[14] = i) : i = t[14], t[15] !== C || t[16] !== B ? (j = C > 1 && (0, d.jsx)(u.a, {
                id: "composer.mcpFormElicitation.progress",
                defaultMessage: "{current} of {total}",
                values: {
                    current: B + 1,
                    total: C
                }
            }), t[15] = C, t[16] = B, t[17] = j) : j = t[17], t[18] !== F ? (k = F.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel"
            }), t[18] = F, t[19] = k) : k = t[19], t[20] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, d.jsx)(ao.a, {
                "aria-hidden": !1,
                asset: bn.a
            }), t[20] = m) : m = t[20], t[21] !== E || t[22] !== D || t[23] !== k ? (n = (0, d.jsx)(v.a, {
                "aria-label": k,
                color: "ghostSecondary",
                size: "compact",
                uniform: !0,
                disabled: E,
                onClick: D,
                children: m
            }), t[21] = E, t[22] = D, t[23] = k, t[24] = n) : n = t[24], t[25] !== n || t[26] !== j ? (o = (0, d.jsxs)("div", {
                className: "ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none",
                children: [j, n]
            }), t[25] = n, t[26] = j, t[27] = o) : o = t[27], t[28] !== o || t[29] !== g || t[30] !== i ? (p = (0, d.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [g, i, o]
            }), t[28] = o, t[29] = g, t[30] = i, t[31] = p) : p = t[31], t[32] !== y ? (q = y?.type !== "boolean" && y?.title && (0, d.jsx)("div", {
                className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                children: y.title
            }), t[32] = y, t[33] = q) : q = t[33], t[34] !== y ? (r = y?.description && (0, d.jsx)("div", {
                className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                children: y.description
            }), t[34] = y, t[35] = r) : r = t[35], t[36] !== p || t[37] !== q || t[38] !== r ? (s = (0, d.jsxs)("div", {
                className: "flex shrink-0 flex-col gap-1 px-4 py-3",
                children: [p, q, r]
            }), t[36] = p, t[37] = q, t[38] = r, t[39] = s) : s = t[39], s
        }
        let bp = (0, h.d)($.a, (a, b) => {
            let {
                get: c
            } = b;
            return null != (0, i.Fg)(a) || (0, i.Hi)(c(t.b, a))
        });

        function bq(a) {
            let b, c = (0, e.c)(2);
            return c[0] !== a ? (b = null != a.onReply ? (0, d.jsx)(br, {
                ...a
            }) : (0, d.jsx)(bx, {
                ...a
            }), c[0] = a, c[1] = b) : b = c[1], b
        }

        function br(a) {
            let b, c, i, s, t, u, v, w, z, B, C, D, J = (0, e.c)(45),
                {
                    attribution: K,
                    formType: M,
                    autoResolution: S,
                    confirmationPresentation: T,
                    confirmationCompleted: V,
                    conversationId: W,
                    elicitation: X,
                    hostId: Y,
                    requestId: Z,
                    turnId: _,
                    onUserInteraction: ai,
                    onStandaloneResponseChange: al,
                    onReply: am,
                    retainDraft: an,
                    onPickLegacyFile: ao,
                    onPickFiles: ap,
                    validateContent: aq,
                    disabled: as,
                    isSubmitting: at,
                    onPreview: au
                } = a,
                av = void 0 !== an && an,
                aw = void 0 !== as && as,
                ax = void 0 !== at && at,
                ay = (0, h.y)($.a),
                az = (0, l.a)(),
                aA = (0, k.useRef)(null),
                aB = (0, k.useRef)(null),
                aC = (0, p.b)(),
                aD = "formElicitation" === X.kind;
            J[0] !== X || J[1] !== az ? (b = (0, E.a)(X), c = function(a, b) {
                var c, d;
                let e, f, g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, E.a)(a);
                if ("formElicitation" !== a.kind || 1 !== Object.keys(a.schema.properties).length || a.schema.properties.confirmed?.type !== "boolean" || "Apply these changes" !== a.schema.properties.confirmed.title || a.schema.required?.length !== 1 || "confirmed" !== a.schema.required[0]) return null;
                let {
                    message: h
                } = a;
                if (null != a.confirmation) {
                    let a = g?.presentation;
                    if (g?.field !== "confirmed" || a?.triggerLabel !== "Review environment changes" || "Apply changes" !== a.confirmLabel || null != a.fields) return null;
                    let c = function(a, b) {
                        let [c, ...d] = a.split(I);
                        if (!c?.trim() || c.includes("\n") || 0 === d.length) return null;
                        let e = [],
                            f = new Set;
                        for (let a of d) {
                            let c = a.indexOf("\n"),
                                d = H.get(a.slice(0, c));
                            if (null == d || f.has(d)) return null;
                            f.add(d);
                            let g = a.slice(c + 1);
                            if ("network_policy" === d) {
                                let a = function(a) {
                                    if ("Off" === a) return {
                                        type: "disabled"
                                    };
                                    if ("Unrestricted access" === a) return {
                                        type: "unrestricted"
                                    };
                                    let b = "Restricted to ";
                                    if (!a.startsWith(b)) return null;
                                    let c = a.slice(b.length).split(", "),
                                        d = "package manager domains" === c.at(-1);
                                    return (d && c.pop(), c.some(a => !/^(?:\*|(?:\*\.)?[a-z0-9.-]+)$/u.test(a))) ? null : {
                                        type: "restricted",
                                        egress_rules: c.map(a => ({
                                            host: a
                                        })),
                                        presets: d ? ["package_managers"] : []
                                    }
                                }(g);
                                if (null == a) return null;
                                e.push(R(a, b))
                            } else {
                                let a = [];
                                if ("Remove all" !== g)
                                    for (let b of g.split("\n\n")) {
                                        let c = function(a, b) {
                                            let [c, ...d] = b.split("\n"), [e, f, g] = c.split(" \xb7 ");
                                            return e && f && null == g ? "repositories" === a ? d.every(a => /^(?:Mount at .+|Refresh on startup|Skip refresh on startup|Create local branch .+ from .+)$/u.test(a)) ? {
                                                label: e,
                                                gitRef: f,
                                                detail: d.join("\n")
                                            } : null : L.safeParse(e).success && ("Optional" === f || "Required" === f) && d.length === ("env_vars" === a ? 1 : 2) && /^Vault item \u201c.+\u201d$/u.test(d[0]) && ("network_secrets" !== a || /^Can be sent to .+$/u.test(d[1])) ? {
                                                label: e,
                                                detail: [f, ...d].join("\n")
                                            } : null : null
                                        }(d, b);
                                        if (null == c) return null;
                                        a.push(c)
                                    }
                                e.push(O(d, a, b))
                            }
                        }
                        return {
                            reason: c,
                            changes: e
                        }
                    }(h, b);
                    return null == c ? null : {
                        field: "confirmed",
                        presentation: a,
                        review: c,
                        details: h
                    }
                }
                if (!h.startsWith(F)) return null;
                let i = h.indexOf(G, F.length),
                    j = h.lastIndexOf("\n\n{");
                if (i < 0 || j < i + G.length) return null;
                let k = h.slice(F.length, i),
                    l = h.slice(i + G.length, j).trim();
                if (!/^ccarenv_[A-Za-z0-9_-]+$/.test(k) || !l) return null;
                let m = h.slice(j + 2);
                try {
                    f = JSON.parse(m)
                } catch {
                    return null
                }
                let n = N.safeParse(f);
                return n.success && A()(f, n.data) ? {
                    field: "confirmed",
                    presentation: {
                        title: b.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.title",
                            defaultMessage: "Change cloud environment?"
                        }),
                        triggerLabel: b.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.trigger",
                            defaultMessage: "Review environment changes"
                        }),
                        confirmLabel: b.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.apply",
                            defaultMessage: "Apply changes"
                        }),
                        sections: void 0
                    },
                    review: {
                        reason: l,
                        changes: (c = n.data, d = b, e = [], null != c.network_policy && e.push(R(c.network_policy, d)), null != c.repositories && e.push(O("repositories", c.repositories.map(a => {
                            let {
                                value: b
                            } = a;
                            var c = b.repository,
                                e = d;
                            let f = [];
                            for (let {
                                    branch: a,
                                    ref: b
                                }
                                of(c.mount_path && f.push(e.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.checkoutFolder",
                                    defaultMessage: "Checkout folder {path}"
                                }, {
                                    path: Q(c.mount_path)
                                })), null != c.refresh && f.push(e.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.checkoutRefresh",
                                    defaultMessage: "{refresh, select, true {Refresh on startup} other {Skip refresh on startup}}"
                                }, {
                                    refresh: String(c.refresh)
                                })), c.extra_refs ?? [])) f.push(e.formatMessage({
                                id: "mcpConfirmation.cloudEnvironment.extraCheckout",
                                defaultMessage: "Create local branch {branch} from {ref}"
                            }, {
                                branch: Q(a),
                                ref: Q(b)
                            }));
                            return {
                                label: Q(c.repository_id),
                                gitRef: Q(c.ref),
                                detail: f.join("\n")
                            }
                        }), d)), null != c.env_vars && e.push(O("env_vars", c.env_vars.map(a => {
                            let {
                                direct_environment_variable: b,
                                source: c,
                                optional: e
                            } = a;
                            return {
                                label: b.variable_name,
                                detail: P(c.vault_secret_id, e ?? !1, d)
                            }
                        }), d)), null != c.network_secrets && e.push(O("network_secrets", c.network_secrets.map(a => {
                            let {
                                name: b,
                                target: c,
                                source: e,
                                optional: f
                            } = a, {
                                variable_name: g,
                                allowed_domains: h
                            } = c.environment_variable;
                            return {
                                label: d.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.networkSecretLabel",
                                    defaultMessage: "{name} ({variable})"
                                }, {
                                    name: Q(b),
                                    variable: g
                                }),
                                detail: d.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.networkSecretDetail",
                                    defaultMessage: "{binding}\nCan be sent to {domains}"
                                }, {
                                    binding: P(e.vault_secret_id, f ?? !1, d),
                                    domains: d.formatList(h.map(Q))
                                })
                            }
                        }), d)), e)
                    },
                    details: `Instance: ${k}

${m}`
                } : null
            }(X, az, b), J[0] = X, J[1] = az, J[2] = b, J[3] = c) : (b = J[2], c = J[3]);
            let aE = c,
                aF = aE ?? b,
                aG = aF?.field ?? null,
                aH = (0, ab.c)(X.schema),
                aI = function(a) {
                    if ("openaiForm" !== a.kind) return;
                    let b = a.schema[aa.a],
                        c = null == b ? void 0 : a.schema.properties[b];
                    if (null != b && c?.type === "string" && ("oneOf" in c && null != c.oneOf && c.oneOf.length > 0 || "enum" in c && null != c.enum && c.enum.length > 0)) return {
                        name: b,
                        options: (0, ab.d)(c),
                        required: a.schema.required?.includes(b) === !0
                    }
                }(X),
                aJ = aH[0],
                aK = 1 === aH.length && null != aJ && (0, ae.b)(aJ.schema) ? aJ.schema : null,
                aL = null != aK,
                aM = (0, r.b)(Y, W, Z),
                aN = (0, h.z)(r.c).get(aM);
            J[4] !== X ? (i = () => ag(X), J[4] = X, J[5] = i) : i = J[5];
            let [aO, aP] = (0, k.useState)(i), aQ = aN?.requestId === Z && "kind" in aN.draft && aN.draft.kind === X.kind ? aN.draft : ag(X), aR = null == am || av ? aQ : aO, {
                values: aS
            } = aR, aT = aH.filter(a => a.name !== aI?.name), aU = Object.fromEntries(aT.map(bw)), aV = "openaiForm" === X.kind ? X.schema["x-openai-groups"] : void 0;
            J[6] !== aV ? (s = new Set(aV?.flatMap(bv)), J[6] = aV, J[7] = s) : s = J[7];
            let aW = s;
            J[8] !== aW ? (t = a => !aW.has(a.name), J[8] = aW, J[9] = t) : t = J[9];
            let aX = aT.filter(t),
                aY = aV?.map(a => a.properties.map(a => aU[a])) ?? [];
            (aX.length > 0 || 0 === aY.length) && aY.push(aX);
            let aZ = !aL && (X.message.trim().length > 0 || aY.length > 1),
                a$ = Math.min(aR.groupIndex ?? 0, aY.length - 1),
                a_ = a$ === aY.length - 1,
                a0 = aY[a$],
                a1 = 1 === a0.length ? a0[0] : void 0,
                a2 = a1?.schema.type === "string" && (0, ab.e)(a1.schema) ? (0, ab.d)(a1.schema) : null,
                a3 = null == a1 ? void 0 : aS[a1.name],
                [a4, a5] = (0, k.useState)(null),
                [a6, a7] = (0, k.useState)(0),
                [a8, a9] = (0, k.useState)(!1),
                ba = (0, k.useRef)(!1),
                bb = ax || a8,
                bc = aw || bb || a6 > 0;
            J[10] === Symbol.for("react.memo_cache_sentinel") ? (u = [], J[10] = u) : u = J[10];
            let [bd, be] = (0, k.useState)(u);
            (0, k.useEffect)(() => {
                null != aK && null == am && (0, m.d)(ay, {
                    hostId: Y,
                    requestId: Z
                }, aK.items.length, {
                    threadId: W,
                    turnId: _
                })
            }, [W, Y, am, Z, ay, aK, _]);
            let bf = (a, b) => {
                    if (null == am || av) {
                        let b = ay.get(r.c).get(aM),
                            c = null != b && "kind" in b.draft && b.draft.kind === X.kind ? b.draft : ag(X);
                        (0, r.d)(ay, aM, {
                            conversationId: W,
                            draft: a(c),
                            requestId: Z,
                            cleanupOwner: av ? "hosted" : void 0
                        })
                    } else aP(a);
                    null != b && be(a => a.filter(a => a !== b))
                },
                bg = (a, b) => {
                    bc || bf(c => ({
                        ...c,
                        values: {
                            ...c.values,
                            [a]: b
                        }
                    }), a)
                },
                bi = (a, b) => {
                    if (ax || ba.current) return Promise.resolve(!1);
                    if ((0, ac.a)(ay, {
                            action: a,
                            formType: M ?? (aD ? "mcp" : "openai"),
                            identity: K
                        }), null != am) return am(a, b);
                    let c = () => (0, n.b)(ay, Y).replyWithMcpServerElicitationResponse(W, Z, (0, j.b)(a, null, b ?? {}));
                    return null == al ? c().then(bu, bt) : (ba.current = !0, a9(!0), al("submitting"), Promise.resolve().then(c).then(() => (al({
                        accept: "accepted",
                        decline: "declined",
                        cancel: "canceled"
                    } [a]), !0), () => (al("failed"), !1)).finally(() => {
                        ba.current = !1, a9(!1)
                    }))
                },
                bj = a => {
                    bc || (a5(null), bf(b => ({
                        ...b,
                        groupIndex: a
                    })))
                },
                bk = a => {
                    if (bc) return;
                    let b = a;
                    if (a_ && aI?.required && null == b) {
                        let a = aI.options;
                        if (1 !== a.length) return void aB.current?.focus();
                        b = a[0].const
                    }
                    let c = {
                        ...aR.values
                    };
                    null != aI && (null == b ? delete c[aI.name] : (0, ab.g)(c, aI.name, b));
                    let d = function(a, b, c) {
                            let d = {
                                ...b.values
                            };
                            for (let [a, c] of Object.entries(b.customDrafts)) d[a] = ah(d[a], c);
                            switch (a.kind) {
                                case "formElicitation":
                                    return (0, af.a)(a.schema, d);
                                case "openaiForm":
                                    return (0, ad.b)(a.schema, d, b.fileOptions, c);
                                case "legacyOpenAIForm":
                                    return (0, ae.a)(a.schema, d)
                            }
                        }(X, {
                            ...aR,
                            values: null == aG ? c : {
                                [aG]: !0
                            }
                        }, aq),
                        e = a_ ? d.invalidFieldNames : d.invalidFieldNames.filter(a => a0.some(b => b.name === a));
                    if (be(e), e.length > 0) {
                        let a = e[0],
                            b = aY.findIndex(b => b.some(b => b.name === a));
                        if (b >= 0 && b !== a$) return void bj(b);
                        let c = Array.from(aA.current?.querySelectorAll("[data-mcp-form-field]") ?? []).find(b => b.dataset.mcpFormField === a),
                            d = c?.querySelector('input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), [contenteditable="true"], button:not(:disabled)');
                        return void(d ?? c)?.focus()
                    }
                    if (!a_) return void bj(a$ + 1);
                    if (null == d.content) return;
                    let f = bi("accept", d.content);
                    if (null != am || null == aK || null == aJ) return;
                    let g = d.content[aJ.name];
                    if ("string" != typeof g) return;
                    let h = aK.items.findIndex(a => a.id === g);
                    h < 0 || f.then(a => {
                        !1 !== a && (0, m.e)(ay, {
                            hostId: Y,
                            requestId: Z
                        }, g, h)
                    })
                },
                bl = a => {
                    if (!a.defaultPrevented && !a.nativeEvent.isComposing && a.target instanceof HTMLElement && a.currentTarget.contains(a.target)) {
                        if ("Escape" === a.key) {
                            a.preventDefault(), bi("cancel");
                            return
                        }
                        if (!(bc || null == a.target.closest('button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]') && aj(a, () => a.currentTarget.requestSubmit())) && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && null == a.target.closest('textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]') && 1 === a0.length && /^[1-9]$/.test(a.key)) {
                            let b = a.currentTarget.querySelectorAll('[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)')[Number(a.key) - 1];
                            null != b && (a.preventDefault(), a.repeat || b.click())
                        }
                    }
                },
                bm = null == ap && aH.some(bs),
                bn = (0, h.x)(null == am && bm ? bp : null, Y);
            if (aF?.presentation != null) {
                let a, b;
                return J[11] !== X || J[12] !== Z ? (a = JSON.stringify([Z, X]), J[11] = X, J[12] = Z, J[13] = a) : a = J[13], J[14] !== aE ? (b = null != aE ? (0, d.jsx)(U, {
                    review: aE.review
                }) : null, J[14] = aE, J[15] = b) : b = J[15], (0, d.jsx)(f.a, {
                    className: "contents",
                    children: (0, d.jsx)(y.a, {
                        presentation: aF.presentation,
                        message: X.message,
                        details: aE?.details,
                        compact: null != aE,
                        disabled: bc,
                        isSubmitting: bb,
                        completed: V,
                        standalone: "standalone" === T,
                        onOpen: ai,
                        onConfirm: bk,
                        onCancel: () => void bi("cancel"),
                        children: b
                    }, a)
                })
            }
            if (bm && !bn) {
                let a;
                return J[16] !== W || J[17] !== X.serverName || J[18] !== Y || J[19] !== am || J[20] !== al || J[21] !== Z || J[22] !== bb ? (a = (0, d.jsx)(ak.a, {
                    conversationId: W,
                    hostId: Y,
                    isSubmitting: bb,
                    requestId: Z,
                    serverName: X.serverName,
                    onReply: am,
                    onStandaloneResponseChange: al
                }), J[16] = W, J[17] = X.serverName, J[18] = Y, J[19] = am, J[20] = al, J[21] = Z, J[22] = bb, J[23] = a) : a = J[23], a
            }
            let bq = f.a,
                br = o.a,
                bx = null != ai || void 0;
            J[24] !== ai ? (v = a => {
                "Escape" === a.key || a.target instanceof Element && null != a.target.closest("[data-request-input-dismiss]") || ai?.()
            }, w = a => {
                a.target instanceof Element && null != a.target.closest("[data-request-input-dismiss]") || ai?.()
            }, z = a => {
                (0, q.b)(a.dataTransfer) && ai?.()
            }, J[24] = ai, J[25] = v, J[26] = w, J[27] = z) : (v = J[25], w = J[26], z = J[27]);
            let by = a => {
                    a.preventDefault(), bk()
                },
                bz = aZ && (0, d.jsx)(bo, {
                    isSubmitting: bb,
                    elicitation: X,
                    field: a1?.schema,
                    hostId: Y,
                    conversationId: W,
                    groupIndex: a$,
                    groupCount: aY.length,
                    onCancel: () => void bi("cancel")
                }),
                bA = null == aG && a0.length > 0 && (0, d.jsx)("div", {
                    className: (0, g.b)("flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3", !aZ && "pt-3"),
                    children: a0.map((a, b) => (0, d.jsx)(bh, {
                        autoFocus: aC && 0 === b,
                        disabled: aw,
                        interactionDisabled: bc,
                        field: a,
                        isOnlyField: 1 === a0.length,
                        draft: aR,
                        expanded: a4 === a.name,
                        hostId: Y,
                        invalid: bd.includes(a.name),
                        metadataInHeader: aZ && 1 === a0.length,
                        onCloseExpanded: () => a5(null),
                        onDraftChange: bf,
                        onValueChange: bg,
                        onPickLegacyFile: ao,
                        onPickingChange: a => a7(b => b + (a ? 1 : -1)),
                        onPickFiles: ap,
                        onPreview: au,
                        onViewAll: a0.length > 1 && (0, ad.c)(a.schema) && aR.fileOptions[a.name].length > 1 ? () => a5(a.name) : void 0
                    }, a.name))
                }, a$),
                bB = null != aG ? (0, d.jsx)(x, {
                    disabled: bc,
                    isSubmitting: bb,
                    hotkeysEnabled: aC,
                    onDecline: () => void bi("decline")
                }) : (0, d.jsx)(ar, {
                    primaryActionRef: aB,
                    isSubmitting: bb,
                    autoResolution: S,
                    disabled: bc,
                    submitDisabled: bc || null != a1 && a1.required && (0, ae.b)(a1.schema) && !(0, ae.c)(a1.schema, aS[a1.name]),
                    fieldCount: a0.length,
                    isLastGroup: a_,
                    onBack: a$ > 0 ? () => bj(a$ - 1) : void 0,
                    hotkeysEnabled: aC,
                    acceptOptions: a_ && null != aI ? {
                        options: aI.options,
                        required: aI.required,
                        onSelect: bk
                    } : void 0,
                    isStandardForm: aD,
                    showSubmit: a1?.required !== !0 || null == a2 || "string" == typeof a3 && ("" !== a3 || a2.some(a => a.const === a3)),
                    showHeader: aZ,
                    onCancel: () => void bi("cancel"),
                    onDecline: () => void bi("decline"),
                    onDismissLegacyImagePicker: aL ? () => {
                        null == am && (0, m.b)(ay, {
                            hostId: Y,
                            requestId: Z
                        }), bi("decline")
                    } : void 0,
                    onViewAll: null != a1 && (0, ad.c)(a1.schema) && aR.fileOptions[a1.name].length > 1 ? () => a5(a1.name) : void 0
                });
            return J[28] !== aA || J[29] !== bl || J[30] !== bx || J[31] !== v || J[32] !== w || J[33] !== z || J[34] !== by || J[35] !== bz || J[36] !== bA || J[37] !== bB ? (B = (0, d.jsxs)("form", {
                ref: aA,
                className: "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
                noValidate: !0,
                tabIndex: -1,
                "data-codex-character-input-boundary": !0,
                "data-codex-escape-boundary": !0,
                "data-user-input-auto-resolution": bx,
                onKeyDownCapture: v,
                onPointerDownCapture: w,
                onDropCapture: z,
                onKeyDown: bl,
                onSubmit: by,
                children: [bz, bA, bB]
            }), J[28] = aA, J[29] = bl, J[30] = bx, J[31] = v, J[32] = w, J[33] = z, J[34] = by, J[35] = bz, J[36] = bA, J[37] = bB, J[38] = B) : B = J[38], J[39] !== br || J[40] !== B ? (C = (0, d.jsx)(br, {
                className: "@container/request-card",
                children: B
            }), J[39] = br, J[40] = B, J[41] = C) : C = J[41], J[42] !== bq || J[43] !== C ? (D = (0, d.jsx)(bq, {
                className: "contents",
                children: C
            }), J[42] = bq, J[43] = C, J[44] = D) : D = J[44], D
        }

        function bs(a) {
            let {
                schema: b
            } = a;
            return (0, ad.c)(b) && null != b["x-openai-input"].userOptions
        }

        function bt() {
            return !1
        }

        function bu() {
            return !0
        }

        function bv(a) {
            return a.properties
        }

        function bw(a) {
            return [a.name, a]
        }

        function bx(a) {
            let b, f, g = (0, e.c)(9),
                i = (0, h.y)(_.a),
                j = (0, l.a)();
            g[0] !== j || g[1] !== a.conversationId || g[2] !== a.elicitation || g[3] !== a.hostId || g[4] !== i ? (b = (b, d) => {
                Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(858617)]).then(c.bind(c, "sJLg")).then(c => {
                    let {
                        openFormPreview: e
                    } = c;
                    return e(i, {
                        hostId: a.hostId,
                        threadId: a.conversationId,
                        server: a.elicitation.serverName,
                        target: b,
                        title: d
                    })
                }).catch(by).then(a => {
                    a || i.get(s.f).danger(j.formatMessage({
                        id: "composer.mcpFormElicitation.previewUnavailable",
                        defaultMessage: "Couldn't open preview"
                    }), {
                        errorAnalytics: {
                            toastId: "composer.mcpFormElicitation.previewUnavailable"
                        }
                    })
                })
            }, g[0] = j, g[1] = a.conversationId, g[2] = a.elicitation, g[3] = a.hostId, g[4] = i, g[5] = b) : b = g[5];
            let k = b;
            return g[6] !== k || g[7] !== a ? (f = (0, d.jsx)(br, {
                ...a,
                onPreview: k
            }), g[6] = k, g[7] = a, g[8] = f) : f = g[8], f
        }

        function by() {
            return !1
        }
    }),
    MnTr: (function(a, b, c) {
        c.d(b, {
            a: () => l,
            b: () => m
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ULZ9"),
            g = c("on57"),
            h = c("zd8w"),
            i = c("v7qY"),
            j = "PortalBoundary-TFj9W2";
        let k = (0, h.createContext)({
            container: null
        });

        function l(a) {
            let b, c, i, l, m, n, o, p, q = (0, e.c)(20),
                {
                    children: r,
                    className: s,
                    theme: t,
                    themeClassName: u
                } = a,
                [v, w] = (0, h.useState)(null);
            q[0] !== v ? (b = () => {
                if (null == v) return;
                let a = () => {
                    let a = String(v.currentCSSZoom ?? 1);
                    v.style.getPropertyValue("--puik-portal-zoom") !== a && v.style.setProperty("--puik-portal-zoom", a)
                };
                a();
                let b = new MutationObserver(a);
                for (let a = v; null != a; a = a.parentElement) b.observe(a, {
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                });
                return () => b.disconnect()
            }, c = [v], q[0] = v, q[1] = b, q[2] = c) : (b = q[1], c = q[2]), (0, h.useLayoutEffect)(b, c), q[3] === Symbol.for("react.memo_cache_sentinel") ? (i = a => {
                null != a && w(a)
            }, q[3] = i) : i = q[3], q[4] !== s || q[5] !== u ? (l = (0, g.b)("relative", j, u, s), q[4] = s, q[5] = u, q[6] = l) : l = q[6];
            let x = v ?? void 0;
            return q[7] !== v || q[8] !== u ? (m = {
                container: v,
                themeClassName: u
            }, q[7] = v, q[8] = u, q[9] = m) : m = q[9], q[10] !== r || q[11] !== m ? (n = (0, d.jsx)(k.Provider, {
                value: m,
                children: r
            }), q[10] = r, q[11] = m, q[12] = n) : n = q[12], q[13] !== x || q[14] !== n ? (o = (0, d.jsx)(f.a, {
                radixPortalContainer: x,
                children: n
            }), q[13] = x, q[14] = n, q[15] = o) : o = q[15], q[16] !== l || q[17] !== o || q[18] !== t ? (p = (0, d.jsx)("div", {
                ref: i,
                className: l,
                "data-theme": t,
                children: o
            }), q[16] = l, q[17] = o, q[18] = t, q[19] = p) : p = q[19], p
        }

        function m(a) {
            let b, c, l, m, n, o, p, q = (0, e.c)(24),
                {
                    children: r,
                    theme: s
                } = a,
                {
                    container: t,
                    themeClassName: u
                } = (0, h.useContext)(k);
            q[0] !== t ? (b = t?.closest("dialog:modal"), q[0] = t, q[1] = b) : b = q[1];
            let v = b,
                [w, x] = (0, h.useState)(null);
            q[2] !== t || q[3] !== v?.currentCSSZoom || q[4] !== w ? (c = () => {
                if (null == t || null == w) return;
                let a = t.ownerDocument.defaultView;
                if (null == a) return;
                let b = [];
                for (let a = t; null != a; a = a.parentElement) b.push(a);
                let c = () => {
                        let c = t.currentCSSZoom ?? 1,
                            d = v?.currentCSSZoom ?? 1,
                            e = b.map(b => a.getComputedStyle(b)),
                            f = b.some((a, b) => {
                                let c = e[b];
                                return a.hasAttribute("inert") || a.hidden || "true" === a.getAttribute("aria-hidden") || "none" === c.display || "hidden" === c.visibility || "collapse" === c.visibility || "hidden" === c.contentVisibility
                            });
                        w.style.setProperty("zoom", String(c / d)), w.style.setProperty("--puik-portal-zoom", String(c)), w.toggleAttribute("inert", f), w.toggleAttribute("hidden", f)
                    },
                    d = new MutationObserver(c),
                    e = !1,
                    f = () => {
                        let f = null != w.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]');
                        if (f !== e)
                            if (e = f, f) {
                                for (let a of (c(), b)) d.observe(a, {
                                    attributes: !0,
                                    attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"]
                                });
                                a.addEventListener("resize", c)
                            } else d.disconnect(), a.removeEventListener("resize", c)
                    },
                    g = new MutationObserver(f);
                return g.observe(w, {
                    childList: !0,
                    subtree: !0
                }), f(), () => {
                    g.disconnect(), d.disconnect(), a.removeEventListener("resize", c), w.setAttribute("hidden", ""), w.setAttribute("inert", "")
                }
            }, q[2] = t, q[3] = v?.currentCSSZoom, q[4] = w, q[5] = c) : c = q[5], q[6] !== t || q[7] !== v || q[8] !== w ? (l = [t, v, w], q[6] = t, q[7] = v, q[8] = w, q[9] = l) : l = q[9], (0, h.useLayoutEffect)(c, l);
            let y = w ?? void 0;
            return q[10] !== r || q[11] !== w ? (m = "function" == typeof r ? r(w) : r, q[10] = r, q[11] = w, q[12] = m) : m = q[12], q[13] !== y || q[14] !== m ? (n = (0, d.jsx)(f.a, {
                radixPortalContainer: y,
                children: m
            }), q[13] = y, q[14] = m, q[15] = n) : n = q[15], q[16] !== t || q[17] !== v || q[18] !== s || q[19] !== u ? (o = null != t && (0, i.createPortal)((0, d.jsx)("div", {
                ref: a => {
                    null != a && x(a)
                },
                className: (0, g.b)("relative", j, "PortalSurface-LW3Uz2", u),
                "data-theme": s
            }), v ?? t.ownerDocument.body), q[16] = t, q[17] = v, q[18] = s, q[19] = u, q[20] = o) : o = q[20], q[21] !== n || q[22] !== o ? (p = (0, d.jsxs)(d.Fragment, {
                children: [n, o]
            }), q[21] = n, q[22] = o, q[23] = p) : p = q[23], p
        }
    })
};