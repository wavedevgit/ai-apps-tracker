export const __rspack_esm_ids = [679646];
export const __webpack_modules__ = {
    sM3V: (function(e, t, o) {
        var n = o("BolX"),
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
                let i = r(l.jc, {
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
                } = null == n ? o(r.q, e.hostId) : o(r.r, {
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
            a = o("Oo9D"),
            s = o("NTGw"),
            c = o("syw5");
        o.d(t, {}, {
            a: async function(e, t, o, s) {
                let {
                    localComposerFormat: d,
                    ...u
                } = s, p = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, i.b)(e, t),
                        f = (0, n.a)(p, await s.getFollowUpContext(o, !0), !1);
                    if (e.get(r.a)) throw new l.a;
                    let g = crypto.randomUUID();
                    if (await (0, a.d)(e, t, g, d), e.get(r.a)) throw new l.a;
                    await s.editLastUserTurn(o, {
                        ...u,
                        clientUserMessageId: g,
                        writingBlockContextPrepared: null != f,
                        additionalContext: (0, c.a)(o, f?.writingBlocks, u.additionalContext)
                    })
                } catch (e) {
                    p.error = e, p.hasError = !0
                } finally {
                    (0, n.e)(p)
                }
            },
            b: async function(e, t, o, r, l) {
                let a = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, i.b)(e, t),
                        d = (0, n.a)(a, await s.getFollowUpContext(o, !0), !1);
                    await s.retrySafetyBufferedTurn(o, r, l, {
                        additionalContext: (0, c.a)(o, d?.writingBlocks),
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
                        s = (0, n.a)(l, await a.getFollowUpContext(o, !0), !1);
                    await a.startEmptyTurn(o, {
                        ...r,
                        writingBlockContextPrepared: null != s,
                        additionalContext: (0, c.a)(o, s?.writingBlocks, r.additionalContext)
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
                    let a = (0, i.b)(e, t),
                        d = (0, n.a)(l, await a.getFollowUpContext(o, !0), !1);
                    return await a.startTurn(o, {
                        ...r,
                        context: {
                            ...r.context,
                            onRequestDispatched: r.context?.onRequestDispatched ?? (e => {
                                null != r.request.clientUserMessageId && s.a.markRequestDispatched(r.request.clientUserMessageId, e)
                            }),
                            trace: r.context?.trace ?? (null == r.request.clientUserMessageId ? void 0 : s.a.getTrace(r.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != d
                        },
                        request: {
                            ...r.request,
                            additionalContext: (0, c.a)(o, d?.writingBlocks, r.request.additionalContext)
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
            r = o("BolX"),
            i = o("P61R"),
            l = o("sS8e"),
            a = o("xSzB"),
            s = o("OWtl"),
            c = o("tSEg"),
            d = o("WFY2"),
            u = o("oo2L"),
            p = o("Ooax"),
            f = o("Sbyb");
        let g = (0, r.v)(s.a, e => !1);
        o.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: o,
                    hostId: n,
                    sourceId: r,
                    resourceUri: l,
                    access: s,
                    toolInput: h,
                    toolResult: m,
                    assertActive: x,
                    onReconnected: b
                } = e;
                if (l !== p.a || null == m || null == s || !("connectorId" in s.serverIdentity) || s.serverIdentity.connectorId !== i.a) return;
                let C = (0, p.c)(h, (0, a.i)({
                    isCodexAppsServer: !0,
                    toolResult: m
                }));
                if (null == C) return;
                let y = null == C.auth_type ? null : (0, u.o)({
                    id: C.link_id,
                    connector_id: C.connector_id,
                    auth_type: C.auth_type,
                    auth_strategy_id: C.auth_strategy_id
                });
                if ("API_KEY" === C.auth_type && null == y) return;
                let A = e => {
                    if (e.throwIfAborted(), x?.(), t.get(c.j) || "current" !== s.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    A(e);
                    let i = await (0, f.requestMcpConnectSheet)(t, {
                            connectorId: C.connector_id,
                            hostId: n,
                            oauthPresentation: "popup",
                            productSku: o,
                            startOAuthDirectly: "reauthentication_required" === C.auth_reason && "OAUTH" === y,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: C.link_id,
                                authReason: C.auth_reason
                            },
                            beforeConnect: async () => (A(e), !0),
                            signal: e
                        }),
                        l = i.didConnect && i.linkId === C.link_id;
                    if (l && null != b) {
                        let o = JSON.stringify([n, s.accountId, s.uiUserId, r, C.link_id]);
                        t.get(g, o) || (A(e), t.set(g, o, !0), b(C.connector_name?.trim() || C.connector_id).catch(e => {
                            d.a.warning("Failed to deliver connector reconnect follow-up", {
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
                throw (0, l.c)("This action is unavailable for the sign-in widget", n.r.MethodNotFound)
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
    vYmP: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            i = o("on57"),
            l = o("ZtSy"),
            a = o("ZRyR");
        o.d(t, {}, {
            a: function(e) {
                let t, o, s, c, d, u, p, f, g, h, m, x, b, C, y, A, v = (0, r.c)(39);
                v[0] !== e ? ({
                    ref: u,
                    ariaLabel: o,
                    icon: s,
                    isActive: f,
                    isTerminalInline: c,
                    label: d,
                    supportingCountLabel: p,
                    testId: h,
                    variant: g,
                    ...t
                } = e, v[0] = e, v[1] = t, v[2] = o, v[3] = s, v[4] = c, v[5] = d, v[6] = u, v[7] = p, v[8] = f, v[9] = g, v[10] = h) : (t = v[1], o = v[2], s = v[3], c = v[4], d = v[5], u = v[6], p = v[7], f = v[8], g = v[9], h = v[10]);
                let _ = void 0 !== f && f,
                    w = "file" === (void 0 === g ? "default" : g),
                    I = "disabled" in t && t.disabled,
                    T = I ? "cursor-default" : "group cursor-interaction",
                    E = !w && !I && "hover:bg-secondary-soft-hover hover:text-default!",
                    F = w && a.a.palette,
                    j = w && a.a.filePill;
                v[11] !== _ || v[12] !== w || v[13] !== T || v[14] !== E || v[15] !== F || v[16] !== j ? (m = (0, i.b)("no-underline!", T, E, F, j, w ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, i.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", _ ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), v[11] = _, v[12] = w, v[13] = T, v[14] = E, v[15] = F, v[16] = j, v[17] = m) : m = v[17];
                let k = m;
                v[18] !== w || v[19] !== p ? (x = null == p ? null : (0, n.jsx)("span", {
                    className: (0, i.b)("text-inherit", w ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: p
                }), v[18] = w, v[19] = p, v[20] = x) : x = v[20];
                let M = x;
                v[21] !== s || v[22] !== w || v[23] !== d || v[24] !== M ? (b = w ? (0, n.jsxs)(n.Fragment, {
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
                }), v[21] = s, v[22] = w, v[23] = d, v[24] = M, v[25] = b) : b = v[25];
                let N = b,
                    S = w && "relative",
                    O = w && c ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return v[26] !== S || v[27] !== O ? (C = (0, i.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", S, O), v[26] = S, v[27] = O, v[28] = C) : C = v[28], v[29] !== t || v[30] !== o || v[31] !== k || v[32] !== N || v[33] !== h ? (y = "href" in t ? (0, n.jsx)(l.a, {
                    className: k,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": h,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": o,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: N
                }) : (0, n.jsx)("button", {
                    className: k,
                    "aria-label": o,
                    "data-testid": h,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: N
                }), v[29] = t, v[30] = o, v[31] = k, v[32] = N, v[33] = h, v[34] = y) : y = v[34], v[35] !== u || v[36] !== C || v[37] !== y ? (A = (0, n.jsx)("span", {
                    ref: u,
                    className: C,
                    children: y
                }), v[35] = u, v[36] = C, v[37] = y, v[38] = A) : A = v[38], A
            }
        })
    }),
    iIHp: (function(e, t, o) {
        var n = o("QosV"),
            r = o("zd8w");
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
    v7ut: (function(e, t, o) {
        var n = o("ABep"),
            r = o("QosV"),
            i = o("zd8w"),
            l = o("Wf1j"),
            a = o("oyxz"),
            s = o("hL9c"),
            c = o("osar"),
            d = o("eFVb"),
            u = o("W2tE"),
            p = o("v5fl"),
            f = o("Sm6l"),
            g = o("JNtf"),
            h = o("mUDD"),
            m = o("zLIa"),
            x = o("sF0J"),
            b = o("E1V6");

        function C(e) {
            let t, o, s, C, w, I, T, E = (0, r.c)(31),
                {
                    canConfirm: F,
                    context: j,
                    description: k,
                    imageUrls: M,
                    onCancel: N,
                    onConfirm: S,
                    prompt: O,
                    title: R
                } = e,
                P = void 0 === F || F,
                q = (0, l.a)();
            E[0] !== O ? (t = () => {
                let e = (0, d.b)(O, {
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
            }, E[0] = O, E[1] = t) : t = E[1];
            let [L] = (0, i.useState)(t), {
                controller: D,
                destroy: U
            } = L;
            (0, b.b)(U, D);
            let z = (0, p.b)(D, A, "document"),
                [B, W] = (0, i.useState)(j);
            E[2] !== j ? (o = _(j), E[2] = j, E[3] = o) : o = E[3];
            let X = o,
                [V, G] = (0, i.useState)(X),
                [H, K] = (0, i.useState)("prompt");
            E[4] !== V ? (s = function(e) {
                try {
                    return (0, x.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(V), E[4] = V, E[5] = s) : s = E[5];
            let Z = s;
            E[6] !== P || E[7] !== B || E[8] !== D || E[9] !== S ? (C = () => {
                let e = D.getText().trim();
                P && e.length > 0 && S((0, x.a)({
                    context: B,
                    prompt: e
                }))
            }, E[6] = P, E[7] = B, E[8] = D, E[9] = S, E[10] = C) : C = E[10];
            let $ = C;
            return E[11] !== N ? (w = e => {
                e || N()
            }, E[11] = N, E[12] = w) : w = E[12], E[13] !== P || E[14] !== $ || E[15] !== B || E[16] !== V || E[17] !== D || E[18] !== k || E[19] !== z || E[20] !== M || E[21] !== X || E[22] !== q || E[23] !== N || E[24] !== Z || E[25] !== R || E[26] !== H ? (I = "prompt" === H ? (0, n.jsxs)(h.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), $()
                },
                children: [(0, n.jsx)(v, {
                    description: k,
                    title: R
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
                                onSubmit: $
                            })
                        })
                    })
                }), null != M && M.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: M.map(y)
                }) : null, null != B ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        G(_(B)), K("widget-state")
                    },
                    children: (0, n.jsx)(a.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state",
                        description: "Link that opens the editable widget state included with a follow-up prompt"
                    })
                }) : null, (0, n.jsxs)(h.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(f.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: N,
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    }), (0, n.jsx)(f.a, {
                        disabled: !P || !z,
                        type: "submit",
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send",
                            description: "Confirm button for a dialog asking whether an MCP app may send a follow-up prompt"
                        })
                    })]
                })]
            }) : (0, n.jsxs)(h.b, {
                className: "gap-4",
                children: [(0, n.jsx)(h.d, {
                    title: (0, n.jsx)(g.d, {
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state",
                            description: "Title for the editable widget state view in a follow-up confirmation dialog"
                        })
                    }),
                    subtitle: (0, n.jsx)(g.c, {
                        className: "text-secondary",
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget.",
                            description: "Description for the editable widget state view in a follow-up confirmation dialog"
                        })
                    })
                }), (0, n.jsx)(m.c, {
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
                    value: V,
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
                }) : null, (0, n.jsxs)(h.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(f.a, {
                        color: "ghost",
                        disabled: V === X,
                        type: "button",
                        onClick: () => {
                            G(X)
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
                            G(_(B)), K("prompt")
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
                            null != Z && (W(Z), K("prompt"))
                        },
                        children: (0, n.jsx)(a.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply",
                            description: "Button that applies edited widget state to a follow-up prompt"
                        })
                    })]
                })]
            }), E[13] = P, E[14] = $, E[15] = B, E[16] = V, E[17] = D, E[18] = k, E[19] = z, E[20] = M, E[21] = X, E[22] = q, E[23] = N, E[24] = Z, E[25] = R, E[26] = H, E[27] = I) : I = E[27], E[28] !== w || E[29] !== I ? (T = (0, n.jsx)(g.a, {
                open: !0,
                onOpenChange: w,
                size: "wide",
                children: I
            }), E[28] = w, E[29] = I, E[30] = T) : T = E[30], T
        }

        function y(e, t) {
            return (0, n.jsx)(s.a, {
                src: e
            }, t)
        }

        function A(e) {
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
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (o = (0, n.jsx)(g.d, {
                children: t
            }), c[2] = t, c[3] = o) : o = c[3], c[4] !== d ? (i = d ?? (0, n.jsx)(a.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt",
                description: "Description for a dialog asking whether an MCP app may send a follow-up prompt"
            }), c[4] = d, c[5] = i) : i = c[5], c[6] !== i ? (l = (0, n.jsx)(g.c, {
                className: "text-secondary",
                children: i
            }), c[6] = i, c[7] = l) : l = c[7], c[8] !== o || c[9] !== l ? (s = (0, n.jsx)(h.d, {
                title: o,
                subtitle: l
            }), c[8] = o, c[9] = l, c[10] = s) : s = c[10], s
        }

        function _(e) {
            return null == e ? "" : (0, x.d)(e)
        }
        o.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, o = (0, r.c)(2),
                    {
                        confirmation: i
                    } = e;
                return null == i ? null : (o[0] !== i ? (t = (0, n.jsx)(C, {
                    ...i
                }), o[0] = i, o[1] = t) : t = o[1], t)
            }
        })
    }),
    sF0J: (function(e, t, o) {
        var n = o("SKgO"),
            r = o("ASxG"),
            i = o("sS8e");
        let l = r.object({
            context: n.c.optional(),
            isVisible: r.boolean().optional(),
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
                let t = l.safeParse(e);
                if (!t.success) throw (0, i.c)("Invalid follow-up message", -32602);
                return t.data
            }
        })
    }),
    QnVT: (function(e, t, o) {
        var n = o("BolX"),
            r = o("i8Zd"),
            i = o("OWtl");
        let l = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return {
                    revision: t(r.a),
                    appearance: null
                }
            }, {
                isEqual: (e, t) => e.revision === t.revision
            }),
            a = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e, {
                    appearance: o,
                    revision: n
                } = t(l), r = o?.fonts;
                return null == r || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [r.code, r.ui].some(e => e?.includes("(")) ? n : o
            }),
            s = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(a),
                    function() {
                        let e = getComputedStyle(document.documentElement),
                            t = document.createElement("div");
                        t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                        let o = t => {
                                let o = e.getPropertyValue(t).trim();
                                return o.length > 0 ? o : void 0
                            },
                            n = o => {
                                let n = c(e, t, o, "color"),
                                    r = c(e, t, "--color-surface-tertiary", "color");
                                if (null != n && null != r) return `color-mix(in srgb, ${n} 12%, ${r})`
                            };
                        try {
                            let r, i, l, a, s, d, u, p, f, g, h, m, x, b, C, y, A, v, _, w, I, T, E, F, j, k, M, N, S, O, R, P, q, L, D, U;
                            return {
                                "--color-background-primary": (r = "--app-color-background-surface", c(e, t, r, "color") ?? (i = "--color-surface-tertiary", c(e, t, i, "color"))),
                                "--color-background-secondary": (l = "--color-surface-elevated", c(e, t, l, "color")),
                                "--color-background-tertiary": (a = "--color-surface-secondary", c(e, t, a, "color")),
                                "--color-background-inverse": (s = "--color-text", c(e, t, s, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (d = "--codex-theme-accent-background-subtle", c(e, t, d, "color") ?? (u = "--color-background-info-surface", c(e, t, u, "color"))),
                                "--color-background-danger": (p = "--color-background-danger-surface", c(e, t, p, "color")),
                                "--color-background-success": n("--color-codex-git-added"),
                                "--color-background-warning": n("--color-text-warning"),
                                "--color-background-disabled": (f = "--color-background-primary-soft-active", c(e, t, f, "color")),
                                "--color-text-primary": (g = "--color-text", c(e, t, g, "color")),
                                "--color-text-secondary": (h = "--color-text-secondary", c(e, t, h, "color")),
                                "--color-text-tertiary": (m = "--color-codex-description", c(e, t, m, "color")),
                                "--color-text-inverse": (x = "--color-text-inverse", c(e, t, x, "color") ?? (b = "--color-surface-tertiary", c(e, t, b, "color"))),
                                "--color-text-ghost": (C = "--color-codex-description", c(e, t, C, "color")),
                                "--color-text-info": (y = "--color-text-info", c(e, t, y, "color")),
                                "--color-text-danger": (A = "--color-text-danger", c(e, t, A, "color")),
                                "--color-text-success": (v = "--color-codex-git-added", c(e, t, v, "color")),
                                "--color-text-warning": (_ = "--color-text-warning", c(e, t, _, "color")),
                                "--color-text-disabled": (w = "--color-codex-description", c(e, t, w, "color")),
                                "--color-border-primary": (I = "--color-border-primary-outline", c(e, t, I, "color")),
                                "--color-border-secondary": (T = "--color-border", c(e, t, T, "color")),
                                "--color-border-tertiary": (E = "--color-border", c(e, t, E, "color")),
                                "--color-border-inverse": (F = "--color-text", c(e, t, F, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (j = "--color-ring", c(e, t, j, "color")),
                                "--color-border-danger": (k = "--color-text-danger", c(e, t, k, "color")),
                                "--color-border-success": (M = "--color-codex-git-added", c(e, t, M, "color")),
                                "--color-border-warning": (N = "--color-text-warning", c(e, t, N, "color")),
                                "--color-border-disabled": (S = "--color-border-primary-outline", c(e, t, S, "color")),
                                "--color-ring-primary": (O = "--color-ring", c(e, t, O, "color")),
                                "--color-ring-secondary": (R = "--color-ring", c(e, t, R, "color")),
                                "--color-ring-inverse": (P = "--color-ring", c(e, t, P, "color")),
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

        function c(e, t, o, n) {
            let r = e.getPropertyValue(o).trim();
            if (0 === r.length) return;
            t.style[n] = `var(${o})`;
            let i = getComputedStyle(t)[n].trim();
            return 0 === i.length || i === `var(${o})` ? r : i
        }
        o.d(t, {}, {
            a: s
        })
    }),
    Yshm: (function(e, t, o) {
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
    LGZt: (function(e, t, o) {
        var n = o("d0tz");
        o.d(t, {}, {
            a: function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Ig)(t),
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
    WYvZ: (function(e, t, o) {
        var n = o("F6B1"),
            r = o("ASxG"),
            i = o("FgIX"),
            l = o("sS8e");
        let a = "CALL",
            s = "RESOLVE",
            c = ["downloadBlob", "getFileDownloadUrl", "getFileMetadata", "invokeDocumentBootstrap", "notifyAutofillCandidates", "openConversationOverlay", "openPlaidLink", "openPromptInput", "requestClose", "requestCloseFocusedObject", "requestConnectPlugin", "requestConnectSheet", "requestDeclinePluginSuggestions", "requestFocusedObject", "requestLinkToConnector", "requestModal", "requestOpenPlugin", "requestReconnectConnector", "requestTargetedReply", "selectFiles", "setOpenInAppUrl", "share", "showToast", "triggerHaptic", "uploadFile"],
            d = n.d,
            u = r.enum(["cold", "warming", "warm"]),
            p = r.object({
                status: r.literal(2),
                type: r.literal("environment_status")
            }).loose(),
            f = r.object({
                href: r.url({
                    protocol: /^(https|codex|codex-dev)$/
                }),
                openMode: r.enum(["tab", "popup"]).optional()
            });

        function g(e, t) {
            return {
                initId: (0, n.g)(t?.getAttribute("src") ?? void 0),
                sandboxId: e
            }
        }

        function h(e) {
            return d.every(t => null != e[t])
        }

        function m(e) {
            return "object" == typeof e && null != e
        }

        function x(e) {
            return !!m(e) && "function" == typeof e.postMessage && "function" == typeof e.start
        }

        function b(e) {
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
            }), l.f]).safeParse("data" in e ? e.data : void 0).data;
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

        function y() {
            let e = Error("MCP sandbox RPC aborted.");
            return e.name = "AbortError", e
        }

        function A() {
            let e = Error("MCP sandbox RPC timed out.");
            return e.name = "TimeoutError", e
        }

        function v(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.start(), o => new Promise((n, r) => {
                let i, l = t.signal,
                    c = void 0 === t.timeoutMs ? 3e4 : t.timeoutMs;
                if (l?.aborted) return void r(y());
                let {
                    port1: d,
                    port2: u
                } = new MessageChannel, p = !1, f = (e, t) => {
                    p || (p = !0, null != i && clearTimeout(i), l?.removeEventListener("abort", g), d.onmessage = null, d.close(), e(t))
                }, g = () => {
                    f(r, y())
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
            a: g,
            b: async function(e) {
                var t, o, r, l, d;
                let p, {
                        hostApiHandlers: f,
                        assertActive: C,
                        ..._
                    } = e,
                    {
                        ports: w,
                        replyPort: I
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
                        let d;
                        if (i.aborted) return void c(y());
                        let p = () => {
                                window.removeEventListener("message", f), i.removeEventListener("abort", g), null != d && clearTimeout(d)
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
                                        if (!(0, n.l)(t)) return null;
                                        let o = {};
                                        for (let n of t) {
                                            let t = e[n];
                                            if (!x(t)) return null;
                                            o[n] = t
                                        }
                                        return h(o) ? o : null
                                    }(l.ports);
                                    if (null == r || !x(l.replyPort)) return;
                                    p(), e({
                                        ports: r,
                                        replyPort: l.replyPort
                                    });
                                    return
                                }
                                if (l.origin !== o || l.sandboxId !== r || l.initId !== s || !Array.isArray(l.portNames)) return;
                                let c = l.portNames;
                                if (!(0, n.l)(c) || i.ports.length !== c.length + 1) return;
                                let d = function(e, t) {
                                    let o = {};
                                    for (let [n, r] of e.entries()) {
                                        let e = t[n];
                                        if (!x(e)) return null;
                                        o[r] = e
                                    }
                                    return h(o) ? o : null
                                }(c, i.ports);
                                if (null == d) return;
                                let f = i.ports[c.length];
                                if (null == f) return;
                                let g = u.safeParse(l.skybridgeCacheState);
                                g.success && t?.(g.data), p(), e({
                                    ports: d,
                                    replyPort: f
                                })
                            },
                            g = () => {
                                p(), c(y())
                            };
                        window.addEventListener("message", f), i.addEventListener("abort", g, {
                            once: !0
                        }), d = setTimeout(() => {
                            p(), c(A())
                        }, 2e4);
                        let b = (0, n.e)({
                            initId: s,
                            sandboxId: r,
                            sourceUrl: l
                        });
                        a.getAttribute("src") !== b && a.setAttribute("src", b)
                    })
                }(_), T = g(_.sandboxId, _.webview), E = function(e, t, o) {
                    function n(e, o, n, r) {
                        return function(e, t) {
                            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b,
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
                            for (var r = arguments.length, l = Array(r), a = 0; a < r; a++) l[a] = arguments[a];
                            return (0, i.i)({
                                operation: "App request handling",
                                starting: "Handling app request"
                            }, {
                                safe: {
                                    ...t,
                                    method: e
                                }
                            }, async () => (n?.(), o(...l)), {
                                quiet: e.startsWith("notify") || "sendInstrument" === e || "updateWidgetState" === e
                            })
                        }, void 0, r)
                    }
                    let r = {};
                    for (let t of c) {
                        let i = e[t];
                        null != i && (r[t] = n(t, i, o))
                    }
                    return {
                        ...r,
                        ...null == e.notifyAppBlockMessage ? {} : {
                            notifyAppBlockMessage: n("notifyAppBlockMessage", e.notifyAppBlockMessage)
                        },
                        ...null == e.requestCheckout ? {} : {
                            requestCheckout: n("requestCheckout", e.requestCheckout, o, e => e instanceof Error ? b(e) : e)
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
                        requestDisplayMode: n("requestDisplayMode", e.requestDisplayMode, o),
                        sendFollowUpMessage: n("sendFollowUpMessage", e.sendFollowUpMessage, o),
                        sendInstrument: n("sendInstrument", e.sendInstrument),
                        updateWidgetState: n("updateWidgetState", e.updateWidgetState, o)
                    }
                }(f, T, C);
                return I.postMessage(E, Object.values(E)), I.start(), t = w, o = _.signal, r = T, p = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = v(t, n ? {} : {
                            signal: o
                        });
                    return t => (0, i.i)({
                        operation: "App request",
                        starting: "Sending app request"
                    }, {
                        safe: {
                            ...r,
                            method: e
                        }
                    }, async () => l(t), {
                        signal: n ? void 0 : o,
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
                    runWidgetCode: (l = t.runWidgetCode, d = o, l.start(), async function*(e) {
                        let {
                            port1: t,
                            port2: o
                        } = new MessageChannel, {
                            port1: n,
                            port2: r
                        } = new MessageChannel, {
                            port1: i,
                            port2: a
                        } = new MessageChannel, {
                            port1: s,
                            port2: c
                        } = new MessageChannel, u = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return v(e, {
                                ...t,
                                signal: d
                            })
                        }, p = u(t), f = u(n, {
                            timeoutMs: null
                        }), g = u(i), h = u(s);
                        l.postMessage(["GENERATOR_GENERATE", {
                            asyncDispose: o,
                            next: r,
                            return: a,
                            throw: c
                        }, e], [o, r, a, c]);
                        try {
                            let e = await f(void 0);
                            for (; !e.done;) yield e.value, e = await f(void 0);
                            return e.value
                        } catch (e) {
                            if (d.aborted) return;
                            throw await h(e).catch(() => {}), e
                        } finally {
                            d.aborted || await Promise.allSettled([p(void 0), g(void 0)]), [t, n, i, s].forEach(e => {
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
    ePaQ: (function(e, t, o) {
        o.d(t, {
            a: () => m
        });
        var n = o("ABep"),
            r = o("QosV"),
            i = o("kSHG"),
            l = o("bFOP"),
            a = o("slpy"),
            s = o("on57"),
            c = o("zd8w"),
            d = o("KxMp"),
            u = o("bf6R"),
            p = o("zSQm"),
            f = o("WAdu");

        function g(e) {
            let t, o, i, l, a, s, c, d = (0, r.c)(21),
                {
                    title: u,
                    subtitle: p,
                    body: f,
                    branding: g,
                    followUp: h,
                    actions: m
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
            }), d[8] = f, d[9] = x, d[10] = u, d[11] = a) : a = d[11], d[12] !== h ? (s = null != h && (0, n.jsx)("div", {
                className: "followUp-otVo0x",
                children: h
            }), d[12] = h, d[13] = s) : s = d[13], d[14] !== m || d[15] !== o || d[16] !== i || d[17] !== l || d[18] !== a || d[19] !== s ? (c = (0, n.jsxs)("div", {
                className: "content-cuuiWn",
                children: [o, i, l, a, m, s]
            }), d[14] = m, d[15] = o, d[16] = i, d[17] = l, d[18] = a, d[19] = s, d[20] = c) : c = d[20], c
        }
        var h = o("Nfif");

        function m(e) {
            let t, o, i, s, d = (0, r.c)(32),
                {
                    children: u,
                    disabled: p,
                    metadata: f,
                    sourceAppId: g,
                    followUp: h,
                    keepOpen: m,
                    openOnClick: C,
                    closeOnTriggerClick: y,
                    presentation: A,
                    renderHoverCard: v
                } = e,
                _ = void 0 === y || y,
                [w, I] = (0, c.useState)(!1);
            if (null == f.hoverCard && null == v && "file" !== A && !C && _) {
                let e, t, o = !!m || void 0;
                return d[0] !== u ? (e = (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== p || d[3] !== f.title || d[4] !== o || d[5] !== e ? (t = (0, n.jsx)(a.a, {
                    content: f.title,
                    disabled: p,
                    forceOpen: o,
                    children: e
                }), d[2] = p, d[3] = f.title, d[4] = o, d[5] = e, d[6] = t) : t = d[6], t
            }
            let T = f.title;
            if (null != v) {
                let e;
                d[7] !== h || d[8] !== f || d[9] !== A || d[10] !== v || d[11] !== g ? (e = v({
                    metadata: f,
                    sourceAppId: g,
                    followUp: h,
                    presentation: A
                }), d[7] = h, d[8] = f, d[9] = A, d[10] = v, d[11] = g, d[12] = e) : e = d[12], T = e
            } else if (null != f.hoverCard) {
                let e;
                d[13] !== h || d[14] !== f || d[15] !== A || d[16] !== g ? (e = (0, n.jsx)(b, {
                    metadata: f,
                    sourceAppId: g,
                    followUp: h,
                    presentation: A
                }), d[13] = h, d[14] = f, d[15] = A, d[16] = g, d[17] = e) : e = d[17], T = e
            }
            let E = !p && (m || w);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => I(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== _ || d[21] !== C ? (o = (0, n.jsx)(x, {
                openOnClick: C,
                closeOnTriggerClick: _,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = _, d[21] = C, d[22] = o) : o = d[22];
            let F = "file" === A ? 344 : 320,
                j = "file" === A ? 10 : 6;
            return d[23] !== T || d[24] !== f.title || d[25] !== F || d[26] !== j ? (i = (0, n.jsx)(l.a.Content, {
                "aria-label": f.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: j,
                children: T
            }), d[23] = T, d[24] = f.title, d[25] = F, d[26] = j, d[27] = i) : i = d[27], d[28] !== E || d[29] !== o || d[30] !== i ? (s = (0, n.jsxs)(l.a, {
                showOnHover: !0,
                open: E,
                onOpenChange: I,
                children: [o, i]
            }), d[28] = E, d[29] = o, d[30] = i, d[31] = s) : s = d[31], s
        }

        function x(e) {
            let t, o, i, a = (0, r.c)(10),
                {
                    children: s,
                    openOnClick: c,
                    closeOnTriggerClick: d,
                    onOpen: u
                } = e,
                {
                    close: p
                } = (0, l.b)();
            return a[0] !== p || a[1] !== d || a[2] !== u || a[3] !== c ? (t = e => {
                c && d || (e.preventDefault(), c ? u() : p())
            }, a[0] = p, a[1] = d, a[2] = u, a[3] = c, a[4] = t) : t = a[4], a[5] !== s ? (o = (0, n.jsx)("span", {
                className: "group/mcp-source-citation inline-flex",
                tabIndex: -1,
                children: s
            }), a[5] = s, a[6] = o) : o = a[6], a[7] !== t || a[8] !== o ? (i = (0, n.jsx)(l.a.Trigger, {
                onClick: t,
                children: o
            }), a[7] = t, a[8] = o, a[9] = i) : i = a[9], i
        }

        function b(e) {
            let t, o, l, a, m, x, b, C, y = (0, r.c)(53),
                {
                    metadata: A,
                    sourceAppId: v,
                    followUp: _,
                    presentation: w
                } = e,
                I = (0, c.useContext)(f.a);
            if (y[0] !== A.icons?.[0]) {
                let {
                    data: e
                } = i.v.safeParse(A.icons?.[0]), o = e?.src;
                t = null == o ? void 0 : (0, p.b)(o), y[0] = A.icons?.[0], y[1] = t
            } else t = y[1];
            let T = t;
            y[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(u.Bi, {}), y[2] = o) : o = y[2];
            let E = o;
            if ("restricted" !== I) {
                if (null != A.url) {
                    let e;
                    y[3] !== A.url ? (e = (0, n.jsx)(d.a, {
                        href: A.url,
                        className: "size-4"
                    }), y[3] = A.url, y[4] = e) : e = y[4], E = e
                } else if (null != T) {
                    let e, t, o = null == v && "dark:brightness-0 dark:invert";
                    y[5] !== o ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", o), y[5] = o, y[6] = e) : e = y[6], y[7] !== T || y[8] !== e ? (t = (0, n.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: T
                    }), y[7] = T, y[8] = e, y[9] = t) : t = y[9], E = t
                }
            }
            if ("file" === w && null != v) {
                let e, t, o = A.hoverCard?.title ?? A.title,
                    r = A.hoverCard?.subtitle,
                    i = A.hoverCard?.body;
                return y[10] !== v ? (e = (0, n.jsx)(h.a, {
                    appId: v,
                    showName: !0,
                    presentation: "file"
                }), y[10] = v, y[11] = e) : e = y[11], y[12] !== _ || y[13] !== o || y[14] !== r || y[15] !== i || y[16] !== e ? (t = (0, n.jsx)(g, {
                    title: o,
                    subtitle: r,
                    body: i,
                    branding: e,
                    followUp: _
                }), y[12] = _, y[13] = o, y[14] = r, y[15] = i, y[16] = e, y[17] = t) : t = y[17], t
            }
            if (null != v) {
                let e, t, o, r, i, l;
                y[18] !== v ? (e = (0, n.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, n.jsx)(h.a, {
                        appId: v,
                        showName: !0
                    })
                }), y[18] = v, y[19] = e) : e = y[19];
                let a = A.hoverCard?.title ?? A.title;
                return y[20] !== a ? (t = (0, n.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: a
                }), y[20] = a, y[21] = t) : t = y[21], y[22] !== A.hoverCard ? (o = A.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: A.hoverCard.subtitle
                }), y[22] = A.hoverCard, y[23] = o) : o = y[23], y[24] !== A.hoverCard || y[25] !== A.title ? (r = A.hoverCard?.body != null && (0, n.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": A.title,
                    tabIndex: 0,
                    children: A.hoverCard.body
                }), y[24] = A.hoverCard, y[25] = A.title, y[26] = r) : r = y[26], y[27] !== _ ? (i = null != _ && (0, n.jsx)("div", {
                    children: _
                }), y[27] = _, y[28] = i) : i = y[28], y[29] !== e || y[30] !== t || y[31] !== o || y[32] !== r || y[33] !== i ? (l = (0, n.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, o, r, i]
                }), y[29] = e, y[30] = t, y[31] = o, y[32] = r, y[33] = i, y[34] = l) : l = y[34], l
            }
            let F = A.hoverCard?.title ?? A.title;
            return y[35] !== F ? (l = (0, n.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), y[35] = F, y[36] = l) : l = y[36], y[37] !== A.hoverCard ? (a = A.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: A.hoverCard.subtitle
            }), y[37] = A.hoverCard, y[38] = a) : a = y[38], y[39] !== l || y[40] !== a ? (m = (0, n.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [l, a]
            }), y[39] = l, y[40] = a, y[41] = m) : m = y[41], y[42] !== A.hoverCard || y[43] !== A.title ? (x = A.hoverCard?.body != null && (0, n.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": A.title,
                tabIndex: 0,
                children: A.hoverCard.body
            }), y[42] = A.hoverCard, y[43] = A.title, y[44] = x) : x = y[44], y[45] !== E || y[46] !== A.hoverCard?.title || y[47] !== A.title ? (b = A.hoverCard?.title != null && (0, n.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [E, (0, n.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: A.title
                })]
            }), y[45] = E, y[46] = A.hoverCard?.title, y[47] = A.title, y[48] = b) : b = y[48], y[49] !== m || y[50] !== x || y[51] !== b ? (C = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [m, x, b]
            }), y[49] = m, y[50] = x, y[51] = b, y[52] = C) : C = y[52], C
        }
    }),
    JAYD: (function(e, t, o) {
        var n = o("BolX"),
            r = o("d0tz"),
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
                hostId: r.Ub,
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
            l = o("d0tz"),
            a = o("zd8w"),
            s = o("oyxz"),
            c = o("BQbE"),
            d = o("bf6R"),
            u = o("E6P3"),
            p = o("zSQm"),
            f = o("WAdu"),
            g = o("a6Zv"),
            h = e => (0, n.jsxs)("svg", {
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
            m = o("ZRyR");

        function x(e) {
            let t, o, x, b, C, y, A, v = (0, r.c)(21),
                {
                    appId: _,
                    showName: w,
                    presentation: I
                } = e,
                T = void 0 !== w && w,
                E = (0, a.useContext)(f.a);
            v[0] !== _ ? (t = [_], v[0] = _, v[1] = t) : t = v[1];
            let F = "restricted" !== E;
            v[2] !== t || v[3] !== F ? (o = {
                appIds: t,
                hostId: l.Ub,
                enabled: F
            }, v[2] = t, v[3] = F, v[4] = o) : o = v[4];
            let {
                data: j
            } = (0, c.c)(o), k = j?.find(e => e.id === _), M = (0, g.a)() ? k?.iconUrlDark ?? k?.iconUrl : k?.iconUrl, N = null == M ? void 0 : (0, p.b)(M);
            v[5] !== I ? (x = "file" === I ? (0, n.jsx)("span", {
                className: (0, i.b)(m.a.connectorIcon, m.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, n.jsx)(h, {
                    "aria-hidden": "true"
                })
            }) : (0, n.jsx)(d.Bi, {}), v[5] = I, v[6] = x) : x = v[6];
            let S = x;
            v[7] !== S || v[8] !== E || v[9] !== I || v[10] !== N ? (b = "restricted" !== E && null != N ? (0, n.jsx)(u.a, {
                className: (0, i.b)("shrink-0", "file" === I ? [m.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: N,
                fallback: S
            }, N) : S, v[7] = S, v[8] = E, v[9] = I, v[10] = N, v[11] = b) : b = v[11];
            let O = b;
            return v[12] !== O || v[13] !== I ? (C = "file" === I ? (0, n.jsx)("span", {
                className: "size-4 shrink-0",
                children: O
            }) : O, v[12] = O, v[13] = I, v[14] = C) : C = v[14], v[15] !== k?.name || v[16] !== T ? (y = T && (k?.name ?? (0, n.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), v[15] = k?.name, v[16] = T, v[17] = y) : y = v[17], v[18] !== C || v[19] !== y ? (A = (0, n.jsxs)(n.Fragment, {
                children: [C, y]
            }), v[18] = C, v[19] = y, v[20] = A) : A = v[20], A
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
    }),
    xsLm: (function(e, t, o) {
        o.d(t, {}, {
            a: function(e, t) {
                let o, {
                    threshold: n = .5,
                    isInViewport: r,
                    isEligible: i,
                    subscribe: l
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("u" < typeof IntersectionObserver) return;
                let a = e.ownerDocument,
                    s = !1,
                    c = !1;

                function d() {
                    !c && s && "hidden" !== a.visibilityState && e.isConnected && e.checkVisibility?.({
                        checkOpacity: !0,
                        visibilityProperty: !0
                    }) && (i?.() ?? !0) && t() && f()
                }
                let u = new IntersectionObserver(e => {
                    let t = e[0];
                    s = r?.(e) ?? (null != t && t.isIntersecting && t.intersectionRatio >= n), d()
                }, {
                    threshold: n
                });

                function p() {
                    s = !1, u.disconnect(), u.takeRecords(), c || "visible" !== a.visibilityState || u.observe(e)
                }

                function f() {
                    c = !0, u.disconnect(), a.removeEventListener("visibilitychange", p), o?.()
                }
                return a.addEventListener("visibilitychange", p), o = l?.(d, p), p(), f
            }
        })
    })
};