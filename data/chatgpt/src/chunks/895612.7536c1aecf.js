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
            "Enter" === e.key && e.metaKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit())
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, h, x, y, v, k, w, j, _, C, S, M, T, F, R, I, O, N, P, D, B, A, L, E, z, U, q, W, G, V, Q, $ = (0, n.c)(101),
                    {
                        belowFreeformContent: K,
                        closeOnSubmit: H,
                        freeformFeedbackRequired: Y,
                        hideFreeformInput: J,
                        initialDetails: Z,
                        initialSelectedOptionId: X,
                        onClose: ee,
                        onOptionSelect: et,
                        onSubmit: ea,
                        onSave: eo,
                        saveActionLabel: en,
                        options: ei,
                        size: el,
                        submitDisabled: es
                    } = e,
                    er = void 0 === H ? "after-submit" : H,
                    ed = void 0 !== J && J,
                    ec = void 0 === el ? "wide" : el,
                    eu = void 0 !== es && es,
                    ef = (0, d.a)(),
                    [ep, em] = (0, r.useState)(void 0 === Z ? "" : Z),
                    [eg, eb] = (0, r.useState)(null),
                    [eh, ex] = (0, r.useState)(X ?? null);
                if ($[0] !== er || $[1] !== ep || $[2] !== Y || $[3] !== ef || $[4] !== ee || $[5] !== et || $[6] !== eo || $[7] !== ea || $[8] !== ei || $[9] !== eg || $[10] !== en || $[11] !== eh || $[12] !== ec || $[13] !== eu) {
                    let e, n, r, d, u, g, b = ep.trim();
                    $[37] !== Y || $[38] !== ef ? (e = Y ? ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.required",
                        defaultMessage: "Share details (required)",
                        description: "Placeholder for a required freeform feedback details field"
                    }) : ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.optional",
                        defaultMessage: "Share details (optional)",
                        description: "Placeholder for an optional freeform feedback details field"
                    }), $[37] = Y, $[38] = ef, $[39] = e) : e = $[39], y = e, $[40] !== ef ? (n = ef.formatMessage({
                        id: "feedbackFormDialog.optionsLabel",
                        defaultMessage: "Feedback options",
                        description: "Accessible label for feedback options"
                    }), $[40] = ef, $[41] = n) : n = $[41];
                    let L = n;
                    k = null == eh || Y && 0 === b.length, $[42] !== ee || $[43] !== eg ? (r = e => {
                        e || null != eg || ee()
                    }, $[42] = ee, $[43] = eg, $[44] = r) : r = $[44];
                    let E = r;
                    v = async e => {
                        if (null == eh || null != eg || k || e === ea && eu) return;
                        if ("immediate" === er) {
                            !1 !== e({
                                selectedOptionId: eh,
                                details: b
                            }) && ee();
                            return
                        }
                        eb(e === eo ? "save" : "submit");
                        let t = !1;
                        await (async () => {
                            t = await e({
                                selectedOptionId: eh,
                                details: b
                            }) !== !1
                        })().finally(() => {
                            eb(null)
                        }), t && ee()
                    }, $[45] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(c.a, {
                        id: "feedbackFormDialog.submit",
                        defaultMessage: "Submit",
                        description: "Label for the button that submits feedback"
                    }), $[45] = d) : d = $[45], _ = d, $[46] !== en ? (u = en ?? (0, o.jsx)(c.a, {
                        id: "feedbackFormDialog.saveLocally",
                        defaultMessage: "Save locally…",
                        description: "Button that saves the selected feedback and diagnostics to a local ZIP file without sending them"
                    }), $[46] = en, $[47] = u) : u = $[47], j = u, $[48] !== eo || $[49] !== en || $[50] !== j ? (g = null != eo && null != en ? [j, _] : null, $[48] = eo, $[49] = en, $[50] = j, $[51] = g) : g = $[51], w = g, x = f.b, I = !0, O = E, N = ec, h = p.b, S = "form", M = "gap-2", T = "viewport", F = e => {
                        e.preventDefault(), v(ea)
                    }, $[52] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, o.jsx)(p.e, {
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
                    }), $[52] = R) : R = $[52], a = p.e, t = p.f, C = "gap-3", P = "radiogroup", D = L, B = "flex flex-wrap gap-2", A = ei.map(e => {
                        let t = eh === e.id,
                            a = t ? i.a : l.a;
                        return (0, o.jsxs)("button", {
                            type: "button",
                            role: "radio",
                            "aria-checked": t,
                            onClick: () => {
                                ex(e.id), et?.({
                                    details: b,
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
                    }), $[0] = er, $[1] = ep, $[2] = Y, $[3] = ef, $[4] = ee, $[5] = et, $[6] = eo, $[7] = ea, $[8] = ei, $[9] = eg, $[10] = en, $[11] = eh, $[12] = ec, $[13] = eu, $[14] = t, $[15] = a, $[16] = h, $[17] = x, $[18] = y, $[19] = v, $[20] = k, $[21] = w, $[22] = j, $[23] = _, $[24] = C, $[25] = S, $[26] = M, $[27] = T, $[28] = F, $[29] = R, $[30] = I, $[31] = O, $[32] = N, $[33] = P, $[34] = D, $[35] = B, $[36] = A
                } else t = $[14], a = $[15], h = $[16], x = $[17], y = $[18], v = $[19], k = $[20], w = $[21], j = $[22], _ = $[23], C = $[24], S = $[25], M = $[26], T = $[27], F = $[28], R = $[29], I = $[30], O = $[31], N = $[32], P = $[33], D = $[34], B = $[35], A = $[36];
                $[53] !== P || $[54] !== D || $[55] !== B || $[56] !== A ? (L = (0, o.jsx)("div", {
                    role: P,
                    "aria-label": D,
                    className: B,
                    children: A
                }), $[53] = P, $[54] = D, $[55] = B, $[56] = A, $[57] = L) : L = $[57], $[58] !== ep || $[59] !== y || $[60] !== ed ? (E = ed ? null : (0, o.jsx)(g.c, {
                    autoFocus: !0,
                    rows: 5,
                    placeholder: y,
                    "aria-label": y,
                    value: ep,
                    onChange: e => {
                        em(e.target.value)
                    },
                    onKeyDown: b
                }), $[58] = ep, $[59] = y, $[60] = ed, $[61] = E) : E = $[61], $[62] !== t || $[63] !== K || $[64] !== C || $[65] !== L || $[66] !== E ? (z = (0, o.jsxs)(t, {
                    className: C,
                    children: [L, E, K]
                }), $[62] = t, $[63] = K, $[64] = C, $[65] = L, $[66] = E, $[67] = z) : z = $[67], $[68] !== a || $[69] !== z ? (U = (0, o.jsx)(a, {
                    children: z
                }), $[68] = a, $[69] = z, $[70] = U) : U = $[70], $[71] !== v || $[72] !== k || $[73] !== eo || $[74] !== w || $[75] !== eg || $[76] !== j ? (q = null != eo ? (0, o.jsx)(u.a, {
                    color: "secondary",
                    disabled: k || null != eg,
                    loading: "save" === eg,
                    sizingLabels: w ?? j,
                    type: "button",
                    onClick: () => {
                        v(eo)
                    },
                    children: j
                }) : null, $[71] = v, $[72] = k, $[73] = eo, $[74] = w, $[75] = eg, $[76] = j, $[77] = q) : q = $[77];
                let ey = eu || k || null != eg,
                    ev = "submit" === eg,
                    ek = w ?? _;
                return $[78] !== _ || $[79] !== ey || $[80] !== ev || $[81] !== ek ? (W = (0, o.jsx)(u.a, {
                    color: "primary",
                    disabled: ey,
                    loading: ev,
                    sizingLabels: ek,
                    type: "submit",
                    children: _
                }), $[78] = _, $[79] = ey, $[80] = ev, $[81] = ek, $[82] = W) : W = $[82], $[83] !== q || $[84] !== W ? (G = (0, o.jsx)(p.e, {
                    children: (0, o.jsxs)(p.c, {
                        expandSingleButton: !1,
                        children: [q, W]
                    })
                }), $[83] = q, $[84] = W, $[85] = G) : G = $[85], $[86] !== h || $[87] !== S || $[88] !== M || $[89] !== T || $[90] !== F || $[91] !== R || $[92] !== U || $[93] !== G ? (V = (0, o.jsxs)(h, {
                    as: S,
                    className: M,
                    size: T,
                    onSubmit: F,
                    children: [R, U, G]
                }), $[86] = h, $[87] = S, $[88] = M, $[89] = T, $[90] = F, $[91] = R, $[92] = U, $[93] = G, $[94] = V) : V = $[94], $[95] !== x || $[96] !== I || $[97] !== O || $[98] !== N || $[99] !== V ? (Q = (0, o.jsx)(x, {
                    open: I,
                    onOpenChange: O,
                    size: N,
                    children: V
                }), $[95] = x, $[96] = I, $[97] = O, $[98] = N, $[99] = V, $[100] = Q) : Q = $[100], Q
            }
        })
    }),
    UrAA: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            l = a("Ot7V");
        let s = "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";

        function r(e) {
            return (0, o.jsx)("a", {
                className: "underline underline-offset-2",
                href: s,
                rel: "noreferrer",
                target: "_blank",
                onClick: d,
                children: e
            })
        }

        function d(e) {
            (0, l.e)({
                event: e,
                href: s,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser"
            })
        }
        a.d(t, {}, {
            a: function() {
                let e, t = (0, n.c)(2);
                return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)("div", {
                    className: "text-sm text-codex-description",
                    children: (0, o.jsx)(i.a, {
                        id: "turnRatingControls.feedbackLegalNotice",
                        defaultMessage: "Your feedback can be used to improve ChatGPT. <link>Learn more</link>.",
                        description: "Legal notice shown below feedback details",
                        values: {
                            link: r
                        }
                    })
                }), t[1] = e) : e = t[1], e
            }
        })
    }),
    nIGo: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("DNYL"),
            l = a("zd8w"),
            s = a("Wf1j"),
            r = a("oyxz"),
            d = a("Qgfj"),
            c = a("ygO2"),
            u = a("bqtn"),
            f = a("bf6R"),
            p = a("UxN3"),
            m = a("pZQ9");

        function g(e) {
            let t, a, l, r, d, p = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: h
                } = e,
                x = void 0 !== g && g,
                y = (0, s.a)();
            p[0] !== y ? (t = y.formatMessage(b.imageMenu), p[0] = y, p[1] = t) : t = p[1];
            let v = t;
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.Zc, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== h ? (l = (0, o.jsx)(c.a, {
                ref: h,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), p[3] = x, p[4] = v, p[5] = h, p[6] = l) : l = p[6], p[7] !== v || p[8] !== l ? (r = (0, o.jsx)(i.a, {
                content: v,
                children: l
            }), p[7] = v, p[8] = l, p[9] = r) : r = p[9], p[10] !== m || p[11] !== x || p[12] !== r ? (d = (0, o.jsx)(u.a, {
                disabled: x,
                align: "end",
                side: "bottom",
                triggerButton: r,
                children: m
            }), p[10] = m, p[11] = x, p[12] = r, p[13] = d) : d = p[13], d
        }
        let b = (0, d.f)({
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
        a.d(t, {}, {
            a: g,
            b: function(e) {
                let t, a, d, h, x, y, v, k, w, j, _, C, S, M, T, F, R = (0, n.c)(97),
                    {
                        disabled: I,
                        hideUnselectedRating: O,
                        isAnimated: N,
                        menuItems: P,
                        rating: D,
                        onRate: B,
                        shouldRestoreFocus: A,
                        variant: L
                    } = e,
                    E = void 0 !== I && I,
                    z = void 0 !== O && O,
                    U = void 0 !== N && N,
                    q = void 0 === L ? "response" : L,
                    W = (0, s.a)(),
                    G = (0, l.useRef)(null),
                    V = (0, l.useRef)(null),
                    Q = (0, l.useRef)(!1);
                R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    Q.current && ((V.current ?? G.current)?.focus(), Q.current = !1)
                }, R[0] = t) : t = R[0], R[1] !== D ? (a = [D], R[1] = D, R[2] = a) : a = R[2], (0, l.useLayoutEffect)(t, a), R[3] !== B || R[4] !== D || R[5] !== A ? (d = e => {
                    Q.current = A?.(D === e ? null : e) ?? !0, B(e)
                }, R[3] = B, R[4] = D, R[5] = A, R[6] = d) : d = R[6];
                let $ = d;
                if ("imageTurn" === q || "imageOverlay" === q) {
                    let e, t, a, n, l, s = "imageOverlay" === q ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === q ? "mediaOverlay" : "ghost";
                    R[7] !== W || R[8] !== U ? (e = U ? W.formatMessage(b.likeGif) : W.formatMessage(b.likeImage), R[7] = W, R[8] = U, R[9] = e) : e = R[9];
                    let d = e;
                    R[10] !== W || R[11] !== U ? (t = U ? W.formatMessage(b.dislikeGif) : W.formatMessage(b.dislikeImage), R[10] = W, R[11] = U, R[12] = t) : t = R[12];
                    let u = t;
                    return R[13] !== E || R[14] !== d || R[15] !== $ || R[16] !== D || R[17] !== s || R[18] !== r || R[19] !== q ? (a = "thumbsDown" !== D ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(c.a, {
                            ref: G,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === D,
                            color: "thumbsUp" === D ? s : r,
                            disabled: E || "thumbsUp" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), $("thumbsUp")
                            },
                            children: "thumbsUp" === D ? (0, o.jsx)(f.Ri, {}) : (0, o.jsx)(f.Pi, {})
                        })
                    }) : null, R[13] = E, R[14] = d, R[15] = $, R[16] = D, R[17] = s, R[18] = r, R[19] = q, R[20] = a) : a = R[20], R[21] !== E || R[22] !== u || R[23] !== $ || R[24] !== D || R[25] !== s || R[26] !== r || R[27] !== q ? (n = "thumbsUp" !== D ? (0, o.jsx)(i.a, {
                        content: u,
                        children: (0, o.jsx)(c.a, {
                            ref: G,
                            "aria-label": u,
                            "aria-pressed": "thumbsDown" === D,
                            color: "thumbsDown" === D ? s : r,
                            disabled: E || "thumbsDown" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), $("thumbsDown")
                            },
                            children: "thumbsDown" === D ? (0, o.jsx)(f.Ni, {}) : (0, o.jsx)(f.Li, {})
                        })
                    }) : null, R[21] = E, R[22] = u, R[23] = $, R[24] = D, R[25] = s, R[26] = r, R[27] = q, R[28] = n) : n = R[28], R[29] !== a || R[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), R[29] = a, R[30] = n, R[31] = l) : l = R[31], l
                }
                if ("imageViewerMenu" === q || "imageViewerSubmenu" === q) {
                    let e, t, a, n;
                    R[32] !== z || R[33] !== U || R[34] !== $ || R[35] !== D ? (e = z && "thumbsDown" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsUp" === D ? (0, o.jsx)(f.Ri, {}) : (0, o.jsx)(f.Pi, {}),
                        onSelect: () => $("thumbsUp"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.likeImage
                        })
                    }), R[32] = z, R[33] = U, R[34] = $, R[35] = D, R[36] = e) : e = R[36], R[37] !== z || R[38] !== U || R[39] !== $ || R[40] !== D ? (t = z && "thumbsUp" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsDown" === D ? (0, o.jsx)(f.Ni, {}) : (0, o.jsx)(f.Li, {}),
                        onSelect: () => $("thumbsDown"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.dislikeImage
                        })
                    }), R[37] = z, R[38] = U, R[39] = $, R[40] = D, R[41] = t) : t = R[41], R[42] !== e || R[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), R[42] = e, R[43] = t, R[44] = a) : a = R[44];
                    let i = a;
                    if ("imageViewerSubmenu" === q) {
                        let e, t, a;
                        return R[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...b.imageFeedback
                        }), R[45] = e) : e = R[45], R[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                            icon: {
                                16: f.Si,
                                20: f.Ti
                            }
                        }), R[46] = t) : t = R[46], R[47] !== E || R[48] !== i ? (a = (0, o.jsx)(m.q, {
                            ref: V,
                            disabled: E,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), R[47] = E, R[48] = i, R[49] = a) : a = R[49], a
                    }
                    return R[50] !== E || R[51] !== i || R[52] !== P ? (n = (0, o.jsxs)(g, {
                        triggerRef: G,
                        disabled: E,
                        children: [P, i]
                    }), R[50] = E, R[51] = i, R[52] = P, R[53] = n) : n = R[53], n
                }
                if (null != D) {
                    let e, t, a, n, l, s, r = "thumbsUp" === D;
                    R[54] !== r ? (e = r ? {
                        16: f.Qi,
                        20: f.Ri
                    } : {
                        16: f.Mi,
                        20: f.Ni
                    }, R[54] = r, R[55] = e) : e = R[55];
                    let d = e;
                    R[56] !== W || R[57] !== r ? (t = W.formatMessage(r ? b.removeGoodResponse : b.removeBadResponse), R[56] = W, R[57] = r, R[58] = t) : t = R[58];
                    let u = t;
                    return R[59] !== $ || R[60] !== D ? (a = () => $(D), R[59] = $, R[60] = D, R[61] = a) : a = R[61], R[62] !== d ? (n = (0, o.jsx)(p.b, {
                        icon: d
                    }), R[62] = d, R[63] = n) : n = R[63], R[64] !== E || R[65] !== u || R[66] !== a || R[67] !== n ? (l = (0, o.jsx)(c.a, {
                        ref: G,
                        type: "button",
                        "aria-label": u,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: E,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), R[64] = E, R[65] = u, R[66] = a, R[67] = n, R[68] = l) : l = R[68], R[69] !== u || R[70] !== l ? (s = (0, o.jsx)(i.a, {
                        content: u,
                        children: l
                    }), R[69] = u, R[70] = l, R[71] = s) : s = R[71], s
                }
                R[72] !== W ? (h = W.formatMessage(b.feedback), R[72] = W, R[73] = h) : h = R[73];
                let K = h;
                return R[74] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Si,
                        20: f.Ti
                    }
                }), R[74] = x) : x = R[74], R[75] !== K ? (y = (0, o.jsx)(c.a, {
                    ref: G,
                    "aria-label": K,
                    color: "ghost",
                    size: "icon",
                    children: x
                }), R[75] = K, R[76] = y) : y = R[76], R[77] !== K || R[78] !== y ? (v = (0, o.jsx)(i.a, {
                    content: K,
                    children: y
                }), R[77] = K, R[78] = y, R[79] = v) : v = R[79], R[80] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Oi,
                        20: f.Pi
                    }
                }), R[80] = k) : k = R[80], R[81] !== $ ? (w = () => $("thumbsUp"), R[81] = $, R[82] = w) : w = R[82], R[83] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)(r.a, {
                    ...b.goodResponse
                }), R[83] = j) : j = R[83], R[84] !== w ? (_ = (0, o.jsx)(u.c.Item, {
                    leftIcon: k,
                    onSelect: w,
                    children: j
                }), R[84] = w, R[85] = _) : _ = R[85], R[86] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ki,
                        20: f.Li
                    }
                }), R[86] = C) : C = R[86], R[87] !== $ ? (S = () => $("thumbsDown"), R[87] = $, R[88] = S) : S = R[88], R[89] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(r.a, {
                    ...b.badResponse
                }), R[89] = M) : M = R[89], R[90] !== S ? (T = (0, o.jsx)(u.c.Item, {
                    leftIcon: C,
                    onSelect: S,
                    children: M
                }), R[90] = S, R[91] = T) : T = R[91], R[92] !== E || R[93] !== v || R[94] !== _ || R[95] !== T ? (F = (0, o.jsxs)(u.a, {
                    disabled: E,
                    side: "top",
                    triggerButton: v,
                    children: [_, T]
                }), R[92] = E, R[93] = v, R[94] = _, R[95] = T, R[96] = F) : F = R[96], F
            }
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

        function c(e) {
            if (!/^https:\/\//i.test(e)) return;
            let t = document.createElement("a");
            t.href = e, t.target = "_blank", t.rel = "noopener noreferrer", t.click()
        }
        a.d(t, {}, {
            CodexThreadReportDialog: function(e) {
                let t, a, i, u, f, p, m = (0, n.c)(37),
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
                    R = w ?? k;
                m[0] !== y || m[1] !== g || m[2] !== b ? (t = null == g ? void 0 : () => {
                    null == y && b(), g()
                }, m[0] = y, m[1] = g, m[2] = b, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== R ? (a = y?.queryKey ?? ["codex-thread-report-reasons", R], m[4] = y?.queryKey, m[5] = R, m[6] = a) : a = m[6], m[7] !== y || m[8] !== R || m[9] !== x ? (i = null == y ? () => (async function(e, t) {
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
                })(R, x) : e => {
                    let {
                        signal: t
                    } = e;
                    return y.loadReasons(t)
                }, m[7] = y, m[8] = R, m[9] = x, m[10] = i) : i = m[10];
                let I = null != y ? 0 : void 0,
                    O = null != y,
                    N = null != y,
                    P = null != y ? "chatgpt" : void 0;
                m[11] !== y || m[12] !== v || m[13] !== j || m[14] !== k || m[15] !== F || m[16] !== x ? (u = e => {
                    let {
                        reason: t,
                        details: a,
                        additionalFields: o
                    } = e;
                    return null != y ? y.submit({
                        id: t.id,
                        details: a || void 0
                    }, o) : async function(e, t, a, o) {
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
                    }({
                        details: a,
                        entityType: k,
                        reasonId: t.id,
                        threadId: F
                    }, x, v, j)
                }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = F, m[16] = x, m[17] = u) : u = m[17];
                let D = null == x ? void 0 : c;
                return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: k,
                    title: S
                }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = f) : f = m[21], m[22] !== T || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== I || m[31] !== O || m[32] !== N || m[33] !== P || m[34] !== u || m[35] !== D ? (p = (0, o.jsx)(s.ReportDialog, {
                    onBack: t,
                    onClose: b,
                    onCloseAutoFocus: h,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: I,
                    includeServerFields: O,
                    preventCloseWhileSubmitting: N,
                    dialogVariant: P,
                    contentClassName: T,
                    submitReport: u,
                    openExternalForm: D,
                    successBody: _,
                    title: f
                }), m[22] = T, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = I, m[31] = O, m[32] = N, m[33] = P, m[34] = u, m[35] = D, m[36] = p) : p = m[36], p
            }
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            l = a("Yc0o"),
            s = a("U8sx"),
            r = a("xpW6");
        a.d(t, {}, {
            openEditablePlanTabWithEditor: function(e, t, a) {
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
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("xnQm"), a("tl5a");
        var o = a("ZU27");
        a("GaA7"), a("sbaW"), a("ndjw");
        var n = a("bCmT");
        a("odlM"), a("VtLY");
        var i = a("Yc0o");
        a("WFY2"), a("bnxy"), a("cbrt");
        var l = a("U8sx");
        a("bRIv");
        let s = (0, n.b)({
            open: r
        });

        function r(e, t) {
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
            editablePlanContentByKey$: () => l.c
        }, {
            openPlanSidePanel: function(e, t) {
                r(e, t)
            },
            openReadOnlyPlanSidePanel: r
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
            i = a("DNYL"),
            l = a("on57"),
            s = a("IPUh"),
            r = a("iTtm"),
            d = a("zd8w"),
            c = a("Wf1j"),
            u = a("oyxz");
        a("ZU27"), a("gbrq");
        var f = a("ygO2"),
            p = a("uuN8"),
            m = a("HOLv"),
            g = a("POXM"),
            b = a("YBOx"),
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
            x = a("gC53"),
            y = a("yOpW"),
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
                return a[0] !== e ? (t = (0, o.jsx)(R, {
                    ...e
                }), a[0] = e, a[1] = t) : t = a[1], t
            }
            return a[2] !== e ? (t = (0, o.jsxs)(o.Fragment, {
                children: [null, (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(R, {
                        ...e
                    })
                })]
            }), a[2] = e, a[3] = t) : t = a[3], t
        }

        function R(e) {
            let t, a, F, R, O, N, P, D, B, A, L, E, z, U, q, W, G, V, Q, $, K, H, Y, J, Z, X, ee, et, ea, eo = (0, n.c)(106),
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
                [ek, ew] = (0, d.useState)(void 0 !== er && er),
                ej = (0, r.z)(w.threadHostId$),
                e_ = (0, c.a)(),
                eC = (0, r.z)(k.c),
                eS = (0, r.z)(g.a);
            (void 0 === eu || eu) && en.completed, eo[0] !== en.completed || eo[1] !== en.content ? (t = en.completed && en.content.trim().length > 0, eo[0] = en.completed, eo[1] = en.content, eo[2] = t) : t = eo[2];
            let eM = t;
            eo[3] !== en.completed || eo[4] !== en.content ? (a = en.completed && en.content.trim().length > 0, eo[3] = en.completed, eo[4] = en.content, eo[5] = a) : a = eo[5];
            let eT = eM && !0,
                eF = a && !0,
                eR = eS && null != ef && null != eC.submitCodexAnalyticsEvent && !0;
            eo[6] !== e_ ? (F = e_.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), eo[6] = e_, eo[7] = F) : F = eo[7];
            let eI = F;
            eo[8] !== e_ ? (R = e_.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel",
                description: "Tooltip text for button that opens the plan in the side panel"
            }), eo[8] = e_, eo[9] = R) : R = eo[9];
            let eO = R;
            eo[10] !== e_ ? (O = e_.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel",
                description: "Accessible label for the collapsed plan card that closes the plan side panel"
            }), eo[10] = e_, eo[11] = O) : O = eo[11];
            let eN = O;
            eo[12] !== e_ || eo[13] !== ek ? (N = ek ? e_.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary",
                description: "Aria label for button that expands a collapsed plan summary"
            }) : e_.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary",
                description: "Aria label for button that collapses the plan summary content"
            }), eo[12] = e_, eo[13] = ek, eo[14] = N) : N = eo[14];
            let eP = N;
            eo[15] !== en.content ? (P = () => {
                let e = new Blob([en.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, eo[15] = en.content, eo[16] = P) : P = eo[16];
            let eD = P;
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
            }) : null, eo[22] = ey, eo[23] = ev, eo[24] = eg, eo[25] = B) : B = eo[25], eo[26] !== eN || eo[27] !== ev || eo[28] !== eg ? (A = ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eN,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: eg,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(h, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, eo[26] = eN, eo[27] = ev, eo[28] = eg, eo[29] = A) : A = eo[29];
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
            eo[42] !== eI || eo[43] !== eD || eo[44] !== eF ? (W = eF ? (0, o.jsx)(i.a, {
                content: eI,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eI,
                    onClick: eD,
                    children: (0, o.jsx)(x.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[42] = eI, eo[43] = eD, eo[44] = eF, eo[45] = W) : W = eo[45], eo[46] !== eB || eo[47] !== eT ? (G = eT ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eB
            }) : null, eo[46] = eB, eo[47] = eT, eo[48] = G) : G = eo[48], eo[49] !== ei || eo[50] !== eh || eo[51] !== ex || eo[52] !== eR || eo[53] !== ef ? (V = eR ? (0, o.jsx)(M.a, {
                hasArtifacts: eh,
                reportEntityType: ex,
                threadId: ei,
                turnId: ef
            }) : null, eo[49] = ei, eo[50] = eh, eo[51] = ex, eo[52] = eR, eo[53] = ef, eo[54] = V) : V = eo[54], eo[55] !== eg || eo[56] !== eO ? (Q = null != eg ? (0, o.jsx)(i.a, {
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
            }) : null, eo[55] = eg, eo[56] = eO, eo[57] = Q) : Q = eo[57], eo[58] !== eP || eo[59] !== ek || eo[60] !== ey ? ($ = ey ? null : (0, o.jsx)(i.a, {
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
                    "aria-label": eP,
                    onClick: () => {
                        ew(I)
                    },
                    children: (0, o.jsx)(b.a, {
                        className: (0, l.b)("icon-2xs transition-transform", ek ? "rotate-180" : "rotate-0")
                    })
                })
            }), eo[58] = eP, eo[59] = ek, eo[60] = ey, eo[61] = $) : $ = eo[61], eo[62] !== ev || eo[63] !== q || null !== eo[64] || eo[65] !== W || eo[66] !== G || eo[67] !== V || eo[68] !== Q || eo[69] !== $ ? (K = (0, o.jsxs)("div", {
                "aria-hidden": ev,
                className: q,
                children: [null, W, G, V, Q, $]
            }), eo[62] = ev, eo[63] = q, eo[64] = null, eo[65] = W, eo[66] = G, eo[67] = V, eo[68] = Q, eo[69] = $, eo[70] = K) : K = eo[70], eo[71] !== A || eo[72] !== U || eo[73] !== K ? (H = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [A, U, K]
            }), eo[71] = A, eo[72] = U, eo[73] = K, eo[74] = H) : H = eo[74], eo[75] !== ei ? (Y = {
                [C.a]: ei
            }, eo[75] = ei, eo[76] = Y) : Y = eo[76];
            let ez = ev || void 0,
                eU = ey && !ev && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            eo[77] !== eU ? (J = (0, l.b)("relative overflow-hidden", eU), eo[77] = eU, eo[78] = J) : J = eo[78];
            let eq = ev || void 0;
            eo[79] !== ek || eo[80] !== ey || eo[81] !== ev ? (Z = ey ? {
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
            }, eo[79] = ek, eo[80] = ey, eo[81] = ev, eo[82] = Z) : Z = eo[82];
            let eW = !en.completed;
            return eo[83] !== ei || eo[84] !== el || eo[85] !== eb || eo[86] !== ej || eo[87] !== en.content || eo[88] !== eW ? (X = (0, o.jsx)(v.c, {
                markdown: en.content,
                conversationId: ei,
                hostId: ej,
                hideCodeBlocks: eb,
                isStreaming: eW,
                cwd: el
            }), eo[83] = ei, eo[84] = el, eo[85] = eb, eo[86] = ej, eo[87] = en.content, eo[88] = eW, eo[89] = X) : X = eo[89], eo[90] !== ek || eo[91] !== ey ? (ee = !ey && ek ? (0, o.jsxs)(o.Fragment, {
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
            }) : null, eo[90] = ek, eo[91] = ey, eo[92] = ee) : ee = eo[92], eo[93] !== Y || eo[94] !== ez || eo[95] !== J || eo[96] !== eq || eo[97] !== Z || eo[98] !== X || eo[99] !== ee ? (et = (0, o.jsxs)(s.a.div, {
                ...Y,
                "aria-hidden": ez,
                className: J,
                inert: eq,
                initial: !1,
                animate: Z,
                transition: j.a,
                children: [X, ee]
            }), eo[93] = Y, eo[94] = ez, eo[95] = J, eo[96] = eq, eo[97] = Z, eo[98] = X, eo[99] = ee, eo[100] = et) : et = eo[100], eo[101] !== eA || eo[102] !== B || eo[103] !== H || eo[104] !== et ? (ea = (0, o.jsxs)(v.b, {
                className: eA,
                children: [B, H, et]
            }), eo[101] = eA, eo[102] = B, eo[103] = H, eo[104] = et, eo[105] = ea) : ea = eo[105], ea
        }

        function I(e) {
            return !e
        }
    }),
    UUD2: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("iTtm"),
            l = a("zd8w"),
            s = a("Qgfj"),
            r = a("tl5a"),
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
            return null == e
        }

        function j(e) {
            return e.id !== h
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, n.c)(15),
                    {
                        hasArtifacts: s,
                        reportEntityType: y,
                        renderControl: _,
                        threadId: C,
                        turnId: S
                    } = e,
                    M = void 0 !== s && s,
                    T = void 0 === y ? "thread" : y,
                    F = (0, i.y)(m.a),
                    [R, I] = (0, l.useState)(null),
                    O = (0, i.z)(p.c),
                    N = (0, g.h)("584954669");
                if (a[0] !== M || a[1] !== O || a[2] !== _ || a[3] !== T || a[4] !== N || a[5] !== F || a[6] !== R || a[7] !== C || a[8] !== S) {
                    let e, n = (e, t, a) => {
                            let n = M ? v[e] : k[e],
                                l = N ? n : n.filter(j);
                            (0, d.f)(F, c.a, {
                                belowFreeformContent: (0, o.jsx)(u.a, {}),
                                closeOnSubmit: "immediate",
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
                        if (I(e), null == e) return;
                        let t = F.get(r.yb, C);
                        O.submitCodexAnalyticsEvent?.({
                            eventKind: "turn_rating",
                            threadId: C,
                            turnId: S,
                            sessionId: t === C && null != F.get(r.Jb, C) ? null : t,
                            rating: e
                        })
                    }, a[10] = O, a[11] = F, a[12] = C, a[13] = S, a[14] = e) : e = a[14];
                    let l = e,
                        s = {
                            rating: null == R ? null : x[R],
                            onRate: e => {
                                let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                    a = R === t ? null : t;
                                l(a), null != a && n(a)
                            },
                            shouldRestoreFocus: w
                        };
                    t = null != _ ? _(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                        ...s
                    }), a[0] = M, a[1] = O, a[2] = _, a[3] = T, a[4] = N, a[5] = F, a[6] = R, a[7] = C, a[8] = S, a[9] = t
                } else t = a[9];
                return t
            }
        })
    }),
    HWQc: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            l = a("zd8w"),
            s = a("oyxz"),
            r = a("UxN3"),
            d = a("YBOx"),
            c = a("tKUf"),
            u = a("cWXs"),
            f = a("N7Ts");

        function p(e) {
            let t, a, c, u, p, b = (0, n.c)(13),
                {
                    entries: h
                } = e,
                [x, y] = (0, l.useState)(!1),
                v = h.length > 8;
            b[0] !== h || b[1] !== x || b[2] !== v ? (t = v && !x ? h.slice(0, 8) : h, b[0] = h, b[1] = x, b[2] = v, b[3] = t) : t = b[3];
            let k = t;
            return b[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)("div", {
                className: "mb-2 font-medium text-secondary",
                children: (0, o.jsx)(s.a, {
                    id: "markdown.metadata.title",
                    defaultMessage: "Metadata",
                    description: "Title for rendered Markdown file metadata"
                })
            }), b[4] = a) : a = b[4], b[5] !== k ? (c = (0, o.jsx)(g, {
                entries: k
            }), b[5] = k, b[6] = c) : c = b[6], b[7] !== x || b[8] !== v ? (u = v ? (0, o.jsxs)("button", {
                type: "button",
                "aria-expanded": x,
                className: "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                onClick: () => {
                    y(m)
                },
                children: [(0, o.jsx)("span", {
                    children: x ? (0, o.jsx)(s.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less",
                        description: "Disclosure control shown when a Markdown metadata preview can collapse additional fields"
                    }) : (0, o.jsx)(s.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more",
                        description: "Disclosure control shown when a Markdown metadata preview hides additional fields"
                    })
                }), (0, o.jsx)(r.a, {
                    className: (0, i.b)("transition-transform", x ? "rotate-180" : "rotate-0"),
                    "aria-hidden": !1,
                    asset16: f.a,
                    legacyIcon: d.a,
                    legacyClassName: "icon-2xs"
                })]
            }) : null, b[7] = x, b[8] = v, b[9] = u) : u = b[9], b[10] !== c || b[11] !== u ? (p = (0, o.jsxs)("div", {
                className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
                children: [a, c, u]
            }), b[10] = c, b[11] = u, b[12] = p) : p = b[12], p
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
        a.d(t, {}, {
            a: p,
            b: function(e) {
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
            },
            c: function(e) {
                let t, a, i, l, s = (0, n.c)(15),
                    {
                        enableMetadataPreview: r,
                        markdown: d,
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
                s[0] !== x || s[1] !== d ? (t = x ? (0, c.a)(d) : null, s[0] = x, s[1] = d, s[2] = t) : t = s[2];
                let w = t,
                    j = w?.body ?? d;
                return s[3] !== w ? (a = null != w && w.entries.length > 0 ? (0, o.jsx)(p, {
                    entries: w.entries
                }) : null, s[3] = w, s[4] = a) : a = s[4], s[5] !== y || s[6] !== v || s[7] !== g || s[8] !== b || s[9] !== k || s[10] !== j ? (i = (0, o.jsx)(u.a, {
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
            return e.slice(0, -1)
        }

        function y(e) {
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

        function v(e) {
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

        function k(e) {
            let t, a = (0, n.c)(2),
                {
                    children: i
                } = e;
            return a[0] !== i ? (t = (0, o.jsx)("div", {
                className: "text-sm text-codex-description",
                children: i
            }), a[0] = i, a[1] = t) : t = a[1], t
        }

        function w(e, t) {
            return (!t || !e.has_details && (e.additional_fields?.length ?? 0) === 0) && (e.sub_reasons?.length ?? 0) === 0 && null == e.details_placeholder && null == e.link_attachment && null == e.subtext
        }
        a.d(t, {}, {
            ReportDialog: function(e) {
                let t, a, s, j, _, C, S, M, T, F, R, I, O, N, P, D, B, A, L, E, z, U, q, W, G, V, Q, $, K, H, Y, J = (0, n.c)(119),
                    {
                        onBack: Z,
                        onClose: X,
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
                J[0] !== er ? (t = null == er ? {} : {
                    gcTime: er
                }, J[0] = er, J[1] = t) : t = J[1], J[2] !== ea || J[3] !== et || J[4] !== em || J[5] !== t ? (a = {
                    queryKey: et,
                    queryFn: ea,
                    ...t,
                    staleTime: em
                }, J[2] = ea, J[3] = et, J[4] = em, J[5] = t, J[6] = a) : a = J[6];
                let {
                    data: ex,
                    isPending: ey,
                    isError: ev
                } = (0, i.a)(a);
                J[7] !== eo ? (s = {
                    mutationFn: eo
                }, J[7] = eo, J[8] = s) : s = J[8];
                let ek = (0, l.a)(s),
                    [ew, ej] = (0, r.useState)("");
                J[9] === Symbol.for("react.memo_cache_sentinel") ? (j = {}, J[9] = j) : j = J[9];
                let [e_, eC] = (0, r.useState)(j), [eS, eM] = (0, r.useState)(null);
                J[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], J[10] = _) : _ = J[10];
                let [eT, eF] = (0, r.useState)(_), eR = 0 === eT.length ? null : eT[eT.length - 1];
                J[11] !== eR || J[12] !== eg || J[13] !== ex?.reasons || J[14] !== eS ? (F = (I = (null == eR ? ex?.reasons : eR.sub_reasons) ?? []).find(e => e.id === eS) ?? null, S = (C = eR?.details_placeholder != null || eg && eR?.has_details === !0) || eg && (eR?.additional_fields?.length ?? 0) > 0, T = eR?.link_attachment != null, M = eR?.subtext != null && 0 === I.length && !S && !T, R = S || null != F && w(F, eg), J[11] = eR, J[12] = eg, J[13] = ex?.reasons, J[14] = eS, J[15] = C, J[16] = S, J[17] = M, J[18] = T, J[19] = F, J[20] = R, J[21] = I) : (C = J[15], S = J[16], M = J[17], T = J[18], F = J[19], R = J[20], I = J[21]);
                let eI = R,
                    eO = null == F || ey || ek.isPending,
                    eN = ek.isSuccess || ev,
                    eP = !eN && (eI && null == eo || !eI && !T && eO);
                J[22] !== X || J[23] !== eb || J[24] !== ek.isPending ? (O = e => {
                    e || eb && ek.isPending || X()
                }, J[22] = X, J[23] = eb, J[24] = ek.isPending, J[25] = O) : O = J[25];
                let eD = O;
                J[26] !== eR || J[27] !== Z || J[28] !== eT ? (N = () => {
                    if (null == eR) return void Z?.();
                    let e = eT[eT.length - 1];
                    eF(x), eM(e?.id ?? null), ej(""), eC({})
                }, J[26] = eR, J[27] = Z, J[28] = eT, J[29] = N) : N = J[29];
                let eB = N;
                J[30] !== eR || J[31] !== e_ || J[32] !== ew || J[33] !== eg || J[34] !== S || J[35] !== M || J[36] !== T || J[37] !== X || J[38] !== ei || J[39] !== ek || J[40] !== F || J[41] !== eT || J[42] !== eN || J[43] !== eo ? (P = e => {
                    if (e.preventDefault(), !ek.isPending && (!eg || e.currentTarget.reportValidity())) {
                        if (eN) return void X();
                        if (!M) {
                            if (T && eR?.link_attachment != null) return null != ei ? void ei(eR.link_attachment) : void(0, g.f)({
                                href: eR.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (S && null != eR) {
                                if (null == eo) return;
                                ek.mutate({
                                    details: ew.trim(),
                                    reason: eR,
                                    path: eT,
                                    ...eg ? {
                                        additionalFields: e_
                                    } : {}
                                });
                                return
                            }
                            if (null != F) {
                                if (w(F, eg)) {
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
                }, J[30] = eR, J[31] = e_, J[32] = ew, J[33] = eg, J[34] = S, J[35] = M, J[36] = T, J[37] = X, J[38] = ei, J[39] = ek, J[40] = F, J[41] = eT, J[42] = eN, J[43] = eo, J[44] = P) : P = J[44];
                let eA = P;
                J[45] !== eR || J[46] !== ei ? (D = e => {
                    if (eR?.link_attachment != null) {
                        if (null != ei) return void ei(eR.link_attachment);
                        (0, g.e)({
                            event: e,
                            href: eR.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, J[45] = eR, J[46] = ei, J[47] = D) : D = J[47];
                let eL = D;
                J[48] !== eR || J[49] !== ex || J[50] !== ek.isSuccess ? (B = function(e) {
                    let {
                        activeReason: t,
                        isSuccess: a,
                        reportReasons: o
                    } = e;
                    return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
                }({
                    activeReason: eR,
                    reportReasons: ex,
                    isSuccess: ek.isSuccess
                }), J[48] = eR, J[49] = ex, J[50] = ek.isSuccess, J[51] = B) : B = J[51];
                let eE = B;
                return J[52] !== ee ? (A = {
                    onCloseAutoFocus: ee
                }, J[52] = ee, J[53] = A) : A = J[53], J[54] !== ek.isSuccess || J[55] !== es ? (L = ek.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report",
                    description: "Title shown after a safety or legal report is submitted"
                }) : es, J[54] = ek.isSuccess, J[55] = es, J[56] = L) : L = J[56], J[57] !== L ? (E = (0, o.jsx)(p.e, {
                    children: L
                }), J[57] = L, J[58] = E) : E = J[58], J[59] !== eE ? (z = null != eE ? (0, o.jsx)(p.d, {
                    children: eE
                }) : void 0, J[59] = eE, J[60] = z) : z = J[60], J[61] !== E || J[62] !== z ? (U = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: E,
                        subtitle: z,
                        titleSize: "dialog"
                    })
                }), J[61] = E, J[62] = z, J[63] = U) : U = J[63], J[64] !== eR || J[65] !== e_ || J[66] !== ew || J[67] !== C || J[68] !== eg || J[69] !== eh || J[70] !== S || J[71] !== M || J[72] !== T || J[73] !== ey || J[74] !== ev || J[75] !== ek.isSuccess || J[76] !== eS || J[77] !== el || J[78] !== I ? (q = ek.isSuccess ? (0, o.jsx)(k, {
                    children: el ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.successBody",
                        defaultMessage: "Our team will review the content to determine if it violates our policies",
                        description: "Body shown after a Codex thread safety or legal report is submitted"
                    })
                }) : ey ? (0, o.jsx)(k, {
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
                }) : S && null != eR ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eg && null != eR.explanation ? (0, o.jsx)(k, {
                        children: eR.explanation
                    }) : null, C ? (0, o.jsx)(b.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: eR.details_placeholder ?? void 0,
                        "aria-label": eh.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details",
                            description: "Accessible label for Codex thread report details field"
                        }),
                        value: ew,
                        onChange: e => {
                            ej(e.target.value)
                        }
                    }) : null, null != eR.subtext ? (0, o.jsx)(k, {
                        children: eR.subtext
                    }) : null, eg ? eR.additional_fields?.map(e => {
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
                }) : T ? (0, o.jsx)(k, {
                    children: (eg ? eR?.link_explanation ?? eR?.explanation : eR?.link_explanation ?? eR?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report",
                        description: "Body shown when a Codex thread report reason needs an external form"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [M ? (0, o.jsx)(k, {
                        children: eR?.subtext
                    }) : null, M ? null : (0, o.jsx)(v, {
                        reasons: I,
                        selectedReasonId: eS,
                        setSelectedReasonId: eM
                    })]
                }), J[64] = eR, J[65] = e_, J[66] = ew, J[67] = C, J[68] = eg, J[69] = eh, J[70] = S, J[71] = M, J[72] = T, J[73] = ey, J[74] = ev, J[75] = ek.isSuccess, J[76] = eS, J[77] = el, J[78] = I, J[79] = q) : q = J[79], J[80] !== ek.isError ? (W = ek.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again",
                        description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                    })
                }) : null, J[80] = ek.isError, J[81] = W) : W = J[81], J[82] !== ey || J[83] !== ev || J[84] !== en || J[85] !== eo ? (G = null != eo || ey || ev ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), J[82] = ey, J[83] = ev, J[84] = en, J[85] = eo, J[86] = G) : G = J[86], J[87] !== q || J[88] !== W || J[89] !== G ? (V = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [q, W, G]
                }), J[87] = q, J[88] = W, J[89] = G, J[90] = V) : V = J[90], J[91] !== eR || J[92] !== eB || J[93] !== Z || J[94] !== ek.isPending || J[95] !== ek.isSuccess ? (Q = null == eR && null == Z || ek.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ek.isPending,
                    type: "button",
                    onClick: eB,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back",
                        description: "Back button for Codex thread report reason selection"
                    })
                }), J[91] = eR, J[92] = eB, J[93] = Z, J[94] = ek.isPending, J[95] = ek.isSuccess, J[96] = Q) : Q = J[96], J[97] !== eL || J[98] !== M || J[99] !== T || J[100] !== eP || J[101] !== eI || J[102] !== ek.isPending || J[103] !== eN ? ($ = !M || eN ? (0, o.jsx)(f.a, {
                    color: "primary",
                    disabled: eP,
                    loading: ek.isPending,
                    type: T ? "button" : "submit",
                    onClick: T ? eL : void 0,
                    children: (0, o.jsx)(y, {
                        close: eN,
                        isLinkStep: T,
                        isSubmitStep: eI
                    })
                }) : null, J[97] = eL, J[98] = M, J[99] = T, J[100] = eP, J[101] = eI, J[102] = ek.isPending, J[103] = eN, J[104] = $) : $ = J[104], J[105] !== Q || J[106] !== $ ? (K = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [Q, $]
                    })
                }), J[105] = Q, J[106] = $, J[107] = K) : K = J[107], J[108] !== eA || J[109] !== U || J[110] !== V || J[111] !== K ? (H = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eA,
                    children: [U, V, K]
                }), J[108] = eA, J[109] = U, J[110] = V, J[111] = K, J[112] = H) : H = J[112], J[113] !== ep || J[114] !== ef || J[115] !== eD || J[116] !== A || J[117] !== H ? (Y = (0, o.jsx)(p.b, {
                    open: !0,
                    onOpenChange: eD,
                    contentProps: A,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: H
                }), J[113] = ep, J[114] = ef, J[115] = eD, J[116] = A, J[117] = H, J[118] = Y) : Y = J[118], Y
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("iTtm"),
            n = a("xnQm"),
            i = a("tl5a"),
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
                        hostId: n.Vb,
                        ...e
                    };
                if (o?.hostId === n.Vb) return {
                    environmentId: o.environmentId,
                    threadId: t ?? void 0,
                    executorAccess: a(u.threadFileRequestContext$, {
                        conversationId: t,
                        environmentId: o.environmentId
                    }).executorAccess,
                    requestClient: a(i.c, n.Vb)
                }
            }
        }, {
            isEqual: (e, t) => e?.environmentId === t?.environmentId && e?.threadId === t?.threadId && e?.executorAccess === t?.executorAccess && e?.requestClient === t?.requestClient
        });
        a.d(t, {}, {
            a: m,
            b: async function(e) {
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
                    if (m && await (0, n.pg)(u.subarray(0, n.$b)) !== "text") throw Error("File is not text");
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
                    contentSampleByteLimit: m ? n.$b : void 0,
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
            },
            c: async function(e) {
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
        })
    })
};