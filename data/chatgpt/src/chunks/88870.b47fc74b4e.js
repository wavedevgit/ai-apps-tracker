export const __rspack_esm_id = 88870;
export const __rspack_esm_ids = [88870];
export const __webpack_modules__ = {
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Bbed"),
            l = a("VTN2"),
            o = a("TUMj"),
            s = a("qviq");
        let c = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(675928), a.e(652500), a.e(877652), a.e(785932), a.e(672007)]).then(a.bind(a, "Kcyf"))).SitesPreviewContentReference);

        function d(e) {
            let t, a, r, d, u = (0, i.c)(19),
                {
                    bind: f,
                    onBindInteraction: p,
                    reference: _,
                    isStreaming: g,
                    readOnly: m,
                    withTopMargin: h
                } = e,
                b = void 0 !== m && m,
                v = (0, o.d)();
            if (null != _.data && "object" == typeof _.data && "preview_type" in _.data && "sites" === _.data.preview_type) {
                let e;
                return u[0] !== g || u[1] !== _ ? (e = (0, n.jsx)(c, {
                    reference: _,
                    isStreaming: g
                }), u[0] = g, u[1] = _, u[2] = e) : e = u[2], e
            }
            if (u[3] !== g || u[4] !== _ || u[5] !== v?.isStreaming) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e = l.a.safeParse(_);
                    if (!e.success) {
                        r = null;
                        break e
                    }({
                        data: t
                    } = e.data);
                    let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === g : g ?? !0)
                }
                u[3] = g, u[4] = _, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = r
            } else t = u[6], a = u[7], r = u[8];
            if (r !== Symbol.for("react.early_return_sentinel")) return r;
            let y = a && !0 !== t.render_immediately_during_streaming,
                T = t.display_name ?? t.title;
            return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== p || u[13] !== b || u[14] !== y || u[15] !== T || u[16] !== v || u[17] !== h ? (d = (0, n.jsx)(s.a, {
                bind: f,
                onBindInteraction: p,
                content: t.content,
                readOnly: b,
                isStreaming: y,
                title: T,
                styleMode: t.style_mode,
                turnContext: v,
                withTopMargin: h
            }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = p, u[13] = b, u[14] = y, u[15] = T, u[16] = v, u[17] = h, u[18] = d) : d = u[18], d
        }
        a.d(t, {
            a: () => d
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            i = a("Bbed"),
            r = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(652500), a.e(877652), a.e(743845), a.e(494725)]).then(a.bind(a, "UGmk"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(r.a, {})
        });
        a.d(t, {}, {
            a: l
        })
    }),
    zy7P: (function(e, t, a) {
        var n = a("nB3p"),
            i = a("XnlH"),
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
            a: () => ea
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
            p = a("HAEQ"),
            _ = a("WdQN"),
            g = a("YAi8"),
            m = a("XnlH"),
            h = a("Wf1j"),
            b = a("oyxz"),
            v = a("ygO2"),
            y = a("q5qu"),
            T = a("OWtl"),
            I = a("MrGp"),
            x = a("TUMj"),
            A = a("ldQM");

        function C(e) {
            let t, a = (0, i.c)(3),
                {
                    contentReferenceIndex: r
                } = e,
                l = (0, x.d)(),
                o = l?.contentReferenceMessageIds?.[r] ?? l?.messageId;
            return a[0] !== o || a[1] !== l ? (t = null == l || null == o || l.shouldBlockExternalEgress ? null : (0, n.jsx)(E, {
                conversationId: l.conversationId,
                messageId: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function E(e) {
            let t, a, r, l, o = (0, i.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, m.y)(T.a),
                u = (0, h.a)(),
                f = (0, m.x)(A.b, s),
                p = (0, m.x)(A.e, s);
            return (0, m.x)(I.X, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || p !== c ? null : (o[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions",
                description: "Accessible label for the button under a ChatGPT assistant message that reopens the questionnaire the user dismissed"
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== d ? (a = () => d.set(A.e, s, null), o[2] = s, o[3] = d, o[4] = a) : a = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(b.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions",
                description: "Button under the current ChatGPT assistant message after its questionnaire was dismissed; clicking reopens the questions"
            }), o[5] = r) : r = o[5], o[6] !== t || o[7] !== a ? (l = (0, n.jsx)(y.a, {
                children: (0, n.jsx)(v.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: r
                })
            }), o[6] = t, o[7] = a, o[8] = l) : l = o[8], l)
        }
        var w = a("YgzY"),
            N = a("j8Yf"),
            j = a("ASxG"),
            R = a("LtEv"),
            O = a("EUy6"),
            S = a("AyL4"),
            k = a("WAdu"),
            P = a("tSEg"),
            F = a("WFY2");
        let M = j.object({
            type: j.literal("client_defined_widget"),
            category: j.literal("beacon_card"),
            data: j.object({
                widget_type: j.literal("beacon_card"),
                display_mode: j.literal("block"),
                title: j.string().max(200).refine(e => e.trim().length > 0).nullish(),
                text: j.string().max(2e3).refine(e => e.trim().length > 0),
                button_label: j.string().max(80).refine(e => e.trim().length > 0),
                prompt: j.string().max(4e3).refine(e => e.trim().length > 0).nullish(),
                url: j.url({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(e => null != e.prompt != (null != e.url))
        });

        function G(e) {
            let t, a, r, l, s, c, d, u, f, p, _ = (0, i.c)(33),
                {
                    contentReferenceIndex: g,
                    reference: b,
                    isStreaming: v,
                    readOnly: y
                } = e,
                T = (0, m.y)(P.a),
                I = (0, x.d)(),
                A = (0, h.a)(),
                C = (0, o.useContext)(k.a),
                [E, w] = (0, o.useState)(!1),
                N = (0, o.useRef)(null);
            _[0] !== b ? (t = M.safeParse(b), _[0] = b, _[1] = t) : t = _[1];
            let j = t;
            _[2] !== g || _[3] !== I ? (a = (0, x.c)(I, g), _[2] = g, _[3] = I, _[4] = a) : a = _[4];
            let F = a,
                G = F?.messageId,
                W = I?.conversationId,
                H = j.success ? j.data.data.url : void 0,
                D = !0 === y || !0 === v || null == I || I.isStreaming || !0 === I.isReadOnly || I.shouldBlockExternalEgress || null == F || null != H && "restricted" === C;
            if (_[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => () => N.current?.abort(), _[5] = r) : r = _[5], _[6] !== W || _[7] !== D || _[8] !== T || _[9] !== G || _[10] !== H ? (l = [W, D, T, G, H], _[6] = W, _[7] = D, _[8] = T, _[9] = G, _[10] = H, _[11] = l) : l = _[11], (0, o.useLayoutEffect)(r, l), !j.success || E) return null;
            let {
                title: U,
                text: V,
                button_label: q,
                prompt: K
            } = j.data.data;
            return _[12] !== A ? (s = A.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon",
                description: "Accessible label for hiding an inline beacon card in a ChatGPT response"
            }), _[12] = A, _[13] = s) : s = _[13], _[14] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                N.current?.abort(), w(!0)
            }, _[14] = c) : c = _[14], _[15] !== s ? (d = {
                ariaLabel: s,
                onClick: c
            }, _[15] = s, _[16] = d) : d = _[16], _[17] !== D || _[18] !== K || _[19] !== T || _[20] !== F || _[21] !== I || _[22] !== H ? (u = () => {
                if (!D && null != I && null != F) {
                    if (null != H) {
                        N.current?.abort();
                        let e = new AbortController;
                        N.current = e;
                        let t = (0, O.e)(T, {
                            type: "open_url",
                            payload: {
                                url: H,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: I,
                            sourceMessageId: F.messageId,
                            signal: e.signal
                        });
                        !1 !== t && t.catch(B);
                        return
                    }
                    null != K && (0, R.submitChatGptFollowUp)(T, {
                        conversationId: I.conversationId,
                        isTemporaryChat: I.isTemporaryChat ?? !1,
                        parentMessageId: F.messageId,
                        prompt: K
                    }).catch(L)
                }
            }, _[17] = D, _[18] = K, _[19] = T, _[20] = F, _[21] = I, _[22] = H, _[23] = u) : u = _[23], _[24] !== q || _[25] !== D || _[26] !== u ? (f = {
                label: q,
                disabled: D,
                onClick: u
            }, _[24] = q, _[25] = D, _[26] = u, _[27] = f) : f = _[27], _[28] !== d || _[29] !== f || _[30] !== V || _[31] !== U ? (p = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(S.a, {
                    variant: "beacon",
                    title: U,
                    description: V,
                    dismissAction: d,
                    primaryAction: f
                })
            }), _[28] = d, _[29] = f, _[30] = V, _[31] = U, _[32] = p) : p = _[32], p
        }

        function L(e) {
            F.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function B(e) {
            F.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var W = a("dhxJ"),
            H = a("ZUun"),
            D = a("VB5Q");

        function U(e) {
            let t, a, r, l, s, c, d, u = (0, i.c)(32),
                {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    readOnly: _,
                    reference: g
                } = e,
                {
                    data: h
                } = g,
                b = (0, x.d)(),
                v = p ?? (b?.isStreaming === !0 && (b.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                y = (0, o.useContext)(k.a),
                T = b?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== T || u[2] !== b?.contentReferenceMessageIds ? (t = null == T ? f : b?.contentReferenceMessageIds?.slice(0, f).filter(e => e === T).length, u[0] = f, u[1] = T, u[2] = b?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let A = t,
                C = b?.conversationId,
                E = T ?? b?.messageId;
            u[4] !== A || u[5] !== C || u[6] !== E ? (a = {
                conversationId: C,
                messageId: E,
                codeBlockIndex: A
            }, u[4] = A, u[5] = C, u[6] = E, u[7] = a) : a = u[7];
            let w = (0, m.x)(I.u, a);
            u[8] !== A || u[9] !== y || u[10] !== v || u[11] !== _ || u[12] !== w || u[13] !== T || u[14] !== b ? (r = b && {
                ...b,
                messageId: T ?? b.messageId,
                codeBlocks: (0, W.a)({
                    code_blocks: null == w || null == A ? void 0 : {
                        [A]: w
                    }
                }) ?? (null == T || T === b.messageId ? b.codeBlocks : void 0),
                isReadOnly: _ || b.isReadOnly,
                isStreaming: v,
                shouldBlockExternalEgress: b.shouldBlockExternalEgress || "restricted" === y
            }, u[8] = A, u[9] = y, u[10] = v, u[11] = _, u[12] = w, u[13] = T, u[14] = b, u[15] = r) : r = u[15], u[16] !== h ? (l = (0, D.a)(h), u[16] = h, u[17] = l) : l = u[17];
            let N = h.model_previewable ? "preview" : void 0;
            return u[18] !== h.language ? (s = h.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = h.language, u[19] = s) : s = u[19], u[20] !== A || u[21] !== h.content || u[22] !== h.editable || u[23] !== h.interactive || u[24] !== v || u[25] !== l || u[26] !== N || u[27] !== s ? (c = (0, n.jsx)(H.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: l,
                codeBlockIndex: A,
                codeBlockInfo: N,
                content: h.content,
                editable: h.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: v,
                isInteractive: h.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1
            }), u[20] = A, u[21] = h.content, u[22] = h.editable, u[23] = h.interactive, u[24] = v, u[25] = l, u[26] = N, u[27] = s, u[28] = c) : c = u[28], u[29] !== c || u[30] !== r ? (d = (0, n.jsx)(x.b.Provider, {
                value: r,
                children: c
            }), u[29] = c, u[30] = r, u[31] = d) : d = u[31], d
        }
        var V = a("DIH2");

        function q(e) {
            let t, a, r, l, o, s, c = (0, i.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, V.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, V.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                p = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                _ = p && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== p || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (r = p && "inline_anchor" !== d.data.presentation ? (0, V.b)(d.data.pronunciation_hint) : null, c[5] = p, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = r) : r = c[8];
            let g = r;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== g ? (l = null != g && g !== u ? (0, n.jsx)(b.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                description: "Readable fallback while pronunciation controls load or fail to load. The text placeholder is the original word or phrase, and pronunciation is its phonetic pronunciation hint. Both values come from the conversation and should be preserved; punctuation may be localized.",
                values: {
                    text: u,
                    pronunciation: g
                }
            }) : u, c[9] = u, c[10] = g, c[11] = l) : l = c[11], c[12] !== u || c[13] !== f ? (o = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = o) : o = c[14], c[15] !== _ || c[16] !== l || c[17] !== o ? (s = (0, n.jsxs)(_, {
                children: [l, o]
            }), c[15] = _, c[16] = l, c[17] = o, c[18] = s) : s = c[18], s)
        }
        var K = a("yxxQ"),
            z = a("VTN2");
        let Q = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                suspendToParent: !0,
                errorFallback: q
            }),
            Y = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(714056), a.e(445355), a.e(168420), a.e(749876), a.e(145701), a.e(128549)]).then(a.bind(a, "fkRj"))).ChatGptTranslationContentReference, {
                suspendToParent: !0,
                errorFallback: q
            }),
            X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(851456), a.e(974872), a.e(170947), a.e(715515), a.e(339581), a.e(592453), a.e(720436), a.e(329804), a.e(819550), a.e(678608), a.e(872467), a.e(834601)]).then(a.bind(a, "KKwe"))).DilWritingBlock, p.a),
            $ = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(714056), a.e(445355), a.e(168420), a.e(749876), a.e(145701), a.e(862301)]).then(a.bind(a, "fmfw"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(K.a, {})
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
                    return (0, n.jsx)(N.a, {
                        reference: t
                    })
                }
            }),
            Z = (0, s.a)(r.e, {
                fallback: (0, n.jsx)(c.a, {
                    className: "w-full"
                }),
                errorFallback: e => {
                    let {
                        reference: t
                    } = e;
                    return (0, n.jsx)(N.a, {
                        reference: t
                    })
                }
            }),
            ee = (0, o.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(990054), a.e(714056), a.e(303481), a.e(445355), a.e(168420), a.e(749876), a.e(145701), a.e(119818)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            et = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function ea(e) {
            let t, a, r, l, s, c = (0, i.c)(83),
                {
                    appBlockTopMargin: d,
                    bind: f,
                    contentReferenceIndex: p,
                    isLastNodeInMessage: m,
                    isStreaming: h,
                    mapFullscreenMode: b,
                    readOnly: v,
                    reference: y
                } = e;
            if ("beacon_card" === y.category) {
                let e;
                return c[0] !== p || c[1] !== h || c[2] !== v || c[3] !== y ? (e = (0, n.jsx)(G, {
                    contentReferenceIndex: p,
                    reference: y,
                    isStreaming: h,
                    readOnly: v
                }), c[0] = p, c[1] = h, c[2] = v, c[3] = y, c[4] = e) : e = c[4], e
            }
            if ("suggest_work_handoff" === y.category) {
                let e;
                return c[5] !== p || c[6] !== h || c[7] !== v ? (e = v || h ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(et, {
                        contentReferenceIndex: p
                    })
                }), c[5] = p, c[6] = h, c[7] = v, c[8] = e) : e = c[8], e
            }
            if ("health_chart" === y.category) {
                let e;
                return c[9] !== p || c[10] !== h || c[11] !== y ? (e = (0, n.jsx)(J, {
                    contentReferenceIndex: p,
                    reference: y,
                    isStreaming: h
                }), c[9] = p, c[10] = h, c[11] = y, c[12] = e) : e = c[12], e
            }
            if ("learning_flashcards" === y.category) {
                let e;
                return c[13] !== p || c[14] !== h || c[15] !== v || c[16] !== y ? (e = (0, n.jsx)(Z, {
                    contentReferenceIndex: p,
                    reference: y,
                    isStreaming: h,
                    readOnly: v
                }), c[13] = p, c[14] = h, c[15] = v, c[16] = y, c[17] = e) : e = c[17], e
            }
            if (w.b.safeParse(y).success) {
                let e;
                return c[18] !== p ? (e = (0, n.jsx)(C, {
                    contentReferenceIndex: p
                }), c[18] = p, c[19] = e) : e = c[19], e
            }
            if ("writing_block" === y.category) {
                let e;
                return c[20] !== p || c[21] !== m || c[22] !== h || c[23] !== v || c[24] !== y.data ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: p,
                    data: y.data,
                    isLastNodeInMessage: m,
                    isStreaming: h,
                    readOnly: v
                }), c[20] = p, c[21] = m, c[22] = h, c[23] = v, c[24] = y.data, c[25] = e) : e = c[25], e
            }
            if ("map" === y.category) {
                let e;
                return c[26] !== p || c[27] !== h || c[28] !== b || c[29] !== y ? (e = (0, n.jsx)(g.a, {
                    contentReferenceIndex: p,
                    fullscreenMode: b,
                    isStreaming: h,
                    reference: y
                }), c[26] = p, c[27] = h, c[28] = b, c[29] = y, c[30] = e) : e = c[30], e
            }
            if ("app_block" === y.category) {
                let e;
                return c[31] !== d || c[32] !== f || c[33] !== h || c[34] !== v || c[35] !== y ? (e = (0, n.jsx)(_.a, {
                    bind: f,
                    reference: y,
                    isStreaming: h,
                    readOnly: v,
                    withTopMargin: d
                }), c[31] = d, c[32] = f, c[33] = h, c[34] = v, c[35] = y, c[36] = e) : e = c[36], e
            }
            if ("ledger_monetary_value" === y.category) {
                let e, t;
                c[37] !== y ? (e = z.f.safeParse(y), c[37] = y, c[38] = e) : e = c[38];
                let a = e;
                return c[39] !== y || c[40] !== a.data || c[41] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(N.a, {
                    reference: y
                }), c[39] = y, c[40] = a.data, c[41] = a.success, c[42] = t) : t = c[42], t
            }
            c[43] !== y ? (t = z.d.safeParse(y), c[43] = y, c[44] = t) : t = c[44];
            let T = t;
            if (T.success) {
                let e;
                return c[45] !== T.data || c[46] !== p || c[47] !== h || c[48] !== v ? (e = (0, n.jsx)(U, {
                    contentReferenceIndex: p,
                    isStreaming: h,
                    readOnly: v,
                    reference: T.data
                }), c[45] = T.data, c[46] = p, c[47] = h, c[48] = v, c[49] = e) : e = c[49], e
            }
            c[50] !== y ? (a = z.e.safeParse(y), c[50] = y, c[51] = a) : a = c[51];
            let I = a;
            if (I.success) {
                let e;
                return c[52] !== p || c[53] !== I.data ? (e = (0, n.jsx)(en, {
                    contentReferenceIndex: p,
                    reference: I.data
                }), c[52] = p, c[53] = I.data, c[54] = e) : e = c[54], e
            }
            c[55] !== y ? (r = z.g.safeParse(y), c[55] = y, c[56] = r) : r = c[56];
            let x = r;
            if (x.success) {
                let e, t, a;
                c[57] !== x.data ? (e = (0, n.jsx)(q, {
                    reference: x.data
                }), c[57] = x.data, c[58] = e) : e = c[58];
                let i = !0 === h;
                return c[59] !== p || c[60] !== x.data || c[61] !== i ? (t = (0, n.jsx)(Q, {
                    contentReferenceIndex: p,
                    isStreaming: i,
                    reference: x.data
                }), c[59] = p, c[60] = x.data, c[61] = i, c[62] = t) : t = c[62], c[63] !== e || c[64] !== t ? (a = (0, n.jsx)(o.Suspense, {
                    fallback: e,
                    children: t
                }), c[63] = e, c[64] = t, c[65] = a) : a = c[65], a
            }
            c[66] !== y ? (l = z.h.safeParse(y), c[66] = y, c[67] = l) : l = c[67];
            let A = l;
            if (A.success) {
                let e, t, a;
                return c[68] !== A.data ? (e = (0, n.jsx)(q, {
                    reference: A.data
                }), c[68] = A.data, c[69] = e) : e = c[69], c[70] !== p || c[71] !== h || c[72] !== A.data ? (t = (0, n.jsx)(Y, {
                    contentReferenceIndex: p,
                    isStreaming: h,
                    reference: A.data
                }), c[70] = p, c[71] = h, c[72] = A.data, c[73] = t) : t = c[73], c[74] !== e || c[75] !== t ? (a = (0, n.jsx)(o.Suspense, {
                    fallback: e,
                    children: t
                }), c[74] = e, c[75] = t, c[76] = a) : a = c[76], a
            }
            if (!z.c.safeParse(y).success) {
                let e;
                return c[77] !== y ? (e = (0, n.jsx)(N.c, {
                    reference: y
                }), c[77] = y, c[78] = e) : e = c[78], e
            }
            return c[79] !== p || c[80] !== h || c[81] !== y ? (s = (0, n.jsx)(ei, {
                contentReferenceIndex: p,
                reference: y,
                isStreaming: h
            }), c[79] = p, c[80] = h, c[81] = y, c[82] = s) : s = c[82], s
        }

        function en(e) {
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
            return l[2] !== s || l[3] !== u || l[4] !== d || l[5] !== c ? (a = d && null != ee ? (0, n.jsx)(ee, {
                contentReferenceIndex: s,
                reference: c
            }) : u, l[2] = s, l[3] = u, l[4] = d, l[5] = c, l[6] = a) : a = l[6], l[7] !== u || l[8] !== a ? (r = (0, n.jsx)(o.Suspense, {
                fallback: u,
                children: a
            }), l[7] = u, l[8] = a, l[9] = r) : r = l[9], r
        }

        function ei(e) {
            let t, a, r = (0, i.c)(6),
                [l] = (0, o.useState)(er);
            return r[0] !== e || r[1] !== l ? (t = (0, n.jsx)($, {
                ...e,
                widgetRefSeenAtMs: l
            }), r[0] = e, r[1] = l, r[2] = t) : t = r[2], r[3] !== e.contentReferenceIndex || r[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), r[3] = e.contentReferenceIndex, r[4] = t, r[5] = a) : a = r[5], a
        }

        function er() {
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
            p = n.object({
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
            _ = n.object({
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
            a: p,
            b: c,
            c: d,
            d: u,
            e: _,
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
            ChatGptFileReference: () => e_
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Rzcw"),
            l = a("nB3p"),
            o = a("BOYb"),
            s = a("XnlH"),
            c = a("zd8w"),
            d = a("v7qY"),
            u = a("Wf1j"),
            f = a("oyxz"),
            p = a("mG2A"),
            _ = a("w7Qu"),
            g = a("O0M0"),
            m = a("w9uH"),
            h = a("NkEl"),
            b = a("ygO2"),
            v = a("bf6R"),
            y = a("VL1D"),
            T = a("RNul"),
            I = a("SGsN"),
            x = a("CqQF"),
            A = a("bWX0"),
            C = a("nz9r"),
            E = a("dL8H"),
            w = a("jCsa"),
            N = a("MExO"),
            j = a("vYmP"),
            R = a("ZjkF"),
            O = a("WAdu"),
            S = a("cckT"),
            k = a("S1CS"),
            P = a("Ph61"),
            F = a("LOXd"),
            M = a("coFq"),
            G = a("GaA7"),
            L = a("tSEg"),
            B = a("WFY2"),
            W = a("zsxQ"),
            H = a("vldH"),
            D = a("zy7P"),
            U = a("u4MG"),
            V = a("MrGp"),
            q = a("TUMj"),
            K = a("rxj0"),
            z = a("zamV"),
            Q = a("Ul98"),
            Y = a("XkLc"),
            X = a("c9lJ"),
            $ = a("gsAl"),
            J = a("ahg9"),
            Z = a("j8Yf"),
            ee = a("t2JB"),
            et = a("PO1G"),
            ea = a("DIH2");

        function en(e) {
            let t, a, r, o, d, u, f, p, _ = (0, i.c)(34),
                {
                    reference: g
                } = e,
                m = (0, s.y)(L.a),
                h = (0, q.d)(),
                b = "restricted" === (0, c.useContext)(O.a);
            _[0] !== g.name ? (t = (0, ea.b)(g.name), _[0] = g.name, _[1] = t) : t = _[1];
            let y = t,
                T = (0, ee.b)(g),
                I = (0, c.useRef)(null),
                x = h?.savedContentResponse,
                A = h?.shouldBlockExternalEgress === !0,
                C = null == x || null == T || A ? null : (0, l.l)(T);
            _[2] !== C || _[3] !== x || _[4] !== m ? (a = () => {
                (0, P.a)(m, I, x, C)
            }, _[2] = C, _[3] = x, _[4] = m, _[5] = a) : a = _[5];
            let E = (0, c.useEffectEvent)(a);
            _[6] !== E ? (r = () => {
                E()
            }, _[6] = E, _[7] = r) : r = _[7];
            let w = C?.id,
                N = C?.kind,
                R = x?.conversationId,
                S = x?.responseId,
                k = x?.savedContentBackend;
            if (_[8] !== w || _[9] !== N || _[10] !== R || _[11] !== S || _[12] !== k ? (o = [w, N, R, S, k], _[8] = w, _[9] = N, _[10] = R, _[11] = S, _[12] = k, _[13] = o) : o = _[13], (0, c.useEffect)(r, o), null == y || null == T) {
                let e;
                return _[14] !== g ? (e = (0, n.jsx)(Z.a, {
                    reference: g
                }), _[14] = g, _[15] = e) : e = _[15], e
            }
            _[16] !== C || _[17] !== T || _[18] !== A || _[19] !== y || _[20] !== b || _[21] !== x || _[22] !== m ? (d = A ? (0, n.jsx)(j.a, {
                ariaLabel: y,
                disabled: !0,
                icon: (0, n.jsx)(v.td, {}),
                isTerminalInline: !0,
                label: y,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: ei
            }) : (0, n.jsx)(j.a, {
                ariaLabel: y,
                href: T,
                icon: (0, n.jsx)(v.td, {}),
                isTerminalInline: !0,
                label: y,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, P.a)(m, I, x, C, !0)
                }
            }), _[16] = C, _[17] = T, _[18] = A, _[19] = y, _[20] = b, _[21] = x, _[22] = m, _[23] = d) : d = _[23];
            let F = d;
            _[24] !== y || _[25] !== g ? (u = function(e, t) {
                let a = (0, ea.b)(e.matched_text),
                    n = (0, ea.b)(e.library_path);
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
            }(g, y), _[24] = y, _[25] = g, _[26] = u) : u = _[26];
            let M = u;
            if (null == M) return F;
            _[27] !== F || _[28] !== M.prefix || _[29] !== M.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [M.prefix, F, M.suffix]
            }), _[27] = F, _[28] = M.prefix, _[29] = M.suffix, _[30] = f) : f = _[30];
            let G = f;
            return _[31] !== G || _[32] !== M.isInlineCode ? (p = M.isInlineCode ? (0, n.jsx)("code", {
                children: G
            }) : G, _[31] = G, _[32] = M.isInlineCode, _[33] = p) : p = _[33], p
        }

        function ei() {}
        var er = a("Bbed"),
            el = a("ePaQ"),
            eo = a("JAYD"),
            es = a("Nfif");
        let ec = (0, er.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(80675)]).then(a.bind(a, "kcNG"))).PrivateSourceFollowUp);

        function ed(e) {
            let t, a, r, l, o, d, u, f = (0, i.c)(29),
                {
                    source: p
                } = e,
                _ = (0, s.y)(L.a),
                g = (0, q.d)(),
                [m, h] = (0, c.useState)(""),
                [b, v] = (0, c.useState)(!1),
                y = (0, c.useContext)(O.a);
            f[0] !== y || f[1] !== _.value ? (t = null != (0, L.f)(_.value) && "restricted" !== y, f[0] = y, f[1] = _.value, f[2] = t) : t = f[2];
            let T = t,
                I = (0, s.x)(T ? eo.a : null, p.connector_id),
                x = !T || !I;
            f[3] !== x || f[4] !== b || f[5] !== m || f[6] !== p || f[7] !== g ? (a = x || null == g || g.isReadOnly || g.shouldBlockExternalEgress || g.renderRestrictedWidgets || g.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(ec, {
                source: p,
                question: m,
                onQuestionChange: h,
                turn: g,
                pending: b,
                onPendingChange: v
            }, p.id), f[3] = x, f[4] = b, f[5] = m, f[6] = p, f[7] = g, f[8] = a) : a = f[8];
            let A = p.snippet ?? void 0;
            f[9] !== p.name || f[10] !== A ? (r = {
                title: p.name,
                body: A
            }, f[9] = p.name, f[10] = A, f[11] = r) : r = f[11], f[12] !== p.name || f[13] !== r ? (l = {
                title: p.name,
                hoverCard: r
            }, f[12] = p.name, f[13] = r, f[14] = l) : l = f[14], f[15] !== p.connector_id ? (o = (0, n.jsx)(es.a, {
                appId: p.connector_id
            }), f[15] = p.connector_id, f[16] = o) : o = f[16];
            let C = p.medical_file_reference?.source_label ?? p.name;
            return f[17] !== x || f[18] !== p.name || f[19] !== o || f[20] !== C ? (d = (0, n.jsx)(j.a, {
                ariaLabel: p.name,
                disabled: x,
                icon: o,
                label: C,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: eu
            }), f[17] = x, f[18] = p.name, f[19] = o, f[20] = C, f[21] = d) : d = f[21], f[22] !== x || f[23] !== b || f[24] !== p.connector_id || f[25] !== a || f[26] !== l || f[27] !== d ? (u = (0, n.jsx)(el.a, {
                disabled: x,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: b,
                followUp: a,
                metadata: l,
                sourceAppId: p.connector_id,
                children: d
            }), f[22] = x, f[23] = b, f[24] = p.connector_id, f[25] = a, f[26] = l, f[27] = d, f[28] = u) : u = f[28], u
        }

        function eu(e) {
            return e.currentTarget.focus()
        }
        var ef = a("iKA6");
        let ep = (0, s.q)(L.a, (e, t) => {
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
                        let e = await (0, m.b)(r, a, i);
                        if (null != e && "tex" === (0, A.c)(e.path)) return {
                            file: e,
                            originalSource: !1
                        };
                        let t = await (0, m.a)(r, a, n, i);
                        return null == t ? null : {
                            file: t,
                            originalSource: !0
                        }
                    }
                    return null
                }
            }
        });

        function e_(e) {
            let t, a, r, l = (0, i.c)(17);
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
            return l[13] !== c || l[14] !== e.reference || l[15] !== d ? (r = (0, n.jsx)(p.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: d
            }), l[13] = c, l[14] = e.reference, l[15] = d, l[16] = r) : r = l[16], r
        }

        function eg(e) {
            let {
                children: t
            } = e, a = (0, q.d)(), n = (0, s.x)(V.P, a?.conversationId ?? null);
            return null == n || (0, U.a)(n) ? t : null
        }

        function em(e) {
            var t, a, p, m;
            let U, en, ei, er, el, eo, es, ec, ed, eu, ef = (0, i.c)(46),
                {
                    children: e_,
                    contentReferenceIndex: eg,
                    fileNavigationIndex: em,
                    presentation: ev,
                    reference: ey,
                    showSaveAs: eT
                } = e,
                eI = void 0 === ev ? "auto" : ev,
                ex = (0, s.y)(L.a),
                eA = (0, u.a)(),
                eC = (0, q.d)(),
                eE = (0, q.c)(eC, eg)?.messageId ?? eC?.messageId,
                ew = (0, c.useContext)(g.a),
                eN = "restricted" === (0, c.useContext)(O.a),
                [ej, eR] = (0, c.useState)(),
                eO = (0, c.useRef)(null),
                eS = null != ej,
                ek = ew?.accountId ?? null,
                eP = ew?.userId ?? null;
            ef[0] !== ey.cloud_doc_url || ef[1] !== ey.codex_file_citation_authoritative || ef[2] !== eN || ef[3] !== eC?.shouldBlockExternalEgress ? (U = eC?.shouldBlockExternalEgress !== !1 || eN || !0 !== ey.codex_file_citation_authoritative ? null : (0, ea.b)(ey.cloud_doc_url), ef[0] = ey.cloud_doc_url, ef[1] = ey.codex_file_citation_authoritative, ef[2] = eN, ef[3] = eC?.shouldBlockExternalEgress, ef[4] = U) : U = ef[4], ef[5] !== ek || ef[6] !== eP || ef[7] !== U ? (en = {
                accountId: ek,
                userId: eP,
                url: U
            }, ef[5] = ek, ef[6] = eP, ef[7] = U, ef[8] = en) : en = ef[8];
            let {
                data: eF
            } = (0, s.x)(D.a, en), eM = eF ?? (0, ee.a)(ey), eG = "library_folder" === ey.source_type, eL = (0, H.b)(ey, {
                fileName: eM ?? void 0,
                messageId: eE
            }), eB = eC?.conversationId, eW = (0, X.a)(ex.value.pathname)?.params.sharedConversationId, eH = null == eB ? null : ex.get(V.W, eB);
            null != eW && eW === eB && (eH = eW);
            let eD = ex.get($.d, ew)?.id,
                eU = (0, H.e)(ey),
                eV = null != eL && eC?.shouldBlockExternalEgress === !0,
                eq = null != eL && null != eM && !eV && (0, w.a)({
                    fileName: "mounted-library" === eL.type ? eL.sourceFileName ?? eM : eM,
                    mimeType: "mounted-library" === eL.type ? eL.mimeType ?? eU : eU,
                    mountedLibraryFileId: "mounted-library" === eL.type ? eL.mountedLibraryFileId : void 0
                }),
                eK = eL?.type === "mounted-library" || null != eM && (0, W.a)(eM, eU),
                ez = null != eL && (!eq && "mounted-library" === eL.type && null == eH && null == eD || (0, Y.canOpenChatGptFilePreview)({
                    browserPreview: eK
                })),
                eQ = !eV && (eq || ez),
                eY = G.appServices?.latex != null && "artifact-row" === eI && null != eM && "tex" === (0, A.c)(eM) && eQ && eC?.isReadOnly !== !0 && null == eH && null == eD,
                {
                    data: eX
                } = (0, s.x)(ep, {
                    conversationId: eB,
                    messageId: eC?.messageId,
                    target: eL
                }, {
                    enabled: eY
                }),
                e$ = eY && null != eX,
                eJ = (void 0 === eT || eT) && eq && (0, Y.a)(),
                eZ = (0, J.a)(ey),
                e0 = {
                    fileName: eM ?? void 0,
                    mimeType: (0, H.c)(ey) ?? (eL?.type === "mounted-library" ? eL.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eL?.type === "mounted-library" ? eL.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, H.d)(ey),
                    sourceUrl: eZ ?? void 0
                },
                e1 = "library_folder" === ey.source_type ? (0, ee.b)(ey) : eZ,
                e2 = null != e1 && eC?.shouldBlockExternalEgress === !0,
                e5 = null == eL || null == eM ? null : (0, Q.a)(eL, eM, eU),
                e8 = null == e5 ? null : (0, N.c)(e5)?.sourceUrl,
                e4 = eV || e2 ? null : e8 ?? (eq || e2 ? null : e1),
                e6 = eC?.savedContentResponse,
                e3 = null;
            null != e6 && null != eM && (eQ || null != e4) && eL?.type !== "mounted-library" && ("library_folder" === ey.source_type && null != e4 ? e3 = (0, l.l)(e4) : null != eL && "libraryFileId" in eL && (e3 = (0, l.k)(eL.libraryFileId)));
            let e7 = (0, c.useEffectEvent)(() => {
                (0, P.a)(ex, eO, e6, e3)
            });
            ef[9] !== e7 ? (ei = () => {
                e7()
            }, ef[9] = e7, ef[10] = ei) : ei = ef[10];
            let e9 = e3?.id,
                te = e3?.kind,
                tt = e6?.conversationId,
                ta = e6?.responseId,
                tn = e6?.savedContentBackend;
            if (ef[11] !== tt || ef[12] !== ta || ef[13] !== tn || ef[14] !== e9 || ef[15] !== te ? (er = [e9, te, tt, ta, tn], ef[11] = tt, ef[12] = ta, ef[13] = tn, ef[14] = e9, ef[15] = te, ef[16] = er) : er = ef[16], (0, c.useEffect)(ei, er), null == eM) {
                let e;
                return ef[17] !== ey ? (e = (0, n.jsx)(Z.a, {
                    reference: ey
                }), ef[17] = ey, ef[18] = e) : e = ef[18], e
            }
            let ti = () => {
                    (0, P.a)(ex, eO, e6, e3, !0)
                },
                tr = (e, t, a) => {
                    if (eS || null == eL) return;
                    "opening" === e && ti();
                    let i = (0, _.a)(eM);
                    "saving" === e && null != eB && null != i && (0, z.b)(ex, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: i,
                        isEditing: !1,
                        source: {
                            conversationId: eB,
                            byteSource: "chatgpt",
                            sharedConversationId: eH,
                            artifactInteractionExcluded: null != eD,
                            target: eL
                        },
                        originatingTurn: eC?.turnId == null ? void 0 : {
                            turnId: eC.turnId,
                            inputMessageId: null,
                            messageId: eE ?? null
                        }
                    }), eR(e);
                    let r = !0,
                        l = () => {
                            r && (r = !1, eR(void 0))
                        },
                        o = {
                            conversationId: ex.get(V.j, eB ?? null) ?? eB,
                            fileName: eM,
                            gizmoId: null == eB ? null : ex.get(V.P, eB),
                            sharedConversationId: eH,
                            mimeType: eU,
                            postId: eD,
                            target: eL
                        };
                    ("saving" === e ? (0, Y.b)(ex, o) : (0, Y.openChatGptFile)(ex, {
                        ...o,
                        messageId: (0, q.c)(eC, eg)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, K.i)(e, eB),
                        browserPreview: eK,
                        onClose: null == a ? void 0 : () => {
                            l(), a()
                        },
                        downloadFallback: eq && !ez,
                        tabKey: `${eC?.messageId??"message"}:${String(eg)}:${eM}${null==em?"":`:${String(em)}`}`
                    })).catch(t => {
                        "opening" === e && r && null != a && ((0, d.flushSync)(l), a()), B.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), ex.get(I.f).danger((0, n.jsx)(f.a, {
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
                    eQ && (e.preventDefault(), tr("opening", e))
                };
            if ("artifact-row" === eI && eq) {
                let e;
                ef[19] !== eA ? (e = eA.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file",
                    description: "Tooltip and accessibility label for the icon-only download button in an artifact file card beneath a ChatGPT response. It appears when desktop users hover over or focus the row and remains visible on touch devices. Activating the button downloads the file. Short, space-limited action label for end users."
                }), ef[19] = eA, ef[20] = e) : e = ef[20], el = e
            } else eJ && (el = eA.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…",
                description: "Accessible label and tooltip for saving a generated ChatGPT file to a user-selected location. The fileName placeholder is the displayed file name."
            }, {
                fileName: eM
            }));
            let to = null != el ? (0, n.jsx)(x.a, {
                tooltipContent: el,
                children: (0, n.jsx)(b.a, {
                    "aria-label": el,
                    color: "artifact-row" === eI ? "ghostActive" : "ghost",
                    disabled: eS,
                    loading: "saving" === ej,
                    radius: "artifact-row" === eI ? "large" : "default",
                    size: "artifact-row" === eI ? "imageToolbar" : "toolbar",
                    uniform: !0,
                    onClick: e => {
                        e.stopPropagation(), tr("saving")
                    },
                    children: "saving" !== ej && (0, n.jsx)(E.a, {
                        "aria-hidden": !0,
                        className: "artifact-row" === eI ? "icon-base" : "icon-sm"
                    })
                })
            }) : null;
            if (eQ && null != e5 ? eo = eS ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}",
                    description: "Accessible label for a connected-provider file reference while it is opening in the preferred browser or the file preview. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}",
                    description: "Accessible label for a connected-provider file reference. Activating it opens the file in the preferred browser on Desktop or the file preview on the web. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eQ ? eo = ez && eS ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : ez ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eS ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eV && (eo = ez ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eM
                })), "artifact-row" !== eI && "file-tile" !== eI) {
                let e = !0 !== ey.codex_file_citation_authoritative && "my_files" === (t = ey).source && null != (0, ea.b)(t.library_file_id) && !eb(t),
                    i = !0 !== ey.codex_file_citation_authoritative && null == e_ && !e && (eb(ey) || null != e5 || eC?.conversationOrigin === "tpp" && null != (0, ea.b)(ey.library_file_id)),
                    l = null == e_ ? (0, ea.b)((0, ea.d)(ey.codex_file_citation_attributes)?.label) ?? (0, ea.b)((0, ea.d)(ey.codex_file_citation_attributes)?.title) ?? eM : (0, R.a)(e_);
                e ? (a = ey, p = eM, l = (0, r.c)({
                    fileName: p,
                    matchedText: (0, ea.b)(a.matched_text) ?? void 0
                })) : i && (l = (0, r.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eM)));
                let s = (0, n.jsx)("span", {
                    style: r.h,
                    children: (0, n.jsx)(C.a, {
                        ...e0,
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
                            tr(eq && (0, S.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        i = {
                            ref: e => {
                                if (null != e) return (0, h.b)(e, {
                                    text: [eM, l, e4, ...(0, F.a)(eA, [ey]).sources.flatMap(eh)].join(" "),
                                    highlight: (0, o.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: eo ?? eM,
                            icon: s,
                            isTerminalInline: !0,
                            label: l,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != e4 ? (0, n.jsx)(j.a, {
                        ...i,
                        href: e4,
                        onActivate: ti,
                        requiresConfirmation: eN,
                        showHoverActions: null != e8,
                        tooltipContent: eM,
                        variant: "file",
                        onUnmodifiedClick: a
                    }) : eQ ? (0, n.jsx)(j.a, {
                        ...i,
                        disabled: eS,
                        variant: "file",
                        onClick: a
                    }) : (0, n.jsx)(j.a, {
                        ...i,
                        disabled: !0,
                        variant: "file",
                        onClick: () => tr("opening")
                    });
                    let r = null != e4 ? e : (0, n.jsx)(x.a, {
                        tooltipContent: eM,
                        children: e
                    });
                    return ef[21] !== r ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: r
                    }), ef[21] = r, ef[22] = t) : t = ef[22], t
                }
                if (!0 === ey.codex_file_citation_authoritative || null != e_ || e || eC?.conversationOrigin === "tpp") {
                    let e, t = null != e4 ? (0, n.jsxs)(et.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        href: e4,
                        onActivate: ti,
                        "aria-busy": eS,
                        "aria-label": eo ?? eM,
                        tooltipContent: eM,
                        showHoverActions: null != e8,
                        onUnmodifiedClick: tl,
                        children: [s, e_ ?? l]
                    }) : (0, n.jsxs)(k.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        reference: {
                            path: eM
                        },
                        ariaBusy: eS,
                        ariaLabel: eo ?? eM,
                        cwd: null,
                        disabled: eS || !eQ,
                        enableWorkspaceFileActions: !1,
                        hostId: eC?.hostId,
                        label: l,
                        tooltipText: eM,
                        onOpen: (e, t) => {
                            eQ && tr(eq && (0, S.a)(t) ? "saving" : "opening", t)
                        },
                        children: [s, e_ ?? l]
                    });
                    return ef[23] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), ef[23] = t, ef[24] = e) : e = ef[24], e
                }
            }
            let ts = (0, r.f)({
                    fileName: eM,
                    mimeType: (m = ey, (0, ea.b)(m.source_mime_type) ?? (0, ea.b)(m.mounted_library_mime_type) ?? (0, ea.b)(m.mime_type) ?? void 0),
                    sourceUrl: eZ ?? void 0
                }),
                tc = (0, A.c)(eM)?.toUpperCase(),
                td = null;
            if (null != e4 ? td = (0, n.jsx)(et.a, {
                    "data-testid": eG ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eI ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: e4,
                    onActivate: ti,
                    "aria-busy": eS,
                    tooltipContent: eM,
                    showHoverActions: null != e8,
                    onUnmodifiedClick: tl,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eM
                    })
                }) : eQ ? td = (0, n.jsx)("button", {
                    "aria-busy": eS,
                    "aria-label": eo,
                    className: "artifact-row" === eI ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: eS,
                    onClick: e => tr(eq && (0, S.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (eV || e2) && (td = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": eo ?? eM,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), eS) {
                let e;
                ef[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(T.a, {
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
            if (e$) {
                let e, t;
                ef[29] !== eX?.originalSource ? (e = eX?.originalSource ? (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy",
                    description: "Explains that the original-source action opens a separate workspace file, and editing it does not update the uploaded Library copy"
                }) : void 0, ef[29] = eX?.originalSource, ef[30] = e) : e = ef[30], ef[31] !== eX?.originalSource ? (t = eX?.originalSource ? (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source",
                    description: "Opens the original LaTeX workspace file that was uploaded to create this separate Library copy"
                }) : (0, n.jsx)(f.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor",
                    description: "Opens this conversation's local LaTeX source in the built-in editor with a live PDF preview"
                }), ef[31] = eX?.originalSource, ef[32] = t) : t = ef[32], es = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(x.a, {
                        tooltipContent: e,
                        children: (0, n.jsx)(b.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: eS,
                            size: "toolbar",
                            onClick: () => {
                                eX?.originalSource ? (0, M.openFileSidePanelTab)(ex, eX.file.path, {
                                    hostId: eX.file.hostId
                                }) : tr("opening")
                            },
                            children: t
                        })
                    }), es]
                })
            }
            let tu = tc,
                tf = "default";
            "artifact-row" === eI ? (tu = e$ && !eX?.originalSource ? (0, n.jsx)(f.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source",
                description: "Identifies an editable LaTeX source file owned by this conversation's workspace"
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                    children: (0, n.jsx)(f.a, {
                        ...(0, r.d)(ts.category, ts.iconKey)
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
            }), tf = e$ ? "default" : "artifact-list") : "file-tile" === eI && (tu = eG ? (0, n.jsx)(f.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder",
                description: "Type label shown under a Library folder in a navigation result card"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let a = (0, ea.b)(e.description) ?? (0, ea.b)(e.snippet);
                return a?.startsWith("/") === !0 ? a : null
            }(ey) ?? (0, n.jsx)(f.a, {
                ...(0, r.d)(ts.category, ts.iconKey)
            }), tf = "file-tile");
            let tp = "file-tile" === eI ? (0, n.jsx)("span", {
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
            ef[33] !== eM || ef[34] !== tf || ef[35] !== tu || ef[36] !== tp || ef[37] !== es ? (ec = (0, n.jsx)(y.h, {
                className: "pointer-events-none relative z-10",
                icon: tp,
                subtitle: tu,
                title: eM,
                titleTooltip: eM,
                trailing: es,
                variant: tf
            }), ef[33] = eM, ef[34] = tf, ef[35] = tu, ef[36] = tp, ef[37] = es, ef[38] = ec) : ec = ef[38], ef[39] !== td || ef[40] !== ec ? (ed = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [td, ec]
            }), ef[39] = td, ef[40] = ec, ef[41] = ed) : ed = ef[41];
            let t_ = ed;
            if ("artifact-row" === eI) return t_;
            if ("file-tile" === eI) {
                let e;
                return ef[42] !== t_ ? (e = (0, n.jsx)(y.a, {
                    as: "span",
                    variant: "file-tile",
                    children: t_
                }), ef[42] = t_, ef[43] = e) : e = ef[43], e
            }
            return ef[44] !== t_ ? (eu = (0, n.jsx)(y.a, {
                as: "span",
                className: "mt-3",
                children: t_
            }), ef[44] = t_, ef[45] = eu) : eu = ef[45], eu
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
            let t, a, r, l, o = (0, i.c)(12),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e;
            if (o[0] !== s || o[1] !== c) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, i = (Array.isArray(c.items) ? c.items : []).flatMap(ey);
                    if (0 === i.length) {
                        let e;
                        o[5] !== c ? (e = (0, n.jsx)(Z.c, {
                            reference: c
                        }), o[5] = c, o[6] = e) : e = o[6], r = e;
                        break e
                    }
                    t = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    o[7] !== s ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(e_, {
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

        function ey(e) {
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
            l = a("xKaq"),
            o = a("XnlH"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            p = a("WRGf"),
            _ = a("WAdu"),
            g = a("tSEg"),
            m = a("Yscs"),
            h = a("vldH"),
            b = a("MrGp"),
            v = a("TUMj"),
            y = a("EUy6"),
            T = a("gsAl"),
            I = a("GnI8"),
            x = a("DIH2");

        function A(e) {
            let t, a = (0, i.c)(7),
                r = (0, v.d)(),
                l = (0, s.useContext)(_.a);
            if (null == r || r.isStreaming || r.shouldBlockExternalEgress || "restricted" === l) {
                let t, i;
                return a[0] !== e.reference.alt ? (t = (0, x.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (i = (0, n.jsx)(n.Fragment, {
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
                    context: _,
                    fallback: v,
                    renderImage: A
                } = e,
                C = (0, o.y)(g.a),
                E = (0, s.useRef)(null),
                w = (0, l.a)(E, {
                    once: !0
                }),
                N = (0, s.useContext)(c.a),
                j = (0, o.z)(d.e),
                R = (0, o.z)(d.i),
                O = (0, o.x)(b.j, _.conversationId) ?? _.conversationId,
                S = (0, o.x)(b.P, _.conversationId),
                k = (0, o.x)(b.W, _.conversationId),
                P = (0, o.x)(T.d, N)?.id,
                F = (0, h.b)(a, {
                    messageId: _.messageId
                }),
                {
                    data: M,
                    isPending: G
                } = (0, r.a)({
                    queryKey: ["chatgpt-sandbox-image", j, R, O, S, k, P, F, i],
                    enabled: w && null != F,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == F) throw Error("Sandbox image has no download target");
                        let a = await (0, h.fetchChatGptFileBlob)({
                            conversationId: O,
                            gizmoId: S,
                            sharedConversationId: k,
                            postId: P,
                            signal: t,
                            target: null == i && "sandbox" === F.type ? (0, y.b)(C, {
                                sandboxPath: F.sandboxPath,
                                turnContext: _,
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
            return null != A && (null != M || null != F && G) ? A(M, E) : (t = null != M ? (0, n.jsx)(p.b, {
                alt: (0, x.b)(a.alt) ?? "",
                downloadFileName: (0, x.b)(a.file_name) ?? void 0,
                hostId: _.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: M
            }) : null != F && G ? (0, n.jsx)(u.a, {
                "aria-label": (0, x.b)(a.alt) ?? void 0
            }) : null != i ? (0, n.jsx)(I.ChatGptFileReference, {
                contentReferenceIndex: i,
                reference: {
                    ...a,
                    type: "file"
                }
            }) : (0, n.jsx)(n.Fragment, {
                children: v ?? (0, x.b)(a.alt)
            }), (0, n.jsx)("div", {
                ref: E,
                children: t
            }))
        }
        a.d(t, {
            a: () => A
        })
    }),
    EUy6: (function(e, t, a) {
        var n = a("e0CE"),
            i = a("FIIj"),
            r = a("ASxG"),
            l = a("E8Sp"),
            o = a("X6Vn"),
            s = a("ciEf"),
            c = a("zsxQ"),
            d = a("vldH"),
            u = a("OOaz"),
            f = a("MrGp"),
            p = a("rxj0"),
            _ = a("xof2"),
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
                onInteraction: p,
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
            let C = x(y);
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
            o?.shouldBlockExternalEgress || p?.(), g?.();
            let E = a.toString();
            return ((0, _.g)({
                ...v(r),
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "search_citation" === r.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                conversationId: e.get(f.j, o?.conversationId ?? null) ?? void 0,
                messageId: s,
                assistantMessageId: s,
                turnOrdinal: (0, _.a)(e, o?.conversationId, s),
                contentReferenceType: "dil",
                contentReferenceStartIndex: c,
                parentContext: d,
                url: o?.shouldBlockExternalEgress ? void 0 : E
            }), I && !o?.safeUrls?.includes(E)) ? A(e, E, u) : ((0, h.a)(e, E), Promise.resolve())
        }
        async function T(e, t) {
            let {
                sandboxPath: n,
                turnContext: i,
                sourceMessageId: r,
                sharedConversationId: l,
                signal: o
            } = t, s = e.get(f.X, i.conversationId), _ = l ?? (s?.kind === "conversation" ? s.id : void 0), g = {
                conversationId: e.get(f.j, i.conversationId) ?? (null == _ ? null : (0, u.d)(_)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(f.P, i.conversationId),
                sharedConversationId: _,
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
                isAccessBlocked: e => (0, p.i)(e, i.conversationId),
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
                o = e.get(f.X, r.conversationId);
            if (o?.kind === "post") {
                let t = e.get(f.K, r.conversationId)?.[l]?.message;
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

        function x(e) {
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
            a: () => x,
            b: () => I,
            c: () => v,
            d: () => T,
            e: () => y
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
            i = a("FoKl"),
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
                originatingTurn: p
            } = t;
            if (null == d || f) return;
            let {
                conversationId: _,
                target: g
            } = d;
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== _ || null != d.sharedConversationId || !0 === d.artifactInteractionExcluded || null != e.get(l.X, _)) return;
            if ("pptx" === c) a = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== c && "csv" !== c && "tsv" !== c) return;
                a = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let m = e.get(l.x, _),
                h = "tpp" === m || "flora" === m;
            if (!h || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== s) try {
                let t = "fileId" in g ? g.fileId : void 0,
                    l = "libraryFileId" in g ? g.libraryFileId : void 0,
                    c = (0, n.a)("mounted-library" === g.type ? g.mountedLibraryFileId : void 0, l, t),
                    d = null != c && (null != (0, n.d)(c) || (0, n.j)(c)) ? c : void 0;
                (0, r.a)(e, i.h, {
                    action: s,
                    artifactKind: a,
                    conversationId: _,
                    fileId: u(t),
                    libraryFileId: u(l),
                    mountedLibraryFileId: d,
                    messageId: p?.messageId ?? ("sandbox" === g.type ? g.messageId : void 0),
                    inputMessageId: p?.inputMessageId ?? void 0,
                    turnExchangeId: p?.turnId,
                    interactionMode: "CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY",
                    isTemporaryChat: (0, o.e)(e.value.search ?? ""),
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
        var n = a("e0CE"),
            i = a("FoKl"),
            r = a("Cslg"),
            l = a("SGsN"),
            o = a("svjy"),
            s = a("IZUf"),
            c = a("VJXV"),
            d = a("wHLp"),
            u = a("yGJW"),
            f = a("xof2");
        async function p(e, t) {
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
            return _(e, {
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
                    entityKind: "image",
                    source: "conversation",
                    showToast: a,
                    onView: n
                }) ? i : null
            })
        }
        async function _(e, t) {
            let {
                conversationId: a,
                messageId: n,
                libraryFileId: i,
                status: u,
                surface: f,
                folder: p,
                created: _,
                onView: h,
                updateFavorite: b
            } = t, v = () => e.get(r.e) === e.value.accountId && e.get(r.j) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let y = e.get(o.a),
                T = t => {
                    v() && (g(e, a, n, "toast_action", f), h?.((0, d.b)(t, "banner")))
                },
                I = i,
                x = null != p || !u.isFavorited,
                A = null == p || !u.isFavorited,
                C = x ? "save" : "unsave",
                E = performance.now();
            if (A) {
                g(e, a, n, C, f);
                let t = null != (I = await b(x, null == p, null == h ? void 0 : () => T("/library?tab=favorites")));
                if (!v() || (m(e, {
                        eventType: t ? x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: C,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - E : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != p) {
                    try {
                        if (null == I) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, I, p.id)
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
                    (0, c.a)(e), e.get(l.f).success(_ ? y.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created",
                        description: "Success toast after creating a Library folder and moving the saved image into it. folderName is the user's folder name"
                    }, {
                        folderName: p.name
                    }) : y.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}",
                        description: "Success toast after moving the saved image into a Library folder. folderName is the user's folder name"
                    }, {
                        folderName: p.name
                    }), {
                        primaryAction: {
                            label: y.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View",
                                description: "Toast action that opens the Library folder which now contains the saved image"
                            }),
                            onClick: () => T(`/library/d/${encodeURIComponent(p.id)}`)
                        }
                    })
                }
                A && x && m(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: C,
                    clickToSuccessToastMs: performance.now() - E
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
            (0, u.a)(e, i.cb, {
                ...t,
                entityKind: "image"
            })
        }
        a.d(t, {
            a: () => p,
            b: () => _
        })
    }),
    oQ79: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("XnlH"),
            l = a("Wf1j"),
            o = a("HZfM"),
            s = a("Cslg"),
            c = a("ygO2"),
            d = a("HOLv"),
            u = a("CqQF"),
            f = a("jo5I"),
            p = a("Fmx8"),
            _ = a("Qed5"),
            g = a("VJXV"),
            m = a("mF5c"),
            h = a("ejvO"),
            b = a("Qxu5"),
            v = a("bOiT");

        function y(e) {
            let t, a, l, o, c = (0, i.c)(11),
                d = (0, r.z)(g.d),
                u = (0, r.z)(s.k),
                f = (0, r.z)(s.e),
                _ = (0, r.z)(s.j);
            return d && "allowed" === u.status && null != f && null != _ ? (c[0] !== f || c[1] !== _ ? (t = {
                accountId: f,
                userId: _
            }, c[0] = f, c[1] = _, c[2] = t) : t = c[2], c[3] !== e.source ? (a = (0, h.a)(e.source), c[3] = e.source, c[4] = a) : a = c[4], c[5] !== e || c[6] !== a ? (l = (0, n.jsx)(T, {
                ...e
            }, a), c[5] = e, c[6] = a, c[7] = l) : l = c[7], c[8] !== t || c[9] !== l ? (o = (0, n.jsx)(r.b, {
                scope: p.c,
                value: t,
                children: l
            }), c[8] = t, c[9] = l, c[10] = o) : o = c[10], o) : null
        }

        function T(e) {
            let t, a, s, g, y = (0, i.c)(48),
                {
                    source: T,
                    sources: I,
                    conversationId: x,
                    messageId: A,
                    surface: C,
                    presentation: E
                } = e,
                w = (0, r.y)(p.c),
                N = (0, o.Z)(),
                j = (0, l.a)();
            y[0] !== T ? (t = (0, h.a)(T), y[0] = T, y[1] = t) : t = y[1];
            let R = t,
                {
                    data: O,
                    isError: S
                } = (0, r.x)(h.d, I),
                k = (0, r.x)(h.b, R),
                P = O?.[R];
            y[2] !== x || y[3] !== S || y[4] !== R || y[5] !== A || y[6] !== N || y[7] !== w || y[8] !== T || y[9] !== I || y[10] !== P || y[11] !== C ? (a = async (e, t) => {
                null == P || S || w.get(h.b, R) || (w.set(h.b, R, !0), await (0, m.b)(w, {
                    conversationId: x,
                    messageId: A,
                    libraryFileId: P.library_file_id,
                    status: {
                        favoriteId: P.favorite_id ?? null,
                        isFavorited: null != P.favorite_id
                    },
                    surface: C,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        N(e)
                    },
                    updateFavorite: (e, t, a) => (0, h.e)(w, {
                        source: T,
                        previous: P,
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
            }, y[2] = x, y[3] = S, y[4] = R, y[5] = A, y[6] = N, y[7] = w, y[8] = T, y[9] = I, y[10] = P, y[11] = C, y[12] = a) : a = y[12];
            let F = a;
            if (S) return null;
            if ("menuItem" === E) {
                let e, t, a = P?.favorite_id != null,
                    i = k || null == P;
                return y[13] !== F ? (e = () => void F(), y[13] = F, y[14] = e) : e = y[14], y[15] !== a || y[16] !== i || y[17] !== e ? (t = (0, n.jsx)(_.a, {
                    isFavorited: a,
                    disabled: i,
                    onSelect: e
                }), y[15] = a, y[16] = i, y[17] = e, y[18] = t) : t = y[18], t
            }
            if ("button" === E) {
                let e, t, a, i, r, l = P?.favorite_id != null;
                y[19] !== j ? (e = j.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites",
                    description: "Action to save a Library file as a favorite"
                }), y[19] = j, y[20] = e) : e = y[20];
                let o = e;
                if (null == P) {
                    let e;
                    y[21] !== j ? (e = j.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status",
                        description: "Accessible status for a bookmark while checking whether the item is already saved"
                    }), y[21] = j, y[22] = e) : e = y[22], o = e
                } else if (l) {
                    let e;
                    y[23] !== j ? (e = j.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites",
                        description: "Action in a Library item menu or preview to remove the item from Favorites"
                    }), y[23] = j, y[24] = e) : e = y[24], o = e
                }
                let s = k || null == P || void 0,
                    f = k || null == P;
                y[25] !== F ? (t = e => {
                    e.stopPropagation(), F()
                }, y[25] = F, y[26] = t) : t = y[26];
                let p = l ? b.a : v.a;
                return y[27] !== p ? (a = (0, n.jsx)(d.a, {
                    asset: p
                }), y[27] = p, y[28] = a) : a = y[28], y[29] !== l || y[30] !== o || y[31] !== s || y[32] !== f || y[33] !== t || y[34] !== a ? (i = (0, n.jsx)(c.a, {
                    "aria-label": o,
                    "aria-pressed": l,
                    "aria-busy": s,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), y[29] = l, y[30] = o, y[31] = s, y[32] = f, y[33] = t, y[34] = a, y[35] = i) : i = y[35], y[36] !== o || y[37] !== i ? (r = (0, n.jsx)(u.a, {
                    tooltipContent: o,
                    children: i
                }), y[36] = o, y[37] = i, y[38] = r) : r = y[38], r
            }
            let M = P?.favorite_id != null,
                G = null == P,
                L = P?.directory_id ?? null;
            return y[39] !== F ? (s = () => void F(), y[39] = F, y[40] = s) : s = y[40], y[41] !== k || y[42] !== M || y[43] !== G || y[44] !== L || y[45] !== s || y[46] !== F ? (g = (0, n.jsx)(f.a, {
                isSaved: M,
                isBusy: k,
                isCheckingStatus: G,
                selectedFolderId: L,
                visibility: "hover",
                onToggleFavorite: s,
                onSelectFolder: F
            }), y[41] = k, y[42] = M, y[43] = G, y[44] = L, y[45] = s, y[46] = F, y[47] = g) : g = y[47], g
        }
        a.d(t, {
            SearchImageFavorite: () => y
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("VORB"),
            i = a("r9HQ"),
            r = a("CpsU"),
            l = a.n(r),
            o = a("XnlH"),
            s = a("Cslg"),
            c = a("SGsN"),
            d = a("svjy"),
            u = a("Fmx8"),
            f = a("VJXV"),
            p = a("yGJW");
        let _ = new WeakMap;

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
                            l = _.get(n.queryClient);
                        null == l && (l = new Map, _.set(n.queryClient, l));
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
                    showToast: _,
                    onView: g
                } = t,
                m = () => e.get(s.e) === e.value.accountId && e.get(s.j) === e.value.userId,
                b = h(i);
            if (!e.get(f.d)) return null;
            if (l) {
                let t = {
                    operationId: crypto.randomUUID(),
                    action: "save",
                    entityKind: "image",
                    surface: o,
                    source: "conversation"
                };
                (0, p.a)(e, n.a, {
                    ...t,
                    eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                });
                try {
                    if (a = await e.get(u.m).safePost("/files/library/image-favorites", {
                            requestBody: i
                        }), null == a.favorite_id || null == a.library_file_id) throw Error("Image favorite response did not include its Library file.");
                    m() && ((0, p.a)(e, n.a, {
                        ...t,
                        result: "success",
                        eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                    }), _ && (0, f.f)(e, {
                        isFavorited: !0,
                        onView: g
                    }))
                } catch {
                    return m() && ((0, p.a)(e, n.a, {
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
                        entityKind: "image",
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
            a: () => A,
            b: () => h,
            c: () => C,
            d: () => v,
            e: () => T,
            f: () => y,
            g: () => I,
            h: () => b,
            i: () => x
        });
        var n = a("vG85"),
            i = a("wqmp"),
            r = a("XnlH"),
            l = a("HZfM"),
            o = a("yGJW"),
            s = a("tSEg"),
            c = a("yMDx"),
            d = a("MrGp"),
            u = a("ASxG"),
            f = a("w5lF"),
            p = a("GDNt"),
            _ = a("Kwur");
        async function g(e, t) {
            try {
                let {
                    post: a
                } = await _.Request.safeGet("/share/post/resolve/{post_id}", {
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
        let b = (0, r.q)(s.a, (e, t) => {
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
            v = (0, r.d)(s.a, (e, t) => {
                let {
                    get: a,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, l.J)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: i,
                    isError: r
                } = a(b, e);
                return i?.status !== "ready" || r ? null : i.post
            }),
            y = (0, r.d)(s.a, (e, t) => {
                let {
                    auth: a,
                    conversationId: n
                } = e, {
                    get: i
                } = t;
                if (null == a || a.isLoading || null !== a.authMethod) return !1;
                let r = i(v, a),
                    l = i(d.X, n);
                return null != r && l?.kind === "post" && l.forkFromSharedPost && l.post.id === r.id
            }),
            T = (0, r.v)(s.a, e => !1, {
                onMount: (e, t) => {
                    let a = null;
                    return t.watch(n => {
                        let {
                            get: i
                        } = n, {
                            auth: r,
                            conversationId: l
                        } = t.key, o = i(v, r);
                        if (null == o) {
                            let {
                                data: n,
                                isError: o
                            } = i(b, r);
                            null != a && (o || n?.status === "unavailable") && ((0, d.eb)(t, l, a), a = null), e(!1);
                            return
                        }
                        a = o.id, e(null != A(t, o, l))
                    })
                }
            }),
            I = (0, r.u)(s.a, []),
            x = (0, r.u)(s.a, () => null);

        function A(e, t, a) {
            let n = (0, m.a)(t, a);
            return null == n ? null : ((0, d.lb)(e, {
                conversation: n,
                conversationId: a,
                post: t
            }), a)
        }

        function C(e, t, a) {
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
            s = a("w4TZ"),
            c = a("Qxu5"),
            d = a("GNpT"),
            u = a("bOiT");

        function f(e) {
            let t, a, f, p = (0, i.c)(9),
                {
                    isFavorited: _,
                    disabled: g,
                    onSelect: m
                } = e;
            return p[0] !== _ ? (t = (0, n.jsx)(o.b, {
                icon: {
                    assets: _ ? {
                        16: s.a,
                        20: c.a
                    } : {
                        16: d.a,
                        20: u.a
                    }
                }
            }), p[0] = _, p[1] = t) : t = p[1], p[2] !== _ ? (a = _ ? (0, n.jsx)(r.a, {
                id: "library.favorites.remove",
                defaultMessage: "Remove from Favorites",
                description: "Action in a Library item menu or preview to remove the item from Favorites"
            }) : (0, n.jsx)(r.a, {
                id: "library.favorites.add",
                defaultMessage: "Add to Favorites",
                description: "Action to save a Library file as a favorite"
            }), p[2] = _, p[3] = a) : a = p[3], p[4] !== g || p[5] !== m || p[6] !== t || p[7] !== a ? (f = (0, n.jsx)(l.c.Item, {
                disabled: g,
                leftIcon: t,
                onSelect: m,
                children: a
            }), p[4] = g, p[5] = m, p[6] = t, p[7] = a, p[8] = f) : f = p[8], f
        }
        a.d(t, {
            a: () => f
        })
    }),
    iwt4: (function(e, t, a) {
        async function n() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(226913), a.e(665547)]).then(a.bind(a, "QxL2"))).InlineFlashcards
        }
        async function i() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(894924), a.e(293453)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
        }
        async function r() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(894924), a.e(805697)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
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
                    of p(e, l)) {
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
            if (null == r || "hidden" === r.style || 0 === p(e, r).length) return;
            let l = e => null == n ? i : n[e],
                o = l(a),
                s = t?.[a - 1];
            if (null != s && "hidden" !== s.style && null != o && l(a - 1) === o && p(e, s).length > 0 && b(s, r)) return {
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

        function p(e, t) {
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
                    p = n.title ?? n.name ?? l?.title ?? u ?? d ?? m(o) ?? f,
                    _ = d ?? m(o) ?? p;
                return [{
                    sourceKey: `file:${n.id.toLowerCase()}`,
                    title: p,
                    displayLabel: u ?? _,
                    sourceName: _,
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
                let a = _(e, t);
                return null == a ? [] : [a]
            }
            if ("grouped_webpages" !== t.type || "hidden" === t.style || "loading" === t.status || "error" === t.status) return [];
            let a = d.safeParse(t);
            return a.success ? a.data.items.flatMap(t => [t, ...t.supporting_websites ?? []].flatMap(t => {
                let a = _(e, t);
                return null == a ? [] : [a]
            })) : []
        }

        function _(e, t) {
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
    })
};