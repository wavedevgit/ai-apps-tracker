export const __rspack_esm_ids = [684598];
export const __webpack_modules__ = {
    mQnY: (function(e, t, a) {
        a.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostDownloadClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostPageViewed"
            }
        })
    }),
    WdQN: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Bbed"),
            l = a("VTN2"),
            o = a("TUMj"),
            s = a("qviq");
        let c = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(789716), a.e(652500), a.e(877652), a.e(828911), a.e(977668)]).then(a.bind(a, "fbgu"))).SitesPreviewContentReference);
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, d, u = (0, i.c)(19),
                    {
                        bind: f,
                        onBindInteraction: p,
                        reference: g,
                        isStreaming: h,
                        readOnly: _,
                        withTopMargin: m
                    } = e,
                    b = void 0 !== _ && _,
                    v = (0, o.d)();
                if (null != g.data && "object" == typeof g.data && "preview_type" in g.data && "sites" === g.data.preview_type) {
                    let e;
                    return u[0] !== h || u[1] !== g ? (e = (0, n.jsx)(c, {
                        reference: g,
                        isStreaming: h
                    }), u[0] = h, u[1] = g, u[2] = e) : e = u[2], e
                }
                if (u[3] !== h || u[4] !== g || u[5] !== v?.isStreaming) {
                    r = Symbol.for("react.early_return_sentinel");
                    e: {
                        let e = l.a.safeParse(g);
                        if (!e.success) {
                            r = null;
                            break e
                        }({
                            data: t
                        } = e.data);
                        let n = e.data.matched_text;a = v?.isStreaming === !0 && (n?.startsWith("") ? !n.endsWith("") || !0 === h : h ?? !0)
                    }
                    u[3] = h, u[4] = g, u[5] = v?.isStreaming, u[6] = t, u[7] = a, u[8] = r
                } else t = u[6], a = u[7], r = u[8];
                if (r !== Symbol.for("react.early_return_sentinel")) return r;
                let T = a && !0 !== t.render_immediately_during_streaming,
                    y = t.display_name ?? t.title;
                return u[9] !== f || u[10] !== t.content || u[11] !== t.style_mode || u[12] !== p || u[13] !== b || u[14] !== T || u[15] !== y || u[16] !== v || u[17] !== m ? (d = (0, n.jsx)(s.a, {
                    bind: f,
                    onBindInteraction: p,
                    content: t.content,
                    readOnly: b,
                    isStreaming: T,
                    title: y,
                    styleMode: t.style_mode,
                    turnContext: v,
                    withTopMargin: m
                }), u[9] = f, u[10] = t.content, u[11] = t.style_mode, u[12] = p, u[13] = b, u[14] = T, u[15] = y, u[16] = v, u[17] = m, u[18] = d) : d = u[18], d
            }
        })
    }),
    qviq: (function(e, t, a) {
        var n = a("ABep"),
            i = a("Bbed"),
            r = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(652500), a.e(877652), a.e(334813), a.e(185648)]).then(a.bind(a, "da6p"))).InlineAppBlock, {
            errorFallback: (0, n.jsx)(r.a, {})
        });
        a.d(t, {}, {
            a: l
        })
    }),
    zy7P: (function(e, t, a) {
        var n = a("nB3p"),
            i = a("Q840"),
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
        a.d(t, {}, {
            a: function(e) {
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
        })
    }),
    nD0d: (function(e, t, a) {
        a.d(t, {
            a: () => er
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
            g = a("WdQN"),
            h = a("NDDl"),
            _ = a("YAi8"),
            m = a("Q840"),
            b = a("Wf1j"),
            v = a("oyxz"),
            T = a("Sm6l"),
            y = a("q5qu"),
            I = a("OWtl"),
            x = a("dQRk"),
            w = a("TUMj"),
            E = a("ldQM");

        function C(e) {
            let t, a = (0, i.c)(3),
                {
                    contentReferenceIndex: r
                } = e,
                l = (0, w.d)(),
                o = l?.contentReferenceMessageIds?.[r] ?? l?.messageId;
            return a[0] !== o || a[1] !== l ? (t = null == l || null == o || l.shouldBlockExternalEgress ? null : (0, n.jsx)(A, {
                conversationId: l.conversationId,
                messageId: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function A(e) {
            let t, a, r, l, o = (0, i.c)(9),
                {
                    conversationId: s,
                    messageId: c
                } = e,
                d = (0, m.y)(I.a),
                u = (0, b.a)(),
                f = (0, m.x)(E.b, s),
                p = (0, m.x)(E.e, s);
            return (0, m.x)(x.$, s) || f?.kind !== "questions" || null == f.questionnaire || f.messageId !== c || p !== c ? null : (o[0] !== u ? (t = u.formatMessage({
                id: "chatgpt.questionnaire.reopen",
                defaultMessage: "Show skipped questions"
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== d ? (a = () => d.set(E.e, s, null), o[2] = s, o[3] = d, o[4] = a) : a = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(v.a, {
                id: "chatgpt.questionnaire.skipped",
                defaultMessage: "Skipped questions"
            }), o[5] = r) : r = o[5], o[6] !== t || o[7] !== a ? (l = (0, n.jsx)(y.a, {
                children: (0, n.jsx)(T.a, {
                    color: "ghost",
                    size: "compact",
                    "aria-label": t,
                    onClick: a,
                    children: r
                })
            }), o[6] = t, o[7] = a, o[8] = l) : l = o[8], l)
        }
        var N = a("YgzY"),
            k = a("j8Yf"),
            S = a("ASxG"),
            R = a("VlIB"),
            j = a("LtEv"),
            O = a("Kwur"),
            P = a("EUy6"),
            M = a("AyL4"),
            F = a("WAdu"),
            G = a("tSEg"),
            L = a("WFY2");
        let W = S.object({
            type: S.literal("client_defined_widget"),
            category: S.literal("beacon_card"),
            icebreaker_card_actions: S.object({
                click: S.boolean(),
                dismiss: S.boolean()
            }).optional().catch(void 0),
            data: S.object({
                widget_type: S.literal("beacon_card"),
                display_mode: S.literal("block"),
                title: S.string().max(200).refine(e => e.trim().length > 0).nullish(),
                text: S.string().max(2e3).refine(e => e.trim().length > 0),
                button_label: S.string().max(80).refine(e => e.trim().length > 0),
                prompt: S.string().max(4e3).refine(e => e.trim().length > 0).nullish(),
                url: S.url({
                    protocol: /^https$/
                }).max(2048).regex(/^https:\/\/[^/?#@\\\s]+(?:[/?#][^\\\s]*)?$/i).nullish()
            }).strict().refine(e => null != e.prompt != (null != e.url))
        });

        function H(e) {
            let t, a, r, l, s, c, d, u, f, p, g, h = (0, i.c)(42),
                {
                    contentReferenceIndex: _,
                    reference: v,
                    isStreaming: T,
                    readOnly: y
                } = e,
                I = (0, m.y)(G.a),
                x = (0, w.d)(),
                E = (0, R.c)(),
                C = (0, b.a)(),
                A = (0, o.useContext)(F.a),
                [N, k] = (0, o.useState)(!1),
                S = (0, o.useRef)(null);
            h[0] !== v ? (t = W.safeParse(v), h[0] = v, h[1] = t) : t = h[1];
            let H = t;
            h[2] !== _ || h[3] !== x ? (a = (0, w.c)(x, _), h[2] = _, h[3] = x, h[4] = a) : a = h[4];
            let U = a,
                V = U?.messageId,
                q = x?.conversationId,
                z = H.success ? H.data.data.url : void 0,
                Q = !0 === y || !0 === T || null == x || x.isStreaming || !0 === x.isReadOnly || x.shouldBlockExternalEgress || null == U || null != z && "restricted" === A;
            if (h[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => () => S.current?.abort(), h[5] = r) : r = h[5], h[6] !== q || h[7] !== Q || h[8] !== I || h[9] !== V || h[10] !== z ? (l = [q, Q, I, V, z], h[6] = q, h[7] = Q, h[8] = I, h[9] = V, h[10] = z, h[11] = l) : l = h[11], (0, o.useLayoutEffect)(r, l), !H.success || N) return null;
            let {
                data: K,
                icebreaker_card_actions: Y
            } = H.data, {
                title: $,
                text: X,
                button_label: J,
                prompt: Z
            } = K;
            h[12] !== Y || h[13] !== Q || h[14] !== U || h[15] !== x ? (s = function(e) {
                !Q && x?.conversationId && !x.isTemporaryChat && null != U && Y?.[e] && O.Request.safePost("/widget_server_action", {
                    requestBody: {
                        action_type: "icebreaker_beacon_card_interaction",
                        conversation_id: x.conversationId,
                        message_id: U.messageId,
                        ref_id: `${U.messageId}:${U.index}`,
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
            }, h[12] = Y, h[13] = Q, h[14] = U, h[15] = x, h[16] = s) : s = h[16];
            let ee = s;
            return h[17] !== C ? (c = C.formatMessage({
                id: "chatgpt.beaconCard.dismiss",
                defaultMessage: "Dismiss beacon"
            }), h[17] = C, h[18] = c) : c = h[18], h[19] !== ee ? (d = () => {
                S.current?.abort(), k(!0), ee("dismiss")
            }, h[19] = ee, h[20] = d) : d = h[20], h[21] !== c || h[22] !== d ? (u = {
                ariaLabel: c,
                onClick: d
            }, h[21] = c, h[22] = d, h[23] = u) : u = h[23], h[24] !== Q || h[25] !== E || h[26] !== Z || h[27] !== ee || h[28] !== I || h[29] !== U || h[30] !== x || h[31] !== z ? (f = () => {
                if (!Q && null != x && null != U) {
                    if (null != z) {
                        S.current?.abort();
                        let e = new AbortController;
                        S.current = e;
                        let t = (0, P.e)(I, {
                            type: "open_url",
                            payload: {
                                url: z,
                                require_safe_url_confirmation: !0
                            },
                            turnContext: x,
                            sourceMessageId: U.messageId,
                            signal: e.signal
                        });
                        !1 !== t && (ee("click"), t.catch(D));
                        return
                    }
                    if (null != Z) {
                        let e = E(x.conversationId);
                        if (null != e && !e.canSubmitPrompt) return;
                        ee("click"), (null != e ? e.submitPrompt(Z, {
                            parentMessageId: U.messageId,
                            preserveDraft: !0,
                            fileUploadIds: [],
                            submissionIntent: "beacon_action"
                        }) : (0, j.submitChatGptFollowUp)(I, {
                            conversationId: x.conversationId,
                            isTemporaryChat: x.isTemporaryChat ?? !1,
                            parentMessageId: U.messageId,
                            prompt: Z
                        })).catch(B)
                    }
                }
            }, h[24] = Q, h[25] = E, h[26] = Z, h[27] = ee, h[28] = I, h[29] = U, h[30] = x, h[31] = z, h[32] = f) : f = h[32], h[33] !== J || h[34] !== Q || h[35] !== f ? (p = {
                label: J,
                disabled: Q,
                onClick: f
            }, h[33] = J, h[34] = Q, h[35] = f, h[36] = p) : p = h[36], h[37] !== p || h[38] !== u || h[39] !== X || h[40] !== $ ? (g = (0, n.jsx)("div", {
                className: "mt-3 w-full",
                children: (0, n.jsx)(M.b, {
                    variant: "beacon",
                    title: $,
                    description: X,
                    dismissAction: u,
                    primaryAction: p
                })
            }), h[37] = p, h[38] = u, h[39] = X, h[40] = $, h[41] = g) : g = h[41], g
        }

        function B(e) {
            L.a.warning("ChatGPT beacon card follow-up failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function D(e) {
            L.a.warning("ChatGPT beacon card link failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var U = a("dhxJ"),
            V = a("ZUun"),
            q = a("VB5Q");

        function z(e) {
            let t, a, r, l, s, c, d, u = (0, i.c)(33),
                {
                    contentReferenceIndex: f,
                    isStreaming: p,
                    readOnly: g,
                    reference: h,
                    renderMath: _
                } = e,
                {
                    data: b
                } = h,
                v = void 0 !== _ && _,
                T = (0, w.d)(),
                y = p ?? (T?.isStreaming === !0 && (T.contentReferenceMessageStatuses?.[f] ?? "in_progress") === "in_progress"),
                I = (0, o.useContext)(F.a),
                E = T?.contentReferenceMessageIds?.[f];
            u[0] !== f || u[1] !== E || u[2] !== T?.contentReferenceMessageIds ? (t = null == E ? f : T?.contentReferenceMessageIds?.slice(0, f).filter(e => e === E).length, u[0] = f, u[1] = E, u[2] = T?.contentReferenceMessageIds, u[3] = t) : t = u[3];
            let C = t,
                A = T?.conversationId,
                N = E ?? T?.messageId;
            u[4] !== C || u[5] !== A || u[6] !== N ? (a = {
                conversationId: A,
                messageId: N,
                codeBlockIndex: C
            }, u[4] = C, u[5] = A, u[6] = N, u[7] = a) : a = u[7];
            let k = (0, m.x)(x.v, a);
            u[8] !== C || u[9] !== I || u[10] !== y || u[11] !== g || u[12] !== k || u[13] !== E || u[14] !== T ? (r = T && {
                ...T,
                messageId: E ?? T.messageId,
                codeBlocks: (0, U.a)({
                    code_blocks: null == k || null == C ? void 0 : {
                        [C]: k
                    }
                }) ?? (null == E || E === T.messageId ? T.codeBlocks : void 0),
                isReadOnly: g || T.isReadOnly,
                isStreaming: y,
                shouldBlockExternalEgress: T.shouldBlockExternalEgress || "restricted" === I
            }, u[8] = C, u[9] = I, u[10] = y, u[11] = g, u[12] = k, u[13] = E, u[14] = T, u[15] = r) : r = u[15], u[16] !== b ? (l = (0, q.a)(b), u[16] = b, u[17] = l) : l = u[17];
            let S = b.model_previewable ? "preview" : void 0;
            return u[18] !== b.language ? (s = b.language?.trim().replace(/^id\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')$/i, "") || void 0, u[18] = b.language, u[19] = s) : s = u[19], u[20] !== C || u[21] !== b.content || u[22] !== b.editable || u[23] !== b.interactive || u[24] !== y || u[25] !== v || u[26] !== s || u[27] !== l || u[28] !== S ? (c = (0, n.jsx)(V.a, {
                bufferStreamingContent: !0,
                allowWideBlocks: !1,
                clipboardContent: l,
                codeBlockIndex: C,
                codeBlockInfo: S,
                content: b.content,
                editable: b.editable,
                forceCodeBlockWordWrap: !1,
                isCodeFenceOpen: y,
                isInteractive: b.interactive,
                language: s,
                renderImmediately: !0,
                renderCodeBlocksAsWritingBlocks: !1,
                renderMath: v
            }), u[20] = C, u[21] = b.content, u[22] = b.editable, u[23] = b.interactive, u[24] = y, u[25] = v, u[26] = s, u[27] = l, u[28] = S, u[29] = c) : c = u[29], u[30] !== c || u[31] !== r ? (d = (0, n.jsx)(w.b.Provider, {
                value: r,
                children: c
            }), u[30] = c, u[31] = r, u[32] = d) : d = u[32], d
        }
        var Q = a("DIH2");

        function K(e) {
            let t, a, r, l, o, s, c = (0, i.c)(19),
                {
                    reference: d
                } = e;
            c[0] !== d.data.content ? (t = (0, Q.b)(d.data.content), c[0] = d.data.content, c[1] = t) : t = c[1];
            let u = t;
            c[2] !== d.category || c[3] !== d.data.translated_text ? (a = "translation_block" === d.category ? (0, Q.b)(d.data.translated_text) : null, c[2] = d.category, c[3] = d.data.translated_text, c[4] = a) : a = c[4];
            let f = a,
                p = "language_learning_block" === d.category && "pronunciation" === d.data.intent,
                g = p && "inline_anchor" === d.data.presentation ? "span" : "div";
            c[5] !== p || c[6] !== d.data.presentation || c[7] !== d.data.pronunciation_hint ? (r = p && "inline_anchor" !== d.data.presentation ? (0, Q.b)(d.data.pronunciation_hint) : null, c[5] = p, c[6] = d.data.presentation, c[7] = d.data.pronunciation_hint, c[8] = r) : r = c[8];
            let h = r;
            return null == u && null == f ? null : (c[9] !== u || c[10] !== h ? (l = null != h && h !== u ? (0, n.jsx)(v.a, {
                id: "chatgpt.contentReferences.languageWidget.fallback.pronunciation",
                defaultMessage: "{text} ({pronunciation})",
                values: {
                    text: u,
                    pronunciation: h
                }
            }) : u, c[9] = u, c[10] = h, c[11] = l) : l = c[11], c[12] !== u || c[13] !== f ? (o = null != f && f !== u ? (0, n.jsxs)(n.Fragment, {
                children: [null == u ? null : (0, n.jsx)("br", {}), f]
            }) : null, c[12] = u, c[13] = f, c[14] = o) : o = c[14], c[15] !== g || c[16] !== l || c[17] !== o ? (s = (0, n.jsxs)(g, {
                children: [l, o]
            }), c[15] = g, c[16] = l, c[17] = o, c[18] = s) : s = c[18], s)
        }
        var Y = a("yxxQ"),
            $ = a("VTN2");
        let X = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(196686)]).then(a.bind(a, "q9q7"))).ChatGptPronunciationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            J = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(740793), a.e(452048), a.e(299268), a.e(433520), a.e(608912), a.e(232879)]).then(a.bind(a, "QWt6"))).ChatGptTranslationContentReference, {
                fallback: K,
                errorFallback: K
            }),
            Z = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(851456), a.e(709215), a.e(704809), a.e(329156), a.e(829555), a.e(115121), a.e(121930), a.e(125161), a.e(591210), a.e(437154)]).then(a.bind(a, "KKwe"))).DilWritingBlock, p.a),
            ee = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(740793), a.e(452048), a.e(299268), a.e(433520), a.e(608912), a.e(526358)]).then(a.bind(a, "tVfZ"))).ChatGptChartContentReference, {
                fallback: (0, n.jsx)(Y.a, {})
            }),
            et = (0, s.a)(l.a, {
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
            ea = (0, s.a)(r.e, {
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
            en = (0, o.lazy)(async () => {
                let {
                    ChatGptLearningBlockContentReference: e
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(990054), a.e(442924), a.e(740793), a.e(452048), a.e(299268), a.e(433520), a.e(608912), a.e(543037)]).then(a.bind(a, "e83y"));
                return {
                    default: e
                }
            }),
            ei = (0, s.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(541995)]).then(a.bind(a, "hOfv"))).WorkHandoffSuggestionContentReference, {
                fallback: null,
                errorFallback: () => null
            });

        function er(e) {
            let t, a, r, l, o, s = (0, i.c)(81),
                {
                    appBlockTopMargin: c,
                    bind: d,
                    contentReferenceIndex: f,
                    hideChartActions: p,
                    isLastNodeInMessage: m,
                    isStreaming: b,
                    readOnly: v,
                    reference: T,
                    renderCodeBlockMath: y
                } = e;
            if ("business_profile_starter_pills" === T.category) {
                let e;
                return s[0] !== T.data ? (e = (0, n.jsx)(h.d, {
                    data: T.data
                }), s[0] = T.data, s[1] = e) : e = s[1], e
            }
            if ("beacon_card" === T.category) {
                let e;
                return s[2] !== f || s[3] !== b || s[4] !== v || s[5] !== T ? (e = (0, n.jsx)(H, {
                    contentReferenceIndex: f,
                    reference: T,
                    isStreaming: b,
                    readOnly: v
                }), s[2] = f, s[3] = b, s[4] = v, s[5] = T, s[6] = e) : e = s[6], e
            }
            if ("suggest_work_handoff" === T.category) {
                let e;
                return s[7] !== f || s[8] !== b || s[9] !== v ? (e = v || b ? null : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(ei, {
                        contentReferenceIndex: f
                    })
                }), s[7] = f, s[8] = b, s[9] = v, s[10] = e) : e = s[10], e
            }
            if ("health_chart" === T.category) {
                let e;
                return s[11] !== f || s[12] !== b || s[13] !== T ? (e = (0, n.jsx)(et, {
                    contentReferenceIndex: f,
                    reference: T,
                    isStreaming: b
                }), s[11] = f, s[12] = b, s[13] = T, s[14] = e) : e = s[14], e
            }
            if ("learning_flashcards" === T.category) {
                let e;
                return s[15] !== f || s[16] !== b || s[17] !== v || s[18] !== T ? (e = (0, n.jsx)(ea, {
                    contentReferenceIndex: f,
                    reference: T,
                    isStreaming: b,
                    readOnly: v
                }), s[15] = f, s[16] = b, s[17] = v, s[18] = T, s[19] = e) : e = s[19], e
            }
            if (N.b.safeParse(T).success) {
                let e;
                return s[20] !== f ? (e = (0, n.jsx)(C, {
                    contentReferenceIndex: f
                }), s[20] = f, s[21] = e) : e = s[21], e
            }
            if ("writing_block" === T.category) {
                let e;
                return s[22] !== f || s[23] !== m || s[24] !== b || s[25] !== v || s[26] !== T.data ? (e = (0, n.jsx)(Z, {
                    contentReferenceIndex: f,
                    data: T.data,
                    isLastNodeInMessage: m,
                    isStreaming: b,
                    readOnly: v
                }), s[22] = f, s[23] = m, s[24] = b, s[25] = v, s[26] = T.data, s[27] = e) : e = s[27], e
            }
            if ("email_preview" === T.category) {
                let e;
                s[28] !== T.data ? (e = $.e.safeParse(T.data), s[28] = T.data, s[29] = e) : e = s[29];
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
            if ("map" === T.category) {
                let e;
                return s[33] !== f || s[34] !== b || s[35] !== T ? (e = (0, n.jsx)(_.a, {
                    contentReferenceIndex: f,
                    isStreaming: b,
                    reference: T
                }), s[33] = f, s[34] = b, s[35] = T, s[36] = e) : e = s[36], e
            }
            if ("app_block" === T.category) {
                let e;
                return s[37] !== c || s[38] !== d || s[39] !== b || s[40] !== v || s[41] !== T ? (e = (0, n.jsx)(g.a, {
                    bind: d,
                    reference: T,
                    isStreaming: b,
                    readOnly: v,
                    withTopMargin: c
                }), s[37] = c, s[38] = d, s[39] = b, s[40] = v, s[41] = T, s[42] = e) : e = s[42], e
            }
            if ("ledger_monetary_value" === T.category) {
                let e, t;
                s[43] !== T ? (e = $.g.safeParse(T), s[43] = T, s[44] = e) : e = s[44];
                let a = e;
                return s[45] !== T || s[46] !== a.data || s[47] !== a.success ? (t = a.success ? (0, n.jsx)(u, {
                    reference: a.data
                }) : (0, n.jsx)(k.a, {
                    reference: T
                }), s[45] = T, s[46] = a.data, s[47] = a.success, s[48] = t) : t = s[48], t
            }
            s[49] !== T ? (t = $.d.safeParse(T), s[49] = T, s[50] = t) : t = s[50];
            let I = t;
            if (I.success) {
                let e;
                return s[51] !== I.data || s[52] !== f || s[53] !== b || s[54] !== v || s[55] !== y ? (e = (0, n.jsx)(z, {
                    contentReferenceIndex: f,
                    isStreaming: b,
                    readOnly: v,
                    reference: I.data,
                    renderMath: y
                }), s[51] = I.data, s[52] = f, s[53] = b, s[54] = v, s[55] = y, s[56] = e) : e = s[56], e
            }
            s[57] !== T ? (a = $.f.safeParse(T), s[57] = T, s[58] = a) : a = s[58];
            let x = a;
            if (x.success) {
                let e;
                return s[59] !== f || s[60] !== x.data ? (e = (0, n.jsx)(el, {
                    contentReferenceIndex: f,
                    reference: x.data
                }), s[59] = f, s[60] = x.data, s[61] = e) : e = s[61], e
            }
            s[62] !== T ? (r = $.h.safeParse(T), s[62] = T, s[63] = r) : r = s[63];
            let w = r;
            if (w.success) {
                let e, t = !0 === b;
                return s[64] !== f || s[65] !== w.data || s[66] !== t ? (e = (0, n.jsx)(X, {
                    contentReferenceIndex: f,
                    isStreaming: t,
                    reference: w.data
                }), s[64] = f, s[65] = w.data, s[66] = t, s[67] = e) : e = s[67], e
            }
            s[68] !== T ? (l = $.i.safeParse(T), s[68] = T, s[69] = l) : l = s[69];
            let E = l;
            if (E.success) {
                let e;
                return s[70] !== f || s[71] !== b || s[72] !== E.data ? (e = (0, n.jsx)(J, {
                    contentReferenceIndex: f,
                    isStreaming: b,
                    reference: E.data
                }), s[70] = f, s[71] = b, s[72] = E.data, s[73] = e) : e = s[73], e
            }
            if (!$.c.safeParse(T).success) {
                let e;
                return s[74] !== T ? (e = (0, n.jsx)(k.c, {
                    reference: T
                }), s[74] = T, s[75] = e) : e = s[75], e
            }
            return s[76] !== f || s[77] !== p || s[78] !== b || s[79] !== T ? (o = (0, n.jsx)(eo, {
                contentReferenceIndex: f,
                hideActions: p,
                reference: T,
                isStreaming: b
            }), s[76] = f, s[77] = p, s[78] = b, s[79] = T, s[80] = o) : o = s[80], o
        }

        function el(e) {
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
            return l[2] !== s || l[3] !== u || l[4] !== d || l[5] !== c ? (a = d && null != en ? (0, n.jsx)(en, {
                contentReferenceIndex: s,
                reference: c
            }) : u, l[2] = s, l[3] = u, l[4] = d, l[5] = c, l[6] = a) : a = l[6], l[7] !== u || l[8] !== a ? (r = (0, n.jsx)(o.Suspense, {
                fallback: u,
                children: a
            }), l[7] = u, l[8] = a, l[9] = r) : r = l[9], r
        }

        function eo(e) {
            let t, a, r = (0, i.c)(6),
                [l] = (0, o.useState)(es);
            return r[0] !== e || r[1] !== l ? (t = (0, n.jsx)(ee, {
                ...e,
                widgetRefSeenAtMs: l
            }), r[0] = e, r[1] = l, r[2] = t) : t = r[2], r[3] !== e.contentReferenceIndex || r[4] !== t ? (a = (0, n.jsx)("div", {
                className: "contents",
                "data-chart-content-reference": e.contentReferenceIndex,
                children: t
            }), r[3] = e.contentReferenceIndex, r[4] = t, r[5] = a) : a = r[5], a
        }

        function es() {
            return performance.now()
        }
    }),
    yxxQ: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("oyxz"),
            l = a("aqd9");
        a.d(t, {}, {
            a: function() {
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
                            defaultMessage: "Creating chart"
                        })
                    })
                }), t[0] = e) : e = t[0], e
            }
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
                sender: n.string().trim().min(1),
                subject: n.string(),
                url: n.string().trim().min(1)
            }),
            g = n.object({
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
            _ = n.object({
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
            b = n.object({
                category: n.literal("language_learning_block"),
                data: m.extend({
                    intent: n.literal("pronunciation")
                }),
                type: n.literal("client_defined_widget")
            }).loose(),
            v = n.object({
                category: n.literal("translation_block"),
                data: n.object({
                    content: n.string(),
                    source_language: r,
                    target_language: r,
                    translated_text: r
                }).loose(),
                type: n.literal("client_defined_widget")
            }).loose(),
            T = n.discriminatedUnion("category", [_, v]);
        a.d(t, {}, {
            a: g,
            b: c,
            c: d,
            d: u,
            e: p,
            f: h,
            g: f,
            h: b,
            i: T
        })
    }),
    ahg9: (function(e, t, a) {
        var n = a("rKAs"),
            i = a("zSQm");
        a.d(t, {}, {
            a: function(e) {
                let t = (0, n.p)(e);
                return null == t ? null : (0, i.a)(t) ?? null
            }
        })
    }),
    C15n: (function(e, t, a) {
        a.d(t, {
            ChatGptFileReference: () => eb
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Rzcw"),
            l = a("nB3p"),
            o = a("slpy"),
            s = a("BOYb"),
            c = a("Q840"),
            d = a("zd8w"),
            u = a("v7qY"),
            f = a("Wf1j"),
            p = a("oyxz"),
            g = a("mG2A"),
            h = a("w7Qu"),
            _ = a("bmU4"),
            m = a("O0M0"),
            b = a("w9uH"),
            v = a("NkEl"),
            T = a("Sm6l"),
            y = a("bf6R"),
            I = a("MyoZ"),
            x = a("IKlv");

        function w(e) {
            let t, a, r, l, o = (0, i.c)(9),
                {
                    children: s,
                    actionLabel: c
                } = e;
            return o[0] !== s ? (t = (0, n.jsx)("span", {
                className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                children: s
            }), o[0] = s, o[1] = t) : t = o[1], o[2] !== c ? (a = c ?? (0, n.jsx)(p.a, {
                id: "chatgpt.artifacts.resource_row.open_file.label",
                defaultMessage: "Open file"
            }), o[2] = c, o[3] = a) : a = o[3], o[4] !== a ? (r = (0, n.jsx)("span", {
                className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                "data-markdown-copy": "exclude",
                children: a
            }), o[4] = a, o[5] = r) : r = o[5], o[6] !== t || o[7] !== r ? (l = (0, n.jsxs)(n.Fragment, {
                children: [t, r]
            }), o[6] = t, o[7] = r, o[8] = l) : l = o[8], l
        }

        function E(e) {
            let t, a, r, l, s, c, d = (0, i.c)(14);
            d[0] !== e ? ({
                label: t,
                loading: a,
                ...r
            } = e, d[0] = e, d[1] = t, d[2] = a, d[3] = r) : (t = d[1], a = d[2], r = d[3]);
            let u = r["aria-label"] ?? t;
            return d[4] !== a ? (l = !a && (0, n.jsx)(x.a, {
                "aria-hidden": !0,
                className: "icon-base"
            }), d[4] = a, d[5] = l) : l = d[5], d[6] !== a || d[7] !== r || d[8] !== u || d[9] !== l ? (s = (0, n.jsx)(T.a, {
                ...r,
                "aria-label": u,
                color: "ghostActive",
                loading: a,
                radius: "large",
                size: "imageToolbar",
                uniform: !0,
                children: l
            }), d[6] = a, d[7] = r, d[8] = u, d[9] = l, d[10] = s) : s = d[10], d[11] !== t || d[12] !== s ? (c = (0, n.jsx)("span", {
                className: "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100",
                children: (0, n.jsx)(o.a, {
                    content: t,
                    children: s
                })
            }), d[11] = t, d[12] = s, d[13] = c) : c = d[13], c
        }
        var C = a("RNul"),
            A = a("SGsN"),
            N = a("bWX0"),
            k = a("i1PI"),
            S = a("jCsa"),
            R = a("MExO"),
            j = a("vYmP"),
            O = a("ZjkF"),
            P = a("WAdu"),
            M = a("cckT"),
            F = a("S1CS"),
            G = a("Ph61"),
            L = a("coFq"),
            W = a("GaA7"),
            H = a("tSEg"),
            B = a("WFY2"),
            D = a("zsxQ"),
            U = a("vldH"),
            V = a("zy7P"),
            q = a("u4MG"),
            z = a("dQRk"),
            Q = a("TUMj"),
            K = a("rxj0"),
            Y = a("zamV"),
            $ = a("s60H"),
            X = a("Ul98"),
            J = a("f2PP"),
            Z = a("c9lJ"),
            ee = a("j0nn"),
            et = a("ahg9"),
            ea = a("j8Yf"),
            en = a("t2JB"),
            ei = a("PO1G"),
            er = a("DIH2");

        function el(e) {
            let t, a, r, o, s, u, f, p, g = (0, i.c)(34),
                {
                    reference: h
                } = e,
                _ = (0, c.y)(H.a),
                m = (0, Q.d)(),
                b = "restricted" === (0, d.useContext)(P.a);
            g[0] !== h.name ? (t = (0, er.b)(h.name), g[0] = h.name, g[1] = t) : t = g[1];
            let v = t,
                T = (0, en.b)(h),
                I = (0, d.useRef)(null),
                x = m?.savedContentResponse,
                w = m?.shouldBlockExternalEgress === !0,
                E = null == x || null == T || w ? null : (0, l.k)(T);
            g[2] !== E || g[3] !== x || g[4] !== _ ? (a = () => {
                (0, G.a)(_, I, x, E)
            }, g[2] = E, g[3] = x, g[4] = _, g[5] = a) : a = g[5];
            let C = (0, d.useEffectEvent)(a);
            g[6] !== C ? (r = () => {
                C()
            }, g[6] = C, g[7] = r) : r = g[7];
            let A = E?.id,
                N = E?.kind,
                k = x?.conversationId,
                S = x?.responseId,
                R = x?.savedContentBackend;
            if (g[8] !== A || g[9] !== N || g[10] !== k || g[11] !== S || g[12] !== R ? (o = [A, N, k, S, R], g[8] = A, g[9] = N, g[10] = k, g[11] = S, g[12] = R, g[13] = o) : o = g[13], (0, d.useEffect)(r, o), null == v || null == T) {
                let e;
                return g[14] !== h ? (e = (0, n.jsx)(ea.a, {
                    reference: h
                }), g[14] = h, g[15] = e) : e = g[15], e
            }
            g[16] !== E || g[17] !== T || g[18] !== w || g[19] !== v || g[20] !== b || g[21] !== x || g[22] !== _ ? (s = w ? (0, n.jsx)(j.a, {
                ariaLabel: v,
                disabled: !0,
                icon: (0, n.jsx)(y.Ad, {}),
                isTerminalInline: !0,
                label: v,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: eo
            }) : (0, n.jsx)(j.a, {
                ariaLabel: v,
                href: T,
                icon: (0, n.jsx)(y.Ad, {}),
                isTerminalInline: !0,
                label: v,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, G.a)(_, I, x, E, !0)
                }
            }), g[16] = E, g[17] = T, g[18] = w, g[19] = v, g[20] = b, g[21] = x, g[22] = _, g[23] = s) : s = g[23];
            let O = s;
            g[24] !== v || g[25] !== h ? (u = function(e, t) {
                let a = (0, er.b)(e.matched_text),
                    n = (0, er.b)(e.library_path);
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
            }(h, v), g[24] = v, g[25] = h, g[26] = u) : u = g[26];
            let M = u;
            if (null == M) return O;
            g[27] !== O || g[28] !== M.prefix || g[29] !== M.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [M.prefix, O, M.suffix]
            }), g[27] = O, g[28] = M.prefix, g[29] = M.suffix, g[30] = f) : f = g[30];
            let F = f;
            return g[31] !== F || g[32] !== M.isInlineCode ? (p = M.isInlineCode ? (0, n.jsx)("code", {
                children: F
            }) : F, g[31] = F, g[32] = M.isInlineCode, g[33] = p) : p = g[33], p
        }

        function eo() {}
        var es = a("Bbed"),
            ec = a("ePaQ"),
            ed = a("JAYD"),
            eu = a("Nfif");
        let ef = (0, es.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(8587)]).then(a.bind(a, "kcNG"))).PrivateSourceFollowUp);

        function ep(e) {
            let t, a, r, l, o, s, u, f = (0, i.c)(29),
                {
                    source: p
                } = e,
                g = (0, c.y)(H.a),
                h = (0, Q.d)(),
                [_, m] = (0, d.useState)(""),
                [b, v] = (0, d.useState)(!1),
                T = (0, d.useContext)(P.a);
            f[0] !== T || f[1] !== g.value ? (t = null != (0, H.h)(g.value) && "restricted" !== T, f[0] = T, f[1] = g.value, f[2] = t) : t = f[2];
            let y = t,
                I = (0, c.x)(y ? ed.a : null, p.connector_id),
                x = !y || !I;
            f[3] !== x || f[4] !== b || f[5] !== _ || f[6] !== p || f[7] !== h ? (a = x || null == h || h.isReadOnly || h.shouldBlockExternalEgress || h.renderRestrictedWidgets || h.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(ef, {
                source: p,
                question: _,
                onQuestionChange: m,
                turn: h,
                pending: b,
                onPendingChange: v
            }, p.id), f[3] = x, f[4] = b, f[5] = _, f[6] = p, f[7] = h, f[8] = a) : a = f[8];
            let w = p.snippet ?? void 0;
            f[9] !== p.name || f[10] !== w ? (r = {
                title: p.name,
                body: w
            }, f[9] = p.name, f[10] = w, f[11] = r) : r = f[11], f[12] !== p.name || f[13] !== r ? (l = {
                title: p.name,
                hoverCard: r
            }, f[12] = p.name, f[13] = r, f[14] = l) : l = f[14], f[15] !== p.connector_id ? (o = (0, n.jsx)(eu.a, {
                appId: p.connector_id
            }), f[15] = p.connector_id, f[16] = o) : o = f[16];
            let E = p.medical_file_reference?.source_label ?? p.name;
            return f[17] !== x || f[18] !== p.name || f[19] !== o || f[20] !== E ? (s = (0, n.jsx)(j.a, {
                ariaLabel: p.name,
                disabled: x,
                icon: o,
                label: E,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: eg
            }), f[17] = x, f[18] = p.name, f[19] = o, f[20] = E, f[21] = s) : s = f[21], f[22] !== x || f[23] !== b || f[24] !== p.connector_id || f[25] !== a || f[26] !== l || f[27] !== s ? (u = (0, n.jsx)(ec.a, {
                disabled: x,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: b,
                followUp: a,
                metadata: l,
                sourceAppId: p.connector_id,
                children: s
            }), f[22] = x, f[23] = b, f[24] = p.connector_id, f[25] = a, f[26] = l, f[27] = s, f[28] = u) : u = f[28], u
        }

        function eg(e) {
            return e.currentTarget.focus()
        }
        var eh = a("ASxG");
        let e_ = eh.object({
                type: eh.literal("file"),
                id: eh.string().min(1),
                name: eh.string().min(1),
                connector_id: eh.string().min(1),
                start_idx: eh.number().optional(),
                cloud_doc_url: eh.string().nullish(),
                extra: eh.object({
                    cloud_doc_url: eh.string().nullish()
                }).nullish(),
                snippet: eh.string().nullish(),
                medical_file_reference: eh.object({
                    source_label: eh.string().min(1),
                    journal_name: eh.string().nullish(),
                    authors_display: eh.string().nullish(),
                    publication_year: eh.string().nullish(),
                    source_url: eh.string().nullish(),
                    journal_homepage_url: eh.string().nullish(),
                    source_icon_url: eh.string().nullish(),
                    doi: eh.string().nullish()
                }),
                drug_file_reference: eh.unknown().nullish()
            }).refine(e => !e.cloud_doc_url && !e.extra?.cloud_doc_url && !e.medical_file_reference?.journal_name && !e.medical_file_reference?.authors_display && !e.medical_file_reference?.publication_year && !e.medical_file_reference?.source_url && !e.medical_file_reference?.journal_homepage_url && !e.medical_file_reference?.source_icon_url && !e.medical_file_reference?.doi && null == e.drug_file_reference),
            em = (0, c.q)(H.a, (e, t) => {
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
                            let e = await (0, b.b)(r, a, i);
                            if (null != e && "tex" === (0, N.c)(e.path)) return {
                                file: e,
                                originalSource: !1
                            };
                            let t = await (0, b.a)(r, a, n, i);
                            return null == t ? null : {
                                file: t,
                                originalSource: !0
                            }
                        }
                        return null
                    }
                }
            });

        function eb(e) {
            let t, a, r, l = (0, i.c)(17);
            l[0] !== e.reference ? (t = e_.safeParse(e.reference), l[0] = e.reference, l[1] = t) : t = l[1];
            let o = t;
            if (o.success) {
                let e;
                return l[2] !== o.data ? (e = (0, n.jsx)(ep, {
                    source: o.data
                }, o.data.id), l[2] = o.data, l[3] = e) : e = l[3], e
            }
            if ("library_folder" === e.reference.type || (0, en.c)(e.reference)) {
                let t;
                return l[4] !== e.reference ? (t = (0, n.jsx)(el, {
                    reference: e.reference
                }), l[4] = e.reference, l[5] = t) : t = l[5], t
            }
            if ("file_navlist" === e.reference.type) {
                let t;
                return l[6] !== e ? (t = (0, n.jsx)(eI, {
                    ...e
                }), l[6] = e, l[7] = t) : t = l[7], t
            }
            let s = "template" === e.presentation ? "auto" : e.presentation;
            l[8] !== e || l[9] !== s ? (a = (0, n.jsx)(eT, {
                ...e,
                presentation: s
            }), l[8] = e, l[9] = s, l[10] = a) : a = l[10];
            let c = a;
            if ("file" === e.reference.type && (null == e.presentation || "auto" === e.presentation) && null == (0, er.b)(e.reference.sandbox_path) && !(0, er.b)(e.reference.link_markdown)?.includes("sandbox:")) {
                let e;
                l[11] !== c ? (e = (0, n.jsx)(ev, {
                    children: c
                }), l[11] = c, l[12] = e) : e = l[12], c = e
            }
            let d = "template" === e.presentation;
            return l[13] !== c || l[14] !== e.reference || l[15] !== d ? (r = (0, n.jsx)(g.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: d
            }), l[13] = c, l[14] = e.reference, l[15] = d, l[16] = r) : r = l[16], r
        }

        function ev(e) {
            let {
                children: t
            } = e, a = (0, Q.d)(), n = (0, c.x)(z.T, a?.conversationId ?? null);
            return null == n || (0, q.a)(n) ? t : null
        }

        function eT(e) {
            var t, a, g, b;
            let q, el, eo, es, ec, ed, eu, ef, ep, eg, eh, e_ = (0, i.c)(49),
                {
                    children: eb,
                    contentReferenceIndex: ev,
                    fileNavigationIndex: eT,
                    presentation: eI,
                    reference: ex,
                    showSaveAs: ew
                } = e,
                eE = void 0 === eI ? "auto" : eI,
                eC = (0, c.y)(H.a),
                eA = (0, f.a)(),
                eN = (0, Q.d)();
            e_[0] !== ev || e_[1] !== eN ? (q = (0, Q.c)(eN, ev)?.messageId ?? eN?.messageId, e_[0] = ev, e_[1] = eN, e_[2] = q) : q = e_[2];
            let ek = q,
                eS = (0, d.useContext)(m.a),
                eR = "restricted" === (0, d.useContext)(P.a),
                [ej, eO] = (0, d.useState)(),
                eP = (0, d.useRef)(null),
                eM = null != ej,
                eF = eS?.accountId ?? null,
                eG = eS?.userId ?? null;
            e_[3] !== ex.cloud_doc_url || e_[4] !== ex.codex_file_citation_authoritative || e_[5] !== eR || e_[6] !== eN?.shouldBlockExternalEgress ? (el = eN?.shouldBlockExternalEgress !== !1 || eR || !0 !== ex.codex_file_citation_authoritative ? null : (0, er.b)(ex.cloud_doc_url), e_[3] = ex.cloud_doc_url, e_[4] = ex.codex_file_citation_authoritative, e_[5] = eR, e_[6] = eN?.shouldBlockExternalEgress, e_[7] = el) : el = e_[7], e_[8] !== eF || e_[9] !== eG || e_[10] !== el ? (eo = {
                accountId: eF,
                userId: eG,
                url: el
            }, e_[8] = eF, e_[9] = eG, e_[10] = el, e_[11] = eo) : eo = e_[11];
            let {
                data: eL
            } = (0, c.x)(V.a, eo), eW = eL ?? (0, en.a)(ex), eH = "library_folder" === ex.source_type, eB = (0, U.b)(ex, {
                fileName: eW ?? void 0,
                messageId: ek
            }), eD = eN?.conversationId, eU = (0, Z.a)(eC.value.pathname)?.params.sharedConversationId, eV = null == eD ? null : eC.get(z._, eD);
            null != eU && eU === eD && (eV = eU);
            let eq = eC.get(ee.f, eS)?.id,
                ez = (0, U.e)(ex),
                eQ = null != eB && eN?.shouldBlockExternalEgress === !0,
                eK = null != eB && null != eW && !eQ && (0, S.a)({
                    fileName: "mounted-library" === eB.type ? eB.sourceFileName ?? eW : eW,
                    mimeType: "mounted-library" === eB.type ? eB.mimeType ?? ez : ez,
                    mountedLibraryFileId: "mounted-library" === eB.type ? eB.mountedLibraryFileId : void 0
                }),
                eY = null == eW || eB?.type === "mounted-library" ? void 0 : (0, $.a)(eW),
                e$ = null != eY || eB?.type === "mounted-library" || null != eW && (0, D.a)(eW, ez),
                eX = null != eB && (!eK && "mounted-library" === eB.type && null == eV && null == eq || (0, J.canOpenChatGptFilePreview)({
                    browserPreview: e$
                })),
                eJ = !eQ && (eK || eX),
                eZ = W.a?.latex != null && "artifact-row" === eE && null != eW && "tex" === (0, N.c)(eW) && eJ && eN?.isReadOnly !== !0 && null == eV && null == eq,
                {
                    data: e0
                } = (0, c.x)(em, {
                    conversationId: eD,
                    messageId: eN?.messageId,
                    target: eB
                }, {
                    enabled: eZ
                }),
                e1 = eZ && null != e0,
                e2 = (void 0 === ew || ew) && eK && (0, J.canSaveChatGptFile)(),
                e3 = (0, et.a)(ex),
                e4 = {
                    fileName: eW ?? void 0,
                    mimeType: (0, U.c)(ex) ?? (eB?.type === "mounted-library" ? eB.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eB?.type === "mounted-library" ? eB.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, U.d)(ex),
                    sourceUrl: e3 ?? void 0
                },
                e5 = "library_folder" === ex.source_type ? (0, en.b)(ex) : e3,
                e6 = null != e5 && eN?.shouldBlockExternalEgress === !0,
                e8 = null == eB || null == eW ? null : (0, X.a)(eB, eW, ez),
                e7 = null == e8 ? null : (0, R.d)(e8)?.sourceUrl,
                e9 = eQ || e6 ? null : e7 ?? (eK || e6 ? null : e5),
                te = eN?.savedContentResponse,
                tt = null;
            null != te && null != eW && (eJ || null != e9) && eB?.type !== "mounted-library" && ("library_folder" === ex.source_type && null != e9 ? tt = (0, l.k)(e9) : null != eB && "libraryFileId" in eB && (tt = (0, l.j)(eB.libraryFileId)));
            let ta = (0, d.useEffectEvent)(() => {
                (0, G.a)(eC, eP, te, tt)
            });
            e_[12] !== ta ? (es = () => {
                ta()
            }, e_[12] = ta, e_[13] = es) : es = e_[13];
            let tn = tt?.id,
                ti = tt?.kind,
                tr = te?.conversationId,
                tl = te?.responseId,
                to = te?.savedContentBackend;
            if (e_[14] !== ti || e_[15] !== tr || e_[16] !== tl || e_[17] !== to || e_[18] !== tn ? (ec = [tn, ti, tr, tl, to], e_[14] = ti, e_[15] = tr, e_[16] = tl, e_[17] = to, e_[18] = tn, e_[19] = ec) : ec = e_[19], (0, d.useEffect)(es, ec), null == eW) {
                let e;
                return e_[20] !== ex ? (e = (0, n.jsx)(ea.a, {
                    reference: ex
                }), e_[20] = ex, e_[21] = e) : e = e_[21], e
            }
            let ts = () => {
                    (0, G.a)(eC, eP, te, tt, !0)
                },
                tc = (e, t, a) => {
                    if (eM || null == eB) return;
                    "opening" === e && ts();
                    let i = (0, h.a)(eW);
                    if ("saving" === e && null != eD && null == eV && null == eq && ("pptx" === i || "xlsx" === i || "csv" === i || "tsv" === i)) {
                        let e = (0, _.b)({
                            artifactType: "pptx" === i ? "slides" : "spreadsheet",
                            importKind: i,
                            threadId: eD,
                            originatingTurn: eN?.turnId == null ? void 0 : {
                                turnId: eN.turnId,
                                inputMessageId: null,
                                messageId: ek ?? null
                            }
                        }, "download-url" === eB.type ? void 0 : {
                            conversationId: eD,
                            byteSource: "chatgpt",
                            target: eB
                        });
                        null != e && (0, _.c)(eC, {
                            ...e,
                            surface: "output-card"
                        }, "download", {
                            format: i
                        })
                    }
                    "saving" === e && null != eD && null != i && (0, Y.b)(eC, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: i,
                        isEditing: !1,
                        source: {
                            conversationId: eD,
                            byteSource: "chatgpt",
                            sharedConversationId: eV,
                            artifactInteractionExcluded: null != eq,
                            target: eB
                        },
                        originatingTurn: eN?.turnId == null ? void 0 : {
                            turnId: eN.turnId,
                            inputMessageId: null,
                            messageId: ek ?? null
                        }
                    }), eO(e);
                    let r = !0,
                        l = () => {
                            r && (r = !1, eO(void 0))
                        },
                        o = {
                            conversationId: eC.get(z.j, eD ?? null) ?? eD,
                            fileName: eW,
                            gizmoId: null == eD ? null : eC.get(z.T, eD),
                            sharedConversationId: eV,
                            mimeType: ez,
                            postId: eq,
                            target: eB
                        };
                    ("saving" === e ? (0, J.saveChatGptFile)(eC, o) : (0, J.openChatGptFile)(eC, {
                        ...o,
                        messageId: (0, Q.c)(eN, ev)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, K.j)(e, eD),
                        browserPreview: e$,
                        conversationViewerUrl: eY,
                        onClose: null == a ? void 0 : () => {
                            l(), a()
                        },
                        downloadFallback: eK && !eX,
                        tabKey: `${eN?.messageId??"message"}:${String(ev)}:${eW}${null==eT?"":`:${String(eT)}`}`
                    })).catch(t => {
                        "opening" === e && r && null != a && ((0, u.flushSync)(l), a()), B.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), eC.get(A.f).danger((0, n.jsx)(p.a, {
                            id: "file-tile.download-failed",
                            defaultMessage: "Failed to download file. Please try again later."
                        }), {
                            errorAnalytics: {
                                toastId: "saving" === e ? "file_download_failed" : "unknown"
                            }
                        })
                    }).finally(l)
                },
                td = e => {
                    eJ && (e.preventDefault(), tc("opening", e))
                };
            if ("artifact-row" === eE && eK) {
                let e;
                e_[22] !== eA ? (e = eA.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file"
                }), e_[22] = eA, e_[23] = e) : e = e_[23], ed = e
            } else e2 && (ed = eA.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…"
            }, {
                fileName: eW
            }));
            let tu = null;
            if (null != ed && (tu = "artifact-row" === eE ? (0, n.jsx)(E, {
                    label: ed,
                    disabled: eM,
                    loading: "saving" === ej,
                    onClick: e => {
                        e.stopPropagation(), tc("saving")
                    }
                }) : (0, n.jsx)(o.a, {
                    content: ed,
                    children: (0, n.jsx)(T.a, {
                        "aria-label": ed,
                        color: "ghost",
                        disabled: eM,
                        loading: "saving" === ej,
                        radius: "default",
                        size: "toolbar",
                        uniform: !0,
                        onClick: e => {
                            e.stopPropagation(), tc("saving")
                        },
                        children: "saving" !== ej && (0, n.jsx)(x.a, {
                            "aria-hidden": !0,
                            className: "icon-sm"
                        })
                    })
                })), eJ && null != e8 ? eu = eM ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}"
                }, {
                    fileName: eW
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}"
                }, {
                    fileName: eW
                }) : eJ ? eu = eX && eM ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}"
                }, {
                    fileName: eW
                }) : eX ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}"
                }, {
                    fileName: eW
                }) : eM ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}"
                }, {
                    fileName: eW
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}"
                }, {
                    fileName: eW
                }) : eQ && (eu = eX ? eA.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode"
                }, {
                    fileName: eW
                }) : eA.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode"
                }, {
                    fileName: eW
                })), "artifact-row" !== eE && "file-tile" !== eE) {
                let e = !0 !== ex.codex_file_citation_authoritative && "my_files" === (t = ex).source && null != (0, er.b)(t.library_file_id) && !ey(t),
                    i = !0 !== ex.codex_file_citation_authoritative && null == eb && !e && (ey(ex) || null != e8 || eN?.conversationOrigin === "tpp" && null != (0, er.b)(ex.library_file_id)),
                    l = null == eb ? (0, er.b)((0, er.d)(ex.codex_file_citation_attributes)?.label) ?? (0, er.b)((0, er.d)(ex.codex_file_citation_attributes)?.title) ?? eW : (0, O.a)(eb);
                e ? (a = ex, g = eW, l = (0, r.c)({
                    fileName: g,
                    matchedText: (0, er.b)(a.matched_text) ?? void 0
                })) : i && (l = (0, r.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eW)));
                let c = (0, n.jsx)("span", {
                    style: r.h,
                    children: (0, n.jsx)(k.a, {
                        ...e4,
                        "aria-hidden": !0,
                        size: 16,
                        style: r.i
                    })
                });
                if (i) {
                    let e, t, a = e => {
                            if (!eJ) return;
                            e.preventDefault();
                            let t = e.currentTarget;
                            tc(eK && (0, M.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        i = {
                            ref: e => {
                                if (null != e) return (0, v.b)(e, {
                                    text: [eW, l, e9].join(" "),
                                    highlight: (0, s.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: eu ?? eW,
                            icon: c,
                            isTerminalInline: !0,
                            label: l,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != e9 ? (0, n.jsx)(j.a, {
                        ...i,
                        href: e9,
                        onActivate: ts,
                        requiresConfirmation: eR,
                        showHoverActions: null != e7,
                        tooltipContent: eW,
                        variant: "file",
                        onUnmodifiedClick: a
                    }) : eJ ? (0, n.jsx)(j.a, {
                        ...i,
                        disabled: eM,
                        variant: "file",
                        onClick: a
                    }) : (0, n.jsx)(j.a, {
                        ...i,
                        disabled: !0,
                        variant: "file",
                        onClick: () => tc("opening")
                    });
                    let r = null != e9 ? e : (0, n.jsx)(o.a, {
                        content: eW,
                        children: (0, n.jsx)("span", {
                            className: "inline-flex",
                            children: e
                        })
                    });
                    return e_[24] !== r ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: r
                    }), e_[24] = r, e_[25] = t) : t = e_[25], t
                }
                if (!0 === ex.codex_file_citation_authoritative || null != eb || e || eN?.conversationOrigin === "tpp") {
                    let e, t = null != e9 ? (0, n.jsxs)(ei.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        href: e9,
                        onActivate: ts,
                        "aria-busy": eM,
                        "aria-label": eu ?? eW,
                        tooltipContent: eW,
                        showHoverActions: null != e7,
                        onUnmodifiedClick: td,
                        children: [c, eb ?? l]
                    }) : (0, n.jsxs)(F.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        reference: {
                            path: eW
                        },
                        ariaBusy: eM,
                        ariaLabel: eu ?? eW,
                        cwd: null,
                        disabled: eM || !eJ,
                        enableWorkspaceFileActions: !1,
                        hostId: eN?.hostId,
                        label: l,
                        tooltipText: eW,
                        onOpen: (e, t) => {
                            eJ && (t.preventDefault(), tc(eK && (0, M.a)(t) ? "saving" : "opening", t))
                        },
                        children: [c, eb ?? l]
                    });
                    return e_[26] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), e_[26] = t, e_[27] = e) : e = e_[27], e
                }
            }
            let tf = (0, r.f)({
                    fileName: eW,
                    mimeType: (b = ex, (0, er.b)(b.source_mime_type) ?? (0, er.b)(b.mounted_library_mime_type) ?? (0, er.b)(b.mime_type) ?? void 0),
                    sourceUrl: e3 ?? void 0
                }),
                tp = (0, N.c)(eW)?.toUpperCase(),
                tg = null;
            if (null != e9 ? tg = (0, n.jsx)(ei.a, {
                    "data-testid": eH ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eE ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: e9,
                    onActivate: ts,
                    "aria-busy": eM,
                    tooltipContent: eW,
                    showHoverActions: null != e7,
                    onUnmodifiedClick: td,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eW
                    })
                }) : eJ ? tg = (0, n.jsx)("button", {
                    "aria-busy": eM,
                    "aria-label": eu,
                    className: "artifact-row" === eE ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: eM,
                    onClick: e => tc(eK && (0, M.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (eQ || e6) && (tg = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": eu ?? eW,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), eM) {
                let e;
                e_[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(C.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), e_[28] = e) : e = e_[28], ef = e
            } else if (null != tu && "artifact-row" === eE) ef = tu;
            else if (null != tu) {
                let e, t = "pointer-events-auto";
                "file-tile" === eE && (t = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), e_[29] !== tu || e_[30] !== t ? (e = (0, n.jsx)("span", {
                    className: t,
                    children: tu
                }), e_[29] = tu, e_[30] = t, e_[31] = e) : e = e_[31], ef = e
            }
            if (e1) {
                let e, t;
                e_[32] !== e0?.originalSource ? (e = e0?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy"
                }) : void 0, e_[32] = e0?.originalSource, e_[33] = e) : e = e_[33], e_[34] !== e0?.originalSource ? (t = e0?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source"
                }) : (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor"
                }), e_[34] = e0?.originalSource, e_[35] = t) : t = e_[35], ef = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(o.a, {
                        content: e,
                        children: (0, n.jsx)(T.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: eM,
                            size: "toolbar",
                            onClick: () => {
                                e0?.originalSource ? (0, L.openFileSidePanelTab)(eC, e0.file.path, {
                                    hostId: e0.file.hostId
                                }) : tc("opening")
                            },
                            children: t
                        })
                    }), ef]
                })
            }
            let th = tp,
                t_ = "default";
            "artifact-row" === eE ? (th = e1 && !e0?.originalSource ? (0, n.jsx)(p.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source"
            }) : (0, n.jsx)(w, {
                children: (0, n.jsx)(p.a, {
                    ...(0, r.d)(tf.category, tf.iconKey)
                })
            }), t_ = e1 ? "default" : "artifact-list") : "file-tile" === eE && (th = eH ? (0, n.jsx)(p.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let a = (0, er.b)(e.description) ?? (0, er.b)(e.snippet);
                return a?.startsWith("/") === !0 ? a : null
            }(ex) ?? (0, n.jsx)(p.a, {
                ...(0, r.d)(tf.category, tf.iconKey)
            }), t_ = "file-tile");
            let tm = "file-tile" === eE ? (0, n.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: eH ? (0, n.jsx)(y.Bd, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(k.a, {
                    ...e4,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, n.jsx)(k.a, {
                ...e4,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            e_[36] !== eW || e_[37] !== t_ || e_[38] !== th || e_[39] !== tm || e_[40] !== ef ? (ep = (0, n.jsx)(I.h, {
                className: "pointer-events-none relative z-10",
                icon: tm,
                subtitle: th,
                title: eW,
                titleTooltip: eW,
                trailing: ef,
                variant: t_
            }), e_[36] = eW, e_[37] = t_, e_[38] = th, e_[39] = tm, e_[40] = ef, e_[41] = ep) : ep = e_[41], e_[42] !== tg || e_[43] !== ep ? (eg = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [tg, ep]
            }), e_[42] = tg, e_[43] = ep, e_[44] = eg) : eg = e_[44];
            let tb = eg;
            if ("artifact-row" === eE) return tb;
            if ("file-tile" === eE) {
                let e;
                return e_[45] !== tb ? (e = (0, n.jsx)(I.a, {
                    as: "span",
                    variant: "file-tile",
                    children: tb
                }), e_[45] = tb, e_[46] = e) : e = e_[46], e
            }
            return e_[47] !== tb ? (eh = (0, n.jsx)(I.a, {
                as: "span",
                className: "mt-3",
                children: tb
            }), e_[47] = tb, e_[48] = eh) : eh = e_[48], eh
        }

        function ey(e) {
            if ("file_citation" === (0, er.b)((0, er.d)(e.fff_metadata)?.file_reference_type)) return !0;
            let t = (0, er.b)(e.matched_text)?.trim().toLowerCase();
            return t?.startsWith("filecite") === !0 || t?.startsWith("[citefilecite") === !0
        }

        function eI(e) {
            let t, a, r, l, o, s = (0, i.c)(15),
                {
                    contentReferenceIndex: c,
                    reference: d
                } = e;
            if (s[0] !== d.items ? (t = Array.isArray(d.items) ? d.items : [], s[0] = d.items, s[1] = t) : t = s[1], s[2] !== c || s[3] !== d || s[4] !== t) {
                l = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, i = t.flatMap(ex);
                    if (0 === i.length) {
                        let e;
                        s[8] !== d ? (e = (0, n.jsx)(ea.c, {
                            reference: d
                        }), s[8] = d, s[9] = e) : e = s[9], l = e;
                        break e
                    }
                    a = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    s[10] !== c ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(eb, {
                            contentReferenceIndex: c,
                            fileNavigationIndex: t,
                            presentation: "file-tile",
                            reference: e
                        })
                    }, `${e.name}:${String(t)}`), s[10] = c, s[11] = e) : e = s[11],
                    r = i.map(e)
                }
                s[2] = c, s[3] = d, s[4] = t, s[5] = a, s[6] = r, s[7] = l
            } else a = s[5], r = s[6], l = s[7];
            return l !== Symbol.for("react.early_return_sentinel") ? l : (s[12] !== a || s[13] !== r ? (o = (0, n.jsx)("ul", {
                className: a,
                children: r
            }), s[12] = a, s[13] = r, s[14] = o) : o = s[14], o)
        }

        function ex(e) {
            let t = (0, er.d)(e),
                a = null == t ? null : (0, en.a)(t);
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
        a.d(t, {}, {
            a: function(e) {
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
        })
    }),
    netB: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("T0Rc"),
            l = a("mEbU"),
            o = a("Q840"),
            s = a("zd8w"),
            c = a("O0M0"),
            d = a("Cslg"),
            u = a("RNul"),
            f = a("smHt"),
            p = a("ZHSy"),
            g = a("WAdu"),
            h = a("tSEg"),
            _ = a("Yscs"),
            m = a("vldH"),
            b = a("dQRk"),
            v = a("TUMj"),
            T = a("EUy6"),
            y = a("j0nn"),
            I = a("C15n"),
            x = a("DIH2");

        function w(e) {
            let t, {
                    reference: a,
                    contentReferenceIndex: i,
                    context: g,
                    fallback: v,
                    renderImage: w
                } = e,
                E = (0, o.y)(h.a),
                C = (0, s.useRef)(null),
                A = (0, l.a)(C, {
                    once: !0
                }),
                N = (0, s.useContext)(c.a),
                k = (0, o.z)(d.f),
                S = (0, o.z)(d.j),
                R = (0, o.x)(b.j, g.conversationId) ?? g.conversationId,
                j = (0, o.x)(b.T, g.conversationId),
                O = (0, o.x)(b._, g.conversationId),
                P = (0, o.x)(y.f, N)?.id,
                M = (0, m.b)(a, {
                    messageId: g.messageId
                }),
                {
                    data: F,
                    isPending: G
                } = (0, r.a)({
                    queryKey: ["chatgpt-sandbox-image", k, S, R, j, O, P, M, i],
                    enabled: A && null != M,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == M) throw Error("Sandbox image has no download target");
                        let a = await (0, m.fetchChatGptFileBlob)({
                            conversationId: R,
                            gizmoId: j,
                            sharedConversationId: O,
                            postId: P,
                            signal: t,
                            target: null == i && "sandbox" === M.type ? (0, T.b)(E, {
                                sandboxPath: M.sandboxPath,
                                turnContext: g,
                                sourceMessageId: M.messageId
                            }) : M,
                            maxBytes: f.a
                        });
                        if (t.throwIfAborted(), !a.type.startsWith("image/")) throw Error("Sandbox image download is not an image");
                        let n = await (0, _.a)(a);
                        return t.throwIfAborted(), n
                    },
                    retry: !1,
                    staleTime: 0,
                    gcTime: 0
                });
            return null != w && (null != F || null != M && G) ? w(F, C) : (t = null != F ? (0, n.jsx)(p.b, {
                alt: (0, x.b)(a.alt) ?? "",
                downloadFileName: (0, x.b)(a.file_name) ?? void 0,
                hostId: g.hostId,
                imageSizing: "conversation",
                mediaPresentation: "default",
                src: F
            }) : null != M && G ? (0, n.jsx)(u.a, {
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
                ref: C,
                children: t
            }))
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, i.c)(7),
                    r = (0, v.d)(),
                    l = (0, s.useContext)(g.a);
                if (null == r || r.isStreaming || r.shouldBlockExternalEgress || "restricted" === l) {
                    let t, i;
                    return a[0] !== e.reference.alt ? (t = (0, x.b)(e.reference.alt), a[0] = e.reference.alt, a[1] = t) : t = a[1], a[2] !== t ? (i = (0, n.jsx)(n.Fragment, {
                        children: t
                    }), a[2] = t, a[3] = i) : i = a[3], i
                }
                return a[4] !== r || a[5] !== e ? (t = (0, n.jsx)(w, {
                    ...e,
                    context: r
                }), a[4] = r, a[5] = e, a[6] = t) : t = a[6], t
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
            i = a("FIIj"),
            r = a("ASxG"),
            l = a("E8Sp"),
            o = a("X6Vn"),
            s = a("nlNF"),
            c = a("ciEf"),
            d = a("zsxQ"),
            u = a("vldH"),
            f = a("OOaz"),
            p = a("dQRk"),
            g = a("rxj0"),
            h = a("xof2"),
            _ = a("s60H"),
            m = a("IDHB"),
            b = a("jAnS"),
            v = a("W5UM");
        let T = r.object({
            conversation_id: r.string().min(1).refine(e => "." !== e && ".." !== e && encodeURIComponent(e) === e),
            message_id: r.string().refine(e => e.trim().length > 0).optional().catch(void 0)
        });

        function y(e) {
            let t = e?.link_affordance;
            return {
                linkAffordance: r.enum(n.h).exclude(["UNRECOGNIZED"]).safeParse("string" == typeof t ? `CHATGPT_LINK_AFFORDANCE_${t.toUpperCase().replace(/^CHATGPT_LINK_AFFORDANCE_/,"")}` : void 0).data,
                linkIndex: r.int32().nonnegative().safeParse(e?.link_index).data,
                citationNumbers: r.array(r.int32().positive()).safeParse(e?.citation_numbers).data
            }
        }
        async function I(e, t) {
            let {
                sandboxPath: n,
                turnContext: i,
                sourceMessageId: r,
                sharedConversationId: l,
                signal: o
            } = t, s = e.get(p.$, i.conversationId), c = l ?? (s?.kind === "conversation" ? s.id : void 0), h = {
                conversationId: e.get(p.j, i.conversationId) ?? (null == c ? null : (0, f.d)(c)),
                fileName: n.slice(n.lastIndexOf("/") + 1),
                gizmoId: e.get(p.T, i.conversationId),
                sharedConversationId: c,
                postId: s?.kind === "post" ? s.post.id : void 0,
                requestSource: "web_dil_action",
                target: x(e, {
                    sandboxPath: n,
                    turnContext: i,
                    sourceMessageId: r
                })
            }, m = (0, _.a)(n);
            if (null == m && !(0, d.a)(n)) return (0, u.a)({
                ...h,
                signal: o
            });
            let {
                openChatGptFile: b
            } = await Promise.resolve().then(a.bind(a, "f2PP"));
            return b(e, {
                ...h,
                isAccessBlocked: e => (0, g.j)(e, i.conversationId),
                messageId: r,
                browserPreview: !0,
                conversationViewerUrl: m,
                tabKey: `${r}:sandbox:${n}`,
                signal: o
            })
        }

        function x(e, t) {
            let a, {
                    sandboxPath: n,
                    turnContext: r,
                    sourceMessageId: l
                } = t,
                o = e.get(p.$, r.conversationId);
            if (o?.kind === "post") {
                let t = e.get(p.N, r.conversationId)?.[l]?.message;
                if (null != t) {
                    let e = (0, i.a)([t]);
                    a = e.get(n) ?? e.get(decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, "%25")))
                }
            }
            return (0, m.a)(e, r.conversationId, {
                type: "sandbox",
                fileId: a,
                sandboxPath: n,
                messageId: l
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
            b: x,
            c: y,
            d: I,
            e: function(e, t) {
                let i, {
                    type: r,
                    openTarget: d,
                    payload: u,
                    turnContext: f,
                    sourceMessageId: g,
                    contentReferenceStartIndex: _,
                    parentContext: m,
                    signal: x,
                    onInteraction: E,
                    onLinkClick: C,
                    onOpenConversation: A
                } = t;
                if ("open_conversation" === r) {
                    let t = T.safeParse(u);
                    if (t.success && !x.aborted) {
                        let a = (0, b.c)(t.data.conversation_id),
                            n = null == t.data.message_id ? a : `${a}?${new URLSearchParams({messageId:t.data.message_id})}`;
                        if (null == A)(0, l.d)(e, n);
                        else {
                            let a = e.get(s.e) + 1,
                                i = e.get(l.b).prepareNavigation(n, {
                                    state: {
                                        workTurnVisit: {
                                            origin: a,
                                            destination: a
                                        }
                                    }
                                });
                            null != i && (A(t.data.conversation_id, a), i())
                        }
                    }
                    return Promise.resolve()
                }
                if ("open_url" !== r) return !1;
                let N = u.url,
                    k = !0 === u.require_safe_url_confirmation;
                if ("string" != typeof N || !N || x.aborted || k && !/^https:\/\//i.test(N)) return Promise.resolve();
                let S = w(N);
                if (null != S) return null == f || null == g ? Promise.resolve() : I(e, {
                    sandboxPath: S,
                    turnContext: f,
                    sourceMessageId: g,
                    signal: x
                });
                try {
                    i = new URL(N, window.location.origin)
                } catch {
                    return Promise.resolve()
                }
                if ("http:" !== i.protocol && "https:" !== i.protocol) return Promise.resolve();
                f?.shouldBlockExternalEgress || E?.(), C?.();
                let R = i.toString();
                return ((0, h.g)(e, {
                    ...y(u),
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                    linkType: "search_citation" === u.link_type ? "CHATGPT_LINK_TYPE_SEARCH_CITATION" : "CHATGPT_LINK_TYPE_GENERAL_EXTERNAL",
                    conversationId: e.get(p.j, f?.conversationId ?? null) ?? void 0,
                    messageId: g,
                    assistantMessageId: g,
                    turnOrdinal: (0, h.a)(e, f?.conversationId, g),
                    contentReferenceType: "dil",
                    contentReferenceStartIndex: _,
                    parentContext: m,
                    url: f?.shouldBlockExternalEgress ? void 0 : R
                }), k && !f?.safeUrls?.includes(R)) ? async function(e, t, n, i) {
                    let r = await (0, c.b)(t).catch(() => !1);
                    if (n.aborted) return;
                    if (r) return void(0, v.b)(e, t, i);
                    let {
                        ExternalLinkConfirmationDialog: l
                    } = await Promise.resolve().then(a.bind(a, "g25Y"));
                    n.aborted || (0, o.f)(e, l, {
                        href: t,
                        initiator: "markdown_link_click",
                        onOpen: () => {
                            n.aborted || (0, v.b)(e, t, i)
                        }
                    })
                }(e, R, x, d): ((0, v.b)(e, R, d), Promise.resolve())
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
            i = a("isy9"),
            r = a("OMIV"),
            l = a("UIeB");
        let o = new Set(["entity_reviews_widget", "entity_reviews_ref_widget", "restaurant_reviews", "EntityReviewsWidget", "EntityReviewsRefWidget", "RestaurantReviews"]);

        function s(e, t, a) {
            return "sidebar" === t && null != a && o.has(a) && e.get(r.e, "1492523517") ? "in-app-browser" : void 0
        }

        function c(e, t, a, i) {
            (e.get(r.e, "1775679520") ? n.d : n.f)({
                href: t,
                disposition: i,
                initiator: "markdown_link_click",
                openTarget: a
            })
        }
        a.d(t, {}, {
            a: s,
            b: c,
            c: function(e, t, a, n, r) {
                (0, i.b)(e, t) || c(e, (0, l.a)(t), s(e, a, n), r)
            }
        })
    }),
    CMlo: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("Q840"),
            l = a("zd8w"),
            o = a("Wf1j"),
            s = a("oyxz"),
            c = a("Qgfj"),
            d = a("Sm6l"),
            u = a("nhmq"),
            f = a("nzx4"),
            p = a("zLIa"),
            g = a("SGsN"),
            h = a("OWtl"),
            _ = a("hGH3");

        function m(e) {
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
                let t, a, c, T, y, I, x, w, E, C, A, N, k, S, R, j, O, P, M, F, G, L, W = (0, i.c)(58),
                    {
                        isVisible: H,
                        feedbackConfig: B,
                        onImpression: D,
                        onOpen: U,
                        onSubmit: V
                    } = e,
                    q = (0, r.y)(h.a),
                    z = (0, o.a)(),
                    Q = (0, l.useId)(),
                    K = (0, l.useRef)(!1),
                    [Y, $] = (0, l.useState)("");
                W[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], W[0] = t) : t = W[0];
                let [X, J] = (0, l.useState)(t), [Z, ee] = (0, l.useState)(!1), et = B?.reason_options ?? v;
                if (W[1] !== et || W[2] !== X) {
                    let e;
                    W[4] !== et ? (e = e => et.some(t => t.reason === e), W[4] = et, W[5] = e) : e = W[5], a = X.filter(e), W[1] = et, W[2] = X, W[3] = a
                } else a = W[3];
                let ea = a;
                if (!(void 0 === H || H)) return null;
                if (W[6] !== U ? (c = e => {
                        ee(e), e && U()
                    }, W[6] = U, W[7] = c) : c = W[7], W[8] !== D ? (T = e => {
                        if (null != e && null != D && !K.current) return (0, _.a)(e, () => (K.current = !0, D(), !0))
                    }, W[8] = D, W[9] = T) : T = W[9], W[10] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.button.open",
                        defaultMessage: "Give feedback"
                    }), W[10] = y) : y = W[10], W[11] !== T ? (I = (0, n.jsx)(f.e, {
                        asChild: !0,
                        children: (0, n.jsx)(d.a, {
                            ref: T,
                            color: "ghostSecondary",
                            "data-turn-action-width": "content",
                            size: "compact",
                            type: "button",
                            children: y
                        })
                    }), W[11] = T, W[12] = I) : I = W[12], W[13] !== Y || W[14] !== V || W[15] !== q || W[16] !== ea ? (x = e => {
                        e.preventDefault();
                        let t = Y.trim();
                        "" !== t && (V({
                            feedbackText: t,
                            feedbackReasons: ea
                        }), $(""), J([]), ee(!1), q.get(g.f).success((0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.toast.success",
                            defaultMessage: "Your feedback has been submitted"
                        })))
                    }, W[13] = Y, W[14] = V, W[15] = q, W[16] = ea, W[17] = x) : x = W[17], W[18] !== B ? (w = B ? B.title : (0, n.jsx)(s.a, {
                        id: "chatgpt.modelWrittenDil.feedback.popover.title",
                        defaultMessage: "Help our team improve visual answers in ChatGPT"
                    }), W[18] = B, W[19] = w) : w = W[19], W[20] !== w ? (E = (0, n.jsx)(f.d, {
                        children: w
                    }), W[20] = w, W[21] = E) : E = W[21], W[22] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, n.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(s.a, {
                            id: "chatgpt.modelWrittenDil.feedback.popover.description",
                            defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better."
                        })
                    }), W[22] = C) : C = W[22], W[23] !== et || W[24] !== X) {
                    let e;
                    W[26] !== X ? (e = e => (0, n.jsxs)("label", {
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
                    }, e.reason), W[26] = X, W[27] = e) : e = W[27], A = et.map(e), W[23] = et, W[24] = X, W[25] = A
                } else A = W[25];
                W[28] !== A ? (N = (0, n.jsx)("fieldset", {
                    className: "flex flex-col gap-2 text-sm",
                    children: A
                }), W[28] = A, W[29] = N) : N = W[29], W[30] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                    defaultMessage: "Additional feedback"
                }), W[30] = k) : k = W[30], W[31] !== Q ? (S = (0, n.jsx)("label", {
                    className: "sr-only",
                    htmlFor: Q,
                    children: k
                }), W[31] = Q, W[32] = S) : S = W[32], W[33] !== z || W[34] !== ea.length ? (R = z.formatMessage(ea.length > 0 ? b.placeholderWithReasons : b.placeholderDefault), W[33] = z, W[34] = ea.length, W[35] = R) : R = W[35], W[36] === Symbol.for("react.memo_cache_sentinel") ? (j = e => $(e.target.value), W[36] = j) : j = W[36], W[37] !== Y || W[38] !== Q || W[39] !== R ? (O = (0, n.jsx)(p.c, {
                    id: Q,
                    autoFocus: !0,
                    autoResize: !0,
                    maxLength: 1600,
                    name: "model-written-dil-feedback",
                    placeholder: R,
                    rows: 3,
                    value: Y,
                    variant: "feedback",
                    onChange: j
                }), W[37] = Y, W[38] = Q, W[39] = R, W[40] = O) : O = W[40], W[41] !== Y ? (P = Y.trim(), W[41] = Y, W[42] = P) : P = W[42];
                let en = "" === P;
                return W[43] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, n.jsx)(s.a, {
                    id: "chatgpt.modelWrittenDil.feedback.button.submit",
                    defaultMessage: "Send feedback"
                }), W[43] = M) : M = W[43], W[44] !== en ? (F = (0, n.jsx)(d.a, {
                    className: "self-center",
                    color: "primary",
                    disabled: en,
                    radius: "full",
                    size: "menuRow",
                    type: "submit",
                    children: M
                }), W[44] = en, W[45] = F) : F = W[45], W[46] !== E || W[47] !== N || W[48] !== S || W[49] !== O || W[50] !== F || W[51] !== x ? (G = (0, n.jsx)(f.c, {
                    className: "select-none",
                    align: "end",
                    side: "bottom",
                    variant: "menu",
                    onEscapeKeyDown: m,
                    children: (0, n.jsxs)("form", {
                        className: "flex flex-col gap-3 p-2",
                        onSubmit: x,
                        children: [E, C, N, S, O, F]
                    })
                }), W[46] = E, W[47] = N, W[48] = S, W[49] = O, W[50] = F, W[51] = x, W[52] = G) : G = W[52], W[53] !== Z || W[54] !== G || W[55] !== c || W[56] !== I ? (L = (0, n.jsxs)(f.a, {
                    open: Z,
                    onOpenChange: c,
                    children: [I, G]
                }), W[53] = Z, W[54] = G, W[55] = c, W[56] = I, W[57] = L) : L = W[57], L
            }
        })
    }),
    ciVz: (function(e, t, a) {
        var n = a("Q840"),
            i = a("Zqzr"),
            r = a("Cslg"),
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
            p = (0, n.c)(o.a, e => {
                let {
                    get: t
                } = e, {
                    authLoading: a,
                    accountInfoLoading: n,
                    accountInfoError: i,
                    authMethod: r,
                    plan: o
                } = t(l.g);
                return a || i || n || "chatgpt" !== r || null == o ? null : (0, c.g)(o) || (0, d.b)(o)
            }),
            g = (0, n.c)(o.a, e => {
                let {
                    get: t
                } = e, a = t(r.m);
                return !a.authLoading && !a.accountLoading && (null == a.authMethod || "chatgpt" === a.authMethod && null != a.plan && (!(0, d.b)(a.plan) || (0, i.ui)(a.email ?? null)))
            }),
            h = (0, n.v)(s.a, e => null),
            _ = (0, n.v)(s.a, e => "unknown"),
            m = (0, n.u)(s.a, !1);
        a.d(t, {}, {
            a: g,
            b: m,
            c: p,
            d: f,
            e: h,
            f: _
        })
    }),
    hCYm: (function(e, t, a) {
        a.d(t, {
            a: () => R,
            b: () => j
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("EA6X"),
            l = a("D015"),
            o = a("I2Ei"),
            s = a("Q840"),
            c = a("AuIy"),
            d = a("zd8w"),
            u = a("Wf1j"),
            f = a("ASxG"),
            p = a("Cslg"),
            g = a("WAdu"),
            h = a("yGJW"),
            _ = a("OWtl"),
            m = a("OMIV"),
            b = a("Kwur"),
            v = a("dQRk"),
            T = a("TUMj"),
            y = a("gKmr"),
            I = a("xof2"),
            x = a("CMlo"),
            w = a("rHrT");
        let E = f.enum(["helpful", "wrong_or_confusing", "broken", "not_relevant_to_question", "data_is_incorrect"]),
            C = f.string().refine(e => e.trim().length > 0),
            A = f.object({
                locale: C,
                title: C,
                reason_options: f.array(f.object({
                    reason: E,
                    label: C
                })).min(1).refine(e => new Set(e.map(e => {
                    let {
                        reason: t
                    } = e;
                    return t
                })).size === e.length)
            });

        function N(e) {
            return new Intl.Locale(e.trim().replaceAll("_", "-")).baseName
        }
        var k = a("ciVz");
        let S = (0, s.d)(_.a, (e, t) => {
            let {
                get: a
            } = t;
            if (null == e || !a(k.a) || !a(m.e, "1205965498") || null != a(v.$, e.conversationId)) return !1;
            let n = a(v.N, e.conversationId)?.[e.messageId]?.message;
            return null != n && (0, c.s)(n.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && n.metadata?.model_dil_v2 == null && (0, c.s)((0, c.s)(n.metadata?.model_dil)?.dil)?.type == null && (n.metadata?.is_complete ?? "in_progress" !== n.status) === !0
        });

        function R(e) {
            let t, a, r, l, u, p, h, _, m, b, I, x, w, E, C, A = (0, i.c)(49),
                {
                    contentReferenceIndex: N,
                    reference: k
                } = e,
                R = (0, T.d)(),
                O = (0, d.useContext)(g.a);
            A[0] !== N || A[1] !== R ? (t = (0, T.c)(R, N), A[0] = N, A[1] = R, A[2] = t) : t = A[2];
            let P = t;
            A[3] !== P || A[4] !== R ? (a = null != R && null != P ? {
                conversationId: R.conversationId,
                messageId: P.messageId
            } : null, A[3] = P, A[4] = R, A[5] = a) : a = A[5];
            let M = a,
                F = (0, s.x)(S, M),
                G = (0, s.x)(v.j, R?.conversationId ?? null);
            if (!F || null == R || null == P || !G || !0 === k.hide_widget_feedback || "custom_agent_run" === k.name || R.isReadOnly || R.shouldBlockExternalEgress || "restricted" === O) return null;
            if (A[6] !== k.dil) {
                let e = (0, c.s)(k.dil);
                r = f.string().safeParse(e?.type), A[6] = k.dil, A[7] = r
            } else r = A[7];
            let L = r.data;
            if (A[8] !== G || A[9] !== k.dil || A[10] !== k.dil_url || A[11] !== k.dil_version || A[12] !== k.feedback_config || A[13] !== k.name || A[14] !== k.start_idx || A[15] !== P.index || A[16] !== P.messageId || A[17] !== L) {
                let e, t, a, n, i = y.c.safeParse(k.dil).data;
                A[29] !== k.name ? (e = f.string().safeParse(k.name), A[29] = k.name, A[30] = e) : e = A[30];
                let r = e.data,
                    s = `${P.messageId}:${P.index}`;
                A[31] !== k.start_idx ? (t = f.number().safeParse(k.start_idx), A[31] = k.start_idx, A[32] = t) : t = A[32], u = t.data, l = j, m = G, b = P.messageId, I = s, x = k.feedback_config, w = r, E = L, A[33] !== k.dil_url ? (a = f.string().safeParse(k.dil_url), A[33] = k.dil_url, A[34] = a) : a = A[34], p = a.data, A[35] !== k.dil_version ? (n = f.string().safeParse(k.dil_version), A[35] = k.dil_version, A[36] = n) : n = A[36], h = n.data, _ = (0, o.g)(i?.appData), A[8] = G, A[9] = k.dil, A[10] = k.dil_url, A[11] = k.dil_version, A[12] = k.feedback_config, A[13] = k.name, A[14] = k.start_idx, A[15] = P.index, A[16] = P.messageId, A[17] = L, A[18] = l, A[19] = u, A[20] = p, A[21] = h, A[22] = _, A[23] = m, A[24] = b, A[25] = I, A[26] = x, A[27] = w, A[28] = E
            } else l = A[18], u = A[19], p = A[20], h = A[21], _ = A[22], m = A[23], b = A[24], I = A[25], x = A[26], w = A[27], E = A[28];
            return A[37] !== l || A[38] !== u || A[39] !== p || A[40] !== h || A[41] !== _ || A[42] !== m || A[43] !== b || A[44] !== I || A[45] !== x || A[46] !== w || A[47] !== E ? (C = (0, n.jsx)(l, {
                conversationId: m,
                messageId: b,
                widgetRefId: I,
                feedbackConfig: x,
                widgetName: w,
                widgetType: E,
                dilUrl: p,
                dilVersion: h,
                metadata: _,
                startIndex: u
            }), A[37] = l, A[38] = u, A[39] = p, A[40] = h, A[41] = _, A[42] = m, A[43] = b, A[44] = I, A[45] = x, A[46] = w, A[47] = E, A[48] = C) : C = A[48], C
        }

        function j(e) {
            let t, a, o, c, f, g, m = (0, i.c)(36),
                {
                    conversationId: v,
                    messageId: y,
                    widgetRefId: E,
                    widgetName: C,
                    widgetType: k,
                    isGenui: S,
                    dilUrl: R,
                    dilVersion: j,
                    metadata: M,
                    startIndex: F,
                    feedbackConfig: G
                } = e,
                L = void 0 !== S && S,
                W = (0, s.y)(_.a),
                H = (0, u.a)(),
                B = (0, d.useRef)(null),
                D = (0, T.d)();
            m[0] !== v || m[1] !== L || m[2] !== y || m[3] !== W || m[4] !== F || m[5] !== D || m[6] !== C || m[7] !== k ? (t = (e, t, a) => {
                try {
                    let n = {
                        actionType: "feedback_button" === e ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: y,
                        contentReferenceStartIndex: null == F ? void 0 : (0, l.a)(F),
                        contentReferenceType: "dil",
                        conversationId: v,
                        feedbackReasons: t?.length ? t : void 0,
                        isGenui: L,
                        messageId: y,
                        surfaceLocation: r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: D ? (0, I.a)(W, D.conversationId, y) : void 0,
                        widgetActionTarget: e,
                        widgetAffordance: "feedback_form" === e ? r.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON : r.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON,
                        widgetName: C,
                        widgetType: k
                    };
                    (void 0 === a || a) && "feedback_button" !== e && (0, I.h)(W, n), (0, h.a)(W, r.j, n)
                } catch {}
            }, m[0] = v, m[1] = L, m[2] = y, m[3] = W, m[4] = F, m[5] = D, m[6] = C, m[7] = k, m[8] = t) : t = m[8];
            let U = t;
            return m[9] !== G || m[10] !== H.locale ? (a = function(e, t) {
                let a = A.safeParse(e);
                if (a.success) try {
                    return (0, w.f)(N(a.data.locale), N(t)) ? a.data : void 0
                } catch {
                    return
                }
            }(G, H.locale), m[9] = G, m[10] = H.locale, m[11] = a) : a = m[11], m[12] !== L || m[13] !== U || m[14] !== D ? (o = L || null == D || !1 === D.trackShownImpressions ? void 0 : () => U("feedback_button"), m[12] = L, m[13] = U, m[14] = D, m[15] = o) : o = m[15], m[16] !== U || m[17] !== W ? (c = () => {
                B.current = W.get(p.m), U("feedback_panel")
            }, m[16] = U, m[17] = W, m[18] = c) : c = m[18], m[19] !== v || m[20] !== R || m[21] !== j || m[22] !== U || m[23] !== y || m[24] !== M || m[25] !== W || m[26] !== C || m[27] !== E || m[28] !== k ? (f = e => {
                let {
                    feedbackText: t,
                    feedbackReasons: a
                } = e, n = W.get(p.m), i = null != B.current && B.current.userId === n.userId && B.current.authenticatedAccountId === n.authenticatedAccountId && B.current.authMethod === n.authMethod;
                U("feedback_form", a, i), i && b.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "widget_feedback",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: v,
                                message_id: y
                            },
                            widget_feedback: {
                                feedback: t,
                                checked_reasons: a.length > 0 ? a : void 0,
                                widget_name: C,
                                widget_type: k,
                                widget_ref_id: E,
                                dil_version: j
                            }
                        }
                    }
                }).catch(P), b.Request.safePost("/conversation/message/genui/feedback", {
                    requestBody: {
                        checked_reasons: a.length > 0 ? a : void 0,
                        conversation_id: v,
                        dil_url: R,
                        dil_version: j,
                        feedback: t,
                        language: globalThis.navigator?.language ?? "en-US",
                        message_id: y,
                        metadata: M,
                        timestamp_client: Date.now(),
                        user_agent: globalThis.navigator?.userAgent || void 0,
                        widget_name: C,
                        widget_ref_id: E,
                        widget_type: k
                    }
                }).catch(O)
            }, m[19] = v, m[20] = R, m[21] = j, m[22] = U, m[23] = y, m[24] = M, m[25] = W, m[26] = C, m[27] = E, m[28] = k, m[29] = f) : f = m[29], m[30] !== a || m[31] !== o || m[32] !== c || m[33] !== f || m[34] !== E ? (g = (0, n.jsx)("div", {
                className: "mt-1 flex justify-end",
                children: (0, n.jsx)(x.a, {
                    feedbackConfig: a,
                    onImpression: o,
                    onOpen: c,
                    onSubmit: f
                }, E)
            }), m[30] = a, m[31] = o, m[32] = c, m[33] = f, m[34] = E, m[35] = g) : g = m[35], g
        }

        function O() {}

        function P() {}
    }),
    zamV: (function(e, t, a) {
        var n = a("tFxw"),
            i = a("MVHH"),
            r = a("yGJW"),
            l = a("dQRk"),
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
            let a, {
                action: s,
                importKind: c,
                source: u,
                isEditing: f,
                originatingTurn: p
            } = t;
            if (null == u || f) return;
            let {
                conversationId: g,
                target: h
            } = u;
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== g || null != u.sharedConversationId || !0 === u.artifactInteractionExcluded || null != e.get(l.$, g)) return;
            if ("pptx" === c) a = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== c && "csv" !== c && "tsv" !== c) return;
                a = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let _ = e.get(l.y, g),
                m = "tpp" === _ || "flora" === _;
            if (!m || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== s) try {
                let t = "fileId" in h ? h.fileId : void 0,
                    l = "libraryFileId" in h ? h.libraryFileId : void 0,
                    c = (0, n.a)("mounted-library" === h.type ? h.mountedLibraryFileId : void 0, l, t),
                    u = null != c && (null != (0, n.d)(c) || (0, n.j)(c)) ? c : void 0;
                (0, r.a)(e, i.k, {
                    action: s,
                    artifactKind: a,
                    conversationId: g,
                    fileId: d(t),
                    libraryFileId: d(l),
                    mountedLibraryFileId: u,
                    messageId: p?.messageId ?? ("sandbox" === h.type ? h.messageId : void 0),
                    inputMessageId: p?.inputMessageId ?? void 0,
                    turnExchangeId: p?.turnId,
                    interactionMode: "CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY",
                    isTemporaryChat: (0, o.i)(e.value.search ?? ""),
                    productExperience: m ? "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_WORK" : "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_CHAT"
                })
            } catch {}
        }

        function d(e) {
            return e?.replace(/^(?:file-library:)+/u, "").startsWith("external-") ? void 0 : e || void 0
        }
        a.d(t, {}, {
            a: function(e, t) {
                return {
                    onPreviewOpened: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW"
                    }),
                    onDownload: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD"
                    }),
                    onClose: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLOSE_PREVIEW"
                    }),
                    onInteractionAttempt: a => {
                        c(e, {
                            ...t,
                            action: s[a]
                        })
                    }
                }
            },
            b: c
        })
    }),
    s60H: (function(e, t, a) {
        a("QdUF"), a("M8lA"), a("bWX0"), a.d(t, {}, {
            a: function(e) {}
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
        async function p(e, t) {
            let {
                conversationId: a,
                messageId: n,
                libraryFileId: i,
                status: u,
                surface: f,
                folder: p,
                created: _,
                onView: m,
                updateFavorite: b
            } = t, v = () => e.get(r.f) === e.value.accountId && e.get(r.k) === e.value.userId;
            if (!v() || u.isUnavailable) return;
            let T = e.get(o.a),
                y = t => {
                    v() && (g(e, a, n, "toast_action", f), m?.((0, d.b)(t, "banner")))
                },
                I = i,
                x = null != p || !u.isFavorited,
                w = null == p || !u.isFavorited,
                E = x ? "save" : "unsave",
                C = performance.now();
            if (w) {
                g(e, a, n, E, f);
                let t = null != (I = await b(x, null == p, null == m ? void 0 : () => y("/library?tab=favorites")));
                if (!v() || (h(e, {
                        eventType: t ? x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_SUCCESS" : x ? "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SAVE_ERROR" : "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_UNSAVE_ERROR",
                        action: E,
                        result: t ? "success" : "error",
                        surface: f,
                        mutationDurationMs: t ? performance.now() - C : void 0
                    }), !t)) return
            }
            if (v()) {
                if (null != p) {
                    try {
                        if (null == I) throw Error("Image Library file ID is missing.");
                        await (0, s.b)(e, I, p.id)
                    } catch {
                        v() && e.get(l.f).danger(T.formatMessage({
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
                    (0, c.a)(e), e.get(l.f).success(_ ? T.formatMessage({
                        id: "library.favoriteFolder.created",
                        defaultMessage: "{folderName} successfully created"
                    }, {
                        folderName: p.name
                    }) : T.formatMessage({
                        id: "library.favoriteFolder.added",
                        defaultMessage: "Added to {folderName}"
                    }, {
                        folderName: p.name
                    }), {
                        primaryAction: {
                            label: T.formatMessage({
                                id: "library.favoriteFolder.view",
                                defaultMessage: "View"
                            }),
                            onClick: () => y(`/library/d/${encodeURIComponent(p.id)}`)
                        }
                    })
                }
                w && x && h(e, {
                    eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_SUCCESS_TOAST_RENDERED",
                    surface: "save_toast",
                    action: E,
                    clickToSuccessToastMs: performance.now() - C
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
            }), h(e, {
                eventType: o,
                action: "toast_action" === i ? void 0 : i,
                surface: "toast_action" === i ? "save_toast" : r
            })
        }

        function h(e, t) {
            (0, u.a)(e, i.jb, {
                ...t,
                entityKind: "image"
            })
        }
        a.d(t, {}, {
            a: async function(e, t) {
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
            },
            b: p
        })
    }),
    oQ79: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("slpy"),
            l = a("Q840"),
            o = a("Wf1j"),
            s = a("rEML"),
            c = a("Cslg"),
            d = a("Sm6l"),
            u = a("HOLv"),
            f = a("jo5I"),
            p = a("jU86"),
            g = a("Qed5"),
            h = a("VJXV"),
            _ = a("mF5c"),
            m = a("ejvO"),
            b = a("mKX5"),
            v = a("zJ9Y");

        function T(e) {
            let t, a, c, h, T = (0, i.c)(50),
                {
                    source: y,
                    sources: I,
                    conversationId: x,
                    messageId: w,
                    surface: E,
                    presentation: C,
                    visibility: A,
                    joined: N
                } = e,
                k = void 0 === A ? "hover" : A,
                S = void 0 !== N && N,
                R = (0, l.y)(p.c),
                j = (0, s._)(),
                O = (0, o.a)();
            T[0] !== y ? (t = (0, m.a)(y), T[0] = y, T[1] = t) : t = T[1];
            let P = t,
                {
                    data: M,
                    isError: F
                } = (0, l.x)(m.d, I),
                G = (0, l.x)(m.b, P),
                L = M?.[P];
            T[2] !== x || T[3] !== F || T[4] !== P || T[5] !== w || T[6] !== j || T[7] !== R || T[8] !== y || T[9] !== I || T[10] !== L || T[11] !== E ? (a = async (e, t) => {
                null == L || F || R.get(m.b, P) || (R.set(m.b, P, !0), await (0, _.b)(R, {
                    conversationId: x,
                    messageId: w,
                    libraryFileId: L.library_file_id,
                    status: {
                        favoriteId: L.favorite_id ?? null,
                        isFavorited: null != L.favorite_id
                    },
                    surface: E,
                    folder: e,
                    created: void 0 !== t && t,
                    onView: e => {
                        j(e)
                    },
                    updateFavorite: (e, t, a) => (0, m.e)(R, {
                        source: y,
                        previous: L,
                        save: e,
                        surface: E,
                        showToast: t,
                        onView: a
                    })
                }).then(async () => {
                    null != e && await R.query.invalidate(m.d, I)
                }).finally(() => {
                    R.set(m.b, P, !1)
                }))
            }, T[2] = x, T[3] = F, T[4] = P, T[5] = w, T[6] = j, T[7] = R, T[8] = y, T[9] = I, T[10] = L, T[11] = E, T[12] = a) : a = T[12];
            let W = a;
            if (F) return null;
            if ("menuItem" === C) {
                let e, t, a = L?.favorite_id != null,
                    i = G || null == L;
                return T[13] !== W ? (e = () => void W(), T[13] = W, T[14] = e) : e = T[14], T[15] !== a || T[16] !== i || T[17] !== e ? (t = (0, n.jsx)(g.a, {
                    isFavorited: a,
                    disabled: i,
                    onSelect: e
                }), T[15] = a, T[16] = i, T[17] = e, T[18] = t) : t = T[18], t
            }
            if ("button" === C) {
                let e, t, a, i, l, o = L?.favorite_id != null;
                T[19] !== O ? (e = O.formatMessage({
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), T[19] = O, T[20] = e) : e = T[20];
                let s = e;
                if (null == L) {
                    let e;
                    T[21] !== O ? (e = O.formatMessage({
                        id: "library.favoriteFolder.checking",
                        defaultMessage: "Checking Favorites status"
                    }), T[21] = O, T[22] = e) : e = T[22], s = e
                } else if (o) {
                    let e;
                    T[23] !== O ? (e = O.formatMessage({
                        id: "library.favorites.remove",
                        defaultMessage: "Remove from Favorites"
                    }), T[23] = O, T[24] = e) : e = T[24], s = e
                }
                let c = G || null == L || void 0,
                    f = G || null == L;
                T[25] !== W ? (t = e => {
                    e.stopPropagation(), W()
                }, T[25] = W, T[26] = t) : t = T[26];
                let p = o ? b.a : v.a;
                return T[27] !== p ? (a = (0, n.jsx)(u.a, {
                    asset: p
                }), T[27] = p, T[28] = a) : a = T[28], T[29] !== o || T[30] !== s || T[31] !== a || T[32] !== c || T[33] !== f || T[34] !== t ? (i = (0, n.jsx)(d.a, {
                    "aria-label": s,
                    "aria-pressed": o,
                    "aria-busy": c,
                    color: "mediaOverlay",
                    radius: "full",
                    size: "inputIcon",
                    disabled: f,
                    onClick: t,
                    children: a
                }), T[29] = o, T[30] = s, T[31] = a, T[32] = c, T[33] = f, T[34] = t, T[35] = i) : i = T[35], T[36] !== s || T[37] !== i ? (l = (0, n.jsx)(r.a, {
                    content: s,
                    children: i
                }), T[36] = s, T[37] = i, T[38] = l) : l = T[38], l
            }
            let H = L?.favorite_id != null,
                B = null == L,
                D = L?.directory_id ?? null;
            return T[39] !== W ? (c = () => void W(), T[39] = W, T[40] = c) : c = T[40], T[41] !== G || T[42] !== S || T[43] !== H || T[44] !== B || T[45] !== D || T[46] !== c || T[47] !== W || T[48] !== k ? (h = (0, n.jsx)(f.a, {
                isSaved: H,
                isBusy: G,
                isCheckingStatus: B,
                selectedFolderId: D,
                joined: S,
                visibility: k,
                onToggleFavorite: c,
                onSelectFolder: W
            }), T[41] = G, T[42] = S, T[43] = H, T[44] = B, T[45] = D, T[46] = c, T[47] = W, T[48] = k, T[49] = h) : h = T[49], h
        }
        a.d(t, {}, {
            SearchImageFavorite: function(e) {
                let t, a, r, o, s = (0, i.c)(11),
                    d = (0, l.z)(h.d),
                    u = (0, l.z)(c.l),
                    f = (0, l.z)(c.f),
                    g = (0, l.z)(c.k);
                return d && "allowed" === u.status && null != f && null != g ? (s[0] !== f || s[1] !== g ? (t = {
                    accountId: f,
                    userId: g
                }, s[0] = f, s[1] = g, s[2] = t) : t = s[2], s[3] !== e.source ? (a = (0, m.a)(e.source), s[3] = e.source, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (r = (0, n.jsx)(T, {
                    ...e
                }, a), s[5] = e, s[6] = a, s[7] = r) : r = s[7], s[8] !== t || s[9] !== r ? (o = (0, n.jsx)(l.b, {
                    scope: p.c,
                    value: t,
                    children: r
                }), s[8] = t, s[9] = r, s[10] = o) : o = s[10], o) : null
            }
        })
    }),
    ejvO: (function(e, t, a) {
        var n = a("XlOJ"),
            i = a("CpsU"),
            r = a.n(i),
            l = a("Q840"),
            o = a("Cslg"),
            s = a("SGsN"),
            c = a("svjy"),
            d = a("jU86"),
            u = a("VJXV"),
            f = a("yGJW"),
            p = a("dRwO");
        let g = new WeakMap,
            h = (0, l.v)(d.c, e => !1);

        function _(e) {
            let t = e.original_content_url ?? e.content_url,
                a = URL.parse(t);
            return null == a ? t : (a.hash = "", a.href)
        }
        let m = (0, l.q)(d.c, (e, t) => {
            let {
                get: a,
                scope: n
            } = t, i = [...new Map(e.map(e => [_(e), e])).values()], l = a(d.p);
            return {
                queryKey: ["library-image-favorites-status", n.value.accountId, n.value.userId, i.map(_).sort()],
                enabled: i.length > 0 && a(u.d),
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
                            r = g.get(n.queryClient);
                        null == r && (r = new Map, g.set(n.queryClient, r));
                        let o = r.get(e);
                        null == o && (a = l, o = (0, p.a)({
                            windowMs: 10,
                            maxBatchSize: 50,
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
                                    return [_(a), n[t]]
                                }))
                            },
                            resolver: (e, t) => {
                                let {
                                    source: a,
                                    signal: n
                                } = t;
                                n.throwIfAborted();
                                let i = e.get(_(a));
                                if (null == i) throw Error("Incomplete image favorite status response.");
                                return i
                            }
                        }), r.set(e, o));
                        let s = await o.fetch({
                            source: i[0],
                            signal: t
                        });
                        return {
                            [_(i[0])]: s
                        }
                    }
                    return Object.fromEntries((await Promise.all(r()(i, 50).map(async e => {
                        let a = await l.safePost("/files/library/image-favorites/status", {
                            requestBody: {
                                sources: e
                            },
                            signal: t
                        });
                        if (a.length !== e.length) throw Error("Incomplete image favorite status response.");
                        return e.map((e, t) => [_(e), a[t]])
                    }))).flat())
                }
            }
        });
        a.d(t, {}, {
            a: _,
            b: h,
            c: function(e) {
                let t = e.searchResult;
                return t?.contentSrc == null || t.isProxied || !/^https?:/i.test(t.contentSrc) ? null : {
                    content_url: t.contentSrc,
                    original_content_url: t.originalSrc
                }
            },
            d: m,
            e: async function(e, t) {
                let a, {
                        source: i,
                        previous: r,
                        save: l,
                        surface: p,
                        showToast: g,
                        onView: h
                    } = t,
                    m = () => e.get(o.f) === e.value.accountId && e.get(o.k) === e.value.userId,
                    b = _(i);
                if (!e.get(u.d)) return null;
                if (l) {
                    let t = {
                        operationId: crypto.randomUUID(),
                        action: "save",
                        entityKind: "web_image",
                        surface: p,
                        source: "conversation"
                    };
                    (0, f.a)(e, n.a, {
                        ...t,
                        eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED"
                    });
                    try {
                        if (a = await e.get(d.p).safePost("/files/library/image-favorites", {
                                requestBody: i
                            }), null == a.favorite_id || null == a.library_file_id) throw Error("Image favorite response did not include its Library file.");
                        m() && ((0, f.a)(e, n.a, {
                            ...t,
                            result: "success",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS"
                        }), g && (0, u.f)(e, {
                            isFavorited: !0,
                            onView: h
                        }))
                    } catch {
                        return m() && ((0, f.a)(e, n.a, {
                            ...t,
                            result: "error",
                            eventType: "CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR"
                        }), e.get(s.f).danger(e.get(c.a).formatMessage({
                            id: "library.favorites.failed",
                            defaultMessage: "Could not update favorite"
                        }), {
                            errorAnalytics: {
                                toastId: "searchImageFavorites.setSearchImageFavorite.failed"
                            }
                        })), null
                    }
                } else {
                    if (null == r.library_file_id || null == r.favorite_id || !await (0, u.e)(e, {
                            libraryFileId: r.library_file_id,
                            favoriteId: r.favorite_id,
                            isFavorited: !1,
                            surface: p,
                            entityKind: "web_image",
                            source: "conversation",
                            showToast: g
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
                let T = a.library_file_id ?? r.library_file_id;
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
        })
    }),
    Q3Ib: (function(e, t, a) {
        a.d(t, {
            a: () => P
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("zPtR"),
            l = a("FS1B"),
            o = a("slpy"),
            s = a("Q840"),
            c = a("zd8w"),
            d = a("Wf1j"),
            u = a("oyxz"),
            f = a("Cslg"),
            p = a("Sm6l"),
            g = a("HOLv"),
            h = a("zLIa"),
            _ = a("SGsN"),
            m = a("Yq7Q"),
            b = a("yGJW"),
            v = a("OWtl"),
            T = a("sX4C"),
            y = a("FGv0"),
            I = a("hZax"),
            x = a("RiLw"),
            w = a("eShZ"),
            E = a("Kwur"),
            C = a("Oa1z"),
            A = a("AuIy"),
            N = a("UxLy"),
            k = a("fwnP");
        let S = (0, s.d)(v.a, (e, t) => {
                let {
                    get: a
                } = t;
                if (!a(k.H, e)) return [];
                let n = a(k.o, e),
                    i = a(k.z, e);
                return null == n || null == i ? [] : (0, A.b)({
                    current_node: n,
                    mapping: i
                }).flatMap(e => "assistant" === e.author.role && null != e.id ? [e.id] : [])
            }, {
                isEqual: N.a
            }),
            R = (0, s.d)(v.a, (e, t) => {
                let {
                    get: a
                } = t;
                return null != e && a(S, e.conversationId).includes(e.messageId)
            });

        function j(e, t, a) {
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
                            n = void 0, s() && (o = !0, a(), p())
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

            function p() {
                for (let e of (o = !0, clearTimeout(n), d.disconnect(), u.disconnect(), f)) r.removeEventListener(e, c, !0);
                i.removeEventListener("visibilitychange", c)
            }
            return i.addEventListener("visibilitychange", c), p
        }
        var O = a("iB11");

        function P(e) {
            let t, a, A, N, k, S, P, B, D, U, V, q, z, Q, K, Y, $, X, J, Z, ee, et, ea, en, ei, er, el, eo = (0, i.c)(131),
                {
                    source: es,
                    conversationId: ec,
                    messageId: ed,
                    imageIndex: eu,
                    contentReferenceStartIndex: ef,
                    isTemporaryChat: ep,
                    surface: eg,
                    lightboxPresentation: eh,
                    imageRef: e_,
                    imageReady: em,
                    joined: eb
                } = e,
                ev = void 0 === eh ? "classic" : eh,
                eT = void 0 === em || em,
                ey = void 0 !== eb && eb,
                eI = (0, s.y)(v.a),
                ex = (0, s.z)(f.f),
                ew = (0, s.z)(f.k),
                eE = (0, d.a)();
            eo[0] !== ex || eo[1] !== ec || eo[2] !== ep || eo[3] !== ed || eo[4] !== es.content_url || eo[5] !== ew ? (t = !ep && null != ex && null != ew && null != ec && null != ed && /^https?:\/\//i.test(es.content_url), eo[0] = ex, eo[1] = ec, eo[2] = ep, eo[3] = ed, eo[4] = es.content_url, eo[5] = ew, eo[6] = t) : t = eo[6];
            let eC = t,
                eA = !eC;
            eo[7] !== eA ? (a = {
                disableExposureLog: eA
            }, eo[7] = eA, eo[8] = a) : a = eo[8];
            let eN = (0, I.j)("274234392", a);
            eo[9] !== eN ? (A = eN.get("placement", "off"), eo[9] = eN, eo[10] = A) : A = eo[10];
            let ek = A,
                eS = "fullscreen" === ek || "inline_and_fullscreen" === ek ? ek : "off",
                eR = eC && ("inline_and_fullscreen" === eS || "fullscreen" === eS && "image_lightbox" === eg);
            eo[11] !== ec || eo[12] !== ed || eo[13] !== eR ? (N = eR ? {
                conversationId: ec,
                messageId: ed
            } : null, eo[11] = ec, eo[12] = ed, eo[13] = eR, eo[14] = N) : N = eo[14];
            let ej = N,
                eO = (0, s.x)(R, ej),
                eP = (0, c.useRef)(null),
                eM = (0, c.useRef)(null);
            eo[15] !== ef || eo[16] !== ec || eo[17] !== eu || eo[18] !== ed || eo[19] !== es.content_url ? (k = [ec, ed, ef, eu, es.content_url], eo[15] = ef, eo[16] = ec, eo[17] = eu, eo[18] = ed, eo[19] = es.content_url, eo[20] = k) : k = eo[20];
            let eF = k.join(":");
            eo[21] !== ex || eo[22] !== eF || eo[23] !== ew ? (S = {
                accountId: ex,
                userId: ew,
                imageKey: eF
            }, eo[21] = ex, eo[22] = eF, eo[23] = ew, eo[24] = S) : S = eo[24];
            let [eG, eL] = (0, c.useState)(S), [eW, eH] = (0, c.useState)(null);
            (eG.accountId !== ex || eG.userId !== ew || eG.imageKey !== eF) && eL({
                accountId: ex,
                userId: ew,
                imageKey: eF
            });
            let eB = (0, c.useRef)(null);
            eo[25] === Symbol.for("react.memo_cache_sentinel") ? (P = new Set, eo[25] = P) : P = eo[25];
            let eD = (0, c.useRef)(P),
                [eU, eV] = (0, c.useState)(!1),
                eq = "image_tile" === eg ? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION";
            eo[26] !== eu ? (B = null == eu || eu < 0 ? void 0 : (0, r.d)(eu), eo[26] = eu, eo[27] = B) : B = eo[27], eo[28] !== ef ? (D = null == ef ? void 0 : (0, r.b)(ef), eo[28] = ef, eo[29] = D) : D = eo[29], eo[30] !== eS || eo[31] !== eg || eo[32] !== B || eo[33] !== D ? (U = {
                surface: eg,
                placement: eS,
                imageIndex: B,
                contentReferenceStartIndex: D
            }, eo[30] = eS, eo[31] = eg, eo[32] = B, eo[33] = D, eo[34] = U) : U = eo[34], eo[35] !== ec || eo[36] !== ed || eo[37] !== eq || eo[38] !== U ? (V = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                source: eq,
                conversationId: ec,
                messageId: ed,
                imageMetadata: U
            }, eo[35] = ec, eo[36] = ed, eo[37] = eq, eo[38] = U, eo[39] = V) : V = eo[39];
            let ez = V;
            eo[40] !== ex || eo[41] !== ez || eo[42] !== eI || eo[43] !== ew ? (q = (e, t, a) => {
                eI.get(f.f) === ex && eI.get(f.k) === ew && (0, b.a)(eI, l.i, {
                    ...ez,
                    shareSessionId: t,
                    action: e,
                    ...void 0 === a ? {} : a
                })
            }, eo[40] = ex, eo[41] = ez, eo[42] = eI, eo[43] = ew, eo[44] = q) : q = eo[44];
            let eQ = q,
                eK = (0, c.useEffectEvent)(eQ);
            if (eo[45] === Symbol.for("react.memo_cache_sentinel") ? (z = () => () => {
                    eP.current?.abort()
                }, Q = [], eo[45] = z, eo[46] = Q) : (z = eo[45], Q = eo[46]), (0, c.useEffect)(z, Q), eo[47] !== ex || eo[48] !== ef || eo[49] !== ec || eo[50] !== eK || eo[51] !== eC || eo[52] !== eu || eo[53] !== eT || eo[54] !== e_ || eo[55] !== ed || eo[56] !== eS || eo[57] !== eR || eo[58] !== es.content_url || eo[59] !== eg || eo[60] !== ew ? (K = () => {
                    let e = eB.current;
                    if (!eC || null == e) return;
                    let t = e_?.current ?? e.closest("[data-web-image-tile], [class~='group/search-image']"),
                        a = [ex, ew, es.content_url, ec, ed, ef, eu, eg, eS].join(":"),
                        n = crypto.randomUUID(),
                        i = null == t || eD.current.has(a) ? void 0 : j(t, () => {
                            let e = t instanceof HTMLImageElement ? t : t.querySelector("img");
                            return eT && null != e && e.complete && e.naturalWidth > 0
                        }, () => {
                            eD.current.add(a), eK("CHATGPT_SHARE_FLOW_ACTION_IMAGE_VIEWED", n)
                        }),
                        r = !eR || eD.current.has(`${a}:control`) ? void 0 : j(e, H, () => {
                            eD.current.add(`${a}:control`), eK("CHATGPT_SHARE_FLOW_ACTION_IMAGE_SHARE_CONTROL_VIEWED", n)
                        });
                    return () => {
                        i?.(), r?.()
                    }
                }, eo[47] = ex, eo[48] = ef, eo[49] = ec, eo[50] = eK, eo[51] = eC, eo[52] = eu, eo[53] = eT, eo[54] = e_, eo[55] = ed, eo[56] = eS, eo[57] = eR, eo[58] = es.content_url, eo[59] = eg, eo[60] = ew, eo[61] = K) : K = eo[61], eo[62] !== ex || eo[63] !== ef || eo[64] !== ec || eo[65] !== eC || eo[66] !== eu || eo[67] !== eT || eo[68] !== e_ || eo[69] !== ed || eo[70] !== eS || eo[71] !== eR || eo[72] !== es.content_url || eo[73] !== eg || eo[74] !== ew ? (Y = [ex, ew, es.content_url, eg, eS, eR, eC, e_, ec, ed, eu, ef, eT], eo[62] = ex, eo[63] = ef, eo[64] = ec, eo[65] = eC, eo[66] = eu, eo[67] = eT, eo[68] = e_, eo[69] = ed, eo[70] = eS, eo[71] = eR, eo[72] = es.content_url, eo[73] = eg, eo[74] = ew, eo[75] = Y) : Y = eo[75], (0, c.useEffect)(K, Y), !eC) return null;
            eo[76] !== eE ? ($ = eE.formatMessage({
                id: "chatgpt.webImageSharing.share.label",
                defaultMessage: "Share image"
            }), eo[76] = eE, eo[77] = $) : $ = eo[77];
            let eY = $;
            eo[78] !== eE || eo[79] !== eO ? (X = eO ? (0, C.c)(eE) : void 0, eo[78] = eE, eo[79] = eO, eo[80] = X) : X = eo[80];
            let e$ = X,
                eX = eO ? "pointer-events-none" : void 0,
                eJ = eO || eU;
            eo[81] !== ex || eo[82] !== ec || eo[83] !== eG || eo[84] !== eQ || eo[85] !== eF || eo[86] !== eE || eo[87] !== ed || eo[88] !== ej || eo[89] !== eI || eo[90] !== es.content_url || eo[91] !== ew ? (J = e => {
                let t;
                if (e.stopPropagation(), null != eP.current || null == ex || null == ew || null == ec || null == ed || eI.get(R, ej)) return;
                let a = new AbortController;
                eP.current = a, eV(!0);
                let n = () => {
                        if (a.signal.throwIfAborted(), eI.get(f.f) !== ex || eI.get(f.k) !== ew) throw new DOMException("The active account changed", "AbortError")
                    },
                    i = crypto.randomUUID(),
                    l = crypto.randomUUID(),
                    o = eM.current?.accountId === ex && eM.current?.userId === ew && eM.current.imageKey === eF ? eM.current : null,
                    s = o?.shareId,
                    c = () => ({
                        attemptId: l,
                        shareId: s,
                        usedExistingLink: null != o
                    }),
                    d = performance.now();
                eQ("CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED", i, c()), eQ("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED", i, c());
                let u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED",
                    p = null == o ? (async () => {
                        n();
                        let e = await E.Request.safePost("/share/post", {
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
                        let i = function(e) {
                            if (!/^i_[A-Za-z0-9_-]+$/.test(e.id)) throw Error("Invalid image share identity");
                            let t = `/s/${e.id}`,
                                a = new URL(e.permalink ?? t, "https://chatgpt.com");
                            if ("https://chatgpt.com" !== a.origin || a.pathname !== t || a.username || a.password || a.search || a.hash) throw Error("Invalid image share identity");
                            return a.href
                        }(e.post);
                        return eM.current = {
                            accountId: ex,
                            userId: ew,
                            imageKey: eF,
                            shareId: s,
                            link: i
                        }, i
                    })().catch(e => {
                        let a = e instanceof w.FetchError && "network" !== e.errorKind ? e.explicitResponseStatus : void 0;
                        throw null != a && Number.isInteger(a) && a >= 100 && a <= 599 && (t = (0, r.b)(a)), u = "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED", e
                    }) : Promise.resolve(o.link).then(e => (n(), e));
                p.catch(W);
                let g = (0, y.a)(p, a.signal);
                g.catch(L), (async () => {
                    let e;
                    try {
                        e = await p, await g.then(G), n(), eQ("CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED", i, {
                            ...c(),
                            durationMs: performance.now() - d
                        }), eI.get(_.f).success(eE.formatMessage({
                            id: "chatgpt.webImageSharing.copied",
                            defaultMessage: "Image link copied"
                        }))
                    } catch (r) {
                        let n = eI.get(f.f) !== ex || eI.get(f.k) !== ew || a.signal.aborted || r instanceof DOMException && "AbortError" === r.name;
                        if (eQ(n ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED", i, {
                                ...c(),
                                failureReason: n ? void 0 : u,
                                httpStatus: n ? void 0 : t,
                                durationMs: performance.now() - d
                            }), n) return;
                        null != e ? eH({
                            visit: eG,
                            url: e
                        }) : eI.get(_.f).danger(eE.formatMessage({
                            id: "chatgpt.webImageSharing.failed",
                            defaultMessage: "Could not share image. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "web_image_share_failed"
                            }
                        })
                    }
                })().finally(() => {
                    a.signal.aborted || (eP.current = null, eV(!1))
                })
            }, eo[81] = ex, eo[82] = ec, eo[83] = eG, eo[84] = eQ, eo[85] = eF, eo[86] = eE, eo[87] = ed, eo[88] = ej, eo[89] = eI, eo[90] = es.content_url, eo[91] = ew, eo[92] = J) : J = eo[92], eo[93] !== eU || eo[94] !== e$ || eo[95] !== eY || eo[96] !== eX || eo[97] !== eJ || eo[98] !== J ? (Z = {
                type: "button",
                "aria-label": eY,
                "aria-description": e$,
                className: eX,
                "aria-busy": eU,
                loading: eU,
                disabled: eJ,
                onClick: J
            }, eo[93] = eU, eo[94] = e$, eo[95] = eY, eo[96] = eX, eo[97] = eJ, eo[98] = J, eo[99] = Z) : Z = eo[99];
            let eZ = Z;
            eo[100] === Symbol.for("react.memo_cache_sentinel") ? (ee = (0, n.jsx)(u.a, {
                id: "chatgpt.webImageSharing.share.buttonLabel",
                defaultMessage: "Share"
            }), eo[100] = ee) : ee = eo[100];
            let e0 = ee;
            if ("image_lightbox" === eg) {
                let e;
                eo[101] !== eZ || eo[102] !== ev ? (e = "overlay" === ev ? (0, n.jsx)(x.a, {
                    ...eZ
                }) : (0, n.jsxs)(p.a, {
                    ...eZ,
                    size: "toolbar",
                    color: "tertiarySurface",
                    children: [(0, n.jsx)(g.a, {
                        asset: O.a
                    }), e0]
                }), eo[101] = eZ, eo[102] = ev, eo[103] = e) : e = eo[103], et = e
            } else {
                let e, t;
                eo[104] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(g.a, {
                    asset: O.a
                }), eo[104] = e) : e = eo[104], eo[105] !== eZ || eo[106] !== ey ? (t = (0, n.jsx)(m.a, {
                    ...eZ,
                    appearance: "blurred",
                    controlSize: "small",
                    iconOnly: !0,
                    joined: ey,
                    children: e
                }), eo[105] = eZ, eo[106] = ey, eo[107] = t) : t = eo[107], et = t
            }
            let e1 = e$ ?? eY,
                e2 = eO ? 0 : void 0,
                e3 = eO ? "group" : void 0,
                e4 = eO ? eY : void 0,
                e5 = eO ? F : void 0;
            eo[108] !== et || eo[109] !== e$ || eo[110] !== e2 || eo[111] !== e3 || eo[112] !== e4 || eo[113] !== e5 ? (ea = (0, n.jsx)("span", {
                className: "inline-flex",
                tabIndex: e2,
                role: e3,
                "aria-label": e4,
                "aria-description": e$,
                onClickCapture: e5,
                children: et
            }), eo[108] = et, eo[109] = e$, eo[110] = e2, eo[111] = e3, eo[112] = e4, eo[113] = e5, eo[114] = ea) : ea = eo[114], et = ea;
            let e6 = "inline-flex";
            return "image_tile" === eg && (e6 = ey ? eR ? "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:w-9 group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:w-9 group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:w-9 group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:w-9 group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:w-9 [@media(hover:none)]:opacity-100" : "pointer-events-none inline-flex w-0 shrink-0 overflow-hidden opacity-0" : "pointer-events-none absolute end-3 bottom-3 inline-flex opacity-0 group-focus-within/generated-image-preview:pointer-events-auto group-focus-within/generated-image-preview:opacity-100 group-focus-within/search-image:pointer-events-auto group-focus-within/search-image:opacity-100 group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), eo[115] !== et || eo[116] !== e1 || eo[117] !== eR ? (en = eR ? (0, n.jsx)(o.a, {
                content: e1,
                children: et
            }) : null, eo[115] = et, eo[116] = e1, eo[117] = eR, eo[118] = en) : en = eo[118], eo[119] !== e6 || eo[120] !== en ? (ei = (0, n.jsx)("span", {
                ref: eB,
                className: e6,
                children: en
            }), eo[119] = e6, eo[120] = en, eo[121] = ei) : ei = eo[121], eo[122] !== eG || eo[123] !== eE || eo[124] !== e1 || eo[125] !== eW || eo[126] !== eR ? (er = eR && eW?.visit === eG && (0, n.jsx)(T.a, {
                title: e1,
                subtitle: (0, n.jsx)(u.a, {
                    id: "chatgpt.webImageSharing.copyManually",
                    defaultMessage: "Couldn’t copy the image link. Select and copy it below."
                }),
                onClose: () => eH(null),
                footer: null,
                children: (0, n.jsx)(h.a, {
                    "aria-label": eE.formatMessage({
                        id: "chatgpt.webImageSharing.linkLabel",
                        defaultMessage: "Image share link"
                    }),
                    readOnly: !0,
                    value: eW.url,
                    onFocus: M
                })
            }), eo[122] = eG, eo[123] = eE, eo[124] = e1, eo[125] = eW, eo[126] = eR, eo[127] = er) : er = eo[127], eo[128] !== ei || eo[129] !== er ? (el = (0, n.jsxs)(n.Fragment, {
                children: [ei, er]
            }), eo[128] = ei, eo[129] = er, eo[130] = el) : el = eo[130], el
        }

        function M(e) {
            return e.currentTarget.select()
        }

        function F(e) {
            return e.stopPropagation()
        }

        function G(e) {
            if (!e) throw Error("Clipboard write failed")
        }

        function L() {}

        function W() {}

        function H() {
            return !0
        }
    }),
    SQeA: (function(e, t, a) {
        var n = a("ASxG"),
            i = a("w5lF"),
            r = a("GDNt"),
            l = a("Kwur");
        a.d(t, {}, {
            a: async function(e, t) {
                try {
                    let {
                        post: a
                    } = await l.Request.safeGet("/share/post/resolve/{post_id}", {
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
                    if (t?.throwIfAborted(), !(a instanceof r.a)) throw a;
                    let e = a.diagnosticError;
                    if (e instanceof i.c) {
                        let t = n.object({
                            message: n.string().optional(),
                            reason: n.string().optional(),
                            code: n.string().optional()
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
        })
    }),
    GigQ: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e, t) {
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
        })
    }),
    uQqo: (function(e, t, a) {
        var n = a("ccwJ"),
            i = a("XPCU");
        a.d(t, {}, {
            a: function(e, t) {
                let a = new Set(e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages.flatMap(e => (0, n.c)(e).map(e => e.src)) : [])),
                    r = e.attachments.flatMap(e => "media_generation" !== e.kind || "image_gen" !== e.generation_type || e.output_blocked ? [] : [e]);
                return t.flatMap(e => {
                    if (null != e.src && a.has(e.src)) return [e];
                    let t = r.find(t => t.id === e.id) ?? r.find(t => null != t.asset_pointer && t.asset_pointer.split("?")[0] === e.src?.split("?")[0]);
                    if (null == t) return [];
                    let n = (0, i.a)(t.url);
                    return null == n ? [] : [{
                        ...e,
                        src: n,
                        previewSrc: n,
                        height: e.height ?? t.height,
                        width: e.width ?? t.width
                    }]
                })
            },
            b: function(e) {
                return e.attachments.flatMap(e => {
                    if ("media_generation" !== e.kind || "image_gen" !== e.generation_type || e.output_blocked) return [];
                    let t = e.asset_pointer ?? `${e.id.startsWith("file_")?"sediment":"file-service"}://${e.id}`,
                        a = (e.messages ?? []).flatMap(n.c).find(e => e.src.split("?")[0] === t.split("?")[0]);
                    return [{
                        type: "generated-image",
                        isAnimated: a?.isAnimated,
                        spritesheet: a?.spritesheet,
                        id: e.id,
                        chatGptGenerationId: e.generation_id,
                        chatGptImageMetadata: a?.chatGptImageMetadata,
                        chatGptMessageId: e.message_id ?? void 0,
                        src: t,
                        width: e.width,
                        height: e.height,
                        status: "completed"
                    }]
                })
            },
            c: function(e) {
                return e.attachments.flatMap(t => {
                    if ("error" !== t.kind || "image_share" !== t.underlying_kind) return [];
                    let a = e.web_image_attachments?.find(e => e.id === t.id);
                    return null == a ? [] : [a]
                })
            }
        })
    }),
    XPCU: (function(e, t, a) {
        var n = a("Kwur");
        a.d(t, {}, {
            a: function(e) {
                if (null == e || 0 === e.trim().length) return null;
                try {
                    return new URL((0, n.b)(e) ?? e, window.location.href).href
                } catch {
                    return null
                }
            }
        })
    }),
    j0nn: (function(e, t, a) {
        var n = a("lSdY"),
            i = a("mQnY"),
            r = a("Fjze"),
            l = a("Q840"),
            o = a("rEML"),
            s = a("yGJW"),
            c = a("tSEg"),
            d = a("yMDx"),
            u = a("dQRk"),
            f = a("rfhJ"),
            p = a("SQeA"),
            g = a("GigQ"),
            h = a("uQqo"),
            _ = a("XW2n");

        function m(e) {
            return e.attachments[0]?.kind !== "prompt_share"
        }
        let b = (0, l.q)(c.a, (e, t) => {
                let {
                    scope: a
                } = t, n = (0, o.J)("/s/:postId", a.value.pathname)?.params.postId;
                return {
                    enabled: null != n && !n.startsWith("cx_") && null != e && !e.isLoading,
                    queryKey: ["chatgpt-shared-post", n, e?.userId, e?.accountId],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return null == n ? Promise.resolve(null) : (0, p.a)(n, t)
                    },
                    gcTime: 0,
                    staleTime: 0,
                    retry: !1,
                    refetchInterval: e => {
                        let t = e.state.data;
                        return !!(t?.status === "ready" && t.post.attachments.some(e => "message_slice" === e.kind && e.messages.some(e => Object.values((0, d.c)(e.metadata)?.widgets ?? {}).some(e => "string" == typeof e?.poll_id && "published" === e.lifecycle)))) && 5e3
                    }
                }
            }),
            v = (0, l.d)(c.a, (e, t) => {
                let {
                    get: a,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, o.J)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: i,
                    isError: r
                } = a(b, e);
                return i?.status !== "ready" || r ? null : i.post
            }),
            T = (0, l.d)(c.a, (e, t) => {
                let {
                    auth: a,
                    conversationId: n
                } = e, {
                    get: i
                } = t;
                if (null == a || a.isLoading || null !== a.authMethod) return !1;
                let r = i(v, a),
                    l = i(u.$, n);
                return null != r && l?.kind === "post" && l.forkFromSharedPost && l.post.id === r.id
            }),
            y = (0, l.v)(c.a, e => !1, {
                onMount: (e, t) => {
                    let a = null;
                    return t.watch(i => {
                        let {
                            get: r
                        } = i, {
                            auth: l,
                            conversationId: o
                        } = t.key, s = r(v, l);
                        if (null == s) {
                            let {
                                data: n,
                                isError: i
                            } = r(b, l);
                            null != a && (i || n?.status === "unavailable") && ((0, u.ib)(t, o, a), a = null), e(!1);
                            return
                        }
                        if (a = s.id, null == w(t, s, o)) return void e(!1);
                        let c = new Set;
                        for (let e of s.attachments)
                            if ("message_slice" === e.kind)
                                for (let t of e.messages) t.id && ("assistant" === t.author.role || "tool" === t.author.role) && c.add(t.id);
                        if (0 === c.size) return void e(!0);
                        let d = {
                            productExperience: t.key.dotAnswerCardOpen ? n.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS : void 0,
                            messageIds: c
                        };
                        return t.set(_.b, d), e(!0), () => {
                            t.get(_.b) === d && t.set(_.b, null)
                        }
                    })
                }
            }),
            I = (0, l.u)(c.a, []),
            x = (0, l.u)(c.a, () => null);

        function w(e, t, a) {
            let n = (0, g.a)(t, a);
            return null == n ? null : ((0, u.pb)(e, {
                conversation: n,
                conversationId: a,
                post: t
            }), a)
        }
        a.d(t, {}, {
            a: w,
            b: function(e) {
                return null != e && m(e) && (0, h.c)(e).length > 0
            },
            c: m,
            d: function(e, t, a) {
                let n = t.attachments[0]?.kind;
                (0, s.a)(e, i.a, {
                    postId: t.id,
                    attachmentType: n,
                    isAuthenticated: a
                }), (0, s.a)(e, r.b, {
                    actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                    postId: t.id,
                    attachmentKind: n,
                    legacyStatsigEventName: "chatgpt_share_post_download_clicked"
                })
            },
            e: function(e, t, a, n, i, r) {
                let l = t.attachments.find(e => "media_generation" === e.kind && "image_gen" === e.generation_type && (e.id === a.id || null != e.asset_pointer && e.asset_pointer.split("?")[0] === a.src?.split("?")[0]));
                l?.kind === "media_generation" && (0, f.b)(e, {
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
            },
            f: v,
            g: y,
            h: T,
            i: I,
            j: b,
            k: x
        })
    }),
    Qed5: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("oyxz"),
            l = a("bqtn"),
            o = a("UxN3"),
            s = a("Zg2f"),
            c = a("mKX5"),
            d = a("I4fX"),
            u = a("zJ9Y");
        a.d(t, {}, {
            a: function(e) {
                let t, a, f, p = (0, i.c)(9),
                    {
                        isFavorited: g,
                        disabled: h,
                        onSelect: _
                    } = e;
                return p[0] !== g ? (t = (0, n.jsx)(o.b, {
                    icon: {
                        assets: g ? {
                            16: s.a,
                            20: c.a
                        } : {
                            16: d.a,
                            20: u.a
                        }
                    }
                }), p[0] = g, p[1] = t) : t = p[1], p[2] !== g ? (a = g ? (0, n.jsx)(r.a, {
                    id: "library.favorites.remove",
                    defaultMessage: "Remove from Favorites"
                }) : (0, n.jsx)(r.a, {
                    id: "library.favorites.add",
                    defaultMessage: "Add to Favorites"
                }), p[2] = g, p[3] = a) : a = p[3], p[4] !== h || p[5] !== _ || p[6] !== t || p[7] !== a ? (f = (0, n.jsx)(l.c.Item, {
                    disabled: h,
                    leftIcon: t,
                    onSelect: _,
                    children: a
                }), p[4] = h, p[5] = _, p[6] = t, p[7] = a, p[8] = f) : f = p[8], f
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
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(894924), a.e(748721)]).then(a.bind(a, "GB7R"))).FlashcardsDialog
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(894924), a.e(880141)]).then(a.bind(a, "aiUC"))).FlashcardsPreview
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(811230)]).then(a.bind(a, "uQdg"))).InlineFlashcards
            }
        })
    }),
    sX4C: (function(e, t, a) {
        a.d(t, {
            a: () => p
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("Wf1j"),
            o = a("Sm6l"),
            s = a("JNtf"),
            c = a("mUDD"),
            d = a("HOLv"),
            u = a("CsDP"),
            f = a("deoc");

        function p(e) {
            let t, a, p, g, h, _, m, b, v = (0, i.c)(44),
                {
                    children: T,
                    headerContent: y,
                    headerActions: I,
                    footer: x,
                    collapseEmptyContent: w,
                    compactImageSheetFooter: E,
                    isDismissalDisabled: C,
                    subtitle: A,
                    title: N,
                    onClose: k,
                    onOpenAutoFocus: S,
                    onCloseAutoFocus: R,
                    onPortalContainerChange: j,
                    onSubmit: O,
                    size: P,
                    variant: M,
                    presentation: F
                } = e,
                G = void 0 !== w && w,
                L = void 0 !== E && E,
                W = void 0 !== C && C,
                H = (0, l.a)(),
                B = "imageSheet" === F;
            v[0] !== L || v[1] !== I || v[2] !== H || v[3] !== W || v[4] !== B || v[5] !== k || v[6] !== A || v[7] !== N ? (t = B ? (0, n.jsxs)("div", {
                className: (0, r.b)("shrink-0", "imageSheetHeader-vPz2gu", L && "imageSheetTwoRowsHeader-udlzI8"),
                children: [(0, n.jsx)(s.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: N
                }), null != A && (0, n.jsx)(s.d, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: A
                }), !W && (0, n.jsx)(o.a, {
                    unstyled: !0,
                    className: (0, r.b)("imageSheetClose-msZEpI", L && "imageSheetTwoRowsClose-qwbpXz"),
                    "aria-label": H.formatMessage({
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
                        children: N
                    }),
                    titleClassName: "truncate",
                    subtitle: null == A ? void 0 : (0, n.jsx)(s.d, {
                        className: "contents",
                        children: A
                    })
                }), I]
            }), v[0] = L, v[1] = I, v[2] = H, v[3] = W, v[4] = B, v[5] = k, v[6] = A, v[7] = N, v[8] = t) : t = v[8], v[9] !== y || v[10] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                children: [t, y]
            }), v[9] = y, v[10] = t, v[11] = a) : a = v[11];
            let D = a;
            v[12] !== A ? (p = null == A ? {
                "aria-describedby": void 0
            } : {}, v[12] = A, v[13] = p) : p = v[13], v[14] !== S || v[15] !== j ? (g = e => {
                e.currentTarget instanceof HTMLElement && j?.(e.currentTarget), S?.(e)
            }, v[14] = S, v[15] = j, v[16] = g) : g = v[16], v[17] !== R || v[18] !== p || v[19] !== g ? (h = {
                ...p,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: R,
                onOpenAutoFocus: g
            }, v[17] = R, v[18] = p, v[19] = g, v[20] = h) : h = v[20];
            let U = !W && !B,
                V = M ?? "opaque",
                q = B ? "imageSheetSurface-pAxv7i" : void 0,
                z = B ? "imageSheetOverlay-Da_SGi" : void 0;
            return v[21] !== W || v[22] !== k ? (_ = e => {
                e || W || k()
            }, v[21] = W, v[22] = k, v[23] = _) : _ = v[23], v[24] !== T || v[25] !== G || v[26] !== L || v[27] !== x || v[28] !== D || v[29] !== W || v[30] !== B || v[31] !== O ? (m = B ? (0, n.jsxs)(c.b, {
                as: null == O ? "div" : "form",
                variant: "chatgpt",
                className: (0, r.b)("imageSheetBody-YQy31R", "min-h-0", L && "imageSheetTwoRowsBody-mMGp9m"),
                onSubmit: null == O ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), W || O()
                },
                children: [(0, n.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [D, T]
                }), (0, n.jsx)("div", {
                    className: (0, r.b)("shrink-0", L ? "mt-2" : "mt-12"),
                    children: x
                })]
            }) : (0, n.jsx)(u.a, {
                collapseEmptyContent: G,
                header: D,
                footer: x,
                onSubmit: null == O ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), W || O()
                },
                children: T
            }), v[24] = T, v[25] = G, v[26] = L, v[27] = x, v[28] = D, v[29] = W, v[30] = B, v[31] = O, v[32] = m) : m = v[32], v[33] !== W || v[34] !== B || v[35] !== P || v[36] !== V || v[37] !== q || v[38] !== z || v[39] !== _ || v[40] !== m || v[41] !== h || v[42] !== U ? (b = (0, n.jsx)(s.a, {
                open: !0,
                contentOverflow: "visible",
                contentProps: h,
                shouldIgnoreClickOutside: W,
                showDialogClose: U,
                size: P,
                variant: V,
                unstyledContent: B,
                contentClassName: q,
                overlayClassName: z,
                onOpenChange: _,
                children: m
            }), v[33] = W, v[34] = B, v[35] = P, v[36] = V, v[37] = q, v[38] = z, v[39] = _, v[40] = m, v[41] = h, v[42] = U, v[43] = b) : b = v[43], b
        }
    })
};