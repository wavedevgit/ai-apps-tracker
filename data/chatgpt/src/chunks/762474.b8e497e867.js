export const __rspack_esm_id = 762474;
export const __rspack_esm_ids = [762474];
export const __webpack_modules__ = {
    f3BX: (function(e, t, n) {
        n.d(t, {
            a: () => D,
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
            h = n("MX3C"),
            m = n("eShZ"),
            _ = n("Mwpn"),
            g = n("KdgD"),
            f = n("NQCo"),
            b = n("OOaz"),
            v = n("MrGp"),
            y = n("T8YV"),
            x = n("rxj0"),
            w = n("KhaL"),
            T = n("yFoU"),
            I = n("qmuW"),
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
            O = i.object({
                tools: i.array(i.unknown()),
                nextCursor: i.string().optional()
            });
        async function P(e, t) {
            let n, s = (0, w.b)(e),
                a = s.connectorTarget;
            if (null == a || null != a.targetId || !["CODEX", "TPP"].includes(e.productSku?.toUpperCase() ?? "")) return null;
            let i = [],
                r = new Set;
            for (let e = 0; e < 32; e++) {
                let t = O.parse(await s.handleRequest({
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
        var q = n("aLav");
        let R = i.object({
                entityId: i.string().min(1),
                entityType: i.enum(["product", "place", "spotlight", "account"]),
                entrypointLabel: i.string().min(1),
                entrypointType: i.enum(["button", "widget"]),
                intentType: i.enum(["checkout", "reservation", "service", "onboarding", "account_detail"]),
                surface: i.enum(["search_results", "image_generation", "new_thread_home", "mattress_accounts_tab"])
            }),
            B = i.object({
                appUri: i.string().min(1),
                logging: R,
                mode: i.enum(["fullscreen", "modal"]),
                template: i.string().min(1),
                toolInput: i.record(i.string(), i.json()),
                toolName: i.string().min(1),
                viewParams: i.record(i.string(), i.json()).nullable().optional()
            });
        class D extends Error {
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
                    threadId: h,
                    productSku: _,
                    payload: g,
                    sourceMessageId: f,
                    prepareToolInput: y,
                    onTracking: x,
                    accountId: w,
                    signal: N
                } = e,
                A = {
                    ...B.parse(g),
                    chatGptThreadId: null == p ? null : (0, b.d)(p),
                    threadId: h,
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
                (0, C.a)(c, T.a, {
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
                        u = a instanceof m.a ? a.diagnosticError : a,
                        p = u instanceof d.c ? u : void 0;
                    l("CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR", {
                        ...n,
                        failurePoint: j.parse(e),
                        errorReason: k.parse(t),
                        requestId: c?.request_id ?? d.j.parse(p?.requestId),
                        xOaiRequestId: c?.x_oai_request_id,
                        errorCode: c?.error_code ?? d.i.parse(p?.code),
                        errorHttpStatusCode: (0, I.a)(c?.error_http_status_code ?? p?.status ?? (a instanceof m.a ? a.responseStatus : void 0)),
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
            let O = await U({
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
                ...O,
                tracking: S,
                request: {
                    ...A,
                    mode: "fullscreen" === O.widget.preferred_display_mode && O.widget.available_display_modes?.includes("fullscreen") !== !1 ? "fullscreen" : A.mode,
                    productSku: O.request.productSku,
                    appUri: O.request.appUri,
                    toolInput: B.shape.toolInput.parse(O.request.toolInput)
                }
            }
        }
        async function U(e) {
            let {
                scope: t,
                analyticsContext: n,
                hostId: d,
                request: m,
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
                    chatGptThreadId: m.chatGptThreadId
                },
                sensitive: {
                    hostId: d,
                    appUri: m.appUri,
                    template: m.template
                }
            }, async e => {
                let u, N = t.get(l.i),
                    A = t.get(l.e),
                    S = "apps" === I ? o.a : l.e,
                    O = t.get(S);
                if (null != T && T !== O) throw Error("MCP app account changed before opening");
                let M = () => {
                        if (C?.throwIfAborted(), null != m.chatGptThreadId && t.get(x.d, m.chatGptThreadId)) throw new DOMException("MCP app blocked by conversation Lockdown", "AbortError");
                        if (O !== t.get(S) || A !== t.get(l.e) || k !== t.get(l.j) || N !== t.get(l.i)) throw Error("MCP app account changed while opening")
                    },
                    R = m.productSku ?? ("tpp" === t.get(v.x, m.chatGptThreadId) ? "tpp" : void 0),
                    B = "bootstrap_unexpected_error",
                    G = "unknown_error";
                try {
                    M();
                    let o = null == O && null == R ? void 0 : {
                            ...null == O ? {} : {
                                "ChatGPT-Account-ID": O,
                                [s.Zb]: O
                            },
                            ...null == R ? {} : {
                                "OAI-Product-Sku": R
                            }
                        },
                        l = await (0, f.a)(t, m.chatGptThreadId, C);
                    M();
                    let v = m.linkId,
                        x = (0, g.a)(null, m.appUri);
                    void 0 === v && null != x && null != O && null != k && (v = t.get(h.c, {
                        accountId: O,
                        userId: k,
                        appId: x.connectorId
                    }) ?? void 0);
                    let T = {
                            additionalHeaders: o,
                            expectedIdentity: null == O || null == N ? void 0 : {
                                accountId: O,
                                userId: N
                            },
                            assertRequestCurrent: M,
                            signal: C
                        },
                        A = {
                            app_uri: m.appUri,
                            link_id: v,
                            conversation_id: l,
                            launcher_host: "chatgpt",
                            template_pointer: m.template,
                            tool_input: m.toolInput,
                            tool_name: m.toolName
                        },
                        S = await c.Request.safePost("/ecosystem/launcher/bootstrap", {
                            ...T,
                            requestBody: A
                        });
                    if (M(), null != E && "auto_install_required" === S.status) throw new D(S.connector_id, "NONE");
                    let U = "auto_install_required" === S.status ? await c.Request.safePost("/ecosystem/launcher/auto_install", {
                        ...T,
                        requestBody: A
                    }) : S;
                    M();
                    let F = U.reason?.trim();
                    switch ("ready" !== U.status && "connect_required" !== U.status && (B = "bootstrap_status", G = U.status), U.status) {
                        case "ready":
                            break;
                        case "connect_required":
                            throw new D(U.connector_id, "oauth" === U.preferred_auth_type ? "OAUTH" : void 0, F);
                        case "auth_required":
                            if ("apps" === I && "selected_link_auth_required" === F && null != v) throw new D(U.connector_id, "OAUTH", F, v);
                            throw Error(F || "Sign in to ChatGPT before opening this app");
                        case "blocked":
                            throw Error(F || "This app is blocked from opening.");
                        case "not_found":
                            throw Error(F || "This app is no longer available.")
                    }
                    let W = (0, a.a)(U.normalized_app_uri) ?? m.appUri;
                    M(), B = "file_authorization", e("Preparing app tool input");
                    let Y = null == E ? m.toolInput : await E(W);
                    M();
                    let z = R ?? (0, q.a)(W);
                    B = "launch_widget", j?.startSession(), M();
                    let Q = await P({
                        scope: t,
                        attribution: n,
                        appUri: W,
                        accountId: O ?? void 0,
                        accountSource: I,
                        signal: C,
                        threadId: m.threadId,
                        productSku: R,
                        chatGptConversationId: m.chatGptThreadId,
                        messageId: b ?? null,
                        originMetadata: {
                            attribution_id: U.connector_id,
                            link_id: v
                        }
                    }, m.toolName);
                    M(), v = v ?? Q?.target.targetId;
                    let V = {
                            ...m,
                            appUri: W,
                            toolInput: Y,
                            linkId: v,
                            productSku: R,
                            mode: _
                        },
                        K = null == Q ? void 0 : {
                            hostId: d,
                            accountId: O ?? void 0,
                            accountSource: I,
                            appUri: W,
                            template: m.template,
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
                                template: m.template,
                                tool_input: Y,
                                tool_name: Q?.actionName ?? m.toolName,
                                view_params: m.viewParams ?? null
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
                                    action_name: null == v ? void 0 : m.toolName,
                                    link_id: v,
                                    template_pointer: m.template,
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
                        if ("connect_required" === en.data.status) throw new D(en.data.connector_id, "oauth" === en.data.preferred_auth_type ? "OAUTH" : void 0);
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
                    if (et.isError && null != eo) throw new D(eo.connector_id, "OAUTH");
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
                        eh = $.widget?.tool_message_id ?? b ?? null,
                        em = (0, w.b)({
                            scope: t,
                            attribution: n,
                            appUri: ep,
                            accountId: O ?? void 0,
                            accountSource: I,
                            signal: C,
                            threadId: m.threadId,
                            productSku: R,
                            chatGptConversationId: m.chatGptThreadId,
                            messageId: eh,
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
                            threadId: m.threadId ?? null,
                            connectorTarget: em.connectorTarget,
                            accountSource: I
                        },
                        eg = t.get(r.b, e_);
                    if (null == eg) throw Error("MCP app account changed while opening");
                    return C?.throwIfAborted(), j?.opened({
                        messageId: eh,
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
                        mcpAppHostAdapter: em,
                        request: V,
                        toolResult: eu,
                        widget: ec
                    }
                } catch (t) {
                    if (L(t)) throw M(), (0, y.c)();
                    throw e("Hosted app launch stopped", {
                        safe: {
                            failurePoint: B,
                            failureReason: G
                        }
                    }), C?.aborted || t instanceof Error && "AbortError" === t.name || t instanceof D || j?.error(B, {
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
            if (!(e instanceof m.a || e instanceof d.c) || 403 !== e.status) return !1;
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
        var s = n("e0CE"),
            a = n("qmuW"),
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

        function h(e, t) {
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

        function m(e, t) {
            h(t), (0, i.a)(e, s.j, t)
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
            f: () => m,
            g: () => v,
            h: () => h
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
            let t, n, d, u, p, h = (0, a.c)(11),
                {
                    className: m,
                    label: _,
                    showTooltip: g
                } = e,
                f = g && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            h[0] !== m || h[1] !== f ? (t = (0, i.b)("inline-flex align-middle", f, m), h[0] = m, h[1] = f, h[2] = t) : t = h[2];
            let b = g ? 0 : void 0;
            h[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, s.jsx)(o.a, {
                className: "icon-niuo6X",
                asset: c.a
            }), h[3] = n) : n = h[3], h[4] !== _ || h[5] !== t || h[6] !== b ? (d = (0, s.jsx)("span", {
                className: t,
                "aria-label": _,
                role: "img",
                tabIndex: b,
                children: n
            }), h[4] = _, h[5] = t, h[6] = b, h[7] = d) : d = h[7];
            let v = d;
            return g ? (h[8] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, s.jsxs)("div", {
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
            }), h[8] = u) : u = h[8], h[9] !== v ? (p = (0, s.jsx)(l.a, {
                disablePadding: !0,
                side: "top",
                sideOffset: 0,
                tooltipMaxWidth: "min(215px, calc(100vw - 16px))",
                variant: "unstyled",
                tooltipContent: u,
                children: v
            }), h[9] = v, h[10] = p) : p = h[10], p) : v
        }
    }),
    Csob: (function(e, t, n) {
        n.d(t, {
            a: () => J,
            b: () => en,
            ChatGptLocalBusinessMetadata: () => Q,
            c: () => z,
            d: () => X,
            e: () => er
        });
        var s = n("ABep"),
            a = n("QosV"),
            i = n("LKEn"),
            r = n("e0CE"),
            o = n("mghv"),
            l = n("PVJr"),
            c = n("INJ7"),
            d = n("on57"),
            u = n("iTtm"),
            p = n("zd8w"),
            h = n("Wf1j"),
            m = n("oyxz"),
            _ = n("ASxG"),
            g = n("Cslg"),
            f = n("HOLv"),
            b = n("bf6R"),
            v = n("Bbed"),
            y = n("Fm9E"),
            x = n("zSQm"),
            w = n("WAdu"),
            T = n("hZax"),
            I = n("OMIV"),
            C = n("a6Zv"),
            E = n("KDax"),
            j = n("TUMj"),
            k = n("T2J5"),
            N = n("TJEh"),
            A = n("PUeQ"),
            S = n("Hzz5");

        function O(e) {
            let t, n, i, r, o, l = (0, a.c)(18),
                {
                    business: c
                } = e,
                u = (0, h.a)(),
                _ = (0, p.useId)(),
                [g, v] = (0, p.useState)(!1),
                y = !!c.hours?.length,
                x = null != c.is_open || c.is_closed_permanently;
            if (!y && !x) return null;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(f.a, {
                asset: S.a,
                className: "shrink-0"
            }), l[0] = t) : t = l[0], l[1] !== c || l[2] !== x ? (n = (0, s.jsxs)(s.Fragment, {
                children: [t, (0, s.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: x ? (0, s.jsx)(A.a, {
                        business: c,
                        showHourDetail: !0
                    }) : (0, s.jsx)(m.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours",
                        description: "Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule."
                    })
                })]
            }), l[1] = c, l[2] = x, l[3] = n) : n = l[3];
            let w = n;
            return l[4] !== g || l[5] !== y || l[6] !== _ || l[7] !== w ? (i = y ? (0, s.jsxs)("button", {
                type: "button",
                "aria-controls": _,
                "aria-expanded": g,
                className: "flex min-h-11 w-full cursor-interaction items-center gap-4 py-2 text-start select-none hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                onClick: () => v(!g),
                children: [w, (0, s.jsx)(b._b, {
                    className: (0, d.b)("text-secondary", g && "rotate-180")
                })]
            }) : (0, s.jsx)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: w
            }), l[4] = g, l[5] = y, l[6] = _, l[7] = w, l[8] = i) : i = l[8], l[9] !== c.hours || l[10] !== g || l[11] !== y || l[12] !== u || l[13] !== _ ? (r = y && (0, s.jsx)("dl", {
                id: _,
                hidden: !g,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let t = c.hours?.filter(t => t.day === e).sort(P);
                    return (0, s.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, s.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: u.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, s.jsx)("dd", {
                            children: t?.length ? t.map((e, t) => (0, s.jsx)("div", {
                                children: (0, s.jsx)(m.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    description: "One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.",
                                    values: {
                                        start: M(u, e.start),
                                        end: M(u, e.end)
                                    }
                                })
                            }, t)) : (0, s.jsx)(m.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed",
                                description: "Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown."
                            })
                        })]
                    }, e)
                })
            }), l[9] = c.hours, l[10] = g, l[11] = y, l[12] = u, l[13] = _, l[14] = r) : r = l[14], l[15] !== i || l[16] !== r ? (o = (0, s.jsxs)("div", {
                children: [i, r]
            }), l[15] = i, l[16] = r, l[17] = o) : o = l[17], o
        }

        function P(e, t) {
            return e.start.localeCompare(t.start)
        }

        function M(e, t) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var q = n("ynn3"),
            R = n("NtvA"),
            B = n("WNKy"),
            D = n("WSVP"),
            G = n("JB0j"),
            U = n("HVLy");
        let H = (0, v.a)(i.a),
            L = (0, v.a)(i.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: t
                    } = e;
                    return t(!1, null)
                }
            }),
            F = (0, v.a)(async () => {
                let {
                    parsePhoneNumberFromString: e
                } = await Promise.all([n.e(963703), n.e(87307)]).then(n.bind(n, "cggm"));
                return function(t) {
                    let {
                        phone: n,
                        href: a,
                        readOnly: i
                    } = t, r = e(n, "US")?.formatNational();
                    return null == r ? null : (0, s.jsx)(er, {
                        icon: (0, s.jsx)(f.a, {
                            asset: B.a
                        }),
                        children: (0, s.jsx)(E.a, {
                            className: "cursor-interaction hover:underline",
                            href: a,
                            initiator: "markdown_link_click",
                            openTarget: i ? "external-browser" : void 0,
                            children: r
                        })
                    })
                }
            }),
            W = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            },
            Y = _.object({
                layout: _.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: _.object({
                    map_url: _.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function z(e) {
            let t, n, i, r = (0, a.c)(12),
                {
                    reference: o,
                    actions: l,
                    claimActions: c
                } = e;
            r[0] !== o ? (t = (0, N.c)(o), r[0] = o, r[1] = t) : t = r[1];
            let d = t;
            r[2] !== o ? (n = Y.safeParse(o), r[2] = o, r[3] = n) : n = r[3];
            let u = n;
            if (null == d) {
                let e;
                return r[4] !== l ? (e = null == l ? null : (0, s.jsx)(s.Fragment, {
                    children: l
                }), r[4] = l, r[5] = e) : e = r[5], e
            }
            let p = u.success ? u.data.metadata?.map_url : null,
                h = (u.success ? u.data.layout : null) ?? "sidebar";
            return r[6] !== l || r[7] !== d || r[8] !== c || r[9] !== p || r[10] !== h ? (i = (0, s.jsx)(Q, {
                actions: l,
                business: d,
                directionsUrl: p,
                layout: h,
                renderActions: !1,
                claimActions: c
            }), r[6] = l, r[7] = d, r[8] = c, r[9] = p, r[10] = h, r[11] = i) : i = r[11], i
        }

        function Q(e) {
            let t, n = (0, a.c)(16);
            if ((0, u.x)(I.c, "2789236610") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let t, a, i, r, o;
                return n[0] !== e ? (t = (0, s.jsx)(K, {
                    ...e
                }), n[0] = e, n[1] = t) : t = n[1], n[2] !== e ? (a = (t, n) => (0, s.jsx)(K, {
                    ...e,
                    verified: t,
                    claimAction: n
                }), n[2] = e, n[3] = a) : a = n[3], n[4] !== e.business || n[5] !== e.onAction ? (i = t => (0, s.jsx)(K, {
                    business: e.business,
                    onAction: e.onAction,
                    verified: t,
                    readOnly: !0
                }), n[4] = e.business, n[5] = e.onAction, n[6] = i) : i = n[6], n[7] !== e.business || n[8] !== a || n[9] !== i ? (r = (0, s.jsx)(L, {
                    business: e.business,
                    renderMetadata: a,
                    renderClaimButton: V,
                    businessPreview: i
                }), n[7] = e.business, n[8] = a, n[9] = i, n[10] = r) : r = n[10], n[11] !== t || n[12] !== r ? (o = (0, s.jsx)(p.Suspense, {
                    fallback: t,
                    children: r
                }), n[11] = t, n[12] = r, n[13] = o) : o = n[13], o
            }
            return n[14] !== e ? (t = (0, s.jsx)(K, {
                ...e
            }), n[14] = e, n[15] = t) : t = n[15], t
        }

        function V(e, t) {
            return (0, s.jsx)(J, {
                onClick: e,
                request: t
            })
        }

        function K(e) {
            let t, n, i, o, l, c, u, m, _, g, f = (0, a.c)(57),
                {
                    actions: b,
                    business: v,
                    directionsUrl: y,
                    isOptimistic: T,
                    layout: I,
                    onAction: C,
                    claimActions: E,
                    renderActions: S,
                    readOnly: P,
                    fullWidth: M,
                    showTitle: q,
                    verified: R,
                    claimAction: B,
                    showClaimedBusinessTooltip: D
                } = e,
                G = void 0 !== T && T,
                U = void 0 === I ? "sidebar" : I,
                L = void 0 === S || S,
                W = void 0 !== P && P,
                Y = void 0 === q || q,
                z = void 0 !== R && R,
                V = void 0 !== D && D,
                [K, $] = (0, p.useState)(!1),
                [ee, et] = (0, p.useState)(!1),
                es = (0, j.d)(),
                ea = (0, p.useContext)(w.a),
                ei = (0, h.a)();
            f[0] !== v.phone ? (t = v.phone?.trim() ? (0, x.a)(`tel:${v.phone.trim()}`) : null, f[0] = v.phone, f[1] = t) : t = f[1];
            let er = t;
            f[2] !== v.address ? (n = v.address?.trim(), f[2] = v.address, f[3] = n) : n = f[3];
            let eo = n,
                el = "sidebar" === U;
            f[4] !== eo || f[5] !== v.name ? (i = [v.name, eo].filter(Boolean), f[4] = eo, f[5] = v.name, f[6] = i) : i = f[6];
            let ec = i.join(", "),
                ed = !(void 0 !== M && M) && "max-w-md";
            f[7] !== ed ? (o = (0, d.b)("not-prose mb-4 text-base text-default", ed), f[7] = ed, f[8] = o) : o = f[8];
            let eu = G ? "status" : void 0;
            f[9] !== v.name || f[10] !== ee || f[11] !== ei || f[12] !== el || f[13] !== W || f[14] !== V || f[15] !== Y || f[16] !== es?.imageEngagementContext?.surfaceLocation || f[17] !== z ? (l = el && Y ? (0, s.jsxs)("h2", {
                className: "mb-1 text-card-title leading-7 font-medium break-words",
                children: [v.name, (z || ee) && (0, s.jsx)(k.a, {
                    className: "ms-2",
                    showTooltip: !W && el && (V || es?.imageEngagementContext?.surfaceLocation === r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: ei.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business",
                        description: "Accessible label for the blue badge beside a business name after ownership approval"
                    })
                })]
            }) : null, f[9] = v.name, f[10] = ee, f[11] = ei, f[12] = el, f[13] = W, f[14] = V, f[15] = Y, f[16] = es?.imageEngagementContext?.surfaceLocation, f[17] = z, f[18] = l) : l = f[18];
            let ep = !W;
            return f[19] !== v || f[20] !== el || f[21] !== ep ? (c = (0, s.jsx)(X, {
                business: v,
                showPrice: el,
                linkRating: ep,
                wrap: el
            }), f[19] = v, f[20] = el, f[21] = ep, f[22] = c) : c = f[22], f[23] !== v || f[24] !== y || f[25] !== U || f[26] !== C || f[27] !== W || f[28] !== L ? (u = L && "one-line" !== U ? (0, s.jsx)("div", {
                className: "mt-3",
                children: (0, s.jsx)(en, {
                    allowQuoteAction: !W,
                    business: v,
                    directionsUrl: y,
                    onAction: C,
                    openTarget: W ? "external-browser" : void 0
                })
            }) : null, f[23] = v, f[24] = y, f[25] = U, f[26] = C, f[27] = W, f[28] = L, f[29] = u) : u = f[29], f[30] !== v || f[31] !== B || f[32] !== E || f[33] !== ee || f[34] !== y || f[35] !== G || f[36] !== el || f[37] !== W || f[38] !== er ? (m = el ? (0, s.jsxs)("div", {
                className: "mt-3 divide-y divide-border border-t border-default",
                children: [(0, s.jsx)(O, {
                    business: v
                }), (0, s.jsx)(Z, {
                    business: v,
                    directionsUrl: y,
                    readOnly: W
                }), null != er && null != v.phone ? (0, s.jsx)(F, {
                    phone: v.phone,
                    href: er,
                    readOnly: W
                }) : null, B, G || W || ee || null == E ? null : (0, s.jsx)(J, {
                    onClick: () => $(!0)
                })]
            }) : null, f[30] = v, f[31] = B, f[32] = E, f[33] = ee, f[34] = y, f[35] = G, f[36] = el, f[37] = W, f[38] = er, f[39] = m) : m = f[39], f[40] !== v || f[41] !== E || f[42] !== K || f[43] !== ea || f[44] !== C || f[45] !== es ? (_ = K && null != E && (0, s.jsx)(H, {
                business: {
                    ...v,
                    photoUrl: "restricted" === ea || es?.shouldBlockExternalEgress ? void 0 : (0, N.f)(v, es?.conversationType === "sidebar" ? es.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, s.jsx)(Q, {
                    business: v,
                    onAction: C,
                    verified: e,
                    readOnly: !0
                }),
                businessHours: (0, s.jsx)(A.a, {
                    business: v,
                    showHourDetail: !0
                }),
                actions: {
                    ...E,
                    onCheckDomain: E.onCheckDomain ? async () => {
                        let e = await E.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && et(!0), e
                    } : void 0,
                    onCheckClaim: E.onCheckClaim ? async () => {
                        let e = await E.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && et(!0), e
                    } : void 0,
                    onManageProfile: E.onManageProfile ? () => {
                        $(!1), E.onManageProfile?.()
                    } : void 0,
                    onEditHours: E.onEditHours ? () => {
                        $(!1), E.onEditHours?.()
                    } : void 0,
                    onEditDescription: E.onEditDescription ? () => {
                        $(!1), E.onEditDescription?.()
                    } : void 0
                },
                onClose: () => $(!1)
            }), f[40] = v, f[41] = E, f[42] = K, f[43] = ea, f[44] = C, f[45] = es, f[46] = _) : _ = f[46], f[47] !== b || f[48] !== ec || f[49] !== o || f[50] !== eu || f[51] !== l || f[52] !== c || f[53] !== u || f[54] !== m || f[55] !== _ ? (g = (0, s.jsxs)("section", {
                "aria-label": ec,
                className: o,
                role: eu,
                children: [l, c, b, u, m, _]
            }), f[47] = b, f[48] = ec, f[49] = o, f[50] = eu, f[51] = l, f[52] = c, f[53] = u, f[54] = m, f[55] = _, f[56] = g) : g = f[56], g
        }

        function Z(e) {
            let t, n, i, r, o, l = (0, a.c)(13),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u
                } = e,
                p = void 0 !== u && u;
            l[0] !== c.address ? (t = c.address?.trim(), l[0] = c.address, l[1] = t) : t = l[1];
            let h = t;
            if (!h) return null;
            l[2] !== c || l[3] !== d ? (n = (0, x.a)(d ?? (0, N.e)(c) ?? "") || null, l[2] = c, l[3] = d, l[4] = n) : n = l[4];
            let m = n,
                _ = !p;
            return l[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, s.jsx)(f.a, {
                asset: R.a
            }), l[5] = i) : i = l[5], l[6] !== h || l[7] !== p || l[8] !== m ? (r = null == m ? h : (0, s.jsx)(E.a, {
                className: "cursor-interaction hover:underline",
                href: m,
                initiator: "markdown_link_click",
                openTarget: p ? "external-browser" : void 0,
                children: h
            }), l[6] = h, l[7] = p, l[8] = m, l[9] = r) : r = l[9], l[10] !== _ || l[11] !== r ? (o = (0, s.jsx)(er, {
                truncate: _,
                icon: i,
                children: r
            }), l[10] = _, l[11] = r, l[12] = o) : o = l[12], o
        }

        function J(e) {
            let t, n, i, r, u, p = (0, a.c)(18),
                {
                    onClick: h,
                    request: _
                } = e;
            if (_?.status === "under_review") {
                let e, t, n;
                return p[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(f.a, {
                    className: "text-tertiary",
                    asset: U.a
                }), p[0] = e) : e = p[0], p[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(er, {
                    icon: e,
                    children: (0, s.jsx)("span", {
                        className: "text-secondary",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review",
                            description: "Status action beneath a business's contact details, shown to the person whose ownership claim is awaiting review. Opens the existing claim so they can check its status or withdraw it. Keep this label short; it does not mean ownership is approved."
                        })
                    })
                }), p[1] = t) : t = p[1], p[2] !== h ? (n = (0, s.jsx)("button", {
                    type: "button",
                    onClick: h,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), p[2] = h, p[3] = n) : n = p[3], n
            }
            let g = _ && "in_progress" !== _.status ? "text-default" : "text-business-claim";
            p[4] !== g ? (t = (0, d.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", g), p[4] = g, p[5] = t) : t = p[5];
            let v = _?.status === "needs_information" ? "text-warning" : void 0;
            return p[6] !== _ ? (n = _ ? ({
                pending: o.a,
                in_progress: c.a,
                needs_information: l.a
            })[_.status] : G.a, p[6] = _, p[7] = n) : n = p[7], p[8] !== v || p[9] !== n ? (i = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, s.jsx)(f.a, {
                    className: v,
                    asset: n
                })
            }), p[8] = v, p[9] = n, p[10] = i) : i = p[10], p[11] !== _ ? (r = _ ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, s.jsx)("span", {
                        className: "block",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            description: "Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.",
                            values: {
                                status: _.status
                            }
                        })
                    }), (0, s.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            description: "Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.",
                            values: {
                                status: _.status
                            }
                        })
                    })]
                }), (0, s.jsx)(b.ec, {})]
            }) : (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this profile",
                description: "Action below the phone number in the business sidebar that starts ownership verification"
            }), p[11] = _, p[12] = r) : r = p[12], p[13] !== h || p[14] !== t || p[15] !== i || p[16] !== r ? (u = (0, s.jsxs)("button", {
                className: t,
                type: "button",
                onClick: h,
                children: [i, r]
            }), p[13] = h, p[14] = t, p[15] = i, p[16] = r, p[17] = u) : u = p[17], u
        }

        function X(e) {
            let t, n, i, r, o, l, c, u, p = (0, a.c)(23),
                {
                    business: h,
                    showPrice: m,
                    linkRating: _,
                    shouldBlockExternalEgress: g,
                    wrap: f
                } = e,
                b = void 0 !== m && m,
                v = void 0 === _ || _,
                y = void 0 !== g && g,
                x = void 0 !== f && f;
            p[0] !== h.categories ? (t = h.categories?.find(et), p[0] = h.categories, p[1] = t) : t = p[1];
            let w = t;
            p[2] !== h || p[3] !== v || p[4] !== y ? (n = null == h.rating && null == W[h.provider ?? ""] ? null : (0, s.jsx)(ei, {
                business: h,
                linkRating: v,
                shouldBlockExternalEgress: y
            }, "rating"), p[2] = h, p[3] = v, p[4] = y, p[5] = n) : n = p[5], p[6] !== w ? (i = w ? (0, s.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, p[6] = w, p[7] = i) : i = p[7], p[8] !== h.price_str || p[9] !== b ? (r = b && h.price_str ? (0, s.jsx)("span", {
                children: h.price_str
            }, "price") : null, p[8] = h.price_str, p[9] = b, p[10] = r) : r = p[10], p[11] !== n || p[12] !== i || p[13] !== r ? (o = [n, i, r].filter(ee), p[11] = n, p[12] = i, p[13] = r, p[14] = o) : o = p[14];
            let T = o,
                I = x ? "text-base" : "text-sm",
                C = x ? "flex-wrap" : "flex-nowrap";
            return p[15] !== I || p[16] !== C ? (l = (0, d.b)("flex min-w-0 items-center leading-5 font-normal text-default", I, C), p[15] = I, p[16] = C, p[17] = l) : l = p[17], p[18] !== T ? (c = T.map($), p[18] = T, p[19] = c) : c = p[19], p[20] !== l || p[21] !== c ? (u = (0, s.jsx)("span", {
                className: l,
                children: c
            }), p[20] = l, p[21] = c, p[22] = u) : u = p[22], u
        }

        function $(e, t) {
            return (0, s.jsxs)(p.Fragment, {
                children: [0 === t ? null : (0, s.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function ee(e) {
            return null != e
        }

        function et(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function en(e) {
            let t, n, i, o, l, c, h, _, f, b, v, C, k, A, S, O, P, M, R, B, D, G = (0, a.c)(68),
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
                $ = (0, u.z)(g.e),
                ee = (0, j.d)(),
                et = (0, p.useContext)(w.a);
            G[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, y.b)(), G[0] = t) : t = G[0];
            let en = (0, T.h)(t),
                ei = (0, u.x)(I.c, "2673474834");
            G[1] !== L || G[2] !== J || G[3] !== ei ? (n = (0, x.a)(ei && "sidebar" === J ? (0, N.g)(L) ?? "" : "") || null, G[1] = L, G[2] = J, G[3] = ei, G[4] = n) : n = G[4];
            let er = n;
            G[5] !== L || G[6] !== F ? (i = (0, x.a)(F ?? (0, N.e)(L) ?? "") || null, G[5] = L, G[6] = F, G[7] = i) : i = G[7];
            let eo = i;
            G[8] !== L.website_url ? (o = (0, x.a)(L.website_url?.trim() ?? "") || null, G[8] = L.website_url, G[9] = o) : o = G[9];
            let el = o;
            G[10] !== L.phone ? (l = L.phone?.trim() ? (0, x.a)(`tel:${L.phone.trim()}`) : null, G[10] = L.phone, G[11] = l) : l = G[11];
            let ec = l;
            G[12] !== L.service_providers ? (c = (0, N.h)(L.service_providers), G[12] = L.service_providers, G[13] = c) : c = G[13];
            let ed = c;
            G[14] !== $ || G[15] !== Z || G[16] !== L.reservation_providers || G[17] !== en || G[18] !== et || G[19] !== ed || G[20] !== er || G[21] !== ee ? (h = Z && null != $ && ee?.shouldBlockExternalEgress === !1 && (ee.canRequestQuote ?? !ee.isReadOnly) && "restricted" !== et && en && null == er && !L.reservation_providers?.some(ea) && ed.length > 0, G[14] = $, G[15] = Z, G[16] = L.reservation_providers, G[17] = en, G[18] = et, G[19] = ed, G[20] = er, G[21] = ee, G[22] = h) : h = G[22];
            let eu = h;
            G[23] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve",
                description: "Short button label in a local restaurant sidebar that opens the reservation provider website"
            }), G[23] = _) : _ = G[23], G[24] !== er ? (f = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: er,
                label: _
            }, G[24] = er, G[25] = f) : f = G[25], G[26] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions",
                description: "Short button label in a local business sidebar that opens directions to the business"
            }), G[26] = b) : b = G[26], G[27] !== eo ? (v = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: eo,
                label: b
            }, G[27] = eo, G[28] = v) : v = G[28], G[29] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website",
                description: "Short button label in a local business sidebar that opens the business website"
            }), G[29] = C) : C = G[29], G[30] !== el ? (k = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: el,
                label: C
            }, G[30] = el, G[31] = k) : k = G[31], G[32] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call",
                description: "Short button label in a local business sidebar that calls the business phone number"
            }), G[32] = A) : A = G[32], G[33] !== ec ? (S = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: A
            }, G[33] = ec, G[34] = S) : S = G[34], G[35] !== f || G[36] !== v || G[37] !== k || G[38] !== S ? (O = [f, v, k, S].filter(es), G[35] = f, G[36] = v, G[37] = k, G[38] = S, G[39] = O) : O = G[39], G[40] !== eu || G[41] !== X || G[42] !== K || G[43] !== O ? (P = O.slice(0, X ? 0 : 3 - Number(eu) - Number(null != K)), G[40] = eu, G[41] = X, G[42] = K, G[43] = O, G[44] = P) : P = G[44];
            let ep = P;
            if (!eu && 0 === ep.length && null == K) return null;
            G[45] !== J ? (M = e => (0, d.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === J ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), G[45] = J, G[46] = M) : M = G[46];
            let eh = M;
            return G[47] !== eh || G[48] !== H || G[49] !== L.id || G[50] !== eu || G[51] !== W || G[52] !== Y || G[53] !== J || G[54] !== ed || G[55] !== ee ? (R = eu && (0, s.jsx)(q.a, {
                analyticsMessageId: H,
                businessId: "string" == typeof L.id ? L.id : void 0,
                ctaSurface: "hover" === J ? "map_card" : "business_sidebar",
                onAction: () => W?.(r.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: Y,
                providers: ed,
                trigger: (0, s.jsx)("button", {
                    className: eh(0),
                    type: "button",
                    children: (0, s.jsx)(q.b, {})
                }),
                turnContext: ee
            }), G[47] = eh, G[48] = H, G[49] = L.id, G[50] = eu, G[51] = W, G[52] = Y, G[53] = J, G[54] = ed, G[55] = ee, G[56] = R) : R = G[56], G[57] !== eh || G[58] !== ep || G[59] !== eu || G[60] !== W || G[61] !== z || G[62] !== K ? (B = ep.map((e, t) => (0, s.jsx)(E.a, {
                className: eh(t + Number(eu) + Number(null != K)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: z,
                onClick: () => W?.(e.key),
                children: e.label
            }, e.key)), G[57] = eh, G[58] = ep, G[59] = eu, G[60] = W, G[61] = z, G[62] = K, G[63] = B) : B = G[63], G[64] !== K || G[65] !== R || G[66] !== B ? (D = (0, s.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [R, K, B]
            }), G[64] = K, G[65] = R, G[66] = B, G[67] = D) : D = G[67], D
        }

        function es(e) {
            return null != e.href
        }

        function ea(e) {
            return null != e.launcherPayload
        }

        function ei(e) {
            let t, n, i, r, o, l = (0, a.c)(27),
                {
                    business: c,
                    linkRating: u,
                    shouldBlockExternalEgress: m
                } = e,
                _ = (0, h.a)(),
                g = (0, C.a)(),
                b = (0, j.d)(),
                v = (0, p.useContext)(w.a),
                y = !m && b?.shouldBlockExternalEgress !== !0 && "restricted" !== v;
            if (l[0] !== y || l[1] !== c.provider || l[2] !== c.provider_logo_dark_url || l[3] !== c.provider_logo_dark_url_short || l[4] !== c.provider_logo_url || l[5] !== c.provider_logo_url_short || l[6] !== c.provider_url || l[7] !== c.rating || l[8] !== _ || l[9] !== g || l[10] !== u) {
                let e, a = c.provider_logo_url_short?.trim() || c.provider_logo_url?.trim(),
                    r = g && (c.provider_logo_dark_url_short?.trim() || c.provider_logo_dark_url?.trim()) || a,
                    o = y && r ? (0, x.b)(r) : null;
                l[14] !== y || l[15] !== c.provider_url || l[16] !== u ? (e = u && y && (0, x.a)(c.provider_url?.trim() ?? "") || null, l[14] = y, l[15] = c.provider_url, l[16] = u, l[17] = e) : e = l[17], t = e;
                let p = W[c.provider ?? ""] ?? c.provider ?? "";
                l[18] !== c.rating || l[19] !== _ ? (n = null != c.rating ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(f.a, {
                        asset: D.a,
                        className: "size-3.5 shrink-0"
                    }), (0, s.jsx)("span", {
                        children: _.formatNumber(c.rating, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        })
                    })]
                }) : null, l[18] = c.rating, l[19] = _, l[20] = n) : n = l[20], i = o ? (0, s.jsx)("img", {
                    alt: p,
                    className: (0, d.b)("w-auto max-w-18 shrink-0 object-contain", o.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                    src: o
                }) : W[c.provider ?? ""] ?? null, l[0] = y, l[1] = c.provider, l[2] = c.provider_logo_dark_url, l[3] = c.provider_logo_dark_url_short, l[4] = c.provider_logo_url, l[5] = c.provider_logo_url_short, l[6] = c.provider_url, l[7] = c.rating, l[8] = _, l[9] = g, l[10] = u, l[11] = t, l[12] = n, l[13] = i
            } else t = l[11], n = l[12], i = l[13];
            l[21] !== n || l[22] !== i ? (r = (0, s.jsxs)(s.Fragment, {
                children: [n, i]
            }), l[21] = n, l[22] = i, l[23] = r) : r = l[23];
            let T = r;
            return l[24] !== T || l[25] !== t ? (o = null == t ? (0, s.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: T
            }) : (0, s.jsx)(E.a, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: t,
                initiator: "markdown_link_click",
                children: T
            }), l[24] = T, l[25] = t, l[26] = o) : o = l[26], o
        }

        function er(e) {
            let t, n, i, r, o = (0, a.c)(10),
                {
                    icon: l,
                    children: c,
                    truncate: u
                } = e;
            o[0] !== l ? (t = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: l
            }), o[0] = l, o[1] = t) : t = o[1];
            let p = void 0 !== u && u && "truncate";
            return o[2] !== p ? (n = (0, d.b)("min-w-0 flex-1 text-base font-medium select-text", p), o[2] = p, o[3] = n) : n = o[3], o[4] !== c || o[5] !== n ? (i = (0, s.jsx)("span", {
                className: n,
                children: c
            }), o[4] = c, o[5] = n, o[6] = i) : i = o[6], o[7] !== t || o[8] !== i ? (r = (0, s.jsxs)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: [t, i]
            }), o[7] = t, o[8] = i, o[9] = r) : r = o[9], r
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
            let h = d.is_open;
            if (null == h) return null;
            let m = d.next_open_hour;
            if (!u || null == m) {
                let e;
                return c[1] !== h ? (e = h ? (0, s.jsx)("span", {
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
                }), c[1] = h, c[2] = e) : e = c[2], e
            }
            let _ = d.local_day ?? new Date().getDay(),
                g = null != d.local_day && h && m.end <= m.start ? (m.day + 1) % 7 : m.day,
                f = h ? m.end : m.start;
            c[3] !== p || c[4] !== f ? (t = p.formatTime(new Date(0, 0, 0, Number.parseInt(f.slice(0, 2), 10), Number.parseInt(f.slice(2, 4), 10)), {
                hour: "numeric",
                minute: "2-digit"
            }), c[3] = p, c[4] = f, c[5] = t) : t = c[5];
            let b = t;
            c[6] !== h ? (n = e => (0, s.jsx)("span", {
                className: h ? "text-success" : "text-danger",
                children: e
            }), c[6] = h, c[7] = n) : n = c[7];
            let v = n;
            if (g === _) {
                let e;
                return c[8] !== h || c[9] !== v || c[10] !== b ? (e = h ? (0, s.jsx)("span", {
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
                }), c[8] = h, c[9] = v, c[10] = b, c[11] = e) : e = c[11], e
            }
            c[12] !== p || c[13] !== g ? (o = p.formatDate(new Date(0, 0, g), {
                weekday: "short"
            }), c[12] = p, c[13] = g, c[14] = o) : o = c[14];
            let y = o;
            return c[15] !== y || c[16] !== h || c[17] !== v || c[18] !== b ? (l = h ? (0, s.jsx)("span", {
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
            }), c[15] = y, c[16] = h, c[17] = v, c[18] = b, c[19] = l) : l = c[19], l
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
            i = n("c1Hu"),
            r = n("iTtm"),
            o = n("o0PZ"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("ASxG"),
            p = n("bqtn"),
            h = n("bf6R"),
            m = n("E6P3"),
            _ = n("zSQm"),
            g = n("WAdu"),
            f = n("yGJW"),
            b = n("OWtl"),
            v = n("WFY2"),
            y = n("OMcg"),
            x = n("f3BX"),
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
            let t, n, d, u, _, v, j, N, P, M, q, R, B, D, G, U = (0, a.c)(47),
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
            U[26] !== eo ? (P = null == eo ? null : A(eo), U[26] = eo, U[27] = P) : P = U[27];
            let el = P;
            U[28] !== eo || U[29] !== er ? (M = () => {
                null != eo && er(eo, "show")
            }, U[28] = eo, U[29] = er, U[30] = M) : M = U[30];
            let ec = (0, l.useEffectEvent)(M);
            U[31] !== el || U[32] !== ec ? (q = () => {
                null != el && ec()
            }, U[31] = el, U[32] = ec, U[33] = q) : q = U[33], U[34] !== el || U[35] !== es ? (R = [el, es], U[34] = el, U[35] = es, U[36] = R) : R = U[36], (0, l.useEffect)(q, R);
            let ed = e => {
                er(e, "click"), W?.(), ee.current = !0, Y?.(!0), ei.launch(e.launcherPayload)
            };
            if (0 === z.length) return null;
            let eu = null != eo ? (0, s.jsx)(O, {
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
                    }) : (0, s.jsx)(h.Gg, {
                        className: "text-secondary"
                    });
                    return (0, s.jsx)(p.c.Item, {
                        leftIcon: null == a ? i : (0, s.jsx)(m.a, {
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
            return U[37] !== ea || U[38] !== ei || U[39] !== Y || U[40] !== V.hostId ? (B = null == ei.dialog ? null : (0, s.jsx)(y.EcosystemWidgetDialog, {
                conversationId: (0, o.Le)(ea),
                hostId: V.hostId,
                onClose: () => {
                    ei.close(), ee.current = !1, Y?.($.current)
                },
                state: ei.dialog
            }), U[37] = ea, U[38] = ei, U[39] = Y, U[40] = V.hostId, U[41] = B) : B = U[41], U[42] !== B ? (D = (0, s.jsx)(s.Fragment, {
                children: B
            }), U[42] = B, U[43] = D) : D = U[43], U[44] !== eu || U[45] !== D ? (G = (0, s.jsxs)(s.Fragment, {
                children: [eu, D]
            }), U[44] = eu, U[45] = D, U[46] = G) : G = U[46], G
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

        function O(e) {
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
            let [h, m] = (0, a.useState)(null);
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
                m({
                    kind: "loading",
                    nonModal: !0
                });
                try {
                    let a = await d(e, s, e => {
                        t = e, s.aborted || m({
                            kind: "loading",
                            nonModal: !0,
                            tracking: t
                        })
                    });
                    n.pending = !1, s.aborted || m({
                        kind: "ready",
                        result: a
                    })
                } catch (e) {
                    n.pending = !1, !s.aborted && ((0, i.d)(e) || u?.(e), s.aborted || m({
                        kind: "error",
                        error: e,
                        tracking: t
                    }))
                }
            }, c[2] = d, c[3] = u, c[4] = r) : r = c[4];
            let _ = r;
            return c[5] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
                p.current?.controller.abort(), p.current = null, m(null)
            }, c[5] = o) : o = c[5], c[6] !== h || c[7] !== _ ? (l = {
                close: o,
                dialog: h,
                launch: _
            }, c[6] = h, c[7] = _, c[8] = l) : l = c[8], l
        }
        n.d(t, {
            a: () => r
        })
    })
};