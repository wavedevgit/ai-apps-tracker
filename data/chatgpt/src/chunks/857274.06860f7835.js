export const __rspack_esm_ids = [857274];
export const __webpack_modules__ = {
    piij: (function(e, t, n) {
        e.exports = n.p + "assets/space-recovery.105d9c61fe.png"
    }),
    VvpR: (function(e, t, n) {
        var i = n("SRbQ"),
            a = n("Y5Sy"),
            o = n("Dgwo"),
            r = n("dF4Z"),
            l = n("Oo9D"),
            s = n("NTGw"),
            c = n("syw5");
        n.d(t, {}, {
            a: async function(e, t, n, s) {
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
                        f = (0, i.a)(p, await s.getFollowUpContext(n, !0), !1);
                    if (e.get(a.a)) throw new r.a;
                    let g = crypto.randomUUID();
                    if (await (0, l.d)(e, t, g, d), e.get(a.a)) throw new r.a;
                    await s.editLastUserTurn(n, {
                        ...u,
                        clientUserMessageId: g,
                        writingBlockContextPrepared: null != f,
                        additionalContext: (0, c.a)(n, f?.writingBlocks, u.additionalContext)
                    })
                } catch (e) {
                    p.error = e, p.hasError = !0
                } finally {
                    (0, i.e)(p)
                }
            },
            b: async function(e, t, n, a, r) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, o.b)(e, t),
                        d = (0, i.a)(l, await s.getFollowUpContext(n, !0), !1);
                    await s.retrySafetyBufferedTurn(n, a, r, {
                        additionalContext: (0, c.a)(n, d?.writingBlocks),
                        writingBlockContextPrepared: null != d
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, i.e)(l)
                }
            },
            c: async function(e, t, n, a) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, o.b)(e, t),
                        s = (0, i.a)(r, await l.getFollowUpContext(n, !0), !1);
                    await l.startEmptyTurn(n, {
                        ...a,
                        writingBlockContextPrepared: null != s,
                        additionalContext: (0, c.a)(n, s?.writingBlocks, a.additionalContext)
                    })
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, i.e)(r)
                }
            },
            d: async function(e, t, n, a) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let l = (0, o.b)(e, t),
                        d = (0, i.a)(r, await l.getFollowUpContext(n, !0), !1);
                    return await l.startTurn(n, {
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
                            additionalContext: (0, c.a)(n, d?.writingBlocks, a.request.additionalContext)
                        }
                    })
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, i.e)(r)
                }
            }
        })
    }),
    bmU4: (function(e, t, n) {
        var i = n("iRMi"),
            a = n("yGJW"),
            o = n("YTYy");
        let r = {
            pptx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        n.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, n) {
                let {
                    importKind: i
                } = e;
                if ("pptx" !== i && "xlsx" !== i && "csv" !== i && "tsv" !== i || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let a = t?.target,
                    o = null != a && "fileId" in a ? a.fileId : void 0,
                    r = n?.libraryFileId ?? (null != a && "libraryFileId" in a ? a.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: i,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != o && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(o) ? o : void 0,
                    libraryFileId: null != r && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(r) ? r : void 0
                }
            },
            c: function(e, t, n, l) {
                if (null == t) return;
                let s = t.threadId ?? void 0;
                (0, a.a)(e, i.CodexArtifactFileActionClicked, {
                    artifactKind: "pptx" === t.sourceFormat || "native-slides" === t.sourceFormat ? i.CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION : i.CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET,
                    backing: {
                        file: i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_FILE,
                        "native-page": i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_NATIVE_PAGE,
                        "artifact-session": i.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_ARTIFACT_SESSION
                    } [t.backing],
                    sourceFormat: r[t.sourceFormat],
                    surface: "output-card" === t.surface ? i.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_OUTPUT_CARD : i.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_VIEWER,
                    action: {
                        download: i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_DOWNLOAD,
                        export: i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_EXPORT,
                        "open-in-app": i.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_OPEN_IN_APP
                    } [n],
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
    xof2: (function(e, t, n) {
        var i = n("EA6X"),
            a = n("D015"),
            o = n("yGJW"),
            r = n("OMIV"),
            l = n("CTBG"),
            s = n("Kwur"),
            c = n("dQRk"),
            d = n("hx97");

        function u(e, t, n) {
            if (null == t || null == n) return;
            let i = 0,
                o = !1;
            for (let r of e.get(l.c, t) ?? [])
                if ((0, d.l)(r) && (o = !1), "assistant" !== r.author.role || o || (i += 1, o = !0), r.id === n) return i > 0 ? (0, a.a)(i) : void 0
        }

        function p(e, t) {
            let n = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == n ? void 0 : {
                    entity_id: n.entityId,
                    entity_category: n.entityCategory,
                    widget_type: n.widgetType,
                    widget_name: n.widgetName,
                    content_reference_start_index: n.contentReferenceStartIndex,
                    message_id: n.messageId
                }
            }
        }

        function f(e, t) {
            return Math.random() < (e.get(r.f)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function g(e, t, n) {
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
                            effect: n
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
        n.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let n = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(c.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    m(e, n), (0, o.a)(e, i.c, n)
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
                }).catch(() => void 0), (0, o.a)(e, i.e, t)
            },
            d: function(e, t) {
                h(e, t), (0, o.a)(e, i.g, t)
            },
            e: function(e, t) {
                m(e, t), (0, o.a)(e, i.c, t)
            },
            f: function(e, t) {
                g(e, t), (0, o.a)(e, i.j, t)
            },
            g: h,
            h: g
        })
    }),
    PxnS: (function(e, t, n) {
        var i = n("EA6X"),
            a = n("lSdY"),
            o = n("BolX"),
            r = n("aiHW"),
            l = n("yGJW"),
            s = n("OWtl"),
            c = n("xsLm"),
            d = n("HgLj"),
            u = n("XW2n");
        let p = (0, o.u)(s.a, () => new WeakMap),
            f = (0, o.d)(s.a, (e, t) => {
                let {
                    widgetType: n,
                    turnMessageId: i,
                    sourceMessageId: o
                } = e, {
                    get: r
                } = t, l = r(u.b);
                if (l?.productExperience !== a.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let s = o ?? i,
                    c = null != i && l.messageIds.has(i) ? i : void 0;
                if (null != s && (l.messageIds.has(s) || null != c)) return {
                    widgetType: n,
                    messageId: s,
                    assistantMessageId: c
                }
            });

        function g(e, t, n, a) {
            (0, l.a)(e, i.j, {
                ...t,
                actionType: n,
                widgetActionTarget: a,
                surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === t.widgetType || void 0
            })
        }
        n.d(t, {}, {
            a: function(e, t, n, i) {
                return (0, d.a)(i, n => {
                    if (!t || !n) return;
                    let i = e.get(p);
                    if (i.get(n) !== t.messageId) return (0, c.a)(n, () => {
                        for (let e = (0, r.a)(n); e; e = (0, r.a)(e))
                            if (e.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return i.set(n, t.messageId), g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(n)
            },
            b: function(e, t, n) {
                t && g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", n)
            },
            c: f
        })
    }),
    r21w: (function(e, t, n) {
        n.d(t, {
            a: () => r
        });
        var i = n("ABep"),
            a = n("QosV"),
            o = n("on57");

        function r(e) {
            let t, n, r, l, s = (0, a.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...n
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]), s[3] !== t ? (r = (0, o.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = r) : r = s[4], s[5] !== n || s[6] !== r ? (l = (0, i.jsx)("div", {
                className: r,
                ...n
            }), s[5] = n, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    vYmP: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            o = n("on57"),
            r = n("zd8w"),
            l = n("ZtSy"),
            s = n("ZRyR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, p, f, g, m, h, x, C, _, A, y, b, v, w, T = (0, a.c)(43);
                T[0] !== e ? ({
                    ref: p,
                    ActionWrapper: g,
                    ariaLabel: n,
                    icon: c,
                    isActive: m,
                    isTerminalInline: d,
                    label: u,
                    supportingCountLabel: f,
                    testId: x,
                    variant: h,
                    ...t
                } = e, T[0] = e, T[1] = t, T[2] = n, T[3] = c, T[4] = d, T[5] = u, T[6] = p, T[7] = f, T[8] = g, T[9] = m, T[10] = h, T[11] = x) : (t = T[1], n = T[2], c = T[3], d = T[4], u = T[5], p = T[6], f = T[7], g = T[8], m = T[9], h = T[10], x = T[11]);
                let I = void 0 === g ? r.Fragment : g,
                    E = void 0 !== m && m,
                    F = "file" === (void 0 === h ? "default" : h),
                    N = "disabled" in t && t.disabled,
                    j = N ? "cursor-default" : "group cursor-interaction",
                    M = !F && !N && "hover:bg-secondary-soft-hover hover:text-default!",
                    R = F && s.a.palette,
                    O = F && s.a.filePill;
                T[12] !== E || T[13] !== F || T[14] !== j || T[15] !== M || T[16] !== R || T[17] !== O ? (C = (0, o.b)("no-underline!", j, M, R, O, F ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, o.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", E ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), T[12] = E, T[13] = F, T[14] = j, T[15] = M, T[16] = R, T[17] = O, T[18] = C) : C = T[18];
                let k = C;
                T[19] !== F || T[20] !== f ? (_ = null == f ? null : (0, i.jsx)("span", {
                    className: (0, o.b)("text-inherit", F ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: f
                }), T[19] = F, T[20] = f, T[21] = _) : _ = T[21];
                let P = _;
                T[22] !== c || T[23] !== F || T[24] !== u || T[25] !== P ? (A = F ? (0, i.jsxs)(i.Fragment, {
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
                }), T[22] = c, T[23] = F, T[24] = u, T[25] = P, T[26] = A) : A = T[26];
                let S = A,
                    D = F && "relative",
                    L = F && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return T[27] !== D || T[28] !== L ? (y = (0, o.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", D, L), T[27] = D, T[28] = L, T[29] = y) : y = T[29], T[30] !== t || T[31] !== n || T[32] !== k || T[33] !== S || T[34] !== x ? (b = "href" in t ? (0, i.jsx)(l.a, {
                    className: k,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": x,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": n,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: S
                }) : (0, i.jsx)("button", {
                    className: k,
                    "aria-label": n,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: S
                }), T[30] = t, T[31] = n, T[32] = k, T[33] = S, T[34] = x, T[35] = b) : b = T[35], T[36] !== I || T[37] !== b ? (v = (0, i.jsx)(I, {
                    children: b
                }), T[36] = I, T[37] = b, T[38] = v) : v = T[38], T[39] !== p || T[40] !== y || T[41] !== v ? (w = (0, i.jsx)("span", {
                    ref: p,
                    className: y,
                    children: v
                }), T[39] = p, T[40] = y, T[41] = v, T[42] = w) : w = T[42], w
            }
        })
    }),
    iIHp: (function(e, t, n) {
        var i = n("QosV"),
            a = n("zd8w");
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
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, n) => {
                this.pendingRequest = {
                    confirmation: e,
                    reject: n,
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, r = (0, i.c)(7);
                r[0] !== e ? (t = () => new o(e), r[0] = e, r[1] = t) : t = r[1];
                let [l] = (0, a.useState)(t), s = (0, a.useSyncExternalStore)(l.subscribe, l.getSnapshot, l.getSnapshot);
                return r[2] !== s || r[3] !== l.cancel || r[4] !== l.confirm || r[5] !== l.request ? (n = {
                    cancel: l.cancel,
                    confirmation: s,
                    confirm: l.confirm,
                    request: l.request
                }, r[2] = s, r[3] = l.cancel, r[4] = l.confirm, r[5] = l.request, r[6] = n) : n = r[6], n
            }
        })
    }),
    v7ut: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            o = n("zd8w"),
            r = n("Wf1j"),
            l = n("oyxz"),
            s = n("hL9c"),
            c = n("osar"),
            d = n("eFVb"),
            u = n("W2tE"),
            p = n("v5fl"),
            f = n("Sm6l"),
            g = n("JNtf"),
            m = n("mUDD"),
            h = n("zLIa"),
            x = n("sF0J"),
            C = n("E1V6");

        function _(e) {
            let t, n, s, _, w, T, I, E = (0, a.c)(31),
                {
                    canConfirm: F,
                    context: N,
                    description: j,
                    imageUrls: M,
                    onCancel: R,
                    onConfirm: O,
                    prompt: k,
                    title: P
                } = e,
                S = void 0 === F || F,
                D = (0, r.a)();
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
            let [L] = (0, o.useState)(t), {
                controller: q,
                destroy: U
            } = L;
            (0, C.b)(U, q);
            let B = (0, p.b)(q, y, "document"),
                [W, G] = (0, o.useState)(N);
            E[2] !== N ? (n = v(N), E[2] = N, E[3] = n) : n = E[3];
            let H = n,
                [V, X] = (0, o.useState)(H),
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
            }, E[11] = R, E[12] = w) : w = E[12], E[13] !== S || E[14] !== J || E[15] !== W || E[16] !== V || E[17] !== q || E[18] !== j || E[19] !== B || E[20] !== M || E[21] !== H || E[22] !== D || E[23] !== R || E[24] !== Z || E[25] !== P || E[26] !== z ? (T = "prompt" === z ? (0, i.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), J()
                },
                children: [(0, i.jsx)(b, {
                    description: j,
                    title: P
                }), (0, i.jsx)(c.a, {
                    children: (0, i.jsx)(c.a.Body, {
                        children: (0, i.jsx)(c.a.Input, {
                            children: (0, i.jsx)(u.a, {
                                ariaLabel: D.formatMessage({
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
                }), null != M && M.length > 0 ? (0, i.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: M.map(A)
                }) : null, null != W ? (0, i.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        X(v(W)), K("widget-state")
                    },
                    children: (0, i.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state",
                        description: "Link that opens the editable widget state included with a follow-up prompt"
                    })
                }) : null, (0, i.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, i.jsx)("div", {
                        className: "flex-1"
                    }), (0, i.jsx)(f.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: R,
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    }), (0, i.jsx)(f.a, {
                        disabled: !S || !B,
                        type: "submit",
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send",
                            description: "Confirm button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    })]
                })]
            }) : (0, i.jsxs)(m.b, {
                className: "gap-4",
                children: [(0, i.jsx)(m.d, {
                    title: (0, i.jsx)(g.d, {
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                            description: "Title for the editable widget state view in a follow-up confirmation dialog"
                        })
                    }),
                    subtitle: (0, i.jsx)(g.c, {
                        className: "text-secondary",
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget.",
                            description: "Description for the editable widget state view in a follow-up confirmation dialog"
                        })
                    })
                }), (0, i.jsx)(h.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Z,
                    "aria-label": D.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON",
                        description: "Aria label for the editable JSON widget state in a follow-up confirmation dialog"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: V,
                    onChange: e => {
                        X(e.target.value)
                    }
                }), null == Z ? (0, i.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, i.jsx)(l.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB",
                        description: "Validation error for invalid editable widget state JSON"
                    })
                }) : null, (0, i.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, i.jsx)(f.a, {
                        color: "ghost",
                        disabled: V === H,
                        type: "button",
                        onClick: () => {
                            X(H)
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset",
                            description: "Button that resets edited widget state to the value supplied by the widget"
                        })
                    }), (0, i.jsx)("div", {
                        className: "flex-1"
                    }), (0, i.jsx)(f.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            X(v(W)), K("prompt")
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back",
                            description: "Button that returns from widget state editing to the follow-up prompt"
                        })
                    }), (0, i.jsx)(f.a, {
                        disabled: null == Z,
                        type: "button",
                        onClick: () => {
                            null != Z && (G(Z), K("prompt"))
                        },
                        children: (0, i.jsx)(l.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply",
                            description: "Button that applies edited widget state to a follow-up prompt"
                        })
                    })]
                })]
            }), E[13] = S, E[14] = J, E[15] = W, E[16] = V, E[17] = q, E[18] = j, E[19] = B, E[20] = M, E[21] = H, E[22] = D, E[23] = R, E[24] = Z, E[25] = P, E[26] = z, E[27] = T) : T = E[27], E[28] !== w || E[29] !== T ? (I = (0, i.jsx)(g.a, {
                open: !0,
                onOpenChange: w,
                size: "wide",
                children: T
            }), E[28] = w, E[29] = T, E[30] = I) : I = E[30], I
        }

        function A(e, t) {
            return (0, i.jsx)(s.a, {
                src: e
            }, t)
        }

        function y(e) {
            return e.getText().trim().length > 0
        }

        function b(e) {
            let t, n, o, r, s, c = (0, a.c)(11),
                {
                    description: d,
                    title: u
                } = e;
            return c[0] !== u ? (t = u ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?",
                description: "Title for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (n = (0, i.jsx)(g.d, {
                children: t
            }), c[2] = t, c[3] = n) : n = c[3], c[4] !== d ? (o = d ?? (0, i.jsx)(l.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
                description: "Description for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[4] = d, c[5] = o) : o = c[5], c[6] !== o ? (r = (0, i.jsx)(g.c, {
                className: "text-secondary",
                children: o
            }), c[6] = o, c[7] = r) : r = c[7], c[8] !== n || c[9] !== r ? (s = (0, i.jsx)(m.d, {
                title: n,
                subtitle: r
            }), c[8] = n, c[9] = r, c[10] = s) : s = c[10], s
        }

        function v(e) {
            return null == e ? "" : (0, x.d)(e)
        }
        n.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, n = (0, a.c)(2),
                    {
                        confirmation: o
                    } = e;
                return null == o ? null : (n[0] !== o ? (t = (0, i.jsx)(_, {
                    ...o
                }), n[0] = o, n[1] = t) : t = n[1], t)
            }
        })
    }),
    sF0J: (function(e, t, n) {
        var i = n("SKgO"),
            a = n("ASxG"),
            o = n("sS8e");
        let r = a.object({
            context: i.c.optional(),
            isVisible: a.boolean().optional(),
            prompt: a.string().trim().min(1),
            title: a.string().trim().min(1).max(250).optional()
        }).strip();
        n.d(t, {
            b: () => i.a,
            d: () => i.b
        }, {
            a: function(e) {
                let {
                    context: t,
                    prompt: n
                } = e;
                return null == t ? n : `${n}

Current widget context (JSON):
${(0,i.b)(t)}`
            },
            c: function(e) {
                let t = r.safeParse(e);
                if (!t.success) throw (0, o.c)("Invalid follow-up message", -32602);
                return t.data
            }
        })
    }),
    Yshm: (function(e, t, n) {
        var i = n("ASxG");
        let a = i.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            o = i.object({
                connectedPluginIds: i.array(i.string()).optional(),
                declinedPluginIds: i.array(i.string()).optional()
            }).catchall(i.json()),
            r = i.object({
                pluginId: i.string().min(1),
                suggestionId: a.optional()
            }),
            l = i.object({
                type: i.literal("event"),
                label: i.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: i.object({
                    remote_plugin_id: i.string().min(1).max(256),
                    plugin_ids: i.array(i.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: a
                })
            }),
            s = l.extend({
                label: i.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: l.shape.payload.extend({
                    suggestion_id: a.optional(),
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
                "openai/plugin_suggestion_id": a.optional(),
                "openai/plugin_suggestion_connector_ids": i.record(i.string(), i.string().min(1)).optional().catch(void 0)
            });
        n.d(t, {}, {
            a: r,
            b: c,
            c: u,
            d: o,
            e: d
        })
    }),
    LGZt: (function(e, t, n) {
        var i = n("DNHP");
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, i.Kg)(t),
                    a = document.createElement(e);
                if (a instanceof HTMLIFrameElement) a.setAttribute("sandbox", "allow-scripts allow-same-origin"), a.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", a.shadowRoot?.append(e)
                }
                return a.setAttribute("partition", n), a
            }
        })
    }),
    WYvZ: (function(e, t, n) {
        var i = n("F6B1"),
            a = n("ASxG"),
            o = n("FgIX"),
            r = n("sS8e");
        let l = "CALL",
            s = "RESOLVE",
            c = ["downloadBlob", "getFileDownloadUrl", "getFileMetadata", "invokeDocumentBootstrap", "notifyAutofillCandidates", "openConversationOverlay", "openPlaidLink", "openPromptInput", "requestClose", "requestCloseFocusedObject", "requestConnectPlugin", "requestConnectSheet", "requestDeclinePluginSuggestions", "requestFocusedObject", "requestLinkToConnector", "requestModal", "requestOpenPlugin", "requestReconnectConnector", "requestTargetedReply", "selectFiles", "setOpenInAppUrl", "share", "showToast", "triggerHaptic", "uploadFile"],
            d = i.d,
            u = a.enum(["cold", "warming", "warm"]),
            p = a.object({
                status: a.literal(2),
                type: a.literal("environment_status")
            }).loose(),
            f = a.object({
                href: a.url({
                    protocol: /^(https|codex|codex-dev)$/
                }),
                openMode: a.enum(["tab", "popup"]).optional()
            });

        function g(e, t) {
            return {
                initId: (0, i.g)(t?.getAttribute("src") ?? void 0),
                sandboxId: e
            }
        }

        function m(e) {
            return d.every(t => null != e[t])
        }

        function h(e) {
            return "object" == typeof e && null != e
        }

        function x(e) {
            return !!h(e) && "function" == typeof e.postMessage && "function" == typeof e.start
        }

        function C(e) {
            return e instanceof Error ? {
                ..._(e),
                message: e.message || "MCP sandbox host call failed.",
                name: e.name
            } : null != e && "object" == typeof e && "message" in e && "string" == typeof e.message && e.message.length > 0 ? {
                ..._(e),
                message: e.message
            } : {
                message: "MCP sandbox host call failed."
            }
        }

        function _(e) {
            let t = a.union([a.object({
                code: a.enum(["update_model_context_persistence_failed", "model_context_conflict"]),
                retryable: a.boolean()
            }), r.f]).safeParse("data" in e ? e.data : void 0).data;
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

        function A() {
            let e = Error("MCP sandbox RPC aborted.");
            return e.name = "AbortError", e
        }

        function y() {
            let e = Error("MCP sandbox RPC timed out.");
            return e.name = "TimeoutError", e
        }

        function b(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.start(), n => new Promise((i, a) => {
                let o, r = t.signal,
                    c = void 0 === t.timeoutMs ? 3e4 : t.timeoutMs;
                if (r?.aborted) return void a(A());
                let {
                    port1: d,
                    port2: u
                } = new MessageChannel, p = !1, f = (e, t) => {
                    p || (p = !0, null != o && clearTimeout(o), r?.removeEventListener("abort", g), d.onmessage = null, d.close(), e(t))
                }, g = () => {
                    f(a, A())
                };
                d.onmessage = e => {
                    let t = e.data;
                    t[0] === s ? f(i, t[1]) : f(a, t[1])
                }, r?.addEventListener("abort", g, {
                    once: !0
                }), null != c && (o = setTimeout(() => {
                    f(a, y())
                }, c));
                try {
                    e.postMessage([l, n], [u])
                } catch (e) {
                    f(a, e)
                }
            })
        }
        n.d(t, {}, {
            a: g,
            b: async function(e) {
                var t, n, a, r, d;
                let p, {
                        hostApiHandlers: f,
                        assertActive: _,
                        ...v
                    } = e,
                    {
                        ports: w,
                        replyPort: T
                    } = await
                function(e) {
                    let {
                        onSkybridgeCacheState: t,
                        origin: n,
                        sandboxId: a,
                        signal: o,
                        sourceUrl: r,
                        webview: l
                    } = e, s = crypto.randomUUID();
                    return new Promise((e, c) => {
                        let d;
                        if (o.aborted) return void c(A());
                        let p = () => {
                                window.removeEventListener("message", f), o.removeEventListener("abort", g), null != d && clearTimeout(d)
                            },
                            f = o => {
                                let r = o.data;
                                if (r?.type !== "init") return;
                                if (l instanceof HTMLIFrameElement) {
                                    let t = l.getAttribute("src") ?? void 0;
                                    if (null == l.contentWindow || o.source !== l.contentWindow || o.origin !== n || (0, i.i)(t, {
                                            requireSkybridge: !0
                                        }) !== n || (0, i.g)(t) !== s) return;
                                    let a = function(e) {
                                        if (!h(e)) return null;
                                        let t = i.a.filter(t => Object.hasOwn(e, t));
                                        if (!(0, i.l)(t)) return null;
                                        let n = {};
                                        for (let i of t) {
                                            let t = e[i];
                                            if (!x(t)) return null;
                                            n[i] = t
                                        }
                                        return m(n) ? n : null
                                    }(r.ports);
                                    if (null == a || !x(r.replyPort)) return;
                                    p(), e({
                                        ports: a,
                                        replyPort: r.replyPort
                                    });
                                    return
                                }
                                if (r.origin !== n || r.sandboxId !== a || r.initId !== s || !Array.isArray(r.portNames)) return;
                                let c = r.portNames;
                                if (!(0, i.l)(c) || o.ports.length !== c.length + 1) return;
                                let d = function(e, t) {
                                    let n = {};
                                    for (let [i, a] of e.entries()) {
                                        let e = t[i];
                                        if (!x(e)) return null;
                                        n[a] = e
                                    }
                                    return m(n) ? n : null
                                }(c, o.ports);
                                if (null == d) return;
                                let f = o.ports[c.length];
                                if (null == f) return;
                                let g = u.safeParse(r.skybridgeCacheState);
                                g.success && t?.(g.data), p(), e({
                                    ports: d,
                                    replyPort: f
                                })
                            },
                            g = () => {
                                p(), c(A())
                            };
                        window.addEventListener("message", f), o.addEventListener("abort", g, {
                            once: !0
                        }), d = setTimeout(() => {
                            p(), c(y())
                        }, 2e4);
                        let C = (0, i.e)({
                            initId: s,
                            sandboxId: a,
                            sourceUrl: r
                        });
                        l.getAttribute("src") !== C && l.setAttribute("src", C)
                    })
                }(v), I = g(v.sandboxId, v.webview), E = function(e, t, n) {
                    function i(e, n, i, a) {
                        return function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
                                {
                                    port1: i,
                                    port2: a
                                } = new MessageChannel;
                            return i.onmessage = async i => {
                                let [a, ...o] = i.data, [r] = i.ports;
                                if (a === l && null != r) try {
                                    t?.(), r.postMessage([s, await e(...o)])
                                } catch (e) {
                                    r.postMessage(["REJECT", n(e)])
                                } finally {
                                    r.close()
                                }
                            }, i.start(), a
                        }(function() {
                            for (var a = arguments.length, r = Array(a), l = 0; l < a; l++) r[l] = arguments[l];
                            return (0, o.i)({
                                operation: "App request handling",
                                starting: "Handling app request"
                            }, {
                                safe: {
                                    ...t,
                                    method: e
                                }
                            }, async () => (i?.(), n(...r)), {
                                quiet: e.startsWith("notify") || "sendInstrument" === e || "updateWidgetState" === e
                            })
                        }, void 0, a)
                    }
                    let a = {};
                    for (let t of c) {
                        let o = e[t];
                        null != o && (a[t] = i(t, o, n))
                    }
                    return {
                        ...a,
                        ...null == e.notifyAppBlockMessage ? {} : {
                            notifyAppBlockMessage: i("notifyAppBlockMessage", e.notifyAppBlockMessage)
                        },
                        ...null == e.requestCheckout ? {} : {
                            requestCheckout: i("requestCheckout", e.requestCheckout, n, e => e instanceof Error ? C(e) : e)
                        },
                        ...null == e.notifyEscapeKey ? {} : {
                            notifyEscapeKey: i("notifyEscapeKey", e.notifyEscapeKey)
                        },
                        ...null == e.initializeMcpApp ? {} : {
                            initializeMcpApp: i("initializeMcpApp", e.initializeMcpApp)
                        },
                        callMcp: i("callMcp", e.callMcp, n),
                        callTool: i("callTool", e.callTool, n),
                        notifyBackgroundColor: i("notifyBackgroundColor", e.notifyBackgroundColor),
                        notifyEnvironmentError: i("notifyEnvironmentError", e.notifyEnvironmentError),
                        notifyIntrinsicHeight: i("notifyIntrinsicHeight", e.notifyIntrinsicHeight),
                        notifyIntrinsicWidth: i("notifyIntrinsicWidth", e.notifyIntrinsicWidth),
                        notifyNavigation: i("notifyNavigation", e.notifyNavigation),
                        notifySecurityPolicyViolation: i("notifySecurityPolicyViolation", e.notifySecurityPolicyViolation),
                        openExternal: i("openExternal", e.openExternal, n),
                        requestDisplayMode: i("requestDisplayMode", e.requestDisplayMode, n),
                        sendFollowUpMessage: i("sendFollowUpMessage", e.sendFollowUpMessage, n),
                        sendInstrument: i("sendInstrument", e.sendInstrument),
                        updateWidgetState: i("updateWidgetState", e.updateWidgetState, n)
                    }
                }(f, I, _);
                return T.postMessage(E, Object.values(E)), T.start(), t = w, n = v.signal, a = I, p = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = b(t, i ? {} : {
                            signal: n
                        });
                    return t => (0, o.i)({
                        operation: "App request",
                        starting: "Sending app request"
                    }, {
                        safe: {
                            ...a,
                            method: e
                        }
                    }, async () => r(t), {
                        signal: i ? void 0 : n,
                        quiet: "requestMcpAppsResourceTeardown" !== e && "navigate" !== e
                    })
                }, {
                    applyAutofillCandidate: null == t.applyAutofillCandidate ? void 0 : p("applyAutofillCandidate", t.applyAutofillCandidate),
                    getCurrentPath: null == t.getCurrentPath ? void 0 : p("getCurrentPath", t.getCurrentPath),
                    navigate: p("navigate", t.navigate),
                    notifyMcpAppsHostContext: p("notifyMcpAppsHostContext", t.notifyMcpAppsHostContext),
                    notifyMcpAppsMcpNotification: null == t.notifyMcpAppsMcpNotification ? null : p("notifyMcpAppsMcpNotification", t.notifyMcpAppsMcpNotification),
                    notifyMcpAppsToolCancelled: p("notifyMcpAppsToolCancelled", t.notifyMcpAppsToolCancelled),
                    notifyMcpAppsToolInput: p("notifyMcpAppsToolInput", t.notifyMcpAppsToolInput),
                    notifyMcpAppsToolResult: p("notifyMcpAppsToolResult", t.notifyMcpAppsToolResult),
                    requestMcpAppsResourceTeardown: p("requestMcpAppsResourceTeardown", t.requestMcpAppsResourceTeardown, !0),
                    runWidgetCode: (r = t.runWidgetCode, d = n, r.start(), async function*(e) {
                        let {
                            port1: t,
                            port2: n
                        } = new MessageChannel, {
                            port1: i,
                            port2: a
                        } = new MessageChannel, {
                            port1: o,
                            port2: l
                        } = new MessageChannel, {
                            port1: s,
                            port2: c
                        } = new MessageChannel, u = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return b(e, {
                                ...t,
                                signal: d
                            })
                        }, p = u(t), f = u(i, {
                            timeoutMs: null
                        }), g = u(o), m = u(s);
                        r.postMessage(["GENERATOR_GENERATE", {
                            asyncDispose: n,
                            next: a,
                            return: l,
                            throw: c
                        }, e], [n, a, l, c]);
                        try {
                            let e = await f(void 0);
                            for (; !e.done;) yield e.value, e = await f(void 0);
                            return e.value
                        } catch (e) {
                            if (d.aborted) return;
                            throw await m(e).catch(() => {}), e
                        } finally {
                            d.aborted || await Promise.allSettled([p(void 0), g(void 0)]), [t, i, o, s].forEach(e => {
                                e.close()
                            })
                        }
                    }),
                    setAdditionalGlobals: p("setAdditionalGlobals", t.setAdditionalGlobals),
                    setSafeArea: p("setSafeArea", t.setSafeArea),
                    setTheme: p("setTheme", t.setTheme),
                    setWidgetData: p("setWidgetData", t.setWidgetData),
                    setWidgetView: p("setWidgetView", t.setWidgetView)
                }
            },
            c: f,
            d: p
        })
    }),
    ePaQ: (function(e, t, n) {
        n.d(t, {
            a: () => h
        });
        var i = n("ABep"),
            a = n("QosV"),
            o = n("kSHG"),
            r = n("bFOP"),
            l = n("slpy"),
            s = n("on57"),
            c = n("zd8w"),
            d = n("KxMp"),
            u = n("bf6R"),
            p = n("zSQm"),
            f = n("WAdu");

        function g(e) {
            let t, n, o, r, l, s, c, d = (0, a.c)(21),
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
            return d[2] !== g ? (n = (0, i.jsx)("div", {
                className: "branding-xlBboz",
                children: g
            }), d[2] = g, d[3] = n) : n = d[3], d[4] !== u ? (o = (0, i.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = o) : o = d[5], d[6] !== p ? (r = null != p && (0, i.jsx)("div", {
                className: "subtitle-gArrij",
                children: p
            }), d[6] = p, d[7] = r) : r = d[7], d[8] !== f || d[9] !== x || d[10] !== u ? (l = null != f && (0, i.jsx)("div", {
                className: x ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: x ? 0 : void 0,
                children: f
            }), d[8] = f, d[9] = x, d[10] = u, d[11] = l) : l = d[11], d[12] !== m ? (s = null != m && (0, i.jsx)("div", {
                className: "followUp-otVo0x",
                children: m
            }), d[12] = m, d[13] = s) : s = d[13], d[14] !== h || d[15] !== n || d[16] !== o || d[17] !== r || d[18] !== l || d[19] !== s ? (c = (0, i.jsxs)("div", {
                className: "content-cuuiWn",
                children: [n, o, r, l, h, s]
            }), d[14] = h, d[15] = n, d[16] = o, d[17] = r, d[18] = l, d[19] = s, d[20] = c) : c = d[20], c
        }
        var m = n("Nfif");

        function h(e) {
            let t, n, o, s, d = (0, a.c)(32),
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
                let e, t, n = !!h || void 0;
                return d[0] !== u ? (e = (0, i.jsx)("span", {
                    className: "inline-flex",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== p || d[3] !== f.title || d[4] !== n || d[5] !== e ? (t = (0, i.jsx)(l.a, {
                    content: f.title,
                    disabled: p,
                    forceOpen: n,
                    children: e
                }), d[2] = p, d[3] = f.title, d[4] = n, d[5] = e, d[6] = t) : t = d[6], t
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
                d[13] !== m || d[14] !== f || d[15] !== y || d[16] !== g ? (e = (0, i.jsx)(C, {
                    metadata: f,
                    sourceAppId: g,
                    followUp: m,
                    presentation: y
                }), d[13] = m, d[14] = f, d[15] = y, d[16] = g, d[17] = e) : e = d[17], I = e
            }
            let E = !p && (h || w);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => T(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== v || d[21] !== _ ? (n = (0, i.jsx)(x, {
                openOnClick: _,
                closeOnTriggerClick: v,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = v, d[21] = _, d[22] = n) : n = d[22];
            let F = "file" === y ? 344 : 320,
                N = "file" === y ? 10 : 6;
            return d[23] !== I || d[24] !== f.title || d[25] !== F || d[26] !== N ? (o = (0, i.jsx)(r.a.Content, {
                "aria-label": f.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: N,
                children: I
            }), d[23] = I, d[24] = f.title, d[25] = F, d[26] = N, d[27] = o) : o = d[27], d[28] !== E || d[29] !== n || d[30] !== o ? (s = (0, i.jsxs)(r.a, {
                showOnHover: !0,
                open: E,
                onOpenChange: T,
                children: [n, o]
            }), d[28] = E, d[29] = n, d[30] = o, d[31] = s) : s = d[31], s
        }

        function x(e) {
            let t, n, o, l = (0, a.c)(10),
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
            }, l[0] = p, l[1] = d, l[2] = u, l[3] = c, l[4] = t) : t = l[4], l[5] !== s ? (n = (0, i.jsx)("span", {
                className: "group/mcp-source-citation inline-flex",
                tabIndex: -1,
                children: s
            }), l[5] = s, l[6] = n) : n = l[6], l[7] !== t || l[8] !== n ? (o = (0, i.jsx)(r.a.Trigger, {
                onClick: t,
                children: n
            }), l[7] = t, l[8] = n, l[9] = o) : o = l[9], o
        }

        function C(e) {
            let t, n, r, l, h, x, C, _, A = (0, a.c)(53),
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
                } = o.v.safeParse(y.icons?.[0]), n = e?.src;
                t = null == n ? void 0 : (0, p.b)(n), A[0] = y.icons?.[0], A[1] = t
            } else t = A[1];
            let I = t;
            A[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsx)(u.Di, {}), A[2] = n) : n = A[2];
            let E = n;
            if ("restricted" !== T) {
                if (null != y.url) {
                    let e;
                    A[3] !== y.url ? (e = (0, i.jsx)(d.a, {
                        href: y.url,
                        className: "size-4"
                    }), A[3] = y.url, A[4] = e) : e = A[4], E = e
                } else if (null != I) {
                    let e, t, n = null == b && "dark:brightness-0 dark:invert";
                    A[5] !== n ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", n), A[5] = n, A[6] = e) : e = A[6], A[7] !== I || A[8] !== e ? (t = (0, i.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: I
                    }), A[7] = I, A[8] = e, A[9] = t) : t = A[9], E = t
                }
            }
            if ("file" === w && null != b) {
                let e, t, n = y.hoverCard?.title ?? y.title,
                    a = y.hoverCard?.subtitle,
                    o = y.hoverCard?.body;
                return A[10] !== b ? (e = (0, i.jsx)(m.a, {
                    appId: b,
                    showName: !0,
                    presentation: "file"
                }), A[10] = b, A[11] = e) : e = A[11], A[12] !== v || A[13] !== n || A[14] !== a || A[15] !== o || A[16] !== e ? (t = (0, i.jsx)(g, {
                    title: n,
                    subtitle: a,
                    body: o,
                    branding: e,
                    followUp: v
                }), A[12] = v, A[13] = n, A[14] = a, A[15] = o, A[16] = e, A[17] = t) : t = A[17], t
            }
            if (null != b) {
                let e, t, n, a, o, r;
                A[18] !== b ? (e = (0, i.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(m.a, {
                        appId: b,
                        showName: !0
                    })
                }), A[18] = b, A[19] = e) : e = A[19];
                let l = y.hoverCard?.title ?? y.title;
                return A[20] !== l ? (t = (0, i.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: l
                }), A[20] = l, A[21] = t) : t = A[21], A[22] !== y.hoverCard ? (n = y.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: y.hoverCard.subtitle
                }), A[22] = y.hoverCard, A[23] = n) : n = A[23], A[24] !== y.hoverCard || A[25] !== y.title ? (a = y.hoverCard?.body != null && (0, i.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": y.title,
                    tabIndex: 0,
                    children: y.hoverCard.body
                }), A[24] = y.hoverCard, A[25] = y.title, A[26] = a) : a = A[26], A[27] !== v ? (o = null != v && (0, i.jsx)("div", {
                    children: v
                }), A[27] = v, A[28] = o) : o = A[28], A[29] !== e || A[30] !== t || A[31] !== n || A[32] !== a || A[33] !== o ? (r = (0, i.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, n, a, o]
                }), A[29] = e, A[30] = t, A[31] = n, A[32] = a, A[33] = o, A[34] = r) : r = A[34], r
            }
            let F = y.hoverCard?.title ?? y.title;
            return A[35] !== F ? (r = (0, i.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), A[35] = F, A[36] = r) : r = A[36], A[37] !== y.hoverCard ? (l = y.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: y.hoverCard.subtitle
            }), A[37] = y.hoverCard, A[38] = l) : l = A[38], A[39] !== r || A[40] !== l ? (h = (0, i.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [r, l]
            }), A[39] = r, A[40] = l, A[41] = h) : h = A[41], A[42] !== y.hoverCard || A[43] !== y.title ? (x = y.hoverCard?.body != null && (0, i.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": y.title,
                tabIndex: 0,
                children: y.hoverCard.body
            }), A[42] = y.hoverCard, A[43] = y.title, A[44] = x) : x = A[44], A[45] !== E || A[46] !== y.hoverCard?.title || A[47] !== y.title ? (C = y.hoverCard?.title != null && (0, i.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [E, (0, i.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: y.title
                })]
            }), A[45] = E, A[46] = y.hoverCard?.title, A[47] = y.title, A[48] = C) : C = A[48], A[49] !== h || A[50] !== x || A[51] !== C ? (_ = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, C]
            }), A[49] = h, A[50] = x, A[51] = C, A[52] = _) : _ = A[52], _
        }
    }),
    JAYD: (function(e, t, n) {
        var i = n("BolX"),
            a = n("DNHP"),
            o = n("OiCI"),
            r = n("cLdu"),
            l = n("OWtl");
        let s = (0, i.d)(l.a, (e, t) => {
            let {
                get: n
            } = t, i = n(o.b);
            if (null == i) return !1;
            let l = n(r.h, {
                accountId: i,
                hostId: a.Vb,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !l.isPending && !l.isError && l.data?.some(t => {
                let {
                    appIds: n,
                    plugin: i
                } = t;
                return n?.includes(e) && i.installed && i.enabled && "AVAILABLE" === i.availability && null == i.disabledReason
            }) === !0
        });
        n.d(t, {}, {
            a: s
        })
    }),
    Nfif: (function(e, t, n) {
        n.d(t, {
            a: () => x
        });
        var i = n("ABep"),
            a = n("QosV"),
            o = n("on57"),
            r = n("DNHP"),
            l = n("zd8w"),
            s = n("oyxz"),
            c = n("BQbE"),
            d = n("bf6R"),
            u = n("E6P3"),
            p = n("zSQm"),
            f = n("WAdu"),
            g = n("a6Zv"),
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
            h = n("ZRyR");

        function x(e) {
            let t, n, x, C, _, A, y, b = (0, a.c)(21),
                {
                    appId: v,
                    showName: w,
                    presentation: T
                } = e,
                I = void 0 !== w && w,
                E = (0, l.useContext)(f.a);
            b[0] !== v ? (t = [v], b[0] = v, b[1] = t) : t = b[1];
            let F = "restricted" !== E;
            b[2] !== t || b[3] !== F ? (n = {
                appIds: t,
                hostId: r.Vb,
                enabled: F
            }, b[2] = t, b[3] = F, b[4] = n) : n = b[4];
            let {
                data: N
            } = (0, c.c)(n), j = N?.find(e => e.id === v), M = (0, g.a)() ? j?.iconUrlDark ?? j?.iconUrl : j?.iconUrl, R = null == M ? void 0 : (0, p.b)(M);
            b[5] !== T ? (x = "file" === T ? (0, i.jsx)("span", {
                className: (0, o.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, i.jsx)(m, {
                    "aria-hidden": "true"
                })
            }) : (0, i.jsx)(d.Di, {}), b[5] = T, b[6] = x) : x = b[6];
            let O = x;
            b[7] !== O || b[8] !== E || b[9] !== T || b[10] !== R ? (C = "restricted" !== E && null != R ? (0, i.jsx)(u.a, {
                className: (0, o.b)("shrink-0", "file" === T ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: R,
                fallback: O
            }, R) : O, b[7] = O, b[8] = E, b[9] = T, b[10] = R, b[11] = C) : C = b[11];
            let k = C;
            return b[12] !== k || b[13] !== T ? (_ = "file" === T ? (0, i.jsx)("span", {
                className: "size-4 shrink-0",
                children: k
            }) : k, b[12] = k, b[13] = T, b[14] = _) : _ = b[14], b[15] !== j?.name || b[16] !== I ? (A = I && (j?.name ?? (0, i.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), b[15] = j?.name, b[16] = I, b[17] = A) : A = b[17], b[18] !== _ || b[19] !== A ? (y = (0, i.jsxs)(i.Fragment, {
                children: [_, A]
            }), b[18] = _, b[19] = A, b[20] = y) : y = b[20], y
        }
    }),
    xsLm: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                let n, {
                    threshold: i = .5,
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
                    s = a?.(e) ?? (null != t && t.isIntersecting && t.intersectionRatio >= i), d()
                }, {
                    threshold: i
                });

                function p() {
                    s = !1, u.disconnect(), u.takeRecords(), c || "visible" !== l.visibilityState || u.observe(e)
                }

                function f() {
                    c = !0, u.disconnect(), l.removeEventListener("visibilitychange", p), n?.()
                }
                return l.addEventListener("visibilitychange", p), n = r?.(d, p), p(), f
            }
        })
    }),
    RiLw: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            o = n("oyxz"),
            r = n("bf6R"),
            l = n("UxN3"),
            s = n("Y3Vu"),
            c = n("Q81T");
        let d = (0, i.jsx)(l.b, {
            className: c.a.shareIcon,
            icon: {
                16: r.L,
                20: r.M
            }
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, l, c, u = (0, a.c)(9);
                u[0] !== e ? ({
                    children: t,
                    leading: r,
                    ...n
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = r) : (t = u[1], n = u[2], r = u[3]);
                let p = void 0 === r ? d : r;
                return u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, i.jsx)(o.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share",
                        description: "Button for sharing an artifact from its viewer"
                    })
                }), u[4] = l) : l = u[4], u[5] !== t || u[6] !== p || u[7] !== n ? (c = (0, i.jsxs)(s.a, {
                    focusRing: "inset",
                    ...n,
                    children: [p, l, t]
                }), u[5] = t, u[6] = p, u[7] = n, u[8] = c) : c = u[8], c
            }
        })
    })
};