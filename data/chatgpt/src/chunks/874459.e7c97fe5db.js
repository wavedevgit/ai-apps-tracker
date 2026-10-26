export const __rspack_esm_id = 874459;
export const __rspack_esm_ids = [874459];
export const __webpack_modules__ = {
    Q5Ju: (function(e, t, r) {
        var n = r("JXtc");

        function i(e) {
            return null != e && "widget" in e
        }

        function a(e) {
            let {
                csp: t,
                height_hint: r,
                html: i,
                prefers_border: a
            } = e.widget, _ = e.resource ?? {
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
                        "openai/widgetMinFrameHeight": o(e),
                        "openai/widgetDomain": e.widget.domain ?? void 0,
                        "openai/widgetPrefersBorder": a ?? !1
                    },
                    mimeType: "text/html+skybridge",
                    text: i,
                    uri: e.request.template
                }]
            }, s = (0, n.b)(_);
            if (s?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
            let l = e.widget.inline_frame_padding;
            return {
                ...s,
                inlineFramePadding: null == l ? void 0 : {
                    blockStart: l.block_start,
                    blockEnd: l.block_end,
                    inlineStart: l.inline_start,
                    inlineEnd: l.inline_end
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

        function o(e) {
            return e.widget.height_hint, 0
        }
        r.d(t, {
            a: () => o,
            b: () => a,
            c: () => i
        })
    }),
    SoU3: (function(e, t, r) {
        var n = r("D7Ms"),
            i = r("SZCv"),
            a = r.n(i),
            o = r("iTtm"),
            _ = r("qx55"),
            s = r("ALWK"),
            l = r("kl6F"),
            E = r("Mwpn"),
            d = r("Q5Ju");
        let c = (0, o.d)(l.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: i
                } = t, a = i(s.j, r), o = a?.sessionId == null ? null : a.content, _ = o?.resource;
                return null != n && null != o && (0, d.c)(_) && _.resourceKey === n ? _.widget : null
            }),
            u = (0, o.d)(l.a, (e, t) => {
                let {
                    retainFrame: r = !0,
                    ...i
                } = e, {
                    get: a
                } = t, o = a(E.a, i), l = r && null == o.data ? a(s.j, i.mcpAppId) : null, c = l?.content, u = c?.resource, T = l?.sessionId != null && null != c && (0, d.c)(u) && null != u.resourceKey && null != u.resourceQuery && (0, n.f)([u.resourceQuery]) === (0, n.f)([i]) && "current" === a(_.d, c.resourceIdentity) ? {
                    widget: u.widget,
                    resourceKey: u.resourceKey,
                    resourceIdentity: c.resourceIdentity
                } : void 0, p = o.data ?? T;
                return {
                    ...o,
                    data: null == p ? void 0 : {
                        ...p,
                        resourceQuery: i
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: a()
            });
        r.d(t, {}, {
            a: c,
            b: u
        })
    }),
    OMcg: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => eV,
            EcosystemWidgetDialog: () => eW,
            a: () => eq
        });
        var n = r("ABep"),
            i = r("QosV");
        async function a() {
            return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
        }
        var o = r("on57"),
            _ = r("iTtm"),
            s = r("o0PZ"),
            l = r("zd8w"),
            E = r("Wf1j"),
            d = r("oyxz"),
            c = r("Qgfj"),
            u = r("HZfM"),
            T = r("ZU27"),
            p = r("uUH7"),
            A = r("EOo5"),
            I = r("kphc"),
            N = r("ygO2"),
            C = r("JNtf"),
            g = r("RNul"),
            h = r("SGsN"),
            D = r("PeqE"),
            m = r("ASxG"),
            G = r("Cslg"),
            f = r("XCEe"),
            R = r("FNWO");
        let y = m.strictObject({
            title: m.string().optional(),
            params: m.strictObject({
                view: m.literal("accountLinking"),
                initialTab: m.enum(["accounts", "creditScore", "realEstate"]).optional()
            })
        });
        var P = r("cTih"),
            L = r("O23H"),
            w = r("tbqK"),
            O = r("AHnN"),
            v = r("ALWK"),
            F = r("ze43"),
            b = r("Sd8U"),
            H = r("tSEg"),
            W = r("Mwpn"),
            S = r("Q5Ju"),
            U = r("SoU3"),
            V = r("OOaz"),
            Y = r("MrGp"),
            q = r("kSHG"),
            x = r("P93s"),
            k = r("OWtl"),
            j = r("OMIV"),
            M = r("bnxy"),
            K = r("rxj0"),
            B = r("IDHB");
        let $ = (0, _.d)(k.a, (e, t) => {
            let {
                get: r
            } = t, n = r(G.l);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r(j.c, "3080374709") || null == e || null == r(Y.j, e) || null != r(Y.Y, e)) return !1;
            let i = r(Y.x, e);
            return ("tpp" === i || "flora" === i) && !r(K.d, e)
        });
        async function z(e, t, n, i) {
            let {
                chatGptThreadId: a,
                sourceMessageId: o
            } = t.request;
            if (!o) throw (0, x.a)("File opening requires a source message", q.q.MethodNotFound);
            let _ = e.get(Y.j, a),
                {
                    accountId: s,
                    userId: l
                } = t.resourceIdentity.identity,
                E = e => e.get(H.h) || !e.get($, a) || e.get(G.e) !== s || e.get(G.j) !== l || e.get(Y.j, a) !== _,
                d = () => {
                    if (i.throwIfAborted(), null == _ || E(e)) throw (0, x.a)("File opening is unavailable for this widget", q.q.MethodNotFound)
                };
            if (d(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, x.a)("Cannot open this file path", q.q.InvalidParams);
            let c = e.get(Y.Q, a),
                u = (0, B.a)(e, a, {
                    type: "sandbox",
                    messageId: o,
                    sandboxPath: n
                }),
                {
                    canOpenChatGptFilePreview: T,
                    openChatGptFile: p
                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(8854)]).then(r.bind(r, "XkLc"));
            if (d(), !T({
                    browserPreview: !0
                })) throw (0, x.a)("File previews are unavailable in this host", q.q.MethodNotFound);
            try {
                await p(e, {
                    conversationId: _,
                    fileName: (0, M.k)(n),
                    gizmoId: c,
                    target: u,
                    tabKey: `${o}:${n}`,
                    browserPreview: !0,
                    downloadFallback: !1,
                    isAccessBlocked: E,
                    signal: i
                })
            } catch {
                throw d(), (0, x.a)("Unable to open file", q.q.InternalError)
            }
            d()
        }
        var Q = r("T8YV"),
            Z = r("HUQj"),
            X = r("z8ZL"),
            J = r("qx55"),
            ee = r("Sbyb"),
            et = r("jEN2"),
            er = r("JYRT"),
            en = r("ripK"),
            ei = r("g2p6"),
            ea = r("sWz1"),
            eo = r("EA6X"),
            e_ = r("g25Y"),
            es = r("Ot7V"),
            el = r("X6Vn"),
            eE = r("vgfv"),
            ed = r("yGJW"),
            ec = r("yI91"),
            eu = r("Kwur"),
            eT = r("VV1g"),
            ep = r("aRhc");
        let eA = "redirectUrl",
            eI = m.object({
                href: m.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: m.union([m.string(), m.boolean()]).optional(),
                openMode: m.enum(["tab", "popup"]).optional()
            });
        async function eN(e, t, r, n, i, a) {
            i(n);
            let o = eT.b.safeParse(r);
            if (o.success) return !0 === t.widget.is_verified_first_party && (await a?.(o.data.href, n), i(n)), !0;
            let {
                href: _,
                redirectUrl: s,
                openMode: l
            } = eI.parse(r);
            if (/^data:/i.test(_)) {
                if (_.length > 0x1000000) throw Error("CSV export is too large");
                let r = _.indexOf(","),
                    a = decodeURIComponent(_.slice(r + 1)),
                    o = new Blob([/;base64$/i.test(_.slice(0, r)) ? (0, ec.a)(a) : a], {
                        type: "text/csv;charset=utf-8"
                    });
                if (o.size > 8388608) throw Error("CSV export is too large");
                return eC(e, t, "data:text/csv", "tab"), (0, el.f)(e, e_.ExternalLinkConfirmationDialog, {
                    href: _,
                    downloadFilename: "export.csv",
                    initiator: "mcp_app_resource",
                    signal: n,
                    onDownload: () => {
                        try {
                            i(n)
                        } catch {
                            return
                        }(0, en.a)(o, "export.csv")
                    }
                }), !0
            }
            if (null == l && t.mcpAppHostAdapter.onOpenLink?.(_)) return !0;
            if (/^codex(?:-dev)?:/.test(_)) return !1;
            let E = !0 === t.widget.is_verified_first_party;
            if (E && null == l && await a?.(_, n)) return !0;
            i(n);
            let d = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                c = (0, ep.c)(_, {
                    connectDomains: t.widget.csp?.connect_domains
                }, t.widget.domain) || (0, ep.b)(_, d),
                u = !/^https?:/.test(_);
            if (u && !c) throw Error("The app has not declared this external protocol");
            let T = new URL(_),
                p = !u && T.origin === window.location.origin;
            T.search = "", T.hash = "";
            let A = e.get(Y.j, t.request.chatGptThreadId ?? null);
            eC(e, t, T.href, l);
            let I = _;
            c && !p && !1 !== s && (null != A || null == t.request.chatGptThreadId) && (I = function(e, t) {
                let r;
                if (!t) return e;
                let n = e.startsWith("http://") || e.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(e);
                try {
                    r = new URL(e)
                } catch {
                    return e
                }
                return !n || r.searchParams.get(eA) ? e : (r.searchParams.set(eA, t), r.toString())
            }(_, null == A ? window.location.href : new URL(`/c/${encodeURIComponent(A)}`, window.location.origin).href));
            let N = p || c;
            if (!N && E) try {
                N = (await eu.Request.safePost("/ecosystem/url_safe", {
                    requestBody: {
                        url: _,
                        resolved_pineapple_uri: t.request.appUri
                    },
                    additionalHeaders: null == t.resourceIdentity.identity.accountId ? void 0 : {
                        "ChatGPT-Account-ID": t.resourceIdentity.identity.accountId
                    },
                    signal: n
                })).safe
            } catch {}
            i(n);
            let C = "Apple Computer, Inc." === navigator.vendor,
                g = () => {
                    try {
                        i(n)
                    } catch {
                        return
                    }
                    u ? window.open(I, "_blank", "noopener,noreferrer") : E && "popup" === l && N && !C ? (0, eE.a)(e, I) : (0, es.f)({
                        href: I,
                        initiator: "mcp_app_resource"
                    })
                };
            return !N || C || u ? (0, el.f)(e, e_.ExternalLinkConfirmationDialog, {
                href: I,
                initiator: "mcp_app_resource",
                showCopyLink: !N,
                signal: n,
                onOpen: g
            }) : g(), !0
        }

        function eC(e, t, r, n) {
            let i = !0 === t.widget.is_verified_first_party,
                a = e.get(Y.j, t.request.chatGptThreadId ?? null);
            (0, ed.a)(e, eo.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === t.mcpAppHostAdapter.displayMode ? eo.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : eo.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "CHATGPT_LINK_TYPE_WIDGET",
                attributionId: t.attributionId,
                domain: t.widget.domain ?? void 0,
                distributionChannel: t.distributionChannel ?? (i ? "openai" : "external"),
                openMode: i && "popup" === n ? "popup" : "tab",
                widgetSessionId: t.widgetSessionId,
                widgetActionType: "open_external",
                conversationId: a ?? void 0,
                messageId: t.request.sourceMessageId,
                parentContext: {
                    widgetType: t.request.appUri,
                    widgetName: t.request.template
                },
                url: r
            })
        }
        var eg = r("iqEK"),
            eh = r("UxLW"),
            eD = r("vvmK");
        let em = m.object({
            fileId: m.string().min(1)
        });
        var eG = r("bTvG"),
            ef = r("JKSp"),
            eR = r("PFjh"),
            ey = r("hkUn");
        let eP = {
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
                ...eP
            }), m.object({
                type: m.literal("count"),
                ...eP,
                count: m.number().optional()
            }), m.object({
                type: m.literal("hist"),
                ...eP,
                value: m.number()
            }), m.object({
                type: m.literal("error")
            })]);
        var ew = r("Igop"),
            eO = r("DSZZ");
        let ev = "openai/deep-research/report-copy",
            eF = m.discriminatedUnion("phase", [m.strictObject({
                phase: m.literal("start"),
                id: m.uuid(),
                length: m.number().int().nonnegative()
            }), m.strictObject({
                phase: m.literal("finish"),
                id: m.uuid(),
                success: m.boolean()
            })]);
        var eb = r("AuIy"),
            eH = r("cDR4");

        function eW(e) {
            let t, r = (0, i.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(eS, {
                ...e
            }) : (0, n.jsx)(eU, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function eS(e) {
            let t, r = (0, i.c)(3),
                a = (0, _.y)(b.a);
            return r[0] !== e || r[1] !== a ? (t = (0, n.jsx)(eU, {
                ...e,
                recipient: a
            }), r[0] = e, r[1] = a, r[2] = t) : t = r[2], t
        }

        function eU(e) {
            let t, r, a, o, c, u, T, p, A, I, N, D, m, G, f = (0, i.c)(61),
                {
                    recipient: R,
                    conversationId: y,
                    hostId: P,
                    mcpAppId: L,
                    onClose: w,
                    state: O,
                    heightHint: F,
                    widthHint: b,
                    allowsInteractiveDismissal: W
                } = e,
                S = void 0 === R ? null : R,
                U = (0, _.y)(H.a),
                V = (0, E.a)();
            f[0] !== L ? (t = () => L ?? (0, s.pf)(), f[0] = L, f[1] = t) : t = f[1];
            let [Y] = (0, l.useState)(t), q = "ready" === O.kind && "modal" === O.result.request.mode ? Math.max(F ?? O.result.widget.height_hint ?? 0, 0) || void 0 : F, x = "ready" === O.kind ? O.result.tracking : O.tracking, k = "ready" === O.kind && "fullscreen" === O.result.request.mode, j = "loading" === O.kind && !0 === O.nonModal;
            f[2] !== w || f[3] !== x ? (r = () => {
                x?.close("user_dismissed"), w()
            }, f[2] = w, f[3] = x, f[4] = r) : r = f[4];
            let M = (0, l.useEffectEvent)(r);
            f[5] !== W || f[6] !== M || f[7] !== j || f[8] !== U ? (a = () => {
                if (j) return U.get(h.f).info((0, n.jsx)(d.a, {
                    ...ex.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(g.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === W ? void 0 : {
                        label: (0, n.jsx)(d.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel",
                            description: "Button to cancel opening an Apps SDK widget"
                        }),
                        onClick: () => M()
                    }
                }).close
            }, f[5] = W, f[6] = M, f[7] = j, f[8] = U, f[9] = a) : a = f[9], f[10] !== W || f[11] !== j || f[12] !== U ? (o = [U, j, W], f[10] = W, f[11] = j, f[12] = U, f[13] = o) : o = f[13], (0, l.useEffect)(a, o), f[14] !== k || f[15] !== w || f[16] !== x ? (c = () => {
                k && (x?.close("user_dismissed"), w())
            }, f[14] = k, f[15] = w, f[16] = x, f[17] = c) : c = f[17];
            let K = (0, l.useEffectEvent)(c);
            if (f[18] !== K || f[19] !== Y || f[20] !== U || f[21] !== x ? (u = () => {
                    let e = U.watch(e => {
                        let t = e.get(v.s, Y);
                        null != t && e.get(v.r, t)?.isOpen === !1 ? K() : (e.get(v.v, Y) && x?.renderReady(), null != e.get(v.q, Y) && x?.error("widget_render"))
                    });
                    return () => {
                        e(), x?.close("navigation_changed")
                    }
                }, f[18] = K, f[19] = Y, f[20] = U, f[21] = x, f[22] = u) : u = f[22], f[23] !== Y || f[24] !== U || f[25] !== x ? (T = [U, Y, x], f[23] = Y, f[24] = U, f[25] = x, f[26] = T) : T = f[26], (0, l.useEffect)(u, T), j) return null;
            if ("ready" === O.kind && k) {
                let e, t;
                return f[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], f[27] = e) : e = f[27], f[28] !== y || f[29] !== P || f[30] !== Y || f[31] !== S || f[32] !== O.result ? (t = (0, n.jsx)(eV, {
                    recipient: S,
                    conversationId: y,
                    hostDisplayModes: e,
                    hostId: P,
                    lifetime: "component",
                    mcpAppId: Y,
                    result: O.result,
                    showOpenButton: !1
                }), f[28] = y, f[29] = P, f[30] = Y, f[31] = S, f[32] = O.result, f[33] = t) : t = f[33], t
            }
            let B = !1 === W;
            return f[34] !== W ? (p = e => {
                !1 === W && e.preventDefault()
            }, f[34] = W, f[35] = p) : p = f[35], f[36] !== V ? (A = V.formatMessage(ex.appTitle), f[36] = V, f[37] = A) : A = f[37], f[38] !== q ? (I = null == q ? void 0 : {
                height: q
            }, f[38] = q, f[39] = I) : I = f[39], f[40] !== p || f[41] !== A || f[42] !== I ? (N = {
                onEscapeKeyDown: p,
                "aria-label": A,
                style: I
            }, f[40] = p, f[41] = A, f[42] = I, f[43] = N) : N = f[43], f[44] !== w || f[45] !== x ? (D = e => {
                e || (x?.close("user_dismissed"), w())
            }, f[44] = w, f[45] = x, f[46] = D) : D = f[46], f[47] !== y || f[48] !== P || f[49] !== Y || f[50] !== S || f[51] !== O.error || f[52] !== O.kind || f[53] !== O.result ? (m = "loading" === O.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(d.a, {
                    ...ex.openingApp
                })
            }) : "error" === O.kind ? (0, n.jsx)("div", {
                className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                children: (0, Q.d)(O.error) ? (0, n.jsx)(Z.a, {}) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(C.e, {
                        className: "text-lg font-medium",
                        children: (0, n.jsx)(d.a, {
                            ...ex.openAppError
                        })
                    }), (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(d.a, {
                            ...ex.openAppErrorDescription
                        })
                    })]
                })
            }) : (0, n.jsx)(eV, {
                recipient: S,
                conversationId: y,
                hostId: P,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: Y,
                result: O.result
            }), f[47] = y, f[48] = P, f[49] = Y, f[50] = S, f[51] = O.error, f[52] = O.kind, f[53] = O.result, f[54] = m) : m = f[54], f[55] !== N || f[56] !== D || f[57] !== m || f[58] !== B || f[59] !== b ? (G = (0, n.jsx)(C.b, {
                shouldIgnoreClickOutside: B,
                contentProps: N,
                dialogCloseClassName: "z-10",
                onOpenChange: D,
                open: !0,
                size: "appLauncher",
                widthHint: b,
                children: m
            }), f[55] = N, f[56] = D, f[57] = m, f[58] = B, f[59] = b, f[60] = G) : G = f[60], G
        }

        function eV(e) {
            let t, s, c, g, P, b, q, x, k, M, B, Q, Z, eo, e_, es, el, eE, ec, eT, eA, eI, eC, eP, eS, eU, ej = (0, i.c)(160),
                {
                    recipient: eM,
                    newThreadDestination: eK,
                    conversationId: eB,
                    deepLink: e$,
                    initialWidgetState: ez,
                    pluginId: eQ,
                    hostId: eZ,
                    inDialog: eX,
                    Frame: eJ,
                    lifetime: e0,
                    hostedInThreadScrollLayout: e1,
                    mcpAppId: e5,
                    result: e3,
                    fullSurface: e6,
                    globalSurface: e4,
                    hostScroll: e8,
                    hostDisplayModes: e7,
                    inheritHostBackground: e9,
                    showDialogTitle: e2,
                    heightHint: te,
                    showOpenButton: tt,
                    showLoadingStatus: tr,
                    readOnlySnapshot: tn
                } = e,
                ti = void 0 === eM ? null : eM,
                ta = void 0 !== eX && eX,
                to = void 0 !== e1 && e1,
                t_ = void 0 === e6 ? ta : e6,
                ts = void 0 !== e4 && e4,
                tl = void 0 !== e8 && e8,
                tE = void 0 === e7 ? v.e : e7,
                td = void 0 !== e9 && e9,
                tc = void 0 === e2 ? ta : e2,
                tu = void 0 === tt || tt,
                tT = void 0 === tr || tr,
                tp = void 0 !== tn && tn,
                tA = (0, _.y)(H.a),
                tI = e3.resourceQuery;
            ej[0] !== e3.resourceKey || ej[1] !== e5 ? (t = {
                mcpAppId: e5,
                resourceKey: e3.resourceKey
            }, ej[0] = e3.resourceKey, ej[1] = e5, ej[2] = t) : t = ej[2];
            let tN = (0, _.x)(U.a, t);
            ej[3] !== e3 || ej[4] !== tN ? (s = null == tN || tN === e3.widget ? e3 : {
                ...e3,
                widget: tN
            }, ej[3] = e3, ej[4] = tN, ej[5] = s) : s = ej[5];
            let tC = s,
                {
                    accountId: tg
                } = (0, A.a)(),
                {
                    pathname: th,
                    search: tD,
                    hash: tm
                } = (0, u.X)(),
                tG = (0, E.a)(),
                tf = (0, _.x)($, tC.request.chatGptThreadId);
            ej[6] !== eB || ej[7] !== eZ || ej[8] !== tG || ej[9] !== ti || ej[10] !== tC || ej[11] !== tA ? (c = async (e, t) => {
                let r = tA.get(p.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == tC.modalOwner && r.hostId === eZ && n.accountId === tC.resourceIdentity.identity.accountId && n.userId === tC.resourceIdentity.identity.userId && n.sourceAppUri === tC.request.appUri && n.sourceTemplate === tC.request.template && n.sourceMessageId === tC.request.sourceMessageId && n.sourceThreadId === tC.request.threadId && n.sourceConversationId === tA.get(Y.j, tC.request.chatGptThreadId)) {
                    tA.set(p.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eY();
                        t.throwIfAborted(), await e(tA, {
                            recipient: ti,
                            conversationId: eB,
                            hostId: eZ,
                            result: tC,
                            WidgetDialog: eW,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tA.get(h.f).danger(tG.formatMessage(ex.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, ej[6] = eB, ej[7] = eZ, ej[8] = tG, ej[9] = ti, ej[10] = tC, ej[11] = tA, ej[12] = c) : c = ej[12];
            let tR = (0, l.useEffectEvent)(c);
            ej[13] !== ta || ej[14] !== tR || ej[15] !== tA ? (g = () => {
                if (ta) return;
                let e = new AbortController,
                    t = tA.watch(t => {
                        let {
                            get: r
                        } = t, n = r(p.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tR(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, ej[13] = ta, ej[14] = tR, ej[15] = tA, ej[16] = g) : g = ej[16], ej[17] !== ta || ej[18] !== tC.request.appUri || ej[19] !== tC.request.chatGptThreadId || ej[20] !== tC.request.sourceMessageId || ej[21] !== tC.request.template || ej[22] !== tA ? (P = [tA, ta, tC.request.appUri, tC.request.template, tC.request.sourceMessageId, tC.request.chatGptThreadId], ej[17] = ta, ej[18] = tC.request.appUri, ej[19] = tC.request.chatGptThreadId, ej[20] = tC.request.sourceMessageId, ej[21] = tC.request.template, ej[22] = tA, ej[23] = P) : P = ej[23], (0, l.useEffect)(g, P), ej[24] !== e3 ? (b = (0, S.b)(e3), ej[24] = e3, ej[25] = b) : b = ej[25];
            let ty = b,
                tP = tC.mcpAppHostAdapter.displayMode ?? (ta ? "inline" : void 0);
            ej[26] !== ty ? (q = {
                data: ty,
                error: null,
                isLoading: !1
            }, ej[26] = ty, ej[27] = q) : q = ej[27];
            let tL = q,
                tw = (0, _.x)(v.o, e5),
                tO = (0, _.x)(v.u, e5),
                tv = `ecosystem-focused:${e5}`,
                tF = (0, _.x)(T.j.tabById$, tv);
            ej[28] !== e5 || ej[29] !== tC || ej[30] !== tA ? (x = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await ek();
                e(tA, e5, tC)
            }, ej[28] = e5, ej[29] = tC, ej[30] = tA, ej[31] = x) : x = ej[31];
            let tb = (0, l.useEffectEvent)(x);
            ej[32] !== tb || ej[33] !== tF || ej[34] !== ta || ej[35] !== e5 || ej[36] !== tA ? (k = () => {
                if (null != tF && !ta) return tA.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(v.j, e5) && tb()
                })
            }, ej[32] = tb, ej[33] = tF, ej[34] = ta, ej[35] = e5, ej[36] = tA, ej[37] = k) : k = ej[37], ej[38] !== tF || ej[39] !== ta || ej[40] !== e5 || ej[41] !== tA ? (M = [tA, tF, ta, e5], ej[38] = tF, ej[39] = ta, ej[40] = e5, ej[41] = tA, ej[42] = M) : M = ej[42], (0, l.useEffect)(k, M);
            let {
                identity: tH
            } = tC.resourceIdentity, tW = "connector" === tH.kind ? tH.connectorId : null;
            ej[43] !== tG || ej[44] !== tC.widget.name ? (B = tC.widget.name || tG.formatMessage(ex.appTitle), ej[43] = tG, ej[44] = tC.widget.name, ej[45] = B) : B = ej[45];
            let tS = B,
                tU = tC.title || tS;
            ej[46] !== tg || ej[47] !== tf || ej[48] !== tW || ej[49] !== eB || ej[50] !== e3 || ej[51] !== tP || ej[52] !== tF || ej[53] !== tv || ej[54] !== tm || ej[55] !== te || ej[56] !== eZ || ej[57] !== ta || ej[58] !== tG || ej[59] !== e5 || ej[60] !== th || ej[61] !== tp || ej[62] !== ti || ej[63] !== tA || ej[64] !== tD ? (Q = e => {
                var t;
                if (!(0, S.c)(e)) throw Error("Expected a hosted widget resource");
                let n = {
                    ...e3,
                    widget: e.widget,
                    resourceKey: e.resourceKey
                };
                if (ta) {
                    let e = n.mcpAppHostAdapter;
                    n.mcpAppHostAdapter = {
                        ...e,
                        handleRequest: (t, r, n) => e.handleRequest(t, r, n)
                    }
                }
                null != n.getPluginSuggestions && (n.mcpAppHostAdapter = {
                    ...n.mcpAppHostAdapter,
                    pluginSuggestions: n.getPluginSuggestions(n.widget)
                });
                let i = n.widget.name || tG.formatMessage(ex.appTitle),
                    o = n.title || i,
                    _ = {
                        isVerifiedFirstParty: !0 === n.widget.is_verified_first_party,
                        heightHint: te ?? e.heightHint,
                        minFrameHeight: (0, S.a)(n),
                        appIcon: e.appIcon,
                        sourceName: i,
                        title: o,
                        sidePanelTitle: o
                    };
                if (tp) return {
                    ..._,
                    mcpAppHostAdapter: n.mcpAppHostAdapter
                };
                let s = tA.get(Y.x, n.request.chatGptThreadId);
                return {
                    ..._,
                    mcpAppHostAdapter: {
                        ...n.mcpAppHostAdapter,
                        displayMode: tP,
                        ... function(e, t, n, i) {
                            var a;
                            let o, _, s, l, E, d, c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                u = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : null,
                                T = t => {
                                    if (t?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), "current" !== e.get(J.d, n.resourceIdentity)) throw Error("The widget connection changed")
                                },
                                {
                                    accountId: p,
                                    userId: A
                                } = n.resourceIdentity.identity,
                                I = function(e, t) {
                                    let {
                                        identity: r
                                    } = t.resourceIdentity, n = t.request.chatGptThreadId;
                                    if (!0 !== t.widget.is_verified_first_party || "connector" !== r.kind || !["connector_openai_deep_research", "connector_openai_deep_research_work"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                                    let i = new Map;
                                    return (t, r) => {
                                        let a = eF.safeParse(t);
                                        if (!a.success) return;
                                        let o = a.data,
                                            _ = i.get(o.id);
                                        if (_?.dispose(), !(r.aborted || e.get(Y.G, n) || null != e.get(Y.Y, n) || e.get(K.d, n)))
                                            if ("start" === o.phase) {
                                                let t = o.length >= 2e3 ? (0, eO.b)(e, n) : null;
                                                if (null != t && i.size < 8) {
                                                    let e = () => {
                                                        i.delete(o.id), r.removeEventListener("abort", e)
                                                    };
                                                    r.addEventListener("abort", e, {
                                                        once: !0
                                                    }), i.set(o.id, {
                                                        complete: t,
                                                        signal: r,
                                                        dispose: e
                                                    })
                                                }
                                            } else o.success && !_?.signal.aborted && _?.complete()
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
                            let C = navigator.userAgent,
                                g = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(C) ? (g.os = "ios", g.type = "mobile") : /Android/.test(C) ? (g.os = "android", g.type = "mobile") : /Windows[ _]NT/.test(C) ? g.os = "windows" : C.includes("Mac OS X") && (g.os = "macos"), "mobile" !== g.type && /Tablet/.test(C) && (g.type = "tablet");
                            let D = (0, ep.a)(n.widget.domain),
                                f = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                R = null != f && Object.values(e.get(er.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === f);
                            return {
                                experimentalCapabilities: {
                                    ...n.mcpAppHostAdapter.experimentalCapabilities,
                                    ...c && !0 === n.widget.is_verified_first_party && null != i && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                        "openai/sourceCitationLinks": {}
                                    } : {}
                                },
                                requestCheckout: async (t, i) => {
                                    T(i);
                                    let {
                                        loadWidgetCheckout: a
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085)]).then(r.bind(r, "IKJx")), o = await a();
                                    return T(i), o(e, n, t, i, () => T(i))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == I ? [] : [ev]],
                                handleRequest: async (r, i, a, o) => null != I && r.method === ev ? (T(i), null != i && I(r.params, i), {}) : (0, ew.a)(e, t, n.mcpAppHostAdapter, n.resourceIdentity, r, i, T, a, o),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (T(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let i = n.request.chatGptThreadId,
                                        a = m.object({
                                            text: m.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!a.success || null == i) return;
                                    let o = e.get(ei.n);
                                    if (null == o || o !== p) throw Error("The widget account changed");
                                    (0, ea.b)(e, i, {
                                        accountId: o,
                                        label: a.data.text,
                                        instruction: `The user is referring to this in particular:
${a.data.text}`,
                                        disableWebSearch: !1,
                                        targetedReplyText: a.data.text
                                    }), (0, et.e)(i)
                                } : void 0,
                                openConversationOverlay: !0 === n.widget.is_verified_first_party && null != n.request.chatGptThreadId ? async (t, i) => {
                                    T(i);
                                    let {
                                        openWidgetConversationOverlay: a
                                    } = await r.e(179356).then(r.bind(r, "ZF7q"));
                                    T(i), a(e, t, i, n.resourceIdentity)
                                } : void 0,
                                openPromptInput: !0 === n.widget.is_verified_first_party ? async (t, n, i) => {
                                    T(i);
                                    let {
                                        openBrowserWidgetPrompt: a
                                    } = await r.e(763191).then(r.bind(r, "Rcqw"));
                                    T(i);
                                    let o = await a(e, t, n, i);
                                    return T(i), o
                                } : void 0,
                                openInApp: {
                                    appName: n.widget.name,
                                    baseUrl: D,
                                    hideButton: !0 === n.widget.is_verified_first_party,
                                    validateUrl: e => {
                                        if (T(), e.includes("\\") || !URL.canParse(e, D ?? window.location.origin)) return null;
                                        let t = new URL(e, D ?? window.location.origin);
                                        return ("https:" === t.protocol || "http:" === t.protocol) && (0, ep.c)(t.href, {
                                            connectDomains: n.widget.csp?.connect_domains
                                        }, n.widget.domain) ? t.href : null
                                    }
                                },
                                openExternal: (t, r) => eN(e, n, t, r, T, i),
                                autofill: R && null != f && null != p && null != A ? async (t, i) => {
                                    T(i);
                                    let {
                                        createBrowserWidgetAutofill: a
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(799928)]).then(r.bind(r, "fOoA"));
                                    return T(i), a(e, n, f, t, i)
                                } : void 0,
                                sandboxFeatures: [...N],
                                instrumentation: (o = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), _ = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : n.request.appUri, s = {
                                    ...(0, ey.a)(n.resourceIdentity, n.analyticsContext),
                                    attributionId: _,
                                    messageId: n.request.sourceMessageId,
                                    suggestionMessageId: n.suggestionMessageId,
                                    distributionChannel: ({
                                        only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                        openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                        external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                    })[o],
                                    host: "chatgpt"
                                }, l = {
                                    attribution_id: _,
                                    name: n.request.template,
                                    client_type: "chatgpt-web"
                                }, {
                                    sendInstrument(t, r) {
                                        let i = eL.safeParse(t);
                                        if (!i.success) return;
                                        let a = i.data;
                                        if ("event" === a.type) return void(0, ed.a)(e, ef.a, {
                                            eventName: a.label,
                                            eventData: JSON.stringify({
                                                ...a.payload,
                                                ...l,
                                                conversation_id: e.get(Y.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: o,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === a.type) {
                                            "only_me" !== o && e.get(eR.a).count("ecosystem", "app.error", l);
                                            return
                                        }
                                        let _ = {
                                            ...Object.fromEntries(a.tags?.map(e => {
                                                let {
                                                    key: t,
                                                    value: r
                                                } = e;
                                                return [t, r]
                                            }) ?? []),
                                            ...l
                                        };
                                        "interaction" === a.type ? ((0, ed.a)(e, eG.l, {
                                            ...s,
                                            ...r,
                                            conversationId: e.get(Y.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, ey.b)(a.label)
                                        }), "only_me" !== o && e.get(eR.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [a.label] ?? "app.interaction", _)) : "only_me" !== o && ("count" === a.type ? e.get(eR.a).count("ecosystem", a.label, _, a.count) : e.get(eR.a).hist("ecosystem", a.label, _, a.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = m.object({
                                            effectiveDirective: m.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, ed.a)(e, eG.k, {
                                            ...s,
                                            conversationId: e.get(Y.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== o && e.get(eR.a).count("ecosystem", "app.security_policy_violation", l))
                                    }
                                }),
                                toolInfo: m.object({
                                    tool: m.object({
                                        name: m.string(),
                                        input_schema: X.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
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
                                device: g,
                                downloadBlob: !0 === n.widget.is_verified_first_party ? (e, t) => {
                                    T(t);
                                    let {
                                        blob: r,
                                        name: n
                                    } = m.object({
                                        blob: m.instanceof(Blob),
                                        name: m.string()
                                    }).parse(e);
                                    (0, en.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    T(t);
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
                                    T();
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
                                files: null != p && null != A ? (a = {
                                    appUri: n.request.appUri,
                                    accountId: p,
                                    userId: A,
                                    assertActive: n.mcpAppHostAdapter.assertActive
                                }, E = t => {
                                    if (t.throwIfAborted(), a.assertActive?.(), e.get(G.e) !== a.accountId || e.get(G.j) !== a.userId) throw Error("The widget account has changed")
                                }, d = {
                                    additionalHeaders: {
                                        "ChatGPT-Account-ID": a.accountId
                                    },
                                    expectedIdentity: {
                                        accountId: a.accountId,
                                        userId: a.userId
                                    }
                                }, {
                                    async uploadFile(e, t, r) {
                                        E(r);
                                        let n = m.instanceof(File).parse(e),
                                            i = m.object({
                                                library: m.boolean().optional()
                                            }).optional().parse(t),
                                            o = new FormData;
                                        o.append("app_uri", a.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), i?.library && o.append("store_in_library", "true"), E(r);
                                        let _ = await eu.Request.safePost("/ecosystem/upload_widget_file", {
                                            ...d,
                                            requestBody: o,
                                            signal: r
                                        });
                                        return E(r), {
                                            fileId: _.file_id
                                        }
                                    },
                                    async getFileDownloadUrl(e, t) {
                                        E(t);
                                        let r = await eu.Request.safePost("/ecosystem/file_download_url", {
                                            ...d,
                                            requestBody: {
                                                app_uri: a.appUri,
                                                file_id: em.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return E(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        E(t);
                                        let r = await eu.Request.safePost("/ecosystem/file_metadata", {
                                            ...d,
                                            requestBody: {
                                                app_uri: a.appUri,
                                                file_id: em.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return E(t), {
                                            fileName: r.file_name ?? null,
                                            mimeType: r.mime_type ?? null
                                        }
                                    },
                                    async selectFiles(t) {
                                        E(t);
                                        let n = e.get(j.e);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(ei.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: i
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                        E(t);
                                        let o = await i(e, t);
                                        if (E(t), 0 === o.length) return [];
                                        let _ = await Promise.all(o.map(async e => {
                                            E(t);
                                            let r = null == (0, eh.a)(e.id) ? e : await (0, eD.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: d.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,eg.d)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return E(t), await eu.Request.safePost("/ecosystem/file_authorize_app", {
                                            ...d,
                                            requestBody: {
                                                file_ids: _.map(e => e.fileId),
                                                authorized_app_uri: a.appUri
                                            },
                                            signal: t
                                        }), E(t), _
                                    }
                                }) : void 0,
                                share: "u" > typeof navigator && "function" == typeof navigator.share ? async (e, t) => {
                                    T(t), await navigator.share(m.object({
                                        title: m.string().optional(),
                                        text: m.string().optional(),
                                        url: m.string().optional(),
                                        files: m.array(m.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == u ? void 0 : async (r, n) => {
                                    T(n);
                                    let i = await (0, ee.requestMcpConnectSheet)(e, {
                                        connectorId: u,
                                        hostId: t,
                                        payload: r,
                                        signal: n,
                                        beforeConnect: async () => (T(n), !0)
                                    });
                                    return T(n), i
                                },
                                requestLinkToConnector: async (r, n) => {
                                    T(n);
                                    let i = await (0, ee.requestMcpConnectSheet)(e, {
                                        connectorId: m.object({
                                            connectorId: m.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (T(n), !0)
                                    });
                                    return T(n), i
                                }
                            }
                        }(tA, eZ, n, async (e, t) => {
                            let r = tA.get(Y.x, n.request.chatGptThreadId);
                            if ("tpp" !== r && "flora" !== r) return !1;
                            let i = await a();
                            return t.throwIfAborted(), i(tA, {
                                recipient: ti,
                                WidgetContent: eV,
                                conversationId: eB,
                                hostId: eZ,
                                result: n,
                                mcpAppId: e5,
                                href: e,
                                signal: t
                            })
                        }, "tpp" === s || "flora" === s),
                        openFile: tf && !ta && null != n.request.sourceMessageId ? (e, t) => z(tA, n, e, t) : null,
                        presentation: {
                            isSidebarOpen: null != tF,
                            requestFocusedObject: !0 !== n.widget.is_verified_first_party || ta || null != n.mcpAppHostAdapter.displayMode ? void 0 : async (e, t) => {
                                let {
                                    openEcosystemWidgetFocusedObject: r
                                } = await ek();
                                t.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), r(tA, {
                                    recipient: ti,
                                    WidgetContent: eV,
                                    WidgetDialog: eW,
                                    id: tv,
                                    conversationId: eB,
                                    hostId: eZ,
                                    result: n,
                                    payload: e,
                                    signal: t
                                })
                            },
                            requestCloseFocusedObject: !0 === n.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), null != n.mcpAppHostAdapter.displayMode && "fullscreen" !== n.mcpAppHostAdapter.displayMode) return void await n.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: t
                                } = await ek();
                                e.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), t(tA, tv)
                            } : void 0
                        },
                        requestModal: async (e, t) => {
                            let {
                                requestEcosystemWidgetModal: r
                            } = await eY();
                            t.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), await r(tA, {
                                recipient: ti,
                                WidgetDialog: eW,
                                conversationId: eB,
                                hostId: eZ,
                                result: n,
                                payload: e,
                                signal: t
                            })
                        },
                        finance: tW === D.a ? (t = `${th}${tD}${tm}`, {
                            requestModal: null == tg || 0 === tg.length ? void 0 : async (e, r) => {
                                if (r.aborted || tA.get(G.e) !== tg) return !1;
                                let {
                                    params: n
                                } = y.parse(e), {
                                    openPersonalFinanceAccountLinking: i
                                } = await (0, f.a)();
                                return !r.aborted && tA.get(G.e) === tg && await i(tA, {
                                    accountId: tg,
                                    initialTab: n.initialTab,
                                    returnTo: t,
                                    signal: r
                                }) && !r.aborted && tA.get(G.e) === tg
                            },
                            sendInstrument: e => (0, R.a)(tA, e)
                        }) : void 0
                    }
                }
            }, ej[46] = tg, ej[47] = tf, ej[48] = tW, ej[49] = eB, ej[50] = e3, ej[51] = tP, ej[52] = tF, ej[53] = tv, ej[54] = tm, ej[55] = te, ej[56] = eZ, ej[57] = ta, ej[58] = tG, ej[59] = e5, ej[60] = th, ej[61] = tp, ej[62] = ti, ej[63] = tA, ej[64] = tD, ej[65] = Q) : Q = ej[65];
            let tV = Q;
            ej[66] !== e3 || ej[67] !== tI || ej[68] !== tA.query ? (Z = null == tI ? void 0 : async () => {
                let e = await tA.query.fetch(W.a, tI);
                return {
                    resource: (0, S.b)({
                        ...e3,
                        ...e
                    }),
                    resourceIdentity: e.resourceIdentity
                }
            }, ej[66] = e3, ej[67] = tI, ej[68] = tA.query, ej[69] = Z) : Z = ej[69];
            let tY = Z,
                tq = ta && "isolate";
            ej[70] !== tq ? (eo = (0, o.b)("relative h-full min-h-0", tq), ej[70] = tq, ej[71] = eo) : eo = ej[71], ej[72] !== tc || ej[73] !== tU ? (e_ = tc ? (0, n.jsx)(C.e, {
                className: "sr-only",
                children: tU
            }) : null, ej[72] = tc, ej[73] = tU, ej[74] = e_) : e_ = ej[74], ej[75] !== e5 ? (es = (0, n.jsx)(F.a, {
                isInlineRequested: !0,
                mcpAppId: e5
            }), ej[75] = e5, ej[76] = es) : es = ej[76], ej[77] !== ts ? (el = ts ? {
                source: "global"
            } : {}, ej[77] = ts, ej[78] = el) : el = ej[78], ej[79] !== tC.analyticsContext || ej[80] !== el ? (eE = {
                ...tC.analyticsContext,
                ...el
            }, ej[79] = tC.analyticsContext, ej[80] = el, ej[81] = eE) : eE = ej[81], ej[82] !== eB || ej[83] !== eZ || ej[84] !== eK || ej[85] !== ti || ej[86] !== tC.request.chatGptThreadId || ej[87] !== tA ? (ec = () => null != eK ? eK : ti?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: ti.get(Y.x, ti.value.conversationId)
            } : null != tC.request.chatGptThreadId || eB.startsWith("chatgpt:") || (0, V.e)(eB) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tA.get(I.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: eZ
            }, ej[82] = eB, ej[83] = eZ, ej[84] = eK, ej[85] = ti, ej[86] = tC.request.chatGptThreadId, ej[87] = tA, ej[88] = ec) : ec = ej[88];
            let tx = tC.preferredModelDisplayMode,
                tk = tC.resourceIdentity,
                tj = tC.widgetStatePersistence,
                tM = !0 === tC.widget.is_verified_first_party,
                tK = tp ? null : tC.request.template;
            ej[89] !== tH.connectorId || ej[90] !== tH.kind || ej[91] !== tH.targetId || ej[92] !== tp || ej[93] !== tC.request.toolName ? (eT = tp || "connector" !== tH.kind ? void 0 : {
                connectorId: tH.connectorId,
                linkId: tH.targetId,
                resourceUri: null,
                appName: null,
                actionName: tC.request.toolName
            }, ej[89] = tH.connectorId, ej[90] = tH.kind, ej[91] = tH.targetId, ej[92] = tp, ej[93] = tC.request.toolName, ej[94] = eT) : eT = ej[94], ej[95] !== tC.request.toolName || ej[96] !== tM || ej[97] !== tK || ej[98] !== eT ? (eA = {
                widgetSource: "hosted",
                isVerifiedFirstParty: tM,
                originResourceUri: tK,
                originTool: tC.request.toolName,
                appContext: eT
            }, ej[95] = tC.request.toolName, ej[96] = tM, ej[97] = tK, ej[98] = eT, ej[99] = eA) : eA = ej[99];
            let tB = tC.mcpAppHostAdapter,
                t$ = tW === D.a ? tg ?? void 0 : void 0,
                tz = ta ? eq : eJ,
                tQ = ty.appIcon,
                tZ = tC.request.toolInput,
                tX = tC.toolResult;
            return ej[100] !== tC.toolResult ? (eI = function(e) {
                let t, r = e._meta,
                    n = e;
                for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                    let e = (0, eb.o)(t);
                    if (!Array.isArray(e?.content) && e?.structuredContent === void 0) continue;
                    let r = (0, eH.a)(t, {
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
            }(tC.toolResult), ej[100] = tC.toolResult, ej[101] = eI) : eI = ej[101], ej[102] !== eB || ej[103] !== e$ || ej[104] !== t_ || ej[105] !== tV || ej[106] !== ts || ej[107] !== tE || ej[108] !== eZ || ej[109] !== tl || ej[110] !== to || ej[111] !== td || ej[112] !== ez || ej[113] !== e0 || ej[114] !== e5 || ej[115] !== tS || ej[116] !== eQ || ej[117] !== ti || ej[118] !== tY || ej[119] !== ty.appIcon || ej[120] !== tL || ej[121] !== tC.mcpAppHostAdapter || ej[122] !== tC.preferredModelDisplayMode || ej[123] !== tC.request.toolInput || ej[124] !== tC.request.viewParams || ej[125] !== tC.resourceIdentity || ej[126] !== tC.toolResult || ej[127] !== tC.widgetStatePersistence || ej[128] !== eE || ej[129] !== ec || ej[130] !== eA || ej[131] !== t$ || ej[132] !== tz || ej[133] !== eI || ej[134] !== tU ? (eC = (0, n.jsx)(F.c, {
                analyticsContext: eE,
                getNewThreadDestination: ec,
                resource: tL,
                legacyPreferredDisplayMode: tx,
                hostDisplayModes: tE,
                recipient: ti,
                conversationId: eB,
                deepLink: e$,
                pluginId: eQ,
                fullSurface: t_,
                hostScroll: tl,
                inheritHostBackground: td,
                hostId: eZ,
                hostedInThreadScrollLayout: to,
                lifetime: e0,
                resourceIdentity: tk,
                mcpAppId: e5,
                initialWidgetState: ez,
                widgetStatePersistence: tj,
                sourceName: tS,
                getResourceHost: tV,
                refetchResource: tY,
                mcpAppScope: eA,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tB,
                plaidAccountId: t$,
                Frame: tz,
                server: "codex_apps",
                appIcon: tQ,
                sidePanelTitle: tU,
                title: tU,
                globalSurface: ts,
                toolArguments: tZ,
                toolResult: tX,
                ...eI,
                viewParamsOverride: tC.request.viewParams
            }), ej[102] = eB, ej[103] = e$, ej[104] = t_, ej[105] = tV, ej[106] = ts, ej[107] = tE, ej[108] = eZ, ej[109] = tl, ej[110] = to, ej[111] = td, ej[112] = ez, ej[113] = e0, ej[114] = e5, ej[115] = tS, ej[116] = eQ, ej[117] = ti, ej[118] = tY, ej[119] = ty.appIcon, ej[120] = tL, ej[121] = tC.mcpAppHostAdapter, ej[122] = tC.preferredModelDisplayMode, ej[123] = tC.request.toolInput, ej[124] = tC.request.viewParams, ej[125] = tC.resourceIdentity, ej[126] = tC.toolResult, ej[127] = tC.widgetStatePersistence, ej[128] = eE, ej[129] = ec, ej[130] = eA, ej[131] = t$, ej[132] = tz, ej[133] = eI, ej[134] = tU, ej[135] = eC) : eC = ej[135], ej[136] !== tO || ej[137] !== t_ || ej[138] !== e5 || ej[139] !== tw || ej[140] !== tA || ej[141] !== tu || ej[142] !== tU ? (eP = !t_ && tu ? (0, n.jsx)("div", {
                className: "flex items-center",
                children: "launcher" !== tw || tO.isOpen ? (0, n.jsx)(w.a, {
                    disabled: !1,
                    mcpAppId: e5
                }) : (0, n.jsx)(N.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: () => (0, v.x)(tA, e5),
                    children: (0, n.jsx)(d.a, {
                        id: "chatgpt.widget.open",
                        defaultMessage: "Open {name}",
                        description: "Reopen a closed embedded app",
                        values: {
                            name: tU
                        }
                    })
                })
            }) : null, ej[136] = tO, ej[137] = t_, ej[138] = e5, ej[139] = tw, ej[140] = tA, ej[141] = tu, ej[142] = tU, ej[143] = eP) : eP = ej[143], ej[144] !== t_ || ej[145] !== tE || ej[146] !== tl || ej[147] !== e5 || ej[148] !== tS || ej[149] !== tw || ej[150] !== tL || ej[151] !== tT ? (eS = (0, n.jsx)(O.a, {
                showLoadingStatus: tT,
                hostDisplayModes: tE,
                resource: tL,
                fullSurface: t_,
                hostScroll: tl,
                mcpAppId: e5,
                pluginName: tS,
                presentation: tw
            }), ej[144] = t_, ej[145] = tE, ej[146] = tl, ej[147] = e5, ej[148] = tS, ej[149] = tw, ej[150] = tL, ej[151] = tT, ej[152] = eS) : eS = ej[152], ej[153] !== eo || ej[154] !== e_ || ej[155] !== es || ej[156] !== eC || ej[157] !== eP || ej[158] !== eS ? (eU = (0, n.jsxs)("div", {
                ref: L.a,
                className: eo,
                "data-mcp-app-portal-target": "true",
                children: [e_, es, eC, eP, eS]
            }), ej[153] = eo, ej[154] = e_, ej[155] = es, ej[156] = eC, ej[157] = eP, ej[158] = eS, ej[159] = eU) : eU = ej[159], eU
        }
        async function eY() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(117976)]).then(r.bind(r, "IQhm"))
        }

        function eq(e) {
            let t, r = (0, i.c)(2),
                {
                    sessionId: a
                } = e;
            return r[0] !== a ? (t = (0, n.jsx)(P.a, {
                allowGlobalHost: !1,
                sessionId: a
            }), r[0] = a, r[1] = t) : t = r[1], t
        }
        let ex = (0, c.f)({
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
        async function ek() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(579403)]).then(r.bind(r, "Ia2H"))
        }
    }),
    HUQj: (function(e, t, r) {
        var n = r("ABep"),
            i = r("QosV"),
            a = r("oyxz"),
            o = r("zKCW"),
            _ = r("T8YV");

        function s(e) {
            let t, r = (0, i.c)(1);
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                content: (0, n.jsx)(a.a, {
                    ..._.b.notice
                }),
                role: "alert",
                variant: "callout"
            }), r[0] = t) : t = r[0], t
        }
        r.d(t, {
            a: () => s
        })
    }),
    Igop: (function(e, t, r) {
        var n = r("ASxG"),
            i = r("Sbyb"),
            a = r("SGsN"),
            o = r("svjy"),
            _ = r("eShZ"),
            s = r("T8YV");
        let l = n.object({
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
        async function E(e, t, r, n, E, d, c, u, T) {
            let p;
            if (null == d) throw Error("Widget requests require an active frame");
            let A = () => {
                    let t = e.get(o.a).formatMessage(s.b.notice);
                    return e.get(a.f).danger(t, {
                        id: s.a,
                        errorAnalytics: {
                            toastId: "ecosystem.widget.networkDenied"
                        }
                    }), t
                },
                I = () => ({
                    isError: !0,
                    content: [{
                        type: "text",
                        text: A()
                    }],
                    structuredContent: {
                        error_code: s.a
                    },
                    _meta: {
                        "openai/tool_error_kind": s.a
                    }
                }),
                N = async e => {
                    let t;
                    c(d);
                    try {
                        t = await r.handleRequest(e, d, u, T)
                    } catch (t) {
                        if (c(d), !(0, s.d)(t)) throw t;
                        if ("tools/call" === e.method) return I();
                        throw new _.a(A(), 403, s.a)
                    }
                    return (c(d), "tools/call" === e.method && !0 === t.isError && t._meta?.["openai/tool_error_kind"] === s.a) ? I() : t
                }, C = await N(E);
            if (null != r.olympic || "tools/call" !== E.method || "string" != typeof E.params?.name) return C;
            let g = l.safeParse(C);
            if (!g.success || "connector" !== n.identity.kind) return C;
            let h = g.data._meta["openai/connector_auth"],
                D = n.identity,
                m = E.params.name.startsWith("/") ? E.params.name.split("/").filter(Boolean) : [E.params.name],
                G = m.at(-1),
                f = E.params._meta,
                R = D.targetId ?? f?.["openai/link_id"] ?? (3 === m.length ? m[1] : void 0);
            if (null == G || 0 === G.length || m.length > 3 || h.connector_id !== D.connectorId || f?.["openai/connector_id"] != null && f["openai/connector_id"] !== h.connector_id || f?.["openai/action_name"] != null && f["openai/action_name"] !== G || null != R && R !== h.link_id) return C;
            try {
                p = await (0, i.requestMcpConnectSheet)(e, {
                    connectorId: h.connector_id,
                    hostId: t,
                    signal: d,
                    payload: {
                        requireAuth: !0,
                        reauthLinkId: h.link_id ?? void 0,
                        authReason: h.auth_reason ?? "missing_link",
                        requestedScopes: h.requested_scopes ?? void 0
                    },
                    beforeConnect: async () => (c(d), !0)
                })
            } catch {
                return c(d), C
            }
            return (c(d), p.didConnect && p.linkId && (null == h.link_id || p.linkId === h.link_id)) ? N({
                ...E,
                params: {
                    ...E.params,
                    name: G,
                    _meta: {
                        ...E.params._meta,
                        "openai/connector_id": h.connector_id,
                        "openai/action_name": G,
                        "openai/link_id": p.linkId
                    }
                }
            }) : C
        }
        r.d(t, {
            a: () => E
        })
    }),
    VV1g: (function(e, t, r) {
        var n = r("ASxG");
        let i = n.object({
            href: n.string().refine(a)
        });

        function a(e) {
            return /^mcp-citation:/iu.test(e.trimStart()) || URL.parse(e)?.protocol === "mcp-citation:"
        }

        function o(e) {
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
            a: () => a,
            c: () => o
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

        function a(e) {
            let t = s(e ?? void 0);
            if (t && n.has(t.url.protocol) && !t.url.hostname.includes("*")) return t.url.toString();
            if (!e) return null;
            let r = l(e);
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

        function o(e, t, r) {
            let n = [];
            t?.connectDomains?.length && n.push(...t.connectDomains);
            let i = r?.trim();
            return i && n.push(i), _(e, n)
        }

        function _(e, t) {
            if (!e) return !1;
            let r = s(e);
            if (!r) return !1;
            let n = r.url;
            return !n.username && !n.password && !!t?.length && t.some(e => {
                let t = l(e);
                if (!t) return !1;
                if ("scheme" === t.kind) return n.protocol === t.scheme;
                if (t.scheme) {
                    var r, a;
                    return n.protocol === t.scheme && (r = n.hostname, a = t.host, t.wildcard ? !!d(r, a) : E(r) === E(a)) && !! function(e, t) {
                        if ("*" === t.port) return !0;
                        let r = e.port ? Number(e.port) : i[e.protocol] ?? null;
                        return t.portExplicit ? "number" == typeof t.port && r === t.port : r === (i[e.protocol] ?? null)
                    }(n, t)
                }
                return !!d(n.hostname, t.host)
            })
        }

        function s(e) {
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

        function l(e) {
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
            let a = i[1] ? `${i[1].toLowerCase()}:` : void 0,
                o = i[2],
                _ = i[3] ?? null,
                s = i[4] ?? null,
                l = o.startsWith("*."),
                E = (l ? o.slice(2) : o).toLowerCase().replace(/\.$/, ""),
                d = null,
                c = !1;
            return null != _ && (c = !0, "*" !== (d = "*" === _ ? "*" : Number(_)) && (!Number.isFinite(d) || d < 0)) ? null : {
                kind: "host",
                scheme: a,
                host: E,
                wildcard: l,
                portExplicit: c,
                port: d,
                path: s
            }
        }

        function E(e) {
            return e.toLowerCase().replace(/\.$/, "")
        }

        function d(e, t) {
            let r = E(e),
                n = E(t);
            return r === n || r.endsWith("." + n)
        }
        r.d(t, {
            a: () => a,
            b: () => _,
            c: () => o
        })
    }),
    XCEe: (function(e, t, r) {
        function n() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(130090), r.e(635076), r.e(704712), r.e(915686), r.e(15909)]).then(r.bind(r, "o7G9"))
        }
        r.d(t, {
            a: () => n
        })
    }),
    FNWO: (function(e, t, r) {
        var n = r("RjXy"),
            i = r("ASxG"),
            a = r("PFjh"),
            o = r("yGJW"),
            _ = r("PeqE");
        let s = {
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
            l = i.object({
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
            E = {
                label: i.string().startsWith("ledger."),
                tags: i.array(i.object({
                    key: i.string(),
                    value: i.string()
                })).optional()
            },
            d = i.discriminatedUnion("type", [i.object({
                type: i.literal("event"),
                label: E.label,
                payload: l.optional().catch(void 0)
            }), i.object({
                type: i.literal("count"),
                ...E,
                count: i.number().optional()
            }), i.object({
                type: i.literal("hist"),
                ...E,
                value: i.number()
            }), i.object({
                type: i.literal("error")
            })]);

        function c(e, t) {
            let r = d.safeParse(t);
            if (!r.success) return;
            let i = r.data;
            if ("event" === i.type) {
                let t = s[i.label];
                if (null == t) return;
                (0, o.a)(e, n.c, {
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
            let l = {
                    ..."tags" in i ? Object.fromEntries(i.tags?.map(e => {
                        let {
                            key: t,
                            value: r
                        } = e;
                        return [t, r]
                    }) ?? []) : {},
                    attribution_id: _.a,
                    name: "ledger",
                    client_type: "chatgpt-web"
                },
                E = e.get(a.a);
            switch (i.type) {
                case "count":
                    E.count("ecosystem", i.label, l, i.count);
                    break;
                case "hist":
                    E.hist("ecosystem", i.label, l, i.value);
                    break;
                case "error":
                    E.count("ecosystem", "app.error", l)
            }
        }
        r.d(t, {
            a: () => c
        })
    }),
    DSZZ: (function(e, t, r) {
        var n = r("iTtm"),
            i = r("o0PZ"),
            a = r("Cslg"),
            o = r("nlNF"),
            _ = r("OWtl"),
            s = r("ADAj");
        let l = (0, n.u)(_.a, () => null);

        function E(e, t) {
            let r = e.get(a.e),
                n = e.get(a.i),
                _ = e.get(o.d);
            return null != r && null != n && (0, s.b)(e.get, i.of.showEducationalTips) ? () => {
                r === e.get(a.e) && n === e.get(a.i) && _ === e.get(o.d) && e.set(l, {
                    accountId: r,
                    conversationId: t,
                    navigationVisit: _,
                    userId: n
                })
            } : null
        }
        r.d(t, {
            b: () => E
        }, {
            a: l
        })
    }),
    RjXy: (function(e, t, r) {
        var n, i = ((n = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", n.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", n.UNRECOGNIZED = "UNRECOGNIZED", n);
        r.d(t, {
            d: () => i
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentInteraction"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceConnectFlowStep"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceLedgerWidgetEvent"
            },
            e: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceClosed"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceViewed"
            }
        })
    })
};