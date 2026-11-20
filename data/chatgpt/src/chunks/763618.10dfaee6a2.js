export const __rspack_esm_ids = [763618];
export const __webpack_modules__ = {
    UtIV: (function(e, t) {
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
                let d = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, r.b)(e, t),
                        u = (0, i.a)(d, await c.getFollowUpContext(o, !0), !1);
                    if (e.get(n.a)) throw new a.a;
                    await c.editLastUserTurn(o, {
                        ...l,
                        clientUserMessageId: crypto.randomUUID(),
                        writingBlockContextPrepared: null != u,
                        additionalContext: (0, s.a)(o, u?.writingBlocks, l.additionalContext)
                    })
                } catch (e) {
                    d.error = e, d.hasError = !0
                } finally {
                    (0, i.e)(d)
                }
            },
            b: async function(e, t, o, n, a) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, r.b)(e, t),
                        c = (0, i.a)(l, await d.getFollowUpContext(o, !0), !1);
                    await d.retrySafetyBufferedTurn(o, n, a, {
                        additionalContext: (0, s.a)(o, c?.writingBlocks),
                        writingBlockContextPrepared: null != c
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
                        d = (0, i.a)(a, await l.getFollowUpContext(o, !0), !1);
                    await l.startEmptyTurn(o, {
                        ...n,
                        writingBlockContextPrepared: null != d,
                        additionalContext: (0, s.a)(o, d?.writingBlocks, n.additionalContext)
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
                    let d = (0, r.b)(e, t),
                        c = (0, i.a)(a, await d.getFollowUpContext(o, !0), !1);
                    return await d.startTurn(o, {
                        ...n,
                        context: {
                            ...n.context,
                            onRequestDispatched: n.context?.onRequestDispatched ?? (e => {
                                null != n.request.clientUserMessageId && l.a.markRequestDispatched(n.request.clientUserMessageId, e)
                            }),
                            trace: n.context?.trace ?? (null == n.request.clientUserMessageId ? void 0 : l.a.getTrace(n.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != c
                        },
                        request: {
                            ...n.request,
                            additionalContext: (0, s.a)(o, c?.writingBlocks, n.request.additionalContext)
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
        var i = o("lAQI");
        let n = i.L().regex(/^link_[0-9a-f]{32}$/),
            r = i.L().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            a = i.F({
                connector_id: r,
                target_link_id: n
            }),
            l = i.F({
                connector_id: r,
                connector_name: i.L().optional(),
                auth_type: i.p(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: i.L().nullish(),
                auth_reason: i.p(["oauth_upgrade_required", "reauthentication_required"]),
                requested_scopes: i.g(i.L().min(1)).min(1).optional()
            }),
            s = i.F({
                isError: i.z(!1).optional(),
                structuredContent: i.F({
                    kind: i.z("connector_auth_request"),
                    version: i.z(3),
                    status: i.z("requested"),
                    link_id: n
                }),
                _meta: i.F({
                    _codex_apps: i.F({
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
            d = o("tSEg"),
            c = o("WFY2"),
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
                let C = null == b.auth_type ? null : (0, u.p)({
                    id: b.link_id,
                    connector_id: b.connector_id,
                    auth_type: b.auth_type,
                    auth_strategy_id: b.auth_strategy_id
                });
                if ("API_KEY" === b.auth_type && null == C) return;
                let A = e => {
                    if (e.throwIfAborted(), x?.(), t.get(d.j) || "current" !== s.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
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
                            c.a.warning("Failed to deliver connector reconnect follow-up", {
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
            d = o("dQRk"),
            c = o("hx97");

        function u(e, t, o) {
            if (null == t || null == o) return;
            let i = 0,
                r = !1;
            for (let a of e.get(l.c, t) ?? [])
                if ((0, c.o)(a) && (r = !1), "assistant" !== a.author.role || r || (i += 1, r = !0), a.id === o) return i > 0 ? (0, n.a)(i) : void 0
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
                        conversationId: null == t.conversationId ? void 0 : e.get(d.j, t.conversationId) ?? void 0,
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
            d = o("xsLm"),
            c = o("HgLj"),
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
                    d = null != i && l.messageIds.has(i) ? i : void 0;
                if (null != s && (l.messageIds.has(s) || null != d)) return {
                    widgetType: o,
                    messageId: s,
                    assistantMessageId: d
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
                return (0, c.a)(i, o => {
                    if (!t || !o) return;
                    let i = e.get(f);
                    if (i.get(o) !== t.messageId) return (0, d.a)(o, () => {
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
            s = o("UtIV");
        o.d(t, {}, {
            a: function(e) {
                let t, o, d, c, u, f, g, p, m, h, x, _, b, C, A, w, v, y, I = (0, n.c)(43);
                I[0] !== e ? ({
                    ref: f,
                    ActionWrapper: p,
                    ariaLabel: o,
                    icon: d,
                    isActive: m,
                    isTerminalInline: c,
                    label: u,
                    supportingCountLabel: g,
                    testId: x,
                    variant: h,
                    ...t
                } = e, I[0] = e, I[1] = t, I[2] = o, I[3] = d, I[4] = c, I[5] = u, I[6] = f, I[7] = g, I[8] = p, I[9] = m, I[10] = h, I[11] = x) : (t = I[1], o = I[2], d = I[3], c = I[4], u = I[5], f = I[6], g = I[7], p = I[8], m = I[9], h = I[10], x = I[11]);
                let T = void 0 === p ? a.Fragment : p,
                    F = void 0 !== m && m,
                    E = "file" === (void 0 === h ? "default" : h),
                    N = "disabled" in t && t.disabled,
                    k = N ? "cursor-default" : "group cursor-interaction",
                    O = !E && !N && "hover:bg-secondary-soft-hover hover:text-default!",
                    j = E && s.a.palette,
                    R = E && s.a.filePill;
                I[12] !== F || I[13] !== E || I[14] !== k || I[15] !== O || I[16] !== j || I[17] !== R ? (_ = (0, r.b)("min-w-0 no-underline!", k, O, j, R, E ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, r.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", F ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), I[12] = F, I[13] = E, I[14] = k, I[15] = O, I[16] = j, I[17] = R, I[18] = _) : _ = I[18];
                let S = _;
                I[19] !== E || I[20] !== g ? (b = null == g ? null : (0, i.jsx)("span", {
                    className: (0, r.b)("text-inherit", E ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: g
                }), I[19] = E, I[20] = g, I[21] = b) : b = I[21];
                let P = b;
                I[22] !== d || I[23] !== E || I[24] !== u || I[25] !== P ? (C = E ? (0, i.jsxs)(i.Fragment, {
                    children: [d, (0, i.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: u
                    }), P]
                }) : (0, i.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, i.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [d, (0, i.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: u
                        })]
                    }), P]
                }), I[22] = d, I[23] = E, I[24] = u, I[25] = P, I[26] = C) : C = I[26];
                let L = C,
                    M = E && "relative",
                    U = E && c ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return I[27] !== M || I[28] !== U ? (A = (0, r.b)("ms-1 inline-flex max-w-full min-w-0 items-center font-sans select-none", M, U), I[27] = M, I[28] = U, I[29] = A) : A = I[29], I[30] !== t || I[31] !== o || I[32] !== S || I[33] !== L || I[34] !== x ? (w = "href" in t ? (0, i.jsx)(l.a, {
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
                    children: L
                }) : (0, i.jsx)("button", {
                    className: S,
                    "aria-label": o,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: L
                }), I[30] = t, I[31] = o, I[32] = S, I[33] = L, I[34] = x, I[35] = w) : w = I[35], I[36] !== T || I[37] !== w ? (v = (0, i.jsx)(T, {
                    children: w
                }), I[36] = T, I[37] = w, I[38] = v) : v = I[38], I[39] !== f || I[40] !== A || I[41] !== v ? (y = (0, i.jsx)("span", {
                    ref: f,
                    className: A,
                    children: v
                }), I[39] = f, I[40] = A, I[41] = v, I[42] = y) : y = I[42], y
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
            d = o("osar"),
            c = o("eFVb"),
            u = o("W2tE"),
            f = o("v5fl"),
            g = o("Sm6l"),
            p = o("JNtf"),
            m = o("mUDD"),
            h = o("zLIa"),
            x = o("sF0J"),
            _ = o("E1V6");

        function b(e) {
            let t, o, s, b, y, I, T, F = (0, n.c)(31),
                {
                    canConfirm: E,
                    context: N,
                    description: k,
                    imageUrls: O,
                    onCancel: j,
                    onConfirm: R,
                    prompt: S,
                    title: P
                } = e,
                L = void 0 === E || E,
                M = (0, a.a)();
            F[0] !== S ? (t = () => {
                let e = (0, c.b)(S, {
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
            }, F[0] = S, F[1] = t) : t = F[1];
            let [U] = (0, r.useState)(t), {
                controller: q,
                destroy: z
            } = U;
            (0, _.b)(z, q);
            let D = (0, f.b)(q, A, "document"),
                [B, W] = (0, r.useState)(N);
            F[2] !== N ? (o = v(N), F[2] = N, F[3] = o) : o = F[3];
            let V = o,
                [G, X] = (0, r.useState)(V),
                [H, K] = (0, r.useState)("prompt");
            F[4] !== G ? (s = function(e) {
                try {
                    return (0, x.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(G), F[4] = G, F[5] = s) : s = F[5];
            let Q = s;
            F[6] !== L || F[7] !== B || F[8] !== q || F[9] !== R ? (b = () => {
                let e = q.getText().trim();
                L && e.length > 0 && R((0, x.a)({
                    context: B,
                    prompt: e
                }))
            }, F[6] = L, F[7] = B, F[8] = q, F[9] = R, F[10] = b) : b = F[10];
            let Y = b;
            return F[11] !== j ? (y = e => {
                e || j()
            }, F[11] = j, F[12] = y) : y = F[12], F[13] !== L || F[14] !== Y || F[15] !== B || F[16] !== G || F[17] !== q || F[18] !== k || F[19] !== D || F[20] !== O || F[21] !== V || F[22] !== M || F[23] !== j || F[24] !== Q || F[25] !== P || F[26] !== H ? (I = "prompt" === H ? (0, i.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), Y()
                },
                children: [(0, i.jsx)(w, {
                    description: k,
                    title: P
                }), (0, i.jsx)(d.a, {
                    paddingVariant: "inset",
                    children: (0, i.jsx)(d.a.Body, {
                        children: (0, i.jsx)(u.a, {
                            ariaLabel: M.formatMessage({
                                id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                defaultMessage: "Prompt"
                            }),
                            composerController: q,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: Y
                        })
                    })
                }), null != O && O.length > 0 ? (0, i.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: O.map(C)
                }) : null, null != B ? (0, i.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        X(v(B)), K("widget-state")
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
                        onClick: j,
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, i.jsx)(g.a, {
                        disabled: !L || !D,
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
                    title: (0, i.jsx)(p.f, {
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state"
                        })
                    }),
                    subtitle: (0, i.jsx)(p.e, {
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
                    "aria-label": M.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: G,
                    onChange: e => {
                        X(e.target.value)
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
                        disabled: G === V,
                        type: "button",
                        onClick: () => {
                            X(V)
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
                            X(v(B)), K("prompt")
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
            }), F[13] = L, F[14] = Y, F[15] = B, F[16] = G, F[17] = q, F[18] = k, F[19] = D, F[20] = O, F[21] = V, F[22] = M, F[23] = j, F[24] = Q, F[25] = P, F[26] = H, F[27] = I) : I = F[27], F[28] !== y || F[29] !== I ? (T = (0, i.jsx)(p.a, {
                open: !0,
                onOpenChange: y,
                size: "wide",
                children: I
            }), F[28] = y, F[29] = I, F[30] = T) : T = F[30], T
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
            let t, o, r, a, s, d = (0, n.c)(11),
                {
                    description: c,
                    title: u
                } = e;
            return d[0] !== u ? (t = u ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?"
            }), d[0] = u, d[1] = t) : t = d[1], d[2] !== t ? (o = (0, i.jsx)(p.f, {
                children: t
            }), d[2] = t, d[3] = o) : o = d[3], d[4] !== c ? (r = c ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt"
            }), d[4] = c, d[5] = r) : r = d[5], d[6] !== r ? (a = (0, i.jsx)(p.e, {
                className: "text-secondary",
                children: r
            }), d[6] = r, d[7] = a) : a = d[7], d[8] !== o || d[9] !== a ? (s = (0, i.jsx)(m.d, {
                title: o,
                subtitle: a
            }), d[8] = o, d[9] = a, d[10] = s) : s = d[10], s
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
            n = o("lAQI"),
            r = o("sS8e");
        let a = n.F({
            context: i.c.optional(),
            isVisible: n.j().optional(),
            prompt: n.L().trim().min(1),
            title: n.L().trim().min(1).max(250).optional()
        }).strip();

        function l(e) {
            let t = a.safeParse(e);
            if (!t.success) throw (0, r.c)("Invalid follow-up message", -32602);
            return t.data
        }

        function s(e) {
            let {
                context: t,
                prompt: o
            } = e;
            return null == t ? o : `${o}

Current widget context (JSON):
${(0,i.b)(t)}`
        }
        o.d(t, {
            a: () => s,
            b: () => i.a,
            c: () => l,
            d: () => i.b
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
                                let i = d(e, t, o, "color"),
                                    n = d(e, t, "--color-surface-tertiary", "color");
                                if (null != i && null != n) return `color-mix(in srgb, ${i} 12%, ${n})`
                            };
                        try {
                            let n, r, a, l, s, c, u, f, g, p, m, h, x, _, b, C, A, w, v, y, I, T, F, E, N, k, O, j, R, S, P, L, M, U, q, z;
                            return {
                                "--color-background-primary": (n = "--app-color-background-surface", d(e, t, n, "color") ?? (r = "--color-surface-tertiary", d(e, t, r, "color"))),
                                "--color-background-secondary": (a = "--color-surface-elevated", d(e, t, a, "color")),
                                "--color-background-tertiary": (l = "--color-surface-secondary", d(e, t, l, "color")),
                                "--color-background-inverse": (s = "--color-text", d(e, t, s, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (c = "--codex-theme-accent-background-subtle", d(e, t, c, "color") ?? (u = "--color-background-info-surface", d(e, t, u, "color"))),
                                "--color-background-danger": (f = "--color-background-danger-surface", d(e, t, f, "color")),
                                "--color-background-success": i("--color-codex-git-added"),
                                "--color-background-warning": i("--color-text-warning"),
                                "--color-background-disabled": (g = "--color-background-primary-soft-active", d(e, t, g, "color")),
                                "--color-text-primary": (p = "--color-text", d(e, t, p, "color")),
                                "--color-text-secondary": (m = "--color-text-secondary", d(e, t, m, "color")),
                                "--color-text-tertiary": (h = "--color-codex-description", d(e, t, h, "color")),
                                "--color-text-inverse": (x = "--color-text-inverse", d(e, t, x, "color") ?? (_ = "--color-surface-tertiary", d(e, t, _, "color"))),
                                "--color-text-ghost": (b = "--color-codex-description", d(e, t, b, "color")),
                                "--color-text-info": (C = "--color-text-info", d(e, t, C, "color")),
                                "--color-text-danger": (A = "--color-text-danger", d(e, t, A, "color")),
                                "--color-text-success": (w = "--color-codex-git-added", d(e, t, w, "color")),
                                "--color-text-warning": (v = "--color-text-warning", d(e, t, v, "color")),
                                "--color-text-disabled": (y = "--color-codex-description", d(e, t, y, "color")),
                                "--color-border-primary": (I = "--color-border-primary-outline", d(e, t, I, "color")),
                                "--color-border-secondary": (T = "--color-border", d(e, t, T, "color")),
                                "--color-border-tertiary": (F = "--color-border", d(e, t, F, "color")),
                                "--color-border-inverse": (E = "--color-text", d(e, t, E, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (N = "--color-ring", d(e, t, N, "color")),
                                "--color-border-danger": (k = "--color-text-danger", d(e, t, k, "color")),
                                "--color-border-success": (O = "--color-codex-git-added", d(e, t, O, "color")),
                                "--color-border-warning": (j = "--color-text-warning", d(e, t, j, "color")),
                                "--color-border-disabled": (R = "--color-border-primary-outline", d(e, t, R, "color")),
                                "--color-ring-primary": (S = "--color-ring", d(e, t, S, "color")),
                                "--color-ring-secondary": (P = "--color-ring", d(e, t, P, "color")),
                                "--color-ring-inverse": (L = "--color-ring", d(e, t, L, "color")),
                                "--color-ring-info": (M = "--color-ring", d(e, t, M, "color")),
                                "--color-ring-danger": (U = "--color-text-danger", d(e, t, U, "color")),
                                "--color-ring-success": (q = "--color-codex-git-added", d(e, t, q, "color")),
                                "--color-ring-warning": (z = "--color-text-warning", d(e, t, z, "color")),
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

        function d(e, t, o, i) {
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
        var i = o("lAQI");
        let n = i.L().regex(/^[A-Za-z0-9_-]{1,128}$/),
            r = i.F({
                connectedPluginIds: i.g(i.L()).optional(),
                declinedPluginIds: i.g(i.L()).optional()
            }).catchall(i.x()),
            a = i.F({
                pluginId: i.L().min(1),
                suggestionId: n.optional()
            }),
            l = i.F({
                type: i.z("event"),
                label: i.z("chatgpt_plugin_management_suggestion_impression"),
                payload: i.F({
                    remote_plugin_id: i.L().min(1).max(256),
                    plugin_ids: i.g(i.L().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: n
                })
            }),
            s = l.extend({
                label: i.z("chatgpt_plugin_management_suggestion_shown"),
                payload: l.shape.payload.extend({
                    suggestion_id: n.optional(),
                    plugin_ids: i.g(i.L().min(1).max(256)).min(1).max(10)
                })
            }),
            d = i.m("label", [l, s]),
            c = i.F({
                kind: i.z("plugin_suggestions"),
                version: i.z(1),
                suggestions: i.g(i.F({
                    plugin_id: i.L().min(1),
                    display_name: i.L().min(1)
                }))
            }),
            u = i.F({
                "openai/plugin_suggestion_id": n.optional(),
                "openai/plugin_suggestion_connector_ids": i.J(i.L(), i.L().min(1)).optional().catch(void 0)
            });
        o.d(t, {}, {
            a: a,
            b: d,
            c: u,
            d: r,
            e: c
        })
    }),
    LGZt: (function(e, t, o) {
        var i = o("UKCO");
        o.d(t, {}, {
            a: function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, i.Pg)(t),
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
            d = o("zd8w"),
            c = o("KxMp"),
            u = o("bf6R"),
            f = o("zSQm"),
            g = o("WAdu");

        function p(e) {
            let t, o, r, a, l, s, d, c = (0, n.c)(23),
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
            c[0] !== g ? (t = g?.includes("\n"), c[0] = g, c[1] = t) : t = c[1];
            let b = t,
                C = _ ? -1 : void 0;
            return c[2] !== m ? (o = (0, i.jsx)("div", {
                className: "branding-xlBboz",
                children: m
            }), c[2] = m, c[3] = o) : o = c[3], c[4] !== u ? (r = (0, i.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), c[4] = u, c[5] = r) : r = c[5], c[6] !== f ? (a = null != f && (0, i.jsx)("div", {
                className: "subtitle-gArrij",
                children: f
            }), c[6] = f, c[7] = a) : a = c[7], c[8] !== g || c[9] !== b || c[10] !== _ || c[11] !== C || c[12] !== u ? (l = null != g && (0, i.jsx)("div", {
                className: b || _ ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: b ? 0 : C,
                children: g
            }), c[8] = g, c[9] = b, c[10] = _, c[11] = C, c[12] = u, c[13] = l) : l = c[13], c[14] !== h ? (s = null != h && (0, i.jsx)("div", {
                className: "followUp-otVo0x",
                children: h
            }), c[14] = h, c[15] = s) : s = c[15], c[16] !== x || c[17] !== o || c[18] !== r || c[19] !== a || c[20] !== l || c[21] !== s ? (d = (0, i.jsxs)("div", {
                className: "content-cuuiWn",
                children: [o, r, a, l, x, s]
            }), c[16] = x, c[17] = o, c[18] = r, c[19] = a, c[20] = l, c[21] = s, c[22] = d) : d = c[22], d
        }
        var m = o("Nfif");

        function h(e) {
            let t, o, r, s, c = (0, n.c)(32),
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
                [y, I] = (0, d.useState)(!1);
            if (null == g.hoverCard && null == w && "file" !== A && !b && v) {
                let e, t, o = !!h || void 0;
                return c[0] !== u ? (e = (0, i.jsx)("span", {
                    className: "inline-flex max-w-full",
                    children: u
                }), c[0] = u, c[1] = e) : e = c[1], c[2] !== f || c[3] !== g.title || c[4] !== o || c[5] !== e ? (t = (0, i.jsx)(l.a, {
                    content: g.title,
                    disabled: f,
                    forceOpen: o,
                    children: e
                }), c[2] = f, c[3] = g.title, c[4] = o, c[5] = e, c[6] = t) : t = c[6], t
            }
            let T = g.title;
            if (null != w) {
                let e;
                c[7] !== m || c[8] !== g || c[9] !== A || c[10] !== w || c[11] !== p ? (e = w({
                    metadata: g,
                    sourceAppId: p,
                    followUp: m,
                    presentation: A
                }), c[7] = m, c[8] = g, c[9] = A, c[10] = w, c[11] = p, c[12] = e) : e = c[12], T = e
            } else if (null != g.hoverCard) {
                let e;
                c[13] !== m || c[14] !== g || c[15] !== A || c[16] !== p ? (e = (0, i.jsx)(_, {
                    metadata: g,
                    sourceAppId: p,
                    followUp: m,
                    presentation: A
                }), c[13] = m, c[14] = g, c[15] = A, c[16] = p, c[17] = e) : e = c[17], T = e
            }
            let F = !f && (h || y);
            c[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => I(!0), c[18] = t) : t = c[18], c[19] !== u || c[20] !== v || c[21] !== b ? (o = (0, i.jsx)(x, {
                openOnClick: b,
                closeOnTriggerClick: v,
                onOpen: t,
                children: u
            }), c[19] = u, c[20] = v, c[21] = b, c[22] = o) : o = c[22];
            let E = "file" === A ? 344 : 320,
                N = "file" === A ? 10 : 6;
            return c[23] !== T || c[24] !== g.title || c[25] !== E || c[26] !== N ? (r = (0, i.jsx)(a.a.Content, {
                "aria-label": g.title,
                minWidth: "auto",
                maxWidth: E,
                align: "start",
                side: "bottom",
                sideOffset: N,
                children: T
            }), c[23] = T, c[24] = g.title, c[25] = E, c[26] = N, c[27] = r) : r = c[27], c[28] !== F || c[29] !== o || c[30] !== r ? (s = (0, i.jsxs)(a.a, {
                showOnHover: !0,
                open: F,
                onOpenChange: I,
                children: [o, r]
            }), c[28] = F, c[29] = o, c[30] = r, c[31] = s) : s = c[31], s
        }

        function x(e) {
            let t, o, r, l = (0, n.c)(10),
                {
                    children: s,
                    openOnClick: d,
                    closeOnTriggerClick: c,
                    onOpen: u
                } = e,
                {
                    close: f
                } = (0, a.b)();
            return l[0] !== f || l[1] !== c || l[2] !== u || l[3] !== d ? (t = e => {
                d && c || (e.preventDefault(), d ? u() : f())
            }, l[0] = f, l[1] = c, l[2] = u, l[3] = d, l[4] = t) : t = l[4], l[5] !== s ? (o = (0, i.jsx)("span", {
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
                I = (0, d.useContext)(g.a);
            if (C[0] !== A.icons?.[0]) {
                let {
                    data: e
                } = r.v.safeParse(A.icons?.[0]), o = e?.src;
                t = null == o ? void 0 : (0, f.b)(o), C[0] = A.icons?.[0], C[1] = t
            } else t = C[1];
            let T = t;
            C[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.jsx)(u.Pi, {}), C[2] = o) : o = C[2];
            let F = o;
            if ("restricted" !== I) {
                if (null != A.url) {
                    let e;
                    C[3] !== A.url ? (e = (0, i.jsx)(c.a, {
                        href: A.url,
                        className: "size-4"
                    }), C[3] = A.url, C[4] = e) : e = C[4], F = e
                } else if (null != T) {
                    let e, t, o = null == w && "dark:brightness-0 dark:invert";
                    C[5] !== o ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", o), C[5] = o, C[6] = e) : e = C[6], C[7] !== T || C[8] !== e ? (t = (0, i.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: T
                    }), C[7] = T, C[8] = e, C[9] = t) : t = C[9], F = t
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
            let E = A.hoverCard?.title ?? A.title;
            return C[35] !== E ? (a = (0, i.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: E
            }), C[35] = E, C[36] = a) : a = C[36], C[37] !== A.hoverCard ? (l = A.hoverCard?.subtitle != null && (0, i.jsx)("div", {
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
            }), C[42] = A.hoverCard, C[43] = A.title, C[44] = x) : x = C[44], C[45] !== F || C[46] !== A.hoverCard?.title || C[47] !== A.title ? (_ = A.hoverCard?.title != null && (0, i.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [F, (0, i.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: A.title
                })]
            }), C[45] = F, C[46] = A.hoverCard?.title, C[47] = A.title, C[48] = _) : _ = C[48], C[49] !== h || C[50] !== x || C[51] !== _ ? (b = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, _]
            }), C[49] = h, C[50] = x, C[51] = _, C[52] = b) : b = C[52], b
        }
    }),
    JAYD: (function(e, t, o) {
        var i = o("Q840"),
            n = o("UKCO"),
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
                hostId: n._b,
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
            a = o("UKCO"),
            l = o("zd8w"),
            s = o("oyxz"),
            d = o("BQbE"),
            c = o("bf6R"),
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
            h = o("UtIV");

        function x(e) {
            let t, o, x, _, b, C, A, w = (0, n.c)(21),
                {
                    appId: v,
                    showName: y,
                    presentation: I
                } = e,
                T = void 0 !== y && y,
                F = (0, l.useContext)(g.a);
            w[0] !== v ? (t = [v], w[0] = v, w[1] = t) : t = w[1];
            let E = "restricted" !== F;
            w[2] !== t || w[3] !== E ? (o = {
                appIds: t,
                hostId: a._b,
                enabled: E
            }, w[2] = t, w[3] = E, w[4] = o) : o = w[4];
            let {
                data: N
            } = (0, d.c)(o), k = N?.find(e => e.id === v), O = (0, p.a)() ? k?.iconUrlDark ?? k?.iconUrl : k?.iconUrl, j = null == O ? void 0 : (0, f.b)(O);
            w[5] !== I ? (x = "file" === I ? (0, i.jsx)("span", {
                className: (0, r.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, i.jsx)(m, {
                    "aria-hidden": "true"
                })
            }) : (0, i.jsx)(c.Pi, {}), w[5] = I, w[6] = x) : x = w[6];
            let R = x;
            w[7] !== R || w[8] !== F || w[9] !== I || w[10] !== j ? (_ = "restricted" !== F && null != j ? (0, i.jsx)(u.a, {
                className: (0, r.b)("shrink-0", "file" === I ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: j,
                fallback: R
            }, j) : R, w[7] = R, w[8] = F, w[9] = I, w[10] = j, w[11] = _) : _ = w[11];
            let S = _;
            return w[12] !== S || w[13] !== I ? (b = "file" === I ? (0, i.jsx)("span", {
                className: "size-4 shrink-0",
                children: S
            }) : S, w[12] = S, w[13] = I, w[14] = b) : b = w[14], w[15] !== k?.name || w[16] !== T ? (C = T && (k?.name ?? (0, i.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR"
            })), w[15] = k?.name, w[16] = T, w[17] = C) : C = w[17], w[18] !== b || w[19] !== C ? (A = (0, i.jsxs)(i.Fragment, {
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
                    suggestionMessageId: d
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
                                suggestion_message_id: d,
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
            r = o("on57"),
            a = o("Wf1j"),
            l = o("oyxz"),
            s = o("bf6R"),
            d = o("syEl"),
            c = o("UxN3"),
            u = o("Y3Vu"),
            f = o("oP6N");
        let g = (0, i.jsx)(c.b, {
            className: f.a.shareIcon,
            icon: {
                16: s.N,
                20: s.O
            }
        });
        o.d(t, {}, {
            a: function(e) {
                let t, o, s, c, p, m, h, x, _ = (0, n.c)(24);
                _[0] !== e ? ({
                    children: t,
                    className: o,
                    facepile: s,
                    iconOnly: p,
                    leading: m,
                    ...c
                } = e, _[0] = e, _[1] = t, _[2] = o, _[3] = s, _[4] = c, _[5] = p, _[6] = m) : (t = _[1], o = _[2], s = _[3], c = _[4], p = _[5], m = _[6]);
                let b = void 0 !== p && p,
                    C = void 0 === m ? g : m,
                    A = (0, a.a)();
                if (b) {
                    let e, t, n;
                    _[7] !== A ? (e = A.formatMessage({
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    }), _[7] = A, _[8] = e) : e = _[8];
                    let a = e;
                    return _[9] !== o || _[10] !== s || _[11] !== a || _[12] !== c ? (t = e => (0, i.jsxs)(u.a, {
                        focusRing: "inset",
                        ...c,
                        ...e,
                        className: (0, r.b)(o, null != s && f.a.iconShareWithFacepile),
                        uniform: null == s,
                        "aria-label": a,
                        children: [s, g]
                    }), _[9] = o, _[10] = s, _[11] = a, _[12] = c, _[13] = t) : t = _[13], _[14] !== a || _[15] !== t ? (n = (0, i.jsx)(d.b, {
                        content: a,
                        describeTrigger: !1,
                        children: t
                    }), _[14] = a, _[15] = t, _[16] = n) : n = _[16], n
                }
                return _[17] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, i.jsx)(l.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    })
                }), _[17] = h) : h = _[17], _[18] !== t || _[19] !== o || _[20] !== s || _[21] !== C || _[22] !== c ? (x = (0, i.jsxs)(u.a, {
                    focusRing: "inset",
                    className: o,
                    ...c,
                    children: [C, s, h, t]
                }), _[18] = t, _[19] = o, _[20] = s, _[21] = C, _[22] = c, _[23] = x) : x = _[23], x
            }
        })
    })
};