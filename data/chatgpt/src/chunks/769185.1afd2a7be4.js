export const __rspack_esm_ids = [769185];
export const __webpack_modules__ = {
    ENcj: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("YdA6"),
            i = r.n(a),
            o = r("BolX"),
            s = r("doi1"),
            l = r("ASxG"),
            c = r("URlz"),
            d = r("ztwn"),
            u = r("OiCI"),
            p = r("Cslg"),
            g = r("Kwur"),
            h = r("T8YV"),
            m = r("aLav"),
            f = r("w5lF"),
            _ = r("cqPu"),
            w = r("BErR"),
            y = r("OWtl");
        let I = (0, o.q)(y.a, (e, t) => {
            let {
                hostId: a,
                accountId: o,
                accountSource: y,
                connectorId: I,
                targetId: v = null,
                appUri: b,
                template: A,
                actionName: q,
                productSku: T,
                productContext: C = "chatgpt",
                publicMcpLinkId: x,
                mcpAppId: E,
                canContinue: k
            } = e, {
                scope: S,
                get: j
            } = t, M = j("apps" === y ? u.a : p.f), P = j(p.f), R = j(p.j), N = j(p.k), O = T ?? (0, m.a)(b), H = {
                hostId: a,
                server: "codex_apps",
                accountSource: y,
                threadId: null,
                connectorTarget: null == I ? null : {
                    connectorId: I,
                    targetId: v
                }
            }, L = j(c.d, H).source, D = j(c.b, H), U = j(w.b, H), G = null != D && (null == o || o === M), W = [I, v, q].every(e => null != e && e.length > 0 && !e.includes("/")) ? `/${[I,v,q].join("/")}` : void 0, F = ["ecosystem-widget-resource", L?.serverIdentity, a, v, y, o ?? M, b, A, W, q, O, P, R, ...void 0 === x ? [] : ["public-mcp", x, C], ...null == k ? [] : [E], ...i()(U) ? [] : [{
                pluginRevision: U ?? "unresolved"
            }]];
            return {
                queryKey: F,
                meta: {
                    persistWidgetResource: null == k && void 0 !== U,
                    hostedWidgetRecovery: void 0 === x && null == k ? {
                        accountSource: y,
                        connectorId: I,
                        targetId: v,
                        appUri: b,
                        template: A,
                        actionName: q,
                        productSku: O,
                        accountId: M,
                        authenticatedAccountId: P,
                        requestUserId: R,
                        userId: N
                    } : void 0
                },
                queryFn: async e => {
                    let {
                        signal: t
                    } = e;
                    return (0, _.j)({
                        operation: "App HTML fetch",
                        starting: "Fetching hosted app HTML"
                    }, {
                        safe: {
                            connectorId: I,
                            mcpAppId: E
                        },
                        sensitive: {
                            hostId: a,
                            appUri: b,
                            template: A
                        }
                    }, async e => {
                        let i;
                        if (!G) throw Error("MCP app account changed before reading");
                        if (null == D) throw Error("MCP app request is no longer available");
                        let o = () => {
                                D.assertActive(), t.throwIfAborted()
                            },
                            c = async () => {
                                o();
                                let e = null == k || await k(t);
                                return o(), e
                            };
                        if (void 0 !== x) {
                            if (null == M || null == I) throw Error("The widget account is unavailable");
                            let {
                                readPublicMcpResource: a,
                                readPublicMcpWidgetResource: i
                            } = await r.e(158360).then(r.bind(r, "v6Hf"));
                            if (e("Checking app availability"), !await c()) throw Error("MCP app request is no longer available");
                            e("Requesting app HTML");
                            let s = await i(S, D, A, () => a(S, {
                                accountId: M,
                                accountSource: y,
                                connectorId: I,
                                linkId: x,
                                uri: A,
                                productContext: C,
                                signal: t
                            })).catch(e => {
                                if (t.throwIfAborted(), (0, h.d)(e)) throw (0, h.c)();
                                throw e
                            });
                            return o(), {
                                ...s,
                                resourceKey: (0, n.f)(F)
                            }
                        }
                        let u = async () => {
                            if (e("Checking app availability"), !await c()) throw Error("MCP app request is no longer available");
                            e("Requesting app HTML"), o();
                            let r = await g.Request.safeGet("/ecosystem/widget", {
                                isExpectedError: h.d,
                                additionalHeaders: {
                                    ...null == M ? {} : {
                                        "ChatGPT-Account-ID": M
                                    },
                                    ..."apps" === y && null != M ? {
                                        [s.$b]: M
                                    } : {},
                                    ...null == O ? {} : {
                                        "OAI-Product-Sku": O
                                    }
                                },
                                expectedIdentity: null == M || null == R ? void 0 : {
                                    accountId: M,
                                    userId: R
                                },
                                assertRequestCurrent: o,
                                parameters: {
                                    query: {
                                        launcher_host: "chatgpt",
                                        uri: b,
                                        template_pointer: A,
                                        resource_path: W,
                                        ...null == I || null == q ? {} : {
                                            connector_id: I ?? void 0,
                                            link_id: v ?? void 0,
                                            action_name: q
                                        }
                                    }
                                },
                                signal: t
                            }).catch(e => {
                                if (t.throwIfAborted(), (0, h.d)(e)) throw (0, h.c)();
                                throw e
                            });
                            o();
                            let n = await (0, d.c)(S, D.serverIdentity, M, (0, d.a)(r), r.domain ?? null);
                            return o(), {
                                widget: r,
                                sandboxOrigin: n
                            }
                        };
                        try {
                            i = await u()
                        } catch (d) {
                            if (t.throwIfAborted(), null == W || null == I || null == v || !(d instanceof f.c) || 403 !== d.status || "current" !== D.status(S.get)) throw d;
                            let n = l.object({
                                code: l.literal("connector_auth_required"),
                                connector_auth: l.object({
                                    connector_id: l.literal(I),
                                    link_id: l.literal(v),
                                    auth_reason: l.literal("reauthentication_required"),
                                    requested_scopes: l.array(l.string()).nullish()
                                })
                            }).safeParse(d.detail);
                            if (!n.success) throw d;
                            let {
                                requestMcpConnectSheet: o
                            } = await Promise.resolve().then(r.bind(r, "Sbyb"));
                            if (!await c()) throw d;
                            e("Reconnecting app");
                            let s = await o(S, {
                                connectorId: I,
                                hostId: a,
                                signal: t,
                                beforeConnect: c,
                                payload: {
                                    requireAuth: !0,
                                    authReason: "reauthentication_required",
                                    reauthLinkId: v,
                                    requestedScopes: n.data.connector_auth.requested_scopes ?? void 0
                                }
                            });
                            if (t.throwIfAborted(), !s.didConnect || s.linkId !== v) throw d;
                            i = await u()
                        }
                        o();
                        let {
                            widget: p,
                            sandboxOrigin: m
                        } = i;
                        if (e("Checking for empty HTML", {
                                safe: {
                                    htmlLength: p.html.length
                                }
                            }), 0 === p.html.trim().length) throw Error("The app did not return widget HTML.");
                        return {
                            widget: p,
                            sandboxOrigin: m,
                            resourceKey: (0, n.f)(F)
                        }
                    }, {
                        signal: t
                    })
                },
                enabled: G,
                staleTime: 0,
                refetchOnMount: !0,
                retry: !1
            }
        }, {
            key: e => {
                let {
                    canContinue: t,
                    ...r
                } = e;
                return (0, n.f)([r, null != t])
            }
        });
        r.d(t, {}, {
            a: I,
            b: async function(e, t, r) {
                r?.throwIfAborted();
                let n = e.query.getOptions(I, t),
                    a = e.queryClient.fetchQuery(n);
                if (!1 === n.enabled || null != t.canContinue) return null == r ? a : (0, s.if)(a, r);
                let i = e.queryClient.getQueryCache(),
                    o = i.find({
                        queryKey: n.queryKey
                    }),
                    l = (0, s.Re)(),
                    c = i.subscribe(e => {
                        let {
                            query: t
                        } = e;
                        t === o && void 0 !== o.state.data && l.resolve(o.state.data)
                    });
                o?.state.data !== void 0 && l.resolve(o.state.data);
                try {
                    let e = Promise.race([a, l.promise]);
                    return await (null == r ? e : (0, s.if)(e, r))
                } finally {
                    c()
                }
            }
        })
    }),
    pI8I: (function(e, t, r) {
        r.d(t, {
            a: () => N.a,
            b: () => A.b,
            c: () => D,
            d: () => U
        });
        var n = r("doi1"),
            a = r("Wc42"),
            i = r("ASxG"),
            o = r("URlz"),
            s = r("ztwn"),
            l = r("ENcj"),
            c = r("OiCI"),
            d = r("Cslg"),
            u = r("Kwur"),
            p = r("w5lF"),
            g = r("cqPu"),
            h = r("cDR4"),
            m = r("MX3C"),
            f = r("eShZ"),
            _ = r("KdgD"),
            w = r("NQCo"),
            y = r("OOaz"),
            I = r("dQRk"),
            v = r("T8YV"),
            b = r("rxj0"),
            A = r("KhaL");
        let q = {
            $type: "protobuf_analytics_events.v1.ChatgptEcosystemWidgetLifecycle"
        };
        var T = r("D015"),
            C = r("yGJW");
        let x = i.object({
                request_id: p.j,
                x_oai_request_id: p.j,
                error_code: p.i,
                error_http_status_code: i.number().int().min(100).max(599).optional().catch(void 0),
                status: i.enum(["success", "error"]).optional().catch(void 0)
            }),
            E = i.enum(["bootstrap_unexpected_error", "bootstrap_status", "file_authorization", "launch_widget", "widget_render"]).optional().catch(void 0),
            k = i.enum(["unknown_error", "ready", "auto_install_required", "connect_required", "auth_required", "blocked", "not_found", "missing_tool_response", "tool_error", "missing_widget_html"]).catch("unknown_error");
        var S = r("kSHG"),
            j = r("P93s");
        let M = i.object({
                name: i.string(),
                _meta: i.object({
                    _codex_apps: i.looseObject({
                        resource_uri: i.string(),
                        contains_mcp_source: i.boolean(),
                        requires_explicit_link_id: i.boolean().optional()
                    }),
                    link_accounts: i.array(i.object({
                        link_id: i.string().min(1)
                    })).optional(),
                    ui: i.object({
                        visibility: i.array(i.string()).optional()
                    }).optional(),
                    "ui/visibility": i.union([i.string(), i.array(i.string())]).optional()
                })
            }),
            P = i.object({
                tools: i.array(i.unknown()),
                nextCursor: i.string().optional()
            });

        function R() {
            return (0, j.a)("The widget connection is unavailable. Reopen the app to retry.", S.q.InvalidRequest)
        }
        var N = r("brfW"),
            O = r("aLav");
        let H = i.object({
                entityId: i.string().min(1),
                entityType: i.enum(["product", "place", "spotlight", "account"]),
                entrypointLabel: i.string().min(1),
                entrypointType: i.enum(["button", "widget"]),
                intentType: i.enum(["checkout", "reservation", "service", "onboarding", "account_detail"]),
                surface: i.enum(["search_results", "image_generation", "new_thread_home", "mattress_accounts_tab"])
            }),
            L = i.object({
                appUri: i.string().min(1),
                logging: H,
                mode: i.enum(["fullscreen", "modal"]),
                template: i.string().min(1),
                toolInput: i.record(i.string(), i.json()),
                toolName: i.string().min(1),
                viewParams: i.record(i.string(), i.json()).nullable().optional()
            });
        async function D(e) {
            let t, r, n, a, i, o, s, l, {
                    scope: c,
                    hostId: d,
                    chatGptConversationId: u,
                    threadId: g,
                    productSku: h,
                    payload: m,
                    sourceMessageId: _,
                    prepareToolInput: w,
                    onTracking: v,
                    accountId: b,
                    signal: A
                } = e,
                S = {
                    ...L.parse(m),
                    chatGptThreadId: null == u ? null : (0, y.d)(u),
                    threadId: g,
                    productSku: h,
                    sourceMessageId: _
                };
            A?.throwIfAborted();
            let j = (t = {
                launchAttemptId: crypto.randomUUID(),
                sourceMessageId: S.sourceMessageId,
                surface: S.logging.surface,
                intentType: S.logging.intentType,
                entityType: S.logging.entityType
            }, r = {
                entrypointType: S.logging.entrypointType
            }, n = null, a = 0, i = !1, o = !1, s = null, (l = (e, r) => {
                (0, C.a)(c, q, {
                    ...t,
                    ...r,
                    actionType: e,
                    conversationId: c.get(I.j, S.chatGptThreadId) ?? void 0
                })
            })("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED", r), {
                startSession() {
                    a = Date.now();
                    let e = crypto.randomUUID();
                    n = {
                        launcherSessionId: e,
                        widgetSessionId: e,
                        widgetInstanceId: crypto.randomUUID()
                    }
                },
                opened(e) {
                    let {
                        messageId: t,
                        widgetSessionId: a,
                        widgetInstanceId: i
                    } = e;
                    null != n && l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED", {
                        ...n = {
                            ...n,
                            widgetSessionId: a ?? n.widgetSessionId,
                            widgetInstanceId: i ?? n.widgetInstanceId
                        },
                        ...r,
                        messageId: t ?? void 0
                    })
                },
                renderReady() {
                    null == n || i || o || (i = !0, s = null, l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY", n))
                },
                error(e) {
                    let {
                        reason: t = "unknown_error",
                        error: a,
                        toolMetadata: i
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (o || s === e) return;
                    s = e;
                    let c = x.safeParse(i).data,
                        d = a instanceof f.a ? a.diagnosticError : a,
                        u = d instanceof p.c ? d : void 0;
                    l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR", {
                        ...r,
                        failurePoint: E.parse(e),
                        errorReason: k.parse(t),
                        requestId: c?.request_id ?? p.j.parse(u?.requestId),
                        xOaiRequestId: c?.x_oai_request_id,
                        errorCode: c?.error_code ?? p.i.parse(u?.code),
                        errorHttpStatusCode: (0, T.a)(c?.error_http_status_code ?? u?.status ?? (a instanceof f.a ? a.responseStatus : void 0)),
                        toolStatus: c?.status,
                        ...n
                    })
                },
                close(e) {
                    null == n || o || (o = !0, l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED", {
                        ...n,
                        closeReason: e,
                        timeInWidgetMs: Math.max(0, Date.now() - a)
                    }))
                }
            });
            v?.(j);
            let M = await U({
                scope: c,
                hostId: d,
                request: S,
                mode: S.mode,
                sourceMessageId: _,
                prepareToolInput: w,
                tracking: j,
                accountId: b,
                signal: A
            });
            return {
                ...M,
                tracking: j,
                request: {
                    ...S,
                    mode: "fullscreen" === M.widget.preferred_display_mode && M.widget.available_display_modes?.includes("fullscreen") !== !1 ? "fullscreen" : S.mode,
                    productSku: M.request.productSku,
                    appUri: M.request.appUri,
                    linkId: M.request.linkId,
                    toolInput: L.shape.toolInput.parse(M.request.toolInput)
                }
            }
        }
        async function U(e) {
            let {
                scope: t,
                analyticsContext: r,
                hostId: p,
                request: f,
                mode: y,
                sourceMessageId: q,
                accountId: T,
                accountSource: C,
                restoreHostedConversation: x,
                signal: E,
                prepareToolInput: k,
                tracking: S
            } = e;
            E?.throwIfAborted();
            let j = f.chatGptThreadId,
                H = t.get(d.k);
            return (0, g.j)({
                operation: "Hosted app launch",
                starting: "Launching hosted app"
            }, {
                safe: {
                    chatGptThreadId: f.chatGptThreadId
                },
                sensitive: {
                    hostId: p,
                    appUri: f.appUri,
                    template: f.template
                }
            }, async e => {
                let g, L, D, U = t.get(d.j),
                    G = t.get(d.f),
                    B = "apps" === C ? c.a : d.f,
                    z = t.get(B);
                if (null != T && T !== z) throw Error("MCP app account changed before opening");
                let K = () => {
                        if (E?.throwIfAborted(), null != j && t.get(b.d, j)) throw new DOMException("MCP app blocked by conversation Lockdown", "AbortError");
                        if (z !== t.get(B) || G !== t.get(d.f) || H !== t.get(d.k) || U !== t.get(d.j)) throw Error("MCP app account changed while opening")
                    },
                    $ = f.productSku ?? ("tpp" === t.get(I.x, j) ? "tpp" : void 0),
                    Q = "bootstrap_unexpected_error",
                    Y = "unknown_error",
                    V = f.linkId;
                try {
                    K();
                    let c = null == z && null == $ ? void 0 : {
                            ...null == z ? {} : {
                                "ChatGPT-Account-ID": z,
                                [n.$b]: z
                            },
                            ...null == $ ? {} : {
                                "OAI-Product-Sku": $
                            }
                        },
                        I = await (0, w.a)(t, j, E);
                    K();
                    let b = (0, _.a)(null, f.appUri);
                    L = b?.connectorId, void 0 === V && null != b && null != z && null != H && (V = t.get(m.c, {
                        accountId: z,
                        userId: H,
                        appId: b.connectorId
                    }) ?? void 0);
                    let T = {
                            additionalHeaders: c,
                            expectedIdentity: null == z || null == U ? void 0 : {
                                accountId: z,
                                userId: U
                            },
                            assertRequestCurrent: K,
                            signal: E
                        },
                        G = {
                            app_uri: f.appUri,
                            link_id: V,
                            conversation_id: I,
                            launcher_host: "chatgpt",
                            template_pointer: f.template,
                            tool_input: f.toolInput,
                            tool_name: f.toolName
                        },
                        B = await u.Request.safePost("/ecosystem/launcher/bootstrap", {
                            ...T,
                            requestBody: G
                        });
                    K();
                    let Z = e => {
                        if ("auto_install_required" === e.status) {
                            if (null != k) throw new N.a(e.connector_id, "NONE");
                            return
                        }
                        let t = e.reason?.trim();
                        switch ("ready" !== e.status && "connect_required" !== e.status && (Q = "bootstrap_status", Y = e.status), e.status) {
                            case "ready":
                                if ("apps" === C && "noauth_launch_without_install" === e.readiness_source) throw new N.a(e.connector_id, "NONE");
                                V = V ?? e.link_id ?? void 0;
                                break;
                            case "connect_required":
                                throw new N.a(e.connector_id, "oauth" === e.preferred_auth_type ? "OAUTH" : void 0, t);
                            case "auth_required":
                                if ("apps" === C && "selected_link_auth_required" === t && null != V) throw new N.a(e.connector_id, "OAUTH", t, V);
                                throw Error(t || "Sign in to ChatGPT before opening this app");
                            case "blocked":
                                throw Error(t || "This app is blocked from opening.");
                            case "not_found":
                                throw Error(t || "This app is no longer available.")
                        }
                    };
                    Z(B), null != x && (j = I = await x(), K());
                    let J = B;
                    "auto_install_required" === B.status && (J = await u.Request.safePost("/ecosystem/launcher/auto_install", {
                        ...T,
                        requestBody: {
                            ...G,
                            conversation_id: I
                        }
                    }), K(), Z(J));
                    let X = (0, a.a)(J.normalized_app_uri) ?? f.appUri;
                    L = J.connector_id ?? (0, _.a)(null, X)?.connectorId, K(), Q = "file_authorization", e("Preparing app tool input");
                    let ee = null == k ? f.toolInput : await k(X);
                    K();
                    let et = $ ?? (0, O.a)(X);
                    Q = "launch_widget", S?.startSession(), K();
                    let er = await async function(e, t) {
                        let r, n = (0, A.b)(e),
                            a = n.connectorTarget;
                        if (null == a || null != a.targetId || !["CODEX", "TPP"].includes(e.productSku?.toUpperCase() ?? "")) return null;
                        let i = [],
                            o = new Set;
                        for (let e = 0; e < 32; e++) {
                            let t = P.parse(await n.handleRequest({
                                method: "tools/list",
                                params: null == r ? {} : {
                                    cursor: r
                                }
                            }));
                            for (let e of t.tools) {
                                let t = M.safeParse(e).data,
                                    r = t?._meta._codex_apps.resource_uri.split("/");
                                if (null == t || r?.length !== 4 || "" !== r[0] || r[1] !== a.connectorId || !r[2] || !r[3] || r[2].startsWith("synthetic_link::")) continue;
                                let n = t._meta._codex_apps.requires_explicit_link_id ? t._meta.link_accounts?.map(e => e.link_id) ?? [] : [r[2]];
                                i.push({
                                    tool: t,
                                    actionName: r[3],
                                    links: n
                                })
                            }
                            if (null == (r = t.nextCursor)) break;
                            if (o.has(r) || 31 === e) throw R();
                            o.add(r)
                        }
                        let s = i.filter(e => {
                            let {
                                tool: r,
                                actionName: n
                            } = e;
                            return n === t || r.name === t
                        });
                        if (1 !== s.length || 0 === s[0].links.length) throw R();
                        let l = s[0].links[0];
                        if (l.includes("/") || l.startsWith("synthetic_link::")) throw R();
                        let c = new Map;
                        for (let {
                                tool: e,
                                actionName: t,
                                links: r
                            }
                            of i) {
                            let n = e._meta.ui?.visibility ?? e._meta["ui/visibility"];
                            if (r.includes(l) && (null == n || (Array.isArray(n) ? n.includes("app") : "app" === n))) {
                                if (c.has(t)) throw R();
                                c.set(t, {
                                    name: e.name,
                                    metadata: e._meta._codex_apps
                                })
                            }
                        }
                        return {
                            target: {
                                connectorId: a.connectorId,
                                targetId: l
                            },
                            actionName: s[0].actionName,
                            toolDescriptors: c
                        }
                    }({
                        scope: t,
                        attribution: r,
                        appUri: X,
                        accountId: z ?? void 0,
                        accountSource: C,
                        signal: E,
                        threadId: f.threadId,
                        productSku: $,
                        chatGptConversationId: j,
                        messageId: q ?? null,
                        originMetadata: {
                            attribution_id: J.connector_id,
                            link_id: V
                        }
                    }, f.toolName);
                    K(), V = V ?? er?.target.targetId;
                    let en = {
                            ...f,
                            chatGptThreadId: j,
                            accountSource: C,
                            appUri: X,
                            toolInput: ee,
                            linkId: V,
                            productSku: $,
                            mode: y
                        },
                        ea = null == er ? void 0 : {
                            hostId: p,
                            accountId: z ?? void 0,
                            accountSource: C,
                            appUri: X,
                            template: f.template,
                            connectorId: er.target.connectorId,
                            targetId: er.target.targetId,
                            actionName: er.actionName,
                            productSku: et
                        };
                    if (null != er) {
                        if (!t.get(d.i) || null == z || null == H) throw Error("MCP app account changed while opening");
                        K()
                    }
                    let ei = null == ea ? null : (0, l.b)(t, ea, E);
                    e("Requesting app launch");
                    let eo = u.Request.safePost("/ecosystem/launch_widget", {
                            isExpectedError: F,
                            ...T,
                            requestBody: {
                                app_uri: X,
                                link_id: V,
                                conversation_id: I,
                                launcher_host: "chatgpt",
                                mode: y,
                                template: f.template,
                                tool_input: ee,
                                tool_name: er?.actionName ?? f.toolName,
                                view_params: f.viewParams ?? null
                            }
                        }),
                        es = (ei ?? u.Request.safeGet("/ecosystem/widget", {
                            isExpectedError: v.d,
                            ...T,
                            additionalHeaders: {
                                ...c,
                                ...null == et ? {} : {
                                    "OAI-Product-Sku": et
                                }
                            },
                            parameters: {
                                query: {
                                    launcher_host: "chatgpt",
                                    connector_id: null == V ? void 0 : J.connector_id,
                                    action_name: null == V ? void 0 : f.toolName,
                                    link_id: V,
                                    template_pointer: f.template,
                                    uri: X
                                }
                            }
                        }).then(e => ({
                            widget: e,
                            sandboxOrigin: void 0,
                            resourceKey: void 0
                        }))).then(e => ({
                            resource: e
                        }), e => ({
                            error: e
                        }));
                    D = es.then(e => "error" in e ? W(e.error, L, V) : void 0);
                    let el = await eo;
                    K();
                    let ec = el.tool_response_metadata ?? i.record(i.string(), i.unknown()).safeParse(el.widget?.chatgpt_sdk?.tool_response_metadata).data;
                    if (ec?.status === "error" && ec.error_code === v.a) throw (0, v.c)();
                    let ed = el.tool_response;
                    if (null == ed) throw Y = "missing_tool_response", Error(el.missing_widget_reason ?? "The app did not return a widget tool result.");
                    let eu = i.object({
                        launcher_fallback: i.literal(!0),
                        status: i.enum(["connect_required", "auth_required", "blocked", "not_found"]),
                        connector_id: i.string().nullish(),
                        preferred_auth_type: i.literal("oauth").nullish()
                    }).safeParse(ed.structuredContent);
                    if (eu.success) {
                        if ("connect_required" === eu.data.status) throw new N.a(eu.data.connector_id, "oauth" === eu.data.preferred_auth_type ? "OAUTH" : void 0);
                        throw Y = eu.data.status, Error("The app is no longer available to launch")
                    }
                    let ep = el.widget?.chatgpt_sdk,
                        eg = {
                            ...ep,
                            ...el.tool_response_metadata
                        },
                        eh = (0, _.a)(eg, X);
                    if (null != er && eh?.targetId != null && (eh.connectorId !== er.target.connectorId || eh.targetId !== er.target.targetId)) throw Error("The widget connection is unavailable. Reopen the app to retry.");
                    let em = el.tool_response_metadata ?? i.record(i.string(), i.unknown()).safeParse(ep?.tool_response_metadata).data ?? ed._meta,
                        ef = i.object({
                            connector_id: i.string().min(1),
                            link_id: i.string().min(1),
                            requested_scopes: i.array(i.string()).nullish()
                        }).safeParse(em?.["openai/connector_auth"]).data;
                    if (ed.isError && null != ef && ef.connector_id === L && (null == V || ef.link_id === V)) throw new N.a(ef.connector_id, "OAUTH", void 0, ef.link_id, ef.requested_scopes ?? void 0);
                    if (g = em, !0 === ed.isError || em?.status === "error") throw Y = "tool_error", Error((0, a.a)(em?.reason) ?? "The app tool call failed.");
                    let e_ = await es;
                    if (K(), "error" in e_) throw e_.error;
                    let {
                        widget: ew,
                        resourceKey: ey,
                        sandboxOrigin: eI
                    } = e_.resource;
                    if (0 === ew.html.trim().length) throw Y = "missing_widget_html", Error("The app did not return widget HTML.");
                    let ev = h.c.parse((0, h.d)({
                            ...ed,
                            ...null == em ? {} : {
                                _meta: em
                            }
                        }, {
                            preserveStructuredContentNull: !0
                        })),
                        eb = (0, a.a)(ep?.resolved_pineapple_uri) ?? X,
                        eA = el.widget?.tool_message_id ?? q ?? null,
                        eq = (0, A.b)({
                            scope: t,
                            attribution: r,
                            appUri: eb,
                            accountId: z ?? void 0,
                            accountSource: C,
                            signal: E,
                            threadId: f.threadId,
                            productSku: $,
                            chatGptConversationId: j,
                            messageId: eA,
                            originMetadata: {
                                ...eg,
                                link_id: V ?? eg.link_id,
                                ...null == er ? {} : {
                                    attribution_id: er.target.connectorId,
                                    link_id: er.target.targetId
                                }
                            },
                            toolDescriptors: er?.toolDescriptors
                        }),
                        eT = t.get(o.b, {
                            hostId: p,
                            server: "codex_apps",
                            threadId: f.threadId ?? null,
                            connectorTarget: eq.connectorTarget,
                            accountSource: C
                        });
                    if (null == eT) throw Error("MCP app account changed while opening");
                    eT.assertActive();
                    let eC = eI ?? await (0, s.c)(t, eT.serverIdentity, z, (0, s.a)(ew), ew.domain ?? null);
                    return eT.assertActive(), K(), E?.throwIfAborted(), S?.opened({
                        messageId: eA,
                        widgetSessionId: (0, a.a)(ep?.widget_session_id),
                        widgetInstanceId: el.widget?.tool_message_id ?? crypto.randomUUID()
                    }), {
                        analyticsContext: r,
                        distributionChannel: i.enum(["only_me", "openai", "external"]).catch("external").parse(ep?.distribution_channel),
                        suggestionMessageId: (0, a.a)(ep?.suggestion_message_id) ?? void 0,
                        redirectDomains: i.object({
                            redirect_domains: i.array(i.string()).optional()
                        }).safeParse(ep?.csp).data?.redirect_domains,
                        attributionId: (0, a.a)(ep?.attribution_id) ?? void 0,
                        widgetSessionId: (0, a.a)(ep?.widget_session_id) ?? void 0,
                        access: eT,
                        sandboxOrigin: eC,
                        resourceQuery: ea,
                        resourceKey: ey,
                        mcpAppHostAdapter: eq,
                        request: en,
                        toolResult: ev,
                        widget: ew
                    }
                } catch (r) {
                    if (F(r)) throw K(), (0, v.c)();
                    let t = W(r, L, V);
                    if (null != t || null == D || r instanceof N.a || r instanceof Error && "AbortError" === r.name || (K(), t = await (null == E ? D : (0, n.if)(D, E)), K()), null != t) throw K(), new N.a(t.connector_id, "OAUTH", void 0, t.link_id, t.requested_scopes ?? void 0);
                    throw e("Hosted app launch stopped", {
                        safe: {
                            failurePoint: Q,
                            failureReason: Y
                        }
                    }), E?.aborted || r instanceof Error && "AbortError" === r.name || r instanceof N.a || S?.error(Q, {
                        reason: Y,
                        error: r,
                        toolMetadata: g
                    }), r
                }
            }, {
                signal: E
            })
        }
        let G = i.object({
            connector_id: i.string().min(1),
            link_id: i.string().min(1),
            auth_reason: i.literal("reauthentication_required"),
            requested_scopes: i.array(i.string()).nullish()
        });

        function W(e, t, r) {
            let n = e instanceof f.a ? e.diagnosticError : e;
            if (null == t || !(n instanceof p.c) || 401 !== n.status && 403 !== n.status) return;
            let a = i.object({
                code: i.literal("connector_auth_required"),
                connector_auth: G
            }).safeParse(n.detail).data?.connector_auth ?? i.object({
                tool_response: i.object({
                    isError: i.literal(!0),
                    _meta: i.object({
                        "openai/tool_error_kind": i.literal("connector_auth_required"),
                        "openai/connector_auth": G
                    })
                })
            }).safeParse(n.json).data?.tool_response._meta["openai/connector_auth"];
            return a?.connector_id === t && (null == r || a.link_id === r) ? a : void 0
        }

        function F(e) {
            if ((0, v.d)(e)) return !0;
            if (!(e instanceof f.a || e instanceof p.c) || 403 !== e.status) return !1;
            let t = i.object({
                tool_response_metadata: i.object({
                    status: i.literal("error"),
                    error_code: i.literal(v.a)
                })
            });
            if (e instanceof p.c) return t.safeParse(e.json).success;
            try {
                return t.safeParse(JSON.parse(e.message)).success
            } catch {
                return !1
            }
        }
    }),
    Q5Ju: (function(e, t, r) {
        var n = r("JXtc");
        r.d(t, {}, {
            a: function(e, t) {
                let {
                    csp: r,
                    height_hint: a,
                    html: i,
                    prefers_border: o
                } = e.widget, s = e.resource ?? {
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
                            "openai/widgetHeightHint": a ?? void 0,
                            "openai/widgetMinFrameHeight": 0,
                            "openai/widgetDomain": e.widget.domain ?? void 0,
                            "openai/widgetPrefersBorder": o ?? !1
                        },
                        mimeType: "text/html+skybridge",
                        text: i,
                        uri: e.request.template
                    }]
                }, l = (0, n.b)(s, e.sandboxOrigin);
                if (l?.kind !== "html") throw Error("The app returned an unsupported widget resource.");
                let c = e.widget.inline_frame_padding;
                return {
                    ...l,
                    sandboxOrigin: e.sandboxOrigin,
                    csp: {
                        ...l.csp,
                        imageDomains: t
                    },
                    inlineFramePadding: null == c ? void 0 : {
                        blockStart: c.block_start,
                        blockEnd: c.block_end,
                        inlineStart: c.inline_start,
                        inlineEnd: c.inline_end
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
            b: function(e) {
                return null != e && "widget" in e && null != e.sandboxOrigin
            }
        })
    }),
    SoU3: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("SZCv"),
            i = r.n(a),
            o = r("BolX"),
            s = r("URlz"),
            l = r("ENcj"),
            c = r("ALWK"),
            d = r("kl6F"),
            u = r("Q5Ju");
        let p = (0, o.d)(d.a, (e, t) => {
                let {
                    mcpAppId: r,
                    resourceKey: n
                } = e, {
                    get: a
                } = t, i = a(c.i, r), o = i?.sessionId == null ? null : i.content, s = o?.resource;
                return null != n && null != o && (0, u.b)(s) && s.resourceKey === n ? {
                    widget: s.widget,
                    sandboxOrigin: s.sandboxOrigin
                } : null
            }),
            g = (0, o.d)(d.a, (e, t) => {
                let {
                    retainFrame: r = !0,
                    ...a
                } = e, {
                    get: i
                } = t, o = i(l.a, a), d = r && null == o.data ? i(c.i, a.mcpAppId) : null, p = d?.content, g = p?.resource, h = d?.sessionId != null && null != p && (0, u.b)(g) && null != g.resourceKey && null != g.resourceQuery && (0, n.f)([g.resourceQuery]) === (0, n.f)([a]) && "current" === i(s.c, p.access) ? {
                    widget: g.widget,
                    sandboxOrigin: g.sandboxOrigin,
                    resourceKey: g.resourceKey
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
            a: p,
            b: g
        })
    }),
    thD3: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("BolX"),
            o = r("doi1"),
            s = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Sbyb"),
            u = r("BQbE"),
            p = r("ygO2"),
            g = r("XroQ"),
            h = r("piij"),
            m = r("OWtl"),
            f = r("pI8I");

        function _() {}
        r.d(t, {}, {
            a: function(e) {
                let t, r, w, y, I, v, b, A, q, T = (0, a.c)(39),
                    {
                        error: C,
                        hostId: x,
                        isLoading: E,
                        onRetry: k
                    } = e,
                    S = (0, i.y)(m.a),
                    j = (0, l.a)(),
                    [M, P] = (0, s.useState)(null),
                    R = C instanceof f.a ? C : null;
                T[0] !== R?.connectorId ? (t = R?.connectorId?.trim() || null, T[0] = R?.connectorId, T[1] = t) : t = T[1];
                let N = t;
                T[2] !== N ? (r = null == N ? [] : [N], T[2] = N, T[3] = r) : r = T[3];
                let O = null != N && !E;
                T[4] !== r || T[5] !== O ? (w = {
                    appIds: r,
                    enabled: O,
                    hostId: o.Vb
                }, T[4] = r, T[5] = O, T[6] = w) : w = T[6];
                let {
                    data: H
                } = (0, u.c)(w);
                if (T[7] !== H || T[8] !== N || T[9] !== j) {
                    let e = H?.find(e => e.id === N)?.name.trim();
                    y = e ? j.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectNamedApp",
                        defaultMessage: "Connect {appName} to continue",
                        description: "Title prompting the user to connect a named app before continuing"
                    }, {
                        appName: e
                    }) : j.formatMessage({
                        id: "openaiMcpCapabilities.unavailable.connectDescription",
                        defaultMessage: "Connect the app to continue",
                        description: "Recovery guidance when a hosted MCP app needs a connection before it can open"
                    }), T[7] = H, T[8] = N, T[9] = j, T[10] = y
                } else y = T[10];
                let L = y,
                    D = R?.reauthLinkId,
                    U = R?.authReason ?? "reauthentication_required",
                    G = R?.requestedScopes;
                T[11] !== M ? (I = () => () => M?.abort(), T[11] = M, T[12] = I) : I = T[12], T[13] !== U || T[14] !== M || T[15] !== N || T[16] !== x || T[17] !== D || T[18] !== G ? (v = [M, N, x, D, U, G], T[13] = U, T[14] = M, T[15] = N, T[16] = x, T[17] = D, T[18] = G, T[19] = v) : v = T[19], (0, s.useEffect)(I, v);
                let W = null == N ? void 0 : L;
                T[20] !== N ? (b = null == N ? void 0 : (0, n.jsx)("img", {
                    className: "size-40 object-contain select-none",
                    src: h,
                    alt: "",
                    draggable: !1
                }), T[20] = N, T[21] = b) : b = T[21];
                let F = null == N ? void 0 : null;
                return T[22] !== U || T[23] !== M || T[24] !== N || T[25] !== x || T[26] !== E || T[27] !== k || T[28] !== D || T[29] !== G || T[30] !== S ? (A = null == N ? void 0 : (0, n.jsx)(p.a, {
                    color: "secondary",
                    disabled: null != M || E,
                    loading: null != M || E,
                    onClick: () => {
                        let e = new AbortController;
                        P(e), (0, d.requestMcpConnectSheet)(S, {
                            connectorId: N,
                            hostId: x,
                            oauthPresentation: "popup",
                            payload: null == D ? void 0 : {
                                requireAuth: !0,
                                authReason: U,
                                reauthLinkId: D,
                                requestedScopes: G
                            },
                            signal: e.signal
                        }).then(t => {
                            let {
                                didConnect: r,
                                linkId: n
                            } = t;
                            r && !e.signal.aborted && (null == D || n === D) && k()
                        }).catch(_).finally(() => P(null))
                    },
                    children: (0, n.jsx)(c.a, {
                        id: "openaiMcpCapabilities.unavailable.connect",
                        defaultMessage: "Connect",
                        description: "Button that opens the existing connection flow for a hosted MCP app"
                    })
                }), T[22] = U, T[23] = M, T[24] = N, T[25] = x, T[26] = E, T[27] = k, T[28] = D, T[29] = G, T[30] = S, T[31] = A) : A = T[31], T[32] !== E || T[33] !== k || T[34] !== F || T[35] !== A || T[36] !== W || T[37] !== b ? (q = (0, n.jsx)(g.a, {
                    isLoading: E,
                    onRetry: k,
                    title: W,
                    illustration: b,
                    description: F,
                    actions: A
                }), T[32] = E, T[33] = k, T[34] = F, T[35] = A, T[36] = W, T[37] = b, T[38] = q) : q = T[38], q
            }
        })
    }),
    rcTL: (function(e, t, r) {
        r.d(t, {
            ChatGptEcosystemWidgetContent: () => eW,
            EcosystemWidgetDialog: () => eD,
            a: () => eB
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57"),
            o = r("BolX"),
            s = r("doi1"),
            l = r("zd8w"),
            c = r("Wf1j"),
            d = r("oyxz"),
            u = r("Qgfj"),
            p = r("jqIZ"),
            g = r("ZU27"),
            h = r("o6hs"),
            m = r("Ooax"),
            f = r("PrVQ"),
            _ = r("uUH7"),
            w = r("ENcj"),
            y = r("Cslg"),
            I = r("EOo5"),
            v = r("kphc"),
            b = r("WBiY"),
            A = r("ygO2"),
            q = r("JNtf"),
            T = r("RNul"),
            C = r("SGsN"),
            x = r("PeqE"),
            E = r("s5P0"),
            k = r("gg0W"),
            S = r("aXN3"),
            j = r("ZgWk"),
            M = r("tbqK"),
            P = r("AHnN"),
            R = r("ALWK"),
            N = r("ze43"),
            O = r("Sd8U"),
            H = r("tSEg"),
            L = r("pI8I"),
            D = r("Q5Ju"),
            U = r("SoU3"),
            G = r("thD3"),
            W = r("OOaz"),
            F = r("dQRk"),
            B = r("kSHG"),
            z = r("P93s"),
            K = r("OWtl"),
            $ = r("OMIV"),
            Q = r("bnxy"),
            Y = r("rxj0"),
            V = r("IDHB");
        let Z = (0, o.d)(K.a, (e, t) => {
            let {
                get: r
            } = t, n = r(y.m);
            if (n.authLoading || "chatgpt" !== n.authMethod || !0 !== n.supportedSurface || null == n.authenticatedAccountId || null == n.userId || !n.email?.endsWith("@openai.com") || !r($.d, "3080374709") || null == e || null == r(F.j, e) || null != r(F.Z, e)) return !1;
            let a = r(F.x, e);
            return ("tpp" === a || "flora" === a) && !r(Y.d, e)
        });
        var J = r("T8YV"),
            X = r("HUQj"),
            ee = r("lax3"),
            et = r("z8ZL"),
            er = r("ASxG"),
            en = r("Sbyb"),
            ea = r("jEN2"),
            ei = r("JYRT"),
            eo = r("ripK"),
            es = r("g2p6"),
            el = r("sWz1"),
            ec = r("EA6X"),
            ed = r("g25Y"),
            eu = r("Ot7V"),
            ep = r("X6Vn"),
            eg = r("vgfv"),
            eh = r("yGJW"),
            em = r("yI91"),
            ef = r("Kwur"),
            e_ = r("VV1g"),
            ew = r("aRhc");
        let ey = "redirectUrl",
            eI = er.object({
                href: er.url().refine(e => {
                    let t = new URL(e);
                    return "data:" === t.protocol ? /^data:text\/csv(?:;charset=utf-8)?(?:;base64)?,/i.test(e) : !e.includes("\\") && !t.username && !t.password && !/^(?:javascript|data|file|blob|about|chrome|chrome-extension|resource|view-source|vbscript):$/i.test(t.protocol)
                }),
                redirectUrl: er.union([er.string(), er.boolean()]).optional(),
                openMode: er.enum(["tab", "popup"]).optional()
            });

        function ev(e, t, r, n) {
            let a = !0 === t.widget.is_verified_first_party,
                i = e.get(F.j, t.request.chatGptThreadId ?? null);
            (0, eh.a)(e, ec.g, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                surfaceLocation: "sidebar" === t.mcpAppHostAdapter.displayMode ? ec.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR : ec.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
        var eb = r("iqEK"),
            eA = r("UxLW"),
            eq = r("vvmK");
        let eT = er.object({
            fileId: er.string().min(1)
        });
        var eC = r("bTvG"),
            ex = r("JKSp"),
            eE = r("PFjh"),
            ek = r("hkUn");
        let eS = {
                label: er.string(),
                tags: er.array(er.object({
                    key: er.string(),
                    value: er.string()
                })).optional()
            },
            ej = er.discriminatedUnion("type", [er.object({
                type: er.literal("event"),
                label: er.string(),
                payload: er.record(er.string(), er.json()).optional()
            }), er.object({
                type: er.literal("interaction"),
                ...eS
            }), er.object({
                type: er.literal("count"),
                ...eS,
                count: er.number().optional()
            }), er.object({
                type: er.literal("hist"),
                ...eS,
                value: er.number()
            }), er.object({
                type: er.literal("error")
            })]);
        var eM = r("Igop"),
            eP = r("DSZZ");
        let eR = "openai/deep-research/report-copy",
            eN = er.discriminatedUnion("phase", [er.strictObject({
                phase: er.literal("start"),
                id: er.uuid(),
                length: er.number().int().nonnegative()
            }), er.strictObject({
                phase: er.literal("finish"),
                id: er.uuid(),
                success: er.boolean()
            })]);
        var eO = r("AuIy"),
            eH = r("cDR4");

        function eL(e) {
            let t, r = e._meta,
                n = e;
            for (let t of [r?.call_tool_result, r?.mcp_tool_result, r?.mcpToolResult, ...Array.isArray(r?.content) ? [r] : [], e]) {
                let e = (0, eO.r)(t);
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
        }

        function eD(e) {
            let t, r = (0, a.c)(2);
            return r[0] !== e ? (t = void 0 === e.recipient ? (0, n.jsx)(eU, {
                ...e
            }) : (0, n.jsx)(eG, {
                ...e
            }), r[0] = e, r[1] = t) : t = r[1], t
        }

        function eU(e) {
            let t, r = (0, a.c)(3),
                i = (0, o.y)(O.a);
            return r[0] !== e || r[1] !== i ? (t = (0, n.jsx)(eG, {
                ...e,
                recipient: i
            }), r[0] = e, r[1] = i, r[2] = t) : t = r[2], t
        }

        function eG(e) {
            let t, r, i, u, p, g, h, m, f, _, w, y, I = (0, a.c)(62),
                {
                    recipient: v,
                    conversationId: b,
                    hostId: A,
                    mcpAppId: x,
                    onClose: E,
                    state: S,
                    heightHint: j,
                    widthHint: M,
                    allowsInteractiveDismissal: P
                } = e,
                N = void 0 === v ? null : v,
                O = (0, o.y)(H.a),
                D = (0, c.a)();
            I[0] !== x ? (t = () => x ?? (0, s.sf)(), I[0] = x, I[1] = t) : t = I[1];
            let [U] = (0, l.useState)(t), W = "ready" === S.kind && "modal" === S.result.request.mode ? Math.max(j ?? S.result.widget.height_hint ?? 0, 0) || void 0 : j, F = "ready" === S.kind ? S.result.tracking : S.tracking, B = "ready" === S.kind && "fullscreen" === S.result.request.mode, z = "loading" === S.kind && !0 === S.nonModal;
            I[2] !== E || I[3] !== F ? (r = () => {
                F?.close("user_dismissed"), E()
            }, I[2] = E, I[3] = F, I[4] = r) : r = I[4];
            let K = (0, l.useEffectEvent)(r);
            I[5] !== P || I[6] !== K || I[7] !== z || I[8] !== O ? (i = () => {
                if (z) return O.get(C.f).info((0, n.jsx)(d.a, {
                    ...ez.openingApp
                }), {
                    duration: 0,
                    hasCloseButton: !1,
                    leading: (0, n.jsx)(T.a, {
                        className: "icon-xs"
                    }),
                    primaryAction: !1 === P ? void 0 : {
                        label: (0, n.jsx)(d.a, {
                            id: "chatgpt.ecosystemWidget.cancelOpening",
                            defaultMessage: "Cancel",
                            description: "Button to cancel opening an Apps SDK widget"
                        }),
                        onClick: () => K()
                    }
                }).close
            }, I[5] = P, I[6] = K, I[7] = z, I[8] = O, I[9] = i) : i = I[9], I[10] !== P || I[11] !== z || I[12] !== O ? (u = [O, z, P], I[10] = P, I[11] = z, I[12] = O, I[13] = u) : u = I[13], (0, l.useEffect)(i, u), I[14] !== B || I[15] !== E || I[16] !== F ? (p = () => {
                B && (F?.close("user_dismissed"), E())
            }, I[14] = B, I[15] = E, I[16] = F, I[17] = p) : p = I[17];
            let $ = (0, l.useEffectEvent)(p);
            if (I[18] !== $ || I[19] !== U || I[20] !== O || I[21] !== F ? (g = () => {
                    let e = O.watch(e => {
                        let t = e.get(R.r, U);
                        null != t && e.get(R.q, t)?.isOpen === !1 ? $() : (e.get(R.u, U) && F?.renderReady(), null != e.get(R.p, U) && F?.error("widget_render"))
                    });
                    return () => {
                        e(), F?.close("navigation_changed")
                    }
                }, I[18] = $, I[19] = U, I[20] = O, I[21] = F, I[22] = g) : g = I[22], I[23] !== U || I[24] !== O || I[25] !== F ? (h = [O, U, F], I[23] = U, I[24] = O, I[25] = F, I[26] = h) : h = I[26], (0, l.useEffect)(g, h), z) return null;
            if ("ready" === S.kind && B) {
                let e, t;
                return I[27] === Symbol.for("react.memo_cache_sentinel") ? (e = ["fullscreen"], I[27] = e) : e = I[27], I[28] !== b || I[29] !== A || I[30] !== U || I[31] !== N || I[32] !== S.result ? (t = (0, n.jsx)(eW, {
                    recipient: N,
                    conversationId: b,
                    hostDisplayModes: e,
                    hostId: A,
                    lifetime: "component",
                    mcpAppId: U,
                    result: S.result,
                    showOpenButton: !1
                }), I[28] = b, I[29] = A, I[30] = U, I[31] = N, I[32] = S.result, I[33] = t) : t = I[33], t
            }
            if ("error" === S.kind)
                if ((0, J.d)(S.error)) {
                    let e;
                    I[34] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                        children: (0, n.jsx)(X.a, {})
                    }), I[34] = e) : e = I[34], m = e
                } else if (S.error instanceof L.a) {
                let e, t;
                I[35] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(q.d, {
                    className: "sr-only",
                    children: (0, n.jsx)(d.a, {
                        ...ez.openAppError
                    })
                }), I[35] = e) : e = I[35], I[36] !== A || I[37] !== E || I[38] !== S.error ? (t = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(G.a, {
                        error: S.error,
                        hostId: A,
                        isLoading: !1,
                        onRetry: E
                    })]
                }), I[36] = A, I[37] = E, I[38] = S.error, I[39] = t) : t = I[39], m = t
            } else {
                let e, t;
                I[40] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(q.d, {
                    className: "text-lg font-medium",
                    children: (0, n.jsx)(d.a, {
                        ...ez.openAppError
                    })
                }), I[40] = e) : e = I[40], I[41] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-2 p-8 text-center",
                    children: [e, (0, n.jsx)("p", {
                        className: "text-codex-description",
                        children: (0, n.jsx)(d.a, {
                            ...ez.openAppErrorDescription
                        })
                    })]
                }), I[41] = t) : t = I[41], m = t
            }
            return I[42] !== D ? (f = D.formatMessage(ez.appTitle), I[42] = D, I[43] = f) : f = I[43], I[44] !== E || I[45] !== F ? (_ = () => {
                F?.close("user_dismissed"), E()
            }, I[44] = E, I[45] = F, I[46] = _) : _ = I[46], I[47] !== b || I[48] !== m || I[49] !== A || I[50] !== U || I[51] !== N || I[52] !== S.kind || I[53] !== S.result ? (w = "loading" === S.kind ? (0, n.jsx)("div", {
                className: "flex h-full items-center justify-center",
                role: "status",
                children: (0, n.jsx)(d.a, {
                    ...ez.openingApp
                })
            }) : "error" === S.kind ? m : (0, n.jsx)(eW, {
                recipient: N,
                conversationId: b,
                hostId: A,
                inDialog: !0,
                lifetime: "component",
                mcpAppId: U,
                result: S.result
            }), I[47] = b, I[48] = m, I[49] = A, I[50] = U, I[51] = N, I[52] = S.kind, I[53] = S.result, I[54] = w) : w = I[54], I[55] !== P || I[56] !== W || I[57] !== _ || I[58] !== w || I[59] !== f || I[60] !== M ? (y = (0, n.jsx)(k.a, {
                "aria-label": f,
                heightHint: W,
                widthHint: M,
                allowsInteractiveDismissal: P,
                onClose: _,
                children: w
            }), I[55] = P, I[56] = W, I[57] = _, I[58] = w, I[59] = f, I[60] = M, I[61] = y) : y = I[61], y
        }

        function eW(e) {
            let t, s, u, T, k, O, L, G, K, J, X, ec, eS, eO, eH, eU, eG, e$, eQ, eY, eV, eZ, eJ, eX, e0, e1, e3, e2 = (0, a.c)(188),
                {
                    recipient: e5,
                    newThreadDestination: e8,
                    conversationId: e6,
                    deepLink: e7,
                    initialWidgetState: e4,
                    pluginId: e9,
                    hostId: te,
                    inDialog: tt,
                    Frame: tr,
                    lifetime: tn,
                    hostedInThreadScrollLayout: ta,
                    mcpAppId: ti,
                    result: to,
                    imageDomains: ts,
                    fullSurface: tl,
                    globalSurface: tc,
                    hostScroll: td,
                    hostDisplayModes: tu,
                    inheritHostBackground: tp,
                    showDialogTitle: tg,
                    heightHint: th,
                    showOpenButton: tm,
                    showLoadingStatus: tf,
                    disableInlineLoadingState: t_,
                    readOnlySnapshot: tw
                } = e,
                ty = void 0 === e5 ? null : e5,
                tI = void 0 !== tt && tt,
                tv = void 0 === tr ? S.a : tr,
                tb = void 0 !== ta && ta,
                tA = void 0 === tl ? tI : tl,
                tq = void 0 !== tc && tc,
                tT = void 0 !== td && td,
                tC = void 0 === tu ? R.d : tu,
                tx = void 0 !== tp && tp,
                tE = void 0 === tg ? tI : tg,
                tk = void 0 === tm || tm,
                tS = void 0 === tf || tf,
                tj = void 0 !== tw && tw,
                tM = (0, o.y)(H.a),
                tP = to.resourceQuery;
            e2[0] !== to.resourceKey || e2[1] !== ti ? (t = {
                mcpAppId: ti,
                resourceKey: to.resourceKey
            }, e2[0] = to.resourceKey, e2[1] = ti, e2[2] = t) : t = e2[2];
            let tR = (0, o.x)(U.a, t);
            e2[3] !== to || e2[4] !== tR ? (s = null == tR ? to : {
                ...to,
                ...tR
            }, e2[3] = to, e2[4] = tR, e2[5] = s) : s = e2[5];
            let tN = s,
                {
                    accountId: tO
                } = (0, I.a)(),
                {
                    pathname: tH,
                    search: tL,
                    hash: tD
                } = (0, p.Y)(),
                tU = (0, c.a)(),
                tG = (0, o.x)(Z, tN.request.chatGptThreadId);
            e2[6] !== e6 || e2[7] !== te || e2[8] !== tU || e2[9] !== ty || e2[10] !== tN || e2[11] !== tM ? (u = async (e, t) => {
                let r = tM.get(_.mcpConnectSheetRequest$),
                    n = r?.widgetModal;
                if (r?.id === e && r.restored && r.result?.didConnect && null != n && null == tN.modalOwner && r.hostId === te && "current" === tN.access.status(tM.get) && n.accountId === tN.access.accountId && n.userId === tN.access.uiUserId && n.sourceAppUri === tN.request.appUri && n.sourceTemplate === tN.request.template && n.sourceMessageId === tN.request.sourceMessageId && n.sourceThreadId === tN.request.threadId && n.sourceConversationId === tM.get(F.j, tN.request.chatGptThreadId)) {
                    tM.set(_.mcpConnectSheetRequest$, null);
                    try {
                        let {
                            requestEcosystemWidgetModal: e
                        } = await eF();
                        t.throwIfAborted(), await e(tM, {
                            recipient: ty,
                            conversationId: e6,
                            hostId: te,
                            result: tN,
                            WidgetDialog: eD,
                            payload: n.payload,
                            signal: t
                        }, r.result)
                    } catch {
                        t.aborted || tM.get(C.f).danger(tU.formatMessage(ez.openAppError), {
                            errorAnalytics: {
                                toastId: "ecosystem.widget.modal.resume"
                            }
                        })
                    }
                }
            }, e2[6] = e6, e2[7] = te, e2[8] = tU, e2[9] = ty, e2[10] = tN, e2[11] = tM, e2[12] = u) : u = e2[12];
            let tW = (0, l.useEffectEvent)(u);
            e2[13] !== tI || e2[14] !== tW || e2[15] !== tM ? (T = () => {
                if (tI) return;
                let e = new AbortController,
                    t = tM.watch(t => {
                        let {
                            get: r
                        } = t, n = r(_.mcpConnectSheetRequest$);
                        n?.restored && null != n.widgetModal && n.result?.didConnect && tW(n.id, e.signal)
                    });
                return () => {
                    t(), e.abort()
                }
            }, e2[13] = tI, e2[14] = tW, e2[15] = tM, e2[16] = T) : T = e2[16], e2[17] !== tI || e2[18] !== tN.request.appUri || e2[19] !== tN.request.chatGptThreadId || e2[20] !== tN.request.sourceMessageId || e2[21] !== tN.request.template || e2[22] !== tM ? (k = [tM, tI, tN.request.appUri, tN.request.template, tN.request.sourceMessageId, tN.request.chatGptThreadId], e2[17] = tI, e2[18] = tN.request.appUri, e2[19] = tN.request.chatGptThreadId, e2[20] = tN.request.sourceMessageId, e2[21] = tN.request.template, e2[22] = tM, e2[23] = k) : k = e2[23], (0, l.useEffect)(T, k), e2[24] !== to || e2[25] !== ts ? (O = (0, D.a)(to, ts), e2[24] = to, e2[25] = ts, e2[26] = O) : O = e2[26];
            let tF = O,
                tB = tN.mcpAppHostAdapter.displayMode ?? (tI ? "inline" : void 0);
            e2[27] !== tF ? (L = {
                data: tF,
                error: null,
                isLoading: !1
            }, e2[27] = tF, e2[28] = L) : L = e2[28];
            let tz = L,
                tK = (0, o.x)(R.n, ti),
                t$ = (0, o.x)(R.t, ti),
                tQ = `ecosystem-focused:${ti}`,
                tY = (0, o.x)(g.j.tabById$, tQ);
            e2[29] !== ti || e2[30] !== tN || e2[31] !== tM ? (G = async () => {
                let {
                    completeEcosystemWidgetFocusedObjectTransfer: e
                } = await eK();
                e(tM, ti, tN)
            }, e2[29] = ti, e2[30] = tN, e2[31] = tM, e2[32] = G) : G = e2[32];
            let tV = (0, l.useEffectEvent)(G);
            e2[33] !== tV || e2[34] !== tY || e2[35] !== tI || e2[36] !== ti || e2[37] !== tM ? (K = () => {
                if (null != tY && !tI) return tM.watch(e => {
                    let {
                        get: t
                    } = e;
                    null != t(R.i, ti) && tV()
                })
            }, e2[33] = tV, e2[34] = tY, e2[35] = tI, e2[36] = ti, e2[37] = tM, e2[38] = K) : K = e2[38], e2[39] !== tY || e2[40] !== tI || e2[41] !== ti || e2[42] !== tM ? (J = [tM, tY, tI, ti], e2[39] = tY, e2[40] = tI, e2[41] = ti, e2[42] = tM, e2[43] = J) : J = e2[43], (0, l.useEffect)(K, J);
            let tZ = tN.access.serverIdentity,
                tJ = "connectorId" in tZ ? tZ.connectorId : null;
            e2[44] !== tU || e2[45] !== tN.widget.name ? (X = tN.widget.name || tU.formatMessage(ez.appTitle), e2[44] = tU, e2[45] = tN.widget.name, e2[46] = X) : X = e2[46];
            let tX = X,
                t0 = tN.title || tX,
                {
                    request: t1,
                    toolResult: t3
                } = to;
            e2[47] !== t3 ? (ec = eL(t3), e2[47] = t3, e2[48] = ec) : ec = e2[48];
            let t2 = ec,
                t5 = !tj && t1.template === m.a,
                t8 = (0, o.z)(t5 ? y.j : null);
            e: {
                let e, t;
                if (!t5) {
                    eS = void 0;
                    break e
                }
                let r = to.modalOwner?.result ?? to,
                    n = r.access.serverIdentity;
                if (null == t8 || !("connectorId" in n) || n.connectorId !== tJ || r.request.template !== t1.template || !0 !== to.widget.is_verified_first_party || !0 === to.mcpAppHostAdapter.isTombstone || null != t2.toolCallStatus) {
                    eS = void 0;
                    break e
                }
                e2[49] !== to.mcpAppHostAdapter || e2[50] !== ti || e2[51] !== t8 || e2[52] !== tM ? (e = () => {
                    if (to.mcpAppHostAdapter.assertActive?.(), tM.get(y.j) !== t8 || tM.get(R.i, ti)?.content.mcpAppScope.isVerifiedFirstParty !== !0) throw Error("This widget is no longer active.")
                }, e2[49] = to.mcpAppHostAdapter, e2[50] = ti, e2[51] = t8, e2[52] = tM, e2[53] = e) : e = e2[53];
                let a = e;
                if (e2[54] !== a || e2[55] !== tJ || e2[56] !== to.access || e2[57] !== te || e2[58] !== ty || e2[59] !== t8 || e2[60] !== t1 || e2[61] !== tM || e2[62] !== r.request.chatGptThreadId || e2[63] !== r.request.sourceMessageId || e2[64] !== r.request.toolInput || e2[65] !== r.toolResult) {
                    let e;
                    e2[67] !== tJ || e2[68] !== to.access || e2[69] !== ty || e2[70] !== t8 || e2[71] !== t1 || e2[72] !== tM ? (e = async e => {
                        let {
                            chatGptThreadId: t,
                            sourceMessageId: r
                        } = t1, n = ty?.value;
                        if (null == ty || n?.kind !== "chatgpt" || null == t || null == r) return;
                        let a = (0, b.getMcpAppSubmit)(ty, () => {
                            let e = e => tM.get(F.j, e) ?? e;
                            if (tM.get(y.j) !== t8 || e(n.conversationId) !== e(t) || tM.get(H.j) || "current" !== to.access.status(tM.get) || null != tM.get(F.Z, t) || null == tM.get(F.L, t) || tM.get(ee.c, {
                                    conversationId: t,
                                    messageId: r
                                }) || (0, Y.i)(tM, t)) throw new DOMException("The originating request is no longer available", "AbortError")
                        });
                        null != a && await a({
                            turnTrigger: "mcp_app_follow_up",
                            addedFiles: [],
                            fileAttachments: [],
                            ideContext: null,
                            imageAttachments: [],
                            prompt: (0, m.b)(e)
                        }, {
                            name: t1.template,
                            attribution: tJ ?? void 0,
                            visuallyHidden: !0
                        })
                    }, e2[67] = tJ, e2[68] = to.access, e2[69] = ty, e2[70] = t8, e2[71] = t1, e2[72] = tM, e2[73] = e) : e = e2[73], t = (0, f.a)({
                        scope: tM,
                        hostId: te,
                        sourceId: JSON.stringify([r.request.chatGptThreadId, r.request.sourceMessageId]),
                        productSku: h.d.shape.productSku.parse(t1.productSku?.toUpperCase()),
                        access: to.access,
                        resourceUri: t1.template,
                        toolInput: r.request.toolInput,
                        toolResult: eL(r.toolResult).toolResultNotification,
                        assertActive: a,
                        onReconnected: e
                    }), e2[54] = a, e2[55] = tJ, e2[56] = to.access, e2[57] = te, e2[58] = ty, e2[59] = t8, e2[60] = t1, e2[61] = tM, e2[62] = r.request.chatGptThreadId, e2[63] = r.request.sourceMessageId, e2[64] = r.request.toolInput, e2[65] = r.toolResult, e2[66] = t
                } else t = e2[66];eS = t
            }
            let t6 = eS;
            e2[74] !== tO || e2[75] !== tG || e2[76] !== tJ || e2[77] !== e6 || e2[78] !== to || e2[79] !== tB || e2[80] !== tY || e2[81] !== tQ || e2[82] !== tD || e2[83] !== th || e2[84] !== te || e2[85] !== tI || e2[86] !== tU || e2[87] !== ti || e2[88] !== tH || e2[89] !== tj || e2[90] !== ty || e2[91] !== t6 || e2[92] !== tM || e2[93] !== tL ? (eO = e => {
                if (!(0, D.b)(e)) throw Error("Expected a hosted widget resource");
                let t = {
                    ...to,
                    widget: e.widget,
                    sandboxOrigin: e.sandboxOrigin,
                    resourceKey: e.resourceKey
                };
                if (tI) {
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
                let n = t.widget.name || tU.formatMessage(ez.appTitle),
                    a = t.title || n,
                    i = {
                        isVerifiedFirstParty: !0 === t.widget.is_verified_first_party,
                        heightHint: th ?? e.heightHint,
                        minFrameHeight: e.minFrameHeight ?? 0,
                        appIcon: e.appIcon,
                        sourceName: n,
                        title: a,
                        sidePanelTitle: a
                    };
                if (tj) return {
                    ...i,
                    mcpAppHostAdapter: t.mcpAppHostAdapter
                };
                let o = tM.get(F.x, t.request.chatGptThreadId);
                return {
                    ...i,
                    mcpAppHostAdapter: {
                        ...t.mcpAppHostAdapter,
                        displayMode: tB,
                        ... function(e, t, n, a) {
                            var i;
                            let o, s, l, c, d, u, p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                g = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : null,
                                h = e => {
                                    e?.throwIfAborted(), n.mcpAppHostAdapter.assertActive?.(), n.access.assertActive()
                                };
                            if ("current" !== n.access.status(e.get)) return {};
                            let {
                                accountId: m,
                                uiUserId: f
                            } = n.access, _ = function(e, t) {
                                let r = t.access.serverIdentity,
                                    n = t.request.chatGptThreadId;
                                if (!0 !== t.widget.is_verified_first_party || !("connectorId" in r) || !["connector_openai_deep_research", "connector_openai_deep_research_work"].includes(r.connectorId) || "internal://deep-research" !== t.request.template || null == n) return null;
                                let a = new Map;
                                return (t, r) => {
                                    let i = eN.safeParse(t);
                                    if (!i.success) return;
                                    let o = i.data,
                                        s = a.get(o.id);
                                    if (s?.dispose(), !(r.aborted || e.get(F.G, n) || null != e.get(F.Z, n) || e.get(Y.d, n)))
                                        if ("start" === o.phase) {
                                            let t = o.length >= 2e3 ? (0, eP.b)(e, n) : null;
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
                            let I = navigator.userAgent,
                                v = {
                                    os: "unknown",
                                    type: "desktop"
                                };
                            /iPad|iPhone|iPod/.test(I) ? (v.os = "ios", v.type = "mobile") : /Android/.test(I) ? (v.os = "android", v.type = "mobile") : /Windows[ _]NT/.test(I) ? v.os = "windows" : I.includes("Mac OS X") && (v.os = "macos"), "mobile" !== v.type && /Tablet/.test(I) && (v.type = "tablet");
                            let b = (0, ew.a)(n.widget.domain),
                                A = n.request.appUri.includes("://") ? URL.parse(n.request.appUri)?.hostname : n.request.appUri,
                                q = null != A && Object.values(e.get(ei.a, "3726720227")?.value ?? {}).some(e => "string" == typeof e && (e.includes("://") ? URL.parse(e)?.hostname : e) === A);
                            return {
                                experimentalCapabilities: {
                                    ...n.mcpAppHostAdapter.experimentalCapabilities,
                                    ...p && !0 === n.widget.is_verified_first_party && null != a && null != n.request.chatGptThreadId && null != n.request.sourceMessageId ? {
                                        "openai/sourceCitationLinks": {}
                                    } : {}
                                },
                                requestCheckout: async (t, a) => {
                                    h(a);
                                    let {
                                        loadWidgetCheckout: i
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575)]).then(r.bind(r, "IKJx")), o = await i();
                                    return h(a), o(e, n, t, a, () => h(a))
                                },
                                forwardedRequestMethods: [...n.mcpAppHostAdapter.forwardedRequestMethods ?? [], "ping", ...null == _ ? [] : [eR]],
                                handleRequest: async (r, a, i, o) => null != _ && r.method === eR ? (h(a), null != a && _(r.params, a), {}) : (0, eM.a)(e, t, n.mcpAppHostAdapter, n.access, r, a, h, i, o),
                                setTargetedReply: null != n.mcpAppHostAdapter.setTargetedReply || null != n.request.chatGptThreadId && null == n.mcpAppHostAdapter.requestTargetedReply ? (t, r) => {
                                    if (h(r), null != n.mcpAppHostAdapter.setTargetedReply) return void n.mcpAppHostAdapter.setTargetedReply(t, r);
                                    let a = n.request.chatGptThreadId,
                                        i = er.object({
                                            text: er.string().trim().min(1)
                                        }).safeParse(t);
                                    if (!i.success || null == a) return;
                                    let o = e.get(es.n);
                                    if (null == o || o !== m) throw Error("The widget account changed");
                                    (0, el.b)(e, a, {
                                        accountId: o,
                                        label: i.data.text,
                                        instruction: `The user is referring to this in particular:
${i.data.text}`,
                                        disableWebSearch: !1,
                                        targetedReplyText: i.data.text
                                    }), (0, ea.e)(a)
                                } : void 0,
                                openConversationOverlay: !0 === n.widget.is_verified_first_party && null != n.request.chatGptThreadId ? async (t, a) => {
                                    h(a);
                                    let {
                                        openWidgetConversationOverlay: i
                                    } = await r.e(179356).then(r.bind(r, "ZF7q"));
                                    h(a), i(e, t, a, n.access)
                                } : void 0,
                                openPromptInput: !0 === n.widget.is_verified_first_party ? async (t, n, a) => {
                                    h(a);
                                    let {
                                        openBrowserWidgetPrompt: i
                                    } = await r.e(763191).then(r.bind(r, "Rcqw"));
                                    h(a);
                                    let o = await i(e, t, n, a);
                                    return h(a), o
                                } : void 0,
                                openInApp: {
                                    appName: n.widget.name,
                                    baseUrl: b,
                                    hideButton: !0 === n.widget.is_verified_first_party,
                                    validateUrl: e => {
                                        if (h(), e.includes("\\") || !URL.canParse(e, b ?? window.location.origin)) return null;
                                        let t = new URL(e, b ?? window.location.origin);
                                        return ("https:" === t.protocol || "http:" === t.protocol) && (0, ew.c)(t.href, {
                                            connectDomains: n.widget.csp?.connect_domains
                                        }, n.widget.domain) ? t.href : null
                                    }
                                },
                                openExternal: (t, r) => (async function(e, t, r, n, a, i) {
                                    a(n);
                                    let o = e_.b.safeParse(r);
                                    if (o.success) return !0 === t.widget.is_verified_first_party && (await i?.(o.data.href, n), a(n)), !0;
                                    let {
                                        href: s,
                                        redirectUrl: l,
                                        openMode: c
                                    } = eI.parse(r);
                                    if (/^data:/i.test(s)) {
                                        if (s.length > 0x1000000) throw Error("CSV export is too large");
                                        let r = s.indexOf(","),
                                            i = decodeURIComponent(s.slice(r + 1)),
                                            o = new Blob([/;base64$/i.test(s.slice(0, r)) ? (0, em.a)(i) : i], {
                                                type: "text/csv;charset=utf-8"
                                            });
                                        if (o.size > 8388608) throw Error("CSV export is too large");
                                        return ev(e, t, "data:text/csv", "tab"), (0, ep.f)(e, ed.ExternalLinkConfirmationDialog, {
                                            href: s,
                                            downloadFilename: "export.csv",
                                            initiator: "mcp_app_resource",
                                            signal: n,
                                            onDownload: () => {
                                                try {
                                                    a(n)
                                                } catch {
                                                    return
                                                }(0, eo.a)(o, "export.csv")
                                            }
                                        }), !0
                                    }
                                    if (null == c && t.mcpAppHostAdapter.onOpenLink?.(s)) return !0;
                                    if (/^codex(?:-dev)?:/.test(s)) return !1;
                                    let d = !0 === t.widget.is_verified_first_party;
                                    if (d && null == c && await i?.(s, n)) return !0;
                                    a(n);
                                    let u = t.widget.csp?.redirect_domains?.length ? t.widget.csp.redirect_domains : t.redirectDomains,
                                        p = (0, ew.c)(s, {
                                            connectDomains: t.widget.csp?.connect_domains
                                        }, t.widget.domain) || (0, ew.b)(s, u),
                                        g = !/^https?:/.test(s);
                                    if (g && !p) throw Error("The app has not declared this external protocol");
                                    let h = new URL(s),
                                        m = !g && h.origin === window.location.origin;
                                    h.search = "", h.hash = "";
                                    let f = e.get(F.j, t.request.chatGptThreadId ?? null);
                                    ev(e, t, h.href, c);
                                    let _ = s;
                                    p && !m && !1 !== l && (null != f || null == t.request.chatGptThreadId) && (_ = function(e, t) {
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
                                        w = (await ef.Request.safePost("/ecosystem/url_safe", {
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
                                    let y = "Apple Computer, Inc." === navigator.vendor,
                                        I = () => {
                                            try {
                                                a(n)
                                            } catch {
                                                return
                                            }
                                            g ? window.open(_, "_blank", "noopener,noreferrer") : d && "popup" === c && w && !y ? (0, eg.a)(e, _) : (0, eu.f)({
                                                href: _,
                                                initiator: "mcp_app_resource"
                                            })
                                        };
                                    return !w || y || g ? (0, ep.f)(e, ed.ExternalLinkConfirmationDialog, {
                                        href: _,
                                        initiator: "mcp_app_resource",
                                        showCopyLink: !w,
                                        signal: n,
                                        onOpen: I
                                    }) : I(), !0
                                })(e, n, t, r, h, a),
                                autofill: q && null != A && null != m && null != f ? async (t, a) => {
                                    h(a);
                                    let {
                                        createBrowserWidgetAutofill: i
                                    } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(108257)]).then(r.bind(r, "JFC7"));
                                    return h(a), i(e, n, A, t, a)
                                } : void 0,
                                sandboxFeatures: [...w],
                                instrumentation: (o = n.distributionChannel ?? (!0 === n.widget.is_verified_first_party ? "openai" : "external"), s = "connectorId" in n.access.serverIdentity ? n.access.serverIdentity.connectorId : n.request.appUri, l = {
                                    ...(0, ek.a)(n.access, n.analyticsContext),
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
                                        let a = ej.safeParse(t);
                                        if (!a.success) return;
                                        let i = a.data;
                                        if ("event" === i.type) return void(0, eh.a)(e, ex.a, {
                                            eventName: i.label,
                                            eventData: JSON.stringify({
                                                ...i.payload,
                                                ...c,
                                                conversation_id: e.get(F.j, n.request.chatGptThreadId),
                                                message_id: n.request.sourceMessageId ?? null,
                                                suggestion_message_id: n.suggestionMessageId ?? null,
                                                distribution_channel: o,
                                                host: "chatgpt"
                                            })
                                        });
                                        if ("error" === i.type) {
                                            "only_me" !== o && e.get(eE.a).count("ecosystem", "app.error", c);
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
                                        "interaction" === i.type ? ((0, eh.a)(e, eC.l, {
                                            ...l,
                                            ...r,
                                            conversationId: e.get(F.j, n.request.chatGptThreadId) ?? void 0,
                                            actionType: (0, ek.b)(i.label)
                                        }), "only_me" !== o && e.get(eE.a).count("ecosystem", {
                                            copy: "app.copy",
                                            click: "app.interaction_click",
                                            scroll: "app.interaction_scroll"
                                        } [i.label] ?? "app.interaction", s)) : "only_me" !== o && ("count" === i.type ? e.get(eE.a).count("ecosystem", i.label, s, i.count) : e.get(eE.a).hist("ecosystem", i.label, s, i.value))
                                    },
                                    notifySecurityPolicyViolation(t) {
                                        let r = er.object({
                                            effectiveDirective: er.string().regex(/^[a-z-]+$/)
                                        }).safeParse(t);
                                        r.success && ((0, eh.a)(e, eC.k, {
                                            ...l,
                                            conversationId: e.get(F.j, n.request.chatGptThreadId) ?? void 0,
                                            effectiveDirective: r.data.effectiveDirective
                                        }), "only_me" !== o && e.get(eE.a).count("ecosystem", "app.security_policy_violation", c))
                                    }
                                }),
                                toolInfo: er.object({
                                    tool: er.object({
                                        name: er.string(),
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
                                device: v,
                                downloadBlob: !0 === n.widget.is_verified_first_party ? (e, t) => {
                                    h(t);
                                    let {
                                        blob: r,
                                        name: n
                                    } = er.object({
                                        blob: er.instanceof(Blob),
                                        name: er.string()
                                    }).parse(e);
                                    (0, eo.a)(r, n)
                                } : void 0,
                                triggerHaptic: (e, t) => {
                                    h(t);
                                    let {
                                        type: r
                                    } = er.object({
                                        type: er.enum(["light", "medium", "heavy", "selection", "success", "warning", "error"])
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
                                    h();
                                    let {
                                        title: r,
                                        body: n,
                                        level: a
                                    } = er.object({
                                        title: er.string(),
                                        body: er.string().optional(),
                                        level: er.enum(["warning", "success", "danger"])
                                    }).parse(t);
                                    e.get(C.f)[a](r, {
                                        description: n?.trim() || void 0,
                                        errorAnalytics: {
                                            toastId: "ecosystem.widget.error"
                                        }
                                    })
                                } : void 0,
                                files: null != m && null != f ? (i = {
                                    appUri: n.request.appUri,
                                    accountId: m,
                                    userId: f,
                                    assertActive: h
                                }, d = t => {
                                    if (t.throwIfAborted(), i.assertActive?.(), e.get(y.f) !== i.accountId || e.get(y.k) !== i.userId) throw Error("The widget account has changed")
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
                                        let n = er.instanceof(File).parse(e),
                                            a = er.object({
                                                library: er.boolean().optional()
                                            }).optional().parse(t),
                                            o = new FormData;
                                        o.append("app_uri", i.appUri), o.append("file", new File([await n.arrayBuffer()], n.name.trim() || "apps-sdk-upload", {
                                            type: n.type || "application/octet-stream",
                                            lastModified: n.lastModified
                                        })), a?.library && o.append("store_in_library", "true"), d(r);
                                        let s = await ef.Request.safePost("/ecosystem/upload_widget_file", {
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
                                        let r = await ef.Request.safePost("/ecosystem/file_download_url", {
                                            ...u,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: eT.parse(e).fileId
                                            },
                                            signal: t
                                        });
                                        return d(t), {
                                            downloadUrl: r.download_url
                                        }
                                    },
                                    async getFileMetadata(e, t) {
                                        d(t);
                                        let r = await ef.Request.safePost("/ecosystem/file_metadata", {
                                            ...u,
                                            requestBody: {
                                                app_uri: i.appUri,
                                                file_id: eT.parse(e).fileId
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
                                        let n = e.get($.f);
                                        if (!(n?.checkGate("224248639", {
                                                disableExposureLog: !0
                                            }) || n?.getLayer("3017902351", {
                                                disableExposureLog: !0
                                            }).get("web_file_library_enabled", !1)) || e.get(es.p).data?.fileLibraryEnabledForRegistrationCountry === !1) throw Error("selectFiles API is unavailable in this environment.");
                                        let {
                                            selectWidgetLibraryFiles: a
                                        } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(668336)]).then(r.bind(r, "NWPZ"));
                                        d(t);
                                        let o = await a(e, t);
                                        if (d(t), 0 === o.length) return [];
                                        let s = await Promise.all(o.map(async e => {
                                            d(t);
                                            let r = null == (0, eA.a)(e.id) ? e : await (0, eq.f)({
                                                file_id: e.id,
                                                file_name: e.file_name,
                                                mime_type: e.mime_type
                                            }, {
                                                expectedIdentity: u.expectedIdentity,
                                                signal: t
                                            });
                                            return {
                                                fileId: `sediment://${(0,eb.d)(r.file_id)??r.file_id}`,
                                                fileName: r.file_name,
                                                mimeType: r.mime_type ?? null
                                            }
                                        }));
                                        return d(t), await ef.Request.safePost("/ecosystem/file_authorize_app", {
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
                                    h(t), await navigator.share(er.object({
                                        title: er.string().optional(),
                                        text: er.string().optional(),
                                        url: er.string().optional(),
                                        files: er.array(er.instanceof(File)).optional()
                                    }).parse(e))
                                } : void 0,
                                requestConnectSheet: null == g ? void 0 : async (r, n) => {
                                    h(n);
                                    let a = await (0, en.requestMcpConnectSheet)(e, {
                                        connectorId: g,
                                        hostId: t,
                                        payload: r,
                                        signal: n,
                                        beforeConnect: async () => (h(n), !0)
                                    });
                                    return h(n), a
                                },
                                requestLinkToConnector: async (r, n) => {
                                    h(n);
                                    let a = await (0, en.requestMcpConnectSheet)(e, {
                                        connectorId: er.object({
                                            connectorId: er.string().min(1)
                                        }).parse(r).connectorId,
                                        hostId: t,
                                        payload: void 0,
                                        signal: n,
                                        beforeConnect: async () => (h(n), !0)
                                    });
                                    return h(n), a
                                }
                            }
                        }(tM, te, t, async (e, n) => {
                            let a = tM.get(F.x, t.request.chatGptThreadId);
                            if ("tpp" !== a && "flora" !== a) return !1;
                            let i = await async function() {
                                return (await r.e(174104).then(r.bind(r, "WfnZ"))).openWidgetSource
                            }();
                            return n.throwIfAborted(), i(tM, {
                                recipient: ty,
                                WidgetContent: eW,
                                conversationId: e6,
                                hostId: te,
                                result: t,
                                mcpAppId: ti,
                                href: e,
                                signal: n
                            })
                        }, "tpp" === o || "flora" === o),
                        openFile: tG && !tI && null != t.request.sourceMessageId ? (e, n) => (async function(e, t, n, a) {
                            let {
                                chatGptThreadId: i,
                                sourceMessageId: o
                            } = t.request;
                            if (!o) throw (0, z.a)("File opening requires a source message", B.q.MethodNotFound);
                            let s = e.get(F.j, i);
                            if ("current" !== t.access.status(e.get)) throw (0, z.a)("File opening is unavailable for this widget", B.q.MethodNotFound);
                            let {
                                accountId: l,
                                uiUserId: c
                            } = t.access, d = e => "current" !== t.access.status(e.get) || e.get(H.j) || !e.get(Z, i) || e.get(y.f) !== l || e.get(y.k) !== c || e.get(F.j, i) !== s, u = () => {
                                if (a.throwIfAborted(), null == s || d(e)) throw (0, z.a)("File opening is unavailable for this widget", B.q.MethodNotFound)
                            };
                            if (u(), !n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n.includes("\0")) throw (0, z.a)("Cannot open this file path", B.q.InvalidParams);
                            let p = e.get(F.R, i),
                                g = (0, V.a)(e, i, {
                                    type: "sandbox",
                                    messageId: o,
                                    sandboxPath: n
                                }),
                                {
                                    canOpenChatGptFilePreview: h,
                                    openChatGptFile: m
                                } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575)]).then(r.bind(r, "f2PP"));
                            if (u(), !h({
                                    browserPreview: !0
                                })) throw (0, z.a)("File previews are unavailable in this host", B.q.MethodNotFound);
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
                                throw u(), (0, z.a)("Unable to open file", B.q.InternalError)
                            }
                            u()
                        })(tM, t, e, n) : null,
                        presentation: {
                            isSidebarOpen: null != tY,
                            requestFocusedObject: !0 !== t.widget.is_verified_first_party || tI || null != t.mcpAppHostAdapter.displayMode ? void 0 : async (e, r) => {
                                let {
                                    openEcosystemWidgetFocusedObject: n
                                } = await eK();
                                r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), n(tM, {
                                    recipient: ty,
                                    WidgetContent: eW,
                                    WidgetDialog: eD,
                                    id: tQ,
                                    conversationId: e6,
                                    hostId: te,
                                    result: t,
                                    payload: e,
                                    signal: r
                                })
                            },
                            requestCloseFocusedObject: !0 === t.widget.is_verified_first_party ? async e => {
                                if (e.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), null != t.mcpAppHostAdapter.displayMode && "fullscreen" !== t.mcpAppHostAdapter.displayMode) return void await t.mcpAppHostAdapter.onRequestClose?.();
                                let {
                                    closeEcosystemWidgetFocusedObject: r
                                } = await eK();
                                e.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), r(tM, tQ)
                            } : void 0
                        },
                        requestModal: async (e, r) => {
                            let {
                                requestEcosystemWidgetModal: n
                            } = await eF();
                            r.throwIfAborted(), t.mcpAppHostAdapter.assertActive?.(), await n(tM, {
                                recipient: ty,
                                WidgetDialog: eD,
                                conversationId: e6,
                                hostId: te,
                                result: t,
                                payload: e,
                                signal: r
                            })
                        },
                        finance: tJ === x.a ? (0, E.a)(tM, tO, `${tH}${tL}${tD}`, tI || null != tB && "inline" !== tB ? void 0 : t) : void 0,
                        ...null != t6 && {
                            handleRequest: f.b,
                            requestReconnectConnector: i.isVerifiedFirstParty ? t6 : void 0
                        }
                    }
                }
            }, e2[74] = tO, e2[75] = tG, e2[76] = tJ, e2[77] = e6, e2[78] = to, e2[79] = tB, e2[80] = tY, e2[81] = tQ, e2[82] = tD, e2[83] = th, e2[84] = te, e2[85] = tI, e2[86] = tU, e2[87] = ti, e2[88] = tH, e2[89] = tj, e2[90] = ty, e2[91] = t6, e2[92] = tM, e2[93] = tL, e2[94] = eO) : eO = e2[94];
            let t7 = eO;
            e2[95] !== to || e2[96] !== ts || e2[97] !== tP || e2[98] !== tM.query ? (eH = async () => {
                if (null == tP) throw Error("Cannot refetch without a resource query");
                to.access.assertActive();
                let e = await tM.query.fetch(w.a, tP);
                return to.access.assertActive(), (0, D.a)({
                    ...to,
                    ...e
                }, ts)
            }, e2[95] = to, e2[96] = ts, e2[97] = tP, e2[98] = tM.query, e2[99] = eH) : eH = e2[99];
            let t4 = eH,
                t9 = null == tP ? void 0 : t4;
            e2[100] !== e6 || e2[101] !== te || e2[102] !== e8 || e2[103] !== ty || e2[104] !== tN.request.chatGptThreadId || e2[105] !== tM ? (eU = () => null != e8 ? e8 : ty?.value.kind === "chatgpt" ? {
                kind: "chatgpt",
                conversationOrigin: ty.get(F.x, ty.value.conversationId)
            } : null != tN.request.chatGptThreadId || e6.startsWith("chatgpt:") || (0, W.e)(e6) ? {
                kind: "chatgpt",
                conversationOrigin: "work" === tM.get(v.b) ? "tpp" : null
            } : {
                kind: "app-server",
                hostId: te
            }, e2[100] = e6, e2[101] = te, e2[102] = e8, e2[103] = ty, e2[104] = tN.request.chatGptThreadId, e2[105] = tM, e2[106] = eU) : eU = e2[106];
            let re = eU;
            if (t5 && null == t6) return null;
            let rt = tI && "isolate";
            e2[107] !== rt ? (eG = (0, i.b)("relative h-full min-h-0", rt), e2[107] = rt, e2[108] = eG) : eG = e2[108], e2[109] !== tE || e2[110] !== t0 ? (e$ = tE ? (0, n.jsx)(q.d, {
                className: "sr-only",
                children: t0
            }) : null, e2[109] = tE, e2[110] = t0, e2[111] = e$) : e$ = e2[111], e2[112] !== ti ? (eQ = (0, n.jsx)(N.a, {
                isInlineRequested: !0,
                mcpAppId: ti
            }), e2[112] = ti, e2[113] = eQ) : eQ = e2[113], e2[114] !== tq ? (eY = tq ? {
                source: "global"
            } : {}, e2[114] = tq, e2[115] = eY) : eY = e2[115], e2[116] !== tN.analyticsContext || e2[117] !== eY ? (eV = {
                ...tN.analyticsContext,
                ...eY
            }, e2[116] = tN.analyticsContext, e2[117] = eY, e2[118] = eV) : eV = e2[118];
            let rr = t5 ? "component" : tn,
                rn = !0 === tN.widget.is_verified_first_party,
                ra = tj ? null : tN.request.template;
            e2[119] !== tZ || e2[120] !== tj || e2[121] !== tN.mcpAppHostAdapter.connectorTarget?.targetId || e2[122] !== tN.request.toolName ? (eZ = !tj && "connectorId" in tZ ? {
                connectorId: tZ.connectorId,
                linkId: tN.mcpAppHostAdapter.connectorTarget?.targetId ?? null,
                resourceUri: null,
                appName: null,
                actionName: tN.request.toolName
            } : void 0, e2[119] = tZ, e2[120] = tj, e2[121] = tN.mcpAppHostAdapter.connectorTarget?.targetId, e2[122] = tN.request.toolName, e2[123] = eZ) : eZ = e2[123], e2[124] !== tN.request.toolName || e2[125] !== rn || e2[126] !== ra || e2[127] !== eZ ? (eJ = {
                widgetSource: "hosted",
                isVerifiedFirstParty: rn,
                originResourceUri: ra,
                originTool: tN.request.toolName,
                appContext: eZ
            }, e2[124] = tN.request.toolName, e2[125] = rn, e2[126] = ra, e2[127] = eZ, e2[128] = eJ) : eJ = e2[128];
            let ri = tJ === x.a ? tO ?? void 0 : void 0,
                ro = tI ? eB : tv;
            e2[129] !== e6 || e2[130] !== e7 || e2[131] !== tA || e2[132] !== re || e2[133] !== t7 || e2[134] !== tq || e2[135] !== tC || e2[136] !== te || e2[137] !== tT || e2[138] !== tb || e2[139] !== tx || e2[140] !== e4 || e2[141] !== ti || e2[142] !== tX || e2[143] !== e9 || e2[144] !== ty || e2[145] !== t9 || e2[146] !== tF.appIcon || e2[147] !== tz || e2[148] !== tN.access || e2[149] !== tN.mcpAppHostAdapter || e2[150] !== tN.preferredModelDisplayMode || e2[151] !== tN.request.toolInput || e2[152] !== tN.request.viewParams || e2[153] !== tN.toolResult || e2[154] !== tN.widgetStatePersistence || e2[155] !== eV || e2[156] !== rr || e2[157] !== eJ || e2[158] !== ri || e2[159] !== ro || e2[160] !== t0 || e2[161] !== t2 ? (eX = (0, n.jsx)(N.c, {
                analyticsContext: eV,
                getNewThreadDestination: re,
                resource: tz,
                legacyPreferredDisplayMode: tN.preferredModelDisplayMode,
                hostDisplayModes: tC,
                recipient: ty,
                conversationId: e6,
                deepLink: e7,
                pluginId: e9,
                fullSurface: tA,
                hostScroll: tT,
                inheritHostBackground: tx,
                hostId: te,
                hostedInThreadScrollLayout: tb,
                lifetime: rr,
                access: tN.access,
                mcpAppId: ti,
                initialWidgetState: e4,
                widgetStatePersistence: tN.widgetStatePersistence,
                sourceName: tX,
                getResourceHost: t7,
                refetchResource: t9,
                mcpAppScope: eJ,
                mcpServerStatuses: void 0,
                mcpAppHostAdapter: tN.mcpAppHostAdapter,
                plaidAccountId: ri,
                Frame: ro,
                server: "codex_apps",
                appIcon: tF.appIcon,
                sidePanelTitle: t0,
                title: t0,
                globalSurface: tq,
                toolArguments: tN.request.toolInput,
                toolResult: tN.toolResult,
                ...t2,
                viewParamsOverride: tN.request.viewParams
            }), e2[129] = e6, e2[130] = e7, e2[131] = tA, e2[132] = re, e2[133] = t7, e2[134] = tq, e2[135] = tC, e2[136] = te, e2[137] = tT, e2[138] = tb, e2[139] = tx, e2[140] = e4, e2[141] = ti, e2[142] = tX, e2[143] = e9, e2[144] = ty, e2[145] = t9, e2[146] = tF.appIcon, e2[147] = tz, e2[148] = tN.access, e2[149] = tN.mcpAppHostAdapter, e2[150] = tN.preferredModelDisplayMode, e2[151] = tN.request.toolInput, e2[152] = tN.request.viewParams, e2[153] = tN.toolResult, e2[154] = tN.widgetStatePersistence, e2[155] = eV, e2[156] = rr, e2[157] = eJ, e2[158] = ri, e2[159] = ro, e2[160] = t0, e2[161] = t2, e2[162] = eX) : eX = e2[162], e2[163] !== t$ || e2[164] !== tA || e2[165] !== ti || e2[166] !== tK || e2[167] !== tM || e2[168] !== tk || e2[169] !== t0 ? (e0 = !tA && tk ? (0, n.jsx)("div", {
                className: "flex items-center",
                children: "launcher" !== tK || t$.isOpen ? (0, n.jsx)(M.a, {
                    disabled: !1,
                    mcpAppId: ti
                }) : (0, n.jsx)(A.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: () => (0, R.w)(tM, ti),
                    children: (0, n.jsx)(d.a, {
                        id: "chatgpt.widget.open",
                        defaultMessage: "Open {name}",
                        description: "Reopen a closed embedded app",
                        values: {
                            name: t0
                        }
                    })
                })
            }) : null, e2[163] = t$, e2[164] = tA, e2[165] = ti, e2[166] = tK, e2[167] = tM, e2[168] = tk, e2[169] = t0, e2[170] = e0) : e0 = e2[170];
            let rs = void 0 !== t_ && t_ || !0 === tN.widget.disable_loading_state;
            return e2[171] !== tA || e2[172] !== tC || e2[173] !== tT || e2[174] !== ti || e2[175] !== tX || e2[176] !== tK || e2[177] !== tz || e2[178] !== tS || e2[179] !== rs ? (e1 = (0, n.jsx)(P.b, {
                showLoadingStatus: tS,
                disableInlineLoadingState: rs,
                hostDisplayModes: tC,
                resource: tz,
                fullSurface: tA,
                hostScroll: tT,
                mcpAppId: ti,
                pluginName: tX,
                presentation: tK
            }), e2[171] = tA, e2[172] = tC, e2[173] = tT, e2[174] = ti, e2[175] = tX, e2[176] = tK, e2[177] = tz, e2[178] = tS, e2[179] = rs, e2[180] = e1) : e1 = e2[180], e2[181] !== eG || e2[182] !== e$ || e2[183] !== eQ || e2[184] !== eX || e2[185] !== e0 || e2[186] !== e1 ? (e3 = (0, n.jsxs)(j.a, {
                className: eG,
                children: [e$, eQ, eX, e0, e1]
            }), e2[181] = eG, e2[182] = e$, e2[183] = eQ, e2[184] = eX, e2[185] = e0, e2[186] = e1, e2[187] = e3) : e3 = e2[187], e3
        }
        async function eF() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(117976)]).then(r.bind(r, "IQhm"))
        }

        function eB(e) {
            let t, r = (0, a.c)(2),
                {
                    sessionId: i
                } = e;
            return r[0] !== i ? (t = (0, n.jsx)(S.a, {
                allowGlobalHost: !1,
                sessionId: i
            }), r[0] = i, r[1] = t) : t = r[1], t
        }
        let ez = (0, u.f)({
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
        async function eK() {
            return Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(579403)]).then(r.bind(r, "Ia2H"))
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
            l = r("taUf"),
            c = r("nlNF"),
            d = r("OWtl"),
            u = r("Mwld"),
            p = r("lBzi"),
            g = r("dQRk"),
            h = r("hx97"),
            m = r("SfL3"),
            f = r("mKTJ");
        let _ = (0, n.u)(d.a, () => null),
            w = (0, n.d)(d.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return !1;
                let {
                    conversationId: n,
                    messageId: i
                } = e, o = r(g.L, n);
                return null != o && function(e, t) {
                    let r = (0, a.a)(e),
                        n = r.findIndex(e => (0, a.g)(e) === t);
                    if (n < 0) return !0;
                    let i = e => (0, h.k)(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
                        o = r.findLast(i),
                        s = r.slice(0, n + 1).findLast(i);
                    if (o === s && r.findLast(h.k)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
                    let l = (0, u.a)(r).get(t);
                    return null != l ? !l : null != o && null != s && o !== s
                }({
                    mapping: o,
                    current_node: r(g.B, n)
                }, i)
            });

        function y(e) {
            let t = e.metadata.attribution_id;
            return "internal://plugin-management-suggestions" === e.metadata.html_asset_pointer && "openai" === e.metadata.distribution_channel && t === i.a && e.metadata.resolved_pineapple_uri === `connectors://${t}` && !0 !== e.toolResult.isError
        }
        r.d(t, {}, {
            a: _,
            b: y,
            c: w,
            recordPluginSuggestionInstallation: async function(e, t) {
                let r = e.get(c.c)?.key,
                    n = () => e.get(o.a) === t.accountId && e.get(s.k) === t.userId;
                if (!n()) return !1;
                if (null == e.get(g.L, t.conversationId)) try {
                    await e.query.fetch(p.chatGptConversationQueryById$, t.conversationId)
                } catch {
                    return !1
                }
                if (!n() || null != e.get(g.Z, t.conversationId)) return !1;
                let a = e.get(g.L, t.conversationId),
                    i = a?.[t.messageId]?.message,
                    d = null == i ? null : (0, f.d)(i, void 0);
                if (null == a || null == d || !y(d)) return !1;
                let u = l.e.safeParse(d.toolResult.structuredContent).data?.suggestions.find(e => e.plugin_id === t.pluginId),
                    h = (0, m.c)(e, t.conversationId, t.messageId, d.metadata),
                    I = l.d.safeParse(h?.getState(e) ?? {});
                if (null == u || null == h || !I.success) return !1;
                if (I.data.connectedPluginIds?.includes(t.pluginId)) return !0;
                let v = {
                        ...I.data,
                        connectedPluginIds: [...I.data.connectedPluginIds ?? [], t.pluginId]
                    },
                    b = await h.save(v, !0, {
                        optimistic: !1
                    });
                if (!n() || !b.ok || h.getState(e) !== v) return !1;
                let A = e.get(c.c);
                return null != A && A.key === r && (0, p.z)(e, t.conversationId) && !e.get(w, {
                    conversationId: t.conversationId,
                    messageId: t.messageId
                }) && e.set(_, {
                    ...t,
                    pluginName: u.display_name,
                    locationKey: A.key
                }), !0
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
                    _ = () => ({
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
                            if ("tools/call" === e.method) return _();
                            throw new s.a(f(), 403, l.a)
                        }
                        return (p(u), "tools/call" === e.method && !0 === t.isError && t._meta?.["openai/tool_error_kind"] === l.a) ? _() : t
                    }, y = await w(d);
                if (null != r.olympic || "tools/call" !== d.method || "string" != typeof d.params?.name) return y;
                let I = c.safeParse(y);
                if (!I.success || !("connectorId" in n.serverIdentity)) return y;
                let v = I.data._meta["openai/connector_auth"],
                    b = r.connectorTarget;
                if (null == b || b.connectorId !== n.serverIdentity.connectorId) return y;
                let A = d.params.name.startsWith("/") ? d.params.name.split("/").filter(Boolean) : [d.params.name],
                    q = A.at(-1),
                    T = d.params._meta,
                    C = b.targetId ?? T?.["openai/link_id"] ?? (3 === A.length ? A[1] : void 0);
                if (null == q || 0 === q.length || A.length > 3 || v.connector_id !== b.connectorId || T?.["openai/connector_id"] != null && T["openai/connector_id"] !== v.connector_id || T?.["openai/action_name"] != null && T["openai/action_name"] !== q || null != C && C !== v.link_id) return y;
                try {
                    m = await (0, a.requestMcpConnectSheet)(e, {
                        connectorId: v.connector_id,
                        hostId: t,
                        signal: u,
                        payload: {
                            requireAuth: !0,
                            reauthLinkId: v.link_id ?? void 0,
                            authReason: v.auth_reason ?? "missing_link",
                            requestedScopes: v.requested_scopes ?? void 0
                        },
                        beforeConnect: async () => (p(u), !0)
                    })
                } catch {
                    return p(u), y
                }
                return (p(u), m.didConnect && m.linkId && (null == v.link_id || m.linkId === v.link_id)) ? w({
                    ...d,
                    params: {
                        ...d.params,
                        name: q,
                        _meta: {
                            ...d.params._meta,
                            "openai/connector_id": v.connector_id,
                            "openai/action_name": q,
                            "openai/link_id": m.linkId
                        }
                    }
                }) : y
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
    gg0W: (function(e, t, r) {
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
    XroQ: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("zd8w"),
            o = r("Wf1j"),
            s = r("oyxz"),
            l = r("ygO2"),
            c = r("FrrB"),
            d = r("FZiz");
        r.d(t, {}, {
            a: function(e) {
                let t, r, u, p, g = (0, a.c)(18),
                    {
                        actions: h,
                        description: m,
                        illustration: f,
                        title: _,
                        isLoading: w,
                        onRetry: y
                    } = e,
                    [I, v] = (0, i.useState)(!1),
                    b = (0, o.a)();
                g[0] !== b || g[1] !== w || g[2] !== _ ? (t = w ? b.formatMessage({
                    id: "codex.mcpTool.mcpAppLoading",
                    defaultMessage: "Loading app",
                    description: "Accessible label for the MCP app loading placeholder"
                }) : _ ?? b.formatMessage({
                    id: "openaiMcpCapabilities.unavailable.title",
                    defaultMessage: "App unavailable",
                    description: "Title shown when an MCP app view could not be loaded"
                }), g[0] = b, g[1] = w, g[2] = _, g[3] = t) : t = g[3];
                let A = t;
                g[4] !== I ? (r = I ? (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.retryFailed",
                    defaultMessage: "The app is still unavailable after retrying",
                    description: "Message shown when the single retry did not make an MCP app view available; no further retry is offered"
                }) : (0, n.jsx)(s.a, {
                    id: "openaiMcpCapabilities.unavailable.description",
                    defaultMessage: "Try again to load the app",
                    description: "Recovery guidance when an MCP app view is missing; the underlying cause is unknown"
                }), g[4] = I, g[5] = r) : r = g[5];
                let q = r;
                return g[6] !== h || g[7] !== m || g[8] !== q || g[9] !== I || g[10] !== f || g[11] !== w || g[12] !== y || g[13] !== A ? (u = w ? (0, n.jsxs)(n.Fragment, {
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
                        description: void 0 === m ? q : m,
                        actions: h ?? (!I && (0, n.jsx)(l.a, {
                            color: "secondary",
                            onClick: () => {
                                v(!0), y()
                            },
                            children: (0, n.jsx)(s.a, {
                                id: "openaiMcpCapabilities.unavailable.retry",
                                defaultMessage: "Retry",
                                description: "Button that retries discovering an MCP app view once"
                            })
                        }))
                    })
                }), g[6] = h, g[7] = m, g[8] = q, g[9] = I, g[10] = f, g[11] = w, g[12] = y, g[13] = A, g[14] = u) : u = g[14], g[15] !== A || g[16] !== u ? (p = (0, n.jsx)("div", {
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
            a = r("doi1"),
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