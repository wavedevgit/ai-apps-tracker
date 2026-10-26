export const __rspack_esm_id = 762474;
export const __rspack_esm_ids = [762474];
export const __webpack_modules__ = {
    pI8I: (function(e, t, n) {
        n.d(t, {
            a: () => B,
            b: () => w.b,
            c: () => G,
            d: () => U
        });
        var s = n("o0PZ"),
            a = n("Wc42"),
            i = n("ASxG"),
            r = n("qx55"),
            o = n("OiCI"),
            l = n("Cslg"),
            c = n("Kwur"),
            d = n("w5lF"),
            u = n("cqPu"),
            p = n("cDR4"),
            m = n("MX3C"),
            h = n("eShZ"),
            _ = n("Mwpn"),
            g = n("KdgD"),
            f = n("NQCo"),
            b = n("OOaz"),
            v = n("MrGp"),
            y = n("T8YV"),
            x = n("rxj0"),
            w = n("KhaL");
        let T = {
            $type: "protobuf_analytics_events.v1.ChatgptEcosystemWidgetLifecycle"
        };
        var I = n("D015"),
            C = n("yGJW");
        let E = i.object({
                request_id: d.j,
                x_oai_request_id: d.j,
                error_code: d.i,
                error_http_status_code: i.number().int().min(100).max(599).optional().catch(void 0),
                status: i.enum(["success", "error"]).optional().catch(void 0)
            }),
            j = i.enum(["bootstrap_unexpected_error", "bootstrap_status", "file_authorization", "launch_widget", "widget_render"]).optional().catch(void 0),
            k = i.enum(["unknown_error", "ready", "auto_install_required", "connect_required", "auth_required", "blocked", "not_found", "missing_tool_response", "tool_error", "missing_widget_html"]).catch("unknown_error");
        var N = n("kSHG"),
            A = n("P93s");
        let S = i.object({
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
        async function O(e, t) {
            let n, s = (0, w.b)(e),
                a = s.connectorTarget;
            if (null == a || null != a.targetId || !["CODEX", "TPP"].includes(e.productSku?.toUpperCase() ?? "")) return null;
            let i = [],
                r = new Set;
            for (let e = 0; e < 32; e++) {
                let t = P.parse(await s.handleRequest({
                    method: "tools/list",
                    params: null == n ? {} : {
                        cursor: n
                    }
                }));
                for (let e of t.tools) {
                    let t = S.safeParse(e).data,
                        n = t?._meta._codex_apps.resource_uri.split("/");
                    if (null == t || n?.length !== 4 || "" !== n[0] || n[1] !== a.connectorId || !n[2] || !n[3] || n[2].startsWith("synthetic_link::")) continue;
                    let s = t._meta._codex_apps.requires_explicit_link_id ? t._meta.link_accounts?.map(e => e.link_id) ?? [] : [n[2]];
                    i.push({
                        tool: t,
                        actionName: n[3],
                        links: s
                    })
                }
                if (null == (n = t.nextCursor)) break;
                if (r.has(n) || 31 === e) throw M();
                r.add(n)
            }
            let o = i.filter(e => {
                let {
                    tool: n,
                    actionName: s
                } = e;
                return s === t || n.name === t
            });
            if (1 !== o.length || 0 === o[0].links.length) throw M();
            let l = o[0].links[0];
            if (l.includes("/") || l.startsWith("synthetic_link::")) throw M();
            let c = new Map;
            for (let {
                    tool: e,
                    actionName: t,
                    links: n
                }
                of i) {
                let s = e._meta.ui?.visibility ?? e._meta["ui/visibility"];
                if (n.includes(l) && (null == s || (Array.isArray(s) ? s.includes("app") : "app" === s))) {
                    if (c.has(t)) throw M();
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
                actionName: o[0].actionName,
                toolDescriptors: c
            }
        }

        function M() {
            return (0, A.a)("The widget connection is unavailable. Reopen the app to retry.", N.q.InvalidRequest)
        }
        var R = n("aLav");
        let q = i.object({
                entityId: i.string().min(1),
                entityType: i.enum(["product", "place", "spotlight", "account"]),
                entrypointLabel: i.string().min(1),
                entrypointType: i.enum(["button", "widget"]),
                intentType: i.enum(["checkout", "reservation", "service", "onboarding", "account_detail"]),
                surface: i.enum(["search_results", "image_generation", "new_thread_home", "mattress_accounts_tab"])
            }),
            D = i.object({
                appUri: i.string().min(1),
                logging: q,
                mode: i.enum(["fullscreen", "modal"]),
                template: i.string().min(1),
                toolInput: i.record(i.string(), i.json()),
                toolName: i.string().min(1),
                viewParams: i.record(i.string(), i.json()).nullable().optional()
            });
        class B extends Error {
            connectorId;
            authType;
            reauthLinkId;
            constructor(e, t, n, s) {
                super(n || "Connect this app before opening it"), this.connectorId = e, this.authType = t, this.reauthLinkId = s
            }
        }
        async function G(e) {
            let t, n, s, a, i, r, o, l, {
                    scope: c,
                    hostId: u,
                    chatGptConversationId: p,
                    threadId: m,
                    productSku: _,
                    payload: g,
                    sourceMessageId: f,
                    prepareToolInput: y,
                    onTracking: x,
                    accountId: w,
                    signal: N
                } = e,
                A = {
                    ...D.parse(g),
                    chatGptThreadId: null == p ? null : (0, b.d)(p),
                    threadId: m,
                    productSku: _,
                    sourceMessageId: f
                };
            N?.throwIfAborted();
            let S = (t = {
                launchAttemptId: crypto.randomUUID(),
                sourceMessageId: A.sourceMessageId,
                surface: A.logging.surface,
                intentType: A.logging.intentType,
                entityType: A.logging.entityType
            }, n = {
                entrypointType: A.logging.entrypointType
            }, s = null, a = 0, i = !1, r = !1, o = null, (l = (e, n) => {
                (0, C.a)(c, T, {
                    ...t,
                    ...n,
                    actionType: e,
                    conversationId: c.get(v.j, A.chatGptThreadId) ?? void 0
                })
            })("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED", n), {
                startSession() {
                    a = Date.now();
                    let e = crypto.randomUUID();
                    s = {
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
                    null != s && l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED", {
                        ...s = {
                            ...s,
                            widgetSessionId: a ?? s.widgetSessionId,
                            widgetInstanceId: i ?? s.widgetInstanceId
                        },
                        ...n,
                        messageId: t ?? void 0
                    })
                },
                renderReady() {
                    null == s || i || r || (i = !0, o = null, l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY", s))
                },
                error(e) {
                    let {
                        reason: t = "unknown_error",
                        error: a,
                        toolMetadata: i
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r || o === e) return;
                    o = e;
                    let c = E.safeParse(i).data,
                        u = a instanceof h.a ? a.diagnosticError : a,
                        p = u instanceof d.c ? u : void 0;
                    l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR", {
                        ...n,
                        failurePoint: j.parse(e),
                        errorReason: k.parse(t),
                        requestId: c?.request_id ?? d.j.parse(p?.requestId),
                        xOaiRequestId: c?.x_oai_request_id,
                        errorCode: c?.error_code ?? d.i.parse(p?.code),
                        errorHttpStatusCode: (0, I.a)(c?.error_http_status_code ?? p?.status ?? (a instanceof h.a ? a.responseStatus : void 0)),
                        toolStatus: c?.status,
                        ...s
                    })
                },
                close(e) {
                    null == s || r || (r = !0, l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED", {
                        ...s,
                        closeReason: e,
                        timeInWidgetMs: Math.max(0, Date.now() - a)
                    }))
                }
            });
            x?.(S);
            let P = await U({
                scope: c,
                hostId: u,
                request: A,
                mode: A.mode,
                sourceMessageId: f,
                prepareToolInput: y,
                tracking: S,
                accountId: w,
                signal: N
            });
            return {
                ...P,
                tracking: S,
                request: {
                    ...A,
                    mode: "fullscreen" === P.widget.preferred_display_mode && P.widget.available_display_modes?.includes("fullscreen") !== !1 ? "fullscreen" : A.mode,
                    productSku: P.request.productSku,
                    appUri: P.request.appUri,
                    toolInput: D.shape.toolInput.parse(P.request.toolInput)
                }
            }
        }
        async function U(e) {
            let {
                scope: t,
                analyticsContext: n,
                hostId: d,
                request: h,
                mode: _,
                sourceMessageId: b,
                accountId: T,
                accountSource: I,
                signal: C,
                prepareToolInput: E,
                tracking: j
            } = e;
            C?.throwIfAborted();
            let k = t.get(l.j);
            return (0, u.j)({
                operation: "Hosted app launch",
                starting: "Launching hosted app"
            }, {
                safe: {
                    chatGptThreadId: h.chatGptThreadId
                },
                sensitive: {
                    hostId: d,
                    appUri: h.appUri,
                    template: h.template
                }
            }, async e => {
                let u, N = t.get(l.i),
                    A = t.get(l.e),
                    S = "apps" === I ? o.a : l.e,
                    P = t.get(S);
                if (null != T && T !== P) throw Error("MCP app account changed before opening");
                let M = () => {
                        if (C?.throwIfAborted(), null != h.chatGptThreadId && t.get(x.d, h.chatGptThreadId)) throw new DOMException("MCP app blocked by conversation Lockdown", "AbortError");
                        if (P !== t.get(S) || A !== t.get(l.e) || k !== t.get(l.j) || N !== t.get(l.i)) throw Error("MCP app account changed while opening")
                    },
                    q = h.productSku ?? ("tpp" === t.get(v.x, h.chatGptThreadId) ? "tpp" : void 0),
                    D = "bootstrap_unexpected_error",
                    G = "unknown_error";
                try {
                    M();
                    let o = null == P && null == q ? void 0 : {
                            ...null == P ? {} : {
                                "ChatGPT-Account-ID": P,
                                [s.Zb]: P
                            },
                            ...null == q ? {} : {
                                "OAI-Product-Sku": q
                            }
                        },
                        l = await (0, f.a)(t, h.chatGptThreadId, C);
                    M();
                    let v = h.linkId,
                        x = (0, g.a)(null, h.appUri);
                    void 0 === v && null != x && null != P && null != k && (v = t.get(m.c, {
                        accountId: P,
                        userId: k,
                        appId: x.connectorId
                    }) ?? void 0);
                    let T = {
                            additionalHeaders: o,
                            expectedIdentity: null == P || null == N ? void 0 : {
                                accountId: P,
                                userId: N
                            },
                            assertRequestCurrent: M,
                            signal: C
                        },
                        A = {
                            app_uri: h.appUri,
                            link_id: v,
                            conversation_id: l,
                            launcher_host: "chatgpt",
                            template_pointer: h.template,
                            tool_input: h.toolInput,
                            tool_name: h.toolName
                        },
                        S = await c.Request.safePost("/ecosystem/launcher/bootstrap", {
                            ...T,
                            requestBody: A
                        });
                    if (M(), null != E && "auto_install_required" === S.status) throw new B(S.connector_id, "NONE");
                    let U = "auto_install_required" === S.status ? await c.Request.safePost("/ecosystem/launcher/auto_install", {
                        ...T,
                        requestBody: A
                    }) : S;
                    M();
                    let F = U.reason?.trim();
                    switch ("ready" !== U.status && "connect_required" !== U.status && (D = "bootstrap_status", G = U.status), U.status) {
                        case "ready":
                            break;
                        case "connect_required":
                            throw new B(U.connector_id, "oauth" === U.preferred_auth_type ? "OAUTH" : void 0, F);
                        case "auth_required":
                            if ("apps" === I && "selected_link_auth_required" === F && null != v) throw new B(U.connector_id, "OAUTH", F, v);
                            throw Error(F || "Sign in to ChatGPT before opening this app");
                        case "blocked":
                            throw Error(F || "This app is blocked from opening.");
                        case "not_found":
                            throw Error(F || "This app is no longer available.")
                    }
                    let W = (0, a.a)(U.normalized_app_uri) ?? h.appUri;
                    M(), D = "file_authorization", e("Preparing app tool input");
                    let Y = null == E ? h.toolInput : await E(W);
                    M();
                    let z = q ?? (0, R.a)(W);
                    D = "launch_widget", j?.startSession(), M();
                    let Q = await O({
                        scope: t,
                        attribution: n,
                        appUri: W,
                        accountId: P ?? void 0,
                        accountSource: I,
                        signal: C,
                        threadId: h.threadId,
                        productSku: q,
                        chatGptConversationId: h.chatGptThreadId,
                        messageId: b ?? null,
                        originMetadata: {
                            attribution_id: U.connector_id,
                            link_id: v
                        }
                    }, h.toolName);
                    M(), v = v ?? Q?.target.targetId;
                    let V = {
                            ...h,
                            appUri: W,
                            toolInput: Y,
                            linkId: v,
                            productSku: q,
                            mode: _
                        },
                        K = null == Q ? void 0 : {
                            hostId: d,
                            accountId: P ?? void 0,
                            accountSource: I,
                            appUri: W,
                            template: h.template,
                            connectorId: Q.target.connectorId,
                            targetId: Q.target.targetId,
                            actionName: Q.actionName,
                            productSku: z
                        },
                        Z = null == K ? null : H(t, K, C);
                    e("Requesting app launch");
                    let J = c.Request.safePost("/ecosystem/launch_widget", {
                            isExpectedError: L,
                            ...T,
                            requestBody: {
                                app_uri: W,
                                link_id: v,
                                conversation_id: l,
                                launcher_host: "chatgpt",
                                mode: _,
                                template: h.template,
                                tool_input: Y,
                                tool_name: Q?.actionName ?? h.toolName,
                                view_params: h.viewParams ?? null
                            }
                        }),
                        X = (Z ?? c.Request.safeGet("/ecosystem/widget", {
                            isExpectedError: y.d,
                            ...T,
                            additionalHeaders: {
                                ...o,
                                ...null == z ? {} : {
                                    "OAI-Product-Sku": z
                                }
                            },
                            parameters: {
                                query: {
                                    launcher_host: "chatgpt",
                                    connector_id: null == v ? void 0 : U.connector_id,
                                    action_name: null == v ? void 0 : h.toolName,
                                    link_id: v,
                                    template_pointer: h.template,
                                    uri: W
                                }
                            }
                        }).then(e => ({
                            widget: e,
                            resourceKey: void 0
                        }))).then(e => ({
                            resource: e
                        }), e => ({
                            error: e
                        })),
                        $ = await J;
                    M();
                    let ee = $.tool_response_metadata ?? i.record(i.string(), i.unknown()).safeParse($.widget?.chatgpt_sdk?.tool_response_metadata).data;
                    if (ee?.status === "error" && ee.error_code === y.a) throw (0, y.c)();
                    let et = $.tool_response;
                    if (null == et) throw G = "missing_tool_response", Error($.missing_widget_reason ?? "The app did not return a widget tool result.");
                    let en = i.object({
                        launcher_fallback: i.literal(!0),
                        status: i.enum(["connect_required", "auth_required", "blocked", "not_found"]),
                        connector_id: i.string().nullish(),
                        preferred_auth_type: i.literal("oauth").nullish()
                    }).safeParse(et.structuredContent);
                    if (en.success) {
                        if ("connect_required" === en.data.status) throw new B(en.data.connector_id, "oauth" === en.data.preferred_auth_type ? "OAUTH" : void 0);
                        throw G = en.data.status, Error("The app is no longer available to launch")
                    }
                    let es = $.widget?.chatgpt_sdk,
                        ea = {
                            ...es,
                            ...$.tool_response_metadata
                        },
                        ei = (0, g.a)(ea, W);
                    if (null != Q && ei?.targetId != null && (ei.connectorId !== Q.target.connectorId || ei.targetId !== Q.target.targetId)) throw Error("The widget connection is unavailable. Reopen the app to retry.");
                    let er = $.tool_response_metadata ?? i.record(i.string(), i.unknown()).safeParse(es?.tool_response_metadata).data ?? et._meta,
                        eo = i.object({
                            connector_id: i.string(),
                            link_id: i.string()
                        }).safeParse(er?.["openai/connector_auth"]).data;
                    if (et.isError && null != eo) throw new B(eo.connector_id, "OAUTH");
                    if (u = er, !0 === et.isError || er?.status === "error") throw G = "tool_error", Error((0, a.a)(er?.reason) ?? "The app tool call failed.");
                    let el = await X;
                    if (M(), "error" in el) throw el.error;
                    let {
                        widget: ec,
                        resourceKey: ed
                    } = el.resource;
                    if (0 === ec.html.trim().length) throw G = "missing_widget_html", Error("The app did not return widget HTML.");
                    let eu = p.c.parse((0, p.d)({
                            ...et,
                            ...null == er ? {} : {
                                _meta: er
                            }
                        }, {
                            preserveStructuredContentNull: !0
                        })),
                        ep = (0, a.a)(es?.resolved_pineapple_uri) ?? W,
                        em = $.widget?.tool_message_id ?? b ?? null,
                        eh = (0, w.b)({
                            scope: t,
                            attribution: n,
                            appUri: ep,
                            accountId: P ?? void 0,
                            accountSource: I,
                            signal: C,
                            threadId: h.threadId,
                            productSku: q,
                            chatGptConversationId: h.chatGptThreadId,
                            messageId: em,
                            originMetadata: {
                                ...ea,
                                link_id: v ?? ea.link_id,
                                ...null == Q ? {} : {
                                    attribution_id: Q.target.connectorId,
                                    link_id: Q.target.targetId
                                }
                            },
                            toolDescriptors: Q?.toolDescriptors
                        }),
                        e_ = {
                            hostId: d,
                            server: "codex_apps",
                            threadId: h.threadId ?? null,
                            connectorTarget: eh.connectorTarget,
                            accountSource: I
                        },
                        eg = t.get(r.b, e_);
                    if (null == eg) throw Error("MCP app account changed while opening");
                    return C?.throwIfAborted(), j?.opened({
                        messageId: em,
                        widgetSessionId: (0, a.a)(es?.widget_session_id),
                        widgetInstanceId: $.widget?.tool_message_id ?? crypto.randomUUID()
                    }), {
                        analyticsContext: n,
                        distributionChannel: i.enum(["only_me", "openai", "external"]).catch("external").parse(es?.distribution_channel),
                        suggestionMessageId: (0, a.a)(es?.suggestion_message_id) ?? void 0,
                        redirectDomains: i.object({
                            redirect_domains: i.array(i.string()).optional()
                        }).safeParse(es?.csp).data?.redirect_domains,
                        attributionId: (0, a.a)(es?.attribution_id) ?? void 0,
                        widgetSessionId: (0, a.a)(es?.widget_session_id) ?? void 0,
                        resourceIdentity: {
                            context: e_,
                            identity: eg
                        },
                        resourceQuery: K,
                        resourceKey: ed,
                        mcpAppHostAdapter: eh,
                        request: V,
                        toolResult: eu,
                        widget: ec
                    }
                } catch (t) {
                    if (L(t)) throw M(), (0, y.c)();
                    throw e("Hosted app launch stopped", {
                        safe: {
                            failurePoint: D,
                            failureReason: G
                        }
                    }), C?.aborted || t instanceof Error && "AbortError" === t.name || t instanceof B || j?.error(D, {
                        reason: G,
                        error: t,
                        toolMetadata: u
                    }), t
                }
            }, {
                signal: C
            })
        }
        async function H(e, t, n) {
            let a = e.query.getOptions(_.a, t),
                i = e.queryClient.fetchQuery(a),
                r = () => {},
                o = new Promise(t => {
                    let n = () => {
                        let n = e.queryClient.getQueryData(a.queryKey);
                        void 0 !== n && t(n)
                    };
                    r = e.queryClient.getQueryCache().subscribe(n), n()
                });
            try {
                let e = Promise.race([i, o]);
                return await (null == n ? e : (0, s.ef)(e, n))
            } finally {
                r()
            }
        }

        function L(e) {
            if ((0, y.d)(e)) return !0;
            if (!(e instanceof h.a || e instanceof d.c) || 403 !== e.status) return !1;
            let t = i.object({
                tool_response_metadata: i.object({
                    status: i.literal("error"),
                    error_code: i.literal(y.a)
                })
            });
            if (e instanceof d.c) return t.safeParse(e.json).success;
            try {
                return t.safeParse(JSON.parse(e.message)).success
            } catch {
                return !1
            }
        }
    }),
    xof2: (function(e, t, n) {
        var s = n("EA6X"),
            a = n("D015"),
            i = n("yGJW"),
            r = n("odvE"),
            o = n("Kwur"),
            l = n("MrGp"),
            c = n("hx97");

        function d(e, t) {
            try {
                let n = {
                    ...t,
                    conversationId: null == t.conversationId ? void 0 : e.get(l.j, t.conversationId) ?? void 0,
                    turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                };
                _(n), (0, i.a)(e, s.c, n)
            } catch {}
        }

        function u(e, t, n) {
            if (null == t || null == n) return;
            let s = 0,
                i = !1;
            for (let o of e.get(r.a, t) ?? [])
                if ((0, c.g)(o) && (i = !1), "assistant" !== o.author.role || i || (s += 1, i = !0), o.id === n) return s > 0 ? (0, a.a)(s) : void 0
        }

        function p(e, t) {
            let n = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == n ? void 0 : {
                    entity_id: n.entityId,
                    entity_category: n.entityCategory,
                    widget_type: n.widgetType,
                    widget_name: n.widgetName,
                    content_reference_start_index: n.contentReferenceStartIndex,
                    message_id: n.messageId
                }
            }
        }

        function m(e, t) {
            null != e.actionType && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: e.conversationId,
                            message_id: e.messageId
                        },
                        widget_action: {
                            ...p(e, e.actionType),
                            widget_type: e.widgetType,
                            widget_name: e.widgetName,
                            widget_affordance: e.widgetAffordance,
                            widget_action_target: e.widgetActionTarget,
                            widget_action_value: e.widgetActionValue,
                            feedback_reasons: e.feedbackReasons,
                            effect: t
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function h(e, t) {
            m(t), (0, i.a)(e, s.j, t)
        }

        function _(e) {
            null != e.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== e.actionType && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: e.conversationId,
                            message_id: e.messageId
                        },
                        entity_action: {
                            ...p(e, e.actionType),
                            entity_id: e.entityId,
                            entity_category: e.entityCategory,
                            entity_affordance: e.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function g(e, t) {
            _(t), (0, i.a)(e, s.c, t)
        }

        function f(e, t) {
            null != t.actionType && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "image_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        image_action: {
                            ...p(t, t.actionType),
                            image_affordance: t.imageAffordance,
                            image_index: t.imageIndex,
                            url: t.url,
                            content_url: t.contentUrl,
                            original_content_url: t.originalContentUrl,
                            tags: t.tags
                        }
                    }
                }
            }).catch(() => void 0), (0, i.a)(e, s.e, t)
        }

        function b(e, t) {
            v(t), (0, i.a)(e, s.g, t)
        }

        function v(e) {
            null != e.actionType && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: e.conversationId,
                            message_id: e.messageId
                        },
                        link_action: {
                            ...p(e, e.actionType),
                            link_type: e.linkType,
                            link_affordance: e.linkAffordance,
                            url: e.url,
                            link_index: e.linkIndex,
                            citation_numbers: e.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        n.d(t, {
            a: () => u,
            b: () => d,
            c: () => f,
            d: () => b,
            e: () => g,
            f: () => h,
            g: () => v,
            h: () => m
        })
    }),
    T2J5: (function(e, t, n) {
        n.d(t, {
            a: () => d
        });
        var s = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("oyxz"),
            o = n("HOLv"),
            l = n("CqQF"),
            c = n("zhEO");

        function d(e) {
            let t, n, d, u, p, m = (0, a.c)(11),
                {
                    className: h,
                    label: _,
                    showTooltip: g
                } = e,
                f = g && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            m[0] !== h || m[1] !== f ? (t = (0, i.b)("-mt-0.75 inline-flex align-middle", f, h), m[0] = h, m[1] = f, m[2] = t) : t = m[2];
            let b = g ? 0 : void 0;
            m[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, s.jsx)(o.a, {
                className: "icon-niuo6X",
                asset: c.a
            }), m[3] = n) : n = m[3], m[4] !== _ || m[5] !== t || m[6] !== b ? (d = (0, s.jsx)("span", {
                className: t,
                "aria-label": _,
                role: "img",
                tabIndex: b,
                children: n
            }), m[4] = _, m[5] = t, m[6] = b, m[7] = d) : d = m[7];
            let v = d;
            return g ? (m[8] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, s.jsxs)("div", {
                className: "tooltip-BWNZME",
                children: [(0, s.jsx)("div", {
                    className: "body-i5CZgD",
                    children: (0, s.jsx)(r.a, {
                        id: "businessProfiles.claimedBadge.tooltip",
                        defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative.",
                        description: "Tooltip on the blue claimed-business badge beside a business name. It explains that OpenAI verified who manages the business profile, not the quality of the business."
                    })
                }), (0, s.jsx)("span", {
                    className: "caret-kAbdty",
                    "aria-hidden": "true"
                })]
            }), m[8] = u) : u = m[8], m[9] !== v ? (p = (0, s.jsx)(l.a, {
                disablePadding: !0,
                side: "top",
                sideOffset: 0,
                tooltipMaxWidth: "min(215px, calc(100vw - 16px))",
                variant: "unstyled",
                tooltipContent: u,
                children: v
            }), m[9] = v, m[10] = p) : p = m[10], p) : v
        }
    }),
    Csob: (function(e, t, n) {
        n.d(t, {
            a: () => V,
            b: () => $,
            ChatGptLocalBusinessMetadata: () => W,
            c: () => F,
            d: () => K,
            e: () => es
        });
        var s = n("ABep"),
            a = n("QosV"),
            i = n("LKEn"),
            r = n("EA6X"),
            o = n("on57"),
            l = n("iTtm"),
            c = n("zd8w"),
            d = n("Wf1j"),
            u = n("oyxz"),
            p = n("ASxG"),
            m = n("Cslg"),
            h = n("HOLv"),
            _ = n("bf6R"),
            g = n("Bbed"),
            f = n("Fm9E"),
            b = n("zSQm"),
            v = n("WAdu"),
            y = n("hZax"),
            x = n("OMIV"),
            w = n("a6Zv"),
            T = n("KDax"),
            I = n("TUMj"),
            C = n("T2J5"),
            E = n("TJEh"),
            j = n("PUeQ"),
            k = n("Hzz5");

        function N(e) {
            let t, n, i, r, l, p = (0, a.c)(19),
                {
                    business: m,
                    claimPreview: g
                } = e,
                f = void 0 !== g && g,
                b = (0, d.a)(),
                v = (0, c.useId)(),
                [y, x] = (0, c.useState)(!1),
                w = !!m.hours?.length,
                T = null != m.is_open || m.is_closed_permanently;
            if (!w && !T) return null;
            p[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(h.a, {
                asset: k.a,
                className: "shrink-0"
            }), p[0] = t) : t = p[0], p[1] !== m || p[2] !== T ? (n = (0, s.jsxs)(s.Fragment, {
                children: [t, (0, s.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: T ? (0, s.jsx)(j.a, {
                        business: m,
                        showHourDetail: !0
                    }) : (0, s.jsx)(u.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours",
                        description: "Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule."
                    })
                })]
            }), p[1] = m, p[2] = T, p[3] = n) : n = p[3];
            let I = n;
            return p[4] !== f || p[5] !== y || p[6] !== w || p[7] !== v || p[8] !== I ? (i = w ? (0, s.jsxs)("button", {
                type: "button",
                "aria-controls": v,
                "aria-expanded": y,
                className: (0, o.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", f ? "py-2.5" : "py-2"),
                onClick: () => x(!y),
                children: [I, (0, s.jsx)(_._b, {
                    className: (0, o.b)("text-secondary", y && "rotate-180")
                })]
            }) : (0, s.jsx)("div", {
                className: (0, o.b)("flex min-h-11 items-center gap-4", f ? "py-2.5" : "py-2"),
                children: I
            }), p[4] = f, p[5] = y, p[6] = w, p[7] = v, p[8] = I, p[9] = i) : i = p[9], p[10] !== m.hours || p[11] !== y || p[12] !== w || p[13] !== b || p[14] !== v ? (r = w && (0, s.jsx)("dl", {
                id: v,
                hidden: !y,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let t = m.hours?.filter(t => t.day === e).sort(A);
                    return (0, s.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, s.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: b.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, s.jsx)("dd", {
                            children: t?.length ? t.map((e, t) => (0, s.jsx)("div", {
                                children: (0, s.jsx)(u.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    description: "One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.",
                                    values: {
                                        start: S(b, e.start),
                                        end: S(b, e.end)
                                    }
                                })
                            }, t)) : (0, s.jsx)(u.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed",
                                description: "Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown."
                            })
                        })]
                    }, e)
                })
            }), p[10] = m.hours, p[11] = y, p[12] = w, p[13] = b, p[14] = v, p[15] = r) : r = p[15], p[16] !== i || p[17] !== r ? (l = (0, s.jsxs)("div", {
                children: [i, r]
            }), p[16] = i, p[17] = r, p[18] = l) : l = p[18], l
        }

        function A(e, t) {
            return e.start.localeCompare(t.start)
        }

        function S(e, t) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var P = n("ynn3"),
            O = n("CMB3"),
            M = n("NtvA"),
            R = n("WNKy"),
            q = n("WSVP"),
            D = n("HVLy");
        let B = (0, g.a)(i.a),
            G = (0, g.a)(i.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: t
                    } = e;
                    return t(!1, null)
                }
            }),
            U = (0, g.a)(async () => {
                let {
                    parsePhoneNumberFromString: e
                } = await Promise.all([n.e(963703), n.e(87307)]).then(n.bind(n, "cggm"));
                return function(t) {
                    let {
                        phone: n,
                        href: a,
                        readOnly: i,
                        claimPreview: r = !1
                    } = t, o = e(n, "US")?.formatNational();
                    return null == o ? null : (0, s.jsx)(es, {
                        icon: (0, s.jsx)(h.a, {
                            asset: R.a
                        }),
                        claimPreview: r,
                        children: (0, s.jsx)(T.a, {
                            className: "cursor-interaction hover:underline",
                            href: a,
                            initiator: "markdown_link_click",
                            openTarget: i ? "external-browser" : void 0,
                            children: o
                        })
                    })
                }
            }),
            H = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            },
            L = p.object({
                layout: p.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: p.object({
                    map_url: p.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function F(e) {
            let t, n, i, r = (0, a.c)(12),
                {
                    reference: o,
                    actions: l,
                    claimActions: c
                } = e;
            r[0] !== o ? (t = (0, E.c)(o), r[0] = o, r[1] = t) : t = r[1];
            let d = t;
            r[2] !== o ? (n = L.safeParse(o), r[2] = o, r[3] = n) : n = r[3];
            let u = n;
            if (null == d) {
                let e;
                return r[4] !== l ? (e = null == l ? null : (0, s.jsx)(s.Fragment, {
                    children: l
                }), r[4] = l, r[5] = e) : e = r[5], e
            }
            let p = u.success ? u.data.metadata?.map_url : null,
                m = (u.success ? u.data.layout : null) ?? "sidebar";
            return r[6] !== l || r[7] !== d || r[8] !== c || r[9] !== p || r[10] !== m ? (i = (0, s.jsx)(W, {
                actions: l,
                business: d,
                directionsUrl: p,
                layout: m,
                renderActions: !1,
                claimActions: c
            }), r[6] = l, r[7] = d, r[8] = c, r[9] = p, r[10] = m, r[11] = i) : i = r[11], i
        }

        function W(e) {
            let t, n = (0, a.c)(16);
            if ((0, l.x)(x.c, "2789236610") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let t, a, i, r, o;
                return n[0] !== e ? (t = (0, s.jsx)(z, {
                    ...e
                }), n[0] = e, n[1] = t) : t = n[1], n[2] !== e ? (a = (t, n) => (0, s.jsx)(z, {
                    ...e,
                    verified: t,
                    claimAction: n
                }), n[2] = e, n[3] = a) : a = n[3], n[4] !== e.business || n[5] !== e.onAction ? (i = t => (0, s.jsx)(z, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: t,
                    readOnly: !0
                }), n[4] = e.business, n[5] = e.onAction, n[6] = i) : i = n[6], n[7] !== e.business || n[8] !== a || n[9] !== i ? (r = (0, s.jsx)(G, {
                    business: e.business,
                    renderMetadata: a,
                    renderClaimButton: Y,
                    businessPreview: i
                }), n[7] = e.business, n[8] = a, n[9] = i, n[10] = r) : r = n[10], n[11] !== t || n[12] !== r ? (o = (0, s.jsx)(c.Suspense, {
                    fallback: t,
                    children: r
                }), n[11] = t, n[12] = r, n[13] = o) : o = n[13], o
            }
            return n[14] !== e ? (t = (0, s.jsx)(z, {
                ...e
            }), n[14] = e, n[15] = t) : t = n[15], t
        }

        function Y(e, t) {
            return (0, s.jsx)(V, {
                onClick: e,
                request: t
            })
        }

        function z(e) {
            let t, n, i, l, u, p, m, h, _, g, f, y = (0, a.c)(64),
                {
                    actions: x,
                    business: w,
                    directionsUrl: T,
                    isOptimistic: k,
                    layout: A,
                    onAction: S,
                    claimActions: P,
                    renderActions: O,
                    readOnly: M,
                    fullWidth: R,
                    showTitle: q,
                    verified: D,
                    claimAction: G,
                    showClaimedBusinessTooltip: H
                } = e,
                L = void 0 !== k && k,
                F = void 0 === A ? "sidebar" : A,
                Y = void 0 === O || O,
                z = void 0 !== M && M,
                Z = void 0 === q || q,
                J = void 0 !== D && D,
                X = void 0 !== H && H,
                [ee, et] = (0, c.useState)(!1),
                [en, es] = (0, c.useState)(!1),
                ea = (0, I.d)(),
                ei = (0, c.useContext)(v.a),
                er = (0, d.a)();
            y[0] !== w.phone ? (t = w.phone?.trim() ? (0, b.a)(`tel:${w.phone.trim()}`) : null, y[0] = w.phone, y[1] = t) : t = y[1];
            let eo = t;
            y[2] !== w.address ? (n = w.address?.trim(), y[2] = w.address, y[3] = n) : n = y[3];
            let el = n,
                ec = "claim-preview" === F,
                ed = "sidebar" === F || ec;
            y[4] !== el || y[5] !== w.name ? (i = [w.name, el].filter(Boolean), y[4] = el, y[5] = w.name, y[6] = i) : i = y[6];
            let eu = i.join(", "),
                ep = ec ? "pt-4" : "mb-4",
                em = !(void 0 !== R && R) && "max-w-md";
            y[7] !== ep || y[8] !== em ? (l = (0, o.b)("not-prose text-base text-default", ep, em), y[7] = ep, y[8] = em, y[9] = l) : l = y[9];
            let eh = L ? "status" : void 0,
                e_ = ec ? "ps-5 pe-6 pb-4" : void 0;
            y[10] !== w.name || y[11] !== en || y[12] !== ec || y[13] !== er || y[14] !== ed || y[15] !== z || y[16] !== X || y[17] !== Z || y[18] !== ea?.imageEngagementContext?.surfaceLocation || y[19] !== J ? (u = ed && Z ? (0, s.jsxs)("h2", {
                className: (0, o.b)("text-card-title leading-7 font-medium break-words", !ec && "mb-1"),
                children: [w.name, (J || en) && (0, s.jsx)(C.a, {
                    className: "ms-2",
                    showTooltip: !z && ed && (X || ea?.imageEngagementContext?.surfaceLocation === r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: er.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business",
                        description: "Accessible label for the blue badge beside a business name after ownership approval"
                    })
                })]
            }) : null, y[10] = w.name, y[11] = en, y[12] = ec, y[13] = er, y[14] = ed, y[15] = z, y[16] = X, y[17] = Z, y[18] = ea?.imageEngagementContext?.surfaceLocation, y[19] = J, y[20] = u) : u = y[20];
            let eg = !z;
            return y[21] !== w || y[22] !== ed || y[23] !== eg ? (p = (0, s.jsx)(K, {
                business: w,
                showPrice: ed,
                linkRating: eg,
                wrap: ed
            }), y[21] = w, y[22] = ed, y[23] = eg, y[24] = p) : p = y[24], y[25] !== e_ || y[26] !== u || y[27] !== p ? (m = (0, s.jsxs)("div", {
                className: e_,
                children: [u, p]
            }), y[25] = e_, y[26] = u, y[27] = p, y[28] = m) : m = y[28], y[29] !== w || y[30] !== ec || y[31] !== T || y[32] !== F || y[33] !== S || y[34] !== z || y[35] !== Y ? (h = Y && "one-line" !== F ? (0, s.jsx)("div", {
                className: ec ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, s.jsx)($, {
                    allowQuoteAction: !z,
                    business: w,
                    directionsUrl: T,
                    onAction: S,
                    openTarget: z ? "external-browser" : void 0
                })
            }) : null, y[29] = w, y[30] = ec, y[31] = T, y[32] = F, y[33] = S, y[34] = z, y[35] = Y, y[36] = h) : h = y[36], y[37] !== w || y[38] !== G || y[39] !== P || y[40] !== en || y[41] !== ec || y[42] !== T || y[43] !== L || y[44] !== ed || y[45] !== z || y[46] !== eo ? (_ = ed ? (0, s.jsxs)("div", {
                className: (0, o.b)("divide-y divide-border", ec ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, s.jsx)(N, {
                    business: w,
                    claimPreview: ec
                }), (0, s.jsx)(Q, {
                    business: w,
                    directionsUrl: T,
                    readOnly: z,
                    claimPreview: ec
                }), null != eo && null != w.phone ? (0, s.jsx)(U, {
                    phone: w.phone,
                    href: eo,
                    readOnly: z,
                    claimPreview: ec
                }) : null, G, L || z || en || null == P ? null : (0, s.jsx)(V, {
                    onClick: () => et(!0)
                })]
            }) : null, y[37] = w, y[38] = G, y[39] = P, y[40] = en, y[41] = ec, y[42] = T, y[43] = L, y[44] = ed, y[45] = z, y[46] = eo, y[47] = _) : _ = y[47], y[48] !== w || y[49] !== P || y[50] !== ee || y[51] !== ei || y[52] !== S || y[53] !== ea ? (g = ee && null != P && (0, s.jsx)(B, {
                business: {
                    ...w,
                    photoUrl: "restricted" === ei || ea?.shouldBlockExternalEgress ? void 0 : (0, E.f)(w, ea?.conversationType === "sidebar" ? ea.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, s.jsx)(W, {
                    business: w,
                    onAction: S,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                businessHours: (0, s.jsx)(j.a, {
                    business: w,
                    showHourDetail: !0
                }),
                actions: {
                    ...P,
                    onCheckDomain: P.onCheckDomain ? async () => {
                        let e = await P.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && es(!0), e
                    } : void 0,
                    onCheckClaim: P.onCheckClaim ? async () => {
                        let e = await P.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && es(!0), e
                    } : void 0,
                    onManageProfile: P.onManageProfile ? () => {
                        et(!1), P.onManageProfile?.()
                    } : void 0,
                    onEditHours: P.onEditHours ? () => {
                        et(!1), P.onEditHours?.()
                    } : void 0,
                    onEditDescription: P.onEditDescription ? () => {
                        et(!1), P.onEditDescription?.()
                    } : void 0
                },
                onClose: () => et(!1)
            }), y[48] = w, y[49] = P, y[50] = ee, y[51] = ei, y[52] = S, y[53] = ea, y[54] = g) : g = y[54], y[55] !== x || y[56] !== eu || y[57] !== l || y[58] !== eh || y[59] !== m || y[60] !== h || y[61] !== _ || y[62] !== g ? (f = (0, s.jsxs)("section", {
                "aria-label": eu,
                className: l,
                role: eh,
                children: [m, x, h, _, g]
            }), y[55] = x, y[56] = eu, y[57] = l, y[58] = eh, y[59] = m, y[60] = h, y[61] = _, y[62] = g, y[63] = f) : f = y[63], f
        }

        function Q(e) {
            let t, n, i, r, o, l = (0, a.c)(14),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u,
                    claimPreview: p
                } = e,
                m = void 0 !== u && u,
                _ = void 0 !== p && p;
            l[0] !== c.address ? (t = c.address?.trim(), l[0] = c.address, l[1] = t) : t = l[1];
            let g = t;
            if (!g) return null;
            l[2] !== c || l[3] !== d ? (n = (0, b.a)(d ?? (0, E.e)(c) ?? "") || null, l[2] = c, l[3] = d, l[4] = n) : n = l[4];
            let f = n,
                v = !m || _;
            return l[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, s.jsx)(h.a, {
                asset: M.a
            }), l[5] = i) : i = l[5], l[6] !== g || l[7] !== m || l[8] !== f ? (r = null == f ? g : (0, s.jsx)(T.a, {
                className: "cursor-interaction hover:underline",
                href: f,
                initiator: "markdown_link_click",
                openTarget: m ? "external-browser" : void 0,
                children: g
            }), l[6] = g, l[7] = m, l[8] = f, l[9] = r) : r = l[9], l[10] !== _ || l[11] !== v || l[12] !== r ? (o = (0, s.jsx)(es, {
                truncate: v,
                icon: i,
                claimPreview: _,
                children: r
            }), l[10] = _, l[11] = v, l[12] = r, l[13] = o) : o = l[13], o
        }

        function V(e) {
            let t, n, i, r, l, c = (0, a.c)(19),
                {
                    onClick: d,
                    request: p
                } = e;
            if (p?.status === "under_review") {
                let e, t, n;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(h.a, {
                    className: "text-tertiary",
                    asset: D.a
                }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(es, {
                    icon: e,
                    children: (0, s.jsx)("span", {
                        className: "text-secondary",
                        children: (0, s.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review",
                            description: "Status action beneath a business's contact details, shown to the person whose ownership claim is awaiting review. Opens the existing claim so they can check its status or withdraw it. Keep this label short; it does not mean ownership is approved."
                        })
                    })
                }), c[1] = t) : t = c[1], c[2] !== d ? (n = (0, s.jsx)("button", {
                    type: "button",
                    onClick: d,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), c[2] = d, c[3] = n) : n = c[3], n
            }
            let m = p && "in_progress" !== p.status ? "text-default" : "text-business-claim";
            c[4] !== m ? (t = (0, o.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", m), c[4] = m, c[5] = t) : t = c[5];
            let g = p?.status === "needs_information",
                f = null != p && "needs_information" !== p.status;
            c[6] !== g || c[7] !== f ? (n = (0, o.b)({
                "text-warning": g,
                "text-tertiary": f
            }), c[6] = g, c[7] = f, c[8] = n) : n = c[8];
            let b = p?.status === "needs_information" ? O.a : D.a;
            return c[9] !== n || c[10] !== b ? (i = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, s.jsx)(h.a, {
                    className: n,
                    asset: b
                })
            }), c[9] = n, c[10] = b, c[11] = i) : i = c[11], c[12] !== p ? (r = p ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, s.jsx)("span", {
                        className: "block",
                        children: (0, s.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            description: "Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.",
                            values: {
                                status: p.status
                            }
                        })
                    }), (0, s.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, s.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            description: "Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.",
                            values: {
                                status: p.status
                            }
                        })
                    })]
                }), (0, s.jsx)(_.ec, {})]
            }) : (0, s.jsx)(u.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this profile",
                description: "Action below the phone number in the business sidebar that starts ownership verification"
            }), c[12] = p, c[13] = r) : r = c[13], c[14] !== d || c[15] !== t || c[16] !== i || c[17] !== r ? (l = (0, s.jsxs)("button", {
                className: t,
                type: "button",
                onClick: d,
                children: [i, r]
            }), c[14] = d, c[15] = t, c[16] = i, c[17] = r, c[18] = l) : l = c[18], l
        }

        function K(e) {
            let t, n, i, r, l, c, d, u, p = (0, a.c)(23),
                {
                    business: m,
                    showPrice: h,
                    linkRating: _,
                    shouldBlockExternalEgress: g,
                    wrap: f
                } = e,
                b = void 0 !== h && h,
                v = void 0 === _ || _,
                y = void 0 !== g && g,
                x = void 0 !== f && f;
            p[0] !== m.categories ? (t = m.categories?.find(X), p[0] = m.categories, p[1] = t) : t = p[1];
            let w = t;
            p[2] !== m || p[3] !== v || p[4] !== y ? (n = null == m.rating && null == H[m.provider ?? ""] ? null : (0, s.jsx)(en, {
                business: m,
                linkRating: v,
                shouldBlockExternalEgress: y
            }, "rating"), p[2] = m, p[3] = v, p[4] = y, p[5] = n) : n = p[5], p[6] !== w ? (i = w ? (0, s.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, p[6] = w, p[7] = i) : i = p[7], p[8] !== m.price_str || p[9] !== b ? (r = b && m.price_str ? (0, s.jsx)("span", {
                children: m.price_str
            }, "price") : null, p[8] = m.price_str, p[9] = b, p[10] = r) : r = p[10], p[11] !== n || p[12] !== i || p[13] !== r ? (l = [n, i, r].filter(J), p[11] = n, p[12] = i, p[13] = r, p[14] = l) : l = p[14];
            let T = l,
                I = x ? "text-base" : "text-sm",
                C = x ? "flex-wrap" : "flex-nowrap";
            return p[15] !== I || p[16] !== C ? (c = (0, o.b)("flex min-w-0 items-center leading-5 font-normal text-default", I, C), p[15] = I, p[16] = C, p[17] = c) : c = p[17], p[18] !== T ? (d = T.map(Z), p[18] = T, p[19] = d) : d = p[19], p[20] !== c || p[21] !== d ? (u = (0, s.jsx)("span", {
                className: c,
                children: d
            }), p[20] = c, p[21] = d, p[22] = u) : u = p[22], u
        }

        function Z(e, t) {
            return (0, s.jsxs)(c.Fragment, {
                children: [0 === t ? null : (0, s.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function J(e) {
            return null != e
        }

        function X(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function $(e) {
            let t, n, i, d, p, h, _, g, w, C, j, k, N, A, S, O, M, R, q, D, B, G = (0, a.c)(68),
                {
                    allowQuoteAction: U,
                    analyticsMessageId: H,
                    business: L,
                    directionsUrl: F,
                    onAction: W,
                    onQuoteInteractionOpenChange: Y,
                    openTarget: z,
                    presentation: Q,
                    primaryActionsOnly: V,
                    reservationAction: K
                } = e,
                Z = void 0 === U || U,
                J = void 0 === Q ? "sidebar" : Q,
                X = void 0 !== V && V,
                $ = (0, l.z)(m.e),
                en = (0, I.d)(),
                es = (0, c.useContext)(v.a);
            G[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, f.b)(), G[0] = t) : t = G[0];
            let ea = (0, y.h)(t),
                ei = (0, l.x)(x.c, "2673474834");
            G[1] !== L || G[2] !== J || G[3] !== ei ? (n = (0, b.a)(ei && "sidebar" === J ? (0, E.g)(L) ?? "" : "") || null, G[1] = L, G[2] = J, G[3] = ei, G[4] = n) : n = G[4];
            let er = n;
            G[5] !== L || G[6] !== F ? (i = (0, b.a)(F ?? (0, E.e)(L) ?? "") || null, G[5] = L, G[6] = F, G[7] = i) : i = G[7];
            let eo = i;
            G[8] !== L.website_url ? (d = (0, b.a)(L.website_url?.trim() ?? "") || null, G[8] = L.website_url, G[9] = d) : d = G[9];
            let el = d;
            G[10] !== L.phone ? (p = L.phone?.trim() ? (0, b.a)(`tel:${L.phone.trim()}`) : null, G[10] = L.phone, G[11] = p) : p = G[11];
            let ec = p;
            G[12] !== L.service_providers ? (h = (0, E.h)(L.service_providers), G[12] = L.service_providers, G[13] = h) : h = G[13];
            let ed = h;
            G[14] !== $ || G[15] !== Z || G[16] !== L.reservation_providers || G[17] !== ea || G[18] !== es || G[19] !== ed || G[20] !== er || G[21] !== en ? (_ = Z && null != $ && en?.shouldBlockExternalEgress === !1 && (en.canRequestQuote ?? !en.isReadOnly) && "restricted" !== es && ea && null == er && !L.reservation_providers?.some(et) && ed.length > 0, G[14] = $, G[15] = Z, G[16] = L.reservation_providers, G[17] = ea, G[18] = es, G[19] = ed, G[20] = er, G[21] = en, G[22] = _) : _ = G[22];
            let eu = _;
            G[23] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, s.jsx)(u.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve",
                description: "Short button label in a local restaurant sidebar that opens the reservation provider website"
            }), G[23] = g) : g = G[23], G[24] !== er ? (w = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: er,
                label: g
            }, G[24] = er, G[25] = w) : w = G[25], G[26] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, s.jsx)(u.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions",
                description: "Short button label in a local business sidebar that opens directions to the business"
            }), G[26] = C) : C = G[26], G[27] !== eo ? (j = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: eo,
                label: C
            }, G[27] = eo, G[28] = j) : j = G[28], G[29] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, s.jsx)(u.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website",
                description: "Short button label in a local business sidebar that opens the business website"
            }), G[29] = k) : k = G[29], G[30] !== el ? (N = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: el,
                label: k
            }, G[30] = el, G[31] = N) : N = G[31], G[32] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, s.jsx)(u.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call",
                description: "Short button label in a local business sidebar that calls the business phone number"
            }), G[32] = A) : A = G[32], G[33] !== ec ? (S = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: A
            }, G[33] = ec, G[34] = S) : S = G[34], G[35] !== w || G[36] !== j || G[37] !== N || G[38] !== S ? (O = [w, j, N, S].filter(ee), G[35] = w, G[36] = j, G[37] = N, G[38] = S, G[39] = O) : O = G[39], G[40] !== eu || G[41] !== X || G[42] !== K || G[43] !== O ? (M = O.slice(0, X ? 0 : 3 - Number(eu) - Number(null != K)), G[40] = eu, G[41] = X, G[42] = K, G[43] = O, G[44] = M) : M = G[44];
            let ep = M;
            if (!eu && 0 === ep.length && null == K) return null;
            G[45] !== J ? (R = e => (0, o.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === J ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), G[45] = J, G[46] = R) : R = G[46];
            let em = R;
            return G[47] !== em || G[48] !== H || G[49] !== L.id || G[50] !== eu || G[51] !== W || G[52] !== Y || G[53] !== J || G[54] !== ed || G[55] !== en ? (q = eu && (0, s.jsx)(P.a, {
                analyticsMessageId: H,
                businessId: "string" == typeof L.id ? L.id : void 0,
                ctaSurface: "hover" === J ? "map_card" : "business_sidebar",
                onAction: () => W?.(r.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: Y,
                providers: ed,
                trigger: (0, s.jsx)("button", {
                    className: em(0),
                    type: "button",
                    children: (0, s.jsx)(P.b, {})
                }),
                turnContext: en
            }), G[47] = em, G[48] = H, G[49] = L.id, G[50] = eu, G[51] = W, G[52] = Y, G[53] = J, G[54] = ed, G[55] = en, G[56] = q) : q = G[56], G[57] !== em || G[58] !== ep || G[59] !== eu || G[60] !== W || G[61] !== z || G[62] !== K ? (D = ep.map((e, t) => (0, s.jsx)(T.a, {
                className: em(t + Number(eu) + Number(null != K)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: z,
                onClick: () => W?.(e.key),
                children: e.label
            }, e.key)), G[57] = em, G[58] = ep, G[59] = eu, G[60] = W, G[61] = z, G[62] = K, G[63] = D) : D = G[63], G[64] !== K || G[65] !== q || G[66] !== D ? (B = (0, s.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [q, K, D]
            }), G[64] = K, G[65] = q, G[66] = D, G[67] = B) : B = G[67], B
        }

        function ee(e) {
            return null != e.href
        }

        function et(e) {
            return null != e.launcherPayload
        }

        function en(e) {
            let t, n, i, r, l, u = (0, a.c)(27),
                {
                    business: p,
                    linkRating: m,
                    shouldBlockExternalEgress: _
                } = e,
                g = (0, d.a)(),
                f = (0, w.a)(),
                y = (0, I.d)(),
                x = (0, c.useContext)(v.a),
                C = !_ && y?.shouldBlockExternalEgress !== !0 && "restricted" !== x;
            if (u[0] !== C || u[1] !== p.provider || u[2] !== p.provider_logo_dark_url || u[3] !== p.provider_logo_dark_url_short || u[4] !== p.provider_logo_url || u[5] !== p.provider_logo_url_short || u[6] !== p.provider_url || u[7] !== p.rating || u[8] !== g || u[9] !== f || u[10] !== m) {
                let e, a = p.provider_logo_url_short?.trim() || p.provider_logo_url?.trim(),
                    r = f && (p.provider_logo_dark_url_short?.trim() || p.provider_logo_dark_url?.trim()) || a,
                    l = C && r ? (0, b.b)(r) : null;
                u[14] !== C || u[15] !== p.provider_url || u[16] !== m ? (e = m && C && (0, b.a)(p.provider_url?.trim() ?? "") || null, u[14] = C, u[15] = p.provider_url, u[16] = m, u[17] = e) : e = u[17], t = e;
                let c = H[p.provider ?? ""] ?? p.provider ?? "";
                u[18] !== p.rating || u[19] !== g ? (n = null != p.rating ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(h.a, {
                        asset: q.a,
                        className: "size-3.5 shrink-0"
                    }), (0, s.jsx)("span", {
                        children: g.formatNumber(p.rating, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        })
                    })]
                }) : null, u[18] = p.rating, u[19] = g, u[20] = n) : n = u[20], i = l ? (0, s.jsx)("img", {
                    alt: c,
                    className: (0, o.b)("w-auto max-w-18 shrink-0 object-contain", l.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                    src: l
                }) : H[p.provider ?? ""] ?? null, u[0] = C, u[1] = p.provider, u[2] = p.provider_logo_dark_url, u[3] = p.provider_logo_dark_url_short, u[4] = p.provider_logo_url, u[5] = p.provider_logo_url_short, u[6] = p.provider_url, u[7] = p.rating, u[8] = g, u[9] = f, u[10] = m, u[11] = t, u[12] = n, u[13] = i
            } else t = u[11], n = u[12], i = u[13];
            u[21] !== n || u[22] !== i ? (r = (0, s.jsxs)(s.Fragment, {
                children: [n, i]
            }), u[21] = n, u[22] = i, u[23] = r) : r = u[23];
            let E = r;
            return u[24] !== E || u[25] !== t ? (l = null == t ? (0, s.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: E
            }) : (0, s.jsx)(T.a, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: t,
                initiator: "markdown_link_click",
                children: E
            }), u[24] = E, u[25] = t, u[26] = l) : l = u[26], l
        }

        function es(e) {
            let t, n, i, r, l, c = (0, a.c)(13),
                {
                    icon: d,
                    children: u,
                    truncate: p,
                    claimPreview: m
                } = e,
                h = void 0 !== m && m ? "py-2.5" : "py-2";
            c[0] !== h ? (t = (0, o.b)("flex min-h-11 items-center gap-4", h), c[0] = h, c[1] = t) : t = c[1], c[2] !== d ? (n = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: d
            }), c[2] = d, c[3] = n) : n = c[3];
            let _ = void 0 !== p && p && "truncate";
            return c[4] !== _ ? (i = (0, o.b)("min-w-0 flex-1 text-base font-medium select-text", _), c[4] = _, c[5] = i) : i = c[5], c[6] !== u || c[7] !== i ? (r = (0, s.jsx)("span", {
                className: i,
                children: u
            }), c[6] = u, c[7] = i, c[8] = r) : r = c[8], c[9] !== t || c[10] !== n || c[11] !== r ? (l = (0, s.jsxs)("div", {
                className: t,
                children: [n, r]
            }), c[9] = t, c[10] = n, c[11] = r, c[12] = l) : l = c[12], l
        }
    }),
    PUeQ: (function(e, t, n) {
        var s = n("ABep"),
            a = n("QosV"),
            i = n("Wf1j"),
            r = n("oyxz");

        function o(e) {
            let t, n, o, l, c = (0, a.c)(20),
                {
                    business: d,
                    showHourDetail: u
                } = e,
                p = (0, i.a)();
            if (d.is_closed_permanently) {
                let e;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)("span", {
                    className: "text-danger",
                    children: (0, s.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedPermanently",
                        defaultMessage: "Permanently closed",
                        description: "Status in a local business preview or details sidebar indicating the business has permanently closed"
                    })
                }), c[0] = e) : e = c[0], e
            }
            let m = d.is_open;
            if (null == m) return null;
            let h = d.next_open_hour;
            if (!u || null == h) {
                let e;
                return c[1] !== m ? (e = m ? (0, s.jsx)("span", {
                    className: "text-success",
                    children: (0, s.jsx)(r.a, {
                        id: "chatgpt.localBusiness.open",
                        defaultMessage: "Open",
                        description: "Status in a local business preview or details sidebar indicating the business is currently open"
                    })
                }) : (0, s.jsx)("span", {
                    className: "text-danger",
                    children: (0, s.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closed",
                        defaultMessage: "Closed",
                        description: "Status in a local business preview or details sidebar indicating the business is currently closed"
                    })
                }), c[1] = m, c[2] = e) : e = c[2], e
            }
            let _ = d.local_day ?? new Date().getDay(),
                g = null != d.local_day && m && h.end <= h.start ? (h.day + 1) % 7 : h.day,
                f = m ? h.end : h.start;
            c[3] !== p || c[4] !== f ? (t = p.formatTime(new Date(0, 0, 0, Number.parseInt(f.slice(0, 2), 10), Number.parseInt(f.slice(2, 4), 10)), {
                hour: "numeric",
                minute: "2-digit"
            }), c[3] = p, c[4] = f, c[5] = t) : t = c[5];
            let b = t;
            c[6] !== m ? (n = e => (0, s.jsx)("span", {
                className: m ? "text-success" : "text-danger",
                children: e
            }), c[6] = m, c[7] = n) : n = c[7];
            let v = n;
            if (g === _) {
                let e;
                return c[8] !== m || c[9] !== v || c[10] !== b ? (e = m ? (0, s.jsx)("span", {
                    children: (0, s.jsx)(r.a, {
                        id: "chatgpt.localBusiness.openUntilTime",
                        defaultMessage: "<status>Open</status> until {time}",
                        description: "Business status in a details sidebar when the business is currently open and closes today. The time is the locale-formatted closing time. The status tag styles Open as a positive status",
                        values: {
                            status: v,
                            time: b
                        }
                    })
                }) : (0, s.jsx)("span", {
                    children: (0, s.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedUntilTime",
                        defaultMessage: "<status>Closed</status> until {time}",
                        description: "Business status in a details sidebar when the business is currently closed and opens today. The time is the locale-formatted opening time. The status tag styles Closed as a negative status",
                        values: {
                            status: v,
                            time: b
                        }
                    })
                }), c[8] = m, c[9] = v, c[10] = b, c[11] = e) : e = c[11], e
            }
            c[12] !== p || c[13] !== g ? (o = p.formatDate(new Date(0, 0, g), {
                weekday: "short"
            }), c[12] = p, c[13] = g, c[14] = o) : o = c[14];
            let y = o;
            return c[15] !== y || c[16] !== m || c[17] !== v || c[18] !== b ? (l = m ? (0, s.jsx)("span", {
                children: (0, s.jsx)(r.a, {
                    id: "chatgpt.localBusiness.openUntilDayTime",
                    defaultMessage: "<status>Open</status> until {day} {time}",
                    description: "Business status in a details sidebar when the business is currently open and closes on a different day. The day is the locale-formatted abbreviated weekday and time is the closing time. The status tag styles Open as a positive status",
                    values: {
                        status: v,
                        day: y,
                        time: b
                    }
                })
            }) : (0, s.jsx)("span", {
                children: (0, s.jsx)(r.a, {
                    id: "chatgpt.localBusiness.closedUntilDayTime",
                    defaultMessage: "<status>Closed</status> until {day} {time}",
                    description: "Business status in a details sidebar when the business is currently closed and opens on a different day. The day is the locale-formatted abbreviated weekday and time is the opening time. The status tag styles Closed as a negative status",
                    values: {
                        status: v,
                        day: y,
                        time: b
                    }
                })
            }), c[15] = y, c[16] = m, c[17] = v, c[18] = b, c[19] = l) : l = c[19], l
        }
        n.d(t, {
            a: () => o
        })
    }),
    ynn3: (function(e, t, n) {
        n.d(t, {
            a: () => j,
            b: () => N
        });
        var s = n("ABep"),
            a = n("QosV"),
            i = n("tBe6"),
            r = n("iTtm"),
            o = n("o0PZ"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("ASxG"),
            p = n("bqtn"),
            m = n("bf6R"),
            h = n("E6P3"),
            _ = n("zSQm"),
            g = n("WAdu"),
            f = n("yGJW"),
            b = n("OWtl"),
            v = n("WFY2"),
            y = n("OMcg"),
            x = n("pI8I"),
            w = n("OOaz"),
            T = n("rVXE"),
            I = e => (0, s.jsx)("svg", {
                viewBox: "0 0 70 70",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 34.9998C0 54.3297 15.6703 70 34.9998 70C54.3297 70 70 54.3297 70 34.9998C70 15.6699 54.3297 0 34.9998 0C15.6703 0 0 15.6699 0 34.9998ZM52.1011 26.3572H17.8975V18.574H52.1011V26.3572ZM36.7476 56.998C38.3276 54.2569 39.1597 51.1478 39.1597 47.9836V29.6306C35.9878 29.6306 32.9053 30.6476 30.8403 33.5203V47.9836C30.8403 51.1478 31.6724 54.2569 33.2529 56.998L35 60.0286L36.7476 56.998Z"
                })
            });
        let C = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            E = u.string().trim().min(1).transform(_.b).catch(void 0);

        function j(e) {
            let t, n, d, u, _, v, j, N, O, M, R, q, D, B, G, U = (0, a.c)(47),
                {
                    analyticsMessageId: H,
                    businessId: L,
                    ctaSurface: F,
                    onAction: W,
                    onInteractionOpenChange: Y,
                    providers: z,
                    trigger: Q,
                    turnContext: V
                } = e,
                K = (0, r.y)(b.a),
                Z = (0, c.a)(),
                J = (0, l.useContext)(g.a);
            U[0] !== J || U[1] !== Z || U[2] !== V.shouldBlockExternalEgress ? (t = e => ({
                provider: e,
                logoUrl: !1 === V.shouldBlockExternalEgress && "restricted" !== J ? E.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || C[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || Z.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider",
                    description: "Fallback item in the local business Get Quote provider menu when no company name was supplied. Selecting it opens that provider’s quote flow."
                })
            }), U[0] = J, U[1] = Z, U[2] = V.shouldBlockExternalEgress, U[3] = t) : t = U[3], U[4] !== Z ? (n = (e, t) => e.label.localeCompare(t.label, Z.locale, {
                sensitivity: "base"
            }), U[4] = Z, U[5] = n) : n = U[5];
            let X = z.map(t).sort(n),
                $ = (0, l.useRef)(!1),
                ee = (0, l.useRef)(!1);
            U[6] !== Y ? (d = () => {
                $.current = !1, ee.current = !1, Y?.(!1)
            }, U[6] = Y, U[7] = d) : d = U[7];
            let et = (0, l.useEffectEvent)(d);
            U[8] !== et ? (u = () => () => et(), U[8] = et, U[9] = u) : u = U[9], U[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], U[10] = _) : _ = U[10], (0, l.useLayoutEffect)(u, _), U[11] === Symbol.for("react.memo_cache_sentinel") ? (v = new Set, U[11] = v) : v = U[11];
            let en = (0, l.useRef)(v),
                es = !1 !== V.trackShownImpressions,
                ea = V.browserConversationId ?? V.conversationId;
            U[12] !== H || U[13] !== ea || U[14] !== K || U[15] !== V.hostId || U[16] !== V.messageId ? (j = {
                launch: (e, t, n) => {
                    if ((0, w.e)(ea)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, x.c)({
                        scope: K,
                        hostId: V.hostId,
                        chatGptConversationId: ea,
                        payload: e,
                        sourceMessageId: H ?? V.messageId,
                        signal: t,
                        onTracking: n
                    })
                },
                onError: k
            }, U[12] = H, U[13] = ea, U[14] = K, U[15] = V.hostId, U[16] = V.messageId, U[17] = j) : j = U[17];
            let ei = (0, T.a)(j);
            U[18] !== H || U[19] !== L || U[20] !== ea || U[21] !== F || U[22] !== K || U[23] !== es || U[24] !== V.messageId ? (N = (e, t) => {
                let n = e.launcherPayload.appUri,
                    s = A(e);
                if ("show" === t) {
                    if (!es || en.current.has(s)) return;
                    en.current.add(s)
                }
                try {
                    (0, f.a)(K, i.d, {
                        action: "show" === t ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === t ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: L ?? void 0,
                        connectorId: n.startsWith("connectors://") ? n.slice(13) : n,
                        contentReferenceType: "map_card" === F ? "map" : "entity_metadata",
                        conversationId: ea,
                        ctaSurface: F,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: H ?? V.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, U[18] = H, U[19] = L, U[20] = ea, U[21] = F, U[22] = K, U[23] = es, U[24] = V.messageId, U[25] = N) : N = U[25];
            let er = N,
                eo = 1 === z.length ? z[0] : void 0;
            U[26] !== eo ? (O = null == eo ? null : A(eo), U[26] = eo, U[27] = O) : O = U[27];
            let el = O;
            U[28] !== eo || U[29] !== er ? (M = () => {
                null != eo && er(eo, "show")
            }, U[28] = eo, U[29] = er, U[30] = M) : M = U[30];
            let ec = (0, l.useEffectEvent)(M);
            U[31] !== el || U[32] !== ec ? (R = () => {
                null != el && ec()
            }, U[31] = el, U[32] = ec, U[33] = R) : R = U[33], U[34] !== el || U[35] !== es ? (q = [el, es], U[34] = el, U[35] = es, U[36] = q) : q = U[36], (0, l.useEffect)(R, q);
            let ed = e => {
                er(e, "click"), W?.(), ee.current = !0, Y?.(!0), ei.launch(e.launcherPayload)
            };
            if (0 === z.length) return null;
            let eu = null != eo ? (0, s.jsx)(P, {
                trigger: Q,
                onClick: () => ed(eo)
            }) : (0, s.jsx)(S, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if ($.current = e, Y?.(e || ee.current), e)
                        for (let e of z) er(e, "show")
                },
                size: "action",
                triggerButton: Q,
                children: X.map(e => {
                    let {
                        provider: t,
                        label: n,
                        logoUrl: a
                    } = e, i = t.provider?.trim().toLowerCase() === "thumbtack" ? (0, s.jsx)(I, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, s.jsx)(m.Hg, {
                        className: "text-secondary"
                    });
                    return (0, s.jsx)(p.c.Item, {
                        leftIcon: null == a ? i : (0, s.jsx)(h.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: i,
                            src: a
                        }, a),
                        onClick: () => ed(t),
                        children: n
                    }, A(t))
                })
            });
            return U[37] !== ea || U[38] !== ei || U[39] !== Y || U[40] !== V.hostId ? (D = null == ei.dialog ? null : (0, s.jsx)(y.EcosystemWidgetDialog, {
                conversationId: (0, o.Le)(ea),
                hostId: V.hostId,
                onClose: () => {
                    ei.close(), ee.current = !1, Y?.($.current)
                },
                state: ei.dialog
            }), U[37] = ea, U[38] = ei, U[39] = Y, U[40] = V.hostId, U[41] = D) : D = U[41], U[42] !== D ? (B = (0, s.jsx)(s.Fragment, {
                children: D
            }), U[42] = D, U[43] = B) : B = U[43], U[44] !== eu || U[45] !== B ? (G = (0, s.jsxs)(s.Fragment, {
                children: [eu, B]
            }), U[44] = eu, U[45] = B, U[46] = G) : G = U[46], G
        }

        function k(e) {
            v.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function N() {
            let e, t = (0, a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(d.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote",
                description: "Short button on a local business result, preview, or sidebar. It opens a price or availability quote request; when several providers are available, the user first chooses a provider."
            }), t[0] = e) : e = t[0], e
        }

        function A(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function S(e) {
            let t, n, i, r, o, c, d = (0, a.c)(11);
            d[0] !== e ? ({
                onOpenChange: t,
                ...n
            } = e, d[0] = e, d[1] = t, d[2] = n) : (t = d[1], n = d[2]), d[3] !== t ? (i = () => t?.(!1), d[3] = t, d[4] = i) : i = d[4];
            let u = (0, l.useEffectEvent)(i);
            return d[5] !== u ? (r = () => () => u(), d[5] = u, d[6] = r) : r = d[6], d[7] === Symbol.for("react.memo_cache_sentinel") ? (o = [], d[7] = o) : o = d[7], (0, l.useLayoutEffect)(r, o), d[8] !== t || d[9] !== n ? (c = (0, s.jsx)(p.a, {
                ...n,
                onOpenChange: t
            }), d[8] = t, d[9] = n, d[10] = c) : c = d[10], c
        }

        function P(e) {
            let {
                trigger: t,
                onClick: n
            } = e;
            return (0, l.cloneElement)(t, {
                onClick: n
            })
        }
    }),
    rVXE: (function(e, t, n) {
        var s = n("QosV"),
            a = n("zd8w"),
            i = n("T8YV");

        function r(e) {
            let t, n, r, o, l, c = (0, s.c)(9),
                {
                    launch: d,
                    onError: u
                } = e,
                p = (0, a.useRef)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => {
                p.current?.controller.abort()
            }, n = [], c[0] = t, c[1] = n) : (t = c[0], n = c[1]), (0, a.useEffect)(t, n);
            let [m, h] = (0, a.useState)(null);
            c[2] !== d || c[3] !== u ? (r = async e => {
                let t;
                if (p.current?.pending) return;
                p.current?.controller.abort();
                let n = {
                    controller: new AbortController,
                    pending: !0
                };
                p.current = n;
                let {
                    signal: s
                } = n.controller;
                h({
                    kind: "loading",
                    nonModal: !0
                });
                try {
                    let a = await d(e, s, e => {
                        t = e, s.aborted || h({
                            kind: "loading",
                            nonModal: !0,
                            tracking: t
                        })
                    });
                    n.pending = !1, s.aborted || h({
                        kind: "ready",
                        result: a
                    })
                } catch (e) {
                    n.pending = !1, !s.aborted && ((0, i.d)(e) || u?.(e), s.aborted || h({
                        kind: "error",
                        error: e,
                        tracking: t
                    }))
                }
            }, c[2] = d, c[3] = u, c[4] = r) : r = c[4];
            let _ = r;
            return c[5] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
                p.current?.controller.abort(), p.current = null, h(null)
            }, c[5] = o) : o = c[5], c[6] !== m || c[7] !== _ ? (l = {
                close: o,
                dialog: m,
                launch: _
            }, c[6] = m, c[7] = _, c[8] = l) : l = c[8], l
        }
        n.d(t, {
            a: () => r
        })
    })
};