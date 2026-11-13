export const __rspack_esm_ids = [684598];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Bbed"),
            o = a("VTN2"),
            l = a("TUMj"),
            s = a("qviq");
        let c = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(789716), a.e(652500), a.e(877652), a.e(828911), a.e(239179)]).then(a.bind(a, "aNca"))).SitesPreviewContentReference);
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, d, u = (0, r.c)(19),
                    {
                        bind: f,
                        onBindInteraction: g,
                        reference: m,
                        isStreaming: h,
                        readOnly: p,
                        withTopMargin: _
                    } = e,
                    b = void 0 !== p && p,
                    v = (0, l.d)();
                if (null != m.data && "object" == typeof m.data && "preview_type" in m.data && "sites" === m.data.preview_type) {
                    let e;
                    return u[0] !== h || u[1] !== m ? (e = (0, n.jsx)(c, {
                        reference: m,
                        isStreaming: h
                    }), u[0] = h, u[1] = m, u[2] = e) : e = u[2], e
                }
                if (u[3] !== h || u[4] !== m || u[5] !== v?.isStreaming) {
                    i = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = o.a.safeParse(m);
                        if (!e.success) {
                            i = null;
                            break e
                        }({
                            data: t
                        } = e.data);
                        let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === h : h ?? !0)
                    }
                    u[3] = h, u[4] = m, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = i
                } else t = u[6], a = u[7], i = u[8];
                if (i !== Symbol.for("react.early_return_sentinel")) return i;
                let y = a && !0 !== t.render_immediately_during_streaming,
                    I = t.display_name ?? t.title;
                return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== g || u[13] !== b || u[14] !== y || u[15] !== I || u[16] !== v || u[17] !== _ ? (d = (0, n.jsx)(s.a, {
                    bind: f,
                    onBindInteraction: g,
                    content: t.content,
                    readOnly: b,
                    isStreaming: y,
                    title: I,
                    styleMode: t.style_mode,
                    turnContext: v,
                    withTopMargin: _
                }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = g, u[13] = b, u[14] = y, u[15] = I, u[16] = v, u[17] = _, u[18] = d) : d = u[18], d
            }
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            r = a("Bbed"),
            i = a("N55g");
        let o = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(652500), a.e(877652), a.e(635327), a.e(428767)]).then(a.bind(a, "da6p"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(i.a, {})
        });
        a.d(t, {}, {
            a: o
        })
    }),
    VlIB: (function(e, t, a) {
        var n = a("QosV"),
            r = a("zd8w");
        let i = (0, r.createContext)(null);

        function o(e, t, a) {
            return e === t || a?.sharedConversationId != null && a.sharedConversationId === t && a.conversationId === e
        }
        a.d(t, {}, {
            a: i,
            b: o,
            c: function() {
                let e, t = (0, n.c)(2),
                    a = (0, r.useContext)(i);
                return t[0] !== a ? (e = e => a?.composer?.shouldPrepareFollowUp?.() === !0 && o(a.conversationId, e, a) ? a.composer : null, t[0] = a, t[1] = e) : e = t[1], e
            }
        })
    }),
    VB5Q: (function(e, t, a) {
        var n = a("cC4N");
        a.d(t, {}, {
            a: function(e) {
                let {
                    content: t,
                    has_redundant_fences: a,
                    language: r
                } = e;
                if (!a || !r?.trim()) return t;
                let i = /^( {0,3})(`{3,}|~{3,})/.exec(t)?.[2],
                    o = t.replace(/(?:\r\n|[\r\n])$/, ""),
                    l = Math.max(o.lastIndexOf("\n"), o.lastIndexOf("\r")) + 1,
                    s = /^ {0,3}(`+|~+)[ \t]*$/.exec(o.slice(l))?.[1];
                if (null == i || null == s || s[0] !== i[0] || s.length < i.length) return t;
                let c = (0, n.a)(t).children,
                    d = 1 === c.length ? c[0] : void 0;
                return d?.type === "code" && d.lang?.toLowerCase() === r.trim().toLowerCase() ? d.value : t
            }
        })
    }),
    nD0d: (function(e, t, a) {
        a.d(t, {
            a: () => ei
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("iwt4"),
            o = a("yTnN"),
            l = a("zd8w"),
            s = a("Bbed"),
            c = a("DcH0"),
            d = a("nUGc");

        function u(e) {
            let t, a = (0, r.c)(2),
                {
                    reference: i
                } = e,
                o = (0, l.useContext)(d.a) ? i.alt ?? "••••" : i.data.value;
            return a[0] !== o ? (t = (0, n.jsx)("span", {
                className: "whitespace-nowrap tabular-nums",
                children: o
            }), a[0] = o, a[1] = t) : t = a[1], t
        }
        var f = a("jZDY"),
            g = a("HAEQ"),
            m = a("WdQN"),
            h = a("NDDl"),
            p = a("YAi8"),
            _ = a("BolX"),
            b = a("Wf1j"),
            v = a("oyxz"),
            y = a("Sm6l"),
            I = a("q5qu"),
            T = a("OWtl"),
            w = a("dQRk"),
            E = a("TUMj"),
            x = a("ldQM");

        function C(e) {
            let t, a = (0, r.c)(3),
                {
                    contentReferenceIndex: i
                } = e,
                o = (0, E.d)(),
                l = o?.contentReferenceMessageIds?.[i] ?? o?.messageId;
            return a[0] !== l || a[1] !== o ? (t = null == o || null == l || o.shouldBlockExternalEgress ? null : (0, n.jsx)(A, {
                conversationId: o.conversationId,
                messageId: l
            }), a[0] = l, a[1] = o, a[2] = t) : t = a[2], t
        }

        function A(e) {
            let t, a, i, o, l = (0, r.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, _.y)(T.a),
                u = (0, b.a)(),
                f = (0, _.x)(x.b, s),
                g = (0, _.x)(x.e, s);
            return (0, _.x)(w.$, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || g !== c ? null : (l[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions"
            }), l[0] = u, l[1] = t) : t = l[1], l[2] !== s || l[3] !== d ? (a = () => d.set(x.e, s, null), l[2] = s, l[3] = d, l[4] = a) : a = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions"
            }), l[5] = i) : i = l[5], l[6] !== t || l[7] !== a ? (o = (0, n.jsx)(I.a, {
                children: (0, n.jsx)(y.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: i
                })
            }), l[6] = t, l[7] = a, l[8] = o) : o = l[8], o)
        }
        var S = a("YgzY"),
            k = a("j8Yf"),
            N = a("ASxG"),
            j = a("VlIB"),
            P = a("LtEv"),
            R = a("Kwur"),
            O = a("EUy6"),
            M = a("AyL4"),
            G = a("WAdu"),
            F = a("tSEg"),
            L = a("WFY2");
        let H = N.object({
            type: N.literal("client_defined_widget"),
            category: N.literal("beacon_card"),
            icebreaker_card_actions: N.object({
                click: N.boolean(),
                dismiss: N.boolean()
            }).optional().catch(void 0),
            data: N.object({
                widget_type: N.literal("beacon_card"),
                display_mode: N.literal("block"),
                title: N.string().max(200).refine(e => e.trim().length > 0).nullish(),
                text: N.string().max(2e3).refine(e => e.trim().length > 0),
                button_label: N.string().max(80).refine(e => e.trim().length > 0),
                prompt: N.string().max(4e3).refine(e => e.trim().length > 0).nullish(),
                url: N.url({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(e => null != e.prompt != (null != e.url))
        });

        function D(e) {
            let t, a, i, o, s, c, d, u, f, g, m, h = (0, r.c)(42),
                {
                    contentReferenceIndex: p,
                    reference: v,
                    isStreaming: y,
                    readOnly: I
                } = e,
                T = (0, _.y)(F.a),
                w = (0, E.d)(),
                x = (0, j.c)(),
                C = (0, b.a)(),
                A = (0, l.useContext)(G.a),
                [S, k] = (0, l.useState)(!1),
                N = (0, l.useRef)(null);
            h[0] !== v ? (t = H.safeParse(v), h[0] = v, h[1] = t) : t = h[1];
            let D = t;
            h[2] !== p || h[3] !== w ? (a = (0, E.c)(w, p), h[2] = p, h[3] = w, h[4] = a) : a = h[4];
            let V = a,
                U = V?.messageId,
                q = w?.conversationId,
                z = D.success ? D.data.data.url : void 0,
                K = !0 === I || !0 === y || null == w || w.isStreaming || !0 === w.isReadOnly || w.shouldBlockExternalEgress || null == V || null != z && "restricted" === A;
            if (h[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => N.current?.abort(), h[5] = i) : i = h[5], h[6] !== q || h[7] !== K || h[8] !== T || h[9] !== U || h[10] !== z ? (o = [q, K, T, U, z], h[6] = q, h[7] = K, h[8] = T, h[9] = U, h[10] = z, h[11] = o) : o = h[11], (0, l.useLayoutEffect)(i, o), !D.success || S) return null;
            let {
                data: Q,
                icebreaker_card_actions: Y
            } = D.data, {
                title: $,
                text: X,
                button_label: J,
                prompt: Z
            } = Q;
            h[12] !== Y || h[13] !== K || h[14] !== V || h[15] !== w ? (s = function(e) {
                !K && w?.conversationId && !w.isTemporaryChat && null != V && Y?.[e] && R.Request.safePost("/widget_server_action", {
                    requestBody: {
                        action_type: "icebreaker_beacon_card_interaction",
                        conversation_id: w.conversationId,
                        message_id: V.messageId,
                        ref_id: `${V.messageId}:${V.index}`,
                        payload: {
                            action: e
                        }
                    }
                }).catch(t => {
                    L.a.warning("Icebreaker card interaction failed", {
                        safe: {
                            action: e
                        },
                        sensitive: {
                            error: t
                        }
                    })
                })
            }, h[12] = Y, h[13] = K, h[14] = V, h[15] = w, h[16] = s) : s = h[16];
            let ee = s;
            return h[17] !== C ? (c = C.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon"
            }), h[17] = C, h[18] = c) : c = h[18], h[19] !== ee ? (d = () => {
                N.current?.abort(), k(!0), ee("dismiss")
            }, h[19] = ee, h[20] = d) : d = h[20], h[21] !== c || h[22] !== d ? (u = {
                ariaLabel: c,
                onClick: d
            }, h[21] = c, h[22] = d, h[23] = u) : u = h[23], h[24] !== K || h[25] !== x || h[26] !== Z || h[27] !== ee || h[28] !== T || h[29] !== V || h[30] !== w || h[31] !== z ? (f = () => {
                if (!K && null != w && null != V) {
                    if (null != z) {
                        N.current?.abort();
                        let e = new AbortController;
                        N.current = e;
                        let t = (0, O.e)(T, {
                            type: "open_url",
                            payload: {
                                url: z,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: w,
                            sourceMessageId: V.messageId,
                            signal: e.signal
                        });
                        !1 !== t && (ee("click"), t.catch(W));
                        return
                    }
                    if (null != Z) {
                        let e = x(w.conversationId);
                        if (null != e && !e.canSubmitPrompt) return;
                        ee("click"), (null != e ? e.submitPrompt(Z, {
                            parentMessageId: V.messageId,
                            preserveDraft: !0,
                            fileUploadIds: [],
                            submissionIntent: "beacon_action"
                        }) : (0, P.submitChatGptFollowUp)(T, {
                            conversationId: w.conversationId,
                            isTemporaryChat: w.isTemporaryChat ?? !1,
                            parentMessageId: V.messageId,
                            prompt: Z
                        })).catch(B)
                    }
                }
            }, h[24] = K, h[25] = x, h[26] = Z, h[27] = ee, h[28] = T, h[29] = V, h[30] = w, h[31] = z, h[32] = f) : f = h[32], h[33] !== J || h[34] !== K || h[35] !== f ? (g = {
                label: J,
                disabled: K,
                onClick: f
            }, h[33] = J, h[34] = K, h[35] = f, h[36] = g) : g = h[36], h[37] !== g || h[38] !== u || h[39] !== X || h[40] !== $ ? (m = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(M.b, {
                    variant: "beacon",
                    title: $,
                    description: X,
                    dismissAction: u,
                    primaryAction: g
                })
            }), h[37] = g, h[38] = u, h[39] = X, h[40] = $, h[41] = m) : m = h[41], m
        }

        function B(e) {
            L.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function W(e) {
            L.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var V = a("dhxJ"),
            U = a("ZUun"),
            q = a("VB5Q");

        function z(e) {
            let t, a, i, o, s, c, d, u = (0, r.c)(33),
                {
                    contentReferenceIndex: f,
                    isStreaming: g,
                    readOnly: m,
                    reference: h,
                    renderMath: p
                } = e,
                {
                    data: b
                } = h,
                v = void 0 !== p && p,
                y = (0, E.d)(),
                I = g ?? (y?.isStreaming === !0 && (y.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                T = (0, l.useContext)(G.a),
                x = y?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== x || u[2] !== y?.contentReferenceMessageIds ? (t = null == x ? f : y?.contentReferenceMessageIds?.slice(0, f).filter(e => e === x).length, u[0] = f, u[1] = x, u[2] = y?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let C = t,
                A = y?.conversationId,
                S = x ?? y?.messageId;
            u[4] !== C || u[5] !== A || u[6] !== S ? (a = {
                conversationId: A,
                messageId: S,
                codeBlockIndex: C
            }, u[4] = C, u[5] = A, u[6] = S, u[7] = a) : a = u[7];
            let k = (0, _.x)(w.v, a);
            u[8] !== C || u[9] !== T || u[10] !== I || u[11] !== m || u[12] !== k || u[13] !== x || u[14] !== y ? (i = y && {
                ...y,
                messageId: x ?? y.messageId,
                codeBlocks: (0, V.a)({
                    code_blocks: null == k || null == C ? void 0 : {
                        [C]: k
                    }
                }) ?? (null == x || x === y.messageId ? y.codeBlocks : void 0),
                isReadOnly: m || y.isReadOnly,
                isStreaming: I,
                shouldBlockExternalEgress: y.shouldBlockExternalEgress || "restricted" === T
            }, u[8] = C, u[9] = T, u[10] = I, u[11] = m, u[12] = k, u[13] = x, u[14] = y, u[15] = i) : i = u[15], u[16] !== b ? (o = (0, q.a)(b), u[16] = b, u[17] = o) : o = u[17];
            let N = b.model_previewable ? "preview" : void 0;
            return u[18] !== b.language ? (s = b.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = b.language, u[19] = s) : s = u[19], u[20] !== C || u[21] !== b.content || u[22] !== b.editable || u[23] !== b.interactive || u[24] !== I || u[25] !== v || u[26] !== s || u[27] !== o || u[28] !== N ? (c = (0, n.jsx)(U.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: o,
                codeBlockIndex: C,
                codeBlockInfo: N,
                content: b.content,
                editable: b.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: I,
                isInteractive: b.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1,
                renderMath: v
            }), u[20] = C, u[21] = b.content, u[22] = b.editable, u[23] = b.interactive, u[24] = I, u[25] = v, u[26] = s, u[27] = o, u[28] = N, u[29] = c) : c = u[29], u[30] !== c || u[31] !== i ? (d = (0, n.jsx)(E.b.Provider, {
                value: i,
                children: c
            }), u[30] = c, u[31] = i, u[32] = d) : d = u[32], d
        }
        var K = a("DIH2");

        function Q(e) {
            let t, a, i, o, l, s, c = (0, r.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, K.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, K.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                g = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                m = g && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== g || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (i = g && "inline_anchor" !== d.data.presentation ? (0, K.b)(d.data.pronunciation_hint) : null, c[5] = g, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = i) : i = c[8];
            let h = i;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== h ? (o = null != h && h !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                values: {
                    text: u,
                    pronunciation: h
                }
            }) : u, c[9] = u, c[10] = h, c[11] = o) : o = c[11], c[12] !== u || c[13] !== f ? (l = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = l) : l = c[14], c[15] !== m || c[16] !== o || c[17] !== l ? (s = (0, n.jsxs)(m, {
                children: [o, l]
            }), c[15] = m, c[16] = o, c[17] = l, c[18] = s) : s = c[18], s)
        }
        var Y = a("yxxQ"),
            $ = a("VTN2");
        let X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: Q,
                errorFallback: Q
            }),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(782496), a.e(452048), a.e(299268), a.e(433520), a.e(621105), a.e(754159)]).then(a.bind(a, "wepe"))).ChatGptTranslationContentReference, {
                fallback: Q,
                errorFallback: Q
            }),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(851456), a.e(882323), a.e(645189), a.e(329156), a.e(829555), a.e(63583), a.e(720436), a.e(916950), a.e(255464), a.e(678608), a.e(371650)]).then(a.bind(a, "KKwe"))).DilWritingBlock, g.a),
            ee = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(782496), a.e(452048), a.e(299268), a.e(433520), a.e(621105), a.e(173348)]).then(a.bind(a, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(Y.a, {})
            }),
            et = (0, s.a)(o.a, {
                fallback: (0, n.jsx)(c.a, {
                    className: "w-full",
                    style: {
                        height: 416
                    }
                }),
                errorFallback: e => {
                    let {
                        reference: t
                    } = e;
                    return (0, n.jsx)(k.a, {
                        reference: t
                    })
                }
            }),
            ea = (0, s.a)(i.e, {
                fallback: (0, n.jsx)(c.a, {
                    className: "w-full"
                }),
                errorFallback: e => {
                    let {
                        reference: t
                    } = e;
                    return (0, n.jsx)(k.a, {
                        reference: t
                    })
                }
            }),
            en = (0, l.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(990054), a.e(194146), a.e(782496), a.e(452048), a.e(299268), a.e(433520), a.e(621105), a.e(867689)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            er = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function ei(e) {
            let t, a, i, o, l, s = (0, r.c)(80),
                {
                    appBlockTopMargin: c,
                    bind: d,
                    contentReferenceIndex: f,
                    isLastNodeInMessage: g,
                    isStreaming: _,
                    readOnly: b,
                    reference: v,
                    renderCodeBlockMath: y
                } = e;
            if ("business_profile_starter_pills" === v.category) {
                let e;
                return s[0] !== v.data ? (e = (0, n.jsx)(h.d, {
                    data: v.data
                }), s[0] = v.data, s[1] = e) : e = s[1], e
            }
            if ("beacon_card" === v.category) {
                let e;
                return s[2] !== f || s[3] !== _ || s[4] !== b || s[5] !== v ? (e = (0, n.jsx)(D, {
                    contentReferenceIndex: f,
                    reference: v,
                    isStreaming: _,
                    readOnly: b
                }), s[2] = f, s[3] = _, s[4] = b, s[5] = v, s[6] = e) : e = s[6], e
            }
            if ("suggest_work_handoff" === v.category) {
                let e;
                return s[7] !== f || s[8] !== _ || s[9] !== b ? (e = b || _ ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(er, {
                        contentReferenceIndex: f
                    })
                }), s[7] = f, s[8] = _, s[9] = b, s[10] = e) : e = s[10], e
            }
            if ("health_chart" === v.category) {
                let e;
                return s[11] !== f || s[12] !== _ || s[13] !== v ? (e = (0, n.jsx)(et, {
                    contentReferenceIndex: f,
                    reference: v,
                    isStreaming: _
                }), s[11] = f, s[12] = _, s[13] = v, s[14] = e) : e = s[14], e
            }
            if ("learning_flashcards" === v.category) {
                let e;
                return s[15] !== f || s[16] !== _ || s[17] !== b || s[18] !== v ? (e = (0, n.jsx)(ea, {
                    contentReferenceIndex: f,
                    reference: v,
                    isStreaming: _,
                    readOnly: b
                }), s[15] = f, s[16] = _, s[17] = b, s[18] = v, s[19] = e) : e = s[19], e
            }
            if (S.b.safeParse(v).success) {
                let e;
                return s[20] !== f ? (e = (0, n.jsx)(C, {
                    contentReferenceIndex: f
                }), s[20] = f, s[21] = e) : e = s[21], e
            }
            if ("writing_block" === v.category) {
                let e;
                return s[22] !== f || s[23] !== g || s[24] !== _ || s[25] !== b || s[26] !== v.data ? (e = (0, n.jsx)(Z, {
                    contentReferenceIndex: f,
                    data: v.data,
                    isLastNodeInMessage: g,
                    isStreaming: _,
                    readOnly: b
                }), s[22] = f, s[23] = g, s[24] = _, s[25] = b, s[26] = v.data, s[27] = e) : e = s[27], e
            }
            if ("email_preview" === v.category) {
                let e;
                s[28] !== v.data ? (e = $.e.safeParse(v.data), s[28] = v.data, s[29] = e) : e = s[29];
                let t = e;
                if (t.success) {
                    let e;
                    return s[30] !== t.data.sender || s[31] !== t.data.subject ? (e = (0, n.jsx)(k.c, {
                        reference: {
                            title: t.data.subject,
                            subtitle: t.data.sender
                        }
                    }), s[30] = t.data.sender, s[31] = t.data.subject, s[32] = e) : e = s[32], e
                }
            }
            if ("map" === v.category) {
                let e;
                return s[33] !== f || s[34] !== _ || s[35] !== v ? (e = (0, n.jsx)(p.a, {
                    contentReferenceIndex: f,
                    isStreaming: _,
                    reference: v
                }), s[33] = f, s[34] = _, s[35] = v, s[36] = e) : e = s[36], e
            }
            if ("app_block" === v.category) {
                let e;
                return s[37] !== c || s[38] !== d || s[39] !== _ || s[40] !== b || s[41] !== v ? (e = (0, n.jsx)(m.a, {
                    bind: d,
                    reference: v,
                    isStreaming: _,
                    readOnly: b,
                    withTopMargin: c
                }), s[37] = c, s[38] = d, s[39] = _, s[40] = b, s[41] = v, s[42] = e) : e = s[42], e
            }
            if ("ledger_monetary_value" === v.category) {
                let e, t;
                s[43] !== v ? (e = $.g.safeParse(v), s[43] = v, s[44] = e) : e = s[44];
                let a = e;
                return s[45] !== v || s[46] !== a.data || s[47] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(k.a, {
                    reference: v
                }), s[45] = v, s[46] = a.data, s[47] = a.success, s[48] = t) : t = s[48], t
            }
            s[49] !== v ? (t = $.d.safeParse(v), s[49] = v, s[50] = t) : t = s[50];
            let I = t;
            if (I.success) {
                let e;
                return s[51] !== I.data || s[52] !== f || s[53] !== _ || s[54] !== b || s[55] !== y ? (e = (0, n.jsx)(z, {
                    contentReferenceIndex: f,
                    isStreaming: _,
                    readOnly: b,
                    reference: I.data,
                    renderMath: y
                }), s[51] = I.data, s[52] = f, s[53] = _, s[54] = b, s[55] = y, s[56] = e) : e = s[56], e
            }
            s[57] !== v ? (a = $.f.safeParse(v), s[57] = v, s[58] = a) : a = s[58];
            let T = a;
            if (T.success) {
                let e;
                return s[59] !== f || s[60] !== T.data ? (e = (0, n.jsx)(eo, {
                    contentReferenceIndex: f,
                    reference: T.data
                }), s[59] = f, s[60] = T.data, s[61] = e) : e = s[61], e
            }
            s[62] !== v ? (i = $.h.safeParse(v), s[62] = v, s[63] = i) : i = s[63];
            let w = i;
            if (w.success) {
                let e, t = !0 === _;
                return s[64] !== f || s[65] !== w.data || s[66] !== t ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: f,
                    isStreaming: t,
                    reference: w.data
                }), s[64] = f, s[65] = w.data, s[66] = t, s[67] = e) : e = s[67], e
            }
            s[68] !== v ? (o = $.i.safeParse(v), s[68] = v, s[69] = o) : o = s[69];
            let E = o;
            if (E.success) {
                let e;
                return s[70] !== f || s[71] !== _ || s[72] !== E.data ? (e = (0, n.jsx)(J, {
                    contentReferenceIndex: f,
                    isStreaming: _,
                    reference: E.data
                }), s[70] = f, s[71] = _, s[72] = E.data, s[73] = e) : e = s[73], e
            }
            if (!$.c.safeParse(v).success) {
                let e;
                return s[74] !== v ? (e = (0, n.jsx)(k.c, {
                    reference: v
                }), s[74] = v, s[75] = e) : e = s[75], e
            }
            return s[76] !== f || s[77] !== _ || s[78] !== v ? (l = (0, n.jsx)(el, {
                contentReferenceIndex: f,
                reference: v,
                isStreaming: _
            }), s[76] = f, s[77] = _, s[78] = v, s[79] = l) : l = s[79], l
        }

        function eo(e) {
            let t, a, i, o = (0, r.c)(10),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e,
                d = (0, f.a)();
            o[0] !== c.data.content ? (t = (0, n.jsx)("span", {
                "data-learning-block-pending": !0,
                children: c.data.content
            }), o[0] = c.data.content, o[1] = t) : t = o[1];
            let u = t;
            return o[2] !== s || o[3] !== u || o[4] !== d || o[5] !== c ? (a = d && null != en ? (0, n.jsx)(en, {
                contentReferenceIndex: s,
                reference: c
            }) : u, o[2] = s, o[3] = u, o[4] = d, o[5] = c, o[6] = a) : a = o[6], o[7] !== u || o[8] !== a ? (i = (0, n.jsx)(l.Suspense, {
                fallback: u,
                children: a
            }), o[7] = u, o[8] = a, o[9] = i) : i = o[9], i
        }

        function el(e) {
            let t, a, i = (0, r.c)(6),
                [o] = (0, l.useState)(es);
            return i[0] !== e || i[1] !== o ? (t = (0, n.jsx)(ee, {
                ...e,
                widgetRefSeenAtMs: o
            }), i[0] = e, i[1] = o, i[2] = t) : t = i[2], i[3] !== e.contentReferenceIndex || i[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), i[3] = e.contentReferenceIndex, i[4] = t, i[5] = a) : a = i[5], a
        }

        function es() {
            return performance.now()
        }
    }),
    yxxQ: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("oyxz"),
            o = a("aqd9");
        a.d(t, {}, {
            a: function() {
                let e, t = (0, r.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                    className: "my-2 h-[27rem] w-full pt-5",
                    "aria-busy": !0,
                    children: (0, n.jsx)("div", {
                        ref: o.a,
                        className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                        role: "status",
                        children: (0, n.jsx)(i.a, {
                            id: "chatgpt.contentReferences.chart.creating",
                            defaultMessage: "Creating chart"
                        })
                    })
                }), t[0] = e) : e = t[0], e
            }
        })
    }),
    VTN2: (function(e, t, a) {
        var n = a("ASxG"),
            r = a("o7rp");
        let i = n.string().nullable().optional(),
            o = n.enum(["compact", "integer", "raw"]),
            l = i.catch(void 0),
            s = n.object({
                dimension: n.enum(["x", "y"]).optional().catch(void 0),
                domain: n.tuple([n.number(), n.number()]).optional().catch(void 0),
                label: l,
                ticks: n.array(n.object({
                    label: r.string().nullish(),
                    value: n.number()
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional()
            }).loose(),
            c = n.object({
                axes: n.array(s.nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional(),
                chartType: n.enum(["bar", "line", "pie", "scatter"]),
                data: n.array(n.record(n.string(), n.unknown()).nullable().catch(null)).catch([]).transform(e => e.filter(e => null != e)),
                layout: l,
                meta: n.object({
                    description: l,
                    footer: l,
                    title: l
                }).loose().optional().catch(void 0),
                nameKey: l,
                series: n.array(n.object({
                    axisLabel: l,
                    band: n.object({
                        lower: n.number().optional().catch(void 0),
                        upper: n.number().optional().catch(void 0),
                        lowerKey: n.string().min(1).optional().catch(void 0),
                        upperKey: n.string().min(1).optional().catch(void 0)
                    }).optional().catch(void 0),
                    dataKey: n.string().refine(e => e.trim().length > 0),
                    label: l,
                    stack: l,
                    valueFormat: o.optional().catch(void 0),
                    valuePrefix: l,
                    valueSuffix: l
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional(),
                valueFormat: o.optional().catch(void 0),
                valueKey: l,
                valuePrefix: l,
                valueSuffix: l,
                xAxisLabel: l,
                xAxisScale: l,
                xKey: l
            }).loose(),
            d = n.object({
                data: n.object({
                    content: n.unknown(),
                    language: n.literal("recharts-json"),
                    widget_type: i
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            u = n.object({
                category: n.literal("code_block"),
                data: n.object({
                    content: n.string(),
                    editable: n.boolean().optional(),
                    has_redundant_fences: n.boolean().optional(),
                    interactive: n.boolean().optional(),
                    language: n.string().optional(),
                    model_previewable: n.boolean().optional()
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            f = n.object({
                alt: i,
                category: n.literal("ledger_monetary_value"),
                data: n.object({
                    value: n.string()
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            g = n.object({
                sender: n.string().trim().min(1),
                subject: n.string(),
                url: n.string().trim().min(1)
            }),
            m = n.object({
                category: n.literal("app_block"),
                matched_text: n.string().optional(),
                data: n.object({
                    content: n.string(),
                    display_name: n.string().optional(),
                    title: n.string().nullish(),
                    render_immediately_during_streaming: n.boolean().optional(),
                    style_mode: n.enum(["default", "open"]).optional(),
                    type: n.literal("inline").optional(),
                    variant: n.literal("inline").optional()
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            h = n.object({
                category: n.literal("learning_block"),
                data: n.object({
                    content: n.string(),
                    content_is_placeholder: n.boolean().nullable().optional(),
                    content_type: i,
                    display_mode: n.enum(["block", "inline"]).optional(),
                    encoded_content: i,
                    encoded_follow_up_actions: i,
                    encoded_initial_values: i,
                    locale: i,
                    matched_type: i,
                    server_learning_block_version: n.number().nullable().optional(),
                    source: i,
                    thumbnail_asset_key: i,
                    widgetType: i,
                    widget_type: i
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            p = n.object({
                category: n.literal("language_learning_block"),
                data: n.object({
                    content: n.string(),
                    intent: n.literal("translation"),
                    pronunciation_language: i,
                    target_language: i,
                    translation_pairs: n.unknown().optional(),
                    language_options: n.unknown().optional(),
                    max_displayed_translation_pairs: n.number().int().positive().optional().catch(void 0),
                    disable_share_button: n.boolean().optional().catch(void 0),
                    version: i.catch(void 0)
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            _ = n.object({
                add_to_flashcards_enabled: n.boolean().nullable().optional(),
                content: n.string(),
                continue_in_voice_enabled: n.boolean().nullable().optional(),
                presentation: n.literal("inline_anchor").nullable().optional(),
                pronunciation_audio_text: i,
                pronunciation_hint: i,
                pronunciation_language: i,
                source_text: i,
                speaking_tip: i,
                version: i,
                voice_practice_version: i
            }).loose(),
            b = n.object({
                category: n.literal("language_learning_block"),
                data: _.extend({
                    intent: n.literal("pronunciation")
                }),
                type: n.literal("client_defined_widget")
            }).loose(),
            v = n.object({
                category: n.literal("translation_block"),
                data: n.object({
                    content: n.string(),
                    source_language: i,
                    target_language: i,
                    translated_text: i
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            y = n.discriminatedUnion("category", [p, v]);
        a.d(t, {}, {
            a: m,
            b: c,
            c: d,
            d: u,
            e: g,
            f: h,
            g: f,
            h: b,
            i: y
        })
    }),
    netB: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("T0Rc"),
            o = a("mEbU"),
            l = a("BolX"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            g = a("ZHSy"),
            m = a("WAdu"),
            h = a("tSEg"),
            p = a("Yscs"),
            _ = a("vldH"),
            b = a("dQRk"),
            v = a("TUMj"),
            y = a("EUy6"),
            I = a("gsAl"),
            T = a("GnI8"),
            w = a("DIH2");

        function E(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: r,
                    context: m,
                    fallback: v,
                    renderImage: E
                } = e,
                x = (0, l.y)(h.a),
                C = (0, s.useRef)(null),
                A = (0, o.a)(C, {
                    once: !0
                }),
                S = (0, s.useContext)(c.a),
                k = (0, l.z)(d.f),
                N = (0, l.z)(d.j),
                j = (0, l.x)(b.j, m.conversationId) ?? m.conversationId,
                P = (0, l.x)(b.T, m.conversationId),
                R = (0, l.x)(b._, m.conversationId),
                O = (0, l.x)(I.f, S)?.id,
                M = (0, _.b)(a, {
                    messageId: m.messageId
                }),
                {
                    data: G,
                    isPending: F
                } = (0, i.a)({
                    queryKey: ["chatgpt-sandbox-image", k, N, j, P, R, O, M, r],
                    enabled: A && null != M,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == M) throw Error("Sandbox image has no download target");
                        let a = await (0, _.fetchChatGptFileBlob)({
                            conversationId: j,
                            gizmoId: P,
                            sharedConversationId: R,
                            postId: O,
                            signal: t,
                            target: null == r && "sandbox" === M.type ? (0, y.b)(x, {
                                sandboxPath: M.sandboxPath,
                                turnContext: m,
                                sourceMessageId: M.messageId
                            }) : M,
                            maxBytes: f.a
                        });
                        if (t.throwIfAborted(), !a.type.startsWith("image/")) throw Error("Sandbox image download is not an image");
                        let n = await (0, p.a)(a);
                        return t.throwIfAborted(), n
                    },
                    retry: !1,
                    staleTime: 0,
                    gcTime: 0
                });
            return null != E && (null != G || null != M && F) ? E(G, C) : (t = null != G ? (0, n.jsx)(g.b, {
                alt: (0, w.b)(a.alt) ?? "",
                downloadFileName: (0, w.b)(a.file_name) ?? void 0,
                hostId: m.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: G
            }) : null != M && F ? (0, n.jsx)(u.a, {
                "aria-label": (0, w.b)(a.alt) ?? void 0
            }) : null != r ? (0, n.jsx)(T.ChatGptFileReference, {
                contentReferenceIndex: r,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, w.b)(a.alt)
            }), (0, n.jsx)("div", {
                ref: C,
                children: t
            }))
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, r.c)(7),
                    i = (0, v.d)(),
                    o = (0, s.useContext)(m.a);
                if (null == i || i.isStreaming || i.shouldBlockExternalEgress || "restricted" === o) {
                    let t, r;
                    return a[0] !== e.reference.alt ? (t = (0, w.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (r = (0, n.jsx)(n.Fragment, {
                        children: t
                    }), a[2] = t, a[3] = r) : r = a[3], r
                }
                return a[4] !== i || a[5] !== e ? (t = (0, n.jsx)(E, {
                    ...e,
                    context: i
                }), a[4] = i, a[5] = e, a[6] = t) : t = a[6], t
            }
        })
    }),
    Oa1z: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e) {
                return e.formatMessage({
                    id: "dil.modelWrittenV2.actionFailure",
                    defaultMessage: "This action couldn’t be completed. Please try again"
                })
            },
            b: {
                errorAnalytics: {
                    toastId: "dil.modelWrittenV2.actionFailure"
                }
            },
            c: function(e) {
                return e.formatMessage({
                    id: "dil.modelWrittenV2.shareWaitForResponse",
                    defaultMessage: "Wait for ChatGPT to finish responding"
                })
            }
        })
    }),
    EUy6: (function(e, t, a) {
        var n = a("EA6X"),
            r = a("FIIj"),
            i = a("ASxG"),
            o = a("E8Sp"),
            l = a("X6Vn"),
            s = a("ciEf"),
            c = a("zsxQ"),
            d = a("vldH"),
            u = a("OOaz"),
            f = a("dQRk"),
            g = a("rxj0"),
            m = a("xof2"),
            h = a("s60H"),
            p = a("IDHB"),
            _ = a("jAnS"),
            b = a("W5UM");
        let v = i.object({
            conversation_id: i.string().min(1).refine(e => "." !== e && ".." !== e && encodeURIComponent(e) === e),
            message_id: i.string().refine(e => e.trim().length > 0).optional().catch(void 0)
        });

        function y(e) {
            let t = e?.link_affordance;
            return {
                linkAffordance: i.enum(n.h).exclude(["UNRECOGNIZED"]).safeParse("string" == typeof t ? `CHATGPT_LINK_AFFORDANCE_${t.toUpperCase().replace(/^CHATGPT_LINK_AFFORDANCE_/,"")}` : void 0).data,
                linkIndex: i.int32().nonnegative().safeParse(e?.link_index).data,
                citationNumbers: i.array(i.int32().positive()).safeParse(e?.citation_numbers).data
            }
        }
        async function I(e, t) {
            let {
                sandboxPath: n,
                turnContext: r,
                sourceMessageId: i,
                sharedConversationId: o,
                signal: l
            } = t, s = e.get(f.$, r.conversationId), m = o ?? (s?.kind === "conversation" ? s.id : void 0), p = {
                conversationId: e.get(f.j, r.conversationId) ?? (null == m ? null : (0, u.d)(m)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.T, r.conversationId),
                sharedConversationId: m,
                postId: s?.kind === "post" ? s.post.id : void 0,
                requestSource: "web_dil_action",
                target: T(e, {
                    sandboxPath: n,
                    turnContext: r,
                    sourceMessageId: i
                })
            }, _ = (0, h.a)(n);
            if (null == _ && !(0, c.a)(n)) return (0, d.a)({
                ...p,
                signal: l
            });
            let {
                openChatGptFile: b
            } = await Promise.resolve().then(a.bind(a, "f2PP"));
            return b(e, {
                ...p,
                isAccessBlocked: e => (0, g.j)(e, r.conversationId),
                messageId: i,
                browserPreview: !0,
                conversationViewerUrl: _,
                tabKey: `${i}:sandbox:${n}`,
                signal: l
            })
        }

        function T(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: o
                } = t,
                l = e.get(f.$, i.conversationId);
            if (l?.kind === "post") {
                let t = e.get(f.N, i.conversationId)?.[o]?.message;
                if (null != t) {
                    let e = (0, r.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, p.a)(e, i.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: o
            })
        }

        function w(e) {
            if (e.length > 4096 || !["sandbox:/mnt/data/", "sandbox:/workspace/", "sandbox:/root/.codex/skills/remote-skills/"].some(t => e.startsWith(t))) return;
            let t = e.slice(8),
                a = t;
            for (let e = 0; e < 4 && !(a.endsWith("/") || a.split("/").some(e => "." === e || ".." === e) || Array.from(a).some(e => 31 >= e.charCodeAt(0) || 127 === e.charCodeAt(0))); e++) try {
                let e = decodeURIComponent(a.replace(/%(?![0-9a-f]{2})/gi, "%25"));
                if (e === a) return t;
                a = e
            } catch {
                break
            }
        }
        a.d(t, {}, {
            a: w,
            b: T,
            c: y,
            d: I,
            e: function(e, t) {
                let r, {
                    type: i,
                    openTarget: c,
                    payload: d,
                    turnContext: u,
                    sourceMessageId: g,
                    contentReferenceStartIndex: h,
                    parentContext: p,
                    signal: T,
                    onInteraction: E,
                    onLinkClick: x
                } = t;
                if ("open_conversation" === i) {
                    let t = v.safeParse(d);
                    if (t.success && !T.aborted) {
                        let a = (0, _.c)(t.data.conversation_id);
                        (0, o.d)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
                    }
                    return Promise.resolve()
                }
                if ("open_url" !== i) return !1;
                let C = d.url,
                    A = !0 === d.require_safe_url_confirmation;
                if ("string" != typeof C || !C || T.aborted || A && !/^https:\/\//i.test(C)) return Promise.resolve();
                let S = w(C);
                if (null != S) return null == u || null == g ? Promise.resolve() : I(e, {
                    sandboxPath: S,
                    turnContext: u,
                    sourceMessageId: g,
                    signal: T
                });
                try {
                    r = new URL(C, window.location.origin)
                } catch {
                    return Promise.resolve()
                }
                if ("http:" !== r.protocol && "https:" !== r.protocol) return Promise.resolve();
                u?.shouldBlockExternalEgress || E?.(), x?.();
                let k = r.toString();
                return ((0, m.g)(e, {
                    ...y(d),
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                    linkType: "search_citation" === d.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                    conversationId: e.get(f.j, u?.conversationId ?? null) ?? void 0,
                    messageId: g,
                    assistantMessageId: g,
                    turnOrdinal: (0, m.a)(e, u?.conversationId, g),
                    contentReferenceType: "dil",
                    contentReferenceStartIndex: h,
                    parentContext: p,
                    url: u?.shouldBlockExternalEgress ? void 0 : k
                }), A && !u?.safeUrls?.includes(k)) ? async function(e, t, n, r) {
                    let i = await (0, s.b)(t).catch(() => !1);
                    if (n.aborted) return;
                    if (i) return void(0, b.b)(e, t, r);
                    let {
                        ExternalLinkConfirmationDialog: o
                    } = await Promise.resolve().then(a.bind(a, "g25Y"));
                    n.aborted || (0, l.f)(e, o, {
                        href: t,
                        initiator: "markdown_link_click",
                        onOpen: () => {
                            n.aborted || (0, b.b)(e, t, r)
                        }
                    })
                }(e, k, T, c): ((0, b.b)(e, k, c), Promise.resolve())
            }
        })
    }),
    hGH3: (function(e, t, a) {
        var n = a("xsLm");
        a.d(t, {}, {
            a: function(e, t, a) {
                return (0, n.a)(e, t, {
                    subscribe: t => (a?.addEventListener("pointerenter", t), e.addEventListener("pointerenter", t), e.addEventListener("focusin", t), () => {
                        a?.removeEventListener("pointerenter", t), e.removeEventListener("pointerenter", t), e.removeEventListener("focusin", t)
                    })
                })
            }
        })
    }),
    W5UM: (function(e, t, a) {
        var n = a("Ot7V"),
            r = a("OMIV"),
            i = a("UIeB");
        let o = new Set(["entity_reviews_widget", "entity_reviews_ref_widget", "restaurant_reviews", "EntityReviewsWidget", "EntityReviewsRefWidget", "RestaurantReviews"]);

        function l(e, t, a) {
            return "sidebar" === t && null != a && o.has(a) && e.get(r.d, "1492523517") ? "in-app-browser" : void 0
        }

        function s(e, t, a, i) {
            (e.get(r.d, "1775679520") ? n.d : n.f)({
                href: t,
                disposition: i,
                initiator: "markdown_link_click",
                openTarget: a
            })
        }
        a.d(t, {}, {
            a: l,
            b: s,
            c: function(e, t, a, n, r) {
                s(e, (0, i.a)(t), l(e, a, n), r)
            }
        })
    }),
    CMlo: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("BolX"),
            o = a("zd8w"),
            l = a("Wf1j"),
            s = a("oyxz"),
            c = a("Qgfj"),
            d = a("Sm6l"),
            u = a("nhmq"),
            f = a("nzx4"),
            g = a("zLIa"),
            m = a("SGsN"),
            h = a("OWtl"),
            p = a("hGH3");

        function _(e) {
            return e.stopPropagation()
        }
        let b = (0, c.f)({
                reasonHelpful: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.helpful",
                    defaultMessage: "This visual is helpful"
                },
                reasonConfusing: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.confusing",
                    defaultMessage: "This visual is confusing"
                },
                reasonBroken: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.broken",
                    defaultMessage: "This visual is broken"
                },
                reasonNotRelevant: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.notRelevant",
                    defaultMessage: "This visual is not relevant"
                },
                reasonIncorrectInformation: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.incorrectInformation",
                    defaultMessage: "This visual has incorrect information"
                },
                placeholderWithReasons: {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.withReasons",
                    defaultMessage: "Tell our team why…"
                },
                placeholderDefault: {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.default",
                    defaultMessage: "What would you like us to know?"
                }
            }),
            v = [{
                reason: "helpful",
                labelMessage: b.reasonHelpful
            }, {
                reason: "wrong_or_confusing",
                labelMessage: b.reasonConfusing
            }, {
                reason: "broken",
                labelMessage: b.reasonBroken
            }, {
                reason: "not_relevant_to_question",
                labelMessage: b.reasonNotRelevant
            }, {
                reason: "data_is_incorrect",
                labelMessage: b.reasonIncorrectInformation
            }];
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, y, I, T, w, E, x, C, A, S, k, N, j, P, R, O, M, G, F, L, H = (0, r.c)(58),
                    {
                        isVisible: D,
                        feedbackConfig: B,
                        onImpression: W,
                        onOpen: V,
                        onSubmit: U
                    } = e,
                    q = (0, i.y)(h.a),
                    z = (0, l.a)(),
                    K = (0, o.useId)(),
                    Q = (0, o.useRef)(!1),
                    [Y, $] = (0, o.useState)("");
                H[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], H[0] = t) : t = H[0];
                let [X, J] = (0, o.useState)(t), [Z, ee] = (0, o.useState)(!1), et = B?.reason_options ?? v;
                if (H[1] !== et || H[2] !== X) {
                    let e;
                    H[4] !== et ? (e = e => et.some(t => t.reason === e), H[4] = et, H[5] = e) : e = H[5], a = X.filter(e), H[1] = et, H[2] = X, H[3] = a
                } else a = H[3];
                let ea = a;
                if (!(void 0 === D || D)) return null;
                if (H[6] !== V ? (c = e => {
                        ee(e), e && V()
                    }, H[6] = V, H[7] = c) : c = H[7], H[8] !== W ? (y = e => {
                        if (null != e && null != W && !Q.current) return (0, p.a)(e, () => (Q.current = !0, W(), !0))
                    }, H[8] = W, H[9] = y) : y = H[9], H[10] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.button.open",
                        defaultMessage: "Give feedback"
                    }), H[10] = I) : I = H[10], H[11] !== y ? (T = (0, n.jsx)(f.e, {
                        asChild: !0,
                        children: (0, n.jsx)(d.a, {
                            ref: y,
                            color: "ghostSecondary",
                            "data-turn-action-width": "content",
                            size: "compact",
                            type: "button",
                            children: I
                        })
                    }), H[11] = y, H[12] = T) : T = H[12], H[13] !== Y || H[14] !== U || H[15] !== q || H[16] !== ea ? (w = e => {
                        e.preventDefault();
                        let t = Y.trim();
                        "" !== t && (U({
                            feedbackText: t,
                            feedbackReasons: ea
                        }), $(""), J([]), ee(!1), q.get(m.f).success((0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.toast.success",
                            defaultMessage: "Your feedback has been submitted"
                        })))
                    }, H[13] = Y, H[14] = U, H[15] = q, H[16] = ea, H[17] = w) : w = H[17], H[18] !== B ? (E = B ? B.title : (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT"
                    }), H[18] = B, H[19] = E) : E = H[19], H[20] !== E ? (x = (0, n.jsx)(f.d, {
                        children: E
                    }), H[20] = E, H[21] = x) : x = H[21], H[22] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, n.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.popover.description",
                            defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better."
                        })
                    }), H[22] = C) : C = H[22], H[23] !== et || H[24] !== X) {
                    let e;
                    H[26] !== X ? (e = e => (0, n.jsxs)("label", {
                        className: "relative flex cursor-interaction items-center justify-between gap-2",
                        children: [(0, n.jsx)("span", {
                            children: "label" in e ? e.label : (0, n.jsx)(s.a, {
                                ...e.labelMessage
                            })
                        }), (0, n.jsx)(u.a, {
                            checked: X.includes(e.reason),
                            onCheckedChange: t => {
                                J(a => t ? [...a, e.reason] : a.filter(t => t !== e.reason))
                            }
                        })]
                    }, e.reason), H[26] = X, H[27] = e) : e = H[27], A = et.map(e), H[23] = et, H[24] = X, H[25] = A
                } else A = H[25];
                H[28] !== A ? (S = (0, n.jsx)("fieldset", {
                    className: "flex flex-col gap-2 text-sm",
                    children: A
                }), H[28] = A, H[29] = S) : S = H[29], H[30] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                    defaultMessage: "Additional feedback"
                }), H[30] = k) : k = H[30], H[31] !== K ? (N = (0, n.jsx)("label", {
                    className: "sr-only",
                    htmlFor: K,
                    children: k
                }), H[31] = K, H[32] = N) : N = H[32], H[33] !== z || H[34] !== ea.length ? (j = z.formatMessage(ea.length > 0 ? b.placeholderWithReasons : b.placeholderDefault), H[33] = z, H[34] = ea.length, H[35] = j) : j = H[35], H[36] === Symbol.for("react.memo_cache_sentinel") ? (P = e => $(e.target.value), H[36] = P) : P = H[36], H[37] !== Y || H[38] !== K || H[39] !== j ? (R = (0, n.jsx)(g.c, {
                    id: K,
                    autoFocus: !0,
                    autoResize: !0,
                    maxLength: 1600,
                    name: "model-written-dil-feedback",
                    placeholder: j,
                    rows: 3,
                    value: Y,
                    variant: "feedback",
                    onChange: P
                }), H[37] = Y, H[38] = K, H[39] = j, H[40] = R) : R = H[40], H[41] !== Y ? (O = Y.trim(), H[41] = Y, H[42] = O) : O = H[42];
                let en = "" === O;
                return H[43] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.submit",
                    defaultMessage: "Send feedback"
                }), H[43] = M) : M = H[43], H[44] !== en ? (G = (0, n.jsx)(d.a, {
                    className: "self-center",
                    color: "primary",
                    disabled: en,
                    radius: "full",
                    size: "menuRow",
                    type: "submit",
                    children: M
                }), H[44] = en, H[45] = G) : G = H[45], H[46] !== x || H[47] !== S || H[48] !== N || H[49] !== R || H[50] !== G || H[51] !== w ? (F = (0, n.jsx)(f.c, {
                    className: "select-none",
                    align: "end",
                    side: "bottom",
                    variant: "menu",
                    onEscapeKeyDown: _,
                    children: (0, n.jsxs)("form", {
                        className: "flex flex-col gap-3 p-2",
                        onSubmit: w,
                        children: [x, C, S, N, R, G]
                    })
                }), H[46] = x, H[47] = S, H[48] = N, H[49] = R, H[50] = G, H[51] = w, H[52] = F) : F = H[52], H[53] !== Z || H[54] !== F || H[55] !== c || H[56] !== T ? (L = (0, n.jsxs)(f.a, {
                    open: Z,
                    onOpenChange: c,
                    children: [T, F]
                }), H[53] = Z, H[54] = F, H[55] = c, H[56] = T, H[57] = L) : L = H[57], L
            }
        })
    }),
    ciVz: (function(e, t, a) {
        var n = a("BolX"),
            r = a("HT1b"),
            i = a("Cslg"),
            o = a("OFP1"),
            l = a("OWtl"),
            s = a("tSEg"),
            c = a("UR81"),
            d = a("vw1R"),
            u = a("g2p6");
        let f = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(u.p).data?.trainingAllowed === !0
            }),
            g = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, {
                    authLoading: a,
                    accountInfoLoading: n,
                    accountInfoError: r,
                    authMethod: i,
                    plan: l
                } = t(o.g);
                return a || r || n || "chatgpt" !== i || null == l ? null : (0, c.g)(l) || (0, d.b)(l)
            }),
            m = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, a = t(i.m);
                return !a.authLoading && !a.accountLoading && (null == a.authMethod || "chatgpt" === a.authMethod && null != a.plan && (!(0, d.b)(a.plan) || (0, r.qi)(a.email ?? null)))
            }),
            h = (0, n.v)(s.a, e => null),
            p = (0, n.v)(s.a, e => "unknown"),
            _ = (0, n.u)(s.a, !1);
        a.d(t, {}, {
            a: m,
            b: _,
            c: g,
            d: f,
            e: h,
            f: p
        })
    }),
    hCYm: (function(e, t, a) {
        a.d(t, {
            a: () => j,
            b: () => P
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("EA6X"),
            o = a("D015"),
            l = a("Nl8C"),
            s = a("BolX"),
            c = a("AuIy"),
            d = a("zd8w"),
            u = a("Wf1j"),
            f = a("ASxG"),
            g = a("Cslg"),
            m = a("WAdu"),
            h = a("yGJW"),
            p = a("OWtl"),
            _ = a("OMIV"),
            b = a("Kwur"),
            v = a("dQRk"),
            y = a("TUMj"),
            I = a("gKmr"),
            T = a("xof2"),
            w = a("CMlo"),
            E = a("rHrT");
        let x = f.enum(["helpful", "wrong_or_confusing", "broken", "not_relevant_to_question", "data_is_incorrect"]),
            C = f.string().refine(e => e.trim().length > 0),
            A = f.object({
                locale: C,
                title: C,
                reason_options: f.array(f.object({
                    reason: x,
                    label: C
                })).min(1).refine(e => new Set(e.map(e => {
                    let {
                        reason: t
                    } = e;
                    return t
                })).size === e.length)
            });

        function S(e) {
            return new Intl.Locale(e.trim().replaceAll("_", "-")).baseName
        }
        var k = a("ciVz");
        let N = (0, s.d)(p.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null == e || !a(k.a) || !a(_.d, "1205965498") || null != a(v.$, e.conversationId)) return !1;
            let n = a(v.N, e.conversationId)?.[e.messageId]?.message;
            return null != n && (0, c.s)(n.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && n.metadata?.model_dil_v2 == null && (0, c.s)((0, c.s)(n.metadata?.model_dil)?.dil)?.type == null && (n.metadata?.is_complete ?? "in_progress" !== n.status) === !0
        });

        function j(e) {
            let t, a, i, o, u, g, h, p, _, b, T, w, E, x, C, A = (0, r.c)(49),
                {
                    contentReferenceIndex: S,
                    reference: k
                } = e,
                j = (0, y.d)(),
                R = (0, d.useContext)(m.a);
            A[0] !== S || A[1] !== j ? (t = (0, y.c)(j, S), A[0] = S, A[1] = j, A[2] = t) : t = A[2];
            let O = t;
            A[3] !== O || A[4] !== j ? (a = null != j && null != O ? {
                conversationId: j.conversationId,
                messageId: O.messageId
            } : null, A[3] = O, A[4] = j, A[5] = a) : a = A[5];
            let M = a,
                G = (0, s.x)(N, M),
                F = (0, s.x)(v.j, j?.conversationId ?? null);
            if (!G || null == j || null == O || !F || !0 === k.hide_widget_feedback || "custom_agent_run" === k.name || j.isReadOnly || j.shouldBlockExternalEgress || "restricted" === R) return null;
            if (A[6] !== k.dil) {
                let e = (0, c.s)(k.dil);
                i = f.string().safeParse(e?.type), A[6] = k.dil, A[7] = i
            } else i = A[7];
            let L = i.data;
            if (A[8] !== F || A[9] !== k.dil || A[10] !== k.dil_url || A[11] !== k.dil_version || A[12] !== k.feedback_config || A[13] !== k.name || A[14] !== k.start_idx || A[15] !== O.index || A[16] !== O.messageId || A[17] !== L) {
                let e, t, a, n, r = I.c.safeParse(k.dil).data;
                A[29] !== k.name ? (e = f.string().safeParse(k.name), A[29] = k.name, A[30] = e) : e = A[30];
                let i = e.data,
                    s = `${O.messageId}:${O.index}`;
                A[31] !== k.start_idx ? (t = f.number().safeParse(k.start_idx), A[31] = k.start_idx, A[32] = t) : t = A[32], u = t.data, o = P, _ = F, b = O.messageId, T = s, w = k.feedback_config, E = i, x = L, A[33] !== k.dil_url ? (a = f.string().safeParse(k.dil_url), A[33] = k.dil_url, A[34] = a) : a = A[34], g = a.data, A[35] !== k.dil_version ? (n = f.string().safeParse(k.dil_version), A[35] = k.dil_version, A[36] = n) : n = A[36], h = n.data, p = (0, l.g)(r?.appData), A[8] = F, A[9] = k.dil, A[10] = k.dil_url, A[11] = k.dil_version, A[12] = k.feedback_config, A[13] = k.name, A[14] = k.start_idx, A[15] = O.index, A[16] = O.messageId, A[17] = L, A[18] = o, A[19] = u, A[20] = g, A[21] = h, A[22] = p, A[23] = _, A[24] = b, A[25] = T, A[26] = w, A[27] = E, A[28] = x
            } else o = A[18], u = A[19], g = A[20], h = A[21], p = A[22], _ = A[23], b = A[24], T = A[25], w = A[26], E = A[27], x = A[28];
            return A[37] !== o || A[38] !== u || A[39] !== g || A[40] !== h || A[41] !== p || A[42] !== _ || A[43] !== b || A[44] !== T || A[45] !== w || A[46] !== E || A[47] !== x ? (C = (0, n.jsx)(o, {
                conversationId: _,
                messageId: b,
                widgetRefId: T,
                feedbackConfig: w,
                widgetName: E,
                widgetType: x,
                dilUrl: g,
                dilVersion: h,
                metadata: p,
                startIndex: u
            }), A[37] = o, A[38] = u, A[39] = g, A[40] = h, A[41] = p, A[42] = _, A[43] = b, A[44] = T, A[45] = w, A[46] = E, A[47] = x, A[48] = C) : C = A[48], C
        }

        function P(e) {
            let t, a, l, c, f, m, _ = (0, r.c)(36),
                {
                    conversationId: v,
                    messageId: I,
                    widgetRefId: x,
                    widgetName: C,
                    widgetType: k,
                    isGenui: N,
                    dilUrl: j,
                    dilVersion: P,
                    metadata: M,
                    startIndex: G,
                    feedbackConfig: F
                } = e,
                L = void 0 !== N && N,
                H = (0, s.y)(p.a),
                D = (0, u.a)(),
                B = (0, d.useRef)(null),
                W = (0, y.d)();
            _[0] !== v || _[1] !== L || _[2] !== I || _[3] !== H || _[4] !== G || _[5] !== W || _[6] !== C || _[7] !== k ? (t = (e, t, a) => {
                try {
                    let n = {
                        actionType: "feedback_button" === e ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: I,
                        contentReferenceStartIndex: null == G ? void 0 : (0, o.a)(G),
                        contentReferenceType: "dil",
                        conversationId: v,
                        feedbackReasons: t?.length ? t : void 0,
                        isGenui: L,
                        messageId: I,
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: W ? (0, T.a)(H, W.conversationId, I) : void 0,
                        widgetActionTarget: e,
                        widgetAffordance: "feedback_form" === e ? i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON : i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON,
                        widgetName: C,
                        widgetType: k
                    };
                    (void 0 === a || a) && "feedback_button" !== e && (0, T.h)(H, n), (0, h.a)(H, i.j, n)
                } catch {}
            }, _[0] = v, _[1] = L, _[2] = I, _[3] = H, _[4] = G, _[5] = W, _[6] = C, _[7] = k, _[8] = t) : t = _[8];
            let V = t;
            return _[9] !== F || _[10] !== D.locale ? (a = function(e, t) {
                let a = A.safeParse(e);
                if (a.success) try {
                    return (0, E.f)(S(a.data.locale), S(t)) ? a.data : void 0
                } catch {
                    return
                }
            }(F, D.locale), _[9] = F, _[10] = D.locale, _[11] = a) : a = _[11], _[12] !== L || _[13] !== V || _[14] !== W ? (l = L || null == W || !1 === W.trackShownImpressions ? void 0 : () => V("feedback_button"), _[12] = L, _[13] = V, _[14] = W, _[15] = l) : l = _[15], _[16] !== V || _[17] !== H ? (c = () => {
                B.current = H.get(g.m), V("feedback_panel")
            }, _[16] = V, _[17] = H, _[18] = c) : c = _[18], _[19] !== v || _[20] !== j || _[21] !== P || _[22] !== V || _[23] !== I || _[24] !== M || _[25] !== H || _[26] !== C || _[27] !== x || _[28] !== k ? (f = e => {
                let {
                    feedbackText: t,
                    feedbackReasons: a
                } = e, n = H.get(g.m), r = null != B.current && B.current.userId === n.userId && B.current.authenticatedAccountId === n.authenticatedAccountId && B.current.authMethod === n.authMethod;
                V("feedback_form", a, r), r && b.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "widget_feedback",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: v,
                                message_id: I
                            },
                            widget_feedback: {
                                feedback: t,
                                checked_reasons: a.length > 0 ? a : void 0,
                                widget_name: C,
                                widget_type: k,
                                widget_ref_id: x,
                                dil_version: P
                            }
                        }
                    }
                }).catch(O), b.Request.safePost("/conversation/message/genui/feedback", {
                    requestBody: {
                        checked_reasons: a.length > 0 ? a : void 0,
                        conversation_id: v,
                        dil_url: j,
                        dil_version: P,
                        feedback: t,
                        language: globalThis.navigator?.language ?? "en-US",
                        message_id: I,
                        metadata: M,
                        timestamp_client: Date.now(),
                        user_agent: globalThis.navigator?.userAgent || void 0,
                        widget_name: C,
                        widget_ref_id: x,
                        widget_type: k
                    }
                }).catch(R)
            }, _[19] = v, _[20] = j, _[21] = P, _[22] = V, _[23] = I, _[24] = M, _[25] = H, _[26] = C, _[27] = x, _[28] = k, _[29] = f) : f = _[29], _[30] !== a || _[31] !== l || _[32] !== c || _[33] !== f || _[34] !== x ? (m = (0, n.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, n.jsx)(w.a, {
                    feedbackConfig: a,
                    onImpression: l,
                    onOpen: c,
                    onSubmit: f
                }, x)
            }), _[30] = a, _[31] = l, _[32] = c, _[33] = f, _[34] = x, _[35] = m) : m = _[35], m
        }

        function R() {}

        function O() {}
    }),
    mF5c: (function(e, t, a) {
        var n = a("EA6X"),
            r = a("MVHH"),
            i = a("Cslg"),
            o = a("SGsN"),
            l = a("svjy"),
            s = a("IZUf"),
            c = a("VJXV"),
            d = a("wHLp"),
            u = a("yGJW"),
            f = a("xof2");
        async function g(e, t) {
            let {
                conversationId: a,
                messageId: n,
                libraryFileId: r,
                status: u,
                surface: f,
                folder: g,
                created: p,
                onView: _,
                updateFavorite: b
            } = t, v = () => e.get(i.f) === e.value.accountId && e.get(i.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(l.a),
                I = t => {
                    v() && (m(e, a, n, "toast_action", f), _?.((0, d.b)(t, "banner")))
                },
                T = r,
                w = null != g || !u.isFavorited,
                E = null == g || !u.isFavorited,
                x = w ? "save" : "unsave",
                C = performance.now();
            if (E) {
                m(e, a, n, x, f);
                let t = null != (T = await b(w, null == g, null == _ ? void 0 : () => I("/library?tab=favorites")));
                if (!v() || (h(e, {
                        eventType: t ? w ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : w ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: x,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - C : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != g) {
                    try {
                        if (null == T) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, T, g.id)
                    } catch {
                        v() && e.get(o.f).danger(y.formatMessage({
                            id: "library.favoriteFolder.moveFailed",
                            defaultMessage: "Could not add to folder"
                        }), {
                            errorAnalytics: {
                                toastId: "library.favoriteFolder.moveFailed"
                            }
                        });
                        return
                    }
                    if (!v()) return;
                    (0, c.a)(e), e.get(o.f).success(p ? y.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created"
                    }, {
                        folderName: g.name
                    }) : y.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}"
                    }, {
                        folderName: g.name
                    }), {
                        primaryAction: {
                            label: y.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View"
                            }),
                            onClick: () => I(`/library/d/${encodeURIComponent(g.id)}`)
                        }
                    })
                }
                E && w && h(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: x,
                    clickToSuccessToastMs: performance.now() - C
                })
            }
        }

        function m(e, t, a, r, i) {
            let o, l, s = "client-created-root" === a ? void 0 : a ?? void 0;
            "save" === r ? (o = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON, l = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED") : "unsave" === r ? (o = n.d.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON, l = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED") : (o = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION, l = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED");
            let c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
            "toast_action" === r ? c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST : "image_lightbox" === i && (c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, f.e)(e, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: c,
                entityAffordance: o,
                entityCategory: "image",
                conversationId: t,
                messageId: s,
                assistantMessageId: s,
                contentReferenceType: "entity"
            }), h(e, {
                eventType: l,
                action: "toast_action" === r ? void 0 : r,
                surface: "toast_action" === r ? "save_toast" : i
            })
        }

        function h(e, t) {
            (0, u.a)(e, r.jb, {
                ...t,
                entityKind: "image"
            })
        }
        a.d(t, {}, {
            a: async function(e, t) {
                let {
                    image: a,
                    conversationId: n,
                    libraryFileId: r,
                    status: i,
                    folder: o,
                    created: l,
                    onView: s,
                    surface: d = "image_tile"
                } = t;
                return g(e, {
                    conversationId: n,
                    messageId: a.chatGptMessageId,
                    libraryFileId: r,
                    status: i,
                    surface: d,
                    folder: o,
                    created: l,
                    onView: s,
                    updateFavorite: async (t, a, n) => await (0, c.e)(e, {
                        libraryFileId: r,
                        favoriteId: i.favoriteId,
                        isFavorited: t,
                        surface: d,
                        entityKind: "imagegen",
                        source: "conversation",
                        showToast: a,
                        onView: n
                    }) ? r : null
                })
            },
            b: g
        })
    }),
    oQ79: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("slpy"),
            o = a("BolX"),
            l = a("Wf1j"),
            s = a("jqIZ"),
            c = a("Cslg"),
            d = a("Sm6l"),
            u = a("HOLv"),
            f = a("jo5I"),
            g = a("jU86"),
            m = a("Qed5"),
            h = a("VJXV"),
            p = a("mF5c"),
            _ = a("ejvO"),
            b = a("lc3A"),
            v = a("k2zB");

        function y(e) {
            let t, a, c, h, y = (0, r.c)(49),
                {
                    source: I,
                    sources: T,
                    conversationId: w,
                    messageId: E,
                    surface: x,
                    presentation: C,
                    joined: A
                } = e,
                S = void 0 !== A && A,
                k = (0, o.y)(g.c),
                N = (0, s._)(),
                j = (0, l.a)();
            y[0] !== I ? (t = (0, _.a)(I), y[0] = I, y[1] = t) : t = y[1];
            let P = t,
                {
                    data: R,
                    isError: O
                } = (0, o.x)(_.d, T),
                M = (0, o.x)(_.b, P),
                G = R?.[P];
            y[2] !== w || y[3] !== O || y[4] !== P || y[5] !== E || y[6] !== N || y[7] !== k || y[8] !== I || y[9] !== T || y[10] !== G || y[11] !== x ? (a = async (e, t) => {
                null == G || O || k.get(_.b, P) || (k.set(_.b, P, !0), await (0, p.b)(k, {
                    conversationId: w,
                    messageId: E,
                    libraryFileId: G.library_file_id,
                    status: {
                        favoriteId: G.favorite_id ?? null,
                        isFavorited: null != G.favorite_id
                    },
                    surface: x,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        N(e)
                    },
                    updateFavorite: (e, t, a) => (0, _.e)(k, {
                        source: I,
                        previous: G,
                        save: e,
                        surface: x,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await k.query.invalidate(_.d, T)
                }).finally(() => {
                    k.set(_.b, P, !1)
                }))
            }, y[2] = w, y[3] = O, y[4] = P, y[5] = E, y[6] = N, y[7] = k, y[8] = I, y[9] = T, y[10] = G, y[11] = x, y[12] = a) : a = y[12];
            let F = a;
            if (O) return null;
            if ("menuItem" === C) {
                let e, t, a = G?.favorite_id != null,
                    r = M || null == G;
                return y[13] !== F ? (e = () => void F(), y[13] = F, y[14] = e) : e = y[14], y[15] !== a || y[16] !== r || y[17] !== e ? (t = (0, n.jsx)(m.a, {
                    isFavorited: a,
                    disabled: r,
                    onSelect: e
                }), y[15] = a, y[16] = r, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === C) {
                let e, t, a, r, o, l = G?.favorite_id != null;
                y[19] !== j ? (e = j.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), y[19] = j, y[20] = e) : e = y[20];
                let s = e;
                if (null == G) {
                    let e;
                    y[21] !== j ? (e = j.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status"
                    }), y[21] = j, y[22] = e) : e = y[22], s = e
                } else if (l) {
                    let e;
                    y[23] !== j ? (e = j.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites"
                    }), y[23] = j, y[24] = e) : e = y[24], s = e
                }
                let c = M || null == G || void 0,
                    f = M || null == G;
                y[25] !== F ? (t = e => {
                    e.stopPropagation(), F()
                }, y[25] = F, y[26] = t) : t = y[26];
                let g = l ? b.a : v.a;
                return y[27] !== g ? (a = (0, n.jsx)(u.a, {
                    asset: g
                }), y[27] = g, y[28] = a) : a = y[28], y[29] !== l || y[30] !== s || y[31] !== c || y[32] !== f || y[33] !== t || y[34] !== a ? (r = (0, n.jsx)(d.a, {
                    "aria-label": s,
                    "aria-pressed": l,
                    "aria-busy": c,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), y[29] = l, y[30] = s, y[31] = c, y[32] = f, y[33] = t, y[34] = a, y[35] = r) : r = y[35], y[36] !== s || y[37] !== r ? (o = (0, n.jsx)(i.a, {
                    content: s,
                    children: r
                }), y[36] = s, y[37] = r, y[38] = o) : o = y[38], o
            }
            let L = G?.favorite_id != null,
                H = null == G,
                D = G?.directory_id ?? null;
            return y[39] !== F ? (c = () => void F(), y[39] = F, y[40] = c) : c = y[40], y[41] !== M || y[42] !== S || y[43] !== L || y[44] !== H || y[45] !== D || y[46] !== c || y[47] !== F ? (h = (0, n.jsx)(f.a, {
                isSaved: L,
                isBusy: M,
                isCheckingStatus: H,
                selectedFolderId: D,
                joined: S,
                visibility: "hover",
                onToggleFavorite: c,
                onSelectFolder: F
            }), y[41] = M, y[42] = S, y[43] = L, y[44] = H, y[45] = D, y[46] = c, y[47] = F, y[48] = h) : h = y[48], h
        }
        a.d(t, {}, {
            SearchImageFavorite: function(e) {
                let t, a, i, l, s = (0, r.c)(11),
                    d = (0, o.z)(h.d),
                    u = (0, o.z)(c.l),
                    f = (0, o.z)(c.f),
                    m = (0, o.z)(c.k);
                return d && "allowed" === u.status && null != f && null != m ? (s[0] !== f || s[1] !== m ? (t = {
                    accountId: f,
                    userId: m
                }, s[0] = f, s[1] = m, s[2] = t) : t = s[2], s[3] !== e.source ? (a = (0, _.a)(e.source), s[3] = e.source, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (i = (0, n.jsx)(y, {
                    ...e
                }, a), s[5] = e, s[6] = a, s[7] = i) : i = s[7], s[8] !== t || s[9] !== i ? (l = (0, n.jsx)(o.b, {
                    scope: g.c,
                    value: t,
                    children: i
                }), s[8] = t, s[9] = i, s[10] = l) : l = s[10], l) : null
            }
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("XlOJ"),
            r = a("r9HQ"),
            i = a("CpsU"),
            o = a.n(i),
            l = a("BolX"),
            s = a("Cslg"),
            c = a("SGsN"),
            d = a("svjy"),
            u = a("jU86"),
            f = a("VJXV"),
            g = a("yGJW");
        let m = new WeakMap,
            h = (0, l.v)(u.c, e => !1);

        function p(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let _ = (0, l.q)(u.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, i = [...new Map(e.map(e => [p(e), e])).values()], l = a(u.q);
            return {
                queryKey: ["library-image-favorites-status", n.value.accountId, n.value.userId, i.map(p).sort()],
                enabled: i.length > 0 && a(f.d),
                staleTime: 3e4,
                retry: 1,
                refetchOnMount: !0,
                queryFn: async e => {
                    let {
                        signal: t
                    } = e;
                    if (1 === i.length) {
                        var a;
                        let e = JSON.stringify([n.value.accountId, n.value.userId]),
                            o = m.get(n.queryClient);
                        null == o && (o = new Map, m.set(n.queryClient, o));
                        let s = o.get(e);
                        null == s && (a = l, s = (0, r.a)({
                            scheduler: (0, r.b)({
                                windowMs: 10,
                                maxBatchSize: 50
                            }),
                            fetcher: async e => {
                                let t = e.filter(e => {
                                    let {
                                        signal: t
                                    } = e;
                                    return !t.aborted
                                });
                                if (0 === t.length) return new Map;
                                let n = await a.safePost("/files/library/image-favorites/status", {
                                    requestBody: {
                                        sources: t.map(e => {
                                            let {
                                                source: t
                                            } = e;
                                            return t
                                        })
                                    },
                                    signal: 1 === t.length ? t[0].signal : void 0
                                });
                                if (n.length !== t.length) throw Error("Incomplete image favorite status response.");
                                return new Map(t.map((e, t) => {
                                    let {
                                        source: a
                                    } = e;
                                    return [p(a), n[t]]
                                }))
                            },
                            resolver: (e, t) => {
                                let {
                                    source: a,
                                    signal: n
                                } = t;
                                n.throwIfAborted();
                                let r = e.get(p(a));
                                if (null == r) throw Error("Incomplete image favorite status response.");
                                return r
                            }
                        }), o.set(e, s));
                        let c = await s.fetch({
                            source: i[0],
                            signal: t
                        });
                        return {
                            [p(i[0])]: c
                        }
                    }
                    return Object.fromEntries((await Promise.all(o()(i, 50).map(async e => {
                        let a = await l.safePost("/files/library/image-favorites/status", {
                            requestBody: {
                                sources: e
                            },
                            signal: t
                        });
                        if (a.length !== e.length) throw Error("Incomplete image favorite status response.");
                        return e.map((e, t) => [p(e), a[t]])
                    }))).flat())
                }
            }
        });
        a.d(t, {}, {
            a: p,
            b: h,
            c: function(e) {
                let t = e.searchResult;
                return t?.contentSrc == null || t.isProxied || !/^https?:/i.test(t.contentSrc) ? null : {
                    content_url: t.contentSrc,
                    original_content_url: t.originalSrc
                }
            },
            d: _,
            e: async function(e, t) {
                let a, {
                        source: r,
                        previous: i,
                        save: o,
                        surface: l,
                        showToast: m,
                        onView: h
                    } = t,
                    _ = () => e.get(s.f) === e.value.accountId && e.get(s.k) === e.value.userId,
                    b = p(r);
                if (!e.get(f.d)) return null;
                if (o) {
                    let t = {
                        operationId: crypto.randomUUID(),
                        action: "save",
                        entityKind: "web_image",
                        surface: l,
                        source: "conversation"
                    };
                    (0, g.a)(e, n.a, {
                        ...t,
                        eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                    });
                    try {
                        if (a = await e.get(u.q).safePost("/files/library/image-favorites", {
                                requestBody: r
                            }), null == a.favorite_id || null == a.library_file_id) throw Error("Image favorite response did not include its Library file.");
                        _() && ((0, g.a)(e, n.a, {
                            ...t,
                            result: "success",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                        }), m && (0, f.f)(e, {
                            isFavorited: !0,
                            onView: h
                        }))
                    } catch {
                        return _() && ((0, g.a)(e, n.a, {
                            ...t,
                            result: "error",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR"
                        }), e.get(c.f).danger(e.get(d.a).formatMessage({
                            id: "library.favorites.failed",
                            defaultMessage: "Could not update favorite"
                        }), {
                            errorAnalytics: {
                                toastId: "searchImageFavorites.setSearchImageFavorite.failed"
                            }
                        })), null
                    }
                } else {
                    if (null == i.library_file_id || null == i.favorite_id || !await (0, f.e)(e, {
                            libraryFileId: i.library_file_id,
                            favoriteId: i.favorite_id,
                            isFavorited: !1,
                            surface: l,
                            entityKind: "web_image",
                            source: "conversation",
                            showToast: m
                        })) return null;
                    a = {}
                }
                let v = {
                    queryKey: ["library-image-favorites-status", e.value.accountId, e.value.userId],
                    predicate: e => {
                        let t = e.queryKey[3];
                        return Array.isArray(t) && t.includes(b)
                    }
                };
                await e.queryClient.cancelQueries(v), e.queryClient.setQueriesData(v, e => null != e && b in e ? {
                    ...e,
                    [b]: a
                } : e), e.queryClient.refetchQueries({
                    ...v,
                    predicate: e => v.predicate(e) && void 0 === e.state.data
                });
                let y = a.library_file_id ?? i.library_file_id;
                if (null != y) {
                    let t = {
                        queryKey: ["library-favorites-status", e.value.accountId, e.value.userId],
                        predicate: e => {
                            let t = e.queryKey[3];
                            return Array.isArray(t) && t.includes(y)
                        }
                    };
                    await e.queryClient.cancelQueries(t), e.queryClient.setQueriesData(t, e => null != e && y in e ? {
                        ...e,
                        [y]: {
                            favoriteId: a.favorite_id ?? null,
                            isFavorited: null != a.favorite_id
                        }
                    } : e), e.queryClient.refetchQueries({
                        ...t,
                        predicate: e => t.predicate(e) && void 0 === e.state.data
                    })
                }
                return e.queryClient.invalidateQueries({
                    queryKey: ["library-api", e.value.accountId]
                }), y ?? null
            }
        })
    }),
    Q3Ib: (function(e, t, a) {
        a.d(t, {
            a: () => O
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("zPtR"),
            o = a("FS1B"),
            l = a("slpy"),
            s = a("BolX"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("oyxz"),
            f = a("Cslg"),
            g = a("Sm6l"),
            m = a("HOLv"),
            h = a("zLIa"),
            p = a("SGsN"),
            _ = a("Yq7Q"),
            b = a("yGJW"),
            v = a("OWtl"),
            y = a("sX4C"),
            I = a("FGv0"),
            T = a("hZax"),
            w = a("RiLw"),
            E = a("eShZ"),
            x = a("Kwur"),
            C = a("Oa1z"),
            A = a("AuIy"),
            S = a("UxLy"),
            k = a("fwnP");
        let N = (0, s.d)(v.a, (e, t) => {
                let {
                    get: a
                } = t;
                if (!a(k.H, e)) return [];
                let n = a(k.o, e),
                    r = a(k.z, e);
                return null == n || null == r ? [] : (0, A.b)({
                    current_node: n,
                    mapping: r
                }).flatMap(e => "assistant" === e.author.role && null != e.id ? [e.id] : [])
            }, {
                isEqual: S.a
            }),
            j = (0, s.d)(v.a, (e, t) => {
                let {
                    get: a
                } = t;
                return null != e && a(N, e.conversationId).includes(e.messageId)
            });

        function P(e, t, a) {
            let n;
            if ("u" < typeof IntersectionObserver) return () => {};
            let r = e.ownerDocument,
                i = e.closest("[data-web-image-tile], [class~='group/search-image']") ?? e,
                o = !1,
                l = !1,
                s = () => {
                    let a = r.defaultView?.getComputedStyle(e);
                    for (let t = e.parentElement; null != t; t = t.parentElement)
                        if (0 === Number(r.defaultView?.getComputedStyle(t).opacity)) return !1;
                    return o && "visible" === r.visibilityState && e.isConnected && e.getClientRects().length > 0 && null == e.closest("[inert], [aria-hidden='true']") && a?.visibility === "visible" && Number(a.opacity) > 0 && t()
                },
                c = () => {
                    if (!l) {
                        if (!s()) {
                            clearTimeout(n), n = void 0;
                            return
                        }
                        void 0 === n && (n = setTimeout(() => {
                            n = void 0, s() && (l = !0, a(), g())
                        }, 1e3))
                    }
                },
                d = new IntersectionObserver(e => {
                    let [t] = e;
                    o = t.isIntersecting && t.intersectionRatio >= .5, c()
                }, {
                    threshold: .5
                });
            d.observe(e);
            let u = new MutationObserver(c);
            u.observe(i, {
                attributes: !0,
                subtree: i !== e,
                attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden"]
            });
            let f = ["load", "pointerover", "pointerout", "focusin", "focusout", "transitionend"];
            for (let e of f) i.addEventListener(e, c, !0);

            function g() {
                for (let e of (l = !0, clearTimeout(n), d.disconnect(), u.disconnect(), f)) i.removeEventListener(e, c, !0);
                r.removeEventListener("visibilitychange", c)
            }
            return r.addEventListener("visibilitychange", c), g
        }
        var R = a("TgMd");

        function O(e) {
            let t, a, A, S, k, N, O, B, W, V, U, q, z, K, Q, Y, $, X, J, Z, ee, et, ea, en, er, ei, eo, el = (0, r.c)(131),
                {
                    source: es,
                    conversationId: ec,
                    messageId: ed,
                    imageIndex: eu,
                    contentReferenceStartIndex: ef,
                    isTemporaryChat: eg,
                    surface: em,
                    lightboxPresentation: eh,
                    imageRef: ep,
                    imageReady: e_,
                    joined: eb
                } = e,
                ev = void 0 === eh ? "classic" : eh,
                ey = void 0 === e_ || e_,
                eI = void 0 !== eb && eb,
                eT = (0, s.y)(v.a),
                ew = (0, s.z)(f.f),
                eE = (0, s.z)(f.k),
                ex = (0, d.a)();
            el[0] !== ew || el[1] !== ec || el[2] !== eg || el[3] !== ed || el[4] !== es.content_url || el[5] !== eE ? (t = !eg && null != ew && null != eE && null != ec && null != ed && /^https?:\/\//i.test(es.content_url), el[0] = ew, el[1] = ec, el[2] = eg, el[3] = ed, el[4] = es.content_url, el[5] = eE, el[6] = t) : t = el[6];
            let eC = t,
                eA = !eC;
            el[7] !== eA ? (a = {
                disableExposureLog: eA
            }, el[7] = eA, el[8] = a) : a = el[8];
            let eS = (0, T.j)("274234392", a);
            el[9] !== eS ? (A = eS.get("placement", "off"), el[9] = eS, el[10] = A) : A = el[10];
            let ek = A,
                eN = "fullscreen" === ek || "inline_and_fullscreen" === ek ? ek : "off",
                ej = eC && ("inline_and_fullscreen" === eN || "fullscreen" === eN && "image_lightbox" === em);
            el[11] !== ec || el[12] !== ed || el[13] !== ej ? (S = ej ? {
                conversationId: ec,
                messageId: ed
            } : null, el[11] = ec, el[12] = ed, el[13] = ej, el[14] = S) : S = el[14];
            let eP = S,
                eR = (0, s.x)(j, eP),
                eO = (0, c.useRef)(null),
                eM = (0, c.useRef)(null);
            el[15] !== ef || el[16] !== ec || el[17] !== eu || el[18] !== ed || el[19] !== es.content_url ? (k = [ec, ed, ef, eu, es.content_url], el[15] = ef, el[16] = ec, el[17] = eu, el[18] = ed, el[19] = es.content_url, el[20] = k) : k = el[20];
            let eG = k.join(":");
            el[21] !== ew || el[22] !== eG || el[23] !== eE ? (N = {
                accountId: ew,
                userId: eE,
                imageKey: eG
            }, el[21] = ew, el[22] = eG, el[23] = eE, el[24] = N) : N = el[24];
            let [eF, eL] = (0, c.useState)(N), [eH, eD] = (0, c.useState)(null);
            (eF.accountId !== ew || eF.userId !== eE || eF.imageKey !== eG) && eL({
                accountId: ew,
                userId: eE,
                imageKey: eG
            });
            let eB = (0, c.useRef)(null);
            el[25] === Symbol.for("react.memo_cache_sentinel") ? (O = new Set, el[25] = O) : O = el[25];
            let eW = (0, c.useRef)(O),
                [eV, eU] = (0, c.useState)(!1),
                eq = "image_tile" === em ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            el[26] !== eu ? (B = null == eu || eu < 0 ? void 0 : (0, i.d)(eu), el[26] = eu, el[27] = B) : B = el[27], el[28] !== ef ? (W = null == ef ? void 0 : (0, i.b)(ef), el[28] = ef, el[29] = W) : W = el[29], el[30] !== eN || el[31] !== em || el[32] !== B || el[33] !== W ? (V = {
                surface: em,
                placement: eN,
                imageIndex: B,
                contentReferenceStartIndex: W
            }, el[30] = eN, el[31] = em, el[32] = B, el[33] = W, el[34] = V) : V = el[34], el[35] !== ec || el[36] !== ed || el[37] !== eq || el[38] !== V ? (U = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eq,
                conversationId: ec,
                messageId: ed,
                imageMetadata: V
            }, el[35] = ec, el[36] = ed, el[37] = eq, el[38] = V, el[39] = U) : U = el[39];
            let ez = U;
            el[40] !== ew || el[41] !== ez || el[42] !== eT || el[43] !== eE ? (q = (e, t, a) => {
                eT.get(f.f) === ew && eT.get(f.k) === eE && (0, b.a)(eT, o.i, {
                    ...ez,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, el[40] = ew, el[41] = ez, el[42] = eT, el[43] = eE, el[44] = q) : q = el[44];
            let eK = q,
                eQ = (0, c.useEffectEvent)(eK);
            if (el[45] === Symbol.for("react.memo_cache_sentinel") ? (z = () => () => {
                    eO.current?.abort()
                }, K = [], el[45] = z, el[46] = K) : (z = el[45], K = el[46]), (0, c.useEffect)(z, K), el[47] !== ew || el[48] !== ef || el[49] !== ec || el[50] !== eQ || el[51] !== eC || el[52] !== eu || el[53] !== ey || el[54] !== ep || el[55] !== ed || el[56] !== eN || el[57] !== ej || el[58] !== es.content_url || el[59] !== em || el[60] !== eE ? (Q = () => {
                    let e = eB.current;
                    if (!eC || null == e) return;
                    let t = ep?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [ew, eE, es.content_url, ec, ed, ef, eu, em, eN].join(":"),
                        n = crypto.randomUUID(),
                        r = null == t || eW.current.has(a) ? void 0 : P(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return ey && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            eW.current.add(a), eQ("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        i = !ej || eW.current.has(`${a}:control`) ? void 0 : P(e, D, () => {
                            eW.current.add(`${a}:control`), eQ("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        r?.(), i?.()
                    }
                }, el[47] = ew, el[48] = ef, el[49] = ec, el[50] = eQ, el[51] = eC, el[52] = eu, el[53] = ey, el[54] = ep, el[55] = ed, el[56] = eN, el[57] = ej, el[58] = es.content_url, el[59] = em, el[60] = eE, el[61] = Q) : Q = el[61], el[62] !== ew || el[63] !== ef || el[64] !== ec || el[65] !== eC || el[66] !== eu || el[67] !== ey || el[68] !== ep || el[69] !== ed || el[70] !== eN || el[71] !== ej || el[72] !== es.content_url || el[73] !== em || el[74] !== eE ? (Y = [ew, eE, es.content_url, em, eN, ej, eC, ep, ec, ed, eu, ef, ey], el[62] = ew, el[63] = ef, el[64] = ec, el[65] = eC, el[66] = eu, el[67] = ey, el[68] = ep, el[69] = ed, el[70] = eN, el[71] = ej, el[72] = es.content_url, el[73] = em, el[74] = eE, el[75] = Y) : Y = el[75], (0, c.useEffect)(Q, Y), !eC) return null;
            el[76] !== ex ? ($ = ex.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image"
            }), el[76] = ex, el[77] = $) : $ = el[77];
            let eY = $;
            el[78] !== ex || el[79] !== eR ? (X = eR ? (0, C.c)(ex) : void 0, el[78] = ex, el[79] = eR, el[80] = X) : X = el[80];
            let e$ = X,
                eX = eR ? "pointer-events-none" : void 0,
                eJ = eR || eV;
            el[81] !== ew || el[82] !== ec || el[83] !== eF || el[84] !== eK || el[85] !== eG || el[86] !== ex || el[87] !== ed || el[88] !== eP || el[89] !== eT || el[90] !== es.content_url || el[91] !== eE ? (J = e => {
                let t;
                if (e.stopPropagation(), null != eO.current || null == ew || null == eE || null == ec || null == ed || eT.get(j, eP)) return;
                let a = new AbortController;
                eO.current = a, eU(!0);
                let n = () => {
                        if (a.signal.throwIfAborted(), eT.get(f.f) !== ew || eT.get(f.k) !== eE) throw new DOMException("The active account changed", "AbortError")
                    },
                    r = crypto.randomUUID(),
                    o = crypto.randomUUID(),
                    l = eM.current?.accountId === ew && eM.current?.userId === eE && eM.current.imageKey === eG ? eM.current : null,
                    s = l?.shareId,
                    c = () => ({
                        attemptId: o,
                        shareId: s,
                        usedExistingLink: null != l
                    }),
                    d = performance.now();
                eK("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", r, c()), eK("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", r, c());
                let u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    g = null == l ? (async () => {
                        n();
                        let e = await x.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: ec,
                                    message_id: ed,
                                    content_url: es.content_url
                                }]
                            },
                            signal: a.signal,
                            assertRequestCurrent: n
                        });
                        n(), s = e.post.id;
                        let t = e.post.web_image_attachments;
                        if (1 !== e.post.attachments.length || t?.length !== 1 || t[0]?.id !== e.post.attachments[0]?.id) throw Error("Shared image is unavailable");
                        let r = function(e) {
                            if (!/^i_[A-Za-z0-9_-]+$/.test(e.id)) throw Error("Invalid image share identity");
                            let t = `/s/${e.id}`,
                                a = new URL(e.permalink ?? t, "https://chatgpt.com");
                            if ("https://chatgpt.com" !== a.origin || a.pathname !== t || a.username || a.password || a.search || a.hash) throw Error("Invalid image share identity");
                            return a.href
                        }(e.post);
                        return eM.current = {
                            accountId: ew,
                            userId: eE,
                            imageKey: eG,
                            shareId: s,
                            link: r
                        }, r
                    })().catch(e => {
                        let a = e instanceof E.FetchError && "network" !== e.errorKind ? e.explicitResponseStatus : void 0;
                        throw null != a && Number.isInteger(a) && a >= 100 && a <= 599 && (t = (0, i.b)(a)), u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(l.link).then(e => (n(), e));
                g.catch(H);
                let m = (0, I.a)(g, a.signal);
                m.catch(L), (async () => {
                    let e;
                    try {
                        e = await g, await m.then(F), n(), eK("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", r, {
                            ...c(),
                            durationMs: performance.now() - d
                        }), eT.get(p.f).success(ex.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied"
                        }))
                    } catch (i) {
                        let n = eT.get(f.f) !== ew || eT.get(f.k) !== eE || a.signal.aborted || i instanceof DOMException && "AbortError" === i.name;
                        if (eK(n ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", r, {
                                ...c(),
                                failureReason: n ? void 0 : u,
                                httpStatus: n ? void 0 : t,
                                durationMs: performance.now() - d
                            }), n) return;
                        null != e ? eD({
                            visit: eF,
                            url: e
                        }) : eT.get(p.f).danger(ex.formatMessage({
                            id: "chatgpt.webImageSharing.failed",
                            defaultMessage: "Could not share image. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "web_image_share_failed"
                            }
                        })
                    }
                })().finally(() => {
                    a.signal.aborted || (eO.current = null, eU(!1))
                })
            }, el[81] = ew, el[82] = ec, el[83] = eF, el[84] = eK, el[85] = eG, el[86] = ex, el[87] = ed, el[88] = eP, el[89] = eT, el[90] = es.content_url, el[91] = eE, el[92] = J) : J = el[92], el[93] !== eV || el[94] !== e$ || el[95] !== eY || el[96] !== eX || el[97] !== eJ || el[98] !== J ? (Z = {
                type: "button",
                "aria-label": eY,
                "aria-description": e$,
                className: eX,
                "aria-busy": eV,
                loading: eV,
                disabled: eJ,
                onClick: J
            }, el[93] = eV, el[94] = e$, el[95] = eY, el[96] = eX, el[97] = eJ, el[98] = J, el[99] = Z) : Z = el[99];
            let eZ = Z;
            el[100] === Symbol.for("react.memo_cache_sentinel") ? (ee = (0, n.jsx)(u.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share"
            }), el[100] = ee) : ee = el[100];
            let e0 = ee;
            if ("image_lightbox" === em) {
                let e;
                el[101] !== eZ || el[102] !== ev ? (e = "overlay" === ev ? (0, n.jsx)(w.a, {
                    ...eZ
                }) : (0, n.jsxs)(g.a, {
                    ...eZ,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, n.jsx)(m.a, {
                        asset: R.a
                    }), e0]
                }), el[101] = eZ, el[102] = ev, el[103] = e) : e = el[103], et = e
            } else {
                let e, t;
                el[104] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(m.a, {
                    asset: R.a
                }), el[104] = e) : e = el[104], el[105] !== eZ || el[106] !== eI ? (t = (0, n.jsx)(_.a, {
                    ...eZ,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    joined: eI,
                    children: e
                }), el[105] = eZ, el[106] = eI, el[107] = t) : t = el[107], et = t
            }
            let e1 = e$ ?? eY,
                e2 = eR ? 0 : void 0,
                e3 = eR ? "group" : void 0,
                e5 = eR ? eY : void 0,
                e6 = eR ? G : void 0;
            el[108] !== et || el[109] !== e$ || el[110] !== e2 || el[111] !== e3 || el[112] !== e5 || el[113] !== e6 ? (ea = (0, n.jsx)("span", {
                className: "inline-flex",
                tabIndex: e2,
                role: e3,
                "aria-label": e5,
                "aria-description": e$,
                onClickCapture: e6,
                children: et
            }), el[108] = et, el[109] = e$, el[110] = e2, el[111] = e3, el[112] = e5, el[113] = e6, el[114] = ea) : ea = el[114], et = ea;
            let e4 = "inline-flex";
            return "image_tile" === em && (e4 = eI ? ej ? "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:w-9 group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:w-9 group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:w-9 group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:w-9 group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:w-9 [@media(hover:none)]:opacity-100" : "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0" : "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), el[115] !== et || el[116] !== e1 || el[117] !== ej ? (en = ej ? (0, n.jsx)(l.a, {
                content: e1,
                children: et
            }) : null, el[115] = et, el[116] = e1, el[117] = ej, el[118] = en) : en = el[118], el[119] !== e4 || el[120] !== en ? (er = (0, n.jsx)("span", {
                ref: eB,
                className: e4,
                children: en
            }), el[119] = e4, el[120] = en, el[121] = er) : er = el[121], el[122] !== eF || el[123] !== ex || el[124] !== e1 || el[125] !== eH || el[126] !== ej ? (ei = ej && eH?.visit === eF && (0, n.jsx)(y.a, {
                title: e1,
                subtitle: (0, n.jsx)(u.a, {
                    id: "chatgpt.webImageSharing.copyManually",
                    defaultMessage: "Couldn’t copy the image link. Select and copy it below."
                }),
                onClose: () => eD(null),
                footer: null,
                children: (0, n.jsx)(h.a, {
                    "aria-label": ex.formatMessage({
                        id: "chatgpt.webImageSharing.linkLabel",
                        defaultMessage: "Image share link"
                    }),
                    readOnly: !0,
                    value: eH.url,
                    onFocus: M
                })
            }), el[122] = eF, el[123] = ex, el[124] = e1, el[125] = eH, el[126] = ej, el[127] = ei) : ei = el[127], el[128] !== er || el[129] !== ei ? (eo = (0, n.jsxs)(n.Fragment, {
                children: [er, ei]
            }), el[128] = er, el[129] = ei, el[130] = eo) : eo = el[130], eo
        }

        function M(e) {
            return e.currentTarget.select()
        }

        function G(e) {
            return e.stopPropagation()
        }

        function F(e) {
            if (!e) throw Error("Clipboard write failed")
        }

        function L() {}

        function H() {}

        function D() {
            return !0
        }
    }),
    UIeB: (function(e, t, a) {
        var n = a("EbvC"),
            r = a("iPs9"),
            i = a("Tv1c"),
            o = a.n(i);

        function l(e) {
            try {
                return (0, n.a)(e, {
                    stripWWW: !1,
                    removeTrailingSlash: !0,
                    sortQueryParameters: !0,
                    removeQueryParameters: ["utm_source"]
                })
            } catch {
                return e
            }
        }

        function s(e, t) {
            let a = e.trim();
            return o()(a, {
                protocols: ["http", "https"]
            }) && "www.nice.org.uk" !== (0, r.b)((0, r.c)(a, "https://").host).hostname.toLowerCase() ? (0, r.d)(a, null != t && Object.keys(t).length > 0 ? t : {
                utm_source: "chatgpt.com"
            }) : e
        }
        a.d(t, {}, {
            a: s,
            b: function(e, t, a) {
                return t.has(l(e)) ? s(e, a) : e
            },
            c: l
        })
    }),
    Qed5: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("oyxz"),
            o = a("bqtn"),
            l = a("UxN3"),
            s = a("T7LS"),
            c = a("lc3A"),
            d = a("lJIG"),
            u = a("k2zB");
        a.d(t, {}, {
            a: function(e) {
                let t, a, f, g = (0, r.c)(9),
                    {
                        isFavorited: m,
                        disabled: h,
                        onSelect: p
                    } = e;
                return g[0] !== m ? (t = (0, n.jsx)(l.b, {
                    icon: {
                        assets: m ? {
                            16: s.a,
                            20: c.a
                        } : {
                            16: d.a,
                            20: u.a
                        }
                    }
                }), g[0] = m, g[1] = t) : t = g[1], g[2] !== m ? (a = m ? (0, n.jsx)(i.a, {
                    id: "library.favorites.remove",
                    defaultMessage: "Remove from Favorites"
                }) : (0, n.jsx)(i.a, {
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), g[2] = m, g[3] = a) : a = g[3], g[4] !== h || g[5] !== p || g[6] !== t || g[7] !== a ? (f = (0, n.jsx)(o.c.Item, {
                    disabled: h,
                    leftIcon: t,
                    onSelect: p,
                    children: a
                }), g[4] = h, g[5] = p, g[6] = t, g[7] = a, g[8] = f) : f = g[8], f
            }
        })
    }),
    iwt4: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(590108).then(a.bind(a, "PyZ7"))).observeFlashcardSourceCards
            },
            b: async function() {
                return (await a.e(973648).then(a.bind(a, "HVw5"))).FlashcardsComposerSuggestions
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(896173)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(372593)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(703465)]).then(a.bind(a, "h3EV"))).InlineFlashcards
            }
        })
    }),
    sX4C: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("on57"),
            o = a("Wf1j"),
            l = a("Sm6l"),
            s = a("JNtf"),
            c = a("mUDD"),
            d = a("HOLv"),
            u = a("CsDP"),
            f = a("gTbk");

        function g(e) {
            let t, a, g, m, h, p, _, b, v = (0, r.c)(44),
                {
                    children: y,
                    headerContent: I,
                    headerActions: T,
                    footer: w,
                    collapseEmptyContent: E,
                    compactImageSheetFooter: x,
                    isDismissalDisabled: C,
                    subtitle: A,
                    title: S,
                    onClose: k,
                    onOpenAutoFocus: N,
                    onCloseAutoFocus: j,
                    onPortalContainerChange: P,
                    onSubmit: R,
                    size: O,
                    variant: M,
                    presentation: G
                } = e,
                F = void 0 !== E && E,
                L = void 0 !== x && x,
                H = void 0 !== C && C,
                D = (0, o.a)(),
                B = "imageSheet" === G;
            v[0] !== L || v[1] !== T || v[2] !== D || v[3] !== H || v[4] !== B || v[5] !== k || v[6] !== A || v[7] !== S ? (t = B ? (0, n.jsxs)("div", {
                className: (0, i.b)("shrink-0", "imageSheetHeader-vPz2gu", L && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, n.jsx)(s.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: S
                }), null != A && (0, n.jsx)(s.d, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: A
                }), !H && (0, n.jsx)(l.a, {
                    unstyled: !0,
                    className: (0, i.b)("imageSheetClose-msZEpI", L && "imageSheetTwoRowsClose-qwbpXz"),
                    "aria-label": D.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog"
                    }),
                    onClick: e => {
                        e.stopPropagation(), k()
                    },
                    children: (0, n.jsx)(d.a, {
                        asset: f.a
                    })
                })]
            }) : (0, n.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, n.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, n.jsx)(s.e, {
                        className: "contents",
                        children: S
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, n.jsx)(s.d, {
                        className: "contents",
                        children: A
                    })
                }), T]
            }), v[0] = L, v[1] = T, v[2] = D, v[3] = H, v[4] = B, v[5] = k, v[6] = A, v[7] = S, v[8] = t) : t = v[8], v[9] !== I || v[10] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                children: [t, I]
            }), v[9] = I, v[10] = t, v[11] = a) : a = v[11];
            let W = a;
            v[12] !== A ? (g = null == A ? {
                "aria-describedby": void 0
            } : {}, v[12] = A, v[13] = g) : g = v[13], v[14] !== N || v[15] !== P ? (m = e => {
                e.currentTarget instanceof HTMLElement && P?.(e.currentTarget), N?.(e)
            }, v[14] = N, v[15] = P, v[16] = m) : m = v[16], v[17] !== j || v[18] !== g || v[19] !== m ? (h = {
                ...g,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: j,
                onOpenAutoFocus: m
            }, v[17] = j, v[18] = g, v[19] = m, v[20] = h) : h = v[20];
            let V = !H && !B,
                U = M ?? "opaque",
                q = B ? "imageSheetSurface-pAxv7i" : void 0,
                z = B ? "imageSheetOverlay-Da_SGi" : void 0;
            return v[21] !== H || v[22] !== k ? (p = e => {
                e || H || k()
            }, v[21] = H, v[22] = k, v[23] = p) : p = v[23], v[24] !== y || v[25] !== F || v[26] !== L || v[27] !== w || v[28] !== W || v[29] !== H || v[30] !== B || v[31] !== R ? (_ = B ? (0, n.jsxs)(c.b, {
                as: null == R ? "div" : "form",
                variant: "chatgpt",
                className: (0, i.b)("imageSheetBody-YQy31R", "min-h-0", L && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == R ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), H || R()
                },
                children: [(0, n.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [W, y]
                }), (0, n.jsx)("div", {
                    className: (0, i.b)("shrink-0", L ? "mt-2" : "mt-12"),
                    children: w
                })]
            }) : (0, n.jsx)(u.a, {
                collapseEmptyContent: F,
                header: W,
                footer: w,
                onSubmit: null == R ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), H || R()
                },
                children: y
            }), v[24] = y, v[25] = F, v[26] = L, v[27] = w, v[28] = W, v[29] = H, v[30] = B, v[31] = R, v[32] = _) : _ = v[32], v[33] !== H || v[34] !== B || v[35] !== O || v[36] !== U || v[37] !== q || v[38] !== z || v[39] !== p || v[40] !== _ || v[41] !== h || v[42] !== V ? (b = (0, n.jsx)(s.a, {
                open: !0,
                contentOverflow: "visible",
                contentProps: h,
                shouldIgnoreClickOutside: H,
                showDialogClose: V,
                size: O,
                variant: U,
                unstyledContent: B,
                contentClassName: q,
                overlayClassName: z,
                onOpenChange: p,
                children: _
            }), v[33] = H, v[34] = B, v[35] = O, v[36] = U, v[37] = q, v[38] = z, v[39] = p, v[40] = _, v[41] = h, v[42] = V, v[43] = b) : b = v[43], b
        }
    })
};