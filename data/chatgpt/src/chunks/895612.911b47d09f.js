export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
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
            p = a("UxN3"),
            m = a("j9wQ");

        function g(e) {
            let t, a, l, r, d, p = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: b
                } = e,
                x = void 0 !== g && g,
                y = (0, s.a)();
            p[0] !== y ? (t = y.formatMessage(h.imageMenu), p[0] = y, p[1] = t) : t = p[1];
            let v = t;
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.ad, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== b ? (l = (0, o.jsx)(c.a, {
                ref: b,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), p[3] = x, p[4] = v, p[5] = b, p[6] = l) : l = p[6], p[7] !== v || p[8] !== l ? (r = (0, o.jsx)(i.a, {
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
                let t, a, d, b, x, y, v, w, k, _, j, C, S, M, T, R, F = (0, n.c)(101),
                    {
                        disabled: I,
                        hideUnselectedRating: P,
                        isAnimated: N,
                        menuItems: O,
                        rating: B,
                        ratingDisabled: A,
                        onRate: E,
                        shouldRestoreFocus: D,
                        variant: L
                    } = e,
                    z = void 0 !== I && I,
                    G = void 0 !== P && P,
                    U = void 0 !== N && N,
                    V = void 0 !== A && A,
                    W = void 0 === L ? "response" : L,
                    q = (0, s.a)(),
                    Q = (0, l.useRef)(null),
                    $ = (0, l.useRef)(null),
                    X = (0, l.useRef)(!1);
                F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    X.current && (($.current ?? Q.current)?.focus(), X.current = !1)
                }, F[0] = t) : t = F[0], F[1] !== B ? (a = [B], F[1] = B, F[2] = a) : a = F[2], (0, l.useLayoutEffect)(t, a), F[3] !== E || F[4] !== B || F[5] !== D ? (d = e => {
                    X.current = D?.(B === e ? null : e) ?? !0, E(e)
                }, F[3] = E, F[4] = B, F[5] = D, F[6] = d) : d = F[6];
                let K = d;
                if ("imageTurn" === W || "imageOverlay" === W) {
                    let e, t, a, n, l, s = "imageOverlay" === W ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === W ? "mediaOverlay" : "ghost";
                    F[7] !== q || F[8] !== U ? (e = U ? q.formatMessage(h.likeGif) : q.formatMessage(h.likeImage), F[7] = q, F[8] = U, F[9] = e) : e = F[9];
                    let d = e;
                    F[10] !== q || F[11] !== U ? (t = U ? q.formatMessage(h.dislikeGif) : q.formatMessage(h.dislikeImage), F[10] = q, F[11] = U, F[12] = t) : t = F[12];
                    let u = t;
                    return F[13] !== z || F[14] !== d || F[15] !== K || F[16] !== B || F[17] !== V || F[18] !== s || F[19] !== r || F[20] !== W ? (a = "thumbsDown" !== B ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(c.a, {
                            ref: Q,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === B,
                            color: "thumbsUp" === B ? s : r,
                            disabled: z || V || "thumbsUp" === B,
                            size: "imageOverlay" === W ? "inputIcon" : "icon",
                            radius: "imageOverlay" === W ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === W && e.stopPropagation(), K("thumbsUp")
                            },
                            children: "thumbsUp" === B ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {})
                        })
                    }) : null, F[13] = z, F[14] = d, F[15] = K, F[16] = B, F[17] = V, F[18] = s, F[19] = r, F[20] = W, F[21] = a) : a = F[21], F[22] !== z || F[23] !== u || F[24] !== K || F[25] !== B || F[26] !== V || F[27] !== s || F[28] !== r || F[29] !== W ? (n = "thumbsUp" !== B ? (0, o.jsx)(i.a, {
                        content: u,
                        children: (0, o.jsx)(c.a, {
                            ref: Q,
                            "aria-label": u,
                            "aria-pressed": "thumbsDown" === B,
                            color: "thumbsDown" === B ? s : r,
                            disabled: z || V || "thumbsDown" === B,
                            size: "imageOverlay" === W ? "inputIcon" : "icon",
                            radius: "imageOverlay" === W ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === W && e.stopPropagation(), K("thumbsDown")
                            },
                            children: "thumbsDown" === B ? (0, o.jsx)(f.Ti, {}) : (0, o.jsx)(f.Ri, {})
                        })
                    }) : null, F[22] = z, F[23] = u, F[24] = K, F[25] = B, F[26] = V, F[27] = s, F[28] = r, F[29] = W, F[30] = n) : n = F[30], F[31] !== a || F[32] !== n ? (l = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), F[31] = a, F[32] = n, F[33] = l) : l = F[33], l
                }
                if ("imageViewerMenu" === W || "imageViewerSubmenu" === W) {
                    let e, t, a, n;
                    F[34] !== G || F[35] !== U || F[36] !== K || F[37] !== B || F[38] !== V ? (e = G && "thumbsDown" === B ? null : (0, o.jsx)(u.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsUp" === B ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {}),
                        onSelect: () => K("thumbsUp"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...h.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.likeImage
                        })
                    }), F[34] = G, F[35] = U, F[36] = K, F[37] = B, F[38] = V, F[39] = e) : e = F[39], F[40] !== G || F[41] !== U || F[42] !== K || F[43] !== B || F[44] !== V ? (t = G && "thumbsUp" === B ? null : (0, o.jsx)(u.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsDown" === B ? (0, o.jsx)(f.Ti, {}) : (0, o.jsx)(f.Ri, {}),
                        onSelect: () => K("thumbsDown"),
                        children: U ? (0, o.jsx)(r.a, {
                            ...h.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.dislikeImage
                        })
                    }), F[40] = G, F[41] = U, F[42] = K, F[43] = B, F[44] = V, F[45] = t) : t = F[45], F[46] !== t || F[47] !== e ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), F[46] = t, F[47] = e, F[48] = a) : a = F[48];
                    let i = a;
                    if ("imageViewerSubmenu" === W) {
                        let e, t, a;
                        return F[49] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...h.imageFeedback
                        }), F[49] = e) : e = F[49], F[50] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                            icon: {
                                16: f.Yi,
                                20: f.Zi
                            }
                        }), F[50] = t) : t = F[50], F[51] !== z || F[52] !== i ? (a = (0, o.jsx)(m.q, {
                            ref: $,
                            disabled: z,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), F[51] = z, F[52] = i, F[53] = a) : a = F[53], a
                    }
                    return F[54] !== z || F[55] !== i || F[56] !== O ? (n = (0, o.jsxs)(g, {
                        triggerRef: Q,
                        disabled: z,
                        children: [O, i]
                    }), F[54] = z, F[55] = i, F[56] = O, F[57] = n) : n = F[57], n
                }
                if (null != B) {
                    let e, t, a, n, l, s, r = "thumbsUp" === B;
                    F[58] !== r ? (e = r ? {
                        16: f.Wi,
                        20: f.Xi
                    } : {
                        16: f.Si,
                        20: f.Ti
                    }, F[58] = r, F[59] = e) : e = F[59];
                    let d = e;
                    F[60] !== q || F[61] !== r ? (t = q.formatMessage(r ? h.removeGoodResponse : h.removeBadResponse), F[60] = q, F[61] = r, F[62] = t) : t = F[62];
                    let u = t;
                    return F[63] !== K || F[64] !== B ? (a = () => K(B), F[63] = K, F[64] = B, F[65] = a) : a = F[65], F[66] !== d ? (n = (0, o.jsx)(p.b, {
                        icon: d
                    }), F[66] = d, F[67] = n) : n = F[67], F[68] !== z || F[69] !== u || F[70] !== a || F[71] !== n ? (l = (0, o.jsx)(c.a, {
                        ref: Q,
                        type: "button",
                        "aria-label": u,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: z,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), F[68] = z, F[69] = u, F[70] = a, F[71] = n, F[72] = l) : l = F[72], F[73] !== u || F[74] !== l ? (s = (0, o.jsx)(i.a, {
                        content: u,
                        children: l
                    }), F[73] = u, F[74] = l, F[75] = s) : s = F[75], s
                }
                F[76] !== q ? (b = q.formatMessage(h.feedback), F[76] = q, F[77] = b) : b = F[77];
                let H = b;
                return F[78] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Yi,
                        20: f.Zi
                    }
                }), F[78] = x) : x = F[78], F[79] !== H ? (y = (0, o.jsx)(c.a, {
                    ref: Q,
                    "aria-label": H,
                    color: "ghost",
                    size: "icon",
                    children: x
                }), F[79] = H, F[80] = y) : y = F[80], F[81] !== H || F[82] !== y ? (v = (0, o.jsx)(i.a, {
                    content: H,
                    children: y
                }), F[81] = H, F[82] = y, F[83] = v) : v = F[83], F[84] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ui,
                        20: f.Vi
                    }
                }), F[84] = w) : w = F[84], F[85] !== K ? (k = () => K("thumbsUp"), F[85] = K, F[86] = k) : k = F[86], F[87] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(r.a, {
                    ...h.goodResponse
                }), F[87] = _) : _ = F[87], F[88] !== k ? (j = (0, o.jsx)(u.c.Item, {
                    leftIcon: w,
                    onSelect: k,
                    children: _
                }), F[88] = k, F[89] = j) : j = F[89], F[90] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Qi,
                        20: f.Ri
                    }
                }), F[90] = C) : C = F[90], F[91] !== K ? (S = () => K("thumbsDown"), F[91] = K, F[92] = S) : S = F[92], F[93] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, o.jsx)(r.a, {
                    ...h.badResponse
                }), F[93] = M) : M = F[93], F[94] !== S ? (T = (0, o.jsx)(u.c.Item, {
                    leftIcon: C,
                    onSelect: S,
                    children: M
                }), F[94] = S, F[95] = T) : T = F[95], F[96] !== z || F[97] !== v || F[98] !== j || F[99] !== T ? (R = (0, o.jsxs)(u.a, {
                    disabled: z,
                    side: "top",
                    triggerButton: v,
                    children: [j, T]
                }), F[96] = z, F[97] = v, F[98] = j, F[99] = T, F[100] = R) : R = F[100], R
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
                        onClose: h,
                        onCloseAutoFocus: b,
                        reportRequest: x,
                        adReport: y,
                        chatGptMessageId: v,
                        reportEntityType: w,
                        reportReasonsEntityType: k,
                        productArea: _,
                        successBody: j,
                        threadId: C,
                        title: S,
                        connectorId: M,
                        contentClassName: T
                    } = e,
                    R = "connector" === w ? M : C,
                    F = k ?? w;
                m[0] !== y || m[1] !== g || m[2] !== h ? (t = null == g ? void 0 : () => {
                    null == y && h(), g()
                }, m[0] = y, m[1] = g, m[2] = h, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== F ? (a = y?.queryKey ?? ["codex-thread-report-reasons", F], m[4] = y?.queryKey, m[5] = F, m[6] = a) : a = m[6], m[7] !== y || m[8] !== F || m[9] !== x ? (i = null == y ? () => (async function(e, t) {
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
                })(F, x) : e => {
                    let {
                        signal: t
                    } = e;
                    return y.loadReasons(t)
                }, m[7] = y, m[8] = F, m[9] = x, m[10] = i) : i = m[10];
                let I = null != y ? 0 : void 0,
                    P = null != y,
                    N = null != y,
                    O = null != y ? "chatgpt" : void 0;
                m[11] !== y || m[12] !== v || m[13] !== _ || m[14] !== w || m[15] !== R || m[16] !== x ? (u = e => {
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
                        threadId: R
                    }, x, v, _)
                }, m[11] = y, m[12] = v, m[13] = _, m[14] = w, m[15] = R, m[16] = x, m[17] = u) : u = m[17];
                let B = null == x ? void 0 : c;
                return m[18] !== y?.title || m[19] !== w || m[20] !== S ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: w,
                    title: S
                }), m[18] = y?.title, m[19] = w, m[20] = S, m[21] = f) : f = m[21], m[22] !== T || m[23] !== h || m[24] !== b || m[25] !== j || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== I || m[31] !== P || m[32] !== N || m[33] !== O || m[34] !== u || m[35] !== B ? (p = (0, o.jsx)(s.ReportDialog, {
                    onBack: t,
                    onClose: h,
                    onCloseAutoFocus: b,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: I,
                    includeServerFields: P,
                    preventCloseWhileSubmitting: N,
                    dialogVariant: O,
                    contentClassName: T,
                    submitReport: u,
                    openExternalForm: B,
                    successBody: j,
                    title: f
                }), m[22] = T, m[23] = h, m[24] = b, m[25] = j, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = I, m[31] = P, m[32] = N, m[33] = O, m[34] = u, m[35] = B, m[36] = p) : p = m[36], p
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
                    syncOpenTabs: h,
                    target: b,
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
                    key: m,
                    tabId: l.a.PLAN
                }), !0)
            }
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("hV9T"), a("tl5a");
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
            }), (0, o.h)(e, s, {
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
            a: () => P
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
            p = a("uuN8"),
            m = a("HOLv"),
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
        var _ = a("sbaW"),
            j = a("V8uZ"),
            C = a("aepO"),
            S = a("gBCz");
        a("Y05g");
        var M = a("umSm"),
            T = a("YPzM"),
            R = a("xwJZ"),
            F = a("vEDM"),
            I = a("zu6X");

        function P(e) {
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
            let t, a, P, N, B, A, E, D, L, z, G, U, V, W, q, Q, $, X, K, H, Y, J, Z, ee, et, ea, eo, en, ei, el = (0, n.c)(106),
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
                    isThreadPreview: eh,
                    isThreadPreviewCollapsed: eb,
                    onOpenInSidePanel: ex
                } = e,
                ey = void 0 !== ec && ec,
                ev = void 0 !== ef && ef,
                ew = void 0 === ep ? "thread" : ep,
                ek = void 0 !== eh && eh,
                e_ = void 0 !== eb && eb,
                [ej, eC] = (0, d.useState)(void 0 !== eu && eu),
                eS = (0, r.z)(_.threadHostId$),
                eM = (0, c.a)(),
                eT = (0, r.z)(k.c),
                eR = (0, r.z)(h.b);
            (void 0 === em || em) && es.completed, el[0] !== es.completed || el[1] !== es.content ? (t = es.completed && es.content.trim().length > 0, el[0] = es.completed, el[1] = es.content, el[2] = t) : t = el[2];
            let eF = t;
            el[3] !== es.completed || el[4] !== es.content ? (a = es.completed && es.content.trim().length > 0, el[3] = es.completed, el[4] = es.content, el[5] = a) : a = el[5];
            let eI = eF && !0,
                eP = a && !0,
                eN = eR && null != eg && null != eT.submitCodexAnalyticsEvent && !0;
            el[6] !== eM ? (P = eM.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan",
                description: "Tooltip text for button that downloads the plan markdown"
            }), el[6] = eM, el[7] = P) : P = el[7];
            let eO = P;
            el[8] !== eM ? (N = eM.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel",
                description: "Tooltip text for button that opens the plan in the side panel"
            }), el[8] = eM, el[9] = N) : N = el[9];
            let eB = N;
            el[10] !== eM ? (B = eM.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel",
                description: "Accessible label for the collapsed plan card that closes the plan side panel"
            }), el[10] = eM, el[11] = B) : B = el[11];
            let eA = B;
            el[12] !== eM || el[13] !== ej ? (A = ej ? eM.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary",
                description: "Aria label for button that expands a collapsed plan summary"
            }) : eM.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary",
                description: "Aria label for button that collapses the plan summary content"
            }), el[12] = eM, el[13] = ej, el[14] = A) : A = el[14];
            let eE = A;
            el[15] !== es.content ? (E = () => {
                let e = new Blob([es.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, el[15] = es.content, el[16] = E) : E = el[16];
            let eD = E;
            el[17] !== er || el[18] !== es.content || el[19] !== eT || el[20] !== eg ? (D = e => (null != eg && eT.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: er,
                turnId: eg
            }), (0, C.c)(es.content, e)), el[17] = er, el[18] = es.content, el[19] = eT, el[20] = eg, el[21] = D) : D = el[21];
            let eL = D,
                ez = ek ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            el[22] !== ek || el[23] !== e_ || el[24] !== ex ? (L = ek && !e_ && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, el[22] = ek, el[23] = e_, el[24] = ex, el[25] = L) : L = el[25], el[26] !== eA || el[27] !== e_ || el[28] !== ex ? (z = e_ && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-label": eA,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: ex,
                children: (0, o.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-secondary-ghost-hover electron:rounded-md",
                    children: (0, o.jsx)(x, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, el[26] = eA, el[27] = e_, el[28] = ex, el[29] = z) : z = el[29];
            let eG = ek ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            el[30] !== eG ? (G = (0, l.b)("text-base leading-tight", eG), el[30] = eG, el[31] = G) : G = el[31], el[32] !== ek ? (U = ek ? (0, o.jsx)(m.a, {
                className: "shrink-0",
                asset: I.a
            }) : null, el[32] = ek, el[33] = U) : U = el[33], el[34] !== es.completed ? (V = es.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan",
                description: "Title for the plan summary card header"
            }) : (0, o.jsx)(M.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan",
                    description: "Title for the plan summary card header while the plan is still being written"
                })
            }), el[34] = es.completed, el[35] = V) : V = el[35], el[36] !== G || el[37] !== U || el[38] !== V ? (W = (0, o.jsxs)("span", {
                className: G,
                children: [U, V]
            }), el[36] = G, el[37] = U, el[38] = V, el[39] = W) : W = el[39];
            let eU = e_ && "hidden";
            el[40] !== eU ? (q = (0, l.b)("relative z-20 flex items-center gap-1", eU), el[40] = eU, el[41] = q) : q = el[41];
            el[42] !== eO || el[43] !== eD || el[44] !== eP ? (Q = eP ? (0, o.jsx)(i.a, {
                content: eO,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eO,
                    onClick: eD,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: R.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[42] = eO, el[43] = eD, el[44] = eP, el[45] = Q) : Q = el[45], el[46] !== eL || el[47] !== eI ? ($ = eI ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eL
            }) : null, el[46] = eL, el[47] = eI, el[48] = $) : $ = el[48], el[49] !== er || el[50] !== ev || el[51] !== ew || el[52] !== eN || el[53] !== eg ? (X = eN ? (0, o.jsx)(T.a, {
                hasArtifacts: ev,
                reportEntityType: ew,
                threadId: er,
                turnId: eg
            }) : null, el[49] = er, el[50] = ev, el[51] = ew, el[52] = eN, el[53] = eg, el[54] = X) : X = el[54], el[55] !== ex || el[56] !== eB ? (K = null != ex ? (0, o.jsx)(i.a, {
                content: eB,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eB,
                    onClick: ex,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: F.a,
                        legacyIcon: v.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, el[55] = ex, el[56] = eB, el[57] = K) : K = el[57], el[58] !== eE || el[59] !== ej || el[60] !== ek ? (H = ek ? null : (0, o.jsx)(i.a, {
                content: ej ? (0, o.jsx)(u.a, {
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
                    "aria-label": eE,
                    onClick: () => {
                        eC(O)
                    },
                    children: (0, o.jsx)(b.a, {
                        className: (0, l.b)("icon-2xs transition-transform", ej ? "rotate-180" : "rotate-0")
                    })
                })
            }), el[58] = eE, el[59] = ej, el[60] = ek, el[61] = H) : H = el[61], el[62] !== e_ || el[63] !== q || null !== el[64] || el[65] !== Q || el[66] !== $ || el[67] !== X || el[68] !== K || el[69] !== H ? (Y = (0, o.jsxs)("div", {
                "aria-hidden": e_,
                className: q,
                children: [null, Q, $, X, K, H]
            }), el[62] = e_, el[63] = q, el[64] = null, el[65] = Q, el[66] = $, el[67] = X, el[68] = K, el[69] = H, el[70] = Y) : Y = el[70], el[71] !== z || el[72] !== W || el[73] !== Y ? (J = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [z, W, Y]
            }), el[71] = z, el[72] = W, el[73] = Y, el[74] = J) : J = el[74], el[75] !== er ? (Z = {
                [S.a]: er
            }, el[75] = er, el[76] = Z) : Z = el[76];
            let eV = e_ || void 0,
                eW = ek && !e_ && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            el[77] !== eW ? (ee = (0, l.b)("relative overflow-hidden", eW), el[77] = eW, el[78] = ee) : ee = el[78];
            let eq = e_ || void 0;
            el[79] !== ej || el[80] !== ek || el[81] !== e_ ? (et = ek ? {
                maxHeight: 160 * !e_,
                opacity: +!e_
            } : {
                height: ej ? 320 : "auto",
                ...ej ? {
                    overflow: "hidden"
                } : {
                    transitionEnd: {
                        overflow: "visible"
                    }
                }
            }, el[79] = ej, el[80] = ek, el[81] = e_, el[82] = et) : et = el[82];
            let eQ = !es.completed;
            return el[83] !== er || el[84] !== ed || el[85] !== ey || el[86] !== eS || el[87] !== es.content || el[88] !== eQ ? (ea = (0, o.jsx)(w.c, {
                markdown: es.content,
                conversationId: er,
                hostId: eS,
                hideCodeBlocks: ey,
                isStreaming: eQ,
                cwd: ed
            }), el[83] = er, el[84] = ed, el[85] = ey, el[86] = eS, el[87] = es.content, el[88] = eQ, el[89] = ea) : ea = el[89], el[90] !== ej || el[91] !== ek ? (eo = !ek && ej ? (0, o.jsxs)(o.Fragment, {
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
            }) : null, el[90] = ej, el[91] = ek, el[92] = eo) : eo = el[92], el[93] !== Z || el[94] !== eV || el[95] !== ee || el[96] !== eq || el[97] !== et || el[98] !== ea || el[99] !== eo ? (en = (0, o.jsxs)(s.a.div, {
                ...Z,
                "aria-hidden": eV,
                className: ee,
                inert: eq,
                initial: !1,
                animate: et,
                transition: j.a,
                children: [ea, eo]
            }), el[93] = Z, el[94] = eV, el[95] = ee, el[96] = eq, el[97] = et, el[98] = ea, el[99] = eo, el[100] = en) : en = el[100], el[101] !== ez || el[102] !== L || el[103] !== J || el[104] !== en ? (ei = (0, o.jsxs)(w.b, {
                className: ez,
                children: [L, J, en]
            }), el[101] = ez, el[102] = L, el[103] = J, el[104] = en, el[105] = ei) : ei = el[105], ei
        }

        function O(e) {
            return !e
        }
    }),
    YPzM: (function(e, t, a) {
        a.d(t, {
            a: () => j
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("BolX"),
            l = a("zd8w"),
            s = a("Qgfj"),
            r = a("tl5a"),
            d = a("X6Vn"),
            c = a("UrAA"),
            u = a("Bbed"),
            f = a("NJMI");
        let p = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(990020)]).then(a.bind(a, "v9GG"))).FeedbackSubmissionDialog, {
                errorFallback: (0, o.jsx)(f.a, {
                    onClose: e => (0, d.b)(e, p)
                })
            }),
            m = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(23102)]).then(a.bind(a, "jNrc"))).FeedbackFormDialog, {
                errorFallback: (0, o.jsx)(f.a, {
                    onClose: e => (0, d.b)(e, m)
                })
            });
        var g = a("nIGo"),
            h = a("yGJW"),
            b = a("OWtl"),
            x = a("taaw");
        let y = "safety_or_legal_concern",
            v = {
                thumbs_down: "thumbsDown",
                thumbs_up: "thumbsUp"
            },
            w = (0, s.f)({
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
            k = {
                thumbs_down: [{
                    id: "wrong_presentation_length",
                    label: w.wrongPresentationLength
                }, {
                    id: "poor_writing",
                    label: w.poorWriting
                }, {
                    id: "poor_style_format_or_visuals",
                    label: w.poorStyleFormatOrVisuals
                }, {
                    id: "wrong_topics_or_subtopics",
                    label: w.wrongTopicsOrSubtopics
                }, {
                    id: "didnt_follow_my_instructions",
                    label: w.didntFollowMyInstructions
                }, {
                    id: "didnt_follow_my_template",
                    label: w.didntFollowMyTemplate
                }, {
                    id: "incorrect_content",
                    label: w.incorrectContent
                }, {
                    id: y,
                    label: w.safetyOrLegalConcern
                }],
                thumbs_up: [{
                    id: "good_content",
                    label: w.goodContent
                }, {
                    id: "good_writing_quality",
                    label: w.goodWritingQuality
                }, {
                    id: "good_style_format_or_visuals",
                    label: w.goodStyleFormatOrVisuals
                }, {
                    id: "followed_my_instructions_well",
                    label: w.followedMyInstructionsWell
                }, {
                    id: "generated_quickly",
                    label: w.generatedQuickly
                }]
            },
            _ = {
                thumbs_down: [{
                    id: "incorrect_or_incomplete",
                    label: w.incorrectOrIncomplete
                }, {
                    id: "didnt_follow_my_instructions",
                    label: w.didntFollowMyInstructions
                }, {
                    id: "off_track_or_wrong_scope",
                    label: w.offTrackOrWrongScope
                }, {
                    id: "lost_context",
                    label: w.lostContext
                }, {
                    id: "slow_or_buggy",
                    label: w.slowOrBuggy
                }, {
                    id: y,
                    label: w.safetyOrLegalConcern
                }, {
                    id: "other",
                    label: w.other
                }],
                thumbs_up: [{
                    id: "solved_my_task",
                    label: w.solvedMyTask
                }, {
                    id: "followed_my_instructions",
                    label: w.followedMyInstructions
                }, {
                    id: "good_code_or_output_quality",
                    label: w.goodCodeOrOutputQuality
                }, {
                    id: "fast_and_efficient",
                    label: w.fastAndEfficient
                }, {
                    id: "useful_autonomy",
                    label: w.usefulAutonomy
                }, {
                    id: "other",
                    label: w.other
                }]
            };

        function j(e) {
            let t, a = (0, n.c)(14),
                {
                    hasArtifacts: s,
                    reportEntityType: u,
                    renderControl: f,
                    threadId: p,
                    turnId: w
                } = e,
                j = void 0 !== s && s,
                S = void 0 === u ? "thread" : u,
                M = (0, i.y)(b.a),
                [T, R] = (0, l.useState)(null),
                F = (0, i.z)(h.c);
            if (a[0] !== j || a[1] !== F || a[2] !== f || a[3] !== S || a[4] !== M || a[5] !== T || a[6] !== p || a[7] !== w) {
                let e, n = (e, t, a) => {
                        let n = j ? k[e] : _[e];
                        (0, d.f)(M, m, {
                            belowFreeformContent: (0, o.jsx)(c.a, {}),
                            closeOnSubmit: "immediate",
                            freeformFeedbackRequired: !1,
                            initialDetails: void 0 === t ? "" : t,
                            initialSelectedOptionId: a,
                            onOptionSelect: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                o === y && ((0, d.b)(M, m), i(a, e))
                            },
                            onSubmit: t => {
                                let {
                                    details: a,
                                    selectedOptionId: o
                                } = t;
                                return o === y ? void i(a, e) : F.submitCodexAnalyticsEvent?.({
                                    action: "submit_turn_feedback",
                                    eventKind: "action",
                                    threadId: p,
                                    turnId: w,
                                    metadata: {
                                        details: a,
                                        has_artifacts: j,
                                        selected_option: o
                                    }
                                })
                            },
                            options: n
                        })
                    },
                    i = (e, t) => {
                        (0, d.f)(M, x.CodexThreadReportDialog, {
                            onBackToFeedback: () => {
                                n(t, e, y)
                            },
                            reportEntityType: S,
                            threadId: p
                        })
                    };
                a[9] !== F || a[10] !== M || a[11] !== p || a[12] !== w ? (e = e => {
                    if (R(e), null == e) return;
                    let t = M.get(r.yb, p);
                    F.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: p,
                        turnId: w,
                        sessionId: t === p && null != M.get(r.Jb, p) ? null : t,
                        rating: e
                    })
                }, a[9] = F, a[10] = M, a[11] = p, a[12] = w, a[13] = e) : e = a[13];
                let l = e,
                    s = {
                        rating: null == T ? null : v[T],
                        onRate: e => {
                            let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                a = T === t ? null : t;
                            l(a), null != a && n(a)
                        },
                        shouldRestoreFocus: C
                    };
                t = null != f ? f(s, e => l("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(g.b, {
                    ...s
                }), a[0] = j, a[1] = F, a[2] = f, a[3] = S, a[4] = M, a[5] = T, a[6] = p, a[7] = w, a[8] = t
            } else t = a[8];
            return t
        }

        function C(e) {
            return null == e
        }
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
            let t, a, c, u, p, h = (0, n.c)(13),
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
            }) : null, h[7] = x, h[8] = v, h[9] = u) : u = h[9], h[10] !== c || h[11] !== u ? (p = (0, o.jsxs)("div", {
                className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
                children: [a, c, u]
            }), h[10] = c, h[11] = u, h[12] = p) : p = h[12], p
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
                        hostId: h,
                        isStreaming: b
                    } = e,
                    x = void 0 !== r && r,
                    y = void 0 === f ? null : f,
                    v = void 0 === m ? null : m,
                    w = void 0 !== b && b;
                s[0] !== x || s[1] !== d ? (t = x ? (0, c.a)(d) : null, s[0] = x, s[1] = d, s[2] = t) : t = s[2];
                let k = t,
                    _ = k?.body ?? d;
                return s[3] !== k ? (a = null != k && k.entries.length > 0 ? (0, o.jsx)(p, {
                    entries: k.entries
                }) : null, s[3] = k, s[4] = a) : a = s[4], s[5] !== y || s[6] !== v || s[7] !== g || s[8] !== h || s[9] !== w || s[10] !== _ ? (i = (0, o.jsx)(u.a, {
                    className: "text-size-chat",
                    conversationId: y,
                    hideCodeBlocks: g,
                    hostId: h,
                    isStreaming: w,
                    cwd: v,
                    children: _
                }), s[5] = y, s[6] = v, s[7] = g, s[8] = h, s[9] = w, s[10] = _, s[11] = i) : i = s[11], s[12] !== a || s[13] !== i ? (l = (0, o.jsxs)("div", {
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
            u = a("MM0V"),
            f = a("Sm6l"),
            p = a("JNtf"),
            m = a("mUDD"),
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
                let t, a, s, _, j, C, S, M, T, R, F, I, P, N, O, B, A, E, D, L, z, G, U, V, W, q, Q, $, X, K, H, Y = (0, n.c)(126),
                    {
                        onBack: J,
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
                        contentClassName: ep,
                        PrimaryButton: em
                    } = e,
                    eg = void 0 === ed ? b.b.ONE_MINUTE : ed,
                    eh = void 0 !== ec && ec,
                    eb = void 0 !== eu && eu,
                    ex = void 0 === em ? f.a : em,
                    ey = (0, d.a)();
                Y[0] !== er ? (t = null == er ? {} : {
                    gcTime: er
                }, Y[0] = er, Y[1] = t) : t = Y[1], Y[2] !== ea || Y[3] !== et || Y[4] !== eg || Y[5] !== t ? (a = {
                    queryKey: et,
                    queryFn: ea,
                    ...t,
                    staleTime: eg
                }, Y[2] = ea, Y[3] = et, Y[4] = eg, Y[5] = t, Y[6] = a) : a = Y[6];
                let {
                    data: ev,
                    isPending: ew,
                    isError: ek
                } = (0, i.a)(a);
                Y[7] !== eo ? (s = {
                    mutationFn: eo
                }, Y[7] = eo, Y[8] = s) : s = Y[8];
                let e_ = (0, l.a)(s),
                    [ej, eC] = (0, r.useState)("");
                Y[9] === Symbol.for("react.memo_cache_sentinel") ? (_ = {}, Y[9] = _) : _ = Y[9];
                let [eS, eM] = (0, r.useState)(_), [eT, eR] = (0, r.useState)(null);
                Y[10] === Symbol.for("react.memo_cache_sentinel") ? (j = [], Y[10] = j) : j = Y[10];
                let [eF, eI] = (0, r.useState)(j), eP = 0 === eF.length ? null : eF[eF.length - 1];
                Y[11] !== eP || Y[12] !== ev?.reasons ? (C = (null == eP ? ev?.reasons : eP.sub_reasons) ?? [], Y[11] = eP, Y[12] = ev?.reasons, Y[13] = C) : C = Y[13];
                let eN = C;
                Y[14] !== eP?.additional_fields?.length || Y[15] !== eP?.details_placeholder || Y[16] !== eP?.has_details || Y[17] !== eP?.link_attachment || Y[18] !== eP?.subtext || Y[19] !== eh || Y[20] !== eT || Y[21] !== eN ? (F = eN.find(e => e.id === eT) ?? null, M = (S = eP?.details_placeholder != null || eh && eP?.has_details === !0) || eh && (eP?.additional_fields?.length ?? 0) > 0, R = eP?.link_attachment != null, T = eP?.subtext != null && 0 === eN.length && !M && !R, I = M || null != F && k(F, eh), Y[14] = eP?.additional_fields?.length, Y[15] = eP?.details_placeholder, Y[16] = eP?.has_details, Y[17] = eP?.link_attachment, Y[18] = eP?.subtext, Y[19] = eh, Y[20] = eT, Y[21] = eN, Y[22] = S, Y[23] = M, Y[24] = T, Y[25] = R, Y[26] = F, Y[27] = I) : (S = Y[22], M = Y[23], T = Y[24], R = Y[25], F = Y[26], I = Y[27]);
                let eO = I,
                    eB = null == F || ew || e_.isPending,
                    eA = e_.isSuccess || ek,
                    eE = !eA && (eO && null == eo || !eO && !R && eB);
                Y[28] !== Z || Y[29] !== eb || Y[30] !== e_.isPending ? (P = e => {
                    e || eb && e_.isPending || Z()
                }, Y[28] = Z, Y[29] = eb, Y[30] = e_.isPending, Y[31] = P) : P = Y[31];
                let eD = P;
                Y[32] !== eP || Y[33] !== J || Y[34] !== eF ? (N = () => {
                    if (null == eP) return void J?.();
                    let e = eF[eF.length - 1];
                    eI(x), eR(e?.id ?? null), eC(""), eM({})
                }, Y[32] = eP, Y[33] = J, Y[34] = eF, Y[35] = N) : N = Y[35];
                let eL = N;
                Y[36] !== eP || Y[37] !== eS || Y[38] !== ej || Y[39] !== eh || Y[40] !== M || Y[41] !== T || Y[42] !== R || Y[43] !== Z || Y[44] !== ei || Y[45] !== e_ || Y[46] !== F || Y[47] !== eF || Y[48] !== eA || Y[49] !== eo ? (O = e => {
                    if (e.preventDefault(), !e_.isPending && (!eh || e.currentTarget.reportValidity())) {
                        if (eA) return void Z();
                        if (!T) {
                            if (R && eP?.link_attachment != null) return null != ei ? void ei(eP.link_attachment) : void(0, g.f)({
                                href: eP.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (M && null != eP) {
                                if (null == eo) return;
                                e_.mutate({
                                    details: ej.trim(),
                                    reason: eP,
                                    path: eF,
                                    ...eh ? {
                                        additionalFields: eS
                                    } : {}
                                });
                                return
                            }
                            if (null != F) {
                                if (k(F, eh)) {
                                    if (null == eo) return;
                                    e_.mutate({
                                        details: "",
                                        reason: F,
                                        path: [...eF, F]
                                    });
                                    return
                                }
                                eI(e => [...e, F]), eR(null), eC(""), eM({})
                            }
                        }
                    }
                }, Y[36] = eP, Y[37] = eS, Y[38] = ej, Y[39] = eh, Y[40] = M, Y[41] = T, Y[42] = R, Y[43] = Z, Y[44] = ei, Y[45] = e_, Y[46] = F, Y[47] = eF, Y[48] = eA, Y[49] = eo, Y[50] = O) : O = Y[50];
                let ez = O;
                Y[51] !== eP || Y[52] !== ei ? (B = e => {
                    if (eP?.link_attachment != null) {
                        if (null != ei) return void ei(eP.link_attachment);
                        (0, g.e)({
                            event: e,
                            href: eP.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, Y[51] = eP, Y[52] = ei, Y[53] = B) : B = Y[53];
                let eG = B;
                Y[54] !== eP || Y[55] !== ev || Y[56] !== e_.isSuccess ? (A = function(e) {
                    let {
                        activeReason: t,
                        isSuccess: a,
                        reportReasons: o
                    } = e;
                    return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
                }({
                    activeReason: eP,
                    reportReasons: ev,
                    isSuccess: e_.isSuccess
                }), Y[54] = eP, Y[55] = ev, Y[56] = e_.isSuccess, Y[57] = A) : A = Y[57];
                let eU = A;
                return Y[58] !== ee ? (E = {
                    onCloseAutoFocus: ee
                }, Y[58] = ee, Y[59] = E) : E = Y[59], Y[60] !== e_.isSuccess || Y[61] !== es ? (D = e_.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report",
                    description: "Title shown after a safety or legal report is submitted"
                }) : es, Y[60] = e_.isSuccess, Y[61] = es, Y[62] = D) : D = Y[62], Y[63] !== D ? (L = (0, o.jsx)(p.e, {
                    children: D
                }), Y[63] = D, Y[64] = L) : L = Y[64], Y[65] !== eU ? (z = null != eU ? (0, o.jsx)(p.d, {
                    children: eU
                }) : void 0, Y[65] = eU, Y[66] = z) : z = Y[66], Y[67] !== L || Y[68] !== z ? (G = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: L,
                        subtitle: z,
                        titleSize: "dialog"
                    })
                }), Y[67] = L, Y[68] = z, Y[69] = G) : G = Y[69], Y[70] !== eP || Y[71] !== eS || Y[72] !== ej || Y[73] !== S || Y[74] !== eh || Y[75] !== ey || Y[76] !== M || Y[77] !== T || Y[78] !== R || Y[79] !== ew || Y[80] !== ek || Y[81] !== e_.isSuccess || Y[82] !== eT || Y[83] !== el || Y[84] !== eN ? (U = e_.isSuccess ? (0, o.jsx)(w, {
                    children: el ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.successBody",
                        defaultMessage: "Our team will review the content to determine if it violates our policies",
                        description: "Body shown after a Codex thread safety or legal report is submitted"
                    })
                }) : ew ? (0, o.jsx)(w, {
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.loading",
                        defaultMessage: "Loading reporting options…",
                        description: "Loading text while Codex thread report reasons are fetched"
                    })
                }) : ek ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.loadError",
                        defaultMessage: "Couldn't load reporting options. Try again later",
                        description: "Error in the report dialog when reporting options cannot be loaded"
                    })
                }) : M && null != eP ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eh && null != eP.explanation ? (0, o.jsx)(w, {
                        children: eP.explanation
                    }) : null, S ? (0, o.jsx)(h.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: eP.details_placeholder ?? void 0,
                        "aria-label": ey.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details",
                            description: "Accessible label for Codex thread report details field"
                        }),
                        value: ej,
                        onChange: e => {
                            eC(e.target.value)
                        }
                    }) : null, null != eP.subtext ? (0, o.jsx)(w, {
                        children: eP.subtext
                    }) : null, eh ? eP.additional_fields?.map(e => {
                        let t = "text";
                        return "int" === e.type ? t = "number" : ("email" === e.type || "url" === e.type) && (t = e.type), (0, o.jsxs)("label", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [e.placeholder, "multi_line_text" === e.type ? (0, o.jsx)(h.c, {
                                required: e.required,
                                value: eS[e.id] ?? "",
                                onChange: t => eM(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            }) : (0, o.jsx)(h.a, {
                                type: t,
                                required: e.required,
                                value: eS[e.id] ?? "",
                                onChange: t => eM(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            })]
                        }, e.id)
                    }) : null]
                }) : R ? (0, o.jsx)(w, {
                    children: (eh ? eP?.link_explanation ?? eP?.explanation : eP?.link_explanation ?? eP?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report",
                        description: "Body shown when a Codex thread report reason needs an external form"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [T ? (0, o.jsx)(w, {
                        children: eP?.subtext
                    }) : null, T ? null : (0, o.jsx)(v, {
                        reasons: eN,
                        selectedReasonId: eT,
                        setSelectedReasonId: eR
                    })]
                }), Y[70] = eP, Y[71] = eS, Y[72] = ej, Y[73] = S, Y[74] = eh, Y[75] = ey, Y[76] = M, Y[77] = T, Y[78] = R, Y[79] = ew, Y[80] = ek, Y[81] = e_.isSuccess, Y[82] = eT, Y[83] = el, Y[84] = eN, Y[85] = U) : U = Y[85], Y[86] !== e_.isError ? (V = e_.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again",
                        description: "Error in the report dialog after submission fails; entered details remain available for another attempt"
                    })
                }) : null, Y[86] = e_.isError, Y[87] = V) : V = Y[87], Y[88] !== ew || Y[89] !== ek || Y[90] !== en || Y[91] !== eo ? (W = null != eo || ew || ek ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), Y[88] = ew, Y[89] = ek, Y[90] = en, Y[91] = eo, Y[92] = W) : W = Y[92], Y[93] !== U || Y[94] !== V || Y[95] !== W ? (q = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [U, V, W]
                }), Y[93] = U, Y[94] = V, Y[95] = W, Y[96] = q) : q = Y[96], Y[97] !== eP || Y[98] !== eL || Y[99] !== J || Y[100] !== e_.isPending || Y[101] !== e_.isSuccess ? (Q = null == eP && null == J || e_.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: e_.isPending,
                    type: "button",
                    onClick: eL,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back",
                        description: "Back button for Codex thread report reason selection"
                    })
                }), Y[97] = eP, Y[98] = eL, Y[99] = J, Y[100] = e_.isPending, Y[101] = e_.isSuccess, Y[102] = Q) : Q = Y[102], Y[103] !== ex || Y[104] !== eG || Y[105] !== T || Y[106] !== R || Y[107] !== eE || Y[108] !== eO || Y[109] !== e_.isPending || Y[110] !== eA ? ($ = !T || eA ? (0, o.jsx)(ex, {
                    color: "primary",
                    disabled: eE,
                    loading: e_.isPending,
                    type: R ? "button" : "submit",
                    onClick: R ? eG : void 0,
                    children: (0, o.jsx)(y, {
                        close: eA,
                        isLinkStep: R,
                        isSubmitStep: eO
                    })
                }) : null, Y[103] = ex, Y[104] = eG, Y[105] = T, Y[106] = R, Y[107] = eE, Y[108] = eO, Y[109] = e_.isPending, Y[110] = eA, Y[111] = $) : $ = Y[111], Y[112] !== Q || Y[113] !== $ ? (X = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [Q, $]
                    })
                }), Y[112] = Q, Y[113] = $, Y[114] = X) : X = Y[114], Y[115] !== ez || Y[116] !== G || Y[117] !== q || Y[118] !== X ? (K = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: ez,
                    children: [G, q, X]
                }), Y[115] = ez, Y[116] = G, Y[117] = q, Y[118] = X, Y[119] = K) : K = Y[119], Y[120] !== ep || Y[121] !== ef || Y[122] !== eD || Y[123] !== E || Y[124] !== K ? (H = (0, o.jsx)(p.a, {
                    open: !0,
                    onOpenChange: eD,
                    contentProps: E,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: K
                }), Y[120] = ep, Y[121] = ef, Y[122] = eD, Y[123] = E, Y[124] = K, Y[125] = H) : H = Y[125], H
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("BolX"),
            n = a("hV9T"),
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
                        hostId: n.Wb,
                        ...e
                    };
                if (o?.hostId === n.Wb) return {
                    environmentId: o.environmentId,
                    threadId: t ?? void 0,
                    executorAccess: a(u.threadFileRequestContext$, {
                        conversationId: t,
                        environmentId: o.environmentId
                    }).executorAccess,
                    requestClient: a(i.c, n.Wb)
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
                    if (m && await (0, n.ug)(u.subarray(0, n.ac)) !== "text") throw Error("File is not text");
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
                    contentSampleByteLimit: m ? n.ac : void 0,
                    contentSampleMaxFileBytes: m ? i : void 0,
                    hostId: o,
                    path: a
                }, g);
                if (null != i && null != x && x > i) throw Error("File is too large");
                if (m && "text" !== h) throw Error("File is not text");
                if (null != r.a.workspaceFiles.saveText) {
                    let e = await (0, d.a)(r.a.workspaceFiles.read({
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
                        dataBase64: (0, p.b)(a)
                    }, s), {
                        mtimeMs: (await i.sendRequest("fs/getMetadata", r, s)).modifiedAtMs,
                        outcome: "saved"
                    })
                }
                let s = r.a.workspaceFiles.saveText;
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