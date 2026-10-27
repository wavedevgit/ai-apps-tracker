export const __rspack_esm_id = 648495;
export const __rspack_esm_ids = [648495];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Bbed"),
            l = a("VTN2"),
            o = a("TUMj"),
            s = a("qviq");
        let c = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(652500), a.e(877652), a.e(675928), a.e(785932), a.e(961932)]).then(a.bind(a, "Kcyf"))).SitesPreviewContentReference);

        function d(e) {
            let t, a, r, d, u = (0, i.c)(19),
                {
                    bind: f,
                    onBindInteraction: _,
                    reference: p,
                    isStreaming: g,
                    readOnly: m,
                    withTopMargin: h
                } = e,
                b = void 0 !== m && m,
                v = (0, o.d)();
            if (null != p.data && "object" == typeof p.data && "preview_type" in p.data && "sites" === p.data.preview_type) {
                let e;
                return u[0] !== g || u[1] !== p ? (e = (0, n.jsx)(c, {
                    reference: p,
                    isStreaming: g
                }), u[0] = g, u[1] = p, u[2] = e) : e = u[2], e
            }
            if (u[3] !== g || u[4] !== p || u[5] !== v?.isStreaming) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e = l.a.safeParse(p);
                    if (!e.success) {
                        r = null;
                        break e
                    }({
                        data: t
                    } = e.data);
                    let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === g : g ?? !0)
                }
                u[3] = g, u[4] = p, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = r
            } else t = u[6], a = u[7], r = u[8];
            if (r !== Symbol.for("react.early_return_sentinel")) return r;
            let y = a && !0 !== t.render_immediately_during_streaming,
                T = t.display_name ?? t.title;
            return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== _ || u[13] !== b || u[14] !== y || u[15] !== T || u[16] !== v || u[17] !== h ? (d = (0, n.jsx)(s.a, {
                bind: f,
                onBindInteraction: _,
                content: t.content,
                readOnly: b,
                isStreaming: y,
                title: T,
                styleMode: t.style_mode,
                turnContext: v,
                withTopMargin: h
            }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = _, u[13] = b, u[14] = y, u[15] = T, u[16] = v, u[17] = h, u[18] = d) : d = u[18], d
        }
        a.d(t, {
            a: () => d
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            i = a("Bbed"),
            r = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(652500), a.e(877652), a.e(743845), a.e(374098)]).then(a.bind(a, "UGmk"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(r.a, {})
        });
        a.d(t, {}, {
            a: l
        })
    }),
    zy7P: (function(e, t, a) {
        var n = a("nB3p"),
            i = a("iTtm"),
            r = a("OWtl"),
            l = a("rvFo"),
            o = a("Kwur");
        let s = (0, i.q)(r.a, e => {
            let {
                accountId: t,
                userId: a,
                url: i
            } = e, r = null == i ? null : (0, n.c)(i), s = r?.workspaceDocument == null ? null : `external-gdrive:file:${r.nativeFileId}`;
            return {
                enabled: null != t && null != a && null != s,
                queryKey: ["google-file-title", t, a, s],
                staleTime: l.b.FIVE_MINUTES,
                retry: !1,
                queryFn: async e => {
                    let {
                        signal: n
                    } = e;
                    if (null == t || null == a || null == s) return null;
                    try {
                        let e = await o.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": t
                            },
                            expectedIdentity: {
                                accountId: t,
                                userId: a
                            },
                            expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
                            parameters: {
                                path: {
                                    provider_key: "google_drive"
                                }
                            },
                            requestBody: {
                                file_id: s
                            },
                            retry: !1,
                            signal: n
                        });
                        return n.throwIfAborted(), e.file_id === s && e.name.trim() || null
                    } catch {
                        return n.throwIfAborted(), null
                    }
                }
            }
        });
        a.d(t, {}, {
            a: s
        })
    }),
    VB5Q: (function(e, t, a) {
        var n = a("cC4N");

        function i(e) {
            let {
                content: t,
                has_redundant_fences: a,
                language: i
            } = e;
            if (!a || !i?.trim()) return t;
            let r = /^( {0,3})(`{3,}|~{3,})/.exec(t)?.[2],
                l = t.replace(/(?:\r\n|[\r\n])$/, ""),
                o = Math.max(l.lastIndexOf("\n"), l.lastIndexOf("\r")) + 1,
                s = /^ {0,3}(`+|~+)[ \t]*$/.exec(l.slice(o))?.[1];
            if (null == r || null == s || s[0] !== r[0] || s.length < r.length) return t;
            let c = (0, n.a)(t).children,
                d = 1 === c.length ? c[0] : void 0;
            return d?.type === "code" && d.lang?.toLowerCase() === i.trim().toLowerCase() ? d.value : t
        }
        a.d(t, {
            a: () => i
        })
    }),
    nD0d: (function(e, t, a) {
        a.d(t, {
            a: () => en
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("iwt4"),
            l = a("yTnN"),
            o = a("zd8w"),
            s = a("Bbed"),
            c = a("DcH0"),
            d = a("nUGc");

        function u(e) {
            let t, a = (0, i.c)(2),
                {
                    reference: r
                } = e,
                l = (0, o.useContext)(d.a) ? r.alt ?? "••••" : r.data.value;
            return a[0] !== l ? (t = (0, n.jsx)("span", {
                className: "whitespace-nowrap tabular-nums",
                children: l
            }), a[0] = l, a[1] = t) : t = a[1], t
        }
        var f = a("jZDY"),
            _ = a("HAEQ"),
            p = a("WdQN"),
            g = a("OprO"),
            m = a("YAi8"),
            h = a("iTtm"),
            b = a("Wf1j"),
            v = a("oyxz"),
            y = a("ygO2"),
            T = a("q5qu"),
            I = a("OWtl"),
            E = a("MrGp"),
            A = a("TUMj"),
            C = a("ldQM");

        function x(e) {
            let t, a = (0, i.c)(3),
                {
                    contentReferenceIndex: r
                } = e,
                l = (0, A.d)(),
                o = l?.contentReferenceMessageIds?.[r] ?? l?.messageId;
            return a[0] !== o || a[1] !== l ? (t = null == l || null == o || l.shouldBlockExternalEgress ? null : (0, n.jsx)(w, {
                conversationId: l.conversationId,
                messageId: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function w(e) {
            let t, a, r, l, o = (0, i.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, h.y)(I.a),
                u = (0, b.a)(),
                f = (0, h.x)(C.b, s),
                _ = (0, h.x)(C.e, s);
            return (0, h.x)(E.Z, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || _ !== c ? null : (o[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== d ? (a = () => d.set(C.e, s, null), o[2] = s, o[3] = d, o[4] = a) : a = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions",
                description: "Button under the current ChatGPT assistant message after its questionnaire was dismissed; clicking reopens the questions"
            }), o[5] = r) : r = o[5], o[6] !== t || o[7] !== a ? (l = (0, n.jsx)(T.a, {
                children: (0, n.jsx)(y.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: r
                })
            }), o[6] = t, o[7] = a, o[8] = l) : l = o[8], l)
        }
        var N = a("YgzY"),
            R = a("j8Yf"),
            O = a("ASxG"),
            S = a("LtEv"),
            j = a("EUy6"),
            P = a("AyL4"),
            k = a("WAdu"),
            F = a("tSEg"),
            L = a("WFY2");
        let M = O.object({
            type: O.literal("client_defined_widget"),
            category: O.literal("beacon_card"),
            data: O.object({
                widget_type: O.literal("beacon_card"),
                display_mode: O.literal("block"),
                title: O.string().max(200).refine(e => e.trim().length > 0).nullish(),
                text: O.string().max(2e3).refine(e => e.trim().length > 0),
                button_label: O.string().max(80).refine(e => e.trim().length > 0),
                prompt: O.string().max(4e3).refine(e => e.trim().length > 0).nullish(),
                url: O.url({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(e => null != e.prompt != (null != e.url))
        });

        function G(e) {
            let t, a, r, l, s, c, d, u, f, _, p = (0, i.c)(33),
                {
                    contentReferenceIndex: g,
                    reference: m,
                    isStreaming: v,
                    readOnly: y
                } = e,
                T = (0, h.y)(F.a),
                I = (0, A.d)(),
                E = (0, b.a)(),
                C = (0, o.useContext)(k.a),
                [x, w] = (0, o.useState)(!1),
                N = (0, o.useRef)(null);
            p[0] !== m ? (t = M.safeParse(m), p[0] = m, p[1] = t) : t = p[1];
            let R = t;
            p[2] !== g || p[3] !== I ? (a = (0, A.c)(I, g), p[2] = g, p[3] = I, p[4] = a) : a = p[4];
            let O = a,
                L = O?.messageId,
                G = I?.conversationId,
                W = R.success ? R.data.data.url : void 0,
                D = !0 === y || !0 === v || null == I || I.isStreaming || !0 === I.isReadOnly || I.shouldBlockExternalEgress || null == O || null != W && "restricted" === C;
            if (p[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => () => N.current?.abort(), p[5] = r) : r = p[5], p[6] !== G || p[7] !== D || p[8] !== T || p[9] !== L || p[10] !== W ? (l = [G, D, T, L, W], p[6] = G, p[7] = D, p[8] = T, p[9] = L, p[10] = W, p[11] = l) : l = p[11], (0, o.useLayoutEffect)(r, l), !R.success || x) return null;
            let {
                title: U,
                text: V,
                button_label: q,
                prompt: K
            } = R.data.data;
            return p[12] !== E ? (s = E.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), p[12] = E, p[13] = s) : s = p[13], p[14] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                N.current?.abort(), w(!0)
            }, p[14] = c) : c = p[14], p[15] !== s ? (d = {
                ariaLabel: s,
                onClick: c
            }, p[15] = s, p[16] = d) : d = p[16], p[17] !== D || p[18] !== K || p[19] !== T || p[20] !== O || p[21] !== I || p[22] !== W ? (u = () => {
                if (!D && null != I && null != O) {
                    if (null != W) {
                        N.current?.abort();
                        let e = new AbortController;
                        N.current = e;
                        let t = (0, j.e)(T, {
                            type: "open_url",
                            payload: {
                                url: W,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: I,
                            sourceMessageId: O.messageId,
                            signal: e.signal
                        });
                        !1 !== t && t.catch(B);
                        return
                    }
                    null != K && (0, S.submitChatGptFollowUp)(T, {
                        conversationId: I.conversationId,
                        isTemporaryChat: I.isTemporaryChat ?? !1,
                        parentMessageId: O.messageId,
                        prompt: K
                    }).catch(H)
                }
            }, p[17] = D, p[18] = K, p[19] = T, p[20] = O, p[21] = I, p[22] = W, p[23] = u) : u = p[23], p[24] !== q || p[25] !== D || p[26] !== u ? (f = {
                label: q,
                disabled: D,
                onClick: u
            }, p[24] = q, p[25] = D, p[26] = u, p[27] = f) : f = p[27], p[28] !== d || p[29] !== f || p[30] !== V || p[31] !== U ? (_ = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(P.a, {
                    variant: "beacon",
                    title: U,
                    description: V,
                    dismissAction: d,
                    primaryAction: f
                })
            }), p[28] = d, p[29] = f, p[30] = V, p[31] = U, p[32] = _) : _ = p[32], _
        }

        function H(e) {
            L.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function B(e) {
            L.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var W = a("dhxJ"),
            D = a("ZUun"),
            U = a("VB5Q");

        function V(e) {
            let t, a, r, l, s, c, d, u = (0, i.c)(32),
                {
                    contentReferenceIndex: f,
                    isStreaming: _,
                    readOnly: p,
                    reference: g
                } = e,
                {
                    data: m
                } = g,
                b = (0, A.d)(),
                v = _ ?? (b?.isStreaming === !0 && (b.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                y = (0, o.useContext)(k.a),
                T = b?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== T || u[2] !== b?.contentReferenceMessageIds ? (t = null == T ? f : b?.contentReferenceMessageIds?.slice(0, f).filter(e => e === T).length, u[0] = f, u[1] = T, u[2] = b?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let I = t,
                C = b?.conversationId,
                x = T ?? b?.messageId;
            u[4] !== I || u[5] !== C || u[6] !== x ? (a = {
                conversationId: C,
                messageId: x,
                codeBlockIndex: I
            }, u[4] = I, u[5] = C, u[6] = x, u[7] = a) : a = u[7];
            let w = (0, h.x)(E.u, a);
            u[8] !== I || u[9] !== y || u[10] !== v || u[11] !== p || u[12] !== w || u[13] !== T || u[14] !== b ? (r = b && {
                ...b,
                messageId: T ?? b.messageId,
                codeBlocks: (0, W.a)({
                    code_blocks: null == w || null == I ? void 0 : {
                        [I]: w
                    }
                }) ?? (null == T || T === b.messageId ? b.codeBlocks : void 0),
                isReadOnly: p || b.isReadOnly,
                isStreaming: v,
                shouldBlockExternalEgress: b.shouldBlockExternalEgress || "restricted" === y
            }, u[8] = I, u[9] = y, u[10] = v, u[11] = p, u[12] = w, u[13] = T, u[14] = b, u[15] = r) : r = u[15], u[16] !== m ? (l = (0, U.a)(m), u[16] = m, u[17] = l) : l = u[17];
            let N = m.model_previewable ? "preview" : void 0;
            return u[18] !== m.language ? (s = m.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = m.language, u[19] = s) : s = u[19], u[20] !== I || u[21] !== m.content || u[22] !== m.editable || u[23] !== m.interactive || u[24] !== v || u[25] !== l || u[26] !== N || u[27] !== s ? (c = (0, n.jsx)(D.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: l,
                codeBlockIndex: I,
                codeBlockInfo: N,
                content: m.content,
                editable: m.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: v,
                isInteractive: m.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1
            }), u[20] = I, u[21] = m.content, u[22] = m.editable, u[23] = m.interactive, u[24] = v, u[25] = l, u[26] = N, u[27] = s, u[28] = c) : c = u[28], u[29] !== c || u[30] !== r ? (d = (0, n.jsx)(A.b.Provider, {
                value: r,
                children: c
            }), u[29] = c, u[30] = r, u[31] = d) : d = u[31], d
        }
        var q = a("DIH2");

        function K(e) {
            let t, a, r, l, o, s, c = (0, i.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, q.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, q.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                _ = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                p = _ && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== _ || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (r = _ && "inline_anchor" !== d.data.presentation ? (0, q.b)(d.data.pronunciation_hint) : null, c[5] = _, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = r) : r = c[8];
            let g = r;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== g ? (l = null != g && g !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                description: "Readable fallback while pronunciation controls load or fail to load. The text placeholder is the original word or phrase, and pronunciation is its phonetic pronunciation hint. Both values come from the conversation and should be preserved; punctuation may be localized.",
                values: {
                    text: u,
                    pronunciation: g
                }
            }) : u, c[9] = u, c[10] = g, c[11] = l) : l = c[11], c[12] !== u || c[13] !== f ? (o = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = o) : o = c[14], c[15] !== p || c[16] !== l || c[17] !== o ? (s = (0, n.jsxs)(p, {
                children: [l, o]
            }), c[15] = p, c[16] = l, c[17] = o, c[18] = s) : s = c[18], s)
        }
        var z = a("yxxQ"),
            Y = a("VTN2");
        let Q = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(433520), a.e(306193)]).then(a.bind(a, "fkRj"))).ChatGptTranslationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(851456), a.e(974872), a.e(953141), a.e(715515), a.e(672793), a.e(344557), a.e(374281), a.e(208123), a.e(95104), a.e(678608), a.e(559850)]).then(a.bind(a, "KKwe"))).DilWritingBlock, _.a),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(433520), a.e(717705)]).then(a.bind(a, "fmfw"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(z.a, {})
            }),
            J = (0, s.a)(l.a, {
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
                    return (0, n.jsx)(R.a, {
                        reference: t
                    })
                }
            }),
            ee = (0, s.a)(r.e, {
                fallback: (0, n.jsx)(c.a, {
                    className: "w-full"
                }),
                errorFallback: e => {
                    let {
                        reference: t
                    } = e;
                    return (0, n.jsx)(R.a, {
                        reference: t
                    })
                }
            }),
            et = (0, o.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(990054), a.e(830353), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(433520), a.e(437140)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            ea = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function en(e) {
            let t, a, r, l, o, s = (0, i.c)(75),
                {
                    appBlockTopMargin: c,
                    bind: d,
                    contentReferenceIndex: f,
                    isLastNodeInMessage: _,
                    isStreaming: h,
                    mapFullscreenMode: b,
                    readOnly: v,
                    reference: y
                } = e;
            if ("business_profile_starter_pills" === y.category) {
                let e;
                return s[0] !== y.data ? (e = (0, n.jsx)(g.c, {
                    data: y.data
                }), s[0] = y.data, s[1] = e) : e = s[1], e
            }
            if ("beacon_card" === y.category) {
                let e;
                return s[2] !== f || s[3] !== h || s[4] !== v || s[5] !== y ? (e = (0, n.jsx)(G, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: h,
                    readOnly: v
                }), s[2] = f, s[3] = h, s[4] = v, s[5] = y, s[6] = e) : e = s[6], e
            }
            if ("suggest_work_handoff" === y.category) {
                let e;
                return s[7] !== f || s[8] !== h || s[9] !== v ? (e = v || h ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(ea, {
                        contentReferenceIndex: f
                    })
                }), s[7] = f, s[8] = h, s[9] = v, s[10] = e) : e = s[10], e
            }
            if ("health_chart" === y.category) {
                let e;
                return s[11] !== f || s[12] !== h || s[13] !== y ? (e = (0, n.jsx)(J, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: h
                }), s[11] = f, s[12] = h, s[13] = y, s[14] = e) : e = s[14], e
            }
            if ("learning_flashcards" === y.category) {
                let e;
                return s[15] !== f || s[16] !== h || s[17] !== v || s[18] !== y ? (e = (0, n.jsx)(ee, {
                    contentReferenceIndex: f,
                    reference: y,
                    isStreaming: h,
                    readOnly: v
                }), s[15] = f, s[16] = h, s[17] = v, s[18] = y, s[19] = e) : e = s[19], e
            }
            if (N.b.safeParse(y).success) {
                let e;
                return s[20] !== f ? (e = (0, n.jsx)(x, {
                    contentReferenceIndex: f
                }), s[20] = f, s[21] = e) : e = s[21], e
            }
            if ("writing_block" === y.category) {
                let e;
                return s[22] !== f || s[23] !== _ || s[24] !== h || s[25] !== v || s[26] !== y.data ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: f,
                    data: y.data,
                    isLastNodeInMessage: _,
                    isStreaming: h,
                    readOnly: v
                }), s[22] = f, s[23] = _, s[24] = h, s[25] = v, s[26] = y.data, s[27] = e) : e = s[27], e
            }
            if ("map" === y.category) {
                let e;
                return s[28] !== f || s[29] !== h || s[30] !== b || s[31] !== y ? (e = (0, n.jsx)(m.a, {
                    contentReferenceIndex: f,
                    fullscreenMode: b,
                    isStreaming: h,
                    reference: y
                }), s[28] = f, s[29] = h, s[30] = b, s[31] = y, s[32] = e) : e = s[32], e
            }
            if ("app_block" === y.category) {
                let e;
                return s[33] !== c || s[34] !== d || s[35] !== h || s[36] !== v || s[37] !== y ? (e = (0, n.jsx)(p.a, {
                    bind: d,
                    reference: y,
                    isStreaming: h,
                    readOnly: v,
                    withTopMargin: c
                }), s[33] = c, s[34] = d, s[35] = h, s[36] = v, s[37] = y, s[38] = e) : e = s[38], e
            }
            if ("ledger_monetary_value" === y.category) {
                let e, t;
                s[39] !== y ? (e = Y.f.safeParse(y), s[39] = y, s[40] = e) : e = s[40];
                let a = e;
                return s[41] !== y || s[42] !== a.data || s[43] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(R.a, {
                    reference: y
                }), s[41] = y, s[42] = a.data, s[43] = a.success, s[44] = t) : t = s[44], t
            }
            s[45] !== y ? (t = Y.d.safeParse(y), s[45] = y, s[46] = t) : t = s[46];
            let T = t;
            if (T.success) {
                let e;
                return s[47] !== T.data || s[48] !== f || s[49] !== h || s[50] !== v ? (e = (0, n.jsx)(V, {
                    contentReferenceIndex: f,
                    isStreaming: h,
                    readOnly: v,
                    reference: T.data
                }), s[47] = T.data, s[48] = f, s[49] = h, s[50] = v, s[51] = e) : e = s[51], e
            }
            s[52] !== y ? (a = Y.e.safeParse(y), s[52] = y, s[53] = a) : a = s[53];
            let I = a;
            if (I.success) {
                let e;
                return s[54] !== f || s[55] !== I.data ? (e = (0, n.jsx)(ei, {
                    contentReferenceIndex: f,
                    reference: I.data
                }), s[54] = f, s[55] = I.data, s[56] = e) : e = s[56], e
            }
            s[57] !== y ? (r = Y.g.safeParse(y), s[57] = y, s[58] = r) : r = s[58];
            let E = r;
            if (E.success) {
                let e, t = !0 === h;
                return s[59] !== f || s[60] !== E.data || s[61] !== t ? (e = (0, n.jsx)(Q, {
                    contentReferenceIndex: f,
                    isStreaming: t,
                    reference: E.data
                }), s[59] = f, s[60] = E.data, s[61] = t, s[62] = e) : e = s[62], e
            }
            s[63] !== y ? (l = Y.h.safeParse(y), s[63] = y, s[64] = l) : l = s[64];
            let A = l;
            if (A.success) {
                let e;
                return s[65] !== f || s[66] !== h || s[67] !== A.data ? (e = (0, n.jsx)($, {
                    contentReferenceIndex: f,
                    isStreaming: h,
                    reference: A.data
                }), s[65] = f, s[66] = h, s[67] = A.data, s[68] = e) : e = s[68], e
            }
            if (!Y.c.safeParse(y).success) {
                let e;
                return s[69] !== y ? (e = (0, n.jsx)(R.c, {
                    reference: y
                }), s[69] = y, s[70] = e) : e = s[70], e
            }
            return s[71] !== f || s[72] !== h || s[73] !== y ? (o = (0, n.jsx)(er, {
                contentReferenceIndex: f,
                reference: y,
                isStreaming: h
            }), s[71] = f, s[72] = h, s[73] = y, s[74] = o) : o = s[74], o
        }

        function ei(e) {
            let t, a, r, l = (0, i.c)(10),
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
            return l[2] !== s || l[3] !== u || l[4] !== d || l[5] !== c ? (a = d && null != et ? (0, n.jsx)(et, {
                contentReferenceIndex: s,
                reference: c
            }) : u, l[2] = s, l[3] = u, l[4] = d, l[5] = c, l[6] = a) : a = l[6], l[7] !== u || l[8] !== a ? (r = (0, n.jsx)(o.Suspense, {
                fallback: u,
                children: a
            }), l[7] = u, l[8] = a, l[9] = r) : r = l[9], r
        }

        function er(e) {
            let t, a, r = (0, i.c)(6),
                [l] = (0, o.useState)(el);
            return r[0] !== e || r[1] !== l ? (t = (0, n.jsx)(Z, {
                ...e,
                widgetRefSeenAtMs: l
            }), r[0] = e, r[1] = l, r[2] = t) : t = r[2], r[3] !== e.contentReferenceIndex || r[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), r[3] = e.contentReferenceIndex, r[4] = t, r[5] = a) : a = r[5], a
        }

        function el() {
            return performance.now()
        }
    }),
    yxxQ: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("oyxz"),
            l = a("aqd9");

        function o() {
            let e, t = (0, i.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                className: "my-2 h-[27rem] w-full pt-5",
                "aria-busy": !0,
                children: (0, n.jsx)("div", {
                    ref: l.a,
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.contentReferences.chart.creating",
                        defaultMessage: "Creating chart",
                        description: "Status shown while a chart is being generated in a ChatGPT response or its renderer is loading"
                    })
                })
            }), t[0] = e) : e = t[0], e
        }
        a.d(t, {
            a: () => o
        })
    }),
    VTN2: (function(e, t, a) {
        var n = a("ASxG"),
            i = a("o7rp");
        let r = n.string().nullable().optional(),
            l = n.enum(["compact", "integer", "raw"]),
            o = r.catch(void 0),
            s = n.object({
                dimension: n.enum(["x", "y"]).optional().catch(void 0),
                domain: n.tuple([n.number(), n.number()]).optional().catch(void 0),
                label: o,
                ticks: n.array(n.object({
                    label: i.string().nullish(),
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
                    widget_type: r
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
                alt: r,
                category: n.literal("ledger_monetary_value"),
                data: n.object({
                    value: n.string()
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
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
            p = n.object({
                category: n.literal("learning_block"),
                data: n.object({
                    content: n.string(),
                    content_is_placeholder: n.boolean().nullable().optional(),
                    content_type: r,
                    display_mode: n.enum(["block", "inline"]).optional(),
                    encoded_content: r,
                    encoded_follow_up_actions: r,
                    encoded_initial_values: r,
                    locale: r,
                    matched_type: r,
                    server_learning_block_version: n.number().nullable().optional(),
                    source: r,
                    thumbnail_asset_key: r,
                    widgetType: r,
                    widget_type: r
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            g = n.object({
                category: n.literal("language_learning_block"),
                data: n.object({
                    content: n.string(),
                    intent: n.literal("translation"),
                    pronunciation_language: r,
                    target_language: r,
                    translation_pairs: n.unknown().optional(),
                    language_options: n.unknown().optional(),
                    max_displayed_translation_pairs: n.number().int().positive().optional().catch(void 0),
                    disable_share_button: n.boolean().optional().catch(void 0),
                    version: r.catch(void 0)
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            m = n.object({
                add_to_flashcards_enabled: n.boolean().nullable().optional(),
                content: n.string(),
                continue_in_voice_enabled: n.boolean().nullable().optional(),
                presentation: n.literal("inline_anchor").nullable().optional(),
                pronunciation_audio_text: r,
                pronunciation_hint: r,
                pronunciation_language: r,
                source_text: r,
                speaking_tip: r,
                version: r,
                voice_practice_version: r
            }).loose(),
            h = n.object({
                category: n.literal("language_learning_block"),
                data: m.extend({
                    intent: n.literal("pronunciation")
                }),
                type: n.literal("client_defined_widget")
            }).loose(),
            b = n.object({
                category: n.literal("translation_block"),
                data: n.object({
                    content: n.string(),
                    source_language: r,
                    target_language: r,
                    translated_text: r
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            v = n.discriminatedUnion("category", [g, b]);
        a.d(t, {}, {
            a: _,
            b: c,
            c: d,
            d: u,
            e: p,
            f: f,
            g: h,
            h: v
        })
    }),
    ahg9: (function(e, t, a) {
        var n = a("rKAs"),
            i = a("zSQm");

        function r(e) {
            let t = (0, n.p)(e);
            return null == t ? null : (0, i.a)(t) ?? null
        }
        a.d(t, {
            a: () => r
        })
    }),
    GnI8: (function(e, t, a) {
        a.d(t, {
            ChatGptFileReference: () => eg
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Rzcw"),
            l = a("nB3p"),
            o = a("lUoP"),
            s = a("BOYb"),
            c = a("iTtm"),
            d = a("zd8w"),
            u = a("v7qY"),
            f = a("Wf1j"),
            _ = a("oyxz"),
            p = a("mG2A"),
            g = a("w7Qu"),
            m = a("O0M0"),
            h = a("w9uH"),
            b = a("NkEl"),
            v = a("ygO2"),
            y = a("bf6R"),
            T = a("VL1D"),
            I = a("RNul"),
            E = a("SGsN"),
            A = a("CqQF"),
            C = a("bWX0"),
            x = a("nz9r"),
            w = a("JdRz"),
            N = a("jCsa"),
            R = a("MExO"),
            O = a("vYmP"),
            S = a("ZjkF"),
            j = a("WAdu"),
            P = a("cckT"),
            k = a("S1CS"),
            F = a("Ph61"),
            L = a("LOXd"),
            M = a("coFq"),
            G = a("GaA7"),
            H = a("tSEg"),
            B = a("WFY2"),
            W = a("zsxQ"),
            D = a("vldH"),
            U = a("zy7P"),
            V = a("u4MG"),
            q = a("MrGp"),
            K = a("TUMj"),
            z = a("rxj0"),
            Y = a("zamV"),
            Q = a("Ul98"),
            $ = a("XkLc"),
            X = a("c9lJ"),
            Z = a("gsAl"),
            J = a("ahg9"),
            ee = a("j8Yf"),
            et = a("t2JB"),
            ea = a("PO1G"),
            en = a("DIH2");

        function ei(e) {
            let t, a, r, o, s, u, f, _, p = (0, i.c)(34),
                {
                    reference: g
                } = e,
                m = (0, c.y)(H.a),
                h = (0, K.d)(),
                b = "restricted" === (0, d.useContext)(j.a);
            p[0] !== g.name ? (t = (0, en.b)(g.name), p[0] = g.name, p[1] = t) : t = p[1];
            let v = t,
                T = (0, et.b)(g),
                I = (0, d.useRef)(null),
                E = h?.savedContentResponse,
                A = h?.shouldBlockExternalEgress === !0,
                C = null == E || null == T || A ? null : (0, l.k)(T);
            p[2] !== C || p[3] !== E || p[4] !== m ? (a = () => {
                (0, F.a)(m, I, E, C)
            }, p[2] = C, p[3] = E, p[4] = m, p[5] = a) : a = p[5];
            let x = (0, d.useEffectEvent)(a);
            p[6] !== x ? (r = () => {
                x()
            }, p[6] = x, p[7] = r) : r = p[7];
            let w = C?.id,
                N = C?.kind,
                R = E?.conversationId,
                S = E?.responseId,
                P = E?.savedContentBackend;
            if (p[8] !== w || p[9] !== N || p[10] !== R || p[11] !== S || p[12] !== P ? (o = [w, N, R, S, P], p[8] = w, p[9] = N, p[10] = R, p[11] = S, p[12] = P, p[13] = o) : o = p[13], (0, d.useEffect)(r, o), null == v || null == T) {
                let e;
                return p[14] !== g ? (e = (0, n.jsx)(ee.a, {
                    reference: g
                }), p[14] = g, p[15] = e) : e = p[15], e
            }
            p[16] !== C || p[17] !== T || p[18] !== A || p[19] !== v || p[20] !== b || p[21] !== E || p[22] !== m ? (s = A ? (0, n.jsx)(O.a, {
                ariaLabel: v,
                disabled: !0,
                icon: (0, n.jsx)(y.td, {}),
                isTerminalInline: !0,
                label: v,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: er
            }) : (0, n.jsx)(O.a, {
                ariaLabel: v,
                href: T,
                icon: (0, n.jsx)(y.td, {}),
                isTerminalInline: !0,
                label: v,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, F.a)(m, I, E, C, !0)
                }
            }), p[16] = C, p[17] = T, p[18] = A, p[19] = v, p[20] = b, p[21] = E, p[22] = m, p[23] = s) : s = p[23];
            let k = s;
            p[24] !== v || p[25] !== g ? (u = function(e, t) {
                let a = (0, en.b)(e.matched_text),
                    n = (0, en.b)(e.library_path);
                if (null == a || null == n) return null;
                let i = a.match(/^`+/)?.[0],
                    r = null != i && a.endsWith(i),
                    l = r ? a.slice(i.length, -i.length) : a,
                    o = n.split("/").filter(Boolean);
                if (o.length < 2 || o.at(-1) !== t) return null;
                let s = o.join("/");
                if (!new Set([`/${s}`, s, `/${s}/`, `${s}/`, `Library/${s}`, ...[" / ", " > ", " → ", " › "].map(e => o.join(e))]).has(l)) return null;
                let c = l.lastIndexOf(t);
                return {
                    isInlineCode: r,
                    prefix: l.slice(0, c),
                    suffix: l.slice(c + t.length)
                }
            }(g, v), p[24] = v, p[25] = g, p[26] = u) : u = p[26];
            let L = u;
            if (null == L) return k;
            p[27] !== k || p[28] !== L.prefix || p[29] !== L.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [L.prefix, k, L.suffix]
            }), p[27] = k, p[28] = L.prefix, p[29] = L.suffix, p[30] = f) : f = p[30];
            let M = f;
            return p[31] !== M || p[32] !== L.isInlineCode ? (_ = L.isInlineCode ? (0, n.jsx)("code", {
                children: M
            }) : M, p[31] = M, p[32] = L.isInlineCode, p[33] = _) : _ = p[33], _
        }

        function er() {}
        var el = a("Bbed"),
            eo = a("ePaQ"),
            es = a("JAYD"),
            ec = a("Nfif");
        let ed = (0, el.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(268537)]).then(a.bind(a, "kcNG"))).PrivateSourceFollowUp);

        function eu(e) {
            let t, a, r, l, o, s, u, f = (0, i.c)(29),
                {
                    source: _
                } = e,
                p = (0, c.y)(H.a),
                g = (0, K.d)(),
                [m, h] = (0, d.useState)(""),
                [b, v] = (0, d.useState)(!1),
                y = (0, d.useContext)(j.a);
            f[0] !== y || f[1] !== p.value ? (t = null != (0, H.f)(p.value) && "restricted" !== y, f[0] = y, f[1] = p.value, f[2] = t) : t = f[2];
            let T = t,
                I = (0, c.x)(T ? es.a : null, _.connector_id),
                E = !T || !I;
            f[3] !== E || f[4] !== b || f[5] !== m || f[6] !== _ || f[7] !== g ? (a = E || null == g || g.isReadOnly || g.shouldBlockExternalEgress || g.renderRestrictedWidgets || g.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(ed, {
                source: _,
                question: m,
                onQuestionChange: h,
                turn: g,
                pending: b,
                onPendingChange: v
            }, _.id), f[3] = E, f[4] = b, f[5] = m, f[6] = _, f[7] = g, f[8] = a) : a = f[8];
            let A = _.snippet ?? void 0;
            f[9] !== _.name || f[10] !== A ? (r = {
                title: _.name,
                body: A
            }, f[9] = _.name, f[10] = A, f[11] = r) : r = f[11], f[12] !== _.name || f[13] !== r ? (l = {
                title: _.name,
                hoverCard: r
            }, f[12] = _.name, f[13] = r, f[14] = l) : l = f[14], f[15] !== _.connector_id ? (o = (0, n.jsx)(ec.a, {
                appId: _.connector_id
            }), f[15] = _.connector_id, f[16] = o) : o = f[16];
            let C = _.medical_file_reference?.source_label ?? _.name;
            return f[17] !== E || f[18] !== _.name || f[19] !== o || f[20] !== C ? (s = (0, n.jsx)(O.a, {
                ariaLabel: _.name,
                disabled: E,
                icon: o,
                label: C,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: ef
            }), f[17] = E, f[18] = _.name, f[19] = o, f[20] = C, f[21] = s) : s = f[21], f[22] !== E || f[23] !== b || f[24] !== _.connector_id || f[25] !== a || f[26] !== l || f[27] !== s ? (u = (0, n.jsx)(eo.a, {
                disabled: E,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: b,
                followUp: a,
                metadata: l,
                sourceAppId: _.connector_id,
                children: s
            }), f[22] = E, f[23] = b, f[24] = _.connector_id, f[25] = a, f[26] = l, f[27] = s, f[28] = u) : u = f[28], u
        }

        function ef(e) {
            return e.currentTarget.focus()
        }
        var e_ = a("iKA6");
        let ep = (0, c.q)(H.a, (e, t) => {
            let {
                conversationId: a,
                messageId: n,
                target: i
            } = e, {
                scope: r
            } = t;
            return {
                queryKey: ["latex-card-workspace-file", a, n, i],
                staleTime: 0,
                retry: !1,
                queryFn: async () => {
                    if (null != i) {
                        let e = await (0, h.b)(r, a, i);
                        if (null != e && "tex" === (0, C.c)(e.path)) return {
                            file: e,
                            originalSource: !1
                        };
                        let t = await (0, h.a)(r, a, n, i);
                        return null == t ? null : {
                            file: t,
                            originalSource: !0
                        }
                    }
                    return null
                }
            }
        });

        function eg(e) {
            let t, a, r, l = (0, i.c)(17);
            l[0] !== e.reference ? (t = e_.a.safeParse(e.reference), l[0] = e.reference, l[1] = t) : t = l[1];
            let o = t;
            if (o.success) {
                let e;
                return l[2] !== o.data ? (e = (0, n.jsx)(eu, {
                    source: o.data
                }, o.data.id), l[2] = o.data, l[3] = e) : e = l[3], e
            }
            if ("library_folder" === e.reference.type || (0, et.c)(e.reference)) {
                let t;
                return l[4] !== e.reference ? (t = (0, n.jsx)(ei, {
                    reference: e.reference
                }), l[4] = e.reference, l[5] = t) : t = l[5], t
            }
            if ("file_navlist" === e.reference.type) {
                let t;
                return l[6] !== e ? (t = (0, n.jsx)(ey, {
                    ...e
                }), l[6] = e, l[7] = t) : t = l[7], t
            }
            let s = "template" === e.presentation ? "auto" : e.presentation;
            l[8] !== e || l[9] !== s ? (a = (0, n.jsx)(eh, {
                ...e,
                presentation: s
            }), l[8] = e, l[9] = s, l[10] = a) : a = l[10];
            let c = a;
            if ("file" === e.reference.type && (null == e.presentation || "auto" === e.presentation) && null == (0, en.b)(e.reference.sandbox_path) && !(0, en.b)(e.reference.link_markdown)?.includes("sandbox:")) {
                let e;
                l[11] !== c ? (e = (0, n.jsx)(em, {
                    children: c
                }), l[11] = c, l[12] = e) : e = l[12], c = e
            }
            let d = "template" === e.presentation;
            return l[13] !== c || l[14] !== e.reference || l[15] !== d ? (r = (0, n.jsx)(p.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: d
            }), l[13] = c, l[14] = e.reference, l[15] = d, l[16] = r) : r = l[16], r
        }

        function em(e) {
            let {
                children: t
            } = e, a = (0, K.d)(), n = (0, c.x)(q.R, a?.conversationId ?? null);
            return null == n || (0, V.a)(n) ? t : null
        }

        function eh(e) {
            var t, a, p, h;
            let V, ei, er, el, eo, es, ec, ed, eu, ef, e_ = (0, i.c)(46),
                {
                    children: eg,
                    contentReferenceIndex: em,
                    fileNavigationIndex: eh,
                    presentation: ey,
                    reference: eT,
                    showSaveAs: eI
                } = e,
                eE = void 0 === ey ? "auto" : ey,
                eA = (0, c.y)(H.a),
                eC = (0, f.a)(),
                ex = (0, K.d)(),
                ew = (0, K.c)(ex, em)?.messageId ?? ex?.messageId,
                eN = (0, d.useContext)(m.a),
                eR = "restricted" === (0, d.useContext)(j.a),
                [eO, eS] = (0, d.useState)(),
                ej = (0, d.useRef)(null),
                eP = null != eO,
                ek = eN?.accountId ?? null,
                eF = eN?.userId ?? null;
            e_[0] !== eT.cloud_doc_url || e_[1] !== eT.codex_file_citation_authoritative || e_[2] !== eR || e_[3] !== ex?.shouldBlockExternalEgress ? (V = ex?.shouldBlockExternalEgress !== !1 || eR || !0 !== eT.codex_file_citation_authoritative ? null : (0, en.b)(eT.cloud_doc_url), e_[0] = eT.cloud_doc_url, e_[1] = eT.codex_file_citation_authoritative, e_[2] = eR, e_[3] = ex?.shouldBlockExternalEgress, e_[4] = V) : V = e_[4], e_[5] !== ek || e_[6] !== eF || e_[7] !== V ? (ei = {
                accountId: ek,
                userId: eF,
                url: V
            }, e_[5] = ek, e_[6] = eF, e_[7] = V, e_[8] = ei) : ei = e_[8];
            let {
                data: eL
            } = (0, c.x)(U.a, ei), eM = eL ?? (0, et.a)(eT), eG = "library_folder" === eT.source_type, eH = (0, D.b)(eT, {
                fileName: eM ?? void 0,
                messageId: ew
            }), eB = ex?.conversationId, eW = (0, X.a)(eA.value.pathname)?.params.sharedConversationId, eD = null == eB ? null : eA.get(q.Y, eB);
            null != eW && eW === eB && (eD = eW);
            let eU = eA.get(Z.e, eN)?.id,
                eV = (0, D.e)(eT),
                eq = null != eH && ex?.shouldBlockExternalEgress === !0,
                eK = null != eH && null != eM && !eq && (0, N.a)({
                    fileName: "mounted-library" === eH.type ? eH.sourceFileName ?? eM : eM,
                    mimeType: "mounted-library" === eH.type ? eH.mimeType ?? eV : eV,
                    mountedLibraryFileId: "mounted-library" === eH.type ? eH.mountedLibraryFileId : void 0
                }),
                ez = eH?.type === "mounted-library" || null != eM && (0, W.a)(eM, eV),
                eY = null != eH && (!eK && "mounted-library" === eH.type && null == eD && null == eU || (0, $.canOpenChatGptFilePreview)({
                    browserPreview: ez
                })),
                eQ = !eq && (eK || eY),
                e$ = G.appServices?.latex != null && "artifact-row" === eE && null != eM && "tex" === (0, C.c)(eM) && eQ && ex?.isReadOnly !== !0 && null == eD && null == eU,
                {
                    data: eX
                } = (0, c.x)(ep, {
                    conversationId: eB,
                    messageId: ex?.messageId,
                    target: eH
                }, {
                    enabled: e$
                }),
                eZ = e$ && null != eX,
                eJ = (void 0 === eI || eI) && eK && (0, $.canSaveChatGptFile)(),
                e0 = (0, J.a)(eT),
                e1 = {
                    fileName: eM ?? void 0,
                    mimeType: (0, D.c)(eT) ?? (eH?.type === "mounted-library" ? eH.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eH?.type === "mounted-library" ? eH.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, D.d)(eT),
                    sourceUrl: e0 ?? void 0
                },
                e2 = "library_folder" === eT.source_type ? (0, et.b)(eT) : e0,
                e3 = null != e2 && ex?.shouldBlockExternalEgress === !0,
                e5 = null == eH || null == eM ? null : (0, Q.a)(eH, eM, eV),
                e6 = null == e5 ? null : (0, R.c)(e5)?.sourceUrl,
                e8 = eq || e3 ? null : e6 ?? (eK || e3 ? null : e2),
                e7 = ex?.savedContentResponse,
                e4 = null;
            null != e7 && null != eM && (eQ || null != e8) && eH?.type !== "mounted-library" && ("library_folder" === eT.source_type && null != e8 ? e4 = (0, l.k)(e8) : null != eH && "libraryFileId" in eH && (e4 = (0, l.j)(eH.libraryFileId)));
            let e9 = (0, d.useEffectEvent)(() => {
                (0, F.a)(eA, ej, e7, e4)
            });
            e_[9] !== e9 ? (er = () => {
                e9()
            }, e_[9] = e9, e_[10] = er) : er = e_[10];
            let te = e4?.id,
                tt = e4?.kind,
                ta = e7?.conversationId,
                tn = e7?.responseId,
                ti = e7?.savedContentBackend;
            if (e_[11] !== ta || e_[12] !== tn || e_[13] !== ti || e_[14] !== te || e_[15] !== tt ? (el = [te, tt, ta, tn, ti], e_[11] = ta, e_[12] = tn, e_[13] = ti, e_[14] = te, e_[15] = tt, e_[16] = el) : el = e_[16], (0, d.useEffect)(er, el), null == eM) {
                let e;
                return e_[17] !== eT ? (e = (0, n.jsx)(ee.a, {
                    reference: eT
                }), e_[17] = eT, e_[18] = e) : e = e_[18], e
            }
            let tr = () => {
                    (0, F.a)(eA, ej, e7, e4, !0)
                },
                tl = (e, t, a) => {
                    if (eP || null == eH) return;
                    "opening" === e && tr();
                    let i = (0, g.a)(eM);
                    "saving" === e && null != eB && null != i && (0, Y.b)(eA, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: i,
                        isEditing: !1,
                        source: {
                            conversationId: eB,
                            byteSource: "chatgpt",
                            sharedConversationId: eD,
                            artifactInteractionExcluded: null != eU,
                            target: eH
                        },
                        originatingTurn: ex?.turnId == null ? void 0 : {
                            turnId: ex.turnId,
                            inputMessageId: null,
                            messageId: ew ?? null
                        }
                    }), eS(e);
                    let r = !0,
                        l = () => {
                            r && (r = !1, eS(void 0))
                        },
                        o = {
                            conversationId: eA.get(q.j, eB ?? null) ?? eB,
                            fileName: eM,
                            gizmoId: null == eB ? null : eA.get(q.R, eB),
                            sharedConversationId: eD,
                            mimeType: eV,
                            postId: eU,
                            target: eH
                        };
                    ("saving" === e ? (0, $.saveChatGptFile)(eA, o) : (0, $.openChatGptFile)(eA, {
                        ...o,
                        messageId: (0, K.c)(ex, em)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, z.i)(e, eB),
                        browserPreview: ez,
                        onClose: null == a ? void 0 : () => {
                            l(), a()
                        },
                        downloadFallback: eK && !eY,
                        tabKey: `${ex?.messageId??"message"}:${String(em)}:${eM}${null==eh?"":`:${String(eh)}`}`
                    })).catch(t => {
                        "opening" === e && r && null != a && ((0, u.flushSync)(l), a()), B.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), eA.get(E.f).danger((0, n.jsx)(_.a, {
                            id: "file-tile.download-failed",
                            defaultMessage: "Failed to download file. Please try again later.",
                            description: "Error toast when opening or downloading a file from a ChatGPT message fails"
                        }), {
                            errorAnalytics: {
                                toastId: "saving" === e ? "file_download_failed" : "unknown"
                            }
                        })
                    }).finally(l)
                },
                to = e => {
                    eQ && (e.preventDefault(), tl("opening", e))
                };
            if ("artifact-row" === eE && eK) {
                let e;
                e_[19] !== eC ? (e = eC.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file",
                    description: "Tooltip and accessibility label for the icon-only download button in an artifact file card beneath a ChatGPT response. It appears when desktop users hover over or focus the row and remains visible on touch devices. Activating the button downloads the file. Short, space-limited action label for end users."
                }), e_[19] = eC, e_[20] = e) : e = e_[20], eo = e
            } else eJ && (eo = eC.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…",
                description: "Accessible label and tooltip for saving a generated ChatGPT file to a user-selected location. The fileName placeholder is the displayed file name."
            }, {
                fileName: eM
            }));
            let ts = null != eo ? (0, n.jsx)(o.a, {
                content: eo,
                children: (0, n.jsx)(v.a, {
                    "aria-label": eo,
                    color: "artifact-row" === eE ? "ghostActive" : "ghost",
                    disabled: eP,
                    loading: "saving" === eO,
                    radius: "artifact-row" === eE ? "large" : "default",
                    size: "artifact-row" === eE ? "imageToolbar" : "toolbar",
                    uniform: !0,
                    onClick: e => {
                        e.stopPropagation(), tl("saving")
                    },
                    children: "saving" !== eO && (0, n.jsx)(w.a, {
                        "aria-hidden": !0,
                        className: "artifact-row" === eE ? "icon-base" : "icon-sm"
                    })
                })
            }) : null;
            if (eQ && null != e5 ? es = eP ? eC.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}",
                    description: "Accessible label for a connected-provider file reference while it is opening in the preferred browser or the file preview. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eC.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}",
                    description: "Accessible label for a connected-provider file reference. Activating it opens the file in the preferred browser on Desktop or the file preview on the web. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eQ ? es = eY && eP ? eC.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eY ? eC.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eP ? eC.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eC.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eq && (es = eY ? eC.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eC.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                })), "artifact-row" !== eE && "file-tile" !== eE) {
                let e = !0 !== eT.codex_file_citation_authoritative && "my_files" === (t = eT).source && null != (0, en.b)(t.library_file_id) && !ev(t),
                    i = !0 !== eT.codex_file_citation_authoritative && null == eg && !e && (ev(eT) || null != e5 || ex?.conversationOrigin === "tpp" && null != (0, en.b)(eT.library_file_id)),
                    l = null == eg ? (0, en.b)((0, en.d)(eT.codex_file_citation_attributes)?.label) ?? (0, en.b)((0, en.d)(eT.codex_file_citation_attributes)?.title) ?? eM : (0, S.a)(eg);
                e ? (a = eT, p = eM, l = (0, r.c)({
                    fileName: p,
                    matchedText: (0, en.b)(a.matched_text) ?? void 0
                })) : i && (l = (0, r.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eM)));
                let o = (0, n.jsx)("span", {
                    style: r.h,
                    children: (0, n.jsx)(x.a, {
                        ...e1,
                        "aria-hidden": !0,
                        size: 16,
                        style: r.i
                    })
                });
                if (i) {
                    let e, t, a = e => {
                            if (!eQ) return;
                            e.preventDefault();
                            let t = e.currentTarget;
                            tl(eK && (0, P.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        i = {
                            ref: e => {
                                if (null != e) return (0, b.b)(e, {
                                    text: [eM, l, e8, ...(0, L.a)(eC, [eT]).sources.flatMap(eb)].join(" "),
                                    highlight: (0, s.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: es ?? eM,
                            icon: o,
                            isTerminalInline: !0,
                            label: l,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != e8 ? (0, n.jsx)(O.a, {
                        ...i,
                        href: e8,
                        onActivate: tr,
                        requiresConfirmation: eR,
                        showHoverActions: null != e6,
                        tooltipContent: eM,
                        variant: "file",
                        onUnmodifiedClick: a
                    }) : eQ ? (0, n.jsx)(O.a, {
                        ...i,
                        disabled: eP,
                        variant: "file",
                        onClick: a
                    }) : (0, n.jsx)(O.a, {
                        ...i,
                        disabled: !0,
                        variant: "file",
                        onClick: () => tl("opening")
                    });
                    let r = null != e8 ? e : (0, n.jsx)(A.a, {
                        tooltipContent: eM,
                        children: e
                    });
                    return e_[21] !== r ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: r
                    }), e_[21] = r, e_[22] = t) : t = e_[22], t
                }
                if (!0 === eT.codex_file_citation_authoritative || null != eg || e || ex?.conversationOrigin === "tpp") {
                    let e, t = null != e8 ? (0, n.jsxs)(ea.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        href: e8,
                        onActivate: tr,
                        "aria-busy": eP,
                        "aria-label": es ?? eM,
                        tooltipContent: eM,
                        showHoverActions: null != e6,
                        onUnmodifiedClick: to,
                        children: [o, eg ?? l]
                    }) : (0, n.jsxs)(k.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        reference: {
                            path: eM
                        },
                        ariaBusy: eP,
                        ariaLabel: es ?? eM,
                        cwd: null,
                        disabled: eP || !eQ,
                        enableWorkspaceFileActions: !1,
                        hostId: ex?.hostId,
                        label: l,
                        tooltipText: eM,
                        onOpen: (e, t) => {
                            eQ && tl(eK && (0, P.a)(t) ? "saving" : "opening", t)
                        },
                        children: [o, eg ?? l]
                    });
                    return e_[23] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), e_[23] = t, e_[24] = e) : e = e_[24], e
                }
            }
            let tc = (0, r.f)({
                    fileName: eM,
                    mimeType: (h = eT, (0, en.b)(h.source_mime_type) ?? (0, en.b)(h.mounted_library_mime_type) ?? (0, en.b)(h.mime_type) ?? void 0),
                    sourceUrl: e0 ?? void 0
                }),
                td = (0, C.c)(eM)?.toUpperCase(),
                tu = null;
            if (null != e8 ? tu = (0, n.jsx)(ea.a, {
                    "data-testid": eG ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eE ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: e8,
                    onActivate: tr,
                    "aria-busy": eP,
                    tooltipContent: eM,
                    showHoverActions: null != e6,
                    onUnmodifiedClick: to,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eM
                    })
                }) : eQ ? tu = (0, n.jsx)("button", {
                    "aria-busy": eP,
                    "aria-label": es,
                    className: "artifact-row" === eE ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: eP,
                    onClick: e => tl(eK && (0, P.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (eq || e3) && (tu = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": es ?? eM,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), eP) {
                let e;
                e_[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(I.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), e_[25] = e) : e = e_[25], ec = e
            } else if (null != ts) {
                let e, t = "pointer-events-auto";
                "artifact-row" === eE ? t = "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "file-tile" === eE && (t = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), e_[26] !== ts || e_[27] !== t ? (e = (0, n.jsx)("span", {
                    className: t,
                    children: ts
                }), e_[26] = ts, e_[27] = t, e_[28] = e) : e = e_[28], ec = e
            }
            if (eZ) {
                let e, t;
                e_[29] !== eX?.originalSource ? (e = eX?.originalSource ? (0, n.jsx)(_.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy",
                    description: "Explains that the original-source action opens a separate workspace file, and editing it does not update the uploaded Library copy"
                }) : void 0, e_[29] = eX?.originalSource, e_[30] = e) : e = e_[30], e_[31] !== eX?.originalSource ? (t = eX?.originalSource ? (0, n.jsx)(_.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source",
                    description: "Opens the original LaTeX workspace file that was uploaded to create this separate Library copy"
                }) : (0, n.jsx)(_.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor",
                    description: "Opens this conversation's local LaTeX source in the built-in editor with a live PDF preview"
                }), e_[31] = eX?.originalSource, e_[32] = t) : t = e_[32], ec = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(o.a, {
                        content: e,
                        children: (0, n.jsx)(v.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: eP,
                            size: "toolbar",
                            onClick: () => {
                                eX?.originalSource ? (0, M.openFileSidePanelTab)(eA, eX.file.path, {
                                    hostId: eX.file.hostId
                                }) : tl("opening")
                            },
                            children: t
                        })
                    }), ec]
                })
            }
            let tf = td,
                t_ = "default";
            "artifact-row" === eE ? (tf = eZ && !eX?.originalSource ? (0, n.jsx)(_.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source",
                description: "Identifies an editable LaTeX source file owned by this conversation's workspace"
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                    children: (0, n.jsx)(_.a, {
                        ...(0, r.d)(tc.category, tc.iconKey)
                    })
                }), (0, n.jsx)("span", {
                    className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                    "data-markdown-copy": "exclude",
                    children: (0, n.jsx)(_.a, {
                        id: "chatgpt.artifacts.resource_row.open_file.label",
                        defaultMessage: "Open file",
                        description: "Hover and keyboard-focus subtitle in a file-card row under a ChatGPT response. It tells the end user that activating the row opens the file preview. This is a short, space-limited action label."
                    })
                })]
            }), t_ = eZ ? "default" : "artifact-list") : "file-tile" === eE && (tf = eG ? (0, n.jsx)(_.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder",
                description: "Type label shown under a Library folder in a navigation result card"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let a = (0, en.b)(e.description) ?? (0, en.b)(e.snippet);
                return a?.startsWith("/") === !0 ? a : null
            }(eT) ?? (0, n.jsx)(_.a, {
                ...(0, r.d)(tc.category, tc.iconKey)
            }), t_ = "file-tile");
            let tp = "file-tile" === eE ? (0, n.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: eG ? (0, n.jsx)(y.ud, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(x.a, {
                    ...e1,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, n.jsx)(x.a, {
                ...e1,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            e_[33] !== eM || e_[34] !== t_ || e_[35] !== tf || e_[36] !== tp || e_[37] !== ec ? (ed = (0, n.jsx)(T.h, {
                className: "pointer-events-none relative z-10",
                icon: tp,
                subtitle: tf,
                title: eM,
                titleTooltip: eM,
                trailing: ec,
                variant: t_
            }), e_[33] = eM, e_[34] = t_, e_[35] = tf, e_[36] = tp, e_[37] = ec, e_[38] = ed) : ed = e_[38], e_[39] !== tu || e_[40] !== ed ? (eu = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [tu, ed]
            }), e_[39] = tu, e_[40] = ed, e_[41] = eu) : eu = e_[41];
            let tg = eu;
            if ("artifact-row" === eE) return tg;
            if ("file-tile" === eE) {
                let e;
                return e_[42] !== tg ? (e = (0, n.jsx)(T.a, {
                    as: "span",
                    variant: "file-tile",
                    children: tg
                }), e_[42] = tg, e_[43] = e) : e = e_[43], e
            }
            return e_[44] !== tg ? (ef = (0, n.jsx)(T.a, {
                as: "span",
                className: "mt-3",
                children: tg
            }), e_[44] = tg, e_[45] = ef) : ef = e_[45], ef
        }

        function eb(e) {
            return [e.displayLabel, e.sourceName]
        }

        function ev(e) {
            if ("file_citation" === (0, en.b)((0, en.d)(e.fff_metadata)?.file_reference_type)) return !0;
            let t = (0, en.b)(e.matched_text)?.trim().toLowerCase();
            return t?.startsWith("filecite") === !0 || t?.startsWith("[citefilecite") === !0
        }

        function ey(e) {
            let t, a, r, l, o = (0, i.c)(12),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e;
            if (o[0] !== s || o[1] !== c) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, i = (Array.isArray(c.items) ? c.items : []).flatMap(eT);
                    if (0 === i.length) {
                        let e;
                        o[5] !== c ? (e = (0, n.jsx)(ee.c, {
                            reference: c
                        }), o[5] = c, o[6] = e) : e = o[6], r = e;
                        break e
                    }
                    t = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    o[7] !== s ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(eg, {
                            contentReferenceIndex: s,
                            fileNavigationIndex: t,
                            presentation: "file-tile",
                            reference: e
                        })
                    }, `${e.name}:${String(t)}`), o[7] = s, o[8] = e) : e = o[8],
                    a = i.map(e)
                }
                o[0] = s, o[1] = c, o[2] = t, o[3] = a, o[4] = r
            } else t = o[2], a = o[3], r = o[4];
            return r !== Symbol.for("react.early_return_sentinel") ? r : (o[9] !== t || o[10] !== a ? (l = (0, n.jsx)("ul", {
                className: t,
                children: a
            }), o[9] = t, o[10] = a, o[11] = l) : l = o[11], l)
        }

        function eT(e) {
            let t = (0, en.d)(e),
                a = null == t ? null : (0, et.a)(t);
            return null == t || null == a ? [] : [{
                ...t,
                name: a,
                type: "file"
            }]
        }
    }),
    PO1G: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("KDax");

        function o(e) {
            let t, a, o, s, c = (0, i.c)(8);
            return c[0] !== e ? ({
                className: t,
                ...a
            } = e, c[0] = e, c[1] = t, c[2] = a) : (t = c[1], a = c[2]), c[3] !== t ? (o = (0, r.b)("cursor-interaction", t), c[3] = t, c[4] = o) : o = c[4], c[5] !== a || c[6] !== o ? (s = (0, n.jsx)(l.a, {
                ...a,
                className: o,
                initiator: "markdown_link_click"
            }), c[5] = a, c[6] = o, c[7] = s) : s = c[7], s
        }
        a.d(t, {
            a: () => o
        })
    }),
    iKA6: (function(e, t, a) {
        var n = a("ASxG");
        let i = n.object({
            type: n.literal("file"),
            id: n.string().min(1),
            name: n.string().min(1),
            connector_id: n.string().min(1),
            start_idx: n.number().optional(),
            cloud_doc_url: n.string().nullish(),
            extra: n.object({
                cloud_doc_url: n.string().nullish()
            }).nullish(),
            snippet: n.string().nullish(),
            medical_file_reference: n.object({
                source_label: n.string().min(1),
                journal_name: n.string().nullish(),
                authors_display: n.string().nullish(),
                publication_year: n.string().nullish(),
                source_url: n.string().nullish(),
                journal_homepage_url: n.string().nullish(),
                source_icon_url: n.string().nullish(),
                doi: n.string().nullish()
            }),
            drug_file_reference: n.unknown().nullish()
        }).refine(e => !e.cloud_doc_url && !e.extra?.cloud_doc_url && !e.medical_file_reference?.journal_name && !e.medical_file_reference?.authors_display && !e.medical_file_reference?.publication_year && !e.medical_file_reference?.source_url && !e.medical_file_reference?.journal_homepage_url && !e.medical_file_reference?.source_icon_url && !e.medical_file_reference?.doi && null == e.drug_file_reference);
        a.d(t, {}, {
            a: i
        })
    }),
    netB: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("T0Rc"),
            l = a("mEbU"),
            o = a("iTtm"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            _ = a("rd6i"),
            p = a("WAdu"),
            g = a("tSEg"),
            m = a("Yscs"),
            h = a("vldH"),
            b = a("MrGp"),
            v = a("TUMj"),
            y = a("EUy6"),
            T = a("gsAl"),
            I = a("GnI8"),
            E = a("DIH2");

        function A(e) {
            let t, a = (0, i.c)(7),
                r = (0, v.d)(),
                l = (0, s.useContext)(p.a);
            if (null == r || r.isStreaming || r.shouldBlockExternalEgress || "restricted" === l) {
                let t, i;
                return a[0] !== e.reference.alt ? (t = (0, E.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (i = (0, n.jsx)(n.Fragment, {
                    children: t
                }), a[2] = t, a[3] = i) : i = a[3], i
            }
            return a[4] !== r || a[5] !== e ? (t = (0, n.jsx)(C, {
                ...e,
                context: r
            }), a[4] = r, a[5] = e, a[6] = t) : t = a[6], t
        }

        function C(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: i,
                    context: p,
                    fallback: v,
                    renderImage: A
                } = e,
                C = (0, o.y)(g.a),
                x = (0, s.useRef)(null),
                w = (0, l.a)(x, {
                    once: !0
                }),
                N = (0, s.useContext)(c.a),
                R = (0, o.z)(d.f),
                O = (0, o.z)(d.j),
                S = (0, o.x)(b.j, p.conversationId) ?? p.conversationId,
                j = (0, o.x)(b.R, p.conversationId),
                P = (0, o.x)(b.Y, p.conversationId),
                k = (0, o.x)(T.e, N)?.id,
                F = (0, h.b)(a, {
                    messageId: p.messageId
                }),
                {
                    data: L,
                    isPending: M
                } = (0, r.a)({
                    queryKey: ["chatgpt-sandbox-image", R, O, S, j, P, k, F, i],
                    enabled: w && null != F,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == F) throw Error("Sandbox image has no download target");
                        let a = await (0, h.fetchChatGptFileBlob)({
                            conversationId: S,
                            gizmoId: j,
                            sharedConversationId: P,
                            postId: k,
                            signal: t,
                            target: null == i && "sandbox" === F.type ? (0, y.b)(C, {
                                sandboxPath: F.sandboxPath,
                                turnContext: p,
                                sourceMessageId: F.messageId
                            }) : F,
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
            return null != A && (null != L || null != F && M) ? A(L, x) : (t = null != L ? (0, n.jsx)(_.b, {
                alt: (0, E.b)(a.alt) ?? "",
                downloadFileName: (0, E.b)(a.file_name) ?? void 0,
                hostId: p.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: L
            }) : null != F && M ? (0, n.jsx)(u.a, {
                "aria-label": (0, E.b)(a.alt) ?? void 0
            }) : null != i ? (0, n.jsx)(I.ChatGptFileReference, {
                contentReferenceIndex: i,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, E.b)(a.alt)
            }), (0, n.jsx)("div", {
                ref: x,
                children: t
            }))
        }
        a.d(t, {
            a: () => A
        })
    }),
    EUy6: (function(e, t, a) {
        var n = a("EA6X"),
            i = a("FIIj"),
            r = a("ASxG"),
            l = a("E8Sp"),
            o = a("X6Vn"),
            s = a("ciEf"),
            c = a("zsxQ"),
            d = a("vldH"),
            u = a("OOaz"),
            f = a("MrGp"),
            _ = a("rxj0"),
            p = a("xof2"),
            g = a("IDHB"),
            m = a("jAnS"),
            h = a("W5UM");
        let b = r.object({
            conversation_id: r.string().min(1).refine(e => "." !== e && ".." !== e && encodeURIComponent(e) === e),
            message_id: r.string().refine(e => e.trim().length > 0).optional().catch(void 0)
        });

        function v(e) {
            let t = e?.link_affordance;
            return {
                linkAffordance: r.enum(n.h).exclude(["UNRECOGNIZED"]).safeParse("string" == typeof t ? `CHATGPT_LINK_AFFORDANCE_${t.toUpperCase().replace(/^CHATGPT_LINK_AFFORDANCE_/,"")}` : void 0).data,
                linkIndex: r.int32().nonnegative().safeParse(e?.link_index).data,
                citationNumbers: r.array(r.int32().positive()).safeParse(e?.citation_numbers).data
            }
        }

        function y(e, t) {
            let a, {
                type: i,
                payload: r,
                turnContext: o,
                sourceMessageId: s,
                contentReferenceStartIndex: c,
                parentContext: d,
                signal: u,
                onInteraction: _,
                onLinkClick: g
            } = t;
            if ("open_conversation" === i) {
                let t = b.safeParse(r);
                if (t.success && !u.aborted) {
                    let a = (0, m.c)(t.data.conversation_id);
                    (0, l.c)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
                }
                return Promise.resolve()
            }
            if ("open_url" !== i) return !1;
            let y = r.url,
                I = !0 === r.require_safe_url_confirmation;
            if ("string" != typeof y || !y || u.aborted || I && !/^https:\/\//i.test(y)) return Promise.resolve();
            let C = E(y);
            if (null != C) return null == o || null == s ? Promise.resolve() : T(e, {
                sandboxPath: C,
                turnContext: o,
                sourceMessageId: s,
                signal: u
            });
            try {
                a = new URL(y, window.location.origin)
            } catch {
                return Promise.resolve()
            }
            if ("http:" !== a.protocol && "https:" !== a.protocol) return Promise.resolve();
            o?.shouldBlockExternalEgress || _?.(), g?.();
            let x = a.toString();
            return ((0, p.g)({
                ...v(r),
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "search_citation" === r.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                conversationId: e.get(f.j, o?.conversationId ?? null) ?? void 0,
                messageId: s,
                assistantMessageId: s,
                turnOrdinal: (0, p.a)(e, o?.conversationId, s),
                contentReferenceType: "dil",
                contentReferenceStartIndex: c,
                parentContext: d,
                url: o?.shouldBlockExternalEgress ? void 0 : x
            }), I && !o?.safeUrls?.includes(x)) ? A(e, x, u) : ((0, h.a)(e, x), Promise.resolve())
        }
        async function T(e, t) {
            let {
                sandboxPath: n,
                turnContext: i,
                sourceMessageId: r,
                sharedConversationId: l,
                signal: o
            } = t, s = e.get(f.Z, i.conversationId), p = l ?? (s?.kind === "conversation" ? s.id : void 0), g = {
                conversationId: e.get(f.j, i.conversationId) ?? (null == p ? null : (0, u.d)(p)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.R, i.conversationId),
                sharedConversationId: p,
                postId: s?.kind === "post" ? s.post.id : void 0,
                requestSource: "web_dil_action",
                target: I(e, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: r
                })
            };
            if (!(0, c.a)(n)) return (0, d.a)({
                ...g,
                signal: o
            });
            let {
                openChatGptFile: m
            } = await Promise.resolve().then(a.bind(a, "XkLc"));
            return m(e, {
                ...g,
                isAccessBlocked: e => (0, _.i)(e, i.conversationId),
                messageId: r,
                browserPreview: !0,
                tabKey: `${r}:sandbox:${n}`,
                signal: o
            })
        }

        function I(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: r,
                    sourceMessageId: l
                } = t,
                o = e.get(f.Z, r.conversationId);
            if (o?.kind === "post") {
                let t = e.get(f.L, r.conversationId)?.[l]?.message;
                if (null != t) {
                    let e = (0, i.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, g.a)(e, r.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: l
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
        async function A(e, t, n) {
            let i = await (0, s.a)(t).catch(() => !1);
            if (n.aborted) return;
            if (i) return void(0, h.a)(e, t);
            let {
                ExternalLinkConfirmationDialog: r
            } = await Promise.resolve().then(a.bind(a, "g25Y"));
            n.aborted || (0, o.f)(e, r, {
                href: t,
                initiator: "markdown_link_click",
                onOpen: () => {
                    n.aborted || (0, h.a)(e, t)
                }
            })
        }
        a.d(t, {
            a: () => E,
            b: () => I,
            c: () => v,
            d: () => T,
            e: () => y
        })
    }),
    hGH3: (function(e, t, a) {
        function n(e, t, a) {
            if ("u" < typeof IntersectionObserver) return;
            let n = e.ownerDocument,
                i = !1,
                r = !1;

            function l() {
                !r && i && "hidden" !== n.visibilityState && e.isConnected && e.checkVisibility?.({
                    checkOpacity: !0,
                    visibilityProperty: !0
                }) && t() && c()
            }
            let o = new IntersectionObserver(e => {
                let [t] = e;
                i = null != t && t.isIntersecting && t.intersectionRatio >= .5, l()
            }, {
                threshold: .5
            });

            function s() {
                i = !1, o.disconnect(), o.takeRecords(), "visible" === n.visibilityState && o.observe(e)
            }

            function c() {
                r = !0, o.disconnect(), n.removeEventListener("visibilitychange", s), a?.removeEventListener("pointerenter", l), e.removeEventListener("pointerenter", l), e.removeEventListener("focusin", l)
            }
            return n.addEventListener("visibilitychange", s), a?.addEventListener("pointerenter", l), e.addEventListener("pointerenter", l), e.addEventListener("focusin", l), s(), c
        }
        a.d(t, {
            a: () => n
        })
    }),
    W5UM: (function(e, t, a) {
        var n = a("Ot7V"),
            i = a("OMIV");

        function r(e, t) {
            (e.get(i.c, "1775679520") ? n.d : n.f)({
                href: t,
                initiator: "markdown_link_click"
            })
        }
        a.d(t, {
            a: () => r
        })
    }),
    zamV: (function(e, t, a) {
        var n = a("tFxw"),
            i = a("MVHH"),
            r = a("yGJW"),
            l = a("MrGp"),
            o = a("jAnS");
        let s = {
            "autofit-column": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_COLUMN",
            "autofit-row": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_ROW",
            "click-formula-bar": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLICK_FORMULA_BAR",
            copy: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_COPY",
            cut: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CUT",
            "delete-selection": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DELETE_SELECTION",
            "double-click-content": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOUBLE_CLICK_CONTENT",
            "fit-to-viewport": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_FIT_TO_VIEWPORT",
            paste: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE",
            "paste-without-formatting": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE_WITHOUT_FORMATTING",
            redo: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_REDO",
            "resize-column": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_COLUMN",
            "resize-row": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_ROW",
            save: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SAVE",
            search: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SEARCH",
            "select-all": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SELECT_ALL",
            undo: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_UNDO",
            "zoom-in": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_IN",
            "zoom-out": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_OUT"
        };

        function c(e, t) {
            return {
                onPreviewOpened: () => d(e, {
                    ...t,
                    action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW"
                }),
                onDownload: () => d(e, {
                    ...t,
                    action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD"
                }),
                onClose: () => d(e, {
                    ...t,
                    action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLOSE_PREVIEW"
                }),
                onInteractionAttempt: a => {
                    d(e, {
                        ...t,
                        action: s[a]
                    })
                }
            }
        }

        function d(e, t) {
            let a, {
                action: s,
                importKind: c,
                source: d,
                isEditing: f,
                originatingTurn: _
            } = t;
            if (null == d || f) return;
            let {
                conversationId: p,
                target: g
            } = d;
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== p || null != d.sharedConversationId || !0 === d.artifactInteractionExcluded || null != e.get(l.Z, p)) return;
            if ("pptx" === c) a = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== c && "csv" !== c && "tsv" !== c) return;
                a = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let m = e.get(l.x, p),
                h = "tpp" === m || "flora" === m;
            if (!h || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== s) try {
                let t = "fileId" in g ? g.fileId : void 0,
                    l = "libraryFileId" in g ? g.libraryFileId : void 0,
                    c = (0, n.a)("mounted-library" === g.type ? g.mountedLibraryFileId : void 0, l, t),
                    d = null != c && (null != (0, n.d)(c) || (0, n.j)(c)) ? c : void 0;
                (0, r.a)(e, i.j, {
                    action: s,
                    artifactKind: a,
                    conversationId: p,
                    fileId: u(t),
                    libraryFileId: u(l),
                    mountedLibraryFileId: d,
                    messageId: _?.messageId ?? ("sandbox" === g.type ? g.messageId : void 0),
                    inputMessageId: _?.inputMessageId ?? void 0,
                    turnExchangeId: _?.turnId,
                    interactionMode: "CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY",
                    isTemporaryChat: (0, o.f)(e.value.search ?? ""),
                    productExperience: h ? "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_WORK" : "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_CHAT"
                })
            } catch {}
        }

        function u(e) {
            return e?.replace(/^(?:file-library:)+/u, "").startsWith("external-") ? void 0 : e || void 0
        }
        a.d(t, {
            a: () => c,
            b: () => d
        })
    }),
    mF5c: (function(e, t, a) {
        var n = a("EA6X"),
            i = a("MVHH"),
            r = a("Cslg"),
            l = a("SGsN"),
            o = a("svjy"),
            s = a("IZUf"),
            c = a("VJXV"),
            d = a("wHLp"),
            u = a("yGJW"),
            f = a("xof2");
        async function _(e, t) {
            let {
                image: a,
                conversationId: n,
                libraryFileId: i,
                status: r,
                folder: l,
                created: o,
                onView: s,
                surface: d = "image_tile"
            } = t;
            return p(e, {
                conversationId: n,
                messageId: a.chatGptMessageId,
                libraryFileId: i,
                status: r,
                surface: d,
                folder: l,
                created: o,
                onView: s,
                updateFavorite: async (t, a, n) => await (0, c.e)(e, {
                    libraryFileId: i,
                    favoriteId: r.favoriteId,
                    isFavorited: t,
                    surface: d,
                    entityKind: "imagegen",
                    source: "conversation",
                    showToast: a,
                    onView: n
                }) ? i : null
            })
        }
        async function p(e, t) {
            let {
                conversationId: a,
                messageId: n,
                libraryFileId: i,
                status: u,
                surface: f,
                folder: _,
                created: p,
                onView: h,
                updateFavorite: b
            } = t, v = () => e.get(r.f) === e.value.accountId && e.get(r.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(o.a),
                T = t => {
                    v() && (g(e, a, n, "toast_action", f), h?.((0, d.b)(t, "banner")))
                },
                I = i,
                E = null != _ || !u.isFavorited,
                A = null == _ || !u.isFavorited,
                C = E ? "save" : "unsave",
                x = performance.now();
            if (A) {
                g(e, a, n, C, f);
                let t = null != (I = await b(E, null == _, null == h ? void 0 : () => T("/library?tab=favorites")));
                if (!v() || (m(e, {
                        eventType: t ? E ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : E ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: C,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - x : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != _) {
                    try {
                        if (null == I) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, I, _.id)
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
                    (0, c.a)(e), e.get(l.f).success(p ? y.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created",
                        description: "Success toast after creating a Library folder and moving the saved image into it. folderName is the user's folder name"
                    }, {
                        folderName: _.name
                    }) : y.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}",
                        description: "Success toast after moving the saved image into a Library folder. folderName is the user's folder name"
                    }, {
                        folderName: _.name
                    }), {
                        primaryAction: {
                            label: y.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View",
                                description: "Toast action that opens the Library folder which now contains the saved image"
                            }),
                            onClick: () => T(`/library/d/${encodeURIComponent(_.id)}`)
                        }
                    })
                }
                A && E && m(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: C,
                    clickToSuccessToastMs: performance.now() - x
                })
            }
        }

        function g(e, t, a, i, r) {
            let l, o, s = "client-created-root" === a ? void 0 : a ?? void 0;
            "save" === i ? (l = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVE_BUTTON, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_CLICKED") : "unsave" === i ? (l = n.d.CHATGPT_ENTITY_AFFORDANCE_UNSAVE_BUTTON, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_CLICKED") : (l = n.d.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_TOAST_ACTION, o = "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_TOAST_ACTION_CLICKED");
            let c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
            "toast_action" === i ? c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SAVE_TOAST : "image_lightbox" === r && (c = n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, f.e)(e, {
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
                action: "toast_action" === i ? void 0 : i,
                surface: "toast_action" === i ? "save_toast" : r
            })
        }

        function m(e, t) {
            (0, u.a)(e, i.eb, {
                ...t,
                entityKind: "image"
            })
        }
        a.d(t, {
            a: () => _,
            b: () => p
        })
    }),
    oQ79: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("lUoP"),
            l = a("iTtm"),
            o = a("Wf1j"),
            s = a("jqIZ"),
            c = a("Cslg"),
            d = a("ygO2"),
            u = a("HOLv"),
            f = a("jo5I"),
            _ = a("Fmx8"),
            p = a("Qed5"),
            g = a("VJXV"),
            m = a("mF5c"),
            h = a("ejvO"),
            b = a("Rl4D"),
            v = a("cjMA");

        function y(e) {
            let t, a, r, o, s = (0, i.c)(11),
                d = (0, l.z)(g.d),
                u = (0, l.z)(c.l),
                f = (0, l.z)(c.f),
                p = (0, l.z)(c.k);
            return d && "allowed" === u.status && null != f && null != p ? (s[0] !== f || s[1] !== p ? (t = {
                accountId: f,
                userId: p
            }, s[0] = f, s[1] = p, s[2] = t) : t = s[2], s[3] !== e.source ? (a = (0, h.a)(e.source), s[3] = e.source, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (r = (0, n.jsx)(T, {
                ...e
            }, a), s[5] = e, s[6] = a, s[7] = r) : r = s[7], s[8] !== t || s[9] !== r ? (o = (0, n.jsx)(l.b, {
                scope: _.c,
                value: t,
                children: r
            }), s[8] = t, s[9] = r, s[10] = o) : o = s[10], o) : null
        }

        function T(e) {
            let t, a, c, g, y = (0, i.c)(48),
                {
                    source: T,
                    sources: I,
                    conversationId: E,
                    messageId: A,
                    surface: C,
                    presentation: x
                } = e,
                w = (0, l.y)(_.c),
                N = (0, s.Y)(),
                R = (0, o.a)();
            y[0] !== T ? (t = (0, h.a)(T), y[0] = T, y[1] = t) : t = y[1];
            let O = t,
                {
                    data: S,
                    isError: j
                } = (0, l.x)(h.d, I),
                P = (0, l.x)(h.b, O),
                k = S?.[O];
            y[2] !== E || y[3] !== j || y[4] !== O || y[5] !== A || y[6] !== N || y[7] !== w || y[8] !== T || y[9] !== I || y[10] !== k || y[11] !== C ? (a = async (e, t) => {
                null == k || j || w.get(h.b, O) || (w.set(h.b, O, !0), await (0, m.b)(w, {
                    conversationId: E,
                    messageId: A,
                    libraryFileId: k.library_file_id,
                    status: {
                        favoriteId: k.favorite_id ?? null,
                        isFavorited: null != k.favorite_id
                    },
                    surface: C,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        N(e)
                    },
                    updateFavorite: (e, t, a) => (0, h.e)(w, {
                        source: T,
                        previous: k,
                        save: e,
                        surface: C,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await w.query.invalidate(h.d, I)
                }).finally(() => {
                    w.set(h.b, O, !1)
                }))
            }, y[2] = E, y[3] = j, y[4] = O, y[5] = A, y[6] = N, y[7] = w, y[8] = T, y[9] = I, y[10] = k, y[11] = C, y[12] = a) : a = y[12];
            let F = a;
            if (j) return null;
            if ("menuItem" === x) {
                let e, t, a = k?.favorite_id != null,
                    i = P || null == k;
                return y[13] !== F ? (e = () => void F(), y[13] = F, y[14] = e) : e = y[14], y[15] !== a || y[16] !== i || y[17] !== e ? (t = (0, n.jsx)(p.a, {
                    isFavorited: a,
                    disabled: i,
                    onSelect: e
                }), y[15] = a, y[16] = i, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === x) {
                let e, t, a, i, l, o = k?.favorite_id != null;
                y[19] !== R ? (e = R.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), y[19] = R, y[20] = e) : e = y[20];
                let s = e;
                if (null == k) {
                    let e;
                    y[21] !== R ? (e = R.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status",
                        description: "Accessible status for a bookmark while checking whether the item is already saved"
                    }), y[21] = R, y[22] = e) : e = y[22], s = e
                } else if (o) {
                    let e;
                    y[23] !== R ? (e = R.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), y[23] = R, y[24] = e) : e = y[24], s = e
                }
                let c = P || null == k || void 0,
                    f = P || null == k;
                y[25] !== F ? (t = e => {
                    e.stopPropagation(), F()
                }, y[25] = F, y[26] = t) : t = y[26];
                let _ = o ? b.a : v.a;
                return y[27] !== _ ? (a = (0, n.jsx)(u.a, {
                    asset: _
                }), y[27] = _, y[28] = a) : a = y[28], y[29] !== o || y[30] !== s || y[31] !== c || y[32] !== f || y[33] !== t || y[34] !== a ? (i = (0, n.jsx)(d.a, {
                    "aria-label": s,
                    "aria-pressed": o,
                    "aria-busy": c,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), y[29] = o, y[30] = s, y[31] = c, y[32] = f, y[33] = t, y[34] = a, y[35] = i) : i = y[35], y[36] !== s || y[37] !== i ? (l = (0, n.jsx)(r.a, {
                    content: s,
                    children: i
                }), y[36] = s, y[37] = i, y[38] = l) : l = y[38], l
            }
            let L = k?.favorite_id != null,
                M = null == k,
                G = k?.directory_id ?? null;
            return y[39] !== F ? (c = () => void F(), y[39] = F, y[40] = c) : c = y[40], y[41] !== P || y[42] !== L || y[43] !== M || y[44] !== G || y[45] !== c || y[46] !== F ? (g = (0, n.jsx)(f.a, {
                isSaved: L,
                isBusy: P,
                isCheckingStatus: M,
                selectedFolderId: G,
                visibility: "hover",
                onToggleFavorite: c,
                onSelectFolder: F
            }), y[41] = P, y[42] = L, y[43] = M, y[44] = G, y[45] = c, y[46] = F, y[47] = g) : g = y[47], g
        }
        a.d(t, {
            SearchImageFavorite: () => y
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("XlOJ"),
            i = a("r9HQ"),
            r = a("CpsU"),
            l = a.n(r),
            o = a("iTtm"),
            s = a("Cslg"),
            c = a("SGsN"),
            d = a("svjy"),
            u = a("Fmx8"),
            f = a("VJXV"),
            _ = a("yGJW");
        let p = new WeakMap;

        function g(e) {
            let t = e.searchResult;
            return t?.contentSrc == null || t.isProxied || !/^https?:/i.test(t.contentSrc) ? null : {
                content_url: t.contentSrc,
                original_content_url: t.originalSrc
            }
        }
        let m = (0, o.v)(u.c, e => !1);

        function h(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let b = (0, o.q)(u.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, r = [...new Map(e.map(e => [h(e), e])).values()], o = a(u.m);
            return {
                queryKey: ["library-image-favorites-status", n.value.accountId, n.value.userId, r.map(h).sort()],
                enabled: r.length > 0 && a(f.d),
                staleTime: 3e4,
                retry: 1,
                refetchOnMount: !0,
                queryFn: async e => {
                    let {
                        signal: t
                    } = e;
                    if (1 === r.length) {
                        var a;
                        let e = JSON.stringify([n.value.accountId, n.value.userId]),
                            l = p.get(n.queryClient);
                        null == l && (l = new Map, p.set(n.queryClient, l));
                        let s = l.get(e);
                        null == s && (a = o, s = (0, i.a)({
                            scheduler: (0, i.b)({
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
                                let i = e.get(h(a));
                                if (null == i) throw Error("Incomplete image favorite status response.");
                                return i
                            }
                        }), l.set(e, s));
                        let c = await s.fetch({
                            source: r[0],
                            signal: t
                        });
                        return {
                            [h(r[0])]: c
                        }
                    }
                    return Object.fromEntries((await Promise.all(l()(r, 50).map(async e => {
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
        async function v(e, t) {
            let a, {
                    source: i,
                    previous: r,
                    save: l,
                    surface: o,
                    showToast: p,
                    onView: g
                } = t,
                m = () => e.get(s.f) === e.value.accountId && e.get(s.k) === e.value.userId,
                b = h(i);
            if (!e.get(f.d)) return null;
            if (l) {
                let t = {
                    operationId: crypto.randomUUID(),
                    action: "save",
                    entityKind: "web_image",
                    surface: o,
                    source: "conversation"
                };
                (0, _.a)(e, n.a, {
                    ...t,
                    eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                });
                try {
                    if (a = await e.get(u.m).safePost("/files/library/image-favorites", {
                            requestBody: i
                        }), null == a.favorite_id || null == a.library_file_id) throw Error("Image favorite response did not include its Library file.");
                    m() && ((0, _.a)(e, n.a, {
                        ...t,
                        result: "success",
                        eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                    }), p && (0, f.f)(e, {
                        isFavorited: !0,
                        onView: g
                    }))
                } catch {
                    return m() && ((0, _.a)(e, n.a, {
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
                if (null == r.library_file_id || null == r.favorite_id || !await (0, f.e)(e, {
                        libraryFileId: r.library_file_id,
                        favoriteId: r.favorite_id,
                        isFavorited: !1,
                        surface: o,
                        entityKind: "web_image",
                        source: "conversation",
                        showToast: p
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
            let y = a.library_file_id ?? r.library_file_id;
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
        a.d(t, {
            a: () => h,
            c: () => g,
            e: () => v
        }, {
            b: m,
            d: b
        })
    }),
    aPUc: (function(e, t, a) {
        a.d(t, {
            a: () => E
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("ozm1"),
            l = a("FS1B"),
            o = a("lUoP"),
            s = a("iTtm"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("Cslg"),
            f = a("ygO2"),
            _ = a("HOLv"),
            p = a("SGsN"),
            g = a("yGJW"),
            m = a("OWtl"),
            h = a("FGv0"),
            b = a("hZax"),
            v = a("qsTb"),
            y = a("Kwur");

        function T(e, t, a) {
            let n;
            if ("u" < typeof IntersectionObserver) return () => {};
            let i = e.ownerDocument,
                r = e.closest("[data-web-image-tile], [class~='group/search-image']") ?? e,
                l = !1,
                o = !1,
                s = () => {
                    let a = i.defaultView?.getComputedStyle(e);
                    for (let t = e.parentElement; null != t; t = t.parentElement)
                        if (0 === Number(i.defaultView?.getComputedStyle(t).opacity)) return !1;
                    return l && "visible" === i.visibilityState && e.isConnected && e.getClientRects().length > 0 && null == e.closest("[inert], [aria-hidden='true']") && a?.visibility === "visible" && Number(a.opacity) > 0 && t()
                },
                c = () => {
                    if (!o) {
                        if (!s()) {
                            clearTimeout(n), n = void 0;
                            return
                        }
                        void 0 === n && (n = setTimeout(() => {
                            n = void 0, s() && (o = !0, a(), _())
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
            u.observe(r, {
                attributes: !0,
                subtree: r !== e,
                attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden"]
            });
            let f = ["load", "pointerover", "pointerout", "focusin", "focusout", "transitionend"];
            for (let e of f) r.addEventListener(e, c, !0);

            function _() {
                for (let e of (o = !0, clearTimeout(n), d.disconnect(), u.disconnect(), f)) r.removeEventListener(e, c, !0);
                i.removeEventListener("visibilitychange", c)
            }
            return i.addEventListener("visibilitychange", c), _
        }
        var I = a("lh1o");

        function E(e) {
            let t, a, E, N, R, O, S, j, P, k, F, L, M, G, H, B, W, D, U, V, q = (0, i.c)(95),
                {
                    source: K,
                    conversationId: z,
                    messageId: Y,
                    imageIndex: Q,
                    contentReferenceStartIndex: $,
                    surface: X,
                    lightboxPresentation: Z,
                    imageRef: J,
                    imageReady: ee
                } = e,
                et = void 0 === Z ? "classic" : Z,
                ea = void 0 === ee || ee,
                en = (0, s.y)(m.a),
                ei = (0, s.z)(u.f),
                er = (0, s.z)(u.k),
                el = (0, d.a)();
            q[0] !== ei || q[1] !== z || q[2] !== Y || q[3] !== K.content_url || q[4] !== er ? (t = null != ei && null != er && null != z && null != Y && /^https?:\/\//i.test(K.content_url), q[0] = ei, q[1] = z, q[2] = Y, q[3] = K.content_url, q[4] = er, q[5] = t) : t = q[5];
            let eo = t,
                es = !eo;
            q[6] !== es ? (a = {
                disableExposureLog: es
            }, q[6] = es, q[7] = a) : a = q[7];
            let ec = (0, b.m)("274234392", a);
            q[8] !== ec ? (E = ec.get("placement", "off"), q[8] = ec, q[9] = E) : E = q[9];
            let ed = E,
                eu = "fullscreen" === ed || "inline_and_fullscreen" === ed ? ed : "off",
                ef = eo && ("inline_and_fullscreen" === eu || "fullscreen" === eu && "image_lightbox" === X),
                e_ = (0, c.useRef)(null),
                ep = (0, c.useRef)(null);
            q[10] !== $ || q[11] !== z || q[12] !== Q || q[13] !== Y || q[14] !== K.content_url ? (N = [z, Y, $, Q, K.content_url], q[10] = $, q[11] = z, q[12] = Q, q[13] = Y, q[14] = K.content_url, q[15] = N) : N = q[15];
            let eg = N.join(":"),
                em = (0, c.useRef)(null);
            q[16] === Symbol.for("react.memo_cache_sentinel") ? (R = new Set, q[16] = R) : R = q[16];
            let eh = (0, c.useRef)(R),
                [eb, ev] = (0, c.useState)(!1),
                ey = "image_tile" === X ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            q[17] !== Q ? (O = null == Q || Q < 0 ? void 0 : (0, r.d)(Q), q[17] = Q, q[18] = O) : O = q[18], q[19] !== $ ? (S = null == $ ? void 0 : (0, r.b)($), q[19] = $, q[20] = S) : S = q[20], q[21] !== eu || q[22] !== X || q[23] !== O || q[24] !== S ? (j = {
                surface: X,
                placement: eu,
                imageIndex: O,
                contentReferenceStartIndex: S
            }, q[21] = eu, q[22] = X, q[23] = O, q[24] = S, q[25] = j) : j = q[25], q[26] !== z || q[27] !== Y || q[28] !== ey || q[29] !== j ? (P = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: ey,
                conversationId: z,
                messageId: Y,
                imageMetadata: j
            }, q[26] = z, q[27] = Y, q[28] = ey, q[29] = j, q[30] = P) : P = q[30];
            let eT = P;
            q[31] !== ei || q[32] !== eT || q[33] !== en || q[34] !== er ? (k = (e, t, a) => {
                en.get(u.f) === ei && en.get(u.k) === er && (0, g.a)(en, l.h, {
                    ...eT,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, q[31] = ei, q[32] = eT, q[33] = en, q[34] = er, q[35] = k) : k = q[35];
            let eI = k,
                eE = (0, c.useEffectEvent)(eI);
            if (q[36] === Symbol.for("react.memo_cache_sentinel") ? (F = () => () => {
                    e_.current?.abort()
                }, L = [], q[36] = F, q[37] = L) : (F = q[36], L = q[37]), (0, c.useEffect)(F, L), q[38] !== ei || q[39] !== $ || q[40] !== z || q[41] !== eE || q[42] !== eo || q[43] !== Q || q[44] !== ea || q[45] !== J || q[46] !== Y || q[47] !== eu || q[48] !== ef || q[49] !== K.content_url || q[50] !== X || q[51] !== er ? (M = () => {
                    let e = em.current;
                    if (!eo || null == e) return;
                    let t = J?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [ei, er, K.content_url, z, Y, $, Q, X, eu].join(":"),
                        n = crypto.randomUUID(),
                        i = null == t || eh.current.has(a) ? void 0 : T(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return ea && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            eh.current.add(a), eE("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        r = !ef || eh.current.has(`${a}:control`) ? void 0 : T(e, w, () => {
                            eh.current.add(`${a}:control`), eE("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        i?.(), r?.()
                    }
                }, q[38] = ei, q[39] = $, q[40] = z, q[41] = eE, q[42] = eo, q[43] = Q, q[44] = ea, q[45] = J, q[46] = Y, q[47] = eu, q[48] = ef, q[49] = K.content_url, q[50] = X, q[51] = er, q[52] = M) : M = q[52], q[53] !== ei || q[54] !== $ || q[55] !== z || q[56] !== eo || q[57] !== Q || q[58] !== ea || q[59] !== J || q[60] !== Y || q[61] !== eu || q[62] !== ef || q[63] !== K.content_url || q[64] !== X || q[65] !== er ? (G = [ei, er, K.content_url, X, eu, ef, eo, J, z, Y, Q, $, ea], q[53] = ei, q[54] = $, q[55] = z, q[56] = eo, q[57] = Q, q[58] = ea, q[59] = J, q[60] = Y, q[61] = eu, q[62] = ef, q[63] = K.content_url, q[64] = X, q[65] = er, q[66] = G) : G = q[66], (0, c.useEffect)(M, G), !eo) return null;
            q[67] !== el ? (H = el.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image",
                description: "Short tooltip and accessible label for a web-search image Share button on an image tile or fullscreen viewer. Copies a public ChatGPT link containing only the selected image."
            }), q[67] = el, q[68] = H) : H = q[68];
            let eA = H;
            q[69] !== ei || q[70] !== z || q[71] !== eI || q[72] !== eg || q[73] !== el || q[74] !== Y || q[75] !== en || q[76] !== K.content_url || q[77] !== er ? (B = e => {
                if (e.stopPropagation(), null != e_.current || null == ei || null == er || null == z || null == Y) return;
                let t = new AbortController;
                e_.current = t, ev(!0);
                let a = () => {
                        if (t.signal.throwIfAborted(), en.get(u.f) !== ei || en.get(u.k) !== er) throw new DOMException("The active account changed", "AbortError")
                    },
                    n = crypto.randomUUID(),
                    i = crypto.randomUUID(),
                    r = ep.current?.accountId === ei && ep.current?.userId === er && ep.current.imageKey === eg ? ep.current : null,
                    l = r?.shareId,
                    o = () => ({
                        attemptId: i,
                        shareId: l,
                        usedExistingLink: null != r
                    }),
                    s = performance.now();
                eI("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", n, o()), eI("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", n, o());
                let c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    d = null == r ? (async () => {
                        a();
                        let e = await y.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: z,
                                    message_id: Y,
                                    content_url: K.content_url
                                }]
                            },
                            signal: t.signal,
                            assertRequestCurrent: a
                        });
                        a(), l = e.post.id;
                        let n = e.post.web_image_attachments;
                        if (1 !== e.post.attachments.length || n?.length !== 1 || n[0]?.id !== e.post.attachments[0]?.id) throw Error("Shared image is unavailable");
                        let i = function(e) {
                            if (!/^i_[A-Za-z0-9_-]+$/.test(e.id)) throw Error("Invalid image share identity");
                            let t = `/s/${e.id}`,
                                a = new URL(e.permalink ?? t, "https://chatgpt.com");
                            if ("https://chatgpt.com" !== a.origin || a.pathname !== t || a.username || a.password || a.search || a.hash) throw Error("Invalid image share identity");
                            return a.href
                        }(e.post);
                        return ep.current = {
                            accountId: ei,
                            userId: er,
                            imageKey: eg,
                            shareId: l,
                            link: i
                        }, i
                    })().catch(e => {
                        throw c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(r.link).then(e => (a(), e));
                d.catch(x);
                let f = (0, h.a)(d, t.signal);
                f.catch(C), (async () => {
                    try {
                        await d, await f.then(A), a(), eI("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", n, {
                            ...o(),
                            durationMs: performance.now() - s
                        }), en.get(p.f).success(el.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied",
                            description: "Success toast after a public link to one web-search image is copied to the clipboard."
                        }))
                    } catch (a) {
                        let e = en.get(u.f) !== ei || en.get(u.k) !== er || t.signal.aborted || a instanceof DOMException && "AbortError" === a.name;
                        eI(e ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", n, {
                            ...o(),
                            failureReason: e ? void 0 : c,
                            durationMs: performance.now() - s
                        }), e || en.get(p.f).danger(el.formatMessage({
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
                    t.signal.aborted || (e_.current = null, ev(!1))
                })
            }, q[69] = ei, q[70] = z, q[71] = eI, q[72] = eg, q[73] = el, q[74] = Y, q[75] = en, q[76] = K.content_url, q[77] = er, q[78] = B) : B = q[78], q[79] !== eb ? (W = eb ? null : (0, n.jsx)(_.a, {
                asset: I.a
            }), q[79] = eb, q[80] = W) : W = q[80], q[81] !== eb || q[82] !== eA || q[83] !== B || q[84] !== W ? (D = {
                type: "button",
                "aria-label": eA,
                "aria-busy": eb,
                loading: eb,
                onClick: B,
                children: W
            }, q[81] = eb, q[82] = eA, q[83] = B, q[84] = W, q[85] = D) : D = q[85];
            let eC = D,
                ex = "image_tile" === X ? "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "inline-flex";
            return q[86] !== eC || q[87] !== eA || q[88] !== et || q[89] !== ef || q[90] !== X ? (U = ef ? (0, n.jsx)(o.a, {
                content: eA,
                children: "image_lightbox" === X && "overlay" === et ? (0, n.jsx)(v.b, {
                    ...eC,
                    uniform: !0
                }) : (0, n.jsx)(f.a, {
                    ...eC,
                    size: "inputIcon",
                    color: "mediaOverlay",
                    radius: "full"
                })
            }) : null, q[86] = eC, q[87] = eA, q[88] = et, q[89] = ef, q[90] = X, q[91] = U) : U = q[91], q[92] !== ex || q[93] !== U ? (V = (0, n.jsx)("span", {
                ref: em,
                className: ex,
                children: U
            }), q[92] = ex, q[93] = U, q[94] = V) : V = q[94], V
        }

        function A(e) {
            if (!e) throw Error("Clipboard write failed")
        }

        function C() {}

        function x() {}

        function w() {
            return !0
        }
    }),
    UIeB: (function(e, t, a) {
        var n = a("EbvC"),
            i = a("iPs9"),
            r = a("Tv1c"),
            l = a.n(r);

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

        function s(e, t, a) {
            return t.has(o(e)) ? c(e, a) : e
        }

        function c(e, t) {
            let a = e.trim();
            return l()(a, {
                protocols: ["http", "https"]
            }) && "www.nice.org.uk" !== (0, i.b)((0, i.c)(a, "https://").host).hostname.toLowerCase() ? (0, i.d)(a, null != t && Object.keys(t).length > 0 ? t : {
                utm_source: "chatgpt.com"
            }) : e
        }
        a.d(t, {
            a: () => c,
            b: () => s,
            c: () => o
        })
    }),
    GigQ: (function(e, t, a) {
        function n(e, t) {
            let a, n = e.attachments[0];
            if (n?.kind === "media_generation") {
                if (1 !== e.attachments.length || n.output_blocked || null == n.asset_pointer || null == n.messages) return null;
                let t = n.asset_pointer.split("?")[0],
                    i = n.messages;
                if (!i.some((e, a) => "assistant" === e.author.role && "string" == typeof e.recipient && i.slice(a + 1).some(a => "tool" === a.author.role && a.author.name === e.recipient && "multimodal_text" === a.content.content_type && a.content.parts.some(e => "string" != typeof e && "content_type" in e && "image_asset_pointer" === e.content_type && e.asset_pointer.split("?")[0] === t)))) return null;
                a = i
            } else {
                if (!(e.attachments.length > 0 && e.attachments.every(e => ("message_slice" === e.kind || "deep_research" === e.kind) && e.messages.length > 0))) return null;
                a = e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages : [])
            }
            let i = {
                    id: "y-root",
                    message: null,
                    parent: null,
                    children: []
                },
                r = [i],
                l = new Set([i.id]);
            for (let e of a) {
                if (!e.id || l.has(e.id)) return null;
                l.add(e.id), i.children = [e.id];
                let t = {
                    id: e.id,
                    message: e,
                    parent: i.id,
                    children: []
                };
                r.push(t), i = t
            }
            return {
                conversation_id: t,
                current_node: i.id,
                mapping: Object.fromEntries(r.map(e => [e.id, e])),
                linear_conversation: r,
                title: null,
                moderation_results: [],
                moderation_state: {},
                has_user_editable_context: !1,
                is_public: !1,
                is_indexable: !1,
                continue_conversation_url: ""
            }
        }
        a.d(t, {
            a: () => n
        })
    }),
    gsAl: (function(e, t, a) {
        a.d(t, {
            a: () => C,
            b: () => b,
            c: () => w,
            d: () => x,
            e: () => y,
            f: () => I,
            g: () => T,
            h: () => E,
            i: () => v,
            j: () => A
        });
        var n = a("mQnY"),
            i = a("Fjze"),
            r = a("iTtm"),
            l = a("jqIZ"),
            o = a("yGJW"),
            s = a("tSEg"),
            c = a("yMDx"),
            d = a("MrGp"),
            u = a("rfhJ"),
            f = a("ASxG"),
            _ = a("w5lF"),
            p = a("GDNt"),
            g = a("Kwur");
        async function m(e, t) {
            try {
                let {
                    post: a
                } = await g.Request.safeGet("/share/post/resolve/{post_id}", {
                    parameters: {
                        path: {
                            post_id: encodeURIComponent(e)
                        }
                    },
                    signal: t
                });
                return {
                    status: "ready",
                    post: a
                }
            } catch (a) {
                if (t?.throwIfAborted(), !(a instanceof p.a)) throw a;
                let e = a.diagnosticError;
                if (e instanceof _.c) {
                    let t = f.object({
                        message: f.string().optional(),
                        reason: f.string().optional(),
                        code: f.string().optional()
                    }).safeParse(e.detail).data;
                    if ("no_permission" === e.jsonError || 403 === a.status && t?.message === "no_permission") return {
                        status: "unavailable",
                        reason: "workspace"
                    };
                    if (t?.reason === "deleted" || t?.code === "shared_post_deleted") return {
                        status: "unavailable",
                        reason: "deleted"
                    }
                }
                if (a.status >= 500) throw a;
                return {
                    status: "unavailable",
                    reason: "not_found"
                }
            }
        }
        var h = a("GigQ");

        function b(e) {
            return e.attachments[0]?.kind !== "prompt_share"
        }
        let v = (0, r.q)(s.a, (e, t) => {
                let {
                    scope: a
                } = t, n = (0, l.I)("/s/:postId", a.value.pathname)?.params.postId;
                return {
                    enabled: null != n && !n.startsWith("cx_") && null != e && !e.isLoading,
                    queryKey: ["chatgpt-shared-post", n, e?.userId, e?.accountId],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return null == n ? Promise.resolve(null) : m(n, t)
                    },
                    gcTime: 0,
                    staleTime: 0,
                    retry: !1,
                    refetchInterval: e => {
                        let t = e.state.data;
                        return !!(t?.status === "ready" && t.post.attachments.some(e => "message_slice" === e.kind && e.messages.some(e => Object.values((0, c.c)(e.metadata)?.widgets ?? {}).some(e => "string" == typeof e?.poll_id && "published" === e.lifecycle)))) && 5e3
                    }
                }
            }),
            y = (0, r.d)(s.a, (e, t) => {
                let {
                    get: a,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, l.I)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: i,
                    isError: r
                } = a(v, e);
                return i?.status !== "ready" || r ? null : i.post
            }),
            T = (0, r.d)(s.a, (e, t) => {
                let {
                    auth: a,
                    conversationId: n
                } = e, {
                    get: i
                } = t;
                if (null == a || a.isLoading || null !== a.authMethod) return !1;
                let r = i(y, a),
                    l = i(d.Z, n);
                return null != r && l?.kind === "post" && l.forkFromSharedPost && l.post.id === r.id
            }),
            I = (0, r.v)(s.a, e => !1, {
                onMount: (e, t) => {
                    let a = null;
                    return t.watch(n => {
                        let {
                            get: i
                        } = n, {
                            auth: r,
                            conversationId: l
                        } = t.key, o = i(y, r);
                        if (null == o) {
                            let {
                                data: n,
                                isError: o
                            } = i(v, r);
                            null != a && (o || n?.status === "unavailable") && ((0, d.gb)(t, l, a), a = null), e(!1);
                            return
                        }
                        a = o.id, e(null != C(t, o, l))
                    })
                }
            }),
            E = (0, r.u)(s.a, []),
            A = (0, r.u)(s.a, () => null);

        function C(e, t, a) {
            let n = (0, h.a)(t, a);
            return null == n ? null : ((0, d.nb)(e, {
                conversation: n,
                conversationId: a,
                post: t
            }), a)
        }

        function x(e, t, a, n, i, r) {
            let l = t.attachments.find(e => "media_generation" === e.kind && "image_gen" === e.generation_type && (e.id === a.id || null != e.asset_pointer && e.asset_pointer.split("?")[0] === a.src?.split("?")[0]));
            l?.kind === "media_generation" && (0, u.b)(e, {
                image: {
                    ...a,
                    src: l.asset_pointer ?? null,
                    chatGptMessageId: l.message_id ?? a.chatGptMessageId
                },
                conversationId: l.conversation_id,
                entryPoint: n,
                downloadScope: i,
                requestedImageCount: r
            })
        }

        function w(e, t, a) {
            let r = t.attachments[0]?.kind;
            (0, o.a)(e, n.a, {
                postId: t.id,
                attachmentType: r,
                isAuthenticated: a
            }), (0, o.a)(e, i.b, {
                actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                postId: t.id,
                attachmentKind: r,
                legacyStatsigEventName: "chatgpt_share_post_download_clicked"
            })
        }
    }),
    Qed5: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("oyxz"),
            l = a("bqtn"),
            o = a("UxN3"),
            s = a("N92g"),
            c = a("Rl4D"),
            d = a("fnLQ"),
            u = a("cjMA");

        function f(e) {
            let t, a, f, _ = (0, i.c)(9),
                {
                    isFavorited: p,
                    disabled: g,
                    onSelect: m
                } = e;
            return _[0] !== p ? (t = (0, n.jsx)(o.b, {
                icon: {
                    assets: p ? {
                        16: s.a,
                        20: c.a
                    } : {
                        16: d.a,
                        20: u.a
                    }
                }
            }), _[0] = p, _[1] = t) : t = _[1], _[2] !== p ? (a = p ? (0, n.jsx)(r.a, {
                id: "library.favorites.remove",
                defaultMessage: "Remove from Favorites",
                description: "Action in a Library item menu or preview to remove the item from Favorites"
            }) : (0, n.jsx)(r.a, {
                id: "library.favorites.add",
                defaultMessage: "Add to Favorites",
                description: "Action to save a Library file as a favorite"
            }), _[2] = p, _[3] = a) : a = _[3], _[4] !== g || _[5] !== m || _[6] !== t || _[7] !== a ? (f = (0, n.jsx)(l.c.Item, {
                disabled: g,
                leftIcon: t,
                onSelect: m,
                children: a
            }), _[4] = g, _[5] = m, _[6] = t, _[7] = a, _[8] = f) : f = _[8], f
        }
        a.d(t, {
            a: () => f
        })
    }),
    iwt4: (function(e, t, a) {
        async function n() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(464070), a.e(820515)]).then(a.bind(a, "QxL2"))).InlineFlashcards
        }
        async function i() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(297026)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
        }
        async function r() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(476622)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
        }
        async function l() {
            return (await a.e(590108).then(a.bind(a, "PyZ7"))).observeFlashcardSourceCards
        }
        async function o() {
            return (await a.e(973648).then(a.bind(a, "HVw5"))).FlashcardsComposerSuggestions
        }
        a.d(t, {
            a: () => l,
            b: () => o,
            c: () => r,
            d: () => i,
            e: () => n
        })
    }),
    LOXd: (function(e, t, a) {
        var n = a("ASxG"),
            i = a("iKA6"),
            r = a("zSQm");
        let l = n.string().trim().nullish().transform(e => e || void 0),
            o = n.object({
                journal_name: l,
                source_label: l,
                authors_display: l,
                publication_year: l,
                source_url: l,
                journal_homepage_url: l,
                source_icon_url: l,
                doi: l
            }),
            s = n.object({
                id: n.string().trim().min(1),
                title: l,
                name: l,
                snippet: l,
                cloud_doc_url: l,
                extra: n.object({
                    cloud_doc_url: l
                }).nullish(),
                medical_file_reference: o.nullish(),
                drug_file_reference: n.object({
                    title: l,
                    effective_time: l
                }).nullish()
            }),
            c = n.object({
                url: n.string().trim().min(1),
                title: l,
                source_name: l,
                authors: n.array(n.string().catch("")).nullish(),
                tags: n.array(n.string().trim().catch("")).nullish().catch(void 0),
                attribution: l,
                pub_date: n.number().min(-864e10).max(864e10).nullish().catch(void 0),
                snippet: l
            }),
            d = n.object({
                items: n.array(n.object({
                    supporting_websites: n.array(n.unknown()).nullish()
                }).loose())
            });

        function u(e, t) {
            let a = [],
                n = new Map,
                i = new Map,
                r = new Map;
            for (let l of t ?? []) {
                let t = [];
                for (let {
                        webMetadata: r,
                        ...o
                    }
                    of _(e, l)) {
                    let e = n.get(o.sourceKey);
                    if (null == e) e = {
                        ...o,
                        number: a.length + 1
                    }, a.push(e), n.set(e.sourceKey, e), null != r && i.set(e.sourceKey, r);
                    else if (null != r) {
                        let t = i.get(e.sourceKey);
                        null != t && (t.title = t.title ?? r.title, t.sourceName = t.sourceName ?? r.sourceName, t.attribution = t.attribution ?? r.attribution, e.title = t.title ?? e.title, e.sourceName = t.sourceName ?? t.attribution ?? m(e.url), e.displayLabel = t.attribution ?? e.sourceName ?? e.title, e.authors = e.authors ?? o.authors, e.dateDisplay = e.dateDisplay ?? o.dateDisplay, e.publicationDateMs = e.publicationDateMs ?? o.publicationDateMs, e.snippet = e.snippet ?? o.snippet, o.tags?.length && (e.tags = [...new Set([...e.tags ?? [], ...o.tags])]))
                    }
                    t.includes(e) || t.push(e)
                }
                r.set(l, t)
            }
            return {
                sources: a,
                sourcesByReference: r
            }
        }

        function f(e, t, a, n, i) {
            let r = t?.[a];
            if (null == r || "hidden" === r.style || 0 === _(e, r).length) return;
            let l = e => null == n ? i : n[e],
                o = l(a),
                s = t?.[a - 1];
            if (null != s && "hidden" !== s.style && null != o && l(a - 1) === o && _(e, s).length > 0 && b(s, r)) return {
                isLeading: !1,
                sources: []
            };
            let c = u(e, t),
                d = new Set,
                f = r;
            for (let e = a;; e += 1) {
                for (let e of c.sourcesByReference.get(f) ?? []) d.add(e);
                let a = t?.[e + 1];
                if (null == a || "hidden" === a.style || null == o || l(e + 1) !== o || !c.sourcesByReference.get(a)?.length || !b(f, a)) break;
                f = a
            }
            return {
                isLeading: !0,
                sources: [...d]
            }
        }

        function _(e, t) {
            if ("file" === t.type) {
                if (i.a.safeParse(t).success) return [];
                let a = s.safeParse(t);
                if (!a.success) return [];
                let n = a.data,
                    r = n.medical_file_reference,
                    l = n.drug_file_reference;
                if (null == r && null == l) return [];
                let o = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? r?.source_url ?? r?.journal_homepage_url,
                    c = g(o),
                    d = null != l ? "U.S. National Library of Medicine: DailyMed" : r?.journal_name ?? r?.source_label,
                    u = null != l ? "DailyMed" : r?.source_label ?? d,
                    f = e.formatMessage({
                        id: "clinicalCitation.sourceFallback",
                        defaultMessage: "Source",
                        description: "Fallback label for a clinical citation with no title, publisher, or URL"
                    }),
                    _ = n.title ?? n.name ?? l?.title ?? u ?? d ?? m(o) ?? f,
                    p = d ?? m(o) ?? _;
                return [{
                    sourceKey: `file:${n.id.toLowerCase()}`,
                    title: _,
                    displayLabel: u ?? p,
                    sourceName: p,
                    dateDisplay: null != l ? function(e, t) {
                        let a = t?.match(/^(\d{4})-?(\d{2})-?(\d{2})$/);
                        if (null == a) return t;
                        let n = Number(a[1]),
                            i = Number(a[2]),
                            r = Number(a[3]),
                            l = new Date(n, i - 1, r);
                        return l.getFullYear() === n && l.getMonth() === i - 1 && l.getDate() === r ? h(e, l) : t
                    }(e, l.effective_time) : r?.publication_year,
                    authors: r?.authors_display,
                    doi: r?.doi,
                    url: c,
                    iconUrl: g(r?.source_icon_url ?? r?.source_url ?? r?.journal_homepage_url ?? o),
                    snippet: n.snippet
                }]
            }
            if ("webpage" === t.type || "webpage_extended" === t.type) {
                let a = p(e, t);
                return null == a ? [] : [a]
            }
            if ("grouped_webpages" !== t.type || "hidden" === t.style || "loading" === t.status || "error" === t.status) return [];
            let a = d.safeParse(t);
            return a.success ? a.data.items.flatMap(t => [t, ...t.supporting_websites ?? []].flatMap(t => {
                let a = p(e, t);
                return null == a ? [] : [a]
            })) : []
        }

        function p(e, t) {
            let a = c.safeParse(t);
            if (!a.success) return;
            let n = a.data,
                i = g(n.url);
            if (null == i) return;
            let r = n.source_name ?? n.attribution ?? m(i);
            return {
                webMetadata: {
                    title: n.title,
                    sourceName: n.source_name,
                    attribution: n.attribution
                },
                sourceKey: `url:${i.toLowerCase()}`,
                title: n.title ?? i,
                displayLabel: n.attribution ?? r ?? n.title ?? i,
                sourceName: r,
                authors: function(e) {
                    let t = e?.map(e => e.trim()).filter(Boolean);
                    if (t?.length) return 1 === t.length ? t[0] : 2 === t.length ? `${t[0]} & ${t[1]}` : `${t[0]}, et al.`
                }(n.authors),
                publicationDateMs: null == n.pub_date ? void 0 : 1e3 * n.pub_date,
                dateDisplay: null == n.pub_date ? void 0 : h(e, new Date(1e3 * n.pub_date)),
                url: i,
                iconUrl: i,
                snippet: n.snippet,
                tags: null == n.tags ? void 0 : [...new Set(n.tags.filter(Boolean))]
            }
        }

        function g(e) {
            if (!(null == e || /^file:\/\//i.test(e))) {
                try {
                    if ("localhost" === new URL(e).hostname) return
                } catch {}
                return (0, r.a)(e)
            }
        }

        function m(e) {
            if (null != e) try {
                return new URL(e).hostname.replace("www.", "")
            } catch {
                return e
            }
        }

        function h(e, t) {
            return Number.isNaN(t.getTime()) ? void 0 : new Intl.DateTimeFormat(e.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }).format(t)
        }

        function b(e, t) {
            return "number" == typeof e.start_idx && "number" == typeof e.end_idx && "number" == typeof t.start_idx && "number" == typeof t.end_idx && t.start_idx - e.end_idx <= 1
        }
        a.d(t, {
            a: () => u,
            b: () => f
        })
    }),
    mQnY: (function(e, t, a) {
        a.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostDownloadClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostPageViewed"
            }
        })
    })
};