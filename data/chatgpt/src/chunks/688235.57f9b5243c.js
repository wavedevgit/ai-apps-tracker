export const __rspack_esm_ids = [688235];
export const __webpack_modules__ = {
    FQvo: (function(e, t, n) {
        var r = n("OmHE"),
            s = n("Q840"),
            a = n("StMt"),
            l = n("Cslg"),
            o = n("OWtl"),
            i = n("OMIV"),
            u = n("rvFo"),
            d = n("CKur"),
            c = n("dQRk"),
            m = n("g2p6");
        let g = "2700319491",
            p = (0, s.q)(o.a, (e, t) => {
                let {
                    scope: n,
                    get: s
                } = t, o = s(c.j, e), p = s(c.y, e), f = null != o && "tpp" !== p && "flora" !== p && !s(c.I, e) && null == s(c.ab, e) && s(a.a, {
                    name: "chatgpt.ads"
                }).isCapable, h = f ? s(d.chatGptConversationQueryById$, o).data : null, _ = s(i.e, g);
                return {
                    enabled: f && h?.conversation_id === o && h?.is_temporary_chat !== !0,
                    queryKey: ["chatgpt-ads-hydration", o, ..._ ? [s(l.k), s(m.n), _] : []],
                    staleTime: _ ? 0 : u.b.ONE_MINUTE,
                    ..._ && {
                        refetchOnMount: "always"
                    },
                    retry: !1,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == o || t.aborted) return null;
                        let s = await (0, r.c)();
                        return t.aborted ? null : s(n, o, t, _)
                    }
                }
            });
        n.d(t, {}, {
            a: g,
            b: p
        })
    }),
    Vywf: (function(e, t, n) {
        n.d(t, {
            a: () => y,
            b: () => b,
            c: () => I,
            d: () => S,
            e: () => C
        });
        var r = n("rKAs"),
            s = n("AuIy"),
            a = n("iqEK"),
            l = n("evsE"),
            o = n("NRIv"),
            i = n("vJOD"),
            u = n("KaH3"),
            d = n("dMTK"),
            c = n("Usao"),
            m = n("v6Sc"),
            g = n("ZPcX"),
            p = n("MJjm"),
            f = n("G6Ip"),
            h = n("DrWu"),
            _ = n("hUUF"),
            v = n("ihvi");

        function y() {
            let e;
            return t => e = b(t, e)
        }

        function b(e, t) {
            let {
                conversation: n,
                contextContinuation: r = n?.context_truncation_continuation,
                clinicalSearchEnabled: u = !1,
                clinicalCitationsEnabled: d = !1,
                conversationOrigin: c = n?.conversation_origin,
                enableCloudBrowserActivity: _ = !1,
                enableImageGenerationLoadingState: v = !1,
                voiceImageSessionId: y,
                voiceImageGenerationSpawnIds: b,
                enableVoiceImageLoadingFix: I,
                getRenderTelemetry: C,
                moderationDisclaimersByMessageId: S = {},
                isStreaming: M,
                isWorkConversation: w = "tpp" === c || "flora" === c,
                mode: T,
                mcpResponseCache: R,
                pendingSubmission: E,
                modelLookup: A,
                streamingOrders: P,
                threadCurrentNode: O,
                threadMapping: L
            } = e, N = null == L ? n ?? null : {
                context_truncation_continuation: r,
                conversation_origin: c,
                current_node: O ?? null,
                mapping: L
            }, q = null == N ? [] : (0, s.a)(N), G = w || E?.isSteer ? null : E?.submittedMessageId, F = null != G && !q.some(e => e.id === G), k = null == N ? void 0 : (0, f.b)(N, {
                clinicalSearchEnabled: u,
                clinicalCitationsEnabled: d,
                enableCloudBrowserActivity: _,
                enableImageGenerationLoadingState: v,
                voiceImageSessionId: y,
                voiceImageGenerationSpawnIds: b,
                enableVoiceImageLoadingFix: I,
                getRenderTelemetry: C,
                isStreaming: M && !F,
                isWorkConversation: w,
                mode: T,
                mcpResponseCache: R,
                modelLookup: A,
                streamingOrders: P,
                moderationDisclaimersByMessageId: "conversation" === T ? S : {}
            }, t?.derivation), x = k?.renderedTurns ?? [], D = E?.prompt == null || !w && E.isSteer || M && null == G && !((0, l.a)(E.prompt).length > 0) || function(e, t) {
                let {
                    attachments: n,
                    submittedMessageId: r
                } = t;
                if (null != r && e.some(e => {
                        let {
                            turn: t
                        } = e;
                        return t.messageIds.includes(r)
                    })) return !0;
                if (0 === n.length) return !1;
                let s = new Map(n.map(e => {
                    let {
                        id: t,
                        name: n
                    } = e;
                    return [t, n]
                }));
                return e.some(e => {
                    let {
                        turn: t
                    } = e;
                    return t.items.some(e => "user-message" === e.type && e.images.some(t => {
                        let n = (0, a.d)(t),
                            r = null == n ? void 0 : s.get(n);
                        return null != r && e.appshotContexts?.some(e => {
                            let {
                                imageName: t
                            } = e;
                            return r === t
                        }) === !0
                    }))
                })
            }(x, E) ? null : function(e, t) {
                let {
                    attachments: n,
                    selectedTextAttachments: r,
                    commentAttachments: s = [],
                    submittedMessageId: a,
                    sentAtMs: u,
                    renderFormat: d,
                    imageGenerationSettings: c
                } = t, g = (0, m.d)(e, {
                    commentAttachments: s
                }), p = n.flatMap(e => {
                    let {
                        previewSrc: t
                    } = e;
                    return null == t ? [] : [t]
                }), f = n.filter(e => {
                    let {
                        previewSrc: t
                    } = e;
                    return null == t
                }), _ = (0, l.a)(e).filter(e => {
                    let {
                        imageName: t
                    } = e;
                    return n.some(e => {
                        let {
                            name: n,
                            previewSrc: r
                        } = e;
                        return n === t && null != r
                    })
                }), v = 1 === r.length ? r[0]?.sourceMessageId : void 0;
                return {
                    id: a ?? "pending-chatgpt-submit",
                    timestampTurns: [{
                        role: "user",
                        sentAtMs: u ?? null
                    }],
                    turn: {
                        artifacts: {
                            editedFilePaths: [],
                            outputFilePaths: [],
                            referencedFilePaths: []
                        },
                        collaborationMode: null,
                        cwd: null,
                        messageIds: [],
                        items: [{
                            ...0 === _.length ? {} : {
                                appshotContexts: _
                            },
                            attachments: (0, h.l)(f),
                            chatGptFileAttachments: f.map(e => {
                                let {
                                    height: t,
                                    id: n,
                                    libraryFileId: r,
                                    mimeType: s,
                                    mountedLibraryFileId: a,
                                    mountedLibraryMimeType: l,
                                    name: o,
                                    size: i,
                                    source: u,
                                    width: d
                                } = e;
                                return {
                                    downloadUrl: null,
                                    fileId: n,
                                    height: t ?? null,
                                    libraryFileId: r ?? null,
                                    mimeType: s,
                                    mountedLibraryFileId: a ?? null,
                                    mountedLibraryMimeType: l ?? null,
                                    name: o,
                                    sizeBytes: i ?? null,
                                    source: u ?? null,
                                    width: d ?? null
                                }
                            }),
                            commentCount: g.length,
                            comments: g,
                            images: p,
                            submittedMessageId: a,
                            renderFormat: d,
                            imageGenerationSettings: c,
                            message: 0 === _.length ? e : (0, o.x)(e),
                            referencesPriorConversation: !1,
                            ...r.length > 0 ? {
                                selectedTextAttachments: r.map(i.a)
                            } : {},
                            selectedTextSourceMessageId: v,
                            selectedTextSourceOccurrence: r[0]?.sourceOccurrence,
                            sentAtMs: u ?? null,
                            type: "user-message"
                        }],
                        status: "complete"
                    }
                }
            }(E.prompt, E), U = null == D ? x : [...x, D];
            return {
                derivation: k,
                isConversationEmpty: null != N && !q.some(e => "system" !== e.author.role && !(0, s.n)(e)),
                renderedConversation: N,
                renderedTurns: U,
                showPendingLoadingMessage: function(e) {
                    let {
                        isStreaming: t,
                        isWorkConversation: n,
                        pendingTurn: r,
                        renderedTurns: s
                    } = e;
                    if (null != r) return !0;
                    if (!t) return !1;
                    let a = n && !1,
                        l = s.at(-1)?.turn.items.findLast(e => "user-message" === e.type || !(a && function(e) {
                            if ("chatgpt-reasoning-group" !== e.type || null != e.streamingParentRegion || null != e.doubleTextingPresentation) return !1;
                            if (null != e.reasoningRecap) return "hide_all" === e.reasoningRecap.type;
                            let t = e => "reasoning" === e.type && !e.content.trim() && void 0 === e.webSearchQuery && !e.toolIcons?.length && !e.browserProvider;
                            return (!e.activeReasoning || t(e.activeReasoning)) && e.items.every(t)
                        }(e)) && function e(t) {
                            return "context-compaction" === t.type ? (0, g.a)(t) : "chatgpt-automation-progress" === t.type || ("chatgpt-reasoning-group" === t.type ? !t.completed || t.items.some(e) : "assistant-message" === t.type || "chatgpt-writing-block-patch" === t.type ? !t.completed || "assistant-message" === t.type && (0, p.d)(t) : "generated-image" === t.type ? "in_progress" === t.status || "inProgress" === t.status : "web-search" === t.type ? !t.completed : "chatgpt-tool-approval" === t.type && t.request?.type !== "preview")
                        }(e));
                    return null == l || "user-message" === l.type
                }({
                    isStreaming: M || null != G,
                    isWorkConversation: w,
                    pendingTurn: D,
                    renderedTurns: U
                })
            }
        }

        function I(e) {
            let {
                browserConversationId: t,
                conversationId: n,
                enableCloudBrowserActivity: s = !1,
                errorMessage: a,
                branchingMessageId: l = null,
                isReadOnly: o = !1,
                isTemporaryChat: i = !1,
                isWorkConversation: c = !1,
                onEditUserMessage: m,
                onFork: g,
                onRegenerateResponse: p,
                pendingSubmissionAttachments: f,
                shareEnabled: h = !1,
                readAloudEnabled: _ = !0,
                feedbackEnabled: y = !1,
                hideInitialUserMessage: b = !1,
                paragen: I = null,
                renderedTurns: C,
                safetyReview: S = null,
                sharedConversationLastMessageId: M = null,
                showPendingLoadingMessage: w,
                showRequestUserInputStatus: T = !1
            } = e, R = (0, d.d)(C.map(e => e.timestampTurns ?? null)), E = C.findLastIndex(e => {
                let {
                    turn: t
                } = e;
                if ("complete" !== t.status) return !1;
                let n = t.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]);
                return (0, u.b)(n.filter(e => "mcp-tool-call" === e.type)).length > 0
            }), A = C.map((e, r) => {
                let u = r === C.length - 1,
                    d = null != M && e.turn.items.some(e => "messageId" in e && e.messageId === M);
                return {
                    ...e,
                    turn: b && 0 === r ? {
                        ...e.turn,
                        items: e.turn.items.filter(e => "user-message" !== e.type)
                    } : e.turn,
                    paragen: u ? I : null,
                    browserConversationId: t,
                    conversationId: n,
                    ...s ? {
                        enableCloudBrowserActivity: s
                    } : {},
                    errorMessage: u ? a : null,
                    branchingMessageId: l,
                    hasLaterSitesPreview: r < E,
                    isMostRecentTurn: u,
                    isReadOnly: o,
                    isTemporaryChat: i,
                    isWorkConversation: c,
                    onEditUserMessage: m,
                    onFork: g,
                    onRegenerateResponse: p,
                    pendingSubmissionAttachments: u ? f : void 0,
                    shareEnabled: h,
                    readAloudEnabled: _,
                    feedbackEnabled: y,
                    safetyReview: u ? S : null,
                    showSharedConversationPrivateDisclaimer: !u && d,
                    showPendingLoadingMessage: u && w,
                    showRequestUserInputStatus: u && T,
                    timestampSeparatorAtMs: R[r] ?? null,
                    turnKey: e.turn.items.find(e => "user-message" === e.type)?.messageId ?? e.turn.messageIds[0] ?? e.id
                }
            }), P = !1, O = A.flatMap(e => {
                let t = function(e) {
                    let t = [];
                    for (let n of e.turn.items) {
                        let s = "assistant-message" === n.type ? n : void 0,
                            a = s?.contentReferences.findIndex(e => "string" == typeof e.source_visual_slot_id) ?? -1,
                            l = s?.contentReferences[a]?.source_visual_slot_id;
                        if (s?.messageId && "string" == typeof l) {
                            let e = l === s.messageId ? s.content : s.content.replace((0, r.d)(a, s.messageId), (0, r.d)(a, l));
                            t.push({
                                key: `dil:${l}`,
                                dilSlotId: l,
                                items: [e === s.content ? s : {
                                    ...s,
                                    content: e
                                }]
                            })
                        } else {
                            let r = t.at(-1);
                            r && !r.dilSlotId ? r.items.push(n) : t.push({
                                key: 0 === t.length ? e.turnKey : `${e.turnKey}:text:${t.length}`,
                                items: [n]
                            })
                        }
                    }
                    return t.some(e => e.dilSlotId) ? t.map((n, r) => {
                        let s = r === t.length - 1;
                        return {
                            ...e,
                            turnKey: n.key,
                            dilSlotId: n.dilSlotId,
                            turn: {
                                ...e.turn,
                                items: n.items
                            },
                            isMostRecentTurn: s && e.isMostRecentTurn,
                            timestampSeparatorAtMs: 0 === r ? e.timestampSeparatorAtMs : null,
                            showSharedConversationPrivateDisclaimer: s && e.showSharedConversationPrivateDisclaimer,
                            showPendingLoadingMessage: s && e.showPendingLoadingMessage,
                            showRequestUserInputStatus: s && e.showRequestUserInputStatus,
                            paragen: s ? e.paragen : null
                        }
                    }) : [e]
                }(e);
                return P = P || t[0] !== e, t
            });
            return P ? function(e) {
                let t = -1,
                    n = !1;
                for (let r = 0; r <= e.length; r++) {
                    let s = e[r],
                        a = null == s ? void 0 : (0, v.c)(s.turn.items);
                    if (null == s || null != a) {
                        if (n && t >= 0 && r - 1 > t) {
                            let n = e[t];
                            e[t] = {
                                    ...n,
                                    turn: {
                                        ...n.turn,
                                        hasFollowingDilResponse: !0
                                    }
                                },
                                function(e, t, n) {
                                    let r = e[t],
                                        s = e[n],
                                        a = (0, v.c)(r.turn.items),
                                        l = r.turn.adsPlacement;
                                    if (null == a || null == l) return;
                                    let o = l;
                                    for (let r = t + 1; r <= n; r++) {
                                        let t = e[r].turn.adsPlacement;
                                        null != t && t !== o && (o = (0, v.e)(o, t))
                                    }
                                    e[t] = {
                                        ...r,
                                        turn: {
                                            ...r.turn,
                                            adsPlacement: {
                                                ...l,
                                                userMessageId: null
                                            }
                                        }
                                    }, e[n] = {
                                        ...s,
                                        turn: {
                                            ...s.turn,
                                            adsPlacement: {
                                                ...o,
                                                userMessageId: a
                                            }
                                        }
                                    }
                                }(e, t, r - 1)
                        }
                        t = null == a ? -1 : r, n = !1
                    }
                    s?.dilSlotId != null && (n = !0)
                }
                return e
            }(O) : O
        }

        function C(e, t) {
            if (null == t) return {
                entries: e
            };
            let {
                messageId: n
            } = t.source, r = -1, s = !1;
            for (let [a, l] of e.entries())
                if ((s = l.turn.messageIds.includes(t.promptId) || s && !l.turn.items.some(e => "user-message" === e.type)) && (r = a), s || null != n && l.turn.messageIds.includes(n))
                    for (let r of l.turn.items)
                        for (let s of "chatgpt-reasoning-group" === r.type ? r.items : [r]) {
                            if ("assistant-message" !== s.type && "user-message" !== s.type) continue;
                            let r = s.clientMetadata?.find(e => e.blocked && e.policy?.errCode === "bio_safety_content_policy" && (null == n || e.messageId === n));
                            if (null != r) {
                                if (null == r.messageId || r.shouldDisableConversation) return {
                                    entries: e
                                };
                                return {
                                    entries: e,
                                    inlineNotice: {
                                        ...t,
                                        source: {
                                            ...t.source,
                                            messageId: r.messageId
                                        }
                                    }
                                }
                            }
                        }
            return -1 === r ? {
                entries: e
            } : {
                entries: e.with(r, {
                    ...e[r],
                    showLiveBioSafetyNotice: !0
                }),
                inlineNotice: t
            }
        }

        function S(e, t) {
            let n = e.turn.items.findLast(M),
                r = t.turn.items.find(M);
            return !e.showSharedConversationPrivateDisclaimer && null == t.timestampSeparatorAtMs && n?.type === "user-message" && (0, c.h)(n) && r?.type === "user-message" && (0, c.h)(r) ? "adjacent-user-prompts" : e.id === t.id ? "same-turn" : "new-turn"
        }

        function M(e) {
            return "chatgpt-reasoning-group" !== e.type || e.reasoningRecap?.type !== "hide_all" && !(0, _.g)(e)
        }
    }),
    PTAr: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var r = n("Q840"),
            s = n("OWtl"),
            a = n("FQvo"),
            l = n("UKCO"),
            o = n("AuIy"),
            i = n("ccwJ"),
            u = n("lAQI"),
            d = n("TDcV"),
            c = n("XAP6"),
            m = n("bzoy"),
            g = n("Ow2S"),
            p = n("CKur"),
            f = n("KW2R"),
            h = n("Kwur"),
            _ = n("dQRk"),
            v = n("srYL"),
            y = n("RQhI");
        let b = u.E().positive(),
            I = (0, r.q)(s.a, (e, t) => {
                let {
                    get: n,
                    scope: r
                } = t, s = n(d.a), a = n(_.t, e)?.at(-1), o = null == e ? null : n(_.w, e);
                return {
                    enabled: null != s && null != e && null != a && null != C(n, e),
                    queryKey: ["chatgpt-background-recovery", s, e, a, o?.requestId],
                    queryFn: async t => {
                        let n, i, {
                            signal: u
                        } = t;
                        if (null == e || null == a) return null;
                        let c = new AbortController,
                            g = AbortSignal.any([u, c.signal]),
                            p = C(r.get, e),
                            v = r.get(_.N, e),
                            b = Date.now(),
                            I = !1,
                            S = 0,
                            M = null == p ? 0 : p.deadline,
                            w = (0, l.Ye)(),
                            T = () => w.resolve(void 0);
                        g.addEventListener("abort", T, {
                            once: !0
                        });
                        let R = r.watch(t => {
                            let {
                                get: r
                            } = t, l = p?.messages;
                            p = C(r, e);
                            let u = r(_.N, e);
                            (r(d.a) !== s || r(_.t, e)?.at(-1) !== a || null == p || r(_.w, e) !== o) && c.abort(), p?.paused && (i = void 0, n?.abort()), u !== v && (v = u, !I && (i = void 0, n?.abort(), null != p && !p.paused && (p.messages.length !== l?.length || p.messages.some((e, t) => e !== l?.[t])) && (b = Date.now(), M = Math.max(p.deadline, b + p.timeoutMs), S = 0, T())))
                        });
                        try {
                            for (; !g.aborted && null != p;) {
                                if (Date.now() >= M || S >= 30) {
                                    w = (0, l.Ye)(), await w.promise;
                                    continue
                                }
                                if (await
                                    function(e, t) {
                                        return new Promise(n => {
                                            let r = () => {
                                                    clearTimeout(s), n()
                                                },
                                                s = setTimeout(() => {
                                                    t.removeEventListener("abort", r), n()
                                                }, e);
                                            t.addEventListener("abort", r, {
                                                once: !0
                                            })
                                        })
                                    }(Math.min(p.pollIntervalMs, M - Date.now()), g), g.aborted || null == p) break;
                                if (Date.now() >= M || p.paused || Date.now() - b < p.inactivityMs) continue;
                                n = new AbortController;
                                let t = AbortSignal.any([g, n.signal, AbortSignal.timeout(Math.min(3e4, M - Date.now()))]);
                                try {
                                    let n = !1,
                                        s = p.pendingSteering?.userMessageId;
                                    if (p.checkStreamStatus) {
                                        let r = await h.Request.safeGet("/conversation/{conversation_id}/stream_status", {
                                            parameters: {
                                                path: {
                                                    conversation_id: e
                                                }
                                            },
                                            signal: t
                                        }).catch(() => void 0);
                                        if (t.aborted) continue;
                                        if (r?.status === "IS_STREAMING") {
                                            i = void 0, S = 0;
                                            continue
                                        }
                                        n = r?.status === "COMPLETE" || r?.status === "FAILURE"
                                    }
                                    let a = await (0, f.refetchChatGptConversation)(r, e, "background_poll", {
                                        signal: t,
                                        onSnapshotApply: e => {
                                            I = e
                                        }
                                    });
                                    S = null != a || t.aborted ? 0 : S + 1, null == a || t.aborted || !n || null == s || (0, m.e)(a.async_status) ? i = void 0 : (i = i ?? Date.now(), Date.now() - i >= 6e4 && (0, y.b)(r, e, a, s))
                                } finally {
                                    n.abort(), n = void 0
                                }
                            }
                        } finally {
                            c.abort(), g.removeEventListener("abort", T), R()
                        }
                        return null
                    },
                    retry: !1,
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    staleTime: 0,
                    gcTime: 0
                }
            });

        function C(e, t) {
            if (null != e(_.fb, t) || "streaming" === e(_.cb, t) || e(g.j, t)) return null;
            let n = e(_.C, t),
                r = e(_.N, t),
                s = null == n ? null : r?.[n]?.message;
            if (null == s || null == r) return null;
            let a = (0, o.b)({
                current_node: n,
                mapping: r
            });
            if (a.some(e => null != (0, v.b)(e) || (0, i.b)(e, {
                    isActiveTurn: !0,
                    isStreaming: !1
                }).length > 0)) return null;
            let l = e(_.p, t),
                u = (0, o.s)(s.metadata),
                d = (0, o.s)((0, o.s)((0, o.s)(u?.view_state)?.widgets)?.[`${s.id}:0`]),
                f = (0, o.s)(u?.chatgpt_sdk)?.is_custom_agent === !0 && d?.canceled !== !0 && (d?.streaming === !0 || (0, o.s)(d?.workflow)?.complete === !0),
                h = b.safeParse(u?.poll_on_websocket_inactivity_ms).data ?? 3e4 * !!f,
                I = l === m.a.STREAMING,
                C = (0, y.a)(e, t);
            if (!I && null == C && !(h > 0 && ((0, m.f)(l) || u?.async_task_type === "pro_mode" || f)) || !I && !f && !0 === s.end_turn && "in_progress" !== s.status) return null;
            let {
                data: S
            } = e(p.chatGptConversationQueryById$, t, {
                enabled: !1
            }), {
                pollIntervalMs: M,
                timeoutMs: w,
                checkStreamStatus: T
            } = (0, c.f)(a, S?.default_model_slug ?? ""), R = 1e3 * Math.max(S?.update_time ?? 0, s.create_time ?? 0, s.update_time ?? 0);
            return {
                messages: a,
                pollIntervalMs: M,
                checkStreamStatus: T || null != C,
                inactivityMs: h,
                paused: e(_.eb, t) || e(_.s, t),
                deadline: Math.max(R, C?.acceptedAt ?? 0) + w,
                timeoutMs: w,
                pendingSteering: C
            }
        }
        var S = n("Cslg"),
            M = n("CTBG"),
            w = n("rKAs"),
            T = n("GDNt");
        let R = u.F({
                genui_refresh: u.J(u.L(), u.R()),
                is_complete: u.j().optional()
            }).loose(),
            E = u.F({
                enabled: u.z(!0),
                name: u.L().trim().min(1)
            }),
            A = u.F({
                appData: u.F({
                    opGenui: u.F({
                        componentResults: u.J(u.L(), u.R())
                    })
                })
            }),
            P = u.F({
                status: u.z("resolved")
            });

        function O(e) {
            return "resolutionId" in e ? `${e.messageId}:component:${e.resolutionId}` : `${e.messageId}:ref:${e.refIndex}`
        }

        function L(e) {
            return document.addEventListener("visibilitychange", e), window.addEventListener("focus", e), () => {
                document.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
            }
        }
        var N = n("rxj0");
        let q = (0, r.v)(s.a, e => null, {
            onMount: (e, t) => {
                let {
                    key: n
                } = t;
                if (null != n) return t.watch(e => {
                    let {
                        get: r
                    } = e, s = r(S.f);
                    if (null == s) return;
                    let a = function(e) {
                            let {
                                isVisible: t = () => "visible" === document.visibilityState,
                                onVisibilityChange: n = L,
                                refreshWidget: r,
                                onRefresh: s
                            } = e, a = new Map, l = !1, o = (e, t) => {
                                e.timeout = setTimeout(() => {
                                    e.timeout = null, i(e)
                                }, Math.max(1e3, t))
                            }, i = async e => {
                                let n = O(e.target);
                                if (!l && a.get(n) === e && !e.inFlight && t()) {
                                    e.inFlight = !0;
                                    try {
                                        let t = await r(e.target);
                                        if (l || a.get(n) !== e || (s?.(e.target, t), l || a.get(n) !== e)) return;
                                        if (e.failures = 0, null == t.next_poll_after_ms) return void a.delete(n);
                                        o(e, t.next_poll_after_ms)
                                    } catch (r) {
                                        var i, d;
                                        if (l || a.get(n) !== e) return;
                                        e.failures += 1;
                                        let t = (i = r, d = e.failures, i instanceof T.a && 404 === i.status ? "Message not found" === function(e) {
                                            try {
                                                let t = u.F({
                                                    detail: u.L()
                                                }).safeParse(JSON.parse(e.message));
                                                return t.success ? t.data.detail : null
                                            } catch {
                                                return null
                                            }
                                        }(i) && d < 5 ? 1e3 : null : d < 2 ? 5e3 : null);
                                        if (null == t) return void a.delete(n);
                                        o(e, t)
                                    } finally {
                                        e.inFlight = !1
                                    }
                                }
                            }, d = n(() => {
                                if (t())
                                    for (let e of a.values()) null == e.timeout && i(e)
                            });
                            return {
                                setTargets: e => {
                                    let t = new Map(e.map(e => [O(e), e]));
                                    for (let [e, n] of a) t.has(e) || (null != n.timeout && clearTimeout(n.timeout), a.delete(e));
                                    for (let [e, n] of t) {
                                        if (a.has(e)) continue;
                                        let t = {
                                            failures: 0,
                                            inFlight: !1,
                                            target: n,
                                            timeout: null
                                        };
                                        a.set(e, t), i(t)
                                    }
                                },
                                stop: () => {
                                    for (let e of (l = !0, d(), a.values())) null != e.timeout && clearTimeout(e.timeout);
                                    a.clear()
                                }
                            }
                        }({
                            onRefresh: (e, r) => {
                                r.message?.id === e.messageId && t.get(S.f) === s && t.get(S.p) && !t.get(N.e, n) && (0, _.d)({
                                    scope: t,
                                    conversationId: n,
                                    message: r.message,
                                    preserveCurrentTurn: !0
                                })
                            },
                            refreshWidget: e => !t.get(S.p) || t.get(S.f) !== s || t.get(N.e, n) ? Promise.resolve({
                                next_poll_after_ms: null
                            }) : h.Request.safePost("/conversation/{conversation_id}/message/{message_id}/genui/refresh_widget", {
                                parameters: {
                                    path: {
                                        conversation_id: n,
                                        message_id: e.messageId
                                    }
                                },
                                requestBody: "resolutionId" in e ? {
                                    resolution_id: e.resolutionId
                                } : {
                                    ref_index: e.refIndex
                                }
                            })
                        }),
                        l = t.watch(e => {
                            let {
                                get: t
                            } = e, r = t(M.c, n);
                            a.setTargets(null == r || !t(S.p) || t(N.e, n) ? [] : r.flatMap(e => {
                                let t = e.id;
                                if ("assistant" !== e.author.role || null == t || e.metadata?.genui_refresh == null) return [];
                                let n = R.safeParse(e.metadata),
                                    r = !!n.success && (n.data.is_complete ?? "in_progress" !== e.status);
                                if (!n.success || !r) return [];
                                let s = n.data.genui_refresh,
                                    a = E.safeParse(s).success ? (0, w.q)(e.metadata).flatMap((e, n) => (0, w.I)(e) ? [{
                                        messageId: t,
                                        refIndex: n
                                    }] : []) : [];
                                if (null == s.components) return a;
                                let l = u.J(u.L(), u.R()).safeParse(s.components),
                                    o = A.safeParse(n.data.model_dil_v2);
                                if (l.success && o.success) {
                                    let e = o.data.appData.opGenui.componentResults;
                                    for (let [n, r] of Object.entries(l.data)) E.safeParse(r).success && P.safeParse(e[n]).success && a.push({
                                        messageId: t,
                                        resolutionId: n
                                    })
                                }
                                return a
                            }))
                        });
                    return () => {
                        l(), a.stop()
                    }
                })
            }
        });
        var G = n("WFY2"),
            F = n("ISgP"),
            k = n("nXyT"),
            x = n("NOye"),
            D = n("YCHf"),
            U = n("VnaB");
        let K = (0, r.v)(s.a, e => null, {
            onMount: (e, t) => {
                let {
                    key: n
                } = t;
                if (null == n) return;
                let r = null,
                    s = null,
                    a = [],
                    l = 0,
                    u = null,
                    c = !1,
                    g = !1,
                    p = null,
                    h = new Set,
                    y = t.get(d.a),
                    b = new AbortController,
                    I = (0, k.c)(t, n),
                    C = () => {
                        null != u && (clearTimeout(u), u = null)
                    },
                    S = async () => {
                        if (g || null == r || c || t.get(d.a) !== y) return;
                        if (Date.now() >= l) {
                            let e = r;
                            if (s = e, r = null, a.length > 0) {
                                let r = a.map(t => ({
                                    accountId: y,
                                    conversationId: n,
                                    generationKey: e,
                                    messageId: t
                                }));
                                t.set(U.a, e => [...e, ...r].slice(-100))
                            }
                            G.a.warning("Stopped polling ChatGPT image generation after timeout", {
                                safe: {},
                                sensitive: {
                                    conversationId: n
                                }
                            });
                            return
                        }
                        let e = r;
                        c = !0;
                        try {
                            await (0, f.refetchChatGptConversation)(t, n, "image_generation_poll", {
                                signal: b.signal
                            })
                        } finally {
                            c = !1, g || null == r || (r === e ? (C(), u = setTimeout(() => {
                                u = null, S()
                            }, 1e4)) : S())
                        }
                    }, M = t.watch(e => {
                        var u;
                        let c, f, {
                                get: I
                            } = e,
                            M = I(_.C, n),
                            w = I(_.N, n),
                            T = null != M && null != w ? (0, o.b)({
                                current_node: M,
                                mapping: w
                            }) : null;
                        if (null != T) {
                            let t = T.find(e => "user" === e.author.role)?.id ?? null;
                            t !== p && (h.clear(), p = t), (0, x.a)(e, n, T, h)
                        }
                        if (I(d.a) !== y) {
                            g = !0, b.abort(), C();
                            return
                        }
                        let R = I(U.a),
                            E = R.some(e => e.accountId === y && e.conversationId === n),
                            A = T?.some(e => null == (0, v.b)(e) && (0, i.b)(e, {
                                isActiveTurn: !0,
                                isStreaming: !1
                            }).length > 0),
                            P = E || A ? I(F.b, n) : null,
                            O = P?.at(-1)?.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).flatMap(e => "generated-image" === e.type && "in_progress" === e.status ? [e] : []);
                        if (E && null != T && null != P) {
                            let e = P.at(-1),
                                r = new Set(O?.flatMap(e => {
                                    let t = (0, D.a)(T, e.chatGptMessageId);
                                    return t?.isTimedOut && null != t.message.id ? [t.message.id] : []
                                })),
                                s = R.filter(t => {
                                    if (t.accountId !== y || t.conversationId !== n) return !0;
                                    if (P.some(n => n.id === t.generationKey && n !== e)) return !1;
                                    let s = (0, D.a)(T, t.messageId)?.message.id;
                                    return !T.some(e => e.id === t.messageId) || null != s && r.has(s)
                                });
                            s.length !== R.length && t.set(U.a, s)
                        }
                        let L = A ? P : null;
                        a = [...new Set(O?.flatMap(e => null != e.chatGptMessageId && null != T && (0, D.a)(T, e.chatGptMessageId)?.isTimedOut ? [e.chatGptMessageId] : []))];
                        let N = null == L ? null : (u = I(_.p, n), c = L.at(-1), f = c?.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "generated-image" === e.type), null != c && null != f && 0 !== f.length && (u === m.a.STREAMING || f.some(e => "in_progress" === e.status)) ? c.id : null);
                        if (null == N) {
                            C(), r = null, s = null;
                            return
                        }
                        let q = I(U.b, n);
                        if (null != O && O.length > 0 && O.every(e => q?.some(t => t.generationKey === N && t.messageId === e.chatGptMessageId))) {
                            C(), r = null;
                            return
                        }
                        N !== r && N !== s && (C(), r = N, s = null, l = Date.now() + 9e5, S())
                    });
                return () => {
                    g = !0, b.abort(), C(), M(), I()
                }
            }
        });
        var W = n("WYN9");
        let B = (0, r.d)(s.a, (e, t) => {
            let {
                get: n
            } = t;
            return n(f.a), n(W.chatGptCompletionResumeQueryById$, e), n(a.b, e), n(q, e), n(K, e), n(I, e), null
        })
    }),
    WWSI: (function(e, t, n) {
        var r = n("U3Gy");

        function s(e) {
            if (null != e.paragen || e.isTemporaryChat) return null;
            for (let t of e.turn.items.toReversed()) {
                if (!("assistant-message" === t.type && t.completed && "complete" === e.turn.status || "generated-image" === t.type && "completed" === t.status)) continue;
                let n = "assistant-message" === t.type ? t.referenceImageSuggestionMessageId ?? t.messageId : t.chatGptMessageId;
                if (null != n && null != t.referenceImageSuggestions) return {
                    boundMessageId: n,
                    event: t.referenceImageSuggestions
                }
            }
            return null
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = e.map(s),
                    l = (0, r.a)(t, a.filter(e => null != e));
                return null == l ? e : e.map((e, t) => a[t]?.boundMessageId === l.boundMessageId ? {
                    ...e,
                    referenceImageSuggestionActionInput: {
                        ...l,
                        stateConversationId: n
                    }
                } : e)
            }
        })
    }),
    WYN9: (function(e, t, n) {
        n.r(t), n.d(t, {
            chatGptCompletionResumeQueryById$: () => Y,
            resumeChatGptCompletionFromTopic: () => V
        });
        var r = n("mBJV"),
            s = n("Q840"),
            a = n("UKCO"),
            l = n("AuIy"),
            o = n("DD2M"),
            i = n("fVOX"),
            u = n("Cslg"),
            d = n("Kwur"),
            c = n("w5lF"),
            m = n("svjy"),
            g = n("Gvzr"),
            p = n("yGJW"),
            f = n("OWtl"),
            h = n("WFY2"),
            _ = n("rvFo"),
            v = n("jVR2"),
            y = n("bgok"),
            b = n("LZWd"),
            I = n("eShZ"),
            C = n("AOHi"),
            S = n("vW71"),
            M = n("MeER"),
            w = n("XAP6"),
            T = n("bzoy"),
            R = n("r3oB"),
            E = n("Ow2S"),
            A = n("CTBG"),
            P = n("CKur"),
            O = n("ms53");
        n("TFzY");
        var L = n("dQRk"),
            N = n("RAmW"),
            q = n("LYS1"),
            G = n("hx97"),
            F = n("Pijn"),
            k = n("sQ4r"),
            x = n("ZJtp"),
            D = n("hwXH"),
            U = n("qqsa"),
            K = n("udGC"),
            W = n("p8gF"),
            B = n("PHCh"),
            Q = n("ckvv"),
            j = n("Eq2b"),
            H = n("r7wL");

        function $(e, t) {
            let n = e.get(L.N, t),
                r = e.get(L.C, t);
            if (null == n || null == r) return !1;
            let s = (0, l.b)({
                mapping: n,
                current_node: r
            })[0];
            return s?.author.role === "user" && null != s.id
        }
        async function V(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AbortController().signal;
            if (!$(e, t) && !await async function(e, t, n) {
                    let r = (0, a.Ye)(),
                        s = () => r.resolve(!1),
                        l = e.get(u.n),
                        o = e.watch(s => {
                            let a = s.get(u.n),
                                o = a.userId !== l.userId || a.accountId !== l.accountId || a.authenticatedAccountId !== l.authenticatedAccountId || a.authMethod !== l.authMethod,
                                i = null != s.get(L.fb, t) || s.get(E.j, t) || s.get(L.eb, t) || s.get(L.s, t);
                            o || n.aborted ? r.resolve(!1) : i ? ((0, B.a)(e, t, null), r.resolve(!1)) : $(s, t) && r.resolve(!0)
                        });
                    n.addEventListener("abort", s, {
                        once: !0
                    });
                    try {
                        return await r.promise
                    } finally {
                        o(), n.removeEventListener("abort", s)
                    }
                }(e, t, AbortSignal.any([r, AbortSignal.timeout(3e4)])) || r.aborted || e.get(E.j, t)) return;
            let s = e.get(L.N, t),
                l = e.get(L.C, t);
            if (null == s || null == l) return;
            let o = e.query.getData(P.chatGptConversationQueryById$, t);
            await J(e, {
                ...o,
                conversation_id: t,
                current_node: l,
                mapping: s,
                conversation_origin: e.get(L.y, t)
            }, r, n)
        }
        let Y = (0, s.q)(f.a, (e, t) => {
            let {
                get: n,
                scope: r
            } = t, {
                data: s
            } = n(P.chatGptConversationQueryById$, e, {
                enabled: !1
            });
            return {
                enabled: null != s,
                queryFn: async t => {
                    let {
                        signal: n
                    } = t;
                    if (null != s) {
                        let t = await J(r, s, n);
                        t !== s && r.query.setData(P.chatGptConversationQueryById$, e, t)
                    }
                    return null
                },
                queryKey: ["chatgpt-completion-resume", e, s?.current_node],
                retry: !1,
                staleTime: _.b.ONE_MINUTE
            }
        });
        async function J(e, t, n, s) {
            let f, _ = (0, H.b)(e),
                $ = e.get(u.f),
                V = e.get(u.k),
                Y = t.conversation_id;
            if (z(e, Y) || null == s && (0, b.e)(e, Y)) return t;
            let J = (0, Q.a)(e, !0 === t.is_temporary_chat),
                X = (0, l.b)(t),
                Z = X[0];
            if (Z?.author.role !== "user" || null == Z.id || !0 === t.is_read_only || n.aborted) return t;
            let ee = Z.id,
                et = !(0, G.q)(t.conversation_origin),
                en = (0, B.c)(e, Y, Z.id, !0 === t.is_temporary_chat),
                er = s ?? en?.voiceContinuation,
                es = new Set(Object.keys(t.mapping));
            for (let e of X) null == e.id || e === Z || e.end_turn || es.delete(e.id);
            if (null == er && t.async_status !== T.a.STREAMING && X.at(-1)?.author.role !== "user" && (t.async_status === T.a.UNREAD || X.at(-1)?.end_turn === !0)) return t;
            let ea = en?.turnTraceId ?? (0, o.a)(),
                el = (0, B.b)(e, Z.id, !0 === t.is_temporary_chat, ea),
                eo = e.get(R.a);
            if (null == er) {
                let r = new AbortController,
                    s = AbortSignal.any([n, r.signal, AbortSignal.timeout(3e4)]),
                    a = e.watch(e => {
                        let {
                            get: n
                        } = e, s = n(L.N, Y), a = null == s ? null : (0, l.b)({
                            mapping: s,
                            current_node: n(L.C, Y)
                        });
                        (n(u.f) !== $ || n(u.k) !== V || n(E.j, Y) || z(e, Y) || "streaming" === n(L.cb, Y) || (0, b.e)(e, Y) || a?.[0]?.id !== Z.id || !a?.some(e => {
                            let {
                                id: n
                            } = e;
                            return n === t.current_node
                        })) && r.abort()
                    });
                try {
                    if (s.aborted) return t;
                    let {
                        status: n
                    } = await d.Request.safeGet("/conversation/{conversation_id}/stream_status", {
                        parameters: {
                            path: {
                                conversation_id: Y
                            }
                        },
                        additionalHeaders: null == ea ? void 0 : {
                            "x-oai-turn-trace-id": ea
                        },
                        signal: s
                    });
                    if (s.aborted) return t;
                    if ("COMPLETE" === n) {
                        let n = await (0, D.a)(e, Y, {
                            additionalHeaders: null == ea ? void 0 : {
                                "x-oai-turn-trace-id": ea
                            },
                            signal: s
                        });
                        if (!s.aborted) {
                            (0, L.mc)(e, n, {
                                mergeActiveBranch: !0
                            }), (0, x.e)(e, Y);
                            let t = (0, l.b)(n);
                            s.aborted || t[0]?.id !== Z.id || (0, O.b)({
                                scope: e,
                                conversationOrigin: n.conversation_origin,
                                isTemporaryChat: !0 === n.is_temporary_chat,
                                messages: t,
                                threadId: Y
                            });
                            let r = n.mapping[n.current_node]?.message;
                            return s.aborted || r?.id !== Z.id || "user" !== r.author.role || null == r.status || (0, l.n)(r) || Object.hasOwn(r.metadata ?? {}, "voice_mode_message") || (0, y.b)(e).getState().isVoiceModeActive || !0 === n.is_read_only || "tpp" === n.conversation_origin || "flora" === n.conversation_origin || (0, T.e)(n.async_status) || e.get(L.C, Y) !== n.current_node || (0, L.Db)(e.get(L.cb, Y)) || (0, L.Gb)(e, Y, Z.id), n
                        }
                        return t
                    }
                    if ("IS_STREAMING" !== n && "FAILURE" !== n) return t
                } catch (e) {
                    return s.aborted || h.a.debug("chatgpt_conversation_resume_status_unavailable", {
                        safe: {},
                        sensitive: {
                            conversationId: Y,
                            error: e
                        }
                    }), t
                } finally {
                    a()
                }
            }
            let ei = (0, a.Ye)(),
                eu = performance.now(),
                ed = (0, o.a)(),
                ec = (0, g.a)(e);
            (0, F.b)(e, Y, ed);
            let em = t.default_model_slug,
                eg = null == em ? void 0 : e.query.getData(P.j)?.modelConfigBySlug?.[em],
                ep = et && (er?.requestProductExperience != null ? "chat" === er.requestProductExperience : (0, G.r)(t, (0, k.b)(e.get, Y))),
                ef = {
                    conversationId: Y,
                    id: Z.id,
                    isTemporaryChat: !0 === t.is_temporary_chat,
                    model: t.default_model_slug ?? "auto",
                    requestProductExperience: er?.requestProductExperience ?? (0, q.g)(t.conversation_origin, eg?.isWorkModeModel),
                    resumeAttemptCount: 0,
                    serverConversationId: Y,
                    serverMetadata: null,
                    systemHints: (0, l.l)(Z.metadata?.system_hints),
                    successfulResumeCount: 0,
                    totalResumeAttemptCount: 0,
                    turnSessionId: (0, o.a)(),
                    turnTraceId: ea,
                    userMessageId: Z.id
                },
                eh = {},
                e_ = 0,
                ev = null,
                ey = !1,
                eb = !1,
                eI = !1,
                eC = new U.a(e, Y, Z.id, ef.turnSessionId, async () => {
                    if (null != e.get(L.fb, Y)) throw Error(e.get(m.a).formatMessage({
                        id: "chatgpt.editParagen.waitForResponse",
                        defaultMessage: "Wait for this response to finish before sending another message"
                    }))
                }, et),
                eS = () => !ey && e.get(L.fb, Y) === ev,
                eM = () => {
                    null != ev && eS() && (eb = !0, (0, L.Jb)(e, Y, ev))
                },
                ew = new M.a({
                    scope: e,
                    useChatSteering: ep,
                    conversationId: Y,
                    conversationOrigin: t.conversation_origin,
                    isTemporaryChat: !0 === t.is_temporary_chat,
                    promptId: Z.id,
                    requestId: ed,
                    turnAnalytics: ef,
                    initialMessageId: t.current_node,
                    streamingBoundaryId: Z.id,
                    getResponseHeaders: () => eh,
                    getStreamRequestId: () => ev,
                    ownsStream: eS,
                    isTerminal: () => ey,
                    editParagen: eC,
                    recordSearchConversation: J,
                    source: {
                        type: "resume",
                        previousMessageIds: es,
                        isContinuation: null != er,
                        needsWorkFinal: () => eO()
                    }
                }),
                eT = t => {
                    (0, p.a)(e, r.fb, {
                        conversationId: Y,
                        turnTraceId: ea,
                        requestId: (0, q.h)(ef, eh),
                        result: t,
                        isResume: !0
                    })
                },
                eR = t => {
                    (0, p.a)(e, r.td, (0, q.c)({
                        isResume: ef.totalResumeAttemptCount > 0,
                        record: ef,
                        streamProtocol: "sse",
                        turnCompletionStatus: t
                    }))
                },
                eE = t => {
                    let n = t.responseStatus,
                        s = (0, N.b)(t, n);
                    (0, p.a)(e, r.vd, (0, q.e)({
                        errorCode: null != n && n >= 300 ? n : void 0,
                        errorMessage: s.errorReason,
                        errorReason: s.errorReason,
                        errorType: s.errorType,
                        offset: e_,
                        record: ef
                    }))
                },
                eA = t => {
                    ew.flush(), f?.();
                    let n = eS();
                    return n && (0, x.e)(e, Y), ew.finish(t), ey = !0, eF(), ei.resolve(void 0), eC.finish("completed" === t), (0, L.nb)(e, Y, ea), null != ev && (0, w.a)(ev), n
                },
                eP = () => {
                    if (ey) return;
                    let n = eA("completed"),
                        r = ew.classifyCompletion({
                            result: "success"
                        }, eI);
                    "error" === r.result && eE(r), eT("success" === r.result ? "CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_SUCCESS" : "CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR"), "success" === r.result && eR("CHATGPT_TURN_COMPLETION_STATUS_SUCCESS"), n && ("success" === r.result && (0, O.b)({
                        scope: e,
                        conversationOrigin: t.conversation_origin,
                        isTemporaryChat: !0 === t.is_temporary_chat,
                        messages: (0, l.b)({
                            current_node: ew.lastMessageId,
                            mapping: e.get(L.N, Y) ?? t.mapping
                        }),
                        threadId: Y,
                        turnId: ef.serverMetadata?.turn_exchange_id ?? void 0
                    }), ew.complete(), (0, L.Ab)(e, Y, ed))
                },
                eO = () => (null != er || "tpp" === t.conversation_origin || "flora" === t.conversation_origin) && !ew.hasAsyncHandoff && (null != er || !ew.hasAuthoritativeStreamCompletion) && (0, w.g)(e.get(A.c, Y), Z.id ?? null, es)?.outcome !== "success",
                eL = function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e.get(i.a).log((0, H.a)({
                        redact: _,
                        diagnostics: t.diagnostics ?? (0, c.e)(t.error),
                        record: ef,
                        isAuthenticated: "chatgpt" === e.get(u.n).authMethod,
                        isTerminalPollingError: n
                    }))
                },
                eN = function(n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = arguments.length > 2 ? arguments[2] : void 0;
                    if (ey) return;
                    let a = eA("error"),
                        l = ew.classifyError(n, s);
                    if (eE(l), eT("CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR"), eL(n, r), !a) return;
                    let o = (0, W.a)(n);
                    null != o && (0, K.q)(e, Y, o), (0, L.zb)({
                        scope: e,
                        conversationId: Y,
                        error: (0, C.d)(n.error, "Unknown error"),
                        canRetry: n.canRetry,
                        isTerminalPollingError: r,
                        recoveryOutcome: s,
                        paragenPromptMessageId: ew.paragenPromptMessageId,
                        errorMetadata: ew.errorMetadata(l, n),
                        ...null == ec ? {} : {
                            failureContext: {
                                ...ec,
                                stage: "resume",
                                requestedModel: t.default_model_slug
                            }
                        }
                    }), (0, L.Ab)(e, Y, ed)
                },
                eq = function(n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!ey && !eI) {
                        if (ew.flush(), !eS()) return void eN(n);
                        eL(n), eI = !0, ew.finish("recovery"), (0, w.h)({
                            scope: e,
                            source: r ? "initial_fetch" : "stream_interruption",
                            useChatSteering: ep,
                            productExperience: ef.serverMetadata?.product_experience,
                            conversationOrigin: t.conversation_origin,
                            isCurrent: eS,
                            conversationId: Y,
                            error: n,
                            expectedMessageId: Z.id ?? null,
                            previousMessageIds: es,
                            requireWorkFinal: eO(),
                            messages: (0, l.b)({
                                current_node: e.get(L.C, Y),
                                mapping: e.get(L.N, Y) ?? t.mapping
                            }),
                            model: t.default_model_slug ?? "auto",
                            turnTraceId: ea,
                            onRecoveredMessage: (e, t) => {
                                "success" === t && (ew.lastMessageId = e.id ?? ew.lastMessageId), (0, q.i)(ef, e)
                            },
                            onComplete: e => {
                                "success" === e ? eP() : eN(n, !0, e)
                            },
                            onError: e => eN(e, !0)
                        })
                    }
                },
                eG = () => {
                    eF(!0), null != s && n.aborted || ew.flush(), ew.finish("stopped"), ey = !0, ei.resolve(void 0), eC.finish(!1), (0, L.nb)(e, Y, ea), f?.()
                };
            (0, L.fc)(e, Y, ea);
            let eF = (0, j.b)(e, Y, ef.turnSessionId, {
                promptSentAtMs: eu,
                submitSurface: j.a.ROOT
            });
            (0, L.ic)({
                scope: e,
                conversationId: Y,
                streamRequestId: null
            }), eC.start(), (0, L.g)(e, {
                conversationId: Y,
                isTemporaryChat: !0 === t.is_temporary_chat,
                promptMessageId: Z.id,
                requestId: ed,
                requestModel: t.default_model_slug ?? "auto",
                systemHints: (0, E.S)(e.get, Y)
            });
            try {
                (0, B.a)(e, Y, Z.id);
                let n = er?.resumeToken ?? (0, B.c)(e, Y, Z.id, !0 === t.is_temporary_chat)?.token;
                ev = eo.resumeCompletionStream({
                    projectId: t.gizmo_id,
                    topicId: er?.topicId,
                    conduitToken: n,
                    turnTraceId: ea,
                    onResumeToken: e => {
                        eS() && el?.(e)
                    },
                    request: {
                        conversation_id: Y,
                        offset: 0
                    },
                    onComplete: e => {
                        if (ew.flush(), !eI) {
                            if (!ey && eS() && (null != er || "done" !== e.reason && "aborted" !== e.reason) && eO()) return void eq({
                                type: "fetch-stream-error",
                                requestId: e.requestId,
                                error: c.b,
                                errorCode: null != er ? "incomplete_work_continuation" : "incomplete_work_stream",
                                canRetry: !0
                            });
                            eP()
                        }
                    },
                    onTransportClose: () => {
                        ew.flush(), eC.transportClosed()
                    },
                    onError: eN,
                    onResponse: e => {
                        eS() && (eh = e.headers, e.isEventStream && eM())
                    },
                    onStreamData: e => {
                        let {
                            eventCount: t
                        } = e;
                        e_ += t
                    },
                    onResume: e => {
                        !ey && ("attempted" === e.type ? (ef.resumeAttemptCount = e.attemptCount, ef.totalResumeAttemptCount += 1) : "succeeded" === e.type ? (ef.resumeAttemptCount = 0, ef.successfulResumeCount += 1) : "response" === e.type && (eh = e.response.headers, e.response.isEventStream && eM()))
                    },
                    onRecoverableError: e => {
                        let t = null == er && null == n && !eb && 404 === e.responseStatus && ("tokenless_resume_unavailable" === e.errorCode || "conduit_miss" === e.errorCode);
                        eq(e, t)
                    },
                    onDecodedEvent: e => {
                        eM(), ew.onEvent(e)
                    }
                }), ey || (f = (0, S.c)(ev, {
                    conduitToken: null,
                    getStoppedResponse: e => et && null == er && !(0, l.n)(Z) ? {
                        promptMessageId: ee,
                        leafId: e
                    } : void 0,
                    logCancellation: () => {
                        eT("CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_CANCELED"), eR("CHATGPT_TURN_COMPLETION_STATUS_CANCELED")
                    },
                    markTerminal: eG,
                    refetchAfterStop: !1
                }), null != er && (0, v.d)(e, Y, ev), (0, L.cc)({
                    scope: e,
                    conversationId: Y,
                    streamRequestId: ev
                }))
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                eN({
                    error: e,
                    canRetry: (0, a.zj)(e),
                    errorCode: t instanceof I.FetchError ? t.errorCode : void 0,
                    responseStatus: t instanceof I.FetchError ? t.responseStatus ?? void 0 : void 0,
                    diagnostics: (0, c.e)(t instanceof I.FetchError ? t.diagnosticError ?? t : t),
                    requestId: ev ?? "",
                    type: "fetch-stream-error"
                })
            }
            if (null != er) {
                let t = () => {
                    ey || null == ev || (eS() ? (0, S.a)(e, Y) : (eG(), (0, w.a)(ev), eo.cancelStream(ev)))
                };
                null != s && (n.addEventListener("abort", t, {
                    once: !0
                }), n.aborted && t());
                try {
                    await ei.promise
                } finally {
                    n.removeEventListener("abort", t)
                }
            }
            return t
        }

        function z(e, t) {
            return null != e.get(L.fb, t) || e.get(L.eb, t) || e.get(L.s, t)
        }
    })
};