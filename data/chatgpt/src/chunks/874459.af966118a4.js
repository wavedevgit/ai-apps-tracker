export const __rspack_esm_id = 874459;
export const __rspack_esm_ids = [874459];
export const __webpack_modules__ = {
    Q5Ju: (function(e, t, r) {
        var n = r("JXtc");

        function i(e) {
            return null != e && "widget" in e
        }

        function o(e) {
            let {
                csp: t,
                height_hint: r,
                html: i,
                prefers_border: o
            } = e.widget, s = e.resource ?? {
                contents: [{
                    _meta: {
                        "openai/ui": {
                            availableDisplayModes: e.widget.available_display_modes ?? void 0,
                            preferredDisplayMode: e.widget.preferred_display_mode ?? void 0
                        },
                        "openai/widgetCSP": null == t ? void 0 : {
                            base_uri_domains: t.base_uri_domains ?? [],
                            connect_domains: t.connect_domains ?? [],
                            frame_domains: t.frame_domains ?? [],
                            resource_domains: t.resource_domains ?? []
                        },
                        "openai/widgetHeightHint": r ?? void 0,
                        "openai/widgetMinFrameHeight": a(e),
                        "openai/widgetDomain": e.widget.domain ?? void 0,
                        "openai/widgetPrefersBorder": o ?? !1
                    },
                    mimeType: "text/html+skybridge",
                    text: i,
                    uri: e.request.template
                }]
            }, l = (0, n.b)(s);
            if (l?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
            let _ = e.widget.inline_frame_padding;
            return {
                ...l,
                inlineFramePadding: null == _ ? void 0 : {
                    blockStart: _.block_start,
                    blockEnd: _.block_end,
                    inlineStart: _.inline_start,
                    inlineEnd: _.inline_end
                },
                resourceKey: e.resourceKey,
                resourceQuery: e.resourceQuery,
                widget: e.widget,
                appIcon: {
                    alt: e.widget.name ?? void 0,
                    logoUrl: e.widget.logo_url,
                    logoDarkUrl: e.widget.logo_url_dark
                },
                fitWidth: "modal" !== e.mcpAppHostAdapter.displayMode && !0 === e.widget.fit_width,
                widthHint: e.widget.width_hint ?? void 0
            }
        }

        function a(e) {
            return e.widget.height_hint, 0
        }
        r.d(t, {
            a: () => a,
            b: () => o,
            c: () => i
        })
    }),
    SoU3: (function(e, t, r) {
        var n = r("D7Ms"),
            i = r("SZCv"),
            o = r.n(i),
            a = r("iTtm"),
            s = r("qx55"),
            l = r("ALWK"),
            _ = r("kl6F"),
            d = r("Mwpn"),
            c = r("Q5Ju");
        let E = (0, a.d)(_.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: i
                } = t, o = i(l.j, r), a = o?.sessionId == null ? null : o.content, s = a?.resource;
                return null != n && null != a && (0, c.c)(s) && s.resourceKey === n ? s.widget : null
            }),
            u = (0, a.d)(_.a, (e, t) => {
                let {
                    retainFrame: r = !0,
                    ...i
                } = e, {
                    get: o
                } = t, a = o(d.a, i), _ = r && null == a.data ? o(l.j, i.mcpAppId) : null, E = _?.content, u = E?.resource, p = _?.sessionId != null && null != E && (0, c.c)(u) && null != u.resourceKey && null != u.resourceQuery && (0, n.f)([u.resourceQuery]) === (0, n.f)([i]) && "current" === o(s.d, E.resourceIdentity) ? {
                    widget: u.widget,
                    resourceKey: u.resourceKey,
                    resourceIdentity: E.resourceIdentity
                } : void 0, T = a.data ?? p;
                return {
                    ...a,
                    data: null == T ? void 0 : {
                        ...T,
                        resourceQuery: i
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: o()
            });
        r.d(t, {}, {
            a: E,
            b: u
        })
    }),
    OMcg: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => ex,
            EcosystemWidgetDialog: () => eU,
            a: () => eq
        });
        var n = r("ABep"),
            i = r("QosV");
        async function o() {
            return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
        }
        var a = r("on57"),
            s = r("iTtm"),
            l = r("M7HN"),
            _ = r("zd8w"),
            d = r("Wf1j"),
            c = r("oyxz"),
            E = r("Qgfj"),
            u = r("jqIZ"),
            p = r("ZU27"),
            T = r("uUH7"),
            I = r("EOo5"),
            A = r("kphc"),
            N = r("ygO2"),
            g = r("JNtf"),
            C = r("RNul"),
            h = r("SGsN"),
            f = r("PeqE"),
            m = r("ASxG"),
            y = r("Cslg"),
            D = r("XCEe"),
            R = r("FNWO"),
            G = r("O0Tw");
        let P = m.strictObject({
                title: m.string().optional(),
                params: m.strictObject({
                    view: m.literal("accountLinking"),
                    initialTab: m.enum(["accounts", "creditScore", "realEstate"]).optional()
                })
            }),
            v = m.object({
                type: m.literal("count"),
                label: m.literal("ledger.onboarding_syncing_visible")
            });
        var w = r("cTih"),
            L = r("O23H"),
            b = r("tbqK"),
            O = r("AHnN"),
            F = r("ALWK"),
            H = r("ze43"),
            S = r("Sd8U"),
            W = r("tSEg"),
            U = r("Mwpn"),
            V = r("Q5Ju"),
            Y = r("SoU3"),
            x = r("OOaz"),
            k = r("MrGp"),
            q = r("kSHG"),
            j = r("P93s"),
            M = r("OWtl"),
            K = r("OMIV"),
            B = r("bnxy"),
            $ = r("rxj0"),
            z = r("IDHB");
        let Z = (0, s.d)(M.a, (e, t) => {
            let {
                get: r
            } = t, n = r(y.m);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r(K.c, "3080374709") || null == e || null == r(k.j, e) || null != r(k.Z, e)) return !1;
            let i = r(k.x, e);
            return ("tpp" === i || "flora" === i) && !r($.d, e)
        });
        async function Q(e, t, n, i) {
            let {
                chatGptThreadId: o,
                sourceMessageId: a
            } = t.request;
            if (!a) throw (0, j.a)("File opening requires a source message", q.q.MethodNotFound);
            let s = e.get(k.j, o),
                {
                    accountId: l,
                    userId: _
                } = t.resourceIdentity.identity,
                d = e => e.get(W.h) || !e.get(Z, o) || e.get(y.f) !== l || e.get(y.k) !== _ || e.get(k.j, o) !== s,
                c = () => {
                    if (i.throwIfAborted(), null == s || d(e)) throw (0, j.a)("File opening is unavailable for this widget", q.q.MethodNotFound)
                };
            if (c(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, j.a)("Cannot open this file path", q.q.InvalidParams);
            let E = e.get(k.R, o),
                u = (0, z.a)(e, o, {
                    type: "sandbox",
                    messageId: a,
                    sandboxPath: n
                }),
                {
                    canOpenChatGptFilePreview: p,
                    openChatGptFile: T
                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(380667)]).then(r.bind(r, "XkLc"));
            if (c(), !p({
                    browserPreview: !0
                })) throw (0, j.a)("File previews are unavailable in this host", q.q.MethodNotFound);
            try {
                await T(e, {
                    conversationId: s,
                    fileName: (0, B.j)(n),
                    gizmoId: E,
                    target: u,
                    tabKey: `${a}:${n}`,
                    browserPreview: !0,
                    downloadFallback: !1,
                    isAccessBlocked: d,
                    signal: i
                })
            } catch {
                throw c(), (0, j.a)("Unable to open file", q.q.InternalError)
            }
            c()
        }
        var X = r("T8YV"),
            J = r("HUQj"),
            ee = r("z8ZL"),
            et = r("qx55"),
            er = r("Sbyb"),
            en = r("jEN2"),
            ei = r("JYRT"),
            eo = r("ripK"),
            ea = r("g2p6"),
            es = r("sWz1"),
            el = r("EA6X"),
            e_ = r("g25Y"),
            ed = r("Ot7V"),
            ec = r("X6Vn"),
            eE = r("vgfv"),
            eu = r("yGJW"),
            ep = r("yI91"),
            eT = r("Kwur"),
            eI = r("VV1g"),
            eA = r("aRhc");
        let eN = "redirectUrl",
            eg = m.object({
                href: m.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: m.union([m.string(), m.boolean()]).optional(),
                openMode: m.enum(["tab", "popup"]).optional()
            });
        async function eC(e, t, r, n, i, o) {
            i(n);
            let a = eI.b.safeParse(r);
            if (a.success) return !0 === t.widget.is_verified_first_party && (await o?.(a.data.href, n), i(n)), !0;
            let {
                href: s,
                redirectUrl: l,
                openMode: _
            } = eg.parse(r);
            if (/^data:/i.test(s)) {
                if (s.length > 0x1000000) throw Error("CSV export is too large");
                let r = s.indexOf(","),
                    o = decodeURIComponent(s.slice(r + 1)),
                    a = new Blob([/;base64$/i.test(s.slice(0, r)) ? (0, ep.a)(o) : o], {
                        type: "text/csv;charset=utf-8"
                    });
                if (a.size > 8388608) throw Error("CSV export is too large");
                return eh(e, t, "data:text/csv", "tab"), (0, ec.f)(e, e_.ExternalLinkConfirmationDialog, {
                    href: s,
                    downloadFilename: "export.csv",
                    initiator: "mcp_app_resource",
                    signal: n,
                    onDownload: () => {
                        try {
                            i(n)
                        } catch {
                            return
                        }(0, eo.a)(a, "export.csv")
                    }
                }), !0
            }
            if (null == _ && t.mcpAppHostAdapter.onOpenLink?.(s)) return !0;
            if (/^codex(?:-dev)?:/.test(s)) return !1;
            let d = !0 === t.widget.is_verified_first_party;
            if (d && null == _ && await o?.(s, n)) return !0;
            i(n);
            let c = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                E = (0, eA.c)(s, {
                    connectDomains: t.widget.csp?.connect_domains
                }, t.widget.domain) || (0, eA.b)(s, c),
                u = !/^https?:/.test(s);
            if (u && !E) throw Error("The app has not declared this external protocol");
            let p = new URL(s),
                T = !u && p.origin === window.location.origin;
            p.search = "", p.hash = "";
            let I = e.get(k.j, t.request.chatGptThreadId ?? null);
            eh(e, t, p.href, _);
            let A = s;
            E && !T && !1 !== l && (null != I || null == t.request.chatGptThreadId) && (A = function(e, t) {
                let r;
                if (!t) return e;
                let n = e.startsWith("http://") || e.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(e);
                try {
                    r = new URL(e)
                } catch {
                    return e
                }
                return !n || r.searchParams.get(eN) ? e : (r.searchParams.set(eN, t), r.toString())
            }(s, null == I ? window.location.href : new URL(`/c/${encodeURIComponent(I)}`, window.location.origin).href));
            let N = T || E;
            if (!N && d) try {
                N = (await eT.Request.safePost("/ecosystem/url_safe", {
                    requestBody: {
                        url: s,
                        resolved_pineapple_uri: t.request.appUri
                    },
                    additionalHeaders: null == t.resourceIdentity.identity.accountId ? void 0 : {
                        "ChatGPT-Account-ID": t.resourceIdentity.identity.accountId
                    },
                    signal: n
                })).safe
            } catch {}
            i(n);
            let g = "Apple Computer, Inc." === navigator.vendor,
                C = () => {
                    try {
                        i(n)
                    } catch {
                        return
                    }
                    u ? window.open(A, "_blank", "noopener,noreferrer") : d && "popup" === _ && N && !g ? (0, eE.a)(e, A) : (0, ed.f)({
                        href: A,
                        initiator: "mcp_app_resource"
                    })
                };
            return !N || g || u ? (0, ec.f)(e, e_.ExternalLinkConfirmationDialog, {
                href: A,
                initiator: "mcp_app_resource",
                showCopyLink: !N,
                signal: n,
                onOpen: C
            }) : C(), !0
        }

        function eh(e, t, r, n) {
            let i = !0 === t.widget.is_verified_first_party,
                o = e.get(k.j, t.request.chatGptThreadId ?? null);
            (0, eu.a)(e, el.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === t.mcpAppHostAdapter.displayMode ? el.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : el.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "CHATGPT_LINK_TYPE_WIDGET",
                attributionId: t.attributionId,
                domain: t.widget.domain ?? void 0,
                distributionChannel: t.distributionChannel ?? (i ? "openai" : "external"),
                openMode: i && "popup" === n ? "popup" : "tab",
                widgetSessionId: t.widgetSessionId,
                widgetActionType: "open_external",
                conversationId: o ?? void 0,
                messageId: t.request.sourceMessageId,
                parentContext: {
                    widgetType: t.request.appUri,
                    widgetName: t.request.template
                },
                url: r
            })
        }
        var ef = r("iqEK"),
            em = r("UxLW"),
            ey = r("vvmK");
        let eD = m.object({
            fileId: m.string().min(1)
        });
        var eR = r("bTvG"),
            eG = r("JKSp"),
            eP = r("PFjh"),
            ev = r("hkUn");
        let ew = {
                label: m.string(),
                tags: m.array(m.object({
                    key: m.string(),
                    value: m.string()
                })).optional()
            },
            eL = m.discriminatedUnion("type", [m.object({
                type: m.literal("event"),
                label: m.string(),
                payload: m.record(m.string(), m.json()).optional()
            }), m.object({
                type: m.literal("interaction"),
                ...ew
            }), m.object({
                type: m.literal("count"),
                ...ew,
                count: m.number().optional()
            }), m.object({
                type: m.literal("hist"),
                ...ew,
                value: m.number()
            }), m.object({
                type: m.literal("error")
            })]);
        var eb = r("Igop"),
            eO = r("DSZZ");
        let eF = "openai/deep-research/report-copy",
            eH = m.discriminatedUnion("phase", [m.strictObject({
                phase: m.literal("start"),
                id: m.uuid(),
                length: m.number().int().nonnegative()
            }), m.strictObject({
                phase: m.literal("finish"),
                id: m.uuid(),
                success: m.boolean()
            })]);
        var eS = r("AuIy"),
            eW = r("cDR4");

        function eU(e) {
            let t, r = (0, i.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(eV, {
                ...e
            }) : (0, n.jsx)(eY, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function eV(e) {
            let t, r = (0, i.c)(3),
                o = (0, s.y)(S.a);
            return r[0] !== e || r[1] !== o ? (t = (0, n.jsx)(eY, {
                ...e,
                recipient: o
            }), r[0] = e, r[1] = o, r[2] = t) : t = r[2], t
        }

        function eY(e) {
            let t, r, o, a, E, u, p, T, I, A, N, f, m, y, D = (0, i.c)(61),
                {
                    recipient: R,
                    conversationId: G,
                    hostId: P,
                    mcpAppId: v,
                    onClose: w,
                    state: L,
                    heightHint: b,
                    widthHint: O,
                    allowsInteractiveDismissal: H
                } = e,
                S = void 0 === R ? null : R,
                U = (0, s.y)(W.a),
                V = (0, d.a)();
            D[0] !== v ? (t = () => v ?? (0, l.rf)(), D[0] = v, D[1] = t) : t = D[1];
            let [Y] = (0, _.useState)(t), x = "ready" === L.kind && "modal" === L.result.request.mode ? Math.max(b ?? L.result.widget.height_hint ?? 0, 0) || void 0 : b, k = "ready" === L.kind ? L.result.tracking : L.tracking, q = "ready" === L.kind && "fullscreen" === L.result.request.mode, j = "loading" === L.kind && !0 === L.nonModal;
            D[2] !== w || D[3] !== k ? (r = () => {
                k?.close("user_dismissed"), w()
            }, D[2] = w, D[3] = k, D[4] = r) : r = D[4];
            let M = (0, _.useEffectEvent)(r);
            D[5] !== H || D[6] !== M || D[7] !== j || D[8] !== U ? (o = () => {
                if (j) return U.get(h.f).info((0, n.jsx)(c.a, {
                    ...ej.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(C.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === H ? void 0 : {
                        label: (0, n.jsx)(c.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel",
                            description: "Button to cancel opening an Apps SDK widget"
                        }),
                        onClick: () => M()
                    }
                }).close
            }, D[5] = H, D[6] = M, D[7] = j, D[8] = U, D[9] = o) : o = D[9], D[10] !== H || D[11] !== j || D[12] !== U ? (a = [U, j, H], D[10] = H, D[11] = j, D[12] = U, D[13] = a) : a = D[13], (0, _.useEffect)(o, a), D[14] !== q || D[15] !== w || D[16] !== k ? (E = () => {
                q && (k?.close("user_dismissed"), w())
            }, D[14] = q, D[15] = w, D[16] = k, D[17] = E) : E = D[17];
            let K = (0, _.useEffectEvent)(E);
            if (D[18] !== K || D[19] !== Y || D[20] !== U || D[21] !== k ? (u = () => {
                    let e = U.watch(e => {
                        let t = e.get(F.s, Y);
                        null != t && e.get(F.r, t)?.isOpen === !1 ? K() : (e.get(F.v, Y) && k?.renderReady(), null != e.get(F.q, Y) && k?.error("widget_render"))
                    });
                    return () => {
                        e(), k?.close("navigation_changed")
                    }
                }, D[18] = K, D[19] = Y, D[20] = U, D[21] = k, D[22] = u) : u = D[22], D[23] !== Y || D[24] !== U || D[25] !== k ? (p = [U, Y, k], D[23] = Y, D[24] = U, D[25] = k, D[26] = p) : p = D[26], (0, _.useEffect)(u, p), j) return null;
            if ("ready" === L.kind && q) {
                let e, t;
                return D[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], D[27] = e) : e = D[27], D[28] !== G || D[29] !== P || D[30] !== Y || D[31] !== S || D[32] !== L.result ? (t = (0, n.jsx)(ex, {
                    recipient: S,
                    conversationId: G,
                    hostDisplayModes: e,
                    hostId: P,
                    lifetime: "component",
                    mcpAppId: Y,
                    result: L.result,
                    showOpenButton: !1
                }), D[28] = G, D[29] = P, D[30] = Y, D[31] = S, D[32] = L.result, D[33] = t) : t = D[33], t
            }
            let B = !1 === H;
            return D[34] !== H ? (T = e => {
                !1 === H && e.preventDefault()
            }, D[34] = H, D[35] = T) : T = D[35], D[36] !== V ? (I = V.formatMessage(ej.appTitle), D[36] = V, D[37] = I) : I = D[37], D[38] !== x ? (A = null == x ? void 0 : {
                height: x
            }, D[38] = x, D[39] = A) : A = D[39], D[40] !== T || D[41] !== I || D[42] !== A ? (N = {
                onEscapeKeyDown: T,
                "aria-label": I,
                style: A
            }, D[40] = T, D[41] = I, D[42] = A, D[43] = N) : N = D[43], D[44] !== w || D[45] !== k ? (f = e => {
                e || (k?.close("user_dismissed"), w())
            }, D[44] = w, D[45] = k, D[46] = f) : f = D[46], D[47] !== G || D[48] !== P || D[49] !== Y || D[50] !== S || D[51] !== L.error || D[52] !== L.kind || D[53] !== L.result ? (m = "loading" === L.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(c.a, {
                    ...ej.openingApp
                })
            }) : "error" === L.kind ? (0, n.jsx)("div", {
                className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                children: (0, X.d)(L.error) ? (0, n.jsx)(J.a, {}) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(g.e, {
                        className: "text-lg font-medium",
                        children: (0, n.jsx)(c.a, {
                            ...ej.openAppError
                        })
                    }), (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(c.a, {
                            ...ej.openAppErrorDescription
                        })
                    })]
                })
            }) : (0, n.jsx)(ex, {
                recipient: S,
                conversationId: G,
                hostId: P,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: Y,
                result: L.result
            }), D[47] = G, D[48] = P, D[49] = Y, D[50] = S, D[51] = L.error, D[52] = L.kind, D[53] = L.result, D[54] = m) : m = D[54], D[55] !== N || D[56] !== f || D[57] !== m || D[58] !== B || D[59] !== O ? (y = (0, n.jsx)(g.b, {
                shouldIgnoreClickOutside: B,
                contentProps: N,
                dialogCloseClassName: "z-10",
                onOpenChange: f,
                open: !0,
                size: "appLauncher",
                widthHint: O,
                children: m
            }), D[55] = N, D[56] = f, D[57] = m, D[58] = B, D[59] = O, D[60] = y) : y = D[60], y
        }

        function ex(e) {
            let t, l, E, C, w, S, q, j, M, B, z, X, J, el, e_, ed, ec, eE, ep, eI, eN, eg, eh, ew, eV, eY, eK = (0, i.c)(160),
                {
                    recipient: eB,
                    newThreadDestination: e$,
                    conversationId: ez,
                    deepLink: eZ,
                    initialWidgetState: eQ,
                    pluginId: eX,
                    hostId: eJ,
                    inDialog: e0,
                    Frame: e1,
                    lifetime: e5,
                    hostedInThreadScrollLayout: e3,
                    mcpAppId: e8,
                    result: e6,
                    fullSurface: e4,
                    globalSurface: e7,
                    hostScroll: e2,
                    hostDisplayModes: e9,
                    inheritHostBackground: te,
                    showDialogTitle: tt,
                    heightHint: tr,
                    showOpenButton: tn,
                    showLoadingStatus: ti,
                    readOnlySnapshot: to
                } = e,
                ta = void 0 === eB ? null : eB,
                ts = void 0 !== e0 && e0,
                tl = void 0 !== e3 && e3,
                t_ = void 0 === e4 ? ts : e4,
                td = void 0 !== e7 && e7,
                tc = void 0 !== e2 && e2,
                tE = void 0 === e9 ? F.e : e9,
                tu = void 0 !== te && te,
                tp = void 0 === tt ? ts : tt,
                tT = void 0 === tn || tn,
                tI = void 0 === ti || ti,
                tA = void 0 !== to && to,
                tN = (0, s.y)(W.a),
                tg = e6.resourceQuery;
            eK[0] !== e6.resourceKey || eK[1] !== e8 ? (t = {
                mcpAppId: e8,
                resourceKey: e6.resourceKey
            }, eK[0] = e6.resourceKey, eK[1] = e8, eK[2] = t) : t = eK[2];
            let tC = (0, s.x)(Y.a, t);
            eK[3] !== e6 || eK[4] !== tC ? (l = null == tC || tC === e6.widget ? e6 : {
                ...e6,
                widget: tC
            }, eK[3] = e6, eK[4] = tC, eK[5] = l) : l = eK[5];
            let th = l,
                {
                    accountId: tf
                } = (0, I.a)(),
                {
                    pathname: tm,
                    search: ty,
                    hash: tD
                } = (0, u.W)(),
                tR = (0, d.a)(),
                tG = (0, s.x)(Z, th.request.chatGptThreadId);
            eK[6] !== ez || eK[7] !== eJ || eK[8] !== tR || eK[9] !== ta || eK[10] !== th || eK[11] !== tN ? (E = async (e, t) => {
                let r = tN.get(T.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == th.modalOwner && r.hostId === eJ && n.accountId === th.resourceIdentity.identity.accountId && n.userId === th.resourceIdentity.identity.userId && n.sourceAppUri === th.request.appUri && n.sourceTemplate === th.request.template && n.sourceMessageId === th.request.sourceMessageId && n.sourceThreadId === th.request.threadId && n.sourceConversationId === tN.get(k.j, th.request.chatGptThreadId)) {
                    tN.set(T.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await ek();
                        t.throwIfAborted(), await e(tN, {
                            recipient: ta,
                            conversationId: ez,
                            hostId: eJ,
                            result: th,
                            WidgetDialog: eU,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tN.get(h.f).danger(tR.formatMessage(ej.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, eK[6] = ez, eK[7] = eJ, eK[8] = tR, eK[9] = ta, eK[10] = th, eK[11] = tN, eK[12] = E) : E = eK[12];
            let tP = (0, _.useEffectEvent)(E);
            eK[13] !== ts || eK[14] !== tP || eK[15] !== tN ? (C = () => {
                if (ts) return;
                let e = new AbortController,
                    t = tN.watch(t => {
                        let {
                            get: r
                        } = t, n = r(T.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tP(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, eK[13] = ts, eK[14] = tP, eK[15] = tN, eK[16] = C) : C = eK[16], eK[17] !== ts || eK[18] !== th.request.appUri || eK[19] !== th.request.chatGptThreadId || eK[20] !== th.request.sourceMessageId || eK[21] !== th.request.template || eK[22] !== tN ? (w = [tN, ts, th.request.appUri, th.request.template, th.request.sourceMessageId, th.request.chatGptThreadId], eK[17] = ts, eK[18] = th.request.appUri, eK[19] = th.request.chatGptThreadId, eK[20] = th.request.sourceMessageId, eK[21] = th.request.template, eK[22] = tN, eK[23] = w) : w = eK[23], (0, _.useEffect)(C, w), eK[24] !== e6 ? (S = (0, V.b)(e6), eK[24] = e6, eK[25] = S) : S = eK[25];
            let tv = S,
                tw = th.mcpAppHostAdapter.displayMode ?? (ts ? "inline" : void 0);
            eK[26] !== tv ? (q = {
                data: tv,
                error: null,
                isLoading: !1
            }, eK[26] = tv, eK[27] = q) : q = eK[27];
            let tL = q,
                tb = (0, s.x)(F.o, e8),
                tO = (0, s.x)(F.u, e8),
                tF = `ecosystem-focused:${e8}`,
                tH = (0, s.x)(p.j.tabById$, tF);
            eK[28] !== e8 || eK[29] !== th || eK[30] !== tN ? (j = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eM();
                e(tN, e8, th)
            }, eK[28] = e8, eK[29] = th, eK[30] = tN, eK[31] = j) : j = eK[31];
            let tS = (0, _.useEffectEvent)(j);
            eK[32] !== tS || eK[33] !== tH || eK[34] !== ts || eK[35] !== e8 || eK[36] !== tN ? (M = () => {
                if (null != tH && !ts) return tN.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(F.j, e8) && tS()
                })
            }, eK[32] = tS, eK[33] = tH, eK[34] = ts, eK[35] = e8, eK[36] = tN, eK[37] = M) : M = eK[37], eK[38] !== tH || eK[39] !== ts || eK[40] !== e8 || eK[41] !== tN ? (B = [tN, tH, ts, e8], eK[38] = tH, eK[39] = ts, eK[40] = e8, eK[41] = tN, eK[42] = B) : B = eK[42], (0, _.useEffect)(M, B);
            let {
                identity: tW
            } = th.resourceIdentity, tU = "connector" === tW.kind ? tW.connectorId : null;
            eK[43] !== tR || eK[44] !== th.widget.name ? (z = th.widget.name || tR.formatMessage(ej.appTitle), eK[43] = tR, eK[44] = th.widget.name, eK[45] = z) : z = eK[45];
            let tV = z,
                tY = th.title || tV;
            eK[46] !== tf || eK[47] !== tG || eK[48] !== tU || eK[49] !== ez || eK[50] !== e6 || eK[51] !== tw || eK[52] !== tH || eK[53] !== tF || eK[54] !== tD || eK[55] !== tr || eK[56] !== eJ || eK[57] !== ts || eK[58] !== tR || eK[59] !== e8 || eK[60] !== tm || eK[61] !== tA || eK[62] !== ta || eK[63] !== tN || eK[64] !== ty ? (X = e => {
                var t, n;
                let i;
                if (!(0, V.c)(e)) throw Error("Expected a hosted widget resource");
                let a = {
                    ...e6,
                    widget: e.widget,
                    resourceKey: e.resourceKey
                };
                if (ts) {
                    let e = a.mcpAppHostAdapter;
                    a.mcpAppHostAdapter = {
                        ...e,
                        handleRequest: (t, r, n) => e.handleRequest(t, r, n)
                    }
                }
                null != a.getPluginSuggestions && (a.mcpAppHostAdapter = {
                    ...a.mcpAppHostAdapter,
                    pluginSuggestions: a.getPluginSuggestions(a.widget)
                });
                let s = a.widget.name || tR.formatMessage(ej.appTitle),
                    l = a.title || s,
                    _ = {
                        isVerifiedFirstParty: !0 === a.widget.is_verified_first_party,
                        heightHint: tr ?? e.heightHint,
                        minFrameHeight: (0, V.a)(a),
                        appIcon: e.appIcon,
                        sourceName: s,
                        title: l,
                        sidePanelTitle: l
                    };
                if (tA) return {
                    ..._,
                    mcpAppHostAdapter: a.mcpAppHostAdapter
                };
                let d = tN.get(k.x, a.request.chatGptThreadId);
                return {
                    ..._,
                    mcpAppHostAdapter: {
                        ...a.mcpAppHostAdapter,
                        displayMode: tw,
                        ... function(e, t, n, i) {
                            var o;
                            let a, s, l, _, d, c, E = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                u = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : null,
                                p = t => {
                                    if (t?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), "current" !== e.get(et.d, n.resourceIdentity)) throw Error("The widget connection changed")
                                },
                                {
                                    accountId: T,
                                    userId: I
                                } = n.resourceIdentity.identity,
                                A = function(e, t) {
                                    let {
                                        identity: r
                                    } = t.resourceIdentity, n = t.request.chatGptThreadId;
                                    if (!0 !== t.widget.is_verified_first_party || "connector" !== r.kind || !["connector_openai_deep_research", "connector_openai_deep_research_work"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                                    let i = new Map;
                                    return (t, r) => {
                                        let o = eH.safeParse(t);
                                        if (!o.success) return;
                                        let a = o.data,
                                            s = i.get(a.id);
                                        if (s?.dispose(), !(r.aborted || e.get(k.G, n) || null != e.get(k.Z, n) || e.get($.d, n)))
                                            if ("start" === a.phase) {
                                                let t = a.length >= 2e3 ? (0, eO.b)(e, n) : null;
                                                if (null != t && i.size < 8) {
                                                    let e = () => {
                                                        i.delete(a.id), r.removeEventListener("abort", e)
                                                    };
                                                    r.addEventListener("abort", e, {
                                                        once: !0
                                                    }), i.set(a.id, {
                                                        complete: t,
                                                        signal: r,
                                                        dispose: e
                                                    })
                                                }
                                            } else a.success && !s?.signal.aborted && s?.complete()
                                    }
                                }(e, n),
                                N = new Set(["fullscreen"]);
                            if (!0 === n.widget.is_verified_first_party)
                                for (let e of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) N.add(e);
                            for (let [e, t] of Object.entries({
                                    camera: "camera",
                                    microphone: "microphone",
                                    geolocation: "geolocation",
                                    clipboardWrite: "clipboard-write"
                                })) n.widget.permissions?.[e] === !0 && N.add(t);
                            let g = navigator.userAgent,
                                C = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(g) ? (C.os = "ios", C.type = "mobile") : /Android/.test(g) ? (C.os = "android", C.type = "mobile") : /Windows[ _]NT/.test(g) ? C.os = "windows" : g.includes("Mac OS X") && (C.os = "macos"), "mobile" !== C.type && /Tablet/.test(g) && (C.type = "tablet");
                            let f = (0, eA.a)(n.widget.domain),
                                D = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                R = null != D && Object.values(e.get(ei.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === D);
                            return {
                                experimentalCapabilities: {
                                    ...n.mcpAppHostAdapter.experimentalCapabilities,
                                    ...E && !0 === n.widget.is_verified_first_party && null != i && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                        "openai/sourceCitationLinks": {}
                                    } : {}
                                },
                                requestCheckout: async (t, i) => {
                                    p(i);
                                    let {
                                        loadWidgetCheckout: o
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085)]).then(r.bind(r, "IKJx")), a = await o();
                                    return p(i), a(e, n, t, i, () => p(i))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == A ? [] : [eF]],
                                handleRequest: async (r, i, o, a) => null != A && r.method === eF ? (p(i), null != i && A(r.params, i), {}) : (0, eb.a)(e, t, n.mcpAppHostAdapter, n.resourceIdentity, r, i, p, o, a),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (p(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let i = n.request.chatGptThreadId,
                                        o = m.object({
                                            text: m.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!o.success || null == i) return;
                                    let a = e.get(ea.n);
                                    if (null == a || a !== T) throw Error("The widget account changed");
                                    (0, es.b)(e, i, {
                                        accountId: a,
                                        label: o.data.text,
                                        instruction: `The user is referring to this in particular:
${o.data.text}`,
                                        disableWebSearch: !1,
                                        targetedReplyText: o.data.text
                                    }), (0, en.e)(i)
                                } : void 0,
                                openConversationOverlay: !0 === n.widget.is_verified_first_party && null != n.request.chatGptThreadId ? async (t, i) => {
                                    p(i);
                                    let {
                                        openWidgetConversationOverlay: o
                                    } = await r.e(179356).then(r.bind(r, "ZF7q"));
                                    p(i), o(e, t, i, n.resourceIdentity)
                                } : void 0,
                                openPromptInput: !0 === n.widget.is_verified_first_party ? async (t, n, i) => {
                                    p(i);
                                    let {
                                        openBrowserWidgetPrompt: o
                                    } = await r.e(763191).then(r.bind(r, "Rcqw"));
                                    p(i);
                                    let a = await o(e, t, n, i);
                                    return p(i), a
                                } : void 0,
                                openInApp: {
                                    appName: n.widget.name,
                                    baseUrl: f,
                                    hideButton: !0 === n.widget.is_verified_first_party,
                                    validateUrl: e => {
                                        if (p(), e.includes("\\") || !URL.canParse(e, f ?? window.location.origin)) return null;
                                        let t = new URL(e, f ?? window.location.origin);
                                        return ("https:" === t.protocol || "http:" === t.protocol) && (0, eA.c)(t.href, {
                                            connectDomains: n.widget.csp?.connect_domains
                                        }, n.widget.domain) ? t.href : null
                                    }
                                },
                                openExternal: (t, r) => eC(e, n, t, r, p, i),
                                autofill: R && null != D && null != T && null != I ? async (t, i) => {
                                    p(i);
                                    let {
                                        createBrowserWidgetAutofill: o
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(799928)]).then(r.bind(r, "fOoA"));
                                    return p(i), o(e, n, D, t, i)
                                } : void 0,
                                sandboxFeatures: [...N],
                                instrumentation: (a = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), s = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : n.request.appUri, l = {
                                    ...(0, ev.a)(n.resourceIdentity, n.analyticsContext),
                                    attributionId: s,
                                    messageId: n.request.sourceMessageId,
                                    suggestionMessageId: n.suggestionMessageId,
                                    distributionChannel: ({
                                        only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                        openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                        external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                    })[a],
                                    host: "chatgpt"
                                }, _ = {
                                    attribution_id: s,
                                    name: n.request.template,
                                    client_type: "chatgpt-web"
                                }, {
                                    sendInstrument(t, r) {
                                        let i = eL.safeParse(t);
                                        if (!i.success) return;
                                        let o = i.data;
                                        if ("event" === o.type) return void(0, eu.a)(e, eG.a, {
                                            eventName: o.label,
                                            eventData: JSON.stringify({
                                                ...o.payload,
                                                ..._,
                                                conversation_id: e.get(k.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: a,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === o.type) {
                                            "only_me" !== a && e.get(eP.a).count("ecosystem", "app.error", _);
                                            return
                                        }
                                        let s = {
                                            ...Object.fromEntries(o.tags?.map(e => {
                                                let {
                                                    key: t,
                                                    value: r
                                                } = e;
                                                return [t, r]
                                            }) ?? []),
                                            ..._
                                        };
                                        "interaction" === o.type ? ((0, eu.a)(e, eR.l, {
                                            ...l,
                                            ...r,
                                            conversationId: e.get(k.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, ev.b)(o.label)
                                        }), "only_me" !== a && e.get(eP.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [o.label] ?? "app.interaction", s)) : "only_me" !== a && ("count" === o.type ? e.get(eP.a).count("ecosystem", o.label, s, o.count) : e.get(eP.a).hist("ecosystem", o.label, s, o.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = m.object({
                                            effectiveDirective: m.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, eu.a)(e, eR.k, {
                                            ...l,
                                            conversationId: e.get(k.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== a && e.get(eP.a).count("ecosystem", "app.security_policy_violation", _))
                                    }
                                }),
                                toolInfo: m.object({
                                    tool: m.object({
                                        name: m.string(),
                                        input_schema: ee.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
                                    })
                                }).transform(e => {
                                    let {
                                        tool: t
                                    } = e;
                                    return {
                                        tool: {
                                            name: t.name,
                                            inputSchema: t.input_schema
                                        }
                                    }
                                }).safeParse(n.widget.tool_info).data,
                                device: C,
                                downloadBlob: !0 === n.widget.is_verified_first_party ? (e, t) => {
                                    p(t);
                                    let {
                                        blob: r,
                                        name: n
                                    } = m.object({
                                        blob: m.instanceof(Blob),
                                        name: m.string()
                                    }).parse(e);
                                    (0, eo.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    p(t);
                                    let {
                                        type: r
                                    } = m.object({
                                        type: m.enum(["light", "medium", "heavy", "selection", "success", "warning", "error"])
                                    }).parse(e);
                                    try {
                                        navigator.vibrate?.({
                                            light: 10,
                                            medium: 20,
                                            heavy: 30,
                                            selection: 10,
                                            success: [10, 20, 10],
                                            warning: [20, 30, 20],
                                            error: [30, 20, 30]
                                        } [r])
                                    } catch {}
                                },
                                showToast: !0 === n.widget.is_verified_first_party ? t => {
                                    p();
                                    let {
                                        title: r,
                                        body: n,
                                        level: i
                                    } = m.object({
                                        title: m.string(),
                                        body: m.string().optional(),
                                        level: m.enum(["warning", "success", "danger"])
                                    }).parse(t);
                                    e.get(h.f)[i](r, {
                                        description: n?.trim() || void 0,
                                        errorAnalytics: {
                                            toastId: "ecosystem.widget.error"
                                        }
                                    })
                                } : void 0,
                                files: null != T && null != I ? (o = {
                                    appUri: n.request.appUri,
                                    accountId: T,
                                    userId: I,
                                    assertActive: n.mcpAppHostAdapter.assertActive
                                }, d = t => {
                                    if (t.throwIfAborted(), o.assertActive?.(), e.get(y.f) !== o.accountId || e.get(y.k) !== o.userId) throw Error("The widget account has changed")
                                }, c = {
                                    additionalHeaders: {
                                        "ChatGPT-Account-ID": o.accountId
                                    },
                                    expectedIdentity: {
                                        accountId: o.accountId,
                                        userId: o.userId
                                    }
                                }, {
                                    async uploadFile(e, t, r) {
                                        d(r);
                                        let n = m.instanceof(File).parse(e),
                                            i = m.object({
                                                library: m.boolean().optional()
                                            }).optional().parse(t),
                                            a = new FormData;
                                        a.append("app_uri", o.appUri), a.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), i?.library && a.append("store_in_library", "true"), d(r);
                                        let s = await eT.Request.safePost("/ecosystem/upload_widget_file", {
                                            ...c,
                                            requestBody: a,
                                            signal: r
                                        });
                                        return d(r), {
                                            fileId: s.file_id
                                        }
                                    },
                                    async getFileDownloadUrl(e, t) {
                                        d(t);
                                        let r = await eT.Request.safePost("/ecosystem/file_download_url", {
                                            ...c,
                                            requestBody: {
                                                app_uri: o.appUri,
                                                file_id: eD.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return d(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        d(t);
                                        let r = await eT.Request.safePost("/ecosystem/file_metadata", {
                                            ...c,
                                            requestBody: {
                                                app_uri: o.appUri,
                                                file_id: eD.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return d(t), {
                                            fileName: r.file_name ?? null,
                                            mimeType: r.mime_type ?? null
                                        }
                                    },
                                    async selectFiles(t) {
                                        d(t);
                                        let n = e.get(K.e);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(ea.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: i
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                        d(t);
                                        let a = await i(e, t);
                                        if (d(t), 0 === a.length) return [];
                                        let s = await Promise.all(a.map(async e => {
                                            d(t);
                                            let r = null == (0, em.a)(e.id) ? e : await (0, ey.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: c.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,ef.d)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return d(t), await eT.Request.safePost("/ecosystem/file_authorize_app", {
                                            ...c,
                                            requestBody: {
                                                file_ids: s.map(e => e.fileId),
                                                authorized_app_uri: o.appUri
                                            },
                                            signal: t
                                        }), d(t), s
                                    }
                                }) : void 0,
                                share: "u" > typeof navigator && "function" == typeof navigator.share ? async (e, t) => {
                                    p(t), await navigator.share(m.object({
                                        title: m.string().optional(),
                                        text: m.string().optional(),
                                        url: m.string().optional(),
                                        files: m.array(m.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == u ? void 0 : async (r, n) => {
                                    p(n);
                                    let i = await (0, er.requestMcpConnectSheet)(e, {
                                        connectorId: u,
                                        hostId: t,
                                        payload: r,
                                        signal: n,
                                        beforeConnect: async () => (p(n), !0)
                                    });
                                    return p(n), i
                                },
                                requestLinkToConnector: async (r, n) => {
                                    p(n);
                                    let i = await (0, er.requestMcpConnectSheet)(e, {
                                        connectorId: m.object({
                                            connectorId: m.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (p(n), !0)
                                    });
                                    return p(n), i
                                }
                            }
                        }(tN, eJ, a, async (e, t) => {
                            let r = tN.get(k.x, a.request.chatGptThreadId);
                            if ("tpp" !== r && "flora" !== r) return !1;
                            let n = await o();
                            return t.throwIfAborted(), n(tN, {
                                recipient: ta,
                                WidgetContent: ex,
                                conversationId: ez,
                                hostId: eJ,
                                result: a,
                                mcpAppId: e8,
                                href: e,
                                signal: t
                            })
                        }, "tpp" === d || "flora" === d),
                        openFile: tG && !ts && null != a.request.sourceMessageId ? (e, t) => Q(tN, a, e, t) : null,
                        presentation: {
                            isSidebarOpen: null != tH,
                            requestFocusedObject: !0 !== a.widget.is_verified_first_party || ts || null != a.mcpAppHostAdapter.displayMode ? void 0 : async (e, t) => {
                                let {
                                    openEcosystemWidgetFocusedObject: r
                                } = await eM();
                                t.throwIfAborted(), a.mcpAppHostAdapter.assertActive?.(), r(tN, {
                                    recipient: ta,
                                    WidgetContent: ex,
                                    WidgetDialog: eU,
                                    id: tF,
                                    conversationId: ez,
                                    hostId: eJ,
                                    result: a,
                                    payload: e,
                                    signal: t
                                })
                            },
                            requestCloseFocusedObject: !0 === a.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), a.mcpAppHostAdapter.assertActive?.(), null != a.mcpAppHostAdapter.displayMode && "fullscreen" !== a.mcpAppHostAdapter.displayMode) return void await a.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: t
                                } = await eM();
                                e.throwIfAborted(), a.mcpAppHostAdapter.assertActive?.(), t(tN, tF)
                            } : void 0
                        },
                        requestModal: async (e, t) => {
                            let {
                                requestEcosystemWidgetModal: r
                            } = await ek();
                            t.throwIfAborted(), a.mcpAppHostAdapter.assertActive?.(), await r(tN, {
                                recipient: ta,
                                WidgetDialog: eU,
                                conversationId: ez,
                                hostId: eJ,
                                result: a,
                                payload: e,
                                signal: t
                            })
                        },
                        finance: tU === f.a ? (t = `${tm}${ty}${tD}`, n = ts || null != tw && "inline" !== tw ? void 0 : a, i = !1, {
                            requestModal: null == tf || 0 === tf.length ? void 0 : async (e, r) => {
                                if (r.aborted || tN.get(y.f) !== tf) return !1;
                                let {
                                    params: n
                                } = P.parse(e), {
                                    openPersonalFinanceAccountLinking: i
                                } = await (0, D.a)();
                                return !r.aborted && tN.get(y.f) === tf && await i(tN, {
                                    accountId: tf,
                                    initialTab: n.initialTab,
                                    trackingContext: {
                                        entryPoint: "widget",
                                        entrypoint: "creditScore" === n.initialTab ? "conversation" : void 0
                                    },
                                    returnTo: t,
                                    signal: r
                                }) && !r.aborted && tN.get(y.f) === tf
                            },
                            sendInstrument: e => {
                                if (v.safeParse(e).success) {
                                    i || null == n || (i = !0, (0, G.a)(tN, n));
                                    return
                                }(0, R.a)(tN, e)
                            }
                        }) : void 0
                    }
                }
            }, eK[46] = tf, eK[47] = tG, eK[48] = tU, eK[49] = ez, eK[50] = e6, eK[51] = tw, eK[52] = tH, eK[53] = tF, eK[54] = tD, eK[55] = tr, eK[56] = eJ, eK[57] = ts, eK[58] = tR, eK[59] = e8, eK[60] = tm, eK[61] = tA, eK[62] = ta, eK[63] = tN, eK[64] = ty, eK[65] = X) : X = eK[65];
            let tx = X;
            eK[66] !== e6 || eK[67] !== tg || eK[68] !== tN.query ? (J = null == tg ? void 0 : async () => {
                let e = await tN.query.fetch(U.a, tg);
                return {
                    resource: (0, V.b)({
                        ...e6,
                        ...e
                    }),
                    resourceIdentity: e.resourceIdentity
                }
            }, eK[66] = e6, eK[67] = tg, eK[68] = tN.query, eK[69] = J) : J = eK[69];
            let tk = J,
                tq = ts && "isolate";
            eK[70] !== tq ? (el = (0, a.b)("relative h-full min-h-0", tq), eK[70] = tq, eK[71] = el) : el = eK[71], eK[72] !== tp || eK[73] !== tY ? (e_ = tp ? (0, n.jsx)(g.e, {
                className: "sr-only",
                children: tY
            }) : null, eK[72] = tp, eK[73] = tY, eK[74] = e_) : e_ = eK[74], eK[75] !== e8 ? (ed = (0, n.jsx)(H.a, {
                isInlineRequested: !0,
                mcpAppId: e8
            }), eK[75] = e8, eK[76] = ed) : ed = eK[76], eK[77] !== td ? (ec = td ? {
                source: "global"
            } : {}, eK[77] = td, eK[78] = ec) : ec = eK[78], eK[79] !== th.analyticsContext || eK[80] !== ec ? (eE = {
                ...th.analyticsContext,
                ...ec
            }, eK[79] = th.analyticsContext, eK[80] = ec, eK[81] = eE) : eE = eK[81], eK[82] !== ez || eK[83] !== eJ || eK[84] !== e$ || eK[85] !== ta || eK[86] !== th.request.chatGptThreadId || eK[87] !== tN ? (ep = () => null != e$ ? e$ : ta?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: ta.get(k.x, ta.value.conversationId)
            } : null != th.request.chatGptThreadId || ez.startsWith("chatgpt:") || (0, x.e)(ez) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tN.get(A.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: eJ
            }, eK[82] = ez, eK[83] = eJ, eK[84] = e$, eK[85] = ta, eK[86] = th.request.chatGptThreadId, eK[87] = tN, eK[88] = ep) : ep = eK[88];
            let tj = th.preferredModelDisplayMode,
                tM = th.resourceIdentity,
                tK = th.widgetStatePersistence,
                tB = !0 === th.widget.is_verified_first_party,
                t$ = tA ? null : th.request.template;
            eK[89] !== tW.connectorId || eK[90] !== tW.kind || eK[91] !== tW.targetId || eK[92] !== tA || eK[93] !== th.request.toolName ? (eI = tA || "connector" !== tW.kind ? void 0 : {
                connectorId: tW.connectorId,
                linkId: tW.targetId,
                resourceUri: null,
                appName: null,
                actionName: th.request.toolName
            }, eK[89] = tW.connectorId, eK[90] = tW.kind, eK[91] = tW.targetId, eK[92] = tA, eK[93] = th.request.toolName, eK[94] = eI) : eI = eK[94], eK[95] !== th.request.toolName || eK[96] !== tB || eK[97] !== t$ || eK[98] !== eI ? (eN = {
                widgetSource: "hosted",
                isVerifiedFirstParty: tB,
                originResourceUri: t$,
                originTool: th.request.toolName,
                appContext: eI
            }, eK[95] = th.request.toolName, eK[96] = tB, eK[97] = t$, eK[98] = eI, eK[99] = eN) : eN = eK[99];
            let tz = th.mcpAppHostAdapter,
                tZ = tU === f.a ? tf ?? void 0 : void 0,
                tQ = ts ? eq : e1,
                tX = tv.appIcon,
                tJ = th.request.toolInput,
                t0 = th.toolResult;
            return eK[100] !== th.toolResult ? (eg = function(e) {
                let t, r = e._meta,
                    n = e;
                for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                    let e = (0, eS.o)(t);
                    if (!Array.isArray(e?.content) && e?.structuredContent === void 0) continue;
                    let r = (0, eW.a)(t, {
                        preserveStructuredContentNull: !0
                    });
                    if (null != r) {
                        n = r;
                        break
                    }
                }
                return r?.cancelled === !0 || r?.is_cancelled === !0 || r?.status === "cancelled" ? t = "cancelled" : (!0 === n.isError || r?.status === "error" || !0 === e.isError) && (t = "error"), {
                    toolResultNotification: n,
                    toolCallStatus: t,
                    toolCallCancellationReason: "cancelled" === t && "string" == typeof r?.reason ? r.reason : void 0
                }
            }(th.toolResult), eK[100] = th.toolResult, eK[101] = eg) : eg = eK[101], eK[102] !== ez || eK[103] !== eZ || eK[104] !== t_ || eK[105] !== tx || eK[106] !== td || eK[107] !== tE || eK[108] !== eJ || eK[109] !== tc || eK[110] !== tl || eK[111] !== tu || eK[112] !== eQ || eK[113] !== e5 || eK[114] !== e8 || eK[115] !== tV || eK[116] !== eX || eK[117] !== ta || eK[118] !== tk || eK[119] !== tv.appIcon || eK[120] !== tL || eK[121] !== th.mcpAppHostAdapter || eK[122] !== th.preferredModelDisplayMode || eK[123] !== th.request.toolInput || eK[124] !== th.request.viewParams || eK[125] !== th.resourceIdentity || eK[126] !== th.toolResult || eK[127] !== th.widgetStatePersistence || eK[128] !== eE || eK[129] !== ep || eK[130] !== eN || eK[131] !== tZ || eK[132] !== tQ || eK[133] !== eg || eK[134] !== tY ? (eh = (0, n.jsx)(H.c, {
                analyticsContext: eE,
                getNewThreadDestination: ep,
                resource: tL,
                legacyPreferredDisplayMode: tj,
                hostDisplayModes: tE,
                recipient: ta,
                conversationId: ez,
                deepLink: eZ,
                pluginId: eX,
                fullSurface: t_,
                hostScroll: tc,
                inheritHostBackground: tu,
                hostId: eJ,
                hostedInThreadScrollLayout: tl,
                lifetime: e5,
                resourceIdentity: tM,
                mcpAppId: e8,
                initialWidgetState: eQ,
                widgetStatePersistence: tK,
                sourceName: tV,
                getResourceHost: tx,
                refetchResource: tk,
                mcpAppScope: eN,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tz,
                plaidAccountId: tZ,
                Frame: tQ,
                server: "codex_apps",
                appIcon: tX,
                sidePanelTitle: tY,
                title: tY,
                globalSurface: td,
                toolArguments: tJ,
                toolResult: t0,
                ...eg,
                viewParamsOverride: th.request.viewParams
            }), eK[102] = ez, eK[103] = eZ, eK[104] = t_, eK[105] = tx, eK[106] = td, eK[107] = tE, eK[108] = eJ, eK[109] = tc, eK[110] = tl, eK[111] = tu, eK[112] = eQ, eK[113] = e5, eK[114] = e8, eK[115] = tV, eK[116] = eX, eK[117] = ta, eK[118] = tk, eK[119] = tv.appIcon, eK[120] = tL, eK[121] = th.mcpAppHostAdapter, eK[122] = th.preferredModelDisplayMode, eK[123] = th.request.toolInput, eK[124] = th.request.viewParams, eK[125] = th.resourceIdentity, eK[126] = th.toolResult, eK[127] = th.widgetStatePersistence, eK[128] = eE, eK[129] = ep, eK[130] = eN, eK[131] = tZ, eK[132] = tQ, eK[133] = eg, eK[134] = tY, eK[135] = eh) : eh = eK[135], eK[136] !== tO || eK[137] !== t_ || eK[138] !== e8 || eK[139] !== tb || eK[140] !== tN || eK[141] !== tT || eK[142] !== tY ? (ew = !t_ && tT ? (0, n.jsx)("div", {
                className: "flex items-center",
                children: "launcher" !== tb || tO.isOpen ? (0, n.jsx)(b.a, {
                    disabled: !1,
                    mcpAppId: e8
                }) : (0, n.jsx)(N.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: () => (0, F.x)(tN, e8),
                    children: (0, n.jsx)(c.a, {
                        id: "chatgpt.widget.open",
                        defaultMessage: "Open {name}",
                        description: "Reopen a closed embedded app",
                        values: {
                            name: tY
                        }
                    })
                })
            }) : null, eK[136] = tO, eK[137] = t_, eK[138] = e8, eK[139] = tb, eK[140] = tN, eK[141] = tT, eK[142] = tY, eK[143] = ew) : ew = eK[143], eK[144] !== t_ || eK[145] !== tE || eK[146] !== tc || eK[147] !== e8 || eK[148] !== tV || eK[149] !== tb || eK[150] !== tL || eK[151] !== tI ? (eV = (0, n.jsx)(O.a, {
                showLoadingStatus: tI,
                hostDisplayModes: tE,
                resource: tL,
                fullSurface: t_,
                hostScroll: tc,
                mcpAppId: e8,
                pluginName: tV,
                presentation: tb
            }), eK[144] = t_, eK[145] = tE, eK[146] = tc, eK[147] = e8, eK[148] = tV, eK[149] = tb, eK[150] = tL, eK[151] = tI, eK[152] = eV) : eV = eK[152], eK[153] !== el || eK[154] !== e_ || eK[155] !== ed || eK[156] !== eh || eK[157] !== ew || eK[158] !== eV ? (eY = (0, n.jsxs)("div", {
                ref: L.a,
                className: el,
                "data-mcp-app-portal-target": "true",
                children: [e_, ed, eh, ew, eV]
            }), eK[153] = el, eK[154] = e_, eK[155] = ed, eK[156] = eh, eK[157] = ew, eK[158] = eV, eK[159] = eY) : eY = eK[159], eY
        }
        async function ek() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(117976)]).then(r.bind(r, "IQhm"))
        }

        function eq(e) {
            let t, r = (0, i.c)(2),
                {
                    sessionId: o
                } = e;
            return r[0] !== o ? (t = (0, n.jsx)(w.a, {
                allowGlobalHost: !1,
                sessionId: o
            }), r[0] = o, r[1] = t) : t = r[1], t
        }
        let ej = (0, E.f)({
            appTitle: {
                id: "chatgpt.ecosystemWidget.title",
                defaultMessage: "App",
                description: "Fallback title for an Apps SDK widget opened from ChatGPT"
            },
            openingApp: {
                id: "chatgpt.ecosystemWidget.opening",
                defaultMessage: "Opening app…",
                description: "Status shown while an Apps SDK widget is opening"
            },
            openAppError: {
                id: "chatgpt.ecosystemWidget.openError",
                defaultMessage: "Couldn’t open app",
                description: "Error title shown when an Apps SDK widget cannot be opened"
            },
            openAppErrorDescription: {
                id: "chatgpt.ecosystemWidget.openErrorDescription",
                defaultMessage: "Try opening the app again",
                description: "Error guidance shown when an Apps SDK widget cannot open"
            }
        });
        async function eM() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(579403)]).then(r.bind(r, "Ia2H"))
        }
    }),
    HUQj: (function(e, t, r) {
        var n = r("ABep"),
            i = r("QosV"),
            o = r("oyxz"),
            a = r("zKCW"),
            s = r("T8YV");

        function l(e) {
            let t, r = (0, i.c)(1);
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(a.a, {
                content: (0, n.jsx)(o.a, {
                    ...s.b.notice
                }),
                role: "alert",
                variant: "callout"
            }), r[0] = t) : t = r[0], t
        }
        r.d(t, {
            a: () => l
        })
    }),
    Igop: (function(e, t, r) {
        var n = r("ASxG"),
            i = r("Sbyb"),
            o = r("SGsN"),
            a = r("svjy"),
            s = r("eShZ"),
            l = r("T8YV");
        let _ = n.object({
            isError: n.literal(!0),
            _meta: n.object({
                "openai/tool_error_kind": n.literal("connector_auth_required"),
                "openai/connector_auth": n.object({
                    connector_id: n.string().min(1),
                    link_id: n.string().min(1).nullish(),
                    auth_reason: n.enum(["missing_link", "oauth_upgrade_required", "reauthentication_required"]).nullish(),
                    requested_scopes: n.array(n.string()).nullish()
                })
            })
        });
        async function d(e, t, r, n, d, c, E, u, p) {
            let T;
            if (null == c) throw Error("Widget requests require an active frame");
            let I = () => {
                    let t = e.get(a.a).formatMessage(l.b.notice);
                    return e.get(o.f).danger(t, {
                        id: l.a,
                        errorAnalytics: {
                            toastId: "ecosystem.widget.networkDenied"
                        }
                    }), t
                },
                A = () => ({
                    isError: !0,
                    content: [{
                        type: "text",
                        text: I()
                    }],
                    structuredContent: {
                        error_code: l.a
                    },
                    _meta: {
                        "openai/tool_error_kind": l.a
                    }
                }),
                N = async e => {
                    let t;
                    E(c);
                    try {
                        t = await r.handleRequest(e, c, u, p)
                    } catch (t) {
                        if (E(c), !(0, l.d)(t)) throw t;
                        if ("tools/call" === e.method) return A();
                        throw new s.a(I(), 403, l.a)
                    }
                    return (E(c), "tools/call" === e.method && !0 === t.isError && t._meta?.["openai/tool_error_kind"] === l.a) ? A() : t
                }, g = await N(d);
            if (null != r.olympic || "tools/call" !== d.method || "string" != typeof d.params?.name) return g;
            let C = _.safeParse(g);
            if (!C.success || "connector" !== n.identity.kind) return g;
            let h = C.data._meta["openai/connector_auth"],
                f = n.identity,
                m = d.params.name.startsWith("/") ? d.params.name.split("/").filter(Boolean) : [d.params.name],
                y = m.at(-1),
                D = d.params._meta,
                R = f.targetId ?? D?.["openai/link_id"] ?? (3 === m.length ? m[1] : void 0);
            if (null == y || 0 === y.length || m.length > 3 || h.connector_id !== f.connectorId || D?.["openai/connector_id"] != null && D["openai/connector_id"] !== h.connector_id || D?.["openai/action_name"] != null && D["openai/action_name"] !== y || null != R && R !== h.link_id) return g;
            try {
                T = await (0, i.requestMcpConnectSheet)(e, {
                    connectorId: h.connector_id,
                    hostId: t,
                    signal: c,
                    payload: {
                        requireAuth: !0,
                        reauthLinkId: h.link_id ?? void 0,
                        authReason: h.auth_reason ?? "missing_link",
                        requestedScopes: h.requested_scopes ?? void 0
                    },
                    beforeConnect: async () => (E(c), !0)
                })
            } catch {
                return E(c), g
            }
            return (E(c), T.didConnect && T.linkId && (null == h.link_id || T.linkId === h.link_id)) ? N({
                ...d,
                params: {
                    ...d.params,
                    name: y,
                    _meta: {
                        ...d.params._meta,
                        "openai/connector_id": h.connector_id,
                        "openai/action_name": y,
                        "openai/link_id": T.linkId
                    }
                }
            }) : g
        }
        r.d(t, {
            a: () => d
        })
    }),
    VV1g: (function(e, t, r) {
        var n = r("ASxG");
        let i = n.object({
            href: n.string().refine(o)
        });

        function o(e) {
            return /^mcp-citation:/iu.test(e.trimStart()) || URL.parse(e)?.protocol === "mcp-citation:"
        }

        function a(e) {
            if (!/^mcp-citation:/iu.test(e)) return null;
            try {
                let t = e.slice(13),
                    r = decodeURIComponent(t);
                return r.length > 0 && r.length <= 16384 && r.trim() === r && !/[\u0000-\u001f\u007f]/u.test(r) && encodeURIComponent(r) === t ? r : null
            } catch {
                return null
            }
        }
        r.d(t, {
            a: () => o,
            c: () => a
        }, {
            b: i
        })
    }),
    aRhc: (function(e, t, r) {
        let n = new Set(["http:", "https:"]),
            i = {
                "http:": 80,
                "https:": 443,
                "ws:": 80,
                "wss:": 443
            };

        function o(e) {
            let t = l(e ?? void 0);
            if (t && n.has(t.url.protocol) && !t.url.hostname.includes("*")) return t.url.toString();
            if (!e) return null;
            let r = _(e);
            return r && "scheme" !== r.kind ? (function(e) {
                let t = e.scheme ?? "https:";
                if (!n.has(t) || !e.host) return null;
                let r = "number" == typeof e.port ? `:${e.port}` : "",
                    i = e.path ?? "";
                try {
                    return new URL(`${t}//${e.host}${r}${i}`)
                } catch {
                    return null
                }
            })(r)?.toString() ?? null : null
        }

        function a(e, t, r) {
            let n = [];
            t?.connectDomains?.length && n.push(...t.connectDomains);
            let i = r?.trim();
            return i && n.push(i), s(e, n)
        }

        function s(e, t) {
            if (!e) return !1;
            let r = l(e);
            if (!r) return !1;
            let n = r.url;
            return !n.username && !n.password && !!t?.length && t.some(e => {
                let t = _(e);
                if (!t) return !1;
                if ("scheme" === t.kind) return n.protocol === t.scheme;
                if (t.scheme) {
                    var r, o;
                    return n.protocol === t.scheme && (r = n.hostname, o = t.host, t.wildcard ? !!c(r, o) : d(r) === d(o)) && !! function(e, t) {
                        if ("*" === t.port) return !0;
                        let r = e.port ? Number(e.port) : i[e.protocol] ?? null;
                        return t.portExplicit ? "number" == typeof t.port && r === t.port : r === (i[e.protocol] ?? null)
                    }(n, t)
                }
                return !!c(n.hostname, t.host)
            })
        }

        function l(e) {
            if (!e) return null;
            let t = e.trim();
            if (!t || t.includes("\\")) return null;
            try {
                return {
                    url: new URL(t)
                }
            } catch {
                if (!/^[a-z][a-z0-9+.-]*:/.test(t)) try {
                    let e = t.startsWith("//") ? `https:${t}` : `https://${t}`;
                    return {
                        url: new URL(e)
                    }
                } catch {}
                return null
            }
        }

        function _(e) {
            let t = e.trim();
            if (!t) return null;
            let r = /^([a-z][a-z0-9+.-]*):$/i.exec(t);
            if (r) return {
                kind: "scheme",
                scheme: `${r[1].toLowerCase()}:`
            };
            let n = /^([a-z][a-z0-9+.-]*):\/\/$/i.exec(t);
            if (n) return {
                kind: "scheme",
                scheme: `${n[1].toLowerCase()}:`
            };
            let i = /^(?:([a-z][a-z0-9+.+-]*):\/\/)?(\*|\*\.[^/:]+|[^/:]+)(?::(\*|\d+))?(\/.*)?$/i.exec(t);
            if (!i) return null;
            let o = i[1] ? `${i[1].toLowerCase()}:` : void 0,
                a = i[2],
                s = i[3] ?? null,
                l = i[4] ?? null,
                _ = a.startsWith("*."),
                d = (_ ? a.slice(2) : a).toLowerCase().replace(/\.$/, ""),
                c = null,
                E = !1;
            return null != s && (E = !0, "*" !== (c = "*" === s ? "*" : Number(s)) && (!Number.isFinite(c) || c < 0)) ? null : {
                kind: "host",
                scheme: o,
                host: d,
                wildcard: _,
                portExplicit: E,
                port: c,
                path: l
            }
        }

        function d(e) {
            return e.toLowerCase().replace(/\.$/, "")
        }

        function c(e, t) {
            let r = d(e),
                n = d(t);
            return r === n || r.endsWith("." + n)
        }
        r.d(t, {
            a: () => o,
            b: () => s,
            c: () => a
        })
    }),
    kAhA: (function(e, t, r) {
        var n = r("BOYb"),
            i = r("Cslg"),
            o = r("Kwur");

        function a(e, t) {
            let r = e.get(i.m),
                {
                    authenticatedUserId: n,
                    userId: o,
                    accountUserId: a
                } = r;
            if (r.authLoading || r.accountLoading || "chatgpt" !== r.authMethod || r.accountId !== t || r.authenticatedAccountId !== t || null == n || null == o || null == a) return;
            let s = new AbortController,
                l = new Set,
                _ = !1,
                d = () => {
                    _ && 0 === l.size && s.abort()
                },
                c = e => !e.authLoading && !e.accountLoading && "chatgpt" === e.authMethod && e.accountId === t && e.authenticatedAccountId === t && e.authenticatedUserId === n && e.userId === o && e.accountUserId === a,
                E = e.watch(e => {
                    let {
                        get: t
                    } = e;
                    c(t(i.m)) || s.abort()
                });
            return s.signal.addEventListener("abort", E, {
                once: !0
            }), s.signal.aborted && E(), {
                userId: n,
                analyticsUserId: o,
                accountId: t,
                accountUserId: a,
                signal: s.signal,
                isCurrent: () => !s.signal.aborted && c(e.get(i.m)),
                retainTelemetry: e => {
                    let t;
                    if (s.signal.aborted) return void e.catch(() => void 0);
                    let r = Promise.race([e, new Promise(e => {
                        t = setTimeout(e, 1e4)
                    })]).catch(() => void 0).finally(() => {
                        clearTimeout(t), l.delete(r), d()
                    });
                    l.add(r)
                },
                dispose: () => {
                    _ = !0, d()
                }
            }
        }

        function s(e, t, r, n, i) {
            if (!t?.owner.isCurrent()) return Promise.resolve();
            let {
                context: a,
                owner: s
            } = t, l = (async () => {
                try {
                    await o.Request.safePost("/aip/ledger/funnel-events", {
                        requestBody: {
                            flow_type: "account",
                            flow_id: a.flowId,
                            event_id: "linking_started" === r ? a.flowId : crypto.randomUUID(),
                            step: r,
                            start: n,
                            entry_point: a.entryPoint ?? "unknown",
                            beacon_type: a.beaconType,
                            source: "client",
                            component: i
                        },
                        expectedIdentity: {
                            accountId: s.accountId,
                            userId: s.userId
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": s.accountId,
                            "x-openai-use-sheep": "1"
                        },
                        retry: !1,
                        signal: AbortSignal.any([s.signal, AbortSignal.timeout(1e4)]),
                        assertRequestCurrent: () => {
                            if (!s.isCurrent()) throw new DOMException("Finance owner changed", "AbortError")
                        }
                    })
                } catch {}
            })();
            return s.retainTelemetry(l), l
        }

        function l(e, t, r, i) {
            if (!t.isCurrent()) return;
            let o = {
                context: {
                    ...r,
                    hasRecordedLinkingStarted: !0
                },
                owner: t
            };
            return s(e, o, "linking_started", {
                flow_path: i,
                platform: (0, n.d)() ? "mobile_web" : "desktop_web"
            }), o
        }
        r.d(t, {
            a: () => l,
            b: () => a,
            c: () => s
        })
    }),
    XCEe: (function(e, t, r) {
        function n() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(80057), r.e(294265), r.e(870348), r.e(47223), r.e(8196), r.e(15909)]).then(r.bind(r, "o7G9"))
        }
        r.d(t, {
            a: () => n
        })
    }),
    JLZd: (function(e, t, r) {
        var n = r("Cslg"),
            i = r("TNWb"),
            o = r("nlNF"),
            a = r("kAhA");

        function s(e, t) {
            if ("u" < typeof IntersectionObserver) return;
            let r = !1,
                n = !1,
                i = () => {
                    n || !r || "visible" !== document.visibilityState || e.closest('[aria-hidden="true"], [inert], [hidden]') || t()
                },
                o = new IntersectionObserver(e => {
                    r = e.some(e => e.isIntersecting && e.intersectionRatio >= .5), i()
                }, {
                    threshold: .5
                });
            return o.observe(e), document.addEventListener("visibilitychange", i), () => {
                n = !0, o.disconnect(), document.removeEventListener("visibilitychange", i)
            }
        }

        function l(e, t, r) {
            let s, l, _, d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            if ("u" < typeof IntersectionObserver) return;
            let c = e.get(n.m),
                E = c.authenticatedAccountId;
            if (null == c.authenticatedUserId || null == c.userId || null == E) return;
            let u = t.ownerDocument,
                p = !1,
                T = !1,
                I = () => {
                    if (T) return;
                    let l = e.get(n.m);
                    l.authenticatedUserId !== c.authenticatedUserId || l.authenticatedAccountId !== c.authenticatedAccountId || l.userId !== c.userId || null != c.accountUserId && l.accountUserId !== c.accountUserId ? N() : (null == s && (s = (0, a.b)(e, E)), null == s || (s.isCurrent() ? !(!p || "visible" !== u.visibilityState || !(0, o.g)(e) || (0, i.c)() || !t.isConnected || t.closest('[aria-hidden="true"], [inert], [hidden]')) && t.checkVisibility({
                        visibilityProperty: !0,
                        opacityProperty: !0
                    }) && (T = !0, r(s), N()) : N()))
                },
                A = new IntersectionObserver(e => {
                    p = e.some(e => e.isIntersecting && e.intersectionRatio >= d && e.intersectionRect.width > 0 && e.intersectionRect.height > 0), I()
                }, {
                    threshold: 0 === d ? [0, Number.EPSILON] : .5
                }),
                N = () => {
                    T = !0, A.disconnect(), l?.(), _?.(), u.removeEventListener("visibilitychange", I), s?.dispose()
                };
            return (l = e.watch(e => {
                let {
                    get: t
                } = e;
                t(n.m), t(o.c), I()
            }), T) ? l() : (_ = (0, i.e)(I), u.addEventListener("visibilitychange", I), A.observe(t)), N
        }
        r.d(t, {
            a: () => s,
            b: () => l
        })
    }),
    FNWO: (function(e, t, r) {
        var n = r("RjXy"),
            i = r("ASxG"),
            o = r("PFjh"),
            a = r("yGJW"),
            s = r("PeqE");
        let l = {
                "ledger.all_accounts_synced": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED",
                "ledger.recent_transactions_requested": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED",
                "ledger.recent_transactions_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED",
                "ledger.refresh_profile": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE",
                "ledger.refresh_profile_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED",
                "ledger.account_selected": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED",
                "ledger.account_detail_open_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED",
                "ledger.bank_reauth_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED",
                "ledger.bank_disconnected": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED",
                "ledger.oauth_button_clicked": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED",
                "ledger.oauth_flow_web_exited": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED",
                "ledger.oauth_flow_native_exited": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED",
                "ledger.oauth_flow_finishing": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING",
                "ledger.oauth_flow_finished": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED",
                "ledger.account_detail_loading_shown": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN",
                "ledger.account_detail_loaded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED",
                "ledger.account_detail_close_requested": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED",
                "ledger.bank_reauth_flow_started": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED",
                "ledger.account_resync_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED",
                "ledger.account_resync_succeeded": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED",
                "ledger.account_remove_initiated": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED",
                "ledger.account_removed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED",
                "ledger.account_follow_up_unavailable": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE",
                "ledger.account_follow_up_clicked": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED",
                "ledger.error.recent_transactions_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED",
                "ledger.error.reauth_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED",
                "ledger.error.resync_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED",
                "ledger.error.account_remove_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED",
                "ledger.error.account_follow_up_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED",
                "ledger.error.account_detail_open_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED",
                "ledger.error.refresh_profile": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE",
                "ledger.error.bank_disconnect_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED",
                "ledger.error.unknown_action": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION",
                "ledger.error.boundary_catch": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH",
                "ledger.error.oauth_mark_initializing_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED",
                "ledger.error.oauth_start_flow_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED",
                "ledger.error.oauth_polling_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED",
                "ledger.error.bank_reauth_failed": "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED"
            },
            _ = i.object({
                account_section: i.enum(["banking", "investments", "credit_cards", "real_estate", "loans", "payroll", "other"]).optional().catch(void 0),
                link_status: i.enum(["linked", "error", "disconnected"]).optional().catch(void 0),
                surface: i.enum(["ledger_profile", "mattress_accounts_tab", "unknown", "web", "native"]).optional().catch(void 0),
                device_type: i.enum(["mobile", "tablet", "desktop", "unknown"]).optional().catch(void 0),
                selection_source: i.enum(["profile", "snapshot"]).optional().catch(void 0),
                view_mode: i.enum(["pip", "inline", "fullscreen", "modal", "sidebar", "unknown"]).optional().catch(void 0),
                reason: i.enum(["close_button", "follow_up", "remove_success"]).optional().catch(void 0),
                item_count: i.number().int().nonnegative().max(0x7fffffff).optional().catch(void 0),
                result: i.enum(["empty", "non_empty"]).optional().catch(void 0),
                provider: i.literal("plaid").optional().catch(void 0),
                plaidExitStatus: i.string().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0),
                plaidErrorCode: i.string().regex(/^[a-zA-Z0-9_]{1,64}$/).optional().catch(void 0)
            }),
            d = {
                label: i.string().startsWith("ledger."),
                tags: i.array(i.object({
                    key: i.string(),
                    value: i.string()
                })).optional()
            },
            c = i.discriminatedUnion("type", [i.object({
                type: i.literal("event"),
                label: d.label,
                payload: _.optional().catch(void 0)
            }), i.object({
                type: i.literal("count"),
                ...d,
                count: i.number().optional()
            }), i.object({
                type: i.literal("hist"),
                ...d,
                value: i.number()
            }), i.object({
                type: i.literal("error")
            })]);

        function E(e, t) {
            let r = c.safeParse(t);
            if (!r.success) return;
            let i = r.data;
            if ("event" === i.type) {
                let t = l[i.label];
                if (null == t) return;
                (0, a.a)(e, n.d, {
                    eventType: t,
                    accountSection: i.payload?.account_section,
                    linkStatus: i.payload?.link_status,
                    surface: i.payload?.surface,
                    deviceType: i.payload?.device_type,
                    selectionSource: i.payload?.selection_source,
                    viewMode: i.payload?.view_mode,
                    reason: i.payload?.reason,
                    itemCount: i.payload?.item_count,
                    result: i.payload?.result,
                    provider: i.payload?.provider,
                    plaidExitStatus: i.payload?.plaidExitStatus,
                    plaidErrorCode: i.payload?.plaidErrorCode
                });
                return
            }
            let _ = {
                    ..."tags" in i ? Object.fromEntries(i.tags?.map(e => {
                        let {
                            key: t,
                            value: r
                        } = e;
                        return [t, r]
                    }) ?? []) : {},
                    attribution_id: s.a,
                    name: "ledger",
                    client_type: "chatgpt-web"
                },
                d = e.get(o.a);
            switch (i.type) {
                case "count":
                    d.count("ecosystem", i.label, _, i.count);
                    break;
                case "hist":
                    d.hist("ecosystem", i.label, _, i.value);
                    break;
                case "error":
                    d.count("ecosystem", "app.error", _)
            }
        }
        r.d(t, {
            a: () => E
        })
    }),
    O0Tw: (function(e, t, r) {
        r.d(t, {
            a: () => g,
            b: () => h
        });
        var n = r("QosV");
        let i = "ledger_spend_by_category_widget",
            o = "ledger_portfolio_distribution_widget";

        function a(e) {
            return null !== e && "object" == typeof e && !Array.isArray(e)
        }

        function s(e) {
            if ("object" == typeof e && null != e && "top_categories" in e) return Array.isArray(e.top_categories) ? 0 === e.top_categories.length ? "spend_empty" : "spend_summary" : void 0
        }
        var l = r("RjXy"),
            _ = r("AuIy"),
            d = r("zd8w"),
            c = r("Cslg"),
            E = r("OOaz"),
            u = r("MrGp"),
            p = r("yGJW"),
            T = r("PeqE"),
            I = r("kAhA"),
            A = r("JLZd");

        function N(e, t, r) {
            let n = e.get(u.L, t);
            if (null == n) return;
            let i = (0, _.b)({
                mapping: n,
                current_node: r
            }).find(e => "user" === e.author.role);
            if (i?.metadata?.starter_prompt_id === "finance-onboarding-connect-ledger" && null == e.get(u.Z, t)) return n[r]?.message
        }

        function g(e, t) {
            let {
                identity: r
            } = t.resourceIdentity, {
                chatGptThreadId: n,
                sourceMessageId: i
            } = t.request;
            if (!0 !== t.widget.is_verified_first_party || !0 === t.mcpAppHostAdapter.isTombstone || null == t.mcpAppHostAdapter.assertActive || "connector" !== r.kind || r.connectorId !== T.a || null == r.userId || null == r.accountId || null == n || !i) return;
            try {
                t.mcpAppHostAdapter.assertActive()
            } catch {
                return
            }
            let o = e.get(u.j, n);
            if (null == o) return;
            let a = N(e, n, i);
            if (a?.author.role !== "assistant" && a?.author.role !== "tool") return;
            let s = (0, I.b)(e, r.accountId);
            if (null != s) try {
                s.userId === r.userId && s.isCurrent() && C(e, s, {
                    conversationId: o,
                    messageId: i,
                    widgetName: "ledger_connected_institutions",
                    widgetResultKind: "syncing"
                })
            } finally {
                s.dispose()
            }
        }

        function C(e, t, r) {
            t.retainTelemetry(new Promise(n => {
                (0, p.a)(e, l.h, {
                    surfaceName: "chat",
                    ...r
                }, () => n(), void 0, {
                    expectedUserId: t.analyticsUserId,
                    expectedAccountId: t.accountId,
                    eventCreatedAt: new Date().toISOString()
                })
            }))
        }

        function h(e, t, r) {
            let l, _, c, u, p, T = (0, n.c)(15),
                I = (0, d.useRef)(null);
            T[0] !== e || T[1] !== r ? (l = function(e, t) {
                let {
                    scope: r,
                    turn: n,
                    sourceMessageId: a,
                    sharedPostId: s,
                    sharedConversationId: l
                } = e, {
                    widgetName: _,
                    component: d,
                    contentReferenceStartIndex: c,
                    externalResourcesBlocked: u
                } = t;
                if (!(null == _ || _ !== i && _ !== o || null == d && "ledger_spend_by_category_widget" !== _ || null == a || null == n || (0, E.e)(n.conversationId)) && "primary" === n.conversationType && !1 !== n.isPresented && !1 !== n.trackShownImpressions && !n.isReadOnly && !n.shouldBlockExternalEgress && !n.renderRestrictedWidgets && !n.renderRestrictedModelResponses && !u && null == l && null == s && "tpp" !== n.conversationOrigin && "flora" !== n.conversationOrigin && "chatgpt-thread" === r.value.routeKind && r.value.conversationId === n.conversationId && null != c && Number.isInteger(c) && !(c < 0) && n.contentReferences.some((e, t) => "dil" === e.type && e.name === _ && e.start_idx === c && (n.contentReferenceMessageIds?.[t] ?? n.messageId) === a)) return {
                    key: JSON.stringify([n.conversationId, a, c, _, d]),
                    conversationId: n.conversationId,
                    messageId: a,
                    contentReferenceStartIndex: c,
                    widgetName: _,
                    component: d
                }
            }(e, r), T[0] = e, T[1] = r, T[2] = l) : l = T[2];
            let A = l,
                N = A?.key,
                {
                    scope: g
                } = e;
            T[3] !== t || T[4] !== A || T[5] !== g ? (_ = () => {
                let e = t.current;
                if (null != e && null != A) return null == I.current && (I.current = f()), I.current.attach(g, e, A)
            }, T[3] = t, T[4] = A, T[5] = g, T[6] = _) : _ = T[6];
            let C = (0, d.useEffectEvent)(_);
            return T[7] !== C ? (c = () => C(), T[7] = C, T[8] = c) : c = T[8], T[9] !== N || T[10] !== g ? (u = [g, N], T[9] = N, T[10] = g, T[11] = u) : u = T[11], (0, d.useEffect)(c, u), T[12] !== A || T[13] !== N ? (p = null == A ? void 0 : (e, t) => {
                null == I.current && (I.current = f()), I.current.commit(N, function(e, t, r, n) {
                    let l;
                    if (e !== i || t?.component !== "LedgerSpendByCategoryWidget" || r?.has_connected_accounts === !1 || !Array.isArray(r?.month_views) || r.month_views.length <= 1) {
                        var _ = e,
                            d = t,
                            c = r;
                        if (_ === o) return d?.component !== "LedgerPortfolioDistributionWidget" || void 0 === c ? void 0 : !1 === c.has_connected_accounts ? "no_accounts" : !1 === c.has_holdings ? "portfolio_empty" : !0 === c.has_holdings ? "portfolio_summary" : void 0;
                        if (_ !== i || void 0 !== d && "LedgerSpendByCategoryWidget" !== d.component || void 0 === c) return;
                        if (void 0 !== d && !1 === c.has_connected_accounts) return "no_accounts";
                        let n = c.month_views,
                            a = c.selected_month_index;
                        return Array.isArray(n) && ("number" == typeof a || "bigint" == typeof a) && ("number" != typeof a || Number.isInteger(a)) && !(a < 0) && !(a >= n.length) ? s(n[Number(a)]) : void 0
                    }
                    let E = function(e) {
                        let t, r = [e];
                        for (; r.length > 0;) {
                            let e = r.pop();
                            if (Array.isArray(e)) r.push(...e);
                            else if (a(e)) {
                                if ("select" === e.type && a(e.props) && "selected_month" === e.props.name) {
                                    if (void 0 !== t || "string" != typeof e.props.value) return;
                                    t = e.props.value
                                }
                                Array.isArray(e.children) && r.push(...e.children)
                            }
                        }
                        return t
                    }(n);
                    if (void 0 !== E) {
                        for (let e of r.month_views)
                            if (a(e) && e.option_value === E) {
                                if (void 0 !== l) return;
                                l = e
                            } return s(l)
                    }
                }(A.widgetName, null == A.component ? void 0 : {
                    component: A.component
                }, e, t))
            }, T[12] = A, T[13] = N, T[14] = p) : p = T[14], p
        }

        function f() {
            let e, t;
            return {
                commit: (r, n) => {
                    null != r && (e = {
                        key: r,
                        kind: n
                    }, t?.key === r && t.observation.update(n))
                },
                attach: (r, n, i) => {
                    var o, a, s;
                    let l, d, E, u, p, T, g, h, f, m, y = (o = r, a = n, s = i, p = o.get(c.m), T = () => {
                        let e = N(o, s.conversationId, s.messageId);
                        return (e?.author.role === "assistant" || e?.author.role === "tool") && e.metadata?.is_visually_hidden_from_conversation !== !0 && e.metadata?.reasoning_status == null && e.metadata?.model_dil_v2 == null && (0, _.o)((0, _.o)(e.metadata?.model_dil)?.dil)?.type == null
                    }, g = new Set, h = !1, f = () => {
                        h = !0, E?.(), u?.(), l?.dispose()
                    }, m = () => {
                        if (E?.(), E = void 0, h || !l?.isCurrent() || !T()) return;
                        let e = d;
                        null == e || g.has(e) || (E = (0, A.b)(o, a, () => {
                            !(h || d !== e || !l?.isCurrent() || g.has(e)) && T() && (g.add(e), C(o, l, {
                                widgetName: s.widgetName,
                                conversationId: s.conversationId,
                                messageId: s.messageId,
                                contentReferenceStartIndex: s.contentReferenceStartIndex,
                                widgetResultKind: e
                            }))
                        }, 0))
                    }, u = o.watch(e => {
                        let {
                            get: t
                        } = e, r = t(c.m);
                        r.authenticatedUserId === p.authenticatedUserId && r.userId === p.userId && r.authenticatedAccountId === p.authenticatedAccountId && (null == p.accountUserId || r.accountUserId === p.accountUserId) && (null == l || l.isCurrent()) ? h || null != l || null == p.authenticatedAccountId || (l = (0, I.b)(o, p.authenticatedAccountId), m()) : f()
                    }), h && u(), {
                        update: e => {
                            d !== e && (d = e, m())
                        },
                        dispose: f
                    });
                    return t = {
                        key: i.key,
                        observation: y
                    }, e?.key === i.key && y.update(e.kind), () => {
                        t?.observation === y && (t = void 0), y.dispose()
                    }
                }
            }
        }
    }),
    DSZZ: (function(e, t, r) {
        var n = r("iTtm"),
            i = r("M7HN"),
            o = r("Cslg"),
            a = r("nlNF"),
            s = r("OWtl"),
            l = r("ADAj");
        let _ = (0, n.u)(s.a, () => null);

        function d(e, t) {
            let r = e.get(o.f),
                n = e.get(o.j),
                s = e.get(a.d);
            return null != r && null != n && (0, l.b)(e.get, i.qf.showEducationalTips) ? () => {
                r === e.get(o.f) && n === e.get(o.j) && s === e.get(a.d) && e.set(_, {
                    accountId: r,
                    conversationId: t,
                    navigationVisit: s,
                    userId: n
                })
            } : null
        }
        r.d(t, {
            b: () => d
        }, {
            a: _
        })
    }),
    RjXy: (function(e, t, r) {
        var n, i = ((n = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", n.UNRECOGNIZED = "UNRECOGNIZED", n);
        r.d(t, {
            e: () => i
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentInteraction"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentViewed"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceConnectFlowStep"
            },
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceLedgerWidgetEvent"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceClosed"
            },
            g: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceViewed"
            },
            h: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceWidgetViewed"
            }
        })
    })
};