export const __rspack_esm_ids = [630241];
export const __webpack_modules__ = {
    sM3V: (function(e, t, a) {
        var n = a("BolX"),
            o = a("a4MG"),
            i = a("OWtl"),
            r = a("tl5a");
        let l = (0, n.d)(i.a, (e, t) => {
                let {
                    hostId: a,
                    conversationId: n
                } = e, {
                    get: o
                } = t;
                if (n.startsWith("chatgpt:")) return null;
                let i = o(r.nc, {
                    hostId: a,
                    threadId: n
                });
                return null != i && "notLoaded" !== i.type ? n : null
            }),
            s = (0, n.d)(i.a, (e, t) => {
                let {
                    get: a
                } = t, {
                    data: n
                } = null == a(l, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }) ? a(o.q, e.hostId) : a(o.r, e);
                return n?.data.find(t => t.name === e.serverName) ?? null
            });
        a.d(t, {}, {
            a: s,
            b: l
        })
    }),
    VvpR: (function(e, t, a) {
        var n = a("SRbQ"),
            o = a("Y5Sy"),
            i = a("Dgwo"),
            r = a("dF4Z"),
            l = a("NTGw"),
            s = a("syw5");
        a.d(t, {}, {
            a: async function(e, t, a, l) {
                let d = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, i.b)(e, t),
                        u = (0, n.a)(d, await c.getFollowUpContext(a, !0), !1);
                    if (e.get(o.a)) throw new r.a;
                    await c.editLastUserTurn(a, {
                        ...l,
                        clientUserMessageId: crypto.randomUUID(),
                        writingBlockContextPrepared: null != u,
                        additionalContext: (0, s.a)(a, u?.writingBlocks, l.additionalContext)
                    })
                } catch (e) {
                    d.error = e, d.hasError = !0
                } finally {
                    (0, n.e)(d)
                }
            },
            b: async function(e, t, a, o, r) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, i.b)(e, t),
                        c = (0, n.a)(l, await d.getFollowUpContext(a, !0), !1);
                    await d.retrySafetyBufferedTurn(a, o, r, {
                        additionalContext: (0, s.a)(a, c?.writingBlocks),
                        writingBlockContextPrepared: null != c
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, n.e)(l)
                }
            },
            c: async function(e, t, a, o) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, i.b)(e, t),
                        d = (0, n.a)(r, await l.getFollowUpContext(a, !0), !1);
                    await l.startEmptyTurn(a, {
                        ...o,
                        writingBlockContextPrepared: null != d,
                        additionalContext: (0, s.a)(a, d?.writingBlocks, o.additionalContext)
                    })
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, n.e)(r)
                }
            },
            d: async function(e, t, a, o) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, i.b)(e, t),
                        c = (0, n.a)(r, await d.getFollowUpContext(a, !0), !1);
                    return await d.startTurn(a, {
                        ...o,
                        context: {
                            ...o.context,
                            onRequestDispatched: o.context?.onRequestDispatched ?? (e => {
                                null != o.request.clientUserMessageId && l.a.markRequestDispatched(o.request.clientUserMessageId, e)
                            }),
                            trace: o.context?.trace ?? (null == o.request.clientUserMessageId ? void 0 : l.a.getTrace(o.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != c
                        },
                        request: {
                            ...o.request,
                            additionalContext: (0, s.a)(a, c?.writingBlocks, o.request.additionalContext)
                        }
                    })
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, n.e)(r)
                }
            }
        })
    }),
    Ooax: (function(e, t, a) {
        var n = a("ASxG");
        let o = n.string().regex(/^link_[0-9a-f]{32}$/),
            i = n.string().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            r = n.object({
                connector_id: i,
                target_link_id: o
            }),
            l = n.object({
                connector_id: i,
                connector_name: n.string().optional(),
                auth_type: n.enum(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: n.string().nullish(),
                auth_reason: n.enum(["oauth_upgrade_required", "reauthentication_required"])
            }),
            s = n.object({
                isError: n.literal(!1).optional(),
                structuredContent: n.object({
                    kind: n.literal("connector_auth_request"),
                    version: n.literal(3),
                    status: n.literal("requested"),
                    link_id: o
                }),
                _meta: n.object({
                    _codex_apps: n.object({
                        connector_auth_request: l
                    })
                })
            });
        a.d(t, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(e) {
                return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
            },
            c: function(e, t) {
                let a = r.safeParse(e).data,
                    n = s.safeParse(t).data;
                if (null == a || null == n) return null;
                let o = n._meta._codex_apps.connector_auth_request,
                    {
                        link_id: i
                    } = n.structuredContent;
                return a.target_link_id !== i ? null : {
                    ...o,
                    link_id: i
                }
            }
        })
    }),
    PrVQ: (function(e, t, a) {
        var n = a("kSHG"),
            o = a("BolX"),
            i = a("P61R"),
            r = a("sS8e"),
            l = a("xSzB"),
            s = a("OWtl"),
            d = a("tSEg"),
            c = a("WFY2"),
            u = a("oo2L"),
            g = a("Ooax"),
            f = a("Sbyb");
        let p = (0, o.v)(s.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: a,
                    hostId: n,
                    sourceId: o,
                    resourceUri: r,
                    access: s,
                    toolInput: m,
                    toolResult: h,
                    assertActive: b,
                    onReconnected: x
                } = e;
                if (r !== g.a || null == h || null == s || !("connectorId" in s.serverIdentity) || s.serverIdentity.connectorId !== i.a) return;
                let y = (0, g.c)(m, (0, l.i)({
                    isCodexAppsServer: !0,
                    toolResult: h
                }));
                if (null == y) return;
                let w = null == y.auth_type ? null : (0, u.o)({
                    id: y.link_id,
                    connector_id: y.connector_id,
                    auth_type: y.auth_type,
                    auth_strategy_id: y.auth_strategy_id
                });
                if ("API_KEY" === y.auth_type && null == w) return;
                let _ = e => {
                    if (e.throwIfAborted(), b?.(), t.get(d.j) || "current" !== s.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    _(e);
                    let i = await (0, f.requestMcpConnectSheet)(t, {
                            connectorId: y.connector_id,
                            hostId: n,
                            oauthPresentation: "popup",
                            productSku: a,
                            startOAuthDirectly: "reauthentication_required" === y.auth_reason && "OAUTH" === w,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: y.link_id,
                                authReason: y.auth_reason
                            },
                            beforeConnect: async () => (_(e), !0),
                            signal: e
                        }),
                        r = i.didConnect && i.linkId === y.link_id;
                    if (r && null != x) {
                        let a = JSON.stringify([n, s.accountId, s.uiUserId, o, y.link_id]);
                        t.get(p, a) || (_(e), t.set(p, a, !0), x(y.connector_name?.trim() || y.connector_id).catch(e => {
                            c.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: r
                    }
                }
            },
            b: async function() {
                throw (0, r.c)("This action is unavailable for the sign-in widget", n.r.MethodNotFound)
            }
        })
    }),
    PYah: (function(e, t, a) {
        var n = a("Dgwo");
        a.d(t, {}, {
            a: async function(e, t, a, o) {
                let {
                    apps: i
                } = await (0, n.b)(e, t).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: a
                }, null == o ? void 0 : {
                    threadAccess: o,
                    coalesce: !1
                });
                return new Set(i.filter(e => {
                    let {
                        callable: t,
                        enabled: a
                    } = e;
                    return t && a
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }
        })
    }),
    xof2: (function(e, t, a) {
        var n = a("EA6X"),
            o = a("D015"),
            i = a("yGJW"),
            r = a("OMIV"),
            l = a("CTBG"),
            s = a("Kwur"),
            d = a("dQRk"),
            c = a("hx97");

        function u(e, t, a) {
            if (null == t || null == a) return;
            let n = 0,
                i = !1;
            for (let r of e.get(l.c, t) ?? [])
                if ((0, c.n)(r) && (i = !1), "assistant" !== r.author.role || i || (n += 1, i = !0), r.id === a) return n > 0 ? (0, o.a)(n) : void 0
        }

        function g(e, t) {
            let a = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == a ? void 0 : {
                    entity_id: a.entityId,
                    entity_category: a.entityCategory,
                    widget_type: a.widgetType,
                    widget_name: a.widgetName,
                    content_reference_start_index: a.contentReferenceStartIndex,
                    message_id: a.messageId
                }
            }
        }

        function f(e, t) {
            return Math.random() < (e.get(r.g)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function p(e, t, a) {
            null != t.actionType && f(e, "widget_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        widget_action: {
                            ...g(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: a
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function m(e, t) {
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && f(e, "entity_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        entity_action: {
                            ...g(t, t.actionType),
                            entity_id: t.entityId,
                            entity_category: t.entityCategory,
                            entity_affordance: t.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function h(e, t) {
            null != t.actionType && f(e, "link_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        link_action: {
                            ...g(t, t.actionType),
                            link_type: t.linkType,
                            link_affordance: t.linkAffordance,
                            url: t.url,
                            link_index: t.linkIndex,
                            citation_numbers: t.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        a.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let a = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(d.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    m(e, a), (0, i.a)(e, n.c, a)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && f(e, "image_action") && s.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "image_action",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: t.conversationId,
                                message_id: t.messageId
                            },
                            image_action: {
                                ...g(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, i.a)(e, n.e, t)
            },
            d: function(e, t) {
                h(e, t), (0, i.a)(e, n.g, t)
            },
            e: function(e, t) {
                m(e, t), (0, i.a)(e, n.c, t)
            },
            f: function(e, t) {
                p(e, t), (0, i.a)(e, n.j, t)
            },
            g: h,
            h: p
        })
    }),
    ONnF: (function(e, t, a) {
        var n = a("BolX"),
            o = a("OWtl"),
            i = a("zHp1"),
            r = a("Kwur");
        let l = (0, n.q)(o.a, e => {
            let {
                accountId: t,
                conversationId: a,
                fileId: n,
                userId: o
            } = e;
            return {
                queryKey: ["library-api", t, o, "generated-image-info", n, a],
                staleTime: 3e4,
                queryFn: e => {
                    let {
                        signal: o
                    } = e;
                    return r.Request.safeGet("/files/{file_id}/simple", {
                        additionalHeaders: {
                            "ChatGPT-Account-ID": t
                        },
                        parameters: {
                            path: {
                                file_id: n
                            },
                            query: {
                                conversation_id: a
                            }
                        },
                        signal: o
                    })
                },
                refetchInterval: e => "success" === e.state.status && e.state.data?.library_file_id == null && e.state.dataUpdateCount < 6 && Math.min(2e3 * 2 ** (e.state.dataUpdateCount - 1), 8e3)
            }
        });

        function s(e) {
            return "completed" !== e.status || e.isPreview || null == e.src || !(0, i.h)(e.src) ? null : e.src.slice(e.src.indexOf("://") + 3)
        }
        a.d(t, {}, {
            a: l,
            b: s,
            c: function(e, t, a) {
                if (null == e) return;
                let n = s(e);
                if (null != n) return {
                    conversationId: t,
                    identity: {
                        type: "file",
                        fileId: n
                    },
                    mimeType: e.chatGptImageMetadata?.mimeType,
                    name: a
                }
            }
        })
    }),
    Tw2n: (function(e, t, a) {
        var n = a("mBJV"),
            o = a("BolX"),
            i = a("Vi6J"),
            r = a("ASxG"),
            l = a("maWI"),
            s = a("Cslg"),
            d = a("yGJW"),
            c = a("OWtl"),
            u = a("dQRk"),
            g = a("srYL");
        let f = (0, o.v)(c.a, e => ({})),
            p = r.object({
                async_completion_id: r.string().nullish()
            }),
            m = r.object({
                content_type: r.literal("image_asset_pointer"),
                asset_pointer: r.string(),
                height: r.number(),
                metadata: r.object({
                    generation: r.object({
                        height: r.number()
                    }),
                    is_no_auth_placeholder: r.boolean().nullish()
                })
            });

        function h(e, t, a) {
            let o, i, {
                    element: r,
                    isCurrentImage: c,
                    assetPointer: u
                } = t,
                g = r.ownerDocument,
                p = !1,
                m = () => {
                    let t;
                    if (p || !r.isConnected || !r.complete || 0 === r.naturalWidth || !c() || null == i) return;
                    let a = e.get(s.m),
                        {
                            userId: o
                        } = a;
                    if (a.authLoading || "chatgpt" !== a.authMethod || !o || a.authenticatedAccountId !== i.accountId) return;
                    let {
                        accountId: m,
                        conversationId: b,
                        messageId: x,
                        asyncCompletionId: y,
                        isDelayed: w
                    } = i, _ = null == u ? void 0 : (0, l.b)(g);
                    if (null != _ && null != u) {
                        if ("allowed" !== e.get(d.c).getAnalyticsAdmission()) return;
                        t = function(e, t, a, o, i, r) {
                            let {
                                conversationId: s,
                                messageId: c,
                                accountId: u,
                                asyncCompletionId: g
                            } = o, f = JSON.stringify([s, r, u, c, i]), p = t.firstLoads.get(f);
                            if (null != p) return p;
                            let m = t.loads.get(a);
                            if (null == m || m.src !== a.src) return;
                            let h = new Set;
                            t.firstLoads.set(f, {
                                status: "pending",
                                onSettled: h
                            });
                            let b = o => {
                                let i = e.get(d.c),
                                    p = crypto.randomUUID();
                                (0, d.a)(e, n.Pb, {
                                    conversationId: s,
                                    messageId: c,
                                    asyncCompletionId: g,
                                    resultLoadId: p,
                                    ...m.timing
                                }, n => {
                                    let r = e.get(d.c);
                                    if ("sent" !== n.status && o && r !== i && "allowed" === r.getAnalyticsAdmission() && (0, l.b)(a.ownerDocument) === t) return void b(!1);
                                    let s = "sent" === n.status ? p : void 0;
                                    for (let e of (null == s ? t.firstLoads.delete(f) : t.firstLoads.set(f, {
                                            status: "sent",
                                            id: s
                                        }), h)) e(s);
                                    h.clear()
                                }, void 0, {
                                    expectedUserId: r,
                                    expectedAccountId: u
                                })
                            };
                            return b(!0), t.firstLoads.get(f)
                        }(e, _, r, i, u, o)
                    }
                    if ("visible" !== g.visibilityState) return;
                    let v = JSON.stringify([o, m, null == y ? "message" : "async", y ?? x]),
                        S = e.get(f, b)[v];
                    if ("viewed" === S) return void h();
                    if ("pending" === S) return;
                    e.set(f, b, e => ({
                        ...e,
                        [v]: "pending"
                    }));
                    let j = new Date(Date.now()).toISOString(),
                        k = t => {
                            e.set(f, b, e => {
                                if (t) return {
                                    ...e,
                                    [v]: "viewed"
                                };
                                let a = {
                                    ...e
                                };
                                return delete a[v], a
                            }), t && h()
                        },
                        I = t => {
                            null != _ && (0, l.b)(g) !== _ ? k(!1) : (0, d.a)(e, n.Qb, {
                                conversationId: b,
                                messageId: x,
                                asyncCompletionId: y,
                                isDelayed: w,
                                ...t && {
                                    resultLoadId: t
                                }
                            }, e => k("sent" === e.status), void 0, null == _ ? void 0 : {
                                expectedUserId: o,
                                expectedAccountId: m,
                                eventCreatedAt: j
                            })
                        };
                    t?.status === "pending" ? t.onSettled.add(I) : I(t?.id)
                };

            function h() {
                p || (p = !0, o?.(), g.removeEventListener("visibilitychange", m), r.removeEventListener("load", m))
            }
            return g.addEventListener("visibilitychange", m), r.addEventListener("load", m), o = e.watch(e => {
                let {
                    get: t
                } = e;
                t(s.m), t(d.c), i = a(t), m()
            }), p && o(), h
        }
        a.d(t, {}, {
            a: function(e, t) {
                let {
                    conversationId: a,
                    messageId: n,
                    assetPointer: o,
                    element: r,
                    nativeLoad: d,
                    isCurrentImage: c
                } = t;
                return d && (0, l.a)(r), h(e, {
                    element: r,
                    isCurrentImage: c,
                    assetPointer: o
                }, e => {
                    let t = e(s.m).authenticatedAccountId,
                        r = e(u.j, a),
                        l = e(u.N, a)?.[n]?.message,
                        d = e(u._, a),
                        c = function(e, t) {
                            if (e?.author.role !== "tool" || !(0, i.b)(e.author.name) || "multimodal_text" !== e.content.content_type || e.metadata?.is_visually_hidden_from_conversation) return;
                            let a = e.metadata?.image_gen_delayed;
                            if (null != a && !(0, g.c)(e)) return;
                            let n = p.safeParse(e.metadata).data,
                                o = n?.async_completion_id ?? void 0;
                            if (e.content.parts.some(e => {
                                    let a = m.safeParse(e);
                                    return a.success && a.data.asset_pointer === t && !a.data.metadata.is_no_auth_placeholder && a.data.metadata.generation.height >= a.data.height
                                })) return {
                                asyncCompletionId: o,
                                isDelayed: null != a
                            }
                        }(l, o);
                    if (t && r && null == d && c) return {
                        accountId: t,
                        conversationId: r,
                        messageId: n,
                        ...c
                    }
                })
            },
            b: function(e, t) {
                let {
                    result: a,
                    element: n,
                    isCurrentImage: o
                } = t;
                return h(e, {
                    element: n,
                    isCurrentImage: o
                }, () => a)
            }
        })
    }),
    nUGc: (function(e, t, a) {
        let n = (0, a("zd8w").createContext)(null);
        a.d(t, {}, {
            a: n
        })
    }),
    r21w: (function(e, t, a) {
        a.d(t, {
            a: () => r
        });
        var n = a("ABep"),
            o = a("QosV"),
            i = a("on57");

        function r(e) {
            let t, a, r, l, s = (0, o.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...a
            } = e, s[0] = e, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (r = (0, i.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = r) : r = s[4], s[5] !== a || s[6] !== r ? (l = (0, n.jsx)("div", {
                className: r,
                ...a
            }), s[5] = a, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    umQU: (function(e, t, a) {
        var n = a("BolX"),
            o = a("ccwJ"),
            i = a("Kwur"),
            r = a("dQRk"),
            l = a("bmqg"),
            s = a("SGsN"),
            d = a("urzV"),
            c = a("svjy"),
            u = a("tSEg"),
            g = a("zHp1"),
            f = a("Yscs"),
            p = a("GDNt");
        let m = (0, n.v)(u.a, e => null),
            h = (0, n.j)(u.a, (e, t) => {
                let a, {
                        image: n,
                        imageAssetResolver: l
                    } = e,
                    {
                        signal: u,
                        scope: h
                    } = t,
                    b = n?.gifPlayback?.originalSrc ?? n?.src,
                    w = JSON.stringify([n?.id, b]),
                    _ = 0,
                    v = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (n?.isAnimated) return h.watch(t => {
                                if (0 !== _) return;
                                let a = t.get(m, w),
                                    i = (0, o.d)(x(t, n)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== i) && (e({
                                    preview: null,
                                    busy: !0
                                }), C(i, !1))
                            })
                        }
                    }),
                    j = async e => {
                        let t = null != e && (0, g.h)(e) && null != l ? await (0, g.a)(h.queryClient, e, l) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, k = () => (null == a && (a = j(b).catch(e => {
                        throw a = void 0, e
                    })), a), I = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            a = x(h, n),
                            i = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, o.a)(i).includes(e)) throw Error("GIF speed variant unavailable");
                        let r = 1 === e ? void 0 : i?.[String(e)],
                            l = S.get().preview;
                        if (l?.speed === e && l.originalSrc === t && l.assetSrc === r) return l;
                        let s = null == r && t === b ? await k() : await j(r ?? t);
                        return {
                            assetSrc: r,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, f.a)(s),
                            sizeBytes: s.size
                        }
                    }, C = async (e, t) => {
                        let a = ++_;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let o = await I(e);
                            if (a !== _) return !1;
                            return S.set({
                                preview: o,
                                busy: !1
                            }), t && (h.set(m, w, e), v = v.then(async () => {
                                if (a !== _ || "chatgpt-thread" !== h.value.routeKind || n?.chatGptMessageId == null || null == b) return;
                                let t = h.get(r.j, h.value.conversationId);
                                null != t && await i.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: n.chatGptMessageId,
                                        asset_pointer: b,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof p.a && (404 === e.status || 405 === e.status) || h.get(s.f).danger(h.get(c.a).formatMessage({
                                    id: "gifEditor.saveSpeedFailed",
                                    defaultMessage: "Couldn’t save GIF speed. Try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "gifEditor.saveSpeedFailed"
                                    }
                                })
                            })), !0
                        } catch {
                            return t && a === _ && h.get(s.f).danger(h.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === _ && S.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: S,
                    loadOriginal: k,
                    loadExport: async e => 1 === e ? k() : j((await I(e)).src),
                    changeSpeed: e => C(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let n = (0, o.d)(x(h, e)?.gifPlayback, S.get().preview?.speed ?? h.get(m, w) ?? void 0),
                            i = {
                                ...e,
                                src: t,
                                gifPlayback: {
                                    ...e.gifPlayback,
                                    originalSrc: t,
                                    speed: n
                                }
                            };
                        if (1 === n) return i;
                        let r = await I(n, t);
                        return y(i, a && null != r.assetSrc ? {
                            ...r,
                            src: r.assetSrc
                        } : r)
                    }
                }
            }, {
                autoDispose: 6e4,
                key: e => {
                    let {
                        image: t
                    } = e;
                    return JSON.stringify([t?.id, t?.gifPlayback?.originalSrc ?? t?.src, t?.gifPlayback?.variants, t?.gifPlayback?.watermarkedVariants])
                }
            }),
            b = (0, n.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: n,
                    imageAssetResolver: i
                } = e, {
                    scope: r
                } = t, l = x(r, a, n), s = r.get(h, {
                    image: l?.isAnimated === !0 ? l : void 0,
                    imageAssetResolver: i
                }), {
                    preview: d
                } = r.get(s.state$);
                return {
                    playback: s,
                    previewSrc: null != d && (0, o.a)(l?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == l ? void 0 : y(l, d),
                    originalSrc: l?.isAnimated === !0 ? l.gifPlayback?.originalSrc ?? l.src : l?.src,
                    canControl: l?.isAnimated === !0 && (0, o.a)(l.gifPlayback?.variants).length > 1
                }
            });

        function x(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(l.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function y(e, t) {
            let a = (0, o.d)(e.gifPlayback),
                n = null != e.gifPlayback && e.gifPlayback.speed !== a ? {
                    ...e,
                    gifPlayback: {
                        ...e.gifPlayback,
                        speed: a
                    }
                } : e;
            return !0 === e.isAnimated && null != t && (0, o.a)(e.gifPlayback?.variants).includes(t.speed) && t.originalSrc === (e.gifPlayback?.originalSrc ?? e.src) ? {
                ...e,
                src: t.src,
                sizeBytes: t.sizeBytes,
                gifPlayback: {
                    ...e.gifPlayback,
                    originalSrc: t.originalSrc,
                    speed: t.speed
                }
            } : n
        }
        a.d(t, {}, {
            a: y,
            b: x,
            c: h,
            d: b
        })
    }),
    I0AH: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            i = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, r = (0, o.c)(14),
                    {
                        ariaLabel: l,
                        children: s,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == l ? void 0 : "group";
                    return r[0] !== l || r[1] !== s || r[2] !== t ? (e = (0, n.jsx)("div", {
                        role: t,
                        "aria-label": l,
                        className: "flex min-w-0 items-center",
                        children: s
                    }), r[0] = l, r[1] = s, r[2] = t, r[3] = e) : e = r[3], e
                }
                let g = null == l ? void 0 : "toolbar",
                    f = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    p = "imageTools" === u && "gap-0 shadow-md",
                    m = "playback" === u && "gap-2 shadow-sm";
                return r[4] !== d || r[5] !== f || r[6] !== p || r[7] !== m ? (t = (0, i.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", f, p, m, d), r[4] = d, r[5] = f, r[6] = p, r[7] = m, r[8] = t) : t = r[8], r[9] !== l || r[10] !== s || r[11] !== g || r[12] !== t ? (a = (0, n.jsx)("div", {
                    role: g,
                    "aria-label": l,
                    className: t,
                    children: s
                }), r[9] = l, r[10] = s, r[11] = g, r[12] = t, r[13] = a) : a = r[13], a
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            i = a("slpy"),
            r = a("zd8w"),
            l = a("Wf1j"),
            s = a("oyxz"),
            d = a("Sm6l"),
            c = a("bqtn"),
            u = a("HOLv"),
            g = a("bf6R"),
            f = a("UxN3"),
            p = a("ddzD"),
            m = a("I0AH"),
            h = a("j9wQ"),
            b = a("ZedP"),
            x = a("AVhl"),
            y = a("MJbi");

        function w(e) {
            let t, a = (0, o.c)(3),
                r = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== r ? (t = (0, n.jsx)(i.a, {
                ...e,
                forceOpen: r
            }), a[0] = e, a[1] = r, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, _, v, S, j, k = (0, o.c)(53),
                    {
                        downloadImageCount: I,
                        floatingToolbarVariant: C,
                        moreActions: A,
                        isAnimated: P,
                        isImageActionsDisabled: T,
                        isUnifiedViewerEnabled: q,
                        onDownload: M,
                        onDownloadAll: E,
                        onDownloadMenuOpen: F,
                        onShare: N,
                        onShareAll: z,
                        onShareMenuOpen: R,
                        saveAction: B,
                        shareImageCount: O,
                        showShareText: U
                    } = e,
                    L = void 0 !== P && P,
                    D = void 0 !== q && q,
                    G = void 0 !== U && U,
                    V = (0, l.a)(),
                    [W, J] = (0, r.useState)(!1),
                    H = "toolbar";
                null != C && (H = "imageTools" === C ? "imageToolbar" : "composerSm"), k[0] !== H || k[1] !== C || k[2] !== V || k[3] !== T || k[4] !== D || k[5] !== N || k[6] !== z || k[7] !== G ? (t = D ? (0, n.jsxs)(h.c, {
                    "aria-label": V.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }),
                    disabled: T,
                    uniform: !G,
                    onClick: null == z ? N : void 0,
                    children: [(0, n.jsx)(f.b, {
                        icon: {
                            16: g.L,
                            20: g.M
                        }
                    }), G ? (0, n.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }) : null]
                }) : (0, n.jsx)(d.a, {
                    color: null == C ? "primary" : "ghostActive",
                    disabled: T,
                    size: H,
                    onClick: null == z ? N : void 0,
                    children: (0, n.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    })
                }), k[0] = H, k[1] = C, k[2] = V, k[3] = T, k[4] = D, k[5] = N, k[6] = z, k[7] = G, k[8] = t) : t = k[8];
                let K = t;
                if (null != N && null != z) {
                    let e;
                    k[9] !== L || k[10] !== T || k[11] !== N || k[12] !== z || k[13] !== R || k[14] !== K || k[15] !== O ? (e = (0, n.jsx)(b.a, {
                        disabled: T,
                        imageCount: O,
                        isAnimated: L,
                        onOpen: R,
                        onShare: N,
                        onShareAll: z,
                        triggerButton: K
                    }), k[9] = L, k[10] = T, k[11] = N, k[12] = z, k[13] = R, k[14] = K, k[15] = O, k[16] = e) : e = k[16], K = e
                }
                if (null != C) {
                    let e;
                    k[17] !== C || k[18] !== K ? (e = (0, n.jsx)(m.a, {
                        variant: C,
                        children: K
                    }), k[17] = C, k[18] = K, k[19] = e) : e = k[19], K = e
                }
                k[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    J(!0), await e().finally(() => {
                        J(!1)
                    })
                }, k[20] = a) : a = k[20];
                let Q = a;
                k[21] !== H || k[22] !== I || k[23] !== C || k[24] !== V || k[25] !== L || k[26] !== W || k[27] !== T || k[28] !== D || k[29] !== M || k[30] !== E || k[31] !== F || k[32] !== B ? (i = null != E && null != M ? (0, n.jsxs)(c.a, {
                    align: "end",
                    disabled: T || W,
                    onOpenChange: e => {
                        e && F?.()
                    },
                    triggerButton: (0, n.jsx)(w, {
                        content: (0, n.jsx)(s.a, {
                            ...(0, p.a)({
                                isAnimated: L
                            }).downloadLabel
                        }),
                        children: D ? (0, n.jsx)(h.c, {
                            "aria-label": V.formatMessage((0, p.a)({
                                isAnimated: L
                            }).downloadLabel),
                            disabled: T || W,
                            loading: W,
                            uniform: !0,
                            children: (0, n.jsx)(f.b, {
                                icon: {
                                    assets: {
                                        16: x.a,
                                        20: y.a
                                    }
                                }
                            })
                        }) : (0, n.jsx)(d.a, {
                            "aria-label": V.formatMessage((0, p.a)({
                                isAnimated: L
                            }).downloadLabel),
                            color: null == C ? "ghost" : "ghostActive",
                            disabled: T || W,
                            loading: W,
                            size: H,
                            uniform: !0,
                            children: "compact" === C ? (0, n.jsx)(u.a, {
                                asset: x.a
                            }) : (0, n.jsx)(g.r, {})
                        })
                    }),
                    children: [(0, n.jsx)(c.c.Item, {
                        onSelect: () => void Q(M),
                        children: (0, n.jsx)(s.a, {
                            ...(0, p.a)({
                                isAnimated: L
                            }).downloadMenuLabel
                        })
                    }), (0, n.jsx)(c.c.Item, {
                        onSelect: () => void Q(E),
                        children: (0, n.jsx)(s.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            values: {
                                count: I
                            }
                        })
                    })]
                }) : B, k[21] = H, k[22] = I, k[23] = C, k[24] = V, k[25] = L, k[26] = W, k[27] = T, k[28] = D, k[29] = M, k[30] = E, k[31] = F, k[32] = B, k[33] = i) : i = k[33];
                let $ = i;
                if (null != C && null != E && null != M) {
                    let e;
                    k[34] !== $ || k[35] !== C ? (e = (0, n.jsx)(m.a, {
                        variant: C,
                        children: $
                    }), k[34] = $, k[35] = C, k[36] = e) : e = k[36], $ = e
                }
                let X = null == N ? null : K;
                k[37] !== $ || k[38] !== X ? (_ = (0, n.jsxs)(n.Fragment, {
                    children: [$, X]
                }), k[37] = $, k[38] = X, k[39] = _) : _ = k[39];
                let Y = _;
                k[40] !== C || k[41] !== A ? (v = null == A || null == C ? A : (0, n.jsx)(m.a, {
                    variant: C,
                    children: A
                }), k[40] = C, k[41] = A, k[42] = v) : v = k[42];
                let Z = v,
                    ee = null != N || null != $;
                if (!D || G) {
                    let e;
                    return k[43] !== Y || k[44] !== Z ? (e = (0, n.jsxs)(n.Fragment, {
                        children: [Y, Z]
                    }), k[43] = Y, k[44] = Z, k[45] = e) : e = k[45], e
                }
                return k[46] !== ee || k[47] !== V || k[48] !== Y ? (S = ee ? (0, n.jsx)(h.i, {
                    label: V.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions"
                    }),
                    children: Y
                }) : null, k[46] = ee, k[47] = V, k[48] = Y, k[49] = S) : S = k[49], k[50] !== S || k[51] !== Z ? (j = (0, n.jsxs)(n.Fragment, {
                    children: [S, Z]
                }), k[50] = S, k[51] = Z, k[52] = j) : j = k[52], j
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            i = a("oyxz"),
            r = a("bqtn"),
            l = a("HOLv"),
            s = a("ddzD"),
            d = a("xcyV"),
            c = a("qo5o");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, g, f, p, m, h = (0, o.c)(19),
                    {
                        disabled: b,
                        imageCount: x,
                        isAnimated: y,
                        onOpen: w,
                        onShare: _,
                        onShareAll: v,
                        triggerButton: S
                    } = e,
                    j = void 0 !== y && y;
                return h[0] !== w ? (t = e => {
                    e && w?.()
                }, h[0] = w, h[1] = t) : t = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(l.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), h[2] = a) : a = h[2], h[3] !== j ? (u = (0, s.a)({
                    isAnimated: j
                }), h[3] = j, h[4] = u) : u = h[4], h[5] !== u.shareSelectionLabel ? (g = (0, n.jsx)(i.a, {
                    ...u.shareSelectionLabel
                }), h[5] = u.shareSelectionLabel, h[6] = g) : g = h[6], h[7] !== _ || h[8] !== g ? (f = (0, n.jsx)(r.c.Item, {
                    leftIcon: a,
                    onSelect: _,
                    children: g
                }), h[7] = _, h[8] = g, h[9] = f) : f = h[9], h[10] !== x || h[11] !== v ? (p = null == v ? null : (0, n.jsx)(r.c.Item, {
                    leftIcon: (0, n.jsx)(l.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: v,
                    children: (0, n.jsx)(i.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        values: {
                            imageCount: x
                        }
                    })
                }), h[10] = x, h[11] = v, h[12] = p) : p = h[12], h[13] !== b || h[14] !== t || h[15] !== f || h[16] !== p || h[17] !== S ? (m = (0, n.jsxs)(r.a, {
                    align: "end",
                    disabled: b,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [f, p]
                }), h[13] = b, h[14] = t, h[15] = f, h[16] = p, h[17] = S, h[18] = m) : m = h[18], m
            }
        })
    }),
    iIHp: (function(e, t, a) {
        var n = a("QosV"),
            o = a("zd8w");
        class i {
            errors;
            pendingRequest = null;
            listeners = new Set;
            constructor(e) {
                this.errors = e
            }
            getSnapshot = () => null == this.pendingRequest ? null : this.pendingRequest.confirmation;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e), 0 === this.listeners.size && this.cancel()
            });
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, a) => {
                this.pendingRequest = {
                    confirmation: e,
                    reject: a,
                    resolve: t
                }, this.notify()
            });
            confirm = e => {
                this.takePendingRequest()?.resolve(e)
            };
            cancel = () => {
                this.takePendingRequest()?.reject(this.errors.createCanceledError())
            };
            notify() {
                for (let e of this.listeners) e()
            }
            takePendingRequest() {
                let e = this.pendingRequest;
                return this.pendingRequest = null, null != e && this.notify(), e
            }
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r = (0, n.c)(7);
                r[0] !== e ? (t = () => new i(e), r[0] = e, r[1] = t) : t = r[1];
                let [l] = (0, o.useState)(t), s = (0, o.useSyncExternalStore)(l.subscribe, l.getSnapshot, l.getSnapshot);
                return r[2] !== s || r[3] !== l.cancel || r[4] !== l.confirm || r[5] !== l.request ? (a = {
                    cancel: l.cancel,
                    confirmation: s,
                    confirm: l.confirm,
                    request: l.request
                }, r[2] = s, r[3] = l.cancel, r[4] = l.confirm, r[5] = l.request, r[6] = a) : a = r[6], a
            }
        })
    }),
    v7ut: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            i = a("zd8w"),
            r = a("Wf1j"),
            l = a("oyxz"),
            s = a("hL9c"),
            d = a("osar"),
            c = a("eFVb"),
            u = a("W2tE"),
            g = a("v5fl"),
            f = a("Sm6l"),
            p = a("JNtf"),
            m = a("mUDD"),
            h = a("zLIa"),
            b = a("sF0J"),
            x = a("E1V6");

        function y(e) {
            let t, a, s, y, j, k, I, C = (0, o.c)(31),
                {
                    canConfirm: A,
                    context: P,
                    description: T,
                    imageUrls: q,
                    onCancel: M,
                    onConfirm: E,
                    prompt: F,
                    title: N
                } = e,
                z = void 0 === A || A,
                R = (0, r.a)();
            C[0] !== F ? (t = () => {
                let e = (0, c.b)(F, {
                    defaultTextKind: "prompt",
                    enableFileMentions: !1,
                    enableSkillMentions: !1,
                    enableSlashCommands: !1,
                    enterBehavior: "newline"
                });
                return {
                    controller: e,
                    destroy: () => e.destroy()
                }
            }, C[0] = F, C[1] = t) : t = C[1];
            let [B] = (0, i.useState)(t), {
                controller: O,
                destroy: U
            } = B;
            (0, x.b)(U, O);
            let L = (0, g.b)(O, _, "document"),
                [D, G] = (0, i.useState)(P);
            C[2] !== P ? (a = S(P), C[2] = P, C[3] = a) : a = C[3];
            let V = a,
                [W, J] = (0, i.useState)(V),
                [H, K] = (0, i.useState)("prompt");
            C[4] !== W ? (s = function(e) {
                try {
                    return (0, b.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(W), C[4] = W, C[5] = s) : s = C[5];
            let Q = s;
            C[6] !== z || C[7] !== D || C[8] !== O || C[9] !== E ? (y = () => {
                let e = O.getText().trim();
                z && e.length > 0 && E((0, b.a)({
                    context: D,
                    prompt: e
                }))
            }, C[6] = z, C[7] = D, C[8] = O, C[9] = E, C[10] = y) : y = C[10];
            let $ = y;
            return C[11] !== M ? (j = e => {
                e || M()
            }, C[11] = M, C[12] = j) : j = C[12], C[13] !== z || C[14] !== $ || C[15] !== D || C[16] !== W || C[17] !== O || C[18] !== T || C[19] !== L || C[20] !== q || C[21] !== V || C[22] !== R || C[23] !== M || C[24] !== Q || C[25] !== N || C[26] !== H ? (k = "prompt" === H ? (0, n.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), $()
                },
                children: [(0, n.jsx)(v, {
                    description: T,
                    title: N
                }), (0, n.jsx)(d.a, {
                    paddingVariant: "inset",
                    children: (0, n.jsx)(d.a.Body, {
                        children: (0, n.jsx)(u.a, {
                            ariaLabel: R.formatMessage({
                                id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                defaultMessage: "Prompt"
                            }),
                            composerController: O,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: $
                        })
                    })
                }), null != q && q.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: q.map(w)
                }) : null, null != D ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        J(S(D)), K("widget-state")
                    },
                    children: (0, n.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state"
                    })
                }) : null, (0, n.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(f.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: M,
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: !z || !L,
                        type: "submit",
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send"
                        })
                    })]
                })]
            }) : (0, n.jsxs)(m.b, {
                className: "gap-4",
                children: [(0, n.jsx)(m.d, {
                    title: (0, n.jsx)(p.e, {
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state"
                        })
                    }),
                    subtitle: (0, n.jsx)(p.d, {
                        className: "text-secondary",
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget."
                        })
                    })
                }), (0, n.jsx)(h.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Q,
                    "aria-label": R.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: W,
                    onChange: e => {
                        J(e.target.value)
                    }
                }), null == Q ? (0, n.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, n.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB"
                    })
                }) : null, (0, n.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(f.a, {
                        color: "ghost",
                        disabled: W === V,
                        type: "button",
                        onClick: () => {
                            J(V)
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset"
                        })
                    }), (0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(f.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            J(S(D)), K("prompt")
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: null == Q,
                        type: "button",
                        onClick: () => {
                            null != Q && (G(Q), K("prompt"))
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply"
                        })
                    })]
                })]
            }), C[13] = z, C[14] = $, C[15] = D, C[16] = W, C[17] = O, C[18] = T, C[19] = L, C[20] = q, C[21] = V, C[22] = R, C[23] = M, C[24] = Q, C[25] = N, C[26] = H, C[27] = k) : k = C[27], C[28] !== j || C[29] !== k ? (I = (0, n.jsx)(p.a, {
                open: !0,
                onOpenChange: j,
                size: "wide",
                children: k
            }), C[28] = j, C[29] = k, C[30] = I) : I = C[30], I
        }

        function w(e, t) {
            return (0, n.jsx)(s.a, {
                src: e
            }, t)
        }

        function _(e) {
            return e.getText().trim().length > 0
        }

        function v(e) {
            let t, a, i, r, s, d = (0, o.c)(11),
                {
                    description: c,
                    title: u
                } = e;
            return d[0] !== u ? (t = u ?? (0, n.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?"
            }), d[0] = u, d[1] = t) : t = d[1], d[2] !== t ? (a = (0, n.jsx)(p.e, {
                children: t
            }), d[2] = t, d[3] = a) : a = d[3], d[4] !== c ? (i = c ?? (0, n.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt"
            }), d[4] = c, d[5] = i) : i = d[5], d[6] !== i ? (r = (0, n.jsx)(p.d, {
                className: "text-secondary",
                children: i
            }), d[6] = i, d[7] = r) : r = d[7], d[8] !== a || d[9] !== r ? (s = (0, n.jsx)(m.d, {
                title: a,
                subtitle: r
            }), d[8] = a, d[9] = r, d[10] = s) : s = d[10], s
        }

        function S(e) {
            return null == e ? "" : (0, b.d)(e)
        }
        a.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, a = (0, o.c)(2),
                    {
                        confirmation: i
                    } = e;
                return null == i ? null : (a[0] !== i ? (t = (0, n.jsx)(y, {
                    ...i
                }), a[0] = i, a[1] = t) : t = a[1], t)
            }
        })
    }),
    sF0J: (function(e, t, a) {
        var n = a("SKgO"),
            o = a("ASxG"),
            i = a("sS8e");
        let r = o.object({
            context: n.c.optional(),
            isVisible: o.boolean().optional(),
            prompt: o.string().trim().min(1),
            title: o.string().trim().min(1).max(250).optional()
        }).strip();
        a.d(t, {
            b: () => n.a,
            d: () => n.b
        }, {
            a: function(e) {
                let {
                    context: t,
                    prompt: a
                } = e;
                return null == t ? a : `${a}

Current widget context (JSON):
${(0,n.b)(t)}`
            },
            c: function(e) {
                let t = r.safeParse(e);
                if (!t.success) throw (0, i.c)("Invalid follow-up message", -32602);
                return t.data
            }
        })
    }),
    QnVT: (function(e, t, a) {
        var n = a("BolX"),
            o = a("i8Zd"),
            i = a("OWtl");
        let r = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return {
                    revision: t(o.a),
                    appearance: null
                }
            }, {
                isEqual: (e, t) => e.revision === t.revision
            }),
            l = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e, {
                    appearance: a,
                    revision: n
                } = t(r), o = a?.fonts;
                return null == o || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [o.code, o.ui].some(e => e?.includes("(")) ? n : a
            }),
            s = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(l),
                    function() {
                        let e = getComputedStyle(document.documentElement),
                            t = document.createElement("div");
                        t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                        let a = t => {
                                let a = e.getPropertyValue(t).trim();
                                return a.length > 0 ? a : void 0
                            },
                            n = a => {
                                let n = d(e, t, a, "color"),
                                    o = d(e, t, "--color-surface-tertiary", "color");
                                if (null != n && null != o) return `color-mix(in srgb, ${n} 12%, ${o})`
                            };
                        try {
                            let o, i, r, l, s, c, u, g, f, p, m, h, b, x, y, w, _, v, S, j, k, I, C, A, P, T, q, M, E, F, N, z, R, B, O, U;
                            return {
                                "--color-background-primary": (o = "--app-color-background-surface", d(e, t, o, "color") ?? (i = "--color-surface-tertiary", d(e, t, i, "color"))),
                                "--color-background-secondary": (r = "--color-surface-elevated", d(e, t, r, "color")),
                                "--color-background-tertiary": (l = "--color-surface-secondary", d(e, t, l, "color")),
                                "--color-background-inverse": (s = "--color-text", d(e, t, s, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (c = "--codex-theme-accent-background-subtle", d(e, t, c, "color") ?? (u = "--color-background-info-surface", d(e, t, u, "color"))),
                                "--color-background-danger": (g = "--color-background-danger-surface", d(e, t, g, "color")),
                                "--color-background-success": n("--color-codex-git-added"),
                                "--color-background-warning": n("--color-text-warning"),
                                "--color-background-disabled": (f = "--color-background-primary-soft-active", d(e, t, f, "color")),
                                "--color-text-primary": (p = "--color-text", d(e, t, p, "color")),
                                "--color-text-secondary": (m = "--color-text-secondary", d(e, t, m, "color")),
                                "--color-text-tertiary": (h = "--color-codex-description", d(e, t, h, "color")),
                                "--color-text-inverse": (b = "--color-text-inverse", d(e, t, b, "color") ?? (x = "--color-surface-tertiary", d(e, t, x, "color"))),
                                "--color-text-ghost": (y = "--color-codex-description", d(e, t, y, "color")),
                                "--color-text-info": (w = "--color-text-info", d(e, t, w, "color")),
                                "--color-text-danger": (_ = "--color-text-danger", d(e, t, _, "color")),
                                "--color-text-success": (v = "--color-codex-git-added", d(e, t, v, "color")),
                                "--color-text-warning": (S = "--color-text-warning", d(e, t, S, "color")),
                                "--color-text-disabled": (j = "--color-codex-description", d(e, t, j, "color")),
                                "--color-border-primary": (k = "--color-border-primary-outline", d(e, t, k, "color")),
                                "--color-border-secondary": (I = "--color-border", d(e, t, I, "color")),
                                "--color-border-tertiary": (C = "--color-border", d(e, t, C, "color")),
                                "--color-border-inverse": (A = "--color-text", d(e, t, A, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (P = "--color-ring", d(e, t, P, "color")),
                                "--color-border-danger": (T = "--color-text-danger", d(e, t, T, "color")),
                                "--color-border-success": (q = "--color-codex-git-added", d(e, t, q, "color")),
                                "--color-border-warning": (M = "--color-text-warning", d(e, t, M, "color")),
                                "--color-border-disabled": (E = "--color-border-primary-outline", d(e, t, E, "color")),
                                "--color-ring-primary": (F = "--color-ring", d(e, t, F, "color")),
                                "--color-ring-secondary": (N = "--color-ring", d(e, t, N, "color")),
                                "--color-ring-inverse": (z = "--color-ring", d(e, t, z, "color")),
                                "--color-ring-info": (R = "--color-ring", d(e, t, R, "color")),
                                "--color-ring-danger": (B = "--color-text-danger", d(e, t, B, "color")),
                                "--color-ring-success": (O = "--color-codex-git-added", d(e, t, O, "color")),
                                "--color-ring-warning": (U = "--color-text-warning", d(e, t, U, "color")),
                                "--font-sans": d(e, t, "--font-sans", "fontFamily"),
                                "--font-mono": d(e, t, "--font-mono", "fontFamily"),
                                "--font-weight-normal": d(e, t, "--font-ui-weight", "fontWeight"),
                                "--font-weight-medium": d(e, t, "--font-weight-medium", "fontWeight"),
                                "--font-weight-semibold": d(e, t, "--font-weight-semibold", "fontWeight"),
                                "--font-weight-bold": d(e, t, "--font-weight-bold", "fontWeight"),
                                "--font-text-xs-size": d(e, t, "--text-xs", "fontSize"),
                                "--font-text-sm-size": d(e, t, "--text-sm", "fontSize"),
                                "--font-text-md-size": d(e, t, "--text-base", "fontSize"),
                                "--font-text-lg-size": d(e, t, "--text-lg", "fontSize"),
                                "--font-heading-xs-size": d(e, t, "--text-heading-sm", "fontSize"),
                                "--font-heading-sm-size": d(e, t, "--text-heading-md", "fontSize"),
                                "--font-heading-md-size": d(e, t, "--text-heading-lg", "fontSize"),
                                "--font-heading-lg-size": d(e, t, "--text-xl", "fontSize"),
                                "--font-heading-xl-size": d(e, t, "--text-2xl", "fontSize"),
                                "--font-heading-2xl-size": d(e, t, "--text-3xl", "fontSize"),
                                "--font-heading-3xl-size": d(e, t, "--text-4xl", "fontSize"),
                                "--font-text-xs-line-height": a("--text-xs--line-height"),
                                "--font-text-sm-line-height": a("--text-sm--line-height"),
                                "--font-text-md-line-height": a("--text-base--line-height"),
                                "--font-text-lg-line-height": a("--text-lg--line-height"),
                                "--font-heading-xs-line-height": "1.33",
                                "--font-heading-sm-line-height": "1.33",
                                "--font-heading-md-line-height": "1.2",
                                "--font-heading-lg-line-height": "1.2",
                                "--font-heading-xl-line-height": "1",
                                "--font-heading-2xl-line-height": "1",
                                "--font-heading-3xl-line-height": "1",
                                "--border-radius-xs": d(e, t, "--radius-xs", "borderRadius"),
                                "--border-radius-sm": d(e, t, "--radius-sm", "borderRadius"),
                                "--border-radius-md": d(e, t, "--radius-md", "borderRadius"),
                                "--border-radius-lg": d(e, t, "--radius-lg", "borderRadius"),
                                "--border-radius-xl": d(e, t, "--radius-xl", "borderRadius"),
                                "--border-radius-full": d(e, t, "--radius-full", "borderRadius"),
                                "--border-width-regular": "1px",
                                "--shadow-hairline": d(e, t, "--shadow-hairline", "boxShadow"),
                                "--shadow-sm": d(e, t, "--shadow-sm", "boxShadow"),
                                "--shadow-md": d(e, t, "--shadow-md", "boxShadow"),
                                "--shadow-lg": d(e, t, "--shadow-lg", "boxShadow")
                            }
                        } finally {
                            t.remove()
                        }
                    }()
            });

        function d(e, t, a, n) {
            let o = e.getPropertyValue(a).trim();
            if (0 === o.length) return;
            t.style[n] = `var(${a})`;
            let i = getComputedStyle(t)[n].trim();
            return 0 === i.length || i === `var(${a})` ? o : i
        }
        a.d(t, {}, {
            a: s
        })
    }),
    Yshm: (function(e, t, a) {
        var n = a("ASxG");
        let o = n.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            i = n.object({
                connectedPluginIds: n.array(n.string()).optional(),
                declinedPluginIds: n.array(n.string()).optional()
            }).catchall(n.json()),
            r = n.object({
                pluginId: n.string().min(1),
                suggestionId: o.optional()
            }),
            l = n.object({
                type: n.literal("event"),
                label: n.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: n.object({
                    remote_plugin_id: n.string().min(1).max(256),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: o
                })
            }),
            s = l.extend({
                label: n.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: l.shape.payload.extend({
                    suggestion_id: o.optional(),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10)
                })
            }),
            d = n.discriminatedUnion("label", [l, s]),
            c = n.object({
                kind: n.literal("plugin_suggestions"),
                version: n.literal(1),
                suggestions: n.array(n.object({
                    plugin_id: n.string().min(1),
                    display_name: n.string().min(1)
                }))
            }),
            u = n.object({
                "openai/plugin_suggestion_id": o.optional(),
                "openai/plugin_suggestion_connector_ids": n.record(n.string(), n.string().min(1)).optional().catch(void 0)
            });
        a.d(t, {}, {
            a: r,
            b: d,
            c: u,
            d: i,
            e: c
        })
    }),
    LGZt: (function(e, t, a) {
        var n = a("Zqzr");
        a.d(t, {}, {
            a: function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Kg)(t),
                    o = document.createElement(e);
                if (o instanceof HTMLIFrameElement) o.setAttribute("sandbox", "allow-scripts allow-same-origin"), o.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", o.shadowRoot?.append(e)
                }
                return o.setAttribute("partition", a), o
            }
        })
    }),
    uzkw: (function(e, t, a) {
        var n = a("Kwur");
        a.d(t, {}, {
            a: function(e) {
                let {
                    connectorId: t,
                    conversationId: a,
                    eventType: o,
                    expectedIdentity: i,
                    messageId: r,
                    pluginId: l,
                    productSurface: s,
                    suggestionMessageId: d
                } = e;
                n.Request.safePost("/unified_user_signals", {
                    expectedIdentity: i,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: s,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: a,
                                message_id: r
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: t ?? "",
                                plugin_id: l,
                                suggestion_message_id: d,
                                event_type: o
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    }),
    TKsx: (function(e, t, a) {
        var n = a("BolX"),
            o = a("Dgwo"),
            i = a("tl5a"),
            r = a("OWtl"),
            l = a("rvFo");
        let s = ["plan", "default"];

        function d(e, t) {
            return {
                queryKey: ["collaboration-modes", "list", t],
                staleTime: l.b.INFINITE,
                queryFn: async () => (function(e, t) {
                    let a = {};
                    for (let t of e) {
                        let e = function(e) {
                            let t = e.mode;
                            return null == t || "plan" === t || "default" === t ? e : {
                                ...e,
                                mode: "default"
                            }
                        }(t);
                        null == e.mode || a[e.mode] || (a[e.mode] = e)
                    }
                    let n = [];
                    for (let e of t) {
                        let t = a[e];
                        t && n.push(t)
                    }
                    return n
                })((await (0, o.b)(e, t).sendRequest("collaborationMode/list", {})).data, s)
            }
        }
        let c = (0, n.q)(r.a, (e, t) => {
                let {
                    scope: a
                } = t;
                return d(a, e)
            }),
            u = (0, n.r)(r.a, e => {
                let {
                    get: t,
                    scope: a
                } = e;
                return d(a, t(i.q))
            });
        a.d(t, {}, {
            a: c,
            b: u
        })
    })
};