export const __rspack_esm_ids = [307315];
export const __webpack_modules__ = {
    sM3V: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("a4MG"),
            i = o("OWtl"),
            l = o("tl5a");
        let a = (0, n.d)(i.a, (e, t) => {
                let {
                    hostId: o,
                    conversationId: n
                } = e, {
                    get: r
                } = t;
                if (n.startsWith("chatgpt:")) return null;
                let i = r(l.hc, {
                    hostId: o,
                    threadId: n
                });
                return null != i && "notLoaded" !== i.type ? n : null
            }),
            s = (0, n.d)(i.a, (e, t) => {
                let {
                    get: o
                } = t, n = o(a, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }), {
                    data: i
                } = null == n ? o(r.n, e.hostId) : o(r.o, {
                    hostId: e.hostId,
                    threadId: n,
                    serverName: e.serverName
                });
                return i?.data.find(t => t.name === e.serverName)?.serverInfo ?? null
            });
        o.d(t, {}, {
            a: s,
            b: a
        })
    }),
    VvpR: (function(e, t, o) {
        var n = o("SRbQ"),
            r = o("Y5Sy"),
            i = o("Dgwo"),
            l = o("dF4Z"),
            a = o("NTGw"),
            s = o("syw5");
        o.d(t, {}, {
            a: async function(e, t, o, a) {
                let c = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, i.b)(e, t),
                        u = (0, n.a)(c, await d.getFollowUpContext(o, !0), !1);
                    if (e.get(r.a)) throw new l.a;
                    await d.editLastUserTurn(o, {
                        ...a,
                        writingBlockContextPrepared: null != u,
                        additionalContext: (0, s.a)(o, u?.writingBlocks, a.additionalContext)
                    })
                } catch (e) {
                    c.error = e, c.hasError = !0
                } finally {
                    (0, n.e)(c)
                }
            },
            b: async function(e, t, o, r, l) {
                let a = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, i.b)(e, t),
                        d = (0, n.a)(a, await c.getFollowUpContext(o, !0), !1);
                    await c.retrySafetyBufferedTurn(o, r, l, {
                        additionalContext: (0, s.a)(o, d?.writingBlocks),
                        writingBlockContextPrepared: null != d
                    })
                } catch (e) {
                    a.error = e, a.hasError = !0
                } finally {
                    (0, n.e)(a)
                }
            },
            c: async function(e, t, o, r) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let a = (0, i.b)(e, t),
                        c = (0, n.a)(l, await a.getFollowUpContext(o, !0), !1);
                    await a.startEmptyTurn(o, {
                        ...r,
                        writingBlockContextPrepared: null != c,
                        additionalContext: (0, s.a)(o, c?.writingBlocks, r.additionalContext)
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, n.e)(l)
                }
            },
            d: async function(e, t, o, r) {
                let l = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, i.b)(e, t),
                        d = (0, n.a)(l, await c.getFollowUpContext(o, !0), !1);
                    return await c.startTurn(o, {
                        ...r,
                        context: {
                            ...r.context,
                            onRequestDispatched: r.context?.onRequestDispatched ?? (e => {
                                null != r.request.clientUserMessageId && a.a.markRequestDispatched(r.request.clientUserMessageId, e)
                            }),
                            trace: r.context?.trace ?? (null == r.request.clientUserMessageId ? void 0 : a.a.getTrace(r.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != d
                        },
                        request: {
                            ...r.request,
                            additionalContext: (0, s.a)(o, d?.writingBlocks, r.request.additionalContext)
                        }
                    })
                } catch (e) {
                    l.error = e, l.hasError = !0
                } finally {
                    (0, n.e)(l)
                }
            }
        })
    }),
    Ooax: (function(e, t, o) {
        var n = o("ASxG");
        let r = n.string().regex(/^link_[0-9a-f]{32}$/),
            i = n.string().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            l = n.object({
                connector_id: i,
                target_link_id: r
            }),
            a = n.object({
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
                    link_id: r
                }),
                _meta: n.object({
                    _codex_apps: n.object({
                        connector_auth_request: a
                    })
                })
            });
        o.d(t, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(e) {
                return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
            },
            c: function(e, t) {
                let o = l.safeParse(e).data,
                    n = s.safeParse(t).data;
                if (null == o || null == n) return null;
                let r = n._meta._codex_apps.connector_auth_request,
                    {
                        link_id: i
                    } = n.structuredContent;
                return o.target_link_id !== i ? null : {
                    ...r,
                    link_id: i
                }
            }
        })
    }),
    PrVQ: (function(e, t, o) {
        var n = o("kSHG"),
            r = o("iTtm"),
            i = o("P61R"),
            l = o("qx55"),
            a = o("DKJJ"),
            s = o("P93s"),
            c = o("OWtl"),
            d = o("tSEg"),
            u = o("WFY2"),
            p = o("oo2L"),
            f = o("Ooax"),
            g = o("Sbyb");
        let m = (0, r.v)(c.a, e => !1);
        o.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: o,
                    hostId: n,
                    sourceId: r,
                    resourceUri: s,
                    resourceIdentity: c,
                    toolInput: h,
                    toolResult: x,
                    assertActive: C,
                    onReconnected: b
                } = e;
                if (s !== f.a || null == x || c?.identity.kind !== "connector" || c.identity.connectorId !== i.a) return;
                let A = (0, f.c)(h, (0, a.f)({
                    isCodexAppsServer: !0,
                    toolResult: x
                }));
                if (null == A) return;
                let y = null == A.auth_type ? null : (0, p.o)({
                    id: A.link_id,
                    connector_id: A.connector_id,
                    auth_type: A.auth_type,
                    auth_strategy_id: A.auth_strategy_id
                });
                if ("API_KEY" === A.auth_type && null == y) return;
                let v = e => {
                    if (e.throwIfAborted(), C?.(), t.get(d.j) || "current" !== t.get(l.d, c)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    v(e);
                    let i = await (0, g.requestMcpConnectSheet)(t, {
                            connectorId: A.connector_id,
                            hostId: n,
                            oauthPresentation: "popup",
                            productSku: o,
                            startOAuthDirectly: "reauthentication_required" === A.auth_reason && "OAUTH" === y,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: A.link_id,
                                authReason: A.auth_reason
                            },
                            beforeConnect: async () => (v(e), !0),
                            signal: e
                        }),
                        l = i.didConnect && i.linkId === A.link_id;
                    if (l && null != b) {
                        let o = JSON.stringify([n, c.identity.accountId, c.identity.userId, r, A.link_id]);
                        t.get(m, o) || (v(e), t.set(m, o, !0), b(A.connector_name?.trim() || A.connector_id).catch(e => {
                            u.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: l
                    }
                }
            },
            b: async function() {
                throw (0, s.a)("This action is unavailable for the sign-in widget", n.q.MethodNotFound)
            }
        })
    }),
    PYah: (function(e, t, o) {
        var n = o("Dgwo");
        o.d(t, {}, {
            a: async function(e, t, o, r) {
                let {
                    apps: i
                } = await (0, n.b)(e, t).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: o
                }, null == r ? void 0 : {
                    threadAccess: r,
                    coalesce: !1
                });
                return new Set(i.filter(e => {
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
        var n = o("iRMi"),
            r = o("yGJW"),
            i = o("YTYy");
        let l = {
            pptx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        o.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, o) {
                let {
                    importKind: n
                } = e;
                if ("pptx" !== n && "xlsx" !== n && "csv" !== n && "tsv" !== n || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let r = t?.target,
                    i = null != r && "fileId" in r ? r.fileId : void 0,
                    l = o?.libraryFileId ?? (null != r && "libraryFileId" in r ? r.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: n,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != i && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(i) ? i : void 0,
                    libraryFileId: null != l && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(l) ? l : void 0
                }
            },
            c: function(e, t, o, a) {
                if (null == t) return;
                let s = t.threadId ?? void 0;
                (0, r.a)(e, n.CodexArtifactFileActionClicked, {
                    artifactKind: "pptx" === t.sourceFormat || "native-slides" === t.sourceFormat ? n.CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION : n.CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET,
                    backing: {
                        file: n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_FILE,
                        "native-page": n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_NATIVE_PAGE,
                        "artifact-session": n.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_ARTIFACT_SESSION
                    } [t.backing],
                    sourceFormat: l[t.sourceFormat],
                    surface: "output-card" === t.surface ? n.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_OUTPUT_CARD : n.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_VIEWER,
                    action: {
                        download: n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_DOWNLOAD,
                        export: n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_EXPORT,
                        "open-in-app": n.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_OPEN_IN_APP
                    } [o],
                    targetFormat: null == a.format ? void 0 : l[a.format],
                    targetApp: a.app,
                    productExperience: (0, i.a)(e, s),
                    threadId: s,
                    turnId: t.turnId ?? void 0,
                    pageId: t.pageId,
                    fileId: t.fileId,
                    libraryFileId: t.libraryFileId
                })
            }
        })
    }),
    r21w: (function(e, t, o) {
        o.d(t, {
            a: () => l
        });
        var n = o("ABep"),
            r = o("QosV"),
            i = o("on57");

        function l(e) {
            let t, o, l, a, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...o
            } = e, s[0] = e, s[1] = t, s[2] = o) : (t = s[1], o = s[2]), s[3] !== t ? (l = (0, i.b)("Placeholder-M5Cmfu", t), s[3] = t, s[4] = l) : l = s[4], s[5] !== o || s[6] !== l ? (a = (0, n.jsx)("div", {
                className: l,
                ...o
            }), s[5] = o, s[6] = l, s[7] = a) : a = s[7], a
        }
    }),
    F8wW: (function(e, t, o) {
        var n = o("QosV"),
            r = o("zd8w");
        class i {
            pendingRequest = null;
            confirmation = null;
            listeners = new Set;
            errors;
            constructor(e) {
                this.errors = e
            }
            getSnapshot = () => this.confirmation;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e), 0 === this.listeners.size && this.cancel()
            });
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, o) => {
                this.pendingRequest = {
                    reject: o,
                    resolve: t
                }, this.setConfirmation(e)
            });
            confirm = e => {
                let t = this.takePendingRequest();
                null != t && (this.setConfirmation(null), t.resolve(e))
            };
            cancel = () => {
                let e = this.takePendingRequest();
                null != e && (this.setConfirmation(null), e.reject(this.errors.createCanceledError()))
            };
            setConfirmation(e) {
                for (let t of (this.confirmation = e, this.listeners)) t()
            }
            takePendingRequest() {
                let e = this.pendingRequest;
                return this.pendingRequest = null, e
            }
        }
        o.d(t, {}, {
            a: function(e) {
                let t, o, l = (0, n.c)(7);
                l[0] !== e ? (t = () => new i(e), l[0] = e, l[1] = t) : t = l[1];
                let [a] = (0, r.useState)(t), s = (0, r.useSyncExternalStore)(a.subscribe, a.getSnapshot, a.getSnapshot);
                return l[2] !== s || l[3] !== a.cancel || l[4] !== a.confirm || l[5] !== a.request ? (o = {
                    cancel: a.cancel,
                    confirmation: s,
                    confirm: a.confirm,
                    request: a.request
                }, l[2] = s, l[3] = a.cancel, l[4] = a.confirm, l[5] = a.request, l[6] = o) : o = l[6], o
            }
        })
    }),
    RFeS: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            i = o("zd8w"),
            l = o("Wf1j"),
            a = o("oyxz"),
            s = o("hL9c"),
            c = o("osar"),
            d = o("wgrH"),
            u = o("W2tE"),
            p = o("v5fl"),
            f = o("ygO2"),
            g = o("JNtf"),
            m = o("mUDD"),
            h = o("zLIa"),
            x = o("E1V6"),
            C = o("Ztsm");

        function b(e) {
            let t, o, s, b, _, T, I, F = (0, r.c)(31),
                {
                    canConfirm: E,
                    context: j,
                    description: k,
                    imageUrls: M,
                    onCancel: O,
                    onConfirm: N,
                    prompt: P,
                    title: S
                } = e,
                R = void 0 === E || E,
                q = (0, l.a)();
            F[0] !== P ? (t = () => {
                let e = (0, d.b)(P, {
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
            }, F[0] = P, F[1] = t) : t = F[1];
            let [L] = (0, i.useState)(t), {
                controller: D,
                destroy: U
            } = L;
            (0, x.b)(U, D);
            let z = (0, p.b)(D, y, "document"),
                [W, B] = (0, i.useState)(j);
            F[2] !== j ? (o = w(j), F[2] = j, F[3] = o) : o = F[3];
            let V = o,
                [X, G] = (0, i.useState)(V),
                [H, K] = (0, i.useState)("prompt");
            F[4] !== X ? (s = function(e) {
                try {
                    return (0, C.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(X), F[4] = X, F[5] = s) : s = F[5];
            let Z = s;
            F[6] !== R || F[7] !== W || F[8] !== D || F[9] !== N ? (b = () => {
                let e = D.getText().trim();
                R && e.length > 0 && N((0, C.a)({
                    context: W,
                    prompt: e
                }))
            }, F[6] = R, F[7] = W, F[8] = D, F[9] = N, F[10] = b) : b = F[10];
            let Q = b;
            return F[11] !== O ? (_ = e => {
                e || O()
            }, F[11] = O, F[12] = _) : _ = F[12], F[13] !== R || F[14] !== Q || F[15] !== W || F[16] !== X || F[17] !== D || F[18] !== k || F[19] !== z || F[20] !== M || F[21] !== V || F[22] !== q || F[23] !== O || F[24] !== Z || F[25] !== S || F[26] !== H ? (T = "prompt" === H ? (0, n.jsxs)(m.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), Q()
                },
                children: [(0, n.jsx)(v, {
                    description: k,
                    title: S
                }), (0, n.jsx)(c.a, {
                    children: (0, n.jsx)(c.a.Body, {
                        children: (0, n.jsx)(c.a.Input, {
                            children: (0, n.jsx)(u.a, {
                                ariaLabel: q.formatMessage({
                                    id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                    defaultMessage: "Prompt",
                                    description: "Aria label for the editable prompt field in the MCP app follow-up confirmation dialog"
                                }),
                                composerController: D,
                                linkOpenTarget: "external-browser",
                                placeholder: "",
                                onSubmit: Q
                            })
                        })
                    })
                }), null != M && M.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: M.map(A)
                }) : null, null != W ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-info underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        G(w(W)), K("widget-state")
                    },
                    children: (0, n.jsx)(a.a, {
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
                        onClick: O,
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: !R || !z,
                        type: "submit",
                        children: (0, n.jsx)(a.a, {
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
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                            description: "Title for the editable widget state view in a follow-up confirmation dialog"
                        })
                    }),
                    subtitle: (0, n.jsx)(g.d, {
                        className: "text-secondary",
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget.",
                            description: "Description for the editable widget state view in a follow-up confirmation dialog"
                        })
                    })
                }), (0, n.jsx)(h.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == Z,
                    "aria-label": q.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON",
                        description: "Aria label for the editable JSON widget state in a follow-up confirmation dialog"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: X,
                    onChange: e => {
                        G(e.target.value)
                    }
                }), null == Z ? (0, n.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, n.jsx)(a.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB",
                        description: "Validation error for invalid editable widget state JSON"
                    })
                }) : null, (0, n.jsxs)(m.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(f.a, {
                        color: "ghost",
                        disabled: X === V,
                        type: "button",
                        onClick: () => {
                            G(V)
                        },
                        children: (0, n.jsx)(a.a, {
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
                            G(w(W)), K("prompt")
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back",
                            description: "Button that returns from widget state editing to the follow-up prompt"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: null == Z,
                        type: "button",
                        onClick: () => {
                            null != Z && (B(Z), K("prompt"))
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply",
                            description: "Button that applies edited widget state to a follow-up prompt"
                        })
                    })]
                })]
            }), F[13] = R, F[14] = Q, F[15] = W, F[16] = X, F[17] = D, F[18] = k, F[19] = z, F[20] = M, F[21] = V, F[22] = q, F[23] = O, F[24] = Z, F[25] = S, F[26] = H, F[27] = T) : T = F[27], F[28] !== _ || F[29] !== T ? (I = (0, n.jsx)(g.b, {
                open: !0,
                onOpenChange: _,
                size: "wide",
                children: T
            }), F[28] = _, F[29] = T, F[30] = I) : I = F[30], I
        }

        function A(e, t) {
            return (0, n.jsx)(s.a, {
                src: e
            }, t)
        }

        function y(e) {
            return e.getText().trim().length > 0
        }

        function v(e) {
            let t, o, i, l, s, c = (0, r.c)(11),
                {
                    description: d,
                    title: u
                } = e;
            return c[0] !== u ? (t = u ?? (0, n.jsx)(a.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?",
                description: "Title for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (o = (0, n.jsx)(g.e, {
                children: t
            }), c[2] = t, c[3] = o) : o = c[3], c[4] !== d ? (i = d ?? (0, n.jsx)(a.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
                description: "Description for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[4] = d, c[5] = i) : i = c[5], c[6] !== i ? (l = (0, n.jsx)(g.d, {
                className: "text-secondary",
                children: i
            }), c[6] = i, c[7] = l) : l = c[7], c[8] !== o || c[9] !== l ? (s = (0, n.jsx)(m.d, {
                title: o,
                subtitle: l
            }), c[8] = o, c[9] = l, c[10] = s) : s = c[10], s
        }

        function w(e) {
            return null == e ? "" : (0, C.d)(e)
        }
        o.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, o = (0, r.c)(2),
                    {
                        confirmation: i
                    } = e;
                return null == i ? null : (o[0] !== i ? (t = (0, n.jsx)(b, {
                    ...i
                }), o[0] = i, o[1] = t) : t = o[1], t)
            }
        })
    }),
    lu7q: (function(e, t, o) {
        var n = o("ASxG"),
            r = o("Ztsm");
        class i extends Error {
            code = -32e3;
            constructor() {
                super("Follow-up message was not confirmed")
            }
        }
        class l extends Error {
            code = -32e3;
            constructor() {
                super("A follow-up message is already awaiting confirmation")
            }
        }
        o.d(t, {}, {
            a: {
                createAlreadyPendingError: () => new l,
                createCanceledError: () => new i
            },
            b: function(e) {
                return (0, r.c)(e)
            },
            c: async function(e, t, o, r) {
                let {
                    text: i
                } = n.object({
                    text: n.string().min(1)
                }).parse(e), l = await o({
                    prompt: i
                });
                r.throwIfAborted(), await t({
                    text: l
                })
            }
        })
    }),
    we56: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("i8Zd"),
            i = o("OWtl");
        let l = (0, n.c)(i.a, e => {
            let {
                get: t
            } = e;
            return t(r.a),
                function() {
                    let e = getComputedStyle(document.documentElement),
                        t = document.createElement("div");
                    t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                    let o = t => {
                            let o = e.getPropertyValue(t).trim();
                            return o.length > 0 ? o : void 0
                        },
                        n = o => {
                            let n = a(e, t, o, "color"),
                                r = a(e, t, "--color-surface-tertiary", "color");
                            if (null != n && null != r) return `color-mix(in srgb, ${n} 12%, ${r})`
                        };
                    try {
                        let r, i, l, s, c, d, u, p, f, g, m, h, x, C, b, A, y, v, w, _, T, I, F, E, j, k, M, O, N, P, S, R, q, L, D, U;
                        return {
                            "--color-background-primary": (r = "--app-color-background-surface", a(e, t, r, "color") ?? (i = "--color-surface-tertiary", a(e, t, i, "color"))),
                            "--color-background-secondary": (l = "--color-surface-elevated", a(e, t, l, "color")),
                            "--color-background-tertiary": (s = "--color-surface-secondary", a(e, t, s, "color")),
                            "--color-background-inverse": (c = "--color-text", a(e, t, c, "color")),
                            "--color-background-ghost": "transparent",
                            "--color-background-info": (d = "--codex-theme-accent-background-subtle", a(e, t, d, "color") ?? (u = "--color-background-info-soft", a(e, t, u, "color"))),
                            "--color-background-danger": (p = "--color-background-danger-surface", a(e, t, p, "color")),
                            "--color-background-success": n("--color-codex-git-added"),
                            "--color-background-warning": n("--color-text-warning"),
                            "--color-background-disabled": (f = "--color-background-primary-soft-active", a(e, t, f, "color")),
                            "--color-text-primary": (g = "--color-text", a(e, t, g, "color")),
                            "--color-text-secondary": (m = "--color-text-secondary", a(e, t, m, "color")),
                            "--color-text-tertiary": (h = "--color-codex-description", a(e, t, h, "color")),
                            "--color-text-inverse": (x = "--color-text-inverse", a(e, t, x, "color") ?? (C = "--color-surface-tertiary", a(e, t, C, "color"))),
                            "--color-text-ghost": (b = "--color-codex-description", a(e, t, b, "color")),
                            "--color-text-info": (A = "--color-text-info", a(e, t, A, "color")),
                            "--color-text-danger": (y = "--color-text-danger", a(e, t, y, "color")),
                            "--color-text-success": (v = "--color-codex-git-added", a(e, t, v, "color")),
                            "--color-text-warning": (w = "--color-text-warning", a(e, t, w, "color")),
                            "--color-text-disabled": (_ = "--color-codex-description", a(e, t, _, "color")),
                            "--color-border-primary": (T = "--color-border-primary-outline", a(e, t, T, "color")),
                            "--color-border-secondary": (I = "--color-border", a(e, t, I, "color")),
                            "--color-border-tertiary": (F = "--color-border", a(e, t, F, "color")),
                            "--color-border-inverse": (E = "--color-text", a(e, t, E, "color")),
                            "--color-border-ghost": "transparent",
                            "--color-border-info": (j = "--color-ring", a(e, t, j, "color")),
                            "--color-border-danger": (k = "--color-text-danger", a(e, t, k, "color")),
                            "--color-border-success": (M = "--color-codex-git-added", a(e, t, M, "color")),
                            "--color-border-warning": (O = "--color-text-warning", a(e, t, O, "color")),
                            "--color-border-disabled": (N = "--color-border-primary-outline", a(e, t, N, "color")),
                            "--color-ring-primary": (P = "--color-ring", a(e, t, P, "color")),
                            "--color-ring-secondary": (S = "--color-ring", a(e, t, S, "color")),
                            "--color-ring-inverse": (R = "--color-ring", a(e, t, R, "color")),
                            "--color-ring-info": (q = "--color-ring", a(e, t, q, "color")),
                            "--color-ring-danger": (L = "--color-text-danger", a(e, t, L, "color")),
                            "--color-ring-success": (D = "--color-codex-git-added", a(e, t, D, "color")),
                            "--color-ring-warning": (U = "--color-text-warning", a(e, t, U, "color")),
                            "--font-sans": a(e, t, "--font-sans", "fontFamily"),
                            "--font-mono": a(e, t, "--font-mono", "fontFamily"),
                            "--font-weight-normal": a(e, t, "--font-ui-weight", "fontWeight"),
                            "--font-weight-medium": a(e, t, "--font-weight-medium", "fontWeight"),
                            "--font-weight-semibold": a(e, t, "--font-weight-semibold", "fontWeight"),
                            "--font-weight-bold": a(e, t, "--font-weight-bold", "fontWeight"),
                            "--font-text-xs-size": a(e, t, "--text-xs", "fontSize"),
                            "--font-text-sm-size": a(e, t, "--text-sm", "fontSize"),
                            "--font-text-md-size": a(e, t, "--text-base", "fontSize"),
                            "--font-text-lg-size": a(e, t, "--text-lg", "fontSize"),
                            "--font-heading-xs-size": a(e, t, "--text-heading-sm", "fontSize"),
                            "--font-heading-sm-size": a(e, t, "--text-heading-md", "fontSize"),
                            "--font-heading-md-size": a(e, t, "--text-heading-lg", "fontSize"),
                            "--font-heading-lg-size": a(e, t, "--text-xl", "fontSize"),
                            "--font-heading-xl-size": a(e, t, "--text-2xl", "fontSize"),
                            "--font-heading-2xl-size": a(e, t, "--text-3xl", "fontSize"),
                            "--font-heading-3xl-size": a(e, t, "--text-4xl", "fontSize"),
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
                            "--border-radius-xs": a(e, t, "--radius-xs", "borderRadius"),
                            "--border-radius-sm": a(e, t, "--radius-sm", "borderRadius"),
                            "--border-radius-md": a(e, t, "--radius-md", "borderRadius"),
                            "--border-radius-lg": a(e, t, "--radius-lg", "borderRadius"),
                            "--border-radius-xl": a(e, t, "--radius-xl", "borderRadius"),
                            "--border-radius-full": a(e, t, "--radius-full", "borderRadius"),
                            "--border-width-regular": "1px",
                            "--shadow-hairline": a(e, t, "--shadow-hairline", "boxShadow"),
                            "--shadow-sm": a(e, t, "--shadow-sm", "boxShadow"),
                            "--shadow-md": a(e, t, "--shadow-md", "boxShadow"),
                            "--shadow-lg": a(e, t, "--shadow-lg", "boxShadow")
                        }
                    } finally {
                        t.remove()
                    }
                }()
        });

        function a(e, t, o, n) {
            let r = e.getPropertyValue(o).trim();
            if (0 === r.length) return;
            t.style[n] = `var(${o})`;
            let i = getComputedStyle(t)[n].trim();
            return 0 === i.length || i === `var(${o})` ? r : i
        }
        o.d(t, {}, {
            a: l
        })
    }),
    zxca: (function(e, t, o) {
        var n = o("xnQm");
        o.d(t, {}, {
            a: function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Eg)(t),
                    r = document.createElement(e);
                if (r instanceof HTMLIFrameElement) r.setAttribute("sandbox", "allow-scripts allow-same-origin"), r.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", r.shadowRoot?.append(e)
                }
                return r.setAttribute("partition", o), r
            }
        })
    }),
    XROL: (function(e, t, o) {
        var n = o("F6B1"),
            r = o("ASxG"),
            i = o("P93s"),
            l = o("cqPu");
        let a = "CALL",
            s = "RESOLVE",
            c = n.d,
            d = r.enum(["cold", "warming", "warm"]),
            u = r.object({
                status: r.literal(2),
                type: r.literal("environment_status")
            }).loose(),
            p = r.object({
                href: r.url({
                    protocol: /^(https|codex|codex-dev)$/
                }),
                openMode: r.enum(["tab", "popup"]).optional()
            });

        function f(e, t) {
            return {
                initId: (0, n.g)(t?.getAttribute("src") ?? void 0),
                sandboxId: e
            }
        }

        function g(e) {
            return c.every(t => null != e[t])
        }

        function m(e) {
            return "object" == typeof e && null != e
        }

        function h(e) {
            return !!m(e) && "function" == typeof e.postMessage && "function" == typeof e.start
        }

        function x(e) {
            return e instanceof Error ? {
                ...C(e),
                message: e.message || "MCP sandbox host call failed.",
                name: e.name
            } : null != e && "object" == typeof e && "message" in e && "string" == typeof e.message && e.message.length > 0 ? {
                ...C(e),
                message: e.message
            } : {
                message: "MCP sandbox host call failed."
            }
        }

        function C(e) {
            let t = r.union([r.object({
                code: r.enum(["update_model_context_persistence_failed", "model_context_conflict"]),
                retryable: r.boolean()
            }), i.c]).safeParse("data" in e ? e.data : void 0).data;
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

        function b() {
            let e = Error("MCP sandbox RPC aborted.");
            return e.name = "AbortError", e
        }

        function A() {
            let e = Error("MCP sandbox RPC timed out.");
            return e.name = "TimeoutError", e
        }

        function y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.start(), o => new Promise((n, r) => {
                let i, l = t.signal,
                    c = void 0 === t.timeoutMs ? 3e4 : t.timeoutMs;
                if (l?.aborted) return void r(b());
                let {
                    port1: d,
                    port2: u
                } = new MessageChannel, p = !1, f = (e, t) => {
                    p || (p = !0, null != i && clearTimeout(i), l?.removeEventListener("abort", g), d.onmessage = null, d.close(), e(t))
                }, g = () => {
                    f(r, b())
                };
                d.onmessage = e => {
                    let t = e.data;
                    t[0] === s ? f(n, t[1]) : f(r, t[1])
                }, l?.addEventListener("abort", g, {
                    once: !0
                }), null != c && (i = setTimeout(() => {
                    f(r, A())
                }, c));
                try {
                    e.postMessage([a, o], [u])
                } catch (e) {
                    f(r, e)
                }
            })
        }
        o.d(t, {}, {
            a: f,
            b: async function(e) {
                var t, o, r, i, c;
                let u, {
                        hostApiHandlers: p,
                        assertActive: C,
                        ...v
                    } = e,
                    {
                        ports: w,
                        replyPort: _
                    } = await
                function(e) {
                    let {
                        onSkybridgeCacheState: t,
                        origin: o,
                        sandboxId: r,
                        signal: i,
                        sourceUrl: l,
                        webview: a
                    } = e, s = crypto.randomUUID();
                    return new Promise((e, c) => {
                        let u;
                        if (i.aborted) return void c(b());
                        let p = () => {
                                window.removeEventListener("message", f), i.removeEventListener("abort", x), null != u && clearTimeout(u)
                            },
                            f = i => {
                                let l = i.data;
                                if (l?.type !== "init") return;
                                if (a instanceof HTMLIFrameElement) {
                                    let t = a.getAttribute("src") ?? void 0;
                                    if (null == a.contentWindow || i.source !== a.contentWindow || i.origin !== o || (0, n.i)(t, {
                                            requireSkybridge: !0
                                        }) !== o || (0, n.g)(t) !== s) return;
                                    let r = function(e) {
                                        if (!m(e)) return null;
                                        let t = n.a.filter(t => Object.hasOwn(e, t));
                                        if (!(0, n.j)(t)) return null;
                                        let o = {};
                                        for (let n of t) {
                                            let t = e[n];
                                            if (!h(t)) return null;
                                            o[n] = t
                                        }
                                        return g(o) ? o : null
                                    }(l.ports);
                                    if (null == r || !h(l.replyPort)) return;
                                    p(), e({
                                        ports: r,
                                        replyPort: l.replyPort
                                    });
                                    return
                                }
                                if (l.origin !== o || l.sandboxId !== r || l.initId !== s || !Array.isArray(l.portNames)) return;
                                let c = l.portNames;
                                if (!(0, n.j)(c) || i.ports.length !== c.length + 1) return;
                                let u = function(e, t) {
                                    let o = {};
                                    for (let [n, r] of e.entries()) {
                                        let e = t[n];
                                        if (!h(e)) return null;
                                        o[r] = e
                                    }
                                    return g(o) ? o : null
                                }(c, i.ports);
                                if (null == u) return;
                                let f = i.ports[c.length];
                                if (null == f) return;
                                let x = d.safeParse(l.skybridgeCacheState);
                                x.success && t?.(x.data), p(), e({
                                    ports: u,
                                    replyPort: f
                                })
                            },
                            x = () => {
                                p(), c(b())
                            };
                        window.addEventListener("message", f), i.addEventListener("abort", x, {
                            once: !0
                        }), u = setTimeout(() => {
                            p(), c(A())
                        }, 2e4);
                        let C = (0, n.e)({
                            initId: s,
                            sandboxId: r,
                            sourceUrl: l
                        });
                        a.getAttribute("src") !== C && a.setAttribute("src", C)
                    })
                }(v), T = f(v.sandboxId, v.webview), I = function(e, t, o) {
                    function n(e, o, n, r) {
                        return function(e, t) {
                            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x,
                                {
                                    port1: n,
                                    port2: r
                                } = new MessageChannel;
                            return n.onmessage = async n => {
                                let [r, ...i] = n.data, [l] = n.ports;
                                if (r === a && null != l) try {
                                    t?.(), l.postMessage([s, await e(...i)])
                                } catch (e) {
                                    l.postMessage(["REJECT", o(e)])
                                } finally {
                                    l.close()
                                }
                            }, n.start(), r
                        }(function() {
                            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                            return (0, l.j)({
                                operation: "App request handling",
                                starting: "Handling app request"
                            }, {
                                safe: {
                                    ...t,
                                    method: e
                                }
                            }, async () => (n?.(), o(...i)), {
                                quiet: e.startsWith("notify") || "sendInstrument" === e || "updateWidgetState" === e
                            })
                        }, void 0, r)
                    }
                    return {
                        ...null == e.notifyAutofillCandidates ? {} : {
                            notifyAutofillCandidates: n("notifyAutofillCandidates", e.notifyAutofillCandidates, o)
                        },
                        ...null == e.openConversationOverlay ? {} : {
                            openConversationOverlay: n("openConversationOverlay", e.openConversationOverlay, o)
                        },
                        ...null == e.openPromptInput ? {} : {
                            openPromptInput: n("openPromptInput", e.openPromptInput, o)
                        },
                        ...null == e.setOpenInAppUrl ? {} : {
                            setOpenInAppUrl: n("setOpenInAppUrl", e.setOpenInAppUrl, o)
                        },
                        ...null == e.downloadBlob ? {} : {
                            downloadBlob: n("downloadBlob", e.downloadBlob, o)
                        },
                        ...null == e.triggerHaptic ? {} : {
                            triggerHaptic: n("triggerHaptic", e.triggerHaptic, o)
                        },
                        ...null == e.uploadFile ? {} : {
                            uploadFile: n("uploadFile", e.uploadFile, o)
                        },
                        ...null == e.getFileDownloadUrl ? {} : {
                            getFileDownloadUrl: n("getFileDownloadUrl", e.getFileDownloadUrl, o)
                        },
                        ...null == e.getFileMetadata ? {} : {
                            getFileMetadata: n("getFileMetadata", e.getFileMetadata, o)
                        },
                        ...null == e.selectFiles ? {} : {
                            selectFiles: n("selectFiles", e.selectFiles, o)
                        },
                        ...null == e.share ? {} : {
                            share: n("share", e.share, o)
                        },
                        ...null == e.notifyAppBlockMessage ? {} : {
                            notifyAppBlockMessage: n("notifyAppBlockMessage", e.notifyAppBlockMessage)
                        },
                        ...null == e.requestTargetedReply ? {} : {
                            requestTargetedReply: n("requestTargetedReply", e.requestTargetedReply, o)
                        },
                        ...null == e.requestFocusedObject ? {} : {
                            requestFocusedObject: n("requestFocusedObject", e.requestFocusedObject, o)
                        },
                        ...null == e.requestCloseFocusedObject ? {} : {
                            requestCloseFocusedObject: n("requestCloseFocusedObject", e.requestCloseFocusedObject, o)
                        },
                        ...null == e.requestModal ? {} : {
                            requestModal: n("requestModal", e.requestModal, o)
                        },
                        ...null == e.requestCheckout ? {} : {
                            requestCheckout: n("requestCheckout", e.requestCheckout, o, e => e instanceof Error ? x(e) : e)
                        },
                        ...null == e.requestLinkToConnector ? {} : {
                            requestLinkToConnector: n("requestLinkToConnector", e.requestLinkToConnector, o)
                        },
                        ...null == e.showToast ? {} : {
                            showToast: n("showToast", e.showToast, o)
                        },
                        ...null == e.notifyEscapeKey ? {} : {
                            notifyEscapeKey: n("notifyEscapeKey", e.notifyEscapeKey)
                        },
                        ...null == e.initializeMcpApp ? {} : {
                            initializeMcpApp: n("initializeMcpApp", e.initializeMcpApp)
                        },
                        callMcp: n("callMcp", e.callMcp, o),
                        callTool: n("callTool", e.callTool, o),
                        notifyBackgroundColor: n("notifyBackgroundColor", e.notifyBackgroundColor),
                        notifyEnvironmentError: n("notifyEnvironmentError", e.notifyEnvironmentError),
                        notifyIntrinsicHeight: n("notifyIntrinsicHeight", e.notifyIntrinsicHeight),
                        notifyIntrinsicWidth: n("notifyIntrinsicWidth", e.notifyIntrinsicWidth),
                        notifyNavigation: n("notifyNavigation", e.notifyNavigation),
                        notifySecurityPolicyViolation: n("notifySecurityPolicyViolation", e.notifySecurityPolicyViolation),
                        openExternal: n("openExternal", e.openExternal, o),
                        ...null == e.openPlaidLink ? {} : {
                            openPlaidLink: n("openPlaidLink", e.openPlaidLink, o)
                        },
                        ...null == e.requestConnectPlugin ? {} : {
                            requestConnectPlugin: n("requestConnectPlugin", e.requestConnectPlugin, o)
                        },
                        ...null == e.requestReconnectConnector ? {} : {
                            requestReconnectConnector: n("requestReconnectConnector", e.requestReconnectConnector, o)
                        },
                        ...null == e.requestConnectSheet ? {} : {
                            requestConnectSheet: n("requestConnectSheet", e.requestConnectSheet, o)
                        },
                        ...null == e.requestDeclinePluginSuggestions ? {} : {
                            requestDeclinePluginSuggestions: n("requestDeclinePluginSuggestions", e.requestDeclinePluginSuggestions, o)
                        },
                        requestDisplayMode: n("requestDisplayMode", e.requestDisplayMode, o),
                        ...null == e.requestClose ? {} : {
                            requestClose: n("requestClose", e.requestClose, o)
                        },
                        ...null == e.requestOpenPlugin ? {} : {
                            requestOpenPlugin: n("requestOpenPlugin", e.requestOpenPlugin, o)
                        },
                        sendFollowUpMessage: n("sendFollowUpMessage", e.sendFollowUpMessage, o),
                        sendInstrument: n("sendInstrument", e.sendInstrument),
                        updateWidgetState: n("updateWidgetState", e.updateWidgetState, o)
                    }
                }(p, T, C);
                return _.postMessage(I, Object.values(I)), _.start(), t = w, o = v.signal, r = T, u = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = y(t, n ? {} : {
                            signal: o
                        });
                    return t => (0, l.j)({
                        operation: "App request",
                        starting: "Sending app request"
                    }, {
                        safe: {
                            ...r,
                            method: e
                        }
                    }, async () => i(t), {
                        signal: n ? void 0 : o,
                        quiet: "requestMcpAppsResourceTeardown" !== e && "navigate" !== e
                    })
                }, {
                    applyAutofillCandidate: null == t.applyAutofillCandidate ? void 0 : u("applyAutofillCandidate", t.applyAutofillCandidate),
                    getCurrentPath: null == t.getCurrentPath ? void 0 : u("getCurrentPath", t.getCurrentPath),
                    navigate: u("navigate", t.navigate),
                    notifyMcpAppsHostContext: u("notifyMcpAppsHostContext", t.notifyMcpAppsHostContext),
                    notifyMcpAppsMcpNotification: null == t.notifyMcpAppsMcpNotification ? null : u("notifyMcpAppsMcpNotification", t.notifyMcpAppsMcpNotification),
                    notifyMcpAppsToolCancelled: u("notifyMcpAppsToolCancelled", t.notifyMcpAppsToolCancelled),
                    notifyMcpAppsToolInput: u("notifyMcpAppsToolInput", t.notifyMcpAppsToolInput),
                    notifyMcpAppsToolResult: u("notifyMcpAppsToolResult", t.notifyMcpAppsToolResult),
                    requestMcpAppsResourceTeardown: u("requestMcpAppsResourceTeardown", t.requestMcpAppsResourceTeardown, !0),
                    runWidgetCode: (i = t.runWidgetCode, c = o, i.start(), async function*(e) {
                        let {
                            port1: t,
                            port2: o
                        } = new MessageChannel, {
                            port1: n,
                            port2: r
                        } = new MessageChannel, {
                            port1: l,
                            port2: a
                        } = new MessageChannel, {
                            port1: s,
                            port2: d
                        } = new MessageChannel, u = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return y(e, {
                                ...t,
                                signal: c
                            })
                        }, p = u(t), f = u(n, {
                            timeoutMs: null
                        }), g = u(l), m = u(s);
                        i.postMessage(["GENERATOR_GENERATE", {
                            asyncDispose: o,
                            next: r,
                            return: a,
                            throw: d
                        }, e], [o, r, a, d]);
                        try {
                            let e = await f(void 0);
                            for (; !e.done;) yield e.value, e = await f(void 0);
                            return e.value
                        } catch (e) {
                            if (c.aborted) return;
                            throw await m(e).catch(() => {}), e
                        } finally {
                            c.aborted || await Promise.allSettled([p(void 0), g(void 0)]), [t, n, l, s].forEach(e => {
                                e.close()
                            })
                        }
                    }),
                    setAdditionalGlobals: u("setAdditionalGlobals", t.setAdditionalGlobals),
                    setSafeArea: u("setSafeArea", t.setSafeArea),
                    setTheme: u("setTheme", t.setTheme),
                    setWidgetData: u("setWidgetData", t.setWidgetData),
                    setWidgetView: u("setWidgetView", t.setWidgetView)
                }
            },
            c: p,
            d: u
        })
    }),
    Ztsm: (function(e, t, o) {
        var n = o("SKgO"),
            r = o("ASxG");
        let i = r.object({
            context: n.c.optional(),
            prompt: r.string().trim().min(1),
            title: r.string().trim().min(1).max(250).optional()
        }).strip();
        o.d(t, {
            b: () => n.a,
            d: () => n.b
        }, {
            a: function(e) {
                let {
                    context: t,
                    prompt: o
                } = e;
                return null == t ? o : `${o}

Current widget context (JSON):
${(0,n.b)(t)}`
            },
            c: function(e) {
                let t = i.safeParse(e);
                if (!t.success) throw Object.assign(Error("Invalid follow-up message"), {
                    code: -32602
                });
                return t.data
            }
        })
    }),
    vYmP: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            i = o("on57"),
            l = o("PAiv"),
            a = o("CPlt");
        o.d(t, {}, {
            a: function(e) {
                let t, o, s, c, d, u, p, f, g, m, h, x, C, b, A, y, v = (0, r.c)(39);
                v[0] !== e ? ({
                    ref: u,
                    ariaLabel: o,
                    icon: s,
                    isActive: f,
                    isTerminalInline: c,
                    label: d,
                    supportingCountLabel: p,
                    testId: m,
                    variant: g,
                    ...t
                } = e, v[0] = e, v[1] = t, v[2] = o, v[3] = s, v[4] = c, v[5] = d, v[6] = u, v[7] = p, v[8] = f, v[9] = g, v[10] = m) : (t = v[1], o = v[2], s = v[3], c = v[4], d = v[5], u = v[6], p = v[7], f = v[8], g = v[9], m = v[10]);
                let w = void 0 !== f && f,
                    _ = "file" === (void 0 === g ? "default" : g),
                    T = "disabled" in t && t.disabled,
                    I = T ? "cursor-default" : "group cursor-interaction",
                    F = !_ && !T && "hover:bg-secondary-soft-hover hover:text-default!",
                    E = _ && a.a.palette,
                    j = _ && a.a.filePill;
                v[11] !== w || v[12] !== _ || v[13] !== I || v[14] !== F || v[15] !== E || v[16] !== j ? (h = (0, i.b)("no-underline!", I, F, E, j, _ ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, i.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", w ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), v[11] = w, v[12] = _, v[13] = I, v[14] = F, v[15] = E, v[16] = j, v[17] = h) : h = v[17];
                let k = h;
                v[18] !== _ || v[19] !== p ? (x = null == p ? null : (0, n.jsx)("span", {
                    className: (0, i.b)("text-inherit", _ ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: p
                }), v[18] = _, v[19] = p, v[20] = x) : x = v[20];
                let M = x;
                v[21] !== s || v[22] !== _ || v[23] !== d || v[24] !== M ? (C = _ ? (0, n.jsxs)(n.Fragment, {
                    children: [s, (0, n.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: d
                    }), M]
                }) : (0, n.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [s, (0, n.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: d
                        })]
                    }), M]
                }), v[21] = s, v[22] = _, v[23] = d, v[24] = M, v[25] = C) : C = v[25];
                let O = C,
                    N = _ && "relative",
                    P = _ && c ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return v[26] !== N || v[27] !== P ? (b = (0, i.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", N, P), v[26] = N, v[27] = P, v[28] = b) : b = v[28], v[29] !== t || v[30] !== o || v[31] !== k || v[32] !== O || v[33] !== m ? (A = "href" in t ? (0, n.jsx)(l.a, {
                    className: k,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": m,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": o,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: O
                }) : (0, n.jsx)("button", {
                    className: k,
                    "aria-label": o,
                    "data-testid": m,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: O
                }), v[29] = t, v[30] = o, v[31] = k, v[32] = O, v[33] = m, v[34] = A) : A = v[34], v[35] !== u || v[36] !== b || v[37] !== A ? (y = (0, n.jsx)("span", {
                    ref: u,
                    className: b,
                    children: A
                }), v[35] = u, v[36] = b, v[37] = A, v[38] = y) : y = v[38], y
            }
        })
    }),
    tbqK: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            i = o("DNYL"),
            l = o("iTtm"),
            a = o("Wf1j"),
            s = o("ygO2"),
            c = o("bf6R"),
            d = o("ALWK"),
            u = o("tSEg");
        o.d(t, {}, {
            a: function(e) {
                let t, o, p, f, g, m = (0, r.c)(13),
                    {
                        disabled: h,
                        mcpAppId: x
                    } = e,
                    C = (0, l.y)(u.a),
                    b = (0, a.a)(),
                    A = (0, l.x)(d.u, x);
                if (!A.availableDisplayModes?.includes("fullscreen")) return null;
                m[0] !== b ? (t = b.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab",
                    description: "Opens an MCP app in a tab from its tool call row"
                }), m[0] = b, m[1] = t) : t = m[1];
                let y = t;
                return m[2] !== x || m[3] !== C ? (o = () => (0, d.x)(C, x, "fullscreen"), m[2] = x, m[3] = C, m[4] = o) : o = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(c.N, {}), m[5] = p) : p = m[5], m[6] !== h || m[7] !== y || m[8] !== o ? (f = (0, n.jsx)(s.a, {
                    className: "relative",
                    "aria-label": y,
                    color: "ghost",
                    disabled: h,
                    size: "icon",
                    onClick: o,
                    children: p
                }), m[6] = h, m[7] = y, m[8] = o, m[9] = f) : f = m[9], m[10] !== y || m[11] !== f ? (g = (0, n.jsx)(i.a, {
                    content: y,
                    children: f
                }), m[10] = y, m[11] = f, m[12] = g) : g = m[12], g
            }
        })
    }),
    taUf: (function(e, t, o) {
        var n = o("ASxG");
        let r = n.string().regex(/^[A-Za-z0-9_-]{1,128}$/),
            i = n.object({
                connectedPluginIds: n.array(n.string()).optional(),
                declinedPluginIds: n.array(n.string()).optional()
            }).catchall(n.json()),
            l = n.object({
                pluginId: n.string().min(1),
                suggestionId: r.optional()
            }),
            a = n.object({
                type: n.literal("event"),
                label: n.literal("chatgpt_plugin_management_suggestion_impression"),
                payload: n.object({
                    remote_plugin_id: n.string().min(1).max(256),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: r
                })
            }),
            s = a.extend({
                label: n.literal("chatgpt_plugin_management_suggestion_shown"),
                payload: a.shape.payload.extend({
                    suggestion_id: r.optional(),
                    plugin_ids: n.array(n.string().min(1).max(256)).min(1).max(10)
                })
            }),
            c = n.discriminatedUnion("label", [a, s]),
            d = n.object({
                kind: n.literal("plugin_suggestions"),
                version: n.literal(1),
                suggestions: n.array(n.object({
                    plugin_id: n.string().min(1),
                    display_name: n.string().min(1)
                }))
            }),
            u = n.object({
                "openai/plugin_suggestion_id": r.optional(),
                "openai/plugin_suggestion_connector_ids": n.record(n.string(), n.string().min(1)).optional().catch(void 0)
            });
        o.d(t, {}, {
            a: l,
            b: c,
            c: u,
            d: i,
            e: d
        })
    }),
    ePaQ: (function(e, t, o) {
        o.d(t, {
            a: () => m
        });
        var n = o("ABep"),
            r = o("QosV"),
            i = o("kSHG"),
            l = o("on57"),
            a = o("zd8w"),
            s = o("KxMp"),
            c = o("bf6R"),
            d = o("CqQF"),
            u = o("zSQm"),
            p = o("WAdu");

        function f(e) {
            let t, o, i, l, a, s, c, d = (0, r.c)(21),
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
            return d[2] !== g ? (o = (0, n.jsx)("div", {
                className: "branding-xlBboz",
                children: g
            }), d[2] = g, d[3] = o) : o = d[3], d[4] !== u ? (i = (0, n.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = i) : i = d[5], d[6] !== p ? (l = null != p && (0, n.jsx)("div", {
                className: "subtitle-gArrij",
                children: p
            }), d[6] = p, d[7] = l) : l = d[7], d[8] !== f || d[9] !== x || d[10] !== u ? (a = null != f && (0, n.jsx)("div", {
                className: x ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: x ? 0 : void 0,
                children: f
            }), d[8] = f, d[9] = x, d[10] = u, d[11] = a) : a = d[11], d[12] !== m ? (s = null != m && (0, n.jsx)("div", {
                className: "followUp-otVo0x",
                children: m
            }), d[12] = m, d[13] = s) : s = d[13], d[14] !== h || d[15] !== o || d[16] !== i || d[17] !== l || d[18] !== a || d[19] !== s ? (c = (0, n.jsxs)("div", {
                className: "content-cuuiWn",
                children: [o, i, l, a, h, s]
            }), d[14] = h, d[15] = o, d[16] = i, d[17] = l, d[18] = a, d[19] = s, d[20] = c) : c = d[20], c
        }
        var g = o("Nfif");

        function m(e) {
            let t, o, i, l = (0, r.c)(22),
                {
                    children: a,
                    disabled: s,
                    metadata: c,
                    sourceAppId: u,
                    followUp: p,
                    keepOpen: f,
                    openOnClick: g,
                    closeOnTriggerClick: m,
                    presentation: x
                } = e,
                C = void 0 === m || m;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                file: {
                    offset: 10,
                    variant: "fileCitation"
                },
                default: {
                    offset: 6,
                    variant: "rich"
                }
            }, l[0] = t) : t = l[0];
            let {
                offset: b,
                variant: A
            } = t[x ?? "default"], y = !!f || void 0, v = "file" === x ? c.title : void 0, w = null != c.hoverCard, _ = null != c.hoverCard, T = null != u || c.hoverCard?.body != null, I = null == c.hoverCard ? void 0 : 150, F = null == c.hoverCard ? void 0 : "start", E = null == c.hoverCard ? void 0 : "bottom", j = null == c.hoverCard ? void 0 : b, k = null == c.hoverCard ? "tooltip" : A;
            return l[1] !== p || l[2] !== c || l[3] !== x || l[4] !== u ? (o = null == c.hoverCard ? c.title : (0, n.jsx)(h, {
                metadata: c,
                sourceAppId: u,
                followUp: p,
                presentation: x
            }), l[1] = p, l[2] = c, l[3] = x, l[4] = u, l[5] = o) : o = l[5], l[6] !== a || l[7] !== C || l[8] !== s || l[9] !== g || l[10] !== E || l[11] !== j || l[12] !== k || l[13] !== o || l[14] !== y || l[15] !== v || l[16] !== w || l[17] !== _ || l[18] !== T || l[19] !== I || l[20] !== F ? (i = (0, n.jsx)(d.a, {
                open: y,
                openOnClick: g,
                closeOnTriggerClick: C,
                disabled: s,
                dialogLabel: v,
                openOnFocusWithin: w,
                selectable: _,
                keyboardNavigation: T,
                delayDuration: I,
                align: F,
                side: E,
                sideOffset: j,
                variant: k,
                tooltipContent: o,
                children: a
            }), l[6] = a, l[7] = C, l[8] = s, l[9] = g, l[10] = E, l[11] = j, l[12] = k, l[13] = o, l[14] = y, l[15] = v, l[16] = w, l[17] = _, l[18] = T, l[19] = I, l[20] = F, l[21] = i) : i = l[21], i
        }

        function h(e) {
            let t, o, d, m, h, x, C, b, A = (0, r.c)(53),
                {
                    metadata: y,
                    sourceAppId: v,
                    followUp: w,
                    presentation: _
                } = e,
                T = (0, a.useContext)(p.a);
            if (A[0] !== y.icons?.[0]) {
                let {
                    data: e
                } = i.u.safeParse(y.icons?.[0]), o = e?.src;
                t = null == o ? void 0 : (0, u.b)(o), A[0] = y.icons?.[0], A[1] = t
            } else t = A[1];
            let I = t;
            A[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(c.xi, {}), A[2] = o) : o = A[2];
            let F = o;
            if ("restricted" !== T) {
                if (null != y.url) {
                    let e;
                    A[3] !== y.url ? (e = (0, n.jsx)(s.a, {
                        href: y.url,
                        className: "size-4"
                    }), A[3] = y.url, A[4] = e) : e = A[4], F = e
                } else if (null != I) {
                    let e, t, o = null == v && "dark:brightness-0 dark:invert";
                    A[5] !== o ? (e = (0, l.b)("size-4 shrink-0 rounded-sm object-contain", o), A[5] = o, A[6] = e) : e = A[6], A[7] !== I || A[8] !== e ? (t = (0, n.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: I
                    }), A[7] = I, A[8] = e, A[9] = t) : t = A[9], F = t
                }
            }
            if ("file" === _ && null != v) {
                let e, t, o = y.hoverCard?.title ?? y.title,
                    r = y.hoverCard?.subtitle,
                    i = y.hoverCard?.body;
                return A[10] !== v ? (e = (0, n.jsx)(g.a, {
                    appId: v,
                    showName: !0,
                    presentation: "file"
                }), A[10] = v, A[11] = e) : e = A[11], A[12] !== w || A[13] !== o || A[14] !== r || A[15] !== i || A[16] !== e ? (t = (0, n.jsx)(f, {
                    title: o,
                    subtitle: r,
                    body: i,
                    branding: e,
                    followUp: w
                }), A[12] = w, A[13] = o, A[14] = r, A[15] = i, A[16] = e, A[17] = t) : t = A[17], t
            }
            if (null != v) {
                let e, t, o, r, i, l;
                A[18] !== v ? (e = (0, n.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, n.jsx)(g.a, {
                        appId: v,
                        showName: !0
                    })
                }), A[18] = v, A[19] = e) : e = A[19];
                let a = y.hoverCard?.title ?? y.title;
                return A[20] !== a ? (t = (0, n.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: a
                }), A[20] = a, A[21] = t) : t = A[21], A[22] !== y.hoverCard ? (o = y.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: y.hoverCard.subtitle
                }), A[22] = y.hoverCard, A[23] = o) : o = A[23], A[24] !== y.hoverCard || A[25] !== y.title ? (r = y.hoverCard?.body != null && (0, n.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": y.title,
                    tabIndex: 0,
                    children: y.hoverCard.body
                }), A[24] = y.hoverCard, A[25] = y.title, A[26] = r) : r = A[26], A[27] !== w ? (i = null != w && (0, n.jsx)("div", {
                    children: w
                }), A[27] = w, A[28] = i) : i = A[28], A[29] !== e || A[30] !== t || A[31] !== o || A[32] !== r || A[33] !== i ? (l = (0, n.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, o, r, i]
                }), A[29] = e, A[30] = t, A[31] = o, A[32] = r, A[33] = i, A[34] = l) : l = A[34], l
            }
            let E = y.hoverCard?.title ?? y.title;
            return A[35] !== E ? (d = (0, n.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: E
            }), A[35] = E, A[36] = d) : d = A[36], A[37] !== y.hoverCard ? (m = y.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: y.hoverCard.subtitle
            }), A[37] = y.hoverCard, A[38] = m) : m = A[38], A[39] !== d || A[40] !== m ? (h = (0, n.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [d, m]
            }), A[39] = d, A[40] = m, A[41] = h) : h = A[41], A[42] !== y.hoverCard || A[43] !== y.title ? (x = y.hoverCard?.body != null && (0, n.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": y.title,
                tabIndex: 0,
                children: y.hoverCard.body
            }), A[42] = y.hoverCard, A[43] = y.title, A[44] = x) : x = A[44], A[45] !== F || A[46] !== y.hoverCard?.title || A[47] !== y.title ? (C = y.hoverCard?.title != null && (0, n.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [F, (0, n.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: y.title
                })]
            }), A[45] = F, A[46] = y.hoverCard?.title, A[47] = y.title, A[48] = C) : C = A[48], A[49] !== h || A[50] !== x || A[51] !== C ? (b = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, C]
            }), A[49] = h, A[50] = x, A[51] = C, A[52] = b) : b = A[52], b
        }
    }),
    JAYD: (function(e, t, o) {
        var n = o("iTtm"),
            r = o("xnQm"),
            i = o("OiCI"),
            l = o("cLdu"),
            a = o("OWtl");
        let s = (0, n.d)(a.a, (e, t) => {
            let {
                get: o
            } = t, n = o(i.b);
            if (null == n) return !1;
            let a = o(l.h, {
                accountId: n,
                hostId: r.Vb,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !a.isPending && !a.isError && a.data?.some(t => {
                let {
                    appIds: o,
                    plugin: n
                } = t;
                return o?.includes(e) && n.installed && n.enabled && "AVAILABLE" === n.availability && null == n.disabledReason
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
        var n = o("ABep"),
            r = o("QosV"),
            i = o("on57"),
            l = o("xnQm"),
            a = o("zd8w"),
            s = o("oyxz"),
            c = o("BQbE"),
            d = o("bf6R"),
            u = o("E6P3"),
            p = o("zSQm"),
            f = o("WAdu"),
            g = o("a6Zv"),
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
            h = o("CPlt");

        function x(e) {
            let t, o, x, C, b, A, y, v = (0, r.c)(21),
                {
                    appId: w,
                    showName: _,
                    presentation: T
                } = e,
                I = void 0 !== _ && _,
                F = (0, a.useContext)(f.a);
            v[0] !== w ? (t = [w], v[0] = w, v[1] = t) : t = v[1];
            let E = "restricted" !== F;
            v[2] !== t || v[3] !== E ? (o = {
                appIds: t,
                hostId: l.Vb,
                enabled: E
            }, v[2] = t, v[3] = E, v[4] = o) : o = v[4];
            let {
                data: j
            } = (0, c.a)(o), k = j?.find(e => e.id === w), M = (0, g.a)() ? k?.iconUrlDark ?? k?.iconUrl : k?.iconUrl, O = null == M ? void 0 : (0, p.b)(M);
            v[5] !== T ? (x = "file" === T ? (0, n.jsx)("span", {
                className: (0, i.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, n.jsx)(m, {
                    "aria-hidden": "true"
                })
            }) : (0, n.jsx)(d.xi, {}), v[5] = T, v[6] = x) : x = v[6];
            let N = x;
            v[7] !== N || v[8] !== F || v[9] !== T || v[10] !== O ? (C = "restricted" !== F && null != O ? (0, n.jsx)(u.a, {
                className: (0, i.b)("shrink-0", "file" === T ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: O,
                fallback: N
            }, O) : N, v[7] = N, v[8] = F, v[9] = T, v[10] = O, v[11] = C) : C = v[11];
            let P = C;
            return v[12] !== P || v[13] !== T ? (b = "file" === T ? (0, n.jsx)("span", {
                className: "size-4 shrink-0",
                children: P
            }) : P, v[12] = P, v[13] = T, v[14] = b) : b = v[14], v[15] !== k?.name || v[16] !== I ? (A = I && (k?.name ?? (0, n.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), v[15] = k?.name, v[16] = I, v[17] = A) : A = v[17], v[18] !== b || v[19] !== A ? (y = (0, n.jsxs)(n.Fragment, {
                children: [b, A]
            }), v[18] = b, v[19] = A, v[20] = y) : y = v[20], y
        }
    }),
    uzkw: (function(e, t, o) {
        var n = o("Kwur");
        o.d(t, {}, {
            a: function(e) {
                let {
                    connectorId: t,
                    conversationId: o,
                    eventType: r,
                    expectedIdentity: i,
                    messageId: l,
                    pluginId: a,
                    productSurface: s,
                    suggestionMessageId: c
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
                                conversation_id: o,
                                message_id: l
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: t ?? "",
                                plugin_id: a,
                                suggestion_message_id: c,
                                event_type: r
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    })
};