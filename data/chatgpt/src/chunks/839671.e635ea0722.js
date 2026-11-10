export const __rspack_esm_ids = [839671];
export const __webpack_modules__ = {
    tmkO: (function(e, t, a) {
        var n = a("ASxG");
        let i = "update_up_next",
            r = n.strictObject({
                status: n.string().trim().min(1).max(200).nullable(),
                history_summary: n.string().trim().min(1).max(300).optional()
            });
        a.d(t, {}, {
            a: i,
            b: function(e) {
                let t = r.safeParse(e);
                return t.success ? t.data.status : void 0
            },
            c: function(e, t) {
                return ("codex_app" === e || null == e) && t === i
            }
        })
    }),
    bmU4: (function(e, t, a) {
        var n = a("iRMi"),
            i = a("yGJW"),
            r = a("YTYy");
        let l = {
            pptx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PPTX,
            xlsx: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_XLSX,
            csv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_CSV,
            tsv: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_TSV,
            pdf: n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_PDF,
            "native-slides": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SLIDES,
            "native-sheets": n.CodexArtifactFileActionFormat.CODEX_ARTIFACT_FILE_ACTION_FORMAT_NATIVE_SHEETS
        };
        a.d(t, {}, {
            a: function(e) {
                let t = "bundleId" in e ? e.bundleId?.toLowerCase() : void 0;
                return "com.microsoft.powerpoint" === t || "Microsoft PowerPoint" === e.label || "PowerPoint" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_POWERPOINT : "com.microsoft.excel" === t || "Microsoft Excel" === e.label || "Excel" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_EXCEL : "com.apple.iwork.keynote" === t || "Keynote" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_KEYNOTE : "com.apple.iwork.numbers" === t || "Numbers" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_NUMBERS : "org.libreoffice.script" === t || "libreoffice-calc.desktop" === t || "libreoffice-impress.desktop" === t || "LibreOffice" === e.label || "LibreOffice Calc" === e.label || "LibreOffice Impress" === e.label ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_LIBREOFFICE : "systemDefault" === e.id || "system-default" === e.id ? n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_SYSTEM_DEFAULT : n.CodexArtifactFileActionTargetApp.CODEX_ARTIFACT_FILE_ACTION_TARGET_APP_OTHER
            },
            b: function(e, t, a) {
                let {
                    importKind: n
                } = e;
                if ("pptx" !== n && "xlsx" !== n && "csv" !== n && "tsv" !== n || t?.artifactInteractionExcluded === !0 || t?.sharedConversationId != null) return null;
                let i = t?.target,
                    r = null != i && "fileId" in i ? i.fileId : void 0,
                    l = a?.libraryFileId ?? (null != i && "libraryFileId" in i ? i.libraryFileId : void 0);
                return {
                    backing: "file",
                    sourceFormat: n,
                    threadId: t?.conversationId ?? e.threadId,
                    turnId: e.originatingTurn?.turnId,
                    fileId: null != r && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(r) ? r : void 0,
                    libraryFileId: null != l && /^(?:file-|file_|libfile_)[A-Za-z0-9_-]+$/.test(l) ? l : void 0
                }
            },
            c: function(e, t, a, s) {
                if (null == t) return;
                let o = t.threadId ?? void 0;
                (0, i.a)(e, n.CodexArtifactFileActionClicked, {
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
                    } [a],
                    targetFormat: null == s.format ? void 0 : l[s.format],
                    targetApp: s.app,
                    productExperience: (0, r.a)(e, o),
                    threadId: o,
                    turnId: t.turnId ?? void 0,
                    pageId: t.pageId,
                    fileId: t.fileId,
                    libraryFileId: t.libraryFileId
                })
            }
        })
    }),
    A7Ss: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("IPUh"),
            s = a("T1PX"),
            o = a("V8uZ");
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, d, u = (0, i.c)(15),
                    {
                        expanded: m,
                        height: p,
                        onExpandComplete: f,
                        children: v
                    } = e,
                    h = (0, s.a)(),
                    x = m ? p : 0,
                    g = +!!m;
                u[0] !== x || u[1] !== g ? (t = {
                    height: x,
                    opacity: g
                }, u[0] = x, u[1] = g, u[2] = t) : t = u[2], u[3] !== h ? (a = h ? {
                    duration: 0
                } : o.a, u[3] = h, u[4] = a) : a = u[4];
                let C = !m,
                    y = !m,
                    b = m ? "overflow-visible" : "pointer-events-none overflow-hidden";
                u[5] !== b ? (c = (0, r.b)("motion-reduce:h-auto! motion-reduce:aria-hidden:h-0! motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!", b), u[5] = b, u[6] = c) : c = u[6];
                let A = m ? f : void 0;
                return u[7] !== v || u[8] !== t || u[9] !== a || u[10] !== C || u[11] !== y || u[12] !== c || u[13] !== A ? (d = (0, n.jsx)(l.a.div, {
                    initial: !1,
                    animate: t,
                    transition: a,
                    "aria-hidden": C,
                    inert: y,
                    className: c,
                    onAnimationComplete: A,
                    children: v
                }), u[7] = v, u[8] = t, u[9] = a, u[10] = C, u[11] = y, u[12] = c, u[13] = A, u[14] = d) : d = u[14], d
            }
        })
    }),
    K5Kt: (function(e, t, a) {
        a.d(t, {
            a: () => s
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("GRDa");

        function s(e) {
            let t, a, s, o, c, d, u, m = (0, i.c)(18);
            m[0] !== e ? ({
                ref: s,
                className: t,
                indent: o,
                variant: c,
                ...a
            } = e, m[0] = e, m[1] = t, m[2] = a, m[3] = s, m[4] = o, m[5] = c) : (t = m[1], a = m[2], s = m[3], o = m[4], c = m[5]);
            let p = void 0 === c ? "default" : c,
                f = "conversation" === p ? "item" : "custom",
                v = "flush" !== p && "detail-kV0yGe",
                h = "steps" === p && "steps-SF26rj",
                x = "default" === p && "gap-2 pt-2 pb-1",
                g = "grouped" === p && "gap-[var(--conversation-grouped-item-gap,4px)] pt-1",
                C = void 0 !== o && o && "ps-6";
            return m[6] !== t || m[7] !== v || m[8] !== h || m[9] !== x || m[10] !== g || m[11] !== C ? (d = (0, r.b)(v, h, x, g, C, t), m[6] = t, m[7] = v, m[8] = h, m[9] = x, m[10] = g, m[11] = C, m[12] = d) : d = m[12], m[13] !== a || m[14] !== s || m[15] !== f || m[16] !== d ? (u = (0, n.jsx)(l.a, {
                spacing: f,
                ref: s,
                className: d,
                ...a
            }), m[13] = a, m[14] = s, m[15] = f, m[16] = d, m[17] = u) : u = m[17], u
        }
    }),
    cKhh: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("zd8w"),
            l = a("A7Ss"),
            s = a("umSm"),
            o = a("ltPT"),
            c = a("MFk9"),
            d = a("K5Kt");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, m, p, f, v, h = (0, i.c)(34),
                    {
                        defaultExpanded: x,
                        indentContent: g,
                        icon: C,
                        onExpand: y,
                        summary: b,
                        status: A,
                        children: _,
                        unmountOnCollapse: I
                    } = e,
                    w = void 0 === g || g,
                    T = void 0 !== I && I,
                    [j, F] = (0, r.useState)(!1),
                    [k, N] = (0, r.useState)(void 0 !== x && x),
                    {
                        elementHeightPx: E,
                        elementRef: O
                    } = (0, o.a)(),
                    z = "running" === A,
                    M = null != _,
                    L = M && (z ? !j : k);
                h[0] !== j || h[1] !== k || h[2] !== L || h[3] !== z || h[4] !== y ? (t = () => {
                    L || y?.(), z ? F(!j) : N(!k)
                }, h[0] = j, h[1] = k, h[2] = L, h[3] = z, h[4] = y, h[5] = t) : t = h[5];
                let S = t;
                h[6] !== z || h[7] !== b ? (a = (0, n.jsx)(s.a, {
                    active: z,
                    className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: b
                }), h[6] = z, h[7] = b, h[8] = a) : a = h[8];
                let R = a;
                h[9] !== S || h[10] !== M || h[11] !== L ? (u = M ? {
                    expanded: L,
                    onToggle: S
                } : void 0, h[9] = S, h[10] = M, h[11] = L, h[12] = u) : u = h[12];
                let P = u,
                    D = T ? void 0 : O;
                h[13] !== _ || h[14] !== w || h[15] !== D ? (m = (0, n.jsx)(d.a, {
                    ref: D,
                    indent: w,
                    children: _
                }), h[13] = _, h[14] = w, h[15] = D, h[16] = m) : m = h[16];
                let U = m;
                h[17] !== C || h[18] !== R ? (p = {
                    icon: C,
                    summary: R
                }, h[17] = C, h[18] = R, h[19] = p) : p = h[19];
                let B = p;
                if (T || null == P) {
                    let e, t;
                    return h[20] !== U || h[21] !== P ? (e = P && {
                        ...P,
                        details: U
                    }, h[20] = U, h[21] = P, h[22] = e) : e = h[22], h[23] !== B || h[24] !== e ? (t = (0, n.jsx)(c.a, {
                        ...B,
                        disclosure: e
                    }), h[23] = B, h[24] = e, h[25] = t) : t = h[25], t
                }
                h[26] !== U || h[27] !== E || h[28] !== L ? (f = (0, n.jsx)(l.a, {
                    expanded: L,
                    height: E,
                    children: U
                }), h[26] = U, h[27] = E, h[28] = L, h[29] = f) : f = h[29];
                let W = f;
                return h[30] !== W || h[31] !== P || h[32] !== B ? (v = (0, n.jsx)(c.a, {
                    ...B,
                    body: W,
                    externalDisclosure: P
                }), h[30] = W, h[31] = P, h[32] = B, h[33] = v) : v = h[33], v
            }
        })
    }),
    dMTK: (function(e, t, a) {
        function n(e, t) {
            return (Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())) / 864e5
        }

        function i(e, t) {
            let a = e.formatRelativeTime(t, "day", {
                numeric: "auto"
            });
            return e.locale.startsWith("en") ? a.charAt(0).toUpperCase() + a.slice(1) : a
        }
        a.d(t, {}, {
            a: n,
            b: i,
            c: function(e, t, a) {
                let r = Math.max(n(a, t), 0);
                return {
                    date: r <= 1 ? i(e, -r) : r <= 7 ? e.formatDate(t, {
                        weekday: "long"
                    }) : r <= 365 ? e.formatDate(t, {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }) : e.formatDate(t, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }),
                    time: e.formatTime(t, {
                        hour: "numeric",
                        minute: "2-digit"
                    }),
                    includeAt: r > 7
                }
            },
            d: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    a = null,
                    n = !1;
                return e.map(e => {
                    if (null == e) return a = null, n = !0, null;
                    let i = null;
                    for (let r of e) r.breaksPreviousAdjacency && (a = null), null == i && function(e) {
                        let {
                            current: t,
                            previous: a,
                            isFirstUserTurn: n,
                            nowMs: i
                        } = e;
                        return null != t.sentAtMs && !!Number.isFinite(t.sentAtMs) && (!!n && i - t.sentAtMs > 36e5 || a?.role === "assistant" && null != a.sentAtMs && Number.isFinite(a.sentAtMs) && t.sentAtMs - a.sentAtMs > ("user" === t.role ? 36e5 : 6e5))
                    }({
                        current: r,
                        previous: a,
                        isFirstUserTurn: "user" === r.role && !n,
                        nowMs: t
                    }) && (i = r.sentAtMs), n = n || "user" === r.role, a = r;
                    return i
                })
            }
        })
    }),
    jHtb: (function(e, t, a) {
        a.d(t, {
            a: () => d
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("zd8w"),
            s = a("rS3J"),
            o = a("cWXs"),
            c = a("AdJ5");

        function d(e) {
            let t, a, l, d, m, p, f = (0, i.c)(28),
                {
                    text: v,
                    ref: h,
                    className: x,
                    components: g,
                    directives: C,
                    externalLinkContextMenuConversationId: y,
                    markdownClassName: b,
                    cwd: A,
                    hostId: _,
                    hasSerializedParagraphs: I,
                    pluginMentionPresentation: w,
                    renderMath: T,
                    textStyle: j,
                    variant: F
                } = e,
                k = void 0 !== I && I,
                N = void 0 === F ? "default" : F;
            f[0] !== x ? (t = (0, r.b)("text-size-chat whitespace-pre-wrap", x), f[0] = x, f[1] = t) : t = f[1], f[2] !== k || f[3] !== b || f[4] !== N ? (a = (0, r.b)("[&_ol]:!ps-6 [&_ul]:!ps-6", "user-message" === N ? (0, r.b)("rich-text-user-turn", k ? "rich-text-serialized-paragraphs" : "[&>p]:!m-0 [&>p+p]:!mt-5") : "[&_li+li]:!mt-0 [&_li>ol]:!mt-0 [&_li>p+p]:!mt-0 [&_li>ul]:!mt-0 [&_p]:!m-0 [&_p+p]:!mt-5", "compact" === N && "![--markdown-font-size:var(--text-sm)] ![--markdown-line-height:var(--leading-relaxed)] !text-secondary", b), f[2] = k, f[3] = b, f[4] = N, f[5] = a) : a = f[5];
            let E = "user-message" === N && k ? u : void 0,
                O = null != y;
            return f[6] !== j || f[7] !== N ? (l = j ?? ("user-message" === N ? {
                tone: "user-message"
            } : void 0), f[6] = j, f[7] = N, f[8] = l) : l = f[8], f[9] !== v ? (d = (0, s.i)(v), f[9] = v, f[10] = d) : d = f[10], f[11] !== g || f[12] !== A || f[13] !== C || f[14] !== y || f[15] !== _ || f[16] !== w || f[17] !== T || f[18] !== a || f[19] !== E || f[20] !== O || f[21] !== l || f[22] !== d ? (m = (0, n.jsx)(o.Markdown, {
                className: a,
                components: g,
                conversationId: y,
                cwd: A,
                directives: C,
                extensions: c.a,
                hostId: _,
                pluginMentionPresentation: w,
                renderMath: T,
                renderRoot: E,
                isBrowserEnabled: O,
                repairOrderedLists: !1,
                textStyle: l,
                children: d
            }), f[11] = g, f[12] = A, f[13] = C, f[14] = y, f[15] = _, f[16] = w, f[17] = T, f[18] = a, f[19] = E, f[20] = O, f[21] = l, f[22] = d, f[23] = m) : m = f[23], f[24] !== h || f[25] !== t || f[26] !== m ? (p = (0, n.jsx)("div", {
                ref: h,
                className: t,
                children: m
            }), f[24] = h, f[25] = t, f[26] = m, f[27] = p) : p = f[27], p
        }

        function u(e, t) {
            let a = e.every(e => "paragraph" === e.type || "space" === e.type),
                i = [],
                r = 0;
            for (let s = 0; s < e.length; s++) {
                let o = e[s];
                if ("space" === o.type) continue;
                let c = e[s + 1],
                    d = c?.type === "space" ? s + 2 : s + 1;
                if (d >= e.length) continue;
                let u = (o.raw.match(/\n+$/)?.[0].length ?? 0) + (c?.type === "space" ? c.raw.match(/\n+$/)?.[0].length ?? 0 : 0),
                    m = a ? Math.max(0, u - 1) : Math.ceil(Math.max(0, u - 2) / 2);
                0 !== m && (i.push((0, n.jsxs)(l.Fragment, {
                    children: [t(e.slice(r, s + 1)), (0, n.jsx)("span", {
                        className: "block whitespace-pre-wrap",
                        "data-markdown-copy": "blank-lines",
                        children: "\n".repeat(m)
                    })]
                }, s)), r = d)
            }
            return i.push((0, n.jsx)(l.Fragment, {
                children: t(e.slice(r))
            }, "end")), i
        }
    }),
    AdJ5: (function(e, t, a) {
        var n = a("lsky"),
            i = a("rS3J"),
            r = a("MX6A"),
            l = a("EULo"),
            s = a("ABl9");
        let o = [{
            extensions: [{
                name: "sitesPluginMention",
                level: "inline",
                start: e => c(e),
                tokenizer(e) {
                    if (!this.lexer.state.inLink && 0 === c(e)) return {
                        type: "link",
                        raw: "$sites",
                        href: s.b,
                        title: null,
                        text: "Sites",
                        tokens: [{
                            type: "text",
                            raw: "Sites",
                            text: "Sites"
                        }]
                    }
                }
            }, {
                name: "userMessageImage",
                level: "inline",
                start: e => e.indexOf("!["),
                tokenizer(e) {
                    var t, a;
                    if (!e.startsWith("![")) return;
                    let i = this.lexer.options.tokenizer;
                    if (null == i) return;
                    let r = n.e.prototype.link.call(i, e) ?? n.e.prototype.reflink.call(i, e, this.lexer.tokens.links);
                    return r?.type === "image" ? (t = r, a = d(this.lexer, r.text), {
                        type: "text",
                        raw: t.raw,
                        text: `!${t.text}`,
                        tokens: [{
                            type: "text",
                            raw: "!",
                            text: "!"
                        }, {
                            type: "link",
                            raw: t.raw.slice(1),
                            href: t.href,
                            title: t.title,
                            text: t.text,
                            tokens: a
                        }]
                    }) : void 0
                }
            }, {
                name: "composerLink",
                level: "inline",
                start(e) {
                    let t = e.indexOf("[");
                    if (-1 === t) return;
                    let a = e[t - 1];
                    return ":" === a || "!" === a ? t - 1 : t
                },
                tokenizer(e) {
                    if (this.lexer.state.inLink) return this.lexer.options.tokenizer?.escape(e);
                    if (e.startsWith(":[") && (0, i.d)(e, 1)?.start === 1) {
                        let t = e[0];
                        return {
                            type: "text",
                            raw: t,
                            text: t
                        }
                    }
                    if (!e.startsWith("[")) return;
                    let t = this.lexer.options.tokenizer,
                        a = null == t ? void 0 : n.e.prototype.link.call(t, e);
                    if (a?.type === "link" && null != a.title) return a;
                    let s = (0, i.d)(e, 0);
                    if (s?.start === 0) {
                        let t = (0, r.c)(s.label);
                        return {
                            type: "link",
                            raw: e.slice(0, s.end),
                            href: (0, l.c)(s.path),
                            title: null,
                            text: t,
                            tokens: d(this.lexer, s.label)
                        }
                    }
                    let o = e.split("\n", 1)[0];
                    if (o.includes("](")) return {
                        type: "text",
                        raw: o,
                        text: o
                    }
                }
            }]
        }];

        function c(e) {
            let t = e.matchAll(s.c).next().value;
            return null == t ? void 0 : t.index + t[1].length
        }

        function d(e, t) {
            let a = e.state.inLink;
            e.state.inLink = !0;
            try {
                return e.inlineTokens(t)
            } finally {
                e.state.inLink = a
            }
        }
        a.d(t, {}, {
            a: o
        })
    }),
    NQNw: (function(e, t, a) {
        var n = a("K0rn"),
            i = a("XSLO"),
            r = a("Sgcz"),
            l = a("qYBv"),
            s = a("t7eZ"),
            o = a("Z2lA"),
            c = a("acby");

        function d(e, t) {
            return {
                item: e,
                grouping: t
            }
        }

        function u(e) {
            let t = e.automaticApprovalReviews;
            if (null == t) return e;
            let a = t.filter(e => "approved" !== e.status);
            if (a.length > 0 && a.length === t.length) return e;
            let {
                automaticApprovalReviews: n,
                ...i
            } = e;
            return 0 === a.length ? i : {
                ...i,
                automaticApprovalReviews: a
            }
        }
        a.d(t, {}, {
            a: function(e) {
                let {
                    dynamicToolCallRenderer: t,
                    includeGeneratedImages: a = !1,
                    mcpServerStatuses: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (e.type) {
                    case "external-event":
                        return d(e, "groupable");
                    case "exec":
                    case "patch":
                        return d(u(e), (0, r.d)(e) ? "standalone" : "groupable");
                    case "mcp-tool-call":
                        return d(u(e), (0, s.a)(e) || (0, l.a)({
                            item: e,
                            mcpServerStatuses: i
                        }) ? "standalone" : "groupable");
                    case "web-search":
                        return 0 === e.query.trim().length ? null : d(e, "groupable");
                    case "dynamic-tool-call": {
                        let a = t ?? (0, c.c)(e);
                        if (a?.hiddenInConversation === !0) return null;
                        return d(e, a?.standaloneInConversation === !0 ? "standalone" : "groupable")
                    }
                    case "generated-image":
                        return a ? d(e, "standalone") : null;
                    case "image-view":
                        return d(e, "standalone");
                    case "mcp-server-elicitation":
                        if (!e.completed || "unsupportedOpenAIForm" === e.elicitation.kind) return null;
                        return d(e, "legacyOpenAIForm" === e.elicitation.kind && Object.values(e.elicitation.schema.properties).some(n.b) ? "groupable" : "standalone");
                    case "automatic-approval-review":
                        switch (e.status) {
                            case "approved":
                                return null;
                            case "inProgress":
                                return d(e, "groupable");
                            case "aborted":
                            case "denied":
                            case "timedOut":
                                return d(e, "standalone")
                        }
                    case "dil-reasoning":
                    case "assistant-message":
                    case "auto-review-interruption-warning":
                    case "context-compaction":
                    case "multi-agent-action":
                    case "realtime-transcript":
                    case "stream-error":
                    case "strict-review-notice":
                    case "subagent-activity":
                    case "system-error":
                    case "user-input-response":
                    case "user-message":
                    case "worked-for":
                    case "worktree-init":
                        return d(e, "standalone");
                    case "reasoning":
                    case "automation-update":
                    case "forked-from-conversation":
                    case "model-changed":
                    case "model-rerouted":
                    case "permission-request":
                    case "personality-changed":
                    case "plan-implementation":
                    case "proposed-plan":
                    case "remote-task-created":
                    case "todo-list":
                    case "turn-diff":
                    case "userInput":
                    case "steered":
                        return null
                }
            },
            b: function(e, t) {
                return !!("exec" === e.type && (0, i.e)(e.executionStatus)) && null != (0, i.b)(e.parsedCmd.cmd) && t?.type === "patch" && null != t.visualizationActivities && t.visualizationActivities.length > 0 || "exec" === e.type && "read" === e.parsedCmd.type && (0, i.d)((0, o.a)({
                    summary: e.parsedCmd,
                    cwd: e.cwd
                }))
            }
        })
    }),
    GRDa: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, s, o, c = (0, i.c)(12);
                c[0] !== e ? ({
                    className: t,
                    spacing: l,
                    ...a
                } = e, c[0] = e, c[1] = t, c[2] = a, c[3] = l) : (t = c[1], a = c[2], l = c[3]);
                let d = void 0 === l ? "item" : l,
                    u = "custom" === d ? void 0 : d,
                    m = "item" === d && "gap-[var(--conversation-item-gap,16px)]",
                    p = "grouped" === d && "gap-[var(--conversation-grouped-item-gap,4px)]";
                return c[4] !== t || c[5] !== m || c[6] !== p ? (s = (0, r.b)("flex flex-col", m, p, t), c[4] = t, c[5] = m, c[6] = p, c[7] = s) : s = c[7], c[8] !== a || c[9] !== u || c[10] !== s ? (o = (0, n.jsx)("div", {
                    ...a,
                    "data-spacing": u,
                    className: s
                }), c[8] = a, c[9] = u, c[10] = s, c[11] = o) : o = c[11], o
            }
        })
    }),
    acby: (function(e, t, a) {
        a.d(t, {
            a: () => es,
            b: () => ed,
            c: () => el,
            d: () => eo,
            e: () => ec
        });
        var n = a("ABep"),
            i = a("on57"),
            r = a("JGl5"),
            l = a("PFi3"),
            s = a("oyxz"),
            o = a("dqpP"),
            c = a("HOLv"),
            d = a("Bbed"),
            u = a("umSm"),
            m = a("ou1N");
        let p = (0, d.a)(() => Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(398448)]).then(a.bind(a, "px7w")).then(e => e.EnvironmentSetupPrototypeResultCard)),
            f = [r.a, null].map(e => ({
                namespace: e,
                render: v,
                renderAgentActivityIcon: () => (0, n.jsx)(c.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: m.a
                }),
                persistentInCollapsedConversation: !0,
                standaloneInConversation: !0,
                tool: l.b
            }));

        function v(e, t, a) {
            let r, d = l.f.safeParse(e.arguments);
            return d.success ? "row" === t && e.completed && !1 !== e.success ? (0, n.jsx)(p, {
                details: d.data
            }) : (r = e.completed ? !1 === e.success ? (0, n.jsx)(s.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn’t prepare environment draft",
                description: "Activity shown when an environment draft could not be finalized"
            }) : (0, n.jsx)(s.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft",
                description: "Activity shown when an environment draft has been finalized"
            }) : (0, n.jsx)(s.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft",
                description: "Activity shown while an environment draft is being finalized"
            }), (0, n.jsxs)(o.a, {
                className: (0, i.b)("text-size-chat text-text/40", "row" === t ? "group-hover:text-default" : "group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? a ?? (0, n.jsx)(c.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: m.a
                }) : null, (0, n.jsx)(u.a, {
                    active: !e.completed,
                    children: r
                })]
            })) : null
        }
        var h = a("hV9T"),
            x = a("bVzl"),
            g = a("MCYz"),
            C = a("ASxG"),
            y = a("wls5"),
            b = a("TL6G"),
            A = a("MFk9"),
            _ = a("DYB3"),
            I = a("IIsu"),
            w = a("xLft");
        let T = C.object({
                destinationHostId: C.string().min(1).optional(),
                threadId: C.string().min(1)
            }),
            j = C.object({
                operationId: C.string().min(1)
            }),
            F = C.object({
                threadId: C.string().min(1)
            }),
            k = [{
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.h
            }, {
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.d
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = T.safeParse(e.arguments);
                    return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null
                },
                namespace: r.a,
                render: function(e, t, a) {
                    return T.safeParse(e.arguments).success ? (0, n.jsx)(w.a, {
                        agentActivityIcon: a,
                        item: e,
                        variant: t
                    }) : null
                },
                renderAgentActivityIcon: N,
                standaloneInConversation: !0,
                tool: x.c
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = j.safeParse(e.arguments);
                    return t.success ? t.data.operationId : null
                },
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                summaryOnlyInConversationGroup: !0,
                tool: x.b
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.p
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.r
            }, {
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.t
            }, {
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.x
            }, {
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.v
            }, {
                namespace: r.a,
                render: E,
                renderAgentActivityIcon: N,
                tool: g.B
            }];

        function N(e) {
            return (0, _.c)(e)?.icon ?? null
        }

        function E(e, t, a) {
            var r;
            let l, c, d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                m = (0, _.c)(e, d);
            if (null == m) return null;
            let p = e.tool === g.d && e.completed && !0 === e.success && "row" === t ? (r = e.contentItems ?? null, null == (l = r?.find(e => "inputText" === e.type)?.text) ? null : (0, h.Ej)(l)) : null,
                f = "row" === t && (e.tool === g.r || e.tool === g.t) ? F.safeParse(e.arguments) : null,
                v = f?.success === !0 ? f.data.threadId : null;
            null != p ? c = e => (0, I.a)(e, p) : null != v && (c = () => {
                let e = (0, h.Se)(v);
                b.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, y.c)() ? (0, h.ce)(e) : (0, h.de)(e)
                })
            });
            let x = "row" === t && void 0 !== a,
                C = x ? "summary-text" : t,
                w = (0, n.jsxs)(o.a, {
                    className: (0, i.b)("text-size-chat", "row" === C ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== C ? N(e) : null, (0, n.jsx)(u.a, {
                        active: !e.completed,
                        className: (0, i.b)("summary-text" !== C && "min-w-0 truncate", null != c && "group-hover:!text-default"),
                        children: (0, n.jsx)(s.a, {
                            ...m.message,
                            values: m.values
                        })
                    })]
                }),
                T = null == c ? w : (0, n.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: c,
                    children: w
                });
            return x ? (0, n.jsx)(A.a, {
                icon: a,
                summary: T
            }) : T
        }
        let O = k.filter(e => {
            let {
                tool: t
            } = e;
            return "create_thread" === t
        }).map(e => ({
            ...e,
            namespace: null
        }));
        var z = a("tmkO");
        let M = [r.a, null].map(e => ({
            namespace: e,
            tool: z.a,
            hiddenInConversation: !0
        }));
        var L = a("ScoF"),
            S = a("Y3sT"),
            R = a("uWou"),
            P = a("JEy9");
        let D = {
                namespace: r.a,
                tool: S.b,
                getActivityMessage: (e, t) => (0, R.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: e.completed,
                    isLeadingSummaryPart: t
                }),
                renderAgentActivityIcon: (e, t) => (0, P.b)(e.tool, e.arguments, t),
                getCompletedSummaryPartKey: e => (0, R.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: !0
                })?.id ?? null
            },
            U = [D, {
                ...D,
                tool: L.b
            }, {
                ...D,
                tool: "read_artifact"
            }];
        var B = a("Tbby"),
            W = a("QosV"),
            X = a("T0Rc"),
            H = a("Qgfj"),
            V = a("C2tN"),
            K = a("d9Qn");

        function G(e) {
            let t, a, r, l, c, d, m = (0, W.c)(25),
                {
                    item: p,
                    isLeadingSummaryPart: f,
                    tabId: v,
                    variant: h,
                    agentActivityIcon: x
                } = e,
                g = void 0 === f || f,
                {
                    data: C
                } = Q(p, v),
                y = C?.faviconUrl ?? null,
                b = C?.title ?? null;
            if (null != b) {
                let e;
                m[0] !== g || m[1] !== p.completed || m[2] !== b ? (e = p.completed ? (0, n.jsx)(s.a, {
                    ...g ? $.completedWithTitle : $.completedWithTitleFollowing,
                    values: {
                        title: b
                    }
                }) : (0, n.jsx)(s.a, {
                    ...$.activeWithTitle,
                    values: {
                        title: b
                    }
                }), m[0] = g, m[1] = p.completed, m[2] = b, m[3] = e) : e = m[3], t = e
            } else {
                let e;
                m[4] !== g || m[5] !== p.completed ? (e = p.completed ? (0, n.jsx)(s.a, {
                    ...g ? $.completed : $.completedFollowing
                }) : (0, n.jsx)(s.a, {
                    ...$.active
                }), m[4] = g, m[5] = p.completed, m[6] = e) : e = m[6], t = e
            }
            let _ = !p.completed,
                I = "summary-text" !== h && "min-w-0 truncate";
            m[7] !== I ? (a = (0, i.b)(I), m[7] = I, m[8] = a) : a = m[8], m[9] !== t || m[10] !== _ || m[11] !== a ? (r = (0, n.jsx)(u.a, {
                active: _,
                className: a,
                children: t
            }), m[9] = t, m[10] = _, m[11] = a, m[12] = r) : r = m[12];
            let w = r;
            if ("row" === h && void 0 !== x) {
                let e;
                return m[13] !== x || m[14] !== w ? (e = (0, n.jsx)(A.a, {
                    icon: x,
                    summary: w
                }), m[13] = x, m[14] = w, m[15] = e) : e = m[15], e
            }
            let T = "row" === h ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return m[16] !== T ? (l = (0, i.b)("text-size-chat", T), m[16] = T, m[17] = l) : l = m[17], m[18] !== y || m[19] !== h ? (c = "summary-text" !== h && null != y ? (0, n.jsx)(K.a, {
                src: y,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, m[18] = y, m[19] = h, m[20] = c) : c = m[20], m[21] !== w || m[22] !== l || m[23] !== c ? (d = (0, n.jsxs)(o.a, {
                className: l,
                children: [c, w]
            }), m[21] = w, m[22] = l, m[23] = c, m[24] = d) : d = m[24], d
        }

        function Z(e) {
            let t, a = (0, W.c)(2),
                {
                    item: i,
                    tabId: r
                } = e,
                {
                    data: l
                } = Q(i, r);
            return a[0] !== l ? (t = l?.faviconUrl == null ? null : (0, n.jsx)(K.a, {
                src: l.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), a[0] = l, a[1] = t) : t = a[1], t
        }

        function Q(e, t) {
            let a, n, i, r = (0, W.c)(9),
                l = !e.completed;
            return r[0] !== t ? (a = () => (async function(e) {
                let t = (0, V.a)();
                if (t?.tabs == null) return null;
                try {
                    let a = await t.tabs.get(e);
                    return {
                        faviconUrl: function(e, t) {
                            let a = e.favIconUrl?.trim();
                            if (null == a || 0 === a.length) return null;
                            let n = (e.url ?? e.pendingUrl ?? "").trim();
                            if (0 === n.length || null == t) return a;
                            try {
                                let e = new URL(t.getURL("/_favicon/"));
                                return e.searchParams.set("pageUrl", n), e.searchParams.set("size", "32"), e.toString()
                            } catch {
                                return a
                            }
                        }(a, t.runtime),
                        title: a.title?.trim() || null
                    }
                } catch {
                    return null
                }
            })(t), r[0] = t, r[1] = a) : a = r[1], r[2] !== e.callId || r[3] !== t ? (n = ["chrome-tab-context-tool-call-metadata", e.callId, t], r[2] = e.callId, r[3] = t, r[4] = n) : n = r[4], r[5] !== l || r[6] !== a || r[7] !== n ? (i = {
                enabled: l,
                queryFn: a,
                queryKey: n,
                staleTime: 1 / 0
            }, r[5] = l, r[6] = a, r[7] = n, r[8] = i) : i = r[8], (0, X.a)(i)
        }
        let $ = (0, H.f)({
                completedWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle",
                    defaultMessage: 'Read "{title}"',
                    description: "Completed label for reading the contents of a Chrome tab with a known page title."
                },
                completedWithTitleFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle.following",
                    defaultMessage: 'read "{title}"',
                    description: "Non-leading completed label for reading the contents of a Chrome tab with a known page title in an agent activity summary"
                },
                activeWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.activeWithTitle",
                    defaultMessage: 'Reading "{title}"',
                    description: "In-progress label for reading the contents of a Chrome tab with a known page title."
                },
                completed: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed",
                    defaultMessage: "Read tab",
                    description: "Completed label for reading the contents of a Chrome tab."
                },
                completedFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed.following",
                    defaultMessage: "read tab",
                    description: "Non-leading completed label for reading the contents of a Chrome tab in an agent activity summary"
                },
                active: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.active",
                    defaultMessage: "Reading tab",
                    description: "In-progress label for reading the contents of a Chrome tab."
                }
            }),
            q = C.strictObject({
                tabId: C.number().int().nonnegative()
            }),
            J = [{
                getCompletedSummaryPartKey: function(e) {
                    return q.safeParse(e.arguments).success ? e.callId : null
                },
                namespace: "chrome_extension",
                render: function(e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = q.safeParse(e.arguments);
                    return r.success ? (0, n.jsx)(G, {
                        item: e,
                        isLeadingSummaryPart: i,
                        tabId: r.data.tabId,
                        variant: t,
                        agentActivityIcon: a
                    }) : null
                },
                renderAgentActivityIcon: function(e) {
                    let t = q.safeParse(e.arguments);
                    return t.success ? (0, n.jsx)(Z, {
                        item: e,
                        tabId: t.data.tabId
                    }) : null
                },
                tool: B.b
            }];
        var Y = a("YZPM"),
            ee = a("vZSl");
        let et = C.object({
                config: C.object({})
            }),
            ea = [{
                namespace: r.a,
                render: ei,
                renderAgentActivityIcon: en,
                tool: Y.b
            }, {
                namespace: r.a,
                render: ei,
                renderAgentActivityIcon: en,
                tool: Y.d
            }];

        function en() {
            return (0, n.jsx)(c.a, {
                className: "shrink-0 text-text/60",
                "aria-hidden": !1,
                asset: ee.a
            })
        }

        function ei(e, t, a) {
            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                l = (0, _.c)(e, r);
            if (null == l) return null;
            let c = !e.completed && e.tool === Y.d && et.safeParse(e.arguments).success ? (0, n.jsx)(s.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval",
                description: "In-progress label while a Codex configuration change is waiting for user approval."
            }) : (0, n.jsx)(s.a, {
                ...l.message,
                values: l.values
            });
            return "row" === t && void 0 !== a ? (0, n.jsx)(A.a, {
                icon: a,
                summary: (0, n.jsx)(u.a, {
                    active: !e.completed,
                    className: "min-w-0 truncate",
                    children: c
                })
            }) : (0, n.jsxs)(o.a, {
                className: (0, i.b)("text-size-chat", "row" === t ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? en() : null, (0, n.jsx)(u.a, {
                    active: !e.completed,
                    className: (0, i.b)("summary-text" !== t && "min-w-0 truncate"),
                    children: c
                })]
            })
        }
        let er = [...J, ...k, ...O, ...f, ...ea, ...M, ...U];

        function el(e) {
            return er.find(t => t.namespace === e.namespace && t.tool === e.tool)
        }

        function es(e) {
            return el(e)?.continuesLiveActivityBetweenCalls === !0
        }

        function eo(e) {
            return el(e)?.persistentInCollapsedConversation === !0
        }

        function ec(e) {
            return el(e)?.summaryOnlyInConversationGroup === !0
        }

        function ed(e) {
            let t = (0, _.c)(e),
                a = el(e)?.getCompletedSummaryPartKey?.(e);
            return `${e.namespace}:${e.tool}:${a??""}:${t?.key??""}`
        }
    }),
    IIsu: (function(e, t, a) {
        var n = a("hV9T"),
            i = a("jAnS");
        a("Ot7V");
        var r = a("TL6G");
        a.d(t, {}, {
            a: function(e, t) {
                let a;
                "chatgpt" === t.kind ? a = (0, i.c)("clientThreadId" in t ? t.clientThreadId : t.threadId) : "clientThreadId" in t ? a = (0, n.de)(t.clientThreadId) : a = (0, n.de)((0, n.Se)(t.threadId)), r.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: a
                })
            }
        })
    }),
    xLft: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("BolX"),
            s = a("oyxz"),
            o = a("ASxG"),
            c = a("f5n5"),
            d = a("eeyJ"),
            u = a("dqpP"),
            m = a("cKhh"),
            p = a("J0Jr"),
            f = a("DYB3"),
            v = a("umSm");
        let h = o.object({
            destinationHostDisplayName: o.string().min(1),
            operationId: o.string().min(1),
            status: o.enum(["queued", "running", "success", "warning", "error"]),
            threadTitle: o.string().min(1)
        });

        function x(e) {
            let t, a, r = (0, i.c)(10),
                {
                    operation: l
                } = e;
            r[0] !== l ? (t = (0, n.jsx)(g, {
                operation: l
            }), r[0] = l, r[1] = t) : t = r[1];
            let o = t;
            if ("queued" === l.status || "running" === l.status) {
                let e;
                return r[2] !== o ? (e = (0, n.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.active",
                    defaultMessage: "Handing off to {destination}",
                    description: "In-progress label for handing the current task to another run location",
                    values: {
                        destination: o
                    }
                }), r[2] = o, r[3] = e) : e = r[3], e
            }
            if ("error" === l.status) {
                let e;
                return r[4] !== o ? (e = (0, n.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.failed",
                    defaultMessage: "Failed to hand off to {destination}",
                    description: "Failed label for handing the current task to another run location",
                    values: {
                        destination: o
                    }
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            if ("warning" === l.status) {
                let e;
                return r[6] !== o ? (e = (0, n.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.warning",
                    defaultMessage: "Handoff to {destination} needs attention",
                    description: "Warning label for handing the current task to another run location",
                    values: {
                        destination: o
                    }
                }), r[6] = o, r[7] = e) : e = r[7], e
            }
            return r[8] !== o ? (a = (0, n.jsx)(s.a, {
                id: "localConversation.threadHandoff.inline.completed",
                defaultMessage: "Handed off to {destination}",
                description: "Completed label for handing the current task to another run location",
                values: {
                    destination: o
                }
            }), r[8] = o, r[9] = a) : a = r[9], a
        }

        function g(e) {
            let t, a = (0, i.c)(4),
                {
                    operation: r
                } = e;
            if ("to-local" === r.direction) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.local",
                    defaultMessage: "local",
                    description: "Destination noun used in an inline task handoff status"
                }), a[0] = e) : e = a[0], e
            }
            if ("to-worktree" === r.direction) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.worktree",
                    defaultMessage: "worktree",
                    description: "Destination noun used in an inline task handoff status"
                }), a[1] = e) : e = a[1], e
            }
            return a[2] !== r.request.destinationLabel ? (t = (0, n.jsx)(n.Fragment, {
                children: r.request.destinationLabel
            }), a[2] = r.request.destinationLabel, a[3] = t) : t = a[3], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, g, C = (0, i.c)(25),
                    {
                        agentActivityIcon: y,
                        item: b,
                        operation: A,
                        variant: _
                    } = e,
                    I = null != b && b.completed && !0 === b.success ? function(e) {
                        let t = e?.find(e => "inputText" === e.type)?.text;
                        if (null == t) return null;
                        try {
                            let e = JSON.parse(t),
                                a = h.safeParse(e);
                            return a.success ? a.data : null
                        } catch {
                            return null
                        }
                    }(b.contentItems ?? null) : null,
                    w = null == A ? I?.operationId ?? b.callId : A.id,
                    T = (0, l.x)(c.a, w),
                    j = A ?? T,
                    F = null == j ? null == I ? b?.completed ?? !1 : (0, c.b)(I.status) : (0, c.b)(j.status),
                    k = null == j ? b?.success : "error" !== j.status && ("success" === j.status || "warning" === j.status),
                    N = "running";
                F && (N = !1 === k ? "failed" : "completed"), C[0] !== b ? (t = null == b ? null : (0, f.c)(b), C[0] = b, C[1] = t) : t = C[1];
                let E = t;
                C[2] !== E?.icon ? (a = E?.icon ?? (0, n.jsx)(p.a, {
                    className: "icon-xs shrink-0 text-text/60"
                }), C[2] = E?.icon, C[3] = a) : a = C[3];
                let O = a,
                    z = null;
                if (null != E) {
                    let e;
                    C[4] !== E.message || C[5] !== E.values ? (e = (0, n.jsx)(s.a, {
                        ...E.message,
                        values: E.values
                    }), C[4] = E.message, C[5] = E.values, C[6] = e) : e = C[6], z = e
                } else if (null != A) {
                    let e;
                    C[7] !== A ? (e = (0, n.jsx)(x, {
                        operation: A
                    }), C[7] = A, C[8] = e) : e = C[8], z = e
                }
                if ("row" !== _) {
                    let e, t, a, i = "summary-text" !== _ ? O : null,
                        l = null == b ? !F : !b.completed,
                        s = "summary-text" !== _ && "min-w-0 truncate";
                    return C[9] !== s ? (e = (0, r.b)(s), C[9] = s, C[10] = e) : e = C[10], C[11] !== z || C[12] !== l || C[13] !== e ? (t = (0, n.jsx)(v.a, {
                        active: l,
                        className: e,
                        children: z
                    }), C[11] = z, C[12] = l, C[13] = e, C[14] = t) : t = C[14], C[15] !== i || C[16] !== t ? (a = (0, n.jsxs)(u.a, {
                        className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                        children: [i, t]
                    }), C[15] = i, C[16] = t, C[17] = a) : a = C[17], a
                }
                let M = y ?? O;
                return C[18] !== j ? (o = j?.steps.map(e => (0, n.jsx)(d.a, {
                    compact: !0,
                    direction: j.direction,
                    localBranch: j.localBranch,
                    sourceBranch: j.sourceBranch,
                    step: e,
                    worktreeBranch: j.worktreeBranch
                }, e.id)), C[18] = j, C[19] = o) : o = C[19], C[20] !== N || C[21] !== z || C[22] !== M || C[23] !== o ? (g = (0, n.jsx)(m.a, {
                    indentContent: !1,
                    icon: M,
                    status: N,
                    summary: z,
                    children: o
                }), C[20] = N, C[21] = z, C[22] = M, C[23] = o, C[24] = g) : g = C[24], g
            }
        })
    }),
    qYBv: (function(e, t, a) {
        var n = a("KJ1J"),
            i = a("W10I"),
            r = a("E2ja"),
            l = a("acxW");

        function s(e) {
            let {
                item: t,
                mcpServerStatuses: a
            } = e;
            if (!0 === t.isMcpAppWidgetSuperseded || t.completed && null == t.result) return "not-mcp-app";
            if ((0, r.b)(t)?.type === "chatgpt-automation") return "mcp-app";
            let n = t.result?.type === "success" ? t.result.raw : null;
            return null != t.mcpAppResourceUri || null != (0, i.c)({
                mcpServerStatuses: a,
                server: t.invocation.server,
                tool: t.invocation.tool,
                toolResult: n
            }) ? "mcp-app" : null == n ? "not-mcp-app" : null == a ? "maybe-mcp-app" : "not-mcp-app"
        }
        a.d(t, {}, {
            a: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: a
                } = e;
                return "mcp-app" === s({
                    item: t,
                    mcpServerStatuses: a
                }) && !(0, l.a)({
                    isCodexAppsServer: (0, n.f)(t.invocation.server),
                    result: t.result
                })
            },
            b: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: a
                } = e;
                return "not-mcp-app" !== s({
                    item: t,
                    mcpServerStatuses: a
                }) && !(0, l.a)({
                    isCodexAppsServer: (0, n.f)(t.invocation.server),
                    result: t.result
                })
            },
            c: function(e) {
                return e.some(e => "item" === e.kind && "mcp-tool-call" === e.item.type && (e.item.result?.type === "success" || !e.item.completed && null == e.item.result && null == e.item.mcpAppResourceUri))
            }
        })
    }),
    t7eZ: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e) {
                return e.result?.type === "error" && "MCP tool call requires approval, but approval policy is never" === e.result.error
            }
        })
    }),
    Z2lA: (function(e, t, a) {
        var n = a("bnxy"),
            i = a("ivPw"),
            r = a("pNUK");

        function l(e) {
            let {
                summary: t,
                cwd: a
            } = e, n = function(e) {
                let {
                    summary: t,
                    cwd: a
                } = e;
                switch (t.type) {
                    case "read":
                        return s({
                            path: t.path ?? t.name,
                            cwd: a
                        });
                    case "list_files":
                    case "search":
                        if (!t.path) return null;
                        return s({
                            path: t.path,
                            cwd: a
                        })
                }
            }({
                summary: t,
                cwd: a
            });
            return n ? (0, r.a)(n) : null
        }

        function s(e) {
            let {
                path: t,
                cwd: a
            } = e;
            if (!t) return null;
            let r = (0, i.a)(t);
            return 0 === r.length ? null : null != a ? (0, i.a)((0, n.s)(a, r)) : r
        }
        a.d(t, {}, {
            a: l,
            b: function(e) {
                let {
                    summary: t,
                    cwd: a
                } = e;
                return l({
                    summary: t,
                    cwd: a
                })?.isSkillDefinitionFile === !0
            }
        })
    }),
    ltPT: (function(e, t, a) {
        var n = a("QosV"),
            i = a("zd8w"),
            r = a("nsuH");
        a.d(t, {}, {
            a: function() {
                let e, t, a, l, s = (0, n.c)(7),
                    [o, c] = (0, i.useState)(0);
                s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    c(t => t === e ? t : e)
                }, s[0] = e) : e = s[0];
                let d = e;
                s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
                    d(function(e) {
                        if (!e.borderBoxSize) return e.contentRect.height;
                        let t = Array.isArray(e.borderBoxSize) ? e.borderBoxSize[0] : e.borderBoxSize;
                        return t?.blockSize ?? e.contentRect.height
                    }(e))
                }, s[1] = t) : t = s[1];
                let u = (0, r.b)(t);
                s[2] !== u ? (a = e => {
                    null != e && d(e.scrollHeight), u(e)
                }, s[2] = u, s[3] = a) : a = s[3];
                let m = a;
                return s[4] !== o || s[5] !== m ? (l = {
                    elementHeightPx: o,
                    elementRef: m
                }, s[4] = o, s[5] = m, s[6] = l) : l = s[6], l
            }
        })
    }),
    vYmP: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("zd8w"),
            s = a("ZtSy"),
            o = a("ZRyR");
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, d, u, m, p, f, v, h, x, g, C, y, b, A, _, I, w = (0, i.c)(43);
                w[0] !== e ? ({
                    ref: m,
                    ActionWrapper: f,
                    ariaLabel: a,
                    icon: c,
                    isActive: v,
                    isTerminalInline: d,
                    label: u,
                    supportingCountLabel: p,
                    testId: x,
                    variant: h,
                    ...t
                } = e, w[0] = e, w[1] = t, w[2] = a, w[3] = c, w[4] = d, w[5] = u, w[6] = m, w[7] = p, w[8] = f, w[9] = v, w[10] = h, w[11] = x) : (t = w[1], a = w[2], c = w[3], d = w[4], u = w[5], m = w[6], p = w[7], f = w[8], v = w[9], h = w[10], x = w[11]);
                let T = void 0 === f ? l.Fragment : f,
                    j = void 0 !== v && v,
                    F = "file" === (void 0 === h ? "default" : h),
                    k = "disabled" in t && t.disabled,
                    N = k ? "cursor-default" : "group cursor-interaction",
                    E = !F && !k && "hover:bg-secondary-soft-hover hover:text-default!",
                    O = F && o.a.palette,
                    z = F && o.a.filePill;
                w[12] !== j || w[13] !== F || w[14] !== N || w[15] !== E || w[16] !== O || w[17] !== z ? (g = (0, r.b)("no-underline!", N, E, O, z, F ? "relative flex h-[25px] items-center justify-center gap-1 px-2 text-[10px] leading-[13px] select-none" : (0, r.b)("flex h-4.5 max-w-[15rem] overflow-hidden rounded-xl pe-2 ps-1 text-[9px] leading-none font-medium select-none", j ? "bg-secondary-soft-hover text-default!" : "bg-secondary-soft text-secondary-solid!")), w[12] = j, w[13] = F, w[14] = N, w[15] = E, w[16] = O, w[17] = z, w[18] = g) : g = w[18];
                let M = g;
                w[19] !== F || w[20] !== p ? (C = null == p ? null : (0, n.jsx)("span", {
                    className: (0, r.b)("text-inherit", F ? "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-text-tertiary/15 px-1 text-[8px] leading-none font-semibold group-hover:bg-text-tertiary/20" : "-me-1 flex h-full shrink-0 items-center px-1"),
                    "aria-hidden": "true",
                    children: p
                }), w[19] = F, w[20] = p, w[21] = C) : C = w[21];
                let L = C;
                w[22] !== c || w[23] !== F || w[24] !== u || w[25] !== L ? (y = F ? (0, n.jsxs)(n.Fragment, {
                    children: [c, (0, n.jsx)("span", {
                        className: "min-w-0 flex-auto truncate",
                        children: u
                    }), L]
                }) : (0, n.jsxs)("span", {
                    className: "relative start-0 bottom-0 flex h-full w-full items-center",
                    children: [(0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 items-center gap-1",
                        children: [c, (0, n.jsx)("span", {
                            className: "max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center",
                            children: u
                        })]
                    }), L]
                }), w[22] = c, w[23] = F, w[24] = u, w[25] = L, w[26] = y) : y = w[26];
                let S = y,
                    R = F && "relative",
                    P = F && d ? "align-middle" : "relative top-[-0.094rem] translate-y-0.5";
                return w[27] !== R || w[28] !== P ? (b = (0, r.b)("ms-1 inline-flex max-w-full items-center font-sans select-none", R, P), w[27] = R, w[28] = P, w[29] = b) : b = w[29], w[30] !== t || w[31] !== a || w[32] !== M || w[33] !== S || w[34] !== x ? (A = "href" in t ? (0, n.jsx)(s.a, {
                    className: M,
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
                    children: S
                }) : (0, n.jsx)("button", {
                    className: M,
                    "aria-label": a,
                    "data-testid": x,
                    disabled: t.disabled,
                    type: "button",
                    onClick: t.onClick,
                    children: S
                }), w[30] = t, w[31] = a, w[32] = M, w[33] = S, w[34] = x, w[35] = A) : A = w[35], w[36] !== T || w[37] !== A ? (_ = (0, n.jsx)(T, {
                    children: A
                }), w[36] = T, w[37] = A, w[38] = _) : _ = w[38], w[39] !== m || w[40] !== b || w[41] !== _ ? (I = (0, n.jsx)("span", {
                    ref: m,
                    className: b,
                    children: _
                }), w[39] = m, w[40] = b, w[41] = _, w[42] = I) : I = w[42], I
            }
        })
    }),
    ePaQ: (function(e, t, a) {
        a.d(t, {
            a: () => h
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("kSHG"),
            l = a("bFOP"),
            s = a("slpy"),
            o = a("on57"),
            c = a("zd8w"),
            d = a("KxMp"),
            u = a("bf6R"),
            m = a("zSQm"),
            p = a("WAdu");

        function f(e) {
            let t, a, r, l, s, o, c, d = (0, i.c)(21),
                {
                    title: u,
                    subtitle: m,
                    body: p,
                    branding: f,
                    followUp: v,
                    actions: h
                } = e;
            d[0] !== p ? (t = p?.includes("\n"), d[0] = p, d[1] = t) : t = d[1];
            let x = t;
            return d[2] !== f ? (a = (0, n.jsx)("div", {
                className: "branding-xlBboz",
                children: f
            }), d[2] = f, d[3] = a) : a = d[3], d[4] !== u ? (r = (0, n.jsx)("div", {
                className: "title-M06RHU",
                children: u
            }), d[4] = u, d[5] = r) : r = d[5], d[6] !== m ? (l = null != m && (0, n.jsx)("div", {
                className: "subtitle-gArrij",
                children: m
            }), d[6] = m, d[7] = l) : l = d[7], d[8] !== p || d[9] !== x || d[10] !== u ? (s = null != p && (0, n.jsx)("div", {
                className: x ? "multilineBody-ZwAWLW" : "body-M8UobH",
                role: "region",
                "aria-label": u,
                tabIndex: x ? 0 : void 0,
                children: p
            }), d[8] = p, d[9] = x, d[10] = u, d[11] = s) : s = d[11], d[12] !== v ? (o = null != v && (0, n.jsx)("div", {
                className: "followUp-otVo0x",
                children: v
            }), d[12] = v, d[13] = o) : o = d[13], d[14] !== h || d[15] !== a || d[16] !== r || d[17] !== l || d[18] !== s || d[19] !== o ? (c = (0, n.jsxs)("div", {
                className: "content-cuuiWn",
                children: [a, r, l, s, h, o]
            }), d[14] = h, d[15] = a, d[16] = r, d[17] = l, d[18] = s, d[19] = o, d[20] = c) : c = d[20], c
        }
        var v = a("Nfif");

        function h(e) {
            let t, a, r, o, d = (0, i.c)(32),
                {
                    children: u,
                    disabled: m,
                    metadata: p,
                    sourceAppId: f,
                    followUp: v,
                    keepOpen: h,
                    openOnClick: C,
                    closeOnTriggerClick: y,
                    presentation: b,
                    renderHoverCard: A
                } = e,
                _ = void 0 === y || y,
                [I, w] = (0, c.useState)(!1);
            if (null == p.hoverCard && null == A && "file" !== b && !C && _) {
                let e, t, a = !!h || void 0;
                return d[0] !== u ? (e = (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: u
                }), d[0] = u, d[1] = e) : e = d[1], d[2] !== m || d[3] !== p.title || d[4] !== a || d[5] !== e ? (t = (0, n.jsx)(s.a, {
                    content: p.title,
                    disabled: m,
                    forceOpen: a,
                    children: e
                }), d[2] = m, d[3] = p.title, d[4] = a, d[5] = e, d[6] = t) : t = d[6], t
            }
            let T = p.title;
            if (null != A) {
                let e;
                d[7] !== v || d[8] !== p || d[9] !== b || d[10] !== A || d[11] !== f ? (e = A({
                    metadata: p,
                    sourceAppId: f,
                    followUp: v,
                    presentation: b
                }), d[7] = v, d[8] = p, d[9] = b, d[10] = A, d[11] = f, d[12] = e) : e = d[12], T = e
            } else if (null != p.hoverCard) {
                let e;
                d[13] !== v || d[14] !== p || d[15] !== b || d[16] !== f ? (e = (0, n.jsx)(g, {
                    metadata: p,
                    sourceAppId: f,
                    followUp: v,
                    presentation: b
                }), d[13] = v, d[14] = p, d[15] = b, d[16] = f, d[17] = e) : e = d[17], T = e
            }
            let j = !m && (h || I);
            d[18] === Symbol.for("react.memo_cache_sentinel") ? (t = () => w(!0), d[18] = t) : t = d[18], d[19] !== u || d[20] !== _ || d[21] !== C ? (a = (0, n.jsx)(x, {
                openOnClick: C,
                closeOnTriggerClick: _,
                onOpen: t,
                children: u
            }), d[19] = u, d[20] = _, d[21] = C, d[22] = a) : a = d[22];
            let F = "file" === b ? 344 : 320,
                k = "file" === b ? 10 : 6;
            return d[23] !== T || d[24] !== p.title || d[25] !== F || d[26] !== k ? (r = (0, n.jsx)(l.a.Content, {
                "aria-label": p.title,
                minWidth: "auto",
                maxWidth: F,
                align: "start",
                side: "bottom",
                sideOffset: k,
                children: T
            }), d[23] = T, d[24] = p.title, d[25] = F, d[26] = k, d[27] = r) : r = d[27], d[28] !== j || d[29] !== a || d[30] !== r ? (o = (0, n.jsxs)(l.a, {
                showOnHover: !0,
                open: j,
                onOpenChange: w,
                children: [a, r]
            }), d[28] = j, d[29] = a, d[30] = r, d[31] = o) : o = d[31], o
        }

        function x(e) {
            let t, a, r, s = (0, i.c)(10),
                {
                    children: o,
                    openOnClick: c,
                    closeOnTriggerClick: d,
                    onOpen: u
                } = e,
                {
                    close: m
                } = (0, l.b)();
            return s[0] !== m || s[1] !== d || s[2] !== u || s[3] !== c ? (t = e => {
                c && d || (e.preventDefault(), c ? u() : m())
            }, s[0] = m, s[1] = d, s[2] = u, s[3] = c, s[4] = t) : t = s[4], s[5] !== o ? (a = (0, n.jsx)("span", {
                className: "group/mcp-source-citation inline-flex",
                tabIndex: -1,
                children: o
            }), s[5] = o, s[6] = a) : a = s[6], s[7] !== t || s[8] !== a ? (r = (0, n.jsx)(l.a.Trigger, {
                onClick: t,
                children: a
            }), s[7] = t, s[8] = a, s[9] = r) : r = s[9], r
        }

        function g(e) {
            let t, a, l, s, h, x, g, C, y = (0, i.c)(53),
                {
                    metadata: b,
                    sourceAppId: A,
                    followUp: _,
                    presentation: I
                } = e,
                w = (0, c.useContext)(p.a);
            if (y[0] !== b.icons?.[0]) {
                let {
                    data: e
                } = r.v.safeParse(b.icons?.[0]), a = e?.src;
                t = null == a ? void 0 : (0, m.b)(a), y[0] = b.icons?.[0], y[1] = t
            } else t = y[1];
            let T = t;
            y[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(u.Di, {}), y[2] = a) : a = y[2];
            let j = a;
            if ("restricted" !== w) {
                if (null != b.url) {
                    let e;
                    y[3] !== b.url ? (e = (0, n.jsx)(d.a, {
                        href: b.url,
                        className: "size-4"
                    }), y[3] = b.url, y[4] = e) : e = y[4], j = e
                } else if (null != T) {
                    let e, t, a = null == A && "dark:brightness-0 dark:invert";
                    y[5] !== a ? (e = (0, o.b)("size-4 shrink-0 rounded-sm object-contain", a), y[5] = a, y[6] = e) : e = y[6], y[7] !== T || y[8] !== e ? (t = (0, n.jsx)("img", {
                        alt: "",
                        className: e,
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: T
                    }), y[7] = T, y[8] = e, y[9] = t) : t = y[9], j = t
                }
            }
            if ("file" === I && null != A) {
                let e, t, a = b.hoverCard?.title ?? b.title,
                    i = b.hoverCard?.subtitle,
                    r = b.hoverCard?.body;
                return y[10] !== A ? (e = (0, n.jsx)(v.a, {
                    appId: A,
                    showName: !0,
                    presentation: "file"
                }), y[10] = A, y[11] = e) : e = y[11], y[12] !== _ || y[13] !== a || y[14] !== i || y[15] !== r || y[16] !== e ? (t = (0, n.jsx)(f, {
                    title: a,
                    subtitle: i,
                    body: r,
                    branding: e,
                    followUp: _
                }), y[12] = _, y[13] = a, y[14] = i, y[15] = r, y[16] = e, y[17] = t) : t = y[17], t
            }
            if (null != A) {
                let e, t, a, i, r, l;
                y[18] !== A ? (e = (0, n.jsx)("div", {
                    className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
                    children: (0, n.jsx)(v.a, {
                        appId: A,
                        showName: !0
                    })
                }), y[18] = A, y[19] = e) : e = y[19];
                let s = b.hoverCard?.title ?? b.title;
                return y[20] !== s ? (t = (0, n.jsx)("div", {
                    className: "line-clamp-2 font-medium break-words",
                    children: s
                }), y[20] = s, y[21] = t) : t = y[21], y[22] !== b.hoverCard ? (a = b.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                    className: "line-clamp-2 break-words text-secondary",
                    children: b.hoverCard.subtitle
                }), y[22] = b.hoverCard, y[23] = a) : a = y[23], y[24] !== b.hoverCard || y[25] !== b.title ? (i = b.hoverCard?.body != null && (0, n.jsx)("div", {
                    className: "max-h-48 min-h-0 overflow-y-auto break-words whitespace-pre-line text-secondary",
                    role: "region",
                    "aria-label": b.title,
                    tabIndex: 0,
                    children: b.hoverCard.body
                }), y[24] = b.hoverCard, y[25] = b.title, y[26] = i) : i = y[26], y[27] !== _ ? (r = null != _ && (0, n.jsx)("div", {
                    children: _
                }), y[27] = _, y[28] = r) : r = y[28], y[29] !== e || y[30] !== t || y[31] !== a || y[32] !== i || y[33] !== r ? (l = (0, n.jsxs)("div", {
                    className: "flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                    children: [e, t, a, i, r]
                }), y[29] = e, y[30] = t, y[31] = a, y[32] = i, y[33] = r, y[34] = l) : l = y[34], l
            }
            let F = b.hoverCard?.title ?? b.title;
            return y[35] !== F ? (l = (0, n.jsx)("div", {
                className: "line-clamp-2 font-medium break-words",
                children: F
            }), y[35] = F, y[36] = l) : l = y[36], y[37] !== b.hoverCard ? (s = b.hoverCard?.subtitle != null && (0, n.jsx)("div", {
                className: "line-clamp-2 text-xs break-words text-secondary",
                children: b.hoverCard.subtitle
            }), y[37] = b.hoverCard, y[38] = s) : s = y[38], y[39] !== l || y[40] !== s ? (h = (0, n.jsxs)("div", {
                className: "shrink-0 pb-1",
                children: [l, s]
            }), y[39] = l, y[40] = s, y[41] = h) : h = y[41], y[42] !== b.hoverCard || y[43] !== b.title ? (x = b.hoverCard?.body != null && (0, n.jsx)("div", {
                className: "max-h-48 min-h-0 overflow-y-auto border-s-2 border-default ps-2 break-words whitespace-pre-wrap",
                role: "region",
                "aria-label": b.title,
                tabIndex: 0,
                children: b.hoverCard.body
            }), y[42] = b.hoverCard, y[43] = b.title, y[44] = x) : x = y[44], y[45] !== j || y[46] !== b.hoverCard?.title || y[47] !== b.title ? (g = b.hoverCard?.title != null && (0, n.jsxs)("div", {
                className: "flex min-w-0 shrink-0 items-center gap-2 text-secondary",
                children: [j, (0, n.jsx)("div", {
                    className: "min-w-0 truncate",
                    children: b.title
                })]
            }), y[45] = j, y[46] = b.hoverCard?.title, y[47] = b.title, y[48] = g) : g = y[48], y[49] !== h || y[50] !== x || y[51] !== g ? (C = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default",
                children: [h, x, g]
            }), y[49] = h, y[50] = x, y[51] = g, y[52] = C) : C = y[52], C
        }
    }),
    JAYD: (function(e, t, a) {
        var n = a("BolX"),
            i = a("hV9T"),
            r = a("OiCI"),
            l = a("cLdu"),
            s = a("OWtl");
        let o = (0, n.d)(s.a, (e, t) => {
            let {
                get: a
            } = t, n = a(r.b);
            if (null == n) return !1;
            let s = a(l.h, {
                accountId: n,
                hostId: i.Wb,
                roots: void 0,
                productContext: "chatgpt"
            });
            return !s.isPending && !s.isError && s.data?.some(t => {
                let {
                    appIds: a,
                    plugin: n
                } = t;
                return a?.includes(e) && n.installed && n.enabled && "AVAILABLE" === n.availability && null == n.disabledReason
            }) === !0
        });
        a.d(t, {}, {
            a: o
        })
    }),
    Nfif: (function(e, t, a) {
        a.d(t, {
            a: () => x
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("hV9T"),
            s = a("zd8w"),
            o = a("oyxz"),
            c = a("BQbE"),
            d = a("bf6R"),
            u = a("E6P3"),
            m = a("zSQm"),
            p = a("WAdu"),
            f = a("a6Zv"),
            v = e => (0, n.jsxs)("svg", {
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
            h = a("ZRyR");

        function x(e) {
            let t, a, x, g, C, y, b, A = (0, i.c)(21),
                {
                    appId: _,
                    showName: I,
                    presentation: w
                } = e,
                T = void 0 !== I && I,
                j = (0, s.useContext)(p.a);
            A[0] !== _ ? (t = [_], A[0] = _, A[1] = t) : t = A[1];
            let F = "restricted" !== j;
            A[2] !== t || A[3] !== F ? (a = {
                appIds: t,
                hostId: l.Wb,
                enabled: F
            }, A[2] = t, A[3] = F, A[4] = a) : a = A[4];
            let {
                data: k
            } = (0, c.c)(a), N = k?.find(e => e.id === _), E = (0, f.a)() ? N?.iconUrlDark ?? N?.iconUrl : N?.iconUrl, O = null == E ? void 0 : (0, m.b)(E);
            A[5] !== w ? (x = "file" === w ? (0, n.jsx)("span", {
                className: (0, r.b)(h.a.connectorIcon, h.a.connectorFallback, "flex size-4.5 items-center justify-center text-secondary"),
                children: (0, n.jsx)(v, {
                    "aria-hidden": "true"
                })
            }) : (0, n.jsx)(d.Di, {}), A[5] = w, A[6] = x) : x = A[6];
            let z = x;
            A[7] !== z || A[8] !== j || A[9] !== w || A[10] !== O ? (g = "restricted" !== j && null != O ? (0, n.jsx)(u.a, {
                className: (0, r.b)("shrink-0", "file" === w ? [h.a.connectorIcon, "size-4.5"] : "size-4"),
                alt: "",
                src: O,
                fallback: z
            }, O) : z, A[7] = z, A[8] = j, A[9] = w, A[10] = O, A[11] = g) : g = A[11];
            let M = g;
            return A[12] !== M || A[13] !== w ? (C = "file" === w ? (0, n.jsx)("span", {
                className: "size-4 shrink-0",
                children: M
            }) : M, A[12] = M, A[13] = w, A[14] = C) : C = A[14], A[15] !== N?.name || A[16] !== T ? (y = T && (N?.name ?? (0, n.jsx)(o.a, {
                id: "mcpCitation.ehrSource",
                defaultMessage: "EHR",
                description: "Electronic health record source label on a chart citation preview"
            })), A[15] = N?.name, A[16] = T, A[17] = y) : y = A[17], A[18] !== C || A[19] !== y ? (b = (0, n.jsxs)(n.Fragment, {
                children: [C, y]
            }), A[18] = C, A[19] = y, A[20] = b) : b = A[20], b
        }
    }),
    JEy9: (function(e, t, a) {
        var n = a("ABep"),
            i = a("nPAz"),
            r = a("flTg"),
            l = a("tCS5"),
            s = a("Nx7n"),
            o = a("bQu7"),
            c = a("uheM"),
            d = a("LkCK"),
            u = a("uZvu"),
            m = a("QbH9"),
            p = a("QxwI"),
            f = a("gYHX"),
            v = a("lbB4"),
            h = a("u9it"),
            x = a("dECj"),
            g = a("ASxG"),
            C = a("HOLv"),
            y = a("xmjg"),
            b = a("alO6"),
            A = a("Hkqr"),
            _ = a("wE2l");
        let I = new Map([
                ["list_spaces", y.a],
                ["get_space", y.a],
                ["create_space", v.a],
                ["list_pages", h.a],
                ["find_pages", m.a],
                ["create_page", o.a],
                ["read_page", x.a],
                ["read_artifact", c.a],
                ["connect_spaces_artifact", c.a],
                ["read_page_reference", c.a],
                ["read_page_transcript", c.a],
                ["read_page_changes", s.a],
                ["edit_page", p.a],
                ["create_page_visualization", i.a],
                ["list_page_comments", l.a],
                ["manage_page_comment", l.a],
                ["search_sharing_recipients", m.a],
                ["get_page_sharing", f.a],
                ["get_space_sharing", f.a],
                ["update_page_sharing", u.a],
                ["update_space_sharing", u.a]
            ]),
            w = g.object({
                action: g.string()
            });

        function T(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = I.get(e);
            if ("manage_page_comment" === e) {
                let e = w.safeParse(t);
                e.success && "resolve" === e.data.action ? i = r.a : e.success && "react" === e.data.action && (i = d.a)
            }
            return null == i ? null : (0, n.jsx)(C.a, {
                className: "shrink-0 text-text/60",
                asset: a ? y.a : i
            })
        }
        a.d(t, {}, {
            a: function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, A.b)({
                        appContext: e.appContext,
                        apps: t,
                        functionName: e.functionName,
                        serverName: e.invocation.server,
                        toolName: e.invocation.tool
                    }),
                    r = (0, _.a)({
                        appContext: e.appContext,
                        matchingApp: i,
                        serverName: e.invocation.server,
                        toolName: e.invocation.tool
                    });
                return null == r ? null : T((0, b.d)({
                    matchingApp: r,
                    toolName: e.appContext?.actionName ?? e.invocation.tool
                }), e.invocation.arguments, a) ?? (0, n.jsx)(C.a, {
                    className: "shrink-0 text-text/60",
                    asset: y.a
                })
            },
            b: T
        })
    }),
    xsLm: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e, t) {
                let a, {
                    threshold: n = .5,
                    isInViewport: i,
                    isEligible: r,
                    subscribe: l
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("u" < typeof IntersectionObserver) return;
                let s = e.ownerDocument,
                    o = !1,
                    c = !1;

                function d() {
                    !c && o && "hidden" !== s.visibilityState && e.isConnected && e.checkVisibility?.({
                        checkOpacity: !0,
                        visibilityProperty: !0
                    }) && (r?.() ?? !0) && t() && p()
                }
                let u = new IntersectionObserver(e => {
                    let t = e[0];
                    o = i?.(e) ?? (null != t && t.isIntersecting && t.intersectionRatio >= n), d()
                }, {
                    threshold: n
                });

                function m() {
                    o = !1, u.disconnect(), u.takeRecords(), c || "visible" !== s.visibilityState || u.observe(e)
                }

                function p() {
                    c = !0, u.disconnect(), s.removeEventListener("visibilitychange", m), a?.()
                }
                return s.addEventListener("visibilitychange", m), a = l?.(d, m), m(), p
            }
        })
    }),
    XSLO: (function(e, t, a) {
        var n = a("hV9T"),
            i = a("Qgfj"),
            r = a("rS3J"),
            l = a("EULo");
        let s = /(?:^|[\\/])visualizations(?:[\\/"'\s;]|$)/i,
            o = /(?:^|\s)(?:apply_patch|mkdir|tee|touch|cp|mv|install)(?:\s|$)|(?:^|[^<])>>?/,
            c = /\*\*\* Add File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            d = /\*\*\* Update File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            u = /\*\*\* Delete File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            m = `${n.nb}@${n.Yc}`,
            p = `${n.nb}@${n.Zc}`,
            f = `${n.nb}@${n._c}`,
            v = /^plugin:\/\/([^?]+)(?:\?|$)/i,
            h = /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
            x = (0, i.f)({
                activeCreating: {
                    id: "codex.visualization.activity.active.creating",
                    defaultMessage: "<action>Creating</action> <detail>visualization</detail>",
                    description: "Active tool activity summary while Codex creates an inline visualization"
                },
                activeUpdating: {
                    id: "codex.visualization.activity.active.updating",
                    defaultMessage: "<action>Updating</action> <detail>visualization</detail>",
                    description: "Active tool activity summary while Codex updates an inline visualization"
                },
                rowCreating: {
                    id: "codex.visualization.activity.row.creating",
                    defaultMessage: "<verb>Creating</verb> visualization",
                    description: "Tool activity row while Codex creates an inline visualization"
                },
                rowCreated: {
                    id: "codex.visualization.activity.row.created",
                    defaultMessage: "<verb>Created</verb> visualization",
                    description: "Tool activity row after Codex creates an inline visualization"
                },
                rowUpdating: {
                    id: "codex.visualization.activity.row.updating",
                    defaultMessage: "<verb>Updating</verb> visualization",
                    description: "Tool activity row while Codex updates an inline visualization"
                },
                rowUpdated: {
                    id: "codex.visualization.activity.row.updated",
                    defaultMessage: "<verb>Updated</verb> visualization",
                    description: "Tool activity row after Codex updates an inline visualization"
                },
                summaryCreatingLeading: {
                    id: "codex.visualization.activity.summary.creating.leading",
                    defaultMessage: "Creating visualization",
                    description: "Leading collapsed tool activity summary while Codex creates an inline visualization"
                },
                summaryCreating: {
                    id: "codex.visualization.activity.summary.creating",
                    defaultMessage: "creating visualization",
                    description: "Collapsed tool activity summary while Codex creates an inline visualization"
                },
                summaryCreatedLeading: {
                    id: "codex.visualization.activity.summary.created.leading",
                    defaultMessage: "Created visualization",
                    description: "Leading collapsed tool activity summary after Codex creates an inline visualization"
                },
                summaryCreated: {
                    id: "codex.visualization.activity.summary.created",
                    defaultMessage: "created visualization",
                    description: "Collapsed tool activity summary after Codex creates an inline visualization"
                },
                summaryUpdatingLeading: {
                    id: "codex.visualization.activity.summary.updating.leading",
                    defaultMessage: "Updating visualization",
                    description: "Leading collapsed tool activity summary while Codex updates an inline visualization"
                },
                summaryUpdating: {
                    id: "codex.visualization.activity.summary.updating",
                    defaultMessage: "updating visualization",
                    description: "Collapsed tool activity summary while Codex updates an inline visualization"
                },
                summaryUpdatedLeading: {
                    id: "codex.visualization.activity.summary.updated.leading",
                    defaultMessage: "Updated visualization",
                    description: "Leading collapsed tool activity summary after Codex updates an inline visualization"
                },
                summaryUpdated: {
                    id: "codex.visualization.activity.summary.updated",
                    defaultMessage: "updated visualization",
                    description: "Collapsed tool activity summary after Codex updates an inline visualization"
                }
            });
        a.d(t, {}, {
            a: function(e) {
                let {
                    intl: t,
                    kind: a,
                    isFinished: n,
                    isLeadingSegment: i
                } = e;
                switch (a) {
                    case "create":
                        if (n) return i ? t.formatMessage(x.summaryCreatedLeading) : t.formatMessage(x.summaryCreated);
                        return i ? t.formatMessage(x.summaryCreatingLeading) : t.formatMessage(x.summaryCreating);
                    case "update":
                        if (n) return i ? t.formatMessage(x.summaryUpdatedLeading) : t.formatMessage(x.summaryUpdated);
                        return i ? t.formatMessage(x.summaryUpdatingLeading) : t.formatMessage(x.summaryUpdating)
                }
            },
            b: function(e) {
                return s.test(e) && o.test(e) ? c.test(e) ? "create" : d.test(e) ? "update" : u.test(e) ? null : "create" : null
            },
            c: function(e, t) {
                let a = [e];
                for (let e of t) "userMessage" === e.type && a.push(e.content), "steeringUserMessage" === e.type && "accepted" === e.status && a.push(e.input);
                let n = !1;
                for (let e of a)
                    for (let t of e) {
                        if ("text" !== t.type) continue;
                        h.test(t.text) && (n = !0);
                        let e = 0;
                        for (; e < t.text.length;) {
                            let a = (0, r.d)(t.text, e);
                            if (null == a) break;
                            let n = v.exec((0, l.c)(a.path))?.[1]?.trim().toLowerCase();
                            if (n === m || n === p || n === f) return "explicit";
                            e = a.end
                        }
                    }
                return n ? "soft" : "none"
            },
            d: function(e) {
                return e?.isSkillDefinitionFile === !0 && ("visualize" === e.skillId.toLowerCase() || e.pluginId?.toLowerCase() === "visualize" && ("live" === e.skillId.toLowerCase() || "persisted" === e.skillId.toLowerCase()))
            },
            e: function(e) {
                if (null == e) return !0;
                switch (e) {
                    case "inProgress":
                    case "completed":
                        return !0;
                    case "failed":
                    case "declined":
                    case "interrupted":
                        return !1
                }
            },
            f: x
        })
    })
};