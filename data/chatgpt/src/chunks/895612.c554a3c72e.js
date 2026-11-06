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
            u = a("Sm6l"),
            f = a("JNtf"),
            m = a("mUDD"),
            p = a("HOLv"),
            g = a("zLIa");

        function h(e) {
            "Enter" === e.key && e.metaKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit())
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, b, x, y, v, w, k, j, _, S, C, M, T, F, R, I, N, O, P, D, B, A, E, z, L = (0, n.c)(93),
                    {
                        belowFreeformContent: U,
                        belowCategoryOptions: q,
                        closeOnSubmit: G,
                        freeformFeedbackRequired: W,
                        hideFreeformInput: V,
                        initialDetails: Q,
                        initialSelectedOptionId: X,
                        onClose: $,
                        onOptionSelect: K,
                        onSubmit: H,
                        onSave: J,
                        saveActionLabel: Y,
                        options: Z,
                        size: ee,
                        submitDisabled: et
                    } = e,
                    ea = void 0 === G ? "after-submit" : G,
                    eo = void 0 !== V && V,
                    en = void 0 === ee ? "wide" : ee,
                    ei = void 0 !== et && et,
                    el = (0, d.a)(),
                    [es, er] = (0, r.useState)(void 0 === Q ? "" : Q);
                L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {}, L[0] = t) : t = L[0];
                let [ed, ec] = (0, r.useState)(t), [eu, ef] = (0, r.useState)(null), [em, ep] = (0, r.useState)(X ?? null);
                L[1] !== ed || L[2] !== es || L[3] !== el || L[4] !== Z || L[5] !== em ? (a = Z.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === em
                })?.followUp, b = Object.entries(a?.questions ?? {}), L[10] !== es ? (x = es.trim(), L[10] = es, L[11] = x) : x = L[11], y = b.flatMap(e => {
                    let [t, a] = e, o = ed[t]?.trim();
                    return o ? [el.formatMessage(a) + "\n" + o] : []
                }), L[1] = ed, L[2] = es, L[3] = el, L[4] = Z, L[5] = em, L[6] = a, L[7] = b, L[8] = x, L[9] = y) : (a = L[6], b = L[7], x = L[8], y = L[9]), L[12] !== x || L[13] !== y ? (v = [x, ...y].filter(Boolean), L[12] = x, L[13] = y, L[14] = v) : v = L[14];
                let eg = v.join("\n\n");
                L[15] !== W || L[16] !== el ? (w = W ? el.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.required",
                    defaultMessage: "Share details (required)",
                    description: "Placeholder for a required freeform feedback details field"
                }) : el.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.optional",
                    defaultMessage: "Share details (optional)",
                    description: "Placeholder for an optional freeform feedback details field"
                }), L[15] = W, L[16] = el, L[17] = w) : w = L[17];
                let eh = w;
                L[18] !== el ? (k = el.formatMessage({
                    id: "feedbackFormDialog.optionsLabel",
                    defaultMessage: "Feedback options",
                    description: "Accessible label for feedback options"
                }), L[18] = el, L[19] = k) : k = L[19];
                let eb = k,
                    ex = null == em || W && 0 === eg.length;
                L[20] !== $ || L[21] !== eu ? (j = e => {
                    e || null != eu || $()
                }, L[20] = $, L[21] = eu, L[22] = j) : j = L[22];
                let ey = j;
                L[23] !== ea || L[24] !== ex || L[25] !== $ || L[26] !== J || L[27] !== H || L[28] !== eu || L[29] !== eg || L[30] !== em || L[31] !== ei ? (_ = async e => {
                    if (null == em || null != eu || ex || e === H && ei) return;
                    if ("immediate" === ea) {
                        !1 !== e({
                            selectedOptionId: em,
                            details: eg
                        }) && $();
                        return
                    }
                    ef(e === J ? "save" : "submit");
                    let t = !1;
                    await (async () => {
                        t = await e({
                            selectedOptionId: em,
                            details: eg
                        }) !== !1
                    })().finally(() => {
                        ef(null)
                    }), t && $()
                }, L[23] = ea, L[24] = ex, L[25] = $, L[26] = J, L[27] = H, L[28] = eu, L[29] = eg, L[30] = em, L[31] = ei, L[32] = _) : _ = L[32];
                let ev = _;
                L[33] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.submit",
                    defaultMessage: "Submit",
                    description: "Label for the button that submits feedback"
                }), L[33] = S) : S = L[33];
                let ew = S;
                L[34] !== Y ? (C = Y ?? (0, o.jsx)(c.a, {
                    id: "feedbackFormDialog.saveLocally",
                    defaultMessage: "Save locally…",
                    description: "Button that saves the selected feedback and diagnostics to a local ZIP file without sending them"
                }), L[34] = Y, L[35] = C) : C = L[35];
                let ek = C;
                L[36] !== J || L[37] !== Y || L[38] !== ek ? (M = null != J && null != Y ? [ek, ew] : null, L[36] = J, L[37] = Y, L[38] = ek, L[39] = M) : M = L[39];
                let ej = M;
                if (L[40] !== ev || L[41] !== H ? (T = e => {
                        e.preventDefault(), ev(H)
                    }, L[40] = ev, L[41] = H, L[42] = T) : T = L[42], L[43] === Symbol.for("react.memo_cache_sentinel") ? (F = (0, o.jsx)(m.e, {
                        children: (0, o.jsx)(m.d, {
                            title: (0, o.jsx)(f.d, {
                                children: (0, o.jsx)(c.a, {
                                    id: "feedbackFormDialog.title",
                                    defaultMessage: "Share feedback",
                                    description: "Title for feedback dialog"
                                })
                            }),
                            titleSize: "dialog"
                        })
                    }), L[43] = F) : F = L[43], L[44] !== es || L[45] !== K || L[46] !== Z || L[47] !== em) {
                    let e;
                    L[49] !== es || L[50] !== K || L[51] !== em ? (e = e => {
                        let t = em === e.id,
                            a = t ? i.a : l.a;
                        return (0, o.jsxs)("button", {
                            type: "button",
                            role: "radio",
                            "aria-checked": t,
                            onClick: () => {
                                ep(e.id), K?.({
                                    details: es.trim(),
                                    selectedOptionId: e.id
                                })
                            },
                            className: (0, s.b)("border-default cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                            children: [(0, o.jsx)(p.a, {
                                asset: a,
                                "aria-hidden": !1
                            }), (0, o.jsx)(c.a, {
                                ...e.label
                            })]
                        }, e.id)
                    }, L[49] = es, L[50] = K, L[51] = em, L[52] = e) : e = L[52], R = Z.map(e), L[44] = es, L[45] = K, L[46] = Z, L[47] = em, L[48] = R
                } else R = L[48];
                L[53] !== eb || L[54] !== R ? (I = (0, o.jsx)("div", {
                    role: "radiogroup",
                    "aria-label": eb,
                    className: "flex flex-wrap gap-2",
                    children: R
                }), L[53] = eb, L[54] = R, L[55] = I) : I = L[55];
                let e_ = null != em && q;
                L[56] !== ed || L[57] !== a || L[58] !== b ? (N = null != a && (0, o.jsxs)("fieldset", {
                    className: "min-w-0",
                    children: [(0, o.jsx)("legend", {
                        className: "mb-2 text-sm text-secondary",
                        children: (0, o.jsx)(c.a, {
                            ...a.introduction
                        })
                    }), (0, o.jsx)("div", {
                        className: "grid grid-cols-1 gap-3",
                        children: b.map(e => {
                            let [t, a] = e;
                            return (0, o.jsxs)("label", {
                                className: "flex min-w-0 flex-col gap-1 text-sm",
                                children: [(0, o.jsx)("span", {
                                    children: (0, o.jsx)(c.a, {
                                        ...a
                                    })
                                }), (0, o.jsx)(g.c, {
                                    rows: 2,
                                    value: ed[t] ?? "",
                                    onKeyDown: h,
                                    onChange: e => {
                                        let a = e.target.value;
                                        ec(e => ({
                                            ...e,
                                            [t]: a
                                        }))
                                    }
                                })]
                            }, t)
                        })
                    })]
                }), L[56] = ed, L[57] = a, L[58] = b, L[59] = N) : N = L[59], L[60] !== es || L[61] !== eh || L[62] !== a || L[63] !== eo ? (O = eo ? null : (0, o.jsxs)("label", {
                    className: "flex min-w-0 flex-col gap-1 text-sm",
                    children: [null != a && (0, o.jsx)("span", {
                        children: (0, o.jsx)(c.a, {
                            ...a.otherDetailsLabel
                        })
                    }), (0, o.jsx)(g.c, {
                        autoFocus: null == a,
                        rows: null == a ? 5 : 2,
                        placeholder: null == a ? eh : void 0,
                        "aria-label": null == a ? eh : void 0,
                        onKeyDown: h,
                        value: es,
                        onChange: e => {
                            er(e.target.value)
                        }
                    })]
                }), L[60] = es, L[61] = eh, L[62] = a, L[63] = eo, L[64] = O) : O = L[64], L[65] !== U || L[66] !== I || L[67] !== e_ || L[68] !== N || L[69] !== O ? (P = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.f, {
                        className: "gap-3",
                        children: [I, e_, N, O, U]
                    })
                }), L[65] = U, L[66] = I, L[67] = e_, L[68] = N, L[69] = O, L[70] = P) : P = L[70], L[71] !== ev || L[72] !== ex || L[73] !== J || L[74] !== ej || L[75] !== eu || L[76] !== ek ? (D = null != J ? (0, o.jsx)(u.a, {
                    color: "secondary",
                    disabled: ex || null != eu,
                    loading: "save" === eu,
                    sizingLabels: ej ?? ek,
                    type: "button",
                    onClick: () => {
                        ev(J)
                    },
                    children: ek
                }) : null, L[71] = ev, L[72] = ex, L[73] = J, L[74] = ej, L[75] = eu, L[76] = ek, L[77] = D) : D = L[77];
                let eS = ei || ex || null != eu,
                    eC = "submit" === eu,
                    eM = ej ?? ew;
                return L[78] !== eS || L[79] !== eC || L[80] !== eM ? (B = (0, o.jsx)(u.a, {
                    color: "primary",
                    disabled: eS,
                    loading: eC,
                    sizingLabels: eM,
                    type: "submit",
                    children: ew
                }), L[78] = eS, L[79] = eC, L[80] = eM, L[81] = B) : B = L[81], L[82] !== D || L[83] !== B ? (A = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        expandSingleButton: !1,
                        children: [D, B]
                    })
                }), L[82] = D, L[83] = B, L[84] = A) : A = L[84], L[85] !== T || L[86] !== P || L[87] !== A ? (E = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-2",
                    size: "viewport",
                    onSubmit: T,
                    children: [F, P, A]
                }), L[85] = T, L[86] = P, L[87] = A, L[88] = E) : E = L[88], L[89] !== ey || L[90] !== en || L[91] !== E ? (z = (0, o.jsx)(f.a, {
                    open: !0,
                    onOpenChange: ey,
                    size: en,
                    children: E
                }), L[89] = ey, L[90] = en, L[91] = E, L[92] = z) : z = L[92], z
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
            c = a("Sm6l"),
            u = a("bqtn"),
            f = a("bf6R"),
            m = a("UxN3"),
            p = a("j9wQ");

        function g(e) {
            let t, a, l, r, d, m = (0, n.c)(14),
                {
                    children: p,
                    disabled: g,
                    triggerRef: b
                } = e,
                x = void 0 !== g && g,
                y = (0, s.a)();
            m[0] !== y ? (t = y.formatMessage(h.imageMenu), m[0] = y, m[1] = t) : t = m[1];
            let v = t;
            return m[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.ad, {}), m[2] = a) : a = m[2], m[3] !== x || m[4] !== v || m[5] !== b ? (l = (0, o.jsx)(c.a, {
                ref: b,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), m[3] = x, m[4] = v, m[5] = b, m[6] = l) : l = m[6], m[7] !== v || m[8] !== l ? (r = (0, o.jsx)(i.a, {
                content: v,
                children: l
            }), m[7] = v, m[8] = l, m[9] = r) : r = m[9], m[10] !== p || m[11] !== x || m[12] !== r ? (d = (0, o.jsx)(u.a, {
                disabled: x,
                align: "end",
                side: "bottom",
                triggerButton: r,
                children: p
            }), m[10] = p, m[11] = x, m[12] = r, m[13] = d) : d = m[13], d
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
        a.d(t, {}, {
            a: g,
            b: function(e) {
                let t, a, d, b, x, y, v, w, k, j, _, S, C, M, T, F, R = (0, n.c)(97),
                    {
                        disabled: I,
                        hideUnselectedRating: N,
                        isAnimated: O,
                        menuItems: P,
                        rating: D,
                        onRate: B,
                        shouldRestoreFocus: A,
                        variant: E
                    } = e,
                    z = void 0 !== I && I,
                    L = void 0 !== N && N,
                    U = void 0 !== O && O,
                    q = void 0 === E ? "response" : E,
                    G = (0, s.a)(),
                    W = (0, l.useRef)(null),
                    V = (0, l.useRef)(null),
                    Q = (0, l.useRef)(!1);
                R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    Q.current && ((V.current ?? W.current)?.focus(), Q.current = !1)
                }, R[0] = t) : t = R[0], R[1] !== D ? (a = [D], R[1] = D, R[2] = a) : a = R[2], (0, l.useLayoutEffect)(t, a), R[3] !== B || R[4] !== D || R[5] !== A ? (d = e => {
                    Q.current = A?.(D === e ? null : e) ?? !0, B(e)
                }, R[3] = B, R[4] = D, R[5] = A, R[6] = d) : d = R[6];
                let X = d;
                if ("imageTurn" === q || "imageOverlay" === q) {
                    let e, t, a, n, l, s = "imageOverlay" === q ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === q ? "mediaOverlay" : "ghost";
                    R[7] !== G || R[8] !== U ? (e = U ? G.formatMessage(h.likeGif) : G.formatMessage(h.likeImage), R[7] = G, R[8] = U, R[9] = e) : e = R[9];
                    let d = e;
                    R[10] !== G || R[11] !== U ? (t = U ? G.formatMessage(h.dislikeGif) : G.formatMessage(h.dislikeImage), R[10] = G, R[11] = U, R[12] = t) : t = R[12];
                    let u = t;
                    return R[13] !== z || R[14] !== d || R[15] !== X || R[16] !== D || R[17] !== s || R[18] !== r || R[19] !== q ? (a = "thumbsDown" !== D ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(c.a, {
                            ref: W,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === D,
                            color: "thumbsUp" === D ? s : r,
                            disabled: z || "thumbsUp" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), X("thumbsUp")
                            },
                            children: "thumbsUp" === D ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {})
                        })
                    }) : null, R[13] = z, R[14] = d, R[15] = X, R[16] = D, R[17] = s, R[18] = r, R[19] = q, R[20] = a) : a = R[20], R[21] !== z || R[22] !== u || R[23] !== X || R[24] !== D || R[25] !== s || R[26] !== r || R[27] !== q ? (n = "thumbsUp" !== D ? (0, o.jsx)(i.a, {
                        content: u,
                        children: (0, o.jsx)(c.a, {
                            ref: W,
                            "aria-label": u,
                            "aria-pressed": "thumbsDown" === D,
                            color: "thumbsDown" === D ? s : r,
                            disabled: z || "thumbsDown" === D,
                            size: "imageOverlay" === q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === q && e.stopPropagation(), X("thumbsDown")
                            },
                            children: "thumbsDown" === D ? (0, o.jsx)(f.Ti, {}) : (0, o.jsx)(f.Ri, {})
                        })
                    }) : null, R[21] = z, R[22] = u, R[23] = X, R[24] = D, R[25] = s, R[26] = r, R[27] = q, R[28] = n) : n = R[28], R[29] !== a || R[30] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), R[29] = a, R[30] = n, R[31] = l) : l = R[31], l
                }
                if ("imageViewerMenu" === q || "imageViewerSubmenu" === q) {
                    let e, t, a, n;
                    R[32] !== L || R[33] !== U || R[34] !== X || R[35] !== D ? (e = L && "thumbsDown" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsUp" === D ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {}),
                        onSelect: () => X("thumbsUp"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...h.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.likeImage
                        })
                    }), R[32] = L, R[33] = U, R[34] = X, R[35] = D, R[36] = e) : e = R[36], R[37] !== L || R[38] !== U || R[39] !== X || R[40] !== D ? (t = L && "thumbsUp" === D ? null : (0, o.jsx)(u.c.Item, {
                        leftIcon: "thumbsDown" === D ? (0, o.jsx)(f.Ti, {}) : (0, o.jsx)(f.Ri, {}),
                        onSelect: () => X("thumbsDown"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...h.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.dislikeImage
                        })
                    }), R[37] = L, R[38] = U, R[39] = X, R[40] = D, R[41] = t) : t = R[41], R[42] !== e || R[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), R[42] = e, R[43] = t, R[44] = a) : a = R[44];
                    let i = a;
                    if ("imageViewerSubmenu" === q) {
                        let e, t, a;
                        return R[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...h.imageFeedback
                        }), R[45] = e) : e = R[45], R[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(m.b, {
                            icon: {
                                16: f.Yi,
                                20: f.Zi
                            }
                        }), R[46] = t) : t = R[46], R[47] !== z || R[48] !== i ? (a = (0, o.jsx)(p.q, {
                            ref: V,
                            disabled: z,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), R[47] = z, R[48] = i, R[49] = a) : a = R[49], a
                    }
                    return R[50] !== z || R[51] !== i || R[52] !== P ? (n = (0, o.jsxs)(g, {
                        triggerRef: W,
                        disabled: z,
                        children: [P, i]
                    }), R[50] = z, R[51] = i, R[52] = P, R[53] = n) : n = R[53], n
                }
                if (null != D) {
                    let e, t, a, n, l, s, r = "thumbsUp" === D;
                    R[54] !== r ? (e = r ? {
                        16: f.Wi,
                        20: f.Xi
                    } : {
                        16: f.Si,
                        20: f.Ti
                    }, R[54] = r, R[55] = e) : e = R[55];
                    let d = e;
                    R[56] !== G || R[57] !== r ? (t = G.formatMessage(r ? h.removeGoodResponse : h.removeBadResponse), R[56] = G, R[57] = r, R[58] = t) : t = R[58];
                    let u = t;
                    return R[59] !== X || R[60] !== D ? (a = () => X(D), R[59] = X, R[60] = D, R[61] = a) : a = R[61], R[62] !== d ? (n = (0, o.jsx)(m.b, {
                        icon: d
                    }), R[62] = d, R[63] = n) : n = R[63], R[64] !== z || R[65] !== u || R[66] !== a || R[67] !== n ? (l = (0, o.jsx)(c.a, {
                        ref: W,
                        type: "button",
                        "aria-label": u,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: z,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), R[64] = z, R[65] = u, R[66] = a, R[67] = n, R[68] = l) : l = R[68], R[69] !== u || R[70] !== l ? (s = (0, o.jsx)(i.a, {
                        content: u,
                        children: l
                    }), R[69] = u, R[70] = l, R[71] = s) : s = R[71], s
                }
                R[72] !== G ? (b = G.formatMessage(h.feedback), R[72] = G, R[73] = b) : b = R[73];
                let $ = b;
                return R[74] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(m.b, {
                    icon: {
                        16: f.Yi,
                        20: f.Zi
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
                }), R[77] = $, R[78] = y, R[79] = v) : v = R[79], R[80] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsx)(m.b, {
                    icon: {
                        16: f.Ui,
                        20: f.Vi
                    }
                }), R[80] = w) : w = R[80], R[81] !== X ? (k = () => X("thumbsUp"), R[81] = X, R[82] = k) : k = R[82], R[83] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsx)(r.a, {
                    ...h.goodResponse
                }), R[83] = j) : j = R[83], R[84] !== k ? (_ = (0, o.jsx)(u.c.Item, {
                    leftIcon: w,
                    onSelect: k,
                    children: j
                }), R[84] = k, R[85] = _) : _ = R[85], R[86] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(m.b, {
                    icon: {
                        16: f.Qi,
                        20: f.Ri
                    }
                }), R[86] = S) : S = R[86], R[87] !== X ? (C = () => X("thumbsDown"), R[87] = X, R[88] = C) : C = R[88], R[89] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(r.a, {
                    ...h.badResponse
                }), R[89] = M) : M = R[89], R[90] !== C ? (T = (0, o.jsx)(u.c.Item, {
                    leftIcon: S,
                    onSelect: C,
                    children: M
                }), R[90] = C, R[91] = T) : T = R[91], R[92] !== z || R[93] !== v || R[94] !== _ || R[95] !== T ? (F = (0, o.jsxs)(u.a, {
                    disabled: z,
                    side: "top",
                    triggerButton: v,
                    children: [_, T]
                }), R[92] = z, R[93] = v, R[94] = _, R[95] = T, R[96] = F) : F = R[96], F
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
                let t, a, i, u, f, m, p = (0, n.c)(37),
                    {
                        onBackToFeedback: g,
                        onClose: h,
                        onCloseAutoFocus: b,
                        reportRequest: x,
                        adReport: y,
                        chatGptMessageId: v,
                        reportEntityType: w,
                        reportReasonsEntityType: k,
                        productArea: j,
                        successBody: _,
                        threadId: S,
                        title: C,
                        connectorId: M,
                        contentClassName: T
                    } = e,
                    F = "connector" === w ? M : S,
                    R = k ?? w;
                p[0] !== y || p[1] !== g || p[2] !== h ? (t = null == g ? void 0 : () => {
                    null == y && h(), g()
                }, p[0] = y, p[1] = g, p[2] = h, p[3] = t) : t = p[3], p[4] !== y?.queryKey || p[5] !== R ? (a = y?.queryKey ?? ["codex-thread-report-reasons", R], p[4] = y?.queryKey, p[5] = R, p[6] = a) : a = p[6], p[7] !== y || p[8] !== R || p[9] !== x ? (i = null == y ? () => (async function(e, t) {
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
                }, p[7] = y, p[8] = R, p[9] = x, p[10] = i) : i = p[10];
                let I = null != y ? 0 : void 0,
                    N = null != y,
                    O = null != y,
                    P = null != y ? "chatgpt" : void 0;
                p[11] !== y || p[12] !== v || p[13] !== j || p[14] !== w || p[15] !== F || p[16] !== x ? (u = e => {
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
                        entityType: w,
                        reasonId: t.id,
                        threadId: F
                    }, x, v, j)
                }, p[11] = y, p[12] = v, p[13] = j, p[14] = w, p[15] = F, p[16] = x, p[17] = u) : u = p[17];
                let D = null == x ? void 0 : c;
                return p[18] !== y?.title || p[19] !== w || p[20] !== C ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: w,
                    title: C
                }), p[18] = y?.title, p[19] = w, p[20] = C, p[21] = f) : f = p[21], p[22] !== T || p[23] !== h || p[24] !== b || p[25] !== _ || p[26] !== t || p[27] !== f || p[28] !== a || p[29] !== i || p[30] !== I || p[31] !== N || p[32] !== O || p[33] !== P || p[34] !== u || p[35] !== D ? (m = (0, o.jsx)(s.ReportDialog, {
                    onBack: t,
                    onClose: h,
                    onCloseAutoFocus: b,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: I,
                    includeServerFields: N,
                    preventCloseWhileSubmitting: O,
                    dialogVariant: P,
                    contentClassName: T,
                    submitReport: u,
                    openExternalForm: D,
                    successBody: _,
                    title: f
                }), p[22] = T, p[23] = h, p[24] = b, p[25] = _, p[26] = t, p[27] = f, p[28] = a, p[29] = i, p[30] = I, p[31] = N, p[32] = O, p[33] = P, p[34] = u, p[35] = D, p[36] = m) : m = p[36], m
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
                    insertPosition: m,
                    key: p,
                    path: g,
                    syncOpenTabs: h,
                    target: b,
                    title: x
                } = t, y = `${f}:${u}:${p}`;
                return e.set(s.b, y, {
                    content: c,
                    path: g,
                    save: null
                }), !!a(e, g, {
                    revealAndFocus: d,
                    hostId: f,
                    insertPosition: m,
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
                        key: p,
                        title: x
                    },
                    syncOpenTabs: h,
                    tabId: l.a.PLAN,
                    target: b
                }) && ((0, i.getThreadPanelTabController)((0, i.d)(e, l.a.PLAN) ?? "right").updateTab(e, l.a.PLAN, {
                    icon: (0, o.jsx)(n.a, {
                        className: "shrink-0",
                        asset: r.a
                    }),
                    title: x
                }), e.set(s.a, {
                    key: p,
                    tabId: l.a.PLAN
                }), !0)
            }
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("d0tz"), a("tl5a");
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
                revealAndFocus: m = !0,
                insertPosition: p,
                tabId: g = i.a.PLAN
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e.set(l.a, {
                key: c,
                tabId: g
            }), (0, o.h)(e, s, {
                revealAndFocus: m,
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
                insertPosition: p,
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
            a: () => N
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
        var f = a("Sm6l"),
            m = a("uuN8"),
            p = a("HOLv"),
            g = a("UxN3"),
            h = a("POXM"),
            b = a("zEpR"),
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
            w = a("HWQc"),
            k = a("yGJW");
        a("tSEg");
        var j = a("sbaW"),
            _ = a("V8uZ"),
            S = a("aepO"),
            C = a("gBCz");
        a("Y05g");
        var M = a("umSm"),
            T = a("UUD2"),
            F = a("xwJZ"),
            R = a("vEDM"),
            I = a("zu6X");

        function N(e) {
            let t, a = (0, n.c)(4);
            if (!1 === e.showOpenButton) {
                let t;
                return a[0] !== e ? (t = (0, o.jsx)(O, {
                    ...e
                }), a[0] = e, a[1] = t) : t = a[1], t
            }
            return a[2] !== e ? (t = (0, o.jsxs)(o.Fragment, {
                children: [null, (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(O, {
                        ...e
                    })
                })]
            }), a[2] = e, a[3] = t) : t = a[3], t
        }

        function O(e) {
            let t, a, N, O, D, B, A, E, z, L, U, q, G, W, V, Q, X, $, K, H, J, Y, Z, ee, et, ea, eo, en, ei, el = (0, n.c)(106),
                {
                    item: es,
                    conversationId: er,
                    cwd: ed,
                    hideCodeBlocks: ec,
                    defaultCollapsed: eu,
                    hasArtifacts: ef,
                    reportEntityType: em,
                    showOpenButton: ep,
                    turnId: eg,
                    isThreadPreview: eh,
                    isThreadPreviewCollapsed: eb,
                    onOpenInSidePanel: ex
                } = e,
                ey = void 0 !== ec && ec,
                ev = void 0 !== ef && ef,
                ew = void 0 === em ? "thread" : em,
                ek = void 0 !== eh && eh,
                ej = void 0 !== eb && eb,
                [e_, eS] = (0, d.useState)(void 0 !== eu && eu),
                eC = (0, r.z)(j.threadHostId$),
                eM = (0, c.a)(),
                eT = (0, r.z)(k.c),
                eF = (0, r.z)(h.b);
            (void 0 === ep || ep) && es.completed, el[0] !== es.completed || el[1] !== es.content ? (t = es.completed && es.content.trim().length > 0, el[0] = es.completed, el[1] = es.content, el[2] = t) : t = el[2];
            let eR = t;
            el[3] !== es.completed || el[4] !== es.content ? (a = es.completed && es.content.trim().length > 0, el[3] = es.completed, el[4] = es.content, el[5] = a) : a = el[5];
            let eI = eR && !0,
                eN = a && !0,
                eO = eF && null != eg && null != eT.submitCodexAnalyticsEvent && !0;
            el[6] !== eM ? (N = eM.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), el[6] = eM, el[7] = N) : N = el[7];
            let eP = N;
            el[8] !== eM ? (O = eM.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel",
                description: "Tooltip text for button that opens the plan in the side panel"
            }), el[8] = eM, el[9] = O) : O = el[9];
            let eD = O;
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
            el[17] !== er || el[18] !== es.content || el[19] !== eT || el[20] !== eg ? (E = e => (null != eg && eT.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: er,
                turnId: eg
            }), (0, S.b)(es.content, e)), el[17] = er, el[18] = es.content, el[19] = eT, el[20] = eg, el[21] = E) : E = el[21];
            let ez = E,
                eL = ek ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            el[22] !== ek || el[23] !== ej || el[24] !== ex ? (z = ek && !ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, el[22] = ek, el[23] = ej, el[24] = ex, el[25] = z) : z = el[25], el[26] !== eB || el[27] !== ej || el[28] !== ex ? (L = ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eB,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: ex,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-secondary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(x, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, el[26] = eB, el[27] = ej, el[28] = ex, el[29] = L) : L = el[29];
            let eU = ek ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            el[30] !== eU ? (U = (0, l.b)("text-base leading-tight", eU), el[30] = eU, el[31] = U) : U = el[31], el[32] !== ek ? (q = ek ? (0, o.jsx)(p.a, {
                className: "shrink-0",
                asset: I.a
            }) : null, el[32] = ek, el[33] = q) : q = el[33], el[34] !== es.completed ? (G = es.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(M.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), el[34] = es.completed, el[35] = G) : G = el[35], el[36] !== U || el[37] !== q || el[38] !== G ? (W = (0, o.jsxs)("span", {
                className: U,
                children: [q, G]
            }), el[36] = U, el[37] = q, el[38] = G, el[39] = W) : W = el[39];
            let eq = ej && "hidden";
            el[40] !== eq ? (V = (0, l.b)("relative z-20 flex items-center gap-1", eq), el[40] = eq, el[41] = V) : V = el[41];
            el[42] !== eP || el[43] !== eE || el[44] !== eN ? (Q = eN ? (0, o.jsx)(i.a, {
                content: eP,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eP,
                    onClick: eE,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: F.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[42] = eP, el[43] = eE, el[44] = eN, el[45] = Q) : Q = el[45], el[46] !== ez || el[47] !== eI ? (X = eI ? (0, o.jsx)(m.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: ez
            }) : null, el[46] = ez, el[47] = eI, el[48] = X) : X = el[48], el[49] !== er || el[50] !== ev || el[51] !== ew || el[52] !== eO || el[53] !== eg ? ($ = eO ? (0, o.jsx)(T.a, {
                hasArtifacts: ev,
                reportEntityType: ew,
                threadId: er,
                turnId: eg
            }) : null, el[49] = er, el[50] = ev, el[51] = ew, el[52] = eO, el[53] = eg, el[54] = $) : $ = el[54], el[55] !== ex || el[56] !== eD ? (K = null != ex ? (0, o.jsx)(i.a, {
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
            }) : null, el[55] = ex, el[56] = eD, el[57] = K) : K = el[57], el[58] !== eA || el[59] !== e_ || el[60] !== ek ? (H = ek ? null : (0, o.jsx)(i.a, {
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
                    children: (0, o.jsx)(b.a, {
                        className: (0, l.b)("icon-2xs transition-transform", e_ ? "rotate-180" : "rotate-0")
                    })
                })
            }), el[58] = eA, el[59] = e_, el[60] = ek, el[61] = H) : H = el[61], el[62] !== ej || el[63] !== V || null !== el[64] || el[65] !== Q || el[66] !== X || el[67] !== $ || el[68] !== K || el[69] !== H ? (J = (0, o.jsxs)("div", {
                "aria-hidden": ej,
                className: V,
                children: [null, Q, X, $, K, H]
            }), el[62] = ej, el[63] = V, el[64] = null, el[65] = Q, el[66] = X, el[67] = $, el[68] = K, el[69] = H, el[70] = J) : J = el[70], el[71] !== L || el[72] !== W || el[73] !== J ? (Y = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [L, W, J]
            }), el[71] = L, el[72] = W, el[73] = J, el[74] = Y) : Y = el[74], el[75] !== er ? (Z = {
                [C.a]: er
            }, el[75] = er, el[76] = Z) : Z = el[76];
            let eG = ej || void 0,
                eW = ek && !ej && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            el[77] !== eW ? (ee = (0, l.b)("relative overflow-hidden", eW), el[77] = eW, el[78] = ee) : ee = el[78];
            let eV = ej || void 0;
            el[79] !== e_ || el[80] !== ek || el[81] !== ej ? (et = ek ? {
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
            }, el[79] = e_, el[80] = ek, el[81] = ej, el[82] = et) : et = el[82];
            let eQ = !es.completed;
            return el[83] !== er || el[84] !== ed || el[85] !== ey || el[86] !== eC || el[87] !== es.content || el[88] !== eQ ? (ea = (0, o.jsx)(w.c, {
                markdown: es.content,
                conversationId: er,
                hostId: eC,
                hideCodeBlocks: ey,
                isStreaming: eQ,
                cwd: ed
            }), el[83] = er, el[84] = ed, el[85] = ey, el[86] = eC, el[87] = es.content, el[88] = eQ, el[89] = ea) : ea = el[89], el[90] !== e_ || el[91] !== ek ? (eo = !ek && e_ ? (0, o.jsxs)(o.Fragment, {
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
            }) : null, el[90] = e_, el[91] = ek, el[92] = eo) : eo = el[92], el[93] !== Z || el[94] !== eG || el[95] !== ee || el[96] !== eV || el[97] !== et || el[98] !== ea || el[99] !== eo ? (en = (0, o.jsxs)(s.a.div, {
                ...Z,
                "aria-hidden": eG,
                className: ee,
                inert: eV,
                initial: !1,
                animate: et,
                transition: _.a,
                children: [ea, eo]
            }), el[93] = Z, el[94] = eG, el[95] = ee, el[96] = eV, el[97] = et, el[98] = ea, el[99] = eo, el[100] = en) : en = el[100], el[101] !== eL || el[102] !== z || el[103] !== Y || el[104] !== en ? (ei = (0, o.jsxs)(w.b, {
                className: eL,
                children: [z, Y, en]
            }), el[101] = eL, el[102] = z, el[103] = Y, el[104] = en, el[105] = ei) : ei = el[105], ei
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
            m = a("yGJW"),
            p = a("OWtl"),
            g = a("taaw");
        let h = "safety_or_legal_concern",
            b = {
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
                    id: h,
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
                    id: h,
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

        function w(e) {
            return null == e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, n.c)(14),
                    {
                        hasArtifacts: s,
                        reportEntityType: x,
                        renderControl: k,
                        threadId: j,
                        turnId: _
                    } = e,
                    S = void 0 !== s && s,
                    C = void 0 === x ? "thread" : x,
                    M = (0, i.y)(p.a),
                    [T, F] = (0, l.useState)(null),
                    R = (0, i.z)(m.c);
                if (a[0] !== S || a[1] !== R || a[2] !== k || a[3] !== C || a[4] !== M || a[5] !== T || a[6] !== j || a[7] !== _) {
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
                                    o === h && ((0, d.b)(M, c.a), i(a, e))
                                },
                                onSubmit: t => {
                                    let {
                                        details: a,
                                        selectedOptionId: o
                                    } = t;
                                    return o === h ? void i(a, e) : R.submitCodexAnalyticsEvent?.({
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
                                    n(t, e, h)
                                },
                                reportEntityType: C,
                                threadId: j
                            })
                        };
                    a[9] !== R || a[10] !== M || a[11] !== j || a[12] !== _ ? (e = e => {
                        if (F(e), null == e) return;
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
                            rating: null == T ? null : b[T],
                            onRate: e => {
                                let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                    a = T === t ? null : t;
                                l(a), null != a && n(a)
                            },
                            shouldRestoreFocus: w
                        };
                    t = null != k ? k(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(f.b, {
                        ...s
                    }), a[0] = S, a[1] = R, a[2] = k, a[3] = C, a[4] = M, a[5] = T, a[6] = j, a[7] = _, a[8] = t
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

        function m(e) {
            let t, a, c, u, m, h = (0, n.c)(13),
                {
                    entries: b
                } = e,
                [x, y] = (0, l.useState)(!1),
                v = b.length > 8;
            h[0] !== b || h[1] !== x || h[2] !== v ? (t = v && !x ? b.slice(0, 8) : b, h[0] = b, h[1] = x, h[2] = v, h[3] = t) : t = h[3];
            let w = t;
            return h[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)("div", {
                className: "mb-2 font-medium text-secondary",
                children: (0, o.jsx)(s.a, {
                    id: "markdown.metadata.title",
                    defaultMessage: "Metadata",
                    description: "Title for rendered Markdown file metadata"
                })
            }), h[4] = a) : a = h[4], h[5] !== w ? (c = (0, o.jsx)(g, {
                entries: w
            }), h[5] = w, h[6] = c) : c = h[6], h[7] !== x || h[8] !== v ? (u = v ? (0, o.jsxs)("button", {
                type: "button",
                "aria-expanded": x,
                className: "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                onClick: () => {
                    y(p)
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
            }) : null, h[7] = x, h[8] = v, h[9] = u) : u = h[9], h[10] !== c || h[11] !== u ? (m = (0, o.jsxs)("div", {
                className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
                children: [a, c, u]
            }), h[10] = c, h[11] = u, h[12] = m) : m = h[12], m
        }

        function p(e) {
            return !e
        }

        function g(e) {
            let t, a, l, s = (0, n.c)(7),
                {
                    className: r,
                    entries: d
                } = e;
            return s[0] !== r ? (t = (0, i.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", r), s[0] = r, s[1] = t) : t = s[1], s[2] !== d ? (a = d.map(h), s[2] = d, s[3] = a) : a = s[3], s[4] !== t || s[5] !== a ? (l = (0, o.jsx)("dl", {
                className: t,
                children: a
            }), s[4] = t, s[5] = a, s[6] = l) : l = s[6], l
        }

        function h(e, t) {
            return (0, o.jsxs)("div", {
                className: "contents",
                children: [(0, o.jsx)("dt", {
                    className: "truncate font-mono text-secondary",
                    title: e.key,
                    children: e.key
                }), (0, o.jsx)("dd", {
                    className: "min-w-0 text-default",
                    children: (0, o.jsx)(b, {
                        value: e.value
                    })
                })]
            }, `${e.key}-${t}`)
        }

        function b(e) {
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
            a: m,
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
                        cwd: p,
                        hideCodeBlocks: g,
                        hostId: h,
                        isStreaming: b
                    } = e,
                    x = void 0 !== r && r,
                    y = void 0 === f ? null : f,
                    v = void 0 === p ? null : p,
                    w = void 0 !== b && b;
                s[0] !== x || s[1] !== d ? (t = x ? (0, c.a)(d) : null, s[0] = x, s[1] = d, s[2] = t) : t = s[2];
                let k = t,
                    j = k?.body ?? d;
                return s[3] !== k ? (a = null != k && k.entries.length > 0 ? (0, o.jsx)(m, {
                    entries: k.entries
                }) : null, s[3] = k, s[4] = a) : a = s[4], s[5] !== y || s[6] !== v || s[7] !== g || s[8] !== h || s[9] !== w || s[10] !== j ? (i = (0, o.jsx)(u.a, {
                    className: "text-size-chat",
                    conversationId: y,
                    hideCodeBlocks: g,
                    hostId: h,
                    isStreaming: w,
                    cwd: v,
                    children: j
                }), s[5] = y, s[6] = v, s[7] = g, s[8] = h, s[9] = w, s[10] = j, s[11] = i) : i = s[11], s[12] !== a || s[13] !== i ? (l = (0, o.jsxs)("div", {
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
            f = a("Sm6l"),
            m = a("JNtf"),
            p = a("mUDD"),
            g = a("Ot7V"),
            h = a("zLIa"),
            b = a("rvFo");

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

        function k(e, t) {
            return (!t || !e.has_details && (e.additional_fields?.length ?? 0) === 0) && (e.sub_reasons?.length ?? 0) === 0 && null == e.details_placeholder && null == e.link_attachment && null == e.subtext
        }
        a.d(t, {}, {
            ReportDialog: function(e) {
                let t, a, s, j, _, S, C, M, T, F, R, I, N, O, P, D, B, A, E, z, L, U, q, G, W, V, Q, X, $, K, H, J = (0, n.c)(125),
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
                        contentClassName: em
                    } = e,
                    ep = void 0 === ed ? b.b.ONE_MINUTE : ed,
                    eg = void 0 !== ec && ec,
                    eh = void 0 !== eu && eu,
                    eb = (0, d.a)();
                J[0] !== er ? (t = null == er ? {} : {
                    gcTime: er
                }, J[0] = er, J[1] = t) : t = J[1], J[2] !== ea || J[3] !== et || J[4] !== ep || J[5] !== t ? (a = {
                    queryKey: et,
                    queryFn: ea,
                    ...t,
                    staleTime: ep
                }, J[2] = ea, J[3] = et, J[4] = ep, J[5] = t, J[6] = a) : a = J[6];
                let {
                    data: ex,
                    isPending: ey,
                    isError: ev
                } = (0, i.a)(a);
                J[7] !== eo ? (s = {
                    mutationFn: eo
                }, J[7] = eo, J[8] = s) : s = J[8];
                let ew = (0, l.a)(s),
                    [ek, ej] = (0, r.useState)("");
                J[9] === Symbol.for("react.memo_cache_sentinel") ? (j = {}, J[9] = j) : j = J[9];
                let [e_, eS] = (0, r.useState)(j), [eC, eM] = (0, r.useState)(null);
                J[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], J[10] = _) : _ = J[10];
                let [eT, eF] = (0, r.useState)(_), eR = 0 === eT.length ? null : eT[eT.length - 1];
                J[11] !== eR || J[12] !== ex?.reasons ? (S = (null == eR ? ex?.reasons : eR.sub_reasons) ?? [], J[11] = eR, J[12] = ex?.reasons, J[13] = S) : S = J[13];
                let eI = S;
                J[14] !== eR?.additional_fields?.length || J[15] !== eR?.details_placeholder || J[16] !== eR?.has_details || J[17] !== eR?.link_attachment || J[18] !== eR?.subtext || J[19] !== eg || J[20] !== eC || J[21] !== eI ? (R = eI.find(e => e.id === eC) ?? null, M = (C = eR?.details_placeholder != null || eg && eR?.has_details === !0) || eg && (eR?.additional_fields?.length ?? 0) > 0, F = eR?.link_attachment != null, T = eR?.subtext != null && 0 === eI.length && !M && !F, I = M || null != R && k(R, eg), J[14] = eR?.additional_fields?.length, J[15] = eR?.details_placeholder, J[16] = eR?.has_details, J[17] = eR?.link_attachment, J[18] = eR?.subtext, J[19] = eg, J[20] = eC, J[21] = eI, J[22] = C, J[23] = M, J[24] = T, J[25] = F, J[26] = R, J[27] = I) : (C = J[22], M = J[23], T = J[24], F = J[25], R = J[26], I = J[27]);
                let eN = I,
                    eO = null == R || ey || ew.isPending,
                    eP = ew.isSuccess || ev,
                    eD = !eP && (eN && null == eo || !eN && !F && eO);
                J[28] !== Z || J[29] !== eh || J[30] !== ew.isPending ? (N = e => {
                    e || eh && ew.isPending || Z()
                }, J[28] = Z, J[29] = eh, J[30] = ew.isPending, J[31] = N) : N = J[31];
                let eB = N;
                J[32] !== eR || J[33] !== Y || J[34] !== eT ? (O = () => {
                    if (null == eR) return void Y?.();
                    let e = eT[eT.length - 1];
                    eF(x), eM(e?.id ?? null), ej(""), eS({})
                }, J[32] = eR, J[33] = Y, J[34] = eT, J[35] = O) : O = J[35];
                let eA = O;
                J[36] !== eR || J[37] !== e_ || J[38] !== ek || J[39] !== eg || J[40] !== M || J[41] !== T || J[42] !== F || J[43] !== Z || J[44] !== ei || J[45] !== ew || J[46] !== R || J[47] !== eT || J[48] !== eP || J[49] !== eo ? (P = e => {
                    if (e.preventDefault(), !ew.isPending && (!eg || e.currentTarget.reportValidity())) {
                        if (eP) return void Z();
                        if (!T) {
                            if (F && eR?.link_attachment != null) return null != ei ? void ei(eR.link_attachment) : void(0, g.f)({
                                href: eR.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (M && null != eR) {
                                if (null == eo) return;
                                ew.mutate({
                                    details: ek.trim(),
                                    reason: eR,
                                    path: eT,
                                    ...eg ? {
                                        additionalFields: e_
                                    } : {}
                                });
                                return
                            }
                            if (null != R) {
                                if (k(R, eg)) {
                                    if (null == eo) return;
                                    ew.mutate({
                                        details: "",
                                        reason: R,
                                        path: [...eT, R]
                                    });
                                    return
                                }
                                eF(e => [...e, R]), eM(null), ej(""), eS({})
                            }
                        }
                    }
                }, J[36] = eR, J[37] = e_, J[38] = ek, J[39] = eg, J[40] = M, J[41] = T, J[42] = F, J[43] = Z, J[44] = ei, J[45] = ew, J[46] = R, J[47] = eT, J[48] = eP, J[49] = eo, J[50] = P) : P = J[50];
                let eE = P;
                J[51] !== eR || J[52] !== ei ? (D = e => {
                    if (eR?.link_attachment != null) {
                        if (null != ei) return void ei(eR.link_attachment);
                        (0, g.e)({
                            event: e,
                            href: eR.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, J[51] = eR, J[52] = ei, J[53] = D) : D = J[53];
                let ez = D;
                J[54] !== eR || J[55] !== ex || J[56] !== ew.isSuccess ? (B = function(e) {
                    let {
                        activeReason: t,
                        isSuccess: a,
                        reportReasons: o
                    } = e;
                    return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
                }({
                    activeReason: eR,
                    reportReasons: ex,
                    isSuccess: ew.isSuccess
                }), J[54] = eR, J[55] = ex, J[56] = ew.isSuccess, J[57] = B) : B = J[57];
                let eL = B;
                return J[58] !== ee ? (A = {
                    onCloseAutoFocus: ee
                }, J[58] = ee, J[59] = A) : A = J[59], J[60] !== ew.isSuccess || J[61] !== es ? (E = ew.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report",
                    description: "Title shown after a safety or legal report is submitted"
                }) : es, J[60] = ew.isSuccess, J[61] = es, J[62] = E) : E = J[62], J[63] !== E ? (z = (0, o.jsx)(m.d, {
                    children: E
                }), J[63] = E, J[64] = z) : z = J[64], J[65] !== eL ? (L = null != eL ? (0, o.jsx)(m.c, {
                    children: eL
                }) : void 0, J[65] = eL, J[66] = L) : L = J[66], J[67] !== z || J[68] !== L ? (U = (0, o.jsx)(p.e, {
                    children: (0, o.jsx)(p.d, {
                        title: z,
                        subtitle: L,
                        titleSize: "dialog"
                    })
                }), J[67] = z, J[68] = L, J[69] = U) : U = J[69], J[70] !== eR || J[71] !== e_ || J[72] !== ek || J[73] !== C || J[74] !== eg || J[75] !== eb || J[76] !== M || J[77] !== T || J[78] !== F || J[79] !== ey || J[80] !== ev || J[81] !== ew.isSuccess || J[82] !== eC || J[83] !== el || J[84] !== eI ? (q = ew.isSuccess ? (0, o.jsx)(w, {
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
                }) : M && null != eR ? (0, o.jsxs)(p.f, {
                    className: "gap-3",
                    children: [eg && null != eR.explanation ? (0, o.jsx)(w, {
                        children: eR.explanation
                    }) : null, C ? (0, o.jsx)(h.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: eR.details_placeholder ?? void 0,
                        "aria-label": eb.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details",
                            description: "Accessible label for Codex thread report details field"
                        }),
                        value: ek,
                        onChange: e => {
                            ej(e.target.value)
                        }
                    }) : null, null != eR.subtext ? (0, o.jsx)(w, {
                        children: eR.subtext
                    }) : null, eg ? eR.additional_fields?.map(e => {
                        let t = "text";
                        return "int" === e.type ? t = "number" : ("email" === e.type || "url" === e.type) && (t = e.type), (0, o.jsxs)("label", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [e.placeholder, "multi_line_text" === e.type ? (0, o.jsx)(h.c, {
                                required: e.required,
                                value: e_[e.id] ?? "",
                                onChange: t => eS(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            }) : (0, o.jsx)(h.a, {
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
                }) : F ? (0, o.jsx)(w, {
                    children: (eg ? eR?.link_explanation ?? eR?.explanation : eR?.link_explanation ?? eR?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report",
                        description: "Body shown when a Codex thread report reason needs an external form"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [T ? (0, o.jsx)(w, {
                        children: eR?.subtext
                    }) : null, T ? null : (0, o.jsx)(v, {
                        reasons: eI,
                        selectedReasonId: eC,
                        setSelectedReasonId: eM
                    })]
                }), J[70] = eR, J[71] = e_, J[72] = ek, J[73] = C, J[74] = eg, J[75] = eb, J[76] = M, J[77] = T, J[78] = F, J[79] = ey, J[80] = ev, J[81] = ew.isSuccess, J[82] = eC, J[83] = el, J[84] = eI, J[85] = q) : q = J[85], J[86] !== ew.isError ? (G = ew.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again",
                        description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                    })
                }) : null, J[86] = ew.isError, J[87] = G) : G = J[87], J[88] !== ey || J[89] !== ev || J[90] !== en || J[91] !== eo ? (W = null != eo || ey || ev ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), J[88] = ey, J[89] = ev, J[90] = en, J[91] = eo, J[92] = W) : W = J[92], J[93] !== q || J[94] !== G || J[95] !== W ? (V = (0, o.jsxs)(p.e, {
                    className: "gap-3",
                    children: [q, G, W]
                }), J[93] = q, J[94] = G, J[95] = W, J[96] = V) : V = J[96], J[97] !== eR || J[98] !== eA || J[99] !== Y || J[100] !== ew.isPending || J[101] !== ew.isSuccess ? (Q = null == eR && null == Y || ew.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ew.isPending,
                    type: "button",
                    onClick: eA,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back",
                        description: "Back button for Codex thread report reason selection"
                    })
                }), J[97] = eR, J[98] = eA, J[99] = Y, J[100] = ew.isPending, J[101] = ew.isSuccess, J[102] = Q) : Q = J[102], J[103] !== ez || J[104] !== T || J[105] !== F || J[106] !== eD || J[107] !== eN || J[108] !== ew.isPending || J[109] !== eP ? (X = !T || eP ? (0, o.jsx)(f.a, {
                    color: "primary",
                    disabled: eD,
                    loading: ew.isPending,
                    type: F ? "button" : "submit",
                    onClick: F ? ez : void 0,
                    children: (0, o.jsx)(y, {
                        close: eP,
                        isLinkStep: F,
                        isSubmitStep: eN
                    })
                }) : null, J[103] = ez, J[104] = T, J[105] = F, J[106] = eD, J[107] = eN, J[108] = ew.isPending, J[109] = eP, J[110] = X) : X = J[110], J[111] !== Q || J[112] !== X ? ($ = (0, o.jsx)(p.e, {
                    children: (0, o.jsxs)(p.c, {
                        children: [Q, X]
                    })
                }), J[111] = Q, J[112] = X, J[113] = $) : $ = J[113], J[114] !== eE || J[115] !== U || J[116] !== V || J[117] !== $ ? (K = (0, o.jsxs)(p.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eE,
                    children: [U, V, $]
                }), J[114] = eE, J[115] = U, J[116] = V, J[117] = $, J[118] = K) : K = J[118], J[119] !== em || J[120] !== ef || J[121] !== eB || J[122] !== A || J[123] !== K ? (H = (0, o.jsx)(m.a, {
                    open: !0,
                    onOpenChange: eB,
                    contentProps: A,
                    size: "wide",
                    variant: ef,
                    contentClassName: em,
                    children: K
                }), J[119] = em, J[120] = ef, J[121] = eB, J[122] = A, J[123] = K, J[124] = H) : H = J[124], H
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("BolX"),
            n = a("d0tz"),
            i = a("tl5a"),
            l = a("XGJX"),
            s = a("uNQ5"),
            r = a("GaA7"),
            d = a("q77y"),
            c = a("OWtl"),
            u = a("gTKF"),
            f = a("yI91"),
            m = a("YJq6");
        let p = (0, o.d)(c.a, (e, t) => {
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
        a.d(t, {}, {
            a: p,
            b: async function(e) {
                let {
                    cloudFileAccess: t,
                    filePath: a,
                    hostId: o,
                    maximumSizeBytes: i,
                    pendingSaveSnapshot: c,
                    previousSnapshot: u,
                    requireTextContent: p = !1,
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
                    if (p && await (0, n.sg)(u.subarray(0, n.$b)) !== "text") throw Error("File is not text");
                    return {
                        content: new TextDecoder().decode(u),
                        mtimeMs: d.modifiedAtMs,
                        sizeBytes: u.byteLength
                    }
                }
                let {
                    contentKind: h,
                    mtimeMs: b,
                    sizeBytes: x
                } = await (0, l.a)({
                    contentSampleByteLimit: p ? n.$b : void 0,
                    contentSampleMaxFileBytes: p ? i : void 0,
                    hostId: o,
                    path: a
                }, g);
                if (null != i && null != x && x > i) throw Error("File is too large");
                if (p && "text" !== h) throw Error("File is not text");
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
                    let n = [u, c].find(t => t?.hasUtf8Bom != null && (0, m.b)(`${t.hasUtf8Bom?"\uFEFF":""}${t.content}`) === e.blob),
                        l = n?.hasUtf8Bom ?? (239 === t[0] && 187 === t[1] && 191 === t[2]),
                        s = new TextDecoder("utf-8", {
                            fatal: !0,
                            ignoreBOM: !0
                        }).decode(t);
                    return {
                        content: l ? s.slice(1) : s,
                        hasUtf8Bom: l,
                        mtimeMs: b ?? null,
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
                    mtimeMs: b ?? null,
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
                        dataBase64: (0, m.b)(a)
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