export const __rspack_esm_ids = [684598];
export const __webpack_modules__ = {
    WdQN: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Bbed"),
            g = c("VTN2"),
            h = c("TUMj"),
            i = c("qviq");
        let j = (0, f.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(923720), c.e(652500), c.e(877652), c.e(828911), c.e(816969)]).then(c.bind(c, "bHRB"))).SitesPreviewContentReference);
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, k, l = (0, e.c)(19),
                    {
                        bind: m,
                        onBindInteraction: n,
                        reference: o,
                        isStreaming: p,
                        readOnly: q,
                        withTopMargin: r
                    } = a,
                    s = void 0 !== q && q,
                    t = (0, h.e)();
                if (null != o.data && "object" == typeof o.data && "preview_type" in o.data && "sites" === o.data.preview_type) {
                    let a;
                    return l[0] !== p || l[1] !== o ? (a = (0, d.jsx)(j, {
                        reference: o,
                        isStreaming: p
                    }), l[0] = p, l[1] = o, l[2] = a) : a = l[2], a
                }
                if (l[3] !== p || l[4] !== o || l[5] !== t?.isStreaming) {
                    f = Symbol.for("react.early_return_sentinel");
                    a: {
                        let a = g.a.safeParse(o);
                        if (!a.success) {
                            f = null;
                            break a
                        }({
                            data: b
                        } = a.data);
                        let d = a.data.matched_text;c = t?.isStreaming === !0 && (d?.startsWith("\uE200") ? !d.endsWith("\uE201") || !0 === p : p ?? !0)
                    }
                    l[3] = p, l[4] = o, l[5] = t?.isStreaming, l[6] = b, l[7] = c, l[8] = f
                } else b = l[6], c = l[7], f = l[8];
                if (f !== Symbol.for("react.early_return_sentinel")) return f;
                let u = c && !0 !== b.render_immediately_during_streaming,
                    v = b.display_name ?? b.title;
                return l[9] !== m || l[10] !== b.content || l[11] !== b.style_mode || l[12] !== n || l[13] !== s || l[14] !== u || l[15] !== v || l[16] !== t || l[17] !== r ? (k = (0, d.jsx)(i.a, {
                    bind: m,
                    onBindInteraction: n,
                    content: b.content,
                    readOnly: s,
                    isStreaming: u,
                    title: v,
                    styleMode: b.style_mode,
                    turnContext: t,
                    withTopMargin: r
                }), l[9] = m, l[10] = b.content, l[11] = b.style_mode, l[12] = n, l[13] = s, l[14] = u, l[15] = v, l[16] = t, l[17] = r, l[18] = k) : k = l[18], k
            }
        })
    }),
    qviq: (function(a, b, c) {
        var d = c("ABep"),
            e = c("Bbed"),
            f = c("N55g");
        let g = (0, e.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(652500), c.e(877652), c.e(480042), c.e(564652)]).then(c.bind(c, "da6p"))).InlineAppBlock, {
            errorFallback: (0, d.jsx)(f.a, {})
        });
        c.d(b, {}, {
            a: g
        })
    }),
    VB5Q: (function(a, b, c) {
        var d = c("cC4N");
        c.d(b, {}, {
            a: function(a) {
                let {
                    content: b,
                    has_redundant_fences: c,
                    language: e
                } = a;
                if (!c || !e?.trim()) return b;
                let f = /^( {0,3})(`{3,}|~{3,})/.exec(b)?.[2],
                    g = b.replace(/(?:\r\n|[\r\n])$/, ""),
                    h = Math.max(g.lastIndexOf("\n"), g.lastIndexOf("\r")) + 1,
                    i = /^ {0,3}(`+|~+)[ \t]*$/.exec(g.slice(h))?.[1];
                if (null == f || null == i || i[0] !== f[0] || i.length < f.length) return b;
                let j = (0, d.a)(b).children,
                    k = 1 === j.length ? j[0] : void 0;
                return k?.type === "code" && k.lang?.toLowerCase() === e.trim().toLowerCase() ? k.value : b
            }
        })
    }),
    nD0d: (function(a, b, c) {
        c.d(b, {
            a: () => af
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("iwt4"),
            g = c("yTnN"),
            h = c("zd8w"),
            i = c("Bbed"),
            j = c("DcH0"),
            k = c("nUGc");

        function l(a) {
            let b, c = (0, e.c)(2),
                {
                    reference: f
                } = a,
                g = (0, h.useContext)(k.a) ? f.alt ?? "\u2022\u2022\u2022\u2022" : f.data.value;
            return c[0] !== g ? (b = (0, d.jsx)("span", {
                className: "whitespace-nowrap tabular-nums",
                children: g
            }), c[0] = g, c[1] = b) : b = c[1], b
        }
        var m = c("jZDY"),
            n = c("HAEQ"),
            o = c("WdQN"),
            p = c("NDDl"),
            q = c("YAi8"),
            r = c("Q840"),
            s = c("Wf1j"),
            t = c("oyxz"),
            u = c("Sm6l"),
            v = c("q5qu"),
            w = c("OWtl"),
            x = c("dQRk"),
            y = c("TUMj"),
            z = c("ldQM");

        function A(a) {
            let b, c = (0, e.c)(3),
                {
                    contentReferenceIndex: f
                } = a,
                g = (0, y.e)(),
                h = g?.contentReferenceMessageIds?.[f] ?? g?.messageId;
            return c[0] !== h || c[1] !== g ? (b = null == g || null == h || g.shouldBlockExternalEgress ? null : (0, d.jsx)(B, {
                conversationId: g.conversationId,
                messageId: h
            }), c[0] = h, c[1] = g, c[2] = b) : b = c[2], b
        }

        function B(a) {
            let b, c, f, g, h = (0, e.c)(9),
                {
                    conversationId: i,
                    messageId: j
                } = a,
                k = (0, r.y)(w.a),
                l = (0, s.a)(),
                m = (0, r.x)(z.b, i),
                n = (0, r.x)(z.e, i);
            return (0, r.x)(x.bb, i) || m?.kind !== "questions" || null == m.questionnaire || m.messageId !== j || n !== j ? null : (h[0] !== l ? (b = l.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions"
            }), h[0] = l, h[1] = b) : b = h[1], h[2] !== i || h[3] !== k ? (c = () => k.set(z.e, i, null), h[2] = i, h[3] = k, h[4] = c) : c = h[4], h[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsx)(t.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions"
            }), h[5] = f) : f = h[5], h[6] !== b || h[7] !== c ? (g = (0, d.jsx)(v.a, {
                children: (0, d.jsx)(u.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": b,
                    onClick: c,
                    children: f
                })
            }), h[6] = b, h[7] = c, h[8] = g) : g = h[8], g)
        }
        var C = c("YgzY"),
            D = c("j8Yf"),
            E = c("lAQI"),
            F = c("VlIB"),
            G = c("LtEv"),
            H = c("Kwur"),
            I = c("EUy6"),
            J = c("AyL4"),
            K = c("WAdu"),
            L = c("tSEg"),
            M = c("WFY2");
        let N = E.F({
            type: E.z("client_defined_widget"),
            category: E.z("beacon_card"),
            icebreaker_card_actions: E.F({
                click: E.j(),
                dismiss: E.j()
            }).optional().catch(void 0),
            data: E.F({
                widget_type: E.z("beacon_card"),
                display_mode: E.z("block"),
                title: E.L().max(200).refine(a => a.trim().length > 0).nullish(),
                text: E.L().max(2e3).refine(a => a.trim().length > 0),
                button_label: E.L().max(80).refine(a => a.trim().length > 0),
                prompt: E.L().max(4e3).refine(a => a.trim().length > 0).nullish(),
                url: E.S({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(a => null != a.prompt != (null != a.url))
        });

        function O(a) {
            let b, c, f, g, i, j, k, l, m, n, o, p = (0, e.c)(42),
                {
                    contentReferenceIndex: q,
                    reference: t,
                    isStreaming: u,
                    readOnly: v
                } = a,
                w = (0, r.y)(L.a),
                x = (0, y.e)(),
                z = (0, F.c)(),
                A = (0, s.a)(),
                B = (0, h.useContext)(K.a),
                [C, D] = (0, h.useState)(!1),
                E = (0, h.useRef)(null);
            p[0] !== t ? (b = N.safeParse(t), p[0] = t, p[1] = b) : b = p[1];
            let O = b;
            p[2] !== q || p[3] !== x ? (c = (0, y.c)(x, q), p[2] = q, p[3] = x, p[4] = c) : c = p[4];
            let R = c,
                S = R?.messageId,
                T = x?.conversationId,
                U = O.success ? O.data.data.url : void 0,
                V = !0 === v || !0 === u || null == x || x.isStreaming || !0 === x.isReadOnly || x.shouldBlockExternalEgress || null == R || null != U && "restricted" === B;
            if (p[5] === Symbol.for("react.memo_cache_sentinel") ? (f = () => () => E.current?.abort(), p[5] = f) : f = p[5], p[6] !== T || p[7] !== V || p[8] !== w || p[9] !== S || p[10] !== U ? (g = [T, V, w, S, U], p[6] = T, p[7] = V, p[8] = w, p[9] = S, p[10] = U, p[11] = g) : g = p[11], (0, h.useLayoutEffect)(f, g), !O.success || C) return null;
            let {
                data: W,
                icebreaker_card_actions: X
            } = O.data, {
                title: Y,
                text: Z,
                button_label: $,
                prompt: _
            } = W;
            p[12] !== X || p[13] !== V || p[14] !== R || p[15] !== x ? (i = function(a) {
                !V && x?.conversationId && !x.isTemporaryChat && null != R && X?.[a] && H.Request.safePost("/widget_server_action", {
                    requestBody: {
                        action_type: "icebreaker_beacon_card_interaction",
                        conversation_id: x.conversationId,
                        message_id: R.messageId,
                        ref_id: `${R.messageId}:${R.index}`,
                        payload: {
                            action: a
                        }
                    }
                }).catch(b => {
                    M.a.warning("Icebreaker card interaction failed", {
                        safe: {
                            action: a
                        },
                        sensitive: {
                            error: b
                        }
                    })
                })
            }, p[12] = X, p[13] = V, p[14] = R, p[15] = x, p[16] = i) : i = p[16];
            let aa = i;
            return p[17] !== A ? (j = A.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon"
            }), p[17] = A, p[18] = j) : j = p[18], p[19] !== aa ? (k = () => {
                E.current?.abort(), D(!0), aa("dismiss")
            }, p[19] = aa, p[20] = k) : k = p[20], p[21] !== j || p[22] !== k ? (l = {
                ariaLabel: j,
                onClick: k
            }, p[21] = j, p[22] = k, p[23] = l) : l = p[23], p[24] !== V || p[25] !== z || p[26] !== _ || p[27] !== aa || p[28] !== w || p[29] !== R || p[30] !== x || p[31] !== U ? (m = () => {
                if (!V && null != x && null != R) {
                    if (null != U) {
                        E.current?.abort();
                        let a = new AbortController;
                        E.current = a;
                        let b = (0, I.e)(w, {
                            type: "open_url",
                            payload: {
                                url: U,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: x,
                            sourceMessageId: R.messageId,
                            signal: a.signal
                        });
                        !1 !== b && (aa("click"), b.catch(Q));
                        return
                    }
                    if (null != _) {
                        let a = z(x.conversationId);
                        if (null != a && !a.canSubmitPrompt) return;
                        aa("click"), (null != a ? a.submitPrompt(_, {
                            parentMessageId: R.messageId,
                            preserveDraft: !0,
                            fileUploadIds: [],
                            submissionIntent: "beacon_action"
                        }) : (0, G.submitChatGptFollowUp)(w, {
                            conversationId: x.conversationId,
                            isTemporaryChat: x.isTemporaryChat ?? !1,
                            parentMessageId: R.messageId,
                            prompt: _
                        })).catch(P)
                    }
                }
            }, p[24] = V, p[25] = z, p[26] = _, p[27] = aa, p[28] = w, p[29] = R, p[30] = x, p[31] = U, p[32] = m) : m = p[32], p[33] !== $ || p[34] !== V || p[35] !== m ? (n = {
                label: $,
                disabled: V,
                onClick: m
            }, p[33] = $, p[34] = V, p[35] = m, p[36] = n) : n = p[36], p[37] !== n || p[38] !== l || p[39] !== Z || p[40] !== Y ? (o = (0, d.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, d.jsx)(J.b, {
                    variant: "beacon",
                    title: Y,
                    description: Z,
                    dismissAction: l,
                    primaryAction: n
                })
            }), p[37] = n, p[38] = l, p[39] = Z, p[40] = Y, p[41] = o) : o = p[41], o
        }

        function P(a) {
            M.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function Q(a) {
            M.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }
        var R = c("dhxJ"),
            S = c("ZUun"),
            T = c("VB5Q");

        function U(a) {
            let b, c, f, g, i, j, k, l = (0, e.c)(33),
                {
                    contentReferenceIndex: m,
                    isStreaming: n,
                    readOnly: o,
                    reference: p,
                    renderMath: q
                } = a,
                {
                    data: s
                } = p,
                t = void 0 !== q && q,
                u = (0, y.e)(),
                v = n ?? (u?.isStreaming === !0 && (u.contentReferenceMessageStatuses?.[m] ?? "in_progress") === "in_progress"),
                w = (0, h.useContext)(K.a),
                z = u?.contentReferenceMessageIds?.[m];
            l[0] !== m || l[1] !== z || l[2] !== u?.contentReferenceMessageIds ? (b = null == z ? m : u?.contentReferenceMessageIds?.slice(0, m).filter(a => a === z).length, l[0] = m, l[1] = z, l[2] = u?.contentReferenceMessageIds, l[3] = b) : b = l[3];
            let A = b,
                B = u?.conversationId,
                C = z ?? u?.messageId;
            l[4] !== A || l[5] !== B || l[6] !== C ? (c = {
                conversationId: B,
                messageId: C,
                codeBlockIndex: A
            }, l[4] = A, l[5] = B, l[6] = C, l[7] = c) : c = l[7];
            let D = (0, r.x)(x.v, c);
            l[8] !== A || l[9] !== w || l[10] !== v || l[11] !== o || l[12] !== D || l[13] !== z || l[14] !== u ? (f = u && {
                ...u,
                messageId: z ?? u.messageId,
                codeBlocks: (0, R.a)({
                    code_blocks: null == D || null == A ? void 0 : {
                        [A]: D
                    }
                }) ?? (null == z || z === u.messageId ? u.codeBlocks : void 0),
                isReadOnly: o || u.isReadOnly,
                isStreaming: v,
                shouldBlockExternalEgress: u.shouldBlockExternalEgress || "restricted" === w
            }, l[8] = A, l[9] = w, l[10] = v, l[11] = o, l[12] = D, l[13] = z, l[14] = u, l[15] = f) : f = l[15], l[16] !== s ? (g = (0, T.a)(s), l[16] = s, l[17] = g) : g = l[17];
            let E = s.model_previewable ? "preview" : void 0;
            return l[18] !== s.language ? (i = s.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, l[18] = s.language, l[19] = i) : i = l[19], l[20] !== A || l[21] !== s.content || l[22] !== s.editable || l[23] !== s.interactive || l[24] !== v || l[25] !== t || l[26] !== i || l[27] !== g || l[28] !== E ? (j = (0, d.jsx)(S.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: g,
                codeBlockIndex: A,
                codeBlockInfo: E,
                content: s.content,
                editable: s.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: v,
                isInteractive: s.interactive,
                language: i,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1,
                renderMath: t
            }), l[20] = A, l[21] = s.content, l[22] = s.editable, l[23] = s.interactive, l[24] = v, l[25] = t, l[26] = i, l[27] = g, l[28] = E, l[29] = j) : j = l[29], l[30] !== j || l[31] !== f ? (k = (0, d.jsx)(y.b.Provider, {
                value: f,
                children: j
            }), l[30] = j, l[31] = f, l[32] = k) : k = l[32], k
        }
        var V = c("DIH2");

        function W(a) {
            let b, c, f, g, h, i, j = (0, e.c)(19),
                {
                    reference: k
                } = a;
            j[0] !== k.data.content ? (b = (0, V.b)(k.data.content), j[0] = k.data.content, j[1] = b) : b = j[1];
            let l = b;
            j[2] !== k.category || j[3] !== k.data.translated_text ? (c = "translation_block" === k.category ? (0, V.b)(k.data.translated_text) : null, j[2] = k.category, j[3] = k.data.translated_text, j[4] = c) : c = j[4];
            let m = c,
                n = "language_learning_block" === k.category && "pronunciation" === k.data.intent,
                o = n && "inline_anchor" === k.data.presentation ? "span" : "div";
            j[5] !== n || j[6] !== k.data.presentation || j[7] !== k.data.pronunciation_hint ? (f = n && "inline_anchor" !== k.data.presentation ? (0, V.b)(k.data.pronunciation_hint) : null, j[5] = n, j[6] = k.data.presentation, j[7] = k.data.pronunciation_hint, j[8] = f) : f = j[8];
            let p = f;
            return null == l && null == m ? null : (j[9] !== l || j[10] !== p ? (g = null != p && p !== l ? (0, d.jsx)(t.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                values: {
                    text: l,
                    pronunciation: p
                }
            }) : l, j[9] = l, j[10] = p, j[11] = g) : g = j[11], j[12] !== l || j[13] !== m ? (h = null != m && m !== l ? (0, d.jsxs)(d.Fragment, {
                children: [null == l ? null : (0, d.jsx)("br", {}), m]
            }) : null, j[12] = l, j[13] = m, j[14] = h) : h = j[14], j[15] !== o || j[16] !== g || j[17] !== h ? (i = (0, d.jsxs)(o, {
                children: [g, h]
            }), j[15] = o, j[16] = g, j[17] = h, j[18] = i) : i = j[18], i)
        }
        var X = c("yxxQ"),
            Y = c("VTN2");
        let Z = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(196686)]).then(c.bind(c, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: W,
                errorFallback: W
            }),
            $ = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(865302), c.e(452048), c.e(299268), c.e(433520), c.e(763476), c.e(495578)]).then(c.bind(c, "x0Kj"))).ChatGptTranslationContentReference, {
                fallback: W,
                errorFallback: W
            }),
            _ = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(851456), c.e(942665), c.e(704809), c.e(329156), c.e(829555), c.e(204017), c.e(769377), c.e(698733), c.e(591210), c.e(352824)]).then(c.bind(c, "KKwe"))).DilWritingBlock, n.a),
            aa = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(865302), c.e(452048), c.e(299268), c.e(433520), c.e(763476), c.e(46962)]).then(c.bind(c, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, d.jsx)(X.a, {})
            }),
            ab = (0, i.a)(g.a, {
                fallback: (0, d.jsx)(j.a, {
                    className: "w-full",
                    style: {
                        height: 416
                    }
                }),
                errorFallback: a => {
                    let {
                        reference: b
                    } = a;
                    return (0, d.jsx)(D.a, {
                        reference: b
                    })
                }
            }),
            ac = (0, i.a)(f.e, {
                fallback: (0, d.jsx)(j.a, {
                    className: "w-full"
                }),
                errorFallback: a => {
                    let {
                        reference: b
                    } = a;
                    return (0, d.jsx)(D.a, {
                        reference: b
                    })
                }
            }),
            ad = (0, h.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: a
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(990054), c.e(655457), c.e(865302), c.e(452048), c.e(299268), c.e(433520), c.e(763476), c.e(922789)]).then(c.bind(c, "e83y"));
                return {
                    default: a
                }
            }),
            ae = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(541995)]).then(c.bind(c, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function af(a) {
            let b, c, f, g, h, i = (0, e.c)(81),
                {
                    appBlockTopMargin: j,
                    bind: k,
                    contentReferenceIndex: m,
                    hideChartActions: n,
                    isLastNodeInMessage: r,
                    isStreaming: s,
                    readOnly: t,
                    reference: u,
                    renderCodeBlockMath: v
                } = a;
            if ("business_profile_starter_pills" === u.category) {
                let a;
                return i[0] !== u.data ? (a = (0, d.jsx)(p.d, {
                    data: u.data
                }), i[0] = u.data, i[1] = a) : a = i[1], a
            }
            if ("beacon_card" === u.category) {
                let a;
                return i[2] !== m || i[3] !== s || i[4] !== t || i[5] !== u ? (a = (0, d.jsx)(O, {
                    contentReferenceIndex: m,
                    reference: u,
                    isStreaming: s,
                    readOnly: t
                }), i[2] = m, i[3] = s, i[4] = t, i[5] = u, i[6] = a) : a = i[6], a
            }
            if ("suggest_work_handoff" === u.category) {
                let a;
                return i[7] !== m || i[8] !== s || i[9] !== t ? (a = t || s ? null : (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(ae, {
                        contentReferenceIndex: m
                    })
                }), i[7] = m, i[8] = s, i[9] = t, i[10] = a) : a = i[10], a
            }
            if ("health_chart" === u.category) {
                let a;
                return i[11] !== m || i[12] !== s || i[13] !== u ? (a = (0, d.jsx)(ab, {
                    contentReferenceIndex: m,
                    reference: u,
                    isStreaming: s
                }), i[11] = m, i[12] = s, i[13] = u, i[14] = a) : a = i[14], a
            }
            if ("learning_flashcards" === u.category) {
                let a;
                return i[15] !== m || i[16] !== s || i[17] !== t || i[18] !== u ? (a = (0, d.jsx)(ac, {
                    contentReferenceIndex: m,
                    reference: u,
                    isStreaming: s,
                    readOnly: t
                }), i[15] = m, i[16] = s, i[17] = t, i[18] = u, i[19] = a) : a = i[19], a
            }
            if (C.b.safeParse(u).success) {
                let a;
                return i[20] !== m ? (a = (0, d.jsx)(A, {
                    contentReferenceIndex: m
                }), i[20] = m, i[21] = a) : a = i[21], a
            }
            if ("writing_block" === u.category) {
                let a;
                return i[22] !== m || i[23] !== r || i[24] !== s || i[25] !== t || i[26] !== u.data ? (a = (0, d.jsx)(_, {
                    contentReferenceIndex: m,
                    data: u.data,
                    isLastNodeInMessage: r,
                    isStreaming: s,
                    readOnly: t
                }), i[22] = m, i[23] = r, i[24] = s, i[25] = t, i[26] = u.data, i[27] = a) : a = i[27], a
            }
            if ("email_preview" === u.category) {
                let a;
                i[28] !== u.data ? (a = Y.e.safeParse(u.data), i[28] = u.data, i[29] = a) : a = i[29];
                let b = a;
                if (b.success) {
                    let a;
                    return i[30] !== b.data.sender || i[31] !== b.data.subject ? (a = (0, d.jsx)(D.c, {
                        reference: {
                            title: b.data.subject,
                            subtitle: b.data.sender
                        }
                    }), i[30] = b.data.sender, i[31] = b.data.subject, i[32] = a) : a = i[32], a
                }
            }
            if ("map" === u.category) {
                let a;
                return i[33] !== m || i[34] !== s || i[35] !== u ? (a = (0, d.jsx)(q.a, {
                    contentReferenceIndex: m,
                    isStreaming: s,
                    reference: u
                }), i[33] = m, i[34] = s, i[35] = u, i[36] = a) : a = i[36], a
            }
            if ("app_block" === u.category) {
                let a;
                return i[37] !== j || i[38] !== k || i[39] !== s || i[40] !== t || i[41] !== u ? (a = (0, d.jsx)(o.a, {
                    bind: k,
                    reference: u,
                    isStreaming: s,
                    readOnly: t,
                    withTopMargin: j
                }), i[37] = j, i[38] = k, i[39] = s, i[40] = t, i[41] = u, i[42] = a) : a = i[42], a
            }
            if ("ledger_monetary_value" === u.category) {
                let a, b;
                i[43] !== u ? (a = Y.g.safeParse(u), i[43] = u, i[44] = a) : a = i[44];
                let c = a;
                return i[45] !== u || i[46] !== c.data || i[47] !== c.success ? (b = c.success ? (0, d.jsx)(l, {
                    reference: c.data
                }) : (0, d.jsx)(D.a, {
                    reference: u
                }), i[45] = u, i[46] = c.data, i[47] = c.success, i[48] = b) : b = i[48], b
            }
            i[49] !== u ? (b = Y.d.safeParse(u), i[49] = u, i[50] = b) : b = i[50];
            let w = b;
            if (w.success) {
                let a;
                return i[51] !== w.data || i[52] !== m || i[53] !== s || i[54] !== t || i[55] !== v ? (a = (0, d.jsx)(U, {
                    contentReferenceIndex: m,
                    isStreaming: s,
                    readOnly: t,
                    reference: w.data,
                    renderMath: v
                }), i[51] = w.data, i[52] = m, i[53] = s, i[54] = t, i[55] = v, i[56] = a) : a = i[56], a
            }
            i[57] !== u ? (c = Y.f.safeParse(u), i[57] = u, i[58] = c) : c = i[58];
            let x = c;
            if (x.success) {
                let a;
                return i[59] !== m || i[60] !== x.data ? (a = (0, d.jsx)(ag, {
                    contentReferenceIndex: m,
                    reference: x.data
                }), i[59] = m, i[60] = x.data, i[61] = a) : a = i[61], a
            }
            i[62] !== u ? (f = Y.h.safeParse(u), i[62] = u, i[63] = f) : f = i[63];
            let y = f;
            if (y.success) {
                let a, b = !0 === s;
                return i[64] !== m || i[65] !== y.data || i[66] !== b ? (a = (0, d.jsx)(Z, {
                    contentReferenceIndex: m,
                    isStreaming: b,
                    reference: y.data
                }), i[64] = m, i[65] = y.data, i[66] = b, i[67] = a) : a = i[67], a
            }
            i[68] !== u ? (g = Y.i.safeParse(u), i[68] = u, i[69] = g) : g = i[69];
            let z = g;
            if (z.success) {
                let a;
                return i[70] !== m || i[71] !== s || i[72] !== z.data ? (a = (0, d.jsx)($, {
                    contentReferenceIndex: m,
                    isStreaming: s,
                    reference: z.data
                }), i[70] = m, i[71] = s, i[72] = z.data, i[73] = a) : a = i[73], a
            }
            if (!Y.c.safeParse(u).success) {
                let a;
                return i[74] !== u ? (a = (0, d.jsx)(D.c, {
                    reference: u
                }), i[74] = u, i[75] = a) : a = i[75], a
            }
            return i[76] !== m || i[77] !== n || i[78] !== s || i[79] !== u ? (h = (0, d.jsx)(ah, {
                contentReferenceIndex: m,
                hideActions: n,
                reference: u,
                isStreaming: s
            }), i[76] = m, i[77] = n, i[78] = s, i[79] = u, i[80] = h) : h = i[80], h
        }

        function ag(a) {
            let b, c, f, g = (0, e.c)(10),
                {
                    contentReferenceIndex: i,
                    reference: j
                } = a,
                k = (0, m.a)();
            g[0] !== j.data.content ? (b = (0, d.jsx)("span", {
                "data-learning-block-pending": !0,
                children: j.data.content
            }), g[0] = j.data.content, g[1] = b) : b = g[1];
            let l = b;
            return g[2] !== i || g[3] !== l || g[4] !== k || g[5] !== j ? (c = k && null != ad ? (0, d.jsx)(ad, {
                contentReferenceIndex: i,
                reference: j
            }) : l, g[2] = i, g[3] = l, g[4] = k, g[5] = j, g[6] = c) : c = g[6], g[7] !== l || g[8] !== c ? (f = (0, d.jsx)(h.Suspense, {
                fallback: l,
                children: c
            }), g[7] = l, g[8] = c, g[9] = f) : f = g[9], f
        }

        function ah(a) {
            let b, c, f = (0, e.c)(6),
                [g] = (0, h.useState)(ai);
            return f[0] !== a || f[1] !== g ? (b = (0, d.jsx)(aa, {
                ...a,
                widgetRefSeenAtMs: g
            }), f[0] = a, f[1] = g, f[2] = b) : b = f[2], f[3] !== a.contentReferenceIndex || f[4] !== b ? (c = (0, d.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": a.contentReferenceIndex,
                children: b
            }), f[3] = a.contentReferenceIndex, f[4] = b, f[5] = c) : c = f[5], c
        }

        function ai() {
            return performance.now()
        }
    }),
    yxxQ: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("aqd9");
        c.d(b, {}, {
            a: function() {
                let a, b = (0, e.c)(1);
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("div", {
                    className: "my-2 h-[27rem] w-full pt-5",
                    "aria-busy": !0,
                    children: (0, d.jsx)("div", {
                        ref: g.a,
                        className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                        role: "status",
                        children: (0, d.jsx)(f.a, {
                            id: "chatgpt.contentReferences.chart.creating",
                            defaultMessage: "Creating chart"
                        })
                    })
                }), b[0] = a) : a = b[0], a
            }
        })
    }),
    VTN2: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("o7rp");
        let f = d.L().nullable().optional(),
            g = d.p(["compact", "integer", "raw"]),
            h = f.catch(void 0),
            i = d.F({
                dimension: d.p(["x", "y"]).optional().catch(void 0),
                domain: d.N([d.E(), d.E()]).optional().catch(void 0),
                label: h,
                ticks: d.g(d.F({
                    label: e.c().nullish(),
                    value: d.E()
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(a => a?.filter(a => null != a)).optional()
            }).loose(),
            j = d.F({
                axes: d.g(i.nullable().catch(null)).optional().catch(void 0).transform(a => a?.filter(a => null != a)).optional(),
                chartType: d.p(["bar", "line", "pie", "scatter"]),
                data: d.g(d.J(d.L(), d.R()).nullable().catch(null)).catch([]).transform(a => a.filter(a => null != a)),
                layout: h,
                meta: d.F({
                    description: h,
                    footer: h,
                    title: h
                }).loose().optional().catch(void 0),
                nameKey: h,
                series: d.g(d.F({
                    axisLabel: h,
                    band: d.F({
                        lower: d.E().optional().catch(void 0),
                        upper: d.E().optional().catch(void 0),
                        lowerKey: d.L().min(1).optional().catch(void 0),
                        upperKey: d.L().min(1).optional().catch(void 0)
                    }).optional().catch(void 0),
                    dataKey: d.L().refine(a => a.trim().length > 0),
                    label: h,
                    stack: h,
                    valueFormat: g.optional().catch(void 0),
                    valuePrefix: h,
                    valueSuffix: h
                }).loose().nullable().catch(null)).optional().catch(void 0).transform(a => a?.filter(a => null != a)).optional(),
                valueFormat: g.optional().catch(void 0),
                valueKey: h,
                valuePrefix: h,
                valueSuffix: h,
                xAxisLabel: h,
                xAxisScale: h,
                xKey: h
            }).loose(),
            k = d.F({
                data: d.F({
                    content: d.R(),
                    language: d.z("recharts-json"),
                    widget_type: f
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            l = d.F({
                category: d.z("code_block"),
                data: d.F({
                    content: d.L(),
                    editable: d.j().optional(),
                    has_redundant_fences: d.j().optional(),
                    interactive: d.j().optional(),
                    language: d.L().optional(),
                    model_previewable: d.j().optional()
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            m = d.F({
                alt: f,
                category: d.z("ledger_monetary_value"),
                data: d.F({
                    value: d.L()
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            n = d.F({
                sender: d.L().trim().min(1),
                subject: d.L(),
                url: d.L().trim().min(1)
            }),
            o = d.F({
                category: d.z("app_block"),
                matched_text: d.L().optional(),
                data: d.F({
                    content: d.L(),
                    display_name: d.L().optional(),
                    title: d.L().nullish(),
                    render_immediately_during_streaming: d.j().optional(),
                    style_mode: d.p(["default", "open"]).optional(),
                    type: d.z("inline").optional(),
                    variant: d.z("inline").optional()
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            p = d.F({
                category: d.z("learning_block"),
                data: d.F({
                    content: d.L(),
                    content_is_placeholder: d.j().nullable().optional(),
                    content_type: f,
                    display_mode: d.p(["block", "inline"]).optional(),
                    encoded_content: f,
                    encoded_follow_up_actions: f,
                    encoded_initial_values: f,
                    locale: f,
                    matched_type: f,
                    server_learning_block_version: d.E().nullable().optional(),
                    source: f,
                    thumbnail_asset_key: f,
                    widgetType: f,
                    widget_type: f
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            q = d.F({
                category: d.z("language_learning_block"),
                data: d.F({
                    content: d.L(),
                    intent: d.z("translation"),
                    pronunciation_language: f,
                    target_language: f,
                    translation_pairs: d.R().optional(),
                    language_options: d.R().optional(),
                    max_displayed_translation_pairs: d.E().int().positive().optional().catch(void 0),
                    disable_share_button: d.j().optional().catch(void 0),
                    version: f.catch(void 0)
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            r = d.F({
                add_to_flashcards_enabled: d.j().nullable().optional(),
                content: d.L(),
                continue_in_voice_enabled: d.j().nullable().optional(),
                presentation: d.z("inline_anchor").nullable().optional(),
                pronunciation_audio_text: f,
                pronunciation_hint: f,
                pronunciation_language: f,
                source_text: f,
                speaking_tip: f,
                version: f,
                voice_practice_version: f
            }).loose(),
            s = d.F({
                category: d.z("language_learning_block"),
                data: r.extend({
                    intent: d.z("pronunciation")
                }),
                type: d.z("client_defined_widget")
            }).loose(),
            t = d.F({
                category: d.z("translation_block"),
                data: d.F({
                    content: d.L(),
                    source_language: f,
                    target_language: f,
                    translated_text: f
                }).loose(),
                type: d.z("client_defined_widget")
            }).loose(),
            u = d.m("category", [q, t]);
        c.d(b, {}, {
            a: o,
            b: j,
            c: k,
            d: l,
            e: n,
            f: p,
            g: m,
            h: s,
            i: u
        })
    }),
    netB: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("T0Rc"),
            g = c("mEbU"),
            h = c("Q840"),
            i = c("zd8w"),
            j = c("O0M0"),
            k = c("Cslg"),
            l = c("smHt"),
            m = c("ZHSy"),
            n = c("WAdu"),
            o = c("tSEg"),
            p = c("Yscs"),
            q = c("vldH"),
            r = c("dQRk"),
            s = c("TUMj"),
            t = c("EUy6"),
            u = c("j0nn"),
            v = c("C15n"),
            w = c("DIH2");

        function x(a) {
            let b, {
                    reference: c,
                    contentReferenceIndex: e,
                    context: n,
                    fallback: s,
                    imageComponent: x = m.a,
                    allowWide: y,
                    renderImage: z
                } = a,
                A = (0, h.y)(o.a),
                B = (0, i.useRef)(null),
                {
                    isStreaming: C
                } = n,
                D = (0, g.a)(B, {
                    once: !C
                }),
                E = (0, i.useContext)(j.a),
                F = (0, h.z)(k.f),
                G = (0, h.z)(k.j),
                H = (0, h.x)(r.j, n.conversationId) ?? n.conversationId,
                I = (0, h.x)(r.T, n.conversationId),
                J = (0, h.x)(r.ab, n.conversationId),
                K = (0, h.x)(u.f, E)?.id,
                L = (0, q.c)(c, {
                    messageId: n.messageId
                }),
                M = C ? null : L,
                {
                    data: N,
                    isPending: O
                } = (0, f.a)({
                    queryKey: ["chatgpt-sandbox-image", F, G, H, I, J, K, M, e],
                    enabled: D && null != M,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (null == M) throw Error("Sandbox image has no download target");
                        let c = await (0, q.fetchChatGptFileBlob)({
                            conversationId: H,
                            gizmoId: I,
                            sharedConversationId: J,
                            postId: K,
                            signal: b,
                            target: null == e && "sandbox" === M.type ? (0, t.b)(A, {
                                sandboxPath: M.sandboxPath,
                                turnContext: n,
                                sourceMessageId: M.messageId
                            }) : M,
                            maxBytes: l.a
                        });
                        if (b.throwIfAborted(), !c.type.startsWith("image/")) throw Error("Sandbox image download is not an image");
                        let d = await (0, p.a)(c);
                        return b.throwIfAborted(), d
                    },
                    retry: !1,
                    staleTime: 0,
                    gcTime: 0
                }),
                P = (0, w.b)(c.alt);
            if (null != N || null != L && O) {
                if (null != z) return z(N, B);
                b = (0, d.jsx)(x, {
                    allowWide: y,
                    alt: P ?? "",
                    downloadFileName: (0, w.b)(c.file_name) ?? void 0,
                    hostId: n.hostId,
                    src: N,
                    dimensionKey: JSON.stringify([n.conversationId, n.messageId, e])
                })
            } else b = C ? (0, d.jsx)(d.Fragment, {
                children: P
            }) : null != e ? (0, d.jsx)(v.ChatGptFileReference, {
                contentReferenceIndex: e,
                reference: {
                    ...c,
                    type: "file"
                }
            }) : (0, d.jsx)(d.Fragment, {
                children: s ?? P
            });
            return (0, d.jsx)("span", {
                className: "inline-block max-w-full align-top",
                ref: B,
                children: b
            })
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(7),
                    f = (0, s.e)(),
                    g = (0, i.useContext)(n.a);
                if (null == f || f.isStreaming && null != a.renderImage || f.shouldBlockExternalEgress || "restricted" === g) {
                    let b, e;
                    return c[0] !== a.reference.alt ? (b = (0, w.b)(a.reference.alt), c[0] = a.reference.alt, c[1] = b) : b = c[1], c[2] !== b ? (e = (0, d.jsx)(d.Fragment, {
                        children: b
                    }), c[2] = b, c[3] = e) : e = c[3], e
                }
                return c[4] !== f || c[5] !== a ? (b = (0, d.jsx)(x, {
                    ...a,
                    context: f
                }), c[4] = f, c[5] = a, c[6] = b) : b = c[6], b
            }
        })
    }),
    Oa1z: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return a.formatMessage({
                    id: "dil.modelWrittenV2.actionFailure",
                    defaultMessage: "This action couldn\u2019t be completed. Please try again"
                })
            },
            b: {
                errorAnalytics: {
                    toastId: "dil.modelWrittenV2.actionFailure"
                }
            },
            c: function(a) {
                return a.formatMessage({
                    id: "dil.modelWrittenV2.shareWaitForResponse",
                    defaultMessage: "Wait for ChatGPT to finish responding"
                })
            }
        })
    }),
    EUy6: (function(a, b, c) {
        var d = c("EA6X"),
            e = c("FIIj"),
            f = c("lAQI"),
            g = c("E8Sp"),
            h = c("X6Vn"),
            i = c("nlNF"),
            j = c("ciEf"),
            k = c("zsxQ"),
            l = c("vldH"),
            m = c("OOaz"),
            n = c("dQRk"),
            o = c("rxj0"),
            p = c("xof2"),
            q = c("s60H"),
            r = c("IDHB"),
            s = c("jAnS"),
            t = c("W5UM");
        let u = f.F({
            conversation_id: f.L().min(1).refine(a => "." !== a && ".." !== a && encodeURIComponent(a) === a),
            message_id: f.L().refine(a => a.trim().length > 0).optional().catch(void 0)
        });

        function v(a) {
            let b = a?.link_affordance;
            return {
                linkAffordance: f.p(d.h).exclude(["UNRECOGNIZED"]).safeParse("string" == typeof b ? `CHATGPT_LINK_AFFORDANCE_${b.toUpperCase().replace(/^CHATGPT_LINK_AFFORDANCE_/,"")}` : void 0).data,
                linkIndex: f.v().nonnegative().safeParse(a?.link_index).data,
                citationNumbers: f.g(f.v().positive()).safeParse(a?.citation_numbers).data
            }
        }
        async function w(a, b) {
            let {
                sandboxPath: d,
                turnContext: e,
                sourceMessageId: f,
                sharedConversationId: g,
                signal: h
            } = b, i = a.get(n.bb, e.conversationId), j = g ?? (i?.kind === "conversation" ? i.id : void 0), p = {
                conversationId: a.get(n.j, e.conversationId) ?? (null == j ? null : (0, m.d)(j)),
                fileName: d.slice(d.lastIndexOf("/") + 1),
                gizmoId: a.get(n.T, e.conversationId),
                sharedConversationId: j,
                postId: i?.kind === "post" ? i.post.id : void 0,
                requestSource: "web_dil_action",
                target: x(a, {
                    sandboxPath: d,
                    turnContext: e,
                    sourceMessageId: f
                })
            }, r = (0, q.a)(d);
            if (null == r && !(0, k.a)(d)) return (0, l.b)({
                ...p,
                signal: h
            });
            let {
                openChatGptFile: s
            } = await Promise.resolve().then(c.bind(c, "f2PP"));
            return s(a, {
                ...p,
                isAccessBlocked: a => (0, o.j)(a, e.conversationId),
                messageId: f,
                browserPreview: !0,
                conversationViewerUrl: r,
                tabKey: `${f}:sandbox:${d}`,
                signal: h
            })
        }

        function x(a, b) {
            let c, {
                    sandboxPath: d,
                    turnContext: f,
                    sourceMessageId: g
                } = b,
                h = a.get(n.bb, f.conversationId);
            if (h?.kind === "post") {
                let b = a.get(n.N, f.conversationId)?.[g]?.message;
                if (null != b) {
                    let a = (0, e.a)([b]);
                    c = a.get(d) ?? a.get(decodeURIComponent(d.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, r.a)(a, f.conversationId, {
                type: "sandbox",
                fileId: c,
                sandboxPath: d,
                messageId: g
            })
        }

        function y(a) {
            if (a.length > 4096 || !["sandbox:/mnt/data/", "sandbox:/workspace/", "sandbox:/root/.codex/skills/remote-skills/"].some(b => a.startsWith(b))) return;
            let b = a.slice(8),
                c = b;
            for (let a = 0; a < 4 && !(c.endsWith("/") || c.split("/").some(a => "." === a || ".." === a) || Array.from(c).some(a => 31 >= a.charCodeAt(0) || 127 === a.charCodeAt(0))); a++) try {
                let a = decodeURIComponent(c.replace(/%(?![0-9a-f]{2})/gi, "%25"));
                if (a === c) return b;
                c = a
            } catch {
                break
            }
        }
        c.d(b, {}, {
            a: y,
            b: x,
            c: v,
            d: w,
            e: function(a, b) {
                let e, {
                    type: f,
                    openTarget: k,
                    payload: l,
                    turnContext: m,
                    sourceMessageId: o,
                    contentReferenceStartIndex: q,
                    parentContext: r,
                    signal: x,
                    onInteraction: z,
                    onLinkClick: A,
                    onOpenConversation: B
                } = b;
                if ("open_conversation" === f) {
                    let b = u.safeParse(l);
                    if (b.success && !x.aborted) {
                        let c = (0, s.c)(b.data.conversation_id),
                            d = null == b.data.message_id ? c : `${c}?${new URLSearchParams({messageId:b.data.message_id})}`;
                        if (null == B)(0, g.d)(a, d);
                        else {
                            let c = a.get(i.e) + 1,
                                e = a.get(g.b).prepareNavigation(d, {
                                    state: {
                                        workTurnVisit: {
                                            origin: c,
                                            destination: c
                                        }
                                    }
                                });
                            null != e && (B(b.data.conversation_id, c), e())
                        }
                    }
                    return Promise.resolve()
                }
                if ("open_url" !== f) return !1;
                let C = l.url,
                    D = !0 === l.require_safe_url_confirmation;
                if ("string" != typeof C || !C || x.aborted || D && !/^https:\/\//i.test(C)) return Promise.resolve();
                let E = y(C);
                if (null != E) return null == m || null == o ? Promise.resolve() : w(a, {
                    sandboxPath: E,
                    turnContext: m,
                    sourceMessageId: o,
                    signal: x
                });
                try {
                    e = new URL(C, window.location.origin)
                } catch {
                    return Promise.resolve()
                }
                if ("http:" !== e.protocol && "https:" !== e.protocol) return Promise.resolve();
                m?.shouldBlockExternalEgress || z?.(), A?.();
                let F = e.toString();
                return ((0, p.g)(a, {
                    ...v(l),
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    surfaceLocation: d.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                    linkType: "search_citation" === l.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                    conversationId: a.get(n.j, m?.conversationId ?? null) ?? void 0,
                    messageId: o,
                    assistantMessageId: o,
                    turnOrdinal: (0, p.a)(a, m?.conversationId, o),
                    contentReferenceType: "dil",
                    contentReferenceStartIndex: q,
                    parentContext: r,
                    url: m?.shouldBlockExternalEgress ? void 0 : F
                }), D && !m?.safeUrls?.includes(F)) ? async function(a, b, d, e) {
                    let f = await (0, j.b)(b).catch(() => !1);
                    if (d.aborted) return;
                    if (f) return void(0, t.b)(a, b, e);
                    let {
                        ExternalLinkConfirmationDialog: g
                    } = await Promise.resolve().then(c.bind(c, "g25Y"));
                    d.aborted || (0, h.f)(a, g, {
                        href: b,
                        initiator: "markdown_link_click",
                        onOpen: () => {
                            d.aborted || (0, t.b)(a, b, e)
                        }
                    })
                }(a, F, x, k): ((0, t.b)(a, F, k), Promise.resolve())
            }
        })
    }),
    hGH3: (function(a, b, c) {
        var d = c("xsLm");
        c.d(b, {}, {
            a: function(a, b, c) {
                return (0, d.a)(a, b, {
                    subscribe: b => (c?.addEventListener("pointerenter", b), a.addEventListener("pointerenter", b), a.addEventListener("focusin", b), () => {
                        c?.removeEventListener("pointerenter", b), a.removeEventListener("pointerenter", b), a.removeEventListener("focusin", b)
                    })
                })
            }
        })
    }),
    W5UM: (function(a, b, c) {
        var d = c("Ot7V"),
            e = c("isy9"),
            f = c("OMIV"),
            g = c("UIeB");
        let h = new Set(["entity_reviews_widget", "entity_reviews_ref_widget", "restaurant_reviews", "EntityReviewsWidget", "EntityReviewsRefWidget", "RestaurantReviews"]);

        function i(a, b, c) {
            return "sidebar" === b && null != c && h.has(c) && a.get(f.e, "1492523517") ? "in-app-browser" : void 0
        }

        function j(a, b, c, e) {
            (a.get(f.e, "1775679520") ? d.d : d.f)({
                href: b,
                disposition: e,
                initiator: "markdown_link_click",
                openTarget: c
            })
        }
        c.d(b, {}, {
            a: i,
            b: j,
            c: function(a, b, c, d, f) {
                (0, e.b)(a, b) || j(a, (0, g.a)(b), i(a, c, d), f)
            }
        })
    }),
    CMlo: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("oyxz"),
            j = c("Qgfj"),
            k = c("Sm6l"),
            l = c("nhmq"),
            m = c("nzx4"),
            n = c("zLIa"),
            o = c("SGsN"),
            p = c("OWtl"),
            q = c("hGH3");

        function r(a) {
            return a.stopPropagation()
        }
        let s = (0, j.f)({
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
                    defaultMessage: "Tell our team why\u2026"
                },
                placeholderDefault: {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.default",
                    defaultMessage: "What would you like us to know?"
                }
            }),
            t = [{
                reason: "helpful",
                labelMessage: s.reasonHelpful
            }, {
                reason: "wrong_or_confusing",
                labelMessage: s.reasonConfusing
            }, {
                reason: "broken",
                labelMessage: s.reasonBroken
            }, {
                reason: "not_relevant_to_question",
                labelMessage: s.reasonNotRelevant
            }, {
                reason: "data_is_incorrect",
                labelMessage: s.reasonIncorrectInformation
            }];
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = (0, e.c)(58),
                    {
                        isVisible: O,
                        feedbackConfig: P,
                        onImpression: Q,
                        onOpen: R,
                        onSubmit: S
                    } = a,
                    T = (0, f.y)(p.a),
                    U = (0, h.a)(),
                    V = (0, g.useId)(),
                    W = (0, g.useRef)(!1),
                    [X, Y] = (0, g.useState)("");
                N[0] === Symbol.for("react.memo_cache_sentinel") ? (b = [], N[0] = b) : b = N[0];
                let [Z, $] = (0, g.useState)(b), [_, aa] = (0, g.useState)(!1), ab = P?.reason_options ?? t;
                if (N[1] !== ab || N[2] !== Z) {
                    let a;
                    N[4] !== ab ? (a = a => ab.some(b => b.reason === a), N[4] = ab, N[5] = a) : a = N[5], c = Z.filter(a), N[1] = ab, N[2] = Z, N[3] = c
                } else c = N[3];
                let ac = c;
                if (!(void 0 === O || O)) return null;
                if (N[6] !== R ? (j = a => {
                        aa(a), a && R()
                    }, N[6] = R, N[7] = j) : j = N[7], N[8] !== Q ? (u = a => {
                        if (null != a && null != Q && !W.current) return (0, q.a)(a, () => (W.current = !0, Q(), !0))
                    }, N[8] = Q, N[9] = u) : u = N[9], N[10] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, d.jsx)(i.a, {
                        id: "chatgpt.modelWrittenDil.feedback.button.open",
                        defaultMessage: "Give feedback"
                    }), N[10] = v) : v = N[10], N[11] !== u ? (w = (0, d.jsx)(m.e, {
                        asChild: !0,
                        children: (0, d.jsx)(k.a, {
                            ref: u,
                            color: "ghostSecondary",
                            "data-turn-action-width": "content",
                            size: "compact",
                            type: "button",
                            children: v
                        })
                    }), N[11] = u, N[12] = w) : w = N[12], N[13] !== X || N[14] !== S || N[15] !== T || N[16] !== ac ? (x = a => {
                        a.preventDefault();
                        let b = X.trim();
                        "" !== b && (S({
                            feedbackText: b,
                            feedbackReasons: ac
                        }), Y(""), $([]), aa(!1), T.get(o.f).success((0, d.jsx)(i.a, {
                            id: "chatgpt.modelWrittenDil.feedback.toast.success",
                            defaultMessage: "Your feedback has been submitted"
                        })))
                    }, N[13] = X, N[14] = S, N[15] = T, N[16] = ac, N[17] = x) : x = N[17], N[18] !== P ? (y = P ? P.title : (0, d.jsx)(i.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT"
                    }), N[18] = P, N[19] = y) : y = N[19], N[20] !== y ? (z = (0, d.jsx)(m.d, {
                        children: y
                    }), N[20] = y, N[21] = z) : z = N[21], N[22] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, d.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, d.jsx)(i.a, {
                            id: "chatgpt.modelWrittenDil.feedback.popover.description",
                            defaultMessage: "Tell us what\u2019s working and what\u2019s not. The more specific the feedback, the better."
                        })
                    }), N[22] = A) : A = N[22], N[23] !== ab || N[24] !== Z) {
                    let a;
                    N[26] !== Z ? (a = a => (0, d.jsxs)("label", {
                        className: "relative flex cursor-interaction items-center justify-between gap-2",
                        children: [(0, d.jsx)("span", {
                            children: "label" in a ? a.label : (0, d.jsx)(i.a, {
                                ...a.labelMessage
                            })
                        }), (0, d.jsx)(l.a, {
                            checked: Z.includes(a.reason),
                            onCheckedChange: b => {
                                $(c => b ? [...c, a.reason] : c.filter(b => b !== a.reason))
                            }
                        })]
                    }, a.reason), N[26] = Z, N[27] = a) : a = N[27], B = ab.map(a), N[23] = ab, N[24] = Z, N[25] = B
                } else B = N[25];
                N[28] !== B ? (C = (0, d.jsx)("fieldset", {
                    className: "flex flex-col gap-2 text-sm",
                    children: B
                }), N[28] = B, N[29] = C) : C = N[29], N[30] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, d.jsx)(i.a, {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                    defaultMessage: "Additional feedback"
                }), N[30] = D) : D = N[30], N[31] !== V ? (E = (0, d.jsx)("label", {
                    className: "sr-only",
                    htmlFor: V,
                    children: D
                }), N[31] = V, N[32] = E) : E = N[32], N[33] !== U || N[34] !== ac.length ? (F = U.formatMessage(ac.length > 0 ? s.placeholderWithReasons : s.placeholderDefault), N[33] = U, N[34] = ac.length, N[35] = F) : F = N[35], N[36] === Symbol.for("react.memo_cache_sentinel") ? (G = a => Y(a.target.value), N[36] = G) : G = N[36], N[37] !== X || N[38] !== V || N[39] !== F ? (H = (0, d.jsx)(n.c, {
                    id: V,
                    autoFocus: !0,
                    autoResize: !0,
                    maxLength: 1600,
                    name: "model-written-dil-feedback",
                    placeholder: F,
                    rows: 3,
                    value: X,
                    variant: "feedback",
                    onChange: G
                }), N[37] = X, N[38] = V, N[39] = F, N[40] = H) : H = N[40], N[41] !== X ? (I = X.trim(), N[41] = X, N[42] = I) : I = N[42];
                let ad = "" === I;
                return N[43] === Symbol.for("react.memo_cache_sentinel") ? (J = (0, d.jsx)(i.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.submit",
                    defaultMessage: "Send feedback"
                }), N[43] = J) : J = N[43], N[44] !== ad ? (K = (0, d.jsx)(k.a, {
                    className: "self-center",
                    color: "primary",
                    disabled: ad,
                    radius: "full",
                    size: "menuRow",
                    type: "submit",
                    children: J
                }), N[44] = ad, N[45] = K) : K = N[45], N[46] !== z || N[47] !== C || N[48] !== E || N[49] !== H || N[50] !== K || N[51] !== x ? (L = (0, d.jsx)(m.c, {
                    className: "select-none",
                    align: "end",
                    side: "bottom",
                    variant: "menu",
                    onEscapeKeyDown: r,
                    children: (0, d.jsxs)("form", {
                        className: "flex flex-col gap-3 p-2",
                        onSubmit: x,
                        children: [z, A, C, E, H, K]
                    })
                }), N[46] = z, N[47] = C, N[48] = E, N[49] = H, N[50] = K, N[51] = x, N[52] = L) : L = N[52], N[53] !== _ || N[54] !== L || N[55] !== j || N[56] !== w ? (M = (0, d.jsxs)(m.a, {
                    open: _,
                    onOpenChange: j,
                    children: [w, L]
                }), N[53] = _, N[54] = L, N[55] = j, N[56] = w, N[57] = M) : M = N[57], M
            }
        })
    }),
    ciVz: (function(a, b, c) {
        var d = c("Q840"),
            e = c("yZpl"),
            f = c("Cslg"),
            g = c("OFP1"),
            h = c("OWtl"),
            i = c("tSEg"),
            j = c("UR81"),
            k = c("vw1R"),
            l = c("g2p6");
        let m = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a;
                return b(l.p).data?.trainingAllowed === !0
            }),
            n = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, {
                    authLoading: c,
                    accountInfoLoading: d,
                    accountInfoError: e,
                    authMethod: f,
                    plan: h
                } = b(g.g);
                return c || e || d || "chatgpt" !== f || null == h ? null : (0, j.g)(h) || (0, k.b)(h)
            }),
            o = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, c = b(f.n);
                return !c.authLoading && !c.accountLoading && (null == c.authMethod || "chatgpt" === c.authMethod && null != c.plan && (!(0, k.b)(c.plan) || (0, e.Ai)(c.email ?? null)))
            }),
            p = (0, d.v)(i.a, a => null),
            q = (0, d.v)(i.a, a => "unknown"),
            r = (0, d.u)(i.a, !1);
        c.d(b, {}, {
            a: o,
            b: r,
            c: n,
            d: m,
            e: p,
            f: q
        })
    }),
    hCYm: (function(a, b, c) {
        c.d(b, {
            a: () => F,
            b: () => G
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("EA6X"),
            g = c("D015"),
            h = c("XtHz"),
            i = c("Q840"),
            j = c("AuIy"),
            k = c("zd8w"),
            l = c("Wf1j"),
            m = c("lAQI"),
            n = c("Cslg"),
            o = c("WAdu"),
            p = c("yGJW"),
            q = c("OWtl"),
            r = c("OMIV"),
            s = c("Kwur"),
            t = c("dQRk"),
            u = c("TUMj"),
            v = c("gKmr"),
            w = c("xof2"),
            x = c("CMlo"),
            y = c("rHrT");
        let z = m.p(["helpful", "wrong_or_confusing", "broken", "not_relevant_to_question", "data_is_incorrect"]),
            A = m.L().refine(a => a.trim().length > 0),
            B = m.F({
                locale: A,
                title: A,
                reason_options: m.g(m.F({
                    reason: z,
                    label: A
                })).min(1).refine(a => new Set(a.map(a => {
                    let {
                        reason: b
                    } = a;
                    return b
                })).size === a.length)
            });

        function C(a) {
            return new Intl.Locale(a.trim().replaceAll("_", "-")).baseName
        }
        var D = c("ciVz");
        let E = (0, i.d)(q.a, (a, b) => {
            let {
                get: c
            } = b;
            if (null == a || !c(D.a) || !c(r.e, "1205965498") || null != c(t.bb, a.conversationId)) return !1;
            let d = c(t.N, a.conversationId)?.[a.messageId]?.message;
            return null != d && (0, j.s)(d.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && d.metadata?.model_dil_v2 == null && (0, j.s)((0, j.s)(d.metadata?.model_dil)?.dil)?.type == null && (d.metadata?.is_complete ?? "in_progress" !== d.status) === !0
        });

        function F(a) {
            let b, c, f, g, l, n, p, q, r, s, w, x, y, z, A, B = (0, e.c)(49),
                {
                    contentReferenceIndex: C,
                    reference: D
                } = a,
                F = (0, u.e)(),
                H = (0, k.useContext)(o.a);
            B[0] !== C || B[1] !== F ? (b = (0, u.c)(F, C), B[0] = C, B[1] = F, B[2] = b) : b = B[2];
            let I = b;
            B[3] !== I || B[4] !== F ? (c = null != F && null != I ? {
                conversationId: F.conversationId,
                messageId: I.messageId
            } : null, B[3] = I, B[4] = F, B[5] = c) : c = B[5];
            let J = c,
                K = (0, i.x)(E, J),
                L = (0, i.x)(t.j, F?.conversationId ?? null);
            if (!K || null == F || null == I || !L || !0 === D.hide_widget_feedback || "custom_agent_run" === D.name || F.isReadOnly || F.shouldBlockExternalEgress || "restricted" === H) return null;
            if (B[6] !== D.dil) {
                let a = (0, j.s)(D.dil);
                f = m.L().safeParse(a?.type), B[6] = D.dil, B[7] = f
            } else f = B[7];
            let M = f.data;
            if (B[8] !== L || B[9] !== D.dil || B[10] !== D.dil_url || B[11] !== D.dil_version || B[12] !== D.feedback_config || B[13] !== D.name || B[14] !== D.start_idx || B[15] !== I.index || B[16] !== I.messageId || B[17] !== M) {
                let a, b, c, d, e = v.c.safeParse(D.dil).data;
                B[29] !== D.name ? (a = m.L().safeParse(D.name), B[29] = D.name, B[30] = a) : a = B[30];
                let f = a.data,
                    i = `${I.messageId}:${I.index}`;
                B[31] !== D.start_idx ? (b = m.E().safeParse(D.start_idx), B[31] = D.start_idx, B[32] = b) : b = B[32], l = b.data, g = G, r = L, s = I.messageId, w = i, x = D.feedback_config, y = f, z = M, B[33] !== D.dil_url ? (c = m.L().safeParse(D.dil_url), B[33] = D.dil_url, B[34] = c) : c = B[34], n = c.data, B[35] !== D.dil_version ? (d = m.L().safeParse(D.dil_version), B[35] = D.dil_version, B[36] = d) : d = B[36], p = d.data, q = (0, h.g)(e?.appData), B[8] = L, B[9] = D.dil, B[10] = D.dil_url, B[11] = D.dil_version, B[12] = D.feedback_config, B[13] = D.name, B[14] = D.start_idx, B[15] = I.index, B[16] = I.messageId, B[17] = M, B[18] = g, B[19] = l, B[20] = n, B[21] = p, B[22] = q, B[23] = r, B[24] = s, B[25] = w, B[26] = x, B[27] = y, B[28] = z
            } else g = B[18], l = B[19], n = B[20], p = B[21], q = B[22], r = B[23], s = B[24], w = B[25], x = B[26], y = B[27], z = B[28];
            return B[37] !== g || B[38] !== l || B[39] !== n || B[40] !== p || B[41] !== q || B[42] !== r || B[43] !== s || B[44] !== w || B[45] !== x || B[46] !== y || B[47] !== z ? (A = (0, d.jsx)(g, {
                conversationId: r,
                messageId: s,
                widgetRefId: w,
                feedbackConfig: x,
                widgetName: y,
                widgetType: z,
                dilUrl: n,
                dilVersion: p,
                metadata: q,
                startIndex: l
            }), B[37] = g, B[38] = l, B[39] = n, B[40] = p, B[41] = q, B[42] = r, B[43] = s, B[44] = w, B[45] = x, B[46] = y, B[47] = z, B[48] = A) : A = B[48], A
        }

        function G(a) {
            let b, c, h, j, m, o, r = (0, e.c)(36),
                {
                    conversationId: t,
                    messageId: v,
                    widgetRefId: z,
                    widgetName: A,
                    widgetType: D,
                    isGenui: E,
                    dilUrl: F,
                    dilVersion: G,
                    metadata: J,
                    startIndex: K,
                    feedbackConfig: L
                } = a,
                M = void 0 !== E && E,
                N = (0, i.y)(q.a),
                O = (0, l.a)(),
                P = (0, k.useRef)(null),
                Q = (0, u.e)();
            r[0] !== t || r[1] !== M || r[2] !== v || r[3] !== N || r[4] !== K || r[5] !== Q || r[6] !== A || r[7] !== D ? (b = (a, b, c) => {
                try {
                    let d = {
                        actionType: "feedback_button" === a ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: v,
                        contentReferenceStartIndex: null == K ? void 0 : (0, g.a)(K),
                        contentReferenceType: "dil",
                        conversationId: t,
                        feedbackReasons: b?.length ? b : void 0,
                        isGenui: M,
                        messageId: v,
                        surfaceLocation: f.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: Q ? (0, w.a)(N, Q.conversationId, v) : void 0,
                        widgetActionTarget: a,
                        widgetAffordance: "feedback_form" === a ? f.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON : f.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON,
                        widgetName: A,
                        widgetType: D
                    };
                    (void 0 === c || c) && "feedback_button" !== a && (0, w.h)(N, d), (0, p.a)(N, f.j, d)
                } catch {}
            }, r[0] = t, r[1] = M, r[2] = v, r[3] = N, r[4] = K, r[5] = Q, r[6] = A, r[7] = D, r[8] = b) : b = r[8];
            let R = b;
            return r[9] !== L || r[10] !== O.locale ? (c = function(a, b) {
                let c = B.safeParse(a);
                if (c.success) try {
                    return (0, y.f)(C(c.data.locale), C(b)) ? c.data : void 0
                } catch {
                    return
                }
            }(L, O.locale), r[9] = L, r[10] = O.locale, r[11] = c) : c = r[11], r[12] !== M || r[13] !== R || r[14] !== Q ? (h = M || null == Q || !1 === Q.trackShownImpressions ? void 0 : () => R("feedback_button"), r[12] = M, r[13] = R, r[14] = Q, r[15] = h) : h = r[15], r[16] !== R || r[17] !== N ? (j = () => {
                P.current = N.get(n.n), R("feedback_panel")
            }, r[16] = R, r[17] = N, r[18] = j) : j = r[18], r[19] !== t || r[20] !== F || r[21] !== G || r[22] !== R || r[23] !== v || r[24] !== J || r[25] !== N || r[26] !== A || r[27] !== z || r[28] !== D ? (m = a => {
                let {
                    feedbackText: b,
                    feedbackReasons: c
                } = a, d = N.get(n.n), e = null != P.current && P.current.userId === d.userId && P.current.authenticatedAccountId === d.authenticatedAccountId && P.current.authMethod === d.authMethod;
                R("feedback_form", c, e), e && s.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "widget_feedback",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: t,
                                message_id: v
                            },
                            widget_feedback: {
                                feedback: b,
                                checked_reasons: c.length > 0 ? c : void 0,
                                widget_name: A,
                                widget_type: D,
                                widget_ref_id: z,
                                dil_version: G
                            }
                        }
                    }
                }).catch(I), s.Request.safePost("/conversation/message/genui/feedback", {
                    requestBody: {
                        checked_reasons: c.length > 0 ? c : void 0,
                        conversation_id: t,
                        dil_url: F,
                        dil_version: G,
                        feedback: b,
                        language: globalThis.navigator?.language ?? "en-US",
                        message_id: v,
                        metadata: J,
                        timestamp_client: Date.now(),
                        user_agent: globalThis.navigator?.userAgent || void 0,
                        widget_name: A,
                        widget_ref_id: z,
                        widget_type: D
                    }
                }).catch(H)
            }, r[19] = t, r[20] = F, r[21] = G, r[22] = R, r[23] = v, r[24] = J, r[25] = N, r[26] = A, r[27] = z, r[28] = D, r[29] = m) : m = r[29], r[30] !== c || r[31] !== h || r[32] !== j || r[33] !== m || r[34] !== z ? (o = (0, d.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, d.jsx)(x.a, {
                    feedbackConfig: c,
                    onImpression: h,
                    onOpen: j,
                    onSubmit: m
                }, z)
            }), r[30] = c, r[31] = h, r[32] = j, r[33] = m, r[34] = z, r[35] = o) : o = r[35], o
        }

        function H() {}

        function I() {}
    }),
    mF5c: (function(a, b, c) {
        var d = c("EA6X"),
            e = c("MVHH"),
            f = c("Cslg"),
            g = c("SGsN"),
            h = c("svjy"),
            i = c("IZUf"),
            j = c("VJXV"),
            k = c("wHLp"),
            l = c("yGJW"),
            m = c("xof2");
        async function n(a, b) {
            let {
                conversationId: c,
                messageId: d,
                libraryFileId: e,
                status: l,
                surface: m,
                folder: n,
                created: q,
                onView: r,
                updateFavorite: s
            } = b, t = () => a.get(f.f) === a.value.accountId && a.get(f.k) === a.value.userId;
            if (!t() || l.isUnavailable) return;
            let u = a.get(h.a),
                v = b => {
                    t() && (o(a, c, d, "toast_action", m), r?.((0, k.b)(b, "banner")))
                },
                w = e,
                x = null != n || !l.isFavorited,
                y = null == n || !l.isFavorited,
                z = x ? "save" : "unsave",
                A = performance.now();
            if (y) {
                o(a, c, d, z, m);
                let b = null != (w = await s(x, null == n, null == r ? void 0 : () => v("/library?tab=favorites")));
                if (!t() || (p(a, {
                        eventType: b ? x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: z,
                        result: b ? "success" : "error",
                        surface: m,
                        mutationDurationMs: b ? performance.now() - A : void 0
                    }), !b)) return
            }
            if (t()) {
                if (null != n) {
                    try {
                        if (null == w) throw Error("Image Library file ID is missing.");
                        await (0, i.b)(a, w, n.id)
                    } catch {
                        t() && a.get(g.f).danger(u.formatMessage({
                            id: "library.favoriteFolder.moveFailed",
                            defaultMessage: "Could not add to folder"
                        }), {
                            errorAnalytics: {
                                toastId: "library.favoriteFolder.moveFailed"
                            }
                        });
                        return
                    }
                    if (!t()) return;
                    (0, j.a)(a), a.get(g.f).success(q ? u.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created"
                    }, {
                        folderName: n.name
                    }) : u.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}"
                    }, {
                        folderName: n.name
                    }), {
                        primaryAction: {
                            label: u.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View"
                            }),
                            onClick: () => v(`/library/d/${encodeURIComponent(n.id)}`)
                        }
                    })
                }
                y && x && p(a, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: z,
                    clickToSuccessToastMs: performance.now() - A
                })
            }
        }

        function o(a, b, c, e, f) {
            let g, h, i = "client-created-root" === c ? void 0 : c ?? void 0;
            "save" === e ? (g = d.d.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON, h = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED") : "unsave" === e ? (g = d.d.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON, h = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED") : (g = d.d.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION, h = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED");
            let j = d.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
            "toast_action" === e ? j = d.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST : "image_lightbox" === f && (j = d.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, m.e)(a, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: j,
                entityAffordance: g,
                entityCategory: "image",
                conversationId: b,
                messageId: i,
                assistantMessageId: i,
                contentReferenceType: "entity"
            }), p(a, {
                eventType: h,
                action: "toast_action" === e ? void 0 : e,
                surface: "toast_action" === e ? "save_toast" : f
            })
        }

        function p(a, b) {
            (0, l.a)(a, e.jb, {
                ...b,
                entityKind: "image"
            })
        }
        c.d(b, {}, {
            a: async function(a, b) {
                let {
                    image: c,
                    conversationId: d,
                    libraryFileId: e,
                    status: f,
                    folder: g,
                    created: h,
                    onView: i,
                    surface: k = "image_tile"
                } = b;
                return n(a, {
                    conversationId: d,
                    messageId: c.chatGptMessageId,
                    libraryFileId: e,
                    status: f,
                    surface: k,
                    folder: g,
                    created: h,
                    onView: i,
                    updateFavorite: async (b, c, d) => await (0, j.e)(a, {
                        libraryFileId: e,
                        favoriteId: f.favoriteId,
                        isFavorited: b,
                        surface: k,
                        entityKind: "imagegen",
                        source: "conversation",
                        showToast: c,
                        onView: d
                    }) ? e : null
                })
            },
            b: n
        })
    }),
    oQ79: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("Q840"),
            h = c("Wf1j"),
            i = c("rEML"),
            j = c("Cslg"),
            k = c("Sm6l"),
            l = c("HOLv"),
            m = c("jo5I"),
            n = c("jU86"),
            o = c("Qed5"),
            p = c("VJXV"),
            q = c("mF5c"),
            r = c("ejvO"),
            s = c("qDYp"),
            t = c("XGuH");

        function u(a) {
            let b, c, j, p, u = (0, e.c)(50),
                {
                    source: v,
                    sources: w,
                    conversationId: x,
                    messageId: y,
                    surface: z,
                    presentation: A,
                    visibility: B,
                    joined: C
                } = a,
                D = void 0 === B ? "hover" : B,
                E = void 0 !== C && C,
                F = (0, g.y)(n.c),
                G = (0, i.ab)(),
                H = (0, h.a)();
            u[0] !== v ? (b = (0, r.a)(v), u[0] = v, u[1] = b) : b = u[1];
            let I = b,
                {
                    data: J,
                    isError: K
                } = (0, g.x)(r.d, w),
                L = (0, g.x)(r.b, I),
                M = J?.[I];
            u[2] !== x || u[3] !== K || u[4] !== I || u[5] !== y || u[6] !== G || u[7] !== F || u[8] !== v || u[9] !== w || u[10] !== M || u[11] !== z ? (c = async (a, b) => {
                null == M || K || F.get(r.b, I) || (F.set(r.b, I, !0), await (0, q.b)(F, {
                    conversationId: x,
                    messageId: y,
                    libraryFileId: M.library_file_id,
                    status: {
                        favoriteId: M.favorite_id ?? null,
                        isFavorited: null != M.favorite_id
                    },
                    surface: z,
                    folder: a,
                    created: void 0 !== b && b,
                    onView: a => {
                        G(a)
                    },
                    updateFavorite: (a, b, c) => (0, r.e)(F, {
                        source: v,
                        previous: M,
                        save: a,
                        surface: z,
                        showToast: b,
                        onView: c
                    })
                }).then(async () => {
                    null != a && await F.query.invalidate(r.d, w)
                }).finally(() => {
                    F.set(r.b, I, !1)
                }))
            }, u[2] = x, u[3] = K, u[4] = I, u[5] = y, u[6] = G, u[7] = F, u[8] = v, u[9] = w, u[10] = M, u[11] = z, u[12] = c) : c = u[12];
            let N = c;
            if (K) return null;
            if ("menuItem" === A) {
                let a, b, c = M?.favorite_id != null,
                    e = L || null == M;
                return u[13] !== N ? (a = () => void N(), u[13] = N, u[14] = a) : a = u[14], u[15] !== c || u[16] !== e || u[17] !== a ? (b = (0, d.jsx)(o.a, {
                    isFavorited: c,
                    disabled: e,
                    onSelect: a
                }), u[15] = c, u[16] = e, u[17] = a, u[18] = b) : b = u[18], b
            }
            if ("button" === A) {
                let a, b, c, e, g, h = M?.favorite_id != null;
                u[19] !== H ? (a = H.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), u[19] = H, u[20] = a) : a = u[20];
                let i = a;
                if (null == M) {
                    let a;
                    u[21] !== H ? (a = H.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status"
                    }), u[21] = H, u[22] = a) : a = u[22], i = a
                } else if (h) {
                    let a;
                    u[23] !== H ? (a = H.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites"
                    }), u[23] = H, u[24] = a) : a = u[24], i = a
                }
                let j = L || null == M || void 0,
                    m = L || null == M;
                u[25] !== N ? (b = a => {
                    a.stopPropagation(), N()
                }, u[25] = N, u[26] = b) : b = u[26];
                let n = h ? s.a : t.a;
                return u[27] !== n ? (c = (0, d.jsx)(l.a, {
                    asset: n
                }), u[27] = n, u[28] = c) : c = u[28], u[29] !== h || u[30] !== i || u[31] !== c || u[32] !== j || u[33] !== m || u[34] !== b ? (e = (0, d.jsx)(k.a, {
                    "aria-label": i,
                    "aria-pressed": h,
                    "aria-busy": j,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: m,
                    onClick: b,
                    children: c
                }), u[29] = h, u[30] = i, u[31] = c, u[32] = j, u[33] = m, u[34] = b, u[35] = e) : e = u[35], u[36] !== i || u[37] !== e ? (g = (0, d.jsx)(f.a, {
                    content: i,
                    children: e
                }), u[36] = i, u[37] = e, u[38] = g) : g = u[38], g
            }
            let O = M?.favorite_id != null,
                P = null == M,
                Q = M?.directory_id ?? null;
            return u[39] !== N ? (j = () => void N(), u[39] = N, u[40] = j) : j = u[40], u[41] !== L || u[42] !== E || u[43] !== O || u[44] !== P || u[45] !== Q || u[46] !== j || u[47] !== N || u[48] !== D ? (p = (0, d.jsx)(m.a, {
                isSaved: O,
                isBusy: L,
                isCheckingStatus: P,
                selectedFolderId: Q,
                joined: E,
                visibility: D,
                onToggleFavorite: j,
                onSelectFolder: N
            }), u[41] = L, u[42] = E, u[43] = O, u[44] = P, u[45] = Q, u[46] = j, u[47] = N, u[48] = D, u[49] = p) : p = u[49], p
        }
        c.d(b, {}, {
            SearchImageFavorite: function(a) {
                let b, c, f, h, i = (0, e.c)(11),
                    k = (0, g.z)(p.d),
                    l = (0, g.z)(j.m),
                    m = (0, g.z)(j.f),
                    o = (0, g.z)(j.k);
                return k && "allowed" === l.status && null != m && null != o ? (i[0] !== m || i[1] !== o ? (b = {
                    accountId: m,
                    userId: o
                }, i[0] = m, i[1] = o, i[2] = b) : b = i[2], i[3] !== a.source ? (c = (0, r.a)(a.source), i[3] = a.source, i[4] = c) : c = i[4], i[5] !== a || i[6] !== c ? (f = (0, d.jsx)(u, {
                    ...a
                }, c), i[5] = a, i[6] = c, i[7] = f) : f = i[7], i[8] !== b || i[9] !== f ? (h = (0, d.jsx)(g.b, {
                    scope: n.c,
                    value: b,
                    children: f
                }), i[8] = b, i[9] = f, i[10] = h) : h = i[10], h) : null
            }
        })
    }),
    ejvO: (function(a, b, c) {
        var d = c("XlOJ"),
            e = c("CpsU"),
            f = c.n(e),
            g = c("Q840"),
            h = c("Cslg"),
            i = c("SGsN"),
            j = c("svjy"),
            k = c("jU86"),
            l = c("VJXV"),
            m = c("yGJW"),
            n = c("dRwO");
        let o = new WeakMap,
            p = (0, g.v)(k.c, a => !1);

        function q(a) {
            let b = a.original_content_url ?? a.content_url,
                c = URL.parse(b);
            return null == c ? b : (c.hash = "", c.href)
        }
        let r = (0, g.q)(k.c, (a, b) => {
            let {
                get: c,
                scope: d
            } = b, e = [...new Map(a.map(a => [q(a), a])).values()], g = c(k.p);
            return {
                queryKey: ["library-image-favorites-status", d.value.accountId, d.value.userId, e.map(q).sort()],
                enabled: e.length > 0 && c(l.d),
                staleTime: 3e4,
                retry: 1,
                refetchOnMount: !0,
                queryFn: async a => {
                    let {
                        signal: b
                    } = a;
                    if (1 === e.length) {
                        var c;
                        let a = JSON.stringify([d.value.accountId, d.value.userId]),
                            f = o.get(d.queryClient);
                        null == f && (f = new Map, o.set(d.queryClient, f));
                        let h = f.get(a);
                        null == h && (c = g, h = (0, n.a)({
                            windowMs: 10,
                            maxBatchSize: 50,
                            fetcher: async a => {
                                let b = a.filter(a => {
                                    let {
                                        signal: b
                                    } = a;
                                    return !b.aborted
                                });
                                if (0 === b.length) return new Map;
                                let d = await c.safePost("/files/library/image-favorites/status", {
                                    requestBody: {
                                        sources: b.map(a => {
                                            let {
                                                source: b
                                            } = a;
                                            return b
                                        })
                                    },
                                    signal: 1 === b.length ? b[0].signal : void 0
                                });
                                if (d.length !== b.length) throw Error("Incomplete image favorite status response.");
                                return new Map(b.map((a, b) => {
                                    let {
                                        source: c
                                    } = a;
                                    return [q(c), d[b]]
                                }))
                            },
                            resolver: (a, b) => {
                                let {
                                    source: c,
                                    signal: d
                                } = b;
                                d.throwIfAborted();
                                let e = a.get(q(c));
                                if (null == e) throw Error("Incomplete image favorite status response.");
                                return e
                            }
                        }), f.set(a, h));
                        let i = await h.fetch({
                            source: e[0],
                            signal: b
                        });
                        return {
                            [q(e[0])]: i
                        }
                    }
                    return Object.fromEntries((await Promise.all(f()(e, 50).map(async a => {
                        let c = await g.safePost("/files/library/image-favorites/status", {
                            requestBody: {
                                sources: a
                            },
                            signal: b
                        });
                        if (c.length !== a.length) throw Error("Incomplete image favorite status response.");
                        return a.map((a, b) => [q(a), c[b]])
                    }))).flat())
                }
            }
        });
        c.d(b, {}, {
            a: q,
            b: p,
            c: function(a) {
                let b = a.searchResult;
                return b?.contentSrc == null || b.isProxied || !/^https?:/i.test(b.contentSrc) ? null : {
                    content_url: b.contentSrc,
                    original_content_url: b.originalSrc
                }
            },
            d: r,
            e: async function(a, b) {
                let c, {
                        source: e,
                        previous: f,
                        save: g,
                        surface: n,
                        showToast: o,
                        onView: p
                    } = b,
                    r = () => a.get(h.f) === a.value.accountId && a.get(h.k) === a.value.userId,
                    s = q(e);
                if (!a.get(l.d)) return null;
                if (g) {
                    let b = {
                        operationId: crypto.randomUUID(),
                        action: "save",
                        entityKind: "web_image",
                        surface: n,
                        source: "conversation"
                    };
                    (0, m.a)(a, d.a, {
                        ...b,
                        eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                    });
                    try {
                        if (c = await a.get(k.p).safePost("/files/library/image-favorites", {
                                requestBody: e
                            }), null == c.favorite_id || null == c.library_file_id) throw Error("Image favorite response did not include its Library file.");
                        r() && ((0, m.a)(a, d.a, {
                            ...b,
                            result: "success",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                        }), o && (0, l.f)(a, {
                            isFavorited: !0,
                            onView: p
                        }))
                    } catch {
                        return r() && ((0, m.a)(a, d.a, {
                            ...b,
                            result: "error",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR"
                        }), a.get(i.f).danger(a.get(j.a).formatMessage({
                            id: "library.favorites.failed",
                            defaultMessage: "Could not update favorite"
                        }), {
                            errorAnalytics: {
                                toastId: "searchImageFavorites.setSearchImageFavorite.failed"
                            }
                        })), null
                    }
                } else {
                    if (null == f.library_file_id || null == f.favorite_id || !await (0, l.e)(a, {
                            libraryFileId: f.library_file_id,
                            favoriteId: f.favorite_id,
                            isFavorited: !1,
                            surface: n,
                            entityKind: "web_image",
                            source: "conversation",
                            showToast: o
                        })) return null;
                    c = {}
                }
                let t = {
                    queryKey: ["library-image-favorites-status", a.value.accountId, a.value.userId],
                    predicate: a => {
                        let b = a.queryKey[3];
                        return Array.isArray(b) && b.includes(s)
                    }
                };
                await a.queryClient.cancelQueries(t), a.queryClient.setQueriesData(t, a => null != a && s in a ? {
                    ...a,
                    [s]: c
                } : a), a.queryClient.refetchQueries({
                    ...t,
                    predicate: a => t.predicate(a) && void 0 === a.state.data
                });
                let u = c.library_file_id ?? f.library_file_id;
                if (null != u) {
                    let b = {
                        queryKey: ["library-favorites-status", a.value.accountId, a.value.userId],
                        predicate: a => {
                            let b = a.queryKey[3];
                            return Array.isArray(b) && b.includes(u)
                        }
                    };
                    await a.queryClient.cancelQueries(b), a.queryClient.setQueriesData(b, a => null != a && u in a ? {
                        ...a,
                        [u]: {
                            favoriteId: c.favorite_id ?? null,
                            isFavorited: null != c.favorite_id
                        }
                    } : a), a.queryClient.refetchQueries({
                        ...b,
                        predicate: a => b.predicate(a) && void 0 === a.state.data
                    })
                }
                return a.queryClient.invalidateQueries({
                    queryKey: ["library-api", a.value.accountId]
                }), u ?? null
            }
        })
    }),
    Q3Ib: (function(a, b, c) {
        c.d(b, {
            a: () => I
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zPtR"),
            g = c("FS1B"),
            h = c("ZDhX"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("Wf1j"),
            l = c("oyxz"),
            m = c("Cslg"),
            n = c("Sm6l"),
            o = c("HOLv"),
            p = c("zLIa"),
            q = c("SGsN"),
            r = c("Yq7Q"),
            s = c("yGJW"),
            t = c("OWtl"),
            u = c("sX4C"),
            v = c("FGv0"),
            w = c("hZax"),
            x = c("RiLw"),
            y = c("eShZ"),
            z = c("Kwur"),
            A = c("Oa1z"),
            B = c("AuIy"),
            C = c("UxLy"),
            D = c("fwnP");
        let E = (0, i.d)(t.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (!c(D.I, a)) return [];
                let d = c(D.o, a),
                    e = c(D.z, a);
                return null == d || null == e ? [] : (0, B.b)({
                    current_node: d,
                    mapping: e
                }).flatMap(a => "assistant" === a.author.role && null != a.id ? [a.id] : [])
            }, {
                isEqual: C.a
            }),
            F = (0, i.d)(t.a, (a, b) => {
                let {
                    get: c
                } = b;
                return null != a && c(E, a.conversationId).includes(a.messageId)
            });

        function G(a, b, c) {
            let d;
            if ("u" < typeof IntersectionObserver) return () => {};
            let e = a.ownerDocument,
                f = a.closest("[data-web-image-tile], [class~='group/search-image']") ?? a,
                g = !1,
                h = !1,
                i = () => {
                    let c = e.defaultView?.getComputedStyle(a);
                    for (let b = a.parentElement; null != b; b = b.parentElement)
                        if (0 === Number(e.defaultView?.getComputedStyle(b).opacity)) return !1;
                    return g && "visible" === e.visibilityState && a.isConnected && a.getClientRects().length > 0 && null == a.closest("[inert], [aria-hidden='true']") && c?.visibility === "visible" && Number(c.opacity) > 0 && b()
                },
                j = () => {
                    if (!h) {
                        if (!i()) {
                            clearTimeout(d), d = void 0;
                            return
                        }
                        void 0 === d && (d = setTimeout(() => {
                            d = void 0, i() && (h = !0, c(), n())
                        }, 1e3))
                    }
                },
                k = new IntersectionObserver(a => {
                    let [b] = a;
                    g = b.isIntersecting && b.intersectionRatio >= .5, j()
                }, {
                    threshold: .5
                });
            k.observe(a);
            let l = new MutationObserver(j);
            l.observe(f, {
                attributes: !0,
                subtree: f !== a,
                attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden"]
            });
            let m = ["load", "pointerover", "pointerout", "focusin", "focusout", "transitionend"];
            for (let a of m) f.addEventListener(a, j, !0);

            function n() {
                for (let a of (h = !0, clearTimeout(d), k.disconnect(), l.disconnect(), m)) f.removeEventListener(a, j, !0);
                e.removeEventListener("visibilitychange", j)
            }
            return e.addEventListener("visibilitychange", j), n
        }
        var H = c("uxYh");

        function I(a) {
            let b, c, B, C, D, E, I, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah = (0, e.c)(135),
                {
                    source: ai,
                    conversationId: aj,
                    messageId: ak,
                    imageIndex: al,
                    contentReferenceStartIndex: am,
                    isTemporaryChat: an,
                    surface: ao,
                    lightboxPresentation: ap,
                    imageRef: aq,
                    imageReady: ar,
                    joined: as
                } = a,
                at = void 0 === ap ? "classic" : ap,
                au = void 0 === ar || ar,
                av = void 0 !== as && as,
                aw = (0, i.y)(t.a),
                ax = (0, i.z)(m.f),
                ay = (0, i.z)(m.k),
                az = (0, k.a)();
            ah[0] !== ax || ah[1] !== aj || ah[2] !== an || ah[3] !== ak || ah[4] !== ai.content_url || ah[5] !== ay ? (b = !an && null != ax && null != ay && null != aj && null != ak && /^https?:\/\//i.test(ai.content_url), ah[0] = ax, ah[1] = aj, ah[2] = an, ah[3] = ak, ah[4] = ai.content_url, ah[5] = ay, ah[6] = b) : b = ah[6];
            let aA = b,
                aB = !aA;
            ah[7] !== aB ? (c = {
                disableExposureLog: aB
            }, ah[7] = aB, ah[8] = c) : c = ah[8];
            let aC = (0, w.j)("274234392", c);
            ah[9] !== aC ? (B = aC.get("placement", "off"), ah[9] = aC, ah[10] = B) : B = ah[10];
            let aD = B,
                aE = "fullscreen" === aD || "inline_and_fullscreen" === aD ? aD : "off",
                aF = aA && ("inline_and_fullscreen" === aE || "fullscreen" === aE && "image_lightbox" === ao);
            ah[11] !== aj || ah[12] !== ak || ah[13] !== aF ? (C = aF ? {
                conversationId: aj,
                messageId: ak
            } : null, ah[11] = aj, ah[12] = ak, ah[13] = aF, ah[14] = C) : C = ah[14];
            let aG = C,
                aH = (0, i.x)(F, aG),
                aI = (0, j.useRef)(null),
                aJ = (0, j.useRef)(null);
            ah[15] !== am || ah[16] !== aj || ah[17] !== al || ah[18] !== ak || ah[19] !== ai.content_url ? (D = [aj, ak, am, al, ai.content_url], ah[15] = am, ah[16] = aj, ah[17] = al, ah[18] = ak, ah[19] = ai.content_url, ah[20] = D) : D = ah[20];
            let aK = D.join(":");
            ah[21] !== ax || ah[22] !== aK || ah[23] !== ay ? (E = {
                accountId: ax,
                userId: ay,
                imageKey: aK
            }, ah[21] = ax, ah[22] = aK, ah[23] = ay, ah[24] = E) : E = ah[24];
            let [aL, aM] = (0, j.useState)(E), [aN, aO] = (0, j.useState)(null);
            (aL.accountId !== ax || aL.userId !== ay || aL.imageKey !== aK) && aM({
                accountId: ax,
                userId: ay,
                imageKey: aK
            });
            let aP = (0, j.useRef)(null);
            ah[25] === Symbol.for("react.memo_cache_sentinel") ? (I = new Set, ah[25] = I) : I = ah[25];
            let aQ = (0, j.useRef)(I),
                [aR, aS] = (0, j.useState)(!1),
                aT = "image_tile" === ao ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            ah[26] !== al ? (P = null == al || al < 0 ? void 0 : (0, f.d)(al), ah[26] = al, ah[27] = P) : P = ah[27], ah[28] !== am ? (Q = null == am ? void 0 : (0, f.b)(am), ah[28] = am, ah[29] = Q) : Q = ah[29], ah[30] !== aE || ah[31] !== ao || ah[32] !== P || ah[33] !== Q ? (R = {
                surface: ao,
                placement: aE,
                imageIndex: P,
                contentReferenceStartIndex: Q
            }, ah[30] = aE, ah[31] = ao, ah[32] = P, ah[33] = Q, ah[34] = R) : R = ah[34], ah[35] !== aj || ah[36] !== ak || ah[37] !== aT || ah[38] !== R ? (S = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: aT,
                conversationId: aj,
                messageId: ak,
                imageMetadata: R
            }, ah[35] = aj, ah[36] = ak, ah[37] = aT, ah[38] = R, ah[39] = S) : S = ah[39];
            let aU = S;
            ah[40] !== ax || ah[41] !== aU || ah[42] !== aw || ah[43] !== ay ? (T = (a, b, c) => {
                aw.get(m.f) === ax && aw.get(m.k) === ay && (0, s.a)(aw, g.i, {
                    ...aU,
                    shareSessionId: b,
                    action: a,
                    ...void 0 === c ? {} : c
                })
            }, ah[40] = ax, ah[41] = aU, ah[42] = aw, ah[43] = ay, ah[44] = T) : T = ah[44];
            let aV = T,
                aW = (0, j.useEffectEvent)(aV);
            if (ah[45] === Symbol.for("react.memo_cache_sentinel") ? (U = () => () => {
                    aI.current?.abort()
                }, V = [], ah[45] = U, ah[46] = V) : (U = ah[45], V = ah[46]), (0, j.useEffect)(U, V), ah[47] !== ax || ah[48] !== am || ah[49] !== aj || ah[50] !== aW || ah[51] !== aA || ah[52] !== al || ah[53] !== au || ah[54] !== aq || ah[55] !== ak || ah[56] !== aE || ah[57] !== aF || ah[58] !== ai.content_url || ah[59] !== ao || ah[60] !== ay ? (W = () => {
                    let a = aP.current;
                    if (!aA || null == a) return;
                    let b = aq?.current ?? a.closest("[data-web-image-tile], [class~='group/search-image']"),
                        c = [ax, ay, ai.content_url, aj, ak, am, al, ao, aE].join(":"),
                        d = crypto.randomUUID(),
                        e = null == b || aQ.current.has(c) ? void 0 : G(b, () => {
                            let a = b instanceof HTMLImageElement ? b : b.querySelector("img");
                            return au && null != a && a.complete && a.naturalWidth > 0
                        }, () => {
                            aQ.current.add(c), aW("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", d)
                        }),
                        f = !aF || aQ.current.has(`${c}:control`) ? void 0 : G(a, O, () => {
                            aQ.current.add(`${c}:control`), aW("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", d)
                        });
                    return () => {
                        e?.(), f?.()
                    }
                }, ah[47] = ax, ah[48] = am, ah[49] = aj, ah[50] = aW, ah[51] = aA, ah[52] = al, ah[53] = au, ah[54] = aq, ah[55] = ak, ah[56] = aE, ah[57] = aF, ah[58] = ai.content_url, ah[59] = ao, ah[60] = ay, ah[61] = W) : W = ah[61], ah[62] !== ax || ah[63] !== am || ah[64] !== aj || ah[65] !== aA || ah[66] !== al || ah[67] !== au || ah[68] !== aq || ah[69] !== ak || ah[70] !== aE || ah[71] !== aF || ah[72] !== ai.content_url || ah[73] !== ao || ah[74] !== ay ? (X = [ax, ay, ai.content_url, ao, aE, aF, aA, aq, aj, ak, al, am, au], ah[62] = ax, ah[63] = am, ah[64] = aj, ah[65] = aA, ah[66] = al, ah[67] = au, ah[68] = aq, ah[69] = ak, ah[70] = aE, ah[71] = aF, ah[72] = ai.content_url, ah[73] = ao, ah[74] = ay, ah[75] = X) : X = ah[75], (0, j.useEffect)(W, X), !aA) return null;
            ah[76] !== az ? (Y = az.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image"
            }), ah[76] = az, ah[77] = Y) : Y = ah[77];
            let aX = Y;
            ah[78] !== az || ah[79] !== aH ? (Z = aH ? (0, A.c)(az) : void 0, ah[78] = az, ah[79] = aH, ah[80] = Z) : Z = ah[80];
            let aY = Z,
                aZ = aH ? "pointer-events-none" : void 0,
                a$ = aH || aR;
            ah[81] !== ax || ah[82] !== aj || ah[83] !== aL || ah[84] !== aV || ah[85] !== aK || ah[86] !== az || ah[87] !== aN?.visit || ah[88] !== ak || ah[89] !== aG || ah[90] !== aw || ah[91] !== ai.content_url || ah[92] !== ay ? ($ = a => {
                let b;
                if (a.stopPropagation(), null != aI.current || null == ax || null == ay || null == aj || null == ak || aw.get(F, aG)) return;
                let c = new AbortController;
                aI.current = c, aS(!0);
                let d = () => {
                        if (c.signal.throwIfAborted(), aw.get(m.f) !== ax || aw.get(m.k) !== ay) throw new DOMException("The active account changed", "AbortError")
                    },
                    e = crypto.randomUUID(),
                    g = crypto.randomUUID(),
                    h = aJ.current?.accountId === ax && aJ.current?.userId === ay && aJ.current.imageKey === aK ? aJ.current : null,
                    i = h?.shareId,
                    j = () => ({
                        attemptId: g,
                        shareId: i,
                        usedExistingLink: null != h
                    }),
                    k = performance.now();
                aV("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", e, j()), aV("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", e, j());
                let l = aN?.visit === aL,
                    n = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    o = null == h ? (async () => {
                        d();
                        let a = await z.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: aj,
                                    message_id: ak,
                                    content_url: ai.content_url
                                }]
                            },
                            signal: c.signal,
                            assertRequestCurrent: d
                        });
                        d(), i = a.post.id;
                        let b = a.post.web_image_attachments;
                        if (1 !== a.post.attachments.length || b?.length !== 1 || b[0]?.id !== a.post.attachments[0]?.id) throw Error("Shared image is unavailable");
                        let e = function(a) {
                            if (!/^i_[A-Za-z0-9_-]+$/.test(a.id)) throw Error("Invalid image share identity");
                            let b = `/s/${a.id}`,
                                c = new URL(a.permalink ?? b, "https://chatgpt.com");
                            if ("https://chatgpt.com" !== c.origin || c.pathname !== b || c.username || c.password || c.search || c.hash) throw Error("Invalid image share identity");
                            return c.href
                        }(a.post);
                        return aJ.current = {
                            accountId: ax,
                            userId: ay,
                            imageKey: aK,
                            shareId: i,
                            link: e
                        }, e
                    })().catch(a => {
                        let c = a instanceof y.FetchError && "network" !== a.errorKind ? a.explicitResponseStatus : void 0;
                        throw null != c && Number.isInteger(c) && c >= 100 && c <= 599 && (b = (0, f.b)(c)), n = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", a
                    }) : Promise.resolve(h.link).then(a => (d(), a));
                o.catch(N);
                let p = (0, v.a)(o, c.signal);
                p.catch(M), (async () => {
                    let a;
                    try {
                        a = await o, await p.then(L), d(), l && aO(a => a?.visit === aL ? null : a), aV("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", e, {
                            ...j(),
                            durationMs: performance.now() - k
                        }), aw.get(q.f).success(az.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied"
                        }))
                    } catch (f) {
                        let d = aw.get(m.f) !== ax || aw.get(m.k) !== ay || c.signal.aborted || f instanceof DOMException && "AbortError" === f.name;
                        if (aV(d ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", e, {
                                ...j(),
                                failureReason: d ? void 0 : n,
                                httpStatus: d ? void 0 : b,
                                durationMs: performance.now() - k
                            }), d) return;
                        null != a ? l || aO({
                            visit: aL,
                            url: a
                        }) : aw.get(q.f).danger(az.formatMessage({
                            id: "chatgpt.webImageSharing.failed",
                            defaultMessage: "Could not share image. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "web_image_share_failed"
                            }
                        })
                    }
                })().finally(() => {
                    c.signal.aborted || (aI.current = null, aS(!1))
                })
            }, ah[81] = ax, ah[82] = aj, ah[83] = aL, ah[84] = aV, ah[85] = aK, ah[86] = az, ah[87] = aN?.visit, ah[88] = ak, ah[89] = aG, ah[90] = aw, ah[91] = ai.content_url, ah[92] = ay, ah[93] = $) : $ = ah[93], ah[94] !== aR || ah[95] !== aY || ah[96] !== aX || ah[97] !== aZ || ah[98] !== a$ || ah[99] !== $ ? (_ = {
                type: "button",
                "aria-label": aX,
                "aria-description": aY,
                className: aZ,
                "aria-busy": aR,
                loading: aR,
                disabled: a$,
                onClick: $
            }, ah[94] = aR, ah[95] = aY, ah[96] = aX, ah[97] = aZ, ah[98] = a$, ah[99] = $, ah[100] = _) : _ = ah[100];
            let a_ = _;
            ah[101] === Symbol.for("react.memo_cache_sentinel") ? (aa = (0, d.jsx)(l.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share"
            }), ah[101] = aa) : aa = ah[101];
            let a0 = aa;
            if ("image_lightbox" === ao) {
                let a;
                ah[102] !== a_ || ah[103] !== at ? (a = "overlay" === at ? (0, d.jsx)(x.a, {
                    ...a_
                }) : (0, d.jsxs)(n.a, {
                    ...a_,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, d.jsx)(o.a, {
                        asset: H.a
                    }), a0]
                }), ah[102] = a_, ah[103] = at, ah[104] = a) : a = ah[104], ab = a
            } else {
                let a, b;
                ah[105] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(o.a, {
                    asset: H.a
                }), ah[105] = a) : a = ah[105], ah[106] !== a_ || ah[107] !== av ? (b = (0, d.jsx)(r.a, {
                    ...a_,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    joined: av,
                    children: a
                }), ah[106] = a_, ah[107] = av, ah[108] = b) : b = ah[108], ab = b
            }
            let a1 = aY ?? aX,
                a2 = aH ? 0 : void 0,
                a3 = aH ? "group" : void 0,
                a4 = aH ? aX : void 0,
                a5 = aH ? K : void 0;
            ah[109] !== ab || ah[110] !== aY || ah[111] !== a2 || ah[112] !== a3 || ah[113] !== a4 || ah[114] !== a5 ? (ac = (0, d.jsx)("span", {
                className: "inline-flex",
                tabIndex: a2,
                role: a3,
                "aria-label": a4,
                "aria-description": aY,
                onClickCapture: a5,
                children: ab
            }), ah[109] = ab, ah[110] = aY, ah[111] = a2, ah[112] = a3, ah[113] = a4, ah[114] = a5, ah[115] = ac) : ac = ah[115], ab = ac;
            let a6 = "inline-flex";
            return "image_tile" === ao && (a6 = av ? aF ? "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:w-9 group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:w-9 group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:w-9 group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:w-9 group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:w-9 [@media(hover:none)]:opacity-100" : "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0" : "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), ah[116] !== ab || ah[117] !== a1 || ah[118] !== aF ? (ad = aF ? (0, d.jsx)(h.a, {
                content: a1,
                children: ab
            }) : null, ah[116] = ab, ah[117] = a1, ah[118] = aF, ah[119] = ad) : ad = ah[119], ah[120] !== a6 || ah[121] !== ad ? (ae = (0, d.jsx)("span", {
                ref: aP,
                className: a6,
                children: ad
            }), ah[120] = a6, ah[121] = ad, ah[122] = ae) : ae = ah[122], ah[123] !== aR || ah[124] !== a_ || ah[125] !== aL || ah[126] !== az || ah[127] !== a1 || ah[128] !== aN || ah[129] !== aF || ah[130] !== aH ? (af = aF && aN?.visit === aL && (0, d.jsx)(u.a, {
                title: a1,
                subtitle: (0, d.jsx)(l.a, {
                    id: "chatgpt.webImageSharing.copyManually",
                    defaultMessage: "Couldn\u2019t copy the image link. Select and copy it below."
                }),
                onClose: () => aO(null),
                footer: (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(n.b, {
                        href: aN.url,
                        target: "_blank",
                        rel: "noopener",
                        children: (0, d.jsx)(l.a, {
                            id: "chatgpt.webImageSharing.openLink",
                            defaultMessage: "Open link"
                        })
                    }), (0, d.jsx)(n.a, {
                        type: "button",
                        color: "primary",
                        onClick: a_.onClick,
                        disabled: aH || aR,
                        loading: aR,
                        children: (0, d.jsx)(l.a, {
                            id: "chatgpt.webImageSharing.retryCopyLink",
                            defaultMessage: "Copy link"
                        })
                    })]
                }),
                children: (0, d.jsx)(p.a, {
                    "aria-label": az.formatMessage({
                        id: "chatgpt.webImageSharing.linkLabel",
                        defaultMessage: "Image share link"
                    }),
                    readOnly: !0,
                    value: aN.url,
                    onFocus: J
                })
            }), ah[123] = aR, ah[124] = a_, ah[125] = aL, ah[126] = az, ah[127] = a1, ah[128] = aN, ah[129] = aF, ah[130] = aH, ah[131] = af) : af = ah[131], ah[132] !== ae || ah[133] !== af ? (ag = (0, d.jsxs)(d.Fragment, {
                children: [ae, af]
            }), ah[132] = ae, ah[133] = af, ah[134] = ag) : ag = ah[134], ag
        }

        function J(a) {
            return a.currentTarget.select()
        }

        function K(a) {
            return a.stopPropagation()
        }

        function L(a) {
            if (!a) throw Error("Clipboard write failed")
        }

        function M() {}

        function N() {}

        function O() {
            return !0
        }
    }),
    Qed5: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("bqtn"),
            h = c("UxN3"),
            i = c("wd30"),
            j = c("qDYp"),
            k = c("FFFH"),
            l = c("XGuH");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n = (0, e.c)(9),
                    {
                        isFavorited: o,
                        disabled: p,
                        onSelect: q
                    } = a;
                return n[0] !== o ? (b = (0, d.jsx)(h.b, {
                    icon: {
                        assets: o ? {
                            16: i.a,
                            20: j.a
                        } : {
                            16: k.a,
                            20: l.a
                        }
                    }
                }), n[0] = o, n[1] = b) : b = n[1], n[2] !== o ? (c = o ? (0, d.jsx)(f.a, {
                    id: "library.favorites.remove",
                    defaultMessage: "Remove from Favorites"
                }) : (0, d.jsx)(f.a, {
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), n[2] = o, n[3] = c) : c = n[3], n[4] !== p || n[5] !== q || n[6] !== b || n[7] !== c ? (m = (0, d.jsx)(g.c.Item, {
                    disabled: p,
                    leftIcon: b,
                    onSelect: q,
                    children: c
                }), n[4] = p, n[5] = q, n[6] = b, n[7] = c, n[8] = m) : m = n[8], m
            }
        })
    }),
    iwt4: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(590108).then(c.bind(c, "PyZ7"))).observeFlashcardSourceCards
            },
            b: async function() {
                return (await c.e(973648).then(c.bind(c, "HVw5"))).FlashcardsComposerSuggestions
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(894924), c.e(677578)]).then(c.bind(c, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(894924), c.e(467614)]).then(c.bind(c, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(996653)]).then(c.bind(c, "qS9I"))).InlineFlashcards
            }
        })
    }),
    sX4C: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Wf1j"),
            h = c("Sm6l"),
            i = c("JNtf"),
            j = c("mUDD"),
            k = c("HOLv"),
            l = c("CsDP"),
            m = c("tNvR");

        function n(a) {
            let b, c, n, o, p, q, r, s, t = (0, e.c)(44),
                {
                    children: u,
                    headerContent: v,
                    headerActions: w,
                    footer: x,
                    collapseEmptyContent: y,
                    compactImageSheetFooter: z,
                    isDismissalDisabled: A,
                    subtitle: B,
                    title: C,
                    onClose: D,
                    onOpenAutoFocus: E,
                    onCloseAutoFocus: F,
                    onPortalContainerChange: G,
                    onSubmit: H,
                    size: I,
                    variant: J,
                    presentation: K
                } = a,
                L = void 0 !== y && y,
                M = void 0 !== z && z,
                N = void 0 !== A && A,
                O = (0, g.a)(),
                P = "imageSheet" === K;
            t[0] !== M || t[1] !== w || t[2] !== O || t[3] !== N || t[4] !== P || t[5] !== D || t[6] !== B || t[7] !== C ? (b = P ? (0, d.jsxs)("div", {
                className: (0, f.b)("shrink-0", "imageSheetHeader-vPz2gu", M && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, d.jsx)(i.f, {
                    className: "imageSheetTitle-iMmEfF",
                    children: C
                }), null != B && (0, d.jsx)(i.e, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: B
                }), !N && (0, d.jsx)(h.a, {
                    unstyled: !0,
                    className: (0, f.b)("imageSheetClose-msZEpI", M && "imageSheetTwoRowsClose-qwbpXz"),
                    "aria-label": O.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog"
                    }),
                    onClick: a => {
                        a.stopPropagation(), D()
                    },
                    children: (0, d.jsx)(k.a, {
                        asset: m.a
                    })
                })]
            }) : (0, d.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, d.jsx)(j.d, {
                    className: "min-w-0 flex-1",
                    title: (0, d.jsx)(i.f, {
                        className: "contents",
                        children: C
                    }),
                    titleClassName: "truncate",
                    subtitle: null == B ? void 0 : (0, d.jsx)(i.e, {
                        className: "contents",
                        children: B
                    })
                }), w]
            }), t[0] = M, t[1] = w, t[2] = O, t[3] = N, t[4] = P, t[5] = D, t[6] = B, t[7] = C, t[8] = b) : b = t[8], t[9] !== v || t[10] !== b ? (c = (0, d.jsxs)(d.Fragment, {
                children: [b, v]
            }), t[9] = v, t[10] = b, t[11] = c) : c = t[11];
            let Q = c;
            t[12] !== B ? (n = null == B ? {
                "aria-describedby": void 0
            } : {}, t[12] = B, t[13] = n) : n = t[13], t[14] !== E || t[15] !== G ? (o = a => {
                a.currentTarget instanceof HTMLElement && G?.(a.currentTarget), E?.(a)
            }, t[14] = E, t[15] = G, t[16] = o) : o = t[16], t[17] !== F || t[18] !== n || t[19] !== o ? (p = {
                ...n,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: F,
                onOpenAutoFocus: o
            }, t[17] = F, t[18] = n, t[19] = o, t[20] = p) : p = t[20];
            let R = !N && !P,
                S = J ?? "opaque",
                T = P ? "imageSheetSurface-pAxv7i" : void 0,
                U = P ? "imageSheetOverlay-Da_SGi" : void 0;
            return t[21] !== N || t[22] !== D ? (q = a => {
                a || N || D()
            }, t[21] = N, t[22] = D, t[23] = q) : q = t[23], t[24] !== u || t[25] !== L || t[26] !== M || t[27] !== x || t[28] !== Q || t[29] !== N || t[30] !== P || t[31] !== H ? (r = P ? (0, d.jsxs)(j.b, {
                as: null == H ? "div" : "form",
                variant: "chatgpt",
                className: (0, f.b)("imageSheetBody-YQy31R", "min-h-0", M && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == H ? void 0 : a => {
                    a.preventDefault(), a.stopPropagation(), N || H()
                },
                children: [(0, d.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [Q, u]
                }), (0, d.jsx)("div", {
                    className: (0, f.b)("shrink-0", M ? "mt-2" : "mt-12"),
                    children: x
                })]
            }) : (0, d.jsx)(l.a, {
                collapseEmptyContent: L,
                header: Q,
                footer: x,
                onSubmit: null == H ? void 0 : a => {
                    a.preventDefault(), a.stopPropagation(), N || H()
                },
                children: u
            }), t[24] = u, t[25] = L, t[26] = M, t[27] = x, t[28] = Q, t[29] = N, t[30] = P, t[31] = H, t[32] = r) : r = t[32], t[33] !== N || t[34] !== P || t[35] !== I || t[36] !== S || t[37] !== T || t[38] !== U || t[39] !== q || t[40] !== r || t[41] !== p || t[42] !== R ? (s = (0, d.jsx)(i.a, {
                open: !0,
                contentOverflow: "visible",
                contentProps: p,
                shouldIgnoreClickOutside: N,
                showDialogClose: R,
                size: I,
                variant: S,
                unstyledContent: P,
                contentClassName: T,
                overlayClassName: U,
                onOpenChange: q,
                children: r
            }), t[33] = N, t[34] = P, t[35] = I, t[36] = S, t[37] = T, t[38] = U, t[39] = q, t[40] = r, t[41] = p, t[42] = R, t[43] = s) : s = t[43], s
        }
    })
};