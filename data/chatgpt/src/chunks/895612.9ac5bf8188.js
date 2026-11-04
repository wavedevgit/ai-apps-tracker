export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    gTcE: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("XSQh"),
            l = a("XtXA"),
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
                let t, a, h, x, y, v, k, w, j, _, S, C, M, F, T, R, I, O, N, P, D, B, A, E, L, z, U, q, V, W, G, Q, K = (0, n.c)(101),
                    {
                        belowFreeformContent: $,
                        closeOnSubmit: X,
                        freeformFeedbackRequired: H,
                        hideFreeformInput: J,
                        initialDetails: Y,
                        initialSelectedOptionId: Z,
                        onClose: ee,
                        onOptionSelect: et,
                        onSubmit: ea,
                        onSave: eo,
                        saveActionLabel: en,
                        options: ei,
                        size: el,
                        submitDisabled: es
                    } = e,
                    er = void 0 === X ? "after-submit" : X,
                    ed = void 0 !== J && J,
                    ec = void 0 === el ? "wide" : el,
                    eu = void 0 !== es && es,
                    ef = (0, d.a)(),
                    [ep, em] = (0, r.useState)(void 0 === Y ? "" : Y),
                    [eg, eb] = (0, r.useState)(null),
                    [eh, ex] = (0, r.useState)(Z ?? null);
                if (K[0] !== er || K[1] !== ep || K[2] !== H || K[3] !== ef || K[4] !== ee || K[5] !== et || K[6] !== eo || K[7] !== ea || K[8] !== ei || K[9] !== eg || K[10] !== en || K[11] !== eh || K[12] !== ec || K[13] !== eu) {
                    let e, n, r, d, u, g, b = ep.trim();
                    K[37] !== H || K[38] !== ef ? (e = H ? ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.required",
                        defaultMessage: "Share details (required)",
                        description: "Placeholder for a required freeform feedback details field"
                    }) : ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.optional",
                        defaultMessage: "Share details (optional)",
                        description: "Placeholder for an optional freeform feedback details field"
                    }), K[37] = H, K[38] = ef, K[39] = e) : e = K[39], y = e, K[40] !== ef ? (n = ef.formatMessage({
                        id: "feedbackFormDialog.optionsLabel",
                        defaultMessage: "Feedback options",
                        description: "Accessible label for feedback options"
                    }), K[40] = ef, K[41] = n) : n = K[41];
                    let E = n;
                    k = null == eh || H && 0 === b.length, K[42] !== ee || K[43] !== eg ? (r = e => {
                        e || null != eg || ee()
                    }, K[42] = ee, K[43] = eg, K[44] = r) : r = K[44];
                    let L = r;
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
                    }, K[45] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(c.a, {
                        id: "feedbackFormDialog.submit",
                        defaultMessage: "Submit",
                        description: "Label for the button that submits feedback"
                    }), K[45] = d) : d = K[45], _ = d, K[46] !== en ? (u = en ?? (0, o.jsx)(c.a, {
                        id: "feedbackFormDialog.saveLocally",
                        defaultMessage: "Save locally…",
                        description: "Button that saves the selected feedback and diagnostics to a local ZIP file without sending them"
                    }), K[46] = en, K[47] = u) : u = K[47], j = u, K[48] !== eo || K[49] !== en || K[50] !== j ? (g = null != eo && null != en ? [j, _] : null, K[48] = eo, K[49] = en, K[50] = j, K[51] = g) : g = K[51], w = g, x = f.a, I = !0, O = L, N = ec, h = p.b, C = "form", M = "gap-2", F = "viewport", T = e => {
                        e.preventDefault(), v(ea)
                    }, K[52] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, o.jsx)(p.e, {
                        children: (0, o.jsx)(p.d, {
                            title: (0, o.jsx)(f.d, {
                                children: (0, o.jsx)(c.a, {
                                    id: "feedbackFormDialog.title",
                                    defaultMessage: "Share feedback",
                                    description: "Title for feedback dialog"
                                })
                            }),
                            titleSize: "dialog"
                        })
                    }), K[52] = R) : R = K[52], a = p.e, t = p.f, S = "gap-3", P = "radiogroup", D = E, B = "flex flex-wrap gap-2", A = ei.map(e => {
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
                    }), K[0] = er, K[1] = ep, K[2] = H, K[3] = ef, K[4] = ee, K[5] = et, K[6] = eo, K[7] = ea, K[8] = ei, K[9] = eg, K[10] = en, K[11] = eh, K[12] = ec, K[13] = eu, K[14] = t, K[15] = a, K[16] = h, K[17] = x, K[18] = y, K[19] = v, K[20] = k, K[21] = w, K[22] = j, K[23] = _, K[24] = S, K[25] = C, K[26] = M, K[27] = F, K[28] = T, K[29] = R, K[30] = I, K[31] = O, K[32] = N, K[33] = P, K[34] = D, K[35] = B, K[36] = A
                } else t = K[14], a = K[15], h = K[16], x = K[17], y = K[18], v = K[19], k = K[20], w = K[21], j = K[22], _ = K[23], S = K[24], C = K[25], M = K[26], F = K[27], T = K[28], R = K[29], I = K[30], O = K[31], N = K[32], P = K[33], D = K[34], B = K[35], A = K[36];
                K[53] !== P || K[54] !== D || K[55] !== B || K[56] !== A ? (E = (0, o.jsx)("div", {
                    role: P,
                    "aria-label": D,
                    className: B,
                    children: A
                }), K[53] = P, K[54] = D, K[55] = B, K[56] = A, K[57] = E) : E = K[57], K[58] !== ep || K[59] !== y || K[60] !== ed ? (L = ed ? null : (0, o.jsx)(g.c, {
                    autoFocus: !0,
                    rows: 5,
                    placeholder: y,
                    "aria-label": y,
                    value: ep,
                    onChange: e => {
                        em(e.target.value)
                    },
                    onKeyDown: b
                }), K[58] = ep, K[59] = y, K[60] = ed, K[61] = L) : L = K[61], K[62] !== t || K[63] !== $ || K[64] !== S || K[65] !== E || K[66] !== L ? (z = (0, o.jsxs)(t, {
                    className: S,
                    children: [E, L, $]
                }), K[62] = t, K[63] = $, K[64] = S, K[65] = E, K[66] = L, K[67] = z) : z = K[67], K[68] !== a || K[69] !== z ? (U = (0, o.jsx)(a, {
                    children: z
                }), K[68] = a, K[69] = z, K[70] = U) : U = K[70], K[71] !== v || K[72] !== k || K[73] !== eo || K[74] !== w || K[75] !== eg || K[76] !== j ? (q = null != eo ? (0, o.jsx)(u.a, {
                    color: "secondary",
                    disabled: k || null != eg,
                    loading: "save" === eg,
                    sizingLabels: w ?? j,
                    type: "button",
                    onClick: () => {
                        v(eo)
                    },
                    children: j
                }) : null, K[71] = v, K[72] = k, K[73] = eo, K[74] = w, K[75] = eg, K[76] = j, K[77] = q) : q = K[77];
                let ey = eu || k || null != eg,
                    ev = "submit" === eg,
                    ek = w ?? _;
                return K[78] !== _ || K[79] !== ey || K[80] !== ev || K[81] !== ek ? (V = (0, o.jsx)(u.a, {
                    color: "primary",
                    disabled: ey,
                    loading: ev,
                    sizingLabels: ek,
                    type: "submit",
                    children: _
                }), K[78] = _, K[79] = ey, K[80] = ev, K[81] = ek, K[82] = V) : V = K[82], K[83] !== q || K[84] !== V ? (W = (0, o.jsx)(p.e, {
                    children: (0, o.jsxs)(p.c, {
                        expandSingleButton: !1,
                        children: [q, V]
                    })
                }), K[83] = q, K[84] = V, K[85] = W) : W = K[85], K[86] !== h || K[87] !== C || K[88] !== M || K[89] !== F || K[90] !== T || K[91] !== R || K[92] !== U || K[93] !== W ? (G = (0, o.jsxs)(h, {
                    as: C,
                    className: M,
                    size: F,
                    onSubmit: T,
                    children: [R, U, W]
                }), K[86] = h, K[87] = C, K[88] = M, K[89] = F, K[90] = T, K[91] = R, K[92] = U, K[93] = W, K[94] = G) : G = K[94], K[95] !== x || K[96] !== I || K[97] !== O || K[98] !== N || K[99] !== G ? (Q = (0, o.jsx)(x, {
                    open: I,
                    onOpenChange: O,
                    size: N,
                    children: G
                }), K[95] = x, K[96] = I, K[97] = O, K[98] = N, K[99] = G, K[100] = Q) : Q = K[100], Q
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
            i = a("slpy"),
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
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.ad, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== h ? (l = (0, o.jsx)(c.a, {
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
                let t, a, d, h, x, y, v, k, w, j, _, S, C, M, F, T, R = (0, n.c)(97),
                    {
                        disabled: I,
                        hideUnselectedRating: O,
                        isAnimated: N,
                        menuItems: P,
                        rating: D,
                        onRate: B,
                        shouldRestoreFocus: A,
                        variant: E
                    } = e,
                    L = void 0 !== I && I,
                    z = void 0 !== O && O,
                    U = void 0 !== N && N,
                    q = void 0 === E ? "response" : E,
                    V = (0, s.a)(),
                    W = (0, l.useRef)(null),
                    G = (0, l.useRef)(null),
                    Q = (0, l.useRef)(!1);
                R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    Q.current && ((G.current ?? W.current)?.focus(), Q.current = !1)
                }, R[0] = t) : t = R[0], R[1] !== D ? (a = [D], R[1] = D, R[2] = a) : a = R[2], (0, l.useLayoutEffect)(t, a), R[3] !== B || R[4] !== D || R[5] !== A ? (d = e => {
                    Q.current = A?.(D === e ? null : e) ?? !0, B(e)
                }, R[3] = B, R[4] = D, R[5] = A, R[6] = d) : d = R[6];
                let K = d;
                if ("imageTurn" === q || "imageOverlay" === q) {
                    let e, t, a, n, l, s = "imageOverlay" === q ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === q ? "mediaOverlay" : "ghost";
                    R[7] !== V || R[8] !== U ? (e = U ? V.formatMessage(b.likeGif) : V.formatMessage(b.likeImage), R[7] = V, R[8] = U, R[9] = e) : e = R[9];
                    let d = e;
                    R[10] !== V || R[11] !== U ? (t = U ? V.formatMessage(b.dislikeGif) : V.formatMessage(b.dislikeImage), R[10] = V, R[11] = U, R[12] = t) : t = R[12];
                    let u = t;
                    return R[13] !== L || R[14] !== d || R[15] !== K || R[16] !== D || R[17] !== s || R[18] !== r || R[19] !== q ? (a = "thumbsDown" !== D ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(c.a, {
                            ref: W,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === D,
                            color: "thumbsUp" === D ? s : r,
                            disabled: L || "thumbsUp" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), K("thumbsUp")
                            },
                            children: "thumbsUp" === D ? (0, o.jsx)(f.Ui, {}) : (0, o.jsx)(f.Si, {})
                        })
                    }) : null, R[13] = L, R[14] = d, R[15] = K, R[16] = D, R[17] = s, R[18] = r, R[19] = q, R[20] = a) : a = R[20], R[21] !== L || R[22] !== u || R[23] !== K || R[24] !== D || R[25] !== s || R[26] !== r || R[27] !== q ? (n = "thumbsUp" !== D ? (0, o.jsx)(i.a, {
                        content: u,
                        children: (0, o.jsx)(c.a, {
                            ref: W,
                            "aria-label": u,
                            "aria-pressed": "thumbsDown" === D,
                            color: "thumbsDown" === D ? s : r,
                            disabled: L || "thumbsDown" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), K("thumbsDown")
                            },
                            children: "thumbsDown" === D ? (0, o.jsx)(f.Qi, {}) : (0, o.jsx)(f.Oi, {})
                        })
                    }) : null, R[21] = L, R[22] = u, R[23] = K, R[24] = D, R[25] = s, R[26] = r, R[27] = q, R[28] = n) : n = R[28], R[29] !== a || R[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), R[29] = a, R[30] = n, R[31] = l) : l = R[31], l
                }
                if ("imageViewerMenu" === q || "imageViewerSubmenu" === q) {
                    let e, t, a, n;
                    R[32] !== z || R[33] !== U || R[34] !== K || R[35] !== D ? (e = z && "thumbsDown" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsUp" === D ? (0, o.jsx)(f.Ui, {}) : (0, o.jsx)(f.Si, {}),
                        onSelect: () => K("thumbsUp"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.likeImage
                        })
                    }), R[32] = z, R[33] = U, R[34] = K, R[35] = D, R[36] = e) : e = R[36], R[37] !== z || R[38] !== U || R[39] !== K || R[40] !== D ? (t = z && "thumbsUp" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsDown" === D ? (0, o.jsx)(f.Qi, {}) : (0, o.jsx)(f.Oi, {}),
                        onSelect: () => K("thumbsDown"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.dislikeImage
                        })
                    }), R[37] = z, R[38] = U, R[39] = K, R[40] = D, R[41] = t) : t = R[41], R[42] !== e || R[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), R[42] = e, R[43] = t, R[44] = a) : a = R[44];
                    let i = a;
                    if ("imageViewerSubmenu" === q) {
                        let e, t, a;
                        return R[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...b.imageFeedback
                        }), R[45] = e) : e = R[45], R[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                            icon: {
                                16: f.Vi,
                                20: f.Wi
                            }
                        }), R[46] = t) : t = R[46], R[47] !== L || R[48] !== i ? (a = (0, o.jsx)(m.q, {
                            ref: G,
                            disabled: L,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), R[47] = L, R[48] = i, R[49] = a) : a = R[49], a
                    }
                    return R[50] !== L || R[51] !== i || R[52] !== P ? (n = (0, o.jsxs)(g, {
                        triggerRef: W,
                        disabled: L,
                        children: [P, i]
                    }), R[50] = L, R[51] = i, R[52] = P, R[53] = n) : n = R[53], n
                }
                if (null != D) {
                    let e, t, a, n, l, s, r = "thumbsUp" === D;
                    R[54] !== r ? (e = r ? {
                        16: f.Ti,
                        20: f.Ui
                    } : {
                        16: f.Pi,
                        20: f.Qi
                    }, R[54] = r, R[55] = e) : e = R[55];
                    let d = e;
                    R[56] !== V || R[57] !== r ? (t = V.formatMessage(r ? b.removeGoodResponse : b.removeBadResponse), R[56] = V, R[57] = r, R[58] = t) : t = R[58];
                    let u = t;
                    return R[59] !== K || R[60] !== D ? (a = () => K(D), R[59] = K, R[60] = D, R[61] = a) : a = R[61], R[62] !== d ? (n = (0, o.jsx)(p.b, {
                        icon: d
                    }), R[62] = d, R[63] = n) : n = R[63], R[64] !== L || R[65] !== u || R[66] !== a || R[67] !== n ? (l = (0, o.jsx)(c.a, {
                        ref: W,
                        type: "button",
                        "aria-label": u,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: L,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), R[64] = L, R[65] = u, R[66] = a, R[67] = n, R[68] = l) : l = R[68], R[69] !== u || R[70] !== l ? (s = (0, o.jsx)(i.a, {
                        content: u,
                        children: l
                    }), R[69] = u, R[70] = l, R[71] = s) : s = R[71], s
                }
                R[72] !== V ? (h = V.formatMessage(b.feedback), R[72] = V, R[73] = h) : h = R[73];
                let $ = h;
                return R[74] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Vi,
                        20: f.Wi
                    }
                }), R[74] = x) : x = R[74], R[75] !== $ ? (y = (0, o.jsx)(c.a, {
                    ref: W,
                    "aria-label": $,
                    color: "ghost",
                    size: "icon",
                    children: x
                }), R[75] = $, R[76] = y) : y = R[76], R[77] !== $ || R[78] !== y ? (v = (0, o.jsx)(i.a, {
                    content: $,
                    children: y
                }), R[77] = $, R[78] = y, R[79] = v) : v = R[79], R[80] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ri,
                        20: f.Si
                    }
                }), R[80] = k) : k = R[80], R[81] !== K ? (w = () => K("thumbsUp"), R[81] = K, R[82] = w) : w = R[82], R[83] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)(r.a, {
                    ...b.goodResponse
                }), R[83] = j) : j = R[83], R[84] !== w ? (_ = (0, o.jsx)(u.c.Item, {
                    leftIcon: k,
                    onSelect: w,
                    children: j
                }), R[84] = w, R[85] = _) : _ = R[85], R[86] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ni,
                        20: f.Oi
                    }
                }), R[86] = S) : S = R[86], R[87] !== K ? (C = () => K("thumbsDown"), R[87] = K, R[88] = C) : C = R[88], R[89] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(r.a, {
                    ...b.badResponse
                }), R[89] = M) : M = R[89], R[90] !== C ? (F = (0, o.jsx)(u.c.Item, {
                    leftIcon: S,
                    onSelect: C,
                    children: M
                }), R[90] = C, R[91] = F) : F = R[91], R[92] !== L || R[93] !== v || R[94] !== _ || R[95] !== F ? (T = (0, o.jsxs)(u.a, {
                    disabled: L,
                    side: "top",
                    triggerButton: v,
                    children: [_, F]
                }), R[92] = L, R[93] = v, R[94] = _, R[95] = F, R[96] = T) : T = R[96], T
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
                        threadId: S,
                        title: C,
                        connectorId: M,
                        contentClassName: F
                    } = e,
                    T = "connector" === k ? M : S,
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
                        additionalHeaders: (0, r.c)()
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
                m[11] !== y || m[12] !== v || m[13] !== j || m[14] !== k || m[15] !== T || m[16] !== x ? (u = e => {
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
                                ...(0, r.c)(),
                                ...null == a ? {} : {
                                    "chatgpt-conv-message-id": a
                                }
                            }
                        })
                    }({
                        details: a,
                        entityType: k,
                        reasonId: t.id,
                        threadId: T
                    }, x, v, j)
                }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = T, m[16] = x, m[17] = u) : u = m[17];
                let D = null == x ? void 0 : c;
                return m[18] !== y?.title || m[19] !== k || m[20] !== C ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: k,
                    title: C
                }), m[18] = y?.title, m[19] = k, m[20] = C, m[21] = f) : f = m[21], m[22] !== F || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== I || m[31] !== O || m[32] !== N || m[33] !== P || m[34] !== u || m[35] !== D ? (p = (0, o.jsx)(s.ReportDialog, {
                    onBack: t,
                    onClose: b,
                    onCloseAutoFocus: h,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: I,
                    includeServerFields: O,
                    preventCloseWhileSubmitting: N,
                    dialogVariant: P,
                    contentClassName: F,
                    submitReport: u,
                    openExternalForm: D,
                    successBody: _,
                    title: f
                }), m[22] = F, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = I, m[31] = O, m[32] = N, m[33] = P, m[34] = u, m[35] = D, m[36] = p) : p = m[36], p
            }
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            l = a("Yc0o"),
            s = a("U8sx"),
            r = a("zu6X");
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
        a.r(t), a("doi1"), a("tl5a");
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
        var o = a("BolX"),
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
            a: () => O
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("slpy"),
            l = a("on57"),
            s = a("IPUh"),
            r = a("BolX"),
            d = a("zd8w"),
            c = a("Wf1j"),
            u = a("oyxz");
        a("ZU27"), a("gbrq");
        var f = a("ygO2"),
            p = a("uuN8"),
            m = a("HOLv"),
            g = a("UxN3"),
            b = a("POXM"),
            h = a("zEpR"),
            x = e => (0, o.jsx)("svg", {
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
            y = a("pncx"),
            v = a("jTJ7"),
            k = a("HWQc"),
            w = a("yGJW");
        a("tSEg");
        var j = a("sbaW"),
            _ = a("V8uZ"),
            S = a("aepO"),
            C = a("gBCz");
        a("Y05g");
        var M = a("umSm"),
            F = a("UUD2"),
            T = a("xwJZ"),
            R = a("vEDM"),
            I = a("zu6X");

        function O(e) {
            let t, a = (0, n.c)(4);
            if (!1 === e.showOpenButton) {
                let t;
                return a[0] !== e ? (t = (0, o.jsx)(N, {
                    ...e
                }), a[0] = e, a[1] = t) : t = a[1], t
            }
            return a[2] !== e ? (t = (0, o.jsxs)(o.Fragment, {
                children: [null, (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(N, {
                        ...e
                    })
                })]
            }), a[2] = e, a[3] = t) : t = a[3], t
        }

        function N(e) {
            let t, a, O, N, D, B, A, E, L, z, U, q, V, W, G, Q, K, $, X, H, J, Y, Z, ee, et, ea, eo, en, ei, el = (0, n.c)(106),
                {
                    item: es,
                    conversationId: er,
                    cwd: ed,
                    hideCodeBlocks: ec,
                    defaultCollapsed: eu,
                    hasArtifacts: ef,
                    reportEntityType: ep,
                    showOpenButton: em,
                    turnId: eg,
                    isThreadPreview: eb,
                    isThreadPreviewCollapsed: eh,
                    onOpenInSidePanel: ex
                } = e,
                ey = void 0 !== ec && ec,
                ev = void 0 !== ef && ef,
                ek = void 0 === ep ? "thread" : ep,
                ew = void 0 !== eb && eb,
                ej = void 0 !== eh && eh,
                [e_, eS] = (0, d.useState)(void 0 !== eu && eu),
                eC = (0, r.z)(j.threadHostId$),
                eM = (0, c.a)(),
                eF = (0, r.z)(w.c),
                eT = (0, r.z)(b.b);
            (void 0 === em || em) && es.completed, el[0] !== es.completed || el[1] !== es.content ? (t = es.completed && es.content.trim().length > 0, el[0] = es.completed, el[1] = es.content, el[2] = t) : t = el[2];
            let eR = t;
            el[3] !== es.completed || el[4] !== es.content ? (a = es.completed && es.content.trim().length > 0, el[3] = es.completed, el[4] = es.content, el[5] = a) : a = el[5];
            let eI = eR && !0,
                eO = a && !0,
                eN = eT && null != eg && null != eF.submitCodexAnalyticsEvent && !0;
            el[6] !== eM ? (O = eM.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), el[6] = eM, el[7] = O) : O = el[7];
            let eP = O;
            el[8] !== eM ? (N = eM.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel",
                description: "Tooltip text for button that opens the plan in the side panel"
            }), el[8] = eM, el[9] = N) : N = el[9];
            let eD = N;
            el[10] !== eM ? (D = eM.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel",
                description: "Accessible label for the collapsed plan card that closes the plan side panel"
            }), el[10] = eM, el[11] = D) : D = el[11];
            let eB = D;
            el[12] !== eM || el[13] !== e_ ? (B = e_ ? eM.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary",
                description: "Aria label for button that expands a collapsed plan summary"
            }) : eM.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary",
                description: "Aria label for button that collapses the plan summary content"
            }), el[12] = eM, el[13] = e_, el[14] = B) : B = el[14];
            let eA = B;
            el[15] !== es.content ? (A = () => {
                let e = new Blob([es.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, el[15] = es.content, el[16] = A) : A = el[16];
            let eE = A;
            el[17] !== er || el[18] !== es.content || el[19] !== eF || el[20] !== eg ? (E = e => (null != eg && eF.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: er,
                turnId: eg
            }), (0, S.b)(es.content, e)), el[17] = er, el[18] = es.content, el[19] = eF, el[20] = eg, el[21] = E) : E = el[21];
            let eL = E,
                ez = ew ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            el[22] !== ew || el[23] !== ej || el[24] !== ex ? (L = ew && !ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, el[22] = ew, el[23] = ej, el[24] = ex, el[25] = L) : L = el[25], el[26] !== eB || el[27] !== ej || el[28] !== ex ? (z = ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eB,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: ex,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(x, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, el[26] = eB, el[27] = ej, el[28] = ex, el[29] = z) : z = el[29];
            let eU = ew ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            el[30] !== eU ? (U = (0, l.b)("text-base leading-tight", eU), el[30] = eU, el[31] = U) : U = el[31], el[32] !== ew ? (q = ew ? (0, o.jsx)(m.a, {
                className: "shrink-0",
                asset: I.a
            }) : null, el[32] = ew, el[33] = q) : q = el[33], el[34] !== es.completed ? (V = es.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(M.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), el[34] = es.completed, el[35] = V) : V = el[35], el[36] !== U || el[37] !== q || el[38] !== V ? (W = (0, o.jsxs)("span", {
                className: U,
                children: [q, V]
            }), el[36] = U, el[37] = q, el[38] = V, el[39] = W) : W = el[39];
            let eq = ej && "hidden";
            el[40] !== eq ? (G = (0, l.b)("relative z-20 flex items-center gap-1", eq), el[40] = eq, el[41] = G) : G = el[41];
            el[42] !== eP || el[43] !== eE || el[44] !== eO ? (Q = eO ? (0, o.jsx)(i.a, {
                content: eP,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eP,
                    onClick: eE,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: T.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[42] = eP, el[43] = eE, el[44] = eO, el[45] = Q) : Q = el[45], el[46] !== eL || el[47] !== eI ? (K = eI ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eL
            }) : null, el[46] = eL, el[47] = eI, el[48] = K) : K = el[48], el[49] !== er || el[50] !== ev || el[51] !== ek || el[52] !== eN || el[53] !== eg ? ($ = eN ? (0, o.jsx)(F.a, {
                hasArtifacts: ev,
                reportEntityType: ek,
                threadId: er,
                turnId: eg
            }) : null, el[49] = er, el[50] = ev, el[51] = ek, el[52] = eN, el[53] = eg, el[54] = $) : $ = el[54], el[55] !== ex || el[56] !== eD ? (X = null != ex ? (0, o.jsx)(i.a, {
                content: eD,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eD,
                    onClick: ex,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: R.a,
                        legacyIcon: v.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[55] = ex, el[56] = eD, el[57] = X) : X = el[57], el[58] !== eA || el[59] !== e_ || el[60] !== ew ? (H = ew ? null : (0, o.jsx)(i.a, {
                content: e_ ? (0, o.jsx)(u.a, {
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
                    "aria-label": eA,
                    onClick: () => {
                        eS(P)
                    },
                    children: (0, o.jsx)(h.a, {
                        className: (0, l.b)("icon-2xs transition-transform", e_ ? "rotate-180" : "rotate-0")
                    })
                })
            }), el[58] = eA, el[59] = e_, el[60] = ew, el[61] = H) : H = el[61], el[62] !== ej || el[63] !== G || null !== el[64] || el[65] !== Q || el[66] !== K || el[67] !== $ || el[68] !== X || el[69] !== H ? (J = (0, o.jsxs)("div", {
                "aria-hidden": ej,
                className: G,
                children: [null, Q, K, $, X, H]
            }), el[62] = ej, el[63] = G, el[64] = null, el[65] = Q, el[66] = K, el[67] = $, el[68] = X, el[69] = H, el[70] = J) : J = el[70], el[71] !== z || el[72] !== W || el[73] !== J ? (Y = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [z, W, J]
            }), el[71] = z, el[72] = W, el[73] = J, el[74] = Y) : Y = el[74], el[75] !== er ? (Z = {
                [C.a]: er
            }, el[75] = er, el[76] = Z) : Z = el[76];
            let eV = ej || void 0,
                eW = ew && !ej && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            el[77] !== eW ? (ee = (0, l.b)("relative overflow-hidden", eW), el[77] = eW, el[78] = ee) : ee = el[78];
            let eG = ej || void 0;
            el[79] !== e_ || el[80] !== ew || el[81] !== ej ? (et = ew ? {
                maxHeight: 160 * !ej,
                opacity: +!ej
            } : {
                height: e_ ? 320 : "auto",
                ...e_ ? {
                    overflow: "hidden"
                } : {
                    transitionEnd: {
                        overflow: "visible"
                    }
                }
            }, el[79] = e_, el[80] = ew, el[81] = ej, el[82] = et) : et = el[82];
            let eQ = !es.completed;
            return el[83] !== er || el[84] !== ed || el[85] !== ey || el[86] !== eC || el[87] !== es.content || el[88] !== eQ ? (ea = (0, o.jsx)(k.c, {
                markdown: es.content,
                conversationId: er,
                hostId: eC,
                hideCodeBlocks: ey,
                isStreaming: eQ,
                cwd: ed
            }), el[83] = er, el[84] = ed, el[85] = ey, el[86] = eC, el[87] = es.content, el[88] = eQ, el[89] = ea) : ea = el[89], el[90] !== e_ || el[91] !== ew ? (eo = !ew && e_ ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent"
                }), (0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, o.jsx)(f.a, {
                        className: "pointer-events-auto",
                        color: "primary",
                        onClick: () => {
                            eS(!1)
                        },
                        children: (0, o.jsx)(u.a, {
                            id: "localConversation.planSummary.viewPlan",
                            defaultMessage: "Expand plan",
                            description: "Button label to expand a collapsed plan summary"
                        })
                    })
                })]
            }) : null, el[90] = e_, el[91] = ew, el[92] = eo) : eo = el[92], el[93] !== Z || el[94] !== eV || el[95] !== ee || el[96] !== eG || el[97] !== et || el[98] !== ea || el[99] !== eo ? (en = (0, o.jsxs)(s.a.div, {
                ...Z,
                "aria-hidden": eV,
                className: ee,
                inert: eG,
                initial: !1,
                animate: et,
                transition: _.a,
                children: [ea, eo]
            }), el[93] = Z, el[94] = eV, el[95] = ee, el[96] = eG, el[97] = et, el[98] = ea, el[99] = eo, el[100] = en) : en = el[100], el[101] !== ez || el[102] !== L || el[103] !== Y || el[104] !== en ? (ei = (0, o.jsxs)(k.b, {
                className: ez,
                children: [L, Y, en]
            }), el[101] = ez, el[102] = L, el[103] = Y, el[104] = en, el[105] = ei) : ei = el[105], ei
        }

        function P(e) {
            return !e
        }
    }),
    UUD2: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("BolX"),
            l = a("zd8w"),
            s = a("Qgfj"),
            r = a("tl5a"),
            d = a("X6Vn"),
            c = a("gTcE"),
            u = a("UrAA"),
            f = a("nIGo"),
            p = a("yGJW"),
            m = a("OWtl"),
            g = a("taaw");
        let b = "safety_or_legal_concern",
            h = {
                thumbs_down: "thumbsDown",
                thumbs_up: "thumbsUp"
            },
            x = (0, s.f)({
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
            y = {
                thumbs_down: [{
                    id: "wrong_presentation_length",
                    label: x.wrongPresentationLength
                }, {
                    id: "poor_writing",
                    label: x.poorWriting
                }, {
                    id: "poor_style_format_or_visuals",
                    label: x.poorStyleFormatOrVisuals
                }, {
                    id: "wrong_topics_or_subtopics",
                    label: x.wrongTopicsOrSubtopics
                }, {
                    id: "didnt_follow_my_instructions",
                    label: x.didntFollowMyInstructions
                }, {
                    id: "didnt_follow_my_template",
                    label: x.didntFollowMyTemplate
                }, {
                    id: "incorrect_content",
                    label: x.incorrectContent
                }, {
                    id: b,
                    label: x.safetyOrLegalConcern
                }],
                thumbs_up: [{
                    id: "good_content",
                    label: x.goodContent
                }, {
                    id: "good_writing_quality",
                    label: x.goodWritingQuality
                }, {
                    id: "good_style_format_or_visuals",
                    label: x.goodStyleFormatOrVisuals
                }, {
                    id: "followed_my_instructions_well",
                    label: x.followedMyInstructionsWell
                }, {
                    id: "generated_quickly",
                    label: x.generatedQuickly
                }]
            },
            v = {
                thumbs_down: [{
                    id: "incorrect_or_incomplete",
                    label: x.incorrectOrIncomplete
                }, {
                    id: "didnt_follow_my_instructions",
                    label: x.didntFollowMyInstructions
                }, {
                    id: "off_track_or_wrong_scope",
                    label: x.offTrackOrWrongScope
                }, {
                    id: "lost_context",
                    label: x.lostContext
                }, {
                    id: "slow_or_buggy",
                    label: x.slowOrBuggy
                }, {
                    id: b,
                    label: x.safetyOrLegalConcern
                }, {
                    id: "other",
                    label: x.other
                }],
                thumbs_up: [{
                    id: "solved_my_task",
                    label: x.solvedMyTask
                }, {
                    id: "followed_my_instructions",
                    label: x.followedMyInstructions
                }, {
                    id: "good_code_or_output_quality",
                    label: x.goodCodeOrOutputQuality
                }, {
                    id: "fast_and_efficient",
                    label: x.fastAndEfficient
                }, {
                    id: "useful_autonomy",
                    label: x.usefulAutonomy
                }, {
                    id: "other",
                    label: x.other
                }]
            };

        function k(e) {
            return null == e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, n.c)(14),
                    {
                        hasArtifacts: s,
                        reportEntityType: x,
                        renderControl: w,
                        threadId: j,
                        turnId: _
                    } = e,
                    S = void 0 !== s && s,
                    C = void 0 === x ? "thread" : x,
                    M = (0, i.y)(m.a),
                    [F, T] = (0, l.useState)(null),
                    R = (0, i.z)(p.c);
                if (a[0] !== S || a[1] !== R || a[2] !== w || a[3] !== C || a[4] !== M || a[5] !== F || a[6] !== j || a[7] !== _) {
                    let e, n = (e, t, a) => {
                            let n = S ? y[e] : v[e];
                            (0, d.f)(M, c.a, {
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
                                    o === b && ((0, d.b)(M, c.a), i(a, e))
                                },
                                onSubmit: t => {
                                    let {
                                        details: a,
                                        selectedOptionId: o
                                    } = t;
                                    return o === b ? void i(a, e) : R.submitCodexAnalyticsEvent?.({
                                        action: "submit_turn_feedback",
                                        eventKind: "action",
                                        threadId: j,
                                        turnId: _,
                                        metadata: {
                                            details: a,
                                            has_artifacts: S,
                                            selected_option: o
                                        }
                                    })
                                },
                                options: n
                            })
                        },
                        i = (e, t) => {
                            (0, d.f)(M, g.CodexThreadReportDialog, {
                                onBackToFeedback: () => {
                                    n(t, e, b)
                                },
                                reportEntityType: C,
                                threadId: j
                            })
                        };
                    a[9] !== R || a[10] !== M || a[11] !== j || a[12] !== _ ? (e = e => {
                        if (T(e), null == e) return;
                        let t = M.get(r.yb, j);
                        R.submitCodexAnalyticsEvent?.({
                            eventKind: "turn_rating",
                            threadId: j,
                            turnId: _,
                            sessionId: t === j && null != M.get(r.Jb, j) ? null : t,
                            rating: e
                        })
                    }, a[9] = R, a[10] = M, a[11] = j, a[12] = _, a[13] = e) : e = a[13];
                    let l = e,
                        s = {
                            rating: null == F ? null : h[F],
                            onRate: e => {
                                let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                    a = F === t ? null : t;
                                l(a), null != a && n(a)
                            },
                            shouldRestoreFocus: k
                        };
                    t = null != w ? w(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                        ...s
                    }), a[0] = S, a[1] = R, a[2] = w, a[3] = C, a[4] = M, a[5] = F, a[6] = j, a[7] = _, a[8] = t
                } else t = a[8];
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
            d = a("zEpR"),
            c = a("tKUf"),
            u = a("cWXs"),
            f = a("aynk");

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
                let t, a, s, j, _, S, C, M, F, T, R, I, O, N, P, D, B, A, E, L, z, U, q, V, W, G, Q, K, $, X, H, J = (0, n.c)(119),
                    {
                        onBack: Y,
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
                let [e_, eS] = (0, r.useState)(j), [eC, eM] = (0, r.useState)(null);
                J[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], J[10] = _) : _ = J[10];
                let [eF, eT] = (0, r.useState)(_), eR = 0 === eF.length ? null : eF[eF.length - 1];
                J[11] !== eR || J[12] !== eg || J[13] !== ex?.reasons || J[14] !== eC ? (T = (I = (null == eR ? ex?.reasons : eR.sub_reasons) ?? []).find(e => e.id === eC) ?? null, C = (S = eR?.details_placeholder != null || eg && eR?.has_details === !0) || eg && (eR?.additional_fields?.length ?? 0) > 0, F = eR?.link_attachment != null, M = eR?.subtext != null && 0 === I.length && !C && !F, R = C || null != T && w(T, eg), J[11] = eR, J[12] = eg, J[13] = ex?.reasons, J[14] = eC, J[15] = S, J[16] = C, J[17] = M, J[18] = F, J[19] = T, J[20] = R, J[21] = I) : (S = J[15], C = J[16], M = J[17], F = J[18], T = J[19], R = J[20], I = J[21]);
                let eI = R,
                    eO = null == T || ey || ek.isPending,
                    eN = ek.isSuccess || ev,
                    eP = !eN && (eI && null == eo || !eI && !F && eO);
                J[22] !== Z || J[23] !== eb || J[24] !== ek.isPending ? (O = e => {
                    e || eb && ek.isPending || Z()
                }, J[22] = Z, J[23] = eb, J[24] = ek.isPending, J[25] = O) : O = J[25];
                let eD = O;
                J[26] !== eR || J[27] !== Y || J[28] !== eF ? (N = () => {
                    if (null == eR) return void Y?.();
                    let e = eF[eF.length - 1];
                    eT(x), eM(e?.id ?? null), ej(""), eS({})
                }, J[26] = eR, J[27] = Y, J[28] = eF, J[29] = N) : N = J[29];
                let eB = N;
                J[30] !== eR || J[31] !== e_ || J[32] !== ew || J[33] !== eg || J[34] !== C || J[35] !== M || J[36] !== F || J[37] !== Z || J[38] !== ei || J[39] !== ek || J[40] !== T || J[41] !== eF || J[42] !== eN || J[43] !== eo ? (P = e => {
                    if (e.preventDefault(), !ek.isPending && (!eg || e.currentTarget.reportValidity())) {
                        if (eN) return void Z();
                        if (!M) {
                            if (F && eR?.link_attachment != null) return null != ei ? void ei(eR.link_attachment) : void(0, g.f)({
                                href: eR.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (C && null != eR) {
                                if (null == eo) return;
                                ek.mutate({
                                    details: ew.trim(),
                                    reason: eR,
                                    path: eF,
                                    ...eg ? {
                                        additionalFields: e_
                                    } : {}
                                });
                                return
                            }
                            if (null != T) {
                                if (w(T, eg)) {
                                    if (null == eo) return;
                                    ek.mutate({
                                        details: "",
                                        reason: T,
                                        path: [...eF, T]
                                    });
                                    return
                                }
                                eT(e => [...e, T]), eM(null), ej(""), eS({})
                            }
                        }
                    }
                }, J[30] = eR, J[31] = e_, J[32] = ew, J[33] = eg, J[34] = C, J[35] = M, J[36] = F, J[37] = Z, J[38] = ei, J[39] = ek, J[40] = T, J[41] = eF, J[42] = eN, J[43] = eo, J[44] = P) : P = J[44];
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
                let eE = D;
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
                let eL = B;
                return J[52] !== ee ? (A = {
                    onCloseAutoFocus: ee
                }, J[52] = ee, J[53] = A) : A = J[53], J[54] !== ek.isSuccess || J[55] !== es ? (E = ek.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report",
                    description: "Title shown after a safety or legal report is submitted"
                }) : es, J[54] = ek.isSuccess, J[55] = es, J[56] = E) : E = J[56], J[57] !== E ? (L = (0, o.jsx)(p.d, {
                    children: E
                }), J[57] = E, J[58] = L) : L = J[58], J[59] !== eL ? (z = null != eL ? (0, o.jsx)(p.c, {
                    children: eL
                }) : void 0, J[59] = eL, J[60] = z) : z = J[60], J[61] !== L || J[62] !== z ? (U = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: L,
                        subtitle: z,
                        titleSize: "dialog"
                    })
                }), J[61] = L, J[62] = z, J[63] = U) : U = J[63], J[64] !== eR || J[65] !== e_ || J[66] !== ew || J[67] !== S || J[68] !== eg || J[69] !== eh || J[70] !== C || J[71] !== M || J[72] !== F || J[73] !== ey || J[74] !== ev || J[75] !== ek.isSuccess || J[76] !== eC || J[77] !== el || J[78] !== I ? (q = ek.isSuccess ? (0, o.jsx)(k, {
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
                }) : C && null != eR ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eg && null != eR.explanation ? (0, o.jsx)(k, {
                        children: eR.explanation
                    }) : null, S ? (0, o.jsx)(b.c, {
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
                                onChange: t => eS(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            }) : (0, o.jsx)(b.a, {
                                type: t,
                                required: e.required,
                                value: e_[e.id] ?? "",
                                onChange: t => eS(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            })]
                        }, e.id)
                    }) : null]
                }) : F ? (0, o.jsx)(k, {
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
                        selectedReasonId: eC,
                        setSelectedReasonId: eM
                    })]
                }), J[64] = eR, J[65] = e_, J[66] = ew, J[67] = S, J[68] = eg, J[69] = eh, J[70] = C, J[71] = M, J[72] = F, J[73] = ey, J[74] = ev, J[75] = ek.isSuccess, J[76] = eC, J[77] = el, J[78] = I, J[79] = q) : q = J[79], J[80] !== ek.isError ? (V = ek.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again",
                        description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                    })
                }) : null, J[80] = ek.isError, J[81] = V) : V = J[81], J[82] !== ey || J[83] !== ev || J[84] !== en || J[85] !== eo ? (W = null != eo || ey || ev ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), J[82] = ey, J[83] = ev, J[84] = en, J[85] = eo, J[86] = W) : W = J[86], J[87] !== q || J[88] !== V || J[89] !== W ? (G = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [q, V, W]
                }), J[87] = q, J[88] = V, J[89] = W, J[90] = G) : G = J[90], J[91] !== eR || J[92] !== eB || J[93] !== Y || J[94] !== ek.isPending || J[95] !== ek.isSuccess ? (Q = null == eR && null == Y || ek.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ek.isPending,
                    type: "button",
                    onClick: eB,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back",
                        description: "Back button for Codex thread report reason selection"
                    })
                }), J[91] = eR, J[92] = eB, J[93] = Y, J[94] = ek.isPending, J[95] = ek.isSuccess, J[96] = Q) : Q = J[96], J[97] !== eE || J[98] !== M || J[99] !== F || J[100] !== eP || J[101] !== eI || J[102] !== ek.isPending || J[103] !== eN ? (K = !M || eN ? (0, o.jsx)(f.a, {
                    color: "primary",
                    disabled: eP,
                    loading: ek.isPending,
                    type: F ? "button" : "submit",
                    onClick: F ? eE : void 0,
                    children: (0, o.jsx)(y, {
                        close: eN,
                        isLinkStep: F,
                        isSubmitStep: eI
                    })
                }) : null, J[97] = eE, J[98] = M, J[99] = F, J[100] = eP, J[101] = eI, J[102] = ek.isPending, J[103] = eN, J[104] = K) : K = J[104], J[105] !== Q || J[106] !== K ? ($ = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [Q, K]
                    })
                }), J[105] = Q, J[106] = K, J[107] = $) : $ = J[107], J[108] !== eA || J[109] !== U || J[110] !== G || J[111] !== $ ? (X = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eA,
                    children: [U, G, $]
                }), J[108] = eA, J[109] = U, J[110] = G, J[111] = $, J[112] = X) : X = J[112], J[113] !== ep || J[114] !== ef || J[115] !== eD || J[116] !== A || J[117] !== X ? (H = (0, o.jsx)(p.a, {
                    open: !0,
                    onOpenChange: eD,
                    contentProps: A,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: X
                }), J[113] = ep, J[114] = ef, J[115] = eD, J[116] = A, J[117] = X, J[118] = H) : H = J[118], H
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("BolX"),
            n = a("doi1"),
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
                    if (m && await (0, n.qg)(u.subarray(0, n.ac)) !== "text") throw Error("File is not text");
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
                    contentSampleByteLimit: m ? n.ac : void 0,
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