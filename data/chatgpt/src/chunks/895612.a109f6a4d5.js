export const __rspack_esm_id = 895612;
export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    gTcE: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("QgCC"),
            l = a("DHDJ"),
            s = a("on57"),
            r = a("zd8w"),
            d = a("Wf1j"),
            c = a("oyxz"),
            u = a("ygO2"),
            f = a("JNtf"),
            p = a("mUDD"),
            m = a("HOLv"),
            g = a("zLIa");

        function b(e) {
            let t, a, b, x, y, v, k, w, j, _, C, S, M, T, F, I, R, N, O, P, D, B, A, L, E, z, U, q, W, G, V = (0, n.c)(90),
                {
                    belowFreeformContent: Q,
                    closeOnSubmit: K,
                    freeformFeedbackRequired: H,
                    hideFreeformInput: $,
                    initialDetails: J,
                    initialSelectedOptionId: Y,
                    onClose: X,
                    onOptionSelect: Z,
                    onSubmit: ee,
                    onSave: et,
                    options: ea,
                    size: eo,
                    submitDisabled: en
                } = e,
                ei = void 0 === K ? "after-submit" : K,
                el = void 0 !== $ && $,
                es = void 0 === eo ? "wide" : eo,
                er = void 0 !== en && en,
                ed = (0, d.a)(),
                [ec, eu] = (0, r.useState)(void 0 === J ? "" : J),
                [ef, ep] = (0, r.useState)(null),
                [em, eg] = (0, r.useState)(Y ?? null);
            if (V[0] !== ei || V[1] !== ec || V[2] !== H || V[3] !== ed || V[4] !== X || V[5] !== Z || V[6] !== et || V[7] !== ee || V[8] !== ea || V[9] !== ef || V[10] !== em || V[11] !== es || V[12] !== er) {
                let e, n, r, d, u, g = ec.trim();
                V[34] !== H || V[35] !== ed ? (e = H ? ed.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.required",
                    defaultMessage: "Share details (required)",
                    description: "Placeholder for a required freeform feedback details field"
                }) : ed.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.optional",
                    defaultMessage: "Share details (optional)",
                    description: "Placeholder for an optional freeform feedback details field"
                }), V[34] = H, V[35] = ed, V[36] = e) : e = V[36], y = e, V[37] !== ed ? (n = ed.formatMessage({
                    id: "feedbackFormDialog.optionsLabel",
                    defaultMessage: "Feedback options",
                    description: "Accessible label for feedback options"
                }), V[37] = ed, V[38] = n) : n = V[38];
                let h = n;
                k = null == em || H && 0 === g.length, V[39] !== X || V[40] !== ef ? (r = e => {
                    e || null != ef || X()
                }, V[39] = X, V[40] = ef, V[41] = r) : r = V[41];
                let B = r;
                v = async e => {
                    if (null == em || null != ef || k || e === ee && er) return;
                    if ("immediate" === ei) {
                        !1 !== e({
                            selectedOptionId: em,
                            details: g
                        }) && X();
                        return
                    }
                    ep(e === et ? "save" : "submit");
                    let t = !1;
                    await (async () => {
                        t = await e({
                            selectedOptionId: em,
                            details: g
                        }) !== !1
                    })().finally(() => {
                        ep(null)
                    }), t && X()
                }, V[42] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.submit",
                    defaultMessage: "Submit",
                    description: "Label for the button that submits feedback"
                }), V[42] = d) : d = V[42], j = d, V[43] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.saveLocally",
                    defaultMessage: "Save locally…",
                    description: "Button that saves the selected feedback and diagnostics to a local ZIP file without sending them"
                }), V[43] = u) : u = V[43], w = u, x = f.b, F = !0, I = B, R = es, b = p.b, C = "form", S = "gap-2", M = e => {
                    e.preventDefault(), v(ee)
                }, V[44] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, o.jsx)(p.e, {
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
                }), V[44] = T) : T = V[44], a = p.e, t = p.f, _ = "gap-3", N = "radiogroup", O = h, P = "flex flex-wrap gap-2", D = ea.map(e => {
                    let t = em === e.id,
                        a = t ? i.a : l.a;
                    return (0, o.jsxs)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": t,
                        onClick: () => {
                            eg(e.id), Z?.({
                                details: g,
                                selectedOptionId: e.id
                            })
                        },
                        className: (0, s.b)("border-default cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: [(0, o.jsx)(m.a, {
                            asset: a,
                            "aria-hidden": !1
                        }), (0, o.jsx)(c.a, {
                            ...e.label
                        })]
                    }, e.id)
                }), V[0] = ei, V[1] = ec, V[2] = H, V[3] = ed, V[4] = X, V[5] = Z, V[6] = et, V[7] = ee, V[8] = ea, V[9] = ef, V[10] = em, V[11] = es, V[12] = er, V[13] = t, V[14] = a, V[15] = b, V[16] = x, V[17] = y, V[18] = v, V[19] = k, V[20] = w, V[21] = j, V[22] = _, V[23] = C, V[24] = S, V[25] = M, V[26] = T, V[27] = F, V[28] = I, V[29] = R, V[30] = N, V[31] = O, V[32] = P, V[33] = D
            } else t = V[13], a = V[14], b = V[15], x = V[16], y = V[17], v = V[18], k = V[19], w = V[20], j = V[21], _ = V[22], C = V[23], S = V[24], M = V[25], T = V[26], F = V[27], I = V[28], R = V[29], N = V[30], O = V[31], P = V[32], D = V[33];
            V[45] !== N || V[46] !== O || V[47] !== P || V[48] !== D ? (B = (0, o.jsx)("div", {
                role: N,
                "aria-label": O,
                className: P,
                children: D
            }), V[45] = N, V[46] = O, V[47] = P, V[48] = D, V[49] = B) : B = V[49], V[50] !== ec || V[51] !== y || V[52] !== el ? (A = el ? null : (0, o.jsx)(g.c, {
                autoFocus: !0,
                rows: 5,
                placeholder: y,
                "aria-label": y,
                value: ec,
                onChange: e => {
                    eu(e.target.value)
                },
                onKeyDown: h
            }), V[50] = ec, V[51] = y, V[52] = el, V[53] = A) : A = V[53], V[54] !== t || V[55] !== Q || V[56] !== _ || V[57] !== B || V[58] !== A ? (L = (0, o.jsxs)(t, {
                className: _,
                children: [B, A, Q]
            }), V[54] = t, V[55] = Q, V[56] = _, V[57] = B, V[58] = A, V[59] = L) : L = V[59], V[60] !== a || V[61] !== L ? (E = (0, o.jsx)(a, {
                children: L
            }), V[60] = a, V[61] = L, V[62] = E) : E = V[62], V[63] !== v || V[64] !== k || V[65] !== et || V[66] !== ef || V[67] !== w ? (z = null != et ? (0, o.jsx)(u.a, {
                color: "secondary",
                disabled: k || null != ef,
                loading: "save" === ef,
                sizingLabels: w,
                type: "button",
                onClick: () => {
                    v(et)
                },
                children: w
            }) : null, V[63] = v, V[64] = k, V[65] = et, V[66] = ef, V[67] = w, V[68] = z) : z = V[68];
            let eb = er || k || null != ef,
                eh = "submit" === ef;
            return V[69] !== j || V[70] !== eb || V[71] !== eh ? (U = (0, o.jsx)(u.a, {
                color: "primary",
                disabled: eb,
                loading: eh,
                sizingLabels: j,
                type: "submit",
                children: j
            }), V[69] = j, V[70] = eb, V[71] = eh, V[72] = U) : U = V[72], V[73] !== z || V[74] !== U ? (q = (0, o.jsx)(p.e, {
                children: (0, o.jsxs)(p.c, {
                    expandSingleButton: !1,
                    children: [z, U]
                })
            }), V[73] = z, V[74] = U, V[75] = q) : q = V[75], V[76] !== b || V[77] !== C || V[78] !== S || V[79] !== M || V[80] !== T || V[81] !== E || V[82] !== q ? (W = (0, o.jsxs)(b, {
                as: C,
                className: S,
                onSubmit: M,
                children: [T, E, q]
            }), V[76] = b, V[77] = C, V[78] = S, V[79] = M, V[80] = T, V[81] = E, V[82] = q, V[83] = W) : W = V[83], V[84] !== x || V[85] !== F || V[86] !== I || V[87] !== R || V[88] !== W ? (G = (0, o.jsx)(x, {
                open: F,
                onOpenChange: I,
                size: R,
                children: W
            }), V[84] = x, V[85] = F, V[86] = I, V[87] = R, V[88] = W, V[89] = G) : G = V[89], G
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
        let s = "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";

        function r() {
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
                href: s,
                rel: "noreferrer",
                target: "_blank",
                onClick: c,
                children: e
            })
        }

        function c(e) {
            (0, l.e)({
                event: e,
                href: s,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser"
            })
        }
        a.d(t, {
            a: () => r
        })
    }),
    nIGo: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("h6NE"),
            l = a("zd8w"),
            s = a("Wf1j"),
            r = a("oyxz"),
            d = a("Qgfj"),
            c = a("ygO2"),
            u = a("bqtn"),
            f = a("bf6R"),
            p = a("UxN3"),
            m = a("xUEK"),
            g = a("mDqV");

        function b(e) {
            let t, a, d, b, y, v, k, w, j, _, C, S, M, T, F, I, R = (0, n.c)(95),
                {
                    disabled: N,
                    hideUnselectedRating: O,
                    isAnimated: P,
                    menuItems: D,
                    rating: B,
                    onRate: A,
                    shouldRestoreFocus: L,
                    variant: E
                } = e,
                z = void 0 !== N && N,
                U = void 0 !== O && O,
                q = void 0 !== P && P,
                W = void 0 === E ? "response" : E,
                G = (0, s.a)(),
                V = (0, l.useRef)(null),
                Q = (0, l.useRef)(null),
                K = (0, l.useRef)(!1);
            R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                K.current && ((Q.current ?? V.current)?.focus(), K.current = !1)
            }, R[0] = t) : t = R[0], R[1] !== B ? (a = [B], R[1] = B, R[2] = a) : a = R[2], (0, l.useLayoutEffect)(t, a), R[3] !== A || R[4] !== B || R[5] !== L ? (d = e => {
                K.current = L?.(B === e ? null : e) ?? !0, A(e)
            }, R[3] = A, R[4] = B, R[5] = L, R[6] = d) : d = R[6];
            let H = d;
            if ("imageTurn" === W || "imageOverlay" === W) {
                let e, t, a, n, l, s = "imageOverlay" === W ? "mediaOverlay" : "secondary",
                    r = "imageOverlay" === W ? "mediaOverlay" : "ghost";
                R[7] !== G || R[8] !== q ? (e = q ? G.formatMessage(x.likeGif) : G.formatMessage(x.likeImage), R[7] = G, R[8] = q, R[9] = e) : e = R[9];
                let d = e;
                R[10] !== G || R[11] !== q ? (t = q ? G.formatMessage(x.dislikeGif) : G.formatMessage(x.dislikeImage), R[10] = G, R[11] = q, R[12] = t) : t = R[12];
                let u = t;
                return R[13] !== z || R[14] !== d || R[15] !== H || R[16] !== B || R[17] !== s || R[18] !== r || R[19] !== W ? (a = "thumbsDown" !== B ? (0, o.jsx)(i.a, {
                    content: d,
                    children: (0, o.jsx)(c.a, {
                        ref: V,
                        "aria-label": d,
                        "aria-pressed": "thumbsUp" === B,
                        color: "thumbsUp" === B ? s : r,
                        disabled: z || "thumbsUp" === B,
                        size: "imageOverlay" === W ? "inputIcon" : "icon",
                        radius: "imageOverlay" === W ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === W && e.stopPropagation(), H("thumbsUp")
                        },
                        children: "thumbsUp" === B ? (0, o.jsx)(f.Ni, {}) : (0, o.jsx)(f.Li, {})
                    })
                }) : null, R[13] = z, R[14] = d, R[15] = H, R[16] = B, R[17] = s, R[18] = r, R[19] = W, R[20] = a) : a = R[20], R[21] !== z || R[22] !== u || R[23] !== H || R[24] !== B || R[25] !== s || R[26] !== r || R[27] !== W ? (n = "thumbsUp" !== B ? (0, o.jsx)(i.a, {
                    content: u,
                    children: (0, o.jsx)(c.a, {
                        ref: V,
                        "aria-label": u,
                        "aria-pressed": "thumbsDown" === B,
                        color: "thumbsDown" === B ? s : r,
                        disabled: z || "thumbsDown" === B,
                        size: "imageOverlay" === W ? "inputIcon" : "icon",
                        radius: "imageOverlay" === W ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === W && e.stopPropagation(), H("thumbsDown")
                        },
                        children: "thumbsDown" === B ? (0, o.jsx)(f.Ji, {}) : (0, o.jsx)(f.Ii, {})
                    })
                }) : null, R[21] = z, R[22] = u, R[23] = H, R[24] = B, R[25] = s, R[26] = r, R[27] = W, R[28] = n) : n = R[28], R[29] !== a || R[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                    children: [a, n]
                }), R[29] = a, R[30] = n, R[31] = l) : l = R[31], l
            }
            if ("imageViewerMenu" === W || "imageViewerSubmenu" === W) {
                let e, t, a, n;
                R[32] !== U || R[33] !== q || R[34] !== H || R[35] !== B ? (e = U && "thumbsDown" === B ? null : (0, o.jsx)(u.c.Item, {
                    leftIcon: "thumbsUp" === B ? (0, o.jsx)(f.Ni, {}) : (0, o.jsx)(f.Li, {}),
                    onSelect: () => H("thumbsUp"),
                    children: q ? (0, o.jsx)(r.a, {
                        ...x.likeGif
                    }) : (0, o.jsx)(r.a, {
                        ...x.likeImage
                    })
                }), R[32] = U, R[33] = q, R[34] = H, R[35] = B, R[36] = e) : e = R[36], R[37] !== U || R[38] !== q || R[39] !== H || R[40] !== B ? (t = U && "thumbsUp" === B ? null : (0, o.jsx)(u.c.Item, {
                    leftIcon: "thumbsDown" === B ? (0, o.jsx)(f.Ji, {}) : (0, o.jsx)(f.Ii, {}),
                    onSelect: () => H("thumbsDown"),
                    children: q ? (0, o.jsx)(r.a, {
                        ...x.dislikeGif
                    }) : (0, o.jsx)(r.a, {
                        ...x.dislikeImage
                    })
                }), R[37] = U, R[38] = q, R[39] = H, R[40] = B, R[41] = t) : t = R[41], R[42] !== e || R[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [e, t]
                }), R[42] = e, R[43] = t, R[44] = a) : a = R[44];
                let i = a;
                if ("imageViewerSubmenu" === W) {
                    let e, t, a;
                    return R[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                        ...x.imageFeedback
                    }), R[45] = e) : e = R[45], R[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                        icon: {
                            16: f.Oi,
                            20: f.Pi
                        }
                    }), R[46] = t) : t = R[46], R[47] !== z || R[48] !== i ? (a = (0, o.jsx)(g.q, {
                        ref: Q,
                        disabled: z,
                        label: e,
                        leftIcon: t,
                        children: i
                    }), R[47] = z, R[48] = i, R[49] = a) : a = R[49], a
                }
                return R[50] !== z || R[51] !== i || R[52] !== D ? (n = (0, o.jsxs)(h, {
                    triggerRef: V,
                    disabled: z,
                    children: [D, i]
                }), R[50] = z, R[51] = i, R[52] = D, R[53] = n) : n = R[53], n
            }
            if (null != B) {
                let e, t, a, n, l, s = "thumbsUp" === B,
                    r = s ? f.Ni : f.Ji;
                R[54] !== G || R[55] !== s ? (e = G.formatMessage(s ? x.removeGoodResponse : x.removeBadResponse), R[54] = G, R[55] = s, R[56] = e) : e = R[56];
                let d = e;
                return R[57] !== H || R[58] !== B ? (t = () => H(B), R[57] = H, R[58] = B, R[59] = t) : t = R[59], R[60] !== r ? (a = (0, o.jsx)(r, {}), R[60] = r, R[61] = a) : a = R[61], R[62] !== z || R[63] !== d || R[64] !== a || R[65] !== t ? (n = (0, o.jsx)(c.a, {
                    ref: V,
                    type: "button",
                    "aria-label": d,
                    "aria-pressed": !0,
                    color: "ghost",
                    disabled: z,
                    size: "icon",
                    onClick: t,
                    children: a
                }), R[62] = z, R[63] = d, R[64] = a, R[65] = t, R[66] = n) : n = R[66], R[67] !== d || R[68] !== n ? (l = (0, o.jsx)(i.a, {
                    content: d,
                    children: n
                }), R[67] = d, R[68] = n, R[69] = l) : l = R[69], l
            }
            R[70] !== G ? (b = G.formatMessage(x.feedback), R[70] = G, R[71] = b) : b = R[71];
            let $ = b;
            return R[72] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, o.jsx)(m.a, {
                className: "icon-xs"
            }), R[72] = y) : y = R[72], R[73] !== $ ? (v = (0, o.jsx)(c.a, {
                ref: V,
                "aria-label": $,
                color: "ghost",
                size: "icon",
                children: y
            }), R[73] = $, R[74] = v) : v = R[74], R[75] !== $ || R[76] !== v ? (k = (0, o.jsx)(i.a, {
                content: $,
                children: v
            }), R[75] = $, R[76] = v, R[77] = k) : k = R[77], R[78] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsx)(p.b, {
                icon: {
                    16: f.Ki,
                    20: f.Li
                }
            }), R[78] = w) : w = R[78], R[79] !== H ? (j = () => H("thumbsUp"), R[79] = H, R[80] = j) : j = R[80], R[81] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(r.a, {
                ...x.goodResponse
            }), R[81] = _) : _ = R[81], R[82] !== j ? (C = (0, o.jsx)(u.c.Item, {
                leftIcon: w,
                onSelect: j,
                children: _
            }), R[82] = j, R[83] = C) : C = R[83], R[84] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(p.b, {
                icon: {
                    16: f.Hi,
                    20: f.Ii
                }
            }), R[84] = S) : S = R[84], R[85] !== H ? (M = () => H("thumbsDown"), R[85] = H, R[86] = M) : M = R[86], R[87] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, o.jsx)(r.a, {
                ...x.badResponse
            }), R[87] = T) : T = R[87], R[88] !== M ? (F = (0, o.jsx)(u.c.Item, {
                leftIcon: S,
                onSelect: M,
                children: T
            }), R[88] = M, R[89] = F) : F = R[89], R[90] !== z || R[91] !== k || R[92] !== C || R[93] !== F ? (I = (0, o.jsxs)(u.a, {
                disabled: z,
                side: "top",
                triggerButton: k,
                children: [C, F]
            }), R[90] = z, R[91] = k, R[92] = C, R[93] = F, R[94] = I) : I = R[94], I
        }

        function h(e) {
            let t, a, l, r, d, p = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: b
                } = e,
                h = void 0 !== g && g,
                y = (0, s.a)();
            p[0] !== y ? (t = y.formatMessage(x.imageMenu), p[0] = y, p[1] = t) : t = p[1];
            let v = t;
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.Yc, {}), p[2] = a) : a = p[2], p[3] !== h || p[4] !== v || p[5] !== b ? (l = (0, o.jsx)(c.a, {
                ref: b,
                "aria-label": v,
                color: "ghost",
                disabled: h,
                size: "toolbar",
                uniform: !0,
                children: a
            }), p[3] = h, p[4] = v, p[5] = b, p[6] = l) : l = p[6], p[7] !== v || p[8] !== l ? (r = (0, o.jsx)(i.a, {
                content: v,
                children: l
            }), p[7] = v, p[8] = l, p[9] = r) : r = p[9], p[10] !== m || p[11] !== h || p[12] !== r ? (d = (0, o.jsx)(u.a, {
                disabled: h,
                align: "end",
                side: "bottom",
                triggerButton: r,
                children: m
            }), p[10] = m, p[11] = h, p[12] = r, p[13] = d) : d = p[13], d
        }
        let x = (0, d.f)({
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
            a: () => h,
            b: () => b
        })
    }),
    taaw: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            l = a("Kwur"),
            s = a("OBi1"),
            r = a("HFSu");

        function d(e) {
            let t, a, i, l, r, d, m = (0, n.c)(37),
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
                N = null != y,
                O = null != y,
                P = null != y ? "chatgpt" : void 0;
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
            return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (r = y?.title ?? (0, o.jsx)(c, {
                reportEntityType: k,
                title: S
            }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = r) : r = m[21], m[22] !== T || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== r || m[28] !== a || m[29] !== i || m[30] !== R || m[31] !== N || m[32] !== O || m[33] !== P || m[34] !== l || m[35] !== D ? (d = (0, o.jsx)(s.ReportDialog, {
                onBack: t,
                onClose: b,
                onCloseAutoFocus: h,
                queryKey: a,
                loadReasons: i,
                gcTime: R,
                includeServerFields: N,
                preventCloseWhileSubmitting: O,
                dialogVariant: P,
                contentClassName: T,
                submitReport: l,
                openExternalForm: D,
                successBody: _,
                title: r
            }), m[22] = T, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = r, m[28] = a, m[29] = i, m[30] = R, m[31] = N, m[32] = O, m[33] = P, m[34] = l, m[35] = D, m[36] = d) : d = m[36], d
        }

        function c(e) {
            let t, a = (0, n.c)(5),
                {
                    reportEntityType: l,
                    title: s
                } = e;
            if (null != s) {
                let e;
                return a[0] !== s ? (e = (0, o.jsx)(o.Fragment, {
                    children: s
                }), a[0] = s, a[1] = e) : e = a[1], e
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
                additionalHeaders: (0, r.d)()
            })
        }
        async function p(e, t, a, o) {
            let {
                details: n,
                entityType: i,
                reasonId: s,
                threadId: d
            } = e, c = {
                entity_id: d,
                entity_type: i,
                additional_fields_values: "project" === i || "share_link" === i ? {} : void 0,
                product_area: o ?? ("conversation" === i || "connector" === i || "project" === i || "share_link" === i ? "1p" : "codex"),
                reason: 0 === n.length ? {
                    id: s
                } : {
                    id: s,
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
                    ...(0, r.d)(),
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
            s = a("U8sx"),
            r = a("xpW6");

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
            return e.set(s.b, y, {
                content: c,
                path: g,
                save: null
            }), !!a(e, g, {
                revealAndFocus: d,
                hostId: f,
                insertPosition: p,
                onContentChange: t => {
                    e.set(s.b, y, e => e?.path === g ? {
                        ...e,
                        content: t
                    } : e)
                },
                onSaveChange: t => {
                    e.set(s.b, y, e => e?.path === g ? {
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
                    asset: r.a
                }),
                title: x
            }), e.set(s.a, {
                key: m,
                tabId: l.a.PLAN
            }), !0)
        }
        a.d(t, {
            openEditablePlanTabWithEditor: () => d
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("M7HN"), a("toag");
        var o = a("ZU27");
        a("GaA7"), a("sbaW"), a("ndjw");
        var n = a("bCmT");
        a("odlM"), a("VtLY");
        var i = a("Yc0o");
        a("WFY2"), a("bnxy"), a("cbrt");
        var l = a("U8sx");
        a("bRIv");
        let s = (0, n.b)({
            open: d
        });

        function r(e, t) {
            d(e, t)
        }

        function d(e, t) {
            let {
                content: a,
                conversationId: n,
                cwd: r,
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
            }), (0, o.f)(e, s, {
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
                    cwd: r,
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
            openPlanSidePanel: () => r,
            openReadOnlyPlanSidePanel: () => d
        })
    }),
    U8sx: (function(e, t, a) {
        var o = a("iTtm"),
            n = a("OWtl"),
            i = a("tSEg");
        let l = (0, o.u)(i.a, null),
            s = (0, o.v)(n.a, e => null),
            r = (0, o.d)(n.a, (e, t) => {
                let {
                    get: a
                } = t;
                return a(s, e)?.content ?? null
            });
        a.d(t, {}, {
            a: l,
            b: s,
            c: r
        })
    }),
    CQTg: (function(e, t, a) {
        a.d(t, {
            a: () => F
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            l = a("IPUh"),
            s = a("iTtm"),
            r = a("zd8w"),
            d = a("Wf1j"),
            c = a("oyxz");
        a("ZU27"), a("gbrq");
        var u = a("ygO2"),
            f = a("uuN8"),
            p = a("HOLv"),
            m = a("CqQF"),
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
            let t, a, F, I, N, O, P, D, B, A, L, E, z, U, q, W, G, V, Q, K, H, $, J, Y, X, Z, ee, et, ea, eo = (0, n.c)(106),
                {
                    item: en,
                    conversationId: ei,
                    cwd: el,
                    hideCodeBlocks: es,
                    defaultCollapsed: er,
                    hasArtifacts: ed,
                    reportEntityType: ec,
                    showOpenButton: eu,
                    turnId: ef,
                    isThreadPreview: ep,
                    isThreadPreviewCollapsed: em,
                    onOpenInSidePanel: eg
                } = e,
                eb = void 0 !== es && es,
                eh = void 0 !== ed && ed,
                ex = void 0 === ec ? "thread" : ec,
                ey = void 0 !== ep && ep,
                ev = void 0 !== em && em,
                [ek, ew] = (0, r.useState)(void 0 !== er && er),
                ej = (0, s.z)(w.threadHostId$),
                e_ = (0, d.a)(),
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
            let eN = I;
            eo[10] !== e_ ? (N = e_.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel",
                description: "Accessible label for the collapsed plan card that closes the plan side panel"
            }), eo[10] = e_, eo[11] = N) : N = eo[11];
            let eO = N;
            eo[12] !== e_ || eo[13] !== ek ? (O = ek ? e_.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary",
                description: "Aria label for button that expands a collapsed plan summary"
            }) : e_.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary",
                description: "Aria label for button that collapses the plan summary content"
            }), eo[12] = e_, eo[13] = ek, eo[14] = O) : O = eo[14];
            let eP = O;
            eo[15] !== en.content ? (P = () => {
                let e = new Blob([en.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, eo[15] = en.content, eo[16] = P) : P = eo[16];
            let eD = P;
            eo[17] !== ei || eo[18] !== en.content || eo[19] !== eC || eo[20] !== ef ? (D = e => {
                null != ef && eC.submitCodexAnalyticsEvent?.({
                    action: "copy",
                    eventKind: "action",
                    metadata: {
                        surface: "plan_summary"
                    },
                    threadId: ei,
                    turnId: ef
                }), (0, _.b)(en.content, e)
            }, eo[17] = ei, eo[18] = en.content, eo[19] = eC, eo[20] = ef, eo[21] = D) : D = eo[21];
            let eB = D,
                eA = ey ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            eo[22] !== ey || eo[23] !== ev || eo[24] !== eg ? (B = ey && !ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: eg
            }) : null, eo[22] = ey, eo[23] = ev, eo[24] = eg, eo[25] = B) : B = eo[25], eo[26] !== eO || eo[27] !== ev || eo[28] !== eg ? (A = ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eO,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: eg,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(h, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, eo[26] = eO, eo[27] = ev, eo[28] = eg, eo[29] = A) : A = eo[29];
            let eL = ey ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            eo[30] !== eL ? (L = (0, i.b)("text-base leading-tight", eL), eo[30] = eL, eo[31] = L) : L = eo[31], eo[32] !== ey ? (E = ey ? (0, o.jsx)(p.a, {
                className: "shrink-0",
                asset: T.a
            }) : null, eo[32] = ey, eo[33] = E) : E = eo[33], eo[34] !== en.completed ? (z = en.completed ? (0, o.jsx)(c.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(S.a, {
                children: (0, o.jsx)(c.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), eo[34] = en.completed, eo[35] = z) : z = eo[35], eo[36] !== L || eo[37] !== E || eo[38] !== z ? (U = (0, o.jsxs)("span", {
                className: L,
                children: [E, z]
            }), eo[36] = L, eo[37] = E, eo[38] = z, eo[39] = U) : U = eo[39];
            let eE = ev && "hidden";
            eo[40] !== eE ? (q = (0, i.b)("relative z-20 flex items-center gap-1", eE), eo[40] = eE, eo[41] = q) : q = eo[41];
            eo[42] !== eR || eo[43] !== eD || eo[44] !== eF ? (W = eF ? (0, o.jsx)(m.a, {
                tooltipContent: eR,
                children: (0, o.jsx)(u.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eR,
                    onClick: eD,
                    children: (0, o.jsx)(x.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[42] = eR, eo[43] = eD, eo[44] = eF, eo[45] = W) : W = eo[45], eo[46] !== eB || eo[47] !== eT ? (G = eT ? (0, o.jsx)(f.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eB
            }) : null, eo[46] = eB, eo[47] = eT, eo[48] = G) : G = eo[48], eo[49] !== ei || eo[50] !== eh || eo[51] !== ex || eo[52] !== eI || eo[53] !== ef ? (V = eI ? (0, o.jsx)(M.a, {
                hasArtifacts: eh,
                reportEntityType: ex,
                threadId: ei,
                turnId: ef
            }) : null, eo[49] = ei, eo[50] = eh, eo[51] = ex, eo[52] = eI, eo[53] = ef, eo[54] = V) : V = eo[54], eo[55] !== eg || eo[56] !== eN ? (Q = null != eg ? (0, o.jsx)(m.a, {
                tooltipContent: eN,
                children: (0, o.jsx)(u.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eN,
                    onClick: eg,
                    children: (0, o.jsx)(y.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[55] = eg, eo[56] = eN, eo[57] = Q) : Q = eo[57], eo[58] !== eP || eo[59] !== ek || eo[60] !== ey ? (K = ey ? null : (0, o.jsx)(m.a, {
                tooltipContent: ek ? (0, o.jsx)(c.a, {
                    id: "localConversation.planSummary.expandTooltip",
                    defaultMessage: "Expand",
                    description: "Tooltip text for button that expands a collapsed plan summary"
                }) : (0, o.jsx)(c.a, {
                    id: "localConversation.planSummary.collapseTooltip",
                    defaultMessage: "Collapse",
                    description: "Tooltip text for button that collapses the plan summary content"
                }),
                children: (0, o.jsx)(u.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eP,
                    onClick: () => {
                        ew(R)
                    },
                    children: (0, o.jsx)(b.a, {
                        className: (0, i.b)("icon-2xs transition-transform", ek ? "rotate-180" : "rotate-0")
                    })
                })
            }), eo[58] = eP, eo[59] = ek, eo[60] = ey, eo[61] = K) : K = eo[61], eo[62] !== ev || eo[63] !== q || null !== eo[64] || eo[65] !== W || eo[66] !== G || eo[67] !== V || eo[68] !== Q || eo[69] !== K ? (H = (0, o.jsxs)("div", {
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
            eo[77] !== eU ? (Y = (0, i.b)("relative overflow-hidden", eU), eo[77] = eU, eo[78] = Y) : Y = eo[78];
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
                    children: (0, o.jsx)(u.a, {
                        className: "pointer-events-auto",
                        color: "primary",
                        onClick: () => {
                            ew(!1)
                        },
                        children: (0, o.jsx)(c.a, {
                            id: "localConversation.planSummary.viewPlan",
                            defaultMessage: "Expand plan",
                            description: "Button label to expand a collapsed plan summary"
                        })
                    })
                })]
            }) : null, eo[90] = ek, eo[91] = ey, eo[92] = ee) : ee = eo[92], eo[93] !== J || eo[94] !== ez || eo[95] !== Y || eo[96] !== eq || eo[97] !== X || eo[98] !== Z || eo[99] !== ee ? (et = (0, o.jsxs)(l.a.div, {
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
            s = a("Qgfj"),
            r = a("toag"),
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
            y = (0, s.f)({
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
                    hasArtifacts: s,
                    reportEntityType: y,
                    renderControl: w,
                    threadId: C,
                    turnId: S
                } = e,
                M = void 0 !== s && s,
                T = void 0 === y ? "thread" : y,
                F = (0, i.y)(m.a),
                [I, R] = (0, l.useState)(null),
                N = (0, i.z)(p.c),
                O = (0, g.h)("584954669");
            if (a[0] !== M || a[1] !== N || a[2] !== w || a[3] !== T || a[4] !== O || a[5] !== F || a[6] !== I || a[7] !== C || a[8] !== S) {
                let e, n = (e, t, a) => {
                        let n = M ? v[e] : k[e],
                            l = O ? n : n.filter(_);
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
                                return o === h ? void i(a, e) : N.submitCodexAnalyticsEvent?.({
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
                a[10] !== N || a[11] !== F || a[12] !== C || a[13] !== S ? (e = e => {
                    if (R(e), null == e) return;
                    let t = F.get(r.Cb, C);
                    N.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: C,
                        turnId: S,
                        sessionId: t === C && null != F.get(r.Nb, C) ? null : t,
                        rating: e
                    })
                }, a[10] = N, a[11] = F, a[12] = C, a[13] = S, a[14] = e) : e = a[14];
                let l = e,
                    s = {
                        rating: null == I ? null : x[I],
                        onRate: e => {
                            let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                a = I === t ? null : t;
                            l(a), null != a && n(a)
                        },
                        shouldRestoreFocus: j
                    };
                t = null != w ? w(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                    ...s
                }), a[0] = M, a[1] = N, a[2] = w, a[3] = T, a[4] = O, a[5] = F, a[6] = I, a[7] = C, a[8] = S, a[9] = t
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
            s = a("oyxz"),
            r = a("u6ch"),
            d = a("tKUf"),
            c = a("cWXs");

        function u(e) {
            let t, a, l = (0, n.c)(7),
                {
                    background: s,
                    className: r,
                    children: d,
                    overflow: c
                } = e,
                u = "normal" === (void 0 === s ? "subtle" : s) ? "bg-surface" : "bg-text/5",
                f = "auto" === (void 0 === c ? "clip" : c) ? "overflow-auto" : "overflow-clip";
            return l[0] !== r || l[1] !== u || l[2] !== f ? (t = (0, i.b)("relative rounded-lg", u, f, r), l[0] = r, l[1] = u, l[2] = f, l[3] = t) : t = l[3], l[4] !== d || l[5] !== t ? (a = (0, o.jsx)("div", {
                className: t,
                children: d
            }), l[4] = d, l[5] = t, l[6] = a) : a = l[6], a
        }

        function f(e) {
            let t, a, i, l, s = (0, n.c)(15),
                {
                    enableMetadataPreview: r,
                    markdown: u,
                    conversationId: f,
                    cwd: m,
                    hideCodeBlocks: g,
                    hostId: b,
                    isStreaming: h
                } = e,
                x = void 0 !== r && r,
                y = void 0 === f ? null : f,
                v = void 0 === m ? null : m,
                k = void 0 !== h && h;
            s[0] !== x || s[1] !== u ? (t = x ? (0, d.a)(u) : null, s[0] = x, s[1] = u, s[2] = t) : t = s[2];
            let w = t,
                j = w?.body ?? u;
            return s[3] !== w ? (a = null != w && w.entries.length > 0 ? (0, o.jsx)(p, {
                entries: w.entries
            }) : null, s[3] = w, s[4] = a) : a = s[4], s[5] !== y || s[6] !== v || s[7] !== g || s[8] !== b || s[9] !== k || s[10] !== j ? (i = (0, o.jsx)(c.a, {
                className: "text-size-chat",
                conversationId: y,
                hideCodeBlocks: g,
                hostId: b,
                isStreaming: k,
                cwd: v,
                children: j
            }), s[5] = y, s[6] = v, s[7] = g, s[8] = b, s[9] = k, s[10] = j, s[11] = i) : i = s[11], s[12] !== a || s[13] !== i ? (l = (0, o.jsxs)("div", {
                className: "px-4 py-3",
                children: [a, i]
            }), s[12] = a, s[13] = i, s[14] = l) : l = s[14], l
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
                children: (0, o.jsx)(s.a, {
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
                    children: b ? (0, o.jsx)(s.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less",
                        description: "Disclosure control shown when a Markdown metadata preview can collapse additional fields"
                    }) : (0, o.jsx)(s.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more",
                        description: "Disclosure control shown when a Markdown metadata preview hides additional fields"
                    })
                }), (0, o.jsx)(r.a, {
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
            let t, a, l, s = (0, n.c)(7),
                {
                    className: r,
                    entries: d
                } = e;
            return s[0] !== r ? (t = (0, i.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", r), s[0] = r, s[1] = t) : t = s[1], s[2] !== d ? (a = d.map(b), s[2] = d, s[3] = a) : a = s[3], s[4] !== t || s[5] !== a ? (l = (0, o.jsx)("dl", {
                className: t,
                children: a
            }), s[4] = t, s[5] = a, s[6] = l) : l = s[6], l
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
            s = a("on57"),
            r = a("zd8w"),
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
            let t, a, s, x, _, C, S, M, T, F, I, R, N, O, P, D, B, A, L, E, z, U, q, W, G, V, Q, K, H, $, J, Y = (0, n.c)(119),
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
                    title: es,
                    gcTime: er,
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
            Y[0] !== er ? (t = null == er ? {} : {
                gcTime: er
            }, Y[0] = er, Y[1] = t) : t = Y[1], Y[2] !== ea || Y[3] !== et || Y[4] !== em || Y[5] !== t ? (a = {
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
            Y[7] !== eo ? (s = {
                mutationFn: eo
            }, Y[7] = eo, Y[8] = s) : s = Y[8];
            let ek = (0, l.a)(s),
                [ew, ej] = (0, r.useState)("");
            Y[9] === Symbol.for("react.memo_cache_sentinel") ? (x = {}, Y[9] = x) : x = Y[9];
            let [e_, eC] = (0, r.useState)(x), [eS, eM] = (0, r.useState)(null);
            Y[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], Y[10] = _) : _ = Y[10];
            let [eT, eF] = (0, r.useState)(_), eI = 0 === eT.length ? null : eT[eT.length - 1];
            Y[11] !== eI || Y[12] !== eg || Y[13] !== ex?.reasons || Y[14] !== eS ? (F = (R = (null == eI ? ex?.reasons : eI.sub_reasons) ?? []).find(e => e.id === eS) ?? null, S = (C = eI?.details_placeholder != null || eg && eI?.has_details === !0) || eg && (eI?.additional_fields?.length ?? 0) > 0, T = eI?.link_attachment != null, M = eI?.subtext != null && 0 === R.length && !S && !T, I = S || null != F && j(F, eg), Y[11] = eI, Y[12] = eg, Y[13] = ex?.reasons, Y[14] = eS, Y[15] = C, Y[16] = S, Y[17] = M, Y[18] = T, Y[19] = F, Y[20] = I, Y[21] = R) : (C = Y[15], S = Y[16], M = Y[17], T = Y[18], F = Y[19], I = Y[20], R = Y[21]);
            let eR = I,
                eN = null == F || ey || ek.isPending,
                eO = ek.isSuccess || ev,
                eP = !eO && (eR && null == eo || !eR && !T && eN);
            Y[22] !== Z || Y[23] !== eb || Y[24] !== ek.isPending ? (N = e => {
                e || eb && ek.isPending || Z()
            }, Y[22] = Z, Y[23] = eb, Y[24] = ek.isPending, Y[25] = N) : N = Y[25];
            let eD = N;
            Y[26] !== eI || Y[27] !== X || Y[28] !== eT ? (O = () => {
                if (null == eI) return void X?.();
                let e = eT[eT.length - 1];
                eF(y), eM(e?.id ?? null), ej(""), eC({})
            }, Y[26] = eI, Y[27] = X, Y[28] = eT, Y[29] = O) : O = Y[29];
            let eB = O;
            Y[30] !== eI || Y[31] !== e_ || Y[32] !== ew || Y[33] !== eg || Y[34] !== S || Y[35] !== M || Y[36] !== T || Y[37] !== Z || Y[38] !== ei || Y[39] !== ek || Y[40] !== F || Y[41] !== eT || Y[42] !== eO || Y[43] !== eo ? (P = e => {
                if (e.preventDefault(), !ek.isPending && (!eg || e.currentTarget.reportValidity())) {
                    if (eO) return void Z();
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
            }, Y[30] = eI, Y[31] = e_, Y[32] = ew, Y[33] = eg, Y[34] = S, Y[35] = M, Y[36] = T, Y[37] = Z, Y[38] = ei, Y[39] = ek, Y[40] = F, Y[41] = eT, Y[42] = eO, Y[43] = eo, Y[44] = P) : P = Y[44];
            let eA = P;
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
            }, Y[52] = ee, Y[53] = A) : A = Y[53], Y[54] !== ek.isSuccess || Y[55] !== es ? (L = ek.isSuccess ? (0, o.jsx)(c.a, {
                id: "codexThreadReportDialog.successTitle",
                defaultMessage: "Thanks for your report",
                description: "Title shown after a safety or legal report is submitted"
            }) : es, Y[54] = ek.isSuccess, Y[55] = es, Y[56] = L) : L = Y[56], Y[57] !== L ? (E = (0, o.jsx)(p.e, {
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
            }), Y[91] = eI, Y[92] = eB, Y[93] = X, Y[94] = ek.isPending, Y[95] = ek.isSuccess, Y[96] = Q) : Q = Y[96], Y[97] !== eL || Y[98] !== M || Y[99] !== T || Y[100] !== eP || Y[101] !== eR || Y[102] !== ek.isPending || Y[103] !== eO ? (K = !M || eO ? (0, o.jsx)(f.a, {
                color: "primary",
                disabled: eP,
                loading: ek.isPending,
                type: T ? "button" : "submit",
                onClick: T ? eL : void 0,
                children: (0, o.jsx)(v, {
                    close: eO,
                    isLinkStep: T,
                    isSubmitStep: eR
                })
            }) : null, Y[97] = eL, Y[98] = M, Y[99] = T, Y[100] = eP, Y[101] = eR, Y[102] = ek.isPending, Y[103] = eO, Y[104] = K) : K = Y[104], Y[105] !== Q || Y[106] !== K ? (H = (0, o.jsx)(m.e, {
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
                    isSubmitStep: s
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
            if (s) {
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
                    reasons: r,
                    selectedReasonId: c,
                    setSelectedReasonId: u
                } = e,
                f = (0, d.a)();
            if (l[0] !== f ? (t = f.formatMessage({
                    id: "codexThreadReportDialog.optionsLabel",
                    defaultMessage: "Reporting options",
                    description: "Accessible label for Codex thread report reason options"
                }), l[0] = f, l[1] = t) : t = l[1], l[2] !== r || l[3] !== c || l[4] !== u) {
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
                        className: (0, s.b)("border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: e.cta
                    }, e.id)
                }, l[6] = c, l[7] = u, l[8] = e) : e = l[8], a = r.map(e), l[2] = r, l[3] = c, l[4] = u, l[5] = a
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
            i = a("toag"),
            l = a("XGJX"),
            s = a("uNQ5"),
            r = a("GaA7"),
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
                    requestClient: a(i.e, n.Ub)
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
                let s = {
                        executorAccess: l
                    },
                    r = {
                        environmentId: e,
                        path: a
                    },
                    d = await o.sendRequest("fs/getMetadata", r, s);
                g?.throwIfAborted();
                let {
                    dataBase64: c
                } = await o.sendRequest("fs/readFile", r, s);
                g?.throwIfAborted();
                let u = (0, f.a)(c);
                if (null != i && u.byteLength > i) throw Error("File is too large");
                if (m && await (0, n.ng)(u.subarray(0, n._b)) !== "text") throw Error("File is not text");
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
            if (null != r.appServices.workspaceFiles.saveText) {
                let e = await (0, d.a)(r.appServices.workspaceFiles.read({
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
                    s = new TextDecoder("utf-8", {
                        fatal: !0,
                        ignoreBOM: !0
                    }).decode(t);
                return {
                    content: l ? s.slice(1) : s,
                    hasUtf8Bom: l,
                    mtimeMs: h ?? null,
                    sizeBytes: t.byteLength
                }
            }
            let {
                contents: y
            } = await (0, s.a)({
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
                } = t, s = {
                    executorAccess: l
                }, r = {
                    environmentId: e,
                    path: n
                }, {
                    modifiedAtMs: d
                } = await i.sendRequest("fs/getMetadata", r, s);
                return d !== o ? {
                    mtimeMs: d,
                    outcome: "conflict"
                } : (await i.sendRequest("fs/writeFile", {
                    ...r,
                    dataBase64: (0, p.b)(a)
                }, s), {
                    mtimeMs: (await i.sendRequest("fs/getMetadata", r, s)).modifiedAtMs,
                    outcome: "saved"
                })
            }
            let s = r.appServices.workspaceFiles.saveText;
            if (null == s) throw Error("Saving text files is not supported by this host");
            return (0, d.a)(s({
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