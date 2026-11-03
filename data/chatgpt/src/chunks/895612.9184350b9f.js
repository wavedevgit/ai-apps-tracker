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
                let t, a, h, x, y, v, k, w, j, _, C, S, M, T, F, I, R, O, N, P, D, B, A, L, E, z, U, q, V, G, W, Q, $ = (0, n.c)(101),
                    {
                        belowFreeformContent: K,
                        closeOnSubmit: H,
                        freeformFeedbackRequired: J,
                        hideFreeformInput: Y,
                        initialDetails: X,
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
                    er = void 0 === H ? "after-submit" : H,
                    ed = void 0 !== Y && Y,
                    ec = void 0 === el ? "wide" : el,
                    eu = void 0 !== es && es,
                    ef = (0, d.a)(),
                    [ep, em] = (0, r.useState)(void 0 === X ? "" : X),
                    [eg, eb] = (0, r.useState)(null),
                    [eh, ex] = (0, r.useState)(Z ?? null);
                if ($[0] !== er || $[1] !== ep || $[2] !== J || $[3] !== ef || $[4] !== ee || $[5] !== et || $[6] !== eo || $[7] !== ea || $[8] !== ei || $[9] !== eg || $[10] !== en || $[11] !== eh || $[12] !== ec || $[13] !== eu) {
                    let e, n, r, d, u, g, b = ep.trim();
                    $[37] !== J || $[38] !== ef ? (e = J ? ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.required",
                        defaultMessage: "Share details (required)",
                        description: "Placeholder for a required freeform feedback details field"
                    }) : ef.formatMessage({
                        id: "feedbackFormDialog.detailsPlaceholder.optional",
                        defaultMessage: "Share details (optional)",
                        description: "Placeholder for an optional freeform feedback details field"
                    }), $[37] = J, $[38] = ef, $[39] = e) : e = $[39], y = e, $[40] !== ef ? (n = ef.formatMessage({
                        id: "feedbackFormDialog.optionsLabel",
                        defaultMessage: "Feedback options",
                        description: "Accessible label for feedback options"
                    }), $[40] = ef, $[41] = n) : n = $[41];
                    let L = n;
                    k = null == eh || J && 0 === b.length, $[42] !== ee || $[43] !== eg ? (r = e => {
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
                    }), $[46] = en, $[47] = u) : u = $[47], j = u, $[48] !== eo || $[49] !== en || $[50] !== j ? (g = null != eo && null != en ? [j, _] : null, $[48] = eo, $[49] = en, $[50] = j, $[51] = g) : g = $[51], w = g, x = f.a, R = !0, O = E, N = ec, h = p.b, S = "form", M = "gap-2", T = "viewport", F = e => {
                        e.preventDefault(), v(ea)
                    }, $[52] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, o.jsx)(p.e, {
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
                    }), $[52] = I) : I = $[52], a = p.e, t = p.f, C = "gap-3", P = "radiogroup", D = L, B = "flex flex-wrap gap-2", A = ei.map(e => {
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
                    }), $[0] = er, $[1] = ep, $[2] = J, $[3] = ef, $[4] = ee, $[5] = et, $[6] = eo, $[7] = ea, $[8] = ei, $[9] = eg, $[10] = en, $[11] = eh, $[12] = ec, $[13] = eu, $[14] = t, $[15] = a, $[16] = h, $[17] = x, $[18] = y, $[19] = v, $[20] = k, $[21] = w, $[22] = j, $[23] = _, $[24] = C, $[25] = S, $[26] = M, $[27] = T, $[28] = F, $[29] = I, $[30] = R, $[31] = O, $[32] = N, $[33] = P, $[34] = D, $[35] = B, $[36] = A
                } else t = $[14], a = $[15], h = $[16], x = $[17], y = $[18], v = $[19], k = $[20], w = $[21], j = $[22], _ = $[23], C = $[24], S = $[25], M = $[26], T = $[27], F = $[28], I = $[29], R = $[30], O = $[31], N = $[32], P = $[33], D = $[34], B = $[35], A = $[36];
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
                return $[78] !== _ || $[79] !== ey || $[80] !== ev || $[81] !== ek ? (V = (0, o.jsx)(u.a, {
                    color: "primary",
                    disabled: ey,
                    loading: ev,
                    sizingLabels: ek,
                    type: "submit",
                    children: _
                }), $[78] = _, $[79] = ey, $[80] = ev, $[81] = ek, $[82] = V) : V = $[82], $[83] !== q || $[84] !== V ? (G = (0, o.jsx)(p.e, {
                    children: (0, o.jsxs)(p.c, {
                        expandSingleButton: !1,
                        children: [q, V]
                    })
                }), $[83] = q, $[84] = V, $[85] = G) : G = $[85], $[86] !== h || $[87] !== S || $[88] !== M || $[89] !== T || $[90] !== F || $[91] !== I || $[92] !== U || $[93] !== G ? (W = (0, o.jsxs)(h, {
                    as: S,
                    className: M,
                    size: T,
                    onSubmit: F,
                    children: [I, U, G]
                }), $[86] = h, $[87] = S, $[88] = M, $[89] = T, $[90] = F, $[91] = I, $[92] = U, $[93] = G, $[94] = W) : W = $[94], $[95] !== x || $[96] !== R || $[97] !== O || $[98] !== N || $[99] !== W ? (Q = (0, o.jsx)(x, {
                    open: R,
                    onOpenChange: O,
                    size: N,
                    children: W
                }), $[95] = x, $[96] = R, $[97] = O, $[98] = N, $[99] = W, $[100] = Q) : Q = $[100], Q
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
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f._c, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== h ? (l = (0, o.jsx)(c.a, {
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
                let t, a, d, h, x, y, v, k, w, j, _, C, S, M, T, F, I = (0, n.c)(97),
                    {
                        disabled: R,
                        hideUnselectedRating: O,
                        isAnimated: N,
                        menuItems: P,
                        rating: D,
                        onRate: B,
                        shouldRestoreFocus: A,
                        variant: L
                    } = e,
                    E = void 0 !== R && R,
                    z = void 0 !== O && O,
                    U = void 0 !== N && N,
                    q = void 0 === L ? "response" : L,
                    V = (0, s.a)(),
                    G = (0, l.useRef)(null),
                    W = (0, l.useRef)(null),
                    Q = (0, l.useRef)(!1);
                I[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    Q.current && ((W.current ?? G.current)?.focus(), Q.current = !1)
                }, I[0] = t) : t = I[0], I[1] !== D ? (a = [D], I[1] = D, I[2] = a) : a = I[2], (0, l.useLayoutEffect)(t, a), I[3] !== B || I[4] !== D || I[5] !== A ? (d = e => {
                    Q.current = A?.(D === e ? null : e) ?? !0, B(e)
                }, I[3] = B, I[4] = D, I[5] = A, I[6] = d) : d = I[6];
                let $ = d;
                if ("imageTurn" === q || "imageOverlay" === q) {
                    let e, t, a, n, l, s = "imageOverlay" === q ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === q ? "mediaOverlay" : "ghost";
                    I[7] !== V || I[8] !== U ? (e = U ? V.formatMessage(b.likeGif) : V.formatMessage(b.likeImage), I[7] = V, I[8] = U, I[9] = e) : e = I[9];
                    let d = e;
                    I[10] !== V || I[11] !== U ? (t = U ? V.formatMessage(b.dislikeGif) : V.formatMessage(b.dislikeImage), I[10] = V, I[11] = U, I[12] = t) : t = I[12];
                    let u = t;
                    return I[13] !== E || I[14] !== d || I[15] !== $ || I[16] !== D || I[17] !== s || I[18] !== r || I[19] !== q ? (a = "thumbsDown" !== D ? (0, o.jsx)(i.a, {
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
                            children: "thumbsUp" === D ? (0, o.jsx)(f.Si, {}) : (0, o.jsx)(f.Qi, {})
                        })
                    }) : null, I[13] = E, I[14] = d, I[15] = $, I[16] = D, I[17] = s, I[18] = r, I[19] = q, I[20] = a) : a = I[20], I[21] !== E || I[22] !== u || I[23] !== $ || I[24] !== D || I[25] !== s || I[26] !== r || I[27] !== q ? (n = "thumbsUp" !== D ? (0, o.jsx)(i.a, {
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
                            children: "thumbsDown" === D ? (0, o.jsx)(f.Oi, {}) : (0, o.jsx)(f.Mi, {})
                        })
                    }) : null, I[21] = E, I[22] = u, I[23] = $, I[24] = D, I[25] = s, I[26] = r, I[27] = q, I[28] = n) : n = I[28], I[29] !== a || I[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), I[29] = a, I[30] = n, I[31] = l) : l = I[31], l
                }
                if ("imageViewerMenu" === q || "imageViewerSubmenu" === q) {
                    let e, t, a, n;
                    I[32] !== z || I[33] !== U || I[34] !== $ || I[35] !== D ? (e = z && "thumbsDown" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsUp" === D ? (0, o.jsx)(f.Si, {}) : (0, o.jsx)(f.Qi, {}),
                        onSelect: () => $("thumbsUp"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.likeImage
                        })
                    }), I[32] = z, I[33] = U, I[34] = $, I[35] = D, I[36] = e) : e = I[36], I[37] !== z || I[38] !== U || I[39] !== $ || I[40] !== D ? (t = z && "thumbsUp" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsDown" === D ? (0, o.jsx)(f.Oi, {}) : (0, o.jsx)(f.Mi, {}),
                        onSelect: () => $("thumbsDown"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...b.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.dislikeImage
                        })
                    }), I[37] = z, I[38] = U, I[39] = $, I[40] = D, I[41] = t) : t = I[41], I[42] !== e || I[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), I[42] = e, I[43] = t, I[44] = a) : a = I[44];
                    let i = a;
                    if ("imageViewerSubmenu" === q) {
                        let e, t, a;
                        return I[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...b.imageFeedback
                        }), I[45] = e) : e = I[45], I[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                            icon: {
                                16: f.Ti,
                                20: f.Ui
                            }
                        }), I[46] = t) : t = I[46], I[47] !== E || I[48] !== i ? (a = (0, o.jsx)(m.q, {
                            ref: W,
                            disabled: E,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), I[47] = E, I[48] = i, I[49] = a) : a = I[49], a
                    }
                    return I[50] !== E || I[51] !== i || I[52] !== P ? (n = (0, o.jsxs)(g, {
                        triggerRef: G,
                        disabled: E,
                        children: [P, i]
                    }), I[50] = E, I[51] = i, I[52] = P, I[53] = n) : n = I[53], n
                }
                if (null != D) {
                    let e, t, a, n, l, s, r = "thumbsUp" === D;
                    I[54] !== r ? (e = r ? {
                        16: f.Ri,
                        20: f.Si
                    } : {
                        16: f.Ni,
                        20: f.Oi
                    }, I[54] = r, I[55] = e) : e = I[55];
                    let d = e;
                    I[56] !== V || I[57] !== r ? (t = V.formatMessage(r ? b.removeGoodResponse : b.removeBadResponse), I[56] = V, I[57] = r, I[58] = t) : t = I[58];
                    let u = t;
                    return I[59] !== $ || I[60] !== D ? (a = () => $(D), I[59] = $, I[60] = D, I[61] = a) : a = I[61], I[62] !== d ? (n = (0, o.jsx)(p.b, {
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
                    }), I[64] = E, I[65] = u, I[66] = a, I[67] = n, I[68] = l) : l = I[68], I[69] !== u || I[70] !== l ? (s = (0, o.jsx)(i.a, {
                        content: u,
                        children: l
                    }), I[69] = u, I[70] = l, I[71] = s) : s = I[71], s
                }
                I[72] !== V ? (h = V.formatMessage(b.feedback), I[72] = V, I[73] = h) : h = I[73];
                let K = h;
                return I[74] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ti,
                        20: f.Ui
                    }
                }), I[74] = x) : x = I[74], I[75] !== K ? (y = (0, o.jsx)(c.a, {
                    ref: G,
                    "aria-label": K,
                    color: "ghost",
                    size: "icon",
                    children: x
                }), I[75] = K, I[76] = y) : y = I[76], I[77] !== K || I[78] !== y ? (v = (0, o.jsx)(i.a, {
                    content: K,
                    children: y
                }), I[77] = K, I[78] = y, I[79] = v) : v = I[79], I[80] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Pi,
                        20: f.Qi
                    }
                }), I[80] = k) : k = I[80], I[81] !== $ ? (w = () => $("thumbsUp"), I[81] = $, I[82] = w) : w = I[82], I[83] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)(r.a, {
                    ...b.goodResponse
                }), I[83] = j) : j = I[83], I[84] !== w ? (_ = (0, o.jsx)(u.c.Item, {
                    leftIcon: k,
                    onSelect: w,
                    children: j
                }), I[84] = w, I[85] = _) : _ = I[85], I[86] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Li,
                        20: f.Mi
                    }
                }), I[86] = C) : C = I[86], I[87] !== $ ? (S = () => $("thumbsDown"), I[87] = $, I[88] = S) : S = I[88], I[89] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(r.a, {
                    ...b.badResponse
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
                    I = w ?? k;
                m[0] !== y || m[1] !== g || m[2] !== b ? (t = null == g ? void 0 : () => {
                    null == y && b(), g()
                }, m[0] = y, m[1] = g, m[2] = b, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== I ? (a = y?.queryKey ?? ["codex-thread-report-reasons", I], m[4] = y?.queryKey, m[5] = I, m[6] = a) : a = m[6], m[7] !== y || m[8] !== I || m[9] !== x ? (i = null == y ? () => (async function(e, t) {
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
                })(I, x) : e => {
                    let {
                        signal: t
                    } = e;
                    return y.loadReasons(t)
                }, m[7] = y, m[8] = I, m[9] = x, m[10] = i) : i = m[10];
                let R = null != y ? 0 : void 0,
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
                        threadId: F
                    }, x, v, j)
                }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = F, m[16] = x, m[17] = u) : u = m[17];
                let D = null == x ? void 0 : c;
                return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: k,
                    title: S
                }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = f) : f = m[21], m[22] !== T || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== R || m[31] !== O || m[32] !== N || m[33] !== P || m[34] !== u || m[35] !== D ? (p = (0, o.jsx)(s.ReportDialog, {
                    onBack: t,
                    onClose: b,
                    onCloseAutoFocus: h,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: R,
                    includeServerFields: O,
                    preventCloseWhileSubmitting: N,
                    dialogVariant: P,
                    contentClassName: T,
                    submitReport: u,
                    openExternalForm: D,
                    successBody: _,
                    title: f
                }), m[22] = T, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = R, m[31] = O, m[32] = N, m[33] = P, m[34] = u, m[35] = D, m[36] = p) : p = m[36], p
            }
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            l = a("Yc0o"),
            s = a("U8sx"),
            r = a("eLUS");
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
        a.r(t), a("bg18"), a("tl5a");
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
            a: () => O
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("slpy"),
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
            g = a("UxN3"),
            b = a("POXM"),
            h = a("mPVn"),
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
            y = a("OJDV"),
            v = a("hgfv"),
            k = a("HWQc"),
            w = a("yGJW");
        a("tSEg");
        var j = a("sbaW"),
            _ = a("V8uZ"),
            C = a("aepO"),
            S = a("gBCz");
        a("Y05g");
        var M = a("umSm"),
            T = a("UUD2"),
            F = a("DsL6"),
            I = a("La7j"),
            R = a("eLUS");

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
            let t, a, O, N, D, B, A, L, E, z, U, q, V, G, W, Q, $, K, H, J, Y, X, Z, ee, et, ea, eo, en, ei, el = (0, n.c)(106),
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
                [e_, eC] = (0, d.useState)(void 0 !== eu && eu),
                eS = (0, r.z)(j.threadHostId$),
                eM = (0, c.a)(),
                eT = (0, r.z)(w.c),
                eF = (0, r.z)(b.b);
            (void 0 === em || em) && es.completed, el[0] !== es.completed || el[1] !== es.content ? (t = es.completed && es.content.trim().length > 0, el[0] = es.completed, el[1] = es.content, el[2] = t) : t = el[2];
            let eI = t;
            el[3] !== es.completed || el[4] !== es.content ? (a = es.completed && es.content.trim().length > 0, el[3] = es.completed, el[4] = es.content, el[5] = a) : a = el[5];
            let eR = eI && !0,
                eO = a && !0,
                eN = eF && null != eg && null != eT.submitCodexAnalyticsEvent && !0;
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
            let eL = A;
            el[17] !== er || el[18] !== es.content || el[19] !== eT || el[20] !== eg ? (L = e => (null != eg && eT.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: er,
                turnId: eg
            }), (0, C.b)(es.content, e)), el[17] = er, el[18] = es.content, el[19] = eT, el[20] = eg, el[21] = L) : L = el[21];
            let eE = L,
                ez = ew ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            el[22] !== ew || el[23] !== ej || el[24] !== ex ? (E = ew && !ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, el[22] = ew, el[23] = ej, el[24] = ex, el[25] = E) : E = el[25], el[26] !== eB || el[27] !== ej || el[28] !== ex ? (z = ej && null != ex ? (0, o.jsx)("button", {
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
                asset: R.a
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
            }), el[34] = es.completed, el[35] = V) : V = el[35], el[36] !== U || el[37] !== q || el[38] !== V ? (G = (0, o.jsxs)("span", {
                className: U,
                children: [q, V]
            }), el[36] = U, el[37] = q, el[38] = V, el[39] = G) : G = el[39];
            let eq = ej && "hidden";
            el[40] !== eq ? (W = (0, l.b)("relative z-20 flex items-center gap-1", eq), el[40] = eq, el[41] = W) : W = el[41];
            el[42] !== eP || el[43] !== eL || el[44] !== eO ? (Q = eO ? (0, o.jsx)(i.a, {
                content: eP,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eP,
                    onClick: eL,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: F.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[42] = eP, el[43] = eL, el[44] = eO, el[45] = Q) : Q = el[45], el[46] !== eE || el[47] !== eR ? ($ = eR ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eE
            }) : null, el[46] = eE, el[47] = eR, el[48] = $) : $ = el[48], el[49] !== er || el[50] !== ev || el[51] !== ek || el[52] !== eN || el[53] !== eg ? (K = eN ? (0, o.jsx)(T.a, {
                hasArtifacts: ev,
                reportEntityType: ek,
                threadId: er,
                turnId: eg
            }) : null, el[49] = er, el[50] = ev, el[51] = ek, el[52] = eN, el[53] = eg, el[54] = K) : K = el[54], el[55] !== ex || el[56] !== eD ? (H = null != ex ? (0, o.jsx)(i.a, {
                content: eD,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eD,
                    onClick: ex,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: I.a,
                        legacyIcon: v.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[55] = ex, el[56] = eD, el[57] = H) : H = el[57], el[58] !== eA || el[59] !== e_ || el[60] !== ew ? (J = ew ? null : (0, o.jsx)(i.a, {
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
                        eC(P)
                    },
                    children: (0, o.jsx)(h.a, {
                        className: (0, l.b)("icon-2xs transition-transform", e_ ? "rotate-180" : "rotate-0")
                    })
                })
            }), el[58] = eA, el[59] = e_, el[60] = ew, el[61] = J) : J = el[61], el[62] !== ej || el[63] !== W || null !== el[64] || el[65] !== Q || el[66] !== $ || el[67] !== K || el[68] !== H || el[69] !== J ? (Y = (0, o.jsxs)("div", {
                "aria-hidden": ej,
                className: W,
                children: [null, Q, $, K, H, J]
            }), el[62] = ej, el[63] = W, el[64] = null, el[65] = Q, el[66] = $, el[67] = K, el[68] = H, el[69] = J, el[70] = Y) : Y = el[70], el[71] !== z || el[72] !== G || el[73] !== Y ? (X = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [z, G, Y]
            }), el[71] = z, el[72] = G, el[73] = Y, el[74] = X) : X = el[74], el[75] !== er ? (Z = {
                [S.a]: er
            }, el[75] = er, el[76] = Z) : Z = el[76];
            let eV = ej || void 0,
                eG = ew && !ej && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            el[77] !== eG ? (ee = (0, l.b)("relative overflow-hidden", eG), el[77] = eG, el[78] = ee) : ee = el[78];
            let eW = ej || void 0;
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
            return el[83] !== er || el[84] !== ed || el[85] !== ey || el[86] !== eS || el[87] !== es.content || el[88] !== eQ ? (ea = (0, o.jsx)(k.c, {
                markdown: es.content,
                conversationId: er,
                hostId: eS,
                hideCodeBlocks: ey,
                isStreaming: eQ,
                cwd: ed
            }), el[83] = er, el[84] = ed, el[85] = ey, el[86] = eS, el[87] = es.content, el[88] = eQ, el[89] = ea) : ea = el[89], el[90] !== e_ || el[91] !== ew ? (eo = !ew && e_ ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent"
                }), (0, o.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, o.jsx)(f.a, {
                        className: "pointer-events-auto",
                        color: "primary",
                        onClick: () => {
                            eC(!1)
                        },
                        children: (0, o.jsx)(u.a, {
                            id: "localConversation.planSummary.viewPlan",
                            defaultMessage: "Expand plan",
                            description: "Button label to expand a collapsed plan summary"
                        })
                    })
                })]
            }) : null, el[90] = e_, el[91] = ew, el[92] = eo) : eo = el[92], el[93] !== Z || el[94] !== eV || el[95] !== ee || el[96] !== eW || el[97] !== et || el[98] !== ea || el[99] !== eo ? (en = (0, o.jsxs)(s.a.div, {
                ...Z,
                "aria-hidden": eV,
                className: ee,
                inert: eW,
                initial: !1,
                animate: et,
                transition: _.a,
                children: [ea, eo]
            }), el[93] = Z, el[94] = eV, el[95] = ee, el[96] = eW, el[97] = et, el[98] = ea, el[99] = eo, el[100] = en) : en = el[100], el[101] !== ez || el[102] !== E || el[103] !== X || el[104] !== en ? (ei = (0, o.jsxs)(k.b, {
                className: ez,
                children: [E, X, en]
            }), el[101] = ez, el[102] = E, el[103] = X, el[104] = en, el[105] = ei) : ei = el[105], ei
        }

        function P(e) {
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
                    C = void 0 !== s && s,
                    S = void 0 === x ? "thread" : x,
                    M = (0, i.y)(m.a),
                    [T, F] = (0, l.useState)(null),
                    I = (0, i.z)(p.c);
                if (a[0] !== C || a[1] !== I || a[2] !== w || a[3] !== S || a[4] !== M || a[5] !== T || a[6] !== j || a[7] !== _) {
                    let e, n = (e, t, a) => {
                            let n = C ? y[e] : v[e];
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
                                    return o === b ? void i(a, e) : I.submitCodexAnalyticsEvent?.({
                                        action: "submit_turn_feedback",
                                        eventKind: "action",
                                        threadId: j,
                                        turnId: _,
                                        metadata: {
                                            details: a,
                                            has_artifacts: C,
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
                                reportEntityType: S,
                                threadId: j
                            })
                        };
                    a[9] !== I || a[10] !== M || a[11] !== j || a[12] !== _ ? (e = e => {
                        if (F(e), null == e) return;
                        let t = M.get(r.yb, j);
                        I.submitCodexAnalyticsEvent?.({
                            eventKind: "turn_rating",
                            threadId: j,
                            turnId: _,
                            sessionId: t === j && null != M.get(r.Jb, j) ? null : t,
                            rating: e
                        })
                    }, a[9] = I, a[10] = M, a[11] = j, a[12] = _, a[13] = e) : e = a[13];
                    let l = e,
                        s = {
                            rating: null == T ? null : h[T],
                            onRate: e => {
                                let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                    a = T === t ? null : t;
                                l(a), null != a && n(a)
                            },
                            shouldRestoreFocus: k
                        };
                    t = null != w ? w(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                        ...s
                    }), a[0] = C, a[1] = I, a[2] = w, a[3] = S, a[4] = M, a[5] = T, a[6] = j, a[7] = _, a[8] = t
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
            d = a("mPVn"),
            c = a("tKUf"),
            u = a("cWXs"),
            f = a("FpIR");

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
                let t, a, s, j, _, C, S, M, T, F, I, R, O, N, P, D, B, A, L, E, z, U, q, V, G, W, Q, $, K, H, J, Y = (0, n.c)(119),
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
                Y[9] === Symbol.for("react.memo_cache_sentinel") ? (j = {}, Y[9] = j) : j = Y[9];
                let [e_, eC] = (0, r.useState)(j), [eS, eM] = (0, r.useState)(null);
                Y[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], Y[10] = _) : _ = Y[10];
                let [eT, eF] = (0, r.useState)(_), eI = 0 === eT.length ? null : eT[eT.length - 1];
                Y[11] !== eI || Y[12] !== eg || Y[13] !== ex?.reasons || Y[14] !== eS ? (F = (R = (null == eI ? ex?.reasons : eI.sub_reasons) ?? []).find(e => e.id === eS) ?? null, S = (C = eI?.details_placeholder != null || eg && eI?.has_details === !0) || eg && (eI?.additional_fields?.length ?? 0) > 0, T = eI?.link_attachment != null, M = eI?.subtext != null && 0 === R.length && !S && !T, I = S || null != F && w(F, eg), Y[11] = eI, Y[12] = eg, Y[13] = ex?.reasons, Y[14] = eS, Y[15] = C, Y[16] = S, Y[17] = M, Y[18] = T, Y[19] = F, Y[20] = I, Y[21] = R) : (C = Y[15], S = Y[16], M = Y[17], T = Y[18], F = Y[19], I = Y[20], R = Y[21]);
                let eR = I,
                    eO = null == F || ey || ek.isPending,
                    eN = ek.isSuccess || ev,
                    eP = !eN && (eR && null == eo || !eR && !T && eO);
                Y[22] !== Z || Y[23] !== eb || Y[24] !== ek.isPending ? (O = e => {
                    e || eb && ek.isPending || Z()
                }, Y[22] = Z, Y[23] = eb, Y[24] = ek.isPending, Y[25] = O) : O = Y[25];
                let eD = O;
                Y[26] !== eI || Y[27] !== X || Y[28] !== eT ? (N = () => {
                    if (null == eI) return void X?.();
                    let e = eT[eT.length - 1];
                    eF(x), eM(e?.id ?? null), ej(""), eC({})
                }, Y[26] = eI, Y[27] = X, Y[28] = eT, Y[29] = N) : N = Y[29];
                let eB = N;
                Y[30] !== eI || Y[31] !== e_ || Y[32] !== ew || Y[33] !== eg || Y[34] !== S || Y[35] !== M || Y[36] !== T || Y[37] !== Z || Y[38] !== ei || Y[39] !== ek || Y[40] !== F || Y[41] !== eT || Y[42] !== eN || Y[43] !== eo ? (P = e => {
                    if (e.preventDefault(), !ek.isPending && (!eg || e.currentTarget.reportValidity())) {
                        if (eN) return void Z();
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
                }, Y[30] = eI, Y[31] = e_, Y[32] = ew, Y[33] = eg, Y[34] = S, Y[35] = M, Y[36] = T, Y[37] = Z, Y[38] = ei, Y[39] = ek, Y[40] = F, Y[41] = eT, Y[42] = eN, Y[43] = eo, Y[44] = P) : P = Y[44];
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
                }) : es, Y[54] = ek.isSuccess, Y[55] = es, Y[56] = L) : L = Y[56], Y[57] !== L ? (E = (0, o.jsx)(p.d, {
                    children: L
                }), Y[57] = L, Y[58] = E) : E = Y[58], Y[59] !== eE ? (z = null != eE ? (0, o.jsx)(p.c, {
                    children: eE
                }) : void 0, Y[59] = eE, Y[60] = z) : z = Y[60], Y[61] !== E || Y[62] !== z ? (U = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: E,
                        subtitle: z,
                        titleSize: "dialog"
                    })
                }), Y[61] = E, Y[62] = z, Y[63] = U) : U = Y[63], Y[64] !== eI || Y[65] !== e_ || Y[66] !== ew || Y[67] !== C || Y[68] !== eg || Y[69] !== eh || Y[70] !== S || Y[71] !== M || Y[72] !== T || Y[73] !== ey || Y[74] !== ev || Y[75] !== ek.isSuccess || Y[76] !== eS || Y[77] !== el || Y[78] !== R ? (q = ek.isSuccess ? (0, o.jsx)(k, {
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
                }) : S && null != eI ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eg && null != eI.explanation ? (0, o.jsx)(k, {
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
                    }) : null, null != eI.subtext ? (0, o.jsx)(k, {
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
                }) : T ? (0, o.jsx)(k, {
                    children: (eg ? eI?.link_explanation ?? eI?.explanation : eI?.link_explanation ?? eI?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report",
                        description: "Body shown when a Codex thread report reason needs an external form"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [M ? (0, o.jsx)(k, {
                        children: eI?.subtext
                    }) : null, M ? null : (0, o.jsx)(v, {
                        reasons: R,
                        selectedReasonId: eS,
                        setSelectedReasonId: eM
                    })]
                }), Y[64] = eI, Y[65] = e_, Y[66] = ew, Y[67] = C, Y[68] = eg, Y[69] = eh, Y[70] = S, Y[71] = M, Y[72] = T, Y[73] = ey, Y[74] = ev, Y[75] = ek.isSuccess, Y[76] = eS, Y[77] = el, Y[78] = R, Y[79] = q) : q = Y[79], Y[80] !== ek.isError ? (V = ek.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again",
                        description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                    })
                }) : null, Y[80] = ek.isError, Y[81] = V) : V = Y[81], Y[82] !== ey || Y[83] !== ev || Y[84] !== en || Y[85] !== eo ? (G = null != eo || ey || ev ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), Y[82] = ey, Y[83] = ev, Y[84] = en, Y[85] = eo, Y[86] = G) : G = Y[86], Y[87] !== q || Y[88] !== V || Y[89] !== G ? (W = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [q, V, G]
                }), Y[87] = q, Y[88] = V, Y[89] = G, Y[90] = W) : W = Y[90], Y[91] !== eI || Y[92] !== eB || Y[93] !== X || Y[94] !== ek.isPending || Y[95] !== ek.isSuccess ? (Q = null == eI && null == X || ek.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ek.isPending,
                    type: "button",
                    onClick: eB,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back",
                        description: "Back button for Codex thread report reason selection"
                    })
                }), Y[91] = eI, Y[92] = eB, Y[93] = X, Y[94] = ek.isPending, Y[95] = ek.isSuccess, Y[96] = Q) : Q = Y[96], Y[97] !== eL || Y[98] !== M || Y[99] !== T || Y[100] !== eP || Y[101] !== eR || Y[102] !== ek.isPending || Y[103] !== eN ? ($ = !M || eN ? (0, o.jsx)(f.a, {
                    color: "primary",
                    disabled: eP,
                    loading: ek.isPending,
                    type: T ? "button" : "submit",
                    onClick: T ? eL : void 0,
                    children: (0, o.jsx)(y, {
                        close: eN,
                        isLinkStep: T,
                        isSubmitStep: eR
                    })
                }) : null, Y[97] = eL, Y[98] = M, Y[99] = T, Y[100] = eP, Y[101] = eR, Y[102] = ek.isPending, Y[103] = eN, Y[104] = $) : $ = Y[104], Y[105] !== Q || Y[106] !== $ ? (K = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [Q, $]
                    })
                }), Y[105] = Q, Y[106] = $, Y[107] = K) : K = Y[107], Y[108] !== eA || Y[109] !== U || Y[110] !== W || Y[111] !== K ? (H = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eA,
                    children: [U, W, K]
                }), Y[108] = eA, Y[109] = U, Y[110] = W, Y[111] = K, Y[112] = H) : H = Y[112], Y[113] !== ep || Y[114] !== ef || Y[115] !== eD || Y[116] !== A || Y[117] !== H ? (J = (0, o.jsx)(p.a, {
                    open: !0,
                    onOpenChange: eD,
                    contentProps: A,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: H
                }), Y[113] = ep, Y[114] = ef, Y[115] = eD, Y[116] = A, Y[117] = H, Y[118] = J) : J = Y[118], J
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("iTtm"),
            n = a("bg18"),
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
                    if (m && await (0, n.og)(u.subarray(0, n.$b)) !== "text") throw Error("File is not text");
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