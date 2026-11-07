export const __rspack_esm_ids = [445991];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Bbed"),
            l = a("VTN2"),
            o = a("TUMj"),
            s = a("qviq");
        let c = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(570398), a.e(652500), a.e(877652), a.e(785932), a.e(365612)]).then(a.bind(a, "aNca"))).SitesPreviewContentReference);
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, d, u = (0, r.c)(19),
                    {
                        bind: f,
                        onBindInteraction: g,
                        reference: _,
                        isStreaming: m,
                        readOnly: h,
                        withTopMargin: p
                    } = e,
                    b = void 0 !== h && h,
                    v = (0, o.d)();
                if (null != _.data && "object" == typeof _.data && "preview_type" in _.data && "sites" === _.data.preview_type) {
                    let e;
                    return u[0] !== m || u[1] !== _ ? (e = (0, n.jsx)(c, {
                        reference: _,
                        isStreaming: m
                    }), u[0] = m, u[1] = _, u[2] = e) : e = u[2], e
                }
                if (u[3] !== m || u[4] !== _ || u[5] !== v?.isStreaming) {
                    i = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = l.a.safeParse(_);
                        if (!e.success) {
                            i = null;
                            break e
                        }({
                            data: t
                        } = e.data);
                        let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === m : m ?? !0)
                    }
                    u[3] = m, u[4] = _, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = i
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
        let l = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(652500), a.e(877652), a.e(175515), a.e(294450)]).then(a.bind(a, "da6p"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(i.a, {})
        });
        a.d(t, {}, {
            a: l
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
                    l = t.replace(/(?:\r\n|[\r\n])$/, ""),
                    o = Math.max(l.lastIndexOf("\n"), l.lastIndexOf("\r")) + 1,
                    s = /^ {0,3}(`+|~+)[ \t]*$/.exec(l.slice(o))?.[1];
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
            l = a("yTnN"),
            o = a("zd8w"),
            s = a("Bbed"),
            c = a("DcH0"),
            d = a("nUGc");

        function u(e) {
            let t, a = (0, r.c)(2),
                {
                    reference: i
                } = e,
                l = (0, o.useContext)(d.a) ? i.alt ?? "••••" : i.data.value;
            return a[0] !== l ? (t = (0, n.jsx)("span", {
                className: "whitespace-nowrap tabular-nums",
                children: l
            }), a[0] = l, a[1] = t) : t = a[1], t
        }
        var f = a("jZDY"),
            g = a("HAEQ"),
            _ = a("WdQN"),
            m = a("NDDl"),
            h = a("YAi8"),
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
                l = (0, w.d)(),
                o = l?.contentReferenceMessageIds?.[i] ?? l?.messageId;
            return a[0] !== o || a[1] !== l ? (t = null == l || null == o || l.shouldBlockExternalEgress ? null : (0, n.jsx)(C, {
                conversationId: l.conversationId,
                messageId: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function C(e) {
            let t, a, i, l, o = (0, r.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, p.y)(I.a),
                u = (0, b.a)(),
                f = (0, p.x)(x.b, s),
                g = (0, p.x)(x.e, s);
            return (0, p.x)(E._, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || g !== c ? null : (o[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== d ? (a = () => d.set(x.e, s, null), o[2] = s, o[3] = d, o[4] = a) : a = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions",
                description: "Button under the current ChatGPT assistant message after its questionnaire was dismissed; clicking reopens the questions"
            }), o[5] = i) : i = o[5], o[6] !== t || o[7] !== a ? (l = (0, n.jsx)(T.a, {
                children: (0, n.jsx)(y.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: i
                })
            }), o[6] = t, o[7] = a, o[8] = l) : l = o[8], l)
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
            let t, a, i, l, s, c, d, u, f, g, _, m = (0, r.c)(41),
                {
                    contentReferenceIndex: h,
                    reference: v,
                    isStreaming: y,
                    readOnly: T
                } = e,
                I = (0, p.y)(G.a),
                E = (0, w.d)(),
                x = (0, b.a)(),
                A = (0, o.useContext)(M.a),
                [C, S] = (0, o.useState)(!1),
                k = (0, o.useRef)(null);
            m[0] !== v ? (t = L.safeParse(v), m[0] = v, m[1] = t) : t = m[1];
            let N = t;
            m[2] !== h || m[3] !== E ? (a = (0, w.c)(E, h), m[2] = h, m[3] = E, m[4] = a) : a = m[4];
            let H = a,
                D = H?.messageId,
                V = E?.conversationId,
                U = N.success ? N.data.data.url : void 0,
                q = !0 === T || !0 === y || null == E || E.isStreaming || !0 === E.isReadOnly || E.shouldBlockExternalEgress || null == H || null != U && "restricted" === A;
            if (m[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => k.current?.abort(), m[5] = i) : i = m[5], m[6] !== V || m[7] !== q || m[8] !== I || m[9] !== D || m[10] !== U ? (l = [V, q, I, D, U], m[6] = V, m[7] = q, m[8] = I, m[9] = D, m[10] = U, m[11] = l) : l = m[11], (0, o.useLayoutEffect)(i, l), !N.success || C) return null;
            let {
                data: z,
                icebreaker_card_actions: K
            } = N.data, {
                title: Q,
                text: Y,
                button_label: $,
                prompt: X
            } = z;
            m[12] !== K || m[13] !== q || m[14] !== H || m[15] !== E ? (s = function(e) {
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
            }, m[12] = K, m[13] = q, m[14] = H, m[15] = E, m[16] = s) : s = m[16];
            let J = s;
            return m[17] !== x ? (c = x.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), m[17] = x, m[18] = c) : c = m[18], m[19] !== J ? (d = () => {
                k.current?.abort(), S(!0), J("dismiss")
            }, m[19] = J, m[20] = d) : d = m[20], m[21] !== c || m[22] !== d ? (u = {
                ariaLabel: c,
                onClick: d
            }, m[21] = c, m[22] = d, m[23] = u) : u = m[23], m[24] !== q || m[25] !== X || m[26] !== J || m[27] !== I || m[28] !== H || m[29] !== E || m[30] !== U ? (f = () => {
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
                        !1 !== t && (J("click"), t.catch(W));
                        return
                    }
                    null != X && (J("click"), (0, R.submitChatGptFollowUp)(I, {
                        conversationId: E.conversationId,
                        isTemporaryChat: E.isTemporaryChat ?? !1,
                        parentMessageId: H.messageId,
                        prompt: X
                    }).catch(B))
                }
            }, m[24] = q, m[25] = X, m[26] = J, m[27] = I, m[28] = H, m[29] = E, m[30] = U, m[31] = f) : f = m[31], m[32] !== $ || m[33] !== q || m[34] !== f ? (g = {
                label: $,
                disabled: q,
                onClick: f
            }, m[32] = $, m[33] = q, m[34] = f, m[35] = g) : g = m[35], m[36] !== g || m[37] !== u || m[38] !== Y || m[39] !== Q ? (_ = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(O.a, {
                    variant: "beacon",
                    title: Q,
                    description: Y,
                    dismissAction: u,
                    primaryAction: g
                })
            }), m[36] = g, m[37] = u, m[38] = Y, m[39] = Q, m[40] = _) : _ = m[40], _
        }

        function B(e) {
            F.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function W(e) {
            F.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var D = a("dhxJ"),
            V = a("ZUun"),
            U = a("VB5Q");

        function q(e) {
            let t, a, i, l, s, c, d, u = (0, r.c)(33),
                {
                    contentReferenceIndex: f,
                    isStreaming: g,
                    readOnly: _,
                    reference: m,
                    renderMath: h
                } = e,
                {
                    data: b
                } = m,
                v = void 0 !== h && h,
                y = (0, w.d)(),
                T = g ?? (y?.isStreaming === !0 && (y.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                I = (0, o.useContext)(M.a),
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
                codeBlocks: (0, D.a)({
                    code_blocks: null == k || null == A ? void 0 : {
                        [A]: k
                    }
                }) ?? (null == x || x === y.messageId ? y.codeBlocks : void 0),
                isReadOnly: _ || y.isReadOnly,
                isStreaming: T,
                shouldBlockExternalEgress: y.shouldBlockExternalEgress || "restricted" === I
            }, u[8] = A, u[9] = I, u[10] = T, u[11] = _, u[12] = k, u[13] = x, u[14] = y, u[15] = i) : i = u[15], u[16] !== b ? (l = (0, U.a)(b), u[16] = b, u[17] = l) : l = u[17];
            let N = b.model_previewable ? "preview" : void 0;
            return u[18] !== b.language ? (s = b.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = b.language, u[19] = s) : s = u[19], u[20] !== A || u[21] !== b.content || u[22] !== b.editable || u[23] !== b.interactive || u[24] !== T || u[25] !== v || u[26] !== s || u[27] !== l || u[28] !== N ? (c = (0, n.jsx)(V.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: l,
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
            }), u[20] = A, u[21] = b.content, u[22] = b.editable, u[23] = b.interactive, u[24] = T, u[25] = v, u[26] = s, u[27] = l, u[28] = N, u[29] = c) : c = u[29], u[30] !== c || u[31] !== i ? (d = (0, n.jsx)(w.b.Provider, {
                value: i,
                children: c
            }), u[30] = c, u[31] = i, u[32] = d) : d = u[32], d
        }
        var z = a("DIH2");

        function K(e) {
            let t, a, i, l, o, s, c = (0, r.c)(19),
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
            let m = i;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== m ? (l = null != m && m !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                description: "Readable fallback while pronunciation controls load or fail to load. The text placeholder is the original word or phrase, and pronunciation is its phonetic pronunciation hint. Both values come from the conversation and should be preserved; punctuation may be localized.",
                values: {
                    text: u,
                    pronunciation: m
                }
            }) : u, c[9] = u, c[10] = m, c[11] = l) : l = c[11], c[12] !== u || c[13] !== f ? (o = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = o) : o = c[14], c[15] !== _ || c[16] !== l || c[17] !== o ? (s = (0, n.jsxs)(_, {
                children: [l, o]
            }), c[15] = _, c[16] = l, c[17] = o, c[18] = s) : s = c[18], s)
        }
        var Q = a("yxxQ"),
            Y = a("VTN2");
        let $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(372772)]).then(a.bind(a, "dDjd"))).ChatGptTranslationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(851456), a.e(882323), a.e(393442), a.e(329156), a.e(829555), a.e(920869), a.e(720436), a.e(208123), a.e(255464), a.e(678608), a.e(384808)]).then(a.bind(a, "KKwe"))).DilWritingBlock, g.a),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(3487)]).then(a.bind(a, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(Q.a, {})
            }),
            ee = (0, s.a)(l.a, {
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
            ea = (0, o.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(990054), a.e(566395), a.e(70086), a.e(452048), a.e(299268), a.e(826779), a.e(433520), a.e(291381)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            en = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function er(e) {
            let t, a, i, l, o, s = (0, r.c)(81),
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
                return s[0] !== y.data ? (e = (0, n.jsx)(m.d, {
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
                return s[22] !== f || s[23] !== g || s[24] !== p || s[25] !== v || s[26] !== y.data ? (e = (0, n.jsx)(J, {
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
                return s[33] !== f || s[34] !== p || s[35] !== b || s[36] !== y ? (e = (0, n.jsx)(h.a, {
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
            s[69] !== y ? (l = Y.i.safeParse(y), s[69] = y, s[70] = l) : l = s[70];
            let x = l;
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
            return s[77] !== f || s[78] !== p || s[79] !== y ? (o = (0, n.jsx)(el, {
                contentReferenceIndex: f,
                reference: y,
                isStreaming: p
            }), s[77] = f, s[78] = p, s[79] = y, s[80] = o) : o = s[80], o
        }

        function ei(e) {
            let t, a, i, l = (0, r.c)(10),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e,
                d = (0, f.a)();
            l[0] !== c.data.content ? (t = (0, n.jsx)("span", {
                "data-learning-block-pending": !0,
                children: c.data.content
            }), l[0] = c.data.content, l[1] = t) : t = l[1];
            let u = t;
            return l[2] !== s || l[3] !== u || l[4] !== d || l[5] !== c ? (a = d && null != ea ? (0, n.jsx)(ea, {
                contentReferenceIndex: s,
                reference: c
            }) : u, l[2] = s, l[3] = u, l[4] = d, l[5] = c, l[6] = a) : a = l[6], l[7] !== u || l[8] !== a ? (i = (0, n.jsx)(o.Suspense, {
                fallback: u,
                children: a
            }), l[7] = u, l[8] = a, l[9] = i) : i = l[9], i
        }

        function el(e) {
            let t, a, i = (0, r.c)(6),
                [l] = (0, o.useState)(eo);
            return i[0] !== e || i[1] !== l ? (t = (0, n.jsx)(Z, {
                ...e,
                widgetRefSeenAtMs: l
            }), i[0] = e, i[1] = l, i[2] = t) : t = i[2], i[3] !== e.contentReferenceIndex || i[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), i[3] = e.contentReferenceIndex, i[4] = t, i[5] = a) : a = i[5], a
        }

        function eo() {
            return performance.now()
        }
    }),
    yxxQ: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("oyxz"),
            l = a("aqd9");
        a.d(t, {}, {
            a: function() {
                let e, t = (0, r.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                    className: "my-2 h-[27rem] w-full pt-5",
                    "aria-busy": !0,
                    children: (0, n.jsx)("div", {
                        ref: l.a,
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
            l = n.enum(["compact", "integer", "raw"]),
            o = i.catch(void 0),
            s = n.object({
                dimension: n.enum(["x", "y"]).optional().catch(void 0),
                domain: n.tuple([n.number(), n.number()]).optional().catch(void 0),
                label: o,
                ticks: n.array(n.object({
                    label: r.string().nullish(),
                    value: n.number()
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional()
            }).loose(),
            c = n.object({
                axes: n.array(s.nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional(),
                chartType: n.enum(["bar", "line", "pie", "scatter"]),
                data: n.array(n.record(n.string(), n.unknown()).nullable().catch(null)).catch([]).transform(e => e.filter(e => null != e)),
                layout: o,
                meta: n.object({
                    description: o,
                    footer: o,
                    title: o
                }).loose().optional().catch(void 0),
                nameKey: o,
                series: n.array(n.object({
                    axisLabel: o,
                    band: n.object({
                        lower: n.number().optional().catch(void 0),
                        upper: n.number().optional().catch(void 0),
                        lowerKey: n.string().min(1).optional().catch(void 0),
                        upperKey: n.string().min(1).optional().catch(void 0)
                    }).optional().catch(void 0),
                    dataKey: n.string().refine(e => e.trim().length > 0),
                    label: o,
                    stack: o,
                    valueFormat: l.optional().catch(void 0),
                    valuePrefix: o,
                    valueSuffix: o
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(e => e?.filter(e => null != e)).optional(),
                valueFormat: l.optional().catch(void 0),
                valueKey: o,
                valuePrefix: o,
                valueSuffix: o,
                xAxisLabel: o,
                xAxisScale: o,
                xKey: o
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
            m = n.object({
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
            h = n.object({
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
            y = n.discriminatedUnion("category", [h, v]);
        a.d(t, {}, {
            a: _,
            b: c,
            c: d,
            d: u,
            e: g,
            f: m,
            g: f,
            h: b,
            i: y
        })
    }),
    netB: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("T0Rc"),
            l = a("mEbU"),
            o = a("BolX"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            g = a("ZHSy"),
            _ = a("WAdu"),
            m = a("tSEg"),
            h = a("Yscs"),
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
                x = (0, o.y)(m.a),
                A = (0, s.useRef)(null),
                C = (0, l.a)(A, {
                    once: !0
                }),
                S = (0, s.useContext)(c.a),
                k = (0, o.z)(d.f),
                N = (0, o.z)(d.j),
                R = (0, o.x)(b.j, _.conversationId) ?? _.conversationId,
                P = (0, o.x)(b.S, _.conversationId),
                j = (0, o.x)(b.Z, _.conversationId),
                O = (0, o.x)(T.f, S)?.id,
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
                        let n = await (0, h.a)(a);
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
                    l = (0, s.useContext)(_.a);
                if (null == i || i.isStreaming || i.shouldBlockExternalEgress || "restricted" === l) {
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
            l = a("E8Sp"),
            o = a("X6Vn"),
            s = a("ciEf"),
            c = a("zsxQ"),
            d = a("vldH"),
            u = a("OOaz"),
            f = a("dQRk"),
            g = a("rxj0"),
            _ = a("xof2"),
            m = a("IDHB"),
            h = a("jAnS"),
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
                sharedConversationId: l,
                signal: o
            } = t, s = e.get(f._, r.conversationId), _ = l ?? (s?.kind === "conversation" ? s.id : void 0), m = {
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
                ...m,
                signal: o
            });
            let {
                openChatGptFile: h
            } = await Promise.resolve().then(a.bind(a, "f2PP"));
            return h(e, {
                ...m,
                isAccessBlocked: e => (0, g.i)(e, r.conversationId),
                messageId: i,
                browserPreview: !0,
                tabKey: `${i}:sandbox:${n}`,
                signal: o
            })
        }

        function T(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: l
                } = t,
                o = e.get(f._, i.conversationId);
            if (o?.kind === "post") {
                let t = e.get(f.M, i.conversationId)?.[l]?.message;
                if (null != t) {
                    let e = (0, r.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, m.a)(e, i.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: l
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
                    contentReferenceStartIndex: m,
                    parentContext: T,
                    signal: E,
                    onInteraction: w,
                    onLinkClick: x
                } = t;
                if ("open_conversation" === i) {
                    let t = b.safeParse(d);
                    if (t.success && !E.aborted) {
                        let a = (0, h.c)(t.data.conversation_id);
                        (0, l.d)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
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
                    contentReferenceStartIndex: m,
                    parentContext: T,
                    url: u?.shouldBlockExternalEgress ? void 0 : k
                }), C && !u?.safeUrls?.includes(k)) ? async function(e, t, n, r) {
                    let i = await (0, s.b)(t).catch(() => !1);
                    if (n.aborted) return;
                    if (i) return void(0, p.b)(e, t, r);
                    let {
                        ExternalLinkConfirmationDialog: l
                    } = await Promise.resolve().then(a.bind(a, "g25Y"));
                    n.aborted || (0, o.f)(e, l, {
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
        let l = new Set(["entity_reviews_widget", "entity_reviews_ref_widget", "restaurant_reviews", "EntityReviewsWidget", "EntityReviewsRefWidget", "RestaurantReviews"]);

        function o(e, t, a) {
            return "sidebar" === t && null != a && l.has(a) && e.get(r.d, "1492523517") ? "in-app-browser" : void 0
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
            a: o,
            b: s,
            c: function(e, t, a, n, r) {
                s(e, (0, i.a)(t), o(e, a, n), r)
            }
        })
    }),
    CMlo: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("BolX"),
            l = a("zd8w"),
            o = a("Wf1j"),
            s = a("oyxz"),
            c = a("Qgfj"),
            d = a("Sm6l"),
            u = a("nhmq"),
            f = a("nzx4"),
            g = a("zLIa"),
            _ = a("SGsN"),
            m = a("OWtl"),
            h = a("hGH3");

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
                        feedbackConfig: W,
                        onImpression: D,
                        onOpen: V,
                        onSubmit: U
                    } = e,
                    q = (0, i.y)(m.a),
                    z = (0, o.a)(),
                    K = (0, l.useId)(),
                    Q = (0, l.useRef)(!1),
                    [Y, $] = (0, l.useState)("");
                H[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], H[0] = t) : t = H[0];
                let [X, J] = (0, l.useState)(t), [Z, ee] = (0, l.useState)(!1), et = W?.reason_options ?? v;
                if (H[1] !== et || H[2] !== X) {
                    let e;
                    H[4] !== et ? (e = e => et.some(t => t.reason === e), H[4] = et, H[5] = e) : e = H[5], a = X.filter(e), H[1] = et, H[2] = X, H[3] = a
                } else a = H[3];
                let ea = a;
                if (!(void 0 === B || B)) return null;
                if (H[6] !== V ? (c = e => {
                        ee(e), e && V()
                    }, H[6] = V, H[7] = c) : c = H[7], H[8] !== D ? (y = e => {
                        if (null != e && null != D && !Q.current) return (0, h.a)(e, () => (Q.current = !0, D(), !0))
                    }, H[8] = D, H[9] = y) : y = H[9], H[10] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, n.jsx)(s.a, {
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
                        }), $(""), J([]), ee(!1), q.get(_.f).success((0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.toast.success",
                            defaultMessage: "Your feedback has been submitted",
                            description: "Success toast shown immediately after a user sends written feedback about a generated visual answer in a ChatGPT response. The submission is best effort and does not interrupt the conversation."
                        })))
                    }, H[13] = Y, H[14] = U, H[15] = q, H[16] = ea, H[17] = E) : E = H[17], H[18] !== W ? (w = W ? W.title : (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT",
                        description: "Heading in the feedback popover opened from a completed ChatGPT response containing a generated visual answer. Invites the user to help improve those visual answers."
                    }), H[18] = W, H[19] = w) : w = H[19], H[20] !== w ? (x = (0, n.jsx)(f.d, {
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
                                J(a => t ? [...a, e.reason] : a.filter(t => t !== e.reason))
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
                }), H[46] = x, H[47] = S, H[48] = N, H[49] = j, H[50] = G, H[51] = E, H[52] = F) : F = H[52], H[53] !== Z || H[54] !== F || H[55] !== c || H[56] !== I ? (L = (0, n.jsxs)(f.a, {
                    open: Z,
                    onOpenChange: c,
                    children: [I, F]
                }), H[53] = Z, H[54] = F, H[55] = c, H[56] = I, H[57] = L) : L = H[57], L
            }
        })
    }),
    ciVz: (function(e, t, a) {
        var n = a("BolX"),
            r = a("d0tz"),
            i = a("Cslg"),
            l = a("OFP1"),
            o = a("OWtl"),
            s = a("tSEg"),
            c = a("UR81"),
            d = a("vw1R"),
            u = a("g2p6");
        let f = (0, n.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(u.p).data?.trainingAllowed === !0
            }),
            g = (0, n.c)(o.a, e => {
                let {
                    get: t
                } = e, {
                    authLoading: a,
                    accountInfoLoading: n,
                    accountInfoError: r,
                    authMethod: i,
                    plan: o
                } = t(l.f);
                return a || r || n || "chatgpt" !== i || null == o ? null : (0, c.f)(o) || (0, d.b)(o)
            }),
            _ = (0, n.c)(o.a, e => {
                let {
                    get: t
                } = e, a = t(i.m);
                return !a.authLoading && !a.accountLoading && (null == a.authMethod || "chatgpt" === a.authMethod && null != a.plan && (!(0, d.b)(a.plan) || (0, r.ri)(a.email ?? null)))
            }),
            m = (0, n.v)(s.a, e => null),
            h = (0, n.v)(s.a, e => "unknown"),
            p = (0, n.u)(s.a, !1);
        a.d(t, {}, {
            a: _,
            b: p,
            c: g,
            d: f,
            e: m,
            f: h
        })
    }),
    O7AW: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("EA6X"),
            l = a("D015"),
            o = a("Nl8C"),
            s = a("BolX"),
            c = a("AuIy"),
            d = a("zd8w"),
            u = a("ASxG"),
            f = a("Cslg"),
            g = a("WAdu"),
            _ = a("yGJW"),
            m = a("OWtl"),
            h = a("OMIV"),
            p = a("Kwur"),
            b = a("dQRk"),
            v = a("TUMj"),
            y = a("gKmr"),
            T = a("xof2"),
            I = a("CMlo"),
            E = a("ciVz");
        let w = (0, s.d)(m.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null == e || !a(E.a) || !a(h.d, "1205965498") || null != a(b._, e.conversationId)) return !1;
            let n = a(b.M, e.conversationId)?.[e.messageId]?.message;
            return null != n && (0, c.r)(n.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && n.metadata?.model_dil_v2 == null && (0, c.r)((0, c.r)(n.metadata?.model_dil)?.dil)?.type == null && (n.metadata?.is_complete ?? "in_progress" !== n.status) === !0
        });

        function x(e) {
            let t, a, o, c, u, g = (0, r.c)(33),
                {
                    conversationId: h,
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
                O = (0, s.y)(m.a),
                M = (0, d.useRef)(null),
                G = (0, v.d)();
            g[0] !== h || g[1] !== j || g[2] !== b || g[3] !== O || g[4] !== R || g[5] !== G || g[6] !== E || g[7] !== w ? (t = (e, t, a) => {
                try {
                    let n = {
                        actionType: "feedback_button" === e ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: b,
                        contentReferenceStartIndex: null == R ? void 0 : (0, l.a)(R),
                        contentReferenceType: "dil",
                        conversationId: h,
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
            }, g[0] = h, g[1] = j, g[2] = b, g[3] = O, g[4] = R, g[5] = G, g[6] = E, g[7] = w, g[8] = t) : t = g[8];
            let F = t;
            return g[9] !== j || g[10] !== F || g[11] !== G ? (a = j || null == G || !1 === G.trackShownImpressions ? void 0 : () => F("feedback_button"), g[9] = j, g[10] = F, g[11] = G, g[12] = a) : a = g[12], g[13] !== F || g[14] !== O ? (o = () => {
                M.current = O.get(f.m), F("feedback_panel")
            }, g[13] = F, g[14] = O, g[15] = o) : o = g[15], g[16] !== h || g[17] !== S || g[18] !== k || g[19] !== F || g[20] !== b || g[21] !== N || g[22] !== O || g[23] !== E || g[24] !== y || g[25] !== w ? (c = e => {
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
                                conversation_id: h,
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
                        conversation_id: h,
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
            }, g[16] = h, g[17] = S, g[18] = k, g[19] = F, g[20] = b, g[21] = N, g[22] = O, g[23] = E, g[24] = y, g[25] = w, g[26] = c) : c = g[26], g[27] !== P || g[28] !== a || g[29] !== o || g[30] !== c || g[31] !== y ? (u = (0, n.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, n.jsx)(I.a, {
                    feedbackConfig: P,
                    onImpression: a,
                    onOpen: o,
                    onSubmit: c
                }, y)
            }), g[27] = P, g[28] = a, g[29] = o, g[30] = c, g[31] = y, g[32] = u) : u = g[32], u
        }

        function A() {}

        function C() {}
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, l, f, _, m, h, p, T, I, E, A, C, S = (0, r.c)(46),
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
                    S[29] !== N.start_idx ? (t = u.number().safeParse(N.start_idx), S[29] = N.start_idx, S[30] = t) : t = S[30], f = t.data, l = x, h = G, p = j.messageId, T = s, I = i, E = F, S[31] !== N.dil_url ? (a = u.string().safeParse(N.dil_url), S[31] = N.dil_url, S[32] = a) : a = S[32], A = a.data, S[33] !== N.dil_version ? (n = u.string().safeParse(N.dil_version), S[33] = N.dil_version, S[34] = n) : n = S[34], _ = n.data, m = (0, o.g)(r?.appData), S[8] = G, S[9] = N.dil, S[10] = N.dil_url, S[11] = N.dil_version, S[12] = N.name, S[13] = N.start_idx, S[14] = j.index, S[15] = j.messageId, S[16] = F, S[17] = l, S[18] = f, S[19] = _, S[20] = m, S[21] = h, S[22] = p, S[23] = T, S[24] = I, S[25] = E, S[26] = A
                } else l = S[17], f = S[18], _ = S[19], m = S[20], h = S[21], p = S[22], T = S[23], I = S[24], E = S[25], A = S[26];
                return S[35] !== l || S[36] !== f || S[37] !== _ || S[38] !== m || S[39] !== h || S[40] !== p || S[41] !== T || S[42] !== I || S[43] !== E || S[44] !== A ? (C = (0, n.jsx)(l, {
                    conversationId: h,
                    messageId: p,
                    widgetRefId: T,
                    widgetName: I,
                    widgetType: E,
                    dilUrl: A,
                    dilVersion: _,
                    metadata: m,
                    startIndex: f
                }), S[35] = l, S[36] = f, S[37] = _, S[38] = m, S[39] = h, S[40] = p, S[41] = T, S[42] = I, S[43] = E, S[44] = A, S[45] = C) : C = S[45], C
            },
            b: x
        })
    }),
    mF5c: (function(e, t, a) {
        var n = a("EA6X"),
            r = a("MVHH"),
            i = a("Cslg"),
            l = a("SGsN"),
            o = a("svjy"),
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
                created: h,
                onView: p,
                updateFavorite: b
            } = t, v = () => e.get(i.f) === e.value.accountId && e.get(i.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(o.a),
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
                if (!v() || (m(e, {
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
                        v() && e.get(l.f).danger(y.formatMessage({
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
                    (0, c.a)(e), e.get(l.f).success(h ? y.formatMessage({
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
                w && E && m(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: x,
                    clickToSuccessToastMs: performance.now() - A
                })
            }
        }

        function _(e, t, a, r, i) {
            let l, o, s = "client-created-root" === a ? void 0 : a ?? void 0;
            "save" === r ? (l = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED") : "unsave" === r ? (l = n.d.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED") : (l = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED");
            let c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
            "toast_action" === r ? c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST : "image_lightbox" === i && (c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, f.e)(e, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: c,
                entityAffordance: l,
                entityCategory: "image",
                conversationId: t,
                messageId: s,
                assistantMessageId: s,
                contentReferenceType: "entity"
            }), m(e, {
                eventType: o,
                action: "toast_action" === r ? void 0 : r,
                surface: "toast_action" === r ? "save_toast" : i
            })
        }

        function m(e, t) {
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
                    folder: l,
                    created: o,
                    onView: s,
                    surface: d = "image_tile"
                } = t;
                return g(e, {
                    conversationId: n,
                    messageId: a.chatGptMessageId,
                    libraryFileId: r,
                    status: i,
                    surface: d,
                    folder: l,
                    created: o,
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
            l = a("BolX"),
            o = a("Wf1j"),
            s = a("jqIZ"),
            c = a("Cslg"),
            d = a("Sm6l"),
            u = a("HOLv"),
            f = a("jo5I"),
            g = a("jU86"),
            _ = a("Qed5"),
            m = a("VJXV"),
            h = a("mF5c"),
            p = a("ejvO"),
            b = a("lc3A"),
            v = a("k2zB");

        function y(e) {
            let t, a, c, m, y = (0, r.c)(48),
                {
                    source: T,
                    sources: I,
                    conversationId: E,
                    messageId: w,
                    surface: x,
                    presentation: A
                } = e,
                C = (0, l.y)(g.c),
                S = (0, s._)(),
                k = (0, o.a)();
            y[0] !== T ? (t = (0, p.a)(T), y[0] = T, y[1] = t) : t = y[1];
            let N = t,
                {
                    data: R,
                    isError: P
                } = (0, l.x)(p.d, I),
                j = (0, l.x)(p.b, N),
                O = R?.[N];
            y[2] !== E || y[3] !== P || y[4] !== N || y[5] !== w || y[6] !== S || y[7] !== C || y[8] !== T || y[9] !== I || y[10] !== O || y[11] !== x ? (a = async (e, t) => {
                null == O || P || C.get(p.b, N) || (C.set(p.b, N, !0), await (0, h.b)(C, {
                    conversationId: E,
                    messageId: w,
                    libraryFileId: O.library_file_id,
                    status: {
                        favoriteId: O.favorite_id ?? null,
                        isFavorited: null != O.favorite_id
                    },
                    surface: x,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        S(e)
                    },
                    updateFavorite: (e, t, a) => (0, p.e)(C, {
                        source: T,
                        previous: O,
                        save: e,
                        surface: x,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await C.query.invalidate(p.d, I)
                }).finally(() => {
                    C.set(p.b, N, !1)
                }))
            }, y[2] = E, y[3] = P, y[4] = N, y[5] = w, y[6] = S, y[7] = C, y[8] = T, y[9] = I, y[10] = O, y[11] = x, y[12] = a) : a = y[12];
            let M = a;
            if (P) return null;
            if ("menuItem" === A) {
                let e, t, a = O?.favorite_id != null,
                    r = j || null == O;
                return y[13] !== M ? (e = () => void M(), y[13] = M, y[14] = e) : e = y[14], y[15] !== a || y[16] !== r || y[17] !== e ? (t = (0, n.jsx)(_.a, {
                    isFavorited: a,
                    disabled: r,
                    onSelect: e
                }), y[15] = a, y[16] = r, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === A) {
                let e, t, a, r, l, o = O?.favorite_id != null;
                y[19] !== k ? (e = k.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), y[19] = k, y[20] = e) : e = y[20];
                let s = e;
                if (null == O) {
                    let e;
                    y[21] !== k ? (e = k.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status",
                        description: "Accessible status for a bookmark while checking whether the item is already saved"
                    }), y[21] = k, y[22] = e) : e = y[22], s = e
                } else if (o) {
                    let e;
                    y[23] !== k ? (e = k.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), y[23] = k, y[24] = e) : e = y[24], s = e
                }
                let c = j || null == O || void 0,
                    f = j || null == O;
                y[25] !== M ? (t = e => {
                    e.stopPropagation(), M()
                }, y[25] = M, y[26] = t) : t = y[26];
                let g = o ? b.a : v.a;
                return y[27] !== g ? (a = (0, n.jsx)(u.a, {
                    asset: g
                }), y[27] = g, y[28] = a) : a = y[28], y[29] !== o || y[30] !== s || y[31] !== c || y[32] !== f || y[33] !== t || y[34] !== a ? (r = (0, n.jsx)(d.a, {
                    "aria-label": s,
                    "aria-pressed": o,
                    "aria-busy": c,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), y[29] = o, y[30] = s, y[31] = c, y[32] = f, y[33] = t, y[34] = a, y[35] = r) : r = y[35], y[36] !== s || y[37] !== r ? (l = (0, n.jsx)(i.a, {
                    content: s,
                    children: r
                }), y[36] = s, y[37] = r, y[38] = l) : l = y[38], l
            }
            let G = O?.favorite_id != null,
                F = null == O,
                L = O?.directory_id ?? null;
            return y[39] !== M ? (c = () => void M(), y[39] = M, y[40] = c) : c = y[40], y[41] !== j || y[42] !== G || y[43] !== F || y[44] !== L || y[45] !== c || y[46] !== M ? (m = (0, n.jsx)(f.a, {
                isSaved: G,
                isBusy: j,
                isCheckingStatus: F,
                selectedFolderId: L,
                visibility: "hover",
                onToggleFavorite: c,
                onSelectFolder: M
            }), y[41] = j, y[42] = G, y[43] = F, y[44] = L, y[45] = c, y[46] = M, y[47] = m) : m = y[47], m
        }
        a.d(t, {}, {
            SearchImageFavorite: function(e) {
                let t, a, i, o, s = (0, r.c)(11),
                    d = (0, l.z)(m.d),
                    u = (0, l.z)(c.l),
                    f = (0, l.z)(c.f),
                    _ = (0, l.z)(c.k);
                return d && "allowed" === u.status && null != f && null != _ ? (s[0] !== f || s[1] !== _ ? (t = {
                    accountId: f,
                    userId: _
                }, s[0] = f, s[1] = _, s[2] = t) : t = s[2], s[3] !== e.source ? (a = (0, p.a)(e.source), s[3] = e.source, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (i = (0, n.jsx)(y, {
                    ...e
                }, a), s[5] = e, s[6] = a, s[7] = i) : i = s[7], s[8] !== t || s[9] !== i ? (o = (0, n.jsx)(l.b, {
                    scope: g.c,
                    value: t,
                    children: i
                }), s[8] = t, s[9] = i, s[10] = o) : o = s[10], o) : null
            }
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("XlOJ"),
            r = a("r9HQ"),
            i = a("CpsU"),
            l = a.n(i),
            o = a("BolX"),
            s = a("Cslg"),
            c = a("SGsN"),
            d = a("svjy"),
            u = a("jU86"),
            f = a("VJXV"),
            g = a("yGJW");
        let _ = new WeakMap,
            m = (0, o.v)(u.c, e => !1);

        function h(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let p = (0, o.q)(u.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, i = [...new Map(e.map(e => [h(e), e])).values()], o = a(u.q);
            return {
                queryKey: ["library-image-favorites-status", n.value.accountId, n.value.userId, i.map(h).sort()],
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
                            l = _.get(n.queryClient);
                        null == l && (l = new Map, _.set(n.queryClient, l));
                        let s = l.get(e);
                        null == s && (a = o, s = (0, r.a)({
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
                                    return [h(a), n[t]]
                                }))
                            },
                            resolver: (e, t) => {
                                let {
                                    source: a,
                                    signal: n
                                } = t;
                                n.throwIfAborted();
                                let r = e.get(h(a));
                                if (null == r) throw Error("Incomplete image favorite status response.");
                                return r
                            }
                        }), l.set(e, s));
                        let c = await s.fetch({
                            source: i[0],
                            signal: t
                        });
                        return {
                            [h(i[0])]: c
                        }
                    }
                    return Object.fromEntries((await Promise.all(l()(i, 50).map(async e => {
                        let a = await o.safePost("/files/library/image-favorites/status", {
                            requestBody: {
                                sources: e
                            },
                            signal: t
                        });
                        if (a.length !== e.length) throw Error("Incomplete image favorite status response.");
                        return e.map((e, t) => [h(e), a[t]])
                    }))).flat())
                }
            }
        });
        a.d(t, {}, {
            a: h,
            b: m,
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
                        save: l,
                        surface: o,
                        showToast: _,
                        onView: m
                    } = t,
                    p = () => e.get(s.f) === e.value.accountId && e.get(s.k) === e.value.userId,
                    b = h(r);
                if (!e.get(f.d)) return null;
                if (l) {
                    let t = {
                        operationId: crypto.randomUUID(),
                        action: "save",
                        entityKind: "web_image",
                        surface: o,
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
                            onView: m
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
                            surface: o,
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
            a: () => x
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("ozm1"),
            l = a("FS1B"),
            o = a("slpy"),
            s = a("BolX"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("oyxz"),
            f = a("Cslg"),
            g = a("Sm6l"),
            _ = a("HOLv"),
            m = a("SGsN"),
            h = a("Yq7Q"),
            p = a("yGJW"),
            b = a("OWtl"),
            v = a("FGv0"),
            y = a("hZax"),
            T = a("RiLw"),
            I = a("Kwur");

        function E(e, t, a) {
            let n;
            if ("u" < typeof IntersectionObserver) return () => {};
            let r = e.ownerDocument,
                i = e.closest("[data-web-image-tile], [class~='group/search-image']") ?? e,
                l = !1,
                o = !1,
                s = () => {
                    let a = r.defaultView?.getComputedStyle(e);
                    for (let t = e.parentElement; null != t; t = t.parentElement)
                        if (0 === Number(r.defaultView?.getComputedStyle(t).opacity)) return !1;
                    return l && "visible" === r.visibilityState && e.isConnected && e.getClientRects().length > 0 && null == e.closest("[inert], [aria-hidden='true']") && a?.visibility === "visible" && Number(a.opacity) > 0 && t()
                },
                c = () => {
                    if (!o) {
                        if (!s()) {
                            clearTimeout(n), n = void 0;
                            return
                        }
                        void 0 === n && (n = setTimeout(() => {
                            n = void 0, s() && (o = !0, a(), g())
                        }, 1e3))
                    }
                },
                d = new IntersectionObserver(e => {
                    let [t] = e;
                    l = t.isIntersecting && t.intersectionRatio >= .5, c()
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
                for (let e of (o = !0, clearTimeout(n), d.disconnect(), u.disconnect(), f)) i.removeEventListener(e, c, !0);
                r.removeEventListener("visibilitychange", c)
            }
            return r.addEventListener("visibilitychange", c), g
        }
        var w = a("TgMd");

        function x(e) {
            let t, a, x, N, R, P, j, O, M, G, F, L, H, B, W, D, V, U, q, z, K, Q = (0, r.c)(99),
                {
                    source: Y,
                    conversationId: $,
                    messageId: X,
                    imageIndex: J,
                    contentReferenceStartIndex: Z,
                    surface: ee,
                    lightboxPresentation: et,
                    imageRef: ea,
                    imageReady: en
                } = e,
                er = void 0 === et ? "classic" : et,
                ei = void 0 === en || en,
                el = (0, s.y)(b.a),
                eo = (0, s.z)(f.f),
                es = (0, s.z)(f.k),
                ec = (0, d.a)();
            Q[0] !== eo || Q[1] !== $ || Q[2] !== X || Q[3] !== Y.content_url || Q[4] !== es ? (t = null != eo && null != es && null != $ && null != X && /^https?:\/\//i.test(Y.content_url), Q[0] = eo, Q[1] = $, Q[2] = X, Q[3] = Y.content_url, Q[4] = es, Q[5] = t) : t = Q[5];
            let ed = t,
                eu = !ed;
            Q[6] !== eu ? (a = {
                disableExposureLog: eu
            }, Q[6] = eu, Q[7] = a) : a = Q[7];
            let ef = (0, y.m)("274234392", a);
            Q[8] !== ef ? (x = ef.get("placement", "off"), Q[8] = ef, Q[9] = x) : x = Q[9];
            let eg = x,
                e_ = "fullscreen" === eg || "inline_and_fullscreen" === eg ? eg : "off",
                em = ed && ("inline_and_fullscreen" === e_ || "fullscreen" === e_ && "image_lightbox" === ee),
                eh = (0, c.useRef)(null),
                ep = (0, c.useRef)(null);
            Q[10] !== Z || Q[11] !== $ || Q[12] !== J || Q[13] !== X || Q[14] !== Y.content_url ? (N = [$, X, Z, J, Y.content_url], Q[10] = Z, Q[11] = $, Q[12] = J, Q[13] = X, Q[14] = Y.content_url, Q[15] = N) : N = Q[15];
            let eb = N.join(":"),
                ev = (0, c.useRef)(null);
            Q[16] === Symbol.for("react.memo_cache_sentinel") ? (R = new Set, Q[16] = R) : R = Q[16];
            let ey = (0, c.useRef)(R),
                [eT, eI] = (0, c.useState)(!1),
                eE = "image_tile" === ee ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            Q[17] !== J ? (P = null == J || J < 0 ? void 0 : (0, i.d)(J), Q[17] = J, Q[18] = P) : P = Q[18], Q[19] !== Z ? (j = null == Z ? void 0 : (0, i.b)(Z), Q[19] = Z, Q[20] = j) : j = Q[20], Q[21] !== e_ || Q[22] !== ee || Q[23] !== P || Q[24] !== j ? (O = {
                surface: ee,
                placement: e_,
                imageIndex: P,
                contentReferenceStartIndex: j
            }, Q[21] = e_, Q[22] = ee, Q[23] = P, Q[24] = j, Q[25] = O) : O = Q[25], Q[26] !== $ || Q[27] !== X || Q[28] !== eE || Q[29] !== O ? (M = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eE,
                conversationId: $,
                messageId: X,
                imageMetadata: O
            }, Q[26] = $, Q[27] = X, Q[28] = eE, Q[29] = O, Q[30] = M) : M = Q[30];
            let ew = M;
            Q[31] !== eo || Q[32] !== ew || Q[33] !== el || Q[34] !== es ? (G = (e, t, a) => {
                el.get(f.f) === eo && el.get(f.k) === es && (0, p.a)(el, l.h, {
                    ...ew,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, Q[31] = eo, Q[32] = ew, Q[33] = el, Q[34] = es, Q[35] = G) : G = Q[35];
            let ex = G,
                eA = (0, c.useEffectEvent)(ex);
            if (Q[36] === Symbol.for("react.memo_cache_sentinel") ? (F = () => () => {
                    eh.current?.abort()
                }, L = [], Q[36] = F, Q[37] = L) : (F = Q[36], L = Q[37]), (0, c.useEffect)(F, L), Q[38] !== eo || Q[39] !== Z || Q[40] !== $ || Q[41] !== eA || Q[42] !== ed || Q[43] !== J || Q[44] !== ei || Q[45] !== ea || Q[46] !== X || Q[47] !== e_ || Q[48] !== em || Q[49] !== Y.content_url || Q[50] !== ee || Q[51] !== es ? (H = () => {
                    let e = ev.current;
                    if (!ed || null == e) return;
                    let t = ea?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [eo, es, Y.content_url, $, X, Z, J, ee, e_].join(":"),
                        n = crypto.randomUUID(),
                        r = null == t || ey.current.has(a) ? void 0 : E(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return ei && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            ey.current.add(a), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        i = !em || ey.current.has(`${a}:control`) ? void 0 : E(e, k, () => {
                            ey.current.add(`${a}:control`), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        r?.(), i?.()
                    }
                }, Q[38] = eo, Q[39] = Z, Q[40] = $, Q[41] = eA, Q[42] = ed, Q[43] = J, Q[44] = ei, Q[45] = ea, Q[46] = X, Q[47] = e_, Q[48] = em, Q[49] = Y.content_url, Q[50] = ee, Q[51] = es, Q[52] = H) : H = Q[52], Q[53] !== eo || Q[54] !== Z || Q[55] !== $ || Q[56] !== ed || Q[57] !== J || Q[58] !== ei || Q[59] !== ea || Q[60] !== X || Q[61] !== e_ || Q[62] !== em || Q[63] !== Y.content_url || Q[64] !== ee || Q[65] !== es ? (B = [eo, es, Y.content_url, ee, e_, em, ed, ea, $, X, J, Z, ei], Q[53] = eo, Q[54] = Z, Q[55] = $, Q[56] = ed, Q[57] = J, Q[58] = ei, Q[59] = ea, Q[60] = X, Q[61] = e_, Q[62] = em, Q[63] = Y.content_url, Q[64] = ee, Q[65] = es, Q[66] = B) : B = Q[66], (0, c.useEffect)(H, B), !ed) return null;
            Q[67] !== ec ? (W = ec.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image",
                description: "Short tooltip and accessible label for a web-search image Share button on an image tile or fullscreen viewer. Copies a public ChatGPT link containing only the selected image."
            }), Q[67] = ec, Q[68] = W) : W = Q[68];
            let eC = W;
            Q[69] !== eo || Q[70] !== $ || Q[71] !== ex || Q[72] !== eb || Q[73] !== ec || Q[74] !== X || Q[75] !== el || Q[76] !== Y.content_url || Q[77] !== es ? (D = e => {
                if (e.stopPropagation(), null != eh.current || null == eo || null == es || null == $ || null == X) return;
                let t = new AbortController;
                eh.current = t, eI(!0);
                let a = () => {
                        if (t.signal.throwIfAborted(), el.get(f.f) !== eo || el.get(f.k) !== es) throw new DOMException("The active account changed", "AbortError")
                    },
                    n = crypto.randomUUID(),
                    r = crypto.randomUUID(),
                    i = ep.current?.accountId === eo && ep.current?.userId === es && ep.current.imageKey === eb ? ep.current : null,
                    l = i?.shareId,
                    o = () => ({
                        attemptId: r,
                        shareId: l,
                        usedExistingLink: null != i
                    }),
                    s = performance.now();
                ex("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", n, o()), ex("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", n, o());
                let c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    d = null == i ? (async () => {
                        a();
                        let e = await I.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: $,
                                    message_id: X,
                                    content_url: Y.content_url
                                }]
                            },
                            signal: t.signal,
                            assertRequestCurrent: a
                        });
                        a(), l = e.post.id;
                        let n = e.post.web_image_attachments;
                        if (1 !== e.post.attachments.length || n?.length !== 1 || n[0]?.id !== e.post.attachments[0]?.id) throw Error("Shared image is unavailable");
                        let r = function(e) {
                            if (!/^i_[A-Za-z0-9_-]+$/.test(e.id)) throw Error("Invalid image share identity");
                            let t = `/s/${e.id}`,
                                a = new URL(e.permalink ?? t, "https://chatgpt.com");
                            if ("https://chatgpt.com" !== a.origin || a.pathname !== t || a.username || a.password || a.search || a.hash) throw Error("Invalid image share identity");
                            return a.href
                        }(e.post);
                        return ep.current = {
                            accountId: eo,
                            userId: es,
                            imageKey: eb,
                            shareId: l,
                            link: r
                        }, r
                    })().catch(e => {
                        throw c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(i.link).then(e => (a(), e));
                d.catch(S);
                let u = (0, v.a)(d, t.signal);
                u.catch(C), (async () => {
                    try {
                        await d, await u.then(A), a(), ex("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", n, {
                            ...o(),
                            durationMs: performance.now() - s
                        }), el.get(m.f).success(ec.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied",
                            description: "Success toast after a public link to one web-search image is copied to the clipboard."
                        }))
                    } catch (a) {
                        let e = el.get(f.f) !== eo || el.get(f.k) !== es || t.signal.aborted || a instanceof DOMException && "AbortError" === a.name;
                        ex(e ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", n, {
                            ...o(),
                            failureReason: e ? void 0 : c,
                            durationMs: performance.now() - s
                        }), e || el.get(m.f).danger(ec.formatMessage({
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
                    t.signal.aborted || (eh.current = null, eI(!1))
                })
            }, Q[69] = eo, Q[70] = $, Q[71] = ex, Q[72] = eb, Q[73] = ec, Q[74] = X, Q[75] = el, Q[76] = Y.content_url, Q[77] = es, Q[78] = D) : D = Q[78], Q[79] !== eT || Q[80] !== eC || Q[81] !== D ? (V = {
                type: "button",
                "aria-label": eC,
                "aria-busy": eT,
                loading: eT,
                onClick: D
            }, Q[79] = eT, Q[80] = eC, Q[81] = D, Q[82] = V) : V = Q[82];
            let eS = V;
            Q[83] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, n.jsx)(u.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share",
                description: "Label for the fullscreen web-search image viewer button that copies a public ChatGPT link containing only the selected image."
            }), Q[83] = U) : U = Q[83];
            let ek = U;
            if ("image_lightbox" === ee) {
                let e;
                Q[84] !== eS || Q[85] !== er ? (e = "overlay" === er ? (0, n.jsx)(T.a, {
                    ...eS
                }) : (0, n.jsxs)(g.a, {
                    ...eS,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, n.jsx)(_.a, {
                        asset: w.a
                    }), ek]
                }), Q[84] = eS, Q[85] = er, Q[86] = e) : e = Q[86], q = e
            } else {
                let e, t;
                Q[87] !== eT ? (e = eT ? null : (0, n.jsx)(_.a, {
                    asset: w.a
                }), Q[87] = eT, Q[88] = e) : e = Q[88], Q[89] !== eS || Q[90] !== e ? (t = (0, n.jsx)(h.a, {
                    ...eS,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    children: e
                }), Q[89] = eS, Q[90] = e, Q[91] = t) : t = Q[91], q = t
            }
            let eN = "image_tile" === ee ? "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "inline-flex";
            return Q[92] !== q || Q[93] !== eC || Q[94] !== em ? (z = em ? (0, n.jsx)(o.a, {
                content: eC,
                children: q
            }) : null, Q[92] = q, Q[93] = eC, Q[94] = em, Q[95] = z) : z = Q[95], Q[96] !== eN || Q[97] !== z ? (K = (0, n.jsx)("span", {
                ref: ev,
                className: eN,
                children: z
            }), Q[96] = eN, Q[97] = z, Q[98] = K) : K = Q[98], K
        }

        function A(e) {
            if (!e) throw Error("Clipboard write failed")
        }

        function C() {}

        function S() {}

        function k() {
            return !0
        }
    }),
    UIeB: (function(e, t, a) {
        var n = a("EbvC"),
            r = a("iPs9"),
            i = a("Tv1c"),
            l = a.n(i);

        function o(e) {
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
            return l()(a, {
                protocols: ["http", "https"]
            }) && "www.nice.org.uk" !== (0, r.b)((0, r.c)(a, "https://").host).hostname.toLowerCase() ? (0, r.d)(a, null != t && Object.keys(t).length > 0 ? t : {
                utm_source: "chatgpt.com"
            }) : e
        }
        a.d(t, {}, {
            a: s,
            b: function(e, t, a) {
                return t.has(o(e)) ? s(e, a) : e
            },
            c: o
        })
    }),
    Qed5: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("oyxz"),
            l = a("bqtn"),
            o = a("UxN3"),
            s = a("T7LS"),
            c = a("lc3A"),
            d = a("lJIG"),
            u = a("k2zB");
        a.d(t, {}, {
            a: function(e) {
                let t, a, f, g = (0, r.c)(9),
                    {
                        isFavorited: _,
                        disabled: m,
                        onSelect: h
                    } = e;
                return g[0] !== _ ? (t = (0, n.jsx)(o.b, {
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
                }), g[2] = _, g[3] = a) : a = g[3], g[4] !== m || g[5] !== h || g[6] !== t || g[7] !== a ? (f = (0, n.jsx)(l.c.Item, {
                    disabled: m,
                    leftIcon: t,
                    onSelect: h,
                    children: a
                }), g[4] = m, g[5] = h, g[6] = t, g[7] = a, g[8] = f) : f = g[8], f
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
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(894924), a.e(896173)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(894924), a.e(372593)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(226913), a.e(317359)]).then(a.bind(a, "h3EV"))).InlineFlashcards
            }
        })
    })
};