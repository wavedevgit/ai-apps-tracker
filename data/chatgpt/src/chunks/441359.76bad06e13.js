export const __rspack_esm_ids = [441359];
export const __webpack_modules__ = {
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
    ydi1: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    LSqx: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    LyCo: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    bdOJ: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    ty1V: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("Fc3g"),
            f = c("yAzs"),
            g = c("zWxU"),
            h = c("lVCP"),
            i = c("Zu17"),
            j = c("k5JT"),
            k = c("WQq2"),
            l = c("duD4"),
            m = c("kUVq"),
            n = c("ABep"),
            o = Object.defineProperty,
            p = (a, b) => o(a, "name", {
                value: b,
                configurable: !0
            });

        function q(a, b) {
            return d.useReducer((a, c) => b[a][c] ?? a, a)
        }
        p(q, "useStateMachine");
        var r = "ScrollArea",
            [s, t] = (0, g.a)(r),
            [u, v] = s(r),
            w = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    type: f = "hover",
                    dir: g,
                    scrollHideDelay: i = 600,
                    ...k
                } = a, [l, m] = d.useState(null), [o, p] = d.useState(null), [q, r] = d.useState(null), [s, t] = d.useState(null), [v, w] = d.useState(null), [x, y] = d.useState(0), [z, A] = d.useState(0), [B, C] = d.useState(!1), [D, E] = d.useState(!1), F = (0, h.b)(b, m), G = (0, j.useDirection)(g);
                return (0, n.jsx)(u, {
                    scope: c,
                    type: f,
                    dir: G,
                    scrollHideDelay: i,
                    scrollArea: l,
                    viewport: o,
                    onViewportChange: p,
                    content: q,
                    onContentChange: r,
                    scrollbarX: s,
                    onScrollbarXChange: t,
                    scrollbarXEnabled: B,
                    onScrollbarXEnabledChange: C,
                    scrollbarY: v,
                    onScrollbarYChange: w,
                    scrollbarYEnabled: D,
                    onScrollbarYEnabledChange: E,
                    onCornerWidthChange: y,
                    onCornerHeightChange: A,
                    children: (0, n.jsx)(e.a.div, {
                        dir: G,
                        ...k,
                        ref: F,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": x + "px",
                            "--radix-scroll-area-corner-height": z + "px",
                            ...a.style
                        }
                    })
                })
            }, "ScrollArea")),
            x = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    children: f,
                    nonce: g,
                    ...i
                } = a, j = v("ScrollAreaViewport", c), k = d.useRef(null), l = (0, h.b)(b, k, j.onViewportChange);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(y, {
                        nonce: g
                    }), (0, n.jsx)(e.a.div, {
                        "data-radix-scroll-area-viewport": "",
                        ...i,
                        ref: l,
                        style: {
                            overflowX: j.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: j.scrollbarYEnabled ? "scroll" : "hidden",
                            ...a.style
                        },
                        children: (0, n.jsx)("div", {
                            ref: j.onContentChange,
                            style: {
                                minWidth: "100%",
                                display: "table"
                            },
                            children: f
                        })
                    })]
                })
            }, "ScrollAreaViewport")),
            y = d.memo(p(function({
                nonce: a
            }) {
                return (0, n.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: a
                })
            }, "ScrollAreaViewportStyle"), (a, b) => a.nonce === b.nonce),
            z = "ScrollAreaScrollbar",
            A = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), {
                    onScrollbarXEnabledChange: g,
                    onScrollbarYEnabledChange: h
                } = f, i = "horizontal" === a.orientation;
                return d.useEffect(() => (i ? g(!0) : h(!0), () => {
                    i ? g(!1) : h(!1)
                }), [i, g, h]), "hover" === f.type ? (0, n.jsx)(B, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "scroll" === f.type ? (0, n.jsx)(C, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "auto" === f.type ? (0, n.jsx)(D, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "always" === f.type ? (0, n.jsx)(E, {
                    ...e,
                    ref: b,
                    "data-state": "visible"
                }) : null
            }, "ScrollAreaScrollbar")),
            B = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), [h, i] = d.useState(!1);
                return d.useEffect(() => {
                    let a = g.scrollArea,
                        b = 0;
                    if (a) {
                        let c = p(() => {
                                window.clearTimeout(b), i(!0)
                            }, "handlePointerEnter"),
                            d = p(() => {
                                b = window.setTimeout(() => i(!1), g.scrollHideDelay)
                            }, "handlePointerLeave");
                        return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
                            window.clearTimeout(b), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d)
                        }
                    }
                }, [g.scrollArea, g.scrollHideDelay]), (0, n.jsx)(f.a, {
                    present: c || h,
                    children: (0, n.jsx)(D, {
                        "data-state": h ? "visible" : "hidden",
                        ...e,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarHover")),
            C = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), h = "horizontal" === a.orientation, i = V(() => k("SCROLL_END"), 100), [j, k] = q("hidden", {
                    hidden: {
                        SCROLL: "scrolling"
                    },
                    scrolling: {
                        SCROLL_END: "idle",
                        POINTER_ENTER: "interacting"
                    },
                    interacting: {
                        SCROLL: "interacting",
                        POINTER_LEAVE: "idle"
                    },
                    idle: {
                        HIDE: "hidden",
                        SCROLL: "scrolling",
                        POINTER_ENTER: "interacting"
                    }
                });
                return d.useEffect(() => {
                    if ("idle" === j) {
                        let a = window.setTimeout(() => k("HIDE"), g.scrollHideDelay);
                        return () => window.clearTimeout(a)
                    }
                }, [j, g.scrollHideDelay, k]), d.useEffect(() => {
                    let a = g.viewport,
                        b = h ? "scrollLeft" : "scrollTop";
                    if (a) {
                        let c = a[b],
                            d = p(() => {
                                let d = a[b];
                                c !== d && (k("SCROLL"), i()), c = d
                            }, "handleScroll");
                        return a.addEventListener("scroll", d), () => a.removeEventListener("scroll", d)
                    }
                }, [g.viewport, h, k, i]), (0, n.jsx)(f.a, {
                    present: c || "hidden" !== j,
                    children: (0, n.jsx)(E, {
                        "data-state": "hidden" === j ? "hidden" : "visible",
                        ...e,
                        ref: b,
                        onPointerEnter: (0, m.a)(a.onPointerEnter, () => k("POINTER_ENTER")),
                        onPointerLeave: (0, m.a)(a.onPointerLeave, () => k("POINTER_LEAVE"))
                    })
                })
            }, "ScrollAreaScrollbarScroll")),
            D = d.forwardRef(p(function(a, b) {
                let c = v(z, a.__scopeScrollArea),
                    {
                        forceMount: e,
                        ...g
                    } = a,
                    [h, i] = d.useState(!1),
                    j = "horizontal" === a.orientation,
                    k = V(() => {
                        if (c.viewport) {
                            let a = c.viewport.offsetWidth < c.viewport.scrollWidth,
                                b = c.viewport.offsetHeight < c.viewport.scrollHeight;
                            i(j ? a : b)
                        }
                    }, 10);
                return W(c.viewport, k), W(c.content, k), (0, n.jsx)(f.a, {
                    present: e || h,
                    children: (0, n.jsx)(E, {
                        "data-state": h ? "visible" : "hidden",
                        ...g,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarAuto")),
            E = d.forwardRef(p(function(a, b) {
                let {
                    orientation: c = "vertical",
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), g = d.useRef(null), h = d.useRef(0), [i, j] = d.useState({
                    content: 0,
                    viewport: 0,
                    scrollbar: {
                        size: 0,
                        paddingStart: 0,
                        paddingEnd: 0
                    }
                }), k = O(i.viewport, i.content), l = {
                    ...e,
                    sizes: i,
                    onSizesChange: j,
                    hasThumb: !!(k > 0 && k < 1),
                    onThumbChange: p(a => g.current = a, "onThumbChange"),
                    onThumbPointerUp: p(() => h.current = 0, "onThumbPointerUp"),
                    onThumbPointerDown: p(a => h.current = a, "onThumbPointerDown")
                };

                function m(a, b) {
                    return Q(a, h.current, i, b)
                }
                return (p(m, "getScrollPosition"), "horizontal" === c) ? (0, n.jsx)(F, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollLeft, i, f.dir);
                            g.current.style.transform = `translate3d(${a}px, 0, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = m(a, f.dir))
                    }
                }) : "vertical" === c ? (0, n.jsx)(G, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollTop, i);
                            g.current.style.transform = `translate3d(0, ${a}px, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollTop = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollTop = m(a))
                    }
                }) : null
            }, "ScrollAreaScrollbarVisible")),
            F = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarXChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "horizontal",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        bottom: 0,
                        left: "rtl" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        right: "ltr" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        "--radix-scroll-area-thumb-width": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.x),
                    onDragScroll: b => a.onDragScroll(b.x),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollLeft + b.deltaX;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollWidth,
                            viewport: g.viewport.offsetWidth,
                            scrollbar: {
                                size: k.current.clientWidth,
                                paddingStart: N(i.paddingLeft),
                                paddingEnd: N(i.paddingRight)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarX")),
            G = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarYChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "vertical",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        top: 0,
                        right: "ltr" === g.dir ? 0 : void 0,
                        left: "rtl" === g.dir ? 0 : void 0,
                        bottom: "var(--radix-scroll-area-corner-height)",
                        "--radix-scroll-area-thumb-height": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.y),
                    onDragScroll: b => a.onDragScroll(b.y),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollTop + b.deltaY;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollHeight,
                            viewport: g.viewport.offsetHeight,
                            scrollbar: {
                                size: k.current.clientHeight,
                                paddingStart: N(i.paddingTop),
                                paddingEnd: N(i.paddingBottom)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarY")),
            [H, I] = s(z),
            J = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    sizes: f,
                    hasThumb: g,
                    onThumbChange: j,
                    onThumbPointerUp: k,
                    onThumbPointerDown: l,
                    onThumbPositionChange: o,
                    onDragScroll: q,
                    onWheelScroll: r,
                    onResize: s,
                    ...t
                } = a, u = v(z, c), [w, x] = d.useState(null), y = (0, h.b)(b, x), A = d.useRef(null), B = d.useRef(""), C = u.viewport, D = f.content - f.viewport, E = (0, i.a)(r), F = (0, i.a)(o), G = V(s, 10);

                function I(a) {
                    A.current && q({
                        x: (a.clientX - A.current.left) * w.offsetWidth / A.current.width,
                        y: (a.clientY - A.current.top) * w.offsetHeight / A.current.height
                    })
                }
                return p(I, "handleDragScroll"), d.useEffect(() => {
                    let a = p(a => {
                        let b = a.target;
                        w?.contains(b) && E(a, D)
                    }, "handleWheel");
                    return document.addEventListener("wheel", a, {
                        passive: !1
                    }), () => document.removeEventListener("wheel", a, {
                        passive: !1
                    })
                }, [C, w, D, E]), d.useEffect(F, [f, F]), W(w, G), W(u.content, G), (0, n.jsx)(H, {
                    scope: c,
                    scrollbar: w,
                    hasThumb: g,
                    onThumbChange: (0, i.a)(j),
                    onThumbPointerUp: (0, i.a)(k),
                    onThumbPositionChange: F,
                    onThumbPointerDown: (0, i.a)(l),
                    children: (0, n.jsx)(e.a.div, {
                        ...t,
                        ref: y,
                        style: {
                            position: "absolute",
                            ...t.style
                        },
                        onPointerDown: (0, m.a)(a.onPointerDown, a => {
                            0 === a.button && (a.target.setPointerCapture(a.pointerId), A.current = w.getBoundingClientRect(), B.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", u.viewport && (u.viewport.style.scrollBehavior = "auto"), I(a))
                        }),
                        onPointerMove: (0, m.a)(a.onPointerMove, I),
                        onPointerUp: (0, m.a)(a.onPointerUp, a => {
                            let b = a.target;
                            b.hasPointerCapture(a.pointerId) && b.releasePointerCapture(a.pointerId), document.body.style.webkitUserSelect = B.current, u.viewport && (u.viewport.style.scrollBehavior = ""), A.current = null
                        })
                    })
                })
            }, "ScrollAreaScrollbarImpl")),
            K = "ScrollAreaThumb",
            L = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...d
                } = a, e = I(K, a.__scopeScrollArea);
                return (0, n.jsx)(f.a, {
                    present: c || e.hasThumb,
                    children: (0, n.jsx)(M, {
                        ref: b,
                        ...d
                    })
                })
            }, "ScrollAreaThumb")),
            M = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    style: f,
                    ...g
                } = a, i = v(K, c), j = I(K, c), {
                    onThumbPositionChange: k
                } = j, l = (0, h.b)(b, j.onThumbChange), o = d.useRef(void 0), q = V(() => {
                    o.current && (o.current(), o.current = void 0)
                }, 100);
                return d.useEffect(() => {
                    let a = i.viewport;
                    if (a) {
                        let b = p(() => {
                            q(), o.current || (o.current = U(a, k), k())
                        }, "handleScroll");
                        return k(), a.addEventListener("scroll", b), () => {
                            a.removeEventListener("scroll", b), o.current?.(), o.current = void 0
                        }
                    }
                }, [i.viewport, q, k]), (0, n.jsx)(e.a.div, {
                    "data-state": j.hasThumb ? "visible" : "hidden",
                    ...g,
                    ref: l,
                    style: {
                        width: "var(--radix-scroll-area-thumb-width)",
                        height: "var(--radix-scroll-area-thumb-height)",
                        ...f
                    },
                    onPointerDownCapture: (0, m.a)(a.onPointerDownCapture, a => {
                        let b = a.target.getBoundingClientRect(),
                            c = j.scrollbar,
                            d = c.getBoundingClientRect(),
                            e = (a.clientX - b.left) * c.offsetWidth / d.width,
                            f = (a.clientY - b.top) * c.offsetHeight / d.height;
                        j.onThumbPointerDown({
                            x: e,
                            y: f
                        })
                    }),
                    onPointerUp: (0, m.a)(a.onPointerUp, j.onThumbPointerUp)
                })
            }, "ScrollAreaThumbImpl"));

        function N(a) {
            return a ? parseInt(a, 10) : 0
        }

        function O(a, b) {
            let c = a / b;
            return isNaN(c) ? 0 : c
        }

        function P(a) {
            let b = O(a.viewport, a.content),
                c = a.scrollbar.paddingStart + a.scrollbar.paddingEnd;
            return Math.max((a.scrollbar.size - c) * b, 18)
        }

        function Q(a, b, c, d = "ltr") {
            let e = P(c),
                f = b || e / 2,
                g = c.scrollbar.paddingStart + f,
                h = c.scrollbar.size - c.scrollbar.paddingEnd - (e - f),
                i = c.content - c.viewport;
            return S([g, h], "ltr" === d ? [0, i] : [-1 * i, 0])(a)
        }

        function R(a, b, c = "ltr") {
            let d = P(b),
                e = b.scrollbar.paddingStart + b.scrollbar.paddingEnd,
                f = b.scrollbar.size - e,
                g = b.content - b.viewport,
                h = (0, l.a)(a, "ltr" === c ? [0, g] : [-1 * g, 0]);
            return S([0, g], [0, f - d])(h)
        }

        function S(a, b) {
            return c => {
                if (a[0] === a[1] || b[0] === b[1]) return b[0];
                let d = (b[1] - b[0]) / (a[1] - a[0]);
                return b[0] + d * (c - a[0])
            }
        }

        function T(a, b) {
            return a > 0 && a < b
        }
        p(N, "toInt"), p(O, "getThumbRatio"), p(P, "getThumbSize"), p(Q, "getScrollPositionFromPointer"), p(R, "getThumbOffsetFromScroll"), p(S, "linearScale"), p(T, "isScrollingWithinScrollbarBounds");
        var U = p((a, b = () => {}) => {
            let c = {
                    left: a.scrollLeft,
                    top: a.scrollTop
                },
                d = 0;
            return (p(function e() {
                let f = {
                        left: a.scrollLeft,
                        top: a.scrollTop
                    },
                    g = c.left !== f.left,
                    h = c.top !== f.top;
                (g || h) && b(), c = f, d = window.requestAnimationFrame(e)
            }, "loop"))(), () => window.cancelAnimationFrame(d)
        }, "addUnlinkedScrollListener");

        function V(a, b) {
            let c = (0, i.a)(a),
                e = d.useRef(0);
            return d.useEffect(() => () => window.clearTimeout(e.current), []), d.useCallback(() => {
                window.clearTimeout(e.current), e.current = window.setTimeout(c, b)
            }, [c, b])
        }

        function W(a, b) {
            let c = (0, i.a)(b);
            (0, k.a)(() => {
                let b = 0;
                if (a) {
                    let d = new ResizeObserver(() => {
                        cancelAnimationFrame(b), b = window.requestAnimationFrame(c)
                    });
                    return d.observe(a), () => {
                        window.cancelAnimationFrame(b), d.unobserve(a)
                    }
                }
            }, [a, c])
        }
        p(V, "useDebounceCallback"), p(W, "useResizeObserver"), c.d(b, {}, {
            a: w,
            b: A,
            c: L,
            d: x
        })
    })
};