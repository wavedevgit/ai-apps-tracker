export const __rspack_esm_ids = [769185];
export const __webpack_modules__ = {
    zcdy: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("SZCv"),
            i = r.n(a),
            o = r("BolX"),
            s = r("URlz"),
            l = r("ENcj"),
            c = r("NJrC"),
            d = r("qZWE"),
            u = r("kl6F"),
            p = r("zUz7");

        function g(e) {
            return null != e && "widget" in e && null != e.sandboxOrigin
        }
        let h = (0, o.d)(u.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: a
                } = t, i = a(d.h, r), o = i?.sessionId == null ? null : i.content, s = o?.resource;
                return null != n && null != o && g(s) && s.resourceKey === n ? {
                    widget: s.widget,
                    sandboxOrigin: s.sandboxOrigin
                } : null
            }),
            m = (0, o.d)(u.a, (e, t) => {
                let {
                    retainFrame: r = !0,
                    ...a
                } = e, {
                    get: i
                } = t, o = i(l.a, a), c = r && null == o.data ? i(d.h, a.mcpAppId) : null, u = c?.content, p = u?.resource, h = c?.sessionId != null && null != u && g(p) && null != p.resourceKey && null != p.resourceQuery && (0, n.f)([p.resourceQuery]) === (0, n.f)([a]) && "current" === i(s.c, u.access) ? {
                    widget: p.widget,
                    sandboxOrigin: p.sandboxOrigin,
                    resourceKey: p.resourceKey
                } : void 0, m = o.data ?? h;
                return {
                    ...o,
                    data: null == m ? void 0 : {
                        ...m,
                        resourceQuery: a
                    }
                }
            }, {
                autoDispose: !0,
                isEqual: i()
            });
        r.d(t, {}, {
            a: h,
            b: m,
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
                }, s = (0, c.b)(o, e.sandboxOrigin);
                if (s?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
                let l = e.widget.inline_frame_padding;
                return {
                    ...s,
                    sandboxOrigin: e.sandboxOrigin,
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
                    widget: e.widget,
                    toolIcon: (0, p.a)({
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
            d: g
        })
    }),
    thD3: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("BolX"),
            o = r("hV9T"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Sbyb"),
            u = r("BQbE"),
            p = r("Sm6l"),
            g = r("So8L"),
            h = r("piij"),
            m = r("OWtl"),
            f = r("f3BX");

        function y() {}
        r.d(t, {}, {
            a: function(e) {
                let t, r, w, _, v, I, b, A, x, q = (0, a.c)(39),
                    {
                        error: S,
                        hostId: C,
                        isLoading: T,
                        onRetry: j
                    } = e,
                    M = (0, i.y)(m.a),
                    E = (0, l.a)(),
                    [k, P] = (0, s.useState)(null),
                    R = S instanceof f.a ? S : null;
                q[0] !== R?.connectorId ? (t = R?.connectorId?.trim() || null, q[0] = R?.connectorId, q[1] = t) : t = q[1];
                let N = t;
                q[2] !== N ? (r = null == N ? [] : [N], q[2] = N, q[3] = r) : r = q[3];
                let D = null != N && !T;
                q[4] !== r || q[5] !== D ? (w = {
                    appIds: r,
                    enabled: D,
                    hostId: o.Xb
                }, q[4] = r, q[5] = D, q[6] = w) : w = q[6];
                let {
                    data: H
                } = (0, u.c)(w);
                if (q[7] !== H || q[8] !== N || q[9] !== E) {
                    let e = H?.find(e => e.id === N)?.name.trim();
                    _ = e ? E.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectNamedApp",
                        defaultMessage: "Connect {appName} to continue",
                        description: "Title prompting the user to connect a named app before continuing"
                    }, {
                        appName: e
                    }) : E.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectDescription",
                        defaultMessage: "Connect the app to continue",
                        description: "Recovery guidance when a hosted MCP app needs a connection before it can open"
                    }), q[7] = H, q[8] = N, q[9] = E, q[10] = _
                } else _ = q[10];
                let L = _,
                    U = R?.reauthLinkId,
                    O = R?.authReason ?? "reauthentication_required",
                    G = R?.requestedScopes;
                q[11] !== k ? (v = () => () => k?.abort(), q[11] = k, q[12] = v) : v = q[12], q[13] !== O || q[14] !== k || q[15] !== N || q[16] !== C || q[17] !== U || q[18] !== G ? (I = [k, N, C, U, O, G], q[13] = O, q[14] = k, q[15] = N, q[16] = C, q[17] = U, q[18] = G, q[19] = I) : I = q[19], (0, s.useEffect)(v, I);
                let F = null == N ? void 0 : L;
                q[20] !== N ? (b = null == N ? void 0 : (0, n.jsx)("img", {
                    className: "size-40 object-contain select-none",
                    src: h,
                    alt: "",
                    draggable: !1
                }), q[20] = N, q[21] = b) : b = q[21];
                let W = null == N ? void 0 : null;
                return q[22] !== O || q[23] !== k || q[24] !== N || q[25] !== C || q[26] !== T || q[27] !== j || q[28] !== U || q[29] !== G || q[30] !== M ? (A = null == N ? void 0 : (0, n.jsx)(p.a, {
                    color: "secondary",
                    disabled: null != k || T,
                    loading: null != k || T,
                    onClick: () => {
                        let e = new AbortController;
                        P(e), (0, d.requestMcpConnectSheet)(M, {
                            connectorId: N,
                            hostId: C,
                            oauthPresentation: "popup",
                            payload: null == U ? void 0 : {
                                requireAuth: !0,
                                authReason: O,
                                reauthLinkId: U,
                                requestedScopes: G
                            },
                            signal: e.signal
                        }).then(t => {
                            let {
                                didConnect: r,
                                linkId: n
                            } = t;
                            r && !e.signal.aborted && (null == U || n === U) && j()
                        }).catch(y).finally(() => P(null))
                    },
                    children: (0, n.jsx)(c.a, {
                        id: "openaiMcpCapabilities.unavailable.connect",
                        defaultMessage: "Connect",
                        description: "Button that opens the existing connection flow for a hosted MCP app"
                    })
                }), q[22] = O, q[23] = k, q[24] = N, q[25] = C, q[26] = T, q[27] = j, q[28] = U, q[29] = G, q[30] = M, q[31] = A) : A = q[31], q[32] !== T || q[33] !== j || q[34] !== W || q[35] !== A || q[36] !== F || q[37] !== b ? (x = (0, n.jsx)(g.a, {
                    isLoading: T,
                    onRetry: j,
                    title: F,
                    illustration: b,
                    description: W,
                    actions: A
                }), q[32] = T, q[33] = j, q[34] = W, q[35] = A, q[36] = F, q[37] = b, q[38] = x) : x = q[38], x
            }
        })
    }),
    rcTL: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => eL,
            a: () => eU,
            EcosystemWidgetDialog: () => eR
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("BolX"),
            o = r("hV9T"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Qgfj"),
            u = r("jqIZ"),
            p = r("ZU27"),
            g = r("o6hs"),
            h = r("Ooax"),
            m = r("PrVQ"),
            f = r("zcdy"),
            y = r("uUH7"),
            w = r("ENcj"),
            _ = r("Cslg"),
            v = r("EOo5"),
            I = r("kphc"),
            b = r("WBiY"),
            A = r("JNtf"),
            x = r("RNul"),
            q = r("SGsN"),
            S = r("PeqE"),
            C = r("s5P0"),
            T = r("JSwr"),
            j = r("vcrj"),
            M = r("qwxA"),
            E = r("qZWE"),
            k = r("JHD7"),
            P = r("Sd8U"),
            R = r("tSEg"),
            N = r("f3BX"),
            D = r("thD3"),
            H = r("OOaz"),
            L = r("dQRk"),
            U = r("kSHG"),
            O = r("sS8e"),
            G = r("OWtl"),
            F = r("OMIV"),
            W = r("bnxy"),
            B = r("rxj0"),
            z = r("IDHB");
        let $ = (0, i.d)(G.a, (e, t) => {
            let {
                get: r
            } = t, n = r(_.m);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r(F.d, "3080374709") || null == e || null == r(L.j, e) || null != r(L._, e)) return !1;
            let a = r(L.y, e);
            return ("tpp" === a || "flora" === a) && !r(B.e, e)
        });
        var V = r("T8YV"),
            K = r("HUQj"),
            Q = r("lax3"),
            Y = r("z8ZL"),
            J = r("ASxG"),
            Z = r("Sbyb"),
            X = r("jEN2"),
            ee = r("JYRT"),
            et = r("ripK"),
            er = r("g2p6"),
            en = r("sWz1"),
            ea = r("EA6X"),
            ei = r("g25Y"),
            eo = r("Ot7V"),
            es = r("X6Vn"),
            el = r("MefB"),
            ec = r("yGJW"),
            ed = r("yI91"),
            eu = r("Kwur"),
            ep = r("VV1g"),
            eg = r("aRhc");
        let eh = "redirectUrl",
            em = J.object({
                href: J.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: J.union([J.string(), J.boolean()]).optional(),
                openMode: J.enum(["tab", "popup"]).optional()
            });

        function ef(e, t, r, n) {
            let a = !0 === t.widget.is_verified_first_party,
                i = e.get(L.j, t.request.chatGptThreadId ?? null);
            (0, ec.a)(e, ea.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === t.mcpAppHostAdapter.displayMode ? ea.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : ea.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
        var ey = r("iqEK"),
            ew = r("UxLW"),
            e_ = r("vvmK");
        let ev = J.object({
            fileId: J.string().min(1)
        });
        var eI = r("bTvG"),
            eb = r("JKSp"),
            eA = r("PFjh"),
            ex = r("DXan");
        let eq = {
                label: J.string(),
                tags: J.array(J.object({
                    key: J.string(),
                    value: J.string()
                })).optional()
            },
            eS = J.discriminatedUnion("type", [J.object({
                type: J.literal("event"),
                label: J.string(),
                payload: J.record(J.string(), J.json()).optional()
            }), J.object({
                type: J.literal("interaction"),
                ...eq
            }), J.object({
                type: J.literal("count"),
                ...eq,
                count: J.number().optional()
            }), J.object({
                type: J.literal("hist"),
                ...eq,
                value: J.number()
            }), J.object({
                type: J.literal("error")
            })]);
        var eC = r("Igop"),
            eT = r("DSZZ");
        let ej = "openai/deep-research/report-copy",
            eM = J.discriminatedUnion("phase", [J.strictObject({
                phase: J.literal("start"),
                id: J.uuid(),
                length: J.number().int().nonnegative()
            }), J.strictObject({
                phase: J.literal("finish"),
                id: J.uuid(),
                success: J.boolean()
            })]);
        var eE = r("AuIy"),
            ek = r("xSzB");

        function eP(e) {
            let t, r = e._meta,
                n = e;
            for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                let e = (0, eE.s)(t);
                if (!Array.isArray(e?.content) && e?.structuredContent === void 0) continue;
                let r = (0, ek.c)(t, {
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
        }

        function eR(e) {
            let t, r = (0, a.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(eN, {
                ...e
            }) : (0, n.jsx)(eD, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function eN(e) {
            let t, r = (0, a.c)(3),
                o = (0, i.y)(P.a);
            return r[0] !== e || r[1] !== o ? (t = (0, n.jsx)(eD, {
                ...e,
                recipient: o
            }), r[0] = e, r[1] = o, r[2] = t) : t = r[2], t
        }

        function eD(e) {
            let t, r, d, u, p, g, h, m, f, y, w, _, v = (0, a.c)(62),
                {
                    recipient: I,
                    conversationId: b,
                    hostId: S,
                    mcpAppId: C,
                    onClose: T,
                    state: M,
                    heightHint: k,
                    widthHint: P,
                    allowsInteractiveDismissal: H
                } = e,
                L = void 0 === I ? null : I,
                U = (0, i.y)(R.a),
                O = (0, l.a)();
            v[0] !== C ? (t = () => C ?? (0, o.xf)(), v[0] = C, v[1] = t) : t = v[1];
            let [G] = (0, s.useState)(t), F = "ready" === M.kind && "modal" === M.result.request.mode ? Math.max(k ?? M.result.widget.height_hint ?? 0, 0) || void 0 : k, W = "ready" === M.kind ? M.result.tracking : M.tracking, B = "ready" === M.kind && "fullscreen" === M.result.request.mode, z = "loading" === M.kind && !0 === M.nonModal;
            v[2] !== T || v[3] !== W ? (r = () => {
                W?.close("user_dismissed"), T()
            }, v[2] = T, v[3] = W, v[4] = r) : r = v[4];
            let $ = (0, s.useEffectEvent)(r);
            v[5] !== H || v[6] !== $ || v[7] !== z || v[8] !== U ? (d = () => {
                if (z) return U.get(q.f).info((0, n.jsx)(c.a, {
                    ...eG.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(x.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === H ? void 0 : {
                        label: (0, n.jsx)(c.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel",
                            description: "Button to cancel opening an Apps SDK widget"
                        }),
                        onClick: () => $()
                    }
                }).close
            }, v[5] = H, v[6] = $, v[7] = z, v[8] = U, v[9] = d) : d = v[9], v[10] !== H || v[11] !== z || v[12] !== U ? (u = [U, z, H], v[10] = H, v[11] = z, v[12] = U, v[13] = u) : u = v[13], (0, s.useEffect)(d, u), v[14] !== B || v[15] !== T || v[16] !== W ? (p = () => {
                B && (W?.close("user_dismissed"), T())
            }, v[14] = B, v[15] = T, v[16] = W, v[17] = p) : p = v[17];
            let Q = (0, s.useEffectEvent)(p);
            if (v[18] !== Q || v[19] !== G || v[20] !== U || v[21] !== W ? (g = () => {
                    let e = U.watch(e => {
                        let t = e.get(E.s, G);
                        null != t && e.get(E.r, t)?.isOpen === !1 ? Q() : (e.get(E.v, G) && W?.renderReady(), null != e.get(E.q, G) && W?.error("widget_render"))
                    });
                    return () => {
                        e(), W?.close("navigation_changed")
                    }
                }, v[18] = Q, v[19] = G, v[20] = U, v[21] = W, v[22] = g) : g = v[22], v[23] !== G || v[24] !== U || v[25] !== W ? (h = [U, G, W], v[23] = G, v[24] = U, v[25] = W, v[26] = h) : h = v[26], (0, s.useEffect)(g, h), z) return null;
            if ("ready" === M.kind && B) {
                let e, t;
                return v[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], v[27] = e) : e = v[27], v[28] !== b || v[29] !== S || v[30] !== G || v[31] !== L || v[32] !== M.result ? (t = (0, n.jsx)(eL, {
                    recipient: L,
                    conversationId: b,
                    hostDisplayModes: e,
                    hostId: S,
                    lifetime: "component",
                    mcpAppId: G,
                    result: M.result
                }), v[28] = b, v[29] = S, v[30] = G, v[31] = L, v[32] = M.result, v[33] = t) : t = v[33], t
            }
            if ("error" === M.kind)
                if ((0, V.d)(M.error)) {
                    let e;
                    v[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                        children: (0, n.jsx)(K.a, {})
                    }), v[34] = e) : e = v[34], m = e
                } else if (M.error instanceof N.a) {
                let e, t;
                v[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.e, {
                    className: "sr-only",
                    children: (0, n.jsx)(c.a, {
                        ...eG.openAppError
                    })
                }), v[35] = e) : e = v[35], v[36] !== S || v[37] !== T || v[38] !== M.error ? (t = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(D.a, {
                        error: M.error,
                        hostId: S,
                        isLoading: !1,
                        onRetry: T
                    })]
                }), v[36] = S, v[37] = T, v[38] = M.error, v[39] = t) : t = v[39], m = t
            } else {
                let e, t;
                v[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.e, {
                    className: "text-lg font-medium",
                    children: (0, n.jsx)(c.a, {
                        ...eG.openAppError
                    })
                }), v[40] = e) : e = v[40], v[41] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                    children: [e, (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(c.a, {
                            ...eG.openAppErrorDescription
                        })
                    })]
                }), v[41] = t) : t = v[41], m = t
            }
            return v[42] !== O ? (f = O.formatMessage(eG.appTitle), v[42] = O, v[43] = f) : f = v[43], v[44] !== T || v[45] !== W ? (y = () => {
                W?.close("user_dismissed"), T()
            }, v[44] = T, v[45] = W, v[46] = y) : y = v[46], v[47] !== b || v[48] !== m || v[49] !== S || v[50] !== G || v[51] !== L || v[52] !== M.kind || v[53] !== M.result ? (w = "loading" === M.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(c.a, {
                    ...eG.openingApp
                })
            }) : "error" === M.kind ? m : (0, n.jsx)(eL, {
                recipient: L,
                conversationId: b,
                hostId: S,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: G,
                result: M.result
            }), v[47] = b, v[48] = m, v[49] = S, v[50] = G, v[51] = L, v[52] = M.kind, v[53] = M.result, v[54] = w) : w = v[54], v[55] !== H || v[56] !== F || v[57] !== y || v[58] !== w || v[59] !== f || v[60] !== P ? (_ = (0, n.jsx)(j.a, {
                "aria-label": f,
                heightHint: F,
                widthHint: P,
                allowsInteractiveDismissal: H,
                onClose: y,
                children: w
            }), v[55] = H, v[56] = F, v[57] = y, v[58] = w, v[59] = f, v[60] = P, v[61] = _) : _ = v[61], _
        }

        function eH(e, t) {
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

        function eL(e) {
            let t, r, o, s, c, d, u, p, g, h, m, y, w, _, v, I, b = (0, a.c)(43);
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
                S = void 0 !== d && d,
                C = void 0 === u ? E.d : u,
                T = void 0 === p ? x : p,
                j = void 0 === g || g,
                M = void 0 !== h && h,
                P = (0, l.a)(),
                R = eH(t, r);
            b[11] !== P || b[12] !== R.widget.name ? (m = R.widget.name || P.formatMessage(eG.appTitle), b[11] = P, b[12] = R.widget.name, b[13] = m) : m = b[13];
            let N = m,
                D = R.title || N;
            b[14] !== t || b[15] !== o.imageDomains ? (y = (0, f.c)(t, o.imageDomains), b[14] = t, b[15] = o.imageDomains, b[16] = y) : y = b[16], b[17] !== y ? (w = {
                data: y,
                error: null,
                isLoading: !1
            }, b[17] = y, b[18] = w) : w = b[18];
            let H = w,
                L = (0, i.x)(E.m, r),
                U = x ? "isolate" : void 0,
                O = M || !0 === R.widget.disable_loading_state;
            return b[19] !== T || b[20] !== D ? (_ = T ? (0, n.jsx)(A.e, {
                className: "sr-only",
                children: D
            }) : null, b[19] = T, b[20] = D, b[21] = _) : _ = b[21], b[22] !== q || b[23] !== C || b[24] !== S || b[25] !== r || b[26] !== N || b[27] !== L || b[28] !== H || b[29] !== j || b[30] !== U || b[31] !== O || b[32] !== _ ? (v = (0, n.jsx)(k.a, {
                className: U,
                showLoadingStatus: j,
                disableInlineLoadingState: O,
                hostDisplayModes: C,
                resource: H,
                fullSurface: q,
                hostScroll: S,
                mcpAppId: r,
                appName: N,
                presentation: L,
                children: _
            }), b[22] = q, b[23] = C, b[24] = S, b[25] = r, b[26] = N, b[27] = L, b[28] = H, b[29] = j, b[30] = U, b[31] = O, b[32] = _, b[33] = v) : v = b[33], b[34] !== t || b[35] !== q || b[36] !== C || b[37] !== S || b[38] !== x || b[39] !== r || b[40] !== o || b[41] !== v ? (I = (0, n.jsx)(eU, {
                ...o,
                result: t,
                inDialog: x,
                fullSurface: q,
                hostScroll: S,
                hostDisplayModes: C,
                mcpAppId: r,
                children: v
            }), b[34] = t, b[35] = q, b[36] = C, b[37] = S, b[38] = x, b[39] = r, b[40] = o, b[41] = v, b[42] = I) : I = b[42], I
        }

        function eU(e) {
            let t, c, d, A, x, j, k, P, N, D, G, V, K, ea, eq, eE, ek, eN, eD, eU, eW = (0, a.c)(154),
                {
                    recipient: eB,
                    children: ez,
                    newThreadDestination: e$,
                    conversationId: eV,
                    deepLink: eK,
                    initialWidgetState: eQ,
                    pluginId: eY,
                    hostId: eJ,
                    inDialog: eZ,
                    Frame: eX,
                    lifetime: e0,
                    mcpAppId: e1,
                    hostedInThreadScrollLayout: e3,
                    result: e2,
                    imageDomains: e5,
                    fullSurface: e8,
                    globalSurface: e4,
                    hostScroll: e6,
                    hostDisplayModes: e7,
                    inheritHostBackground: e9,
                    heightHint: te,
                    readOnlySnapshot: tt
                } = e,
                tr = void 0 === eB ? null : eB,
                tn = void 0 !== eZ && eZ,
                ta = void 0 === eX ? T.a : eX,
                ti = void 0 !== e3 && e3,
                to = void 0 === e8 ? tn : e8,
                ts = void 0 !== e4 && e4,
                tl = void 0 !== e6 && e6,
                tc = void 0 === e7 ? E.d : e7,
                td = void 0 !== e9 && e9,
                tu = void 0 !== tt && tt,
                tp = (0, i.y)(R.a),
                tg = e2.resourceQuery,
                th = eH(e2, e1),
                {
                    accountId: tm
                } = (0, v.a)(),
                {
                    pathname: tf,
                    search: ty,
                    hash: tw
                } = (0, u.Y)(),
                t_ = (0, l.a)(),
                tv = (0, i.x)($, th.request.chatGptThreadId);
            eW[0] !== eV || eW[1] !== eJ || eW[2] !== t_ || eW[3] !== tr || eW[4] !== th || eW[5] !== tp ? (t = async (e, t) => {
                let r = tp.get(y.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == th.modalOwner && r.hostId === eJ && "current" === th.access.status(tp.get) && n.accountId === th.access.accountId && n.userId === th.access.uiUserId && n.sourceAppUri === th.request.appUri && n.sourceTemplate === th.request.template && n.sourceMessageId === th.request.sourceMessageId && n.sourceThreadId === th.request.threadId && n.sourceConversationId === tp.get(L.j, th.request.chatGptThreadId)) {
                    tp.set(y.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eO();
                        t.throwIfAborted(), await e(tp, {
                            recipient: tr,
                            conversationId: eV,
                            hostId: eJ,
                            result: th,
                            WidgetDialog: eR,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tp.get(q.f).danger(t_.formatMessage(eG.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, eW[0] = eV, eW[1] = eJ, eW[2] = t_, eW[3] = tr, eW[4] = th, eW[5] = tp, eW[6] = t) : t = eW[6];
            let tI = (0, s.useEffectEvent)(t);
            eW[7] !== tn || eW[8] !== tI || eW[9] !== tp ? (c = () => {
                if (tn) return;
                let e = new AbortController,
                    t = tp.watch(t => {
                        let {
                            get: r
                        } = t, n = r(y.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tI(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, eW[7] = tn, eW[8] = tI, eW[9] = tp, eW[10] = c) : c = eW[10], eW[11] !== tn || eW[12] !== th.request.appUri || eW[13] !== th.request.chatGptThreadId || eW[14] !== th.request.sourceMessageId || eW[15] !== th.request.template || eW[16] !== tp ? (d = [tp, tn, th.request.appUri, th.request.template, th.request.sourceMessageId, th.request.chatGptThreadId], eW[11] = tn, eW[12] = th.request.appUri, eW[13] = th.request.chatGptThreadId, eW[14] = th.request.sourceMessageId, eW[15] = th.request.template, eW[16] = tp, eW[17] = d) : d = eW[17], (0, s.useEffect)(c, d), eW[18] !== e2 || eW[19] !== e5 ? (A = (0, f.c)(e2, e5), eW[18] = e2, eW[19] = e5, eW[20] = A) : A = eW[20];
            let tb = A,
                tA = th.mcpAppHostAdapter.displayMode ?? (tn ? "inline" : void 0);
            eW[21] !== tb ? (x = {
                data: tb,
                error: null,
                isLoading: !1
            }, eW[21] = tb, eW[22] = x) : x = eW[22];
            let tx = x,
                tq = `ecosystem-focused:${e1}`,
                tS = (0, i.x)(p.l.tabById$, tq);
            eW[23] !== e1 || eW[24] !== th || eW[25] !== tp ? (j = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eF();
                e(tp, e1, th)
            }, eW[23] = e1, eW[24] = th, eW[25] = tp, eW[26] = j) : j = eW[26];
            let tC = (0, s.useEffectEvent)(j);
            eW[27] !== tC || eW[28] !== tS || eW[29] !== tn || eW[30] !== e1 || eW[31] !== tp ? (k = () => {
                if (null != tS && !tn) return tp.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(E.h, e1) && tC()
                })
            }, eW[27] = tC, eW[28] = tS, eW[29] = tn, eW[30] = e1, eW[31] = tp, eW[32] = k) : k = eW[32], eW[33] !== tS || eW[34] !== tn || eW[35] !== e1 || eW[36] !== tp ? (P = [tp, tS, tn, e1], eW[33] = tS, eW[34] = tn, eW[35] = e1, eW[36] = tp, eW[37] = P) : P = eW[37], (0, s.useEffect)(k, P);
            let tT = th.access.serverIdentity,
                tj = "connectorId" in tT ? tT.connectorId : null;
            eW[38] !== t_ || eW[39] !== th.widget.name ? (N = th.widget.name || t_.formatMessage(eG.appTitle), eW[38] = t_, eW[39] = th.widget.name, eW[40] = N) : N = eW[40];
            let tM = N,
                tE = th.title || tM,
                {
                    request: tk,
                    toolResult: tP
                } = e2;
            eW[41] !== tP ? (D = eP(tP), eW[41] = tP, eW[42] = D) : D = eW[42];
            let tR = D,
                tN = !tu && tk.template === h.a,
                tD = (0, i.z)(tN ? _.j : null);
            e: {
                let e, t;
                if (!tN) {
                    G = void 0;
                    break e
                }
                let r = e2.modalOwner?.result ?? e2,
                    n = r.access.serverIdentity;
                if (null == tD || !("connectorId" in n) || n.connectorId !== tj || r.request.template !== tk.template || !0 !== e2.widget.is_verified_first_party || !0 === e2.mcpAppHostAdapter.isTombstone || null != tR.toolCallStatus) {
                    G = void 0;
                    break e
                }
                eW[43] !== e2.mcpAppHostAdapter || eW[44] !== e1 || eW[45] !== tD || eW[46] !== tp ? (e = () => {
                    if (e2.mcpAppHostAdapter.assertActive?.(), tp.get(_.j) !== tD || tp.get(E.h, e1)?.content.mcpAppScope.isVerifiedFirstParty !== !0) throw Error("This widget is no longer active.")
                }, eW[43] = e2.mcpAppHostAdapter, eW[44] = e1, eW[45] = tD, eW[46] = tp, eW[47] = e) : e = eW[47];
                let a = e;
                if (eW[48] !== a || eW[49] !== tj || eW[50] !== e2.access || eW[51] !== eJ || eW[52] !== tr || eW[53] !== tD || eW[54] !== tk || eW[55] !== tp || eW[56] !== r.request.chatGptThreadId || eW[57] !== r.request.sourceMessageId || eW[58] !== r.request.toolInput || eW[59] !== r.toolResult) {
                    let e;
                    eW[61] !== tj || eW[62] !== e2.access || eW[63] !== tr || eW[64] !== tD || eW[65] !== tk || eW[66] !== tp ? (e = async e => {
                        let {
                            chatGptThreadId: t,
                            sourceMessageId: r
                        } = tk, n = tr?.value;
                        if (null == tr || n?.kind !== "chatgpt" || null == t || null == r) return;
                        let a = (0, b.getMcpAppSubmit)(tr, () => {
                            let e = e => tp.get(L.j, e) ?? e;
                            if (tp.get(_.j) !== tD || e(n.conversationId) !== e(t) || tp.get(R.j) || "current" !== e2.access.status(tp.get) || null != tp.get(L._, t) || null == tp.get(L.M, t) || tp.get(Q.c, {
                                    conversationId: t,
                                    messageId: r
                                }) || (0, B.j)(tp, t)) throw new DOMException("The originating request is no longer available", "AbortError")
                        });
                        null != a && await a({
                            turnTrigger: "mcp_app_follow_up",
                            addedFiles: [],
                            fileAttachments: [],
                            ideContext: null,
                            imageAttachments: [],
                            prompt: (0, h.b)(e)
                        }, {
                            name: tk.template,
                            attribution: tj ?? void 0,
                            visuallyHidden: !0
                        })
                    }, eW[61] = tj, eW[62] = e2.access, eW[63] = tr, eW[64] = tD, eW[65] = tk, eW[66] = tp, eW[67] = e) : e = eW[67], t = (0, m.a)({
                        scope: tp,
                        hostId: eJ,
                        sourceId: JSON.stringify([r.request.chatGptThreadId, r.request.sourceMessageId]),
                        productSku: g.d.shape.productSku.parse(tk.productSku?.toUpperCase()),
                        access: e2.access,
                        resourceUri: tk.template,
                        toolInput: r.request.toolInput,
                        toolResult: eP(r.toolResult).toolResultNotification,
                        assertActive: a,
                        onReconnected: e
                    }), eW[48] = a, eW[49] = tj, eW[50] = e2.access, eW[51] = eJ, eW[52] = tr, eW[53] = tD, eW[54] = tk, eW[55] = tp, eW[56] = r.request.chatGptThreadId, eW[57] = r.request.sourceMessageId, eW[58] = r.request.toolInput, eW[59] = r.toolResult, eW[60] = t
                } else t = eW[60];G = t
            }
            let tH = G;
            eW[68] !== tm || eW[69] !== tv || eW[70] !== tj || eW[71] !== eV || eW[72] !== e2 || eW[73] !== tA || eW[74] !== tS || eW[75] !== tq || eW[76] !== tw || eW[77] !== te || eW[78] !== eJ || eW[79] !== tn || eW[80] !== t_ || eW[81] !== e1 || eW[82] !== tf || eW[83] !== tu || eW[84] !== tr || eW[85] !== tH || eW[86] !== tp || eW[87] !== ty ? (V = e => {
                if (!(0, f.d)(e)) throw Error("Expected a hosted widget resource");
                let t = {
                    ...e2,
                    widget: e.widget,
                    sandboxOrigin: e.sandboxOrigin,
                    resourceKey: e.resourceKey
                };
                if (tn) {
                    let e = t.mcpAppHostAdapter;
                    t.mcpAppHostAdapter = {
                        ...e,
                        handleRequest: (t, r, n) => e.handleRequest(t, r, n)
                    }
                }
                null != t.getPluginSuggestions && (t.mcpAppHostAdapter = {
                    ...t.mcpAppHostAdapter,
                    pluginSuggestions: t.getPluginSuggestions(t.widget)
                });
                let n = t.widget.name || t_.formatMessage(eG.appTitle),
                    a = t.title || n,
                    i = {
                        isVerifiedFirstParty: !0 === t.widget.is_verified_first_party,
                        heightHint: te ?? e.heightHint,
                        minFrameHeight: e.minFrameHeight ?? 0,
                        appIcon: e.appIcon,
                        toolIcon: e.toolIcon,
                        sourceName: n,
                        title: a,
                        sidePanelTitle: a
                    };
                if (tu) return {
                    ...i,
                    mcpAppHostAdapter: t.mcpAppHostAdapter
                };
                let s = tp.get(L.y, t.request.chatGptThreadId);
                return {
                    ...i,
                    mcpAppHostAdapter: {
                        ...t.mcpAppHostAdapter,
                        displayMode: tA,
                        ... function(e, t, n, a) {
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
                                    let i = eM.safeParse(t);
                                    if (!i.success) return;
                                    let o = i.data,
                                        s = a.get(o.id);
                                    if (s?.dispose(), !(r.aborted || e.get(L.H, n) || null != e.get(L._, n) || e.get(B.e, n)))
                                        if ("start" === o.phase) {
                                            let t = o.length >= 2e3 ? (0, eT.b)(e, n) : null;
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
                            }(e, n), v = new Set(["fullscreen"]);
                            if (!0 === n.widget.is_verified_first_party)
                                for (let e of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) v.add(e);
                            for (let e of o.dj) n.widget.permissions?.[e] === !0 && v.add(o.cj[e].feature);
                            n.widget.permissions?.clipboard_write === !0 && v.add("clipboard-write");
                            let I = navigator.userAgent,
                                b = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(I) ? (b.os = "ios", b.type = "mobile") : /Android/.test(I) ? (b.os = "android", b.type = "mobile") : /Windows[ _]NT/.test(I) ? b.os = "windows" : I.includes("Mac OS X") && (b.os = "macos"), "mobile" !== b.type && /Tablet/.test(I) && (b.type = "tablet");
                            let A = (0, eg.a)(n.widget.domain),
                                x = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                S = null != x && Object.values(e.get(ee.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === x);
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
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885)]).then(r.bind(r, "IKJx")), o = await i();
                                    return m(a), o(e, n, t, a, () => m(a))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == w ? [] : [ej]],
                                handleRequest: async (r, a, i, o) => null != w && r.method === ej ? (m(a), null != a && w(r.params, a), {}) : (0, eC.a)(e, t, n.mcpAppHostAdapter, n.access, r, a, m, i, o),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (m(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let a = n.request.chatGptThreadId,
                                        i = J.object({
                                            text: J.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!i.success || null == a) return;
                                    let o = e.get(er.n);
                                    if (null == o || o !== f) throw Error("The widget account changed");
                                    (0, en.b)(e, a, {
                                        accountId: o,
                                        label: i.data.text,
                                        instruction: `The user is referring to this in particular:
${i.data.text}`,
                                        disableWebSearch: !1,
                                        targetedReplyText: i.data.text
                                    }), (0, X.e)(a)
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
                                        return ("https:" === t.protocol || "http:" === t.protocol) && (0, eg.c)(t.href, {
                                            connectDomains: n.widget.csp?.connect_domains
                                        }, n.widget.domain) ? t.href : null
                                    }
                                },
                                openExternal: (t, r) => (async function(e, t, r, n, a, i) {
                                    a(n);
                                    let o = ep.b.safeParse(r);
                                    if (o.success) return !0 === t.widget.is_verified_first_party && (await i?.(o.data.href, n), a(n)), !0;
                                    let {
                                        href: s,
                                        redirectUrl: l,
                                        openMode: c
                                    } = em.parse(r);
                                    if (/^data:/i.test(s)) {
                                        if (s.length > 0x1000000) throw Error("CSV export is too large");
                                        let r = s.indexOf(","),
                                            i = decodeURIComponent(s.slice(r + 1)),
                                            o = new Blob([/;base64$/i.test(s.slice(0, r)) ? (0, ed.a)(i) : i], {
                                                type: "text/csv;charset=utf-8"
                                            });
                                        if (o.size > 8388608) throw Error("CSV export is too large");
                                        return ef(e, t, "data:text/csv", "tab"), (0, es.f)(e, ei.ExternalLinkConfirmationDialog, {
                                            href: s,
                                            downloadFilename: "export.csv",
                                            initiator: "mcp_app_resource",
                                            signal: n,
                                            onDownload: () => {
                                                try {
                                                    a(n)
                                                } catch {
                                                    return
                                                }(0, et.a)(o, "export.csv")
                                            }
                                        }), !0
                                    }
                                    if (null == c && t.mcpAppHostAdapter.onOpenLink?.(s)) return !0;
                                    if (/^codex(?:-dev)?:/.test(s)) return !1;
                                    let d = !0 === t.widget.is_verified_first_party;
                                    if (d && null == c && await i?.(s, n)) return !0;
                                    a(n);
                                    let u = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                                        p = (0, eg.c)(s, {
                                            connectDomains: t.widget.csp?.connect_domains
                                        }, t.widget.domain) || (0, eg.b)(s, u),
                                        g = !/^https?:/.test(s);
                                    if (g && !p) throw Error("The app has not declared this external protocol");
                                    let h = new URL(s),
                                        m = !g && h.origin === window.location.origin;
                                    h.search = "", h.hash = "";
                                    let f = e.get(L.j, t.request.chatGptThreadId ?? null);
                                    ef(e, t, h.href, c);
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
                                        return !n || r.searchParams.get(eh) ? e : (r.searchParams.set(eh, t), r.toString())
                                    }(s, null == f ? window.location.href : new URL(`/c/${encodeURIComponent(f)}`, window.location.origin).href));
                                    let w = m || p;
                                    if (!w && d) try {
                                        t.access.assertActive();
                                        let {
                                            accountId: e
                                        } = t.access;
                                        w = (await eu.Request.safePost("/ecosystem/url_safe", {
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
                                    let _ = "Apple Computer, Inc." === navigator.vendor,
                                        v = () => {
                                            try {
                                                a(n)
                                            } catch {
                                                return
                                            }
                                            g ? window.open(y, "_blank", "noopener,noreferrer") : d && "popup" === c && w && !_ ? (0, el.a)(e, y) : (0, eo.f)({
                                                href: y,
                                                initiator: "mcp_app_resource"
                                            })
                                        };
                                    return !w || _ || g ? (0, es.f)(e, ei.ExternalLinkConfirmationDialog, {
                                        href: y,
                                        initiator: "mcp_app_resource",
                                        showCopyLink: !w,
                                        signal: n,
                                        onOpen: v
                                    }) : v(), !0
                                })(e, n, t, r, m, a),
                                autofill: S && null != x && null != f && null != y ? async (t, a) => {
                                    m(a);
                                    let {
                                        createBrowserWidgetAutofill: i
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(108257)]).then(r.bind(r, "JFC7"));
                                    return m(a), i(e, n, x, t, a)
                                } : void 0,
                                sandboxFeatures: [...v],
                                instrumentation: (s = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), l = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : n.request.appUri, c = {
                                    ...(0, ex.a)(n.access, n.analyticsContext),
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
                                        let a = eS.safeParse(t);
                                        if (!a.success) return;
                                        let i = a.data;
                                        if ("event" === i.type) return void(0, ec.a)(e, eb.a, {
                                            eventName: i.label,
                                            eventData: JSON.stringify({
                                                ...i.payload,
                                                ...d,
                                                conversation_id: e.get(L.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: s,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === i.type) {
                                            "only_me" !== s && e.get(eA.a).count("ecosystem", "app.error", d);
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
                                        "interaction" === i.type ? ((0, ec.a)(e, eI.l, {
                                            ...c,
                                            ...r,
                                            conversationId: e.get(L.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, ex.b)(i.label)
                                        }), "only_me" !== s && e.get(eA.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [i.label] ?? "app.interaction", o)) : "only_me" !== s && ("count" === i.type ? e.get(eA.a).count("ecosystem", i.label, o, i.count) : e.get(eA.a).hist("ecosystem", i.label, o, i.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = J.object({
                                            effectiveDirective: J.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, ec.a)(e, eI.k, {
                                            ...c,
                                            conversationId: e.get(L.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== s && e.get(eA.a).count("ecosystem", "app.security_policy_violation", d))
                                    }
                                }),
                                toolInfo: J.object({
                                    tool: J.object({
                                        name: J.string(),
                                        input_schema: Y.c.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
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
                                    } = J.object({
                                        blob: J.instanceof(Blob),
                                        name: J.string()
                                    }).parse(e);
                                    (0, et.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    m(t);
                                    let {
                                        type: r
                                    } = J.object({
                                        type: J.enum(["light", "medium", "heavy", "selection", "success", "warning", "error"])
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
                                    } = J.object({
                                        title: J.string(),
                                        body: J.string().optional(),
                                        level: J.enum(["warning", "success", "danger"])
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
                                    if (t.throwIfAborted(), i.assertActive?.(), e.get(_.f) !== i.accountId || e.get(_.k) !== i.userId) throw Error("The widget account has changed")
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
                                        let n = J.instanceof(File).parse(e),
                                            a = J.object({
                                                library: J.boolean().optional()
                                            }).optional().parse(t),
                                            o = new FormData;
                                        o.append("app_uri", i.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), a?.library && o.append("store_in_library", "true"), u(r);
                                        let s = await eu.Request.safePost("/ecosystem/upload_widget_file", {
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
                                        let r = await eu.Request.safePost("/ecosystem/file_download_url", {
                                            ...p,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: ev.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return u(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        u(t);
                                        let r = await eu.Request.safePost("/ecosystem/file_metadata", {
                                            ...p,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: ev.parse(e).fileId
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
                                        let n = e.get(F.f);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(er.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: a
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                        u(t);
                                        let o = await a(e, t);
                                        if (u(t), 0 === o.length) return [];
                                        let s = await Promise.all(o.map(async e => {
                                            u(t);
                                            let r = null == (0, ew.a)(e.id) ? e : await (0, e_.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: p.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,ey.d)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return u(t), await eu.Request.safePost("/ecosystem/file_authorize_app", {
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
                                    m(t), await navigator.share(J.object({
                                        title: J.string().optional(),
                                        text: J.string().optional(),
                                        url: J.string().optional(),
                                        files: J.array(J.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == h ? void 0 : async (r, n) => {
                                    m(n);
                                    let a = await (0, Z.requestMcpConnectSheet)(e, {
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
                                    let a = await (0, Z.requestMcpConnectSheet)(e, {
                                        connectorId: J.object({
                                            connectorId: J.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (m(n), !0)
                                    });
                                    return m(n), a
                                }
                            }
                        }(tp, eJ, t, async (e, n) => {
                            let a = tp.get(L.y, t.request.chatGptThreadId);
                            if ("tpp" !== a && "flora" !== a) return !1;
                            let i = await async function() {
                                return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
                            }();
                            return n.throwIfAborted(), i(tp, {
                                recipient: tr,
                                WidgetContent: eL,
                                conversationId: eV,
                                hostId: eJ,
                                result: t,
                                mcpAppId: e1,
                                href: e,
                                signal: n
                            })
                        }, "tpp" === s || "flora" === s),
                        openFile: tv && !tn && null != t.request.sourceMessageId ? (e, n) => (async function(e, t, n, a) {
                            let {
                                chatGptThreadId: i,
                                sourceMessageId: o
                            } = t.request;
                            if (!o) throw (0, O.c)("File opening requires a source message", U.r.MethodNotFound);
                            let s = e.get(L.j, i);
                            if ("current" !== t.access.status(e.get)) throw (0, O.c)("File opening is unavailable for this widget", U.r.MethodNotFound);
                            let {
                                accountId: l,
                                uiUserId: c
                            } = t.access, d = e => "current" !== t.access.status(e.get) || e.get(R.j) || !e.get($, i) || e.get(_.f) !== l || e.get(_.k) !== c || e.get(L.j, i) !== s, u = () => {
                                if (a.throwIfAborted(), null == s || d(e)) throw (0, O.c)("File opening is unavailable for this widget", U.r.MethodNotFound)
                            };
                            if (u(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, O.c)("Cannot open this file path", U.r.InvalidParams);
                            let p = e.get(L.S, i),
                                g = (0, z.a)(e, i, {
                                    type: "sandbox",
                                    messageId: o,
                                    sandboxPath: n
                                }),
                                {
                                    canOpenChatGptFilePreview: h,
                                    openChatGptFile: m
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885)]).then(r.bind(r, "f2PP"));
                            if (u(), !h({
                                    browserPreview: !0
                                })) throw (0, O.c)("File previews are unavailable in this host", U.r.MethodNotFound);
                            try {
                                await m(e, {
                                    conversationId: s,
                                    fileName: (0, W.j)(n),
                                    gizmoId: p,
                                    target: g,
                                    tabKey: `${o}:${n}`,
                                    browserPreview: !0,
                                    downloadFallback: !1,
                                    isAccessBlocked: d,
                                    signal: a
                                })
                            } catch {
                                throw u(), (0, O.c)("Unable to open file", U.r.InternalError)
                            }
                            u()
                        })(tp, t, e, n) : null,
                        presentation: {
                            isSidebarOpen: null != tS,
                            requestFocusedObject: !0 !== t.widget.is_verified_first_party || tn || null != t.mcpAppHostAdapter.displayMode ? void 0 : async (e, r) => {
                                let {
                                    openEcosystemWidgetFocusedObject: n
                                } = await eF();
                                r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), n(tp, {
                                    recipient: tr,
                                    WidgetContent: eL,
                                    WidgetDialog: eR,
                                    id: tq,
                                    conversationId: eV,
                                    hostId: eJ,
                                    result: t,
                                    payload: e,
                                    signal: r
                                })
                            },
                            requestCloseFocusedObject: !0 === t.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), null != t.mcpAppHostAdapter.displayMode && "fullscreen" !== t.mcpAppHostAdapter.displayMode) return void await t.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: r
                                } = await eF();
                                e.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), r(tp, tq)
                            } : void 0
                        },
                        requestModal: async (e, r) => {
                            let {
                                requestEcosystemWidgetModal: n
                            } = await eO();
                            r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), await n(tp, {
                                recipient: tr,
                                WidgetDialog: eR,
                                conversationId: eV,
                                hostId: eJ,
                                result: t,
                                payload: e,
                                signal: r
                            })
                        },
                        finance: tj === S.a ? (0, C.a)(tp, tm, `${tf}${ty}${tw}`, tn || null != tA && "inline" !== tA ? void 0 : t) : void 0,
                        ...null != tH && {
                            handleRequest: m.b,
                            requestReconnectConnector: i.isVerifiedFirstParty ? tH : void 0
                        }
                    }
                }
            }, eW[68] = tm, eW[69] = tv, eW[70] = tj, eW[71] = eV, eW[72] = e2, eW[73] = tA, eW[74] = tS, eW[75] = tq, eW[76] = tw, eW[77] = te, eW[78] = eJ, eW[79] = tn, eW[80] = t_, eW[81] = e1, eW[82] = tf, eW[83] = tu, eW[84] = tr, eW[85] = tH, eW[86] = tp, eW[87] = ty, eW[88] = V) : V = eW[88];
            let tL = V;
            eW[89] !== e2 || eW[90] !== e5 || eW[91] !== tg || eW[92] !== tp.query ? (K = async () => {
                if (null == tg) throw Error("Cannot refetch without a resource query");
                e2.access.assertActive();
                let e = await tp.query.fetch(w.a, tg);
                return e2.access.assertActive(), (0, f.c)({
                    ...e2,
                    ...e
                }, e5)
            }, eW[89] = e2, eW[90] = e5, eW[91] = tg, eW[92] = tp.query, eW[93] = K) : K = eW[93];
            let tU = K,
                tO = null == tg ? void 0 : tU;
            eW[94] !== eV || eW[95] !== eJ || eW[96] !== e$ || eW[97] !== tr || eW[98] !== th.request.chatGptThreadId || eW[99] !== tp ? (ea = () => null != e$ ? e$ : tr?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: tr.get(L.y, tr.value.conversationId)
            } : null != th.request.chatGptThreadId || eV.startsWith("chatgpt:") || (0, H.e)(eV) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tp.get(I.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: eJ
            }, eW[94] = eV, eW[95] = eJ, eW[96] = e$, eW[97] = tr, eW[98] = th.request.chatGptThreadId, eW[99] = tp, eW[100] = ea) : ea = eW[100];
            let tG = ea;
            if (tN && null == tH) return null;
            eW[101] !== ts ? (eq = ts ? {
                source: "global"
            } : {}, eW[101] = ts, eW[102] = eq) : eq = eW[102], eW[103] !== th.analyticsContext || eW[104] !== eq ? (eE = {
                ...th.analyticsContext,
                ...eq
            }, eW[103] = th.analyticsContext, eW[104] = eq, eW[105] = eE) : eE = eW[105];
            let tF = tN ? "component" : e0,
                tW = !0 === th.widget.is_verified_first_party,
                tB = tu ? null : th.request.template;
            eW[106] !== tT || eW[107] !== tu || eW[108] !== th.mcpAppHostAdapter.connectorTarget?.targetId || eW[109] !== th.request.toolName ? (ek = !tu && "connectorId" in tT ? {
                connectorId: tT.connectorId,
                linkId: th.mcpAppHostAdapter.connectorTarget?.targetId ?? null,
                resourceUri: null,
                appName: null,
                actionName: th.request.toolName
            } : void 0, eW[106] = tT, eW[107] = tu, eW[108] = th.mcpAppHostAdapter.connectorTarget?.targetId, eW[109] = th.request.toolName, eW[110] = ek) : ek = eW[110], eW[111] !== th.request.toolName || eW[112] !== tW || eW[113] !== tB || eW[114] !== ek ? (eN = {
                widgetSource: "hosted",
                isVerifiedFirstParty: tW,
                originResourceUri: tB,
                originTool: th.request.toolName,
                appContext: ek
            }, eW[111] = th.request.toolName, eW[112] = tW, eW[113] = tB, eW[114] = ek, eW[115] = eN) : eN = eW[115];
            let tz = tj === S.a ? tm ?? void 0 : void 0,
                t$ = tn ? T.b : ta;
            return eW[116] !== eV || eW[117] !== eK || eW[118] !== to || eW[119] !== tG || eW[120] !== tL || eW[121] !== ts || eW[122] !== tc || eW[123] !== eJ || eW[124] !== tl || eW[125] !== ti || eW[126] !== td || eW[127] !== eQ || eW[128] !== e1 || eW[129] !== tM || eW[130] !== eY || eW[131] !== tr || eW[132] !== tO || eW[133] !== tb.appIcon || eW[134] !== tb.toolIcon || eW[135] !== tx || eW[136] !== th.access || eW[137] !== th.mcpAppHostAdapter || eW[138] !== th.preferredModelDisplayMode || eW[139] !== th.request.toolInput || eW[140] !== th.request.viewParams || eW[141] !== th.toolResult || eW[142] !== th.widgetStatePersistence || eW[143] !== eE || eW[144] !== tF || eW[145] !== eN || eW[146] !== tz || eW[147] !== t$ || eW[148] !== tE || eW[149] !== tR ? (eD = (0, n.jsx)(M.a, {
                analyticsContext: eE,
                getNewThreadDestination: tG,
                resource: tx,
                legacyPreferredDisplayMode: th.preferredModelDisplayMode,
                hostDisplayModes: tc,
                recipient: tr,
                conversationId: eV,
                deepLink: eK,
                pluginId: eY,
                fullSurface: to,
                hostScroll: tl,
                inheritHostBackground: td,
                hostId: eJ,
                hostedInThreadScrollLayout: ti,
                lifetime: tF,
                access: th.access,
                mcpAppId: e1,
                initialWidgetState: eQ,
                widgetStatePersistence: th.widgetStatePersistence,
                sourceName: tM,
                getResourceHost: tL,
                refetchResource: tO,
                mcpAppScope: eN,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: th.mcpAppHostAdapter,
                plaidAccountId: tz,
                Frame: t$,
                server: "codex_apps",
                appIcon: tb.appIcon,
                toolIcon: tb.toolIcon,
                sidePanelTitle: tE,
                title: tE,
                globalSurface: ts,
                toolArguments: th.request.toolInput,
                toolResult: th.toolResult,
                ...tR,
                viewParamsOverride: th.request.viewParams
            }), eW[116] = eV, eW[117] = eK, eW[118] = to, eW[119] = tG, eW[120] = tL, eW[121] = ts, eW[122] = tc, eW[123] = eJ, eW[124] = tl, eW[125] = ti, eW[126] = td, eW[127] = eQ, eW[128] = e1, eW[129] = tM, eW[130] = eY, eW[131] = tr, eW[132] = tO, eW[133] = tb.appIcon, eW[134] = tb.toolIcon, eW[135] = tx, eW[136] = th.access, eW[137] = th.mcpAppHostAdapter, eW[138] = th.preferredModelDisplayMode, eW[139] = th.request.toolInput, eW[140] = th.request.viewParams, eW[141] = th.toolResult, eW[142] = th.widgetStatePersistence, eW[143] = eE, eW[144] = tF, eW[145] = eN, eW[146] = tz, eW[147] = t$, eW[148] = tE, eW[149] = tR, eW[150] = eD) : eD = eW[150], eW[151] !== ez || eW[152] !== eD ? (eU = (0, n.jsxs)(n.Fragment, {
                children: [eD, ez]
            }), eW[151] = ez, eW[152] = eD, eW[153] = eU) : eU = eW[153], eU
        }
        async function eO() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(117976)]).then(r.bind(r, "IQhm"))
        }
        let eG = (0, d.f)({
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
        async function eF() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(579403)]).then(r.bind(r, "Ia2H"))
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
        var n = r("BolX"),
            a = r("AuIy"),
            i = r("P61R"),
            o = r("OiCI"),
            s = r("Cslg"),
            l = r("Yshm"),
            c = r("OWtl"),
            d = r("Mwld"),
            u = r("lBzi"),
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
                } = e, o = r(p.M, n);
                return null != o && function(e, t) {
                    let r = (0, a.a)(e),
                        n = r.findIndex(e => (0, a.g)(e) === t);
                    if (n < 0) return !0;
                    let i = e => (0, g.l)(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
                        o = r.findLast(i),
                        s = r.slice(0, n + 1).findLast(i);
                    if (o === s && r.findLast(g.l)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
                    let l = (0, d.a)(r).get(t);
                    return null != l ? !l : null != o && null != s && o !== s
                }({
                    mapping: o,
                    current_node: r(p.C, n)
                }, i)
            });

        function _(e) {
            let t = e.metadata.attribution_id;
            return "internal://plugin-management-suggestions" === e.metadata.html_asset_pointer && "openai" === e.metadata.distribution_channel && t === i.a && e.metadata.resolved_pineapple_uri === `connectors://${t}` && !0 !== e.toolResult.isError
        }
        r.d(t, {}, {
            a: y,
            b: _,
            c: w,
            recordPluginSuggestionInstallation: async function(e, t) {
                let r = (0, m.d)(e),
                    n = () => e.get(o.b) === t.accountId && e.get(s.k) === t.userId;
                if (!n()) return !1;
                if (null == e.get(p.M, t.conversationId)) try {
                    await e.query.fetch(u.chatGptConversationQueryById$, t.conversationId)
                } catch {
                    return !1
                }
                if (!n() || null != e.get(p._, t.conversationId)) return !1;
                let a = e.get(p.M, t.conversationId),
                    i = a?.[t.messageId]?.message,
                    c = null == i ? null : (0, f.d)(i, void 0);
                if (null == a || null == c || !_(c)) return !1;
                let d = l.e.safeParse(c.toolResult.structuredContent).data?.suggestions.find(e => e.plugin_id === t.pluginId),
                    g = (0, h.c)(e, t.conversationId, t.messageId, c.metadata),
                    v = l.d.safeParse(g?.getState(e) ?? {});
                if (null == d || null == g || !v.success) return !1;
                if (v.data.connectedPluginIds?.includes(t.pluginId)) return !0;
                let I = {
                        ...v.data,
                        connectedPluginIds: [...v.data.connectedPluginIds ?? [], t.pluginId]
                    },
                    b = await g.save(I, !0, {
                        optimistic: !1
                    });
                return !!n() && !!b.ok && g.getState(e) === I && ((0, m.d)(e) === r && (0, u.A)(e, t.conversationId) && null == e.get(p._, t.conversationId) && !e.get(w, {
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
        var n = r("ASxG"),
            a = r("Sbyb"),
            i = r("SGsN"),
            o = r("svjy"),
            s = r("eShZ"),
            l = r("T8YV");
        let c = n.object({
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
                    }, _ = await w(d);
                if (null != r.olympic || "tools/call" !== d.method || "string" != typeof d.params?.name) return _;
                let v = c.safeParse(_);
                if (!v.success || !("connectorId" in n.serverIdentity)) return _;
                let I = v.data._meta["openai/connector_auth"],
                    b = r.connectorTarget;
                if (null == b || b.connectorId !== n.serverIdentity.connectorId) return _;
                let A = d.params.name.startsWith("/") ? d.params.name.split("/").filter(Boolean) : [d.params.name],
                    x = A.at(-1),
                    q = d.params._meta,
                    S = b.targetId ?? q?.["openai/link_id"] ?? (3 === A.length ? A[1] : void 0);
                if (null == x || 0 === x.length || A.length > 3 || I.connector_id !== b.connectorId || q?.["openai/connector_id"] != null && q["openai/connector_id"] !== I.connector_id || q?.["openai/action_name"] != null && q["openai/action_name"] !== x || null != S && S !== I.link_id) return _;
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
                    return p(u), _
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
                }) : _
            }
        })
    }),
    VV1g: (function(e, t, r) {
        var n = r("ASxG");
        let a = n.object({
            href: n.string().refine(i)
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
                let _ = g;
                w[8] !== d || w[9] !== _ ? (h = null == d ? _ : (0, o.createPortal)(_, d), w[8] = d, w[9] = _, w[10] = h) : h = w[10];
                let v = h;
                w[11] !== r ? (m = (0, i.b)("relative h-full min-h-0", r), w[11] = r, w[12] = m) : m = w[12], w[13] !== p.mcpAppId ? (f = (0, n.jsx)(c.b, {
                    isInlineRequested: !0,
                    mcpAppId: p.mcpAppId
                }), w[13] = p.mcpAppId, w[14] = f) : f = w[14];
                let I = void 0 === u ? v : u;
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
                        onRetry: _
                    } = e,
                    [v, I] = (0, i.useState)(!1),
                    b = (0, o.a)();
                g[0] !== b || g[1] !== w || g[2] !== y ? (t = w ? b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }) : y ?? b.formatMessage({
                    id: "openaiMcpCapabilities.unavailable.title",
                    defaultMessage: "App unavailable",
                    description: "Title shown when an MCP app view could not be loaded"
                }), g[0] = b, g[1] = w, g[2] = y, g[3] = t) : t = g[3];
                let A = t;
                g[4] !== v ? (r = v ? (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.retryFailed",
                    defaultMessage: "The app is still unavailable after retrying",
                    description: "Message shown when the single retry did not make an MCP app view available; no further retry is offered"
                }) : (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.description",
                    defaultMessage: "Try again to load the app",
                    description: "Recovery guidance when an MCP app view is missing; the underlying cause is unknown"
                }), g[4] = v, g[5] = r) : r = g[5];
                let x = r;
                return g[6] !== h || g[7] !== m || g[8] !== x || g[9] !== v || g[10] !== f || g[11] !== w || g[12] !== _ || g[13] !== A ? (u = w ? (0, n.jsxs)(n.Fragment, {
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
                        actions: h ?? (!v && (0, n.jsx)(l.a, {
                            color: "secondary",
                            onClick: () => {
                                I(!0), _()
                            },
                            children: (0, n.jsx)(s.a, {
                                id: "openaiMcpCapabilities.unavailable.retry",
                                defaultMessage: "Retry",
                                description: "Button that retries discovering an MCP app view once"
                            })
                        }))
                    })
                }), g[6] = h, g[7] = m, g[8] = x, g[9] = v, g[10] = f, g[11] = w, g[12] = _, g[13] = A, g[14] = u) : u = g[14], g[15] !== A || g[16] !== u ? (p = (0, n.jsx)("div", {
                    className: "relative h-full min-h-0",
                    role: "status",
                    "aria-label": A,
                    children: u
                }), g[15] = A, g[16] = u, g[17] = p) : p = g[17], p
            }
        })
    }),
    DSZZ: (function(e, t, r) {
        var n = r("BolX"),
            a = r("hV9T"),
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
                return null != r && null != n && (0, l.b)(e.get, a.wf.showEducationalTips) ? () => {
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