export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    OHeG: (function(e, t, a) {
        var o = a("ABep"),
            n = a("QosV"),
            i = a("Bs4i"),
            s = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, r, d = (0, n.c)(8);
                return d[0] !== e ? ({
                    className: t,
                    ...a
                } = e, d[0] = e, d[1] = t, d[2] = a) : (t = d[1], a = d[2]), d[3] !== t ? (l = (0, s.b)("[contain-intrinsic-size:var(--icon-size,16px)] [@container_style(--actions-opacity:0)]:[content-visibility:hidden]", t), d[3] = t, d[4] = l) : l = d[4], d[5] !== a || d[6] !== l ? (r = (0, o.jsx)(i.b, {
                    ...a,
                    className: l
                }), d[5] = a, d[6] = l, d[7] = r) : r = d[7], r
            }
        })
    }),
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
            c = a("OHeG"),
            u = a("Sm6l"),
            f = a("bqtn"),
            p = a("bf6R"),
            m = a("UxN3"),
            g = a("j9wQ");

        function b(e) {
            let t, a, s, r, d, c = (0, n.c)(14),
                {
                    children: m,
                    disabled: g,
                    triggerRef: b
                } = e,
                x = void 0 !== g && g,
                y = (0, l.a)();
            c[0] !== y ? (t = y.formatMessage(h.imageMenu), c[0] = y, c[1] = t) : t = c[1];
            let v = t;
            return c[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsx)(p.hd, {}), c[2] = a) : a = c[2], c[3] !== x || c[4] !== v || c[5] !== b ? (s = (0, o.jsx)(u.a, {
                ref: b,
                "aria-label": v,
                color: "ghost",
                disabled: x,
                size: "toolbar",
                uniform: !0,
                children: a
            }), c[3] = x, c[4] = v, c[5] = b, c[6] = s) : s = c[6], c[7] !== v || c[8] !== s ? (r = (0, o.jsx)(i.a, {
                content: v,
                children: s
            }), c[7] = v, c[8] = s, c[9] = r) : r = c[9], c[10] !== m || c[11] !== x || c[12] !== r ? (d = (0, o.jsx)(f.a, {
                disabled: x,
                align: "end",
                side: "bottom",
                triggerButton: r,
                children: m
            }), c[10] = m, c[11] = x, c[12] = r, c[13] = d) : d = c[13], d
        }
        let h = (0, d.f)({
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
                    defaultMessage: "Feedback"
                },
                removeGoodResponse: {
                    id: "ConversationTurn.removeGoodResponseFeedbackTooltip",
                    defaultMessage: "Undo feedback"
                },
                removeBadResponse: {
                    id: "ConversationTurn.removeBadResponseFeedbackTooltip",
                    defaultMessage: "Undo feedback"
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
            x = {
                response: {
                    feedback: h.feedback,
                    good: h.goodResponse,
                    bad: h.badResponse,
                    selectedGood: h.removeGoodResponse,
                    selectedBad: h.removeBadResponse
                },
                question: {
                    feedback: h.rateQuestion,
                    good: h.goodQuestion,
                    bad: h.badQuestion,
                    selectedGood: h.goodQuestion,
                    selectedBad: h.badQuestion
                }
            };
        a.d(t, {}, {
            a: b,
            b: function(e) {
                let t, a, d, y, v, k, w, j, _, C, S, M, F, I, R, T, O, N, P = (0, n.c)(116),
                    {
                        disabled: B,
                        hideUnselectedRating: A,
                        isAnimated: D,
                        menuItems: E,
                        rating: U,
                        ratingDisabled: q,
                        onRate: G,
                        shouldRestoreFocus: L,
                        variant: z
                    } = e,
                    Q = void 0 !== B && B,
                    V = void 0 !== A && A,
                    W = void 0 !== D && D,
                    K = void 0 !== q && q,
                    $ = void 0 === z ? "response" : z,
                    H = (0, l.a)(),
                    Y = (0, s.useRef)(null),
                    J = (0, s.useRef)(null),
                    X = (0, s.useRef)(!1);
                P[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    X.current && ((J.current ?? Y.current)?.focus(), X.current = !1)
                }, P[0] = t) : t = P[0], P[1] !== U ? (a = [U], P[1] = U, P[2] = a) : a = P[2], (0, s.useLayoutEffect)(t, a), P[3] !== G || P[4] !== U || P[5] !== L ? (d = e => {
                    X.current = L?.(U === e ? null : e) ?? !0, G(e)
                }, P[3] = G, P[4] = U, P[5] = L, P[6] = d) : d = P[6];
                let Z = d;
                if ("imageTurn" === $ || "imageOverlay" === $) {
                    let e, t, a, n, s, l = "imageOverlay" === $ ? "mediaOverlay" : "secondary",
                        r = "imageOverlay" === $ ? "mediaOverlay" : "ghost";
                    P[7] !== H || P[8] !== W ? (e = W ? H.formatMessage(h.likeGif) : H.formatMessage(h.likeImage), P[7] = H, P[8] = W, P[9] = e) : e = P[9];
                    let d = e;
                    P[10] !== H || P[11] !== W ? (t = W ? H.formatMessage(h.dislikeGif) : H.formatMessage(h.dislikeImage), P[10] = H, P[11] = W, P[12] = t) : t = P[12];
                    let c = t;
                    return P[13] !== Q || P[14] !== d || P[15] !== Z || P[16] !== U || P[17] !== K || P[18] !== l || P[19] !== r || P[20] !== $ ? (a = "thumbsDown" !== U ? (0, o.jsx)(i.a, {
                        content: d,
                        children: (0, o.jsx)(u.a, {
                            ref: Y,
                            "aria-label": d,
                            "aria-pressed": "thumbsUp" === U,
                            color: "thumbsUp" === U ? l : r,
                            disabled: Q || K || "thumbsUp" === U,
                            size: "imageOverlay" === $ ? "inputIcon" : "icon",
                            radius: "imageOverlay" === $ ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === $ && e.stopPropagation(), Z("thumbsUp")
                            },
                            children: "thumbsUp" === U ? (0, o.jsx)(p.hj, {}) : (0, o.jsx)(p.fj, {})
                        })
                    }) : null, P[13] = Q, P[14] = d, P[15] = Z, P[16] = U, P[17] = K, P[18] = l, P[19] = r, P[20] = $, P[21] = a) : a = P[21], P[22] !== Q || P[23] !== c || P[24] !== Z || P[25] !== U || P[26] !== K || P[27] !== l || P[28] !== r || P[29] !== $ ? (n = "thumbsUp" !== U ? (0, o.jsx)(i.a, {
                        content: c,
                        children: (0, o.jsx)(u.a, {
                            ref: Y,
                            "aria-label": c,
                            "aria-pressed": "thumbsDown" === U,
                            color: "thumbsDown" === U ? l : r,
                            disabled: Q || K || "thumbsDown" === U,
                            size: "imageOverlay" === $ ? "inputIcon" : "icon",
                            radius: "imageOverlay" === $ ? "full" : "default",
                            onClick: e => {
                                "imageOverlay" === $ && e.stopPropagation(), Z("thumbsDown")
                            },
                            children: "thumbsDown" === U ? (0, o.jsx)(p.dj, {}) : (0, o.jsx)(p.bj, {})
                        })
                    }) : null, P[22] = Q, P[23] = c, P[24] = Z, P[25] = U, P[26] = K, P[27] = l, P[28] = r, P[29] = $, P[30] = n) : n = P[30], P[31] !== a || P[32] !== n ? (s = (0, o.jsxs)(o.Fragment, {
                        children: [a, n]
                    }), P[31] = a, P[32] = n, P[33] = s) : s = P[33], s
                }
                if ("imageViewerMenu" === $ || "imageViewerSubmenu" === $) {
                    let e, t, a, n;
                    P[34] !== V || P[35] !== W || P[36] !== Z || P[37] !== U || P[38] !== K ? (e = V && "thumbsDown" === U ? null : (0, o.jsx)(f.c.Item, {
                        disabled: K,
                        leftIcon: "thumbsUp" === U ? (0, o.jsx)(p.hj, {}) : (0, o.jsx)(p.fj, {}),
                        onSelect: () => Z("thumbsUp"),
                        children: W ? (0, o.jsx)(r.a, {
                            ...h.likeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.likeImage
                        })
                    }), P[34] = V, P[35] = W, P[36] = Z, P[37] = U, P[38] = K, P[39] = e) : e = P[39], P[40] !== V || P[41] !== W || P[42] !== Z || P[43] !== U || P[44] !== K ? (t = V && "thumbsUp" === U ? null : (0, o.jsx)(f.c.Item, {
                        disabled: K,
                        leftIcon: "thumbsDown" === U ? (0, o.jsx)(p.dj, {}) : (0, o.jsx)(p.bj, {}),
                        onSelect: () => Z("thumbsDown"),
                        children: W ? (0, o.jsx)(r.a, {
                            ...h.dislikeGif
                        }) : (0, o.jsx)(r.a, {
                            ...h.dislikeImage
                        })
                    }), P[40] = V, P[41] = W, P[42] = Z, P[43] = U, P[44] = K, P[45] = t) : t = P[45], P[46] !== t || P[47] !== e ? (a = (0, o.jsxs)(o.Fragment, {
                        children: [e, t]
                    }), P[46] = t, P[47] = e, P[48] = a) : a = P[48];
                    let i = a;
                    if ("imageViewerSubmenu" === $) {
                        let e, t, a;
                        return P[49] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(r.a, {
                            ...h.imageFeedback
                        }), P[49] = e) : e = P[49], P[50] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(m.b, {
                            icon: {
                                16: p.ij,
                                20: p.jj
                            }
                        }), P[50] = t) : t = P[50], P[51] !== Q || P[52] !== i ? (a = (0, o.jsx)(g.q, {
                            ref: J,
                            disabled: Q,
                            label: e,
                            leftIcon: t,
                            children: i
                        }), P[51] = Q, P[52] = i, P[53] = a) : a = P[53], a
                    }
                    return P[54] !== Q || P[55] !== i || P[56] !== E ? (n = (0, o.jsxs)(b, {
                        triggerRef: Y,
                        disabled: Q,
                        children: [E, i]
                    }), P[54] = Q, P[55] = i, P[56] = E, P[57] = n) : n = P[57], n
                }
                P[58] !== $ ? (y = e => "response" === $ ? (0, o.jsx)(c.a, {
                    children: e
                }) : e, P[58] = $, P[59] = y) : y = P[59];
                let ee = y,
                    et = x[$];
                if (null != U) {
                    let e, t, a, n, s, l, r, d = "thumbsUp" === U;
                    P[60] !== d ? (e = d ? {
                        16: p.gj,
                        20: p.hj
                    } : {
                        16: p.cj,
                        20: p.dj
                    }, P[60] = d, P[61] = e) : e = P[61];
                    let c = e;
                    P[62] !== H || P[63] !== d || P[64] !== et.selectedBad || P[65] !== et.selectedGood ? (t = H.formatMessage(d ? et.selectedGood : et.selectedBad), P[62] = H, P[63] = d, P[64] = et.selectedBad, P[65] = et.selectedGood, P[66] = t) : t = P[66];
                    let f = t;
                    return P[67] !== Z || P[68] !== U ? (a = () => Z(U), P[67] = Z, P[68] = U, P[69] = a) : a = P[69], P[70] !== c ? (n = (0, o.jsx)(m.b, {
                        icon: c
                    }), P[70] = c, P[71] = n) : n = P[71], P[72] !== Q || P[73] !== f || P[74] !== a || P[75] !== n ? (s = (0, o.jsx)(u.a, {
                        ref: Y,
                        type: "button",
                        "aria-label": f,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: Q,
                        size: "icon",
                        onClick: a,
                        children: n
                    }), P[72] = Q, P[73] = f, P[74] = a, P[75] = n, P[76] = s) : s = P[76], P[77] !== s || P[78] !== ee ? (l = ee(s), P[77] = s, P[78] = ee, P[79] = l) : l = P[79], P[80] !== f || P[81] !== l ? (r = (0, o.jsx)(i.a, {
                        content: f,
                        children: l
                    }), P[80] = f, P[81] = l, P[82] = r) : r = P[82], r
                }
                P[83] !== H || P[84] !== et.feedback ? (v = H.formatMessage(et.feedback), P[83] = H, P[84] = et.feedback, P[85] = v) : v = P[85];
                let ea = v;
                return P[86] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, o.jsx)(m.b, {
                    icon: {
                        16: p.ij,
                        20: p.jj
                    }
                }), P[86] = k) : k = P[86], P[87] !== ea ? (w = (0, o.jsx)(u.a, {
                    ref: Y,
                    "aria-label": ea,
                    color: "ghost",
                    size: "icon",
                    children: k
                }), P[87] = ea, P[88] = w) : w = P[88], P[89] !== w || P[90] !== ee ? (j = ee(w), P[89] = w, P[90] = ee, P[91] = j) : j = P[91], P[92] !== ea || P[93] !== j ? (_ = (0, o.jsx)(i.a, {
                    content: ea,
                    children: j
                }), P[92] = ea, P[93] = j, P[94] = _) : _ = P[94], P[95] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)(m.b, {
                    icon: {
                        16: p.ej,
                        20: p.fj
                    }
                }), P[95] = C) : C = P[95], P[96] !== Z ? (S = () => Z("thumbsUp"), P[96] = Z, P[97] = S) : S = P[97], P[98] !== et.good ? (M = (0, o.jsx)(r.a, {
                    ...et.good
                }), P[98] = et.good, P[99] = M) : M = P[99], P[100] !== S || P[101] !== M ? (F = (0, o.jsx)(f.c.Item, {
                    leftIcon: C,
                    onSelect: S,
                    children: M
                }), P[100] = S, P[101] = M, P[102] = F) : F = P[102], P[103] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, o.jsx)(m.b, {
                    icon: {
                        16: p.aj,
                        20: p.bj
                    }
                }), P[103] = I) : I = P[103], P[104] !== Z ? (R = () => Z("thumbsDown"), P[104] = Z, P[105] = R) : R = P[105], P[106] !== et.bad ? (T = (0, o.jsx)(r.a, {
                    ...et.bad
                }), P[106] = et.bad, P[107] = T) : T = P[107], P[108] !== R || P[109] !== T ? (O = (0, o.jsx)(f.c.Item, {
                    leftIcon: I,
                    onSelect: R,
                    children: T
                }), P[108] = R, P[109] = T, P[110] = O) : O = P[110], P[111] !== Q || P[112] !== _ || P[113] !== F || P[114] !== O ? (N = (0, o.jsxs)(f.a, {
                    disabled: Q,
                    triggerButton: _,
                    children: [F, O]
                }), P[111] = Q, P[112] = _, P[113] = F, P[114] = O, P[115] = N) : N = P[115], N
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
                    R = w ?? k;
                m[0] !== y || m[1] !== g || m[2] !== b ? (t = null == g ? void 0 : () => {
                    null == y && b(), g()
                }, m[0] = y, m[1] = g, m[2] = b, m[3] = t) : t = m[3], m[4] !== y?.queryKey || m[5] !== R ? (a = y?.queryKey ?? ["codex-thread-report-reasons", R], m[4] = y?.queryKey, m[5] = R, m[6] = a) : a = m[6], m[7] !== y || m[8] !== R || m[9] !== x ? (i = null == y ? () => (async function(e, t) {
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
                })(R, x) : e => {
                    let {
                        signal: t
                    } = e;
                    return y.loadReasons(t)
                }, m[7] = y, m[8] = R, m[9] = x, m[10] = i) : i = m[10];
                let T = null != y ? 0 : void 0,
                    O = null != y,
                    N = null != y,
                    P = null != y ? "chatgpt" : void 0;
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
                }), m[18] = y?.title, m[19] = k, m[20] = S, m[21] = f) : f = m[21], m[22] !== F || m[23] !== b || m[24] !== h || m[25] !== _ || m[26] !== t || m[27] !== f || m[28] !== a || m[29] !== i || m[30] !== T || m[31] !== O || m[32] !== N || m[33] !== P || m[34] !== u || m[35] !== B ? (p = (0, o.jsx)(l.ReportDialog, {
                    onBack: t,
                    onClose: b,
                    onCloseAutoFocus: h,
                    queryKey: a,
                    loadReasons: i,
                    gcTime: T,
                    includeServerFields: O,
                    preventCloseWhileSubmitting: N,
                    dialogVariant: P,
                    contentClassName: F,
                    submitReport: u,
                    openExternalForm: B,
                    successBody: _,
                    title: f
                }), m[22] = F, m[23] = b, m[24] = h, m[25] = _, m[26] = t, m[27] = f, m[28] = a, m[29] = i, m[30] = T, m[31] = O, m[32] = N, m[33] = P, m[34] = u, m[35] = B, m[36] = p) : p = m[36], p
            }
        })
    }),
    cbrt: (function(e, t, a) {
        var o = a("ABep"),
            n = a("HOLv"),
            i = a("XXJV"),
            s = a("Yc0o"),
            l = a("U8sx"),
            r = a("bYR9");
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
                }) && ((0, i.b)((0, i.c)(e, s.a.PLAN) ?? "right").updateTab(e, s.a.PLAN, {
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
        a.r(t), a("UKCO"), a("tl5a");
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
        var o = a("Q840"),
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
            a: () => O
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("slpy"),
            s = a("on57"),
            l = a("IPUh"),
            r = a("Q840"),
            d = a("zd8w"),
            c = a("Wf1j"),
            u = a("oyxz");
        a("ZU27"), a("gbrq");
        var f = a("Sm6l"),
            p = a("uuN8"),
            m = a("HOLv"),
            g = a("UxN3"),
            b = a("POXM"),
            h = a("BhsD"),
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
            y = a("bYzY"),
            v = a("Rb45"),
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
            I = a("kJQo"),
            R = a("Wjhp"),
            T = a("bYR9");

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
            let t, a, O, N, B, A, D, E, U, q, G, L, z, Q, V, W, K, $, H, Y, J, X, Z, ee, et, ea, eo, en, ei, es = (0, n.c)(106),
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
            let eR = t;
            es[3] !== el.completed || es[4] !== el.content ? (a = el.completed && el.content.trim().length > 0, es[3] = el.completed, es[4] = el.content, es[5] = a) : a = es[5];
            let eT = eR && !0,
                eO = a && !0,
                eN = eI && null != eg && null != eF.submitCodexAnalyticsEvent && !0;
            es[6] !== eM ? (O = eM.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan"
            }), es[6] = eM, es[7] = O) : O = es[7];
            let eP = O;
            es[8] !== eM ? (N = eM.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel"
            }), es[8] = eM, es[9] = N) : N = es[9];
            let eB = N;
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
            let eU = E,
                eq = ew ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            es[22] !== ew || es[23] !== ej || es[24] !== ex ? (U = ew && !ej && null != ex ? (0, o.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: ex
            }) : null, es[22] = ew, es[23] = ej, es[24] = ex, es[25] = U) : U = es[25], es[26] !== eA || es[27] !== ej || es[28] !== ex ? (q = ej && null != ex ? (0, o.jsx)("button", {
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
            }) : null, es[26] = eA, es[27] = ej, es[28] = ex, es[29] = q) : q = es[29];
            let eG = ew ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            es[30] !== eG ? (G = (0, s.b)("text-base leading-tight", eG), es[30] = eG, es[31] = G) : G = es[31], es[32] !== ew ? (L = ew ? (0, o.jsx)(m.a, {
                className: "shrink-0",
                asset: T.a
            }) : null, es[32] = ew, es[33] = L) : L = es[33], es[34] !== el.completed ? (z = el.completed ? (0, o.jsx)(u.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan"
            }) : (0, o.jsx)(M.a, {
                children: (0, o.jsx)(u.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan"
                })
            }), es[34] = el.completed, es[35] = z) : z = es[35], es[36] !== G || es[37] !== L || es[38] !== z ? (Q = (0, o.jsxs)("span", {
                className: G,
                children: [L, z]
            }), es[36] = G, es[37] = L, es[38] = z, es[39] = Q) : Q = es[39];
            let eL = ej && "hidden";
            es[40] !== eL ? (V = (0, s.b)("relative z-20 flex items-center gap-1", eL), es[40] = eL, es[41] = V) : V = es[41];
            es[42] !== eP || es[43] !== eE || es[44] !== eO ? (W = eO ? (0, o.jsx)(i.a, {
                content: eP,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eP,
                    onClick: eE,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: I.a,
                        legacyIcon: y.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, es[42] = eP, es[43] = eE, es[44] = eO, es[45] = W) : W = es[45], es[46] !== eU || es[47] !== eT ? (K = eT ? (0, o.jsx)(p.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: eU
            }) : null, es[46] = eU, es[47] = eT, es[48] = K) : K = es[48], es[49] !== er || es[50] !== ev || es[51] !== ek || es[52] !== eN || es[53] !== eg ? ($ = eN ? (0, o.jsx)(F.a, {
                hasArtifacts: ev,
                reportEntityType: ek,
                threadId: er,
                turnId: eg
            }) : null, es[49] = er, es[50] = ev, es[51] = ek, es[52] = eN, es[53] = eg, es[54] = $) : $ = es[54], es[55] !== ex || es[56] !== eB ? (H = null != ex ? (0, o.jsx)(i.a, {
                content: eB,
                children: (0, o.jsx)(f.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": eB,
                    onClick: ex,
                    children: (0, o.jsx)(g.a, {
                        "aria-hidden": !1,
                        asset16: R.a,
                        legacyIcon: v.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, es[55] = ex, es[56] = eB, es[57] = H) : H = es[57], es[58] !== eD || es[59] !== e_ || es[60] !== ew ? (Y = ew ? null : (0, o.jsx)(i.a, {
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
                        eC(P)
                    },
                    children: (0, o.jsx)(h.a, {
                        className: (0, s.b)("icon-2xs transition-transform", e_ ? "rotate-180" : "rotate-0")
                    })
                })
            }), es[58] = eD, es[59] = e_, es[60] = ew, es[61] = Y) : Y = es[61], es[62] !== ej || es[63] !== V || null !== es[64] || es[65] !== W || es[66] !== K || es[67] !== $ || es[68] !== H || es[69] !== Y ? (J = (0, o.jsxs)("div", {
                "aria-hidden": ej,
                className: V,
                children: [null, W, K, $, H, Y]
            }), es[62] = ej, es[63] = V, es[64] = null, es[65] = W, es[66] = K, es[67] = $, es[68] = H, es[69] = Y, es[70] = J) : J = es[70], es[71] !== q || es[72] !== Q || es[73] !== J ? (X = (0, o.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [q, Q, J]
            }), es[71] = q, es[72] = Q, es[73] = J, es[74] = X) : X = es[74], es[75] !== er ? (Z = {
                [S.a]: er
            }, es[75] = er, es[76] = Z) : Z = es[76];
            let ez = ej || void 0,
                eQ = ew && !ej && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            es[77] !== eQ ? (ee = (0, s.b)("relative overflow-hidden", eQ), es[77] = eQ, es[78] = ee) : ee = es[78];
            let eV = ej || void 0;
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
            }) : null, es[90] = e_, es[91] = ew, es[92] = eo) : eo = es[92], es[93] !== Z || es[94] !== ez || es[95] !== ee || es[96] !== eV || es[97] !== et || es[98] !== ea || es[99] !== eo ? (en = (0, o.jsxs)(l.a.div, {
                ...Z,
                "aria-hidden": ez,
                className: ee,
                inert: eV,
                initial: !1,
                animate: et,
                transition: _.a,
                children: [ea, eo]
            }), es[93] = Z, es[94] = ez, es[95] = ee, es[96] = eV, es[97] = et, es[98] = ea, es[99] = eo, es[100] = en) : en = es[100], es[101] !== eq || es[102] !== U || es[103] !== X || es[104] !== en ? (ei = (0, o.jsxs)(k.b, {
                className: eq,
                children: [U, X, en]
            }), es[101] = eq, es[102] = U, es[103] = X, es[104] = en, es[105] = ei) : ei = es[105], ei
        }

        function P(e) {
            return !e
        }
    }),
    YPzM: (function(e, t, a) {
        a.d(t, {
            a: () => _
        });
        var o = a("ABep"),
            n = a("QosV"),
            i = a("Q840"),
            s = a("zd8w"),
            l = a("Qgfj"),
            r = a("tl5a"),
            d = a("X6Vn"),
            c = a("UrAA"),
            u = a("Bbed"),
            f = a("NJMI");
        let p = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(686079)]).then(a.bind(a, "v9GG"))).FeedbackSubmissionDialog, {
                errorFallback: (0, o.jsx)(f.a, {
                    onClose: e => (0, d.b)(e, p)
                })
            }),
            m = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(27963)]).then(a.bind(a, "VKsU"))).FeedbackFormDialog, {
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
                R = (0, i.z)(b.c);
            if (a[0] !== _ || a[1] !== R || a[2] !== f || a[3] !== S || a[4] !== M || a[5] !== F || a[6] !== p || a[7] !== k) {
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
                                return o === y ? void i(a, e) : R.submitCodexAnalyticsEvent?.({
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
                a[9] !== R || a[10] !== M || a[11] !== p || a[12] !== k ? (e = e => {
                    if (I(e), null == e) return;
                    let t = M.get(r.Cb, p);
                    R.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: p,
                        turnId: k,
                        sessionId: t === p && null != M.get(r.Mb, p) ? null : t,
                        rating: e
                    })
                }, a[9] = R, a[10] = M, a[11] = p, a[12] = k, a[13] = e) : e = a[13];
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
                }), a[0] = _, a[1] = R, a[2] = f, a[3] = S, a[4] = M, a[5] = F, a[6] = p, a[7] = k, a[8] = t
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
            d = a("BhsD"),
            c = a("tKUf"),
            u = a("cWXs"),
            f = a("zzDS");

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
                let t, a, l, j, _, C, S, M, F, I, R, T, O, N, P, B, A, D, E, U, q, G, L, z, Q, V, W, K, $, H, Y, J = (0, n.c)(126),
                    {
                        onBack: X,
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
                J[0] !== er ? (t = null == er ? {} : {
                    gcTime: er
                }, J[0] = er, J[1] = t) : t = J[1], J[2] !== ea || J[3] !== et || J[4] !== eg || J[5] !== t ? (a = {
                    queryKey: et,
                    queryFn: ea,
                    ...t,
                    staleTime: eg
                }, J[2] = ea, J[3] = et, J[4] = eg, J[5] = t, J[6] = a) : a = J[6];
                let {
                    data: ev,
                    isPending: ek,
                    isError: ew
                } = (0, i.a)(a);
                J[7] !== eo ? (l = {
                    mutationFn: eo
                }, J[7] = eo, J[8] = l) : l = J[8];
                let ej = (0, s.a)(l),
                    [e_, eC] = (0, r.useState)("");
                J[9] === Symbol.for("react.memo_cache_sentinel") ? (j = {}, J[9] = j) : j = J[9];
                let [eS, eM] = (0, r.useState)(j), [eF, eI] = (0, r.useState)(null);
                J[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], J[10] = _) : _ = J[10];
                let [eR, eT] = (0, r.useState)(_), eO = 0 === eR.length ? null : eR[eR.length - 1];
                J[11] !== eO || J[12] !== ev?.reasons ? (C = (null == eO ? ev?.reasons : eO.sub_reasons) ?? [], J[11] = eO, J[12] = ev?.reasons, J[13] = C) : C = J[13];
                let eN = C;
                J[14] !== eO?.additional_fields?.length || J[15] !== eO?.details_placeholder || J[16] !== eO?.has_details || J[17] !== eO?.link_attachment || J[18] !== eO?.subtext || J[19] !== eb || J[20] !== eF || J[21] !== eN ? (R = eN.find(e => e.id === eF) ?? null, M = (S = eO?.details_placeholder != null || eb && eO?.has_details === !0) || eb && (eO?.additional_fields?.length ?? 0) > 0, I = eO?.link_attachment != null, F = eO?.subtext != null && 0 === eN.length && !M && !I, T = M || null != R && w(R, eb), J[14] = eO?.additional_fields?.length, J[15] = eO?.details_placeholder, J[16] = eO?.has_details, J[17] = eO?.link_attachment, J[18] = eO?.subtext, J[19] = eb, J[20] = eF, J[21] = eN, J[22] = S, J[23] = M, J[24] = F, J[25] = I, J[26] = R, J[27] = T) : (S = J[22], M = J[23], F = J[24], I = J[25], R = J[26], T = J[27]);
                let eP = T,
                    eB = null == R || ek || ej.isPending,
                    eA = ej.isSuccess || ew,
                    eD = !eA && (eP && null == eo || !eP && !I && eB);
                J[28] !== Z || J[29] !== eh || J[30] !== ej.isPending ? (O = e => {
                    e || eh && ej.isPending || Z()
                }, J[28] = Z, J[29] = eh, J[30] = ej.isPending, J[31] = O) : O = J[31];
                let eE = O;
                J[32] !== eO || J[33] !== X || J[34] !== eR ? (N = () => {
                    if (null == eO) return void X?.();
                    let e = eR[eR.length - 1];
                    eT(x), eI(e?.id ?? null), eC(""), eM({})
                }, J[32] = eO, J[33] = X, J[34] = eR, J[35] = N) : N = J[35];
                let eU = N;
                J[36] !== eO || J[37] !== eS || J[38] !== e_ || J[39] !== eb || J[40] !== M || J[41] !== F || J[42] !== I || J[43] !== Z || J[44] !== ei || J[45] !== ej || J[46] !== R || J[47] !== eR || J[48] !== eA || J[49] !== eo ? (P = e => {
                    if (e.preventDefault(), !ej.isPending && (!eb || e.currentTarget.reportValidity())) {
                        if (eA) return void Z();
                        if (!F) {
                            if (I && eO?.link_attachment != null) return null != ei ? void ei(eO.link_attachment) : void(0, g.f)({
                                href: eO.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (M && null != eO) {
                                if (null == eo) return;
                                ej.mutate({
                                    details: e_.trim(),
                                    reason: eO,
                                    path: eR,
                                    ...eb ? {
                                        additionalFields: eS
                                    } : {}
                                });
                                return
                            }
                            if (null != R) {
                                if (w(R, eb)) {
                                    if (null == eo) return;
                                    ej.mutate({
                                        details: "",
                                        reason: R,
                                        path: [...eR, R]
                                    });
                                    return
                                }
                                eT(e => [...e, R]), eI(null), eC(""), eM({})
                            }
                        }
                    }
                }, J[36] = eO, J[37] = eS, J[38] = e_, J[39] = eb, J[40] = M, J[41] = F, J[42] = I, J[43] = Z, J[44] = ei, J[45] = ej, J[46] = R, J[47] = eR, J[48] = eA, J[49] = eo, J[50] = P) : P = J[50];
                let eq = P;
                J[51] !== eO || J[52] !== ei ? (B = e => {
                    if (eO?.link_attachment != null) {
                        if (null != ei) return void ei(eO.link_attachment);
                        (0, g.e)({
                            event: e,
                            href: eO.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, J[51] = eO, J[52] = ei, J[53] = B) : B = J[53];
                let eG = B;
                J[54] !== eO || J[55] !== ev || J[56] !== ej.isSuccess ? (A = function(e) {
                    let {
                        activeReason: t,
                        isSuccess: a,
                        reportReasons: o
                    } = e;
                    return a ? null : null != t ? t.cta : o?.header_explanation || o?.header || null
                }({
                    activeReason: eO,
                    reportReasons: ev,
                    isSuccess: ej.isSuccess
                }), J[54] = eO, J[55] = ev, J[56] = ej.isSuccess, J[57] = A) : A = J[57];
                let eL = A;
                return J[58] !== ee ? (D = {
                    onCloseAutoFocus: ee
                }, J[58] = ee, J[59] = D) : D = J[59], J[60] !== ej.isSuccess || J[61] !== el ? (E = ej.isSuccess ? (0, o.jsx)(c.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report"
                }) : el, J[60] = ej.isSuccess, J[61] = el, J[62] = E) : E = J[62], J[63] !== E ? (U = (0, o.jsx)(p.f, {
                    children: E
                }), J[63] = E, J[64] = U) : U = J[64], J[65] !== eL ? (q = null != eL ? (0, o.jsx)(p.e, {
                    children: eL
                }) : void 0, J[65] = eL, J[66] = q) : q = J[66], J[67] !== U || J[68] !== q ? (G = (0, o.jsx)(m.e, {
                    children: (0, o.jsx)(m.d, {
                        title: U,
                        subtitle: q,
                        titleSize: "dialog"
                    })
                }), J[67] = U, J[68] = q, J[69] = G) : G = J[69], J[70] !== eO || J[71] !== eS || J[72] !== e_ || J[73] !== S || J[74] !== eb || J[75] !== ey || J[76] !== M || J[77] !== F || J[78] !== I || J[79] !== ek || J[80] !== ew || J[81] !== ej.isSuccess || J[82] !== eF || J[83] !== es || J[84] !== eN ? (L = ej.isSuccess ? (0, o.jsx)(k, {
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
                }) : M && null != eO ? (0, o.jsxs)(m.f, {
                    className: "gap-3",
                    children: [eb && null != eO.explanation ? (0, o.jsx)(k, {
                        children: eO.explanation
                    }) : null, S ? (0, o.jsx)(b.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: eO.details_placeholder ?? void 0,
                        "aria-label": ey.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details"
                        }),
                        value: e_,
                        onChange: e => {
                            eC(e.target.value)
                        }
                    }) : null, null != eO.subtext ? (0, o.jsx)(k, {
                        children: eO.subtext
                    }) : null, eb ? eO.additional_fields?.map(e => {
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
                    children: (eb ? eO?.link_explanation ?? eO?.explanation : eO?.link_explanation ?? eO?.subtext) ?? (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report"
                    })
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [F ? (0, o.jsx)(k, {
                        children: eO?.subtext
                    }) : null, F ? null : (0, o.jsx)(v, {
                        reasons: eN,
                        selectedReasonId: eF,
                        setSelectedReasonId: eI
                    })]
                }), J[70] = eO, J[71] = eS, J[72] = e_, J[73] = S, J[74] = eb, J[75] = ey, J[76] = M, J[77] = F, J[78] = I, J[79] = ek, J[80] = ew, J[81] = ej.isSuccess, J[82] = eF, J[83] = es, J[84] = eN, J[85] = L) : L = J[85], J[86] !== ej.isError ? (z = ej.isError ? (0, o.jsx)(u.a, {
                    type: "error",
                    role: "alert",
                    content: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again"
                    })
                }) : null, J[86] = ej.isError, J[87] = z) : z = J[87], J[88] !== ek || J[89] !== ew || J[90] !== en || J[91] !== eo ? (Q = null != eo || ek || ew ? null : (0, o.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: en
                }), J[88] = ek, J[89] = ew, J[90] = en, J[91] = eo, J[92] = Q) : Q = J[92], J[93] !== L || J[94] !== z || J[95] !== Q ? (V = (0, o.jsxs)(m.e, {
                    className: "gap-3",
                    children: [L, z, Q]
                }), J[93] = L, J[94] = z, J[95] = Q, J[96] = V) : V = J[96], J[97] !== eO || J[98] !== eU || J[99] !== X || J[100] !== ej.isPending || J[101] !== ej.isSuccess ? (W = null == eO && null == X || ej.isSuccess ? null : (0, o.jsx)(f.a, {
                    color: "secondary",
                    disabled: ej.isPending,
                    type: "button",
                    onClick: eU,
                    children: (0, o.jsx)(c.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back"
                    })
                }), J[97] = eO, J[98] = eU, J[99] = X, J[100] = ej.isPending, J[101] = ej.isSuccess, J[102] = W) : W = J[102], J[103] !== ex || J[104] !== eG || J[105] !== F || J[106] !== I || J[107] !== eD || J[108] !== eP || J[109] !== ej.isPending || J[110] !== eA ? (K = !F || eA ? (0, o.jsx)(ex, {
                    color: "primary",
                    disabled: eD,
                    loading: ej.isPending,
                    type: I ? "button" : "submit",
                    onClick: I ? eG : void 0,
                    children: (0, o.jsx)(y, {
                        close: eA,
                        isLinkStep: I,
                        isSubmitStep: eP
                    })
                }) : null, J[103] = ex, J[104] = eG, J[105] = F, J[106] = I, J[107] = eD, J[108] = eP, J[109] = ej.isPending, J[110] = eA, J[111] = K) : K = J[111], J[112] !== W || J[113] !== K ? ($ = (0, o.jsx)(m.e, {
                    children: (0, o.jsxs)(m.c, {
                        children: [W, K]
                    })
                }), J[112] = W, J[113] = K, J[114] = $) : $ = J[114], J[115] !== eq || J[116] !== G || J[117] !== V || J[118] !== $ ? (H = (0, o.jsxs)(m.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: eq,
                    children: [G, V, $]
                }), J[115] = eq, J[116] = G, J[117] = V, J[118] = $, J[119] = H) : H = J[119], J[120] !== ep || J[121] !== ef || J[122] !== eE || J[123] !== D || J[124] !== H ? (Y = (0, o.jsx)(p.a, {
                    open: !0,
                    onOpenChange: eE,
                    contentProps: D,
                    size: "wide",
                    variant: ef,
                    contentClassName: ep,
                    children: H
                }), J[120] = ep, J[121] = ef, J[122] = eE, J[123] = D, J[124] = H, J[125] = Y) : Y = J[125], Y
            }
        })
    }),
    VtLY: (function(e, t, a) {
        var o = a("Q840"),
            n = a("UKCO"),
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
                            hostId: n._b,
                            ...e
                        };
                    if (s?.hostId === n._b) return {
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
                        requestClient: a(i.c, n._b)
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
                    if (m && await (0, n.Ag)(u.subarray(0, n.ec)) !== "text") throw Error("File is not text");
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
                    contentSampleByteLimit: m ? n.ec : void 0,
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