export const __rspack_esm_ids = [763618];
export const __webpack_modules__ = {
    MhHq: (function(e, t) {
        t.a = {
            palette: "palette-CKhGNn",
            fileHoverCard: "fileHoverCard-_SxMgK",
            filePill: "filePill-w54qyB",
            connectorIcon: "connectorIcon-XtxEBs",
            connectorFallback: "connectorFallback-pFpRwt",
            questionButton: "questionButton-LdbTc0"
        }
    }),
    piij: (function(e, t, o) {
        e.exports = o.p + "assets/space-recovery.105d9c61fe.png"
    }),
    sM3V: (function(e, t, o) {
        var i = o("Q840"),
            n = o("a4MG"),
            r = o("OWtl"),
            a = o("tl5a");
        let l = (0, i.d)(r.a, (e, t) => {
                let {
                    hostId: o,
                    conversationId: i
                } = e, {
                    get: n
                } = t;
                if (i.startsWith("chatgpt:")) return null;
                let r = n(a.nc, {
                    hostId: o,
                    threadId: i
                });
                return null != r && "notLoaded" !== r.type ? i : null
            }),
            s = (0, i.d)(r.a, (e, t) => {
                let {
                    get: o
                } = t, {
                    data: i
                } = null == o(l, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }) ? o(n.q, e.hostId) : o(n.r, e);
                return i?.data.find(t => t.name === e.serverName) ?? null
            });
        o.d(t, {}, {
            a: s,
            b: l
        })
    }),
    VvpR: (function(e, t, o) {
        var i = o("SRbQ"),
            n = o("Y5Sy"),
            r = o("Dgwo"),
            a = o("dF4Z"),
            l = o("hs0N"),
            s = o("syw5");
        o.d(t, {}, {
            a: async function(e, t, o, l) {
                let c = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, r.b)(e, t),
                        u = (0, i.a)(c, await d.getFollowUpContext(o, !0), !1);
                    if (e.get(n.a)) throw new a.a;
                    await d.editLastUserTurn(o, {
                        ...l,
                        clientUserMessageId: crypto.randomUUID(),
                        writingBlockContextPrepared: null != u,
                        additionalContext: (0, s.a)(o, u?.writingBlocks, l.additionalContext)
                    })
                } catch (e) {
                    c.error = e, c.hasError = !0
                } finally {
                    (0, i.e)(c)
                }
            },
            b: async function(e, t, o, n, a) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, r.b)(e, t),
                        d = (0, i.a)(l, await c.getFollowUpContext(o, !0), !1);
                    await c.retrySafetyBufferedTurn(o, n, a, {
                        additionalContext: (0, s.a)(o, d?.writingBlocks),
                        writingBlockContextPrepared: null != d
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, i.e)(l)
                }
            },
            c: async function(e, t, o, n) {
                let a = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, r.b)(e, t),
                        c = (0, i.a)(a, await l.getFollowUpContext(o, !0), !1);
                    await l.startEmptyTurn(o, {
                        ...n,
                        writingBlockContextPrepared: null != c,
                        additionalContext: (0, s.a)(o, c?.writingBlocks, n.additionalContext)
                    })
                } catch (e) {
                    a.error = e, a.hasError = !0
                } finally {
                    (0, i.e)(a)
                }
            },
            d: async function(e, t, o, n) {
                let a = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, r.b)(e, t),
                        d = (0, i.a)(a, await c.getFollowUpContext(o, !0), !1);
                    return await c.startTurn(o, {
                        ...n,
                        context: {
                            ...n.context,
                            onRequestDispatched: n.context?.onRequestDispatched ?? (e => {
                                null != n.request.clientUserMessageId && l.a.markRequestDispatched(n.request.clientUserMessageId, e)
                            }),
                            trace: n.context?.trace ?? (null == n.request.clientUserMessageId ? void 0 : l.a.getTrace(n.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != d
                        },
                        request: {
                            ...n.request,
                            additionalContext: (0, s.a)(o, d?.writingBlocks, n.request.additionalContext)
                        }
                    })
                } catch (e) {
                    a.error = e, a.hasError = !0
                } finally {
                    (0, i.e)(a)
                }
            }
        })
    }),
    Ooax: (function(e, t, o) {
        var i = o("ASxG");
        let n = i.string().regex(/^link_[0-9a-f]{32}$/),
            r = i.string().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            a = i.object({
                connector_id: r,
                target_link_id: n
            }),
            l = i.object({
                connector_id: r,
                connector_name: i.string().optional(),
                auth_type: i.enum(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: i.string().nullish(),
                auth_reason: i.enum(["oauth_upgrade_required", "reauthentication_required"]),
                requested_scopes: i.array(i.string().min(1)).min(1).optional()
            }),
            s = i.object({
                isError: i.literal(!1).optional(),
                structuredContent: i.object({
                    kind: i.literal("connector_auth_request"),
                    version: i.literal(3),
                    status: i.literal("requested"),
                    link_id: n
                }),
                _meta: i.object({
                    _codex_apps: i.object({
                        connector_auth_request: l
                    })
                })
            });
        o.d(t, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(e) {
                return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
            },
            c: function(e, t) {
                let o = a.safeParse(e).data,
                    i = s.safeParse(t).data;
                if (null == o || null == i) return null;
                let n = i._meta._codex_apps.connector_auth_request,
                    {
                        link_id: r
                    } = i.structuredContent,
                    l = "oauth_upgrade_required" === n.auth_reason;
                return o.target_link_id !== r || l !== (null != n.requested_scopes) || l && "OAUTH" !== n.auth_type ? null : {
                    ...n,
                    link_id: r
                }
            }
        })
    }),
    PrVQ: (function(e, t, o) {
        var i = o("kSHG"),
            n = o("Q840"),
            r = o("P61R"),
            a = o("sS8e"),
            l = o("xSzB"),
            s = o("OWtl"),
            c = o("tSEg"),
            d = o("WFY2"),
            u = o("oo2L"),
            f = o("Ooax"),
            g = o("Sbyb");
        let p = (0, n.v)(s.a, e => !1);
        o.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: o,
                    hostId: i,
                    sourceId: n,
                    resourceUri: a,
                    access: s,
                    toolInput: m,
                    toolResult: h,
                    assertActive: x,
                    onReconnected: _
                } = e;
                if (a !== f.a || null == h || null == s || !("connectorId" in s.serverIdentity) || s.serverIdentity.connectorId !== r.a) return;
                let b = (0, f.c)(m, (0, l.i)({
                    isCodexAppsServer: !0,
                    toolResult: h
                }));
                if (null == b) return;
                let C = null == b.auth_type ? null : (0, u.o)({
                    id: b.link_id,
                    connector_id: b.connector_id,
                    auth_type: b.auth_type,
                    auth_strategy_id: b.auth_strategy_id
                });
                if ("API_KEY" === b.auth_type && null == C) return;
                let A = e => {
                    if (e.throwIfAborted(), x?.(), t.get(c.j) || "current" !== s.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    A(e);
                    let r = await (0, g.requestMcpConnectSheet)(t, {
                            connectorId: b.connector_id,
                            hostId: i,
                            oauthPresentation: "popup",
                            productSku: o,
                            startOAuthDirectly: "reauthentication_required" === b.auth_reason && "OAUTH" === C,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: b.link_id,
                                authReason: b.auth_reason,
                                requestedScopes: b.requested_scopes
                            },
                            beforeConnect: async () => (A(e), !0),
                            signal: e
                        }),
                        a = r.didConnect && r.linkId === b.link_id;
                    if (a && null != _) {
                        let o = JSON.stringify([i, s.accountId, s.uiUserId, n, b.link_id]);
                        t.get(p, o) || (A(e), t.set(p, o, !0), _(b.connector_name?.trim() || b.connector_id).catch(e => {
                            d.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: a
                    }
                }
            },
            b: async function() {
                throw (0, a.c)("This action is unavailable for the sign-in widget", i.r.MethodNotFound)
            }
        })
    }),
    PYah: (function(e, t, o) {
        var i = o("Dgwo");
        o.d(t, {}, {
            a: async function(e, t, o, n) {
                let {
                    apps: r
                } = await (0, i.b)(e, t).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: o
                }, null == n ? void 0 : {
                    threadAccess: n,
                    coalesce: !1
                });
                return new Set(r.filter(e => {
                    let {
                        callable: t,
                        enabled: o
                    } = e;
                    return t && o
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }
        })
    }),
    bmU4: (function(e, t, o) {
        var i = o("iRMi"),
            n = o("yGJW"),
            r = o("YTYy");
        let a = {
            pptx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        o.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, o) {
                let {
                    importKind: i
                } = e;
                if ("pptx" !== i && "xlsx" !== i && "csv" !== i && "tsv" !== i || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let n = t?.target,
                    r = null != n && "fileId" in n ? n.fileId : void 0,
                    a = o?.libraryFileId ?? (null != n && "libraryFileId" in n ? n.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: i,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != r && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(r) ? r : void 0,
                    libraryFileId: null != a && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(a) ? a : void 0
                }
            },
            c: function(e, t, o, l) {
                if (null == t) return;
                let s = t.threadId ?? void 0;
                (0, n.a)(e, i.CodexArtifactFileActionClicked, {
                    artifactKind: "pptx" === t.sourceFormat || "native-slides" === t.sourceFormat ? i.CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION : i.CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET,
                    backing: {
                        file: i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_FILE,
                        "native-page": i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_NATIVE_PAGE,
                        "artifact-session": i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_ARTIFACT_SESSION
                    } [t.backing],
                    sourceFormat: a[t.sourceFormat],
                    surface: "output-card" === t.surface ? i.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_OUTPUT_CARD : i.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_VIEWER,
                    action: {
                        download: i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_DOWNLOAD,
                        export: i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_EXPORT,
                        "open-in-app": i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_OPEN_IN_APP
                    } [o],
                    targetFormat: null == l.format ? void 0 : a[l.format],
                    targetApp: l.app,
                    productExperience: (0, r.a)(e, s),
                    threadId: s,
                    turnId: t.turnId ?? void 0,
                    pageId: t.pageId,
                    fileId: t.fileId,
                    libraryFileId: t.libraryFileId
                })
            }
        })
    }),
    xof2: (function(e, t, o) {
        var i = o("EA6X"),
            n = o("D015"),
            r = o("yGJW"),
            a = o("OMIV"),
            l = o("CTBG"),
            s = o("Kwur"),
            c = o("dQRk"),
            d = o("hx97");

        function u(e, t, o) {
            if (null == t || null == o) return;
            let i = 0,
                r = !1;
            for (let a of e.get(l.c, t) ?? [])
                if ((0, d.o)(a) && (r = !1), "assistant" !== a.author.role || r || (i += 1, r = !0), a.id === o) return i > 0 ? (0, n.a)(i) : void 0
        }

        function f(e, t) {
            let o = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == o ? void 0 : {
                    entity_id: o.entityId,
                    entity_category: o.entityCategory,
                    widget_type: o.widgetType,
                    widget_name: o.widgetName,
                    content_reference_start_index: o.contentReferenceStartIndex,
                    message_id: o.messageId
                }
            }
        }

        function g(e, t) {
            return Math.random() < (e.get(a.g)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function p(e, t, o) {
            null != t.actionType && g(e, "widget_action") && s.Request.safePost("/unified_user_signals", {
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
                            ...f(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: o
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function m(e, t) {
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && g(e, "entity_action") && s.Request.safePost("/unified_user_signals", {
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
                            ...f(t, t.actionType),
                            entity_id: t.entityId,
                            entity_category: t.entityCategory,
                            entity_affordance: t.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function h(e, t) {
            null != t.actionType && g(e, "link_action") && s.Request.safePost("/unified_user_signals", {
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
                            ...f(t, t.actionType),
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
        o.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let o = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(c.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    m(e, o), (0, r.a)(e, i.c, o)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && g(e, "image_action") && s.Request.safePost("/unified_user_signals", {
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
                                ...f(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, r.a)(e, i.e, t)
            },
            d: function(e, t) {
                h(e, t), (0, r.a)(e, i.g, t)
            },
            e: function(e, t) {
                m(e, t), (0, r.a)(e, i.c, t)
            },
            f: function(e, t) {
                p(e, t), (0, r.a)(e, i.j, t)
            },
            g: h,
            h: p
        })
    }),
    PxnS: (function(e, t, o) {
        var i = o("EA6X"),
            n = o("lSdY"),
            r = o("Q840"),
            a = o("aiHW"),
            l = o("yGJW"),
            s = o("OWtl"),
            c = o("xsLm"),
            d = o("HgLj"),
            u = o("XW2n");
        let f = (0, r.u)(s.a, () => new WeakMap),
            g = (0, r.d)(s.a, (e, t) => {
                let {
                    widgetType: o,
                    turnMessageId: i,
                    sourceMessageId: r
                } = e, {
                    get: a
                } = t, l = a(u.b);
                if (l?.productExperience !== n.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let s = r ?? i,
                    c = null != i && l.messageIds.has(i) ? i : void 0;
                if (null != s && (l.messageIds.has(s) || null != c)) return {
                    widgetType: o,
                    messageId: s,
                    assistantMessageId: c
                }
            });

        function p(e, t, o, n) {
            (0, l.a)(e, i.j, {
                ...t,
                actionType: o,
                widgetActionTarget: n,
                surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === t.widgetType || void 0
            })
        }
        o.d(t, {}, {
            a: function(e, t, o, i) {
                return (0, d.a)(i, o => {
                    if (!t || !o) return;
                    let i = e.get(f);
                    if (i.get(o) !== t.messageId) return (0, c.a)(o, () => {
                        for (let e = (0, a.a)(o); e; e = (0, a.a)(e))
                            if (e.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return i.set(o, t.messageId), p(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(o)
            },
            b: function(e, t, o) {
                t && p(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", o)
            },
            c: g
        })
    }),
    r21w: (function(e, t, o) {
        o.d(t, {
            a: () => a
        });
        var i = o("ABep"),
            n = o("QosV"),
            r = o("on57");

        function a(e) {
            let t, o, a, l, s = (0, n.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...o
            } = e, s[0] = e, s[1] = t, s[2] = o) : (t = s[1], o = s[2]), s[3] !== t ? (a = (0, r.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = a) : a = s[4], s[5] !== o || s[6] !== a ? (l = (0, i.jsx)("div", {
                className: a,
                ...o
            }), s[5] = o, s[6] = a, s[7] = l) : l = s[7], l
        }
    }),
    vYmP: (function(e, t, o) {
        var i = o("ABep"),
            n = o("QosV"),
            r = o("on57"),
            a = o("zd8w"),
            l = o("ZtSy"),
            s = o("MhHq");
        o.d(t, {}, {
            a: function(e) {
                let t, o, c, d, u, f, g, p, m, h, x, _, b, C, A, w, v, y, T = (0, n.c)(43);
                T[0] !== e ? ({
                    ref: f,
                    ActionWrapper: p,
                    ariaLabel: o,
                    icon: c,
                    isActive: m,
                    isTerminalInline: d,
                    label: u,
                    supportingCountLabel: g,
                    testId: x,
                    variant: h,
                    ...t
                } = e, T[0] = e, T[1] = t, T[2] = o, T[3] = c, T[4] = d, T[5] = u, T[6] = f, T[7] = g, T[8] = p, T[9] = m, T[10] = h, T[11] = x) : (t = T[1], o = T[2], c = T[3], d = T[4], u = T[5], f = T[6], g = T[7], p = T[8], m = T[9], h = T[10], x = T[11]);
                let I = void 0 === p ? a.Fragment : p,
                    E = void 0 !== m && m,
                    F = "file" === (void 0 === h ? "default" : h),
                    j = "disabled" in t && t.disabled,
                    N = j ? "cursor-default" : "group cursor-interaction",
                    k = !F && !j && "hover:bg-secondary-soft-hover hover:text-default!",
                    O = F && s.a.palette,
                    R = F && s.a.filePill;
                T[12] !== E || T[13] !== F || T[14] !== N || T[15] !== k || T[16] !== O || T[17] !== R ? (_ = (0, r.b)("min-w-0 no-underline!", N, k, O, R, F ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, r.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", E ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), T[12] = E, T[13] = F, T[14] = N, T[15] = k, T[16] = O, T[17] = R, T[18] = _) : _ = T[18];
                let S = _;
                T[19] !== F || T[20] !== g ? (b = null == g ? null : (0, i.jsx)("span", {
                    className: (0, r.b)("text-inherit", F ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: g
                }), T[19] = F, T[20] = g, T[21] = b) : b = T[21];
                let P = b;
                T[22] !== c || T[23] !== F || T[24] !== u || T[25] !== P ? (C = F ? (0, i.jsxs)(i.Fragment, {
                    children: [c, (0, i.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: u
                    }), P]
                }) : (0, i.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, i.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [c, (0, i.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: u
                        })]
                    }), P]
                }), T[22] = c, T[23] = F, T[24] = u, T[25] = P, T[26] = C) : C = T[26];
                let M = C,
                    q = F && "relative",
                    L = F && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return T[27] !== q || T[28] !== L ? (A = (0, r.b)("ms-1 inline-flex max-w-full min-w-0 items-center font-sans select-none", q, L), T[27] = q, T[28] = L, T[29] = A) : A = T[29], T[30] !== t || T[31] !== o || T[32] !== S || T[33] !== M || T[34] !== x ? (w = "href" in t ? (0, i.jsx)(l.a, {
                    className: S,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": x,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": o,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: M
                }) : (0, i.jsx)("button", {
                    className: S,
                    "aria-label": o,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: M
                }), T[30] = t, T[31] = o, T[32] = S, T[33] = M, T[34] = x, T[35] = w) : w = T[35], T[36] !== I || T[37] !== w ? (v = (0, i.jsx)(I, {
                    children: w
                }), T[36] = I, T[37] = w, T[38] = v) : v = T[38], T[39] !== f || T[40] !== A || T[41] !== v ? (y = (0, i.jsx)("span", {
                    ref: f,
                    className: A,
                    children: v
                }), T[39] = f, T[40] = A, T[41] = v, T[42] = y) : y = T[42], y
            }
        })
    }),
    iIHp: (function(e, t, o) {
        var i = o("QosV"),
            n = o("zd8w");
        class r {
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
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, o) => {
                this.pendingRequest = {
                    confirmation: e,
                    reject: o,
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
        o.d(t, {}, {
            a: function(e) {
                let t, o, a = (0, i.c)(7);
                a[0] !== e ? (t = () => new r(e), a[0] = e, a[1] = t) : t = a[1];
                let [l] = (0, n.useState)(t), s = (0, n.useSyncExternalStore)(l.subscribe, l.getSnapshot, l.getSnapshot);
                return a[2] !== s || a[3] !== l.cancel || a[4] !== l.confirm || a[5] !== l.request ? (o = {
                    cancel: l.cancel,
                    confirmation: s,
                    confirm: l.confirm,
                    request: l.request
                }, a[2] = s, a[3] = l.cancel, a[4] = l.confirm, a[5] = l.request, a[6] = o) : o = a[6], o
            }
        })
    }),
    v7ut: (function(e, t, o) {
        var i = o("ABep"),
            n = o("QosV"),
            r = o("zd8w"),
            a = o("Wf1j"),
            l = o("oyxz"),
            s = o("hL9c"),
            c = o("osar"),
            d = o("eFVb"),
            u = o("W2tE"),
            f = o("v5fl"),
            g = o("Sm6l"),
            p = o("JNtf"),
            m = o("mUDD"),
            h = o("zLIa"),
            x = o("sF0J"),
            _ = o("E1V6");

        function b(e) {
            let t, o, s, b, y, T, I, E = (0, n.c)(31),
                {
                    canConfirm: F,
                    context: j,
                    description: N,
                    imageUrls: k,
                    onCancel: O,
                    onConfirm: R,
                    prompt: S,
                    title: P
                } = e,
                M = void 0 === F || F,
                q = (0, a.a)();
            E[0] !== S ? (t = () => {
                let e = (0, d.b)(S, {
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
            }, E[0] = S, E[1] = t) : t = E[1];
            let [L] = (0, r.useState)(t), {
                controller: D,
                destroy: U
            } = L;
            (0, _.b)(U, D);
            let z = (0, f.b)(D, A, "document"),
                [B, W] = (0, r.useState)(j);
            E[2] !== j ? (o = v(j), E[2] = j, E[3] = o) : o = E[3];
            let G = o,
                [X, H] = (0, r.useState)(G),
                [V, K] = (0, r.useState)("prompt");
            E[4] !== X ? (s = function(e) {
                try {
                    return (0, x.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(X), E[4] = X, E[5] = s) : s = E[5];
            let Q = s;
            E[6] !== M || E[7] !== B || E[8] !== D || E[9] !== R ? (b = () => {
                let e = D.getText().trim();
                M && e.length > 0 && R((0, x.a)({
                    context: B,
                    prompt: e
                }))
            }, E[6] = M, E[7] = B, E[8] = D, E[9] = R, E[10] = b) : b = E[10];
            let Z = b;
            return E[11] !== O ? (y = e => {
                e || O()
            }, E[11] = O, E[12] = y) : y = E[12], E[13] !== M || E[14] !== Z || E[15] !== B || E[16] !== X || E[17] !== D || E[18] !== N || E[19] !== z || E[20] !== k || E[21] !== G || E[22] !== q || E[23] !== O || E[24] !== Q || E[25] !== P || E[26] !== V ? (T = "prompt" === V ? (0, i.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), Z()
                },
                children: [(0, i.jsx)(w, {
                    description: N,
                    title: P
                }), (0, i.jsx)(c.a, {
                    paddingVariant: "inset",
                    children: (0, i.jsx)(c.a.Body, {
                        children: (0, i.jsx)(u.a, {
                            ariaLabel: q.formatMessage({
                                id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                defaultMessage: "Prompt"
                            }),
                            composerController: D,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: Z
                        })
                    })
                }), null != k && k.length > 0 ? (0, i.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: k.map(C)
                }) : null, null != B ? (0, i.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        H(v(B)), K("widget-state")
                    },
                    children: (0, i.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state"
                    })
                }) : null, (0, i.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, i.jsx)("div", {
                        className: "flex-1"
                    }), (0, i.jsx)(g.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: O,
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, i.jsx)(g.a, {
                        disabled: !M || !z,
                        type: "submit",
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send"
                        })
                    })]
                })]
            }) : (0, i.jsxs)(m.b, {
                className: "gap-4",
                children: [(0, i.jsx)(m.d, {
                    title: (0, i.jsx)(p.e, {
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state"
                        })
                    }),
                    subtitle: (0, i.jsx)(p.d, {
                        className: "text-secondary",
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget."
                        })
                    })
                }), (0, i.jsx)(h.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Q,
                    "aria-label": q.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: X,
                    onChange: e => {
                        H(e.target.value)
                    }
                }), null == Q ? (0, i.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, i.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB"
                    })
                }) : null, (0, i.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, i.jsx)(g.a, {
                        color: "ghost",
                        disabled: X === G,
                        type: "button",
                        onClick: () => {
                            H(G)
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset"
                        })
                    }), (0, i.jsx)("div", {
                        className: "flex-1"
                    }), (0, i.jsx)(g.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            H(v(B)), K("prompt")
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back"
                        })
                    }), (0, i.jsx)(g.a, {
                        disabled: null == Q,
                        type: "button",
                        onClick: () => {
                            null != Q && (W(Q), K("prompt"))
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply"
                        })
                    })]
                })]
            }), E[13] = M, E[14] = Z, E[15] = B, E[16] = X, E[17] = D, E[18] = N, E[19] = z, E[20] = k, E[21] = G, E[22] = q, E[23] = O, E[24] = Q, E[25] = P, E[26] = V, E[27] = T) : T = E[27], E[28] !== y || E[29] !== T ? (I = (0, i.jsx)(p.a, {
                open: !0,
                onOpenChange: y,
                size: "wide",
                children: T
            }), E[28] = y, E[29] = T, E[30] = I) : I = E[30], I
        }

        function C(e, t) {
            return (0, i.jsx)(s.a, {
                src: e
            }, t)
        }

        function A(e) {
            return e.getText().trim().length > 0
        }

        function w(e) {
            let t, o, r, a, s, c = (0, n.c)(11),
                {
                    description: d,
                    title: u
                } = e;
            return c[0] !== u ? (t = u ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?"
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (o = (0, i.jsx)(p.e, {
                children: t
            }), c[2] = t, c[3] = o) : o = c[3], c[4] !== d ? (r = d ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt"
            }), c[4] = d, c[5] = r) : r = c[5], c[6] !== r ? (a = (0, i.jsx)(p.d, {
                className: "text-secondary",
                children: r
            }), c[6] = r, c[7] = a) : a = c[7], c[8] !== o || c[9] !== a ? (s = (0, i.jsx)(m.d, {
                title: o,
                subtitle: a
            }), c[8] = o, c[9] = a, c[10] = s) : s = c[10], s
        }

        function v(e) {
            return null == e ? "" : (0, x.d)(e)
        }
        o.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, o = (0, n.c)(2),
                    {
                        confirmation: r
                    } = e;
                return null == r ? null : (o[0] !== r ? (t = (0, i.jsx)(b, {
                    ...r
                }), o[0] = r, o[1] = t) : t = o[1], t)
            }
        })
    }),
    sF0J: (function(e, t, o) {
        var i = o("SKgO"),
            n = o("ASxG"),
            r = o("sS8e");
        let a = n.object({
            context: i.c.optional(),
            isVisible: n.boolean().optional(),
            prompt: n.string().trim().min(1),
            title: n.string().trim().min(1).max(250).optional()
        }).strip();
        o.d(t, {
            b: () => i.a,
            d: () => i.b
        }, {
            a: function(e) {
                let {
                    context: t,
                    prompt: o
                } = e;
                return null == t ? o : `${o}

Current widget context (JSON):
${(0,i.b)(t)}`
            },
            c: function(e) {
                let t = a.safeParse(e);
                if (!t.success) throw (0, r.c)("Invalid follow-up message", -32602);
                return t.data
            }
        })
    }),
    QnVT: (function(e, t, o) {
        var i = o("Q840"),
            n = o("i8Zd"),
            r = o("OWtl");
        let a = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return {
                    revision: t(n.a),
                    appearance: null
                }
            }, {
                isEqual: (e, t) => e.revision === t.revision
            }),
            l = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e, {
                    appearance: o,
                    revision: i
                } = t(a), n = o?.fonts;
                return null == n || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [n.code, n.ui].some(e => e?.includes("(")) ? i : o
            }),
            s = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(l),
                    function() {
                        let e = getComputedStyle(document.documentElement),
                            t = document.createElement("div");
                        t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                        let o = t => {
                                let o = e.getPropertyValue(t).trim();
                                return o.length > 0 ? o : void 0
                            },
                            i = o => {
                                let i = c(e, t, o, "color"),
                                    n = c(e, t, "--color-surface-tertiary", "color");
                                if (null != i && null != n) return `color-mix(in srgb, ${i} 12%, ${n})`
                            };
                        try {
                            let n, r, a, l, s, d, u, f, g, p, m, h, x, _, b, C, A, w, v, y, T, I, E, F, j, N, k, O, R, S, P, M, q, L, D, U;
                            return {
                                "--color-background-primary": (n = "--app-color-background-surface", c(e, t, n, "color") ?? (r = "--color-surface-tertiary", c(e, t, r, "color"))),
                                "--color-background-secondary": (a = "--color-surface-elevated", c(e, t, a, "color")),
                                "--color-background-tertiary": (l = "--color-surface-secondary", c(e, t, l, "color")),
                                "--color-background-inverse": (s = "--color-text", c(e, t, s, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (d = "--codex-theme-accent-background-subtle", c(e, t, d, "color") ?? (u = "--color-background-info-surface", c(e, t, u, "color"))),
                                "--color-background-danger": (f = "--color-background-danger-surface", c(e, t, f, "color")),
                                "--color-background-success": i("--color-codex-git-added"),
                                "--color-background-warning": i("--color-text-warning"),
                                "--color-background-disabled": (g = "--color-background-primary-soft-active", c(e, t, g, "color")),
                                "--color-text-primary": (p = "--color-text", c(e, t, p, "color")),
                                "--color-text-secondary": (m = "--color-text-secondary", c(e, t, m, "color")),
                                "--color-text-tertiary": (h = "--color-codex-description", c(e, t, h, "color")),
                                "--color-text-inverse": (x = "--color-text-inverse", c(e, t, x, "color") ?? (_ = "--color-surface-tertiary", c(e, t, _, "color"))),
                                "--color-text-ghost": (b = "--color-codex-description", c(e, t, b, "color")),
                                "--color-text-info": (C = "--color-text-info", c(e, t, C, "color")),
                                "--color-text-danger": (A = "--color-text-danger", c(e, t, A, "color")),
                                "--color-text-success": (w = "--color-codex-git-added", c(e, t, w, "color")),
                                "--color-text-warning": (v = "--color-text-warning", c(e, t, v, "color")),
                                "--color-text-disabled": (y = "--color-codex-description", c(e, t, y, "color")),
                                "--color-border-primary": (T = "--color-border-primary-outline", c(e, t, T, "color")),
                                "--color-border-secondary": (I = "--color-border", c(e, t, I, "color")),
                                "--color-border-tertiary": (E = "--color-border", c(e, t, E, "color")),
                                "--color-border-inverse": (F = "--color-text", c(e, t, F, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (j = "--color-ring", c(e, t, j, "color")),
                                "--color-border-danger": (N = "--color-text-danger", c(e, t, N, "color")),
                                "--color-border-success": (k = "--color-codex-git-added", c(e, t, k, "color")),
                                "--color-border-warning": (O = "--color-text-warning", c(e, t, O, "color")),
                                "--color-border-disabled": (R = "--color-border-primary-outline", c(e, t, R, "color")),
                                "--color-ring-primary": (S = "--color-ring", c(e, t, S, "color")),
                                "--color-ring-secondary": (P = "--color-ring", c(e, t, P, "color")),
                                "--color-ring-inverse": (M = "--color-ring", c(e, t, M, "color")),
                                "--color-ring-info": (q = "--color-ring", c(e, t, q, "color")),
                                "--color-ring-danger": (L = "--color-text-danger", c(e, t, L, "color")),
                                "--color-ring-success": (D = "--color-codex-git-added", c(e, t, D, "color")),
                                "--color-ring-warning": (U = "--color-text-warning", c(e, t, U, "color")),
                                "--font-sans": c(e, t, "--font-sans", "fontFamily"),
                                "--font-mono": c(e, t, "--font-mono", "fontFamily"),
                                "--font-weight-normal": c(e, t, "--font-ui-weight", "fontWeight"),
                                "--font-weight-medium": c(e, t, "--font-weight-medium", "fontWeight"),
                                "--font-weight-semibold": c(e, t, "--font-weight-semibold", "fontWeight"),
                                "--font-weight-bold": c(e, t, "--font-weight-bold", "fontWeight"),
                                "--font-text-xs-size": c(e, t, "--text-xs", "fontSize"),
                                "--font-text-sm-size": c(e, t, "--text-sm", "fontSize"),
                                "--font-text-md-size": c(e, t, "--text-base", "fontSize"),
                                "--font-text-lg-size": c(e, t, "--text-lg", "fontSize"),
                                "--font-heading-xs-size": c(e, t, "--text-heading-sm", "fontSize"),
                                "--font-heading-sm-size": c(e, t, "--text-heading-md", "fontSize"),
                                "--font-heading-md-size": c(e, t, "--text-heading-lg", "fontSize"),
                                "--font-heading-lg-size": c(e, t, "--text-xl", "fontSize"),
                                "--font-heading-xl-size": c(e, t, "--text-2xl", "fontSize"),
                                "--font-heading-2xl-size": c(e, t, "--text-3xl", "fontSize"),
                                "--font-heading-3xl-size": c(e, t, "--text-4xl", "fontSize"),
                                "--font-text-xs-line-height": o("--text-xs--line-height"),
                                "--font-text-sm-line-height": o("--text-sm--line-height"),
                                "--font-text-md-line-height": o("--text-base--line-height"),
                                "--font-text-lg-line-height": o("--text-lg--line-height"),
                                "--font-heading-xs-line-height": "1.33",
                                "--font-heading-sm-line-height": "1.33",
                                "--font-heading-md-line-height": "1.2",
                                "--font-heading-lg-line-height": "1.2",
                                "--font-heading-xl-line-height": "1",
                                "--font-heading-2xl-line-height": "1",
                                "--font-heading-3xl-line-height": "1",
                                "--border-radius-xs": c(e, t, "--radius-xs", "borderRadius"),
                                "--border-radius-sm": c(e, t, "--radius-sm", "borderRadius"),
                                "--border-radius-md": c(e, t, "--radius-md", "borderRadius"),
                                "--border-radius-lg": c(e, t, "--radius-lg", "borderRadius"),
                                "--border-radius-xl": c(e, t, "--radius-xl", "borderRadius"),
                                "--border-radius-full": c(e, t, "--radius-full", "borderRadius"),
                                "--border-width-regular": "1px",
                                "--shadow-hairline": c(e, t, "--shadow-hairline", "boxShadow"),
                                "--shadow-sm": c(e, t, "--shadow-sm", "boxShadow"),
                                "--shadow-md": c(e, t, "--shadow-md", "boxShadow"),
                                "--shadow-lg": c(e, t, "--shadow-lg", "boxShadow")
                            }
                        } finally {
                            t.remove()
                        }
                    }()
            });

        function c(e, t, o, i) {
            let n = e.getPropertyValue(o).trim();
            if (0 === n.length) return;
            t.style[i] = `var(${o})`;
            let r = getComputedStyle(t)[i].trim();
            return 0 === r.length || r === `var(${o})` ? n : r
        }
        o.d(t, {}, {
            a: s
        })
    }),
    Yshm: (function(e, t, o) {
        var i = o("ASxG");
        let n = i.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            r = i.object({
                connectedPluginIds: i.array(i.string()).optional(),
                declinedPluginIds: i.array(i.string()).optional()
            }).catchall(i.json()),
            a = i.object({
                pluginId: i.string().min(1),
                suggestionId: n.optional()
            }),
            l = i.object({
                type: i.literal("event"),
                label: i.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: i.object({
                    remote_plugin_id: i.string().min(1).max(256),
                    plugin_ids: i.array(i.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: n
                })
            }),
            s = l.extend({
                label: i.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: l.shape.payload.extend({
                    suggestion_id: n.optional(),
                    plugin_ids: i.array(i.string().min(1).max(256)).min(1).max(10)
                })
            }),
            c = i.discriminatedUnion("label", [l, s]),
            d = i.object({
                kind: i.literal("plugin_suggestions"),
                version: i.literal(1),
                suggestions: i.array(i.object({
                    plugin_id: i.string().min(1),
                    display_name: i.string().min(1)
                }))
            }),
            u = i.object({
                "openai/plugin_suggestion_id": n.optional(),
                "openai/plugin_suggestion_connector_ids": i.record(i.string(), i.string().min(1)).optional().catch(void 0)
            });
        o.d(t, {}, {
            a: a,
            b: c,
            c: u,
            d: r,
            e: d
        })
    }),
    LGZt: (function(e, t, o) {
        var i = o("Zqzr");
        o.d(t, {}, {
            a: function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, i.Kg)(t),
                    n = document.createElement(e);
                if (n instanceof HTMLIFrameElement) n.setAttribute("sandbox", "allow-scripts allow-same-origin"), n.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", n.shadowRoot?.append(e)
                }
                return n.setAttribute("partition", o), n
            }
        })
    }),
    ePaQ: (function(e, t, o) {
        o.d(t, {
            a: () => h
        });
        var i = o("ABep"),
            n = o("QosV"),
            r = o("kSHG"),
            a = o("bFOP"),
            l = o("slpy"),
            s = o("on57"),
            c = o("zd8w"),
            d = o("KxMp"),
            u = o("bf6R"),
            f = o("zSQm"),
            g = o("WAdu");

        function p(e) {
            let t, o, r, a, l, s, c, d = (0, n.c)(23),
                {
                    title: u,
                    subtitle: f,
                    body: g,
                    scrollBody: p,
                    branding: m,
                    followUp: h,
                    actions: x
                } = e,
                _ = void 0 !== p && p;
            d[0] !== g ? (t = g?.includes("\n"), d[0] = g, d[1] = t) : t = d[1];
            let b = t,
                C = _ ? -1 : void 0;
            return d[2] !== m ? (o = (0, i.jsx)("div", {
                className: "branding-xlBboz",
                children: m
            }), d[2] = m, d[3] = o) : o = d[3], d[4] !== u ? (r = (0, i.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = r) : r = d[5], d[6] !== f ? (a = null != f && (0, i.jsx)("div", {
                className: "subtitle-gArrij",
                children: f
            }), d[6] = f, d[7] = a) : a = d[7], d[8] !== g || d[9] !== b || d[10] !== _ || d[11] !== C || d[12] !== u ? (l = null != g && (0, i.jsx)("div", {
                className: b || _ ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: b ? 0 : C,
                children: g
            }), d[8] = g, d[9] = b, d[10] = _, d[11] = C, d[12] = u, d[13] = l) : l = d[13], d[14] !== h ? (s = null != h && (0, i.jsx)("div", {
                className: "followUp-otVo0x",
                children: h
            }), d[14] = h, d[15] = s) : s = d[15], d[16] !== x || d[17] !== o || d[18] !== r || d[19] !== a || d[20] !== l || d[21] !== s ? (c = (0, i.jsxs)("div", {
                className: "content-cuuiWn",
                children: [o, r, a, l, x, s]
            }), d[16] = x, d[17] = o, d[18] = r, d[19] = a, d[20] = l, d[21] = s, d[22] = c) : c = d[22], c
        }
        var m = o("Nfif");

        function h(e) {
            let t, o, r, s, d = (0, n.c)(32),
                {
                    children: u,
                    disabled: f,
                    metadata: g,
                    sourceAppId: p,
                    followUp: m,
                    keepOpen: h,
                    openOnClick: b,
                    closeOnTriggerClick: C,
                    presentation: A,
                    renderHoverCard: w
                } = e,
                v = void 0 === C || C,
                [y, T] = (0, c.useState)(!1);
            if (null == g.hoverCard && null == w && "file" !== A && !b && v) {
                let e, t, o = !!h || void 0;
                return d[0] !== u ? (e = (0, i.jsx)("span", {
                    className: "inline-flex max-w-full",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== f || d[3] !== g.title || d[4] !== o || d[5] !== e ? (t = (0, i.jsx)(l.a, {
                    content: g.title,
                    disabled: f,
                    forceOpen: o,
                    children: e
                }), d[2] = f, d[3] = g.title, d[4] = o, d[5] = e, d[6] = t) : t = d[6], t
            }
            let I = g.title;
            if (null != w) {
                let e;
                d[7] !== m || d[8] !== g || d[9] !== A || d[10] !== w || d[11] !== p ? (e = w({
                    metadata: g,
                    sourceAppId: p,
                    followUp: m,
                    presentation: A
                }), d[7] = m, d[8] = g, d[9] = A, d[10] = w, d[11] = p, d[12] = e) : e = d[12], I = e
            } else if (null != g.hoverCard) {
                let e;
                d[13] !== m || d[14] !== g || d[15] !== A || d[16] !== p ? (e = (0, i.jsx)(_, {
                    metadata: g,
                    sourceAppId: p,
                    followUp: m,
                    presentation: A
                }), d[13] = m, d[14] = g, d[15] = A, d[16] = p, d[17] = e) : e = d[17], I = e
            }
            let E = !f && (h || y);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => T(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== v || d[21] !== b ? (o = (0, i.jsx)(x, {
                openOnClick: b,
                closeOnTriggerClick: v,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = v, d[21] = b, d[22] = o) : o = d[22];
            let F = "file" === A ? 344 : 320,
                j = "file" === A ? 10 : 6;
            return d[23] !== I || d[24] !== g.title || d[25] !== F || d[26] !== j ? (r = (0, i.jsx)(a.a.Content, {
                "aria-label": g.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: j,
                children: I
            }), d[23] = I, d[24] = g.title, d[25] = F, d[26] = j, d[27] = r) : r = d[27], d[28] !== E || d[29] !== o || d[30] !== r ? (s = (0, i.jsxs)(a.a, {
                showOnHover: !0,
                open: E,
                onOpenChange: T,
                children: [o, r]
            }), d[28] = E, d[29] = o, d[30] = r, d[31] = s) : s = d[31], s
        }

        function x(e) {
            let t, o, r, l = (0, n.c)(10),
                {
                    children: s,
                    openOnClick: c,
                    closeOnTriggerClick: d,
                    onOpen: u
                } = e,
                {
                    close: f
                } = (0, a.b)();
            return l[0] !== f || l[1] !== d || l[2] !== u || l[3] !== c ? (t = e => {
                c && d || (e.preventDefault(), c ? u() : f())
            }, l[0] = f, l[1] = d, l[2] = u, l[3] = c, l[4] = t) : t = l[4], l[5] !== s ? (o = (0, i.jsx)("span", {
                className: "group/mcp-source-citation inline-flex max-w-full",
                tabIndex: -1,
                children: s
            }), l[5] = s, l[6] = o) : o = l[6], l[7] !== t || l[8] !== o ? (r = (0, i.jsx)(a.a.Trigger, {
                onClick: t,
                children: o
            }), l[7] = t, l[8] = o, l[9] = r) : r = l[9], r
        }

        function _(e) {
            let t, o, a, l, h, x, _, b, C = (0, n.c)(53),
                {
                    metadata: A,
                    sourceAppId: w,
                    followUp: v,
                    presentation: y
                } = e,
                T = (0, c.useContext)(g.a);
            if (C[0] !== A.icons?.[0]) {
                let {
                    data: e
                } = r.v.safeParse(A.icons?.[0]), o = e?.src;
                t = null == o ? void 0 : (0, f.b)(o), C[0] = A.icons?.[0], C[1] = t
            } else t = C[1];
            let I = t;
            C[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.jsx)(u.Ki, {}), C[2] = o) : o = C[2];
            let E = o;
            if ("restricted" !== T) {
                if (null != A.url) {
                    let e;
                    C[3] !== A.url ? (e = (0, i.jsx)(d.a, {
                        href: A.url,
                        className: "size-4"
                    }), C[3] = A.url, C[4] = e) : e = C[4], E = e
                } else if (null != I) {
                    let e, t, o = null == w && "dark:brightness-0 dark:invert";
                    C[5] !== o ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", o), C[5] = o, C[6] = e) : e = C[6], C[7] !== I || C[8] !== e ? (t = (0, i.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: I
                    }), C[7] = I, C[8] = e, C[9] = t) : t = C[9], E = t
                }
            }
            if ("file" === y && null != w) {
                let e, t, o = A.hoverCard?.title ?? A.title,
                    n = A.hoverCard?.subtitle,
                    r = A.hoverCard?.body;
                return C[10] !== w ? (e = (0, i.jsx)(m.a, {
                    appId: w,
                    showName: !0,
                    presentation: "file"
                }), C[10] = w, C[11] = e) : e = C[11], C[12] !== v || C[13] !== o || C[14] !== n || C[15] !== r || C[16] !== e ? (t = (0, i.jsx)(p, {
                    title: o,
                    subtitle: n,
                    body: r,
                    branding: e,
                    followUp: v
                }), C[12] = v, C[13] = o, C[14] = n, C[15] = r, C[16] = e, C[17] = t) : t = C[17], t
            }
            if (null != w) {
                let e, t, o, n, r, a;
                C[18] !== w ? (e = (0, i.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(m.a, {
                        appId: w,
                        showName: !0
                    })
                }), C[18] = w, C[19] = e) : e = C[19];
                let l = A.hoverCard?.title ?? A.title;
                return C[20] !== l ? (t = (0, i.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: l
                }), C[20] = l, C[21] = t) : t = C[21], C[22] !== A.hoverCard ? (o = A.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: A.hoverCard.subtitle
                }), C[22] = A.hoverCard, C[23] = o) : o = C[23], C[24] !== A.hoverCard || C[25] !== A.title ? (n = A.hoverCard?.body != null && (0, i.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": A.title,
                    tabIndex: 0,
                    children: A.hoverCard.body
                }), C[24] = A.hoverCard, C[25] = A.title, C[26] = n) : n = C[26], C[27] !== v ? (r = null != v && (0, i.jsx)("div", {
                    children: v
                }), C[27] = v, C[28] = r) : r = C[28], C[29] !== e || C[30] !== t || C[31] !== o || C[32] !== n || C[33] !== r ? (a = (0, i.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, o, n, r]
                }), C[29] = e, C[30] = t, C[31] = o, C[32] = n, C[33] = r, C[34] = a) : a = C[34], a
            }
            let F = A.hoverCard?.title ?? A.title;
            return C[35] !== F ? (a = (0, i.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), C[35] = F, C[36] = a) : a = C[36], C[37] !== A.hoverCard ? (l = A.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: A.hoverCard.subtitle
            }), C[37] = A.hoverCard, C[38] = l) : l = C[38], C[39] !== a || C[40] !== l ? (h = (0, i.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [a, l]
            }), C[39] = a, C[40] = l, C[41] = h) : h = C[41], C[42] !== A.hoverCard || C[43] !== A.title ? (x = A.hoverCard?.body != null && (0, i.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": A.title,
                tabIndex: 0,
                children: A.hoverCard.body
            }), C[42] = A.hoverCard, C[43] = A.title, C[44] = x) : x = C[44], C[45] !== E || C[46] !== A.hoverCard?.title || C[47] !== A.title ? (_ = A.hoverCard?.title != null && (0, i.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [E, (0, i.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: A.title
                })]
            }), C[45] = E, C[46] = A.hoverCard?.title, C[47] = A.title, C[48] = _) : _ = C[48], C[49] !== h || C[50] !== x || C[51] !== _ ? (b = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, _]
            }), C[49] = h, C[50] = x, C[51] = _, C[52] = b) : b = C[52], b
        }
    }),
    JAYD: (function(e, t, o) {
        var i = o("Q840"),
            n = o("Zqzr"),
            r = o("OiCI"),
            a = o("cLdu"),
            l = o("OWtl");
        let s = (0, i.d)(l.a, (e, t) => {
            let {
                get: o
            } = t, i = o(r.b);
            if (null == i) return !1;
            let l = o(a.h, {
                accountId: i,
                hostId: n.Xb,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !l.isPending && !l.isError && l.data?.some(t => {
                let {
                    appIds: o,
                    plugin: i
                } = t;
                return o?.includes(e) && i.installed && i.enabled && "AVAILABLE" === i.availability && null == i.disabledReason
            }) === !0
        });
        o.d(t, {}, {
            a: s
        })
    }),
    Nfif: (function(e, t, o) {
        o.d(t, {
            a: () => x
        });
        var i = o("ABep"),
            n = o("QosV"),
            r = o("on57"),
            a = o("Zqzr"),
            l = o("zd8w"),
            s = o("oyxz"),
            c = o("BQbE"),
            d = o("bf6R"),
            u = o("E6P3"),
            f = o("zSQm"),
            g = o("WAdu"),
            p = o("a6Zv"),
            m = e => (0, i.jsxs)("svg", {
                width: 12,
                height: 12,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 2.25293C16.3032 2.25306 17.8145 3.76317 17.8145 5.62598C17.8144 7.48871 16.3032 8.99889 14.4404 8.99902C13.7322 8.99896 13.0749 8.78025 12.5322 8.40723L8.39844 12.541C8.74099 13.0688 8.94043 13.698 8.94043 14.374C8.94035 16.2368 7.42929 17.7471 5.56641 17.7471C3.70368 17.7469 2.19344 16.2367 2.19336 14.374C2.19336 12.5112 3.70363 11.0012 5.56641 11.001C6.27216 11.001 6.92702 11.2183 7.46875 11.5889L11.6055 7.45215C11.2656 6.92567 11.0674 6.2992 11.0674 5.62598C11.0674 3.7632 12.5776 2.25311 14.4404 2.25293ZM5.56641 12.3311C4.43794 12.3312 3.52344 13.246 3.52344 14.374C3.52352 15.502 4.43799 16.4168 5.56641 16.417C6.69497 16.417 7.61027 15.5021 7.61035 14.374C7.61035 13.2459 6.69502 12.3311 5.56641 12.3311ZM14.4404 3.58301C13.312 3.58318 12.3975 4.49796 12.3975 5.62598C12.3975 6.75393 13.312 7.66877 14.4404 7.66895C15.5689 7.66881 16.4843 6.75395 16.4844 5.62598C16.4844 4.49793 15.5689 3.58314 14.4404 3.58301Z",
                    fill: "currentColor"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 11.001C16.3032 11.0011 17.8145 12.5112 17.8145 14.374C17.8144 16.2368 16.3032 17.7469 14.4404 17.7471C12.5777 17.7469 11.0675 16.2367 11.0674 14.374C11.0674 12.5112 12.5776 11.0012 14.4404 11.001ZM14.4404 12.3311C13.312 12.3312 12.3975 13.246 12.3975 14.374C12.3975 15.502 13.312 16.4168 14.4404 16.417C15.5689 16.4169 16.4843 15.502 16.4844 14.374C16.4844 13.246 15.5689 12.3312 14.4404 12.3311Z",
                    fill: "currentColor"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.56641 2.25293C7.42934 2.25293 8.94043 3.76309 8.94043 5.62598C8.94035 7.48879 7.42929 8.99902 5.56641 8.99902C3.70368 8.99885 2.19344 7.48869 2.19336 5.62598C2.19336 3.7632 3.70363 2.25311 5.56641 2.25293ZM5.56641 3.58301C4.43794 3.58318 3.52344 4.49796 3.52344 5.62598C3.52352 6.75393 4.43799 7.66877 5.56641 7.66895C6.69497 7.66895 7.61027 6.75403 7.61035 5.62598C7.61035 4.49785 6.69502 3.58301 5.56641 3.58301Z",
                    fill: "currentColor"
                })]
            }),
            h = o("MhHq");

        function x(e) {
            let t, o, x, _, b, C, A, w = (0, n.c)(21),
                {
                    appId: v,
                    showName: y,
                    presentation: T
                } = e,
                I = void 0 !== y && y,
                E = (0, l.useContext)(g.a);
            w[0] !== v ? (t = [v], w[0] = v, w[1] = t) : t = w[1];
            let F = "restricted" !== E;
            w[2] !== t || w[3] !== F ? (o = {
                appIds: t,
                hostId: a.Xb,
                enabled: F
            }, w[2] = t, w[3] = F, w[4] = o) : o = w[4];
            let {
                data: j
            } = (0, c.c)(o), N = j?.find(e => e.id === v), k = (0, p.a)() ? N?.iconUrlDark ?? N?.iconUrl : N?.iconUrl, O = null == k ? void 0 : (0, f.b)(k);
            w[5] !== T ? (x = "file" === T ? (0, i.jsx)("span", {
                className: (0, r.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, i.jsx)(m, {
                    "aria-hidden": "true"
                })
            }) : (0, i.jsx)(d.Ki, {}), w[5] = T, w[6] = x) : x = w[6];
            let R = x;
            w[7] !== R || w[8] !== E || w[9] !== T || w[10] !== O ? (_ = "restricted" !== E && null != O ? (0, i.jsx)(u.a, {
                className: (0, r.b)("shrink-0", "file" === T ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: O,
                fallback: R
            }, O) : R, w[7] = R, w[8] = E, w[9] = T, w[10] = O, w[11] = _) : _ = w[11];
            let S = _;
            return w[12] !== S || w[13] !== T ? (b = "file" === T ? (0, i.jsx)("span", {
                className: "size-4 shrink-0",
                children: S
            }) : S, w[12] = S, w[13] = T, w[14] = b) : b = w[14], w[15] !== N?.name || w[16] !== I ? (C = I && (N?.name ?? (0, i.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR"
            })), w[15] = N?.name, w[16] = I, w[17] = C) : C = w[17], w[18] !== b || w[19] !== C ? (A = (0, i.jsxs)(i.Fragment, {
                children: [b, C]
            }), w[18] = b, w[19] = C, w[20] = A) : A = w[20], A
        }
    }),
    uzkw: (function(e, t, o) {
        var i = o("Kwur");
        o.d(t, {}, {
            a: function(e) {
                let {
                    connectorId: t,
                    conversationId: o,
                    eventType: n,
                    expectedIdentity: r,
                    messageId: a,
                    pluginId: l,
                    productSurface: s,
                    suggestionMessageId: c
                } = e;
                i.Request.safePost("/unified_user_signals", {
                    expectedIdentity: r,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: s,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: o,
                                message_id: a
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: t ?? "",
                                plugin_id: l,
                                suggestion_message_id: c,
                                event_type: n
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    }),
    RiLw: (function(e, t, o) {
        var i = o("ABep"),
            n = o("QosV"),
            r = o("oyxz"),
            a = o("bf6R"),
            l = o("UxN3"),
            s = o("Y3Vu"),
            c = o("lcwe");
        let d = (0, i.jsx)(l.b, {
            className: c.a.shareIcon,
            icon: {
                16: a.L,
                20: a.M
            }
        });
        o.d(t, {}, {
            a: function(e) {
                let t, o, a, l, c, u, f = (0, n.c)(11);
                f[0] !== e ? ({
                    children: t,
                    facepile: o,
                    leading: l,
                    ...a
                } = e, f[0] = e, f[1] = t, f[2] = o, f[3] = a, f[4] = l) : (t = f[1], o = f[2], a = f[3], l = f[4]);
                let g = void 0 === l ? d : l;
                return f[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, i.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, i.jsx)(r.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    })
                }), f[5] = c) : c = f[5], f[6] !== t || f[7] !== o || f[8] !== g || f[9] !== a ? (u = (0, i.jsxs)(s.a, {
                    focusRing: "inset",
                    ...a,
                    children: [g, o, c, t]
                }), f[6] = t, f[7] = o, f[8] = g, f[9] = a, f[10] = u) : u = f[10], u
            }
        })
    })
};