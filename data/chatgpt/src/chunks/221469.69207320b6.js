export const __rspack_esm_ids = [221469];
export const __webpack_modules__ = {
    esFf: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.BasispointsCompanyPageProviderViewed"
            }
        })
    }),
    zcdy: (function(a, b, c) {
        var d = c("D7Ms"),
            e = c("SZCv"),
            f = c.n(e),
            g = c("Q840"),
            h = c("URlz"),
            i = c("ENcj"),
            j = c("dq5i"),
            k = c("NJrC"),
            l = c("MTYR"),
            m = c("qZWE"),
            n = c("kl6F"),
            o = c("zUz7");

        function p(a) {
            return null != a && "widget" in a && null != a.sandboxOrigin
        }
        let q = (0, g.d)(n.a, (a, b) => {
                let {
                    mcpAppId: c,
                    resourceKey: d
                } = a, {
                    get: e
                } = b, f = e(m.h, c), g = f?.sessionId == null ? null : f.content, h = g?.resource;
                return null != d && null != g && p(h) && h.resourceKey === d ? {
                    widget: h.widget,
                    sandboxOrigin: h.sandboxOrigin
                } : null
            }),
            r = (0, g.d)(n.a, (a, b) => {
                let {
                    retainFrame: c = !0,
                    ...e
                } = a, {
                    get: f
                } = b, g = f(i.a, e), j = c && null == g.data ? f(m.h, e.mcpAppId) : null, k = j?.content, l = k?.resource, n = j?.sessionId != null && null != k && p(l) && null != l.resourceKey && null != l.resourceQuery && (0, d.f)([l.resourceQuery]) === (0, d.f)([e]) && "current" === f(h.c, k.access) ? {
                    widget: l.widget,
                    sandboxOrigin: l.sandboxOrigin,
                    resourceKey: l.resourceKey
                } : void 0, o = g.data ?? n;
                return {
                    ...g,
                    data: null == o ? void 0 : {
                        ...o,
                        resourceQuery: e
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: f()
            });
        c.d(b, {}, {
            a: q,
            b: r,
            c: function(a, b) {
                let {
                    csp: c,
                    height_hint: d,
                    html: e,
                    prefers_border: f
                } = a.widget, g = a.resource ?? {
                    contents: [{
                        _meta: {
                            ui: {
                                permissions: a.widget.permissions
                            },
                            "openai/ui": {
                                availableDisplayModes: a.widget.available_display_modes ?? void 0,
                                preferredDisplayMode: a.widget.preferred_display_mode ?? void 0
                            },
                            "openai/widgetCSP": null == c ? void 0 : {
                                base_uri_domains: c.base_uri_domains ?? [],
                                connect_domains: c.connect_domains ?? [],
                                frame_domains: c.frame_domains ?? [],
                                resource_domains: c.resource_domains ?? []
                            },
                            "openai/widgetHeightHint": d ?? void 0,
                            "openai/widgetMinFrameHeight": 0,
                            "openai/widgetDomain": a.widget.domain ?? void 0,
                            "openai/widgetPrefersBorder": f ?? !1
                        },
                        mimeType: "text/html+skybridge",
                        text: e,
                        uri: a.request.template
                    }]
                }, h = (0, k.b)(g, a.sandboxOrigin);
                if (h?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
                let i = a.widget.inline_frame_padding,
                    m = null == a.resource ? (0, j.a)(a.widget) : (0, j.b)(a.resource);
                return {
                    ...h,
                    sandboxOrigin: a.sandboxOrigin,
                    generatedSandboxOrigin: (0, l.a)(a.access.serverIdentity, m),
                    csp: {
                        ...h.csp,
                        imageDomains: b
                    },
                    inlineFramePadding: null == i ? void 0 : {
                        blockStart: i.block_start,
                        blockEnd: i.block_end,
                        inlineStart: i.inline_start,
                        inlineEnd: i.inline_end
                    },
                    resourceKey: a.resourceKey,
                    resourceQuery: a.resourceQuery,
                    widget: {
                        ...a.widget,
                        sandbox_subdomain: m
                    },
                    toolIcon: (0, o.a)({
                        icons: a.toolIcons
                    }),
                    appIcon: {
                        alt: a.widget.name ?? void 0,
                        logoUrl: a.widget.logo_url,
                        logoDarkUrl: a.widget.logo_url_dark
                    },
                    fitWidth: "modal" !== a.mcpAppHostAdapter.displayMode && !0 === a.widget.fit_width,
                    widthHint: a.widget.width_hint ?? void 0
                }
            },
            d: p
        })
    }),
    thD3: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("DBCl"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("Sbyb"),
            l = c("BQbE"),
            m = c("brfW"),
            n = c("Sm6l"),
            o = c("So8L"),
            p = c("piij"),
            q = c("OWtl");

        function r() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, s, t, u, v, w, x, y, z = (0, e.c)(39),
                    {
                        error: A,
                        hostId: B,
                        isLoading: C,
                        onRetry: D
                    } = a,
                    E = (0, f.y)(q.a),
                    F = (0, i.a)(),
                    [G, H] = (0, h.useState)(null),
                    I = A instanceof m.a ? A : null;
                z[0] !== I?.connectorId ? (b = I?.connectorId?.trim() || null, z[0] = I?.connectorId, z[1] = b) : b = z[1];
                let J = b;
                z[2] !== J ? (c = null == J ? [] : [J], z[2] = J, z[3] = c) : c = z[3];
                let K = null != J && !C;
                z[4] !== c || z[5] !== K ? (s = {
                    appIds: c,
                    enabled: K,
                    hostId: g.$b
                }, z[4] = c, z[5] = K, z[6] = s) : s = z[6];
                let {
                    data: L
                } = (0, l.c)(s);
                if (z[7] !== L || z[8] !== J || z[9] !== F) {
                    let a = L?.find(a => a.id === J)?.name.trim();
                    t = a ? F.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectNamedApp",
                        defaultMessage: "Connect {appName} to continue"
                    }, {
                        appName: a
                    }) : F.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectDescription",
                        defaultMessage: "Connect the app to continue"
                    }), z[7] = L, z[8] = J, z[9] = F, z[10] = t
                } else t = z[10];
                let M = t,
                    N = I?.reauthLinkId,
                    O = I?.authReason ?? "reauthentication_required",
                    P = I?.requestedScopes;
                z[11] !== G ? (u = () => () => G?.abort(), z[11] = G, z[12] = u) : u = z[12], z[13] !== O || z[14] !== G || z[15] !== J || z[16] !== B || z[17] !== N || z[18] !== P ? (v = [G, J, B, N, O, P], z[13] = O, z[14] = G, z[15] = J, z[16] = B, z[17] = N, z[18] = P, z[19] = v) : v = z[19], (0, h.useEffect)(u, v);
                let Q = null == J ? void 0 : M;
                z[20] !== J ? (w = null == J ? void 0 : (0, d.jsx)("img", {
                    className: "size-40 object-contain select-none",
                    src: p,
                    alt: "",
                    draggable: !1
                }), z[20] = J, z[21] = w) : w = z[21];
                let R = null == J ? void 0 : null;
                return z[22] !== O || z[23] !== G || z[24] !== J || z[25] !== B || z[26] !== C || z[27] !== D || z[28] !== N || z[29] !== P || z[30] !== E ? (x = null == J ? void 0 : (0, d.jsx)(n.a, {
                    color: "secondary",
                    disabled: null != G || C,
                    loading: null != G || C,
                    onClick: () => {
                        let a = new AbortController;
                        H(a), (0, k.requestMcpConnectSheet)(E, {
                            connectorId: J,
                            hostId: B,
                            oauthPresentation: "popup",
                            payload: null == N ? void 0 : {
                                requireAuth: !0,
                                authReason: O,
                                reauthLinkId: N,
                                requestedScopes: P
                            },
                            signal: a.signal
                        }).then(b => {
                            let {
                                didConnect: c,
                                linkId: d
                            } = b;
                            c && !a.signal.aborted && (null == N || d === N) && D()
                        }).catch(r).finally(() => H(null))
                    },
                    children: (0, d.jsx)(j.a, {
                        id: "openaiMcpCapabilities.unavailable.connect",
                        defaultMessage: "Connect"
                    })
                }), z[22] = O, z[23] = G, z[24] = J, z[25] = B, z[26] = C, z[27] = D, z[28] = N, z[29] = P, z[30] = E, z[31] = x) : x = z[31], z[32] !== C || z[33] !== D || z[34] !== R || z[35] !== x || z[36] !== Q || z[37] !== w ? (y = (0, d.jsx)(o.a, {
                    isLoading: C,
                    onRetry: D,
                    title: Q,
                    illustration: w,
                    description: R,
                    actions: x
                }), z[32] = C, z[33] = D, z[34] = R, z[35] = x, z[36] = Q, z[37] = w, z[38] = y) : y = z[38], y
            }
        })
    }),
    a2hX: (function(a, b, c) {
        c.d(b, {
            ChatGptEcosystemWidgetContent: () => aN,
            a: () => aO,
            EcosystemWidgetDialog: () => aJ
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("DBCl"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("Qgfj"),
            l = c("rEML"),
            m = c("ZU27"),
            n = c("o6hs"),
            o = c("Ooax"),
            p = c("PrVQ"),
            q = c("zcdy"),
            r = c("uUH7"),
            s = c("ENcj"),
            t = c("Cslg"),
            u = c("h6fL"),
            v = c("kphc"),
            w = c("WBiY"),
            x = c("JNtf"),
            y = c("RNul"),
            z = c("SGsN"),
            A = c("esFf"),
            B = c("lAQI"),
            C = c("yGJW");
        let D = "openai/analytics/companyPageProviderViewed",
            E = B.K({
                pageViewId: B.T(),
                invocationId: B.T(),
                providerId: B.p(["fiscal", "fmp", "daloopa", "crunchbase", "sec", "quartr"]),
                entrypoint: B.p(["company_card", "company_directory", "unknown"])
            });
        var F = c("PeqE"),
            G = c("s5P0"),
            H = c("QagL"),
            I = c("vcrj"),
            J = c("qwxA"),
            K = c("qZWE"),
            L = c("JHD7"),
            M = c("Sd8U"),
            N = c("tSEg"),
            O = c("f3BX"),
            P = c("thD3"),
            Q = c("OOaz"),
            R = c("dQRk"),
            S = c("kSHG"),
            T = c("sS8e"),
            U = c("OWtl"),
            V = c("OMIV"),
            W = c("bnxy"),
            X = c("rxj0"),
            Y = c("IDHB");
        let Z = (0, f.d)(U.a, (a, b) => {
            let {
                get: c
            } = b, d = c(t.n);
            if (d.authLoading || "chatgpt" !== d.authMethod || !0 !== d.supportedSurface || null == d.authenticatedAccountId || null == d.userId || !d.email?.endsWith("@openai.com") || !c(V.e, "3080374709") || null == a || null == c(R.j, a) || null != c(R.bb, a)) return !1;
            let e = c(R.y, a);
            return ("tpp" === e || "flora" === e) && !c(X.e, a)
        });
        var $ = c("T8YV"),
            _ = c("HUQj"),
            aa = c("lax3"),
            ab = c("Vjzf"),
            ac = c("Sbyb"),
            ad = c("jEN2"),
            ae = c("JYRT"),
            af = c("ripK"),
            ag = c("g2p6"),
            ah = c("sWz1"),
            ai = c("EA6X"),
            aj = c("g25Y"),
            ak = c("Ot7V"),
            al = c("X6Vn"),
            am = c("MefB"),
            an = c("yI91"),
            ao = c("Kwur"),
            ap = c("VV1g"),
            aq = c("aRhc");
        let ar = "redirectUrl",
            as = B.F({
                href: B.S().refine(a => {
                    let b = new URL(a);
                    return "data:" === b.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(a) : !a.includes("\\") && !b.username && !b.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(b.protocol)
                }),
                redirectUrl: B.Q([B.L(), B.j()]).optional(),
                openMode: B.p(["tab", "popup"]).optional()
            });

        function at(a, b, c, d) {
            let e = !0 === b.widget.is_verified_first_party,
                f = a.get(R.j, b.request.chatGptThreadId ?? null);
            (0, C.a)(a, ai.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === b.mcpAppHostAdapter.displayMode ? ai.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : ai.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "CHATGPT_LINK_TYPE_WIDGET",
                attributionId: b.attributionId,
                domain: b.widget.domain ?? void 0,
                distributionChannel: b.distributionChannel ?? (e ? "openai" : "external"),
                openMode: e && "popup" === d ? "popup" : "tab",
                widgetSessionId: b.widgetSessionId,
                widgetActionType: "open_external",
                conversationId: f ?? void 0,
                messageId: b.request.sourceMessageId,
                parentContext: {
                    widgetType: b.request.appUri,
                    widgetName: b.request.template
                },
                url: c
            })
        }
        var au = c("iqEK"),
            av = c("UxLW"),
            aw = c("vvmK");
        let ax = B.F({
            fileId: B.L().min(1)
        });
        var ay = c("bTvG"),
            az = c("JKSp"),
            aA = c("PFjh"),
            aB = c("DXan");
        let aC = {
                label: B.L(),
                tags: B.g(B.F({
                    key: B.L(),
                    value: B.L()
                })).optional()
            },
            aD = B.m("type", [B.F({
                type: B.z("event"),
                label: B.L(),
                payload: B.J(B.L(), B.x()).optional()
            }), B.F({
                type: B.z("interaction"),
                ...aC
            }), B.F({
                type: B.z("count"),
                ...aC,
                count: B.E().optional()
            }), B.F({
                type: B.z("hist"),
                ...aC,
                value: B.E()
            }), B.F({
                type: B.z("error")
            })]);
        var aE = c("Igop"),
            aF = c("DSZZ");
        let aG = "openai/deep-research/report-copy",
            aH = B.m("phase", [B.K({
                phase: B.z("start"),
                id: B.T(),
                length: B.E().int().nonnegative()
            }), B.K({
                phase: B.z("finish"),
                id: B.T(),
                success: B.j()
            })]);
        var aI = c("Gi9o");

        function aJ(a) {
            let b, c = (0, e.c)(2);
            return c[0] !== a ? (b = void 0 === a.recipient ? (0, d.jsx)(aK, {
                ...a
            }) : (0, d.jsx)(aL, {
                ...a
            }), c[0] = a, c[1] = b) : b = c[1], b
        }

        function aK(a) {
            let b, c = (0, e.c)(3),
                g = (0, f.y)(M.a);
            return c[0] !== a || c[1] !== g ? (b = (0, d.jsx)(aL, {
                ...a,
                recipient: g
            }), c[0] = a, c[1] = g, c[2] = b) : b = c[2], b
        }

        function aL(a) {
            let b, c, k, l, m, n, o, p, q, r, s, t, u = (0, e.c)(62),
                {
                    recipient: v,
                    conversationId: w,
                    hostId: A,
                    mcpAppId: B,
                    onClose: C,
                    state: D,
                    heightHint: E,
                    widthHint: F,
                    allowsInteractiveDismissal: G
                } = a,
                H = void 0 === v ? null : v,
                J = (0, f.y)(N.a),
                L = (0, i.a)();
            u[0] !== B ? (b = () => B ?? (0, g.zf)(), u[0] = B, u[1] = b) : b = u[1];
            let [M] = (0, h.useState)(b), Q = "ready" === D.kind && "modal" === D.result.request.mode ? Math.max(E ?? D.result.widget.height_hint ?? 0, 0) || void 0 : E, R = "ready" === D.kind ? D.result.tracking : D.tracking, S = "ready" === D.kind && "fullscreen" === D.result.request.mode, T = "loading" === D.kind && !0 === D.nonModal;
            u[2] !== C || u[3] !== R ? (c = () => {
                R?.close("user_dismissed"), C()
            }, u[2] = C, u[3] = R, u[4] = c) : c = u[4];
            let U = (0, h.useEffectEvent)(c);
            u[5] !== G || u[6] !== U || u[7] !== T || u[8] !== J ? (k = () => {
                if (T) return J.get(z.f).info((0, d.jsx)(j.a, {
                    ...aQ.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, d.jsx)(y.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === G ? void 0 : {
                        label: (0, d.jsx)(j.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel"
                        }),
                        onClick: () => U()
                    }
                }).close
            }, u[5] = G, u[6] = U, u[7] = T, u[8] = J, u[9] = k) : k = u[9], u[10] !== G || u[11] !== T || u[12] !== J ? (l = [J, T, G], u[10] = G, u[11] = T, u[12] = J, u[13] = l) : l = u[13], (0, h.useEffect)(k, l), u[14] !== S || u[15] !== C || u[16] !== R ? (m = () => {
                S && (R?.close("user_dismissed"), C())
            }, u[14] = S, u[15] = C, u[16] = R, u[17] = m) : m = u[17];
            let V = (0, h.useEffectEvent)(m);
            if (u[18] !== V || u[19] !== M || u[20] !== J || u[21] !== R ? (n = () => {
                    let a = J.watch(a => {
                        let b = a.get(K.t, M);
                        null != b && a.get(K.s, b)?.isOpen === !1 ? V() : (a.get(K.w, M) && R?.renderReady(), null != a.get(K.r, M) && R?.error("widget_render"))
                    });
                    return () => {
                        a(), R?.close("navigation_changed")
                    }
                }, u[18] = V, u[19] = M, u[20] = J, u[21] = R, u[22] = n) : n = u[22], u[23] !== M || u[24] !== J || u[25] !== R ? (o = [J, M, R], u[23] = M, u[24] = J, u[25] = R, u[26] = o) : o = u[26], (0, h.useEffect)(n, o), T) return null;
            if ("ready" === D.kind && S) {
                let a, b;
                return u[27] === Symbol.for("react.memo_cache_sentinel") ? (a = ["fullscreen"], u[27] = a) : a = u[27], u[28] !== w || u[29] !== A || u[30] !== M || u[31] !== H || u[32] !== D.result ? (b = (0, d.jsx)(aN, {
                    recipient: H,
                    conversationId: w,
                    hostDisplayModes: a,
                    hostId: A,
                    lifetime: "component",
                    mcpAppId: M,
                    result: D.result
                }), u[28] = w, u[29] = A, u[30] = M, u[31] = H, u[32] = D.result, u[33] = b) : b = u[33], b
            }
            if ("error" === D.kind)
                if ((0, $.d)(D.error)) {
                    let a;
                    u[34] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                        children: (0, d.jsx)(_.a, {})
                    }), u[34] = a) : a = u[34], p = a
                } else if (D.error instanceof O.a) {
                let a, b;
                u[35] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(x.f, {
                    className: "sr-only",
                    children: (0, d.jsx)(j.a, {
                        ...aQ.openAppError
                    })
                }), u[35] = a) : a = u[35], u[36] !== A || u[37] !== C || u[38] !== D.error ? (b = (0, d.jsxs)(d.Fragment, {
                    children: [a, (0, d.jsx)(P.a, {
                        error: D.error,
                        hostId: A,
                        isLoading: !1,
                        onRetry: C
                    })]
                }), u[36] = A, u[37] = C, u[38] = D.error, u[39] = b) : b = u[39], p = b
            } else {
                let a, b;
                u[40] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(x.f, {
                    className: "text-lg font-medium",
                    children: (0, d.jsx)(j.a, {
                        ...aQ.openAppError
                    })
                }), u[40] = a) : a = u[40], u[41] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                    children: [a, (0, d.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, d.jsx)(j.a, {
                            ...aQ.openAppErrorDescription
                        })
                    })]
                }), u[41] = b) : b = u[41], p = b
            }
            return u[42] !== L ? (q = L.formatMessage(aQ.appTitle), u[42] = L, u[43] = q) : q = u[43], u[44] !== C || u[45] !== R ? (r = () => {
                R?.close("user_dismissed"), C()
            }, u[44] = C, u[45] = R, u[46] = r) : r = u[46], u[47] !== w || u[48] !== p || u[49] !== A || u[50] !== M || u[51] !== H || u[52] !== D.kind || u[53] !== D.result ? (s = "loading" === D.kind ? (0, d.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, d.jsx)(j.a, {
                    ...aQ.openingApp
                })
            }) : "error" === D.kind ? p : (0, d.jsx)(aN, {
                recipient: H,
                conversationId: w,
                hostId: A,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: M,
                result: D.result
            }), u[47] = w, u[48] = p, u[49] = A, u[50] = M, u[51] = H, u[52] = D.kind, u[53] = D.result, u[54] = s) : s = u[54], u[55] !== G || u[56] !== Q || u[57] !== r || u[58] !== s || u[59] !== q || u[60] !== F ? (t = (0, d.jsx)(I.a, {
                "aria-label": q,
                heightHint: Q,
                widthHint: F,
                allowsInteractiveDismissal: G,
                onClose: r,
                children: s
            }), u[55] = G, u[56] = Q, u[57] = r, u[58] = s, u[59] = q, u[60] = F, u[61] = t) : t = u[61], t
        }

        function aM(a, b) {
            let c, d, g = (0, e.c)(6);
            g[0] !== a.resourceKey || g[1] !== b ? (c = {
                mcpAppId: b,
                resourceKey: a.resourceKey
            }, g[0] = a.resourceKey, g[1] = b, g[2] = c) : c = g[2];
            let h = (0, f.x)(q.a, c);
            return g[3] !== a || g[4] !== h ? (d = null == h ? a : {
                ...a,
                ...h
            }, g[3] = a, g[4] = h, g[5] = d) : d = g[5], d
        }

        function aN(a) {
            let b, c, g, h, j, k, l, m, n, o, p, r, s, t, u, v, w = (0, e.c)(43);
            w[0] !== a ? ({
                result: b,
                mcpAppId: c,
                inDialog: h,
                fullSurface: j,
                hostScroll: k,
                hostDisplayModes: l,
                showDialogTitle: m,
                showLoadingStatus: n,
                disableInlineLoadingState: o,
                ...g
            } = a, w[0] = a, w[1] = b, w[2] = c, w[3] = g, w[4] = h, w[5] = j, w[6] = k, w[7] = l, w[8] = m, w[9] = n, w[10] = o) : (b = w[1], c = w[2], g = w[3], h = w[4], j = w[5], k = w[6], l = w[7], m = w[8], n = w[9], o = w[10]);
            let y = void 0 !== h && h,
                z = void 0 === j ? y : j,
                A = void 0 !== k && k,
                B = void 0 === l ? K.d : l,
                C = void 0 === m ? y : m,
                D = void 0 === n || n,
                E = void 0 !== o && o,
                F = (0, i.a)(),
                G = aM(b, c);
            w[11] !== F || w[12] !== G.widget.name ? (p = G.widget.name || F.formatMessage(aQ.appTitle), w[11] = F, w[12] = G.widget.name, w[13] = p) : p = w[13];
            let H = p,
                I = G.title || H;
            w[14] !== b || w[15] !== g.imageDomains ? (r = (0, q.c)(b, g.imageDomains), w[14] = b, w[15] = g.imageDomains, w[16] = r) : r = w[16], w[17] !== r ? (s = {
                data: r,
                error: null,
                isLoading: !1
            }, w[17] = r, w[18] = s) : s = w[18];
            let J = s,
                M = (0, f.x)(K.n, c),
                N = y ? "isolate" : void 0,
                O = E || !0 === G.widget.disable_loading_state;
            return w[19] !== C || w[20] !== I ? (t = C ? (0, d.jsx)(x.f, {
                className: "sr-only",
                children: I
            }) : null, w[19] = C, w[20] = I, w[21] = t) : t = w[21], w[22] !== z || w[23] !== B || w[24] !== A || w[25] !== c || w[26] !== H || w[27] !== M || w[28] !== J || w[29] !== D || w[30] !== N || w[31] !== O || w[32] !== t ? (u = (0, d.jsx)(L.a, {
                className: N,
                showLoadingStatus: D,
                disableInlineLoadingState: O,
                hostDisplayModes: B,
                resource: J,
                fullSurface: z,
                hostScroll: A,
                mcpAppId: c,
                appName: H,
                presentation: M,
                children: t
            }), w[22] = z, w[23] = B, w[24] = A, w[25] = c, w[26] = H, w[27] = M, w[28] = J, w[29] = D, w[30] = N, w[31] = O, w[32] = t, w[33] = u) : u = w[33], w[34] !== b || w[35] !== z || w[36] !== B || w[37] !== A || w[38] !== y || w[39] !== c || w[40] !== g || w[41] !== u ? (v = (0, d.jsx)(aO, {
                ...g,
                result: b,
                inDialog: y,
                fullSurface: z,
                hostScroll: A,
                hostDisplayModes: B,
                mcpAppId: c,
                children: u
            }), w[34] = b, w[35] = z, w[36] = B, w[37] = A, w[38] = y, w[39] = c, w[40] = g, w[41] = u, w[42] = v) : v = w[42], v
        }

        function aO(a) {
            let b, j, k, x, y, I, L, M, O, P, U, $, _, ai, aC, aK, aL, aO, aS, aT, aU, aV = (0, e.c)(162),
                {
                    recipient: aW,
                    children: aX,
                    newThreadDestination: aY,
                    conversationId: aZ,
                    deepLink: a$,
                    initialWidgetState: a_,
                    pluginId: a0,
                    hostId: a1,
                    inDialog: a2,
                    Frame: a3,
                    lifetime: a4,
                    mcpAppId: a5,
                    hostedInThreadScrollLayout: a6,
                    result: a7,
                    imageDomains: a8,
                    fullSurface: a9,
                    globalSurface: ba,
                    hostScroll: bb,
                    hostDisplayModes: bc,
                    inheritHostBackground: bd,
                    heightHint: be,
                    readOnlySnapshot: bf
                } = a,
                bg = void 0 === aW ? null : aW,
                bh = void 0 !== a2 && a2,
                bi = void 0 === a3 ? H.a : a3,
                bj = void 0 !== a6 && a6,
                bk = void 0 === a9 ? bh : a9,
                bl = void 0 !== ba && ba,
                bm = void 0 !== bb && bb,
                bn = void 0 === bc ? K.d : bc,
                bo = void 0 !== bd && bd,
                bp = void 0 !== bf && bf,
                bq = (0, f.y)(N.a),
                br = a7.resourceQuery,
                bs = aM(a7, a5),
                {
                    accountId: bt
                } = (0, u.a)(),
                {
                    pathname: bu,
                    search: bv,
                    hash: bw
                } = (0, l.Z)(),
                bx = (0, i.a)(),
                by = (0, f.x)(Z, bs.request.chatGptThreadId);
            aV[0] !== aZ || aV[1] !== a1 || aV[2] !== bh || aV[3] !== bx || aV[4] !== bg || aV[5] !== bs || aV[6] !== bq ? (b = async (a, b) => {
                let c = bq.get(r.mcpConnectSheetRequest$),
                    d = c?.widgetModal;
                if (null != bs.toolResult && c?.id === a && c.restored && c.result?.didConnect && null != d && null == bs.modalOwner && c.hostId === a1 && "current" === bs.access.status(bq.get) && d.accountId === bs.access.accountId && d.userId === bs.access.uiUserId && d.sourceAppUri === bs.request.appUri && d.sourceTemplate === bs.request.template && d.sourceMessageId === bs.request.sourceMessageId && d.sourceThreadId === bs.request.threadId && d.sourceConversationId === bq.get(R.j, bs.request.chatGptThreadId)) {
                    bq.set(r.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: a
                        } = await aP();
                        b.throwIfAborted(), await a(bq, {
                            recipient: bg,
                            conversationId: aZ,
                            hostId: a1,
                            inDialog: bh,
                            result: bs,
                            WidgetDialog: aJ,
                            WidgetContent: aN,
                            payload: d.payload,
                            signal: b
                        }, c.result)
                    } catch {
                        b.aborted || bq.get(z.f).danger(bx.formatMessage(aQ.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, aV[0] = aZ, aV[1] = a1, aV[2] = bh, aV[3] = bx, aV[4] = bg, aV[5] = bs, aV[6] = bq, aV[7] = b) : b = aV[7];
            let bz = (0, h.useEffectEvent)(b);
            aV[8] !== bh || aV[9] !== bz || aV[10] !== bq ? (j = () => {
                if (bh) return;
                let a = new AbortController,
                    b = bq.watch(b => {
                        let {
                            get: c
                        } = b, d = c(r.mcpConnectSheetRequest$);
                        d?.restored && null != d.widgetModal && d.result?.didConnect && bz(d.id, a.signal)
                    });
                return () => {
                    b(), a.abort()
                }
            }, aV[8] = bh, aV[9] = bz, aV[10] = bq, aV[11] = j) : j = aV[11], aV[12] !== bh || aV[13] !== bs.request.appUri || aV[14] !== bs.request.chatGptThreadId || aV[15] !== bs.request.sourceMessageId || aV[16] !== bs.request.template || aV[17] !== bq ? (k = [bq, bh, bs.request.appUri, bs.request.template, bs.request.sourceMessageId, bs.request.chatGptThreadId], aV[12] = bh, aV[13] = bs.request.appUri, aV[14] = bs.request.chatGptThreadId, aV[15] = bs.request.sourceMessageId, aV[16] = bs.request.template, aV[17] = bq, aV[18] = k) : k = aV[18], (0, h.useEffect)(j, k), aV[19] !== a7 || aV[20] !== a8 ? (x = (0, q.c)(a7, a8), aV[19] = a7, aV[20] = a8, aV[21] = x) : x = aV[21];
            let bA = x,
                bB = bs.mcpAppHostAdapter.displayMode ?? (bh ? "inline" : void 0);
            aV[22] !== bA ? (y = {
                data: bA,
                error: null,
                isLoading: !1
            }, aV[22] = bA, aV[23] = y) : y = aV[23];
            let bC = y,
                bD = `ecosystem-focused:${a5}`,
                bE = (0, f.x)(m.l.tabById$, bD);
            aV[24] !== a5 || aV[25] !== bs || aV[26] !== bq ? (I = async () => {
                if (null == bs.toolResult) return;
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: a
                } = await aR();
                a(bq, a5, bs)
            }, aV[24] = a5, aV[25] = bs, aV[26] = bq, aV[27] = I) : I = aV[27];
            let bF = (0, h.useEffectEvent)(I);
            aV[28] !== bF || aV[29] !== bE || aV[30] !== bh || aV[31] !== a5 || aV[32] !== bq ? (L = () => {
                if (null != bE && !bh) return bq.watch(a => {
                    let {
                        get: b
                    } = a;
                    null != b(K.h, a5) && bF()
                })
            }, aV[28] = bF, aV[29] = bE, aV[30] = bh, aV[31] = a5, aV[32] = bq, aV[33] = L) : L = aV[33], aV[34] !== bE || aV[35] !== bh || aV[36] !== a5 || aV[37] !== bq ? (M = [bq, bE, bh, a5], aV[34] = bE, aV[35] = bh, aV[36] = a5, aV[37] = bq, aV[38] = M) : M = aV[38], (0, h.useEffect)(L, M);
            let bG = bs.access.serverIdentity,
                bH = "connectorId" in bG ? bG.connectorId : null;
            aV[39] !== bx || aV[40] !== bs.widget.name ? (O = bs.widget.name || bx.formatMessage(aQ.appTitle), aV[39] = bx, aV[40] = bs.widget.name, aV[41] = O) : O = aV[41];
            let bI = O,
                bJ = bs.title || bI,
                {
                    request: bK,
                    toolResult: bL
                } = a7;
            aV[42] !== bL ? (P = null == bL ? void 0 : (0, aI.a)(bL), aV[42] = bL, aV[43] = P) : P = aV[43];
            let bM = P,
                bN = !bp && bK.template === o.a,
                bO = (0, f.z)(bN ? t.j : null);
            bM?.toolCallStatus;
            a: {
                let a, b;
                if (!bN) {
                    U = void 0;
                    break a
                }
                let c = a7.modalOwner?.result ?? a7,
                    d = c.access.serverIdentity;
                if (null == bL || null == c.toolResult || null == bO || !("connectorId" in d) || d.connectorId !== bH || c.request.template !== bK.template || !0 !== a7.widget.is_verified_first_party || !0 === a7.mcpAppHostAdapter.isTombstone || bM?.toolCallStatus != null) {
                    U = void 0;
                    break a
                }
                aV[44] !== a7.mcpAppHostAdapter || aV[45] !== a5 || aV[46] !== bO || aV[47] !== bq ? (a = () => {
                    if (a7.mcpAppHostAdapter.assertActive?.(), bq.get(t.j) !== bO || bq.get(K.h, a5)?.content.mcpAppScope.isVerifiedFirstParty !== !0) throw Error("This widget is no longer active.")
                }, aV[44] = a7.mcpAppHostAdapter, aV[45] = a5, aV[46] = bO, aV[47] = bq, aV[48] = a) : a = aV[48];
                let e = a;
                if (aV[49] !== e || aV[50] !== bH || aV[51] !== a7.access || aV[52] !== a1 || aV[53] !== bg || aV[54] !== bO || aV[55] !== bK || aV[56] !== bq || aV[57] !== c.request.chatGptThreadId || aV[58] !== c.request.sourceMessageId || aV[59] !== c.request.toolInput || aV[60] !== c.toolResult) {
                    let a;
                    aV[62] !== bH || aV[63] !== a7.access || aV[64] !== bg || aV[65] !== bO || aV[66] !== bK || aV[67] !== bq ? (a = async a => {
                        let {
                            chatGptThreadId: b,
                            sourceMessageId: c
                        } = bK, d = bg?.value;
                        if (null == bg || d?.kind !== "chatgpt" || null == b || null == c) return;
                        let e = (0, w.getMcpAppSubmit)(bg, () => {
                            let a = a => bq.get(R.j, a) ?? a;
                            if (bq.get(t.j) !== bO || a(d.conversationId) !== a(b) || bq.get(N.j) || "current" !== a7.access.status(bq.get) || null != bq.get(R.bb, b) || null == bq.get(R.N, b) || bq.get(aa.c, {
                                    conversationId: b,
                                    messageId: c
                                }) || (0, X.j)(bq, b)) throw new DOMException("The originating request is no longer available", "AbortError")
                        });
                        null != e && await e({
                            turnTrigger: "mcp_app_follow_up",
                            addedFiles: [],
                            fileAttachments: [],
                            ideContext: null,
                            imageAttachments: [],
                            prompt: (0, o.b)(a)
                        }, {
                            name: bK.template,
                            attribution: bH ?? void 0,
                            visuallyHidden: !0
                        })
                    }, aV[62] = bH, aV[63] = a7.access, aV[64] = bg, aV[65] = bO, aV[66] = bK, aV[67] = bq, aV[68] = a) : a = aV[68], b = (0, p.a)({
                        scope: bq,
                        hostId: a1,
                        sourceId: JSON.stringify([c.request.chatGptThreadId, c.request.sourceMessageId]),
                        productSku: n.d.shape.productSku.parse(bK.productSku?.toUpperCase()),
                        access: a7.access,
                        resourceUri: bK.template,
                        toolInput: c.request.toolInput,
                        toolResult: (0, aI.a)(c.toolResult).toolResultNotification,
                        assertActive: e,
                        onReconnected: a
                    }), aV[49] = e, aV[50] = bH, aV[51] = a7.access, aV[52] = a1, aV[53] = bg, aV[54] = bO, aV[55] = bK, aV[56] = bq, aV[57] = c.request.chatGptThreadId, aV[58] = c.request.sourceMessageId, aV[59] = c.request.toolInput, aV[60] = c.toolResult, aV[61] = b
                } else b = aV[61];U = b
            }
            let bP = U;
            aV[69] !== bt || aV[70] !== by || aV[71] !== bH || aV[72] !== aZ || aV[73] !== a7 || aV[74] !== bB || aV[75] !== bE || aV[76] !== bD || aV[77] !== bw || aV[78] !== be || aV[79] !== a1 || aV[80] !== bh || aV[81] !== bx || aV[82] !== a5 || aV[83] !== bu || aV[84] !== bp || aV[85] !== bg || aV[86] !== bP || aV[87] !== bq || aV[88] !== bv ? ($ = a => {
                var b;
                let d, e, f;
                if (!(0, q.d)(a)) throw Error("Expected a hosted widget resource");
                let h = {
                    ...a7,
                    widget: a.widget,
                    sandboxOrigin: a.sandboxOrigin,
                    resourceKey: a.resourceKey
                };
                if (bh) {
                    let a = h.mcpAppHostAdapter;
                    h.mcpAppHostAdapter = {
                        ...a,
                        handleRequest: (b, c, d) => a.handleRequest(b, c, d)
                    }
                }
                null != h.getPluginSuggestions && (h.mcpAppHostAdapter = {
                    ...h.mcpAppHostAdapter,
                    pluginSuggestions: h.getPluginSuggestions(h.widget)
                });
                let i = h.widget.name || bx.formatMessage(aQ.appTitle),
                    j = h.title || i,
                    k = {
                        isVerifiedFirstParty: !0 === h.widget.is_verified_first_party,
                        heightHint: be ?? a.heightHint,
                        minFrameHeight: a.minFrameHeight ?? 0,
                        appIcon: a.appIcon,
                        toolIcon: a.toolIcon,
                        sourceName: i,
                        title: j,
                        sidePanelTitle: j
                    };
                if (bp) return {
                    ...k,
                    mcpAppHostAdapter: h.mcpAppHostAdapter
                };
                let l = bq.get(R.y, h.request.chatGptThreadId),
                    m = function(a, b, d, e) {
                        var f;
                        let h, i, j, k, l, m, n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            o = "connectorId" in d.access.serverIdentity ? d.access.serverIdentity.connectorId : null,
                            p = a => {
                                a?.throwIfAborted(), d.mcpAppHostAdapter.assertActive?.(), d.access.assertActive()
                            };
                        if ("current" !== d.access.status(a.get)) return {};
                        let {
                            accountId: q,
                            uiUserId: r
                        } = d.access, s = function(a, b) {
                            let c = b.access.serverIdentity,
                                d = b.request.chatGptThreadId;
                            if (!0 !== b.widget.is_verified_first_party || !("connectorId" in c) || !["connector_openai_deep_research", "connector_openai_deep_research_workflow"].includes(c.connectorId) || "internal://deep-research" !== b.request.template || null == d) return null;
                            let e = new Map;
                            return (b, c) => {
                                let f = aH.safeParse(b);
                                if (!f.success) return;
                                let g = f.data,
                                    h = e.get(g.id);
                                if (h?.dispose(), !(c.aborted || a.get(R.I, d) || null != a.get(R.bb, d) || a.get(X.e, d)))
                                    if ("start" === g.phase) {
                                        let b = g.length >= 2e3 ? (0, aF.b)(a, d) : null;
                                        if (null != b && e.size < 8) {
                                            let a = () => {
                                                e.delete(g.id), c.removeEventListener("abort", a)
                                            };
                                            c.addEventListener("abort", a, {
                                                once: !0
                                            }), e.set(g.id, {
                                                complete: b,
                                                signal: c,
                                                dispose: a
                                            })
                                        }
                                    } else g.success && !h?.signal.aborted && h?.complete()
                            }
                        }(a, d), u = new Set(["fullscreen"]);
                        if (!0 === d.widget.is_verified_first_party)
                            for (let a of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) u.add(a);
                        for (let a of g.mj) d.widget.permissions?.[a] === !0 && u.add(g.lj[a].feature);
                        d.widget.permissions?.clipboard_write === !0 && u.add("clipboard-write");
                        let v = navigator.userAgent,
                            w = {
                                os: "unknown",
                                type: "desktop"
                            };
                        /iPad|iPhone|iPod/.test(v) ? (w.os = "ios", w.type = "mobile") : /Android/.test(v) ? (w.os = "android", w.type = "mobile") : /Windows[ _]NT/.test(v) ? w.os = "windows" : v.includes("Mac OS X") && (w.os = "macos"), "mobile" !== w.type && /Tablet/.test(v) && (w.type = "tablet");
                        let x = (0, aq.a)(d.widget.domain),
                            y = d.request.appUri.includes("://") ? URL.parse(d.request.appUri)?.hostname : d.request.appUri,
                            A = null != y && Object.values(a.get(ae.a, "3726720227")?.value ?? {}).some(a => "string" == typeof a && (a.includes("://") ? URL.parse(a)?.hostname : a) === y);
                        return {
                            experimentalCapabilities: {
                                ...d.mcpAppHostAdapter.experimentalCapabilities,
                                ...n && !0 === d.widget.is_verified_first_party && null != e && null != d.request.chatGptThreadId && null != d.request.sourceMessageId ? {
                                    "openai/sourceCitationLinks": {}
                                } : {}
                            },
                            requestCheckout: async (b, e) => {
                                p(e);
                                let {
                                    loadWidgetCheckout: f
                                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629)]).then(() => c("IKJx")), g = await f();
                                return p(e), g(a, d, b, e, () => p(e))
                            },
                            forwardedRequestMethods: [...d.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == s ? [] : [aG]],
                            handleRequest: async (c, e, f, g) => null != s && c.method === aG ? (p(e), null != e && s(c.params, e), {}) : (0, aE.a)(a, b, d.mcpAppHostAdapter, d.access, c, e, p, f, g),
                            setTargetedReply: null != d.mcpAppHostAdapter.setTargetedReply || null != d.request.chatGptThreadId && null == d.mcpAppHostAdapter.requestTargetedReply ? (b, c) => {
                                if (p(c), null != d.mcpAppHostAdapter.setTargetedReply) return void d.mcpAppHostAdapter.setTargetedReply(b, c);
                                let e = d.request.chatGptThreadId,
                                    f = B.F({
                                        text: B.L().trim().min(1)
                                    }).safeParse(b);
                                if (!f.success || null == e) return;
                                let g = a.get(ag.n);
                                if (null == g || g !== q) throw Error("The widget account changed");
                                (0, ah.b)(a, e, {
                                    accountId: g,
                                    label: f.data.text,
                                    instruction: `The user is referring to this in particular:
${f.data.text}`,
                                    disableWebSearch: !1,
                                    targetedReplyText: f.data.text
                                }), (0, ad.e)(e)
                            } : void 0,
                            openConversationOverlay: !0 === d.widget.is_verified_first_party && null != d.request.chatGptThreadId ? async (b, e) => {
                                p(e);
                                let {
                                    openWidgetConversationOverlay: f
                                } = await c.e(179356).then(() => c("ZF7q"));
                                p(e), f(a, b, e, d.access)
                            } : void 0,
                            openPromptInput: !0 === d.widget.is_verified_first_party ? async (b, d, e) => {
                                p(e);
                                let {
                                    openBrowserWidgetPrompt: f
                                } = await c.e(763191).then(() => c("Rcqw"));
                                p(e);
                                let g = await f(a, b, d, e);
                                return p(e), g
                            } : void 0,
                            openInApp: {
                                appName: d.widget.name,
                                baseUrl: x,
                                hideButton: !0 === d.widget.is_verified_first_party,
                                validateUrl: a => {
                                    if (p(), a.includes("\\") || !URL.canParse(a, x ?? window.location.origin)) return null;
                                    let b = new URL(a, x ?? window.location.origin);
                                    return ("https:" === b.protocol || "http:" === b.protocol) && (0, aq.c)(b.href, {
                                        connectDomains: d.widget.csp?.connect_domains
                                    }, d.widget.domain) ? b.href : null
                                }
                            },
                            openExternal: (b, c) => (async function(a, b, c, d, e, f) {
                                e(d);
                                let g = ap.b.safeParse(c);
                                if (g.success) return !0 === b.widget.is_verified_first_party && (await f?.(g.data.href, d), e(d)), !0;
                                let {
                                    href: h,
                                    redirectUrl: i,
                                    openMode: j
                                } = as.parse(c);
                                if (/^data:/i.test(h)) {
                                    if (h.length > 0x1000000) throw Error("CSV export is too large");
                                    let c = h.indexOf(","),
                                        f = decodeURIComponent(h.slice(c + 1)),
                                        g = new Blob([/;base64$/i.test(h.slice(0, c)) ? (0, an.a)(f) : f], {
                                            type: "text/csv;charset=utf-8"
                                        });
                                    if (g.size > 8388608) throw Error("CSV export is too large");
                                    return at(a, b, "data:text/csv", "tab"), (0, al.f)(a, aj.ExternalLinkConfirmationDialog, {
                                        href: h,
                                        downloadFilename: "export.csv",
                                        initiator: "mcp_app_resource",
                                        signal: d,
                                        onDownload: () => {
                                            try {
                                                e(d)
                                            } catch {
                                                return
                                            }(0, af.a)(g, "export.csv")
                                        }
                                    }), !0
                                }
                                if (null == j && b.mcpAppHostAdapter.onOpenLink?.(h)) return !0;
                                if (/^codex(?:-dev)?:/.test(h)) return !1;
                                let k = !0 === b.widget.is_verified_first_party;
                                if (k && null == j && await f?.(h, d)) return !0;
                                e(d);
                                let l = b.widget.csp?.redirect_domains?.length ? b.widget.csp.redirect_domains : b.redirectDomains,
                                    m = (0, aq.c)(h, {
                                        connectDomains: b.widget.csp?.connect_domains
                                    }, b.widget.domain) || (0, aq.b)(h, l),
                                    n = !/^https?:/.test(h);
                                if (n && !m) throw Error("The app has not declared this external protocol");
                                let o = new URL(h),
                                    p = !n && o.origin === window.location.origin;
                                o.search = "", o.hash = "";
                                let q = a.get(R.j, b.request.chatGptThreadId ?? null);
                                at(a, b, o.href, j);
                                let r = h;
                                m && !p && !1 !== i && (null != q || null == b.request.chatGptThreadId) && (r = function(a, b) {
                                    let c;
                                    if (!b) return a;
                                    let d = a.startsWith("http://") || a.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(a);
                                    try {
                                        c = new URL(a)
                                    } catch {
                                        return a
                                    }
                                    return !d || c.searchParams.get(ar) ? a : (c.searchParams.set(ar, b), c.toString())
                                }(h, null == q ? window.location.href : new URL(`/c/${encodeURIComponent(q)}`, window.location.origin).href));
                                let s = p || m;
                                if (!s && k) try {
                                    b.access.assertActive();
                                    let {
                                        accountId: a
                                    } = b.access;
                                    s = (await ao.Request.safePost("/ecosystem/url_safe", {
                                        requestBody: {
                                            url: h,
                                            resolved_pineapple_uri: b.request.appUri
                                        },
                                        additionalHeaders: null == a ? void 0 : {
                                            "ChatGPT-Account-ID": a
                                        },
                                        signal: d
                                    })).safe
                                } catch {}
                                e(d);
                                let t = "Apple Computer, Inc." === navigator.vendor,
                                    u = () => {
                                        try {
                                            e(d)
                                        } catch {
                                            return
                                        }
                                        n ? window.open(r, "_blank", "noopener,noreferrer") : k && "popup" === j && s && !t ? (0, am.a)(a, r) : (0, ak.f)({
                                            href: r,
                                            initiator: "mcp_app_resource"
                                        })
                                    };
                                return !s || t || n ? (0, al.f)(a, aj.ExternalLinkConfirmationDialog, {
                                    href: r,
                                    initiator: "mcp_app_resource",
                                    showCopyLink: !s,
                                    signal: d,
                                    onOpen: u
                                }) : u(), !0
                            })(a, d, b, c, p, e),
                            autofill: A && null != y && null != q && null != r ? async (b, e) => {
                                p(e);
                                let {
                                    createBrowserWidgetAutofill: f
                                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(108257)]).then(() => c("JFC7"));
                                return p(e), f(a, d, y, b, e)
                            } : void 0,
                            sandboxFeatures: [...u],
                            instrumentation: (h = d.distributionChannel ?? (!0 === d.widget.is_verified_first_party ? "openai" : "external"), i = "connectorId" in d.access.serverIdentity ? d.access.serverIdentity.connectorId : d.request.appUri, j = {
                                ...(0, aB.a)(d.access, d.analyticsContext),
                                attributionId: i,
                                messageId: d.request.sourceMessageId,
                                suggestionMessageId: d.suggestionMessageId,
                                distributionChannel: ({
                                    only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                    openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                    external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                })[h],
                                host: "chatgpt"
                            }, k = {
                                attribution_id: i,
                                name: d.request.template,
                                client_type: "chatgpt-web"
                            }, {
                                sendInstrument(b, c) {
                                    let e = aD.safeParse(b);
                                    if (!e.success) return;
                                    let f = e.data;
                                    if ("event" === f.type) return void(0, C.a)(a, az.a, {
                                        eventName: f.label,
                                        eventData: JSON.stringify({
                                            ...f.payload,
                                            ...k,
                                            conversation_id: a.get(R.j, d.request.chatGptThreadId),
                                            message_id: d.request.sourceMessageId ?? null,
                                            suggestion_message_id: d.suggestionMessageId ?? null,
                                            distribution_channel: h,
                                            host: "chatgpt"
                                        })
                                    });
                                    if ("error" === f.type) {
                                        "only_me" !== h && a.get(aA.a).count("ecosystem", "app.error", k);
                                        return
                                    }
                                    let g = {
                                        ...Object.fromEntries(f.tags?.map(a => {
                                            let {
                                                key: b,
                                                value: c
                                            } = a;
                                            return [b, c]
                                        }) ?? []),
                                        ...k
                                    };
                                    "interaction" === f.type ? ((0, C.a)(a, ay.l, {
                                        ...j,
                                        ...c,
                                        conversationId: a.get(R.j, d.request.chatGptThreadId) ?? void 0,
                                        actionType: (0, aB.b)(f.label)
                                    }), "only_me" !== h && a.get(aA.a).count("ecosystem", {
                                        copy: "app.copy",
                                        click: "app.interaction_click",
                                        scroll: "app.interaction_scroll"
                                    } [f.label] ?? "app.interaction", g)) : "only_me" !== h && ("count" === f.type ? a.get(aA.a).count("ecosystem", f.label, g, f.count) : a.get(aA.a).hist("ecosystem", f.label, g, f.value))
                                },
                                notifySecurityPolicyViolation(b) {
                                    let c = B.F({
                                        effectiveDirective: B.L().regex(/^[a-z-]+$/)
                                    }).safeParse(b);
                                    c.success && ((0, C.a)(a, ay.k, {
                                        ...j,
                                        conversationId: a.get(R.j, d.request.chatGptThreadId) ?? void 0,
                                        effectiveDirective: c.data.effectiveDirective
                                    }), "only_me" !== h && a.get(aA.a).count("ecosystem", "app.security_policy_violation", k))
                                }
                            }),
                            toolInfo: B.F({
                                tool: B.F({
                                    name: B.L(),
                                    input_schema: ab.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
                                })
                            }).transform(a => {
                                let {
                                    tool: b
                                } = a;
                                return {
                                    tool: {
                                        name: b.name,
                                        inputSchema: b.input_schema
                                    }
                                }
                            }).safeParse(d.widget.tool_info).data,
                            device: w,
                            downloadBlob: !0 === d.widget.is_verified_first_party ? (a, b) => {
                                p(b);
                                let {
                                    blob: c,
                                    name: d
                                } = B.F({
                                    blob: B.t(Blob),
                                    name: B.L()
                                }).parse(a);
                                (0, af.a)(c, d)
                            } : void 0,
                            triggerHaptic: (a, b) => {
                                p(b);
                                let {
                                    type: c
                                } = B.F({
                                    type: B.p(["light", "medium", "heavy", "selection", "success", "warning", "error"])
                                }).parse(a);
                                try {
                                    navigator.vibrate?.({
                                        light: 10,
                                        medium: 20,
                                        heavy: 30,
                                        selection: 10,
                                        success: [10, 20, 10],
                                        warning: [20, 30, 20],
                                        error: [30, 20, 30]
                                    } [c])
                                } catch {}
                            },
                            showToast: !0 === d.widget.is_verified_first_party ? b => {
                                p();
                                let {
                                    title: c,
                                    body: d,
                                    level: e
                                } = B.F({
                                    title: B.L(),
                                    body: B.L().optional(),
                                    level: B.p(["warning", "success", "danger"])
                                }).parse(b);
                                a.get(z.f)[e](c, {
                                    description: d?.trim() || void 0,
                                    errorAnalytics: {
                                        toastId: "ecosystem.widget.error"
                                    }
                                })
                            } : void 0,
                            files: null != q && null != r ? (f = {
                                appUri: d.request.appUri,
                                accountId: q,
                                userId: r,
                                assertActive: p
                            }, l = b => {
                                if (b.throwIfAborted(), f.assertActive?.(), a.get(t.f) !== f.accountId || a.get(t.k) !== f.userId) throw Error("The widget account has changed")
                            }, m = {
                                additionalHeaders: {
                                    "ChatGPT-Account-ID": f.accountId
                                },
                                expectedIdentity: {
                                    accountId: f.accountId,
                                    userId: f.userId
                                }
                            }, {
                                async uploadFile(a, b, c) {
                                    l(c);
                                    let d = B.t(File).parse(a),
                                        e = B.F({
                                            library: B.j().optional()
                                        }).optional().parse(b),
                                        g = new FormData;
                                    g.append("app_uri", f.appUri), g.append("file", new File([await d.arrayBuffer()], d.name.trim() || "apps-sdk-upload", {
                                        type: d.type || "application/octet-stream",
                                        lastModified: d.lastModified
                                    })), e?.library && g.append("store_in_library", "true"), l(c);
                                    let h = await ao.Request.safePost("/ecosystem/upload_widget_file", {
                                        ...m,
                                        requestBody: g,
                                        signal: c
                                    });
                                    return l(c), {
                                        fileId: h.file_id
                                    }
                                },
                                async getFileDownloadUrl(a, b) {
                                    l(b);
                                    let c = await ao.Request.safePost("/ecosystem/file_download_url", {
                                        ...m,
                                        requestBody: {
                                            app_uri: f.appUri,
                                            file_id: ax.parse(a).fileId
                                        },
                                        signal: b
                                    });
                                    return l(b), {
                                        downloadUrl: c.download_url
                                    }
                                },
                                async getFileMetadata(a, b) {
                                    l(b);
                                    let c = await ao.Request.safePost("/ecosystem/file_metadata", {
                                        ...m,
                                        requestBody: {
                                            app_uri: f.appUri,
                                            file_id: ax.parse(a).fileId
                                        },
                                        signal: b
                                    });
                                    return l(b), {
                                        fileName: c.file_name ?? null,
                                        mimeType: c.mime_type ?? null
                                    }
                                },
                                async selectFiles(b) {
                                    l(b);
                                    let d = a.get(V.g);
                                    if (!(d?.checkGate("224248639", {
                                            disableExposureLog: !0
                                        }) || d?.getLayer("3017902351", {
                                            disableExposureLog: !0
                                        }).get("web_file_library_enabled", !1)) || a.get(ag.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                    let {
                                        selectWidgetLibraryFiles: e
                                    } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(668336)]).then(() => c("NWPZ"));
                                    l(b);
                                    let g = await e(a, b);
                                    if (l(b), 0 === g.length) return [];
                                    let h = await Promise.all(g.map(async a => {
                                        l(b);
                                        let c = null == (0, av.a)(a.id) ? a : await (0, aw.g)({
                                            file_id: a.id,
                                            file_name: a.file_name,
                                            mime_type: a.mime_type
                                        }, {
                                            expectedIdentity: m.expectedIdentity,
                                            signal: b
                                        });
                                        return {
                                            fileId: `sediment://${(0,au.d)(c.file_id)??c.file_id}`,
                                            fileName: c.file_name,
                                            mimeType: c.mime_type ?? null
                                        }
                                    }));
                                    return l(b), await ao.Request.safePost("/ecosystem/file_authorize_app", {
                                        ...m,
                                        requestBody: {
                                            file_ids: h.map(a => a.fileId),
                                            authorized_app_uri: f.appUri
                                        },
                                        signal: b
                                    }), l(b), h
                                }
                            }) : void 0,
                            share: "u" > typeof navigator && "function" == typeof navigator.share ? async (a, b) => {
                                p(b), await navigator.share(B.F({
                                    title: B.L().optional(),
                                    text: B.L().optional(),
                                    url: B.L().optional(),
                                    files: B.g(B.t(File)).optional()
                                }).parse(a))
                            } : void 0,
                            requestConnectSheet: null == o ? void 0 : async (c, d) => {
                                p(d);
                                let e = await (0, ac.requestMcpConnectSheet)(a, {
                                    connectorId: o,
                                    hostId: b,
                                    payload: c,
                                    signal: d,
                                    beforeConnect: async () => (p(d), !0)
                                });
                                return p(d), e
                            },
                            requestLinkToConnector: async (c, d) => {
                                p(d);
                                let e = await (0, ac.requestMcpConnectSheet)(a, {
                                    connectorId: B.F({
                                        connectorId: B.L().min(1)
                                    }).parse(c).connectorId,
                                    hostId: b,
                                    payload: void 0,
                                    signal: d,
                                    beforeConnect: async () => (p(d), !0)
                                });
                                return p(d), e
                            }
                        }
                    }(bq, a1, h, async (a, b) => {
                        if (null == h.toolResult) return !1;
                        let d = bq.get(R.y, h.request.chatGptThreadId);
                        if ("tpp" !== d && "flora" !== d) return !1;
                        let e = await async function() {
                            return (await c.e(174104).then(() => c("WfnZ"))).openWidgetSource
                        }();
                        return b.throwIfAborted(), e(bq, {
                            recipient: bg,
                            WidgetContent: aN,
                            conversationId: aZ,
                            hostId: a1,
                            result: h,
                            mcpAppId: a5,
                            href: a,
                            signal: b
                        })
                    }, "tpp" === l || "flora" === l);
                return {
                    ...k,
                    mcpAppHostAdapter: (b = {
                        ...h.mcpAppHostAdapter,
                        displayMode: bB,
                        ...m,
                        experimentalCapabilities: {
                            ...m.experimentalCapabilities,
                            ...!bh && {
                                "openai/sourceViews": {}
                            }
                        },
                        openFile: by && !bh && null != h.request.sourceMessageId ? (a, b) => (async function(a, b, d, e) {
                            let {
                                chatGptThreadId: f,
                                sourceMessageId: g
                            } = b.request;
                            if (!g) throw (0, T.c)("File opening requires a source message", S.r.MethodNotFound);
                            let h = a.get(R.j, f);
                            if ("current" !== b.access.status(a.get)) throw (0, T.c)("File opening is unavailable for this widget", S.r.MethodNotFound);
                            let {
                                accountId: i,
                                uiUserId: j
                            } = b.access, k = a => "current" !== b.access.status(a.get) || a.get(N.j) || !a.get(Z, f) || a.get(t.f) !== i || a.get(t.k) !== j || a.get(R.j, f) !== h, l = () => {
                                if (e.throwIfAborted(), null == h || k(a)) throw (0, T.c)("File opening is unavailable for this widget", S.r.MethodNotFound)
                            };
                            if (l(), !d.startsWith("/") || d.startsWith("//") || d.includes("\\") || d.includes("\0")) throw (0, T.c)("Cannot open this file path", S.r.InvalidParams);
                            let m = a.get(R.T, f),
                                n = (0, Y.a)(a, f, {
                                    type: "sandbox",
                                    messageId: g,
                                    sandboxPath: d
                                }),
                                {
                                    canOpenChatGptFilePreview: o,
                                    openChatGptFile: p
                                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(264855)]).then(() => c("f2PP"));
                            if (l(), !o({
                                    browserPreview: !0
                                })) throw (0, T.c)("File previews are unavailable in this host", S.r.MethodNotFound);
                            try {
                                await p(a, {
                                    conversationId: h,
                                    fileName: (0, W.j)(d),
                                    gizmoId: m,
                                    target: n,
                                    tabKey: `${g}:${d}`,
                                    browserPreview: !0,
                                    downloadFallback: !1,
                                    isAccessBlocked: k,
                                    signal: e
                                })
                            } catch {
                                throw l(), (0, T.c)("Unable to open file", S.r.InternalError)
                            }
                            l()
                        })(bq, h, a, b) : null,
                        presentation: {
                            isSidebarOpen: null != bE,
                            requestFocusedObject: !0 !== h.widget.is_verified_first_party || bh || null != h.mcpAppHostAdapter.displayMode ? void 0 : async (a, b) => {
                                if (null == h.toolResult) throw Error("This widget has no result yet.");
                                let {
                                    openEcosystemWidgetFocusedObject: c
                                } = await aR();
                                b.throwIfAborted(), h.mcpAppHostAdapter.assertActive?.(), c(bq, {
                                    recipient: bg,
                                    WidgetContent: aN,
                                    WidgetDialog: aJ,
                                    id: bD,
                                    conversationId: aZ,
                                    hostId: a1,
                                    result: h,
                                    payload: a,
                                    signal: b
                                })
                            },
                            requestCloseFocusedObject: !0 === h.widget.is_verified_first_party ? async a => {
                                if (a.throwIfAborted(), h.mcpAppHostAdapter.assertActive?.(), null != h.mcpAppHostAdapter.displayMode && "fullscreen" !== h.mcpAppHostAdapter.displayMode) return void await h.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: b
                                } = await aR();
                                a.throwIfAborted(), h.mcpAppHostAdapter.assertActive?.(), b(bq, bD)
                            } : void 0
                        },
                        requestModal: async (a, b) => {
                            let {
                                requestEcosystemWidgetModal: c
                            } = await aP();
                            b.throwIfAborted(), h.mcpAppHostAdapter.assertActive?.(), await c(bq, {
                                recipient: bg,
                                sourceMcpAppId: a5,
                                WidgetDialog: aJ,
                                WidgetContent: aN,
                                conversationId: aZ,
                                hostId: a1,
                                inDialog: bh,
                                result: h,
                                payload: a,
                                signal: b
                            })
                        },
                        ...bH === F.a ? (0, G.b)(bq, bt, `${bu}${bv}${bw}`, !bh && (null == bB || "inline" === bB) ? h : void 0) : {
                            finance: void 0
                        },
                        ...null != bP && {
                            handleRequest: p.b,
                            requestReconnectConnector: k.isVerifiedFirstParty ? bP : void 0
                        }
                    }, d = h.access.context.connectorTarget, e = h.request.template, f = h.resourceQuery, "codex_apps" !== h.access.context.server || d?.connectorId !== "connector_openai_findata" || null == d.targetId || "connectors://connector_openai_findata" !== h.request.appUri || !/^ui:\/\/companies\/company-page-v[1-9]\d*\.html$/u.test(e) && "ui://findata/citation-viewer-v1.html" !== e && "ui://findata/source-view-v1.html" !== e || (null != h.resource ? 0 === h.resource.contents.length || h.resource.contents.some(a => a.uri !== e) : f?.connectorId !== d.connectorId || f.targetId !== d.targetId || f.template !== e) ? b : {
                        ...b,
                        experimentalCapabilities: {
                            ...b.experimentalCapabilities,
                            "openai/companyPageProviderViews": {}
                        },
                        forwardedRequestMethods: [...b.forwardedRequestMethods ?? [], D],
                        handleRequest(a, c) {
                            for (var d = arguments.length, e = Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
                            if (a.method !== D) return b.handleRequest(a, c, ...e);
                            let g = () => {
                                if (c?.throwIfAborted(), h.access.assertActive(), b.assertActive?.(), b.isAccessRevoked?.(bq.get) === !0) throw Error("The Company Page is no longer available")
                            };
                            g();
                            let i = E.parse(a.params);
                            return (0, C.a)(bq, A.a, i, void 0, void 0, {
                                expectedUserId: h.access.uiUserId ?? void 0,
                                expectedAccountId: h.access.accountId ?? void 0,
                                shouldSend: () => (g(), !0)
                            }), Promise.resolve({})
                        }
                    })
                }
            }, aV[69] = bt, aV[70] = by, aV[71] = bH, aV[72] = aZ, aV[73] = a7, aV[74] = bB, aV[75] = bE, aV[76] = bD, aV[77] = bw, aV[78] = be, aV[79] = a1, aV[80] = bh, aV[81] = bx, aV[82] = a5, aV[83] = bu, aV[84] = bp, aV[85] = bg, aV[86] = bP, aV[87] = bq, aV[88] = bv, aV[89] = $) : $ = aV[89];
            let bQ = $;
            aV[90] !== a7 || aV[91] !== a8 || aV[92] !== br || aV[93] !== bq.query ? (_ = async () => {
                if (null == br) throw Error("Cannot refetch without a resource query");
                a7.access.assertActive();
                let a = await bq.query.fetch(s.a, br);
                return a7.access.assertActive(), (0, q.c)({
                    ...a7,
                    ...a
                }, a8)
            }, aV[90] = a7, aV[91] = a8, aV[92] = br, aV[93] = bq.query, aV[94] = _) : _ = aV[94];
            let bR = _,
                bS = null == br ? void 0 : bR;
            aV[95] !== aZ || aV[96] !== a1 || aV[97] !== a5 || aV[98] !== aY || aV[99] !== bg || aV[100] !== bs.request.chatGptThreadId || aV[101] !== bq ? (ai = () => bq.get(K.h, a5)?.content.toolResult == null ? null : null != aY ? aY : bg?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: bg.get(R.y, bg.value.conversationId)
            } : null != bs.request.chatGptThreadId || aZ.startsWith("chatgpt:") || (0, Q.e)(aZ) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === bq.get(v.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: a1
            }, aV[95] = aZ, aV[96] = a1, aV[97] = a5, aV[98] = aY, aV[99] = bg, aV[100] = bs.request.chatGptThreadId, aV[101] = bq, aV[102] = ai) : ai = aV[102];
            let bT = ai;
            if (bN && null == bP) return null;
            aV[103] !== bl ? (aC = bl ? {
                source: "global"
            } : {}, aV[103] = bl, aV[104] = aC) : aC = aV[104], aV[105] !== bs.analyticsContext || aV[106] !== aC ? (aK = {
                ...bs.analyticsContext,
                ...aC
            }, aV[105] = bs.analyticsContext, aV[106] = aC, aV[107] = aK) : aK = aV[107];
            let bU = bN ? "component" : a4,
                bV = !0 === bs.widget.is_verified_first_party,
                bW = bp ? null : bs.request.template;
            aV[108] !== bG || aV[109] !== bp || aV[110] !== bs.mcpAppHostAdapter.connectorTarget?.targetId || aV[111] !== bs.request.toolName ? (aL = !bp && "connectorId" in bG ? {
                connectorId: bG.connectorId,
                linkId: bs.mcpAppHostAdapter.connectorTarget?.targetId ?? null,
                resourceUri: null,
                appName: null,
                actionName: bs.request.toolName
            } : void 0, aV[108] = bG, aV[109] = bp, aV[110] = bs.mcpAppHostAdapter.connectorTarget?.targetId, aV[111] = bs.request.toolName, aV[112] = aL) : aL = aV[112], aV[113] !== bs.request.toolName || aV[114] !== bV || aV[115] !== bW || aV[116] !== aL ? (aO = {
                widgetSource: "hosted",
                isVerifiedFirstParty: bV,
                originResourceUri: bW,
                originTool: bs.request.toolName,
                appContext: aL
            }, aV[113] = bs.request.toolName, aV[114] = bV, aV[115] = bW, aV[116] = aL, aV[117] = aO) : aO = aV[117];
            let bX = bH === F.a ? bt ?? void 0 : void 0,
                bY = bh ? H.b : bi;
            return aV[118] !== bB || aV[119] !== bh || aV[120] !== bp || aV[121] !== bs || aV[122] !== bq ? (aS = bp || bh || null != bB && "inline" !== bB ? bs.request.viewParams : (0, G.c)(bq, bs), aV[118] = bB, aV[119] = bh, aV[120] = bp, aV[121] = bs, aV[122] = bq, aV[123] = aS) : aS = aV[123], aV[124] !== aZ || aV[125] !== a$ || aV[126] !== bk || aV[127] !== bT || aV[128] !== bQ || aV[129] !== bl || aV[130] !== bn || aV[131] !== a1 || aV[132] !== bm || aV[133] !== bj || aV[134] !== bo || aV[135] !== a_ || aV[136] !== a5 || aV[137] !== bI || aV[138] !== a0 || aV[139] !== bg || aV[140] !== bS || aV[141] !== bA.appIcon || aV[142] !== bA.toolIcon || aV[143] !== bC || aV[144] !== bs.access || aV[145] !== bs.mcpAppHostAdapter || aV[146] !== bs.preferredModelDisplayMode || aV[147] !== bs.request.toolInput || aV[148] !== bs.toolResult || aV[149] !== bs.widgetStatePersistence || aV[150] !== aK || aV[151] !== bU || aV[152] !== aO || aV[153] !== bX || aV[154] !== bY || aV[155] !== aS || aV[156] !== bJ || aV[157] !== bM ? (aT = (0, d.jsx)(J.a, {
                analyticsContext: aK,
                getNewThreadDestination: bT,
                resource: bC,
                legacyPreferredDisplayMode: bs.preferredModelDisplayMode,
                hostDisplayModes: bn,
                recipient: bg,
                conversationId: aZ,
                deepLink: a$,
                pluginId: a0,
                fullSurface: bk,
                hostScroll: bm,
                inheritHostBackground: bo,
                hostId: a1,
                hostedInThreadScrollLayout: bj,
                lifetime: bU,
                access: bs.access,
                mcpAppId: a5,
                initialWidgetState: a_,
                widgetStatePersistence: bs.widgetStatePersistence,
                sourceName: bI,
                getResourceHost: bQ,
                refetchResource: bS,
                mcpAppScope: aO,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: bs.mcpAppHostAdapter,
                plaidAccountId: bX,
                Frame: bY,
                server: "codex_apps",
                appIcon: bA.appIcon,
                toolIcon: bA.toolIcon,
                sidePanelTitle: bJ,
                title: bJ,
                globalSurface: bl,
                toolArguments: bs.request.toolInput,
                toolResult: bs.toolResult,
                ...bM,
                viewParamsOverride: aS
            }), aV[124] = aZ, aV[125] = a$, aV[126] = bk, aV[127] = bT, aV[128] = bQ, aV[129] = bl, aV[130] = bn, aV[131] = a1, aV[132] = bm, aV[133] = bj, aV[134] = bo, aV[135] = a_, aV[136] = a5, aV[137] = bI, aV[138] = a0, aV[139] = bg, aV[140] = bS, aV[141] = bA.appIcon, aV[142] = bA.toolIcon, aV[143] = bC, aV[144] = bs.access, aV[145] = bs.mcpAppHostAdapter, aV[146] = bs.preferredModelDisplayMode, aV[147] = bs.request.toolInput, aV[148] = bs.toolResult, aV[149] = bs.widgetStatePersistence, aV[150] = aK, aV[151] = bU, aV[152] = aO, aV[153] = bX, aV[154] = bY, aV[155] = aS, aV[156] = bJ, aV[157] = bM, aV[158] = aT) : aT = aV[158], aV[159] !== aX || aV[160] !== aT ? (aU = (0, d.jsxs)(d.Fragment, {
                children: [aT, aX]
            }), aV[159] = aX, aV[160] = aT, aV[161] = aU) : aU = aV[161], aU
        }
        async function aP() {
            return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(117976)]).then(() => c("IQhm"))
        }
        let aQ = (0, k.f)({
            appTitle: {
                id: "chatgpt.ecosystemWidget.title",
                defaultMessage: "App"
            },
            openingApp: {
                id: "chatgpt.ecosystemWidget.opening",
                defaultMessage: "Opening app\u2026"
            },
            openAppError: {
                id: "chatgpt.ecosystemWidget.openError",
                defaultMessage: "Couldn\u2019t open app"
            },
            openAppErrorDescription: {
                id: "chatgpt.ecosystemWidget.openErrorDescription",
                defaultMessage: "Try opening the app again"
            }
        });
        async function aR() {
            return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(579403)]).then(() => c("Ia2H"))
        }
    }),
    HUQj: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("MM0V"),
            h = c("T8YV");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(1);
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(g.a, {
                    content: (0, d.jsx)(f.a, {
                        ...h.b.notice
                    }),
                    role: "alert",
                    variant: "callout"
                }), c[0] = b) : b = c[0], b
            }
        })
    }),
    lax3: (function(a, b, c) {
        var d = c("Q840"),
            e = c("AuIy"),
            f = c("P61R"),
            g = c("OiCI"),
            h = c("Cslg"),
            i = c("Yshm"),
            j = c("OWtl"),
            k = c("Mwld"),
            l = c("CKur"),
            m = c("dQRk"),
            n = c("hx97"),
            o = c("SfL3"),
            p = c("jAnS"),
            q = c("mKTJ");
        let r = (0, d.u)(j.a, () => null),
            s = (0, d.d)(j.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (null == a) return !1;
                let {
                    conversationId: d,
                    messageId: f
                } = a, g = c(m.N, d);
                return null != g && function(a, b) {
                    let c = (0, e.a)(a),
                        d = c.findIndex(a => (0, e.g)(a) === b);
                    if (d < 0) return !0;
                    let f = a => (0, n.p)(a) && a.metadata?.is_visually_hidden_from_conversation !== !0,
                        g = c.findLast(f),
                        h = c.slice(0, d + 1).findLast(f);
                    if (g === h && c.findLast(n.p)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
                    let i = (0, k.a)(c).get(b);
                    return null != i ? !i : null != g && null != h && g !== h
                }({
                    mapping: g,
                    current_node: c(m.C, d)
                }, f)
            });

        function t(a) {
            let b = a.metadata.attribution_id;
            return "internal://plugin-management-suggestions" === a.metadata.html_asset_pointer && "openai" === a.metadata.distribution_channel && b === f.a && a.metadata.resolved_pineapple_uri === `connectors://${b}` && !0 !== a.toolResult.isError
        }
        c.d(b, {}, {
            a: r,
            b: t,
            c: s,
            recordPluginSuggestionInstallation: async function(a, b) {
                let c = (0, p.d)(a),
                    d = () => a.get(g.b) === b.accountId && a.get(h.k) === b.userId;
                if (!d()) return !1;
                if (null == a.get(m.N, b.conversationId)) try {
                    await a.query.fetch(l.chatGptConversationQueryById$, b.conversationId)
                } catch {
                    return !1
                }
                if (!d() || null != a.get(m.bb, b.conversationId)) return !1;
                let e = a.get(m.N, b.conversationId),
                    f = e?.[b.messageId]?.message,
                    j = null == f ? null : (0, q.d)(f, void 0);
                if (null == e || null == j || !t(j)) return !1;
                let k = i.e.safeParse(j.toolResult.structuredContent).data?.suggestions.find(a => a.plugin_id === b.pluginId),
                    n = (0, o.c)(a, b.conversationId, b.messageId, j.metadata),
                    u = i.d.safeParse(n?.getState(a) ?? {});
                if (null == k || null == n || !u.success) return !1;
                if (u.data.connectedPluginIds?.includes(b.pluginId)) return !0;
                let v = {
                        ...u.data,
                        connectedPluginIds: [...u.data.connectedPluginIds ?? [], b.pluginId]
                    },
                    w = await n.save(v, !0, {
                        optimistic: !1
                    });
                return !!d() && !!w.ok && n.getState(a) === v && ((0, p.d)(a) === c && (0, l.A)(a, b.conversationId) && null == a.get(m.bb, b.conversationId) && !a.get(s, {
                    conversationId: b.conversationId,
                    messageId: b.messageId
                }) && a.set(r, {
                    ...b,
                    navigationVisit: c
                }), !0)
            }
        })
    }),
    Igop: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("Sbyb"),
            f = c("SGsN"),
            g = c("svjy"),
            h = c("eShZ"),
            i = c("T8YV");
        let j = d.F({
            isError: d.z(!0),
            _meta: d.F({
                "openai/tool_error_kind": d.z("connector_auth_required"),
                "openai/connector_auth": d.F({
                    connector_id: d.L().min(1),
                    link_id: d.L().min(1).nullish(),
                    auth_reason: d.p(["missing_link", "oauth_upgrade_required", "reauthentication_required"]).nullish(),
                    requested_scopes: d.g(d.L()).nullish()
                })
            })
        });
        c.d(b, {}, {
            a: async function(a, b, c, d, k, l, m, n, o) {
                let p;
                if (null == l) throw Error("Widget requests require an active frame");
                let q = () => {
                        let b = a.get(g.a).formatMessage(i.b.notice);
                        return a.get(f.f).danger(b, {
                            id: i.a,
                            errorAnalytics: {
                                toastId: "ecosystem.widget.networkDenied"
                            }
                        }), b
                    },
                    r = () => ({
                        isError: !0,
                        content: [{
                            type: "text",
                            text: q()
                        }],
                        structuredContent: {
                            error_code: i.a
                        },
                        _meta: {
                            "openai/tool_error_kind": i.a
                        }
                    }),
                    s = async a => {
                        let b;
                        m(l);
                        try {
                            b = await c.handleRequest(a, l, n, o)
                        } catch (b) {
                            if (m(l), !(0, i.d)(b)) throw b;
                            if ("tools/call" === a.method) return r();
                            throw new h.FetchError(q(), 403, i.a)
                        }
                        return (m(l), "tools/call" === a.method && !0 === b.isError && b._meta?.["openai/tool_error_kind"] === i.a) ? r() : b
                    }, t = await s(k);
                if (null != c.olympic || "tools/call" !== k.method || "string" != typeof k.params?.name) return t;
                let u = j.safeParse(t);
                if (!u.success || !("connectorId" in d.serverIdentity)) return t;
                let v = u.data._meta["openai/connector_auth"],
                    w = c.connectorTarget;
                if (null == w || w.connectorId !== d.serverIdentity.connectorId) return t;
                let x = k.params.name.startsWith("/") ? k.params.name.split("/").filter(Boolean) : [k.params.name],
                    y = x.at(-1),
                    z = k.params._meta,
                    A = w.targetId ?? z?.["openai/link_id"] ?? (3 === x.length ? x[1] : void 0);
                if (null == y || 0 === y.length || x.length > 3 || v.connector_id !== w.connectorId || z?.["openai/connector_id"] != null && z["openai/connector_id"] !== v.connector_id || z?.["openai/action_name"] != null && z["openai/action_name"] !== y || null != A && A !== v.link_id) return t;
                try {
                    p = await (0, e.requestMcpConnectSheet)(a, {
                        connectorId: v.connector_id,
                        hostId: b,
                        signal: l,
                        payload: {
                            requireAuth: !0,
                            reauthLinkId: v.link_id ?? void 0,
                            authReason: v.auth_reason ?? "missing_link",
                            requestedScopes: v.requested_scopes ?? void 0
                        },
                        beforeConnect: async () => (m(l), !0)
                    })
                } catch {
                    return m(l), t
                }
                return (m(l), p.didConnect && p.linkId && (null == v.link_id || p.linkId === v.link_id)) ? s({
                    ...k,
                    params: {
                        ...k.params,
                        name: y,
                        _meta: {
                            ...k.params._meta,
                            "openai/connector_id": v.connector_id,
                            "openai/action_name": y,
                            "openai/link_id": p.linkId
                        }
                    }
                }) : t
            }
        })
    }),
    VV1g: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.F({
            href: d.L().refine(f)
        });

        function f(a) {
            return /^mcp-citation:/iu.test(a.trimStart()) || URL.parse(a)?.protocol === "mcp-citation:"
        }
        c.d(b, {}, {
            a: f,
            b: e,
            c: function(a) {
                if (!/^mcp-citation:/iu.test(a)) return null;
                try {
                    let b = a.slice(13),
                        c = decodeURIComponent(b);
                    return c.length > 0 && c.length <= 16384 && c.trim() === c && !/[\u0000-\u001f\u007f]/u.test(c) && encodeURIComponent(c) === b ? c : null
                } catch {
                    return null
                }
            }
        })
    }),
    aRhc: (function(a, b, c) {
        let d = new Set(["http:", "https:"]),
            e = {
                "http:": 80,
                "https:": 443,
                "ws:": 80,
                "wss:": 443
            };

        function f(a, b) {
            if (!a) return !1;
            let c = g(a);
            if (!c) return !1;
            let d = c.url;
            return !d.username && !d.password && !!b?.length && b.some(a => {
                let b = h(a);
                if (!b) return !1;
                if ("scheme" === b.kind) return d.protocol === b.scheme;
                if (b.scheme) {
                    var c, f;
                    return d.protocol === b.scheme && (c = d.hostname, f = b.host, b.wildcard ? !!j(c, f) : i(c) === i(f)) && !! function(a, b) {
                        if ("*" === b.port) return !0;
                        let c = a.port ? Number(a.port) : e[a.protocol] ?? null;
                        return b.portExplicit ? "number" == typeof b.port && c === b.port : c === (e[a.protocol] ?? null)
                    }(d, b)
                }
                return !!j(d.hostname, b.host)
            })
        }

        function g(a) {
            if (!a) return null;
            let b = a.trim();
            if (!b || b.includes("\\")) return null;
            try {
                return {
                    url: new URL(b)
                }
            } catch {
                if (!/^[a-z][a-z0-9+.-]*:/.test(b)) try {
                    let a = b.startsWith("//") ? `https:${b}` : `https://${b}`;
                    return {
                        url: new URL(a)
                    }
                } catch {}
                return null
            }
        }

        function h(a) {
            let b = a.trim();
            if (!b) return null;
            let c = /^([a-z][a-z0-9+.-]*):$/i.exec(b);
            if (c) return {
                kind: "scheme",
                scheme: `${c[1].toLowerCase()}:`
            };
            let d = /^([a-z][a-z0-9+.-]*):\/\/$/i.exec(b);
            if (d) return {
                kind: "scheme",
                scheme: `${d[1].toLowerCase()}:`
            };
            let e = /^(?:([a-z][a-z0-9+.+-]*):\/\/)?(\*|\*\.[^/:]+|[^/:]+)(?::(\*|\d+))?(\/.*)?$/i.exec(b);
            if (!e) return null;
            let f = e[1] ? `${e[1].toLowerCase()}:` : void 0,
                g = e[2],
                h = e[3] ?? null,
                i = e[4] ?? null,
                j = g.startsWith("*."),
                k = (j ? g.slice(2) : g).toLowerCase().replace(/\.$/, ""),
                l = null,
                m = !1;
            return null != h && (m = !0, "*" !== (l = "*" === h ? "*" : Number(h)) && (!Number.isFinite(l) || l < 0)) ? null : {
                kind: "host",
                scheme: f,
                host: k,
                wildcard: j,
                portExplicit: m,
                port: l,
                path: i
            }
        }

        function i(a) {
            return a.toLowerCase().replace(/\.$/, "")
        }

        function j(a, b) {
            let c = i(a),
                d = i(b);
            return c === d || c.endsWith("." + d)
        }
        c.d(b, {}, {
            a: function(a) {
                let b = g(a ?? void 0);
                if (b && d.has(b.url.protocol) && !b.url.hostname.includes("*")) return b.url.toString();
                if (!a) return null;
                let c = h(a);
                return c && "scheme" !== c.kind ? (function(a) {
                    let b = a.scheme ?? "https:";
                    if (!d.has(b) || !a.host) return null;
                    let c = "number" == typeof a.port ? `:${a.port}` : "",
                        e = a.path ?? "";
                    try {
                        return new URL(`${b}//${a.host}${c}${e}`)
                    } catch {
                        return null
                    }
                })(c)?.toString() ?? null : null
            },
            b: f,
            c: function(a, b, c) {
                let d = [];
                b?.connectDomains?.length && d.push(...b.connectDomains);
                let e = c?.trim();
                return e && d.push(e), f(a, d)
            }
        })
    }),
    vcrj: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("JNtf");
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, j = (0, e.c)(16),
                    {
                        children: k,
                        heightHint: l,
                        widthHint: m,
                        allowsInteractiveDismissal: n,
                        onClose: o,
                        "aria-label": p
                    } = a,
                    q = !1 === n;
                return j[0] !== l ? (b = null == l ? void 0 : {
                    height: l
                }, j[0] = l, j[1] = b) : b = j[1], j[2] !== n ? (c = a => {
                    !1 === n && a.preventDefault()
                }, j[2] = n, j[3] = c) : c = j[3], j[4] !== p || j[5] !== b || j[6] !== c ? (g = {
                    "aria-label": p,
                    style: b,
                    onEscapeKeyDown: c
                }, j[4] = p, j[5] = b, j[6] = c, j[7] = g) : g = j[7], j[8] !== o ? (h = a => {
                    a || o()
                }, j[8] = o, j[9] = h) : h = j[9], j[10] !== k || j[11] !== q || j[12] !== g || j[13] !== h || j[14] !== m ? (i = (0, d.jsx)(f.a, {
                    open: !0,
                    size: "appLauncher",
                    widthHint: m,
                    dialogCloseClassName: "z-10",
                    shouldIgnoreClickOutside: q,
                    contentProps: g,
                    onOpenChange: h,
                    children: k
                }), j[10] = k, j[11] = q, j[12] = g, j[13] = h, j[14] = m, j[15] = i) : i = j[15], i
            }
        })
    }),
    JHD7: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("v7qY"),
            h = c("FgVF"),
            i = c("EAcR"),
            j = c("qwxA");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m, n, o, p, q, r, s = (0, e.c)(20);
                s[0] !== a ? ({
                    children: b,
                    className: c,
                    contentContainer: k,
                    contentOverride: l,
                    ...m
                } = a, s[0] = a, s[1] = b, s[2] = c, s[3] = k, s[4] = l, s[5] = m) : (b = s[1], c = s[2], k = s[3], l = s[4], m = s[5]), s[6] !== m ? (n = (0, d.jsx)(i.a, {
                    ...m
                }), s[6] = m, s[7] = n) : n = s[7];
                let t = n;
                s[8] !== k || s[9] !== t ? (o = null == k ? t : (0, g.createPortal)(t, k), s[8] = k, s[9] = t, s[10] = o) : o = s[10];
                let u = o;
                s[11] !== c ? (p = (0, f.b)("relative h-full min-h-0", c), s[11] = c, s[12] = p) : p = s[12], s[13] !== m.mcpAppId ? (q = (0, d.jsx)(j.b, {
                    isInlineRequested: !0,
                    mcpAppId: m.mcpAppId
                }), s[13] = m.mcpAppId, s[14] = q) : q = s[14];
                let v = void 0 === l ? u : l;
                return s[15] !== b || s[16] !== p || s[17] !== q || s[18] !== v ? (r = (0, d.jsxs)(h.a, {
                    className: p,
                    children: [q, b, v]
                }), s[15] = b, s[16] = p, s[17] = q, s[18] = v, s[19] = r) : r = s[19], r
            }
        })
    }),
    So8L: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("Sm6l"),
            j = c("FrrB"),
            k = c("Cv9y");
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n = (0, e.c)(18),
                    {
                        actions: o,
                        description: p,
                        illustration: q,
                        title: r,
                        isLoading: s,
                        onRetry: t
                    } = a,
                    [u, v] = (0, f.useState)(!1),
                    w = (0, g.a)();
                n[0] !== w || n[1] !== s || n[2] !== r ? (b = s ? w.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
                }) : r ?? w.formatMessage({
                    id: "openaiMcpCapabilities.unavailable.title",
                    defaultMessage: "App unavailable"
                }), n[0] = w, n[1] = s, n[2] = r, n[3] = b) : b = n[3];
                let x = b;
                n[4] !== u ? (c = u ? (0, d.jsx)(h.a, {
                    id: "openaiMcpCapabilities.unavailable.retryFailed",
                    defaultMessage: "The app is still unavailable after retrying"
                }) : (0, d.jsx)(h.a, {
                    id: "openaiMcpCapabilities.unavailable.description",
                    defaultMessage: "Try again to load the app"
                }), n[4] = u, n[5] = c) : c = n[5];
                let y = c;
                return n[6] !== o || n[7] !== p || n[8] !== y || n[9] !== u || n[10] !== q || n[11] !== s || n[12] !== t || n[13] !== x ? (l = s ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)("span", {
                        className: "sr-only",
                        children: x
                    }), (0, d.jsx)(k.a, {
                        fullSurface: !0,
                        height: "100%",
                        showLoadingStatus: !1
                    })]
                }) : (0, d.jsx)("div", {
                    className: "flex h-full min-h-0 items-center justify-center select-none",
                    children: (0, d.jsx)(j.a, {
                        title: x,
                        illustration: q,
                        description: void 0 === p ? y : p,
                        actions: o ?? (!u && (0, d.jsx)(i.a, {
                            color: "secondary",
                            onClick: () => {
                                v(!0), t()
                            },
                            children: (0, d.jsx)(h.a, {
                                id: "openaiMcpCapabilities.unavailable.retry",
                                defaultMessage: "Retry"
                            })
                        }))
                    })
                }), n[6] = o, n[7] = p, n[8] = y, n[9] = u, n[10] = q, n[11] = s, n[12] = t, n[13] = x, n[14] = l) : l = n[14], n[15] !== x || n[16] !== l ? (m = (0, d.jsx)("div", {
                    className: "relative h-full min-h-0",
                    role: "status",
                    "aria-label": x,
                    children: l
                }), n[15] = x, n[16] = l, n[17] = m) : m = n[17], m
            }
        })
    }),
    DSZZ: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("Cslg"),
            g = c("nlNF"),
            h = c("OWtl"),
            i = c("ADAj");
        let j = (0, d.u)(h.a, () => null);
        c.d(b, {}, {
            a: j,
            b: function(a, b) {
                let c = a.get(f.f),
                    d = a.get(f.j),
                    h = a.get(g.e);
                return null != c && null != d && (0, i.b)(a.get, e.yf.showEducationalTips) ? () => {
                    c === a.get(f.f) && d === a.get(f.j) && h === a.get(g.e) && a.set(j, {
                        accountId: c,
                        conversationId: b,
                        navigationVisit: h,
                        userId: d
                    })
                } : null
            }
        })
    })
};