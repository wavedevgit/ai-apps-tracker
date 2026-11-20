export const __rspack_esm_ids = [383559];
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
    HBEI: (function(e, t, a) {
        e.exports = a.p + "assets/bundled-data-mark-green-16.6aa8bae685.svg"
    }),
    bmU4: (function(e, t, a) {
        var i = a("iRMi"),
            n = a("yGJW"),
            l = a("YTYy");
        let r = {
            pptx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": i.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        a.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : i.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, a) {
                let {
                    importKind: i
                } = e;
                if ("pptx" !== i && "xlsx" !== i && "csv" !== i && "tsv" !== i || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let n = t?.target,
                    l = null != n && "fileId" in n ? n.fileId : void 0,
                    r = a?.libraryFileId ?? (null != n && "libraryFileId" in n ? n.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: i,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != l && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(l) ? l : void 0,
                    libraryFileId: null != r && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(r) ? r : void 0
                }
            },
            c: function(e, t, a, o) {
                if (null == t) return;
                let s = t.threadId ?? void 0;
                (0, n.a)(e, i.CodexArtifactFileActionClicked, {
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
                    } [a],
                    targetFormat: null == o.format ? void 0 : r[o.format],
                    targetApp: o.app,
                    productExperience: (0, l.a)(e, s),
                    threadId: s,
                    turnId: t.turnId ?? void 0,
                    pageId: t.pageId,
                    fileId: t.fileId,
                    libraryFileId: t.libraryFileId
                })
            }
        })
    }),
    g3w6: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            l = a("on57"),
            r = a("IPUh"),
            o = a("lsky"),
            s = a("bf6R"),
            c = a("T1PX"),
            d = a("JcEh");
        a("V8uZ");
        let u = {
            duration: .2,
            ease: [.22, .61, .36, 1]
        };
        a.d(t, {}, {
            a: function(e) {
                var t;
                let a, m, f, p, h, g, x, C, v, b, A, _ = (0, n.c)(28),
                    {
                        disabled: I,
                        ref: w,
                        displayText: y,
                        loading: T,
                        onActivate: E
                    } = e,
                    F = void 0 !== I && I,
                    N = (0, c.a)(),
                    j = F || void 0,
                    k = F ? "cursor-default" : "group/followup-citation cursor-interaction hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit";
                _[0] !== k ? (m = (0, l.b)("inline rounded-md align-baseline whitespace-nowrap text-inherit underline decoration-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-[2px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none", k), _[0] = k, _[1] = m) : m = _[1];
                let O = F ? -1 : 0,
                    M = F ? void 0 : E;
                _[2] !== F || _[3] !== E ? (f = e => {
                    F || "Enter" !== e.key && " " !== e.key || (e.preventDefault(), E())
                }, _[2] = F, _[3] = E, _[4] = f) : f = _[4], _[5] !== N ? (p = !N && {
                    opacity: 0,
                    width: 0
                }, _[5] = N, _[6] = p) : p = _[6], _[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                    opacity: 1,
                    width: "1.5rem"
                }, _[7] = h) : h = _[7];
                let S = N ? void 0 : u;
                _[8] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, i.jsx)(s.l, {
                    className: "inline-block text-default transition-transform duration-basic ease-out group-hover/followup-citation:translate-x-0.5 group-hover/followup-citation:text-(color:--link-primary-text-color-hover)",
                    "data-rtl-flip": ""
                }), _[8] = g) : g = _[8], _[9] !== S || _[10] !== p ? (x = (0, i.jsx)(r.a.span, {
                    "aria-hidden": "true",
                    className: "inline-flex items-center overflow-hidden align-middle",
                    initial: p,
                    animate: h,
                    transition: S,
                    children: g
                }), _[9] = S, _[10] = p, _[11] = x) : x = _[11];
                let R = void 0 !== T && T && "loading-shimmer-pure-text";
                return _[12] !== R ? (C = (0, l.b)("whitespace-normal group-hover/followup-citation:text-(color:--link-primary-text-color-hover)", R), _[12] = R, _[13] = C) : C = _[13], _[14] !== y ? (v = (0, d.a)((t = y, (a = e => e.map(e => ("strong" === e.type || "em" === e.type) && null != e.tokens ? {
                    ...e,
                    tokens: a(e.tokens)
                } : "text" === e.type || "escape" === e.type ? e : {
                    type: "text",
                    raw: e.raw,
                    text: e.raw
                }))(o.a.lexInline(t))), {}), _[14] = y, _[15] = v) : v = _[15], _[16] !== C || _[17] !== v ? (b = (0, i.jsx)("span", {
                    className: C,
                    children: v
                }), _[16] = C, _[17] = v, _[18] = b) : b = _[18], _[19] !== w || _[20] !== x || _[21] !== b || _[22] !== j || _[23] !== m || _[24] !== O || _[25] !== M || _[26] !== f ? (A = (0, i.jsxs)("span", {
                    ref: w,
                    "aria-disabled": j,
                    className: m,
                    role: "button",
                    tabIndex: O,
                    onClick: M,
                    onKeyDown: f,
                    children: [x, b]
                }), _[19] = w, _[20] = x, _[21] = b, _[22] = j, _[23] = m, _[24] = O, _[25] = M, _[26] = f, _[27] = A) : A = _[27], A
            }
        })
    }),
    ts3W: (function(e, t, a) {
        var i = a("CBsD"),
            n = a("LulU"),
            l = a("xygx");
        a.d(t, {}, {
            a: function() {
                return "u" > typeof ClipboardItem && "function" == typeof navigator.clipboard?.write
            },
            b: function(e) {
                let {
                    conversationId: t,
                    environmentId: a,
                    filename: r,
                    hostId: o,
                    imageAssetResolver: s,
                    onCopySucceeded: c,
                    onFailure: d,
                    src: u
                } = e, m = (0, l.f)({
                    conversationId: t,
                    environmentId: a,
                    absoluteImageFilePath: (0, i.b)(u),
                    hostId: o,
                    imageAssetResolver: s,
                    src: u
                }).then(async e => {
                    if (null == e) throw Error("Could not read image for clipboard copy");
                    let t = e instanceof Blob ? e : (0, n.a)(e, r).file;
                    if ("image/png" === t.type) return t;
                    let a = await createImageBitmap(t),
                        i = document.createElement("canvas");
                    i.width = a.width, i.height = a.height;
                    let l = i.getContext("2d");
                    if (null == l) throw a.close(), Error("Could not create image clipboard canvas");
                    l.drawImage(a, 0, 0), a.close();
                    let o = await new Promise(e => {
                        i.toBlob(e, "image/png")
                    });
                    if (null == o) throw Error("Could not encode image for clipboard copy");
                    return o
                });
                m.catch(() => void 0);
                try {
                    navigator.clipboard.write([new ClipboardItem({
                        "image/png": m
                    })]).then(c, d)
                } catch {
                    d()
                }
            }
        })
    }),
    YeQK: (function(e, t, a) {
        a.r(t);
        var i = a("iRMi"),
            n = a("UKCO"),
            l = a("Qgfj"),
            r = a("DD2M"),
            o = a("Wefw"),
            s = a("tl5a"),
            c = a("Ow2S"),
            d = a("jAnS"),
            u = a("TSib"),
            m = a("jEN2"),
            f = a("Eklu"),
            p = a("uIyc"),
            h = a("qEnx"),
            g = a("SGsN"),
            x = a("Igf5"),
            C = a("XYHU"),
            v = a("ddzD"),
            b = a("urzV"),
            A = a("ylNI"),
            _ = a("CBsD"),
            I = a("Q4dB"),
            w = a("Sd8U"),
            y = a("sbaW"),
            T = a("ndjw"),
            E = a("b38k"),
            F = a("gTKF"),
            N = a("LulU"),
            j = a("zHp1"),
            k = a("aepO"),
            O = a("bnxy"),
            M = a("ts3W"),
            S = a("xygx");
        a.d(t, {}, {
            getGeneratedImageContextMenuItems: function(e, t) {
                let {
                    chatGptConversationId: a,
                    displaySrc: R,
                    hostId: P,
                    image: D,
                    imageAssetResolver: L,
                    intl: U,
                    onAddToChat: X,
                    onAddedToChat: z,
                    onDownload: B,
                    onDownloadClick: W,
                    onDownloadInitiated: V,
                    onDownloaded: G,
                    onOpenedInNewTab: H
                } = t, Q = (0, w.m)(e), K = P ?? e.get(y.threadHostId$), q = e.get(F.threadExecutorTargetByThread$, null == Q ? null : {
                    kind: "app-server",
                    conversationId: Q
                }), Z = q?.hostId === K ? q.environmentId : void 0, Y = (0, _.b)(D.src), $ = function(e, t, a) {
                    if (!("kind" in e)) return (0, S.d)(e);
                    let i = (e.filename ?? (null == t ? e.alt.trim() : (0, O.j)(t))) || "image";
                    return /\.[a-z\d]+$/i.test(i) ? i : `${i}.${(0,b.c)(e.src)??(0,b.c)(a)??"png"}`
                }(D, Y, R), J = (0, v.a)({
                    isAnimated: "isAnimated" in D && !0 === D.isAnimated
                }), ee = [];
                ee.push({
                    id: "open-image-in-new-tab",
                    message: (0, l.e)({
                        id: "codex.localConversation.image.contextMenu.openInNewTab",
                        defaultMessage: "Open image in new tab"
                    }),
                    onSelect: () => {
                        let t = () => {
                            e.get(g.f).danger(U.formatMessage({
                                id: "codex.localConversation.image.contextMenu.openFailure",
                                defaultMessage: "Could not open image"
                            }), {
                                errorAnalytics: {
                                    toastId: "imageContextMenu.openFailure"
                                }
                            })
                        };
                        (async () => {
                            let a = null == Y && (!("kind" in D) || /^https?:/i.test(D.src)) ? D.src : await (0, S.e)({
                                conversationId: Q,
                                environmentId: Z,
                                absoluteImageFilePath: Y,
                                hostId: K,
                                imageAssetResolver: L,
                                queryClient: e.queryClient,
                                src: D.src
                            });
                            null == a ? t() : (0, A.openImagePreview)(e, {
                                alt: D.alt,
                                attachmentSrc: "kind" in D || null != Y ? a : D.src,
                                imageAssetResolver: L,
                                isAnimated: J.isAnimated,
                                onDownloadInitiated: null == V ? void 0 : () => V("lightbox"),
                                openInEditor: !0,
                                readOnly: !0,
                                ...!("kind" in D) && null == Y ? {
                                    src: R,
                                    title: D.tabTitle,
                                    generatedImages: [D],
                                    generatedImagesSource: "provided",
                                    initialImageId: D.id
                                } : {
                                    src: a,
                                    downloadSrc: a,
                                    title: "kind" in D ? D.alt : D.tabTitle
                                }
                            }) && H?.()
                        })().catch(t)
                    }
                });
                let et = [D.src, R].find(n.ni);
                null != et && ee.push({
                    id: "copy-image-address",
                    message: (0, l.e)({
                        id: "codex.localConversation.image.contextMenu.copyAddress",
                        defaultMessage: "Copy image address"
                    }),
                    onSelect: () => {
                        (0, k.d)(et)
                    }
                }), J.canSelect && ee.push({
                    id: "add-to-chat",
                    message: (0, l.e)({
                        id: "codex.localConversation.generatedImage.contextMenu.addToChat",
                        defaultMessage: "Add to chat"
                    }),
                    onSelect: () => {
                        if (X?.() === !1) return;
                        let t = () => {
                            e.get(g.f).danger(U.formatMessage({
                                id: "codex.localConversation.imagePlayground.selectFailed",
                                defaultMessage: "Could not select image"
                            }), {
                                errorAnalytics: {
                                    toastId: "codex.localConversation.imagePlayground.selectFailed"
                                }
                            })
                        };
                        (0, m.d)();
                        let i = a ?? ("chatgpt-thread" === e.value.routeKind ? e.value.conversationId : void 0);
                        null != i ? (0, S.e)({
                            conversationId: Q,
                            environmentId: Z,
                            absoluteImageFilePath: Y,
                            hostId: K,
                            imageAssetResolver: L,
                            queryClient: e.queryClient,
                            src: D.src
                        }).then(async a => {
                            if (null == a) return void t();
                            let {
                                file: n
                            } = (0, N.a)(a, $);
                            await (0, c.eb)(e, i, [n], {
                                isTemporaryChat: "chatgpt-thread" === e.value.routeKind && e.value.conversationId === i && (0, d.i)(e.value.search ?? "")
                            }) && z?.()
                        }).catch(t) : "kind" in D ? function(e, t) {
                            let {
                                absoluteImageFilePath: a,
                                displaySrc: i,
                                filename: n,
                                hostId: l,
                                image: o,
                                imageAssetResolver: c,
                                intl: d,
                                onFailure: m,
                                onAddedToChat: x
                            } = t, C = o.src.startsWith("data:image/") ? o.src : void 0, v = (0, w.m)(e), b = l;
                            if (null != v ? b = e.get(s.yb, v) : "other" !== e.value.routeKind && (b = e.get(y.threadHostId$)), null != v) {
                                let t = e.get(f.a, ["conversation", v])?.model ?? e.get(f.d, ["conversation", v])?.model ?? e.get(s.X, v)?.settings.model,
                                    a = e.queryClient.getQueriesData({
                                        queryKey: [...I.a, b]
                                    }).flatMap(e => {
                                        let [, t] = e;
                                        return t?.data ?? []
                                    }).find(e => {
                                        let {
                                            model: a
                                        } = e;
                                        return a === t
                                    });
                                if (a?.inputModalities.includes("image") === !1) return e.get(g.f).danger(d.formatMessage({
                                    id: "composer.imageInputsUnsupported",
                                    defaultMessage: "This model does not support image inputs. Try a different model"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.imageInputsUnsupported"
                                    }
                                })
                            }
                            let A = (0, r.a)(),
                                _ = "cloud" === e.get(u.w) || null == C;
                            if ((0, u.Db)(e, e => {
                                    e.imageAttachments.push({
                                        filename: n,
                                        id: A,
                                        localPath: l === b ? a ?? void 0 : void 0,
                                        previewSrc: C ?? i,
                                        src: C ?? o.src,
                                        uploadStatus: _ ? "uploading" : "idle"
                                    })
                                }), !_) return x?.();
                            let T = (0, p.a)(e, {
                                    hostId: b,
                                    id: A
                                }),
                                E = () => {
                                    T.isPending() && (T.fail(), (0, u.Db)(e, e => {
                                        e.imageAttachments = e.imageAttachments.filter(e => e.id !== A), e.imageCommentDrafts = e.imageCommentDrafts.filter(e => e.attachmentId !== A)
                                    }), m())
                                };
                            (async () => {
                                let t = C ?? await (0, S.e)({
                                    conversationId: v,
                                    absoluteImageFilePath: a,
                                    hostId: l,
                                    imageAssetResolver: c,
                                    queryClient: e.queryClient,
                                    src: o.src
                                });
                                if (!T.isPending()) return;
                                if (null == t) return void E();
                                let i = "cloud" === e.get(u.w);
                                if ((0, u.Db)(e, e => {
                                        let a = e.imageAttachments.find(e => e.id === A);
                                        null != a && (a.src = t, a.previewSrc = t, a.uploadSrc = t, a.uploadStatus = i ? "uploading" : "idle")
                                    }), i) {
                                    let a = await (0, h.a)({
                                        dataUrl: t,
                                        filename: n
                                    });
                                    if (!T.isPending()) return;
                                    (0, u.Db)(e, e => {
                                        let t = e.imageAttachments.find(e => e.id === A);
                                        null != t && Object.assign(t, a)
                                    })
                                }
                                T.succeed(), x?.()
                            })().catch(E)
                        }(e, {
                            absoluteImageFilePath: Y,
                            displaySrc: R,
                            filename: $,
                            hostId: K,
                            image: D,
                            imageAssetResolver: L,
                            intl: U,
                            onFailure: t,
                            onAddedToChat: z
                        }) : (0, S.g)(e, {
                            displaySrc: R,
                            hostId: K,
                            image: D,
                            imageAssetResolver: L,
                            onFailure: t,
                            queryClient: e.queryClient
                        }).then(e => {
                            e && z?.()
                        }).catch(t)
                    }
                }), J.canCopy && (0, M.a)() && ee.push({
                    id: "copy-image",
                    message: (0, l.e)({
                        id: "codex.localConversation.generatedImage.contextMenu.copyImage",
                        defaultMessage: "Copy image"
                    }),
                    onSelect: () => {
                        (0, o.a)(e, {
                            action: i.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
                            surface: i.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                        }), (0, M.b)({
                            conversationId: Q,
                            environmentId: Z,
                            filename: $,
                            hostId: K,
                            imageAssetResolver: L,
                            onFailure: () => {
                                e.get(g.f).danger(U.formatMessage({
                                    id: "codex.localConversation.image.contextMenu.copyFailure",
                                    defaultMessage: "Could not copy image"
                                }), {
                                    errorAnalytics: {
                                        toastId: "codex.localConversation.image.contextMenu.copyFailure"
                                    }
                                })
                            },
                            src: D.src
                        })
                    }
                });
                let ea = null == Y ? null : e.get(T.g, K);
                return null != Y && ea?.kind === "local" && ea.id === K && ee.push({
                    id: "open-in-file-manager",
                    message: (0, E.a)(e.get(C.d)),
                    onSelect: () => {
                        (0, x.b)({
                            cwd: null,
                            hostId: K,
                            path: Y,
                            target: "fileManager"
                        })
                    }
                }), ee.push({
                    id: "download-a-copy",
                    message: J.downloadCopyLabel,
                    onSelect: () => {
                        (0, o.a)(e, {
                            action: i.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
                            surface: i.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                        });
                        let t = () => {
                            e.get(g.f).danger(U.formatMessage({
                                id: "imageSidePanel.downloadFailure",
                                defaultMessage: "Could not download image"
                            }), {
                                errorAnalytics: {
                                    toastId: "imageSidePanel.downloadFailure"
                                }
                            })
                        };
                        if (null != B) return void B().catch(t);
                        let a = "sourceImage" in D ? D.sourceImage : void 0;
                        V?.("context-menu"), W?.(), (async () => {
                            let e = D.src;
                            (null != Y || (0, j.h)(D.src)) && (e = await (0, S.e)({
                                conversationId: Q,
                                environmentId: Z,
                                absoluteImageFilePath: Y,
                                hostId: K,
                                imageAssetResolver: L,
                                src: D.src
                            })), null != e && await (0, b.d)({
                                downloadSrc: e,
                                onDownloaded: G,
                                suggestedFilename: (0, b.b)(U, J.downloadExtension ?? (0, b.c)(e) ?? (0, b.c)(D.src) ?? "png", {
                                    title: a?.chatGptDisplayTitle,
                                    gifSpeed: a?.gifPlayback?.speed
                                })
                            }) || t()
                        })().catch(t)
                    }
                }), ee
            }
        })
    }),
    d8pY: (function(e, t, a) {
        function i(e) {
            return null == e.width || null == e.height || e.width <= 0 || e.height <= 0 ? null : e.width / e.height
        }
        a.d(t, {}, {
            a: i,
            b: function(e) {
                let {
                    containerWidthPx: t,
                    imageAspectRatios: a,
                    minimumSlotCount: i = 0
                } = e, n = a.length, l = 1 === Math.max(n, i) ? a[0] : null, r = 0;
                null != t && (r = null != l ? t / l : Math.max((t - 24) / 4, 0));
                let o = a.reduce((e, t) => e + t * r, 0) + 8 * Math.max(n - 1, 0);
                if (null != l || null == t || o <= t) return {
                    heightPx: r,
                    aspectRatio: "natural",
                    maxStartIndex: 0,
                    overflowCount: 0,
                    visibleCount: n
                };
                let s = Math.min(n, 4),
                    c = Math.max(n - s, 0);
                return {
                    heightPx: r,
                    aspectRatio: "square",
                    maxStartIndex: c,
                    overflowCount: c,
                    visibleCount: s
                }
            },
            c: function(e) {
                let {
                    images: t,
                    compact: a = !1,
                    layout: n = "carousel",
                    pendingImageCount: l = 0,
                    selectedImageId: r,
                    imageAspectRatios: o = {}
                } = e, s = "thumbnails" === n && t.length + l > 1, c = Math.max(t.findIndex(e => e.id === r), 0), d = s || 1 === t.length ? t[c] : null, u = null != d && (s || 0 === l) ? o[d.id] ?? i(d) ?? 1 : null, m = null;
                return null != u && !a && (m = "max-w-[25rem]", u >= 2 ? m = "max-w-(--thread-content-max-width)" : u >= 1.01 && (m = "max-w-[30rem]")), {
                    showThumbnails: s,
                    selectedImageIndex: c,
                    singleImage: d,
                    singleImageAspectRatio: u,
                    singleImageMaxWidthClassName: m,
                    imageAspectRatios: s ? [u ?? 1] : [...t.map(e => o[e.id] ?? i(e) ?? 1), ...Array.from({
                        length: l
                    }, () => 1)],
                    minimumSlotCount: 4 * (l > 0 && !s)
                }
            }
        })
    }),
    hHaO: (function(e, t, a) {
        a.d(t, {
            a: () => m
        });
        var i = a("ABep"),
            n = a("oyxz"),
            l = a("Bbed"),
            r = a("QosV"),
            o = a("on57"),
            s = a("r21w"),
            c = a("nsuH"),
            d = a("d8pY");

        function u(e) {
            let t, a, l, u, m, f, p, h, g, x, C, v, b, A = (0, r.c)(26),
                [_, I] = (0, c.c)();
            return A[0] !== e || A[1] !== _ || A[2] !== I ? (a = (0, d.c)(e), {
                heightPx: t
            } = (0, d.b)({
                containerWidthPx: null == I ? null : Math.floor(I),
                imageAspectRatios: a.imageAspectRatios,
                minimumSlotCount: a.minimumSlotCount
            }), m = !0, f = a.showThumbnails ? "flex min-w-0 items-start gap-2" : void 0, l = _, u = (0, o.b)("overflow-hidden", a.showThumbnails && "min-w-0 flex-1", null != a.singleImageAspectRatio && "w-full", a.singleImageMaxWidthClassName), A[0] = e, A[1] = _, A[2] = I, A[3] = t, A[4] = a, A[5] = l, A[6] = u, A[7] = m, A[8] = f) : (t = A[3], a = A[4], l = A[5], u = A[6], m = A[7], f = A[8]), A[9] !== t ? (p = {
                height: t
            }, A[9] = t, A[10] = p) : p = A[10], A[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.jsx)(s.a, {
                className: "h-full rounded-2xl"
            }), A[11] = h) : h = A[11], A[12] !== l || A[13] !== u || A[14] !== p ? (g = (0, i.jsx)("div", {
                ref: l,
                className: u,
                style: p,
                children: h
            }), A[12] = l, A[13] = u, A[14] = p, A[15] = g) : g = A[15], A[16] !== a.showThumbnails ? (x = a.showThumbnails ? (0, i.jsx)("div", {
                className: "w-16 shrink-0"
            }) : null, A[16] = a.showThumbnails, A[17] = x) : x = A[17], A[18] !== m || A[19] !== f || A[20] !== g || A[21] !== x ? (C = (0, i.jsxs)("div", {
                "aria-hidden": m,
                className: f,
                children: [g, x]
            }), A[18] = m, A[19] = f, A[20] = g, A[21] = x, A[22] = C) : C = A[22], A[23] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, i.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: (0, i.jsx)(n.a, {
                    id: "generatedImageGallery.loading",
                    defaultMessage: "Loading images…"
                })
            }), A[23] = v) : v = A[23], A[24] !== C ? (b = (0, i.jsxs)(i.Fragment, {
                children: [C, v]
            }), A[24] = C, A[25] = b) : b = A[25], b
        }
        let m = (0, l.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(843292), a.e(322024), a.e(221469), a.e(301030), a.e(953533), a.e(587936), a.e(865302), a.e(452048), a.e(684598), a.e(299268), a.e(134408), a.e(433520), a.e(929309)]).then(a.bind(a, "v0mx"))).GeneratedImageGallery, {
            fallback: e => (0, i.jsx)(u, {
                ...e
            }),
            errorFallback: (0, i.jsx)("span", {
                role: "alert",
                children: (0, i.jsx)(n.a, {
                    id: "generatedImageGallery.loadError",
                    defaultMessage: "Images could not load. Reload to try again."
                })
            })
        })
    }),
    vYmP: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            l = a("on57"),
            r = a("zd8w"),
            o = a("ZtSy"),
            s = a("UtIV");
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, d, u, m, f, p, h, g, x, C, v, b, A, _, I, w, y = (0, n.c)(43);
                y[0] !== e ? ({
                    ref: m,
                    ActionWrapper: p,
                    ariaLabel: a,
                    icon: c,
                    isActive: h,
                    isTerminalInline: d,
                    label: u,
                    supportingCountLabel: f,
                    testId: x,
                    variant: g,
                    ...t
                } = e, y[0] = e, y[1] = t, y[2] = a, y[3] = c, y[4] = d, y[5] = u, y[6] = m, y[7] = f, y[8] = p, y[9] = h, y[10] = g, y[11] = x) : (t = y[1], a = y[2], c = y[3], d = y[4], u = y[5], m = y[6], f = y[7], p = y[8], h = y[9], g = y[10], x = y[11]);
                let T = void 0 === p ? r.Fragment : p,
                    E = void 0 !== h && h,
                    F = "file" === (void 0 === g ? "default" : g),
                    N = "disabled" in t && t.disabled,
                    j = N ? "cursor-default" : "group cursor-interaction",
                    k = !F && !N && "hover:bg-secondary-soft-hover hover:text-default!",
                    O = F && s.a.palette,
                    M = F && s.a.filePill;
                y[12] !== E || y[13] !== F || y[14] !== j || y[15] !== k || y[16] !== O || y[17] !== M ? (C = (0, l.b)("min-w-0 no-underline!", j, k, O, M, F ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, l.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", E ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), y[12] = E, y[13] = F, y[14] = j, y[15] = k, y[16] = O, y[17] = M, y[18] = C) : C = y[18];
                let S = C;
                y[19] !== F || y[20] !== f ? (v = null == f ? null : (0, i.jsx)("span", {
                    className: (0, l.b)("text-inherit", F ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: f
                }), y[19] = F, y[20] = f, y[21] = v) : v = y[21];
                let R = v;
                y[22] !== c || y[23] !== F || y[24] !== u || y[25] !== R ? (b = F ? (0, i.jsxs)(i.Fragment, {
                    children: [c, (0, i.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: u
                    }), R]
                }) : (0, i.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, i.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [c, (0, i.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: u
                        })]
                    }), R]
                }), y[22] = c, y[23] = F, y[24] = u, y[25] = R, y[26] = b) : b = y[26];
                let P = b,
                    D = F && "relative",
                    L = F && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return y[27] !== D || y[28] !== L ? (A = (0, l.b)("ms-1 inline-flex max-w-full min-w-0 items-center font-sans select-none", D, L), y[27] = D, y[28] = L, y[29] = A) : A = y[29], y[30] !== t || y[31] !== a || y[32] !== S || y[33] !== P || y[34] !== x ? (_ = "href" in t ? (0, i.jsx)(o.a, {
                    className: S,
                    href: t.href,
                    initiator: "markdown_link_click",
                    "data-testid": x,
                    requiresConfirmation: t.requiresConfirmation,
                    showHoverActions: t.showHoverActions,
                    tooltipContent: t.tooltipContent,
                    "aria-label": a,
                    onActivate: t.onActivate,
                    onClick: t.onClick,
                    onAuxClick: t.onAuxClick,
                    onUnmodifiedClick: t.onUnmodifiedClick,
                    children: P
                }) : (0, i.jsx)("button", {
                    className: S,
                    "aria-label": a,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: P
                }), y[30] = t, y[31] = a, y[32] = S, y[33] = P, y[34] = x, y[35] = _) : _ = y[35], y[36] !== T || y[37] !== _ ? (I = (0, i.jsx)(T, {
                    children: _
                }), y[36] = T, y[37] = _, y[38] = I) : I = y[38], y[39] !== m || y[40] !== A || y[41] !== I ? (w = (0, i.jsx)("span", {
                    ref: m,
                    className: A,
                    children: I
                }), y[39] = m, y[40] = A, y[41] = I, y[42] = w) : w = y[42], w
            }
        })
    }),
    jsoh: (function(e, t, a) {
        var i = a("Q840"),
            n = a("Cslg"),
            l = a("tSEg");
        let r = (0, i.d)(l.a, (e, t) => {
            let {
                get: a,
                scope: i
            } = t;
            switch (e) {
                case "thread":
                    return null != (0, l.h)(i.value);
                case "recipient":
                    return a(n.i) && null != a(n.f) && null != a(n.k);
                case "unavailable":
                    return !1
            }
        });
        a.d(t, {}, {
            a: r
        })
    }),
    p8Cc: (function(e, t, a) {
        var i = a("lAQI");
        let n = {
                news: "newspaper",
                company_filings: "text-page",
                investor_reports: "document-search",
                earnings_calls: "phone-wave",
                investor_presentations: "presentation",
                financial_metrics: "bar-chart",
                market_pricing: "live-signal",
                private_company_metrics: "building"
            },
            l = i.Q([i.F({
                pitchbook: i.F({
                    dataset: i.p(["companies", "investors", "funds"]),
                    provider_entity_id: i.L().min(1)
                })
            }), i.F({
                profile: i.F({
                    provider: i.z("crunchbase"),
                    entity_type: i.p(["organization", "person"]),
                    entity_id: i.L().min(1)
                })
            })]);

        function r(e) {
            for (let t of [e.chunk_id, e.source_id, e.document_id]) {
                if ("string" != typeof t) continue;
                let e = /^findata:news:v1:[0-9a-f]{64}:[0-9a-f]{64}:[0-9]{1,4}$/.test(t) ? "news" : /^findata:v2:([a-z_]+):(?:source:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+|chunk:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[0-9]+)$/.exec(t)?.[1] ?? /^findata:([a-z_]+):(?:source:[1-9][0-9]*|chunk:[1-9][0-9]*:[0-9]+)$/.exec(t)?.[1];
                if (null != e && Object.hasOwn(n, e)) return e
            }
            return l.safeParse(e).success ? "private_company_metrics" : void 0
        }
        a.d(t, {}, {
            a: r,
            b: function(e) {
                let t = r(e);
                return null == t ? void 0 : n[t]
            }
        })
    }),
    ePaQ: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var i = a("ABep"),
            n = a("QosV"),
            l = a("kSHG"),
            r = a("bFOP"),
            o = a("slpy"),
            s = a("on57"),
            c = a("zd8w"),
            d = a("KxMp"),
            u = a("bf6R"),
            m = a("zSQm"),
            f = a("WAdu");

        function p(e) {
            let t, a, l, r, o, s, c, d = (0, n.c)(23),
                {
                    title: u,
                    subtitle: m,
                    body: f,
                    scrollBody: p,
                    branding: h,
                    followUp: g,
                    actions: x
                } = e,
                C = void 0 !== p && p;
            d[0] !== f ? (t = f?.includes("\n"), d[0] = f, d[1] = t) : t = d[1];
            let v = t,
                b = C ? -1 : void 0;
            return d[2] !== h ? (a = (0, i.jsx)("div", {
                className: "branding-xlBboz",
                children: h
            }), d[2] = h, d[3] = a) : a = d[3], d[4] !== u ? (l = (0, i.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = l) : l = d[5], d[6] !== m ? (r = null != m && (0, i.jsx)("div", {
                className: "subtitle-gArrij",
                children: m
            }), d[6] = m, d[7] = r) : r = d[7], d[8] !== f || d[9] !== v || d[10] !== C || d[11] !== b || d[12] !== u ? (o = null != f && (0, i.jsx)("div", {
                className: v || C ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: v ? 0 : b,
                children: f
            }), d[8] = f, d[9] = v, d[10] = C, d[11] = b, d[12] = u, d[13] = o) : o = d[13], d[14] !== g ? (s = null != g && (0, i.jsx)("div", {
                className: "followUp-otVo0x",
                children: g
            }), d[14] = g, d[15] = s) : s = d[15], d[16] !== x || d[17] !== a || d[18] !== l || d[19] !== r || d[20] !== o || d[21] !== s ? (c = (0, i.jsxs)("div", {
                className: "content-cuuiWn",
                children: [a, l, r, o, x, s]
            }), d[16] = x, d[17] = a, d[18] = l, d[19] = r, d[20] = o, d[21] = s, d[22] = c) : c = d[22], c
        }
        var h = a("Nfif");

        function g(e) {
            let t, a, l, s, d = (0, n.c)(32),
                {
                    children: u,
                    disabled: m,
                    metadata: f,
                    sourceAppId: p,
                    followUp: h,
                    keepOpen: g,
                    openOnClick: v,
                    closeOnTriggerClick: b,
                    presentation: A,
                    renderHoverCard: _
                } = e,
                I = void 0 === b || b,
                [w, y] = (0, c.useState)(!1);
            if (null == f.hoverCard && null == _ && "file" !== A && !v && I) {
                let e, t, a = !!g || void 0;
                return d[0] !== u ? (e = (0, i.jsx)("span", {
                    className: "inline-flex max-w-full",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== m || d[3] !== f.title || d[4] !== a || d[5] !== e ? (t = (0, i.jsx)(o.a, {
                    content: f.title,
                    disabled: m,
                    forceOpen: a,
                    children: e
                }), d[2] = m, d[3] = f.title, d[4] = a, d[5] = e, d[6] = t) : t = d[6], t
            }
            let T = f.title;
            if (null != _) {
                let e;
                d[7] !== h || d[8] !== f || d[9] !== A || d[10] !== _ || d[11] !== p ? (e = _({
                    metadata: f,
                    sourceAppId: p,
                    followUp: h,
                    presentation: A
                }), d[7] = h, d[8] = f, d[9] = A, d[10] = _, d[11] = p, d[12] = e) : e = d[12], T = e
            } else if (null != f.hoverCard) {
                let e;
                d[13] !== h || d[14] !== f || d[15] !== A || d[16] !== p ? (e = (0, i.jsx)(C, {
                    metadata: f,
                    sourceAppId: p,
                    followUp: h,
                    presentation: A
                }), d[13] = h, d[14] = f, d[15] = A, d[16] = p, d[17] = e) : e = d[17], T = e
            }
            let E = !m && (g || w);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => y(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== I || d[21] !== v ? (a = (0, i.jsx)(x, {
                openOnClick: v,
                closeOnTriggerClick: I,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = I, d[21] = v, d[22] = a) : a = d[22];
            let F = "file" === A ? 344 : 320,
                N = "file" === A ? 10 : 6;
            return d[23] !== T || d[24] !== f.title || d[25] !== F || d[26] !== N ? (l = (0, i.jsx)(r.a.Content, {
                "aria-label": f.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: N,
                children: T
            }), d[23] = T, d[24] = f.title, d[25] = F, d[26] = N, d[27] = l) : l = d[27], d[28] !== E || d[29] !== a || d[30] !== l ? (s = (0, i.jsxs)(r.a, {
                showOnHover: !0,
                open: E,
                onOpenChange: y,
                children: [a, l]
            }), d[28] = E, d[29] = a, d[30] = l, d[31] = s) : s = d[31], s
        }

        function x(e) {
            let t, a, l, o = (0, n.c)(10),
                {
                    children: s,
                    openOnClick: c,
                    closeOnTriggerClick: d,
                    onOpen: u
                } = e,
                {
                    close: m
                } = (0, r.b)();
            return o[0] !== m || o[1] !== d || o[2] !== u || o[3] !== c ? (t = e => {
                c && d || (e.preventDefault(), c ? u() : m())
            }, o[0] = m, o[1] = d, o[2] = u, o[3] = c, o[4] = t) : t = o[4], o[5] !== s ? (a = (0, i.jsx)("span", {
                className: "group/mcp-source-citation inline-flex max-w-full",
                tabIndex: -1,
                children: s
            }), o[5] = s, o[6] = a) : a = o[6], o[7] !== t || o[8] !== a ? (l = (0, i.jsx)(r.a.Trigger, {
                onClick: t,
                children: a
            }), o[7] = t, o[8] = a, o[9] = l) : l = o[9], l
        }

        function C(e) {
            let t, a, r, o, g, x, C, v, b = (0, n.c)(53),
                {
                    metadata: A,
                    sourceAppId: _,
                    followUp: I,
                    presentation: w
                } = e,
                y = (0, c.useContext)(f.a);
            if (b[0] !== A.icons?.[0]) {
                let {
                    data: e
                } = l.v.safeParse(A.icons?.[0]), a = e?.src;
                t = null == a ? void 0 : (0, m.b)(a), b[0] = A.icons?.[0], b[1] = t
            } else t = b[1];
            let T = t;
            b[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(u.Pi, {}), b[2] = a) : a = b[2];
            let E = a;
            if ("restricted" !== y) {
                if (null != A.url) {
                    let e;
                    b[3] !== A.url ? (e = (0, i.jsx)(d.a, {
                        href: A.url,
                        className: "size-4"
                    }), b[3] = A.url, b[4] = e) : e = b[4], E = e
                } else if (null != T) {
                    let e, t, a = null == _ && "dark:brightness-0 dark:invert";
                    b[5] !== a ? (e = (0, s.b)("size-4 shrink-0 rounded-sm object-contain", a), b[5] = a, b[6] = e) : e = b[6], b[7] !== T || b[8] !== e ? (t = (0, i.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: T
                    }), b[7] = T, b[8] = e, b[9] = t) : t = b[9], E = t
                }
            }
            if ("file" === w && null != _) {
                let e, t, a = A.hoverCard?.title ?? A.title,
                    n = A.hoverCard?.subtitle,
                    l = A.hoverCard?.body;
                return b[10] !== _ ? (e = (0, i.jsx)(h.a, {
                    appId: _,
                    showName: !0,
                    presentation: "file"
                }), b[10] = _, b[11] = e) : e = b[11], b[12] !== I || b[13] !== a || b[14] !== n || b[15] !== l || b[16] !== e ? (t = (0, i.jsx)(p, {
                    title: a,
                    subtitle: n,
                    body: l,
                    branding: e,
                    followUp: I
                }), b[12] = I, b[13] = a, b[14] = n, b[15] = l, b[16] = e, b[17] = t) : t = b[17], t
            }
            if (null != _) {
                let e, t, a, n, l, r;
                b[18] !== _ ? (e = (0, i.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(h.a, {
                        appId: _,
                        showName: !0
                    })
                }), b[18] = _, b[19] = e) : e = b[19];
                let o = A.hoverCard?.title ?? A.title;
                return b[20] !== o ? (t = (0, i.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: o
                }), b[20] = o, b[21] = t) : t = b[21], b[22] !== A.hoverCard ? (a = A.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: A.hoverCard.subtitle
                }), b[22] = A.hoverCard, b[23] = a) : a = b[23], b[24] !== A.hoverCard || b[25] !== A.title ? (n = A.hoverCard?.body != null && (0, i.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": A.title,
                    tabIndex: 0,
                    children: A.hoverCard.body
                }), b[24] = A.hoverCard, b[25] = A.title, b[26] = n) : n = b[26], b[27] !== I ? (l = null != I && (0, i.jsx)("div", {
                    children: I
                }), b[27] = I, b[28] = l) : l = b[28], b[29] !== e || b[30] !== t || b[31] !== a || b[32] !== n || b[33] !== l ? (r = (0, i.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, a, n, l]
                }), b[29] = e, b[30] = t, b[31] = a, b[32] = n, b[33] = l, b[34] = r) : r = b[34], r
            }
            let F = A.hoverCard?.title ?? A.title;
            return b[35] !== F ? (r = (0, i.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), b[35] = F, b[36] = r) : r = b[36], b[37] !== A.hoverCard ? (o = A.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: A.hoverCard.subtitle
            }), b[37] = A.hoverCard, b[38] = o) : o = b[38], b[39] !== r || b[40] !== o ? (g = (0, i.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [r, o]
            }), b[39] = r, b[40] = o, b[41] = g) : g = b[41], b[42] !== A.hoverCard || b[43] !== A.title ? (x = A.hoverCard?.body != null && (0, i.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": A.title,
                tabIndex: 0,
                children: A.hoverCard.body
            }), b[42] = A.hoverCard, b[43] = A.title, b[44] = x) : x = b[44], b[45] !== E || b[46] !== A.hoverCard?.title || b[47] !== A.title ? (C = A.hoverCard?.title != null && (0, i.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [E, (0, i.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: A.title
                })]
            }), b[45] = E, b[46] = A.hoverCard?.title, b[47] = A.title, b[48] = C) : C = b[48], b[49] !== g || b[50] !== x || b[51] !== C ? (v = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [g, x, C]
            }), b[49] = g, b[50] = x, b[51] = C, b[52] = v) : v = b[52], v
        }
    }),
    OyMp: (function(e, t, a) {
        var i = a("ABep"),
            n = a("oyxz"),
            l = a("E8Sp"),
            r = a("Cslg"),
            o = a("SGsN"),
            s = a("JAYD");
        a.d(t, {}, {
            a: async function(e, t) {
                let c = e.get(r.f),
                    d = e.get(r.k),
                    u = e.get(r.j),
                    m = e.get(l.b).pathname;
                try {
                    let {
                        openMcpSourceCitation: i
                    } = await a.e(127202).then(a.bind(a, "MqVO"));
                    if (c !== e.get(r.f) || d !== e.get(r.k) || "recipient" === t.access && u !== e.get(r.j) || m !== e.get(l.b).pathname || null != t.sourceAppId && !e.get(s.a, t.sourceAppId)) return;
                    i(e, t)
                } catch {
                    e.get(o.f).danger((0, i.jsx)(n.a, {
                        id: "mcpCitation.viewerUnavailable",
                        defaultMessage: "Couldn't open source"
                    }), {
                        errorAnalytics: {
                            toastId: "mcpCitation.viewerUnavailable"
                        }
                    })
                }
            }
        })
    }),
    h6Jp: (function(e, t, a) {
        var i = a("zFPc");
        a.d(t, {}, {
            a: function(e, t, a) {
                return e === i.a ? {
                    hoverCard: t,
                    paneWidth: a === i.b.citationTool ? i.b.paneWidth : void 0
                } : {
                    hoverCard: "connector_openai_findata" === e || null != e && "open_chart_source" === a ? t : void 0
                }
            }
        })
    }),
    SDqf: (function(e, t, a) {
        a.d(t, {
            a: () => V
        });
        var i = a("ABep"),
            n = a("QosV"),
            l = a("on57"),
            r = a("Q840"),
            o = a("zd8w"),
            s = a("Wf1j"),
            c = a("oyxz"),
            d = a("Qgfj"),
            u = a("lAQI"),
            m = a("E8Sp"),
            f = a("Cslg"),
            p = a("Fl60"),
            h = a("E6P3"),
            g = a("zSQm"),
            x = a("WAdu"),
            C = a("Bbed"),
            v = a("vYmP"),
            b = a("tSEg"),
            A = a("jsoh"),
            _ = a("HOLv"),
            I = a("bf6R"),
            w = a("N0Xk"),
            y = a("a6Zv"),
            T = a("Wp0b");

        function E(e) {
            let t, a, l = (0, n.c)(8),
                {
                    icon: r,
                    categoryIcon: s
                } = e,
                c = (0, o.useContext)(p.a),
                d = (0, y.a)() ? r?.logoDarkUrl : r?.logoUrl;
            l[0] !== s ? (t = null == s ? (0, i.jsx)(I.Oi, {}) : (0, i.jsx)(_.a, {
                asset: T.a[s][12],
                className: "shrink-0"
            }), l[0] = s, l[1] = t) : t = l[1];
            let u = t;
            if (c?.disableExternalMedia && !d?.startsWith("data:")) return u;
            if (null == s) {
                let e, t = r ?? null;
                return l[2] !== u || l[3] !== t ? (e = (0, i.jsx)(w.a, {
                    className: "size-3 shrink-0",
                    icon: t,
                    fallback: u
                }), l[2] = u, l[3] = t, l[4] = e) : e = l[4], e
            }
            return null == d || function(e) {
                let t;
                if (!e.startsWith("data:image/svg+xml")) return !1;
                let a = e.indexOf(",");
                try {
                    t = e.slice(0, a).endsWith(";base64") ? atob(e.slice(a + 1)) : decodeURIComponent(e.slice(a + 1))
                } catch {
                    return !1
                }
                return t.startsWith("\x3c!-- Generated from @oai/icons/") || t.replace(/<svg\b[^>]*>|<\/svg>|\s/g, "") === T.a["document-search"]["16"].body.replaceAll("currentColor", "#0D0D0D").replace(/\s/g, "")
            }(d) ? u : (l[5] !== u || l[6] !== d ? (a = (0, i.jsx)(h.a, {
                className: "size-3 shrink-0 rounded-full",
                alt: "",
                fallback: u,
                src: d
            }, d), l[5] = u, l[6] = d, l[7] = a) : a = l[7], a)
        }
        var F = a("ePaQ"),
            N = a("OyMp"),
            j = a("JAYD"),
            k = a("Nfif");
        let O = (0, C.a)(async () => (await a.e(777289).then(a.bind(a, "jCSa"))).McpSourceFollowUp);

        function M(e) {
            let t, a, l, s, c, d = (0, n.c)(23),
                {
                    source: u,
                    isTerminalInline: m,
                    onClick: f,
                    renderPill: p,
                    renderHoverCard: h
                } = e,
                g = (0, r.y)(b.a);
            d[0] !== u.id ? (t = {
                sourceId: u.id,
                question: ""
            }, d[0] = u.id, d[1] = t) : t = d[1];
            let [C, _] = (0, o.useState)(t), I = C.sourceId === u.id ? C.question : "", [w, y] = (0, o.useState)(!1), T = (0, o.useContext)(x.a), M = u.access ?? "thread", S = (0, r.x)("recipient" !== M || "restricted" !== T ? A.a : null, M), R = S && "restricted" !== T, P = (0, r.x)(R && null != u.sourceAppId ? j.a : null, u.sourceAppId ?? ""), D = !S || null != u.sourceAppId && (!R || !P);
            d[2] !== f || d[3] !== g || d[4] !== u ? (a = () => {
                f?.(), (0, N.a)(g, u)
            }, d[2] = f, d[3] = g, d[4] = u, d[5] = a) : a = d[5];
            let L = a;
            return d[6] !== w || d[7] !== I || d[8] !== u ? (l = null == u.followUpContext ? void 0 : (0, i.jsx)(O, {
                source: u,
                question: I,
                onQuestionChange: e => _({
                    sourceId: u.id,
                    question: e
                }),
                pending: w,
                onPendingChange: y
            }, u.id), d[6] = w, d[7] = I, d[8] = u, d[9] = l) : l = d[9], d[10] !== D || d[11] !== L || d[12] !== m || d[13] !== p || d[14] !== u ? (s = null != p ? p({
                source: u,
                disabled: D,
                isTerminalInline: m,
                onClick: L
            }) : (0, i.jsx)(v.a, {
                ariaLabel: u.title,
                disabled: D,
                icon: null == u.sourceAppId ? (0, i.jsx)(E, {
                    icon: u.icon,
                    categoryIcon: u.categoryIcon
                }) : (0, i.jsx)(k.a, {
                    appId: u.sourceAppId,
                    presentation: "file" === u.presentation ? "file" : void 0
                }),
                isTerminalInline: m,
                label: null == u.sourceAppId ? u.title : u.title.split(" · ")[0],
                variant: null == u.sourceAppId ? "default" : "file",
                testId: "mcp-citation",
                onClick: L
            }), d[10] = D, d[11] = L, d[12] = m, d[13] = p, d[14] = u, d[15] = s) : s = d[15], d[16] !== D || d[17] !== w || d[18] !== h || d[19] !== u || d[20] !== l || d[21] !== s ? (c = (0, i.jsx)(F.a, {
                disabled: D,
                metadata: u,
                presentation: u.presentation,
                sourceAppId: u.sourceAppId,
                keepOpen: w,
                renderHoverCard: h,
                followUp: l,
                children: s
            }), d[16] = D, d[17] = w, d[18] = h, d[19] = u, d[20] = l, d[21] = s, d[22] = c) : c = d[22], c
        }
        var S = a("zUz7"),
            R = a("HBEI"),
            P = a("p8Cc"),
            D = a("UtIV");
        let L = u.F({
                table: u.L()
            }),
            U = new Map([
                ["score_financial_facts", "financialMetrics"],
                ["measure_financial_facts", "financialMetrics"],
                ["measure_company_metric_facts", "financialMetrics"],
                ["score_company_metric_catalog", "metricDefinitions"],
                ["measure_company_metric_catalog", "metricDefinitions"],
                ["score_company_profiles", "companyProfile"],
                ["measure_company_profiles", "companyProfile"],
                ["measure_financial_events", "companyEvents"],
                ["measure_institutional_positions", "ownership"]
            ]);

        function X(e) {
            let t, a, r, o, s = (0, n.c)(11),
                {
                    source: c,
                    disabled: d,
                    onClick: u
                } = e,
                m = c.title,
                f = d ? "cursor-default" : "cursor-interaction";
            return s[0] !== f ? (t = (0, l.b)(D.a.palette, "pill-UgCDnx", "flex h-4.5 max-w-[15rem] items-center gap-1 overflow-hidden rounded-full py-0.5 pe-1.5 ps-0.5 text-[9px] leading-3 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", f), s[0] = f, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)("span", {
                "aria-hidden": "true",
                className: "relative flex h-3 w-3.5 shrink-0 items-center justify-center",
                children: (0, i.jsx)("span", {
                    className: (0, l.b)("mark-pu_nwj", "absolute size-4 shrink-0")
                })
            }), s[2] = a) : a = s[2], s[3] !== c.title ? (r = (0, i.jsx)("span", {
                className: "min-w-0 truncate",
                children: c.title
            }), s[3] = c.title, s[4] = r) : r = s[4], s[5] !== d || s[6] !== u || s[7] !== c.title || s[8] !== t || s[9] !== r ? (o = (0, i.jsx)("span", {
                className: "relative top-[-0.094rem] inline-flex max-w-full min-w-0 translate-y-0.5 items-center font-sans select-none",
                children: (0, i.jsxs)("button", {
                    type: "button",
                    "aria-label": m,
                    "data-testid": "mcp-citation",
                    disabled: d,
                    onClick: u,
                    className: t,
                    children: [a, r]
                })
            }), s[5] = d, s[6] = u, s[7] = c.title, s[8] = t, s[9] = r, s[10] = o) : o = s[10], o
        }

        function z(e) {
            var t;
            let a, r, s, d, u, m, f, C, v, b, A, _, I, w, T, E = (0, n.c)(37),
                {
                    metadata: F,
                    followUp: N,
                    documentProvider: j
                } = e,
                k = (0, o.useContext)(x.a),
                O = (0, o.useContext)(p.a),
                M = (0, y.a)();
            E[0] !== j || E[1] !== F.hoverCard?.subtitle ? (a = j ?? (t = F.hoverCard?.subtitle, ["SEC", "Quartr", "Reuters", "PitchBook", "Crunchbase", "Daloopa", "Fiscal"].find(e => t === e || t?.startsWith(`${e} \xb7 `))), E[0] = j, E[1] = F.hoverCard?.subtitle, E[2] = a) : a = E[2];
            let P = a;
            if (E[3] !== k || E[4] !== O?.disableExternalMedia || E[5] !== M || E[6] !== F || E[7] !== P) {
                let e = (0, S.a)(F);
                r = P ?? (null != e || F.hoverCard?.title != null ? F.title : void 0);
                let t = M ? e?.logoDarkUrl : e?.logoUrl,
                    a = null == t ? void 0 : (0, g.b)(t);
                s = "restricted" !== k && (!O?.disableExternalMedia || a?.startsWith("data:")) ? a : void 0, E[3] = k, E[4] = O?.disableExternalMedia, E[5] = M, E[6] = F, E[7] = P, E[8] = r, E[9] = s
            } else r = E[8], s = E[9];
            let L = s;
            E[10] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, l.b)(D.a.palette, "flex w-80 max-w-full min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default"), E[10] = d) : d = E[10];
            let U = F.hoverCard?.title ?? F.title;
            return E[11] !== U ? (u = (0, i.jsx)("div", {
                className: "line-clamp-2 break-words",
                children: U
            }), E[11] = U, E[12] = u) : u = E[12], E[13] !== F.hoverCard ? (m = F.hoverCard?.subtitle != null && (0, i.jsx)("div", {
                className: "line-clamp-2 text-xs leading-4 break-words text-tertiary",
                children: F.hoverCard.subtitle
            }), E[13] = F.hoverCard, E[14] = m) : m = E[14], E[15] !== u || E[16] !== m ? (f = (0, i.jsxs)("div", {
                className: "pb-1",
                children: [u, m]
            }), E[15] = u, E[16] = m, E[17] = f) : f = E[17], E[18] !== F.hoverCard || E[19] !== F.title ? (C = F.hoverCard?.body != null && (0, i.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-3 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": F.title,
                tabIndex: 0,
                children: F.hoverCard.body
            }), E[18] = F.hoverCard, E[19] = F.title, E[20] = C) : C = E[20], E[21] !== f || E[22] !== C ? (v = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-1",
                children: [f, C]
            }), E[21] = f, E[22] = C, E[23] = v) : v = E[23], E[24] !== N ? (b = null != N && (0, i.jsx)("div", {
                children: N
            }), E[24] = N, E[25] = b) : b = E[25], E[26] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, i.jsx)("div", {
                "aria-hidden": "true",
                className: "py-1",
                children: (0, i.jsx)("div", {
                    className: "border-t border-default"
                })
            }), E[26] = A) : A = E[26], E[27] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, i.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: R,
                    width: 20,
                    height: 20,
                    className: "shrink-0"
                }), (0, i.jsx)(c.a, {
                    id: "finance.citations.bundledDataAttribution",
                    defaultMessage: "ChatGPT Financial Services bundled data"
                })]
            }), E[27] = _) : _ = E[27], E[28] !== r || E[29] !== L ? (I = null != r && (0, i.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1",
                children: [(0, i.jsx)("span", {
                    "aria-hidden": "true",
                    className: "flex size-5 shrink-0 items-center justify-center",
                    children: null != L && (0, i.jsx)(h.a, {
                        alt: "",
                        className: "size-4 shrink-0 rounded-full",
                        src: L,
                        fallback: (0, i.jsx)(i.Fragment, {})
                    })
                }), (0, i.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: r
                })]
            }), E[28] = r, E[29] = L, E[30] = I) : I = E[30], E[31] !== I ? (w = (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 text-[13px] leading-[18px] tracking-[-0.08px] text-tertiary",
                children: [_, I]
            }), E[31] = I, E[32] = w) : w = E[32], E[33] !== b || E[34] !== w || E[35] !== v ? (T = (0, i.jsxs)("div", {
                className: d,
                children: [v, b, A, w]
            }), E[33] = b, E[34] = w, E[35] = v, E[36] = T) : T = E[36], T
        }
        let B = (0, d.f)({
                financialMetrics: {
                    id: "finance.citations.structuredFinancialMetrics",
                    defaultMessage: "Financial metrics"
                },
                metricDefinitions: {
                    id: "finance.citations.structuredMetricDefinitions",
                    defaultMessage: "Metric definitions"
                },
                companyProfile: {
                    id: "finance.citations.structuredCompanyProfile",
                    defaultMessage: "Company profile"
                },
                companyEvents: {
                    id: "finance.citations.structuredCompanyEvents",
                    defaultMessage: "Company events"
                },
                ownership: {
                    id: "finance.citations.structuredOwnership",
                    defaultMessage: "Ownership"
                }
            }),
            W = {
                connector_openai_findata: function(e) {
                    let t, l, c, d, u = (0, n.c)(15),
                        p = (0, r.y)(b.a),
                        h = (0, s.a)(),
                        g = (0, o.useContext)(x.a);
                    u[0] !== h || u[1] !== e.source ? (t = function(e, t) {
                        if ("open_source" !== e.targetToolName) return e;
                        let a = L.safeParse(e.targetArguments?.company);
                        if (!a.success || a.data.table !== e.title) return e;
                        let i = U.get(a.data.table);
                        if (null == i) return e;
                        let n = t.formatMessage(B[i]);
                        return {
                            ...e,
                            title: n,
                            hoverCard: e.hoverCard?.title === e.title ? {
                                ...e.hoverCard,
                                title: n
                            } : e.hoverCard
                        }
                    }(e.source, h), u[0] = h, u[1] = e.source, u[2] = t) : t = u[2];
                    let C = t;
                    return u[3] !== g || u[4] !== e.onClick || u[5] !== p || u[6] !== C ? (l = t => (0, i.jsx)(X, {
                        ...t,
                        onClick: () => {
                            if (!t.disabled) {
                                if ("restricted" === g) return void t.onClick();
                                !async function(e, t, i, n) {
                                    if ("open_source" !== t.targetToolName || t.targetArguments?.company == null) return void i();
                                    let l = e.get(f.f),
                                        r = e.get(f.k),
                                        o = e.get(f.j),
                                        s = () => !t.lifetimeSignal?.aborted && e.get(m.b).pathname === e.value.pathname && e.get(f.f) === l && e.get(f.k) === r && e.get(f.j) === o,
                                        c = !1;
                                    try {
                                        let {
                                            openCompanyCitation: i
                                        } = await a.e(553214).then(a.bind(a, "lJPM"));
                                        if (!s()) return;
                                        c = await i(e, t, s)
                                    } catch {}
                                    s() && (c ? n?.() : i())
                                }(p, C, t.onClick, e.onClick)
                            }
                        }
                    }), u[3] = g, u[4] = e.onClick, u[5] = p, u[6] = C, u[7] = l) : l = u[7], u[8] !== C.targetArguments ? (c = e => (0, i.jsx)(z, {
                        ...e,
                        documentProvider: function(e) {
                            switch ((0, P.a)(e)) {
                                case "company_filings":
                                    return "SEC";
                                case "earnings_calls":
                                case "investor_reports":
                                case "investor_presentations":
                                    return "Quartr";
                                case "news":
                                    return "Reuters";
                                case "financial_metrics":
                                case "market_pricing":
                                case "private_company_metrics":
                                case void 0:
                                    return
                            }
                        }(C.targetArguments ?? {})
                    }), u[8] = C.targetArguments, u[9] = c) : c = u[9], u[10] !== e || u[11] !== C || u[12] !== l || u[13] !== c ? (d = (0, i.jsxs)(i.Fragment, {
                        children: [" ", (0, i.jsx)(M, {
                            ...e,
                            source: C,
                            renderPill: l,
                            renderHoverCard: c
                        })]
                    }), u[10] = e, u[11] = C, u[12] = l, u[13] = c, u[14] = d) : d = u[14], d
                }
            };

        function V(e) {
            let t, a, l, r = (0, n.c)(6);
            r[0] !== e ? ({
                verifiedConnectorId: a,
                ...t
            } = e, r[0] = e, r[1] = t, r[2] = a) : (t = r[1], a = r[2]);
            let o = (null != a && Object.hasOwn(W, a) ? W[a] : void 0) ?? M;
            return r[3] !== o || r[4] !== t ? (l = (0, i.jsx)(o, {
                ...t
            }), r[3] = o, r[4] = t, r[5] = l) : l = r[5], l
        }
    }),
    JAYD: (function(e, t, a) {
        var i = a("Q840"),
            n = a("UKCO"),
            l = a("OiCI"),
            r = a("cLdu"),
            o = a("OWtl");
        let s = (0, i.d)(o.a, (e, t) => {
            let {
                get: a
            } = t, i = a(l.b);
            if (null == i) return !1;
            let o = a(r.h, {
                accountId: i,
                hostId: n._b,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !o.isPending && !o.isError && o.data?.some(t => {
                let {
                    appIds: a,
                    plugin: i
                } = t;
                return a?.includes(e) && i.installed && i.enabled && "AVAILABLE" === i.availability && null == i.disabledReason
            }) === !0
        });
        a.d(t, {}, {
            a: s
        })
    }),
    Nfif: (function(e, t, a) {
        a.d(t, {
            a: () => x
        });
        var i = a("ABep"),
            n = a("QosV"),
            l = a("on57"),
            r = a("UKCO"),
            o = a("zd8w"),
            s = a("oyxz"),
            c = a("BQbE"),
            d = a("bf6R"),
            u = a("E6P3"),
            m = a("zSQm"),
            f = a("WAdu"),
            p = a("a6Zv"),
            h = e => (0, i.jsxs)("svg", {
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
            g = a("UtIV");

        function x(e) {
            let t, a, x, C, v, b, A, _ = (0, n.c)(21),
                {
                    appId: I,
                    showName: w,
                    presentation: y
                } = e,
                T = void 0 !== w && w,
                E = (0, o.useContext)(f.a);
            _[0] !== I ? (t = [I], _[0] = I, _[1] = t) : t = _[1];
            let F = "restricted" !== E;
            _[2] !== t || _[3] !== F ? (a = {
                appIds: t,
                hostId: r._b,
                enabled: F
            }, _[2] = t, _[3] = F, _[4] = a) : a = _[4];
            let {
                data: N
            } = (0, c.c)(a), j = N?.find(e => e.id === I), k = (0, p.a)() ? j?.iconUrlDark ?? j?.iconUrl : j?.iconUrl, O = null == k ? void 0 : (0, m.b)(k);
            _[5] !== y ? (x = "file" === y ? (0, i.jsx)("span", {
                className: (0, l.b)(g.a.connectorIcon, g.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, i.jsx)(h, {
                    "aria-hidden": "true"
                })
            }) : (0, i.jsx)(d.Pi, {}), _[5] = y, _[6] = x) : x = _[6];
            let M = x;
            _[7] !== M || _[8] !== E || _[9] !== y || _[10] !== O ? (C = "restricted" !== E && null != O ? (0, i.jsx)(u.a, {
                className: (0, l.b)("shrink-0", "file" === y ? [g.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: O,
                fallback: M
            }, O) : M, _[7] = M, _[8] = E, _[9] = y, _[10] = O, _[11] = C) : C = _[11];
            let S = C;
            return _[12] !== S || _[13] !== y ? (v = "file" === y ? (0, i.jsx)("span", {
                className: "size-4 shrink-0",
                children: S
            }) : S, _[12] = S, _[13] = y, _[14] = v) : v = _[14], _[15] !== j?.name || _[16] !== T ? (b = T && (j?.name ?? (0, i.jsx)(s.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR"
            })), _[15] = j?.name, _[16] = T, _[17] = b) : b = _[17], _[18] !== v || _[19] !== b ? (A = (0, i.jsxs)(i.Fragment, {
                children: [v, b]
            }), _[18] = v, _[19] = b, _[20] = A) : A = _[20], A
        }
    }),
    Wp0b: (function(e, t, a) {
        var i = a("e5uX"),
            n = a("pkKj"),
            l = a("eAYH"),
            r = a("veIT"),
            o = a("yQey"),
            s = a("Ih4I"),
            c = a("IjiX"),
            d = a("aucC"),
            u = a("PVUo"),
            m = a("vRFM"),
            f = a("C00H"),
            p = a("xdtW"),
            h = a("GuRT"),
            g = a("bSZr"),
            x = a("WJj2"),
            C = a("gtAg"),
            v = a("MHNx"),
            b = a("ncRv"),
            A = a("JfHg"),
            _ = a("jplb"),
            I = a("txxN"),
            w = a("A3fR"),
            y = a("pOSz"),
            T = a("S8cT");
        let E = {
            newspaper: {
                12: h.a,
                16: g.a,
                20: x.a
            },
            "text-page": {
                12: w.a,
                16: y.a,
                20: T.a
            },
            "document-search": {
                12: c.a,
                16: d.a,
                20: u.a
            },
            "phone-wave": {
                12: C.a,
                16: v.a,
                20: b.a
            },
            presentation: {
                12: A.a,
                16: _.a,
                20: I.a
            },
            "bar-chart": {
                12: i.a,
                16: n.a,
                20: l.a
            },
            "live-signal": {
                12: m.a,
                16: f.a,
                20: p.a
            },
            building: {
                12: r.a,
                16: o.a,
                20: s.a
            }
        };
        a.d(t, {}, {
            a: E
        })
    })
};