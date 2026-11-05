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
            u = r("kl6F");

        function p(e) {
            return null != e && "widget" in e && null != e.sandboxOrigin
        }
        let g = (0, o.d)(u.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: a
                } = t, i = a(d.h, r), o = i?.sessionId == null ? null : i.content, s = o?.resource;
                return null != n && null != o && p(s) && s.resourceKey === n ? {
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
                } = t, o = i(l.a, a), c = r && null == o.data ? i(d.h, a.mcpAppId) : null, u = c?.content, g = u?.resource, m = c?.sessionId != null && null != u && p(g) && null != g.resourceKey && null != g.resourceQuery && (0, n.f)([g.resourceQuery]) === (0, n.f)([a]) && "current" === i(s.c, u.access) ? {
                    widget: g.widget,
                    sandboxOrigin: g.sandboxOrigin,
                    resourceKey: g.resourceKey
                } : void 0, h = o.data ?? m;
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
            a: g,
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
                    appIcon: {
                        alt: e.widget.name ?? void 0,
                        logoUrl: e.widget.logo_url,
                        logoDarkUrl: e.widget.logo_url_dark
                    },
                    fitWidth: "modal" !== e.mcpAppHostAdapter.displayMode && !0 === e.widget.fit_width,
                    widthHint: e.widget.width_hint ?? void 0
                }
            },
            d: p
        })
    }),
    thD3: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("BolX"),
            o = r("d0tz"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Sbyb"),
            u = r("BQbE"),
            p = r("Sm6l"),
            g = r("So8L"),
            m = r("piij"),
            h = r("OWtl"),
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
                    M = (0, i.y)(h.a),
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
                    hostId: o.Ub
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
                    O = R?.reauthLinkId,
                    U = R?.authReason ?? "reauthentication_required",
                    G = R?.requestedScopes;
                q[11] !== k ? (v = () => () => k?.abort(), q[11] = k, q[12] = v) : v = q[12], q[13] !== U || q[14] !== k || q[15] !== N || q[16] !== C || q[17] !== O || q[18] !== G ? (I = [k, N, C, O, U, G], q[13] = U, q[14] = k, q[15] = N, q[16] = C, q[17] = O, q[18] = G, q[19] = I) : I = q[19], (0, s.useEffect)(v, I);
                let F = null == N ? void 0 : L;
                q[20] !== N ? (b = null == N ? void 0 : (0, n.jsx)("img", {
                    className: "size-40 object-contain select-none",
                    src: m,
                    alt: "",
                    draggable: !1
                }), q[20] = N, q[21] = b) : b = q[21];
                let W = null == N ? void 0 : null;
                return q[22] !== U || q[23] !== k || q[24] !== N || q[25] !== C || q[26] !== T || q[27] !== j || q[28] !== O || q[29] !== G || q[30] !== M ? (A = null == N ? void 0 : (0, n.jsx)(p.a, {
                    color: "secondary",
                    disabled: null != k || T,
                    loading: null != k || T,
                    onClick: () => {
                        let e = new AbortController;
                        P(e), (0, d.requestMcpConnectSheet)(M, {
                            connectorId: N,
                            hostId: C,
                            oauthPresentation: "popup",
                            payload: null == O ? void 0 : {
                                requireAuth: !0,
                                authReason: U,
                                reauthLinkId: O,
                                requestedScopes: G
                            },
                            signal: e.signal
                        }).then(t => {
                            let {
                                didConnect: r,
                                linkId: n
                            } = t;
                            r && !e.signal.aborted && (null == O || n === O) && j()
                        }).catch(y).finally(() => P(null))
                    },
                    children: (0, n.jsx)(c.a, {
                        id: "openaiMcpCapabilities.unavailable.connect",
                        defaultMessage: "Connect",
                        description: "Button that opens the existing connection flow for a hosted MCP app"
                    })
                }), q[22] = U, q[23] = k, q[24] = N, q[25] = C, q[26] = T, q[27] = j, q[28] = O, q[29] = G, q[30] = M, q[31] = A) : A = q[31], q[32] !== T || q[33] !== j || q[34] !== W || q[35] !== A || q[36] !== F || q[37] !== b ? (x = (0, n.jsx)(g.a, {
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
            a: () => eO,
            EcosystemWidgetDialog: () => eR
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("BolX"),
            o = r("d0tz"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Qgfj"),
            u = r("jqIZ"),
            p = r("ZU27"),
            g = r("o6hs"),
            m = r("Ooax"),
            h = r("PrVQ"),
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
            T = r("Pf1r"),
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
            O = r("kSHG"),
            U = r("sS8e"),
            G = r("OWtl"),
            F = r("OMIV"),
            W = r("bnxy"),
            B = r("rxj0"),
            z = r("IDHB");
        let $ = (0, i.d)(G.a, (e, t) => {
            let {
                get: r
            } = t, n = r(_.m);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r(F.d, "3080374709") || null == e || null == r(L.j, e) || null != r(L.Z, e)) return !1;
            let a = r(L.x, e);
            return ("tpp" === a || "flora" === a) && !r(B.d, e)
        });
        var K = r("T8YV"),
            V = r("HUQj"),
            Q = r("lax3"),
            Z = r("z8ZL"),
            Y = r("ASxG"),
            J = r("Sbyb"),
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
        let em = "redirectUrl",
            eh = Y.object({
                href: Y.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: Y.union([Y.string(), Y.boolean()]).optional(),
                openMode: Y.enum(["tab", "popup"]).optional()
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
        let ev = Y.object({
            fileId: Y.string().min(1)
        });
        var eI = r("bTvG"),
            eb = r("JKSp"),
            eA = r("PFjh"),
            ex = r("DXan");
        let eq = {
                label: Y.string(),
                tags: Y.array(Y.object({
                    key: Y.string(),
                    value: Y.string()
                })).optional()
            },
            eS = Y.discriminatedUnion("type", [Y.object({
                type: Y.literal("event"),
                label: Y.string(),
                payload: Y.record(Y.string(), Y.json()).optional()
            }), Y.object({
                type: Y.literal("interaction"),
                ...eq
            }), Y.object({
                type: Y.literal("count"),
                ...eq,
                count: Y.number().optional()
            }), Y.object({
                type: Y.literal("hist"),
                ...eq,
                value: Y.number()
            }), Y.object({
                type: Y.literal("error")
            })]);
        var eC = r("Igop"),
            eT = r("DSZZ");
        let ej = "openai/deep-research/report-copy",
            eM = Y.discriminatedUnion("phase", [Y.strictObject({
                phase: Y.literal("start"),
                id: Y.uuid(),
                length: Y.number().int().nonnegative()
            }), Y.strictObject({
                phase: Y.literal("finish"),
                id: Y.uuid(),
                success: Y.boolean()
            })]);
        var eE = r("AuIy"),
            ek = r("xSzB");

        function eP(e) {
            let t, r = e._meta,
                n = e;
            for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                let e = (0, eE.r)(t);
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
            let t, r, d, u, p, g, m, h, f, y, w, _, v = (0, a.c)(62),
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
                O = (0, i.y)(R.a),
                U = (0, l.a)();
            v[0] !== C ? (t = () => C ?? (0, o.sf)(), v[0] = C, v[1] = t) : t = v[1];
            let [G] = (0, s.useState)(t), F = "ready" === M.kind && "modal" === M.result.request.mode ? Math.max(k ?? M.result.widget.height_hint ?? 0, 0) || void 0 : k, W = "ready" === M.kind ? M.result.tracking : M.tracking, B = "ready" === M.kind && "fullscreen" === M.result.request.mode, z = "loading" === M.kind && !0 === M.nonModal;
            v[2] !== T || v[3] !== W ? (r = () => {
                W?.close("user_dismissed"), T()
            }, v[2] = T, v[3] = W, v[4] = r) : r = v[4];
            let $ = (0, s.useEffectEvent)(r);
            v[5] !== H || v[6] !== $ || v[7] !== z || v[8] !== O ? (d = () => {
                if (z) return O.get(q.f).info((0, n.jsx)(c.a, {
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
            }, v[5] = H, v[6] = $, v[7] = z, v[8] = O, v[9] = d) : d = v[9], v[10] !== H || v[11] !== z || v[12] !== O ? (u = [O, z, H], v[10] = H, v[11] = z, v[12] = O, v[13] = u) : u = v[13], (0, s.useEffect)(d, u), v[14] !== B || v[15] !== T || v[16] !== W ? (p = () => {
                B && (W?.close("user_dismissed"), T())
            }, v[14] = B, v[15] = T, v[16] = W, v[17] = p) : p = v[17];
            let Q = (0, s.useEffectEvent)(p);
            if (v[18] !== Q || v[19] !== G || v[20] !== O || v[21] !== W ? (g = () => {
                    let e = O.watch(e => {
                        let t = e.get(E.r, G);
                        null != t && e.get(E.q, t)?.isOpen === !1 ? Q() : (e.get(E.u, G) && W?.renderReady(), null != e.get(E.p, G) && W?.error("widget_render"))
                    });
                    return () => {
                        e(), W?.close("navigation_changed")
                    }
                }, v[18] = Q, v[19] = G, v[20] = O, v[21] = W, v[22] = g) : g = v[22], v[23] !== G || v[24] !== O || v[25] !== W ? (m = [O, G, W], v[23] = G, v[24] = O, v[25] = W, v[26] = m) : m = v[26], (0, s.useEffect)(g, m), z) return null;
            if ("ready" === M.kind && B) {
                let e, t;
                return v[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], v[27] = e) : e = v[27], v[28] !== b || v[29] !== S || v[30] !== G || v[31] !== L || v[32] !== M.result ? (t = (0, n.jsx)(eL, {
                    recipient: L,
                    conversationId: b,
                    hostDisplayModes: e,
                    hostId: S,
                    lifetime: "component",
                    mcpAppId: G,
                    result: M.result,
                    showOpenButton: !1
                }), v[28] = b, v[29] = S, v[30] = G, v[31] = L, v[32] = M.result, v[33] = t) : t = v[33], t
            }
            if ("error" === M.kind)
                if ((0, K.d)(M.error)) {
                    let e;
                    v[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                        children: (0, n.jsx)(V.a, {})
                    }), v[34] = e) : e = v[34], h = e
                } else if (M.error instanceof N.a) {
                let e, t;
                v[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.d, {
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
                }), v[36] = S, v[37] = T, v[38] = M.error, v[39] = t) : t = v[39], h = t
            } else {
                let e, t;
                v[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.d, {
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
                }), v[41] = t) : t = v[41], h = t
            }
            return v[42] !== U ? (f = U.formatMessage(eG.appTitle), v[42] = U, v[43] = f) : f = v[43], v[44] !== T || v[45] !== W ? (y = () => {
                W?.close("user_dismissed"), T()
            }, v[44] = T, v[45] = W, v[46] = y) : y = v[46], v[47] !== b || v[48] !== h || v[49] !== S || v[50] !== G || v[51] !== L || v[52] !== M.kind || v[53] !== M.result ? (w = "loading" === M.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(c.a, {
                    ...eG.openingApp
                })
            }) : "error" === M.kind ? h : (0, n.jsx)(eL, {
                recipient: L,
                conversationId: b,
                hostId: S,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: G,
                result: M.result
            }), v[47] = b, v[48] = h, v[49] = S, v[50] = G, v[51] = L, v[52] = M.kind, v[53] = M.result, v[54] = w) : w = v[54], v[55] !== H || v[56] !== F || v[57] !== y || v[58] !== w || v[59] !== f || v[60] !== P ? (_ = (0, n.jsx)(j.a, {
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
            let t, r, o, s, c, d, u, p, g, m, h, y, w, _, v, I, b, x = (0, a.c)(46);
            x[0] !== e ? ({
                result: t,
                mcpAppId: r,
                inDialog: s,
                fullSurface: c,
                hostScroll: d,
                hostDisplayModes: u,
                showDialogTitle: p,
                showOpenButton: g,
                showLoadingStatus: m,
                disableInlineLoadingState: h,
                ...o
            } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = o, x[4] = s, x[5] = c, x[6] = d, x[7] = u, x[8] = p, x[9] = g, x[10] = m, x[11] = h) : (t = x[1], r = x[2], o = x[3], s = x[4], c = x[5], d = x[6], u = x[7], p = x[8], g = x[9], m = x[10], h = x[11]);
            let q = void 0 !== s && s,
                S = void 0 === c ? q : c,
                C = void 0 !== d && d,
                T = void 0 === u ? E.d : u,
                j = void 0 === p ? q : p,
                M = void 0 === g || g,
                P = void 0 === m || m,
                R = void 0 !== h && h,
                N = (0, l.a)(),
                D = eH(t, r);
            x[12] !== N || x[13] !== D.widget.name ? (y = D.widget.name || N.formatMessage(eG.appTitle), x[12] = N, x[13] = D.widget.name, x[14] = y) : y = x[14];
            let H = y,
                L = D.title || H;
            x[15] !== t || x[16] !== o.imageDomains ? (w = (0, f.c)(t, o.imageDomains), x[15] = t, x[16] = o.imageDomains, x[17] = w) : w = x[17], x[18] !== w ? (_ = {
                data: w,
                error: null,
                isLoading: !1
            }, x[18] = w, x[19] = _) : _ = x[19];
            let O = _,
                U = (0, i.x)(E.m, r),
                G = q ? "isolate" : void 0,
                F = R || !0 === D.widget.disable_loading_state;
            return x[20] !== j || x[21] !== L ? (v = j ? (0, n.jsx)(A.d, {
                className: "sr-only",
                children: L
            }) : null, x[20] = j, x[21] = L, x[22] = v) : v = x[22], x[23] !== S || x[24] !== T || x[25] !== C || x[26] !== r || x[27] !== H || x[28] !== U || x[29] !== O || x[30] !== P || x[31] !== M || x[32] !== G || x[33] !== F || x[34] !== v || x[35] !== L ? (I = (0, n.jsx)(k.a, {
                className: G,
                showOpenButton: M,
                openButtonTitle: L,
                showLoadingStatus: P,
                disableInlineLoadingState: F,
                hostDisplayModes: T,
                resource: O,
                fullSurface: S,
                hostScroll: C,
                mcpAppId: r,
                appName: H,
                presentation: U,
                children: v
            }), x[23] = S, x[24] = T, x[25] = C, x[26] = r, x[27] = H, x[28] = U, x[29] = O, x[30] = P, x[31] = M, x[32] = G, x[33] = F, x[34] = v, x[35] = L, x[36] = I) : I = x[36], x[37] !== t || x[38] !== S || x[39] !== T || x[40] !== C || x[41] !== q || x[42] !== r || x[43] !== o || x[44] !== I ? (b = (0, n.jsx)(eO, {
                ...o,
                result: t,
                inDialog: q,
                fullSurface: S,
                hostScroll: C,
                hostDisplayModes: T,
                mcpAppId: r,
                children: I
            }), x[37] = t, x[38] = S, x[39] = T, x[40] = C, x[41] = q, x[42] = r, x[43] = o, x[44] = I, x[45] = b) : b = x[45], b
        }

        function eO(e) {
            let t, o, c, d, A, x, j, k, P, N, D, G, K, V, ea, eq, eE, ek, eN, eD, eO = (0, a.c)(153),
                {
                    recipient: eW,
                    children: eB,
                    newThreadDestination: ez,
                    conversationId: e$,
                    deepLink: eK,
                    initialWidgetState: eV,
                    pluginId: eQ,
                    hostId: eZ,
                    inDialog: eY,
                    Frame: eJ,
                    lifetime: eX,
                    mcpAppId: e0,
                    hostedInThreadScrollLayout: e1,
                    result: e2,
                    imageDomains: e3,
                    fullSurface: e4,
                    globalSurface: e5,
                    hostScroll: e8,
                    hostDisplayModes: e6,
                    inheritHostBackground: e7,
                    heightHint: e9,
                    readOnlySnapshot: te
                } = e,
                tt = void 0 === eW ? null : eW,
                tr = void 0 !== eY && eY,
                tn = void 0 === eJ ? T.a : eJ,
                ta = void 0 !== e1 && e1,
                ti = void 0 === e4 ? tr : e4,
                to = void 0 !== e5 && e5,
                ts = void 0 !== e8 && e8,
                tl = void 0 === e6 ? E.d : e6,
                tc = void 0 !== e7 && e7,
                td = void 0 !== te && te,
                tu = (0, i.y)(R.a),
                tp = e2.resourceQuery,
                tg = eH(e2, e0),
                {
                    accountId: tm
                } = (0, v.a)(),
                {
                    pathname: th,
                    search: tf,
                    hash: ty
                } = (0, u.Y)(),
                tw = (0, l.a)(),
                t_ = (0, i.x)($, tg.request.chatGptThreadId);
            eO[0] !== e$ || eO[1] !== eZ || eO[2] !== tw || eO[3] !== tt || eO[4] !== tg || eO[5] !== tu ? (t = async (e, t) => {
                let r = tu.get(y.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == tg.modalOwner && r.hostId === eZ && "current" === tg.access.status(tu.get) && n.accountId === tg.access.accountId && n.userId === tg.access.uiUserId && n.sourceAppUri === tg.request.appUri && n.sourceTemplate === tg.request.template && n.sourceMessageId === tg.request.sourceMessageId && n.sourceThreadId === tg.request.threadId && n.sourceConversationId === tu.get(L.j, tg.request.chatGptThreadId)) {
                    tu.set(y.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eU();
                        t.throwIfAborted(), await e(tu, {
                            recipient: tt,
                            conversationId: e$,
                            hostId: eZ,
                            result: tg,
                            WidgetDialog: eR,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tu.get(q.f).danger(tw.formatMessage(eG.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, eO[0] = e$, eO[1] = eZ, eO[2] = tw, eO[3] = tt, eO[4] = tg, eO[5] = tu, eO[6] = t) : t = eO[6];
            let tv = (0, s.useEffectEvent)(t);
            eO[7] !== tr || eO[8] !== tv || eO[9] !== tu ? (o = () => {
                if (tr) return;
                let e = new AbortController,
                    t = tu.watch(t => {
                        let {
                            get: r
                        } = t, n = r(y.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tv(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, eO[7] = tr, eO[8] = tv, eO[9] = tu, eO[10] = o) : o = eO[10], eO[11] !== tr || eO[12] !== tg.request.appUri || eO[13] !== tg.request.chatGptThreadId || eO[14] !== tg.request.sourceMessageId || eO[15] !== tg.request.template || eO[16] !== tu ? (c = [tu, tr, tg.request.appUri, tg.request.template, tg.request.sourceMessageId, tg.request.chatGptThreadId], eO[11] = tr, eO[12] = tg.request.appUri, eO[13] = tg.request.chatGptThreadId, eO[14] = tg.request.sourceMessageId, eO[15] = tg.request.template, eO[16] = tu, eO[17] = c) : c = eO[17], (0, s.useEffect)(o, c), eO[18] !== e2 || eO[19] !== e3 ? (d = (0, f.c)(e2, e3), eO[18] = e2, eO[19] = e3, eO[20] = d) : d = eO[20];
            let tI = d,
                tb = tg.mcpAppHostAdapter.displayMode ?? (tr ? "inline" : void 0);
            eO[21] !== tI ? (A = {
                data: tI,
                error: null,
                isLoading: !1
            }, eO[21] = tI, eO[22] = A) : A = eO[22];
            let tA = A,
                tx = `ecosystem-focused:${e0}`,
                tq = (0, i.x)(p.l.tabById$, tx);
            eO[23] !== e0 || eO[24] !== tg || eO[25] !== tu ? (x = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eF();
                e(tu, e0, tg)
            }, eO[23] = e0, eO[24] = tg, eO[25] = tu, eO[26] = x) : x = eO[26];
            let tS = (0, s.useEffectEvent)(x);
            eO[27] !== tS || eO[28] !== tq || eO[29] !== tr || eO[30] !== e0 || eO[31] !== tu ? (j = () => {
                if (null != tq && !tr) return tu.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(E.h, e0) && tS()
                })
            }, eO[27] = tS, eO[28] = tq, eO[29] = tr, eO[30] = e0, eO[31] = tu, eO[32] = j) : j = eO[32], eO[33] !== tq || eO[34] !== tr || eO[35] !== e0 || eO[36] !== tu ? (k = [tu, tq, tr, e0], eO[33] = tq, eO[34] = tr, eO[35] = e0, eO[36] = tu, eO[37] = k) : k = eO[37], (0, s.useEffect)(j, k);
            let tC = tg.access.serverIdentity,
                tT = "connectorId" in tC ? tC.connectorId : null;
            eO[38] !== tw || eO[39] !== tg.widget.name ? (P = tg.widget.name || tw.formatMessage(eG.appTitle), eO[38] = tw, eO[39] = tg.widget.name, eO[40] = P) : P = eO[40];
            let tj = P,
                tM = tg.title || tj,
                {
                    request: tE,
                    toolResult: tk
                } = e2;
            eO[41] !== tk ? (N = eP(tk), eO[41] = tk, eO[42] = N) : N = eO[42];
            let tP = N,
                tR = !td && tE.template === m.a,
                tN = (0, i.z)(tR ? _.j : null);
            e: {
                let e, t;
                if (!tR) {
                    D = void 0;
                    break e
                }
                let r = e2.modalOwner?.result ?? e2,
                    n = r.access.serverIdentity;
                if (null == tN || !("connectorId" in n) || n.connectorId !== tT || r.request.template !== tE.template || !0 !== e2.widget.is_verified_first_party || !0 === e2.mcpAppHostAdapter.isTombstone || null != tP.toolCallStatus) {
                    D = void 0;
                    break e
                }
                eO[43] !== e2.mcpAppHostAdapter || eO[44] !== e0 || eO[45] !== tN || eO[46] !== tu ? (e = () => {
                    if (e2.mcpAppHostAdapter.assertActive?.(), tu.get(_.j) !== tN || tu.get(E.h, e0)?.content.mcpAppScope.isVerifiedFirstParty !== !0) throw Error("This widget is no longer active.")
                }, eO[43] = e2.mcpAppHostAdapter, eO[44] = e0, eO[45] = tN, eO[46] = tu, eO[47] = e) : e = eO[47];
                let a = e;
                if (eO[48] !== a || eO[49] !== tT || eO[50] !== e2.access || eO[51] !== eZ || eO[52] !== tt || eO[53] !== tN || eO[54] !== tE || eO[55] !== tu || eO[56] !== r.request.chatGptThreadId || eO[57] !== r.request.sourceMessageId || eO[58] !== r.request.toolInput || eO[59] !== r.toolResult) {
                    let e;
                    eO[61] !== tT || eO[62] !== e2.access || eO[63] !== tt || eO[64] !== tN || eO[65] !== tE || eO[66] !== tu ? (e = async e => {
                        let {
                            chatGptThreadId: t,
                            sourceMessageId: r
                        } = tE, n = tt?.value;
                        if (null == tt || n?.kind !== "chatgpt" || null == t || null == r) return;
                        let a = (0, b.getMcpAppSubmit)(tt, () => {
                            let e = e => tu.get(L.j, e) ?? e;
                            if (tu.get(_.j) !== tN || e(n.conversationId) !== e(t) || tu.get(R.j) || "current" !== e2.access.status(tu.get) || null != tu.get(L.Z, t) || null == tu.get(L.L, t) || tu.get(Q.c, {
                                    conversationId: t,
                                    messageId: r
                                }) || (0, B.i)(tu, t)) throw new DOMException("The originating request is no longer available", "AbortError")
                        });
                        null != a && await a({
                            turnTrigger: "mcp_app_follow_up",
                            addedFiles: [],
                            fileAttachments: [],
                            ideContext: null,
                            imageAttachments: [],
                            prompt: (0, m.b)(e)
                        }, {
                            name: tE.template,
                            attribution: tT ?? void 0,
                            visuallyHidden: !0
                        })
                    }, eO[61] = tT, eO[62] = e2.access, eO[63] = tt, eO[64] = tN, eO[65] = tE, eO[66] = tu, eO[67] = e) : e = eO[67], t = (0, h.a)({
                        scope: tu,
                        hostId: eZ,
                        sourceId: JSON.stringify([r.request.chatGptThreadId, r.request.sourceMessageId]),
                        productSku: g.d.shape.productSku.parse(tE.productSku?.toUpperCase()),
                        access: e2.access,
                        resourceUri: tE.template,
                        toolInput: r.request.toolInput,
                        toolResult: eP(r.toolResult).toolResultNotification,
                        assertActive: a,
                        onReconnected: e
                    }), eO[48] = a, eO[49] = tT, eO[50] = e2.access, eO[51] = eZ, eO[52] = tt, eO[53] = tN, eO[54] = tE, eO[55] = tu, eO[56] = r.request.chatGptThreadId, eO[57] = r.request.sourceMessageId, eO[58] = r.request.toolInput, eO[59] = r.toolResult, eO[60] = t
                } else t = eO[60];D = t
            }
            let tD = D;
            eO[68] !== tm || eO[69] !== t_ || eO[70] !== tT || eO[71] !== e$ || eO[72] !== e2 || eO[73] !== tb || eO[74] !== tq || eO[75] !== tx || eO[76] !== ty || eO[77] !== e9 || eO[78] !== eZ || eO[79] !== tr || eO[80] !== tw || eO[81] !== e0 || eO[82] !== th || eO[83] !== td || eO[84] !== tt || eO[85] !== tD || eO[86] !== tu || eO[87] !== tf ? (G = e => {
                if (!(0, f.d)(e)) throw Error("Expected a hosted widget resource");
                let t = {
                    ...e2,
                    widget: e.widget,
                    sandboxOrigin: e.sandboxOrigin,
                    resourceKey: e.resourceKey
                };
                if (tr) {
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
                let n = t.widget.name || tw.formatMessage(eG.appTitle),
                    a = t.title || n,
                    i = {
                        isVerifiedFirstParty: !0 === t.widget.is_verified_first_party,
                        heightHint: e9 ?? e.heightHint,
                        minFrameHeight: e.minFrameHeight ?? 0,
                        appIcon: e.appIcon,
                        sourceName: n,
                        title: a,
                        sidePanelTitle: a
                    };
                if (td) return {
                    ...i,
                    mcpAppHostAdapter: t.mcpAppHostAdapter
                };
                let o = tu.get(L.x, t.request.chatGptThreadId);
                return {
                    ...i,
                    mcpAppHostAdapter: {
                        ...t.mcpAppHostAdapter,
                        displayMode: tb,
                        ... function(e, t, n, a) {
                            var i;
                            let o, s, l, c, d, u, p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                g = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : null,
                                m = e => {
                                    e?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), n.access.assertActive()
                                };
                            if ("current" !== n.access.status(e.get)) return {};
                            let {
                                accountId: h,
                                uiUserId: f
                            } = n.access, y = function(e, t) {
                                let r = t.access.serverIdentity,
                                    n = t.request.chatGptThreadId;
                                if (!0 !== t.widget.is_verified_first_party || !("connectorId" in r) || !["connector_openai_deep_research", "connector_openai_deep_research_workflow"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                                let a = new Map;
                                return (t, r) => {
                                    let i = eM.safeParse(t);
                                    if (!i.success) return;
                                    let o = i.data,
                                        s = a.get(o.id);
                                    if (s?.dispose(), !(r.aborted || e.get(L.G, n) || null != e.get(L.Z, n) || e.get(B.d, n)))
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
                            }(e, n), w = new Set(["fullscreen"]);
                            if (!0 === n.widget.is_verified_first_party)
                                for (let e of ["clipboard-read", "clipboard-write", "microphone", "camera", "local-network-access", "web-share"]) w.add(e);
                            for (let [e, t] of Object.entries({
                                    camera: "camera",
                                    microphone: "microphone",
                                    geolocation: "geolocation",
                                    clipboardWrite: "clipboard-write"
                                })) n.widget.permissions?.[e] === !0 && w.add(t);
                            let v = navigator.userAgent,
                                I = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(v) ? (I.os = "ios", I.type = "mobile") : /Android/.test(v) ? (I.os = "android", I.type = "mobile") : /Windows[ _]NT/.test(v) ? I.os = "windows" : v.includes("Mac OS X") && (I.os = "macos"), "mobile" !== I.type && /Tablet/.test(v) && (I.type = "tablet");
                            let b = (0, eg.a)(n.widget.domain),
                                A = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                x = null != A && Object.values(e.get(ee.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === A);
                            return {
                                experimentalCapabilities: {
                                    ...n.mcpAppHostAdapter.experimentalCapabilities,
                                    ...p && !0 === n.widget.is_verified_first_party && null != a && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                        "openai/sourceCitationLinks": {}
                                    } : {}
                                },
                                requestCheckout: async (t, a) => {
                                    m(a);
                                    let {
                                        loadWidgetCheckout: i
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470)]).then(r.bind(r, "IKJx")), o = await i();
                                    return m(a), o(e, n, t, a, () => m(a))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == y ? [] : [ej]],
                                handleRequest: async (r, a, i, o) => null != y && r.method === ej ? (m(a), null != a && y(r.params, a), {}) : (0, eC.a)(e, t, n.mcpAppHostAdapter, n.access, r, a, m, i, o),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (m(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let a = n.request.chatGptThreadId,
                                        i = Y.object({
                                            text: Y.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!i.success || null == a) return;
                                    let o = e.get(er.n);
                                    if (null == o || o !== h) throw Error("The widget account changed");
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
                                    baseUrl: b,
                                    hideButton: !0 === n.widget.is_verified_first_party,
                                    validateUrl: e => {
                                        if (m(), e.includes("\\") || !URL.canParse(e, b ?? window.location.origin)) return null;
                                        let t = new URL(e, b ?? window.location.origin);
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
                                    } = eh.parse(r);
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
                                    let m = new URL(s),
                                        h = !g && m.origin === window.location.origin;
                                    m.search = "", m.hash = "";
                                    let f = e.get(L.j, t.request.chatGptThreadId ?? null);
                                    ef(e, t, m.href, c);
                                    let y = s;
                                    p && !h && !1 !== l && (null != f || null == t.request.chatGptThreadId) && (y = function(e, t) {
                                        let r;
                                        if (!t) return e;
                                        let n = e.startsWith("http://") || e.startsWith("https://") || /^[a-z][a-z0-9+.-]*:\/\//i.test(e);
                                        try {
                                            r = new URL(e)
                                        } catch {
                                            return e
                                        }
                                        return !n || r.searchParams.get(em) ? e : (r.searchParams.set(em, t), r.toString())
                                    }(s, null == f ? window.location.href : new URL(`/c/${encodeURIComponent(f)}`, window.location.origin).href));
                                    let w = h || p;
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
                                autofill: x && null != A && null != h && null != f ? async (t, a) => {
                                    m(a);
                                    let {
                                        createBrowserWidgetAutofill: i
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(108257)]).then(r.bind(r, "JFC7"));
                                    return m(a), i(e, n, A, t, a)
                                } : void 0,
                                sandboxFeatures: [...w],
                                instrumentation: (o = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), s = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : n.request.appUri, l = {
                                    ...(0, ex.a)(n.access, n.analyticsContext),
                                    attributionId: s,
                                    messageId: n.request.sourceMessageId,
                                    suggestionMessageId: n.suggestionMessageId,
                                    distributionChannel: ({
                                        only_me: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_ONLY_ME",
                                        openai: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_OPENAI",
                                        external: "CHATGPT_ECOSYSTEM_WIDGET_DISTRIBUTION_CHANNEL_EXTERNAL"
                                    })[o],
                                    host: "chatgpt"
                                }, c = {
                                    attribution_id: s,
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
                                                ...c,
                                                conversation_id: e.get(L.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: o,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === i.type) {
                                            "only_me" !== o && e.get(eA.a).count("ecosystem", "app.error", c);
                                            return
                                        }
                                        let s = {
                                            ...Object.fromEntries(i.tags?.map(e => {
                                                let {
                                                    key: t,
                                                    value: r
                                                } = e;
                                                return [t, r]
                                            }) ?? []),
                                            ...c
                                        };
                                        "interaction" === i.type ? ((0, ec.a)(e, eI.l, {
                                            ...l,
                                            ...r,
                                            conversationId: e.get(L.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, ex.b)(i.label)
                                        }), "only_me" !== o && e.get(eA.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [i.label] ?? "app.interaction", s)) : "only_me" !== o && ("count" === i.type ? e.get(eA.a).count("ecosystem", i.label, s, i.count) : e.get(eA.a).hist("ecosystem", i.label, s, i.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = Y.object({
                                            effectiveDirective: Y.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, ec.a)(e, eI.k, {
                                            ...l,
                                            conversationId: e.get(L.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== o && e.get(eA.a).count("ecosystem", "app.security_policy_violation", c))
                                    }
                                }),
                                toolInfo: Y.object({
                                    tool: Y.object({
                                        name: Y.string(),
                                        input_schema: Z.b.shape.toolInfo.unwrap().shape.tool.shape.inputSchema
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
                                    m(t);
                                    let {
                                        blob: r,
                                        name: n
                                    } = Y.object({
                                        blob: Y.instanceof(Blob),
                                        name: Y.string()
                                    }).parse(e);
                                    (0, et.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    m(t);
                                    let {
                                        type: r
                                    } = Y.object({
                                        type: Y.enum(["light", "medium", "heavy", "selection", "success", "warning", "error"])
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
                                    } = Y.object({
                                        title: Y.string(),
                                        body: Y.string().optional(),
                                        level: Y.enum(["warning", "success", "danger"])
                                    }).parse(t);
                                    e.get(q.f)[a](r, {
                                        description: n?.trim() || void 0,
                                        errorAnalytics: {
                                            toastId: "ecosystem.widget.error"
                                        }
                                    })
                                } : void 0,
                                files: null != h && null != f ? (i = {
                                    appUri: n.request.appUri,
                                    accountId: h,
                                    userId: f,
                                    assertActive: m
                                }, d = t => {
                                    if (t.throwIfAborted(), i.assertActive?.(), e.get(_.f) !== i.accountId || e.get(_.k) !== i.userId) throw Error("The widget account has changed")
                                }, u = {
                                    additionalHeaders: {
                                        "ChatGPT-Account-ID": i.accountId
                                    },
                                    expectedIdentity: {
                                        accountId: i.accountId,
                                        userId: i.userId
                                    }
                                }, {
                                    async uploadFile(e, t, r) {
                                        d(r);
                                        let n = Y.instanceof(File).parse(e),
                                            a = Y.object({
                                                library: Y.boolean().optional()
                                            }).optional().parse(t),
                                            o = new FormData;
                                        o.append("app_uri", i.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), a?.library && o.append("store_in_library", "true"), d(r);
                                        let s = await eu.Request.safePost("/ecosystem/upload_widget_file", {
                                            ...u,
                                            requestBody: o,
                                            signal: r
                                        });
                                        return d(r), {
                                            fileId: s.file_id
                                        }
                                    },
                                    async getFileDownloadUrl(e, t) {
                                        d(t);
                                        let r = await eu.Request.safePost("/ecosystem/file_download_url", {
                                            ...u,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: ev.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return d(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        d(t);
                                        let r = await eu.Request.safePost("/ecosystem/file_metadata", {
                                            ...u,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: ev.parse(e).fileId
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
                                        let n = e.get(F.f);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(er.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: a
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                        d(t);
                                        let o = await a(e, t);
                                        if (d(t), 0 === o.length) return [];
                                        let s = await Promise.all(o.map(async e => {
                                            d(t);
                                            let r = null == (0, ew.a)(e.id) ? e : await (0, e_.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: u.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,ey.d)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return d(t), await eu.Request.safePost("/ecosystem/file_authorize_app", {
                                            ...u,
                                            requestBody: {
                                                file_ids: s.map(e => e.fileId),
                                                authorized_app_uri: i.appUri
                                            },
                                            signal: t
                                        }), d(t), s
                                    }
                                }) : void 0,
                                share: "u" > typeof navigator && "function" == typeof navigator.share ? async (e, t) => {
                                    m(t), await navigator.share(Y.object({
                                        title: Y.string().optional(),
                                        text: Y.string().optional(),
                                        url: Y.string().optional(),
                                        files: Y.array(Y.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == g ? void 0 : async (r, n) => {
                                    m(n);
                                    let a = await (0, J.requestMcpConnectSheet)(e, {
                                        connectorId: g,
                                        hostId: t,
                                        payload: r,
                                        signal: n,
                                        beforeConnect: async () => (m(n), !0)
                                    });
                                    return m(n), a
                                },
                                requestLinkToConnector: async (r, n) => {
                                    m(n);
                                    let a = await (0, J.requestMcpConnectSheet)(e, {
                                        connectorId: Y.object({
                                            connectorId: Y.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (m(n), !0)
                                    });
                                    return m(n), a
                                }
                            }
                        }(tu, eZ, t, async (e, n) => {
                            let a = tu.get(L.x, t.request.chatGptThreadId);
                            if ("tpp" !== a && "flora" !== a) return !1;
                            let i = await async function() {
                                return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
                            }();
                            return n.throwIfAborted(), i(tu, {
                                recipient: tt,
                                WidgetContent: eL,
                                conversationId: e$,
                                hostId: eZ,
                                result: t,
                                mcpAppId: e0,
                                href: e,
                                signal: n
                            })
                        }, "tpp" === o || "flora" === o),
                        openFile: t_ && !tr && null != t.request.sourceMessageId ? (e, n) => (async function(e, t, n, a) {
                            let {
                                chatGptThreadId: i,
                                sourceMessageId: o
                            } = t.request;
                            if (!o) throw (0, U.c)("File opening requires a source message", O.r.MethodNotFound);
                            let s = e.get(L.j, i);
                            if ("current" !== t.access.status(e.get)) throw (0, U.c)("File opening is unavailable for this widget", O.r.MethodNotFound);
                            let {
                                accountId: l,
                                uiUserId: c
                            } = t.access, d = e => "current" !== t.access.status(e.get) || e.get(R.j) || !e.get($, i) || e.get(_.f) !== l || e.get(_.k) !== c || e.get(L.j, i) !== s, u = () => {
                                if (a.throwIfAborted(), null == s || d(e)) throw (0, U.c)("File opening is unavailable for this widget", O.r.MethodNotFound)
                            };
                            if (u(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, U.c)("Cannot open this file path", O.r.InvalidParams);
                            let p = e.get(L.R, i),
                                g = (0, z.a)(e, i, {
                                    type: "sandbox",
                                    messageId: o,
                                    sandboxPath: n
                                }),
                                {
                                    canOpenChatGptFilePreview: m,
                                    openChatGptFile: h
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470)]).then(r.bind(r, "f2PP"));
                            if (u(), !m({
                                    browserPreview: !0
                                })) throw (0, U.c)("File previews are unavailable in this host", O.r.MethodNotFound);
                            try {
                                await h(e, {
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
                                throw u(), (0, U.c)("Unable to open file", O.r.InternalError)
                            }
                            u()
                        })(tu, t, e, n) : null,
                        presentation: {
                            isSidebarOpen: null != tq,
                            requestFocusedObject: !0 !== t.widget.is_verified_first_party || tr || null != t.mcpAppHostAdapter.displayMode ? void 0 : async (e, r) => {
                                let {
                                    openEcosystemWidgetFocusedObject: n
                                } = await eF();
                                r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), n(tu, {
                                    recipient: tt,
                                    WidgetContent: eL,
                                    WidgetDialog: eR,
                                    id: tx,
                                    conversationId: e$,
                                    hostId: eZ,
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
                                e.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), r(tu, tx)
                            } : void 0
                        },
                        requestModal: async (e, r) => {
                            let {
                                requestEcosystemWidgetModal: n
                            } = await eU();
                            r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), await n(tu, {
                                recipient: tt,
                                WidgetDialog: eR,
                                conversationId: e$,
                                hostId: eZ,
                                result: t,
                                payload: e,
                                signal: r
                            })
                        },
                        finance: tT === S.a ? (0, C.a)(tu, tm, `${th}${tf}${ty}`, tr || null != tb && "inline" !== tb ? void 0 : t) : void 0,
                        ...null != tD && {
                            handleRequest: h.b,
                            requestReconnectConnector: i.isVerifiedFirstParty ? tD : void 0
                        }
                    }
                }
            }, eO[68] = tm, eO[69] = t_, eO[70] = tT, eO[71] = e$, eO[72] = e2, eO[73] = tb, eO[74] = tq, eO[75] = tx, eO[76] = ty, eO[77] = e9, eO[78] = eZ, eO[79] = tr, eO[80] = tw, eO[81] = e0, eO[82] = th, eO[83] = td, eO[84] = tt, eO[85] = tD, eO[86] = tu, eO[87] = tf, eO[88] = G) : G = eO[88];
            let tH = G;
            eO[89] !== e2 || eO[90] !== e3 || eO[91] !== tp || eO[92] !== tu.query ? (K = async () => {
                if (null == tp) throw Error("Cannot refetch without a resource query");
                e2.access.assertActive();
                let e = await tu.query.fetch(w.a, tp);
                return e2.access.assertActive(), (0, f.c)({
                    ...e2,
                    ...e
                }, e3)
            }, eO[89] = e2, eO[90] = e3, eO[91] = tp, eO[92] = tu.query, eO[93] = K) : K = eO[93];
            let tL = K,
                tO = null == tp ? void 0 : tL;
            eO[94] !== e$ || eO[95] !== eZ || eO[96] !== ez || eO[97] !== tt || eO[98] !== tg.request.chatGptThreadId || eO[99] !== tu ? (V = () => null != ez ? ez : tt?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: tt.get(L.x, tt.value.conversationId)
            } : null != tg.request.chatGptThreadId || e$.startsWith("chatgpt:") || (0, H.e)(e$) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tu.get(I.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: eZ
            }, eO[94] = e$, eO[95] = eZ, eO[96] = ez, eO[97] = tt, eO[98] = tg.request.chatGptThreadId, eO[99] = tu, eO[100] = V) : V = eO[100];
            let tU = V;
            if (tR && null == tD) return null;
            eO[101] !== to ? (ea = to ? {
                source: "global"
            } : {}, eO[101] = to, eO[102] = ea) : ea = eO[102], eO[103] !== tg.analyticsContext || eO[104] !== ea ? (eq = {
                ...tg.analyticsContext,
                ...ea
            }, eO[103] = tg.analyticsContext, eO[104] = ea, eO[105] = eq) : eq = eO[105];
            let tG = tR ? "component" : eX,
                tF = !0 === tg.widget.is_verified_first_party,
                tW = td ? null : tg.request.template;
            eO[106] !== tC || eO[107] !== td || eO[108] !== tg.mcpAppHostAdapter.connectorTarget?.targetId || eO[109] !== tg.request.toolName ? (eE = !td && "connectorId" in tC ? {
                connectorId: tC.connectorId,
                linkId: tg.mcpAppHostAdapter.connectorTarget?.targetId ?? null,
                resourceUri: null,
                appName: null,
                actionName: tg.request.toolName
            } : void 0, eO[106] = tC, eO[107] = td, eO[108] = tg.mcpAppHostAdapter.connectorTarget?.targetId, eO[109] = tg.request.toolName, eO[110] = eE) : eE = eO[110], eO[111] !== tg.request.toolName || eO[112] !== tF || eO[113] !== tW || eO[114] !== eE ? (ek = {
                widgetSource: "hosted",
                isVerifiedFirstParty: tF,
                originResourceUri: tW,
                originTool: tg.request.toolName,
                appContext: eE
            }, eO[111] = tg.request.toolName, eO[112] = tF, eO[113] = tW, eO[114] = eE, eO[115] = ek) : ek = eO[115];
            let tB = tT === S.a ? tm ?? void 0 : void 0,
                tz = tr ? T.b : tn;
            return eO[116] !== e$ || eO[117] !== eK || eO[118] !== ti || eO[119] !== tU || eO[120] !== tH || eO[121] !== to || eO[122] !== tl || eO[123] !== eZ || eO[124] !== ts || eO[125] !== ta || eO[126] !== tc || eO[127] !== eV || eO[128] !== e0 || eO[129] !== tj || eO[130] !== eQ || eO[131] !== tt || eO[132] !== tO || eO[133] !== tI.appIcon || eO[134] !== tA || eO[135] !== tg.access || eO[136] !== tg.mcpAppHostAdapter || eO[137] !== tg.preferredModelDisplayMode || eO[138] !== tg.request.toolInput || eO[139] !== tg.request.viewParams || eO[140] !== tg.toolResult || eO[141] !== tg.widgetStatePersistence || eO[142] !== eq || eO[143] !== tG || eO[144] !== ek || eO[145] !== tB || eO[146] !== tz || eO[147] !== tM || eO[148] !== tP ? (eN = (0, n.jsx)(M.a, {
                analyticsContext: eq,
                getNewThreadDestination: tU,
                resource: tA,
                legacyPreferredDisplayMode: tg.preferredModelDisplayMode,
                hostDisplayModes: tl,
                recipient: tt,
                conversationId: e$,
                deepLink: eK,
                pluginId: eQ,
                fullSurface: ti,
                hostScroll: ts,
                inheritHostBackground: tc,
                hostId: eZ,
                hostedInThreadScrollLayout: ta,
                lifetime: tG,
                access: tg.access,
                mcpAppId: e0,
                initialWidgetState: eV,
                widgetStatePersistence: tg.widgetStatePersistence,
                sourceName: tj,
                getResourceHost: tH,
                refetchResource: tO,
                mcpAppScope: ek,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tg.mcpAppHostAdapter,
                plaidAccountId: tB,
                Frame: tz,
                server: "codex_apps",
                appIcon: tI.appIcon,
                sidePanelTitle: tM,
                title: tM,
                globalSurface: to,
                toolArguments: tg.request.toolInput,
                toolResult: tg.toolResult,
                ...tP,
                viewParamsOverride: tg.request.viewParams
            }), eO[116] = e$, eO[117] = eK, eO[118] = ti, eO[119] = tU, eO[120] = tH, eO[121] = to, eO[122] = tl, eO[123] = eZ, eO[124] = ts, eO[125] = ta, eO[126] = tc, eO[127] = eV, eO[128] = e0, eO[129] = tj, eO[130] = eQ, eO[131] = tt, eO[132] = tO, eO[133] = tI.appIcon, eO[134] = tA, eO[135] = tg.access, eO[136] = tg.mcpAppHostAdapter, eO[137] = tg.preferredModelDisplayMode, eO[138] = tg.request.toolInput, eO[139] = tg.request.viewParams, eO[140] = tg.toolResult, eO[141] = tg.widgetStatePersistence, eO[142] = eq, eO[143] = tG, eO[144] = ek, eO[145] = tB, eO[146] = tz, eO[147] = tM, eO[148] = tP, eO[149] = eN) : eN = eO[149], eO[150] !== eB || eO[151] !== eN ? (eD = (0, n.jsxs)(n.Fragment, {
                children: [eN, eB]
            }), eO[150] = eB, eO[151] = eN, eO[152] = eD) : eD = eO[152], eD
        }
        async function eU() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(117976)]).then(r.bind(r, "IQhm"))
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
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(954244), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(579403)]).then(r.bind(r, "Ia2H"))
        }
    }),
    HUQj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("oyxz"),
            o = r("zKCW"),
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
            m = r("SfL3"),
            h = r("jAnS"),
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
                } = e, o = r(p.L, n);
                return null != o && function(e, t) {
                    let r = (0, a.a)(e),
                        n = r.findIndex(e => (0, a.g)(e) === t);
                    if (n < 0) return !0;
                    let i = e => (0, g.k)(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
                        o = r.findLast(i),
                        s = r.slice(0, n + 1).findLast(i);
                    if (o === s && r.findLast(g.k)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
                    let l = (0, d.a)(r).get(t);
                    return null != l ? !l : null != o && null != s && o !== s
                }({
                    mapping: o,
                    current_node: r(p.B, n)
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
                let r = (0, h.d)(e),
                    n = () => e.get(o.b) === t.accountId && e.get(s.k) === t.userId;
                if (!n()) return !1;
                if (null == e.get(p.L, t.conversationId)) try {
                    await e.query.fetch(u.chatGptConversationQueryById$, t.conversationId)
                } catch {
                    return !1
                }
                if (!n() || null != e.get(p.Z, t.conversationId)) return !1;
                let a = e.get(p.L, t.conversationId),
                    i = a?.[t.messageId]?.message,
                    c = null == i ? null : (0, f.d)(i, void 0);
                if (null == a || null == c || !_(c)) return !1;
                let d = l.e.safeParse(c.toolResult.structuredContent).data?.suggestions.find(e => e.plugin_id === t.pluginId),
                    g = (0, m.c)(e, t.conversationId, t.messageId, c.metadata),
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
                return !!n() && !!b.ok && g.getState(e) === I && ((0, h.d)(e) === r && (0, u.A)(e, t.conversationId) && null == e.get(p.Z, t.conversationId) && !e.get(w, {
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
            a: async function(e, t, r, n, d, u, p, g, m) {
                let h;
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
                            t = await r.handleRequest(e, u, g, m)
                        } catch (t) {
                            if (p(u), !(0, l.d)(t)) throw t;
                            if ("tools/call" === e.method) return y();
                            throw new s.a(f(), 403, l.a)
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
                    h = await (0, a.requestMcpConnectSheet)(e, {
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
                return (p(u), h.didConnect && h.linkId && (null == I.link_id || h.linkId === I.link_id)) ? w({
                    ...d,
                    params: {
                        ...d.params,
                        name: x,
                        _meta: {
                            ...d.params._meta,
                            "openai/connector_id": I.connector_id,
                            "openai/action_name": x,
                            "openai/link_id": h.linkId
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
                        onClose: m,
                        "aria-label": h
                    } = e,
                    f = !1 === g;
                return c[0] !== u ? (t = null == u ? void 0 : {
                    height: u
                }, c[0] = u, c[1] = t) : t = c[1], c[2] !== g ? (r = e => {
                    !1 === g && e.preventDefault()
                }, c[2] = g, c[3] = r) : r = c[3], c[4] !== h || c[5] !== t || c[6] !== r ? (o = {
                    "aria-label": h,
                    style: t,
                    onEscapeKeyDown: r
                }, c[4] = h, c[5] = t, c[6] = r, c[7] = o) : o = c[7], c[8] !== m ? (s = e => {
                    e || m()
                }, c[8] = m, c[9] = s) : s = c[9], c[10] !== d || c[11] !== f || c[12] !== o || c[13] !== s || c[14] !== p ? (l = (0, n.jsx)(i.a, {
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
            l = r("WRGu"),
            c = r("EAcR"),
            d = r("qwxA");
        r.d(t, {}, {
            a: function(e) {
                let t, r, u, p, g, m, h, f, y, w, _, v, I, b = (0, a.c)(30);
                b[0] !== e ? ({
                    children: t,
                    className: r,
                    contentContainer: u,
                    contentOverride: p,
                    showOpenButton: h,
                    openButtonTitle: m,
                    ...g
                } = e, b[0] = e, b[1] = t, b[2] = r, b[3] = u, b[4] = p, b[5] = g, b[6] = m, b[7] = h) : (t = b[1], r = b[2], u = b[3], p = b[4], g = b[5], m = b[6], h = b[7]);
                let A = void 0 !== h && h;
                b[8] !== g ? (f = (0, n.jsx)(c.a, {
                    ...g
                }), b[8] = g, b[9] = f) : f = b[9];
                let x = f;
                b[10] !== u || b[11] !== x ? (y = null == u ? x : (0, o.createPortal)(x, u), b[10] = u, b[11] = x, b[12] = y) : y = b[12];
                let q = y;
                b[13] !== r ? (w = (0, i.b)("relative h-full min-h-0", r), b[13] = r, b[14] = w) : w = b[14], b[15] !== g.mcpAppId ? (_ = (0, n.jsx)(d.b, {
                    isInlineRequested: !0,
                    mcpAppId: g.mcpAppId
                }), b[15] = g.mcpAppId, b[16] = _) : _ = b[16], b[17] !== g.appName || b[18] !== g.fullSurface || b[19] !== g.mcpAppId || b[20] !== g.presentation || b[21] !== m || b[22] !== A ? (v = !g.fullSurface && A ? (0, n.jsx)("div", {
                    className: "flex items-center",
                    children: (0, n.jsx)(l.a, {
                        disabled: !1,
                        mcpAppId: g.mcpAppId,
                        reopenTitle: "launcher" === g.presentation ? m ?? g.appName : void 0
                    })
                }) : null, b[17] = g.appName, b[18] = g.fullSurface, b[19] = g.mcpAppId, b[20] = g.presentation, b[21] = m, b[22] = A, b[23] = v) : v = b[23];
                let S = void 0 === p ? q : p;
                return b[24] !== t || b[25] !== w || b[26] !== _ || b[27] !== v || b[28] !== S ? (I = (0, n.jsxs)(s.a, {
                    className: w,
                    children: [_, t, v, S]
                }), b[24] = t, b[25] = w, b[26] = _, b[27] = v, b[28] = S, b[29] = I) : I = b[29], I
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
                        actions: m,
                        description: h,
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
                return g[6] !== m || g[7] !== h || g[8] !== x || g[9] !== v || g[10] !== f || g[11] !== w || g[12] !== _ || g[13] !== A ? (u = w ? (0, n.jsxs)(n.Fragment, {
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
                        description: void 0 === h ? x : h,
                        actions: m ?? (!v && (0, n.jsx)(l.a, {
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
                }), g[6] = m, g[7] = h, g[8] = x, g[9] = v, g[10] = f, g[11] = w, g[12] = _, g[13] = A, g[14] = u) : u = g[14], g[15] !== A || g[16] !== u ? (p = (0, n.jsx)("div", {
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
            a = r("d0tz"),
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
                return null != r && null != n && (0, l.b)(e.get, a.rf.showEducationalTips) ? () => {
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