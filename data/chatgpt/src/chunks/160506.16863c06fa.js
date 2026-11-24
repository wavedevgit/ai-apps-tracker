export const __rspack_esm_ids = [160506];
export const __webpack_modules__ = {
    piij: (function(a, b, c) {
        a.exports = c.p + "assets/space-recovery.105d9c61fe.png"
    }),
    ylLY: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    XHk2: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("vi3X"),
            h = c("fDIZ"),
            i = c("El6m");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l = (0, e.c)(14),
                    {
                        paneContext: m,
                        children: n
                    } = a,
                    o = (0, f.useContext)(i.b),
                    p = (0, f.useContext)(h.a),
                    q = (0, f.useContext)(g.a);
                l[0] !== q || l[1] !== p || l[2] !== m || l[3] !== o ? (b = m ?? {
                    transition: o,
                    escapeHandler: p,
                    bannerTarget: q
                }, l[0] = q, l[1] = p, l[2] = m, l[3] = o, l[4] = b) : b = l[4];
                let r = b;
                return l[5] !== n || l[6] !== r.bannerTarget ? (c = (0, d.jsx)(g.a, {
                    value: r.bannerTarget,
                    children: n
                }), l[5] = n, l[6] = r.bannerTarget, l[7] = c) : c = l[7], l[8] !== r.escapeHandler || l[9] !== c ? (j = (0, d.jsx)(h.a, {
                    value: r.escapeHandler,
                    children: c
                }), l[8] = r.escapeHandler, l[9] = c, l[10] = j) : j = l[10], l[11] !== r.transition || l[12] !== j ? (k = (0, d.jsx)(i.b, {
                    value: r.transition,
                    children: j
                }), l[11] = r.transition, l[12] = j, l[13] = k) : k = l[13], k
            }
        })
    }),
    FC5L: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("tSEg"),
            h = c("wrxv");
        c.d(b, {}, {
            a: function(a) {
                let b = (0, f.j)(g.a, (b, c) => {
                    let {
                        scope: d
                    } = c;
                    return {
                        onOpen: () => a.open?.(d, b),
                        onDismiss: () => a.dismiss(d, b)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, f.d)(g.a, (c, d) => {
                    if (null == c) return h.a;
                    let e = [],
                        f = !1;
                    for (let g of a.conversationIds(d.scope, c)) {
                        let c = a.status(d.scope, g);
                        if (c.pending) {
                            f = !0;
                            continue
                        }
                        if (!c.unread || !c.completed) continue;
                        let h = a.preview(d.scope, g);
                        null != h && e.push({
                            id: c.completionId ?? g,
                            title: a.title(d.scope, g),
                            preview: h,
                            ...d.get(b, g)
                        })
                    }
                    return e.length > 0 ? {
                        type: "ready",
                        value: e
                    } : f ? h.b : h.a
                }, {
                    isEqual: e()
                })
            }
        })
    }),
    ckwE: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("VnEZ");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(3),
                    {
                        children: h,
                        binding: i
                    } = a,
                    [j] = (0, f.useState)(g.b),
                    k = i ?? j;
                return c[0] !== h || c[1] !== k ? (b = (0, d.jsx)(g.a, {
                    value: k,
                    children: h
                }), c[0] = h, c[1] = k, c[2] = b) : b = c[2], b
            }
        })
    }),
    Ppno: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("hZax"),
            i = c("Ho4C"),
            j = c("KFm7"),
            k = c("lsfk"),
            l = c("SBcL"),
            m = c("bIvi");

        function n(a, b) {
            let c = a.querySelector(`[data-turn-key="${CSS.escape(b)}"]`);
            return c?.querySelector("[data-user-message-bubble]") ?? c
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E = (0, e.c)(73),
                    {
                        initialPlacementKey: F,
                        isActiveVoiceConversation: G,
                        isLoadingHistory: H,
                        latestUserTurnKey: I,
                        conversationId: J,
                        onResponseSpacerStateChange: K,
                        preserveResponseViewport: L
                    } = a,
                    M = void 0 !== G && G,
                    N = void 0 !== H && H,
                    O = (0, h.i)();
                E[0] !== M || E[1] !== O ? (b = M && (0, h.d)(O, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), E[0] = M, E[1] = O, E[2] = b) : b = E[2];
                let P = b,
                    Q = (0, g.useRef)(I),
                    R = (0, f.x)(null == J ? 0 : l.b, J ?? ""),
                    S = (0, g.useRef)(R),
                    T = (0, g.useRef)(N),
                    U = (0, g.useRef)(null),
                    V = (0, g.useRef)(null),
                    W = (0, g.useRef)(null),
                    X = (0, k.b)();
                E[3] !== X ? (c = () => new j.a(X), E[3] = X, E[4] = c) : c = E[4];
                let [Y] = (0, g.useState)(c), {
                    clear: Z,
                    consumeGrowth: $,
                    getHeightPx: _,
                    ensureScrollRoomForAnchor: aa,
                    place: ab,
                    prepareThreadEndContent: ac
                } = Y, {
                    addScrollListener: ad,
                    getScrollElement: ae,
                    responseSpacerController: af
                } = X;
                E[5] !== ae || E[6] !== I || E[7] !== ab || E[8] !== L || E[9] !== Y || E[10] !== X || E[11] !== P ? (o = a => {
                    if (!L?.(a => {
                            let b = ae();
                            null != b && ab(n(b, a) ?? void 0)
                        })) {
                        if (null == a && null != I && !P) {
                            X.holdViewport(), U.current = {
                                previousKey: I,
                                signal: Y.getPendingPlacementSignal()
                            };
                            return
                        }
                        ab(a)
                    }
                }, E[5] = ae, E[6] = I, E[7] = ab, E[8] = L, E[9] = Y, E[10] = X, E[11] = P, E[12] = o) : o = E[12];
                let ag = (0, m.a)(o);
                E[13] !== Z || E[14] !== X ? (p = a => {
                    Z(), X.scrollToBottom(a)
                }, E[13] = Z, E[14] = X, E[15] = p) : p = E[15];
                let ah = (0, m.a)(p);
                E[16] !== ah || E[17] !== R ? (q = () => {
                    S.current !== R && (S.current = R, ah())
                }, r = [R, ah], E[16] = ah, E[17] = R, E[18] = q, E[19] = r) : (q = E[18], r = E[19]), (0, g.useLayoutEffect)(q, r), E[20] !== $ || E[21] !== _ || E[22] !== ac || E[23] !== Y.height || E[24] !== Y.holdViewport || E[25] !== af || E[26] !== ah ? (s = () => af.register({
                    consumeGrowth: $,
                    getHeightPx: _,
                    holdViewport: Y.holdViewport,
                    prepareThreadEndContent: ac,
                    scrollToBottom: ah
                }, Y.height).dispose, E[20] = $, E[21] = _, E[22] = ac, E[23] = Y.height, E[24] = Y.holdViewport, E[25] = af, E[26] = ah, E[27] = s) : s = E[27], E[28] !== $ || E[29] !== _ || E[30] !== ac || E[31] !== Y || E[32] !== af || E[33] !== ah ? (t = [$, _, ac, Y, af, ah], E[28] = $, E[29] = _, E[30] = ac, E[31] = Y, E[32] = af, E[33] = ah, E[34] = t) : t = E[34], (0, g.useInsertionEffect)(s, t), E[35] !== Y ? (u = (a, b) => {
                    let c = U.current;
                    null != c && c.previousKey !== a && (U.current = null, c.signal.aborted || Y.revealSubmittedTurn(b)), V.current = {
                        turnKey: a,
                        element: b
                    }, W.current?.(a, b)
                }, E[35] = Y, E[36] = u) : u = E[36];
                let ai = (0, m.a)(u);
                E[37] === Symbol.for("react.memo_cache_sentinel") ? (v = a => {
                    W.current = a;
                    let b = V.current;
                    return null != b && a(b.turnKey, b.element), () => {
                        W.current = null
                    }
                }, E[37] = v) : v = E[37];
                let aj = (0, m.a)(v);
                E[38] !== ae || E[39] !== I || E[40] !== ab || E[41] !== P ? (w = () => {
                    let a = ae();
                    if (null != a && 0 !== a.clientHeight)
                        if (P && null != I) {
                            let b = n(a, I);
                            if (null == b) return;
                            ab(b)
                        } else ab()
                }, E[38] = ae, E[39] = I, E[40] = ab, E[41] = P, E[42] = w) : w = E[42];
                let ak = (0, g.useEffectEvent)(w);
                return E[43] !== Z || E[44] !== $ || E[45] !== aa || E[46] !== _ || E[47] !== K || E[48] !== ai || E[49] !== ag || E[50] !== P ? (x = () => (K({
                    voiceAutoScrollEnabled: P,
                    clear: Z,
                    consumeGrowth: $,
                    getHeightPx: _,
                    ensureScrollRoomForAnchor: aa,
                    onTurnLayoutReady: ai,
                    place: ag
                }), () => {
                    K(null)
                }), y = [Z, $, _, aa, K, ai, ag, P], E[43] = Z, E[44] = $, E[45] = aa, E[46] = _, E[47] = K, E[48] = ai, E[49] = ag, E[50] = P, E[51] = x, E[52] = y) : (x = E[51], y = E[52]), (0, g.useLayoutEffect)(x, y), E[53] !== ae || E[54] !== N || E[55] !== I || E[56] !== ag || E[57] !== Y || E[58] !== aj || E[59] !== P ? (z = () => {
                    let a = Q.current,
                        b = T.current;
                    if (Q.current = I, T.current = N, P && !N && !b && null != I && I !== a) {
                        var c, d, e, f, g;
                        let a, b, h, i, j;
                        return c = I, d = ae, e = ag, f = aj, g = Y.getPendingPlacementSignal(), b = null, h = null, i = !1, j = () => {
                            i = !0, null != b && (cancelAnimationFrame(b), b = null), g.removeEventListener("abort", j), a?.()
                        }, g.addEventListener("abort", j, {
                            once: !0
                        }), a = f((a, f) => {
                            i || a !== c || (h = f, null == b && (b = requestAnimationFrame(() => {
                                b = null;
                                let a = d(),
                                    c = h?.querySelector("[data-user-message-bubble]") ?? h;
                                null != a && 0 !== a.clientHeight && null != c && a.contains(c) && !(c.getBoundingClientRect().height <= 0) && (j(), e(c))
                            })))
                        }), j
                    }
                }, A = [ae, N, I, ag, aj, Y, P], E[53] = ae, E[54] = N, E[55] = I, E[56] = ag, E[57] = Y, E[58] = aj, E[59] = P, E[60] = z, E[61] = A) : (z = E[60], A = E[61]), (0, g.useLayoutEffect)(z, A), E[62] !== ad || E[63] !== F || E[64] !== ak || E[65] !== Y ? (B = () => {
                    if (null == F) return;
                    let a = Y.getPendingPlacementSignal();
                    return ad(() => {
                        a.aborted || ak()
                    })
                }, E[62] = ad, E[63] = F, E[64] = ak, E[65] = Y, E[66] = B) : B = E[66], E[67] !== ad || E[68] !== F || E[69] !== Y ? (C = [ad, F, Y], E[67] = ad, E[68] = F, E[69] = Y, E[70] = C) : C = E[70], (0, g.useLayoutEffect)(B, C), E[71] !== Y ? (D = (0, d.jsx)(i.a, {
                    controller: Y
                }), E[71] = Y, E[72] = D) : D = E[72], D
            }
        })
    }),
    C6kc: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("MVHH"),
            f = c("D99L"),
            g = c("fVOX"),
            h = c("yGJW"),
            i = c("g2p6");

        function j(a, b, c) {
            "memory_footnote_shown" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: c
            }), a.get(g.a).count("default", b, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: c,
                target: "search_sources_sidebar"
            })
        }
        c.d(b, {
            a: () => e.Y
        }, {
            b: function(a, b) {
                let {
                    actionType: c,
                    conversationId: d,
                    experiment: f,
                    messageId: g,
                    source: i,
                    feedback: k,
                    selectedFeedback: l,
                    surface: m = "sources"
                } = b, n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(k, null) && (n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let o = null == i ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === m && (o = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, h.a)(a, e.X, {
                    actionType: c,
                    conversationId: d ?? void 0,
                    messageId: g,
                    citationUuid: i?.citationUuid ?? void 0,
                    sourceType: function(a) {
                        switch (a?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(i),
                    feedback: n,
                    selectedFeedback: null == l ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[l],
                    entrypoint: o,
                    target: "explainer" === m || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === c ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: f
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === c && j(a, "chatgpt_memory_citations_sidebar_open_clicked", f)
            },
            c: function(a, b) {
                "dismissed" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: i.c
                }), "shown" === b && (0, h.a)(a, d.xd, {
                    eventId: `${i.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: j
        })
    }),
    JlMc: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("RU3e");
        c("bjAA");
        var h = c("OWtl");
        c("CKur"), c("XtQP");
        var i = c("dQRk"),
            j = c("UWHW");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m = (0, d.c)(10),
                    {
                        conversationId: n,
                        isTranscriptVisible: o
                    } = a,
                    p = void 0 === o || o,
                    q = (0, e.y)(h.a),
                    r = (0, f.useId)();
                return m[0] !== n || m[1] !== r || m[2] !== q ? (b = () => (q.set(j.b, a => new Map(a).set(r, n)), q.get(j.a)?.dismissCurrent(), () => {
                    q.set(j.b, a => {
                        let b = new Map(a);
                        return b.delete(r), b
                    })
                }), c = [n, r, q], m[0] = n, m[1] = r, m[2] = q, m[3] = b, m[4] = c) : (b = m[3], c = m[4]), (0, f.useEffect)(b, c), m[5] !== n || m[6] !== p || m[7] !== q ? (k = () => {
                    if (!p) return;
                    let a = q.watch(a => {
                        let {
                            get: b
                        } = a, c = !0 === b(g.b);
                        (0, i.ec)(q, n, c)
                    });
                    return () => {
                        a(), (0, i.ec)(q, n, !1)
                    }
                }, l = [n, p, q], m[5] = n, m[6] = p, m[7] = q, m[8] = k, m[9] = l) : (k = m[8], l = m[9]), (0, f.useEffect)(k, l), null
            }
        })
    }),
    fr5e: (function(a, b, c) {
        c.d(b, {
            a: () => K
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("iRMi"),
            g = c("D99L"),
            h = c("D015"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("oyxz"),
            l = c("TDcV"),
            m = c("vF5L"),
            n = c("EFj1"),
            o = c("SGsN"),
            p = c("yGJW"),
            q = c("OWtl"),
            r = c("aepO"),
            s = c("bIvi"),
            t = c("CKur"),
            u = c("Vywf"),
            v = c("dQRk"),
            w = c("jfiJ"),
            x = c("FGJH"),
            y = c("Vcrm"),
            z = c("OCK3"),
            A = c("dhxJ"),
            B = c("lsky"),
            C = c("rKAs"),
            D = c("lAQI"),
            E = c("rn0J"),
            F = c("XpUB"),
            G = c("G6mJ"),
            H = c("VB5Q"),
            I = c("VTN2");
        let J = D.J(D.L(), D.Q([D.L(), D.z(!0)]));

        function K(a) {
            let b, c, D, K, M, N, O = (0, e.c)(28),
                {
                    conversationId: P,
                    turns: Q,
                    loadHistory: R,
                    renderMode: S,
                    paragenEnabled: T,
                    enabled: U,
                    canCopy: V,
                    priority: W
                } = a,
                X = void 0 === S ? "conversation" : S,
                Y = void 0 !== T && T,
                Z = void 0 === U || U,
                $ = void 0 === V || V,
                _ = void 0 === W ? "fallback" : W,
                aa = (0, i.y)(q.a),
                ab = (0, j.useRef)(null);
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => () => ab.current?.abort(), O[0] = b) : b = O[0], O[1] !== $ || O[2] !== P || O[3] !== Z || O[4] !== R || O[5] !== Y || O[6] !== X ? (c = [P, Z, $, R, X, Y], O[1] = $, O[2] = P, O[3] = Z, O[4] = R, O[5] = Y, O[6] = X, O[7] = c) : c = O[7], (0, j.useEffect)(b, c), O[8] !== $ || O[9] !== P || O[10] !== Y || O[11] !== X || O[12] !== aa || O[13] !== Q ? (D = () => {
                let a = aa.get(v.j, P),
                    b = aa.query.getData(t.chatGptConversationQueryById$, a),
                    c = b?.conversation_origin ?? aa.get(v.y, P);
                if (!$ || "tpp" === c || "flora" === c) return null;
                let d = aa.get(v.N, P),
                    e = Y && "conversation" === X ? aa.get(y.a, P)?.promptMessageId : void 0,
                    f = function(a) {
                        for (let {
                                turn: b
                            }
                            of a.toReversed())
                            for (let a of b.items.toReversed()) {
                                if ("assistant-message" !== a.type) continue;
                                let b = null,
                                    c = 0;
                                if ((0, B.h)((0, F.a)(a.content, C.b), d => {
                                        if ("codexDirective" === d.type && d.name === C.a) {
                                            let c = J.safeParse(d.attributes);
                                            if (!c.success) return;
                                            let e = (0, G.a)(c.data, a.contentReferences),
                                                f = I.d.safeParse(e?.reference);
                                            if (null == e || !f.success || (null == c.data.is_streaming ? !a.completed && (a.contentReferenceMessageStatuses?.[e.index] ?? "in_progress") === "in_progress" : "true" === c.data.is_streaming)) return;
                                            let g = a.contentReferenceMessageIds?.[e.index];
                                            b = {
                                                content: (0, H.a)(f.data.data),
                                                messageId: g ?? a.messageId,
                                                codeBlockIndex: null == g ? e.index : a.contentReferenceMessageIds?.slice(0, e.index).filter(a => a === g).length ?? 0
                                            };
                                            return
                                        }
                                        "code" !== d.type || (null == ("indented" === d.codeBlockStyle ? null : d.raw.split("\n").reduce(E.a, null)) && (b = {
                                            content: a.codeBlocks?.[String(c)]?.content ?? d.text,
                                            codeBlockIndex: c,
                                            messageId: a.messageId
                                        }), c += 1)
                                    }), null != b) return b
                            }
                        return null
                    }(Q ?? (0, u.b)({
                        conversation: b,
                        threadMapping: d,
                        threadCurrentNode: e ?? aa.get(v.C, P),
                        conversationOrigin: c,
                        isStreaming: (0, v.Db)(aa.get(v.cb, P)),
                        mode: X,
                        moderationDisclaimersByMessageId: aa.get(v.O, P),
                        pendingSubmission: null
                    }).renderedTurns);
                if (f?.messageId == null) return {
                    serverId: a,
                    comparisonPromptMessageId: e,
                    content: f?.content
                };
                let g = {
                        conversationId: P,
                        messageId: f.messageId,
                        codeBlockIndex: f.codeBlockIndex
                    },
                    h = (0, A.a)(d?.[f.messageId]?.message?.metadata);
                return {
                    serverId: a,
                    comparisonPromptMessageId: e,
                    content: aa.get(z.b, g) ?? h?.[String(f.codeBlockIndex)]?.content ?? f.content
                }
            }, O[8] = $, O[9] = P, O[10] = Y, O[11] = X, O[12] = aa, O[13] = Q, O[14] = D) : D = O[14];
            let ac = (0, s.a)(D);
            O[15] !== aa ? (K = (a, b) => {
                let c = a => {
                    (0, p.a)(aa, g.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, h.a)(a.length),
                        productExperience: f.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, r.d)(a, void 0, () => {
                    "string" == typeof a ? c(a) : a.then(c, L)
                }).then(a => {
                    a && !b?.aborted && aa.get(o.f).success((0, d.jsx)(k.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, O[15] = aa, O[16] = K) : K = O[16];
            let ad = K;
            return O[17] !== P || O[18] !== ac || O[19] !== R || O[20] !== Y || O[21] !== X || O[22] !== aa || O[23] !== ad ? (M = () => {
                if (ab.current?.signal.aborted === !1) return;
                let a = ac();
                if (null == a) return;
                if (null != a.content) return void ad(a.content);
                let {
                    serverId: b,
                    comparisonPromptMessageId: c
                } = a;
                if (!R || aa.get(v.B, P) || null == b || aa.get(x.c, b)?.complete !== !1) return;
                let d = new AbortController;
                ab.current = d;
                let e = aa.get(l.a),
                    f = aa.get(v.C, P),
                    g = aa.get(m.e).copyLastCodeBlock,
                    h = aa.watch(a => {
                        let {
                            get: b
                        } = a;
                        (b(l.a) !== e || b(v.C, P) !== f || Y && "conversation" === X && b(y.a, P)?.promptMessageId !== c || b(m.e).copyLastCodeBlock !== g) && d.abort()
                    });
                ad((async () => {
                    await (0, w.a)(aa, b, d.signal), d.signal.throwIfAborted();
                    let a = ac()?.content;
                    if (null == a) throw Error("No complete code block in this conversation");
                    return a
                })(), d.signal).finally(() => {
                    h(), ab.current === d && (ab.current = null)
                })
            }, O[17] = P, O[18] = ac, O[19] = R, O[20] = Y, O[21] = X, O[22] = aa, O[23] = ad, O[24] = M) : M = O[24], O[25] !== Z || O[26] !== _ ? (N = {
                enabled: Z,
                priority: _
            }, O[25] = Z, O[26] = _, O[27] = N) : N = O[27], (0, n.a)("copyLastCodeBlock", M, N), null
        }

        function L() {}
    }),
    a4V1: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl"),
            f = c("OMIV"),
            g = c("dQRk"),
            h = c("ZniH");
        let i = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(g.N, a), e = c(g.C, a);
                return null == d || null == e ? null : (0, h.a)({
                    mapping: d,
                    current_node: e
                }, c(g.O, a))?.text ?? null
            }),
            j = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b;
                return null == a || c(f.e, "2163293173") && !c(g.K, a) ? null : c(i, a) || null
            });
        c.d(b, {}, {
            a: i,
            b: j
        })
    }),
    wnpN: (function(a, b, c) {
        var d = c("FC5L"),
            e = c("OMIV"),
            f = c("XtQP"),
            g = c("dQRk"),
            h = c("a4V1");
        let i = (0, d.a)({
            conversationIds: (a, b) => [b],
            status: (a, b) => {
                let {
                    get: c
                } = a, d = c(g.w, b);
                return {
                    pending: (0, g.Db)(c(g.cb, b)),
                    completed: null == d || "completed" === d.result,
                    completionId: c(e.e, "2163293173") ? JSON.stringify([b, d?.requestId, c(g.C, b)]) : void 0,
                    unread: c(g.K, b)
                }
            },
            preview: (a, b) => {
                let {
                    get: c
                } = a;
                return c(h.a, b)
            },
            title: (a, b) => {
                let {
                    get: c
                } = a;
                return c(g.gb, b) || null
            },
            dismiss: (a, b) => {
                (0, g.Zb)(a, b, !1), (0, f.b)(a, b).catch(() => {})
            }
        });
        c.d(b, {}, {
            a: i
        })
    }),
    Hh7n: (function(a, b, c) {
        var d = c("X6Vn"),
            e = c("pdPj"),
            f = c("iHfE");
        c.d(b, {}, {
            a: async function(a) {
                let {
                    onSaved: b
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, g = a.get(f.b);
                if (null == g || !a.get(e.a)) return;
                let {
                    ReferenceImageFormDialog: h
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(58478)]).then(c.bind(c, "xZAj"));
                a.get(e.a) && a.get(f.b) === g && (0, d.f)(a, h, {
                    referenceImagesAccountId: g,
                    onSaved: b
                })
            },
            b: async function(a, b) {
                let {
                    onClose: g
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, h = a.get(f.b);
                if (null == h || !a.get(e.a)) return;
                let {
                    ReferenceImageManageDialog: i
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(609532)]).then(c.bind(c, "LUIA"));
                a.get(e.a) && a.get(f.b) === h && (0, d.f)(a, i, {
                    onClose: g,
                    referenceImage: b,
                    referenceImagesAccountId: h
                })
            },
            c: async function(a, b) {
                let g = a.get(f.b);
                if (null == g || !a.get(e.a)) return;
                let {
                    ReferenceImageSuggestionDialog: h
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(116725)]).then(c.bind(c, "RrZF"));
                a.get(e.a) && a.get(f.b) === g && (0, d.f)(a, h, {
                    ...b,
                    referenceImagesAccountId: g
                })
            }
        })
    }),
    vpdG: (function(a, b, c) {
        var d = c("QosV"),
            e = c("HVBu"),
            f = c.n(e),
            g = c("Q840"),
            h = c("KvQL"),
            i = c("zd8w"),
            j = c("Gdjn"),
            k = c("xqnZ"),
            l = c("OWtl"),
            m = c("ADAj"),
            n = c("Ow2S"),
            o = c("fDfx"),
            p = c("dQRk");
        c.d(b, {}, {
            a: function(a) {
                let b, c, e, q, r, s, t = (0, d.c)(19);
                t[0] !== a ? (b = void 0 === a ? {} : a, t[0] = a, t[1] = b) : b = t[1];
                let {
                    composerController: u,
                    conversationId: v,
                    draftKey: w,
                    initialPrompt: x,
                    initialPromptKind: y
                } = b, z = void 0 === w ? v : w, A = (0, g.y)(l.a);
                t[2] !== v || t[3] !== z || t[4] !== x || t[5] !== y || t[6] !== A ? (c = () => f()(() => {
                    let a = null == v ? null : A.get(p.y, v),
                        b = (0, k.e)(x ?? (null == z ? "" : A.get(n.v, z)), {
                            addInitialContentToHistory: null == x && null != z,
                            defaultTextKind: y ?? (null == x && null != z || (0, j.b)(x ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, m.b)(A.get, h.yf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== a && "flora" !== a,
                                variant: "tpp" !== a && "flora" !== a ? "chatgpt" : void 0
                            }
                        });
                    return null == x && null != v && "string" == typeof z && null != (0, o.k)(A, z) && "tpp" !== a && "flora" !== a && (0, n.X)(A, v, b.getChatGptPrompt().systemHints), b
                }), t[2] = v, t[3] = z, t[4] = x, t[5] = y, t[6] = A, t[7] = c) : c = t[7];
                let [B] = (0, i.useState)(c);
                t[8] !== B || t[9] !== u ? (e = u ?? B(), t[8] = B, t[9] = u, t[10] = e) : e = t[10];
                let C = e,
                    D = (0, i.useRef)(null);
                t[11] !== C || t[12] !== z || t[13] !== A ? (q = () => {
                    if (null == z) return;
                    let a = A.get(n.v, z);
                    return null != D.current && D.current !== a && C.restoreDraft(a), () => {
                        D.current = A.get(n.v, z)
                    }
                }, r = [C, z, A], t[11] = C, t[12] = z, t[13] = A, t[14] = q, t[15] = r) : (q = t[14], r = t[15]), (0, i.useLayoutEffect)(q, r), t[16] !== C || t[17] !== u ? (s = () => {
                    null != u || C.view.isDestroyed || C.destroy()
                }, t[16] = C, t[17] = u, t[18] = s) : s = t[18];
                let E = s;
                return (0, k.f)(E, C), C
            }
        })
    }),
    xD3Z: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("Q840"),
            h = c("Qgfj"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("QcW8"),
            l = c("Sm6l"),
            m = c("rmk3"),
            n = c("bf6R"),
            o = c("tSEg"),
            p = c("hZax"),
            q = c("dt6g"),
            r = c("WwnD");

        function s(a) {
            let b, c, g, k, o, q, r, s, u, v, w = (0, e.c)(31),
                {
                    contextMenuTrigger: x,
                    isCompact: y,
                    isDragging: z,
                    items: A,
                    open: B,
                    onMinimize: C,
                    onOpenChange: D
                } = a,
                E = (0, p.f)("2163293173"),
                F = (0, i.a)();
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, h.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), w[0] = b) : b = w[0], w[1] !== C ? (c = {
                id: "minimize",
                icon: n.nf,
                message: b,
                onSelect: C,
                selectAfterClose: !0
            }, w[1] = C, w[2] = c) : c = w[2], w[3] !== A || w[4] !== c ? (g = [...A, c], w[3] = A, w[4] = c, w[5] = g) : g = w[5];
            let G = g;
            if (null != x) {
                let a, b;
                return w[6] !== x ? (a = (0, d.jsx)("div", {
                    className: "contents",
                    children: x
                }), w[6] = x, w[7] = a) : a = w[7], w[8] !== G || w[9] !== a ? (b = (0, d.jsx)(m.a, {
                    disableNative: !0,
                    items: G,
                    children: a
                }), w[8] = G, w[9] = a, w[10] = b) : b = w[10], b
            }
            if (E) {
                let a;
                return w[11] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(d.Fragment, {}), w[11] = a) : a = w[11], a
            }
            let H = B || z;
            w[12] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(j.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move \xb7 Click for options"
            }), w[12] = k) : k = w[12], w[13] !== F ? (o = F.formatMessage({
                id: "quickChat.moreOptions",
                defaultMessage: "Chat options"
            }), w[13] = F, w[14] = o) : o = w[14];
            let I = y ? "composer" : "toolbar";
            return w[15] !== D || w[16] !== B ? (q = a => {
                0 !== a.button || a.ctrlKey || !(a.detail > 0) || a.defaultPrevented || D?.(!B)
            }, w[15] = D, w[16] = B, w[17] = q) : q = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, d.jsx)(n.id, {}), w[18] = r) : r = w[18], w[19] !== o || w[20] !== I || w[21] !== q ? (s = (0, d.jsx)(l.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": o,
                color: "ghostSecondaryPillBackground",
                "data-quick-chat-drag-handle": !0,
                size: I,
                uniform: !0,
                onPointerDown: t,
                onClick: q,
                children: r
            }), w[19] = o, w[20] = I, w[21] = q, w[22] = s) : s = w[22], w[23] !== s || w[24] !== H ? (u = (0, d.jsx)(f.a, {
                disabled: H,
                content: k,
                children: s
            }), w[23] = s, w[24] = H, w[25] = u) : u = w[25], w[26] !== G || w[27] !== D || w[28] !== B || w[29] !== u ? (v = (0, d.jsx)(m.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: B,
                onOpenChange: D,
                items: G,
                children: u
            }), w[26] = G, w[27] = D, w[28] = B, w[29] = u, w[30] = v) : v = w[30], v
        }

        function t(a) {
            0 !== a.button || a.ctrlKey || a.preventDefault()
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f = (0, e.c)(6),
                    i = (0, g.y)(o.a),
                    j = (0, g.z)(k.n);
                f[0] !== j || f[1] !== i ? (b = j ? [{
                    id: "full-view",
                    icon: n.P,
                    message: (0, h.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, q.a)(i, "context_menu", () => (0, r.b)(i, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], f[0] = j, f[1] = i, f[2] = b) : b = f[2];
                let l = b;
                return f[3] !== l || f[4] !== a ? (c = (0, d.jsx)(s, {
                    ...a,
                    items: l
                }), f[3] = l, f[4] = a, f[5] = c) : c = f[5], c
            },
            b: s
        })
    }),
    SUhA: (function(a, b, c) {
        var d = c("QosV"),
            e = c("irkb"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("tl5a"),
            i = c("CBsD"),
            j = c("kfGJ"),
            k = c("gTKF"),
            l = c("zHp1");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p, q, r, s = (0, d.c)(38),
                    {
                        src: t,
                        conversationId: u,
                        hostId: v,
                        imageAssetResolver: w,
                        shouldLoadFileDataUrl: x
                    } = a,
                    y = (0, e.c)(),
                    z = (0, f.x)(h.H, u),
                    A = v ?? z ?? j.a,
                    B = (0, j.c)(A);
                s[0] !== u ? (b = null == u ? null : {
                    kind: "app-server",
                    conversationId: u
                }, s[0] = u, s[1] = b) : b = s[1];
                let C = (0, f.x)(k.threadExecutorTargetByThread$, b),
                    D = C?.hostId === A ? C.environmentId : void 0,
                    [E, F] = (0, g.useState)(null);
                s[2] !== t ? (c = t.trim(), s[2] = t, s[3] = c) : c = s[3];
                let G = c.length > 0,
                    H = G && (0, l.i)(t) ? t : "",
                    {
                        dataUrl: I,
                        src: J,
                        isLoading: K,
                        isError: L,
                        loadSource: M,
                        loadTiming: N,
                        imageCacheHit: O,
                        isShowingCachedImage: P,
                        imageCheck: Q,
                        refetch: R,
                        deleted: S
                    } = (0, l.m)(H, w);
                s[4] !== G || s[5] !== B.id || s[6] !== B.kind || s[7] !== A || s[8] !== t ? (m = G ? (0, i.b)(t) : null, "local" === B.kind && B.id, n = null, s[4] = G, s[5] = B.id, s[6] = B.kind, s[7] = A, s[8] = t, s[9] = m, s[10] = n) : (m = s[9], n = s[10]);
                let T = n,
                    U = E?.src === t && E.environmentId === D ? E : null,
                    V = U?.dataUrl ?? null,
                    W = G ? J ?? T ?? (null != m || H ? V : t) : null;
                s[11] !== m || s[12] !== u || s[13] !== T || s[14] !== D || s[15] !== A || s[16] !== y || s[17] !== x || s[18] !== t ? (o = () => {
                    if (null == m || null != T && !x) return;
                    let a = !1;
                    return F({
                        src: t,
                        dataUrl: null,
                        environmentId: D,
                        isLoading: !0
                    }), (0, i.e)(m, A, y, void 0, u, D).then(b => {
                        a || F({
                            src: t,
                            dataUrl: b,
                            environmentId: D,
                            isLoading: !1
                        })
                    }), () => {
                        a = !0
                    }
                }, p = [m, u, T, D, A, y, x, t], s[11] = m, s[12] = u, s[13] = T, s[14] = D, s[15] = A, s[16] = y, s[17] = x, s[18] = t, s[19] = o, s[20] = p) : (o = s[19], p = s[20]), (0, g.useEffect)(o, p), s[21] !== I || s[22] !== V || s[23] !== t ? (q = I ?? V ?? (t.startsWith("data:image/") ? t : null), s[21] = I, s[22] = V, s[23] = t, s[24] = q) : q = s[24];
                let X = I ?? V ?? W,
                    Y = K || null != m && null == T && (null == U || U.isLoading),
                    Z = !!H && L;
                return s[25] !== S || s[26] !== O || s[27] !== Q || s[28] !== P || s[29] !== M || s[30] !== N || s[31] !== W || s[32] !== R || s[33] !== q || s[34] !== X || s[35] !== Y || s[36] !== Z ? (r = {
                    dataUrl: q,
                    previewSrc: W,
                    downloadSrc: X,
                    isLoading: Y,
                    isError: Z,
                    loadSource: M,
                    loadTiming: N,
                    imageCacheHit: O,
                    isShowingCachedImage: P,
                    imageCheck: Q,
                    refetch: R,
                    deleted: S
                }, s[25] = S, s[26] = O, s[27] = Q, s[28] = P, s[29] = M, s[30] = N, s[31] = W, s[32] = R, s[33] = q, s[34] = X, s[35] = Y, s[36] = Z, s[37] = r) : r = s[37], r
            }
        })
    }),
    eYeG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Qgfj"),
            i = c("aqd9"),
            j = c("POjP");

        function k() {
            return (0, j.a)(0)
        }

        function l(a) {
            let b, c, g, i = (0, e.c)(8),
                {
                    placement: j,
                    progress: k,
                    ref: l
                } = a,
                m = "top" === (void 0 === j ? "bottom" : j) ? "top-3.5" : "bottom-3.5";
            i[0] !== m ? (b = (0, f.b)("pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none", m), i[0] = m, i[1] = b) : b = i[1];
            let n = k / 100;
            return i[2] !== n ? (c = (0, d.jsx)(h.c, {
                value: n,
                style: "percent"
            }), i[2] = n, i[3] = c) : c = i[3], i[4] !== l || i[5] !== b || i[6] !== c ? (g = (0, d.jsx)("span", {
                ref: l,
                className: b,
                children: c
            }), i[4] = l, i[5] = b, i[6] = c, i[7] = g) : g = i[7], g
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, h = (0, e.c)(7),
                    {
                        generationStartedAtMs: m,
                        isActive: n,
                        placement: o
                    } = a,
                    p = void 0 === n || n,
                    [q, r] = (0, g.useState)(k),
                    s = (0, g.useRef)(null);
                return h[0] !== m || h[1] !== p ? (b = () => {
                    let a, b = s.current;
                    if (null == b) return;
                    let c = b.ownerDocument,
                        d = !1,
                        e = () => {
                            let b = (0, j.a)(Date.now() - m);
                            return r(b), 99 === b && (clearInterval(a), a = void 0), b
                        },
                        f = () => {
                            clearInterval(a), a = void 0, d && !c.hidden && 99 > e() && (a = setInterval(e, 500))
                        };
                    if (e(), !p) return;
                    c.addEventListener("visibilitychange", f);
                    let g = (0, i.a)(b, a => {
                        d = a, f()
                    });
                    return () => {
                        g?.(), c.removeEventListener("visibilitychange", f), clearInterval(a)
                    }
                }, c = [m, p], h[0] = m, h[1] = p, h[2] = b, h[3] = c) : (b = h[2], c = h[3]), (0, g.useLayoutEffect)(b, c), h[4] !== o || h[5] !== q ? (f = (0, d.jsx)(l, {
                    ref: s,
                    placement: o,
                    progress: q
                }), h[4] = o, h[5] = q, h[6] = f) : f = h[6], f
            },
            b: l
        })
    }),
    POjP: (function(a, b, c) {
        let d = [
            [0, 3],
            [.1, 25],
            [.55, 58],
            [.85, 88],
            [1, 90]
        ];
        c.d(b, {}, {
            a: function(a) {
                let b = Math.max(0, a / 45e3);
                for (let a = 1; a < d.length; a += 1) {
                    let c = d[a - 1],
                        e = d[a];
                    if (b <= e[0]) {
                        let a = (b - c[0]) / (e[0] - c[0]);
                        return Math.floor(c[1] + a * (e[1] - c[1]))
                    }
                }
                return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (b - 1)))))
            }
        })
    }),
    ghCJ: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("aqd9"),
            j = c("T1PX"),
            k = c("a6Zv"),
            l = c("eYeG");
        let m = {
            "image-preview": {
                spacing: 22,
                radius: 2
            },
            playground: {
                spacing: 14,
                radius: 1.5
            },
            thumbnail: {
                spacing: 6,
                radius: .75
            }
        };

        function n(a) {
            let b, c, g, i, j, k, m = (0, e.c)(27),
                {
                    ariaLabel: n,
                    background: p,
                    generationStartedAtMs: q,
                    isAnimating: r,
                    presentation: s,
                    previewSrc: t,
                    progressPlacement: u,
                    ref: v
                } = a,
                w = void 0 === r || r,
                x = void 0 === s ? "default" : s,
                y = (0, h.a)(),
                z = "fill" === x || "image-preview" === x,
                A = x;
            "single" === A ? A = "playground" : "fill" === A && (A = "default"), m[0] !== n || m[1] !== y ? (b = n ?? y.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image..."
            }), m[0] = n, m[1] = y, m[2] = b) : b = m[2];
            let B = null != t ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                C = null == t && "surface" === (void 0 === p ? "surface" : p) && ("single" === x ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            m[3] !== z || m[4] !== x || m[5] !== B || m[6] !== C ? (c = (0, f.b)("overflow-clip", B, C, z ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === x ? "rounded-lg" : "rounded-2xl", "single" === x ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), m[3] = z, m[4] = x, m[5] = B, m[6] = C, m[7] = c) : c = m[7], m[8] !== x || m[9] !== t ? (g = null != t ? (0, d.jsx)("img", {
                alt: "",
                className: (0, f.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === x ? "blur-md" : "scale-125 blur-3xl"),
                src: t,
                referrerPolicy: "no-referrer"
            }) : null, m[8] = x, m[9] = t, m[10] = g) : g = m[10];
            let D = null != t;
            return m[11] !== A || m[12] !== w || m[13] !== D ? (i = (0, d.jsx)(o, {
                isAnimating: w,
                overImage: D,
                presentation: A
            }), m[11] = A, m[12] = w, m[13] = D, m[14] = i) : i = m[14], m[15] !== z || m[16] !== q || m[17] !== w || m[18] !== u ? (j = null != q ? (0, d.jsx)(l.a, {
                generationStartedAtMs: q,
                isActive: w,
                placement: u ?? (z ? "top" : "bottom")
            }, q) : null, m[15] = z, m[16] = q, m[17] = w, m[18] = u, m[19] = j) : j = m[19], m[20] !== v || m[21] !== i || m[22] !== j || m[23] !== b || m[24] !== c || m[25] !== g ? (k = (0, d.jsxs)("div", {
                ref: v,
                "aria-busy": !0,
                "aria-label": b,
                className: c,
                children: [g, i, j]
            }), m[20] = v, m[21] = i, m[22] = j, m[23] = b, m[24] = c, m[25] = g, m[26] = k) : k = m[26], k
        }

        function o(a) {
            let b, c, h, l, n, o = (0, e.c)(17),
                {
                    isAnimating: t,
                    overImage: u,
                    presentation: v
                } = a,
                w = (0, j.a)(),
                x = (0, k.a)(),
                y = (0, g.useRef)(null),
                z = (0, g.useRef)(null);
            o[0] !== t || o[1] !== x || o[2] !== v || o[3] !== w ? (b = () => {
                if (!t) return;
                let a = y.current,
                    b = z.current,
                    c = b?.getContext("2d");
                if (null == a || null == b || null == c) return;
                let d = 2 * Math.PI,
                    e = getComputedStyle(a).color || (x ? "white" : "black"),
                    f = (a, b) => a + (w ? .5 : Math.random()) * (b - a),
                    g = a => 1.2 * a * f(1, 1.35),
                    h = {
                        durations: {
                            offsetX1: g(4500),
                            offsetY1: g(6330),
                            offsetX2: g(5600),
                            offsetY2: g(5750),
                            fieldSize1: g(3600),
                            fieldSize2: g(2400)
                        },
                        phases: {
                            offsetX1: f(0, 1),
                            offsetY1: f(0, 1),
                            offsetX2: f(0, 1),
                            offsetY2: f(0, 1),
                            fieldSize1: f(0, 1),
                            fieldSize2: f(0, 1)
                        },
                        bounds: {
                            x1Start: f(.1, .32),
                            x1End: f(.68, .9),
                            y1Start: f(.1, .32),
                            y1End: f(.68, .9),
                            x2Start: f(.68, .9),
                            x2End: f(.1, .32),
                            y2Start: f(.68, .9),
                            y2End: f(.1, .32)
                        },
                        fieldSizeRange: {
                            firstStart: f(.42, .52),
                            firstEnd: f(.62, .75),
                            secondStart: f(.5, .62),
                            secondEnd: f(.74, .9)
                        }
                    },
                    j = null,
                    k = 0,
                    l = null,
                    n = !0,
                    o = null,
                    u = !1,
                    A = !1,
                    B = b.ownerDocument,
                    C = f => {
                        var g, i, t, u, x, y, z, A, B, D, E, F;
                        if (!w && 0 !== k && f - k < 33.333333333333336) {
                            j = requestAnimationFrame(C);
                            return
                        }
                        if (k = f, null == o && (o = f), (n || null == l) && (() => {
                                let c = "image-preview" === v ? {
                                        width: a.clientWidth,
                                        height: a.clientHeight
                                    } : a.getBoundingClientRect(),
                                    d = Math.max(0, Math.floor(c.width)),
                                    e = Math.max(0, Math.floor(c.height));
                                if (0 === d || 0 === e) {
                                    l = null, n = !1;
                                    return
                                }
                                let f = Math.max(1, window.devicePixelRatio || 1),
                                    g = Math.floor(d * f),
                                    h = Math.floor(e * f);
                                (b.width !== g || b.height !== h) && (b.width = g, b.height = h);
                                let i = "default" === v ? Math.max(1, 12 / f) : m[v].spacing,
                                    j = Math.max(1, Math.floor(d / i)),
                                    k = Math.max(1, Math.floor(e / i)),
                                    o = (d - (j - 1) * i) * .5,
                                    p = (e - (k - 1) * i) * .5,
                                    q = new Float32Array(j),
                                    r = new Float32Array(k),
                                    s = new Float32Array(j),
                                    t = new Float32Array(k);
                                for (let a = 0; a < j; a += 1) q[a] = o + a * i, s[a] = 1 === j ? .5 : a / (j - 1);
                                for (let a = 0; a < k; a += 1) r[a] = p + a * i, t[a] = 1 === k ? .5 : a / (k - 1);
                                l = {
                                    width: d,
                                    height: e,
                                    dpr: f,
                                    spacing: i,
                                    xPositions: q,
                                    yPositions: r,
                                    xNormals: s,
                                    yNormals: t
                                }, n = !1
                            })(), null == l) {
                            j = null;
                            return
                        }
                        let G = w ? 0 : f - o,
                            H = (a, b) => {
                                let c;
                                return (c = (G / a + b) % 1) <= .5 ? 2 * c : 2 - 2 * c
                            },
                            I = (g = h.bounds.x1Start, i = h.bounds.x1End, g + (i - g) * s(H(h.durations.offsetX1, h.phases.offsetX1))),
                            J = (t = h.bounds.y1Start, u = h.bounds.y1End, t + (u - t) * r(H(h.durations.offsetY1, h.phases.offsetY1))),
                            K = (x = h.bounds.x2Start, y = h.bounds.x2End, x + (y - x) * s(H(h.durations.offsetX2, h.phases.offsetX2))),
                            L = (z = h.bounds.y2Start, A = h.bounds.y2End, z + (A - z) * r(H(h.durations.offsetY2, h.phases.offsetY2))),
                            M = .78 * (B = h.fieldSizeRange.firstStart, D = h.fieldSizeRange.firstEnd, B + (D - B) * r(H(h.durations.fieldSize1, h.phases.fieldSize1))),
                            N = .78 * (E = h.fieldSizeRange.secondStart, F = h.fieldSizeRange.secondEnd, E + (F - E) * r(H(h.durations.fieldSize2, h.phases.fieldSize2)));
                        c.save(), c.setTransform(l.dpr, 0, 0, l.dpr, 0, 0), c.clearRect(0, 0, l.width, l.height), c.fillStyle = e;
                        let O = "default" === v ? Math.max(.55, .5 * l.spacing * .16) : m[v].radius;
                        for (let a = 0; a < l.yPositions.length; a += 1) {
                            let b = l.yPositions[a],
                                e = l.yNormals[a];
                            for (let a = 0; a < l.xPositions.length; a += 1) {
                                let f = l.xPositions[a],
                                    g = l.xNormals[a],
                                    h = Math.pow(p((1 - q(0, M, Math.hypot(g - I, e - J))) * 1.2 + (1 - q(0, N, Math.hypot(g - K, e - L))) * .82), 1.18);
                                h <= .03 || (c.globalAlpha = h, c.beginPath(), c.moveTo(f + O, b), c.arc(f, b, O, 0, d), c.fill())
                            }
                        }
                        c.restore(), j = w ? null : requestAnimationFrame(C)
                    },
                    D = new ResizeObserver(() => {
                        n = !0, u && null == j && (j = requestAnimationFrame(C))
                    });
                D.observe(a);
                let E = () => {
                        (u = A && "hidden" !== B.visibilityState) ? null == j && (j = requestAnimationFrame(C)): null != j && (cancelAnimationFrame(j), j = null)
                    },
                    F = (0, i.a)(a, a => {
                        A = a, E()
                    });
                return B.addEventListener("visibilitychange", E), () => {
                    F?.(), B.removeEventListener("visibilitychange", E), null != j && cancelAnimationFrame(j), D.disconnect()
                }
            }, o[0] = t, o[1] = x, o[2] = v, o[3] = w, o[4] = b) : b = o[4], o[5] !== t || o[6] !== x || o[7] !== u || o[8] !== v || o[9] !== w ? (c = [t, x, u, v, w], o[5] = t, o[6] = x, o[7] = u, o[8] = v, o[9] = w, o[10] = c) : c = o[10], (0, g.useEffect)(b, c);
            let A = (u || "image-preview" === v) && "overImage-KmHrEc",
                B = (!t || w) && "reducedMotion-ttnr0y";
            return o[11] !== A || o[12] !== B ? (h = (0, f.b)("dots-avXrIV", A, B), o[11] = A, o[12] = B, o[13] = h) : h = o[13], o[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, d.jsx)("canvas", {
                ref: z,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), o[14] = l) : l = o[14], o[15] !== h ? (n = (0, d.jsx)("div", {
                ref: y,
                className: h,
                children: l
            }), o[15] = h, o[16] = n) : n = o[16], n
        }

        function p(a) {
            return Math.min(1, Math.max(0, a))
        }

        function q(a, b, c) {
            let d = p((c - a) / (b - a));
            return d * d * (3 - 2 * d)
        }

        function r(a) {
            return a * a * (3 - 2 * a)
        }

        function s(a) {
            return a < .5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2
        }
    }),
    JEWd: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Sm6l"),
            i = c("IxWh"),
            j = c("HOLv"),
            k = c("bIvi"),
            l = c("mxRC"),
            m = c("GPpz");
        let n = {
            form: {
                color: "secondarySurface",
                size: "actionSm"
            },
            gallery: {
                color: "outlineSurface",
                size: "dialog"
            },
            compact: {
                color: "ghost",
                size: "compact"
            }
        };
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r, s, t, u, v, w, x = (0, e.c)(38),
                    {
                        ariaInvalid: y,
                        ariaLabel: z,
                        backLabel: A,
                        children: B,
                        forwardLabel: C,
                        header: D,
                        layout: E,
                        role: F,
                        shouldUseReducedMotion: G
                    } = a,
                    H = void 0 === E ? "form" : E,
                    I = void 0 === F ? "group" : F;
                x[0] !== B ? (b = g.Children.count(B), x[0] = B, x[1] = b) : b = x[1];
                let J = b,
                    K = (0, g.useRef)(null),
                    [L, M] = (0, g.useState)("ltr"),
                    [N, O] = (0, g.useState)(!1),
                    [P, Q] = (0, g.useState)(!1);
                x[2] === Symbol.for("react.memo_cache_sentinel") ? (c = a => {
                    let b = "rtl" === getComputedStyle(a).direction ? "rtl" : "ltr";
                    M(b);
                    let {
                        maximum: c,
                        minimum: d
                    } = (0, i.a)(a, b);
                    "rtl" === b ? (O(a.scrollLeft < c - 1), Q(a.scrollLeft > d + 1)) : (O(a.scrollLeft > d + 1), Q(a.scrollLeft < c - 1))
                }, x[2] = c) : c = x[2];
                let R = (0, k.a)(c),
                    S = a => {
                        if (K.current = a, null == a || 0 === J || (R(a), "u" < typeof ResizeObserver)) return;
                        let b = () => R(a),
                            c = new ResizeObserver(b),
                            d = new MutationObserver(b);
                        return d.observe(a, {
                            childList: !0
                        }), c.observe(a), null != a.firstElementChild && c.observe(a.firstElementChild), null != a.lastElementChild && c.observe(a.lastElementChild), () => {
                            c.disconnect(), d.disconnect(), K.current = null
                        }
                    },
                    T = "form" === H && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                    U = "gallery" === H && "gap-2";
                x[3] !== T || x[4] !== U ? (o = (0, f.b)("flex items-center", T, U), x[3] = T, x[4] = U, x[5] = o) : o = x[5];
                let V = [-1, 1].map(a => {
                    let b = -1 === a ? N : P,
                        c = -1 === a ? A : C;
                    return (0, d.jsx)(h.a, {
                        className: (0, f.b)("pointer-events-auto", "form" === H && !b && "invisible"),
                        "aria-label": c,
                        ...n[H],
                        disabled: !b,
                        onClick: () => {
                            let b;
                            null != (b = K.current) && b.scrollTo({
                                left: (0, i.b)(b, a, "rtl" === getComputedStyle(b).direction ? "rtl" : "ltr"),
                                behavior: G ? "instant" : "smooth"
                            })
                        },
                        radius: "compact" === H ? void 0 : "full",
                        title: c,
                        uniform: !0,
                        children: (0, d.jsx)(j.a, {
                            className: a === ("rtl" === L ? 1 : -1) ? "rotate-180" : void 0,
                            asset: "gallery" === H ? l.a : m.a
                        })
                    }, a)
                });
                x[6] !== o || x[7] !== V ? (p = (0, d.jsx)("div", {
                    className: o,
                    children: V
                }), x[6] = o, x[7] = V, x[8] = p) : p = x[8];
                let W = p,
                    X = "gallery" === H && "gap-4",
                    Y = "compact" === H && "gap-2",
                    Z = "form" === H && "gap-1.5";
                x[9] !== X || x[10] !== Y || x[11] !== Z ? (q = (0, f.b)("flex min-w-0 flex-col", X, Y, Z), x[9] = X, x[10] = Y, x[11] = Z, x[12] = q) : q = x[12], x[13] !== D || x[14] !== H || x[15] !== W ? (r = null != D || "form" !== H ? (0, d.jsxs)("div", {
                    className: (0, f.b)("flex min-w-0 items-center", "form" === H && "gap-1 px-4 py-1.5", "compact" === H && "gap-3", "gallery" === H && "min-h-9 gap-3"),
                    children: [(0, d.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: D
                    }), "form" !== H ? W : null]
                }) : null, x[13] = D, x[14] = H, x[15] = W, x[16] = r) : r = x[16];
                let $ = "form" === H ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
                    _ = "gallery" === H && "gap-3",
                    aa = "compact" === H && "gap-2";
                x[17] !== $ || x[18] !== _ || x[19] !== aa ? (s = (0, f.b)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", $, _, aa), x[17] = $, x[18] = _, x[19] = aa, x[20] = s) : s = x[20];
                let ab = y || void 0;
                x[21] !== R ? (t = a => R(a.currentTarget), x[21] = R, x[22] = t) : t = x[22], x[23] !== z || x[24] !== B || x[25] !== I || x[26] !== S || x[27] !== s || x[28] !== ab || x[29] !== t ? (u = (0, d.jsx)("div", {
                    ref: S,
                    className: s,
                    "data-horizontal-scroll": !0,
                    role: I,
                    "aria-invalid": ab,
                    "aria-label": z,
                    onScroll: t,
                    children: B
                }), x[23] = z, x[24] = B, x[25] = I, x[26] = S, x[27] = s, x[28] = ab, x[29] = t, x[30] = u) : u = x[30];
                let ac = "form" === H ? W : null;
                return x[31] !== u || x[32] !== ac ? (v = (0, d.jsxs)("div", {
                    className: "relative min-w-0",
                    children: [u, ac]
                }), x[31] = u, x[32] = ac, x[33] = v) : v = x[33], x[34] !== q || x[35] !== r || x[36] !== v ? (w = (0, d.jsxs)("div", {
                    className: q,
                    children: [r, v]
                }), x[34] = q, x[35] = r, x[36] = v, x[37] = w) : w = x[37], w
            }
        })
    }),
    AD0n: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("bqtn"),
            h = c("bf6R");

        function i() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k = (0, e.c)(13),
                    {
                        startNewChat: l,
                        renderChatMenu: m,
                        presentation: n,
                        newChatDisabled: o,
                        onAction: p,
                        fixedActions: q
                    } = a,
                    r = void 0 === n ? "chat" : n,
                    s = void 0 !== o && o,
                    t = void 0 === p ? i : p;
                if (null != m) {
                    let a;
                    return k[0] !== q || k[1] !== s || k[2] !== t || k[3] !== r || k[4] !== m ? (a = m({
                        presentation: r,
                        newChatDisabled: s,
                        onAction: t,
                        fixedActions: q
                    }), k[0] = q, k[1] = s, k[2] = t, k[3] = r, k[4] = m, k[5] = a) : a = k[5], a
                }
                return k[6] !== t || k[7] !== l ? (b = () => {
                    t(), l()
                }, k[6] = t, k[7] = l, k[8] = b) : b = k[8], k[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(f.a, {
                    id: "floatingComposer.newChat",
                    defaultMessage: "New chat"
                }), k[9] = c) : c = k[9], k[10] !== s || k[11] !== b ? (j = (0, d.jsx)(g.c.Item, {
                    LeftIcon: h.ji,
                    disabled: s,
                    onSelect: b,
                    children: c
                }), k[10] = s, k[11] = b, k[12] = j) : j = k[12], j
            }
        })
    })
};