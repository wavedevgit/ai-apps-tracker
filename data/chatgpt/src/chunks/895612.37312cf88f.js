export const __rspack_esm_ids = [895612];
export const __webpack_modules__ = {
    OHeG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Bs4i"),
            g = c("on57");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j = (0, e.c)(8);
                return j[0] !== a ? ({
                    className: b,
                    ...c
                } = a, j[0] = a, j[1] = b, j[2] = c) : (b = j[1], c = j[2]), j[3] !== b ? (h = (0, g.b)("[contain-intrinsic-size:var(--icon-size,16px)] [@container_style(--actions-opacity:0)]:[content-visibility:hidden]", b), j[3] = b, j[4] = h) : h = j[4], j[5] !== c || j[6] !== h ? (i = (0, d.jsx)(f.b, {
                    ...c,
                    className: h
                }), j[5] = c, j[6] = h, j[7] = i) : i = j[7], i
            }
        })
    }),
    nIGo: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("oyxz"),
            j = c("Qgfj"),
            k = c("OHeG"),
            l = c("Sm6l"),
            m = c("bqtn"),
            n = c("bf6R"),
            o = c("UxN3"),
            p = c("j9wQ");

        function q(a) {
            let b, c, g, i, j, k = (0, e.c)(14),
                {
                    children: o,
                    disabled: p,
                    triggerRef: q
                } = a,
                s = void 0 !== p && p,
                t = (0, h.a)();
            k[0] !== t ? (b = t.formatMessage(r.imageMenu), k[0] = t, k[1] = b) : b = k[1];
            let u = b;
            return k[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(n.nd, {}), k[2] = c) : c = k[2], k[3] !== s || k[4] !== u || k[5] !== q ? (g = (0, d.jsx)(l.a, {
                ref: q,
                "aria-label": u,
                color: "ghost",
                disabled: s,
                size: "toolbar",
                uniform: !0,
                children: c
            }), k[3] = s, k[4] = u, k[5] = q, k[6] = g) : g = k[6], k[7] !== u || k[8] !== g ? (i = (0, d.jsx)(f.a, {
                content: u,
                children: g
            }), k[7] = u, k[8] = g, k[9] = i) : i = k[9], k[10] !== o || k[11] !== s || k[12] !== i ? (j = (0, d.jsx)(m.a, {
                disabled: s,
                align: "end",
                side: "bottom",
                triggerButton: i,
                children: o
            }), k[10] = o, k[11] = s, k[12] = i, k[13] = j) : j = k[13], j
        }
        let r = (0, j.f)({
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
            s = {
                response: {
                    feedback: r.feedback,
                    good: r.goodResponse,
                    bad: r.badResponse,
                    selectedGood: r.removeGoodResponse,
                    selectedBad: r.removeBadResponse
                },
                question: {
                    feedback: r.rateQuestion,
                    good: r.goodQuestion,
                    bad: r.badQuestion,
                    selectedGood: r.goodQuestion,
                    selectedBad: r.badQuestion
                }
            };
        c.d(b, {}, {
            a: q,
            b: function(a) {
                let b, c, j, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I = (0, e.c)(116),
                    {
                        disabled: J,
                        hideUnselectedRating: K,
                        isAnimated: L,
                        menuItems: M,
                        rating: N,
                        ratingDisabled: O,
                        onRate: P,
                        shouldRestoreFocus: Q,
                        variant: R
                    } = a,
                    S = void 0 !== J && J,
                    T = void 0 !== K && K,
                    U = void 0 !== L && L,
                    V = void 0 !== O && O,
                    W = void 0 === R ? "response" : R,
                    X = (0, h.a)(),
                    Y = (0, g.useRef)(null),
                    Z = (0, g.useRef)(null),
                    $ = (0, g.useRef)(!1);
                I[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                    $.current && ((Z.current ?? Y.current)?.focus(), $.current = !1)
                }, I[0] = b) : b = I[0], I[1] !== N ? (c = [N], I[1] = N, I[2] = c) : c = I[2], (0, g.useLayoutEffect)(b, c), I[3] !== P || I[4] !== N || I[5] !== Q ? (j = a => {
                    $.current = Q?.(N === a ? null : a) ?? !0, P(a)
                }, I[3] = P, I[4] = N, I[5] = Q, I[6] = j) : j = I[6];
                let _ = j;
                if ("imageTurn" === W || "imageOverlay" === W) {
                    let a, b, c, e, g, h = "imageOverlay" === W ? "mediaOverlay" : "secondary",
                        i = "imageOverlay" === W ? "mediaOverlay" : "ghost";
                    I[7] !== X || I[8] !== U ? (a = U ? X.formatMessage(r.likeGif) : X.formatMessage(r.likeImage), I[7] = X, I[8] = U, I[9] = a) : a = I[9];
                    let j = a;
                    I[10] !== X || I[11] !== U ? (b = U ? X.formatMessage(r.dislikeGif) : X.formatMessage(r.dislikeImage), I[10] = X, I[11] = U, I[12] = b) : b = I[12];
                    let k = b;
                    return I[13] !== S || I[14] !== j || I[15] !== _ || I[16] !== N || I[17] !== V || I[18] !== h || I[19] !== i || I[20] !== W ? (c = "thumbsDown" !== N ? (0, d.jsx)(f.a, {
                        content: j,
                        children: (0, d.jsx)(l.a, {
                            ref: Y,
                            "aria-label": j,
                            "aria-pressed": "thumbsUp" === N,
                            color: "thumbsUp" === N ? h : i,
                            disabled: S || V || "thumbsUp" === N,
                            size: "imageOverlay" === W ? "inputIcon" : "icon",
                            radius: "imageOverlay" === W ? "full" : "default",
                            onClick: a => {
                                "imageOverlay" === W && a.stopPropagation(), _("thumbsUp")
                            },
                            children: "thumbsUp" === N ? (0, d.jsx)(n.uj, {}) : (0, d.jsx)(n.sj, {})
                        })
                    }) : null, I[13] = S, I[14] = j, I[15] = _, I[16] = N, I[17] = V, I[18] = h, I[19] = i, I[20] = W, I[21] = c) : c = I[21], I[22] !== S || I[23] !== k || I[24] !== _ || I[25] !== N || I[26] !== V || I[27] !== h || I[28] !== i || I[29] !== W ? (e = "thumbsUp" !== N ? (0, d.jsx)(f.a, {
                        content: k,
                        children: (0, d.jsx)(l.a, {
                            ref: Y,
                            "aria-label": k,
                            "aria-pressed": "thumbsDown" === N,
                            color: "thumbsDown" === N ? h : i,
                            disabled: S || V || "thumbsDown" === N,
                            size: "imageOverlay" === W ? "inputIcon" : "icon",
                            radius: "imageOverlay" === W ? "full" : "default",
                            onClick: a => {
                                "imageOverlay" === W && a.stopPropagation(), _("thumbsDown")
                            },
                            children: "thumbsDown" === N ? (0, d.jsx)(n.qj, {}) : (0, d.jsx)(n.oj, {})
                        })
                    }) : null, I[22] = S, I[23] = k, I[24] = _, I[25] = N, I[26] = V, I[27] = h, I[28] = i, I[29] = W, I[30] = e) : e = I[30], I[31] !== c || I[32] !== e ? (g = (0, d.jsxs)(d.Fragment, {
                        children: [c, e]
                    }), I[31] = c, I[32] = e, I[33] = g) : g = I[33], g
                }
                if ("imageViewerMenu" === W || "imageViewerSubmenu" === W) {
                    let a, b, c, e;
                    I[34] !== T || I[35] !== U || I[36] !== _ || I[37] !== N || I[38] !== V ? (a = T && "thumbsDown" === N ? null : (0, d.jsx)(m.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsUp" === N ? (0, d.jsx)(n.uj, {}) : (0, d.jsx)(n.sj, {}),
                        onSelect: () => _("thumbsUp"),
                        children: U ? (0, d.jsx)(i.a, {
                            ...r.likeGif
                        }) : (0, d.jsx)(i.a, {
                            ...r.likeImage
                        })
                    }), I[34] = T, I[35] = U, I[36] = _, I[37] = N, I[38] = V, I[39] = a) : a = I[39], I[40] !== T || I[41] !== U || I[42] !== _ || I[43] !== N || I[44] !== V ? (b = T && "thumbsUp" === N ? null : (0, d.jsx)(m.c.Item, {
                        disabled: V,
                        leftIcon: "thumbsDown" === N ? (0, d.jsx)(n.qj, {}) : (0, d.jsx)(n.oj, {}),
                        onSelect: () => _("thumbsDown"),
                        children: U ? (0, d.jsx)(i.a, {
                            ...r.dislikeGif
                        }) : (0, d.jsx)(i.a, {
                            ...r.dislikeImage
                        })
                    }), I[40] = T, I[41] = U, I[42] = _, I[43] = N, I[44] = V, I[45] = b) : b = I[45], I[46] !== b || I[47] !== a ? (c = (0, d.jsxs)(d.Fragment, {
                        children: [a, b]
                    }), I[46] = b, I[47] = a, I[48] = c) : c = I[48];
                    let f = c;
                    if ("imageViewerSubmenu" === W) {
                        let a, b, c;
                        return I[49] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(i.a, {
                            ...r.imageFeedback
                        }), I[49] = a) : a = I[49], I[50] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(o.b, {
                            icon: {
                                16: n.vj,
                                20: n.wj
                            }
                        }), I[50] = b) : b = I[50], I[51] !== S || I[52] !== f ? (c = (0, d.jsx)(p.q, {
                            ref: Z,
                            disabled: S,
                            label: a,
                            leftIcon: b,
                            children: f
                        }), I[51] = S, I[52] = f, I[53] = c) : c = I[53], c
                    }
                    return I[54] !== S || I[55] !== f || I[56] !== M ? (e = (0, d.jsxs)(q, {
                        triggerRef: Y,
                        disabled: S,
                        children: [M, f]
                    }), I[54] = S, I[55] = f, I[56] = M, I[57] = e) : e = I[57], e
                }
                I[58] !== W ? (t = a => "response" === W ? (0, d.jsx)(k.a, {
                    children: a
                }) : a, I[58] = W, I[59] = t) : t = I[59];
                let aa = t,
                    ab = s[W];
                if (null != N) {
                    let a, b, c, e, g, h, i, j = "thumbsUp" === N;
                    I[60] !== j ? (a = j ? {
                        16: n.tj,
                        20: n.uj
                    } : {
                        16: n.pj,
                        20: n.qj
                    }, I[60] = j, I[61] = a) : a = I[61];
                    let k = a;
                    I[62] !== X || I[63] !== j || I[64] !== ab.selectedBad || I[65] !== ab.selectedGood ? (b = X.formatMessage(j ? ab.selectedGood : ab.selectedBad), I[62] = X, I[63] = j, I[64] = ab.selectedBad, I[65] = ab.selectedGood, I[66] = b) : b = I[66];
                    let m = b;
                    return I[67] !== _ || I[68] !== N ? (c = () => _(N), I[67] = _, I[68] = N, I[69] = c) : c = I[69], I[70] !== k ? (e = (0, d.jsx)(o.b, {
                        icon: k
                    }), I[70] = k, I[71] = e) : e = I[71], I[72] !== S || I[73] !== m || I[74] !== c || I[75] !== e ? (g = (0, d.jsx)(l.a, {
                        ref: Y,
                        type: "button",
                        "aria-label": m,
                        "aria-pressed": !0,
                        color: "ghost",
                        disabled: S,
                        size: "icon",
                        onClick: c,
                        children: e
                    }), I[72] = S, I[73] = m, I[74] = c, I[75] = e, I[76] = g) : g = I[76], I[77] !== g || I[78] !== aa ? (h = aa(g), I[77] = g, I[78] = aa, I[79] = h) : h = I[79], I[80] !== m || I[81] !== h ? (i = (0, d.jsx)(f.a, {
                        content: m,
                        children: h
                    }), I[80] = m, I[81] = h, I[82] = i) : i = I[82], i
                }
                I[83] !== X || I[84] !== ab.feedback ? (u = X.formatMessage(ab.feedback), I[83] = X, I[84] = ab.feedback, I[85] = u) : u = I[85];
                let ac = u;
                return I[86] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, d.jsx)(o.b, {
                    icon: {
                        16: n.vj,
                        20: n.wj
                    }
                }), I[86] = v) : v = I[86], I[87] !== ac ? (w = (0, d.jsx)(l.a, {
                    ref: Y,
                    "aria-label": ac,
                    color: "ghost",
                    size: "icon",
                    children: v
                }), I[87] = ac, I[88] = w) : w = I[88], I[89] !== w || I[90] !== aa ? (x = aa(w), I[89] = w, I[90] = aa, I[91] = x) : x = I[91], I[92] !== ac || I[93] !== x ? (y = (0, d.jsx)(f.a, {
                    content: ac,
                    children: x
                }), I[92] = ac, I[93] = x, I[94] = y) : y = I[94], I[95] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, d.jsx)(o.b, {
                    icon: {
                        16: n.rj,
                        20: n.sj
                    }
                }), I[95] = z) : z = I[95], I[96] !== _ ? (A = () => _("thumbsUp"), I[96] = _, I[97] = A) : A = I[97], I[98] !== ab.good ? (B = (0, d.jsx)(i.a, {
                    ...ab.good
                }), I[98] = ab.good, I[99] = B) : B = I[99], I[100] !== A || I[101] !== B ? (C = (0, d.jsx)(m.c.Item, {
                    leftIcon: z,
                    onSelect: A,
                    children: B
                }), I[100] = A, I[101] = B, I[102] = C) : C = I[102], I[103] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, d.jsx)(o.b, {
                    icon: {
                        16: n.nj,
                        20: n.oj
                    }
                }), I[103] = D) : D = I[103], I[104] !== _ ? (E = () => _("thumbsDown"), I[104] = _, I[105] = E) : E = I[105], I[106] !== ab.bad ? (F = (0, d.jsx)(i.a, {
                    ...ab.bad
                }), I[106] = ab.bad, I[107] = F) : F = I[107], I[108] !== E || I[109] !== F ? (G = (0, d.jsx)(m.c.Item, {
                    leftIcon: D,
                    onSelect: E,
                    children: F
                }), I[108] = E, I[109] = F, I[110] = G) : G = I[110], I[111] !== S || I[112] !== y || I[113] !== C || I[114] !== G ? (H = (0, d.jsxs)(m.a, {
                    disabled: S,
                    triggerButton: y,
                    children: [C, G]
                }), I[111] = S, I[112] = y, I[113] = C, I[114] = G, I[115] = H) : H = I[115], H
            }
        })
    }),
    taaw: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Kwur"),
            h = c("OBi1"),
            i = c("HFSu");

        function j(a) {
            let b, c = (0, e.c)(5),
                {
                    reportEntityType: g,
                    title: h
                } = a;
            if (null != h) {
                let a;
                return c[0] !== h ? (a = (0, d.jsx)(d.Fragment, {
                    children: h
                }), c[0] = h, c[1] = a) : a = c[1], a
            }
            if ("share_link" === g) {
                let a;
                return c[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(f.a, {
                    id: "codexThreadReportDialog.sharedConversationTitle",
                    defaultMessage: "Report a conversation"
                }), c[2] = a) : a = c[2], a
            }
            if ("connector" === g) {
                let a;
                return c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(f.a, {
                    id: "codexThreadReportDialog.connectorTitle",
                    defaultMessage: "Report app"
                }), c[3] = a) : a = c[3], a
            }
            return c[4] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(f.a, {
                id: "codexThreadReportDialog.title",
                defaultMessage: "Report response"
            }), c[4] = b) : b = c[4], b
        }

        function k(a) {
            if (!/^https:\/\//i.test(a)) return;
            let b = document.createElement("a");
            b.href = a, b.target = "_blank", b.rel = "noopener noreferrer", b.click()
        }
        c.d(b, {}, {
            CodexThreadReportDialog: function(a) {
                let b, c, f, l, m, n, o = (0, e.c)(37),
                    {
                        onBackToFeedback: p,
                        onClose: q,
                        onCloseAutoFocus: r,
                        reportRequest: s,
                        adReport: t,
                        chatGptMessageId: u,
                        reportEntityType: v,
                        reportReasonsEntityType: w,
                        productArea: x,
                        successBody: y,
                        threadId: z,
                        title: A,
                        connectorId: B,
                        contentClassName: C
                    } = a,
                    D = "connector" === v ? B : z,
                    E = w ?? v;
                o[0] !== t || o[1] !== p || o[2] !== q ? (b = null == p ? void 0 : () => {
                    null == t && q(), p()
                }, o[0] = t, o[1] = p, o[2] = q, o[3] = b) : b = o[3], o[4] !== t?.queryKey || o[5] !== E ? (c = t?.queryKey ?? ["codex-thread-report-reasons", E], o[4] = t?.queryKey, o[5] = E, o[6] = c) : c = o[6], o[7] !== t || o[8] !== E || o[9] !== s ? (f = null == t ? () => (async function(a, b) {
                    if (null != b) {
                        let c = await b(`/report_flow/reasons/${a}`);
                        if (!c.ok) throw Error("Could not load reporting options");
                        return await c.json()
                    }
                    return g.Request.safeGet("/report_flow/reasons/{entity_type}", {
                        parameters: {
                            path: {
                                entity_type: a
                            }
                        },
                        additionalHeaders: (0, i.c)()
                    })
                })(E, s) : a => {
                    let {
                        signal: b
                    } = a;
                    return t.loadReasons(b)
                }, o[7] = t, o[8] = E, o[9] = s, o[10] = f) : f = o[10];
                let F = null != t ? 0 : void 0,
                    G = null != t,
                    H = null != t,
                    I = null != t ? "chatgpt" : void 0;
                o[11] !== t || o[12] !== u || o[13] !== x || o[14] !== v || o[15] !== D || o[16] !== s ? (l = a => {
                    let {
                        reason: b,
                        details: c,
                        additionalFields: d
                    } = a;
                    return null != t ? t.submit({
                        id: b.id,
                        details: c || void 0
                    }, d) : async function(a, b, c, d) {
                        let {
                            details: e,
                            entityType: f,
                            reasonId: h,
                            threadId: j
                        } = a, k = {
                            entity_id: j,
                            entity_type: f,
                            additional_fields_values: "project" === f || "share_link" === f ? {} : void 0,
                            product_area: d ?? ("conversation" === f || "connector" === f || "project" === f || "share_link" === f ? "1p" : "codex"),
                            reason: 0 === e.length ? {
                                id: h
                            } : {
                                id: h,
                                details: e
                            }
                        };
                        if (null != b) {
                            if (!(await b("/report_flow/report", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(k)
                                })).ok) throw Error("Could not submit report");
                            return
                        }
                        await g.Request.safePost("/report_flow/report", {
                            requestBody: k,
                            additionalHeaders: {
                                ...(0, i.c)(),
                                ...null == c ? {} : {
                                    "chatgpt-conv-message-id": c
                                }
                            }
                        })
                    }({
                        details: c,
                        entityType: v,
                        reasonId: b.id,
                        threadId: D
                    }, s, u, x)
                }, o[11] = t, o[12] = u, o[13] = x, o[14] = v, o[15] = D, o[16] = s, o[17] = l) : l = o[17];
                let J = null == s ? void 0 : k;
                return o[18] !== t?.title || o[19] !== v || o[20] !== A ? (m = t?.title ?? (0, d.jsx)(j, {
                    reportEntityType: v,
                    title: A
                }), o[18] = t?.title, o[19] = v, o[20] = A, o[21] = m) : m = o[21], o[22] !== C || o[23] !== q || o[24] !== r || o[25] !== y || o[26] !== b || o[27] !== m || o[28] !== c || o[29] !== f || o[30] !== F || o[31] !== G || o[32] !== H || o[33] !== I || o[34] !== l || o[35] !== J ? (n = (0, d.jsx)(h.ReportDialog, {
                    onBack: b,
                    onClose: q,
                    onCloseAutoFocus: r,
                    queryKey: c,
                    loadReasons: f,
                    gcTime: F,
                    includeServerFields: G,
                    preventCloseWhileSubmitting: H,
                    dialogVariant: I,
                    contentClassName: C,
                    submitReport: l,
                    openExternalForm: J,
                    successBody: y,
                    title: m
                }), o[22] = C, o[23] = q, o[24] = r, o[25] = y, o[26] = b, o[27] = m, o[28] = c, o[29] = f, o[30] = F, o[31] = G, o[32] = H, o[33] = I, o[34] = l, o[35] = J, o[36] = n) : n = o[36], n
            }
        })
    }),
    cbrt: (function(a, b, c) {
        var d = c("ABep"),
            e = c("HOLv"),
            f = c("XXJV"),
            g = c("Yc0o"),
            h = c("U8sx"),
            i = c("tiy4");
        c.d(b, {}, {
            openEditablePlanTabWithEditor: function(a, b, c) {
                let {
                    revealAndFocus: j,
                    content: k,
                    conversationId: l,
                    hostId: m,
                    insertPosition: n,
                    key: o,
                    path: p,
                    syncOpenTabs: q,
                    target: r,
                    title: s
                } = b, t = `${m}:${l}:${o}`;
                return a.set(h.b, t, {
                    content: k,
                    path: p,
                    save: null
                }), !!c(a, p, {
                    revealAndFocus: j,
                    hostId: m,
                    insertPosition: n,
                    onContentChange: b => {
                        a.set(h.b, t, a => a?.path === p ? {
                            ...a,
                            content: b
                        } : a)
                    },
                    onSaveChange: b => {
                        a.set(h.b, t, a => a?.path === p ? {
                            ...a,
                            save: b
                        } : a)
                    },
                    plan: {
                        conversationId: l,
                        key: o,
                        title: s
                    },
                    syncOpenTabs: q,
                    tabId: g.a.PLAN,
                    target: r
                }) && ((0, f.b)((0, f.c)(a, g.a.PLAN) ?? "right").updateTab(a, g.a.PLAN, {
                    icon: (0, d.jsx)(e.a, {
                        className: "shrink-0",
                        asset: i.a
                    }),
                    title: s
                }), a.set(h.a, {
                    key: o,
                    tabId: g.a.PLAN
                }), !0)
            }
        })
    }),
    Y05g: (function(a, b, c) {
        c.r(b), c("DBCl"), c("tl5a");
        var d = c("ZU27");
        c("GaA7"), c("sbaW"), c("ndjw");
        var e = c("bCmT");
        c("odlM"), c("VtLY");
        var f = c("Yc0o");
        c("WFY2"), c("bnxy"), c("cbrt");
        var g = c("U8sx");
        c("bRIv");
        let h = (0, e.b)({
            open: i
        });

        function i(a, b) {
            let {
                content: c,
                conversationId: e,
                cwd: i,
                hideCodeBlocks: j,
                key: k,
                planKey: l,
                title: m
            } = b, {
                revealAndFocus: n = !0,
                insertPosition: o,
                tabId: p = f.a.PLAN
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a.set(g.a, {
                key: k,
                tabId: p
            }), (0, d.h)(a, h, {
                revealAndFocus: n,
                defaultState: () => ({
                    planKey: k,
                    scrollTop: 0
                }),
                durableRoute: null == l ? void 0 : {
                    kind: "plan",
                    params: {
                        planKey: l
                    },
                    payloadVersion: 1
                },
                id: p,
                insertPosition: o,
                onClose: a => {
                    a.get(g.a)?.key === k && a.set(g.a, null)
                },
                props: {
                    content: c,
                    conversationId: e,
                    cwd: i,
                    hideCodeBlocks: j,
                    planKey: k
                },
                title: m
            })
        }
        c.d(b, {
            activePlan$: () => g.a,
            editablePlanByKey$: () => g.b,
            editablePlanContentByKey$: () => g.c
        }, {
            openPlanSidePanel: function(a, b) {
                i(a, b)
            },
            openReadOnlyPlanSidePanel: i
        })
    }),
    U8sx: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl"),
            f = c("tSEg");
        let g = (0, d.u)(f.a, null),
            h = (0, d.v)(e.a, a => null),
            i = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(h, a)?.content ?? null
            });
        c.d(b, {}, {
            a: g,
            b: h,
            c: i
        })
    }),
    CQTg: (function(a, b, c) {
        c.d(b, {
            a: () => G
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("IPUh"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("Wf1j"),
            l = c("oyxz");
        c("ZU27"), c("gbrq");
        var m = c("Sm6l"),
            n = c("uuN8"),
            o = c("HOLv"),
            p = c("UxN3"),
            q = c("POXM"),
            r = c("exPx"),
            s = a => (0, d.jsx)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: (0, d.jsx)("path", {
                    d: "M7.33496 16V12.665H4C3.63273 12.665 3.33496 12.3673 3.33496 12C3.33496 11.6327 3.63273 11.335 4 11.335H8C8.36727 11.335 8.66504 11.6327 8.66504 12V16C8.66504 16.3673 8.36727 16.665 8 16.665C7.63273 16.665 7.33496 16.3673 7.33496 16ZM11.335 4C11.335 3.63273 11.6327 3.33496 12 3.33496C12.3673 3.33496 12.665 3.63273 12.665 4V7.33496H16L16.1338 7.34863C16.4369 7.41057 16.665 7.67857 16.665 8C16.665 8.32143 16.4369 8.58943 16.1338 8.65137L16 8.66504H12C11.6327 8.66504 11.335 8.36727 11.335 8V4Z"
                })
            }),
            t = c("MP9s"),
            u = c("c1K7"),
            v = c("HWQc"),
            w = c("yGJW");
        c("tSEg");
        var x = c("sbaW"),
            y = c("V8uZ"),
            z = c("aepO"),
            A = c("gBCz");
        c("Y05g");
        var B = c("wbOy"),
            C = c("YPzM"),
            D = c("mIWY"),
            E = c("E9wO"),
            F = c("tiy4");

        function G(a) {
            let b, c = (0, e.c)(4);
            if (!1 === a.showOpenButton) {
                let b;
                return c[0] !== a ? (b = (0, d.jsx)(H, {
                    ...a
                }), c[0] = a, c[1] = b) : b = c[1], b
            }
            return c[2] !== a ? (b = (0, d.jsxs)(d.Fragment, {
                children: [null, (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(H, {
                        ...a
                    })
                })]
            }), c[2] = a, c[3] = b) : b = c[3], b
        }

        function H(a) {
            let b, c, G, H, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag = (0, e.c)(106),
                {
                    item: ah,
                    conversationId: ai,
                    cwd: aj,
                    hideCodeBlocks: ak,
                    defaultCollapsed: al,
                    hasArtifacts: am,
                    reportEntityType: an,
                    showOpenButton: ao,
                    turnId: ap,
                    isThreadPreview: aq,
                    isThreadPreviewCollapsed: ar,
                    onOpenInSidePanel: as
                } = a,
                at = void 0 !== ak && ak,
                au = void 0 !== am && am,
                av = void 0 === an ? "thread" : an,
                aw = void 0 !== aq && aq,
                ax = void 0 !== ar && ar,
                [ay, az] = (0, j.useState)(void 0 !== al && al),
                aA = (0, i.z)(x.threadHostId$),
                aB = (0, k.a)(),
                aC = (0, i.z)(w.c),
                aD = (0, i.z)(q.b);
            (void 0 === ao || ao) && ah.completed, ag[0] !== ah.completed || ag[1] !== ah.content ? (b = ah.completed && ah.content.trim().length > 0, ag[0] = ah.completed, ag[1] = ah.content, ag[2] = b) : b = ag[2];
            let aE = b;
            ag[3] !== ah.completed || ag[4] !== ah.content ? (c = ah.completed && ah.content.trim().length > 0, ag[3] = ah.completed, ag[4] = ah.content, ag[5] = c) : c = ag[5];
            let aF = aE && !0,
                aG = c && !0,
                aH = aD && null != ap && null != aC.submitCodexAnalyticsEvent && !0;
            ag[6] !== aB ? (G = aB.formatMessage({
                id: "localConversation.planSummary.download",
                defaultMessage: "Download plan"
            }), ag[6] = aB, ag[7] = G) : G = ag[7];
            let aI = G;
            ag[8] !== aB ? (H = aB.formatMessage({
                id: "localConversation.planSummary.openInSidePanel",
                defaultMessage: "Open plan in side panel"
            }), ag[8] = aB, ag[9] = H) : H = ag[9];
            let aJ = H;
            ag[10] !== aB ? (J = aB.formatMessage({
                id: "localConversation.planSummary.closeSidePanel",
                defaultMessage: "Close plan side panel"
            }), ag[10] = aB, ag[11] = J) : J = ag[11];
            let aK = J;
            ag[12] !== aB || ag[13] !== ay ? (K = ay ? aB.formatMessage({
                id: "localConversation.planSummary.expand",
                defaultMessage: "Expand plan summary"
            }) : aB.formatMessage({
                id: "localConversation.planSummary.collapse",
                defaultMessage: "Collapse plan summary"
            }), ag[12] = aB, ag[13] = ay, ag[14] = K) : K = ag[14];
            let aL = K;
            ag[15] !== ah.content ? (L = () => {
                let a = new Blob([ah.content], {
                        type: "text/markdown;charset=utf-8"
                    }),
                    b = URL.createObjectURL(a),
                    c = document.createElement("a");
                c.href = b, c.download = "PLAN.md", c.click(), URL.revokeObjectURL(b)
            }, ag[15] = ah.content, ag[16] = L) : L = ag[16];
            let aM = L;
            ag[17] !== ai || ag[18] !== ah.content || ag[19] !== aC || ag[20] !== ap ? (M = a => (null != ap && aC.submitCodexAnalyticsEvent?.({
                action: "copy",
                eventKind: "action",
                metadata: {
                    surface: "plan_summary"
                },
                threadId: ai,
                turnId: ap
            }), (0, z.d)(ah.content, a)), ag[17] = ai, ag[18] = ah.content, ag[19] = aC, ag[20] = ap, ag[21] = M) : M = ag[21];
            let aN = M,
                aO = aw ? "max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50" : void 0;
            ag[22] !== aw || ag[23] !== ax || ag[24] !== as ? (N = aw && !ax && null != as ? (0, d.jsx)("button", {
                type: "button",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "absolute inset-0 z-10 cursor-interaction",
                onClick: as
            }) : null, ag[22] = aw, ag[23] = ax, ag[24] = as, ag[25] = N) : N = ag[25], ag[26] !== aK || ag[27] !== ax || ag[28] !== as ? (O = ax && null != as ? (0, d.jsx)("button", {
                type: "button",
                "aria-label": aK,
                className: "absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: as,
                children: (0, d.jsx)("span", {
                    className: "flex size-6 items-center justify-center rounded-full hover:bg-secondary-ghost-hover electron:rounded-md",
                    children: (0, d.jsx)(s, {
                        className: "icon-sm",
                        "aria-hidden": !0
                    })
                })
            }) : null, ag[26] = aK, ag[27] = ax, ag[28] = as, ag[29] = O) : O = ag[29];
            let aP = aw ? "inline-flex items-center gap-2 font-normal text-tertiary" : "font-semibold text-default";
            ag[30] !== aP ? (P = (0, g.b)("text-base leading-tight", aP), ag[30] = aP, ag[31] = P) : P = ag[31], ag[32] !== aw ? (Q = aw ? (0, d.jsx)(o.a, {
                className: "shrink-0",
                asset: F.a
            }) : null, ag[32] = aw, ag[33] = Q) : Q = ag[33], ag[34] !== ah.completed ? (R = ah.completed ? (0, d.jsx)(l.a, {
                id: "localConversation.planSummary.title",
                defaultMessage: "Plan"
            }) : (0, d.jsx)(B.a, {
                children: (0, d.jsx)(l.a, {
                    id: "localConversation.planSummary.titleWriting",
                    defaultMessage: "Writing plan"
                })
            }), ag[34] = ah.completed, ag[35] = R) : R = ag[35], ag[36] !== P || ag[37] !== Q || ag[38] !== R ? (S = (0, d.jsxs)("span", {
                className: P,
                children: [Q, R]
            }), ag[36] = P, ag[37] = Q, ag[38] = R, ag[39] = S) : S = ag[39];
            let aQ = ax && "hidden";
            ag[40] !== aQ ? (T = (0, g.b)("relative z-20 flex items-center gap-1", aQ), ag[40] = aQ, ag[41] = T) : T = ag[41];
            ag[42] !== aI || ag[43] !== aM || ag[44] !== aG ? (U = aG ? (0, d.jsx)(f.a, {
                content: aI,
                children: (0, d.jsx)(m.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": aI,
                    onClick: aM,
                    children: (0, d.jsx)(p.a, {
                        "aria-hidden": !1,
                        asset16: D.a,
                        legacyIcon: t.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, ag[42] = aI, ag[43] = aM, ag[44] = aG, ag[45] = U) : U = ag[45], ag[46] !== aN || ag[47] !== aF ? (V = aF ? (0, d.jsx)(n.a, {
                iconOnly: !0,
                iconClassName: "icon-2xs",
                onCopy: aN
            }) : null, ag[46] = aN, ag[47] = aF, ag[48] = V) : V = ag[48], ag[49] !== ai || ag[50] !== au || ag[51] !== av || ag[52] !== aH || ag[53] !== ap ? (W = aH ? (0, d.jsx)(C.a, {
                hasArtifacts: au,
                reportEntityType: av,
                threadId: ai,
                turnId: ap
            }) : null, ag[49] = ai, ag[50] = au, ag[51] = av, ag[52] = aH, ag[53] = ap, ag[54] = W) : W = ag[54], ag[55] !== as || ag[56] !== aJ ? (X = null != as ? (0, d.jsx)(f.a, {
                content: aJ,
                children: (0, d.jsx)(m.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": aJ,
                    onClick: as,
                    children: (0, d.jsx)(p.a, {
                        "aria-hidden": !1,
                        asset16: E.a,
                        legacyIcon: u.a,
                        legacyClassName: "icon-2xs"
                    })
                })
            }) : null, ag[55] = as, ag[56] = aJ, ag[57] = X) : X = ag[57], ag[58] !== aL || ag[59] !== ay || ag[60] !== aw ? (Y = aw ? null : (0, d.jsx)(f.a, {
                content: ay ? (0, d.jsx)(l.a, {
                    id: "localConversation.planSummary.expandTooltip",
                    defaultMessage: "Expand"
                }) : (0, d.jsx)(l.a, {
                    id: "localConversation.planSummary.collapseTooltip",
                    defaultMessage: "Collapse"
                }),
                children: (0, d.jsx)(m.a, {
                    color: "ghost",
                    size: "icon",
                    "aria-label": aL,
                    onClick: () => {
                        az(I)
                    },
                    children: (0, d.jsx)(r.a, {
                        className: (0, g.b)("icon-2xs transition-transform", ay ? "rotate-180" : "rotate-0")
                    })
                })
            }), ag[58] = aL, ag[59] = ay, ag[60] = aw, ag[61] = Y) : Y = ag[61], ag[62] !== ax || ag[63] !== T || null !== ag[64] || ag[65] !== U || ag[66] !== V || ag[67] !== W || ag[68] !== X || ag[69] !== Y ? (Z = (0, d.jsxs)("div", {
                "aria-hidden": ax,
                className: T,
                children: [null, U, V, W, X, Y]
            }), ag[62] = ax, ag[63] = T, ag[64] = null, ag[65] = U, ag[66] = V, ag[67] = W, ag[68] = X, ag[69] = Y, ag[70] = Z) : Z = ag[70], ag[71] !== O || ag[72] !== S || ag[73] !== Z ? ($ = (0, d.jsxs)("div", {
                className: "relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2",
                children: [O, S, Z]
            }), ag[71] = O, ag[72] = S, ag[73] = Z, ag[74] = $) : $ = ag[74], ag[75] !== ai ? (_ = {
                [A.a]: ai
            }, ag[75] = ai, ag[76] = _) : _ = ag[76];
            let aR = ax || void 0,
                aS = aw && !ax && "[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]";
            ag[77] !== aS ? (aa = (0, g.b)("relative overflow-hidden", aS), ag[77] = aS, ag[78] = aa) : aa = ag[78];
            let aT = ax || void 0;
            ag[79] !== ay || ag[80] !== aw || ag[81] !== ax ? (ab = aw ? {
                maxHeight: 160 * !ax,
                opacity: +!ax
            } : {
                height: ay ? 320 : "auto",
                ...ay ? {
                    overflow: "hidden"
                } : {
                    transitionEnd: {
                        overflow: "visible"
                    }
                }
            }, ag[79] = ay, ag[80] = aw, ag[81] = ax, ag[82] = ab) : ab = ag[82];
            let aU = !ah.completed;
            return ag[83] !== ai || ag[84] !== aj || ag[85] !== at || ag[86] !== aA || ag[87] !== ah.content || ag[88] !== aU ? (ac = (0, d.jsx)(v.c, {
                markdown: ah.content,
                conversationId: ai,
                hostId: aA,
                hideCodeBlocks: at,
                isStreaming: aU,
                cwd: aj
            }), ag[83] = ai, ag[84] = aj, ag[85] = at, ag[86] = aA, ag[87] = ah.content, ag[88] = aU, ag[89] = ac) : ac = ag[89], ag[90] !== ay || ag[91] !== aw ? (ad = !aw && ay ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent"
                }), (0, d.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, d.jsx)(m.a, {
                        className: "pointer-events-auto",
                        color: "primary",
                        onClick: () => {
                            az(!1)
                        },
                        children: (0, d.jsx)(l.a, {
                            id: "localConversation.planSummary.viewPlan",
                            defaultMessage: "Expand plan"
                        })
                    })
                })]
            }) : null, ag[90] = ay, ag[91] = aw, ag[92] = ad) : ad = ag[92], ag[93] !== _ || ag[94] !== aR || ag[95] !== aa || ag[96] !== aT || ag[97] !== ab || ag[98] !== ac || ag[99] !== ad ? (ae = (0, d.jsxs)(h.a.div, {
                ..._,
                "aria-hidden": aR,
                className: aa,
                inert: aT,
                initial: !1,
                animate: ab,
                transition: y.a,
                children: [ac, ad]
            }), ag[93] = _, ag[94] = aR, ag[95] = aa, ag[96] = aT, ag[97] = ab, ag[98] = ac, ag[99] = ad, ag[100] = ae) : ae = ag[100], ag[101] !== aO || ag[102] !== N || ag[103] !== $ || ag[104] !== ae ? (af = (0, d.jsxs)(v.b, {
                className: aO,
                children: [N, $, ae]
            }), ag[101] = aO, ag[102] = N, ag[103] = $, ag[104] = ae, ag[105] = af) : af = ag[105], af
        }

        function I(a) {
            return !a
        }
    }),
    YPzM: (function(a, b, c) {
        c.d(b, {
            a: () => z
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("Qgfj"),
            i = c("tl5a"),
            j = c("X6Vn"),
            k = c("UrAA"),
            l = c("Bbed"),
            m = c("NJMI");
        let n = (0, l.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(686079)]).then(() => c("v9GG"))).FeedbackSubmissionDialog, {
                errorFallback: (0, d.jsx)(m.a, {
                    onClose: a => (0, j.b)(a, n)
                })
            }),
            o = (0, l.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(975392)]).then(() => c("WhO9"))).FeedbackFormDialog, {
                errorFallback: (0, d.jsx)(m.a, {
                    onClose: a => (0, j.b)(a, o)
                })
            });
        var p = c("jQvD"),
            q = c("nIGo"),
            r = c("yGJW"),
            s = c("OWtl"),
            t = c("taaw");
        let u = "safety_or_legal_concern",
            v = {
                thumbs_down: "thumbsDown",
                thumbs_up: "thumbsUp"
            },
            w = (0, h.f)({
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
            x = {
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
                    id: u,
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
            y = {
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
                    id: u,
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

        function z(a) {
            let b, c = (0, e.c)(14),
                {
                    hasArtifacts: h,
                    reportEntityType: l,
                    renderControl: m,
                    threadId: n,
                    turnId: w
                } = a,
                z = void 0 !== h && h,
                B = void 0 === l ? "thread" : l,
                C = (0, f.y)(s.a),
                [D, E] = (0, g.useState)(null),
                F = (0, f.z)(r.c);
            if (c[0] !== z || c[1] !== F || c[2] !== m || c[3] !== B || c[4] !== C || c[5] !== D || c[6] !== n || c[7] !== w) {
                let a, e = (a, b, c) => {
                        let e = z ? x[a] : y[a];
                        (0, p.a)(C, o, {
                            belowFreeformContent: (0, d.jsx)(k.b, {}),
                            closeOnSubmit: "immediate",
                            freeformFeedbackRequired: !1,
                            initialDetails: void 0 === b ? "" : b,
                            initialSelectedOptionId: c,
                            onOptionSelect: b => {
                                let {
                                    details: c,
                                    selectedOptionId: d
                                } = b;
                                d === u && ((0, j.b)(C, o), f(c, a))
                            },
                            onSubmit: b => {
                                let {
                                    details: c,
                                    selectedOptionId: d
                                } = b;
                                return d === u ? void f(c, a) : F.submitCodexAnalyticsEvent?.({
                                    action: "submit_turn_feedback",
                                    eventKind: "action",
                                    threadId: n,
                                    turnId: w,
                                    metadata: {
                                        details: c,
                                        has_artifacts: z,
                                        selected_option: d
                                    }
                                })
                            },
                            options: e
                        })
                    },
                    f = (a, b) => {
                        (0, j.f)(C, t.CodexThreadReportDialog, {
                            onBackToFeedback: () => {
                                e(b, a, u)
                            },
                            reportEntityType: B,
                            threadId: n
                        })
                    };
                c[9] !== F || c[10] !== C || c[11] !== n || c[12] !== w ? (a = a => {
                    if (E(a), null == a) return;
                    let b = C.get(i.Cb, n);
                    F.submitCodexAnalyticsEvent?.({
                        eventKind: "turn_rating",
                        threadId: n,
                        turnId: w,
                        sessionId: b === n && null != C.get(i.Mb, n) ? null : b,
                        rating: a
                    })
                }, c[9] = F, c[10] = C, c[11] = n, c[12] = w, c[13] = a) : a = c[13];
                let g = a,
                    h = {
                        rating: null == D ? null : v[D],
                        onRate: a => {
                            let b = "thumbsUp" === a ? "thumbs_up" : "thumbs_down",
                                c = D === b ? null : b;
                            g(c), null != c && e(c)
                        },
                        shouldRestoreFocus: A
                    };
                b = null != m ? m(h, a => g("thumbsUp" === a ? "thumbs_up" : null)) : (0, d.jsx)(q.b, {
                    ...h
                }), c[0] = z, c[1] = F, c[2] = m, c[3] = B, c[4] = C, c[5] = D, c[6] = n, c[7] = w, c[8] = b
            } else b = c[8];
            return b
        }

        function A(a) {
            return null == a
        }
    }),
    HWQc: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("UxN3"),
            j = c("exPx"),
            k = c("tKUf"),
            l = c("wKFm"),
            m = c("lpgc");

        function n(a) {
            let b, c, k, l, n, q = (0, e.c)(13),
                {
                    entries: r
                } = a,
                [s, t] = (0, g.useState)(!1),
                u = r.length > 8;
            q[0] !== r || q[1] !== s || q[2] !== u ? (b = u && !s ? r.slice(0, 8) : r, q[0] = r, q[1] = s, q[2] = u, q[3] = b) : b = q[3];
            let v = b;
            return q[4] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)("div", {
                className: "mb-2 font-medium text-secondary",
                children: (0, d.jsx)(h.a, {
                    id: "markdown.metadata.title",
                    defaultMessage: "Metadata"
                })
            }), q[4] = c) : c = q[4], q[5] !== v ? (k = (0, d.jsx)(p, {
                entries: v
            }), q[5] = v, q[6] = k) : k = q[6], q[7] !== s || q[8] !== u ? (l = u ? (0, d.jsxs)("button", {
                type: "button",
                "aria-expanded": s,
                className: "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                onClick: () => {
                    t(o)
                },
                children: [(0, d.jsx)("span", {
                    children: s ? (0, d.jsx)(h.a, {
                        id: "markdown.metadata.showLess",
                        defaultMessage: "Show less"
                    }) : (0, d.jsx)(h.a, {
                        id: "markdown.metadata.showMore",
                        defaultMessage: "Show more"
                    })
                }), (0, d.jsx)(i.a, {
                    className: (0, f.b)("transition-transform", s ? "rotate-180" : "rotate-0"),
                    "aria-hidden": !1,
                    asset16: m.a,
                    legacyIcon: j.a,
                    legacyClassName: "icon-2xs"
                })]
            }) : null, q[7] = s, q[8] = u, q[9] = l) : l = q[9], q[10] !== k || q[11] !== l ? (n = (0, d.jsxs)("div", {
                className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
                children: [c, k, l]
            }), q[10] = k, q[11] = l, q[12] = n) : n = q[12], n
        }

        function o(a) {
            return !a
        }

        function p(a) {
            let b, c, g, h = (0, e.c)(7),
                {
                    className: i,
                    entries: j
                } = a;
            return h[0] !== i ? (b = (0, f.b)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", i), h[0] = i, h[1] = b) : b = h[1], h[2] !== j ? (c = j.map(q), h[2] = j, h[3] = c) : c = h[3], h[4] !== b || h[5] !== c ? (g = (0, d.jsx)("dl", {
                className: b,
                children: c
            }), h[4] = b, h[5] = c, h[6] = g) : g = h[6], g
        }

        function q(a, b) {
            return (0, d.jsxs)("div", {
                className: "contents",
                children: [(0, d.jsx)("dt", {
                    className: "truncate font-mono text-secondary",
                    title: a.key,
                    children: a.key
                }), (0, d.jsx)("dd", {
                    className: "min-w-0 text-default",
                    children: (0, d.jsx)(r, {
                        value: a.value
                    })
                })]
            }, `${a.key}-${b}`)
        }

        function r(a) {
            let b, c = (0, e.c)(6),
                {
                    value: f
                } = a;
            if (Array.isArray(f)) {
                let a, b;
                return c[0] !== f ? (a = f.map(s), c[0] = f, c[1] = a) : a = c[1], c[2] !== a ? (b = (0, d.jsx)("span", {
                    className: "flex min-w-0 flex-wrap gap-1",
                    children: a
                }), c[2] = a, c[3] = b) : b = c[3], b
            }
            let g = 0 === f.length ? '""' : f;
            return c[4] !== g ? (b = (0, d.jsx)("span", {
                className: "font-mono break-words",
                children: g
            }), c[4] = g, c[5] = b) : b = c[5], b
        }

        function s(a, b) {
            return (0, d.jsx)("span", {
                className: "max-w-full rounded-sm bg-text/10 px-1.5 py-0.5 font-mono break-words",
                children: 0 === a.length ? '""' : a
            }, `${a}-${b}`)
        }
        c.d(b, {}, {
            a: n,
            b: function(a) {
                let b, c, g = (0, e.c)(7),
                    {
                        background: h,
                        className: i,
                        children: j,
                        overflow: k
                    } = a,
                    l = "normal" === (void 0 === h ? "subtle" : h) ? "bg-surface" : "bg-text/5",
                    m = "auto" === (void 0 === k ? "clip" : k) ? "overflow-auto" : "overflow-clip";
                return g[0] !== i || g[1] !== l || g[2] !== m ? (b = (0, f.b)("relative rounded-lg", l, m, i), g[0] = i, g[1] = l, g[2] = m, g[3] = b) : b = g[3], g[4] !== j || g[5] !== b ? (c = (0, d.jsx)("div", {
                    className: b,
                    children: j
                }), g[4] = j, g[5] = b, g[6] = c) : c = g[6], c
            },
            c: function(a) {
                let b, c, f, g, h = (0, e.c)(15),
                    {
                        enableMetadataPreview: i,
                        markdown: j,
                        conversationId: m,
                        cwd: o,
                        hideCodeBlocks: p,
                        hostId: q,
                        isStreaming: r
                    } = a,
                    s = void 0 !== i && i,
                    t = void 0 === m ? null : m,
                    u = void 0 === o ? null : o,
                    v = void 0 !== r && r;
                h[0] !== s || h[1] !== j ? (b = s ? (0, k.a)(j) : null, h[0] = s, h[1] = j, h[2] = b) : b = h[2];
                let w = b,
                    x = w?.body ?? j;
                return h[3] !== w ? (c = null != w && w.entries.length > 0 ? (0, d.jsx)(n, {
                    entries: w.entries
                }) : null, h[3] = w, h[4] = c) : c = h[4], h[5] !== t || h[6] !== u || h[7] !== p || h[8] !== q || h[9] !== v || h[10] !== x ? (f = (0, d.jsx)(l.a, {
                    className: "text-size-chat",
                    conversationId: t,
                    hideCodeBlocks: p,
                    hostId: q,
                    isStreaming: v,
                    cwd: u,
                    children: x
                }), h[5] = t, h[6] = u, h[7] = p, h[8] = q, h[9] = v, h[10] = x, h[11] = f) : f = h[11], h[12] !== c || h[13] !== f ? (g = (0, d.jsxs)("div", {
                    className: "px-4 py-3",
                    children: [c, f]
                }), h[12] = c, h[13] = f, h[14] = g) : g = h[14], g
            }
        })
    }),
    OBi1: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("T0Rc"),
            g = c("xSOA"),
            h = c("on57"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("oyxz"),
            l = c("MM0V"),
            m = c("Sm6l"),
            n = c("JNtf"),
            o = c("mUDD"),
            p = c("Ot7V"),
            q = c("zLIa"),
            r = c("rvFo");

        function s(a) {
            return a.slice(0, -1)
        }

        function t(a) {
            let b, c = (0, e.c)(4),
                {
                    close: f,
                    isLinkStep: g,
                    isSubmitStep: h
                } = a;
            if (f) {
                let a;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                    id: "codexThreadReportDialog.close",
                    defaultMessage: "Close"
                }), c[0] = a) : a = c[0], a
            }
            if (g) {
                let a;
                return c[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                    id: "codexThreadReportDialog.viewForm",
                    defaultMessage: "View form"
                }), c[1] = a) : a = c[1], a
            }
            if (h) {
                let a;
                return c[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                    id: "codexThreadReportDialog.submit",
                    defaultMessage: "Submit"
                }), c[2] = a) : a = c[2], a
            }
            return c[3] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(k.a, {
                id: "codexThreadReportDialog.next",
                defaultMessage: "Next"
            }), c[3] = b) : b = c[3], b
        }

        function u(a) {
            let b, c, f, g = (0, e.c)(12),
                {
                    reasons: i,
                    selectedReasonId: k,
                    setSelectedReasonId: l
                } = a,
                m = (0, j.a)();
            if (g[0] !== m ? (b = m.formatMessage({
                    id: "codexThreadReportDialog.optionsLabel",
                    defaultMessage: "Reporting options"
                }), g[0] = m, g[1] = b) : b = g[1], g[2] !== i || g[3] !== k || g[4] !== l) {
                let a;
                g[6] !== k || g[7] !== l ? (a = a => {
                    let b = k === a.id;
                    return (0, d.jsx)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": b,
                        onClick: () => {
                            l(a.id)
                        },
                        className: (0, h.b)("border-default cursor-interaction rounded-lg border px-3 py-2 text-start text-sm", "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2", b ? "bg-primary-solid text-primary-solid" : "text-default hover:bg-surface-elevated/60"),
                        children: a.cta
                    }, a.id)
                }, g[6] = k, g[7] = l, g[8] = a) : a = g[8], c = i.map(a), g[2] = i, g[3] = k, g[4] = l, g[5] = c
            } else c = g[5];
            return g[9] !== b || g[10] !== c ? (f = (0, d.jsx)("div", {
                role: "radiogroup",
                "aria-label": b,
                className: "flex flex-col gap-2 select-none",
                children: c
            }), g[9] = b, g[10] = c, g[11] = f) : f = g[11], f
        }

        function v(a) {
            let b, c = (0, e.c)(2),
                {
                    children: f
                } = a;
            return c[0] !== f ? (b = (0, d.jsx)("div", {
                className: "text-sm text-codex-description",
                children: f
            }), c[0] = f, c[1] = b) : b = c[1], b
        }

        function w(a, b) {
            return (!b || !a.has_details && (a.additional_fields?.length ?? 0) === 0) && (a.sub_reasons?.length ?? 0) === 0 && null == a.details_placeholder && null == a.link_attachment && null == a.subtext
        }
        c.d(b, {}, {
            ReportDialog: function(a) {
                let b, c, h, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z = (0, e.c)(126),
                    {
                        onBack: $,
                        onClose: _,
                        onCloseAutoFocus: aa,
                        queryKey: ab,
                        loadReasons: ac,
                        submitReport: ad,
                        submissionUnavailable: ae,
                        openExternalForm: af,
                        successBody: ag,
                        title: ah,
                        gcTime: ai,
                        staleTime: aj,
                        includeServerFields: ak,
                        preventCloseWhileSubmitting: al,
                        dialogVariant: am,
                        contentClassName: an,
                        PrimaryButton: ao
                    } = a,
                    ap = void 0 === aj ? r.b.ONE_MINUTE : aj,
                    aq = void 0 !== ak && ak,
                    ar = void 0 !== al && al,
                    as = void 0 === ao ? m.a : ao,
                    at = (0, j.a)();
                Z[0] !== ai ? (b = null == ai ? {} : {
                    gcTime: ai
                }, Z[0] = ai, Z[1] = b) : b = Z[1], Z[2] !== ac || Z[3] !== ab || Z[4] !== ap || Z[5] !== b ? (c = {
                    queryKey: ab,
                    queryFn: ac,
                    ...b,
                    staleTime: ap
                }, Z[2] = ac, Z[3] = ab, Z[4] = ap, Z[5] = b, Z[6] = c) : c = Z[6];
                let {
                    data: au,
                    isPending: av,
                    isError: aw
                } = (0, f.a)(c);
                Z[7] !== ad ? (h = {
                    mutationFn: ad
                }, Z[7] = ad, Z[8] = h) : h = Z[8];
                let ax = (0, g.a)(h),
                    [ay, az] = (0, i.useState)("");
                Z[9] === Symbol.for("react.memo_cache_sentinel") ? (x = {}, Z[9] = x) : x = Z[9];
                let [aA, aB] = (0, i.useState)(x), [aC, aD] = (0, i.useState)(null);
                Z[10] === Symbol.for("react.memo_cache_sentinel") ? (y = [], Z[10] = y) : y = Z[10];
                let [aE, aF] = (0, i.useState)(y), aG = 0 === aE.length ? null : aE[aE.length - 1];
                Z[11] !== aG || Z[12] !== au?.reasons ? (z = (null == aG ? au?.reasons : aG.sub_reasons) ?? [], Z[11] = aG, Z[12] = au?.reasons, Z[13] = z) : z = Z[13];
                let aH = z;
                Z[14] !== aG?.additional_fields?.length || Z[15] !== aG?.details_placeholder || Z[16] !== aG?.has_details || Z[17] !== aG?.link_attachment || Z[18] !== aG?.subtext || Z[19] !== aq || Z[20] !== aC || Z[21] !== aH ? (E = aH.find(a => a.id === aC) ?? null, B = (A = aG?.details_placeholder != null || aq && aG?.has_details === !0) || aq && (aG?.additional_fields?.length ?? 0) > 0, D = aG?.link_attachment != null, C = aG?.subtext != null && 0 === aH.length && !B && !D, F = B || null != E && w(E, aq), Z[14] = aG?.additional_fields?.length, Z[15] = aG?.details_placeholder, Z[16] = aG?.has_details, Z[17] = aG?.link_attachment, Z[18] = aG?.subtext, Z[19] = aq, Z[20] = aC, Z[21] = aH, Z[22] = A, Z[23] = B, Z[24] = C, Z[25] = D, Z[26] = E, Z[27] = F) : (A = Z[22], B = Z[23], C = Z[24], D = Z[25], E = Z[26], F = Z[27]);
                let aI = F,
                    aJ = null == E || av || ax.isPending,
                    aK = ax.isSuccess || aw,
                    aL = !aK && (aI && null == ad || !aI && !D && aJ);
                Z[28] !== _ || Z[29] !== ar || Z[30] !== ax.isPending ? (G = a => {
                    a || ar && ax.isPending || _()
                }, Z[28] = _, Z[29] = ar, Z[30] = ax.isPending, Z[31] = G) : G = Z[31];
                let aM = G;
                Z[32] !== aG || Z[33] !== $ || Z[34] !== aE ? (H = () => {
                    if (null == aG) return void $?.();
                    let a = aE[aE.length - 1];
                    aF(s), aD(a?.id ?? null), az(""), aB({})
                }, Z[32] = aG, Z[33] = $, Z[34] = aE, Z[35] = H) : H = Z[35];
                let aN = H;
                Z[36] !== aG || Z[37] !== aA || Z[38] !== ay || Z[39] !== aq || Z[40] !== B || Z[41] !== C || Z[42] !== D || Z[43] !== _ || Z[44] !== af || Z[45] !== ax || Z[46] !== E || Z[47] !== aE || Z[48] !== aK || Z[49] !== ad ? (I = a => {
                    if (a.preventDefault(), !ax.isPending && (!aq || a.currentTarget.reportValidity())) {
                        if (aK) return void _();
                        if (!C) {
                            if (D && aG?.link_attachment != null) return null != af ? void af(aG.link_attachment) : void(0, p.f)({
                                href: aG.link_attachment,
                                initiator: "open_in_browser_bridge",
                                openTarget: "external-browser"
                            });
                            if (B && null != aG) {
                                if (null == ad) return;
                                ax.mutate({
                                    details: ay.trim(),
                                    reason: aG,
                                    path: aE,
                                    ...aq ? {
                                        additionalFields: aA
                                    } : {}
                                });
                                return
                            }
                            if (null != E) {
                                if (w(E, aq)) {
                                    if (null == ad) return;
                                    ax.mutate({
                                        details: "",
                                        reason: E,
                                        path: [...aE, E]
                                    });
                                    return
                                }
                                aF(a => [...a, E]), aD(null), az(""), aB({})
                            }
                        }
                    }
                }, Z[36] = aG, Z[37] = aA, Z[38] = ay, Z[39] = aq, Z[40] = B, Z[41] = C, Z[42] = D, Z[43] = _, Z[44] = af, Z[45] = ax, Z[46] = E, Z[47] = aE, Z[48] = aK, Z[49] = ad, Z[50] = I) : I = Z[50];
                let aO = I;
                Z[51] !== aG || Z[52] !== af ? (J = a => {
                    if (aG?.link_attachment != null) {
                        if (null != af) return void af(aG.link_attachment);
                        (0, p.e)({
                            event: a,
                            href: aG.link_attachment,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    }
                }, Z[51] = aG, Z[52] = af, Z[53] = J) : J = Z[53];
                let aP = J;
                Z[54] !== aG || Z[55] !== au || Z[56] !== ax.isSuccess ? (K = function(a) {
                    let {
                        activeReason: b,
                        isSuccess: c,
                        reportReasons: d
                    } = a;
                    return c ? null : null != b ? b.cta : d?.header_explanation || d?.header || null
                }({
                    activeReason: aG,
                    reportReasons: au,
                    isSuccess: ax.isSuccess
                }), Z[54] = aG, Z[55] = au, Z[56] = ax.isSuccess, Z[57] = K) : K = Z[57];
                let aQ = K;
                return Z[58] !== aa ? (L = {
                    onCloseAutoFocus: aa
                }, Z[58] = aa, Z[59] = L) : L = Z[59], Z[60] !== ax.isSuccess || Z[61] !== ah ? (M = ax.isSuccess ? (0, d.jsx)(k.a, {
                    id: "codexThreadReportDialog.successTitle",
                    defaultMessage: "Thanks for your report"
                }) : ah, Z[60] = ax.isSuccess, Z[61] = ah, Z[62] = M) : M = Z[62], Z[63] !== M ? (N = (0, d.jsx)(n.f, {
                    children: M
                }), Z[63] = M, Z[64] = N) : N = Z[64], Z[65] !== aQ ? (O = null != aQ ? (0, d.jsx)(n.e, {
                    children: aQ
                }) : void 0, Z[65] = aQ, Z[66] = O) : O = Z[66], Z[67] !== N || Z[68] !== O ? (P = (0, d.jsx)(o.e, {
                    children: (0, d.jsx)(o.d, {
                        title: N,
                        subtitle: O,
                        titleSize: "dialog"
                    })
                }), Z[67] = N, Z[68] = O, Z[69] = P) : P = Z[69], Z[70] !== aG || Z[71] !== aA || Z[72] !== ay || Z[73] !== A || Z[74] !== aq || Z[75] !== at || Z[76] !== B || Z[77] !== C || Z[78] !== D || Z[79] !== av || Z[80] !== aw || Z[81] !== ax.isSuccess || Z[82] !== aC || Z[83] !== ag || Z[84] !== aH ? (Q = ax.isSuccess ? (0, d.jsx)(v, {
                    children: ag ?? (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.successBody",
                        defaultMessage: "Our team will review the content to determine if it violates our policies"
                    })
                }) : av ? (0, d.jsx)(v, {
                    children: (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.loading",
                        defaultMessage: "Loading reporting options\u2026"
                    })
                }) : aw ? (0, d.jsx)(l.a, {
                    type: "error",
                    role: "alert",
                    content: (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.loadError",
                        defaultMessage: "Couldn't load reporting options. Try again later"
                    })
                }) : B && null != aG ? (0, d.jsxs)(o.f, {
                    className: "gap-3",
                    children: [aq && null != aG.explanation ? (0, d.jsx)(v, {
                        children: aG.explanation
                    }) : null, A ? (0, d.jsx)(q.c, {
                        autoFocus: !0,
                        rows: 5,
                        placeholder: aG.details_placeholder ?? void 0,
                        "aria-label": at.formatMessage({
                            id: "codexThreadReportDialog.detailsLabel",
                            defaultMessage: "Add details"
                        }),
                        value: ay,
                        onChange: a => {
                            az(a.target.value)
                        }
                    }) : null, null != aG.subtext ? (0, d.jsx)(v, {
                        children: aG.subtext
                    }) : null, aq ? aG.additional_fields?.map(a => {
                        let b = "text";
                        return "int" === a.type ? b = "number" : ("email" === a.type || "url" === a.type) && (b = a.type), (0, d.jsxs)("label", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [a.placeholder, "multi_line_text" === a.type ? (0, d.jsx)(q.c, {
                                required: a.required,
                                value: aA[a.id] ?? "",
                                onChange: b => aB(c => ({
                                    ...c,
                                    [a.id]: b.target.value
                                }))
                            }) : (0, d.jsx)(q.a, {
                                type: b,
                                required: a.required,
                                value: aA[a.id] ?? "",
                                onChange: b => aB(c => ({
                                    ...c,
                                    [a.id]: b.target.value
                                }))
                            })]
                        }, a.id)
                    }) : null]
                }) : D ? (0, d.jsx)(v, {
                    children: (aq ? aG?.link_explanation ?? aG?.explanation : aG?.link_explanation ?? aG?.subtext) ?? (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.linkBody",
                        defaultMessage: "Open the linked form to finish this report"
                    })
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [C ? (0, d.jsx)(v, {
                        children: aG?.subtext
                    }) : null, C ? null : (0, d.jsx)(u, {
                        reasons: aH,
                        selectedReasonId: aC,
                        setSelectedReasonId: aD
                    })]
                }), Z[70] = aG, Z[71] = aA, Z[72] = ay, Z[73] = A, Z[74] = aq, Z[75] = at, Z[76] = B, Z[77] = C, Z[78] = D, Z[79] = av, Z[80] = aw, Z[81] = ax.isSuccess, Z[82] = aC, Z[83] = ag, Z[84] = aH, Z[85] = Q) : Q = Z[85], Z[86] !== ax.isError ? (R = ax.isError ? (0, d.jsx)(l.a, {
                    type: "error",
                    role: "alert",
                    content: (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.submitError",
                        defaultMessage: "Couldn't submit your report. Try again"
                    })
                }) : null, Z[86] = ax.isError, Z[87] = R) : R = Z[87], Z[88] !== av || Z[89] !== aw || Z[90] !== ae || Z[91] !== ad ? (S = null != ad || av || aw ? null : (0, d.jsx)("p", {
                    className: "text-sm",
                    role: "status",
                    children: ae
                }), Z[88] = av, Z[89] = aw, Z[90] = ae, Z[91] = ad, Z[92] = S) : S = Z[92], Z[93] !== Q || Z[94] !== R || Z[95] !== S ? (T = (0, d.jsxs)(o.e, {
                    className: "gap-3",
                    children: [Q, R, S]
                }), Z[93] = Q, Z[94] = R, Z[95] = S, Z[96] = T) : T = Z[96], Z[97] !== aG || Z[98] !== aN || Z[99] !== $ || Z[100] !== ax.isPending || Z[101] !== ax.isSuccess ? (U = null == aG && null == $ || ax.isSuccess ? null : (0, d.jsx)(m.a, {
                    color: "secondary",
                    disabled: ax.isPending,
                    type: "button",
                    onClick: aN,
                    children: (0, d.jsx)(k.a, {
                        id: "codexThreadReportDialog.back",
                        defaultMessage: "Back"
                    })
                }), Z[97] = aG, Z[98] = aN, Z[99] = $, Z[100] = ax.isPending, Z[101] = ax.isSuccess, Z[102] = U) : U = Z[102], Z[103] !== as || Z[104] !== aP || Z[105] !== C || Z[106] !== D || Z[107] !== aL || Z[108] !== aI || Z[109] !== ax.isPending || Z[110] !== aK ? (V = !C || aK ? (0, d.jsx)(as, {
                    color: "primary",
                    disabled: aL,
                    loading: ax.isPending,
                    type: D ? "button" : "submit",
                    onClick: D ? aP : void 0,
                    children: (0, d.jsx)(t, {
                        close: aK,
                        isLinkStep: D,
                        isSubmitStep: aI
                    })
                }) : null, Z[103] = as, Z[104] = aP, Z[105] = C, Z[106] = D, Z[107] = aL, Z[108] = aI, Z[109] = ax.isPending, Z[110] = aK, Z[111] = V) : V = Z[111], Z[112] !== U || Z[113] !== V ? (W = (0, d.jsx)(o.e, {
                    children: (0, d.jsxs)(o.c, {
                        children: [U, V]
                    })
                }), Z[112] = U, Z[113] = V, Z[114] = W) : W = Z[114], Z[115] !== aO || Z[116] !== P || Z[117] !== T || Z[118] !== W ? (X = (0, d.jsxs)(o.b, {
                    as: "form",
                    className: "gap-4",
                    onSubmit: aO,
                    children: [P, T, W]
                }), Z[115] = aO, Z[116] = P, Z[117] = T, Z[118] = W, Z[119] = X) : X = Z[119], Z[120] !== an || Z[121] !== am || Z[122] !== aM || Z[123] !== L || Z[124] !== X ? (Y = (0, d.jsx)(n.a, {
                    open: !0,
                    onOpenChange: aM,
                    contentProps: L,
                    size: "wide",
                    variant: am,
                    contentClassName: an,
                    children: X
                }), Z[120] = an, Z[121] = am, Z[122] = aM, Z[123] = L, Z[124] = X, Z[125] = Y) : Y = Z[125], Y
            }
        })
    }),
    VtLY: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("tl5a"),
            g = c("bWX0"),
            h = c("XGJX"),
            i = c("uNQ5"),
            j = c("GaA7"),
            k = c("q77y"),
            l = c("OWtl"),
            m = c("gTKF"),
            n = c("yI91"),
            o = c("YJq6"),
            p = c("ISAq");
        let q = (0, d.v)(l.a, a => 0, void 0, {
                autoDispose: !0
            }),
            r = (0, d.d)(l.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b;
                if (null != a) {
                    let b = "string" == typeof a ? a : a.threadId,
                        g = "string" == typeof a ? c(m.threadExecutorTargetByThread$, {
                            kind: "app-server",
                            conversationId: a
                        }) : {
                            hostId: e.$b,
                            ...a
                        };
                    if (g?.hostId === e.$b) return {
                        environmentId: g.environmentId,
                        threadId: b ?? void 0,
                        notifySaved: a => {
                            d.set(q, {
                                environmentId: g.environmentId,
                                path: a
                            }, a => a + 1)
                        },
                        executorAccess: c(m.threadFileRequestContext$, {
                            conversationId: b,
                            environmentId: g.environmentId
                        }).executorAccess,
                        requestClient: c(f.c, e.$b)
                    }
                }
            }, {
                isEqual: (a, b) => a?.environmentId === b?.environmentId && a?.threadId === b?.threadId && a?.executorAccess === b?.executorAccess && a?.requestClient === b?.requestClient
            });

        function s(a) {
            let b = (0, p.c)(a);
            if (a.includes("\0") || null != b && "utf-8" !== b) throw Error("SVG source must use UTF-8")
        }
        async function t(a, b) {
            if ("svg" !== (0, g.c)(a) || await (0, e.Bg)(b) !== "image/svg+xml") throw Error("File is not text")
        }
        c.d(b, {}, {
            a: r,
            b: q,
            c: async function(a) {
                let {
                    cloudFileAccess: b,
                    filePath: c,
                    hostId: d,
                    maximumSizeBytes: f,
                    pendingSaveSnapshot: l,
                    previousSnapshot: m,
                    requireTextContent: p = !1,
                    signal: q
                } = a, r = "svg" === (0, g.c)(c);
                if (null != b) {
                    let {
                        environmentId: a,
                        requestClient: d,
                        executorAccess: g
                    } = b;
                    q?.throwIfAborted();
                    let h = {
                            executorAccess: g
                        },
                        i = {
                            environmentId: a,
                            path: c
                        },
                        j = await d.sendRequest("fs/getMetadata", i, h);
                    q?.throwIfAborted();
                    let {
                        dataBase64: k
                    } = await d.sendRequest("fs/readFile", i, h);
                    q?.throwIfAborted();
                    let l = (0, n.a)(k);
                    if (null != f && l.byteLength > f) throw Error("File is too large");
                    if (p) {
                        let a = l.subarray(0, e.fc);
                        await (0, e.Ag)(a) !== "text" && await t(c, a)
                    }
                    let m = new TextDecoder("utf-8", {
                        fatal: r
                    }).decode(l);
                    return r && s(m), {
                        content: m,
                        mtimeMs: j.modifiedAtMs,
                        sizeBytes: l.byteLength
                    }
                }
                let {
                    contentKind: u,
                    mtimeMs: v,
                    sizeBytes: w
                } = await (0, h.a)({
                    contentSampleByteLimit: p ? e.fc : void 0,
                    contentSampleMaxFileBytes: p ? f : void 0,
                    hostId: d,
                    path: c
                }, q);
                if (null != f && null != w && w > f) throw Error("File is too large");
                let x = p && "image" === u && r;
                if (p && "text" !== u && !x) throw Error("File is not text");
                if (r || null != j.a.workspaceFiles.saveText) {
                    let a = await (0, k.a)(j.a.workspaceFiles.read({
                        hostId: d,
                        path: c,
                        representation: "blob",
                        maxBytes: f
                    }), q);
                    if (!("blob" in a)) throw Error("Expected file bytes");
                    let b = (0, n.a)(a.blob);
                    if (x && await t(c, b.subarray(0, e.fc)), null != f && b.byteLength > f) throw Error("File is too large");
                    let g = 239 === b[0] && 187 === b[1] && 191 === b[2],
                        h = [m, l],
                        i = g && h.some(a => a?.hasUtf8Bom === !1 && a.content.startsWith("\uFEFF")) ? h.find(b => b?.hasUtf8Bom != null && (0, o.b)(`${b.hasUtf8Bom?"\uFEFF":""}${b.content}`) === a.blob) : void 0,
                        p = i?.hasUtf8Bom ?? g,
                        u = new TextDecoder("utf-8", {
                            fatal: !0,
                            ignoreBOM: !0
                        }).decode(b);
                    return r && s(u), {
                        content: p ? u.slice(1) : u,
                        hasUtf8Bom: p,
                        mtimeMs: v ?? null,
                        sizeBytes: b.byteLength
                    }
                }
                let {
                    contents: y
                } = await (0, i.a)({
                    hostId: d,
                    path: c
                }, q), z = null == f && null != w ? w : new Blob([y]).size;
                if (null != f && z > f) throw Error("File is too large");
                return {
                    content: y,
                    mtimeMs: v ?? null,
                    sizeBytes: z
                }
            },
            d: async function(a) {
                let {
                    cloudFileAccess: b,
                    content: c,
                    expectedMtimeMs: d,
                    filePath: e,
                    hasUtf8Bom: f,
                    hostId: h
                } = a;
                if ("svg" === (0, g.c)(e) && s(c), null != b) {
                    let {
                        environmentId: a,
                        requestClient: f,
                        executorAccess: g
                    } = b, h = {
                        executorAccess: g
                    }, i = {
                        environmentId: a,
                        path: e
                    }, {
                        modifiedAtMs: j
                    } = await f.sendRequest("fs/getMetadata", i, h);
                    return j !== d ? {
                        mtimeMs: j,
                        outcome: "conflict"
                    } : (await f.sendRequest("fs/writeFile", {
                        ...i,
                        dataBase64: (0, o.b)(c)
                    }, h), b.notifySaved(e), {
                        mtimeMs: (await f.sendRequest("fs/getMetadata", i, h)).modifiedAtMs,
                        outcome: "saved"
                    })
                }
                let i = j.a.workspaceFiles.saveText;
                if (null == i) throw Error("Saving text files is not supported by this host");
                return (0, k.a)(i({
                    content: f ? `\uFEFF${c}` : c,
                    expectedMtimeMs: d,
                    hostId: h,
                    path: e
                }))
            }
        })
    })
};