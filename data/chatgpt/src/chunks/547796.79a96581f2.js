export const __rspack_esm_ids = [547796];
export const __webpack_modules__ = {
    M4dq: (function(e, t, n) {
        var a = n("ABep");
        n("zd8w"), t.a = e => (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            ...e,
            children: [(0, a.jsx)("path", {
                fill: "#4D6FE6",
                d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
            }), (0, a.jsx)("path", {
                fill: "#86A0F2",
                d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
            })]
        })
    }),
    ULZ9: (function(e, t, n) {
        n.d(t, {
            a: () => r
        }), n("iYCA"), n("yCBR");
        var a = n("ABep"),
            l = n("QosV"),
            i = n("ylLY");

        function r(e) {
            let t, n, r = (0, l.c)(8),
                {
                    children: s,
                    linkComponent: o,
                    allowedWidgetTypes: c,
                    radixPortalContainer: d,
                    hydrationSafe: u
                } = e,
                m = void 0 === o ? "a" : o,
                p = void 0 === c ? "GA" : c,
                f = void 0 !== u && u;
            return r[0] !== p || r[1] !== f || r[2] !== m || r[3] !== d ? (t = {
                linkComponent: m,
                allowedWidgetTypes: p,
                radixPortalContainer: d,
                hydrationSafe: f
            }, r[0] = p, r[1] = f, r[2] = m, r[3] = d, r[4] = t) : t = r[4], r[5] !== s || r[6] !== t ? (n = (0, a.jsx)(i.a.Provider, {
                value: t,
                children: s
            }), r[5] = s, r[6] = t, r[7] = n) : n = r[7], n
        }
    }),
    FVmU: (function(e, t, n) {
        n.d(t, {
            a: () => x,
            b: () => g
        });
        var a = n("ABep"),
            l = n("QosV"),
            i = n("on57"),
            r = n("zd8w"),
            s = n("Wf1j"),
            o = n("oyxz"),
            c = n("sAQ3"),
            d = n("Sm6l"),
            u = n("JNtf"),
            m = n("mUDD"),
            p = n("bf6R"),
            f = e => (0, a.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 32,
                height: 32,
                fill: "none",
                viewBox: "0 0 24 24",
                ...e,
                children: [(0, a.jsx)("path", {
                    fill: "#4D6FE6",
                    d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
                }), (0, a.jsx)("path", {
                    fill: "#86A0F2",
                    d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
                })]
            }),
            h = n("M4dq");

        function x(e) {
            let t, n, x, b, v, y, w, j, k, N, C, S, M, F, A, _, E, I, L, P, z, O, D, T, R = (0, l.c)(83),
                {
                    presentation: q,
                    message: K,
                    details: U,
                    children: V,
                    compact: W,
                    disabled: B,
                    isSubmitting: Z,
                    completed: Q,
                    standalone: G,
                    onOpen: H,
                    onConfirm: $,
                    onCancel: J
                } = e,
                Y = void 0 !== W && W,
                X = void 0 !== Q && Q,
                ee = void 0 !== G && G,
                et = (0, s.a)(),
                [en, ea] = (0, r.useState)(ee),
                el = q.destructive ? "dangerSolid" : "primary",
                ei = Y ? void 0 : "modalPrimary",
                er = B || X;
            R[0] !== q.confirmLabel ? (t = (0, a.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: q.confirmLabel
            }), R[0] = q.confirmLabel, R[1] = t) : t = R[1], R[2] !== Z || R[3] !== el || R[4] !== ei || R[5] !== er || R[6] !== t ? (n = (0, a.jsx)(d.a, {
                color: el,
                size: ei,
                radius: "full",
                type: "submit",
                disabled: er,
                loading: Z,
                children: t
            }), R[2] = Z, R[3] = el, R[4] = ei, R[5] = er, R[6] = t, R[7] = n) : n = R[7];
            let es = n,
                eo = Y ? "ghost" : "secondary",
                ec = Y ? void 0 : "modalPrimary";
            R[8] !== X || R[9] !== B || R[10] !== J ? (x = () => {
                B || X || J?.(), ea(!1)
            }, R[8] = X, R[9] = B, R[10] = J, R[11] = x) : x = R[11], R[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsx)(o.a, {
                id: "mcpConfirmation.cancel",
                defaultMessage: "Cancel"
            }), R[12] = b) : b = R[12], R[13] !== ec || R[14] !== x || R[15] !== eo ? (v = (0, a.jsx)(d.a, {
                color: eo,
                size: ec,
                radius: "full",
                type: "button",
                onClick: x,
                children: b
            }), R[13] = ec, R[14] = x, R[15] = eo, R[16] = v) : v = R[16];
            let ed = v;
            R[17] !== ee ? (y = (0, i.b)("flex flex-wrap items-center gap-2", {
                "justify-center": ee
            }), R[17] = ee, R[18] = y) : y = R[18];
            let eu = "shield" === q.icon ? "actionChipWithIcon" : "actionChip",
                em = B && !X;
            R[19] !== H ? (w = () => {
                H?.(), ea(!0)
            }, R[19] = H, R[20] = w) : w = R[20], R[21] !== q.icon ? (j = "shield" === q.icon && (0, a.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, a.jsx)(h.a, {
                    "aria-hidden": "true"
                })
            }), R[21] = q.icon, R[22] = j) : j = R[22], R[23] !== q.triggerLabel ? (k = (0, a.jsx)("span", {
                className: "min-w-0 break-words whitespace-normal",
                children: q.triggerLabel
            }), R[23] = q.triggerLabel, R[24] = k) : k = R[24], R[25] !== X || R[26] !== et ? (N = X && (0, a.jsx)(p.Wb, {
                "aria-label": et.formatMessage({
                    id: "mcpConfirmation.completed",
                    defaultMessage: "Completed"
                })
            }), R[25] = X, R[26] = et, R[27] = N) : N = R[27], R[28] !== Z || R[29] !== eu || R[30] !== em || R[31] !== w || R[32] !== j || R[33] !== k || R[34] !== N ? (C = (0, a.jsxs)(c.a, {
                color: "conversationAccentSubtle",
                size: eu,
                radius: "messageBubble",
                type: "button",
                className: "max-w-full",
                disabled: em,
                loading: Z,
                "aria-haspopup": "dialog",
                onClick: w,
                children: [j, k, N]
            }), R[28] = Z, R[29] = eu, R[30] = em, R[31] = w, R[32] = j, R[33] = k, R[34] = N, R[35] = C) : C = R[35], R[36] !== y || R[37] !== C ? (S = (0, a.jsx)("div", {
                "data-mcp-confirmation-chip": !0,
                className: y,
                children: C
            }), R[36] = y, R[37] = C, R[38] = S) : S = R[38];
            let ep = Y ? 440 : 480,
                ef = Y ? "opaque" : "confirmation",
                eh = Y ? "default" : "large";
            R[39] === Symbol.for("react.memo_cache_sentinel") ? (M = {
                "aria-describedby": void 0
            }, R[39] = M) : M = R[39];
            let ex = Y ? "default" : "confirmation",
                eg = Y ? "gap-3" : void 0;
            R[40] !== X || R[41] !== B || R[42] !== $ ? (F = e => {
                e.preventDefault(), B || X || ($(), ea(!1))
            }, R[40] = X, R[41] = B, R[42] = $, R[43] = F) : F = R[43];
            let eb = !Y;
            R[44] !== eb ? (A = (0, i.b)("flex flex-col gap-3", {
                "items-center": eb
            }), R[44] = eb, R[45] = A) : A = R[45], R[46] !== q.icon ? (_ = "shield" === q.icon && (0, a.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, a.jsx)(f, {
                    "aria-hidden": "true"
                })
            }), R[46] = q.icon, R[47] = _) : _ = R[47];
            let ev = Y ? "default" : "confirmation",
                ey = Y ? "heading-dialog pe-8 wrap-anywhere" : "text-center";
            return R[48] !== q.title || R[49] !== ev || R[50] !== ey ? (E = (0, a.jsx)(u.f, {
                variant: ev,
                className: ey,
                children: q.title
            }), R[48] = q.title, R[49] = ev, R[50] = ey, R[51] = E) : E = R[51], R[52] !== A || R[53] !== _ || R[54] !== E ? (I = (0, a.jsxs)("div", {
                className: A,
                children: [_, E]
            }), R[52] = A, R[53] = _, R[54] = E, R[55] = I) : I = R[55], R[56] !== V || R[57] !== K || R[58] !== q ? (L = V ?? (0, a.jsx)(g, {
                presentation: q,
                message: K
            }), R[56] = V, R[57] = K, R[58] = q, R[59] = L) : L = R[59], R[60] !== U ? (P = null != U && (0, a.jsxs)("details", {
                className: "group text-sm text-secondary",
                children: [(0, a.jsxs)("summary", {
                    className: "flex w-fit cursor-interaction list-none items-center gap-1 rounded-sm pe-1 select-none hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                    children: [(0, a.jsx)(p.jc, {
                        "aria-hidden": "true",
                        className: "shrink-0 group-open:rotate-90 rtl:rotate-180"
                    }), (0, a.jsx)(o.a, {
                        id: "mcpConfirmation.details",
                        defaultMessage: "Details"
                    })]
                }), (0, a.jsx)("pre", {
                    className: "mt-2 max-h-56 overflow-auto rounded-md bg-surface-secondary p-2.5 text-xs break-words whitespace-pre-wrap text-default select-text",
                    children: U
                })]
            }), R[60] = U, R[61] = P) : P = R[61], R[62] !== es || R[63] !== ed || R[64] !== Y ? (z = Y ? (0, a.jsxs)(m.c, {
                className: "mt-0 gap-2",
                children: [ed, es]
            }) : (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [(0, a.jsx)(m.c, {
                    children: es
                }), (0, a.jsx)(m.c, {
                    children: ed
                })]
            }), R[62] = es, R[63] = ed, R[64] = Y, R[65] = z) : z = R[65], R[66] !== ex || R[67] !== eg || R[68] !== F || R[69] !== I || R[70] !== L || R[71] !== P || R[72] !== z ? (O = (0, a.jsxs)(m.b, {
                as: "form",
                size: "viewport",
                variant: ex,
                className: eg,
                onSubmit: F,
                children: [I, L, P, z]
            }), R[66] = ex, R[67] = eg, R[68] = F, R[69] = I, R[70] = L, R[71] = P, R[72] = z, R[73] = O) : O = R[73], R[74] !== en || R[75] !== ep || R[76] !== ef || R[77] !== eh || R[78] !== O ? (D = (0, a.jsx)(u.a, {
                open: en,
                onOpenChange: ea,
                widthHint: ep,
                variant: ef,
                closeButtonSize: eh,
                contentProps: M,
                children: O
            }), R[74] = en, R[75] = ep, R[76] = ef, R[77] = eh, R[78] = O, R[79] = D) : D = R[79], R[80] !== S || R[81] !== D ? (T = (0, a.jsxs)(a.Fragment, {
                children: [S, D]
            }), R[80] = S, R[81] = D, R[82] = T) : T = R[82], T
        }

        function g(e) {
            let t, n = (0, l.c)(10),
                {
                    message: i,
                    presentation: r
                } = e;
            if (r?.sections != null) {
                let e, t;
                return n[0] !== r.sections ? (e = r.sections.map(v), n[0] = r.sections, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, a.jsx)("div", {
                    className: "flex flex-col gap-5 select-text",
                    children: e
                }), n[2] = e, n[3] = t) : t = n[3], t
            }
            if (r?.fields != null) {
                let e, t;
                return n[4] !== r.fields ? (e = r.fields.map(b), n[4] = r.fields, n[5] = e) : e = n[5], n[6] !== e ? (t = (0, a.jsx)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text",
                    children: e
                }), n[6] = e, n[7] = t) : t = n[7], t
            }
            return n[8] !== i ? (t = (0, a.jsx)("div", {
                className: "text-sm break-words whitespace-pre-wrap text-default select-text",
                children: i
            }), n[8] = i, n[9] = t) : t = n[9], t
        }

        function b(e, t) {
            let {
                label: n,
                value: l
            } = e;
            return (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, a.jsx)("dt", {
                    className: "text-secondary",
                    children: n
                }), (0, a.jsx)("dd", {
                    className: "whitespace-pre-wrap",
                    children: l
                })]
            }, t)
        }

        function v(e, t) {
            let {
                title: n,
                body: l,
                caption: i
            } = e;
            return (0, a.jsxs)("section", {
                className: "flex flex-col gap-2",
                children: [n && (0, a.jsx)("h3", {
                    className: "text-base font-medium text-secondary",
                    children: n
                }), (0, a.jsxs)("dl", {
                    className: "flex flex-col gap-4 rounded-2xl border border-default p-5 break-words",
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, a.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: l.label
                        }), (0, a.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: l.value
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1 border-t border-default pt-4",
                        children: [(0, a.jsx)("dt", {
                            className: "text-sm text-secondary",
                            children: i.label
                        }), (0, a.jsx)("dd", {
                            className: "text-document whitespace-pre-wrap text-default",
                            children: i.value
                        })]
                    })]
                })]
            }, t)
        }
    }),
    nxd2: (function(e, t, n) {
        var a = n("lAQI");
        let l = a.F({
            version: a.z(1),
            field: a.L().min(1),
            presentation: a.F({
                title: a.L().trim().min(1).max(120),
                triggerLabel: a.L().trim().min(1).max(80),
                confirmLabel: a.L().trim().min(1).max(80),
                icon: a.z("shield").optional().catch(void 0),
                destructive: a.j().optional().catch(void 0),
                fields: a.g(a.F({
                    label: a.L().trim().min(1).max(120),
                    value: a.L().min(1).max(1e4).refine(e => e.trim().length > 0)
                })).min(1).max(20).optional().catch(void 0),
                sections: a.g(a.F({
                    title: a.L().trim().min(1).max(120).optional(),
                    bodyField: a.E().int().min(0).max(19),
                    captionField: a.E().int().min(0).max(19)
                })).min(1).max(10).optional().catch(void 0)
            }).transform(e => {
                let {
                    sections: t,
                    ...n
                } = e, {
                    fields: a
                } = n, l = t?.flatMap(e => {
                    let {
                        bodyField: t,
                        captionField: n
                    } = e;
                    return [t, n]
                }), i = null != a && l?.length === a.length && new Set(l).size === a.length && l.every(e => e < a.length);
                return {
                    ...n,
                    sections: i ? t?.map(e => {
                        let {
                            title: t,
                            bodyField: n,
                            captionField: l
                        } = e;
                        return {
                            title: t,
                            body: a[n],
                            caption: a[l]
                        }
                    }) : void 0
                }
            }).optional().catch(void 0)
        });
        n.d(t, {}, {
            a: function(e) {
                let t = l.safeParse(e.confirmation);
                if (!t.success || !e.message.trim()) return null;
                let {
                    field: n
                } = t.data;
                return 1 !== Object.keys(e.schema.properties).length || e.schema.properties[n]?.type !== "boolean" || e.schema.required?.length !== 1 || e.schema.required[0] !== n ? null : t.data
            }
        })
    }),
    vPGU: (function(e, t, n) {
        var a = n("ABep"),
            l = n("QosV"),
            i = n("Q840"),
            r = n("I3F6"),
            s = n("zd8w"),
            o = n("oyxz"),
            c = n("Dgwo"),
            d = n("WNfT"),
            u = n("KRWX"),
            m = n("Sm6l"),
            p = n("OWtl");

        function f() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, x, g, b, v, y, w, j = (0, l.c)(26),
                    {
                        conversationId: k,
                        hostId: N,
                        requestId: C,
                        serverName: S,
                        onReply: M,
                        onStandaloneResponseChange: F,
                        isSubmitting: A
                    } = e,
                    _ = void 0 !== A && A,
                    E = (0, i.y)(p.a),
                    I = (0, u.b)(),
                    [L, P] = (0, s.useState)(!1),
                    z = (0, s.useRef)(!1);
                j[0] !== k || j[1] !== N || j[2] !== _ || j[3] !== M || j[4] !== F || j[5] !== C || j[6] !== E ? (t = e => {
                    if (_ || z.current) return;
                    let t = () => null != M ? M(e) : (0, c.b)(E, N).replyWithMcpServerElicitationResponse(k, C, (0, r.b)(e));
                    null == F ? t().catch(f) : (z.current = !0, P(!0), F("submitting"), Promise.resolve().then(t).then(() => F("decline" === e ? "declined" : "canceled"), () => F("failed")).finally(() => {
                        z.current = !1, P(!1)
                    }))
                }, j[0] = k, j[1] = N, j[2] = _, j[3] = M, j[4] = F, j[5] = C, j[6] = E, j[7] = t) : t = j[7];
                let O = t;
                j[8] !== O ? (n = e => {
                    "Escape" === e.key && (e.preventDefault(), O("cancel"))
                }, j[8] = O, j[9] = n) : n = j[9], j[10] !== S ? (h = (0, a.jsxs)("div", {
                    className: "text-sm font-medium",
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(o.a, {
                            id: "composer.openAIForm.invalidInput.serverTitle",
                            defaultMessage: "{serverName} requested a form that cannot be displayed",
                            values: {
                                serverName: S
                            }
                        })
                    }), null]
                }), j[10] = S, j[11] = h) : h = j[11], j[12] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsxs)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(o.a, {
                            id: "composer.openAIForm.invalidInput.dismissInstruction",
                            defaultMessage: "Dismiss the request to close it"
                        })
                    }), null]
                }), j[12] = x) : x = j[12], j[13] !== h ? (g = (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1 p-4",
                    children: [h, x]
                }), j[13] = h, j[14] = g) : g = j[14];
                let D = _ || L;
                return j[15] !== O ? (b = () => O("cancel"), j[15] = O, j[16] = b) : b = j[16], j[17] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(o.a, {
                    id: "composer.openAIForm.unsupported.dismiss",
                    defaultMessage: "Dismiss"
                }), j[17] = v) : v = j[17], j[18] !== I || j[19] !== D || j[20] !== b ? (y = (0, a.jsxs)("div", {
                    className: "flex justify-end gap-2 px-4 py-3",
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(m.a, {
                            autoFocus: I,
                            color: "primary",
                            size: "composer",
                            disabled: D,
                            onClick: b,
                            children: v
                        })
                    }), null]
                }), j[18] = I, j[19] = D, j[20] = b, j[21] = y) : y = j[21], j[22] !== y || j[23] !== n || j[24] !== g ? (w = (0, a.jsx)(d.a, {
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        role: "presentation",
                        onKeyDown: n,
                        children: [g, y]
                    })
                }), j[22] = y, j[23] = n, j[24] = g, j[25] = w) : w = j[25], w
            }
        })
    }),
    JEWd: (function(e, t, n) {
        var a = n("ABep"),
            l = n("QosV"),
            i = n("on57"),
            r = n("zd8w"),
            s = n("Sm6l"),
            o = n("IxWh"),
            c = n("HOLv"),
            d = n("bIvi"),
            u = n("drfg"),
            m = n("n7Kl");
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, h, x, g, b, v, y, w, j, k = (0, l.c)(38),
                    {
                        ariaInvalid: N,
                        ariaLabel: C,
                        backLabel: S,
                        children: M,
                        forwardLabel: F,
                        header: A,
                        layout: _,
                        role: E,
                        shouldUseReducedMotion: I
                    } = e,
                    L = void 0 === _ ? "form" : _,
                    P = void 0 === E ? "group" : E;
                k[0] !== M ? (t = r.Children.count(M), k[0] = M, k[1] = t) : t = k[1];
                let z = t,
                    O = (0, r.useRef)(null),
                    [D, T] = (0, r.useState)("ltr"),
                    [R, q] = (0, r.useState)(!1),
                    [K, U] = (0, r.useState)(!1);
                k[2] === Symbol.for("react.memo_cache_sentinel") ? (n = e => {
                    let t = "rtl" === getComputedStyle(e).direction ? "rtl" : "ltr";
                    T(t);
                    let {
                        maximum: n,
                        minimum: a
                    } = (0, o.a)(e, t);
                    "rtl" === t ? (q(e.scrollLeft < n - 1), U(e.scrollLeft > a + 1)) : (q(e.scrollLeft > a + 1), U(e.scrollLeft < n - 1))
                }, k[2] = n) : n = k[2];
                let V = (0, d.a)(n),
                    W = e => {
                        if (O.current = e, null == e || 0 === z || (V(e), "u" < typeof ResizeObserver)) return;
                        let t = () => V(e),
                            n = new ResizeObserver(t),
                            a = new MutationObserver(t);
                        return a.observe(e, {
                            childList: !0
                        }), n.observe(e), null != e.firstElementChild && n.observe(e.firstElementChild), null != e.lastElementChild && n.observe(e.lastElementChild), () => {
                            n.disconnect(), a.disconnect(), O.current = null
                        }
                    },
                    B = "form" === L && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                    Z = "gallery" === L && "gap-2";
                k[3] !== B || k[4] !== Z ? (f = (0, i.b)("flex items-center", B, Z), k[3] = B, k[4] = Z, k[5] = f) : f = k[5];
                let Q = [-1, 1].map(e => {
                    let t = -1 === e ? R : K,
                        n = -1 === e ? S : F;
                    return (0, a.jsx)(s.a, {
                        className: (0, i.b)("pointer-events-auto", "form" === L && !t && "invisible"),
                        "aria-label": n,
                        ...p[L],
                        disabled: !t,
                        onClick: () => {
                            let t;
                            null != (t = O.current) && t.scrollTo({
                                left: (0, o.b)(t, e, "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"),
                                behavior: I ? "instant" : "smooth"
                            })
                        },
                        radius: "compact" === L ? void 0 : "full",
                        title: n,
                        uniform: !0,
                        children: (0, a.jsx)(c.a, {
                            className: e === ("rtl" === D ? 1 : -1) ? "rotate-180" : void 0,
                            asset: "gallery" === L ? u.a : m.a
                        })
                    }, e)
                });
                k[6] !== f || k[7] !== Q ? (h = (0, a.jsx)("div", {
                    className: f,
                    children: Q
                }), k[6] = f, k[7] = Q, k[8] = h) : h = k[8];
                let G = h,
                    H = "gallery" === L && "gap-4",
                    $ = "compact" === L && "gap-2",
                    J = "form" === L && "gap-1.5";
                k[9] !== H || k[10] !== $ || k[11] !== J ? (x = (0, i.b)("flex min-w-0 flex-col", H, $, J), k[9] = H, k[10] = $, k[11] = J, k[12] = x) : x = k[12], k[13] !== A || k[14] !== L || k[15] !== G ? (g = null != A || "form" !== L ? (0, a.jsxs)("div", {
                    className: (0, i.b)("flex min-w-0 items-center", "form" === L && "gap-1 px-4 py-1.5", "compact" === L && "gap-3", "gallery" === L && "min-h-9 gap-3"),
                    children: [(0, a.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: A
                    }), "form" !== L ? G : null]
                }) : null, k[13] = A, k[14] = L, k[15] = G, k[16] = g) : g = k[16];
                let Y = "form" === L ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
                    X = "gallery" === L && "gap-3",
                    ee = "compact" === L && "gap-2";
                k[17] !== Y || k[18] !== X || k[19] !== ee ? (b = (0, i.b)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", Y, X, ee), k[17] = Y, k[18] = X, k[19] = ee, k[20] = b) : b = k[20];
                let et = N || void 0;
                k[21] !== V ? (v = e => V(e.currentTarget), k[21] = V, k[22] = v) : v = k[22], k[23] !== C || k[24] !== M || k[25] !== P || k[26] !== W || k[27] !== b || k[28] !== et || k[29] !== v ? (y = (0, a.jsx)("div", {
                    ref: W,
                    className: b,
                    "data-horizontal-scroll": !0,
                    role: P,
                    "aria-invalid": et,
                    "aria-label": C,
                    onScroll: v,
                    children: M
                }), k[23] = C, k[24] = M, k[25] = P, k[26] = W, k[27] = b, k[28] = et, k[29] = v, k[30] = y) : y = k[30];
                let en = "form" === L ? G : null;
                return k[31] !== y || k[32] !== en ? (w = (0, a.jsxs)("div", {
                    className: "relative min-w-0",
                    children: [y, en]
                }), k[31] = y, k[32] = en, k[33] = w) : w = k[33], k[34] !== x || k[35] !== g || k[36] !== w ? (j = (0, a.jsxs)("div", {
                    className: x,
                    children: [g, w]
                }), k[34] = x, k[35] = g, k[36] = w, k[37] = j) : j = k[37], j
            }
        })
    }),
    QWQN: (function(e, t, n) {
        n.d(t, {
            a: () => tx
        });
        var a = n("ABep"),
            l = n("QosV"),
            i = n("MnTr"),
            r = n("on57"),
            s = n("Q840"),
            o = n("UKCO"),
            c = n("I3F6"),
            d = n("zd8w"),
            u = n("Wf1j"),
            m = n("Telb"),
            p = n("Dgwo"),
            f = n("WNfT"),
            h = n("KRWX"),
            x = n("NySd"),
            g = n("M7Ra"),
            b = n("SGsN"),
            v = n("rP0s"),
            y = n("oyxz"),
            w = n("Sm6l"),
            j = n("jDEJ");

        function k(e) {
            let t, n, i, r, s, o, c = (0, l.c)(14),
                {
                    disabled: d,
                    isSubmitting: u,
                    hotkeysEnabled: m,
                    onDecline: p
                } = e;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(y.a, {
                id: "composer.mcpConfirmation.button.decline",
                defaultMessage: "Decline"
            }), c[0] = t) : t = c[0], c[1] !== u || c[2] !== p ? (n = (0, a.jsx)(w.a, {
                color: "ghost",
                size: "composer",
                disabled: u,
                type: "button",
                onClick: p,
                children: t
            }), c[1] = u, c[2] = p, c[3] = n) : n = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(y.a, {
                id: "composer.mcpConfirmation.button.accept",
                defaultMessage: "Accept"
            }), c[4] = i) : i = c[4], c[5] !== m ? (r = m && (0, a.jsx)(f.b, {
                variant: "primary",
                children: (0, j.b)("Enter")
            }), c[5] = m, c[6] = r) : r = c[6], c[7] !== d || c[8] !== u || c[9] !== r ? (s = (0, a.jsxs)(w.a, {
                color: "primary",
                size: "composer",
                type: "submit",
                disabled: d,
                loading: u,
                children: [i, r]
            }), c[7] = d, c[8] = u, c[9] = r, c[10] = s) : s = c[10], c[11] !== n || c[12] !== s ? (o = (0, a.jsxs)("div", {
                className: "flex shrink-0 items-center justify-end gap-2 px-4 py-3",
                children: [n, s]
            }), c[11] = n, c[12] = s, c[13] = o) : o = c[13], o
        }
        var N = n("FVmU"),
            C = n("SZCv"),
            S = n.n(C),
            M = n("VrVA"),
            F = n("Qgfj"),
            A = n("lAQI"),
            _ = n("nxd2");
        let E = "Replace the listed settings in this task’s cloud environment? An empty list clears that setting.\n\nInstance: ",
            I = "\nReason: ",
            L = new Map([
                ["Repositories after approval", "repositories"],
                ["Public internet access", "network_policy"],
                ["Runtime variables after approval", "env_vars"],
                ["Network secrets after approval", "network_secrets"]
            ]),
            P = RegExp(`\\n\\n(?=(?:${[...L.keys()].join("|")})\\n)`),
            z = (0, F.f)({
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
            O = A.K({
                repository_id: A.L().min(1),
                ref: A.L().min(1),
                mount_path: A.L().optional(),
                refresh: A.j().optional(),
                extra_refs: A.g(A.K({
                    branch: A.L().min(1),
                    ref: A.L().min(1)
                })).optional()
            }),
            D = A.L().regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
            T = {
                source: A.K({
                    vault_secret_id: A.L().regex(/^sec_[0-9a-f]{32}$/)
                }),
                optional: A.j().optional()
            },
            R = A.K({
                network_policy: M.n.optional(),
                repositories: A.g(A.K({
                    id: A.L().min(1),
                    value: A.K({
                        repository: O
                    })
                })).optional(),
                env_vars: A.g(A.K({
                    ...T,
                    direct_environment_variable: A.K({
                        variable_name: D
                    })
                })).optional(),
                network_secrets: A.g(A.K({
                    ...T,
                    name: A.L().min(1),
                    target: A.K({
                        environment_variable: A.K({
                            variable_name: D,
                            allowed_domains: A.g(A.L().min(1)).min(1)
                        })
                    })
                })).optional()
            }).refine(e => Object.keys(e).length > 0);

        function q(e, t, n) {
            let a = 0 === t.length;
            return {
                category: e,
                heading: n.formatMessage(z[e], {
                    clear: String(a)
                }),
                destructive: a,
                entries: t
            }
        }

        function K(e, t, n) {
            return n.formatMessage({
                id: "mcpConfirmation.cloudEnvironment.vaultBindingDetail",
                defaultMessage: "{optional, select, true {Optional} other {Required}} · Vault item {vaultItem}"
            }, {
                vaultItem: e,
                optional: String(t)
            })
        }

        function U(e) {
            return e.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/gu, e => {
                let t = e.codePointAt(0);
                return null == t ? e : `\\u{${t.toString(16)}}`
            })
        }

        function V(e, t) {
            if ("unrestricted" === e.type) return {
                category: "network_policy",
                heading: t.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.allowUnrestrictedInternet",
                    defaultMessage: "Allow unrestricted public internet access"
                }),
                entries: []
            };
            let n = "restricted" === e.type ? e.egress_rules.map(e => {
                let {
                    host: t
                } = e;
                return {
                    label: U(t)
                }
            }) : [];
            return "restricted" === e.type && e.presets?.includes("package_managers") ? {
                category: "network_policy",
                heading: t.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.restrictInternetWithPackageManagers",
                    defaultMessage: "{hasDomains, select, true {Allow public internet access only to package managers and listed domains} other {Allow public internet access only to package manager domains}}"
                }, {
                    hasDomains: String(n.length > 0)
                }),
                entries: n
            } : {
                category: "network_policy",
                heading: 0 === n.length ? t.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.turnOffInternet",
                    defaultMessage: "Turn off public internet access"
                }) : t.formatMessage({
                    id: "mcpConfirmation.cloudEnvironment.restrictInternet",
                    defaultMessage: "Allow public internet access only to"
                }),
                entries: n
            }
        }
        var W = n("bf6R");
        let B = {
            network_policy: W.Zd,
            repositories: W.Jd,
            env_vars: W.Gi,
            network_secrets: W.we
        };

        function Z(e) {
            let t, n, i, r, s, o = (0, l.c)(12),
                {
                    review: c
                } = e,
                d = (0, u.a)();
            return o[0] !== c.reason ? (t = (0, a.jsx)("p", {
                className: "whitespace-pre-wrap text-secondary",
                dir: "auto",
                children: c.reason
            }), o[0] = c.reason, o[1] = t) : t = o[1], o[2] !== d ? (n = d.formatMessage({
                id: "mcpConfirmation.cloudEnvironment.proposedChanges",
                defaultMessage: "Proposed changes"
            }), o[2] = d, o[3] = n) : n = o[3], o[4] !== c.changes ? (i = c.changes.map(Q), o[4] = c.changes, o[5] = i) : i = o[5], o[6] !== n || o[7] !== i ? (r = (0, a.jsx)("ul", {
                "aria-label": n,
                className: "flex flex-col gap-3",
                children: i
            }), o[6] = n, o[7] = i, o[8] = r) : r = o[8], o[9] !== t || o[10] !== r ? (s = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-3 text-sm leading-5 wrap-anywhere select-text",
                children: [t, r]
            }), o[9] = t, o[10] = r, o[11] = s) : s = o[11], s
        }

        function Q(e) {
            let {
                category: t,
                heading: n,
                entries: l,
                destructive: i
            } = e, s = i ? W.kj : B[t];
            return (0, a.jsxs)("li", {
                className: "flex items-start gap-2.5",
                children: [(0, a.jsx)("span", {
                    className: (0, r.b)("flex size-6 shrink-0 items-center justify-center rounded-md bg-text/5", i ? "text-danger" : "text-secondary"),
                    children: (0, a.jsx)(s, {
                        "aria-hidden": "true"
                    })
                }), (0, a.jsxs)("div", {
                    className: "min-w-0",
                    children: [(0, a.jsx)("h3", {
                        className: "pt-0.5 font-medium",
                        children: n
                    }), (0, a.jsx)(G, {
                        entries: l
                    })]
                })]
            }, t)
        }

        function G(e) {
            let t, n, i, r, s, o, c, d, u, m, p = (0, l.c)(23),
                {
                    entries: f
                } = e;
            if (p[0] !== f ? ([t, ...n] = f, p[0] = f, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), null == t) return null;
            if (!t.detail && 0 === n.length) {
                let e;
                return p[3] !== t ? (e = (0, a.jsx)("div", {
                    className: "mt-0.5",
                    children: (0, a.jsx)($, {
                        entry: t
                    })
                }), p[3] = t, p[4] = e) : e = p[4], e
            }
            return p[5] !== t ? (i = (0, a.jsx)($, {
                entry: t
            }), p[5] = t, p[6] = i) : i = p[6], p[7] !== n.length ? (r = n.length > 0 && (0, a.jsx)(y.a, {
                id: "mcpConfirmation.cloudEnvironment.moreEntries",
                defaultMessage: "+{count, number} more",
                values: {
                    count: n.length
                }
            }), p[7] = n.length, p[8] = r) : r = p[8], p[9] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(W.jc, {
                "aria-hidden": "true",
                className: "shrink-0 group-open:rotate-90 rtl:rotate-180 rtl:group-open:rotate-90"
            }), p[9] = s) : s = p[9], p[10] !== r ? (o = (0, a.jsxs)("span", {
                className: "inline-flex items-center text-secondary group-hover:text-default",
                children: [r, s]
            }), p[10] = r, p[11] = o) : o = p[11], p[12] !== i || p[13] !== o ? (c = (0, a.jsxs)("summary", {
                className: "flex w-fit max-w-full cursor-interaction list-none flex-wrap items-center gap-x-1.5 gap-y-1 rounded-sm focus-visible:outline-2 focus-visible:outline-ring",
                children: [i, o]
            }), p[12] = i, p[13] = o, p[14] = c) : c = p[14], p[15] !== t.detail ? (d = t.detail && (0, a.jsx)(J, {
                detail: t.detail
            }), p[15] = t.detail, p[16] = d) : d = p[16], p[17] !== n ? (u = n.length > 0 && (0, a.jsx)("ul", {
                className: "mt-1 flex flex-col gap-1.5",
                children: n.map(H)
            }), p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== d || p[21] !== u ? (m = (0, a.jsxs)("details", {
                className: "group mt-0.5",
                children: [c, d, u]
            }), p[19] = c, p[20] = d, p[21] = u, p[22] = m) : m = p[22], m
        }

        function H(e, t) {
            return (0, a.jsxs)("li", {
                children: [(0, a.jsx)($, {
                    entry: e
                }), e.detail && (0, a.jsx)(J, {
                    detail: e.detail
                })]
            }, t)
        }

        function $(e) {
            let t, n, i, r = (0, l.c)(8),
                {
                    entry: s
                } = e,
                {
                    label: o,
                    gitRef: c
                } = s,
                d = null != c ? "font-medium" : "text-secondary";
            return r[0] !== o || r[1] !== d ? (t = (0, a.jsx)("bdi", {
                className: d,
                children: o
            }), r[0] = o, r[1] = d, r[2] = t) : t = r[2], r[3] !== c ? (n = null != c && (0, a.jsxs)("span", {
                className: "inline-flex max-w-full items-start gap-1 rounded-md border border-subtle px-1.5 text-xs leading-4 text-secondary",
                children: [(0, a.jsx)(W.Ab, {
                    "aria-hidden": "true",
                    className: "shrink-0"
                }), (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(y.a, {
                        id: "mcpConfirmation.cloudEnvironment.gitRef",
                        defaultMessage: "Git ref"
                    })
                }), (0, a.jsx)("code", {
                    className: "min-w-0 font-mono",
                    dir: "auto",
                    children: c
                })]
            }), r[3] = c, r[4] = n) : n = r[4], r[5] !== t || r[6] !== n ? (i = (0, a.jsxs)("span", {
                className: "inline-flex max-w-full min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
                children: [t, n]
            }), r[5] = t, r[6] = n, r[7] = i) : i = r[7], i
        }

        function J(e) {
            let t, n = (0, l.c)(2),
                {
                    detail: i
                } = e;
            return n[0] !== i ? (t = (0, a.jsx)("p", {
                className: "text-xs leading-4 whitespace-pre-wrap text-secondary",
                dir: "auto",
                children: i
            }), n[0] = i, n[1] = t) : t = n[1], t
        }
        var Y = n("OWtl"),
            X = n("tSEg"),
            ee = n("LVsP"),
            et = n("pHQ8"),
            en = n("AqHC"),
            ea = n("q475"),
            el = n("K0rn"),
            ei = n("IRP0");

        function er(e) {
            let t = (0, et.c)(e.schema);
            return {
                kind: e.kind,
                customDrafts: {},
                values: (0, et.a)(t.flatMap(e => {
                    let {
                        schema: t,
                        ...n
                    } = e;
                    return (0, ea.c)(t) || (0, el.b)(t) ? [] : [{
                        ...n,
                        schema: t
                    }]
                })),
                fileOptions: Object.fromEntries(t.flatMap(e => {
                    let {
                        name: t,
                        schema: n
                    } = e;
                    return (0, ea.c)(n) ? [
                        [t, (0, ea.a)(n)]
                    ] : []
                }))
            }
        }

        function es(e, t) {
            return t?.selected && t.text.length > 0 && Array.isArray(e) ? [...e, t.text] : e
        }
        var eo = n("tO3J");

        function ec(e, t) {
            return !e.defaultPrevented && !e.nativeEvent.isComposing && 229 !== e.nativeEvent.keyCode && !!(0, eo.b)(e.nativeEvent, "Enter") && (e.preventDefault(), e.repeat || t(), !0)
        }
        var ed = n("vPGU"),
            eu = n("slpy"),
            em = n("g2Gi"),
            ep = n("bqtn"),
            ef = n("HOLv"),
            eh = n("emei");

        function ex(e) {
            let t, n = (0, l.c)(4),
                {
                    options: i,
                    disabled: r,
                    onAccept: s
                } = e;
            return n[0] !== r || n[1] !== s || n[2] !== i ? (t = (0, a.jsx)("div", {
                className: "me-auto max-w-full min-w-0",
                children: 1 === i.length ? (0, a.jsx)(eu.a, {
                    content: (0, a.jsxs)(a.Fragment, {
                        children: [i[0].title, i[0].description && (0, a.jsx)("p", {
                            children: i[0].description
                        })]
                    }),
                    children: (0, a.jsx)(w.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        className: "max-w-full",
                        disabled: r,
                        "aria-description": i[0].description,
                        onClick: () => s(i[0].const),
                        children: (0, a.jsx)("span", {
                            className: "min-w-0 truncate",
                            children: i[0].title
                        })
                    })
                }) : (0, a.jsx)(ep.a, {
                    align: "start",
                    disabled: r,
                    triggerButton: (0, a.jsxs)(w.a, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        disabled: r,
                        children: [(0, a.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.moreAcceptActions",
                            defaultMessage: "More actions"
                        }), (0, a.jsx)(ef.a, {
                            "aria-hidden": !1,
                            asset: eh.a
                        })]
                    }),
                    children: i.map(e => (0, a.jsx)(ep.c.Item, {
                        disabled: r,
                        allowWrap: !0,
                        subTextAllowWrap: !0,
                        SubText: null == e.description ? null : (0, a.jsx)(a.Fragment, {
                            children: e.description
                        }),
                        onSelect: () => s(e.const),
                        children: e.title
                    }, e.const))
                })
            }), n[0] = r, n[1] = s, n[2] = i, n[3] = t) : t = n[3], t
        }

        function eg(e) {
            let t, n, i, s, o, c, d, u, m = (0, l.c)(49),
                {
                    autoResolution: p,
                    disabled: h,
                    isSubmitting: x,
                    submitDisabled: g,
                    acceptOptions: b,
                    primaryActionRef: v,
                    fieldCount: k,
                    isLastGroup: N,
                    onBack: C,
                    hotkeysEnabled: S,
                    isStandardForm: M,
                    showSubmit: F,
                    showHeader: A,
                    onCancel: _,
                    onDecline: E,
                    onDismissLegacyImagePicker: I,
                    onViewAll: L
                } = e,
                P = void 0 !== x && x,
                z = b?.required === !0 && b.options.length > 1,
                O = b?.required ? b.options[0] : void 0;
            m[0] !== b?.options || m[1] !== b?.options.slice || m[2] !== O ? (t = b?.options.slice(+(null != O)) ?? [], m[0] = b?.options, m[1] = b?.options.slice, m[2] = O, m[3] = t) : t = m[3];
            let D = t;
            if (null != I) {
                let e, t = p?.deadlineMs ?? "no-deadline",
                    l = p?.deadlineMs,
                    i = p?.nowMs;
                m[4] !== P || m[5] !== I || m[6] !== t || m[7] !== l || m[8] !== i ? (e = (0, a.jsx)(em.a, {
                    disabled: P,
                    deadlineMs: l,
                    nowMs: i,
                    variant: "button",
                    onDismiss: I
                }, t), m[4] = P, m[5] = I, m[6] = t, m[7] = l, m[8] = i, m[9] = e) : e = m[9], n = e
            } else {
                let e, t;
                m[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.deny",
                    defaultMessage: "Deny"
                }), m[10] = e) : e = m[10], m[11] !== h || m[12] !== E ? (t = (0, a.jsx)(w.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: h,
                    onClick: E,
                    children: e
                }), m[11] = h, m[12] = E, m[13] = t) : t = m[13], n = t
            }
            return m[14] !== h || m[15] !== C ? (i = null != C && (0, a.jsx)(w.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: h,
                onClick: C,
                children: (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.back",
                    defaultMessage: "Back"
                })
            }), m[14] = h, m[15] = C, m[16] = i) : i = m[16], m[17] !== b || m[18] !== h || m[19] !== L ? (s = null != L ? (0, a.jsx)("div", {
                className: null == b ? "me-auto" : void 0,
                children: (0, a.jsxs)(w.a, {
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    disabled: h,
                    onClick: L,
                    children: [(0, a.jsx)(W.bi, {}), (0, a.jsx)(y.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all"
                    })]
                })
            }) : null, m[17] = b, m[18] = h, m[19] = L, m[20] = s) : s = m[20], m[21] !== P || m[22] !== _ || m[23] !== I || m[24] !== A ? (o = !A && null == I && (0, a.jsx)(w.a, {
                color: "ghost",
                size: "composer",
                disabled: P,
                onClick: _,
                children: (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.cancel",
                    defaultMessage: "Cancel"
                })
            }), m[21] = P, m[22] = _, m[23] = I, m[24] = A, m[25] = o) : o = m[25], m[26] !== b || m[27] !== D || m[28] !== g ? (c = null != b && D.length > 0 && (0, a.jsx)(ex, {
                options: D,
                disabled: g,
                onAccept: b.onSelect
            }), m[26] = b, m[27] = D, m[28] = g, m[29] = c) : c = m[29], m[30] !== b || m[31] !== k || m[32] !== S || m[33] !== N || m[34] !== M || m[35] !== P || m[36] !== v || m[37] !== O || m[38] !== z || m[39] !== F || m[40] !== g ? (d = (null != b || F) && (0, a.jsx)(eu.a, {
                content: O && (0, a.jsxs)(a.Fragment, {
                    children: [O.title, O.description && (0, a.jsx)("p", {
                        children: O.description
                    })]
                }),
                children: (0, a.jsxs)(w.a, {
                    autoFocus: S && 0 === k,
                    className: "max-w-full",
                    color: "primary",
                    size: "composer",
                    type: z ? "button" : "submit",
                    ref: v,
                    onClick: null != O && null != b && z ? () => b.onSelect(O.const) : void 0,
                    "aria-description": O?.description,
                    disabled: g,
                    loading: P,
                    children: [(0, a.jsx)("span", {
                        className: (0, r.b)("min-w-0 truncate", M && "text-sm font-medium"),
                        children: N ? O?.title ?? (0, a.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept"
                        }) : (0, a.jsx)(y.a, {
                            id: "composer.mcpFormElicitation.next",
                            defaultMessage: "Next"
                        })
                    }), S && !z && (0, a.jsx)(f.b, {
                        variant: "primary",
                        children: (0, j.b)("Enter")
                    })]
                })
            }), m[30] = b, m[31] = k, m[32] = S, m[33] = N, m[34] = M, m[35] = P, m[36] = v, m[37] = O, m[38] = z, m[39] = F, m[40] = g, m[41] = d) : d = m[41], m[42] !== n || m[43] !== i || m[44] !== s || m[45] !== o || m[46] !== c || m[47] !== d ? (u = (0, a.jsxs)("div", {
                className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
                children: [i, s, o, c, n, d]
            }), m[42] = n, m[43] = i, m[44] = s, m[45] = o, m[46] = c, m[47] = d, m[48] = u) : u = m[48], u
        }
        var eb = n("Wyro"),
            ev = n.n(eb),
            ey = n("Qr2V"),
            ew = n("zLIa"),
            ej = n("E6P3"),
            ek = n("T9RQ"),
            eN = n("ue8o"),
            eC = n("zSQm"),
            eS = n.p + "assets/icon.6b02567b2b.png",
            eM = n.p + "assets/icon.4e392f38ad.png",
            eF = n.p + "assets/icon.9b2a0253b8.png";
        let eA = {
            "application/msword": eS,
            "application/vnd.google-apps.document": eS,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": eS,
            "text/markdown": eS,
            "text/plain": eS,
            "application/vnd.google-apps.presentation": eM,
            "application/vnd.ms-powerpoint": eM,
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": eM,
            "application/vnd.google-apps.spreadsheet": eF,
            "application/vnd.ms-excel": eF,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": eF,
            "text/csv": eF,
            "text/tab-separated-values": eF
        };

        function e_(e) {
            let t, n, i, s, o, c = (0, l.c)(22),
                {
                    layout: u,
                    src: m,
                    mimeType: p
                } = e,
                f = void 0 === u ? "thumbnail" : u,
                [h, x] = (0, d.useState)(),
                g = null != m && URL.canParse(m) && "https:" === new URL(m).protocol ? m : void 0,
                {
                    safeUrl: b
                } = (0, eN.d)(g, null != g);
            c[0] !== b || c[1] !== m ? (t = null != m && (0, eC.c)(m) ? m : b, c[0] = b, c[1] = m, c[2] = t) : t = c[2];
            let v = t,
                y = p?.split(";")[0]?.trim().toLowerCase(),
                w = eA[y ?? ""],
                j = "icon" === f ? "size-5" : "size-10";
            c[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(W.Vc, {}), c[3] = n) : n = c[3];
            let k = n;
            if (null != w) {
                let e, t;
                c[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(W.Vc, {}), c[4] = e) : e = c[4], c[5] !== j || c[6] !== w ? (t = (0, a.jsx)(ej.a, {
                    className: j,
                    alt: "",
                    fallback: e,
                    src: w
                }), c[5] = j, c[6] = w, c[7] = t) : t = c[7], k = t
            } else if ("text/html" === y || "application/xhtml+xml" === y) {
                let e;
                c[8] !== j ? (e = (0, a.jsx)(ek.a, {
                    className: j
                }), c[8] = j, c[9] = e) : e = c[9], k = e
            }
            let N = "card" === f || "card-icon" === f,
                C = "icon" === f,
                S = "thumbnail" === f;
            return c[10] !== N || c[11] !== C || c[12] !== S ? (i = (0, r.b)("flex items-center justify-center overflow-hidden", {
                "h-full w-full": N,
                "size-5 shrink-0 rounded-xs": C,
                "size-10 shrink-0 rounded-md bg-surface": S
            }), c[10] = N, c[11] = C, c[12] = S, c[13] = i) : i = c[13], c[14] !== h || c[15] !== k || c[16] !== v || c[17] !== f ? (s = null == v || h === v ? k : (0, a.jsx)("img", {
                alt: "",
                className: (0, r.b)("card-icon" === f ? "size-10" : "h-full w-full", "icon" === f || "card-icon" === f ? "object-contain" : "object-scale-down", "card" === f && "block"),
                decoding: "async",
                draggable: !1,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: v,
                onError: () => x(v)
            }), c[14] = h, c[15] = k, c[16] = v, c[17] = f, c[18] = s) : s = c[18], c[19] !== i || c[20] !== s ? (o = (0, a.jsx)("span", {
                className: i,
                children: s
            }), c[19] = i, c[20] = s, c[21] = o) : o = c[21], o
        }

        function eE(e) {
            let t, n, i, r, s, o, c, u, m = (0, l.c)(61),
                {
                    autoFocus: p,
                    submitOnEnter: f,
                    showOptionNumbers: h,
                    customOption: x,
                    invalid: g,
                    multiple: b,
                    options: v,
                    value: y,
                    onChange: w
                } = e,
                j = void 0 === f || f,
                k = (0, d.useId)(),
                N = (void 0 === h || h) && v.length > 1,
                C = b ? ey.a : ey.b,
                S = "string" == typeof y ? y : void 0;
            m[0] !== y ? (t = Array.isArray(y) ? y : [], m[0] = y, m[1] = t) : t = m[1];
            let M = t;
            m[2] !== v ? (n = v.some(eI), m[2] = v, m[3] = n) : n = m[3];
            let F = n;
            m[4] !== b || m[5] !== v || m[6] !== S ? (i = b ? 0 : Math.max(0, v.findIndex(e => e.const === S)), m[4] = b, m[5] = v, m[6] = S, m[7] = i) : i = m[7];
            let A = i;
            m[8] !== x || m[9] !== b || m[10] !== w || m[11] !== v || m[12] !== j ? (r = e => {
                let t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) || !t.matches('input[type="radio"], button[role="checkbox"]') || ec(e, () => {
                        b || !j || t instanceof HTMLInputElement && !t.checked ? t.click() : t.form?.requestSubmit()
                    }) || e.defaultPrevented || e.nativeEvent.isComposing || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || "ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let n = Array.from(e.currentTarget.querySelectorAll('input[type="radio"], button[role="checkbox"]')),
                    a = (n.indexOf(t) + ("ArrowDown" === e.key ? 1 : -1) + n.length) % n.length,
                    l = n[a];
                if (null != l && (e.preventDefault(), l.focus(), !b)) {
                    let e = v[a];
                    null != e ? w(e.const) : x?.onSelect(!0)
                }
            }, m[8] = x, m[9] = b, m[10] = w, m[11] = v, m[12] = j, m[13] = r) : r = m[13];
            let _ = r;
            if (m[14] !== C || m[15] !== p || m[16] !== x?.selected || m[17] !== A || m[18] !== F || m[19] !== k || m[20] !== g || m[21] !== b || m[22] !== w || m[23] !== v || m[24] !== S || m[25] !== M || m[26] !== N) {
                let e;
                m[28] !== C || m[29] !== p || m[30] !== x?.selected || m[31] !== A || m[32] !== F || m[33] !== k || m[34] !== g || m[35] !== b || m[36] !== w || m[37] !== S || m[38] !== M || m[39] !== N ? (e = (e, t) => {
                    let n = M.indexOf(e.const),
                        l = b ? -1 !== n : !x?.selected && S === e.const;
                    return (0, a.jsxs)(C, {
                        autoFocus: p && !x?.selected && t === A,
                        checked: l,
                        invalid: g,
                        name: k,
                        type: b ? "checkbox" : "radio",
                        value: e.const,
                        onChange: () => {
                            b ? w(l ? M.filter((e, t) => t !== n) : [...M, e.const]) : w(e.const)
                        },
                        children: [!b && (0, a.jsx)(ey.c, {
                            selected: l,
                            showNumber: N,
                            variant: "number",
                            index: t + 1,
                            verticalAlignment: "start"
                        }), F ? (0, a.jsx)(e_, {
                            src: e["x-openai-thumbnail"]?.src
                        }) : null, (0, a.jsxs)("span", {
                            className: "flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 @max-5xl/request-card:flex-col @max-5xl/request-card:items-stretch",
                            children: [(0, a.jsx)("span", {
                                className: "min-w-0 text-sm font-medium wrap-anywhere",
                                children: e.title
                            }), null == e.description ? null : (0, a.jsx)("span", {
                                className: "min-w-0 text-sm wrap-anywhere text-codex-description",
                                children: e.description
                            })]
                        })]
                    }, e.const)
                }, m[28] = C, m[29] = p, m[30] = x?.selected, m[31] = A, m[32] = F, m[33] = k, m[34] = g, m[35] = b, m[36] = w, m[37] = S, m[38] = M, m[39] = N, m[40] = e) : e = m[40], s = v.map(e), m[14] = C, m[15] = p, m[16] = x?.selected, m[17] = A, m[18] = F, m[19] = k, m[20] = g, m[21] = b, m[22] = w, m[23] = v, m[24] = S, m[25] = M, m[26] = N, m[27] = s
            } else s = m[27];
            return m[41] !== x || m[42] !== g || m[43] !== b || m[44] !== w || m[45] !== v || m[46] !== M ? (o = null != x && b ? M.map((e, t) => v.some(t => t.const === e) && M.indexOf(e) === t ? null : (0, a.jsx)(ey.a, {
                autoFocus: !1,
                checked: !0,
                invalid: g,
                onChange: () => w(M.filter((e, n) => n !== t)),
                children: (0, a.jsx)("span", {
                    className: "min-w-0 text-sm font-medium wrap-anywhere",
                    children: v.find(t => t.const === e)?.title ?? e
                })
            }, t)) : null, m[41] = x, m[42] = g, m[43] = b, m[44] = w, m[45] = v, m[46] = M, m[47] = o) : o = m[47], m[48] !== C || m[49] !== p || m[50] !== x || m[51] !== k || m[52] !== g || m[53] !== b || m[54] !== v.length ? (c = null != x ? (0, a.jsx)("div", {
                "data-mcp-form-custom-choice": !0,
                children: (0, a.jsx)(C, {
                    accessibilityLabel: x.label,
                    autoFocus: p && (0 === v.length || x.selected),
                    checked: x.selected,
                    invalid: g,
                    name: k,
                    type: b ? "checkbox" : "radio",
                    onChange: () => x.onSelect(!b || !x.selected),
                    editor: x.editor,
                    children: !b && (0, a.jsx)(ey.c, {
                        selected: x.selected,
                        variant: "custom"
                    })
                })
            }) : null, m[48] = C, m[49] = p, m[50] = x, m[51] = k, m[52] = g, m[53] = b, m[54] = v.length, m[55] = c) : c = m[55], m[56] !== _ || m[57] !== s || m[58] !== o || m[59] !== c ? (u = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                "data-mcp-form-choices": !0,
                role: "group",
                onKeyDownCapture: _,
                children: [s, o, c]
            }), m[56] = _, m[57] = s, m[58] = o, m[59] = c, m[60] = u) : u = m[60], u
        }

        function eI(e) {
            return null != e["x-openai-thumbnail"]
        }

        function eL(e) {
            let t, n, i, r, s, o, c = (0, l.c)(29),
                {
                    schema: d,
                    value: u
                } = e;
            if ("array" === d.type && Array.isArray(u) && u.length >= Number(d.minItems ?? 0) && (null == d.maxItems || u.length <= Number(d.maxItems)) && "type" in d.items && "string" === d.items.type && !("x-openai-input" in d.items)) {
                let e;
                return c[0] !== d.items ? (e = (0, a.jsx)(eL, {
                    schema: d.items
                }), c[0] = d.items, c[1] = e) : e = c[1], e
            }
            let m = "string" !== d.type || "x-openai-input" in d ? null : d,
                p = "number" === d.type || "integer" === d.type ? d : null,
                f = p?.minimum,
                h = p?.maximum;
            "array" === d.type ? (f = null == d.minItems || 0 === Number(d.minItems) ? void 0 : Number(d.minItems), h = null == d.maxItems ? void 0 : Number(d.maxItems)) : null != m && ("minLength" in m && (f = m.minLength || void 0), "maxLength" in m && (h = m.maxLength));
            let x = "none";
            null != f && null != h ? x = f === h ? "exact" : "both" : null != f ? x = "minimum" : null != h && (x = "maximum");
            let g = null != m && "format" in m ? m.format : void 0;
            return c[2] !== x || c[3] !== h || c[4] !== f || c[5] !== d.type ? (t = "array" === d.type && "none" !== x ? (0, a.jsx)(y.a, {
                id: "composer.mcpFormElicitation.selectionCount",
                defaultMessage: "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                values: {
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[2] = x, c[3] = h, c[4] = f, c[5] = d.type, c[6] = t) : t = c[6], c[7] !== x || c[8] !== h || c[9] !== f || c[10] !== m ? (n = null != m && "none" !== x ? (0, a.jsx)("div", {
                children: (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.textLength",
                    defaultMessage: "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                    values: {
                        bounds: x,
                        minimum: f,
                        maximum: h
                    }
                })
            }) : null, c[7] = x, c[8] = h, c[9] = f, c[10] = m, c[11] = n) : n = c[11], c[12] !== x || c[13] !== h || c[14] !== f || c[15] !== p ? (i = null != p ? (0, a.jsx)(y.a, {
                id: "composer.mcpFormElicitation.numberRange",
                defaultMessage: "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                values: {
                    kind: p.type,
                    bounds: x,
                    minimum: f,
                    maximum: h
                }
            }) : null, c[12] = x, c[13] = h, c[14] = f, c[15] = p, c[16] = i) : i = c[16], c[17] !== g ? (r = null != g ? (0, a.jsx)("div", {
                children: (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.requiredFormat",
                    defaultMessage: "Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}",
                    values: {
                        format: "date-time" === g ? "datetime" : g
                    }
                })
            }) : null, c[17] = g, c[18] = r) : r = c[18], c[19] !== x || c[20] !== g || c[21] !== p ? (s = "none" === x && null == p && null == g ? (0, a.jsx)(y.a, {
                id: "composer.mcpFormElicitation.invalidField",
                defaultMessage: "Check this answer and try again"
            }) : null, c[19] = x, c[20] = g, c[21] = p, c[22] = s) : s = c[22], c[23] !== t || c[24] !== n || c[25] !== i || c[26] !== r || c[27] !== s ? (o = (0, a.jsxs)("div", {
                role: "alert",
                children: [t, n, i, r, s]
            }), c[23] = t, c[24] = n, c[25] = i, c[26] = r, c[27] = s, c[28] = o) : o = c[28], o
        }

        function eP(e) {
            let t, n = (0, l.c)(15),
                {
                    id: i,
                    autoFocus: s,
                    disabled: o,
                    invalid: c,
                    label: d,
                    placeholder: u,
                    variant: m,
                    format: p,
                    maxLength: f,
                    value: h,
                    onChange: x,
                    onKeyDown: g,
                    onFocus: b
                } = e,
                v = void 0 !== o && o,
                y = void 0 === m ? "default" : m,
                w = (f ?? 0) >= 160,
                j = "choice" === y ? "block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary" : "w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger";
            return n[0] !== s || n[1] !== v || n[2] !== j || n[3] !== p || n[4] !== i || n[5] !== c || n[6] !== w || n[7] !== d || n[8] !== x || n[9] !== b || n[10] !== g || n[11] !== u || n[12] !== h || n[13] !== y ? (t = null == p ? (0, a.jsx)("textarea", {
                id: i,
                ref: s ? ez : void 0,
                autoFocus: s,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: u,
                className: (0, r.b)(j, "[field-sizing:content] max-h-48 resize-none overflow-y-auto", "default" === y && "py-2", w ? "min-h-20" : "default" === y && "min-h-8"),
                rows: w ? 3 : 1,
                value: h,
                onChange: e => x(e.currentTarget.value),
                onKeyDown: g,
                onFocus: b
            }) : (0, a.jsx)("input", {
                id: i,
                autoFocus: s,
                disabled: v,
                "aria-invalid": c || void 0,
                "aria-label": d,
                placeholder: u,
                className: (0, r.b)(j, "default" === y && "h-8"),
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
            }), n[0] = s, n[1] = v, n[2] = j, n[3] = p, n[4] = i, n[5] = c, n[6] = w, n[7] = d, n[8] = x, n[9] = b, n[10] = g, n[11] = u, n[12] = h, n[13] = y, n[14] = t) : t = n[14], t
        }

        function ez(e) {
            null != e && e.setSelectionRange(e.value.length, e.value.length)
        }

        function eO(e) {
            let t, n, i, r, s, o, c, d, m, p, f, h, x, g = (0, l.c)(62),
                {
                    autoFocus: b,
                    showOptionNumbers: v,
                    disabled: y,
                    label: w,
                    format: j,
                    maxLength: k,
                    invalid: N,
                    multiple: C,
                    options: S,
                    value: M,
                    draft: F,
                    onDraftChange: A,
                    onChange: _
                } = e,
                E = void 0 === v || v,
                I = (0, u.a)(),
                L = C || "string" != typeof M || S.some(e => e.const === M) ? "" : M;
            g[0] !== F || g[1] !== L ? (t = F ?? {
                text: L,
                selected: "" !== L
            }, g[0] = F, g[1] = L, g[2] = t) : t = g[2];
            let P = t;
            g[3] !== I ? (n = I.formatMessage({
                id: "composer.mcpFormElicitation.customChoice",
                defaultMessage: "Something else"
            }), g[3] = I, g[4] = n) : n = g[4];
            let z = n;
            g[5] !== P || g[6] !== C || g[7] !== _ || g[8] !== A ? (i = e => {
                e !== P.selected && (A({
                    ...P,
                    selected: e
                }), C || _(e ? P.text : ""))
            }, g[5] = P, g[6] = C, g[7] = _, g[8] = A, g[9] = i) : i = g[9];
            let O = i;
            g[10] !== P.selected || g[11] !== P.text || g[12] !== _ || g[13] !== A || g[14] !== M ? (r = () => {
                P.selected && "" !== P.text && (_([...Array.isArray(M) ? M : [], P.text]), A({
                    text: "",
                    selected: !1
                }))
            }, g[10] = P.selected, g[11] = P.text, g[12] = _, g[13] = A, g[14] = M, g[15] = r) : r = g[15];
            let D = r;
            g[16] !== P || g[17] !== C || g[18] !== _ || g[19] !== A ? (s = e => {
                C || A({
                    ...P,
                    selected: !1
                }), _(e)
            }, g[16] = P, g[17] = C, g[18] = _, g[19] = A, g[20] = s) : s = g[20];
            let T = P.selected;
            return g[21] !== I ? (o = I.formatMessage({
                id: "composer.mcpFormElicitation.customPlaceholder",
                defaultMessage: "Or write your own response"
            }), g[21] = I, g[22] = o) : o = g[22], g[23] !== O ? (c = () => O(!0), g[23] = O, g[24] = c) : c = g[24], g[25] !== C || g[26] !== _ || g[27] !== A ? (d = e => {
                A({
                    text: e,
                    selected: !0
                }), C || _(e)
            }, g[25] = C, g[26] = _, g[27] = A, g[28] = d) : d = g[28], g[29] !== D || g[30] !== P.selected || g[31] !== P.text || g[32] !== C ? (m = e => {
                if (!C) {
                    "date" !== e.currentTarget.type && ec(e, () => e.currentTarget.form?.requestSubmit());
                    return
                }
                P.selected && "" !== P.text && ec(e, D) && e.stopPropagation()
            }, g[29] = D, g[30] = P.selected, g[31] = P.text, g[32] = C, g[33] = m) : m = g[33], g[34] !== P.text || g[35] !== y || g[36] !== j || g[37] !== N || g[38] !== w || g[39] !== k || g[40] !== d || g[41] !== m || g[42] !== o || g[43] !== c ? (p = (0, a.jsx)(eP, {
                autoFocus: !1,
                disabled: y,
                label: w,
                placeholder: o,
                variant: "choice",
                invalid: N,
                format: j,
                maxLength: k,
                value: P.text,
                onFocus: c,
                onChange: d,
                onKeyDown: m
            }), g[34] = P.text, g[35] = y, g[36] = j, g[37] = N, g[38] = w, g[39] = k, g[40] = d, g[41] = m, g[42] = o, g[43] = c, g[44] = p) : p = g[44], g[45] !== P.selected || g[46] !== z || g[47] !== O || g[48] !== p ? (f = {
                label: z,
                selected: T,
                onSelect: O,
                editor: p
            }, g[45] = P.selected, g[46] = z, g[47] = O, g[48] = p, g[49] = f) : f = g[49], g[50] !== b || g[51] !== N || g[52] !== C || g[53] !== S || g[54] !== E || g[55] !== f || g[56] !== s || g[57] !== M ? (h = (0, a.jsx)(eE, {
                autoFocus: b,
                submitOnEnter: !1,
                showOptionNumbers: E,
                invalid: N,
                multiple: C,
                options: S,
                value: M,
                onChange: s,
                customOption: f
            }), g[50] = b, g[51] = N, g[52] = C, g[53] = S, g[54] = E, g[55] = f, g[56] = s, g[57] = M, g[58] = h) : h = g[58], g[59] !== y || g[60] !== h ? (x = (0, a.jsx)("fieldset", {
                disabled: y,
                className: "min-w-0",
                children: h
            }), g[59] = y, g[60] = h, g[61] = x) : x = g[61], x
        }

        function eD(e) {
            let t, n, i, s = (0, l.c)(101),
                {
                    autoFocus: o,
                    showOptionNumbers: c,
                    disabled: m,
                    field: p,
                    hideLabel: f,
                    hideDescription: h,
                    invalid: x,
                    value: g,
                    customDraft: b,
                    onCustomDraftChange: v,
                    onChange: y
                } = e,
                w = void 0 === c || c,
                j = void 0 !== m && m,
                k = (0, d.useId)(),
                N = (0, u.a)();
            s[0] !== p.name || s[1] !== p.schema.title ? (t = p.schema.title ?? ev()(p.name), s[0] = p.name, s[1] = p.schema.title, s[2] = t) : t = s[2];
            let C = t,
                S = !f && null != p.schema.title,
                M = void 0 !== h && h ? null : p.schema.description ?? null,
                F = "boolean" === p.schema.type && p.required && null == p.schema.default;
            s[3] !== p.schema || s[4] !== F ? (n = "array" === p.schema.type || (0, et.e)(p.schema) || F, s[3] = p.schema, s[4] = F, s[5] = n) : n = s[5];
            let A = n,
                _ = "array" === p.schema.type ? p.schema.items : p.schema,
                E = A && (0, et.f)(p.schema) ? _ : null;
            s[6] !== b || s[7] !== p.schema || s[8] !== x || s[9] !== A || s[10] !== g ? (i = x ? (0, a.jsx)("div", {
                className: (0, r.b)("pt-1 text-size-chat-sm text-danger", (A || "boolean" === p.schema.type) && "px-2"),
                children: (0, a.jsx)(eL, {
                    schema: p.schema,
                    value: es(g, b)
                })
            }) : null, s[6] = b, s[7] = p.schema, s[8] = x, s[9] = A, s[10] = g, s[11] = i) : i = s[11];
            let I = i;
            if ("array" === p.schema.type || (0, et.e)(p.schema) || F) {
                let e, t, n, l;
                return s[12] !== C || s[13] !== S ? (e = S && (0, a.jsx)("legend", {
                    className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                    children: C
                }), s[12] = C, s[13] = S, s[14] = e) : e = s[14], s[15] !== M ? (t = (0, a.jsx)(eK, {
                    description: M
                }), s[15] = M, s[16] = t) : t = s[16], s[17] !== o || s[18] !== b || s[19] !== j || s[20] !== p.schema || s[21] !== N || s[22] !== x || s[23] !== C || s[24] !== y || s[25] !== v || s[26] !== F || s[27] !== w || s[28] !== E || s[29] !== g ? (n = null != E ? (0, a.jsx)(eO, {
                    showOptionNumbers: w,
                    autoFocus: o,
                    disabled: j,
                    label: C,
                    format: "format" in E ? E.format : void 0,
                    maxLength: "maxLength" in E ? E.maxLength : void 0,
                    invalid: x,
                    multiple: "array" === p.schema.type,
                    options: (0, et.d)(p.schema),
                    value: g,
                    draft: b,
                    onDraftChange: v,
                    onChange: y
                }) : (0, a.jsx)(eE, {
                    showOptionNumbers: w && !F,
                    autoFocus: o,
                    invalid: x,
                    multiple: "array" === p.schema.type,
                    options: F ? [{
                        const: "true",
                        title: N.formatMessage({
                            id: "composer.mcpFormElicitation.booleanYes",
                            defaultMessage: "Yes"
                        })
                    }, {
                        const: "false",
                        title: N.formatMessage({
                            id: "composer.mcpFormElicitation.booleanNo",
                            defaultMessage: "No"
                        })
                    }] : (0, et.d)(p.schema),
                    value: F && "boolean" == typeof g ? String(g) : g,
                    onChange: F ? e => y("true" === e) : y
                }), s[17] = o, s[18] = b, s[19] = j, s[20] = p.schema, s[21] = N, s[22] = x, s[23] = C, s[24] = y, s[25] = v, s[26] = F, s[27] = w, s[28] = E, s[29] = g, s[30] = n) : n = s[30], s[31] !== I || s[32] !== C || s[33] !== e || s[34] !== t || s[35] !== n ? (l = (0, a.jsxs)("fieldset", {
                    "aria-label": C,
                    className: "flex flex-col gap-1",
                    children: [e, t, n, I]
                }), s[31] = I, s[32] = C, s[33] = e, s[34] = t, s[35] = n, s[36] = l) : l = s[36], l
            }
            switch (p.schema.type) {
                case "string": {
                    let e, t, n, l;
                    s[37] !== k || s[38] !== C || s[39] !== S ? (e = S && (0, a.jsx)("label", {
                        htmlFor: k,
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: C
                    }), s[37] = k, s[38] = C, s[39] = S, s[40] = e) : e = s[40], s[41] !== M ? (t = (0, a.jsx)(eK, {
                        description: M,
                        inset: !1
                    }), s[41] = M, s[42] = t) : t = s[42];
                    let i = "format" in p.schema ? p.schema.format : void 0,
                        r = "maxLength" in p.schema ? p.schema.maxLength : void 0,
                        c = "string" == typeof g ? g : "";
                    return s[43] !== o || s[44] !== j || s[45] !== k || s[46] !== x || s[47] !== C || s[48] !== y || s[49] !== r || s[50] !== c || s[51] !== i ? (n = (0, a.jsx)(eP, {
                        id: k,
                        disabled: j,
                        autoFocus: o,
                        invalid: x,
                        label: C,
                        format: i,
                        maxLength: r,
                        value: c,
                        onChange: y,
                        onKeyDown: eq
                    }), s[43] = o, s[44] = j, s[45] = k, s[46] = x, s[47] = C, s[48] = y, s[49] = r, s[50] = c, s[51] = i, s[52] = n) : n = s[52], s[53] !== I || s[54] !== n || s[55] !== e || s[56] !== t ? (l = (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, n, I]
                    }), s[53] = I, s[54] = n, s[55] = e, s[56] = t, s[57] = l) : l = s[57], l
                }
                case "boolean": {
                    let e, t, n, l, i, r, c = !0 === g;
                    s[58] !== y || s[59] !== g ? (e = () => y(!0 !== g), s[58] = y, s[59] = g, s[60] = e) : e = s[60];
                    let d = !0 === g;
                    return s[61] !== d ? (t = (0, a.jsx)("span", {
                        className: "flex h-5 items-center",
                        children: (0, a.jsx)(ey.c, {
                            selected: d,
                            variant: "checkbox"
                        })
                    }), s[61] = d, s[62] = t) : t = s[62], s[63] !== p.schema.title ? (n = null != p.schema.title && (0, a.jsx)("span", {
                        className: "min-w-0 text-sm font-medium wrap-anywhere",
                        children: p.schema.title
                    }), s[63] = p.schema.title, s[64] = n) : n = s[64], s[65] !== o || s[66] !== k || s[67] !== x || s[68] !== C || s[69] !== t || s[70] !== n || s[71] !== c || s[72] !== e ? (l = (0, a.jsxs)(ey.b, {
                        accessibilityLabel: C,
                        autoFocus: o,
                        checked: c,
                        invalid: x,
                        name: k,
                        type: "checkbox",
                        onChange: e,
                        onKeyDown: eR,
                        children: [t, n]
                    }), s[65] = o, s[66] = k, s[67] = x, s[68] = C, s[69] = t, s[70] = n, s[71] = c, s[72] = e, s[73] = l) : l = s[73], s[74] !== M ? (i = (0, a.jsx)(eK, {
                        description: M
                    }), s[74] = M, s[75] = i) : i = s[75], s[76] !== I || s[77] !== l || s[78] !== i ? (r = (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [l, i, I]
                    }), s[76] = I, s[77] = l, s[78] = i, s[79] = r) : r = s[79], r
                }
                case "integer":
                case "number": {
                    let e, t, n, l, i;
                    s[80] !== C || s[81] !== S ? (e = S && (0, a.jsx)("div", {
                        className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                        children: C
                    }), s[80] = C, s[81] = S, s[82] = e) : e = s[82], s[83] !== M ? (t = (0, a.jsx)(eK, {
                        description: M,
                        inset: !1
                    }), s[83] = M, s[84] = t) : t = s[84];
                    let r = x || void 0,
                        c = "integer" === p.schema.type && null != p.schema.minimum ? Math.ceil(p.schema.minimum) : p.schema.minimum,
                        d = "integer" === p.schema.type ? 1 : "any",
                        u = "number" == typeof g || "string" == typeof g ? g : "";
                    return s[85] !== y ? (n = e => y(e.currentTarget.value), s[85] = y, s[86] = n) : n = s[86], s[87] !== o || s[88] !== p.schema.maximum || s[89] !== C || s[90] !== c || s[91] !== d || s[92] !== u || s[93] !== n || s[94] !== r ? (l = (0, a.jsx)(ew.a, {
                        autoFocus: o,
                        "aria-label": C,
                        "aria-invalid": r,
                        max: p.schema.maximum,
                        min: c,
                        step: d,
                        type: "number",
                        value: u,
                        onChange: n,
                        onKeyDown: eT
                    }), s[87] = o, s[88] = p.schema.maximum, s[89] = C, s[90] = c, s[91] = d, s[92] = u, s[93] = n, s[94] = r, s[95] = l) : l = s[95], s[96] !== I || s[97] !== l || s[98] !== e || s[99] !== t ? (i = (0, a.jsxs)("label", {
                        className: "flex flex-col gap-1 px-2 text-sm",
                        children: [e, t, l, I]
                    }), s[96] = I, s[97] = l, s[98] = e, s[99] = t, s[100] = i) : i = s[100], i
                }
            }
        }

        function eT(e) {
            ec(e, () => e.currentTarget.form?.requestSubmit())
        }

        function eR(e) {
            ec(e, () => e.currentTarget.click())
        }

        function eq(e) {
            "date" !== e.currentTarget.type && ec(e, () => e.currentTarget.form?.requestSubmit())
        }

        function eK(e) {
            let t, n, i = (0, l.c)(5),
                {
                    description: s,
                    inset: o
                } = e;
            if (null == s) return null;
            let c = (void 0 === o || o) && "px-2";
            return i[0] !== c ? (t = (0, r.b)("text-size-chat-sm wrap-anywhere text-codex-description", c), i[0] = c, i[1] = t) : t = i[1], i[2] !== s || i[3] !== t ? (n = (0, a.jsx)("div", {
                className: t,
                children: s
            }), i[2] = s, i[3] = t, i[4] = n) : n = i[4], n
        }
        var eU = n("i5ac"),
            eV = n.n(eU),
            eW = n("Ug8F"),
            eB = n("dxKw"),
            eZ = n("Bbed"),
            eQ = n("GaA7"),
            eG = n("eGPX"),
            eH = n("YgCO"),
            e$ = n("bnxy");

        function eJ(e) {
            let t, n, i, s, o, c, d, u, m, p, f, h, x, g, b = (0, l.c)(63),
                {
                    action: v,
                    previewAction: y,
                    metadata: w,
                    layout: j,
                    autoFocus: k,
                    children: N,
                    disabled: C,
                    invalid: S,
                    isPortrait: M,
                    selected: F,
                    highlighted: A,
                    separatorBefore: _,
                    title: E
                } = e,
                I = void 0 === j ? "carousel" : j,
                L = void 0 !== M && M,
                P = void 0 !== A && A,
                z = "button" === e.type || "preview" === e.type;
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                button: "button",
                preview: "button",
                static: "div",
                checkbox: "label",
                radio: "label"
            }, b[0] = t) : t = b[0];
            let O = t[e.type],
                D = _ && "ps-4";
            b[1] !== D ? (n = (0, r.b)("group/composer-attachment relative min-w-0 shrink-0 snap-start", D), b[1] = D, b[2] = n) : n = b[2], b[3] !== _ ? (i = _ && (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle"
            }), b[3] = _, b[4] = i) : i = b[4];
            let T = z && k,
                R = "carousel" === I ? "w-fit" : "w-full",
                q = "carousel" === I && "-m-1 p-1",
                K = C ? "cursor-default opacity-50" : "static" !== e.type && "cursor-interaction";
            b[5] !== K || b[6] !== R || b[7] !== q ? (s = (0, r.b)("group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none", R, q, K), b[5] = K, b[6] = R, b[7] = q, b[8] = s) : s = b[8];
            let U = z ? C : void 0,
                V = z ? "button" : void 0,
                B = z ? e.onClick : void 0;
            return b[9] !== k || b[10] !== C || b[11] !== e.name || b[12] !== e.onChange || b[13] !== e.type || b[14] !== e.value || b[15] !== F ? (o = "checkbox" === e.type || "radio" === e.type ? (0, a.jsx)("input", {
                autoFocus: k,
                checked: F,
                className: "sr-only",
                disabled: C,
                name: e.name,
                type: e.type,
                value: e.value,
                onChange: e.onChange,
                onKeyDown: t => {
                    "checkbox" === e.type && ec(t, () => t.currentTarget.click())
                }
            }) : null, b[9] = k, b[10] = C, b[11] = e.name, b[12] = e.onChange, b[13] = e.type, b[14] = e.value, b[15] = F, b[16] = o) : o = b[16], b[17] !== C || b[18] !== P || b[19] !== S || b[20] !== L || b[21] !== I || b[22] !== e.type || b[23] !== F ? (c = (0, r.b)("relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring", "button" === e.type ? "bg-surface-secondary" : "bg-surface shadow-sm", "standalone" === I && "h-40 w-full", "grid" === I && "w-full", "carousel" === I && "h-34", "button" === e.type && "flex flex-col items-center justify-center gap-2 text-secondary", "standalone" !== I && {
                "aspect-square": "button" === e.type,
                "aspect-[4/5]": "button" !== e.type && L,
                "aspect-video": "button" !== e.type && !L
            }, {
                "border-strong": F,
                "border-text-danger": !F && S,
                "border-default": !F && !S
            }, {
                "ring-ring": P,
                "ring-border-strong": !P && F,
                "ring-text-danger/20": !P && !F && S,
                "ring-transparent": !P && !F && !S
            }, "static" !== e.type && "preview" !== e.type && !C && !F && !P && "group-hover:ring-border-subtle"), b[17] = C, b[18] = P, b[19] = S, b[20] = L, b[21] = I, b[22] = e.type, b[23] = F, b[24] = c) : c = b[24], b[25] !== I || b[26] !== e.type || b[27] !== E ? (d = "button" === e.type && "standalone" === I ? (0, a.jsx)("span", {
                className: "text-sm",
                children: E
            }) : null, b[25] = I, b[26] = e.type, b[27] = E, b[28] = d) : d = b[28], b[29] !== w ? (u = null == w ? null : (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                children: w
            }), b[29] = w, b[30] = u) : u = b[30], b[31] !== v || b[32] !== F ? (m = F ? (0, a.jsx)("span", {
                className: (0, r.b)("absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm", null != v && "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0"),
                children: (0, a.jsx)(W.Wb, {})
            }) : null, b[31] = v, b[32] = F, b[33] = m) : m = b[33], b[34] !== N || b[35] !== c || b[36] !== d || b[37] !== u || b[38] !== m ? (p = (0, a.jsxs)("div", {
                className: c,
                children: [N, d, u, m]
            }), b[34] = N, b[35] = c, b[36] = d, b[37] = u, b[38] = m, b[39] = p) : p = b[39], b[40] !== I || b[41] !== e.type || b[42] !== E ? (f = "button" === e.type && "standalone" === I ? null : (0, a.jsx)("div", {
                className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                children: E
            }), b[40] = I, b[41] = e.type, b[42] = E, b[43] = f) : f = b[43], b[44] !== O || b[45] !== s || b[46] !== U || b[47] !== V || b[48] !== B || b[49] !== o || b[50] !== p || b[51] !== f || b[52] !== T ? (h = (0, a.jsxs)(O, {
                autoFocus: T,
                className: s,
                disabled: U,
                type: V,
                onClick: B,
                children: [o, p, f]
            }), b[44] = O, b[45] = s, b[46] = U, b[47] = V, b[48] = B, b[49] = o, b[50] = p, b[51] = f, b[52] = T, b[53] = h) : h = b[53], b[54] !== y || b[55] !== _ ? (x = null == y ? null : (0, a.jsx)("div", {
                className: (0, r.b)("pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100", _ ? "start-6" : "start-2"),
                children: y
            }), b[54] = y, b[55] = _, b[56] = x) : x = b[56], b[57] !== v || b[58] !== h || b[59] !== x || b[60] !== n || b[61] !== i ? (g = (0, a.jsxs)("div", {
                className: n,
                children: [i, h, x, v]
            }), b[57] = v, b[58] = h, b[59] = x, b[60] = n, b[61] = i, b[62] = g) : g = b[62], g
        }
        var eY = n("JEWd"),
            eX = n("kSHG"),
            e0 = n("Y8CA"),
            e1 = n("w7Qu"),
            e2 = n("YvRg"),
            e3 = n("t3y3"),
            e4 = n("zUz7"),
            e5 = n("a6Zv");
        let e6 = A.F({
            target: e0.a
        });

        function e7(e) {
            let t, n, i, r, s, o, c, d, m, p, f, h, x, g, b = (0, l.c)(60),
                {
                    option: v,
                    hostId: j,
                    layout: k,
                    name: N,
                    multiple: C,
                    implicit: S,
                    disabled: M,
                    invalid: F,
                    separatorBefore: A,
                    onChange: _,
                    onRemove: E,
                    onPreview: I
                } = e,
                L = (0, u.a)(),
                P = (0, e5.a)();
            b[0] !== v ? (t = (0, e4.a)(v), b[0] = v, b[1] = t) : t = b[1];
            let z = t,
                O = v.title ?? v.name;
            b[2] !== v._meta ? (n = eX.v.safeParse(v._meta?.["openai/thumbnail"] ?? v._meta?.["openai/preview"]), b[2] = v._meta, b[3] = n) : n = b[3];
            let {
                data: D
            } = n;
            b[4] !== v._meta ? (i = e6.safeParse(v._meta?.["openai/preview"]), b[4] = v._meta, b[5] = i) : i = b[5];
            let {
                data: T
            } = i;
            b[6] !== v._meta || b[7] !== T?.target ? (r = T?.target ?? e0.a.safeParse(v._meta?.["openai/preview"]).data ?? e0.a.safeParse(v._meta?.["openai/target"]).data, b[6] = v._meta, b[7] = T?.target, b[8] = r) : r = b[8];
            let R = r;
            b[9] !== I || b[10] !== R || b[11] !== O ? (s = null == R || null == I ? void 0 : () => I(R, O), b[9] = I, b[10] = R, b[11] = O, b[12] = s) : s = b[12];
            let q = s;
            b[13] !== q ? (o = null == q ? {
                type: "static"
            } : {
                type: "preview",
                onClick: q
            }, b[13] = q, b[14] = o) : o = b[14];
            let K = o;
            b[15] !== M || b[16] !== S || b[17] !== q ? (c = S || null == q ? null : (0, a.jsx)(w.a, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: M,
                onClick: q,
                children: (0, a.jsx)(y.a, {
                    id: "composer.mcpFormElicitation.preview",
                    defaultMessage: "Preview"
                })
            }), b[15] = M, b[16] = S, b[17] = q, b[18] = c) : c = b[18];
            let U = P ? z?.logoDarkUrl : z?.logoUrl;
            b[19] !== v.mimeType || b[20] !== U ? (d = (0, a.jsx)(e_, {
                layout: "icon",
                mimeType: v.mimeType,
                src: U
            }), b[19] = v.mimeType, b[20] = U, b[21] = d) : d = b[21];
            let V = v.mimeType ?? O;
            b[22] !== V ? (m = (0, a.jsx)("span", {
                className: "truncate",
                children: V
            }), b[22] = V, b[23] = m) : m = b[23], b[24] !== m || b[25] !== d ? (p = (0, a.jsxs)(a.Fragment, {
                children: [d, m]
            }), b[24] = m, b[25] = d, b[26] = p) : p = b[26], b[27] !== M || b[28] !== L || b[29] !== E || b[30] !== O ? (f = M || null == E ? void 0 : (0, a.jsx)(e2.a, {
                className: "top-2 right-2",
                size: "composer",
                ariaLabel: L.formatMessage({
                    id: "composer.openAIForm.removeFile",
                    defaultMessage: "Remove {filename}"
                }, {
                    filename: O
                }),
                onRemove: E
            }), b[27] = M, b[28] = L, b[29] = E, b[30] = O, b[31] = f) : f = b[31];
            let W = !S && v.selected;
            return b[32] !== S || b[33] !== C || b[34] !== N || b[35] !== _ || b[36] !== v.uri || b[37] !== K ? (h = S ? K : {
                type: C ? "checkbox" : "radio",
                name: N,
                value: v.uri,
                onChange: _
            }, b[32] = S, b[33] = C, b[34] = N, b[35] = _, b[36] = v.uri, b[37] = K, b[38] = h) : h = b[38], b[39] !== j || b[40] !== z?.logoDarkUrl || b[41] !== z?.logoUrl || b[42] !== P || b[43] !== v.localPath || b[44] !== v.mimeType || b[45] !== v.name || b[46] !== D?.src ? (x = null == v.localPath ? (0, a.jsx)(e_, {
                layout: D?.src == null ? "card-icon" : "card",
                mimeType: v.mimeType,
                src: D?.src ?? (P ? z?.logoDarkUrl : z?.logoUrl)
            }) : (0, a.jsx)(e3.a, {
                hostId: j,
                imageFit: "scale-down",
                path: v.localPath,
                importKind: (0, e1.a)(v.name),
                fallback: (0, a.jsx)(e_, {
                    layout: "card",
                    mimeType: v.mimeType,
                    src: void 0
                })
            }), b[39] = j, b[40] = z?.logoDarkUrl, b[41] = z?.logoUrl, b[42] = P, b[43] = v.localPath, b[44] = v.mimeType, b[45] = v.name, b[46] = D?.src, b[47] = x) : x = b[47], b[48] !== M || b[49] !== F || b[50] !== k || b[51] !== A || b[52] !== p || b[53] !== f || b[54] !== W || b[55] !== h || b[56] !== x || b[57] !== c || b[58] !== O ? (g = (0, a.jsx)(eJ, {
                layout: k,
                previewAction: c,
                metadata: p,
                action: f,
                autoFocus: !1,
                disabled: M,
                invalid: F,
                selected: W,
                separatorBefore: A,
                title: O,
                ...h,
                children: x
            }), b[48] = M, b[49] = F, b[50] = k, b[51] = A, b[52] = p, b[53] = f, b[54] = W, b[55] = h, b[56] = x, b[57] = c, b[58] = O, b[59] = g) : g = b[59], g
        }
        let e8 = (0, eZ.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(525677)]).then(n.bind(n, "OMbd"))).FileOptionsDialog);

        function e9(e) {
            let t, n, i, r, c, m, p, f, h, g, b, j, k, N, C, S, M, F = (0, l.c)(57),
                {
                    field: A,
                    disabled: _,
                    expanded: E,
                    hideDescription: I,
                    showTitle: L,
                    hostId: P,
                    invalid: z,
                    name: O,
                    options: D,
                    required: T,
                    onChange: R,
                    onPickingChange: q,
                    onPickFiles: K,
                    onCloseExpanded: U,
                    onPreview: V,
                    onViewAll: B
                } = e,
                Z = void 0 !== _ && _,
                Q = void 0 !== I && I,
                G = void 0 !== L && L,
                H = (0, s.y)(Y.a),
                $ = (0, u.a)(),
                J = (0, eB.a)(),
                X = (0, s.z)(eG.c),
                ee = (0, d.useRef)(null),
                et = (0, d.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), n = [], F[0] = t, F[1] = n) : (t = F[0], n = F[1]), (0, d.useEffect)(t, n);
            let [en, ea] = (0, d.useState)(!1), [el, ei] = (0, d.useState)(!1), [er, es] = (0, d.useState)(!1), [eo, ec] = (0, d.useState)(null), ed = A["x-openai-input"], eu = ed.userOptions?.kind ?? "file", em = (0, eH.a)("file" === eu ? ed.userOptions?.accept : void 0);
            F[2] !== A.title || F[3] !== O ? (i = A.title ?? ev()(O), F[2] = A.title, F[3] = O, F[4] = i) : i = F[4];
            let ep = i,
                ef = "array" === A.type,
                eh = ef && "implicit" === ed.selection,
                ex = null == K && !Z && !el && null != ed.userOptions && "local" === P && window.electronBridge?.getPathForFile != null;
            F[5] !== A.minItems || F[6] !== A.type || F[7] !== T ? (r = 0, T && (r = "array" === A.type ? A.minItems ?? 0 : 1), F[5] = A.minItems, F[6] = A.type, F[7] = T, F[8] = r) : r = F[8], F[9] !== ed.options ? (c = new Set(ed.options.map(ta)), F[9] = ed.options, F[10] = c) : c = F[10];
            let eg = c;
            F[11] !== eg ? (m = e => !eg.has(e.uri), F[11] = eg, F[12] = m) : m = F[12];
            let eb = D.filter(m);
            F[13] !== eg ? (p = e => eg.has(e.uri), F[13] = eg, F[14] = p) : p = F[14];
            let ey = [...eb, ...D.filter(p)],
                ew = e => {
                    Array.from(ee.current?.querySelectorAll("input") ?? []).find(t => t.value === e)?.parentElement?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest",
                        behavior: X ? "instant" : "smooth"
                    })
                },
                ej = () => {
                    document.activeElement === document.body && ee.current?.closest("form")?.focus()
                };
            F[15] !== ef || F[16] !== R || F[17] !== D ? (f = (e, t) => {
                if (t.aborted || 0 === e.length) return;
                let n = new Set(e.map(tn));
                R(eV()([...D, ...e.map(tt)], "uri").map(t => ({
                    ...t,
                    selected: ef ? t.selected || n.has(t.uri) : t.uri === e[0].uri
                })))
            }, F[15] = ef, F[16] = R, F[17] = D, F[18] = f) : f = F[18];
            let ek = f,
                eN = e => {
                    let t = !1,
                        n = () => {
                            !t && (t = !0, e.signal.removeEventListener("abort", n), q?.(!1), e.signal.aborted || (ei(!1), ej()))
                        };
                    return e.signal.addEventListener("abort", n, {
                        once: !0
                    }), ei(!0), ec(null), q?.(!0), n
                },
                eC = async (e, t) => {
                    if (Z || el || null == ed.userOptions || 0 === e.length) return;
                    let n = eN(t),
                        a = Error("File type is not accepted");
                    await Promise.all(e.map(async e => {
                        let {
                            appServerPath: t,
                            fsPath: n,
                            label: l
                        } = e, i = await eQ.a.workspaceFiles.getMetadata?.({
                            hostId: P,
                            path: n
                        });
                        if (i?.kind !== eu) throw Error("Selection does not match the requested kind");
                        if ("file" === i.kind && !(0, eH.b)(n, em)) throw a;
                        return {
                            uri: (0, e$.f)(t ?? n),
                            localPath: n,
                            name: (0, e$.j)(n),
                            title: l,
                            selected: !0
                        }
                    })).then(e => ek(e, t.signal)).catch(e => {
                        t.signal.aborted || ec(e === a ? "type" : "selection")
                    }).finally(n)
                };
            F[19] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(y.a, {
                id: "composer.openAIForm.uploadTile",
                defaultMessage: "Upload"
            }), F[19] = h) : h = F[19];
            let eS = h;
            if ("directory" === eu) {
                let e;
                F[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(y.a, {
                    id: "composer.openAIForm.addFolder",
                    defaultMessage: "Choose folder"
                }), F[20] = e) : e = F[20], eS = e
            } else if (0 === D.length) {
                let e;
                F[21] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(y.a, {
                    id: "composer.openAIForm.addFiles",
                    defaultMessage: "Upload files"
                }), F[21] = e) : e = F[21], eS = e
            }
            let eM = null == ed.userOptions ? null : (0, a.jsx)(eJ, {
                    autoFocus: !1,
                    highlighted: en,
                    layout: 0 === D.length ? "standalone" : "carousel",
                    disabled: Z || el,
                    invalid: !1,
                    selected: !1,
                    title: eS,
                    type: "button",
                    onClick: () => {
                        et.current?.abort();
                        let e = new AbortController;
                        if (et.current = e, null != K) {
                            let t = eN(e);
                            K(e.signal).then(t => ek(t, e.signal)).catch(() => {
                                e.signal.aborted || ec("selection")
                            }).finally(t);
                            return
                        }
                        null != (0, o.Gg)(P) || (0, o.Hi)((0, v.a)(H, P)) ? es(!0) : J({
                            accept: "file" === eu ? ed.userOptions?.accept : void 0,
                            kind: eu,
                            allowMultiple: ef
                        }).then(t => {
                            if (!e.signal.aborted) return eC(t, e)
                        }).catch(() => {
                            e.signal.aborted || ec("selection")
                        }).finally(() => {
                            e.signal.aborted || ej()
                        })
                    },
                    children: "directory" === eu ? (0, a.jsx)(W.Fd, {
                        className: "text-tertiary"
                    }) : (0, a.jsx)(W.O, {
                        className: "text-tertiary"
                    })
                }),
                eF = (e, t, n) => (0, a.jsx)(e7, {
                    option: e,
                    hostId: P,
                    layout: n,
                    name: "grid" === n ? `${O}-expanded` : O,
                    multiple: ef,
                    implicit: eh,
                    disabled: Z || el,
                    invalid: z || null != eo,
                    separatorBefore: "carousel" === n && 0 === t && null != eM,
                    onChange: () => {
                        R(D.map(t => ({
                            ...t,
                            selected: t.uri === e.uri ? !ef || !t.selected : ef && t.selected
                        }))), "carousel" === n && ew(e.uri)
                    },
                    onRemove: !eh || null == ed.userOptions && D.length <= 1 || eg.has(e.uri) && D.length <= r ? void 0 : () => R(D.filter(t => t.uri !== e.uri)),
                    onPreview: null == V ? void 0 : (e, t) => {
                        U?.(), V(e, t)
                    }
                }, e.uri);
            F[22] !== ex ? (g = e => {
                (0, x.b)(e.dataTransfer) && (e.preventDefault(), e.stopPropagation(), "dragenter" === e.type ? ea(ex) : e.dataTransfer.dropEffect = ex ? "copy" : "none")
            }, F[22] = ex, F[23] = g) : g = F[23];
            let eA = g;
            F[24] !== A.description || F[25] !== A.title || F[26] !== Q || F[27] !== G ? (b = G && A.title || !Q && A.description ? (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                children: [G && A.title && (0, a.jsx)("div", {
                    className: "text-size-chat-sm font-medium text-default",
                    children: A.title
                }), !Q && A.description && (0, a.jsx)("div", {
                    className: "text-size-chat-sm text-codex-description",
                    children: A.description
                })]
            }) : null, F[24] = A.description, F[25] = A.title, F[26] = Q, F[27] = G, F[28] = b) : b = F[28];
            let e_ = b;
            F[29] !== e_ || F[30] !== B ? (j = null != e_ || null != B ? (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [e_, null != B && (0, a.jsxs)(w.a, {
                    className: "ms-auto shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "composer",
                    onClick: B,
                    children: [(0, a.jsx)(W.bi, {}), (0, a.jsx)(y.a, {
                        id: "composer.openAIForm.viewAll",
                        defaultMessage: "View all"
                    })]
                })]
            }) : null, F[29] = e_, F[30] = B, F[31] = j) : j = F[31];
            let eE = j;
            F[32] === Symbol.for("react.memo_cache_sentinel") ? (k = e => {
                e.stopPropagation(), e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget) || ea(!1)
            }, F[32] = k) : k = F[32];
            let eI = e => {
                    if (!(0, x.b)(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), ea(!1), !ex)) return;
                    let t = (0, x.f)(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer);
                    if (0 === t.length || !ef && t.length > 1) return void ec("selection");
                    et.current?.abort();
                    let n = new AbortController;
                    et.current = n, eC(t, n)
                },
                eP = 0 === D.length && null != eM ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2 px-4",
                    role: "group",
                    "aria-label": ep,
                    children: [eE, eM]
                }) : (0, a.jsxs)(eY.a, {
                    ariaInvalid: z || null != eo,
                    ariaLabel: ep,
                    backLabel: $.formatMessage({
                        id: "composer.openAIForm.previousFiles",
                        defaultMessage: "Show previous files"
                    }),
                    forwardLabel: $.formatMessage({
                        id: "composer.openAIForm.moreFiles",
                        defaultMessage: "Show more files"
                    }),
                    header: eE,
                    role: ef ? "group" : "radiogroup",
                    shouldUseReducedMotion: X,
                    children: [eM, ey.map((e, t) => eF(e, t, "carousel"))]
                }),
                ez = void 0 !== E && E && null != U ? (0, a.jsx)(e8, {
                    title: A.title,
                    accessibilityLabel: ep,
                    multiple: ef,
                    options: ey,
                    renderOption: (e, t) => eF(e, t, "grid"),
                    onClose: U,
                    onOptionActivate: ew,
                    onRestoreFocus: () => {
                        let e = ee.current?.querySelector("input:not(:disabled), button:not(:disabled)") ?? ee.current?.closest("form")?.querySelector('button[type="submit"]');
                        e?.focus()
                    }
                }) : null;
            return F[33] !== em || F[34] !== eC || F[35] !== P || F[36] !== eu || F[37] !== ef || F[38] !== er || F[39] !== ej || F[40] !== es ? (N = er ? (0, a.jsx)(eW.a, {
                acceptedFileExtensions: em,
                hostId: P,
                kind: eu,
                multiple: ef,
                onClose: () => es(!1),
                onRestoreFocus: ej,
                onSelect: e => {
                    let t = et.current;
                    null == t || t.signal.aborted || eC(e.map(te), t)
                }
            }) : null, F[33] = em, F[34] = eC, F[35] = P, F[36] = eu, F[37] = ef, F[38] = er, F[39] = ej, F[40] = es, F[41] = N) : N = F[41], F[42] !== eo ? (C = eo ? (0, a.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                role: "alert",
                children: "selection" === eo ? (0, a.jsx)(y.a, {
                    id: "composer.openAIForm.fileSelectionFailed",
                    defaultMessage: "These files or folders could not be added"
                }) : (0, a.jsx)(y.a, {
                    id: "composer.openAIForm.fileTypeRejected",
                    defaultMessage: "Choose a file of an allowed type"
                })
            }) : null, F[42] = eo, F[43] = C) : C = F[43], F[44] !== A || F[45] !== z ? (S = z ? (0, a.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, a.jsx)(eL, {
                    schema: A
                })
            }) : null, F[44] = A, F[45] = z, F[46] = S) : S = F[46], F[47] !== ee || F[48] !== eA || F[49] !== k || F[50] !== eI || F[51] !== eP || F[52] !== ez || F[53] !== N || F[54] !== C || F[55] !== S ? (M = (0, a.jsxs)("div", {
                ref: ee,
                className: "flex w-full min-w-0 flex-col gap-2",
                "data-mcp-form-file-drop": !0,
                onDragEnter: eA,
                onDragOver: eA,
                onDragLeave: k,
                onDrop: eI,
                children: [eP, ez, N, C, S]
            }), F[47] = ee, F[48] = eA, F[49] = k, F[50] = eI, F[51] = eP, F[52] = ez, F[53] = N, F[54] = C, F[55] = S, F[56] = M) : M = F[56], M
        }

        function te(e) {
            return {
                path: e,
                fsPath: e,
                label: (0, e$.j)(e)
            }
        }

        function tt(e) {
            return {
                ...e,
                selected: !0
            }
        }

        function tn(e) {
            return e.uri
        }

        function ta(e) {
            return e.uri
        }
        var tl = n("pVnK"),
            ti = n("wPPd");

        function tr(e) {
            let t, n, i, o, c, m, p, f, h, x, g = (0, l.c)(56),
                {
                    autoFocus: b,
                    field: v,
                    hideLabel: w,
                    hostId: j,
                    invalid: k,
                    name: N,
                    value: C,
                    onChange: S,
                    onPickFile: M
                } = e,
                F = void 0 !== w && w,
                A = (0, u.a)(),
                _ = (0, eB.a)(),
                E = (0, s.z)(eG.c),
                [I, L] = (0, d.useState)(!1),
                [P, z] = (0, d.useState)(!1),
                O = P ? "aspect-[4/5]" : "aspect-video";
            g[0] !== v.title || g[1] !== N ? (t = v.title ?? ev()(N), g[0] = v.title, g[1] = N, g[2] = t) : t = g[2];
            let D = t,
                T = null != v.file && (0, el.c)(v, C) && !v.items.some(e => e.id === C) ? C : null;
            if (g[3] !== A ? (n = A.formatMessage({
                    id: "composer.imagePicker.previous",
                    defaultMessage: "Show previous templates"
                }), g[3] = A, g[4] = n) : n = g[4], g[5] !== A ? (i = A.formatMessage({
                    id: "composer.imagePicker.next",
                    defaultMessage: "Show more templates"
                }), g[5] = A, g[6] = i) : i = g[6], g[7] !== v.description || g[8] !== v.title || g[9] !== F ? (o = F ? null : (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1 wrap-anywhere",
                    children: [v.title && (0, a.jsx)("div", {
                        className: "text-sm font-medium",
                        children: v.title
                    }), v.description && (0, a.jsx)("div", {
                        className: "text-xs text-tertiary",
                        children: v.description
                    })]
                }), g[7] = v.description, g[8] = v.title, g[9] = F, g[10] = o) : o = g[10], g[11] !== v.file || g[12] !== v.title || g[13] !== j || g[14] !== k || g[15] !== S || g[16] !== M || g[17] !== _ || g[18] !== O || g[19] !== T ? (c = null == v.file ? null : null != M ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("button", {
                        className: "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                        type: "button",
                        onClick: () => {
                            null != M ? M().then(e => {
                                null != e && S(e)
                            }) : "local" !== j ? L(!0) : _({
                                accept: v.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: v.file?.title ?? v.title
                            }).then(e => {
                                let [t] = e;
                                null != t && S((0, e$.f)(t.fsPath))
                            })
                        },
                        children: [(0, a.jsx)("div", {
                            className: (0, r.b)("flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong", O, null == T ? "border-default ring-transparent group-hover:ring-border-subtle" : "border-strong ring-border-strong", k && null == T && "border-text-danger ring-text-danger/20"),
                            children: null == T ? (0, a.jsx)(ef.a, {
                                className: "text-secondary",
                                asset: ti.a,
                                "aria-hidden": !0
                            }) : (0, a.jsxs)("div", {
                                className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                children: [(0, a.jsx)(ef.a, {
                                    asset: tl.a,
                                    "aria-hidden": !0
                                }), (0, a.jsx)("span", {
                                    className: "max-w-full truncate text-sm",
                                    children: (0, e$.j)(decodeURIComponent(new URL(T).pathname))
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                            children: v.file.title ?? (0, a.jsx)(y.a, {
                                id: "composer.imagePicker.chooseFile",
                                defaultMessage: "Choose a file"
                            })
                        })]
                    })
                }) : null, g[11] = v.file, g[12] = v.title, g[13] = j, g[14] = k, g[15] = S, g[16] = M, g[17] = _, g[18] = O, g[19] = T, g[20] = c) : c = g[20], g[21] !== b || g[22] !== v.items || g[23] !== k || g[24] !== P || g[25] !== N || g[26] !== S || g[27] !== C) {
                let e;
                g[29] !== b || g[30] !== k || g[31] !== P || g[32] !== N || g[33] !== S || g[34] !== C ? (e = (e, t) => (0, a.jsx)(eJ, {
                    autoFocus: b && 0 === t,
                    invalid: k,
                    isPortrait: P,
                    name: N,
                    selected: C === e.id,
                    title: e.title,
                    type: "radio",
                    value: e.id,
                    onChange: () => S(e.id),
                    children: (0, a.jsx)("img", {
                        alt: "",
                        className: "block h-full w-full object-scale-down",
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        onLoad: 0 === t ? e => {
                            z(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)
                        } : void 0,
                        src: e.image
                    })
                }, e.id), g[29] = b, g[30] = k, g[31] = P, g[32] = N, g[33] = S, g[34] = C, g[35] = e) : e = g[35], m = v.items.map(e), g[21] = b, g[22] = v.items, g[23] = k, g[24] = P, g[25] = N, g[26] = S, g[27] = C, g[28] = m
            } else m = g[28];
            return g[36] !== k || g[37] !== E || g[38] !== n || g[39] !== i || g[40] !== o || g[41] !== c || g[42] !== m || g[43] !== D ? (p = (0, a.jsxs)(eY.a, {
                ariaInvalid: k,
                ariaLabel: D,
                backLabel: n,
                forwardLabel: i,
                header: o,
                role: "radiogroup",
                shouldUseReducedMotion: E,
                children: [c, m]
            }), g[36] = k, g[37] = E, g[38] = n, g[39] = i, g[40] = o, g[41] = c, g[42] = m, g[43] = D, g[44] = p) : p = g[44], g[45] !== j || g[46] !== I || g[47] !== S ? (f = I ? (0, a.jsx)(eW.a, {
                hostId: j,
                multiple: !1,
                onClose: () => L(!1),
                onSelect: e => {
                    let t = e[0];
                    null != t && S((0, e$.f)(t))
                }
            }) : null, g[45] = j, g[46] = I, g[47] = S, g[48] = f) : f = g[48], g[49] !== v || g[50] !== k ? (h = k ? (0, a.jsx)("div", {
                className: "px-4 text-size-chat-sm text-danger",
                children: (0, a.jsx)(eL, {
                    schema: v
                })
            }) : null, g[49] = v, g[50] = k, g[51] = h) : h = g[51], g[52] !== h || g[53] !== p || g[54] !== f ? (x = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2",
                children: [p, f, h]
            }), g[52] = h, g[53] = p, g[54] = f, g[55] = x) : x = g[55], x
        }

        function ts(e) {
            let t, n, i, s, o = (0, l.c)(72),
                {
                    autoFocus: c,
                    isOnlyField: d,
                    disabled: u,
                    interactionDisabled: m,
                    field: p,
                    draft: f,
                    expanded: h,
                    hostId: x,
                    invalid: g,
                    metadataInHeader: b,
                    onCloseExpanded: v,
                    onDraftChange: y,
                    onValueChange: w,
                    onPickLegacyFile: j,
                    onPickingChange: k,
                    onPickFiles: N,
                    onPreview: C,
                    onViewAll: S
                } = e;
            o[0] !== p.schema ? (t = (0, ea.c)(p.schema) || (0, el.b)(p.schema), o[0] = p.schema, o[1] = t) : t = o[1];
            let M = t,
                {
                    name: F,
                    schema: A,
                    required: _
                } = p;
            if ((0, ea.c)(A)) {
                let e, t, l, i = !b,
                    r = f.fileOptions[F];
                o[2] !== F || o[3] !== y ? (e = e => y(t => ({
                    ...t,
                    fileOptions: {
                        ...t.fileOptions,
                        [F]: e
                    }
                }), F), o[2] = F, o[3] = y, o[4] = e) : e = o[4], o[5] !== F || o[6] !== N ? (t = null == N ? void 0 : e => N(F, e), o[5] = F, o[6] = N, o[7] = t) : t = o[7], o[8] !== u || o[9] !== h || o[10] !== F || o[11] !== x || o[12] !== g || o[13] !== b || o[14] !== v || o[15] !== k || o[16] !== C || o[17] !== S || o[18] !== _ || o[19] !== A || o[20] !== i || o[21] !== r || o[22] !== e || o[23] !== t ? (l = (0, a.jsx)(e9, {
                    field: A,
                    disabled: u,
                    expanded: h,
                    hideDescription: b,
                    showTitle: i,
                    onCloseExpanded: v,
                    onViewAll: S,
                    hostId: x,
                    invalid: g,
                    name: F,
                    options: r,
                    required: _,
                    onPreview: C,
                    onChange: e,
                    onPickingChange: k,
                    onPickFiles: t
                }), o[8] = u, o[9] = h, o[10] = F, o[11] = x, o[12] = g, o[13] = b, o[14] = v, o[15] = k, o[16] = C, o[17] = S, o[18] = _, o[19] = A, o[20] = i, o[21] = r, o[22] = e, o[23] = t, o[24] = l) : l = o[24], n = l
            } else if ((0, el.b)(A)) {
                let e, t, l, i = f.values[F];
                o[25] !== F || o[26] !== w ? (e = e => w(F, e), o[25] = F, o[26] = w, o[27] = e) : e = o[27], o[28] !== F || o[29] !== j ? (t = null == j ? void 0 : () => j(F), o[28] = F, o[29] = j, o[30] = t) : t = o[30], o[31] !== c || o[32] !== F || o[33] !== x || o[34] !== g || o[35] !== b || o[36] !== A || o[37] !== i || o[38] !== e || o[39] !== t ? (l = (0, a.jsx)(tr, {
                    autoFocus: c,
                    field: A,
                    hideLabel: b,
                    hostId: x,
                    invalid: g,
                    name: F,
                    value: i,
                    onChange: e,
                    onPickFile: t
                }), o[31] = c, o[32] = F, o[33] = x, o[34] = g, o[35] = b, o[36] = A, o[37] = i, o[38] = e, o[39] = t, o[40] = l) : l = o[40], n = l
            } else {
                let e, t, l, i;
                o[41] !== F || o[42] !== _ || o[43] !== A ? (e = {
                    name: F,
                    required: _,
                    schema: A
                }, o[41] = F, o[42] = _, o[43] = A, o[44] = e) : e = o[44];
                let r = f.customDrafts[F];
                o[45] !== F || o[46] !== y ? (t = e => y(t => ({
                    ...t,
                    customDrafts: {
                        ...t.customDrafts,
                        [F]: e
                    }
                }), F), o[45] = F, o[46] = y, o[47] = t) : t = o[47];
                let s = b && "boolean" !== A.type,
                    u = f.values[F];
                o[48] !== F || o[49] !== w ? (l = e => w(F, e), o[48] = F, o[49] = w, o[50] = l) : l = o[50], o[51] !== c || o[52] !== m || o[53] !== g || o[54] !== d || o[55] !== b || o[56] !== e || o[57] !== r || o[58] !== t || o[59] !== s || o[60] !== u || o[61] !== l ? (i = (0, a.jsx)(eD, {
                    disabled: m,
                    autoFocus: c,
                    showOptionNumbers: d,
                    field: e,
                    customDraft: r,
                    onCustomDraftChange: t,
                    hideLabel: s,
                    hideDescription: b,
                    invalid: g,
                    value: u,
                    onChange: l
                }), o[51] = c, o[52] = m, o[53] = g, o[54] = d, o[55] = b, o[56] = e, o[57] = r, o[58] = t, o[59] = s, o[60] = u, o[61] = l, o[62] = i) : i = o[62], n = i
            }
            let E = c && M ? to : void 0,
                I = p.name,
                L = !M && "px-2",
                P = b && M && "pt-1";
            return o[63] !== L || o[64] !== P ? (i = (0, r.b)("flex min-w-0 flex-col gap-2 outline-none", L, P), o[63] = L, o[64] = P, o[65] = i) : i = o[65], o[66] !== p.name || o[67] !== n || o[68] !== m || o[69] !== E || o[70] !== i ? (s = (0, a.jsx)("fieldset", {
                ref: E,
                "data-mcp-form-field": I,
                tabIndex: -1,
                className: i,
                disabled: m,
                children: n
            }), o[66] = p.name, o[67] = n, o[68] = m, o[69] = E, o[70] = i, o[71] = s) : s = o[71], s
        }

        function to(e) {
            null == e || e.contains(document.activeElement) || e.focus()
        }
        var tc = n("sM3V"),
            td = n("JwWG"),
            tu = n("mjcS"),
            tm = n("N0Xk"),
            tp = n("cp7n");

        function tf(e) {
            let t, n, i, r, o, c, d, m, p, f, h, x, g, b, v = (0, l.c)(40),
                {
                    isSubmitting: j,
                    elicitation: k,
                    field: N,
                    hostId: C,
                    conversationId: S,
                    groupIndex: M,
                    groupCount: F,
                    onCancel: A
                } = e,
                _ = void 0 !== j && j,
                E = (0, u.a)(),
                {
                    serverName: I
                } = k;
            v[0] !== S || v[1] !== C || v[2] !== I ? (t = {
                hostId: C,
                serverName: I,
                threadId: S
            }, v[0] = S, v[1] = C, v[2] = I, v[3] = t) : t = v[3];
            let L = (0, s.x)(tc.a, t);
            v[4] !== L ? (n = L ?? {}, v[4] = L, v[5] = n) : n = v[5];
            let {
                pluginId: P,
                serverInfo: z
            } = n, O = void 0 === P ? I : P;
            v[6] !== z ? (i = (0, e4.a)(z), v[6] = z, v[7] = i) : i = v[7];
            let D = i;
            return v[8] !== C || v[9] !== D || v[10] !== O || v[11] !== I ? (r = null != D || null == O ? (0, a.jsx)(tm.a, {
                className: "icon-sm shrink-0",
                icon: D
            }) : (0, a.jsx)(tu.a, {
                alt: I,
                className: "icon-sm",
                fallback: (0, a.jsx)(td.a, {}),
                hostId: C,
                pluginId: O,
                preferComposerIcon: !0
            }), v[8] = C, v[9] = D, v[10] = O, v[11] = I, v[12] = r) : r = v[12], v[13] !== k.message ? (o = (0, a.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: k.message
            }), v[13] = k.message, v[14] = o) : o = v[14], v[15] !== F || v[16] !== M ? (c = F > 1 && (0, a.jsx)(y.a, {
                id: "composer.mcpFormElicitation.progress",
                defaultMessage: "{current} of {total}",
                values: {
                    current: M + 1,
                    total: F
                }
            }), v[15] = F, v[16] = M, v[17] = c) : c = v[17], v[18] !== E ? (d = E.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel"
            }), v[18] = E, v[19] = d) : d = v[19], v[20] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(ef.a, {
                "aria-hidden": !1,
                asset: tp.a
            }), v[20] = m) : m = v[20], v[21] !== _ || v[22] !== A || v[23] !== d ? (p = (0, a.jsx)(w.a, {
                "aria-label": d,
                color: "ghostSecondary",
                size: "compact",
                uniform: !0,
                disabled: _,
                onClick: A,
                children: m
            }), v[21] = _, v[22] = A, v[23] = d, v[24] = p) : p = v[24], v[25] !== p || v[26] !== c ? (f = (0, a.jsxs)("div", {
                className: "ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none",
                children: [c, p]
            }), v[25] = p, v[26] = c, v[27] = f) : f = v[27], v[28] !== f || v[29] !== r || v[30] !== o ? (h = (0, a.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [r, o, f]
            }), v[28] = f, v[29] = r, v[30] = o, v[31] = h) : h = v[31], v[32] !== N ? (x = N?.type !== "boolean" && N?.title && (0, a.jsx)("div", {
                className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                children: N.title
            }), v[32] = N, v[33] = x) : x = v[33], v[34] !== N ? (g = N?.description && (0, a.jsx)("div", {
                className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                children: N.description
            }), v[34] = N, v[35] = g) : g = v[35], v[36] !== h || v[37] !== x || v[38] !== g ? (b = (0, a.jsxs)("div", {
                className: "flex shrink-0 flex-col gap-1 px-4 py-3",
                children: [h, x, g]
            }), v[36] = h, v[37] = x, v[38] = g, v[39] = b) : b = v[39], b
        }
        let th = (0, s.d)(Y.a, (e, t) => {
            let {
                get: n
            } = t;
            return null != (0, o.Gg)(e) || (0, o.Hi)(n(v.b, e))
        });

        function tx(e) {
            let t, n = (0, l.c)(2);
            return n[0] !== e ? (t = null != e.onReply ? (0, a.jsx)(tg, {
                ...e
            }) : (0, a.jsx)(tk, {
                ...e
            }), n[0] = e, n[1] = t) : t = n[1], t
        }

        function tg(e) {
            let t, n, o, b, v, y, w, j, C, M, F, A, z = (0, l.c)(45),
                {
                    attribution: O,
                    formType: T,
                    autoResolution: W,
                    confirmationPresentation: B,
                    confirmationCompleted: Q,
                    conversationId: G,
                    elicitation: H,
                    hostId: $,
                    requestId: J,
                    turnId: X,
                    onUserInteraction: eo,
                    onStandaloneResponseChange: eu,
                    onReply: em,
                    retainDraft: ep,
                    onPickLegacyFile: ef,
                    onPickFiles: eh,
                    validateContent: ex,
                    disabled: eb,
                    isSubmitting: ev,
                    onPreview: ey
                } = e,
                ew = void 0 !== ep && ep,
                ej = void 0 !== eb && eb,
                ek = void 0 !== ev && ev,
                eN = (0, s.y)(Y.a),
                eC = (0, u.a)(),
                eS = (0, d.useRef)(null),
                eM = (0, d.useRef)(null),
                eF = (0, h.b)(),
                eA = "formElicitation" === H.kind;
            z[0] !== H || z[1] !== eC ? (t = (0, _.a)(H), n = function(e, t) {
                var n, a;
                let l, i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, _.a)(e);
                if ("formElicitation" !== e.kind || 1 !== Object.keys(e.schema.properties).length || e.schema.properties.confirmed?.type !== "boolean" || "Apply these changes" !== e.schema.properties.confirmed.title || e.schema.required?.length !== 1 || "confirmed" !== e.schema.required[0]) return null;
                let {
                    message: s
                } = e;
                if (null != e.confirmation) {
                    let e = r?.presentation;
                    if (r?.field !== "confirmed" || e?.triggerLabel !== "Review environment changes" || "Apply changes" !== e.confirmLabel || null != e.fields) return null;
                    let n = function(e, t) {
                        let [n, ...a] = e.split(P);
                        if (!n?.trim() || n.includes("\n") || 0 === a.length) return null;
                        let l = [],
                            i = new Set;
                        for (let e of a) {
                            let n = e.indexOf("\n"),
                                a = L.get(e.slice(0, n));
                            if (null == a || i.has(a)) return null;
                            i.add(a);
                            let r = e.slice(n + 1);
                            if ("network_policy" === a) {
                                let e = function(e) {
                                    if ("Off" === e) return {
                                        type: "disabled"
                                    };
                                    if ("Unrestricted access" === e) return {
                                        type: "unrestricted"
                                    };
                                    let t = "Restricted to ";
                                    if (!e.startsWith(t)) return null;
                                    let n = e.slice(t.length).split(", "),
                                        a = "package manager domains" === n.at(-1);
                                    return (a && n.pop(), n.some(e => !/^(?:\*|(?:\*\.)?[a-z0-9.-]+)$/u.test(e))) ? null : {
                                        type: "restricted",
                                        egress_rules: n.map(e => ({
                                            host: e
                                        })),
                                        presets: a ? ["package_managers"] : []
                                    }
                                }(r);
                                if (null == e) return null;
                                l.push(V(e, t))
                            } else {
                                let e = [];
                                if ("Remove all" !== r)
                                    for (let t of r.split("\n\n")) {
                                        let n = function(e, t) {
                                            let [n, ...a] = t.split("\n"), [l, i, r] = n.split(" · ");
                                            return l && i && null == r ? "repositories" === e ? a.every(e => /^(?:Mount at .+|Refresh on startup|Skip refresh on startup|Create local branch .+ from .+)$/u.test(e)) ? {
                                                label: l,
                                                gitRef: i,
                                                detail: a.join("\n")
                                            } : null : D.safeParse(l).success && ("Optional" === i || "Required" === i) && a.length === ("env_vars" === e ? 1 : 2) && /^Vault item “.+”$/u.test(a[0]) && ("network_secrets" !== e || /^Can be sent to .+$/u.test(a[1])) ? {
                                                label: l,
                                                detail: [i, ...a].join("\n")
                                            } : null : null
                                        }(a, t);
                                        if (null == n) return null;
                                        e.push(n)
                                    }
                                l.push(q(a, e, t))
                            }
                        }
                        return {
                            reason: n,
                            changes: l
                        }
                    }(s, t);
                    return null == n ? null : {
                        field: "confirmed",
                        presentation: e,
                        review: n,
                        details: s
                    }
                }
                if (!s.startsWith(E)) return null;
                let o = s.indexOf(I, E.length),
                    c = s.lastIndexOf("\n\n{");
                if (o < 0 || c < o + I.length) return null;
                let d = s.slice(E.length, o),
                    u = s.slice(o + I.length, c).trim();
                if (!/^ccarenv_[A-Za-z0-9_-]+$/.test(d) || !u) return null;
                let m = s.slice(c + 2);
                try {
                    i = JSON.parse(m)
                } catch {
                    return null
                }
                let p = R.safeParse(i);
                return p.success && S()(i, p.data) ? {
                    field: "confirmed",
                    presentation: {
                        title: t.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.title",
                            defaultMessage: "Change cloud environment?"
                        }),
                        triggerLabel: t.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.trigger",
                            defaultMessage: "Review environment changes"
                        }),
                        confirmLabel: t.formatMessage({
                            id: "mcpConfirmation.cloudEnvironment.apply",
                            defaultMessage: "Apply changes"
                        }),
                        sections: void 0
                    },
                    review: {
                        reason: u,
                        changes: (n = p.data, a = t, l = [], null != n.network_policy && l.push(V(n.network_policy, a)), null != n.repositories && l.push(q("repositories", n.repositories.map(e => {
                            let {
                                value: t
                            } = e;
                            var n = t.repository,
                                l = a;
                            let i = [];
                            for (let {
                                    branch: e,
                                    ref: t
                                }
                                of(n.mount_path && i.push(l.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.checkoutFolder",
                                    defaultMessage: "Checkout folder {path}"
                                }, {
                                    path: U(n.mount_path)
                                })), null != n.refresh && i.push(l.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.checkoutRefresh",
                                    defaultMessage: "{refresh, select, true {Refresh on startup} other {Skip refresh on startup}}"
                                }, {
                                    refresh: String(n.refresh)
                                })), n.extra_refs ?? [])) i.push(l.formatMessage({
                                id: "mcpConfirmation.cloudEnvironment.extraCheckout",
                                defaultMessage: "Create local branch {branch} from {ref}"
                            }, {
                                branch: U(e),
                                ref: U(t)
                            }));
                            return {
                                label: U(n.repository_id),
                                gitRef: U(n.ref),
                                detail: i.join("\n")
                            }
                        }), a)), null != n.env_vars && l.push(q("env_vars", n.env_vars.map(e => {
                            let {
                                direct_environment_variable: t,
                                source: n,
                                optional: l
                            } = e;
                            return {
                                label: t.variable_name,
                                detail: K(n.vault_secret_id, l ?? !1, a)
                            }
                        }), a)), null != n.network_secrets && l.push(q("network_secrets", n.network_secrets.map(e => {
                            let {
                                name: t,
                                target: n,
                                source: l,
                                optional: i
                            } = e, {
                                variable_name: r,
                                allowed_domains: s
                            } = n.environment_variable;
                            return {
                                label: a.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.networkSecretLabel",
                                    defaultMessage: "{name} ({variable})"
                                }, {
                                    name: U(t),
                                    variable: r
                                }),
                                detail: a.formatMessage({
                                    id: "mcpConfirmation.cloudEnvironment.networkSecretDetail",
                                    defaultMessage: "{binding}\nCan be sent to {domains}"
                                }, {
                                    binding: K(l.vault_secret_id, i ?? !1, a),
                                    domains: a.formatList(s.map(U))
                                })
                            }
                        }), a)), l)
                    },
                    details: `Instance: ${d}

${m}`
                } : null
            }(H, eC, t), z[0] = H, z[1] = eC, z[2] = t, z[3] = n) : (t = z[2], n = z[3]);
            let e_ = n,
                eE = e_ ?? t,
                eI = eE?.field ?? null,
                eL = (0, et.c)(H.schema),
                eP = function(e) {
                    if ("openaiForm" !== e.kind) return;
                    let t = e.schema[ee.a],
                        n = null == t ? void 0 : e.schema.properties[t];
                    if (null != t && n?.type === "string" && ("oneOf" in n && null != n.oneOf && n.oneOf.length > 0 || "enum" in n && null != n.enum && n.enum.length > 0)) return {
                        name: t,
                        options: (0, et.d)(n),
                        required: e.schema.required?.includes(t) === !0
                    }
                }(H),
                ez = eL[0],
                eO = 1 === eL.length && null != ez && (0, el.b)(ez.schema) ? ez.schema : null,
                eD = null != eO,
                eT = (0, g.b)($, G, J),
                eR = (0, s.z)(g.c).get(eT);
            z[4] !== H ? (o = () => er(H), z[4] = H, z[5] = o) : o = z[5];
            let [eq, eK] = (0, d.useState)(o), eU = eR?.requestId === J && "kind" in eR.draft && eR.draft.kind === H.kind ? eR.draft : er(H), eV = null == em || ew ? eU : eq, {
                values: eW
            } = eV, eB = eL.filter(e => e.name !== eP?.name), eZ = Object.fromEntries(eB.map(tj)), eQ = "openaiForm" === H.kind ? H.schema["x-openai-groups"] : void 0;
            z[6] !== eQ ? (b = new Set(eQ?.flatMap(tw)), z[6] = eQ, z[7] = b) : b = z[7];
            let eG = b;
            z[8] !== eG ? (v = e => !eG.has(e.name), z[8] = eG, z[9] = v) : v = z[9];
            let eH = eB.filter(v),
                e$ = eQ?.map(e => e.properties.map(e => eZ[e])) ?? [];
            (eH.length > 0 || 0 === e$.length) && e$.push(eH);
            let eJ = !eD && (H.message.trim().length > 0 || e$.length > 1),
                eY = Math.min(eV.groupIndex ?? 0, e$.length - 1),
                eX = eY === e$.length - 1,
                e0 = e$[eY],
                e1 = 1 === e0.length ? e0[0] : void 0,
                e2 = e1?.schema.type === "string" && (0, et.e)(e1.schema) ? (0, et.d)(e1.schema) : null,
                e3 = null == e1 ? void 0 : eW[e1.name],
                [e4, e5] = (0, d.useState)(null),
                [e6, e7] = (0, d.useState)(0),
                [e8, e9] = (0, d.useState)(!1),
                te = (0, d.useRef)(!1),
                tt = ek || e8,
                tn = ej || tt || e6 > 0;
            z[10] === Symbol.for("react.memo_cache_sentinel") ? (y = [], z[10] = y) : y = z[10];
            let [ta, tl] = (0, d.useState)(y);
            (0, d.useEffect)(() => {
                null != eO && null == em && (0, m.d)(eN, {
                    hostId: $,
                    requestId: J
                }, eO.items.length, {
                    threadId: G,
                    turnId: X
                })
            }, [G, $, em, J, eN, eO, X]);
            let ti = (e, t) => {
                    if (null == em || ew) {
                        let t = eN.get(g.c).get(eT),
                            n = null != t && "kind" in t.draft && t.draft.kind === H.kind ? t.draft : er(H);
                        (0, g.d)(eN, eT, {
                            conversationId: G,
                            draft: e(n),
                            requestId: J,
                            cleanupOwner: ew ? "hosted" : void 0
                        })
                    } else eK(e);
                    null != t && tl(e => e.filter(e => e !== t))
                },
                tr = (e, t) => {
                    tn || ti(n => ({
                        ...n,
                        values: {
                            ...n.values,
                            [e]: t
                        }
                    }), e)
                },
                to = (e, t) => {
                    if (ek || te.current) return Promise.resolve(!1);
                    if ((0, en.a)(eN, {
                            action: e,
                            formType: T ?? (eA ? "mcp" : "openai"),
                            identity: O
                        }), null != em) return em(e, t);
                    let n = () => (0, p.b)(eN, $).replyWithMcpServerElicitationResponse(G, J, (0, c.b)(e, null, t ?? {}));
                    return null == eu ? n().then(ty, tv) : (te.current = !0, e9(!0), eu("submitting"), Promise.resolve().then(n).then(() => (eu({
                        accept: "accepted",
                        decline: "declined",
                        cancel: "canceled"
                    } [e]), !0), () => (eu("failed"), !1)).finally(() => {
                        te.current = !1, e9(!1)
                    }))
                },
                tc = e => {
                    tn || (e5(null), ti(t => ({
                        ...t,
                        groupIndex: e
                    })))
                },
                td = e => {
                    if (tn) return;
                    let t = e;
                    if (eX && eP?.required && null == t) {
                        let e = eP.options;
                        if (1 !== e.length) return void eM.current?.focus();
                        t = e[0].const
                    }
                    let n = {
                        ...eV.values
                    };
                    null != eP && (null == t ? delete n[eP.name] : (0, et.g)(n, eP.name, t));
                    let a = function(e, t, n) {
                            let a = {
                                ...t.values
                            };
                            for (let [e, n] of Object.entries(t.customDrafts)) a[e] = es(a[e], n);
                            switch (e.kind) {
                                case "formElicitation":
                                    return (0, ei.a)(e.schema, a);
                                case "openaiForm":
                                    return (0, ea.b)(e.schema, a, t.fileOptions, n);
                                case "legacyOpenAIForm":
                                    return (0, el.a)(e.schema, a)
                            }
                        }(H, {
                            ...eV,
                            values: null == eI ? n : {
                                [eI]: !0
                            }
                        }, ex),
                        l = eX ? a.invalidFieldNames : a.invalidFieldNames.filter(e => e0.some(t => t.name === e));
                    if (tl(l), l.length > 0) {
                        let e = l[0],
                            t = e$.findIndex(t => t.some(t => t.name === e));
                        if (t >= 0 && t !== eY) return void tc(t);
                        let n = Array.from(eS.current?.querySelectorAll("[data-mcp-form-field]") ?? []).find(t => t.dataset.mcpFormField === e),
                            a = n?.querySelector('input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), [contenteditable="true"], button:not(:disabled)');
                        return void(a ?? n)?.focus()
                    }
                    if (!eX) return void tc(eY + 1);
                    if (null == a.content) return;
                    let i = to("accept", a.content);
                    if (null != em || null == eO || null == ez) return;
                    let r = a.content[ez.name];
                    if ("string" != typeof r) return;
                    let s = eO.items.findIndex(e => e.id === r);
                    s < 0 || i.then(e => {
                        !1 !== e && (0, m.e)(eN, {
                            hostId: $,
                            requestId: J
                        }, r, s)
                    })
                },
                tu = e => {
                    if (!e.defaultPrevented && !e.nativeEvent.isComposing && e.target instanceof HTMLElement && e.currentTarget.contains(e.target)) {
                        if ("Escape" === e.key) {
                            e.preventDefault(), to("cancel");
                            return
                        }
                        if (!(tn || null == e.target.closest('button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]') && ec(e, () => e.currentTarget.requestSubmit())) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && null == e.target.closest('textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]') && 1 === e0.length && /^[1-9]$/.test(e.key)) {
                            let t = e.currentTarget.querySelectorAll('[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)')[Number(e.key) - 1];
                            null != t && (e.preventDefault(), e.repeat || t.click())
                        }
                    }
                },
                tm = null == eh && eL.some(tb),
                tp = (0, s.x)(null == em && tm ? th : null, $);
            if (eE?.presentation != null) {
                let e, t;
                return z[11] !== H || z[12] !== J ? (e = JSON.stringify([J, H]), z[11] = H, z[12] = J, z[13] = e) : e = z[13], z[14] !== e_ ? (t = null != e_ ? (0, a.jsx)(Z, {
                    review: e_.review
                }) : null, z[14] = e_, z[15] = t) : t = z[15], (0, a.jsx)(i.a, {
                    className: "contents",
                    children: (0, a.jsx)(N.a, {
                        presentation: eE.presentation,
                        message: H.message,
                        details: e_?.details,
                        compact: null != e_,
                        disabled: tn,
                        isSubmitting: tt,
                        completed: Q,
                        standalone: "standalone" === B,
                        onOpen: eo,
                        onConfirm: td,
                        onCancel: () => void to("cancel"),
                        children: t
                    }, e)
                })
            }
            if (tm && !tp) {
                let e;
                return z[16] !== G || z[17] !== H.serverName || z[18] !== $ || z[19] !== em || z[20] !== eu || z[21] !== J || z[22] !== tt ? (e = (0, a.jsx)(ed.a, {
                    conversationId: G,
                    hostId: $,
                    isSubmitting: tt,
                    requestId: J,
                    serverName: H.serverName,
                    onReply: em,
                    onStandaloneResponseChange: eu
                }), z[16] = G, z[17] = H.serverName, z[18] = $, z[19] = em, z[20] = eu, z[21] = J, z[22] = tt, z[23] = e) : e = z[23], e
            }
            let tx = i.a,
                tg = f.a,
                tk = null != eo || void 0;
            z[24] !== eo ? (w = e => {
                "Escape" === e.key || e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || eo?.()
            }, j = e => {
                e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]") || eo?.()
            }, C = e => {
                (0, x.b)(e.dataTransfer) && eo?.()
            }, z[24] = eo, z[25] = w, z[26] = j, z[27] = C) : (w = z[25], j = z[26], C = z[27]);
            let tN = e => {
                    e.preventDefault(), td()
                },
                tC = eJ && (0, a.jsx)(tf, {
                    isSubmitting: tt,
                    elicitation: H,
                    field: e1?.schema,
                    hostId: $,
                    conversationId: G,
                    groupIndex: eY,
                    groupCount: e$.length,
                    onCancel: () => void to("cancel")
                }),
                tS = null == eI && e0.length > 0 && (0, a.jsx)("div", {
                    className: (0, r.b)("flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3", !eJ && "pt-3"),
                    children: e0.map((e, t) => (0, a.jsx)(ts, {
                        autoFocus: eF && 0 === t,
                        disabled: ej,
                        interactionDisabled: tn,
                        field: e,
                        isOnlyField: 1 === e0.length,
                        draft: eV,
                        expanded: e4 === e.name,
                        hostId: $,
                        invalid: ta.includes(e.name),
                        metadataInHeader: eJ && 1 === e0.length,
                        onCloseExpanded: () => e5(null),
                        onDraftChange: ti,
                        onValueChange: tr,
                        onPickLegacyFile: ef,
                        onPickingChange: e => e7(t => t + (e ? 1 : -1)),
                        onPickFiles: eh,
                        onPreview: ey,
                        onViewAll: e0.length > 1 && (0, ea.c)(e.schema) && eV.fileOptions[e.name].length > 1 ? () => e5(e.name) : void 0
                    }, e.name))
                }, eY),
                tM = null != eI ? (0, a.jsx)(k, {
                    disabled: tn,
                    isSubmitting: tt,
                    hotkeysEnabled: eF,
                    onDecline: () => void to("decline")
                }) : (0, a.jsx)(eg, {
                    primaryActionRef: eM,
                    isSubmitting: tt,
                    autoResolution: W,
                    disabled: tn,
                    submitDisabled: tn || null != e1 && e1.required && (0, el.b)(e1.schema) && !(0, el.c)(e1.schema, eW[e1.name]),
                    fieldCount: e0.length,
                    isLastGroup: eX,
                    onBack: eY > 0 ? () => tc(eY - 1) : void 0,
                    hotkeysEnabled: eF,
                    acceptOptions: eX && null != eP ? {
                        options: eP.options,
                        required: eP.required,
                        onSelect: td
                    } : void 0,
                    isStandardForm: eA,
                    showSubmit: e1?.required !== !0 || null == e2 || "string" == typeof e3 && ("" !== e3 || e2.some(e => e.const === e3)),
                    showHeader: eJ,
                    onCancel: () => void to("cancel"),
                    onDecline: () => void to("decline"),
                    onDismissLegacyImagePicker: eD ? () => {
                        null == em && (0, m.b)(eN, {
                            hostId: $,
                            requestId: J
                        }), to("decline")
                    } : void 0,
                    onViewAll: null != e1 && (0, ea.c)(e1.schema) && eV.fileOptions[e1.name].length > 1 ? () => e5(e1.name) : void 0
                });
            return z[28] !== eS || z[29] !== tu || z[30] !== tk || z[31] !== w || z[32] !== j || z[33] !== C || z[34] !== tN || z[35] !== tC || z[36] !== tS || z[37] !== tM ? (M = (0, a.jsxs)("form", {
                ref: eS,
                className: "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
                noValidate: !0,
                tabIndex: -1,
                "data-codex-character-input-boundary": !0,
                "data-codex-escape-boundary": !0,
                "data-user-input-auto-resolution": tk,
                onKeyDownCapture: w,
                onPointerDownCapture: j,
                onDropCapture: C,
                onKeyDown: tu,
                onSubmit: tN,
                children: [tC, tS, tM]
            }), z[28] = eS, z[29] = tu, z[30] = tk, z[31] = w, z[32] = j, z[33] = C, z[34] = tN, z[35] = tC, z[36] = tS, z[37] = tM, z[38] = M) : M = z[38], z[39] !== tg || z[40] !== M ? (F = (0, a.jsx)(tg, {
                className: "@container/request-card",
                children: M
            }), z[39] = tg, z[40] = M, z[41] = F) : F = z[41], z[42] !== tx || z[43] !== F ? (A = (0, a.jsx)(tx, {
                className: "contents",
                children: F
            }), z[42] = tx, z[43] = F, z[44] = A) : A = z[44], A
        }

        function tb(e) {
            let {
                schema: t
            } = e;
            return (0, ea.c)(t) && null != t["x-openai-input"].userOptions
        }

        function tv() {
            return !1
        }

        function ty() {
            return !0
        }

        function tw(e) {
            return e.properties
        }

        function tj(e) {
            return [e.name, e]
        }

        function tk(e) {
            let t, i, r = (0, l.c)(9),
                o = (0, s.y)(X.a),
                c = (0, u.a)();
            r[0] !== c || r[1] !== e.conversationId || r[2] !== e.elicitation || r[3] !== e.hostId || r[4] !== o ? (t = (t, a) => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(858617)]).then(n.bind(n, "sJLg")).then(n => {
                    let {
                        openFormPreview: l
                    } = n;
                    return l(o, {
                        hostId: e.hostId,
                        threadId: e.conversationId,
                        server: e.elicitation.serverName,
                        target: t,
                        title: a
                    })
                }).catch(tN).then(e => {
                    e || o.get(b.f).danger(c.formatMessage({
                        id: "composer.mcpFormElicitation.previewUnavailable",
                        defaultMessage: "Couldn't open preview"
                    }), {
                        errorAnalytics: {
                            toastId: "composer.mcpFormElicitation.previewUnavailable"
                        }
                    })
                })
            }, r[0] = c, r[1] = e.conversationId, r[2] = e.elicitation, r[3] = e.hostId, r[4] = o, r[5] = t) : t = r[5];
            let d = t;
            return r[6] !== d || r[7] !== e ? (i = (0, a.jsx)(tg, {
                ...e,
                onPreview: d
            }), r[6] = d, r[7] = e, r[8] = i) : i = r[8], i
        }

        function tN() {
            return !1
        }
    }),
    MnTr: (function(e, t, n) {
        n.d(t, {
            a: () => u,
            b: () => m
        });
        var a = n("ABep"),
            l = n("QosV"),
            i = n("ULZ9"),
            r = n("on57"),
            s = n("zd8w"),
            o = n("v7qY"),
            c = "PortalBoundary-TFj9W2";
        let d = (0, s.createContext)({
            container: null
        });

        function u(e) {
            let t, n, o, u, m, p, f, h, x = (0, l.c)(20),
                {
                    children: g,
                    className: b,
                    theme: v,
                    themeClassName: y
                } = e,
                [w, j] = (0, s.useState)(null);
            x[0] !== w ? (t = () => {
                if (null == w) return;
                let e = () => {
                    let e = String(w.currentCSSZoom ?? 1);
                    w.style.getPropertyValue("--puik-portal-zoom") !== e && w.style.setProperty("--puik-portal-zoom", e)
                };
                e();
                let t = new MutationObserver(e);
                for (let e = w; null != e; e = e.parentElement) t.observe(e, {
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                });
                return () => t.disconnect()
            }, n = [w], x[0] = w, x[1] = t, x[2] = n) : (t = x[1], n = x[2]), (0, s.useLayoutEffect)(t, n), x[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                null != e && j(e)
            }, x[3] = o) : o = x[3], x[4] !== b || x[5] !== y ? (u = (0, r.b)("relative", c, y, b), x[4] = b, x[5] = y, x[6] = u) : u = x[6];
            let k = w ?? void 0;
            return x[7] !== w || x[8] !== y ? (m = {
                container: w,
                themeClassName: y
            }, x[7] = w, x[8] = y, x[9] = m) : m = x[9], x[10] !== g || x[11] !== m ? (p = (0, a.jsx)(d.Provider, {
                value: m,
                children: g
            }), x[10] = g, x[11] = m, x[12] = p) : p = x[12], x[13] !== k || x[14] !== p ? (f = (0, a.jsx)(i.a, {
                radixPortalContainer: k,
                children: p
            }), x[13] = k, x[14] = p, x[15] = f) : f = x[15], x[16] !== u || x[17] !== f || x[18] !== v ? (h = (0, a.jsx)("div", {
                ref: o,
                className: u,
                "data-theme": v,
                children: f
            }), x[16] = u, x[17] = f, x[18] = v, x[19] = h) : h = x[19], h
        }

        function m(e) {
            let t, n, u, m, p, f, h, x = (0, l.c)(24),
                {
                    children: g,
                    theme: b
                } = e,
                {
                    container: v,
                    themeClassName: y
                } = (0, s.useContext)(d);
            x[0] !== v ? (t = v?.closest("dialog:modal"), x[0] = v, x[1] = t) : t = x[1];
            let w = t,
                [j, k] = (0, s.useState)(null);
            x[2] !== v || x[3] !== w?.currentCSSZoom || x[4] !== j ? (n = () => {
                if (null == v || null == j) return;
                let e = v.ownerDocument.defaultView;
                if (null == e) return;
                let t = [];
                for (let e = v; null != e; e = e.parentElement) t.push(e);
                let n = () => {
                        let n = v.currentCSSZoom ?? 1,
                            a = w?.currentCSSZoom ?? 1,
                            l = t.map(t => e.getComputedStyle(t)),
                            i = t.some((e, t) => {
                                let n = l[t];
                                return e.hasAttribute("inert") || e.hidden || "true" === e.getAttribute("aria-hidden") || "none" === n.display || "hidden" === n.visibility || "collapse" === n.visibility || "hidden" === n.contentVisibility
                            });
                        j.style.setProperty("zoom", String(n / a)), j.style.setProperty("--puik-portal-zoom", String(n)), j.toggleAttribute("inert", i), j.toggleAttribute("hidden", i)
                    },
                    a = new MutationObserver(n),
                    l = !1,
                    i = () => {
                        let i = null != j.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]');
                        if (i !== l)
                            if (l = i, i) {
                                for (let e of (n(), t)) a.observe(e, {
                                    attributes: !0,
                                    attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"]
                                });
                                e.addEventListener("resize", n)
                            } else a.disconnect(), e.removeEventListener("resize", n)
                    },
                    r = new MutationObserver(i);
                return r.observe(j, {
                    childList: !0,
                    subtree: !0
                }), i(), () => {
                    r.disconnect(), a.disconnect(), e.removeEventListener("resize", n), j.setAttribute("hidden", ""), j.setAttribute("inert", "")
                }
            }, x[2] = v, x[3] = w?.currentCSSZoom, x[4] = j, x[5] = n) : n = x[5], x[6] !== v || x[7] !== w || x[8] !== j ? (u = [v, w, j], x[6] = v, x[7] = w, x[8] = j, x[9] = u) : u = x[9], (0, s.useLayoutEffect)(n, u);
            let N = j ?? void 0;
            return x[10] !== g || x[11] !== j ? (m = "function" == typeof g ? g(j) : g, x[10] = g, x[11] = j, x[12] = m) : m = x[12], x[13] !== N || x[14] !== m ? (p = (0, a.jsx)(i.a, {
                radixPortalContainer: N,
                children: m
            }), x[13] = N, x[14] = m, x[15] = p) : p = x[15], x[16] !== v || x[17] !== w || x[18] !== b || x[19] !== y ? (f = null != v && (0, o.createPortal)((0, a.jsx)("div", {
                ref: e => {
                    null != e && k(e)
                },
                className: (0, r.b)("relative", c, "PortalSurface-LW3Uz2", y),
                "data-theme": b
            }), w ?? v.ownerDocument.body), x[16] = v, x[17] = w, x[18] = b, x[19] = y, x[20] = f) : f = x[20], x[21] !== p || x[22] !== f ? (h = (0, a.jsxs)(a.Fragment, {
                children: [p, f]
            }), x[21] = p, x[22] = f, x[23] = h) : h = x[23], h
        }
    })
};