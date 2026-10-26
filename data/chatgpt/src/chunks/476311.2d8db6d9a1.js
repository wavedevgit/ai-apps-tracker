export const __rspack_esm_id = 476311;
export const __rspack_esm_ids = [476311];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Bbed"),
            l = a("VTN2"),
            o = a("TUMj"),
            s = a("qviq");
        let c = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(675928), a.e(652500), a.e(877652), a.e(785932), a.e(672007)]).then(a.bind(a, "Kcyf"))).SitesPreviewContentReference);

        function d(e) {
            let t, a, i, d, u = (0, r.c)(19),
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
                i = Symbol.for("react.early_return_sentinel");
                e: {
                    let e = l.a.safeParse(p);
                    if (!e.success) {
                        i = null;
                        break e
                    }({
                        data: t
                    } = e.data);
                    let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === g : g ?? !0)
                }
                u[3] = g, u[4] = p, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = i
            } else t = u[6], a = u[7], i = u[8];
            if (i !== Symbol.for("react.early_return_sentinel")) return i;
            let T = a && !0 !== t.render_immediately_during_streaming,
                y = t.display_name ?? t.title;
            return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== _ || u[13] !== b || u[14] !== T || u[15] !== y || u[16] !== v || u[17] !== h ? (d = (0, n.jsx)(s.a, {
                bind: f,
                onBindInteraction: _,
                content: t.content,
                readOnly: b,
                isStreaming: T,
                title: y,
                styleMode: t.style_mode,
                turnContext: v,
                withTopMargin: h
            }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = _, u[13] = b, u[14] = T, u[15] = y, u[16] = v, u[17] = h, u[18] = d) : d = u[18], d
        }
        a.d(t, {
            a: () => d
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            r = a("Bbed"),
            i = a("N55g");
        let l = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(652500), a.e(877652), a.e(743845), a.e(494725)]).then(a.bind(a, "UGmk"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(i.a, {})
        });
        a.d(t, {}, {
            a: l
        })
    }),
    zy7P: (function(e, t, a) {
        var n = a("nB3p"),
            r = a("iTtm"),
            i = a("OWtl"),
            l = a("rvFo"),
            o = a("Kwur");
        let s = (0, r.q)(i.a, e => {
            let {
                accountId: t,
                userId: a,
                url: r
            } = e, i = null == r ? null : (0, n.c)(r), s = i?.workspaceDocument == null ? null : `external-gdrive:file:${i.nativeFileId}`;
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

        function r(e) {
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
        a.d(t, {
            a: () => r
        })
    }),
    nD0d: (function(e, t, a) {
        a.d(t, {
            a: () => en
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
            _ = a("HAEQ"),
            p = a("WdQN"),
            g = a("OprO"),
            m = a("YAi8"),
            h = a("iTtm"),
            b = a("Wf1j"),
            v = a("oyxz"),
            T = a("ygO2"),
            y = a("q5qu"),
            I = a("OWtl"),
            A = a("MrGp"),
            E = a("TUMj"),
            C = a("ldQM");

        function x(e) {
            let t, a = (0, r.c)(3),
                {
                    contentReferenceIndex: i
                } = e,
                l = (0, E.d)(),
                o = l?.contentReferenceMessageIds?.[i] ?? l?.messageId;
            return a[0] !== o || a[1] !== l ? (t = null == l || null == o || l.shouldBlockExternalEgress ? null : (0, n.jsx)(w, {
                conversationId: l.conversationId,
                messageId: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function w(e) {
            let t, a, i, l, o = (0, r.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, h.y)(I.a),
                u = (0, b.a)(),
                f = (0, h.x)(C.b, s),
                _ = (0, h.x)(C.e, s);
            return (0, h.x)(A.Y, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || _ !== c ? null : (o[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== d ? (a = () => d.set(C.e, s, null), o[2] = s, o[3] = d, o[4] = a) : a = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions",
                description: "Button under the current ChatGPT assistant message after its questionnaire was dismissed; clicking reopens the questions"
            }), o[5] = i) : i = o[5], o[6] !== t || o[7] !== a ? (l = (0, n.jsx)(y.a, {
                children: (0, n.jsx)(T.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: i
                })
            }), o[6] = t, o[7] = a, o[8] = l) : l = o[8], l)
        }
        var N = a("YgzY"),
            O = a("j8Yf"),
            R = a("ASxG"),
            S = a("LtEv"),
            j = a("EUy6"),
            P = a("AyL4"),
            k = a("WAdu"),
            F = a("tSEg"),
            M = a("WFY2");
        let G = R.object({
            type: R.literal("client_defined_widget"),
            category: R.literal("beacon_card"),
            data: R.object({
                widget_type: R.literal("beacon_card"),
                display_mode: R.literal("block"),
                title: R.string().max(200).refine(e => e.trim().length > 0).nullish(),
                text: R.string().max(2e3).refine(e => e.trim().length > 0),
                button_label: R.string().max(80).refine(e => e.trim().length > 0),
                prompt: R.string().max(4e3).refine(e => e.trim().length > 0).nullish(),
                url: R.url({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(e => null != e.prompt != (null != e.url))
        });

        function L(e) {
            let t, a, i, l, s, c, d, u, f, _, p = (0, r.c)(33),
                {
                    contentReferenceIndex: g,
                    reference: m,
                    isStreaming: v,
                    readOnly: T
                } = e,
                y = (0, h.y)(F.a),
                I = (0, E.d)(),
                A = (0, b.a)(),
                C = (0, o.useContext)(k.a),
                [x, w] = (0, o.useState)(!1),
                N = (0, o.useRef)(null);
            p[0] !== m ? (t = G.safeParse(m), p[0] = m, p[1] = t) : t = p[1];
            let O = t;
            p[2] !== g || p[3] !== I ? (a = (0, E.c)(I, g), p[2] = g, p[3] = I, p[4] = a) : a = p[4];
            let R = a,
                M = R?.messageId,
                L = I?.conversationId,
                W = O.success ? O.data.data.url : void 0,
                D = !0 === T || !0 === v || null == I || I.isStreaming || !0 === I.isReadOnly || I.shouldBlockExternalEgress || null == R || null != W && "restricted" === C;
            if (p[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => N.current?.abort(), p[5] = i) : i = p[5], p[6] !== L || p[7] !== D || p[8] !== y || p[9] !== M || p[10] !== W ? (l = [L, D, y, M, W], p[6] = L, p[7] = D, p[8] = y, p[9] = M, p[10] = W, p[11] = l) : l = p[11], (0, o.useLayoutEffect)(i, l), !O.success || x) return null;
            let {
                title: U,
                text: V,
                button_label: q,
                prompt: K
            } = O.data.data;
            return p[12] !== A ? (s = A.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), p[12] = A, p[13] = s) : s = p[13], p[14] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                N.current?.abort(), w(!0)
            }, p[14] = c) : c = p[14], p[15] !== s ? (d = {
                ariaLabel: s,
                onClick: c
            }, p[15] = s, p[16] = d) : d = p[16], p[17] !== D || p[18] !== K || p[19] !== y || p[20] !== R || p[21] !== I || p[22] !== W ? (u = () => {
                if (!D && null != I && null != R) {
                    if (null != W) {
                        N.current?.abort();
                        let e = new AbortController;
                        N.current = e;
                        let t = (0, j.e)(y, {
                            type: "open_url",
                            payload: {
                                url: W,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: I,
                            sourceMessageId: R.messageId,
                            signal: e.signal
                        });
                        !1 !== t && t.catch(B);
                        return
                    }
                    null != K && (0, S.submitChatGptFollowUp)(y, {
                        conversationId: I.conversationId,
                        isTemporaryChat: I.isTemporaryChat ?? !1,
                        parentMessageId: R.messageId,
                        prompt: K
                    }).catch(H)
                }
            }, p[17] = D, p[18] = K, p[19] = y, p[20] = R, p[21] = I, p[22] = W, p[23] = u) : u = p[23], p[24] !== q || p[25] !== D || p[26] !== u ? (f = {
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
            M.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function B(e) {
            M.a.warning("ChatGPT beacon card link failed", {
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
            let t, a, i, l, s, c, d, u = (0, r.c)(32),
                {
                    contentReferenceIndex: f,
                    isStreaming: _,
                    readOnly: p,
                    reference: g
                } = e,
                {
                    data: m
                } = g,
                b = (0, E.d)(),
                v = _ ?? (b?.isStreaming === !0 && (b.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                T = (0, o.useContext)(k.a),
                y = b?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== y || u[2] !== b?.contentReferenceMessageIds ? (t = null == y ? f : b?.contentReferenceMessageIds?.slice(0, f).filter(e => e === y).length, u[0] = f, u[1] = y, u[2] = b?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let I = t,
                C = b?.conversationId,
                x = y ?? b?.messageId;
            u[4] !== I || u[5] !== C || u[6] !== x ? (a = {
                conversationId: C,
                messageId: x,
                codeBlockIndex: I
            }, u[4] = I, u[5] = C, u[6] = x, u[7] = a) : a = u[7];
            let w = (0, h.x)(A.u, a);
            u[8] !== I || u[9] !== T || u[10] !== v || u[11] !== p || u[12] !== w || u[13] !== y || u[14] !== b ? (i = b && {
                ...b,
                messageId: y ?? b.messageId,
                codeBlocks: (0, W.a)({
                    code_blocks: null == w || null == I ? void 0 : {
                        [I]: w
                    }
                }) ?? (null == y || y === b.messageId ? b.codeBlocks : void 0),
                isReadOnly: p || b.isReadOnly,
                isStreaming: v,
                shouldBlockExternalEgress: b.shouldBlockExternalEgress || "restricted" === T
            }, u[8] = I, u[9] = T, u[10] = v, u[11] = p, u[12] = w, u[13] = y, u[14] = b, u[15] = i) : i = u[15], u[16] !== m ? (l = (0, U.a)(m), u[16] = m, u[17] = l) : l = u[17];
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
            }), u[20] = I, u[21] = m.content, u[22] = m.editable, u[23] = m.interactive, u[24] = v, u[25] = l, u[26] = N, u[27] = s, u[28] = c) : c = u[28], u[29] !== c || u[30] !== i ? (d = (0, n.jsx)(E.b.Provider, {
                value: i,
                children: c
            }), u[29] = c, u[30] = i, u[31] = d) : d = u[31], d
        }
        var q = a("DIH2");

        function K(e) {
            let t, a, i, l, o, s, c = (0, r.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, q.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, q.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                _ = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                p = _ && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== _ || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (i = _ && "inline_anchor" !== d.data.presentation ? (0, q.b)(d.data.pronunciation_hint) : null, c[5] = _, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = i) : i = c[8];
            let g = i;
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
            Q = a("VTN2");
        let Y = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                suspendToParent: !0,
                errorFallback: K
            }),
            $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(530869), a.e(51820), a.e(516321)]).then(a.bind(a, "fkRj"))).ChatGptTranslationContentReference, {
                suspendToParent: !0,
                errorFallback: K
            }),
            X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(851456), a.e(974872), a.e(888466), a.e(715515), a.e(405093), a.e(344557), a.e(374281), a.e(208123), a.e(95104), a.e(678608), a.e(509223), a.e(834601)]).then(a.bind(a, "KKwe"))).DilWritingBlock, _.a),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(530869), a.e(51820), a.e(179369)]).then(a.bind(a, "fmfw"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(z.a, {})
            }),
            Z = (0, s.a)(l.a, {
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
                    return (0, n.jsx)(O.a, {
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
                    return (0, n.jsx)(O.a, {
                        reference: t
                    })
                }
            }),
            et = (0, o.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(990054), a.e(447562), a.e(445355), a.e(168420), a.e(536161), a.e(826779), a.e(530869), a.e(398210)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            ea = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function en(e) {
            let t, a, i, l, s, c = (0, r.c)(85),
                {
                    appBlockTopMargin: d,
                    bind: f,
                    contentReferenceIndex: _,
                    isLastNodeInMessage: h,
                    isStreaming: b,
                    mapFullscreenMode: v,
                    readOnly: T,
                    reference: y
                } = e;
            if ("business_profile_starter_pills" === y.category) {
                let e;
                return c[0] !== y.data ? (e = (0, n.jsx)(g.c, {
                    data: y.data
                }), c[0] = y.data, c[1] = e) : e = c[1], e
            }
            if ("beacon_card" === y.category) {
                let e;
                return c[2] !== _ || c[3] !== b || c[4] !== T || c[5] !== y ? (e = (0, n.jsx)(L, {
                    contentReferenceIndex: _,
                    reference: y,
                    isStreaming: b,
                    readOnly: T
                }), c[2] = _, c[3] = b, c[4] = T, c[5] = y, c[6] = e) : e = c[6], e
            }
            if ("suggest_work_handoff" === y.category) {
                let e;
                return c[7] !== _ || c[8] !== b || c[9] !== T ? (e = T || b ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(ea, {
                        contentReferenceIndex: _
                    })
                }), c[7] = _, c[8] = b, c[9] = T, c[10] = e) : e = c[10], e
            }
            if ("health_chart" === y.category) {
                let e;
                return c[11] !== _ || c[12] !== b || c[13] !== y ? (e = (0, n.jsx)(Z, {
                    contentReferenceIndex: _,
                    reference: y,
                    isStreaming: b
                }), c[11] = _, c[12] = b, c[13] = y, c[14] = e) : e = c[14], e
            }
            if ("learning_flashcards" === y.category) {
                let e;
                return c[15] !== _ || c[16] !== b || c[17] !== T || c[18] !== y ? (e = (0, n.jsx)(ee, {
                    contentReferenceIndex: _,
                    reference: y,
                    isStreaming: b,
                    readOnly: T
                }), c[15] = _, c[16] = b, c[17] = T, c[18] = y, c[19] = e) : e = c[19], e
            }
            if (N.b.safeParse(y).success) {
                let e;
                return c[20] !== _ ? (e = (0, n.jsx)(x, {
                    contentReferenceIndex: _
                }), c[20] = _, c[21] = e) : e = c[21], e
            }
            if ("writing_block" === y.category) {
                let e;
                return c[22] !== _ || c[23] !== h || c[24] !== b || c[25] !== T || c[26] !== y.data ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: _,
                    data: y.data,
                    isLastNodeInMessage: h,
                    isStreaming: b,
                    readOnly: T
                }), c[22] = _, c[23] = h, c[24] = b, c[25] = T, c[26] = y.data, c[27] = e) : e = c[27], e
            }
            if ("map" === y.category) {
                let e;
                return c[28] !== _ || c[29] !== b || c[30] !== v || c[31] !== y ? (e = (0, n.jsx)(m.a, {
                    contentReferenceIndex: _,
                    fullscreenMode: v,
                    isStreaming: b,
                    reference: y
                }), c[28] = _, c[29] = b, c[30] = v, c[31] = y, c[32] = e) : e = c[32], e
            }
            if ("app_block" === y.category) {
                let e;
                return c[33] !== d || c[34] !== f || c[35] !== b || c[36] !== T || c[37] !== y ? (e = (0, n.jsx)(p.a, {
                    bind: f,
                    reference: y,
                    isStreaming: b,
                    readOnly: T,
                    withTopMargin: d
                }), c[33] = d, c[34] = f, c[35] = b, c[36] = T, c[37] = y, c[38] = e) : e = c[38], e
            }
            if ("ledger_monetary_value" === y.category) {
                let e, t;
                c[39] !== y ? (e = Q.f.safeParse(y), c[39] = y, c[40] = e) : e = c[40];
                let a = e;
                return c[41] !== y || c[42] !== a.data || c[43] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(O.a, {
                    reference: y
                }), c[41] = y, c[42] = a.data, c[43] = a.success, c[44] = t) : t = c[44], t
            }
            c[45] !== y ? (t = Q.d.safeParse(y), c[45] = y, c[46] = t) : t = c[46];
            let I = t;
            if (I.success) {
                let e;
                return c[47] !== I.data || c[48] !== _ || c[49] !== b || c[50] !== T ? (e = (0, n.jsx)(V, {
                    contentReferenceIndex: _,
                    isStreaming: b,
                    readOnly: T,
                    reference: I.data
                }), c[47] = I.data, c[48] = _, c[49] = b, c[50] = T, c[51] = e) : e = c[51], e
            }
            c[52] !== y ? (a = Q.e.safeParse(y), c[52] = y, c[53] = a) : a = c[53];
            let A = a;
            if (A.success) {
                let e;
                return c[54] !== _ || c[55] !== A.data ? (e = (0, n.jsx)(er, {
                    contentReferenceIndex: _,
                    reference: A.data
                }), c[54] = _, c[55] = A.data, c[56] = e) : e = c[56], e
            }
            c[57] !== y ? (i = Q.g.safeParse(y), c[57] = y, c[58] = i) : i = c[58];
            let E = i;
            if (E.success) {
                let e, t, a;
                c[59] !== E.data ? (e = (0, n.jsx)(K, {
                    reference: E.data
                }), c[59] = E.data, c[60] = e) : e = c[60];
                let r = !0 === b;
                return c[61] !== _ || c[62] !== E.data || c[63] !== r ? (t = (0, n.jsx)(Y, {
                    contentReferenceIndex: _,
                    isStreaming: r,
                    reference: E.data
                }), c[61] = _, c[62] = E.data, c[63] = r, c[64] = t) : t = c[64], c[65] !== e || c[66] !== t ? (a = (0, n.jsx)(o.Suspense, {
                    fallback: e,
                    children: t
                }), c[65] = e, c[66] = t, c[67] = a) : a = c[67], a
            }
            c[68] !== y ? (l = Q.h.safeParse(y), c[68] = y, c[69] = l) : l = c[69];
            let C = l;
            if (C.success) {
                let e, t, a;
                return c[70] !== C.data ? (e = (0, n.jsx)(K, {
                    reference: C.data
                }), c[70] = C.data, c[71] = e) : e = c[71], c[72] !== _ || c[73] !== b || c[74] !== C.data ? (t = (0, n.jsx)($, {
                    contentReferenceIndex: _,
                    isStreaming: b,
                    reference: C.data
                }), c[72] = _, c[73] = b, c[74] = C.data, c[75] = t) : t = c[75], c[76] !== e || c[77] !== t ? (a = (0, n.jsx)(o.Suspense, {
                    fallback: e,
                    children: t
                }), c[76] = e, c[77] = t, c[78] = a) : a = c[78], a
            }
            if (!Q.c.safeParse(y).success) {
                let e;
                return c[79] !== y ? (e = (0, n.jsx)(O.c, {
                    reference: y
                }), c[79] = y, c[80] = e) : e = c[80], e
            }
            return c[81] !== _ || c[82] !== b || c[83] !== y ? (s = (0, n.jsx)(ei, {
                contentReferenceIndex: _,
                reference: y,
                isStreaming: b
            }), c[81] = _, c[82] = b, c[83] = y, c[84] = s) : s = c[84], s
        }

        function er(e) {
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
            return l[2] !== s || l[3] !== u || l[4] !== d || l[5] !== c ? (a = d && null != et ? (0, n.jsx)(et, {
                contentReferenceIndex: s,
                reference: c
            }) : u, l[2] = s, l[3] = u, l[4] = d, l[5] = c, l[6] = a) : a = l[6], l[7] !== u || l[8] !== a ? (i = (0, n.jsx)(o.Suspense, {
                fallback: u,
                children: a
            }), l[7] = u, l[8] = a, l[9] = i) : i = l[9], i
        }

        function ei(e) {
            let t, a, i = (0, r.c)(6),
                [l] = (0, o.useState)(el);
            return i[0] !== e || i[1] !== l ? (t = (0, n.jsx)(J, {
                ...e,
                widgetRefSeenAtMs: l
            }), i[0] = e, i[1] = l, i[2] = t) : t = i[2], i[3] !== e.contentReferenceIndex || i[4] !== t ? (a = (0, n.jsx)("div", {
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
            l = a("aqd9");

        function o() {
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
        a.d(t, {
            a: () => o
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
            g = n.object({
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
            m = n.object({
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
                    source_language: i,
                    target_language: i,
                    translated_text: i
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
            r = a("zSQm");

        function i(e) {
            let t = (0, n.p)(e);
            return null == t ? null : (0, r.a)(t) ?? null
        }
        a.d(t, {
            a: () => i
        })
    }),
    GnI8: (function(e, t, a) {
        a.d(t, {
            ChatGptFileReference: () => ep
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Rzcw"),
            l = a("nB3p"),
            o = a("BOYb"),
            s = a("iTtm"),
            c = a("zd8w"),
            d = a("v7qY"),
            u = a("Wf1j"),
            f = a("oyxz"),
            _ = a("mG2A"),
            p = a("w7Qu"),
            g = a("O0M0"),
            m = a("w9uH"),
            h = a("NkEl"),
            b = a("ygO2"),
            v = a("bf6R"),
            T = a("VL1D"),
            y = a("RNul"),
            I = a("SGsN"),
            A = a("CqQF"),
            E = a("bWX0"),
            C = a("nz9r"),
            x = a("dL8H"),
            w = a("jCsa"),
            N = a("MExO"),
            O = a("vYmP"),
            R = a("ZjkF"),
            S = a("WAdu"),
            j = a("cckT"),
            P = a("S1CS"),
            k = a("Ph61"),
            F = a("LOXd"),
            M = a("coFq"),
            G = a("GaA7"),
            L = a("tSEg"),
            H = a("WFY2"),
            B = a("zsxQ"),
            W = a("vldH"),
            D = a("zy7P"),
            U = a("u4MG"),
            V = a("MrGp"),
            q = a("TUMj"),
            K = a("rxj0"),
            z = a("zamV"),
            Q = a("Ul98"),
            Y = a("XkLc"),
            $ = a("c9lJ"),
            X = a("gsAl"),
            J = a("ahg9"),
            Z = a("j8Yf"),
            ee = a("t2JB"),
            et = a("PO1G"),
            ea = a("DIH2");

        function en(e) {
            let t, a, i, o, d, u, f, _, p = (0, r.c)(34),
                {
                    reference: g
                } = e,
                m = (0, s.y)(L.a),
                h = (0, q.d)(),
                b = "restricted" === (0, c.useContext)(S.a);
            p[0] !== g.name ? (t = (0, ea.b)(g.name), p[0] = g.name, p[1] = t) : t = p[1];
            let T = t,
                y = (0, ee.b)(g),
                I = (0, c.useRef)(null),
                A = h?.savedContentResponse,
                E = h?.shouldBlockExternalEgress === !0,
                C = null == A || null == y || E ? null : (0, l.k)(y);
            p[2] !== C || p[3] !== A || p[4] !== m ? (a = () => {
                (0, k.a)(m, I, A, C)
            }, p[2] = C, p[3] = A, p[4] = m, p[5] = a) : a = p[5];
            let x = (0, c.useEffectEvent)(a);
            p[6] !== x ? (i = () => {
                x()
            }, p[6] = x, p[7] = i) : i = p[7];
            let w = C?.id,
                N = C?.kind,
                R = A?.conversationId,
                j = A?.responseId,
                P = A?.savedContentBackend;
            if (p[8] !== w || p[9] !== N || p[10] !== R || p[11] !== j || p[12] !== P ? (o = [w, N, R, j, P], p[8] = w, p[9] = N, p[10] = R, p[11] = j, p[12] = P, p[13] = o) : o = p[13], (0, c.useEffect)(i, o), null == T || null == y) {
                let e;
                return p[14] !== g ? (e = (0, n.jsx)(Z.a, {
                    reference: g
                }), p[14] = g, p[15] = e) : e = p[15], e
            }
            p[16] !== C || p[17] !== y || p[18] !== E || p[19] !== T || p[20] !== b || p[21] !== A || p[22] !== m ? (d = E ? (0, n.jsx)(O.a, {
                ariaLabel: T,
                disabled: !0,
                icon: (0, n.jsx)(v.td, {}),
                isTerminalInline: !0,
                label: T,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: er
            }) : (0, n.jsx)(O.a, {
                ariaLabel: T,
                href: y,
                icon: (0, n.jsx)(v.td, {}),
                isTerminalInline: !0,
                label: T,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, k.a)(m, I, A, C, !0)
                }
            }), p[16] = C, p[17] = y, p[18] = E, p[19] = T, p[20] = b, p[21] = A, p[22] = m, p[23] = d) : d = p[23];
            let F = d;
            p[24] !== T || p[25] !== g ? (u = function(e, t) {
                let a = (0, ea.b)(e.matched_text),
                    n = (0, ea.b)(e.library_path);
                if (null == a || null == n) return null;
                let r = a.match(/^`+/)?.[0],
                    i = null != r && a.endsWith(r),
                    l = i ? a.slice(r.length, -r.length) : a,
                    o = n.split("/").filter(Boolean);
                if (o.length < 2 || o.at(-1) !== t) return null;
                let s = o.join("/");
                if (!new Set([`/${s}`, s, `/${s}/`, `${s}/`, `Library/${s}`, ...[" / ", " > ", " → ", " › "].map(e => o.join(e))]).has(l)) return null;
                let c = l.lastIndexOf(t);
                return {
                    isInlineCode: i,
                    prefix: l.slice(0, c),
                    suffix: l.slice(c + t.length)
                }
            }(g, T), p[24] = T, p[25] = g, p[26] = u) : u = p[26];
            let M = u;
            if (null == M) return F;
            p[27] !== F || p[28] !== M.prefix || p[29] !== M.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [M.prefix, F, M.suffix]
            }), p[27] = F, p[28] = M.prefix, p[29] = M.suffix, p[30] = f) : f = p[30];
            let G = f;
            return p[31] !== G || p[32] !== M.isInlineCode ? (_ = M.isInlineCode ? (0, n.jsx)("code", {
                children: G
            }) : G, p[31] = G, p[32] = M.isInlineCode, p[33] = _) : _ = p[33], _
        }

        function er() {}
        var ei = a("Bbed"),
            el = a("ePaQ"),
            eo = a("JAYD"),
            es = a("Nfif");
        let ec = (0, ei.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(80675)]).then(a.bind(a, "kcNG"))).PrivateSourceFollowUp);

        function ed(e) {
            let t, a, i, l, o, d, u, f = (0, r.c)(29),
                {
                    source: _
                } = e,
                p = (0, s.y)(L.a),
                g = (0, q.d)(),
                [m, h] = (0, c.useState)(""),
                [b, v] = (0, c.useState)(!1),
                T = (0, c.useContext)(S.a);
            f[0] !== T || f[1] !== p.value ? (t = null != (0, L.f)(p.value) && "restricted" !== T, f[0] = T, f[1] = p.value, f[2] = t) : t = f[2];
            let y = t,
                I = (0, s.x)(y ? eo.a : null, _.connector_id),
                A = !y || !I;
            f[3] !== A || f[4] !== b || f[5] !== m || f[6] !== _ || f[7] !== g ? (a = A || null == g || g.isReadOnly || g.shouldBlockExternalEgress || g.renderRestrictedWidgets || g.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(ec, {
                source: _,
                question: m,
                onQuestionChange: h,
                turn: g,
                pending: b,
                onPendingChange: v
            }, _.id), f[3] = A, f[4] = b, f[5] = m, f[6] = _, f[7] = g, f[8] = a) : a = f[8];
            let E = _.snippet ?? void 0;
            f[9] !== _.name || f[10] !== E ? (i = {
                title: _.name,
                body: E
            }, f[9] = _.name, f[10] = E, f[11] = i) : i = f[11], f[12] !== _.name || f[13] !== i ? (l = {
                title: _.name,
                hoverCard: i
            }, f[12] = _.name, f[13] = i, f[14] = l) : l = f[14], f[15] !== _.connector_id ? (o = (0, n.jsx)(es.a, {
                appId: _.connector_id
            }), f[15] = _.connector_id, f[16] = o) : o = f[16];
            let C = _.medical_file_reference?.source_label ?? _.name;
            return f[17] !== A || f[18] !== _.name || f[19] !== o || f[20] !== C ? (d = (0, n.jsx)(O.a, {
                ariaLabel: _.name,
                disabled: A,
                icon: o,
                label: C,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: eu
            }), f[17] = A, f[18] = _.name, f[19] = o, f[20] = C, f[21] = d) : d = f[21], f[22] !== A || f[23] !== b || f[24] !== _.connector_id || f[25] !== a || f[26] !== l || f[27] !== d ? (u = (0, n.jsx)(el.a, {
                disabled: A,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: b,
                followUp: a,
                metadata: l,
                sourceAppId: _.connector_id,
                children: d
            }), f[22] = A, f[23] = b, f[24] = _.connector_id, f[25] = a, f[26] = l, f[27] = d, f[28] = u) : u = f[28], u
        }

        function eu(e) {
            return e.currentTarget.focus()
        }
        var ef = a("iKA6");
        let e_ = (0, s.q)(L.a, (e, t) => {
            let {
                conversationId: a,
                messageId: n,
                target: r
            } = e, {
                scope: i
            } = t;
            return {
                queryKey: ["latex-card-workspace-file", a, n, r],
                staleTime: 0,
                retry: !1,
                queryFn: async () => {
                    if (null != r) {
                        let e = await (0, m.b)(i, a, r);
                        if (null != e && "tex" === (0, E.c)(e.path)) return {
                            file: e,
                            originalSource: !1
                        };
                        let t = await (0, m.a)(i, a, n, r);
                        return null == t ? null : {
                            file: t,
                            originalSource: !0
                        }
                    }
                    return null
                }
            }
        });

        function ep(e) {
            let t, a, i, l = (0, r.c)(17);
            l[0] !== e.reference ? (t = ef.a.safeParse(e.reference), l[0] = e.reference, l[1] = t) : t = l[1];
            let o = t;
            if (o.success) {
                let e;
                return l[2] !== o.data ? (e = (0, n.jsx)(ed, {
                    source: o.data
                }, o.data.id), l[2] = o.data, l[3] = e) : e = l[3], e
            }
            if ("library_folder" === e.reference.type || (0, ee.c)(e.reference)) {
                let t;
                return l[4] !== e.reference ? (t = (0, n.jsx)(en, {
                    reference: e.reference
                }), l[4] = e.reference, l[5] = t) : t = l[5], t
            }
            if ("file_navlist" === e.reference.type) {
                let t;
                return l[6] !== e ? (t = (0, n.jsx)(ev, {
                    ...e
                }), l[6] = e, l[7] = t) : t = l[7], t
            }
            let s = "template" === e.presentation ? "auto" : e.presentation;
            l[8] !== e || l[9] !== s ? (a = (0, n.jsx)(em, {
                ...e,
                presentation: s
            }), l[8] = e, l[9] = s, l[10] = a) : a = l[10];
            let c = a;
            if ("file" === e.reference.type && (null == e.presentation || "auto" === e.presentation) && null == (0, ea.b)(e.reference.sandbox_path) && !(0, ea.b)(e.reference.link_markdown)?.includes("sandbox:")) {
                let e;
                l[11] !== c ? (e = (0, n.jsx)(eg, {
                    children: c
                }), l[11] = c, l[12] = e) : e = l[12], c = e
            }
            let d = "template" === e.presentation;
            return l[13] !== c || l[14] !== e.reference || l[15] !== d ? (i = (0, n.jsx)(_.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: d
            }), l[13] = c, l[14] = e.reference, l[15] = d, l[16] = i) : i = l[16], i
        }

        function eg(e) {
            let {
                children: t
            } = e, a = (0, q.d)(), n = (0, s.x)(V.Q, a?.conversationId ?? null);
            return null == n || (0, U.a)(n) ? t : null
        }

        function em(e) {
            var t, a, _, m;
            let U, en, er, ei, el, eo, es, ec, ed, eu, ef = (0, r.c)(46),
                {
                    children: ep,
                    contentReferenceIndex: eg,
                    fileNavigationIndex: em,
                    presentation: ev,
                    reference: eT,
                    showSaveAs: ey
                } = e,
                eI = void 0 === ev ? "auto" : ev,
                eA = (0, s.y)(L.a),
                eE = (0, u.a)(),
                eC = (0, q.d)(),
                ex = (0, q.c)(eC, eg)?.messageId ?? eC?.messageId,
                ew = (0, c.useContext)(g.a),
                eN = "restricted" === (0, c.useContext)(S.a),
                [eO, eR] = (0, c.useState)(),
                eS = (0, c.useRef)(null),
                ej = null != eO,
                eP = ew?.accountId ?? null,
                ek = ew?.userId ?? null;
            ef[0] !== eT.cloud_doc_url || ef[1] !== eT.codex_file_citation_authoritative || ef[2] !== eN || ef[3] !== eC?.shouldBlockExternalEgress ? (U = eC?.shouldBlockExternalEgress !== !1 || eN || !0 !== eT.codex_file_citation_authoritative ? null : (0, ea.b)(eT.cloud_doc_url), ef[0] = eT.cloud_doc_url, ef[1] = eT.codex_file_citation_authoritative, ef[2] = eN, ef[3] = eC?.shouldBlockExternalEgress, ef[4] = U) : U = ef[4], ef[5] !== eP || ef[6] !== ek || ef[7] !== U ? (en = {
                accountId: eP,
                userId: ek,
                url: U
            }, ef[5] = eP, ef[6] = ek, ef[7] = U, ef[8] = en) : en = ef[8];
            let {
                data: eF
            } = (0, s.x)(D.a, en), eM = eF ?? (0, ee.a)(eT), eG = "library_folder" === eT.source_type, eL = (0, W.b)(eT, {
                fileName: eM ?? void 0,
                messageId: ex
            }), eH = eC?.conversationId, eB = (0, $.a)(eA.value.pathname)?.params.sharedConversationId, eW = null == eH ? null : eA.get(V.X, eH);
            null != eB && eB === eH && (eW = eB);
            let eD = eA.get(X.d, ew)?.id,
                eU = (0, W.e)(eT),
                eV = null != eL && eC?.shouldBlockExternalEgress === !0,
                eq = null != eL && null != eM && !eV && (0, w.a)({
                    fileName: "mounted-library" === eL.type ? eL.sourceFileName ?? eM : eM,
                    mimeType: "mounted-library" === eL.type ? eL.mimeType ?? eU : eU,
                    mountedLibraryFileId: "mounted-library" === eL.type ? eL.mountedLibraryFileId : void 0
                }),
                eK = eL?.type === "mounted-library" || null != eM && (0, B.a)(eM, eU),
                ez = null != eL && (!eq && "mounted-library" === eL.type && null == eW && null == eD || (0, Y.canOpenChatGptFilePreview)({
                    browserPreview: eK
                })),
                eQ = !eV && (eq || ez),
                eY = G.appServices?.latex != null && "artifact-row" === eI && null != eM && "tex" === (0, E.c)(eM) && eQ && eC?.isReadOnly !== !0 && null == eW && null == eD,
                {
                    data: e$
                } = (0, s.x)(e_, {
                    conversationId: eH,
                    messageId: eC?.messageId,
                    target: eL
                }, {
                    enabled: eY
                }),
                eX = eY && null != e$,
                eJ = (void 0 === ey || ey) && eq && (0, Y.a)(),
                eZ = (0, J.a)(eT),
                e0 = {
                    fileName: eM ?? void 0,
                    mimeType: (0, W.c)(eT) ?? (eL?.type === "mounted-library" ? eL.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eL?.type === "mounted-library" ? eL.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, W.d)(eT),
                    sourceUrl: eZ ?? void 0
                },
                e1 = "library_folder" === eT.source_type ? (0, ee.b)(eT) : eZ,
                e2 = null != e1 && eC?.shouldBlockExternalEgress === !0,
                e5 = null == eL || null == eM ? null : (0, Q.a)(eL, eM, eU),
                e3 = null == e5 ? null : (0, N.c)(e5)?.sourceUrl,
                e6 = eV || e2 ? null : e3 ?? (eq || e2 ? null : e1),
                e8 = eC?.savedContentResponse,
                e7 = null;
            null != e8 && null != eM && (eQ || null != e6) && eL?.type !== "mounted-library" && ("library_folder" === eT.source_type && null != e6 ? e7 = (0, l.k)(e6) : null != eL && "libraryFileId" in eL && (e7 = (0, l.j)(eL.libraryFileId)));
            let e4 = (0, c.useEffectEvent)(() => {
                (0, k.a)(eA, eS, e8, e7)
            });
            ef[9] !== e4 ? (er = () => {
                e4()
            }, ef[9] = e4, ef[10] = er) : er = ef[10];
            let e9 = e7?.id,
                te = e7?.kind,
                tt = e8?.conversationId,
                ta = e8?.responseId,
                tn = e8?.savedContentBackend;
            if (ef[11] !== tt || ef[12] !== ta || ef[13] !== tn || ef[14] !== e9 || ef[15] !== te ? (ei = [e9, te, tt, ta, tn], ef[11] = tt, ef[12] = ta, ef[13] = tn, ef[14] = e9, ef[15] = te, ef[16] = ei) : ei = ef[16], (0, c.useEffect)(er, ei), null == eM) {
                let e;
                return ef[17] !== eT ? (e = (0, n.jsx)(Z.a, {
                    reference: eT
                }), ef[17] = eT, ef[18] = e) : e = ef[18], e
            }
            let tr = () => {
                    (0, k.a)(eA, eS, e8, e7, !0)
                },
                ti = (e, t, a) => {
                    if (ej || null == eL) return;
                    "opening" === e && tr();
                    let r = (0, p.a)(eM);
                    "saving" === e && null != eH && null != r && (0, z.b)(eA, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: r,
                        isEditing: !1,
                        source: {
                            conversationId: eH,
                            byteSource: "chatgpt",
                            sharedConversationId: eW,
                            artifactInteractionExcluded: null != eD,
                            target: eL
                        },
                        originatingTurn: eC?.turnId == null ? void 0 : {
                            turnId: eC.turnId,
                            inputMessageId: null,
                            messageId: ex ?? null
                        }
                    }), eR(e);
                    let i = !0,
                        l = () => {
                            i && (i = !1, eR(void 0))
                        },
                        o = {
                            conversationId: eA.get(V.j, eH ?? null) ?? eH,
                            fileName: eM,
                            gizmoId: null == eH ? null : eA.get(V.Q, eH),
                            sharedConversationId: eW,
                            mimeType: eU,
                            postId: eD,
                            target: eL
                        };
                    ("saving" === e ? (0, Y.b)(eA, o) : (0, Y.openChatGptFile)(eA, {
                        ...o,
                        messageId: (0, q.c)(eC, eg)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, K.i)(e, eH),
                        browserPreview: eK,
                        onClose: null == a ? void 0 : () => {
                            l(), a()
                        },
                        downloadFallback: eq && !ez,
                        tabKey: `${eC?.messageId??"message"}:${String(eg)}:${eM}${null==em?"":`:${String(em)}`}`
                    })).catch(t => {
                        "opening" === e && i && null != a && ((0, d.flushSync)(l), a()), H.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), eA.get(I.f).danger((0, n.jsx)(f.a, {
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
                tl = e => {
                    eQ && (e.preventDefault(), ti("opening", e))
                };
            if ("artifact-row" === eI && eq) {
                let e;
                ef[19] !== eE ? (e = eE.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file",
                    description: "Tooltip and accessibility label for the icon-only download button in an artifact file card beneath a ChatGPT response. It appears when desktop users hover over or focus the row and remains visible on touch devices. Activating the button downloads the file. Short, space-limited action label for end users."
                }), ef[19] = eE, ef[20] = e) : e = ef[20], el = e
            } else eJ && (el = eE.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…",
                description: "Accessible label and tooltip for saving a generated ChatGPT file to a user-selected location. The fileName placeholder is the displayed file name."
            }, {
                fileName: eM
            }));
            let to = null != el ? (0, n.jsx)(A.a, {
                tooltipContent: el,
                children: (0, n.jsx)(b.a, {
                    "aria-label": el,
                    color: "artifact-row" === eI ? "ghostActive" : "ghost",
                    disabled: ej,
                    loading: "saving" === eO,
                    radius: "artifact-row" === eI ? "large" : "default",
                    size: "artifact-row" === eI ? "imageToolbar" : "toolbar",
                    uniform: !0,
                    onClick: e => {
                        e.stopPropagation(), ti("saving")
                    },
                    children: "saving" !== eO && (0, n.jsx)(x.a, {
                        "aria-hidden": !0,
                        className: "artifact-row" === eI ? "icon-base" : "icon-sm"
                    })
                })
            }) : null;
            if (eQ && null != e5 ? eo = ej ? eE.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}",
                    description: "Accessible label for a connected-provider file reference while it is opening in the preferred browser or the file preview. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eE.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}",
                    description: "Accessible label for a connected-provider file reference. Activating it opens the file in the preferred browser on Desktop or the file preview on the web. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eQ ? eo = ez && ej ? eE.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : ez ? eE.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : ej ? eE.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eE.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eV && (eo = ez ? eE.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eE.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                })), "artifact-row" !== eI && "file-tile" !== eI) {
                let e = !0 !== eT.codex_file_citation_authoritative && "my_files" === (t = eT).source && null != (0, ea.b)(t.library_file_id) && !eb(t),
                    r = !0 !== eT.codex_file_citation_authoritative && null == ep && !e && (eb(eT) || null != e5 || eC?.conversationOrigin === "tpp" && null != (0, ea.b)(eT.library_file_id)),
                    l = null == ep ? (0, ea.b)((0, ea.d)(eT.codex_file_citation_attributes)?.label) ?? (0, ea.b)((0, ea.d)(eT.codex_file_citation_attributes)?.title) ?? eM : (0, R.a)(ep);
                e ? (a = eT, _ = eM, l = (0, i.c)({
                    fileName: _,
                    matchedText: (0, ea.b)(a.matched_text) ?? void 0
                })) : r && (l = (0, i.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eM)));
                let s = (0, n.jsx)("span", {
                    style: i.h,
                    children: (0, n.jsx)(C.a, {
                        ...e0,
                        "aria-hidden": !0,
                        size: 16,
                        style: i.i
                    })
                });
                if (r) {
                    let e, t, a = e => {
                            if (!eQ) return;
                            e.preventDefault();
                            let t = e.currentTarget;
                            ti(eq && (0, j.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        r = {
                            ref: e => {
                                if (null != e) return (0, h.b)(e, {
                                    text: [eM, l, e6, ...(0, F.a)(eE, [eT]).sources.flatMap(eh)].join(" "),
                                    highlight: (0, o.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: eo ?? eM,
                            icon: s,
                            isTerminalInline: !0,
                            label: l,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != e6 ? (0, n.jsx)(O.a, {
                        ...r,
                        href: e6,
                        onActivate: tr,
                        requiresConfirmation: eN,
                        showHoverActions: null != e3,
                        tooltipContent: eM,
                        variant: "file",
                        onUnmodifiedClick: a
                    }) : eQ ? (0, n.jsx)(O.a, {
                        ...r,
                        disabled: ej,
                        variant: "file",
                        onClick: a
                    }) : (0, n.jsx)(O.a, {
                        ...r,
                        disabled: !0,
                        variant: "file",
                        onClick: () => ti("opening")
                    });
                    let i = null != e6 ? e : (0, n.jsx)(A.a, {
                        tooltipContent: eM,
                        children: e
                    });
                    return ef[21] !== i ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: i
                    }), ef[21] = i, ef[22] = t) : t = ef[22], t
                }
                if (!0 === eT.codex_file_citation_authoritative || null != ep || e || eC?.conversationOrigin === "tpp") {
                    let e, t = null != e6 ? (0, n.jsxs)(et.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        href: e6,
                        onActivate: tr,
                        "aria-busy": ej,
                        "aria-label": eo ?? eM,
                        tooltipContent: eM,
                        showHoverActions: null != e3,
                        onUnmodifiedClick: tl,
                        children: [s, ep ?? l]
                    }) : (0, n.jsxs)(P.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        reference: {
                            path: eM
                        },
                        ariaBusy: ej,
                        ariaLabel: eo ?? eM,
                        cwd: null,
                        disabled: ej || !eQ,
                        enableWorkspaceFileActions: !1,
                        hostId: eC?.hostId,
                        label: l,
                        tooltipText: eM,
                        onOpen: (e, t) => {
                            eQ && ti(eq && (0, j.a)(t) ? "saving" : "opening", t)
                        },
                        children: [s, ep ?? l]
                    });
                    return ef[23] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), ef[23] = t, ef[24] = e) : e = ef[24], e
                }
            }
            let ts = (0, i.f)({
                    fileName: eM,
                    mimeType: (m = eT, (0, ea.b)(m.source_mime_type) ?? (0, ea.b)(m.mounted_library_mime_type) ?? (0, ea.b)(m.mime_type) ?? void 0),
                    sourceUrl: eZ ?? void 0
                }),
                tc = (0, E.c)(eM)?.toUpperCase(),
                td = null;
            if (null != e6 ? td = (0, n.jsx)(et.a, {
                    "data-testid": eG ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eI ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: e6,
                    onActivate: tr,
                    "aria-busy": ej,
                    tooltipContent: eM,
                    showHoverActions: null != e3,
                    onUnmodifiedClick: tl,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eM
                    })
                }) : eQ ? td = (0, n.jsx)("button", {
                    "aria-busy": ej,
                    "aria-label": eo,
                    className: "artifact-row" === eI ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: ej,
                    onClick: e => ti(eq && (0, j.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (eV || e2) && (td = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": eo ?? eM,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), ej) {
                let e;
                ef[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(y.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), ef[25] = e) : e = ef[25], es = e
            } else if (null != to) {
                let e, t = "pointer-events-auto";
                "artifact-row" === eI ? t = "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "file-tile" === eI && (t = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), ef[26] !== to || ef[27] !== t ? (e = (0, n.jsx)("span", {
                    className: t,
                    children: to
                }), ef[26] = to, ef[27] = t, ef[28] = e) : e = ef[28], es = e
            }
            if (eX) {
                let e, t;
                ef[29] !== e$?.originalSource ? (e = e$?.originalSource ? (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy",
                    description: "Explains that the original-source action opens a separate workspace file, and editing it does not update the uploaded Library copy"
                }) : void 0, ef[29] = e$?.originalSource, ef[30] = e) : e = ef[30], ef[31] !== e$?.originalSource ? (t = e$?.originalSource ? (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source",
                    description: "Opens the original LaTeX workspace file that was uploaded to create this separate Library copy"
                }) : (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor",
                    description: "Opens this conversation's local LaTeX source in the built-in editor with a live PDF preview"
                }), ef[31] = e$?.originalSource, ef[32] = t) : t = ef[32], es = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(A.a, {
                        tooltipContent: e,
                        children: (0, n.jsx)(b.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: ej,
                            size: "toolbar",
                            onClick: () => {
                                e$?.originalSource ? (0, M.openFileSidePanelTab)(eA, e$.file.path, {
                                    hostId: e$.file.hostId
                                }) : ti("opening")
                            },
                            children: t
                        })
                    }), es]
                })
            }
            let tu = tc,
                tf = "default";
            "artifact-row" === eI ? (tu = eX && !e$?.originalSource ? (0, n.jsx)(f.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source",
                description: "Identifies an editable LaTeX source file owned by this conversation's workspace"
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                    children: (0, n.jsx)(f.a, {
                        ...(0, i.d)(ts.category, ts.iconKey)
                    })
                }), (0, n.jsx)("span", {
                    className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                    "data-markdown-copy": "exclude",
                    children: (0, n.jsx)(f.a, {
                        id: "chatgpt.artifacts.resource_row.open_file.label",
                        defaultMessage: "Open file",
                        description: "Hover and keyboard-focus subtitle in a file-card row under a ChatGPT response. It tells the end user that activating the row opens the file preview. This is a short, space-limited action label."
                    })
                })]
            }), tf = eX ? "default" : "artifact-list") : "file-tile" === eI && (tu = eG ? (0, n.jsx)(f.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder",
                description: "Type label shown under a Library folder in a navigation result card"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let a = (0, ea.b)(e.description) ?? (0, ea.b)(e.snippet);
                return a?.startsWith("/") === !0 ? a : null
            }(eT) ?? (0, n.jsx)(f.a, {
                ...(0, i.d)(ts.category, ts.iconKey)
            }), tf = "file-tile");
            let t_ = "file-tile" === eI ? (0, n.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: eG ? (0, n.jsx)(v.ud, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(C.a, {
                    ...e0,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, n.jsx)(C.a, {
                ...e0,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            ef[33] !== eM || ef[34] !== tf || ef[35] !== tu || ef[36] !== t_ || ef[37] !== es ? (ec = (0, n.jsx)(T.h, {
                className: "pointer-events-none relative z-10",
                icon: t_,
                subtitle: tu,
                title: eM,
                titleTooltip: eM,
                trailing: es,
                variant: tf
            }), ef[33] = eM, ef[34] = tf, ef[35] = tu, ef[36] = t_, ef[37] = es, ef[38] = ec) : ec = ef[38], ef[39] !== td || ef[40] !== ec ? (ed = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [td, ec]
            }), ef[39] = td, ef[40] = ec, ef[41] = ed) : ed = ef[41];
            let tp = ed;
            if ("artifact-row" === eI) return tp;
            if ("file-tile" === eI) {
                let e;
                return ef[42] !== tp ? (e = (0, n.jsx)(T.a, {
                    as: "span",
                    variant: "file-tile",
                    children: tp
                }), ef[42] = tp, ef[43] = e) : e = ef[43], e
            }
            return ef[44] !== tp ? (eu = (0, n.jsx)(T.a, {
                as: "span",
                className: "mt-3",
                children: tp
            }), ef[44] = tp, ef[45] = eu) : eu = ef[45], eu
        }

        function eh(e) {
            return [e.displayLabel, e.sourceName]
        }

        function eb(e) {
            if ("file_citation" === (0, ea.b)((0, ea.d)(e.fff_metadata)?.file_reference_type)) return !0;
            let t = (0, ea.b)(e.matched_text)?.trim().toLowerCase();
            return t?.startsWith("filecite") === !0 || t?.startsWith("[citefilecite") === !0
        }

        function ev(e) {
            let t, a, i, l, o = (0, r.c)(12),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e;
            if (o[0] !== s || o[1] !== c) {
                i = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, r = (Array.isArray(c.items) ? c.items : []).flatMap(eT);
                    if (0 === r.length) {
                        let e;
                        o[5] !== c ? (e = (0, n.jsx)(Z.c, {
                            reference: c
                        }), o[5] = c, o[6] = e) : e = o[6], i = e;
                        break e
                    }
                    t = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    o[7] !== s ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(ep, {
                            contentReferenceIndex: s,
                            fileNavigationIndex: t,
                            presentation: "file-tile",
                            reference: e
                        })
                    }, `${e.name}:${String(t)}`), o[7] = s, o[8] = e) : e = o[8],
                    a = r.map(e)
                }
                o[0] = s, o[1] = c, o[2] = t, o[3] = a, o[4] = i
            } else t = o[2], a = o[3], i = o[4];
            return i !== Symbol.for("react.early_return_sentinel") ? i : (o[9] !== t || o[10] !== a ? (l = (0, n.jsx)("ul", {
                className: t,
                children: a
            }), o[9] = t, o[10] = a, o[11] = l) : l = o[11], l)
        }

        function eT(e) {
            let t = (0, ea.d)(e),
                a = null == t ? null : (0, ee.a)(t);
            return null == t || null == a ? [] : [{
                ...t,
                name: a,
                type: "file"
            }]
        }
    }),
    PO1G: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("on57"),
            l = a("KDax");

        function o(e) {
            let t, a, o, s, c = (0, r.c)(8);
            return c[0] !== e ? ({
                className: t,
                ...a
            } = e, c[0] = e, c[1] = t, c[2] = a) : (t = c[1], a = c[2]), c[3] !== t ? (o = (0, i.b)("cursor-interaction", t), c[3] = t, c[4] = o) : o = c[4], c[5] !== a || c[6] !== o ? (s = (0, n.jsx)(l.a, {
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
        let r = n.object({
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
            a: r
        })
    }),
    netB: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("T0Rc"),
            l = a("xKaq"),
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
            T = a("EUy6"),
            y = a("gsAl"),
            I = a("GnI8"),
            A = a("DIH2");

        function E(e) {
            let t, a = (0, r.c)(7),
                i = (0, v.d)(),
                l = (0, s.useContext)(p.a);
            if (null == i || i.isStreaming || i.shouldBlockExternalEgress || "restricted" === l) {
                let t, r;
                return a[0] !== e.reference.alt ? (t = (0, A.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (r = (0, n.jsx)(n.Fragment, {
                    children: t
                }), a[2] = t, a[3] = r) : r = a[3], r
            }
            return a[4] !== i || a[5] !== e ? (t = (0, n.jsx)(C, {
                ...e,
                context: i
            }), a[4] = i, a[5] = e, a[6] = t) : t = a[6], t
        }

        function C(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: r,
                    context: p,
                    fallback: v,
                    renderImage: E
                } = e,
                C = (0, o.y)(g.a),
                x = (0, s.useRef)(null),
                w = (0, l.a)(x, {
                    once: !0
                }),
                N = (0, s.useContext)(c.a),
                O = (0, o.z)(d.e),
                R = (0, o.z)(d.i),
                S = (0, o.x)(b.j, p.conversationId) ?? p.conversationId,
                j = (0, o.x)(b.Q, p.conversationId),
                P = (0, o.x)(b.X, p.conversationId),
                k = (0, o.x)(y.d, N)?.id,
                F = (0, h.b)(a, {
                    messageId: p.messageId
                }),
                {
                    data: M,
                    isPending: G
                } = (0, i.a)({
                    queryKey: ["chatgpt-sandbox-image", O, R, S, j, P, k, F, r],
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
                            target: null == r && "sandbox" === F.type ? (0, T.b)(C, {
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
            return null != E && (null != M || null != F && G) ? E(M, x) : (t = null != M ? (0, n.jsx)(_.b, {
                alt: (0, A.b)(a.alt) ?? "",
                downloadFileName: (0, A.b)(a.file_name) ?? void 0,
                hostId: p.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: M
            }) : null != F && G ? (0, n.jsx)(u.a, {
                "aria-label": (0, A.b)(a.alt) ?? void 0
            }) : null != r ? (0, n.jsx)(I.ChatGptFileReference, {
                contentReferenceIndex: r,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, A.b)(a.alt)
            }), (0, n.jsx)("div", {
                ref: x,
                children: t
            }))
        }
        a.d(t, {
            a: () => E
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
            f = a("MrGp"),
            _ = a("rxj0"),
            p = a("xof2"),
            g = a("IDHB"),
            m = a("jAnS"),
            h = a("W5UM");
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

        function T(e, t) {
            let a, {
                type: r,
                payload: i,
                turnContext: o,
                sourceMessageId: s,
                contentReferenceStartIndex: c,
                parentContext: d,
                signal: u,
                onInteraction: _,
                onLinkClick: g
            } = t;
            if ("open_conversation" === r) {
                let t = b.safeParse(i);
                if (t.success && !u.aborted) {
                    let a = (0, m.c)(t.data.conversation_id);
                    (0, l.c)(e, null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`)
                }
                return Promise.resolve()
            }
            if ("open_url" !== r) return !1;
            let T = i.url,
                I = !0 === i.require_safe_url_confirmation;
            if ("string" != typeof T || !T || u.aborted || I && !/^https:\/\//i.test(T)) return Promise.resolve();
            let C = A(T);
            if (null != C) return null == o || null == s ? Promise.resolve() : y(e, {
                sandboxPath: C,
                turnContext: o,
                sourceMessageId: s,
                signal: u
            });
            try {
                a = new URL(T, window.location.origin)
            } catch {
                return Promise.resolve()
            }
            if ("http:" !== a.protocol && "https:" !== a.protocol) return Promise.resolve();
            o?.shouldBlockExternalEgress || _?.(), g?.();
            let x = a.toString();
            return ((0, p.g)({
                ...v(i),
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "search_citation" === i.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                conversationId: e.get(f.j, o?.conversationId ?? null) ?? void 0,
                messageId: s,
                assistantMessageId: s,
                turnOrdinal: (0, p.a)(e, o?.conversationId, s),
                contentReferenceType: "dil",
                contentReferenceStartIndex: c,
                parentContext: d,
                url: o?.shouldBlockExternalEgress ? void 0 : x
            }), I && !o?.safeUrls?.includes(x)) ? E(e, x, u) : ((0, h.a)(e, x), Promise.resolve())
        }
        async function y(e, t) {
            let {
                sandboxPath: n,
                turnContext: r,
                sourceMessageId: i,
                sharedConversationId: l,
                signal: o
            } = t, s = e.get(f.Y, r.conversationId), p = l ?? (s?.kind === "conversation" ? s.id : void 0), g = {
                conversationId: e.get(f.j, r.conversationId) ?? (null == p ? null : (0, u.d)(p)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.Q, r.conversationId),
                sharedConversationId: p,
                postId: s?.kind === "post" ? s.post.id : void 0,
                requestSource: "web_dil_action",
                target: I(e, {
                    sandboxPath: n,
                    turnContext: r,
                    sourceMessageId: i
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
                isAccessBlocked: e => (0, _.i)(e, r.conversationId),
                messageId: i,
                browserPreview: !0,
                tabKey: `${i}:sandbox:${n}`,
                signal: o
            })
        }

        function I(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: l
                } = t,
                o = e.get(f.Y, i.conversationId);
            if (o?.kind === "post") {
                let t = e.get(f.L, i.conversationId)?.[l]?.message;
                if (null != t) {
                    let e = (0, r.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, g.a)(e, i.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: l
            })
        }

        function A(e) {
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
        async function E(e, t, n) {
            let r = await (0, s.a)(t).catch(() => !1);
            if (n.aborted) return;
            if (r) return void(0, h.a)(e, t);
            let {
                ExternalLinkConfirmationDialog: i
            } = await Promise.resolve().then(a.bind(a, "g25Y"));
            n.aborted || (0, o.f)(e, i, {
                href: t,
                initiator: "markdown_link_click",
                onOpen: () => {
                    n.aborted || (0, h.a)(e, t)
                }
            })
        }
        a.d(t, {
            a: () => A,
            b: () => I,
            c: () => v,
            d: () => y,
            e: () => T
        })
    }),
    W5UM: (function(e, t, a) {
        var n = a("Ot7V"),
            r = a("OMIV");

        function i(e, t) {
            (e.get(r.c, "1775679520") ? n.d : n.f)({
                href: t,
                initiator: "markdown_link_click"
            })
        }
        a.d(t, {
            a: () => i
        })
    }),
    zamV: (function(e, t, a) {
        var n = a("tFxw"),
            r = a("MVHH"),
            i = a("yGJW"),
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
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== p || null != d.sharedConversationId || !0 === d.artifactInteractionExcluded || null != e.get(l.Y, p)) return;
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
                (0, i.a)(e, r.h, {
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
            r = a("MVHH"),
            i = a("Cslg"),
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
                libraryFileId: r,
                status: i,
                folder: l,
                created: o,
                onView: s,
                surface: d = "image_tile"
            } = t;
            return p(e, {
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
        }
        async function p(e, t) {
            let {
                conversationId: a,
                messageId: n,
                libraryFileId: r,
                status: u,
                surface: f,
                folder: _,
                created: p,
                onView: h,
                updateFavorite: b
            } = t, v = () => e.get(i.e) === e.value.accountId && e.get(i.j) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let T = e.get(o.a),
                y = t => {
                    v() && (g(e, a, n, "toast_action", f), h?.((0, d.b)(t, "banner")))
                },
                I = r,
                A = null != _ || !u.isFavorited,
                E = null == _ || !u.isFavorited,
                C = A ? "save" : "unsave",
                x = performance.now();
            if (E) {
                g(e, a, n, C, f);
                let t = null != (I = await b(A, null == _, null == h ? void 0 : () => y("/library?tab=favorites")));
                if (!v() || (m(e, {
                        eventType: t ? A ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : A ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
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
                        v() && e.get(l.f).danger(T.formatMessage({
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
                    (0, c.a)(e), e.get(l.f).success(p ? T.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created",
                        description: "Success toast after creating a Library folder and moving the saved image into it. folderName is the user's folder name"
                    }, {
                        folderName: _.name
                    }) : T.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}",
                        description: "Success toast after moving the saved image into a Library folder. folderName is the user's folder name"
                    }, {
                        folderName: _.name
                    }), {
                        primaryAction: {
                            label: T.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View",
                                description: "Toast action that opens the Library folder which now contains the saved image"
                            }),
                            onClick: () => y(`/library/d/${encodeURIComponent(_.id)}`)
                        }
                    })
                }
                E && A && m(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: C,
                    clickToSuccessToastMs: performance.now() - x
                })
            }
        }

        function g(e, t, a, r, i) {
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
            (0, u.a)(e, r.cb, {
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
            r = a("QosV"),
            i = a("iTtm"),
            l = a("Wf1j"),
            o = a("HZfM"),
            s = a("Cslg"),
            c = a("ygO2"),
            d = a("HOLv"),
            u = a("CqQF"),
            f = a("jo5I"),
            _ = a("Fmx8"),
            p = a("Qed5"),
            g = a("VJXV"),
            m = a("mF5c"),
            h = a("ejvO"),
            b = a("Qxu5"),
            v = a("bOiT");

        function T(e) {
            let t, a, l, o, c = (0, r.c)(11),
                d = (0, i.z)(g.d),
                u = (0, i.z)(s.k),
                f = (0, i.z)(s.e),
                p = (0, i.z)(s.j);
            return d && "allowed" === u.status && null != f && null != p ? (c[0] !== f || c[1] !== p ? (t = {
                accountId: f,
                userId: p
            }, c[0] = f, c[1] = p, c[2] = t) : t = c[2], c[3] !== e.source ? (a = (0, h.a)(e.source), c[3] = e.source, c[4] = a) : a = c[4], c[5] !== e || c[6] !== a ? (l = (0, n.jsx)(y, {
                ...e
            }, a), c[5] = e, c[6] = a, c[7] = l) : l = c[7], c[8] !== t || c[9] !== l ? (o = (0, n.jsx)(i.b, {
                scope: _.c,
                value: t,
                children: l
            }), c[8] = t, c[9] = l, c[10] = o) : o = c[10], o) : null
        }

        function y(e) {
            let t, a, s, g, T = (0, r.c)(48),
                {
                    source: y,
                    sources: I,
                    conversationId: A,
                    messageId: E,
                    surface: C,
                    presentation: x
                } = e,
                w = (0, i.y)(_.c),
                N = (0, o.Z)(),
                O = (0, l.a)();
            T[0] !== y ? (t = (0, h.a)(y), T[0] = y, T[1] = t) : t = T[1];
            let R = t,
                {
                    data: S,
                    isError: j
                } = (0, i.x)(h.d, I),
                P = (0, i.x)(h.b, R),
                k = S?.[R];
            T[2] !== A || T[3] !== j || T[4] !== R || T[5] !== E || T[6] !== N || T[7] !== w || T[8] !== y || T[9] !== I || T[10] !== k || T[11] !== C ? (a = async (e, t) => {
                null == k || j || w.get(h.b, R) || (w.set(h.b, R, !0), await (0, m.b)(w, {
                    conversationId: A,
                    messageId: E,
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
                        source: y,
                        previous: k,
                        save: e,
                        surface: C,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await w.query.invalidate(h.d, I)
                }).finally(() => {
                    w.set(h.b, R, !1)
                }))
            }, T[2] = A, T[3] = j, T[4] = R, T[5] = E, T[6] = N, T[7] = w, T[8] = y, T[9] = I, T[10] = k, T[11] = C, T[12] = a) : a = T[12];
            let F = a;
            if (j) return null;
            if ("menuItem" === x) {
                let e, t, a = k?.favorite_id != null,
                    r = P || null == k;
                return T[13] !== F ? (e = () => void F(), T[13] = F, T[14] = e) : e = T[14], T[15] !== a || T[16] !== r || T[17] !== e ? (t = (0, n.jsx)(p.a, {
                    isFavorited: a,
                    disabled: r,
                    onSelect: e
                }), T[15] = a, T[16] = r, T[17] = e, T[18] = t) : t = T[18], t
            }
            if ("button" === x) {
                let e, t, a, r, i, l = k?.favorite_id != null;
                T[19] !== O ? (e = O.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), T[19] = O, T[20] = e) : e = T[20];
                let o = e;
                if (null == k) {
                    let e;
                    T[21] !== O ? (e = O.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status",
                        description: "Accessible status for a bookmark while checking whether the item is already saved"
                    }), T[21] = O, T[22] = e) : e = T[22], o = e
                } else if (l) {
                    let e;
                    T[23] !== O ? (e = O.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), T[23] = O, T[24] = e) : e = T[24], o = e
                }
                let s = P || null == k || void 0,
                    f = P || null == k;
                T[25] !== F ? (t = e => {
                    e.stopPropagation(), F()
                }, T[25] = F, T[26] = t) : t = T[26];
                let _ = l ? b.a : v.a;
                return T[27] !== _ ? (a = (0, n.jsx)(d.a, {
                    asset: _
                }), T[27] = _, T[28] = a) : a = T[28], T[29] !== l || T[30] !== o || T[31] !== s || T[32] !== f || T[33] !== t || T[34] !== a ? (r = (0, n.jsx)(c.a, {
                    "aria-label": o,
                    "aria-pressed": l,
                    "aria-busy": s,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), T[29] = l, T[30] = o, T[31] = s, T[32] = f, T[33] = t, T[34] = a, T[35] = r) : r = T[35], T[36] !== o || T[37] !== r ? (i = (0, n.jsx)(u.a, {
                    tooltipContent: o,
                    children: r
                }), T[36] = o, T[37] = r, T[38] = i) : i = T[38], i
            }
            let M = k?.favorite_id != null,
                G = null == k,
                L = k?.directory_id ?? null;
            return T[39] !== F ? (s = () => void F(), T[39] = F, T[40] = s) : s = T[40], T[41] !== P || T[42] !== M || T[43] !== G || T[44] !== L || T[45] !== s || T[46] !== F ? (g = (0, n.jsx)(f.a, {
                isSaved: M,
                isBusy: P,
                isCheckingStatus: G,
                selectedFolderId: L,
                visibility: "hover",
                onToggleFavorite: s,
                onSelectFolder: F
            }), T[41] = P, T[42] = M, T[43] = G, T[44] = L, T[45] = s, T[46] = F, T[47] = g) : g = T[47], g
        }
        a.d(t, {
            SearchImageFavorite: () => T
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("XlOJ"),
            r = a("r9HQ"),
            i = a("CpsU"),
            l = a.n(i),
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
            } = t, i = [...new Map(e.map(e => [h(e), e])).values()], o = a(u.m);
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
                            l = p.get(n.queryClient);
                        null == l && (l = new Map, p.set(n.queryClient, l));
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
        async function v(e, t) {
            let a, {
                    source: r,
                    previous: i,
                    save: l,
                    surface: o,
                    showToast: p,
                    onView: g
                } = t,
                m = () => e.get(s.e) === e.value.accountId && e.get(s.j) === e.value.userId,
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
                (0, _.a)(e, n.a, {
                    ...t,
                    eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                });
                try {
                    if (a = await e.get(u.m).safePost("/files/library/image-favorites", {
                            requestBody: r
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
                if (null == i.library_file_id || null == i.favorite_id || !await (0, f.e)(e, {
                        libraryFileId: i.library_file_id,
                        favoriteId: i.favorite_id,
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
            let T = a.library_file_id ?? i.library_file_id;
            if (null != T) {
                let t = {
                    queryKey: ["library-favorites-status", e.value.accountId, e.value.userId],
                    predicate: e => {
                        let t = e.queryKey[3];
                        return Array.isArray(t) && t.includes(T)
                    }
                };
                await e.queryClient.cancelQueries(t), e.queryClient.setQueriesData(t, e => null != e && T in e ? {
                    ...e,
                    [T]: {
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
            }), T ?? null
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
            a: () => A
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("ozm1"),
            l = a("FS1B"),
            o = a("iTtm"),
            s = a("zd8w"),
            c = a("Wf1j"),
            d = a("Cslg"),
            u = a("ygO2"),
            f = a("HOLv"),
            _ = a("SGsN"),
            p = a("CqQF"),
            g = a("yGJW"),
            m = a("OWtl"),
            h = a("FGv0"),
            b = a("hZax"),
            v = a("qsTb"),
            T = a("Kwur");

        function y(e, t, a) {
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
            u.observe(i, {
                attributes: !0,
                subtree: i !== e,
                attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden"]
            });
            let f = ["load", "pointerover", "pointerout", "focusin", "focusout", "transitionend"];
            for (let e of f) i.addEventListener(e, c, !0);

            function _() {
                for (let e of (o = !0, clearTimeout(n), d.disconnect(), u.disconnect(), f)) i.removeEventListener(e, c, !0);
                r.removeEventListener("visibilitychange", c)
            }
            return r.addEventListener("visibilitychange", c), _
        }
        var I = a("FRjT");

        function A(e) {
            let t, a, A, N, O, R, S, j, P, k, F, M, G, L, H, B, W, D, U, V, q = (0, r.c)(95),
                {
                    source: K,
                    conversationId: z,
                    messageId: Q,
                    imageIndex: Y,
                    contentReferenceStartIndex: $,
                    surface: X,
                    lightboxPresentation: J,
                    imageRef: Z,
                    imageReady: ee
                } = e,
                et = void 0 === J ? "classic" : J,
                ea = void 0 === ee || ee,
                en = (0, o.y)(m.a),
                er = (0, o.z)(d.e),
                ei = (0, o.z)(d.j),
                el = (0, c.a)();
            q[0] !== er || q[1] !== z || q[2] !== Q || q[3] !== K.content_url || q[4] !== ei ? (t = null != er && null != ei && null != z && null != Q && /^https?:\/\//i.test(K.content_url), q[0] = er, q[1] = z, q[2] = Q, q[3] = K.content_url, q[4] = ei, q[5] = t) : t = q[5];
            let eo = t,
                es = !eo;
            q[6] !== es ? (a = {
                disableExposureLog: es
            }, q[6] = es, q[7] = a) : a = q[7];
            let ec = (0, b.m)("274234392", a);
            q[8] !== ec ? (A = ec.get("placement", "off"), q[8] = ec, q[9] = A) : A = q[9];
            let ed = A,
                eu = "fullscreen" === ed || "inline_and_fullscreen" === ed ? ed : "off",
                ef = eo && ("inline_and_fullscreen" === eu || "fullscreen" === eu && "image_lightbox" === X),
                e_ = (0, s.useRef)(null),
                ep = (0, s.useRef)(null);
            q[10] !== $ || q[11] !== z || q[12] !== Y || q[13] !== Q || q[14] !== K.content_url ? (N = [z, Q, $, Y, K.content_url], q[10] = $, q[11] = z, q[12] = Y, q[13] = Q, q[14] = K.content_url, q[15] = N) : N = q[15];
            let eg = N.join(":"),
                em = (0, s.useRef)(null);
            q[16] === Symbol.for("react.memo_cache_sentinel") ? (O = new Set, q[16] = O) : O = q[16];
            let eh = (0, s.useRef)(O),
                [eb, ev] = (0, s.useState)(!1),
                eT = "image_tile" === X ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            q[17] !== Y ? (R = null == Y || Y < 0 ? void 0 : (0, i.d)(Y), q[17] = Y, q[18] = R) : R = q[18], q[19] !== $ ? (S = null == $ ? void 0 : (0, i.b)($), q[19] = $, q[20] = S) : S = q[20], q[21] !== eu || q[22] !== X || q[23] !== R || q[24] !== S ? (j = {
                surface: X,
                placement: eu,
                imageIndex: R,
                contentReferenceStartIndex: S
            }, q[21] = eu, q[22] = X, q[23] = R, q[24] = S, q[25] = j) : j = q[25], q[26] !== z || q[27] !== Q || q[28] !== eT || q[29] !== j ? (P = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eT,
                conversationId: z,
                messageId: Q,
                imageMetadata: j
            }, q[26] = z, q[27] = Q, q[28] = eT, q[29] = j, q[30] = P) : P = q[30];
            let ey = P;
            q[31] !== er || q[32] !== ey || q[33] !== en || q[34] !== ei ? (k = (e, t, a) => {
                en.get(d.e) === er && en.get(d.j) === ei && (0, g.a)(en, l.h, {
                    ...ey,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, q[31] = er, q[32] = ey, q[33] = en, q[34] = ei, q[35] = k) : k = q[35];
            let eI = k,
                eA = (0, s.useEffectEvent)(eI);
            if (q[36] === Symbol.for("react.memo_cache_sentinel") ? (F = () => () => {
                    e_.current?.abort()
                }, M = [], q[36] = F, q[37] = M) : (F = q[36], M = q[37]), (0, s.useEffect)(F, M), q[38] !== er || q[39] !== $ || q[40] !== z || q[41] !== eA || q[42] !== eo || q[43] !== Y || q[44] !== ea || q[45] !== Z || q[46] !== Q || q[47] !== eu || q[48] !== ef || q[49] !== K.content_url || q[50] !== X || q[51] !== ei ? (G = () => {
                    let e = em.current;
                    if (!eo || null == e) return;
                    let t = Z?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [er, ei, K.content_url, z, Q, $, Y, X, eu].join(":"),
                        n = crypto.randomUUID(),
                        r = null == t || eh.current.has(a) ? void 0 : y(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return ea && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            eh.current.add(a), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        i = !ef || eh.current.has(`${a}:control`) ? void 0 : y(e, w, () => {
                            eh.current.add(`${a}:control`), eA("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        r?.(), i?.()
                    }
                }, q[38] = er, q[39] = $, q[40] = z, q[41] = eA, q[42] = eo, q[43] = Y, q[44] = ea, q[45] = Z, q[46] = Q, q[47] = eu, q[48] = ef, q[49] = K.content_url, q[50] = X, q[51] = ei, q[52] = G) : G = q[52], q[53] !== er || q[54] !== $ || q[55] !== z || q[56] !== eo || q[57] !== Y || q[58] !== ea || q[59] !== Z || q[60] !== Q || q[61] !== eu || q[62] !== ef || q[63] !== K.content_url || q[64] !== X || q[65] !== ei ? (L = [er, ei, K.content_url, X, eu, ef, eo, Z, z, Q, Y, $, ea], q[53] = er, q[54] = $, q[55] = z, q[56] = eo, q[57] = Y, q[58] = ea, q[59] = Z, q[60] = Q, q[61] = eu, q[62] = ef, q[63] = K.content_url, q[64] = X, q[65] = ei, q[66] = L) : L = q[66], (0, s.useEffect)(G, L), !eo) return null;
            q[67] !== el ? (H = el.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image",
                description: "Short tooltip and accessible label for a web-search image Share button on an image tile or fullscreen viewer. Copies a public ChatGPT link containing only the selected image."
            }), q[67] = el, q[68] = H) : H = q[68];
            let eE = H;
            q[69] !== er || q[70] !== z || q[71] !== eI || q[72] !== eg || q[73] !== el || q[74] !== Q || q[75] !== en || q[76] !== K.content_url || q[77] !== ei ? (B = e => {
                if (e.stopPropagation(), null != e_.current || null == er || null == ei || null == z || null == Q) return;
                let t = new AbortController;
                e_.current = t, ev(!0);
                let a = () => {
                        if (t.signal.throwIfAborted(), en.get(d.e) !== er || en.get(d.j) !== ei) throw new DOMException("The active account changed", "AbortError")
                    },
                    n = crypto.randomUUID(),
                    r = crypto.randomUUID(),
                    i = ep.current?.accountId === er && ep.current?.userId === ei && ep.current.imageKey === eg ? ep.current : null,
                    l = i?.shareId,
                    o = () => ({
                        attemptId: r,
                        shareId: l,
                        usedExistingLink: null != i
                    }),
                    s = performance.now();
                eI("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", n, o()), eI("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", n, o());
                let c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    u = null == i ? (async () => {
                        a();
                        let e = await T.Request.safePost("/share/post", {
                            requestBody: {
                                attachments_to_create: [{
                                    kind: "web_image_reference",
                                    conversation_id: z,
                                    message_id: Q,
                                    content_url: K.content_url
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
                            accountId: er,
                            userId: ei,
                            imageKey: eg,
                            shareId: l,
                            link: r
                        }, r
                    })().catch(e => {
                        throw c = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(i.link).then(e => (a(), e));
                u.catch(x);
                let f = (0, h.a)(u, t.signal);
                f.catch(C), (async () => {
                    try {
                        await u, await f.then(E), a(), eI("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", n, {
                            ...o(),
                            durationMs: performance.now() - s
                        }), en.get(_.f).success(el.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied",
                            description: "Success toast after a public link to one web-search image is copied to the clipboard."
                        }))
                    } catch (a) {
                        let e = en.get(d.e) !== er || en.get(d.j) !== ei || t.signal.aborted || a instanceof DOMException && "AbortError" === a.name;
                        eI(e ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", n, {
                            ...o(),
                            failureReason: e ? void 0 : c,
                            durationMs: performance.now() - s
                        }), e || en.get(_.f).danger(el.formatMessage({
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
            }, q[69] = er, q[70] = z, q[71] = eI, q[72] = eg, q[73] = el, q[74] = Q, q[75] = en, q[76] = K.content_url, q[77] = ei, q[78] = B) : B = q[78], q[79] !== eb ? (W = eb ? null : (0, n.jsx)(f.a, {
                asset: I.a
            }), q[79] = eb, q[80] = W) : W = q[80], q[81] !== eb || q[82] !== eE || q[83] !== B || q[84] !== W ? (D = {
                type: "button",
                "aria-label": eE,
                "aria-busy": eb,
                loading: eb,
                onClick: B,
                children: W
            }, q[81] = eb, q[82] = eE, q[83] = B, q[84] = W, q[85] = D) : D = q[85];
            let eC = D,
                ex = "image_tile" === X ? "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "inline-flex";
            return q[86] !== eC || q[87] !== eE || q[88] !== et || q[89] !== ef || q[90] !== X ? (U = ef ? (0, n.jsx)(p.a, {
                tooltipContent: eE,
                children: "image_lightbox" === X && "overlay" === et ? (0, n.jsx)(v.b, {
                    ...eC,
                    uniform: !0
                }) : (0, n.jsx)(u.a, {
                    ...eC,
                    size: "inputIcon",
                    color: "mediaOverlay",
                    radius: "full"
                })
            }) : null, q[86] = eC, q[87] = eE, q[88] = et, q[89] = ef, q[90] = X, q[91] = U) : U = q[91], q[92] !== ex || q[93] !== U ? (V = (0, n.jsx)("span", {
                ref: em,
                className: ex,
                children: U
            }), q[92] = ex, q[93] = U, q[94] = V) : V = q[94], V
        }

        function E(e) {
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

        function s(e, t, a) {
            return t.has(o(e)) ? c(e, a) : e
        }

        function c(e, t) {
            let a = e.trim();
            return l()(a, {
                protocols: ["http", "https"]
            }) && "www.nice.org.uk" !== (0, r.b)((0, r.c)(a, "https://").host).hostname.toLowerCase() ? (0, r.d)(a, null != t && Object.keys(t).length > 0 ? t : {
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
                    r = n.messages;
                if (!r.some((e, a) => "assistant" === e.author.role && "string" == typeof e.recipient && r.slice(a + 1).some(a => "tool" === a.author.role && a.author.name === e.recipient && "multimodal_text" === a.content.content_type && a.content.parts.some(e => "string" != typeof e && "content_type" in e && "image_asset_pointer" === e.content_type && e.asset_pointer.split("?")[0] === t)))) return null;
                a = r
            } else {
                if (!(e.attachments.length > 0 && e.attachments.every(e => ("message_slice" === e.kind || "deep_research" === e.kind) && e.messages.length > 0))) return null;
                a = e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages : [])
            }
            let r = {
                    id: "y-root",
                    message: null,
                    parent: null,
                    children: []
                },
                i = [r],
                l = new Set([r.id]);
            for (let e of a) {
                if (!e.id || l.has(e.id)) return null;
                l.add(e.id), r.children = [e.id];
                let t = {
                    id: e.id,
                    message: e,
                    parent: r.id,
                    children: []
                };
                i.push(t), r = t
            }
            return {
                conversation_id: t,
                current_node: r.id,
                mapping: Object.fromEntries(i.map(e => [e.id, e])),
                linear_conversation: i,
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
            a: () => E,
            b: () => h,
            c: () => C,
            d: () => v,
            e: () => y,
            f: () => T,
            g: () => I,
            h: () => b,
            i: () => A
        });
        var n = a("mQnY"),
            r = a("Fjze"),
            i = a("iTtm"),
            l = a("HZfM"),
            o = a("yGJW"),
            s = a("tSEg"),
            c = a("yMDx"),
            d = a("MrGp"),
            u = a("ASxG"),
            f = a("w5lF"),
            _ = a("GDNt"),
            p = a("Kwur");
        async function g(e, t) {
            try {
                let {
                    post: a
                } = await p.Request.safeGet("/share/post/resolve/{post_id}", {
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
                if (t?.throwIfAborted(), !(a instanceof _.a)) throw a;
                let e = a.diagnosticError;
                if (e instanceof f.c) {
                    let t = u.object({
                        message: u.string().optional(),
                        reason: u.string().optional(),
                        code: u.string().optional()
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
        var m = a("GigQ");

        function h(e) {
            return e.attachments[0]?.kind !== "prompt_share"
        }
        let b = (0, i.q)(s.a, (e, t) => {
                let {
                    scope: a
                } = t, n = (0, l.J)("/s/:postId", a.value.pathname)?.params.postId;
                return {
                    enabled: null != n && !n.startsWith("cx_") && null != e && !e.isLoading,
                    queryKey: ["chatgpt-shared-post", n, e?.userId, e?.accountId],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return null == n ? Promise.resolve(null) : g(n, t)
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
            v = (0, i.d)(s.a, (e, t) => {
                let {
                    get: a,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, l.J)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: r,
                    isError: i
                } = a(b, e);
                return r?.status !== "ready" || i ? null : r.post
            }),
            T = (0, i.d)(s.a, (e, t) => {
                let {
                    auth: a,
                    conversationId: n
                } = e, {
                    get: r
                } = t;
                if (null == a || a.isLoading || null !== a.authMethod) return !1;
                let i = r(v, a),
                    l = r(d.Y, n);
                return null != i && l?.kind === "post" && l.forkFromSharedPost && l.post.id === i.id
            }),
            y = (0, i.v)(s.a, e => !1, {
                onMount: (e, t) => {
                    let a = null;
                    return t.watch(n => {
                        let {
                            get: r
                        } = n, {
                            auth: i,
                            conversationId: l
                        } = t.key, o = r(v, i);
                        if (null == o) {
                            let {
                                data: n,
                                isError: o
                            } = r(b, i);
                            null != a && (o || n?.status === "unavailable") && ((0, d.fb)(t, l, a), a = null), e(!1);
                            return
                        }
                        a = o.id, e(null != E(t, o, l))
                    })
                }
            }),
            I = (0, i.u)(s.a, []),
            A = (0, i.u)(s.a, () => null);

        function E(e, t, a) {
            let n = (0, m.a)(t, a);
            return null == n ? null : ((0, d.mb)(e, {
                conversation: n,
                conversationId: a,
                post: t
            }), a)
        }

        function C(e, t, a) {
            let i = t.attachments[0]?.kind;
            (0, o.a)(e, n.a, {
                postId: t.id,
                attachmentType: i,
                isAuthenticated: a
            }), (0, o.a)(e, r.b, {
                actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                postId: t.id,
                attachmentKind: i,
                legacyStatsigEventName: "chatgpt_share_post_download_clicked"
            })
        }
    }),
    Qed5: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("oyxz"),
            l = a("bqtn"),
            o = a("UxN3"),
            s = a("w4TZ"),
            c = a("Qxu5"),
            d = a("GNpT"),
            u = a("bOiT");

        function f(e) {
            let t, a, f, _ = (0, r.c)(9),
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
            }), _[0] = p, _[1] = t) : t = _[1], _[2] !== p ? (a = p ? (0, n.jsx)(i.a, {
                id: "library.favorites.remove",
                defaultMessage: "Remove from Favorites",
                description: "Action in a Library item menu or preview to remove the item from Favorites"
            }) : (0, n.jsx)(i.a, {
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
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(953353), a.e(608068)]).then(a.bind(a, "QxL2"))).InlineFlashcards
        }
        async function r() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(293453)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
        }
        async function i() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(894924), a.e(805697)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
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
            c: () => i,
            d: () => r,
            e: () => n
        })
    }),
    LOXd: (function(e, t, a) {
        var n = a("ASxG"),
            r = a("iKA6"),
            i = a("zSQm");
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
                r = new Map,
                i = new Map;
            for (let l of t ?? []) {
                let t = [];
                for (let {
                        webMetadata: i,
                        ...o
                    }
                    of _(e, l)) {
                    let e = n.get(o.sourceKey);
                    if (null == e) e = {
                        ...o,
                        number: a.length + 1
                    }, a.push(e), n.set(e.sourceKey, e), null != i && r.set(e.sourceKey, i);
                    else if (null != i) {
                        let t = r.get(e.sourceKey);
                        null != t && (t.title = t.title ?? i.title, t.sourceName = t.sourceName ?? i.sourceName, t.attribution = t.attribution ?? i.attribution, e.title = t.title ?? e.title, e.sourceName = t.sourceName ?? t.attribution ?? m(e.url), e.displayLabel = t.attribution ?? e.sourceName ?? e.title, e.authors = e.authors ?? o.authors, e.dateDisplay = e.dateDisplay ?? o.dateDisplay, e.publicationDateMs = e.publicationDateMs ?? o.publicationDateMs, e.snippet = e.snippet ?? o.snippet, o.tags?.length && (e.tags = [...new Set([...e.tags ?? [], ...o.tags])]))
                    }
                    t.includes(e) || t.push(e)
                }
                i.set(l, t)
            }
            return {
                sources: a,
                sourcesByReference: i
            }
        }

        function f(e, t, a, n, r) {
            let i = t?.[a];
            if (null == i || "hidden" === i.style || 0 === _(e, i).length) return;
            let l = e => null == n ? r : n[e],
                o = l(a),
                s = t?.[a - 1];
            if (null != s && "hidden" !== s.style && null != o && l(a - 1) === o && _(e, s).length > 0 && b(s, i)) return {
                isLeading: !1,
                sources: []
            };
            let c = u(e, t),
                d = new Set,
                f = i;
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
                if (r.a.safeParse(t).success) return [];
                let a = s.safeParse(t);
                if (!a.success) return [];
                let n = a.data,
                    i = n.medical_file_reference,
                    l = n.drug_file_reference;
                if (null == i && null == l) return [];
                let o = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? i?.source_url ?? i?.journal_homepage_url,
                    c = g(o),
                    d = null != l ? "U.S. National Library of Medicine: DailyMed" : i?.journal_name ?? i?.source_label,
                    u = null != l ? "DailyMed" : i?.source_label ?? d,
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
                            r = Number(a[2]),
                            i = Number(a[3]),
                            l = new Date(n, r - 1, i);
                        return l.getFullYear() === n && l.getMonth() === r - 1 && l.getDate() === i ? h(e, l) : t
                    }(e, l.effective_time) : i?.publication_year,
                    authors: i?.authors_display,
                    doi: i?.doi,
                    url: c,
                    iconUrl: g(i?.source_icon_url ?? i?.source_url ?? i?.journal_homepage_url ?? o),
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
                r = g(n.url);
            if (null == r) return;
            let i = n.source_name ?? n.attribution ?? m(r);
            return {
                webMetadata: {
                    title: n.title,
                    sourceName: n.source_name,
                    attribution: n.attribution
                },
                sourceKey: `url:${r.toLowerCase()}`,
                title: n.title ?? r,
                displayLabel: n.attribution ?? i ?? n.title ?? r,
                sourceName: i,
                authors: function(e) {
                    let t = e?.map(e => e.trim()).filter(Boolean);
                    if (t?.length) return 1 === t.length ? t[0] : 2 === t.length ? `${t[0]} & ${t[1]}` : `${t[0]}, et al.`
                }(n.authors),
                publicationDateMs: null == n.pub_date ? void 0 : 1e3 * n.pub_date,
                dateDisplay: null == n.pub_date ? void 0 : h(e, new Date(1e3 * n.pub_date)),
                url: r,
                iconUrl: r,
                snippet: n.snippet,
                tags: null == n.tags ? void 0 : [...new Set(n.tags.filter(Boolean))]
            }
        }

        function g(e) {
            if (!(null == e || /^file:\/\//i.test(e))) {
                try {
                    if ("localhost" === new URL(e).hostname) return
                } catch {}
                return (0, i.a)(e)
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