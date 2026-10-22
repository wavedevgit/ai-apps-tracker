export const __rspack_esm_id = 155568;
export const __rspack_esm_ids = [155568];
export const __webpack_modules__ = {
    N2k: (function(e, t) {
        t.a = {
            bubble: "bubble-vBnidZ",
            leadingBubble: "leadingBubble-cWMRcI",
            compactMessageReaction: "compactMessageReaction-eDrjpw",
            compactMessageBubble: "compactMessageBubble-Th2OJ3",
            compactMessageContainer: "compactMessageContainer-yKAwtr",
            otherUserMessage: "otherUserMessage-ybPhKI",
            accentedBubble: "accentedBubble-gDhvQY",
            temporaryBubble: "temporaryBubble-aTxSAp",
            temporaryOutline: "temporaryOutline-bbkcxS"
        }
    }),
    Sj: (function(e, t, n) {
        (0, n("I").f)({
            jitless: !0
        })
    }),
    Fv: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("on"),
            i = n("aM"),
            l = n("zd"),
            s = n("B8U"),
            c = n("u2d"),
            u = n("bi"),
            d = n("HOL"),
            p = n("bf"),
            f = n("E6P"),
            g = n("a6");

        function h(e) {
            let t, n, i, u, h, v, x = (0, a.c)(40),
                {
                    alt: w,
                    appInfo: y,
                    className: _,
                    connectorId: S,
                    knownAppId: k,
                    loadRemote: I,
                    logoUrl: E,
                    logoDarkUrl: M,
                    fallback: C,
                    monochrome: A,
                    presentation: T,
                    preferRemote: j,
                    size: R
                } = e,
                N = void 0 === I || I,
                F = void 0 !== A && A,
                D = void 0 !== j && j,
                P = !0 === (0, g.a)();
            if (x[0] !== y || x[1] !== _ || x[2] !== S || x[3] !== C || x[4] !== P || x[5] !== k || x[6] !== N || x[7] !== M || x[8] !== E || x[9] !== D || x[10] !== T || x[11] !== R) {
                u = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a;t = (0, o.b)(20 === R ? "size-5 rounded-sm" : "rounded-2xs", _),
                    x[16] !== y || x[17] !== S || x[18] !== P || x[19] !== k || x[20] !== M || x[21] !== E || x[22] !== T || x[23] !== R ? (e = function(e) {
                        let {
                            logoUrl: t,
                            logoDarkUrl: n,
                            isDarkTheme: r
                        } = e, a = m(t), o = m(n);
                        return r ? o ?? a : a ?? o
                    }({
                        logoUrl: E ?? y?.logoUrl,
                        logoDarkUrl: M ?? y?.logoUrlDark,
                        isDarkTheme: P
                    }), a = T ?? (0, s.c)(S, R) ?? (null == y ? null : (0, s.d)(y, R)) ?? (0, s.c)((0, c.c)(e)?.connectorId, R) ?? (0, s.c)(k, R), x[16] = y, x[17] = S, x[18] = P, x[19] = k, x[20] = M, x[21] = E, x[22] = T, x[23] = R, x[24] = e, x[25] = a) : (e = x[24], a = x[25]);
                    let f = a,
                        g = f?.icon,
                        h = null == g ? null : (0, r.jsx)(g, {
                            className: g === p.uf ? (0, o.b)("rounded-2xs", _) : t,
                            "aria-hidden": !0
                        });
                    if (null != h && !(D && N && null != e)) {
                        u = h;
                        break e
                    }
                    n = (D && N ? e : null) ?? f?.iconUrl ?? (N ? e : null),
                    i = h ?? ("asset" in C ? (0, r.jsx)("span", {
                        className: "inline-flex shrink-0",
                        children: (0, r.jsx)(d.a, {
                            ...C
                        })
                    }) : (0, l.cloneElement)(C, {
                        className: (0, o.b)(t, C.props.className)
                    }))
                }
                x[0] = y, x[1] = _, x[2] = S, x[3] = C, x[4] = P, x[5] = k, x[6] = N, x[7] = M, x[8] = E, x[9] = D, x[10] = T, x[11] = R, x[12] = t, x[13] = n, x[14] = i, x[15] = u
            } else t = x[12], n = x[13], i = x[14], u = x[15];
            if (u !== Symbol.for("react.early_return_sentinel")) return u;
            let $ = i;
            if (null == n) return $;
            x[26] !== n ? (h = (0, c.c)(n), x[26] = n, x[27] = h) : h = x[27];
            let B = h;
            if (null != B) {
                let e;
                return x[28] !== w || x[29] !== B || x[30] !== $ || x[31] !== t || x[32] !== F ? (e = (0, r.jsx)(b, {
                    className: t,
                    alt: w,
                    connectorLogoRequest: B,
                    fallback: $,
                    monochrome: F
                }), x[28] = w, x[29] = B, x[30] = $, x[31] = t, x[32] = F, x[33] = e) : e = x[33], e
            }
            return x[34] !== w || x[35] !== $ || x[36] !== t || x[37] !== F || x[38] !== n ? (v = (0, r.jsx)(f.a, {
                className: t,
                alt: w,
                src: n,
                fallback: $,
                monochrome: F
            }, n), x[34] = w, x[35] = $, x[36] = t, x[37] = F, x[38] = n, x[39] = v) : v = x[39], v
        }

        function m(e) {
            let t = e?.trim();
            return null == t || 0 === t.length ? null : t.startsWith("/images/") ? new URL(t, i.tb).href : t
        }

        function b(e) {
            let t, n = (0, a.c)(6),
                {
                    className: o,
                    alt: i,
                    connectorLogoRequest: l,
                    fallback: s,
                    monochrome: c
                } = e,
                d = (0, u.o)(l);
            return null == d ? s : (n[0] !== i || n[1] !== o || n[2] !== s || n[3] !== c || n[4] !== d ? (t = (0, r.jsx)(f.a, {
                className: o,
                alt: i,
                fallback: s,
                src: d,
                monochrome: c
            }, d), n[0] = i, n[1] = o, n[2] = s, n[3] = c, n[4] = d, n[5] = t) : t = n[5], t)
        }
        n.d(t, {
            a: () => h
        })
    }),
    Cau: (function(e, t, n) {
        var r = n("TP");

        function a(e) {
            let {
                clickAction: t,
                clickSource: n,
                context: a,
                productLogger: o,
                resourceKind: i
            } = e, l = function(e) {
                switch (e) {
                    case "document":
                        return r.CodexGoogleWorkspaceResourceKind.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_DOCUMENT;
                    case "spreadsheet":
                        return r.CodexGoogleWorkspaceResourceKind.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_SPREADSHEET;
                    case "presentation":
                        return r.CodexGoogleWorkspaceResourceKind.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_PRESENTATION;
                    default:
                        return null
                }
            }(i);
            null != l && o.logProductEvent(r.CodexGoogleWorkspaceResourceClicked, {
                threadId: a.threadId ?? void 0,
                turnId: a.turnId ?? void 0,
                inputMessageId: a.inputMessageId ?? void 0,
                messageId: a.messageId ?? void 0,
                resourceKind: l,
                clickAction: t,
                clickSource: n
            })
        }
        n.d(t, {
            a: () => a
        })
    }),
    zvi: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("TP"),
            i = n("ir"),
            l = n("Xnl"),
            s = n("oy"),
            c = n("bi"),
            u = n("OiC"),
            d = n("ipI"),
            p = n("bq"),
            f = n("Ot7"),
            g = n("RN"),
            h = n("vB"),
            m = n("aN"),
            b = n("Bbr"),
            v = n("yG"),
            x = n("OW"),
            w = n("Sd"),
            y = n("tSE"),
            _ = n("ec"),
            S = n("hZa"),
            k = n("bn"),
            I = n("THv"),
            E = n("Cau"),
            M = n("wjy"),
            C = n("I0P");

        function A(e) {
            let t, n, o = (0, a.c)(5),
                i = (0, S.h)("2546594521");
            o[0] !== e ? (t = "path" in e ? (0, M.f)(e.path) : e.targetType, o[0] = e, o[1] = t) : t = o[1];
            let l = t;
            return i || null == l ? null : (o[2] !== e || o[3] !== l ? (n = (0, r.jsx)(R, {
                ...e,
                targetType: l
            }), o[2] = e, o[3] = l, o[4] = n) : n = o[4], n)
        }

        function T(e) {
            let t, n, o, s = (0, a.c)(13),
                {
                    app: d,
                    hostId: p,
                    onClose: f,
                    onOAuthStarted: g
                } = e,
                h = (0, l.z)(x.a),
                m = (0, i.c)(),
                b = (0, S.h)("403472035");
            return s[0] !== f ? (t = e => {
                e || f()
            }, s[0] = f, s[1] = t) : t = s[1], s[2] !== p || s[3] !== m || s[4] !== h || s[5] !== b ? (n = async () => {
                await (0, c.k)({
                    scope: h,
                    accountId: (0, u.c)(h),
                    hostId: p,
                    queryClient: m,
                    shouldUseNewAppLifecycle: b
                })
            }, s[2] = p, s[3] = m, s[4] = h, s[5] = b, s[6] = n) : n = s[6], s[7] !== d || s[8] !== p || s[9] !== g || s[10] !== t || s[11] !== n ? (o = (0, r.jsx)(_.a, {
                app: d,
                hostId: p,
                onOpenChange: t,
                onConnected: n,
                onOAuthStarted: g
            }), s[7] = d, s[8] = p, s[9] = g, s[10] = t, s[11] = n, s[12] = o) : o = s[12], o
        }

        function j() {
            let e, t = (0, a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsxs)("span", {
                className: "pointer-events-auto inline-flex h-token-button-composer shrink-0 cursor-default items-center gap-1.5 text-base leading-[18px] text-secondary",
                role: "status",
                children: [(0, r.jsx)(g.a, {
                    className: "icon-s"
                }), (0, r.jsx)(s.a, {
                    id: "connectedApps.googleDrive.openingStatus",
                    defaultMessage: "Opening",
                    description: "Status shown in place of the open button while exporting a file to a Google app"
                })]
            }), t[0] = e) : e = t[0], e
        }

        function R(e) {
            let t, n, i, c, u, h, m, b, x = (0, a.c)(39),
                _ = (0, l.z)(y.a),
                S = (0, l.A)(v.c),
                {
                    analyticsClickSource: A,
                    analyticsContext: T,
                    getAnalyticsContext: j,
                    handleConnectApp: R,
                    hostId: D,
                    iconSize: P,
                    isOpening: $,
                    keepOpenWhileOpening: B,
                    onCloseDropdown: O,
                    onBeforeFileRead: L,
                    onOpeningChange: q,
                    targetType: z,
                    title: G
                } = e,
                U = void 0 !== B && B;
            x[0] !== R || x[1] !== D ? (t = {
                hostId: D,
                handleConnectApp: R
            }, x[0] = R, x[1] = D, x[2] = t) : t = x[2];
            let {
                exportToGoogleDrive: K,
                isPending: W
            } = (0, C.b)(t);
            x[3] !== A || x[4] !== T || x[5] !== K || x[6] !== j || x[7] !== D || x[8] !== $ || x[9] !== L || x[10] !== q || x[11] !== S || x[12] !== e || x[13] !== _ || x[14] !== z || x[15] !== G ? (n = async t => {
                let n;
                if ($) return;
                q(!0), n = "path" in e ? null == e.cwd ? e.path : (0, k.r)(e.cwd, e.path) : e.sourceId;
                let r = null;
                await K({
                    targetType: z,
                    title: G,
                    disposition: t,
                    onBeforeFileRead: () => (r = (0, w.n)(_), L?.()),
                    readUploadFile: "path" in e ? () => (0, M.h)({
                        hostId: D,
                        path: n
                    }) : e.readUploadFile,
                    onBeforeUpload: () => {
                        let e = null == j ? T : j();
                        (0, E.a)({
                            clickAction: o.CodexGoogleWorkspaceResourceClickAction.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE,
                            clickSource: A,
                            context: {
                                threadId: e?.threadId ?? null,
                                turnId: e?.turnId ?? null,
                                inputMessageId: e?.inputMessageId ?? null,
                                messageId: e?.messageId ?? null
                            },
                            productLogger: S,
                            resourceKind: z
                        })
                    },
                    onUploaded: t => {
                        let {
                            url: a,
                            fileName: o
                        } = t, i = (0, C.a)(z), l = "path" in e ? n : o, s = G?.trim(), c = {
                            kind: "context",
                            untrusted: !1,
                            id: `google-drive-open:${z}:${n}`,
                            modelContextUpdateId: crypto.randomUUID(),
                            imageAttachments: [],
                            text: `The user uploaded ${null==s||0===s.length?l:`${s} from ${l}`} to ${i}.
${i} link: ${a}`,
                            sourceName: i
                        };
                        null != r && (0, d.g)(r, c)
                    }
                }).finally(() => {
                    q(!1)
                })
            }, x[3] = A, x[4] = T, x[5] = K, x[6] = j, x[7] = D, x[8] = $, x[9] = L, x[10] = q, x[11] = S, x[12] = e, x[13] = _, x[14] = z, x[15] = G, x[16] = n) : n = x[16];
            let H = n,
                Q = $ || W;
            return x[17] !== $ || x[18] !== z ? (i = $ ? (0, r.jsx)(g.a, {}) : (0, r.jsx)(F, {
                targetType: z
            }), x[17] = $, x[18] = z, x[19] = i) : i = x[19], x[20] !== P || x[21] !== i ? (c = (0, r.jsx)(I.b, {
                size: P,
                children: i
            }), x[20] = P, x[21] = i, x[22] = c) : c = x[22], x[23] !== U || x[24] !== O || x[25] !== H ? (u = e => {
                let t = (0, f.a)(e);
                null != t && (e.preventDefault(), e.stopPropagation(), H(t).finally(() => {
                    U && O?.()
                }), U || O?.())
            }, h = e => {
                U && e.preventDefault(), H().finally(() => {
                    U && O?.()
                }), U || O?.()
            }, x[23] = U, x[24] = O, x[25] = H, x[26] = u, x[27] = h) : (u = x[26], h = x[27]), x[28] !== $ || x[29] !== e.labelVariant || x[30] !== z ? (m = $ ? (0, r.jsx)("span", {
                role: "status",
                children: (0, r.jsx)(s.a, {
                    id: "connectedApps.googleDrive.exporting",
                    defaultMessage: "Exporting to {app}…",
                    description: "Loading state in the Google export menu item while uploading an artifact",
                    values: {
                        app: (0, C.a)(z)
                    }
                })
            }) : (0, r.jsx)(N, {
                targetType: z,
                variant: e.labelVariant
            }), x[28] = $, x[29] = e.labelVariant, x[30] = z, x[31] = m) : m = x[31], x[32] !== $ || x[33] !== Q || x[34] !== c || x[35] !== u || x[36] !== h || x[37] !== m ? (b = (0, r.jsx)(p.c.Item, {
                "aria-busy": $,
                disabled: Q,
                leftIcon: c,
                onClickCapture: u,
                onSelect: h,
                children: m
            }), x[32] = $, x[33] = Q, x[34] = c, x[35] = u, x[36] = h, x[37] = m, x[38] = b) : b = x[38], b
        }

        function N(e) {
            let t = (0, a.c)(7),
                {
                    targetType: n,
                    variant: o
                } = e;
            if ("app" === o) {
                let e, a;
                return t[0] !== n ? (e = (0, C.a)(n), t[0] = n, t[1] = e) : e = t[1], t[2] !== e ? (a = (0, r.jsx)(s.a, {
                    id: "connectedApps.googleDrive.appName",
                    defaultMessage: "{app}",
                    description: "Google app name in an Open in menu section; app is the product name Google Docs, Google Sheets, or Google Slides and should remain untranslated",
                    values: {
                        app: e
                    }
                }), t[2] = e, t[3] = a) : a = t[3], a
            }
            switch (n) {
                case "document": {
                    let e;
                    return t[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                        id: "connectedApps.googleDrive.openInDocs",
                        defaultMessage: "Export to Google Docs",
                        description: "Dropdown item for exporting a file to Google Docs"
                    }), t[4] = e) : e = t[4], e
                }
                case "spreadsheet": {
                    let e;
                    return t[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                        id: "connectedApps.googleDrive.openInSheets",
                        defaultMessage: "Export to Google Sheets",
                        description: "Dropdown item for exporting a file to Google Sheets"
                    }), t[5] = e) : e = t[5], e
                }
                case "presentation": {
                    let e;
                    return t[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                        id: "connectedApps.googleDrive.openInSlides",
                        defaultMessage: "Export to Google Slides",
                        description: "Dropdown item for exporting a file to Google Slides"
                    }), t[6] = e) : e = t[6], e
                }
            }
        }

        function F(e) {
            let t = (0, a.c)(3),
                {
                    targetType: n
                } = e;
            switch (n) {
                case "document": {
                    let e;
                    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(h.a, {
                        "aria-hidden": !0,
                        className: "size-full"
                    }), t[0] = e) : e = t[0], e
                }
                case "spreadsheet": {
                    let e;
                    return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(m.a, {
                        "aria-hidden": !0,
                        className: "size-full"
                    }), t[1] = e) : e = t[1], e
                }
                case "presentation": {
                    let e;
                    return t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(b.a, {
                        "aria-hidden": !0,
                        className: "size-full"
                    }), t[2] = e) : e = t[2], e
                }
            }
        }
        n.d(t, {
            a: () => T,
            b: () => j,
            c: () => A
        })
    }),
    wjy: (function(e, t, n) {
        var r = n("fGz"),
            a = n("yI"),
            o = n("bn"),
            i = n("GD");
        class l extends Error {
            constructor() {
                super("Google Drive connector authentication is required."), this.name = "GoogleDriveConnectorAuthError"
            }
        }
        let s = "Unsupported file type. Expected one of: .docx, .pptx, .xlsx.",
            c = /https?:\/\/(?:docs|drive)\.google\.com\/[^\s"'<>),]+/i;

        function u(e) {
            switch (x(e)) {
                case "docx":
                    return "document";
                case "xlsx":
                    return "spreadsheet";
                case "pptx":
                    return "presentation";
                default:
                    return null
            }
        }

        function d(e) {
            return e.find(e => "connector_5f3c8c41a1e54ad7a76272c89e2554fa" === e.id || [e.id, e.name, ...e.pluginDisplayNames].some(e => "google-drive" === w(e))) ?? null
        }

        function p(e) {
            let t = d(e);
            return t?.isAccessible === !0 && t.isEnabled
        }

        function f(e) {
            return e.find(e => [e.plugin.id.split("@")[0], e.plugin.name, e.displayName].some(e => null != e && "google-drive" === w(e))) ?? null
        }

        function g(e) {
            let {
                apps: t,
                plugin: n
            } = e;
            if (null != t && p(t)) return {
                kind: "upload"
            };
            if (null == n) return {
                kind: "refresh"
            };
            if (!n.plugin.installed) return {
                kind: "installPlugin",
                plugin: n
            };
            if (!n.plugin.enabled) return {
                kind: "enablePlugin",
                plugin: n
            };
            if (null == t) return {
                kind: "refresh"
            };
            let r = d(t);
            return null == r ? {
                kind: "refresh"
            } : !0 === r.isAccessible && !1 === r.isEnabled ? {
                app: r,
                kind: "openPluginDetail",
                plugin: n
            } : {
                app: r,
                kind: "connectApp"
            }
        }
        async function h(e) {
            let {
                hostId: t,
                path: n
            } = e;
            if (null == u(n)) throw Error(s);
            let i = await (0, r.a)({
                hostId: t,
                path: n
            });
            if (null == i.contentsBase64) throw Error("File contents are unavailable.");
            return {
                bytes: (0, a.a)(i.contentsBase64),
                contentType: function(e) {
                    switch (x(e)) {
                        case "docx":
                            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                        case "pptx":
                            return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
                        case "xlsx":
                            return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                        default:
                            return "application/octet-stream"
                    }
                }(n),
                fileName: (0, o.k)(n)
            }
        }
        async function m(e) {
            let {
                bytes: t,
                contentType: n,
                fileName: r,
                title: a
            } = e;
            if (null == u(r)) throw Error(s);
            let o = function(e) {
                    var t;
                    let {
                        fileBytes: n,
                        filename: r,
                        mimeType: a,
                        title: o
                    } = e, i = `----codex-google-drive-${Math.random().toString(36).slice(2)}`, l = [], s = e => {
                        l.push(new TextEncoder().encode(e))
                    };
                    return t = JSON.stringify({
                        title: o
                    }), s(`--${i}\r
Content-Disposition: form-data; name="${y("arguments")}"\r
\r
${t}\r
`), s(`--${i}\r
Content-Disposition: form-data; name="file"; filename="${y(r)}"\r
Content-Type: ${a}\r
\r
`), l.push(n), s(`\r
--${i}--\r
`), {
                        body: function(e) {
                            let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                                n = 0;
                            for (let r of e) t.set(r, n), n += r.length;
                            return t
                        }(l),
                        boundary: i
                    }
                }({
                    fileBytes: t,
                    filename: r,
                    mimeType: n,
                    title: a ?? r
                }),
                c = await i.b.getInstance().fetch("/wham/apps/google_drive/upload", {
                    method: "POST",
                    body: o.body,
                    headers: {
                        "Content-Type": `multipart/form-data; boundary=${o.boundary}`
                    }
                }),
                d = await c.json(),
                p = d.connector_result;
            if (function(e) {
                    let t = e._meta;
                    if (null == t || "object" != typeof t || Array.isArray(t)) return !1;
                    let n = t._codex_apps;
                    if (null == n || "object" != typeof n || Array.isArray(n)) return !1;
                    let r = n.connector_auth_failure;
                    return null != r && "object" == typeof r && !Array.isArray(r) && !0 === r.is_auth_failure
                }(p)) throw new l;
            if (!0 === p.isError) throw Error("Google Drive could not open this file.");
            return d
        }

        function b(e) {
            let t = e.connector_result,
                n = t.structuredContent;
            if (null != n && "object" == typeof n && !Array.isArray(n)) {
                let e = v(n.url) ?? v(n.webViewLink);
                if (null != e) return e
            }
            for (let e of t.content) {
                if (null == e || "object" != typeof e || Array.isArray(e) || "text" !== e.type) continue;
                let t = v(e.text);
                if (null != t) return t
            }
            return null
        }

        function v(e) {
            if ("string" != typeof e) return null;
            let t = e.match(c)?.[0] ?? null;
            return t?.replace(/[.;:!?]+$/, "") ?? null
        }

        function x(e) {
            let t = (0, o.k)(e),
                n = t.lastIndexOf(".");
            return n < 0 ? "" : t.slice(n + 1).toLowerCase()
        }

        function w(e) {
            return e.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")
        }

        function y(e) {
            return e.replace(/[\r\n"]/g, "_")
        }
        n.d(t, {
            a: () => l,
            b: () => b,
            c: () => d,
            d: () => f,
            e: () => g,
            f: () => u,
            g: () => p,
            h: () => h,
            i: () => m
        })
    }),
    I0P: (function(e, t, n) {
        var r = n("Qo"),
            a = n("Xnl"),
            o = n("aM"),
            i = n("Ha"),
            l = n("Wf"),
            s = n("Qg"),
            c = n("HZ"),
            u = n("bi"),
            d = n("Ot7"),
            p = n("SGs"),
            f = n("rO"),
            g = n("uU"),
            h = n("a0"),
            m = n("nt"),
            b = n("jEy"),
            v = n("ugf"),
            x = n("EE"),
            w = n("cLd"),
            y = n("mq"),
            _ = n("ueu"),
            S = n("Gg2"),
            k = n("OW"),
            I = n("wjy");

        function E(e) {
            let t, n, o, s, g, E, j, R, N, F, D, P, $, B, O, L, q, z, G, U = (0, r.c)(61),
                {
                    hostId: K,
                    handleConnectApp: W,
                    enabled: H
                } = e,
                Q = void 0 === H || H,
                V = (0, a.z)(k.a),
                X = (0, l.a)(),
                Z = (0, c.Z)();
            U[0] !== Q || U[1] !== K ? (t = {
                hostId: K,
                enabled: Q
            }, U[0] = Q, U[1] = K, U[2] = t) : t = U[2];
            let {
                data: J,
                hardRefetchAppsList: Y
            } = (0, u.m)(t);
            U[3] !== Q || U[4] !== K ? (n = {
                hostId: K,
                enabled: Q
            }, U[3] = Q, U[4] = K, U[5] = n) : n = U[5];
            let ee = (0, f.a)(n);
            U[6] !== K || U[7] !== ee ? (o = {
                hostId: K,
                roots: void 0,
                resolveActiveRoots: !0,
                enabled: ee
            }, U[6] = K, U[7] = ee, U[8] = o) : o = U[8];
            let {
                data: et,
                refetch: en
            } = (0, w.l)(o);
            U[9] !== et ? (s = null == et ? null : (0, I.d)(et), U[9] = et, U[10] = s) : s = U[10];
            let er = s,
                ea = (0, a.x)(Q ? y.a : null, K);
            if (U[11] !== K || U[12] !== ea) {
                let e = (g = (0, w.i)(K)) || !0 === ea;
                E = a.x, j = x.k, R = C(K, e), U[11] = K, U[12] = ea, U[13] = g, U[14] = E, U[15] = j, U[16] = R
            } else g = U[13], E = U[14], j = U[15], R = U[16];
            let eo = ee && null != et && null == er && (g || null != ea);
            U[17] !== eo ? (N = {
                enabled: eo
            }, U[17] = eo, U[18] = N) : N = U[18];
            let {
                data: ei
            } = E(j, R, N), {
                installPlugin: el,
                status: es
            } = (0, m.e)();
            U[19] !== K ? (F = {
                hostId: K
            }, U[19] = K, U[20] = F) : F = U[20];
            let {
                pendingPluginId: ec,
                setPluginEnabled: eu
            } = (0, v.d)(F);
            U[21] !== ei || U[22] !== er ? (D = er ?? (null == ei ? null : (0, _.b)(ei)), U[21] = ei, U[22] = er, U[23] = D) : D = U[23];
            let ed = D,
                ep = ec === ed?.plugin.id;
            U[24] !== K || U[25] !== g || U[26] !== ee || U[27] !== en || U[28] !== V ? (P = async () => {
                if (!ee) return null;
                let {
                    data: e
                } = await en(), t = null == e ? null : (0, I.d)(e);
                if (null != t) return t;
                g || null != V.get(y.a, K) || await V.query.getOrFetch(S.b, K);
                let n = await V.query.fetch(x.k, C(K, g || !0 === V.get(y.a, K))).catch(M);
                return null == n ? null : (0, _.b)(n)
            }, U[24] = K, U[25] = g, U[26] = ee, U[27] = en, U[28] = V, U[29] = P) : P = U[29];
            let ef = P;
            U[30] !== K || U[31] !== Z ? ($ = e => {
                Z((0, b.g)(e, {
                    hostId: K
                }))
            }, U[30] = K, U[31] = Z, U[32] = $) : $ = U[32];
            let eg = $;
            U[33] !== K || U[34] !== el || U[35] !== ef ? (B = e => {
                el(e, {
                    hostId: K,
                    marketplaceAnalytics: h.b.composer,
                    onSuccess: async () => {
                        await ef()
                    }
                })
            }, U[33] = K, U[34] = el, U[35] = ef, U[36] = B) : B = U[36];
            let eh = B;
            U[37] !== X || U[38] !== eh || U[39] !== V ? (O = e => {
                let t = V.get(p.h).warning(X.formatMessage(T.installRequired), {
                    primaryAction: {
                        label: X.formatMessage(T.installAction),
                        onClick: () => {
                            t.close(), eh(e)
                        }
                    }
                })
            }, U[37] = X, U[38] = eh, U[39] = V, U[40] = O) : O = U[40];
            let em = O;
            U[41] !== W || U[42] !== X || U[43] !== V ? (L = e => {
                let t = V.get(p.h).warning(X.formatMessage(T.authFailure), {
                    primaryAction: {
                        label: X.formatMessage(T.connectAction),
                        onClick: async () => {
                            t.close(), await W(e)
                        }
                    }
                })
            }, U[41] = W, U[42] = X, U[43] = V, U[44] = L) : L = U[44];
            let eb = L;
            U[45] !== eu ? (q = async e => {
                try {
                    await eu({
                        pluginDisplayName: (0, i.a)(e),
                        pluginId: e.plugin.id,
                        enabled: !0
                    })
                } catch {
                    return
                }
            }, U[45] = eu, U[46] = q) : q = U[46];
            let ev = q;
            U[47] !== J || U[48] !== ev || U[49] !== ed || U[50] !== Y || U[51] !== X || U[52] !== eg || U[53] !== ef || U[54] !== V || U[55] !== eb || U[56] !== em ? (z = async e => {
                let {
                    targetType: t,
                    readUploadFile: n,
                    title: r,
                    onBeforeFileRead: a,
                    onBeforeUpload: o,
                    onUploaded: i,
                    disposition: l,
                    signal: s,
                    assertRequestCurrent: c
                } = e, u = () => {
                    s?.throwIfAborted(), c?.()
                }, f = async () => {
                    if (null != a && await a() === !1) return;
                    u(), o?.();
                    let e = await n();
                    u();
                    let s = await (0, I.i)({
                        ...e,
                        title: r
                    });
                    u();
                    let c = (0, I.b)(s);
                    if (null != c) {
                        i?.({
                            url: c,
                            fileName: e.fileName
                        }), (0, d.f)({
                            disposition: l,
                            href: c,
                            initiator: "mcp_app_resource"
                        });
                        return
                    }
                    V.get(p.h).success(X.formatMessage({
                        id: "connectedApps.googleDrive.opened",
                        defaultMessage: "Opened in {app}",
                        description: "Toast shown after a file was opened in a connected Google app but no URL was returned."
                    }, {
                        app: A(t)
                    }))
                }, g = null == J ? null : (0, I.c)(J);
                try {
                    u();
                    let e = (0, I.e)({
                        apps: J,
                        plugin: ed
                    });
                    switch (e.kind) {
                        case "upload":
                            return void await f();
                        case "installPlugin":
                            return void em(e.plugin);
                        case "enablePlugin":
                            return void await ev(e.plugin);
                        case "connectApp":
                            return void eb(e.app);
                        case "openPluginDetail":
                            return void eg(e.plugin)
                    }
                    let [t, n] = await Promise.all([Y(), ef()]);
                    u();
                    let r = (0, I.c)(t);
                    if (g = r, (0, I.g)(t)) return void await f();
                    if (n?.plugin.installed !== !0) {
                        if (null != n) return void em(n);
                        V.get(p.h).warning(X.formatMessage(T.authFailure));
                        return
                    }
                    if (!n.plugin.enabled) return void await ev(n);
                    if (r?.isAccessible === !0 && !1 === r.isEnabled) return void eg(n);
                    if (null != r) return void eb(r);
                    V.get(p.h).warning(X.formatMessage(T.authFailure))
                } catch (e) {
                    if (s?.aborted) return;
                    e instanceof I.a ? null == g ? V.get(p.h).warning(X.formatMessage(T.authFailure)) : eb(g) : V.get(p.h).danger(X.formatMessage({
                        id: "connectedApps.googleDrive.openFailed",
                        defaultMessage: "Could not open in {app}",
                        description: "Toast shown when opening a local file in a connected Google app fails."
                    }, {
                        app: A(t)
                    }), {
                        errorAnalytics: {
                            toastId: "connectedApps.googleDrive.openFailed"
                        }
                    })
                }
            }, U[47] = J, U[48] = ev, U[49] = ed, U[50] = Y, U[51] = X, U[52] = eg, U[53] = ef, U[54] = V, U[55] = eb, U[56] = em, U[57] = z) : z = U[57];
            let ex = z,
                ew = null != es || ep;
            return U[58] !== ex || U[59] !== ew ? (G = {
                exportToGoogleDrive: ex,
                isPending: ew
            }, U[58] = ex, U[59] = ew, U[60] = G) : G = U[60], G
        }

        function M() {
            return null
        }

        function C(e, t) {
            return {
                hostId: e,
                marketplacePath: null,
                pluginName: t ? g.a["google-drive"] ?? null : "google-drive",
                remoteMarketplaceName: t ? o.Ub : null,
                localMarketplaceName: t ? null : o.Vc
            }
        }

        function A(e) {
            switch (e) {
                case "document":
                    return "Google Docs";
                case "spreadsheet":
                    return "Google Sheets";
                case "presentation":
                    return "Google Slides"
            }
        }
        let T = (0, s.f)({
            authFailure: {
                id: "connectedApps.googleDrive.authFailure",
                defaultMessage: "Connect Google Drive to open this file",
                description: "Toast shown when the Google Drive connector needs authentication before opening a file."
            },
            connectAction: {
                id: "connectedApps.googleDrive.connectAction",
                defaultMessage: "Connect",
                description: "Button label that connects Google Drive before opening a file"
            },
            installAction: {
                id: "connectedApps.googleDrive.installAction",
                defaultMessage: "Install",
                description: "Button label that installs Google Drive before opening a file"
            },
            installRequired: {
                id: "connectedApps.googleDrive.installRequired",
                defaultMessage: "Install Google Drive to open this file",
                description: "Toast shown when Google Drive must be installed before opening a file"
            }
        });
        n.d(t, {
            a: () => A,
            b: () => E
        })
    }),
    aT: (function(e, t, n) {
        var r = n("aM"),
            a = n("Lj");
        let o = `${r.tb}/cloud`,
            i = `${o}/settings/environments`,
            l = `${r.tb}/settings/usage`,
            s = `${l}?credits_modal=true`,
            c = new URL(r.tb).origin,
            u = `${c}/pricing/`,
            d = `${c}/#pricing`,
            p = `${c}/?cta_tab=personal&highlight_plan=plus#pricing`,
            f = `${c}/?cta_tab=personal&highlight_plan=pro#pricing`,
            g = `${c}/?cta_tab=personal&highlight_plan=pro&pro_variant=2x#pricing`,
            h = "https://chatgpt.com/admin/billing",
            m = `${h}/manage_member_usage_limit`,
            b = `${h}?codex_credit_action=add_credits`;

        function v(e) {
            switch (e) {
                case a.a.PLUS:
                    return p;
                case a.a.PROLITE:
                    return f;
                case a.a.PRO:
                    return g
            }
        }
        n.d(t, {
            x: () => v
        }, {
            a: b,
            b: h,
            c: m,
            d: "https://chatgpt.com/admin/usage-limits/workspace",
            e: "https://developers.openai.com/apps-sdk",
            f: "https://chatgpt.com/admin?source=codex",
            g: u,
            h: "https://chatgpt.com/admin",
            i: d,
            j: s,
            k: "https://developers.openai.com/codex/app/chrome-extension",
            l: "https://developers.openai.com/codex/concepts/sandboxing/auto-review",
            m: i,
            n: o,
            o: "https://developers.openai.com/codex/guides/agents-md/#create-global-guidance",
            p: "https://developers.openai.com/codex/app/local-environments",
            q: "https://developers.openai.com/codex/hooks",
            r: "https://developers.openai.com/codex/ide",
            s: "https://developers.openai.com/codex/app/computer-use#locked-use",
            t: "https://developers.openai.com/codex/rules",
            u: "https://developers.openai.com/codex/concepts/sandboxing#how-you-control-it",
            v: l,
            w: "https://developers.openai.com/codex/app/worktrees"
        })
    }),
    f1u: (function(e, t, n) {
        n.d(t, {}, {
            a: ["general-settings", "notifications", "import", "profile", "security", "account", "age", "agreements", "parental-controls", "trusted-contact", "safety", "time-management", "keyboard-shortcuts", "codex-micro", "appshots", "appearance", "voice", "storage", "pets", "chronicle", "agent", "work-settings", "git-settings", "data-controls", "archived-chats", "ads-controls", "cloud-settings", "cloud-environments", "codex-cloud", "code-review", "personalization", "usage", "billing", "analytics", "consumer-view", "usage-code-review", "debug", "browser-use", "extension", "computer-use", "local-environments", "worktrees", "environments", "mcp-settings", "gateways", "hooks-settings", "connections", "plugins-settings", "file-type-handlers", "rosalind", "skills-settings", "teams", "cloud-computer", "passwords"]
        })
    }),
    P5: (function(e, t, n) {
        var r = n("f1u");
        n.d(t, {
            a: () => r.a
        }, {
            b: "general-settings",
            c: [{
                slug: "general-settings"
            }, {
                slug: "notifications"
            }, {
                slug: "import"
            }, {
                slug: "profile",
                appRoute: "/profile"
            }, {
                slug: "security"
            }, {
                slug: "account"
            }, {
                slug: "age"
            }, {
                slug: "agreements"
            }, {
                slug: "parental-controls"
            }, {
                slug: "trusted-contact"
            }, {
                slug: "safety"
            }, {
                slug: "time-management"
            }, {
                slug: "appearance"
            }, {
                slug: "voice"
            }, {
                slug: "storage"
            }, {
                slug: "pets"
            }, {
                slug: "chronicle"
            }, {
                slug: "appshots"
            }, {
                slug: "git-settings"
            }, {
                slug: "connections"
            }, {
                slug: "cloud-settings"
            }, {
                slug: "codex-cloud"
            }, {
                slug: "cloud-environments"
            }, {
                slug: "code-review"
            }, {
                slug: "local-environments"
            }, {
                slug: "worktrees"
            }, {
                slug: "agent"
            }, {
                slug: "work-settings"
            }, {
                slug: "personalization"
            }, {
                slug: "keyboard-shortcuts"
            }, {
                slug: "codex-micro"
            }, {
                slug: "usage"
            }, {
                slug: "billing"
            }, {
                slug: "analytics"
            }, {
                slug: "consumer-view"
            }, {
                slug: "usage-code-review"
            }, {
                slug: "debug"
            }, {
                slug: "browser-use"
            }, {
                slug: "extension"
            }, {
                slug: "computer-use"
            }, {
                slug: "mcp-settings"
            }, {
                slug: "gateways"
            }, {
                slug: "hooks-settings"
            }, {
                slug: "plugins-settings"
            }, {
                slug: "file-type-handlers"
            }, {
                slug: "rosalind"
            }, {
                slug: "skills-settings"
            }, {
                slug: "data-controls"
            }, {
                slug: "archived-chats"
            }, {
                slug: "ads-controls"
            }, {
                slug: "teams"
            }, {
                slug: "cloud-computer"
            }, {
                slug: "passwords"
            }]
        })
    }),
    Jvt: (function(e, t, n) {
        var r = n("GaA");
        async function a(e) {
            let t = r.appServices.browserHost;
            return null == t ? "page-unavailable" : t.runPageCommand(e)
        }
        n.d(t, {
            a: () => a
        })
    }),
    nMU: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("on"),
            i = n("ygO"),
            l = n("HOL"),
            s = n("eH"),
            c = n("dQF"),
            u = n("f7o"),
            d = n("J67");

        function p(e) {
            let t, n, o, i, c, d, p = (0, a.c)(24),
                {
                    autoFocus: f,
                    id: g,
                    isLoading: h,
                    label: m,
                    onChange: b,
                    onEnter: v,
                    onEscape: x,
                    onFocus: w,
                    placeholder: y,
                    value: _
                } = e,
                S = void 0 === f || f,
                k = void 0 !== h && h;
            p[0] !== k ? (t = k ? (0, r.jsx)(s.a, {
                "aria-hidden": !0,
                className: "size-4 animate-spin text-default"
            }) : (0, r.jsx)(l.a, {
                className: "text-default",
                "aria-hidden": !1,
                asset: u.a
            }), p[0] = k, p[1] = t) : t = p[1], p[2] !== g || p[3] !== m ? (n = (0, r.jsx)("label", {
                className: "sr-only",
                htmlFor: g,
                children: m
            }), p[2] = g, p[3] = m, p[4] = n) : n = p[4];
            let I = k || void 0;
            return p[5] !== b ? (o = e => {
                b(e.target.value)
            }, p[5] = b, p[6] = o) : o = p[6], p[7] !== v || p[8] !== x ? (i = e => {
                if (("Enter" === e.key || "Escape" === e.key) && (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode)) return void e.stopPropagation();
                if ("Enter" === e.key) {
                    e.preventDefault(), v(e.shiftKey);
                    return
                }
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), x())
            }, p[7] = v, p[8] = x, p[9] = i) : i = p[9], p[10] !== S || p[11] !== g || p[12] !== m || p[13] !== w || p[14] !== y || p[15] !== I || p[16] !== o || p[17] !== i || p[18] !== _ ? (c = (0, r.jsx)("input", {
                id: g,
                type: "text",
                autoFocus: S,
                value: _,
                "aria-busy": I,
                "aria-label": m,
                placeholder: y,
                className: "h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none placeholder:text-tertiary",
                "data-codex-find-input": !0,
                onChange: o,
                onFocus: w,
                onKeyDown: i
            }), p[10] = S, p[11] = g, p[12] = m, p[13] = w, p[14] = y, p[15] = I, p[16] = o, p[17] = i, p[18] = _, p[19] = c) : c = p[19], p[20] !== t || p[21] !== n || p[22] !== c ? (d = (0, r.jsxs)("div", {
                className: "col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4",
                children: [t, n, c]
            }), p[20] = t, p[21] = n, p[22] = c, p[23] = d) : d = p[23], d
        }

        function f(e) {
            let t, n, s, u, d, p, f, g = (0, a.c)(18),
                {
                    isVisible: h,
                    matches: m,
                    nextLabel: b,
                    onNext: v,
                    onPrevious: x,
                    previousLabel: w
                } = e,
                y = h ? "max-h-9 translate-y-0 border-t py-2 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0";
            g[0] !== y ? (t = (0, o.b)("col-[1/4] row-[2] flex min-w-0 items-center border-default px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-basic ease-out", y), g[0] = y, g[1] = t) : t = g[1];
            let _ = 0 === m;
            g[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(l.a, {
                "aria-hidden": !1,
                asset: c.a
            }), g[2] = n) : n = g[2], g[3] !== x || g[4] !== w || g[5] !== _ ? (s = (0, r.jsx)(i.a, {
                className: "h-4 w-4 p-0 text-codex-description",
                size: "icon",
                color: "ghost",
                uniform: !0,
                onClick: x,
                disabled: _,
                "aria-label": w,
                children: n
            }), g[3] = x, g[4] = w, g[5] = _, g[6] = s) : s = g[6];
            let S = 0 === m;
            return g[7] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)(l.a, {
                className: "rotate-180",
                "aria-hidden": !1,
                asset: c.a
            }), g[7] = u) : u = g[7], g[8] !== b || g[9] !== v || g[10] !== S ? (d = (0, r.jsx)(i.a, {
                className: "h-4 w-4 p-0 text-codex-description",
                size: "icon",
                color: "ghost",
                uniform: !0,
                onClick: v,
                disabled: S,
                "aria-label": b,
                children: u
            }), g[8] = b, g[9] = v, g[10] = S, g[11] = d) : d = g[11], g[12] !== s || g[13] !== d ? (p = (0, r.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [s, d]
            }), g[12] = s, g[13] = d, g[14] = p) : p = g[14], g[15] !== t || g[16] !== p ? (f = (0, r.jsx)("div", {
                className: t,
                children: p
            }), g[15] = t, g[16] = p, g[17] = f) : f = g[17], f
        }

        function g(e) {
            let t, n, i = (0, a.c)(5),
                {
                    isVisible: l,
                    label: s
                } = e,
                c = l ? "max-h-9 translate-y-0 py-2 opacity-100" : "max-h-0 -translate-y-2 py-0 opacity-0";
            return i[0] !== c ? (t = (0, o.b)("text-codex-description pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-end text-base leading-6 transition-[max-height,opacity,padding,translate] duration-basic ease-out", c), i[0] = c, i[1] = t) : t = i[1], i[2] !== s || i[3] !== t ? (n = (0, r.jsx)("span", {
                className: t,
                children: s
            }), i[2] = s, i[3] = t, i[4] = n) : n = i[4], n
        }

        function h(e) {
            let t, n, o, s = (0, a.c)(5),
                {
                    label: c,
                    onClose: u
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)("div", {
                className: "ms-2 me-2 h-4 w-px bg-border"
            }), s[0] = t) : t = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(l.a, {
                className: "text-default",
                "aria-hidden": !1,
                asset: d.a
            }), s[1] = n) : n = s[1], s[2] !== c || s[3] !== u ? (o = (0, r.jsxs)("div", {
                className: "col-[3/4] row-[1] flex h-[44px] items-center pe-4",
                children: [t, (0, r.jsx)(i.a, {
                    className: "-m-0.5 size-6",
                    size: "icon",
                    color: "ghost",
                    uniform: !0,
                    onClick: u,
                    "aria-label": c,
                    children: n
                })]
            }), s[2] = c, s[3] = u, s[4] = o) : o = s[4], o
        }
        n.d(t, {
            a: () => h,
            b: () => p,
            c: () => f,
            d: () => g
        })
    }),
    SKh: (function(e, t, n) {
        var r = n("agQ"),
            a = n("h8");
        let o = "data-content-search-match-id",
            i = "codex-thread-find-shadow-style",
            l = `
mark[data-search-match] {
  background-color: var(--color-chart-yellow);
  color: var(--color-text);
  border-radius: var(--radius-2xs);
}

mark[data-search-match][data-active] {
  background-color: var(--color-chart-orange);
}
`;

        function s(e, t) {
            return `${e}:${t}`
        }

        function c(e) {
            let t = null == e.equationIndex ? `${e.matchIndex}` : `equation:${e.equationIndex}:${e.matchIndex}`;
            return `conversation:${e.turnKey}:${e.unitId}:${t}`
        }

        function u(e) {
            return `diff:${e.path}:${e.hunkId}:${e.start}`
        }

        function d(e) {
            let {
                element: t,
                matchId: n
            } = e;
            t.setAttribute(o, n)
        }

        function p(e, t) {
            e.toggleAttribute("data-active", t)
        }

        function f(e) {
            let {
                container: t,
                matchId: n,
                includeShadowRoots: r
            } = e, a = M(n);
            for (let e of x(t, {
                    includeShadowRoots: r
                })) {
                let t = e.querySelector(`[${o}="${a}"]`);
                if (null != t) return t
            }
            return null
        }

        function g(e) {
            let {
                container: t,
                lineNumber: n,
                side: r,
                includeShadowRoots: a
            } = e, o = M(`${n}`), i = "additions" === r ? "[data-additions]" : "deletions" === r ? "[data-deletions]" : null;
            for (let e of x(t, {
                    includeShadowRoots: a
                })) {
                if (null != i) {
                    var l;
                    let t = h({
                        root: e,
                        selector: `[data-line="${o}"][data-line-type="${"additions"===r?"change-addition":"change-deletion"}"]`
                    }) ?? h({
                        root: e,
                        selector: `${i}[data-line="${o}"]`
                    }) ?? h({
                        root: e,
                        selector: `${i} [data-line="${o}"]`
                    }) ?? h({
                        root: e,
                        selector: `[data-line="${o}"] ${i}`
                    });
                    if (null != t) return t;
                    if ((l = e) instanceof HTMLElement && (l.matches("[data-additions]") || l.matches("[data-deletions]")) || null != l.querySelector("[data-additions], [data-deletions]")) continue
                }
                let t = h({
                    root: e,
                    selector: `[data-line="${o}"]`
                });
                if (null != t) return t
            }
            return null
        }

        function h(e) {
            let {
                root: t,
                selector: n
            } = e;
            if (t instanceof HTMLElement && t.matches(n)) return t;
            let r = t.querySelector(n);
            return null != r ? r : null
        }

        function m(e, t) {
            x(e, t).forEach(e => {
                e.querySelectorAll("mark[data-search-match]").forEach(e => {
                    let t = e.parentNode;
                    if (null != t) {
                        for (; e.firstChild;) t.insertBefore(e.firstChild, e);
                        t.removeChild(e), t instanceof HTMLElement && null != t.closest(".katex-html") && t.normalize()
                    }
                })
            })
        }

        function b(e) {
            let {
                target: t,
                query: n,
                maxMatches: r,
                includeShadowRoots: o
            } = e;
            if (r <= 0) return {
                matches: [],
                isCapped: !1
            };
            let i = n.trim();
            if (0 === i.length) return {
                matches: [],
                isCapped: !1
            };
            let l = [],
                s = x(t, {
                    includeShadowRoots: o
                }),
                c = !1;
            for (let e of s) {
                let t = r - l.length;
                if (t <= 0) {
                    c = !0;
                    break
                }
                let n = function(e) {
                    let {
                        root: t,
                        query: n,
                        maxMatches: r
                    } = e, {
                        text: o,
                        segments: i
                    } = _(y(t)), {
                        offsets: l,
                        isCapped: s
                    } = (0, a.a)(o, n, r);
                    return {
                        matches: I(i, l),
                        isCapped: s
                    }
                }({
                    root: e,
                    query: i,
                    maxMatches: t
                });
                if (l.push(...n.matches), n.isCapped) {
                    c = !0;
                    break
                }
            }
            return {
                matches: l,
                isCapped: c
            }
        }

        function v(e) {
            for (let t of e)
                if (! function(e) {
                        if ("childList" !== e.type) return !1;
                        if (E(e.target)) return !0;
                        let t = [...e.addedNodes, ...e.removedNodes],
                            n = !1;
                        for (let e of t)
                            if (!(e instanceof Text)) {
                                if (E(e)) {
                                    n = !0;
                                    continue
                                }
                                return !1
                            } return n
                    }(t)) return !0;
            return !1
        }

        function x(e, t) {
            let n = [e];
            if (!t.includeShadowRoots) return n;
            let r = [e];
            for (; r.length > 0;) {
                let e = r.pop();
                if (null == e) continue;
                let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
                    a = t.currentNode;
                for (; null != a;) a instanceof HTMLElement && null != a.shadowRoot && (function(e) {
                    if (null != e.getElementById(i)) return;
                    let t = document.createElement("style");
                    t.id = i, t.textContent = l, e.append(t)
                }(a.shadowRoot), n.push(a.shadowRoot), r.push(a.shadowRoot)), a = t.nextNode()
            }
            return n
        }

        function w(e) {
            return _(y(e)).text
        }

        function y(e) {
            let t = "script, style, textarea, [hidden], [contenteditable='true'], [data-thread-find-skip]";
            if (null != (e instanceof ShadowRoot ? e.host : e).closest(t)) return [];
            let n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e instanceof Element ? e.matches(t) ? NodeFilter.FILTER_REJECT : e instanceof HTMLBRElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP : !(e instanceof Text) || 0 === e.data.length || null == e.parentElement || e.parentElement.matches("[data-column-number], [data-line-number-content], [data-line-num], [data-line-old-num], [data-line-new-num]") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }),
                r = [],
                a = n.nextNode();
            for (; null != a;)(a instanceof Text || a instanceof HTMLBRElement) && r.push(a), a = n.nextNode();
            return r
        }

        function _(e) {
            let t = "",
                n = null,
                r = !1,
                a = [];
            for (let o of e) {
                if (o instanceof HTMLBRElement) {
                    r = !0;
                    continue
                }
                let e = o.parentElement?.closest("p, li, td, th, pre, h1, h2, h3, h4, h5, h6, blockquote, div, fieldset") ?? null;
                t.length > 0 && (r || e !== n) && !/\s$/.test(t) && !/^\s/.test(o.data) && (t += " "), n = e, r = !1;
                let i = t.length;
                t += o.data, a.push({
                    node: o,
                    start: i,
                    end: t.length
                })
            }
            return {
                text: t,
                segments: a
            }
        }
        async function S(e, t, n, o) {
            let i = e.flatMap((e, t) => {
                    let {
                        element: n
                    } = e, r = [
                        []
                    ], a = !1;
                    for (let e of y(n)) e.parentElement?.closest("[data-math-source]") != null ? a = !0 : (a && (r.push([]), a = !1), r[r.length - 1].push(e));
                    return r.map(e => {
                        let {
                            text: n,
                            segments: r
                        } = _(e), a = [], o = "";
                        for (let e of n.matchAll(/\s+|\S/g)) {
                            if (/\s/.test(e[0])) {
                                if (0 === o.length) continue;
                                o += " "
                            } else o += e[0];
                            a.push({
                                start: e.index,
                                end: e.index + e[0].length
                            })
                        }
                        return {
                            targetIndex: t,
                            segments: r,
                            text: o.trimEnd(),
                            positions: a,
                            nodeText: r.map(e => {
                                let {
                                    node: t
                                } = e;
                                return t.data
                            }).join("")
                        }
                    })
                }),
                l = null == n ? null : await (0, r.a)({
                    query: n,
                    texts: i.map(e => {
                        let {
                            text: t
                        } = e;
                        return t
                    }),
                    maxMatches: 250
                }, o);
            if (o.aborted || l?.error) return () => [];
            let s = e.map(e => {
                    let {
                        maxMatches: t
                    } = e;
                    return t
                }),
                c = i.map((e, n) => {
                    let {
                        text: r,
                        targetIndex: o
                    } = e, i = null == l ? (0, a.a)(r, t, s[o]).offsets : (l.offsets[n] ?? []).slice(0, s[o]);
                    return s[o] -= i.length, i
                });
            return () => {
                let t = e.map(() => []);
                return i.forEach((e, n) => {
                    let {
                        segments: r,
                        nodeText: a,
                        positions: o,
                        targetIndex: i
                    } = e;
                    r.some(e => {
                        let {
                            node: t
                        } = e;
                        return !t.isConnected
                    }) || r.map(e => {
                        let {
                            node: t
                        } = e;
                        return t.data
                    }).join("") !== a || t[i].push(...I(r, (c[n] ?? []).map(e => {
                        let {
                            start: t,
                            end: n
                        } = e;
                        return {
                            start: o[t].start,
                            end: o[n - 1].end
                        }
                    })))
                }), t
            }
        }

        function k() {
            let e = document.createElement("mark");
            return e.className = "rounded-2xs bg-chart-yellow text-default data-[active]:bg-chart-orange", e.dataset.searchMatch = "", e
        }

        function I(e, t) {
            let n = [];
            for (let r = t.length - 1; r >= 0; r -= 1) {
                let a = t[r],
                    o = [];
                for (let {
                        node: t,
                        start: n,
                        end: r
                    }
                    of e) {
                    if (r <= a.start || n >= a.end) continue;
                    let e = document.createRange();
                    e.setStart(t, Math.max(0, a.start - n)), e.setEnd(t, Math.min(t.length, a.end - n));
                    let i = k();
                    e.surroundContents(i), o.push(i)
                }
                n.push(o)
            }
            return n.reverse()
        }

        function E(e) {
            return e instanceof HTMLElement && e.matches("mark[data-search-match]")
        }

        function M(e) {
            return "u" > typeof CSS && "function" == typeof CSS.escape ? CSS.escape(e) : e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        }
        n.d(t, {
            a: () => m,
            b: () => c,
            c: () => s,
            d: () => u,
            e: () => k,
            f: () => g,
            g: () => f,
            h: () => w,
            i: () => b,
            j: () => S,
            k: () => p,
            l: () => d,
            m: () => v
        })
    }),
    L6M: (function(e, t, n) {
        function r(e, t) {
            let {
                start: n,
                end: r
            } = t, a = [], o = [], i = [...e.matchAll(/\\(?:[a-zA-Z]+|[^])|[{}]/g)];
            for (let e of i) {
                let t = e.index + e[0].length;
                if (e[0].startsWith("\\") && e.index < r && t > n) n = Math.min(n, e.index), r = Math.max(r, t);
                else if ("{" === e[0]) o.push(e.index);
                else if ("}" === e[0]) {
                    let e = o.pop();
                    null != e && a.push({
                        start: e,
                        end: t
                    })
                }
            }
            for (let t of i) {
                if (!t[0].startsWith("\\") || t.index >= r || t.index + t[0].length <= n) continue;
                let o = t.index + t[0].length,
                    i = 0;
                if (/^\\(?:[dt]?frac|binom|overset|underset)$/.test(t[0]) ? i = 2 : /^\\(?:sqrt|mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathnormal|mathscr|operatorname|text|textrm|textbf|textit|vec|hat|widehat|bar|overline|underline|tilde|widetilde|dot|ddot)$/.test(t[0]) && (i = 1), "\\sqrt" === t[0] && "[" === e[o]) {
                    let t = e.indexOf("]", o);
                    t >= 0 && (o = t + 1)
                }
                for (let t = i; t > 0; t -= 1) {
                    for (;
                        /\s/.test(e[o] ?? "");) o += 1;
                    o = a.find(e => e.start === o)?.end ?? o + (e.slice(o).match(/^(?:\\[a-zA-Z]+|\\[^]|[^])/u)?.[0].length ?? 0)
                }
                r = Math.max(r, o)
            }
            for (let e of a)(n <= e.start && r > e.start && r < e.end || n > e.start && n < e.end && r >= e.end) && (n = Math.min(n, e.start), r = Math.max(r, e.end));
            return {
                start: n,
                end: r
            }
        }
        n.d(t, {
            a: () => r
        })
    }),
    agQ: (function(e, t, n) {
        function r(e, t) {
            return new Promise(r => {
                let a, o = {
                    offsets: [],
                    totalMatches: 0
                };
                if (t?.aborted) return void r(o);
                try {
                    a = new Worker(new URL(n.p + n.u(266731), n.b), Object.assign({}, {
                        type: "module"
                    }, {
                        type: "module"
                    }))
                } catch {
                    r({
                        ...o,
                        error: "regex-unavailable"
                    });
                    return
                }
                let i = e => {
                        clearTimeout(s), t?.removeEventListener("abort", l), a.terminate(), r(e)
                    },
                    l = () => i(o),
                    s = setTimeout(() => i({
                        ...o,
                        error: "regex-timeout"
                    }), 1e3);
                t?.addEventListener("abort", l, {
                    once: !0
                }), a.onmessage = e => {
                    i(e.data)
                }, a.onerror = e => {
                    e.preventDefault(), i({
                        ...o,
                        error: "regex-unavailable"
                    })
                };
                try {
                    a.postMessage(e)
                } catch {
                    i({
                        ...o,
                        error: "regex-unavailable"
                    })
                }
            })
        }
        n.d(t, {
            a: () => r
        })
    }),
    AXT: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("on");

        function i(e) {
            let t, n, i = (0, a.c)(5),
                {
                    children: l,
                    className: s
                } = e;
            return i[0] !== s ? (t = (0, o.b)("no-drag pointer-events-auto grid w-[340px] max-w-full grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-default bg-surface-secondary shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]", s), i[0] = s, i[1] = t) : t = i[1], i[2] !== l || i[3] !== t ? (n = (0, r.jsx)("div", {
                className: t,
                children: l
            }), i[2] = l, i[3] = t, i[4] = n) : n = i[4], n
        }
        n.d(t, {
            a: () => i
        })
    }),
    dZT: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("zd"),
            i = n("ZZ6"),
            l = n("wD9"),
            s = n("i7"),
            c = n("TNW");

        function u(e) {
            let t, n, u, p, f = (0, a.c)(10),
                {
                    children: g
                } = e,
                h = (0, l.c)(),
                m = (0, i.a)();
            if ((0, o.useSyncExternalStore)(c.d, c.b, d)) return null;
            let b = 16 + m.right;
            if (f[0] !== b ? (t = {
                    right: b
                }, f[0] = b, f[1] = t) : t = f[1], f[2] !== h ? (n = {
                    zoom: h
                }, f[2] = h, f[3] = n) : n = f[3], f[4] !== g || f[5] !== n ? (u = (0, r.jsx)("div", {
                    className: "max-w-[70vw]",
                    style: n,
                    children: g
                }), f[4] = g, f[5] = n, f[6] = u) : u = f[6], f[7] !== t || f[8] !== u) {
                let e = (0, r.jsx)("div", {
                    className: "pointer-events-none fixed top-2 z-[55] flex justify-end",
                    style: t,
                    children: u
                });
                p = "u" < typeof document ? e : (0, r.jsx)(s.a, {
                    container: document.body,
                    children: e
                }), f[7] = t, f[8] = u, f[9] = p
            } else p = f[9];
            return p
        }

        function d() {
            return !1
        }
        n.d(t, {
            a: () => u
        })
    }),
    mwa5: (function(e, t, n) {
        n.d(t, {
            a: () => H
        });
        var r = n("A"),
            a = n("Qo"),
            o = n("on"),
            i = n("Xnl"),
            l = n("zd"),
            s = n("TwS"),
            c = n("TNW"),
            u = n("tSE"),
            d = n("r5n"),
            p = n("NsE"),
            f = n("Jvt"),
            g = n("Wf"),
            h = n("ygO"),
            m = n("HOL"),
            b = n("Cq"),
            v = n("NNZ"),
            x = n("Gj"),
            w = n("F00"),
            y = n("lJQ");

        function _(e) {
            let t, n, o, l, c, d, p, f, _, S, k, I, E, M = (0, a.c)(46),
                {
                    browserController: C
                } = e,
                A = (0, i.z)(u.a),
                T = (0, g.a)(),
                j = (0, i.A)(s.p);
            M[0] !== T ? (t = T.formatMessage({
                id: "codex.threadFindBar.fileFilter",
                defaultMessage: "Search file",
                description: "Button label to search the active file preview"
            }), M[0] = T, M[1] = t) : t = M[1];
            let R = t,
                N = (0, i.A)(s.k),
                F = (0, i.A)(s.m),
                D = (0, i.A)(s.n),
                P = (0, i.A)(s.v),
                $ = "chatgpt-thread" === A.value.routeKind;
            M[2] !== T || M[3] !== $ ? (n = $ ? T.formatMessage({
                id: "chatgpt.threadFindBar.chatFilter",
                defaultMessage: "Search chat",
                description: "Button label to scope find results to the ChatGPT chat"
            }) : T.formatMessage({
                id: "codex.threadFindBar.chatFilter",
                defaultMessage: "Search chat",
                description: "Button label to scope find results to the Codex task"
            }), M[2] = T, M[3] = $, M[4] = n) : n = M[4];
            let B = n;
            M[5] !== T ? (o = T.formatMessage({
                id: "codex.threadFindBar.diffFilter",
                defaultMessage: "Search diffs",
                description: "Button label to scope find results to diffs"
            }), M[5] = T, M[6] = o) : o = M[6];
            let O = o;
            M[7] !== T ? (l = T.formatMessage({
                id: "codex.threadFindBar.browserFilter",
                defaultMessage: "Search browser page",
                description: "Button label to scope find results to browser page"
            }), M[7] = T, M[8] = l) : l = M[8];
            let L = l;
            M[9] !== C || M[10] !== N || M[11] !== D || M[12] !== P || M[13] !== A ? (c = e => {
                if ("browser" === D && "browser" !== e) {
                    null != N && C.runCommand({
                        ...N,
                        command: {
                            type: "close-find"
                        }
                    }), (0, s.L)(A, e), (0, s.P)(A, s.a);
                    return
                }(0, s.L)(A, e), "browser" === e && P.length > 0 && null != N && C.runCommand({
                    ...N,
                    command: {
                        type: "set-find-query",
                        query: P
                    }
                })
            }, M[9] = C, M[10] = N, M[11] = D, M[12] = P, M[13] = A, M[14] = c) : c = M[14];
            let q = c;
            if ("page" === D || null == F && null == N && null == j) return null;
            let z = "conversation" === D ? "ghostActive" : "ghost";
            M[15] !== q ? (d = () => {
                q("conversation")
            }, M[15] = q, M[16] = d) : d = M[16];
            let G = "conversation" === D;
            return M[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(m.a, {
                "aria-hidden": !1,
                asset: x.a
            }), M[17] = p) : p = M[17], M[18] !== B || M[19] !== z || M[20] !== d || M[21] !== G ? (f = (0, r.jsx)(h.a, {
                className: "-m-0.5 size-6",
                size: "icon",
                color: z,
                uniform: !0,
                onClick: d,
                "aria-pressed": G,
                "aria-label": B,
                children: p
            }), M[18] = B, M[19] = z, M[20] = d, M[21] = G, M[22] = f) : f = M[22], M[23] !== B || M[24] !== f ? (_ = (0, r.jsx)(b.a, {
                tooltipContent: B,
                children: f
            }), M[23] = B, M[24] = f, M[25] = _) : _ = M[25], M[26] !== O || M[27] !== F || M[28] !== D || M[29] !== q ? (S = null != F ? (0, r.jsx)(b.a, {
                tooltipContent: O,
                children: (0, r.jsx)(h.a, {
                    className: "-m-0.5 size-6",
                    size: "icon",
                    color: "diff" === D ? "ghostActive" : "ghost",
                    uniform: !0,
                    onClick: () => {
                        q("diff")
                    },
                    "aria-pressed": "diff" === D,
                    "aria-label": O,
                    children: (0, r.jsx)(v.a, {
                        className: "size-4"
                    })
                })
            }) : null, M[26] = O, M[27] = F, M[28] = D, M[29] = q, M[30] = S) : S = M[30], M[31] !== D || M[32] !== R || M[33] !== j || M[34] !== q ? (k = null == j ? null : (0, r.jsx)(b.a, {
                tooltipContent: j.title,
                children: (0, r.jsx)(h.a, {
                    className: "-m-0.5 size-6",
                    size: "icon",
                    color: "file" === D ? "ghostActive" : "ghost",
                    uniform: !0,
                    onClick: () => q("file"),
                    "aria-pressed": "file" === D,
                    "aria-label": R,
                    children: (0, r.jsx)(m.a, {
                        "aria-hidden": !1,
                        asset: w.a
                    })
                })
            }), M[31] = D, M[32] = R, M[33] = j, M[34] = q, M[35] = k) : k = M[35], M[36] !== L || M[37] !== N || M[38] !== D || M[39] !== q ? (I = null == N ? null : (0, r.jsx)(b.a, {
                tooltipContent: L,
                children: (0, r.jsx)(h.a, {
                    className: "-m-0.5 size-6",
                    size: "icon",
                    color: "browser" === D ? "ghostActive" : "ghost",
                    uniform: !0,
                    onClick: () => {
                        q("browser")
                    },
                    "aria-pressed": "browser" === D,
                    "aria-label": L,
                    children: (0, r.jsx)(m.a, {
                        "aria-hidden": !1,
                        asset: y.a
                    })
                })
            }), M[36] = L, M[37] = N, M[38] = D, M[39] = q, M[40] = I) : I = M[40], M[41] !== _ || M[42] !== S || M[43] !== k || M[44] !== I ? (E = (0, r.jsxs)("div", {
                className: "col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2",
                children: [_, S, k, I]
            }), M[41] = _, M[42] = S, M[43] = k, M[44] = I, M[45] = E) : E = M[45], E
        }

        function S(e) {
            let t, n, o, l = (0, a.c)(8),
                {
                    children: c
                } = e,
                p = (0, i.z)(u.a);
            return l[0] !== p ? (t = () => p.get(s.k), l[0] = p, l[1] = t) : t = l[1], l[2] !== p ? (n = e => (0, s.P)(p, e), l[2] = p, l[3] = n) : n = l[3], l[4] !== c || l[5] !== t || l[6] !== n ? (o = (0, r.jsx)(d.a, {
                getTarget: t,
                runCommand: f.a,
                onFindStateChange: n,
                children: c
            }), l[4] = c, l[5] = t, l[6] = n, l[7] = o) : o = l[7], o
        }

        function k(e) {
            let t, n, o, l, c, d, f = (0, a.c)(20),
                {
                    controller: g
                } = e,
                h = (0, i.z)(u.a),
                m = (0, i.A)(s.k),
                b = (0, i.A)(s.r),
                v = (0, i.A)(s.i),
                x = (0, i.A)(s.n),
                w = (0, i.A)(s.t),
                y = (0, i.A)(s.v);
            return null != m && w && "browser" === x ? (f[0] !== y || f[1] !== v ? (t = {
                ...v,
                query: y
            }, f[0] = y, f[1] = v, f[2] = t) : t = f[2], f[3] !== g ? (n = (0, r.jsx)(_, {
                browserController: g
            }), f[3] = g, f[4] = n) : n = f[4], f[5] !== h ? (o = e => (0, s.I)(h, e), l = () => {
                (0, s.c)(h), (0, s.P)(h, {
                    query: "",
                    matches: 0,
                    activeMatchOrdinal: 0
                })
            }, f[5] = h, f[6] = o, f[7] = l) : (o = f[6], l = f[7]), f[8] !== h || f[9] !== m ? (c = () => (0, s.H)(h, m), f[8] = h, f[9] = m, f[10] = c) : c = f[10], f[11] !== g || f[12] !== b || f[13] !== t || f[14] !== n || f[15] !== o || f[16] !== l || f[17] !== c || f[18] !== m ? (d = (0, r.jsx)(p.a, {
                controller: g,
                inputId: b,
                target: m,
                state: t,
                domainControl: n,
                onQueryChange: o,
                onClose: l,
                focusPage: c
            }), f[11] = g, f[12] = b, f[13] = t, f[14] = n, f[15] = o, f[16] = l, f[17] = c, f[18] = m, f[19] = d) : d = f[19], d) : null
        }
        var I = n("nMU");

        function E() {
            let e, t, n, o = (0, a.c)(7),
                l = (0, i.z)(u.a),
                c = (0, g.a)();
            return o[0] !== c ? (e = c.formatMessage({
                id: "codex.threadFindBar.close",
                defaultMessage: "Close find",
                description: "Button label to close the find bar"
            }), o[0] = c, o[1] = e) : e = o[1], o[2] !== l ? (t = () => {
                (0, s.c)(l)
            }, o[2] = l, o[3] = t) : t = o[3], o[4] !== e || o[5] !== t ? (n = (0, r.jsx)(I.a, {
                label: e,
                onClose: t
            }), o[4] = e, o[5] = t, o[6] = n) : n = o[6], n
        }
        var M = n("AXT"),
            C = n("ZU2"),
            A = n("gbr"),
            T = n("nKJ"),
            j = n("jD"),
            R = n("TL"),
            N = n("XX");
        let F = "[data-pierre-editor-surface], [data-editor-search-surface], [data-artifact-search-surface]";

        function D(e) {
            let t, n, r, o, d, p, f, g, h, m = (0, a.c)(37),
                {
                    browserController: b
                } = e,
                v = (0, i.z)(u.a),
                x = (0, i.A)(s.k),
                w = (0, i.A)(s.m),
                y = (0, i.A)(C.a.tabs$),
                _ = (0, i.A)(C.a.activeTab$),
                S = (0, i.A)(C.j.tabs$),
                k = (0, i.A)(C.j.activeTab$),
                I = (0, i.A)(A.d),
                E = (0, i.A)(A.i);
            m[0] !== _ || m[1] !== k || m[2] !== y || m[3] !== I || m[4] !== E || m[5] !== S || m[6] !== v ? (n = function(e) {
                let {
                    activeTabs: t,
                    browserConversationId: n,
                    openPanels: r,
                    tabs: a
                } = e;
                if (null == n) return null;
                for (let e of N.a) {
                    if (!r[e]) continue;
                    let a = (0, T.getThreadBrowserTabIdFromPanelTab)(t[e]);
                    if (null != a) return {
                        browserTabId: a,
                        conversationId: n
                    }
                }
                for (let e of N.a)
                    if (r[e])
                        for (let t of a[e]) {
                            let e = (0, T.getThreadBrowserTabIdFromPanelTab)(t);
                            if (null != e) return {
                                browserTabId: e,
                                conversationId: n
                            }
                        }
                return null
            }({
                activeTabs: {
                    bottom: _,
                    right: k
                },
                browserConversationId: t = (0, T.getThreadBrowserConversationId)(v),
                openPanels: {
                    bottom: I,
                    right: E
                },
                tabs: {
                    bottom: y,
                    right: S
                }
            }), m[0] = _, m[1] = k, m[2] = y, m[3] = I, m[4] = E, m[5] = S, m[6] = v, m[7] = t, m[8] = n) : (t = m[7], n = m[8]);
            let M = n;
            m[9] !== M || m[10] !== v ? (r = () => {
                (0, s.J)(v, M)
            }, m[9] = M, m[10] = v, m[11] = r) : r = m[11];
            let j = M?.browserTabId,
                F = M?.conversationId;
            m[12] !== M || m[13] !== v || m[14] !== j || m[15] !== F ? (o = [M, j, F, v], m[12] = M, m[13] = v, m[14] = j, m[15] = F, m[16] = o) : o = m[16], (0, l.useEffect)(r, o), m[17] !== _ || m[18] !== k || m[19] !== b || m[20] !== t || m[21] !== x || m[22] !== w || m[23] !== I || m[24] !== E || m[25] !== v ? (d = function(e) {
                let {
                    selectDefaultTarget: n
                } = void 0 === e ? {} : e, r = void 0 !== n && n, a = (0, s.z)(v);
                if (null != a) {
                    if (!v.get(s.t)) {
                        let e = $();
                        null != e && (0, s.M)(v, e)
                    }(0, s.D)(v, a);
                    return
                }
                if (B()) return;
                let o = v.get(s.r),
                    i = function(e) {
                        let {
                            activeTabs: t,
                            browserConversationId: n,
                            openPanels: r
                        } = e;
                        if (null == n) return null;
                        let a = document.activeElement;
                        if (!(a instanceof HTMLElement)) return null;
                        for (let e of N.a) {
                            if (!r[e]) continue;
                            let o = (0, T.getThreadBrowserTabIdFromPanelTab)(t[e]);
                            if (null != o && ("webview" === a.tagName.toLowerCase() && a.getAttribute("data-browser-sidebar-conversation-id") === n && (a.getAttribute("data-browser-sidebar-browser-tab-id") ?? o) === o || null != a.closest(`[data-app-shell-focus-area="${e}-panel"]`))) return {
                                browserTabId: o,
                                conversationId: n
                            }
                        }
                        return null
                    }({
                        activeTabs: {
                            bottom: _,
                            right: k
                        },
                        browserConversationId: t,
                        openPanels: {
                            bottom: I,
                            right: E
                        }
                    }),
                    l = !r && document.activeElement?.id === o;
                if (l && "page" === v.get(s.n)) return void window.requestAnimationFrame(() => P(o));
                let c = l || r ? void 0 : $(),
                    u = v.get(s.l);
                if (l ? u = (0, s.A)({
                        currentDomain: v.get(s.n),
                        hasDiffSource: null != w,
                        hasBrowserTarget: null != x,
                        hasFileTarget: null != v.get(s.p)
                    }) : null != i ? u = "browser" : "file" === u && null == v.get(s.p) ? u = "conversation" : "diff" === u && null == w && (u = "conversation"), null != i && (0, s.J)(v, i), (0, s.L)(v, u), null != c && ("browser" === u ? (0, s.I)(v, c) : (0, s.M)(v, c)), "browser" === u) {
                    let e = c ?? v.get(s.v),
                        t = i ?? x;
                    e.length > 0 && null != t && b.runCommand({
                        ...t,
                        command: {
                            type: "set-find-query",
                            query: e
                        }
                    })
                }(0, s.C)(v, {
                    selectDefaultTarget: !l
                }), window.requestAnimationFrame(() => P(o))
            }, m[17] = _, m[18] = k, m[19] = b, m[20] = t, m[21] = x, m[22] = w, m[23] = I, m[24] = E, m[25] = v, m[26] = d) : d = m[26];
            let D = d;
            m[27] !== D || m[28] !== v ? (p = () => {
                (0, c.b)() && ("page" === v.get(s.l) || v.get(s.t) && "page" === v.get(s.n)) ? window.requestAnimationFrame(() => {
                    (0, c.b)() || D({
                        selectDefaultTarget: !0
                    })
                }): D()
            }, m[27] = D, m[28] = v, m[29] = p) : p = m[29], (0, R.d)("find-in-thread", p), m[30] !== b || m[31] !== v ? (f = e => {
                if (!(null == (0, s.z)(v) && B(e)) && v.get(s.t) && !("page" === v.get(s.n) && (0, c.b)())) {
                    if ("browser" === v.get(s.n)) {
                        let t = v.get(s.k);
                        null != t && b.runCommand({
                            ...t,
                            command: {
                                type: "next" === e ? "find-next" : "find-previous"
                            }
                        });
                        return
                    }
                    "next" === e ? (0, s.B)(v) : (0, s.E)(v)
                }
            }, m[30] = b, m[31] = v, m[32] = f) : f = m[32];
            let O = f;
            return m[33] !== O ? (g = () => {
                O("next")
            }, m[33] = O, m[34] = g) : g = m[34], (0, R.d)("find-next-in-thread", g), m[35] !== O ? (h = () => {
                O("previous")
            }, m[35] = O, m[36] = h) : h = m[36], (0, R.d)("find-previous-in-thread", h), null
        }

        function P(e) {
            if ((0, c.b)()) return;
            let t = document.getElementById(e);
            t instanceof HTMLInputElement && (t.focus(), t.select())
        }

        function $() {
            let e, t = document.activeElement;
            if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
                if (null == t.selectionStart || null == t.selectionEnd) return;
                e = t.value.slice(t.selectionStart, t.selectionEnd)
            } else e = window.getSelection?.()?.toString();
            let n = e?.trim();
            if (n) return /[\r\n]/.test(n) ? "" : n
        }

        function B(e) {
            let t = document.activeElement,
                n = t?.closest(F) ?? t?.closest("[data-app-shell-tab-panel-controller]")?.querySelector(F);
            if (null == n || null != n.closest("[inert]")) return !1;
            let r = n.closest("[data-app-shell-tab-panel-controller]")?.querySelector("[data-pierre-find-input-id]")?.dataset.pierreFindInputId,
                a = n.querySelector("[data-codex-find-input]") ?? (null == r ? null : document.getElementById(r)),
                o = n.matches("[data-artifact-search-surface]") ? n : a ?? n.querySelector("diffs-container")?.shadowRoot?.querySelector("[data-content]") ?? n.querySelector(".cm-content");
            if (null == o) return !1;
            let i = (0, j.a)();
            return o.dispatchEvent(new KeyboardEvent("keydown", {
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                ctrlKey: !i,
                key: null == e ? "f" : "g",
                metaKey: i,
                shiftKey: "previous" === e
            })), !0
        }

        function O() {
            let e, t, n, o, l, c, d = (0, a.c)(30),
                p = (0, i.z)(u.a),
                f = (0, i.A)(s.r),
                h = (0, g.a)(),
                m = (0, i.A)(s.o),
                b = (0, i.A)(s.n),
                v = (0, i.A)(s.s),
                x = (0, i.A)(s.v),
                w = "chatgpt-thread" === p.value.routeKind;
            d[0] !== b || d[1] !== h || d[2] !== w ? (e = "diff" === b ? h.formatMessage({
                id: "codex.threadFindBar.placeholder.review",
                defaultMessage: "Search diff…",
                description: "Placeholder for the review find input"
            }) : w ? h.formatMessage({
                id: "chatgpt.threadFindBar.placeholder",
                defaultMessage: "Search chat…",
                description: "Placeholder for the ChatGPT chat find input"
            }) : h.formatMessage({
                id: "codex.threadFindBar.placeholder",
                defaultMessage: "Search chat…",
                description: "Placeholder for the task find input"
            }), d[0] = b, d[1] = h, d[2] = w, d[3] = e) : e = d[3];
            let y = e;
            d[4] !== h || d[5] !== w ? (t = w ? h.formatMessage({
                id: "chatgpt.threadFindBar.label",
                defaultMessage: "Find in chat",
                description: "Accessible label for the ChatGPT chat find input"
            }) : h.formatMessage({
                id: "codex.threadFindBar.label",
                defaultMessage: "Find in chat",
                description: "Accessible label for the Codex task find input"
            }), d[4] = h, d[5] = w, d[6] = t) : t = d[6];
            let _ = t;
            if ("diff" === b) {
                let e;
                d[7] !== h ? (e = h.formatMessage({
                    id: "codex.threadFindBar.label.diff",
                    defaultMessage: "Find in diff",
                    description: "Accessible label for finding text within code changes"
                }), d[7] = h, d[8] = e) : e = d[8], _ = e
            }
            if ("page" === b) {
                let e, t;
                d[9] !== h ? (e = h.formatMessage({
                    id: "codex.pageFindBar.placeholder",
                    defaultMessage: "Find in Page…",
                    description: "Placeholder for finding text within the current Page document"
                }), d[9] = h, d[10] = e) : e = d[10], y = e, d[11] !== h ? (t = h.formatMessage({
                    id: "codex.pageFindBar.label",
                    defaultMessage: "Find in Page",
                    description: "Accessible label for finding text within the current Page document"
                }), d[11] = h, d[12] = t) : t = d[12], _ = t
            }
            if ("file" === b) {
                let e, t;
                d[13] !== h ? (e = h.formatMessage({
                    id: "textFileEditor.find.placeholder",
                    defaultMessage: "Find in file…",
                    description: "Placeholder for find in a text file"
                }), d[13] = h, d[14] = e) : e = d[14], y = e, d[15] !== h ? (t = h.formatMessage({
                    id: "textFileEditor.find.label",
                    defaultMessage: "Find in file",
                    description: "Accessible label for find in a text file"
                }), d[15] = h, d[16] = t) : t = d[16], _ = t
            }
            let S = "file" === b ? m.pending : v;
            return d[17] !== p ? (n = e => {
                (0, s.M)(p, e)
            }, o = e => {
                (0, s.O)(p, {
                    shift: e
                })
            }, l = () => {
                (0, s.c)(p)
            }, d[17] = p, d[18] = n, d[19] = o, d[20] = l) : (n = d[18], o = d[19], l = d[20]), d[21] !== f || d[22] !== _ || d[23] !== y || d[24] !== x || d[25] !== S || d[26] !== n || d[27] !== o || d[28] !== l ? (c = (0, r.jsx)(I.b, {
                id: f,
                isLoading: S,
                label: _,
                placeholder: y,
                value: x,
                onChange: n,
                onEnter: o,
                onEscape: l
            }), d[21] = f, d[22] = _, d[23] = y, d[24] = x, d[25] = S, d[26] = n, d[27] = o, d[28] = l, d[29] = c) : c = d[29], c
        }

        function L() {
            let e, t, n, o, l, c = (0, a.c)(14),
                d = (0, i.z)(u.a),
                p = (0, g.a)(),
                f = (0, i.A)(s.o),
                h = (0, i.A)(s.n),
                m = (0, i.A)(s.w),
                b = "file" === h ? f.total : m?.totalMatches ?? 0,
                v = (0, i.A)(s.q);
            return c[0] !== p ? (e = p.formatMessage({
                id: "codex.threadFindBar.nextResult",
                defaultMessage: "Next result",
                description: "Button label to move to the next find match"
            }), c[0] = p, c[1] = e) : e = c[1], c[2] !== p ? (t = p.formatMessage({
                id: "codex.threadFindBar.previousResult",
                defaultMessage: "Previous result",
                description: "Button label to move to the previous find match"
            }), c[2] = p, c[3] = t) : t = c[3], c[4] !== d ? (n = () => {
                (0, s.B)(d)
            }, o = () => {
                (0, s.E)(d)
            }, c[4] = d, c[5] = n, c[6] = o) : (n = c[5], o = c[6]), c[7] !== v || c[8] !== b || c[9] !== e || c[10] !== t || c[11] !== n || c[12] !== o ? (l = (0, r.jsx)(I.c, {
                isVisible: v,
                matches: b,
                nextLabel: e,
                previousLabel: t,
                onNext: n,
                onPrevious: o
            }), c[7] = v, c[8] = b, c[9] = e, c[10] = t, c[11] = n, c[12] = o, c[13] = l) : l = c[13], l
        }
        var q = n("dZT");

        function z() {
            let e, t = (0, a.c)(18),
                n = (0, g.a)(),
                o = (0, i.A)(s.o),
                l = (0, i.A)(s.n),
                c = (0, i.A)(s.q),
                u = (0, i.A)(s.w),
                d = (0, i.A)(s.f),
                p = "file" === l ? o.total : u?.totalMatches ?? 0,
                f = null == d ? 0 : d + 1;
            0 === f && p > 0 && (f = 1), "file" === l && (f = o.current);
            let h = null;
            if (u?.error === "invalid-regex") {
                let e;
                t[0] !== n ? (e = n.formatMessage({
                    id: "chatgpt.threadFindBar.invalidRegex",
                    defaultMessage: "Invalid regular expression",
                    description: "Search error when a regular expression cannot be parsed"
                }), t[0] = n, t[1] = e) : e = t[1], h = e
            } else if (u?.error === "regex-timeout") {
                let e;
                t[2] !== n ? (e = n.formatMessage({
                    id: "chatgpt.threadFindBar.regexTimeout",
                    defaultMessage: "Pattern took too long",
                    description: "Search error when a regular expression exceeds its execution time limit"
                }), t[2] = n, t[3] = e) : e = t[3], h = e
            } else if (u?.error === "regex-unavailable") {
                let e;
                t[4] !== n ? (e = n.formatMessage({
                    id: "chatgpt.threadFindBar.regexUnavailable",
                    defaultMessage: "Regex search unavailable",
                    description: "Search error when the background regex worker cannot run"
                }), t[4] = n, t[5] = e) : e = t[5], h = e
            } else if (c && 0 === p) {
                let e;
                t[6] !== n ? (e = n.formatMessage({
                    id: "codex.threadFindBar.noResults",
                    defaultMessage: "0 results",
                    description: "Find-in-thread label when there are no matches"
                }), t[6] = n, t[7] = e) : e = t[7], h = e
            } else if (c) {
                let e;
                t[8] !== f || t[9] !== l || t[10] !== o || t[11] !== n || t[12] !== u?.isCapped || t[13] !== p ? (e = n.formatMessage(("file" === l ? o.isCapped : u?.isCapped) ? {
                    id: "codex.threadFindBar.results.capped",
                    defaultMessage: "{active} / {matches}+ results",
                    description: "Find-in-thread label showing the active match index when matches are capped"
                } : {
                    id: "codex.threadFindBar.results",
                    defaultMessage: "{active} / {matches} results",
                    description: "Find-in-thread label showing the active match index"
                }, {
                    active: f,
                    matches: p
                }), t[8] = f, t[9] = l, t[10] = o, t[11] = n, t[12] = u?.isCapped, t[13] = p, t[14] = e) : e = t[14], h = e
            }
            return t[15] !== c || t[16] !== h ? (e = (0, r.jsx)(I.d, {
                isVisible: c,
                label: h
            }), t[15] = c, t[16] = h, t[17] = e) : e = t[17], e
        }

        function G(e) {
            let t, n = (0, a.c)(3),
                {
                    children: o,
                    className: u
                } = e,
                d = (0, i.A)(s.t),
                p = (0, l.useSyncExternalStore)(c.d, c.b, U);
            return !d || p ? null : (n[0] !== o || n[1] !== u ? (t = (0, r.jsx)("div", {
                className: "contents",
                "data-content-search-bar": "true",
                children: (0, r.jsx)(M.a, {
                    className: u,
                    children: o
                })
            }), n[0] = o, n[1] = u, n[2] = t) : t = n[2], t)
        }

        function U() {
            return !1
        }

        function K(e) {
            let t, n, o, u, d, p, f = (0, a.c)(10),
                {
                    browserController: g
                } = e,
                h = (0, i.A)(s.n);
            if ((0, l.useSyncExternalStore)(c.d, c.b, W)) return null;
            if ("browser" === h) {
                let e;
                return f[0] !== g ? (e = (0, r.jsx)(k, {
                    controller: g
                }), f[0] = g, f[1] = e) : e = f[1], e
            }
            return f[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(O, {}), f[2] = t) : t = f[2], f[3] !== g ? (n = (0, r.jsx)(_, {
                browserController: g
            }), f[3] = g, f[4] = n) : n = f[4], f[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r.jsx)(L, {}), u = (0, r.jsx)(z, {}), d = (0, r.jsx)(E, {}), f[5] = o, f[6] = u, f[7] = d) : (o = f[5], u = f[6], d = f[7]), f[8] !== n ? (p = (0, r.jsxs)(G, {
                children: [t, n, o, u, d]
            }), f[8] = n, f[9] = p) : p = f[9], p
        }

        function W() {
            return !1
        }
        let H = Object.assign(function(e) {
            let t, n = (0, a.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, r.jsx)(r.Fragment, {
                children: o
            }), n[0] = o, n[1] = t) : t = n[1], t
        }, {
            Frame: G,
            PaneOverlay: function(e) {
                let t, n, l, c = (0, a.c)(8),
                    {
                        children: d,
                        className: p
                    } = e,
                    f = void 0 === p ? "top-0" : p,
                    g = (0, i.z)(u.a);
                return c[0] !== f ? (t = (0, o.b)("absolute inset-x-0 flex justify-end px-4 py-2", f), c[0] = f, c[1] = t) : t = c[1], c[2] !== g ? (n = e => {
                    "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), (0, s.c)(g))
                }, c[2] = g, c[3] = n) : n = c[3], c[4] !== d || c[5] !== t || c[6] !== n ? (l = (0, r.jsx)("div", {
                    className: "pointer-events-none relative z-50 h-0 shrink-0",
                    children: (0, r.jsx)("div", {
                        className: t,
                        "data-content-search-overlay": !0,
                        role: "search",
                        onKeyDown: n,
                        children: d
                    })
                }), c[4] = d, c[5] = t, c[6] = n, c[7] = l) : l = c[7], l
            },
            Surface: function() {
                let e, t = (0, a.c)(3),
                    n = (0, i.A)(s.n),
                    o = (0, i.A)(s.t);
                return t[0] !== n || t[1] !== o ? (e = (0, r.jsx)(S, {
                    children: e => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(D, {
                            browserController: e
                        }), o && "page" !== n ? (0, r.jsx)(q.a, {
                            children: (0, r.jsx)(K, {
                                browserController: e
                            })
                        }) : null]
                    })
                }), t[0] = n, t[1] = o, t[2] = e) : e = t[2], e
            },
            Controls: K,
            Controller: S,
            Input: O,
            DomainToggle: _,
            Navigation: L,
            ResultLabel: z,
            Close: E
        })
    }),
    UuV: (function(e, t, n) {
        var r = n("Qo"),
            a = n("Xnl"),
            o = n("zd"),
            i = n("tSE"),
            l = n("TwS");

        function s(e) {
            let t, n, s = (0, r.c)(7),
                {
                    conversationSource: c,
                    diffSource: u,
                    orchestrationId: d,
                    isDefault: p
                } = e,
                f = void 0 === c ? null : c,
                g = void 0 === u ? null : u,
                h = (0, a.z)(i.a);
            return s[0] !== f || s[1] !== g || s[2] !== p || s[3] !== d || s[4] !== h ? (t = () => (0, l.N)(h, {
                conversationSource: f,
                diffSource: g
            }, {
                orchestrationId: d,
                isDefault: p
            }), n = [f, g, p, d, h], s[0] = f, s[1] = g, s[2] = p, s[3] = d, s[4] = h, s[5] = t, s[6] = n) : (t = s[5], n = s[6]), (0, o.useEffect)(t, n), null
        }
        n.d(t, {
            a: () => s
        })
    }),
    h8: (function(e, t, n) {
        var r = n("L6M");

        function a(e, t, n, a) {
            let o;
            try {
                o = RegExp(t, "giu")
            } catch {
                return {
                    offsets: [],
                    totalMatches: 0,
                    error: "invalid-regex"
                }
            }
            let i = 0,
                l = n;
            return {
                offsets: e.map((e, t) => {
                    let n;
                    o.lastIndex = 0;
                    let s = [],
                        c = [],
                        u = e => {
                            i += 1, l > 0 && (s.push(e), l -= 1)
                        };
                    for (let n of e.matchAll(o)) {
                        if (0 === n[0].length) continue;
                        let o = {
                            start: n.index,
                            end: n.index + n[0].length
                        };
                        a?.[t] ? c.push((0, r.a)(e, o)) : u(o)
                    }
                    for (let e of c.sort((e, t) => e.start - t.start)) null != n && e.start < n.end ? n.end = Math.max(n.end, e.end) : (null != n && u(n), n = e);
                    return null != n && u(n), s
                }),
                totalMatches: i
            }
        }

        function o(e, t, n) {
            let r = [],
                a = 0,
                o = !1;
            if (0 === t.length) return {
                offsets: r,
                totalMatches: a,
                isCapped: o
            };
            let i = e.toLowerCase(),
                l = t.toLowerCase(),
                s = null;
            if (i.length !== e.length) {
                s = [];
                for (let t = 0; t < e.length; t += 1)
                    for (let n = 0; n < e[t].toLowerCase().length; n += 1) s.push(t)
            }
            let c = 0;
            for (let e = i.indexOf(l); - 1 !== e; e = i.indexOf(l, c)) {
                let t = e + l.length,
                    i = s?.[e] ?? e,
                    u = null == s ? t : s[t - 1] + 1;
                for (c = t; s?.[c] === u - 1;) c += 1;
                a += 1, r.length < n ? r.push({
                    start: i,
                    end: u
                }) : o = !0
            }
            return {
                offsets: r,
                totalMatches: a,
                isCapped: o
            }
        }

        function i(e, t) {
            return null == e || null == t ? null : e.matches[t] ?? null
        }

        function l(e, t) {
            let {
                query: n,
                routeContextId: r,
                stateDomain: a,
                result: o
            } = e;
            return 0 === n.length || a !== t || null == o || o.domain !== t || o.contextId !== r ? null : o
        }
        n.d(t, {
            a: () => o,
            b: () => a,
            c: () => i,
            d: () => l
        })
    }),
    TwS: (function(e, t, n) {
        var r = n("Xnl"),
            a = n("Qc"),
            o = n("ZU2"),
            i = n("gbr"),
            l = n("tSE"),
            s = n("h8");
        let c = {
                activeMatchOrdinal: 0,
                matches: 0,
                query: ""
            },
            u = (0, r.u)(l.a, []),
            d = (0, r.u)(l.a, null),
            p = (0, r.u)(l.a, {
                domain: "conversation",
                orchestrationId: null
            }),
            f = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e, n = t(p), r = t(u).findLast(e => e.orchestrationId === n.orchestrationId && null != e.orchestration.getSource(n.domain));
                return "page" === n.domain || r?.isDefault === !1 ? n.domain : ("right-panel" === t(a.e) || t(a.F)) && t(i.i) && t(o.j.activeTab$)?.tabId === "diff" ? "diff" : n.domain
            }),
            g = (0, r.u)(l.a, !1),
            h = (0, r.u)(l.a, () => `content-search-input-${crypto.randomUUID()}`),
            m = (0, r.u)(l.a, "conversation"),
            b = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return function(e) {
                    let {
                        activeOrchestrationId: t,
                        domain: n,
                        registrations: r
                    } = e, a = r.findLast(e => e.isDefault), o = [t, a?.orchestrationId];
                    for (let e of o) {
                        let t = r.findLast(t => t.orchestrationId === e && null != t.orchestration.getSource(n));
                        if (null != t) return t.orchestration
                    }
                    let i = r.findLast(e => null != e.orchestration.getSource(n));
                    if (null != i) return i.orchestration;
                    for (let e of o) {
                        let t = r.findLast(t => t.orchestrationId === e);
                        if (null != t) return t.orchestration
                    }
                    return a?.orchestration ?? null
                }({
                    activeOrchestrationId: t(d),
                    domain: t(m),
                    registrations: t(u)
                })
            }),
            v = (0, r.u)(l.a, ""),
            x = (0, r.u)(l.a, null),
            w = (0, r.u)(l.a, !1),
            y = (0, r.u)(l.a, null),
            _ = (0, r.u)(l.a, null),
            S = (0, r.u)(l.a, null),
            k = (0, r.u)(l.a, c),
            I = (0, r.u)(l.a, null),
            E = (0, r.u)(l.a, []),
            M = (0, r.u)(l.a, null),
            C = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e, n = t(E), r = t(M);
                return null != r && n.includes(r) ? r : n.at(-1) ?? null
            }),
            A = {
                query: "",
                current: 0,
                total: 0,
                pending: !1
            },
            T = (0, r.h)(l.a, A, e => {
                let t, {
                        get: n,
                        set: r
                    } = e,
                    a = n(C),
                    o = n(g),
                    i = n(m),
                    l = n(v);
                if (null == a || !o || "file" !== i || 0 === l.trim().length) return void r(A);
                let s = !1,
                    c = null;
                return r({
                    query: l,
                    current: 0,
                    total: 0,
                    pending: !0
                }), a.getController().then(e => {
                    s || (t = (c = e).subscribe(() => r(e.getSnapshot())), c.find(l), r(c.getSnapshot()))
                }).catch(() => {
                    s || r({
                        query: l,
                        current: 0,
                        total: 0,
                        pending: !1
                    })
                }), () => {
                    s = !0, t?.(), c?.close()
                }
            });

        function j(e, t) {
            return e.set(E, e => [...e, t]), () => {
                e.set(E, e => e.filter(e => e !== t)), e.get(M) === t && e.set(M, null), null == e.get(C) && "file" === e.get(m) && W(e, "conversation")
            }
        }

        function R(e, t) {
            e.set(M, t), U(e, "file")
        }

        function N(e) {
            return e.get(E).findLast(e => e.containsFocus()) ?? null
        }

        function F(e, t) {
            null != t && R(e, t), null != e.get(C) && (W(e, "file"), G(e, {
                selectDefaultTarget: !1
            }), window.requestAnimationFrame(() => {
                let t = document.getElementById(e.get(h));
                t instanceof HTMLInputElement && (t.focus(), t.select())
            }))
        }

        function D(e, t) {
            let n = e.get(C);
            null != n && n.getController().then(r => {
                e.get(g) && "file" === e.get(m) && e.get(C) === n && r.find(e.get(v), t)
            }).catch(() => {})
        }
        let P = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(b)?.getSource(t(m))
            }),
            $ = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e, n = t(P);
                return n?.domain === "page" ? n.contextId : null
            }),
            B = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(v).trim().length > 0
            }),
            O = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return (0, s.d)({
                    query: t(v).trim(),
                    routeContextId: t(x)?.contextId ?? "unavailable",
                    stateDomain: t(m),
                    result: t(x)
                }, "conversation")
            }),
            L = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return (0, s.d)({
                    query: t(v).trim(),
                    routeContextId: t(x)?.contextId ?? "unavailable",
                    stateDomain: t(m),
                    result: t(x)
                }, "diff")
            }),
            q = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e, n = t(x);
                return "page" !== t(m) || 0 === t(v).trim().length || n?.domain !== "page" || n.contextId !== t($) ? null : n
            }),
            z = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return (0, s.c)(t(x), t(y))
            });

        function G(e) {
            let {
                selectDefaultTarget: t = !0
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.get(p).orchestrationId;
            t && null != n && ei(e, n), e.set(g, !0)
        }

        function U(e, t, n) {
            var r;
            let a = n ?? (r = e, r.get(u).findLast(e => e.isDefault)?.orchestrationId ?? null);
            e.set(p, e => e.domain === t && e.orchestrationId === a ? e : {
                domain: t,
                orchestrationId: a
            }), e.get(g) && ("page" === t || "page" === e.get(m)) || null != a && ei(e, a)
        }

        function K(e) {
            "file" === e.get(m) && e.get(C)?.focus(), es(e), e.set(g, !1), e.set(v, ""), e.set(x, null), e.set(w, !1), e.set(y, null)
        }

        function W(e, t) {
            es(e), e.set(m, t), e.set(x, null), e.set(w, !1), e.set(y, null)
        }

        function H(e, t) {
            let n = e.get(S);
            (n?.conversationId !== t?.conversationId || n?.browserTabId !== t?.browserTabId) && (e.set(S, t), e.set(k, c), null == t && "browser" === e.get(m) && W(e, "conversation"))
        }

        function Q(e, t) {
            es(e), e.set(v, t), e.set(x, null), e.set(w, !1), e.set(y, null), e.set(k, {
                activeMatchOrdinal: 0,
                matches: 0,
                query: t
            })
        }

        function V(e, t) {
            e.set(I, t)
        }

        function X(e) {
            e.set(I, null)
        }

        function Z(e, t) {
            e.set(k, t), "browser" === e.get(m) && (e.set(v, t.query), e.set(w, !1))
        }

        function J(e) {
            let {
                currentDomain: t,
                hasDiffSource: n,
                hasBrowserTarget: r,
                hasFileTarget: a = !1
            } = e;
            if ("page" === t) return "page";
            let o = ["conversation"];
            n && o.push("diff"), a && o.push("file"), r && o.push("browser");
            let i = o.indexOf(t);
            return o[(i + 1) % o.length] ?? "conversation"
        }

        function Y(e, t) {
            if (0 === t.trim().length) {
                es(e), e.set(v, t), e.set(x, null), e.set(w, !1), e.set(y, null);
                return
            }
            e.set(v, t), e.set(w, !0)
        }

        function ee(e, t) {
            let n = e.get(x);
            if (null == t || null == n || 0 === n.matches.length) return void e.set(y, null);
            let r = function(e, t) {
                if (t <= 0) return 0;
                let n = e % t;
                return n < 0 ? n + t : n
            }(t, n.matches.length);
            e.get(y) === r ? ec(e)?.ensureVisibleActiveMatch() : e.set(y, r)
        }

        function et(e) {
            if ("file" === e.get(m)) return void D(e, "next");
            let t = e.get(x);
            null != t && 0 !== t.matches.length && ee(e, (e.get(y) ?? -1) + 1)
        }

        function en(e) {
            if ("file" === e.get(m)) return void D(e, "previous");
            let t = e.get(x);
            null != t && 0 !== t.matches.length && ee(e, (e.get(y) ?? 0) - 1)
        }

        function er(e, t) {
            let n = e.get(v).trim();
            if (0 === n.length) return;
            if ("file" === e.get(m)) return void D(e, t?.shift ? "previous" : "next");
            let r = e.get(x);
            r?.query !== n || r.domain !== e.get(m) ? ec(e)?.runSearch({
                selectFirstMatch: !0
            }) : t?.shift ? en(e) : et(e)
        }

        function ea(e, t) {
            if (!e.get(g)) return;
            let n = ec(e);
            (t?.source == null || n?.getSource(e.get(m)) === t.source) && n?.runSearch({
                selectFirstMatch: !1,
                scrollToMatch: !1,
                activeMatchId: t?.activeMatchId
            })
        }

        function eo(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    conversationSource: null,
                    diffSource: null
                },
                {
                    orchestrationId: n = t.conversationSource?.contextId ?? t.diffSource?.contextId ?? t.pageSource?.contextId ?? "unavailable",
                    closeOnDispose: a = null != t.pageSource,
                    isDefault: o = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = 1,
                l = 0,
                c = null,
                f = null,
                h = null,
                _ = !1,
                S = null,
                k = () => {
                    null != h && (window.clearTimeout(h), h = null)
                },
                I = () => {
                    f?.abort(), f = null
                },
                E = async n => {
                    let {
                        selectFirstMatch: a,
                        scrollToMatch: o = !0,
                        activeMatchId: u
                    } = n;
                    if (_ || ec(e) !== A) return;
                    k(), o || I();
                    let d = e.get(v).trim();
                    if (0 === d.length) return void e.set(w, !1);
                    c?.abort();
                    let p = new AbortController;
                    c = p;
                    let f = l += 1,
                        g = e.get(m),
                        h = ed({
                            domain: g,
                            conversationSource: t.conversationSource,
                            diffSource: t.diffSource,
                            pageSource: t.pageSource
                        }),
                        b = h?.contextId ?? "unavailable";
                    e.set(w, !0);
                    try {
                        let t, n = {
                            domain: g,
                            contextId: b,
                            query: d
                        };
                        if (null == h) {
                            var E;
                            E = n, t = {
                                runId: i,
                                domain: E.domain,
                                contextId: E.contextId,
                                query: E.query,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            }, i += 1
                        } else {
                            let e = i;
                            i += 1, t = {
                                ...await h.search(n, {
                                    signal: p.signal
                                }),
                                runId: e
                            }
                        }
                        if (f !== l || _ || ec(e) !== A) return;
                        let c = e.get(y),
                            m = null != c && c >= 0 && c < t.matches.length,
                            v = a && t.matches.length > 0 ? 0 : t.matches.length > 0 ? m ? c : 0 : null;
                        if (o) e.set(x, t), e.set(y, v);
                        else {
                            if (0 === t.matches.length) v = null;
                            else {
                                let n = u ?? (0, s.c)(e.get(x), c)?.id,
                                    r = t.matches.findIndex(e => e.id === n);
                                v = r >= 0 ? r : Math.min(c ?? 0, t.matches.length - 1)
                            }
                            S = `${t.runId}:${v}`, (0, r.s)(e, () => {
                                e.set(x, t), e.set(y, v)
                            })
                        }
                        e.set(w, !1)
                    } catch {
                        if (p.signal.aborted || f !== l || _ || ec(e) !== A) return;
                        e.set(x, null), e.set(y, null), e.set(w, !1)
                    }
                }, M = async () => {
                    if (ec(e) !== A) return;
                    let n = e.get(x),
                        r = e.get(y);
                    if (null == n || null == r) return;
                    I();
                    let a = new AbortController;
                    f = a;
                    try {
                        await eu(t, n, r, a.signal)
                    } finally {
                        f === a && (f = null)
                    }
                }, C = () => {
                    let n = e.get(g) ? ec(e)?.getSource(e.get(m)) : null;
                    for (let e of new Set([t.conversationSource, t.diffSource, t.pageSource])) e !== n && e?.clearCachedData?.()
                }, A = {
                    getSource: e => ed({
                        domain: e,
                        ...t
                    }),
                    clearDebouncedSearch: k,
                    ensureVisibleActiveMatch: M,
                    preserveScrollBeforeResultClear: () => {
                        I();
                        let n = e.get(x),
                            r = (0, s.c)(n, e.get(y)),
                            a = null == n ? null : ed({
                                domain: n.domain,
                                conversationSource: t.conversationSource,
                                diffSource: t.diffSource,
                                pageSource: t.pageSource
                            });
                        a?.preserveScrollBeforeResultClear?.(r?.location ?? null)
                    },
                    runSearch: E
                }, T = {
                    isDefault: o,
                    orchestration: A,
                    orchestrationId: n
                }, j = ec(e);
            e.set(u, e => [...e, T]), ec(e) !== j && (j?.preserveScrollBeforeResultClear(), el(e)), o && null != t.pageSource && e.set(p, {
                domain: "page",
                orchestrationId: n
            });
            let R = e.watch(t => {
                    t.get(g), t.get(v), t.get(m), t.get(b), (() => {
                        if (k(), c?.abort(), c = null, l += 1, I(), C(), ec(e) !== A) return;
                        let t = e.get(g),
                            n = e.get(v).trim();
                        t && 0 !== n.length && "browser" !== e.get(m) && "file" !== e.get(m) ? h = window.setTimeout(() => {
                            E({
                                selectFirstMatch: !1
                            })
                        }, 150) : e.set(w, !1)
                    })()
                }),
                N = e.watch(e => {
                    let t = e.get(x),
                        n = e.get(y);
                    if (null == t || null == n) {
                        S = null;
                        return
                    }
                    let r = `${t.runId}:${n}`;
                    r !== S && (S = r, M())
                });
            return () => {
                _ = !0;
                let r = ec(e),
                    i = r === A;
                i && (a && null != e.get(P) ? K(e) : es(e));
                let l = e.get(p),
                    s = null != t.pageSource && (l.orchestrationId === n || null == l.orchestrationId && o);
                e.set(u, e => e.filter(e => e !== T));
                let f = e.get(u).some(e => e.orchestrationId === n);
                e.get(d) !== n || f || e.set(d, null), l.orchestrationId !== n || f || e.set(p, {
                    ...l,
                    orchestrationId: null
                }), null != t.pageSource && i && e.set(m, "conversation"), s && !f && e.set(p, t => ({
                    ...t,
                    domain: ec(e)?.getSource("page") == null ? "conversation" : "page"
                }));
                let g = ec(e);
                g !== r && el(e), R(), N(), k(), c?.abort(), I(), C(), i && null != g && ea(e)
            }
        }

        function ei(e, t) {
            let n = ec(e);
            e.set(d, t), ec(e) !== n && (n?.preserveScrollBeforeResultClear(), el(e))
        }

        function el(e) {
            e.set(x, null), e.set(y, null), e.set(w, null != ec(e) && e.get(g) && e.get(v).trim().length > 0)
        }

        function es(e) {
            null != e.get(x) && ec(e)?.preserveScrollBeforeResultClear()
        }

        function ec(e) {
            return e.get(b)
        }
        async function eu(e, t, n, r) {
            let a = t.matches[n];
            if (null == a) return;
            let o = ed({
                domain: a.location.domain,
                conversationSource: e.conversationSource,
                diffSource: e.diffSource,
                pageSource: e.pageSource
            });
            null != o && await o.ensureVisible(a.location, {
                signal: r
            })
        }

        function ed(e) {
            let {
                domain: t,
                conversationSource: n,
                diffSource: r,
                pageSource: a
            } = e;
            switch (t) {
                case "conversation":
                    return n;
                case "diff":
                    return r;
                case "page":
                    return a ?? null;
                case "browser":
                case "file":
                    return null
            }
        }
        n.d(t, {
            A: () => J,
            B: () => et,
            C: () => G,
            D: () => F,
            E: () => en,
            F: () => ea,
            G: () => j,
            H: () => V,
            I: () => Q,
            J: () => H,
            K: () => U,
            L: () => W,
            M: () => Y,
            N: () => eo,
            O: () => er,
            P: () => Z,
            b: () => X,
            c: () => K,
            y: () => R,
            z: () => N
        }, {
            a: c,
            d: O,
            e: L,
            f: y,
            g: z,
            h: q,
            i: k,
            j: I,
            k: S,
            l: f,
            m: _,
            n: m,
            o: T,
            p: C,
            q: B,
            r: h,
            s: w,
            t: g,
            u: $,
            v: v,
            w: x,
            x: P
        })
    }),
    NkE: (function(e, t, n) {
        let r = new WeakMap,
            a = "data-search-result-target";

        function o(e, t) {
            return r.set(e, t), e.setAttribute(a, ""), () => {
                r.delete(e), e.removeAttribute(a)
            }
        }

        function i(e) {
            return [e, ...e.querySelectorAll(`[${a}]`)].flatMap(e => {
                let t = r.get(e);
                return null == t ? [] : [{
                    element: e,
                    target: t
                }]
            })
        }
        n.d(t, {
            a: () => i,
            b: () => o
        })
    }),
    pVN: (function(e, t, n) {
        function r(e) {
            if (e?.domain !== "diff") return {
                active: !1,
                totalMatches: 0,
                matchingPaths: []
            };
            let t = new Set;
            for (let n of e.matches) {
                let e = n.location;
                "diff" === e.domain && t.add(e.path)
            }
            return {
                active: e.query.length > 0,
                totalMatches: e.totalMatches,
                matchingPaths: Array.from(t)
            }
        }
        n.d(t, {
            a: () => r
        })
    }),
    KRu: (function(e, t, n) {
        function r(e) {
            let t = e?.context_scopes,
                n = t?.length === 1 ? t[0] : void 0;
            return n?.scope_namespace === "health" && null == n.sub_scope && (null == n.is_siloed || !1 === n.is_siloed)
        }
        n.d(t, {
            a: () => r
        })
    }),
    KBs: (function(e, t, n) {
        var r = n("Eh"),
            a = n("aM");

        function o(e) {
            let {
                sourceThreadId: t,
                input: n
            } = e;
            return `<codex_delegation>
  <source_thread_id>${l(t)}</source_thread_id>
  <input>${l(n)}</input>
</codex_delegation>`
        }

        function i(e) {
            let {
                appServerVersion: t,
                sourceThreadId: n,
                input: a,
                toolName: i
            } = e, l = null == n ? a : o({
                sourceThreadId: n,
                input: a
            });
            return (0, r.a)(t, "turnToolOutput") ? {
                input: [],
                toolOutput: {
                    name: i,
                    namespace: "codex_app",
                    output: l
                }
            } : {
                input: [{
                    type: "text",
                    text: l,
                    text_elements: []
                }]
            }
        }

        function l(e) {
            return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
        }
        n.d(t, {
            a: () => i,
            b: () => o,
            c: () => a.Ui
        })
    }),
    o9: (function(e, t, n) {
        var r = n("v4"),
            a = n("c5"),
            o = n("sd");
        let i = (0, r.a)(async () => (await n.e(625958).then(n.bind(n, "zZA"))).FeatureNavigationRoute),
            l = (0, r.a)(async () => (o.a.prefetch(), (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(569087), n.e(955446)]).then(n.bind(n, "gLu"))).OrbitPage)),
            s = (0, r.a)(async () => {
                o.a.prefetch();
                let [{
                    OrbitConversationRoute: e
                }] = await Promise.all([Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(443608)]).then(n.bind(n, "Tnj")), n.e(13181).then(n.bind(n, "Dxr")).then(e => {
                    let {
                        OrbitContentChat: t
                    } = e;
                    return t.prefetch()
                }), Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(197966)]).then(n.bind(n, "cur")).then(e => {
                    let {
                        MessagingRoomView: t
                    } = e;
                    return t.prefetch()
                })]);
                return e
            }),
            c = (0, r.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(226913), n.e(207991), n.e(644241), n.e(268665), n.e(963703), n.e(659431), n.e(777478), n.e(172601), n.e(610286), n.e(945902), n.e(164460), n.e(293453), n.e(687759), n.e(445355), n.e(431882), n.e(273469), n.e(683159), n.e(599181), n.e(252961), n.e(708454), n.e(899308), n.e(428069), n.e(225911), n.e(740647), n.e(895612), n.e(550620), n.e(639916), n.e(531579), n.e(133932), n.e(540250), n.e(773427), n.e(63968), n.e(299598), n.e(632411), n.e(962424), n.e(636093), n.e(321719), n.e(639002), n.e(15094)]).then(n.bind(n, "s2"))).LocalConversationPage),
            u = (0, r.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(226913), n.e(207991), n.e(644241), n.e(268665), n.e(659431), n.e(945902), n.e(164460), n.e(687759), n.e(445355), n.e(431882), n.e(273469), n.e(683159), n.e(599181), n.e(252961), n.e(708454), n.e(899308), n.e(428069), n.e(225911), n.e(740647), n.e(895612), n.e(550620), n.e(639916), n.e(133932), n.e(948496), n.e(771399)]).then(n.bind(n, "YcR"))).RemoteConversationPage);
        async function d() {
            await Promise.all([i.prefetch(), l.prefetch(), s.prefetch(), a.a.prefetch()])
        }
        n.d(t, {
            f: () => d
        }, {
            a: i,
            b: c,
            c: s,
            d: l,
            e: u
        })
    }),
    Vm: (function(e, t, n) {
        function r(e) {
            let {
                label: t,
                title: n = null,
                url: r
            } = e;
            try {
                let e = new URL(r);
                if ("http:" !== e.protocol && "https:" !== e.protocol || "" !== e.username || "" !== e.password) return null;
                return {
                    label: t?.trim() || `${e.host.replace(/^www\./u,"")}${e.pathname}`,
                    title: n?.trim() || null,
                    url: e.href
                }
            } catch {
                return null
            }
        }
        n.d(t, {
            a: () => r
        })
    }),
    ng4: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("oy");

        function i() {
            let e, t = (0, a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                id: "codex.archiveInfo.archived",
                defaultMessage: "Archived chat",
                description: "Toast title shown after archiving a chat or task"
            }), t[0] = e) : e = t[0], e
        }
        n.d(t, {
            a: () => i
        })
    }),
    c6i: (function(e, t, n) {
        var r = n("A"),
            a = n("oy");

        function o(e, t, n) {
            return {
                label: "undo" === e ? (0, r.jsx)(a.a, {
                    id: "codex.archiveInfo.undoLink",
                    defaultMessage: "Undo",
                    description: "Button label to undo archiving an item"
                }) : (0, r.jsx)(a.a, {
                    id: "codex.archiveInfo.viewLink",
                    defaultMessage: "View",
                    description: "Button label to open the archived chats settings page"
                }),
                onClick: t
            }
        }
        n.d(t, {
            a: () => o
        })
    }),
    WF1: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("oy"),
            i = n("ygO"),
            l = n("Fr");

        function s(e) {
            let t, n, s, c = (0, a.c)(6),
                {
                    title: u,
                    onRetry: d
                } = e;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(o.a, {
                id: "chatgptConversations.retryHistory",
                defaultMessage: "Retry",
                description: "Button that retries loading conversation history after a failed request"
            }), c[0] = t) : t = c[0], c[1] !== d ? (n = (0, r.jsx)(i.a, {
                color: "secondary",
                onClick: d,
                children: t
            }), c[1] = d, c[2] = n) : n = c[2], c[3] !== n || c[4] !== u ? (s = (0, r.jsx)(l.a, {
                title: u,
                actions: n
            }), c[3] = n, c[4] = u, c[5] = s) : s = c[5], s
        }
        n.d(t, {
            a: () => s
        })
    }),
    g3w: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("on"),
            i = n("IP"),
            l = n("i6"),
            s = n("bf"),
            c = n("T1"),
            u = n("JcE");
        let d = {
            duration: .2,
            ease: [.22, .61, .36, 1]
        };

        function p(e) {
            var t;
            let n, p, f, g, h, m, b, v, x, w, y, _ = (0, a.c)(28),
                {
                    disabled: S,
                    ref: k,
                    displayText: I,
                    loading: E,
                    onActivate: M
                } = e,
                C = void 0 !== S && S,
                A = (0, c.a)(),
                T = C || void 0,
                j = C ? "cursor-default" : "group/followup-citation cursor-interaction hover:text-info hover:decoration-inherit";
            _[0] !== j ? (p = (0, o.b)("inline rounded-md align-baseline whitespace-nowrap text-inherit underline decoration-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-[2px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none", j), _[0] = j, _[1] = p) : p = _[1];
            let R = C ? -1 : 0,
                N = C ? void 0 : M;
            _[2] !== C || _[3] !== M ? (f = e => {
                C || "Enter" !== e.key && " " !== e.key || (e.preventDefault(), M())
            }, _[2] = C, _[3] = M, _[4] = f) : f = _[4], _[5] !== A ? (g = !A && {
                opacity: 0,
                width: 0
            }, _[5] = A, _[6] = g) : g = _[6], _[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                opacity: 1,
                width: "1.5rem"
            }, _[7] = h) : h = _[7];
            let F = A ? void 0 : d;
            _[8] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsx)(s.j, {
                className: "inline-block text-default transition-transform duration-basic ease-out group-hover/followup-citation:translate-x-0.5 group-hover/followup-citation:text-info",
                "data-rtl-flip": ""
            }), _[8] = m) : m = _[8], _[9] !== F || _[10] !== g ? (b = (0, r.jsx)(i.a.span, {
                "aria-hidden": "true",
                className: "inline-flex items-center overflow-hidden align-middle",
                initial: g,
                animate: h,
                transition: F,
                children: m
            }), _[9] = F, _[10] = g, _[11] = b) : b = _[11];
            let D = void 0 !== E && E && "loading-shimmer-pure-text";
            return _[12] !== D ? (v = (0, o.b)("whitespace-normal group-hover/followup-citation:text-info", D), _[12] = D, _[13] = v) : v = _[13], _[14] !== I ? (x = (0, u.a)((t = I, (n = e => e.map(e => ("strong" === e.type || "em" === e.type) && null != e.tokens ? {
                ...e,
                tokens: n(e.tokens)
            } : "text" === e.type || "escape" === e.type ? e : {
                type: "text",
                raw: e.raw,
                text: e.raw
            }))(l.a.lexInline(t))), {}), _[14] = I, _[15] = x) : x = _[15], _[16] !== v || _[17] !== x ? (w = (0, r.jsx)("span", {
                className: v,
                children: x
            }), _[16] = v, _[17] = x, _[18] = w) : w = _[18], _[19] !== k || _[20] !== b || _[21] !== w || _[22] !== T || _[23] !== p || _[24] !== R || _[25] !== N || _[26] !== f ? (y = (0, r.jsxs)("span", {
                ref: k,
                "aria-disabled": T,
                className: p,
                role: "button",
                tabIndex: R,
                onClick: N,
                onKeyDown: f,
                children: [b, w]
            }), _[19] = k, _[20] = b, _[21] = w, _[22] = T, _[23] = p, _[24] = R, _[25] = N, _[26] = f, _[27] = y) : y = _[27], y
        }
        n.d(t, {
            a: () => p
        })
    }),
    B3k: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("oy");

        function i(e) {
            let t = (0, a.c)(2),
                {
                    speaker: n
                } = e;
            switch (n) {
                case "user": {
                    let e;
                    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)("h4", {
                        className: "sr-only m-0 select-none print:not-sr-only print:mt-4 print:mb-2 print:text-xs print:leading-normal print:font-bold",
                        children: (0, r.jsx)(o.a, {
                            id: "codex.conversation.roleHeading.user",
                            defaultMessage: "You said:",
                            description: "Screen-reader-only heading announcing the start of a user message in a conversation"
                        })
                    }), t[0] = e) : e = t[0], e
                }
                case "assistant": {
                    let e;
                    return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)("h4", {
                        className: "sr-only m-0 select-none print:not-sr-only print:mt-4 print:mb-2 print:text-xs print:leading-normal print:font-bold",
                        "data-conversation-role": "assistant",
                        tabIndex: -1,
                        children: (0, r.jsx)(o.a, {
                            id: "codex.conversation.roleHeading.assistant",
                            defaultMessage: "ChatGPT said:",
                            description: "Screen-reader-only heading announcing the start of a ChatGPT assistant message in a conversation"
                        })
                    }), t[1] = e) : e = t[1], e
                }
            }
        }
        n.d(t, {
            a: () => i
        })
    }),
    vHM: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            o = n("on"),
            i = n("N2k");

        function l(e) {
            let t, n, l, s, c = (0, a.c)(17),
                {
                    accentColor: u,
                    alignment: d,
                    children: p,
                    hasPrompt: f,
                    isAeonFormatted: g,
                    isFromOtherUser: h,
                    isTemporaryChat: m
                } = e,
                b = void 0 !== g && g,
                v = void 0 !== m && m;
            c[0] !== u ? (t = {
                "--user-message-accent-color": u
            }, c[0] = u, c[1] = t) : t = c[1];
            let x = t,
                w = "start" === (void 0 === d ? "end" : d) && i.a.leadingBubble,
                y = b && i.a.compactMessageBubble,
                _ = void 0 !== h && h && i.a.otherUserMessage,
                S = null != u && i.a.accentedBubble,
                k = b ? "py-2" : "py-2.5",
                I = v ? i.a.temporaryBubble : "rounded-2xl",
                E = !(void 0 === f || f) && "leading-none";
            return c[2] !== S || c[3] !== k || c[4] !== I || c[5] !== E || c[6] !== w || c[7] !== y || c[8] !== _ ? (n = (0, o.b)("bg-user-message text-user-message min-w-0 max-w-(--user-chat-width) overflow-hidden break-words px-(--thread-content-margin) [&_.contain-inline-size]:[contain:initial]", i.a.bubble, w, y, _, S, k, I, E, "relative text-start"), c[2] = S, c[3] = k, c[4] = I, c[5] = E, c[6] = w, c[7] = y, c[8] = _, c[9] = n) : n = c[9], c[10] !== v ? (l = v ? (0, r.jsx)("svg", {
                "aria-hidden": "true",
                className: (0, o.b)("pointer-events-none absolute inset-0 h-full w-full", i.a.temporaryOutline),
                focusable: "false",
                children: (0, r.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "calc(100% - 1px)",
                    height: "calc(100% - 1px)",
                    fill: "none",
                    stroke: "currentColor",
                    strokeOpacity: "0.4",
                    strokeWidth: "1",
                    strokeDasharray: "8 8",
                    vectorEffect: "non-scaling-stroke"
                })
            }) : null, c[10] = v, c[11] = l) : l = c[11], c[12] !== p || c[13] !== x || c[14] !== n || c[15] !== l ? (s = (0, r.jsxs)("div", {
                "data-user-message-bubble": !0,
                className: n,
                style: x,
                children: [l, p]
            }), c[12] = p, c[13] = x, c[14] = n, c[15] = l, c[16] = s) : s = c[16], s
        }
        n.d(t, {
            a: () => l
        })
    }),
    sWza: (function(e, t, n) {
        var r = n("Xnl"),
            a = n("tSE");
        let o = (0, r.v)(a.a, e => null);
        n.d(t, {}, {
            a: o
        })
    }),
    HCa: (function(e, t, n) {
        var r = n("A"),
            a = n("Bb"),
            o = n("jZD");
        let i = (0, a.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(638194)]).then(n.bind(n, "kSg"))).CookieConsentHost);

        function l(e) {
            return (0, o.a)() ? (0, r.jsx)(i, {
                ...e
            }) : null
        }
        n.d(t, {
            a: () => l
        })
    }),
    s8: (function(e, t, n) {
        var r = n("FUg"),
            a = n("qm"),
            o = n("Jd"),
            i = n("n42"),
            l = n("yG"),
            s = n("Sd"),
            c = n("CpH");
        let u = new Set,
            d = new Set,
            p = new Set;

        function f(e) {
            let {
                scope: t,
                target: n,
                ineligibility: a
            } = e;
            (0, l.a)(t, r.CodexCumberbatchPredictionIneligible, {
                generationTrigger: n.generationTrigger,
                reason: a.reason,
                model: a.model,
                hostKind: a.hostKind,
                serviceTier: a.serviceTier ?? void 0,
                promptVersion: a.promptVersion,
                parentReasoningEffort: a.parentReasoningEffort ?? void 0,
                sourceThreadId: n.threadId,
                sourceTurnId: n.latestTurnId
            })
        }

        function g(e) {
            let {
                scope: t,
                target: n,
                prediction: a
            } = e;
            u.has((0, c.a)(a)) || (u.add((0, c.a)(a)), (0, l.a)(t, r.CodexCumberbatchPredictionFinished, {
                ...b(a),
                sourceThreadId: a.sourceThreadId ?? n.threadId,
                sourceTurnId: n.latestTurnId,
                outcome: null == a.text ? "abstained" : "suggested"
            }))
        }

        function h(e) {
            let {
                scope: t,
                prediction: n,
                action: a,
                edited: u
            } = e;
            if ("shown" === a) {
                if (d.has((0, c.a)(n))) return;
                d.add((0, c.a)(n))
            }
            if ("accepted" === a) {
                if (p.has((0, c.a)(n))) return;
                p.add((0, c.a)(n))
            }(0, l.a)(t, r.CodexCumberbatchPredictionInteraction, {
                ...b(n),
                action: a,
                edited: u,
                memoryEnabled: "cloud" !== n.hostKind ? (0, i.b)(t, t.get(o.Db, (0, s.l)(t))) : void 0
            })
        }

        function m(e) {
            let {
                scope: t,
                prediction: n,
                acceptedPrediction: a,
                sentThreadId: o,
                sentTurnId: i,
                sentRequestId: s
            } = e;
            (0, l.a)(t, r.CodexCumberbatchPredictionSubmitted, {
                predictionThreadId: n.predictionThreadId,
                predictionTurnId: n.predictionTurnId,
                predictionResponseId: n.responseId,
                acceptedPrediction: a,
                sentThreadId: o,
                sentTurnId: i,
                sentRequestId: s
            })
        }

        function b(e) {
            return {
                predictionThreadId: e.predictionThreadId,
                predictionResponseId: e.responseId,
                generationTrigger: e.generationTrigger,
                hostKind: e.hostKind,
                promptVersion: e.promptVersion,
                model: e.model,
                serviceTier: e.serviceTier ?? void 0,
                reasoningEffort: e.reasoningEffort ?? void 0,
                parentReasoningEffort: e.parentReasoningEffort ?? void 0,
                configuredReasoningEffort: e.configuredReasoningEffort ?? "inherit",
                totalDurationMs: (0, a.b)(e.totalDurationMs),
                inputTokens: (0, a.b)(e.inputTokens),
                cachedInputTokens: (0, a.b)(e.cachedInputTokens),
                cacheHitRatio: null != e.inputTokens && e.inputTokens > 0 && null != e.cachedInputTokens ? e.cachedInputTokens / e.inputTokens : void 0
            }
        }
        n.d(t, {
            a: () => g,
            b: () => f,
            c: () => h,
            d: () => m
        })
    }),
    TBB: (function(e, t, n) {
        var r = n("on"),
            a = n("f6K"),
            o = n("HL"),
            i = n("SAx"),
            l = n("wgr"),
            s = n("TYy"),
            c = n("jy3"),
            u = n("svj"),
            d = n("OM"),
            p = n("s8"),
            f = n("CpH"),
            g = n("dlg");
        let h = new a.e("cumberbatch"),
            m = "cumberbatch-mention-metadata",
            b = "cumberbatch-composition";

        function v(e, t) {
            function n(n) {
                let a = t.inlineMentionIconRegistry;
                return i.a.widget(1, t => {
                    let o = t.dom.ownerDocument,
                        i = o.createElement("span");
                    i.className = "select-none", i.dataset.cumberbatch = "", i.inert = !0, i.setAttribute("aria-hidden", "true");
                    let l = e.get(d.c, "2733752831") && !e.get(g.b),
                        s = o.createElement("span");
                    for (let e of (s.className = (0, r.b)("cumberbatch-content", l && "me-1.5"), new c.a(t.state.schema).serializeFragment(n.content, {
                            document: o
                        }, s), s.querySelectorAll("*"))) a.register(e);
                    if (i.append(s), l) {
                        let t = o.createElement("span");
                        t.className = "inline-block rounded-[7px] bg-text/3 px-1.75 py-0.5 text-sm leading-4 font-normal whitespace-nowrap text-text-tertiary/50", t.textContent = e.get(u.a).formatMessage({
                            id: "composer.prediction.pressTabToAccept",
                            defaultMessage: "Press Tab to accept",
                            description: "Shown beside an AI-suggested message in a chat's message input box. Instructs the user to press the Tab key on their keyboard to use the suggested text as an editable draft. This does not send the message; the user can edit it before sending. 'tab' refers to the keyboard key, not a tab in the application. Use your judgment to choose the most recognizable name for this key in your locale: translate it where a localized name is customary, or retain 'Tab' where that is standard. Use locally appropriate capitalization. 'Accept' means to insert the suggested text into the message input box, where the user can edit it before sending. It does not mean to send the message, approve a request, or agree to terms. Keep the translation short and instructional. Space is limited."
                        }), i.append(t)
                    }
                    return i
                }, {
                    side: 1,
                    ignoreSelection: !0,
                    destroy(e) {
                        let n = t.view.dom.ownerDocument.createTreeWalker(e);
                        for (; n.nextNode();) a.unregister(n.currentNode)
                    }
                })
            }
            return new a.d({
                key: h,
                state: {
                    init: () => null,
                    apply(e, r) {
                        let a = e.getMeta(b);
                        if (null != r && void 0 !== a) return {
                            ...r,
                            hiddenForComposition: a
                        };
                        let o = e.getMeta(h);
                        if (void 0 !== o) {
                            if (o?.text == null) return null;
                            if (o.text === r?.prediction.text) return {
                                ...r,
                                prediction: o
                            };
                            let e = t.parsePromptText(o.text);
                            return {
                                prediction: o,
                                doc: e,
                                widget: n(e),
                                hiddenForComposition: r?.hiddenForComposition
                            }
                        }
                        let i = e.getMeta(m);
                        return null == r || null == i || i.eq(r.doc) ? r : {
                            ...r,
                            doc: i,
                            widget: n(i)
                        }
                    }
                },
                view: () => ({
                    update(t) {
                        let n = h.getState(t.state)?.prediction;
                        if (n?.text != null && _(t)) {
                            let t = e.get(g.c);
                            (null == t || (0, f.a)(t.prediction) !== (0, f.a)(n)) && e.set(g.c, {
                                prediction: n,
                                interaction: "shown"
                            }), (0, p.c)({
                                scope: e,
                                prediction: n,
                                action: "shown"
                            })
                        }
                    }
                }),
                props: {
                    handleDOMEvents: {
                        keydown: (e, t) => (229 === t.keyCode && null != y(e) && (e.dispatch(e.state.tr.setMeta(b, !0)), S(e)), !1),
                        compositionend: e => (S(e), !1),
                        mousedown: (e, t) => 0 === t.button && null != y(e) && (t.preventDefault(), e.focus(), !0)
                    },
                    decorations(e) {
                        let n = h.getState(e);
                        return null != n && _(t.view) ? i.b.create(e.doc, [n.widget]) : null
                    },
                    handleKeyDown(n, r) {
                        if (r.isComposing || 229 === r.keyCode || !_(n)) return !1;
                        let o = h.getState(n.state);
                        if ("Tab" !== r.key && "ArrowRight" !== r.key && "Enter" !== r.key || r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || null == o) return !1;
                        let i = n.state.tr.replaceWith(0, n.state.doc.content.size, o.doc.content);
                        return n.dispatch(i.setSelection(a.h.atEnd(i.doc))), e.set(g.b, !0), e.set(g.c, {
                            prediction: o.prediction,
                            interaction: "accepted",
                            acceptedText: t.getText()
                        }), (0, p.c)({
                            scope: e,
                            prediction: o.prediction,
                            action: "accepted"
                        }), !0
                    }
                }
            })
        }

        function x(e, t) {
            let {
                view: n
            } = e, r = h.getState(n.state);
            if (n.isDestroyed || null == r) return;
            let a = new o.m(r.doc);
            (0, l.a)(a, t), a.docChanged && n.dispatch(n.state.tr.setMeta(m, a.doc))
        }

        function w(e, t, n) {
            let r = n ?? e.get(g.d)?.latestTurnId,
                a = e.get(g.c);
            null != r && a?.prediction.hostKind === "cloud" && a.prediction.sourceTurnId !== r && e.set(g.c, null), void 0 !== h.getState(t.state) && (null != r && e.set(g.e, r), t.dispatch(t.state.tr.setMeta(h, null)))
        }

        function y(e) {
            return _(e) ? h.getState(e.state)?.prediction.text ?? null : null
        }

        function _(e) {
            let {
                state: t
            } = e, {
                doc: n,
                schema: r
            } = t;
            return !e.composing && h.getState(t)?.hiddenForComposition !== !0 && s.c.getState(t)?.active !== !0 && 1 === n.childCount && n.firstChild?.type === r.nodes.paragraph && 0 === n.firstChild.content.size
        }

        function S(e) {
            e.dom.ownerDocument.defaultView?.requestAnimationFrame(() => {
                e.isDestroyed || e.composing || e.dispatch(e.state.tr.setMeta(b, !1))
            })
        }
        n.d(t, {
            a: () => v,
            b: () => y,
            d: () => w,
            e: () => x
        }, {
            c: h
        })
    }),
    h2J: (function(e, t, n) {
        var r = n("SR"),
            a = n("Fk"),
            o = n("aM"),
            i = n("JQ"),
            l = n("qMc"),
            s = n("GaA"),
            c = n("q7"),
            u = n("OM"),
            d = n("WF"),
            p = n("s8");
        async function f(e, t, n, f) {
            let g = s.appServices?.cumberbatch;
            if (!(null == g || (0, o.Qh)(n.hostId)) && f() && (0, u.a)(e, "4290031608")) try {
                let o = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = (0, r.a)(o, await t.getCachedConversationMetadata(n.conversationId), !1);
                    if (!f() || !(0, u.a)(e, "4290031608") || s?.streamRole?.role !== "owner" || s.ephemeral || s.sideConversation || (0, i.a)(s.threadStartKind, s.threadSource) || e.get(l.b, n.conversationId) || s.latestTurnId !== n.turnId) return;
                    let d = {
                            hostId: n.hostId,
                            threadId: n.conversationId,
                            latestTurnId: n.turnId,
                            generationTrigger: "live"
                        },
                        h = (0, r.a)(o, new a.b(t => {
                            f() && (0, p.b)({
                                scope: e,
                                target: d,
                                ineligibility: t
                            })
                        }), !1),
                        m = await (0, c.a)(g.requestUserMessagePrediction(d, h));
                    null != m && f() && (0, p.a)({
                        scope: e,
                        target: d,
                        prediction: m
                    })
                } catch (e) {
                    o.error = e, o.hasError = !0
                } finally {
                    (0, r.e)(o)
                }
            } catch (e) {
                f() && d.a.debug("Cumberbatch background prediction did not finish", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            }
        }
        n.d(t, {
            a: () => f
        })
    }),
    CpH: (function(e, t, n) {
        function r(e) {
            return e.responseId ?? e.predictionThreadId
        }
        n.d(t, {
            a: () => r
        })
    }),
    dlg: (function(e, t, n) {
        var r = n("Xnl"),
            a = n("eEq"),
            o = n("rl"),
            i = n("Jd"),
            l = n("vd"),
            s = n("GaA"),
            c = n("OW"),
            u = n("Sd"),
            d = n("AD"),
            p = n("OM");
        let f = (0, n("Nw").b)("cumberbatch-has-accepted-prediction", !1),
            g = (0, r.c)(c.a, e => {
                let {
                    get: t
                } = e;
                return t(p.c, "4290031608") && (0, d.b)(t, (0, a.a)().enabled) && null != s.appServices.cumberbatch
            }),
            h = (0, r.u)(u.a, () => null),
            m = (0, r.u)(u.a, () => null),
            b = (0, r.c)(u.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, r = (0, u.l)(n), a = t(i.q, r);
                if ("ready" !== a.status || null == r) return null;
                let s = a.hostId;
                if ("connected" !== t(o.b, s)) return null;
                let c = {
                        hostId: s,
                        threadId: r
                    },
                    d = t(l.p, c)?.at(-1) ?? null,
                    p = t(l.x, d);
                if (null == p || "inProgress" === p || t(i.nc, c)?.type === "active") return null;
                let f = t(l.t, d);
                return null == f || f === t(h) ? null : {
                    hostId: s,
                    threadId: r,
                    latestTurnId: f
                }
            });
        n.d(t, {}, {
            a: g,
            b: f,
            c: m,
            d: b,
            e: h
        })
    }),
    mFD: (function(e, t, n) {
        let r = Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(226913)]).then(n.bind(n, "Aih"));

        function a(e, t) {
            e instanceof Error && r?.then(n => {
                let {
                    addBrowserDatadogRumError: r
                } = n;
                return r(e, t)
            }).catch(() => {})
        }
        n.d(t, {
            b: () => a
        }, {
            a: r
        })
    }),
    Aih: (function(e, t, n) {
        n.r(t), n.d(t, {
            addBrowserDatadogRumAction: () => R,
            addBrowserDatadogRumError: () => j,
            addBrowserDatadogRumFeatureFlagEvaluation: () => N,
            addBrowserDatadogRumMissingRouteAction: () => F,
            addBrowserDatadogRumTiming: () => B,
            initializeBrowserDatadogRum: () => T,
            setBrowserDatadogRumOperationalContext: () => D,
            setBrowserDatadogRumUser: () => P,
            setBrowserDatadogRumView: () => $
        });
        var r = n("dri"),
            a = n("qmg"),
            o = n("SCl"),
            i = n("cX"),
            l = n("QRV"),
            s = n("M8l"),
            c = n("un"),
            u = n("f1u");
        let d = ["Load failed", "Request timeout", "Request Timeout", "Script error.", "Failed to execute 'insertBefore' on 'Node'", "ResizeObserver loop completed with undelivered notifications.", "ResizeObserver loop limit exceeded", "Object Not Found Matching Id", "Object.hasOwn is not a function"],
            p = /^TypeError: node\.querySelector is not a function\n\s+at MutationObserver\.observe\.childList @ <anonymous>:\d+:\d+$/,
            f = [];

        function g(e) {
            try {
                let t = new URL(e, window.location.origin);
                return "ab.chatgpt.com" === t.hostname || "api.oaistatsig.com" === t.hostname || "https://services.sheerid.com" === t.origin && t.pathname.startsWith("/verify/") || t.origin === window.location.origin && /^\/(?:backend-api|__codex-api)\/compliance\/age_verification\/persona\/inquiries\/[^/]+\/status$/.test(t.pathname) || t.pathname.startsWith("/ces/") || "/awe/api/v2/rum" === t.pathname
            } catch {
                return !0
            }
        }

        function h(e) {
            let t = f.findIndex(t => t <= e);
            return -1 === t ? f.length : t
        }
        var m = n("WWW"),
            b = n("Ggp"),
            v = n("yaH"),
            x = n("Y9"),
            w = n("DZX"),
            y = n("nZ");
        let _ = /\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(?=\/|$)/gi,
            S = [
                [/^\/models$/, "/models"],
                [/^\/f\/conversation$/, "/f/conversation"],
                [/^\/f\/conversation\/prepare$/, "/f/conversation/prepare"],
                [/^\/f\/conversation\/resume$/, "/f/conversation/resume"],
                [/^\/conversation\/init$/, "/conversation/init"],
                [/^\/conversations\/batch$/, "/conversations/batch"],
                [/^\/conversations\/search$/, "/conversations/search"],
                [/^\/conversation\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "/conversation/:conversationId"],
                [/^\/conversations\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "/conversations/:conversationId"],
                [/^\/files$/, "/files"],
                [/^\/files\/download\/[^/]+$/, "/files/download/:fileId"]
            ],
            k = new Set(["Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError", "DOMException", "AbortError", "NetworkError", "NotAllowedError", "NotFoundError", "NotSupportedError", "InvalidStateError", "SecurityError", "QuotaExceededError", "TimeoutError", "HierarchyRequestError", "MediaError", "default-src", "script-src", "script-src-elem", "script-src-attr", "style-src", "style-src-elem", "style-src-attr", "connect-src", "img-src", "font-src", "media-src", "object-src", "frame-src", "child-src", "worker-src", "manifest-src", "base-uri", "form-action", "frame-ancestors", "trusted-types", "require-trusted-types-for"]),
            I = new Set(["browser.memory_usage", "chatgpt.web.logout.context_ready", "manual_cloudflare_challenge_invocation", "account_inventory_recovery", "codex_web_missing_route_redirect", "credit_checkout_operation", "pronunciation-audio", "image-gen-image-bytes-loaded", "shopping.product_image.not_rendered", "shopping.product_image.load_attempt", "passkey_credential_manager_sync_unsupported", "passkey_credential_manager_sync_success", "passkey_credential_manager_sync_failure", "persona.age_verification.webview.complete", "persona.age_verification.webview.cancelled", "security_settings_page_viewed", "security_history_entrypoint_viewed", "security_history_page_viewed", "security_history_availability_checked", "security_history_request_completed", "security_history_retry", "security_history_view_state_changed", "RequestError", "whisper-recording.start", "whisper-recording.cancel", "whisper-recording.submit", "whisper-transcription.request", "whisper-transcription.requestSuccess", "whisper-transcription.durationCalibration", "whisper-transcription.transcriptDelivered", "whisper-transcription.transcriptInsertedIntoComposer", "dictation.streaming.get_user_media_resolved", "dictation.streaming.audio_context_ready", "dictation.streaming.first_audio_callback", "dictation.streaming.capture_pipeline_ready", "dictation.streaming.stop_recording"]),
            E = !1,
            M = null,
            C = null,
            A = new Map;

        function T() {
            if (E) return;
            let {
                deploymentTrack: e,
                isSearchEvals: t,
                isRoutingExperimentParticipant: n,
                isFedrampCompliantWorkspace: y
            } = (0, s.getClientBootstrap)();
            if (t) return;
            let _ = window.location.hostname,
                S = "prod";
            "localhost" === _ || "127.0.0.1" === _ ? S = "dev" : ("chatgpt-staging.com" === _ || _.endsWith(".chatgpt-staging.com")) && (S = "staging");
            let M = document.documentElement.dataset.deployment ?? "public";
            r.b.setGlobalContextProperty("deployment", M);
            let T = (0, c.a)();
            T && r.b.setGlobalContextProperty("client_build_revision", T), null != e && r.b.setGlobalContextProperty("track", e);
            let j = document.documentElement.dataset.pageLoadId;
            null != j && r.b.setGlobalContextProperty("page_load_id", j);
            let N = !1;
            r.b.init({
                applicationId: "593ecf44-d973-46cd-8609-3d5a15fe4e9e",
                clientToken: "pub1f79f8ac903a5872ae5f53026d20a77c",
                site: "datadoghq.com",
                service: "chatgpt-web-merge",
                env: S,
                version: (0, o.c)(),
                proxy: ("chatgpt.com" === _ || "chatgpt-staging.com" === _) && (0, i.c)("2461492349")?.value === !0 ? e => {
                    let {
                        path: t,
                        parameters: n,
                        subdomain: r
                    } = e, a = "/api/v2/rum" === t ? "/awe/api/v2/rum" : `https://${r?`${r}.`:""}browser-intake-datadoghq.com${t}`;
                    return n ? `${a}?${n}` : a
                } : void 0,
                allowedTrackingOrigins: [/^https:\/\/(?:[a-z0-9-]+\.)*chatgpt(?:-staging)?\.com$/],
                sessionSampleRate: "prod" === S && "canary" !== e ? 1 : 100,
                sessionReplaySampleRate: 0,
                profilingSampleRate: 100 * (!0 !== y && "true" === document.documentElement.dataset.jsp),
                trackResources: !0,
                trackUserInteractions: !1,
                trackLongTasks: !0,
                defaultPrivacyLevel: r.a.MASK,
                enablePrivacyForActionName: !0,
                beforeSend(e, t) {
                    if ("view" === e.type && (0, w.a)(e), "error" === e.type && "console" === e.error.source && "NetworkError" === e.error.type && e.connectivity?.status === "not_connected" || "action" === e.type && ("custom" !== e.action.type || !I.has(e.action.target?.name ?? "")) || "error" === e.type && (function(e) {
                            if (e.stack?.includes("-extension://") || /\n\s+at .* @ file:\/\/\/[^\n]+\.safariextension\/[^\n]+:\d+:\d+$/m.test(e.stack ?? "") || "report" === e.source && /\n\s+at .* @ (?:chrome|moz|safari(?:-web)?)-extension:\d+:\d+$/m.test(e.stack ?? "") || "console" === e.source || "RequestError" === e.type || d.some(t => e.message.includes(t)) || "source" === e.source && e.message.includes("Zotero") || "source" === e.source && "TypeError" === e.type && "node.querySelector is not a function" === e.message && p.test(e.stack ?? "") || "source" === e.source && "AbortError" === e.type && ("Fetch is aborted" === e.message || "Request canceled" === e.message || "signal is aborted without reason" === e.message || "BodyStreamBuffer was aborted" === e.message)) return !0;
                            let t = Date.now();
                            return !!(h(t - 6e4) >= 100 || h(t - 864e5) >= 1e3) || (f.unshift(t), f.splice(1e3), !1)
                        }(e.error) || "error" in t && null != (0, l.d)(t.error))) return !1;
                    if ("error" === e.type) {
                        if (!0 === y) {
                            if (e.error.causes?.length || e.error.component_stack || null != e.error.type && !k.has(e.error.type)) return !1;
                            let n = e.context?.renderer_error_source,
                                r = e.context?.settings_section;
                            e.context = {
                                renderer_error_source: "error_boundary" === n || "lazy_component" === n ? n : void 0,
                                settings_section: u.a.find(e => e === r),
                                bundle_locations: "error" in t ? (0, l.c)(t.error, window.location.origin) : void 0
                            }, e.error.message = `Browser ${e.error.type??"error"}`, null != e.error.stack && (e.error.stack = ""), null != e.error.handling_stack && (e.error.handling_stack = ""), null != e.error.fingerprint && (e.error.fingerprint = "")
                        }
                        if ("report" === e.error.source && null != e.error.csp && null != e.error.stack) {
                            let t = e.error.stack.lastIndexOf("\n  at ");
                            e.error.stack = e.error.message + (-1 === t ? "" : e.error.stack.slice(t))
                        }
                        if ("connect-src" === e.error.type && "report" === e.error.source && "error" in t && t.error instanceof SecurityPolicyViolationEvent) {
                            let n = t.error,
                                r = n.originalPolicy.split(";").map(e => e.trim().split(/\s+/)).find(e => {
                                    let [t] = e;
                                    return "connect-src" === t
                                });
                            e.context = {
                                ...e.context,
                                csp: {
                                    is_trusted: n.isTrusted,
                                    has_original_policy: "" !== n.originalPolicy,
                                    has_source_file: "" !== n.sourceFile,
                                    has_connect_src: null != r,
                                    connect_src_allows_self: r?.includes("'self'"),
                                    connect_src_allows_page_origin: r?.includes(window.location.origin),
                                    blocked_is_same_origin: URL.parse(n.blockedURI)?.origin === window.location.origin
                                }
                            }
                        }
                        if (e.error.causes?.some(e => (0, a.b)(e.message) !== e.message || null != e.stack && (0, a.b)(e.stack) !== e.stack)) return !1;
                        if (e.error.message = (0, a.b)(e.error.message), null != e.error.stack && (e.error.stack = (0, a.b)(e.error.stack)), null != e.error.handling_stack && (e.error.handling_stack = (0, a.b)(e.error.handling_stack)), null != e.error.fingerprint && (e.error.fingerprint = (0, a.b)(e.error.fingerprint)), "error" in t) {
                            let n = (0, l.a)(t.error, window.location.origin);
                            null != n && (e.context = {
                                ...e.context,
                                aggregate_error: n
                            });
                            let r = (0, m.a)(t.error);
                            null != r && (e.context = {
                                ...e.context,
                                markdown_range: r
                            })
                        }
                    }
                    "view" === e.type && e.view.performance?.lcp?.resource_url != null && (e.view.performance.lcp.resource_url = "");
                    let n = A.get(e.view.id) ?? (r.b.getInternalContext()?.view?.id === e.view.id ? C : null) ?? "/unknown";
                    (!0 === y || e.view.name?.startsWith("/")) && (e.view.name = n);
                    let o = L(e.view.url, n, !0 === y);
                    if (null == o) {
                        if (!0 !== y || "view" !== e.type) return !1;
                        e.view.url = `${window.location.origin}/unknown`
                    } else e.view.url = o;
                    if (e.view.referrer && (e.view.referrer = L(e.view.referrer, !0 === y ? "/referrer" : void 0, !0 === y) ?? (!0 === y ? "" : void 0)), "resource" === e.type) {
                        if (g(e.resource.url)) return !1;
                        let t = !0 === y ? O(e.resource.url) : L(e.resource.url);
                        if (null == t) return !1;
                        e.resource.url = t
                    }
                    if ("error" === e.type && e.error.resource) {
                        if (g(e.error.resource.url)) return !1;
                        let t = !0 === y ? O(e.error.resource.url) : L(e.error.resource.url);
                        if (null == t) return !1;
                        e.error.resource.url = t
                    }
                    if (!0 === y && "long_task" === e.type)
                        for (let t of e.long_task.scripts ?? []) t.source_url = (0, l.b)(t.source_url ?? "", window.location.origin) ?? "", t.invoker = "";
                    return "view" !== e.type || N || (N = !0, queueMicrotask(() => {
                        (0, v.a)(e => {
                            R("browser.memory_usage", e)
                        }, () => null != r.b.getInternalContext())
                    })), !0
                }
            }), E = !0, window.addEventListener("pagehide", () => b.a.leave()), document.addEventListener("visibilitychange", () => {
                "visible" !== document.visibilityState && b.a.hidden()
            }), (0, x.d)((e, t) => {
                x.a.has(e) && r.b.addTiming(`page_load.${e}`, t)
            })
        }

        function j(e, t) {
            E && (null == t ? r.b.addError(e) : r.b.addError(e, t))
        }

        function R(e, t) {
            E && r.b.addAction(e, {
                ...t,
                web_frontend: "codex_webview"
            })
        }

        function N(e, t) {
            E && r.b.addFeatureFlagEvaluation(e, t)
        }

        function F(e, t, n) {
            R("codex_web_missing_route_redirect", {
                has_fragment: +("" !== n),
                has_query: +("" !== t),
                path_depth_capped_at_4: Math.min(e.split("/").filter(e => "" !== e).length, 4)
            })
        }

        function D(e) {
            let {
                isAuthenticated: t,
                locale: n
            } = e;
            E && (r.b.setGlobalContextProperty("locale", n), null == t ? r.b.removeGlobalContextProperty("is_authenticated") : r.b.setGlobalContextProperty("is_authenticated", t))
        }

        function P(e) {
            if (E) {
                if (null == e) return void r.b.clearUser();
                if (null == e.userId) {
                    r.b.clearUser(), r.b.setUserProperty("account_plan_type", e.accountPlanType);
                    return
                }
                r.b.setUser({
                    id: e.userId,
                    account_id: e.accountId ?? void 0,
                    account_plan_type: e.accountPlanType
                })
            }
        }

        function $(e) {
            if (C = e, E) {
                let t = r.b.getInternalContext()?.view?.id;
                if (null != t && (A.set(t, e), A.size > 32)) {
                    let e = A.keys().next().value;
                    null != e && A.delete(e)
                }
                r.b.setViewName(e)
            }
        }

        function B(e, t) {
            (0, y.c)({
                name: e,
                source: "RUM",
                startedAtMs: performance.timeOrigin,
                durationMs: t - performance.timeOrigin
            }), "entry.client" === e ? M = t : null != M && (0, y.c)({
                name: "entry_client_to_composer_ttfi_ms",
                source: "RUM",
                startedAtMs: M,
                durationMs: t - M
            }), E && r.b.addTiming(e, t)
        }

        function O(e) {
            let t = L(e, void 0, !0);
            if (null == t) return null;
            let n = (0, l.b)(t, window.location.origin);
            if (null != n) return n;
            let r = new URL(e, window.location.origin).pathname.match(/^\/(backend-api|__codex-api)(\/.*)$/);
            if (null != r) {
                let e = S.find(e => {
                    let [t] = e;
                    return t.test(r[2])
                });
                if (null != e) return `${window.location.origin}/${r[1]}${e[1]}`
            }
            return `${window.location.origin}/resource`
        }

        function L(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            try {
                let r = new URL(e, window.location.origin);
                if (r.origin !== window.location.origin) return null;
                return r.search = "", r.hash = "", n && (r.username = "", r.password = ""), t?.startsWith("/") && (r.pathname = t), r.pathname = r.pathname.replace(/^(\/(?:backend-api|__codex-api)\/wham\/shared_threads)\/[^/]+/, "$1/:shareId").replace(/^(\/(?:backend-api|__codex-api)\/wham\/shared_threads\/:shareId\/assets)\/[^/]+/, "$1/:assetId").replace(/^(\/(?:codex\/app\/)?s)\/[^/]+/, "$1/:postId").replace(_, "/:id"), r.toString()
            } catch {
                return null
            }
        }
    })
};