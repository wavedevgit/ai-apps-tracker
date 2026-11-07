export const __rspack_esm_ids = [445991];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Bbed"),
            o = a("VTN2"),
            l = a("TUMj"),
            s = a("qviq");
        let c = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(570398), a.e(652500), a.e(877652), a.e(785932), a.e(365612)]).then(a.bind(a, "aNca"))).SitesPreviewContentReference);
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, d, u = (0, r.c)(19),
                    {
                        bind: f,
                        onBindInteraction: g,
                        reference: _,
                        isStreaming: h,
                        readOnly: m,
                        withTopMargin: p
                    } = e,
                    b = void 0 !== m && m,
                    v = (0, l.d)();
                if (null != _.data && "object" == typeof _.data && "preview_type" in _.data && "sites" === _.data.preview_type) {
                    let e;
                    return u[0] !== h || u[1] !== _ ? (e = (0, n.jsx)(c, {
                        reference: _,
                        isStreaming: h
                    }), u[0] = h, u[1] = _, u[2] = e) : e = u[2], e
                }
                if (u[3] !== h || u[4] !== _ || u[5] !== v?.isStreaming) {
                    i = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = o.a.safeParse(_);
                        if (!e.success) {
                            i = null;
                            break e
                        }({
                            data: t
                        } = e.data);
                        let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === h : h ?? !0)
                    }
                    u[3] = h, u[4] = _, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = i
                } else t = u[6], a = u[7], i = u[8];
                if (i !== Symbol.for("react.early_return_sentinel")) return i;
                let y = a && !0 !== t.render_immediately_during_streaming,
                    T = t.display_name ?? t.title;
                return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== g || u[13] !== b || u[14] !== y || u[15] !== T || u[16] !== v || u[17] !== p ? (d = (0, n.jsx)(s.a, {
                    bind: f,
                    onBindInteraction: g,
                    content: t.content,
                    readOnly: b,
                    isStreaming: y,
                    title: T,
                    styleMode: t.style_mode,
                    turnContext: v,
                    withTopMargin: p
                }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = g, u[13] = b, u[14] = y, u[15] = T, u[16] = v, u[17] = p, u[18] = d) : d = u[18], d
            }
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            r = a("Bbed"),
            i = a("N55g");
        let o = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(652500), a.e(877652), a.e(175515), a.e(606460)]).then(a.bind(a, "da6p"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(i.a, {})
        });
        a.d(t, {}, {
            a: o
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
            a: () => er
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
            _ = a("WdQN"),
            h = a("NDDl"),
            m = a("YAi8"),
            p = a("BolX"),
            b = a("Wf1j"),
            v = a("oyxz"),
            y = a("Sm6l"),
            T = a("q5qu"),
            I = a("OWtl"),
            E = a("dQRk"),
            w = a("TUMj"),
            x = a("ldQM");

        function A(e) {
            let t, a = (0, r.c)(3),
                {
                    contentReferenceIndex: i
                } = e,
                o = (0, w.d)(),
                l = o?.contentReferenceMessageIds?.[i] ?? o?.messageId;
            return a[0] !== l || a[1] !== o ? (t = null == o || null == l || o.shouldBlockExternalEgress ? null : (0, n.jsx)(C, {
                conversationId: o.conversationId,
                messageId: l
            }), a[0] = l, a[1] = o, a[2] = t) : t = a[2], t
        }

        function C(e) {
            let t, a, i, o, l = (0, r.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, p.y)(I.a),
                u = (0, b.a)(),
                f = (0, p.x)(x.b, s),
                g = (0, p.x)(x.e, s);
            return (0, p.x)(E._, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || g !== c ? null : (l[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), l[0] = u, l[1] = t) : t = l[1], l[2] !== s || l[3] !== d ? (a = () => d.set(x.e, s, null), l[2] = s, l[3] = d, l[4] = a) : a = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions",
                description: "Button under the current ChatGPT assistant message after its questionnaire was dismissed; clicking reopens the questions"
            }), l[5] = i) : i = l[5], l[6] !== t || l[7] !== a ? (o = (0, n.jsx)(T.a, {
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
            R = a("LtEv"),
            P = a("Kwur"),
            j = a("EUy6"),
            O = a("AyL4"),
            M = a("WAdu"),
            G = a("tSEg"),
            F = a("WFY2");
        let L = N.object({
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

        function H(e) {
            let t, a, i, o, s, c, d, u, f, g, _, h = (0, r.c)(41),
                {
                    contentReferenceIndex: m,
                    reference: v,
                    isStreaming: y,
                    readOnly: T
                } = e,
                I = (0, p.y)(G.a),
                E = (0, w.d)(),
                x = (0, b.a)(),
                A = (0, l.useContext)(M.a),
                [C, S] = (0, l.useState)(!1),
                k = (0, l.useRef)(null);
            h[0] !== v ? (t = L.safeParse(v), h[0] = v, h[1] = t) : t = h[1];
            let N = t;
            h[2] !== m || h[3] !== E ? (a = (0, w.c)(E, m), h[2] = m, h[3] = E, h[4] = a) : a = h[4];
            let H = a,
                W = H?.messageId,
                V = E?.conversationId,
                U = N.success ? N.data.data.url : void 0,
                q = !0 === T || !0 === y || null == E || E.isStreaming || !0 === E.isReadOnly || E.shouldBlockExternalEgress || null == H || null != U && "restricted" === A;
            if (h[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => k.current?.abort(), h[5] = i) : i = h[5], h[6] !== V || h[7] !== q || h[8] !== I || h[9] !== W || h[10] !== U ? (o = [V, q, I, W, U], h[6] = V, h[7] = q, h[8] = I, h[9] = W, h[10] = U, h[11] = o) : o = h[11], (0, l.useLayoutEffect)(i, o), !N.success || C) return null;
            let {
                data: z,
                icebreaker_card_actions: K
            } = N.data, {
                title: Q,
                text: Y,
                button_label: $,
                prompt: X
            } = z;
            h[12] !== K || h[13] !== q || h[14] !== H || h[15] !== E ? (s = function(e) {
                !q && E?.conversationId && !E.isTemporaryChat && null != H && K?.[e] && P.Request.safePost("/widget_server_action", {
                    requestBody: {
                        action_type: "icebreaker_beacon_card_interaction",
                        conversation_id: E.conversationId,
                        message_id: H.messageId,
                        ref_id: `${H.messageId}:${H.index}`,
                        payload: {
                            action: e
                        }
                    }
                }).catch(t => {
                    F.a.warning("Icebreaker card interaction failed", {
                        safe: {
                            action: e
                        },
                        sensitive: {
                            error: t
                        }
                    })
                })
            }, h[12] = K, h[13] = q, h[14] = H, h[15] = E, h[16] = s) : s = h[16];
            let Z = s;
            return h[17] !== x ? (c = x.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), h[17] = x, h[18] = c) : c = h[18], h[19] !== Z ? (d = () => {
                k.current?.abort(), S(!0), Z("dismiss")
            }, h[19] = Z, h[20] = d) : d = h[20], h[21] !== c || h[22] !== d ? (u = {
                ariaLabel: c,
                onClick: d
            }, h[21] = c, h[22] = d, h[23] = u) : u = h[23], h[24] !== q || h[25] !== X || h[26] !== Z || h[27] !== I || h[28] !== H || h[29] !== E || h[30] !== U ? (f = () => {
                if (!q && null != E && null != H) {
                    if (null != U) {
                        k.current?.abort();
                        let e = new AbortController;
                        k.current = e;
                        let t = (0, j.e)(I, {
                            type: "open_url",
                            payload: {
                                url: U,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: E,
                            sourceMessageId: H.messageId,
                            signal: e.signal
                        });
                        !1 !== t && (Z("click"), t.catch(D));
                        return
                    }
                    null != X && (Z("click"), (0, R.submitChatGptFollowUp)(I, {
                        conversationId: E.conversationId,
                        isTemporaryChat: E.isTemporaryChat ?? !1,
                        parentMessageId: H.messageId,
                        prompt: X
                    }).catch(B))
                }
            }, h[24] = q, h[25] = X, h[26] = Z, h[27] = I, h[28] = H, h[29] = E, h[30] = U, h[31] = f) : f = h[31], h[32] !== $ || h[33] !== q || h[34] !== f ? (g = {
                label: $,
                disabled: q,
                onClick: f
            }, h[32] = $, h[33] = q, h[34] = f, h[35] = g) : g = h[35], h[36] !== g || h[37] !== u || h[38] !== Y || h[39] !== Q ? (_ = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(O.a, {
                    variant: "beacon",
                    title: Q,
                    description: Y,
                    dismissAction: u,
                    primaryAction: g
                })
            }), h[36] = g, h[37] = u, h[38] = Y, h[39] = Q, h[40] = _) : _ = h[40], _
        }

        function B(e) {
            F.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function D(e) {
            F.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var W = a("dhxJ"),
            V = a("ZUun"),
            U = a("VB5Q");

        function q(e) {
            let t, a, i, o, s, c, d, u = (0, r.c)(33),
                {
                    contentReferenceIndex: f,
                    isStreaming: g,
                    readOnly: _,
                    reference: h,
                    renderMath: m
                } = e,
                {
                    data: b
                } = h,
                v = void 0 !== m && m,
                y = (0, w.d)(),
                T = g ?? (y?.isStreaming === !0 && (y.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                I = (0, l.useContext)(M.a),
                x = y?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== x || u[2] !== y?.contentReferenceMessageIds ? (t = null == x ? f : y?.contentReferenceMessageIds?.slice(0, f).filter(e => e === x).length, u[0] = f, u[1] = x, u[2] = y?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let A = t,
                C = y?.conversationId,
                S = x ?? y?.messageId;
            u[4] !== A || u[5] !== C || u[6] !== S ? (a = {
                conversationId: C,
                messageId: S,
                codeBlockIndex: A
            }, u[4] = A, u[5] = C, u[6] = S, u[7] = a) : a = u[7];
            let k = (0, p.x)(E.v, a);
            u[8] !== A || u[9] !== I || u[10] !== T || u[11] !== _ || u[12] !== k || u[13] !== x || u[14] !== y ? (i = y && {
                ...y,
                messageId: x ?? y.messageId,
                codeBlocks: (0, W.a)({
                    code_blocks: null == k || null == A ? void 0 : {
                        [A]: k
                    }
                }) ?? (null == x || x === y.messageId ? y.codeBlocks : void 0),
                isReadOnly: _ || y.isReadOnly,
                isStreaming: T,
                shouldBlockExternalEgress: y.shouldBlockExternalEgress || "restricted" === I
            }, u[8] = A, u[9] = I, u[10] = T, u[11] = _, u[12] = k, u[13] = x, u[14] = y, u[15] = i) : i = u[15], u[16] !== b ? (o = (0, U.a)(b), u[16] = b, u[17] = o) : o = u[17];
            let N = b.model_previewable ? "preview" : void 0;
            return u[18] !== b.language ? (s = b.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = b.language, u[19] = s) : s = u[19], u[20] !== A || u[21] !== b.content || u[22] !== b.editable || u[23] !== b.interactive || u[24] !== T || u[25] !== v || u[26] !== s || u[27] !== o || u[28] !== N ? (c = (0, n.jsx)(V.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: o,
                codeBlockIndex: A,
                codeBlockInfo: N,
                content: b.content,
                editable: b.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: T,
                isInteractive: b.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1,
                renderMath: v
            }), u[20] = A, u[21] = b.content, u[22] = b.editable, u[23] = b.interactive, u[24] = T, u[25] = v, u[26] = s, u[27] = o, u[28] = N, u[29] = c) : c = u[29], u[30] !== c || u[31] !== i ? (d = (0, n.jsx)(w.b.Provider, {
                value: i,
                children: c
            }), u[30] = c, u[31] = i, u[32] = d) : d = u[32], d
        }
        var z = a("DIH2");

        function K(e) {
            let t, a, i, o, l, s, c = (0, r.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, z.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, z.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                g = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                _ = g && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== g || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (i = g && "inline_anchor" !== d.data.presentation ? (0, z.b)(d.data.pronunciation_hint) : null, c[5] = g, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = i) : i = c[8];
            let h = i;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== h ? (o = null != h && h !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                description: "Readable fallback while pronunciation controls load or fail to load. The text placeholder is the original word or phrase, and pronunciation is its phonetic pronunciation hint. Both values come from the conversation and should be preserved; punctuation may be localized.",
                values: {
                    text: u,
                    pronunciation: h
                }
            }) : u, c[9] = u, c[10] = h, c[11] = o) : o = c[11], c[12] !== u || c[13] !== f ? (l = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = l) : l = c[14], c[15] !== _ || c[16] !== o || c[17] !== l ? (s = (0, n.jsxs)(_, {
                children: [o, l]
            }), c[15] = _, c[16] = o, c[17] = l, c[18] = s) : s = c[18], s)
        }
        var Q = a("yxxQ"),
            Y = a("VTN2");
        let $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(372772)]).then(a.bind(a, "dDjd"))).ChatGptTranslationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(851456), a.e(882323), a.e(393442), a.e(329156), a.e(829555), a.e(63583), a.e(720436), a.e(916950), a.e(255464), a.e(678608), a.e(384808)]).then(a.bind(a, "KKwe"))).DilWritingBlock, g.a),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(3487)]).then(a.bind(a, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(Q.a, {})
            }),
            ee = (0, s.a)(o.a, {
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
            et = (0, s.a)(i.e, {
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
            ea = (0, l.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(990054), a.e(566395), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(291381)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            en = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function er(e) {
            let t, a, i, o, l, s = (0, r.c)(81),
                {
                    appBlockTopMargin: c,
                    bind: d,
                    contentReferenceIndex: f,
                    isLastNodeInMessage: g,
                    isStreaming: p,
                    mapFullscreenMode: b,
                    readOnly: v,
                    reference: y,
                    renderCodeBlockMath: T
                } = e;
            if ("business_profile_starter_pills" === y.category) {
                let e;
                return s[0] !== y.data ? (e = (0, n.jsx)(h.d, {
                    data: y.data
                }), s[0] = y.data, s[1] = e) : e = s[1], e
            }
            if ("beacon_card" === y.category) {
                let e;
                return s[2] !== f || s[3] !== p || s[4] !== v || s[5] !== y ? (e = (0, n.jsx)(H, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: p,
                    readOnly: v
                }), s[2] = f, s[3] = p, s[4] = v, s[5] = y, s[6] = e) : e = s[6], e
            }
            if ("suggest_work_handoff" === y.category) {
                let e;
                return s[7] !== f || s[8] !== p || s[9] !== v ? (e = v || p ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(en, {
                        contentReferenceIndex: f
                    })
                }), s[7] = f, s[8] = p, s[9] = v, s[10] = e) : e = s[10], e
            }
            if ("health_chart" === y.category) {
                let e;
                return s[11] !== f || s[12] !== p || s[13] !== y ? (e = (0, n.jsx)(ee, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: p
                }), s[11] = f, s[12] = p, s[13] = y, s[14] = e) : e = s[14], e
            }
            if ("learning_flashcards" === y.category) {
                let e;
                return s[15] !== f || s[16] !== p || s[17] !== v || s[18] !== y ? (e = (0, n.jsx)(et, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: p,
                    readOnly: v
                }), s[15] = f, s[16] = p, s[17] = v, s[18] = y, s[19] = e) : e = s[19], e
            }
            if (S.b.safeParse(y).success) {
                let e;
                return s[20] !== f ? (e = (0, n.jsx)(A, {
                    contentReferenceIndex: f
                }), s[20] = f, s[21] = e) : e = s[21], e
            }
            if ("writing_block" === y.category) {
                let e;
                return s[22] !== f || s[23] !== g || s[24] !== p || s[25] !== v || s[26] !== y.data ? (e = (0, n.jsx)(Z, {
                    contentReferenceIndex: f,
                    data: y.data,
                    isLastNodeInMessage: g,
                    isStreaming: p,
                    readOnly: v
                }), s[22] = f, s[23] = g, s[24] = p, s[25] = v, s[26] = y.data, s[27] = e) : e = s[27], e
            }
            if ("email_preview" === y.category) {
                let e;
                s[28] !== y.data ? (e = Y.e.safeParse(y.data), s[28] = y.data, s[29] = e) : e = s[29];
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
            if ("map" === y.category) {
                let e;
                return s[33] !== f || s[34] !== p || s[35] !== b || s[36] !== y ? (e = (0, n.jsx)(m.a, {
                    contentReferenceIndex: f,
                    fullscreenMode: b,
                    isStreaming: p,
                    reference: y
                }), s[33] = f, s[34] = p, s[35] = b, s[36] = y, s[37] = e) : e = s[37], e
            }
            if ("app_block" === y.category) {
                let e;
                return s[38] !== c || s[39] !== d || s[40] !== p || s[41] !== v || s[42] !== y ? (e = (0, n.jsx)(_.a, {
                    bind: d,
                    reference: y,
                    isStreaming: p,
                    readOnly: v,
                    withTopMargin: c
                }), s[38] = c, s[39] = d, s[40] = p, s[41] = v, s[42] = y, s[43] = e) : e = s[43], e
            }
            if ("ledger_monetary_value" === y.category) {
                let e, t;
                s[44] !== y ? (e = Y.g.safeParse(y), s[44] = y, s[45] = e) : e = s[45];
                let a = e;
                return s[46] !== y || s[47] !== a.data || s[48] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(k.a, {
                    reference: y
                }), s[46] = y, s[47] = a.data, s[48] = a.success, s[49] = t) : t = s[49], t
            }
            s[50] !== y ? (t = Y.d.safeParse(y), s[50] = y, s[51] = t) : t = s[51];
            let I = t;
            if (I.success) {
                let e;
                return s[52] !== I.data || s[53] !== f || s[54] !== p || s[55] !== v || s[56] !== T ? (e = (0, n.jsx)(q, {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    readOnly: v,
                    reference: I.data,
                    renderMath: T
                }), s[52] = I.data, s[53] = f, s[54] = p, s[55] = v, s[56] = T, s[57] = e) : e = s[57], e
            }
            s[58] !== y ? (a = Y.f.safeParse(y), s[58] = y, s[59] = a) : a = s[59];
            let E = a;
            if (E.success) {
                let e;
                return s[60] !== f || s[61] !== E.data ? (e = (0, n.jsx)(ei, {
                    contentReferenceIndex: f,
                    reference: E.data
                }), s[60] = f, s[61] = E.data, s[62] = e) : e = s[62], e
            }
            s[63] !== y ? (i = Y.h.safeParse(y), s[63] = y, s[64] = i) : i = s[64];
            let w = i;
            if (w.success) {
                let e, t = !0 === p;
                return s[65] !== f || s[66] !== w.data || s[67] !== t ? (e = (0, n.jsx)($, {
                    contentReferenceIndex: f,
                    isStreaming: t,
                    reference: w.data
                }), s[65] = f, s[66] = w.data, s[67] = t, s[68] = e) : e = s[68], e
            }
            s[69] !== y ? (o = Y.i.safeParse(y), s[69] = y, s[70] = o) : o = s[70];
            let x = o;
            if (x.success) {
                let e;
                return s[71] !== f || s[72] !== p || s[73] !== x.data ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    reference: x.data
                }), s[71] = f, s[72] = p, s[73] = x.data, s[74] = e) : e = s[74], e
            }
            if (!Y.c.safeParse(y).success) {
                let e;
                return s[75] !== y ? (e = (0, n.jsx)(k.c, {
                    reference: y
                }), s[75] = y, s[76] = e) : e = s[76], e
            }
            return s[77] !== f || s[78] !== p || s[79] !== y ? (l = (0, n.jsx)(eo, {
                contentReferenceIndex: f,
                reference: y,
                isStreaming: p
            }), s[77] = f, s[78] = p, s[79] = y, s[80] = l) : l = s[80], l
        }

        function ei(e) {
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
            return o[2] !== s || o[3] !== u || o[4] !== d || o[5] !== c ? (a = d && null != ea ? (0, n.jsx)(ea, {
                contentReferenceIndex: s,
                reference: c
            }) : u, o[2] = s, o[3] = u, o[4] = d, o[5] = c, o[6] = a) : a = o[6], o[7] !== u || o[8] !== a ? (i = (0, n.jsx)(l.Suspense, {
                fallback: u,
                children: a
            }), o[7] = u, o[8] = a, o[9] = i) : i = o[9], i
        }

        function eo(e) {
            let t, a, i = (0, r.c)(6),
                [o] = (0, l.useState)(el);
            return i[0] !== e || i[1] !== o ? (t = (0, n.jsx)(J, {
                ...e,
                widgetRefSeenAtMs: o
            }), i[0] = e, i[1] = o, i[2] = t) : t = i[2], i[3] !== e.contentReferenceIndex || i[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), i[3] = e.contentReferenceIndex, i[4] = t, i[5] = a) : a = i[5], a
        }

        function el() {
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
                            defaultMessage: "Creating chart",
                            description: "Status shown while a chart is being generated in a ChatGPT response or its renderer is loading"
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
            _ = n.object({
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
            m = n.object({
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
            p = n.object({
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
                data: p.extend({
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
            y = n.discriminatedUnion("category", [m, v]);
        a.d(t, {}, {
            a: _,
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
            _ = a("WAdu"),
            h = a("tSEg"),
            m = a("Yscs"),
            p = a("vldH"),
            b = a("dQRk"),
            v = a("TUMj"),
            y = a("EUy6"),
            T = a("gsAl"),
            I = a("GnI8"),
            E = a("DIH2");

        function w(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: r,
                    context: _,
                    fallback: v,
                    renderImage: w
                } = e,
                x = (0, l.y)(h.a),
                A = (0, s.useRef)(null),
                C = (0, o.a)(A, {
                    once: !0
                }),
                S = (0, s.useContext)(c.a),
                k = (0, l.z)(d.f),
                N = (0, l.z)(d.j),
                R = (0, l.x)(b.j, _.conversationId) ?? _.conversationId,
                P = (0, l.x)(b.S, _.conversationId),
                j = (0, l.x)(b.Z, _.conversationId),
                O = (0, l.x)(T.f, S)?.id,
                M = (0, p.b)(a, {
                    messageId: _.messageId
                }),
                {
                    data: G,
                    isPending: F
                } = (0, i.a)({
                    queryKey: ["chatgpt-sandbox-image", k, N, R, P, j, O, M, r],
                    enabled: C && null != M,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == M) throw Error("Sandbox image has no download target");
                        let a = await (0, p.fetchChatGptFileBlob)({
                            conversationId: R,
                            gizmoId: P,
                            sharedConversationId: j,
                            postId: O,
                            signal: t,
                            target: null == r && "sandbox" === M.type ? (0, y.b)(x, {
                                sandboxPath: M.sandboxPath,
                                turnContext: _,
                                sourceMessageId: M.messageId
                            }) : M,
                            maxBytes: f.a
                        });
                        if (t.throwIfAborted(), !a.type.startsWith("image/")) throw Error("Sandbox image download is not an image");
                        let n = await (0, m.a)(a);
                        return t.throwIfAborted(), n
                    },
                    retry: !1,
                    staleTime: 0,
                    gcTime: 0
                });
            return null != w && (null != G || null != M && F) ? w(G, A) : (t = null != G ? (0, n.jsx)(g.b, {
                alt: (0, E.b)(a.alt) ?? "",
                downloadFileName: (0, E.b)(a.file_name) ?? void 0,
                hostId: _.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: G
            }) : null != M && F ? (0, n.jsx)(u.a, {
                "aria-label": (0, E.b)(a.alt) ?? void 0
            }) : null != r ? (0, n.jsx)(I.ChatGptFileReference, {
                contentReferenceIndex: r,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, E.b)(a.alt)
            }), (0, n.jsx)("div", {
                ref: A,
                children: t
            }))
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, r.c)(7),
                    i = (0, v.d)(),
                    o = (0, s.useContext)(_.a);
                if (null == i || i.isStreaming || i.shouldBlockExternalEgress || "restricted" === o) {
                    let t, r;
                    return a[0] !== e.reference.alt ? (t = (0, E.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (r = (0, n.jsx)(n.Fragment, {
                        children: t
                    }), a[2] = t, a[3] = r) : r = a[3], r
                }
                return a[4] !== i || a[5] !== e ? (t = (0, n.jsx)(w, {
                    ...e,
                    context: i
                }), a[4] = i, a[5] = e, a[6] = t) : t = a[6], t
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
            _ = a("xof2"),
            h = a("IDHB"),
            m = a("jAnS"),
            p = a("W5UM");
        let b = i.object({
            conversation_id: i.string().min(1).refine(e => "." !== e && ".." !== e && encodeURIComponent(e) === e),
            message_id: i.string().refine(e => e.trim().length > 0).optional().catch(void 0)
        });

        function v(e) {
            let t = e?.link_affordance;
            return {
                linkAffordance: i.enum(n.h).exclude(["UNRECOGNIZED"]).safeParse("string" == typeof t ? `CHATGPT_LINK_AFFORDANCE_${t.toUpperCase().replace(/^CHATGPT_LINK_AFFORDANCE_/,"")}` : void 0).data,
                linkIndex: i.int32().nonnegative().safeParse(e?.link_index).data,
                citationNumbers: i.array(i.int32().positive()).safeParse(e?.citation_numbers).data
            }
        }
        async function y(e, t) {
            let {
                sandboxPath: n,
                turnContext: r,
                sourceMessageId: i,
                sharedConversationId: o,
                signal: l
            } = t, s = e.get(f._, r.conversationId), _ = o ?? (s?.kind === "conversation" ? s.id : void 0), h = {
                conversationId: e.get(f.j, r.conversationId) ?? (null == _ ? null : (0, u.d)(_)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.S, r.conversationId),
                sharedConversationId: _,
                postId: s?.kind === "post" ? s.post.id : void 0,
                requestSource: "web_dil_action",
                target: T(e, {
                    sandboxPath: n,
                    turnContext: r,
                    sourceMessageId: i
                })
            };
            if (!(0, c.a)(n)) return (0, d.a)({
                ...h,
                signal: l
            });
            let {
                openChatGptFile: m
            } = await Promise.resolve().then(a.bind(a, "f2PP"));
            return m(e, {
                ...h,
                isAccessBlocked: e => (0, g.i)(e, r.conversationId),
                messageId: i,
                browserPreview: !0,
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
                l = e.get(f._, i.conversationId);
            if (l?.kind === "post") {
                let t = e.get(f.M, i.conversationId)?.[o]?.message;
                if (null != t) {
                    let e = (0, r.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, h.a)(e, i.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: o
            })
        }

        function I(e) {
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
            a: I,
            b: T,
            c: v,
            d: y,
            e: function(e, t) {
                let r, {
                    type: i,
                    openTarget: c,
                    payload: d,
                    turnContext: u,
                    sourceMessageId: g,
                    contentReferenceStartIndex: h,
                    parentContext: T,
                    signal: E,
                    onInteraction: w,
                    onLinkClick: x
                } = t;
                if ("open_conversation" === i) {
                    let t = b.safeParse(d);
                    if (t.success && !E.aborted) {
                        let a = (0, m.c)(t.data.conversation_id);
                        (0, o.d)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
                    }
                    return Promise.resolve()
                }
                if ("open_url" !== i) return !1;
                let A = d.url,
                    C = !0 === d.require_safe_url_confirmation;
                if ("string" != typeof A || !A || E.aborted || C && !/^https:\/\//i.test(A)) return Promise.resolve();
                let S = I(A);
                if (null != S) return null == u || null == g ? Promise.resolve() : y(e, {
                    sandboxPath: S,
                    turnContext: u,
                    sourceMessageId: g,
                    signal: E
                });
                try {
                    r = new URL(A, window.location.origin)
                } catch {
                    return Promise.resolve()
                }
                if ("http:" !== r.protocol && "https:" !== r.protocol) return Promise.resolve();
                u?.shouldBlockExternalEgress || w?.(), x?.();
                let k = r.toString();
                return ((0, _.g)(e, {
                    ...v(d),
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                    linkType: "search_citation" === d.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                    conversationId: e.get(f.j, u?.conversationId ?? null) ?? void 0,
                    messageId: g,
                    assistantMessageId: g,
                    turnOrdinal: (0, _.a)(e, u?.conversationId, g),
                    contentReferenceType: "dil",
                    contentReferenceStartIndex: h,
                    parentContext: T,
                    url: u?.shouldBlockExternalEgress ? void 0 : k
                }), C && !u?.safeUrls?.includes(k)) ? async function(e, t, n, r) {
                    let i = await (0, s.b)(t).catch(() => !1);
                    if (n.aborted) return;
                    if (i) return void(0, p.b)(e, t, r);
                    let {
                        ExternalLinkConfirmationDialog: o
                    } = await Promise.resolve().then(a.bind(a, "g25Y"));
                    n.aborted || (0, l.f)(e, o, {
                        href: t,
                        initiator: "markdown_link_click",
                        onOpen: () => {
                            n.aborted || (0, p.b)(e, t, r)
                        }
                    })
                }(e, k, E, c): ((0, p.b)(e, k, c), Promise.resolve())
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
            _ = a("SGsN"),
            h = a("OWtl"),
            m = a("hGH3");

        function p(e) {
            return e.stopPropagation()
        }
        let b = (0, c.f)({
                reasonHelpful: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.helpful",
                    defaultMessage: "This visual is helpful",
                    description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual shown above the response action row is useful."
                },
                reasonConfusing: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.confusing",
                    defaultMessage: "This visual is confusing",
                    description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual is difficult to understand or unclear, even if its information may be correct."
                },
                reasonBroken: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.broken",
                    defaultMessage: "This visual is broken",
                    description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual has a rendering, display, or interaction problem rather than incorrect information."
                },
                reasonNotRelevant: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.notRelevant",
                    defaultMessage: "This visual is not relevant",
                    description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual does not relate to the question they asked."
                },
                reasonIncorrectInformation: {
                    id: "chatgpt.modelWrittenDil.feedback.reason.incorrectInformation",
                    defaultMessage: "This visual has incorrect information",
                    description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when content such as numbers, labels, or facts in the visual is wrong, not when the visual is merely broken."
                },
                placeholderWithReasons: {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.withReasons",
                    defaultMessage: "Tell our team why…",
                    description: "Placeholder in the required multiline text field after the ChatGPT user selects at least one generated visual answer feedback reason. Asks for details supporting the selected reasons."
                },
                placeholderDefault: {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.default",
                    defaultMessage: "What would you like us to know?",
                    description: "Placeholder in the required multiline text field before the ChatGPT user selects a generated visual answer feedback reason. Invites any feedback about the visual."
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
                let t, a, c, y, T, I, E, w, x, A, C, S, k, N, R, P, j, O, M, G, F, L, H = (0, r.c)(58),
                    {
                        isVisible: B,
                        feedbackConfig: D,
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
                let [X, Z] = (0, o.useState)(t), [J, ee] = (0, o.useState)(!1), et = D?.reason_options ?? v;
                if (H[1] !== et || H[2] !== X) {
                    let e;
                    H[4] !== et ? (e = e => et.some(t => t.reason === e), H[4] = et, H[5] = e) : e = H[5], a = X.filter(e), H[1] = et, H[2] = X, H[3] = a
                } else a = H[3];
                let ea = a;
                if (!(void 0 === B || B)) return null;
                if (H[6] !== V ? (c = e => {
                        ee(e), e && V()
                    }, H[6] = V, H[7] = c) : c = H[7], H[8] !== W ? (y = e => {
                        if (null != e && null != W && !Q.current) return (0, m.a)(e, () => (Q.current = !0, W(), !0))
                    }, H[8] = W, H[9] = y) : y = H[9], H[10] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.button.open",
                        defaultMessage: "Give feedback",
                        description: "Short button label at the far end of the action row below a completed ChatGPT response containing a generated visual answer. Opens a popover where the user can send feedback about that visual."
                    }), H[10] = T) : T = H[10], H[11] !== y ? (I = (0, n.jsx)(f.e, {
                        asChild: !0,
                        children: (0, n.jsx)(d.a, {
                            ref: y,
                            color: "ghostSecondary",
                            "data-turn-action-width": "content",
                            size: "compact",
                            type: "button",
                            children: T
                        })
                    }), H[11] = y, H[12] = I) : I = H[12], H[13] !== Y || H[14] !== U || H[15] !== q || H[16] !== ea ? (E = e => {
                        e.preventDefault();
                        let t = Y.trim();
                        "" !== t && (U({
                            feedbackText: t,
                            feedbackReasons: ea
                        }), $(""), Z([]), ee(!1), q.get(_.f).success((0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.toast.success",
                            defaultMessage: "Your feedback has been submitted",
                            description: "Success toast shown immediately after a user sends written feedback about a generated visual answer in a ChatGPT response. The submission is best effort and does not interrupt the conversation."
                        })))
                    }, H[13] = Y, H[14] = U, H[15] = q, H[16] = ea, H[17] = E) : E = H[17], H[18] !== D ? (w = D ? D.title : (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT",
                        description: "Heading in the feedback popover opened from a completed ChatGPT response containing a generated visual answer. Invites the user to help improve those visual answers."
                    }), H[18] = D, H[19] = w) : w = H[19], H[20] !== w ? (x = (0, n.jsx)(f.d, {
                        children: w
                    }), H[20] = w, H[21] = x) : x = H[21], H[22] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, n.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.popover.description",
                            defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better.",
                            description: "Two-sentence instruction in the generated visual answer feedback popover. Encourages the ChatGPT user to provide specific positive or negative feedback."
                        })
                    }), H[22] = A) : A = H[22], H[23] !== et || H[24] !== X) {
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
                                Z(a => t ? [...a, e.reason] : a.filter(t => t !== e.reason))
                            }
                        })]
                    }, e.reason), H[26] = X, H[27] = e) : e = H[27], C = et.map(e), H[23] = et, H[24] = X, H[25] = C
                } else C = H[25];
                H[28] !== C ? (S = (0, n.jsx)("fieldset", {
                    className: "flex flex-col gap-2 text-sm",
                    children: C
                }), H[28] = C, H[29] = S) : S = H[29], H[30] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                    defaultMessage: "Additional feedback",
                    description: "Screen-reader label for the required multiline text field in the generated visual answer feedback popover. The user describes what worked or what should improve."
                }), H[30] = k) : k = H[30], H[31] !== K ? (N = (0, n.jsx)("label", {
                    className: "sr-only",
                    htmlFor: K,
                    children: k
                }), H[31] = K, H[32] = N) : N = H[32], H[33] !== z || H[34] !== ea.length ? (R = z.formatMessage(ea.length > 0 ? b.placeholderWithReasons : b.placeholderDefault), H[33] = z, H[34] = ea.length, H[35] = R) : R = H[35], H[36] === Symbol.for("react.memo_cache_sentinel") ? (P = e => $(e.target.value), H[36] = P) : P = H[36], H[37] !== Y || H[38] !== K || H[39] !== R ? (j = (0, n.jsx)(g.c, {
                    id: K,
                    autoFocus: !0,
                    autoResize: !0,
                    maxLength: 1600,
                    name: "model-written-dil-feedback",
                    placeholder: R,
                    rows: 3,
                    value: Y,
                    variant: "feedback",
                    onChange: P
                }), H[37] = Y, H[38] = K, H[39] = R, H[40] = j) : j = H[40], H[41] !== Y ? (O = Y.trim(), H[41] = Y, H[42] = O) : O = H[42];
                let en = "" === O;
                return H[43] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.submit",
                    defaultMessage: "Send feedback",
                    description: "Short button label in the generated visual answer feedback popover. Submits the required written feedback and any selected reason checkboxes."
                }), H[43] = M) : M = H[43], H[44] !== en ? (G = (0, n.jsx)(d.a, {
                    className: "self-center",
                    color: "primary",
                    disabled: en,
                    radius: "full",
                    size: "menuRow",
                    type: "submit",
                    children: M
                }), H[44] = en, H[45] = G) : G = H[45], H[46] !== x || H[47] !== S || H[48] !== N || H[49] !== j || H[50] !== G || H[51] !== E ? (F = (0, n.jsx)(f.c, {
                    className: "select-none",
                    align: "end",
                    side: "bottom",
                    variant: "menu",
                    onEscapeKeyDown: p,
                    children: (0, n.jsxs)("form", {
                        className: "flex flex-col gap-3 p-2",
                        onSubmit: E,
                        children: [x, A, S, N, j, G]
                    })
                }), H[46] = x, H[47] = S, H[48] = N, H[49] = j, H[50] = G, H[51] = E, H[52] = F) : F = H[52], H[53] !== J || H[54] !== F || H[55] !== c || H[56] !== I ? (L = (0, n.jsxs)(f.a, {
                    open: J,
                    onOpenChange: c,
                    children: [I, F]
                }), H[53] = J, H[54] = F, H[55] = c, H[56] = I, H[57] = L) : L = H[57], L
            }
        })
    }),
    ciVz: (function(e, t, a) {
        var n = a("BolX"),
            r = a("DNHP"),
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
                } = t(o.f);
                return a || r || n || "chatgpt" !== i || null == l ? null : (0, c.f)(l) || (0, d.b)(l)
            }),
            _ = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, a = t(i.m);
                return !a.authLoading && !a.accountLoading && (null == a.authMethod || "chatgpt" === a.authMethod && null != a.plan && (!(0, d.b)(a.plan) || (0, r.si)(a.email ?? null)))
            }),
            h = (0, n.v)(s.a, e => null),
            m = (0, n.v)(s.a, e => "unknown"),
            p = (0, n.u)(s.a, !1);
        a.d(t, {}, {
            a: _,
            b: p,
            c: g,
            d: f,
            e: h,
            f: m
        })
    }),
    O7AW: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("EA6X"),
            o = a("D015"),
            l = a("Nl8C"),
            s = a("BolX"),
            c = a("AuIy"),
            d = a("zd8w"),
            u = a("ASxG"),
            f = a("Cslg"),
            g = a("WAdu"),
            _ = a("yGJW"),
            h = a("OWtl"),
            m = a("OMIV"),
            p = a("Kwur"),
            b = a("dQRk"),
            v = a("TUMj"),
            y = a("gKmr"),
            T = a("xof2"),
            I = a("CMlo"),
            E = a("ciVz");
        let w = (0, s.d)(h.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null == e || !a(E.a) || !a(m.d, "1205965498") || null != a(b._, e.conversationId)) return !1;
            let n = a(b.M, e.conversationId)?.[e.messageId]?.message;
            return null != n && (0, c.r)(n.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && n.metadata?.model_dil_v2 == null && (0, c.r)((0, c.r)(n.metadata?.model_dil)?.dil)?.type == null && (n.metadata?.is_complete ?? "in_progress" !== n.status) === !0
        });

        function x(e) {
            let t, a, l, c, u, g = (0, r.c)(33),
                {
                    conversationId: m,
                    messageId: b,
                    widgetRefId: y,
                    widgetName: E,
                    widgetType: w,
                    isGenui: x,
                    dilUrl: S,
                    dilVersion: k,
                    metadata: N,
                    startIndex: R,
                    feedbackConfig: P
                } = e,
                j = void 0 !== x && x,
                O = (0, s.y)(h.a),
                M = (0, d.useRef)(null),
                G = (0, v.d)();
            g[0] !== m || g[1] !== j || g[2] !== b || g[3] !== O || g[4] !== R || g[5] !== G || g[6] !== E || g[7] !== w ? (t = (e, t, a) => {
                try {
                    let n = {
                        actionType: "feedback_button" === e ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: b,
                        contentReferenceStartIndex: null == R ? void 0 : (0, o.a)(R),
                        contentReferenceType: "dil",
                        conversationId: m,
                        feedbackReasons: t?.length ? t : void 0,
                        isGenui: j,
                        messageId: b,
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: G ? (0, T.a)(O, G.conversationId, b) : void 0,
                        widgetActionTarget: e,
                        widgetAffordance: "feedback_form" === e ? i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON : i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON,
                        widgetName: E,
                        widgetType: w
                    };
                    (void 0 === a || a) && "feedback_button" !== e && (0, T.h)(O, n), (0, _.a)(O, i.j, n)
                } catch {}
            }, g[0] = m, g[1] = j, g[2] = b, g[3] = O, g[4] = R, g[5] = G, g[6] = E, g[7] = w, g[8] = t) : t = g[8];
            let F = t;
            return g[9] !== j || g[10] !== F || g[11] !== G ? (a = j || null == G || !1 === G.trackShownImpressions ? void 0 : () => F("feedback_button"), g[9] = j, g[10] = F, g[11] = G, g[12] = a) : a = g[12], g[13] !== F || g[14] !== O ? (l = () => {
                M.current = O.get(f.m), F("feedback_panel")
            }, g[13] = F, g[14] = O, g[15] = l) : l = g[15], g[16] !== m || g[17] !== S || g[18] !== k || g[19] !== F || g[20] !== b || g[21] !== N || g[22] !== O || g[23] !== E || g[24] !== y || g[25] !== w ? (c = e => {
                let {
                    feedbackText: t,
                    feedbackReasons: a
                } = e, n = O.get(f.m), r = null != M.current && M.current.userId === n.userId && M.current.authenticatedAccountId === n.authenticatedAccountId && M.current.authMethod === n.authMethod;
                F("feedback_form", a, r), r && p.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "widget_feedback",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: m,
                                message_id: b
                            },
                            widget_feedback: {
                                feedback: t,
                                checked_reasons: a.length > 0 ? a : void 0,
                                widget_name: E,
                                widget_type: w,
                                widget_ref_id: y,
                                dil_version: k
                            }
                        }
                    }
                }).catch(C), p.Request.safePost("/conversation/message/genui/feedback", {
                    requestBody: {
                        checked_reasons: a.length > 0 ? a : void 0,
                        conversation_id: m,
                        dil_url: S,
                        dil_version: k,
                        feedback: t,
                        language: globalThis.navigator?.language ?? "en-US",
                        message_id: b,
                        metadata: N,
                        timestamp_client: Date.now(),
                        user_agent: globalThis.navigator?.userAgent || void 0,
                        widget_name: E,
                        widget_ref_id: y,
                        widget_type: w
                    }
                }).catch(A)
            }, g[16] = m, g[17] = S, g[18] = k, g[19] = F, g[20] = b, g[21] = N, g[22] = O, g[23] = E, g[24] = y, g[25] = w, g[26] = c) : c = g[26], g[27] !== P || g[28] !== a || g[29] !== l || g[30] !== c || g[31] !== y ? (u = (0, n.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, n.jsx)(I.a, {
                    feedbackConfig: P,
                    onImpression: a,
                    onOpen: l,
                    onSubmit: c
                }, y)
            }), g[27] = P, g[28] = a, g[29] = l, g[30] = c, g[31] = y, g[32] = u) : u = g[32], u
        }

        function A() {}

        function C() {}
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, o, f, _, h, m, p, T, I, E, A, C, S = (0, r.c)(46),
                    {
                        contentReferenceIndex: k,
                        reference: N
                    } = e,
                    R = (0, v.d)(),
                    P = (0, d.useContext)(g.a);
                S[0] !== k || S[1] !== R ? (t = (0, v.c)(R, k), S[0] = k, S[1] = R, S[2] = t) : t = S[2];
                let j = t;
                S[3] !== j || S[4] !== R ? (a = null != R && null != j ? {
                    conversationId: R.conversationId,
                    messageId: j.messageId
                } : null, S[3] = j, S[4] = R, S[5] = a) : a = S[5];
                let O = a,
                    M = (0, s.x)(w, O),
                    G = (0, s.x)(b.j, R?.conversationId ?? null);
                if (!M || null == R || null == j || !G || !0 === N.hide_widget_feedback || "custom_agent_run" === N.name || R.isReadOnly || R.shouldBlockExternalEgress || "restricted" === P) return null;
                if (S[6] !== N.dil) {
                    let e = (0, c.r)(N.dil);
                    i = u.string().safeParse(e?.type), S[6] = N.dil, S[7] = i
                } else i = S[7];
                let F = i.data;
                if (S[8] !== G || S[9] !== N.dil || S[10] !== N.dil_url || S[11] !== N.dil_version || S[12] !== N.name || S[13] !== N.start_idx || S[14] !== j.index || S[15] !== j.messageId || S[16] !== F) {
                    let e, t, a, n, r = y.c.safeParse(N.dil).data;
                    S[27] !== N.name ? (e = u.string().safeParse(N.name), S[27] = N.name, S[28] = e) : e = S[28];
                    let i = e.data,
                        s = `${j.messageId}:${j.index}`;
                    S[29] !== N.start_idx ? (t = u.number().safeParse(N.start_idx), S[29] = N.start_idx, S[30] = t) : t = S[30], f = t.data, o = x, m = G, p = j.messageId, T = s, I = i, E = F, S[31] !== N.dil_url ? (a = u.string().safeParse(N.dil_url), S[31] = N.dil_url, S[32] = a) : a = S[32], A = a.data, S[33] !== N.dil_version ? (n = u.string().safeParse(N.dil_version), S[33] = N.dil_version, S[34] = n) : n = S[34], _ = n.data, h = (0, l.g)(r?.appData), S[8] = G, S[9] = N.dil, S[10] = N.dil_url, S[11] = N.dil_version, S[12] = N.name, S[13] = N.start_idx, S[14] = j.index, S[15] = j.messageId, S[16] = F, S[17] = o, S[18] = f, S[19] = _, S[20] = h, S[21] = m, S[22] = p, S[23] = T, S[24] = I, S[25] = E, S[26] = A
                } else o = S[17], f = S[18], _ = S[19], h = S[20], m = S[21], p = S[22], T = S[23], I = S[24], E = S[25], A = S[26];
                return S[35] !== o || S[36] !== f || S[37] !== _ || S[38] !== h || S[39] !== m || S[40] !== p || S[41] !== T || S[42] !== I || S[43] !== E || S[44] !== A ? (C = (0, n.jsx)(o, {
                    conversationId: m,
                    messageId: p,
                    widgetRefId: T,
                    widgetName: I,
                    widgetType: E,
                    dilUrl: A,
                    dilVersion: _,
                    metadata: h,
                    startIndex: f
                }), S[35] = o, S[36] = f, S[37] = _, S[38] = h, S[39] = m, S[40] = p, S[41] = T, S[42] = I, S[43] = E, S[44] = A, S[45] = C) : C = S[45], C
            },
            b: x
        })
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
                created: m,
                onView: p,
                updateFavorite: b
            } = t, v = () => e.get(i.f) === e.value.accountId && e.get(i.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(l.a),
                T = t => {
                    v() && (_(e, a, n, "toast_action", f), p?.((0, d.b)(t, "banner")))
                },
                I = r,
                E = null != g || !u.isFavorited,
                w = null == g || !u.isFavorited,
                x = E ? "save" : "unsave",
                A = performance.now();
            if (w) {
                _(e, a, n, x, f);
                let t = null != (I = await b(E, null == g, null == p ? void 0 : () => T("/library?tab=favorites")));
                if (!v() || (h(e, {
                        eventType: t ? E ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : E ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: x,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - A : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != g) {
                    try {
                        if (null == I) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, I, g.id)
                    } catch {
                        v() && e.get(o.f).danger(y.formatMessage({
                            id: "library.favoriteFolder.moveFailed",
                            defaultMessage: "Could not add to folder",
                            description: "Error toast when the saved image could not be moved into the selected Library folder. The image remains in Favorites"
                        }), {
                            errorAnalytics: {
                                toastId: "library.favoriteFolder.moveFailed"
                            }
                        });
                        return
                    }
                    if (!v()) return;
                    (0, c.a)(e), e.get(o.f).success(m ? y.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created",
                        description: "Success toast after creating a Library folder and moving the saved image into it. folderName is the user's folder name"
                    }, {
                        folderName: g.name
                    }) : y.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}",
                        description: "Success toast after moving the saved image into a Library folder. folderName is the user's folder name"
                    }, {
                        folderName: g.name
                    }), {
                        primaryAction: {
                            label: y.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View",
                                description: "Toast action that opens the Library folder which now contains the saved image"
                            }),
                            onClick: () => T(`/library/d/${encodeURIComponent(g.id)}`)
                        }
                    })
                }
                w && E && h(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: x,
                    clickToSuccessToastMs: performance.now() - A
                })
            }
        }

        function _(e, t, a, r, i) {
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
            (0, u.a)(e, r.ib, {
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
            _ = a("Qed5"),
            h = a("VJXV"),
            m = a("mF5c"),
            p = a("ejvO"),
            b = a("lc3A"),
            v = a("k2zB");

        function y(e) {
            let t, a, c, h, y = (0, r.c)(49),
                {
                    source: T,
                    sources: I,
                    conversationId: E,
                    messageId: w,
                    surface: x,
                    presentation: A,
                    joined: C
                } = e,
                S = void 0 !== C && C,
                k = (0, o.y)(g.c),
                N = (0, s._)(),
                R = (0, l.a)();
            y[0] !== T ? (t = (0, p.a)(T), y[0] = T, y[1] = t) : t = y[1];
            let P = t,
                {
                    data: j,
                    isError: O
                } = (0, o.x)(p.d, I),
                M = (0, o.x)(p.b, P),
                G = j?.[P];
            y[2] !== E || y[3] !== O || y[4] !== P || y[5] !== w || y[6] !== N || y[7] !== k || y[8] !== T || y[9] !== I || y[10] !== G || y[11] !== x ? (a = async (e, t) => {
                null == G || O || k.get(p.b, P) || (k.set(p.b, P, !0), await (0, m.b)(k, {
                    conversationId: E,
                    messageId: w,
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
                    updateFavorite: (e, t, a) => (0, p.e)(k, {
                        source: T,
                        previous: G,
                        save: e,
                        surface: x,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await k.query.invalidate(p.d, I)
                }).finally(() => {
                    k.set(p.b, P, !1)
                }))
            }, y[2] = E, y[3] = O, y[4] = P, y[5] = w, y[6] = N, y[7] = k, y[8] = T, y[9] = I, y[10] = G, y[11] = x, y[12] = a) : a = y[12];
            let F = a;
            if (O) return null;
            if ("menuItem" === A) {
                let e, t, a = G?.favorite_id != null,
                    r = M || null == G;
                return y[13] !== F ? (e = () => void F(), y[13] = F, y[14] = e) : e = y[14], y[15] !== a || y[16] !== r || y[17] !== e ? (t = (0, n.jsx)(_.a, {
                    isFavorited: a,
                    disabled: r,
                    onSelect: e
                }), y[15] = a, y[16] = r, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === A) {
                let e, t, a, r, o, l = G?.favorite_id != null;
                y[19] !== R ? (e = R.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), y[19] = R, y[20] = e) : e = y[20];
                let s = e;
                if (null == G) {
                    let e;
                    y[21] !== R ? (e = R.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status",
                        description: "Accessible status for a bookmark while checking whether the item is already saved"
                    }), y[21] = R, y[22] = e) : e = y[22], s = e
                } else if (l) {
                    let e;
                    y[23] !== R ? (e = R.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), y[23] = R, y[24] = e) : e = y[24], s = e
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
                B = G?.directory_id ?? null;
            return y[39] !== F ? (c = () => void F(), y[39] = F, y[40] = c) : c = y[40], y[41] !== M || y[42] !== S || y[43] !== L || y[44] !== H || y[45] !== B || y[46] !== c || y[47] !== F ? (h = (0, n.jsx)(f.a, {
                isSaved: L,
                isBusy: M,
                isCheckingStatus: H,
                selectedFolderId: B,
                joined: S,
                visibility: "hover",
                onToggleFavorite: c,
                onSelectFolder: F
            }), y[41] = M, y[42] = S, y[43] = L, y[44] = H, y[45] = B, y[46] = c, y[47] = F, y[48] = h) : h = y[48], h
        }
        a.d(t, {}, {
            SearchImageFavorite: function(e) {
                let t, a, i, l, s = (0, r.c)(11),
                    d = (0, o.z)(h.d),
                    u = (0, o.z)(c.l),
                    f = (0, o.z)(c.f),
                    _ = (0, o.z)(c.k);
                return d && "allowed" === u.status && null != f && null != _ ? (s[0] !== f || s[1] !== _ ? (t = {
                    accountId: f,
                    userId: _
                }, s[0] = f, s[1] = _, s[2] = t) : t = s[2], s[3] !== e.source ? (a = (0, p.a)(e.source), s[3] = e.source, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (i = (0, n.jsx)(y, {
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
        let _ = new WeakMap,
            h = (0, l.v)(u.c, e => !1);

        function m(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let p = (0, l.q)(u.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, i = [...new Map(e.map(e => [m(e), e])).values()], l = a(u.q);
            return {
                queryKey: ["library-image-favorites-status", n.value.accountId, n.value.userId, i.map(m).sort()],
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
                            o = _.get(n.queryClient);
                        null == o && (o = new Map, _.set(n.queryClient, o));
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
                                    return [m(a), n[t]]
                                }))
                            },
                            resolver: (e, t) => {
                                let {
                                    source: a,
                                    signal: n
                                } = t;
                                n.throwIfAborted();
                                let r = e.get(m(a));
                                if (null == r) throw Error("Incomplete image favorite status response.");
                                return r
                            }
                        }), o.set(e, s));
                        let c = await s.fetch({
                            source: i[0],
                            signal: t
                        });
                        return {
                            [m(i[0])]: c
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
                        return e.map((e, t) => [m(e), a[t]])
                    }))).flat())
                }
            }
        });
        a.d(t, {}, {
            a: m,
            b: h,
            c: function(e) {
                let t = e.searchResult;
                return t?.contentSrc == null || t.isProxied || !/^https?:/i.test(t.contentSrc) ? null : {
                    content_url: t.contentSrc,
                    original_content_url: t.originalSrc
                }
            },
            d: p,
            e: async function(e, t) {
                let a, {
                        source: r,
                        previous: i,
                        save: o,
                        surface: l,
                        showToast: _,
                        onView: h
                    } = t,
                    p = () => e.get(s.f) === e.value.accountId && e.get(s.k) === e.value.userId,
                    b = m(r);
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
                        p() && ((0, g.a)(e, n.a, {
                            ...t,
                            result: "success",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                        }), _ && (0, f.f)(e, {
                            isFavorited: !0,
                            onView: h
                        }))
                    } catch {
                        return p() && ((0, g.a)(e, n.a, {
                            ...t,
                            result: "error",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR"
                        }), e.get(c.f).danger(e.get(d.a).formatMessage({
                            id: "library.favorites.failed",
                            defaultMessage: "Could not update favorite",
                            description: "Error when saving or removing a Library favorite fails; the item remains available for retry"
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
                            showToast: _
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
    aPUc: (function(e, t, a) {
        a.d(t, {
            a: () => A
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("ozm1"),
            o = a("FS1B"),
            l = a("slpy"),
            s = a("BolX"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("oyxz"),
            f = a("Cslg"),
            g = a("Sm6l"),
            _ = a("HOLv"),
            h = a("SGsN"),
            m = a("Yq7Q"),
            p = a("yGJW"),
            b = a("OWtl"),
            v = a("FGv0"),
            y = a("hZax"),
            T = a("RiLw"),
            I = a("eShZ"),
            E = a("Kwur");

        function w(e, t, a) {
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
        var x = a("TgMd");

        function A(e) {
            let t, a, A, R, P, j, O, M, G, F, L, H, B, D, W, V, U, q, z, K, Q, Y = (0, r.c)(98),
                {
                    source: $,
                    conversationId: X,
                    messageId: Z,
                    imageIndex: J,
                    contentReferenceStartIndex: ee,
                    surface: et,
                    lightboxPresentation: ea,
                    imageRef: en,
                    imageReady: er,
                    joined: ei
                } = e,
                eo = void 0 === ea ? "classic" : ea,
                el = void 0 === er || er,
                es = void 0 !== ei && ei,
                ec = (0, s.y)(b.a),
                ed = (0, s.z)(f.f),
                eu = (0, s.z)(f.k),
                ef = (0, d.a)();
            Y[0] !== ed || Y[1] !== X || Y[2] !== Z || Y[3] !== $.content_url || Y[4] !== eu ? (t = null != ed && null != eu && null != X && null != Z && /^https?:\/\//i.test($.content_url), Y[0] = ed, Y[1] = X, Y[2] = Z, Y[3] = $.content_url, Y[4] = eu, Y[5] = t) : t = Y[5];
            let eg = t,
                e_ = !eg;
            Y[6] !== e_ ? (a = {
                disableExposureLog: e_
            }, Y[6] = e_, Y[7] = a) : a = Y[7];
            let eh = (0, y.m)("274234392", a);
            Y[8] !== eh ? (A = eh.get("placement", "off"), Y[8] = eh, Y[9] = A) : A = Y[9];
            let em = A,
                ep = "fullscreen" === em || "inline_and_fullscreen" === em ? em : "off",
                eb = eg && ("inline_and_fullscreen" === ep || "fullscreen" === ep && "image_lightbox" === et),
                ev = (0, c.useRef)(null),
                ey = (0, c.useRef)(null);
            Y[10] !== ee || Y[11] !== X || Y[12] !== J || Y[13] !== Z || Y[14] !== $.content_url ? (R = [X, Z, ee, J, $.content_url], Y[10] = ee, Y[11] = X, Y[12] = J, Y[13] = Z, Y[14] = $.content_url, Y[15] = R) : R = Y[15];
            let eT = R.join(":"),
                eI = (0, c.useRef)(null);
            Y[16] === Symbol.for("react.memo_cache_sentinel") ? (P = new Set, Y[16] = P) : P = Y[16];
            let eE = (0, c.useRef)(P),
                [ew, ex] = (0, c.useState)(!1),
                eA = "image_tile" === et ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            Y[17] !== J ? (j = null == J || J < 0 ? void 0 : (0, i.d)(J), Y[17] = J, Y[18] = j) : j = Y[18], Y[19] !== ee ? (O = null == ee ? void 0 : (0, i.b)(ee), Y[19] = ee, Y[20] = O) : O = Y[20], Y[21] !== ep || Y[22] !== et || Y[23] !== j || Y[24] !== O ? (M = {
                surface: et,
                placement: ep,
                imageIndex: j,
                contentReferenceStartIndex: O
            }, Y[21] = ep, Y[22] = et, Y[23] = j, Y[24] = O, Y[25] = M) : M = Y[25], Y[26] !== X || Y[27] !== Z || Y[28] !== eA || Y[29] !== M ? (G = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eA,
                conversationId: X,
                messageId: Z,
                imageMetadata: M
            }, Y[26] = X, Y[27] = Z, Y[28] = eA, Y[29] = M, Y[30] = G) : G = Y[30];
            let eC = G;
            Y[31] !== ed || Y[32] !== eC || Y[33] !== ec || Y[34] !== eu ? (F = (e, t, a) => {
                ec.get(f.f) === ed && ec.get(f.k) === eu && (0, p.a)(ec, o.h, {
                    ...eC,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, Y[31] = ed, Y[32] = eC, Y[33] = ec, Y[34] = eu, Y[35] = F) : F = Y[35];
            let eS = F,
                ek = (0, c.useEffectEvent)(eS);
            if (Y[36] === Symbol.for("react.memo_cache_sentinel") ? (L = () => () => {
                    ev.current?.abort()
                }, H = [], Y[36] = L, Y[37] = H) : (L = Y[36], H = Y[37]), (0, c.useEffect)(L, H), Y[38] !== ed || Y[39] !== ee || Y[40] !== X || Y[41] !== ek || Y[42] !== eg || Y[43] !== J || Y[44] !== el || Y[45] !== en || Y[46] !== Z || Y[47] !== ep || Y[48] !== eb || Y[49] !== $.content_url || Y[50] !== et || Y[51] !== eu ? (B = () => {
                    let e = eI.current;
                    if (!eg || null == e) return;
                    let t = en?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [ed, eu, $.content_url, X, Z, ee, J, et, ep].join(":"),
                        n = crypto.randomUUID(),
                        r = null == t || eE.current.has(a) ? void 0 : w(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return el && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            eE.current.add(a), ek("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        i = !eb || eE.current.has(`${a}:control`) ? void 0 : w(e, N, () => {
                            eE.current.add(`${a}:control`), ek("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        r?.(), i?.()
                    }
                }, Y[38] = ed, Y[39] = ee, Y[40] = X, Y[41] = ek, Y[42] = eg, Y[43] = J, Y[44] = el, Y[45] = en, Y[46] = Z, Y[47] = ep, Y[48] = eb, Y[49] = $.content_url, Y[50] = et, Y[51] = eu, Y[52] = B) : B = Y[52], Y[53] !== ed || Y[54] !== ee || Y[55] !== X || Y[56] !== eg || Y[57] !== J || Y[58] !== el || Y[59] !== en || Y[60] !== Z || Y[61] !== ep || Y[62] !== eb || Y[63] !== $.content_url || Y[64] !== et || Y[65] !== eu ? (D = [ed, eu, $.content_url, et, ep, eb, eg, en, X, Z, J, ee, el], Y[53] = ed, Y[54] = ee, Y[55] = X, Y[56] = eg, Y[57] = J, Y[58] = el, Y[59] = en, Y[60] = Z, Y[61] = ep, Y[62] = eb, Y[63] = $.content_url, Y[64] = et, Y[65] = eu, Y[66] = D) : D = Y[66], (0, c.useEffect)(B, D), !eg) return null;
            Y[67] !== ef ? (W = ef.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image",
                description: "Short tooltip and accessible label for a web-search image Share button on an image tile or fullscreen viewer. Copies a public ChatGPT link containing only the selected image."
            }), Y[67] = ef, Y[68] = W) : W = Y[68];
            let eN = W;
            Y[69] !== ed || Y[70] !== X || Y[71] !== eS || Y[72] !== eT || Y[73] !== ef || Y[74] !== Z || Y[75] !== ec || Y[76] !== $.content_url || Y[77] !== eu ? (V = e => {
                let t;
                if (e.stopPropagation(), null != ev.current || null == ed || null == eu || null == X || null == Z) return;
                let a = new AbortController;
                ev.current = a, ex(!0);
                let n = () => {
                        if (a.signal.throwIfAborted(), ec.get(f.f) !== ed || ec.get(f.k) !== eu) throw new DOMException("The active account changed", "AbortError")
                    },
                    r = crypto.randomUUID(),
                    o = crypto.randomUUID(),
                    l = ey.current?.accountId === ed && ey.current?.userId === eu && ey.current.imageKey === eT ? ey.current : null,
                    s = l?.shareId,
                    c = () => ({
                        attemptId: o,
                        shareId: s,
                        usedExistingLink: null != l
                    }),
                    d = performance.now();
                eS("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", r, c()), eS("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", r, c());
                let u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    g = null == l ? (async () => {
                        n();
                        let e = await E.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: X,
                                    message_id: Z,
                                    content_url: $.content_url
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
                        return ey.current = {
                            accountId: ed,
                            userId: eu,
                            imageKey: eT,
                            shareId: s,
                            link: r
                        }, r
                    })().catch(e => {
                        let a = e instanceof I.FetchError && "network" !== e.errorKind ? e.explicitResponseStatus : void 0;
                        throw null != a && Number.isInteger(a) && a >= 100 && a <= 599 && (t = (0, i.b)(a)), u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(l.link).then(e => (n(), e));
                g.catch(k);
                let _ = (0, v.a)(g, a.signal);
                _.catch(S), (async () => {
                    try {
                        await g, await _.then(C), n(), eS("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", r, {
                            ...c(),
                            durationMs: performance.now() - d
                        }), ec.get(h.f).success(ef.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied",
                            description: "Success toast after a public link to one web-search image is copied to the clipboard."
                        }))
                    } catch (n) {
                        let e = ec.get(f.f) !== ed || ec.get(f.k) !== eu || a.signal.aborted || n instanceof DOMException && "AbortError" === n.name;
                        eS(e ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", r, {
                            ...c(),
                            failureReason: e ? void 0 : u,
                            httpStatus: e ? void 0 : t,
                            durationMs: performance.now() - d
                        }), e || ec.get(h.f).danger(ef.formatMessage({
                            id: "chatgpt.webImageSharing.failed",
                            defaultMessage: "Could not share image. Please try again.",
                            description: "Error toast when creating or copying a web-search image link fails. The user can retry the Share action."
                        }), {
                            errorAnalytics: {
                                toastId: "web_image_share_failed"
                            }
                        })
                    }
                })().finally(() => {
                    a.signal.aborted || (ev.current = null, ex(!1))
                })
            }, Y[69] = ed, Y[70] = X, Y[71] = eS, Y[72] = eT, Y[73] = ef, Y[74] = Z, Y[75] = ec, Y[76] = $.content_url, Y[77] = eu, Y[78] = V) : V = Y[78], Y[79] !== ew || Y[80] !== eN || Y[81] !== V ? (U = {
                type: "button",
                "aria-label": eN,
                "aria-busy": ew,
                loading: ew,
                onClick: V
            }, Y[79] = ew, Y[80] = eN, Y[81] = V, Y[82] = U) : U = Y[82];
            let eR = U;
            Y[83] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, n.jsx)(u.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share",
                description: "Label for the fullscreen web-search image viewer button that copies a public ChatGPT link containing only the selected image."
            }), Y[83] = q) : q = Y[83];
            let eP = q;
            if ("image_lightbox" === et) {
                let e;
                Y[84] !== eR || Y[85] !== eo ? (e = "overlay" === eo ? (0, n.jsx)(T.a, {
                    ...eR
                }) : (0, n.jsxs)(g.a, {
                    ...eR,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, n.jsx)(_.a, {
                        asset: x.a
                    }), eP]
                }), Y[84] = eR, Y[85] = eo, Y[86] = e) : e = Y[86], z = e
            } else {
                let e, t;
                Y[87] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(_.a, {
                    asset: x.a
                }), Y[87] = e) : e = Y[87], Y[88] !== eR || Y[89] !== es ? (t = (0, n.jsx)(m.a, {
                    ...eR,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    joined: es,
                    children: e
                }), Y[88] = eR, Y[89] = es, Y[90] = t) : t = Y[90], z = t
            }
            let ej = "inline-flex";
            return "image_tile" === et && (ej = es ? eb ? "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:w-9 group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:w-9 group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:w-9 group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:w-9 group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:w-9 [@media(hover:none)]:opacity-100" : "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0" : "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), Y[91] !== z || Y[92] !== eN || Y[93] !== eb ? (K = eb ? (0, n.jsx)(l.a, {
                content: eN,
                children: z
            }) : null, Y[91] = z, Y[92] = eN, Y[93] = eb, Y[94] = K) : K = Y[94], Y[95] !== ej || Y[96] !== K ? (Q = (0, n.jsx)("span", {
                ref: eI,
                className: ej,
                children: K
            }), Y[95] = ej, Y[96] = K, Y[97] = Q) : Q = Y[97], Q
        }

        function C(e) {
            if (!e) throw Error("Clipboard write failed")
        }

        function S() {}

        function k() {}

        function N() {
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
                        isFavorited: _,
                        disabled: h,
                        onSelect: m
                    } = e;
                return g[0] !== _ ? (t = (0, n.jsx)(l.b, {
                    icon: {
                        assets: _ ? {
                            16: s.a,
                            20: c.a
                        } : {
                            16: d.a,
                            20: u.a
                        }
                    }
                }), g[0] = _, g[1] = t) : t = g[1], g[2] !== _ ? (a = _ ? (0, n.jsx)(i.a, {
                    id: "library.favorites.remove",
                    defaultMessage: "Remove from Favorites",
                    description: "Action in a Library item menu or preview to remove the item from Favorites"
                }) : (0, n.jsx)(i.a, {
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), g[2] = _, g[3] = a) : a = g[3], g[4] !== h || g[5] !== m || g[6] !== t || g[7] !== a ? (f = (0, n.jsx)(o.c.Item, {
                    disabled: h,
                    leftIcon: t,
                    onSelect: m,
                    children: a
                }), g[4] = h, g[5] = m, g[6] = t, g[7] = a, g[8] = f) : f = g[8], f
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
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(894924), a.e(896173)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(894924), a.e(372593)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(226913), a.e(317359)]).then(a.bind(a, "h3EV"))).InlineFlashcards
            }
        })
    })
};