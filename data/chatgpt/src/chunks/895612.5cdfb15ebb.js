export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    UrAA: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            s = a("Ot7V");
        let l = "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";

        function r(e) {
            return (0, o.jsx)("a", {
                className: "underline underline-offset-2",
                href: l,
                rel: "noreferrer",
                target: "_blank",
                onClick: d,
                children: e
            })
        }

        function d(e) {
            (0, s.e)({
                event: e,
                href: l,
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
            s = a("zd8w"),
            l = a("Wf1j"),
            r = a("oyxz"),
            d = a("Qgfj"),
            c = a("Sm6l"),
            u = a("bqtn"),
            f = a("bf6R"),
            p = a("UxN3"),
            m = a("j9wQ");

        function g(e) {
            let t, a, s, r, d, p = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: h
                } = e,
                x = void 0 !== g && g,
                y = (0, l.a)();
            p[0] !== y ? (t = y.formatMessage(b.imageMenu), p[0] = y, p[1] = t) : t = p[1];
            let v = t;
            return p[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(f.ed, {}), p[2] = a) : a = p[2], p[3] !== x || p[4] !== v || p[5] !== h ? (s = (0, o.jsx)(c.a, {
                ref: h,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), p[3] = x, p[4] = v, p[5] = h, p[6] = s) : s = p[6], p[7] !== v || p[8] !== s ? (r = (0, o.jsx)(i.a, {
                content: v,
                children: s
            }), p[7] = v, p[8] = s, p[9] = r) : r = p[9], p[10] !== m || p[11] !== x || p[12] !== r ? (d = (0, o.jsx)(u.a, {
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
                    defaultMessage: "Feedback"
                },
                imageMenu: {
                    id: "imageSidePanel.more",
                    defaultMessage: "Show more"
                },
                likeImage: {
                    id: "imageSidePanel.like",
                    defaultMessage: "Like this image"
                },
                dislikeImage: {
                    id: "imageSidePanel.dislike",
                    defaultMessage: "Dislike this image"
                },
                likeGif: {
                    id: "imageSidePanel.likeGif",
                    defaultMessage: "Like this GIF"
                },
                dislikeGif: {
                    id: "imageSidePanel.dislikeGif",
                    defaultMessage: "Dislike this GIF"
                },
                goodResponse: {
                    id: "ConversationTurn.goodResponseFeedbackMenuItem",
                    defaultMessage: "Good response"
                },
                badResponse: {
                    id: "ConversationTurn.badResponseFeedbackMenuItem",
                    defaultMessage: "Bad response"
                },
                feedback: {
                    id: "ConversationTurn.rateResponseTooltip",
                    defaultMessage: "Rate response"
                },
                removeGoodResponse: {
                    id: "ConversationTurn.removeGoodResponseFeedbackTooltip",
                    defaultMessage: "Remove good response feedback"
                },
                removeBadResponse: {
                    id: "ConversationTurn.removeBadResponseFeedbackTooltip",
                    defaultMessage: "Remove bad response feedback"
                },
                rateQuestion: {
                    id: "requestUserInputAsync.feedback.rateQuestion",
                    defaultMessage: "Rate question"
                },
                goodQuestion: {
                    id: "requestUserInputAsync.feedback.goodQuestion",
                    defaultMessage: "Good question"
                },
                badQuestion: {
                    id: "requestUserInputAsync.feedback.badQuestion",
                    defaultMessage: "Bad question"
                }
            }),
            h = {
                response: {
                    feedback: b.feedback,
                    good: b.goodResponse,
                    bad: b.badResponse,
                    selectedGood: b.removeGoodResponse,
                    selectedBad: b.removeBadResponse
                },
                question: {
                    feedback: b.rateQuestion,
                    good: b.goodQuestion,
                    bad: b.badQuestion,
                    selectedGood: b.goodQuestion,
                    selectedBad: b.badQuestion
                }
            };
        a.d(t, {}, {
            a: g,
            b: function(e) {
                let t, a, d, x, y, v, k, w, j, _, C, S, M, F, I, T, R = (0, n.c)(108),
                    {
                        disabled: P,
                        hideUnselectedRating: O,
                        isAnimated: N,
                        menuItems: B,
                        rating: A,
                        ratingDisabled: D,
                        onRate: E,
                        shouldRestoreFocus: q,
                        variant: G
                    } = e,
                    L = void 0 !== P && P,
                    U = void 0 !== O && O,
                    z = void 0 !== N && N,
                    V = void 0 !== D && D,
                    Q = void 0 === G ? "response" : G,
                    W = (0, l.a)(),
                    $ = (0, s.useRef)(null),
                    Y = (0, s.useRef)(null),
                    H = (0, s.useRef)(!1);
                R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    H.current && ((Y.current ?? $.current)?.focus(), H.current = !1)
                }, R[0] = t) : t = R[0], R[1] !== A ? (a = [A], R[1] = A, R[2] = a) : a = R[2], (0, s.useLayoutEffect)(t, a), R[3] !== E || R[4] !== A || R[5] !== q ? (d = e => {
                    H.current = q?.(A === e ? null : e) ?? !0, E(e)
                }, R[3] = E, R[4] = A, R[5] = q, R[6] = d) : d = R[6];
                let K = d;
                if ("imageTurn" === Q || "imageOverlay" === Q) {
                    let e, t, a, n, s, l = "imageOverlay" === Q ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === Q ? "mediaOverlay" : "ghost";
                    R[7] !== W || R[8] !== z ? (e = z ? W.formatMessage(b.likeGif) : W.formatMessage(b.likeImage), R[7] = W, R[8] = z, R[9] = e) : e = R[9];
                    let d = e;
                    R[10] !== W || R[11] !== z ? (t = z ? W.formatMessage(b.dislikeGif) : W.formatMessage(b.dislikeImage), R[10] = W, R[11] = z, R[12] = t) : t = R[12];
                    let u = t;
                    return R[13] !== L || R[14] !== d || R[15] !== K || R[16] !== A || R[17] !== V || R[18] !== l || R[19] !== r || R[20] !== Q ? (a = "thumbsDown" !== A ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(c.a, {
                            ref: $,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === A,
                            color: "thumbsUp" === A ? l : r,
                            disabled: L || V || "thumbsUp" === A,
                            size: "imageOverlay" === Q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === Q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === Q && e.stopPropagation(), K("thumbsUp")
                            },
                            children: "thumbsUp" === A ? (0, o.jsx)(f.$i, {}) : (0, o.jsx)(f.Zi, {})
                        })
                    }) : null, R[13] = L, R[14] = d, R[15] = K, R[16] = A, R[17] = V, R[18] = l, R[19] = r, R[20] = Q, R[21] = a) : a = R[21], R[22] !== L || R[23] !== u || R[24] !== K || R[25] !== A || R[26] !== V || R[27] !== l || R[28] !== r || R[29] !== Q ? (n = "thumbsUp" !== A ? (0, o.jsx)(i.a, {
                        content: u,
                        children: (0, o.jsx)(c.a, {
                            ref: $,
                            "aria-label": u,
                            "aria-pressed": "thumbsDown" === A,
                            color: "thumbsDown" === A ? l : r,
                            disabled: L || V || "thumbsDown" === A,
                            size: "imageOverlay" === Q ? "inputIcon" : "icon",
                            radius: "imageOverlay" === Q ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === Q && e.stopPropagation(), K("thumbsDown")
                            },
                            children: "thumbsDown" === A ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {})
                        })
                    }) : null, R[22] = L, R[23] = u, R[24] = K, R[25] = A, R[26] = V, R[27] = l, R[28] = r, R[29] = Q, R[30] = n) : n = R[30], R[31] !== a || R[32] !== n ? (s = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), R[31] = a, R[32] = n, R[33] = s) : s = R[33], s
                }
                if ("imageViewerMenu" === Q || "imageViewerSubmenu" === Q) {
                    let e, t, a, n;
                    R[34] !== U || R[35] !== z || R[36] !== K || R[37] !== A || R[38] !== V ? (e = U && "thumbsDown" === A ? null : (0, o.jsx)(u.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsUp" === A ? (0, o.jsx)(f.$i, {}) : (0, o.jsx)(f.Zi, {}),
                        onSelect: () => K("thumbsUp"),
                        children: z ? (0, o.jsx)(r.a, {
                            ...b.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.likeImage
                        })
                    }), R[34] = U, R[35] = z, R[36] = K, R[37] = A, R[38] = V, R[39] = e) : e = R[39], R[40] !== U || R[41] !== z || R[42] !== K || R[43] !== A || R[44] !== V ? (t = U && "thumbsUp" === A ? null : (0, o.jsx)(u.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsDown" === A ? (0, o.jsx)(f.Xi, {}) : (0, o.jsx)(f.Vi, {}),
                        onSelect: () => K("thumbsDown"),
                        children: z ? (0, o.jsx)(r.a, {
                            ...b.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...b.dislikeImage
                        })
                    }), R[40] = U, R[41] = z, R[42] = K, R[43] = A, R[44] = V, R[45] = t) : t = R[45], R[46] !== t || R[47] !== e ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), R[46] = t, R[47] = e, R[48] = a) : a = R[48];
                    let i = a;
                    if ("imageViewerSubmenu" === Q) {
                        let e, t, a;
                        return R[49] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...b.imageFeedback
                        }), R[49] = e) : e = R[49], R[50] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(p.b, {
                            icon: {
                                16: f.aj,
                                20: f.bj
                            }
                        }), R[50] = t) : t = R[50], R[51] !== L || R[52] !== i ? (a = (0, o.jsx)(m.q, {
                            ref: Y,
                            disabled: L,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), R[51] = L, R[52] = i, R[53] = a) : a = R[53], a
                    }
                    return R[54] !== L || R[55] !== i || R[56] !== B ? (n = (0, o.jsxs)(g, {
                        triggerRef: $,
                        disabled: L,
                        children: [B, i]
                    }), R[54] = L, R[55] = i, R[56] = B, R[57] = n) : n = R[57], n
                }
                let X = h[Q];
                if (null != A) {
                    let e, t, a, n, s, l, r = "thumbsUp" === A;
                    R[58] !== r ? (e = r ? {
                        16: f._i,
                        20: f.$i
                    } : {
                        16: f.Wi,
                        20: f.Xi
                    }, R[58] = r, R[59] = e) : e = R[59];
                    let d = e;
                    R[60] !== W || R[61] !== r || R[62] !== X.selectedBad || R[63] !== X.selectedGood ? (t = W.formatMessage(r ? X.selectedGood : X.selectedBad), R[60] = W, R[61] = r, R[62] = X.selectedBad, R[63] = X.selectedGood, R[64] = t) : t = R[64];
                    let u = t;
                    return R[65] !== K || R[66] !== A ? (a = () => K(A), R[65] = K, R[66] = A, R[67] = a) : a = R[67], R[68] !== d ? (n = (0, o.jsx)(p.b, {
                        icon: d
                    }), R[68] = d, R[69] = n) : n = R[69], R[70] !== L || R[71] !== u || R[72] !== a || R[73] !== n ? (s = (0, o.jsx)(c.a, {
                        ref: $,
                        type: "button",
                        "aria-label": u,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: L,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), R[70] = L, R[71] = u, R[72] = a, R[73] = n, R[74] = s) : s = R[74], R[75] !== u || R[76] !== s ? (l = (0, o.jsx)(i.a, {
                        content: u,
                        children: s
                    }), R[75] = u, R[76] = s, R[77] = l) : l = R[77], l
                }
                R[78] !== W || R[79] !== X.feedback ? (x = W.formatMessage(X.feedback), R[78] = W, R[79] = X.feedback, R[80] = x) : x = R[80];
                let J = x;
                return R[81] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.aj,
                        20: f.bj
                    }
                }), R[81] = y) : y = R[81], R[82] !== J ? (v = (0, o.jsx)(c.a, {
                    ref: $,
                    "aria-label": J,
                    color: "ghost",
                    size: "icon",
                    children: y
                }), R[82] = J, R[83] = v) : v = R[83], R[84] !== J || R[85] !== v ? (k = (0, o.jsx)(i.a, {
                    content: J,
                    children: v
                }), R[84] = J, R[85] = v, R[86] = k) : k = R[86], R[87] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Yi,
                        20: f.Zi
                    }
                }), R[87] = w) : w = R[87], R[88] !== K ? (j = () => K("thumbsUp"), R[88] = K, R[89] = j) : j = R[89], R[90] !== X.good ? (_ = (0, o.jsx)(r.a, {
                    ...X.good
                }), R[90] = X.good, R[91] = _) : _ = R[91], R[92] !== j || R[93] !== _ ? (C = (0, o.jsx)(u.c.Item, {
                    leftIcon: w,
                    onSelect: j,
                    children: _
                }), R[92] = j, R[93] = _, R[94] = C) : C = R[94], R[95] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, o.jsx)(p.b, {
                    icon: {
                        16: f.Ui,
                        20: f.Vi
                    }
                }), R[95] = S) : S = R[95], R[96] !== K ? (M = () => K("thumbsDown"), R[96] = K, R[97] = M) : M = R[97], R[98] !== X.bad ? (F = (0, o.jsx)(r.a, {
                    ...X.bad
                }), R[98] = X.bad, R[99] = F) : F = R[99], R[100] !== M || R[101] !== F ? (I = (0, o.jsx)(u.c.Item, {
                    leftIcon: S,
                    onSelect: M,
                    children: F
                }), R[100] = M, R[101] = F, R[102] = I) : I = R[102], R[103] !== L || R[104] !== k || R[105] !== C || R[106] !== I ? (T = (0, o.jsxs)(u.a, {
                    disabled: L,
                    side: "top",
                    triggerButton: k,
                    children: [C, I]
                }), R[103] = L, R[104] = k, R[105] = C, R[106] = I, R[107] = T) : T = R[107], T
            }
        })
    }),
    taaw: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            s = a("Kwur"),
            l = a("OBi1"),
            r = a("HFSu");

        function d(e) {
            let t, a = (0, n.c)(5),
                {
                    reportEntityType: s,
                    title: l
                } = e;
            if (null != l) {
                let e;
                return a[0] !== l ? (e = (0, o.jsx)(o.Fragment, {
                    children: l
                }), a[0] = l, a[1] = e) : e = a[1], e
            }
            if ("share_link" === s) {
                let e;
                return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(i.a, {
                    id: "codexThreadReportDialog.sharedConversationTitle",
                    defaultMessage: "Report a conversation"
                }), a[2] = e) : e = a[2], e
            }
            if ("connector" === s) {
                let e;
                return a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(i.a, {
                    id: "codexThreadReportDialog.connectorTitle",
                    defaultMessage: "Report app"
                }), a[3] = e) : e = a[3], e
            }
            return a[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(i.a, {
                id: "codexThreadReportDialog.title",
                defaultMessage: "Report response"
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
                        contentClassName: F
                    } = e,
                    I = "connector" === k ? M : C,
                    T = w ?? k;
                m[0] !== y || m[1] !== g || m[2] !== b ? (t = null == g ? void 0 : () => {
                    null == y && b(), g()
                }, m[0] = y, m[1] = g, m[2] = b, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== T ? (a = y?.queryKey ?? ["codex-thread-report-reasons", T], m[4] = y?.queryKey, m[5] = T, m[6] = a) : a = m[6], m[7] !== y || m[8] !== T || m[9] !== x ? (i = null == y ? () => (async function(e, t) {
                    if (null != t) {
                        let a = await t(`/report_flow/reasons/${e}`);
                        if (!a.ok) throw Error("Could not load reporting options");
                        return await a.json()
                    }
                    return s.Request.safeGet("/report_flow/reasons/{entity_type}", {
                        parameters: {
                            path: {
                                entity_type: e
                            }
                        },
                        additionalHeaders: (0, r.c)()
                    })
                })(T, x) : e => {
                    let {
                        signal: t
                    } = e;
                    return y.loadReasons(t)
                }, m[7] = y, m[8] = T, m[9] = x, m[10] = i) : i = m[10];
                let R = null != y ? 0 : void 0,
                    P = null != y,
                    O = null != y,
                    N = null != y ? "chatgpt" : void 0;
                m[11] !== y || m[12] !== v || m[13] !== j || m[14] !== k || m[15] !== I || m[16] !== x ? (u = e => {
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
                            reasonId: l,
                            threadId: d
                        } = e, c = {
                            entity_id: d,
                            entity_type: i,
                            additional_fields_values: "project" === i || "share_link" === i ? {} : void 0,
                            product_area: o ?? ("conversation" === i || "connector" === i || "project" === i || "share_link" === i ? "1p" : "codex"),
                            reason: 0 === n.length ? {
                                id: l
                            } : {
                                id: l,
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
                        await s.Request.safePost("/report_flow/report", {
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
                        threadId: I
                    }, x, v, j)
                }, m[11] = y, m[12] = v, m[13] = j, m[14] = k, m[15] = I, m[16] = x, m[17] = u) : u = m[17];
                let B = null == x ? void 0 : c;
                return m[18] !== y?.title || m[19] !== k || m[20] !== S ? (f = y?.title ?? (0, o.jsx)(d, {
                    reportEntityType: k,
                    title: S
                }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = f) : f = m[21], m[22] !== F || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== R || m[31] !== P || m[32] !== O || m[33] !== N || m[34] !== u || m[35] !== B ? (p = (0, o.jsx)(l.ReportDialog, {
                    onBack: t,
                    onClose: b,
                    onCloseAutoFocus: h,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: R,
                    includeServerFields: P,
                    preventCloseWhileSubmitting: O,
                    dialogVariant: N,
                    contentClassName: F,
                    submitReport: u,
                    openExternalForm: B,
                    successBody: _,
                    title: f
                }), m[22] = F, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = R, m[31] = P, m[32] = O, m[33] = N, m[34] = u, m[35] = B, m[36] = p) : p = m[36], p
            }
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            s = a("Yc0o"),
            l = a("U8sx"),
            r = a("l54F");
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
                return e.set(l.b, y, {
                    content: c,
                    path: g,
                    save: null
                }), !!a(e, g, {
                    revealAndFocus: d,
                    hostId: f,
                    insertPosition: p,
                    onContentChange: t => {
                        e.set(l.b, y, e => e?.path === g ? {
                            ...e,
                            content: t
                        } : e)
                    },
                    onSaveChange: t => {
                        e.set(l.b, y, e => e?.path === g ? {
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
                    tabId: s.a.PLAN,
                    target: h
                }) && ((0, i.getThreadPanelTabController)((0, i.d)(e, s.a.PLAN) ?? "right").updateTab(e, s.a.PLAN, {
                    icon: (0, o.jsx)(n.a, {
                        className: "shrink-0",
                        asset: r.a
                    }),
                    title: x
                }), e.set(l.a, {
                    key: m,
                    tabId: s.a.PLAN
                }), !0)
            }
        })
    }),
    Y05g: (function(e, t, a) {
        a.r(t), a("I07G"), a("tl5a");
        var o = a("ZU27");
        a("GaA7"), a("sbaW"), a("ndjw");
        var n = a("bCmT");
        a("odlM"), a("VtLY");
        var i = a("Yc0o");
        a("WFY2"), a("bnxy"), a("cbrt");
        var s = a("U8sx");
        a("bRIv");
        let l = (0, n.b)({
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
            return e.set(s.a, {
                key: c,
                tabId: g
            }), (0, o.h)(e, l, {
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
                    e.get(s.a)?.key === c && e.set(s.a, null)
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
            activePlan$: () => s.a,
            editablePlanByKey$: () => s.b,
            editablePlanContentByKey$: () => s.c
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
        let s = (0, o.u)(i.a, null),
            l = (0, o.v)(n.a, e => null),
            r = (0, o.d)(n.a, (e, t) => {
                let {
                    get: a
                } = t;
                return a(l, e)?.content ?? null
            });
        a.d(t, {}, {
            a: s,
            b: l,
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
            s = a("on57"),
            l = a("IPUh"),
            r = a("BolX"),
            d = a("zd8w"),
            c = a("Wf1j"),
            u = a("oyxz");
        a("ZU27"), a("gbrq");
        var f = a("Sm6l"),
            p = a("uuN8"),
            m = a("HOLv"),
            g = a("UxN3"),
            b = a("POXM"),
            h = a("HJzg"),
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
            y = a("RzPe"),
            v = a("ENVX"),
            k = a("HWQc"),
            w = a("yGJW");
        a("tSEg");
        var j = a("sbaW"),
            _ = a("V8uZ"),
            C = a("aepO"),
            S = a("gBCz");
        a("Y05g");
        var M = a("wbOy"),
            F = a("YPzM"),
            I = a("F0eZ"),
            T = a("nVTy"),
            R = a("l54F");

        function P(e) {
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
            let t, a, P, O, B, A, D, E, q, G, L, U, z, V, Q, W, $, Y, H, K, X, J, Z, ee, et, ea, eo, en, ei, es = (0, n.c)(106),
                {
                    item: el,
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
                eF = (0, r.z)(w.c),
                eI = (0, r.z)(b.b);
            (void 0 === em || em) && el.completed, es[0] !== el.completed || es[1] !== el.content ? (t = el.completed && el.content.trim().length > 0, es[0] = el.completed, es[1] = el.content, es[2] = t) : t = es[2];
            let eT = t;
            es[3] !== el.completed || es[4] !== el.content ? (a = el.completed && el.content.trim().length > 0, es[3] = el.completed, es[4] = el.content, es[5] = a) : a = es[5];
            let eR = eT && !0,
                eP = a && !0,
                eO = eI && null != eg && null != eF.submitCodexAnalyticsEvent && !0;
            es[6] !== eM ? (P = eM.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan"
            }), es[6] = eM, es[7] = P) : P = es[7];
            let eN = P;
            es[8] !== eM ? (O = eM.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel"
            }), es[8] = eM, es[9] = O) : O = es[9];
            let eB = O;
            es[10] !== eM ? (B = eM.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel"
            }), es[10] = eM, es[11] = B) : B = es[11];
            let eA = B;
            es[12] !== eM || es[13] !== e_ ? (A = e_ ? eM.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary"
            }) : eM.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary"
            }), es[12] = eM, es[13] = e_, es[14] = A) : A = es[14];
            let eD = A;
            es[15] !== el.content ? (D = () => {
                let e = new Blob([el.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    t = URL.createObjectURL(e),
                    a = document.createElement("a");
                a.href = t, a.download = "PLAN.md", a.click(), URL.revokeObjectURL(t)
            }, es[15] = el.content, es[16] = D) : D = es[16];
            let eE = D;
            es[17] !== er || es[18] !== el.content || es[19] !== eF || es[20] !== eg ? (E = e => (null != eg && eF.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: er,
                turnId: eg
            }), (0, C.c)(el.content, e)), es[17] = er, es[18] = el.content, es[19] = eF, es[20] = eg, es[21] = E) : E = es[21];
            let eq = E,
                eG = ew ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            es[22] !== ew || es[23] !== ej || es[24] !== ex ? (q = ew && !ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, es[22] = ew, es[23] = ej, es[24] = ex, es[25] = q) : q = es[25], es[26] !== eA || es[27] !== ej || es[28] !== ex ? (G = ej && null != ex ? (0, o.jsx)("button", {
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
            }) : null, es[26] = eA, es[27] = ej, es[28] = ex, es[29] = G) : G = es[29];
            let eL = ew ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            es[30] !== eL ? (L = (0, s.b)("text-base leading-tight", eL), es[30] = eL, es[31] = L) : L = es[31], es[32] !== ew ? (U = ew ? (0, o.jsx)(m.a, {
                className: "shrink-0",
                asset: R.a
            }) : null, es[32] = ew, es[33] = U) : U = es[33], es[34] !== el.completed ? (z = el.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan"
            }) : (0, o.jsx)(M.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan"
                })
            }), es[34] = el.completed, es[35] = z) : z = es[35], es[36] !== L || es[37] !== U || es[38] !== z ? (V = (0, o.jsxs)("span", {
                className: L,
                children: [U, z]
            }), es[36] = L, es[37] = U, es[38] = z, es[39] = V) : V = es[39];
            let eU = ej && "hidden";
            es[40] !== eU ? (Q = (0, s.b)("relative z-20 flex items-center gap-1", eU), es[40] = eU, es[41] = Q) : Q = es[41];
            es[42] !== eN || es[43] !== eE || es[44] !== eP ? (W = eP ? (0, o.jsx)(i.a, {
                content: eN,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eN,
                    onClick: eE,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: I.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, es[42] = eN, es[43] = eE, es[44] = eP, es[45] = W) : W = es[45], es[46] !== eq || es[47] !== eR ? ($ = eR ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eq
            }) : null, es[46] = eq, es[47] = eR, es[48] = $) : $ = es[48], es[49] !== er || es[50] !== ev || es[51] !== ek || es[52] !== eO || es[53] !== eg ? (Y = eO ? (0, o.jsx)(F.a, {
                hasArtifacts: ev,
                reportEntityType: ek,
                threadId: er,
                turnId: eg
            }) : null, es[49] = er, es[50] = ev, es[51] = ek, es[52] = eO, es[53] = eg, es[54] = Y) : Y = es[54], es[55] !== ex || es[56] !== eB ? (H = null != ex ? (0, o.jsx)(i.a, {
                content: eB,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eB,
                    onClick: ex,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: T.a,
                        legacyIcon: v.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, es[55] = ex, es[56] = eB, es[57] = H) : H = es[57], es[58] !== eD || es[59] !== e_ || es[60] !== ew ? (K = ew ? null : (0, o.jsx)(i.a, {
                content: e_ ? (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.expandTooltip",
                    defaultMessage: "Expand"
                }) : (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.collapseTooltip",
                    defaultMessage: "Collapse"
                }),
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eD,
                    onClick: () => {
                        eC(N)
                    },
                    children: (0, o.jsx)(h.a, {
                        className: (0, s.b)("icon-2xs transition-transform", e_ ? "rotate-180" : "rotate-0")
                    })
                })
            }), es[58] = eD, es[59] = e_, es[60] = ew, es[61] = K) : K = es[61], es[62] !== ej || es[63] !== Q || null !== es[64] || es[65] !== W || es[66] !== $ || es[67] !== Y || es[68] !== H || es[69] !== K ? (X = (0, o.jsxs)("div", {
                "aria-hidden": ej,
                className: Q,
                children: [null, W, $, Y, H, K]
            }), es[62] = ej, es[63] = Q, es[64] = null, es[65] = W, es[66] = $, es[67] = Y, es[68] = H, es[69] = K, es[70] = X) : X = es[70], es[71] !== G || es[72] !== V || es[73] !== X ? (J = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [G, V, X]
            }), es[71] = G, es[72] = V, es[73] = X, es[74] = J) : J = es[74], es[75] !== er ? (Z = {
                [S.a]: er
            }, es[75] = er, es[76] = Z) : Z = es[76];
            let ez = ej || void 0,
                eV = ew && !ej && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            es[77] !== eV ? (ee = (0, s.b)("relative overflow-hidden", eV), es[77] = eV, es[78] = ee) : ee = es[78];
            let eQ = ej || void 0;
            es[79] !== e_ || es[80] !== ew || es[81] !== ej ? (et = ew ? {
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
            }, es[79] = e_, es[80] = ew, es[81] = ej, es[82] = et) : et = es[82];
            let eW = !el.completed;
            return es[83] !== er || es[84] !== ed || es[85] !== ey || es[86] !== eS || es[87] !== el.content || es[88] !== eW ? (ea = (0, o.jsx)(k.c, {
                markdown: el.content,
                conversationId: er,
                hostId: eS,
                hideCodeBlocks: ey,
                isStreaming: eW,
                cwd: ed
            }), es[83] = er, es[84] = ed, es[85] = ey, es[86] = eS, es[87] = el.content, es[88] = eW, es[89] = ea) : ea = es[89], es[90] !== e_ || es[91] !== ew ? (eo = !ew && e_ ? (0, o.jsxs)(o.Fragment, {
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
                            defaultMessage: "Expand plan"
                        })
                    })
                })]
            }) : null, es[90] = e_, es[91] = ew, es[92] = eo) : eo = es[92], es[93] !== Z || es[94] !== ez || es[95] !== ee || es[96] !== eQ || es[97] !== et || es[98] !== ea || es[99] !== eo ? (en = (0, o.jsxs)(l.a.div, {
                ...Z,
                "aria-hidden": ez,
                className: ee,
                inert: eQ,
                initial: !1,
                animate: et,
                transition: _.a,
                children: [ea, eo]
            }), es[93] = Z, es[94] = ez, es[95] = ee, es[96] = eQ, es[97] = et, es[98] = ea, es[99] = eo, es[100] = en) : en = es[100], es[101] !== eG || es[102] !== q || es[103] !== J || es[104] !== en ? (ei = (0, o.jsxs)(k.b, {
                className: eG,
                children: [q, J, en]
            }), es[101] = eG, es[102] = q, es[103] = J, es[104] = en, es[105] = ei) : ei = es[105], ei
        }

        function N(e) {
            return !e
        }
    }),
    YPzM: (function(e, t, a) {
        a.d(t, {
            a: () => _
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("BolX"),
            s = a("zd8w"),
            l = a("Qgfj"),
            r = a("tl5a"),
            d = a("X6Vn"),
            c = a("UrAA"),
            u = a("Bbed"),
            f = a("NJMI");
        let p = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(911061)]).then(a.bind(a, "v9GG"))).FeedbackSubmissionDialog, {
                errorFallback: (0, o.jsx)(f.a, {
                    onClose: e => (0, d.b)(e, p)
                })
            }),
            m = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(64006)]).then(a.bind(a, "TAai"))).FeedbackFormDialog, {
                errorFallback: (0, o.jsx)(f.a, {
                    onClose: e => (0, d.b)(e, m)
                })
            });
        var g = a("nIGo"),
            b = a("yGJW"),
            h = a("OWtl"),
            x = a("taaw");
        let y = "safety_or_legal_concern",
            v = {
                thumbs_down: "thumbsDown",
                thumbs_up: "thumbsUp"
            },
            k = (0, l.f)({
                wrongPresentationLength: {
                    id: "turnRatingControls.artifactFeedback.wrongPresentationLength",
                    defaultMessage: "Wrong presentation length"
                },
                poorWriting: {
                    id: "turnRatingControls.artifactFeedback.poorWriting",
                    defaultMessage: "Poor writing"
                },
                poorStyleFormatOrVisuals: {
                    id: "turnRatingControls.artifactFeedback.poorStyleFormatOrVisuals",
                    defaultMessage: "Poor style, format, or visuals"
                },
                wrongTopicsOrSubtopics: {
                    id: "turnRatingControls.artifactFeedback.wrongTopicsOrSubtopics",
                    defaultMessage: "Wrong topics or subtopics"
                },
                didntFollowMyInstructions: {
                    id: "turnRatingControls.artifactFeedback.didntFollowMyInstructions",
                    defaultMessage: "Didn't follow my instructions"
                },
                didntFollowMyTemplate: {
                    id: "turnRatingControls.artifactFeedback.didntFollowMyTemplate",
                    defaultMessage: "Didn't follow my template"
                },
                incorrectContent: {
                    id: "turnRatingControls.artifactFeedback.incorrectContent",
                    defaultMessage: "Incorrect content"
                },
                goodContent: {
                    id: "turnRatingControls.artifactFeedback.goodContent",
                    defaultMessage: "Good content"
                },
                goodWritingQuality: {
                    id: "turnRatingControls.artifactFeedback.goodWritingQuality",
                    defaultMessage: "Good writing quality"
                },
                goodStyleFormatOrVisuals: {
                    id: "turnRatingControls.artifactFeedback.goodStyleFormatOrVisuals",
                    defaultMessage: "Good style, format, or visuals"
                },
                followedMyInstructionsWell: {
                    id: "turnRatingControls.artifactFeedback.followedMyInstructionsWell",
                    defaultMessage: "Followed my instructions well"
                },
                generatedQuickly: {
                    id: "turnRatingControls.artifactFeedback.generatedQuickly",
                    defaultMessage: "Generated quickly"
                },
                solvedMyTask: {
                    id: "turnRatingControls.feedback.solvedMyTask",
                    defaultMessage: "Solved my task"
                },
                followedMyInstructions: {
                    id: "turnRatingControls.feedback.followedMyInstructions",
                    defaultMessage: "Followed my instructions"
                },
                goodCodeOrOutputQuality: {
                    id: "turnRatingControls.feedback.goodCodeOrOutputQuality",
                    defaultMessage: "Good code / output quality"
                },
                fastAndEfficient: {
                    id: "turnRatingControls.feedback.fastAndEfficient",
                    defaultMessage: "Fast and efficient"
                },
                usefulAutonomy: {
                    id: "turnRatingControls.feedback.usefulAutonomy",
                    defaultMessage: "Useful autonomy"
                },
                incorrectOrIncomplete: {
                    id: "turnRatingControls.feedback.incorrectOrIncomplete",
                    defaultMessage: "Incorrect or incomplete"
                },
                offTrackOrWrongScope: {
                    id: "turnRatingControls.feedback.offTrackOrWrongScope",
                    defaultMessage: "Off track / wrong scope"
                },
                lostContext: {
                    id: "turnRatingControls.feedback.lostContext",
                    defaultMessage: "Lost context"
                },
                slowOrBuggy: {
                    id: "turnRatingControls.feedback.slowOrBuggy",
                    defaultMessage: "Slow or buggy"
                },
                safetyOrLegalConcern: {
                    id: "turnRatingControls.feedback.safetyOrLegalConcern",
                    defaultMessage: "Safety or legal concern"
                },
                other: {
                    id: "turnRatingControls.feedback.other",
                    defaultMessage: "Other"
                }
            }),
            w = {
                thumbs_down: [{
                    id: "wrong_presentation_length",
                    label: k.wrongPresentationLength
                }, {
                    id: "poor_writing",
                    label: k.poorWriting
                }, {
                    id: "poor_style_format_or_visuals",
                    label: k.poorStyleFormatOrVisuals
                }, {
                    id: "wrong_topics_or_subtopics",
                    label: k.wrongTopicsOrSubtopics
                }, {
                    id: "didnt_follow_my_instructions",
                    label: k.didntFollowMyInstructions
                }, {
                    id: "didnt_follow_my_template",
                    label: k.didntFollowMyTemplate
                }, {
                    id: "incorrect_content",
                    label: k.incorrectContent
                }, {
                    id: y,
                    label: k.safetyOrLegalConcern
                }],
                thumbs_up: [{
                    id: "good_content",
                    label: k.goodContent
                }, {
                    id: "good_writing_quality",
                    label: k.goodWritingQuality
                }, {
                    id: "good_style_format_or_visuals",
                    label: k.goodStyleFormatOrVisuals
                }, {
                    id: "followed_my_instructions_well",
                    label: k.followedMyInstructionsWell
                }, {
                    id: "generated_quickly",
                    label: k.generatedQuickly
                }]
            },
            j = {
                thumbs_down: [{
                    id: "incorrect_or_incomplete",
                    label: k.incorrectOrIncomplete
                }, {
                    id: "didnt_follow_my_instructions",
                    label: k.didntFollowMyInstructions
                }, {
                    id: "off_track_or_wrong_scope",
                    label: k.offTrackOrWrongScope
                }, {
                    id: "lost_context",
                    label: k.lostContext
                }, {
                    id: "slow_or_buggy",
                    label: k.slowOrBuggy
                }, {
                    id: y,
                    label: k.safetyOrLegalConcern
                }, {
                    id: "other",
                    label: k.other
                }],
                thumbs_up: [{
                    id: "solved_my_task",
                    label: k.solvedMyTask
                }, {
                    id: "followed_my_instructions",
                    label: k.followedMyInstructions
                }, {
                    id: "good_code_or_output_quality",
                    label: k.goodCodeOrOutputQuality
                }, {
                    id: "fast_and_efficient",
                    label: k.fastAndEfficient
                }, {
                    id: "useful_autonomy",
                    label: k.usefulAutonomy
                }, {
                    id: "other",
                    label: k.other
                }]
            };

        function _(e) {
            let t, a = (0, n.c)(14),
                {
                    hasArtifacts: l,
                    reportEntityType: u,
                    renderControl: f,
                    threadId: p,
                    turnId: k
                } = e,
                _ = void 0 !== l && l,
                S = void 0 === u ? "thread" : u,
                M = (0, i.y)(h.a),
                [F, I] = (0, s.useState)(null),
                T = (0, i.z)(b.c);
            if (a[0] !== _ || a[1] !== T || a[2] !== f || a[3] !== S || a[4] !== M || a[5] !== F || a[6] !== p || a[7] !== k) {
                let e, n = (e, t, a) => {
                        let n = _ ? w[e] : j[e];
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
                                return o === y ? void i(a, e) : T.submitCodexAnalyticsEvent?.({
                                    action: "submit_turn_feedback",
                                    eventKind: "action",
                                    threadId: p,
                                    turnId: k,
                                    metadata: {
                                        details: a,
                                        has_artifacts: _,
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
                a[9] !== T || a[10] !== M || a[11] !== p || a[12] !== k ? (e = e => {
                    if (I(e), null == e) return;
                    let t = M.get(r.zb, p);
                    T.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: p,
                        turnId: k,
                        sessionId: t === p && null != M.get(r.Kb, p) ? null : t,
                        rating: e
                    })
                }, a[9] = T, a[10] = M, a[11] = p, a[12] = k, a[13] = e) : e = a[13];
                let s = e,
                    l = {
                        rating: null == F ? null : v[F],
                        onRate: e => {
                            let t = "thumbsUp" === e ? "thumbs_up" : "thumbs_down",
                                a = F === t ? null : t;
                            s(a), null != a && n(a)
                        },
                        shouldRestoreFocus: C
                    };
                t = null != f ? f(l, e => s("thumbsUp" === e ? "thumbs_up" : null)) : (0, o.jsx)(g.b, {
                    ...l
                }), a[0] = _, a[1] = T, a[2] = f, a[3] = S, a[4] = M, a[5] = F, a[6] = p, a[7] = k, a[8] = t
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
            s = a("zd8w"),
            l = a("oyxz"),
            r = a("UxN3"),
            d = a("HJzg"),
            c = a("tKUf"),
            u = a("cWXs"),
            f = a("YTUz");

        function p(e) {
            let t, a, c, u, p, b = (0, n.c)(13),
                {
                    entries: h
                } = e,
                [x, y] = (0, s.useState)(!1),
                v = h.length > 8;
            b[0] !== h || b[1] !== x || b[2] !== v ? (t = v && !x ? h.slice(0, 8) : h, b[0] = h, b[1] = x, b[2] = v, b[3] = t) : t = b[3];
            let k = t;
            return b[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)("div", {
                className: "mb-2 font-medium text-secondary",
                children: (0, o.jsx)(l.a, {
                    id: "markdown.metadata.title",
                    defaultMessage: "Metadata"
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
                    children: x ? (0, o.jsx)(l.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less"
                    }) : (0, o.jsx)(l.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more"
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
            let t, a, s, l = (0, n.c)(7),
                {
                    className: r,
                    entries: d
                } = e;
            return l[0] !== r ? (t = (0, i.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", r), l[0] = r, l[1] = t) : t = l[1], l[2] !== d ? (a = d.map(b), l[2] = d, l[3] = a) : a = l[3], l[4] !== t || l[5] !== a ? (s = (0, o.jsx)("dl", {
                className: t,
                children: a
            }), l[4] = t, l[5] = a, l[6] = s) : s = l[6], s
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
            let s = 0 === i.length ? '""' : i;
            return a[4] !== s ? (t = (0, o.jsx)("span", {
                className: "font-mono break-words",
                children: s
            }), a[4] = s, a[5] = t) : t = a[5], t
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
                let t, a, s = (0, n.c)(7),
                    {
                        background: l,
                        className: r,
                        children: d,
                        overflow: c
                    } = e,
                    u = "normal" === (void 0 === l ? "subtle" : l) ? "bg-surface" : "bg-text/5",
                    f = "auto" === (void 0 === c ? "clip" : c) ? "overflow-auto" : "overflow-clip";
                return s[0] !== r || s[1] !== u || s[2] !== f ? (t = (0, i.b)("relative rounded-lg", u, f, r), s[0] = r, s[1] = u, s[2] = f, s[3] = t) : t = s[3], s[4] !== d || s[5] !== t ? (a = (0, o.jsx)("div", {
                    className: t,
                    children: d
                }), s[4] = d, s[5] = t, s[6] = a) : a = s[6], a
            },
            c: function(e) {
                let t, a, i, s, l = (0, n.c)(15),
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
                l[0] !== x || l[1] !== d ? (t = x ? (0, c.a)(d) : null, l[0] = x, l[1] = d, l[2] = t) : t = l[2];
                let w = t,
                    j = w?.body ?? d;
                return l[3] !== w ? (a = null != w && w.entries.length > 0 ? (0, o.jsx)(p, {
                    entries: w.entries
                }) : null, l[3] = w, l[4] = a) : a = l[4], l[5] !== y || l[6] !== v || l[7] !== g || l[8] !== b || l[9] !== k || l[10] !== j ? (i = (0, o.jsx)(u.a, {
                    className: "text-size-chat",
                    conversationId: y,
                    hideCodeBlocks: g,
                    hostId: b,
                    isStreaming: k,
                    cwd: v,
                    children: j
                }), l[5] = y, l[6] = v, l[7] = g, l[8] = b, l[9] = k, l[10] = j, l[11] = i) : i = l[11], l[12] !== a || l[13] !== i ? (s = (0, o.jsxs)("div", {
                    className: "px-4 py-3",
                    children: [a, i]
                }), l[12] = a, l[13] = i, l[14] = s) : s = l[14], s
            }
        })
    }),
    OBi1: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("T0Rc"),
            s = a("xSOA"),
            l = a("on57"),
            r = a("zd8w"),
            d = a("Wf1j"),
            c = a("oyxz"),
            u = a("MM0V"),
            f = a("Sm6l"),
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
                    isLinkStep: s,
                    isSubmitStep: l
                } = e;
            if (i) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.close",
                    defaultMessage: "Close"
                }), a[0] = e) : e = a[0], e
            }
            if (s) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.viewForm",
                    defaultMessage: "View form"
                }), a[1] = e) : e = a[1], e
            }
            if (l) {
                let e;
                return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.submit",
                    defaultMessage: "Submit"
                }), a[2] = e) : e = a[2], e
            }
            return a[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(c.a, {
                id: "codexThreadReportDialog.next",
                defaultMessage: "Next"
            }), a[3] = t) : t = a[3], t
        }

        function v(e) {
            let t, a, i, s = (0, n.c)(12),
                {
                    reasons: r,
                    selectedReasonId: c,
                    setSelectedReasonId: u
                } = e,
                f = (0, d.a)();
            if (s[0] !== f ? (t = f.formatMessage({
                    id: "codexThreadReportDialog.optionsLabel",
                    defaultMessage: "Reporting options"
                }), s[0] = f, s[1] = t) : t = s[1], s[2] !== r || s[3] !== c || s[4] !== u) {
                let e;
                s[6] !== c || s[7] !== u ? (e = e => {
                    let t = c === e.id;
                    return (0, o.jsx)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": t,
                        onClick: () => {
                            u(e.id)
                        },
                        className: (0, l.b)("border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", t ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: e.cta
                    }, e.id)
                }, s[6] = c, s[7] = u, s[8] = e) : e = s[8], a = r.map(e), s[2] = r, s[3] = c, s[4] = u, s[5] = a
            } else a = s[5];
            return s[9] !== t || s[10] !== a ? (i = (0, o.jsx)("div", {
                role: "radiogroup",
                "aria-label": t,
                className: "flex flex-col gap-2 select-none",
                children: a
            }), s[9] = t, s[10] = a, s[11] = i) : i = s[11], i
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
                let t, a, l, j, _, C, S, M, F, I, T, R, P, O, N, B, A, D, E, q, G, L, U, z, V, Q, W, $, Y, H, K, X = (0, n.c)(126),
                    {
                        onBack: J,
                        onClose: Z,
                        onCloseAutoFocus: ee,
                        queryKey: et,
                        loadReasons: ea,
                        submitReport: eo,
                        submissionUnavailable: en,
                        openExternalForm: ei,
                        successBody: es,
                        title: el,
                        gcTime: er,
                        staleTime: ed,
                        includeServerFields: ec,
                        preventCloseWhileSubmitting: eu,
                        dialogVariant: ef,
                        contentClassName: ep,
                        PrimaryButton: em
                    } = e,
                    eg = void 0 === ed ? h.b.ONE_MINUTE : ed,
                    eb = void 0 !== ec && ec,
                    eh = void 0 !== eu && eu,
                    ex = void 0 === em ? f.a : em,
                    ey = (0, d.a)();
                X[0] !== er ? (t = null == er ? {} : {
                    gcTime: er
                }, X[0] = er, X[1] = t) : t = X[1], X[2] !== ea || X[3] !== et || X[4] !== eg || X[5] !== t ? (a = {
                    queryKey: et,
                    queryFn: ea,
                    ...t,
                    staleTime: eg
                }, X[2] = ea, X[3] = et, X[4] = eg, X[5] = t, X[6] = a) : a = X[6];
                let {
                    data: ev,
                    isPending: ek,
                    isError: ew
                } = (0, i.a)(a);
                X[7] !== eo ? (l = {
                    mutationFn: eo
                }, X[7] = eo, X[8] = l) : l = X[8];
                let ej = (0, s.a)(l),
                    [e_, eC] = (0, r.useState)("");
                X[9] === Symbol.for("react.memo_cache_sentinel") ? (j = {}, X[9] = j) : j = X[9];
                let [eS, eM] = (0, r.useState)(j), [eF, eI] = (0, r.useState)(null);
                X[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], X[10] = _) : _ = X[10];
                let [eT, eR] = (0, r.useState)(_), eP = 0 === eT.length ? null : eT[eT.length - 1];
                X[11] !== eP || X[12] !== ev?.reasons ? (C = (null == eP ? ev?.reasons : eP.sub_reasons) ?? [], X[11] = eP, X[12] = ev?.reasons, X[13] = C) : C = X[13];
                let eO = C;
                X[14] !== eP?.additional_fields?.length || X[15] !== eP?.details_placeholder || X[16] !== eP?.has_details || X[17] !== eP?.link_attachment || X[18] !== eP?.subtext || X[19] !== eb || X[20] !== eF || X[21] !== eO ? (T = eO.find(e => e.id === eF) ?? null, M = (S = eP?.details_placeholder != null || eb && eP?.has_details === !0) || eb && (eP?.additional_fields?.length ?? 0) > 0, I = eP?.link_attachment != null, F = eP?.subtext != null && 0 === eO.length && !M && !I, R = M || null != T && w(T, eb), X[14] = eP?.additional_fields?.length, X[15] = eP?.details_placeholder, X[16] = eP?.has_details, X[17] = eP?.link_attachment, X[18] = eP?.subtext, X[19] = eb, X[20] = eF, X[21] = eO, X[22] = S, X[23] = M, X[24] = F, X[25] = I, X[26] = T, X[27] = R) : (S = X[22], M = X[23], F = X[24], I = X[25], T = X[26], R = X[27]);
                let eN = R,
                    eB = null == T || ek || ej.isPending,
                    eA = ej.isSuccess || ew,
                    eD = !eA && (eN && null == eo || !eN && !I && eB);
                X[28] !== Z || X[29] !== eh || X[30] !== ej.isPending ? (P = e => {
                    e || eh && ej.isPending || Z()
                }, X[28] = Z, X[29] = eh, X[30] = ej.isPending, X[31] = P) : P = X[31];
                let eE = P;
                X[32] !== eP || X[33] !== J || X[34] !== eT ? (O = () => {
                    if (null == eP) return void J?.();
                    let e = eT[eT.length - 1];
                    eR(x), eI(e?.id ?? null), eC(""), eM({})
                }, X[32] = eP, X[33] = J, X[34] = eT, X[35] = O) : O = X[35];
                let eq = O;
                X[36] !== eP || X[37] !== eS || X[38] !== e_ || X[39] !== eb || X[40] !== M || X[41] !== F || X[42] !== I || X[43] !== Z || X[44] !== ei || X[45] !== ej || X[46] !== T || X[47] !== eT || X[48] !== eA || X[49] !== eo ? (N = e => {
                    if (e.preventDefault(), !ej.isPending && (!eb || e.currentTarget.reportValidity())) {
                        if (eA) return void Z();
                        if (!F) {
                            if (I && eP?.link_attachment != null) return null != ei ? void ei(eP.link_attachment) : void(0, g.f)({
                                href: eP.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (M && null != eP) {
                                if (null == eo) return;
                                ej.mutate({
                                    details: e_.trim(),
                                    reason: eP,
                                    path: eT,
                                    ...eb ? {
                                        additionalFields: eS
                                    } : {}
                                });
                                return
                            }
                            if (null != T) {
                                if (w(T, eb)) {
                                    if (null == eo) return;
                                    ej.mutate({
                                        details: "",
                                        reason: T,
                                        path: [...eT, T]
                                    });
                                    return
                                }
                                eR(e => [...e, T]), eI(null), eC(""), eM({})
                            }
                        }
                    }
                }, X[36] = eP, X[37] = eS, X[38] = e_, X[39] = eb, X[40] = M, X[41] = F, X[42] = I, X[43] = Z, X[44] = ei, X[45] = ej, X[46] = T, X[47] = eT, X[48] = eA, X[49] = eo, X[50] = N) : N = X[50];
                let eG = N;
                X[51] !== eP || X[52] !== ei ? (B = e => {
                    if (eP?.link_attachment != null) {
                        if (null != ei) return void ei(eP.link_attachment);
                        (0, g.e)({
                            event: e,
                            href: eP.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, X[51] = eP, X[52] = ei, X[53] = B) : B = X[53];
                let eL = B;
                X[54] !== eP || X[55] !== ev || X[56] !== ej.isSuccess ? (A = function(e) {
                    let {
                        activeReason: t,
                        isSuccess: a,
                        reportReasons: o
                    } = e;
                    return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
                }({
                    activeReason: eP,
                    reportReasons: ev,
                    isSuccess: ej.isSuccess
                }), X[54] = eP, X[55] = ev, X[56] = ej.isSuccess, X[57] = A) : A = X[57];
                let eU = A;
                return X[58] !== ee ? (D = {
                    onCloseAutoFocus: ee
                }, X[58] = ee, X[59] = D) : D = X[59], X[60] !== ej.isSuccess || X[61] !== el ? (E = ej.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report"
                }) : el, X[60] = ej.isSuccess, X[61] = el, X[62] = E) : E = X[62], X[63] !== E ? (q = (0, o.jsx)(p.e, {
                    children: E
                }), X[63] = E, X[64] = q) : q = X[64], X[65] !== eU ? (G = null != eU ? (0, o.jsx)(p.d, {
                    children: eU
                }) : void 0, X[65] = eU, X[66] = G) : G = X[66], X[67] !== q || X[68] !== G ? (L = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: q,
                        subtitle: G,
                        titleSize: "dialog"
                    })
                }), X[67] = q, X[68] = G, X[69] = L) : L = X[69], X[70] !== eP || X[71] !== eS || X[72] !== e_ || X[73] !== S || X[74] !== eb || X[75] !== ey || X[76] !== M || X[77] !== F || X[78] !== I || X[79] !== ek || X[80] !== ew || X[81] !== ej.isSuccess || X[82] !== eF || X[83] !== es || X[84] !== eO ? (U = ej.isSuccess ? (0, o.jsx)(k, {
                    children: es ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.successBody",
                        defaultMessage: "Our team will review the content to determine if it violates our policies"
                    })
                }) : ek ? (0, o.jsx)(k, {
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.loading",
                        defaultMessage: "Loading reporting options…"
                    })
                }) : ew ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.loadError",
                        defaultMessage: "Couldn't load reporting options. Try again later"
                    })
                }) : M && null != eP ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eb && null != eP.explanation ? (0, o.jsx)(k, {
                        children: eP.explanation
                    }) : null, S ? (0, o.jsx)(b.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: eP.details_placeholder ?? void 0,
                        "aria-label": ey.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details"
                        }),
                        value: e_,
                        onChange: e => {
                            eC(e.target.value)
                        }
                    }) : null, null != eP.subtext ? (0, o.jsx)(k, {
                        children: eP.subtext
                    }) : null, eb ? eP.additional_fields?.map(e => {
                        let t = "text";
                        return "int" === e.type ? t = "number" : ("email" === e.type || "url" === e.type) && (t = e.type), (0, o.jsxs)("label", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [e.placeholder, "multi_line_text" === e.type ? (0, o.jsx)(b.c, {
                                required: e.required,
                                value: eS[e.id] ?? "",
                                onChange: t => eM(a => ({
                                    ...a,
                                    [e.id]: t.target.value
                                }))
                            }) : (0, o.jsx)(b.a, {
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
                }) : I ? (0, o.jsx)(k, {
                    children: (eb ? eP?.link_explanation ?? eP?.explanation : eP?.link_explanation ?? eP?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [F ? (0, o.jsx)(k, {
                        children: eP?.subtext
                    }) : null, F ? null : (0, o.jsx)(v, {
                        reasons: eO,
                        selectedReasonId: eF,
                        setSelectedReasonId: eI
                    })]
                }), X[70] = eP, X[71] = eS, X[72] = e_, X[73] = S, X[74] = eb, X[75] = ey, X[76] = M, X[77] = F, X[78] = I, X[79] = ek, X[80] = ew, X[81] = ej.isSuccess, X[82] = eF, X[83] = es, X[84] = eO, X[85] = U) : U = X[85], X[86] !== ej.isError ? (z = ej.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again"
                    })
                }) : null, X[86] = ej.isError, X[87] = z) : z = X[87], X[88] !== ek || X[89] !== ew || X[90] !== en || X[91] !== eo ? (V = null != eo || ek || ew ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), X[88] = ek, X[89] = ew, X[90] = en, X[91] = eo, X[92] = V) : V = X[92], X[93] !== U || X[94] !== z || X[95] !== V ? (Q = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [U, z, V]
                }), X[93] = U, X[94] = z, X[95] = V, X[96] = Q) : Q = X[96], X[97] !== eP || X[98] !== eq || X[99] !== J || X[100] !== ej.isPending || X[101] !== ej.isSuccess ? (W = null == eP && null == J || ej.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ej.isPending,
                    type: "button",
                    onClick: eq,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back"
                    })
                }), X[97] = eP, X[98] = eq, X[99] = J, X[100] = ej.isPending, X[101] = ej.isSuccess, X[102] = W) : W = X[102], X[103] !== ex || X[104] !== eL || X[105] !== F || X[106] !== I || X[107] !== eD || X[108] !== eN || X[109] !== ej.isPending || X[110] !== eA ? ($ = !F || eA ? (0, o.jsx)(ex, {
                    color: "primary",
                    disabled: eD,
                    loading: ej.isPending,
                    type: I ? "button" : "submit",
                    onClick: I ? eL : void 0,
                    children: (0, o.jsx)(y, {
                        close: eA,
                        isLinkStep: I,
                        isSubmitStep: eN
                    })
                }) : null, X[103] = ex, X[104] = eL, X[105] = F, X[106] = I, X[107] = eD, X[108] = eN, X[109] = ej.isPending, X[110] = eA, X[111] = $) : $ = X[111], X[112] !== W || X[113] !== $ ? (Y = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [W, $]
                    })
                }), X[112] = W, X[113] = $, X[114] = Y) : Y = X[114], X[115] !== eG || X[116] !== L || X[117] !== Q || X[118] !== Y ? (H = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eG,
                    children: [L, Q, Y]
                }), X[115] = eG, X[116] = L, X[117] = Q, X[118] = Y, X[119] = H) : H = X[119], X[120] !== ep || X[121] !== ef || X[122] !== eE || X[123] !== D || X[124] !== H ? (K = (0, o.jsx)(p.a, {
                    open: !0,
                    onOpenChange: eE,
                    contentProps: D,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: H
                }), X[120] = ep, X[121] = ef, X[122] = eE, X[123] = D, X[124] = H, X[125] = K) : K = X[125], K
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("BolX"),
            n = a("I07G"),
            i = a("tl5a"),
            s = a("XGJX"),
            l = a("uNQ5"),
            r = a("GaA7"),
            d = a("q77y"),
            c = a("OWtl"),
            u = a("gTKF"),
            f = a("yI91"),
            p = a("YJq6");
        let m = (0, o.v)(c.a, e => 0, void 0, {
                autoDispose: !0
            }),
            g = (0, o.d)(c.a, (e, t) => {
                let {
                    get: a,
                    scope: o
                } = t;
                if (null != e) {
                    let t = "string" == typeof e ? e : e.threadId,
                        s = "string" == typeof e ? a(u.threadExecutorTargetByThread$, {
                            kind: "app-server",
                            conversationId: e
                        }) : {
                            hostId: n.Yb,
                            ...e
                        };
                    if (s?.hostId === n.Yb) return {
                        environmentId: s.environmentId,
                        threadId: t ?? void 0,
                        notifySaved: e => {
                            o.set(m, {
                                environmentId: s.environmentId,
                                path: e
                            }, e => e + 1)
                        },
                        executorAccess: a(u.threadFileRequestContext$, {
                            conversationId: t,
                            environmentId: s.environmentId
                        }).executorAccess,
                        requestClient: a(i.c, n.Yb)
                    }
                }
            }, {
                isEqual: (e, t) => e?.environmentId === t?.environmentId && e?.threadId === t?.threadId && e?.executorAccess === t?.executorAccess && e?.requestClient === t?.requestClient
            });
        a.d(t, {}, {
            a: g,
            b: m,
            c: async function(e) {
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
                        executorAccess: s
                    } = t;
                    g?.throwIfAborted();
                    let l = {
                            executorAccess: s
                        },
                        r = {
                            environmentId: e,
                            path: a
                        },
                        d = await o.sendRequest("fs/getMetadata", r, l);
                    g?.throwIfAborted();
                    let {
                        dataBase64: c
                    } = await o.sendRequest("fs/readFile", r, l);
                    g?.throwIfAborted();
                    let u = (0, f.a)(c);
                    if (null != i && u.byteLength > i) throw Error("File is too large");
                    if (m && await (0, n.wg)(u.subarray(0, n.cc)) !== "text") throw Error("File is not text");
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
                } = await (0, s.a)({
                    contentSampleByteLimit: m ? n.cc : void 0,
                    contentSampleMaxFileBytes: m ? i : void 0,
                    hostId: o,
                    path: a
                }, g);
                if (null != i && null != x && x > i) throw Error("File is too large");
                if (m && "text" !== b) throw Error("File is not text");
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
                        s = n?.hasUtf8Bom ?? (239 === t[0] && 187 === t[1] && 191 === t[2]),
                        l = new TextDecoder("utf-8", {
                            fatal: !0,
                            ignoreBOM: !0
                        }).decode(t);
                    return {
                        content: s ? l.slice(1) : l,
                        hasUtf8Bom: s,
                        mtimeMs: h ?? null,
                        sizeBytes: t.byteLength
                    }
                }
                let {
                    contents: y
                } = await (0, l.a)({
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
            d: async function(e) {
                let {
                    cloudFileAccess: t,
                    content: a,
                    expectedMtimeMs: o,
                    filePath: n,
                    hasUtf8Bom: i,
                    hostId: s
                } = e;
                if (null != t) {
                    let {
                        environmentId: e,
                        requestClient: i,
                        executorAccess: s
                    } = t, l = {
                        executorAccess: s
                    }, r = {
                        environmentId: e,
                        path: n
                    }, {
                        modifiedAtMs: d
                    } = await i.sendRequest("fs/getMetadata", r, l);
                    return d !== o ? {
                        mtimeMs: d,
                        outcome: "conflict"
                    } : (await i.sendRequest("fs/writeFile", {
                        ...r,
                        dataBase64: (0, p.b)(a)
                    }, l), t.notifySaved(n), {
                        mtimeMs: (await i.sendRequest("fs/getMetadata", r, l)).modifiedAtMs,
                        outcome: "saved"
                    })
                }
                let l = r.a.workspaceFiles.saveText;
                if (null == l) throw Error("Saving text files is not supported by this host");
                return (0, d.a)(l({
                    content: i ? `\uFEFF${a}` : a,
                    expectedMtimeMs: o,
                    hostId: s,
                    path: n
                }))
            }
        })
    })
};