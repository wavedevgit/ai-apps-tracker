export const __rspack_esm_ids = [101842];
export const __webpack_modules__ = {
    ZRyR: (function(e, t) {
        t.a = {
            palette: "palette-CKhGNn",
            fileHoverCard: "fileHoverCard-_SxMgK",
            filePill: "filePill-w54qyB",
            connectorIcon: "connectorIcon-XtxEBs",
            connectorFallback: "connectorFallback-pFpRwt",
            questionButton: "questionButton-LdbTc0"
        }
    }),
    piij: (function(e, t, i) {
        e.exports = i.p + "assets/space-recovery.105d9c61fe.png"
    }),
    VvpR: (function(e, t, i) {
        var n = i("SRbQ"),
            a = i("Y5Sy"),
            o = i("Dgwo"),
            r = i("dF4Z"),
            l = i("Oo9D"),
            s = i("NTGw"),
            c = i("syw5");
        i.d(t, {}, {
            a: async function(e, t, i, s) {
                let {
                    localComposerFormat: d,
                    ...u
                } = s, p = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, o.b)(e, t),
                        f = (0, n.a)(p, await s.getFollowUpContext(i, !0), !1);
                    if (e.get(a.a)) throw new r.a;
                    let g = crypto.randomUUID();
                    if (await (0, l.d)(e, t, g, d), e.get(a.a)) throw new r.a;
                    await s.editLastUserTurn(i, {
                        ...u,
                        clientUserMessageId: g,
                        writingBlockContextPrepared: null != f,
                        additionalContext: (0, c.a)(i, f?.writingBlocks, u.additionalContext)
                    })
                } catch (e) {
                    p.error = e, p.hasError = !0
                } finally {
                    (0, n.e)(p)
                }
            },
            b: async function(e, t, i, a, r) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, o.b)(e, t),
                        d = (0, n.a)(l, await s.getFollowUpContext(i, !0), !1);
                    await s.retrySafetyBufferedTurn(i, a, r, {
                        additionalContext: (0, c.a)(i, d?.writingBlocks),
                        writingBlockContextPrepared: null != d
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, n.e)(l)
                }
            },
            c: async function(e, t, i, a) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, o.b)(e, t),
                        s = (0, n.a)(r, await l.getFollowUpContext(i, !0), !1);
                    await l.startEmptyTurn(i, {
                        ...a,
                        writingBlockContextPrepared: null != s,
                        additionalContext: (0, c.a)(i, s?.writingBlocks, a.additionalContext)
                    })
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, n.e)(r)
                }
            },
            d: async function(e, t, i, a) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, o.b)(e, t),
                        d = (0, n.a)(r, await l.getFollowUpContext(i, !0), !1);
                    return await l.startTurn(i, {
                        ...a,
                        context: {
                            ...a.context,
                            onRequestDispatched: a.context?.onRequestDispatched ?? (e => {
                                null != a.request.clientUserMessageId && s.a.markRequestDispatched(a.request.clientUserMessageId, e)
                            }),
                            trace: a.context?.trace ?? (null == a.request.clientUserMessageId ? void 0 : s.a.getTrace(a.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != d
                        },
                        request: {
                            ...a.request,
                            additionalContext: (0, c.a)(i, d?.writingBlocks, a.request.additionalContext)
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
    bmU4: (function(e, t, i) {
        var n = i("iRMi"),
            a = i("yGJW"),
            o = i("YTYy");
        let r = {
            pptx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        i.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, i) {
                let {
                    importKind: n
                } = e;
                if ("pptx" !== n && "xlsx" !== n && "csv" !== n && "tsv" !== n || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let a = t?.target,
                    o = null != a && "fileId" in a ? a.fileId : void 0,
                    r = i?.libraryFileId ?? (null != a && "libraryFileId" in a ? a.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: n,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != o && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(o) ? o : void 0,
                    libraryFileId: null != r && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(r) ? r : void 0
                }
            },
            c: function(e, t, i, l) {
                if (null == t) return;
                let s = t.threadId ?? void 0;
                (0, a.a)(e, n.CodexArtifactFileActionClicked, {
                    artifactKind: "pptx" === t.sourceFormat || "native-slides" === t.sourceFormat ? n.CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION : n.CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET,
                    backing: {
                        file: n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_FILE,
                        "native-page": n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_NATIVE_PAGE,
                        "artifact-session": n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_ARTIFACT_SESSION
                    } [t.backing],
                    sourceFormat: r[t.sourceFormat],
                    surface: "output-card" === t.surface ? n.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_OUTPUT_CARD : n.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_VIEWER,
                    action: {
                        download: n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_DOWNLOAD,
                        export: n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_EXPORT,
                        "open-in-app": n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_OPEN_IN_APP
                    } [i],
                    targetFormat: null == l.format ? void 0 : r[l.format],
                    targetApp: l.app,
                    productExperience: (0, o.a)(e, s),
                    threadId: s,
                    turnId: t.turnId ?? void 0,
                    pageId: t.pageId,
                    fileId: t.fileId,
                    libraryFileId: t.libraryFileId
                })
            }
        })
    }),
    xof2: (function(e, t, i) {
        var n = i("EA6X"),
            a = i("D015"),
            o = i("yGJW"),
            r = i("OMIV"),
            l = i("CTBG"),
            s = i("Kwur"),
            c = i("dQRk"),
            d = i("hx97");

        function u(e, t, i) {
            if (null == t || null == i) return;
            let n = 0,
                o = !1;
            for (let r of e.get(l.c, t) ?? [])
                if ((0, d.m)(r) && (o = !1), "assistant" !== r.author.role || o || (n += 1, o = !0), r.id === i) return n > 0 ? (0, a.a)(n) : void 0
        }

        function p(e, t) {
            let i = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == i ? void 0 : {
                    entity_id: i.entityId,
                    entity_category: i.entityCategory,
                    widget_type: i.widgetType,
                    widget_name: i.widgetName,
                    content_reference_start_index: i.contentReferenceStartIndex,
                    message_id: i.messageId
                }
            }
        }

        function f(e, t) {
            return Math.random() < (e.get(r.f)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function g(e, t, i) {
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
                            ...p(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: i
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
                            ...p(t, t.actionType),
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
                            ...p(t, t.actionType),
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
        i.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let i = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(c.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    m(e, i), (0, o.a)(e, n.c, i)
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
                                ...p(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, o.a)(e, n.e, t)
            },
            d: function(e, t) {
                h(e, t), (0, o.a)(e, n.g, t)
            },
            e: function(e, t) {
                m(e, t), (0, o.a)(e, n.c, t)
            },
            f: function(e, t) {
                g(e, t), (0, o.a)(e, n.j, t)
            },
            g: h,
            h: g
        })
    }),
    PxnS: (function(e, t, i) {
        var n = i("EA6X"),
            a = i("lSdY"),
            o = i("BolX"),
            r = i("aiHW"),
            l = i("yGJW"),
            s = i("OWtl"),
            c = i("xsLm"),
            d = i("HgLj"),
            u = i("XW2n");
        let p = (0, o.u)(s.a, () => new WeakMap),
            f = (0, o.d)(s.a, (e, t) => {
                let {
                    widgetType: i,
                    turnMessageId: n,
                    sourceMessageId: o
                } = e, {
                    get: r
                } = t, l = r(u.b);
                if (l?.productExperience !== a.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let s = o ?? n,
                    c = null != n && l.messageIds.has(n) ? n : void 0;
                if (null != s && (l.messageIds.has(s) || null != c)) return {
                    widgetType: i,
                    messageId: s,
                    assistantMessageId: c
                }
            });

        function g(e, t, i, a) {
            (0, l.a)(e, n.j, {
                ...t,
                actionType: i,
                widgetActionTarget: a,
                surfaceLocation: n.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === t.widgetType || void 0
            })
        }
        i.d(t, {}, {
            a: function(e, t, i, n) {
                return (0, d.a)(n, i => {
                    if (!t || !i) return;
                    let n = e.get(p);
                    if (n.get(i) !== t.messageId) return (0, c.a)(i, () => {
                        for (let e = (0, r.a)(i); e; e = (0, r.a)(e))
                            if (e.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return n.set(i, t.messageId), g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(i)
            },
            b: function(e, t, i) {
                t && g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", i)
            },
            c: f
        })
    }),
    r21w: (function(e, t, i) {
        i.d(t, {
            a: () => r
        });
        var n = i("ABep"),
            a = i("QosV"),
            o = i("on57");

        function r(e) {
            let t, i, r, l, s = (0, a.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...i
            } = e, s[0] = e, s[1] = t, s[2] = i) : (t = s[1], i = s[2]), s[3] !== t ? (r = (0, o.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = r) : r = s[4], s[5] !== i || s[6] !== r ? (l = (0, n.jsx)("div", {
                className: r,
                ...i
            }), s[5] = i, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    vYmP: (function(e, t, i) {
        var n = i("ABep"),
            a = i("QosV"),
            o = i("on57"),
            r = i("zd8w"),
            l = i("ZtSy"),
            s = i("ZRyR");
        i.d(t, {}, {
            a: function(e) {
                let t, i, c, d, u, p, f, g, m, h, x, C, _, A, y, b, v, w, T = (0, a.c)(43);
                T[0] !== e ? ({
                    ref: p,
                    ActionWrapper: g,
                    ariaLabel: i,
                    icon: c,
                    isActive: m,
                    isTerminalInline: d,
                    label: u,
                    supportingCountLabel: f,
                    testId: x,
                    variant: h,
                    ...t
                } = e, T[0] = e, T[1] = t, T[2] = i, T[3] = c, T[4] = d, T[5] = u, T[6] = p, T[7] = f, T[8] = g, T[9] = m, T[10] = h, T[11] = x) : (t = T[1], i = T[2], c = T[3], d = T[4], u = T[5], p = T[6], f = T[7], g = T[8], m = T[9], h = T[10], x = T[11]);
                let I = void 0 === g ? r.Fragment : g,
                    E = void 0 !== m && m,
                    F = "file" === (void 0 === h ? "default" : h),
                    j = "disabled" in t && t.disabled,
                    N = j ? "cursor-default" : "group cursor-interaction",
                    M = !F && !j && "hover:bg-secondary-soft-hover hover:text-default!",
                    R = F && s.a.palette,
                    O = F && s.a.filePill;
                T[12] !== E || T[13] !== F || T[14] !== N || T[15] !== M || T[16] !== R || T[17] !== O ? (C = (0, o.b)("no-underline!", N, M, R, O, F ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, o.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", E ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), T[12] = E, T[13] = F, T[14] = N, T[15] = M, T[16] = R, T[17] = O, T[18] = C) : C = T[18];
                let k = C;
                T[19] !== F || T[20] !== f ? (_ = null == f ? null : (0, n.jsx)("span", {
                    className: (0, o.b)("text-inherit", F ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: f
                }), T[19] = F, T[20] = f, T[21] = _) : _ = T[21];
                let P = _;
                T[22] !== c || T[23] !== F || T[24] !== u || T[25] !== P ? (A = F ? (0, n.jsxs)(n.Fragment, {
                    children: [c, (0, n.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: u
                    }), P]
                }) : (0, n.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [c, (0, n.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: u
                        })]
                    }), P]
                }), T[22] = c, T[23] = F, T[24] = u, T[25] = P, T[26] = A) : A = T[26];
                let S = A,
                    L = F && "relative",
                    D = F && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return T[27] !== L || T[28] !== D ? (y = (0, o.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", L, D), T[27] = L, T[28] = D, T[29] = y) : y = T[29], T[30] !== t || T[31] !== i || T[32] !== k || T[33] !== S || T[34] !== x ? (b = "href" in t ? (0, n.jsx)(l.a, {
                    className: k,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": x,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": i,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: S
                }) : (0, n.jsx)("button", {
                    className: k,
                    "aria-label": i,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: S
                }), T[30] = t, T[31] = i, T[32] = k, T[33] = S, T[34] = x, T[35] = b) : b = T[35], T[36] !== I || T[37] !== b ? (v = (0, n.jsx)(I, {
                    children: b
                }), T[36] = I, T[37] = b, T[38] = v) : v = T[38], T[39] !== p || T[40] !== y || T[41] !== v ? (w = (0, n.jsx)("span", {
                    ref: p,
                    className: y,
                    children: v
                }), T[39] = p, T[40] = y, T[41] = v, T[42] = w) : w = T[42], w
            }
        })
    }),
    iIHp: (function(e, t, i) {
        var n = i("QosV"),
            a = i("zd8w");
        class o {
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
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, i) => {
                this.pendingRequest = {
                    confirmation: e,
                    reject: i,
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
        i.d(t, {}, {
            a: function(e) {
                let t, i, r = (0, n.c)(7);
                r[0] !== e ? (t = () => new o(e), r[0] = e, r[1] = t) : t = r[1];
                let [l] = (0, a.useState)(t), s = (0, a.useSyncExternalStore)(l.subscribe, l.getSnapshot, l.getSnapshot);
                return r[2] !== s || r[3] !== l.cancel || r[4] !== l.confirm || r[5] !== l.request ? (i = {
                    cancel: l.cancel,
                    confirmation: s,
                    confirm: l.confirm,
                    request: l.request
                }, r[2] = s, r[3] = l.cancel, r[4] = l.confirm, r[5] = l.request, r[6] = i) : i = r[6], i
            }
        })
    }),
    v7ut: (function(e, t, i) {
        var n = i("ABep"),
            a = i("QosV"),
            o = i("zd8w"),
            r = i("Wf1j"),
            l = i("oyxz"),
            s = i("hL9c"),
            c = i("osar"),
            d = i("eFVb"),
            u = i("W2tE"),
            p = i("v5fl"),
            f = i("Sm6l"),
            g = i("JNtf"),
            m = i("mUDD"),
            h = i("zLIa"),
            x = i("sF0J"),
            C = i("E1V6");

        function _(e) {
            let t, i, s, _, w, T, I, E = (0, a.c)(31),
                {
                    canConfirm: F,
                    context: j,
                    description: N,
                    imageUrls: M,
                    onCancel: R,
                    onConfirm: O,
                    prompt: k,
                    title: P
                } = e,
                S = void 0 === F || F,
                L = (0, r.a)();
            E[0] !== k ? (t = () => {
                let e = (0, d.b)(k, {
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
            }, E[0] = k, E[1] = t) : t = E[1];
            let [D] = (0, o.useState)(t), {
                controller: q,
                destroy: B
            } = D;
            (0, C.b)(B, q);
            let U = (0, p.b)(q, y, "document"),
                [W, G] = (0, o.useState)(j);
            E[2] !== j ? (i = v(j), E[2] = j, E[3] = i) : i = E[3];
            let X = i,
                [V, H] = (0, o.useState)(X),
                [z, K] = (0, o.useState)("prompt");
            E[4] !== V ? (s = function(e) {
                try {
                    return (0, x.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(V), E[4] = V, E[5] = s) : s = E[5];
            let Z = s;
            E[6] !== S || E[7] !== W || E[8] !== q || E[9] !== O ? (_ = () => {
                let e = q.getText().trim();
                S && e.length > 0 && O((0, x.a)({
                    context: W,
                    prompt: e
                }))
            }, E[6] = S, E[7] = W, E[8] = q, E[9] = O, E[10] = _) : _ = E[10];
            let J = _;
            return E[11] !== R ? (w = e => {
                e || R()
            }, E[11] = R, E[12] = w) : w = E[12], E[13] !== S || E[14] !== J || E[15] !== W || E[16] !== V || E[17] !== q || E[18] !== N || E[19] !== U || E[20] !== M || E[21] !== X || E[22] !== L || E[23] !== R || E[24] !== Z || E[25] !== P || E[26] !== z ? (T = "prompt" === z ? (0, n.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), J()
                },
                children: [(0, n.jsx)(b, {
                    description: N,
                    title: P
                }), (0, n.jsx)(c.a, {
                    children: (0, n.jsx)(c.a.Body, {
                        children: (0, n.jsx)(c.a.Input, {
                            children: (0, n.jsx)(u.a, {
                                ariaLabel: L.formatMessage({
                                    id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                    defaultMessage: "Prompt",
                                    description: "Aria label for the editable prompt field in the MCP app follow-up confirmation dialog"
                                }),
                                composerController: q,
                                linkOpenTarget: "external-browser",
                                placeholder: "",
                                onSubmit: J
                            })
                        })
                    })
                }), null != M && M.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: M.map(A)
                }) : null, null != W ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        H(v(W)), K("widget-state")
                    },
                    children: (0, n.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state",
                        description: "Link that opens the editable widget state included with a follow-up prompt"
                    })
                }) : null, (0, n.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(f.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: R,
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: !S || !U,
                        type: "submit",
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send",
                            description: "Confirm button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    })]
                })]
            }) : (0, n.jsxs)(m.b, {
                className: "gap-4",
                children: [(0, n.jsx)(m.d, {
                    title: (0, n.jsx)(g.e, {
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                            description: "Title for the editable widget state view in a follow-up confirmation dialog"
                        })
                    }),
                    subtitle: (0, n.jsx)(g.d, {
                        className: "text-secondary",
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget.",
                            description: "Description for the editable widget state view in a follow-up confirmation dialog"
                        })
                    })
                }), (0, n.jsx)(h.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Z,
                    "aria-label": L.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON",
                        description: "Aria label for the editable JSON widget state in a follow-up confirmation dialog"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: V,
                    onChange: e => {
                        H(e.target.value)
                    }
                }), null == Z ? (0, n.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, n.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB",
                        description: "Validation error for invalid editable widget state JSON"
                    })
                }) : null, (0, n.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(f.a, {
                        color: "ghost",
                        disabled: V === X,
                        type: "button",
                        onClick: () => {
                            H(X)
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset",
                            description: "Button that resets edited widget state to the value supplied by the widget"
                        })
                    }), (0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(f.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            H(v(W)), K("prompt")
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back",
                            description: "Button that returns from widget state editing to the follow-up prompt"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: null == Z,
                        type: "button",
                        onClick: () => {
                            null != Z && (G(Z), K("prompt"))
                        },
                        children: (0, n.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply",
                            description: "Button that applies edited widget state to a follow-up prompt"
                        })
                    })]
                })]
            }), E[13] = S, E[14] = J, E[15] = W, E[16] = V, E[17] = q, E[18] = N, E[19] = U, E[20] = M, E[21] = X, E[22] = L, E[23] = R, E[24] = Z, E[25] = P, E[26] = z, E[27] = T) : T = E[27], E[28] !== w || E[29] !== T ? (I = (0, n.jsx)(g.a, {
                open: !0,
                onOpenChange: w,
                size: "wide",
                children: T
            }), E[28] = w, E[29] = T, E[30] = I) : I = E[30], I
        }

        function A(e, t) {
            return (0, n.jsx)(s.a, {
                src: e
            }, t)
        }

        function y(e) {
            return e.getText().trim().length > 0
        }

        function b(e) {
            let t, i, o, r, s, c = (0, a.c)(11),
                {
                    description: d,
                    title: u
                } = e;
            return c[0] !== u ? (t = u ?? (0, n.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?",
                description: "Title for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (i = (0, n.jsx)(g.e, {
                children: t
            }), c[2] = t, c[3] = i) : i = c[3], c[4] !== d ? (o = d ?? (0, n.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
                description: "Description for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[4] = d, c[5] = o) : o = c[5], c[6] !== o ? (r = (0, n.jsx)(g.d, {
                className: "text-secondary",
                children: o
            }), c[6] = o, c[7] = r) : r = c[7], c[8] !== i || c[9] !== r ? (s = (0, n.jsx)(m.d, {
                title: i,
                subtitle: r
            }), c[8] = i, c[9] = r, c[10] = s) : s = c[10], s
        }

        function v(e) {
            return null == e ? "" : (0, x.d)(e)
        }
        i.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, i = (0, a.c)(2),
                    {
                        confirmation: o
                    } = e;
                return null == o ? null : (i[0] !== o ? (t = (0, n.jsx)(_, {
                    ...o
                }), i[0] = o, i[1] = t) : t = i[1], t)
            }
        })
    }),
    sF0J: (function(e, t, i) {
        var n = i("SKgO"),
            a = i("ASxG"),
            o = i("sS8e");
        let r = a.object({
            context: n.c.optional(),
            isVisible: a.boolean().optional(),
            prompt: a.string().trim().min(1),
            title: a.string().trim().min(1).max(250).optional()
        }).strip();
        i.d(t, {
            b: () => n.a,
            d: () => n.b
        }, {
            a: function(e) {
                let {
                    context: t,
                    prompt: i
                } = e;
                return null == t ? i : `${i}

Current widget context (JSON):
${(0,n.b)(t)}`
            },
            c: function(e) {
                let t = r.safeParse(e);
                if (!t.success) throw (0, o.c)("Invalid follow-up message", -32602);
                return t.data
            }
        })
    }),
    Yshm: (function(e, t, i) {
        var n = i("ASxG");
        let a = n.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            o = n.object({
                connectedPluginIds: n.array(n.string()).optional(),
                declinedPluginIds: n.array(n.string()).optional()
            }).catchall(n.json()),
            r = n.object({
                pluginId: n.string().min(1),
                suggestionId: a.optional()
            }),
            l = n.object({
                type: n.literal("event"),
                label: n.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: n.object({
                    remote_plugin_id: n.string().min(1).max(256),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: a
                })
            }),
            s = l.extend({
                label: n.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: l.shape.payload.extend({
                    suggestion_id: a.optional(),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10)
                })
            }),
            c = n.discriminatedUnion("label", [l, s]),
            d = n.object({
                kind: n.literal("plugin_suggestions"),
                version: n.literal(1),
                suggestions: n.array(n.object({
                    plugin_id: n.string().min(1),
                    display_name: n.string().min(1)
                }))
            }),
            u = n.object({
                "openai/plugin_suggestion_id": a.optional(),
                "openai/plugin_suggestion_connector_ids": n.record(n.string(), n.string().min(1)).optional().catch(void 0)
            });
        i.d(t, {}, {
            a: r,
            b: c,
            c: u,
            d: o,
            e: d
        })
    }),
    LGZt: (function(e, t, i) {
        var n = i("hV9T");
        i.d(t, {}, {
            a: function(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Ng)(t),
                    a = document.createElement(e);
                if (a instanceof HTMLIFrameElement) a.setAttribute("sandbox", "allow-scripts allow-same-origin"), a.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", a.shadowRoot?.append(e)
                }
                return a.setAttribute("partition", i), a
            }
        })
    }),
    AVkf: (function(e, t, i) {
        i.d(t, {
            a: () => h,
            b: () => C,
            c: () => m,
            d: () => g
        });
        var n = i("zmIi"),
            a = i("F6B1"),
            o = i("ASxG");
        let r = "codex-shared-texture-create";
        o.strictObject({
            type: o.literal(r),
            sandboxId: o.string(),
            initId: o.string()
        });
        var l = i("FgIX"),
            s = i("sS8e");
        let c = "CALL",
            d = "RESOLVE",
            u = ["downloadBlob", "getFileDownloadUrl", "getFileMetadata", "invokeDocumentBootstrap", "notifyAutofillCandidates", "notifyTabMetadata", "openConversationOverlay", "openPlaidLink", "openPromptInput", "requestClose", "requestCloseFocusedObject", "requestConnectPlugin", "requestConnectSheet", "requestDeclinePluginSuggestions", "requestFocusedObject", "requestLinkToConnector", "requestModal", "requestOpenPlugin", "requestReconnectConnector", "requestTargetedReply", "selectFiles", "setOpenInAppUrl", "share", "showToast", "triggerHaptic", "uploadFile"],
            p = a.d,
            f = o.enum(["cold", "warming", "warm"]),
            g = o.object({
                status: o.literal(2),
                type: o.literal("environment_status")
            }).loose(),
            m = o.object({
                href: o.url({
                    protocol: /^(https|codex|codex-dev)$/
                }),
                openMode: o.enum(["tab", "popup"]).optional()
            });

        function h(e, t) {
            return {
                initId: (0, a.g)(t?.getAttribute("src") ?? void 0),
                sandboxId: e
            }
        }
        let x = o.strictObject({
            method: o.literal(n.a),
            params: o.strictObject({})
        });
        async function C(e) {
            var t, i, o, s, p;
            let g, {
                    hostApiHandlers: m,
                    assertActive: C,
                    ...v
                } = e,
                {
                    ports: E,
                    replyPort: F,
                    supportsWidgetTextureReceiver: j
                } = await

            function(e) {
                let {
                    onSkybridgeCacheState: t,
                    origin: i,
                    sandboxId: n,
                    signal: o,
                    sourceUrl: r,
                    webview: l
                } = e, s = crypto.randomUUID();
                return new Promise((e, c) => {
                    let d;
                    if (o.aborted) return void c(w());
                    let u = () => {
                            window.removeEventListener("message", p), o.removeEventListener("abort", g), null != d && clearTimeout(d)
                        },
                        p = o => {
                            let r = o.data;
                            if (r?.type !== "init") return;
                            if (l instanceof HTMLIFrameElement) {
                                let t = l.getAttribute("src") ?? void 0;
                                if (null == l.contentWindow || o.source !== l.contentWindow || o.origin !== i || (0, a.i)(t, {
                                        requireSkybridge: !0
                                    }) !== i || (0, a.g)(t) !== s) return;
                                let n = function(e) {
                                    if (!A(e)) return null;
                                    let t = a.a.filter(t => Object.hasOwn(e, t));
                                    if (!(0, a.l)(t)) return null;
                                    let i = {};
                                    for (let n of t) {
                                        let t = e[n];
                                        if (!y(t)) return null;
                                        i[n] = t
                                    }
                                    return _(i) ? i : null
                                }(r.ports);
                                if (null == n || !y(r.replyPort)) return;
                                u(), e({
                                    ports: n,
                                    replyPort: r.replyPort,
                                    supportsWidgetTextureReceiver: !1
                                });
                                return
                            }
                            if (r.origin !== i || r.sandboxId !== n || r.initId !== s || !Array.isArray(r.portNames)) return;
                            let c = r.portNames;
                            if (!(0, a.l)(c) || o.ports.length !== c.length + 1) return;
                            let d = function(e, t) {
                                let i = {};
                                for (let [n, a] of e.entries()) {
                                    let e = t[n];
                                    if (!y(e)) return null;
                                    i[a] = e
                                }
                                return _(i) ? i : null
                            }(c, o.ports);
                            if (null == d) return;
                            let p = o.ports[c.length];
                            if (null == p) return;
                            let g = f.safeParse(r.skybridgeCacheState);
                            g.success && t?.(g.data), u(), e({
                                ports: d,
                                replyPort: p,
                                supportsWidgetTextureReceiver: !0 === r.supportsWidgetTextureReceiver
                            })
                        },
                        g = () => {
                            u(), c(w())
                        };
                    window.addEventListener("message", p), o.addEventListener("abort", g, {
                        once: !0
                    }), d = setTimeout(() => {
                        u(), c(T())
                    }, 2e4);
                    let m = (0, a.e)({
                        initId: s,
                        sandboxId: n,
                        sourceUrl: r
                    });
                    l.getAttribute("src") !== m && l.setAttribute("src", m)
                })
            }(v), N = h(v.sandboxId, v.webview);
            if (v.signal.aborted) throw w();
            let M = j && null != m.initializeMcpApp,
                R = function(e, t, i, a, o) {
                    let s = !1;

                    function p(e, o, u, p) {
                        return function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                                {
                                    port1: i,
                                    port2: n
                                } = new MessageChannel;
                            return i.onmessage = async i => {
                                let [n, ...a] = i.data, [o] = i.ports;
                                if (n !== c || null == o) return;
                                let r = new AbortController;
                                o.onmessage = e => {
                                    let {
                                        data: t
                                    } = e;
                                    Array.isArray(t) && "ABORT" === t[0] && r.abort()
                                }, o.start();
                                try {
                                    await e.call({
                                        signal: r.signal
                                    }, o, ...a)
                                } catch (e) {
                                    o.postMessage(["REJECT", t(e)])
                                } finally {
                                    o.close()
                                }
                            }, i.start(), n
                        }(function(c) {
                            for (var p = arguments.length, f = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++) f[g - 1] = arguments[g];
                            return (0, l.i)({
                                operation: "App request handling",
                                starting: "Handling app request"
                            }, {
                                safe: {
                                    ...t,
                                    method: e
                                }
                            }, async () => {
                                u?.();
                                let l = f[0];
                                if ("callMcp" === e && i && A(l) && l.method === n.a) {
                                    if (!s || !t.initId) throw Error("Shared textures are unavailable.");
                                    x.parse(l), a.throwIfAborted(), window.postMessage({
                                        type: r,
                                        ...t
                                    }, window.location.origin, [c]);
                                    return
                                }
                                let p = await o.apply(this, f);
                                "initializeMcpApp" === e && (s = !0), c.postMessage([d, p])
                            }, {
                                quiet: e.startsWith("notify") || "sendInstrument" === e || "updateWidgetState" === e
                            })
                        }, p)
                    }
                    let f = {};
                    for (let t of u) {
                        let i = e[t];
                        null != i && (f[t] = p(t, i, o))
                    }
                    return {
                        ...f,
                        ...null == e.notifyAppBlockMessage ? {} : {
                            notifyAppBlockMessage: p("notifyAppBlockMessage", e.notifyAppBlockMessage)
                        },
                        ...null == e.requestCheckout ? {} : {
                            requestCheckout: p("requestCheckout", e.requestCheckout, o, e => e instanceof Error ? b(e) : e)
                        },
                        ...null == e.notifyEscapeKey ? {} : {
                            notifyEscapeKey: p("notifyEscapeKey", e.notifyEscapeKey)
                        },
                        ...null == e.initializeMcpApp ? {} : {
                            initializeMcpApp: p("initializeMcpApp", e.initializeMcpApp)
                        },
                        callMcp: p("callMcp", function(t) {
                            return e.callMcp(t, this.signal)
                        }, o),
                        callTool: p("callTool", e.callTool, o),
                        notifyBackgroundColor: p("notifyBackgroundColor", e.notifyBackgroundColor),
                        notifyEnvironmentError: p("notifyEnvironmentError", e.notifyEnvironmentError),
                        notifyIntrinsicHeight: p("notifyIntrinsicHeight", e.notifyIntrinsicHeight),
                        notifyIntrinsicWidth: p("notifyIntrinsicWidth", e.notifyIntrinsicWidth),
                        notifyNavigation: p("notifyNavigation", e.notifyNavigation),
                        notifySecurityPolicyViolation: p("notifySecurityPolicyViolation", e.notifySecurityPolicyViolation),
                        openExternal: p("openExternal", e.openExternal, o),
                        requestDisplayMode: p("requestDisplayMode", e.requestDisplayMode, o),
                        sendFollowUpMessage: p("sendFollowUpMessage", e.sendFollowUpMessage, o),
                        sendInstrument: p("sendInstrument", e.sendInstrument),
                        updateWidgetState: p("updateWidgetState", e.updateWidgetState, o)
                    }
                }(m, N, M, v.signal, C);
            try {
                F.postMessage(R, Object.values(R))
            } finally {
                F.close()
            }
            return {
                ...(t = E, i = v.signal, o = N, g = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = I(t, n ? {} : {
                            signal: i
                        });
                    return t => (0, l.i)({
                        operation: "App request",
                        starting: "Sending app request"
                    }, {
                        safe: {
                            ...o,
                            method: e
                        }
                    }, async () => a(t), {
                        signal: n ? void 0 : i,
                        quiet: "requestMcpAppsResourceTeardown" !== e && "navigate" !== e
                    })
                }, {
                    applyAutofillCandidate: null == t.applyAutofillCandidate ? void 0 : g("applyAutofillCandidate", t.applyAutofillCandidate),
                    getCurrentPath: null == t.getCurrentPath ? void 0 : g("getCurrentPath", t.getCurrentPath),
                    navigate: g("navigate", t.navigate),
                    notifyMcpAppsHostContext: g("notifyMcpAppsHostContext", t.notifyMcpAppsHostContext),
                    notifyMcpAppsMcpNotification: null == t.notifyMcpAppsMcpNotification ? null : g("notifyMcpAppsMcpNotification", t.notifyMcpAppsMcpNotification),
                    notifyMcpAppsToolCancelled: g("notifyMcpAppsToolCancelled", t.notifyMcpAppsToolCancelled),
                    notifyMcpAppsToolInput: g("notifyMcpAppsToolInput", t.notifyMcpAppsToolInput),
                    notifyMcpAppsToolResult: g("notifyMcpAppsToolResult", t.notifyMcpAppsToolResult),
                    requestMcpAppsResourceTeardown: g("requestMcpAppsResourceTeardown", t.requestMcpAppsResourceTeardown, !0),
                    runWidgetCode: (s = t.runWidgetCode, p = i, s.start(), async function*(e) {
                        let {
                            port1: t,
                            port2: i
                        } = new MessageChannel, {
                            port1: n,
                            port2: a
                        } = new MessageChannel, {
                            port1: o,
                            port2: r
                        } = new MessageChannel, {
                            port1: l,
                            port2: c
                        } = new MessageChannel, d = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return I(e, {
                                ...t,
                                signal: p
                            })
                        }, u = d(t), f = d(n, {
                            timeoutMs: null
                        }), g = d(o), m = d(l);
                        s.postMessage(["GENERATOR_GENERATE", {
                            asyncDispose: i,
                            next: a,
                            return: r,
                            throw: c
                        }, e], [i, a, r, c]);
                        try {
                            let e = await f(void 0);
                            for (; !e.done;) yield e.value, e = await f(void 0);
                            return e.value
                        } catch (e) {
                            if (p.aborted) return;
                            throw await m(e).catch(() => {}), e
                        } finally {
                            p.aborted || await Promise.allSettled([u(void 0), g(void 0)]), [t, n, o, l].forEach(e => {
                                e.close()
                            })
                        }
                    }),
                    setAdditionalGlobals: g("setAdditionalGlobals", t.setAdditionalGlobals),
                    setSafeArea: g("setSafeArea", t.setSafeArea),
                    setTheme: g("setTheme", t.setTheme),
                    setWidgetData: g("setWidgetData", t.setWidgetData),
                    setWidgetView: g("setWidgetView", t.setWidgetView)
                }),
                supportsWidgetTextureReceiver: M
            }
        }

        function _(e) {
            return p.every(t => null != e[t])
        }

        function A(e) {
            return "object" == typeof e && null != e
        }

        function y(e) {
            return !!A(e) && "function" == typeof e.postMessage && "function" == typeof e.start
        }

        function b(e) {
            return e instanceof Error ? {
                ...v(e),
                message: e.message || "MCP sandbox host call failed.",
                name: e.name
            } : null != e && "object" == typeof e && "message" in e && "string" == typeof e.message && e.message.length > 0 ? {
                ...v(e),
                message: e.message
            } : {
                message: "MCP sandbox host call failed."
            }
        }

        function v(e) {
            let t = o.union([o.object({
                code: o.enum(["update_model_context_persistence_failed", "model_context_conflict"]),
                retryable: o.boolean()
            }), s.f]).safeParse("data" in e ? e.data : void 0).data;
            return {
                ...null == t ? {} : {
                    data: t
                },
                ..."code" in e && "number" == typeof e.code ? {
                    code: e.code
                } : {},
                ..."name" in e && "string" == typeof e.name ? {
                    name: e.name
                } : {}
            }
        }

        function w() {
            let e = Error("MCP sandbox RPC aborted.");
            return e.name = "AbortError", e
        }

        function T() {
            let e = Error("MCP sandbox RPC timed out.");
            return e.name = "TimeoutError", e
        }

        function I(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.start(), i => new Promise((n, a) => {
                let o, r = t.signal,
                    l = void 0 === t.timeoutMs ? 3e4 : t.timeoutMs;
                if (r?.aborted) return void a(w());
                let {
                    port1: s,
                    port2: u
                } = new MessageChannel, p = !1, f = (e, t) => {
                    p || (p = !0, null != o && clearTimeout(o), r?.removeEventListener("abort", g), s.onmessage = null, s.close(), e(t))
                }, g = () => {
                    f(a, w())
                };
                s.onmessage = e => {
                    let t = e.data;
                    t[0] === d ? f(n, t[1]) : f(a, t[1])
                }, r?.addEventListener("abort", g, {
                    once: !0
                }), null != l && (o = setTimeout(() => {
                    f(a, T())
                }, l));
                try {
                    e.postMessage([c, i], [u])
                } catch (e) {
                    f(a, e)
                }
            })
        }
    }),
    ePaQ: (function(e, t, i) {
        i.d(t, {
            a: () => h
        });
        var n = i("ABep"),
            a = i("QosV"),
            o = i("kSHG"),
            r = i("bFOP"),
            l = i("slpy"),
            s = i("on57"),
            c = i("zd8w"),
            d = i("KxMp"),
            u = i("bf6R"),
            p = i("zSQm"),
            f = i("WAdu");

        function g(e) {
            let t, i, o, r, l, s, c, d = (0, a.c)(21),
                {
                    title: u,
                    subtitle: p,
                    body: f,
                    branding: g,
                    followUp: m,
                    actions: h
                } = e;
            d[0] !== f ? (t = f?.includes("\n"), d[0] = f, d[1] = t) : t = d[1];
            let x = t;
            return d[2] !== g ? (i = (0, n.jsx)("div", {
                className: "branding-xlBboz",
                children: g
            }), d[2] = g, d[3] = i) : i = d[3], d[4] !== u ? (o = (0, n.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = o) : o = d[5], d[6] !== p ? (r = null != p && (0, n.jsx)("div", {
                className: "subtitle-gArrij",
                children: p
            }), d[6] = p, d[7] = r) : r = d[7], d[8] !== f || d[9] !== x || d[10] !== u ? (l = null != f && (0, n.jsx)("div", {
                className: x ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: x ? 0 : void 0,
                children: f
            }), d[8] = f, d[9] = x, d[10] = u, d[11] = l) : l = d[11], d[12] !== m ? (s = null != m && (0, n.jsx)("div", {
                className: "followUp-otVo0x",
                children: m
            }), d[12] = m, d[13] = s) : s = d[13], d[14] !== h || d[15] !== i || d[16] !== o || d[17] !== r || d[18] !== l || d[19] !== s ? (c = (0, n.jsxs)("div", {
                className: "content-cuuiWn",
                children: [i, o, r, l, h, s]
            }), d[14] = h, d[15] = i, d[16] = o, d[17] = r, d[18] = l, d[19] = s, d[20] = c) : c = d[20], c
        }
        var m = i("Nfif");

        function h(e) {
            let t, i, o, s, d = (0, a.c)(32),
                {
                    children: u,
                    disabled: p,
                    metadata: f,
                    sourceAppId: g,
                    followUp: m,
                    keepOpen: h,
                    openOnClick: _,
                    closeOnTriggerClick: A,
                    presentation: y,
                    renderHoverCard: b
                } = e,
                v = void 0 === A || A,
                [w, T] = (0, c.useState)(!1);
            if (null == f.hoverCard && null == b && "file" !== y && !_ && v) {
                let e, t, i = !!h || void 0;
                return d[0] !== u ? (e = (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== p || d[3] !== f.title || d[4] !== i || d[5] !== e ? (t = (0, n.jsx)(l.a, {
                    content: f.title,
                    disabled: p,
                    forceOpen: i,
                    children: e
                }), d[2] = p, d[3] = f.title, d[4] = i, d[5] = e, d[6] = t) : t = d[6], t
            }
            let I = f.title;
            if (null != b) {
                let e;
                d[7] !== m || d[8] !== f || d[9] !== y || d[10] !== b || d[11] !== g ? (e = b({
                    metadata: f,
                    sourceAppId: g,
                    followUp: m,
                    presentation: y
                }), d[7] = m, d[8] = f, d[9] = y, d[10] = b, d[11] = g, d[12] = e) : e = d[12], I = e
            } else if (null != f.hoverCard) {
                let e;
                d[13] !== m || d[14] !== f || d[15] !== y || d[16] !== g ? (e = (0, n.jsx)(C, {
                    metadata: f,
                    sourceAppId: g,
                    followUp: m,
                    presentation: y
                }), d[13] = m, d[14] = f, d[15] = y, d[16] = g, d[17] = e) : e = d[17], I = e
            }
            let E = !p && (h || w);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => T(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== v || d[21] !== _ ? (i = (0, n.jsx)(x, {
                openOnClick: _,
                closeOnTriggerClick: v,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = v, d[21] = _, d[22] = i) : i = d[22];
            let F = "file" === y ? 344 : 320,
                j = "file" === y ? 10 : 6;
            return d[23] !== I || d[24] !== f.title || d[25] !== F || d[26] !== j ? (o = (0, n.jsx)(r.a.Content, {
                "aria-label": f.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: j,
                children: I
            }), d[23] = I, d[24] = f.title, d[25] = F, d[26] = j, d[27] = o) : o = d[27], d[28] !== E || d[29] !== i || d[30] !== o ? (s = (0, n.jsxs)(r.a, {
                showOnHover: !0,
                open: E,
                onOpenChange: T,
                children: [i, o]
            }), d[28] = E, d[29] = i, d[30] = o, d[31] = s) : s = d[31], s
        }

        function x(e) {
            let t, i, o, l = (0, a.c)(10),
                {
                    children: s,
                    openOnClick: c,
                    closeOnTriggerClick: d,
                    onOpen: u
                } = e,
                {
                    close: p
                } = (0, r.b)();
            return l[0] !== p || l[1] !== d || l[2] !== u || l[3] !== c ? (t = e => {
                c && d || (e.preventDefault(), c ? u() : p())
            }, l[0] = p, l[1] = d, l[2] = u, l[3] = c, l[4] = t) : t = l[4], l[5] !== s ? (i = (0, n.jsx)("span", {
                className: "group/mcp-source-citation inline-flex",
                tabIndex: -1,
                children: s
            }), l[5] = s, l[6] = i) : i = l[6], l[7] !== t || l[8] !== i ? (o = (0, n.jsx)(r.a.Trigger, {
                onClick: t,
                children: i
            }), l[7] = t, l[8] = i, l[9] = o) : o = l[9], o
        }

        function C(e) {
            let t, i, r, l, h, x, C, _, A = (0, a.c)(53),
                {
                    metadata: y,
                    sourceAppId: b,
                    followUp: v,
                    presentation: w
                } = e,
                T = (0, c.useContext)(f.a);
            if (A[0] !== y.icons?.[0]) {
                let {
                    data: e
                } = o.v.safeParse(y.icons?.[0]), i = e?.src;
                t = null == i ? void 0 : (0, p.b)(i), A[0] = y.icons?.[0], A[1] = t
            } else t = A[1];
            let I = t;
            A[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(u.Di, {}), A[2] = i) : i = A[2];
            let E = i;
            if ("restricted" !== T) {
                if (null != y.url) {
                    let e;
                    A[3] !== y.url ? (e = (0, n.jsx)(d.a, {
                        href: y.url,
                        className: "size-4"
                    }), A[3] = y.url, A[4] = e) : e = A[4], E = e
                } else if (null != I) {
                    let e, t, i = null == b && "dark:brightness-0 dark:invert";
                    A[5] !== i ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", i), A[5] = i, A[6] = e) : e = A[6], A[7] !== I || A[8] !== e ? (t = (0, n.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: I
                    }), A[7] = I, A[8] = e, A[9] = t) : t = A[9], E = t
                }
            }
            if ("file" === w && null != b) {
                let e, t, i = y.hoverCard?.title ?? y.title,
                    a = y.hoverCard?.subtitle,
                    o = y.hoverCard?.body;
                return A[10] !== b ? (e = (0, n.jsx)(m.a, {
                    appId: b,
                    showName: !0,
                    presentation: "file"
                }), A[10] = b, A[11] = e) : e = A[11], A[12] !== v || A[13] !== i || A[14] !== a || A[15] !== o || A[16] !== e ? (t = (0, n.jsx)(g, {
                    title: i,
                    subtitle: a,
                    body: o,
                    branding: e,
                    followUp: v
                }), A[12] = v, A[13] = i, A[14] = a, A[15] = o, A[16] = e, A[17] = t) : t = A[17], t
            }
            if (null != b) {
                let e, t, i, a, o, r;
                A[18] !== b ? (e = (0, n.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, n.jsx)(m.a, {
                        appId: b,
                        showName: !0
                    })
                }), A[18] = b, A[19] = e) : e = A[19];
                let l = y.hoverCard?.title ?? y.title;
                return A[20] !== l ? (t = (0, n.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: l
                }), A[20] = l, A[21] = t) : t = A[21], A[22] !== y.hoverCard ? (i = y.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: y.hoverCard.subtitle
                }), A[22] = y.hoverCard, A[23] = i) : i = A[23], A[24] !== y.hoverCard || A[25] !== y.title ? (a = y.hoverCard?.body != null && (0, n.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": y.title,
                    tabIndex: 0,
                    children: y.hoverCard.body
                }), A[24] = y.hoverCard, A[25] = y.title, A[26] = a) : a = A[26], A[27] !== v ? (o = null != v && (0, n.jsx)("div", {
                    children: v
                }), A[27] = v, A[28] = o) : o = A[28], A[29] !== e || A[30] !== t || A[31] !== i || A[32] !== a || A[33] !== o ? (r = (0, n.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, i, a, o]
                }), A[29] = e, A[30] = t, A[31] = i, A[32] = a, A[33] = o, A[34] = r) : r = A[34], r
            }
            let F = y.hoverCard?.title ?? y.title;
            return A[35] !== F ? (r = (0, n.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), A[35] = F, A[36] = r) : r = A[36], A[37] !== y.hoverCard ? (l = y.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: y.hoverCard.subtitle
            }), A[37] = y.hoverCard, A[38] = l) : l = A[38], A[39] !== r || A[40] !== l ? (h = (0, n.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [r, l]
            }), A[39] = r, A[40] = l, A[41] = h) : h = A[41], A[42] !== y.hoverCard || A[43] !== y.title ? (x = y.hoverCard?.body != null && (0, n.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": y.title,
                tabIndex: 0,
                children: y.hoverCard.body
            }), A[42] = y.hoverCard, A[43] = y.title, A[44] = x) : x = A[44], A[45] !== E || A[46] !== y.hoverCard?.title || A[47] !== y.title ? (C = y.hoverCard?.title != null && (0, n.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [E, (0, n.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: y.title
                })]
            }), A[45] = E, A[46] = y.hoverCard?.title, A[47] = y.title, A[48] = C) : C = A[48], A[49] !== h || A[50] !== x || A[51] !== C ? (_ = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, C]
            }), A[49] = h, A[50] = x, A[51] = C, A[52] = _) : _ = A[52], _
        }
    }),
    JAYD: (function(e, t, i) {
        var n = i("BolX"),
            a = i("hV9T"),
            o = i("OiCI"),
            r = i("cLdu"),
            l = i("OWtl");
        let s = (0, n.d)(l.a, (e, t) => {
            let {
                get: i
            } = t, n = i(o.b);
            if (null == n) return !1;
            let l = i(r.h, {
                accountId: n,
                hostId: a.Xb,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !l.isPending && !l.isError && l.data?.some(t => {
                let {
                    appIds: i,
                    plugin: n
                } = t;
                return i?.includes(e) && n.installed && n.enabled && "AVAILABLE" === n.availability && null == n.disabledReason
            }) === !0
        });
        i.d(t, {}, {
            a: s
        })
    }),
    Nfif: (function(e, t, i) {
        i.d(t, {
            a: () => x
        });
        var n = i("ABep"),
            a = i("QosV"),
            o = i("on57"),
            r = i("hV9T"),
            l = i("zd8w"),
            s = i("oyxz"),
            c = i("BQbE"),
            d = i("bf6R"),
            u = i("E6P3"),
            p = i("zSQm"),
            f = i("WAdu"),
            g = i("a6Zv"),
            m = e => (0, n.jsxs)("svg", {
                width: 12,
                height: 12,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 2.25293C16.3032 2.25306 17.8145 3.76317 17.8145 5.62598C17.8144 7.48871 16.3032 8.99889 14.4404 8.99902C13.7322 8.99896 13.0749 8.78025 12.5322 8.40723L8.39844 12.541C8.74099 13.0688 8.94043 13.698 8.94043 14.374C8.94035 16.2368 7.42929 17.7471 5.56641 17.7471C3.70368 17.7469 2.19344 16.2367 2.19336 14.374C2.19336 12.5112 3.70363 11.0012 5.56641 11.001C6.27216 11.001 6.92702 11.2183 7.46875 11.5889L11.6055 7.45215C11.2656 6.92567 11.0674 6.2992 11.0674 5.62598C11.0674 3.7632 12.5776 2.25311 14.4404 2.25293ZM5.56641 12.3311C4.43794 12.3312 3.52344 13.246 3.52344 14.374C3.52352 15.502 4.43799 16.4168 5.56641 16.417C6.69497 16.417 7.61027 15.5021 7.61035 14.374C7.61035 13.2459 6.69502 12.3311 5.56641 12.3311ZM14.4404 3.58301C13.312 3.58318 12.3975 4.49796 12.3975 5.62598C12.3975 6.75393 13.312 7.66877 14.4404 7.66895C15.5689 7.66881 16.4843 6.75395 16.4844 5.62598C16.4844 4.49793 15.5689 3.58314 14.4404 3.58301Z",
                    fill: "currentColor"
                }), (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 11.001C16.3032 11.0011 17.8145 12.5112 17.8145 14.374C17.8144 16.2368 16.3032 17.7469 14.4404 17.7471C12.5777 17.7469 11.0675 16.2367 11.0674 14.374C11.0674 12.5112 12.5776 11.0012 14.4404 11.001ZM14.4404 12.3311C13.312 12.3312 12.3975 13.246 12.3975 14.374C12.3975 15.502 13.312 16.4168 14.4404 16.417C15.5689 16.4169 16.4843 15.502 16.4844 14.374C16.4844 13.246 15.5689 12.3312 14.4404 12.3311Z",
                    fill: "currentColor"
                }), (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.56641 2.25293C7.42934 2.25293 8.94043 3.76309 8.94043 5.62598C8.94035 7.48879 7.42929 8.99902 5.56641 8.99902C3.70368 8.99885 2.19344 7.48869 2.19336 5.62598C2.19336 3.7632 3.70363 2.25311 5.56641 2.25293ZM5.56641 3.58301C4.43794 3.58318 3.52344 4.49796 3.52344 5.62598C3.52352 6.75393 4.43799 7.66877 5.56641 7.66895C6.69497 7.66895 7.61027 6.75403 7.61035 5.62598C7.61035 4.49785 6.69502 3.58301 5.56641 3.58301Z",
                    fill: "currentColor"
                })]
            }),
            h = i("ZRyR");

        function x(e) {
            let t, i, x, C, _, A, y, b = (0, a.c)(21),
                {
                    appId: v,
                    showName: w,
                    presentation: T
                } = e,
                I = void 0 !== w && w,
                E = (0, l.useContext)(f.a);
            b[0] !== v ? (t = [v], b[0] = v, b[1] = t) : t = b[1];
            let F = "restricted" !== E;
            b[2] !== t || b[3] !== F ? (i = {
                appIds: t,
                hostId: r.Xb,
                enabled: F
            }, b[2] = t, b[3] = F, b[4] = i) : i = b[4];
            let {
                data: j
            } = (0, c.c)(i), N = j?.find(e => e.id === v), M = (0, g.a)() ? N?.iconUrlDark ?? N?.iconUrl : N?.iconUrl, R = null == M ? void 0 : (0, p.b)(M);
            b[5] !== T ? (x = "file" === T ? (0, n.jsx)("span", {
                className: (0, o.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, n.jsx)(m, {
                    "aria-hidden": "true"
                })
            }) : (0, n.jsx)(d.Di, {}), b[5] = T, b[6] = x) : x = b[6];
            let O = x;
            b[7] !== O || b[8] !== E || b[9] !== T || b[10] !== R ? (C = "restricted" !== E && null != R ? (0, n.jsx)(u.a, {
                className: (0, o.b)("shrink-0", "file" === T ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: R,
                fallback: O
            }, R) : O, b[7] = O, b[8] = E, b[9] = T, b[10] = R, b[11] = C) : C = b[11];
            let k = C;
            return b[12] !== k || b[13] !== T ? (_ = "file" === T ? (0, n.jsx)("span", {
                className: "size-4 shrink-0",
                children: k
            }) : k, b[12] = k, b[13] = T, b[14] = _) : _ = b[14], b[15] !== N?.name || b[16] !== I ? (A = I && (N?.name ?? (0, n.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), b[15] = N?.name, b[16] = I, b[17] = A) : A = b[17], b[18] !== _ || b[19] !== A ? (y = (0, n.jsxs)(n.Fragment, {
                children: [_, A]
            }), b[18] = _, b[19] = A, b[20] = y) : y = b[20], y
        }
    }),
    xsLm: (function(e, t, i) {
        i.d(t, {}, {
            a: function(e, t) {
                let i, {
                    threshold: n = .5,
                    isInViewport: a,
                    isEligible: o,
                    subscribe: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("u" < typeof IntersectionObserver) return;
                let l = e.ownerDocument,
                    s = !1,
                    c = !1;

                function d() {
                    !c && s && "hidden" !== l.visibilityState && e.isConnected && e.checkVisibility?.({
                        checkOpacity: !0,
                        visibilityProperty: !0
                    }) && (o?.() ?? !0) && t() && f()
                }
                let u = new IntersectionObserver(e => {
                    let t = e[0];
                    s = a?.(e) ?? (null != t && t.isIntersecting && t.intersectionRatio >= n), d()
                }, {
                    threshold: n
                });

                function p() {
                    s = !1, u.disconnect(), u.takeRecords(), c || "visible" !== l.visibilityState || u.observe(e)
                }

                function f() {
                    c = !0, u.disconnect(), l.removeEventListener("visibilitychange", p), i?.()
                }
                return l.addEventListener("visibilitychange", p), i = r?.(d, p), p(), f
            }
        })
    }),
    RiLw: (function(e, t, i) {
        var n = i("ABep"),
            a = i("QosV"),
            o = i("oyxz"),
            r = i("bf6R"),
            l = i("UxN3"),
            s = i("Y3Vu"),
            c = i("Q81T");
        let d = (0, n.jsx)(l.b, {
            className: c.a.shareIcon,
            icon: {
                16: r.L,
                20: r.M
            }
        });
        i.d(t, {}, {
            a: function(e) {
                let t, i, r, l, c, u = (0, a.c)(9);
                u[0] !== e ? ({
                    children: t,
                    leading: r,
                    ...i
                } = e, u[0] = e, u[1] = t, u[2] = i, u[3] = r) : (t = u[1], i = u[2], r = u[3]);
                let p = void 0 === r ? d : r;
                return u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, n.jsx)(o.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share",
                        description: "Button for sharing an artifact from its viewer"
                    })
                }), u[4] = l) : l = u[4], u[5] !== t || u[6] !== p || u[7] !== i ? (c = (0, n.jsxs)(s.a, {
                    focusRing: "inset",
                    ...i,
                    children: [p, l, t]
                }), u[5] = t, u[6] = p, u[7] = i, u[8] = c) : c = u[8], c
            }
        })
    })
};