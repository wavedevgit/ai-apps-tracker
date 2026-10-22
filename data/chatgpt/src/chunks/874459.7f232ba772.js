export const __rspack_esm_id = 874459;
export const __rspack_esm_ids = [874459];
export const __webpack_modules__ = {
    Q5J: (function(e, t, r) {
        var n = r("JX");

        function i(e) {
            return null != e && "widget" in e
        }

        function a(e) {
            let {
                csp: t,
                height_hint: r,
                html: i,
                prefers_border: a
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
                        "openai/widgetMinFrameHeight": o(e),
                        "openai/widgetDomain": e.widget.domain ?? void 0,
                        "openai/widgetPrefersBorder": a ?? !1
                    },
                    mimeType: "text/html+skybridge",
                    text: i,
                    uri: e.request.template
                }]
            }, l = (0, n.b)(s);
            if (l?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
            let d = e.widget.inline_frame_padding;
            return {
                ...l,
                inlineFramePadding: null == d ? void 0 : {
                    blockStart: d.block_start,
                    blockEnd: d.block_end,
                    inlineStart: d.inline_start,
                    inlineEnd: d.inline_end
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
    SoU: (function(e, t, r) {
        var n = r("D7"),
            i = r("SZ"),
            a = r.n(i),
            o = r("Xnl"),
            s = r("qx5"),
            l = r("ALW"),
            d = r("kl"),
            c = r("Mwp"),
            u = r("Q5J");
        let p = (0, o.d)(d.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: i
                } = t, a = i(l.j, r), o = a?.sessionId == null ? null : a.content, s = o?.resource;
                return null != n && null != o && (0, u.c)(s) && s.resourceKey === n ? s.widget : null
            }),
            _ = (0, o.d)(d.a, (e, t) => {
                let {
                    get: r
                } = t, i = r(c.a, e), a = null == i.data ? r(l.j, e.mcpAppId) : null, o = a?.content, d = o?.resource, p = a?.sessionId != null && null != o && (0, u.c)(d) && null != d.resourceKey && null != d.resourceQuery && (0, n.f)([d.resourceQuery]) === (0, n.f)([e]) && "current" === r(s.d, o.resourceIdentity) ? {
                    widget: d.widget,
                    resourceKey: d.resourceKey,
                    resourceIdentity: o.resourceIdentity
                } : void 0, _ = i.data ?? p;
                return {
                    ...i,
                    data: null == _ ? void 0 : {
                        ..._,
                        resourceQuery: e
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: a()
            });
        r.d(t, {}, {
            a: p,
            b: _
        })
    }),
    OMc: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => eF,
            EcosystemWidgetDialog: () => eH,
            a: () => eW
        });
        var n = r("A"),
            i = r("Qo");
        async function a() {
            return (await r.e(174104).then(r.bind(r, "Wfn"))).openWidgetSource
        }
        var o = r("on"),
            s = r("Xnl"),
            l = r("aM"),
            d = r("zd"),
            c = r("Wf"),
            u = r("oy"),
            p = r("Qg"),
            _ = r("HZ"),
            E = r("ZU2"),
            g = r("uUH"),
            h = r("EO"),
            m = r("kph"),
            f = r("ygO"),
            T = r("JN"),
            I = r("RN"),
            y = r("SGs"),
            A = r("Pe"),
            w = r("AS"),
            C = r("Csl"),
            N = r("XC"),
            v = r("FNW");
        let b = w.strictObject({
            title: w.string().optional(),
            params: w.strictObject({
                view: w.literal("accountLinking"),
                initialTab: w.enum(["accounts", "creditScore", "realEstate"]).optional()
            })
        });
        var D = r("iW"),
            R = r("O2"),
            G = r("tb"),
            P = r("AHn"),
            L = r("ALW"),
            S = r("ze4"),
            q = r("Sd"),
            O = r("tSE"),
            H = r("Mwp"),
            x = r("Q5J"),
            k = r("SoU"),
            F = r("OOa"),
            U = r("Mr"),
            W = r("kS"),
            j = r("P9"),
            M = r("OW"),
            V = r("OM"),
            Y = r("bn"),
            K = r("rxj"),
            $ = r("IDH");
        let B = (0, s.d)(M.a, (e, t) => {
            let {
                get: r
            } = t, n = r(C.l);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r(V.c, "3080374709") || null == e || null == r(U.j, e) || null != r(U.W, e)) return !1;
            let i = r(U.x, e);
            return ("tpp" === i || "flora" === i) && !r(K.d, e)
        });
        async function z(e, t, n, i) {
            let {
                chatGptThreadId: a,
                sourceMessageId: o
            } = t.request;
            if (!o) throw (0, j.a)("File opening requires a source message", W.q.MethodNotFound);
            let s = e.get(U.j, a),
                {
                    accountId: l,
                    userId: d
                } = t.resourceIdentity.identity,
                c = e => e.get(O.h) || !e.get(B, a) || e.get(C.e) !== l || e.get(C.j) !== d || e.get(U.j, a) !== s,
                u = () => {
                    if (i.throwIfAborted(), null == s || c(e)) throw (0, j.a)("File opening is unavailable for this widget", W.q.MethodNotFound)
                };
            if (u(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, j.a)("Cannot open this file path", W.q.InvalidParams);
            let p = e.get(U.O, a),
                _ = (0, $.a)(e, a, {
                    type: "sandbox",
                    messageId: o,
                    sandboxPath: n
                }),
                {
                    canOpenChatGptFilePreview: E,
                    openChatGptFile: g
                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913), r.e(8854)]).then(r.bind(r, "Xk"));
            if (u(), !E({
                    browserPreview: !0
                })) throw (0, j.a)("File previews are unavailable in this host", W.q.MethodNotFound);
            try {
                await g(e, {
                    conversationId: s,
                    fileName: (0, Y.k)(n),
                    gizmoId: p,
                    target: _,
                    tabKey: `${o}:${n}`,
                    browserPreview: !0,
                    downloadFallback: !1,
                    isAccessBlocked: c,
                    signal: i
                })
            } catch {
                throw u(), (0, j.a)("Unable to open file", W.q.InternalError)
            }
            u()
        }
        var Q = r("T8Y"),
            X = r("HUQ"),
            Z = r("z8Z"),
            J = r("qx5"),
            ee = r("Sby"),
            et = r("jEN"),
            er = r("JY"),
            en = r("rip"),
            ei = r("g2"),
            ea = r("sWz"),
            eo = r("e0C"),
            es = r("g25"),
            el = r("Ot7"),
            ed = r("X6V"),
            ec = r("vgf"),
            eu = r("yG"),
            ep = r("yI"),
            e_ = r("Kwu"),
            eE = r("VV1"),
            eg = r("aRhc");
        let eh = "redirectUrl",
            em = w.object({
                href: w.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: w.union([w.string(), w.boolean()]).optional(),
                openMode: w.enum(["tab", "popup"]).optional()
            });
        async function ef(e, t, r, n, i, a) {
            i(n);
            let o = eE.b.safeParse(r);
            if (o.success) return !0 === t.widget.is_verified_first_party && (await a?.(o.data.href, n), i(n)), !0;
            let {
                href: s,
                redirectUrl: l,
                openMode: d
            } = em.parse(r);
            if (/^data:/i.test(s)) {
                if (s.length > 0x1000000) throw Error("CSV export is too large");
                let r = s.indexOf(","),
                    a = decodeURIComponent(s.slice(r + 1)),
                    o = new Blob([/;base64$/i.test(s.slice(0, r)) ? (0, ep.a)(a) : a], {
                        type: "text/csv;charset=utf-8"
                    });
                if (o.size > 8388608) throw Error("CSV export is too large");
                return eT(e, t, "data:text/csv", "tab"), (0, ed.f)(e, es.ExternalLinkConfirmationDialog, {
                    href: s,
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
            if (null == d && t.mcpAppHostAdapter.onOpenLink?.(s)) return !0;
            if (/^codex(?:-dev)?:/.test(s)) return !1;
            let c = !0 === t.widget.is_verified_first_party;
            if (c && null == d && await a?.(s, n)) return !0;
            i(n);
            let u = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                p = (0, eg.c)(s, {
                    connectDomains: t.widget.csp?.connect_domains
                }, t.widget.domain) || (0, eg.b)(s, u),
                _ = !/^https?:/.test(s);
            if (_ && !p) throw Error("The app has not declared this external protocol");
            let E = new URL(s),
                g = !_ && E.origin === window.location.origin;
            E.search = "", E.hash = "";
            let h = e.get(U.j, t.request.chatGptThreadId ?? null);
            eT(e, t, E.href, d);
            let m = s;
            p && !g && !1 !== l && (null != h || null == t.request.chatGptThreadId) && (m = function(e, t) {
                let r;
                if (!t) return e;
                let n = e.startsWith("http://") || e.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(e);
                try {
                    r = new URL(e)
                } catch {
                    return e
                }
                return !n || r.searchParams.get(eh) ? e : (r.searchParams.set(eh, t), r.toString())
            }(s, null == h ? window.location.href : new URL(`/c/${encodeURIComponent(h)}`, window.location.origin).href));
            let f = g || p;
            if (!f && c) try {
                f = (await e_.Request.safePost("/ecosystem/url_safe", {
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
            let T = "Apple Computer, Inc." === navigator.vendor,
                I = () => {
                    try {
                        i(n)
                    } catch {
                        return
                    }
                    _ ? window.open(m, "_blank", "noopener,noreferrer") : c && "popup" === d && f && !T ? (0, ec.a)(e, m) : (0, el.f)({
                        href: m,
                        initiator: "mcp_app_resource"
                    })
                };
            return !f || T || _ ? (0, ed.f)(e, es.ExternalLinkConfirmationDialog, {
                href: m,
                initiator: "mcp_app_resource",
                showCopyLink: !f,
                signal: n,
                onOpen: I
            }) : I(), !0
        }

        function eT(e, t, r, n) {
            let i = !0 === t.widget.is_verified_first_party,
                a = e.get(U.j, t.request.chatGptThreadId ?? null);
            (0, eu.a)(e, eo.g, {
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
        var eI = r("iq"),
            ey = r("UxL"),
            eA = r("vvm");
        let ew = w.object({
            fileId: w.string().min(1)
        });
        var eC = r("uzD"),
            eN = r("r3Z"),
            ev = r("PFj"),
            eb = r("hk");
        let eD = {
                label: w.string(),
                tags: w.array(w.object({
                    key: w.string(),
                    value: w.string()
                })).optional()
            },
            eR = w.discriminatedUnion("type", [w.object({
                type: w.literal("event"),
                label: w.string(),
                payload: w.record(w.string(), w.json()).optional()
            }), w.object({
                type: w.literal("interaction"),
                ...eD
            }), w.object({
                type: w.literal("count"),
                ...eD,
                count: w.number().optional()
            }), w.object({
                type: w.literal("hist"),
                ...eD,
                value: w.number()
            }), w.object({
                type: w.literal("error")
            })]);
        var eG = r("Igo"),
            eP = r("DS");
        let eL = "openai/deep-research/report-copy",
            eS = w.discriminatedUnion("phase", [w.strictObject({
                phase: w.literal("start"),
                id: w.uuid(),
                length: w.number().int().nonnegative()
            }), w.strictObject({
                phase: w.literal("finish"),
                id: w.uuid(),
                success: w.boolean()
            })]);
        var eq = r("Au"),
            eO = r("cDR");

        function eH(e) {
            let t, r = (0, i.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(ex, {
                ...e
            }) : (0, n.jsx)(ek, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function ex(e) {
            let t, r = (0, i.c)(3),
                a = (0, s.z)(q.a);
            return r[0] !== e || r[1] !== a ? (t = (0, n.jsx)(ek, {
                ...e,
                recipient: a
            }), r[0] = e, r[1] = a, r[2] = t) : t = r[2], t
        }

        function ek(e) {
            let t, r, a, o, p, _, E, g, h, m, f, A, w, C, N = (0, i.c)(61),
                {
                    recipient: v,
                    conversationId: b,
                    hostId: D,
                    mcpAppId: R,
                    onClose: G,
                    state: P,
                    heightHint: S,
                    widthHint: q,
                    allowsInteractiveDismissal: H
                } = e,
                x = void 0 === v ? null : v,
                k = (0, s.z)(O.a),
                F = (0, c.a)();
            N[0] !== R ? (t = () => R ?? (0, l.pf)(), N[0] = R, N[1] = t) : t = N[1];
            let [U] = (0, d.useState)(t), W = "ready" === P.kind && "modal" === P.result.request.mode ? Math.max(S ?? P.result.widget.height_hint ?? 0, 0) || void 0 : S, j = "ready" === P.kind ? P.result.tracking : P.tracking, M = "ready" === P.kind && "fullscreen" === P.result.request.mode, V = "loading" === P.kind && !0 === P.nonModal;
            N[2] !== G || N[3] !== j ? (r = () => {
                j?.close("user_dismissed"), G()
            }, N[2] = G, N[3] = j, N[4] = r) : r = N[4];
            let Y = (0, d.useEffectEvent)(r);
            N[5] !== H || N[6] !== Y || N[7] !== V || N[8] !== k ? (a = () => {
                if (V) return k.get(y.h).info((0, n.jsx)(u.a, {
                    ...ej.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(I.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === H ? void 0 : {
                        label: (0, n.jsx)(u.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel",
                            description: "Button to cancel opening an Apps SDK widget"
                        }),
                        onClick: () => Y()
                    }
                }).close
            }, N[5] = H, N[6] = Y, N[7] = V, N[8] = k, N[9] = a) : a = N[9], N[10] !== H || N[11] !== V || N[12] !== k ? (o = [k, V, H], N[10] = H, N[11] = V, N[12] = k, N[13] = o) : o = N[13], (0, d.useEffect)(a, o), N[14] !== M || N[15] !== G || N[16] !== j ? (p = () => {
                M && (j?.close("user_dismissed"), G())
            }, N[14] = M, N[15] = G, N[16] = j, N[17] = p) : p = N[17];
            let K = (0, d.useEffectEvent)(p);
            if (N[18] !== K || N[19] !== U || N[20] !== k || N[21] !== j ? (_ = () => {
                    let e = k.watch(e => {
                        let t = e.get(L.s, U);
                        null != t && e.get(L.r, t)?.isOpen === !1 ? K() : (e.get(L.v, U) && j?.renderReady(), null != e.get(L.q, U) && j?.error("widget_render"))
                    });
                    return () => {
                        e(), j?.close("navigation_changed")
                    }
                }, N[18] = K, N[19] = U, N[20] = k, N[21] = j, N[22] = _) : _ = N[22], N[23] !== U || N[24] !== k || N[25] !== j ? (E = [k, U, j], N[23] = U, N[24] = k, N[25] = j, N[26] = E) : E = N[26], (0, d.useEffect)(_, E), V) return null;
            if ("ready" === P.kind && M) {
                let e, t;
                return N[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], N[27] = e) : e = N[27], N[28] !== b || N[29] !== D || N[30] !== U || N[31] !== x || N[32] !== P.result ? (t = (0, n.jsx)(eF, {
                    recipient: x,
                    conversationId: b,
                    hostDisplayModes: e,
                    hostId: D,
                    lifetime: "component",
                    mcpAppId: U,
                    result: P.result,
                    showOpenButton: !1
                }), N[28] = b, N[29] = D, N[30] = U, N[31] = x, N[32] = P.result, N[33] = t) : t = N[33], t
            }
            let $ = !1 === H;
            return N[34] !== H ? (g = e => {
                !1 === H && e.preventDefault()
            }, N[34] = H, N[35] = g) : g = N[35], N[36] !== F ? (h = F.formatMessage(ej.appTitle), N[36] = F, N[37] = h) : h = N[37], N[38] !== W ? (m = null == W ? void 0 : {
                height: W
            }, N[38] = W, N[39] = m) : m = N[39], N[40] !== g || N[41] !== h || N[42] !== m ? (f = {
                onEscapeKeyDown: g,
                "aria-label": h,
                style: m
            }, N[40] = g, N[41] = h, N[42] = m, N[43] = f) : f = N[43], N[44] !== G || N[45] !== j ? (A = e => {
                e || (j?.close("user_dismissed"), G())
            }, N[44] = G, N[45] = j, N[46] = A) : A = N[46], N[47] !== b || N[48] !== D || N[49] !== U || N[50] !== x || N[51] !== P.error || N[52] !== P.kind || N[53] !== P.result ? (w = "loading" === P.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(u.a, {
                    ...ej.openingApp
                })
            }) : "error" === P.kind ? (0, n.jsx)("div", {
                className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                children: (0, Q.d)(P.error) ? (0, n.jsx)(X.a, {}) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(T.e, {
                        className: "text-lg font-medium",
                        children: (0, n.jsx)(u.a, {
                            ...ej.openAppError
                        })
                    }), (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(u.a, {
                            ...ej.openAppErrorDescription
                        })
                    })]
                })
            }) : (0, n.jsx)(eF, {
                recipient: x,
                conversationId: b,
                hostId: D,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: U,
                result: P.result
            }), N[47] = b, N[48] = D, N[49] = U, N[50] = x, N[51] = P.error, N[52] = P.kind, N[53] = P.result, N[54] = w) : w = N[54], N[55] !== f || N[56] !== A || N[57] !== w || N[58] !== $ || N[59] !== q ? (C = (0, n.jsx)(T.b, {
                shouldIgnoreClickOutside: $,
                contentProps: f,
                dialogCloseClassName: "z-10",
                onOpenChange: A,
                open: !0,
                size: "appLauncher",
                widthHint: q,
                children: w
            }), N[55] = f, N[56] = A, N[57] = w, N[58] = $, N[59] = q, N[60] = C) : C = N[60], C
        }

        function eF(e) {
            let t, l, p, I, D, q, W, j, M, Y, $, Q, X, eo, es, el, ed, ec, ep, eE, eh, em, eT, eD, ex, ek, eV = (0, i.c)(158),
                {
                    recipient: eY,
                    newThreadDestination: eK,
                    conversationId: e$,
                    deepLink: eB,
                    initialWidgetState: ez,
                    pluginId: eQ,
                    hostId: eX,
                    inDialog: eZ,
                    Frame: eJ,
                    lifetime: e0,
                    hostedInThreadScrollLayout: e1,
                    mcpAppId: e5,
                    result: e4,
                    fullSurface: e8,
                    globalSurface: e3,
                    hostScroll: e6,
                    hostDisplayModes: e7,
                    inheritHostBackground: e2,
                    showDialogTitle: e9,
                    heightHint: te,
                    showOpenButton: tt,
                    showLoadingStatus: tr
                } = e,
                tn = void 0 === eY ? null : eY,
                ti = void 0 !== eZ && eZ,
                ta = void 0 !== e1 && e1,
                to = void 0 === e8 ? ti : e8,
                ts = void 0 !== e3 && e3,
                tl = void 0 !== e6 && e6,
                td = void 0 === e7 ? L.e : e7,
                tc = void 0 !== e2 && e2,
                tu = void 0 === e9 ? ti : e9,
                tp = void 0 === tt || tt,
                t_ = void 0 === tr || tr,
                tE = (0, s.z)(O.a),
                tg = e4.resourceQuery;
            eV[0] !== e4.resourceKey || eV[1] !== e5 ? (t = {
                mcpAppId: e5,
                resourceKey: e4.resourceKey
            }, eV[0] = e4.resourceKey, eV[1] = e5, eV[2] = t) : t = eV[2];
            let th = (0, s.x)(k.a, t);
            eV[3] !== e4 || eV[4] !== th ? (l = null == th || th === e4.widget ? e4 : {
                ...e4,
                widget: th
            }, eV[3] = e4, eV[4] = th, eV[5] = l) : l = eV[5];
            let tm = l,
                {
                    accountId: tf
                } = (0, h.a)(),
                {
                    pathname: tT,
                    search: tI,
                    hash: ty
                } = (0, _.X)(),
                tA = (0, c.a)(),
                tw = (0, s.x)(B, tm.request.chatGptThreadId);
            eV[6] !== e$ || eV[7] !== eX || eV[8] !== tA || eV[9] !== tn || eV[10] !== tm || eV[11] !== tE ? (p = async (e, t) => {
                let r = tE.get(g.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == tm.modalOwner && r.hostId === eX && n.accountId === tm.resourceIdentity.identity.accountId && n.userId === tm.resourceIdentity.identity.userId && n.sourceAppUri === tm.request.appUri && n.sourceTemplate === tm.request.template && n.sourceMessageId === tm.request.sourceMessageId && n.sourceThreadId === tm.request.threadId && n.sourceConversationId === tE.get(U.j, tm.request.chatGptThreadId)) {
                    tE.set(g.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eU();
                        t.throwIfAborted(), await e(tE, {
                            recipient: tn,
                            conversationId: e$,
                            hostId: eX,
                            result: tm,
                            WidgetDialog: eH,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tE.get(y.h).danger(tA.formatMessage(ej.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, eV[6] = e$, eV[7] = eX, eV[8] = tA, eV[9] = tn, eV[10] = tm, eV[11] = tE, eV[12] = p) : p = eV[12];
            let tC = (0, d.useEffectEvent)(p);
            eV[13] !== ti || eV[14] !== tC || eV[15] !== tE ? (I = () => {
                if (ti) return;
                let e = new AbortController,
                    t = tE.watch(t => {
                        let {
                            get: r
                        } = t, n = r(g.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tC(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, eV[13] = ti, eV[14] = tC, eV[15] = tE, eV[16] = I) : I = eV[16], eV[17] !== ti || eV[18] !== tm.request.appUri || eV[19] !== tm.request.chatGptThreadId || eV[20] !== tm.request.sourceMessageId || eV[21] !== tm.request.template || eV[22] !== tE ? (D = [tE, ti, tm.request.appUri, tm.request.template, tm.request.sourceMessageId, tm.request.chatGptThreadId], eV[17] = ti, eV[18] = tm.request.appUri, eV[19] = tm.request.chatGptThreadId, eV[20] = tm.request.sourceMessageId, eV[21] = tm.request.template, eV[22] = tE, eV[23] = D) : D = eV[23], (0, d.useEffect)(I, D), eV[24] !== e4 ? (q = (0, x.b)(e4), eV[24] = e4, eV[25] = q) : q = eV[25];
            let tN = q,
                tv = tm.mcpAppHostAdapter.displayMode ?? (ti ? "inline" : void 0);
            eV[26] !== tN ? (W = {
                data: tN,
                error: null,
                isLoading: !1
            }, eV[26] = tN, eV[27] = W) : W = eV[27];
            let tb = W,
                tD = (0, s.x)(L.o, e5),
                tR = (0, s.x)(L.u, e5),
                tG = `ecosystem-focused:${e5}`,
                tP = (0, s.x)(E.j.tabById$, tG);
            eV[28] !== e5 || eV[29] !== tm || eV[30] !== tE ? (j = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eM();
                e(tE, e5, tm)
            }, eV[28] = e5, eV[29] = tm, eV[30] = tE, eV[31] = j) : j = eV[31];
            let tL = (0, d.useEffectEvent)(j);
            eV[32] !== tL || eV[33] !== tP || eV[34] !== ti || eV[35] !== e5 || eV[36] !== tE ? (M = () => {
                if (null != tP && !ti) return tE.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(L.j, e5) && tL()
                })
            }, eV[32] = tL, eV[33] = tP, eV[34] = ti, eV[35] = e5, eV[36] = tE, eV[37] = M) : M = eV[37], eV[38] !== tP || eV[39] !== ti || eV[40] !== e5 || eV[41] !== tE ? (Y = [tE, tP, ti, e5], eV[38] = tP, eV[39] = ti, eV[40] = e5, eV[41] = tE, eV[42] = Y) : Y = eV[42], (0, d.useEffect)(M, Y);
            let {
                identity: tS
            } = tm.resourceIdentity, tq = "connector" === tS.kind ? tS.connectorId : null;
            eV[43] !== tA || eV[44] !== tm.widget.name ? ($ = tm.widget.name || tA.formatMessage(ej.appTitle), eV[43] = tA, eV[44] = tm.widget.name, eV[45] = $) : $ = eV[45];
            let tO = $,
                tH = tm.title || tO;
            eV[46] !== tf || eV[47] !== tw || eV[48] !== tq || eV[49] !== e$ || eV[50] !== e4 || eV[51] !== tv || eV[52] !== tP || eV[53] !== tG || eV[54] !== ty || eV[55] !== te || eV[56] !== eX || eV[57] !== ti || eV[58] !== tA || eV[59] !== e5 || eV[60] !== tT || eV[61] !== tn || eV[62] !== tE || eV[63] !== tI ? (Q = e => {
                var t;
                if (!(0, x.c)(e)) throw Error("Expected a hosted widget resource");
                let n = {
                    ...e4,
                    widget: e.widget,
                    resourceKey: e.resourceKey
                };
                if (ti) {
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
                let i = n.widget.name || tA.formatMessage(ej.appTitle),
                    o = n.title || i,
                    s = tE.get(U.x, n.request.chatGptThreadId);
                return {
                    isVerifiedFirstParty: !0 === n.widget.is_verified_first_party,
                    heightHint: te ?? e.heightHint,
                    minFrameHeight: (0, x.a)(n),
                    appIcon: e.appIcon,
                    sourceName: i,
                    title: o,
                    sidePanelTitle: o,
                    mcpAppHostAdapter: {
                        ...n.mcpAppHostAdapter,
                        displayMode: tv,
                        ... function(e, t, n, i) {
                            var a;
                            let o, s, l, d, c, u, p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                _ = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : null,
                                E = t => {
                                    if (t?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), "current" !== e.get(J.d, n.resourceIdentity)) throw Error("The widget connection changed")
                                },
                                {
                                    accountId: g,
                                    userId: h
                                } = n.resourceIdentity.identity,
                                m = function(e, t) {
                                    let {
                                        identity: r
                                    } = t.resourceIdentity, n = t.request.chatGptThreadId;
                                    if (!0 !== t.widget.is_verified_first_party || "connector" !== r.kind || !["connector_openai_deep_research", "connector_openai_deep_research_work"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                                    let i = new Map;
                                    return (t, r) => {
                                        let a = eS.safeParse(t);
                                        if (!a.success) return;
                                        let o = a.data,
                                            s = i.get(o.id);
                                        if (s?.dispose(), !(r.aborted || e.get(U.F, n) || null != e.get(U.W, n) || e.get(K.d, n)))
                                            if ("start" === o.phase) {
                                                let t = o.length >= 2e3 ? (0, eP.b)(e, n) : null;
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
                                            } else o.success && !s?.signal.aborted && s?.complete()
                                    }
                                }(e, n),
                                f = new Set(["fullscreen"]);
                            if (!0 === n.widget.is_verified_first_party)
                                for (let e of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) f.add(e);
                            for (let [e, t] of Object.entries({
                                    camera: "camera",
                                    microphone: "microphone",
                                    geolocation: "geolocation",
                                    clipboardWrite: "clipboard-write"
                                })) n.widget.permissions?.[e] === !0 && f.add(t);
                            let T = navigator.userAgent,
                                I = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(T) ? (I.os = "ios", I.type = "mobile") : /Android/.test(T) ? (I.os = "android", I.type = "mobile") : /Windows[ _]NT/.test(T) ? I.os = "windows" : T.includes("Mac OS X") && (I.os = "macos"), "mobile" !== I.type && /Tablet/.test(T) && (I.type = "tablet");
                            let A = (0, eg.a)(n.widget.domain),
                                N = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                v = null != N && Object.values(e.get(er.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === N);
                            return {
                                experimentalCapabilities: {
                                    ...n.mcpAppHostAdapter.experimentalCapabilities,
                                    ...p && !0 === n.widget.is_verified_first_party && null != i && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                        "openai/sourceCitationLinks": {}
                                    } : {}
                                },
                                requestCheckout: async (t, i) => {
                                    E(i);
                                    let {
                                        loadWidgetCheckout: a
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481)]).then(r.bind(r, "IKJ")), o = await a();
                                    return E(i), o(e, n, t, i, () => E(i))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == m ? [] : [eL]],
                                handleRequest: async (r, i, a, o) => null != m && r.method === eL ? (E(i), null != i && m(r.params, i), {}) : (0, eG.a)(e, t, n.mcpAppHostAdapter, n.resourceIdentity, r, i, E, a, o),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (E(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let i = n.request.chatGptThreadId,
                                        a = w.object({
                                            text: w.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!a.success || null == i) return;
                                    let o = e.get(ei.n);
                                    if (null == o || o !== g) throw Error("The widget account changed");
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
                                    E(i);
                                    let {
                                        openWidgetConversationOverlay: a
                                    } = await r.e(179356).then(r.bind(r, "ZF7"));
                                    E(i), a(e, t, i, n.resourceIdentity)
                                } : void 0,
                                openPromptInput: !0 === n.widget.is_verified_first_party ? async (t, n, i) => {
                                    E(i);
                                    let {
                                        openBrowserWidgetPrompt: a
                                    } = await r.e(763191).then(r.bind(r, "Rcqw"));
                                    E(i);
                                    let o = await a(e, t, n, i);
                                    return E(i), o
                                } : void 0,
                                openInApp: {
                                    appName: n.widget.name,
                                    baseUrl: A,
                                    hideButton: !0 === n.widget.is_verified_first_party,
                                    validateUrl: e => {
                                        if (E(), e.includes("\\") || !URL.canParse(e, A ?? window.location.origin)) return null;
                                        let t = new URL(e, A ?? window.location.origin);
                                        return ("https:" === t.protocol || "http:" === t.protocol) && (0, eg.c)(t.href, {
                                            connectDomains: n.widget.csp?.connect_domains
                                        }, n.widget.domain) ? t.href : null
                                    }
                                },
                                openExternal: (t, r) => ef(e, n, t, r, E, i),
                                autofill: v && null != N && null != g && null != h ? async (t, i) => {
                                    E(i);
                                    let {
                                        createBrowserWidgetAutofill: a
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(799928)]).then(r.bind(r, "fOoA"));
                                    return E(i), a(e, n, N, t, i)
                                } : void 0,
                                sandboxFeatures: [...f],
                                instrumentation: (o = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), s = "connector" === n.resourceIdentity.identity.kind ? n.resourceIdentity.identity.connectorId : n.request.appUri, l = {
                                    ...(0, eb.a)(n.resourceIdentity, n.analyticsContext),
                                    attributionId: s,
                                    messageId: n.request.sourceMessageId,
                                    suggestionMessageId: n.suggestionMessageId,
                                    distributionChannel: ({
                                        only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                        openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                        external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                    })[o],
                                    host: "chatgpt"
                                }, d = {
                                    attribution_id: s,
                                    name: n.request.template,
                                    client_type: "chatgpt-web"
                                }, {
                                    sendInstrument(t, r) {
                                        let i = eR.safeParse(t);
                                        if (!i.success) return;
                                        let a = i.data;
                                        if ("event" === a.type) return void(0, eu.a)(e, eN.a, {
                                            eventName: a.label,
                                            eventData: JSON.stringify({
                                                ...a.payload,
                                                ...d,
                                                conversation_id: e.get(U.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: o,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === a.type) {
                                            "only_me" !== o && e.get(ev.a).count("ecosystem", "app.error", d);
                                            return
                                        }
                                        let s = {
                                            ...Object.fromEntries(a.tags?.map(e => {
                                                let {
                                                    key: t,
                                                    value: r
                                                } = e;
                                                return [t, r]
                                            }) ?? []),
                                            ...d
                                        };
                                        "interaction" === a.type ? ((0, eu.a)(e, eC.l, {
                                            ...l,
                                            ...r,
                                            conversationId: e.get(U.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, eb.b)(a.label)
                                        }), "only_me" !== o && e.get(ev.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [a.label] ?? "app.interaction", s)) : "only_me" !== o && ("count" === a.type ? e.get(ev.a).count("ecosystem", a.label, s, a.count) : e.get(ev.a).hist("ecosystem", a.label, s, a.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = w.object({
                                            effectiveDirective: w.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, eu.a)(e, eC.k, {
                                            ...l,
                                            conversationId: e.get(U.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== o && e.get(ev.a).count("ecosystem", "app.security_policy_violation", d))
                                    }
                                }),
                                toolInfo: w.object({
                                    tool: w.object({
                                        name: w.string(),
                                        input_schema: Z.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
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
                                device: I,
                                downloadBlob: !0 === n.widget.is_verified_first_party ? (e, t) => {
                                    E(t);
                                    let {
                                        blob: r,
                                        name: n
                                    } = w.object({
                                        blob: w.instanceof(Blob),
                                        name: w.string()
                                    }).parse(e);
                                    (0, en.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    E(t);
                                    let {
                                        type: r
                                    } = w.object({
                                        type: w.enum(["light", "medium", "heavy", "selection", "success", "warning", "error"])
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
                                    E();
                                    let {
                                        title: r,
                                        body: n,
                                        level: i
                                    } = w.object({
                                        title: w.string(),
                                        body: w.string().optional(),
                                        level: w.enum(["warning", "success", "danger"])
                                    }).parse(t);
                                    e.get(y.h)[i](r, {
                                        description: n?.trim() || void 0,
                                        errorAnalytics: {
                                            toastId: "ecosystem.widget.error"
                                        }
                                    })
                                } : void 0,
                                files: null != g && null != h ? (a = {
                                    appUri: n.request.appUri,
                                    accountId: g,
                                    userId: h,
                                    assertActive: n.mcpAppHostAdapter.assertActive
                                }, c = t => {
                                    if (t.throwIfAborted(), a.assertActive?.(), e.get(C.e) !== a.accountId || e.get(C.j) !== a.userId) throw Error("The widget account has changed")
                                }, u = {
                                    additionalHeaders: {
                                        "ChatGPT-Account-ID": a.accountId
                                    },
                                    expectedIdentity: {
                                        accountId: a.accountId,
                                        userId: a.userId
                                    }
                                }, {
                                    async uploadFile(e, t, r) {
                                        c(r);
                                        let n = w.instanceof(File).parse(e),
                                            i = w.object({
                                                library: w.boolean().optional()
                                            }).optional().parse(t),
                                            o = new FormData;
                                        o.append("app_uri", a.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), i?.library && o.append("store_in_library", "true"), c(r);
                                        let s = await e_.Request.safePost("/ecosystem/upload_widget_file", {
                                            ...u,
                                            requestBody: o,
                                            signal: r
                                        });
                                        return c(r), {
                                            fileId: s.file_id
                                        }
                                    },
                                    async getFileDownloadUrl(e, t) {
                                        c(t);
                                        let r = await e_.Request.safePost("/ecosystem/file_download_url", {
                                            ...u,
                                            requestBody: {
                                                app_uri: a.appUri,
                                                file_id: ew.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return c(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        c(t);
                                        let r = await e_.Request.safePost("/ecosystem/file_metadata", {
                                            ...u,
                                            requestBody: {
                                                app_uri: a.appUri,
                                                file_id: ew.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return c(t), {
                                            fileName: r.file_name ?? null,
                                            mimeType: r.mime_type ?? null
                                        }
                                    },
                                    async selectFiles(t) {
                                        c(t);
                                        let n = e.get(V.e);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(ei.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: i
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(668336)]).then(r.bind(r, "NWP"));
                                        c(t);
                                        let o = await i(e, t);
                                        if (c(t), 0 === o.length) return [];
                                        let s = await Promise.all(o.map(async e => {
                                            c(t);
                                            let r = null == (0, ey.a)(e.id) ? e : await (0, eA.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: u.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,eI.c)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return c(t), await e_.Request.safePost("/ecosystem/file_authorize_app", {
                                            ...u,
                                            requestBody: {
                                                file_ids: s.map(e => e.fileId),
                                                authorized_app_uri: a.appUri
                                            },
                                            signal: t
                                        }), c(t), s
                                    }
                                }) : void 0,
                                share: "u" > typeof navigator && "function" == typeof navigator.share ? async (e, t) => {
                                    E(t), await navigator.share(w.object({
                                        title: w.string().optional(),
                                        text: w.string().optional(),
                                        url: w.string().optional(),
                                        files: w.array(w.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == _ ? void 0 : async (r, n) => {
                                    E(n);
                                    let i = await (0, ee.requestMcpConnectSheet)(e, {
                                        connectorId: _,
                                        hostId: t,
                                        payload: r,
                                        signal: n,
                                        beforeConnect: async () => (E(n), !0)
                                    });
                                    return E(n), i
                                },
                                requestLinkToConnector: async (r, n) => {
                                    E(n);
                                    let i = await (0, ee.requestMcpConnectSheet)(e, {
                                        connectorId: w.object({
                                            connectorId: w.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (E(n), !0)
                                    });
                                    return E(n), i
                                }
                            }
                        }(tE, eX, n, async (e, t) => {
                            let r = tE.get(U.x, n.request.chatGptThreadId);
                            if ("tpp" !== r && "flora" !== r) return !1;
                            let i = await a();
                            return t.throwIfAborted(), i(tE, {
                                recipient: tn,
                                WidgetContent: eF,
                                conversationId: e$,
                                hostId: eX,
                                result: n,
                                mcpAppId: e5,
                                href: e,
                                signal: t
                            })
                        }, "tpp" === s || "flora" === s),
                        openFile: tw && !ti && null != n.request.sourceMessageId ? (e, t) => z(tE, n, e, t) : null,
                        presentation: {
                            isSidebarOpen: null != tP,
                            requestFocusedObject: !0 !== n.widget.is_verified_first_party || ti || null != n.mcpAppHostAdapter.displayMode ? void 0 : async (e, t) => {
                                let {
                                    openEcosystemWidgetFocusedObject: r
                                } = await eM();
                                t.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), r(tE, {
                                    recipient: tn,
                                    WidgetContent: eF,
                                    WidgetDialog: eH,
                                    id: tG,
                                    conversationId: e$,
                                    hostId: eX,
                                    result: n,
                                    payload: e,
                                    signal: t
                                })
                            },
                            requestCloseFocusedObject: !0 === n.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), null != n.mcpAppHostAdapter.displayMode && "fullscreen" !== n.mcpAppHostAdapter.displayMode) return void await n.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: t
                                } = await eM();
                                e.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), t(tE, tG)
                            } : void 0
                        },
                        requestModal: async (e, t) => {
                            let {
                                requestEcosystemWidgetModal: r
                            } = await eU();
                            t.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), await r(tE, {
                                recipient: tn,
                                WidgetDialog: eH,
                                conversationId: e$,
                                hostId: eX,
                                result: n,
                                payload: e,
                                signal: t
                            })
                        },
                        finance: tq === A.a ? (t = `${tT}${tI}${ty}`, {
                            requestModal: null == tf || 0 === tf.length ? void 0 : async (e, r) => {
                                if (r.aborted || tE.get(C.e) !== tf) return !1;
                                let {
                                    params: n
                                } = b.parse(e), {
                                    openPersonalFinanceAccountLinking: i
                                } = await (0, N.a)();
                                return !r.aborted && tE.get(C.e) === tf && await i(tE, {
                                    accountId: tf,
                                    initialTab: n.initialTab,
                                    returnTo: t,
                                    signal: r
                                }) && !r.aborted && tE.get(C.e) === tf
                            },
                            sendInstrument: e => (0, v.a)(tE, e)
                        }) : void 0
                    }
                }
            }, eV[46] = tf, eV[47] = tw, eV[48] = tq, eV[49] = e$, eV[50] = e4, eV[51] = tv, eV[52] = tP, eV[53] = tG, eV[54] = ty, eV[55] = te, eV[56] = eX, eV[57] = ti, eV[58] = tA, eV[59] = e5, eV[60] = tT, eV[61] = tn, eV[62] = tE, eV[63] = tI, eV[64] = Q) : Q = eV[64];
            let tx = Q;
            eV[65] !== e4 || eV[66] !== tg || eV[67] !== tE.query ? (X = null == tg ? void 0 : async () => {
                let e = await tE.query.fetch(H.a, tg);
                return {
                    resource: (0, x.b)({
                        ...e4,
                        ...e
                    }),
                    resourceIdentity: e.resourceIdentity
                }
            }, eV[65] = e4, eV[66] = tg, eV[67] = tE.query, eV[68] = X) : X = eV[68];
            let tk = X,
                tF = ti && "isolate";
            eV[69] !== tF ? (eo = (0, o.b)("relative h-full min-h-0", tF), eV[69] = tF, eV[70] = eo) : eo = eV[70], eV[71] !== tu || eV[72] !== tH ? (es = tu ? (0, n.jsx)(T.e, {
                className: "sr-only",
                children: tH
            }) : null, eV[71] = tu, eV[72] = tH, eV[73] = es) : es = eV[73], eV[74] !== e5 ? (el = (0, n.jsx)(S.a, {
                isInlineRequested: !0,
                mcpAppId: e5
            }), eV[74] = e5, eV[75] = el) : el = eV[75], eV[76] !== ts ? (ed = ts ? {
                source: "global"
            } : {}, eV[76] = ts, eV[77] = ed) : ed = eV[77], eV[78] !== tm.analyticsContext || eV[79] !== ed ? (ec = {
                ...tm.analyticsContext,
                ...ed
            }, eV[78] = tm.analyticsContext, eV[79] = ed, eV[80] = ec) : ec = eV[80], eV[81] !== e$ || eV[82] !== eX || eV[83] !== eK || eV[84] !== tn || eV[85] !== tm.request.chatGptThreadId || eV[86] !== tE ? (ep = () => null != eK ? eK : tn?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: tn.get(U.x, tn.value.conversationId)
            } : null != tm.request.chatGptThreadId || e$.startsWith("chatgpt:") || (0, F.e)(e$) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tE.get(m.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: eX
            }, eV[81] = e$, eV[82] = eX, eV[83] = eK, eV[84] = tn, eV[85] = tm.request.chatGptThreadId, eV[86] = tE, eV[87] = ep) : ep = eV[87];
            let tU = tm.preferredModelDisplayMode,
                tW = tm.resourceIdentity,
                tj = tm.widgetStatePersistence,
                tM = !0 === tm.widget.is_verified_first_party;
            eV[88] !== tS.connectorId || eV[89] !== tS.kind || eV[90] !== tS.targetId || eV[91] !== tm.request.toolName ? (eE = "connector" === tS.kind ? {
                connectorId: tS.connectorId,
                linkId: tS.targetId,
                resourceUri: null,
                appName: null,
                actionName: tm.request.toolName
            } : void 0, eV[88] = tS.connectorId, eV[89] = tS.kind, eV[90] = tS.targetId, eV[91] = tm.request.toolName, eV[92] = eE) : eE = eV[92], eV[93] !== tm.request.template || eV[94] !== tm.request.toolName || eV[95] !== tM || eV[96] !== eE ? (eh = {
                widgetSource: "hosted",
                isVerifiedFirstParty: tM,
                originResourceUri: tm.request.template,
                originTool: tm.request.toolName,
                appContext: eE
            }, eV[93] = tm.request.template, eV[94] = tm.request.toolName, eV[95] = tM, eV[96] = eE, eV[97] = eh) : eh = eV[97];
            let tV = tm.mcpAppHostAdapter,
                tY = tq === A.a ? tf ?? void 0 : void 0,
                tK = ti ? eW : eJ,
                t$ = tN.appIcon,
                tB = tm.request.toolInput,
                tz = tm.toolResult;
            return eV[98] !== tm.toolResult ? (em = function(e) {
                let t, r = e._meta,
                    n = e;
                for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                    let e = (0, eq.o)(t);
                    if (!Array.isArray(e?.content) && e?.structuredContent === void 0) continue;
                    let r = (0, eO.a)(t, {
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
            }(tm.toolResult), eV[98] = tm.toolResult, eV[99] = em) : em = eV[99], eV[100] !== e$ || eV[101] !== eB || eV[102] !== to || eV[103] !== tx || eV[104] !== ts || eV[105] !== td || eV[106] !== eX || eV[107] !== tl || eV[108] !== ta || eV[109] !== tc || eV[110] !== ez || eV[111] !== e0 || eV[112] !== e5 || eV[113] !== tO || eV[114] !== eQ || eV[115] !== tn || eV[116] !== tk || eV[117] !== tN.appIcon || eV[118] !== tb || eV[119] !== tm.mcpAppHostAdapter || eV[120] !== tm.preferredModelDisplayMode || eV[121] !== tm.request.toolInput || eV[122] !== tm.request.viewParams || eV[123] !== tm.resourceIdentity || eV[124] !== tm.toolResult || eV[125] !== tm.widgetStatePersistence || eV[126] !== ec || eV[127] !== ep || eV[128] !== eh || eV[129] !== tY || eV[130] !== tK || eV[131] !== em || eV[132] !== tH ? (eT = (0, n.jsx)(S.c, {
                analyticsContext: ec,
                getNewThreadDestination: ep,
                resource: tb,
                legacyPreferredDisplayMode: tU,
                hostDisplayModes: td,
                recipient: tn,
                conversationId: e$,
                deepLink: eB,
                pluginId: eQ,
                fullSurface: to,
                hostScroll: tl,
                inheritHostBackground: tc,
                hostId: eX,
                hostedInThreadScrollLayout: ta,
                lifetime: e0,
                resourceIdentity: tW,
                mcpAppId: e5,
                initialWidgetState: ez,
                widgetStatePersistence: tj,
                sourceName: tO,
                getResourceHost: tx,
                refetchResource: tk,
                mcpAppScope: eh,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tV,
                plaidAccountId: tY,
                Frame: tK,
                server: "codex_apps",
                appIcon: t$,
                sidePanelTitle: tH,
                title: tH,
                globalSurface: ts,
                toolArguments: tB,
                toolResult: tz,
                ...em,
                viewParamsOverride: tm.request.viewParams
            }), eV[100] = e$, eV[101] = eB, eV[102] = to, eV[103] = tx, eV[104] = ts, eV[105] = td, eV[106] = eX, eV[107] = tl, eV[108] = ta, eV[109] = tc, eV[110] = ez, eV[111] = e0, eV[112] = e5, eV[113] = tO, eV[114] = eQ, eV[115] = tn, eV[116] = tk, eV[117] = tN.appIcon, eV[118] = tb, eV[119] = tm.mcpAppHostAdapter, eV[120] = tm.preferredModelDisplayMode, eV[121] = tm.request.toolInput, eV[122] = tm.request.viewParams, eV[123] = tm.resourceIdentity, eV[124] = tm.toolResult, eV[125] = tm.widgetStatePersistence, eV[126] = ec, eV[127] = ep, eV[128] = eh, eV[129] = tY, eV[130] = tK, eV[131] = em, eV[132] = tH, eV[133] = eT) : eT = eV[133], eV[134] !== tR || eV[135] !== to || eV[136] !== e5 || eV[137] !== tD || eV[138] !== tE || eV[139] !== tp || eV[140] !== tH ? (eD = !to && tp ? (0, n.jsx)("div", {
                className: "flex items-center",
                children: "launcher" !== tD || tR.isOpen ? (0, n.jsx)(G.a, {
                    disabled: !1,
                    mcpAppId: e5
                }) : (0, n.jsx)(f.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: () => (0, L.x)(tE, e5),
                    children: (0, n.jsx)(u.a, {
                        id: "chatgpt.widget.open",
                        defaultMessage: "Open {name}",
                        description: "Reopen a closed embedded app",
                        values: {
                            name: tH
                        }
                    })
                })
            }) : null, eV[134] = tR, eV[135] = to, eV[136] = e5, eV[137] = tD, eV[138] = tE, eV[139] = tp, eV[140] = tH, eV[141] = eD) : eD = eV[141], eV[142] !== to || eV[143] !== td || eV[144] !== tl || eV[145] !== e5 || eV[146] !== tO || eV[147] !== tD || eV[148] !== tb || eV[149] !== t_ ? (ex = (0, n.jsx)(P.a, {
                showLoadingStatus: t_,
                hostDisplayModes: td,
                resource: tb,
                fullSurface: to,
                hostScroll: tl,
                mcpAppId: e5,
                pluginName: tO,
                presentation: tD
            }), eV[142] = to, eV[143] = td, eV[144] = tl, eV[145] = e5, eV[146] = tO, eV[147] = tD, eV[148] = tb, eV[149] = t_, eV[150] = ex) : ex = eV[150], eV[151] !== eo || eV[152] !== es || eV[153] !== el || eV[154] !== eT || eV[155] !== eD || eV[156] !== ex ? (ek = (0, n.jsxs)("div", {
                ref: R.a,
                className: eo,
                "data-mcp-app-portal-target": "true",
                children: [es, el, eT, eD, ex]
            }), eV[151] = eo, eV[152] = es, eV[153] = el, eV[154] = eT, eV[155] = eD, eV[156] = ex, eV[157] = ek) : ek = eV[157], ek
        }
        async function eU() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(117976)]).then(r.bind(r, "IQh"))
        }

        function eW(e) {
            let t, r = (0, i.c)(2),
                {
                    sessionId: a
                } = e;
            return r[0] !== a ? (t = (0, n.jsx)(D.a, {
                allowGlobalHost: !1,
                sessionId: a
            }), r[0] = a, r[1] = t) : t = r[1], t
        }
        let ej = (0, p.f)({
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
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(579403)]).then(r.bind(r, "Ia2H"))
        }
    }),
    HUQ: (function(e, t, r) {
        var n = r("A"),
            i = r("Qo"),
            a = r("oy"),
            o = r("zKC"),
            s = r("T8Y");

        function l(e) {
            let t, r = (0, i.c)(1);
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                content: (0, n.jsx)(a.a, {
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
    Igo: (function(e, t, r) {
        var n = r("AS"),
            i = r("Sby"),
            a = r("SGs"),
            o = r("svj"),
            s = r("eS"),
            l = r("T8Y");
        let d = n.object({
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
        async function c(e, t, r, n, c, u, p, _, E) {
            let g;
            if (null == u) throw Error("Widget requests require an active frame");
            let h = () => {
                    let t = e.get(o.a).formatMessage(l.b.notice);
                    return e.get(a.h).danger(t, {
                        id: l.a,
                        errorAnalytics: {
                            toastId: "ecosystem.widget.networkDenied"
                        }
                    }), t
                },
                m = () => ({
                    isError: !0,
                    content: [{
                        type: "text",
                        text: h()
                    }],
                    structuredContent: {
                        error_code: l.a
                    },
                    _meta: {
                        "openai/tool_error_kind": l.a
                    }
                }),
                f = async e => {
                    let t;
                    p(u);
                    try {
                        t = await r.handleRequest(e, u, _, E)
                    } catch (t) {
                        if (p(u), !(0, l.d)(t)) throw t;
                        if ("tools/call" === e.method) return m();
                        throw new s.a(h(), 403, l.a)
                    }
                    return (p(u), "tools/call" === e.method && !0 === t.isError && t._meta?.["openai/tool_error_kind"] === l.a) ? m() : t
                }, T = await f(c);
            if (null != r.olympic || "tools/call" !== c.method || "string" != typeof c.params?.name) return T;
            let I = d.safeParse(T);
            if (!I.success || "connector" !== n.identity.kind) return T;
            let y = I.data._meta["openai/connector_auth"],
                A = n.identity,
                w = c.params.name.startsWith("/") ? c.params.name.split("/").filter(Boolean) : [c.params.name],
                C = w.at(-1),
                N = c.params._meta,
                v = A.targetId ?? N?.["openai/link_id"] ?? (3 === w.length ? w[1] : void 0);
            if (null == C || 0 === C.length || w.length > 3 || y.connector_id !== A.connectorId || N?.["openai/connector_id"] != null && N["openai/connector_id"] !== y.connector_id || N?.["openai/action_name"] != null && N["openai/action_name"] !== C || null != v && v !== y.link_id) return T;
            try {
                g = await (0, i.requestMcpConnectSheet)(e, {
                    connectorId: y.connector_id,
                    hostId: t,
                    signal: u,
                    payload: {
                        requireAuth: !0,
                        reauthLinkId: y.link_id ?? void 0,
                        authReason: y.auth_reason ?? "missing_link",
                        requestedScopes: y.requested_scopes ?? void 0
                    },
                    beforeConnect: async () => (p(u), !0)
                })
            } catch {
                return p(u), T
            }
            return (p(u), g.didConnect && g.linkId && (null == y.link_id || g.linkId === y.link_id)) ? f({
                ...c,
                params: {
                    ...c.params,
                    name: C,
                    _meta: {
                        ...c.params._meta,
                        "openai/connector_id": y.connector_id,
                        "openai/action_name": C,
                        "openai/link_id": g.linkId
                    }
                }
            }) : T
        }
        r.d(t, {
            a: () => c
        })
    }),
    VV1: (function(e, t, r) {
        var n = r("AS");
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
            let t = l(e ?? void 0);
            if (t && n.has(t.url.protocol) && !t.url.hostname.includes("*")) return t.url.toString();
            if (!e) return null;
            let r = d(e);
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
            return i && n.push(i), s(e, n)
        }

        function s(e, t) {
            if (!e) return !1;
            let r = l(e);
            if (!r) return !1;
            let n = r.url;
            return !n.username && !n.password && !!t?.length && t.some(e => {
                let t = d(e);
                if (!t) return !1;
                if ("scheme" === t.kind) return n.protocol === t.scheme;
                if (t.scheme) {
                    var r, a;
                    return n.protocol === t.scheme && (r = n.hostname, a = t.host, t.wildcard ? !!u(r, a) : c(r) === c(a)) && !! function(e, t) {
                        if ("*" === t.port) return !0;
                        let r = e.port ? Number(e.port) : i[e.protocol] ?? null;
                        return t.portExplicit ? "number" == typeof t.port && r === t.port : r === (i[e.protocol] ?? null)
                    }(n, t)
                }
                return !!u(n.hostname, t.host)
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

        function d(e) {
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
                s = i[3] ?? null,
                l = i[4] ?? null,
                d = o.startsWith("*."),
                c = (d ? o.slice(2) : o).toLowerCase().replace(/\.$/, ""),
                u = null,
                p = !1;
            return null != s && (p = !0, "*" !== (u = "*" === s ? "*" : Number(s)) && (!Number.isFinite(u) || u < 0)) ? null : {
                kind: "host",
                scheme: a,
                host: c,
                wildcard: d,
                portExplicit: p,
                port: u,
                path: l
            }
        }

        function c(e) {
            return e.toLowerCase().replace(/\.$/, "")
        }

        function u(e, t) {
            let r = c(e),
                n = c(t);
            return r === n || r.endsWith("." + n)
        }
        r.d(t, {
            a: () => a,
            b: () => s,
            c: () => o
        })
    }),
    XC: (function(e, t, r) {
        function n() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(891444), r.e(273213), r.e(731731), r.e(46275), r.e(36902)]).then(r.bind(r, "o7G"))
        }
        r.d(t, {
            a: () => n
        })
    }),
    FNW: (function(e, t, r) {
        var n = r("u7i"),
            i = r("AS"),
            a = r("PFj"),
            o = r("yG"),
            s = r("Pe");
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
            d = i.object({
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
            c = {
                label: i.string().startsWith("ledger."),
                tags: i.array(i.object({
                    key: i.string(),
                    value: i.string()
                })).optional()
            },
            u = i.discriminatedUnion("type", [i.object({
                type: i.literal("event"),
                label: c.label,
                payload: d.optional().catch(void 0)
            }), i.object({
                type: i.literal("count"),
                ...c,
                count: i.number().optional()
            }), i.object({
                type: i.literal("hist"),
                ...c,
                value: i.number()
            }), i.object({
                type: i.literal("error")
            })]);

        function p(e, t) {
            let r = u.safeParse(t);
            if (!r.success) return;
            let i = r.data;
            if ("event" === i.type) {
                let t = l[i.label];
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
            let d = {
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
                c = e.get(a.a);
            switch (i.type) {
                case "count":
                    c.count("ecosystem", i.label, d, i.count);
                    break;
                case "hist":
                    c.hist("ecosystem", i.label, d, i.value);
                    break;
                case "error":
                    c.count("ecosystem", "app.error", d)
            }
        }
        r.d(t, {
            a: () => p
        })
    }),
    DS: (function(e, t, r) {
        var n = r("Xnl"),
            i = r("aM"),
            a = r("Csl"),
            o = r("nlN"),
            s = r("OW"),
            l = r("AD");
        let d = (0, n.u)(s.a, () => null);

        function c(e, t) {
            let r = e.get(a.e),
                n = e.get(a.i),
                s = e.get(o.d);
            return null != r && null != n && (0, l.b)(e.get, i.of.showEducationalTips) ? () => {
                r === e.get(a.e) && n === e.get(a.i) && s === e.get(o.d) && e.set(d, {
                    accountId: r,
                    conversationId: t,
                    navigationVisit: s,
                    userId: n
                })
            } : null
        }
        r.d(t, {
            b: () => c
        }, {
            a: d
        })
    })
};