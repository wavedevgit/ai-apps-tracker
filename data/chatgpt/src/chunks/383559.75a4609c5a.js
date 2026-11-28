export const __rspack_esm_ids = [383559];
export const __webpack_modules__ = {
    hs78: (function(a, b) {
        b.a = {
            palette: "palette-CKhGNn",
            fileHoverCard: "fileHoverCard-_SxMgK",
            filePill: "filePill-w54qyB",
            connectorIcon: "connectorIcon-XtxEBs",
            connectorFallback: "connectorFallback-pFpRwt",
            questionButton: "questionButton-LdbTc0"
        }
    }),
    HBEI: (function(a, b, c) {
        a.exports = c.p + "assets/bundled-data-mark-green-16.6aa8bae685.svg"
    }),
    bmU4: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("yGJW"),
            f = c("YTYy");
        let g = {
            pptx: d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": d.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        c.d(b, {}, {
            a: function(a) {
                let b = "bundleId" in a ? a.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === b || "Microsoft PowerPoint" === a.label || "PowerPoint" === a.label ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === b || "Microsoft Excel" === a.label || "Excel" === a.label ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === b || "Keynote" === a.label ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === b || "Numbers" === a.label ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === b || "libreoffice-calc.desktop" === b || "libreoffice-impress.desktop" === b || "LibreOffice" === a.label || "LibreOffice Calc" === a.label || "LibreOffice Impress" === a.label ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === a.id || "system-default" === a.id ? d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : d.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(a, b, c) {
                let {
                    importKind: d
                } = a;
                if ("pptx" !== d && "xlsx" !== d && "csv" !== d && "tsv" !== d || b?.artifactInteractionExcluded === !0 || b?.sharedConversationId != null) return null;
                let e = b?.target,
                    f = null != e && "fileId" in e ? e.fileId : void 0,
                    g = c?.libraryFileId ?? (null != e && "libraryFileId" in e ? e.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: d,
                    threadId: b?.conversationId ?? a.threadId,
                    turnId: a.originatingTurn?.turnId,
                    fileId: null != f && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(f) ? f : void 0,
                    libraryFileId: null != g && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(g) ? g : void 0
                }
            },
            c: function(a, b, c, h) {
                if (null == b) return;
                let i = b.threadId ?? void 0;
                (0, e.a)(a, d.CodexArtifactFileActionClicked, {
                    artifactKind: "pptx" === b.sourceFormat || "native-slides" === b.sourceFormat ? d.CodexArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION : d.CodexArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET,
                    backing: {
                        file: d.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_FILE,
                        "native-page": d.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_NATIVE_PAGE,
                        "artifact-session": d.CodexArtifactFileActionBacking.CODEX_ARTIFACT_FILE_ACTION_BACKING_ARTIFACT_SESSION
                    } [b.backing],
                    sourceFormat: g[b.sourceFormat],
                    surface: "output-card" === b.surface ? d.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_OUTPUT_CARD : d.CodexArtifactFileActionSurface.CODEX_ARTIFACT_FILE_ACTION_SURFACE_VIEWER,
                    action: {
                        download: d.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_DOWNLOAD,
                        export: d.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_EXPORT,
                        "open-in-app": d.CodexArtifactFileAction.CODEX_ARTIFACT_FILE_ACTION_OPEN_IN_APP
                    } [c],
                    targetFormat: null == h.format ? void 0 : g[h.format],
                    targetApp: h.app,
                    productExperience: (0, f.a)(a, i),
                    threadId: i,
                    turnId: b.turnId ?? void 0,
                    pageId: b.pageId,
                    fileId: b.fileId,
                    libraryFileId: b.libraryFileId
                })
            }
        })
    }),
    g3w6: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("IPUh"),
            h = c("lsky"),
            i = c("bf6R"),
            j = c("T1PX"),
            k = c("JcEh");
        c("V8uZ");
        let l = {
            duration: .2,
            ease: [.22, .61, .36, 1]
        };
        c.d(b, {}, {
            a: function(a) {
                var b;
                let c, m, n, o, p, q, r, s, t, u, v, w = (0, e.c)(28),
                    {
                        disabled: x,
                        ref: y,
                        displayText: z,
                        loading: A,
                        onActivate: B
                    } = a,
                    C = void 0 !== x && x,
                    D = (0, j.a)(),
                    E = C || void 0,
                    F = C ? "cursor-default" : "group/followup-citation cursor-interaction hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit";
                w[0] !== F ? (m = (0, f.b)("inline rounded-md align-baseline whitespace-nowrap text-inherit underline decoration-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-[2px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none", F), w[0] = F, w[1] = m) : m = w[1];
                let G = C ? -1 : 0,
                    H = C ? void 0 : B;
                w[2] !== C || w[3] !== B ? (n = a => {
                    C || "Enter" !== a.key && " " !== a.key || (a.preventDefault(), B())
                }, w[2] = C, w[3] = B, w[4] = n) : n = w[4], w[5] !== D ? (o = !D && {
                    opacity: 0,
                    width: 0
                }, w[5] = D, w[6] = o) : o = w[6], w[7] === Symbol.for("react.memo_cache_sentinel") ? (p = {
                    opacity: 1,
                    width: "1.5rem"
                }, w[7] = p) : p = w[7];
                let I = D ? void 0 : l;
                w[8] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, d.jsx)(i.l, {
                    className: "inline-block text-default transition-transform duration-basic ease-out group-hover/followup-citation:translate-x-0.5 group-hover/followup-citation:text-(color:--link-primary-text-color-hover)",
                    "data-rtl-flip": ""
                }), w[8] = q) : q = w[8], w[9] !== I || w[10] !== o ? (r = (0, d.jsx)(g.a.span, {
                    "aria-hidden": "true",
                    className: "inline-flex items-center overflow-hidden align-middle",
                    initial: o,
                    animate: p,
                    transition: I,
                    children: q
                }), w[9] = I, w[10] = o, w[11] = r) : r = w[11];
                let J = void 0 !== A && A && "loading-shimmer-pure-text";
                return w[12] !== J ? (s = (0, f.b)("whitespace-normal group-hover/followup-citation:text-(color:--link-primary-text-color-hover)", J), w[12] = J, w[13] = s) : s = w[13], w[14] !== z ? (t = (0, k.a)((b = z, (c = a => a.map(a => ("strong" === a.type || "em" === a.type) && null != a.tokens ? {
                    ...a,
                    tokens: c(a.tokens)
                } : "text" === a.type || "escape" === a.type ? a : {
                    type: "text",
                    raw: a.raw,
                    text: a.raw
                }))(h.a.lexInline(b))), {}), w[14] = z, w[15] = t) : t = w[15], w[16] !== s || w[17] !== t ? (u = (0, d.jsx)("span", {
                    className: s,
                    children: t
                }), w[16] = s, w[17] = t, w[18] = u) : u = w[18], w[19] !== y || w[20] !== r || w[21] !== u || w[22] !== E || w[23] !== m || w[24] !== G || w[25] !== H || w[26] !== n ? (v = (0, d.jsxs)("span", {
                    ref: y,
                    "aria-disabled": E,
                    className: m,
                    role: "button",
                    tabIndex: G,
                    onClick: H,
                    onKeyDown: n,
                    children: [r, u]
                }), w[19] = y, w[20] = r, w[21] = u, w[22] = E, w[23] = m, w[24] = G, w[25] = H, w[26] = n, w[27] = v) : v = w[27], v
            }
        })
    }),
    ts3W: (function(a, b, c) {
        var d = c("CBsD"),
            e = c("LulU"),
            f = c("xygx");
        c.d(b, {}, {
            a: function() {
                return "u" > typeof ClipboardItem && "function" == typeof navigator.clipboard?.write
            },
            b: function(a) {
                let {
                    conversationId: b,
                    environmentId: c,
                    filename: g,
                    hostId: h,
                    imageAssetResolver: i,
                    onCopySucceeded: j,
                    onFailure: k,
                    src: l
                } = a, m = (0, f.f)({
                    conversationId: b,
                    environmentId: c,
                    absoluteImageFilePath: (0, d.b)(l),
                    hostId: h,
                    imageAssetResolver: i,
                    src: l
                }).then(async a => {
                    if (null == a) throw Error("Could not read image for clipboard copy");
                    let b = a instanceof Blob ? a : (0, e.a)(a, g).file;
                    if ("image/png" === b.type) return b;
                    let c = await createImageBitmap(b),
                        d = document.createElement("canvas");
                    d.width = c.width, d.height = c.height;
                    let f = d.getContext("2d");
                    if (null == f) throw c.close(), Error("Could not create image clipboard canvas");
                    f.drawImage(c, 0, 0), c.close();
                    let h = await new Promise(a => {
                        d.toBlob(a, "image/png")
                    });
                    if (null == h) throw Error("Could not encode image for clipboard copy");
                    return h
                });
                m.catch(() => void 0);
                try {
                    navigator.clipboard.write([new ClipboardItem({
                        "image/png": m
                    })]).then(j, k)
                } catch {
                    k()
                }
            }
        })
    }),
    YeQK: (function(a, b, c) {
        c.r(b);
        var d = c("iRMi"),
            e = c("DBCl"),
            f = c("Qgfj"),
            g = c("DD2M"),
            h = c("Wefw"),
            i = c("tl5a"),
            j = c("Ow2S"),
            k = c("jAnS"),
            l = c("TSib"),
            m = c("jEN2"),
            n = c("Eklu"),
            o = c("uIyc"),
            p = c("qEnx"),
            q = c("SGsN"),
            r = c("Igf5"),
            s = c("XYHU"),
            t = c("ddzD"),
            u = c("urzV"),
            v = c("ylNI"),
            w = c("CBsD"),
            x = c("Q4dB"),
            y = c("Sd8U"),
            z = c("sbaW"),
            A = c("ndjw"),
            B = c("b38k"),
            C = c("gTKF"),
            D = c("LulU"),
            E = c("zHp1"),
            F = c("aepO"),
            G = c("bnxy"),
            H = c("ts3W"),
            I = c("xygx");
        c.d(b, {}, {
            getGeneratedImageContextMenuItems: function(a, b) {
                let {
                    chatGptConversationId: c,
                    displaySrc: J,
                    hostId: K,
                    image: L,
                    imageAssetResolver: M,
                    intl: N,
                    onAddToChat: O,
                    onAddedToChat: P,
                    onDownload: Q,
                    onDownloadClick: R,
                    onDownloadInitiated: S,
                    onDownloaded: T,
                    onOpenedInNewTab: U
                } = b, V = (0, y.m)(a), W = K ?? a.get(z.threadHostId$), X = a.get(C.threadExecutorTargetByThread$, null == V ? null : {
                    kind: "app-server",
                    conversationId: V
                }), Y = X?.hostId === W ? X.environmentId : void 0, Z = (0, w.b)(L.src), $ = function(a, b, c) {
                    if (!("kind" in a)) return (0, I.d)(a);
                    let d = (a.filename ?? (null == b ? a.alt.trim() : (0, G.j)(b))) || "image";
                    return /\.[a-z\d]+$/i.test(d) ? d : `${d}.${(0,u.c)(a.src)??(0,u.c)(c)??"png"}`
                }(L, Z, J), _ = (0, t.a)({
                    isAnimated: "isAnimated" in L && !0 === L.isAnimated
                }), aa = [];
                aa.push({
                    id: "open-image-in-new-tab",
                    message: (0, f.e)({
                        id: "codex.localConversation.image.contextMenu.openInNewTab",
                        defaultMessage: "Open image in new tab"
                    }),
                    onSelect: () => {
                        let b = () => {
                            a.get(q.f).danger(N.formatMessage({
                                id: "codex.localConversation.image.contextMenu.openFailure",
                                defaultMessage: "Could not open image"
                            }), {
                                errorAnalytics: {
                                    toastId: "imageContextMenu.openFailure"
                                }
                            })
                        };
                        (async () => {
                            let c = null == Z && (!("kind" in L) || /^https?:/i.test(L.src)) ? L.src : await (0, I.e)({
                                conversationId: V,
                                environmentId: Y,
                                absoluteImageFilePath: Z,
                                hostId: W,
                                imageAssetResolver: M,
                                queryClient: a.queryClient,
                                src: L.src
                            });
                            null == c ? b() : (0, v.openImagePreview)(a, {
                                alt: L.alt,
                                attachmentSrc: "kind" in L || null != Z ? c : L.src,
                                imageAssetResolver: M,
                                isAnimated: _.isAnimated,
                                onDownloadInitiated: null == S ? void 0 : () => S("lightbox"),
                                openInEditor: !0,
                                readOnly: !0,
                                ...!("kind" in L) && null == Z ? {
                                    src: J,
                                    title: L.tabTitle,
                                    generatedImages: [L],
                                    generatedImagesSource: "provided",
                                    initialImageId: L.id
                                } : {
                                    src: c,
                                    downloadSrc: c,
                                    title: "kind" in L ? L.alt : L.tabTitle
                                }
                            }) && U?.()
                        })().catch(b)
                    }
                });
                let ab = [L.src, J].find(e.ri);
                null != ab && aa.push({
                    id: "copy-image-address",
                    message: (0, f.e)({
                        id: "codex.localConversation.image.contextMenu.copyAddress",
                        defaultMessage: "Copy image address"
                    }),
                    onSelect: () => {
                        (0, F.d)(ab)
                    }
                }), _.canSelect && aa.push({
                    id: "add-to-chat",
                    message: (0, f.e)({
                        id: "codex.localConversation.generatedImage.contextMenu.addToChat",
                        defaultMessage: "Add to chat"
                    }),
                    onSelect: () => {
                        if (O?.() === !1) return;
                        let b = () => {
                            a.get(q.f).danger(N.formatMessage({
                                id: "codex.localConversation.imagePlayground.selectFailed",
                                defaultMessage: "Could not select image"
                            }), {
                                errorAnalytics: {
                                    toastId: "codex.localConversation.imagePlayground.selectFailed"
                                }
                            })
                        };
                        (0, m.d)();
                        let d = c ?? ("chatgpt-thread" === a.value.routeKind ? a.value.conversationId : void 0);
                        null != d ? (0, I.e)({
                            conversationId: V,
                            environmentId: Y,
                            absoluteImageFilePath: Z,
                            hostId: W,
                            imageAssetResolver: M,
                            queryClient: a.queryClient,
                            src: L.src
                        }).then(async c => {
                            if (null == c) return void b();
                            let {
                                file: e
                            } = (0, D.a)(c, $);
                            await (0, j.gb)(a, d, [e], {
                                isTemporaryChat: "chatgpt-thread" === a.value.routeKind && a.value.conversationId === d && (0, k.i)(a.value.search ?? "")
                            }) && P?.()
                        }).catch(b) : "kind" in L ? function(a, b) {
                            let {
                                absoluteImageFilePath: c,
                                displaySrc: d,
                                filename: e,
                                hostId: f,
                                image: h,
                                imageAssetResolver: j,
                                intl: k,
                                onFailure: m,
                                onAddedToChat: r
                            } = b, s = h.src.startsWith("data:image/") ? h.src : void 0, t = (0, y.m)(a), u = f;
                            if (null != t ? u = a.get(i.xb, t) : "other" !== a.value.routeKind && (u = a.get(z.threadHostId$)), null != t) {
                                let b = a.get(n.a, ["conversation", t])?.model ?? a.get(n.d, ["conversation", t])?.model ?? a.get(i.W, t)?.settings.model,
                                    c = a.queryClient.getQueriesData({
                                        queryKey: [...x.a, u]
                                    }).flatMap(a => {
                                        let [, b] = a;
                                        return b?.data ?? []
                                    }).find(a => {
                                        let {
                                            model: c
                                        } = a;
                                        return c === b
                                    });
                                if (c?.inputModalities.includes("image") === !1) return a.get(q.f).danger(k.formatMessage({
                                    id: "composer.imageInputsUnsupported",
                                    defaultMessage: "This model does not support image inputs. Try a different model"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.imageInputsUnsupported"
                                    }
                                })
                            }
                            let v = (0, g.a)(),
                                w = "cloud" === a.get(l.w) || null == s;
                            if ((0, l.Fb)(a, a => {
                                    a.imageAttachments.push({
                                        filename: e,
                                        id: v,
                                        localPath: f === u ? c ?? void 0 : void 0,
                                        previewSrc: s ?? d,
                                        src: s ?? h.src,
                                        uploadStatus: w ? "uploading" : "idle"
                                    })
                                }), !w) return r?.();
                            let A = (0, o.a)(a, {
                                    hostId: u,
                                    id: v
                                }),
                                B = () => {
                                    A.isPending() && (A.fail(), (0, l.Fb)(a, a => {
                                        a.imageAttachments = a.imageAttachments.filter(a => a.id !== v), a.imageCommentDrafts = a.imageCommentDrafts.filter(a => a.attachmentId !== v)
                                    }), m())
                                };
                            (async () => {
                                let b = s ?? await (0, I.e)({
                                    conversationId: t,
                                    absoluteImageFilePath: c,
                                    hostId: f,
                                    imageAssetResolver: j,
                                    queryClient: a.queryClient,
                                    src: h.src
                                });
                                if (!A.isPending()) return;
                                if (null == b) return void B();
                                let d = "cloud" === a.get(l.w);
                                if ((0, l.Fb)(a, a => {
                                        let c = a.imageAttachments.find(a => a.id === v);
                                        null != c && (c.src = b, c.previewSrc = b, c.uploadSrc = b, c.uploadStatus = d ? "uploading" : "idle")
                                    }), d) {
                                    let c = await (0, p.a)({
                                        dataUrl: b,
                                        filename: e
                                    });
                                    if (!A.isPending()) return;
                                    (0, l.Fb)(a, a => {
                                        let b = a.imageAttachments.find(a => a.id === v);
                                        null != b && Object.assign(b, c)
                                    })
                                }
                                A.succeed(), r?.()
                            })().catch(B)
                        }(a, {
                            absoluteImageFilePath: Z,
                            displaySrc: J,
                            filename: $,
                            hostId: W,
                            image: L,
                            imageAssetResolver: M,
                            intl: N,
                            onFailure: b,
                            onAddedToChat: P
                        }) : (0, I.g)(a, {
                            displaySrc: J,
                            hostId: W,
                            image: L,
                            imageAssetResolver: M,
                            onFailure: b,
                            queryClient: a.queryClient
                        }).then(a => {
                            a && P?.()
                        }).catch(b)
                    }
                }), _.canCopy && (0, H.a)() && aa.push({
                    id: "copy-image",
                    message: (0, f.e)({
                        id: "codex.localConversation.generatedImage.contextMenu.copyImage",
                        defaultMessage: "Copy image"
                    }),
                    onSelect: () => {
                        (0, h.a)(a, {
                            action: d.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
                            surface: d.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                        }), (0, H.b)({
                            conversationId: V,
                            environmentId: Y,
                            filename: $,
                            hostId: W,
                            imageAssetResolver: M,
                            onFailure: () => {
                                a.get(q.f).danger(N.formatMessage({
                                    id: "codex.localConversation.image.contextMenu.copyFailure",
                                    defaultMessage: "Could not copy image"
                                }), {
                                    errorAnalytics: {
                                        toastId: "codex.localConversation.image.contextMenu.copyFailure"
                                    }
                                })
                            },
                            src: L.src
                        })
                    }
                });
                let ac = null == Z ? null : a.get(A.g, W);
                return null != Z && ac?.kind === "local" && ac.id === W && aa.push({
                    id: "open-in-file-manager",
                    message: (0, B.a)(a.get(s.d)),
                    onSelect: () => {
                        (0, r.b)({
                            cwd: null,
                            hostId: W,
                            path: Z,
                            target: "fileManager"
                        })
                    }
                }), aa.push({
                    id: "download-a-copy",
                    message: _.downloadCopyLabel,
                    onSelect: () => {
                        (0, h.a)(a, {
                            action: d.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
                            surface: d.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                        });
                        let b = () => {
                            a.get(q.f).danger(N.formatMessage({
                                id: "imageSidePanel.downloadFailure",
                                defaultMessage: "Could not download image"
                            }), {
                                errorAnalytics: {
                                    toastId: "imageSidePanel.downloadFailure"
                                }
                            })
                        };
                        if (null != Q) return void Q().catch(b);
                        let c = "sourceImage" in L ? L.sourceImage : void 0;
                        S?.("context-menu"), R?.(), (async () => {
                            let a = L.src;
                            (null != Z || (0, E.i)(L.src)) && (a = await (0, I.e)({
                                conversationId: V,
                                environmentId: Y,
                                absoluteImageFilePath: Z,
                                hostId: W,
                                imageAssetResolver: M,
                                src: L.src
                            })), null != a && await (0, u.d)({
                                downloadSrc: a,
                                onDownloaded: T,
                                suggestedFilename: (0, u.b)(N, _.downloadExtension ?? (0, u.c)(a) ?? (0, u.c)(L.src) ?? "png", {
                                    title: c?.chatGptDisplayTitle,
                                    gifSpeed: c?.gifPlayback?.speed
                                })
                            }) || b()
                        })().catch(b)
                    }
                }), aa
            }
        })
    }),
    d8pY: (function(a, b, c) {
        function d(a) {
            return null == a.width || null == a.height || a.width <= 0 || a.height <= 0 ? null : a.width / a.height
        }
        c.d(b, {}, {
            a: d,
            b: function(a) {
                let {
                    containerWidthPx: b,
                    imageAspectRatios: c,
                    minimumSlotCount: d = 0
                } = a, e = c.length, f = 1 === Math.max(e, d) ? c[0] : null, g = 0;
                null != b && (g = null != f ? b / f : Math.max((b - 24) / 4, 0));
                let h = c.reduce((a, b) => a + b * g, 0) + 8 * Math.max(e - 1, 0);
                if (null != f || null == b || h <= b) return {
                    heightPx: g,
                    aspectRatio: "natural",
                    maxStartIndex: 0,
                    overflowCount: 0,
                    visibleCount: e
                };
                let i = Math.min(e, 4),
                    j = Math.max(e - i, 0);
                return {
                    heightPx: g,
                    aspectRatio: "square",
                    maxStartIndex: j,
                    overflowCount: j,
                    visibleCount: i
                }
            },
            c: function(a) {
                let {
                    images: b,
                    compact: c = !1,
                    layout: e = "carousel",
                    pendingImageCount: f = 0,
                    selectedImageId: g,
                    imageAspectRatios: h = {}
                } = a, i = "thumbnails" === e && b.length + f > 1, j = Math.max(b.findIndex(a => a.id === g), 0), k = i || 1 === b.length ? b[j] : null, l = null != k && (i || 0 === f) ? h[k.id] ?? d(k) ?? 1 : null, m = null;
                return null != l && !c && (m = "max-w-[25rem]", l >= 2 ? m = "max-w-(--thread-content-max-width)" : l >= 1.01 && (m = "max-w-[30rem]")), {
                    showThumbnails: i,
                    selectedImageIndex: j,
                    singleImage: k,
                    singleImageAspectRatio: l,
                    singleImageMaxWidthClassName: m,
                    imageAspectRatios: i ? [l ?? 1] : [...b.map(a => h[a.id] ?? d(a) ?? 1), ...Array.from({
                        length: f
                    }, () => 1)],
                    minimumSlotCount: 4 * (f > 0 && !i)
                }
            }
        })
    }),
    hHaO: (function(a, b, c) {
        c.d(b, {
            a: () => m
        });
        var d = c("ABep"),
            e = c("oyxz"),
            f = c("Bbed"),
            g = c("QosV"),
            h = c("on57"),
            i = c("r21w"),
            j = c("nsuH"),
            k = c("d8pY");

        function l(a) {
            let b, c, f, l, m, n, o, p, q, r, s, t, u, v = (0, g.c)(26),
                [w, x] = (0, j.c)();
            return v[0] !== a || v[1] !== w || v[2] !== x ? (c = (0, k.c)(a), {
                heightPx: b
            } = (0, k.b)({
                containerWidthPx: null == x ? null : Math.floor(x),
                imageAspectRatios: c.imageAspectRatios,
                minimumSlotCount: c.minimumSlotCount
            }), m = !0, n = c.showThumbnails ? "flex min-w-0 items-start gap-2" : void 0, f = w, l = (0, h.b)("overflow-hidden", c.showThumbnails && "min-w-0 flex-1", null != c.singleImageAspectRatio && "w-full", c.singleImageMaxWidthClassName), v[0] = a, v[1] = w, v[2] = x, v[3] = b, v[4] = c, v[5] = f, v[6] = l, v[7] = m, v[8] = n) : (b = v[3], c = v[4], f = v[5], l = v[6], m = v[7], n = v[8]), v[9] !== b ? (o = {
                height: b
            }, v[9] = b, v[10] = o) : o = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, d.jsx)(i.a, {
                className: "h-full rounded-2xl"
            }), v[11] = p) : p = v[11], v[12] !== f || v[13] !== l || v[14] !== o ? (q = (0, d.jsx)("div", {
                ref: f,
                className: l,
                style: o,
                children: p
            }), v[12] = f, v[13] = l, v[14] = o, v[15] = q) : q = v[15], v[16] !== c.showThumbnails ? (r = c.showThumbnails ? (0, d.jsx)("div", {
                className: "w-16 shrink-0"
            }) : null, v[16] = c.showThumbnails, v[17] = r) : r = v[17], v[18] !== m || v[19] !== n || v[20] !== q || v[21] !== r ? (s = (0, d.jsxs)("div", {
                "aria-hidden": m,
                className: n,
                children: [q, r]
            }), v[18] = m, v[19] = n, v[20] = q, v[21] = r, v[22] = s) : s = v[22], v[23] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, d.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: (0, d.jsx)(e.a, {
                    id: "generatedImageGallery.loading",
                    defaultMessage: "Loading images\u2026"
                })
            }), v[23] = t) : t = v[23], v[24] !== s ? (u = (0, d.jsxs)(d.Fragment, {
                children: [s, t]
            }), v[24] = s, v[25] = u) : u = v[25], u
        }
        let m = (0, f.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(843292), c.e(745756), c.e(221469), c.e(301030), c.e(953533), c.e(778901), c.e(587936), c.e(848904), c.e(452048), c.e(684598), c.e(681678), c.e(5636), c.e(50536), c.e(425559), c.e(896221)]).then(() => c("b4e9"))).GeneratedImageGallery, {
            fallback: a => (0, d.jsx)(l, {
                ...a
            }),
            errorFallback: (0, d.jsx)("span", {
                role: "alert",
                children: (0, d.jsx)(e.a, {
                    id: "generatedImageGallery.loadError",
                    defaultMessage: "Images could not load. Reload to try again."
                })
            })
        })
    }),
    vYmP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("ZtSy"),
            i = c("hs78");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = (0, e.c)(43);
                z[0] !== a ? ({
                    ref: m,
                    ActionWrapper: o,
                    ariaLabel: c,
                    icon: j,
                    isActive: p,
                    isTerminalInline: k,
                    label: l,
                    supportingCountLabel: n,
                    testId: r,
                    variant: q,
                    ...b
                } = a, z[0] = a, z[1] = b, z[2] = c, z[3] = j, z[4] = k, z[5] = l, z[6] = m, z[7] = n, z[8] = o, z[9] = p, z[10] = q, z[11] = r) : (b = z[1], c = z[2], j = z[3], k = z[4], l = z[5], m = z[6], n = z[7], o = z[8], p = z[9], q = z[10], r = z[11]);
                let A = void 0 === o ? g.Fragment : o,
                    B = void 0 !== p && p,
                    C = "file" === (void 0 === q ? "default" : q),
                    D = "disabled" in b && b.disabled,
                    E = D ? "cursor-default" : "group cursor-interaction",
                    F = !C && !D && "hover:bg-secondary-soft-hover hover:text-default!",
                    G = C && i.a.palette,
                    H = C && i.a.filePill;
                z[12] !== B || z[13] !== C || z[14] !== E || z[15] !== F || z[16] !== G || z[17] !== H ? (s = (0, f.b)("min-w-0 no-underline!", E, F, G, H, C ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, f.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", B ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), z[12] = B, z[13] = C, z[14] = E, z[15] = F, z[16] = G, z[17] = H, z[18] = s) : s = z[18];
                let I = s;
                z[19] !== C || z[20] !== n ? (t = null == n ? null : (0, d.jsx)("span", {
                    className: (0, f.b)("text-inherit", C ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: n
                }), z[19] = C, z[20] = n, z[21] = t) : t = z[21];
                let J = t;
                z[22] !== j || z[23] !== C || z[24] !== l || z[25] !== J ? (u = C ? (0, d.jsxs)(d.Fragment, {
                    children: [j, (0, d.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: l
                    }), J]
                }) : (0, d.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, d.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [j, (0, d.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: l
                        })]
                    }), J]
                }), z[22] = j, z[23] = C, z[24] = l, z[25] = J, z[26] = u) : u = z[26];
                let K = u,
                    L = C && "relative",
                    M = C && k ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return z[27] !== L || z[28] !== M ? (v = (0, f.b)("ms-1 inline-flex max-w-full min-w-0 items-center font-sans select-none", L, M), z[27] = L, z[28] = M, z[29] = v) : v = z[29], z[30] !== b || z[31] !== c || z[32] !== I || z[33] !== K || z[34] !== r ? (w = "href" in b ? (0, d.jsx)(h.a, {
                    className: I,
                    href: b.href,
                    initiator: "markdown_link_click",
                    "data-testid": r,
                    requiresConfirmation: b.requiresConfirmation,
                    showHoverActions: b.showHoverActions,
                    tooltipContent: b.tooltipContent,
                    "aria-label": c,
                    onActivate: b.onActivate,
                    onClick: b.onClick,
                    onAuxClick: b.onAuxClick,
                    onUnmodifiedClick: b.onUnmodifiedClick,
                    children: K
                }) : (0, d.jsx)("button", {
                    className: I,
                    "aria-label": c,
                    "data-testid": r,
                    disabled: b.disabled,
                    type: "button",
                    onClick: b.onClick,
                    children: K
                }), z[30] = b, z[31] = c, z[32] = I, z[33] = K, z[34] = r, z[35] = w) : w = z[35], z[36] !== A || z[37] !== w ? (x = (0, d.jsx)(A, {
                    children: w
                }), z[36] = A, z[37] = w, z[38] = x) : x = z[38], z[39] !== m || z[40] !== v || z[41] !== x ? (y = (0, d.jsx)("span", {
                    ref: m,
                    className: v,
                    children: x
                }), z[39] = m, z[40] = v, z[41] = x, z[42] = y) : y = z[42], y
            }
        })
    }),
    jsoh: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Cslg"),
            f = c("tSEg");
        let g = (0, d.d)(f.a, (a, b) => {
            let {
                get: c,
                scope: d
            } = b;
            switch (a) {
                case "thread":
                    return null != (0, f.h)(d.value);
                case "recipient":
                    return c(e.i) && null != c(e.f) && null != c(e.k);
                case "unavailable":
                    return !1
            }
        });
        c.d(b, {}, {
            a: g
        })
    }),
    p8Cc: (function(a, b, c) {
        var d = c("lAQI");
        let e = {
                news: "newspaper",
                company_filings: "text-page",
                investor_reports: "document-search",
                earnings_calls: "phone-wave",
                investor_presentations: "presentation",
                financial_metrics: "bar-chart",
                market_pricing: "live-signal",
                private_company_metrics: "building"
            },
            f = d.Q([d.F({
                pitchbook: d.F({
                    dataset: d.p(["companies", "investors", "funds"]),
                    provider_entity_id: d.L().min(1)
                })
            }), d.F({
                profile: d.F({
                    provider: d.z("crunchbase"),
                    entity_type: d.p(["organization", "person"]),
                    entity_id: d.L().min(1)
                })
            })]);

        function g(a) {
            for (let b of [a.chunk_id, a.source_id, a.document_id]) {
                if ("string" != typeof b) continue;
                let a = /^findata:news:v1:[0-9a-f]{64}:[0-9a-f]{64}:[0-9]{1,4}$/.test(b) ? "news" : /^findata:v2:([a-z_]+):(?:source:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+|chunk:[A-Za-z0-9_-]+:[A-Za-z0-9_-]+:[0-9]+)$/.exec(b)?.[1] ?? /^findata:([a-z_]+):(?:source:[1-9][0-9]*|chunk:[1-9][0-9]*:[0-9]+)$/.exec(b)?.[1];
                if (null != a && Object.hasOwn(e, a)) return a
            }
            return f.safeParse(a).success ? "private_company_metrics" : void 0
        }
        c.d(b, {}, {
            a: g,
            b: function(a) {
                let b = g(a);
                return null == b ? void 0 : e[b]
            }
        })
    }),
    ePaQ: (function(a, b, c) {
        c.d(b, {
            a: () => q
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("kSHG"),
            g = c("dacn"),
            h = c("ZDhX"),
            i = c("on57"),
            j = c("zd8w"),
            k = c("KxMp"),
            l = c("bf6R"),
            m = c("zSQm"),
            n = c("WAdu");

        function o(a) {
            let b, c, f, g, h, i, j, k = (0, e.c)(23),
                {
                    title: l,
                    subtitle: m,
                    body: n,
                    scrollBody: o,
                    branding: p,
                    followUp: q,
                    actions: r
                } = a,
                s = void 0 !== o && o;
            k[0] !== n ? (b = n?.includes("\n"), k[0] = n, k[1] = b) : b = k[1];
            let t = b,
                u = s ? -1 : void 0;
            return k[2] !== p ? (c = (0, d.jsx)("div", {
                className: "branding-xlBboz",
                children: p
            }), k[2] = p, k[3] = c) : c = k[3], k[4] !== l ? (f = (0, d.jsx)("div", {
                className: "title-M06RHU",
                children: l
            }), k[4] = l, k[5] = f) : f = k[5], k[6] !== m ? (g = null != m && (0, d.jsx)("div", {
                className: "subtitle-gArrij",
                children: m
            }), k[6] = m, k[7] = g) : g = k[7], k[8] !== n || k[9] !== t || k[10] !== s || k[11] !== u || k[12] !== l ? (h = null != n && (0, d.jsx)("div", {
                className: t || s ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": l,
                tabIndex: t ? 0 : u,
                children: n
            }), k[8] = n, k[9] = t, k[10] = s, k[11] = u, k[12] = l, k[13] = h) : h = k[13], k[14] !== q ? (i = null != q && (0, d.jsx)("div", {
                className: "followUp-otVo0x",
                children: q
            }), k[14] = q, k[15] = i) : i = k[15], k[16] !== r || k[17] !== c || k[18] !== f || k[19] !== g || k[20] !== h || k[21] !== i ? (j = (0, d.jsxs)("div", {
                className: "content-cuuiWn",
                children: [c, f, g, h, r, i]
            }), k[16] = r, k[17] = c, k[18] = f, k[19] = g, k[20] = h, k[21] = i, k[22] = j) : j = k[22], j
        }
        var p = c("Nfif");

        function q(a) {
            let b, c, f, i, k = (0, e.c)(32),
                {
                    children: l,
                    disabled: m,
                    metadata: n,
                    sourceAppId: o,
                    followUp: p,
                    keepOpen: q,
                    openOnClick: t,
                    closeOnTriggerClick: u,
                    presentation: v,
                    renderHoverCard: w
                } = a,
                x = void 0 === u || u,
                [y, z] = (0, j.useState)(!1);
            if (null == n.hoverCard && null == w && "file" !== v && !t && x) {
                let a, b, c = !!q || void 0;
                return k[0] !== l ? (a = (0, d.jsx)("span", {
                    className: "inline-flex max-w-full",
                    children: l
                }), k[0] = l, k[1] = a) : a = k[1], k[2] !== m || k[3] !== n.title || k[4] !== c || k[5] !== a ? (b = (0, d.jsx)(h.a, {
                    content: n.title,
                    disabled: m,
                    forceOpen: c,
                    children: a
                }), k[2] = m, k[3] = n.title, k[4] = c, k[5] = a, k[6] = b) : b = k[6], b
            }
            let A = n.title;
            if (null != w) {
                let a;
                k[7] !== p || k[8] !== n || k[9] !== v || k[10] !== w || k[11] !== o ? (a = w({
                    metadata: n,
                    sourceAppId: o,
                    followUp: p,
                    presentation: v
                }), k[7] = p, k[8] = n, k[9] = v, k[10] = w, k[11] = o, k[12] = a) : a = k[12], A = a
            } else if (null != n.hoverCard) {
                let a;
                k[13] !== p || k[14] !== n || k[15] !== v || k[16] !== o ? (a = (0, d.jsx)(s, {
                    metadata: n,
                    sourceAppId: o,
                    followUp: p,
                    presentation: v
                }), k[13] = p, k[14] = n, k[15] = v, k[16] = o, k[17] = a) : a = k[17], A = a
            }
            let B = !m && (q || y);
            k[18] === Symbol.for("react.memo_cache_sentinel") ? (b = () => z(!0), k[18] = b) : b = k[18], k[19] !== l || k[20] !== x || k[21] !== t ? (c = (0, d.jsx)(r, {
                openOnClick: t,
                closeOnTriggerClick: x,
                onOpen: b,
                children: l
            }), k[19] = l, k[20] = x, k[21] = t, k[22] = c) : c = k[22];
            let C = "file" === v ? 344 : 320,
                D = "file" === v ? 10 : 6;
            return k[23] !== A || k[24] !== n.title || k[25] !== C || k[26] !== D ? (f = (0, d.jsx)(g.a.Content, {
                "aria-label": n.title,
                minWidth: "auto",
                maxWidth: C,
                align: "start",
                side: "bottom",
                sideOffset: D,
                children: A
            }), k[23] = A, k[24] = n.title, k[25] = C, k[26] = D, k[27] = f) : f = k[27], k[28] !== B || k[29] !== c || k[30] !== f ? (i = (0, d.jsxs)(g.a, {
                showOnHover: !0,
                open: B,
                onOpenChange: z,
                children: [c, f]
            }), k[28] = B, k[29] = c, k[30] = f, k[31] = i) : i = k[31], i
        }

        function r(a) {
            let b, c, f, h = (0, e.c)(10),
                {
                    children: i,
                    openOnClick: j,
                    closeOnTriggerClick: k,
                    onOpen: l
                } = a,
                {
                    close: m
                } = (0, g.b)();
            return h[0] !== m || h[1] !== k || h[2] !== l || h[3] !== j ? (b = a => {
                j && k || (a.preventDefault(), j ? l() : m())
            }, h[0] = m, h[1] = k, h[2] = l, h[3] = j, h[4] = b) : b = h[4], h[5] !== i ? (c = (0, d.jsx)("span", {
                className: "group/mcp-source-citation inline-flex max-w-full",
                tabIndex: -1,
                children: i
            }), h[5] = i, h[6] = c) : c = h[6], h[7] !== b || h[8] !== c ? (f = (0, d.jsx)(g.a.Trigger, {
                onClick: b,
                children: c
            }), h[7] = b, h[8] = c, h[9] = f) : f = h[9], f
        }

        function s(a) {
            let b, c, g, h, q, r, s, t, u = (0, e.c)(53),
                {
                    metadata: v,
                    sourceAppId: w,
                    followUp: x,
                    presentation: y
                } = a,
                z = (0, j.useContext)(n.a);
            if (u[0] !== v.icons?.[0]) {
                let {
                    data: a
                } = f.v.safeParse(v.icons?.[0]), c = a?.src;
                b = null == c ? void 0 : (0, m.b)(c), u[0] = v.icons?.[0], u[1] = b
            } else b = u[1];
            let A = b;
            u[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(l.aj, {}), u[2] = c) : c = u[2];
            let B = c;
            if ("restricted" !== z) {
                if (null != v.url) {
                    let a;
                    u[3] !== v.url ? (a = (0, d.jsx)(k.a, {
                        href: v.url,
                        className: "size-4"
                    }), u[3] = v.url, u[4] = a) : a = u[4], B = a
                } else if (null != A) {
                    let a, b, c = null == w && "dark:brightness-0 dark:invert";
                    u[5] !== c ? (a = (0, i.b)("size-4 shrink-0 rounded-sm object-contain", c), u[5] = c, u[6] = a) : a = u[6], u[7] !== A || u[8] !== a ? (b = (0, d.jsx)("img", {
                        alt: "",
                        className: a,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: A
                    }), u[7] = A, u[8] = a, u[9] = b) : b = u[9], B = b
                }
            }
            if ("file" === y && null != w) {
                let a, b, c = v.hoverCard?.title ?? v.title,
                    e = v.hoverCard?.subtitle,
                    f = v.hoverCard?.body;
                return u[10] !== w ? (a = (0, d.jsx)(p.a, {
                    appId: w,
                    showName: !0,
                    presentation: "file"
                }), u[10] = w, u[11] = a) : a = u[11], u[12] !== x || u[13] !== c || u[14] !== e || u[15] !== f || u[16] !== a ? (b = (0, d.jsx)(o, {
                    title: c,
                    subtitle: e,
                    body: f,
                    branding: a,
                    followUp: x
                }), u[12] = x, u[13] = c, u[14] = e, u[15] = f, u[16] = a, u[17] = b) : b = u[17], b
            }
            if (null != w) {
                let a, b, c, e, f, g;
                u[18] !== w ? (a = (0, d.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, d.jsx)(p.a, {
                        appId: w,
                        showName: !0
                    })
                }), u[18] = w, u[19] = a) : a = u[19];
                let h = v.hoverCard?.title ?? v.title;
                return u[20] !== h ? (b = (0, d.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: h
                }), u[20] = h, u[21] = b) : b = u[21], u[22] !== v.hoverCard ? (c = v.hoverCard?.subtitle != null && (0, d.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: v.hoverCard.subtitle
                }), u[22] = v.hoverCard, u[23] = c) : c = u[23], u[24] !== v.hoverCard || u[25] !== v.title ? (e = v.hoverCard?.body != null && (0, d.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": v.title,
                    tabIndex: 0,
                    children: v.hoverCard.body
                }), u[24] = v.hoverCard, u[25] = v.title, u[26] = e) : e = u[26], u[27] !== x ? (f = null != x && (0, d.jsx)("div", {
                    children: x
                }), u[27] = x, u[28] = f) : f = u[28], u[29] !== a || u[30] !== b || u[31] !== c || u[32] !== e || u[33] !== f ? (g = (0, d.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [a, b, c, e, f]
                }), u[29] = a, u[30] = b, u[31] = c, u[32] = e, u[33] = f, u[34] = g) : g = u[34], g
            }
            let C = v.hoverCard?.title ?? v.title;
            return u[35] !== C ? (g = (0, d.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: C
            }), u[35] = C, u[36] = g) : g = u[36], u[37] !== v.hoverCard ? (h = v.hoverCard?.subtitle != null && (0, d.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: v.hoverCard.subtitle
            }), u[37] = v.hoverCard, u[38] = h) : h = u[38], u[39] !== g || u[40] !== h ? (q = (0, d.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [g, h]
            }), u[39] = g, u[40] = h, u[41] = q) : q = u[41], u[42] !== v.hoverCard || u[43] !== v.title ? (r = v.hoverCard?.body != null && (0, d.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": v.title,
                tabIndex: 0,
                children: v.hoverCard.body
            }), u[42] = v.hoverCard, u[43] = v.title, u[44] = r) : r = u[44], u[45] !== B || u[46] !== v.hoverCard?.title || u[47] !== v.title ? (s = v.hoverCard?.title != null && (0, d.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [B, (0, d.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: v.title
                })]
            }), u[45] = B, u[46] = v.hoverCard?.title, u[47] = v.title, u[48] = s) : s = u[48], u[49] !== q || u[50] !== r || u[51] !== s ? (t = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [q, r, s]
            }), u[49] = q, u[50] = r, u[51] = s, u[52] = t) : t = u[52], t
        }
    }),
    OyMp: (function(a, b, c) {
        var d = c("ABep"),
            e = c("oyxz"),
            f = c("E8Sp"),
            g = c("Cslg"),
            h = c("SGsN"),
            i = c("JAYD");
        c.d(b, {}, {
            a: async function(a, b) {
                let j = a.get(g.f),
                    k = a.get(g.k),
                    l = a.get(g.j),
                    m = a.get(f.b).pathname;
                try {
                    let {
                        openMcpSourceCitation: d
                    } = await c.e(127202).then(() => c("MqVO"));
                    if (j !== a.get(g.f) || k !== a.get(g.k) || "recipient" === b.access && l !== a.get(g.j) || m !== a.get(f.b).pathname || null != b.sourceAppId && !a.get(i.a, b.sourceAppId)) return;
                    d(a, b)
                } catch {
                    a.get(h.f).danger((0, d.jsx)(e.a, {
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
    h6Jp: (function(a, b, c) {
        var d = c("zFPc");
        c.d(b, {}, {
            a: function(a, b, c) {
                return a === d.a ? {
                    hoverCard: b,
                    paneWidth: c === d.b.citationTool ? d.b.paneWidth : void 0
                } : {
                    hoverCard: "connector_openai_findata" === a || null != a && "open_chart_source" === c ? b : void 0
                }
            }
        })
    }),
    SDqf: (function(a, b, c) {
        c.d(b, {
            a: () => S
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("Qgfj"),
            l = c("lAQI"),
            m = c("E8Sp"),
            n = c("Cslg"),
            o = c("Fl60"),
            p = c("E6P3"),
            q = c("zSQm"),
            r = c("WAdu"),
            s = c("Bbed"),
            t = c("vYmP"),
            u = c("tSEg"),
            v = c("jsoh"),
            w = c("HOLv"),
            x = c("bf6R"),
            y = c("N0Xk"),
            z = c("a6Zv"),
            A = c("Wp0b");

        function B(a) {
            let b, c, f = (0, e.c)(8),
                {
                    icon: g,
                    categoryIcon: i
                } = a,
                j = (0, h.useContext)(o.a),
                k = (0, z.a)() ? g?.logoDarkUrl : g?.logoUrl;
            f[0] !== i ? (b = null == i ? (0, d.jsx)(x.$i, {}) : (0, d.jsx)(w.a, {
                asset: A.a[i][12],
                className: "shrink-0"
            }), f[0] = i, f[1] = b) : b = f[1];
            let l = b;
            if (j?.disableExternalMedia && !k?.startsWith("data:")) return l;
            if (null == i) {
                let a, b = g ?? null;
                return f[2] !== l || f[3] !== b ? (a = (0, d.jsx)(y.a, {
                    className: "size-3 shrink-0",
                    icon: b,
                    fallback: l
                }), f[2] = l, f[3] = b, f[4] = a) : a = f[4], a
            }
            return null == k || function(a) {
                let b;
                if (!a.startsWith("data:image/svg+xml")) return !1;
                let c = a.indexOf(",");
                try {
                    b = a.slice(0, c).endsWith(";base64") ? atob(a.slice(c + 1)) : decodeURIComponent(a.slice(c + 1))
                } catch {
                    return !1
                }
                return b.startsWith("\x3c!-- Generated from @oai/icons/") || b.replace(/<svg\b[^>]*>|<\/svg>|\s/g, "") === A.a["document-search"]["16"].body.replaceAll("currentColor", "#0D0D0D").replace(/\s/g, "")
            }(k) ? l : (f[5] !== l || f[6] !== k ? (c = (0, d.jsx)(p.a, {
                className: "size-3 shrink-0 rounded-full",
                alt: "",
                fallback: l,
                src: k
            }, k), f[5] = l, f[6] = k, f[7] = c) : c = f[7], c)
        }
        var C = c("ePaQ"),
            D = c("OyMp"),
            E = c("JAYD"),
            F = c("Nfif");
        let G = (0, s.a)(async () => (await c.e(777289).then(() => c("jCSa"))).McpSourceFollowUp);

        function H(a) {
            let b, c, f, i, j, k = (0, e.c)(23),
                {
                    source: l,
                    isTerminalInline: m,
                    onClick: n,
                    renderPill: o,
                    renderHoverCard: p
                } = a,
                q = (0, g.y)(u.a);
            k[0] !== l.id ? (b = {
                sourceId: l.id,
                question: ""
            }, k[0] = l.id, k[1] = b) : b = k[1];
            let [s, w] = (0, h.useState)(b), x = s.sourceId === l.id ? s.question : "", [y, z] = (0, h.useState)(!1), A = (0, h.useContext)(r.a), H = l.access ?? "thread", I = (0, g.x)("recipient" !== H || "restricted" !== A ? v.a : null, H), J = I && "restricted" !== A, K = (0, g.x)(J && null != l.sourceAppId ? E.a : null, l.sourceAppId ?? ""), L = !I || null != l.sourceAppId && (!J || !K);
            k[2] !== n || k[3] !== q || k[4] !== l ? (c = () => {
                n?.(), (0, D.a)(q, l)
            }, k[2] = n, k[3] = q, k[4] = l, k[5] = c) : c = k[5];
            let M = c;
            return k[6] !== y || k[7] !== x || k[8] !== l ? (f = null == l.followUpContext ? void 0 : (0, d.jsx)(G, {
                source: l,
                question: x,
                onQuestionChange: a => w({
                    sourceId: l.id,
                    question: a
                }),
                pending: y,
                onPendingChange: z
            }, l.id), k[6] = y, k[7] = x, k[8] = l, k[9] = f) : f = k[9], k[10] !== L || k[11] !== M || k[12] !== m || k[13] !== o || k[14] !== l ? (i = null != o ? o({
                source: l,
                disabled: L,
                isTerminalInline: m,
                onClick: M
            }) : (0, d.jsx)(t.a, {
                ariaLabel: l.title,
                disabled: L,
                icon: null == l.sourceAppId ? (0, d.jsx)(B, {
                    icon: l.icon,
                    categoryIcon: l.categoryIcon
                }) : (0, d.jsx)(F.a, {
                    appId: l.sourceAppId,
                    presentation: "file" === l.presentation ? "file" : void 0
                }),
                isTerminalInline: m,
                label: null == l.sourceAppId ? l.title : l.title.split(" \xb7 ")[0],
                variant: null == l.sourceAppId ? "default" : "file",
                testId: "mcp-citation",
                onClick: M
            }), k[10] = L, k[11] = M, k[12] = m, k[13] = o, k[14] = l, k[15] = i) : i = k[15], k[16] !== L || k[17] !== y || k[18] !== p || k[19] !== l || k[20] !== f || k[21] !== i ? (j = (0, d.jsx)(C.a, {
                disabled: L,
                metadata: l,
                presentation: l.presentation,
                sourceAppId: l.sourceAppId,
                keepOpen: y,
                renderHoverCard: p,
                followUp: f,
                children: i
            }), k[16] = L, k[17] = y, k[18] = p, k[19] = l, k[20] = f, k[21] = i, k[22] = j) : j = k[22], j
        }
        var I = c("zUz7"),
            J = c("HBEI"),
            K = c("p8Cc"),
            L = c("hs78");
        let M = l.F({
                table: l.L()
            }),
            N = new Map([
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

        function O(a) {
            let b, c, g, h, i = (0, e.c)(11),
                {
                    source: j,
                    disabled: k,
                    onClick: l
                } = a,
                m = j.title,
                n = k ? "cursor-default" : "cursor-interaction";
            return i[0] !== n ? (b = (0, f.b)(L.a.palette, "pill-UgCDnx", "flex h-4.5 max-w-[15rem] items-center gap-1 overflow-hidden rounded-full py-0.5 pe-1.5 ps-0.5 text-[9px] leading-3 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", n), i[0] = n, i[1] = b) : b = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)("span", {
                "aria-hidden": "true",
                className: "relative flex h-3 w-3.5 shrink-0 items-center justify-center",
                children: (0, d.jsx)("span", {
                    className: (0, f.b)("mark-pu_nwj", "absolute size-4 shrink-0")
                })
            }), i[2] = c) : c = i[2], i[3] !== j.title ? (g = (0, d.jsx)("span", {
                className: "min-w-0 truncate",
                children: j.title
            }), i[3] = j.title, i[4] = g) : g = i[4], i[5] !== k || i[6] !== l || i[7] !== j.title || i[8] !== b || i[9] !== g ? (h = (0, d.jsx)("span", {
                className: "relative top-[-0.094rem] inline-flex max-w-full min-w-0 translate-y-0.5 items-center font-sans select-none",
                children: (0, d.jsxs)("button", {
                    type: "button",
                    "aria-label": m,
                    "data-testid": "mcp-citation",
                    disabled: k,
                    onClick: l,
                    className: b,
                    children: [c, g]
                })
            }), i[5] = k, i[6] = l, i[7] = j.title, i[8] = b, i[9] = g, i[10] = h) : h = i[10], h
        }

        function P(a) {
            var b;
            let c, g, i, k, l, m, n, s, t, u, v, w, x, y, A, B = (0, e.c)(37),
                {
                    metadata: C,
                    followUp: D,
                    documentProvider: E
                } = a,
                F = (0, h.useContext)(r.a),
                G = (0, h.useContext)(o.a),
                H = (0, z.a)();
            B[0] !== E || B[1] !== C.hoverCard?.subtitle ? (c = E ?? (b = C.hoverCard?.subtitle, ["SEC", "Quartr", "Reuters", "PitchBook", "Crunchbase", "Daloopa", "Fiscal"].find(a => b === a || b?.startsWith(`${a} \xb7 `))), B[0] = E, B[1] = C.hoverCard?.subtitle, B[2] = c) : c = B[2];
            let K = c;
            if (B[3] !== F || B[4] !== G?.disableExternalMedia || B[5] !== H || B[6] !== C || B[7] !== K) {
                let a = (0, I.a)(C);
                g = K ?? (null != a || C.hoverCard?.title != null ? C.title : void 0);
                let b = H ? a?.logoDarkUrl : a?.logoUrl,
                    c = null == b ? void 0 : (0, q.b)(b);
                i = "restricted" !== F && (!G?.disableExternalMedia || c?.startsWith("data:")) ? c : void 0, B[3] = F, B[4] = G?.disableExternalMedia, B[5] = H, B[6] = C, B[7] = K, B[8] = g, B[9] = i
            } else g = B[8], i = B[9];
            let M = i;
            B[10] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, f.b)(L.a.palette, "flex w-80 max-w-full min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default"), B[10] = k) : k = B[10];
            let N = C.hoverCard?.title ?? C.title;
            return B[11] !== N ? (l = (0, d.jsx)("div", {
                className: "line-clamp-2 break-words",
                children: N
            }), B[11] = N, B[12] = l) : l = B[12], B[13] !== C.hoverCard ? (m = C.hoverCard?.subtitle != null && (0, d.jsx)("div", {
                className: "line-clamp-2 text-xs leading-4 break-words text-tertiary",
                children: C.hoverCard.subtitle
            }), B[13] = C.hoverCard, B[14] = m) : m = B[14], B[15] !== l || B[16] !== m ? (n = (0, d.jsxs)("div", {
                className: "pb-1",
                children: [l, m]
            }), B[15] = l, B[16] = m, B[17] = n) : n = B[17], B[18] !== C.hoverCard || B[19] !== C.title ? (s = C.hoverCard?.body != null && (0, d.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-3 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": C.title,
                tabIndex: 0,
                children: C.hoverCard.body
            }), B[18] = C.hoverCard, B[19] = C.title, B[20] = s) : s = B[20], B[21] !== n || B[22] !== s ? (t = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-1",
                children: [n, s]
            }), B[21] = n, B[22] = s, B[23] = t) : t = B[23], B[24] !== D ? (u = null != D && (0, d.jsx)("div", {
                children: D
            }), B[24] = D, B[25] = u) : u = B[25], B[26] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, d.jsx)("div", {
                "aria-hidden": "true",
                className: "py-1",
                children: (0, d.jsx)("div", {
                    className: "border-t border-default"
                })
            }), B[26] = v) : v = B[26], B[27] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, d.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [(0, d.jsx)("img", {
                    alt: "",
                    src: J,
                    width: 20,
                    height: 20,
                    className: "shrink-0"
                }), (0, d.jsx)(j.a, {
                    id: "finance.citations.bundledDataAttribution",
                    defaultMessage: "ChatGPT Financial Services bundled data"
                })]
            }), B[27] = w) : w = B[27], B[28] !== g || B[29] !== M ? (x = null != g && (0, d.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1",
                children: [(0, d.jsx)("span", {
                    "aria-hidden": "true",
                    className: "flex size-5 shrink-0 items-center justify-center",
                    children: null != M && (0, d.jsx)(p.a, {
                        alt: "",
                        className: "size-4 shrink-0 rounded-full",
                        src: M,
                        fallback: (0, d.jsx)(d.Fragment, {})
                    })
                }), (0, d.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: g
                })]
            }), B[28] = g, B[29] = M, B[30] = x) : x = B[30], B[31] !== x ? (y = (0, d.jsxs)("div", {
                className: "flex flex-col gap-2 text-[13px] leading-[18px] tracking-[-0.08px] text-tertiary",
                children: [w, x]
            }), B[31] = x, B[32] = y) : y = B[32], B[33] !== u || B[34] !== y || B[35] !== t ? (A = (0, d.jsxs)("div", {
                className: k,
                children: [t, u, v, y]
            }), B[33] = u, B[34] = y, B[35] = t, B[36] = A) : A = B[36], A
        }
        let Q = (0, k.f)({
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
            R = {
                connector_openai_findata: function(a) {
                    let b, f, j, k, l = (0, e.c)(15),
                        o = (0, g.y)(u.a),
                        p = (0, i.a)(),
                        q = (0, h.useContext)(r.a);
                    l[0] !== p || l[1] !== a.source ? (b = function(a, b) {
                        if ("open_source" !== a.targetToolName) return a;
                        let c = M.safeParse(a.targetArguments?.company);
                        if (!c.success || c.data.table !== a.title) return a;
                        let d = N.get(c.data.table);
                        if (null == d) return a;
                        let e = b.formatMessage(Q[d]);
                        return {
                            ...a,
                            title: e,
                            hoverCard: a.hoverCard?.title === a.title ? {
                                ...a.hoverCard,
                                title: e
                            } : a.hoverCard
                        }
                    }(a.source, p), l[0] = p, l[1] = a.source, l[2] = b) : b = l[2];
                    let s = b;
                    return l[3] !== q || l[4] !== a.onClick || l[5] !== o || l[6] !== s ? (f = b => (0, d.jsx)(O, {
                        ...b,
                        onClick: () => {
                            if (!b.disabled) {
                                if ("restricted" === q) return void b.onClick();
                                !async function(a, b, d, e) {
                                    if ("open_source" !== b.targetToolName || b.targetArguments?.company == null) return void d();
                                    let f = a.get(n.f),
                                        g = a.get(n.k),
                                        h = a.get(n.j),
                                        i = () => !b.lifetimeSignal?.aborted && a.get(m.b).pathname === a.value.pathname && a.get(n.f) === f && a.get(n.k) === g && a.get(n.j) === h,
                                        j = !1;
                                    try {
                                        let {
                                            openCompanyCitation: d
                                        } = await c.e(553214).then(() => c("lJPM"));
                                        if (!i()) return;
                                        j = await d(a, b, i)
                                    } catch {}
                                    i() && (j ? e?.() : d())
                                }(o, s, b.onClick, a.onClick)
                            }
                        }
                    }), l[3] = q, l[4] = a.onClick, l[5] = o, l[6] = s, l[7] = f) : f = l[7], l[8] !== s.targetArguments ? (j = a => (0, d.jsx)(P, {
                        ...a,
                        documentProvider: function(a) {
                            switch ((0, K.a)(a)) {
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
                        }(s.targetArguments ?? {})
                    }), l[8] = s.targetArguments, l[9] = j) : j = l[9], l[10] !== a || l[11] !== s || l[12] !== f || l[13] !== j ? (k = (0, d.jsxs)(d.Fragment, {
                        children: [" ", (0, d.jsx)(H, {
                            ...a,
                            source: s,
                            renderPill: f,
                            renderHoverCard: j
                        })]
                    }), l[10] = a, l[11] = s, l[12] = f, l[13] = j, l[14] = k) : k = l[14], k
                }
            };

        function S(a) {
            let b, c, f, g = (0, e.c)(6);
            g[0] !== a ? ({
                verifiedConnectorId: c,
                ...b
            } = a, g[0] = a, g[1] = b, g[2] = c) : (b = g[1], c = g[2]);
            let h = (null != c && Object.hasOwn(R, c) ? R[c] : void 0) ?? H;
            return g[3] !== h || g[4] !== b ? (f = (0, d.jsx)(h, {
                ...b
            }), g[3] = h, g[4] = b, g[5] = f) : f = g[5], f
        }
    }),
    JAYD: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("OiCI"),
            g = c("Epxj"),
            h = c("OWtl");
        let i = (0, d.d)(h.a, (a, b) => {
            let {
                get: c
            } = b, d = c(f.b);
            if (null == d) return !1;
            let h = c(g.h, {
                accountId: d,
                hostId: e._b,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !h.isPending && !h.isError && h.data?.some(b => {
                let {
                    appIds: c,
                    plugin: d
                } = b;
                return c?.includes(a) && d.installed && d.enabled && "AVAILABLE" === d.availability && null == d.disabledReason
            }) === !0
        });
        c.d(b, {}, {
            a: i
        })
    }),
    Nfif: (function(a, b, c) {
        c.d(b, {
            a: () => r
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("DBCl"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("BQbE"),
            k = c("bf6R"),
            l = c("E6P3"),
            m = c("zSQm"),
            n = c("WAdu"),
            o = c("a6Zv"),
            p = a => (0, d.jsxs)("svg", {
                width: 12,
                height: 12,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: [(0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 2.25293C16.3032 2.25306 17.8145 3.76317 17.8145 5.62598C17.8144 7.48871 16.3032 8.99889 14.4404 8.99902C13.7322 8.99896 13.0749 8.78025 12.5322 8.40723L8.39844 12.541C8.74099 13.0688 8.94043 13.698 8.94043 14.374C8.94035 16.2368 7.42929 17.7471 5.56641 17.7471C3.70368 17.7469 2.19344 16.2367 2.19336 14.374C2.19336 12.5112 3.70363 11.0012 5.56641 11.001C6.27216 11.001 6.92702 11.2183 7.46875 11.5889L11.6055 7.45215C11.2656 6.92567 11.0674 6.2992 11.0674 5.62598C11.0674 3.7632 12.5776 2.25311 14.4404 2.25293ZM5.56641 12.3311C4.43794 12.3312 3.52344 13.246 3.52344 14.374C3.52352 15.502 4.43799 16.4168 5.56641 16.417C6.69497 16.417 7.61027 15.5021 7.61035 14.374C7.61035 13.2459 6.69502 12.3311 5.56641 12.3311ZM14.4404 3.58301C13.312 3.58318 12.3975 4.49796 12.3975 5.62598C12.3975 6.75393 13.312 7.66877 14.4404 7.66895C15.5689 7.66881 16.4843 6.75395 16.4844 5.62598C16.4844 4.49793 15.5689 3.58314 14.4404 3.58301Z",
                    fill: "currentColor"
                }), (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.4404 11.001C16.3032 11.0011 17.8145 12.5112 17.8145 14.374C17.8144 16.2368 16.3032 17.7469 14.4404 17.7471C12.5777 17.7469 11.0675 16.2367 11.0674 14.374C11.0674 12.5112 12.5776 11.0012 14.4404 11.001ZM14.4404 12.3311C13.312 12.3312 12.3975 13.246 12.3975 14.374C12.3975 15.502 13.312 16.4168 14.4404 16.417C15.5689 16.4169 16.4843 15.502 16.4844 14.374C16.4844 13.246 15.5689 12.3312 14.4404 12.3311Z",
                    fill: "currentColor"
                }), (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.56641 2.25293C7.42934 2.25293 8.94043 3.76309 8.94043 5.62598C8.94035 7.48879 7.42929 8.99902 5.56641 8.99902C3.70368 8.99885 2.19344 7.48869 2.19336 5.62598C2.19336 3.7632 3.70363 2.25311 5.56641 2.25293ZM5.56641 3.58301C4.43794 3.58318 3.52344 4.49796 3.52344 5.62598C3.52352 6.75393 4.43799 7.66877 5.56641 7.66895C6.69497 7.66895 7.61027 6.75403 7.61035 5.62598C7.61035 4.49785 6.69502 3.58301 5.56641 3.58301Z",
                    fill: "currentColor"
                })]
            }),
            q = c("hs78");

        function r(a) {
            let b, c, r, s, t, u, v, w = (0, e.c)(21),
                {
                    appId: x,
                    showName: y,
                    presentation: z
                } = a,
                A = void 0 !== y && y,
                B = (0, h.useContext)(n.a);
            w[0] !== x ? (b = [x], w[0] = x, w[1] = b) : b = w[1];
            let C = "restricted" !== B;
            w[2] !== b || w[3] !== C ? (c = {
                appIds: b,
                hostId: g._b,
                enabled: C
            }, w[2] = b, w[3] = C, w[4] = c) : c = w[4];
            let {
                data: D
            } = (0, j.c)(c), E = D?.find(a => a.id === x), F = (0, o.a)() ? E?.iconUrlDark ?? E?.iconUrl : E?.iconUrl, G = null == F ? void 0 : (0, m.b)(F);
            w[5] !== z ? (r = "file" === z ? (0, d.jsx)("span", {
                className: (0, f.b)(q.a.connectorIcon, q.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, d.jsx)(p, {
                    "aria-hidden": "true"
                })
            }) : (0, d.jsx)(k.aj, {}), w[5] = z, w[6] = r) : r = w[6];
            let H = r;
            w[7] !== H || w[8] !== B || w[9] !== z || w[10] !== G ? (s = "restricted" !== B && null != G ? (0, d.jsx)(l.a, {
                className: (0, f.b)("shrink-0", "file" === z ? [q.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: G,
                fallback: H
            }, G) : H, w[7] = H, w[8] = B, w[9] = z, w[10] = G, w[11] = s) : s = w[11];
            let I = s;
            return w[12] !== I || w[13] !== z ? (t = "file" === z ? (0, d.jsx)("span", {
                className: "size-4 shrink-0",
                children: I
            }) : I, w[12] = I, w[13] = z, w[14] = t) : t = w[14], w[15] !== E?.name || w[16] !== A ? (u = A && (E?.name ?? (0, d.jsx)(i.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR"
            })), w[15] = E?.name, w[16] = A, w[17] = u) : u = w[17], w[18] !== t || w[19] !== u ? (v = (0, d.jsxs)(d.Fragment, {
                children: [t, u]
            }), w[18] = t, w[19] = u, w[20] = v) : v = w[20], v
        }
    }),
    Wp0b: (function(a, b, c) {
        var d = c("KfYB"),
            e = c("v8ia"),
            f = c("KFWl"),
            g = c("XoAA"),
            h = c("SbbS"),
            i = c("muzq"),
            j = c("ZhIs"),
            k = c("Loli"),
            l = c("WKY1"),
            m = c("MGdA"),
            n = c("PYYX"),
            o = c("VvM7"),
            p = c("dHLf"),
            q = c("xwlH"),
            r = c("zRfo"),
            s = c("wTNq"),
            t = c("wrbz"),
            u = c("ixXJ"),
            v = c("Ltuq"),
            w = c("QzEQ"),
            x = c("iXfs"),
            y = c("cfjx"),
            z = c("IV5E"),
            A = c("SbOM");
        let B = {
            newspaper: {
                12: p.a,
                16: q.a,
                20: r.a
            },
            "text-page": {
                12: y.a,
                16: z.a,
                20: A.a
            },
            "document-search": {
                12: j.a,
                16: k.a,
                20: l.a
            },
            "phone-wave": {
                12: s.a,
                16: t.a,
                20: u.a
            },
            presentation: {
                12: v.a,
                16: w.a,
                20: x.a
            },
            "bar-chart": {
                12: d.a,
                16: e.a,
                20: f.a
            },
            "live-signal": {
                12: m.a,
                16: n.a,
                20: o.a
            },
            building: {
                12: g.a,
                16: h.a,
                20: i.a
            }
        };
        c.d(b, {}, {
            a: B
        })
    })
};