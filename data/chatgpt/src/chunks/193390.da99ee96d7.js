export const __rspack_esm_ids = [193390];
export const __webpack_modules__ = {
    FQvo: (function(a, b, c) {
        var d = c("OmHE"),
            e = c("Q840"),
            f = c("StMt"),
            g = c("Cslg"),
            h = c("OWtl"),
            i = c("OMIV"),
            j = c("rvFo"),
            k = c("CKur"),
            l = c("dQRk"),
            m = c("g2p6");
        let n = "2700319491",
            o = (0, e.q)(h.a, (a, b) => {
                let {
                    scope: c,
                    get: e
                } = b, h = e(l.j, a), o = e(l.y, a), p = null != h && "tpp" !== o && "flora" !== o && !e(l.I, a) && null == e(l.ab, a) && e(f.a, {
                    name: "chatgpt.ads"
                }).isCapable, q = p ? e(k.chatGptConversationQueryById$, h).data : null, r = e(i.e, n);
                return {
                    enabled: p && q?.conversation_id === h && q?.is_temporary_chat !== !0,
                    queryKey: ["chatgpt-ads-hydration", h, ...r ? [e(g.k), e(m.n), r] : []],
                    staleTime: r ? 0 : j.b.ONE_MINUTE,
                    ...r && {
                        refetchOnMount: "always"
                    },
                    retry: !1,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (null == h || b.aborted) return null;
                        let e = await (0, d.c)();
                        return b.aborted ? null : e(c, h, b, r)
                    }
                }
            });
        c.d(b, {}, {
            a: n,
            b: o
        })
    }),
    Vywf: (function(a, b, c) {
        c.d(b, {
            a: () => t,
            b: () => u,
            c: () => v,
            d: () => x,
            e: () => w
        });
        var d = c("rKAs"),
            e = c("AuIy"),
            f = c("iqEK"),
            g = c("evsE"),
            h = c("NRIv"),
            i = c("vJOD"),
            j = c("KaH3"),
            k = c("dMTK"),
            l = c("Usao"),
            m = c("v6Sc"),
            n = c("ZPcX"),
            o = c("MJjm"),
            p = c("G6Ip"),
            q = c("DrWu"),
            r = c("hUUF"),
            s = c("ihvi");

        function t() {
            let a;
            return b => a = u(b, a)
        }

        function u(a, b) {
            let {
                conversation: c,
                contextContinuation: d = c?.context_truncation_continuation,
                clinicalSearchEnabled: j = !1,
                clinicalCitationsEnabled: k = !1,
                conversationOrigin: l = c?.conversation_origin,
                enableCloudBrowserActivity: r = !1,
                enableImageGenerationLoadingState: s = !1,
                hasPendingImageAd: t,
                voiceImageSessionId: u,
                voiceImageGenerationSpawnIds: v,
                enableVoiceImageLoadingFix: w,
                getRenderTelemetry: x,
                moderationDisclaimersByMessageId: y = {},
                isStreaming: z,
                isWorkConversation: A = "tpp" === l || "flora" === l,
                mode: B,
                mcpResponseCache: C,
                pendingSubmission: D,
                modelLookup: E,
                streamingOrders: F,
                threadCurrentNode: G,
                threadMapping: H
            } = a, I = null == H ? c ?? null : {
                context_truncation_continuation: d,
                conversation_origin: l,
                current_node: G ?? null,
                mapping: H
            }, J = null == I ? [] : (0, e.a)(I), K = A || D?.isSteer ? null : D?.submittedMessageId, L = null != K && !J.some(a => a.id === K), M = null == I ? void 0 : (0, p.b)(I, {
                clinicalSearchEnabled: j,
                clinicalCitationsEnabled: k,
                enableCloudBrowserActivity: r,
                enableImageGenerationLoadingState: s,
                hasPendingImageAd: t,
                voiceImageSessionId: u,
                voiceImageGenerationSpawnIds: v,
                enableVoiceImageLoadingFix: w,
                getRenderTelemetry: x,
                isStreaming: z && !L,
                isWorkConversation: A,
                mode: B,
                mcpResponseCache: C,
                modelLookup: E,
                streamingOrders: F,
                moderationDisclaimersByMessageId: "conversation" === B ? y : {}
            }, b?.derivation), N = M?.renderedTurns ?? [], O = D?.prompt == null || !A && D.isSteer || z && null == K && !((0, g.a)(D.prompt).length > 0) || function(a, b) {
                let {
                    attachments: c,
                    submittedMessageId: d
                } = b;
                if (null != d && a.some(a => {
                        let {
                            turn: b
                        } = a;
                        return b.messageIds.includes(d)
                    })) return !0;
                if (0 === c.length) return !1;
                let e = new Map(c.map(a => {
                    let {
                        id: b,
                        name: c
                    } = a;
                    return [b, c]
                }));
                return a.some(a => {
                    let {
                        turn: b
                    } = a;
                    return b.items.some(a => "user-message" === a.type && a.images.some(b => {
                        let c = (0, f.d)(b),
                            d = null == c ? void 0 : e.get(c);
                        return null != d && a.appshotContexts?.some(a => {
                            let {
                                imageName: b
                            } = a;
                            return d === b
                        }) === !0
                    }))
                })
            }(N, D) ? null : function(a, b) {
                let {
                    attachments: c,
                    selectedTextAttachments: d,
                    commentAttachments: e = [],
                    submittedMessageId: f,
                    sentAtMs: j,
                    renderFormat: k,
                    imageGenerationSettings: l
                } = b, n = (0, m.d)(a, {
                    commentAttachments: e
                }), o = c.flatMap(a => {
                    let {
                        previewSrc: b
                    } = a;
                    return null == b ? [] : [b]
                }), p = c.filter(a => {
                    let {
                        previewSrc: b
                    } = a;
                    return null == b
                }), r = (0, g.a)(a).filter(a => {
                    let {
                        imageName: b
                    } = a;
                    return c.some(a => {
                        let {
                            name: c,
                            previewSrc: d
                        } = a;
                        return c === b && null != d
                    })
                }), s = 1 === d.length ? d[0]?.sourceMessageId : void 0;
                return {
                    id: f ?? "pending-chatgpt-submit",
                    timestampTurns: [{
                        role: "user",
                        sentAtMs: j ?? null
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
                            ...0 === r.length ? {} : {
                                appshotContexts: r
                            },
                            attachments: (0, q.l)(p),
                            chatGptFileAttachments: p.map(a => {
                                let {
                                    height: b,
                                    id: c,
                                    libraryFileId: d,
                                    mimeType: e,
                                    mountedLibraryFileId: f,
                                    mountedLibraryMimeType: g,
                                    name: h,
                                    size: i,
                                    source: j,
                                    width: k
                                } = a;
                                return {
                                    downloadUrl: null,
                                    fileId: c,
                                    height: b ?? null,
                                    libraryFileId: d ?? null,
                                    mimeType: e,
                                    mountedLibraryFileId: f ?? null,
                                    mountedLibraryMimeType: g ?? null,
                                    name: h,
                                    sizeBytes: i ?? null,
                                    source: j ?? null,
                                    width: k ?? null
                                }
                            }),
                            commentCount: n.length,
                            comments: n,
                            images: o,
                            submittedMessageId: f,
                            renderFormat: k,
                            imageGenerationSettings: l,
                            message: 0 === r.length ? a : (0, h.x)(a),
                            referencesPriorConversation: !1,
                            ...d.length > 0 ? {
                                selectedTextAttachments: d.map(i.a)
                            } : {},
                            selectedTextSourceMessageId: s,
                            selectedTextSourceOccurrence: d[0]?.sourceOccurrence,
                            sentAtMs: j ?? null,
                            type: "user-message"
                        }],
                        status: "complete"
                    }
                }
            }(D.prompt, D), P = null == O ? N : [...N, O];
            return {
                derivation: M,
                isConversationEmpty: null != I && !J.some(a => "system" !== a.author.role && !(0, e.n)(a)),
                renderedConversation: I,
                renderedTurns: P,
                showPendingLoadingMessage: function(a) {
                    let {
                        isStreaming: b,
                        isWorkConversation: c,
                        pendingTurn: d,
                        renderedTurns: e
                    } = a;
                    if (null != d) return !0;
                    if (!b) return !1;
                    let f = c && !1,
                        g = e.at(-1)?.turn.items.findLast(a => "user-message" === a.type || !(f && function(a) {
                            if ("chatgpt-reasoning-group" !== a.type || null != a.streamingParentRegion || null != a.doubleTextingPresentation) return !1;
                            if (null != a.reasoningRecap) return "hide_all" === a.reasoningRecap.type;
                            let b = a => "reasoning" === a.type && !a.content.trim() && void 0 === a.webSearchQuery && !a.toolIcons?.length && !a.browserProvider;
                            return (!a.activeReasoning || b(a.activeReasoning)) && a.items.every(b)
                        }(a)) && function a(b) {
                            return "context-compaction" === b.type ? (0, n.a)(b) : "chatgpt-automation-progress" === b.type || ("chatgpt-reasoning-group" === b.type ? !b.completed || b.items.some(a) : "assistant-message" === b.type || "chatgpt-writing-block-patch" === b.type ? !b.completed || "assistant-message" === b.type && (0, o.d)(b) : "generated-image" === b.type ? "in_progress" === b.status || "inProgress" === b.status : "web-search" === b.type ? !b.completed : "chatgpt-tool-approval" === b.type && b.request?.type !== "preview")
                        }(a));
                    return null == g || "user-message" === g.type
                }({
                    isStreaming: z || null != K,
                    isWorkConversation: A,
                    pendingTurn: O,
                    renderedTurns: P
                })
            }
        }

        function v(a) {
            let {
                browserConversationId: b,
                conversationId: c,
                enableCloudBrowserActivity: e = !1,
                errorMessage: f,
                branchingMessageId: g = null,
                isReadOnly: h = !1,
                isTemporaryChat: i = !1,
                isWorkConversation: l = !1,
                onEditUserMessage: m,
                onFork: n,
                onRegenerateResponse: o,
                pendingSubmissionAttachments: p,
                shareEnabled: q = !1,
                readAloudEnabled: r = !0,
                feedbackEnabled: t = !1,
                hideInitialUserMessage: u = !1,
                paragen: v = null,
                renderedTurns: w,
                safetyReview: x = null,
                sharedConversationLastMessageId: y = null,
                showPendingLoadingMessage: z,
                showRequestUserInputStatus: A = !1
            } = a, B = (0, k.d)(w.map(a => a.timestampTurns ?? null)), C = w.findLastIndex(a => {
                let {
                    turn: b
                } = a;
                if ("complete" !== b.status) return !1;
                let c = b.items.flatMap(a => "chatgpt-reasoning-group" === a.type ? a.items : [a]);
                return (0, j.b)(c.filter(a => "mcp-tool-call" === a.type)).length > 0
            }), D = w.map((a, d) => {
                let j = d === w.length - 1,
                    k = null != y && a.turn.items.some(a => "messageId" in a && a.messageId === y);
                return {
                    ...a,
                    turn: u && 0 === d ? {
                        ...a.turn,
                        items: a.turn.items.filter(a => "user-message" !== a.type)
                    } : a.turn,
                    paragen: j ? v : null,
                    browserConversationId: b,
                    conversationId: c,
                    ...e ? {
                        enableCloudBrowserActivity: e
                    } : {},
                    errorMessage: j ? f : null,
                    branchingMessageId: g,
                    hasLaterSitesPreview: d < C,
                    isMostRecentTurn: j,
                    isReadOnly: h,
                    isTemporaryChat: i,
                    isWorkConversation: l,
                    onEditUserMessage: m,
                    onFork: n,
                    onRegenerateResponse: o,
                    pendingSubmissionAttachments: j ? p : void 0,
                    shareEnabled: q,
                    readAloudEnabled: r,
                    feedbackEnabled: t,
                    safetyReview: j ? x : null,
                    showSharedConversationPrivateDisclaimer: !j && k,
                    showPendingLoadingMessage: j && z,
                    showRequestUserInputStatus: j && A,
                    timestampSeparatorAtMs: B[d] ?? null,
                    turnKey: a.turn.items.find(a => "user-message" === a.type)?.messageId ?? a.turn.messageIds[0] ?? a.id
                }
            }), E = !1, F = D.flatMap(a => {
                let b = function(a) {
                    let b = [];
                    for (let c of a.turn.items) {
                        let e = "assistant-message" === c.type ? c : void 0,
                            f = e?.contentReferences.findIndex(a => "string" == typeof a.source_visual_slot_id) ?? -1,
                            g = e?.contentReferences[f]?.source_visual_slot_id;
                        if (e?.messageId && "string" == typeof g) {
                            let a = g === e.messageId ? e.content : e.content.replace((0, d.d)(f, e.messageId), (0, d.d)(f, g));
                            b.push({
                                key: `dil:${g}`,
                                dilSlotId: g,
                                items: [a === e.content ? e : {
                                    ...e,
                                    content: a
                                }]
                            })
                        } else {
                            let d = b.at(-1);
                            d && !d.dilSlotId ? d.items.push(c) : b.push({
                                key: 0 === b.length ? a.turnKey : `${a.turnKey}:text:${b.length}`,
                                items: [c]
                            })
                        }
                    }
                    return b.some(a => a.dilSlotId) ? b.map((c, d) => {
                        let e = d === b.length - 1;
                        return {
                            ...a,
                            turnKey: c.key,
                            dilSlotId: c.dilSlotId,
                            turn: {
                                ...a.turn,
                                items: c.items
                            },
                            isMostRecentTurn: e && a.isMostRecentTurn,
                            timestampSeparatorAtMs: 0 === d ? a.timestampSeparatorAtMs : null,
                            showSharedConversationPrivateDisclaimer: e && a.showSharedConversationPrivateDisclaimer,
                            showPendingLoadingMessage: e && a.showPendingLoadingMessage,
                            showRequestUserInputStatus: e && a.showRequestUserInputStatus,
                            paragen: e ? a.paragen : null
                        }
                    }) : [a]
                }(a);
                return E = E || b[0] !== a, b
            });
            return E ? function(a) {
                let b = -1,
                    c = !1;
                for (let d = 0; d <= a.length; d++) {
                    let e = a[d],
                        f = null == e ? void 0 : (0, s.c)(e.turn.items);
                    if (null == e || null != f) {
                        if (c && b >= 0 && d - 1 > b) {
                            let c = a[b];
                            a[b] = {
                                    ...c,
                                    turn: {
                                        ...c.turn,
                                        hasFollowingDilResponse: !0
                                    }
                                },
                                function(a, b, c) {
                                    let d = a[b],
                                        e = a[c],
                                        f = (0, s.c)(d.turn.items),
                                        g = d.turn.adsPlacement;
                                    if (null == f || null == g) return;
                                    let h = g;
                                    for (let d = b + 1; d <= c; d++) {
                                        let b = a[d].turn.adsPlacement;
                                        null != b && b !== h && (h = (0, s.e)(h, b))
                                    }
                                    a[b] = {
                                        ...d,
                                        turn: {
                                            ...d.turn,
                                            adsPlacement: {
                                                ...g,
                                                userMessageId: null
                                            }
                                        }
                                    }, a[c] = {
                                        ...e,
                                        turn: {
                                            ...e.turn,
                                            adsPlacement: {
                                                ...h,
                                                userMessageId: f
                                            }
                                        }
                                    }
                                }(a, b, d - 1)
                        }
                        b = null == f ? -1 : d, c = !1
                    }
                    e?.dilSlotId != null && (c = !0)
                }
                return a
            }(F) : F
        }

        function w(a, b) {
            if (null == b) return {
                entries: a
            };
            let {
                messageId: c
            } = b.source, d = -1, e = !1;
            for (let [f, g] of a.entries())
                if ((e = g.turn.messageIds.includes(b.promptId) || e && !g.turn.items.some(a => "user-message" === a.type)) && (d = f), e || null != c && g.turn.messageIds.includes(c))
                    for (let d of g.turn.items)
                        for (let e of "chatgpt-reasoning-group" === d.type ? d.items : [d]) {
                            if ("assistant-message" !== e.type && "user-message" !== e.type) continue;
                            let d = e.clientMetadata?.find(a => a.blocked && a.policy?.errCode === "bio_safety_content_policy" && (null == c || a.messageId === c));
                            if (null != d) {
                                if (null == d.messageId || d.shouldDisableConversation) return {
                                    entries: a
                                };
                                return {
                                    entries: a,
                                    inlineNotice: {
                                        ...b,
                                        source: {
                                            ...b.source,
                                            messageId: d.messageId
                                        }
                                    }
                                }
                            }
                        }
            return -1 === d ? {
                entries: a
            } : {
                entries: a.with(d, {
                    ...a[d],
                    showLiveBioSafetyNotice: !0
                }),
                inlineNotice: b
            }
        }

        function x(a, b) {
            let c = a.turn.items.findLast(y),
                d = b.turn.items.find(y);
            return !a.showSharedConversationPrivateDisclaimer && null == b.timestampSeparatorAtMs && c?.type === "user-message" && (0, l.h)(c) && d?.type === "user-message" && (0, l.h)(d) ? "adjacent-user-prompts" : a.id === b.id ? "same-turn" : "new-turn"
        }

        function y(a) {
            return "chatgpt-reasoning-group" !== a.type || a.reasoningRecap?.type !== "hide_all" && !(0, r.g)(a)
        }
    }),
    pmRu: (function(a, b, c) {
        c.d(b, {
            a: () => M
        });
        var d = c("Q840"),
            e = c("OWtl"),
            f = c("FQvo"),
            g = c("KvQL"),
            h = c("AuIy"),
            i = c("ccwJ"),
            j = c("lAQI"),
            k = c("TDcV"),
            l = c("KGPo"),
            m = c("bzoy"),
            n = c("Ow2S"),
            o = c("CKur"),
            p = c("KW2R"),
            q = c("Kwur"),
            r = c("dQRk"),
            s = c("srYL"),
            t = c("RQhI");
        let u = j.E().positive(),
            v = (0, d.q)(e.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b, e = c(k.a), f = w(c, a), h = null == a ? null : c(r.w, a);
                return {
                    enabled: null != e && null != a && null != f && null != x(c, a),
                    queryKey: ["chatgpt-background-recovery", e, a, f, h?.requestId],
                    queryFn: async b => {
                        let c, i, {
                            signal: j
                        } = b;
                        if (null == a || null == f) return null;
                        let l = new AbortController,
                            n = AbortSignal.any([j, l.signal]),
                            o = x(d.get, a),
                            s = d.get(r.N, a),
                            u = Date.now(),
                            v = !1,
                            y = 0,
                            z = () => null != i && Date.now() - i >= 6e4,
                            A = null == o ? 0 : o.deadline,
                            B = (0, g.Ze)(),
                            C = () => B.resolve(void 0);
                        n.addEventListener("abort", C, {
                            once: !0
                        });
                        let D = d.watch(b => {
                            let {
                                get: d
                            } = b, g = o?.messages;
                            o = x(d, a);
                            let j = d(r.N, a);
                            (d(k.a) !== e || w(d, a) !== f || null == o || d(r.w, a) !== h) && l.abort(), o?.paused && (i = void 0, c?.abort()), j !== s && (s = j, !v && (i = void 0, c?.abort(), null != o && !o.paused && (o.messages.length !== g?.length || o.messages.some((a, b) => a !== g?.[b])) && (u = Date.now(), A = Math.max(o.deadline, u + o.timeoutMs), y = 0, C())))
                        });
                        try {
                            for (; !n.aborted && null != o;) {
                                if (Date.now() >= A || y >= 30) {
                                    B = (0, g.Ze)(), await B.promise;
                                    continue
                                }
                                if (await
                                    function(a, b) {
                                        return new Promise(c => {
                                            let d = () => {
                                                    clearTimeout(e), c()
                                                },
                                                e = setTimeout(() => {
                                                    b.removeEventListener("abort", d), c()
                                                }, a);
                                            b.addEventListener("abort", d, {
                                                once: !0
                                            })
                                        })
                                    }(Math.min(o.pollIntervalMs, A - Date.now()), n), n.aborted || null == o) break;
                                if (Date.now() >= A || o.paused || Date.now() - u < o.inactivityMs) continue;
                                c = new AbortController;
                                let b = AbortSignal.any([n, c.signal, AbortSignal.timeout(Math.min(3e4, A - Date.now()))]);
                                try {
                                    let c = !1,
                                        e = o.pendingSteering?.userMessageId;
                                    if (o.checkStreamStatus) {
                                        let d = await q.Request.safeGet("/conversation/{conversation_id}/stream_status", {
                                            parameters: {
                                                path: {
                                                    conversation_id: a
                                                }
                                            },
                                            signal: b
                                        }).catch(() => void 0);
                                        if (b.aborted) continue;
                                        if (d?.status === "IS_STREAMING") {
                                            i = void 0, y = 0;
                                            continue
                                        }
                                        c = d?.status === "COMPLETE" || d?.status === "FAILURE"
                                    }
                                    let f = await (0, p.refetchChatGptConversation)(d, a, "background_poll", {
                                        signal: b,
                                        steerRecoveryMessageId: c && z() ? e : void 0,
                                        onSnapshotApply: a => {
                                            v = a
                                        }
                                    });
                                    y = null != f || b.aborted ? 0 : y + 1, null == f || b.aborted || !c || null == e || (0, m.e)(f.async_status) ? i = void 0 : (i = i ?? Date.now(), z() && (0, t.d)(d, a, f, e))
                                } finally {
                                    c.abort(), c = void 0
                                }
                            }
                        } finally {
                            l.abort(), n.removeEventListener("abort", C), D()
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

        function w(a, b) {
            return a(r.t, b)?.at(-1)
        }

        function x(a, b) {
            let c = (0, t.c)(a, b),
                d = null != a(r.fb, b) || "streaming" === a(r.cb, b);
            if (a(n.j, b) || d && 1) return null;
            let e = a(r.C, b),
                f = a(r.N, b),
                g = null == e ? null : f?.[e]?.message;
            if (null == g || null == f) return null;
            let j = (0, h.b)({
                current_node: e,
                mapping: f
            });
            if (j.some(a => null != (0, s.b)(a) || (0, i.b)(a, {
                    isActiveTurn: !0,
                    isStreaming: !1
                }).length > 0)) return null;
            let k = a(r.p, b),
                p = (0, h.s)(g.metadata),
                q = (0, h.s)((0, h.s)((0, h.s)(p?.view_state)?.widgets)?.[`${g.id}:0`]),
                v = (0, h.s)(p?.chatgpt_sdk)?.is_custom_agent === !0 && q?.canceled !== !0 && (q?.streaming === !0 || (0, h.s)(q?.workflow)?.complete === !0),
                w = u.safeParse(p?.poll_on_websocket_inactivity_ms).data ?? 3e4 * !!v,
                x = k === m.a.STREAMING;
            if (!x && null == c && !(w > 0 && ((0, m.f)(k) || p?.async_task_type === "pro_mode" || v)) || !x && !v && !0 === g.end_turn && "in_progress" !== g.status) return null;
            let {
                data: y
            } = a(o.chatGptConversationQueryById$, b, {
                enabled: !1
            }), {
                pollIntervalMs: z,
                timeoutMs: A,
                checkStreamStatus: B
            } = (0, l.f)(j, y?.default_model_slug ?? ""), C = 1e3 * Math.max(y?.update_time ?? 0, g.create_time ?? 0, g.update_time ?? 0);
            return {
                messages: j,
                pollIntervalMs: z,
                checkStreamStatus: B || null != c,
                inactivityMs: d ? Math.max(w, z) : w,
                paused: a(r.eb, b) || a(r.s, b),
                deadline: Math.max(C, c?.acceptedAt ?? 0) + A,
                timeoutMs: A,
                pendingSteering: c
            }
        }
        var y = c("Cslg"),
            z = c("CTBG"),
            A = c("rKAs"),
            B = c("GDNt");
        let C = j.F({
                genui_refresh: j.J(j.L(), j.R()),
                is_complete: j.j().optional()
            }).loose(),
            D = j.F({
                enabled: j.z(!0),
                name: j.L().trim().min(1)
            }),
            E = j.F({
                appData: j.F({
                    opGenui: j.F({
                        componentResults: j.J(j.L(), j.R())
                    })
                })
            }),
            F = j.F({
                status: j.z("resolved")
            });

        function G(a) {
            return "resolutionId" in a ? `${a.messageId}:component:${a.resolutionId}` : `${a.messageId}:ref:${a.refIndex}`
        }

        function H(a) {
            return document.addEventListener("visibilitychange", a), window.addEventListener("focus", a), () => {
                document.removeEventListener("visibilitychange", a), window.removeEventListener("focus", a)
            }
        }
        var I = c("rxj0");
        let J = (0, d.v)(e.a, a => null, {
            onMount: (a, b) => {
                let {
                    key: c
                } = b;
                if (null != c) return b.watch(a => {
                    let {
                        get: d
                    } = a, e = d(y.f);
                    if (null == e) return;
                    let f = function(a) {
                            let {
                                isVisible: b = () => "visible" === document.visibilityState,
                                onVisibilityChange: c = H,
                                refreshWidget: d,
                                onRefresh: e
                            } = a, f = new Map, g = !1, h = (a, b) => {
                                a.timeout = setTimeout(() => {
                                    a.timeout = null, i(a)
                                }, Math.max(1e3, b))
                            }, i = async a => {
                                let c = G(a.target);
                                if (!g && f.get(c) === a && !a.inFlight && b()) {
                                    a.inFlight = !0;
                                    try {
                                        let b = await d(a.target);
                                        if (g || f.get(c) !== a || (e?.(a.target, b), g || f.get(c) !== a)) return;
                                        if (a.failures = 0, null == b.next_poll_after_ms) return void f.delete(c);
                                        h(a, b.next_poll_after_ms)
                                    } catch (d) {
                                        var i, k;
                                        if (g || f.get(c) !== a) return;
                                        a.failures += 1;
                                        let b = (i = d, k = a.failures, i instanceof B.a && 404 === i.status ? "Message not found" === function(a) {
                                            try {
                                                let b = j.F({
                                                    detail: j.L()
                                                }).safeParse(JSON.parse(a.message));
                                                return b.success ? b.data.detail : null
                                            } catch {
                                                return null
                                            }
                                        }(i) && k < 5 ? 1e3 : null : k < 2 ? 5e3 : null);
                                        if (null == b) return void f.delete(c);
                                        h(a, b)
                                    } finally {
                                        a.inFlight = !1
                                    }
                                }
                            }, k = c(() => {
                                if (b())
                                    for (let a of f.values()) null == a.timeout && i(a)
                            });
                            return {
                                setTargets: a => {
                                    let b = new Map(a.map(a => [G(a), a]));
                                    for (let [a, c] of f) b.has(a) || (null != c.timeout && clearTimeout(c.timeout), f.delete(a));
                                    for (let [a, c] of b) {
                                        if (f.has(a)) continue;
                                        let b = {
                                            failures: 0,
                                            inFlight: !1,
                                            target: c,
                                            timeout: null
                                        };
                                        f.set(a, b), i(b)
                                    }
                                },
                                stop: () => {
                                    for (let a of (g = !0, k(), f.values())) null != a.timeout && clearTimeout(a.timeout);
                                    f.clear()
                                }
                            }
                        }({
                            onRefresh: (a, d) => {
                                d.message?.id === a.messageId && b.get(y.f) === e && b.get(y.p) && !b.get(I.e, c) && (0, r.d)({
                                    scope: b,
                                    conversationId: c,
                                    message: d.message,
                                    preserveCurrentTurn: !0
                                })
                            },
                            refreshWidget: a => !b.get(y.p) || b.get(y.f) !== e || b.get(I.e, c) ? Promise.resolve({
                                next_poll_after_ms: null
                            }) : q.Request.safePost("/conversation/{conversation_id}/message/{message_id}/genui/refresh_widget", {
                                parameters: {
                                    path: {
                                        conversation_id: c,
                                        message_id: a.messageId
                                    }
                                },
                                requestBody: "resolutionId" in a ? {
                                    resolution_id: a.resolutionId
                                } : {
                                    ref_index: a.refIndex
                                }
                            })
                        }),
                        g = b.watch(a => {
                            let {
                                get: b
                            } = a, d = b(z.c, c);
                            f.setTargets(null == d || !b(y.p) || b(I.e, c) ? [] : d.flatMap(a => {
                                let b = a.id;
                                if ("assistant" !== a.author.role || null == b || a.metadata?.genui_refresh == null) return [];
                                let c = C.safeParse(a.metadata),
                                    d = !!c.success && (c.data.is_complete ?? "in_progress" !== a.status);
                                if (!c.success || !d) return [];
                                let e = c.data.genui_refresh,
                                    f = D.safeParse(e).success ? (0, A.q)(a.metadata).flatMap((a, c) => (0, A.I)(a) ? [{
                                        messageId: b,
                                        refIndex: c
                                    }] : []) : [];
                                if (null == e.components) return f;
                                let g = j.J(j.L(), j.R()).safeParse(e.components),
                                    h = E.safeParse(c.data.model_dil_v2);
                                if (g.success && h.success) {
                                    let a = h.data.appData.opGenui.componentResults;
                                    for (let [c, d] of Object.entries(g.data)) D.safeParse(d).success && F.safeParse(a[c]).success && f.push({
                                        messageId: b,
                                        resolutionId: c
                                    })
                                }
                                return f
                            }))
                        });
                    return () => {
                        g(), f.stop()
                    }
                })
            }
        });
        var K = c("lSVy"),
            L = c("WYN9");
        let M = (0, d.d)(e.a, (a, b) => {
            let {
                get: c
            } = b;
            return c(p.a), c(L.chatGptCompletionResumeQueryById$, a), c(f.b, a), c(J, a), c(K.a, a), c(v, a), null
        })
    }),
    lSVy: (function(a, b, c) {
        var d = c("Q840"),
            e = c("AuIy"),
            f = c("ccwJ"),
            g = c("TDcV"),
            h = c("OWtl"),
            i = c("WFY2"),
            j = c("bzoy"),
            k = c("ISgP"),
            l = c("KW2R"),
            m = c("dQRk"),
            n = c("srYL"),
            o = c("nXyT"),
            p = c("NOye"),
            q = c("YCHf"),
            r = c("VnaB");
        let s = (0, d.v)(h.a, a => null, {
            onMount: (a, b) => {
                let {
                    key: c
                } = b;
                if (null == c) return;
                let d = null,
                    h = null,
                    s = [],
                    t = 0,
                    u = null,
                    v = !1,
                    w = !1,
                    x = null,
                    y = new Set,
                    z = b.get(g.a),
                    A = new AbortController,
                    B = (0, o.c)(b, c),
                    C = () => {
                        null != u && (clearTimeout(u), u = null)
                    },
                    D = async () => {
                        if (w || null == d || v || b.get(g.a) !== z) return;
                        if (Date.now() >= t) {
                            let a = d;
                            if (h = a, d = null, s.length > 0) {
                                let d = s.map(b => ({
                                    accountId: z,
                                    conversationId: c,
                                    generationKey: a,
                                    messageId: b
                                }));
                                b.set(r.a, a => [...a, ...d].slice(-100))
                            }
                            i.a.warning("Stopped polling ChatGPT image generation after timeout", {
                                safe: {},
                                sensitive: {
                                    conversationId: c
                                }
                            });
                            return
                        }
                        let a = d;
                        v = !0;
                        try {
                            await (0, l.refetchChatGptConversation)(b, c, "image_generation_poll", {
                                signal: A.signal
                            })
                        } finally {
                            v = !1, w || null == d || (d === a ? (C(), u = setTimeout(() => {
                                u = null, D()
                            }, 1e4)) : D())
                        }
                    }, E = b.watch(a => {
                        var i;
                        let l, o, {
                                get: u
                            } = a,
                            v = u(m.C, c),
                            B = u(m.N, c),
                            E = null != v && null != B ? (0, e.b)({
                                current_node: v,
                                mapping: B
                            }) : null;
                        if (null != E) {
                            let b = E.find(a => "user" === a.author.role)?.id ?? null;
                            b !== x && (y.clear(), x = b), (0, p.a)(a, c, E, y)
                        }
                        if (u(g.a) !== z) {
                            w = !0, A.abort(), C();
                            return
                        }
                        let F = u(r.a),
                            G = F.some(a => a.accountId === z && a.conversationId === c),
                            H = E?.some(a => null == (0, n.b)(a) && (0, f.b)(a, {
                                isActiveTurn: !0,
                                isStreaming: !1
                            }).length > 0),
                            I = G || H ? u(k.b, c) : null,
                            J = I?.at(-1)?.turn.items.flatMap(a => "chatgpt-reasoning-group" === a.type ? a.items : [a]).flatMap(a => "generated-image" === a.type && "in_progress" === a.status ? [a] : []);
                        if (G && null != E && null != I) {
                            let a = I.at(-1),
                                d = new Set(J?.flatMap(a => {
                                    let b = (0, q.a)(E, a.chatGptMessageId);
                                    return b?.isTimedOut && null != b.message.id ? [b.message.id] : []
                                })),
                                e = F.filter(b => {
                                    if (b.accountId !== z || b.conversationId !== c) return !0;
                                    if (I.some(c => c.id === b.generationKey && c !== a)) return !1;
                                    let e = (0, q.a)(E, b.messageId)?.message.id;
                                    return !E.some(a => a.id === b.messageId) || null != e && d.has(e)
                                });
                            e.length !== F.length && b.set(r.a, e)
                        }
                        let K = H ? I : null;
                        s = [...new Set(J?.flatMap(a => null != a.chatGptMessageId && null != E && (0, q.a)(E, a.chatGptMessageId)?.isTimedOut ? [a.chatGptMessageId] : []))];
                        let L = null == K ? null : (i = u(m.p, c), l = K.at(-1), o = l?.turn.items.flatMap(a => "chatgpt-reasoning-group" === a.type ? a.items : [a]).filter(a => "generated-image" === a.type), null != l && null != o && 0 !== o.length && (i === j.a.STREAMING || o.some(a => "in_progress" === a.status)) ? l.id : null);
                        if (null == L) {
                            C(), d = null, h = null;
                            return
                        }
                        let M = u(r.b, c);
                        if (null != J && J.length > 0 && J.every(a => M?.some(b => b.generationKey === L && b.messageId === a.chatGptMessageId))) {
                            C(), d = null;
                            return
                        }
                        L !== d && L !== h && (C(), d = L, h = null, t = Date.now() + 9e5, D())
                    });
                return () => {
                    w = !0, A.abort(), C(), E(), B()
                }
            }
        });
        c.d(b, {}, {
            a: s
        })
    }),
    WWSI: (function(a, b, c) {
        var d = c("U3Gy");

        function e(a) {
            if (null != a.paragen || a.isTemporaryChat) return null;
            for (let b of a.turn.items.toReversed()) {
                if (!("assistant-message" === b.type && b.completed && "complete" === a.turn.status || "generated-image" === b.type && "completed" === b.status)) continue;
                let c = "assistant-message" === b.type ? b.referenceImageSuggestionMessageId ?? b.messageId : b.chatGptMessageId;
                if (null != c && null != b.referenceImageSuggestions) return {
                    boundMessageId: c,
                    event: b.referenceImageSuggestions
                }
            }
            return null
        }
        c.d(b, {}, {
            a: function(a, b, c) {
                let f = a.map(e),
                    g = (0, d.a)(b, f.filter(a => null != a));
                return null == g ? a : a.map((a, b) => f[b]?.boundMessageId === g.boundMessageId ? {
                    ...a,
                    referenceImageSuggestionActionInput: {
                        ...g,
                        stateConversationId: c
                    }
                } : a)
            }
        })
    }),
    WYN9: (function(a, b, c) {
        c.r(b), c.d(b, {
            chatGptCompletionResumeQueryById$: () => X,
            resumeChatGptCompletionFromTopic: () => W
        });
        var d = c("mBJV"),
            e = c("Q840"),
            f = c("KvQL"),
            g = c("AuIy"),
            h = c("DD2M"),
            i = c("fVOX"),
            j = c("Cslg"),
            k = c("Kwur"),
            l = c("w5lF"),
            m = c("svjy"),
            n = c("Gvzr"),
            o = c("yGJW"),
            p = c("OWtl"),
            q = c("WFY2"),
            r = c("rvFo"),
            s = c("jVR2"),
            t = c("bgok"),
            u = c("LZWd"),
            v = c("eShZ"),
            w = c("AOHi"),
            x = c("MeER"),
            y = c("KGPo"),
            z = c("bGxe"),
            A = c("bzoy"),
            B = c("r3oB"),
            C = c("Ow2S"),
            D = c("CTBG"),
            E = c("CKur"),
            F = c("ms53");
        c("TFzY");
        var G = c("dQRk"),
            H = c("RAmW"),
            I = c("LYS1"),
            J = c("hx97"),
            K = c("Pijn"),
            L = c("sQ4r"),
            M = c("ZJtp"),
            N = c("hwXH"),
            O = c("qqsa"),
            P = c("udGC"),
            Q = c("p8gF"),
            R = c("PHCh"),
            S = c("ckvv"),
            T = c("Eq2b"),
            U = c("r7wL");

        function V(a, b) {
            let c = a.get(G.N, b),
                d = a.get(G.C, b);
            if (null == c || null == d) return !1;
            let e = (0, g.b)({
                mapping: c,
                current_node: d
            })[0];
            return e?.author.role === "user" && null != e.id
        }
        async function W(a, b, c) {
            let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AbortController().signal;
            if (!V(a, b) && !await async function(a, b, c) {
                    let d = (0, f.Ze)(),
                        e = () => d.resolve(!1),
                        g = a.get(j.n),
                        h = a.watch(e => {
                            let f = e.get(j.n),
                                h = f.userId !== g.userId || f.accountId !== g.accountId || f.authenticatedAccountId !== g.authenticatedAccountId || f.authMethod !== g.authMethod,
                                i = null != e.get(G.fb, b) || e.get(C.j, b) || e.get(G.eb, b) || e.get(G.s, b);
                            h || c.aborted ? d.resolve(!1) : i ? ((0, R.a)(a, b, null), d.resolve(!1)) : V(e, b) && d.resolve(!0)
                        });
                    c.addEventListener("abort", e, {
                        once: !0
                    });
                    try {
                        return await d.promise
                    } finally {
                        h(), c.removeEventListener("abort", e)
                    }
                }(a, b, AbortSignal.any([d, AbortSignal.timeout(3e4)])) || d.aborted || a.get(C.j, b)) return;
            let e = a.get(G.N, b),
                g = a.get(G.C, b);
            if (null == e || null == g) return;
            let h = a.query.getData(E.chatGptConversationQueryById$, b);
            await Y(a, {
                ...h,
                conversation_id: b,
                current_node: g,
                mapping: e,
                conversation_origin: a.get(G.y, b)
            }, d, c)
        }
        let X = (0, e.q)(p.a, (a, b) => {
            let {
                get: c,
                scope: d
            } = b, {
                data: e
            } = c(E.chatGptConversationQueryById$, a, {
                enabled: !1
            });
            return {
                enabled: null != e,
                queryFn: async b => {
                    let {
                        signal: c
                    } = b;
                    if (null != e) {
                        let b = await Y(d, e, c);
                        b !== e && d.query.setData(E.chatGptConversationQueryById$, a, b)
                    }
                    return null
                },
                queryKey: ["chatgpt-completion-resume", a, e?.current_node],
                retry: !1,
                staleTime: r.b.ONE_MINUTE
            }
        });
        async function Y(a, b, c, e) {
            let p, r = (0, U.b)(a),
                V = a.get(j.f),
                W = a.get(j.k),
                X = b.conversation_id;
            if (Z(a, X) || null == e && (0, u.e)(a, X)) return b;
            let Y = (0, S.a)(a, !0 === b.is_temporary_chat),
                $ = (0, g.b)(b),
                _ = $[0];
            if (_?.author.role !== "user" || null == _.id || !0 === b.is_read_only || c.aborted) return b;
            let aa = _.id,
                ab = !(0, J.q)(b.conversation_origin),
                ac = (0, R.c)(a, X, _.id, !0 === b.is_temporary_chat),
                ad = e ?? ac?.voiceContinuation,
                ae = new Set(Object.keys(b.mapping));
            for (let a of $) null == a.id || a === _ || a.end_turn || ae.delete(a.id);
            if (null == ad && b.async_status !== A.a.STREAMING && $.at(-1)?.author.role !== "user" && (b.async_status === A.a.UNREAD || $.at(-1)?.end_turn === !0)) return b;
            let af = ac?.turnTraceId ?? (0, h.a)(),
                ag = (0, R.b)(a, _.id, !0 === b.is_temporary_chat, af),
                ah = a.get(B.a);
            if (null == ad) {
                let d = new AbortController,
                    e = AbortSignal.any([c, d.signal, AbortSignal.timeout(3e4)]),
                    f = a.watch(a => {
                        let {
                            get: c
                        } = a, e = c(G.N, X), f = null == e ? null : (0, g.b)({
                            mapping: e,
                            current_node: c(G.C, X)
                        });
                        (c(j.f) !== V || c(j.k) !== W || c(C.j, X) || Z(a, X) || "streaming" === c(G.cb, X) || (0, u.e)(a, X) || f?.[0]?.id !== _.id || !f?.some(a => {
                            let {
                                id: c
                            } = a;
                            return c === b.current_node
                        })) && d.abort()
                    });
                try {
                    if (e.aborted) return b;
                    let {
                        status: c
                    } = await k.Request.safeGet("/conversation/{conversation_id}/stream_status", {
                        parameters: {
                            path: {
                                conversation_id: X
                            }
                        },
                        additionalHeaders: null == af ? void 0 : {
                            "x-oai-turn-trace-id": af
                        },
                        signal: e
                    });
                    if (e.aborted) return b;
                    if ("COMPLETE" === c) {
                        let c = await (0, N.a)(a, X, {
                            additionalHeaders: null == af ? void 0 : {
                                "x-oai-turn-trace-id": af
                            },
                            signal: e
                        });
                        if (!e.aborted) {
                            (0, G.mc)(a, c, {
                                mergeActiveBranch: !0
                            }), (0, M.e)(a, X);
                            let b = (0, g.b)(c);
                            e.aborted || b[0]?.id !== _.id || (0, F.b)({
                                scope: a,
                                conversationOrigin: c.conversation_origin,
                                isTemporaryChat: !0 === c.is_temporary_chat,
                                messages: b,
                                threadId: X
                            });
                            let d = c.mapping[c.current_node]?.message;
                            return e.aborted || d?.id !== _.id || "user" !== d.author.role || null == d.status || (0, g.n)(d) || Object.hasOwn(d.metadata ?? {}, "voice_mode_message") || (0, t.b)(a).getState().isVoiceModeActive || !0 === c.is_read_only || "tpp" === c.conversation_origin || "flora" === c.conversation_origin || (0, A.e)(c.async_status) || a.get(G.C, X) !== c.current_node || (0, G.Db)(a.get(G.cb, X)) || (0, G.Gb)(a, X, _.id), c
                        }
                        return b
                    }
                    if ("IS_STREAMING" !== c && "FAILURE" !== c) return b
                } catch (a) {
                    return e.aborted || q.a.debug("chatgpt_conversation_resume_status_unavailable", {
                        safe: {},
                        sensitive: {
                            conversationId: X,
                            error: a
                        }
                    }), b
                } finally {
                    f()
                }
            }
            let ai = (0, f.Ze)(),
                aj = performance.now(),
                ak = (0, h.a)(),
                al = (0, n.a)(a);
            (0, K.b)(a, X, ak);
            let am = b.default_model_slug,
                an = null == am ? void 0 : a.query.getData(E.j)?.modelConfigBySlug?.[am],
                ao = ab && (ad?.requestProductExperience != null ? "chat" === ad.requestProductExperience : (0, J.r)(b, (0, L.b)(a.get, X))),
                ap = {
                    conversationId: X,
                    id: _.id,
                    isTemporaryChat: !0 === b.is_temporary_chat,
                    model: b.default_model_slug ?? "auto",
                    requestProductExperience: ad?.requestProductExperience ?? (0, I.g)(b.conversation_origin, an?.isWorkModeModel),
                    resumeAttemptCount: 0,
                    serverConversationId: X,
                    serverMetadata: null,
                    systemHints: (0, g.l)(_.metadata?.system_hints),
                    successfulResumeCount: 0,
                    totalResumeAttemptCount: 0,
                    turnSessionId: (0, h.a)(),
                    turnTraceId: af,
                    userMessageId: _.id
                },
                aq = {},
                ar = 0,
                as = null,
                at = !1,
                au = !1,
                av = !1,
                aw = new O.a(a, X, _.id, ap.turnSessionId, async () => {
                    if (null != a.get(G.fb, X)) throw Error(a.get(m.a).formatMessage({
                        id: "chatgpt.editParagen.waitForResponse",
                        defaultMessage: "Wait for this response to finish before sending another message"
                    }))
                }, ab),
                ax = () => !at && a.get(G.fb, X) === as,
                ay = () => {
                    null != as && ax() && (au = !0, (0, G.Jb)(a, X, as))
                },
                az = new x.a({
                    scope: a,
                    useChatSteering: ao,
                    conversationId: X,
                    conversationOrigin: b.conversation_origin,
                    isTemporaryChat: !0 === b.is_temporary_chat,
                    promptId: _.id,
                    requestId: ak,
                    turnAnalytics: ap,
                    initialMessageId: b.current_node,
                    streamingBoundaryId: _.id,
                    getResponseHeaders: () => aq,
                    getStreamRequestId: () => as,
                    ownsStream: ax,
                    isTerminal: () => at,
                    editParagen: aw,
                    recordSearchConversation: Y,
                    source: {
                        type: "resume",
                        previousMessageIds: ae,
                        isContinuation: null != ad,
                        needsWorkFinal: () => aF()
                    }
                }),
                aA = b => {
                    (0, o.a)(a, d.fb, {
                        conversationId: X,
                        turnTraceId: af,
                        requestId: (0, I.h)(ap, aq),
                        result: b,
                        isResume: !0
                    })
                },
                aB = b => {
                    (0, o.a)(a, d.td, (0, I.c)({
                        isResume: ap.totalResumeAttemptCount > 0,
                        record: ap,
                        streamProtocol: "sse",
                        turnCompletionStatus: b
                    }))
                },
                aC = b => {
                    let c = b.responseStatus,
                        e = (0, H.b)(b, c);
                    (0, o.a)(a, d.vd, (0, I.e)({
                        errorCode: null != c && c >= 300 ? c : void 0,
                        errorMessage: e.errorReason,
                        errorReason: e.errorReason,
                        errorType: e.errorType,
                        offset: ar,
                        record: ap
                    }))
                },
                aD = b => {
                    az.flush(), p?.();
                    let c = ax();
                    return c && (0, M.e)(a, X), az.finish(b), at = !0, aK(), ai.resolve(void 0), aw.finish("completed" === b), (0, G.nb)(a, X, af), null != as && (0, y.a)(as), c
                },
                aE = () => {
                    if (at) return;
                    let c = aD("completed"),
                        d = az.classifyCompletion({
                            result: "success"
                        }, av);
                    "error" === d.result && aC(d), aA("success" === d.result ? "CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_SUCCESS" : "CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR"), "success" === d.result && aB("CHATGPT_TURN_COMPLETION_STATUS_SUCCESS"), c && ("success" === d.result && (0, F.b)({
                        scope: a,
                        conversationOrigin: b.conversation_origin,
                        isTemporaryChat: !0 === b.is_temporary_chat,
                        messages: (0, g.b)({
                            current_node: az.lastMessageId,
                            mapping: a.get(G.N, X) ?? b.mapping
                        }),
                        threadId: X,
                        turnId: ap.serverMetadata?.turn_exchange_id ?? void 0
                    }), az.complete(), (0, G.Ab)(a, X, ak))
                },
                aF = () => (null != ad || "tpp" === b.conversation_origin || "flora" === b.conversation_origin) && !az.hasAsyncHandoff && (null != ad || !az.hasAuthoritativeStreamCompletion) && (0, y.g)(a.get(D.c, X), _.id ?? null, ae)?.outcome !== "success",
                aG = function(b) {
                    let c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.get(i.a).log((0, U.a)({
                        redact: r,
                        diagnostics: b.diagnostics ?? (0, l.e)(b.error),
                        record: ap,
                        isAuthenticated: "chatgpt" === a.get(j.n).authMethod,
                        isTerminalPollingError: c
                    }))
                },
                aH = function(c) {
                    let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        e = arguments.length > 2 ? arguments[2] : void 0;
                    if (at) return;
                    let f = aD("error"),
                        g = az.classifyError(c, e);
                    if (aC(g), aA("CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR"), aG(c, d), !f) return;
                    let h = (0, Q.a)(c);
                    null != h && (0, P.s)(a, X, h), (0, G.zb)({
                        scope: a,
                        conversationId: X,
                        error: (0, w.d)(c.error, "Unknown error"),
                        canRetry: c.canRetry,
                        isTerminalPollingError: d,
                        recoveryOutcome: e,
                        paragenPromptMessageId: az.paragenPromptMessageId,
                        errorMetadata: az.errorMetadata(g, c),
                        ...null == al ? {} : {
                            failureContext: {
                                ...al,
                                stage: "resume",
                                requestedModel: b.default_model_slug
                            }
                        }
                    }), (0, G.Ab)(a, X, ak)
                },
                aI = function(c) {
                    let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!at && !av) {
                        if (az.flush(), !ax()) return void aH(c);
                        aG(c), av = !0, az.finish("recovery"), (0, y.h)({
                            scope: a,
                            source: d ? "initial_fetch" : "stream_interruption",
                            useChatSteering: ao,
                            productExperience: ap.serverMetadata?.product_experience,
                            conversationOrigin: b.conversation_origin,
                            isCurrent: ax,
                            conversationId: X,
                            error: c,
                            expectedMessageId: _.id ?? null,
                            previousMessageIds: ae,
                            requireWorkFinal: aF(),
                            messages: (0, g.b)({
                                current_node: a.get(G.C, X),
                                mapping: a.get(G.N, X) ?? b.mapping
                            }),
                            model: b.default_model_slug ?? "auto",
                            turnTraceId: af,
                            onRecoveredMessage: (a, b) => {
                                "success" === b && (az.lastMessageId = a.id ?? az.lastMessageId), (0, I.j)(ap, a)
                            },
                            onComplete: a => {
                                "success" === a ? aE() : aH(c, !0, a)
                            },
                            onError: a => aH(a, !0)
                        })
                    }
                },
                aJ = () => {
                    aK(!0), null != e && c.aborted || az.flush(), az.finish("stopped"), at = !0, ai.resolve(void 0), aw.finish(!1), (0, G.nb)(a, X, af), p?.()
                };
            (0, G.fc)(a, X, af);
            let aK = (0, T.b)(a, X, ap.turnSessionId, {
                promptSentAtMs: aj,
                submitSurface: T.a.ROOT
            });
            (0, G.ic)({
                scope: a,
                conversationId: X,
                streamRequestId: null
            }), aw.start(), (0, G.g)(a, {
                conversationId: X,
                isTemporaryChat: !0 === b.is_temporary_chat,
                promptMessageId: _.id,
                requestId: ak,
                requestModel: b.default_model_slug ?? "auto",
                systemHints: (0, C.T)(a.get, X)
            });
            try {
                (0, R.a)(a, X, _.id);
                let c = ad?.resumeToken ?? (0, R.c)(a, X, _.id, !0 === b.is_temporary_chat)?.token;
                as = ah.resumeCompletionStream({
                    projectId: b.gizmo_id,
                    topicId: ad?.topicId,
                    conduitToken: c,
                    turnTraceId: af,
                    onResumeToken: a => {
                        ax() && ag?.(a)
                    },
                    request: {
                        conversation_id: X,
                        offset: 0
                    },
                    onComplete: a => {
                        if (az.flush(), !av) {
                            if (!at && ax() && (null != ad || "done" !== a.reason && "aborted" !== a.reason) && aF()) return void aI({
                                type: "fetch-stream-error",
                                requestId: a.requestId,
                                error: l.b,
                                errorCode: null != ad ? "incomplete_work_continuation" : "incomplete_work_stream",
                                canRetry: !0
                            });
                            aE()
                        }
                    },
                    onTransportClose: () => {
                        az.flush(), aw.transportClosed()
                    },
                    onError: aH,
                    onResponse: a => {
                        ax() && (aq = a.headers, a.isEventStream && ay())
                    },
                    onStreamData: a => {
                        let {
                            eventCount: b
                        } = a;
                        ar += b
                    },
                    onResume: a => {
                        !at && ("attempted" === a.type ? (ap.resumeAttemptCount = a.attemptCount, ap.totalResumeAttemptCount += 1) : "succeeded" === a.type ? (ap.resumeAttemptCount = 0, ap.successfulResumeCount += 1) : "response" === a.type && (aq = a.response.headers, a.response.isEventStream && ay()))
                    },
                    onRecoverableError: a => {
                        let b = null == ad && null == c && !au && 404 === a.responseStatus && ("tokenless_resume_unavailable" === a.errorCode || "conduit_miss" === a.errorCode);
                        aI(a, b)
                    },
                    onDecodedEvent: a => {
                        ay(), az.onEvent(a)
                    }
                }), at || (p = (0, z.d)(as, {
                    conduitToken: null,
                    getStoppedResponse: a => ab && null == ad && !(0, g.n)(_) ? {
                        promptMessageId: aa,
                        leafId: a
                    } : void 0,
                    completeFromHistory: aE,
                    logCancellation: () => {
                        aA("CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_CANCELED"), aB("CHATGPT_TURN_COMPLETION_STATUS_CANCELED")
                    },
                    markTerminal: aJ,
                    refetchAfterStop: !1
                }), null != ad && (0, s.d)(a, X, as), (0, G.cc)({
                    scope: a,
                    conversationId: X,
                    streamRequestId: as
                }))
            } catch (b) {
                let a = b instanceof Error ? b.message : String(b);
                aH({
                    error: a,
                    canRetry: (0, f.Bj)(a),
                    errorCode: b instanceof v.FetchError ? b.errorCode : void 0,
                    responseStatus: b instanceof v.FetchError ? b.responseStatus ?? void 0 : void 0,
                    diagnostics: (0, l.e)(b instanceof v.FetchError ? b.diagnosticError ?? b : b),
                    requestId: as ?? "",
                    type: "fetch-stream-error"
                })
            }
            if (null != ad) {
                let b = () => {
                    at || null == as || (ax() ? (0, z.a)(a, X) : (aJ(), (0, y.a)(as), ah.cancelStream(as)))
                };
                null != e && (c.addEventListener("abort", b, {
                    once: !0
                }), c.aborted && b());
                try {
                    await ai.promise
                } finally {
                    c.removeEventListener("abort", b)
                }
            }
            return b
        }

        function Z(a, b) {
            return null != a.get(G.fb, b) || a.get(G.eb, b) || a.get(G.s, b)
        }
    })
};