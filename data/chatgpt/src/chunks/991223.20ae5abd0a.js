export const __rspack_esm_ids = [991223];
export const __webpack_modules__ = {
    sM3V: (function(a, b, c) {
        var d = c("Q840"),
            e = c("a4MG"),
            f = c("OWtl"),
            g = c("tl5a");
        let h = (0, d.d)(f.a, (a, b) => {
                let {
                    hostId: c,
                    conversationId: d
                } = a, {
                    get: e
                } = b;
                if (d.startsWith("chatgpt:")) return null;
                let f = e(g.nc, {
                    hostId: c,
                    threadId: d
                });
                return null != f && "notLoaded" !== f.type ? d : null
            }),
            i = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b, {
                    data: d
                } = null == c(h, {
                    hostId: a.hostId,
                    conversationId: a.threadId
                }) ? c(e.r, a.hostId) : c(e.s, a);
                return d?.data.find(b => b.name === a.serverName) ?? null
            });
        c.d(b, {}, {
            a: i,
            b: h
        })
    }),
    Ooax: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.L().regex(/^link_[0-9a-f]{32}$/),
            f = d.L().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            g = d.F({
                connector_id: f,
                target_link_id: e
            }),
            h = d.F({
                connector_id: f,
                connector_name: d.L().optional(),
                auth_type: d.p(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: d.L().nullish(),
                auth_reason: d.p(["oauth_upgrade_required", "reauthentication_required"]),
                requested_scopes: d.g(d.L().min(1)).min(1).optional()
            }),
            i = d.F({
                isError: d.z(!1).optional(),
                structuredContent: d.F({
                    kind: d.z("connector_auth_request"),
                    version: d.z(3),
                    status: d.z("requested"),
                    link_id: e
                }),
                _meta: d.F({
                    _codex_apps: d.F({
                        connector_auth_request: h
                    })
                })
            });
        c.d(b, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(a) {
                return `Authentication for ${a} was requested and accepted. Retry this tool call now.`
            },
            c: function(a, b) {
                let c = g.safeParse(a).data,
                    d = i.safeParse(b).data;
                if (null == c || null == d) return null;
                let e = d._meta._codex_apps.connector_auth_request,
                    {
                        link_id: f
                    } = d.structuredContent,
                    h = "oauth_upgrade_required" === e.auth_reason;
                return c.target_link_id !== f || h !== (null != e.requested_scopes) || h && "OAUTH" !== e.auth_type ? null : {
                    ...e,
                    link_id: f
                }
            }
        })
    }),
    PrVQ: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("Q840"),
            f = c("P61R"),
            g = c("sS8e"),
            h = c("xSzB"),
            i = c("OWtl"),
            j = c("tSEg"),
            k = c("WFY2"),
            l = c("oo2L"),
            m = c("Ooax"),
            n = c("Sbyb");
        let o = (0, e.v)(i.a, a => !1);
        c.d(b, {}, {
            a: function(a) {
                let {
                    scope: b,
                    productSku: c,
                    hostId: d,
                    sourceId: e,
                    resourceUri: g,
                    access: i,
                    toolInput: p,
                    toolResult: q,
                    assertActive: r,
                    onReconnected: s
                } = a;
                if (g !== m.a || null == q || null == i || !("connectorId" in i.serverIdentity) || i.serverIdentity.connectorId !== f.a) return;
                let t = (0, m.c)(p, (0, h.i)({
                    isCodexAppsServer: !0,
                    toolResult: q
                }));
                if (null == t) return;
                let u = null == t.auth_type ? null : (0, l.p)({
                    id: t.link_id,
                    connector_id: t.connector_id,
                    auth_type: t.auth_type,
                    auth_strategy_id: t.auth_strategy_id
                });
                if ("API_KEY" === t.auth_type && null == u) return;
                let v = a => {
                    if (a.throwIfAborted(), r?.(), b.get(j.j) || "current" !== i.status(b.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async a => {
                    v(a);
                    let f = await (0, n.requestMcpConnectSheet)(b, {
                            connectorId: t.connector_id,
                            hostId: d,
                            oauthPresentation: "popup",
                            productSku: c,
                            startOAuthDirectly: "reauthentication_required" === t.auth_reason && "OAUTH" === u,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: t.link_id,
                                authReason: t.auth_reason,
                                requestedScopes: t.requested_scopes
                            },
                            beforeConnect: async () => (v(a), !0),
                            signal: a
                        }),
                        g = f.didConnect && f.linkId === t.link_id;
                    if (g && null != s) {
                        let c = JSON.stringify([d, i.accountId, i.uiUserId, e, t.link_id]);
                        b.get(o, c) || (v(a), b.set(o, c, !0), s(t.connector_name?.trim() || t.connector_id).catch(a => {
                            k.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: a
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: g
                    }
                }
            },
            b: async function() {
                throw (0, g.c)("This action is unavailable for the sign-in widget", d.r.MethodNotFound)
            }
        })
    }),
    PYah: (function(a, b, c) {
        var d = c("Dgwo");
        c.d(b, {}, {
            a: async function(a, b, c, e) {
                let {
                    apps: f
                } = await (0, d.b)(a, b).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: c
                }, null == e ? void 0 : {
                    threadAccess: e,
                    coalesce: !1
                });
                return new Set(f.filter(a => {
                    let {
                        callable: b,
                        enabled: c
                    } = a;
                    return b && c
                }).map(a => {
                    let {
                        id: b
                    } = a;
                    return b
                }))
            }
        })
    }),
    MRPP: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("lAQI"),
            f = c("Cslg"),
            g = c("kpIY"),
            h = c("Nwp9"),
            i = c("Kwur"),
            j = c("g2p6"),
            k = c("AHqG"),
            l = c("zGlb"),
            m = c("VaAS");
        let n = "chatgpt-business-agent-drafts-v1",
            o = (0, h.b)(n, void 0),
            p = e.J(e.L(), e.R()),
            q = e.F({
                userId: e.L().min(1),
                accountId: e.L().min(1),
                expiresAt: e.E(),
                context: e.F({
                    businessAgentId: e.L().min(1),
                    nativeRuntimeVersion: e.z(1).optional(),
                    gizmoId: e.L().min(1),
                    interactionId: e.T(),
                    businessName: e.L().optional(),
                    logoUrl: e.L().optional(),
                    notice: e.L().optional(),
                    headerColor: e.L().optional(),
                    conversationStarters: e.g(e.L()).max(4).optional(),
                    disablePrefill: e.j().optional(),
                    showDisclosureModal: e.j().optional(),
                    showConversationStarters: e.j()
                })
            });

        function r(a, b, c) {
            let d = JSON.stringify([c.userId, c.accountId, b]);
            try {
                return (0, g.t)(n, {
                    entries: {
                        [d]: {
                            value: q.parse({
                                ...c,
                                expiresAt: Date.now() + 864e5
                            })
                        }
                    },
                    maxEntries: 100
                }), a.set(o, (0, g.k)(n)), !0
            } catch {
                return !1
            }
        }
        c.d(b, {}, {
            a: r,
            recoverBusinessAgentDraft: async function(a, b, c) {
                await Promise.all([(0, g.B)(), a.when(a => "loading" !== a.get(f.m).status)]);
                let e = a.get(f.m),
                    h = a.get(j.n),
                    s = a.get(f.k);
                if ("allowed" !== e.status || !("accountId" in e) || null == h || e.accountId !== h || a.get(f.f) !== h || null == s) throw new DOMException("Business Agent account unavailable", "AbortError");
                let t = p.parse(a.get(o) ?? (0, g.k)(n)),
                    u = q.parse(t[JSON.stringify([s, h, b])]);
                if (u.userId !== s || u.accountId !== h || u.context.gizmoId !== c || u.expiresAt <= Date.now()) throw new DOMException("Business Agent draft unavailable", "AbortError");
                let v = a => a(f.k) === s && a(j.n) === h && a(f.f) === h,
                    w = !1,
                    x = a.watch(a => {
                        let {
                            get: b
                        } = a;
                        w = w || !v(b)
                    }),
                    y = () => {
                        if (w || !v(a.get)) throw new DOMException("Business Agent identity changed", "AbortError");
                        (0, l.c)(a)
                    };
                try {
                    null != u.context.nativeRuntimeVersion && y();
                    let e = await i.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                            requestBody: null == u.context.nativeRuntimeVersion ? void 0 : {
                                native_runtime_version: u.context.nativeRuntimeVersion,
                                include_gizmo_resource: !0
                            },
                            parameters: {
                                path: {
                                    business_agent_id: u.context.businessAgentId
                                }
                            },
                            additionalHeaders: {
                                "ChatGPT-Account-ID": h,
                                [d.ec]: h,
                                "x-openai-business-agent-interaction-id": u.context.interactionId
                            }
                        }),
                        f = m.a.parse(e);
                    if (null != u.context.nativeRuntimeVersion && f.business_agent_native_runtime_version !== u.context.nativeRuntimeVersion || w || !v(a.get) || f.business_agent_id !== u.context.businessAgentId || f.underlying_gizmo_id !== c || f.interaction_id !== u.context.interactionId) throw new DOMException("Business Agent identity changed", "AbortError");
                    let g = f.business_agent_native_runtime_version,
                        j = {
                            ...u.context,
                            nativeRuntimeVersion: g,
                            conversationStarters: null == g ? u.context.conversationStarters : void 0,
                            privacyPolicyUrl: f.privacy_policy_url,
                            animateDisclosure: !1
                        },
                        l = {
                            accountId: h,
                            userId: s,
                            status: "ready",
                            context: j
                        };
                    if (null != g) {
                        y();
                        let c = await (0, k.a)(a, l, e.gizmo_resource);
                        if (w) throw new DOMException("Business Agent identity changed", "AbortError");
                        if (j.businessName = c.gizmo.display.name.trim() || void 0, j.logoUrl = f.favicon_url?.trim() || c.gizmo.display.profile_picture_url?.trim() || void 0, j.headerColor = f.header_color?.trim() || c.gizmo.display.theme?.trim() || void 0, j.conversationStarters = c.gizmo.display.prompt_starters?.slice(0, 4) ?? void 0, null == u.context.nativeRuntimeVersion && !r(a, b, {
                                accountId: h,
                                userId: s,
                                context: j
                            })) throw new DOMException("Business Agent draft unavailable", "AbortError")
                    }
                    return l
                } finally {
                    x()
                }
            },
            removeBusinessAgentDraftsForInteraction: function(a, b) {
                let c = p.safeParse((0, g.k)(n));
                if (!c.success) return;
                let d = {};
                for (let [e, g] of Object.entries(c.data)) {
                    let c = q.safeParse(g);
                    c.success && c.data.userId === a.get(f.k) && c.data.accountId === a.get(j.n) && c.data.context.interactionId === b && (d[e] = null)
                }
                Object.keys(d).length > 0 && ((0, g.t)(n, {
                    entries: d
                }), a.set(o, (0, g.k)(n)))
            }
        })
    }),
    AHqG: (function(a, b, c) {
        var d = c("Kwur"),
            e = c("zGlb"),
            f = c("VaAS");
        c.d(b, {}, {
            a: async function(a, b, c) {
                (0, e.c)(a);
                let g = c ?? await d.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                    parameters: {
                        path: {
                            gizmo_id_or_short_url: b.context.gizmoId
                        }
                    },
                    additionalHeaders: (0, f.d)(b),
                    expectedIdentity: {
                        accountId: b.accountId,
                        userId: b.userId
                    }
                });
                return (0, e.c)(a), (0, e.d)(g, b.context.gizmoId), g
            }
        })
    }),
    grx7: (function(a, b, c) {
        var d = c("kphc"),
            e = c("gBBC"),
            f = c("Ve8c"),
            g = c("dQRk"),
            h = c("lSqO"),
            i = c("ggor"),
            j = c("pUv5"),
            k = c("GgLN");
        async function l(a, b, c, d, e) {
            let f, g = a.get(k.b, b);
            if (null != g && "failed" !== g.status) return void e?.(null);
            let i = {
                status: "pending",
                accountId: c.accountId,
                userId: c.userId,
                gizmoId: c.gizmoId,
                ...d,
                showConversationStarters: !1
            };
            if ((0, k.f)(a, b, i), a.get(k.b, b) !== i) return void e?.(null);
            let l = null;
            try {
                f = new h.a(a, c.businessAgentId, {
                    entry_point: "business_profile",
                    source_profile_lookup_id: c.sourceProfileLookupId,
                    source_surface: c.sourceSurface,
                    source_product_hostname: c.sourceProductHostname
                }, "product_detail_panel" === c.sourceSurface ? j.o : void 0), await f.prepare({
                    conversationId: b,
                    gizmoId: c.gizmoId
                }), l = f.open().context.interactionId
            } catch {
                a.get(k.b, b) === i && a.set(k.b, b, {
                    ...i,
                    status: "failed"
                })
            } finally {
                f?.cancel()
            }
            e?.(l)
        }

        function m(a, b, c, g, h, i) {
            (0, e.d)(a, null), (0, d.n)(a, "chat"), b("/", {
                state: {
                    ...(0, f.c)(h, g, !0),
                    homeDraftClientThreadId: void 0,
                    initialChatGptConversationId: c,
                    initialChatGptBusinessAgentGizmoId: g.id,
                    prefillPrompt: void 0 === i ? "" : i ?? void 0,
                    ...null == i ? {} : {
                        prefillPromptFormat: "plain",
                        prefillPromptOnlyIfEmpty: !0
                    }
                }
            })
        }
        c.d(b, {}, {
            a: l,
            b: function(a, b, c, d, e, f, h) {
                let j = (0, g.ub)(a),
                    k = null != h && null != c.sourceSurface ? new i.a(a, j, c, e, h) : null,
                    n = l(a, j, c, d, a => {
                        f?.(a), k?.generate(a)
                    });
                return (0, g.ac)({
                    scope: a,
                    conversationId: j,
                    projectId: c.gizmoId
                }), m(a, b, j, {
                    id: c.gizmoId,
                    name: d.businessName || c.businessAgentId,
                    iconUrl: d.logoUrl ?? null
                }, {
                    businessProfileChat: c
                }, null == k ? e : null), n
            },
            c: function(a, b, c, d, e) {
                let {
                    conversationId: f,
                    context: g
                } = c.open();
                m(a, b, f, {
                    id: g.gizmoId,
                    name: g.businessName ?? g.businessAgentId,
                    iconUrl: g.logoUrl ?? null
                }, d, e)
            },
            d: function(a, b, c, d, e) {
                let f = (0, g.ub)(a),
                    h = {
                        ...c,
                        status: "pending",
                        gizmoId: e.id,
                        businessName: e.name,
                        logoUrl: e.iconUrl ?? void 0,
                        profileShareSessionId: d,
                        showConversationStarters: !1
                    };
                if ((0, k.f)(a, f, h), a.get(k.b, f) !== h) throw Error("Business Agent draft unavailable");
                (0, g.ac)({
                    scope: a,
                    conversationId: f,
                    projectId: e.id
                }), m(a, b, f, e, void 0)
            }
        })
    }),
    lSqO: (function(a, b, c) {
        var d = c("Q840"),
            e = c("KvQL"),
            f = c("lAQI"),
            g = c("Cslg"),
            h = c("nUDt"),
            i = c("MRPP"),
            j = c("AHqG"),
            k = c("zGlb"),
            l = c("VaAS"),
            m = c("wwvo"),
            n = c("Kwur"),
            o = c("dQRk"),
            p = c("g2p6"),
            q = c("nlNF"),
            r = c("OWtl"),
            s = c("OMIV");
        let t = l.a.extend({
                requires_click_attribution_bridge: f.z(!1).optional(),
                entry_context: f.F({
                    entry_channel: f.z("organic"),
                    entry_point: f.p(["debug_settings", "business_profile", "shared_link"]),
                    client_platform: f.z("web"),
                    traffic_class: f.p(["production", "internal_test"])
                })
            }),
            u = ["699583893", "199045523"],
            v = (0, d.c)(r.a, a => {
                let {
                    get: b
                } = a;
                return u.every(a => b(s.e, a))
            }),
            w = (0, d.c)(r.a, a => {
                let {
                    get: b
                } = a, c = b(g.n), d = b(g.m);
                return !c.authLoading && !c.accountLoading && "chatgpt" === c.authMethod && !0 === c.hasChatGptToken && null != c.userId && c.authenticatedUserId === c.userId && "allowed" === d.status && "accountId" in d && d.accountId === c.authenticatedAccountId
            }),
            x = (0, d.c)(r.a, a => {
                let {
                    get: b
                } = a;
                return b(w) && b(v)
            });
        c.d(b, {}, {
            a: class {
                scope;
                entry;
                enabled$;
                controller = new AbortController;
                accountId;
                userId;
                navigationVisit;
                businessAgentId;
                unwatch;
                profileDraft;
                preparation;
                ready;
                resource;
                disclosure;
                constructor(a, b, c, d = x) {
                    this.scope = a, this.entry = c, this.enabled$ = d;
                    let e = a.get(p.n),
                        f = a.get(g.k);
                    if (this.businessAgentId = b.trim(), null == e || null == f || !this.businessAgentId) throw Error("Business Agent launch unavailable");
                    this.accountId = e, this.userId = f, this.navigationVisit = a.get(q.e)
                }
                get signal() {
                    return this.controller.signal
                }
                prepare(a) {
                    return null == this.preparation && (this.profileDraft = a, this.preparation = this.createInteraction().catch(a => {
                        throw this.stopWatching(), a
                    })), this.preparation
                }
                open() {
                    this.assertCurrent();
                    let a = this.ready;
                    if (null == a) throw Error("Business Agent launch unavailable");
                    null != a.context.nativeRuntimeVersion && (0, k.c)(this.scope);
                    let b = (0, o.ub)(this.scope, this.profileDraft?.conversationId);
                    if (!(0, i.a)(this.scope, b, {
                            accountId: this.accountId,
                            userId: this.userId,
                            context: a.context
                        })) throw Error("Business Agent draft unavailable");
                    return (0, o.ac)({
                        scope: this.scope,
                        conversationId: b,
                        projectId: a.context.gizmoId
                    }), null != this.resource && this.scope.queryClient.setQueryData((0, m.d)(a, b), this.resource), (0, o.Yb)(this.scope, b, a), this.disclosure?.version === 1 && null != this.disclosure.global_impression_count && ((0, h.d)(this.scope, {
                        conversationId: b,
                        accountId: this.accountId,
                        userId: this.userId
                    }), (0, h.e)(this.scope, b, this.disclosure, this.scope.get(s.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0)), this.cancel(), {
                        conversationId: b,
                        context: a.context
                    }
                }
                cancel = () => {
                    this.controller.abort(), this.stopWatching()
                };
                stopWatching() {
                    this.unwatch?.(), this.unwatch = void 0, window.removeEventListener("pagehide", this.cancel)
                }
                isCurrentVisit(a) {
                    if (a(q.e) === this.navigationVisit) return !0;
                    let b = a(q.c);
                    return null != this.profileDraft && b?.pathname === "/" && b.state?.initialChatGptConversationId === this.profileDraft.conversationId && b.state.initialChatGptBusinessAgentGizmoId === this.profileDraft.gizmoId
                }
                assertCurrent = () => {
                    this.signal.throwIfAborted(), this.scope.get(this.enabled$) && this.scope.get(p.n) === this.accountId && this.scope.get(g.f) === this.accountId && this.scope.get(g.k) === this.userId && this.isCurrentVisit(this.scope.get) || (this.cancel(), this.signal.throwIfAborted())
                };
                async createInteraction() {
                    this.assertCurrent();
                    let a = "shared_link" === this.entry.entry_point ? this.entry.gizmoId : void 0;
                    null != a && (0, k.c)(this.scope), this.unwatch = this.scope.watch(a => {
                        let {
                            get: b
                        } = a;
                        b(this.enabled$) && b(p.n) === this.accountId && b(g.f) === this.accountId && b(g.k) === this.userId && this.isCurrentVisit(b) || this.cancel()
                    }), window.addEventListener("pagehide", this.cancel);
                    let b = await n.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                        parameters: {
                            path: {
                                business_agent_id: this.businessAgentId
                            }
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": this.accountId,
                            [e.ec]: this.accountId
                        },
                        expectedIdentity: {
                            accountId: this.accountId,
                            userId: this.userId
                        },
                        signal: this.signal,
                        assertRequestCurrent: this.assertCurrent,
                        retry: "never",
                        requestBody: {
                            ...null == a ? {} : {
                                native_runtime_version: 1
                            },
                            include_gizmo_resource: !0,
                            include_disclosure_state: (this.scope.get(s.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0) > 0,
                            entry_context: {
                                entry_channel: "organic",
                                entry_point: this.entry.entry_point,
                                ..."source_profile_lookup_id" in this.entry ? {
                                    source_profile_lookup_id: this.entry.source_profile_lookup_id,
                                    ...null == this.entry.source_surface ? {} : {
                                        source_surface: this.entry.source_surface,
                                        source_product_hostname: this.entry.source_product_hostname
                                    }
                                } : {},
                                ..."source_profile_share" in this.entry ? {
                                    source_profile_share: this.entry.source_profile_share
                                } : {},
                                client_platform: "web"
                            }
                        }
                    });
                    this.assertCurrent();
                    let c = t.parse(b);
                    if (c.entry_context.entry_point !== this.entry.entry_point || "debug_settings" === this.entry.entry_point && "internal_test" !== c.entry_context.traffic_class || c.business_agent_id !== this.businessAgentId || null != this.profileDraft && c.underlying_gizmo_id !== this.profileDraft.gizmoId || null != a && a !== c.underlying_gizmo_id || null != a && 1 !== c.business_agent_native_runtime_version || b.gizmo_resource?.business_agent_native_runtime_version != null && b.gizmo_resource.business_agent_native_runtime_version !== c.business_agent_native_runtime_version || null != b.gizmo_resource && b.gizmo_resource.gizmo.id !== c.underlying_gizmo_id) throw Error("Business Agent identity mismatch");
                    let d = c.business_agent_native_runtime_version;
                    "shared_link" === this.entry.entry_point && null != d && (0, k.c)(this.scope);
                    let f = {
                            businessAgentId: c.business_agent_id,
                            nativeRuntimeVersion: d,
                            gizmoId: c.underlying_gizmo_id,
                            interactionId: c.interaction_id,
                            businessName: c.business_name?.trim() || void 0,
                            logoUrl: c.favicon_url?.trim() || c.logo_url?.trim() || void 0,
                            headerColor: c.header_color?.trim() || void 0,
                            privacyPolicyUrl: c.privacy_policy_url,
                            showDisclosureModal: !1,
                            showConversationStarters: !1
                        },
                        h = {
                            accountId: this.accountId,
                            userId: this.userId,
                            status: "ready",
                            context: f
                        },
                        i = null == d ? b.gizmo_resource : await (0, j.a)(this.scope, h, b.gizmo_resource);
                    return this.assertCurrent(), f.businessName = f.businessName ?? (i?.gizmo.display.name.trim() || void 0), null != d && (f.logoUrl = f.logoUrl ?? (i?.gizmo.display.profile_picture_url?.trim() || void 0), f.headerColor = f.headerColor ?? (i?.gizmo.display.theme?.trim() || void 0)), this.resource = i, this.disclosure = c.disclosure ?? c.global_disclosure, this.ready = h, f
                }
            },
            b: w,
            c: x,
            d: v,
            e: u
        })
    }),
    qUXQ: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.x(),
            f = d.F({
                description: e,
                id: e,
                merchants: e,
                num_reviews: e,
                offers: d.g(e).nullable(),
                original_price: e,
                price: e,
                rating: e,
                specs: e,
                title: d.L().min(1),
                url: e,
                variant_snapshots: e,
                variants: e,
                open_behavior: d.R().optional()
            }),
            g = new Set(["available", "brand", "details", "is_digital", "marketplace_seller", "merchant_name", "merchant_subtitle", "original_price", "price", "price_details", "product_name", "provider", "seller_name", "shop_id", "tag", "url"]),
            h = new Set(["analytics_meta", "product_event_uuid", "conversation_id", "message_id", "public_conversation_id", "public_message_id", "request_id", "client_thread_id", "user_id", "visitor_id", "trace_id", "session_id", "shopping_session_id"]);

        function i(a) {
            let b = URL.parse(a);
            if (b?.protocol === "https:" && !b.username && !b.password) return b.searchParams.delete("utm_source", "chatgpt.com"), b.href
        }

        function j(a) {
            return null != a && "object" == typeof a && !Array.isArray(a)
        }

        function k(a) {
            return Array.isArray(a) ? a.map(k) : j(a) ? Object.fromEntries(Object.entries(a).filter(a => {
                let [b] = a;
                return !h.has(b)
            }).map(a => {
                let [b, c] = a;
                return [b, k(c)]
            })) : a
        }

        function l(a) {
            return k(Object.fromEntries(Object.entries(a).filter(a => {
                let [b] = a;
                return g.has(b)
            })))
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "block",
                    e = f.safeParse(a);
                if (!e.success) return;
                let {
                    open_behavior: g,
                    ...h
                } = e.data, m = (h.offers ?? []).filter(j);
                if ("bound-offer" === d) {
                    let a = i(b);
                    if (null == a) return;
                    let d = m.filter(b => "string" == typeof b.url && i(b.url) === a);
                    if (d.length > 1 || 0 === d.length && ("string" != typeof h.url || i(h.url) !== a)) return;
                    c = d[0]
                } else "external_url" !== g && (c = m.find(a => !0 === a.available && "string" == typeof a.url && a.url.trim()) ?? m.find(a => "string" == typeof a.url && a.url.trim()));
                let n = c?.merchant_name || c?.merchant,
                    o = {
                        selected_merchant_hostname: new URL(b).hostname.toLowerCase().replace(/\.$/u, "").replace(/^www\./u, ""),
                        selected_merchant_url: b,
                        ...null != c ? {
                            selected_offer: l(c)
                        } : {},
                        ..."string" == typeof n && n.trim() ? {
                            display_name: n
                        } : {}
                    };
                return {
                    product: Object.fromEntries(Object.entries(h).map(a => {
                        let [b, c] = a;
                        return [b, "offers" === b ? m.map(l) : k(c)]
                    })),
                    observed_retailer: o
                }
            },
            b: i
        })
    }),
    ggor: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("Cslg"),
            f = c("jEN2"),
            g = c("zWHk"),
            h = c("nlNF"),
            i = c("Kwur"),
            j = c("Y0jW"),
            k = c("pUv5");

        function l(a, b) {
            if ("string" != typeof a) return;
            let c = a.replace(/\b(?:https?:\/\/|www\.)\S+/giu, "").trim();
            if (c.length <= b) return c || void 0;
            let d = Array.from(c).slice(0, b).join("");
            if (d.length === c.length || void 0 === Intl.Segmenter) return d;
            let e = new Intl.Segmenter(void 0, {
                    granularity: "grapheme"
                }).segment(c),
                f = e.containing(d.length)?.index ?? d.length;
            return c.slice(0, f) || void 0
        }

        function m(a) {
            let b = l(a.title, 256) ?? "",
                c = l(a.description, 1200),
                d = a.variants?.flatMap(a => {
                    let b = a.options?.find(b => b.id === a.selected_option_id),
                        c = l(b?.label, 256);
                    if (!c) return [];
                    let d = l(a.label, 256);
                    return [d ? `${d}: ${c}` : c]
                }),
                e = l(d?.join(", "), 256) ?? l(a.selected_variant, 256);
            return {
                title: b,
                ...c ? {
                    description: c
                } : {},
                ...e ? {
                    selected_variant: e
                } : {}
            }
        }
        c.d(b, {}, {
            a: class {
                scope;
                conversationId;
                profile;
                fallback;
                product;
                available$;
                lifetime = new AbortController;
                deadline = AbortSignal.timeout(12e3);
                originVisit;
                destinationVisit;
                stopWatching;
                stopDocument;
                editor;
                question;
                editOrSendRevision = 0;
                boundRevision;
                binding = 0;
                constructor(a, b, c, d, f) {
                    this.scope = a, this.conversationId = b, this.profile = c, this.fallback = d, this.product = f, this.available$ = "product_detail_panel" === c.sourceSurface ? k.o : k.e, a.get(j.a)?.cancel(), this.originVisit = a.get(h.e), a.set(j.a, this);
                    let g = a.watch(a => {
                        let {
                            get: d
                        } = a;
                        if (!d(this.available$) || d(e.f) !== c.accountId || d(e.k) !== c.userId) return void this.cancel();
                        let f = d(h.e),
                            g = d(h.c),
                            i = g?.pathname === "/" && g.state?.initialChatGptConversationId === b && g.state.initialChatGptBusinessAgentGizmoId === c.gizmoId;
                        if (i || f !== this.originVisit || null != this.destinationVisit) {
                            if (!i) return void this.cancel();
                            this.destinationVisit = f, this.applyIfUntouched()
                        }
                    });
                    this.deadline.addEventListener("abort", () => this.finish(this.fallback), {
                        once: !0,
                        signal: this.lifetime.signal
                    }), this.lifetime.signal.aborted ? g() : (this.stopWatching = g, window.addEventListener("pagehide", this.cancel, {
                        once: !0
                    }))
                }
                async generate(a) {
                    if (!this.lifetime.signal.aborted && null == this.question) {
                        if (null == a || !this.product.title) return void this.finish(this.fallback);
                        try {
                            let b = await i.Request.safePost("/gizmos/business-agents/{business_agent_id}/product-card-conversation-starter", {
                                parameters: {
                                    path: {
                                        business_agent_id: this.profile.businessAgentId
                                    }
                                },
                                additionalHeaders: {
                                    [d.ec]: this.profile.accountId
                                },
                                expectedIdentity: {
                                    accountId: this.profile.accountId,
                                    userId: this.profile.userId
                                },
                                requestBody: {
                                    ..."product_detail_panel" === this.profile.sourceSurface ? {
                                        source_surface: this.profile.sourceSurface
                                    } : {},
                                    interaction_id: a,
                                    source_profile_lookup_id: this.profile.sourceProfileLookupId,
                                    source_product_hostname: this.profile.sourceProductHostname,
                                    product: this.product
                                },
                                signal: AbortSignal.any([this.lifetime.signal, this.deadline]),
                                retry: "never"
                            });
                            this.finish(b.question?.trim() || this.fallback)
                        } catch {
                            this.finish(this.fallback)
                        }
                    }
                }
                finish(a) {
                    this.lifetime.signal.aborted || null != this.question || (this.question = a, this.applyIfUntouched())
                }
                bind(a) {
                    if (this.lifetime.signal.aborted) return () => {};
                    if (!a.view.isDestroyed && !a.isInputActive) {
                        let b, c = ++this.binding,
                            d = (0, f.B)(() => {
                                a.isInputActive && (d(), b = this.bind(a))
                            });
                        return this.lifetime.signal.addEventListener("abort", d, {
                            once: !0
                        }), () => {
                            this.lifetime.signal.removeEventListener("abort", d), d(), null != b ? b() : this.cancelIfUnbound(c)
                        }
                    }
                    if (a.view.isDestroyed || "" !== a.getText() || null != this.editor && this.editor !== a) return this.cancel(), () => {};
                    let b = ++this.binding;
                    return this.editor = a, this.boundRevision = this.editOrSendRevision, null == this.stopDocument && (this.stopDocument = (0, g.b)(a.view, a => {
                        a && this.editedOrSent()
                    })), this.applyIfUntouched(), () => {
                        this.boundRevision = void 0, this.cancelIfUnbound(b)
                    }
                }
                cancelIfUnbound(a) {
                    queueMicrotask(() => {
                        this.binding === a && this.cancel()
                    })
                }
                promptDidChange(a) {
                    "" !== a && this.editedOrSent()
                }
                editedOrSent() {
                    this.editOrSendRevision++, this.cancel()
                }
                cancel = () => {
                    this.lifetime.signal.aborted || (this.lifetime.abort(), this.stopDocument?.(), this.stopWatching?.(), window.removeEventListener("pagehide", this.cancel), this.scope.get(j.a) === this && this.scope.set(j.a, null))
                };
                applyIfUntouched() {
                    let a = this.editor,
                        b = this.question;
                    if (null == a || null == b || null == this.destinationVisit || null == this.boundRevision || this.lifetime.signal.aborted) return;
                    let c = this.scope.get(h.c),
                        d = this.scope.get(j.a) === this && this.scope.get(this.available$) && this.scope.get(e.f) === this.profile.accountId && this.scope.get(e.k) === this.profile.userId && c?.pathname === "/" && c.state?.initialChatGptConversationId === this.conversationId && c.state.initialChatGptBusinessAgentGizmoId === this.profile.gizmoId && this.scope.get(h.e) === this.destinationVisit && this.boundRevision === this.editOrSendRevision && !a.view.isDestroyed && !a.view.composing && a.isInputActive && "" === a.getText();
                    this.cancel(), d && a.setText(b, "external-draft")
                }
            },
            b: function(a, b) {
                return a.formatMessage({
                    id: "chatgpt.product.block.businessQuestion.starter",
                    defaultMessage: "What should I know about the {product}?"
                }, {
                    product: b
                })
            },
            c: function(a) {
                let {
                    title: b,
                    description: c,
                    selected_variant: d
                } = m(a), e = l(a.price, 128), f = [];
                for (let [b, c] of Object.entries(a.specs ?? {})) {
                    let a = l(b, 80),
                        d = l(c, 256);
                    if (a && d && f.push([a, d]), 20 === f.length) break
                }
                return {
                    title: b,
                    ...c ? {
                        description: c
                    } : {},
                    ...d ? {
                        variant: d
                    } : {},
                    ...e ? {
                        price: e
                    } : {},
                    ...f.length > 0 ? {
                        specs: Object.fromEntries(f)
                    } : {}
                }
            },
            d: m
        })
    }),
    pUv5: (function(a, b, c) {
        c.d(b, {
            a: () => S,
            b: () => T,
            c: () => Q,
            d: () => M,
            e: () => P,
            f: () => I,
            g: () => af,
            h: () => J,
            i: () => F,
            j: () => E,
            k: () => ab,
            l: () => D,
            m: () => ac,
            n: () => N,
            o: () => O,
            p: () => G,
            q: () => ak,
            r: () => V,
            s: () => Z
        });
        var d = c("QosV"),
            e = c("LrxN"),
            f = c("D7Ms"),
            g = c("Q840"),
            h = c("KvQL"),
            i = c("rKAs"),
            j = c("AuIy"),
            k = c("lAQI"),
            l = c("Cslg"),
            m = c("svjy"),
            n = c("yGJW"),
            o = c("OWtl"),
            p = c("cX6x"),
            q = c("Qg7S"),
            r = c("JYRT"),
            s = c("OMIV"),
            t = c("wVL6"),
            u = c("uRGy"),
            v = c("Kwur"),
            w = c("dQRk"),
            x = c("TUMj"),
            y = c("lSqO"),
            z = c("YAwS");
        let A = "product-card-llm-linear-v1",
            B = "fallback";
        var C = c("qUXQ");
        let D = (0, g.v)(o.a, a => new Map, void 0, {
                autoDispose: 3e5
            }),
            E = "2156661915",
            F = "972228833",
            G = "1563544563";

        function H(a) {
            let b = b => b?.getFeatureGate(a, {
                disableExposureLog: !0
            }).value ?? (0, p.c)(a)?.value ?? !1;
            return (0, g.h)(o.a, a => {
                let {
                    get: c
                } = a;
                return b(c(s.g))
            }, a => {
                let {
                    get: c,
                    set: d
                } = a, e = c(s.g);
                if (null == e) return;
                let f = () => d(b(e));
                return e.on("values_updated", f), () => e.off("values_updated", f)
            })
        }
        let I = H(E),
            J = H(F);

        function K(a) {
            return a?.loadingStatus === "Ready" ? {
                client: a,
                gate: a.getFeatureGate(G, {
                    disableExposureLog: !0
                })
            } : null
        }
        let L = (0, g.h)(o.a, a => {
            let {
                get: b
            } = a;
            return K(b(s.g))
        }, a => {
            let {
                get: b,
                set: c
            } = a, d = b(s.g);
            if (null == d) return;
            let e = () => c(K(d));
            return d.on("values_updated", e), () => d.off("values_updated", e)
        });

        function M() {
            return "u" > typeof window && "desktop_web" === (0, t.a)() && !("MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
        }
        let N = (0, g.c)(o.a, a => {
                let {
                    get: b
                } = a;
                if (!M() || !b(y.b)) return null;
                let c = b(L);
                if (null == c || !(0, s.c)(c.gate)) return null;
                let {
                    client: d
                } = c, e = d.getContext().user, f = b(l.f), g = b(l.k);
                return null != f && null != g && e.userID === g && e.custom?.account_id === f && y.e.every(a => d.getFeatureGate(a, {
                    disableExposureLog: !0
                }).value) && (0, q.a)(d) ? c : null
            }),
            O = (0, g.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return M() && b(L)?.gate.value === !0 && null != b(N) && b(y.c)
            }),
            P = (0, g.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return b(I) && b(y.c)
            });

        function Q(a) {
            return R(a, !0)
        }

        function R(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = null == a ? null : URL.parse(a);
            if (null == c || "https:" !== c.protocol && (b || "http:" !== c.protocol) || c.username || c.password) return null;
            let d = c.hostname.toLowerCase().replace(/\.$/, "");
            return d.includes(".") && !/^\d+(?:\.\d+){3}$/.test(d) ? d : null
        }

        function S(a, b, c, d) {
            let e = "number" == typeof b?.start_idx ? b.start_idx : void 0,
                f = (0, u.b)(d, b),
                g = U(a, a?.contentReferenceMessageIds?.[c] ?? a?.messageId, e ?? c, e, f, d.id);
            return null == g || null == f ? null : {
                ...g,
                unanchoredBlockIndex: null == e ? c : void 0,
                mlpFeatureCard: (0, C.a)(d, f)
            }
        }

        function T(a, b, c, d) {
            return U(a, b ?? a?.messageId, c, c, d.url, d.id)
        }

        function U(a, b, c, d, e, f) {
            if (null == a || !1 === a.isPresented || a.isReadOnly || !1 === a.trackShownImpressions || a.shouldBlockExternalEgress) return null;
            let g = R(e),
                h = a.turnId ?? b;
            if (null == g || null == h) return null;
            let i = b?.startsWith("WEB:") ? void 0 : b;
            return {
                hostname: g,
                offerUrl: e ?? void 0,
                isTemporaryChat: a.isTemporaryChat,
                responseId: h,
                answerMessageId: (0, x.d)(a) ?? b,
                sourceMessageKey: b,
                messageId: i,
                conversationId: a.conversationId,
                cardIndex: c,
                contentReferenceId: null != i && null != d ? `${i}-${d}` : void 0,
                productId: f ?? void 0
            }
        }

        function V(a, b, c) {
            a.get(P) && (0, n.a)(a, e.f, {
                messageId: b.messageId,
                contentReferenceId: b.contentReferenceId,
                productId: $(b, a.get(ab).useCardIdentity),
                ...c
            })
        }

        function W() {
            let a, b = performance.now(),
                c = new Map;
            return d => {
                let e = c.get(d);
                return null == e && (a = a ?? d, e = {
                    domainObservedAt: null == d || d === a ? b : performance.now(),
                    shown: new Set,
                    shownCtas: new Map
                }, c.set(d, e)), e
            }
        }
        let X = (0, g.j)(o.a, a => {
                let b = W(),
                    c = new Map;
                return (a, d) => {
                    if (null == a) return b(d);
                    let e = c.get(a);
                    if (null != e) return e(d);
                    let f = 0 === c.size ? b : W();
                    return c.set(a, f), f(d)
                }
            }, {
                autoDispose: 3e5
            }),
            Y = new WeakMap;

        function Z(a, b, c) {
            let e, f, h, j = (0, d.c)(17),
                {
                    useCardIdentity: k
                } = (0, g.z)(ab);
            j[0] !== a || j[1] !== k ? (e = k ? _(a) : void 0, j[0] = a, j[1] = k, j[2] = e) : e = j[2];
            let l = e,
                m = (0, x.e)();
            j[3] !== a.unanchoredBlockIndex || j[4] !== m || j[5] !== k ? (f = k && null != m && null != a.unanchoredBlockIndex ? function(a, b) {
                let c = Y.get(a);
                if (null == c) {
                    c = new Map;
                    let b = new Map;
                    for (let [d, e] of a.contentReferences.entries()) {
                        if ("product" !== e.type || "block" !== e.render_as || "number" == typeof e.start_idx) continue;
                        let f = (0, i.z)(e);
                        if (null == f) continue;
                        let g = (0, u.a)(f),
                            h = R(g);
                        if (null == h) continue;
                        let j = f.id || g,
                            k = JSON.stringify([a.contentReferenceMessageIds?.[d] ?? a.messageId, j, h]),
                            l = b.get(k) ?? 0;
                        b.set(k, l + 1), c.set(d, JSON.stringify([j, l]))
                    }
                    Y.set(a, c)
                }
                return c.get(b)
            }(m, a.unanchoredBlockIndex) : void 0, j[3] = a.unanchoredBlockIndex, j[4] = m, j[5] = k, j[6] = f) : f = j[6];
            let n = f,
                o = $(a, k);
            return j[7] !== b || j[8] !== l || j[9] !== n || j[10] !== a.cardIndex || j[11] !== a.conversationId || j[12] !== a.hostname || j[13] !== a.responseId || j[14] !== a.sourceMessageKey || j[15] !== c ? (h = JSON.stringify([b, c, a.conversationId, l ?? a.responseId, a.sourceMessageKey, n ?? a.cardIndex, a.hostname]), j[7] = b, j[8] = l, j[9] = n, j[10] = a.cardIndex, j[11] = a.conversationId, j[12] = a.hostname, j[13] = a.responseId, j[14] = a.sourceMessageKey, j[15] = c, j[16] = h) : h = j[16], (0, g.w)(X, h)(o, k ? a.generatedOccurrenceId : void 0)
        }

        function $(a, b) {
            let c = a.mlpFeatureCard?.product.id;
            return b && "string" == typeof c && c.trim() ? c : a.productId
        }

        function _(a) {
            return a.answerMessageId && !a.answerMessageId.startsWith("WEB:") ? a.answerMessageId : a.messageId
        }
        let aa = k.J(k.L().min(1).max(100), k.E().min(0).max(1).nullable()).default({}),
            ab = (0, g.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(s.e, "498080874"), d = c ? b(r.a, "1850909878") : null, e = d?.get("provider", "generic"), f = d?.get("mlp_model_version", "") ?? "", g = aa.safeParse(d?.value.mlp_model_thresholds), h = null;
                g.success && (Object.hasOwn(g.data, f) ? h = g.data[f] : "original-unweighted-30k-epoch9-numpy-v1" === f && (h = d?.get("mlp_min_confidence", -1)));
                let i = null != h && Number.isFinite(h) && h >= 0 && h <= 1 && f.length > 0 && f.length <= 100 && d?.get("mlp_embedding_contract", "") === "organic-cta-context-card-json-v1:ev3-3072",
                    j = "generic";
                c ? "llm" === e ? j = "llm" : "mlp" === e && i && (j = "mlp") : b(s.e, "2194711480") && (j = "llm");
                let k = "mlp" === j && !d?.get("counterfactual", !1),
                    l = "llm" === j && !d?.get("counterfactual", !1),
                    m = k || l,
                    n = m && b(J),
                    o = k && n,
                    p = l && n;
                return {
                    provider: j,
                    standardMlp: k,
                    standardLlm: l,
                    useCardIdentity: m,
                    weightedMlp: o,
                    rankedLlm: p,
                    assignedProvider: "mlp" === e || "llm" === e ? e : void 0,
                    cacheKey: JSON.stringify([c, j, d?.value, o, p, "organic-cta-context-card-json-v1"])
                }
            }),
            ac = (0, g.q)(o.a, (a, b) => {
                let c, {
                        get: d,
                        scope: e
                    } = b,
                    g = d(l.f),
                    i = d(l.k),
                    j = d(P) && null != g && null != i,
                    k = j ? d(m.a).locale : null,
                    n = j ? d(ab) : null,
                    o = n?.provider === "llm" || n?.provider === "mlp" && null != a.mlpFeatureCard ? d(w.j, a.conversationId) : null,
                    p = _(a),
                    q = n?.rankedLlm ? (c = $(a, !0), c?.trim() ? ["product", c] : a.offerUrl ? ["offer", a.offerUrl] : null) : null,
                    r = n?.rankedLlm && g && i && o && p && q ? {
                        accountId: g,
                        userId: i,
                        conversationId: o,
                        answerId: p,
                        cardId: q
                    } : null,
                    s = null != o && null != a.messageId && a.replyCtaProduct?.title ? {
                        source_conversation_id: o,
                        source_assistant_message_id: a.messageId,
                        product: a.replyCtaProduct,
                        ...n?.weightedMlp || r ? {
                            weighted_answer_id: p
                        } : {},
                        ...n?.provider === "mlp" && null != a.mlpFeatureCard ? {
                            mlp_feature_card: a.mlpFeatureCard
                        } : {}
                    } : void 0,
                    t = j && d(O),
                    u = null != s && ad(a, d),
                    x = j && !u;
                return {
                    queryKey: [...t ? [...ag(g, i, a.conversationId, a.hostname, k), a.responseId] : ["product-card-business-agent", g, i, a.conversationId, a.responseId, a.hostname, k], ...null != s ? ["reply-cta", n?.cacheKey, s, u, ...r ? [q, !1 === a.isTemporaryChat] : []] : []],
                    enabled: x,
                    staleTime: null == s ? 1 / 0 : 6e4,
                    gcTime: 3e5,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    retryOnMount: !0,
                    queryFn: x && null != k ? async b => {
                        let {
                            signal: c
                        } = b, d = AbortSignal.timeout(4e3), f = () => !c.aborted && e.get(P) && e.get(l.f) === g && e.get(l.k) === i && e.get(m.a).locale === k && (null == s || e.get(ab).cacheKey === n?.cacheKey && e.get(w.j, a.conversationId) === o && !ad(a, e.get)), j = null, p = "error";
                        try {
                            let b = {
                                    hostname: a.hostname,
                                    ...t ? {
                                        source_surface: "product_card"
                                    } : {},
                                    ...null != s ? {
                                        reply_cta_context: s
                                    } : {}
                                },
                                e = await v.Request.safePost("/business-profiles/product-card-chat-target", {
                                    additionalHeaders: {
                                        [h.ec]: g,
                                        "OAI-Language": k
                                    },
                                    expectedIdentity: {
                                        accountId: g,
                                        userId: i
                                    },
                                    requestBody: b,
                                    signal: AbortSignal.any([c, d]),
                                    retry: "never"
                                });
                            d.throwIfAborted(), j = e.target?.cta_label?.trim() ? e.target : null, j?.llm_choice_catalog && "counterfactual" !== j.experiment_arm && r && s && f() && (j = await async function(a, b, c) {
                                let d = a.llm_choice_catalog?.filter(a => a.cta_label.trim() && a.choice_id);
                                if (!d?.some(a => "fallback" === a.choice_id)) return a;
                                let e = a.choice_id,
                                    f = await (async function(a) {
                                        let {
                                            identity: b,
                                            rankedIds: c,
                                            availableIds: d,
                                            persist: e
                                        } = a, f = new Set(d), g = [...new Set(c)].filter(a => a !== B && f.has(a)), {
                                            accountId: h,
                                            userId: i,
                                            conversationId: j,
                                            answerId: k,
                                            cardId: l,
                                            merchantId: m
                                        } = b, n = JSON.stringify([A, h, i, j, k, l, m]), o = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n)), p = await async function(a, b) {
                                            let c = a.length;
                                            if (0 === c) return B;
                                            let d = c * (c + 1) / 2,
                                                e = await async function a(b, c) {
                                                    let d = 2n ** 64n,
                                                        e = BigInt(c),
                                                        f = d - d % e,
                                                        g = new DataView(b);
                                                    for (let a = 0; a < g.byteLength; a += 8) {
                                                        let b = g.getBigUint64(a);
                                                        if (b < f) return Number(b % e)
                                                    }
                                                    return a(await crypto.subtle.digest("SHA-256", b), c)
                                                }(b, 10 * d) - d;
                                            if (e < 0) return B;
                                            for (let [b, d] of a.entries())
                                                if ((e -= 9 * (c - b)) < 0) return d;
                                            throw Error("Ranked CTA draw exceeded its ticket count")
                                        }(g, o);
                                        if (!e) return p;
                                        let q = Array.from(new Uint8Array(o), a => a.toString(16).padStart(2, "0")).join("");
                                        try {
                                            return await (0, z.accessBrowserHostRecordDurably)(`${A}:${q}`, a => "string" == typeof a && f.has(a) ? {
                                                result: a
                                            } : {
                                                value: p,
                                                result: p
                                            })
                                        } catch {
                                            return p
                                        }
                                    })({
                                        identity: b,
                                        rankedIds: e && "fallback" !== e ? [e, ...(a.cta_alternatives ?? []).map(a => a.choice_id)] : [],
                                        availableIds: d.map(a => a.choice_id),
                                        persist: c
                                    }).catch(() => null),
                                    g = d.find(a => a.choice_id === f);
                                return null == g ? a : {
                                    ...a,
                                    cta_label: g.cta_label,
                                    cta_draft_text: g.cta_draft_text,
                                    cta_intent_id: g.cta_intent_id,
                                    display_label_key: g.choice_id,
                                    rankedLlmChoice: !0
                                }
                            }(j, {
                                ...r,
                                merchantId: j.source_profile_lookup_id || j.business_agent_id
                            }, !1 === a.isTemporaryChat)), p = null == j ? "no_match" : "matched"
                        } catch {
                            p = d.aborted ? "timeout" : "error"
                        }
                        if (!f()) throw new DOMException("Product card lookup is no longer current", "AbortError");
                        if (V(e, a, {
                                action: "lookup_finished",
                                lookupOutcome: p,
                                businessAgentId: j?.business_agent_id
                            }), "timeout" === p || "error" === p) throw Error("Product merchant lookup is temporarily unavailable");
                        return j
                    } : f.u
                }
            }, {
                key: ae
            });

        function ad(a, b) {
            if (!b(w.J, a.conversationId)) return !1;
            let c = b(w.N, a.conversationId);
            if (null == c || null == a.messageId || null == c[a.messageId]) return !0;
            let d = (0, j.b)({
                current_node: b(w.C, a.conversationId),
                mapping: c
            });
            return 0 === d.length || d.some(b => b.id === a.messageId)
        }

        function ae(a) {
            return null == a ? "" : JSON.stringify([a.conversationId, a.responseId, a.answerMessageId, a.cardIndex, a.sourceMessageKey, a.productId, a.hostname, a.offerUrl, a.isTemporaryChat, ...null != a.replyCtaProduct ? [a.replyCtaProduct] : [], ...null != a.mlpFeatureCard ? [a.mlpFeatureCard] : []])
        }
        let af = (0, g.d)(o.a, (a, b) => {
            let {
                get: c
            } = b;
            if (null == a || !c(P)) return null;
            let d = c(ac, a);
            return d.isEnabled ? d.data ?? null : null
        }, {
            key: ae,
            autoDispose: !0
        });

        function ag(a, b, c, d, e) {
            return ["product-card-business-agent-with-pdp-label", a, b, c, d, e]
        }

        function ah(a, b) {
            return a && b?.trim() ? {
                business_agent_id: a.business_agent_id,
                source_profile_lookup_id: a.source_profile_lookup_id,
                display_name: a.display_name,
                gizmo_id: a.gizmo_id,
                cta_label: b
            } : null
        }

        function ai(a) {
            return null == a ? "" : JSON.stringify([a.conversationId, a.hostname])
        }
        let aj = (0, g.q)(o.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b, e = c(l.f), g = c(l.k), i = null != e && null != g && c(O), j = i ? c(m.a).locale : null;
                return {
                    queryKey: ["product-detail-panel-business-agent", e, g, a.conversationId, a.hostname, j],
                    enabled: i,
                    staleTime: 6e4,
                    gcTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    queryFn: i && null != j ? async b => {
                        let {
                            signal: c
                        } = b, f = ag(e, g, a.conversationId, a.hostname, j), i = d.queryClient.getQueriesData({
                            queryKey: f
                        }).find(a => {
                            let [, b] = a;
                            return b?.pdp_cta_label?.trim()
                        })?.[1];
                        if (null != i) return ah(i, i.pdp_cta_label);
                        let k = d.queryClient.getQueryCache().find({
                            queryKey: f,
                            exact: !1,
                            predicate: a => "fetching" === a.state.fetchStatus && a.queryKey.length === f.length + 1
                        })?.promise;
                        if (null != k) {
                            let a = await k.catch(() => null),
                                b = ah(a, a?.pdp_cta_label);
                            if (null != b) return b
                        }
                        if (c.throwIfAborted(), !d.get(O) || d.get(l.f) !== e || d.get(l.k) !== g || d.get(m.a).locale !== j) throw new DOMException("Product panel lookup is no longer current", "AbortError");
                        let n = await v.Request.safePost("/business-profiles/product-card-chat-target", {
                            additionalHeaders: {
                                [h.ec]: e,
                                "OAI-Language": j
                            },
                            expectedIdentity: {
                                accountId: e,
                                userId: g
                            },
                            requestBody: {
                                hostname: a.hostname,
                                source_surface: "product_detail_panel"
                            },
                            signal: AbortSignal.any([c, AbortSignal.timeout(4e3)]),
                            retry: "never"
                        });
                        return ah(n.target, n.target?.cta_label)
                    } : f.u
                }
            }, {
                key: ai
            }),
            ak = (0, g.d)(o.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (null == a || !c(O)) return null;
                let d = c(aj, a);
                return d.isEnabled ? d.data ?? null : null
            }, {
                key: ai,
                autoDispose: !0
            })
    }),
    C6kc: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("MVHH"),
            f = c("D99L"),
            g = c("fVOX"),
            h = c("yGJW"),
            i = c("g2p6");

        function j(a, b, c) {
            "memory_footnote_shown" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: c
            }), a.get(g.a).count("default", b, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: c,
                target: "search_sources_sidebar"
            })
        }
        c.d(b, {
            a: () => e.Y
        }, {
            b: function(a, b) {
                let {
                    actionType: c,
                    conversationId: d,
                    experiment: f,
                    messageId: g,
                    source: i,
                    feedback: k,
                    selectedFeedback: l,
                    surface: m = "sources"
                } = b, n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(k, null) && (n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let o = null == i ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === m && (o = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, h.a)(a, e.X, {
                    actionType: c,
                    conversationId: d ?? void 0,
                    messageId: g,
                    citationUuid: i?.citationUuid ?? void 0,
                    sourceType: function(a) {
                        switch (a?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(i),
                    feedback: n,
                    selectedFeedback: null == l ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[l],
                    entrypoint: o,
                    target: "explainer" === m || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === c ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: f
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === c && j(a, "chatgpt_memory_citations_sidebar_open_clicked", f)
            },
            c: function(a, b) {
                "dismissed" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: i.c
                }), "shown" === b && (0, h.a)(a, d.xd, {
                    eventId: `${i.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: j
        })
    }),
    uRGy: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("zSQm");
        let f = d.s();

        function g(a) {
            if ("external_url" === a.open_behavior) return a.url ?? null;
            let b = a.offers?.find(a => !0 === a.available && a.url?.trim()) ?? a.offers?.find(a => a.url?.trim());
            return b?.url?.trim() || a.url?.trim() || null
        }
        c.d(b, {}, {
            a: g,
            b: function(a, b) {
                let c = g(a);
                if ("external_url" === a.open_behavior) {
                    let d = f.safeParse(c);
                    return d.success && (b?.type !== "product_entity" || Array.isArray(b.safe_urls) && b.safe_urls.includes(a.url)) ? d.data : null
                }
                return c ? (0, e.a)(c) ?? null : null
            }
        })
    }),
    r21w: (function(a, b, c) {
        c.d(b, {
            a: () => g
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");

        function g(a) {
            let b, c, g, h, i = (0, e.c)(8);
            return i[0] !== a ? ({
                className: b,
                ...c
            } = a, i[0] = a, i[1] = b, i[2] = c) : (b = i[1], c = i[2]), i[3] !== b ? (g = (0, f.b)("Placeholder-M5Cmfu", b), i[3] = b, i[4] = g) : g = i[4], i[5] !== c || i[6] !== g ? (h = (0, d.jsx)("div", {
                className: g,
                ...c
            }), i[5] = c, i[6] = g, i[7] = h) : h = i[7], h
        }
    }),
    SUhA: (function(a, b, c) {
        var d = c("QosV"),
            e = c("irkb"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("tl5a"),
            i = c("CBsD"),
            j = c("kfGJ"),
            k = c("gTKF"),
            l = c("zHp1");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p, q, r, s = (0, d.c)(38),
                    {
                        src: t,
                        conversationId: u,
                        hostId: v,
                        imageAssetResolver: w,
                        shouldLoadFileDataUrl: x
                    } = a,
                    y = (0, e.c)(),
                    z = (0, f.x)(h.H, u),
                    A = v ?? z ?? j.a,
                    B = (0, j.c)(A);
                s[0] !== u ? (b = null == u ? null : {
                    kind: "app-server",
                    conversationId: u
                }, s[0] = u, s[1] = b) : b = s[1];
                let C = (0, f.x)(k.threadExecutorTargetByThread$, b),
                    D = C?.hostId === A ? C.environmentId : void 0,
                    [E, F] = (0, g.useState)(null);
                s[2] !== t ? (c = t.trim(), s[2] = t, s[3] = c) : c = s[3];
                let G = c.length > 0,
                    H = G && (0, l.i)(t) ? t : "",
                    {
                        dataUrl: I,
                        src: J,
                        isLoading: K,
                        isError: L,
                        loadSource: M,
                        loadTiming: N,
                        imageCacheHit: O,
                        isShowingCachedImage: P,
                        imageCheck: Q,
                        refetch: R,
                        deleted: S
                    } = (0, l.m)(H, w);
                s[4] !== G || s[5] !== B.id || s[6] !== B.kind || s[7] !== A || s[8] !== t ? (m = G ? (0, i.b)(t) : null, "local" === B.kind && B.id, n = null, s[4] = G, s[5] = B.id, s[6] = B.kind, s[7] = A, s[8] = t, s[9] = m, s[10] = n) : (m = s[9], n = s[10]);
                let T = n,
                    U = E?.src === t && E.environmentId === D ? E : null,
                    V = U?.dataUrl ?? null,
                    W = G ? J ?? T ?? (null != m || H ? V : t) : null;
                s[11] !== m || s[12] !== u || s[13] !== T || s[14] !== D || s[15] !== A || s[16] !== y || s[17] !== x || s[18] !== t ? (o = () => {
                    if (null == m || null != T && !x) return;
                    let a = !1;
                    return F({
                        src: t,
                        dataUrl: null,
                        environmentId: D,
                        isLoading: !0
                    }), (0, i.e)(m, A, y, void 0, u, D).then(b => {
                        a || F({
                            src: t,
                            dataUrl: b,
                            environmentId: D,
                            isLoading: !1
                        })
                    }), () => {
                        a = !0
                    }
                }, p = [m, u, T, D, A, y, x, t], s[11] = m, s[12] = u, s[13] = T, s[14] = D, s[15] = A, s[16] = y, s[17] = x, s[18] = t, s[19] = o, s[20] = p) : (o = s[19], p = s[20]), (0, g.useEffect)(o, p), s[21] !== I || s[22] !== V || s[23] !== t ? (q = I ?? V ?? (t.startsWith("data:image/") ? t : null), s[21] = I, s[22] = V, s[23] = t, s[24] = q) : q = s[24];
                let X = I ?? V ?? W,
                    Y = K || null != m && null == T && (null == U || U.isLoading),
                    Z = !!H && L;
                return s[25] !== S || s[26] !== O || s[27] !== Q || s[28] !== P || s[29] !== M || s[30] !== N || s[31] !== W || s[32] !== R || s[33] !== q || s[34] !== X || s[35] !== Y || s[36] !== Z ? (r = {
                    dataUrl: q,
                    previewSrc: W,
                    downloadSrc: X,
                    isLoading: Y,
                    isError: Z,
                    loadSource: M,
                    loadTiming: N,
                    imageCacheHit: O,
                    isShowingCachedImage: P,
                    imageCheck: Q,
                    refetch: R,
                    deleted: S
                }, s[25] = S, s[26] = O, s[27] = Q, s[28] = P, s[29] = M, s[30] = N, s[31] = W, s[32] = R, s[33] = q, s[34] = X, s[35] = Y, s[36] = Z, s[37] = r) : r = s[37], r
            }
        })
    }),
    uzkw: (function(a, b, c) {
        var d = c("Kwur");
        c.d(b, {}, {
            a: function(a) {
                let {
                    connectorId: b,
                    conversationId: c,
                    eventType: e,
                    expectedIdentity: f,
                    messageId: g,
                    pluginId: h,
                    productSurface: i,
                    suggestionMessageId: j
                } = a;
                d.Request.safePost("/unified_user_signals", {
                    expectedIdentity: f,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: i,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: c,
                                message_id: g
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: b ?? "",
                                plugin_id: h,
                                suggestion_message_id: j,
                                event_type: e
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    })
};