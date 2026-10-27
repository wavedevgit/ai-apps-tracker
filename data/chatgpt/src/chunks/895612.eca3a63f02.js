export const __rspack_esm_id = 895612;
export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    gTcE: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("QgCC"),
            l = a("DHDJ"),
            r = a("on57"),
            s = a("zd8w"),
            d = a("Wf1j"),
            c = a("oyxz"),
            u = a("ygO2"),
            f = a("JNtf"),
            p = a("mUDD"),
            m = a("HOLv"),
            g = a("zLIa");

        function b(e) {
            let t, a, b, x, y, v, k, w, j, _, C, S, M, T, F, I, R, O, P, N, D, B, A, L, E, z, U, q, W, G, V, Q = (0, n.c)(92),
                {
                    belowFreeformContent: K,
                    closeOnSubmit: H,
                    freeformFeedbackRequired: $,
                    hideFreeformInput: J,
                    initialDetails: Y,
                    initialSelectedOptionId: X,
                    onClose: Z,
                    onOptionSelect: ee,
                    onSubmit: et,
                    onSave: ea,
                    options: eo,
                    size: en,
                    submitDisabled: ei
                } = e,
                el = void 0 === H ? "after-submit" : H,
                er = void 0 !== J && J,
                es = void 0 === en ? "wide" : en,
                ed = void 0 !== ei && ei,
                ec = (0, d.a)(),
                [eu, ef] = (0, s.useState)(void 0 === Y ? "" : Y),
                [ep, em] = (0, s.useState)(null),
                [eg, eb] = (0, s.useState)(X ?? null);
            if (Q[0] !== el || Q[1] !== eu || Q[2] !== $ || Q[3] !== ec || Q[4] !== Z || Q[5] !== ee || Q[6] !== ea || Q[7] !== et || Q[8] !== eo || Q[9] !== ep || Q[10] !== eg || Q[11] !== es || Q[12] !== ed) {
                let e, n, s, d, u, g = eu.trim();
                Q[35] !== $ || Q[36] !== ec ? (e = $ ? ec.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.required",
                    defaultMessage: "Share details (required)",
                    description: "Placeholder for a required freeform feedback details field"
                }) : ec.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.optional",
                    defaultMessage: "Share details (optional)",
                    description: "Placeholder for an optional freeform feedback details field"
                }), Q[35] = $, Q[36] = ec, Q[37] = e) : e = Q[37], y = e, Q[38] !== ec ? (n = ec.formatMessage({
                    id: "feedbackFormDialog.optionsLabel",
                    defaultMessage: "Feedback options",
                    description: "Accessible label for feedback options"
                }), Q[38] = ec, Q[39] = n) : n = Q[39];
                let h = n;
                k = null == eg || $ && 0 === g.length, Q[40] !== Z || Q[41] !== ep ? (s = e => {
                    e || null != ep || Z()
                }, Q[40] = Z, Q[41] = ep, Q[42] = s) : s = Q[42];
                let A = s;
                v = async e => {
                    if (null == eg || null != ep || k || e === et && ed) return;
                    if ("immediate" === el) {
                        !1 !== e({
                            selectedOptionId: eg,
                            details: g
                        }) && Z();
                        return
                    }
                    em(e === ea ? "save" : "submit");
                    let t = !1;
                    await (async () => {
                        t = await e({
                            selectedOptionId: eg,
                            details: g
                        }) !== !1
                    })().finally(() => {
                        em(null)
                    }), t && Z()
                }, Q[43] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.submit",
                    defaultMessage: "Submit",
                    description: "Label for the button that submits feedback"
                }), Q[43] = d) : d = Q[43], j = d, Q[44] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.saveLocally",
                    defaultMessage: "Save locally…",
                    description: "Button that saves the selected feedback and diagnostics to a local ZIP file without sending them"
                }), Q[44] = u) : u = Q[44], w = u, x = f.b, I = !0, R = A, O = es, b = p.b, C = "form", S = "gap-2", M = "viewport", T = e => {
                    e.preventDefault(), v(et)
                }, Q[45] === Symbol.for("react.memo_cache_sentinel") ? (F = (0, o.jsx)(p.e, {
                    children: (0, o.jsx)(p.d, {
                        title: (0, o.jsx)(f.e, {
                            children: (0, o.jsx)(c.a, {
                                id: "feedbackFormDialog.title",
                                defaultMessage: "Share feedback",
                                description: "Title for feedback dialog"
                            })
                        }),
                        titleSize: "dialog"
                    })
                }), Q[45] = F) : F = Q[45], a = p.e, t = p.f, _ = "gap-3", P = "radiogroup", N = h, D = "flex flex-wrap gap-2", B = eo.map(e => {
                    let t = eg === e.id,
                        a = t ? i.a : l.a;
                    return (0, o.jsxs)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": t,
                        onClick: () => {
                            eb(e.id), ee?.({
                                details: g,
                                selectedOptionId: e.id
                            })
                        },
                        className: (0, r.b)("border-default cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: [(0, o.jsx)(m.a, {
                            asset: a,
                            "aria-hidden": !1
                        }), (0, o.jsx)(c.a, {
                            ...e.label
                        })]
                    }, e.id)
                }), Q[0] = el, Q[1] = eu, Q[2] = $, Q[3] = ec, Q[4] = Z, Q[5] = ee, Q[6] = ea, Q[7] = et, Q[8] = eo, Q[9] = ep, Q[10] = eg, Q[11] = es, Q[12] = ed, Q[13] = t, Q[14] = a, Q[15] = b, Q[16] = x, Q[17] = y, Q[18] = v, Q[19] = k, Q[20] = w, Q[21] = j, Q[22] = _, Q[23] = C, Q[24] = S, Q[25] = M, Q[26] = T, Q[27] = F, Q[28] = I, Q[29] = R, Q[30] = O, Q[31] = P, Q[32] = N, Q[33] = D, Q[34] = B
            } else t = Q[13], a = Q[14], b = Q[15], x = Q[16], y = Q[17], v = Q[18], k = Q[19], w = Q[20], j = Q[21], _ = Q[22], C = Q[23], S = Q[24], M = Q[25], T = Q[26], F = Q[27], I = Q[28], R = Q[29], O = Q[30], P = Q[31], N = Q[32], D = Q[33], B = Q[34];
            Q[46] !== P || Q[47] !== N || Q[48] !== D || Q[49] !== B ? (A = (0, o.jsx)("div", {
                role: P,
                "aria-label": N,
                className: D,
                children: B
            }), Q[46] = P, Q[47] = N, Q[48] = D, Q[49] = B, Q[50] = A) : A = Q[50], Q[51] !== eu || Q[52] !== y || Q[53] !== er ? (L = er ? null : (0, o.jsx)(g.c, {
                autoFocus: !0,
                rows: 5,
                placeholder: y,
                "aria-label": y,
                value: eu,
                onChange: e => {
                    ef(e.target.value)
                },
                onKeyDown: h
            }), Q[51] = eu, Q[52] = y, Q[53] = er, Q[54] = L) : L = Q[54], Q[55] !== t || Q[56] !== K || Q[57] !== _ || Q[58] !== A || Q[59] !== L ? (E = (0, o.jsxs)(t, {
                className: _,
                children: [A, L, K]
            }), Q[55] = t, Q[56] = K, Q[57] = _, Q[58] = A, Q[59] = L, Q[60] = E) : E = Q[60], Q[61] !== a || Q[62] !== E ? (z = (0, o.jsx)(a, {
                children: E
            }), Q[61] = a, Q[62] = E, Q[63] = z) : z = Q[63], Q[64] !== v || Q[65] !== k || Q[66] !== ea || Q[67] !== ep || Q[68] !== w ? (U = null != ea ? (0, o.jsx)(u.a, {
                color: "secondary",
                disabled: k || null != ep,
                loading: "save" === ep,
                sizingLabels: w,
                type: "button",
                onClick: () => {
                    v(ea)
                },
                children: w
            }) : null, Q[64] = v, Q[65] = k, Q[66] = ea, Q[67] = ep, Q[68] = w, Q[69] = U) : U = Q[69];
            let eh = ed || k || null != ep,
                ex = "submit" === ep;
            return Q[70] !== j || Q[71] !== eh || Q[72] !== ex ? (q = (0, o.jsx)(u.a, {
                color: "primary",
                disabled: eh,
                loading: ex,
                sizingLabels: j,
                type: "submit",
                children: j
            }), Q[70] = j, Q[71] = eh, Q[72] = ex, Q[73] = q) : q = Q[73], Q[74] !== U || Q[75] !== q ? (W = (0, o.jsx)(p.e, {
                children: (0, o.jsxs)(p.c, {
                    expandSingleButton: !1,
                    children: [U, q]
                })
            }), Q[74] = U, Q[75] = q, Q[76] = W) : W = Q[76], Q[77] !== b || Q[78] !== C || Q[79] !== S || Q[80] !== M || Q[81] !== T || Q[82] !== F || Q[83] !== z || Q[84] !== W ? (G = (0, o.jsxs)(b, {
                as: C,
                className: S,
                size: M,
                onSubmit: T,
                children: [F, z, W]
            }), Q[77] = b, Q[78] = C, Q[79] = S, Q[80] = M, Q[81] = T, Q[82] = F, Q[83] = z, Q[84] = W, Q[85] = G) : G = Q[85], Q[86] !== x || Q[87] !== I || Q[88] !== R || Q[89] !== O || Q[90] !== G ? (V = (0, o.jsx)(x, {
                open: I,
                onOpenChange: R,
                size: O,
                children: G
            }), Q[86] = x, Q[87] = I, Q[88] = R, Q[89] = O, Q[90] = G, Q[91] = V) : V = Q[91], V
        }

        function h(e) {
            "Enter" === e.key && e.metaKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit())
        }
        a.d(t, {
            a: () => b
        })
    }),
    UrAA: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            l = a("Ot7V");
        let r = "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";

        function s() {
            let e, t = (0, n.c)(2);
            return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)("div", {
                className: "text-sm text-codex-description",
                children: (0, o.jsx)(i.a, {
                    id: "turnRatingControls.feedbackLegalNotice",
                    defaultMessage: "Your feedback can be used to improve ChatGPT. <link>Learn more</link>.",
                    description: "Legal notice shown below feedback details",
                    values: {
                        link: d
                    }
                })
            }), t[1] = e) : e = t[1], e
        }

        function d(e) {
            return (0, o.jsx)("a", {
                className: "underline underline-offset-2",
                href: r,
                rel: "noreferrer",
                target: "_blank",
                onClick: c,
                children: e
            })
        }

        function c(e) {
            (0, l.e)({
                event: e,
                href: r,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser"
            })
        }
        a.d(t, {
            a: () => s
        })
    }),
    nIGo: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("lUoP"),
            l = a("zd8w"),
            r = a("Wf1j"),
            s = a("oyxz"),
            d = a("Qgfj"),
            c = a("ygO2"),
            u = a("bqtn"),
            f = a("bf6R"),
            p = a("UxN3"),
            m = a("mDqV");

        function g(e) {
            let t, a, d, g, x, y, v, k, w, j, _, C, S, M, T, F, I = (0, n.c)(97),
                {
                    disabled: R,
                    hideUnselectedRating: O,
                    isAnimated: P,
                    menuItems: N,
                    rating: D,
                    onRate: B,
                    shouldRestoreFocus: A,
                    variant: L
                } = e,
                E = void 0 !== R && R,
                z = void 0 !== O && O,
                U = void 0 !== P && P,
                q = void 0 === L ? "response" : L,
                W = (0, r.a)(),
                G = (0, l.useRef)(null),
                V = (0, l.useRef)(null),
                Q = (0, l.useRef)(!1);
            I[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                Q.current && ((V.current ?? G.current)?.focus(), Q.current = !1)
            }, I[0] = t) : t = I[0], I[1] !== D ? (a = [D], I[1] = D, I[2] = a) : a = I[2], (0, l.useLayoutEffect)(t, a), I[3] !== B || I[4] !== D || I[5] !== A ? (d = e => {
                Q.current = A?.(D === e ? null : e) ?? !0, B(e)
            }, I[3] = B, I[4] = D, I[5] = A, I[6] = d) : d = I[6];
            let K = d;
            if ("imageTurn" === q || "imageOverlay" === q) {
                let e, t, a, n, l, r = "imageOverlay" === q ? "mediaOverlay" : "secondary",
                    s = "imageOverlay" === q ? "mediaOverlay" : "ghost";
                I[7] !== W || I[8] !== U ? (e = U ? W.formatMessage(h.likeGif) : W.formatMessage(h.likeImage), I[7] = W, I[8] = U, I[9] = e) : e = I[9];
                let d = e;
                I[10] !== W || I[11] !== U ? (t = U ? W.formatMessage(h.dislikeGif) : W.formatMessage(h.dislikeImage), I[10] = W, I[11] = U, I[12] = t) : t = I[12];
                let u = t;
                return I[13] !== E || I[14] !== d || I[15] !== K || I[16] !== D || I[17] !== r || I[18] !== s || I[19] !== q ? (a = "thumbsDown" !== D ? (0, o.jsx)(i.a, {
                    content: d,
                    children: (0, o.jsx)(c.a, {
                        ref: G,
                        "aria-label": d,
                        "aria-pressed": "thumbsUp" === D,
                        color: "thumbsUp" === D ? r : s,
                        disabled: E || "thumbsUp" === D,
                        size: "imageOverlay" === q ? "inputIcon" : "icon",
                        radius: "imageOverlay" === q ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === q && e.stopPropagation(), K("thumbsUp")
                        },
                        children: "thumbsUp" === D ? (0, o.jsx)(f.Oi, {}) : (0, o.jsx)(f.Mi, {})
                    })
                }) : null, I[13] = E, I[14] = d, I[15] = K, I[16] = D, I[17] = r, I[18] = s, I[19] = q, I[20] = a) : a = I[20], I[21] !== E || I[22] !== u || I[23] !== K || I[24] !== D || I[25] !== r || I[26] !== s || I[27] !== q ? (n = "thumbsUp" !== D ? (0, o.jsx)(i.a, {
                    content: u,
                    children: (0, o.jsx)(c.a, {
                        ref: G,
                        "aria-label": u,
                        "aria-pressed": "thumbsDown" === D,
                        color: "thumbsDown" === D ? r : s,
                        disabled: E || "thumbsDown" === D,
                        size: "imageOverlay" === q ? "inputIcon" : "icon",
                        radius: "imageOverlay" === q ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === q && e.stopPropagation(), K("thumbsDown")
                        },
                        children: "thumbsDown" === D ? (0, o.jsx)(f.Ki, {}) : (0, o.jsx)(f.Ii, {})
                    })
                }) : null, I[21] = E, I[22] = u, I[23] = K, I[24] = D, I[25] = r, I[26] = s, I[27] = q, I[28] = n) : n = I[28], I[29] !== a || I[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                    children: [a, n]
                }), I[29] = a, I[30] = n, I[31] = l) : l = I[31], l
            }
            if ("imageViewerMenu" === q || "imageViewerSubmenu" === q) {
                let e, t, a, n;
                I[32] !== z || I[33] !== U || I[34] !== K || I[35] !== D ? (e = z && "thumbsDown" === D ? null : (0, o.jsx)(u.c.Item, {
                    leftIcon: "thumbsUp" === D ? (0, o.jsx)(f.Oi, {}) : (0, o.jsx)(f.Mi, {}),
                    onSelect: () => K("thumbsUp"),
                    children: U ? (0, o.jsx)(s.a, {
                        ...h.likeGif
                    }) : (0, o.jsx)(s.a, {
                        ...h.likeImage
                    })
                }), I[32] = z, I[33] = U, I[34] = K, I[35] = D, I[36] = e) : e = I[36], I[37] !== z || I[38] !== U || I[39] !== K || I[40] !== D ? (t = z && "thumbsUp" === D ? null : (0, o.jsx)(u.c.Item, {
                    leftIcon: "thumbsDown" === D ? (0, o.jsx)(f.Ki, {}) : (0, o.jsx)(f.Ii, {}),
                    onSelect: () => K("thumbsDown"),
                    children: U ? (0, o.jsx)(s.a, {
                        ...h.dislikeGif
                    }) : (0, o.jsx)(s.a, {
                        ...h.dislikeImage
                    })
                }), I[37] = z, I[38] = U, I[39] = K, I[40] = D, I[41] = t) : t = I[41], I[42] !== e || I[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [e, t]
                }), I[42] = e, I[43] = t, I[44] = a) : a = I[44];
                let i = a;
                if ("imageViewerSubmenu" === q) {
                    let e, t, a;
                    return I[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(s.a, {
                        ...h.imageFeedback
                    }), I[45] = e) : e = I[45], I[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                        icon: {
                            16: f.Pi,
                            20: f.Qi
                        }
                    }), I[46] = t) : t = I[46], I[47] !== E || I[48] !== i ? (a = (0, o.jsx)(m.q, {
                        ref: V,
                        disabled: E,
                        label: e,
                        leftIcon: t,
                        children: i
                    }), I[47] = E, I[48] = i, I[49] = a) : a = I[49], a
                }
                return I[50] !== E || I[51] !== i || I[52] !== N ? (n = (0, o.jsxs)(b, {
                    triggerRef: G,
                    disabled: E,
                    children: [N, i]
                }), I[50] = E, I[51] = i, I[52] = N, I[53] = n) : n = I[53], n
            }
            if (null != D) {
                let e, t, a, n, l, r, s = "thumbsUp" === D;
                I[54] !== s ? (e = s ? {
                    16: f.Ni,
                    20: f.Oi
                } : {
                    16: f.Ji,
                    20: f.Ki
                }, I[54] = s, I[55] = e) : e = I[55];
                let d = e;
                I[56] !== W || I[57] !== s ? (t = W.formatMessage(s ? h.removeGoodResponse : h.removeBadResponse), I[56] = W, I[57] = s, I[58] = t) : t = I[58];
                let u = t;
                return I[59] !== K || I[60] !== D ? (a = () => K(D), I[59] = K, I[60] = D, I[61] = a) : a = I[61], I[62] !== d ? (n = (0, o.jsx)(p.b, {
                    icon: d
                }), I[62] = d, I[63] = n) : n = I[63], I[64] !== E || I[65] !== u || I[66] !== a || I[67] !== n ? (l = (0, o.jsx)(c.a, {
                    ref: G,
                    type: "button",
                    "aria-label": u,
                    "aria-pressed": !0,
                    color: "ghost",
                    disabled: E,
                    size: "icon",
                    onClick: a,
                    children: n
                }), I[64] = E, I[65] = u, I[66] = a, I[67] = n, I[68] = l) : l = I[68], I[69] !== u || I[70] !== l ? (r = (0, o.jsx)(i.a, {
                    content: u,
                    children: l
                }), I[69] = u, I[70] = l, I[71] = r) : r = I[71], r
            }
            I[72] !== W ? (g = W.formatMessage(h.feedback), I[72] = W, I[73] = g) : g = I[73];
            let H = g;
            return I[74] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(p.b, {
                icon: {
                    16: f.Pi,
                    20: f.Qi
                }
            }), I[74] = x) : x = I[74], I[75] !== H ? (y = (0, o.jsx)(c.a, {
                ref: G,
                "aria-label": H,
                color: "ghost",
                size: "icon",
                children: x
            }), I[75] = H, I[76] = y) : y = I[76], I[77] !== H || I[78] !== y ? (v = (0, o.jsx)(i.a, {
                content: H,
                children: y
            }), I[77] = H, I[78] = y, I[79] = v) : v = I[79], I[80] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, o.jsx)(p.b, {
                icon: {
                    16: f.Li,
                    20: f.Mi
                }
            }), I[80] = k) : k = I[80], I[81] !== K ? (w = () => K("thumbsUp"), I[81] = K, I[82] = w) : w = I[82], I[83] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)(s.a, {
                ...h.goodResponse
            }), I[83] = j) : j = I[83], I[84] !== w ? (_ = (0, o.jsx)(u.c.Item, {
                leftIcon: k,
                onSelect: w,
                children: j
            }), I[84] = w, I[85] = _) : _ = I[85], I[86] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)(p.b, {
                icon: {
                    16: f.Hi,
                    20: f.Ii
                }
            }), I[86] = C) : C = I[86], I[87] !== K ? (S = () => K("thumbsDown"), I[87] = K, I[88] = S) : S = I[88], I[89] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(s.a, {
                ...h.badResponse
            }), I[89] = M) : M = I[89], I[90] !== S ? (T = (0, o.jsx)(u.c.Item, {
                leftIcon: C,
                onSelect: S,
                children: M
            }), I[90] = S, I[91] = T) : T = I[91], I[92] !== E || I[93] !== v || I[94] !== _ || I[95] !== T ? (F = (0, o.jsxs)(u.a, {
                disabled: E,
                side: "top",
                triggerButton: v,
                children: [_, T]
            }), I[92] = E, I[93] = v, I[94] = _, I[95] = T, I[96] = F) : F = I[96], F
        }

        function b(e) {
            let t, a, l, s, d, p = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: b
                } = e,
                x = void 0 !== g && g,
                y = (0, r.a)();
            p[0] !== y ? (t = y.formatMessage(h.imageMenu), p[0] = y, p[1] = t) : t = p[1];
            let v = t;
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.Yc, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== b ? (l = (0, o.jsx)(c.a, {
                ref: b,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), p[3] = x, p[4] = v, p[5] = b, p[6] = l) : l = p[6], p[7] !== v || p[8] !== l ? (s = (0, o.jsx)(i.a, {
                content: v,
                children: l
            }), p[7] = v, p[8] = l, p[9] = s) : s = p[9], p[10] !== m || p[11] !== x || p[12] !== s ? (d = (0, o.jsx)(u.a, {
                disabled: x,
                align: "end",
                side: "bottom",
                triggerButton: s,
                children: m
            }), p[10] = m, p[11] = x, p[12] = s, p[13] = d) : d = p[13], d
        }
        let h = (0, d.f)({
            imageFeedback: {
                id: "imageSidePanel.feedback",
                defaultMessage: "Feedback",
                description: "Submenu in the generated-image title menu that contains Like this image and Dislike this image feedback actions."
            },
            imageMenu: {
                id: "imageSidePanel.more",
                defaultMessage: "Show more",
                description: "Accessible label for the image viewer header menu with Like this image and Dislike this image feedback actions."
            },
            likeImage: {
                id: "imageSidePanel.like",
                defaultMessage: "Like this image",
                description: "Image feedback button or menu item that submits positive feedback for the displayed image. In the image viewer menu, selecting it again removes the existing positive rating."
            },
            dislikeImage: {
                id: "imageSidePanel.dislike",
                defaultMessage: "Dislike this image",
                description: "Image feedback button or menu item that submits negative feedback and opens a form for more detail. In the image viewer menu, selecting it again removes the existing negative rating."
            },
            likeGif: {
                id: "imageSidePanel.likeGif",
                defaultMessage: "Like this GIF",
                description: "Short tooltip, accessible button label, or viewer menu item for a generated animated GIF in a ChatGPT conversation. Selecting it submits positive feedback for the GIF. In the viewer menu, selecting it again removes the existing positive rating."
            },
            dislikeGif: {
                id: "imageSidePanel.dislikeGif",
                defaultMessage: "Dislike this GIF",
                description: "Short tooltip, accessible button label, or viewer menu item for a generated animated GIF in a ChatGPT conversation. Selecting it submits negative feedback for the GIF and opens a form for more detail. In the viewer menu, selecting it again removes the existing negative rating."
            },
            goodResponse: {
                id: "ConversationTurn.goodResponseFeedbackMenuItem",
                defaultMessage: "Good response",
                description: "Short menu item label in the feedback menu beneath a completed assistant response. Selecting it submits positive feedback for that response."
            },
            badResponse: {
                id: "ConversationTurn.badResponseFeedbackMenuItem",
                defaultMessage: "Bad response",
                description: "Short menu item label in the feedback menu beneath a completed assistant response. Selecting it submits negative feedback for that response."
            },
            feedback: {
                id: "ConversationTurn.rateResponseTooltip",
                defaultMessage: "Rate response",
                description: "Short tooltip and accessible label for the feedback action beneath a completed assistant response. Selecting it opens a menu with Good response and Bad response choices."
            },
            removeGoodResponse: {
                id: "ConversationTurn.removeGoodResponseFeedbackTooltip",
                defaultMessage: "Remove good response feedback",
                description: "Short tooltip and accessible label for selected positive feedback beneath a completed assistant response. Selecting it removes the feedback."
            },
            removeBadResponse: {
                id: "ConversationTurn.removeBadResponseFeedbackTooltip",
                defaultMessage: "Remove bad response feedback",
                description: "Short tooltip and accessible label for selected negative feedback beneath a completed assistant response. Selecting it removes the feedback."
            }
        });
        a.d(t, {
            a: () => b,
            b: () => g
        })
    }),
    taaw: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            l = a("Kwur"),
            r = a("OBi1"),
            s = a("HFSu");

        function d(e) {
            let t, a, i, l, s, d, m = (0, n.c)(37),
                {
                    onBackToFeedback: g,
                    onClose: b,
                    onCloseAutoFocus: h,
                    reportRequest: x,
                    adReport: y,
                    chatGptMessageId: v,
                    reportEntityType: k,
                    reportReasonsEntityType: w,
                    productArea: j,
                    successBody: _,
                    threadId: C,
                    title: S,
                    connectorId: M,
                    contentClassName: T
                } = e,
                F = "connector" === k ? M : C,
                I = w ?? k;
            m[0] !== y || m[1] !== g || m[2] !== b ? (t = null == g ? void 0 : () => {
                null == y && b(), g()
            }, m[0] = y, m[1] = g, m[2] = b, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== I ? (a = y?.queryKey ?? ["codex-thread-report-reasons", I], m[4] = y?.queryKey, m[5] = I, m[6] = a) : a = m[6], m[7] !== y || m[8] !== I || m[9] !== x ? (i = null == y ? () => f(I, x) : e => {
                let {
                    signal: t
                } = e;
                return y.loadReasons(t)
            }, m[7] = y, m[8] = I, m[9] = x, m[10] = i) : i = m[10];
            let R = null != y ? 0 : void 0,
                O = null != y,
                P = null != y,
                N = null != y ? "chatgpt" : void 0;
            m[11] !== y || m[12] !== v || m[13] !== j || m[14] !== k || m[15] !== F || m[16] !== x ? (l = e => {
                let {
                    reason: t,
                    details: a,
                    additionalFields: o
                } = e;
                return null != y ? y.submit({
                    id: t.id,
                    details: a || void 0
                }, o) : p({
                    details: a,
                    entityType: k,
                    reasonId: t.id,
                    threadId: F
                }, x, v, j)
            }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = F, m[16] = x, m[17] = l) : l = m[17];
            let D = null == x ? void 0 : u;
            return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (s = y?.title ?? (0, o.jsx)(c, {
                reportEntityType: k,
                title: S
            }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = s) : s = m[21], m[22] !== T || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== s || m[28] !== a || m[29] !== i || m[30] !== R || m[31] !== O || m[32] !== P || m[33] !== N || m[34] !== l || m[35] !== D ? (d = (0, o.jsx)(r.ReportDialog, {
                onBack: t,
                onClose: b,
                onCloseAutoFocus: h,
                queryKey: a,
                loadReasons: i,
                gcTime: R,
                includeServerFields: O,
                preventCloseWhileSubmitting: P,
                dialogVariant: N,
                contentClassName: T,
                submitReport: l,
                openExternalForm: D,
                successBody: _,
                title: s
            }), m[22] = T, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = s, m[28] = a, m[29] = i, m[30] = R, m[31] = O, m[32] = P, m[33] = N, m[34] = l, m[35] = D, m[36] = d) : d = m[36], d
        }

        function c(e) {
            let t, a = (0, n.c)(5),
                {
                    reportEntityType: l,
                    title: r
                } = e;
            if (null != r) {
                let e;
                return a[0] !== r ? (e = (0, o.jsx)(o.Fragment, {
                    children: r
                }), a[0] = r, a[1] = e) : e = a[1], e
            }
            if ("share_link" === l) {
                let e;
                return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(i.a, {
                    id: "codexThreadReportDialog.sharedConversationTitle",
                    defaultMessage: "Report a conversation",
                    description: "Title for the modal where users report a shared ChatGPT conversation for safety or legal reasons"
                }), a[2] = e) : e = a[2], e
            }
            if ("connector" === l) {
                let e;
                return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(i.a, {
                    id: "codexThreadReportDialog.connectorTitle",
                    defaultMessage: "Report app",
                    description: "Title for the dialog used to report a connected app for safety or legal reasons"
                }), a[3] = e) : e = a[3], e
            }
            return a[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(i.a, {
                id: "codexThreadReportDialog.title",
                defaultMessage: "Report response",
                description: "Title for the modal where users report a Codex response for safety or legal reasons"
            }), a[4] = t) : t = a[4], t
        }

        function u(e) {
            if (!/^https:\/\//i.test(e)) return;
            let t = document.createElement("a");
            t.href = e, t.target = "_blank", t.rel = "noopener noreferrer", t.click()
        }
        async function f(e, t) {
            if (null != t) {
                let a = await t(`/report_flow/reasons/${e}`);
                if (!a.ok) throw Error("Could not load reporting options");
                return await a.json()
            }
            return l.Request.safeGet("/report_flow/reasons/{entity_type}", {
                parameters: {
                    path: {
                        entity_type: e
                    }
                },
                additionalHeaders: (0, s.d)()
            })
        }
        async function p(e, t, a, o) {
            let {
                details: n,
                entityType: i,
                reasonId: r,
                threadId: d
            } = e, c = {
                entity_id: d,
                entity_type: i,
                additional_fields_values: "project" === i || "share_link" === i ? {} : void 0,
                product_area: o ?? ("conversation" === i || "connector" === i || "project" === i || "share_link" === i ? "1p" : "codex"),
                reason: 0 === n.length ? {
                    id: r
                } : {
                    id: r,
                    details: n
                }
            };
            if (null != t) {
                if (!(await t("/report_flow/report", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(c)
                    })).ok) throw Error("Could not submit report");
                return
            }
            await l.Request.safePost("/report_flow/report", {
                requestBody: c,
                additionalHeaders: {
                    ...(0, s.d)(),
                    ...null == a ? {} : {
                        "chatgpt-conv-message-id": a
                    }
                }
            })
        }
        a.d(t, {
            CodexThreadReportDialog: () => d
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            l = a("Yc0o"),
            r = a("U8sx"),
            s = a("xpW6");

        function d(e, t, a) {
            let {
                revealAndFocus: d,
                content: c,
                conversationId: u,
                hostId: f,
                insertPosition: p,
                key: m,
                path: g,
                syncOpenTabs: b,
                target: h,
                title: x
            } = t, y = `${f}:${u}:${m}`;
            return e.set(r.b, y, {
                content: c,
                path: g,
                save: null
            }), !!a(e, g, {
                revealAndFocus: d,
                hostId: f,
                insertPosition: p,
                onContentChange: t => {
                    e.set(r.b, y, e => e?.path === g ? {
                        ...e,
                        content: t
                    } : e)
                },
                onSaveChange: t => {
                    e.set(r.b, y, e => e?.path === g ? {
                        ...e,
                        save: t
                    } : e)
                },
                plan: {
                    conversationId: u,
                    key: m,
                    title: x
                },
                syncOpenTabs: b,
                tabId: l.a.PLAN,
                target: h
            }) && ((0, i.getThreadPanelTabController)((0, i.d)(e, l.a.PLAN) ?? "right").updateTab(e, l.a.PLAN, {
                icon: (0, o.jsx)(n.a, {
                    className: "shrink-0",
                    asset: s.a
                }),
                title: x
            }), e.set(r.a, {
                key: m,
                tabId: l.a.PLAN
            }), !0)
        }
        a.d(t, {
            openEditablePlanTabWithEditor: () => d
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("M7HN"), a("tl5a");
        var o = a("ZU27");
        a("GaA7"), a("sbaW"), a("ndjw");
        var n = a("bCmT");
        a("odlM"), a("VtLY");
        var i = a("Yc0o");
        a("WFY2"), a("bnxy"), a("cbrt");
        var l = a("U8sx");
        a("bRIv");
        let r = (0, n.b)({
            open: d
        });

        function s(e, t) {
            d(e, t)
        }

        function d(e, t) {
            let {
                content: a,
                conversationId: n,
                cwd: s,
                hideCodeBlocks: d,
                key: c,
                planKey: u,
                title: f
            } = t, {
                revealAndFocus: p = !0,
                insertPosition: m,
                tabId: g = i.a.PLAN
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e.set(l.a, {
                key: c,
                tabId: g
            }), (0, o.f)(e, r, {
                revealAndFocus: p,
                defaultState: () => ({
                    planKey: c,
                    scrollTop: 0
                }),
                durableRoute: null == u ? void 0 : {
                    kind: "plan",
                    params: {
                        planKey: u
                    },
                    payloadVersion: 1
                },
                id: g,
                insertPosition: m,
                onClose: e => {
                    e.get(l.a)?.key === c && e.set(l.a, null)
                },
                props: {
                    content: a,
                    conversationId: n,
                    cwd: s,
                    hideCodeBlocks: d,
                    planKey: c
                },
                title: f
            })
        }
        a.d(t, {
            activePlan$: () => l.a,
            editablePlanByKey$: () => l.b,
            editablePlanContentByKey$: () => l.c,
            openPlanSidePanel: () => s,
            openReadOnlyPlanSidePanel: () => d
        })
    }),
    U8sx: (function(e, t, a) {
        var o = a("iTtm"),
            n = a("OWtl"),
            i = a("tSEg");
        let l = (0, o.u)(i.a, null),
            r = (0, o.v)(n.a, e => null),
            s = (0, o.d)(n.a, (e, t) => {
                let {
                    get: a
                } = t;
                return a(r, e)?.content ?? null
            });
        a.d(t, {}, {
            a: l,
            b: r,
            c: s
        })
    }),
    CQTg: (function(e, t, a) {
        a.d(t, {
            a: () => F
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("lUoP"),
            l = a("on57"),
            r = a("IPUh"),
            s = a("iTtm"),
            d = a("zd8w"),
            c = a("Wf1j"),
            u = a("oyxz");
        a("ZU27"), a("gbrq");
        var f = a("ygO2"),
            p = a("uuN8"),
            m = a("HOLv"),
            g = a("POXM"),
            b = a("u6ch"),
            h = e => (0, o.jsx)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, o.jsx)("path", {
                    d: "M7.33496 16V12.665H4C3.63273 12.665 3.33496 12.3673 3.33496 12C3.33496 11.6327 3.63273 11.335 4 11.335H8C8.36727 11.335 8.66504 11.6327 8.66504 12V16C8.66504 16.3673 8.36727 16.665 8 16.665C7.63273 16.665 7.33496 16.3673 7.33496 16ZM11.335 4C11.335 3.63273 11.6327 3.33496 12 3.33496C12.3673 3.33496 12.665 3.63273 12.665 4V7.33496H16L16.1338 7.34863C16.4369 7.41057 16.665 7.67857 16.665 8C16.665 8.32143 16.4369 8.58943 16.1338 8.65137L16 8.66504H12C11.6327 8.66504 11.335 8.36727 11.335 8V4Z"
                })
            }),
            x = a("JdRz"),
            y = a("hYmo"),
            v = a("HWQc"),
            k = a("yGJW");
        a("tSEg");
        var w = a("sbaW"),
            j = a("V8uZ"),
            _ = a("aepO"),
            C = a("gBCz");
        a("Y05g");
        var S = a("umSm"),
            M = a("UUD2"),
            T = a("xpW6");

        function F(e) {
            let t, a = (0, n.c)(4);
            if (!1 === e.showOpenButton) {
                let t;
                return a[0] !== e ? (t = (0, o.jsx)(I, {
                    ...e
                }), a[0] = e, a[1] = t) : t = a[1], t
            }
            return a[2] !== e ? (t = (0, o.jsxs)(o.Fragment, {
                children: [null, (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(I, {
                        ...e
                    })
                })]
            }), a[2] = e, a[3] = t) : t = a[3], t
        }

        function I(e) {
            let t, a, F, I, O, P, N, D, B, A, L, E, z, U, q, W, G, V, Q, K, H, $, J, Y, X, Z, ee, et, ea, eo = (0, n.c)(106),
                {
                    item: en,
                    conversationId: ei,
                    cwd: el,
                    hideCodeBlocks: er,
                    defaultCollapsed: es,
                    hasArtifacts: ed,
                    reportEntityType: ec,
                    showOpenButton: eu,
                    turnId: ef,
                    isThreadPreview: ep,
                    isThreadPreviewCollapsed: em,
                    onOpenInSidePanel: eg
                } = e,
                eb = void 0 !== er && er,
                eh = void 0 !== ed && ed,
                ex = void 0 === ec ? "thread" : ec,
                ey = void 0 !== ep && ep,
                ev = void 0 !== em && em,
                [ek, ew] = (0, d.useState)(void 0 !== es && es),
                ej = (0, s.z)(w.threadHostId$),
                e_ = (0, c.a)(),
                eC = (0, s.z)(k.c),
                eS = (0, s.z)(g.a);
            (void 0 === eu || eu) && en.completed, eo[0] !== en.completed || eo[1] !== en.content ? (t = en.completed && en.content.trim().length > 0, eo[0] = en.completed, eo[1] = en.content, eo[2] = t) : t = eo[2];
            let eM = t;
            eo[3] !== en.completed || eo[4] !== en.content ? (a = en.completed && en.content.trim().length > 0, eo[3] = en.completed, eo[4] = en.content, eo[5] = a) : a = eo[5];
            let eT = eM && !0,
                eF = a && !0,
                eI = eS && null != ef && null != eC.submitCodexAnalyticsEvent && !0;
            eo[6] !== e_ ? (F = e_.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), eo[6] = e_, eo[7] = F) : F = eo[7];
            let eR = F;
            eo[8] !== e_ ? (I = e_.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel",
                description: "Tooltip text for button that opens the plan in the side panel"
            }), eo[8] = e_, eo[9] = I) : I = eo[9];
            let eO = I;
            eo[10] !== e_ ? (O = e_.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel",
                description: "Accessible label for the collapsed plan card that closes the plan side panel"
            }), eo[10] = e_, eo[11] = O) : O = eo[11];
            let eP = O;
            eo[12] !== e_ || eo[13] !== ek ? (P = ek ? e_.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary",
                description: "Aria label for button that expands a collapsed plan summary"
            }) : e_.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary",
                description: "Aria label for button that collapses the plan summary content"
            }), eo[12] = e_, eo[13] = ek, eo[14] = P) : P = eo[14];
            let eN = P;
            eo[15] !== en.content ? (N = () => {
                let e = new Blob([en.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, eo[15] = en.content, eo[16] = N) : N = eo[16];
            let eD = N;
            eo[17] !== ei || eo[18] !== en.content || eo[19] !== eC || eo[20] !== ef ? (D = e => (null != ef && eC.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: ei,
                turnId: ef
            }), (0, _.b)(en.content, e)), eo[17] = ei, eo[18] = en.content, eo[19] = eC, eo[20] = ef, eo[21] = D) : D = eo[21];
            let eB = D,
                eA = ey ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            eo[22] !== ey || eo[23] !== ev || eo[24] !== eg ? (B = ey && !ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: eg
            }) : null, eo[22] = ey, eo[23] = ev, eo[24] = eg, eo[25] = B) : B = eo[25], eo[26] !== eP || eo[27] !== ev || eo[28] !== eg ? (A = ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eP,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: eg,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(h, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, eo[26] = eP, eo[27] = ev, eo[28] = eg, eo[29] = A) : A = eo[29];
            let eL = ey ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            eo[30] !== eL ? (L = (0, l.b)("text-base leading-tight", eL), eo[30] = eL, eo[31] = L) : L = eo[31], eo[32] !== ey ? (E = ey ? (0, o.jsx)(m.a, {
                className: "shrink-0",
                asset: T.a
            }) : null, eo[32] = ey, eo[33] = E) : E = eo[33], eo[34] !== en.completed ? (z = en.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(S.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), eo[34] = en.completed, eo[35] = z) : z = eo[35], eo[36] !== L || eo[37] !== E || eo[38] !== z ? (U = (0, o.jsxs)("span", {
                className: L,
                children: [E, z]
            }), eo[36] = L, eo[37] = E, eo[38] = z, eo[39] = U) : U = eo[39];
            let eE = ev && "hidden";
            eo[40] !== eE ? (q = (0, l.b)("relative z-20 flex items-center gap-1", eE), eo[40] = eE, eo[41] = q) : q = eo[41];
            eo[42] !== eR || eo[43] !== eD || eo[44] !== eF ? (W = eF ? (0, o.jsx)(i.a, {
                content: eR,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eR,
                    onClick: eD,
                    children: (0, o.jsx)(x.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[42] = eR, eo[43] = eD, eo[44] = eF, eo[45] = W) : W = eo[45], eo[46] !== eB || eo[47] !== eT ? (G = eT ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eB
            }) : null, eo[46] = eB, eo[47] = eT, eo[48] = G) : G = eo[48], eo[49] !== ei || eo[50] !== eh || eo[51] !== ex || eo[52] !== eI || eo[53] !== ef ? (V = eI ? (0, o.jsx)(M.a, {
                hasArtifacts: eh,
                reportEntityType: ex,
                threadId: ei,
                turnId: ef
            }) : null, eo[49] = ei, eo[50] = eh, eo[51] = ex, eo[52] = eI, eo[53] = ef, eo[54] = V) : V = eo[54], eo[55] !== eg || eo[56] !== eO ? (Q = null != eg ? (0, o.jsx)(i.a, {
                content: eO,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eO,
                    onClick: eg,
                    children: (0, o.jsx)(y.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[55] = eg, eo[56] = eO, eo[57] = Q) : Q = eo[57], eo[58] !== eN || eo[59] !== ek || eo[60] !== ey ? (K = ey ? null : (0, o.jsx)(i.a, {
                content: ek ? (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.expandTooltip",
                    defaultMessage: "Expand",
                    description: "Tooltip text for button that expands a collapsed plan summary"
                }) : (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.collapseTooltip",
                    defaultMessage: "Collapse",
                    description: "Tooltip text for button that collapses the plan summary content"
                }),
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eN,
                    onClick: () => {
                        ew(R)
                    },
                    children: (0, o.jsx)(b.a, {
                        className: (0, l.b)("icon-2xs transition-transform", ek ? "rotate-180" : "rotate-0")
                    })
                })
            }), eo[58] = eN, eo[59] = ek, eo[60] = ey, eo[61] = K) : K = eo[61], eo[62] !== ev || eo[63] !== q || null !== eo[64] || eo[65] !== W || eo[66] !== G || eo[67] !== V || eo[68] !== Q || eo[69] !== K ? (H = (0, o.jsxs)("div", {
                "aria-hidden": ev,
                className: q,
                children: [null, W, G, V, Q, K]
            }), eo[62] = ev, eo[63] = q, eo[64] = null, eo[65] = W, eo[66] = G, eo[67] = V, eo[68] = Q, eo[69] = K, eo[70] = H) : H = eo[70], eo[71] !== A || eo[72] !== U || eo[73] !== H ? ($ = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [A, U, H]
            }), eo[71] = A, eo[72] = U, eo[73] = H, eo[74] = $) : $ = eo[74], eo[75] !== ei ? (J = {
                [C.a]: ei
            }, eo[75] = ei, eo[76] = J) : J = eo[76];
            let ez = ev || void 0,
                eU = ey && !ev && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            eo[77] !== eU ? (Y = (0, l.b)("relative overflow-hidden", eU), eo[77] = eU, eo[78] = Y) : Y = eo[78];
            let eq = ev || void 0;
            eo[79] !== ek || eo[80] !== ey || eo[81] !== ev ? (X = ey ? {
                maxHeight: 160 * !ev,
                opacity: +!ev
            } : {
                height: ek ? 320 : "auto",
                ...ek ? {
                    overflow: "hidden"
                } : {
                    transitionEnd: {
                        overflow: "visible"
                    }
                }
            }, eo[79] = ek, eo[80] = ey, eo[81] = ev, eo[82] = X) : X = eo[82];
            let eW = !en.completed;
            return eo[83] !== ei || eo[84] !== el || eo[85] !== eb || eo[86] !== ej || eo[87] !== en.content || eo[88] !== eW ? (Z = (0, o.jsx)(v.c, {
                markdown: en.content,
                conversationId: ei,
                hostId: ej,
                hideCodeBlocks: eb,
                isStreaming: eW,
                cwd: el
            }), eo[83] = ei, eo[84] = el, eo[85] = eb, eo[86] = ej, eo[87] = en.content, eo[88] = eW, eo[89] = Z) : Z = eo[89], eo[90] !== ek || eo[91] !== ey ? (ee = !ey && ek ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent"
                }), (0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, o.jsx)(f.a, {
                        className: "pointer-events-auto",
                        color: "primary",
                        onClick: () => {
                            ew(!1)
                        },
                        children: (0, o.jsx)(u.a, {
                            id: "localConversation.planSummary.viewPlan",
                            defaultMessage: "Expand plan",
                            description: "Button label to expand a collapsed plan summary"
                        })
                    })
                })]
            }) : null, eo[90] = ek, eo[91] = ey, eo[92] = ee) : ee = eo[92], eo[93] !== J || eo[94] !== ez || eo[95] !== Y || eo[96] !== eq || eo[97] !== X || eo[98] !== Z || eo[99] !== ee ? (et = (0, o.jsxs)(r.a.div, {
                ...J,
                "aria-hidden": ez,
                className: Y,
                inert: eq,
                initial: !1,
                animate: X,
                transition: j.a,
                children: [Z, ee]
            }), eo[93] = J, eo[94] = ez, eo[95] = Y, eo[96] = eq, eo[97] = X, eo[98] = Z, eo[99] = ee, eo[100] = et) : et = eo[100], eo[101] !== eA || eo[102] !== B || eo[103] !== $ || eo[104] !== et ? (ea = (0, o.jsxs)(v.b, {
                className: eA,
                children: [B, $, et]
            }), eo[101] = eA, eo[102] = B, eo[103] = $, eo[104] = et, eo[105] = ea) : ea = eo[105], ea
        }

        function R(e) {
            return !e
        }
    }),
    UUD2: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("iTtm"),
            l = a("zd8w"),
            r = a("Qgfj"),
            s = a("tl5a"),
            d = a("X6Vn"),
            c = a("gTcE"),
            u = a("UrAA"),
            f = a("nIGo"),
            p = a("yGJW"),
            m = a("OWtl"),
            g = a("hZax"),
            b = a("taaw");
        let h = "safety_or_legal_concern",
            x = {
                thumbs_down: "thumbsDown",
                thumbs_up: "thumbsUp"
            },
            y = (0, r.f)({
                wrongPresentationLength: {
                    id: "turnRatingControls.artifactFeedback.wrongPresentationLength",
                    defaultMessage: "Wrong presentation length",
                    description: "Feedback option for an artifact with the wrong presentation length"
                },
                poorWriting: {
                    id: "turnRatingControls.artifactFeedback.poorWriting",
                    defaultMessage: "Poor writing",
                    description: "Feedback option for an artifact with poor writing"
                },
                poorStyleFormatOrVisuals: {
                    id: "turnRatingControls.artifactFeedback.poorStyleFormatOrVisuals",
                    defaultMessage: "Poor style, format, or visuals",
                    description: "Feedback option for an artifact with poor style, formatting, or visuals"
                },
                wrongTopicsOrSubtopics: {
                    id: "turnRatingControls.artifactFeedback.wrongTopicsOrSubtopics",
                    defaultMessage: "Wrong topics or subtopics",
                    description: "Feedback option for an artifact with incorrect topic coverage"
                },
                didntFollowMyInstructions: {
                    id: "turnRatingControls.artifactFeedback.didntFollowMyInstructions",
                    defaultMessage: "Didn't follow my instructions",
                    description: "Feedback option for an artifact that missed instructions"
                },
                didntFollowMyTemplate: {
                    id: "turnRatingControls.artifactFeedback.didntFollowMyTemplate",
                    defaultMessage: "Didn't follow my template",
                    description: "Feedback option for an artifact that missed the template"
                },
                incorrectContent: {
                    id: "turnRatingControls.artifactFeedback.incorrectContent",
                    defaultMessage: "Incorrect content",
                    description: "Feedback option for an artifact with incorrect content"
                },
                goodContent: {
                    id: "turnRatingControls.artifactFeedback.goodContent",
                    defaultMessage: "Good content",
                    description: "Positive feedback option for artifact content"
                },
                goodWritingQuality: {
                    id: "turnRatingControls.artifactFeedback.goodWritingQuality",
                    defaultMessage: "Good writing quality",
                    description: "Positive feedback option for artifact writing quality"
                },
                goodStyleFormatOrVisuals: {
                    id: "turnRatingControls.artifactFeedback.goodStyleFormatOrVisuals",
                    defaultMessage: "Good style, format, or visuals",
                    description: "Positive feedback option for artifact style, formatting, or visuals"
                },
                followedMyInstructionsWell: {
                    id: "turnRatingControls.artifactFeedback.followedMyInstructionsWell",
                    defaultMessage: "Followed my instructions well",
                    description: "Positive feedback option for following instructions"
                },
                generatedQuickly: {
                    id: "turnRatingControls.artifactFeedback.generatedQuickly",
                    defaultMessage: "Generated quickly",
                    description: "Positive feedback option for fast artifact generation"
                },
                solvedMyTask: {
                    id: "turnRatingControls.feedback.solvedMyTask",
                    defaultMessage: "Solved my task",
                    description: "Positive feedback option for a turn that solved the task"
                },
                followedMyInstructions: {
                    id: "turnRatingControls.feedback.followedMyInstructions",
                    defaultMessage: "Followed my instructions",
                    description: "Positive feedback option for following instructions"
                },
                goodCodeOrOutputQuality: {
                    id: "turnRatingControls.feedback.goodCodeOrOutputQuality",
                    defaultMessage: "Good code / output quality",
                    description: "Positive feedback option for good code or output quality"
                },
                fastAndEfficient: {
                    id: "turnRatingControls.feedback.fastAndEfficient",
                    defaultMessage: "Fast and efficient",
                    description: "Positive feedback option for fast and efficient work"
                },
                usefulAutonomy: {
                    id: "turnRatingControls.feedback.usefulAutonomy",
                    defaultMessage: "Useful autonomy",
                    description: "Positive feedback option for useful autonomous behavior"
                },
                incorrectOrIncomplete: {
                    id: "turnRatingControls.feedback.incorrectOrIncomplete",
                    defaultMessage: "Incorrect or incomplete",
                    description: "Negative feedback option for incorrect or incomplete work"
                },
                offTrackOrWrongScope: {
                    id: "turnRatingControls.feedback.offTrackOrWrongScope",
                    defaultMessage: "Off track / wrong scope",
                    description: "Negative feedback option for going off track or out of scope"
                },
                lostContext: {
                    id: "turnRatingControls.feedback.lostContext",
                    defaultMessage: "Lost context",
                    description: "Negative feedback option for losing context"
                },
                slowOrBuggy: {
                    id: "turnRatingControls.feedback.slowOrBuggy",
                    defaultMessage: "Slow or buggy",
                    description: "Negative feedback option for slow or buggy behavior"
                },
                safetyOrLegalConcern: {
                    id: "turnRatingControls.feedback.safetyOrLegalConcern",
                    defaultMessage: "Safety or legal concern",
                    description: "Negative feedback option that opens a safety or legal report flow"
                },
                other: {
                    id: "turnRatingControls.feedback.other",
                    defaultMessage: "Other",
                    description: "Feedback option for other feedback"
                }
            }),
            v = {
                thumbs_down: [{
                    id: "wrong_presentation_length",
                    label: y.wrongPresentationLength
                }, {
                    id: "poor_writing",
                    label: y.poorWriting
                }, {
                    id: "poor_style_format_or_visuals",
                    label: y.poorStyleFormatOrVisuals
                }, {
                    id: "wrong_topics_or_subtopics",
                    label: y.wrongTopicsOrSubtopics
                }, {
                    id: "didnt_follow_my_instructions",
                    label: y.didntFollowMyInstructions
                }, {
                    id: "didnt_follow_my_template",
                    label: y.didntFollowMyTemplate
                }, {
                    id: "incorrect_content",
                    label: y.incorrectContent
                }, {
                    id: h,
                    label: y.safetyOrLegalConcern
                }],
                thumbs_up: [{
                    id: "good_content",
                    label: y.goodContent
                }, {
                    id: "good_writing_quality",
                    label: y.goodWritingQuality
                }, {
                    id: "good_style_format_or_visuals",
                    label: y.goodStyleFormatOrVisuals
                }, {
                    id: "followed_my_instructions_well",
                    label: y.followedMyInstructionsWell
                }, {
                    id: "generated_quickly",
                    label: y.generatedQuickly
                }]
            },
            k = {
                thumbs_down: [{
                    id: "incorrect_or_incomplete",
                    label: y.incorrectOrIncomplete
                }, {
                    id: "didnt_follow_my_instructions",
                    label: y.didntFollowMyInstructions
                }, {
                    id: "off_track_or_wrong_scope",
                    label: y.offTrackOrWrongScope
                }, {
                    id: "lost_context",
                    label: y.lostContext
                }, {
                    id: "slow_or_buggy",
                    label: y.slowOrBuggy
                }, {
                    id: h,
                    label: y.safetyOrLegalConcern
                }, {
                    id: "other",
                    label: y.other
                }],
                thumbs_up: [{
                    id: "solved_my_task",
                    label: y.solvedMyTask
                }, {
                    id: "followed_my_instructions",
                    label: y.followedMyInstructions
                }, {
                    id: "good_code_or_output_quality",
                    label: y.goodCodeOrOutputQuality
                }, {
                    id: "fast_and_efficient",
                    label: y.fastAndEfficient
                }, {
                    id: "useful_autonomy",
                    label: y.usefulAutonomy
                }, {
                    id: "other",
                    label: y.other
                }]
            };

        function w(e) {
            let t, a = (0, n.c)(15),
                {
                    hasArtifacts: r,
                    reportEntityType: y,
                    renderControl: w,
                    threadId: C,
                    turnId: S
                } = e,
                M = void 0 !== r && r,
                T = void 0 === y ? "thread" : y,
                F = (0, i.y)(m.a),
                [I, R] = (0, l.useState)(null),
                O = (0, i.z)(p.c),
                P = (0, g.h)("584954669");
            if (a[0] !== M || a[1] !== O || a[2] !== w || a[3] !== T || a[4] !== P || a[5] !== F || a[6] !== I || a[7] !== C || a[8] !== S) {
                let e, n = (e, t, a) => {
                        let n = M ? v[e] : k[e],
                            l = P ? n : n.filter(_);
                        (0, d.f)(F, c.a, {
                            belowFreeformContent: (0, o.jsx)(u.a, {}),
                            freeformFeedbackRequired: !1,
                            initialDetails: void 0 === t ? "" : t,
                            initialSelectedOptionId: a,
                            onOptionSelect: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                o === h && ((0, d.b)(F, c.a), i(a, e))
                            },
                            onSubmit: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                return o === h ? void i(a, e) : O.submitCodexAnalyticsEvent?.({
                                    action: "submit_turn_feedback",
                                    eventKind: "action",
                                    threadId: C,
                                    turnId: S,
                                    metadata: {
                                        details: a,
                                        has_artifacts: M,
                                        selected_option: o
                                    }
                                })
                            },
                            options: l
                        })
                    },
                    i = (e, t) => {
                        (0, d.f)(F, b.CodexThreadReportDialog, {
                            onBackToFeedback: () => {
                                n(t, e, h)
                            },
                            reportEntityType: T,
                            threadId: C
                        })
                    };
                a[10] !== O || a[11] !== F || a[12] !== C || a[13] !== S ? (e = e => {
                    if (R(e), null == e) return;
                    let t = F.get(s.yb, C);
                    O.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: C,
                        turnId: S,
                        sessionId: t === C && null != F.get(s.Jb, C) ? null : t,
                        rating: e
                    })
                }, a[10] = O, a[11] = F, a[12] = C, a[13] = S, a[14] = e) : e = a[14];
                let l = e,
                    r = {
                        rating: null == I ? null : x[I],
                        onRate: e => {
                            let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                a = I === t ? null : t;
                            l(a), null != a && n(a)
                        },
                        shouldRestoreFocus: j
                    };
                t = null != w ? w(r, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                    ...r
                }), a[0] = M, a[1] = O, a[2] = w, a[3] = T, a[4] = P, a[5] = F, a[6] = I, a[7] = C, a[8] = S, a[9] = t
            } else t = a[9];
            return t
        }

        function j(e) {
            return null == e
        }

        function _(e) {
            return e.id !== h
        }
        a.d(t, {
            a: () => w
        })
    }),
    HWQc: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            l = a("zd8w"),
            r = a("oyxz"),
            s = a("u6ch"),
            d = a("tKUf"),
            c = a("cWXs");

        function u(e) {
            let t, a, l = (0, n.c)(7),
                {
                    background: r,
                    className: s,
                    children: d,
                    overflow: c
                } = e,
                u = "normal" === (void 0 === r ? "subtle" : r) ? "bg-surface" : "bg-text/5",
                f = "auto" === (void 0 === c ? "clip" : c) ? "overflow-auto" : "overflow-clip";
            return l[0] !== s || l[1] !== u || l[2] !== f ? (t = (0, i.b)("relative rounded-lg", u, f, s), l[0] = s, l[1] = u, l[2] = f, l[3] = t) : t = l[3], l[4] !== d || l[5] !== t ? (a = (0, o.jsx)("div", {
                className: t,
                children: d
            }), l[4] = d, l[5] = t, l[6] = a) : a = l[6], a
        }

        function f(e) {
            let t, a, i, l, r = (0, n.c)(15),
                {
                    enableMetadataPreview: s,
                    markdown: u,
                    conversationId: f,
                    cwd: m,
                    hideCodeBlocks: g,
                    hostId: b,
                    isStreaming: h
                } = e,
                x = void 0 !== s && s,
                y = void 0 === f ? null : f,
                v = void 0 === m ? null : m,
                k = void 0 !== h && h;
            r[0] !== x || r[1] !== u ? (t = x ? (0, d.a)(u) : null, r[0] = x, r[1] = u, r[2] = t) : t = r[2];
            let w = t,
                j = w?.body ?? u;
            return r[3] !== w ? (a = null != w && w.entries.length > 0 ? (0, o.jsx)(p, {
                entries: w.entries
            }) : null, r[3] = w, r[4] = a) : a = r[4], r[5] !== y || r[6] !== v || r[7] !== g || r[8] !== b || r[9] !== k || r[10] !== j ? (i = (0, o.jsx)(c.a, {
                className: "text-size-chat",
                conversationId: y,
                hideCodeBlocks: g,
                hostId: b,
                isStreaming: k,
                cwd: v,
                children: j
            }), r[5] = y, r[6] = v, r[7] = g, r[8] = b, r[9] = k, r[10] = j, r[11] = i) : i = r[11], r[12] !== a || r[13] !== i ? (l = (0, o.jsxs)("div", {
                className: "px-4 py-3",
                children: [a, i]
            }), r[12] = a, r[13] = i, r[14] = l) : l = r[14], l
        }

        function p(e) {
            let t, a, d, c, u, f = (0, n.c)(13),
                {
                    entries: p
                } = e,
                [b, h] = (0, l.useState)(!1),
                x = p.length > 8;
            f[0] !== p || f[1] !== b || f[2] !== x ? (t = x && !b ? p.slice(0, 8) : p, f[0] = p, f[1] = b, f[2] = x, f[3] = t) : t = f[3];
            let y = t;
            return f[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)("div", {
                className: "mb-2 font-medium text-secondary",
                children: (0, o.jsx)(r.a, {
                    id: "markdown.metadata.title",
                    defaultMessage: "Metadata",
                    description: "Title for rendered Markdown file metadata"
                })
            }), f[4] = a) : a = f[4], f[5] !== y ? (d = (0, o.jsx)(g, {
                entries: y
            }), f[5] = y, f[6] = d) : d = f[6], f[7] !== b || f[8] !== x ? (c = x ? (0, o.jsxs)("button", {
                type: "button",
                "aria-expanded": b,
                className: "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                onClick: () => {
                    h(m)
                },
                children: [(0, o.jsx)("span", {
                    children: b ? (0, o.jsx)(r.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less",
                        description: "Disclosure control shown when a Markdown metadata preview can collapse additional fields"
                    }) : (0, o.jsx)(r.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more",
                        description: "Disclosure control shown when a Markdown metadata preview hides additional fields"
                    })
                }), (0, o.jsx)(s.a, {
                    className: (0, i.b)("icon-2xs transition-transform", b ? "rotate-180" : "rotate-0")
                })]
            }) : null, f[7] = b, f[8] = x, f[9] = c) : c = f[9], f[10] !== d || f[11] !== c ? (u = (0, o.jsxs)("div", {
                className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
                children: [a, d, c]
            }), f[10] = d, f[11] = c, f[12] = u) : u = f[12], u
        }

        function m(e) {
            return !e
        }

        function g(e) {
            let t, a, l, r = (0, n.c)(7),
                {
                    className: s,
                    entries: d
                } = e;
            return r[0] !== s ? (t = (0, i.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", s), r[0] = s, r[1] = t) : t = r[1], r[2] !== d ? (a = d.map(b), r[2] = d, r[3] = a) : a = r[3], r[4] !== t || r[5] !== a ? (l = (0, o.jsx)("dl", {
                className: t,
                children: a
            }), r[4] = t, r[5] = a, r[6] = l) : l = r[6], l
        }

        function b(e, t) {
            return (0, o.jsxs)("div", {
                className: "contents",
                children: [(0, o.jsx)("dt", {
                    className: "truncate font-mono text-secondary",
                    title: e.key,
                    children: e.key
                }), (0, o.jsx)("dd", {
                    className: "min-w-0 text-default",
                    children: (0, o.jsx)(h, {
                        value: e.value
                    })
                })]
            }, `${e.key}-${t}`)
        }

        function h(e) {
            let t, a = (0, n.c)(6),
                {
                    value: i
                } = e;
            if (Array.isArray(i)) {
                let e, t;
                return a[0] !== i ? (e = i.map(x), a[0] = i, a[1] = e) : e = a[1], a[2] !== e ? (t = (0, o.jsx)("span", {
                    className: "flex min-w-0 flex-wrap gap-1",
                    children: e
                }), a[2] = e, a[3] = t) : t = a[3], t
            }
            let l = 0 === i.length ? '""' : i;
            return a[4] !== l ? (t = (0, o.jsx)("span", {
                className: "font-mono break-words",
                children: l
            }), a[4] = l, a[5] = t) : t = a[5], t
        }

        function x(e, t) {
            return (0, o.jsx)("span", {
                className: "max-w-full rounded-sm bg-text/10 px-1.5 py-0.5 font-mono break-words",
                children: 0 === e.length ? '""' : e
            }, `${e}-${t}`)
        }
        a.d(t, {
            a: () => p,
            b: () => u,
            c: () => f
        })
    }),
    OBi1: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("T0Rc"),
            l = a("xSOA"),
            r = a("on57"),
            s = a("zd8w"),
            d = a("Wf1j"),
            c = a("oyxz"),
            u = a("zKCW"),
            f = a("ygO2"),
            p = a("JNtf"),
            m = a("mUDD"),
            g = a("Ot7V"),
            b = a("zLIa"),
            h = a("rvFo");

        function x(e) {
            let t, a, r, x, _, C, S, M, T, F, I, R, O, P, N, D, B, A, L, E, z, U, q, W, G, V, Q, K, H, $, J, Y = (0, n.c)(119),
                {
                    onBack: X,
                    onClose: Z,
                    onCloseAutoFocus: ee,
                    queryKey: et,
                    loadReasons: ea,
                    submitReport: eo,
                    submissionUnavailable: en,
                    openExternalForm: ei,
                    successBody: el,
                    title: er,
                    gcTime: es,
                    staleTime: ed,
                    includeServerFields: ec,
                    preventCloseWhileSubmitting: eu,
                    dialogVariant: ef,
                    contentClassName: ep
                } = e,
                em = void 0 === ed ? h.b.ONE_MINUTE : ed,
                eg = void 0 !== ec && ec,
                eb = void 0 !== eu && eu,
                eh = (0, d.a)();
            Y[0] !== es ? (t = null == es ? {} : {
                gcTime: es
            }, Y[0] = es, Y[1] = t) : t = Y[1], Y[2] !== ea || Y[3] !== et || Y[4] !== em || Y[5] !== t ? (a = {
                queryKey: et,
                queryFn: ea,
                ...t,
                staleTime: em
            }, Y[2] = ea, Y[3] = et, Y[4] = em, Y[5] = t, Y[6] = a) : a = Y[6];
            let {
                data: ex,
                isPending: ey,
                isError: ev
            } = (0, i.a)(a);
            Y[7] !== eo ? (r = {
                mutationFn: eo
            }, Y[7] = eo, Y[8] = r) : r = Y[8];
            let ek = (0, l.a)(r),
                [ew, ej] = (0, s.useState)("");
            Y[9] === Symbol.for("react.memo_cache_sentinel") ? (x = {}, Y[9] = x) : x = Y[9];
            let [e_, eC] = (0, s.useState)(x), [eS, eM] = (0, s.useState)(null);
            Y[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], Y[10] = _) : _ = Y[10];
            let [eT, eF] = (0, s.useState)(_), eI = 0 === eT.length ? null : eT[eT.length - 1];
            Y[11] !== eI || Y[12] !== eg || Y[13] !== ex?.reasons || Y[14] !== eS ? (F = (R = (null == eI ? ex?.reasons : eI.sub_reasons) ?? []).find(e => e.id === eS) ?? null, S = (C = eI?.details_placeholder != null || eg && eI?.has_details === !0) || eg && (eI?.additional_fields?.length ?? 0) > 0, T = eI?.link_attachment != null, M = eI?.subtext != null && 0 === R.length && !S && !T, I = S || null != F && j(F, eg), Y[11] = eI, Y[12] = eg, Y[13] = ex?.reasons, Y[14] = eS, Y[15] = C, Y[16] = S, Y[17] = M, Y[18] = T, Y[19] = F, Y[20] = I, Y[21] = R) : (C = Y[15], S = Y[16], M = Y[17], T = Y[18], F = Y[19], I = Y[20], R = Y[21]);
            let eR = I,
                eO = null == F || ey || ek.isPending,
                eP = ek.isSuccess || ev,
                eN = !eP && (eR && null == eo || !eR && !T && eO);
            Y[22] !== Z || Y[23] !== eb || Y[24] !== ek.isPending ? (O = e => {
                e || eb && ek.isPending || Z()
            }, Y[22] = Z, Y[23] = eb, Y[24] = ek.isPending, Y[25] = O) : O = Y[25];
            let eD = O;
            Y[26] !== eI || Y[27] !== X || Y[28] !== eT ? (P = () => {
                if (null == eI) return void X?.();
                let e = eT[eT.length - 1];
                eF(y), eM(e?.id ?? null), ej(""), eC({})
            }, Y[26] = eI, Y[27] = X, Y[28] = eT, Y[29] = P) : P = Y[29];
            let eB = P;
            Y[30] !== eI || Y[31] !== e_ || Y[32] !== ew || Y[33] !== eg || Y[34] !== S || Y[35] !== M || Y[36] !== T || Y[37] !== Z || Y[38] !== ei || Y[39] !== ek || Y[40] !== F || Y[41] !== eT || Y[42] !== eP || Y[43] !== eo ? (N = e => {
                if (e.preventDefault(), !ek.isPending && (!eg || e.currentTarget.reportValidity())) {
                    if (eP) return void Z();
                    if (!M) {
                        if (T && eI?.link_attachment != null) return null != ei ? void ei(eI.link_attachment) : void(0, g.f)({
                            href: eI.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        });
                        if (S && null != eI) {
                            if (null == eo) return;
                            ek.mutate({
                                details: ew.trim(),
                                reason: eI,
                                path: eT,
                                ...eg ? {
                                    additionalFields: e_
                                } : {}
                            });
                            return
                        }
                        if (null != F) {
                            if (j(F, eg)) {
                                if (null == eo) return;
                                ek.mutate({
                                    details: "",
                                    reason: F,
                                    path: [...eT, F]
                                });
                                return
                            }
                            eF(e => [...e, F]), eM(null), ej(""), eC({})
                        }
                    }
                }
            }, Y[30] = eI, Y[31] = e_, Y[32] = ew, Y[33] = eg, Y[34] = S, Y[35] = M, Y[36] = T, Y[37] = Z, Y[38] = ei, Y[39] = ek, Y[40] = F, Y[41] = eT, Y[42] = eP, Y[43] = eo, Y[44] = N) : N = Y[44];
            let eA = N;
            Y[45] !== eI || Y[46] !== ei ? (D = e => {
                if (eI?.link_attachment != null) {
                    if (null != ei) return void ei(eI.link_attachment);
                    (0, g.e)({
                        event: e,
                        href: eI.link_attachment,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
            }, Y[45] = eI, Y[46] = ei, Y[47] = D) : D = Y[47];
            let eL = D;
            Y[48] !== eI || Y[49] !== ex || Y[50] !== ek.isSuccess ? (B = function(e) {
                let {
                    activeReason: t,
                    isSuccess: a,
                    reportReasons: o
                } = e;
                return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
            }({
                activeReason: eI,
                reportReasons: ex,
                isSuccess: ek.isSuccess
            }), Y[48] = eI, Y[49] = ex, Y[50] = ek.isSuccess, Y[51] = B) : B = Y[51];
            let eE = B;
            return Y[52] !== ee ? (A = {
                onCloseAutoFocus: ee
            }, Y[52] = ee, Y[53] = A) : A = Y[53], Y[54] !== ek.isSuccess || Y[55] !== er ? (L = ek.isSuccess ? (0, o.jsx)(c.a, {
                id: "codexThreadReportDialog.successTitle",
                defaultMessage: "Thanks for your report",
                description: "Title shown after a safety or legal report is submitted"
            }) : er, Y[54] = ek.isSuccess, Y[55] = er, Y[56] = L) : L = Y[56], Y[57] !== L ? (E = (0, o.jsx)(p.e, {
                children: L
            }), Y[57] = L, Y[58] = E) : E = Y[58], Y[59] !== eE ? (z = null != eE ? (0, o.jsx)(p.d, {
                children: eE
            }) : void 0, Y[59] = eE, Y[60] = z) : z = Y[60], Y[61] !== E || Y[62] !== z ? (U = (0, o.jsx)(m.e, {
                children: (0, o.jsx)(m.d, {
                    title: E,
                    subtitle: z,
                    titleSize: "dialog"
                })
            }), Y[61] = E, Y[62] = z, Y[63] = U) : U = Y[63], Y[64] !== eI || Y[65] !== e_ || Y[66] !== ew || Y[67] !== C || Y[68] !== eg || Y[69] !== eh || Y[70] !== S || Y[71] !== M || Y[72] !== T || Y[73] !== ey || Y[74] !== ev || Y[75] !== ek.isSuccess || Y[76] !== eS || Y[77] !== el || Y[78] !== R ? (q = ek.isSuccess ? (0, o.jsx)(w, {
                children: el ?? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successBody",
                    defaultMessage: "Our team will review the content to determine if it violates our policies",
                    description: "Body shown after a Codex thread safety or legal report is submitted"
                })
            }) : ey ? (0, o.jsx)(w, {
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.loading",
                    defaultMessage: "Loading reporting options…",
                    description: "Loading text while Codex thread report reasons are fetched"
                })
            }) : ev ? (0, o.jsx)(u.a, {
                type: "error",
                role: "alert",
                content: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.loadError",
                    defaultMessage: "Couldn't load reporting options. Try again later",
                    description: "Error in the report dialog when reporting options cannot be loaded"
                })
            }) : S && null != eI ? (0, o.jsxs)(m.f, {
                className: "gap-3",
                children: [eg && null != eI.explanation ? (0, o.jsx)(w, {
                    children: eI.explanation
                }) : null, C ? (0, o.jsx)(b.c, {
                    autoFocus: !0,
                    rows: 5,
                    placeholder: eI.details_placeholder ?? void 0,
                    "aria-label": eh.formatMessage({
                        id: "codexThreadReportDialog.detailsLabel",
                        defaultMessage: "Add details",
                        description: "Accessible label for Codex thread report details field"
                    }),
                    value: ew,
                    onChange: e => {
                        ej(e.target.value)
                    }
                }) : null, null != eI.subtext ? (0, o.jsx)(w, {
                    children: eI.subtext
                }) : null, eg ? eI.additional_fields?.map(e => {
                    let t = "text";
                    return "int" === e.type ? t = "number" : ("email" === e.type || "url" === e.type) && (t = e.type), (0, o.jsxs)("label", {
                        className: "flex flex-col gap-2 text-sm",
                        children: [e.placeholder, "multi_line_text" === e.type ? (0, o.jsx)(b.c, {
                            required: e.required,
                            value: e_[e.id] ?? "",
                            onChange: t => eC(a => ({
                                ...a,
                                [e.id]: t.target.value
                            }))
                        }) : (0, o.jsx)(b.a, {
                            type: t,
                            required: e.required,
                            value: e_[e.id] ?? "",
                            onChange: t => eC(a => ({
                                ...a,
                                [e.id]: t.target.value
                            }))
                        })]
                    }, e.id)
                }) : null]
            }) : T ? (0, o.jsx)(w, {
                children: (eg ? eI?.link_explanation ?? eI?.explanation : eI?.link_explanation ?? eI?.subtext) ?? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.linkBody",
                    defaultMessage: "Open the linked form to finish this report",
                    description: "Body shown when a Codex thread report reason needs an external form"
                })
            }) : (0, o.jsxs)(o.Fragment, {
                children: [M ? (0, o.jsx)(w, {
                    children: eI?.subtext
                }) : null, M ? null : (0, o.jsx)(k, {
                    reasons: R,
                    selectedReasonId: eS,
                    setSelectedReasonId: eM
                })]
            }), Y[64] = eI, Y[65] = e_, Y[66] = ew, Y[67] = C, Y[68] = eg, Y[69] = eh, Y[70] = S, Y[71] = M, Y[72] = T, Y[73] = ey, Y[74] = ev, Y[75] = ek.isSuccess, Y[76] = eS, Y[77] = el, Y[78] = R, Y[79] = q) : q = Y[79], Y[80] !== ek.isError ? (W = ek.isError ? (0, o.jsx)(u.a, {
                type: "error",
                role: "alert",
                content: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.submitError",
                    defaultMessage: "Couldn't submit your report. Try again",
                    description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                })
            }) : null, Y[80] = ek.isError, Y[81] = W) : W = Y[81], Y[82] !== ey || Y[83] !== ev || Y[84] !== en || Y[85] !== eo ? (G = null != eo || ey || ev ? null : (0, o.jsx)("p", {
                className: "text-sm",
                role: "status",
                children: en
            }), Y[82] = ey, Y[83] = ev, Y[84] = en, Y[85] = eo, Y[86] = G) : G = Y[86], Y[87] !== q || Y[88] !== W || Y[89] !== G ? (V = (0, o.jsxs)(m.e, {
                className: "gap-3",
                children: [q, W, G]
            }), Y[87] = q, Y[88] = W, Y[89] = G, Y[90] = V) : V = Y[90], Y[91] !== eI || Y[92] !== eB || Y[93] !== X || Y[94] !== ek.isPending || Y[95] !== ek.isSuccess ? (Q = null == eI && null == X || ek.isSuccess ? null : (0, o.jsx)(f.a, {
                color: "secondary",
                disabled: ek.isPending,
                type: "button",
                onClick: eB,
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.back",
                    defaultMessage: "Back",
                    description: "Back button for Codex thread report reason selection"
                })
            }), Y[91] = eI, Y[92] = eB, Y[93] = X, Y[94] = ek.isPending, Y[95] = ek.isSuccess, Y[96] = Q) : Q = Y[96], Y[97] !== eL || Y[98] !== M || Y[99] !== T || Y[100] !== eN || Y[101] !== eR || Y[102] !== ek.isPending || Y[103] !== eP ? (K = !M || eP ? (0, o.jsx)(f.a, {
                color: "primary",
                disabled: eN,
                loading: ek.isPending,
                type: T ? "button" : "submit",
                onClick: T ? eL : void 0,
                children: (0, o.jsx)(v, {
                    close: eP,
                    isLinkStep: T,
                    isSubmitStep: eR
                })
            }) : null, Y[97] = eL, Y[98] = M, Y[99] = T, Y[100] = eN, Y[101] = eR, Y[102] = ek.isPending, Y[103] = eP, Y[104] = K) : K = Y[104], Y[105] !== Q || Y[106] !== K ? (H = (0, o.jsx)(m.e, {
                children: (0, o.jsxs)(m.c, {
                    children: [Q, K]
                })
            }), Y[105] = Q, Y[106] = K, Y[107] = H) : H = Y[107], Y[108] !== eA || Y[109] !== U || Y[110] !== V || Y[111] !== H ? ($ = (0, o.jsxs)(m.b, {
                as: "form",
                className: "gap-4",
                onSubmit: eA,
                children: [U, V, H]
            }), Y[108] = eA, Y[109] = U, Y[110] = V, Y[111] = H, Y[112] = $) : $ = Y[112], Y[113] !== ep || Y[114] !== ef || Y[115] !== eD || Y[116] !== A || Y[117] !== $ ? (J = (0, o.jsx)(p.b, {
                open: !0,
                onOpenChange: eD,
                contentProps: A,
                size: "wide",
                variant: ef,
                contentClassName: ep,
                children: $
            }), Y[113] = ep, Y[114] = ef, Y[115] = eD, Y[116] = A, Y[117] = $, Y[118] = J) : J = Y[118], J
        }

        function y(e) {
            return e.slice(0, -1)
        }

        function v(e) {
            let t, a = (0, n.c)(4),
                {
                    close: i,
                    isLinkStep: l,
                    isSubmitStep: r
                } = e;
            if (i) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.close",
                    defaultMessage: "Close",
                    description: "Close button for Codex thread report dialog"
                }), a[0] = e) : e = a[0], e
            }
            if (l) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.viewForm",
                    defaultMessage: "View form",
                    description: "Button label for opening an external Codex report form"
                }), a[1] = e) : e = a[1], e
            }
            if (r) {
                let e;
                return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.submit",
                    defaultMessage: "Submit",
                    description: "Submit button for Codex thread report dialog"
                }), a[2] = e) : e = a[2], e
            }
            return a[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(c.a, {
                id: "codexThreadReportDialog.next",
                defaultMessage: "Next",
                description: "Next button for Codex thread report reason selection"
            }), a[3] = t) : t = a[3], t
        }

        function k(e) {
            let t, a, i, l = (0, n.c)(12),
                {
                    reasons: s,
                    selectedReasonId: c,
                    setSelectedReasonId: u
                } = e,
                f = (0, d.a)();
            if (l[0] !== f ? (t = f.formatMessage({
                    id: "codexThreadReportDialog.optionsLabel",
                    defaultMessage: "Reporting options",
                    description: "Accessible label for Codex thread report reason options"
                }), l[0] = f, l[1] = t) : t = l[1], l[2] !== s || l[3] !== c || l[4] !== u) {
                let e;
                l[6] !== c || l[7] !== u ? (e = e => {
                    let t = c === e.id;
                    return (0, o.jsx)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": t,
                        onClick: () => {
                            u(e.id)
                        },
                        className: (0, r.b)("border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: e.cta
                    }, e.id)
                }, l[6] = c, l[7] = u, l[8] = e) : e = l[8], a = s.map(e), l[2] = s, l[3] = c, l[4] = u, l[5] = a
            } else a = l[5];
            return l[9] !== t || l[10] !== a ? (i = (0, o.jsx)("div", {
                role: "radiogroup",
                "aria-label": t,
                className: "flex flex-col gap-2 select-none",
                children: a
            }), l[9] = t, l[10] = a, l[11] = i) : i = l[11], i
        }

        function w(e) {
            let t, a = (0, n.c)(2),
                {
                    children: i
                } = e;
            return a[0] !== i ? (t = (0, o.jsx)("div", {
                className: "text-sm text-codex-description",
                children: i
            }), a[0] = i, a[1] = t) : t = a[1], t
        }

        function j(e, t) {
            return (!t || !e.has_details && (e.additional_fields?.length ?? 0) === 0) && (e.sub_reasons?.length ?? 0) === 0 && null == e.details_placeholder && null == e.link_attachment && null == e.subtext
        }
        a.d(t, {
            ReportDialog: () => x
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("iTtm"),
            n = a("M7HN"),
            i = a("tl5a"),
            l = a("XGJX"),
            r = a("uNQ5"),
            s = a("GaA7"),
            d = a("q77y"),
            c = a("OWtl"),
            u = a("gTKF"),
            f = a("yI91"),
            p = a("YJq6");
        let m = (0, o.d)(c.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null != e) {
                let t = "string" == typeof e ? e : e.threadId,
                    o = "string" == typeof e ? a(u.threadExecutorTargetByThread$, {
                        kind: "app-server",
                        conversationId: e
                    }) : {
                        hostId: n.Ub,
                        ...e
                    };
                if (o?.hostId === n.Ub) return {
                    environmentId: o.environmentId,
                    threadId: t ?? void 0,
                    executorAccess: a(u.threadFileRequestContext$, {
                        conversationId: t,
                        environmentId: o.environmentId
                    }).executorAccess,
                    requestClient: a(i.c, n.Ub)
                }
            }
        }, {
            isEqual: (e, t) => e?.environmentId === t?.environmentId && e?.threadId === t?.threadId && e?.executorAccess === t?.executorAccess && e?.requestClient === t?.requestClient
        });
        async function g(e) {
            let {
                cloudFileAccess: t,
                filePath: a,
                hostId: o,
                maximumSizeBytes: i,
                pendingSaveSnapshot: c,
                previousSnapshot: u,
                requireTextContent: m = !1,
                signal: g
            } = e;
            if (null != t) {
                let {
                    environmentId: e,
                    requestClient: o,
                    executorAccess: l
                } = t;
                g?.throwIfAborted();
                let r = {
                        executorAccess: l
                    },
                    s = {
                        environmentId: e,
                        path: a
                    },
                    d = await o.sendRequest("fs/getMetadata", s, r);
                g?.throwIfAborted();
                let {
                    dataBase64: c
                } = await o.sendRequest("fs/readFile", s, r);
                g?.throwIfAborted();
                let u = (0, f.a)(c);
                if (null != i && u.byteLength > i) throw Error("File is too large");
                if (m && await (0, n.pg)(u.subarray(0, n._b)) !== "text") throw Error("File is not text");
                return {
                    content: new TextDecoder().decode(u),
                    mtimeMs: d.modifiedAtMs,
                    sizeBytes: u.byteLength
                }
            }
            let {
                contentKind: b,
                mtimeMs: h,
                sizeBytes: x
            } = await (0, l.a)({
                contentSampleByteLimit: m ? n._b : void 0,
                contentSampleMaxFileBytes: m ? i : void 0,
                hostId: o,
                path: a
            }, g);
            if (null != i && null != x && x > i) throw Error("File is too large");
            if (m && "text" !== b) throw Error("File is not text");
            if (null != s.appServices.workspaceFiles.saveText) {
                let e = await (0, d.a)(s.appServices.workspaceFiles.read({
                    hostId: o,
                    path: a,
                    representation: "blob",
                    maxBytes: i
                }), g);
                if (!("blob" in e)) throw Error("Expected file bytes");
                let t = (0, f.a)(e.blob);
                if (null != i && t.byteLength > i) throw Error("File is too large");
                let n = [u, c].find(t => t?.hasUtf8Bom != null && (0, p.b)(`${t.hasUtf8Bom?"\uFEFF":""}${t.content}`) === e.blob),
                    l = n?.hasUtf8Bom ?? (239 === t[0] && 187 === t[1] && 191 === t[2]),
                    r = new TextDecoder("utf-8", {
                        fatal: !0,
                        ignoreBOM: !0
                    }).decode(t);
                return {
                    content: l ? r.slice(1) : r,
                    hasUtf8Bom: l,
                    mtimeMs: h ?? null,
                    sizeBytes: t.byteLength
                }
            }
            let {
                contents: y
            } = await (0, r.a)({
                hostId: o,
                path: a
            }, g), v = null == i && null != x ? x : new Blob([y]).size;
            if (null != i && v > i) throw Error("File is too large");
            return {
                content: y,
                mtimeMs: h ?? null,
                sizeBytes: v
            }
        }
        async function b(e) {
            let {
                cloudFileAccess: t,
                content: a,
                expectedMtimeMs: o,
                filePath: n,
                hasUtf8Bom: i,
                hostId: l
            } = e;
            if (null != t) {
                let {
                    environmentId: e,
                    requestClient: i,
                    executorAccess: l
                } = t, r = {
                    executorAccess: l
                }, s = {
                    environmentId: e,
                    path: n
                }, {
                    modifiedAtMs: d
                } = await i.sendRequest("fs/getMetadata", s, r);
                return d !== o ? {
                    mtimeMs: d,
                    outcome: "conflict"
                } : (await i.sendRequest("fs/writeFile", {
                    ...s,
                    dataBase64: (0, p.b)(a)
                }, r), {
                    mtimeMs: (await i.sendRequest("fs/getMetadata", s, r)).modifiedAtMs,
                    outcome: "saved"
                })
            }
            let r = s.appServices.workspaceFiles.saveText;
            if (null == r) throw Error("Saving text files is not supported by this host");
            return (0, d.a)(r({
                content: i ? `\uFEFF${a}` : a,
                expectedMtimeMs: o,
                hostId: l,
                path: n
            }))
        }
        a.d(t, {
            b: () => g,
            c: () => b
        }, {
            a: m
        })
    })
};