export const __rspack_esm_ids = [536822];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Bbed"),
            o = a("VTN2"),
            l = a("TUMj"),
            s = a("qviq");
        let c = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(652500), a.e(877652), a.e(323008), a.e(785932), a.e(432977)]).then(a.bind(a, "Kcyf"))).SitesPreviewContentReference);
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
                    v = (0, l.d)();
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
                        let e = o.a.safeParse(_);
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
        let o = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(652500), a.e(877652), a.e(329348), a.e(170592)]).then(a.bind(a, "da6p"))).InlineAppBlock, {
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
            a: () => en
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
            m = a("NDDl"),
            h = a("YAi8"),
            p = a("iTtm"),
            b = a("Wf1j"),
            v = a("oyxz"),
            y = a("ygO2"),
            T = a("q5qu"),
            E = a("OWtl"),
            I = a("dQRk"),
            x = a("TUMj"),
            w = a("ldQM");

        function A(e) {
            let t, a = (0, r.c)(3),
                {
                    contentReferenceIndex: i
                } = e,
                o = (0, x.d)(),
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
                d = (0, p.y)(E.a),
                u = (0, b.a)(),
                f = (0, p.x)(w.b, s),
                g = (0, p.x)(w.e, s);
            return (0, p.x)(I.Z, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || g !== c ? null : (l[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), l[0] = u, l[1] = t) : t = l[1], l[2] !== s || l[3] !== d ? (a = () => d.set(w.e, s, null), l[2] = s, l[3] = d, l[4] = a) : a = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(v.a, {
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
            P = a("EUy6"),
            j = a("AyL4"),
            O = a("WAdu"),
            G = a("tSEg"),
            M = a("WFY2");
        let L = N.object({
            type: N.literal("client_defined_widget"),
            category: N.literal("beacon_card"),
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

        function F(e) {
            let t, a, i, o, s, c, d, u, f, g, _ = (0, r.c)(33),
                {
                    contentReferenceIndex: m,
                    reference: h,
                    isStreaming: v,
                    readOnly: y
                } = e,
                T = (0, p.y)(G.a),
                E = (0, x.d)(),
                I = (0, b.a)(),
                w = (0, l.useContext)(O.a),
                [A, C] = (0, l.useState)(!1),
                S = (0, l.useRef)(null);
            _[0] !== h ? (t = L.safeParse(h), _[0] = h, _[1] = t) : t = _[1];
            let k = t;
            _[2] !== m || _[3] !== E ? (a = (0, x.c)(E, m), _[2] = m, _[3] = E, _[4] = a) : a = _[4];
            let N = a,
                M = N?.messageId,
                F = E?.conversationId,
                W = k.success ? k.data.data.url : void 0,
                V = !0 === y || !0 === v || null == E || E.isStreaming || !0 === E.isReadOnly || E.shouldBlockExternalEgress || null == N || null != W && "restricted" === w;
            if (_[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => S.current?.abort(), _[5] = i) : i = _[5], _[6] !== F || _[7] !== V || _[8] !== T || _[9] !== M || _[10] !== W ? (o = [F, V, T, M, W], _[6] = F, _[7] = V, _[8] = T, _[9] = M, _[10] = W, _[11] = o) : o = _[11], (0, l.useLayoutEffect)(i, o), !k.success || A) return null;
            let {
                title: B,
                text: U,
                button_label: q,
                prompt: Y
            } = k.data.data;
            return _[12] !== I ? (s = I.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), _[12] = I, _[13] = s) : s = _[13], _[14] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                S.current?.abort(), C(!0)
            }, _[14] = c) : c = _[14], _[15] !== s ? (d = {
                ariaLabel: s,
                onClick: c
            }, _[15] = s, _[16] = d) : d = _[16], _[17] !== V || _[18] !== Y || _[19] !== T || _[20] !== N || _[21] !== E || _[22] !== W ? (u = () => {
                if (!V && null != E && null != N) {
                    if (null != W) {
                        S.current?.abort();
                        let e = new AbortController;
                        S.current = e;
                        let t = (0, P.e)(T, {
                            type: "open_url",
                            payload: {
                                url: W,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: E,
                            sourceMessageId: N.messageId,
                            signal: e.signal
                        });
                        !1 !== t && t.catch(H);
                        return
                    }
                    null != Y && (0, R.submitChatGptFollowUp)(T, {
                        conversationId: E.conversationId,
                        isTemporaryChat: E.isTemporaryChat ?? !1,
                        parentMessageId: N.messageId,
                        prompt: Y
                    }).catch(D)
                }
            }, _[17] = V, _[18] = Y, _[19] = T, _[20] = N, _[21] = E, _[22] = W, _[23] = u) : u = _[23], _[24] !== q || _[25] !== V || _[26] !== u ? (f = {
                label: q,
                disabled: V,
                onClick: u
            }, _[24] = q, _[25] = V, _[26] = u, _[27] = f) : f = _[27], _[28] !== d || _[29] !== f || _[30] !== U || _[31] !== B ? (g = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(j.a, {
                    variant: "beacon",
                    title: B,
                    description: U,
                    dismissAction: d,
                    primaryAction: f
                })
            }), _[28] = d, _[29] = f, _[30] = U, _[31] = B, _[32] = g) : g = _[32], g
        }

        function D(e) {
            M.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function H(e) {
            M.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var W = a("dhxJ"),
            V = a("ZUun"),
            B = a("VB5Q");

        function U(e) {
            let t, a, i, o, s, c, d, u = (0, r.c)(32),
                {
                    contentReferenceIndex: f,
                    isStreaming: g,
                    readOnly: _,
                    reference: m
                } = e,
                {
                    data: h
                } = m,
                b = (0, x.d)(),
                v = g ?? (b?.isStreaming === !0 && (b.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                y = (0, l.useContext)(O.a),
                T = b?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== T || u[2] !== b?.contentReferenceMessageIds ? (t = null == T ? f : b?.contentReferenceMessageIds?.slice(0, f).filter(e => e === T).length, u[0] = f, u[1] = T, u[2] = b?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let E = t,
                w = b?.conversationId,
                A = T ?? b?.messageId;
            u[4] !== E || u[5] !== w || u[6] !== A ? (a = {
                conversationId: w,
                messageId: A,
                codeBlockIndex: E
            }, u[4] = E, u[5] = w, u[6] = A, u[7] = a) : a = u[7];
            let C = (0, p.x)(I.u, a);
            u[8] !== E || u[9] !== y || u[10] !== v || u[11] !== _ || u[12] !== C || u[13] !== T || u[14] !== b ? (i = b && {
                ...b,
                messageId: T ?? b.messageId,
                codeBlocks: (0, W.a)({
                    code_blocks: null == C || null == E ? void 0 : {
                        [E]: C
                    }
                }) ?? (null == T || T === b.messageId ? b.codeBlocks : void 0),
                isReadOnly: _ || b.isReadOnly,
                isStreaming: v,
                shouldBlockExternalEgress: b.shouldBlockExternalEgress || "restricted" === y
            }, u[8] = E, u[9] = y, u[10] = v, u[11] = _, u[12] = C, u[13] = T, u[14] = b, u[15] = i) : i = u[15], u[16] !== h ? (o = (0, B.a)(h), u[16] = h, u[17] = o) : o = u[17];
            let S = h.model_previewable ? "preview" : void 0;
            return u[18] !== h.language ? (s = h.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = h.language, u[19] = s) : s = u[19], u[20] !== E || u[21] !== h.content || u[22] !== h.editable || u[23] !== h.interactive || u[24] !== v || u[25] !== o || u[26] !== S || u[27] !== s ? (c = (0, n.jsx)(V.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: o,
                codeBlockIndex: E,
                codeBlockInfo: S,
                content: h.content,
                editable: h.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: v,
                isInteractive: h.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1
            }), u[20] = E, u[21] = h.content, u[22] = h.editable, u[23] = h.interactive, u[24] = v, u[25] = o, u[26] = S, u[27] = s, u[28] = c) : c = u[28], u[29] !== c || u[30] !== i ? (d = (0, n.jsx)(x.b.Provider, {
                value: i,
                children: c
            }), u[29] = c, u[30] = i, u[31] = d) : d = u[31], d
        }
        var q = a("DIH2");

        function Y(e) {
            let t, a, i, o, l, s, c = (0, r.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, q.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, q.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                g = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                _ = g && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== g || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (i = g && "inline_anchor" !== d.data.presentation ? (0, q.b)(d.data.pronunciation_hint) : null, c[5] = g, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = i) : i = c[8];
            let m = i;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== m ? (o = null != m && m !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                description: "Readable fallback while pronunciation controls load or fail to load. The text placeholder is the original word or phrase, and pronunciation is its phonetic pronunciation hint. Both values come from the conversation and should be preserved; punctuation may be localized.",
                values: {
                    text: u,
                    pronunciation: m
                }
            }) : u, c[9] = u, c[10] = m, c[11] = o) : o = c[11], c[12] !== u || c[13] !== f ? (l = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = l) : l = c[14], c[15] !== _ || c[16] !== o || c[17] !== l ? (s = (0, n.jsxs)(_, {
                children: [o, l]
            }), c[15] = _, c[16] = o, c[17] = l, c[18] = s) : s = c[18], s)
        }
        var K = a("yxxQ"),
            z = a("VTN2");
        let Q = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: Y,
                errorFallback: Y
            }),
            $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(226913), a.e(648834), a.e(452048), a.e(536161), a.e(826779), a.e(433520), a.e(761111)]).then(a.bind(a, "fkRj"))).ChatGptTranslationContentReference, {
                fallback: Y,
                errorFallback: Y
            }),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(851456), a.e(974872), a.e(653896), a.e(715515), a.e(910861), a.e(344557), a.e(374281), a.e(208123), a.e(95104), a.e(678608), a.e(707452)]).then(a.bind(a, "KKwe"))).DilWritingBlock, g.a),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(226913), a.e(648834), a.e(452048), a.e(536161), a.e(826779), a.e(433520), a.e(133412)]).then(a.bind(a, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(K.a, {})
            }),
            X = (0, s.a)(o.a, {
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
            ee = (0, s.a)(i.e, {
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
            et = (0, l.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(226913), a.e(990054), a.e(785742), a.e(648834), a.e(452048), a.e(536161), a.e(826779), a.e(433520), a.e(724945)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            ea = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function en(e) {
            let t, a, i, o, l, s = (0, r.c)(80),
                {
                    appBlockTopMargin: c,
                    bind: d,
                    contentReferenceIndex: f,
                    isLastNodeInMessage: g,
                    isStreaming: p,
                    mapFullscreenMode: b,
                    readOnly: v,
                    reference: y
                } = e;
            if ("business_profile_starter_pills" === y.category) {
                let e;
                return s[0] !== y.data ? (e = (0, n.jsx)(m.d, {
                    data: y.data
                }), s[0] = y.data, s[1] = e) : e = s[1], e
            }
            if ("beacon_card" === y.category) {
                let e;
                return s[2] !== f || s[3] !== p || s[4] !== v || s[5] !== y ? (e = (0, n.jsx)(F, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: p,
                    readOnly: v
                }), s[2] = f, s[3] = p, s[4] = v, s[5] = y, s[6] = e) : e = s[6], e
            }
            if ("suggest_work_handoff" === y.category) {
                let e;
                return s[7] !== f || s[8] !== p || s[9] !== v ? (e = v || p ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(ea, {
                        contentReferenceIndex: f
                    })
                }), s[7] = f, s[8] = p, s[9] = v, s[10] = e) : e = s[10], e
            }
            if ("health_chart" === y.category) {
                let e;
                return s[11] !== f || s[12] !== p || s[13] !== y ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: p
                }), s[11] = f, s[12] = p, s[13] = y, s[14] = e) : e = s[14], e
            }
            if ("learning_flashcards" === y.category) {
                let e;
                return s[15] !== f || s[16] !== p || s[17] !== v || s[18] !== y ? (e = (0, n.jsx)(ee, {
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
                s[28] !== y.data ? (e = z.e.safeParse(y.data), s[28] = y.data, s[29] = e) : e = s[29];
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
                s[44] !== y ? (e = z.g.safeParse(y), s[44] = y, s[45] = e) : e = s[45];
                let a = e;
                return s[46] !== y || s[47] !== a.data || s[48] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(k.a, {
                    reference: y
                }), s[46] = y, s[47] = a.data, s[48] = a.success, s[49] = t) : t = s[49], t
            }
            s[50] !== y ? (t = z.d.safeParse(y), s[50] = y, s[51] = t) : t = s[51];
            let T = t;
            if (T.success) {
                let e;
                return s[52] !== T.data || s[53] !== f || s[54] !== p || s[55] !== v ? (e = (0, n.jsx)(U, {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    readOnly: v,
                    reference: T.data
                }), s[52] = T.data, s[53] = f, s[54] = p, s[55] = v, s[56] = e) : e = s[56], e
            }
            s[57] !== y ? (a = z.f.safeParse(y), s[57] = y, s[58] = a) : a = s[58];
            let E = a;
            if (E.success) {
                let e;
                return s[59] !== f || s[60] !== E.data ? (e = (0, n.jsx)(er, {
                    contentReferenceIndex: f,
                    reference: E.data
                }), s[59] = f, s[60] = E.data, s[61] = e) : e = s[61], e
            }
            s[62] !== y ? (i = z.h.safeParse(y), s[62] = y, s[63] = i) : i = s[63];
            let I = i;
            if (I.success) {
                let e, t = !0 === p;
                return s[64] !== f || s[65] !== I.data || s[66] !== t ? (e = (0, n.jsx)(Q, {
                    contentReferenceIndex: f,
                    isStreaming: t,
                    reference: I.data
                }), s[64] = f, s[65] = I.data, s[66] = t, s[67] = e) : e = s[67], e
            }
            s[68] !== y ? (o = z.i.safeParse(y), s[68] = y, s[69] = o) : o = s[69];
            let x = o;
            if (x.success) {
                let e;
                return s[70] !== f || s[71] !== p || s[72] !== x.data ? (e = (0, n.jsx)($, {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    reference: x.data
                }), s[70] = f, s[71] = p, s[72] = x.data, s[73] = e) : e = s[73], e
            }
            if (!z.c.safeParse(y).success) {
                let e;
                return s[74] !== y ? (e = (0, n.jsx)(k.c, {
                    reference: y
                }), s[74] = y, s[75] = e) : e = s[75], e
            }
            return s[76] !== f || s[77] !== p || s[78] !== y ? (l = (0, n.jsx)(ei, {
                contentReferenceIndex: f,
                reference: y,
                isStreaming: p
            }), s[76] = f, s[77] = p, s[78] = y, s[79] = l) : l = s[79], l
        }

        function er(e) {
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
            return o[2] !== s || o[3] !== u || o[4] !== d || o[5] !== c ? (a = d && null != et ? (0, n.jsx)(et, {
                contentReferenceIndex: s,
                reference: c
            }) : u, o[2] = s, o[3] = u, o[4] = d, o[5] = c, o[6] = a) : a = o[6], o[7] !== u || o[8] !== a ? (i = (0, n.jsx)(l.Suspense, {
                fallback: u,
                children: a
            }), o[7] = u, o[8] = a, o[9] = i) : i = o[9], i
        }

        function ei(e) {
            let t, a, i = (0, r.c)(6),
                [o] = (0, l.useState)(eo);
            return i[0] !== e || i[1] !== o ? (t = (0, n.jsx)(J, {
                ...e,
                widgetRefSeenAtMs: o
            }), i[0] = e, i[1] = o, i[2] = t) : t = i[2], i[3] !== e.contentReferenceIndex || i[4] !== t ? (a = (0, n.jsx)("div", {
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
            o = a("mEbU"),
            l = a("iTtm"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            g = a("rd6i"),
            _ = a("WAdu"),
            m = a("tSEg"),
            h = a("Yscs"),
            p = a("vldH"),
            b = a("dQRk"),
            v = a("TUMj"),
            y = a("EUy6"),
            T = a("gsAl"),
            E = a("GnI8"),
            I = a("DIH2");

        function x(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: r,
                    context: _,
                    fallback: v,
                    renderImage: x
                } = e,
                w = (0, l.y)(m.a),
                A = (0, s.useRef)(null),
                C = (0, o.a)(A, {
                    once: !0
                }),
                S = (0, s.useContext)(c.a),
                k = (0, l.z)(d.f),
                N = (0, l.z)(d.j),
                R = (0, l.x)(b.j, _.conversationId) ?? _.conversationId,
                P = (0, l.x)(b.R, _.conversationId),
                j = (0, l.x)(b.Y, _.conversationId),
                O = (0, l.x)(T.e, S)?.id,
                G = (0, p.b)(a, {
                    messageId: _.messageId
                }),
                {
                    data: M,
                    isPending: L
                } = (0, i.a)({
                    queryKey: ["chatgpt-sandbox-image", k, N, R, P, j, O, G, r],
                    enabled: C && null != G,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == G) throw Error("Sandbox image has no download target");
                        let a = await (0, p.fetchChatGptFileBlob)({
                            conversationId: R,
                            gizmoId: P,
                            sharedConversationId: j,
                            postId: O,
                            signal: t,
                            target: null == r && "sandbox" === G.type ? (0, y.b)(w, {
                                sandboxPath: G.sandboxPath,
                                turnContext: _,
                                sourceMessageId: G.messageId
                            }) : G,
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
            return null != x && (null != M || null != G && L) ? x(M, A) : (t = null != M ? (0, n.jsx)(g.b, {
                alt: (0, I.b)(a.alt) ?? "",
                downloadFileName: (0, I.b)(a.file_name) ?? void 0,
                hostId: _.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: M
            }) : null != G && L ? (0, n.jsx)(u.a, {
                "aria-label": (0, I.b)(a.alt) ?? void 0
            }) : null != r ? (0, n.jsx)(E.ChatGptFileReference, {
                contentReferenceIndex: r,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, I.b)(a.alt)
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
                    return a[0] !== e.reference.alt ? (t = (0, I.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (r = (0, n.jsx)(n.Fragment, {
                        children: t
                    }), a[2] = t, a[3] = r) : r = a[3], r
                }
                return a[4] !== i || a[5] !== e ? (t = (0, n.jsx)(x, {
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
                sharedConversationId: o,
                signal: l
            } = t, s = e.get(f.Z, r.conversationId), _ = o ?? (s?.kind === "conversation" ? s.id : void 0), m = {
                conversationId: e.get(f.j, r.conversationId) ?? (null == _ ? null : (0, u.d)(_)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.R, r.conversationId),
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
                signal: l
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
                signal: l
            })
        }

        function T(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: o
                } = t,
                l = e.get(f.Z, i.conversationId);
            if (l?.kind === "post") {
                let t = e.get(f.L, i.conversationId)?.[o]?.message;
                if (null != t) {
                    let e = (0, r.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, m.a)(e, i.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: o
            })
        }

        function E(e) {
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
            a: E,
            b: T,
            c: v,
            d: y,
            e: function(e, t) {
                let r, {
                    type: i,
                    payload: c,
                    turnContext: d,
                    sourceMessageId: u,
                    contentReferenceStartIndex: g,
                    parentContext: m,
                    signal: T,
                    onInteraction: I,
                    onLinkClick: x
                } = t;
                if ("open_conversation" === i) {
                    let t = b.safeParse(c);
                    if (t.success && !T.aborted) {
                        let a = (0, h.c)(t.data.conversation_id);
                        (0, o.d)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
                    }
                    return Promise.resolve()
                }
                if ("open_url" !== i) return !1;
                let w = c.url,
                    A = !0 === c.require_safe_url_confirmation;
                if ("string" != typeof w || !w || T.aborted || A && !/^https:\/\//i.test(w)) return Promise.resolve();
                let C = E(w);
                if (null != C) return null == d || null == u ? Promise.resolve() : y(e, {
                    sandboxPath: C,
                    turnContext: d,
                    sourceMessageId: u,
                    signal: T
                });
                try {
                    r = new URL(w, window.location.origin)
                } catch {
                    return Promise.resolve()
                }
                if ("http:" !== r.protocol && "https:" !== r.protocol) return Promise.resolve();
                d?.shouldBlockExternalEgress || I?.(), x?.();
                let S = r.toString();
                return ((0, _.g)(e, {
                    ...v(c),
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                    linkType: "search_citation" === c.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                    conversationId: e.get(f.j, d?.conversationId ?? null) ?? void 0,
                    messageId: u,
                    assistantMessageId: u,
                    turnOrdinal: (0, _.a)(e, d?.conversationId, u),
                    contentReferenceType: "dil",
                    contentReferenceStartIndex: g,
                    parentContext: m,
                    url: d?.shouldBlockExternalEgress ? void 0 : S
                }), A && !d?.safeUrls?.includes(S)) ? async function(e, t, n) {
                    let r = await (0, s.a)(t).catch(() => !1);
                    if (n.aborted) return;
                    if (r) return void(0, p.a)(e, t);
                    let {
                        ExternalLinkConfirmationDialog: i
                    } = await Promise.resolve().then(a.bind(a, "g25Y"));
                    n.aborted || (0, l.f)(e, i, {
                        href: t,
                        initiator: "markdown_link_click",
                        onOpen: () => {
                            n.aborted || (0, p.a)(e, t)
                        }
                    })
                }(e, S, T): ((0, p.a)(e, S), Promise.resolve())
            }
        })
    }),
    hGH3: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e, t, a) {
                if ("u" < typeof IntersectionObserver) return;
                let n = e.ownerDocument,
                    r = !1,
                    i = !1;

                function o() {
                    !i && r && "hidden" !== n.visibilityState && e.isConnected && e.checkVisibility?.({
                        checkOpacity: !0,
                        visibilityProperty: !0
                    }) && t() && c()
                }
                let l = new IntersectionObserver(e => {
                    let [t] = e;
                    r = null != t && t.isIntersecting && t.intersectionRatio >= .5, o()
                }, {
                    threshold: .5
                });

                function s() {
                    r = !1, l.disconnect(), l.takeRecords(), "visible" === n.visibilityState && l.observe(e)
                }

                function c() {
                    i = !0, l.disconnect(), n.removeEventListener("visibilitychange", s), a?.removeEventListener("pointerenter", o), e.removeEventListener("pointerenter", o), e.removeEventListener("focusin", o)
                }
                return n.addEventListener("visibilitychange", s), a?.addEventListener("pointerenter", o), e.addEventListener("pointerenter", o), e.addEventListener("focusin", o), s(), c
            }
        })
    }),
    W5UM: (function(e, t, a) {
        var n = a("Ot7V"),
            r = a("OMIV");
        a.d(t, {}, {
            a: function(e, t) {
                (e.get(r.d, "1775679520") ? n.d : n.f)({
                    href: t,
                    initiator: "markdown_link_click"
                })
            }
        })
    }),
    CMlo: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("iTtm"),
            o = a("zd8w"),
            l = a("Wf1j"),
            s = a("oyxz"),
            c = a("Qgfj"),
            d = a("ygO2"),
            u = a("nhmq"),
            f = a("nzx4"),
            g = a("zLIa"),
            _ = a("SGsN"),
            m = a("OWtl"),
            h = a("hGH3");
        let p = [
            ["helpful", "reasonHelpful"],
            ["wrong_or_confusing", "reasonConfusing"],
            ["broken", "reasonBroken"],
            ["not_relevant_to_question", "reasonNotRelevant"],
            ["data_is_incorrect", "reasonIncorrectInformation"]
        ];

        function b(e) {
            return e.stopPropagation()
        }
        let v = (0, c.f)({
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
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, y, T, E, I, x, w, A, C, S, k, N, R, P, j, O, G, M, L = (0, r.c)(46),
                    {
                        isVisible: F,
                        onImpression: D,
                        onOpen: H,
                        onSubmit: W
                    } = e,
                    V = (0, i.y)(m.a),
                    B = (0, l.a)(),
                    U = (0, o.useId)(),
                    q = (0, o.useRef)(!1),
                    [Y, K] = (0, o.useState)("");
                L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], L[0] = t) : t = L[0];
                let [z, Q] = (0, o.useState)(t), [$, Z] = (0, o.useState)(!1);
                if (!(void 0 === F || F)) return null;
                L[1] !== H ? (a = e => {
                    Z(e), e && H()
                }, L[1] = H, L[2] = a) : a = L[2], L[3] !== D ? (c = e => {
                    if (null != e && null != D && !q.current) return (0, h.a)(e, () => (q.current = !0, D(), !0))
                }, L[3] = D, L[4] = c) : c = L[4], L[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.open",
                    defaultMessage: "Give feedback",
                    description: "Short button label at the far end of the action row below a completed ChatGPT response containing a generated visual answer. Opens a popover where the user can send feedback about that visual."
                }), L[5] = y) : y = L[5], L[6] !== c ? (T = (0, n.jsx)(f.e, {
                    asChild: !0,
                    children: (0, n.jsx)(d.a, {
                        ref: c,
                        color: "ghostSecondary",
                        "data-turn-action-width": "content",
                        size: "compact",
                        type: "button",
                        children: y
                    })
                }), L[6] = c, L[7] = T) : T = L[7], L[8] !== Y || L[9] !== W || L[10] !== z || L[11] !== V ? (E = e => {
                    e.preventDefault();
                    let t = Y.trim();
                    "" !== t && (W({
                        feedbackText: t,
                        feedbackReasons: z
                    }), K(""), Q([]), Z(!1), V.get(_.f).success((0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.toast.success",
                        defaultMessage: "Your feedback has been submitted",
                        description: "Success toast shown immediately after a user sends written feedback about a generated visual answer in a ChatGPT response. The submission is best effort and does not interrupt the conversation."
                    })))
                }, L[8] = Y, L[9] = W, L[10] = z, L[11] = V, L[12] = E) : E = L[12], L[13] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, n.jsx)(f.d, {
                    children: (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT",
                        description: "Heading in the feedback popover opened from a completed ChatGPT response containing a generated visual answer. Invites the user to help improve those visual answers."
                    })
                }), L[13] = I) : I = L[13], L[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.description",
                        defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better.",
                        description: "Two-sentence instruction in the generated visual answer feedback popover. Encourages the ChatGPT user to provide specific positive or negative feedback."
                    })
                }), L[14] = x) : x = L[14], L[15] !== z ? (w = p.map(e => {
                    let [t, a] = e;
                    return (0, n.jsxs)("label", {
                        className: "relative flex cursor-interaction items-center justify-between gap-2",
                        children: [(0, n.jsx)("span", {
                            children: (0, n.jsx)(s.a, {
                                ...v[a]
                            })
                        }), (0, n.jsx)(u.a, {
                            checked: z.includes(t),
                            onCheckedChange: e => {
                                Q(a => e ? [...a, t] : a.filter(e => e !== t))
                            }
                        })]
                    }, t)
                }), L[15] = z, L[16] = w) : w = L[16], L[17] !== w ? (A = (0, n.jsx)("fieldset", {
                    className: "flex flex-col gap-2 text-sm",
                    children: w
                }), L[17] = w, L[18] = A) : A = L[18], L[19] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                    defaultMessage: "Additional feedback",
                    description: "Screen-reader label for the required multiline text field in the generated visual answer feedback popover. The user describes what worked or what should improve."
                }), L[19] = C) : C = L[19], L[20] !== U ? (S = (0, n.jsx)("label", {
                    className: "sr-only",
                    htmlFor: U,
                    children: C
                }), L[20] = U, L[21] = S) : S = L[21], L[22] !== B || L[23] !== z.length ? (k = B.formatMessage(z.length > 0 ? v.placeholderWithReasons : v.placeholderDefault), L[22] = B, L[23] = z.length, L[24] = k) : k = L[24], L[25] === Symbol.for("react.memo_cache_sentinel") ? (N = e => K(e.target.value), L[25] = N) : N = L[25], L[26] !== Y || L[27] !== U || L[28] !== k ? (R = (0, n.jsx)(g.c, {
                    id: U,
                    autoFocus: !0,
                    autoResize: !0,
                    maxLength: 1600,
                    name: "model-written-dil-feedback",
                    placeholder: k,
                    rows: 3,
                    value: Y,
                    variant: "feedback",
                    onChange: N
                }), L[26] = Y, L[27] = U, L[28] = k, L[29] = R) : R = L[29], L[30] !== Y ? (P = Y.trim(), L[30] = Y, L[31] = P) : P = L[31];
                let J = "" === P;
                return L[32] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.submit",
                    defaultMessage: "Send feedback",
                    description: "Short button label in the generated visual answer feedback popover. Submits the required written feedback and any selected reason checkboxes."
                }), L[32] = j) : j = L[32], L[33] !== J ? (O = (0, n.jsx)(d.a, {
                    className: "self-center",
                    color: "primary",
                    disabled: J,
                    radius: "full",
                    size: "menuRow",
                    type: "submit",
                    children: j
                }), L[33] = J, L[34] = O) : O = L[34], L[35] !== A || L[36] !== S || L[37] !== R || L[38] !== O || L[39] !== E ? (G = (0, n.jsx)(f.c, {
                    className: "select-none",
                    align: "end",
                    side: "bottom",
                    variant: "menu",
                    onEscapeKeyDown: b,
                    children: (0, n.jsxs)("form", {
                        className: "flex flex-col gap-3 p-2",
                        onSubmit: E,
                        children: [I, x, A, S, R, O]
                    })
                }), L[35] = A, L[36] = S, L[37] = R, L[38] = O, L[39] = E, L[40] = G) : G = L[40], L[41] !== $ || L[42] !== G || L[43] !== a || L[44] !== T ? (M = (0, n.jsxs)(f.a, {
                    open: $,
                    onOpenChange: a,
                    children: [T, G]
                }), L[41] = $, L[42] = G, L[43] = a, L[44] = T, L[45] = M) : M = L[45], M
            }
        })
    }),
    ciVz: (function(e, t, a) {
        var n = a("iTtm"),
            r = a("xnQm"),
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
                } = t(o.e);
                return a || r || n || "chatgpt" !== i || null == l ? null : (0, c.f)(l) || (0, d.b)(l)
            }),
            _ = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, a = t(i.m);
                return !a.authLoading && !a.accountLoading && (null == a.authMethod || "chatgpt" === a.authMethod && null != a.plan && (!(0, d.b)(a.plan) || (0, r.hi)(a.email ?? null)))
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
            o = a("D015"),
            l = a("ZYeO"),
            s = a("iTtm"),
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
            E = a("CMlo"),
            I = a("ciVz");
        let x = (0, s.d)(m.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null == e || !a(I.a) || !a(h.d, "1205965498") || null != a(b.Z, e.conversationId)) return !1;
            let n = a(b.L, e.conversationId)?.[e.messageId]?.message;
            return null != n && (0, c.r)(n.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && n.metadata?.model_dil_v2 == null && (0, c.r)((0, c.r)(n.metadata?.model_dil)?.dil)?.type == null && (n.metadata?.is_complete ?? "in_progress" !== n.status) === !0
        });

        function w(e) {
            let t, a, l, c, u, g = (0, r.c)(32),
                {
                    conversationId: h,
                    messageId: b,
                    widgetRefId: y,
                    widgetName: I,
                    widgetType: x,
                    isGenui: w,
                    dilUrl: S,
                    dilVersion: k,
                    metadata: N,
                    startIndex: R
                } = e,
                P = void 0 !== w && w,
                j = (0, s.y)(m.a),
                O = (0, d.useRef)(null),
                G = (0, v.d)();
            g[0] !== h || g[1] !== P || g[2] !== b || g[3] !== j || g[4] !== R || g[5] !== G || g[6] !== I || g[7] !== x ? (t = (e, t, a) => {
                try {
                    let n = {
                        actionType: "feedback_button" === e ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: b,
                        contentReferenceStartIndex: null == R ? void 0 : (0, o.a)(R),
                        contentReferenceType: "dil",
                        conversationId: h,
                        feedbackReasons: t?.length ? t : void 0,
                        isGenui: P,
                        messageId: b,
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: G ? (0, T.a)(j, G.conversationId, b) : void 0,
                        widgetActionTarget: e,
                        widgetAffordance: "feedback_form" === e ? i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON : i.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON,
                        widgetName: I,
                        widgetType: x
                    };
                    (void 0 === a || a) && "feedback_button" !== e && (0, T.h)(j, n), (0, _.a)(j, i.j, n)
                } catch {}
            }, g[0] = h, g[1] = P, g[2] = b, g[3] = j, g[4] = R, g[5] = G, g[6] = I, g[7] = x, g[8] = t) : t = g[8];
            let M = t;
            return g[9] !== P || g[10] !== M || g[11] !== G ? (a = P || null == G || !1 === G.trackShownImpressions ? void 0 : () => M("feedback_button"), g[9] = P, g[10] = M, g[11] = G, g[12] = a) : a = g[12], g[13] !== M || g[14] !== j ? (l = () => {
                O.current = j.get(f.m), M("feedback_panel")
            }, g[13] = M, g[14] = j, g[15] = l) : l = g[15], g[16] !== h || g[17] !== S || g[18] !== k || g[19] !== M || g[20] !== b || g[21] !== N || g[22] !== j || g[23] !== I || g[24] !== y || g[25] !== x ? (c = e => {
                let {
                    feedbackText: t,
                    feedbackReasons: a
                } = e, n = j.get(f.m), r = null != O.current && O.current.userId === n.userId && O.current.authenticatedAccountId === n.authenticatedAccountId && O.current.authMethod === n.authMethod;
                M("feedback_form", a, r), r && p.Request.safePost("/unified_user_signals", {
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
                                widget_name: I,
                                widget_type: x,
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
                        widget_name: I,
                        widget_ref_id: y,
                        widget_type: x
                    }
                }).catch(A)
            }, g[16] = h, g[17] = S, g[18] = k, g[19] = M, g[20] = b, g[21] = N, g[22] = j, g[23] = I, g[24] = y, g[25] = x, g[26] = c) : c = g[26], g[27] !== a || g[28] !== l || g[29] !== c || g[30] !== y ? (u = (0, n.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, n.jsx)(E.a, {
                    onImpression: a,
                    onOpen: l,
                    onSubmit: c
                }, y)
            }), g[27] = a, g[28] = l, g[29] = c, g[30] = y, g[31] = u) : u = g[31], u
        }

        function A() {}

        function C() {}
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, o, f, _, m, h, p, T, E, I, A, C, S = (0, r.c)(46),
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
                    G = (0, s.x)(x, O),
                    M = (0, s.x)(b.j, R?.conversationId ?? null);
                if (!G || null == R || null == j || !M || !0 === N.hide_widget_feedback || "custom_agent_run" === N.name || R.isReadOnly || R.shouldBlockExternalEgress || "restricted" === P) return null;
                if (S[6] !== N.dil) {
                    let e = (0, c.r)(N.dil);
                    i = u.string().safeParse(e?.type), S[6] = N.dil, S[7] = i
                } else i = S[7];
                let L = i.data;
                if (S[8] !== M || S[9] !== N.dil || S[10] !== N.dil_url || S[11] !== N.dil_version || S[12] !== N.name || S[13] !== N.start_idx || S[14] !== j.index || S[15] !== j.messageId || S[16] !== L) {
                    let e, t, a, n, r = y.c.safeParse(N.dil).data;
                    S[27] !== N.name ? (e = u.string().safeParse(N.name), S[27] = N.name, S[28] = e) : e = S[28];
                    let i = e.data,
                        s = `${j.messageId}:${j.index}`;
                    S[29] !== N.start_idx ? (t = u.number().safeParse(N.start_idx), S[29] = N.start_idx, S[30] = t) : t = S[30], f = t.data, o = w, h = M, p = j.messageId, T = s, E = i, I = L, S[31] !== N.dil_url ? (a = u.string().safeParse(N.dil_url), S[31] = N.dil_url, S[32] = a) : a = S[32], A = a.data, S[33] !== N.dil_version ? (n = u.string().safeParse(N.dil_version), S[33] = N.dil_version, S[34] = n) : n = S[34], _ = n.data, m = (0, l.g)(r?.appData), S[8] = M, S[9] = N.dil, S[10] = N.dil_url, S[11] = N.dil_version, S[12] = N.name, S[13] = N.start_idx, S[14] = j.index, S[15] = j.messageId, S[16] = L, S[17] = o, S[18] = f, S[19] = _, S[20] = m, S[21] = h, S[22] = p, S[23] = T, S[24] = E, S[25] = I, S[26] = A
                } else o = S[17], f = S[18], _ = S[19], m = S[20], h = S[21], p = S[22], T = S[23], E = S[24], I = S[25], A = S[26];
                return S[35] !== o || S[36] !== f || S[37] !== _ || S[38] !== m || S[39] !== h || S[40] !== p || S[41] !== T || S[42] !== E || S[43] !== I || S[44] !== A ? (C = (0, n.jsx)(o, {
                    conversationId: h,
                    messageId: p,
                    widgetRefId: T,
                    widgetName: E,
                    widgetType: I,
                    dilUrl: A,
                    dilVersion: _,
                    metadata: m,
                    startIndex: f
                }), S[35] = o, S[36] = f, S[37] = _, S[38] = m, S[39] = h, S[40] = p, S[41] = T, S[42] = E, S[43] = I, S[44] = A, S[45] = C) : C = S[45], C
            },
            b: w
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
                created: h,
                onView: p,
                updateFavorite: b
            } = t, v = () => e.get(i.f) === e.value.accountId && e.get(i.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(l.a),
                T = t => {
                    v() && (_(e, a, n, "toast_action", f), p?.((0, d.b)(t, "banner")))
                },
                E = r,
                I = null != g || !u.isFavorited,
                x = null == g || !u.isFavorited,
                w = I ? "save" : "unsave",
                A = performance.now();
            if (x) {
                _(e, a, n, w, f);
                let t = null != (E = await b(I, null == g, null == p ? void 0 : () => T("/library?tab=favorites")));
                if (!v() || (m(e, {
                        eventType: t ? I ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : I ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: w,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - A : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != g) {
                    try {
                        if (null == E) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, E, g.id)
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
                    (0, c.a)(e), e.get(o.f).success(h ? y.formatMessage({
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
                x && I && m(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: w,
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
            }), m(e, {
                eventType: l,
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
            i = a("DNYL"),
            o = a("iTtm"),
            l = a("Wf1j"),
            s = a("jqIZ"),
            c = a("Cslg"),
            d = a("ygO2"),
            u = a("HOLv"),
            f = a("jo5I"),
            g = a("Fmx8"),
            _ = a("Qed5"),
            m = a("VJXV"),
            h = a("mF5c"),
            p = a("ejvO"),
            b = a("Rl4D"),
            v = a("cjMA");

        function y(e) {
            let t, a, c, m, y = (0, r.c)(48),
                {
                    source: T,
                    sources: E,
                    conversationId: I,
                    messageId: x,
                    surface: w,
                    presentation: A
                } = e,
                C = (0, o.y)(g.c),
                S = (0, s.Y)(),
                k = (0, l.a)();
            y[0] !== T ? (t = (0, p.a)(T), y[0] = T, y[1] = t) : t = y[1];
            let N = t,
                {
                    data: R,
                    isError: P
                } = (0, o.x)(p.d, E),
                j = (0, o.x)(p.b, N),
                O = R?.[N];
            y[2] !== I || y[3] !== P || y[4] !== N || y[5] !== x || y[6] !== S || y[7] !== C || y[8] !== T || y[9] !== E || y[10] !== O || y[11] !== w ? (a = async (e, t) => {
                null == O || P || C.get(p.b, N) || (C.set(p.b, N, !0), await (0, h.b)(C, {
                    conversationId: I,
                    messageId: x,
                    libraryFileId: O.library_file_id,
                    status: {
                        favoriteId: O.favorite_id ?? null,
                        isFavorited: null != O.favorite_id
                    },
                    surface: w,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        S(e)
                    },
                    updateFavorite: (e, t, a) => (0, p.e)(C, {
                        source: T,
                        previous: O,
                        save: e,
                        surface: w,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await C.query.invalidate(p.d, E)
                }).finally(() => {
                    C.set(p.b, N, !1)
                }))
            }, y[2] = I, y[3] = P, y[4] = N, y[5] = x, y[6] = S, y[7] = C, y[8] = T, y[9] = E, y[10] = O, y[11] = w, y[12] = a) : a = y[12];
            let G = a;
            if (P) return null;
            if ("menuItem" === A) {
                let e, t, a = O?.favorite_id != null,
                    r = j || null == O;
                return y[13] !== G ? (e = () => void G(), y[13] = G, y[14] = e) : e = y[14], y[15] !== a || y[16] !== r || y[17] !== e ? (t = (0, n.jsx)(_.a, {
                    isFavorited: a,
                    disabled: r,
                    onSelect: e
                }), y[15] = a, y[16] = r, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === A) {
                let e, t, a, r, o, l = O?.favorite_id != null;
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
                } else if (l) {
                    let e;
                    y[23] !== k ? (e = k.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), y[23] = k, y[24] = e) : e = y[24], s = e
                }
                let c = j || null == O || void 0,
                    f = j || null == O;
                y[25] !== G ? (t = e => {
                    e.stopPropagation(), G()
                }, y[25] = G, y[26] = t) : t = y[26];
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
            let M = O?.favorite_id != null,
                L = null == O,
                F = O?.directory_id ?? null;
            return y[39] !== G ? (c = () => void G(), y[39] = G, y[40] = c) : c = y[40], y[41] !== j || y[42] !== M || y[43] !== L || y[44] !== F || y[45] !== c || y[46] !== G ? (m = (0, n.jsx)(f.a, {
                isSaved: M,
                isBusy: j,
                isCheckingStatus: L,
                selectedFolderId: F,
                visibility: "hover",
                onToggleFavorite: c,
                onSelectFolder: G
            }), y[41] = j, y[42] = M, y[43] = L, y[44] = F, y[45] = c, y[46] = G, y[47] = m) : m = y[47], m
        }
        a.d(t, {}, {
            SearchImageFavorite: function(e) {
                let t, a, i, l, s = (0, r.c)(11),
                    d = (0, o.z)(m.d),
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
            l = a("iTtm"),
            s = a("Cslg"),
            c = a("SGsN"),
            d = a("svjy"),
            u = a("Fmx8"),
            f = a("VJXV"),
            g = a("yGJW");
        let _ = new WeakMap,
            m = (0, l.v)(u.c, e => !1);

        function h(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let p = (0, l.q)(u.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, i = [...new Map(e.map(e => [h(e), e])).values()], l = a(u.n);
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
                        }), o.set(e, s));
                        let c = await s.fetch({
                            source: i[0],
                            signal: t
                        });
                        return {
                            [h(i[0])]: c
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
                        save: o,
                        surface: l,
                        showToast: _,
                        onView: m
                    } = t,
                    p = () => e.get(s.f) === e.value.accountId && e.get(s.k) === e.value.userId,
                    b = h(r);
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
                        if (a = await e.get(u.n).safePost("/files/library/image-favorites", {
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
            a: () => w
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("ozm1"),
            o = a("FS1B"),
            l = a("DNYL"),
            s = a("iTtm"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("oyxz"),
            f = a("Cslg"),
            g = a("ygO2"),
            _ = a("HOLv"),
            m = a("SGsN"),
            h = a("Yq7Q"),
            p = a("yGJW"),
            b = a("OWtl"),
            v = a("FGv0"),
            y = a("hZax"),
            T = a("RiLw"),
            E = a("Kwur");

        function I(e, t, a) {
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
        var x = a("lh1o");

        function w(e) {
            let t, a, w, N, R, P, j, O, G, M, L, F, D, H, W, V, B, U, q, Y, K, z = (0, r.c)(99),
                {
                    source: Q,
                    conversationId: $,
                    messageId: Z,
                    imageIndex: J,
                    contentReferenceStartIndex: X,
                    surface: ee,
                    lightboxPresentation: et,
                    imageRef: ea,
                    imageReady: en
                } = e,
                er = void 0 === et ? "classic" : et,
                ei = void 0 === en || en,
                eo = (0, s.y)(b.a),
                el = (0, s.z)(f.f),
                es = (0, s.z)(f.k),
                ec = (0, d.a)();
            z[0] !== el || z[1] !== $ || z[2] !== Z || z[3] !== Q.content_url || z[4] !== es ? (t = null != el && null != es && null != $ && null != Z && /^https?:\/\//i.test(Q.content_url), z[0] = el, z[1] = $, z[2] = Z, z[3] = Q.content_url, z[4] = es, z[5] = t) : t = z[5];
            let ed = t,
                eu = !ed;
            z[6] !== eu ? (a = {
                disableExposureLog: eu
            }, z[6] = eu, z[7] = a) : a = z[7];
            let ef = (0, y.m)("274234392", a);
            z[8] !== ef ? (w = ef.get("placement", "off"), z[8] = ef, z[9] = w) : w = z[9];
            let eg = w,
                e_ = "fullscreen" === eg || "inline_and_fullscreen" === eg ? eg : "off",
                em = ed && ("inline_and_fullscreen" === e_ || "fullscreen" === e_ && "image_lightbox" === ee),
                eh = (0, c.useRef)(null),
                ep = (0, c.useRef)(null);
            z[10] !== X || z[11] !== $ || z[12] !== J || z[13] !== Z || z[14] !== Q.content_url ? (N = [$, Z, X, J, Q.content_url], z[10] = X, z[11] = $, z[12] = J, z[13] = Z, z[14] = Q.content_url, z[15] = N) : N = z[15];
            let eb = N.join(":"),
                ev = (0, c.useRef)(null);
            z[16] === Symbol.for("react.memo_cache_sentinel") ? (R = new Set, z[16] = R) : R = z[16];
            let ey = (0, c.useRef)(R),
                [eT, eE] = (0, c.useState)(!1),
                eI = "image_tile" === ee ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            z[17] !== J ? (P = null == J || J < 0 ? void 0 : (0, i.d)(J), z[17] = J, z[18] = P) : P = z[18], z[19] !== X ? (j = null == X ? void 0 : (0, i.b)(X), z[19] = X, z[20] = j) : j = z[20], z[21] !== e_ || z[22] !== ee || z[23] !== P || z[24] !== j ? (O = {
                surface: ee,
                placement: e_,
                imageIndex: P,
                contentReferenceStartIndex: j
            }, z[21] = e_, z[22] = ee, z[23] = P, z[24] = j, z[25] = O) : O = z[25], z[26] !== $ || z[27] !== Z || z[28] !== eI || z[29] !== O ? (G = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eI,
                conversationId: $,
                messageId: Z,
                imageMetadata: O
            }, z[26] = $, z[27] = Z, z[28] = eI, z[29] = O, z[30] = G) : G = z[30];
            let ex = G;
            z[31] !== el || z[32] !== ex || z[33] !== eo || z[34] !== es ? (M = (e, t, a) => {
                eo.get(f.f) === el && eo.get(f.k) === es && (0, p.a)(eo, o.h, {
                    ...ex,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, z[31] = el, z[32] = ex, z[33] = eo, z[34] = es, z[35] = M) : M = z[35];
            let ew = M,
                eA = (0, c.useEffectEvent)(ew);
            if (z[36] === Symbol.for("react.memo_cache_sentinel") ? (L = () => () => {
                    eh.current?.abort()
                }, F = [], z[36] = L, z[37] = F) : (L = z[36], F = z[37]), (0, c.useEffect)(L, F), z[38] !== el || z[39] !== X || z[40] !== $ || z[41] !== eA || z[42] !== ed || z[43] !== J || z[44] !== ei || z[45] !== ea || z[46] !== Z || z[47] !== e_ || z[48] !== em || z[49] !== Q.content_url || z[50] !== ee || z[51] !== es ? (D = () => {
                    let e = ev.current;
                    if (!ed || null == e) return;
                    let t = ea?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [el, es, Q.content_url, $, Z, X, J, ee, e_].join(":"),
                        n = crypto.randomUUID(),
                        r = null == t || ey.current.has(a) ? void 0 : I(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return ei && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            ey.current.add(a), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        i = !em || ey.current.has(`${a}:control`) ? void 0 : I(e, k, () => {
                            ey.current.add(`${a}:control`), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        r?.(), i?.()
                    }
                }, z[38] = el, z[39] = X, z[40] = $, z[41] = eA, z[42] = ed, z[43] = J, z[44] = ei, z[45] = ea, z[46] = Z, z[47] = e_, z[48] = em, z[49] = Q.content_url, z[50] = ee, z[51] = es, z[52] = D) : D = z[52], z[53] !== el || z[54] !== X || z[55] !== $ || z[56] !== ed || z[57] !== J || z[58] !== ei || z[59] !== ea || z[60] !== Z || z[61] !== e_ || z[62] !== em || z[63] !== Q.content_url || z[64] !== ee || z[65] !== es ? (H = [el, es, Q.content_url, ee, e_, em, ed, ea, $, Z, J, X, ei], z[53] = el, z[54] = X, z[55] = $, z[56] = ed, z[57] = J, z[58] = ei, z[59] = ea, z[60] = Z, z[61] = e_, z[62] = em, z[63] = Q.content_url, z[64] = ee, z[65] = es, z[66] = H) : H = z[66], (0, c.useEffect)(D, H), !ed) return null;
            z[67] !== ec ? (W = ec.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image",
                description: "Short tooltip and accessible label for a web-search image Share button on an image tile or fullscreen viewer. Copies a public ChatGPT link containing only the selected image."
            }), z[67] = ec, z[68] = W) : W = z[68];
            let eC = W;
            z[69] !== el || z[70] !== $ || z[71] !== ew || z[72] !== eb || z[73] !== ec || z[74] !== Z || z[75] !== eo || z[76] !== Q.content_url || z[77] !== es ? (V = e => {
                if (e.stopPropagation(), null != eh.current || null == el || null == es || null == $ || null == Z) return;
                let t = new AbortController;
                eh.current = t, eE(!0);
                let a = () => {
                        if (t.signal.throwIfAborted(), eo.get(f.f) !== el || eo.get(f.k) !== es) throw new DOMException("The active account changed", "AbortError")
                    },
                    n = crypto.randomUUID(),
                    r = crypto.randomUUID(),
                    i = ep.current?.accountId === el && ep.current?.userId === es && ep.current.imageKey === eb ? ep.current : null,
                    o = i?.shareId,
                    l = () => ({
                        attemptId: r,
                        shareId: o,
                        usedExistingLink: null != i
                    }),
                    s = performance.now();
                ew("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", n, l()), ew("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", n, l());
                let c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    d = null == i ? (async () => {
                        a();
                        let e = await E.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: $,
                                    message_id: Z,
                                    content_url: Q.content_url
                                }]
                            },
                            signal: t.signal,
                            assertRequestCurrent: a
                        });
                        a(), o = e.post.id;
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
                            accountId: el,
                            userId: es,
                            imageKey: eb,
                            shareId: o,
                            link: r
                        }, r
                    })().catch(e => {
                        throw c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(i.link).then(e => (a(), e));
                d.catch(S);
                let u = (0, v.a)(d, t.signal);
                u.catch(C), (async () => {
                    try {
                        await d, await u.then(A), a(), ew("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", n, {
                            ...l(),
                            durationMs: performance.now() - s
                        }), eo.get(m.f).success(ec.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied",
                            description: "Success toast after a public link to one web-search image is copied to the clipboard."
                        }))
                    } catch (a) {
                        let e = eo.get(f.f) !== el || eo.get(f.k) !== es || t.signal.aborted || a instanceof DOMException && "AbortError" === a.name;
                        ew(e ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", n, {
                            ...l(),
                            failureReason: e ? void 0 : c,
                            durationMs: performance.now() - s
                        }), e || eo.get(m.f).danger(ec.formatMessage({
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
                    t.signal.aborted || (eh.current = null, eE(!1))
                })
            }, z[69] = el, z[70] = $, z[71] = ew, z[72] = eb, z[73] = ec, z[74] = Z, z[75] = eo, z[76] = Q.content_url, z[77] = es, z[78] = V) : V = z[78], z[79] !== eT || z[80] !== eC || z[81] !== V ? (B = {
                type: "button",
                "aria-label": eC,
                "aria-busy": eT,
                loading: eT,
                onClick: V
            }, z[79] = eT, z[80] = eC, z[81] = V, z[82] = B) : B = z[82];
            let eS = B;
            z[83] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, n.jsx)(u.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share",
                description: "Label for the fullscreen web-search image viewer button that copies a public ChatGPT link containing only the selected image."
            }), z[83] = U) : U = z[83];
            let ek = U;
            if ("image_lightbox" === ee) {
                let e;
                z[84] !== eS || z[85] !== er ? (e = "overlay" === er ? (0, n.jsx)(T.a, {
                    ...eS
                }) : (0, n.jsxs)(g.a, {
                    ...eS,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, n.jsx)(_.a, {
                        asset: x.a
                    }), ek]
                }), z[84] = eS, z[85] = er, z[86] = e) : e = z[86], q = e
            } else {
                let e, t;
                z[87] !== eT ? (e = eT ? null : (0, n.jsx)(_.a, {
                    asset: x.a
                }), z[87] = eT, z[88] = e) : e = z[88], z[89] !== eS || z[90] !== e ? (t = (0, n.jsx)(h.a, {
                    ...eS,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    children: e
                }), z[89] = eS, z[90] = e, z[91] = t) : t = z[91], q = t
            }
            let eN = "image_tile" === ee ? "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "inline-flex";
            return z[92] !== q || z[93] !== eC || z[94] !== em ? (Y = em ? (0, n.jsx)(l.a, {
                content: eC,
                children: q
            }) : null, z[92] = q, z[93] = eC, z[94] = em, z[95] = Y) : Y = z[95], z[96] !== eN || z[97] !== Y ? (K = (0, n.jsx)("span", {
                ref: ev,
                className: eN,
                children: Y
            }), z[96] = eN, z[97] = Y, z[98] = K) : K = z[98], K
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
            s = a("N92g"),
            c = a("Rl4D"),
            d = a("fnLQ"),
            u = a("cjMA");
        a.d(t, {}, {
            a: function(e) {
                let t, a, f, g = (0, r.c)(9),
                    {
                        isFavorited: _,
                        disabled: m,
                        onSelect: h
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
                }), g[2] = _, g[3] = a) : a = g[3], g[4] !== m || g[5] !== h || g[6] !== t || g[7] !== a ? (f = (0, n.jsx)(o.c.Item, {
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
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(894924), a.e(399006)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(894924), a.e(209586)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(226913), a.e(534563)]).then(a.bind(a, "QxL2"))).InlineFlashcards
            }
        })
    })
};