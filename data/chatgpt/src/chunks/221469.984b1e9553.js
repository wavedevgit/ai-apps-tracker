export const __rspack_esm_ids = [221469];
export const __webpack_modules__ = {
    esFf: (function(e, t, r) {
        r.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.BasispointsCompanyPageProviderViewed"
            }
        })
    }),
    zcdy: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("SZCv"),
            i = r.n(a),
            o = r("Q840"),
            s = r("URlz"),
            l = r("ENcj"),
            c = r("dq5i"),
            d = r("NJrC"),
            u = r("MTYR"),
            p = r("qZWE"),
            g = r("kl6F"),
            h = r("zUz7");

        function m(e) {
            return null != e && "widget" in e && null != e.sandboxOrigin
        }
        let f = (0, o.d)(g.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: a
                } = t, i = a(p.h, r), o = i?.sessionId == null ? null : i.content, s = o?.resource;
                return null != n && null != o && m(s) && s.resourceKey === n ? {
                    widget: s.widget,
                    sandboxOrigin: s.sandboxOrigin
                } : null
            }),
            y = (0, o.d)(g.a, (e, t) => {
                let {
                    retainFrame: r = !0,
                    ...a
                } = e, {
                    get: i
                } = t, o = i(l.a, a), c = r && null == o.data ? i(p.h, a.mcpAppId) : null, d = c?.content, u = d?.resource, g = c?.sessionId != null && null != d && m(u) && null != u.resourceKey && null != u.resourceQuery && (0, n.f)([u.resourceQuery]) === (0, n.f)([a]) && "current" === i(s.c, d.access) ? {
                    widget: u.widget,
                    sandboxOrigin: u.sandboxOrigin,
                    resourceKey: u.resourceKey
                } : void 0, h = o.data ?? g;
                return {
                    ...o,
                    data: null == h ? void 0 : {
                        ...h,
                        resourceQuery: a
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: i()
            });
        r.d(t, {}, {
            a: f,
            b: y,
            c: function(e, t) {
                let {
                    csp: r,
                    height_hint: n,
                    html: a,
                    prefers_border: i
                } = e.widget, o = e.resource ?? {
                    contents: [{
                        _meta: {
                            ui: {
                                permissions: e.widget.permissions
                            },
                            "openai/ui": {
                                availableDisplayModes: e.widget.available_display_modes ?? void 0,
                                preferredDisplayMode: e.widget.preferred_display_mode ?? void 0
                            },
                            "openai/widgetCSP": null == r ? void 0 : {
                                base_uri_domains: r.base_uri_domains ?? [],
                                connect_domains: r.connect_domains ?? [],
                                frame_domains: r.frame_domains ?? [],
                                resource_domains: r.resource_domains ?? []
                            },
                            "openai/widgetHeightHint": n ?? void 0,
                            "openai/widgetMinFrameHeight": 0,
                            "openai/widgetDomain": e.widget.domain ?? void 0,
                            "openai/widgetPrefersBorder": i ?? !1
                        },
                        mimeType: "text/html+skybridge",
                        text: a,
                        uri: e.request.template
                    }]
                }, s = (0, d.b)(o, e.sandboxOrigin);
                if (s?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
                let l = e.widget.inline_frame_padding,
                    p = null == e.resource ? (0, c.a)(e.widget) : (0, c.b)(e.resource);
                return {
                    ...s,
                    sandboxOrigin: e.sandboxOrigin,
                    generatedSandboxOrigin: (0, u.a)(e.access.serverIdentity, p),
                    csp: {
                        ...s.csp,
                        imageDomains: t
                    },
                    inlineFramePadding: null == l ? void 0 : {
                        blockStart: l.block_start,
                        blockEnd: l.block_end,
                        inlineStart: l.inline_start,
                        inlineEnd: l.inline_end
                    },
                    resourceKey: e.resourceKey,
                    resourceQuery: e.resourceQuery,
                    widget: {
                        ...e.widget,
                        sandbox_subdomain: p
                    },
                    toolIcon: (0, h.a)({
                        icons: e.toolIcons
                    }),
                    appIcon: {
                        alt: e.widget.name ?? void 0,
                        logoUrl: e.widget.logo_url,
                        logoDarkUrl: e.widget.logo_url_dark
                    },
                    fitWidth: "modal" !== e.mcpAppHostAdapter.displayMode && !0 === e.widget.fit_width,
                    widthHint: e.widget.width_hint ?? void 0
                }
            },
            d: m
        })
    }),
    thD3: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("Q840"),
            o = r("UKCO"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Sbyb"),
            u = r("BQbE"),
            p = r("brfW"),
            g = r("Sm6l"),
            h = r("So8L"),
            m = r("piij"),
            f = r("OWtl");

        function y() {}
        r.d(t, {}, {
            a: function(e) {
                let t, r, w, v, _, I, b, A, x, q = (0, a.c)(39),
                    {
                        error: C,
                        hostId: T,
                        isLoading: S,
                        onRetry: M
                    } = e,
                    E = (0, i.y)(f.a),
                    j = (0, l.a)(),
                    [k, P] = (0, s.useState)(null),
                    R = C instanceof p.a ? C : null;
                q[0] !== R?.connectorId ? (t = R?.connectorId?.trim() || null, q[0] = R?.connectorId, q[1] = t) : t = q[1];
                let L = t;
                q[2] !== L ? (r = null == L ? [] : [L], q[2] = L, q[3] = r) : r = q[3];
                let N = null != L && !S;
                q[4] !== r || q[5] !== N ? (w = {
                    appIds: r,
                    enabled: N,
                    hostId: o._b
                }, q[4] = r, q[5] = N, q[6] = w) : w = q[6];
                let {
                    data: D
                } = (0, u.c)(w);
                if (q[7] !== D || q[8] !== L || q[9] !== j) {
                    let e = D?.find(e => e.id === L)?.name.trim();
                    v = e ? j.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectNamedApp",
                        defaultMessage: "Connect {appName} to continue"
                    }, {
                        appName: e
                    }) : j.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectDescription",
                        defaultMessage: "Connect the app to continue"
                    }), q[7] = D, q[8] = L, q[9] = j, q[10] = v
                } else v = q[10];
                let F = v,
                    H = R?.reauthLinkId,
                    U = R?.authReason ?? "reauthentication_required",
                    O = R?.requestedScopes;
                q[11] !== k ? (_ = () => () => k?.abort(), q[11] = k, q[12] = _) : _ = q[12], q[13] !== U || q[14] !== k || q[15] !== L || q[16] !== T || q[17] !== H || q[18] !== O ? (I = [k, L, T, H, U, O], q[13] = U, q[14] = k, q[15] = L, q[16] = T, q[17] = H, q[18] = O, q[19] = I) : I = q[19], (0, s.useEffect)(_, I);
                let G = null == L ? void 0 : F;
                q[20] !== L ? (b = null == L ? void 0 : (0, n.jsx)("img", {
                    className: "size-40 object-contain select-none",
                    src: m,
                    alt: "",
                    draggable: !1
                }), q[20] = L, q[21] = b) : b = q[21];
                let W = null == L ? void 0 : null;
                return q[22] !== U || q[23] !== k || q[24] !== L || q[25] !== T || q[26] !== S || q[27] !== M || q[28] !== H || q[29] !== O || q[30] !== E ? (A = null == L ? void 0 : (0, n.jsx)(g.a, {
                    color: "secondary",
                    disabled: null != k || S,
                    loading: null != k || S,
                    onClick: () => {
                        let e = new AbortController;
                        P(e), (0, d.requestMcpConnectSheet)(E, {
                            connectorId: L,
                            hostId: T,
                            oauthPresentation: "popup",
                            payload: null == H ? void 0 : {
                                requireAuth: !0,
                                authReason: U,
                                reauthLinkId: H,
                                requestedScopes: O
                            },
                            signal: e.signal
                        }).then(t => {
                            let {
                                didConnect: r,
                                linkId: n
                            } = t;
                            r && !e.signal.aborted && (null == H || n === H) && M()
                        }).catch(y).finally(() => P(null))
                    },
                    children: (0, n.jsx)(c.a, {
                        id: "openaiMcpCapabilities.unavailable.connect",
                        defaultMessage: "Connect"
                    })
                }), q[22] = U, q[23] = k, q[24] = L, q[25] = T, q[26] = S, q[27] = M, q[28] = H, q[29] = O, q[30] = E, q[31] = A) : A = q[31], q[32] !== S || q[33] !== M || q[34] !== W || q[35] !== A || q[36] !== G || q[37] !== b ? (x = (0, n.jsx)(h.a, {
                    isLoading: S,
                    onRetry: M,
                    title: G,
                    illustration: b,
                    description: W,
                    actions: A
                }), q[32] = S, q[33] = M, q[34] = W, q[35] = A, q[36] = G, q[37] = b, q[38] = x) : x = q[38], x
            }
        })
    }),
    a2hX: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => eH,
            a: () => eU,
            EcosystemWidgetDialog: () => eL
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("Q840"),
            o = r("UKCO"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Qgfj"),
            u = r("rEML"),
            p = r("ZU27"),
            g = r("o6hs"),
            h = r("Ooax"),
            m = r("PrVQ"),
            f = r("zcdy"),
            y = r("uUH7"),
            w = r("ENcj"),
            v = r("Cslg"),
            _ = r("h6fL"),
            I = r("kphc"),
            b = r("WBiY"),
            A = r("JNtf"),
            x = r("RNul"),
            q = r("SGsN"),
            C = r("esFf"),
            T = r("lAQI"),
            S = r("yGJW");
        let M = "openai/analytics/companyPageProviderViewed",
            E = T.K({
                pageViewId: T.T(),
                invocationId: T.T(),
                providerId: T.p(["fiscal", "fmp", "daloopa", "crunchbase", "sec", "quartr"]),
                entrypoint: T.p(["company_card", "company_directory", "unknown"])
            });
        var j = r("PeqE"),
            k = r("s5P0"),
            P = r("QagL"),
            R = r("vcrj"),
            L = r("qwxA"),
            N = r("qZWE"),
            D = r("JHD7"),
            F = r("Sd8U"),
            H = r("tSEg"),
            U = r("f3BX"),
            O = r("thD3"),
            G = r("OOaz"),
            W = r("dQRk"),
            z = r("kSHG"),
            B = r("sS8e"),
            K = r("OWtl"),
            $ = r("OMIV"),
            Q = r("bnxy"),
            V = r("rxj0"),
            Y = r("IDHB");
        let J = (0, i.d)(K.a, (e, t) => {
            let {
                get: r
            } = t, n = r(v.n);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r($.e, "3080374709") || null == e || null == r(W.j, e) || null != r(W.bb, e)) return !1;
            let a = r(W.y, e);
            return ("tpp" === a || "flora" === a) && !r(V.e, e)
        });
        var Z = r("T8YV"),
            X = r("HUQj"),
            ee = r("lax3"),
            et = r("Vjzf"),
            er = r("Sbyb"),
            en = r("jEN2"),
            ea = r("JYRT"),
            ei = r("ripK"),
            eo = r("g2p6"),
            es = r("sWz1"),
            el = r("EA6X"),
            ec = r("g25Y"),
            ed = r("Ot7V"),
            eu = r("X6Vn"),
            ep = r("MefB"),
            eg = r("yI91"),
            eh = r("Kwur"),
            em = r("VV1g"),
            ef = r("aRhc");
        let ey = "redirectUrl",
            ew = T.F({
                href: T.S().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: T.Q([T.L(), T.j()]).optional(),
                openMode: T.p(["tab", "popup"]).optional()
            });

        function ev(e, t, r, n) {
            let a = !0 === t.widget.is_verified_first_party,
                i = e.get(W.j, t.request.chatGptThreadId ?? null);
            (0, S.a)(e, el.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === t.mcpAppHostAdapter.displayMode ? el.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : el.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                linkType: "CHATGPT_LINK_TYPE_WIDGET",
                attributionId: t.attributionId,
                domain: t.widget.domain ?? void 0,
                distributionChannel: t.distributionChannel ?? (a ? "openai" : "external"),
                openMode: a && "popup" === n ? "popup" : "tab",
                widgetSessionId: t.widgetSessionId,
                widgetActionType: "open_external",
                conversationId: i ?? void 0,
                messageId: t.request.sourceMessageId,
                parentContext: {
                    widgetType: t.request.appUri,
                    widgetName: t.request.template
                },
                url: r
            })
        }
        var e_ = r("iqEK"),
            eI = r("UxLW"),
            eb = r("vvmK");
        let eA = T.F({
            fileId: T.L().min(1)
        });
        var ex = r("bTvG"),
            eq = r("JKSp"),
            eC = r("PFjh"),
            eT = r("DXan");
        let eS = {
                label: T.L(),
                tags: T.g(T.F({
                    key: T.L(),
                    value: T.L()
                })).optional()
            },
            eM = T.m("type", [T.F({
                type: T.z("event"),
                label: T.L(),
                payload: T.J(T.L(), T.x()).optional()
            }), T.F({
                type: T.z("interaction"),
                ...eS
            }), T.F({
                type: T.z("count"),
                ...eS,
                count: T.E().optional()
            }), T.F({
                type: T.z("hist"),
                ...eS,
                value: T.E()
            }), T.F({
                type: T.z("error")
            })]);
        var eE = r("Igop"),
            ej = r("DSZZ");
        let ek = "openai/deep-research/report-copy",
            eP = T.m("phase", [T.K({
                phase: T.z("start"),
                id: T.T(),
                length: T.E().int().nonnegative()
            }), T.K({
                phase: T.z("finish"),
                id: T.T(),
                success: T.j()
            })]);
        var eR = r("Gi9o");

        function eL(e) {
            let t, r = (0, a.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(eN, {
                ...e
            }) : (0, n.jsx)(eD, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function eN(e) {
            let t, r = (0, a.c)(3),
                o = (0, i.y)(F.a);
            return r[0] !== e || r[1] !== o ? (t = (0, n.jsx)(eD, {
                ...e,
                recipient: o
            }), r[0] = e, r[1] = o, r[2] = t) : t = r[2], t
        }

        function eD(e) {
            let t, r, d, u, p, g, h, m, f, y, w, v, _ = (0, a.c)(62),
                {
                    recipient: I,
                    conversationId: b,
                    hostId: C,
                    mcpAppId: T,
                    onClose: S,
                    state: M,
                    heightHint: E,
                    widthHint: j,
                    allowsInteractiveDismissal: k
                } = e,
                P = void 0 === I ? null : I,
                L = (0, i.y)(H.a),
                D = (0, l.a)();
            _[0] !== T ? (t = () => T ?? (0, o.zf)(), _[0] = T, _[1] = t) : t = _[1];
            let [F] = (0, s.useState)(t), G = "ready" === M.kind && "modal" === M.result.request.mode ? Math.max(E ?? M.result.widget.height_hint ?? 0, 0) || void 0 : E, W = "ready" === M.kind ? M.result.tracking : M.tracking, z = "ready" === M.kind && "fullscreen" === M.result.request.mode, B = "loading" === M.kind && !0 === M.nonModal;
            _[2] !== S || _[3] !== W ? (r = () => {
                W?.close("user_dismissed"), S()
            }, _[2] = S, _[3] = W, _[4] = r) : r = _[4];
            let K = (0, s.useEffectEvent)(r);
            _[5] !== k || _[6] !== K || _[7] !== B || _[8] !== L ? (d = () => {
                if (B) return L.get(q.f).info((0, n.jsx)(c.a, {
                    ...eG.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(x.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === k ? void 0 : {
                        label: (0, n.jsx)(c.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel"
                        }),
                        onClick: () => K()
                    }
                }).close
            }, _[5] = k, _[6] = K, _[7] = B, _[8] = L, _[9] = d) : d = _[9], _[10] !== k || _[11] !== B || _[12] !== L ? (u = [L, B, k], _[10] = k, _[11] = B, _[12] = L, _[13] = u) : u = _[13], (0, s.useEffect)(d, u), _[14] !== z || _[15] !== S || _[16] !== W ? (p = () => {
                z && (W?.close("user_dismissed"), S())
            }, _[14] = z, _[15] = S, _[16] = W, _[17] = p) : p = _[17];
            let $ = (0, s.useEffectEvent)(p);
            if (_[18] !== $ || _[19] !== F || _[20] !== L || _[21] !== W ? (g = () => {
                    let e = L.watch(e => {
                        let t = e.get(N.t, F);
                        null != t && e.get(N.s, t)?.isOpen === !1 ? $() : (e.get(N.w, F) && W?.renderReady(), null != e.get(N.r, F) && W?.error("widget_render"))
                    });
                    return () => {
                        e(), W?.close("navigation_changed")
                    }
                }, _[18] = $, _[19] = F, _[20] = L, _[21] = W, _[22] = g) : g = _[22], _[23] !== F || _[24] !== L || _[25] !== W ? (h = [L, F, W], _[23] = F, _[24] = L, _[25] = W, _[26] = h) : h = _[26], (0, s.useEffect)(g, h), B) return null;
            if ("ready" === M.kind && z) {
                let e, t;
                return _[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], _[27] = e) : e = _[27], _[28] !== b || _[29] !== C || _[30] !== F || _[31] !== P || _[32] !== M.result ? (t = (0, n.jsx)(eH, {
                    recipient: P,
                    conversationId: b,
                    hostDisplayModes: e,
                    hostId: C,
                    lifetime: "component",
                    mcpAppId: F,
                    result: M.result
                }), _[28] = b, _[29] = C, _[30] = F, _[31] = P, _[32] = M.result, _[33] = t) : t = _[33], t
            }
            if ("error" === M.kind)
                if ((0, Z.d)(M.error)) {
                    let e;
                    _[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                        children: (0, n.jsx)(X.a, {})
                    }), _[34] = e) : e = _[34], m = e
                } else if (M.error instanceof U.a) {
                let e, t;
                _[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.f, {
                    className: "sr-only",
                    children: (0, n.jsx)(c.a, {
                        ...eG.openAppError
                    })
                }), _[35] = e) : e = _[35], _[36] !== C || _[37] !== S || _[38] !== M.error ? (t = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(O.a, {
                        error: M.error,
                        hostId: C,
                        isLoading: !1,
                        onRetry: S
                    })]
                }), _[36] = C, _[37] = S, _[38] = M.error, _[39] = t) : t = _[39], m = t
            } else {
                let e, t;
                _[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.f, {
                    className: "text-lg font-medium",
                    children: (0, n.jsx)(c.a, {
                        ...eG.openAppError
                    })
                }), _[40] = e) : e = _[40], _[41] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                    children: [e, (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(c.a, {
                            ...eG.openAppErrorDescription
                        })
                    })]
                }), _[41] = t) : t = _[41], m = t
            }
            return _[42] !== D ? (f = D.formatMessage(eG.appTitle), _[42] = D, _[43] = f) : f = _[43], _[44] !== S || _[45] !== W ? (y = () => {
                W?.close("user_dismissed"), S()
            }, _[44] = S, _[45] = W, _[46] = y) : y = _[46], _[47] !== b || _[48] !== m || _[49] !== C || _[50] !== F || _[51] !== P || _[52] !== M.kind || _[53] !== M.result ? (w = "loading" === M.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(c.a, {
                    ...eG.openingApp
                })
            }) : "error" === M.kind ? m : (0, n.jsx)(eH, {
                recipient: P,
                conversationId: b,
                hostId: C,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: F,
                result: M.result
            }), _[47] = b, _[48] = m, _[49] = C, _[50] = F, _[51] = P, _[52] = M.kind, _[53] = M.result, _[54] = w) : w = _[54], _[55] !== k || _[56] !== G || _[57] !== y || _[58] !== w || _[59] !== f || _[60] !== j ? (v = (0, n.jsx)(R.a, {
                "aria-label": f,
                heightHint: G,
                widthHint: j,
                allowsInteractiveDismissal: k,
                onClose: y,
                children: w
            }), _[55] = k, _[56] = G, _[57] = y, _[58] = w, _[59] = f, _[60] = j, _[61] = v) : v = _[61], v
        }

        function eF(e, t) {
            let r, n, o = (0, a.c)(6);
            o[0] !== e.resourceKey || o[1] !== t ? (r = {
                mcpAppId: t,
                resourceKey: e.resourceKey
            }, o[0] = e.resourceKey, o[1] = t, o[2] = r) : r = o[2];
            let s = (0, i.x)(f.a, r);
            return o[3] !== e || o[4] !== s ? (n = null == s ? e : {
                ...e,
                ...s
            }, o[3] = e, o[4] = s, o[5] = n) : n = o[5], n
        }

        function eH(e) {
            let t, r, o, s, c, d, u, p, g, h, m, y, w, v, _, I, b = (0, a.c)(43);
            b[0] !== e ? ({
                result: t,
                mcpAppId: r,
                inDialog: s,
                fullSurface: c,
                hostScroll: d,
                hostDisplayModes: u,
                showDialogTitle: p,
                showLoadingStatus: g,
                disableInlineLoadingState: h,
                ...o
            } = e, b[0] = e, b[1] = t, b[2] = r, b[3] = o, b[4] = s, b[5] = c, b[6] = d, b[7] = u, b[8] = p, b[9] = g, b[10] = h) : (t = b[1], r = b[2], o = b[3], s = b[4], c = b[5], d = b[6], u = b[7], p = b[8], g = b[9], h = b[10]);
            let x = void 0 !== s && s,
                q = void 0 === c ? x : c,
                C = void 0 !== d && d,
                T = void 0 === u ? N.d : u,
                S = void 0 === p ? x : p,
                M = void 0 === g || g,
                E = void 0 !== h && h,
                j = (0, l.a)(),
                k = eF(t, r);
            b[11] !== j || b[12] !== k.widget.name ? (m = k.widget.name || j.formatMessage(eG.appTitle), b[11] = j, b[12] = k.widget.name, b[13] = m) : m = b[13];
            let P = m,
                R = k.title || P;
            b[14] !== t || b[15] !== o.imageDomains ? (y = (0, f.c)(t, o.imageDomains), b[14] = t, b[15] = o.imageDomains, b[16] = y) : y = b[16], b[17] !== y ? (w = {
                data: y,
                error: null,
                isLoading: !1
            }, b[17] = y, b[18] = w) : w = b[18];
            let L = w,
                F = (0, i.x)(N.n, r),
                H = x ? "isolate" : void 0,
                U = E || !0 === k.widget.disable_loading_state;
            return b[19] !== S || b[20] !== R ? (v = S ? (0, n.jsx)(A.f, {
                className: "sr-only",
                children: R
            }) : null, b[19] = S, b[20] = R, b[21] = v) : v = b[21], b[22] !== q || b[23] !== T || b[24] !== C || b[25] !== r || b[26] !== P || b[27] !== F || b[28] !== L || b[29] !== M || b[30] !== H || b[31] !== U || b[32] !== v ? (_ = (0, n.jsx)(D.a, {
                className: H,
                showLoadingStatus: M,
                disableInlineLoadingState: U,
                hostDisplayModes: T,
                resource: L,
                fullSurface: q,
                hostScroll: C,
                mcpAppId: r,
                appName: P,
                presentation: F,
                children: v
            }), b[22] = q, b[23] = T, b[24] = C, b[25] = r, b[26] = P, b[27] = F, b[28] = L, b[29] = M, b[30] = H, b[31] = U, b[32] = v, b[33] = _) : _ = b[33], b[34] !== t || b[35] !== q || b[36] !== T || b[37] !== C || b[38] !== x || b[39] !== r || b[40] !== o || b[41] !== _ ? (I = (0, n.jsx)(eU, {
                ...o,
                result: t,
                inDialog: x,
                fullSurface: q,
                hostScroll: C,
                hostDisplayModes: T,
                mcpAppId: r,
                children: _
            }), b[34] = t, b[35] = q, b[36] = T, b[37] = C, b[38] = x, b[39] = r, b[40] = o, b[41] = _, b[42] = I) : I = b[42], I
        }

        function eU(e) {
            let t, c, d, A, x, R, D, F, U, O, K, Z, X, el, eS, eN, eD, eU, ez, eB, eK, e$ = (0, a.c)(162),
                {
                    recipient: eQ,
                    children: eV,
                    newThreadDestination: eY,
                    conversationId: eJ,
                    deepLink: eZ,
                    initialWidgetState: eX,
                    pluginId: e0,
                    hostId: e1,
                    inDialog: e3,
                    Frame: e2,
                    lifetime: e4,
                    mcpAppId: e5,
                    hostedInThreadScrollLayout: e6,
                    result: e8,
                    imageDomains: e7,
                    fullSurface: e9,
                    globalSurface: te,
                    hostScroll: tt,
                    hostDisplayModes: tr,
                    inheritHostBackground: tn,
                    heightHint: ta,
                    readOnlySnapshot: ti
                } = e,
                to = void 0 === eQ ? null : eQ,
                ts = void 0 !== e3 && e3,
                tl = void 0 === e2 ? P.a : e2,
                tc = void 0 !== e6 && e6,
                td = void 0 === e9 ? ts : e9,
                tu = void 0 !== te && te,
                tp = void 0 !== tt && tt,
                tg = void 0 === tr ? N.d : tr,
                th = void 0 !== tn && tn,
                tm = void 0 !== ti && ti,
                tf = (0, i.y)(H.a),
                ty = e8.resourceQuery,
                tw = eF(e8, e5),
                {
                    accountId: tv
                } = (0, _.a)(),
                {
                    pathname: t_,
                    search: tI,
                    hash: tb
                } = (0, u.Z)(),
                tA = (0, l.a)(),
                tx = (0, i.x)(J, tw.request.chatGptThreadId);
            e$[0] !== eJ || e$[1] !== e1 || e$[2] !== ts || e$[3] !== tA || e$[4] !== to || e$[5] !== tw || e$[6] !== tf ? (t = async (e, t) => {
                let r = tf.get(y.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (null != tw.toolResult && r?.id === e && r.restored && r.result?.didConnect && null != n && null == tw.modalOwner && r.hostId === e1 && "current" === tw.access.status(tf.get) && n.accountId === tw.access.accountId && n.userId === tw.access.uiUserId && n.sourceAppUri === tw.request.appUri && n.sourceTemplate === tw.request.template && n.sourceMessageId === tw.request.sourceMessageId && n.sourceThreadId === tw.request.threadId && n.sourceConversationId === tf.get(W.j, tw.request.chatGptThreadId)) {
                    tf.set(y.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eO();
                        t.throwIfAborted(), await e(tf, {
                            recipient: to,
                            conversationId: eJ,
                            hostId: e1,
                            inDialog: ts,
                            result: tw,
                            WidgetDialog: eL,
                            WidgetContent: eH,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tf.get(q.f).danger(tA.formatMessage(eG.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, e$[0] = eJ, e$[1] = e1, e$[2] = ts, e$[3] = tA, e$[4] = to, e$[5] = tw, e$[6] = tf, e$[7] = t) : t = e$[7];
            let tq = (0, s.useEffectEvent)(t);
            e$[8] !== ts || e$[9] !== tq || e$[10] !== tf ? (c = () => {
                if (ts) return;
                let e = new AbortController,
                    t = tf.watch(t => {
                        let {
                            get: r
                        } = t, n = r(y.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tq(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, e$[8] = ts, e$[9] = tq, e$[10] = tf, e$[11] = c) : c = e$[11], e$[12] !== ts || e$[13] !== tw.request.appUri || e$[14] !== tw.request.chatGptThreadId || e$[15] !== tw.request.sourceMessageId || e$[16] !== tw.request.template || e$[17] !== tf ? (d = [tf, ts, tw.request.appUri, tw.request.template, tw.request.sourceMessageId, tw.request.chatGptThreadId], e$[12] = ts, e$[13] = tw.request.appUri, e$[14] = tw.request.chatGptThreadId, e$[15] = tw.request.sourceMessageId, e$[16] = tw.request.template, e$[17] = tf, e$[18] = d) : d = e$[18], (0, s.useEffect)(c, d), e$[19] !== e8 || e$[20] !== e7 ? (A = (0, f.c)(e8, e7), e$[19] = e8, e$[20] = e7, e$[21] = A) : A = e$[21];
            let tC = A,
                tT = tw.mcpAppHostAdapter.displayMode ?? (ts ? "inline" : void 0);
            e$[22] !== tC ? (x = {
                data: tC,
                error: null,
                isLoading: !1
            }, e$[22] = tC, e$[23] = x) : x = e$[23];
            let tS = x,
                tM = `ecosystem-focused:${e5}`,
                tE = (0, i.x)(p.l.tabById$, tM);
            e$[24] !== e5 || e$[25] !== tw || e$[26] !== tf ? (R = async () => {
                if (null == tw.toolResult) return;
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eW();
                e(tf, e5, tw)
            }, e$[24] = e5, e$[25] = tw, e$[26] = tf, e$[27] = R) : R = e$[27];
            let tj = (0, s.useEffectEvent)(R);
            e$[28] !== tj || e$[29] !== tE || e$[30] !== ts || e$[31] !== e5 || e$[32] !== tf ? (D = () => {
                if (null != tE && !ts) return tf.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(N.h, e5) && tj()
                })
            }, e$[28] = tj, e$[29] = tE, e$[30] = ts, e$[31] = e5, e$[32] = tf, e$[33] = D) : D = e$[33], e$[34] !== tE || e$[35] !== ts || e$[36] !== e5 || e$[37] !== tf ? (F = [tf, tE, ts, e5], e$[34] = tE, e$[35] = ts, e$[36] = e5, e$[37] = tf, e$[38] = F) : F = e$[38], (0, s.useEffect)(D, F);
            let tk = tw.access.serverIdentity,
                tP = "connectorId" in tk ? tk.connectorId : null;
            e$[39] !== tA || e$[40] !== tw.widget.name ? (U = tw.widget.name || tA.formatMessage(eG.appTitle), e$[39] = tA, e$[40] = tw.widget.name, e$[41] = U) : U = e$[41];
            let tR = U,
                tL = tw.title || tR,
                {
                    request: tN,
                    toolResult: tD
                } = e8;
            e$[42] !== tD ? (O = null == tD ? void 0 : (0, eR.a)(tD), e$[42] = tD, e$[43] = O) : O = e$[43];
            let tF = O,
                tH = !tm && tN.template === h.a,
                tU = (0, i.z)(tH ? v.j : null);
            tF?.toolCallStatus;
            e: {
                let e, t;
                if (!tH) {
                    K = void 0;
                    break e
                }
                let r = e8.modalOwner?.result ?? e8,
                    n = r.access.serverIdentity;
                if (null == tD || null == r.toolResult || null == tU || !("connectorId" in n) || n.connectorId !== tP || r.request.template !== tN.template || !0 !== e8.widget.is_verified_first_party || !0 === e8.mcpAppHostAdapter.isTombstone || tF?.toolCallStatus != null) {
                    K = void 0;
                    break e
                }
                e$[44] !== e8.mcpAppHostAdapter || e$[45] !== e5 || e$[46] !== tU || e$[47] !== tf ? (e = () => {
                    if (e8.mcpAppHostAdapter.assertActive?.(), tf.get(v.j) !== tU || tf.get(N.h, e5)?.content.mcpAppScope.isVerifiedFirstParty !== !0) throw Error("This widget is no longer active.")
                }, e$[44] = e8.mcpAppHostAdapter, e$[45] = e5, e$[46] = tU, e$[47] = tf, e$[48] = e) : e = e$[48];
                let a = e;
                if (e$[49] !== a || e$[50] !== tP || e$[51] !== e8.access || e$[52] !== e1 || e$[53] !== to || e$[54] !== tU || e$[55] !== tN || e$[56] !== tf || e$[57] !== r.request.chatGptThreadId || e$[58] !== r.request.sourceMessageId || e$[59] !== r.request.toolInput || e$[60] !== r.toolResult) {
                    let e;
                    e$[62] !== tP || e$[63] !== e8.access || e$[64] !== to || e$[65] !== tU || e$[66] !== tN || e$[67] !== tf ? (e = async e => {
                        let {
                            chatGptThreadId: t,
                            sourceMessageId: r
                        } = tN, n = to?.value;
                        if (null == to || n?.kind !== "chatgpt" || null == t || null == r) return;
                        let a = (0, b.getMcpAppSubmit)(to, () => {
                            let e = e => tf.get(W.j, e) ?? e;
                            if (tf.get(v.j) !== tU || e(n.conversationId) !== e(t) || tf.get(H.j) || "current" !== e8.access.status(tf.get) || null != tf.get(W.bb, t) || null == tf.get(W.N, t) || tf.get(ee.c, {
                                    conversationId: t,
                                    messageId: r
                                }) || (0, V.j)(tf, t)) throw new DOMException("The originating request is no longer available", "AbortError")
                        });
                        null != a && await a({
                            turnTrigger: "mcp_app_follow_up",
                            addedFiles: [],
                            fileAttachments: [],
                            ideContext: null,
                            imageAttachments: [],
                            prompt: (0, h.b)(e)
                        }, {
                            name: tN.template,
                            attribution: tP ?? void 0,
                            visuallyHidden: !0
                        })
                    }, e$[62] = tP, e$[63] = e8.access, e$[64] = to, e$[65] = tU, e$[66] = tN, e$[67] = tf, e$[68] = e) : e = e$[68], t = (0, m.a)({
                        scope: tf,
                        hostId: e1,
                        sourceId: JSON.stringify([r.request.chatGptThreadId, r.request.sourceMessageId]),
                        productSku: g.d.shape.productSku.parse(tN.productSku?.toUpperCase()),
                        access: e8.access,
                        resourceUri: tN.template,
                        toolInput: r.request.toolInput,
                        toolResult: (0, eR.a)(r.toolResult).toolResultNotification,
                        assertActive: a,
                        onReconnected: e
                    }), e$[49] = a, e$[50] = tP, e$[51] = e8.access, e$[52] = e1, e$[53] = to, e$[54] = tU, e$[55] = tN, e$[56] = tf, e$[57] = r.request.chatGptThreadId, e$[58] = r.request.sourceMessageId, e$[59] = r.request.toolInput, e$[60] = r.toolResult, e$[61] = t
                } else t = e$[61];K = t
            }
            let tO = K;
            e$[69] !== tv || e$[70] !== tx || e$[71] !== tP || e$[72] !== eJ || e$[73] !== e8 || e$[74] !== tT || e$[75] !== tE || e$[76] !== tM || e$[77] !== tb || e$[78] !== ta || e$[79] !== e1 || e$[80] !== ts || e$[81] !== tA || e$[82] !== e5 || e$[83] !== t_ || e$[84] !== tm || e$[85] !== to || e$[86] !== tO || e$[87] !== tf || e$[88] !== tI ? (Z = e => {
                var t;
                let n, a, i;
                if (!(0, f.d)(e)) throw Error("Expected a hosted widget resource");
                let s = {
                    ...e8,
                    widget: e.widget,
                    sandboxOrigin: e.sandboxOrigin,
                    resourceKey: e.resourceKey
                };
                if (ts) {
                    let e = s.mcpAppHostAdapter;
                    s.mcpAppHostAdapter = {
                        ...e,
                        handleRequest: (t, r, n) => e.handleRequest(t, r, n)
                    }
                }
                null != s.getPluginSuggestions && (s.mcpAppHostAdapter = {
                    ...s.mcpAppHostAdapter,
                    pluginSuggestions: s.getPluginSuggestions(s.widget)
                });
                let l = s.widget.name || tA.formatMessage(eG.appTitle),
                    c = s.title || l,
                    d = {
                        isVerifiedFirstParty: !0 === s.widget.is_verified_first_party,
                        heightHint: ta ?? e.heightHint,
                        minFrameHeight: e.minFrameHeight ?? 0,
                        appIcon: e.appIcon,
                        toolIcon: e.toolIcon,
                        sourceName: l,
                        title: c,
                        sidePanelTitle: c
                    };
                if (tm) return {
                    ...d,
                    mcpAppHostAdapter: s.mcpAppHostAdapter
                };
                let u = tf.get(W.y, s.request.chatGptThreadId),
                    p = function(e, t, n, a) {
                        var i;
                        let s, l, c, d, u, p, g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            h = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : null,
                            m = e => {
                                e?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), n.access.assertActive()
                            };
                        if ("current" !== n.access.status(e.get)) return {};
                        let {
                            accountId: f,
                            uiUserId: y
                        } = n.access, w = function(e, t) {
                            let r = t.access.serverIdentity,
                                n = t.request.chatGptThreadId;
                            if (!0 !== t.widget.is_verified_first_party || !("connectorId" in r) || !["connector_openai_deep_research", "connector_openai_deep_research_workflow"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                            let a = new Map;
                            return (t, r) => {
                                let i = eP.safeParse(t);
                                if (!i.success) return;
                                let o = i.data,
                                    s = a.get(o.id);
                                if (s?.dispose(), !(r.aborted || e.get(W.I, n) || null != e.get(W.bb, n) || e.get(V.e, n)))
                                    if ("start" === o.phase) {
                                        let t = o.length >= 2e3 ? (0, ej.b)(e, n) : null;
                                        if (null != t && a.size < 8) {
                                            let e = () => {
                                                a.delete(o.id), r.removeEventListener("abort", e)
                                            };
                                            r.addEventListener("abort", e, {
                                                once: !0
                                            }), a.set(o.id, {
                                                complete: t,
                                                signal: r,
                                                dispose: e
                                            })
                                        }
                                    } else o.success && !s?.signal.aborted && s?.complete()
                            }
                        }(e, n), _ = new Set(["fullscreen"]);
                        if (!0 === n.widget.is_verified_first_party)
                            for (let e of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) _.add(e);
                        for (let e of o.hj) n.widget.permissions?.[e] === !0 && _.add(o.gj[e].feature);
                        n.widget.permissions?.clipboard_write === !0 && _.add("clipboard-write");
                        let I = navigator.userAgent,
                            b = {
                                os: "unknown",
                                type: "desktop"
                            };
                        /iPad|iPhone|iPod/.test(I) ? (b.os = "ios", b.type = "mobile") : /Android/.test(I) ? (b.os = "android", b.type = "mobile") : /Windows[ _]NT/.test(I) ? b.os = "windows" : I.includes("Mac OS X") && (b.os = "macos"), "mobile" !== b.type && /Tablet/.test(I) && (b.type = "tablet");
                        let A = (0, ef.a)(n.widget.domain),
                            x = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                            C = null != x && Object.values(e.get(ea.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === x);
                        return {
                            experimentalCapabilities: {
                                ...n.mcpAppHostAdapter.experimentalCapabilities,
                                ...g && !0 === n.widget.is_verified_first_party && null != a && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                    "openai/sourceCitationLinks": {}
                                } : {}
                            },
                            requestCheckout: async (t, a) => {
                                m(a);
                                let {
                                    loadWidgetCheckout: i
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629)]).then(r.bind(r, "IKJx")), o = await i();
                                return m(a), o(e, n, t, a, () => m(a))
                            },
                            forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == w ? [] : [ek]],
                            handleRequest: async (r, a, i, o) => null != w && r.method === ek ? (m(a), null != a && w(r.params, a), {}) : (0, eE.a)(e, t, n.mcpAppHostAdapter, n.access, r, a, m, i, o),
                            setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                if (m(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                let a = n.request.chatGptThreadId,
                                    i = T.F({
                                        text: T.L().trim().min(1)
                                    }).safeParse(t);
                                if (!i.success || null == a) return;
                                let o = e.get(eo.n);
                                if (null == o || o !== f) throw Error("The widget account changed");
                                (0, es.b)(e, a, {
                                    accountId: o,
                                    label: i.data.text,
                                    instruction: `The user is referring to this in particular:
${i.data.text}`,
                                    disableWebSearch: !1,
                                    targetedReplyText: i.data.text
                                }), (0, en.e)(a)
                            } : void 0,
                            openConversationOverlay: !0 === n.widget.is_verified_first_party && null != n.request.chatGptThreadId ? async (t, a) => {
                                m(a);
                                let {
                                    openWidgetConversationOverlay: i
                                } = await r.e(179356).then(r.bind(r, "ZF7q"));
                                m(a), i(e, t, a, n.access)
                            } : void 0,
                            openPromptInput: !0 === n.widget.is_verified_first_party ? async (t, n, a) => {
                                m(a);
                                let {
                                    openBrowserWidgetPrompt: i
                                } = await r.e(763191).then(r.bind(r, "Rcqw"));
                                m(a);
                                let o = await i(e, t, n, a);
                                return m(a), o
                            } : void 0,
                            openInApp: {
                                appName: n.widget.name,
                                baseUrl: A,
                                hideButton: !0 === n.widget.is_verified_first_party,
                                validateUrl: e => {
                                    if (m(), e.includes("\\") || !URL.canParse(e, A ?? window.location.origin)) return null;
                                    let t = new URL(e, A ?? window.location.origin);
                                    return ("https:" === t.protocol || "http:" === t.protocol) && (0, ef.c)(t.href, {
                                        connectDomains: n.widget.csp?.connect_domains
                                    }, n.widget.domain) ? t.href : null
                                }
                            },
                            openExternal: (t, r) => (async function(e, t, r, n, a, i) {
                                a(n);
                                let o = em.b.safeParse(r);
                                if (o.success) return !0 === t.widget.is_verified_first_party && (await i?.(o.data.href, n), a(n)), !0;
                                let {
                                    href: s,
                                    redirectUrl: l,
                                    openMode: c
                                } = ew.parse(r);
                                if (/^data:/i.test(s)) {
                                    if (s.length > 0x1000000) throw Error("CSV export is too large");
                                    let r = s.indexOf(","),
                                        i = decodeURIComponent(s.slice(r + 1)),
                                        o = new Blob([/;base64$/i.test(s.slice(0, r)) ? (0, eg.a)(i) : i], {
                                            type: "text/csv;charset=utf-8"
                                        });
                                    if (o.size > 8388608) throw Error("CSV export is too large");
                                    return ev(e, t, "data:text/csv", "tab"), (0, eu.f)(e, ec.ExternalLinkConfirmationDialog, {
                                        href: s,
                                        downloadFilename: "export.csv",
                                        initiator: "mcp_app_resource",
                                        signal: n,
                                        onDownload: () => {
                                            try {
                                                a(n)
                                            } catch {
                                                return
                                            }(0, ei.a)(o, "export.csv")
                                        }
                                    }), !0
                                }
                                if (null == c && t.mcpAppHostAdapter.onOpenLink?.(s)) return !0;
                                if (/^codex(?:-dev)?:/.test(s)) return !1;
                                let d = !0 === t.widget.is_verified_first_party;
                                if (d && null == c && await i?.(s, n)) return !0;
                                a(n);
                                let u = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                                    p = (0, ef.c)(s, {
                                        connectDomains: t.widget.csp?.connect_domains
                                    }, t.widget.domain) || (0, ef.b)(s, u),
                                    g = !/^https?:/.test(s);
                                if (g && !p) throw Error("The app has not declared this external protocol");
                                let h = new URL(s),
                                    m = !g && h.origin === window.location.origin;
                                h.search = "", h.hash = "";
                                let f = e.get(W.j, t.request.chatGptThreadId ?? null);
                                ev(e, t, h.href, c);
                                let y = s;
                                p && !m && !1 !== l && (null != f || null == t.request.chatGptThreadId) && (y = function(e, t) {
                                    let r;
                                    if (!t) return e;
                                    let n = e.startsWith("http://") || e.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(e);
                                    try {
                                        r = new URL(e)
                                    } catch {
                                        return e
                                    }
                                    return !n || r.searchParams.get(ey) ? e : (r.searchParams.set(ey, t), r.toString())
                                }(s, null == f ? window.location.href : new URL(`/c/${encodeURIComponent(f)}`, window.location.origin).href));
                                let w = m || p;
                                if (!w && d) try {
                                    t.access.assertActive();
                                    let {
                                        accountId: e
                                    } = t.access;
                                    w = (await eh.Request.safePost("/ecosystem/url_safe", {
                                        requestBody: {
                                            url: s,
                                            resolved_pineapple_uri: t.request.appUri
                                        },
                                        additionalHeaders: null == e ? void 0 : {
                                            "ChatGPT-Account-ID": e
                                        },
                                        signal: n
                                    })).safe
                                } catch {}
                                a(n);
                                let v = "Apple Computer, Inc." === navigator.vendor,
                                    _ = () => {
                                        try {
                                            a(n)
                                        } catch {
                                            return
                                        }
                                        g ? window.open(y, "_blank", "noopener,noreferrer") : d && "popup" === c && w && !v ? (0, ep.a)(e, y) : (0, ed.f)({
                                            href: y,
                                            initiator: "mcp_app_resource"
                                        })
                                    };
                                return !w || v || g ? (0, eu.f)(e, ec.ExternalLinkConfirmationDialog, {
                                    href: y,
                                    initiator: "mcp_app_resource",
                                    showCopyLink: !w,
                                    signal: n,
                                    onOpen: _
                                }) : _(), !0
                            })(e, n, t, r, m, a),
                            autofill: C && null != x && null != f && null != y ? async (t, a) => {
                                m(a);
                                let {
                                    createBrowserWidgetAutofill: i
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(108257)]).then(r.bind(r, "JFC7"));
                                return m(a), i(e, n, x, t, a)
                            } : void 0,
                            sandboxFeatures: [..._],
                            instrumentation: (s = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), l = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : n.request.appUri, c = {
                                ...(0, eT.a)(n.access, n.analyticsContext),
                                attributionId: l,
                                messageId: n.request.sourceMessageId,
                                suggestionMessageId: n.suggestionMessageId,
                                distributionChannel: ({
                                    only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                    openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                    external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                })[s],
                                host: "chatgpt"
                            }, d = {
                                attribution_id: l,
                                name: n.request.template,
                                client_type: "chatgpt-web"
                            }, {
                                sendInstrument(t, r) {
                                    let a = eM.safeParse(t);
                                    if (!a.success) return;
                                    let i = a.data;
                                    if ("event" === i.type) return void(0, S.a)(e, eq.a, {
                                        eventName: i.label,
                                        eventData: JSON.stringify({
                                            ...i.payload,
                                            ...d,
                                            conversation_id: e.get(W.j, n.request.chatGptThreadId),
                                            message_id: n.request.sourceMessageId ?? null,
                                            suggestion_message_id: n.suggestionMessageId ?? null,
                                            distribution_channel: s,
                                            host: "chatgpt"
                                        })
                                    });
                                    if ("error" === i.type) {
                                        "only_me" !== s && e.get(eC.a).count("ecosystem", "app.error", d);
                                        return
                                    }
                                    let o = {
                                        ...Object.fromEntries(i.tags?.map(e => {
                                            let {
                                                key: t,
                                                value: r
                                            } = e;
                                            return [t, r]
                                        }) ?? []),
                                        ...d
                                    };
                                    "interaction" === i.type ? ((0, S.a)(e, ex.l, {
                                        ...c,
                                        ...r,
                                        conversationId: e.get(W.j, n.request.chatGptThreadId) ?? void 0,
                                        actionType: (0, eT.b)(i.label)
                                    }), "only_me" !== s && e.get(eC.a).count("ecosystem", {
                                        copy: "app.copy",
                                        click: "app.interaction_click",
                                        scroll: "app.interaction_scroll"
                                    } [i.label] ?? "app.interaction", o)) : "only_me" !== s && ("count" === i.type ? e.get(eC.a).count("ecosystem", i.label, o, i.count) : e.get(eC.a).hist("ecosystem", i.label, o, i.value))
                                },
                                notifySecurityPolicyViolation(t) {
                                    let r = T.F({
                                        effectiveDirective: T.L().regex(/^[a-z-]+$/)
                                    }).safeParse(t);
                                    r.success && ((0, S.a)(e, ex.k, {
                                        ...c,
                                        conversationId: e.get(W.j, n.request.chatGptThreadId) ?? void 0,
                                        effectiveDirective: r.data.effectiveDirective
                                    }), "only_me" !== s && e.get(eC.a).count("ecosystem", "app.security_policy_violation", d))
                                }
                            }),
                            toolInfo: T.F({
                                tool: T.F({
                                    name: T.L(),
                                    input_schema: et.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
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
                            device: b,
                            downloadBlob: !0 === n.widget.is_verified_first_party ? (e, t) => {
                                m(t);
                                let {
                                    blob: r,
                                    name: n
                                } = T.F({
                                    blob: T.t(Blob),
                                    name: T.L()
                                }).parse(e);
                                (0, ei.a)(r, n)
                            } : void 0,
                            triggerHaptic: (e, t) => {
                                m(t);
                                let {
                                    type: r
                                } = T.F({
                                    type: T.p(["light", "medium", "heavy", "selection", "success", "warning", "error"])
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
                                m();
                                let {
                                    title: r,
                                    body: n,
                                    level: a
                                } = T.F({
                                    title: T.L(),
                                    body: T.L().optional(),
                                    level: T.p(["warning", "success", "danger"])
                                }).parse(t);
                                e.get(q.f)[a](r, {
                                    description: n?.trim() || void 0,
                                    errorAnalytics: {
                                        toastId: "ecosystem.widget.error"
                                    }
                                })
                            } : void 0,
                            files: null != f && null != y ? (i = {
                                appUri: n.request.appUri,
                                accountId: f,
                                userId: y,
                                assertActive: m
                            }, u = t => {
                                if (t.throwIfAborted(), i.assertActive?.(), e.get(v.f) !== i.accountId || e.get(v.k) !== i.userId) throw Error("The widget account has changed")
                            }, p = {
                                additionalHeaders: {
                                    "ChatGPT-Account-ID": i.accountId
                                },
                                expectedIdentity: {
                                    accountId: i.accountId,
                                    userId: i.userId
                                }
                            }, {
                                async uploadFile(e, t, r) {
                                    u(r);
                                    let n = T.t(File).parse(e),
                                        a = T.F({
                                            library: T.j().optional()
                                        }).optional().parse(t),
                                        o = new FormData;
                                    o.append("app_uri", i.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                        type: n.type || "application/octet-stream",
                                        lastModified: n.lastModified
                                    })), a?.library && o.append("store_in_library", "true"), u(r);
                                    let s = await eh.Request.safePost("/ecosystem/upload_widget_file", {
                                        ...p,
                                        requestBody: o,
                                        signal: r
                                    });
                                    return u(r), {
                                        fileId: s.file_id
                                    }
                                },
                                async getFileDownloadUrl(e, t) {
                                    u(t);
                                    let r = await eh.Request.safePost("/ecosystem/file_download_url", {
                                        ...p,
                                        requestBody: {
                                            app_uri: i.appUri,
                                            file_id: eA.parse(e).fileId
                                        },
                                        signal: t
                                    });
                                    return u(t), {
                                        downloadUrl: r.download_url
                                    }
                                },
                                async getFileMetadata(e, t) {
                                    u(t);
                                    let r = await eh.Request.safePost("/ecosystem/file_metadata", {
                                        ...p,
                                        requestBody: {
                                            app_uri: i.appUri,
                                            file_id: eA.parse(e).fileId
                                        },
                                        signal: t
                                    });
                                    return u(t), {
                                        fileName: r.file_name ?? null,
                                        mimeType: r.mime_type ?? null
                                    }
                                },
                                async selectFiles(t) {
                                    u(t);
                                    let n = e.get($.g);
                                    if (!(n?.checkGate("224248639", {
                                            disableExposureLog: !0
                                        }) || n?.getLayer("3017902351", {
                                            disableExposureLog: !0
                                        }).get("web_file_library_enabled", !1)) || e.get(eo.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                    let {
                                        selectWidgetLibraryFiles: a
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                    u(t);
                                    let o = await a(e, t);
                                    if (u(t), 0 === o.length) return [];
                                    let s = await Promise.all(o.map(async e => {
                                        u(t);
                                        let r = null == (0, eI.a)(e.id) ? e : await (0, eb.g)({
                                            file_id: e.id,
                                            file_name: e.file_name,
                                            mime_type: e.mime_type
                                        }, {
                                            expectedIdentity: p.expectedIdentity,
                                            signal: t
                                        });
                                        return {
                                            fileId: `sediment://${(0,e_.d)(r.file_id)??r.file_id}`,
                                            fileName: r.file_name,
                                            mimeType: r.mime_type ?? null
                                        }
                                    }));
                                    return u(t), await eh.Request.safePost("/ecosystem/file_authorize_app", {
                                        ...p,
                                        requestBody: {
                                            file_ids: s.map(e => e.fileId),
                                            authorized_app_uri: i.appUri
                                        },
                                        signal: t
                                    }), u(t), s
                                }
                            }) : void 0,
                            share: "u" > typeof navigator && "function" == typeof navigator.share ? async (e, t) => {
                                m(t), await navigator.share(T.F({
                                    title: T.L().optional(),
                                    text: T.L().optional(),
                                    url: T.L().optional(),
                                    files: T.g(T.t(File)).optional()
                                }).parse(e))
                            } : void 0,
                            requestConnectSheet: null == h ? void 0 : async (r, n) => {
                                m(n);
                                let a = await (0, er.requestMcpConnectSheet)(e, {
                                    connectorId: h,
                                    hostId: t,
                                    payload: r,
                                    signal: n,
                                    beforeConnect: async () => (m(n), !0)
                                });
                                return m(n), a
                            },
                            requestLinkToConnector: async (r, n) => {
                                m(n);
                                let a = await (0, er.requestMcpConnectSheet)(e, {
                                    connectorId: T.F({
                                        connectorId: T.L().min(1)
                                    }).parse(r).connectorId,
                                    hostId: t,
                                    payload: void 0,
                                    signal: n,
                                    beforeConnect: async () => (m(n), !0)
                                });
                                return m(n), a
                            }
                        }
                    }(tf, e1, s, async (e, t) => {
                        if (null == s.toolResult) return !1;
                        let n = tf.get(W.y, s.request.chatGptThreadId);
                        if ("tpp" !== n && "flora" !== n) return !1;
                        let a = await async function() {
                            return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
                        }();
                        return t.throwIfAborted(), a(tf, {
                            recipient: to,
                            WidgetContent: eH,
                            conversationId: eJ,
                            hostId: e1,
                            result: s,
                            mcpAppId: e5,
                            href: e,
                            signal: t
                        })
                    }, "tpp" === u || "flora" === u);
                return {
                    ...d,
                    mcpAppHostAdapter: (t = {
                        ...s.mcpAppHostAdapter,
                        displayMode: tT,
                        ...p,
                        experimentalCapabilities: {
                            ...p.experimentalCapabilities,
                            ...!ts && {
                                "openai/sourceViews": {}
                            }
                        },
                        openFile: tx && !ts && null != s.request.sourceMessageId ? (e, t) => (async function(e, t, n, a) {
                            let {
                                chatGptThreadId: i,
                                sourceMessageId: o
                            } = t.request;
                            if (!o) throw (0, B.c)("File opening requires a source message", z.r.MethodNotFound);
                            let s = e.get(W.j, i);
                            if ("current" !== t.access.status(e.get)) throw (0, B.c)("File opening is unavailable for this widget", z.r.MethodNotFound);
                            let {
                                accountId: l,
                                uiUserId: c
                            } = t.access, d = e => "current" !== t.access.status(e.get) || e.get(H.j) || !e.get(J, i) || e.get(v.f) !== l || e.get(v.k) !== c || e.get(W.j, i) !== s, u = () => {
                                if (a.throwIfAborted(), null == s || d(e)) throw (0, B.c)("File opening is unavailable for this widget", z.r.MethodNotFound)
                            };
                            if (u(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, B.c)("Cannot open this file path", z.r.InvalidParams);
                            let p = e.get(W.T, i),
                                g = (0, Y.a)(e, i, {
                                    type: "sandbox",
                                    messageId: o,
                                    sandboxPath: n
                                }),
                                {
                                    canOpenChatGptFilePreview: h,
                                    openChatGptFile: m
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(208694)]).then(r.bind(r, "f2PP"));
                            if (u(), !h({
                                    browserPreview: !0
                                })) throw (0, B.c)("File previews are unavailable in this host", z.r.MethodNotFound);
                            try {
                                await m(e, {
                                    conversationId: s,
                                    fileName: (0, Q.j)(n),
                                    gizmoId: p,
                                    target: g,
                                    tabKey: `${o}:${n}`,
                                    browserPreview: !0,
                                    downloadFallback: !1,
                                    isAccessBlocked: d,
                                    signal: a
                                })
                            } catch {
                                throw u(), (0, B.c)("Unable to open file", z.r.InternalError)
                            }
                            u()
                        })(tf, s, e, t) : null,
                        presentation: {
                            isSidebarOpen: null != tE,
                            requestFocusedObject: !0 !== s.widget.is_verified_first_party || ts || null != s.mcpAppHostAdapter.displayMode ? void 0 : async (e, t) => {
                                if (null == s.toolResult) throw Error("This widget has no result yet.");
                                let {
                                    openEcosystemWidgetFocusedObject: r
                                } = await eW();
                                t.throwIfAborted(), s.mcpAppHostAdapter.assertActive?.(), r(tf, {
                                    recipient: to,
                                    WidgetContent: eH,
                                    WidgetDialog: eL,
                                    id: tM,
                                    conversationId: eJ,
                                    hostId: e1,
                                    result: s,
                                    payload: e,
                                    signal: t
                                })
                            },
                            requestCloseFocusedObject: !0 === s.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), s.mcpAppHostAdapter.assertActive?.(), null != s.mcpAppHostAdapter.displayMode && "fullscreen" !== s.mcpAppHostAdapter.displayMode) return void await s.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: t
                                } = await eW();
                                e.throwIfAborted(), s.mcpAppHostAdapter.assertActive?.(), t(tf, tM)
                            } : void 0
                        },
                        requestModal: async (e, t) => {
                            let {
                                requestEcosystemWidgetModal: r
                            } = await eO();
                            t.throwIfAborted(), s.mcpAppHostAdapter.assertActive?.(), await r(tf, {
                                recipient: to,
                                sourceMcpAppId: e5,
                                WidgetDialog: eL,
                                WidgetContent: eH,
                                conversationId: eJ,
                                hostId: e1,
                                inDialog: ts,
                                result: s,
                                payload: e,
                                signal: t
                            })
                        },
                        ...tP === j.a ? (0, k.b)(tf, tv, `${t_}${tI}${tb}`, !ts && (null == tT || "inline" === tT) ? s : void 0) : {
                            finance: void 0
                        },
                        ...null != tO && {
                            handleRequest: m.b,
                            requestReconnectConnector: d.isVerifiedFirstParty ? tO : void 0
                        }
                    }, n = s.access.context.connectorTarget, a = s.request.template, i = s.resourceQuery, "codex_apps" !== s.access.context.server || n?.connectorId !== "connector_openai_findata" || null == n.targetId || "connectors://connector_openai_findata" !== s.request.appUri || !/^ui:\/\/companies\/company-page-v[1-9]\d*\.html$/u.test(a) && "ui://findata/citation-viewer-v1.html" !== a && "ui://findata/source-view-v1.html" !== a || (null != s.resource ? 0 === s.resource.contents.length || s.resource.contents.some(e => e.uri !== a) : i?.connectorId !== n.connectorId || i.targetId !== n.targetId || i.template !== a) ? t : {
                        ...t,
                        experimentalCapabilities: {
                            ...t.experimentalCapabilities,
                            "openai/companyPageProviderViews": {}
                        },
                        forwardedRequestMethods: [...t.forwardedRequestMethods ?? [], M],
                        handleRequest(e, r) {
                            for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) a[i - 2] = arguments[i];
                            if (e.method !== M) return t.handleRequest(e, r, ...a);
                            let o = () => {
                                if (r?.throwIfAborted(), s.access.assertActive(), t.assertActive?.(), t.isAccessRevoked?.(tf.get) === !0) throw Error("The Company Page is no longer available")
                            };
                            o();
                            let l = E.parse(e.params);
                            return (0, S.a)(tf, C.a, l, void 0, void 0, {
                                expectedUserId: s.access.uiUserId ?? void 0,
                                expectedAccountId: s.access.accountId ?? void 0,
                                shouldSend: () => (o(), !0)
                            }), Promise.resolve({})
                        }
                    })
                }
            }, e$[69] = tv, e$[70] = tx, e$[71] = tP, e$[72] = eJ, e$[73] = e8, e$[74] = tT, e$[75] = tE, e$[76] = tM, e$[77] = tb, e$[78] = ta, e$[79] = e1, e$[80] = ts, e$[81] = tA, e$[82] = e5, e$[83] = t_, e$[84] = tm, e$[85] = to, e$[86] = tO, e$[87] = tf, e$[88] = tI, e$[89] = Z) : Z = e$[89];
            let tG = Z;
            e$[90] !== e8 || e$[91] !== e7 || e$[92] !== ty || e$[93] !== tf.query ? (X = async () => {
                if (null == ty) throw Error("Cannot refetch without a resource query");
                e8.access.assertActive();
                let e = await tf.query.fetch(w.a, ty);
                return e8.access.assertActive(), (0, f.c)({
                    ...e8,
                    ...e
                }, e7)
            }, e$[90] = e8, e$[91] = e7, e$[92] = ty, e$[93] = tf.query, e$[94] = X) : X = e$[94];
            let tW = X,
                tz = null == ty ? void 0 : tW;
            e$[95] !== eJ || e$[96] !== e1 || e$[97] !== e5 || e$[98] !== eY || e$[99] !== to || e$[100] !== tw.request.chatGptThreadId || e$[101] !== tf ? (el = () => tf.get(N.h, e5)?.content.toolResult == null ? null : null != eY ? eY : to?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: to.get(W.y, to.value.conversationId)
            } : null != tw.request.chatGptThreadId || eJ.startsWith("chatgpt:") || (0, G.e)(eJ) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tf.get(I.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: e1
            }, e$[95] = eJ, e$[96] = e1, e$[97] = e5, e$[98] = eY, e$[99] = to, e$[100] = tw.request.chatGptThreadId, e$[101] = tf, e$[102] = el) : el = e$[102];
            let tB = el;
            if (tH && null == tO) return null;
            e$[103] !== tu ? (eS = tu ? {
                source: "global"
            } : {}, e$[103] = tu, e$[104] = eS) : eS = e$[104], e$[105] !== tw.analyticsContext || e$[106] !== eS ? (eN = {
                ...tw.analyticsContext,
                ...eS
            }, e$[105] = tw.analyticsContext, e$[106] = eS, e$[107] = eN) : eN = e$[107];
            let tK = tH ? "component" : e4,
                t$ = !0 === tw.widget.is_verified_first_party,
                tQ = tm ? null : tw.request.template;
            e$[108] !== tk || e$[109] !== tm || e$[110] !== tw.mcpAppHostAdapter.connectorTarget?.targetId || e$[111] !== tw.request.toolName ? (eD = !tm && "connectorId" in tk ? {
                connectorId: tk.connectorId,
                linkId: tw.mcpAppHostAdapter.connectorTarget?.targetId ?? null,
                resourceUri: null,
                appName: null,
                actionName: tw.request.toolName
            } : void 0, e$[108] = tk, e$[109] = tm, e$[110] = tw.mcpAppHostAdapter.connectorTarget?.targetId, e$[111] = tw.request.toolName, e$[112] = eD) : eD = e$[112], e$[113] !== tw.request.toolName || e$[114] !== t$ || e$[115] !== tQ || e$[116] !== eD ? (eU = {
                widgetSource: "hosted",
                isVerifiedFirstParty: t$,
                originResourceUri: tQ,
                originTool: tw.request.toolName,
                appContext: eD
            }, e$[113] = tw.request.toolName, e$[114] = t$, e$[115] = tQ, e$[116] = eD, e$[117] = eU) : eU = e$[117];
            let tV = tP === j.a ? tv ?? void 0 : void 0,
                tY = ts ? P.b : tl;
            return e$[118] !== tT || e$[119] !== ts || e$[120] !== tm || e$[121] !== tw || e$[122] !== tf ? (ez = tm || ts || null != tT && "inline" !== tT ? tw.request.viewParams : (0, k.c)(tf, tw), e$[118] = tT, e$[119] = ts, e$[120] = tm, e$[121] = tw, e$[122] = tf, e$[123] = ez) : ez = e$[123], e$[124] !== eJ || e$[125] !== eZ || e$[126] !== td || e$[127] !== tB || e$[128] !== tG || e$[129] !== tu || e$[130] !== tg || e$[131] !== e1 || e$[132] !== tp || e$[133] !== tc || e$[134] !== th || e$[135] !== eX || e$[136] !== e5 || e$[137] !== tR || e$[138] !== e0 || e$[139] !== to || e$[140] !== tz || e$[141] !== tC.appIcon || e$[142] !== tC.toolIcon || e$[143] !== tS || e$[144] !== tw.access || e$[145] !== tw.mcpAppHostAdapter || e$[146] !== tw.preferredModelDisplayMode || e$[147] !== tw.request.toolInput || e$[148] !== tw.toolResult || e$[149] !== tw.widgetStatePersistence || e$[150] !== eN || e$[151] !== tK || e$[152] !== eU || e$[153] !== tV || e$[154] !== tY || e$[155] !== ez || e$[156] !== tL || e$[157] !== tF ? (eB = (0, n.jsx)(L.a, {
                analyticsContext: eN,
                getNewThreadDestination: tB,
                resource: tS,
                legacyPreferredDisplayMode: tw.preferredModelDisplayMode,
                hostDisplayModes: tg,
                recipient: to,
                conversationId: eJ,
                deepLink: eZ,
                pluginId: e0,
                fullSurface: td,
                hostScroll: tp,
                inheritHostBackground: th,
                hostId: e1,
                hostedInThreadScrollLayout: tc,
                lifetime: tK,
                access: tw.access,
                mcpAppId: e5,
                initialWidgetState: eX,
                widgetStatePersistence: tw.widgetStatePersistence,
                sourceName: tR,
                getResourceHost: tG,
                refetchResource: tz,
                mcpAppScope: eU,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tw.mcpAppHostAdapter,
                plaidAccountId: tV,
                Frame: tY,
                server: "codex_apps",
                appIcon: tC.appIcon,
                toolIcon: tC.toolIcon,
                sidePanelTitle: tL,
                title: tL,
                globalSurface: tu,
                toolArguments: tw.request.toolInput,
                toolResult: tw.toolResult,
                ...tF,
                viewParamsOverride: ez
            }), e$[124] = eJ, e$[125] = eZ, e$[126] = td, e$[127] = tB, e$[128] = tG, e$[129] = tu, e$[130] = tg, e$[131] = e1, e$[132] = tp, e$[133] = tc, e$[134] = th, e$[135] = eX, e$[136] = e5, e$[137] = tR, e$[138] = e0, e$[139] = to, e$[140] = tz, e$[141] = tC.appIcon, e$[142] = tC.toolIcon, e$[143] = tS, e$[144] = tw.access, e$[145] = tw.mcpAppHostAdapter, e$[146] = tw.preferredModelDisplayMode, e$[147] = tw.request.toolInput, e$[148] = tw.toolResult, e$[149] = tw.widgetStatePersistence, e$[150] = eN, e$[151] = tK, e$[152] = eU, e$[153] = tV, e$[154] = tY, e$[155] = ez, e$[156] = tL, e$[157] = tF, e$[158] = eB) : eB = e$[158], e$[159] !== eV || e$[160] !== eB ? (eK = (0, n.jsxs)(n.Fragment, {
                children: [eB, eV]
            }), e$[159] = eV, e$[160] = eB, e$[161] = eK) : eK = e$[161], eK
        }
        async function eO() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(117976)]).then(r.bind(r, "IQhm"))
        }
        let eG = (0, d.f)({
            appTitle: {
                id: "chatgpt.ecosystemWidget.title",
                defaultMessage: "App"
            },
            openingApp: {
                id: "chatgpt.ecosystemWidget.opening",
                defaultMessage: "Opening app…"
            },
            openAppError: {
                id: "chatgpt.ecosystemWidget.openError",
                defaultMessage: "Couldn’t open app"
            },
            openAppErrorDescription: {
                id: "chatgpt.ecosystemWidget.openErrorDescription",
                defaultMessage: "Try opening the app again"
            }
        });
        async function eW() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(579403)]).then(r.bind(r, "Ia2H"))
        }
    }),
    HUQj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("oyxz"),
            o = r("MM0V"),
            s = r("T8YV");
        r.d(t, {}, {
            a: function(e) {
                let t, r = (0, a.c)(1);
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                    content: (0, n.jsx)(i.a, {
                        ...s.b.notice
                    }),
                    role: "alert",
                    variant: "callout"
                }), r[0] = t) : t = r[0], t
            }
        })
    }),
    lax3: (function(e, t, r) {
        var n = r("Q840"),
            a = r("AuIy"),
            i = r("P61R"),
            o = r("OiCI"),
            s = r("Cslg"),
            l = r("Yshm"),
            c = r("OWtl"),
            d = r("Mwld"),
            u = r("CKur"),
            p = r("dQRk"),
            g = r("hx97"),
            h = r("SfL3"),
            m = r("jAnS"),
            f = r("mKTJ");
        let y = (0, n.u)(c.a, () => null),
            w = (0, n.d)(c.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return !1;
                let {
                    conversationId: n,
                    messageId: i
                } = e, o = r(p.N, n);
                return null != o && function(e, t) {
                    let r = (0, a.a)(e),
                        n = r.findIndex(e => (0, a.g)(e) === t);
                    if (n < 0) return !0;
                    let i = e => (0, g.o)(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
                        o = r.findLast(i),
                        s = r.slice(0, n + 1).findLast(i);
                    if (o === s && r.findLast(g.o)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
                    let l = (0, d.a)(r).get(t);
                    return null != l ? !l : null != o && null != s && o !== s
                }({
                    mapping: o,
                    current_node: r(p.C, n)
                }, i)
            });

        function v(e) {
            let t = e.metadata.attribution_id;
            return "internal://plugin-management-suggestions" === e.metadata.html_asset_pointer && "openai" === e.metadata.distribution_channel && t === i.a && e.metadata.resolved_pineapple_uri === `connectors://${t}` && !0 !== e.toolResult.isError
        }
        r.d(t, {}, {
            a: y,
            b: v,
            c: w,
            recordPluginSuggestionInstallation: async function(e, t) {
                let r = (0, m.d)(e),
                    n = () => e.get(o.b) === t.accountId && e.get(s.k) === t.userId;
                if (!n()) return !1;
                if (null == e.get(p.N, t.conversationId)) try {
                    await e.query.fetch(u.chatGptConversationQueryById$, t.conversationId)
                } catch {
                    return !1
                }
                if (!n() || null != e.get(p.bb, t.conversationId)) return !1;
                let a = e.get(p.N, t.conversationId),
                    i = a?.[t.messageId]?.message,
                    c = null == i ? null : (0, f.d)(i, void 0);
                if (null == a || null == c || !v(c)) return !1;
                let d = l.e.safeParse(c.toolResult.structuredContent).data?.suggestions.find(e => e.plugin_id === t.pluginId),
                    g = (0, h.c)(e, t.conversationId, t.messageId, c.metadata),
                    _ = l.d.safeParse(g?.getState(e) ?? {});
                if (null == d || null == g || !_.success) return !1;
                if (_.data.connectedPluginIds?.includes(t.pluginId)) return !0;
                let I = {
                        ..._.data,
                        connectedPluginIds: [..._.data.connectedPluginIds ?? [], t.pluginId]
                    },
                    b = await g.save(I, !0, {
                        optimistic: !1
                    });
                return !!n() && !!b.ok && g.getState(e) === I && ((0, m.d)(e) === r && (0, u.B)(e, t.conversationId) && null == e.get(p.bb, t.conversationId) && !e.get(w, {
                    conversationId: t.conversationId,
                    messageId: t.messageId
                }) && e.set(y, {
                    ...t,
                    navigationVisit: r
                }), !0)
            }
        })
    }),
    Igop: (function(e, t, r) {
        var n = r("lAQI"),
            a = r("Sbyb"),
            i = r("SGsN"),
            o = r("svjy"),
            s = r("eShZ"),
            l = r("T8YV");
        let c = n.F({
            isError: n.z(!0),
            _meta: n.F({
                "openai/tool_error_kind": n.z("connector_auth_required"),
                "openai/connector_auth": n.F({
                    connector_id: n.L().min(1),
                    link_id: n.L().min(1).nullish(),
                    auth_reason: n.p(["missing_link", "oauth_upgrade_required", "reauthentication_required"]).nullish(),
                    requested_scopes: n.g(n.L()).nullish()
                })
            })
        });
        r.d(t, {}, {
            a: async function(e, t, r, n, d, u, p, g, h) {
                let m;
                if (null == u) throw Error("Widget requests require an active frame");
                let f = () => {
                        let t = e.get(o.a).formatMessage(l.b.notice);
                        return e.get(i.f).danger(t, {
                            id: l.a,
                            errorAnalytics: {
                                toastId: "ecosystem.widget.networkDenied"
                            }
                        }), t
                    },
                    y = () => ({
                        isError: !0,
                        content: [{
                            type: "text",
                            text: f()
                        }],
                        structuredContent: {
                            error_code: l.a
                        },
                        _meta: {
                            "openai/tool_error_kind": l.a
                        }
                    }),
                    w = async e => {
                        let t;
                        p(u);
                        try {
                            t = await r.handleRequest(e, u, g, h)
                        } catch (t) {
                            if (p(u), !(0, l.d)(t)) throw t;
                            if ("tools/call" === e.method) return y();
                            throw new s.FetchError(f(), 403, l.a)
                        }
                        return (p(u), "tools/call" === e.method && !0 === t.isError && t._meta?.["openai/tool_error_kind"] === l.a) ? y() : t
                    }, v = await w(d);
                if (null != r.olympic || "tools/call" !== d.method || "string" != typeof d.params?.name) return v;
                let _ = c.safeParse(v);
                if (!_.success || !("connectorId" in n.serverIdentity)) return v;
                let I = _.data._meta["openai/connector_auth"],
                    b = r.connectorTarget;
                if (null == b || b.connectorId !== n.serverIdentity.connectorId) return v;
                let A = d.params.name.startsWith("/") ? d.params.name.split("/").filter(Boolean) : [d.params.name],
                    x = A.at(-1),
                    q = d.params._meta,
                    C = b.targetId ?? q?.["openai/link_id"] ?? (3 === A.length ? A[1] : void 0);
                if (null == x || 0 === x.length || A.length > 3 || I.connector_id !== b.connectorId || q?.["openai/connector_id"] != null && q["openai/connector_id"] !== I.connector_id || q?.["openai/action_name"] != null && q["openai/action_name"] !== x || null != C && C !== I.link_id) return v;
                try {
                    m = await (0, a.requestMcpConnectSheet)(e, {
                        connectorId: I.connector_id,
                        hostId: t,
                        signal: u,
                        payload: {
                            requireAuth: !0,
                            reauthLinkId: I.link_id ?? void 0,
                            authReason: I.auth_reason ?? "missing_link",
                            requestedScopes: I.requested_scopes ?? void 0
                        },
                        beforeConnect: async () => (p(u), !0)
                    })
                } catch {
                    return p(u), v
                }
                return (p(u), m.didConnect && m.linkId && (null == I.link_id || m.linkId === I.link_id)) ? w({
                    ...d,
                    params: {
                        ...d.params,
                        name: x,
                        _meta: {
                            ...d.params._meta,
                            "openai/connector_id": I.connector_id,
                            "openai/action_name": x,
                            "openai/link_id": m.linkId
                        }
                    }
                }) : v
            }
        })
    }),
    VV1g: (function(e, t, r) {
        var n = r("lAQI");
        let a = n.F({
            href: n.L().refine(i)
        });

        function i(e) {
            return /^mcp-citation:/iu.test(e.trimStart()) || URL.parse(e)?.protocol === "mcp-citation:"
        }
        r.d(t, {}, {
            a: i,
            b: a,
            c: function(e) {
                if (!/^mcp-citation:/iu.test(e)) return null;
                try {
                    let t = e.slice(13),
                        r = decodeURIComponent(t);
                    return r.length > 0 && r.length <= 16384 && r.trim() === r && !/[\u0000-\u001f\u007f]/u.test(r) && encodeURIComponent(r) === t ? r : null
                } catch {
                    return null
                }
            }
        })
    }),
    aRhc: (function(e, t, r) {
        let n = new Set(["http:", "https:"]),
            a = {
                "http:": 80,
                "https:": 443,
                "ws:": 80,
                "wss:": 443
            };

        function i(e, t) {
            if (!e) return !1;
            let r = o(e);
            if (!r) return !1;
            let n = r.url;
            return !n.username && !n.password && !!t?.length && t.some(e => {
                let t = s(e);
                if (!t) return !1;
                if ("scheme" === t.kind) return n.protocol === t.scheme;
                if (t.scheme) {
                    var r, i;
                    return n.protocol === t.scheme && (r = n.hostname, i = t.host, t.wildcard ? !!c(r, i) : l(r) === l(i)) && !! function(e, t) {
                        if ("*" === t.port) return !0;
                        let r = e.port ? Number(e.port) : a[e.protocol] ?? null;
                        return t.portExplicit ? "number" == typeof t.port && r === t.port : r === (a[e.protocol] ?? null)
                    }(n, t)
                }
                return !!c(n.hostname, t.host)
            })
        }

        function o(e) {
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

        function s(e) {
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
            let a = /^(?:([a-z][a-z0-9+.+-]*):\/\/)?(\*|\*\.[^/:]+|[^/:]+)(?::(\*|\d+))?(\/.*)?$/i.exec(t);
            if (!a) return null;
            let i = a[1] ? `${a[1].toLowerCase()}:` : void 0,
                o = a[2],
                s = a[3] ?? null,
                l = a[4] ?? null,
                c = o.startsWith("*."),
                d = (c ? o.slice(2) : o).toLowerCase().replace(/\.$/, ""),
                u = null,
                p = !1;
            return null != s && (p = !0, "*" !== (u = "*" === s ? "*" : Number(s)) && (!Number.isFinite(u) || u < 0)) ? null : {
                kind: "host",
                scheme: i,
                host: d,
                wildcard: c,
                portExplicit: p,
                port: u,
                path: l
            }
        }

        function l(e) {
            return e.toLowerCase().replace(/\.$/, "")
        }

        function c(e, t) {
            let r = l(e),
                n = l(t);
            return r === n || r.endsWith("." + n)
        }
        r.d(t, {}, {
            a: function(e) {
                let t = o(e ?? void 0);
                if (t && n.has(t.url.protocol) && !t.url.hostname.includes("*")) return t.url.toString();
                if (!e) return null;
                let r = s(e);
                return r && "scheme" !== r.kind ? (function(e) {
                    let t = e.scheme ?? "https:";
                    if (!n.has(t) || !e.host) return null;
                    let r = "number" == typeof e.port ? `:${e.port}` : "",
                        a = e.path ?? "";
                    try {
                        return new URL(`${t}//${e.host}${r}${a}`)
                    } catch {
                        return null
                    }
                })(r)?.toString() ?? null : null
            },
            b: i,
            c: function(e, t, r) {
                let n = [];
                t?.connectDomains?.length && n.push(...t.connectDomains);
                let a = r?.trim();
                return a && n.push(a), i(e, n)
            }
        })
    }),
    vcrj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("JNtf");
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, s, l, c = (0, a.c)(16),
                    {
                        children: d,
                        heightHint: u,
                        widthHint: p,
                        allowsInteractiveDismissal: g,
                        onClose: h,
                        "aria-label": m
                    } = e,
                    f = !1 === g;
                return c[0] !== u ? (t = null == u ? void 0 : {
                    height: u
                }, c[0] = u, c[1] = t) : t = c[1], c[2] !== g ? (r = e => {
                    !1 === g && e.preventDefault()
                }, c[2] = g, c[3] = r) : r = c[3], c[4] !== m || c[5] !== t || c[6] !== r ? (o = {
                    "aria-label": m,
                    style: t,
                    onEscapeKeyDown: r
                }, c[4] = m, c[5] = t, c[6] = r, c[7] = o) : o = c[7], c[8] !== h ? (s = e => {
                    e || h()
                }, c[8] = h, c[9] = s) : s = c[9], c[10] !== d || c[11] !== f || c[12] !== o || c[13] !== s || c[14] !== p ? (l = (0, n.jsx)(i.a, {
                    open: !0,
                    size: "appLauncher",
                    widthHint: p,
                    dialogCloseClassName: "z-10",
                    shouldIgnoreClickOutside: f,
                    contentProps: o,
                    onOpenChange: s,
                    children: d
                }), c[10] = d, c[11] = f, c[12] = o, c[13] = s, c[14] = p, c[15] = l) : l = c[15], l
            }
        })
    }),
    JHD7: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57"),
            o = r("v7qY"),
            s = r("FgVF"),
            l = r("EAcR"),
            c = r("qwxA");
        r.d(t, {}, {
            a: function(e) {
                let t, r, d, u, p, g, h, m, f, y, w = (0, a.c)(20);
                w[0] !== e ? ({
                    children: t,
                    className: r,
                    contentContainer: d,
                    contentOverride: u,
                    ...p
                } = e, w[0] = e, w[1] = t, w[2] = r, w[3] = d, w[4] = u, w[5] = p) : (t = w[1], r = w[2], d = w[3], u = w[4], p = w[5]), w[6] !== p ? (g = (0, n.jsx)(l.a, {
                    ...p
                }), w[6] = p, w[7] = g) : g = w[7];
                let v = g;
                w[8] !== d || w[9] !== v ? (h = null == d ? v : (0, o.createPortal)(v, d), w[8] = d, w[9] = v, w[10] = h) : h = w[10];
                let _ = h;
                w[11] !== r ? (m = (0, i.b)("relative h-full min-h-0", r), w[11] = r, w[12] = m) : m = w[12], w[13] !== p.mcpAppId ? (f = (0, n.jsx)(c.b, {
                    isInlineRequested: !0,
                    mcpAppId: p.mcpAppId
                }), w[13] = p.mcpAppId, w[14] = f) : f = w[14];
                let I = void 0 === u ? _ : u;
                return w[15] !== t || w[16] !== m || w[17] !== f || w[18] !== I ? (y = (0, n.jsxs)(s.a, {
                    className: m,
                    children: [f, t, I]
                }), w[15] = t, w[16] = m, w[17] = f, w[18] = I, w[19] = y) : y = w[19], y
            }
        })
    }),
    So8L: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("zd8w"),
            o = r("Wf1j"),
            s = r("oyxz"),
            l = r("Sm6l"),
            c = r("FrrB"),
            d = r("Cv9y");
        r.d(t, {}, {
            a: function(e) {
                let t, r, u, p, g = (0, a.c)(18),
                    {
                        actions: h,
                        description: m,
                        illustration: f,
                        title: y,
                        isLoading: w,
                        onRetry: v
                    } = e,
                    [_, I] = (0, i.useState)(!1),
                    b = (0, o.a)();
                g[0] !== b || g[1] !== w || g[2] !== y ? (t = w ? b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app"
                }) : y ?? b.formatMessage({
                    id: "openaiMcpCapabilities.unavailable.title",
                    defaultMessage: "App unavailable"
                }), g[0] = b, g[1] = w, g[2] = y, g[3] = t) : t = g[3];
                let A = t;
                g[4] !== _ ? (r = _ ? (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.retryFailed",
                    defaultMessage: "The app is still unavailable after retrying"
                }) : (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.description",
                    defaultMessage: "Try again to load the app"
                }), g[4] = _, g[5] = r) : r = g[5];
                let x = r;
                return g[6] !== h || g[7] !== m || g[8] !== x || g[9] !== _ || g[10] !== f || g[11] !== w || g[12] !== v || g[13] !== A ? (u = w ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("span", {
                        className: "sr-only",
                        children: A
                    }), (0, n.jsx)(d.a, {
                        fullSurface: !0,
                        height: "100%",
                        showLoadingStatus: !1
                    })]
                }) : (0, n.jsx)("div", {
                    className: "flex h-full min-h-0 items-center justify-center select-none",
                    children: (0, n.jsx)(c.a, {
                        title: A,
                        illustration: f,
                        description: void 0 === m ? x : m,
                        actions: h ?? (!_ && (0, n.jsx)(l.a, {
                            color: "secondary",
                            onClick: () => {
                                I(!0), v()
                            },
                            children: (0, n.jsx)(s.a, {
                                id: "openaiMcpCapabilities.unavailable.retry",
                                defaultMessage: "Retry"
                            })
                        }))
                    })
                }), g[6] = h, g[7] = m, g[8] = x, g[9] = _, g[10] = f, g[11] = w, g[12] = v, g[13] = A, g[14] = u) : u = g[14], g[15] !== A || g[16] !== u ? (p = (0, n.jsx)("div", {
                    className: "relative h-full min-h-0",
                    role: "status",
                    "aria-label": A,
                    children: u
                }), g[15] = A, g[16] = u, g[17] = p) : p = g[17], p
            }
        })
    }),
    DSZZ: (function(e, t, r) {
        var n = r("Q840"),
            a = r("UKCO"),
            i = r("Cslg"),
            o = r("nlNF"),
            s = r("OWtl"),
            l = r("ADAj");
        let c = (0, n.u)(s.a, () => null);
        r.d(t, {}, {
            a: c,
            b: function(e, t) {
                let r = e.get(i.f),
                    n = e.get(i.j),
                    s = e.get(o.e);
                return null != r && null != n && (0, l.b)(e.get, a.yf.showEducationalTips) ? () => {
                    r === e.get(i.f) && n === e.get(i.j) && s === e.get(o.e) && e.set(c, {
                        accountId: r,
                        conversationId: t,
                        navigationVisit: s,
                        userId: n
                    })
                } : null
            }
        })
    })
};