export const __rspack_esm_id = 895612;
export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    gTc: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("QgC"),
            l = a("DHD"),
            r = a("on"),
            s = a("zd"),
            d = a("Wf"),
            c = a("oy"),
            u = a("ygO"),
            f = a("JN"),
            p = a("mU"),
            m = a("HOL"),
            g = a("zLI");

        function h(e) {
            let t, a, h, x, y, v, k, w, j, _, C, S, M, F, T, I, R, O, P, N, D, A, E, L, B, G, q = (0, n.c)(74),
                {
                    belowFreeformContent: U,
                    closeOnSubmit: W,
                    freeformFeedbackRequired: z,
                    hideFreeformInput: Q,
                    initialDetails: V,
                    initialSelectedOptionId: $,
                    onClose: K,
                    onOptionSelect: H,
                    onSubmit: X,
                    options: J,
                    size: Y
                } = e,
                Z = void 0 === W ? "after-submit" : W,
                ee = void 0 !== Q && Q,
                et = void 0 === Y ? "wide" : Y,
                ea = (0, d.a)(),
                [eo, en] = (0, s.useState)(void 0 === V ? "" : V),
                [ei, el] = (0, s.useState)(!1),
                [er, es] = (0, s.useState)($ ?? null);
            if (q[0] !== Z || q[1] !== eo || q[2] !== z || q[3] !== ea || q[4] !== ei || q[5] !== K || q[6] !== H || q[7] !== X || q[8] !== J || q[9] !== er || q[10] !== et) {
                let e, n, s, d = eo.trim();
                q[29] !== z || q[30] !== ea ? (e = z ? ea.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.required",
                    defaultMessage: "Share details (required)",
                    description: "Placeholder for a required freeform feedback details field"
                }) : ea.formatMessage({
                    id: "feedbackFormDialog.detailsPlaceholder.optional",
                    defaultMessage: "Share details (optional)",
                    description: "Placeholder for an optional freeform feedback details field"
                }), q[29] = z, q[30] = ea, q[31] = e) : e = q[31], y = e, q[32] !== ea ? (n = ea.formatMessage({
                    id: "feedbackFormDialog.optionsLabel",
                    defaultMessage: "Feedback options",
                    description: "Accessible label for feedback options"
                }), q[32] = ea, q[33] = n) : n = q[33];
                let u = n;
                v = null == er || z && 0 === d.length, q[34] !== ei || q[35] !== K ? (s = e => {
                    e || ei || K()
                }, q[34] = ei, q[35] = K, q[36] = s) : s = q[36];
                let g = s,
                    b = async e => {
                        if (e.preventDefault(), null == er || ei || v) return;
                        if ("immediate" === Z) {
                            !1 !== X({
                                selectedOptionId: er,
                                details: d
                            }) && K();
                            return
                        }
                        el(!0);
                        let t = !1;
                        await (async () => {
                            t = await X({
                                selectedOptionId: er,
                                details: d
                            }) !== !1
                        })().finally(() => {
                            el(!1)
                        }), t && K()
                    };
                x = f.b, C = !0, S = g, M = et, h = p.b, k = "form", w = "gap-2", j = b, q[37] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(p.e, {
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
                }), q[37] = _) : _ = q[37], a = p.e, t = p.f, O = "gap-3", F = "radiogroup", T = u, I = "flex flex-wrap gap-2", R = J.map(e => {
                    let t = er === e.id,
                        a = t ? i.a : l.a;
                    return (0, o.jsxs)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": t,
                        onClick: () => {
                            es(e.id), H?.({
                                details: d,
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
                }), q[0] = Z, q[1] = eo, q[2] = z, q[3] = ea, q[4] = ei, q[5] = K, q[6] = H, q[7] = X, q[8] = J, q[9] = er, q[10] = et, q[11] = t, q[12] = a, q[13] = h, q[14] = x, q[15] = y, q[16] = v, q[17] = k, q[18] = w, q[19] = j, q[20] = _, q[21] = C, q[22] = S, q[23] = M, q[24] = F, q[25] = T, q[26] = I, q[27] = R, q[28] = O
            } else t = q[11], a = q[12], h = q[13], x = q[14], y = q[15], v = q[16], k = q[17], w = q[18], j = q[19], _ = q[20], C = q[21], S = q[22], M = q[23], F = q[24], T = q[25], I = q[26], R = q[27], O = q[28];
            return q[38] !== F || q[39] !== T || q[40] !== I || q[41] !== R ? (P = (0, o.jsx)("div", {
                role: F,
                "aria-label": T,
                className: I,
                children: R
            }), q[38] = F, q[39] = T, q[40] = I, q[41] = R, q[42] = P) : P = q[42], q[43] !== eo || q[44] !== y || q[45] !== ee ? (N = ee ? null : (0, o.jsx)(g.c, {
                autoFocus: !0,
                rows: 5,
                placeholder: y,
                "aria-label": y,
                value: eo,
                onChange: e => {
                    en(e.target.value)
                },
                onKeyDown: b
            }), q[43] = eo, q[44] = y, q[45] = ee, q[46] = N) : N = q[46], q[47] !== t || q[48] !== U || q[49] !== P || q[50] !== N || q[51] !== O ? (D = (0, o.jsxs)(t, {
                className: O,
                children: [P, N, U]
            }), q[47] = t, q[48] = U, q[49] = P, q[50] = N, q[51] = O, q[52] = D) : D = q[52], q[53] !== a || q[54] !== D ? (A = (0, o.jsx)(a, {
                children: D
            }), q[53] = a, q[54] = D, q[55] = A) : A = q[55], q[56] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, o.jsx)(c.a, {
                id: "feedbackFormDialog.submit",
                defaultMessage: "Submit",
                description: "Label for the button that submits feedback"
            }), q[56] = E) : E = q[56], q[57] !== v || q[58] !== ei ? (L = (0, o.jsx)(p.e, {
                children: (0, o.jsx)(p.c, {
                    children: (0, o.jsx)(u.a, {
                        color: "primary",
                        disabled: v,
                        loading: ei,
                        type: "submit",
                        children: E
                    })
                })
            }), q[57] = v, q[58] = ei, q[59] = L) : L = q[59], q[60] !== h || q[61] !== k || q[62] !== w || q[63] !== j || q[64] !== _ || q[65] !== A || q[66] !== L ? (B = (0, o.jsxs)(h, {
                as: k,
                className: w,
                onSubmit: j,
                children: [_, A, L]
            }), q[60] = h, q[61] = k, q[62] = w, q[63] = j, q[64] = _, q[65] = A, q[66] = L, q[67] = B) : B = q[67], q[68] !== x || q[69] !== C || q[70] !== S || q[71] !== M || q[72] !== B ? (G = (0, o.jsx)(x, {
                open: C,
                onOpenChange: S,
                size: M,
                children: B
            }), q[68] = x, q[69] = C, q[70] = S, q[71] = M, q[72] = B, q[73] = G) : G = q[73], G
        }

        function b(e) {
            "Enter" === e.key && e.metaKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit())
        }
        a.d(t, {
            a: () => h
        })
    }),
    UrA: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("oy"),
            l = a("Ot7");
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
    nIG: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("zd"),
            l = a("Wf"),
            r = a("oy"),
            s = a("Qg"),
            d = a("ygO"),
            c = a("bq"),
            u = a("bf"),
            f = a("UxN"),
            p = a("Cq"),
            m = a("iB"),
            g = a("mD");

        function h(e) {
            let t, a, s, h, y, v, k, w, j, _, C, S, M, F, T, I, R = (0, n.c)(95),
                {
                    disabled: O,
                    hideUnselectedRating: P,
                    isAnimated: N,
                    menuItems: D,
                    rating: A,
                    onRate: E,
                    shouldRestoreFocus: L,
                    variant: B
                } = e,
                G = void 0 !== O && O,
                q = void 0 !== P && P,
                U = void 0 !== N && N,
                W = void 0 === B ? "response" : B,
                z = (0, l.a)(),
                Q = (0, i.useRef)(null),
                V = (0, i.useRef)(null),
                $ = (0, i.useRef)(!1);
            R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                $.current && ((V.current ?? Q.current)?.focus(), $.current = !1)
            }, R[0] = t) : t = R[0], R[1] !== A ? (a = [A], R[1] = A, R[2] = a) : a = R[2], (0, i.useLayoutEffect)(t, a), R[3] !== E || R[4] !== A || R[5] !== L ? (s = e => {
                $.current = L?.(A === e ? null : e) ?? !0, E(e)
            }, R[3] = E, R[4] = A, R[5] = L, R[6] = s) : s = R[6];
            let K = s;
            if ("imageTurn" === W || "imageOverlay" === W) {
                let e, t, a, n, i, l = "imageOverlay" === W ? "mediaOverlay" : "secondary",
                    r = "imageOverlay" === W ? "mediaOverlay" : "ghost";
                R[7] !== z || R[8] !== U ? (e = U ? z.formatMessage(x.likeGif) : z.formatMessage(x.likeImage), R[7] = z, R[8] = U, R[9] = e) : e = R[9];
                let s = e;
                R[10] !== z || R[11] !== U ? (t = U ? z.formatMessage(x.dislikeGif) : z.formatMessage(x.dislikeImage), R[10] = z, R[11] = U, R[12] = t) : t = R[12];
                let c = t;
                return R[13] !== G || R[14] !== s || R[15] !== K || R[16] !== A || R[17] !== l || R[18] !== r || R[19] !== W ? (a = "thumbsDown" !== A ? (0, o.jsx)(p.a, {
                    tooltipContent: s,
                    children: (0, o.jsx)(d.a, {
                        ref: Q,
                        "aria-label": s,
                        "aria-pressed": "thumbsUp" === A,
                        color: "thumbsUp" === A ? l : r,
                        disabled: G || "thumbsUp" === A,
                        size: "imageOverlay" === W ? "inputIcon" : "icon",
                        radius: "imageOverlay" === W ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === W && e.stopPropagation(), K("thumbsUp")
                        },
                        children: "thumbsUp" === A ? (0, o.jsx)(u.Ki, {}) : (0, o.jsx)(u.Ii, {})
                    })
                }) : null, R[13] = G, R[14] = s, R[15] = K, R[16] = A, R[17] = l, R[18] = r, R[19] = W, R[20] = a) : a = R[20], R[21] !== G || R[22] !== c || R[23] !== K || R[24] !== A || R[25] !== l || R[26] !== r || R[27] !== W ? (n = "thumbsUp" !== A ? (0, o.jsx)(p.a, {
                    tooltipContent: c,
                    children: (0, o.jsx)(d.a, {
                        ref: Q,
                        "aria-label": c,
                        "aria-pressed": "thumbsDown" === A,
                        color: "thumbsDown" === A ? l : r,
                        disabled: G || "thumbsDown" === A,
                        size: "imageOverlay" === W ? "inputIcon" : "icon",
                        radius: "imageOverlay" === W ? "full" : "default",
                        onClick: e => {
                            "imageOverlay" === W && e.stopPropagation(), K("thumbsDown")
                        },
                        children: "thumbsDown" === A ? (0, o.jsx)(u.Gi, {}) : (0, o.jsx)(u.Fi, {})
                    })
                }) : null, R[21] = G, R[22] = c, R[23] = K, R[24] = A, R[25] = l, R[26] = r, R[27] = W, R[28] = n) : n = R[28], R[29] !== a || R[30] !== n ? (i = (0, o.jsxs)(o.Fragment, {
                    children: [a, n]
                }), R[29] = a, R[30] = n, R[31] = i) : i = R[31], i
            }
            if ("imageViewerMenu" === W || "imageViewerSubmenu" === W) {
                let e, t, a, n;
                R[32] !== q || R[33] !== U || R[34] !== K || R[35] !== A ? (e = q && "thumbsDown" === A ? null : (0, o.jsx)(c.c.Item, {
                    leftIcon: "thumbsUp" === A ? (0, o.jsx)(u.Ki, {}) : (0, o.jsx)(u.Ii, {}),
                    onSelect: () => K("thumbsUp"),
                    children: U ? (0, o.jsx)(r.a, {
                        ...x.likeGif
                    }) : (0, o.jsx)(r.a, {
                        ...x.likeImage
                    })
                }), R[32] = q, R[33] = U, R[34] = K, R[35] = A, R[36] = e) : e = R[36], R[37] !== q || R[38] !== U || R[39] !== K || R[40] !== A ? (t = q && "thumbsUp" === A ? null : (0, o.jsx)(c.c.Item, {
                    leftIcon: "thumbsDown" === A ? (0, o.jsx)(u.Gi, {}) : (0, o.jsx)(u.Fi, {}),
                    onSelect: () => K("thumbsDown"),
                    children: U ? (0, o.jsx)(r.a, {
                        ...x.dislikeGif
                    }) : (0, o.jsx)(r.a, {
                        ...x.dislikeImage
                    })
                }), R[37] = q, R[38] = U, R[39] = K, R[40] = A, R[41] = t) : t = R[41], R[42] !== e || R[43] !== t ? (a = (0, o.jsxs)(o.Fragment, {
                    children: [e, t]
                }), R[42] = e, R[43] = t, R[44] = a) : a = R[44];
                let i = a;
                if ("imageViewerSubmenu" === W) {
                    let e, t, a;
                    return R[45] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                        ...x.imageFeedback
                    }), R[45] = e) : e = R[45], R[46] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(f.b, {
                        icon: {
                            16: u.Li,
                            20: u.Mi
                        }
                    }), R[46] = t) : t = R[46], R[47] !== G || R[48] !== i ? (a = (0, o.jsx)(g.q, {
                        ref: V,
                        disabled: G,
                        label: e,
                        leftIcon: t,
                        children: i
                    }), R[47] = G, R[48] = i, R[49] = a) : a = R[49], a
                }
                return R[50] !== G || R[51] !== i || R[52] !== D ? (n = (0, o.jsxs)(b, {
                    triggerRef: Q,
                    disabled: G,
                    children: [D, i]
                }), R[50] = G, R[51] = i, R[52] = D, R[53] = n) : n = R[53], n
            }
            if (null != A) {
                let e, t, a, n, i, l = "thumbsUp" === A,
                    r = l ? u.Ki : u.Gi;
                R[54] !== z || R[55] !== l ? (e = z.formatMessage(l ? x.removeGoodResponse : x.removeBadResponse), R[54] = z, R[55] = l, R[56] = e) : e = R[56];
                let s = e;
                return R[57] !== K || R[58] !== A ? (t = () => K(A), R[57] = K, R[58] = A, R[59] = t) : t = R[59], R[60] !== r ? (a = (0, o.jsx)(r, {}), R[60] = r, R[61] = a) : a = R[61], R[62] !== G || R[63] !== s || R[64] !== a || R[65] !== t ? (n = (0, o.jsx)(d.a, {
                    ref: Q,
                    type: "button",
                    "aria-label": s,
                    "aria-pressed": !0,
                    color: "ghost",
                    disabled: G,
                    size: "icon",
                    onClick: t,
                    children: a
                }), R[62] = G, R[63] = s, R[64] = a, R[65] = t, R[66] = n) : n = R[66], R[67] !== s || R[68] !== n ? (i = (0, o.jsx)(p.a, {
                    tooltipContent: s,
                    children: n
                }), R[67] = s, R[68] = n, R[69] = i) : i = R[69], i
            }
            R[70] !== z ? (h = z.formatMessage(x.feedback), R[70] = z, R[71] = h) : h = R[71];
            let H = h;
            return R[72] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, o.jsx)(m.a, {
                className: "icon-xs"
            }), R[72] = y) : y = R[72], R[73] !== H ? (v = (0, o.jsx)(d.a, {
                ref: Q,
                "aria-label": H,
                color: "ghost",
                size: "icon",
                children: y
            }), R[73] = H, R[74] = v) : v = R[74], R[75] !== H || R[76] !== v ? (k = (0, o.jsx)(p.a, {
                tooltipContent: H,
                children: v
            }), R[75] = H, R[76] = v, R[77] = k) : k = R[77], R[78] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsx)(f.b, {
                icon: {
                    16: u.Hi,
                    20: u.Ii
                }
            }), R[78] = w) : w = R[78], R[79] !== K ? (j = () => K("thumbsUp"), R[79] = K, R[80] = j) : j = R[80], R[81] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(r.a, {
                ...x.goodResponse
            }), R[81] = _) : _ = R[81], R[82] !== j ? (C = (0, o.jsx)(c.c.Item, {
                leftIcon: w,
                onSelect: j,
                children: _
            }), R[82] = j, R[83] = C) : C = R[83], R[84] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(f.b, {
                icon: {
                    16: u.Ei,
                    20: u.Fi
                }
            }), R[84] = S) : S = R[84], R[85] !== K ? (M = () => K("thumbsDown"), R[85] = K, R[86] = M) : M = R[86], R[87] === Symbol.for("react.memo_cache_sentinel") ? (F = (0, o.jsx)(r.a, {
                ...x.badResponse
            }), R[87] = F) : F = R[87], R[88] !== M ? (T = (0, o.jsx)(c.c.Item, {
                leftIcon: S,
                onSelect: M,
                children: F
            }), R[88] = M, R[89] = T) : T = R[89], R[90] !== G || R[91] !== k || R[92] !== C || R[93] !== T ? (I = (0, o.jsxs)(c.a, {
                disabled: G,
                side: "top",
                triggerButton: k,
                children: [C, T]
            }), R[90] = G, R[91] = k, R[92] = C, R[93] = T, R[94] = I) : I = R[94], I
        }

        function b(e) {
            let t, a, i, r, s, f = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: h
                } = e,
                b = void 0 !== g && g,
                y = (0, l.a)();
            f[0] !== y ? (t = y.formatMessage(x.imageMenu), f[0] = y, f[1] = t) : t = f[1];
            let v = t;
            return f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(u.Yc, {}), f[2] = a) : a = f[2], f[3] !== b || f[4] !== v || f[5] !== h ? (i = (0, o.jsx)(d.a, {
                ref: h,
                "aria-label": v,
                color: "ghost",
                disabled: b,
                size: "toolbar",
                uniform: !0,
                children: a
            }), f[3] = b, f[4] = v, f[5] = h, f[6] = i) : i = f[6], f[7] !== v || f[8] !== i ? (r = (0, o.jsx)(p.a, {
                tooltipContent: v,
                children: i
            }), f[7] = v, f[8] = i, f[9] = r) : r = f[9], f[10] !== m || f[11] !== b || f[12] !== r ? (s = (0, o.jsx)(c.a, {
                disabled: b,
                align: "end",
                side: "bottom",
                triggerButton: r,
                children: m
            }), f[10] = m, f[11] = b, f[12] = r, f[13] = s) : s = f[13], s
        }
        let x = (0, s.f)({
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
            b: () => h
        })
    }),
    taa: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("oy"),
            l = a("Kwu"),
            r = a("OBi"),
            s = a("HF");

        function d(e) {
            let t, a, i, l, s, d, m = (0, n.c)(37),
                {
                    onBackToFeedback: g,
                    onClose: h,
                    onCloseAutoFocus: b,
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
                    contentClassName: F
                } = e,
                T = "connector" === k ? M : C,
                I = w ?? k;
            m[0] !== y || m[1] !== g || m[2] !== h ? (t = null == g ? void 0 : () => {
                null == y && h(), g()
            }, m[0] = y, m[1] = g, m[2] = h, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== I ? (a = y?.queryKey ?? ["codex-thread-report-reasons", I], m[4] = y?.queryKey, m[5] = I, m[6] = a) : a = m[6], m[7] !== y || m[8] !== I || m[9] !== x ? (i = null == y ? () => f(I, x) : e => {
                let {
                    signal: t
                } = e;
                return y.loadReasons(t)
            }, m[7] = y, m[8] = I, m[9] = x, m[10] = i) : i = m[10];
            let R = null != y ? 0 : void 0,
                O = null != y,
                P = null != y,
                N = null != y ? "chatgpt" : void 0;
            m[11] !== y || m[12] !== v || m[13] !== j || m[14] !== k || m[15] !== T || m[16] !== x ? (l = e => {
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
                    threadId: T
                }, x, v, j)
            }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = T, m[16] = x, m[17] = l) : l = m[17];
            let D = null == x ? void 0 : u;
            return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (s = y?.title ?? (0, o.jsx)(c, {
                reportEntityType: k,
                title: S
            }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = s) : s = m[21], m[22] !== F || m[23] !== h || m[24] !== b || m[25] !== _ || m[26] !== t || m[27] !== s || m[28] !== a || m[29] !== i || m[30] !== R || m[31] !== O || m[32] !== P || m[33] !== N || m[34] !== l || m[35] !== D ? (d = (0, o.jsx)(r.ReportDialog, {
                onBack: t,
                onClose: h,
                onCloseAutoFocus: b,
                queryKey: a,
                loadReasons: i,
                gcTime: R,
                includeServerFields: O,
                preventCloseWhileSubmitting: P,
                dialogVariant: N,
                contentClassName: F,
                submitReport: l,
                openExternalForm: D,
                successBody: _,
                title: s
            }), m[22] = F, m[23] = h, m[24] = b, m[25] = _, m[26] = t, m[27] = s, m[28] = a, m[29] = i, m[30] = R, m[31] = O, m[32] = P, m[33] = N, m[34] = l, m[35] = D, m[36] = d) : d = m[36], d
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
    cbr: (function(e, t, a) {
        var o = a("A"),
            n = a("HOL"),
            i = a("XX"),
            l = a("Yc"),
            r = a("U8s"),
            s = a("EF9");

        function d(e, t, a) {
            let {
                revealAndFocus: d,
                content: c,
                conversationId: u,
                hostId: f,
                insertPosition: p,
                key: m,
                path: g,
                syncOpenTabs: h,
                target: b,
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
                syncOpenTabs: h,
                tabId: l.a.PLAN,
                target: b
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
    Y05: (function(e, t, a) {
        a.r(t), a("aM"), a("Jd");
        var o = a("ZU2");
        a("GaA"), a("sba"), a("ndj");
        var n = a("bCm");
        a("odl"), a("VtL");
        var i = a("Yc");
        a("WF"), a("bn"), a("cbr");
        var l = a("U8s");
        a("bRI");
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
    U8s: (function(e, t, a) {
        var o = a("Xnl"),
            n = a("OW"),
            i = a("tSE");
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
    CQT: (function(e, t, a) {
        a.d(t, {
            a: () => T
        });
        var o = a("A"),
            n = a("Qo"),
            i = a("on"),
            l = a("IP"),
            r = a("Xnl"),
            s = a("zd"),
            d = a("Wf"),
            c = a("oy");
        a("ZU2"), a("gbr");
        var u = a("ygO"),
            f = a("uuN"),
            p = a("HOL"),
            m = a("Cq"),
            g = a("POX"),
            h = a("Pjl"),
            b = e => (0, o.jsx)("svg", {
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
            x = a("dL"),
            y = a("yG6"),
            v = a("HWQ"),
            k = a("yG");
        a("tSE");
        var w = a("sba"),
            j = a("V8"),
            _ = a("ae"),
            C = a("gBC");
        a("Y05");
        var S = a("umS"),
            M = a("UUD"),
            F = a("EF9");

        function T(e) {
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
            let t, a, T, I, O, P, N, D, A, E, L, B, G, q, U, W, z, Q, V, $, K, H, X, J, Y, Z, ee, et, ea, eo = (0, n.c)(106),
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
                eh = void 0 !== er && er,
                eb = void 0 !== ed && ed,
                ex = void 0 === ec ? "thread" : ec,
                ey = void 0 !== ep && ep,
                ev = void 0 !== em && em,
                [ek, ew] = (0, s.useState)(void 0 !== es && es),
                ej = (0, r.A)(w.threadHostId$),
                e_ = (0, d.a)(),
                eC = (0, r.A)(k.c),
                eS = (0, r.A)(g.a);
            (void 0 === eu || eu) && en.completed, eo[0] !== en.completed || eo[1] !== en.content ? (t = en.completed && en.content.trim().length > 0, eo[0] = en.completed, eo[1] = en.content, eo[2] = t) : t = eo[2];
            let eM = t;
            eo[3] !== en.completed || eo[4] !== en.content ? (a = en.completed && en.content.trim().length > 0, eo[3] = en.completed, eo[4] = en.content, eo[5] = a) : a = eo[5];
            let eF = eM && !0,
                eT = a && !0,
                eI = eS && null != ef && null != eC.submitCodexAnalyticsEvent && !0;
            eo[6] !== e_ ? (T = e_.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), eo[6] = e_, eo[7] = T) : T = eo[7];
            let eR = T;
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
            eo[17] !== ei || eo[18] !== en.content || eo[19] !== eC || eo[20] !== ef ? (D = e => {
                null != ef && eC.submitCodexAnalyticsEvent?.({
                    action: "copy",
                    eventKind: "action",
                    metadata: {
                        surface: "plan_summary"
                    },
                    threadId: ei,
                    turnId: ef
                }), (0, _.a)(en.content, e)
            }, eo[17] = ei, eo[18] = en.content, eo[19] = eC, eo[20] = ef, eo[21] = D) : D = eo[21];
            let eA = D,
                eE = ey ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            eo[22] !== ey || eo[23] !== ev || eo[24] !== eg ? (A = ey && !ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: eg
            }) : null, eo[22] = ey, eo[23] = ev, eo[24] = eg, eo[25] = A) : A = eo[25], eo[26] !== eP || eo[27] !== ev || eo[28] !== eg ? (E = ev && null != eg ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eP,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: eg,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(b, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, eo[26] = eP, eo[27] = ev, eo[28] = eg, eo[29] = E) : E = eo[29];
            let eL = ey ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            eo[30] !== eL ? (L = (0, i.b)("text-base leading-tight", eL), eo[30] = eL, eo[31] = L) : L = eo[31], eo[32] !== ey ? (B = ey ? (0, o.jsx)(p.a, {
                className: "shrink-0",
                asset: F.a
            }) : null, eo[32] = ey, eo[33] = B) : B = eo[33], eo[34] !== en.completed ? (G = en.completed ? (0, o.jsx)(c.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(S.a, {
                children: (0, o.jsx)(c.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), eo[34] = en.completed, eo[35] = G) : G = eo[35], eo[36] !== L || eo[37] !== B || eo[38] !== G ? (q = (0, o.jsxs)("span", {
                className: L,
                children: [B, G]
            }), eo[36] = L, eo[37] = B, eo[38] = G, eo[39] = q) : q = eo[39];
            let eB = ev && "hidden";
            eo[40] !== eB ? (U = (0, i.b)("relative z-20 flex items-center gap-1", eB), eo[40] = eB, eo[41] = U) : U = eo[41];
            eo[42] !== eR || eo[43] !== eD || eo[44] !== eT ? (W = eT ? (0, o.jsx)(m.a, {
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
            }) : null, eo[42] = eR, eo[43] = eD, eo[44] = eT, eo[45] = W) : W = eo[45], eo[46] !== eA || eo[47] !== eF ? (z = eF ? (0, o.jsx)(f.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eA
            }) : null, eo[46] = eA, eo[47] = eF, eo[48] = z) : z = eo[48], eo[49] !== ei || eo[50] !== eb || eo[51] !== ex || eo[52] !== eI || eo[53] !== ef ? (Q = eI ? (0, o.jsx)(M.a, {
                hasArtifacts: eb,
                reportEntityType: ex,
                threadId: ei,
                turnId: ef
            }) : null, eo[49] = ei, eo[50] = eb, eo[51] = ex, eo[52] = eI, eo[53] = ef, eo[54] = Q) : Q = eo[54], eo[55] !== eg || eo[56] !== eO ? (V = null != eg ? (0, o.jsx)(m.a, {
                tooltipContent: eO,
                children: (0, o.jsx)(u.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eO,
                    onClick: eg,
                    children: (0, o.jsx)(y.a, {
                        className: "icon-2xs"
                    })
                })
            }) : null, eo[55] = eg, eo[56] = eO, eo[57] = V) : V = eo[57], eo[58] !== eN || eo[59] !== ek || eo[60] !== ey ? ($ = ey ? null : (0, o.jsx)(m.a, {
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
                    "aria-label": eN,
                    onClick: () => {
                        ew(R)
                    },
                    children: (0, o.jsx)(h.a, {
                        className: (0, i.b)("icon-2xs transition-transform", ek ? "rotate-180" : "rotate-0")
                    })
                })
            }), eo[58] = eN, eo[59] = ek, eo[60] = ey, eo[61] = $) : $ = eo[61], eo[62] !== ev || eo[63] !== U || null !== eo[64] || eo[65] !== W || eo[66] !== z || eo[67] !== Q || eo[68] !== V || eo[69] !== $ ? (K = (0, o.jsxs)("div", {
                "aria-hidden": ev,
                className: U,
                children: [null, W, z, Q, V, $]
            }), eo[62] = ev, eo[63] = U, eo[64] = null, eo[65] = W, eo[66] = z, eo[67] = Q, eo[68] = V, eo[69] = $, eo[70] = K) : K = eo[70], eo[71] !== E || eo[72] !== q || eo[73] !== K ? (H = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [E, q, K]
            }), eo[71] = E, eo[72] = q, eo[73] = K, eo[74] = H) : H = eo[74], eo[75] !== ei ? (X = {
                [C.a]: ei
            }, eo[75] = ei, eo[76] = X) : X = eo[76];
            let eG = ev || void 0,
                eq = ey && !ev && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            eo[77] !== eq ? (J = (0, i.b)("relative overflow-hidden", eq), eo[77] = eq, eo[78] = J) : J = eo[78];
            let eU = ev || void 0;
            eo[79] !== ek || eo[80] !== ey || eo[81] !== ev ? (Y = ey ? {
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
            }, eo[79] = ek, eo[80] = ey, eo[81] = ev, eo[82] = Y) : Y = eo[82];
            let eW = !en.completed;
            return eo[83] !== ei || eo[84] !== el || eo[85] !== eh || eo[86] !== ej || eo[87] !== en.content || eo[88] !== eW ? (Z = (0, o.jsx)(v.c, {
                markdown: en.content,
                conversationId: ei,
                hostId: ej,
                hideCodeBlocks: eh,
                isStreaming: eW,
                cwd: el
            }), eo[83] = ei, eo[84] = el, eo[85] = eh, eo[86] = ej, eo[87] = en.content, eo[88] = eW, eo[89] = Z) : Z = eo[89], eo[90] !== ek || eo[91] !== ey ? (ee = !ey && ek ? (0, o.jsxs)(o.Fragment, {
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
            }) : null, eo[90] = ek, eo[91] = ey, eo[92] = ee) : ee = eo[92], eo[93] !== X || eo[94] !== eG || eo[95] !== J || eo[96] !== eU || eo[97] !== Y || eo[98] !== Z || eo[99] !== ee ? (et = (0, o.jsxs)(l.a.div, {
                ...X,
                "aria-hidden": eG,
                className: J,
                inert: eU,
                initial: !1,
                animate: Y,
                transition: j.a,
                children: [Z, ee]
            }), eo[93] = X, eo[94] = eG, eo[95] = J, eo[96] = eU, eo[97] = Y, eo[98] = Z, eo[99] = ee, eo[100] = et) : et = eo[100], eo[101] !== eE || eo[102] !== A || eo[103] !== H || eo[104] !== et ? (ea = (0, o.jsxs)(v.b, {
                className: eE,
                children: [A, H, et]
            }), eo[101] = eE, eo[102] = A, eo[103] = H, eo[104] = et, eo[105] = ea) : ea = eo[105], ea
        }

        function R(e) {
            return !e
        }
    }),
    UUD: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("Xnl"),
            l = a("zd"),
            r = a("Qg"),
            s = a("Jd"),
            d = a("X6V"),
            c = a("gTc"),
            u = a("UrA"),
            f = a("nIG"),
            p = a("yG"),
            m = a("OW"),
            g = a("hZa"),
            h = a("taa");
        let b = "safety_or_legal_concern",
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
                    id: b,
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
                    id: b,
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
                F = void 0 === y ? "thread" : y,
                T = (0, i.z)(m.a),
                [I, R] = (0, l.useState)(null),
                O = (0, i.A)(p.c),
                P = (0, g.h)("584954669");
            if (a[0] !== M || a[1] !== O || a[2] !== w || a[3] !== F || a[4] !== P || a[5] !== T || a[6] !== I || a[7] !== C || a[8] !== S) {
                let e, n = (e, t, a) => {
                        let n = M ? v[e] : k[e],
                            l = P ? n : n.filter(_);
                        (0, d.f)(T, c.a, {
                            belowFreeformContent: (0, o.jsx)(u.a, {}),
                            freeformFeedbackRequired: !1,
                            initialDetails: void 0 === t ? "" : t,
                            initialSelectedOptionId: a,
                            onOptionSelect: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                o === b && ((0, d.b)(T, c.a), i(a, e))
                            },
                            onSubmit: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                return o === b ? void i(a, e) : O.submitCodexAnalyticsEvent?.({
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
                        (0, d.f)(T, h.CodexThreadReportDialog, {
                            onBackToFeedback: () => {
                                n(t, e, b)
                            },
                            reportEntityType: F,
                            threadId: C
                        })
                    };
                a[10] !== O || a[11] !== T || a[12] !== C || a[13] !== S ? (e = e => {
                    if (R(e), null == e) return;
                    let t = T.get(s.Hb, C);
                    O.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: C,
                        turnId: S,
                        sessionId: t === C && null != T.get(s.Sb, C) ? null : t,
                        rating: e
                    })
                }, a[10] = O, a[11] = T, a[12] = C, a[13] = S, a[14] = e) : e = a[14];
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
                }), a[0] = M, a[1] = O, a[2] = w, a[3] = F, a[4] = P, a[5] = T, a[6] = I, a[7] = C, a[8] = S, a[9] = t
            } else t = a[9];
            return t
        }

        function j(e) {
            return null == e
        }

        function _(e) {
            return e.id !== b
        }
        a.d(t, {
            a: () => w
        })
    }),
    HWQ: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("on"),
            l = a("zd"),
            r = a("oy"),
            s = a("Pjl"),
            d = a("tKU"),
            c = a("cWX");

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
                    hostId: h,
                    isStreaming: b
                } = e,
                x = void 0 !== s && s,
                y = void 0 === f ? null : f,
                v = void 0 === m ? null : m,
                k = void 0 !== b && b;
            r[0] !== x || r[1] !== u ? (t = x ? (0, d.a)(u) : null, r[0] = x, r[1] = u, r[2] = t) : t = r[2];
            let w = t,
                j = w?.body ?? u;
            return r[3] !== w ? (a = null != w && w.entries.length > 0 ? (0, o.jsx)(p, {
                entries: w.entries
            }) : null, r[3] = w, r[4] = a) : a = r[4], r[5] !== y || r[6] !== v || r[7] !== g || r[8] !== h || r[9] !== k || r[10] !== j ? (i = (0, o.jsx)(c.a, {
                className: "text-size-chat",
                conversationId: y,
                hideCodeBlocks: g,
                hostId: h,
                isStreaming: k,
                cwd: v,
                children: j
            }), r[5] = y, r[6] = v, r[7] = g, r[8] = h, r[9] = k, r[10] = j, r[11] = i) : i = r[11], r[12] !== a || r[13] !== i ? (l = (0, o.jsxs)("div", {
                className: "px-4 py-3",
                children: [a, i]
            }), r[12] = a, r[13] = i, r[14] = l) : l = r[14], l
        }

        function p(e) {
            let t, a, d, c, u, f = (0, n.c)(13),
                {
                    entries: p
                } = e,
                [h, b] = (0, l.useState)(!1),
                x = p.length > 8;
            f[0] !== p || f[1] !== h || f[2] !== x ? (t = x && !h ? p.slice(0, 8) : p, f[0] = p, f[1] = h, f[2] = x, f[3] = t) : t = f[3];
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
            }), f[5] = y, f[6] = d) : d = f[6], f[7] !== h || f[8] !== x ? (c = x ? (0, o.jsxs)("button", {
                type: "button",
                "aria-expanded": h,
                className: "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                onClick: () => {
                    b(m)
                },
                children: [(0, o.jsx)("span", {
                    children: h ? (0, o.jsx)(r.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less",
                        description: "Disclosure control shown when a Markdown metadata preview can collapse additional fields"
                    }) : (0, o.jsx)(r.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more",
                        description: "Disclosure control shown when a Markdown metadata preview hides additional fields"
                    })
                }), (0, o.jsx)(s.a, {
                    className: (0, i.b)("icon-2xs transition-transform", h ? "rotate-180" : "rotate-0")
                })]
            }) : null, f[7] = h, f[8] = x, f[9] = c) : c = f[9], f[10] !== d || f[11] !== c ? (u = (0, o.jsxs)("div", {
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
            return r[0] !== s ? (t = (0, i.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", s), r[0] = s, r[1] = t) : t = r[1], r[2] !== d ? (a = d.map(h), r[2] = d, r[3] = a) : a = r[3], r[4] !== t || r[5] !== a ? (l = (0, o.jsx)("dl", {
                className: t,
                children: a
            }), r[4] = t, r[5] = a, r[6] = l) : l = r[6], l
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
        a.d(t, {
            a: () => p,
            b: () => u,
            c: () => f
        })
    }),
    OBi: (function(e, t, a) {
        var o = a("A"),
            n = a("Qo"),
            i = a("T0"),
            l = a("xSO"),
            r = a("on"),
            s = a("zd"),
            d = a("Wf"),
            c = a("oy"),
            u = a("ygO"),
            f = a("JN"),
            p = a("mU"),
            m = a("Ot7"),
            g = a("zLI"),
            h = a("rv");

        function b(e) {
            let t, a, r, b, j, _, C, S, M, F, T, I, R, O, P, N, D, A, E, L, B, G, q, U, W, z, Q, V, $, K, H = (0, n.c)(111),
                {
                    onBack: X,
                    onClose: J,
                    onCloseAutoFocus: Y,
                    queryKey: Z,
                    loadReasons: ee,
                    submitReport: et,
                    openExternalForm: ea,
                    successBody: eo,
                    title: en,
                    gcTime: ei,
                    includeServerFields: el,
                    preventCloseWhileSubmitting: er,
                    dialogVariant: es,
                    contentClassName: ed
                } = e,
                ec = void 0 !== el && el,
                eu = void 0 !== er && er,
                ef = (0, d.a)();
            H[0] !== ei ? (t = null == ei ? {} : {
                gcTime: ei
            }, H[0] = ei, H[1] = t) : t = H[1], H[2] !== ee || H[3] !== Z || H[4] !== t ? (a = {
                queryKey: Z,
                queryFn: ee,
                ...t,
                staleTime: h.b.ONE_MINUTE
            }, H[2] = ee, H[3] = Z, H[4] = t, H[5] = a) : a = H[5];
            let {
                data: ep,
                isPending: em,
                isError: eg
            } = (0, i.a)(a);
            H[6] !== et ? (r = {
                mutationFn: et
            }, H[6] = et, H[7] = r) : r = H[7];
            let eh = (0, l.a)(r),
                [eb, ex] = (0, s.useState)("");
            H[8] === Symbol.for("react.memo_cache_sentinel") ? (b = {}, H[8] = b) : b = H[8];
            let [ey, ev] = (0, s.useState)(b), [ek, ew] = (0, s.useState)(null);
            H[9] === Symbol.for("react.memo_cache_sentinel") ? (j = [], H[9] = j) : j = H[9];
            let [ej, e_] = (0, s.useState)(j), eC = 0 === ej.length ? null : ej[ej.length - 1];
            H[10] !== eC || H[11] !== ec || H[12] !== ep?.reasons || H[13] !== ek ? (F = (I = (null == eC ? ep?.reasons : eC.sub_reasons) ?? []).find(e => e.id === ek) ?? null, C = (_ = eC?.details_placeholder != null || ec && eC?.has_details === !0) || ec && (eC?.additional_fields?.length ?? 0) > 0, M = eC?.link_attachment != null, S = eC?.subtext != null && 0 === I.length && !C && !M, T = C || null != F && w(F, ec), H[10] = eC, H[11] = ec, H[12] = ep?.reasons, H[13] = ek, H[14] = _, H[15] = C, H[16] = S, H[17] = M, H[18] = F, H[19] = T, H[20] = I) : (_ = H[14], C = H[15], S = H[16], M = H[17], F = H[18], T = H[19], I = H[20]);
            let eS = T,
                eM = null == F || em || eh.isPending,
                eF = eh.isSuccess || eg,
                eT = !eF && !eS && !M && eM;
            H[21] !== J || H[22] !== eu || H[23] !== eh.isPending ? (R = e => {
                e || eu && eh.isPending || J()
            }, H[21] = J, H[22] = eu, H[23] = eh.isPending, H[24] = R) : R = H[24];
            let eI = R;
            H[25] !== eC || H[26] !== X || H[27] !== ej ? (O = () => {
                if (null == eC) return void X?.();
                let e = ej[ej.length - 1];
                e_(x), ew(e?.id ?? null), ex(""), ev({})
            }, H[25] = eC, H[26] = X, H[27] = ej, H[28] = O) : O = H[28];
            let eR = O;
            H[29] !== eC || H[30] !== ey || H[31] !== eb || H[32] !== ec || H[33] !== C || H[34] !== S || H[35] !== M || H[36] !== J || H[37] !== ea || H[38] !== eh || H[39] !== F || H[40] !== ej || H[41] !== eF ? (P = e => {
                if (e.preventDefault(), !eh.isPending && (!ec || e.currentTarget.reportValidity())) {
                    if (eF) return void J();
                    if (!S) {
                        if (M && eC?.link_attachment != null) return null != ea ? void ea(eC.link_attachment) : void(0, m.f)({
                            href: eC.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        });
                        if (C && null != eC) return void eh.mutate({
                            details: eb.trim(),
                            reason: eC,
                            path: ej,
                            ...ec ? {
                                additionalFields: ey
                            } : {}
                        });
                        if (null != F) {
                            if (w(F, ec)) return void eh.mutate({
                                details: "",
                                reason: F,
                                path: [...ej, F]
                            });
                            e_(e => [...e, F]), ew(null), ex(""), ev({})
                        }
                    }
                }
            }, H[29] = eC, H[30] = ey, H[31] = eb, H[32] = ec, H[33] = C, H[34] = S, H[35] = M, H[36] = J, H[37] = ea, H[38] = eh, H[39] = F, H[40] = ej, H[41] = eF, H[42] = P) : P = H[42];
            let eO = P;
            H[43] !== eC || H[44] !== ea ? (N = e => {
                if (eC?.link_attachment != null) {
                    if (null != ea) return void ea(eC.link_attachment);
                    (0, m.e)({
                        event: e,
                        href: eC.link_attachment,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser"
                    })
                }
            }, H[43] = eC, H[44] = ea, H[45] = N) : N = H[45];
            let eP = N;
            H[46] !== eC || H[47] !== ep || H[48] !== eh.isSuccess ? (D = function(e) {
                let {
                    activeReason: t,
                    isSuccess: a,
                    reportReasons: o
                } = e;
                return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
            }({
                activeReason: eC,
                reportReasons: ep,
                isSuccess: eh.isSuccess
            }), H[46] = eC, H[47] = ep, H[48] = eh.isSuccess, H[49] = D) : D = H[49];
            let eN = D;
            return H[50] !== Y ? (A = {
                onCloseAutoFocus: Y
            }, H[50] = Y, H[51] = A) : A = H[51], H[52] !== eh.isSuccess || H[53] !== en ? (E = eh.isSuccess ? (0, o.jsx)(c.a, {
                id: "codexThreadReportDialog.successTitle",
                defaultMessage: "Thanks for your report",
                description: "Title shown after a safety or legal report is submitted"
            }) : en, H[52] = eh.isSuccess, H[53] = en, H[54] = E) : E = H[54], H[55] !== E ? (L = (0, o.jsx)(f.e, {
                children: E
            }), H[55] = E, H[56] = L) : L = H[56], H[57] !== eN ? (B = null != eN ? (0, o.jsx)(f.d, {
                children: eN
            }) : void 0, H[57] = eN, H[58] = B) : B = H[58], H[59] !== L || H[60] !== B ? (G = (0, o.jsx)(p.e, {
                children: (0, o.jsx)(p.d, {
                    title: L,
                    subtitle: B,
                    titleSize: "dialog"
                })
            }), H[59] = L, H[60] = B, H[61] = G) : G = H[61], H[62] !== eC || H[63] !== ey || H[64] !== eb || H[65] !== _ || H[66] !== ec || H[67] !== ef || H[68] !== C || H[69] !== S || H[70] !== M || H[71] !== em || H[72] !== eg || H[73] !== eh.isSuccess || H[74] !== ek || H[75] !== eo || H[76] !== I ? (q = eh.isSuccess ? (0, o.jsx)(k, {
                children: eo ?? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successBody",
                    defaultMessage: "Our team will review the content to determine if it violates our policies",
                    description: "Body shown after a Codex thread safety or legal report is submitted"
                })
            }) : em ? (0, o.jsx)(k, {
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.loading",
                    defaultMessage: "Loading reporting options…",
                    description: "Loading text while Codex thread report reasons are fetched"
                })
            }) : eg ? (0, o.jsx)(k, {
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.loadError",
                    defaultMessage: "We couldn't load reporting options. Please try again in a moment",
                    description: "Error text shown when Codex thread report reasons fail to load"
                })
            }) : C && null != eC ? (0, o.jsxs)(p.f, {
                className: "gap-3",
                children: [ec && null != eC.explanation ? (0, o.jsx)(k, {
                    children: eC.explanation
                }) : null, _ ? (0, o.jsx)(g.c, {
                    autoFocus: !0,
                    rows: 5,
                    placeholder: eC.details_placeholder ?? void 0,
                    "aria-label": ef.formatMessage({
                        id: "codexThreadReportDialog.detailsLabel",
                        defaultMessage: "Add details",
                        description: "Accessible label for Codex thread report details field"
                    }),
                    value: eb,
                    onChange: e => {
                        ex(e.target.value)
                    }
                }) : null, null != eC.subtext ? (0, o.jsx)(k, {
                    children: eC.subtext
                }) : null, ec ? eC.additional_fields?.map(e => {
                    let t = "text";
                    return "int" === e.type ? t = "number" : ("email" === e.type || "url" === e.type) && (t = e.type), (0, o.jsxs)("label", {
                        className: "flex flex-col gap-2 text-sm",
                        children: [e.placeholder, "multi_line_text" === e.type ? (0, o.jsx)(g.c, {
                            required: e.required,
                            value: ey[e.id] ?? "",
                            onChange: t => ev(a => ({
                                ...a,
                                [e.id]: t.target.value
                            }))
                        }) : (0, o.jsx)(g.a, {
                            type: t,
                            required: e.required,
                            value: ey[e.id] ?? "",
                            onChange: t => ev(a => ({
                                ...a,
                                [e.id]: t.target.value
                            }))
                        })]
                    }, e.id)
                }) : null]
            }) : M ? (0, o.jsx)(k, {
                children: (ec ? eC?.link_explanation ?? eC?.explanation : eC?.link_explanation ?? eC?.subtext) ?? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.linkBody",
                    defaultMessage: "Open the linked form to finish this report",
                    description: "Body shown when a Codex thread report reason needs an external form"
                })
            }) : (0, o.jsxs)(o.Fragment, {
                children: [S ? (0, o.jsx)(k, {
                    children: eC?.subtext
                }) : null, S ? null : (0, o.jsx)(v, {
                    reasons: I,
                    selectedReasonId: ek,
                    setSelectedReasonId: ew
                })]
            }), H[62] = eC, H[63] = ey, H[64] = eb, H[65] = _, H[66] = ec, H[67] = ef, H[68] = C, H[69] = S, H[70] = M, H[71] = em, H[72] = eg, H[73] = eh.isSuccess, H[74] = ek, H[75] = eo, H[76] = I, H[77] = q) : q = H[77], H[78] !== eh.isError ? (U = eh.isError ? (0, o.jsx)("p", {
                className: "text-sm",
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.submitError",
                    defaultMessage: "We couldn't submit your report. Please try again in a moment",
                    description: "Error text shown when Codex thread report submission fails"
                })
            }) : null, H[78] = eh.isError, H[79] = U) : U = H[79], H[80] !== q || H[81] !== U ? (W = (0, o.jsxs)(p.e, {
                children: [q, U]
            }), H[80] = q, H[81] = U, H[82] = W) : W = H[82], H[83] !== eC || H[84] !== eR || H[85] !== X || H[86] !== eh.isPending || H[87] !== eh.isSuccess ? (z = null == eC && null == X || eh.isSuccess ? null : (0, o.jsx)(u.a, {
                color: "secondary",
                disabled: eh.isPending,
                type: "button",
                onClick: eR,
                children: (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.back",
                    defaultMessage: "Back",
                    description: "Back button for Codex thread report reason selection"
                })
            }), H[83] = eC, H[84] = eR, H[85] = X, H[86] = eh.isPending, H[87] = eh.isSuccess, H[88] = z) : z = H[88], H[89] !== eP || H[90] !== S || H[91] !== M || H[92] !== eT || H[93] !== eS || H[94] !== eh.isPending || H[95] !== eF ? (Q = !S || eF ? (0, o.jsx)(u.a, {
                color: "primary",
                disabled: eT,
                loading: eh.isPending,
                type: M ? "button" : "submit",
                onClick: M ? eP : void 0,
                children: (0, o.jsx)(y, {
                    close: eF,
                    isLinkStep: M,
                    isSubmitStep: eS
                })
            }) : null, H[89] = eP, H[90] = S, H[91] = M, H[92] = eT, H[93] = eS, H[94] = eh.isPending, H[95] = eF, H[96] = Q) : Q = H[96], H[97] !== z || H[98] !== Q ? (V = (0, o.jsx)(p.e, {
                children: (0, o.jsxs)(p.c, {
                    children: [z, Q]
                })
            }), H[97] = z, H[98] = Q, H[99] = V) : V = H[99], H[100] !== eO || H[101] !== G || H[102] !== W || H[103] !== V ? ($ = (0, o.jsxs)(p.b, {
                as: "form",
                className: "gap-4",
                onSubmit: eO,
                children: [G, W, V]
            }), H[100] = eO, H[101] = G, H[102] = W, H[103] = V, H[104] = $) : $ = H[104], H[105] !== ed || H[106] !== es || H[107] !== eI || H[108] !== A || H[109] !== $ ? (K = (0, o.jsx)(f.b, {
                open: !0,
                onOpenChange: eI,
                contentProps: A,
                size: "wide",
                variant: es,
                contentClassName: ed,
                children: $
            }), H[105] = ed, H[106] = es, H[107] = eI, H[108] = A, H[109] = $, H[110] = K) : K = H[110], K
        }

        function x(e) {
            return e.slice(0, -1)
        }

        function y(e) {
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

        function v(e) {
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
        a.d(t, {
            ReportDialog: () => b
        })
    }),
    VtL: (function(e, t, a) {
        var o = a("Xnl"),
            n = a("aM"),
            i = a("Jd"),
            l = a("XG"),
            r = a("uNQ"),
            s = a("GaA"),
            d = a("q7"),
            c = a("OW"),
            u = a("gT"),
            f = a("yI"),
            p = a("YJ");
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
                    requestClient: a(i.f, n.Vb)
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
                if (m && await (0, n.ng)(u.subarray(0, n.$b)) !== "text") throw Error("File is not text");
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
                contentSampleByteLimit: m ? n.$b : void 0,
                contentSampleMaxFileBytes: m ? i : void 0,
                hostId: o,
                path: a
            }, g);
            if (null != i && null != x && x > i) throw Error("File is too large");
            if (m && "text" !== h) throw Error("File is not text");
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
                    mtimeMs: b ?? null,
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
                mtimeMs: b ?? null,
                sizeBytes: v
            }
        }
        async function h(e) {
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
            c: () => h
        }, {
            a: m
        })
    })
};